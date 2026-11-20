// Trex v1.13.1 (newest tag/release of crewdevio/Trex, 2023-08-18; repo dormant since; verified 2026-11-20).
// Source: cli.ts, utils/info.ts, commands/run.ts, handlers/* and README.md at tag v1.13.1.
const dependenciesGenerator: Fig.Generator = {
  script: ["cat", "import_map.json"],
  postProcess: function (out) {
    if (out) {
      try {
        const deps = JSON.parse(out);

        if (deps.imports) {
          const imports = Object.entries(deps.imports);

          const suggestions = imports.map(([name, url]) => ({
            name: name as string,
            icon: "🦖",
            description: url as string,
          }));

          return suggestions;
        }
      } catch (error) {
        return [];
      }
    }
    return [];
  },
};
const scriptsGenerator: Fig.Generator = {
  script: ["cat", "run.json"],
  postProcess: function (out) {
    if (out) {
      try {
        const scriptsObj = JSON.parse(out);

        if (scriptsObj.scripts) {
          const scripts = Object.entries(scriptsObj.scripts);

          const suggestions = scripts.map(([name, command]) => ({
            name: name as string,
            icon: "🚀",
            description: "trex script" as string,
          }));

          return suggestions;
        }
      } catch (error) {
        return [];
      }
    }
    return [];
  },
};

const trexOptions: Record<string, Fig.Option> = {
  version: { name: ["-v", "--version"], description: "Print version" },
  map: {
    name: ["-m", "--map"],
    description: "Install package from deno.land",
    args: {
      name: "package name",
      description: "Deno.land package name",
      isVariadic: true,
    },
  },
  nest: {
    name: ["-n", "--nest"],
    description: "Install package from nest.land",
    args: {
      name: "package name",
      description: "Nest.land package name",
      isVariadic: true,
    },
  },
  pkg: {
    name: ["-p", "--pkg"],
    description: "Install package from some repository",
    args: [
      {
        name: "repository",
        description: "[user]/[repo or repo@tag/branch]/[path/to/file]",
      },
      {
        name: "package name",
        description: "Package alias (defaults to the repository name)",
        isOptional: true,
      },
    ],
  },
  custom: {
    name: ["-c", "--custom"],
    description: "Install custom package",
    args: {
      name: "custom package",
      description:
        "Install a package from a custom URL source, eg: React=https://dev.jspm.io/react/index.js",
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "trex",
  description: "Advanced package management for deno, based on import_map.json",
  subcommands: [
    {
      name: ["i", "install"],
      description: "Install a package",
      options: [trexOptions.map, trexOptions.nest, trexOptions.pkg],
    },
    {
      name: "delete",
      description: "Delete a package",
      args: {
        name: "package name",
        generators: dependenciesGenerator,
        filterStrategy: "fuzzy",
        isVariadic: true,
      },
    },
    {
      name: "upgrade",
      description: "Upgrade trex",
      options: [
        {
          name: "--canary",
          description: "Install from dev branch",
        },
      ],
    },
    {
      name: "tree",
      description: "View dependency tree",
      args: {
        name: "package name",
        generators: dependenciesGenerator,
        filterStrategy: "fuzzy",
      },
    },
    {
      name: "run",
      description: "Run a script alias in a file run.json",
      options: [
        {
          name: ["-w", "--watch"],
          description: "Use reboot script alias protocol (rsap)",
        },
        {
          name: "-wv",
          description: "Verbose output in --watch mode (rsap)",
        },
      ],
      args: [
        {
          name: "script alias",
          generators: scriptsGenerator,
        },
        {
          name: "args",
          description: "Arguments passed to the script alias",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "purge",
      description: "Remove a package or url from cache",
      args: {
        name: "package | url",
        generators: dependenciesGenerator,
        filterStrategy: "fuzzy",
      },
    },
    {
      name: "ls",
      description: "Shows the list of installed packages",
    },
    {
      name: "exec",
      description: "Execute any cli tool without install",
      options: [
        {
          name: "--perms",
          description: "Specify cli permissions",
          args: {
            name: "permissions",
            description: "Comma-separated list, eg: net,read",
            suggestions: [
              "A",
              "env",
              "hrtime",
              "net",
              "plugin",
              "read",
              "write",
              "run",
              "reload",
            ],
          },
        },
      ],
      args: [
        {
          name: "cli tool",
          description: "Module name from deno.land/x, eg: aleph@v0.2.28",
        },
        {
          name: "args",
          description: "Arguments passed to the cli tool",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "check",
      description: "Check deno.land [std/x] dependencies updates",
      options: [
        {
          name: ["-f", "--fix"],
          description: "Update outdated dependencies",
        },
      ],
    },
    {
      name: "global-config",
      description: "Set and get global configurations",
      options: [
        {
          name: "--importMap",
          description: "Set import map default name",
          requiresSeparator: true,
          exclusiveOn: ["--getImportMap"],
          args: { name: "file name", template: "filepaths" },
        },
        {
          name: "--getImportMap",
          description: "Get current import map name configuration",
          exclusiveOn: ["--importMap"],
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help info",
      isPersistent: true,
    },

    trexOptions.version,
    trexOptions.custom,
  ],
  // Only uncomment if trex takes an argument
  // args: {}
};
export default completionSpec;
