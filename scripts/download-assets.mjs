// Downloads every unique image listed in docs/research/all-images.json
// to public/images/<basename>.<ext>. Run with: node scripts/download-assets.mjs
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const OUT = path.join(ROOT, "public", "images");

async function main() {
  await mkdir(OUT, { recursive: true });
  const manifest = JSON.parse(
    await readFile(path.join(ROOT, "docs/research/all-images.json"), "utf8")
  );

  const tasks = manifest.images.map((img) => {
    const name = img.normalized.split("/").pop();
    return { url: img.normalized, dest: path.join(OUT, name), name };
  });

  // Also pull favicons
  const fav = [
    { url: "https://framerusercontent.com/images/qOR8OKMEI8WuXzivJynhTBiuN1c.png", dest: path.join(ROOT, "public/seo/favicon.png") },
    { url: "https://framerusercontent.com/images/SRWNBGSPqgdhXUTMQCb7g9V0wdI.png", dest: path.join(ROOT, "public/seo/favicon-dark.png") },
    { url: "https://framerusercontent.com/images/l2gXXYprvpaI1itPq0oQVGF8EIA.png", dest: path.join(ROOT, "public/seo/apple-touch-icon.png") },
  ];
  await mkdir(path.join(ROOT, "public/seo"), { recursive: true });

  const all = [...tasks, ...fav];

  // batch 6 parallel
  const batchSize = 6;
  let ok = 0, fail = 0, skip = 0;
  for (let i = 0; i < all.length; i += batchSize) {
    const chunk = all.slice(i, i + batchSize);
    await Promise.all(
      chunk.map(async (t) => {
        if (existsSync(t.dest)) { skip++; return; }
        try {
          const res = await fetch(t.url);
          if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
          const buf = Buffer.from(await res.arrayBuffer());
          await writeFile(t.dest, buf);
          ok++;
          process.stdout.write(`  ✓ ${path.basename(t.dest)} (${(buf.length/1024).toFixed(1)} KB)\n`);
        } catch (err) {
          fail++;
          process.stdout.write(`  ✗ ${path.basename(t.dest)} — ${err.message}\n`);
        }
      })
    );
  }
  console.log(`\nDone. ok=${ok} fail=${fail} skip=${skip} total=${all.length}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
