import axios from "axios";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    if (!id) {
        return new Response("Missing id", { status: 400 });
    }

    try {
        // Fetch the markdown file
        const mdResponse = await axios.get(
            `https://raw.githubusercontent.com/Rusthai/news/main/md/${id}.md`
        );

        // Fetch the commit history for the file
        const commitResponse = await axios.get(
            `https://api.github.com/repos/Rusthai/news/commits`,
            {
                params: {
                    path: `md/${id}.md`,
                    per_page: 1, // get the latest commit
                },
                headers: {
                    'Accept': 'application/vnd.github+json',
                },
            }
        );

        const commit = commitResponse.data[0];
        const createdAt = commit.commit.author.date; // ISO string

        const text = mdResponse.data;

        const bannerRegex = /\[banner:[^\]]+\]/g;
        const bannerMatch = text.match(bannerRegex);
        const banner = bannerMatch ? bannerMatch[0].replace(/\[banner:/, "").replace("]", "") : null;

        const title = text.split("\n")[0].replace("# ", "").trim();
        const description = text.split("\n").slice(1)[0].replace("## ", "").trim();
        const content = text.split("\n").slice(2).join("\n").trim();
        const contentWithoutBanner = content.replace(bannerRegex, "").trim();

        // override createdAt
        const overrideDateRegex = /\[date:[^\]]+\]/g;
        const overrideDateMatch = contentWithoutBanner.match(overrideDateRegex);
        const overrideDate = overrideDateMatch ? overrideDateMatch[0].replace(/\[date:/, "").replace("]", "") : null;
        const contentWithoutOverride = contentWithoutBanner.replace(overrideDateRegex, "").trim();

        return new Response(
            JSON.stringify({
                title: title,
                description: description,
                content: contentWithoutOverride,
                banner: banner,
                createdAt: overrideDate || createdAt
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error(error);
        return new Response("Error", { status: 500 });
    }
}
