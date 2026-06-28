import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FlaskConical,
  FolderOpen,
  HelpCircle,
  LineChart,
  Lock,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  Shuffle,
  Smile,
  Sparkles,
  Target,
  TrendingUp,
  UserCircle2,
  UserCog,
  Users,
} from "lucide-react";
import mascot from "@/assets/mascot.png";
import mascotSmall from "@/assets/mascot-small.png";
import { Badge } from "@/components/site/Badge";
import { Button } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import { IconBubble } from "@/components/site/IconBubble";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier IA Terrain — YX Automation" },
      {
        name: "description",
        content:
          "En 2 demi-journées et une phase de pratique terrain, identifiez les tâches répétitives, testez l'IA sur vos vrais cas métiers et repartez avec un plan d'action simple.",
      },
      { property: "og:title", content: "Atelier IA Terrain — YX Automation" },
      {
        property: "og:description",
        content:
          "Moins de tests au hasard. Plus de pratique utile. Atelier d'entrée à 690 € HT pour TPE et petites PME.",
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

function Index() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <header className="relative min-h-[700px] overflow-hidden hero-gradient md:min-h-[760px] lg:min-h-[840px]">
        <div className="pointer-events-none absolute right-[2%] top-[12%] h-[640px] w-[640px] rounded-full halo-glow blur-2xl" />

        <div className="relative mx-auto flex w-full max-w-[1360px] items-center justify-between px-5 pt-6 md:px-8 md:pt-8 lg:px-0">
          <Logo />
          <Button variant="primary" size="md" leftIcon={<Calendar className="h-4 w-4" />}>
            Réserver un échange
          </Button>
        </div>

        <div className="relative mx-auto grid w-full max-w-[1360px] grid-cols-1 gap-6 px-5 pb-24 pt-12 md:px-8 md:pb-28 md:pt-16 lg:grid-cols-[660px_1fr] lg:gap-0 lg:px-0 xl:grid-cols-[700px_1fr]">
          <div className="relative z-10 lg:pt-5">
            <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
              <Badge tone="blue" className="shadow-[0_8px_24px_-8px_rgb(33_72_255/0.5)]">
                <Sparkles className="h-3.5 w-3.5" /> Atelier IA Terrain
              </Badge>
            </div>

            <h1
              className="mt-7 max-w-[670px] animate-fade-up text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0b1437] sm:text-[42px] lg:text-[52px] xl:text-[58px]"
              style={{ animationDelay: "80ms" }}
            >
              Repérez où l'IA peut
              <br />
              vraiment vous faire
              <br />
              <span className="text-[#2148ff]">gagner du temps.</span>
            </h1>

            <p
              className="mt-6 max-w-[560px] animate-fade-up text-base leading-relaxed text-[#1b2647]/78 md:text-[17px]"
              style={{ animationDelay: "180ms" }}
            >
              En 2 demi-journées et une phase de pratique terrain, on vous aide à comprendre les
              bons usages de l'IA, à tester sur vos vrais cas métiers et à structurer une méthode
              simple pour la suite.
            </p>

            <p
              className="mt-4 max-w-[560px] animate-fade-up text-sm font-semibold text-[#2148ff] md:text-[15px]"
              style={{ animationDelay: "220ms" }}
            >
              Moins de tests au hasard. Plus de pratique utile.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "260ms" }}
            >
              <Button
                variant="primary"
                size="lg"
                leftIcon={<Calendar className="h-5 w-5" />}
                className="transition-transform hover:-translate-y-0.5"
              >
                Réserver un diagnostic IA gratuit
              </Button>
              <div className="rounded-2xl border border-[#e6ecff] bg-white px-6 py-3 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]">
                <div className="text-2xl font-extrabold leading-none text-[#0b1437]">
                  690 € <span className="text-sm font-bold align-top text-[#1b2647]/60">HT</span>
                </div>
                <div className="mt-1 text-xs font-medium text-[#1b2647]/60">
                  Offre d'entrée terrain
                </div>
              </div>
            </div>

            <p
              className="mt-4 animate-fade-up text-xs font-medium text-[#1b2647]/62 md:text-sm"
              style={{ animationDelay: "300ms" }}
            >
              Un premier échange pour voir si l'atelier est adapté à votre entreprise.
            </p>

            <ul
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#0b1437] animate-fade-up"
              style={{ animationDelay: "340ms" }}
            >
              {["À distance", "2 demi-journées", "TPE / petite PME"].map((t, i) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#2148ff]" strokeWidth={2.5} />
                  {t}
                  {i < 2 && <span className="ml-4 h-1 w-1 rounded-full bg-[#1b2647]/30" />}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="relative mx-auto mt-2 w-full max-w-[540px] min-w-0 animate-fade-up sm:max-w-[590px] lg:ml-[54px] lg:mr-auto lg:mt-2 lg:w-[535px] lg:max-w-none xl:ml-[80px] xl:w-[565px]"
            style={{ animationDelay: "120ms" }}
          >
            <div className="absolute inset-0 -z-10 m-auto h-[72%] w-[74%] rounded-full halo-glow blur-2xl" />
            <div className="hero-trail pointer-events-none absolute left-[18%] top-[20%] z-0 hidden rotate-[18deg] md:block" />
            <div className="hero-trail pointer-events-none absolute right-[10%] top-[24%] z-0 hidden -rotate-[18deg] md:block" />
            <span className="hero-sparkle pointer-events-none absolute left-[25%] top-[16%] z-10 hidden h-4 w-4 md:block" />
            <span className="hero-sparkle pointer-events-none absolute right-[16%] top-[21%] z-10 hidden h-3.5 w-3.5 md:block" />
            <span className="hero-sparkle pointer-events-none absolute right-[5%] top-[46%] z-10 hidden h-4 w-4 md:block" />
            <img
              src={mascot}
              alt="Mascotte IA"
              width={1024}
              height={1024}
              className="relative z-[1] w-full animate-float-slow drop-shadow-[0_30px_40px_rgba(11,20,55,0.22)]"
            />
          </div>
        </div>
      </header>

      <Section className="-mt-16 pb-20 md:pb-28">
        <Reveal>
          <Card className="p-8 md:p-14">
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-[#0b1437] md:text-[34px]">
              L'IA vous intrigue, mais vous ne savez pas encore où elle est vraiment utile.
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-center text-sm leading-relaxed text-[#1b2647]/70 md:text-base">
              Dans beaucoup de petites entreprises, les tests IA commencent sans méthode. On essaie
              un outil, on teste quelques prompts, puis on laisse tomber faute de cadre clair.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Clock,
                  title: "Trop de temps perdu",
                  desc: "Mails, relances, tableaux, comptes rendus, recherches et copier-coller prennent trop de place.",
                },
                {
                  icon: Shuffle,
                  title: "Des essais au hasard",
                  desc: "Vous testez ChatGPT ou d'autres outils sans savoir quels usages sont vraiment pertinents.",
                },
                {
                  icon: AlertTriangle,
                  title: "Peur des erreurs",
                  desc: "Sans cadre simple de vérification, les réponses de l'IA peuvent vite devenir risquées.",
                },
                {
                  icon: HelpCircle,
                  title: "Manque de méthode",
                  desc: "Vous ne savez pas quoi prioriser, quoi garder manuel et quoi vaut le coup d'être automatisé.",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 80}>
                  <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
                    <Icon
                      className="h-12 w-12 text-[#2148ff] transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.8}
                    />
                    <h3 className="mt-5 text-base font-extrabold text-[#0b1437]">{title}</h3>
                    <p className="mt-3 max-w-[230px] text-sm leading-relaxed text-[#1b2647]/65">
                      {desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section className="pb-20 md:pb-28">
        <Reveal>
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-[#0b1437] md:text-[30px]">
            Comment se passe <span className="text-[#2148ff]">l'Atelier IA Terrain</span>
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mx-auto mt-5 max-w-[760px] text-center text-sm leading-relaxed text-[#1b2647]/70 md:text-base">
            On vous montre quoi faire, vous pratiquez sur le terrain, puis on consolide ce qui
            marche.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <Reveal delay={0}>
            <StepCard
              number={1}
              tone="soft"
              icon={<Users className="h-7 w-7" />}
              title="Demi-journée 1"
              items={[
                "Présenter l'IA simplement, ses règles d'usage et les outils utiles",
                "Analyser vos documents, vos outils et vos tâches potentiellement automatisables",
                "Poser les premiers usages concrets à tester dans votre activité",
              ]}
            />
          </Reveal>
          <Arrow />
          <Reveal delay={120}>
            <StepCard
              tone="green"
              icon={<FlaskConical className="h-7 w-7" />}
              iconTone="green"
              title="Phase terrain"
              subtitle="2 à 3 semaines"
              description="Votre équipe pratique à fond sur ses vrais cas: mails, documents, relances, tableaux, comptes rendus ou réponses clients."
            />
          </Reveal>
          <Arrow />
          <Reveal delay={240}>
            <StepCard
              number={2}
              tone="soft"
              icon={<MessagesSquare className="h-7 w-7" />}
              title="Demi-journée 2"
              items={[
                "Faire le retour d'expérience sur les tests réalisés",
                "Ajuster ce qui marche, clarifier ce qui doit être gardé ou écarté",
                "Finaliser une méthode réutilisable et les prochaines étapes",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <Section className="pb-20 md:pb-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.55fr_1fr]">
          <Reveal>
            <Card className="p-8 md:p-12">
              <h2 className="text-center text-xl font-extrabold tracking-tight text-[#0b1437] md:text-[26px]">
                À la fin de l'atelier, vous repartez avec :
              </h2>
              <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-6">
                {[
                  { icon: Target, label: "Des tâches prioritaires identifiées" },
                  { icon: Rocket, label: "Des usages IA testés sur votre activité" },
                  { icon: ShieldCheck, label: "Une méthode simple pour utiliser et vérifier l'IA" },
                  { icon: UserCircle2, label: "Des premiers supports ou prompts réutilisables" },
                  { icon: FolderOpen, label: "Un plan d'action clair pour la suite" },
                ].map(({ icon: Icon, label }, i) => (
                  <Reveal key={label} delay={i * 70}>
                    <div className="group flex flex-col items-center text-center">
                      <Icon
                        className="h-11 w-11 text-[#2148ff] transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.8}
                      />
                      <p className="mt-4 max-w-[150px] text-sm font-semibold leading-snug text-[#0b1437]">
                        {label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card tone="blue" className="relative h-full overflow-hidden p-8 sm:p-10 md:p-12">
              <div className="relative z-10 sm:pr-[150px] md:pr-[200px]">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/85 sm:text-xs">
                  Atelier IA Terrain
                </p>
                <div className="mt-5 text-[64px] font-extrabold leading-none sm:text-[72px] md:text-[80px]">
                  690 € <span className="text-2xl font-bold align-top md:text-3xl">HT</span>
                </div>
                <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-white/85 md:text-base">
                  Une offre d'entrée claire pour tester l'IA sur votre terrain, sans lancer un gros
                  projet technique.
                </p>
                <div className="mt-8">
                  <Button
                    variant="white"
                    size="lg"
                    leftIcon={<Calendar className="h-5 w-5" />}
                    className="w-full sm:w-auto transition-transform hover:-translate-y-0.5"
                  >
                    Réserver un diagnostic IA gratuit
                  </Button>
                </div>
                <p className="mt-6 flex items-center gap-2 text-xs font-medium text-white/80 sm:text-sm">
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
                className="pointer-events-none absolute right-[-30px] bottom-0 z-0 hidden h-[230px] w-auto object-contain drop-shadow-2xl sm:block sm:h-[260px] md:h-[300px] lg:h-[320px]"
              />
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section className="pb-12">
        <Reveal>
          <Card tone="soft" className="p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <IconBubble tone="white" size="md">
                  <ClipboardCheck className="h-6 w-6" strokeWidth={2} />
                </IconBubble>
                <div>
                  <h3 className="text-base font-extrabold text-[#0b1437]">
                    Une offre d'entrée claire à 690 € HT
                  </h3>
                  <p className="mt-1 max-w-[720px] text-sm leading-relaxed text-[#1b2647]/65">
                    L'objectif ici est de cadrer les usages utiles, de tester sur votre terrain et
                    de voir ce qui mérite d'aller plus loin. Les suites possibles se présentent
                    ensuite, seulement si elles ont du sens.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#d8e4ff] bg-white px-5 py-4 text-sm font-semibold text-[#2148ff] shadow-[var(--shadow-soft)]">
                Pas d'upsell forcé. On commence par l'atelier.
              </div>
            </div>
          </Card>
        </Reveal>
      </Section>

      {/* SECTION RÉSULTATS / BÉNÉFICES CONCRETS */}
      <Section className="pb-20 md:pb-28">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.42fr_0.58fr]">
            <div>
              <Badge tone="blue">Des bénéfices concrets</Badge>
              <h2 className="mt-5 max-w-[460px] text-[30px] font-extrabold leading-[1.15] tracking-tight text-[#0b1437] md:text-[34px]">
                Des résultats visibles dès les premières semaines.
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                {[
                  {
                    icon: <Clock className="h-5 w-5 text-[#2148ff]" strokeWidth={2.2} />,
                    title: "Gain de temps",
                    desc: "Jusqu'à plusieurs heures gagnées chaque semaine.",
                  },
                  {
                    icon: <Target className="h-5 w-5 text-[#2148ff]" strokeWidth={2.2} />,
                    title: "Moins d'erreurs",
                    desc: "Des processus fiabilisés et standardisés.",
                  },
                  {
                    icon: <Smile className="h-5 w-5 text-[#2148ff]" strokeWidth={2.2} />,
                    title: "Moins de charge mentale",
                    desc: "Moins de tâches répétitives, plus de concentration.",
                  },
                  {
                    icon: <TrendingUp className="h-5 w-5 text-[#2148ff]" strokeWidth={2.2} />,
                    title: "Plus de visibilité",
                    desc: "Des données fiables et accessibles.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0f4ff] text-[#2148ff]">
                      {icon}
                    </span>
                    <div>
                      <h3 className="text-sm font-extrabold text-[#0b1437]">{title}</h3>
                      <p className="mt-2 text-xs font-semibold leading-relaxed text-[#1b2647]/65">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] bg-[#f5f8ff] border border-[#e2ecff] p-5 pb-0 pt-6 sm:p-7 sm:pb-0 sm:pt-7">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                {[
                  {
                    label: "Temps gagné",
                    circled: true,
                    value: "+12h",
                    sub: "par semaine",
                  },
                  {
                    label: "Tâches identifiées",
                    value: "23",
                    sub: "Ce mois-ci",
                  },
                  {
                    label: "Erreurs évitées",
                    value: "18",
                    sub: "Ce mois-ci",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white p-3.5 sm:p-5 shadow-[var(--shadow-soft)] ring-1 ring-black/[0.03]"
                  >
                    <p className="text-[10px] sm:text-[11px] font-bold text-[#1b2647]/60 leading-tight">
                      {stat.label}
                    </p>
                    <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div className="flex items-center gap-2">
                        {stat.circled && (
                          <div className="shrink-0 scale-75 sm:scale-100 -ml-1 sm:ml-0">
                            <svg className="w-9 h-9 text-[#2148ff]" viewBox="0 0 36 36">
                              <path
                                className="text-[#eef2ff]"
                                strokeWidth="3.5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                className="text-[#2148ff]"
                                strokeWidth="3.5"
                                strokeDasharray="75, 100"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                d="M18 18 v-6"
                              />
                              <path
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                d="M18 18 h4.5"
                              />
                            </svg>
                          </div>
                        )}
                        <span className="text-xl sm:text-[28px] font-extrabold leading-none text-[#0b1437]">
                          {stat.value}
                        </span>
                      </div>
                    </div>
                    <p className="mt-1.5 text-[9px] sm:text-[10px] font-bold text-[#1b2647]/50">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-2 min-h-[280px] sm:min-h-[340px]">
                <img
                  src="/images/robot-lounge.png"
                  alt="Mascotte YX Automation assise avec une tasse"
                  width={1024}
                  height={1024}
                  className="absolute bottom-[-16px] left-[2%] w-[52%] max-w-[280px] object-contain drop-shadow-lg"
                />
                <div className="absolute right-[4%] top-[25%] w-[42%] max-w-[190px] rounded-2xl bg-white p-3.5 sm:p-5 shadow-[0_16px_38px_-24px_rgba(14,21,48,0.26)] border border-[#f0f4ff]">
                  <p className="text-[11px] sm:text-[13px] font-extrabold text-[#0b1437]">
                    Productivité
                  </p>
                  <svg
                    viewBox="0 0 220 95"
                    className="mt-3 h-16 sm:h-20 w-full"
                    fill="none"
                    aria-hidden
                  >
                    <polyline
                      points="8,78 38,60 68,66 98,42 128,50 158,28 188,35 214,12"
                      stroke="#2148ff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <section className="relative mt-10 overflow-hidden px-5 pb-12 md:px-8">
        <Reveal>
          <div className="final-cta-shell relative mx-auto w-full max-w-[1240px] overflow-hidden rounded-[34px] border border-[#cfe0ff]">
            <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/18 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#8fb5ff]/35 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1738da]/30 to-transparent" />

            <div className="relative z-10 flex flex-col gap-8 px-7 py-8 md:px-10 md:py-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[720px] text-white">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/88">
                  <Rocket className="h-3.5 w-3.5" strokeWidth={2.2} />
                  Diagnostic IA de 20 min
                </div>

                <h3 className="max-w-[680px] text-2xl font-extrabold leading-tight md:text-[34px]">
                  Vous voulez savoir si l'IA peut vraiment vous faire gagner du temps ?
                </h3>

                <p className="mt-3 max-w-[620px] text-sm leading-relaxed text-white/82 md:text-base">
                  On regarde ensemble vos tâches, vos outils et votre contexte pour voir si
                  l'Atelier IA Terrain est adapté à votre entreprise.
                </p>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/82">
                  {[
                    "Sans engagement",
                    "Pensé pour les petites structures",
                    "Objectif: voir si c'est pertinent",
                  ].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={2.3} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/18 bg-white/10 p-4 backdrop-blur-sm md:p-5">
                <div className="mb-3 text-sm font-semibold text-white/85">
                  Premier échange pour cadrer le besoin
                </div>
                <Button
                  variant="white"
                  size="lg"
                  leftIcon={<Calendar className="h-5 w-5" />}
                  className="w-full min-w-[250px] justify-center transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  Réserver un diagnostic IA gratuit
                </Button>
                <p className="mt-3 text-center text-xs text-white/72">
                  Pas de vente forcée. On vérifie d'abord si l'atelier a du sens pour vous.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
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

function StepCard({
  number,
  tone,
  icon,
  iconTone = "blue-solid",
  title,
  subtitle,
  description,
  items,
}: StepProps) {
  const bg = tone === "green" ? "bg-[#eefbf3] border-[#cfeedb]" : "bg-[#f4f7ff] border-[#e6ecff]";

  return (
    <div
      className={`relative rounded-3xl border ${bg} px-7 pb-8 pt-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]`}
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
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-[#1b2647]/70">{description}</p>
        )}
        {items && (
          <ul className="mt-5 space-y-2.5 text-left">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-2.5 text-sm text-[#1b2647]/80">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#2148ff]"
                  strokeWidth={2.5}
                />
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
