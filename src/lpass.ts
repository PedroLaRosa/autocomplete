// LastPass CLI (lpass) v1.6.2 (latest upstream tag lastpass/lastpass-cli and Homebrew formula lastpass-cli 1.6.2, 2026-11-19). Source: static read of the v1.6.2 source (cmd-*.c getopt tables, cmd.h usage strings, notes.c note types, lpass.c), lpass.1.txt man page and contrib/completions-lpass.fish; binary not executed.
// Notes: usage text and man page list --color for generate, but cmd-generate.c rejects it, so it is not offered there. `export` writes CSV to standard output and takes no filename. --title-format and --app exist in the source but not in the man page.

const names = (option: Fig.Option): string[] =>
  Array.isArray(option.name) ? option.name : [option.name];

// Mark every option of a group as mutually exclusive with the others of the group
const makeExclusive = (
  options: Fig.Option[],
  alsoExclusiveWith: string[] = []
): Fig.Option[] =>
  options.map((option) => ({
    ...option,
    exclusiveOn: [
      ...options.filter((other) => other !== option).flatMap(names),
      ...alsoExclusiveWith,
    ],
  }));

const syncOption: Fig.Option = {
  name: "--sync",
  description: "Control when the operation synchronizes with the server",
  args: {
    name: "sync",
    suggestions: [
      {
        name: "auto",
        description:
          "Sync changes in the background and refresh a stale cache before showing values",
      },
      {
        name: "now",
        description: "Synchronize before the command exits or shows a value",
      },
      { name: "no", description: "Do not contact the server" },
    ],
    default: "auto",
  },
};

const colorOption: Fig.Option = {
  name: "--color",
  description: "Control colored output to the terminal",
  args: {
    name: "color",
    suggestions: ["auto", "never", "always"],
    default: "auto",
  },
};

const nonInteractiveOption: Fig.Option = {
  name: "--non-interactive",
  description:
    "Read data from standard input until EOF (or the first newline unless editing notes) instead of using the editor",
};

const noteTypes: Fig.Suggestion[] = [
  { name: "amex", description: "American Express" },
  { name: "bank", description: "Bank Account" },
  { name: "credit-card", description: "Credit Card" },
  { name: "database", description: "Database" },
  { name: "drivers-license", description: "Driver's License" },
  { name: "email", description: "Email Account" },
  { name: "health-insurance", description: "Health Insurance" },
  { name: "im", description: "Instant Messenger" },
  { name: "insurance", description: "Insurance" },
  { name: "mastercard", description: "Mastercard" },
  { name: "membership", description: "Membership" },
  { name: "passport", description: "Passport" },
  { name: "server", description: "Server" },
  { name: "ssn", description: "Social Security" },
  { name: "software-license", description: "Software License" },
  { name: "ssh-key", description: "SSH Key" },
  { name: "visa", description: "VISA" },
  { name: "wifi", description: "Wi-Fi Password" },
];

const exportFields = [
  "id",
  "url",
  "username",
  "password",
  "extra",
  "name",
  "fav",
  "grouping",
  "group",
  "fullname",
  "last_touch",
  "last_modified_gmt",
  "attachpresent",
];

const booleanSuggestions = ["true", "false"];

// Options of `share useradd` and `share usermod`
const shareUserOptions: Fig.Option[] = [
  {
    name: "--read-only",
    description: "Give the user read-only access to the shared folder",
    args: { name: "read-only", suggestions: booleanSuggestions },
  },
  {
    name: "--hidden",
    description: "Hide passwords from the user",
    args: { name: "hidden", suggestions: booleanSuggestions },
  },
  {
    name: "--admin",
    description: "Make the user an administrator of the shared folder",
    args: { name: "admin", suggestions: booleanSuggestions },
  },
];

const shareArg: Fig.Arg = {
  name: "SHARE",
  description: "Name of the shared folder",
};

const shareUsernameArg: Fig.Arg = {
  name: "USERNAME",
  description: "Username (email address) of the shared folder member",
};

// Entry parts selectable with `lpass add` (one at most; --notes and --note-type are handled separately)
const addFieldChoices: Fig.Option[] = [
  { name: ["--username", "-u"], description: "Add only the username" },
  { name: ["--password", "-p"], description: "Add only the password" },
  { name: "--url", description: "Add only the URL" },
  {
    name: "--field",
    description: "Add only the given field",
    args: { name: "FIELD", description: "Name of the field to add" },
  },
];

const completionSpec: Fig.Spec = {
  name: "lpass",
  description: "Command line interface for LastPass",
  subcommands: [
    {
      name: "login",
      description: "Log in to LastPass",
      options: [
        {
          name: "--trust",
          description:
            "Do not require multifactor authentication on subsequent logins",
        },
        {
          name: "--plaintext-key",
          description:
            "Save the decryption key to the hard disk in plaintext (discouraged)",
        },
        {
          name: ["--force", "-f"],
          description: "Skip the confirmation for --plaintext-key",
          dependsOn: ["--plaintext-key"],
        },
        colorOption,
      ],
      args: {
        name: "USERNAME",
        description: "LastPass account username (email address)",
      },
    },
    {
      name: "logout",
      description: "Log out of LastPass and remove the local cache and keys",
      options: [
        {
          name: ["--force", "-f"],
          description: "Skip user confirmation",
        },
        colorOption,
      ],
    },
    {
      name: "passwd",
      description: "Change the master password and re-encrypt all entries",
    },
    {
      name: "show",
      description: "Show the password or a selected field of an entry",
      options: [
        syncOption,
        {
          name: ["--clip", "-c"],
          description: "Copy the output to the clipboard",
        },
        {
          name: ["--quiet", "-q"],
          description: "Print nothing and only set the return code",
        },
        {
          name: ["--expand-multi", "-x"],
          description: "Show the information of all matching entries",
        },
        {
          name: ["--json", "-j"],
          description: "Generate JSON output instead of human-readable text",
        },
        ...makeExclusive([
          { name: "--all", description: "Show all fields" },
          { name: ["--username", "-u"], description: "Show only the username" },
          { name: ["--password", "-p"], description: "Show only the password" },
          { name: "--url", description: "Show only the URL" },
          { name: "--notes", description: "Show only the notes" },
          {
            name: "--field",
            description: "Show only the given field",
            args: { name: "FIELD", description: "Name of the field to show" },
          },
          { name: "--id", description: "Show only the ID" },
          { name: "--name", description: "Show only the name" },
          {
            name: "--attach",
            description: "Show the given attachment",
            args: { name: "ATTACHID", description: "Attachment ID" },
          },
        ]),
        ...makeExclusive([
          {
            name: ["--basic-regexp", "-G"],
            description:
              "Match entries with a case-insensitive regular expression",
          },
          {
            name: ["--fixed-strings", "-F"],
            description: "Match entries containing the exact substring",
          },
        ]),
        {
          name: "--format",
          description:
            "Printf-style format for each field (placeholders such as %fn and %fv)",
          args: { name: "FORMAT" },
        },
        {
          name: "--title-format",
          description:
            "Printf-style format for the entry header (placeholders such as %an, %ai and %au)",
          args: { name: "FORMAT" },
        },
        colorOption,
      ],
      args: {
        name: "NAME|UNIQUEID",
        description: "Name or unique ID of the entry to show",
        isVariadic: true,
      },
    },
    {
      name: "ls",
      description: "List entries in groups in a tree structure",
      options: [
        syncOption,
        {
          name: ["--long", "-l"],
          description: "Also list the modification (or last use) time",
        },
        {
          name: "-m",
          description: "Show the last modification time (default with --long)",
        },
        {
          name: "-u",
          description:
            "Show the last use time instead of the modification time with --long",
        },
        {
          name: "--format",
          description:
            "Printf-style format for each entry (placeholders such as %an, %ai and %au)",
          args: { name: "FORMAT" },
        },
        colorOption,
      ],
      args: {
        name: "GROUP",
        description: "Group of entries to list",
        isOptional: true,
      },
    },
    {
      name: "mv",
      description: "Move an entry to a different group",
      options: [syncOption, colorOption],
      args: [
        {
          name: "UNIQUENAME|UNIQUEID",
          description: "Unique name or ID of the entry to move",
        },
        {
          name: "GROUP",
          description: "Destination group",
        },
      ],
    },
    {
      name: "add",
      description: "Add a new entry",
      options: [
        syncOption,
        nonInteractiveOption,
        colorOption,
        ...makeExclusive(addFieldChoices, ["--notes", "--note-type"]),
        {
          name: "--notes",
          description: "Add only the notes",
          exclusiveOn: addFieldChoices.flatMap(names),
        },
        {
          name: "--note-type",
          description: "Create a secure note of the given type",
          exclusiveOn: addFieldChoices.flatMap(names),
          args: {
            name: "NOTETYPE",
            description: "Type of the secure note",
            suggestions: noteTypes,
          },
        },
        {
          name: "--app",
          description: "Create the entry as an application",
          hidden: true,
        },
      ],
      args: {
        name: "NAME|UNIQUEID",
        description:
          "Name of the entry to create or unique ID of the entry to overwrite",
      },
    },
    {
      name: "edit",
      description: "Edit an existing entry",
      options: [
        syncOption,
        nonInteractiveOption,
        colorOption,
        ...makeExclusive([
          { name: "--name", description: "Edit only the name" },
          { name: ["--username", "-u"], description: "Edit only the username" },
          { name: ["--password", "-p"], description: "Edit only the password" },
          { name: "--url", description: "Edit only the URL" },
          { name: "--notes", description: "Edit only the notes" },
          {
            name: "--field",
            description: "Edit only the given field",
            args: { name: "FIELD", description: "Name of the field to edit" },
          },
        ]),
      ],
      args: {
        name: "NAME|UNIQUEID",
        description: "Name or unique ID of the entry to edit",
      },
    },
    {
      name: "generate",
      description: "Create an entry with a randomly generated password",
      options: [
        syncOption,
        {
          name: ["--clip", "-c"],
          description: "Copy the generated password to the clipboard",
        },
        {
          name: "--username",
          description: "Set the username of the entry",
          args: { name: "USERNAME", description: "Username of the entry" },
        },
        {
          name: "--url",
          description: "Set the URL of the entry",
          args: { name: "URL", description: "URL of the entry" },
        },
        {
          name: "--no-symbols",
          description: "Generate a password without symbols",
        },
      ],
      args: [
        {
          name: "NAME|UNIQUEID",
          description:
            "Name of the entry to create or unique ID of the entry to update",
        },
        {
          name: "LENGTH",
          description: "Length of the password to generate",
        },
      ],
    },
    {
      name: "duplicate",
      description: "Duplicate an entry under a new ID",
      options: [syncOption, colorOption],
      args: {
        name: "UNIQUENAME|UNIQUEID",
        description: "Unique name or ID of the entry to duplicate",
      },
    },
    {
      name: "rm",
      description: "Remove an entry",
      options: [syncOption, colorOption],
      args: {
        name: "UNIQUENAME|UNIQUEID",
        description: "Unique name or ID of the entry to remove",
      },
    },
    {
      name: "status",
      description: "Show the LastPass login status",
      options: [
        {
          name: ["--quiet", "-q"],
          description: "Print nothing and only set the return code",
        },
        colorOption,
      ],
    },
    {
      name: "sync",
      description: "Synchronize the local cache with the LastPass server",
      options: [
        {
          name: ["--background", "-b"],
          description: "Synchronize in a daemonized background process",
        },
        colorOption,
      ],
    },
    {
      name: "import",
      description: "Import accounts from an unencrypted CSV file",
      options: [
        syncOption,
        {
          name: "--keep-dupes",
          description: "Import entries that already exist in the vault",
        },
      ],
      args: {
        name: "FILENAME",
        description: "CSV file to import (reads standard input if omitted)",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "export",
      description:
        "Export all accounts to standard output as unencrypted CSV (including passwords)",
      options: [
        syncOption,
        colorOption,
        {
          name: "--fields",
          description: "Comma-separated list of fields to export",
          args: {
            name: "FIELDLIST",
            description: "Comma-separated subset of the available fields",
            suggestions: exportFields,
          },
        },
      ],
    },
    {
      name: "share",
      description: "Manage shared folders",
      options: [
        { ...syncOption, isPersistent: true },
        { ...colorOption, isPersistent: true },
      ],
      subcommands: [
        {
          name: "userls",
          description:
            "List the users and groups with access to a shared folder",
          args: shareArg,
        },
        {
          name: "useradd",
          description: "Add a user to a shared folder",
          options: shareUserOptions,
          args: [shareArg, shareUsernameArg],
        },
        {
          name: "usermod",
          description: "Modify the permissions of a user of a shared folder",
          options: shareUserOptions,
          args: [shareArg, shareUsernameArg],
        },
        {
          name: "userdel",
          description: "Remove a user from a shared folder",
          args: [shareArg, shareUsernameArg],
        },
        {
          name: "create",
          description: "Create a shared folder",
          args: {
            name: "SHARE",
            description: "Name of the shared folder to create",
          },
        },
        {
          name: "rm",
          description: "Delete a shared folder",
          args: {
            name: "SHARE",
            description: "Name of the shared folder to delete",
          },
        },
        {
          name: "limit",
          description:
            "Show or change the account access list of a user of a shared folder",
          options: [
            ...makeExclusive([
              {
                name: "--deny",
                description: "Treat the list as a blacklist",
              },
              {
                name: "--allow",
                description: "Treat the list as a whitelist",
              },
            ]),
            ...makeExclusive([
              {
                name: "--add",
                description: "Add the sites to the access list",
              },
              {
                name: "--rm",
                description: "Remove the sites from the access list",
              },
              {
                name: "--clear",
                description: "Reset the access list",
              },
            ]),
          ],
          args: [
            shareArg,
            shareUsernameArg,
            {
              name: "sites",
              description: "Sites to add to or remove from the access list",
              isOptional: true,
              isVariadic: true,
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show the usage",
    },
    {
      name: ["--version", "-v"],
      description: "Show the version",
    },
  ],
};
export default completionSpec;
