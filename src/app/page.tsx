"use client";

export const runtime = "edge";

import { CalendarZi } from "@/components/CalendarZi";
import { DeparturesTable } from "@/components/DeparturesTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { dateStringAtom, fromCityAtom, toCityAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import { Loader2 } from "lucide-react";
import { DepartureOutput } from "mersul-microbuzelor";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
    const [fromCity, setFromCity] = useAtom(fromCityAtom);
    const [toCity, setToCity] = useAtom(toCityAtom);
    const [dateString, setDateString] = useAtom(dateStringAtom);

    const [isLoading, setIsLoading] = useState(false);

    const [departures, setDepartures] = useState<DepartureOutput[]>([]);

    const handleGetDepartures = async () => {
        setIsLoading(true);
        // Make sure the strings are not empty
        if (!fromCity || !toCity || !dateString) {
            toast.error("Te rog sa completezi toate campurile!");
            setIsLoading(false);
            return;
        }

        const res = await fetch("/api/getDepartures", {
            method: "POST",
            body: JSON.stringify({
                fromCity,
                toCity,
                dateString,
            }),

            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            setDepartures([]);
            toast.error("A aparut o eroare la incarcarea datelor!");
            setIsLoading(false);
            return;
        }

        const data = await res.json();

        setDepartures(data);

        setIsLoading(false);
        toast.success("Rezultatele au fost incarcate cu succes!");
    };

    return (
        <div className="flex flex-col items-center gap-8 min-h-screen py-8 px-4 md:px-16">
            {/* Info text */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Mersul Microbuzelor</h1>
                <p className="text-lg text-balance">
                    Afla rapid si usor orarul microbuzelor din Romania!
                </p>
            </div>

            {/* Form */}
            <div className="flex flex-col md:flex-row gap-2 w-full">
                <Input
                    placeholder="Localitate plecare"
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                />
                <Input
                    placeholder="Localitate sosire"
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                />
                <CalendarZi />
                <Button disabled={isLoading} onClick={handleGetDepartures}>
                    {isLoading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Cauta
                </Button>
            </div>

            <DeparturesTable departures={departures} />

            {/* Bottom credits */}
            <div className="opacity-50 text-center mt-16 bottom-0">
                <p>
                    Made with{" "}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>{" "}
                    by{" "}
                    <a
                        href="https://github.com/katistix"
                        className="text-blue-500"
                        target="_blank">
                        Paul Tal
                    </a>
                </p>
            </div>
        </div>
    );
}
