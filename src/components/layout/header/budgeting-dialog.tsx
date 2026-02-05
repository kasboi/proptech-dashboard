"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

interface BudgetFeatureItemProps {
  icon: string;
  title: string;
  description: string;
  iconSize?: number;
}

function BudgetFeatureItem({ icon, title, description, iconSize = 14 }: BudgetFeatureItemProps) {
  return (
    <div className="flex gap-3 items-start group cursor-default">
      <div className="mt-0.5 p-1.5 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
        <Image
          src={icon}
          alt={title}
          width={iconSize}
          height={iconSize}
          className="opacity-60 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="space-y-0.5 text-left">
        <h3 className="font-bold text-gray-900 text-sm leading-tight">{title}</h3>
        <p className="text-gray-500 text-[11px] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const BUDGET_FEATURES = [
  {
    icon: "/icons/setting-4.svg",
    title: "Set up annual budgets by account category",
    description: "Allocate funds across income and expense lines with visibility.",
  },
  {
    icon: "/icons/trend-up.svg",
    title: "Track actuals vs budget in real time",
    description: "See performance against plan, month by month.",
  },
  {
    icon: "/icons/align-bottom.svg",
    title: "Adjust figures and forecast with ease",
    description: "Edit amounts and apply changes all in one place.",
  },
];

interface BudgetingDialogContentProps {
  variant?: "mobile" | "desktop";
}

export function BudgetingDialogContent({ variant = "desktop" }: BudgetingDialogContentProps) {
  const isMobile = variant === "mobile";

  return (
    <>
      <div
        className={`bg-dark-navy ${isMobile ? "p-6" : "p-8"} flex items-center justify-center relative overflow-hidden group`}
      >
        <div
          className={`absolute top-0 right-0 ${isMobile ? "w-16 h-16 -mr-8 -mt-8" : "w-24 h-24 -mr-12 -mt-12"} bg-blue-500/10 rounded-full blur-2xl`}
        />
        <div className="relative z-10 p-3 rounded-2xl backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
          <div
            className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} border-2 border-white rounded-xl flex items-center justify-center`}
          >
            <Image
              src="/icons/calculator.svg"
              alt="Calculator"
              width={isMobile ? 20 : 24}
              height={isMobile ? 20 : 24}
              className="invert brightness-0"
            />
          </div>
        </div>
      </div>

      <div className={`${isMobile ? "p-5 pb-6 gap-5" : "p-6 pb-8 gap-6"} flex flex-col`}>
        <div className={isMobile ? "space-y-4" : "space-y-5"}>
          {BUDGET_FEATURES.map((feature) => (
            <BudgetFeatureItem
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconSize={isMobile ? 14 : 16}
            />
          ))}
        </div>

        <Button
          className={`w-full ${isMobile ? "h-10 text-xs" : "h-11 text-sm"} bg-dark-charcoal hover:bg-black text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]`}
        >
          Create Budget
        </Button>
      </div>
    </>
  );
}

interface BudgetingDialogProps {
  trigger: React.ReactNode;
  variant?: "mobile" | "desktop";
}

export function BudgetingDialog({ trigger, variant = "desktop" }: BudgetingDialogProps) {
  const isMobile = variant === "mobile";

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        overlayClassName="bg-transparent"
        className={`${isMobile ? "w-full max-w-75 rounded-2xl" : "sm:max-w-100 rounded-3xl"} p-0 border-none overflow-hidden bg-white text-gray-900`}
      >
        <DialogTitle className="sr-only">Budgeting</DialogTitle>
        <BudgetingDialogContent variant={variant} />
      </DialogContent>
    </Dialog>
  );
}
