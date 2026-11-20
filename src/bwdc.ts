// Bitwarden Directory Connector CLI (bwdc) v2026.10.0 (GitHub tag v2026.10.0 of bitwarden/directory-connector, latest release, 2026-11-19). Source: commander definitions in src-cli/program.ts
// and src-cli/commands/config.command.ts at that tag. Read from source, the CLI binary was not executed.
const bwLogo32x32 = "https://bitwarden.com/images/icon_32x32.png";

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Display help for command",
  priority: 49,
};

// Secrets can be given as the value or read from an environment variable / file
const secretArg = (name: string, description: string): Fig.Arg => ({
  name,
  description,
  isOptional: true,
});

const completionSpec: Fig.Spec = {
  name: "bwdc",
  description: "Bitwarden Directory Connector",
  subcommands: [
    {
      name: "login",
      icon: bwLogo32x32,
      description: "Log into an organization account",
      args: [
        {
          name: "client_id",
          description: "Client_id part of your organization's API key",
          isOptional: true,
        },
        {
          name: "client_secret",
          description: "Client_secret part of your organization's API key",
          isOptional: true,
        },
      ],
      options: [helpOption],
    },
    {
      name: "logout",
      icon: bwLogo32x32,
      description: "Log out of the current user account",
      options: [helpOption],
    },
    {
      name: "test",
      icon: bwLogo32x32,
      description: "Test a simulated sync",
      options: [
        {
          name: ["-l", "--last"],
          description: "Since the last successful sync",
        },
        helpOption,
      ],
    },
    {
      name: "sync",
      icon: bwLogo32x32,
      description: "Sync the directory",
      options: [helpOption],
    },
    {
      name: "last-sync",
      icon: bwLogo32x32,
      description: "Get the last successful sync date",
      args: {
        name: "object",
        description:
          "Object to get the last sync date for. Returns an empty response if no sync has been performed for it",
        suggestions: ["groups", "users"],
      },
      options: [helpOption],
    },
    {
      name: "config",
      icon: bwLogo32x32,
      description: "Configure settings",
      subcommands: [
        {
          name: "server",
          description:
            "URL of your self-hosted installation (e.g. https://my.url.com) or https://vault.bitwarden.eu",
          args: {
            name: "server-url",
            description: "Specify the server URL",
          },
        },
        {
          name: "directory",
          description: "Type of directory to use",
          args: {
            name: "directory-type",
            description: `Active Directory/LDAP : 0
Entra ID (Azure Active Directory) : 1
Google Workspace/GSuite : 2
Okta : 3
OneLogin : 4`,
            suggestions: [
              { name: "0", description: "Active Directory/LDAP" },
              { name: "1", description: "Entra ID (Azure Active Directory)" },
              { name: "2", description: "Google Workspace/GSuite" },
              { name: "3", description: "Okta" },
              { name: "4", description: "OneLogin" },
            ],
          },
        },
        {
          name: "ldap.password",
          description: "Password for connection to the LDAP server",
          args: secretArg("password", "Specify the password"),
        },
        {
          name: "entra.key",
          description: "Entra ID secret key",
          args: secretArg("key", "Specify the Entra ID secret key"),
        },
        {
          name: "azure.key",
          description:
            "Entra ID secret key (legacy name of entra.key, kept for backwards compatibility)",
          deprecated: true,
          args: secretArg("key", "Specify the Entra ID secret key"),
        },
        {
          name: "gsuite.key",
          description: "Google Workspace/GSuite private key",
          args: secretArg(
            "key",
            "Specify the Google Workspace/GSuite private key"
          ),
        },
        {
          name: "okta.token",
          description: "Okta token",
          args: secretArg("token", "Specify the Okta token"),
        },
        {
          name: "onelogin.secret",
          description: "OneLogin client secret",
          args: secretArg("secret", "Specify the OneLogin client secret"),
        },
        {
          name: "sync.inviteUsersAfterProvisioning",
          description: "Send invitation emails to synced users",
          args: {
            name: "value",
            description: "Whether to send invitation emails",
            suggestions: ["true", "false"],
          },
        },
      ],
      options: [
        {
          name: "--secretenv",
          description: "Read secret from the named environment variable",
          isPersistent: true,
          exclusiveOn: ["--secretfile"],
          args: {
            name: "variable-name",
            description: "Name of the environment variable holding the secret",
          },
        },
        {
          name: "--secretfile",
          description: "Read secret from first line of the named file",
          isPersistent: true,
          exclusiveOn: ["--secretenv"],
          args: {
            name: "filename",
            description: "File containing the secret on its first line",
            template: "filepaths",
          },
        },
        helpOption,
      ],
    },
    {
      name: "data-file",
      icon: bwLogo32x32,
      description: "Path to data.json database file",
      options: [helpOption],
    },
    {
      name: "clear-cache",
      icon: bwLogo32x32,
      description: "Clear the sync cache",
      options: [helpOption],
    },
    {
      name: "update",
      icon: bwLogo32x32,
      description: "Check for updates",
      options: [helpOption],
    },
    {
      name: "help",
      icon: bwLogo32x32,
      description: "Display help for command",
      priority: 49,
      args: {
        name: "command",
        isOptional: true,
        suggestions: [
          "login",
          "logout",
          "test",
          "sync",
          "last-sync",
          "config",
          "data-file",
          "clear-cache",
          "update",
        ],
      },
    },
  ],
  options: [
    {
      name: "--pretty",
      description: "Format output. JSON is tabbed with two spaces",
      isPersistent: true,
    },
    {
      name: "--raw",
      description: "Return raw output instead of a descriptive message",
      isPersistent: true,
    },
    {
      name: "--response",
      description: "Return a JSON formatted version of response output",
      isPersistent: true,
    },
    {
      name: "--cleanexit",
      description:
        "Exit with a success exit code (0) unless an error is thrown",
      isPersistent: true,
    },
    {
      name: "--quiet",
      description: "Don't return anything to stdout",
      isPersistent: true,
    },
    {
      name: "--nointeraction",
      description: "Do not prompt for interactive user input",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Output the version number",
    },
    helpOption,
  ],
};
export default completionSpec;
