"use client"

import { useEffect, useState } from "react"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white shadow-lg hover:scale-110 transition-transform z-50"
    >
      ↑
    </button>
  )
}
