// rustup v1.29.3 (GitHub tag rust-lang/rustup, 2026-11-19). Source: clap definitions in
// src/cli/rustup_mode.rs, src/cli/docs.rs and src/cli/help.rs at that tag

type ToolchainLocalGeneratorOptions = {
  excludeShort?: boolean;
};

// A generator of local toolchains including the short names
const toolchainLocalGenertor: (
  args?: ToolchainLocalGeneratorOptions
) => Fig.Generator = ({ excludeShort } = {}) => ({
  script: ["rustup", "toolchain", "list"],
  postProcess: (out) => {
    const toolchains = out
      .split("\n")
      .map((toolchain) => toolchain.split(" ")[0]);

    let shortToolchains = [];
    if (!excludeShort) {
      shortToolchains = toolchains.map((toolchain) => toolchain.split("-")[0]);
      // dedupe
      shortToolchains = shortToolchains.filter(
        (toolchain, index) => shortToolchains.indexOf(toolchain) === index
      );
    }

    return shortToolchains.concat(toolchains).map((name) => ({
      name,
    }));
  },
});

const toolchainAllGenerator: Fig.Generator = {
  // Grab the latest versions of rust from github, try the gh cli first as it has a higher rate limit
  script: [
    "bash",
    "-c",
    'if command -v gh > /dev/null; then \
      gh api -H "Accept: application/vnd.github+json" /repos/rust-lang/rust/releases; \
    else \
      curl -sfL -H "Accept: application/vnd.github+json" https://api.github.com/repos/rust-lang/rust/releases; \
    fi',
  ],
  cache: {
    // 1 hour, the github api is rate limited per hour
    ttl: 60 * 60 * 1000,
  },
  postProcess: (out) => {
    if (out === "") return [];

    const releases = JSON.parse(out) as {
      tag_name: string;
      name: string;
      published_at: string;
    }[];

    return [
      {
        name: "stable",
      },
      {
        name: "beta",
      },
      {
        name: "nightly",
      },
      ...releases.map((release) => ({
        name: release.tag_name,
        description: `${release.name} - ${new Date(
          release.published_at
        ).toLocaleDateString()}`,
      })),
    ];
  },
};

type TripleGeneratorOptions = {
  installed?: boolean;
};

const tripleGenerator: (args?: TripleGeneratorOptions) => Fig.Generator = ({
  installed,
} = {}) => ({
  script: ["rustup", "target", "list"],
  postProcess: (data: string) => {
    return data
      .split("\n")
      .map((line) => line.split(" "))
      .filter((line) => (installed ? line.includes("(installed)") : true))
      .map((line) => ({
        name: line[0],
      }));
  },
});

const officialToolchainDescription =
  "Toolchain name, such as 'stable', 'nightly', or '1.8.0'. For more information see `rustup help toolchain`";
const resolvableToolchainDescription =
  "Toolchain name, such as 'stable', 'nightly', '1.8.0', or a custom toolchain name. For more information see `rustup help toolchain`";

const helpSubcommand: Fig.Subcommand = {
  name: "help",
  description: "Print this message or the help of the given subcommand(s)",
  args: {
    name: "subcommand",
    isVariadic: true,
    isOptional: true,
  },
};

const toolchainOption: Fig.Option = {
  name: "--toolchain",
  description: officialToolchainDescription,
  args: {
    name: "toolchain",
    generators: toolchainLocalGenertor(),
  },
};

const listOptions = (kind: string): Fig.Option[] => [
  toolchainOption,
  {
    name: "--installed",
    description: `List only installed ${kind}`,
  },
  {
    name: ["-q", "--quiet"],
    description: "Force the output to be a single column",
  },
];

const profileSuggestions = ["minimal", "default", "complete"];

const forceNonHostOption: Fig.Option = {
  name: "--force-non-host",
  description:
    "Install toolchains that require an emulator. See https://github.com/rust-lang/rustup/wiki/Non-host-toolchains",
};

const forceOption: Fig.Option = {
  name: "--force",
  description: "Force an update, even if some components are missing",
};

// `rustup install` and `rustup toolchain install` share these
const installCommand = (aliases: string[]): Fig.Subcommand => ({
  name: ["install", ...aliases],
  description:
    "Install or update the given toolchains, or by default the active toolchain",
  args: {
    name: "toolchain",
    description: officialToolchainDescription,
    generators: toolchainAllGenerator,
    isVariadic: true,
    isOptional: true,
  },
  options: [
    {
      name: "--profile",
      args: {
        name: "profile",
        suggestions: profileSuggestions,
      },
    },
    {
      name: ["-c", "--component"],
      description:
        "Comma-separated list of components to be added on installation",
      isRepeatable: true,
      args: {
        name: "component",
      },
    },
    {
      name: ["-t", "--target"],
      description:
        "Comma-separated list of targets to be added on installation",
      isRepeatable: true,
      args: {
        name: "target",
        generators: tripleGenerator(),
      },
    },
    {
      name: "--no-self-update",
      description:
        "Don't perform self update when running the `rustup toolchain install` command",
    },
    {
      name: "--no-update",
      description: "Don't try to update the installed toolchain",
    },
    forceOption,
    {
      name: "--allow-downgrade",
      description:
        "Allow rustup to downgrade the toolchain to satisfy your component choice",
    },
    forceNonHostOption,
    {
      name: "--override",
      description:
        "Set the installed toolchain as the override for the current directory",
    },
    {
      name: "--default",
      description: "Set the installed toolchain as the default toolchain",
    },
  ],
});

const removeAliases = ["remove", "rm", "delete", "del"];

const uninstallCommand: Fig.Subcommand = {
  name: ["uninstall", ...removeAliases],
  description: "Uninstall the given toolchains",
  args: {
    name: "toolchain",
    description: resolvableToolchainDescription,
    generators: toolchainLocalGenertor({ excludeShort: true }),
    isVariadic: true,
  },
};

const pathOption: Fig.Option = {
  name: "--path",
  description: "Path to the directory",
  args: {
    name: "path",
    template: "folders",
  },
};

const docPages: [string, string][] = [
  ["--alloc", "The Rust core allocation and collections library"],
  ["--book", "The Rust Programming Language book"],
  ["--cargo", "The Cargo Book"],
  ["--clippy", "The Clippy Documentation"],
  ["--core", "The Rust Core Library"],
  ["--edition-guide", "The Rust Edition Guide"],
  ["--embedded-book", "The Embedded Rust Book"],
  ["--error-codes", "The Rust Error Codes Index"],
  ["--nomicon", "The Dark Arts of Advanced and Unsafe Rust Programming"],
  [
    "--proc_macro",
    "A support library for macro authors when defining new macros",
  ],
  ["--reference", "The Rust Reference"],
  ["--releases", "Rust Release Notes"],
  [
    "--rust-by-example",
    "A collection of runnable examples that illustrate various Rust concepts and standard libraries",
  ],
  ["--rustc", "The compiler for the Rust programming language"],
  [
    "--rustc-docs",
    "The API documentation for the Rust compiler and other toolchain components",
  ],
  ["--rustdoc", "Documentation generator for Rust projects"],
  ["--std", "Standard library API documentation"],
  ["--style-guide", "The Rust Style Guide"],
  [
    "--test",
    "Support code for rustc's built in unit-test and micro-benchmarking framework",
  ],
  ["--unstable-book", "The Unstable Book"],
];

const completionSpec: Fig.Spec = {
  name: "rustup",
  description: "The Rust toolchain installer",
  subcommands: [
    installCommand(["add"]),
    uninstallCommand,
    {
      name: "toolchain",
      description: "Install, uninstall, or list toolchains",
      subcommands: [
        {
          name: "list",
          description: "List installed toolchains",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Enable verbose output with toolchain information",
              exclusiveOn: ["-q", "--quiet"],
            },
            {
              name: ["-q", "--quiet"],
              description: "Force the output to be a single column",
              exclusiveOn: ["-v", "--verbose"],
            },
          ],
        },
        installCommand(["update", "up", "add"]),
        uninstallCommand,
        {
          name: "link",
          description: "Create a custom toolchain by symlinking to a directory",
          args: [
            {
              name: "toolchain",
              description: "Custom toolchain name",
            },
            {
              name: "path",
              description: "Path to the directory",
              template: "folders",
            },
          ],
        },
        helpSubcommand,
      ],
    },
    {
      name: "default",
      description: "Set the default toolchain",
      options: [forceNonHostOption],
      args: {
        name: "toolchain",
        description:
          "'none', a toolchain name, such as 'stable', 'nightly', '1.8.0', or a custom toolchain name. For more information see `rustup help toolchain`",
        generators: toolchainLocalGenertor(),
        suggestions: ["none"],
        isOptional: true,
      },
    },
    {
      name: "show",
      description: "Show the active and installed toolchains or profiles",
      options: [
        {
          name: ["-v", "--verbose"],
          description:
            "Enable verbose output with rustc information for all installed toolchains",
        },
      ],
      subcommands: [
        {
          name: "active-toolchain",
          description: "Show the active toolchain",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Enable verbose output with rustc information",
            },
          ],
        },
        {
          name: "home",
          description: "Display the computed value of RUSTUP_HOME",
        },
        {
          name: "profile",
          description:
            "Show the default profile used for the `rustup install` command",
        },
        helpSubcommand,
      ],
    },
    {
      name: ["update", "upgrade", "up"],
      description: "Update Rust toolchains and rustup",
      options: [
        {
          name: "--no-self-update",
          description:
            "Don't perform self update when running the `rustup update` command",
        },
        forceOption,
        forceNonHostOption,
      ],
      args: {
        name: "toolchain",
        description: officialToolchainDescription,
        generators: toolchainLocalGenertor(),
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "check",
      description: "Check for updates to Rust toolchains and rustup",
      options: [
        {
          name: "--no-self-update",
          description:
            "Don't check for self update when running the `rustup check` command",
        },
      ],
    },
    {
      name: "target",
      description: "Modify a toolchain's supported targets",
      subcommands: [
        {
          name: "list",
          description: "List installed and available targets",
          options: listOptions("targets"),
        },
        {
          name: ["add", "install"],
          description: "Add a target to a Rust toolchain",
          options: [toolchainOption],
          args: {
            name: "target",
            description:
              'List of targets to install; "all" installs all available targets',
            generators: tripleGenerator(),
            suggestions: ["all"],
            isVariadic: true,
          },
        },
        {
          name: ["remove", "uninstall", "rm", "delete", "del"],
          description: "Remove a target from a Rust toolchain",
          options: [toolchainOption],
          args: {
            name: "target",
            description: "List of targets to uninstall",
            generators: tripleGenerator({ installed: true }),
            isVariadic: true,
          },
        },
        helpSubcommand,
      ],
    },
    {
      name: "component",
      description: "Modify a toolchain's installed components",
      subcommands: [
        {
          name: "list",
          description: "List installed and available components",
          options: listOptions("components"),
        },
        {
          name: "add",
          description: "Add a component to a Rust toolchain",
          options: [
            toolchainOption,
            {
              name: "--target",
              args: {
                name: "target",
                generators: tripleGenerator(),
              },
            },
          ],
          args: {
            name: "component",
            isVariadic: true,
          },
        },
        {
          name: ["remove", "uninstall", "rm", "delete", "del"],
          description: "Remove a component from a Rust toolchain",
          options: [
            toolchainOption,
            {
              name: "--target",
              args: {
                name: "target",
                generators: tripleGenerator({ installed: true }),
              },
            },
          ],
          args: {
            name: "component",
            isVariadic: true,
          },
        },
        helpSubcommand,
      ],
    },
    {
      name: "override",
      description: "Modify toolchain overrides for directories",
      subcommands: [
        {
          name: "list",
          description: "List directory toolchain overrides",
        },
        {
          name: ["set", "add"],
          description: "Set the override toolchain for a directory",
          options: [pathOption],
          args: {
            name: "toolchain",
            description: resolvableToolchainDescription,
            generators: toolchainLocalGenertor(),
          },
        },
        {
          name: ["unset", ...removeAliases],
          description: "Remove the override toolchain for a directory",
          options: [
            pathOption,
            {
              name: "--nonexistent",
              description:
                "Remove override toolchain for all nonexistent directories",
            },
          ],
        },
        helpSubcommand,
      ],
    },
    {
      name: "run",
      description:
        "Run a command with an environment configured for a given toolchain",
      options: [
        {
          name: "--install",
          description: "Install the requested toolchain if needed",
        },
      ],
      args: [
        {
          name: "toolchain",
          description:
            "Toolchain name, such as 'stable', 'nightly', '1.8.0', or a custom toolchain name, or an absolute path. For more information see `rustup help toolchain`",
          generators: toolchainLocalGenertor(),
        },
        {
          name: "command",
          isVariadic: true,
          isCommand: true,
        },
      ],
    },
    {
      name: "which",
      description: "Display which binary will be run for a given command",
      options: [
        {
          ...toolchainOption,
          description: resolvableToolchainDescription,
        },
      ],
      args: {
        name: "command",
      },
    },
    {
      name: ["doc", "docs"],
      description: "Open the documentation for the current toolchain",
      options: [
        {
          name: "--path",
          description: "Only print the path to the documentation",
          exclusiveOn: ["--serve"],
        },
        {
          name: "--serve",
          description:
            "Serve the documentation over a local HTTP server instead of opening it directly as a `file://` URL",
          exclusiveOn: ["--path"],
        },
        toolchainOption,
        ...docPages.map(([name, description]): Fig.Option => ({
          name,
          description,
        })),
      ],
      args: {
        name: "topic",
        description:
          "Topic such as 'core', 'fn', 'usize', 'eprintln!', 'core::arch', 'alloc::format!', 'std::fs', 'std::fs::read_dir', 'std::io::Bytes', 'std::iter::Sum', 'std::io::error::Result' etc",
        isOptional: true,
        generators: {
          script: [
            "bash",
            "-c",
            `find $(rustup docs --path | sed -e "s|index\\.html|std|") $(rustup docs --path | sed -e "s|index\\.html|alloc|") $(rustup docs --path | sed -e "s|index\\.html|core|") | grep "\\.html" | sed -E -e "s|^(.*)/html/||" -e "s|\\.html||" -e "s|/|::|g" -e "s/constant\\.|trait\\.|struct\\.|macro\\.|fn\\.|keyword\\.|primitive\\.|type\\.|enum\\.|union\\.|traitalias\\.|::index$|^(.*)::all$//" -e "/^$/d"`,
          ],
          splitOn: "\n",
        },
      },
    },
    {
      name: "man",
      description: "View the man page for a given command",
      options: [toolchainOption],
      args: {
        name: "command",
      },
    },
    {
      name: "self",
      description: "Modify the rustup installation",
      subcommands: [
        {
          name: ["update", "up"],
          description: "Download and install updates to rustup",
        },
        {
          name: "uninstall",
          description: "Uninstall rustup",
          options: [
            {
              name: ["-y", "--yes"],
              description: "Disable confirmation prompt",
            },
            {
              name: "--no-modify-path",
              description: "Do not clean up the `PATH` environment variable",
            },
          ],
        },
        {
          name: "upgrade-data",
          description: "Upgrade the internal data format",
        },
        helpSubcommand,
      ],
    },
    {
      name: "set",
      description: "Alter rustup settings",
      subcommands: [
        {
          name: "default-host",
          description:
            "The tuple used to identify toolchains when not specified",
          args: {
            name: "host_tuple",
            generators: tripleGenerator(),
          },
        },
        {
          name: "profile",
          description: "The default components installed with a toolchain",
          args: {
            name: "profile_name",
            default: "default",
            isOptional: true,
            suggestions: profileSuggestions,
          },
        },
        {
          name: "auto-self-update",
          description: "The rustup auto self update mode",
          args: {
            name: "auto_self_update_mode",
            default: "enable",
            isOptional: true,
            suggestions: ["enable", "disable", "check-only"],
          },
        },
        {
          name: "auto-install",
          description: "The auto toolchain install mode",
          args: {
            name: "auto_install_mode",
            default: "enable",
            isOptional: true,
            suggestions: ["enable", "disable"],
          },
        },
        helpSubcommand,
      ],
    },
    {
      name: "completions",
      description: "Generate tab-completion scripts for your shell",
      args: [
        {
          name: "shell",
          suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
        },
        {
          name: "command",
          default: "rustup",
          isOptional: true,
          suggestions: ["rustup", "cargo"],
        },
      ],
    },
    helpSubcommand,
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
    {
      name: ["-v", "--verbose"],
      description: "Set log level to 'DEBUG' if 'RUSTUP_LOG' is unset",
      exclusiveOn: ["-q", "--quiet"],
    },
    {
      name: ["-q", "--quiet"],
      description:
        "Disable progress output, set log level to 'WARN' if 'RUSTUP_LOG' is unset",
      exclusiveOn: ["-v", "--verbose"],
    },
  ],
  args: {
    name: "+toolchain",
    description:
      "Release channel (e.g. +stable) or custom toolchain to set override",
    isOptional: true,
  },
  generateSpec: async (_tokens, executeShellCommand) => {
    const { stdout: toolchainOutput } = await executeShellCommand({
      command: "rustup",
      args: ["toolchain", "list"],
    });
    const toolchains: Fig.Option[] = toolchainOutput
      .split("\n")
      .map((toolchain) => {
        return {
          icon: "🧰",
          name: `+${toolchain.split("-")[0]}`,
          description: toolchain,
        };
      });

    return {
      name: "cargo",
      options: toolchains,
    };
  },
};

export default completionSpec;
