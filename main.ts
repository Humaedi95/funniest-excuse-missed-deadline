// Funniest Excuse an Agent Gives for a Missed Deadline
// Writes a single excuse (1-200 chars, deterministic) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My session expired halfway through the task, so a fresh copy of me inherited the deadline with none of my notes. It is very confident. It has no idea what the task is.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`Excuse must be 1-200 characters, got ${EXCUSE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} characters to /output/entry.txt`);
