import Link from "next/link"

export function VideoGrid() {
  const portfolio = [
    "VIDEO_ID_A",
    "VIDEO_ID_B",
    "VIDEO_ID_C",
    "VIDEO_ID_D",
    "VIDEO_ID_E",
    "VIDEO_ID_F",
  ]

  return (
    <section id="portfolio" className="py-20 relative">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold md:text-3xl bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
          Portfolio
        </h2>
        <p className="text-brand-secondary/80">
          Selected work. Swap with your videos anytime.
        </p>
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 min-[880px]:grid-cols-3 max-w-6xl mx-auto px-4">
        {portfolio.map((id) => (
          <div
            key={id}
            className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/40"
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
              title="Portfolio video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        ))}
      </div>

      {/* View All button */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/portfolio"
          className="px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg hover:scale-105 transition-transform"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
