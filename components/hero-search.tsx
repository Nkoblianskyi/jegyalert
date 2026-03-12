"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

export default function HeroSearch() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = query.trim()
    if (trimmed) {
      router.push(`/esemenyek?q=${encodeURIComponent(trimmed)}`)
    } else {
      router.push("/esemenyek")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3"
      role="search"
      aria-label="Esemény keresés"
    >
      <label htmlFor="hero-search" className="sr-only">
        Keress eseményre
      </label>
      <div className="relative flex-1">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
        <input
          id="hero-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Esemény, előadó, helyszín…"
          className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="px-7 py-3.5 bg-accent text-accent-foreground rounded-xl text-sm font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        Keresés
      </button>
    </form>
  )
}
