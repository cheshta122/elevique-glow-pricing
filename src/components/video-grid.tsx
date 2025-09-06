"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const essentialVideos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Essential Project 1",
    description: "Core functionality showcase",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Essential Project 2",
    description: "Foundation work example",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-4 relative bg-black">
      {/* Gradient graphics */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-transparent to-brand-secondary/10 pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-20 w-56 h-56 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            Essential Projects
          </h2>
        </motion.div>

        {/* Essential Videos (2 only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {essentialVideos.map((video, index) => (
            <motion.div
              key={video.id + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-background border border-brand-primary/20">
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
                  <p className="text-gray-400">{video.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All button */}
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
              className="btn-glow bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white border-0 px-8 py-3 text-lg font-semibold rounded-2xl"
            >
              View All
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
