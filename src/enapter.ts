// Enapter CLI v0.2.0 (the `enapter` binary: last release of the v1 line, tag v0.2.0, still what Homebrew's `enapter` formula installs, 2026-11-19).
// Source: urfave/cli command definitions in internal/app/enaptercli/cmd_*.go at tag v0.2.0 of Enapter/enapter-cli, not a live run.
// The newest upstream release, v3.1.0 (tag commit 2026-05-15), is a rewrite (site/device/blueprint/rule-engine/connection commands) that ships as the
// separate `enapter3` binary (Homebrew `enapter@3`), so it is NOT described here and needs its own src/enapter3.ts.
// Hidden per-command flags (--token, --api-host, --gql-api-url, --ws-api-url) are intentionally left out.
const hardwareIdOption: Fig.Option = {
  name: "--hardware-id",
  description:
    "Hardware ID of the device; can be obtained in cloud.enapter.com",
  isRequired: true,
  args: {
    name: "ID",
  },
};

const ruleIdOption: Fig.Option = {
  name: "--rule-id",
  description: "Rule ID; can be obtained in cloud.enapter.com",
  isRequired: true,
  args: {
    name: "ID",
  },
};

const helpOption: Fig.Option = {
  name: ["--help", "-h"],
  description: "Show help",
};

const uploadTimeoutOption: Fig.Option = {
  name: "--timeout",
  description: "Time to wait for blueprint uploading (default: 30s)",
  args: {
    name: "timeout",
  },
};

const helpSubcommand: Fig.Subcommand = {
  name: ["help", "h"],
  description: "Shows a list of commands or help for one command",
  args: {
    name: "command",
    isOptional: true,
  },
};

const completionSpec: Fig.Spec = {
  name: "enapter",
  description:
    "Cross-platform device management command-line tool for Enapter Energy Management System Toolkit",
  subcommands: [
    {
      name: "devices",
      description: "Device information and management commands",
      subcommands: [
        {
          name: "upload",
          description: "Upload blueprint to a device",
          options: [
            hardwareIdOption,
            {
              name: "--blueprint-dir",
              description: "Directory which contains blueprint file",
              isRequired: true,
              args: {
                name: "dir",
                template: "folders",
              },
            },
            uploadTimeoutOption,
            helpOption,
          ],
        },
        {
          name: "logs",
          description: "Stream logs from a device",
          options: [hardwareIdOption, helpOption],
        },
        {
          name: "upload-logs",
          description: "Show blueprint uploading logs",
          options: [
            hardwareIdOption,
            {
              name: "--operation-id",
              description: "Uploading operation ID (optional)",
              args: {
                name: "ID",
              },
            },
            uploadTimeoutOption,
            helpOption,
          ],
        },
        {
          name: "execute",
          description: "Execute command on device",
          options: [
            hardwareIdOption,
            {
              name: "--command",
              description: "Command name",
              isRequired: true,
              args: {
                name: "command",
              },
            },
            {
              name: "--arguments",
              description: "Command arguments as JSON object",
              args: {
                name: "arguments",
              },
            },
            {
              name: "--show-progress",
              description: "Enable in-progress responses streaming",
            },
            helpOption,
          ],
        },
        helpSubcommand,
      ],
    },
    {
      name: "rules",
      description: "Rules information and management commands",
      subcommands: [
        {
          name: "update",
          description: "Update rule",
          options: [
            ruleIdOption,
            {
              name: "--rule-path",
              description: "Path to file with rule Lua code",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--execution-interval",
              description:
                "Rule execution interval in milliseconds (default: chosen by the server)",
              args: {
                name: "interval",
              },
            },
            {
              name: "--stdlib-version",
              description:
                "Version of standard library used by the rule (default: chosen by the server)",
              args: {
                name: "version",
              },
            },
            {
              name: "--timeout",
              description: "Time to wait for rule update (default: 30s)",
              args: {
                name: "timeout",
              },
            },
            helpOption,
          ],
        },
        {
          name: "logs",
          description: "Stream logs from a rule",
          options: [ruleIdOption, helpOption],
        },
        helpSubcommand,
      ],
    },
    helpSubcommand,
  ],
  options: [
    helpOption,
    {
      name: ["--version", "-v"],
      description: "Show version",
    },
  ],
};
export default completionSpec;
