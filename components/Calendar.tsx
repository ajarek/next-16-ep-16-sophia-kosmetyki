"use client"

import React, { useState } from "react"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  eachDayOfInterval,
  isToday,
} from "date-fns"
import { pl } from "date-fns/locale"
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const Calendar = ({ OrderedPackage }: { OrderedPackage: string }) => {
  const router = useRouter()
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [view, setView] = useState<"calendar" | "time" | "details">("calendar")
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h")
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 })
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 })

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  })

  const isDateAvailable = (date: Date) => {
    const day = date.getDay()
    return day !== 0 && day !== 6 && isSameMonth(date, currentMonth)
  }

  const handleDateClick = (date: Date) => {
    if (isDateAvailable(date)) {
      if (selectedDate && isSameDay(date, selectedDate)) {
        setView("time")
      } else {
        setSelectedDate(date)
        setView("time")
      }
    }
  }

  const handleTimeClick = (time: string) => {
    setSelectedTime(time)
    setView("details")
  }

  const handleBackToTime = () => {
    setView("time")
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Spotkanie zaplanowane!")
    setView("calendar")
    setSelectedDate(null)
    setSelectedTime(null)
    setFormData({
      name: "",
      email: "",
      message: "",
    })
    router.push("/services")
  }

  const generateTimeSlots = () => {
    const slots = []
    const startHour = 9
    const endHour = 17 // 17:00

    for (let i = startHour; i < endHour; i++) {
      const hour = i
      slots.push({ hour, minute: 0 })
      slots.push({ hour, minute: 30 })
    }
    return slots
  }

  const formatTime = (hour: number, minute: number) => {
    const date = new Date()
    date.setHours(hour)
    date.setMinutes(minute)

    if (timeFormat === "12h") {
      return format(date, "hh:mm a")
    } else {
      return format(date, "HH:mm")
    }
  }

  const timeSlots = generateTimeSlots()

  return (
    <div className='flex justify-center items-center w-full p-4'>
      <div className='w-full max-w-[800px] bg-card p-6 rounded-3xl shadow-sm border border-border/50'>
        {view === "calendar" ? (
          <div className='space-y-6 animate-in fade-in slide-in-from-left-4 duration-300'>
            <div className='flex justify-between items-center px-2'>
              <h2 className='text-2xl font-serif text-foreground capitalize tracking-wide'>
                {format(currentMonth, "LLL yyyy", { locale: pl })}
              </h2>
              <div className='flex gap-1'>
                <button
                  onClick={prevMonth}
                  className='p-2 hover:bg-muted rounded-full text-foreground/80 hover:text-foreground transition-all'
                >
                  <ChevronLeft className='w-5 h-5' />
                </button>
                <button
                  onClick={nextMonth}
                  className='p-2 hover:bg-muted rounded-full text-foreground/80 hover:text-foreground transition-all'
                >
                  <ChevronRight className='w-5 h-5' />
                </button>
              </div>
            </div>

            <div className='grid grid-cols-7 text-center mb-2'>
              {["Nie", "Pon", "Wto", "Śro", "Czw", "Pią", "Sob"].map((day) => (
                <div
                  key={day}
                  className='text-[11px] font-bold text-muted-foreground uppercase py-2 tracking-wider'
                >
                  {day}
                </div>
              ))}
            </div>

            <div className='grid grid-cols-7 gap-2 lg:gap-3 text-center'>
              {calendarDays.map((date, idx) => {
                const isCurrentMonth = isSameMonth(date, monthStart)
                const isAvailable = isDateAvailable(date)
                const isTodayDate = isToday(date)
                const isSelected = selectedDate && isSameDay(date, selectedDate)

                return (
                  <div
                    key={idx}
                    className='aspect-square flex flex-col items-center justify-center relative'
                  >
                    <button
                      onClick={() => handleDateClick(date)}
                      disabled={!isAvailable && !isTodayDate}
                      className={cn(
                        "w-10 h-10 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center text-sm transition-all duration-200",
                        !isCurrentMonth && "invisible",
                        isCurrentMonth && "text-foreground",
                        isAvailable &&
                          !isSelected &&
                          !isTodayDate &&
                          "bg-muted hover:bg-muted/80 font-medium text-foreground",
                        isTodayDate &&
                          !isSelected &&
                          "text-orange-500 font-bold bg-transparent",
                        isSelected &&
                          "bg-primary text-primary-foreground shadow-md scale-105",
                        !isAvailable &&
                          !isTodayDate &&
                          isCurrentMonth &&
                          "text-muted-foreground/40 cursor-default",
                      )}
                    >
                      {format(date, "d")}
                    </button>
                    {isTodayDate && !isSelected && isCurrentMonth && (
                      <div className='w-1 h-1 bg-orange-500 rounded-full mt-1 absolute bottom-2'></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ) : view === "time" ? (
          <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-300'>
            <div className='flex items-center justify-between pb-2 border-b border-border/40'>
              <div className='flex items-center gap-3'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='rounded-full w-10 h-10 hover:bg-muted'
                  onClick={() => setView("calendar")}
                >
                  <ArrowLeft className='w-5 h-5' />
                </Button>
                <div className='text-xl font-medium text-foreground capitalize'>
                  {selectedDate &&
                    format(selectedDate, "EEE d", { locale: pl })}
                </div>
              </div>

              <div className='flex bg-muted p-1 rounded-lg text-xs font-semibold'>
                <button
                  onClick={() => setTimeFormat("12h")}
                  className={cn(
                    "px-3 py-1.5 rounded-md transition-all",
                    timeFormat === "12h"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  12h
                </button>
                <button
                  onClick={() => setTimeFormat("24h")}
                  className={cn(
                    "px-3 py-1.5 rounded-md transition-all",
                    timeFormat === "24h"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  24h
                </button>
              </div>
            </div>

            <div className='flex flex-col gap-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar'>
              {timeSlots.map((slot, idx) => {
                const timeStr = formatTime(slot.hour, slot.minute)
                const isSelected = selectedTime === timeStr

                return (
                  <button
                    key={idx}
                    onClick={() => handleTimeClick(timeStr)}
                    className={cn(
                      "w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all duration-200 flex justify-between items-center group",
                      isSelected
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/50 text-foreground hover:bg-muted/50",
                    )}
                  >
                    <span>{timeStr}</span>
                    <div
                      className={cn(
                        "w-4 h-4 rounded-full border-2 transition-all",
                        isSelected
                          ? "border-primary bg-primary"
                          : "border-muted-foreground/30 group-hover:border-primary/50",
                      )}
                    ></div>
                  </button>
                )
              })}
            </div>
          </div>
        ) : (
          <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-300'>
            <div className='flex items-center gap-3 pb-2 border-b border-border/40'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full w-10 h-10 hover:bg-muted'
                onClick={handleBackToTime}
              >
                <ArrowLeft className='w-5 h-5' />
              </Button>
              <h2 className='text-xl font-bold text-foreground'>
                Wprowadź szczegóły
              </h2>
            </div>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name' className='text-sm font-semibold'>
                  Twoje imię *
                </Label>
                <Input
                  id='name'
                  name='name'
                  placeholder='Twoje imię'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className='bg-background border-border'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email' className='text-sm font-semibold'>
                  Twój adres e-mail *
                </Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Twój adres e-mail'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className='bg-background border-border'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='message' className='text-sm font-semibold'>
                  Czego dotyczy to spotkanie?
                </Label>
                <Textarea
                  id='message'
                  name='message'
                  placeholder=''
                  defaultValue={`Wizyta ${selectedDate?.toISOString().split("T")[0]} ${selectedTime} pakiet: ${OrderedPackage}`}
                  onChange={handleInputChange}
                  className='bg-background border-border min-h-[100px] resize-none'
                />
              </div>

              <div className='pt-2'>
                <Button
                  type='submit'
                  className='w-full bg-[#d95c0c] hover:bg-[#b84e0a] text-white font-medium py-6 rounded-xl transition-colors'
                >
                  Zaplanuj spotkanie
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Calendar
