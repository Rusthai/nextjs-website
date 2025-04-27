import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const isServerHealty = await axios.get("https://ping.ponlponl123.com/game_rust");
        if ( isServerHealty?.status === 200 ) {
            // Fetch RustIO RestAPI
            const serverEndpoint = process.env.SERVER_ENDPOINT;
            const serverPort = process.env.SERVER_PORT;
            const serverAPIKEY = process.env.SERVER_APIKEY;
            const fetchServerStatus = (!serverEndpoint || !serverPort) ? undefined : await axios.get(`http://${serverEndpoint}:${serverPort}/status.json${serverAPIKEY?'?apiKey='+serverAPIKEY:''}`);
            return NextResponse.json({
                message: 'OK',
                info: fetchServerStatus ? fetchServerStatus?.data : undefined
            }, { status: 200 });
        }
        return NextResponse.json({ message: 'Service Unavailable' }, { status: 503 });
    } catch (err: any) {
        if ( process.env.NODE_ENV === 'development' ) return NextResponse.json({ message: 'Internal Server Error', error: err.message }, { status: 500 });
        return NextResponse.json({ message: 'Service Unavailable' }, { status: 503 });
    }
}