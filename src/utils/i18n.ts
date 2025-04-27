import en from "@/data/langs/en.json";
import th from "@/data/langs/th.json";
import jp from "@/data/langs/jp.json";
import ch from "@/data/langs/ch.json";
import ru from "@/data/langs/ru.json";
import ph from "@/data/langs/ph.json";
import my from "@/data/langs/my.json";

export interface Language {
  code: string;
  name: string;
  data: typeof en;
}

function mergeDeep<T>(target: T, source: Partial<T>): T {
  const output = { ...target };

  for (const key in source) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      output[key] = mergeDeep((target as any)[key], source[key]);
    } else if (source[key] !== undefined) {
      (output as any)[key] = source[key];
    }
  }

  return output;
}

function mergeWithEnglish<T extends Partial<any>>(lang: T): typeof en {
  return mergeDeep(en, lang);
}

export const languages: Language[] = [
  { code: en.code, name: en.name, data: en },
  { code: th.code, name: th.name, data: mergeWithEnglish(th) },
  { code: jp.code, name: jp.name, data: mergeWithEnglish(jp) },
  { code: ch.code, name: ch.name, data: mergeWithEnglish(ch) },
  { code: ru.code, name: ru.name, data: mergeWithEnglish(ru) },
  { code: ph.code, name: ph.name, data: mergeWithEnglish(ph) },
  { code: my.code, name: my.name, data: mergeWithEnglish(my) },
];

export const defaultLanguage = languages[0];

export const getLanguageByCode = (code: string): Language => {
  return languages.find(lang => lang.code === code) || defaultLanguage;
};