import { z } from "zod";

export const chartDataPointSchema = z.object({
    month: z.string(),
    value1: z.number(),
    value2: z.number(),
    value3: z.number(),
});

export type ChartDataPoint = z.infer<typeof chartDataPointSchema>;

export const propertySchema = z.object({
    id: z.string(),
    title: z.string(),
    label: z.string(),
    imageUrl: z.string(),
    clickCount: z.number().optional(),
});

export type Property = z.infer<typeof propertySchema>;

export interface StatCardProps {
    label: string;
    amount: string;
    change: number;
    isPositive: boolean;
    colorClass: string;
}

export interface WidgetStat {
    label: string;
    value: string;
}

export interface WidgetCardProps {
    title: string;
    icon: string;
    stats: WidgetStat[];
    className?: string;
}
