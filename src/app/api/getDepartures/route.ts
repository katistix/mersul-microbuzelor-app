import { getDepartures } from "mersul-microbuzelor";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    // get the query parameters
    const body = await req.json();

    const { fromCity, toCity, dateString } = body;

    // format the strings, the city names should be lowercase and have no spaces
    const fromCityFormated = fromCity.toLowerCase().replace(" ", "");
    const toCityFormated = toCity.toLowerCase().replace(" ", "");

    console.log(fromCityFormated, toCityFormated, dateString);

    try {
        const departures = await getDepartures(
            fromCityFormated,
            toCityFormated,
            dateString
        );

        return NextResponse.json(departures);
    } catch (e) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
