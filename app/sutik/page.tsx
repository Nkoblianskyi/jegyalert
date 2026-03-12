import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const cookieTypes = [
  { name: "Szükséges sütik", desc: "A weboldal alapvető működéséhez szükségesek. Nem kapcsolhatók ki. Nem tárolnak személyes adatot.", examples: "Munkamenet, biztonsági token", duration: "Munkamenet végéig" },
  { name: "Analitikai sütik", desc: "Segítenek megérteni, hogyan használják a látogatók az oldalt. Az adatok anonimizáltak.", examples: "Oldallátogatások, használati statisztika", duration: "Legfeljebb 26 hónap" },
  { name: "Funkcionális sütik", desc: "Egyes személyre szabott funkciókhoz (pl. beállítások megjegyzése) használjuk őket.", examples: "Preferenciák mentése", duration: "Legfeljebb 1 év" },
]

export default function CookiesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance">
              Sütik (cookie-k)
            </h1>
            <p className="text-white/90">Utoljára frissítve: 2026</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-14">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-12 text-base">
              A Jegyalert (jegyalert.com) a megfelelő működés és a szolgáltatás fejlesztése érdekében sütiket használ. Az alábbiakban röviden összefoglaljuk, milyen sütiket alkalmazunk és mire.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-8 mt-14">
              Milyen sütiket használunk?
            </h2>

            <div className="space-y-8 mb-14">
              {cookieTypes.map((ct) => (
                <article key={ct.name} className="bg-card border-2 border-border rounded-3xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-3">{ct.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{ct.desc}</p>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div><dt className="text-muted-foreground font-medium">Példák:</dt><dd className="text-foreground font-medium">{ct.examples}</dd></div>
                    <div><dt className="text-muted-foreground font-medium">Megőrzés:</dt><dd className="text-foreground font-medium">{ct.duration}</dd></div>
                  </dl>
                </article>
              ))}
            </div>

            <article className="bg-secondary rounded-3xl p-8 border-2 border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Sütik kezelése</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A legtöbb böngészőben a sütik kezelése a beállításokban lehetséges. A nem szükséges sütik kikapcsolása egyes funkciókat befolyásolhat.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kérdés esetén írjon a{" "}
                <Link href="mailto:info@jegyalert.com" className="text-accent font-semibold hover:underline">
                  info@jegyalert.com
                </Link>{" "}
                címre.
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
