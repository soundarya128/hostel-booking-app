const stats = [
  { value: "48", label: "Elegant Rooms" },
  { value: "24/7", label: "Concierge" },
  { value: "4.8", label: "Guest Rating" },
  { value: "12", label: "Years of Service" },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/lobby.png"
            alt="Balaji Hotel lobby interior"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            About Balaji Hotel
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Classic hospitality, reimagined for the modern traveller
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Nestled in the bustling heart of Coimbatore, Balaji Hotel blends
            traditional South Indian warmth with contemporary luxury. From the
            moment you step into our marble-floored lobby, every detail is crafted
            to make your stay effortless and memorable.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Whether you are here for business or leisure, our dedicated team
            ensures personalised service, fine dining, and serene comfort
            throughout your visit.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-3xl font-semibold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
