import Header from "@/components/header"
import Footer from "@/components/footer"
import Disclaimer from "@/components/disclaimer"
import Link from "next/link"
import { ExternalLink, Shield, BarChart3, CheckCircle, ArrowRight } from "lucide-react"

const partners = [
  {
    name: "Jegy.hu",
    url: "https://jegy.hu",
    desc: "Magyarország egyik legnagyobb és legrégebben működő jegyértékesítője. Koncertektől sportrendezvényekig, fesztiváloktól színházig széles kínálat. Magyar felület, hazai ügyfélszolgálat.",
    specialty: "Koncert, Sport, Fesztivál",
    note: "Erős hazai eseménykínálat.",
  },
  {
    name: "Eventim HU",
    url: "https://www.eventim.hu",
    desc: "Az európai Eventim hálózat magyar leányvállalata. Nemzetközi sztárok és nagy arénás show-k mellett színház, klasszikus koncertek is. Biztonságos vásárlás, világszínvonalú platform.",
    specialty: "Koncert, Színház, Sport",
    note: "Gyakran jó árak a nagy eseményekre.",
  },
  {
    name: "StubHub",
    url: "https://stubhub.com",
    desc: "Globális másodpiaci jegyplatform. Elkapkodott, sold-out eseményekre kínál jegyeket. Nemzetközi kínálat, gyakran versenyképes árak a nehezen elérhető programokra.",
    specialty: "Másodpiac, sold-out",
    note: "Hasznos, ha már nincs hivatalos jegy.",
  },
  {
    name: "Viagogo",
    url: "https://viagogo.com",
    desc: "Nemzetközi másodpiaci jegyértékesítő. Széles kínálat koncertekre, sportra, fesztiválokra. Gyakran elérhetők olyan események, amelyek máshol már kifogytak.",
    specialty: "Koncert, Sport, Fesztivál",
    note: "Érdemes árakat hasonlítani más partnerekkel.",
  },
  {
    name: "Tixa",
    url: "https://tixa.hu",
    desc: "Magyar fókuszú jegyértékesítő. Különösen erős a fesztiválok és a kisebb, helyi rendezvények terén. Barátságos felület, gyakori akciók.",
    specialty: "Fesztivál, Helyi rendezvények",
    note: "Jó választás fesztiválokhoz.",
  },
  {
    name: "Jegymester",
    url: "https://jegymester.hu",
    desc: "Megbízható hazai jegyértékesítő. Széles eseménykínálat – koncertek, sport, színház, kulturális programok. Gyors kiszolgálás, átlátható feltételek.",
    specialty: "Koncert, Sport, Kultúra",
    note: "Erős a hazai sport és kultúra.",
  },
]

const whatWeCompare = [
  "Jegyárak („tól” árak) minden kiválasztott partnernél, eseményenként",
  "Közvetlen link a partner weboldalára – egy kattintással továbbirányítunk",
  "Koncertek, fesztiválok, sport, színház, egyéb programok egy helyen",
  "A vásárlás és a tranzakció kizárólag a partnerrel történik – mi nem értékesítünk jegyeket",
]

const selectionCriteria = [
  "Érvényes üzleti tevékenység és megbízható működés",
  "Átlátható árazás és vásárlási feltételek",
  "Bevált ügyfélszolgálat és panaszkezelés",
  "A Jegyalert nem kap jutalékot – az összehasonlítás objektív marad",
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative py-20 md:py-28 px-4 bg-primary"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance">
              Akikkel összehasonlítunk
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
              A Jegyalert nem értékesít jegyeket – csak ezeknek a partnereknek az árait és ajánlatait jelenítjük meg egy helyen.
            </p>
            <p className="text-white/80 text-base max-w-2xl mx-auto">
              A vásárlás mindig a kiválasztott partner weboldalán történik. Mi csak összehasonlítunk, hogy Ön a legjobb ajánlatot találja.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 lg:px-8 py-10">
          <Disclaimer />
        </div>

        {/* Mit hasonlítunk – több infó */}
        <section className="py-16 px-4 bg-secondary" aria-labelledby="compare-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="compare-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-7 h-7 text-accent" />
              Mit hasonlítunk pontosan?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Minden kiválasztott eseménynél egy táblázatban mutatjuk a partnereink árait és linket adunk a partner oldalára. Így egy helyen láthatja, hol a legjobb ár, és egy kattintással továbbléphet a vásárláshoz.
            </p>
            <ul className="space-y-4">
              {whatWeCompare.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Partner kártyák – nagyobb, több infó */}
        <section className="py-16 px-4" aria-label="Partner lista">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              Partnereink
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Az alábbi jegyértékesítőket hasonlítjuk össze. Kattintson a „Weboldal” gombra a partner oldalának megnyitásához.
            </p>

            <div className="space-y-8">
              {partners.map((partner, index) => (
                <article
                  key={partner.name}
                  className="bg-card border-2 border-border rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300"
                >
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/15 text-accent font-bold text-lg shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{partner.name}</h3>
                          <span className="inline-block mt-1.5 bg-accent/15 text-accent text-sm font-semibold px-3 py-1 rounded-xl">
                            {partner.specialty}
                          </span>
                        </div>
                      </div>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity shrink-0"
                        aria-label={`${partner.name} weboldala (új lap)`}
                      >
                        Weboldal <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {partner.desc}
                    </p>
                    {partner.note && (
                      <p className="text-sm text-foreground/80 font-medium flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                        {partner.note}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Hogyan választjuk – bővített */}
        <section className="py-20 px-4 bg-secondary" aria-labelledby="selection-heading">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/15 text-accent mb-5">
                <Shield className="w-8 h-8" aria-hidden="true" />
              </span>
              <h2 id="selection-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Hogyan választjuk a partnereket?
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Csak olyan partnereket jelenítünk meg, akik megfelelnek biztonsági és megbízhatósági elvárásainknak.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectionCriteria.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-card rounded-2xl p-5 border border-border">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-muted-foreground mt-8 text-sm">
              A Jegyalert nem kap jutalékot a partnerektől – az összehasonlítás független és objektív marad.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-4 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground font-semibold mb-4">
              Kész az összehasonlításra?
            </p>
            <Link
              href="/esemenyek"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Események böngészése <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
