// 1Password CLI (op) v2.42.0 (current stable per the Homebrew cask 1password-cli, 2026-11-19). Source: official CLI reference pages
// (https://www.1password.dev/cli/reference, one page per command; they mirror `op <cmd> --help`) plus the item fields / SSH key guides, read statically via
// doc snippets. op is closed source and the sandbox cannot run downloaded binaries, so the binary itself was not executed or inspected.
// `op environment` is documented as beta-only (2.33.0-beta.02+) and may be absent from the stable build; `op run --environment` is documented as 2.41.0+.

const icon =
  "data:image/png;base64,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";

interface Account {
  url: string;
  email: string;
  user_uuid: string;
  account_uuid: string;
}

const suggestAccounts: Fig.Generator = {
  script: ["op", "account", "list", "--format", "json"],
  postProcess: (out) => {
    const json = JSON.parse(out) as Account[];
    return json.map((account) => ({
      name: account.email,
      description: account.url,
      insertValue: account.account_uuid,
      icon,
    }));
  },
};

const stdinSuggestion: Fig.Suggestion = {
  name: "-",
  description: "Read from stdin",
  hidden: true,
};

// Item categories (case-insensitive, whitespace is ignored by the CLI)
const itemCategoryNames: [string, string][] = [
  ["apicredential", "API Credential"],
  ["bankaccount", "Bank Account"],
  ["creditcard", "Credit Card"],
  ["cryptowallet", "Crypto Wallet"],
  ["database", "Database"],
  ["document", "Document"],
  ["driverlicense", "Driver License"],
  ["emailaccount", "Email Account"],
  ["identity", "Identity"],
  ["login", "Login"],
  ["medicalrecord", "Medical Record"],
  ["membership", "Membership"],
  ["outdoorlicense", "Outdoor License"],
  ["passport", "Passport"],
  ["password", "Password"],
  ["rewardprogram", "Reward Program"],
  ["securenote", "Secure Note"],
  ["server", "Server"],
  ["socialsecuritynumber", "Social Security Number"],
  ["softwarelicense", "Software License"],
  ["ssh", "SSH Key"],
  ["wirelessrouter", "Wireless Router"],
];

const itemCategories: Fig.Suggestion[] = itemCategoryNames.map(
  ([name, displayName]) => ({ name, displayName })
);

const vaultIcons = [
  "airplane",
  "application",
  "art-supplies",
  "bankers-box",
  "brown-briefcase",
  "brown-gate",
  "buildings",
  "cabin",
  "castle",
  "circle-of-dots",
  "coffee",
  "color-wheel",
  "curtained-window",
  "document",
  "doughnut",
  "fence",
  "galaxy",
  "gears",
  "globe",
  "green-backpack",
  "green-gem",
  "handshake",
  "heart-with-monitor",
  "house",
  "id-card",
  "jet",
  "large-ship",
  "luggage",
  "plant",
  "porthole",
  "puzzle",
  "rainbow",
  "record",
  "round-door",
  "sandals",
  "scales",
  "screwdriver",
  "shop",
  "tall-window",
  "treasure-chest",
  "vault-door",
  "vehicle",
  "wallet",
  "wrench",
];

// Vault permissions: the three base ones, then the granular 1Password Business ones
const vaultPermissions = [
  "allow_viewing",
  "allow_editing",
  "allow_managing",
  "view_items",
  "view_and_copy_passwords",
  "view_item_history",
  "create_items",
  "edit_items",
  "archive_items",
  "delete_items",
  "import_items",
  "export_items",
  "copy_and_share_items",
  "print_items",
  "manage_vault",
];

const objectArg = (name: string): Fig.Arg => ({
  name,
  isOptional: true,
  suggestions: [stdinSuggestion],
});

const userArg = objectArg("email | name | userID");

const vaultOption = (description: string): Fig.Option => ({
  name: "--vault",
  description,
  args: { name: "vault" },
});

const includeArchiveOption = (what: string): Fig.Option => ({
  name: "--include-archive",
  description: `Include ${what} in the Archive. Can also be set using OP_INCLUDE_ARCHIVE environment variable`,
});

const forceOption = (
  description = "Do not prompt for confirmation"
): Fig.Option => ({
  name: ["-f", "--force"],
  description,
});

const fileModeOption: Fig.Option = {
  name: "--file-mode",
  description:
    "Set filemode for the output file. It is ignored without the --out-file flag (default 0600)",
  args: { name: "filemode" },
};

const outFileOption = (description: string): Fig.Option => ({
  name: ["-o", "--out-file"],
  description,
  args: { name: "path", template: "filepaths" },
});

const expiresInOption = (description: string): Fig.Option => ({
  name: "--expires-in",
  description,
  args: { name: "duration" },
});

const revealOption: Fig.Option = {
  name: "--reveal",
  description: "Don't conceal sensitive fields",
};

const noInputOption: Fig.Option = {
  name: "--no-input",
  description: "Do not prompt for input on interactive terminal",
};

const generatePasswordOption = (description: string): Fig.Option => ({
  name: "--generate-password",
  description,
  requiresSeparator: true,
  args: { name: "recipe", isOptional: true },
});

const permissionsOption = (description: string): Fig.Option => ({
  name: "--permissions",
  description,
  args: { name: "permissions", suggestions: vaultPermissions },
});

const travelModeOption = (what: string): Fig.Option => ({
  name: "--travel-mode",
  description: `Turn Travel Mode on or off for the ${what} (default off)`,
  args: { name: "on|off", suggestions: ["on", "off"] },
});

const vaultAccessSubcommands = (
  who: "group" | "user",
  grantDescription: string,
  grantVaultDescription: string
): Fig.Subcommand[] => [
  {
    name: "grant",
    description: grantDescription,
    options: [
      {
        name: `--${who}`,
        description: `The ${who} to receive access`,
        args: { name: who },
      },
      noInputOption,
      permissionsOption(`The permissions to grant to the ${who}`),
      vaultOption(grantVaultDescription),
    ],
  },
  {
    name: "revoke",
    description: `Revoke a portion or the entire access of a ${who} to a vault`,
    options: [
      {
        name: `--${who}`,
        description: `The ${who} to revoke access from`,
        args: { name: who },
      },
      noInputOption,
      permissionsOption(`The permissions to revoke from the ${who}`),
      vaultOption("The vault to revoke access to"),
    ],
  },
];

const spec: Fig.Spec = {
  name: "op",
  description: "Official 1Password CLI",
  icon,
  subcommands: [
    {
      name: "account",
      description: "Manage your locally configured 1Password accounts",
      icon,
      subcommands: [
        {
          name: "add",
          description: "Add an account to sign in to for the first time",
          options: [
            {
              name: "--address",
              description: "The sign-in address for your account",
              args: {
                name: "string",
              },
            },
            {
              name: "--email",
              description: "The email address associated with your account",
              args: {
                name: "string",
              },
            },
            {
              name: "--raw",
              description: "Only return the session token",
            },
            {
              name: "--shorthand",
              description: "Set a custom account shorthand for your account",
              args: {
                name: "string",
              },
            },
            {
              name: "--signin",
              description: "Immediately sign in to the added account",
            },
          ],
        },
        {
          name: "get",
          description: "Get details about your account",
        },
        {
          name: ["list", "ls"],
          description: "List users and accounts set up on this device",
        },
        {
          name: "forget",
          description: "Remove a 1Password account from this device",
          options: [
            {
              name: "--all",
              description: "Forget all authenticated accounts",
            },
          ],
          args: {
            name: "account",
            isOptional: true,
            generators: suggestAccounts,
          },
        },
      ],
    },
    {
      name: "connect",
      description:
        "Manage Connect server instances and tokens in your 1Password account",
      icon,
      subcommands: [
        {
          name: "group",
          description: "Manage group access to Secrets Automation",
          subcommands: [
            {
              name: "grant",
              description: "Grant a group access to manage Secrets Automation",
              options: [
                {
                  name: "--all-servers",
                  description:
                    "Grant access to all current and future servers in the authenticated account",
                },
                {
                  name: "--group",
                  description: "The group to receive access",
                  args: {
                    name: "group",
                  },
                },
                {
                  name: "--server",
                  description: "The server to grant access to",
                  args: {
                    name: "server",
                  },
                },
              ],
            },
            {
              name: "revoke",
              description:
                "Revoke a group's access to manage Secrets Automation",
              options: [
                {
                  name: "--all-servers",
                  description:
                    "Revoke access to all current and future servers in the authenticated account",
                },
                {
                  name: "--group",
                  description: "The group to revoke access from",
                  args: {
                    name: "group",
                  },
                },
                {
                  name: "--server",
                  description: "The server to revoke access to",
                  args: {
                    name: "server",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "server",
          description: "Manage Connect servers",
          subcommands: [
            {
              name: "create",
              description: "Set up a Connect server",
              options: [
                forceOption(
                  "Do not prompt for confirmation when overwriting credential files"
                ),
                {
                  name: "--vaults",
                  description:
                    "Grant the Connect server access to these vaults",
                  isRepeatable: true,
                  args: {
                    name: "strings",
                  },
                },
              ],
              args: {
                name: "name",
              },
            },
            {
              name: "get",
              description: "Get a Connect server",
              args: objectArg("serverName | serverID"),
            },
            {
              name: "edit",
              description: "Rename a Connect server",
              options: [
                {
                  name: "--name",
                  description: "Change the server's name",
                  args: {
                    name: "name",
                  },
                },
              ],
              args: {
                name: "serverName | serverID",
              },
            },
            {
              name: ["delete", "remove", "rm"],
              description: "Remove a Connect server",
              args: objectArg("serverName | serverID"),
            },
            {
              name: ["list", "ls"],
              description: "List Connect servers",
            },
          ],
        },
        {
          name: "token",
          description: "Manage Connect tokens",
          subcommands: [
            {
              name: "create",
              description: "Issue a token for a 1Password Connect server",
              options: [
                expiresInOption(
                  "Set how long the Connect token is valid for in (s)econds, (m)inutes, (h)ours, (d)ays, and/or (w)eeks"
                ),
                {
                  name: "--server",
                  description: "Issue a token for this server",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--vault",
                  description:
                    "Issue a token on these vaults. By default grants the same permissions as the server. Add a comma and r or w after the vault to limit it to read-only or write-only",
                  isRepeatable: true,
                  args: {
                    name: "stringArray",
                  },
                },
              ],
              args: {
                name: "tokenName",
              },
            },
            {
              name: "edit",
              description: "Rename a Connect token",
              options: [
                {
                  name: "--name",
                  description: "Change the token's name",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--server",
                  description:
                    "Only look for tokens for this 1Password Connect server",
                  args: {
                    name: "string",
                  },
                },
              ],
              args: {
                name: "token",
              },
            },
            {
              name: ["delete", "remove", "rm"],
              description: "Revoke a token for a Connect server",
              options: [
                {
                  name: "--server",
                  description:
                    "Only look for tokens for this 1Password Connect server",
                  args: {
                    name: "string",
                  },
                },
              ],
              args: {
                name: "token",
                isOptional: true,
              },
            },
            {
              name: ["list", "ls"],
              description: "Get a list of tokens",
              options: [
                {
                  name: "--server",
                  description: "Only list tokens for this Connect server",
                  args: {
                    name: "server",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "vault",
          description: "Manage Connect server vault access",
          subcommands: [
            {
              name: "grant",
              description: "Grant a Connect server access to a vault",
              options: [
                {
                  name: "--server",
                  description: "The server to be granted access",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--vault",
                  description: "The vault to grant access to",
                  args: {
                    name: "string",
                  },
                },
              ],
            },
            {
              name: "revoke",
              description: "Revoke a Connect server's access to a vault",
              options: [
                {
                  name: "--server",
                  description: "The server to revoke access from",
                  args: {
                    name: "server",
                  },
                },
                {
                  name: "--vault",
                  description: "The vault to revoke a server's access to",
                  args: {
                    name: "vault",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "document",
      description: "Perform CRUD operations on Document items in your vaults",
      icon,
      subcommands: [
        {
          name: "create",
          description: "Create a document item",
          options: [
            {
              name: "--file-name",
              description: "Set the file's name",
              args: {
                name: "name",
              },
            },
            {
              name: "--tags",
              description:
                "Set the tags to the specified (comma-separated) values",
              args: {
                name: "tags",
              },
            },
            {
              name: "--title",
              description: "Set the document item's title",
              args: {
                name: "title",
              },
            },
            vaultOption("Save the document in this vault. Default: Private"),
          ],
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
            suggestions: [stdinSuggestion],
          },
        },
        {
          name: "get",
          description: "Download a document",
          options: [
            fileModeOption,
            forceOption(
              "Forcibly print an unintelligible document to an interactive terminal. If --out-file is specified, save the document to a file without prompting for confirmation"
            ),
            includeArchiveOption("document items"),
            outFileOption(
              "Save the document to the file path instead of stdout"
            ),
            vaultOption("Look for the document in this vault"),
          ],
          args: {
            name: "itemName | itemID",
          },
        },
        {
          name: "edit",
          description: "Edit a document item",
          options: [
            {
              name: "--file-name",
              description: "Set the file's name",
              args: {
                name: "name",
              },
            },
            {
              name: "--tags",
              description:
                "Set the tags to the specified (comma-separated) values. An empty value removes all tags",
              args: {
                name: "tags",
              },
            },
            {
              name: "--title",
              description: "Set the document item's title",
              args: {
                name: "title",
              },
            },
            vaultOption("Look up document in this vault"),
          ],
          args: [
            {
              name: "itemName | itemID",
            },
            {
              name: "file",
              isOptional: true,
              template: "filepaths",
              suggestions: [stdinSuggestion],
            },
          ],
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete or archive a document item",
          options: [
            {
              name: "--archive",
              description: "Move the document to the Archive",
            },
            vaultOption("Delete the document in this vault"),
          ],
          args: objectArg("itemName | itemID"),
        },
        {
          name: ["list", "ls"],
          description: "Get a list of documents",
          options: [
            includeArchiveOption("document items"),
            vaultOption("Only list documents in this vault"),
          ],
        },
      ],
    },
    {
      name: "environment",
      description:
        "Manage your 1Password Environments and their variables (Beta)",
      icon,
      subcommands: [
        {
          name: "read",
          description:
            "Read environment variables from a 1Password Environment",
          args: {
            name: "environmentID",
          },
        },
      ],
    },
    {
      name: "events-api",
      description: "Manage Events API integrations in your 1Password account",
      icon,
      subcommands: [
        {
          name: "create",
          description: "Set up an integration with the Events API",
          options: [
            expiresInOption(
              "Set how long the events-api token is valid for in (s)econds, (m)inutes, (h)ours, (d)ays, and/or (w)eeks"
            ),
            {
              name: "--features",
              description:
                "Set the comma-separated list of features the integration token can be used for",
              args: {
                name: "features",
                suggestions: ["signinattempts", "itemusages", "auditevents"],
              },
            },
          ],
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "group",
      description: "Manage the groups in your 1Password account",
      icon,
      subcommands: [
        {
          name: "user",
          description: "Manage users in groups",
          subcommands: [
            {
              name: "grant",
              description: "Grant a user access to a group",
              options: [
                {
                  name: "--group",
                  description: "Specify the group to grant the user access to",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--role",
                  description:
                    "Specify the user's role as a member or manager. Default: member",
                  args: {
                    name: "string",
                    suggestions: ["member", "manager"],
                  },
                },
                {
                  name: "--user",
                  description: "Specify the user to grant group access to",
                  args: {
                    name: "string",
                  },
                },
              ],
            },
            {
              name: "revoke",
              description: "Revoke a user's access to a group",
              options: [
                {
                  name: "--group",
                  description: "Specify the group to remove the user from",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--user",
                  description: "Specify the user to remove from the group",
                  args: {
                    name: "string",
                  },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "Retrieve users that belong to a group",
              args: {
                name: "group",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a group",
          options: [
            {
              name: "--description",
              description: "Set the group's description",
              args: {
                name: "string",
              },
            },
          ],
          args: {
            name: "name",
          },
        },
        {
          name: "get",
          description: "Get details about a group",
          args: objectArg("groupName | groupID"),
        },
        {
          name: "edit",
          description: "Edit a group's name or description",
          options: [
            {
              name: "--description",
              description: "Change the group's description",
              args: {
                name: "description",
              },
            },
            {
              name: "--name",
              description: "Change the group's name",
              args: {
                name: "name",
              },
            },
          ],
          args: objectArg("groupName | groupID"),
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Remove a group",
          args: objectArg("groupName | groupID"),
        },
        {
          name: ["list", "ls"],
          description: "List groups",
          options: [
            {
              name: "--user",
              description: "List groups that a user belongs to",
              args: {
                name: "user",
              },
            },
            {
              name: "--vault",
              description: "List groups that have direct access to a vault",
              args: {
                name: "vault",
              },
            },
          ],
        },
      ],
    },
    {
      name: "item",
      description:
        "Perform CRUD operations on the 1Password items in your vaults",
      icon,
      subcommands: [
        {
          name: "template",
          description: "Manage templates",
          icon: "📕",
          subcommands: [
            {
              name: "get",
              description: "Return a template for an item type",
              options: [
                fileModeOption,
                forceOption(),
                outFileOption("Write the template to a file instead of stdout"),
              ],
              args: {
                name: "category",
                isOptional: true,
                suggestions: [...itemCategories, stdinSuggestion],
              },
            },
            {
              name: ["list", "ls"],
              description: "Get a list of templates",
            },
          ],
        },
        {
          name: "create",
          description: "Create an item",
          icon: "🪄",
          options: [
            {
              name: "--category",
              description: "Set the item's category",
              args: {
                name: "category",
                suggestions: itemCategories,
              },
            },
            {
              name: "--dry-run",
              description:
                "Test the command and output a preview of the resulting item",
            },
            {
              name: "--favorite",
              description: "Add item to favorites",
            },
            generatePasswordOption(
              "Add a randomly-generated password to a Login or Password item"
            ),
            revealOption,
            {
              name: "--ssh-generate-key",
              description:
                "The type of SSH key to create: Ed25519 or RSA. For RSA, specify 2048, 3072, or 4096 (default) bits (default Ed25519)",
              args: {
                name: "type",
                suggestions: [
                  "ed25519",
                  "rsa",
                  "rsa2048",
                  "rsa3072",
                  "rsa4096",
                ],
              },
            },
            {
              name: "--tags",
              description:
                "Set the tags to the specified (comma-separated) values",
              args: {
                name: "tags",
              },
            },
            {
              name: "--template",
              description: "Specify the filepath to read an item template from",
              args: {
                name: "string",
                template: "filepaths",
              },
            },
            {
              name: "--title",
              description: "Set the item's title",
              args: {
                name: "title",
              },
            },
            {
              name: "--url",
              description:
                "Set the website where 1Password suggests and fills a Login, Password, or API Credential item",
              args: {
                name: "URL",
              },
            },
            vaultOption("Save the item in this vault. Default: Private"),
          ],
          args: {
            name: "assignment",
            isOptional: true,
            isVariadic: true,
            suggestions: [
              {
                name: "-",
                description: "Read the item template from stdin",
                hidden: true,
              },
            ],
          },
        },
        {
          name: "get",
          description: "Get an item's details",
          icon: "📑",
          options: [
            {
              name: "--fields",
              description:
                "Return data from specific fields. Use 'label=' to get the field by name or 'type=' to filter fields by type. Specify multiple in a comma-separated list",
              isRepeatable: true,
              args: {
                name: "fields",
              },
            },
            includeArchiveOption("items"),
            {
              name: "--otp",
              description: "Output the primary one-time password for this item",
            },
            revealOption,
            {
              name: "--share-link",
              description: "Get a shareable link for the item",
            },
            vaultOption("Look for the item in this vault"),
          ],
          args: objectArg("itemName | itemID | shareLink"),
        },
        {
          name: "edit",
          description: "Edit an item's details",
          icon: "🔏",
          options: [
            {
              name: "--dry-run",
              description:
                "Perform a dry run of the command and output a preview of the resulting item",
            },
            {
              name: "--favorite",
              description:
                "Whether this item is a favorite item. Options: true, false",
              requiresSeparator: true,
              args: {
                name: "true|false",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            generatePasswordOption(
              "Give the item a randomly generated password"
            ),
            revealOption,
            {
              name: "--tags",
              description:
                "Set the tags to the specified (comma-separated) values. An empty value will remove all tags",
              args: {
                name: "tags",
              },
            },
            {
              name: "--template",
              description: "Specify the filepath to read an item template from",
              args: {
                name: "string",
                template: "filepaths",
              },
            },
            {
              name: "--title",
              description: "Set the item's title",
              args: {
                name: "title",
              },
            },
            {
              name: "--url",
              description:
                "Set the website where 1Password suggests and fills a Login, Password, or API Credential item",
              args: {
                name: "URL",
              },
            },
            vaultOption("Edit the item in this vault"),
          ],
          args: [
            {
              name: "itemName | itemID | shareLink",
            },
            {
              name: "assignment",
              isOptional: true,
              isVariadic: true,
            },
          ],
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete or archive an item",
          icon: "🗑️",
          options: [
            {
              name: "--archive",
              description: "Move the item to the Archive",
            },
            vaultOption("Look for the item in this vault"),
          ],
          args: objectArg("itemName | itemID | shareLink"),
        },
        {
          name: ["list", "ls"],
          description: "List items",
          icon: "📖",
          options: [
            {
              name: "--categories",
              description:
                "Only list items in these categories (comma-separated)",
              args: {
                name: "categories",
              },
            },
            {
              name: "--favorite",
              description: "Only list favorite items",
            },
            includeArchiveOption("items"),
            {
              name: "--long",
              description: "Output a more detailed item list",
            },
            {
              name: "--tags",
              description: "Only list items with these tags (comma-separated)",
              args: {
                name: "tags",
              },
            },
            vaultOption("Only list items in this vault"),
          ],
        },
        {
          name: "move",
          description: "Move an item between vaults",
          options: [
            {
              name: "--current-vault",
              description: "Vault where the item is currently saved",
              args: {
                name: "string",
              },
            },
            {
              name: "--destination-vault",
              description: "The vault you want to move the item to",
              args: {
                name: "string",
              },
            },
            revealOption,
          ],
          args: objectArg("itemName | itemID | shareLink"),
        },
        {
          name: "share",
          description: "Share an item",
          icon: "👥",
          options: [
            {
              name: "--emails",
              description: "Email addresses to share with",
              isRepeatable: true,
              args: {
                name: "strings",
              },
            },
            expiresInOption(
              "Expire link after the duration specified in (s)econds, (m)inutes, (h)ours, (d)ays, and/or (w)eeks (default 7d)"
            ),
            vaultOption("Look for the item in this vault"),
            {
              name: "--view-once",
              description: "Expire link after a single view",
            },
          ],
          args: {
            name: "itemName | itemID",
          },
        },
      ],
    },
    {
      name: "plugin",
      description:
        "Manage the shell plugins you use to authenticate third-party CLIs",
      icon,
      subcommands: [
        {
          name: "clear",
          description: "Clear an existing shell plugin configuration",
          options: [
            {
              name: "--all",
              description:
                "Clear all configurations for this plugin that apply to this directory and/or terminal session, including the global default",
            },
            forceOption("Apply immediately without asking for confirmation"),
          ],
          args: {
            name: "plugin-executable",
          },
        },
        {
          name: "init",
          description:
            "Choose a shell plugin to install and configure your default credentials",
          args: {
            name: "plugin-executable",
            isOptional: true,
          },
        },
        {
          name: "inspect",
          description: "Inspect your existing shell plugin configurations",
          args: {
            name: "plugin-executable",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List all available shell plugins",
        },
        {
          name: "run",
          description: "Provision credentials from 1Password and run a command",
          args: {
            name: "command",
            isCommand: true,
          },
        },
      ],
    },
    {
      name: "service-account",
      description: "Manage service accounts",
      icon,
      subcommands: [
        {
          name: "create",
          description:
            "Create a service account to gain programmatic access to your secrets",
          options: [
            {
              name: "--can-create-vaults",
              description: "Allow the service account to create new vaults",
            },
            expiresInOption(
              "Set how long the service account is valid for in (s)econds, (m)inutes, (h)ours, (d)ays, or (w)eeks"
            ),
            {
              name: "--raw",
              description: "Only return the service account token",
            },
            {
              name: "--vault",
              description:
                "Give access to this vault with a set of permissions. Has syntax <vault-name>:<permission>[,<permission>] where a permission is read_items, write_items or share_items",
              isRepeatable: true,
              args: {
                name: "stringArray",
              },
            },
          ],
          args: {
            name: "serviceAccountName",
          },
        },
        {
          name: "ratelimit",
          description:
            "Retrieve hourly and daily rate limit usage for a service account",
          args: {
            name: "serviceAccountName | serviceAccountID",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "user",
      description: "Manage users within this 1Password account",
      icon,
      subcommands: [
        {
          name: "provision",
          description: "Provision a user in the authenticated account",
          options: [
            {
              name: "--email",
              description: "Provide the user's email address",
              args: {
                name: "string",
              },
            },
            {
              name: "--language",
              description: "Provide the user's account language (default en)",
              args: {
                name: "string",
              },
            },
            {
              name: "--name",
              description: "Provide the user's name",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "confirm",
          description: "Confirm a user",
          options: [
            {
              name: "--all",
              description: "Confirm all unconfirmed users",
            },
          ],
          args: userArg,
        },
        {
          name: "get",
          description: "Get details about a user",
          options: [
            {
              name: "--fingerprint",
              description: "Get the user's public key fingerprint",
            },
            {
              name: "--me",
              description: "Get the authenticated user's details",
            },
            {
              name: "--public-key",
              description: "Get the user's public key",
            },
          ],
          args: userArg,
        },
        {
          name: "edit",
          description: "Edit a user's name or Travel Mode status",
          options: [
            {
              name: "--name",
              description: "Set the user's name",
              args: {
                name: "string",
              },
            },
            travelModeOption("user"),
          ],
          args: userArg,
        },
        {
          name: "suspend",
          description: "Suspend a user",
          options: [
            {
              name: "--deauthorize-devices-after",
              description:
                "Deauthorize the user's devices after a time (rounded down to seconds)",
              args: {
                name: "duration",
              },
            },
          ],
          args: userArg,
        },
        {
          name: "reactivate",
          description: "Reactivate a suspended user",
          args: userArg,
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Remove a user and all their data from the account",
          args: userArg,
        },
        {
          name: ["list", "ls"],
          description: "List users",
          options: [
            {
              name: "--group",
              description: "List users who belong to a group",
              args: {
                name: "group",
              },
            },
            {
              name: "--vault",
              description: "List users who have direct access to vault",
              args: {
                name: "vault",
              },
            },
          ],
        },
      ],
    },
    {
      name: "vault",
      description:
        "Manage permissions and perform CRUD operations on your 1Password vaults",
      icon,
      subcommands: [
        {
          name: "group",
          description: "Manage group vault access",
          icon: "👥",
          subcommands: [
            ...vaultAccessSubcommands(
              "group",
              "Grant a group permissions to a vault",
              "The vault to grant group permissions to"
            ),
            {
              name: ["list", "ls"],
              description:
                "List all the groups that have access to the given vault",
              args: objectArg("vault"),
            },
          ],
        },
        {
          name: "user",
          description: "Manage user vault access",
          icon: "📈",
          subcommands: [
            ...vaultAccessSubcommands(
              "user",
              "Grant a user access to a vault",
              "The vault to grant access to"
            ),
            {
              name: ["list", "ls"],
              description:
                "List all users with access to the vault and their permissions",
              args: {
                name: "vault",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new vault",
          icon: "🪄",
          options: [
            {
              name: "--allow-admins-to-manage",
              description:
                "Set whether administrators can manage the vault. If not provided, the default policy for the account applies",
              args: {
                name: "true|false",
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--description",
              description: "Set the vault's description",
              args: {
                name: "description",
              },
            },
            {
              name: "--icon",
              description: "Set the vault icon",
              args: {
                name: "string",
                suggestions: vaultIcons,
              },
            },
          ],
          args: {
            name: "name",
          },
        },
        {
          name: "get",
          description: "Get details about a vault",
          icon: "📑",
          args: objectArg("vaultName | vaultID"),
        },
        {
          name: "edit",
          description:
            "Edit a vault's name, description, icon or Travel Mode status",
          icon: "🔏",
          options: [
            {
              name: "--description",
              description: "Change the vault's description",
              args: {
                name: "description",
              },
            },
            {
              name: "--icon",
              description: "Change the vault's icon",
              args: {
                name: "icon",
                suggestions: vaultIcons,
              },
            },
            {
              name: "--name",
              description: "Change the vault's name",
              args: {
                name: "name",
              },
            },
            travelModeOption("vault"),
          ],
          args: objectArg("vaultName | vaultID"),
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Remove a vault",
          icon: "🗑️",
          args: objectArg("vaultName | vaultID"),
        },
        {
          name: ["list", "ls"],
          description: "List all vaults in the account",
          icon: "📖",
          options: [
            {
              name: "--group",
              description: "List vaults a group has access to",
              args: {
                name: "string",
              },
            },
            {
              name: "--permission",
              description:
                "List only vaults that the specified user/group has this permission for",
              args: {
                name: "permissions",
                suggestions: vaultPermissions,
              },
            },
            {
              name: "--user",
              description: "List vaults that a given user has access to",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion information",
      icon,
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: "inject",
      description: "Inject secrets into a config file",
      icon,
      options: [
        fileModeOption,
        forceOption(),
        {
          name: ["-i", "--in-file"],
          description: "The filename of a template file to inject",
          args: {
            name: "string",
            template: "filepaths",
          },
        },
        outFileOption(
          "Write the injected template to a file instead of stdout"
        ),
      ],
    },
    {
      name: "read",
      description: "Read a secret reference",
      icon,
      options: [
        fileModeOption,
        forceOption(),
        {
          name: ["-n", "--no-newline"],
          description: "Do not print a new line after the secret",
        },
        outFileOption("Write the secret to a file instead of stdout"),
      ],
      args: {
        name: "reference",
      },
    },
    {
      name: "run",
      description: "Pass secrets as environment variables to a process",
      icon,
      insertValue: "run -- {cursor}",
      args: {
        name: "command",
        isCommand: true,
      },
      options: [
        {
          name: "--env-file",
          description:
            "Enable Dotenv integration with specific Dotenv files to parse. For example: --env-file=.env",
          requiresSeparator: true,
          isRepeatable: true,
          args: {
            name: "stringArray",
            template: "filepaths",
          },
        },
        {
          name: "--environment",
          description:
            "Load environment variables from one or more 1Password Environments by ID. If the same variable exists in multiple Environments, the last one takes precedence",
          isRepeatable: true,
          args: {
            name: "strings",
          },
        },
        {
          name: "--no-masking",
          description: "Disable masking of secrets on stdout and stderr",
        },
      ],
    },
    {
      name: "signin",
      description: "Sign in to a 1Password account",
      icon,
      options: [
        forceOption("Ignore warnings and print raw output from this command"),
        {
          name: "--raw",
          description: "Only return the session token",
        },
      ],
    },
    {
      name: "signout",
      description: "Sign out of a 1Password account",
      icon,
      options: [
        {
          name: "--all",
          description: "Sign out of all signed-in accounts",
        },
        {
          name: "--forget",
          description:
            "Remove the details for a 1Password account from this device",
        },
      ],
    },
    {
      name: "update",
      description: "Check for and download updates",
      icon,
      options: [
        {
          name: "--channel",
          description: "Look for updates from a specific channel",
          args: {
            name: "string",
            suggestions: ["stable", "beta"],
          },
        },
        {
          name: "--directory",
          description: "Download the update to this path",
          args: {
            name: "path",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "whoami",
      description: "Get information about a signed-in account",
      icon,
    },
  ],
  options: [
    {
      name: "--account",
      description:
        "Select the account to execute the command by account shorthand, sign-in address, account ID, or user ID. For a list of available accounts, run 'op account list'. Can be set as the OP_ACCOUNT environment variable",
      isPersistent: true,
      args: {
        name: "account",
        generators: suggestAccounts,
      },
    },
    {
      name: "--cache",
      description:
        "Store and use cached information. Caching is enabled by default on UNIX-like systems and not available on Windows. Options: true, false. Can also be set with the OP_CACHE environment variable",
      isPersistent: true,
      requiresSeparator: true,
      args: {
        name: "true|false",
        isOptional: true,
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--config",
      description: "Use this configuration directory",
      isPersistent: true,
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--debug",
      description:
        "Enable debug mode. Can also be enabled by setting the OP_DEBUG environment variable to true",
      isPersistent: true,
    },
    {
      name: "--encoding",
      description:
        "Use this character encoding type. Default: UTF-8. Supported: SHIFT_JIS, gbk",
      isPersistent: true,
      args: {
        name: "type",
        suggestions: ["UTF-8", "SHIFT_JIS", "gbk"],
      },
    },
    {
      name: "--format",
      description:
        "Use this output format. Can be 'human-readable' or 'json'. Can be set as the OP_FORMAT environment variable. (default \"human-readable\")",
      isPersistent: true,
      args: {
        name: "string",
        suggestions: ["human-readable", "json"],
      },
    },
    {
      name: ["-h", "--help"],
      description: "Get help for op",
      isPersistent: true,
    },
    {
      name: "--iso-timestamps",
      description:
        "Format timestamps according to ISO 8601 / RFC 3339. Can be set as the OP_ISO_TIMESTAMPS environment variable",
      isPersistent: true,
    },
    {
      name: "--no-color",
      isPersistent: true,
      description: "Print output without color",
    },
    {
      name: "--session",
      description:
        "Authenticate with this session token. 1Password CLI outputs session tokens for successful 'op signin' commands when 1Password app integration is not enabled",
      isPersistent: true,
      args: {
        name: "token",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Version for op",
    },
  ],
};

export default spec;
