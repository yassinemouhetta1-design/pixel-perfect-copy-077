'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, Calculator } from 'lucide-react'
import { BrandButton, Section } from './primitives'
import { Reveal } from './reveal'

function formatNumber(value: number) {
  return new Intl.NumberFormat('fr-FR', {
    maximumFractionDigits: 0,
  }).format(Math.round(value))
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  onChange: (value: number) => void
}) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <label className="text-[15px] font-semibold text-ink sm:text-[17px]">{label}</label>
        <span className="font-mono text-[15px] font-bold text-ink sm:text-[17px]">
          {formatNumber(value)} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ink [&::-webkit-slider-thumb]:shadow-[0_6px_14px_-8px_rgba(14,21,48,0.7)]"
      />
    </div>
  )
}

export function SavingsSimulator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(3)
  const [collaborators, setCollaborators] = useState(2)
  const [hourlyRate, setHourlyRate] = useState(30)

  const results = useMemo(() => {
    const monthlyMargin = hoursPerWeek * collaborators * hourlyRate * 4
    const yearlyMargin = monthlyMargin * 12
    const yearlyHours = hoursPerWeek * collaborators * 52

    return {
      monthlyMargin,
      yearlyMargin,
      yearlyHours,
    }
  }, [collaborators, hourlyRate, hoursPerWeek])

  return (
    <Section id="simulateur" className="py-5 lg:py-7">
      <Reveal>
        <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_60px_-42px_rgba(33,72,255,0.32)] ring-1 ring-black/[0.04] sm:rounded-[34px]">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-9 lg:p-12">
              <div className="mb-8 flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Calculator className="size-6" />
                </span>
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand">
                    Simulateur de gain de temps
                  </p>
                  <h2 className="mt-2 text-[28px] font-bold leading-tight tracking-[-0.03em] text-ink sm:text-[36px]">
                    Estimez le temps que vos tâches répétitives vous font perdre.
                  </h2>
                </div>
              </div>

              <div className="grid gap-8">
                <SliderRow
                  label="Heures perdues par semaine"
                  value={hoursPerWeek}
                  min={1}
                  max={10}
                  step={1}
                  unit="h"
                  onChange={setHoursPerWeek}
                />
                <SliderRow
                  label="Nombre de collaborateurs"
                  value={collaborators}
                  min={1}
                  max={10}
                  step={1}
                  unit="pers."
                  onChange={setCollaborators}
                />
                <SliderRow
                  label="Taux horaire moyen"
                  value={hourlyRate}
                  min={20}
                  max={40}
                  step={5}
                  unit="€"
                  onChange={setHourlyRate}
                />
              </div>
            </div>

            <div className="bg-[#f5f8ff] p-6 sm:p-9 lg:p-12">
              <div className="h-full rounded-[24px] bg-white p-6 shadow-[0_18px_46px_-34px_rgba(14,21,48,0.32)] ring-1 ring-black/[0.04] sm:p-8">
                <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#8b99b8]">
                  Gain de temps potentiel / mois
                </p>
                <p className="mt-4 font-mono text-[42px] font-bold leading-none tracking-[-0.05em] text-ink sm:text-[52px]">
                  + {formatNumber(results.monthlyMargin)} €
                </p>

                <div className="my-7 h-px bg-slate-200" />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-[14px] font-medium text-[#8b99b8]">Gain / an</p>
                    <p className="mt-2 font-mono text-[19px] font-bold text-ink">
                      + {formatNumber(results.yearlyMargin)} €
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[#8b99b8]">Temps gagné</p>
                    <p className="mt-2 font-mono text-[19px] font-bold text-ink">
                      {formatNumber(results.yearlyHours)} heures / an
                    </p>
                  </div>
                </div>

                <BrandButton href="#contact" className="mt-8 w-full rounded-xl px-6 py-5 text-[14px] uppercase tracking-[0.02em]">
                  Voir mon gain de temps
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </BrandButton>

                <p className="mt-4 text-center text-[12px] font-medium leading-relaxed text-ink-soft">
                  Estimation indicative. Le détail sera revu ensemble pendant l’entretien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
