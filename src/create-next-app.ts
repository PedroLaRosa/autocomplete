// create-next-app v16.4.6 (npm latest, 2026-11-19). Source: packages/create-next-app/index.ts at tag v16.4.6 (commander definition) cross-checked against the option list in the published npm tarball; read statically, binary not run.
// The --no-* negations below are not printed by --help but are handled explicitly in index.ts (and printed by the CLI itself as alternatives).

const completionSpec: Fig.Spec = {
  name: "create-next-app",
  description: "Create Next.js-powered React apps with one command",
  icon: "https://nextjs.org/static/favicon/favicon-16x16.png",
  options: [
    {
      name: ["-v", "--version"],
      description: "Output the current version of create-next-app",
    },
    {
      name: ["-h", "--help"],
      description: "Display this help message",
      priority: 49,
    },
    {
      name: ["--ts", "--typescript"],
      description: "Initialize as a TypeScript project (default)",
    },
    {
      name: ["--js", "--javascript"],
      description: "Initialize as a JavaScript project",
    },
    {
      name: "--tailwind",
      description: "Initialize with Tailwind CSS config (default)",
    },
    {
      name: "--no-tailwind",
      description: "Do not initialize with Tailwind CSS config",
    },
    {
      name: "--react-compiler",
      description: "Initialize with React Compiler enabled",
    },
    {
      name: "--no-react-compiler",
      description: "Do not initialize with React Compiler enabled",
    },
    {
      name: "--cache-components",
      description: "Initialize with Cache Components enabled",
    },
    {
      name: "--no-cache-components",
      description: "Do not initialize with Cache Components enabled",
    },
    {
      name: "--eslint",
      description: "Initialize with ESLint config",
    },
    {
      name: "--biome",
      description: "Initialize with Biome config",
    },
    {
      name: ["--no-eslint", "--no-linter"],
      description: "Initialize without a linter config",
    },
    {
      name: "--app",
      description: "Initialize as an App Router project",
    },
    {
      name: "--no-app",
      description: "Initialize as a Pages Router project",
    },
    {
      name: "--src-dir",
      description: "Initialize inside a 'src/' directory",
    },
    {
      name: "--no-src-dir",
      description: "Do not initialize inside a 'src/' directory",
    },
    {
      name: "--rspack",
      description: "Enable Rspack as the bundler",
    },
    {
      name: "--import-alias",
      description: 'Specify import alias to use (default "@/*")',
      args: { name: "prefix/*" },
    },
    {
      name: "--no-import-alias",
      description: 'Use the default import alias ("@/*") without prompting',
    },
    {
      name: "--api",
      description: "Initialize a headless API using the App Router",
    },
    {
      name: "--empty",
      description: "Initialize an empty project",
    },
    {
      name: "--use-npm",
      description:
        "Explicitly tell the CLI to bootstrap the application using npm",
    },
    {
      name: "--use-pnpm",
      description:
        "Explicitly tell the CLI to bootstrap the application using pnpm",
    },
    {
      name: "--use-yarn",
      description:
        "Explicitly tell the CLI to bootstrap the application using Yarn",
    },
    {
      name: "--use-bun",
      description:
        "Explicitly tell the CLI to bootstrap the application using Bun",
    },
    {
      name: ["--reset", "--reset-preferences"],
      description: "Reset the preferences saved for create-next-app",
    },
    {
      name: "--skip-install",
      description: "Explicitly tell the CLI to skip installing packages",
    },
    {
      name: "--yes",
      description: "Use saved preferences or defaults for unprovided options",
    },
    {
      name: ["-e", "--example"],
      description:
        "An example to bootstrap the app with. You can use an example name from the official Next.js repo or a public GitHub URL. The URL can use any branch and/or subdirectory",
      args: { name: "example-name|github-url" },
    },
    {
      name: "--example-path",
      description:
        "In a rare case, your GitHub URL might contain a branch name with a slash (e.g. bug/fix-1) and the path to the example (e.g. foo/bar). In this case, you must specify the path to the example separately: --example-path foo/bar",
      args: { name: "path-to-example" },
    },
    {
      name: "--agents-md",
      description:
        "Include AGENTS.md to guide coding agents to write up-to-date Next.js code (default)",
    },
    {
      name: "--no-agents-md",
      description: "Do not include AGENTS.md",
    },
    {
      name: "--agent-feedback",
      description: "Prepare anonymized Next.js feedback for your review",
    },
    {
      name: "--no-agent-feedback",
      description: "Do not prepare anonymized Next.js feedback for your review",
    },
    {
      name: "--disable-git",
      description: "Skip initializing a git repository",
    },
  ],
  args: { name: "directory", template: "folders", isOptional: true },
};

export default completionSpec;
