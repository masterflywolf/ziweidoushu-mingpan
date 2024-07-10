import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const locales = [
  "",
  "en",
  "zh",
  "tw",
  "ja",
  "ar",
  "es",
  "ru",
  "de",
  "fr",
  "ko",
  "nl",
  "pl",
  "pt",
  "vi",
];
export const localeNames: any = {
  en: "🇺🇸 English",
  zh: "🇨🇳 简体",
  tw: "cn 繁体",
  ja: "🇯🇵 日本語",
  ar: "🇸🇦 العربية",
  es: "🇪🇸 Español",
  ru: "🇷🇺 Русский",
  de: "de Deutsch", //德语
  fr: "fr Français", //法语
  ko: "ko 한국어", //韩语
  nl: "nl Nederlands", //荷兰语
  pl: "pl Polski", //波兰语
  pt: "pt Português", //葡萄牙语
  vi: "vi Tiếng Việt", //越南语
};
export type LocalesDict = {
  [key: string]: string; // 使用索引签名来表示键值对
};
// 提供给紫微斗数的国际化配置
export const localesDict: LocalesDict = {
  en: "en-US",
  zh: "zh-CN",
  tw: "zh-TW",
  ja: "ja-JP",
  ar: "en-US",
  es: "en-US",
  ru: "en-US",
  de: "en-US",
  fr: "en-US",
  ko: "ko-KR",
  nl: "en-US",
  pl: "en-US",
  pt: "en-US",
  vi: "en-US",
};
export const defaultLocale = "en";

// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
export function getLocale(headers: any): string {
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

const dictionaries: any = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  zh: () => import("@/locales/zh.json").then((module) => module.default),
  tw: () => import("@/locales/tw.json").then((module) => module.default),
  ja: () => import("@/locales/ja.json").then((module) => module.default),
  ar: () => import("@/locales/ar.json").then((module) => module.default),
  es: () => import("@/locales/es.json").then((module) => module.default),
  ru: () => import("@/locales/ru.json").then((module) => module.default),
  de: () => import("@/locales/de.json").then((module) => module.default),
  fr: () => import("@/locales/fr.json").then((module) => module.default),
  ko: () => import("@/locales/ko.json").then((module) => module.default),
  nl: () => import("@/locales/nl.json").then((module) => module.default),
  pl: () => import("@/locales/pl.json").then((module) => module.default),
  pt: () => import("@/locales/pt.json").then((module) => module.default),
  vi: () => import("@/locales/vi.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
    locale = "zh";
  }

  if (!Object.keys(dictionaries).includes(locale)) {
    locale = "en";
  }

  return dictionaries[locale]();
};
