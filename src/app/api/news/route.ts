import { makeMd, News } from "@/utils/makeMd";
import { promises as fs } from "fs";
import path from "path";

export interface NewsResponse {
    id: string;
    content: News | Record<string, News>;
    createdAt: string;
}

export async function GET(req: Request) {
    try {
        const latestNews: NewsResponse[] = [];
        const filePath = path.join(process.cwd(), "docs", "news", `latest`);
        const fileContent = await fs.readFile(filePath, "utf-8");
        if (!fileContent)
            return new Response("Not Found", { status: 404 });

        const latestNews_filePath = path.join(process.cwd(), "docs", "news", `${fileContent}`);
        const latest = await processNewsFileOrDir(fileContent.replace(".md", ""), latestNews_filePath);

        const newsPath = path.join(process.cwd(), "docs", "news");
        const files = await fs.readdir(newsPath);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file === "latest") continue;
            const filePath = path.join(newsPath, file);
            const news = await processNewsFileOrDir(file.replace(".md", ""), filePath);
            latestNews.push(news);
        }
        latestNews.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
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

async function processNewsFileOrDir(id: string, filePath: string): Promise<NewsResponse> {
    const stat = await fs.stat(filePath);
    if (stat.isDirectory()) {
        const files = await fs.readdir(filePath);
        const content: Record<string, News> = {};
        for (const file of files) {
            const language = file.split(".")[0];
            const fileContent = await fs.readFile(path.join(filePath, file), "utf-8");
            const fileStat = await fs.stat(path.join(filePath, file));
            content[language] = makeMd(fileContent, fileStat.birthtime);
        }
        const firstContent = Object.values(content)[0];
        return { id, content, createdAt: firstContent?.createdAt || new Date().toISOString() };
    } else {
        const fileContent = await fs.readFile(filePath, "utf-8");
        const fileStat = await fs.stat(filePath);
        const content = makeMd(fileContent, fileStat.birthtime);
        return {
            id,
            content,
            createdAt: content.createdAt || fileStat.birthtime.toISOString()
        };
    }
}