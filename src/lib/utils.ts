import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "USD"): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(amount);
}

export function formatNumber(number: number): string {
    return new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(number);
}

export function formatNumberFull(number: number): string {
    return new Intl.NumberFormat("en-US").format(number);
}

export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return new Intl.DateTimeFormat("en-US", options).format(dateObj);
}

export function formatRelativeTime(date: Date | string): string {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

    if (diffInSeconds < 60) return "just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;

    return formatDate(dateObj, { month: "short", day: "numeric", year: "numeric" });
}

export function truncate(str: string, length: number, suffix = "..."): string {
    if (str.length <= length) return str;
    return str.slice(0, length - suffix.length) + suffix;
}

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


export function toTitleCase(str: string): string {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => capitalize(word))
        .join(" ");
}


export function generateId(prefix = ""): string {
    const random = Math.random().toString(36).substring(2, 11);
    return prefix ? `${prefix}-${random}` : random;
}


export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            timeout = null;
            func(...args);
        };

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


export function throttle<T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;

    return function executedFunction(...args: Parameters<T>) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isEmpty(value: unknown): boolean {
    if (value === null || value === undefined) return true;
    if (typeof value === "string") return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === "object") return Object.keys(value).length === 0;
    return false;
}

export function safeJsonParse<T>(json: string, fallback: T): T {
    try {
        return JSON.parse(json) as T;
    } catch {
        return fallback;
    }
}

export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    return array.reduce(
        (result, item) => {
            const groupKey = String(item[key]);
            if (!result[groupKey]) {
                result[groupKey] = [];
            }
            result[groupKey].push(item);
            return result;
        },
        {} as Record<string, T[]>
    );
}


export function unique<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}

export function chunk<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

