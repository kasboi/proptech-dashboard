export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export interface IconProps extends BaseComponentProps {
    size?: number;
    color?: string;
}

export interface Property {
    id: string;
    name: string;
    location: string;
    price: number;
    image: string;
    beds: number;
    baths: number;
    sqft: number;
    status: 'available' | 'pending' | 'sold';
    featured?: boolean;
}

export interface SalesData {
    month: string;
    sales: number;
    revenue: number;
}

export interface FinancialMetric {
    label: string;
    value: string;
    change?: number;
    trend?: 'up' | 'down' | 'neutral';
}

export interface WidgetStat {
    label: string;
    value: string;
}

export interface Widget {
    title: string;
    icon: string;
    stats: WidgetStat[];
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: 'admin' | 'agent' | 'user';
}

export interface NavItem {
    label: string;
    href: string;
    icon?: React.ComponentType<IconProps>;
    active?: boolean;
    badge?: string | number;
}

export interface FormField<T = string> {
    name: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select';
    value: T;
    error?: string;
    required?: boolean;
    placeholder?: string;
}

export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, Keys>
> &
    {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];

export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
