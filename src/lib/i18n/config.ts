export const LOCALES = ["en", "ru"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "bbworld-locale";

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

type LocaleSignals = {
  cookie?: string;
  country?: string;
  acceptLanguage?: string;
};

export function detectLocale({
  cookie,
  country,
  acceptLanguage,
}: LocaleSignals): Locale {
  if (isLocale(cookie)) {
    return cookie;
  }

  const normalizedCountry = country?.trim().toUpperCase();
  if (normalizedCountry) {
    return normalizedCountry === "RU" ? "ru" : "en";
  }

  if (/^\s*ru(?:[-_,;]|$)/i.test(acceptLanguage ?? "")) {
    return "ru";
  }

  return DEFAULT_LOCALE;
}

export function replaceLocale(pathname: string, locale: Locale): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = normalizedPath.split("/");

  if (isLocale(segments[1])) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return normalizedPath === "/"
    ? `/${locale}`
    : `/${locale}${normalizedPath}`;
}
