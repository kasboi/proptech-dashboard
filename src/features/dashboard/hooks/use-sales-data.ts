import { useState, useMemo } from "react";
import { SALES_DATA } from "../constants";
import type { ChartDataPoint } from "../types";

export function useSalesData() {
    const [data] = useState<ChartDataPoint[]>(SALES_DATA);
    const [isLoading] = useState(false);
    const [error] = useState<Error | null>(null);

    const totalSales = useMemo(() => {
        return data.reduce((acc, curr) => acc + curr.value1 + curr.value2 + curr.value3, 0);
    }, [data]);

    return {
        data,
        totalSales,
        isLoading,
        error,
    };
}
