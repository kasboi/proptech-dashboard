"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BudgetingDialog } from "./budgeting-dialog";

interface ToolbarItemProps {
  icon: string;
  label: string;
}

function ToolbarButton({ icon, label }: ToolbarItemProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-white/10 relative">
          <Image src={icon} alt={label} width={20} height={20} className="invert brightness-0" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-black text-white border-none py-1.5 px-3 rounded-lg text-xs font-semibold">
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

export function DesktopToolbar() {
  const budgetingTrigger = (
    <Button variant="ghost" size="icon" className="hover:bg-white/10 relative">
      <Image
        src="/icons/calculator.svg"
        alt="Calculator"
        width={20}
        height={20}
        className="invert brightness-0"
      />
    </Button>
  );

  return (
    <div className="hidden md:flex items-center gap-6">
      <TooltipProvider>
        {/* Budgeting Dialog */}
        <Tooltip>
          <TooltipTrigger asChild>
            <span>
              <BudgetingDialog trigger={budgetingTrigger} variant="desktop" />
            </span>
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white border-none py-1.5 px-3 rounded-lg text-xs font-semibold">
            Budgeting
          </TooltipContent>
        </Tooltip>

        {/* Calendar Popover */}
        <Tooltip>
          <Popover>
            <TooltipTrigger asChild>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-white/10 relative">
                  <Image
                    src="/icons/calendar.svg"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="invert brightness-0"
                  />
                </Button>
              </PopoverTrigger>
            </TooltipTrigger>
            <PopoverContent
              align="center"
              className="w-80 p-0 border-none shadow-2xl rounded-xl mt-2"
            >
              <Calendar mode="single" className="rounded-md border shadow w-full" />
            </PopoverContent>
          </Popover>
          <TooltipContent className="bg-black text-white border-none py-1.5 px-3 rounded-lg text-xs font-semibold">
            Calendar
          </TooltipContent>
        </Tooltip>

        {/* Simple toolbar buttons */}
        <ToolbarButton icon="/icons/activity.svg" label="Search Activity" />
        <ToolbarButton icon="/icons/wallet-2.svg" label="Payout Center" />
        <ToolbarButton icon="/icons/shop.svg" label="Marketplace" />
      </TooltipProvider>
    </div>
  );
}
