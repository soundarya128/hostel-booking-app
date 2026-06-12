export type Room = {
  id: string
  name: string
  tagline: string
  price: number
  image: string
  size: string
  occupancy: string
  features: string[]
}

export const rooms: Room[] = [
  {
    id: "normal",
    name: "Normal Room",
    tagline: "Comfort made simple",
    price: 2499,
    image: "/images/room-normal.png",
    size: "240 sq.ft.",
    occupancy: "2 Guests",
    features: ["Queen Bed", "Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Daily Housekeeping"],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    tagline: "Space to unwind",
    price: 3999,
    image: "/images/room-deluxe.png",
    size: "360 sq.ft.",
    occupancy: "3 Guests",
    features: [
      "King Bed",
      "Lounge Seating",
      "Premium Wi-Fi",
      "Mini Bar",
      "City View",
      "Complimentary Breakfast",
    ],
  },
  {
    id: "premium",
    name: "Premium Suite",
    tagline: "The finest of Balaji",
    price: 6499,
    image: "/images/room-premium.png",
    size: "520 sq.ft.",
    occupancy: "4 Guests",
    features: [
      "Grand King Bed",
      "Private Lounge",
      "Panoramic Views",
      "Marble Bathroom",
      "24/7 Butler Service",
      "Breakfast & Evening Hi-Tea",
    ],
  },
]

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
