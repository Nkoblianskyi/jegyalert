import Link from "next/link"
import { Search, ArrowRight, Shield, Zap, BarChart3, ChevronRight, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSearch from "@/components/hero-search"
import Disclaimer from "@/components/disclaimer"
import EventCard from "@/components/event-card"
import { allEvents } from "@/lib/events"

const featuredEvents = allEvents.slice(0, 3)
const partnerNames = ["Jegy.hu", "Eventim HU", "StubHub", "Viagogo", "Tixa", "Jegymester"]

const steps = [
  { step: 1, title: "Keresés", desc: "Írja be az esemény nevét vagy helyszínét a keresőbe." },
  { step: 2, title: "Összehasonlítás", desc: "Egy helyen láthatja több partner aktuális árait." },
  { step: 3, title: "Kiválasztás", desc: "Válassza ki a legjobb ajánlatot, kattintson az „Ajánlat” gombra." },
  { step: 4, title: "Vásárlás", desc: "A vásárlás a partner oldalán, biztonságosan történik." },
]

const stats = [
  { value: "6+", label: "partner" },
  { value: "0 Ft", label: "díj" },
  { value: "100%", label: "független" },
]

const whyBlocks = [
  { icon: Zap, title: "Gyors és egyszerű", text: "Egy kereséssel láthatja az összes ajánlatot. Nincs regisztráció, nincs rejtett díj." },
  { icon: Shield, title: "Csak megbízható partnerek", text: "Csak ellenőrzött jegyértékesítőket jelenítünk meg. A vásárlás náluk történik." },
  { icon: BarChart3, title: "Átlátható árak", text: "Minden partner ára egy táblázatban. A legjobb ajánlat egy kattintással választható." },
]

const faqs = [
  { q: "Mit csinál a Jegyalert?", a: "A Jegyalert egy független összehasonlító szolgáltatás. Egy eseményhez összegyűjtjük több jegyértékesítő (Jegy.hu, Eventim, StubHub stb.) árait, így egy helyen láthatja, hol a legjobb ár. Magunk nem adunk el jegyeket – a vásárlás mindig a kiválasztott partner oldalán történik." },
  { q: "Ingyenes a szolgáltatás?", a: "Igen. A Jegyalert teljesen ingyenesen használható, regisztráció nélkül. Nem számolunk fel díjat, és nem kapunk jutalékot a partnerektől – az összehasonlítás objektív marad." },
  { q: "Miért más az ár minden partnernél?", a: "Minden jegyértékesítő saját árazást, akciókat és szolgáltatási díjakat alkalmaz. Mi ezeket jelenítjük meg egy táblázatban, hogy Ön a legkedvezőbb ajánlatot választhassa." },
  { q: "Biztonságos a partner oldalán vásárolni?", a: "Igen. Csak olyan partnereket jelenítünk meg, akik megbízható, ismert jegyértékesítők. A tranzakció a partner weboldalán, annak biztonsági és adatvédelmi feltételei szerint történik." },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero – teljesen új: középen panel, kereső doboz */}
        <section
          className="relative min-h-[95vh] flex flex-col px-4 pt-0 pb-16 bg-primary"
          aria-label="Kezdőlap"
          style={{
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 z-0 bg-primary/70" />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

          <div className="relative z-10 w-full shrink-0 pt-2 sm:pt-4">
            <Disclaimer variant="hero" />
          </div>

          <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto mt-6 sm:mt-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Jegyárak <span className="text-accent">egy helyen</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Keressen, hasonlítson, spóroljon. Ingyenes, regisztráció nélkül.
            </p>

            <div className="w-full max-w-2xl bg-card/95 backdrop-blur-md rounded-3xl border-2 border-white/20 shadow-2xl p-6 md:p-8">
              <HeroSearch />
              <p className="text-muted-foreground text-sm mt-5 mb-2">Összehasonlítjuk</p>
              <div className="flex flex-wrap justify-center gap-2">
                {partnerNames.map((p) => (
                  <span key={p} className="text-xs font-medium text-foreground/80 bg-muted/80 rounded-full px-3 py-1.5">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hogyan működik? */}
        <section className="py-24 px-4 bg-background" aria-labelledby="how-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="how-heading" className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Hogyan működik?
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Négy egyszerű lépésben a legjobb jegyárat találja meg.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {steps.map((s) => (
                <div key={s.step} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-accent-foreground font-bold text-2xl mb-5">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-foreground text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  {s.step < 4 && (
                    <div className="hidden lg:flex absolute top-8 left-[calc(50%+4rem)] w-14 justify-center">
                      <ArrowRight className="w-6 h-6 text-accent/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kiemelt programok */}
        <section className="py-24 px-4 bg-secondary" aria-labelledby="featured-heading">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between gap-4 mb-12">
              <h2 id="featured-heading" className="text-3xl md:text-4xl font-bold text-foreground">
                Kiemelt programok
              </h2>
              <Link href="/esemenyek" className="flex items-center gap-1 text-accent font-semibold hover:underline shrink-0">
                Összes esemény <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Számokban */}
        <section className="py-20 px-4 bg-primary text-primary-foreground" aria-label="Statisztikák">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-10 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-4xl md:text-6xl font-bold text-accent">{s.value}</p>
                  <p className="text-primary-foreground/90 mt-2 text-lg">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Miért a Jegyalert? */}
        <section className="py-24 px-4 bg-background" aria-labelledby="why-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Miért a Jegyalert?
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
              Független platform – csak összehasonlítunk, nem adunk el jegyeket.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyBlocks.map((b) => (
                <div key={b.title} className="bg-card border-2 border-border rounded-3xl p-8 shadow-sm hover:border-accent/40 hover:shadow-lg transition-all">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/15 text-accent mb-6">
                    <b.icon className="w-8 h-8" aria-hidden="true" />
                  </span>
                  <h3 className="font-bold text-foreground text-xl mb-3">{b.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerek */}
        <section className="py-24 px-4 bg-secondary" aria-labelledby="partners-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Akikkel összehasonlítunk
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
              Nem értékesítünk jegyeket – csak ezeknek a partnereknek az ajánlatait mutatjuk egy helyen.
            </p>
            <div className="bg-card border-2 border-border rounded-3xl p-8 md:p-10 mb-12 max-w-3xl mx-auto">
              <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                Mit hasonlítunk?
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-accent">•</span> Jegyárak („tól” árak) minden partnernél</li>
                <li className="flex items-center gap-2"><span className="text-accent">•</span> Elérhetőség és link a partner oldalára</li>
                <li className="flex items-center gap-2"><span className="text-accent">•</span> Egy helyen: koncertek, fesztiválok, sport, színház</li>
                <li className="flex items-center gap-2"><span className="text-accent">•</span> A vásárlás a kiválasztott partner oldalán történik – mi csak összehasonlítunk</li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {partnerNames.map((p) => (
                <span
                  key={p}
                  className="px-6 py-3.5 bg-card border-2 border-border rounded-2xl font-semibold text-foreground shadow-sm hover:border-accent/50 hover:shadow-md transition-all"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="text-center mt-12">
              <Link href="/partnerek" className="inline-flex items-center gap-1 text-accent font-semibold hover:underline">
                Részletek a partnerekről <ChevronRight className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </section>

        {/* Rólunk */}
        <section className="py-24 px-4 bg-background" aria-labelledby="about-us-heading">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 id="about-us-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Rólunk
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Jegyalert egy független magyar jegyár-összehasonlító. Célunk, hogy ne kelljen több oldalt böngészni – egy helyen láthatja a legjobb ajánlatokat, ingyenesen és regisztráció nélkül.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nem adunk el jegyeket. Csak összehasonlítjuk a partnereink árait. A vásárlás mindig a kiválasztott partnerrel jön létre.
              </p>
              <Link
                href="/rolunk"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Users className="w-5 h-5" /> Tudjon meg többet
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4">
              {["6+ partner", "0 Ft díj", "100% független"].map((t) => (
                <div key={t} className="bg-secondary rounded-2xl p-6 border-2 border-border text-center">
                  <p className="font-bold text-foreground text-lg">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4 bg-secondary" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Gyakori kérdések
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="bg-card border-2 border-border rounded-2xl overflow-hidden group">
                  <summary className="px-6 py-5 font-semibold text-foreground cursor-pointer list-none flex items-center justify-between gap-3">
                    {faq.q}
                    <span className="shrink-0 text-accent group-open:rotate-90 transition-transform">
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-5 pt-0 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed pt-4">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
