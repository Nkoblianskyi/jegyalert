import Header from "@/components/header"
import Footer from "@/components/footer"
import Disclaimer from "@/components/disclaimer"
import Link from "next/link"
import { ShieldCheck, Eye, Handshake, ArrowRight } from "lucide-react"

const values = [
  { icon: ShieldCheck, title: "Függetlenség", desc: "Nem állunk egyetlen jegyértékesítő érdekkörében sem. Objektívan összehasonlítjuk az ajánlatokat, hogy Ön a legjobb döntést hozhassa." },
  { icon: Eye, title: "Átláthatóság", desc: "Minden ár és partner nyíltan látható. Nincsenek rejtett díjak, nincs befolyásolt rangsor – csak a tények." },
  { icon: Handshake, title: "Megbízhatóság", desc: "Csak ellenőrzött, biztonságos partnerekkel dolgozunk. A felhasználók biztonsága az első." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section
          className="relative py-20 md:py-28 px-4 bg-primary"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance">
              Rólunk
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty max-w-2xl mx-auto">
              A Jegyalert egy független jegyár-összehasonlító platform. Célunk, hogy egy helyen láthatóvá tegyük több partner árait, így Ön a legjobb ajánlatot választhassa.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10">
          <Disclaimer />
        </div>

        <section className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Mi a Jegyalert?
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  A jegyvásárlás sokszor bonyolult: több oldalt kell böngészni, az árak és feltételek nehezen összehasonlíthatók. A Jegyalert ezt egyszerűsíti: összegyűjtjük több megbízható partner ajánlatait egyetlen, áttekinthető felületen – ingyenesen, regisztráció nélkül.
                </p>
                <p>
                  Nem adunk el jegyeket. Csak összehasonlítunk. A vásárlás mindig a kiválasztott partnerrel jön létre.
                </p>
                <p>
                  A Jegyalert a jegyalert.com domain alatt működik, és független szolgáltatóként nem áll kapcsolatban a partnerek értékesítési tevékenységével.
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-3xl p-10 border-2 border-border">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-8">Röviden</h3>
              <dl className="space-y-8">
                {[
                  { value: "6+", label: "Összehasonlított partner" },
                  { value: "0 Ft", label: "Használati díj" },
                  { value: "100%", label: "Független platform" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-5">
                    <dt className="text-5xl font-bold text-accent">{stat.value}</dt>
                    <dd className="text-muted-foreground text-lg">{stat.label}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/kapcsolat" className="inline-flex items-center gap-2 mt-8 text-accent font-semibold hover:underline">
                Kapcsolat <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20 px-4" aria-labelledby="values-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="values-heading" className="text-3xl font-bold text-center text-foreground mb-12">
              Értékeink
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-card border-2 border-border rounded-3xl p-8 shadow-sm hover:border-accent/30 transition-colors">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/15 text-accent mb-6">
                    <v.icon className="w-7 h-7" aria-hidden="true" />
                  </span>
                  <h3 className="font-bold text-foreground text-xl mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
