const portfolio = [
  "VIDEO_ID_A",
  "VIDEO_ID_B",
  "VIDEO_ID_C",
  "VIDEO_ID_D",
  "VIDEO_ID_E",
  "VIDEO_ID_F",
]

export function VideoGrid() {
  return (
    <section id="portfolio" className="py-20">
      <div className="mb-10 text-center">
        {/* Gradient Title */}
        <h2 className="text-2xl font-bold md:text-3xl bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
          Portfolio
        </h2>
        {/* Muted brand-colored subtitle */}
        <p className="text-brand-secondary/80">
          Selected work. Swap with your videos anytime.
        </p>
      </div>

      {/* Grid of videos */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 min-[880px]:grid-cols-3">
        {portfolio.map((id) => (
          <div
            key={id}
            className="aspect-video overflow-hidden rounded-2xl border border-white/10 glass"
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
    </section>
  )
}
