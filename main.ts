import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My cat walked across my keyboard and filed my resignation, so I need today off to negotiate my way back into my own job.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
