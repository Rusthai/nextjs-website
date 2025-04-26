import { makeMd } from "@/utils/makeMd";
import { promises as fs } from "fs";
import path from "path";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    if (!id) {
        return new Response("Missing id", { status: 400 });
    }

    try {
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
    } catch (error) {
        console.error(error);
        return new Response("Error", { status: 500 });
    }
}
