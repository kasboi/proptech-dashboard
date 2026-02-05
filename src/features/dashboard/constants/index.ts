import { ChartDataPoint, Property } from "../types";

/**
 * Theme Colors for use in JS contexts (charts, etc.)
 * These mirror the CSS custom properties in globals.css
 */
export const THEME_COLORS = {
    // Brand colors
    brand: "#0f4c3a",
    brandLight: "#e6f4f1",
    brandForeground: "#ffffff",
    
    // Surface colors
    surfacePage: "#fafbfc",
    surfaceCard: "#ffffff",
    surfaceElevated: "#f8f9fa",
    surfaceMuted: "#f3f4f6",
    
    // Dark colors
    dark: "#1f2937",
    darkNavy: "#0a1e2f",
    darkCharcoal: "#1a1a1a",
    darkCalendar: "#111111",
    
    // Status colors
    positive: "#10b981",
    negative: "#ef4444",
    
    // Chart colors
    chart: {
        purple: "#4f46e5",
        green: "#10b981",
        red: "#ef4444",
        grid: "#e5e7eb",
        axis: "#9ca3af",
        background: "#ffffff",
    },
} as const;

export const SALES_DATA: ChartDataPoint[] = [
    { month: "Jan", value1: 35, value2: 28, value3: 10 },
    { month: "Feb", value1: 5, value2: 28, value3: 10 },
    { month: "Mar", value1: 15, value2: 7, value3: 3 },
    { month: "Apr", value1: 15, value2: 26, value3: 10 },
    { month: "May", value1: 10, value2: 2, value3: 8 },
    { month: "Jun", value1: 38, value2: 48, value3: 8 },
    { month: "Jul", value1: 25, value2: 36, value3: 18 },
    { month: "Aug", value1: 25, value2: 6, value3: 18 },
    { month: "Sep", value1: 38, value2: 32, value3: 6 },
];

export const PROPERTIES: Property[] = [
    {
        id: "1",
        label: "MOST CLICKED",
        title: "Urban Prime Plaza Premiere",
        imageUrl: "/icons/most-clicked.svg",
    },
    {
        id: "2",
        label: "MOST WATCHLISTED",
        title: "Urban Prime Plaza Premiere",
        imageUrl: "/icons/most-watchlisted.svg",
    },
    {
        id: "3",
        label: "HOTTEST LISTING",
        title: "Urban Prime Plaza Premiere",
        imageUrl: "/icons/hottest-listing.svg",
    },
];
