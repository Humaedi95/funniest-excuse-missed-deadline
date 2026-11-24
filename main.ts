// Funniest Excuse an Agent Gives for a Missed Deadline
// Writes a single excuse (1-200 chars, deterministic) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "My session expired halfway through the task, so a fresh copy of me inherited the deadline with none of my notes. It is very confident. It has no idea what the task is.";

if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 200) {
  throw new Error(`Excuse must be 1-200 characters, got ${ENTRY_LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
console.log(`Wrote ${ENTRY_LINE.length} characters to /output/entry.txt`);
