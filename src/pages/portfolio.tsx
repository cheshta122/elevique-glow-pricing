"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import FloatingThemeToggle from "@/components/floating-theme-toggle"

const essentialVideos = [
  { id: "dQw4w9WgXcQ", title: "Essential Project 1", description: "Core functionality showcase" },
  { id: "dQw4w9WgXcQ", title: "Essential Project 2", description: "Foundation work example" },
  { id: "dQw4w9WgXcQ", title: "Essential Project 3", description: "Basic implementation" },
  { id: "dQw4w9WgXcQ", title: "Essential Project 4", description: "Standard approach" },
]

const impactVideos = [
  { id: "dQw4w9WgXcQ", title: "Impact Project 1", description: "Transformative solution" },
  { id: "dQw4w9WgXcQ", title: "Impact Project 2", description: "Game-changing results" },
  { id: "dQw4w9WgXcQ", title: "Impact Project 3", description: "Revolutionary approach" },
  { id: "dQw4w9WgXcQ", title: "Impact Project 4", description: "Breakthrough innovation" },
]

const signatureVideos = [
  { id: "dQw4w9WgXcQ", title: "Signature Work 1", description: "Our unique style" },
  { id: "dQw4w9WgXcQ", title: "Signature Work 2", description: "Distinctive approach" },
  { id: "dQw4w9WgXcQ", title: "Signature Work 3", description: "Premium execution" },
  { id: "dQw4w9WgXcQ", title: "Signature Work 4", description: "Masterpiece creation" },
]

const galleryImages = [
  { src: "/modern-design-showcase.jpeg", title: "Design Showcase 1" },
  { src: "/creative-portfolio-piece.jpeg", title: "Creative Work 1" },
  { src: "/artistic-composition.jpeg", title: "Artistic Piece 1" },
  { src: "/visual-identity-design.jpeg", title: "Visual Identity 1" },
  { src: "/brand-design-example.jpeg", title: "Brand Design 1" },
  { src: "/digital-art-creation.jpeg", title: "Digital Art 1" },
]

function VideoGrid({ videos, title }: { videos: typeof essentialVideos; title: string }) {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
          {title}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {videos.map((video, index) => (
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
        <Link href="/#pricing">
          <Button
            size="lg"
            className="btn-glow bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:from-[var(--brand-secondary)] hover:to-[var(--brand-primary)] text-white border-0 px-8 py-3 text-lg font-semibold rounded-2xl"
          >
            View Pricing
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}

export default function PortfolioPage() {
  return (
    <main className="min-h-dvh bg-background text-foreground relative">
      <div aria-hidden className="animated-aurora" />
      <FloatingThemeToggle />
      <Header />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive collection of work across different categories, showcasing our expertise and
              creative vision.
            </p>
          </motion.div>

          <VideoGrid videos={essentialVideos} title="Essential" />
          <VideoGrid videos={impactVideos} title="Impact" />
          <VideoGrid videos={signatureVideos} title="Signature" />

          {/* Gallery Section */}
          <section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Gallery
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold group-hover:text-[var(--brand-primary)] transition-colors">
                        {image.title}
                      </h3>
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
              <Link href="/#pricing">
                <Button
                  size="lg"
                  className="btn-glow bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:from-[var(--brand-secondary)] hover:to-[var(--brand-primary)] text-white border-0 px-8 py-3 text-lg font-semibold rounded-2xl"
                >
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </section>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </main>
  )
}
