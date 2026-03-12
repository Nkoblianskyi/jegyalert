import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const sections = [
  { title: "1. Az adatkezelő", body: "A Jegyalert (a továbbiakban: „mi\", \"szolgáltató\") üzemelteti a jegyalert.com weboldalt. Kapcsolat: info@jegyalert.com." },
  { title: "2. Milyen adatokat kezelünk?", body: "A kapcsolati űrlap kitöltésekor a megadott név és e-mail cím a megkeresés megválaszolásához szükséges. Automatikusan, anonimizáltan gyűjtünk látogatottsági adatokat (pl. oldallátogatások) a szolgáltatás fejlesztése és a jogszabályi kötelezettségek teljesítése érdekében." },
  { title: "3. Az adatok felhasználása", body: "Az adatokat kizárólag a megkeresések megválaszolásához, a weboldal működtetéséhez és a jogszabályoknak megfelelően használjuk. Adatokat harmadik félnek nem adunk el." },
  { title: "4. Adatmegőrzés", body: "A kapcsolati üzenetekhez kapcsolódó adatokat legfeljebb 2 évig tároljuk. Az anonimizált analitikai adatokat legfeljebb 26 hónapig őrizzük meg." },
  { title: "5. Az Ön jogai", body: "A GDPR alapján Önnek joga van a személyes adataihoz való hozzáférésre, helyesbítésre, törlésre, illetve az adatkezelés korlátozására. Kérelmét az info@jegyalert.com címen küldheti." },
  { title: "6. Sütik", body: "A sütik kezeléséről a Sütik oldalon talál részletes tájékoztatást." },
]

export default function PrivacyPage() {
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
              Adatvédelmi tájékoztató
            </h1>
            <p className="text-white/90">Utoljára frissítve: 2026</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-14">
          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.title} className="bg-card border-2 border-border rounded-3xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-center text-muted-foreground">
            <Link href="/sutik" className="text-accent font-semibold hover:underline">Sütik (cookie) tájékoztató</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
