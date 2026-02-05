"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

interface NavItemProps {
    iconPath: string;
    label: string;
    active?: boolean;
}

function NavItem({ iconPath, label, active }: NavItemProps) {
    return (
        <button
            className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors rounded-xl whitespace-nowrap",
                active
                    ? "bg-[#e6f4f1] text-[#0f4c3a]"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            )}
        >
            <div className="relative w-4.5 h-4.5 flex items-center justify-center">
                <Image
                    src={iconPath}
                    alt={label}
                    width={18}
                    height={18}
                    className={cn(active ? "opacity-100" : "opacity-60 grayscale")}
                />
            </div>
            <span>{label}</span>
        </button>
    );
}

function MobileNavItem({
    iconPath,
    label,
    active,
    onClick,
}: NavItemProps & { onClick?: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-xl w-full",
                active
                    ? "bg-[#e6f4f1] text-[#0f4c3a]"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            )}
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                <Image
                    src={iconPath}
                    alt={label}
                    width={20}
                    height={20}
                    className={cn(active ? "opacity-100" : "opacity-60 grayscale")}
                />
            </div>
            <span>{label}</span>
        </button>
    );
}

export function Navigation() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileNavOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navItems = [
        { iconPath: "/icons/dashboard.svg", label: "Dashboard", active: true },
        { iconPath: "/icons/listings.svg", label: "Listings", active: false },
        { iconPath: "/icons/users.svg", label: "Users", active: false },
        { iconPath: "/icons/request.svg", label: "Request", active: false },
        { iconPath: "/icons/applications.svg", label: "Applications", active: false },
        { iconPath: "/icons/task.svg", label: "Tasks", active: false },
    ];

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-[--container-2xl] mx-auto px-4 md:px-6 flex items-center justify-between md:justify-center py-2 h-14">
                <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-70 bg-white p-0">
                        <div className="flex flex-col h-full">
                            <div className="bg-[#0f4c3a] text-white p-4">
                                <SheetTitle className="text-lg font-semibold text-white">Navigation</SheetTitle>
                            </div>


                            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                {navItems.map((item, index) => (
                                    <MobileNavItem
                                        key={index}
                                        iconPath={item.iconPath}
                                        label={item.label}
                                        active={item.active}
                                        onClick={() => setMobileNavOpen(false)}
                                    />
                                ))}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>

                <div className="hidden md:flex items-center justify-center gap-10 overflow-x-auto no-scrollbar">
                    {navItems.map((item, index) => (
                        <NavItem
                            key={index}
                            iconPath={item.iconPath}
                            label={item.label}
                            active={item.active}
                        />
                    ))}
                </div>

                <div className="md:hidden text-sm font-semibold text-gray-900">Dashboard</div>

                <div className="md:hidden w-10"></div>
            </div>
        </nav>
    );
}
