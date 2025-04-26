import axios from "axios";

export async function GET(req: Request) {
    try {
        const response = await axios.get(
            `https://raw.githubusercontent.com/Rusthai/news/main/md/latest`
        );
        return new Response((response.data as string).replace("\n", ""), { status: 200 });
    } catch {
        return new Response("Error", { status: 500 });
    }
}
