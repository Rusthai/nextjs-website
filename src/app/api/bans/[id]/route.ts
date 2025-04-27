import { makeMd } from "@/utils/makeMd";
import { promises as fs, existsSync, statSync } from "fs";
import path from "path";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    if (!id) {
        return new Response("Missing id", { status: 400 });
    }

    try {
        // check folder is exist
        const dirPath = path.join(process.cwd(), "docs", "bans", `${id}`);
        if ( !existsSync(dirPath) )
            return new Response("Not Found", { status: 404 });

        const files = await fs.readdir(dirPath);
        if ( !files.length )
            return new Response("Not Found", { status: 404 });

        return new Response(JSON.stringify({
            message: "OK",
            languages: await Promise.all(files.map(async file => {
                const filePath = path.join(dirPath, file);
                const stat = statSync(filePath);
                const content = await fs.readFile(filePath, "utf-8");

                const overrideDateRegex = /\[date:[^\]]+\]/g;
                const overrideDateMatch = content.match(overrideDateRegex);
                const overrideDate = overrideDateMatch ? overrideDateMatch[0].replace(/\[date:/, "").replace("]", "") : null;
                const contentWithoutOverride = content.replace(overrideDateRegex, "").trim();

                const typeRegex = /\[type:[^\]]+\]/g;
                const typeMatch = content.match(typeRegex);
                const type = typeMatch ? typeMatch[0].replace(/\[type:/, "").replace("]", "") : null;
                const contentWithoutTypeANDOverride = contentWithoutOverride.replace(typeRegex, "").trim();

                return {
                    language: file.replace(".md", ""),
                    createdAt: overrideDate || stat.birthtime.toISOString(),
                    type,
                    content: contentWithoutTypeANDOverride
                }
            }))
        }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error(error);
        return new Response("Error", { status: 500 });
    }
}
