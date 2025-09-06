"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import FloatingThemeToggle from "@/components/floating-theme-toggle"
import { Play, Filter, Grid, List } from "lucide-react"

// -------------------------- Types --------------------------
interface Video {
  id: string
  title: string
  description: string
  category: string
}

interface Image {
  src: string
  title: string
  category: string
}

// ---------------------- Data ----------------------
const portfolioData: Record<string, Video[]> = {
  essential: [
    { id: "dQw4w9WgXcQ", title: "Brand Identity Essentials", description: "Core branding foundation for startups", category: "Branding" },
    { id: "dQw4w9WgXcQ", title: "Website Fundamentals", description: "Clean, responsive web design", category: "Web Design" },
    { id: "dQw4w9WgXcQ", title: "Social Media Basics", description: "Essential social media presence", category: "Social Media" },
    { id: "dQw4w9WgXcQ", title: "Logo Design Core", description: "Professional logo creation", category: "Branding" },
  ],
  impact: [
    { id: "dQw4w9WgXcQ", title: "Digital Transformation", description: "Complete brand overhaul", category: "Strategy" },
    { id: "dQw4w9WgXcQ", title: "E-commerce Revolution", description: "Game-changing online store", category: "E-commerce" },
    { id: "dQw4w9WgXcQ", title: "Marketing Campaign", description: "Viral marketing success", category: "Marketing" },
    { id: "dQw4w9WgXcQ", title: "App Design Innovation", description: "Award-winning mobile app", category: "App Design" },
  ],
  signature: [
    { id: "dQw4w9WgXcQ", title: "Luxury Brand Experience", description: "Premium brand storytelling", category: "Luxury" },
    { id: "dQw4w9WgXcQ", title: "Interactive Masterpiece", description: "Cutting-edge web experience", category: "Interactive" },
    { id: "dQw4w9WgXcQ", title: "Motion Graphics Epic", description: "Cinematic brand video", category: "Motion" },
    { id: "dQw4w9WgXcQ", title: "Art Direction Vision", description: "Creative direction excellence", category: "Art Direction" },
  ],
}

const galleryImages: Image[] = [
  { src: "/artistic-composition.jpeg", title: "Artistic Composition", category: "Art" },
  { src: "/brand-design-example.jpeg", title: "Brand Design Example", category: "Branding" },
  { src: "/creative-portfolio-piece.jpeg", title: "Creative Portfolio Piece", category: "Creative" },
  { src: "/digital-art-creation.jpeg", title: "Digital Art Creation", category: "Digital" },
]

const categories = ["All", "Branding", "Web Design", "Marketing", "Strategy", "Design", "Creative"]

// ---------------------- Components ----------------------
const VideoCard: React.FC<{ video: Video; index: number }> = ({ video, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group"
  >
    <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
      <div className="aspect-video relative overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          className="w-full h-full border-0 transition-transform duration-500 group-hover:scale-105"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2">
            <Play className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">{video.category}</span>
        <h3 className="text-lg font-bold mt-2">{video.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{video.description}</p>
      </div>
    </Card>
  </motion.div>
)

const GalleryCard: React.FC<{ image: Image; index: number }> = ({ image, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.03 }}
    className="group"
  >
    <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-0">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/20 text-white">{image.category}</span>
          <h3 className="text-white font-bold mt-1">{image.title}</h3>
        </div>
      </div>
    </Card>
  </motion.div>
)

// ---------------------- Main Page ----------------------
const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const allVideos = [...portfolioData.essential, ...portfolioData.impact, ...portfolioData.signature]
  const filteredVideos = activeCategory === "All" ? allVideos : allVideos.filter((v) => v.category === activeCategory)
  const filteredGallery = activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <FloatingThemeToggle />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our curated projects across categories — showcasing creativity, innovation, and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
            <Button size="lg" className="btn-glow" onClick={() => document.getElementById("portfolio-grid")?.scrollIntoView({ behavior: "smooth" })}>
              Explore Work
            </Button>
            <Link href="/#pricing">
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation + Filters + Videos */}
      <section className="max-w-7xl mx-auto px-4 py-12 flex gap-8" id="portfolio-grid">
        {/* Left Navigation */}
        <aside className="w-40 flex flex-col gap-4">
          {Object.keys(portfolioData).map((section) => (
            <Button
              key={section}
              variant="outline"
              className="justify-start"
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </aside>

        {/* Right Content */}
        <div className="flex-1">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                >
                  <Filter className="w-3 h-3 mr-1" />
                  {cat}
                </Button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Sections */}
          {Object.entries(portfolioData).map(([section, videos]) => (
            <div key={section} id={section} className="mb-16">
              <h2 className="text-3xl font-bold mb-6 capitalize gradient-text">{section}</h2>
              <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                {videos.map((video, index) => (
                  <VideoCard key={index} video={video} index={index} />
                ))}
              </div>
            </div>
          ))}

          {/* Gallery */}
          {filteredGallery.length > 0 && (
            <>
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Gallery</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Selected visual work and creative explorations
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredGallery.map((img, idx) => (
                  <GalleryCard key={idx} image={img} index={idx} />
                ))}
              </div>
            </>
          )}

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12 border border-primary/10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ready to Start Your Project?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Explore our packages and find the perfect fit.
            </p>
            <Link href="/#pricing">
              <Button size="lg" className="btn-glow bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white border-0 px-12 py-4 text-lg font-semibold rounded-2xl">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  )
}

// ✅ Default export
export default PortfolioPage
