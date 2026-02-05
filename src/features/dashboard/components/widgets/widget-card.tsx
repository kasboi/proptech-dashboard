import Image from "next/image";
import { Home, User, ChevronRight } from "lucide-react";
import type { WidgetCardProps, WidgetStat } from "@/features/dashboard/types";
import { cn } from "@/lib/utils";

function StatItem({ label, value }: WidgetStat) {
  return (
    <div className="flex flex-col">
      <dt className="text-gray-500 text-xs mb-1 font-medium">{label}</dt>
      <dd className="text-xl font-bold text-gray-900">{value}</dd>
    </div>
  );
}

export function WidgetCard({ title, icon, stats, className }: WidgetCardProps) {
  const isSvgIcon = icon.startsWith("/") || icon.endsWith(".svg");

  return (
    <article
      className={cn(
        "bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col",
        className
      )}
      aria-labelledby={`widget-title-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="bg-surface-elevated px-6 py-4 flex items-center justify-between border-b border-gray-100/50">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center" aria-hidden="true">
            {isSvgIcon ? (
              <Image src={icon} alt="" width={18} height={18} aria-hidden="true" />
            ) : icon === "home" ? (
              <Home className="text-blue-500" size={16} aria-hidden="true" />
            ) : (
              <User className="text-blue-500" size={16} aria-hidden="true" />
            )}
          </div>
          <h3
            id={`widget-title-${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-sm font-bold text-gray-900"
          >
            {title}
          </h3>
        </div>
        <button
          type="button"
          className="flex items-center text-blue-600 text-xs font-semibold hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm cursor-pointer"
          aria-label={`View all ${title}`}
        >
          View all <ChevronRight size={14} className="ml-0.5" aria-hidden="true" />
        </button>
      </div>

      <dl className="p-6 pt-6 pb-6 flex justify-between items-start mt-auto bg-white">
        {stats.map((stat) => (
          <StatItem key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </dl>
    </article>
  );
}
