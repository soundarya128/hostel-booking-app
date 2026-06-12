import { Wifi, UtensilsCrossed, Car, Dumbbell, Waves, Coffee, ConciergeBell, ShieldCheck } from "lucide-react"

const amenities = [
  { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Complimentary internet throughout the property." },
  { icon: UtensilsCrossed, title: "Fine Dining", desc: "Multi-cuisine restaurant with South Indian specialities." },
  { icon: Car, title: "Valet Parking", desc: "Secure on-site parking with valet service." },
  { icon: Dumbbell, title: "Fitness Centre", desc: "Fully equipped gym open round the clock." },
  { icon: Waves, title: "Swimming Pool", desc: "Rooftop pool with city views." },
  { icon: Coffee, title: "24h Room Service", desc: "Anytime dining delivered to your door." },
  { icon: ConciergeBell, title: "Concierge", desc: "Local tours, bookings, and travel assistance." },
  { icon: ShieldCheck, title: "Safe & Secure", desc: "24/7 security and in-room safes." },
]

export function Amenities() {
  return (
    <section id="amenities" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Amenities
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Everything you need, beautifully taken care of
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <div className="flex size-11 items-center justify-center rounded-md bg-secondary text-primary">
                <item.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-medium text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
