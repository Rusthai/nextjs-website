import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { makeMd } from "@/utils/makeMd";

export async function GET(req: Request) {
    try {
        const filePath = path.join(process.cwd(), "docs", "news", `latest`);
        const id = await fs.readFile(filePath, "utf-8");
        if ( !id )
            return new Response("Not Found", { status: 404 });

        try {
            // is dir?
            const dirPath = path.join(process.cwd(), "docs", "news", id);
            const dirStat = await fs.stat(dirPath);
            if (dirStat.isDirectory()) {
                const files = await fs.readdir(dirPath);
                return new Response(
                    JSON.stringify(await Promise.all(files.map(async file => {
                        const filePath = path.join(dirPath, file);
                        const fileContent = await fs.readFile(filePath, "utf-8");
                        if ( !fileContent ) return;
                        const stat = await fs.stat(filePath);
                        const createdAt = stat.birthtime;
                        return {
                            language: file.split(".")[0],
                            content: makeMd(fileContent, createdAt)
                        }
                    }))),
                    { status: 200, headers: { 'Content-Type': 'application/json' } }
                )
            }
        } catch {
            // is file?
            const news_filePath = path.join(process.cwd(), "docs", "news", `${id}.md`);
            const news_fileContent = await fs.readFile(news_filePath, "utf-8");
            if ( !news_fileContent )
                return new Response("Not Found", { status: 404 });

            const stat = await fs.stat(news_filePath);
            const createdAt = stat.birthtime;

            return new NextResponse(
                JSON.stringify({
                    id: (id as string).replace("\n", ""),
                    content: makeMd(news_fileContent, createdAt)
                }), 
                { status: 200, headers: { "Content-Type": "application/json" } }
            );
        }
    } catch {
        return new Response("Error", { status: 500 });
    }
}
