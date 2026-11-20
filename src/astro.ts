// Astro v7.4.13 (npm registry latest, 2026-11-19). Source: the CLI source and help payloads shipped in the astro@7.4.13 npm package
// (dist/cli/**) plus the @astrojs/check@0.9.12 option definitions for `astro check`; the binary itself was not run.
const serverSubcommands = (server: string): Fig.Subcommand[] => [
  {
    name: "stop",
    description: `Stop a running background ${server} server`,
  },
  {
    name: "status",
    description: `Check if a ${server} server is running`,
  },
  {
    name: "logs",
    description: `View logs from a background ${server} server`,
    options: [
      {
        name: ["-f", "--follow"],
        description: "Keep streaming new log output",
      },
    ],
  },
];

const serverOptions = (server: string): Fig.Option[] => [
  {
    name: "--background",
    description: `Start the ${server} server as a background process`,
  },
  {
    name: "--port",
    description: "Specify which port to run on",
    args: {
      name: "port",
      default: "4321",
    },
  },
  {
    name: "--host",
    description: "Listen on all addresses, including LAN and public addresses",
    args: {
      name: "custom address",
      isOptional: true,
    },
  },
  {
    name: "--open",
    description: "Automatically open the app in the browser on server start",
  },
  {
    name: "--ignore-lock",
    description: `Start the ${server} server even if another one is already running, without checking or writing the lock file`,
  },
  {
    name: "--allowed-hosts",
    description:
      "Specify a comma-separated list of allowed hosts or allow any hostname",
    args: {
      name: "hosts",
      isOptional: true,
    },
  },
];

const modeOption = (defaultMode: string): Fig.Option => ({
  name: "--mode",
  description: "Specify the mode of the project",
  args: {
    name: "mode",
    default: defaultMode,
  },
});

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "See all available flags",
};

const completionSpec: Fig.Spec = {
  name: "astro",
  description:
    "CLI provided by Astro to develop, build, and preview your project from a terminal window",
  icon: "https://astro.build/favicon.svg",
  subcommands: [
    {
      name: "add",
      description: "Add an integration",
      options: [
        {
          name: ["-y", "--yes"],
          description: "Accept all prompts",
        },
        helpOption,
      ],
      args: {
        name: "integration",
        description:
          "Integration or adapter to add (react, preact, vue, svelte, solid-js, lit, alpinejs, starlight, netlify, vercel, deno, cloudflare, node, tailwind, mdx, markdoc, partytown, sitemap, ...)",
        isVariadic: true,
        suggestions: [
          { name: "react", description: "UI framework" },
          { name: "preact", description: "UI framework" },
          { name: "vue", description: "UI framework" },
          { name: "svelte", description: "UI framework" },
          { name: "solid-js", description: "UI framework" },
          { name: "lit", description: "UI framework" },
          { name: "alpinejs", description: "UI framework" },
          { name: "starlight", description: "Documentation framework" },
          { name: "netlify", description: "SSR adapter" },
          { name: "vercel", description: "SSR adapter" },
          { name: "deno", description: "SSR adapter" },
          { name: "cloudflare", description: "SSR adapter" },
          { name: "node", description: "SSR adapter" },
          { name: "tailwind", description: "Tailwind CSS integration" },
          { name: "mdx", description: "MDX integration" },
          { name: "markdoc", description: "Markdoc integration" },
          { name: "partytown", description: "Partytown integration" },
          { name: "sitemap", description: "Sitemap integration" },
        ],
      },
    },
    {
      name: "build",
      description: "Build your project and write it to disk",
      options: [
        {
          name: "--outDir",
          description: "Specify the output directory for the build",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        modeOption("production"),
        {
          name: "--devOutput",
          description:
            "Output a development-based build similar to code transformed in `astro dev`",
        },
        {
          name: "--force",
          description:
            "Clear the content layer and content collection cache, forcing a full rebuild",
        },
        {
          name: "--timings",
          description: "Print a summary of where the build spent its time",
        },
        helpOption,
      ],
    },
    {
      name: "check",
      description: "Check your project for errors",
      options: [
        {
          name: "--root",
          description:
            "Manually specify a root dir to check in. By default, the current working directory is used",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: ["-w", "--watch"],
          description: "Watch Astro files for changes and re-run checks",
        },
        {
          name: "--tsconfig",
          description:
            "Manually specify a path to a tsconfig.json or jsconfig.json to use",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--minimumFailingSeverity",
          description:
            "Minimum error severity needed to exit with an error code",
          args: {
            name: "severity",
            default: "error",
            suggestions: ["error", "warning", "hint"],
          },
        },
        {
          name: "--minimumSeverity",
          description: "Minimum diagnostic severity to show",
          args: {
            name: "severity",
            default: "hint",
            suggestions: ["error", "warning", "hint"],
          },
        },
        {
          name: "--preserveWatchOutput",
          description: "Do not clear the output between checks in watch mode",
        },
        {
          name: "--noSync",
          description: "Skip generating types (astro sync) before checking",
        },
        {
          name: ["-y", "--yes"],
          description:
            "Accept all prompts, such as installing the required packages",
        },
      ],
    },
    {
      name: "create-key",
      description: "Create a cryptography key",
    },
    {
      name: "dev",
      description: "Start the development server",
      subcommands: serverSubcommands("dev"),
      options: [
        ...serverOptions("dev"),
        modeOption("development"),
        {
          name: "--force",
          description:
            "Clear the content layer cache, forcing a full rebuild, and replace an already running dev server",
        },
        helpOption,
      ],
    },
    {
      name: "docs",
      description: "Open documentation in your web browser",
    },
    {
      name: "info",
      description: "List info about your current Astro setup",
      options: [
        {
          name: "--copy",
          description: "Force copy of the output",
        },
        helpOption,
      ],
    },
    {
      name: "preferences",
      description: "Configure user preferences",
      options: [
        {
          name: ["-g", "--global"],
          description:
            "Scope command to global preferences (all Astro projects) rather than the current project",
        },
      ],
      subcommands: [
        {
          name: "list",
          description:
            "Pretty print all current preferences (--json logs them as a JSON object)",
        },
        {
          name: "get",
          description: "Log current preference value",
          args: { name: "key" },
        },
        {
          name: "set",
          description: "Update preference value",
          args: [{ name: "key" }, { name: "value" }],
        },
        {
          name: "reset",
          description: "Reset preference value to default",
          args: { name: "key" },
        },
        {
          name: "enable",
          description: "Set a boolean preference to true",
          args: { name: "key" },
        },
        {
          name: "disable",
          description: "Set a boolean preference to false",
          args: { name: "key" },
        },
      ],
    },
    {
      name: "preview",
      description: "Preview your build locally",
      subcommands: serverSubcommands("preview"),
      options: [...serverOptions("preview"), helpOption],
    },
    {
      name: "sync",
      description: "Generate TypeScript types for all Astro modules",
      options: [
        {
          name: "--force",
          description: "Clear the content layer cache, forcing a full rebuild",
        },
        helpOption,
      ],
    },
    {
      name: "telemetry",
      description: "Configure telemetry settings",
      subcommands: [
        {
          name: "enable",
          description: "Enable anonymous data collection",
        },
        {
          name: "disable",
          description: "Disable anonymous data collection",
        },
        {
          name: "reset",
          description: "Reset anonymous data collection settings",
        },
      ],
    },
  ],
  options: [
    {
      name: "--config",
      description: "Specify your config file",
      isPersistent: true,
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--root",
      description: "Specify your project root folder",
      isPersistent: true,
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--site",
      description: "Specify your project site",
      isPersistent: true,
      args: {
        name: "url",
      },
    },
    {
      name: "--base",
      description: "Specify your project base",
      isPersistent: true,
      args: {
        name: "pathname",
        template: "folders",
      },
    },
    {
      name: "--verbose",
      description: "Enable verbose logging",
      isPersistent: true,
    },
    {
      name: "--silent",
      description: "Disable all logging",
      isPersistent: true,
    },
    {
      name: "--json",
      description: "Enable JSON logging",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show the version number and exit",
      isPersistent: true,
    },
    {
      name: "--help",
      description: "Show help for astro",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
