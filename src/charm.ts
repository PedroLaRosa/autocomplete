// Charm CLI v0.12.6 (latest git tag; upstream main is only dependency bumps since, last commit 2025-02-24; 2026-11-19).
// Source: cobra command definitions in cmd/*.go and main.go of charmbracelet/charm v0.12.6, read statically (not executed); cmd/ is identical on main.
const remotePathArg: Fig.Arg = { name: "[charm:]PATH" };
const dbArg: Fig.Arg = { name: "@DB", isOptional: true };

const completionSpec: Fig.Spec = {
  name: "charm",
  description:
    "Do Charm stuff; run without arguments for a TUI or use the sub-commands like a pro",
  subcommands: [
    {
      name: "backup-keys",
      description: "Backup your Charm account keys",
      options: [
        {
          name: ["--output", "-o"],
          description: "Keys backup filepath",
          args: {
            name: "file",
            default: "charm-keys-backup.tar",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: "crypt",
      description: "Use charm encryption",
      subcommands: [
        {
          name: "decrypt",
          description: "Decrypt stdin with your Charm account encryption key",
          args: {
            name: "file",
            description: "Encrypted file to read instead of stdin",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "decrypt-lookup",
          description: "Decrypt arg deterministically",
          args: { name: "value" },
        },
        {
          name: "encrypt",
          description: "Encrypt stdin with your Charm account encryption key",
        },
        {
          name: "encrypt-lookup",
          description: "Encrypt arg deterministically",
          args: { name: "value" },
        },
      ],
    },
    {
      name: "fs",
      description: "Use the Charm file system",
      subcommands: [
        {
          name: "cat",
          description: "Output the content of the file at path",
          args: remotePathArg,
        },
        {
          name: "cp",
          description:
            'Copy a file, preface source or destination with "charm:" to specify a remote path',
          args: [remotePathArg, remotePathArg],
          options: [
            {
              name: ["--recursive", "-r"],
              description: "Copy directories recursively",
            },
          ],
        },
        {
          name: "ls",
          description: "List file or directory at path",
          args: remotePathArg,
        },
        {
          name: "mv",
          description:
            'Move a file, preface source or destination with "charm:" to specify a remote path',
          args: [remotePathArg, remotePathArg],
          options: [
            {
              name: ["--recursive", "-r"],
              description: "Move directories recursively",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove file or directory at path",
          args: remotePathArg,
        },
        {
          name: "tree",
          description: "Print a file system tree from path",
          args: remotePathArg,
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "id",
      description: "Print your Charm ID",
    },
    {
      name: "import-keys",
      description: "Import previously backed up Charm account keys",
      args: {
        name: "BACKUP.tar",
        description: "Backup archive to read (defaults to stdin)",
        isOptional: true,
        suggestions: ["BACKUP.tar"],
        template: "filepaths",
      },
      options: [
        {
          name: ["--force-overwrite", "-f"],
          description: "Overwrite if keys exist; don't prompt for input",
        },
      ],
    },
    {
      name: "jwt",
      description: "Print a JWT",
      args: {
        name: "audience",
        description: "Audience of the token",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "keys",
      description: "Browse or print linked SSH keys",
      options: [
        {
          name: ["--randomart", "-r"],
          description:
            "Print SSH 5.1 randomart for each key (the Drunken Bishop algorithm)",
        },
        {
          name: ["--simple", "-s"],
          description: "Simple, non-interactive output (good for scripts)",
        },
      ],
    },
    {
      name: "kv",
      description: "Use the Charm key value store",
      subcommands: [
        {
          name: "delete",
          description: "Delete a key with an optional @ db",
          args: {
            name: "KEY[@DB]",
          },
        },
        {
          name: "get",
          description: "Get a value for a key with an optional @ db",
          args: {
            name: "KEY[@DB]",
          },
          options: [
            {
              name: ["--show-binary", "-b"],
              description: "Print binary values",
            },
          ],
        },
        {
          name: "list",
          description: "List all key value pairs with an optional @ db",
          args: dbArg,
          options: [
            {
              name: ["--reverse", "-r"],
              description: "List in reverse lexicographic order",
            },
            {
              name: ["--keys-only", "-k"],
              description: "Only print keys and don't fetch values from the db",
            },
            {
              name: ["--values-only", "-v"],
              description: "Only print values",
            },
            {
              name: ["--show-binary", "-b"],
              description: "Print binary values",
            },
            {
              name: ["--delimiter", "-d"],
              description: "Delimiter to separate keys and values",
              args: { name: "delimiter", default: "\\t" },
            },
          ],
        },
        {
          name: "reset",
          description:
            "Delete local db and pull down fresh copy from Charm Cloud",
          args: dbArg,
        },
        {
          name: "set",
          description: "Set a value for a key with an optional @ db",
          args: [
            {
              name: "KEY[@DB]",
            },
            {
              name: "VALUE",
              description: "Value to store (read from stdin if omitted)",
              isOptional: true,
            },
          ],
        },
        {
          name: "sync",
          description: "Sync local db with latest Charm Cloud db",
          args: dbArg,
        },
      ],
    },
    {
      name: "link",
      description: "Link multiple machines to your Charm account",
      args: {
        name: "code",
        isOptional: true,
      },
    },
    {
      name: "name",
      description: "Username stuff",
      args: {
        name: "username",
        isOptional: true,
      },
    },
    {
      name: ["serve", "server"],
      description: "Start a self-hosted Charm Cloud server",
      subcommands: [
        {
          name: ["migrate", "migration"],
          description: "Run the server migration tool",
          hidden: true,
        },
      ],
      options: [
        {
          name: "--data-dir",
          description: "Directory to store SQLite db, SSH keys and file data",
          args: {
            name: "DATA_DIR",
            template: ["folders"],
          },
        },
        {
          name: "--health-port",
          description: "Health port to listen on",
          args: {
            name: "HEALTH_PORT",
            suggestions: ["35356"],
          },
        },
        {
          name: "--http-port",
          description: "HTTP port to listen on",
          args: {
            name: "HTTP_PORT",
            suggestions: ["35354"],
          },
        },
        {
          name: "--ssh-port",
          description: "SSH port to listen on",
          args: {
            name: "SSH_PORT",
            suggestions: ["35353"],
          },
        },
        {
          name: "--stats-port",
          description: "Stats port to listen on",
          args: {
            name: "STATS_PORT",
            suggestions: ["35355"],
          },
        },
      ],
    },
    {
      name: "where",
      description:
        "Find where your cloud.charm.sh folder resides on your machine",
    },
    // Hidden upstream commands
    {
      name: "bio",
      description: "Print your Charm account bio as JSON",
      hidden: true,
    },
    {
      name: "man",
      description: "Generate man pages",
      hidden: true,
    },
    {
      name: "migrate-account",
      description: "Migrate your account from an RSA key to an Ed25519 key",
      hidden: true,
      options: [
        {
          name: ["--verbose", "-v"],
          description: "Print debug output",
        },
      ],
    },
    {
      name: "post-news",
      description: "Post news to the self-hosted Charm server",
      hidden: true,
      args: { name: "file", template: "filepaths" },
      options: [
        {
          name: "--data-dir",
          description: "Directory to store SQLite db, SSH keys and file data",
          args: { name: "DATA_DIR", template: "folders" },
        },
        {
          name: ["--subject", "-s"],
          description: "Subject for news post",
          args: { name: "subject" },
        },
        {
          name: ["--tags", "-t"],
          description: "Tags for news post, comma separated",
          args: { name: "tags", default: "server" },
        },
      ],
    },
    {
      name: "sync-keys",
      description: "Re-encrypt encrypt keys for all linked public keys",
      hidden: true,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help for charm",
    },
    {
      name: ["--version", "-v"],
      description: "Version for charm",
    },
  ],
};
export default completionSpec;
