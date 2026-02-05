"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BudgetingDialog } from "./budgeting-dialog";
import { CalendarPopover } from "./calendar-popover";

interface ToolbarItemProps {
  icon: string;
  label: string;
}

function ToolbarButton({ icon, label }: ToolbarItemProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="hover:bg-white/10 relative focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
          aria-label={label}
        >
          <Image
            src={icon}
            alt=""
            width={28}
            height={28}
            className="invert brightness-0"
            aria-hidden="true"
          />
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
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="hover:bg-white/10 relative focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
      aria-label="Open budgeting"
    >
      <Image
        src="/icons/calculator.svg"
        alt=""
        width={28}
        height={28}
        className="invert brightness-0"
        aria-hidden="true"
      />
    </Button>
  );

  return (
    <nav className="hidden md:flex items-center gap-6" aria-label="Quick actions" role="toolbar">
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
          <TooltipTrigger asChild>
            <span>
              <CalendarPopover
                trigger={
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10 relative focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
                    aria-label="Open calendar"
                  >
                    <Image
                      src="/icons/calendar.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="invert brightness-0"
                      aria-hidden="true"
                    />
                  </Button>
                }
              />
            </span>
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white border-none py-1.5 px-3 rounded-lg text-xs font-semibold">
            Calendar
          </TooltipContent>
        </Tooltip>

        {/* Simple toolbar buttons */}
        <ToolbarButton icon="/icons/activity.svg" label="Search Activity" />
        <ToolbarButton icon="/icons/wallet-2.svg" label="Payout Center" />
        <ToolbarButton icon="/icons/shop.svg" label="Marketplace" />
      </TooltipProvider>
    </nav>
  );
}
