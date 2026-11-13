---
name: sync-cli-spec
description: Add or update the completion spec in src/ for a CLI tool, researched from its --help and docs. Use when given a CLI name or repo URL, or asked to "add a spec for X", "update/sync the X spec".
argument-hint: <cli-name | repo-url> [...]
---

# Sync CLI Spec

Research one or more CLIs (`$ARGUMENTS`) and add or update their completion specs in `src/` so they match the current release.

## Outcome

- `src/<bin>.ts` created or updated, passing prettier, eslint and `pnpm test`.
- A short report per tool: version synced to, commands/flags added and removed, anything left out on purpose and why.
- Nothing committed unless the user asks.

## Context Needs

| File | Load level | Purpose |
|---|---|---|
| `src/<bin>.ts` | Full, if it exists | The spec being updated; keep its generators/helpers |
| `src/codeburn.ts` | Skim | Pattern for shared-option constants and factories |
| `src/claude.ts` | First 3 lines | Version header convention |
| `scripts/coverage.mjs` (this skill) | Run, don't read | Checks every real command path exists in the spec |

## Step 1: Resolve the target

For each argument, find the **binary name** (from the README or `package.json` `bin`); it can differ from the project name (DeepSeek Harness ships `dsh`). The spec lives at `src/<bin>.ts` (a few tools use `src/<bin>/` for versioned specs). If it exists you are updating; otherwise adding.

Several tools: do them one at a time. For a tree over ~100 subcommands (gh, aws, docker), hand that tool to a fork so the help dumps stay out of your context.

## Step 2: Pin the version

Compare `<bin> --version` with the latest release (`npm view <pkg> version`, `gh release view -R <owner>/<repo>`, `brew info <bin>`). Sync to the latest. If the installed copy is behind, read the latest docs or run `npx -y <pkg>@latest`, not the stale binary.

## Step 3: Gather the command tree

Cheapest reliable source first:

1. **One-shot dump** if the CLI has one: `gh help reference`, `--help-all`, `help --all`. Cross-check a few commands' own `--help`, since dumps can omit group-level flags.
2. **Walk `--help` recursively.** Loop under `bash -c`, write output to a scratchpad file, and Read the file instead of printing it inline. Commander-based CLIs: if `<cmd> <sub> --help` prints root help, use `<cmd> help <sub>`.
3. **Not installed:** read the CLI's argument parser and reference docs from the repo with `gh api repos/<o>/<r>/contents/<path> --jq .content | base64 -d`, then Context7 or web docs.

Capture enum values from help text ("Modes: a, b", `{json|yaml}`, "(choices: ...)"). A dynamic list (e.g. providers) can come from one JSON-emitting command, baked into a static list with a `ponytail:` comment if that command is too slow for a generator.

## Step 4: Write or update the spec

- Header comment: `// <Tool> v<X> (<where the version came from>, <date>). Source: <what you walked>`.
- When updating, keep the existing generators and helpers and reuse them for new args. Add a generator only when a cheap `--json` list command exists.
- Factor repeated flags into constants or small factories rather than copy-pasting.
- Use `suggestions` for enums, `isRepeatable` for repeatable flags, `isPersistent` for group flags, `dependsOn`/`exclusiveOn` where the help says so, and name arrays for aliases.
- Removed upstream: delete. Still accepted but undocumented: `deprecated: true` and say what replaces it. Internal: `hidden: true`.
- Leave out the user's own extensions and aliases; they are per-machine.
- Lint rules that bite: descriptions start with a capital and don't end with a period; don't write default-valued props (`isOptional: false`, `isRequired: false`, `isVariadic: false`).

## Step 5: Verify

```bash
pnpm exec prettier --write src/<bin>.ts && pnpm exec eslint src/<bin>.ts && pnpm test
```

Then check coverage. Feed the CLI's real command paths (one per line, e.g. `pr create`) into the bundled script:

```bash
<paths> | node .claude/skills/sync-cli-spec/scripts/coverage.mjs src/<bin>.ts
```

It prints `missing` (real commands the spec lacks) and `extra` (top-level spec commands the CLI no longer has), and exits 1 if anything is missing. For generators, call `postProcess` on a sample output in the same Node session to check what it returns.

## Step 6: Report and hand off

Report per tool: version, counts added/removed, deliberate omissions, and check results. Don't commit, push or open a PR unless asked. If asked: one commit per spec, `feat(<bin>): add completion spec for <bin> v<X>` or `feat(<bin>): sync completion spec with <bin> v<X>`.

Release, if the user wants a version: merging to `main` runs `build.yml`, which stages `1.0.<run number>` on npm. The user approves it with 2FA: `npx -y npm@12 stage approve <stage-id>` (the id is in the run's `npm stage publish` log).

## Rules

- 2026-11-13: zsh does not word-split `$var`, so `for c in ...; do <bin> $c --help` silently runs the root help. Run help loops under `bash -c`.
- 2026-11-13: some subcommands ignore `--help` and start running (`codeburn serve --help` started a server). Use `<bin> help <cmd>` for servers, daemons and MCP commands, and redirect `</dev/null`.
- 2026-11-13: the npm package or project name is not always the binary name. Name the spec after the binary.

## Self-Update

If the user flags a problem with a run (wrong source, missed flags, bad convention), add a dated line to `## Rules` above right away, so the next run doesn't repeat it.
