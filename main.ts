// The Funniest Sick-Day Excuse — a one-line entry for make.fun.
// The joke: the cat "resigned" on the owner's behalf, so the owner
// needs the day off to negotiate their way back into their own job.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My cat walked across my keyboard and filed my resignation, so I need today off to negotiate my way back into my own job.";

// Guard: the entry must be exactly one line of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error("entry must be a single line of 1-200 characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
