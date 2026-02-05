import Image from "next/image";
import { Home, User, ChevronRight } from "lucide-react";
import type { WidgetCardProps, WidgetStat } from "@/features/dashboard/types";
import { cn } from "@/lib/utils";

function StatItem({ label, value }: WidgetStat) {
    return (
        <div className="flex flex-col">
            <span className="text-gray-500 text-xs mb-1 font-medium">{label}</span>
            <span className="text-xl font-bold text-gray-900">{value}</span>
        </div>
    );
}

export function WidgetCard({ title, icon, stats, className }: WidgetCardProps) {
    const isSvgIcon = icon.startsWith("/") || icon.endsWith(".svg");

    return (
        <div
            className={cn(
                "bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col",
                className
            )}
        >
        
            <div className="bg-[#f8f9fa] px-6 py-4 flex items-center justify-between border-b border-gray-100/50">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center">
                        {isSvgIcon ? (
                            <Image src={icon} alt={title} width={18} height={18} />
                        ) : icon === "home" ? (
                            <Home className="text-blue-500" size={16} />
                        ) : (
                            <User className="text-blue-500" size={16} />
                        )}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">{title}</h3>
                </div>
                <button className="flex items-center text-blue-600 text-xs font-semibold hover:text-blue-700 transition-colors">
                    View all <ChevronRight size={14} className="ml-0.5" />
                </button>
            </div>

            <div className="p-6 pt-6 pb-6 flex justify-between items-start mt-auto bg-white">
                {stats.map((stat, index) => (
                    <StatItem key={index} label={stat.label} value={stat.value} />
                ))}
            </div>
        </div>
    );
}
