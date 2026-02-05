import { ChartDataPoint, Property } from "../types";

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
