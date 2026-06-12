import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <span className="font-serif text-xl font-semibold text-primary">
            Balaji Hotel
          </span>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Refined hospitality in the heart of Coimbatore. Your comfort is our
            tradition.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              RS Puram, Coimbatore, Tamil Nadu 641002
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-accent" />
              +91 422 400 1234
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-accent" />
              stay@balajihotel.in
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Hours
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-accent" />
              Check-in: 2:00 PM
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-accent" />
              Check-out: 11:00 AM
            </li>
            <li>Reception open 24/7</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Explore
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="#rooms" className="transition-colors hover:text-primary">
                Rooms
              </a>
            </li>
            <li>
              <a href="#amenities" className="transition-colors hover:text-primary">
                Amenities
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#book" className="transition-colors hover:text-primary">
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Balaji Hotel, Coimbatore. All rights
          reserved.
        </div>
      </div>
    </footer>
  )
}
