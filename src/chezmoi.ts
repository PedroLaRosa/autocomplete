// chezmoi v2.74.1 (GitHub tag twpayne/chezmoi, 2026-11-19). Source: static read of the cobra command definitions
// (internal/cmd/*cmd.go, internal/cmd/config.go) and docs (assets/chezmoi.io/docs/reference) at tag v2.74.1; binary not run.
// Flag details follow the Go code where the docs disagree (e.g. -W for --working-tree, --config-format json|toml|yaml).
import { valueList } from "@tabsmith/autocomplete-generators";

const modifiers: Fig.Suggestion[] = [
  { name: ["after", "a"], description: "Attribute modifier" },
  { name: ["before", "b"], description: "Attribute modifier" },
  { name: ["empty", "e"], description: "Attribute modifier" },
  { name: "encrypted", description: "Attribute modifier" },
  { name: "exact", description: "Attribute modifier" },
  { name: ["executable", "x"], description: "Attribute modifier" },
  { name: "external", description: "Attribute modifier" },
  { name: ["once", "o"], description: "Attribute modifier" },
  { name: "onchange", description: "Attribute modifier" },
  { name: ["private", "p"], description: "Attribute modifier" },
  { name: ["readonly", "r"], description: "Attribute modifier" },
  { name: "remove", description: "Attribute modifier" },
  { name: ["template", "t"], description: "Attribute modifier" },
  { name: "create", description: "Type modifier" },
  { name: "modify", description: "Type modifier" },
  { name: "script", description: "Type modifier" },
  { name: "symlink", description: "Type modifier" },
];

const plusMinusModifiers = ["+", "-"].flatMap((prefix) =>
  modifiers.map((s) => ({
    ...s,
    name:
      typeof s.name === "string"
        ? `${prefix}${s.name}`
        : s.name.map((name) => `${prefix}${name}`),
  }))
);

const noModifiers = modifiers.map((s) => ({
  ...s,
  name:
    typeof s.name === "string"
      ? `no${s.name}`
      : s.name.map((name) => `no${name}`),
}));

const entryTypeNames = [
  "always",
  "dirs",
  "encrypted",
  "externals",
  "files",
  "remove",
  "scripts",
  "symlinks",
  "templates",
];

// Entry types can be negated by prefixing them with "no", e.g. "scripts,noalways"
const types = valueList({
  values: [
    "all",
    "none",
    ...entryTypeNames,
    ...entryTypeNames.map((name) => `no${name}`),
  ],
  insertDelimiter: true,
});

const packageManagers = [
  "apk",
  "apt-get",
  "brew",
  "dnf",
  "nix-env",
  "pacman",
  "port",
  "pkg",
  "rpm",
  "snap",
  "xbps-install",
  "zypper",
];

// TODO(SeparateRecords): Eventually replace all args that mention
// "target state" with a generator (chezmoi list) instead of template

const optionalTargets: Fig.Arg = {
  name: "target",
  template: ["filepaths", "folders"],
  isVariadic: true,
  isOptional: true,
};

const requiredTargets: Fig.Arg = {
  name: "target",
  template: ["filepaths", "folders"],
  isVariadic: true,
};

const optionalFiles: Fig.Arg = {
  name: "file",
  template: "filepaths",
  isVariadic: true,
  isOptional: true,
};

const excludeOption: Fig.Option = {
  name: ["--exclude", "-x"],
  description: "Exclude entry types",
  args: { name: "exclude", default: "none", generators: types },
};

const includeOption: Fig.Option = {
  name: ["--include", "-i"],
  description: "Include entry types",
  args: { name: "include", default: "all", generators: types },
};

const initOption: Fig.Option = {
  name: "--init",
  description: "Recreate config file from template",
};

const recursiveOption: Fig.Option = {
  name: ["--recursive", "-r"],
  description: "Recurse into subdirectories",
};

const parentDirsOption = (description: string): Fig.Option => ({
  name: ["--parent-dirs", "-P"],
  description,
});

const nulPathSeparatorOption: Fig.Option = {
  name: ["--nul-path-separator", "-0"],
  description: "Use the NUL character as a path separator",
};

const treeOption: Fig.Option = {
  name: ["--tree", "-t"],
  description: "Print paths as a tree",
};

const formatOption: Fig.Option = {
  name: ["--format", "-f"],
  description: "Output format",
  args: { name: "format", default: "json", suggestions: ["json", "yaml"] },
};

const pathStyleOption = (suggestions: string[]): Fig.Option => ({
  name: ["--path-style", "-p"],
  description: "Path style",
  args: { name: "path-style", default: "relative", suggestions },
});

const packageManagerOption: Fig.Option = {
  name: ["--package-manager", "-p"],
  description: "Package manager",
  args: { name: "package-manager", suggestions: packageManagers },
};

const shellOption: Fig.Option = {
  name: ["--shell", "-s"],
  description: "Execute shell afterwards",
};

const pairsOption = (
  name: string,
  description: string,
  shorthand?: string
): Fig.Option => ({
  name: shorthand ? [`--${name}`, shorthand] : `--${name}`,
  description,
  isRepeatable: true,
  args: { name: "pairs" },
});

const ageRecipientOptions: Fig.Option[] = [
  {
    name: "--age-recipient",
    description: "Override age recipient",
    args: { name: "age-recipient" },
  },
  {
    name: "--age-recipient-file",
    description: "Override age recipient with a recipient file",
    args: { name: "age-recipient-file", template: "filepaths" },
  },
];

const autoBoolOption = (
  name: string,
  description: string,
  suggestions: string[]
): Fig.Option => ({
  name,
  description,
  args: {
    name: name.slice(2),
    default: "auto",
    suggestions,
  },
});

const globalOptions: Fig.Option[] = [
  ...ageRecipientOptions,
  {
    name: "--cache",
    description: "Set cache directory",
    args: { name: "cache", default: "~/.cache/chezmoi", template: "folders" },
  },
  autoBoolOption("--color", "Colorize output", [
    "auto",
    "on",
    "off",
    "true",
    "false",
  ]),
  {
    name: ["--config", "-c"],
    description: "Set config file",
    args: {
      name: "config",
      default: "~/.config/chezmoi/chezmoi.toml",
      template: "filepaths",
    },
  },
  {
    name: "--config-format",
    description: "Set config file format",
    args: { name: "config-format", suggestions: ["json", "toml", "yaml"] },
  },
  {
    name: "--debug",
    description: "Include debug information in output",
  },
  {
    name: ["--destination", "-D"],
    description: "Set destination directory",
    args: { name: "destination", default: "~", template: "folders" },
  },
  {
    name: ["--dry-run", "-n"],
    description: "Do not make any modifications to the destination directory",
  },
  {
    name: "--error-on-conflict",
    description: "Exit with an error, rather than prompting, on any conflict",
  },
  { name: "--force", description: "Make all changes without prompting" },
  { name: "--interactive", description: "Prompt for all changes" },
  {
    name: ["--keep-going", "-k"],
    description: "Keep going as far as possible after an error",
  },
  {
    name: "--less-interactive",
    description: "Prompt for changed or pre-existing targets",
  },
  {
    name: "--mode",
    description: "Mode of operation",
    args: { name: "mode", default: "file", suggestions: ["file", "symlink"] },
  },
  { name: "--no-pager", description: "Do not use the pager" },
  {
    name: "--no-tty",
    description: "Do not attempt to get a TTY for prompts",
  },
  {
    name: ["--output", "-o"],
    description: "Write output to path instead of stdout",
    args: { name: "output", template: "filepaths" },
  },
  {
    name: "--override-data",
    description: "Override template data with JSON data",
    args: { name: "json-data" },
  },
  {
    name: "--override-data-file",
    description: "Override template data with JSON data read from a file",
    args: { name: "override-data-file", template: "filepaths" },
  },
  {
    name: "--persistent-state",
    description: "Set persistent state file",
    args: { name: "persistent-state", template: "filepaths" },
  },
  autoBoolOption("--progress", "Display progress bars", [
    "auto",
    "on",
    "off",
    "true",
    "false",
  ]),
  {
    name: ["--refresh-externals", "-R"],
    description: "Refresh external cache",
    requiresSeparator: true,
    args: {
      name: "refresh-externals",
      isOptional: true,
      suggestions: ["always", "auto", "never"],
    },
  },
  {
    name: "--safe",
    description: "Safely replace files and symlinks",
    hidden: true,
  },
  {
    name: "--skip-secrets",
    description: "Skip all templates containing secrets",
  },
  {
    name: ["--source", "-S"],
    description: "Set source directory",
    args: {
      name: "source",
      default: "~/.local/share/chezmoi",
      template: "folders",
    },
  },
  {
    name: "--source-path",
    description: "Specify targets by source path",
  },
  autoBoolOption("--use-builtin-age", "Use builtin age", [
    "auto",
    "on",
    "off",
    "true",
    "false",
  ]),
  { name: "--use-builtin-diff", description: "Use builtin diff" },
  autoBoolOption("--use-builtin-git", "Use builtin git", [
    "auto",
    "on",
    "off",
    "true",
    "false",
  ]),
  { name: ["--verbose", "-v"], description: "Make output more verbose" },
  {
    name: ["--working-tree", "-W"],
    description: "Set working tree directory",
    args: { name: "working-tree", template: "folders" },
  },
  { name: ["--help", "-h"], description: "Display help" },
];

const bucketOption: Fig.Option = {
  name: "--bucket",
  description: "Bucket",
  args: {
    name: "bucket",
    suggestions: [
      "configState",
      "entryState",
      "gitRepoExternalState",
      "scriptState",
    ],
  },
};

const keyOption: Fig.Option = {
  name: "--key",
  description: "Key",
  args: { name: "key" },
};

const valueOption: Fig.Option = {
  name: "--value",
  description: "Value",
  args: { name: "value" },
};

const keyringOptions: Fig.Option[] = [
  {
    name: "--service",
    description: "Name of the service",
    isRequired: true,
    args: { name: "service" },
  },
  {
    name: "--user",
    description: "Name of the user",
    isRequired: true,
    args: { name: "user" },
  },
];

const subcommands: Fig.Subcommand[] = [
  {
    name: ["add", "manage"],
    description:
      "Add an existing file, directory, or symlink to the source state",
    args: {
      name: "target",
      template: ["filepaths", "folders"],
      isVariadic: true,
    },
    options: [
      {
        name: ["--autotemplate", "-a"],
        description: "Generate the template when adding files as templates",
      },
      {
        name: "--create",
        description:
          "Add files that should exist, irrespective of their contents",
      },
      { name: "--encrypt", description: "Encrypt files" },
      { name: "--exact", description: "Add directories exactly" },
      excludeOption,
      {
        name: ["--follow", "-f"],
        description: "Add symlink targets instead of symlinks",
      },
      includeOption,
      {
        name: "--new",
        description: "Create new file if target does not exist",
      },
      {
        name: ["--prompt", "-p"],
        description: "Prompt before adding each entry",
      },
      { name: ["--quiet", "-q"], description: "Suppress warnings" },
      recursiveOption,
      {
        name: "--secrets",
        description: "Scan for secrets when adding unencrypted files",
        args: {
          name: "secrets",
          default: "warning",
          suggestions: ["ignore", "warning", "error"],
        },
      },
      { name: ["--template", "-T"], description: "Add files as templates" },
      {
        name: "--template-symlinks",
        description:
          "Add symlinks with target in source or home dirs as templates",
      },
    ],
  },
  {
    name: "age",
    description: "Interact with age",
    subcommands: [
      {
        name: "decrypt",
        description: "Decrypt file or standard input",
        args: optionalFiles,
        options: [
          {
            name: ["--passphrase", "-p"],
            description: "Decrypt with a passphrase",
          },
        ],
      },
      {
        name: "encrypt",
        description: "Encrypt file or standard input",
        args: optionalFiles,
        options: [
          {
            name: ["--passphrase", "-p"],
            description: "Encrypt with a passphrase",
          },
        ],
      },
    ],
  },
  {
    name: "age-keygen",
    description:
      "Generate an age identity or convert an age identity to an age recipient",
    args: {
      name: "identity-file",
      template: "filepaths",
      isOptional: true,
    },
    options: [
      {
        name: ["--convert", "-y"],
        description: "Convert identities to recipients",
      },
      { name: "--pq", description: "Generate a post-quantum key pair" },
    ],
  },
  {
    name: "apply",
    description: "Update the destination directory to match the target state",
    args: optionalTargets,
    options: [
      excludeOption,
      includeOption,
      initOption,
      parentDirsOption("Apply all parent directories"),
      recursiveOption,
    ],
  },
  {
    name: "archive",
    description: "Generate a tar archive of the target state",
    args: optionalTargets,
    options: [
      excludeOption,
      {
        name: ["--format", "-f"],
        description: "Set archive format",
        args: {
          name: "format",
          default: "tar.gz",
          suggestions: ["tar", "tar.gz", "tgz", "zip"],
        },
      },
      { name: ["--gzip", "-z"], description: "Compress output with gzip" },
      includeOption,
      initOption,
      parentDirsOption("Archive parent directories"),
      recursiveOption,
    ],
  },
  {
    name: "cat",
    description: "Print the target contents of a file, script, or symlink",
    args: requiredTargets,
  },
  { name: "cat-config", description: "Print the configuration file" },
  {
    name: "cd",
    description: "Launch a shell in the source directory",
    args: {
      name: "path",
      template: ["filepaths", "folders"],
      isOptional: true,
    },
  },
  {
    name: "chattr",
    description: "Change the attributes of a target in the source state",
    args: [
      {
        name: "attributes/modifiers",
        generators: {
          // This generator needs to run on every keystroke to provide
          // suggestions after '+', '-', ',' and 'no'. All the suggestions
          // are precomputed to make this as fast as it can be.
          trigger: () => true,
          getQueryTerm: ",",
          custom: async (tokens) => {
            const finalToken = tokens[tokens.length - 1];
            const finalSegment = finalToken.slice(
              finalToken.lastIndexOf(",") + 1
            );
            if (finalSegment[0] === "+" || finalSegment[0] === "-") {
              return plusMinusModifiers;
            }
            if (finalSegment.startsWith("no")) {
              return noModifiers;
            }
            return modifiers;
          },
        },
      },
      requiredTargets,
    ],
    options: [recursiveOption],
  },
  {
    name: "completion",
    description: "Generate shell completion code",
    args: {
      name: "shell",
      suggestions: ["bash", "fish", "powershell", "zsh"],
    },
  },
  {
    name: "data",
    description: "Print the template data",
    options: [formatOption],
  },
  {
    name: "decrypt",
    description: "Decrypt file or standard input",
    args: optionalFiles,
  },
  {
    name: "destroy",
    description:
      "Permanently delete an entry from the source state, the destination directory, and the state",
    args: requiredTargets,
    options: [recursiveOption],
  },
  {
    name: "diff",
    description:
      "Print the diff between the target state and the destination state",
    args: optionalTargets,
    options: [
      excludeOption,
      includeOption,
      initOption,
      {
        name: "--pager",
        description: "Set pager",
        args: { name: "pager" },
      },
      parentDirsOption("Print the diff of all parent directories"),
      recursiveOption,
      {
        name: "--reverse",
        description: "Reverse the direction of the diff",
      },
      {
        name: "--script-contents",
        description: "Show script contents",
      },
    ],
  },
  {
    name: ["docker", "podman"],
    description: "Use your dotfiles in a Docker container",
    subcommands: [
      {
        name: "exec",
        description:
          "Install your dotfiles in an existing Docker container and execute a shell",
        args: [
          { name: "container-id" },
          { name: "init-args", isVariadic: true, isOptional: true },
        ],
        options: [
          {
            name: ["--interactive", "-i"],
            description: "Run interactively",
          },
          packageManagerOption,
          shellOption,
        ],
      },
      {
        name: "run",
        description:
          "Create a new Docker container with your dotfiles and execute a shell",
        args: [
          { name: "image-id" },
          { name: "init-args", isVariadic: true, isOptional: true },
        ],
        options: [packageManagerOption],
      },
    ],
  },
  {
    name: "doctor",
    description: "Check your system for potential problems",
    options: [
      {
        name: "--no-network",
        description: "Do not use network connections",
      },
    ],
  },
  {
    name: "dump",
    description: "Generate a dump of the target state",
    args: optionalTargets,
    options: [
      excludeOption,
      formatOption,
      includeOption,
      initOption,
      parentDirsOption("Dump all parent directories"),
      recursiveOption,
    ],
  },
  {
    name: "dump-config",
    description: "Dump the configuration values",
    options: [formatOption],
  },
  {
    name: "edit",
    description: "Edit the source state of a target",
    args: optionalTargets,
    options: [
      { name: ["--apply", "-a"], description: "Apply after editing" },
      excludeOption,
      {
        name: "--hardlink",
        description: "Invoke editor with a hardlink to the source file",
      },
      includeOption,
      initOption,
      { name: "--watch", description: "Apply on save" },
    ],
  },
  { name: "edit-config", description: "Edit the configuration file" },
  {
    name: "edit-config-template",
    description: "Edit the configuration file template",
  },
  {
    name: "edit-encrypted",
    description: "Edit an encrypted file",
    args: { name: "filename", template: "filepaths", isVariadic: true },
  },
  {
    name: "encrypt",
    description: "Encrypt file or standard input",
    args: optionalFiles,
  },
  {
    name: "execute-template",
    description: "Execute the given template(s)",
    args: {
      name: "template",
      template: "filepaths",
      isVariadic: true,
      isOptional: true,
    },
    options: [
      {
        name: ["--file", "-f"],
        description: "Treat arguments as filenames",
      },
      { name: ["--init", "-i"], description: "Simulate chezmoi init" },
      {
        name: "--left-delimiter",
        description: "Set left template delimiter",
        args: { name: "delimiter" },
      },
      pairsOption("promptBool", "Simulate promptBool"),
      pairsOption("promptChoice", "Simulate promptChoice"),
      pairsOption("promptInt", "Simulate promptInt"),
      pairsOption("promptMultichoice", "Simulate promptMultichoice"),
      pairsOption("promptString", "Simulate promptString", "-p"),
      {
        name: "--right-delimiter",
        description: "Set right template delimiter",
        args: { name: "delimiter" },
      },
      { name: "--stdinisatty", description: "Simulate stdinIsATTY" },
      {
        name: "--with-stdin",
        description: "Set .chezmoi.stdin to the contents of the standard input",
      },
    ],
  },
  {
    name: ["forget", "unmanage"],
    description: "Remove a target from the source state",
    args: requiredTargets,
  },
  {
    name: "generate",
    description: "Generate a file for use with chezmoi",
    subcommands: [
      {
        name: "git-commit-message",
        description: "Generate a git commit message",
      },
      { name: "install.sh", description: "Generate an install script" },
      {
        name: "install-init-shell.sh",
        description: "Generate an install script that also executes a shell",
        args: { name: "init-args", isVariadic: true },
        options: [
          { name: ["--interactive", "-i"], description: "Set interactive" },
          packageManagerOption,
          { name: ["--shell", "-s"], description: "Set shell" },
        ],
      },
    ],
  },
  {
    name: "git",
    description: "Run git in the source directory",
    loadSpec: "git",
  },
  {
    name: "ignored",
    description: "Print ignored targets",
    options: [nulPathSeparatorOption, treeOption],
  },
  {
    name: "import",
    description: "Import an archive into the source state",
    args: {
      name: "archive",
      template: "filepaths",
      isOptional: true,
    },
    options: [
      {
        name: ["--destination", "-d"],
        description: "Set destination prefix",
        args: { name: "destination", template: "folders" },
      },
      {
        name: "--exact",
        description: "Set exact_ attribute on imported directories",
      },
      excludeOption,
      includeOption,
      {
        name: ["--remove-destination", "-r"],
        description: "Remove destination before import",
      },
      {
        name: "--strip-components",
        description: "Strip leading path components",
        args: { name: "strip-components", default: "0" },
      },
    ],
  },
  {
    name: "init",
    description:
      "Setup the source directory and update the destination directory to match the target state",
    args: { name: "repo", isOptional: true },
    options: [
      {
        name: ["--apply", "-a"],
        description: "Update destination directory",
      },
      {
        name: "--branch",
        description: "Set initial branch to checkout",
        args: { name: "branch" },
      },
      {
        name: ["--config-path", "-C"],
        description: "Path to write generated config file",
        args: { name: "config-path", template: "filepaths" },
      },
      { name: "--data", description: "Include existing template data" },
      {
        name: ["--depth", "-d"],
        description: "Create a shallow clone",
        args: { name: "depth", default: "0" },
      },
      excludeOption,
      { name: ["--guess-repo-url", "-g"], description: "Guess the repo URL" },
      includeOption,
      { name: "--git-lfs", description: "Run git lfs pull after cloning" },
      { name: "--one-shot", description: "Run in one-shot mode" },
      {
        name: "--prompt",
        description: "Force prompt*Once template functions to prompt",
      },
      pairsOption("promptBool", "Populate promptBool"),
      pairsOption("promptChoice", "Populate promptChoice"),
      {
        name: "--promptDefaults",
        description: "Make prompt functions return default values",
      },
      pairsOption("promptInt", "Populate promptInt"),
      pairsOption("promptMultichoice", "Populate promptMultichoice"),
      pairsOption("promptString", "Populate promptString"),
      {
        name: ["--purge", "-p"],
        description: "Purge config and source directories after running",
      },
      {
        name: ["--purge-binary", "-P"],
        description: "Purge chezmoi binary after running",
      },
      {
        name: "--recurse-submodules",
        description: "Checkout submodules recursively",
      },
      {
        name: "--revision",
        description: "Set initial revision to checkout",
        args: { name: "revision" },
      },
      {
        name: "--ssh",
        description: "Use ssh instead of https when guessing repo URL",
      },
      {
        name: "--tag",
        description: "Set initial tag to checkout",
        args: { name: "tag" },
      },
    ],
  },
  { name: "license", description: "Print license" },
  {
    name: ["managed", "list"],
    description: "List the managed entries in the destination directory",
    args: {
      name: "path",
      template: ["filepaths", "folders"],
      isVariadic: true,
      isOptional: true,
    },
    options: [
      excludeOption,
      formatOption,
      includeOption,
      nulPathSeparatorOption,
      pathStyleOption([
        "absolute",
        "relative",
        "source-absolute",
        "source-relative",
        "all",
      ]),
      treeOption,
    ],
  },
  {
    name: "merge",
    description:
      "Perform a three-way merge between the destination state, the source state, and the target state",
    args: requiredTargets,
  },
  {
    name: "merge-all",
    description: "Perform a three-way merge for each modified file",
    options: [initOption, recursiveOption],
  },
  {
    name: "purge",
    description: "Purge chezmoi's configuration and data",
    options: [
      { name: ["--binary", "-P"], description: "Purge chezmoi binary" },
    ],
  },
  {
    name: "push",
    description: "Add, commit, and push all changes in the source state",
  },
  {
    name: "re-add",
    description: "Re-add modified files",
    args: optionalTargets,
    options: [
      excludeOption,
      includeOption,
      { name: "--re-encrypt", description: "Re-encrypt encrypted files" },
      recursiveOption,
    ],
  },
  {
    name: "secret",
    description: "Interact with a secret manager",
    subcommands: [
      {
        name: "keyring",
        description: "Interact with keyring",
        subcommands: [
          {
            name: "delete",
            description: "Delete a value from keyring",
            options: keyringOptions,
          },
          {
            name: "get",
            description: "Get a value from keyring",
            options: keyringOptions,
          },
          {
            name: "set",
            description: "Set a value in keyring",
            options: [...keyringOptions, valueOption],
          },
        ],
      },
    ],
  },
  {
    name: "source-path",
    description: "Print the source path of a target",
    args: optionalTargets,
  },
  {
    name: "ssh",
    description: "SSH to a host and initialize dotfiles",
    args: [
      { name: "host" },
      { name: "init-args", isVariadic: true, isOptional: true },
    ],
    options: [packageManagerOption, shellOption],
  },
  {
    name: "state",
    description: "Manipulate the persistent state",
    subcommands: [
      {
        name: "data",
        description: "Print the raw data in the persistent state",
        options: [formatOption],
      },
      {
        name: "delete",
        description: "Delete a value from the persistent state",
        options: [bucketOption, keyOption],
      },
      {
        name: "delete-bucket",
        description: "Delete a bucket from the persistent state",
        options: [bucketOption],
      },
      {
        name: "dump",
        description: "Generate a dump of the persistent state",
        options: [formatOption],
      },
      {
        name: "get",
        description: "Get a value from the persistent state",
        options: [bucketOption, keyOption],
      },
      {
        name: "get-bucket",
        description: "Get a bucket from the persistent state",
        options: [bucketOption, formatOption],
      },
      { name: "reset", description: "Reset the persistent state" },
      {
        name: "set",
        description: "Set a value from the persistent state",
        options: [bucketOption, keyOption, valueOption],
      },
    ],
  },
  {
    name: "status",
    description: "Show the status of targets",
    args: optionalTargets,
    options: [
      excludeOption,
      includeOption,
      initOption,
      parentDirsOption("Show status of all parent directories"),
      pathStyleOption(["absolute", "relative"]),
      recursiveOption,
    ],
  },
  {
    name: "target-path",
    description: "Print the target path of a source path",
    args: {
      name: "source-path",
      template: ["filepaths", "folders"],
      isVariadic: true,
      isOptional: true,
    },
  },
  {
    name: "unmanaged",
    description: "List the unmanaged files in the destination directory",
    args: {
      name: "path",
      template: ["filepaths", "folders"],
      isVariadic: true,
      isOptional: true,
    },
    options: [
      excludeOption,
      includeOption,
      nulPathSeparatorOption,
      pathStyleOption(["absolute", "relative"]),
      treeOption,
    ],
  },
  {
    name: "update",
    description: "Pull and apply any changes",
    options: [
      { name: ["--apply", "-a"], description: "Apply after pulling" },
      excludeOption,
      includeOption,
      initOption,
      parentDirsOption("Update all parent directories"),
      {
        name: "--recurse-submodules",
        description: "Recursively update submodules",
      },
      recursiveOption,
    ],
  },
  {
    name: "upgrade",
    description: "Upgrade chezmoi to the latest released version",
    options: [
      {
        name: "--executable",
        description: "Set executable to replace",
        args: { name: "executable", template: "filepaths" },
      },
      {
        name: "--method",
        description: "Set upgrade method",
        args: {
          name: "method",
          suggestions: [
            "brew-upgrade",
            "replace-executable",
            "snap-refresh",
            "sudo-upgrade-package",
            "upgrade-package",
          ],
        },
      },
    ],
  },
  {
    name: "verify",
    description:
      "Exit with success if the destination state matches the target state, fail otherwise",
    args: optionalTargets,
    options: [
      excludeOption,
      includeOption,
      initOption,
      parentDirsOption("Verify all parent directories"),
      recursiveOption,
    ],
  },
];

// "chezmoi help <command>" accepts the same command tree, without arguments or options
const toHelpSubcommand = (subcommand: Fig.Subcommand): Fig.Subcommand => ({
  name: subcommand.name,
  description: subcommand.description,
  ...(subcommand.subcommands && {
    subcommands: subcommand.subcommands.map(toHelpSubcommand),
  }),
});

const completionSpec: Fig.Spec = {
  name: "chezmoi",
  description:
    "Manage your dotfiles across multiple diverse machines, securely",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "Print help about a command",
      subcommands: subcommands.map(toHelpSubcommand),
    },
  ],
  options: [
    { name: "--version", description: "Print the version of chezmoi" },
    ...globalOptions.map((option): Fig.Option => ({
      ...option,
      isPersistent: true,
    })),
  ],
};
export default completionSpec;
