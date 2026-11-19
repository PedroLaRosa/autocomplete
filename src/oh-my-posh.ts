// Oh My Posh v33.0.0 (latest stable GitHub release tag, cross-checked with Homebrew formula, 2026-11-19). Source: command and flag definitions in src/cli/*.go and src/dsc/cli.go at tag v33.0.0 (read from source, binary not run).
// Removed since the previous spec: "config migrate" and the print flags --error/-e/-p (replaced by --status and the global --plain).
const shells = [
  "bash",
  "zsh",
  "fish",
  "powershell",
  "pwsh",
  "cmd",
  "nu",
  "elvish",
  "xonsh",
  "yash",
];

const format: Fig.Option = {
  name: ["--format", "-f"],
  description: "Config format to export to",
  args: {
    name: "FORMAT",
    description: "The export format",
    suggestions: ["json", "jsonc", "toml", "yaml"],
    default: "json",
  },
};

const outputOption = (
  description: string,
  argDescription: string
): Fig.Option => ({
  name: ["--output", "-o"],
  description,
  args: {
    name: "OUTPUT",
    description: argDescription,
    template: "filepaths",
  },
});

const dataFileOption = (description: string): Fig.Option => ({
  name: "--data",
  description,
  args: {
    name: "DATA",
    description: "Template data file (json/yaml/toml)",
    template: "filepaths",
  },
});

const dataDeriveOption: Fig.Option = {
  name: "--data-derive",
  description:
    "Derive live state for a recorded --data file too, instead of replaying it hermetically (debugging)",
};

const dataOnlyOption: Fig.Option = {
  name: "--data-only",
  description:
    "Render segments exclusively from --data: a segment the file does not cover renders as absent instead of probing the real machine",
};

const shellOption = (description: string): Fig.Option => ({
  name: "--shell",
  description,
  args: {
    name: "SHELL",
    description: "The shell used",
    suggestions: shells,
  },
});

const textOption = (
  name: string,
  description: string,
  argName: string,
  argDescription?: string
): Fig.Option => ({
  name,
  description,
  args: {
    name: argName,
    ...(argDescription && { description: argDescription }),
  },
});

const numberOption = (
  name: string | string[],
  description: string,
  argName: string,
  defaultValue = "0"
): Fig.Option => ({
  name,
  description,
  args: {
    name: argName,
    default: defaultValue,
  },
});

const pwdOptions: Fig.Option[] = [
  {
    name: "--pwd",
    description: "Current working directory",
    args: {
      name: "WORKING DIRECTORY",
      description: "The working directory",
      template: "folders",
    },
  },
  {
    name: "--pswd",
    description: "Current working directory (according to pwsh)",
    args: {
      name: "POWERSHELL WORKING DIRECTORY",
      description: "The working directory according to PowerShell",
      template: "folders",
    },
  },
];

// Flags shared by the "print" and "stream" commands
const promptOptions = (verb: string): Fig.Option[] => [
  ...pwdOptions,
  shellOption(`The shell to ${verb} for`),
  textOption("--shell-version", "The shell version", "VERSION"),
  numberOption("--status", "Last known status code", "STATUS"),
  {
    name: "--no-status",
    description: "No valid status code (cancelled or no command yet)",
  },
  textOption("--pipestatus", "The PIPESTATUS array", "PIPESTATUS"),
  numberOption(
    "--execution-time",
    "Timing of the last command",
    "EXECUTION TIME"
  ),
  numberOption(
    ["--stack-count", "-s"],
    "Number of locations on the stack",
    "NUM"
  ),
  numberOption(["--terminal-width", "-w"], "Width of the terminal", "WIDTH"),
  {
    name: "--cleared",
    description: "Do we have a clear terminal or not",
  },
  {
    name: "--eval",
    description: "Output the prompt for eval",
  },
  numberOption("--column", "The column position of the cursor", "COLUMN"),
  numberOption("--job-count", "Number of background jobs", "COUNT"),
  {
    name: "--save-cache",
    description: "Save updated cache to file",
    hidden: true,
  },
  {
    name: "--escape",
    description:
      "Escape the ANSI sequences for the shell (use --escape=false to disable)",
  },
  {
    name: ["--force", "-f"],
    description: "Force rendering the segments",
  },
];

const dscCommand: Fig.Subcommand = {
  name: "dsc",
  description: "Manage Oh My Posh DSC (Desired State Configuration)",
  args: {
    name: "ACTION",
    suggestions: ["get", "set", "test", "schema", "export"],
  },
  options: [
    {
      name: "--state",
      description: "State configuration to set",
      args: {
        name: "STATE",
      },
    },
  ],
};

const statuslineSubcommand = (name: string, tool: string): Fig.Subcommand => ({
  name,
  description: `Render a prompt for ${tool} statusline`,
});

const completionSpec: Fig.Spec = {
  name: "oh-my-posh",
  description: "Tool to render your prompt",
  subcommands: [
    {
      name: "init",
      description: "Initialize your shell and config",
      args: {
        name: "SHELL",
        suggestions: shells,
      },
      options: [
        {
          name: ["--print", "-p"],
          description: "Print the init script",
        },
        {
          name: ["--strict", "-s"],
          description: "Resolve the executable through PATH",
        },
        {
          name: "--debug",
          description: "Enable/disable debug mode",
        },
        {
          name: "--eval",
          description: "Output the full init script for eval",
        },
      ],
    },
    {
      name: "get",
      description: "Get a value from oh-my-posh",
      args: {
        name: "VALUE",
        suggestions: [
          {
            name: "millis",
            description: "Get the current timestamp in milliseconds",
          },
          {
            name: "shell",
            description: "Get the current shell",
          },
          {
            name: "accent",
            description: "Get the accent color",
          },
          {
            name: "toggles",
            description: "Get the toggled segments",
          },
          {
            name: "width",
            description: "Get the terminal width",
          },
          {
            name: "ttl",
            description: "Get the cache TTL in days",
          },
        ],
      },
    },
    {
      name: "debug",
      description: "Print the prompt in debug mode",
      options: [
        {
          name: "--pwd",
          description: "Current working directory",
          args: {
            name: "WORKING DIRECTORY",
            description: "The working directory",
            template: "folders",
          },
        },
        {
          ...shellOption("The shell to print for"),
          hidden: true,
        },
      ],
    },
    {
      name: "config",
      description: "Interact with the config",
      subcommands: [
        {
          name: "edit",
          description: "Edit the config file via the editor set in $EDITOR",
        },
        {
          name: "export",
          description: "Export your config",
          subcommands: [
            {
              name: "data",
              description: "Export a template data file for your config",
              options: [
                outputOption(
                  "Data file to export to",
                  "The data file to write to"
                ),
                {
                  name: "--sanitize",
                  description:
                    "Scrub identity (username, hostname, paths, git/cloud identity, sysinfo, battery) from the recorded data, for sharing or committing fixtures",
                },
                dataFileOption(
                  "Path to a template data file to seed the recording with, instead of the live environment"
                ),
                {
                  name: "--themes",
                  description:
                    "Record every theme in this directory and merge them into one sanitized fixture, ignoring --config (requires --sanitize)",
                  dependsOn: ["--sanitize"],
                  args: {
                    name: "THEMES",
                    template: "folders",
                  },
                },
              ],
            },
            {
              name: "image",
              description: "Export your config to an SVG image",
              options: [
                outputOption("Image file (.svg) to export to", "The SVG file"),
                textOption(
                  "--font-family",
                  "CSS font-family for the exported svg",
                  "FONT FAMILY"
                ),
                dataFileOption(
                  "Path to a template data file (json/yaml/toml) to render with"
                ),
                numberOption(
                  "--terminal-width",
                  "Number of columns to render the prompt and image at",
                  "WIDTH",
                  "120"
                ),
                numberOption(
                  "--cell-width",
                  "Horizontal advance of one cell, as a multiple of font-size (defaults to Hack Nerd Font's own ratio)",
                  "RATIO"
                ),
                numberOption(
                  "--line-height",
                  "Vertical advance of one row, as a multiple of font-size (defaults to Hack Nerd Font's own ratio)",
                  "RATIO"
                ),
                numberOption(
                  "--fill-ascent",
                  "How far a segment background reaches above the baseline, as a multiple of font-size (defaults to Hack Nerd Font's own U+E0B0 ink box)",
                  "RATIO"
                ),
                numberOption(
                  "--fill-descent",
                  "How far a segment background reaches below the baseline, as a multiple of font-size (defaults to Hack Nerd Font's own U+E0B0 ink box)",
                  "RATIO"
                ),
                textOption(
                  "--background-color",
                  "#RRGGBB canvas/window background, overridden by the theme's own background when it sets one",
                  "COLOR"
                ),
                dataDeriveOption,
                dataOnlyOption,
              ],
            },
          ],
          options: [
            format,
            outputOption(
              "The file to output the exported config to",
              "The file to write to"
            ),
          ],
        },
        dscCommand,
      ],
    },
    {
      name: "print",
      description: "Print the prompt/context",
      args: {
        name: "PROMPT",
        suggestions: [
          "debug",
          "primary",
          "secondary",
          "transient",
          "transient-right",
          "right",
          "tooltip",
          "valid",
          "error",
          "preview",
          "cursor",
        ],
      },
      options: [
        ...promptOptions("print"),
        textOption(
          "--command",
          "Tooltip command",
          "COMMAND",
          "The tooltip command"
        ),
        dataFileOption(
          "Path to a template data file (json/yaml/toml) to render with"
        ),
        dataDeriveOption,
        dataOnlyOption,
        {
          name: "--interrupted",
          description: "The command was interrupted",
        },
      ],
    },
    {
      name: "stream",
      description: "Stream the prompt with incremental updates",
      options: promptOptions("stream"),
    },
    {
      name: "toggle",
      description: "Toggle one or more segments on/off",
      args: {
        name: "SEGMENT",
        description: "Segment to toggle",
        isVariadic: true,
      },
    },
    {
      name: "enable",
      description: "Enable a feature",
      args: {
        name: "FEATURE",
        suggestions: ["notice", "upgrade", "reload"],
      },
    },
    {
      name: "disable",
      description: "Disable a feature",
      args: {
        name: "FEATURE",
        suggestions: ["notice", "upgrade", "reload"],
      },
    },
    {
      name: "font",
      description: "Manage fonts",
      subcommands: [
        {
          name: "list",
          description: "List the available Nerd Fonts",
        },
        {
          name: "install",
          description: "Install a Nerd Font",
          args: {
            name: "FONT",
            description:
              "A font name from 'oh-my-posh font list', a URL, or the path to a local zip file",
            template: "filepaths",
          },
          options: [
            {
              name: "--zip-folder",
              description:
                "The folder inside the zip file to install fonts from",
              args: {
                name: "FOLDER",
              },
            },
          ],
        },
        dscCommand,
      ],
    },
    {
      name: "shell",
      description: "Interact with the shell",
      subcommands: [
        {
          name: "get",
          description: "Get the shell name",
        },
        dscCommand,
      ],
    },
    {
      name: "cache",
      description: "Interact with the oh-my-posh cache",
      args: [
        {
          name: "ACTION",
          suggestions: [
            { name: "path", description: "List cache path" },
            { name: "clear", description: "Remove all cache values" },
            { name: "ttl", description: "Set the cache TTL in days" },
            {
              name: "show",
              description: "Print a detailed list of all cached values",
            },
          ],
        },
        {
          name: "DAYS",
          description: "The TTL in days (for ttl)",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["--session", "-s"],
          description: "Show the session cache",
        },
      ],
    },
    {
      name: "auth",
      description: "Authenticate against a service",
      args: {
        name: "SERVICE",
        suggestions: [
          { name: "copilot", description: "GitHub Copilot API" },
          { name: "pear", description: "Pear Desktop API" },
          {
            name: "ytmda",
            description: "YouTube Music Desktop App (YTMDA) API",
          },
        ],
      },
    },
    statuslineSubcommand("claude", "Claude Code"),
    statuslineSubcommand("copilot", "GitHub Copilot CLI"),
    statuslineSubcommand("antigravity", "Antigravity CLI"),
    {
      name: "notice",
      description: "Print the upgrade notice when a new version is available",
    },
    {
      name: "upgrade",
      description: "Upgrade when a new version is available",
      options: [
        {
          name: ["--force", "-f"],
          description: "Force the upgrade even if the version is up to date",
        },
        {
          name: "--auto",
          description: "Respect the cache interval for automatic upgrades",
        },
        {
          name: "--debug",
          description: "Enable/disable debug mode",
        },
      ],
    },
    {
      name: "version",
      description: "Print the version",
      options: [
        {
          name: ["--verbose", "-v"],
          description: "Write verbose output",
        },
      ],
    },
    {
      name: "serve",
      description:
        "Start a persistent prompt server that streams prompt updates over stdio",
      hidden: true,
      options: [
        shellOption("The shell to serve for"),
        {
          name: "--request-pipe",
          description:
            "Named pipe (fifo) to read requests from instead of stdin",
          hidden: true,
          args: {
            name: "PIPE",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "COMMAND",
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: ["--config", "-c"],
      description: "Config file path",
      isPersistent: true,
      args: {
        name: "CONFIG",
        description: "The configuration to use",
        template: ["filepaths", "history"],
      },
    },
    {
      name: "--trace",
      description: "Enable tracing",
      isPersistent: true,
    },
    {
      name: "--plain",
      description: "Plain text output (no ANSI)",
      isPersistent: true,
    },
    {
      name: "--silent",
      description: "Do not print anything",
      isPersistent: true,
      hidden: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show help for oh-my-posh",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Print the version number and exit",
    },
    {
      name: ["--init", "-i"],
      description: "Initialize the shell (use the init command instead)",
      deprecated: true,
    },
    {
      name: ["--shell", "-s"],
      description: "The shell to initialize (use the init command instead)",
      deprecated: true,
      args: {
        name: "SHELL",
        suggestions: shells,
      },
    },
  ],
};
export default completionSpec;
