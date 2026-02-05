"use client";

import * as React from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const DAYS = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

interface CalendarPopoverProps {
  trigger: React.ReactNode;
}

export function CalendarPopover({ trigger }: CalendarPopoverProps) {
  const [open, setOpen] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  // Get previous month's days for filling
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isSelected = (day: number, isCurrentMonth: boolean) => {
    if (!selectedDate || !isCurrentMonth) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  const isToday = (day: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return false;
    const today = new Date();
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  };

  const handleDayClick = (day: number, isCurrentMonth: boolean) => {
    if (isCurrentMonth) {
      setSelectedDate(new Date(year, month, day));
    }
  };

  // Build calendar grid
  const calendarDays: { day: number; isCurrentMonth: boolean }[] = [];

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({ day: daysInPrevMonth - i, isCurrentMonth: false });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({ day: i, isCurrentMonth: true });
  }

  // Next month days
  const remainingDays = 42 - calendarDays.length; // 6 rows * 7 days
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({ day: i, isCurrentMonth: false });
  }

  // Split into weeks
  const weeks: { day: number; isCurrentMonth: boolean }[][] = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align="end"
        alignOffset={-100}
        sideOffset={10}
        className="w-80 lg:w-96 p-0 border-none shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="bg-dark-calendar text-white">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:text-white hover:bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </Button>
              <span className="text-base font-medium">Calendar</span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:text-white hover:bg-white/10"
              onClick={() => setOpen(false)}
              aria-label="Close calendar"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

          {/* Month Navigation */}
          <div className="flex items-center justify-center gap-4 py-4">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:text-white hover:bg-white/10"
              onClick={goToPrevMonth}
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </Button>
            <span className="text-base font-medium min-w-40 text-center">
              {MONTHS[month]} {year}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:text-white hover:bg-white/10"
              onClick={goToNextMonth}
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="px-4 pb-8">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 mb-3">
              {DAYS.map((day) => (
                <div key={day} className="text-center text-[10px] font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="space-y-2">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-cols-7 gap-1">
                  {week.map((dayInfo, dayIndex) => {
                    const selected = isSelected(dayInfo.day, dayInfo.isCurrentMonth);
                    const today = isToday(dayInfo.day, dayInfo.isCurrentMonth);

                    return (
                      <button
                        key={dayIndex}
                        type="button"
                        onClick={() => handleDayClick(dayInfo.day, dayInfo.isCurrentMonth)}
                        className={cn(
                          "h-14 flex items-center justify-center text-sm rounded-lg transition-colors",
                          dayInfo.isCurrentMonth
                            ? "text-white hover:bg-white/10 cursor-pointer"
                            : "text-gray-600 cursor-default",
                          selected && "bg-brand text-white hover:bg-brand/90",
                          today && !selected && "font-bold"
                        )}
                        disabled={!dayInfo.isCurrentMonth}
                        aria-label={`${dayInfo.isCurrentMonth ? "" : "Next month "}${dayInfo.day}`}
                        aria-pressed={selected}
                      >
                        {dayInfo.day}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
