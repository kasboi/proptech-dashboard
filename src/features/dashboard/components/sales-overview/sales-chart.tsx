"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { useSalesData } from "@/features/dashboard/hooks/use-sales-data";

export function SalesChart() {
    const { data } = useSalesData();

    return (
        <div className="h-44 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    barCategoryGap="30%"
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9ca3af", fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9ca3af", fontSize: 10 }}
                        tickFormatter={(value) => `${value}m`}
                        domain={[0, 50]}
                        ticks={[0, 10, 20, 30, 40, 50]}
                    />
                    <Tooltip
                        cursor={{ fill: "transparent" }}
                        contentStyle={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            border: "none",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                    {/* Creating the clustered bar look with 3 colors matching the design */}
                    <Bar dataKey="value1" fill="#4f46e5" radius={[1, 1, 0, 0]} barSize={4} />
                    <Bar dataKey="value2" fill="#10b981" radius={[1, 1, 0, 0]} barSize={4} />
                    <Bar dataKey="value3" fill="#ef4444" radius={[1, 1, 0, 0]} barSize={4} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
