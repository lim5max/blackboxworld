import { describe, expect, it } from "vitest";

import { detectLocale, replaceLocale } from "./config";

describe("detectLocale", () => {
  it("prefers a valid saved locale", () => {
    expect(detectLocale({ cookie: "en", country: "RU" })).toBe("en");
  });

  it("selects Russian for RU geo", () => {
    expect(detectLocale({ country: "ru" })).toBe("ru");
  });

  it("selects English for non-RU geo", () => {
    expect(
      detectLocale({ country: "DE", acceptLanguage: "ru-RU,ru;q=0.9" }),
    ).toBe("en");
  });

  it("uses Russian browser language when geo is absent", () => {
    expect(
      detectLocale({ acceptLanguage: "ru-RU,ru;q=0.9,en;q=0.8" }),
    ).toBe("ru");
  });

  it("ignores invalid cookies", () => {
    expect(detectLocale({ cookie: "de", country: "RU" })).toBe("ru");
  });

  it("falls back to English", () => {
    expect(detectLocale({})).toBe("en");
  });
});

describe("replaceLocale", () => {
  it("switches a nested localized path", () => {
    expect(replaceLocale("/en/about", "ru")).toBe("/ru/about");
  });

  it("prefixes an unlocalized path", () => {
    expect(replaceLocale("/privacy", "en")).toBe("/en/privacy");
  });

  it("handles the locale root", () => {
    expect(replaceLocale("/ru", "en")).toBe("/en");
  });
});
