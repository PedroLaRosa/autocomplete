// Mackup v0.11.3 (PyPI / lra/mackup tag 0.11.3, 2026-11-19). Source: docopt usage in src/mackup/main.py at tag 0.11.3, read statically; the CLI was not run.
// The old `uninstall` command is gone upstream: it is now `link uninstall`.

const applicationGenerator: Fig.Generator = {
  script: ["mackup", "list"],
  postProcess: (output) => {
    return output
      .split("\n")
      .filter((line) => line.startsWith(" - "))
      .map((line) => ({ name: line.substring(3).trim() }));
  },
};

const applicationArg = (isOptional: boolean): Fig.Arg => ({
  name: "application",
  description: "A supported application, see `mackup list`",
  isOptional,
  generators: applicationGenerator,
});

const completionSpec: Fig.Spec = {
  name: "mackup",
  description: "Keep your application settings in sync",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["--force", "-f"],
      description: "Force every question asked to be answered with 'Yes'",
      isPersistent: true,
      exclusiveOn: ["--force-no"],
    },
    {
      name: "--force-no",
      description: "Force every question asked to be answered with 'No'",
      isPersistent: true,
      exclusiveOn: ["--force", "-f"],
    },
    {
      name: ["--root", "-r"],
      description: "Allow mackup to be run as superuser",
      isPersistent: true,
    },
    {
      name: ["--dry-run", "-n"],
      description: "Show steps without executing",
      isPersistent: true,
    },
    {
      name: ["--verbose", "-v"],
      description: "Show additional details",
      isPersistent: true,
    },
    {
      name: ["--config-file", "-c"],
      description: "Specify custom config file path",
      isPersistent: true,
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--version",
      description: "Show version",
    },
  ],
  subcommands: [
    {
      name: "list",
      description: "Display a list of all supported applications",
    },
    {
      name: "show",
      description: "Display the details for a supported application",
      args: applicationArg(false),
    },
    {
      name: "backup",
      description:
        "Copy local config files in the configured remote folder (all applications by default)",
      args: applicationArg(true),
    },
    {
      name: "restore",
      description:
        "Copy config files from the configured remote folder locally (all applications by default)",
      args: applicationArg(true),
    },
    {
      name: "link",
      description:
        "Link local config files from the remote folder (all applications by default)",
      args: applicationArg(true),
      subcommands: [
        {
          name: "install",
          description:
            "Move local config files in the remote folder, and link them",
          args: applicationArg(true),
        },
        {
          name: "uninstall",
          description: "Remove the links and copy config files locally",
          args: applicationArg(true),
        },
      ],
    },
  ],
};

export default completionSpec;
