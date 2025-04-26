import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { makeMd } from "@/utils/makeMd";

export async function GET(req: Request) {
    try {
        const filePath = path.join(process.cwd(), "docs", "news", `latest`);
        const fileContent = await fs.readFile(filePath, "utf-8");
        if ( !fileContent )
            return new Response("Not Found", { status: 404 });

        const news_filePath = path.join(process.cwd(), "docs", "news", `${fileContent}.md`);
        const news_fileContent = await fs.readFile(news_filePath, "utf-8");
        if ( !news_fileContent )
            return new Response("Not Found", { status: 404 });

        const stat = await fs.stat(news_filePath);
        const createdAt = stat.birthtime;

        return new NextResponse(
            JSON.stringify({
                id: (fileContent as string).replace("\n", ""),
                content: makeMd(news_fileContent, createdAt)
            }), 
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch {
        return new Response("Error", { status: 500 });
    }
}
