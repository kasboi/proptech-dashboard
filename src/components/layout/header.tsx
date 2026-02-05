"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    Users,
    ClipboardList,
    MessageSquare,
    MapPin,
    Lock,
    LogOut,
    Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="bg-[#0f4c3a] text-white px-4 md:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center relative">
                    <Image src="/icons/logo.svg" alt="Expert Listing Logo" width={24} height={24} />
                </div>
                <span className="text-xl font-semibold">Expert Listing</span>
            </div>

            <div className="flex items-center gap-4">
        
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
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
                            
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-start gap-3 h-12 hover:bg-gray-100"
                                            >
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
                                        </DialogTrigger>
                                        <DialogContent
                                            overlayClassName="bg-transparent"
                                            className="w-full max-w-75 p-0 border-none overflow-hidden rounded-2xl bg-white text-gray-900"
                                        >
                                            <DialogTitle className="sr-only">Budgeting</DialogTitle>
                                            
                                            <div className="bg-[#0a1e2f] p-6 flex items-center justify-center relative overflow-hidden group">
                                                
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full -mr-8 -mt-8 blur-2xl" />

                                                <div className="relative z-10 p-3 rounded-2xl  backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                                                    <div className="w-10 h-10 border-2 border-white rounded-xl flex items-center justify-center">
                                                        <Image
                                                            src="/icons/calculator.svg"
                                                            alt="Calculator Large"
                                                            width={20}
                                                            height={20}
                                                            className="invert brightness-0"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            
                                            <div className="p-5 pb-6 flex flex-col gap-5">
                                                <div className="space-y-4">
                                                
                                                    <div className="flex gap-3 items-start group cursor-default">
                                                        <div className="mt-0.5 p-1.5 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                            <Image
                                                                src="/icons/setting-4.svg"
                                                                alt="Setting"
                                                                width={14}
                                                                height={14}
                                                                className="opacity-60 group-hover:opacity-100 transition-opacity"
                                                            />
                                                        </div>
                                                        <div className="space-y-0.5 text-left">
                                                            <h3 className="font-bold text-gray-900 text-sm leading-tight">
                                                                Set up annual budgets by account category
                                                            </h3>
                                                            <p className="text-gray-500 text-[11px] leading-relaxed">
                                                                Allocate funds across income and expense lines with visibility.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    
                                                    <div className="flex gap-3 items-start group cursor-default">
                                                        <div className="mt-0.5 p-1.5 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                            <Image
                                                                src="/icons/trend-up.svg"
                                                                alt="Trend Up"
                                                                width={14}
                                                                height={14}
                                                                className="opacity-60 group-hover:opacity-100 transition-opacity"
                                                            />
                                                        </div>
                                                        <div className="space-y-0.5 text-left">
                                                            <h3 className="font-bold text-gray-900 text-sm leading-tight">
                                                                Track actuals vs budget in real time
                                                            </h3>
                                                            <p className="text-gray-500 text-[11px] leading-relaxed">
                                                                See performance against plan, month by month.
                                                            </p>
                                                        </div>
                                                    </div>

                                            
                                                    <div className="flex gap-3 items-start group cursor-default">
                                                        <div className="mt-0.5 p-1.5 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                            <Image
                                                                src="/icons/align-bottom.svg"
                                                                alt="Align Bottom"
                                                                width={14}
                                                                height={14}
                                                                className="opacity-60 group-hover:opacity-100 transition-opacity"
                                                            />
                                                        </div>
                                                        <div className="space-y-0.5 text-left">
                                                            <h3 className="font-bold text-gray-900 text-sm leading-tight">
                                                                Adjust figures and forecast with ease
                                                            </h3>
                                                            <p className="text-gray-500 text-[11px] leading-relaxed">
                                                                Edit amounts and apply changes all in one place.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                    
                                                <Button className="w-full h-10 bg-[#1a1a1a] hover:bg-black text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
                                                    Create Budget
                                                </Button>
                                            </div>
                                        </DialogContent>
                                    </Dialog>

                                    
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

                                    
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-3 h-12 hover:bg-gray-100"
                                    >
                                        <Image
                                            src="/icons/activity.svg"
                                            alt="Activity"
                                            width={20}
                                            height={20}
                                            style={{
                                                filter:
                                                    "invert(27%) sepia(51%) saturate(2878%) hue-rotate(130deg) brightness(95%) contrast(101%)",
                                            }}
                                        />
                                        <span className="text-sm font-medium">Search Activity</span>
                                    </Button>

                                    
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-3 h-12 hover:bg-gray-100"
                                    >
                                        <Image
                                            src="/icons/wallet-2.svg"
                                            alt="Wallet"
                                            width={20}
                                            height={20}
                                            style={{
                                                filter:
                                                    "invert(27%) sepia(51%) saturate(2878%) hue-rotate(130deg) brightness(95%) contrast(101%)",
                                            }}
                                        />
                                        <span className="text-sm font-medium">Payout Center</span>
                                    </Button>

                                
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-3 h-12 hover:bg-gray-100"
                                    >
                                        <Image
                                            src="/icons/shop.svg"
                                            alt="Shop"
                                            width={20}
                                            height={20}
                                            style={{
                                                filter:
                                                    "invert(27%) sepia(51%) saturate(2878%) hue-rotate(130deg) brightness(95%) contrast(101%)",
                                            }}
                                        />
                                        <span className="text-sm font-medium">Marketplace</span>
                                    </Button>
                                </TooltipProvider>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>

        
                <div className="hidden md:flex items-center gap-6">
                    <TooltipProvider>
                        <Tooltip>
                            <Dialog>
                                <TooltipTrigger asChild>
                                    <DialogTrigger asChild>
                                        <Button variant="ghost" size="icon" className="hover:bg-white/10 relative">
                                            <Image
                                                src="/icons/calculator.svg"
                                                alt="Calculator"
                                                width={20}
                                                height={20}
                                                className="invert brightness-0"
                                            />
                                        </Button>
                                    </DialogTrigger>
                                </TooltipTrigger>
                                <DialogContent
                                    overlayClassName="bg-transparent"
                                    className="sm:max-w-100 p-0 border-none overflow-hidden rounded-3xl bg-white text-gray-900"
                                >
                                    <DialogTitle className="sr-only">Budgeting</DialogTitle>
                                    
                                    <div className="bg-[#0a1e2f] p-8 flex items-center justify-center relative overflow-hidden group">
                                        
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mr-12 -mt-12 blur-2xl" />

                                        <div className="relative z-10 p-4  backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                                            <div className="w-12 h-12 border-2 border-white rounded-xl flex items-center justify-center">
                                                <Image
                                                    src="/icons/calculator.svg"
                                                    alt="Calculator Large"
                                                    width={24}
                                                    height={24}
                                                    className="invert brightness-0"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                
                                    <div className="p-6 pb-8 flex flex-col gap-6">
                                        <div className="space-y-5">
                                        
                                            <div className="flex gap-4 items-start group cursor-default">
                                                <div className="mt-0.5 p-1.5 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                    <Image
                                                        src="/icons/setting-4.svg"
                                                        alt="Setting"
                                                        width={16}
                                                        height={16}
                                                        className="opacity-60 group-hover:opacity-100 transition-opacity"
                                                    />
                                                </div>
                                                <div className="space-y-0.5 text-left">
                                                    <h3 className="font-bold text-gray-900 text-base leading-tight">
                                                        Set up annual budgets by account category
                                                    </h3>
                                                    <p className="text-gray-500 text-xs leading-relaxed">
                                                        Allocate funds across income and expense lines with visibility.
                                                    </p>
                                                </div>
                                            </div>

                                
                                            <div className="flex gap-4 items-start group cursor-default">
                                                <div className="mt-0.5 p-1.5 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                    <Image
                                                        src="/icons/trend-up.svg"
                                                        alt="Trend Up"
                                                        width={16}
                                                        height={16}
                                                        className="opacity-60 group-hover:opacity-100 transition-opacity"
                                                    />
                                                </div>
                                                <div className="space-y-0.5 text-left">
                                                    <h3 className="font-bold text-gray-900 text-base leading-tight">
                                                        Track actuals vs budget in real time
                                                    </h3>
                                                    <p className="text-gray-500 text-xs leading-relaxed">
                                                        See performance against plan, month by month.
                                                    </p>
                                                </div>
                                            </div>

                                
                                            <div className="flex gap-4 items-start group cursor-default">
                                                <div className="mt-0.5 p-1.5 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                    <Image
                                                        src="/icons/align-bottom.svg"
                                                        alt="Align Bottom"
                                                        width={16}
                                                        height={16}
                                                        className="opacity-60 group-hover:opacity-100 transition-opacity"
                                                    />
                                                </div>
                                                <div className="space-y-0.5 text-left">
                                                    <h3 className="font-bold text-gray-900 text-base leading-tight">
                                                        Adjust figures and forecast with ease
                                                    </h3>
                                                    <p className="text-gray-500 text-xs leading-relaxed">
                                                        Edit amounts and apply changes all in one place.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <Button className="w-full h-11 bg-[#1a1a1a] hover:bg-black text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
                                            Create Budget
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                            <TooltipContent className="bg-black text-white border-none py-1.5 px-3 rounded-lg text-xs font-semibold">
                                Budgeting
                            </TooltipContent>
                        </Tooltip>

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

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="hover:bg-white/10 relative">
                                    <Image
                                        src="/icons/activity.svg"
                                        alt="Activity"
                                        width={20}
                                        height={20}
                                        className="invert brightness-0"
                                    />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-black text-white border-none py-1.5 px-3 rounded-lg text-xs font-semibold">
                                Search Activity
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="hover:bg-white/10 relative">
                                    <Image
                                        src="/icons/wallet-2.svg"
                                        alt="Wallet"
                                        width={20}
                                        height={20}
                                        className="invert brightness-0"
                                    />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-black text-white border-none py-1.5 px-3 rounded-lg text-xs font-semibold">
                                Payout Center
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="hover:bg-white/10 relative">
                                    <Image
                                        src="/icons/shop.svg"
                                        alt="Shop"
                                        width={20}
                                        height={20}
                                        className="invert brightness-0"
                                    />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-black text-white border-none py-1.5 px-3 rounded-lg text-xs font-semibold">
                                Marketplace
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

            
                <HoverCard openDelay={100} closeDelay={100}>
                    <DropdownMenu>
                        <HoverCardTrigger asChild>
                            <DropdownMenuTrigger asChild>
                                <div className="group cursor-pointer outline-none">
                                    <Avatar className="w-8 h-8 transition-all duration-200 group-hover:scale-110 border-2 border-transparent group-data-[state=open]:scale-110 group-data-[state=open]:border-white/20">
                                        <AvatarFallback className="bg-white text-[#0f4c3a] font-bold text-sm">
                                            D
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                            </DropdownMenuTrigger>
                        </HoverCardTrigger>
                        <DropdownMenuContent
                            align="end"
                            className="w-80 mt-2 border-none shadow-2xl bg-white p-0 overflow-hidden rounded-2xl"
                        >
                        
                            <div className="p-4 bg-gray-50/50">
                                <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-100 shadow-sm transition-colors cursor-pointer">
                                    <Avatar className="h-10 w-10">
                                        <AvatarFallback className="bg-[#0f4c3a] text-white text-sm font-bold">
                                            D
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <h4 className="text-sm font-bold text-gray-900 leading-tight">Dylan Frank</h4>
                                        <p className="text-xs text-gray-500 font-medium">dylan96@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                        
                            <div className="py-2">
                                <DropdownMenuItem className="px-4 py-2.5 flex items-center gap-3 cursor-pointer focus:bg-gray-50 group">
                                    <Users className="h-4 w-4 text-gray-700 transition-colors group-focus:text-gray-900" />
                                    <span className="text-sm font-semibold text-gray-800">Teams</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="mx-4 bg-gray-100" />

                                <DropdownMenuItem className="px-4 py-2.5 flex items-center gap-3 cursor-pointer focus:bg-gray-50 group">
                                    <ClipboardList className="h-4 w-4 text-gray-700 transition-colors group-focus:text-gray-900" />
                                    <span className="text-sm font-semibold text-gray-800">Snagging</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="mx-4 bg-gray-100" />

                                <DropdownMenuItem className="px-4 py-2.5 flex items-center gap-3 cursor-pointer focus:bg-gray-50 group">
                                    <MessageSquare className="h-4 w-4 text-gray-700 transition-colors group-focus:text-gray-900" />
                                    <span className="text-sm font-semibold text-gray-800">Feedback</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="mx-4 bg-gray-100" />

                                <DropdownMenuItem className="px-4 py-2.5 flex items-center gap-3 cursor-pointer focus:bg-gray-50 group">
                                    <MapPin className="h-4 w-4 text-gray-700 transition-colors group-focus:text-gray-900" />
                                    <span className="text-sm font-semibold text-gray-800">Geo-Bucket</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="mx-4 bg-gray-100" />

                                <DropdownMenuItem className="px-4 py-2.5 flex items-center gap-3 cursor-pointer focus:bg-gray-50 group">
                                    <Lock className="h-4 w-4 text-gray-700 transition-colors group-focus:text-gray-900" />
                                    <span className="text-sm font-semibold text-gray-800">Change password</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="mx-4 bg-gray-100" />

                                <DropdownMenuItem className="px-4 py-2.5 flex items-center gap-3 cursor-pointer group hover:bg-red-50 focus:bg-red-50">
                                    <LogOut className="h-4 w-4 text-red-500" />
                                    <span className="text-sm font-semibold text-red-500">Logout</span>
                                </DropdownMenuItem>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <HoverCardContent
                        align="end"
                        className="w-56 mt-2 border-none shadow-xl bg-gray-100 backdrop-blur-sm p-3 pointer-events-none rounded-xl"
                    >
                        <div className="flex flex-col gap-0.5">
                            <h4 className="text-sm font-bold text-gray-900 leading-tight">Dylan Frank</h4>
                            <p className="text-xs text-gray-500 font-medium">dylan96@gmail.com</p>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </header>
    );
}
