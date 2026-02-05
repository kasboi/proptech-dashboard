"use client";

import Image from "next/image";
import type { Property } from "@/features/dashboard/types";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article
      className="group relative rounded-2xl overflow-hidden h-64 md:h-80 shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      tabIndex={0}
      role="button"
      aria-label={`View ${property.title} - ${property.label}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          // Handle click action
        }
      }}
    >
      <Image
        src={property.imageUrl}
        alt={`Property image of ${property.title}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div
        className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90"
        aria-hidden="true"
      />

      <div className="absolute bottom-0 left-0 p-6 w-full">
        <p className="text-white/80 text-xs font-bold uppercase mb-1">{property.label}</p>
        <h3 className="text-white text-lg font-bold ">{property.title}</h3>

        {/* Carousel indicators - decorative only */}
        <div
          className="flex gap-1.5 mt-4 justify-center"
          role="group"
          aria-label="Image carousel indicators"
        >
          <div
            className="size-1.5 rounded-full bg-white"
            aria-current="true"
            aria-label="Image 1 of 3 (current)"
          />
          <div className="size-1.5 rounded-full bg-white/40" aria-label="Image 2 of 3" />
          <div className="size-1.5 rounded-full bg-white/40" aria-label="Image 3 of 3" />
        </div>
      </div>
    </article>
  );
}
