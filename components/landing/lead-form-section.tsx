'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Send, X } from 'lucide-react'
import { BrandButton } from './primitives'

const steps = ['Contact', 'Entreprise']
const leadEmail = 'contact@yx-automation.fr'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  role: string
  sector: string
  companySize: string
  website: string
  tools: string
  repetitiveTasks: string
  weeklyHoursLost: string
  urgency: string
  message: string
}

const initialData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  sector: '',
  companySize: '',
  website: '',
  tools: '',
  repetitiveTasks: '',
  weeklyHoursLost: '',
  urgency: '',
  message: '',
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string
  name: keyof FormData
  value: string
  onChange: (name: keyof FormData, value: string) => void
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label className="grid gap-2 text-[13px] font-bold text-ink">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(name, event.target.value)}
        className="h-12 rounded-xl border border-black/10 bg-white px-4 text-[14px] font-medium text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
      />
    </label>
  )
}

function TextArea({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder,
}: {
  label: string
  name: keyof FormData
  value: string
  onChange: (name: keyof FormData, value: string) => void
  required?: boolean
  placeholder?: string
}) {
  return (
    <label className="grid gap-2 text-[13px] font-bold text-ink">
      {label}
      <textarea
        name={name}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(name, event.target.value)}
        rows={4}
        className="resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-[14px] font-medium leading-relaxed text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
      />
    </label>
  )
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string
  name: keyof FormData
  value: string
  onChange: (name: keyof FormData, value: string) => void
  options: string[]
  required?: boolean
}) {
  return (
    <label className="grid gap-2 text-[13px] font-bold text-ink">
      {label}
      <select
        name={name}
        required={required}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        className="h-12 rounded-xl border border-black/10 bg-white px-4 text-[14px] font-medium text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
      >
        <option value="">Sélectionner</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export function LeadFormSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(initialData)
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step])
  const isCurrentStepValid = useMemo(() => {
    if (step === 0) {
      return Boolean(data.firstName && data.lastName && data.email && data.phone)
    }

    if (step === 1) {
      return Boolean(data.company && data.sector && data.companySize)
    }

    return true
  }, [data, step])

  function updateField(name: keyof FormData, value: string) {
    setData((current) => ({ ...current, [name]: value }))
  }

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null
      const trigger = target?.closest('a[href="#diagnostic-form"]')

      if (!trigger) {
        return
      }

      event.preventDefault()
      setIsOpen(true)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  function createEmailBody() {
    return [
      'Nouvelle demande Atelier IA Terrain',
      '',
      `Nom: ${data.firstName} ${data.lastName}`,
      `Email: ${data.email}`,
      `Téléphone: ${data.phone}`,
      '',
      `Entreprise: ${data.company}`,
      `Rôle: ${data.role}`,
      `Secteur: ${data.sector}`,
      `Taille: ${data.companySize}`,
      `Site: ${data.website || 'Non renseigné'}`,
      '',
      `Tâches répétitives: ${data.repetitiveTasks || 'Non renseigné'}`,
      `Message: ${data.message || 'Non renseigné'}`,
    ].join('\n')
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const endpoint = process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT
    if (endpoint) {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus('sent')
      return
    }

    const subject = encodeURIComponent('Demande de diagnostic IA - YX Automation')
    const body = encodeURIComponent(createEmailBody())
    window.location.href = `mailto:${leadEmail}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="diagnostic-form-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/55 px-4 py-5 backdrop-blur-sm"
    >
      <button
        type="button"
        aria-label="Fermer le formulaire"
        className="absolute inset-0 cursor-default"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative max-h-[92vh] w-full max-w-[1040px] overflow-y-auto rounded-[28px] bg-[#f5f8ff] p-5 shadow-[0_30px_100px_-45px_rgba(14,21,48,0.72)] ring-1 ring-white/30 sm:p-7 lg:grid lg:grid-cols-[0.78fr_1.22fr] lg:gap-8 lg:p-8">
        <button
          type="button"
          aria-label="Fermer"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white text-ink shadow-sm transition hover:bg-brand-soft hover:text-brand"
        >
          <X className="size-5" />
        </button>

          <div className="mb-7 lg:mb-0">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand">
              Demande de diagnostic
            </p>
            <h2 id="diagnostic-form-title" className="mt-3 max-w-sm text-[30px] font-bold leading-tight text-ink sm:text-[38px]">
              Qualifiez votre besoin en moins de 2 minutes.
            </h2>
            <p className="mt-4 max-w-md text-[15px] font-medium leading-[1.75] text-ink-soft">
              Ces réponses permettent d’arriver à l’appel avec le contexte utile: contact,
              entreprise et éventuelles tâches répétitives.
            </p>

            <div className="mt-7 grid gap-3">
              {steps.map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-[14px] font-semibold text-ink">
                  <span
                    className={
                      index <= step
                        ? 'flex size-7 items-center justify-center rounded-full bg-brand text-white'
                        : 'flex size-7 items-center justify-center rounded-full bg-white text-ink-soft'
                    }
                  >
                    {index < step ? <CheckCircle2 className="size-4" /> : index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-5 shadow-[0_18px_46px_-34px_rgba(14,21,48,0.32)] sm:p-6">
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-brand transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>

            <div className="mt-6">
              {step === 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Prénom" name="firstName" value={data.firstName} onChange={updateField} required />
                  <Field label="Nom" name="lastName" value={data.lastName} onChange={updateField} required />
                  <Field label="Adresse email" name="email" type="email" value={data.email} onChange={updateField} required />
                  <Field label="Téléphone" name="phone" type="tel" value={data.phone} onChange={updateField} required />
                </div>
              )}

              {step === 1 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nom de l’entreprise" name="company" value={data.company} onChange={updateField} required />
                  <Field label="Votre rôle" name="role" value={data.role} onChange={updateField} placeholder="Dirigeant, assistant, responsable..." />
                  <Field label="Secteur d’activité" name="sector" value={data.sector} onChange={updateField} required />
                  <SelectField
                    label="Taille de l’entreprise"
                    name="companySize"
                    value={data.companySize}
                    onChange={updateField}
                    required
                    options={['1 personne', '2 à 5', '6 à 10', '11 à 20', '21+']}
                  />
                  <div className="sm:col-span-2">
                    <Field label="Site web ou LinkedIn" name="website" value={data.website} onChange={updateField} placeholder="Optionnel" />
                  </div>
                  <div className="sm:col-span-2">
                    <TextArea
                      label="Liste de tâches répétitives (optionnel)"
                      name="repetitiveTasks"
                      value={data.repetitiveTasks}
                      onChange={updateField}
                      placeholder="Ex: relances, copier-coller, reporting, mails, classement..."
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => setStep((current) => Math.max(0, current - 1))}
                disabled={step === 0}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-[14px] font-bold text-ink transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40"
              >
                <ArrowLeft className="size-4" />
                Retour
              </button>

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((current) => Math.min(steps.length - 1, current + 1))}
                  disabled={!isCurrentStepValid}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 text-[14px] font-bold text-white transition hover:bg-[#0f47bd] disabled:pointer-events-none disabled:opacity-45"
                >
                  Continuer
                  <ArrowRight className="size-4" />
                </button>
              ) : (
                <BrandButton type="submit" disabled={!isCurrentStepValid} className="h-12 rounded-xl px-6 py-0 text-[14px] disabled:pointer-events-none disabled:opacity-45">
                  Envoyer la demande
                  <Send className="size-4" />
                </BrandButton>
              )}
            </div>

            {status === 'sent' && (
              <p className="mt-4 rounded-xl bg-brand-soft px-4 py-3 text-[13px] font-semibold text-brand">
                Demande prête à être envoyée. On vous contactera après réception.
              </p>
            )}
          </form>
      </div>
    </div>
  )
}
