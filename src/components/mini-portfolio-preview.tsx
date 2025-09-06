"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

// ✅ Add heading here
const sampleVideos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Essential Project 1",
    description: "Core functionality showcase",
  },
  {
    id: "9bZkp7q19f0",
    title: "Essential Project 2",
    description: "Foundation work example",
  },
]

export default function MiniPortfolioPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="rounded-lg bg-gradient-to-br from-sky-500/5 to-purple-500/5 p-6"
    >
      {/* Section Heading */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
          Essential Projects
        </h2>
      </div>

      {/* Videos Grid */}
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        {sampleVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
          >
            <Card className="group overflow-hidden border-border/40 bg-background/50 transition-all duration-300 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/10">
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?controls=1&modestbranding=1&rel=0`}
                  title={video.title}
                  className="h-full w-full transition-transform duration-300 group-hover:scale-105"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-foreground">{video.title}</h4>
                <p className="text-sm text-foreground/70">{video.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Link href="/portfolio">
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-sky-500/10 bg-transparent flex items-center gap-2"
          >
            View All <ExternalLink size={14} />
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
