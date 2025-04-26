import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const isServerHealty = await axios.get("https://ping.ponlponl123.com/game_rust");
        if ( isServerHealty?.status === 200 ) {
            return NextResponse.json({ message: 'OK' }, { status: 200 });
        }
        return NextResponse.json({ message: 'Service Unavailable' }, { status: 503 });
    } catch {
        return NextResponse.json({ message: 'Service Unavailable' }, { status: 503 });
    }
}