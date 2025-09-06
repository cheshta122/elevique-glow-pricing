"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { BadgeCheck, Cpu, Bot, Workflow, Rocket, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type PkgKey = "signature" | "impact" | "essentials"

const packages: Record<PkgKey, { title: string; subtitle: string; features: string[]; badge?: string }> = {
  signature: {
    title: "Signature",
    subtitle: "Flagship luxury brand film – full cinematic",
    features: [
      "TV-grade visuals & finishing",
      "Premium cinematic edit",
      "Full narrative arcs & storytelling",
      "Professional voiceover + BG music",
      "Complete brand integration across shots",
      "Campaign brand kit",
      "3 Free revisions",
      "Complex, dynamic camera moves",
      "3–5 custom HD/3D images",
      "Dedicated project manager & oversight",
    ],
    badge: "Most Premium",
  },
  impact: {
    title: "Impact",
    subtitle: "Brand film with premium product integration",
    features: [
      "Realistic AI characters + premium elements",
      "Advanced edit with tasteful transitions",
      "Story-led script engineered for reach",
      "Professional voiceover + BG music",
      "End-to-end product integration across scenes",
      "Advanced logo animation",
      "2 Free revisions",
      "VFX effects",
      "4:5 Instagram export",
    ],
  },
  essentials: {
    title: "Essentials",
    subtitle: "Rapid, polished AI ad",
    features: [
      "Realistic AI characters",
      "Clean edit",
      "Brand intro & messaging",
      "Professional voiceover + BG music",
      "Single product highlight",
      "End-card logo placement",
      "1 Free revision",
    ],
  },
}

const details: Record<PkgKey, { suitableFor: string; process: string[] }> = {
  signature: {
    suitableFor: "Luxury campaigns, hero films, cinematic brand storytelling.",
    process: [
      "Brief & asset intake (logo, product refs)",
      "Script & storyboard (quick approval)",
      "AI generation + clean edit",
      "Final Delivery",
    ],
  },
  impact: {
    suitableFor: "Brands seeking a high-impact film with premium product focus.",
    process: ["Brief & references", "Script & production plan", "AI generation + edit", "Delivery & exports"],
  },
  essentials: {
    suitableFor: "Fast go-to-market ads with polished delivery.",
    process: ["Brief intake", "Lightweight script", "AI generation + edit", "Delivery"],
  },
}

function TechAccent() {
  // tiny AI/tech-inspired decorative SVG
  return (
    <svg aria-hidden className="icon-floaty opacity-50" width="44" height="20" viewBox="0 0 44 20" fill="none">
      <rect x="1" y="9" width="6" height="2" rx="1" className="fill-sky-500/40" />
      <rect x="11" y="9" width="6" height="2" rx="1" className="fill-sky-500/40" />
      <rect x="21" y="9" width="6" height="2" rx="1" className="fill-sky-500/40" />
      <rect x="31" y="9" width="12" height="2" rx="1" className="fill-sky-500/40" />
      <circle cx="9" cy="10" r="1" className="fill-sky-500/60" />
      <circle cx="19" cy="10" r="1" className="fill-sky-500/60" />
      <circle cx="29" cy="10" r="1" className="fill-sky-500/60" />
    </svg>
  )
}

export default function PackagesSection() {
  const [active, setActive] = useState<PkgKey | null>(null)

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Packages</h2>
        <p className="mt-2 text-foreground/70">Choose the right level for your campaign goals.</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(packages).map(([key, pkg], idx) => {
          const k = key as PkgKey
          return (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
            >
              
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence>
        <Dialog open={active !== null} onOpenChange={() => setActive(null)}>
          <DialogContent>
            {active && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="space-y-4"
              >
                <DialogHeader>
                  <DialogTitle>{packages[active].title} — Details</DialogTitle>
                  <DialogDescription>{packages[active].subtitle}</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Suitable For</h4>
                    <p className="text-sm text-foreground/70">{details[active].suitableFor}</p>
                  </div>

                  <div>
                    <h4 className="font-medium">The Process</h4>
                    <motion.ol
                      className="mt-2 space-y-2"
                      initial="hidden"
                      animate="show"
                      variants={{
                        hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                        show: { transition: { staggerChildren: 0.08 } },
                      }}
                    >
                      {details[active].process.map((step, i) => {
                        const Icon = [Cpu, Bot, Workflow, Rocket][i % 4]
                        return (
                          <motion.li
                            key={step}
                            className="flex items-center gap-2 text-sm"
                            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <Icon size={16} className="text-sky-500 icon-floaty" />
                            <span>{step}</span>
                          </motion.li>
                        )
                      })}
                    </motion.ol>
                  </div>
                </div>

                <DialogFooter className="sm:justify-start">
                  <Button className="bg-sky-500 hover:bg-sky-600 btn-glow btn-pulse" asChild>
                    <a
                      href="https://www.elevique.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setActive(null)}
                    >
                      Get in Touch
                    </a>
                  </Button>
                </DialogFooter>
              </motion.div>
            )}
          </DialogContent>
        </Dialog>
      </AnimatePresence>
    </div>
  )
}
