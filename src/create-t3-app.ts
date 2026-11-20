// create-t3-app v7.40.0 (npm latest, 2026-11-19). Source: npm tarball dist/index.js (commander option definitions,
// CI-mode validation, interactive prompts) + package.json, read statically (package not executed).
// Notes: --import-alias is declared as a boolean commander flag upstream (no value is consumed), so it takes no argument here;
// --nextAuth/--betterAuth, --prisma/--drizzle and --eslint/--biome are rejected together by the CLI in --CI mode.
const dirArgument: Fig.Arg = {
  name: "dir",
  description:
    "The name of the application, as well as the name of the directory to create",
  template: "folders",
  isOptional: true,
  suggestCurrentToken: true,
};

const booleanArg = (what: string): Fig.Arg => ({
  name: "boolean",
  isOptional: true,
  suggestions: [
    { name: "true", description: `Install ${what}` },
    { name: "false", description: `Do not install ${what}` },
  ],
});

// Experimental package toggles, only honoured together with --CI
const packageOption = (
  name: string,
  what: string,
  exclusiveOn?: string[]
): Fig.Option => ({
  name,
  description: `Experimental: Boolean value if we should install ${what}. Must be used in conjunction with \`--CI\``,
  args: booleanArg(what),
  dependsOn: ["--CI"],
  ...(exclusiveOn && { exclusiveOn }),
  priority: 49,
});

const completionSpec: Fig.Spec = {
  name: "create-t3-app",
  description: "A CLI for creating web applications with the t3 stack",
  icon: "https://create.t3.gg/favicon.svg",
  args: dirArgument,
  options: [
    {
      name: "--noGit",
      description:
        "Explicitly tell the CLI to not initialize a new git repo in the project (default: false)",
    },
    {
      name: "--noInstall",
      description:
        "Explicitly tell the CLI to not run the package manager's install command (default: false)",
    },
    {
      name: ["-y", "--default"],
      priority: 76,
      description:
        "Bypass the CLI and use all default options to bootstrap a new t3-app (default: false)",
    },
    {
      name: "--CI",
      description: "Boolean value if we're running in CI (default: false)",
      priority: 49,
    },
    packageOption("--tailwind", "Tailwind CSS"),
    packageOption("--nextAuth", "NextAuth.js", ["--betterAuth"]),
    packageOption("--betterAuth", "BetterAuth", ["--nextAuth"]),
    packageOption("--prisma", "Prisma", ["--drizzle"]),
    packageOption("--drizzle", "Drizzle", ["--prisma"]),
    packageOption("--trpc", "tRPC"),
    {
      name: ["-i", "--import-alias"],
      description:
        'Explicitly tell the CLI to use a custom import alias (default: "~/")',
    },
    {
      name: "--dbProvider",
      description: "Choose a database provider to use (default: sqlite)",
      args: {
        name: "provider",
        suggestions: [
          { name: "sqlite", description: "SQLite (LibSQL)" },
          { name: "mysql", description: "MySQL" },
          { name: "postgres", description: "PostgreSQL" },
          { name: "planetscale", description: "PlanetScale" },
        ],
      },
    },
    {
      name: "--appRouter",
      description: "Explicitly tell the CLI to use the new Next.js app router",
      args: {
        name: "boolean",
        isOptional: true,
        suggestions: [
          { name: "true", description: "Use the Next.js app router" },
          { name: "false", description: "Use the Next.js pages router" },
        ],
      },
    },
    packageOption("--eslint", "eslint and prettier", ["--biome"]),
    packageOption("--biome", "biome", ["--eslint"]),
    {
      name: ["-v", "--version"],
      description: "Display the version number",
    },
    {
      name: ["--help", "-h"],
      description: "Display help for command",
    },
  ],
};

export default completionSpec;
