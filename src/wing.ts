// Wing v0.85.51 (npm winglang latest + GitHub tag winglang/wing v0.85.51, 2026-11-19). Source: commander definitions in packages/winglang/src/cli.ts and project-templates/ at tag v0.85.51 (read statically, binary not run).
// The `upgrade` command is gone from the CLI definition (the update check lives in src/commands/upgrade.ts only). `--target`/`--out-dir` became `--platform`/`--output`.
const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Display help for command",
  priority: 49,
};

const platformOption = (builtins: string[]): Fig.Option => ({
  name: ["-t", "--platform"],
  description: `Target platform provider (builtin: ${builtins.join(", ")})`,
  isRepeatable: true,
  args: {
    name: "platform",
    default: "sim",
    suggestions: builtins,
  },
});

const valueOption: Fig.Option = {
  name: ["-v", "--value"],
  description: "Platform-specific value in the form KEY=VALUE",
  isRepeatable: true,
  args: { name: "value" },
};

const valuesOption: Fig.Option = {
  name: "--values",
  description: "File with platform-specific values (TOML|YAML|JSON)",
  args: { name: "file", template: "filepaths" },
};

const rootIdOption: Fig.Option = {
  name: ["-r", "--rootId"],
  description: "App root id",
  args: { name: "rootId" },
};

const entrypointArg: Fig.Arg = {
  name: "entrypoint",
  description: "Program .w entrypoint",
  isOptional: true,
  template: "filepaths",
};

const completionSpec: Fig.Spec = {
  name: "wing",
  description: "The Wing programming language toolchain",
  subcommands: [
    {
      name: ["run", "it"],
      description: "Runs a Wing program in the Wing Console",
      options: [
        {
          name: ["-p", "--port"],
          description: "Specify port",
          args: { name: "port" },
        },
        {
          name: "--no-open",
          description: "Do not open the Wing Console in the browser",
        },
        {
          name: ["-w", "--watch"],
          description:
            "Watch additional paths for changes. Supports globs and '!' for negations",
          args: { name: "globs", isVariadic: true },
        },
        platformOption(["sim"]),
        {
          name: "--statedir",
          description: "Directory for the resource's state",
          args: { name: "dir", template: "folders" },
        },
        helpOption,
      ],
      args: entrypointArg,
    },
    {
      name: "lsp",
      description: "Run the Wing language server on stdio",
      options: [helpOption],
    },
    {
      name: "docs",
      description: "Generate documentation for the current project",
      options: [helpOption],
    },
    {
      name: "compile",
      description: "Compiles a Wing program",
      options: [
        platformOption(["sim", "tf-aws", "tf-azure", "tf-gcp"]),
        rootIdOption,
        {
          name: ["-o", "--output"],
          description:
            'Path to the output directory (default is "./target/<entrypoint>.<target>")',
          args: { name: "output", template: "folders" },
        },
        valueOption,
        valuesOption,
        helpOption,
      ],
      args: entrypointArg,
    },
    {
      name: "secrets",
      description: "Manage secrets",
      options: [
        platformOption(["sim", "tf-aws", "tf-azure", "tf-gcp", "awscdk"]),
        valueOption,
        valuesOption,
        {
          name: "--list",
          description: "List required application secrets",
        },
        helpOption,
      ],
      args: entrypointArg,
    },
    {
      name: "test",
      description:
        "Compiles a Wing program and runs all functions with the word 'test' or start with 'test:' in their resource identifiers",
      options: [
        platformOption(["sim", "tf-aws", "tf-azure", "tf-gcp", "awscdk"]),
        {
          name: ["-s", "--snapshots"],
          description: "Capture snapshots of compiler output",
          args: {
            name: "mode",
            default: "auto",
            suggestions: [
              {
                name: "auto",
                description:
                  'Behaves as "assert" if CI=1, otherwise as "deploy"',
              },
              { name: "never", description: "Snapshots are never captured" },
              {
                name: "update",
                description:
                  "Only update the snapshots without executing the tests on the target platform",
              },
              {
                name: "deploy",
                description:
                  "Execute tests on the target platform and update snapshots if all tests pass",
              },
              {
                name: "assert",
                description:
                  "Verify that the snapshots are up-to-date and fail otherwise",
              },
            ],
          },
        },
        rootIdOption,
        {
          name: ["-f", "--test-filter"],
          description:
            "Run tests that match the provided regex pattern within the selected entrypoint files",
          args: { name: "regex" },
        },
        {
          name: "--no-clean",
          description: "Keep build output",
        },
        {
          name: "--no-stream",
          description: "Do not stream logs",
        },
        {
          name: ["-o", "--output-file"],
          description:
            "File name to write test results to (file extension is required, supports only .json at the moment)",
          args: { name: "outputFile", template: "filepaths" },
        },
        {
          name: ["-R", "--retry"],
          description:
            "Number of times to retry failed tests (3 if no number is given)",
          args: { name: "retries", isOptional: true },
        },
        {
          name: ["-p", "--parallel"],
          description:
            "Number of tests to be executed in parallel (10 if no number is given, 0 to run all at once)",
          args: { name: "batch", isOptional: true },
        },
        helpOption,
      ],
      args: {
        name: "entrypoint",
        description: "All files to test (globs are supported)",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "pack",
      description:
        "Package the current directory into an npm library (gzipped tarball)",
      options: [
        {
          name: ["-o", "--out-file"],
          description: "Output filename",
          args: { name: "filename", template: "filepaths" },
        },
        helpOption,
      ],
    },
    {
      name: "new",
      description: "Create a new Wing project",
      options: [
        {
          name: ["-l", "--language"],
          description: "Language",
          args: {
            name: "language",
            isOptional: true,
            suggestions: ["wing", "typescript"],
          },
        },
        {
          name: "--list-templates",
          description: "List available templates",
        },
        helpOption,
      ],
      args: {
        name: "template",
        description: "Template name",
        isOptional: true,
        suggestions: [
          "empty",
          "http-api",
          "private-api",
          "react-vite",
          "slack",
        ],
      },
    },
    {
      name: "help",
      description: "Display help for command",
      priority: 49,
      args: { name: "command", isOptional: true, template: "help" },
    },
  ],
  options: [
    {
      name: ["-v", "--version", "-V"],
      description: "Output the current version",
    },
    {
      name: "--debug",
      description: "Enable debug logging (same as DEBUG=1)",
      isPersistent: true,
    },
    {
      name: "--progress",
      description: "Show compilation progress",
      isPersistent: true,
    },
    {
      name: "--no-progress",
      description: "Hide compilation progress",
      isPersistent: true,
    },
    {
      name: "--no-update-check",
      description: "Skip checking for toolchain updates",
      isPersistent: true,
    },
    {
      name: "--no-analytics",
      description:
        "Disable analytics collection (same as WING_DISABLE_ANALYTICS=1)",
      isPersistent: true,
    },
    {
      name: "--no-color",
      description: "Disable colors for all output",
      isPersistent: true,
    },
    helpOption,
  ],
};

export default completionSpec;
