import { ArrowUp, ArrowDown } from "lucide-react";
import type { StatCardProps } from "@/features/dashboard/types";
import { cn } from "@/lib/utils";

function StatCard({ label, amount, change, isPositive, colorClass }: StatCardProps) {
  return (
    <div className="group flex h-full flex-col justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div>
        <h3
          className={cn(
            "text-lg font-bold transition-transform origin-left duration-300",
            colorClass
          )}
        >
          {amount}
        </h3>

        <div className="mt-2.5 flex items-center justify-start gap-1.5">
          <p className="whitespace-nowrap text-[10.5px] font-medium text-gray-600">{label}</p>
          <div className="flex shrink-0 items-center gap-1">
            <div
              className={cn(
                "flex h-4 w-4 items-center justify-center rounded-full",
                isPositive ? "bg-positive" : "bg-negative"
              )}
            >
              {isPositive ? (
                <ArrowUp size={10} className="text-white" />
              ) : (
                <ArrowDown size={10} className="text-white" />
              )}
            </div>
            <span
              className={cn(
                "text-[11px] font-semibold",
                isPositive ? "text-positive" : "text-negative"
              )}
            >
              {change}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      <StatCard
        label="Total Inflow"
        amount="₦120,000,000.00"
        change={2.5}
        isPositive={true}
        colorClass="text-blue-600"
      />
      <StatCard
        label="MRR"
        amount="₦50,000,000.00"
        change={2.5}
        isPositive={true}
        colorClass="text-emerald-500"
      />
      <StatCard
        label="Commission Revenue"
        amount="₦200,000,000.00"
        change={0.5}
        isPositive={true}
        colorClass="text-teal-400"
      />
      <StatCard
        label="GMV"
        amount="₦100,000,000.00"
        change={0.5}
        isPositive={false}
        colorClass="text-red-500"
      />
    </div>
  );
}
