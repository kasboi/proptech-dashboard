"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SalesChart } from "./sales-chart";
import { StatsGrid } from "./stats-grid";

export function SalesOverview() {
    const [period, setPeriod] = useState<"1 Week" | "1 Month" | "1 Year">("1 Year");

    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-full">

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">Sales Overview</h2>
                    <p className="text-gray-500 text-xs mt-1">Showing overview Jan 2022 - Sep 2022</p>
                </div>
                <Button
                    variant="outline"
                    className="text-sm font-medium rounded-2xl h-10 border-gray-200 px-6 hover:bg-gray-50 transition-all"
                >
                    View Transactions
                </Button>
            </div>


            <div className="flex justify-end mb-4">
                <div className="flex bg-[#f3f4f6]/50 p-1 rounded-xl">
                    {(["1 Week", "1 Month", "1 Year"] as const).map((p) => (
                        <button
                            key={p}
                            onClick={() => setPeriod(p)}
                            className={cn(
                                "px-6 py-2 text-xs font-bold rounded-lg transition-all",
                                period === p
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-400 hover:text-gray-900"
                            )}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>


            <div className="border-t border-gray-100 -mx-5 mb-8" />

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 relative">
                    <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 z-10">
                        <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-colors">
                            <ChevronLeft size={14} />
                        </button>
                    </div>
                    <SalesChart />
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-colors">
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>


                <div className="lg:w-[50%]">
                    <StatsGrid />
                </div>
            </div>
        </div>
    );
}
