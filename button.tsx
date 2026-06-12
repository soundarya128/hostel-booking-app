"use client"

import { Check, Maximize, Users } from "lucide-react"
import { rooms, formatPrice } from "@/lib/rooms"

export function Rooms({ onBook }: { onBook: (roomId: string) => void }) {
  return (
    <section id="rooms" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Our Rooms
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Find the perfect room for your stay
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Three thoughtfully designed categories, each offering its own touch of
            comfort and elegance.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {rooms.map((room) => (
            <article
              key={room.id}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={`${room.name} at Balaji Hotel`}
                  className="size-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-md bg-background/90 px-3 py-1 text-sm font-semibold text-primary backdrop-blur-sm">
                  {formatPrice(room.price)}
                  <span className="text-xs font-normal text-muted-foreground"> / night</span>
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {room.name}
                </h3>
                <p className="mt-1 text-sm italic text-accent">{room.tagline}</p>

                <div className="mt-4 flex items-center gap-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Maximize className="size-4" />
                    {room.size}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="size-4" />
                    {room.occupancy}
                  </span>
                </div>

                <ul className="mt-5 space-y-2">
                  {room.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <Check className="size-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onBook(room.id)}
                  className="mt-6 w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Book {room.name}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
