"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function SizeSelector({ sizes }: { sizes: string[] }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  if (!sizes || sizes.length === 0) {
    return <div className="text-sm text-gray-500 mb-4">No sizes available for this product.</div>
  }

  return (
    <div>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {sizes.map((size) => (
          <Button
            key={size}
            variant={selectedSize === size ? "default" : "outline"}
            onClick={() => setSelectedSize(size)}
            className="h-12"
          >
            {size}
          </Button>
        ))}
      </div>

      <Button variant="secondary" className="w-full py-6 text-sm" disabled={!selectedSize}>
        {selectedSize ? `SELECT SIZE ${selectedSize}` : "SELECT AN OPTION"}
      </Button>
    </div>
  )
}

