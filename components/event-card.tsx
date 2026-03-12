import Link from "next/link"
import { MapPin, Calendar, ArrowRight } from "lucide-react"

type Event = {
  id: number
  title: string
  date: string
  venue: string
  category: string
  priceFrom: number
  image: string
}

type EventCardProps = {
  event: Event
  size?: "default" | "compact"
}

export default function EventCard({ event, size = "default" }: EventCardProps) {
  const compact = size === "compact"

  return (
    <Link
      href={`/esemenyek/${event.id}`}
      className="group block h-full"
      aria-label={`${event.title} – ${event.priceFrom.toLocaleString("hu-HU")} Ft`}
    >
      <article className="h-full flex flex-col sm:flex-row bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl hover:border-accent transition-all duration-300">
        {/* Kép – bal oldalon vagy fent (mobil) */}
        <div className="relative sm:w-2/5 min-h-[200px] sm:min-h-0 sm:min-w-[180px] overflow-hidden bg-muted">
          <img
            src={event.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 rounded-md bg-black/80 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {event.category}
          </span>
        </div>

        {/* Tartalom */}
        <div className="flex flex-1 flex-col justify-between p-5 min-w-0">
          <div>
            <h2 className={`font-bold text-foreground leading-snug ${compact ? "text-base" : "text-lg md:text-xl"} line-clamp-2 mb-2`}>
              {event.title}
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 shrink-0 text-accent" />
                {event.date}
              </span>
              <span className="flex items-center gap-1.5 min-w-0 truncate">
                <MapPin className="w-4 h-4 shrink-0 text-accent" />
                <span className="truncate">{event.venue}</span>
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
            <span className="text-xl font-bold text-accent">
              {event.priceFrom.toLocaleString("hu-HU")} <span className="text-sm font-normal text-muted-foreground">Ft-tól</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground group-hover:bg-accent/90 transition-colors">
              Összehasonlítás <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
