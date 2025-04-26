import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const response = await axios.get(
            `https://raw.githubusercontent.com/Rusthai/news/main/md/latest`
        );
        if ( !response.data )
            return new Response("Not Found", { status: 404 });

        const latest = await axios.get(
            `http://localhost:3000/api/news/${response.data}`
        );
        return new NextResponse(
            JSON.stringify({
                id: (response.data as string).replace("\n", ""),
                content: latest.data
            }), 
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch {
        return new Response("Error", { status: 500 });
    }
}
