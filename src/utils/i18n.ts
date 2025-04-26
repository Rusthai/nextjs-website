import en from "@/data/langs/en.json";
import th from "@/data/langs/th.json";
import jp from "@/data/langs/jp.json";
import ph from "@/data/langs/ph.json";
import ch from "@/data/langs/ch.json";
import my from "@/data/langs/my.json";

export interface Language {
  code: string;
  name: string;
  data: typeof en | typeof th;
}

export const languages: Language[] = [
    {
        code: en.code,
        name: en.name,
        data: en,
    },
    {
        code: th.code,
        name: th.name,
        data: { ...en, ...th },
    },
    {
        code: jp.code,
        name: jp.name,
        data: {  ...en, ...jp },
    },
    {
        code: ph.code,
        name: ph.name,
        data: { ...en, ...ph },
    },
    {
        code: ch.code,
        name: ch.name,
        data: { ...en, ...ch },
    },
    {
        code: my.code,
        name: my.name,
        data: { ...en, ...my },
    },
]

export const defaultLanguage = languages[0];

export const getLanguageByCode = (code: string) => {
    return languages.find(lang => lang.code === code) || defaultLanguage;
}