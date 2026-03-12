import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/icon.svg" alt="Jegyalert" width={36} height={36} className="rounded-lg" />
              <span className="text-xl font-bold">Jegyalert</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Független jegyár-összehasonlító. Nem értékesítünk jegyeket – csak összehasonlítjuk a partnereink árait, hogy Ön a legjobb ajánlatot választhassa.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">
              Oldalak
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/esemenyek", label: "Események" },
                { href: "/partnerek", label: "Partnerek" },
                { href: "/rolunk", label: "Rólunk" },
                { href: "/kapcsolat", label: "Kapcsolat" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">
              Jogi
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/adatvedelem", label: "Adatvédelem" },
                { href: "/sutik", label: "Sütik" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-primary-foreground/80">
              info@jegyalert.com
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50 leading-relaxed max-w-3xl">
            A Jegyalert független összehasonlító szolgáltatás. Nem adunk el jegyeket. Az „Ajánlat” gombra kattintva a kiválasztott partner oldalára kerül; a vásárlás a partnerrel jön létre.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Jegyalert. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  )
}
