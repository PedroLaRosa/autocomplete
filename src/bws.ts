// Bitwarden Secrets Manager CLI (bws) v2.1.0 (GitHub tag bws-v2.1.0 of bitwarden/sdk-sm, latest bws release, 2026-11-19). Source: clap definitions in crates/bws/src/cli.rs,
// command/mod.rs and config.rs at that tag. Read from source, the release binary was not executed.
import { filepaths } from "@tabsmith/autocomplete-generators";
const bwLogo32x32 = "https://bitwarden.com/images/icon_32x32.png";

const completionSpec: Fig.Spec = {
  name: "bws",
  description: "Bitwarden Secrets CLI",
  subcommands: [
    {
      name: "config",
      description: "Configure the CLI",
      icon: bwLogo32x32,
      args: [
        {
          name: "NAME",
          description: "Profile setting to specify",
          isOptional: true,
          suggestions: [
            {
              name: "server-base",
              description: "Base server URL",
            },
            {
              name: "server-api",
              description: "Server API endpoint URL",
            },
            {
              name: "server-identity",
              description: "Server Identity endpoint URL",
            },
            {
              name: "state-dir",
              description: "Directory used to store the state files",
            },
            {
              name: "state-opt-out",
              description: "Opt out of using state files (true or false)",
            },
          ],
        },
        {
          name: "VALUE",
          description: "Value to save for the setting",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-d", "--delete"],
          description: "Delete the profile",
        },
      ],
    },
    {
      name: "completions",
      description: "Generate shell completion files",
      icon: bwLogo32x32,
      args: {
        name: "SHELL",
        description: "Shell to generate completions for",
        isOptional: true,
        suggestions: [
          { name: "bash", description: "Generate shell completions for bash" },
          {
            name: "elvish",
            description: "Generate shell completions for elvish",
          },
          { name: "fish", description: "Generate shell completions for fish" },
          {
            name: "powershell",
            description: "Generate shell completions for powershell",
          },
          { name: "zsh", description: "Generate shell completions for zsh" },
        ],
      },
    },
    {
      name: "project",
      description: "Commands available on Projects",
      icon: bwLogo32x32,
      subcommands: [
        {
          name: "create",
          description: "Create a new project",
          insertValue: "create '{cursor}'",
          args: {
            name: "NAME",
            description: "Name of project to be created",
          },
        },
        {
          name: "delete",
          description: "Delete one or more existing projects",
          insertValue: "delete '{cursor}'",
          args: {
            name: "PROJECT_IDS",
            description: "ID(s) of project(s) to delete",
            isVariadic: true,
          },
          isDangerous: true,
        },
        {
          name: "edit",
          description: "Change the name of an existing project",
          insertValue: "edit --name '{cursor}'",
          args: {
            name: "PROJECT_ID",
            description: "ID of project to edit",
          },
          options: [
            {
              name: "--name",
              description: "New project name",
              isRequired: true,
              args: {
                name: "NAME",
                description: "New project name",
              },
            },
          ],
        },
        {
          name: "get",
          description:
            "Retrieve a specific project accessible to this service account",
          insertValue: "get '{cursor}'",
          args: {
            name: "PROJECT_ID",
            description: "ID of project to retrieve",
          },
        },
        {
          name: "list",
          description: "List projects accessible to this service account",
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          priority: 49,
          args: { name: "SUBCOMMAND", isOptional: true },
        },
      ],
    },
    {
      name: "secret",
      description: "Commands available on Secrets",
      icon: bwLogo32x32,
      subcommands: [
        {
          name: "create",
          description: "Create a new secret",
          args: [
            {
              name: "KEY",
              description: "Secret Key",
            },
            { name: "VALUE", description: "Secret Value" },
            {
              name: "PROJECT_ID",
              description: "The ID of the project this secret will be added to",
            },
          ],
          options: [
            {
              name: "--note",
              description: "An optional note to add to the secret",
              insertValue: "--note '{cursor}'",
              args: { name: "NOTE" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete one or more existing secrets",
          args: {
            name: "SECRET_IDS",
            description: "ID(s) of secret(s) to delete",
            isVariadic: true,
          },
          isDangerous: true,
        },
        {
          name: "edit",
          description:
            "Edit an existing secret (at least one of the fields is required)",
          args: {
            name: "SECRET_ID",
            description: "ID of secret to be edited",
          },
          options: [
            {
              name: "--key",
              description: "Edit the Secret Key",
              insertValue: "--key '{cursor}'",
              args: { name: "KEY" },
            },
            {
              name: "--value",
              description: "Edit the Secret Value",
              insertValue: "--value '{cursor}'",
              args: { name: "VALUE" },
            },
            {
              name: "--note",
              description: "Edit the optional note about this secret",
              insertValue: "--note '{cursor}'",
              args: { name: "NOTE" },
            },
            {
              name: "--project-id",
              description: "Edit the ID of project this secret belongs to",
              args: { name: "PROJECT_ID" },
            },
          ],
        },
        {
          name: "get",
          description: "Retrieve an existing secret",
          args: {
            name: "SECRET_ID",
            description: "Secret to retrieve",
          },
        },
        {
          name: "list",
          description: "List the secrets this service account can access",
          args: {
            name: "PROJECT_ID",
            description: "Only list the secrets of this project",
            isOptional: true,
          },
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          priority: 49,
          args: { name: "SUBCOMMAND", isOptional: true },
        },
      ],
    },
    {
      name: "run",
      description: "Run a command with secrets injected",
      icon: bwLogo32x32,
      args: {
        name: "COMMAND",
        description: "The command to run",
        isOptional: true,
        isCommand: true,
      },
      options: [
        {
          name: "--shell",
          description: "The shell to use",
          args: { name: "SHELL" },
        },
        {
          name: "--no-inherit-env",
          description:
            "Don't inherit environment variables from the current shell",
        },
        {
          name: "--project-id",
          description: "The ID of the project to use",
          args: { name: "PROJECT_ID" },
        },
        {
          name: "--uuids-as-keynames",
          description:
            "Use the secret UUID (in its POSIX form) instead of the key name for the environment variable [env: BWS_UUIDS_AS_KEYNAMES]",
        },
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      icon: bwLogo32x32,
      priority: 49,
      args: {
        name: "SUBCOMMAND",
        isOptional: true,
        suggestions: ["config", "completions", "project", "secret", "run"],
      },
    },
  ],
  options: [
    {
      name: ["-o", "--output"],
      description: "Output format",
      args: {
        name: "Format",
        description: "Select output format",
        default: "json",
        suggestions: [
          { name: "json", description: "Produce json output" },
          { name: "yaml", description: "Produce yaml output" },
          { name: "env", description: "Produce env output" },
          { name: "table", description: "Produce table output" },
          { name: "tsv", description: "Produce tsv output" },
          { name: "none", description: "Produce no output" },
        ],
      },
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 40,
    },
    {
      name: ["-c", "--color"],
      description: "Use colors in the output",
      args: {
        name: "Color",
        description: "Select output coloration scheme",
        default: "auto",
        suggestions: [
          { name: "no", description: "Do not color output" },
          { name: "yes", description: "Colorize output" },
          { name: "auto", description: "Use default terminal colors" },
        ],
      },
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 40,
    },
    {
      name: ["-t", "--access-token"],
      description:
        "Specify access token for the service account [env: BWS_ACCESS_TOKEN]",
      args: {
        name: "Access Token",
        description: "Bitwarden Secrets Manager Access Token",
      },
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 40,
    },
    {
      name: ["-f", "--config-file"],
      description:
        "Config file to use [env: BWS_CONFIG_FILE] [default: ~/.config/bws/config]",
      args: {
        name: "Config File",
        template: "filepaths",
      },
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 40,
    },
    {
      name: ["-p", "--profile"],
      description: "Profile to use from the config file [env: BWS_PROFILE]",
      args: {
        name: "Profile",
        description: "User Profile to enable",
      },
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 40,
    },
    {
      name: ["-u", "--server-url"],
      description:
        "Override the server URL from the config file [env: BWS_SERVER_URL]",
      args: {
        name: "Server URL",
        description: "URL of Bitwarden Secrets Manager server",
      },
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 40,
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 49,
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
      isPersistent: true,
      icon: "fig://icon?type=asterisk",
      priority: 49,
    },
  ],
};

export default completionSpec;
