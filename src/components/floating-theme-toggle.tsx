"use client"

import { useTheme } from "next-themes"

export default function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 p-3 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white shadow-lg hover:scale-110 transition-transform z-50"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  )
}
