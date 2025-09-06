"use client"

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-16 bg-background border-t border-border text-center text-sm text-foreground/70">
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  )
}
