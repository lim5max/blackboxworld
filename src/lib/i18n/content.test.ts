import { describe, expect, it } from "vitest";

import { enContent, getSiteContent, ruContent } from "./content";

function shapeOf(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(shapeOf);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, nested]) => [key, shapeOf(nested)]),
    );
  }

  return typeof value;
}

describe("localized site content", () => {
  it("keeps Russian and English dictionaries structurally identical", () => {
    expect(shapeOf(ruContent)).toEqual(shapeOf(enContent));
  });

  it("exposes locale-specific product copy", () => {
    expect(getSiteContent("en").pricing.design.label).toBe(
      "Design subscription",
    );
    expect(getSiteContent("en").pricing.trialCta).toBe(
      "Try a one-off project",
    );
    expect(getSiteContent("ru").pricing.design.label).toBe(
      "Дизайн по подписке",
    );
    expect(getSiteContent("ru").pricing.trialCta).toBe(
      "Попробовать разово",
    );
  });

  it("uses fixed market prices in each locale", () => {
    expect(enContent.pricing.design.plans.map((plan) => plan.price)).toEqual([
      "$950",
      "$3,900",
      "$6,500",
    ]);
    expect(ruContent.pricing.design.plans.map((plan) => plan.price)).toEqual([
      "79 000 ₽",
      "329 000 ₽",
      "549 000 ₽",
    ]);
  });
});
