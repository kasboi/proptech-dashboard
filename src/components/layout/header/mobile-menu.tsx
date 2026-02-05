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
    <Button variant="ghost" className="w-full justify-start gap-3 h-12 hover:bg-gray-100">
      <Image
        src={icon}
        alt={label}
        width={20}
        height={20}
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
    <Button variant="ghost" className="w-full justify-start gap-3 h-12 hover:bg-gray-100">
      <Image
        src="/icons/calculator.svg"
        alt="Calculator"
        width={20}
        height={20}
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
        <Button variant="ghost" size="icon" className="md:hidden hover:bg-white/10">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-75 bg-white p-0">
        <div className="flex flex-col h-full">
          <div className="bg-[#0f4c3a] text-white p-4">
            <SheetTitle className="text-lg font-semibold text-white">Menu</SheetTitle>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <TooltipProvider>
              <BudgetingDialog trigger={budgetingTrigger} variant="mobile" />

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 h-12 hover:bg-gray-100"
                  >
                    <Image
                      src="/icons/calendar.svg"
                      alt="Calendar"
                      width={20}
                      height={20}
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
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
