import Image from "next/image";
import type { Property } from "@/features/dashboard/types";

interface PropertyCardProps {
    property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
    return (
        <div className="group relative rounded-2xl overflow-hidden h-64 md:h-80 shadow-md cursor-pointer">
            <Image
                src={property.imageUrl}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 p-6 w-full">
                <p className="text-white/80 text-xs font-bold uppercase mb-1">
                    {property.label}
                </p>
                <h3 className="text-white text-lg font-bold ">{property.title}</h3>

                <div className="flex gap-1.5 mt-4 justify-center">
                    <div className="size-1.5 rounded-full bg-white" />
                    <div className="size-1.5 rounded-full bg-white/40" />
                    <div className="size-1.5 rounded-full bg-white/40" />
                </div>
            </div>
        </div>
    );
}
