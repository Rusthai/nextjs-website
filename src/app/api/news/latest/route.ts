import { promises as fs } from "fs";
import path from "path";

export async function GET(req: Request) {
    try {
        const filePath = path.join(process.cwd(), "docs", "news", `latest`);
        const fileContent = await fs.readFile(filePath, "utf-8");
        return new Response((fileContent as string).replace("\n", ""), { status: 200 });
    } catch {
        return new Response("Error", { status: 500 });
    }
}
