"use client"

import { forwardRef, useState } from "react"
import { CalendarCheck, CheckCircle2 } from "lucide-react"
import { rooms, formatPrice } from "@/lib/rooms"

type BookingFormProps = {
  selectedRoom: string
  onRoomChange: (roomId: string) => void
}

export const BookingForm = forwardRef<HTMLElement, BookingFormProps>(
  function BookingForm({ selectedRoom, onRoomChange }, ref) {
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "1",
    })

    const room = rooms.find((r) => r.id === selectedRoom) ?? rooms[0]

    function handleSubmit(e: React.FormEvent) {
      e.preventDefault()
      setSubmitted(true)
    }

    const inputClass =
      "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
    const labelClass = "text-sm font-medium text-foreground"

    return (
      <section
        id="book"
        ref={ref}
        className="scroll-mt-20 bg-primary py-20 text-primary-foreground md:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Reservations
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight md:text-4xl">
              Book your stay at Balaji Hotel
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/80">
              Reserve your room in just a few steps. Fill in your details and our
              team will confirm your booking shortly. No payment required to
              reserve.
            </p>

            <div className="mt-8 rounded-lg border border-primary-foreground/15 bg-background/5 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary-foreground/70">
                  Selected Room
                </span>
                <CalendarCheck className="size-5 text-accent" />
              </div>
              <div className="mt-2 font-serif text-2xl font-semibold">
                {room.name}
              </div>
              <div className="mt-1 text-accent">
                {formatPrice(room.price)}
                <span className="text-sm text-primary-foreground/60"> / night</span>
              </div>
              <p className="mt-3 text-sm text-primary-foreground/70">
                {room.size} · {room.occupancy} · {room.tagline}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-card p-6 text-card-foreground shadow-lg md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="size-14 text-primary" />
                <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                  Booking Requested!
                </h3>
                <p className="mt-3 max-w-sm text-pretty leading-relaxed text-muted-foreground">
                  Thank you, {form.name || "guest"}. Your request for the{" "}
                  <span className="font-medium text-foreground">{room.name}</span>{" "}
                  has been received. We&apos;ll confirm your reservation at{" "}
                  {form.email || "your email"} shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Make another booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="room" className={labelClass}>
                    Room Type
                  </label>
                  <select
                    id="room"
                    value={selectedRoom}
                    onChange={(e) => onRoomChange(e.target.value)}
                    className={inputClass}
                  >
                    {rooms.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} — {formatPrice(r.price)} / night
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="checkIn" className={labelClass}>
                      Check-in
                    </label>
                    <input
                      id="checkIn"
                      type="date"
                      required
                      value={form.checkIn}
                      onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className={labelClass}>
                      Check-out
                    </label>
                    <input
                      id="checkOut"
                      type="date"
                      required
                      value={form.checkOut}
                      onChange={(e) =>
                        setForm({ ...form, checkOut: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className={labelClass}>
                      Guests
                    </label>
                    <select
                      id="guests"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className={inputClass}
                    >
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request Booking · {formatPrice(room.price)} / night
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  You won&apos;t be charged now. Our team confirms availability.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    )
  },
)
