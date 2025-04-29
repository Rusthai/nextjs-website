import { makeMd, News } from "@/utils/makeMd";
import { promises as fs } from "fs";
import path from "path";

export interface NewsResponse {
    language: string;
    content: News;
}

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    if (!id) {
        return new Response("Missing id", { status: 400 });
    }

    try {
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
            const filePath = path.join(process.cwd(), "docs", "news", `${id}.md`);
            const fileContent = await fs.readFile(filePath, "utf-8");
            if ( !fileContent )
                return new Response("Not Found", { status: 404 });
    
            const stat = await fs.stat(filePath);
            const createdAt = stat.birthtime;
    
            return new Response(
                JSON.stringify(makeMd(fileContent, createdAt)),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
        }
    } catch (error) {
        console.error(error);
        return new Response("Error", { status: 500 });
    }
}
