export interface News {
  title: string;
  description: string;
  content: string;
  banner: string | null;
  createdAt: string;
  language?: string;
}

export function makeMd(content: string, createdAt: Date): News {
    const text = content;

    const bannerRegex = /\[banner:[^\]]+\]/g;
    const bannerMatch = text.match(bannerRegex);
    const banner = bannerMatch ? bannerMatch[0].replace(/\[banner:/, "").replace("]", "") : null;

    const title = text.split("\n")[0].replace("# ", "").trim();
    const description = text.split("\n").slice(1)[0].replace("## ", "").trim();
    const _content = text.split("\n").slice(2).join("\n").trim();
    const contentWithoutBanner = _content.replace(bannerRegex, "").trim();

    const overrideDateRegex = /\[date:[^\]]+\]/g;
    const overrideDateMatch = _content.match(overrideDateRegex);
    const overrideDate = overrideDateMatch ? overrideDateMatch[0].replace(/\[date:/, "").replace("]", "") : null;
    const contentWithoutOverride = contentWithoutBanner.replace(overrideDateRegex, "").trim();

    return {
      title: title,
      description: description,
      content: contentWithoutOverride,
      banner: banner,
      createdAt: overrideDate || createdAt.toISOString()
    }
}