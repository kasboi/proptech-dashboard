"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useSalesData } from "@/features/dashboard/hooks/use-sales-data";
import { THEME_COLORS } from "@/features/dashboard/constants";

export function SalesChart() {
  const { data } = useSalesData();
  const { chart } = THEME_COLORS;

  // Generate description for screen readers
  const chartDescription = `Bar chart showing monthly sales data from ${data[0]?.month || "January"} to ${data[data.length - 1]?.month || "December"}. The chart displays three metrics per month represented by purple, green, and red bars.`;

  return (
    <div className="h-44 w-full mt-2" role="img" aria-label={chartDescription}>
      {/* Accessible data table for screen readers */}
      <table className="sr-only">
        <caption>Monthly Sales Overview Data</caption>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Metric 1</th>
            <th scope="col">Metric 2</th>
            <th scope="col">Metric 3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.month}>
              <th scope="row">{item.month}</th>
              <td>{item.value1}m</td>
              <td>{item.value2}m</td>
              <td>{item.value3}m</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          barCategoryGap="30%"
          aria-hidden="true"
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={chart.grid} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: chart.axis, fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: chart.axis, fontSize: 10 }}
            tickFormatter={(value) => `${value}m`}
            domain={[0, 50]}
            ticks={[0, 10, 20, 30, 40, 50]}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: chart.background,
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          {/* Creating the clustered bar look with 3 colors matching the design */}
          <Bar dataKey="value1" fill={chart.purple} radius={[1, 1, 0, 0]} barSize={4} name="Metric 1" />
          <Bar dataKey="value2" fill={chart.green} radius={[1, 1, 0, 0]} barSize={4} name="Metric 2" />
          <Bar dataKey="value3" fill={chart.red} radius={[1, 1, 0, 0]} barSize={4} name="Metric 3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
