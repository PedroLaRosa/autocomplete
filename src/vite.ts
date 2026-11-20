// Vite v8.3.8 (npm registry latest, 2026-11-19). Source: vite@8.3.8 npm package, `vite --help`, `vite build|optimize|preview|dev|serve --help` and the cac command definitions in dist/node/cli.js.
// Removed since the previous spec: --https (dropped in Vite 3, now the server.https config option).

const serverOptions: Fig.Option[] = [
  {
    name: "--host",
    description: "Specify the hostname",
    args: { name: "host", isOptional: true },
  },
  {
    name: "--port",
    description: "Specify the port",
    args: { name: "port" },
  },
  {
    name: "--open",
    description: "Open browser on startup",
    args: {
      name: "path",
      isOptional: true,
    },
  },
  {
    name: "--strictPort",
    description: "Exit if the specified port is already in use",
  },
];

const forceOption: Fig.Option = {
  name: "--force",
  description: "Force the optimizer to ignore the cache and re-bundle",
};

const rootArg: Fig.Arg = {
  name: "root",
  isOptional: true,
  template: "folders",
};

const completionSpec: Fig.Spec = {
  name: "vite",
  description: "Native ESM-powered web dev build tool",
  icon: "https://vitejs.dev/logo.svg",
  args: rootArg,
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help message",
      isPersistent: true,
    },
    ...serverOptions,
    {
      name: "--cors",
      description: "Enable CORS",
    },
    forceOption,
    {
      name: "--experimentalBundle",
      description: "Use experimental full bundle mode (highly experimental)",
    },
    {
      name: ["-c", "--config"],
      description: "Use the specified config file",
      isPersistent: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--base",
      description: "Public base path",
      isPersistent: true,
      args: {
        name: "path",
        default: "/",
      },
    },
    {
      name: ["-l", "--logLevel"],
      description: "Set the log level",
      isPersistent: true,
      args: {
        name: "level",
        suggestions: [
          { name: "info", icon: "💬" },
          { name: "warn", icon: "⚠️" },
          { name: "error", icon: "💥" },
          { name: "silent", icon: "🤫" },
        ],
      },
    },
    {
      name: "--clearScreen",
      description: "Allow or disable screen clearing when logging",
      isPersistent: true,
    },
    {
      name: "--configLoader",
      description:
        "How to load the config file: bundle it with Rolldown (default), process it on the fly with the runner (experimental) or load it with the native runtime (experimental)",
      isPersistent: true,
      args: {
        name: "loader",
        suggestions: [
          { name: "bundle", description: "Bundle the config with Rolldown" },
          { name: "runner", description: "Process the config on the fly" },
          { name: "native", description: "Load using the native runtime" },
        ],
      },
    },
    {
      name: "--profile",
      description: "Start built-in Node.js inspector",
      isPersistent: true,
      args: {
        name: "name",
        isOptional: true,
      },
    },
    {
      name: ["-d", "--debug"],
      description: "Show debug logs",
      isPersistent: true,
      args: {
        name: "feat",
        isOptional: true,
      },
    },
    {
      name: ["-f", "--filter"],
      description: "Filter debug logs",
      isPersistent: true,
      args: {
        name: "filter",
      },
    },
    {
      name: ["-m", "--mode"],
      description: "Set env mode",
      isPersistent: true,
      args: {
        name: "mode",
        generators: {
          script: ["ls", "-1A"],
          postProcess: (out) =>
            [
              ...new Set(
                out
                  .split("\n")
                  .filter((line) => line.startsWith(".env."))
                  .map((line) => line.slice(".env.".length))
                  .map((mode) => mode.replace(/\.local$/, ""))
                  .filter(Boolean)
              ),
            ].map((name) => ({ name })),
        },
      },
    },
    {
      name: ["-v", "--version"],
      description: "Display version number",
    },
  ],
  subcommands: [
    {
      name: ["dev", "serve"],
      description: "Start dev server (the default command)",
      args: rootArg,
      options: [
        ...serverOptions,
        {
          name: "--cors",
          description: "Enable CORS",
        },
        forceOption,
        {
          name: "--experimentalBundle",
          description:
            "Use experimental full bundle mode (highly experimental)",
        },
      ],
    },
    {
      name: "build",
      icon: "🛠",
      description: "Build for production",
      args: rootArg,
      options: [
        {
          name: "--target",
          description: "Transpile target (default: baseline-widely-available)",
          args: {
            name: "target",
          },
        },
        {
          name: "--outDir",
          description: "Output directory (default: dist)",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--assetsDir",
          description:
            "Directory under outDir to place assets in (default: assets)",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--assetsInlineLimit",
          description:
            "Static asset base64 inline threshold in bytes (default: 4096)",
          args: {
            name: "number",
          },
        },
        {
          name: "--ssr",
          description: "Build specified entry for server-side rendering",
          args: {
            name: "entry",
            template: "filepaths",
            isOptional: true,
          },
        },
        {
          name: "--sourcemap",
          description: "Output source maps for build",
          args: {
            name: "output",
            isOptional: true,
            suggestions: [{ name: "inline" }, { name: "hidden" }],
          },
        },
        {
          name: "--minify",
          description:
            "Enable or disable minification, or specify the minifier to use (default: oxc)",
          args: {
            name: "minifier",
            isOptional: true,
            suggestions: [
              { name: "oxc" },
              { name: "terser" },
              { name: "esbuild" },
            ],
          },
        },
        {
          name: "--manifest",
          description: "Emit build manifest json",
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: "--ssrManifest",
          description: "Emit ssr manifest json",
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: "--emptyOutDir",
          description: "Force empty outDir when it's outside of root",
        },
        {
          name: ["-w", "--watch"],
          description: "Rebuilds when modules have changed on disk",
        },
        {
          name: "--app",
          description: "Same as `builder: {}` in the config",
        },
      ],
    },
    {
      name: "optimize",
      icon: "📦",
      description:
        "Pre-bundle dependencies (deprecated, the pre-bundle process runs automatically)",
      deprecated: true,
      args: rootArg,
      options: [forceOption],
    },
    {
      name: "preview",
      icon: "✨",
      description: "Locally preview the production build",
      args: rootArg,
      options: [
        ...serverOptions,
        {
          name: "--outDir",
          description: "Output directory (default: dist)",
          args: {
            name: "dir",
            template: "folders",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
