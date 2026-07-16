import { getRedirectUrl } from "next/experimental/testing/server";
import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";

import { proxy } from "./proxy";

function redirectFor(request: NextRequest) {
  const response = proxy(request);
  expect(response).toBeDefined();
  return getRedirectUrl(response!);
}

describe("locale proxy", () => {
  it("redirects RU traffic to the Russian locale", () => {
    expect(
      redirectFor(
        new NextRequest("https://blackboxworld.com/", {
          headers: { "x-vercel-ip-country": "RU" },
        }),
      ),
    ).toBe("https://blackboxworld.com/ru");
  });

  it("redirects non-RU traffic to the English locale", () => {
    expect(
      redirectFor(
        new NextRequest("https://blackboxworld.com/", {
          headers: { "x-vercel-ip-country": "DE" },
        }),
      ),
    ).toBe("https://blackboxworld.com/en");
  });

  it("lets a saved language override geo detection", () => {
    expect(
      redirectFor(
        new NextRequest("https://blackboxworld.com/about", {
          headers: {
            cookie: "bbworld-locale=en",
            "x-vercel-ip-country": "RU",
          },
        }),
      ),
    ).toBe("https://blackboxworld.com/en/about");
  });

  it("preserves the path and query string", () => {
    expect(
      redirectFor(
        new NextRequest("https://blackboxworld.com/about?ref=launch", {
          headers: { "x-vercel-ip-country": "RU" },
        }),
      ),
    ).toBe("https://blackboxworld.com/ru/about?ref=launch");
  });

  it.each(["/en/about", "/ru", "/_next/static/a.js", "/images/a.png"])(
    "does not redirect excluded path %s",
    (pathname) => {
      expect(
        proxy(
          new NextRequest(`https://blackboxworld.com${pathname}`, {
            headers: { "x-vercel-ip-country": "RU" },
          }),
        ),
      ).toBeUndefined();
    },
  );
});
