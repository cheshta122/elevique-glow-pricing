"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full py-4 bg-background/80 backdrop-blur-lg border-b border-border fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
          My Portfolio
        </h1>
        <nav>
          <ul className="flex gap-6 text-foreground/80 font-medium">
            <li><Link href="/#essential">Essential</Link></li>
            <li><Link href="/#impact">Impact</Link></li>
            <li><Link href="/#signature">Signature</Link></li>
            <li><Link href="/#gallery">Gallery</Link></li>
            <li><Link href="/#pricing">Pricing</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
