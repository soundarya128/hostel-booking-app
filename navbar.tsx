import { MapPin, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src="/images/hotel-hero.png"
        alt="Balaji Hotel exterior glowing at dusk"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/80" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-background/10 px-4 py-1.5 backdrop-blur-sm">
          <Star className="size-4 fill-accent text-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground">
            Five-Star Luxury Stay
          </span>
        </div>

        <h1 className="mt-6 text-balance font-serif text-5xl font-semibold leading-tight text-primary-foreground md:text-7xl">
          A Refined Escape in the Heart of Coimbatore
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85 md:text-lg">
          Welcome to Balaji Hotel — where timeless elegance meets modern comfort.
          Discover thoughtfully designed rooms, warm hospitality, and a stay you
          will remember.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#rooms"
            className="rounded-md bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Explore Rooms
          </a>
          <a
            href="#book"
            className="rounded-md border border-primary-foreground/40 bg-background/10 px-7 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/20"
          >
            Book Your Stay
          </a>
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm text-primary-foreground/80">
          <MapPin className="size-4" />
          <span>RS Puram, Coimbatore, Tamil Nadu</span>
        </div>
      </div>
    </section>
  )
}
