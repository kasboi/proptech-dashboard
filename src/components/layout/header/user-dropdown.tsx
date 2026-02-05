"use client";

import { Users, ClipboardList, MessageSquare, MapPin, Lock, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface UserDropdownMenuItemProps {
  icon: React.ReactNode;
  label: string;
  variant?: "default" | "danger";
}

function UserDropdownMenuItem({ icon, label, variant = "default" }: UserDropdownMenuItemProps) {
  const isDanger = variant === "danger";

  return (
    <DropdownMenuItem
      className={`px-4 py-2.5 flex items-center gap-3 cursor-pointer group ${
        isDanger ? "hover:bg-red-50 focus:bg-red-50" : "focus:bg-gray-50"
      }`}
    >
      <span
        className={
          isDanger ? "text-red-500" : "text-gray-700 transition-colors group-focus:text-gray-900"
        }
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className={`text-sm font-semibold ${isDanger ? "text-red-500" : "text-gray-800"}`}>
        {label}
      </span>
    </DropdownMenuItem>
  );
}

// TODO: Replace with actual user data from auth context
const USER = {
  name: "Dylan Frank",
  email: "dylan96@gmail.com",
  initials: "D",
};

const MENU_ITEMS = [
  { icon: <Users className="h-4 w-4" aria-hidden="true" />, label: "Teams" },
  { icon: <ClipboardList className="h-4 w-4" aria-hidden="true" />, label: "Snagging" },
  { icon: <MessageSquare className="h-4 w-4" aria-hidden="true" />, label: "Feedback" },
  { icon: <MapPin className="h-4 w-4" aria-hidden="true" />, label: "Geo-Bucket" },
  { icon: <Lock className="h-4 w-4" aria-hidden="true" />, label: "Change password" },
];

export function UserDropdown() {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <DropdownMenu>
        <HoverCardTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              className="p-0 h-auto rounded-full focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f4c3a]"
              aria-label={`User menu for ${USER.name}`}
              aria-haspopup="menu"
            >
              <Avatar className="w-8 h-8 transition-all duration-200 hover:scale-110 border-2 border-transparent data-[state=open]:scale-110 data-[state=open]:border-white/20">
                <AvatarFallback className="bg-white text-[#0f4c3a] font-bold text-sm">
                  {USER.initials}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
        </HoverCardTrigger>

        <DropdownMenuContent
          align="end"
          className="w-80 mt-2 border-none shadow-2xl bg-white p-0 overflow-hidden rounded-2xl"
        >
          {/* User Info Header */}
          <div className="p-4 bg-gray-50/50" aria-hidden="true">
            <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-100 shadow-sm transition-colors">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-[#0f4c3a] text-white text-sm font-bold">
                  {USER.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-gray-900 leading-tight">{USER.name}</h4>
                <p className="text-xs text-gray-500 font-medium">{USER.email}</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2" role="group" aria-label="Account options">
            {MENU_ITEMS.map((item, index) => (
              <div key={item.label}>
                <UserDropdownMenuItem icon={item.icon} label={item.label} />
                {index < MENU_ITEMS.length - 1 && (
                  <DropdownMenuSeparator className="mx-4 bg-gray-100" />
                )}
              </div>
            ))}
            <DropdownMenuSeparator className="mx-4 bg-gray-100" />
            <UserDropdownMenuItem
              icon={<LogOut className="h-4 w-4" aria-hidden="true" />}
              label="Logout"
              variant="danger"
            />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <HoverCardContent
        align="end"
        className="w-56 mt-2 border-none shadow-xl bg-gray-100 backdrop-blur-sm p-3 pointer-events-none rounded-xl"
        aria-hidden="true"
      >
        <div className="flex flex-col gap-0.5">
          <h4 className="text-sm font-bold text-gray-900 leading-tight">{USER.name}</h4>
          <p className="text-xs text-gray-500 font-medium">{USER.email}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
