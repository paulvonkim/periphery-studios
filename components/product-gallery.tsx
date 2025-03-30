"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(0);

  const safeImages =
    Array.isArray(images) && images.length > 0
      ? images
      : ["/placeholder.svg?height=800&width=600"];

  return (
    <div>
      <div className="relative aspect-[3/4]">
        <Image
          src={safeImages[activeImage] || "/placeholder.svg"}
          alt="Product image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {safeImages.length > 1 && (
        <div className="grid grid-cols-3 w-full mt-[1px]">
          {safeImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`relative aspect-square ${
                activeImage === index ? "ring-1 ring-inset ring-black" : ""
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
