// Cicada v0.1.50 (latest upstream release, tag v0.1.50 / npm @cicadahq/cicada, 2026-11-20). Source: clap definitions in crates/cli/src/{main,debug,oci}.rs of cicadahq/cicada
// read statically (binary not run); release features per .github/workflows/release.yaml. Upstream has had no release since 2023-04 and no commit since 2023-09.
// The `fig-completion` command is only compiled with the `fig-completions` cargo feature, which the release builds do not enable, so it is omitted.
// `--dotenv`/`--secrets-json`/`--oci-backend`/`--platform` are single-use options (clap ArgAction::Set), only `--secret` can be repeated.
const help = (description = "Print help"): Fig.Option => ({
  name: ["-h", "--help"],
  description,
});

const helpSubcommandDescription =
  "Print this message or the help of the given subcommand(s)";

const ociBackendOption: Fig.Option = {
  name: "--oci-backend",
  description: "The OCI backend to use",
  args: {
    name: "oci_backend",
    default: "docker",
    suggestions: ["docker", "podman"],
  },
};

const jsonOption: Fig.Option = {
  name: ["-j", "--json"],
};

const debugCommandOptions: Fig.Option[] = [
  ociBackendOption,
  jsonOption,
  help(),
];

const completion: Fig.Spec = {
  name: "cicada",
  description: "Write CI/CD Pipelines in TypeScript",
  subcommands: [
    {
      name: "run",
      description: "Run a cicada pipeline",
      options: [
        {
          name: ["-s", "--secret"],
          description:
            "Name of the secret to use, these come from environment variables",
          isRepeatable: true,
          args: {
            name: "secret",
          },
        },
        {
          name: "--dotenv",
          description: "Load a custom .env file",
          args: {
            name: "dotenv",
            template: "filepaths",
          },
        },
        {
          name: "--secrets-json",
          description: "Load secrets from a json file",
          args: {
            name: "secrets_json",
            template: "filepaths",
          },
        },
        {
          name: "--cicada-dockerfile",
          description: "A custom dockerfile to load the cicada bin from",
          hidden: true,
          args: {
            name: "cicada_dockerfile",
            template: "filepaths",
          },
        },
        ociBackendOption,
        {
          name: "--no-dotenv",
          description: "Do not load .env file",
        },
        {
          name: "--no-cache",
          description: "Disable caching",
        },
        {
          name: "--gh-action-cache",
          description: "Enable gh action caching",
          hidden: true,
        },
        {
          name: "--platform",
          description: "Sets the default platform to use",
          args: {
            name: "platform",
            default: "linux/amd64",
            suggestions: ["linux/amd64", "linux/arm64"],
          },
        },
        help("Print help (see more with '--help')"),
      ],
      args: {
        name: "pipeline",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "step",
      description: "Run a step in a cicada workflow",
      hidden: true,
      options: [help()],
      args: [
        {
          name: "workflow",
        },
        {
          name: "step",
        },
      ],
    },
    {
      name: "init",
      description:
        "Initialize a cicada project, you can optionally specify a pipeline to create",
      options: [help()],
      args: {
        name: "pipeline",
        isOptional: true,
      },
    },
    {
      name: "new",
      description: "Create a cicada pipeline",
      options: [help()],
      args: {
        name: "pipeline",
      },
    },
    {
      name: "update",
      description: "Update cicada",
      options: [help()],
    },
    {
      name: "completions",
      description: "List all available completions",
      options: [help()],
      args: {
        name: "shell",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
    },
    {
      name: "open",
      description: "Open a pipeline in your editor",
      options: [help()],
      args: {
        name: "pipeline",
        template: "filepaths",
      },
    },
    {
      name: "doctor",
      description: "Check for common issues",
      hidden: true,
      options: [ociBackendOption, help()],
    },
    {
      name: "debug",
      description: "Debug commands",
      hidden: true,
      subcommands: [
        {
          name: "daemon-info",
          options: debugCommandOptions,
        },
        {
          name: ["disk-usage", "du"],
          options: debugCommandOptions,
        },
        {
          name: "workers",
          options: debugCommandOptions,
        },
        {
          name: "help",
          description: helpSubcommandDescription,
          subcommands: [
            {
              name: "daemon-info",
            },
            {
              name: "disk-usage",
            },
            {
              name: "workers",
            },
            {
              name: "help",
              description: helpSubcommandDescription,
            },
          ],
        },
      ],
      options: [help()],
    },
    {
      name: "help",
      description: helpSubcommandDescription,
      subcommands: [
        {
          name: "run",
          description: "Run a cicada pipeline",
        },
        {
          name: "step",
          description: "Run a step in a cicada workflow",
          hidden: true,
        },
        {
          name: "init",
          description:
            "Initialize a cicada project, you can optionally specify a pipeline to create",
        },
        {
          name: "new",
          description: "Create a cicada pipeline",
        },
        {
          name: "update",
          description: "Update cicada",
        },
        {
          name: "completions",
          description: "List all available completions",
        },
        {
          name: "open",
          description: "Open a pipeline in your editor",
        },
        {
          name: "doctor",
          description: "Check for common issues",
          hidden: true,
        },
        {
          name: "debug",
          description: "Debug commands",
          hidden: true,
          subcommands: [
            {
              name: "daemon-info",
            },
            {
              name: "disk-usage",
            },
            {
              name: "workers",
            },
          ],
        },
        {
          name: "help",
          description: helpSubcommandDescription,
        },
      ],
    },
  ],
  options: [
    help(),
    { name: ["-V", "--version"], description: "Print version" },
  ],
};

export default completion;
