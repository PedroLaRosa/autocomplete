// Velociraptor (vr) v1.5.0 (GitHub tag umbopepato/velociraptor 1.5.0, 2026-11-19). Source: cliffy command definitions in src/cli/commands/*.ts and src/scripts_info.ts at v1.5.0.
// Upstream is dormant: 1.5.0 (2022-03-07) is still the latest release and the HEAD commit. Not run (needs Deno), spec checked against the source only.
// Fixed: --out-dir belongs to `export` (it was on `upgrade`); added the additional script arguments; export takes optional scripts.

const SCRIPT_KEYWORD = "    • ";

const scriptGenerator: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
  },
  script: {
    command: "vr",
    // eslint-disable-next-line @tabsmith/fig-linter/no-empty-array-values
    args: [],
    env: {
      NO_COLOR: "1",
    },
  },
  postProcess: (out) => {
    const suggestions: Fig.Suggestion[] = [];

    try {
      const lines = out.split("\n").filter(Boolean);

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line.startsWith(SCRIPT_KEYWORD)) continue;

        suggestions.push({
          name: line.replace(SCRIPT_KEYWORD, ""),
          ...(lines[i + 1] && { description: lines[i + 1].trim() }),
        });
      }
    } catch (error) {
      console.error(error);
    }

    return suggestions;
  },
};

const scriptArg: Fig.Arg = {
  name: "script",
  generators: scriptGenerator,
};

const additionalArgs: Fig.Arg = {
  name: "additionalArgs",
  description: "Additional arguments passed to the script",
  isOptional: true,
  isVariadic: true,
};

const completionSpec: Fig.Spec = {
  name: "vr",
  description: "The npm-style script runner for Deno",
  subcommands: [
    {
      name: "run",
      description: "Run a script",
      args: [scriptArg, additionalArgs],
    },
    {
      name: "export",
      description: "Export one or more scripts as standalone executable files",
      args: {
        ...scriptArg,
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: ["-o", "--out-dir"],
          description: "The folder where the scripts will be exported",
          args: {
            name: "dir",
            isOptional: true,
            template: "folders",
          },
        },
      ],
    },
    {
      name: "upgrade",
      description:
        "Upgrade Velociraptor to the latest version or to a specific one",
      args: {
        name: "version",
        isOptional: true,
      },
    },
    {
      name: "run-hook",
      description: "Run a git hook",
      hidden: true,
      args: [
        {
          name: "hook",
        },
        {
          name: "args",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
  ],

  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for Velociraptor",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Show the version number for Velociraptor",
    },
  ],

  args: [{ ...scriptArg, isOptional: true }, additionalArgs],
};

export default completionSpec;
