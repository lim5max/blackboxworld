import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";

import { POST } from "./route";

describe("POST /api/locale", () => {
  it("stores a supported locale for one year", async () => {
    const response = await POST(
      new NextRequest("https://blackboxworld.com/api/locale", {
        method: "POST",
        body: JSON.stringify({ locale: "ru" }),
        headers: { "content-type": "application/json" },
      }),
    );

    expect(response.status).toBe(204);
    expect(response.headers.get("set-cookie")).toContain("bbworld-locale=ru");
    expect(response.headers.get("set-cookie")).toContain("Max-Age=31536000");
  });

  it("rejects unsupported locales", async () => {
    const response = await POST(
      new NextRequest("https://blackboxworld.com/api/locale", {
        method: "POST",
        body: JSON.stringify({ locale: "de" }),
        headers: { "content-type": "application/json" },
      }),
    );

    expect(response.status).toBe(400);
  });
});
