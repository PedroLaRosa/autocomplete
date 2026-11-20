// dotenv-vault v1.27.0 (latest on npm and newest git tag, published 2025-06-25; verified 2026-11-20).
// Source: oclif.manifest.json and dist/commands of the npm tarball plus src/commands/*.ts in
// dotenv-org/dotenv-vault, plus the `help` and `update` commands (@oclif/plugin-help 5.2.20,
// @oclif/plugin-update 3.2.4) and the root `--version` flag handled by @oclif/core 1.x.
import { filepaths } from "@tabsmith/autocomplete-generators";

// Common Options
const yesOption: Fig.Option = {
  name: ["--yes", "-y"],
  description:
    "Automatic yes to prompts. Assume yes to all prompts and run non-interactively",
};

const dotenvMeOption: Fig.Option = {
  name: ["-m", "--dotenvMe"],
  description:
    "Pass .env.me (DOTENV_ME) credential directly (rather than reading from .env.me file)",
  args: {
    name: "DOTENV_ME",
    description: "Pass .env.me (DOTENV_ME) credential directly",
  },
};

// Common Arguments
const dotenvVaultArg: Fig.Arg = {
  name: "DOTENV_VAULT",
  description: "Set .env.vault identifier. Defaults to generated value",
  isOptional: true,
};

const dotenvMeArg: Fig.Arg = {
  name: "DOTENV_ME",
  description: "Set .env.me credential. Defaults to generated value",
  isOptional: true,
};

// ponytail: the default environments of a new dotenv-vault project; custom ones still type freely
const environmentArg: Fig.Arg = {
  name: "ENVIRONMENT",
  description: "Set environment. Defaults to development",
  isOptional: true,
  suggestions: ["development", "ci", "staging", "production"],
};

const filenameArg: Fig.Arg = {
  name: "FILENAME",
  description:
    "Set filename. Defaults to .env for development and .env.{environment} for other environments",
  isOptional: true,
  generators: filepaths({ matches: /^\.env.*$/ }),
};

const completionSpec: Fig.Spec = {
  name: "dotenv-vault",
  description: "CLI for dotenv-vault",
  options: [
    {
      name: "--help",
      description: "Get documentation for the command",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show the CLI version (only as the first argument)",
    },
  ],
  subcommands: [
    {
      name: "new",
      description: "Create your project",
      options: [yesOption],
      args: dotenvVaultArg,
    },
    {
      name: "login",
      description: "Log in",
      options: [yesOption],
      args: dotenvMeArg,
    },
    {
      name: "logout",
      description: "Log out",
      options: [yesOption],
    },
    {
      name: "open",
      description: "Open project page",
      options: [yesOption],
      args: environmentArg,
    },
    {
      name: "push",
      description: "Push .env securely",
      options: [yesOption, dotenvMeOption],
      args: [environmentArg, filenameArg],
    },
    {
      name: "pull",
      description: "Pull .env securely",
      options: [yesOption, dotenvMeOption],
      args: [environmentArg, filenameArg],
    },
    {
      name: "versions",
      description: "List version history",
      options: [yesOption, dotenvMeOption],
      args: environmentArg,
    },
    {
      name: "build",
      description: "Build .env.vault",
      options: [yesOption, dotenvMeOption],
    },
    {
      name: "keys",
      description: "List .env.vault decryption keys",
      options: [yesOption, dotenvMeOption],
      args: {
        ...environmentArg,
        description:
          "Set environment to fetch key(s) from. Defaults to all environments",
      },
    },
    {
      name: "rotatekey",
      description: "Rotate a DOTENV_KEY",
      options: [yesOption, dotenvMeOption],
      args: {
        name: "ENVIRONMENT",
        description: "Set environment to rotate",
        suggestions: environmentArg.suggestions,
      },
    },
    {
      name: "decrypt",
      description: "Decrypt .env.vault locally",
      args: { name: "DOTENV_KEY", description: "Set decryption key" },
    },
    {
      name: "whoami",
      description: "Display the current logged in user",
      options: [dotenvMeOption],
    },
    {
      name: "status",
      description: "Check dotenv.org status",
      options: [yesOption],
    },
    {
      name: "help",
      description: "Display help for dotenv-vault",
      options: [
        {
          name: ["-n", "--nested-commands"],
          description: "Include all nested commands in the output",
        },
      ],
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
        isVariadic: true,
        template: "help",
      },
    },
    {
      name: "update",
      description: "Update the dotenv-vault CLI",
      options: [
        {
          name: ["-a", "--available"],
          description: "See available versions",
        },
        {
          name: ["-v", "--version"],
          description: "Install a specific version",
          exclusiveOn: ["--interactive"],
          args: { name: "version" },
        },
        {
          name: ["-i", "--interactive"],
          description:
            "Interactively select version to install. This is ignored if a channel is provided",
          exclusiveOn: ["--version"],
        },
        {
          name: "--force",
          description: "Force a re-download of the requested version",
        },
      ],
      args: { name: "channel", isOptional: true },
    },
  ],
};

export default completionSpec;
