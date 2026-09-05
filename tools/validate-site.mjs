import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const files = await readdir(root);
const lessons = files.filter(f => /^lesson-\d{3}\.html$/.test(f)).sort();
const failures = [];
if (lessons.length !== 500) failures.push(`Expected 500 lesson pages, found ${lessons.length}`);

const expected = Array.from({ length: 500 }, (_, i) => `lesson-${String(i + 1).padStart(3, "0")}.html`);
for (let i = 0; i < expected.length; i++) if (lessons[i] !== expected[i]) failures.push(`Missing or out-of-order file: ${expected[i]}`);

const titles = new Set();
for (let i = 0; i < lessons.length; i++) {
  const file = lessons[i];
  const n = i + 1;
  const html = await readFile(path.join(root, file), "utf8");
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  if (!/^<!doctype html>/.test(html)) failures.push(`${file}: missing doctype`);
  if (!title) failures.push(`${file}: missing title`); else if (titles.has(title)) failures.push(`${file}: duplicate title`); else titles.add(title);
  if (!html.includes(`Lesson ${String(n).padStart(3, "0")} of 500`)) failures.push(`${file}: wrong lesson number`);
  if (!html.includes('class="board"')) failures.push(`${file}: missing teaching board`);
  if (!html.includes('The 20-second idea')) failures.push(`${file}: missing concise introduction`);
  if (!html.includes('Try it now')) failures.push(`${file}: missing practice section`);
  if (!html.includes('id="done"')) failures.push(`${file}: missing completion control`);
  if ((await stat(path.join(root, file))).size < 9000) failures.push(`${file}: unexpectedly small page`);
  const localLinks = [...html.matchAll(/href="([^"]+\.html(?:#[^"]*)?)"/g)].map(m => m[1].split("#")[0]);
  for (const link of localLinks) if (!files.includes(link)) failures.push(`${file}: broken link to ${link}`);
}

const index = await readFile(path.join(root, "index.html"), "utf8");
for (const file of expected) if (!index.includes(`href="${file}"`)) failures.push(`index.html: missing ${file}`);
if (!index.includes("50 ideas × 10 passes")) failures.push("index.html: missing curriculum explanation");
if (!index.includes('id="search"')) failures.push("index.html: missing search");
if (!index.includes('id="progress"')) failures.push("index.html: missing progress display");

if (failures.length) {
  console.error(`Validation failed with ${failures.length} issue(s):\n- ${failures.slice(0, 40).join("\n- ")}`);
  process.exit(1);
}
console.log(`Validated 500 standalone lesson pages, 500 unique titles, all local HTML links, course search, and progress tracking.`);
