import type { Locale } from "./config";
import en, { type Dict } from "./dictionaries/en";
import ur from "./dictionaries/ur";
import ar from "./dictionaries/ar";

const DICTS: Record<Locale, Dict> = { en, ur, ar };

export function getDict(locale: Locale): Dict {
  return DICTS[locale] ?? en;
}

/** Fill a "{name}"-style template. */
export function tpl(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    key in vars ? String(vars[key]) : `{${key}}`
  );
}
