import { Info } from "lucide-react"

type DisclaimerProps = {
  variant?: "default" | "hero"
}

export default function Disclaimer({ variant = "default" }: DisclaimerProps) {
  const isHero = variant === "hero"

  return (
    <div
      className={
        isHero
          ? "w-full border-b-2 border-accent bg-primary shadow-lg"
          : "bg-accent/15 border-2 border-accent/40 rounded-xl px-5 py-4 flex gap-3 items-start text-sm leading-relaxed"
      }
    >
      <div className={isHero ? "max-w-6xl mx-auto px-4 lg:px-8 py-5 lg:py-6 flex gap-4 lg:gap-6 items-start" : "flex gap-3 items-start"}>
        <div
          className={
            isHero
              ? "shrink-0 w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-white/15 flex items-center justify-center"
              : "shrink-0"
          }
        >
          <Info
            className={isHero ? "w-5 h-5 lg:w-6 lg:h-6 text-white" : "w-5 h-5 mt-0.5 text-foreground"}
            aria-hidden="true"
          />
        </div>
        <div className={isHero ? "min-w-0" : ""}>
          {isHero && (
            <p className="text-sm lg:text-base font-bold text-white uppercase tracking-wide mb-1.5">
              Fontos tájékoztató
            </p>
          )}
          <p className={isHero ? "text-sm lg:text-base text-white leading-relaxed max-w-4xl" : "text-foreground leading-relaxed"}>
            {isHero ? (
              <>
                A <strong className="font-semibold text-white">Jegyalert</strong> független jegyár-összehasonlító.{" "}
                <strong className="font-bold text-white">Nem adunk el jegyeket.</strong> Összehasonlítjuk a partnereink (pl. Jegy.hu, Eventim, StubHub, Tixa) árait.
                Az „Ajánlat” gombra kattintva a partner weboldalára kerül; a vásárlás kizárólag a partnerrel jön létre.
              </>
            ) : (
              <>
                A <strong className="font-semibold text-foreground">Jegyalert</strong> független jegyár-összehasonlító.{" "}
                <strong className="font-bold text-foreground">Nem adunk el jegyeket.</strong> Összehasonlítjuk a partnereink (pl. Jegy.hu, Eventim, StubHub, Tixa) árait.
                Az „Ajánlat” gombra kattintva a partner weboldalára kerül; a vásárlás kizárólag a partnerrel jön létre.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
