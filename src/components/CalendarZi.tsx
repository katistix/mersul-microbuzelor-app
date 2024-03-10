"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { dateStringAtom } from "@/lib/atoms";

type CalendarZiProps = {
    className?: string;
};

export function CalendarZi(props: CalendarZiProps) {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [dateString, setDateString] = useAtom(dateStringAtom);

    useEffect(() => {
        setDateString(format(new Date(), "yyyy-MM-dd"));
        console.log("dateString", dateString);
    }, [date]);

    const onDateChange = (date: Date | undefined) => {
        setDate(date);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        `${props.className} min-w-[240px] pl-3 text-left font-normal",
                        !date && "text-muted-foreground`
                    )}>
                    {date ? format(date, "PPP") : <span>Alege o zi</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => {
                        onDateChange(date);
                    }}
                    // disabled={(date) =>
                    //     date > new Date() ||
                    //     date < new Date("1900-01-01")
                    // }
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
