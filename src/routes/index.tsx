import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  Sparkles,
  CheckCircle2,
  Clock,
  Shuffle,
  AlertTriangle,
  HelpCircle,
  Users,
  FlaskConical,
  MessagesSquare,
  ArrowRight,
  Target,
  Rocket,
  ShieldCheck,
  UserCircle2,
  FolderOpen,
  ClipboardCheck,
  UserCog,
  LineChart,
  Lock,
} from "lucide-react";
import mascot from "@/assets/mascot.png";
import mascotSmall from "@/assets/mascot-small.png";
import { Button } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import { Badge } from "@/components/site/Badge";
import { IconBubble } from "@/components/site/IconBubble";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier IA utile à distance — YX Automation" },
      {
        name: "description",
        content:
          "Deux demi-journées à distance pour repérer les tâches répétitives, tester des usages concrets d'IA et mettre en place une méthode que votre équipe peut vraiment utiliser.",
      },
      { property: "og:title", content: "Atelier IA utile à distance — YX Automation" },
      {
        property: "og:description",
        content: "Une IA simple, utile et maîtrisée pour vos équipes. 690 € HT.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-extrabold tracking-tight text-[#2148ff]">YX</span>
      <span className="text-[11px] font-bold tracking-[0.25em] text-[#2148ff]/80">AUTOMATION</span>
    </div>
  );
}

function Check() {
  return <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2148ff]" strokeWidth={2.5} />;
}

function Index() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden hero-gradient">
        {/* halo */}
        <div className="pointer-events-none absolute right-[2%] top-[12%] h-[640px] w-[640px] rounded-full halo-glow blur-2xl" />

        <div className="relative mx-auto flex w-full max-w-[1240px] items-center justify-between px-5 pt-6 md:px-8 md:pt-8">
          <Logo />
          <Button variant="primary" size="md" leftIcon={<Calendar className="h-4 w-4" />}>
            Réserver un échange
          </Button>
        </div>

        <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 px-5 pb-24 pt-10 md:px-8 md:pb-32 md:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
          <div className="animate-fade-up">
            <Badge tone="blue" className="shadow-[0_8px_24px_-8px_rgb(33_72_255/0.5)]">
              <Sparkles className="h-3.5 w-3.5" /> Atelier IA utile à distance
            </Badge>

            <h1 className="mt-7 text-[34px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#0b1437] sm:text-[40px] lg:text-[44px] xl:text-[48px]">
              Faites gagner du temps
              <br />à vos équipes grâce
              <br />à une <span className="text-[#2148ff]">IA simple,</span>
              <br />
              <span className="text-[#2148ff]">utile et maîtrisée.</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-base leading-relaxed text-[#1b2647]/75 md:text-[17px]">
              Deux demi-journées à distance pour repérer les tâches répétitives,
              tester des usages concrets et mettre en place une méthode que votre
              équipe peut vraiment utiliser.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" leftIcon={<Calendar className="h-5 w-5" />}>
                Réserver un échange
              </Button>
              <div className="rounded-2xl border border-[#e6ecff] bg-white px-6 py-3 shadow-[var(--shadow-soft)]">
                <div className="text-2xl font-extrabold leading-none text-[#0b1437]">
                  690 € <span className="text-sm font-bold align-top text-[#1b2647]/60">HT</span>
                </div>
                <div className="mt-1 text-xs font-medium text-[#1b2647]/60">Offre unique</div>
              </div>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#0b1437]">
              {["À distance", "TPE / PME", "Résultats concrets"].map((t, i) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#2148ff]" strokeWidth={2.5} />
                  {t}
                  {i < 2 && <span className="ml-4 h-1 w-1 rounded-full bg-[#1b2647]/30" />}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute inset-0 -z-10 m-auto h-[80%] w-[80%] rounded-full bg-white/30 blur-3xl" />
            <img
              src={mascot}
              alt="Mascotte IA"
              width={1024}
              height={1024}
              className="relative w-full animate-float-slow drop-shadow-[0_30px_40px_rgba(11,20,55,0.25)]"
            />
          </div>
        </div>
      </header>

      {/* PROBLÈME */}
      <Section className="-mt-16 pb-20 md:pb-28">
        <Card className="p-8 md:p-14">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-[#0b1437] md:text-[34px]">
            Le problème aujourd'hui
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: "Trop de temps perdu", desc: "Vos équipes passent des heures sur des tâches répétitives à faible valeur ajoutée." },
              { icon: Shuffle, title: "Des essais au hasard", desc: "Vous testez des outils sans savoir comment les utiliser efficacement." },
              { icon: AlertTriangle, title: "Peur des erreurs", desc: "L'IA fait peur, on craint les erreurs, les « faux résultats » et les risques." },
              { icon: HelpCircle, title: "Manque de méthode", desc: "Sans cadre clair, pas d'usage durable ni d'autonomie dans l'équipe." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <Icon className="h-12 w-12 text-[#2148ff]" strokeWidth={1.8} />
                <h3 className="mt-5 text-base font-extrabold text-[#0b1437]">{title}</h3>
                <p className="mt-3 max-w-[230px] text-sm leading-relaxed text-[#1b2647]/65">{desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* DÉROULÉ */}
      <Section className="pb-20 md:pb-28">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-[#0b1437] md:text-[30px]">
          Un atelier <span className="text-[#2148ff]">pratique</span> en 2 étapes + une phase de test
        </h2>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <StepCard
            number={1}
            tone="soft"
            icon={<Users className="h-7 w-7" />}
            title="Session 1 – 3h"
            items={["Comprendre l'IA simplement", "Repérer les tâches répétitives", "Identifier 2 à 3 cas d'usage concrets à tester"]}
          />
          <Arrow />
          <StepCard
            tone="green"
            icon={<FlaskConical className="h-7 w-7" />}
            iconTone="green"
            title="Phase de test"
            subtitle="2 à 3 semaines"
            description="Vous testez les usages définis sur vos vraies tâches, avec vos équipes."
          />
          <Arrow />
          <StepCard
            number={2}
            tone="soft"
            icon={<MessagesSquare className="h-7 w-7" />}
            title="Session 2 – 3h"
            items={["Retour d'expérience", "Corriger et améliorer", "Créer une méthode simple et un mini système réutilisable"]}
          />
        </div>
      </Section>

      {/* RÉSULTATS + PRIX */}
      <Section className="pb-20 md:pb-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.55fr_1fr]">
          <Card className="p-8 md:p-12">
            <h2 className="text-center text-xl font-extrabold tracking-tight text-[#0b1437] md:text-[26px]">
              À la fin de l'atelier, vous repartez avec :
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-6">
              {[
                { icon: Target, label: "Les tâches à automatiser en priorité" },
                { icon: Rocket, label: "2 à 3 cas d'usage concrets" },
                { icon: ShieldCheck, label: "Une méthode simple de vérification" },
                { icon: UserCircle2, label: "Une équipe plus autonome et confiante" },
                { icon: FolderOpen, label: "Une base de travail réutilisable" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <Icon className="h-11 w-11 text-[#2148ff]" strokeWidth={1.8} />
                  <p className="mt-4 max-w-[140px] text-sm font-semibold leading-snug text-[#0b1437]">{label}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card tone="blue" className="relative p-8 md:p-10">
            <div className="relative z-10 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/85">
                Atelier IA utile à distance
              </p>
              <div className="mt-5 text-[56px] font-extrabold leading-none">
                690 € <span className="text-xl font-bold align-top">HT</span>
              </div>
              <p className="mt-2 text-sm font-medium text-white/80">Offre unique</p>
              <div className="mt-7">
                <Button variant="white" size="lg" leftIcon={<Calendar className="h-5 w-5" />} className="w-full">
                  Réserver un échange
                </Button>
              </div>
              <p className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-white/80">
                <Lock className="h-3.5 w-3.5" /> Paiement par virement – Facture fournie
              </p>
            </div>
            <img
              src={mascotSmall}
              alt=""
              aria-hidden
              loading="lazy"
              width={816}
              height={816}
              className="pointer-events-none absolute right-[-78px] bottom-[92px] z-20 h-[255px] w-auto origin-bottom-right rotate-[-13deg] animate-float-slow drop-shadow-2xl"
            />
          </Card>
        </div>
      </Section>

      {/* ACCOMPAGNEMENT */}
      <Section className="pb-12">
        <Card tone="soft" className="p-6 md:p-8">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="flex items-start gap-4">
              <IconBubble tone="white" size="md">
                <Rocket className="h-6 w-6" strokeWidth={2} />
              </IconBubble>
              <div>
                <h3 className="text-base font-extrabold text-[#0b1437]">Un accompagnement complémentaire</h3>
                <p className="mt-1 text-sm text-[#1b2647]/65">
                  ou une mise en place peuvent être proposés ensuite selon vos besoins.
                </p>
              </div>
            </div>
            {[
              { icon: ClipboardCheck, title: "Mise en place", desc: "Sur devis" },
              { icon: UserCog, title: "Accompagnement ponctuel", desc: "Sur devis" },
              { icon: LineChart, title: "Suivi mensuel léger", desc: "100 à 150 € HT / mois" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 text-[#2148ff]" strokeWidth={2} />
                <div>
                  <div className="text-sm font-extrabold text-[#0b1437]">{title}</div>
                  <div className="text-xs text-[#1b2647]/65">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* CTA FINAL */}
      <section className="relative mt-10 overflow-hidden bg-[#2148ff] py-10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
          <div className="flex items-start gap-4 text-white">
            <Rocket className="mt-1 h-7 w-7 shrink-0" strokeWidth={2} />
            <div>
              <h3 className="text-lg font-extrabold md:text-xl">
                Et si on voyait ensemble ce que l'IA peut changer chez vous ?
              </h3>
              <p className="mt-1 text-sm text-white/85">
                Réservez un échange de 20 minutes, sans engagement.
              </p>
            </div>
          </div>
          <Button variant="white" size="lg" leftIcon={<Calendar className="h-5 w-5" />}>
            Réserver un échange
          </Button>
        </div>
      </section>
    </main>
  );
}

interface StepProps {
  number?: number;
  tone: "soft" | "green";
  icon: React.ReactNode;
  iconTone?: "blue-solid" | "green";
  title: string;
  subtitle?: string;
  description?: string;
  items?: string[];
}

function StepCard({ number, tone, icon, iconTone = "blue-solid", title, subtitle, description, items }: StepProps) {
  const bg =
    tone === "green"
      ? "bg-[#eefbf3] border-[#cfeedb]"
      : "bg-[#f4f7ff] border-[#e6ecff]";
  return (
    <div
      className={`relative rounded-3xl border ${bg} px-7 pt-12 pb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]`}
    >
      {number && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2148ff] text-base font-extrabold text-white shadow-[0_8px_20px_-6px_rgb(33_72_255/0.6)]">
            {number}
          </span>
        </div>
      )}
      {tone === "green" && !number && (
        <div className="absolute -top-7 left-1/2 -translate-x-1/2">
          <IconBubble tone="green" size="lg">
            <FlaskConical className="h-7 w-7" strokeWidth={2} />
          </IconBubble>
        </div>
      )}
      <div className="flex flex-col items-center text-center">
        {tone === "soft" && (
          <IconBubble tone={iconTone} size="md" className="-mt-2">
            {icon}
          </IconBubble>
        )}
        <h3 className="mt-5 text-lg font-extrabold text-[#0b1437]">{title}</h3>
        {subtitle && <p className="mt-2 text-base font-extrabold text-[#2bb673]">{subtitle}</p>}
        {description && <p className="mt-3 text-sm leading-relaxed text-[#1b2647]/70">{description}</p>}
        {items && (
          <ul className="mt-5 space-y-2.5 text-left">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-2.5 text-sm text-[#1b2647]/80">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2148ff]" strokeWidth={2.5} />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <ArrowRight className="h-6 w-6 text-[#2148ff]" strokeWidth={2.5} />
    </div>
  );
}
