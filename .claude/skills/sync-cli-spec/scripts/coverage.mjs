// Check a completion spec covers a CLI's real command tree.
// Usage: printf 'pr create\npr list\n' | node coverage.mjs src/gh.ts
// Needs Node >= 22.18 (imports the .ts spec via built-in type stripping).
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const spec = (await import(pathToFileURL(resolve(process.argv[2])).href))
  .default;
const names = (s) => [s.name].flat();
const find = (path) =>
  path
    .split(/\s+/)
    .reduce(
      (cur, part) => cur?.subcommands?.find((s) => names(s).includes(part)),
      spec
    );

const paths = readFileSync(0, "utf8")
  .split("\n")
  .map((l) => l.trim())
  .filter(Boolean);
const missing = paths.filter((p) => !find(p));
// ponytail: "extra" only checks the top level; only meaningful when the input
// lists every top-level command.
const top = new Set(paths.map((p) => p.split(/\s+/)[0]));
const extra = (spec.subcommands ?? [])
  .map((s) => names(s))
  .filter((n) => !n.some((name) => top.has(name)))
  .map((n) => n[0]);

console.log(JSON.stringify({ checked: paths.length, missing, extra }, null, 2));
process.exit(missing.length ? 1 : 0);
