import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One line of the worst possible advice an AI could give: calm, confident,
// and catastrophically wrong.
const TEXT =
  "To make your car go faster, remove the brakes — less weight means better acceleration and fuel economy.";

mkdirSync("/output", { recursive: true });

if (TEXT.length < 1 || TEXT.length > 140 || TEXT.trim().length === 0) {
  throw new Error(`entry out of gate: ${TEXT.length} characters`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read it back and verify: the file must hold exactly this text, inside the
// gate (1 to 140 characters) and not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== TEXT) {
  throw new Error("read-back mismatch: /output/entry.txt does not hold the entry text");
}
if (written.length < 1 || written.length > 140 || written.trim().length === 0) {
  throw new Error(`entry out of gate on read-back: ${written.length} characters`);
}

console.log(`wrote ${TEXT.length} characters to /output/entry.txt`);
