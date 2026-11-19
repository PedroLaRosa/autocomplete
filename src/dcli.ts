// Dashlane CLI v6.2647.2 (GitHub release Dashlane/dashlane-cli, 2026-11-18). Source: src/commands/** at v6.2647.2
type Device = {
  deviceId: string;
  deviceName: string;
  devicePlatform: string;
  creationDateUnix: number;
  lastUpdateDateUnix: number;
  lastActivityDateUnix: number;
  temporary: boolean;
  isBucketOwner: boolean;
  isCurrentDevice: boolean;
};

type PublicAPIKey = {
  accessKey: string;
  description: string;
  creationDateUnix: number;
  valid: boolean;
};

function unixToDateString(unix: number) {
  return new Date(unix * 1000).toLocaleString();
}

const helpCommand: Fig.Subcommand = {
  name: "help",
  description: "Display help for command",
  priority: 49,
  args: { name: "command", isOptional: true, template: "help" },
};

const deviceGenerator: Fig.Generator = {
  script: ["dcli", "devices", "list", "--json"],
  postProcess: function (out) {
    try {
      const devices = JSON.parse(out) as Device[];
      devices.sort((a, b) => b.lastActivityDateUnix - a.lastActivityDateUnix);

      return devices.map((device) => ({
        name: device.deviceName,
        description: `Last activity: ${unixToDateString(
          device.lastActivityDateUnix
        )}`,
        insertValue: device.deviceId,
      }));
    } catch (e) {
      return [];
    }
  },
};

const publicAPIKeyGenerator: Fig.Generator = {
  script: ["dcli", "team", "public-api", "list-keys", "--json"],
  postProcess: function (out) {
    try {
      const { publicAPIKeys } = JSON.parse(out) as {
        publicAPIKeys: PublicAPIKey[];
      };
      return publicAPIKeys
        .filter((key) => key.valid)
        .sort((a, b) => b.creationDateUnix - a.creationDateUnix)
        .map((key) => ({
          name: key.accessKey,
          // creationDateUnix is in ms here, unlike devices
          description: `${key.description} (created ${new Date(
            key.creationDateUnix
          ).toLocaleString()})`,
        }));
    } catch (e) {
      return [];
    }
  },
};

const filtersArg = (what: string, defaults: string): Fig.Arg => ({
  name: "filters",
  description: `Filter ${what} based on any parameter using <param>=<value>; if <param> is not specified in the filter, will default to ${defaults}`,
  isOptional: true,
  isVariadic: true,
});

const outputOption = (what: string): Fig.Option => ({
  name: ["-o", "--output"],
  description: `How to print the ${what}. The JSON option outputs all the matching ${what}`,
  args: { name: "type", suggestions: ["text", "json"], default: "text" },
});

const completionSpec: Fig.Spec = {
  name: "dcli",
  description: "Dashlane CLI",
  icon: "https://avatars.githubusercontent.com/u/2639205?s=200&v=4",
  subcommands: [
    {
      name: ["sync", "s"],
      description: "Manually synchronize the local vault with Dashlane",
    },
    {
      name: "status",
      description: "Get the status of the CLI (logged in, locked, etc.)",
    },
    {
      name: "read",
      description:
        "Retrieve a secret from the local vault via its path (using <id> is much more efficient)",
      args: {
        name: "path",
        description:
          "Path to the secret (dl://<title>/<field> or dl://<id>/<field>)",
      },
    },
    {
      name: "exec",
      description:
        "Execute a command with secrets injected into the environment variables (-- <command>)",
      insertValue: "exec --",
      args: {
        name: "command",
        isCommand: true,
      },
    },
    {
      name: "inject",
      description:
        "Inject secrets into a templated string or file (uses stdin and stdout by default)",
      options: [
        {
          name: ["-i", "--in"],
          description: "Input file of a template to inject the credential into",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-o", "--out"],
          description: "Output file to write the injected template to",
          args: { name: "file", template: "filepaths" },
        },
      ],
    },
    {
      name: ["password", "p"],
      description:
        "Retrieve a password from the local vault and copy it to the clipboard",
      options: [
        {
          name: ["-o", "--output"],
          description:
            "How to print the passwords. The JSON option outputs all the matching credentials",
          args: {
            name: "type",
            suggestions: ["clipboard", "console", "json"],
            default: "clipboard",
          },
        },
        {
          name: ["-f", "--field"],
          description:
            "What type of field to retrieve (login, email, password, otp)",
          args: {
            name: "type",
            suggestions: ["login", "email", "otp", "password"],
            default: "password",
          },
        },
      ],
      args: filtersArg("credentials", "url and title"),
    },
    {
      name: ["note", "n"],
      description: "Retrieve a secure note from the local vault and open it",
      options: [outputOption("notes")],
      args: filtersArg("notes", "title only"),
    },
    {
      name: "secret",
      description: "Retrieve a secret from the local vault and open it",
      options: [outputOption("secrets")],
      args: filtersArg("secrets", "title only"),
    },
    {
      name: "id",
      description:
        "Retrieve a personal ID item (passport, ID card, identity, driver license, tax number, ...) from the local vault",
      options: [outputOption("IDs")],
      args: filtersArg("items", "type and name fields"),
    },
    {
      name: ["accounts", "a"],
      description: "Manage your accounts connected to the CLI",
      subcommands: [
        {
          name: "whoami",
          description: "Prints the login email of the account currently in use",
        },
        helpCommand,
      ],
    },
    {
      name: ["devices", "d"],
      description: "Operations on devices",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all registered devices that can access your account",
          options: [{ name: "--json", description: "Output in JSON format" }],
        },
        {
          name: "remove",
          description:
            'De-registers a list of devices. De-registering the CLI will implies doing a "dcli logout"',
          options: [
            {
              name: "--all",
              description: "Remove all devices including this one (dangerous)",
              isDangerous: true,
            },
            {
              name: "--others",
              description: "Remove all other devices",
              isDangerous: true,
            },
          ],
          args: {
            name: "device ids",
            description: "Ids of the devices to remove",
            isOptional: true,
            isVariadic: true,
            generators: deviceGenerator,
          },
        },
        {
          name: "register",
          description:
            "Registers a new device to be used in non-interactive mode",
          options: [{ name: "--json", description: "Output in JSON format" }],
          args: {
            name: "device name",
            description: "Name of the device to register",
          },
        },
        helpCommand,
      ],
    },
    {
      name: ["team", "t"],
      description: "Team related commands",
      subcommands: [
        {
          name: ["credentials", "c"],
          description: "Team credentials operations",
          // Subcommands now only print a notice pointing to the Admin Console
          deprecated: {
            description:
              "Create CLI keys in the Admin Console (Integrations > Developer Access)",
          },
          subcommands: [
            {
              name: "generate",
              description: "Generate new team credentials",
            },
            {
              name: "list",
              description: "List all team credentials",
              options: [
                { name: "--json", description: "Output in JSON format" },
              ],
            },
            {
              name: "revoke",
              description: "Revoke credentials by access key",
            },
            helpCommand,
          ],
        },
        {
          name: "public-api",
          description: "Public API operations",
          subcommands: [
            {
              name: "create-key",
              description: "Generate a new Public API key (Bearer token)",
              args: { name: "description", description: "Description" },
            },
            {
              name: "list-keys",
              description: "List all Public API keys",
              options: [
                { name: "--json", description: "Output in JSON format" },
              ],
            },
            {
              name: "revoke-key",
              description: "Revoke a Public API key",
              isDangerous: true,
              args: {
                name: "accessKey",
                description: "Access key",
                generators: publicAPIKeyGenerator,
              },
            },
            helpCommand,
          ],
        },
        {
          name: ["members", "m"],
          description: "List team members",
          options: [
            { name: "--csv", description: "Output in CSV format" },
            {
              name: "--human-readable",
              description: "Output dates in human readable format",
            },
          ],
          args: [
            { name: "page", description: "Page number", isOptional: true },
            {
              name: "limit",
              description: "Limit of members per page",
              isOptional: true,
            },
          ],
        },
        {
          name: ["logs", "l"],
          description: "List audit logs",
          options: [
            {
              name: "--start",
              description: "Start timestamp in ms",
              args: { name: "start", default: "0" },
            },
            {
              name: "--end",
              description:
                'End timestamp in ms (use "now" to get the current timestamp)',
              args: { name: "end", default: "now" },
            },
            { name: "--csv", description: "Output in CSV format" },
            {
              name: "--human-readable",
              description: "Output dates in human readable format",
            },
          ],
        },
        {
          name: ["propose-members", "pm"],
          description: "Propose logins to join the team",
          options: [
            {
              name: "--skip-account-creation-required-alerts",
              description:
                "Do not alert about members requiring account creation",
            },
            {
              name: "--skip-proposals",
              description: "Do not send proposal notifications",
            },
            {
              name: "--skip-removals",
              description: "Do not send removal notifications",
            },
            {
              name: "--skip-reproposals",
              description: "Do not send reproposal notifications",
            },
            {
              name: "--sender-email",
              description:
                "Email address to use as the sender of notifications",
              args: { name: "senderEmail" },
            },
          ],
          args: {
            name: "logins",
            description: "Logins to be proposed to the team",
            isVariadic: true,
          },
        },
        {
          name: ["remove-members", "rm"],
          description: "Remove members from the team",
          isDangerous: true,
          args: {
            name: "logins",
            description: "Logins to remove from the team",
            isVariadic: true,
          },
        },
        {
          name: ["report", "r"],
          description: "Get team report",
          args: {
            name: "days",
            description: "Number of days in history",
            isOptional: true,
          },
        },
        {
          name: ["dark-web-insights", "dwi"],
          description:
            "Get Dark Web Insights detailed report for your team's domain (results are paginated)",
          options: [
            {
              name: "--order-by",
              description: "Order results by",
              args: {
                name: "orderBy",
                suggestions: [
                  "DEFAULT",
                  "UNSEEN",
                  "TEAM_MEMBERS",
                  "PUBLISH_DATE",
                ],
                default: "DEFAULT",
              },
            },
            {
              name: "--count",
              description: "Results count per page",
              args: { name: "count", default: "100" },
            },
            {
              name: "--offset",
              description: "Page offset",
              args: { name: "offset", default: "0" },
            },
          ],
          args: { name: "domain", description: "Domain name" },
        },
        {
          name: "mcp",
          description: "Start the MCP server",
        },
        helpCommand,
      ],
    },
    {
      name: ["configure", "c"],
      description: "Configure the CLI",
      subcommands: [
        {
          name: "disable-auto-sync",
          description:
            "Disable automatic synchronization which is done once per hour (default: false)",
          args: { name: "boolean", suggestions: ["true", "false"] },
        },
        {
          name: "save-master-password",
          description:
            "Should the encrypted master password be saved and the OS keychain be used (default: true)",
          args: { name: "boolean", suggestions: ["true", "false"] },
        },
        {
          name: "user-presence",
          description:
            "Configure the method used to verify user presence (prevent access to vault without selected method)",
          options: [
            {
              name: ["-m", "--method"],
              description: "Method used to verify user presence",
              isRequired: true,
              args: { name: "type", suggestions: ["none", "biometrics"] },
            },
          ],
        },
        helpCommand,
      ],
    },
    {
      name: "backup",
      description:
        "Backup your local vault (will use the current directory by default)",
      options: [
        {
          name: "--directory",
          description: 'Output directory of the backup ("." by default)',
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--filename",
          description:
            'Filename of the backup ("dashlane-backup-<unix_timestamp>.db by default")',
          args: { name: "filename" },
        },
      ],
    },
    {
      name: "lock",
      description:
        "Lock the vault, next commands will request the master password to unlock it",
    },
    {
      name: "logout",
      description: "Logout and clean your local database and OS keychain",
      options: [
        {
          name: "--ignore-revocation",
          description:
            "Device credentials won't be revoked on Dashlane's servers",
        },
      ],
    },
    helpCommand,
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      priority: 49,
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Output the version number",
    },
    {
      name: "--debug",
      description: "Print debug messages",
      priority: 48,
      isPersistent: true,
    },
  ],
};
export default completionSpec;
