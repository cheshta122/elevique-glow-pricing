"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const portfolioVideos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Essential Portfolio Piece 1",
    description: "A showcase of our essential work",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Impact Project Highlight",
    description: "Demonstrating real-world impact",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Signature Style Example",
    description: "Our signature approach to design",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Creative Innovation",
    description: "Pushing creative boundaries",
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our latest work and creative projects that showcase our expertise and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {portfolioVideos.map((video, index) => (
            <motion.div
              key={video.id + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/portfolio">
            <Button
              size="lg"
              className="btn-glow bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:from-[var(--brand-secondary)] hover:to-[var(--brand-primary)] text-white border-0 px-8 py-3 text-lg font-semibold rounded-2xl"
            >
              View All
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

