"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-tight text-primary">
            Balaji Hotel
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            Coimbatore
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="text-primary md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background md:hidden",
          open ? "max-h-80" : "max-h-0",
          "transition-[max-height] duration-300 ease-in-out",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-foreground/80 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  )
}
