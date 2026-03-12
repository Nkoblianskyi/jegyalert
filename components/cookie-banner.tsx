"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const STORAGE_KEY = "jegyalert-cookie-consent"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Süti tájékoztató"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-card border-t-2 border-accent/40 shadow-[0_-8px_32px_rgba(0,0,0,0.12)]"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground mb-1">Sütik használata</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A Jegyalert a megfelelő működés és a látogatottság elemzése érdekében sütiket használ. Részletek:{" "}
            <Link href="/sutik" className="text-accent font-medium hover:underline">
              Sütik (cookie) tájékoztató
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2.5 rounded-xl text-sm font-medium border border-border text-foreground hover:bg-secondary transition-colors"
          >
            Elutasítom
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  )
}
