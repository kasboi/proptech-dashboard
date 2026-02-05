"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BudgetingDialog } from "./budgeting-dialog";

interface MenuItemProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

function MenuItem({ icon, label }: MenuItemProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      className="w-full justify-start gap-3 h-12 hover:bg-gray-100"
    >
      <Image
        src={icon}
        alt=""
        width={20}
        height={20}
        aria-hidden="true"
        style={{
          filter:
            "invert(27%) sepia(51%) saturate(2878%) hue-rotate(130deg) brightness(95%) contrast(101%)",
        }}
      />
      <span className="text-sm font-medium">{label}</span>
    </Button>
  );
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const budgetingTrigger = (
    <Button
      type="button"
      variant="ghost"
      className="w-full justify-start gap-3 h-12 hover:bg-gray-100"
    >
      <Image
        src="/icons/calculator.svg"
        alt=""
        width={20}
        height={20}
        aria-hidden="true"
        style={{
          filter:
            "invert(27%) sepia(51%) saturate(2878%) hue-rotate(130deg) brightness(95%) contrast(101%)",
        }}
      />
      <span className="text-sm font-medium">Budgeting</span>
    </Button>
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-white/10"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-75 bg-white p-0">
        <div className="flex flex-col h-full">
          <div className="bg-brand text-brand-foreground p-4">
            <SheetTitle className="text-lg font-semibold text-white">Menu</SheetTitle>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-2" aria-label="Mobile menu">
            <TooltipProvider>
              <BudgetingDialog trigger={budgetingTrigger} variant="mobile" />

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full justify-start gap-3 h-12 hover:bg-gray-100"
                  >
                    <Image
                      src="/icons/calendar.svg"
                      alt=""
                      width={20}
                      height={20}
                      aria-hidden="true"
                      style={{
                        filter:
                          "invert(27%) sepia(51%) saturate(2878%) hue-rotate(130deg) brightness(95%) contrast(101%)",
                      }}
                    />
                    <span className="text-sm font-medium">Calendar</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="center"
                  className="w-80 p-0 border-none shadow-2xl rounded-xl mt-2"
                >
                  <Calendar mode="single" className="rounded-md border shadow w-full" />
                </PopoverContent>
              </Popover>

              <MenuItem icon="/icons/activity.svg" label="Search Activity" />
              <MenuItem icon="/icons/wallet-2.svg" label="Payout Center" />
              <MenuItem icon="/icons/shop.svg" label="Marketplace" />
            </TooltipProvider>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
