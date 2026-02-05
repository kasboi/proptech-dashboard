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
      type="button"
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-center gap-2 px-8 py-1.5 text-sm md:text-base font-medium transition-colors rounded-xl whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 cursor-pointer",
        active ? "bg-brand-light text-brand" : "text-gray-800 hover:text-gray-700 hover:bg-gray-100"
      )}
    >
      <div className="relative w-4.5 h-4.5 flex items-center justify-center">
        <Image
          src={iconPath}
          alt=""
          width={18}
          height={18}
          aria-hidden="true"
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
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-xl w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 cursor-pointer",
        active ? "bg-brand-light text-brand" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
      )}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Image
          src={iconPath}
          alt=""
          width={20}
          height={20}
          aria-hidden="true"
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
    <nav className="bg-white border-b border-gray-200 shadow-sm" aria-label="Main navigation">
      <div className="max-w-2xl mx-auto px-4 md:px-6 flex items-center justify-between py-2 h-14">
        <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-70 bg-white p-0">
            <div className="flex flex-col h-full">
              <div className="bg-brand text-brand-foreground p-4">
                <SheetTitle className="text-lg font-semibold text-white">Navigation</SheetTitle>
              </div>

              <nav className="flex-1 overflow-y-auto p-4 space-y-2" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    iconPath={item.iconPath}
                    label={item.label}
                    active={item.active}
                    onClick={() => setMobileNavOpen(false)}
                  />
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <div
          className="hidden w-full md:flex items-center justify-between gap-10 overflow-x-auto no-scrollbar"
          role="menubar"
        >
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              iconPath={item.iconPath}
              label={item.label}
              active={item.active}
            />
          ))}
        </div>

        <div className="md:hidden text-sm font-semibold text-gray-900" aria-current="page">
          Dashboard
        </div>

        <div className="md:hidden w-10" aria-hidden="true"></div>
      </div>
    </nav>
  );
}
