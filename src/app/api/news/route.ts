import { makeMd, News } from "@/utils/makeMd";
import { promises as fs } from "fs";
import path from "path";

export interface NewsResponse {
    id: string;
    content: News;
}

export async function GET(req: Request) {
    try {
        const latestNews: NewsResponse[] = [];
        const filePath = path.join(process.cwd(), "docs", "news", `latest`);
        const fileContent = await fs.readFile(filePath, "utf-8");
        if ( !fileContent )
            return new Response("Not Found", { status: 404 });

        const latestNews_filePath = path.join(process.cwd(), "docs", "news", `${fileContent}.md`);
        const latestNews_fileContent = await fs.readFile(latestNews_filePath, "utf-8");

        const stat = await fs.stat(latestNews_filePath);
        const createdAt = stat.birthtime;

        const latest: NewsResponse = {
            id: fileContent.replace(".md", ""),
            content: makeMd(latestNews_fileContent, createdAt)
        };

        const newsPath = path.join(process.cwd(), "docs", "news");
        const files = await fs.readdir(newsPath);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file === "latest") continue;
            const filePath = path.join(newsPath, file);
            const fileContent = await fs.readFile(filePath, "utf-8");
            const stat = await fs.stat(filePath);
            const createdAt = stat.birthtime;
            const news: NewsResponse = {
                id: file.replace(".md", ""),
                content: makeMd(fileContent, createdAt)
            };
            latestNews.push(news);
        }
        latestNews.sort((a, b) => new Date(b.content.createdAt).getTime() - new Date(a.content.createdAt).getTime());
        latestNews.splice(12);

        return new Response(
            JSON.stringify({
                latest: latest,
                news: latestNews
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error(error);
        return new Response("Error", { status: 500 });
    }
}
