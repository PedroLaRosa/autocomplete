// Pijul v1.0.0-beta.26 (latest release on crates.io, 2026-11-19). Source: clap definitions in src/main.rs and src/commands/*.rs
// of the published pijul-1.0.0-beta.26 crate, read statically (the binary was not run).
// Hidden upstream: protocol, docgen, debug (no help text), the deprecated diff --json alias and the --salt/--stats flags.

const channelGenerator: Fig.Generator = {
  script: ["pijul", "channel"],
  postProcess: (out) =>
    out
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => ({
        name: line.slice(2).trim(),
        description: line.startsWith("*") ? "Current channel" : "Channel",
        icon: "fig://icon?type=git",
      })),
};

const repositoryOption: Fig.Option = {
  name: "--repository",
  description:
    "Work with the repository at PATH instead of the one containing the current directory",
  args: {
    name: "PATH",
    template: "folders",
  },
};

const channelOption: Fig.Option = {
  name: "--channel",
  description: "Work with CHANNEL instead of the current channel",
  args: {
    name: "CHANNEL",
    generators: channelGenerator,
  },
};

const noCertCheckOption: Fig.Option = {
  name: "-k",
  description:
    "Do not check certificates (HTTPS remotes only, this option might be dangerous)",
};

const saltOption: Fig.Option = {
  name: "--salt",
  hidden: true,
  args: {
    name: "SALT",
  },
};

const outputFormatOption = (description: string): Fig.Option => ({
  name: "--output-format",
  description,
  args: {
    name: "OUTPUT_FORMAT",
    suggestions: ["plaintext", "json"],
  },
});

const algorithmOption: Fig.Option = {
  name: "--algorithm",
  description: "Diff algorithm to use (default: myers)",
  args: {
    name: "ALGORITHM",
    suggestions: ["patience", "histogram"],
  },
};

const pathsOption = (description: string): Fig.Option => ({
  name: "--path",
  description,
  isRepeatable: true,
  args: {
    name: "PATH",
    template: "filepaths",
  },
});

const forceSubRootOption = (
  subject: string,
  exclusiveOn?: string[]
): Fig.Option => ({
  name: "--force",
  description: `Allow ${subject} to span more than one sub-root (imported project) instead of erroring. The change will not commute across projects`,
  exclusiveOn,
});

// Options shared by the commands that write a new change (record, squash)
const headerOptions: Fig.Option[] = [
  {
    name: "--author",
    description: "Set the author field",
    args: {
      name: "AUTHOR",
    },
  },
  {
    name: "--description",
    description: "Set the description field",
    args: {
      name: "DESCRIPTION",
    },
  },
  {
    name: "--identity",
    description: "Identity to sign changes with",
    args: {
      name: "IDENTITY",
    },
  },
  {
    name: ["-m", "--message"],
    description: "Set the change message",
    args: {
      name: "MESSAGE",
    },
  },
  {
    name: "--timestamp",
    description: "Set the timestamp field",
    args: {
      name: "TIMESTAMP",
    },
  },
];

// Options of the identity `new` and `edit` subcommands
const identityDataOptions: Fig.Option[] = [
  {
    name: "--display-name",
    description: "Set the display name",
    args: {
      name: "DISPLAY_NAME",
    },
  },
  {
    name: "--email",
    description: "Set the email",
    args: {
      name: "EMAIL",
    },
  },
  {
    name: "--expiry",
    description: "Set the expiry",
    args: {
      name: "EXPIRY",
    },
  },
  {
    name: "--no-link",
    description: "Do not automatically link keys with the remote",
  },
  {
    name: "--remote",
    description: "Set the default remote",
    args: {
      name: "REMOTE",
    },
  },
  {
    name: "--username",
    description: "Set the username",
    args: {
      name: "USERNAME",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "pijul",
  description:
    "A distributed version control system that is at the same time theoretically sound, fast and easy to learn and use",
  subcommands: [
    {
      name: "add",
      description: "Adds a path to the tree",
      args: {
        name: "PATHS",
        description: "Paths to add to the internal tree",
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["-f", "--force"],
        },
        {
          name: ["-r", "--recursive"],
        },
        repositoryOption,
        saltOption,
      ],
    },
    {
      name: "apply",
      description: "Applies changes to a channel",
      args: {
        name: "CHANGE",
        description:
          "The change that need to be applied. If this value is missing, read the change in text format on the standard input",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        channelOption,
        {
          name: "--deps-only",
          description:
            "Only apply the dependencies of the change, not the change itself. Only applicable for a single change",
        },
        repositoryOption,
      ],
    },
    {
      name: "archive",
      description: "Creates an archive of the repository",
      options: [
        {
          name: "--change",
          description: "Apply these changes after switching to the channel",
          isRepeatable: true,
          args: {
            name: "CHANGE",
          },
        },
        channelOption,
        noCertCheckOption,
        {
          name: "-o",
          description: "Name of the output file",
          isRequired: true,
          args: {
            name: "NAME",
            template: "filepaths",
          },
        },
        {
          name: "--prefix",
          description:
            "Append this path in front of each path inside the archive",
          args: {
            name: "PREFIX",
          },
        },
        {
          name: "--remote",
          description: "Ask the remote to send an archive",
          args: {
            name: "REMOTE",
          },
        },
        repositoryOption,
        {
          name: "--state",
          description: "Archive in this state",
          args: {
            name: "STATE",
          },
        },
        {
          name: "--umask",
          description:
            "Umask applied to the archived files, as an octal number with a 0o prefix (default: 0o022)",
          args: {
            name: "UMASK",
          },
        },
      ],
    },
    {
      name: "change",
      description: "Shows information about a particular change",
      args: {
        name: "HASH",
        description:
          "The hash of the change to show, or an unambiguous prefix thereof",
        isOptional: true,
      },
      options: [
        {
          name: "--context",
          description:
            "Show the change inlined in the full context of each file it touches, as a structured JSON palimpsest (for editor integrations)",
        },
        repositoryOption,
      ],
    },
    {
      name: "channel",
      description: "Manages different channels",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a channel. The channel must not be the current channel",
          args: {
            name: "DELETE",
            generators: channelGenerator,
          },
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
        },
        {
          name: "new",
          description: "Create a new, empty channel",
          args: {
            name: "NAME",
          },
          options: [
            {
              name: "--empty",
            },
          ],
        },
        {
          name: "rename",
          description: "Rename a channel",
          args: [
            {
              name: "FROM",
              description:
                "Name of the channel to be renamed. Defaults to current channel",
              isOptional: true,
              generators: channelGenerator,
            },
            {
              name: "TO",
              description: "New name of the channel to rename to",
            },
          ],
        },
        {
          name: "switch",
          description:
            "Switch to a channel. There must not be unrecorded changes in the working copy",
          args: {
            name: "TO",
            description:
              "Name of the channel to switch to. If not specified, defaults to current channel",
            isOptional: true,
            generators: channelGenerator,
          },
        },
      ],
      options: [repositoryOption],
    },
    {
      name: "client",
      description: "Authenticates with a HTTP server",
      args: {
        name: "URL",
        description: "Url to authenticate to",
      },
    },
    {
      name: "clone",
      description: "Clones an existing pijul repository",
      args: [
        {
          name: "REMOTE",
          description: "Clone this remote",
        },
        {
          name: "PATH",
          description:
            "Path where to clone the repository. If missing, the inferred name of the remote repository is used",
          isOptional: true,
          template: "folders",
        },
        {
          name: "SALT",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--change",
          description: "Clone this change and its dependencies",
          exclusiveOn: ["--state"],
          args: {
            name: "CHANGE",
          },
        },
        {
          name: "--channel",
          description: "Set the remote channel",
          args: {
            name: "CHANNEL",
            default: "main",
          },
        },
        {
          name: "--into",
          description:
            "Clone into a subdirectory of the current repository (monorepo mode): the remote channel is imported into the current channel and its sub-root is relocated under this directory. Must be a single-level directory name",
          args: {
            name: "INTO",
            template: "folders",
          },
        },
        noCertCheckOption,
        pathsOption("Clone this path only"),
        {
          name: "--state",
          description: "Clone this state",
          exclusiveOn: ["--change"],
          args: {
            name: "STATE",
          },
        },
      ],
    },
    {
      name: "completion",
      description: "Shell completion script generation",
      subcommands: [
        {
          name: "bash",
        },
        {
          name: "elvish",
        },
        {
          name: "fish",
        },
        {
          name: "power-shell",
        },
        {
          name: "zsh",
        },
      ],
    },
    {
      name: "credit",
      description:
        "Shows which change last affected each line of the given file(s)",
      args: {
        name: "FILE",
        description: "The file to annotate",
        template: "filepaths",
      },
      options: [
        channelOption,
        outputFormatOption(
          "Output format; json emits the annotations as structured JSON instead of the default per-line change attribution"
        ),
        repositoryOption,
      ],
    },
    {
      name: "debug",
      hidden: true,
      args: {
        name: "ROOT",
        isOptional: true,
      },
      options: [
        channelOption,
        repositoryOption,
        {
          name: "--sanakirja-only",
        },
      ],
    },
    {
      name: "dependents",
      description:
        "Lists the transitive closure of the reverse dependency relation",
      args: {
        name: "HASH",
        description:
          "The hash of the change to show, or an unambiguous prefix thereof",
        isOptional: true,
      },
      options: [repositoryOption],
    },
    {
      name: "diff",
      description: "Shows difference between two channels/changes",
      args: {
        name: "PREFIXES",
        description:
          "Only diff those paths (files or directories). If missing, diff the entire repository",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
      options: [
        algorithmOption,
        channelOption,
        {
          name: "--context",
          description:
            "Show the uncommitted change inlined in the full context of each file, as a structured JSON palimpsest (for editor integrations)",
        },
        {
          name: "--json",
          description: "Deprecated alias for --output-format json",
          deprecated: true,
        },
        outputFormatOption(
          "Output format; json emits a structured diff instead of the default human-readable change text"
        ),
        repositoryOption,
        {
          name: ["-s", "--short"],
          description: "Show a short version of the diff",
        },
        {
          name: ["-u", "--untracked"],
          description: "Include the untracked files",
        },
      ],
    },
    {
      name: "docgen",
      description: "Generate man pages or markdown documentation",
      hidden: true,
      subcommands: [
        {
          name: "man",
          description: "Generate man pages (one per subcommand) into OUTDIR",
          args: {
            name: "OUTDIR",
            description: "Directory to write .1 files into",
            template: "folders",
          },
        },
        {
          name: "markdown",
          description:
            "Generate markdown reference pages (one per subcommand) into OUTDIR",
          args: {
            name: "OUTDIR",
            description: "Directory to write .md files into",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "fork",
      description: "Create a new channel",
      args: {
        name: "TO",
        description: "The name of the new channel",
      },
      options: [
        {
          name: "--change",
          description: "Apply this change after creating the channel",
          exclusiveOn: ["--channel", "--state"],
          args: {
            name: "CHANGE",
          },
        },
        {
          name: "--channel",
          description:
            "Make the new channel from this channel instead of the current channel",
          exclusiveOn: ["--change", "--state"],
          args: {
            name: "CHANNEL",
            generators: channelGenerator,
          },
        },
        repositoryOption,
        {
          name: "--state",
          description:
            "Make the new channel from this state instead of the current channel",
          exclusiveOn: ["--change", "--channel"],
          args: {
            name: "STATE",
          },
        },
      ],
    },
    {
      name: "git",
      description: "Imports a git repository into pijul",
      args: [
        {
          name: "GIT_PATH",
          description:
            "Process this path instead of the current directory, creating a Pijul repository if necessary",
          isOptional: true,
          template: "folders",
        },
        {
          name: "PIJUL_PATH",
          description:
            "Process this path instead of the current directory, creating a Pijul repository if necessary",
          isOptional: true,
          template: "folders",
        },
      ],
      options: [
        {
          name: "--stats",
          description: "Time the import, and output values to this file",
          hidden: true,
          args: {
            name: "STATS",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "hooks",
      description:
        "Manage the repository-wide shared hooks declared in pijul.toml",
      subcommands: [
        {
          name: "approve",
          description:
            "Approve the shared hooks currently declared in pijul.toml so that pijul record will run them",
        },
        {
          name: "revoke",
          description: "Revoke a previous approval of the shared hooks",
        },
        {
          name: ["show", "status"],
          description:
            "Show the shared and personal hooks and whether the shared ones are approved",
        },
      ],
      options: [repositoryOption],
    },
    {
      name: "http-token",
      description: "Mints an HTTP bearer token for a Nest using your SSH key",
      args: {
        name: "REMOTE",
        description:
          "The HTTP remote (URL or configured name). Defaults to the default remote",
        isOptional: true,
      },
      options: [
        {
          name: "--identity",
          description:
            "Identity to sign with (defaults to the configured identity)",
          args: {
            name: "IDENTITY",
          },
        },
      ],
    },
    {
      name: ["identity", "id", "key"],
      description:
        "A collection of tools for interactively managing the user's identities",
      subcommands: [
        {
          name: "edit",
          description: "Edit an existing identity",
          args: {
            name: "OLD_NAME",
            description: "Set the name of the identity to edit",
            isOptional: true,
          },
          options: [
            ...identityDataOptions,
            {
              name: "--new-name",
              description: "Set the identity name",
              args: {
                name: "NEW_NAME",
              },
            },
          ],
        },
        {
          name: "list",
          description: "Pretty-print all valid identities on disk",
        },
        {
          name: "new",
          description: "Create a new identity",
          args: {
            name: "NAME",
            description: "Set the new identity name",
            isOptional: true,
          },
          options: identityDataOptions,
        },
        {
          name: "prove",
          description: "Prove an identity to the server",
          args: {
            name: "SERVER",
            description: "Set the target server",
            isOptional: true,
          },
          options: [
            {
              name: "--name",
              description: "Set the name used to prove the identity",
              args: {
                name: "IDENTITY_NAME",
              },
            },
          ],
        },
        {
          name: ["remove", "rm"],
          description: "Remove an existing identity",
          options: [
            {
              name: "--name",
              description: "Set the name of the identity to remove",
              args: {
                name: "IDENTITY_NAME",
              },
            },
          ],
        },
        {
          name: "repair",
          description:
            "Repair the identity state on disk, including migration from older versions of Pijul",
        },
      ],
      options: [
        {
          name: ["-k", "--no-cert-check"],
          description: "Do not verify certificates (use with caution)",
        },
        repositoryOption,
      ],
    },
    {
      name: "init",
      description: "Initializes an empty pijul repository",
      args: {
        name: "PATH",
        description: "Path where the repository should be initialized",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: "--channel",
          description:
            'Set the name of the current channel (defaults to "main")',
          args: {
            name: "CHANNEL",
          },
        },
        {
          name: ["-k", "--kind"],
          description:
            "Project kind; if Pijul knows about your project kind, the .ignore file will be populated with a conservative list of commonly ignored entries. Example: pijul init --kind=rust",
          args: {
            name: "KIND",
          },
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "Lists files tracked by pijul",
      options: [repositoryOption],
    },
    {
      name: "log",
      description: "Show the entire log of changes",
      args: {
        name: "FILTERS",
        description:
          "Filter log output, showing only log entries that touched the specified files. Accepted as a list of paths relative to your current directory, after --. Currently, filters can only be applied when logging the channel that's in use",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
      options: [
        channelOption,
        {
          name: "--description",
          description: "Include full change description in the output",
        },
        {
          name: "--files",
          description: "Include files changed in the output",
          exclusiveOn: ["--hash-only"],
        },
        {
          name: "--hash-only",
          description: "Only show the change hashes",
          exclusiveOn: ["--files"],
        },
        {
          name: "--limit",
          description: "Output at most this many changes",
          args: {
            name: "LIMIT",
          },
        },
        {
          name: "--offset",
          description: "Start after this many changes",
          args: {
            name: "OFFSET",
          },
        },
        outputFormatOption("Output format"),
        repositoryOption,
        {
          name: "--state",
          description: "Include state identifiers in the output",
        },
      ],
    },
    {
      name: ["move", "mv"],
      description: "Moves a file in the working copy and the tree",
      args: {
        name: "PATHS",
        description:
          "Paths which need to be moved. The last argument is considered the destination",
        isVariadic: true,
        template: "filepaths",
      },
      options: [repositoryOption, saltOption],
    },
    {
      name: "protocol",
      description:
        "Not meant to be run by the user, instead it is called over SSH",
      hidden: true,
      options: [
        repositoryOption,
        {
          name: "--version",
          description: "Use this protocol version",
          args: {
            name: "VERSION",
          },
        },
      ],
    },
    {
      name: "pull",
      description: "Pulls changes from a remote upstream",
      args: [
        {
          name: "FROM",
          description: "Pulls from this remote",
          isOptional: true,
        },
        {
          name: "CHANGES",
          description:
            "Pull changes from the local repository, not necessarily from a channel",
          isVariadic: true,
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-a", "--all"],
          description: "Pull all changes",
        },
        {
          name: "--complete",
          description:
            "Download complete changes, including file contents (needed if you lose network access later)",
        },
        {
          name: "--dry-run",
          description:
            "Print the hashes of the changes that would be pulled, one per line in application order, instead of pulling them",
        },
        {
          name: "--from-channel",
          description: "Pull from this remote channel",
          args: {
            name: "FROM_CHANNEL",
          },
        },
        {
          name: "--json",
          description:
            "Print the resulting conflicts as a JSON object on stdout instead of the human-readable list (for scripts/agents)",
        },
        noCertCheckOption,
        {
          name: "--no-notify",
          description:
            "Do not open an editor to notify about remote unrecords (for scripts/agents)",
        },
        pathsOption("Only pull to these paths"),
        repositoryOption,
        {
          name: "--to-channel",
          description: "Pull into this channel instead of the current channel",
          args: {
            name: "TO_CHANNEL",
            generators: channelGenerator,
          },
        },
      ],
    },
    {
      name: "push",
      description: "Pushes changes to a remote upstream",
      args: [
        {
          name: "TO",
          description: "Push to this remote",
          isOptional: true,
        },
        {
          name: "CHANGES",
          description: "Push only these changes",
          isVariadic: true,
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-a", "--all"],
          description: "Push all changes",
        },
        {
          name: "--dry-run",
          description:
            "Print the hashes of the changes that would be pushed, one per line in application order, instead of pushing them",
        },
        {
          name: "--from-channel",
          description: "Push from this channel instead of the default channel",
          args: {
            name: "FROM_CHANNEL",
            generators: channelGenerator,
          },
        },
        noCertCheckOption,
        {
          name: "--no-notify",
          description:
            "Do not open an editor to report changes or unrecords that are new on the remote; push without the interactive notification (for scripts/agents)",
        },
        pathsOption("Push changes only relating to these paths"),
        repositoryOption,
        {
          name: "--to-channel",
          description:
            "Push to this remote channel instead of the remote's default channel",
          args: {
            name: "TO_CHANNEL",
          },
        },
      ],
    },
    {
      name: "record",
      description: "Creates a new change",
      args: {
        name: "PREFIXES",
        description: "Paths in which to record the changes",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
      options: [
        {
          name: "--accept-conflict-markers",
          description:
            "Record files that still contain conflict markers as literal content. By default such a record is refused, since the markers are almost always an unresolved conflict rather than intended text",
        },
        {
          name: ["-a", "--all"],
          description: "Record all paths that have changed",
          exclusiveOn: ["--from-change"],
        },
        algorithmOption,
        {
          name: "--amend",
          description:
            "Amend this change (the last one by default) instead of creating a new change; cannot be restricted to paths",
          exclusiveOn: ["--split-per-root"],
          args: {
            name: "CHANGE",
            isOptional: true,
          },
        },
        channelOption,
        forceSubRootOption("a single change", ["--split-per-root"]),
        {
          name: "--from-change",
          description:
            "Record the change described by FILE (same text format as pijul diff) instead of opening an editor",
          exclusiveOn: ["--all"],
          args: {
            name: "FILE",
            template: "filepaths",
          },
        },
        ...headerOptions,
        repositoryOption,
        {
          name: "--split-per-root",
          description:
            "When the change touches more than one sub-root (imported project), split it into one commuting change per sub-root instead of erroring",
          exclusiveOn: ["--amend", "--force"],
        },
      ],
    },
    {
      name: "remote",
      description: "Manages remote repositories",
      subcommands: [
        {
          name: "default",
          description: "Set the default remote",
          args: {
            name: "REMOTE",
          },
        },
        {
          name: "delete",
          description: "Deletes the remote",
          args: {
            name: "REMOTE",
          },
          options: [
            {
              name: ["-1", "--exact"],
              description:
                "Delete only the specified datum, i.e. database ID or remote name. If this isn't specified and there is at most one of each kind of data linked to a remote, the entire remote is deleted",
              exclusiveOn: ["--flood"],
            },
            {
              name: "--flood",
              description:
                "Delete all the linked data of the remote, i.e. all names and all database IDs",
              exclusiveOn: ["-1", "--exact"],
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
        },
      ],
      options: [repositoryOption],
    },
    {
      name: ["remove", "rm"],
      description:
        "Removes a file from the tree of tracked files (pijul record will then record this as a deletion)",
      args: {
        name: "PATHS",
        description: "The paths to remove",
        isVariadic: true,
        template: "filepaths",
      },
      options: [repositoryOption],
    },
    {
      name: "reset",
      description:
        "Resets the working copy to the last recorded change.\nIn other words, discards all unrecorded changes",
      args: {
        name: "FILES",
        description: "Only reset these files",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
      options: [
        {
          name: "--channel",
          description:
            "Reset the working copy to this channel, and change the current channel to this channel",
          args: {
            name: "CHANNEL",
            generators: channelGenerator,
          },
        },
        {
          name: "--dry-run",
          description:
            "Print this file to the standard output, without modifying the repository (works for a single file only)",
        },
        repositoryOption,
      ],
    },
    {
      name: "squash",
      description: "Replaces several changes of a channel by a single change",
      args: {
        name: "CHANGE_ID",
        description:
          "The hashes of the changes to squash (unambiguous prefixes are accepted)",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: "--channel",
          description:
            "Squash changes of this channel instead of the current channel",
          args: {
            name: "CHANNEL",
            generators: channelGenerator,
          },
        },
        forceSubRootOption("the new change"),
        ...headerOptions,
        {
          name: "-k",
          description:
            "Do not check certificates (HTTPS remotes only, this option might be dangerous)",
          dependsOn: ["--remote"],
        },
        {
          name: "--remote",
          description:
            "Squash the changes that are not on this remote, i.e. the ones pijul push would upload (defaults to the default remote)",
          args: {
            name: "REMOTE",
            isOptional: true,
          },
        },
        {
          name: "--remote-channel",
          description:
            "With --remote, compare to this remote channel (defaults to the name of the squashed channel)",
          dependsOn: ["--remote"],
          args: {
            name: "REMOTE_CHANNEL",
          },
        },
        repositoryOption,
      ],
    },
    {
      name: "status",
      description: "Shows a brief overview of changes",
      args: {
        name: "PREFIXES",
        description: "Only show status for these paths",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
      options: [
        channelOption,
        outputFormatOption(
          "Output format; json emits a structured status instead of the default human-readable summary"
        ),
        repositoryOption,
      ],
    },
    {
      name: "unrecord",
      description: "Unrecords a list of changes",
      args: {
        name: "CHANGE_ID",
        description: "The hash of a change (unambiguous prefixes are accepted)",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: "--channel",
          description:
            "Unrecord changes from this channel instead of the current channel",
          args: {
            name: "CHANNEL",
            generators: channelGenerator,
          },
        },
        repositoryOption,
        {
          name: "--reset",
          description:
            "Also undo the changes in the working copy (preserving unrecorded changes if there are any)",
        },
        {
          name: "--show-changes",
          description:
            "Show N changes in a text editor if no change IDs were given. Defaults to the value of unrecord_changes in your global configuration",
          args: {
            name: "N",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: "--config",
      description: "Override a configuration value, in the form key=value",
      isPersistent: true,
      isRepeatable: true,
      args: {
        name: "KEY=VALUE",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Print help information",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
  ],
};
export default completionSpec;
