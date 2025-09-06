"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck, Cpu, Bot, Workflow, Rocket, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import MiniPortfolioPreview from "@/components/mini-portfolio-preview"

function TechAccent() {
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

export default function SignaturePage() {
  const packageData = {
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
    suitableFor: "Luxury campaigns, hero films, cinematic brand storytelling.",
    process: [
      "Brief & asset intake (logo, product refs)",
      "Script & storyboard (quick approval)",
      "AI generation + clean edit",
      "Final Delivery",
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-4 py-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/#pricing" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Packages
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="border-border/60 bg-gradient-to-br from-background to-background/50">
            <CardHeader className="pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-4xl font-bold">{packageData.title}</CardTitle>
                  <CardDescription className="mt-2 text-lg">{packageData.subtitle}</CardDescription>
                </div>
                <div className="flex items-center gap-3">
                  <TechAccent />
                  <span className="rounded-full bg-sky-500/80 px-3 py-1 text-sm font-medium text-white">
                    {packageData.badge}
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="mb-4 text-xl font-semibold">What's Included</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {packageData.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      className="flex items-start gap-3 rounded-lg bg-background/50 p-3"
                    >
                      <BadgeCheck className="mt-0.5 shrink-0 text-sky-500" size={18} />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Suitable For */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-lg bg-sky-500/5 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold">Perfect For</h3>
                <p className="text-foreground/80">{packageData.suitableFor}</p>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="mb-4 text-xl font-semibold">Our Process</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {packageData.process.map((step, index) => {
                    const Icon = [Cpu, Bot, Workflow, Rocket][index % 4]
                    return (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3 rounded-lg bg-background/50 p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10">
                          <Icon size={20} className="text-sky-500 icon-floaty" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-sky-500">Step {index + 1}</div>
                          <div className="text-sm font-medium">{step}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Mini Portfolio Preview */}
              <MiniPortfolioPreview />

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center pt-6"
              >
                <Button size="lg" className="bg-sky-500 hover:bg-sky-600 btn-glow btn-pulse px-8 py-3 text-lg" asChild>
                  <a href="https://www.elevique.in/" target="_blank" rel="noopener noreferrer">
                    Get Started with Signature
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
