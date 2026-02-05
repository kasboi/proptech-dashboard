

export const siteConfig = {
    name: "Proptech Dashboard",
    description: "Real Estate Dashboard",
    mainNav: [
        {
            title: "Dashboard",
            href: "/",
        },
        {
            title: "Properties",
            href: "/properties",
        },
        {
            title: "Analytics",
            href: "/analytics",
        },
    ],

} as const;

export type SiteConfig = typeof siteConfig;
