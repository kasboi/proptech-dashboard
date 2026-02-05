export const APP_NAME = 'Expert Listing';
export const APP_DESCRIPTION = 'Professional property management dashboard';
export const APP_VERSION = '2.0.0';

export const ROUTES = {
    HOME: '/',
    DASHBOARD: '/',
    PROPERTIES: '/properties',
    ANALYTICS: '/analytics',
    SETTINGS: '/settings',
} as const;

export const TIME_PERIODS = ['Week', 'Month', 'Year'] as const;
export type TimePeriod = (typeof TIME_PERIODS)[number];

export const PROPERTY_STATUS = {
    AVAILABLE: 'available',
    PENDING: 'pending',
    SOLD: 'sold',
} as const;

export type PropertyStatus =
    (typeof PROPERTY_STATUS)[keyof typeof PROPERTY_STATUS];

export const USER_ROLES = {
    ADMIN: 'admin',
    AGENT: 'agent',
    USER: 'user',
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export const BREAKPOINTS = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
} as const;

export const ANIMATION_DURATION = {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
} as const;

export const Z_INDEX = {
    DROPDOWN: 1000,
    STICKY: 1020,
    FIXED: 1030,
    MODAL_BACKDROP: 1040,
    MODAL: 1050,
    POPOVER: 1060,
    TOOLTIP: 1070,
} as const;
