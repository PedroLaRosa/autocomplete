// aws-vault v7.18.1 (ByteNess/aws-vault GitHub release, 2026-11-17). Source:
// kingpin definitions in main.go and cli/*.go at tag v7.18.1

const profilesGenerator: Fig.Generator = {
  script: ["aws-vault", "list", "--profiles"],
  postProcess(out) {
    return out
      .split("\n")
      .filter(Boolean)
      .map((name) => ({ name }));
  },
};

const profileArg: Fig.Arg = {
  name: "profile",
  generators: profilesGenerator,
};

// ponytail: static list from byteness/keyring v1.16.1; the binary only accepts the ones built for this OS
const backends = [
  "wincred",
  "winhello",
  "keychain",
  "secret-service",
  "kwallet",
  "keyctl",
  "pass",
  "passage",
  "file",
  "op-connect",
  "op",
  "op-desktop",
  "proton-pass",
  "oo7",
];

const backendArg: Fig.Arg = { name: "backend", suggestions: backends };
const durationArg: Fig.Arg = { name: "duration" };
const dirArg: Fig.Arg = { name: "dir", template: "folders" };
const fileArg: Fig.Arg = { name: "file", template: "filepaths" };

const durationOption: Fig.Option = {
  name: ["-d", "--duration"],
  description:
    "Duration of the temporary or assume-role session. Defaults to 1h",
  args: durationArg,
};

const noSessionOption: Fig.Option = {
  name: ["-n", "--no-session"],
  description: "Skip creating STS session with GetSessionToken",
};

const regionOption: Fig.Option = {
  name: "--region",
  description: "The AWS region",
  args: { name: "region" },
};

const mfaTokenOption: Fig.Option = {
  name: ["-t", "--mfa-token"],
  description: "The MFA token to use",
  args: { name: "token" },
};

const deviceCodeOption: Fig.Option = {
  name: "--device-code",
  description:
    "Use the device-code OAuth2 flow for SSO instead of the default PKCE browser flow",
};

const browserArg: Fig.Arg = { name: "browser" };

// Shared by exec and export
const credentialOptions: Fig.Option[] = [
  durationOption,
  noSessionOption,
  regionOption,
  mfaTokenOption,
  {
    name: "--stdout",
    description:
      "Print the SSO link to the terminal without automatically opening the browser",
  },
  deviceCodeOption,
  {
    name: "--browser",
    description:
      "Browser to open the SSO sign-in page in instead of the default browser",
    args: browserArg,
  },
];

const globalOption = (
  name: string,
  description: string,
  args?: Fig.Arg
): Fig.Option => ({ name, description, args, isPersistent: true });

const subcommands: Fig.Subcommand[] = [
  {
    name: "add",
    description: "Add credentials to the secure keystore",
    args: {
      name: "profile",
      description: "The profile you want to add",
    },
    options: [
      {
        name: "--env",
        description:
          "Read the credentials from the environment (AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY)",
      },
      {
        name: "--add-config",
        description:
          "Add a profile to ~/.aws/config if one doesn't exist (default)",
      },
      {
        name: "--no-add-config",
        description: "Don't add a profile to ~/.aws/config",
      },
    ],
  },
  {
    name: ["remove", "rm"],
    description: "Remove credentials from the secure keystore",
    args: profileArg,
    options: [
      {
        name: ["-f", "--force"],
        description: "Force-remove the profile without a prompt",
      },
      {
        name: ["-s", "--sessions-only"],
        description: "Only remove sessions, leave credentials intact",
        hidden: true,
      },
    ],
  },
  {
    name: "migrate-backend",
    description: "Migrate stored credentials between keyring backends",
    options: [
      {
        name: "--from",
        description: "Source keyring backend",
        isRequired: true,
        args: backendArg,
      },
      {
        name: "--to",
        description: "Destination keyring backend",
        isRequired: true,
        args: backendArg,
      },
      {
        name: "--profile",
        description: "Migrate only this profile",
        args: profileArg,
      },
      {
        name: "--dry-run",
        description: "Show what would be migrated without writing anything",
      },
      {
        name: "--overwrite",
        description: "Overwrite destination credentials if they already exist",
      },
      {
        name: "--delete-source",
        description:
          "Delete source credentials after successful destination verification",
      },
    ],
  },
  {
    name: ["list", "ls"],
    description: "List profiles, along with their credentials and sessions",
    options: [
      {
        name: "--profiles",
        description: "Show only the profile names",
      },
      {
        name: "--sessions",
        description: "Show only the session names",
      },
      {
        name: "--credentials",
        description: "Show only the profiles with stored credential",
      },
    ],
  },
  {
    name: "rotate",
    description: "Rotate credentials",
    args: { ...profileArg, isOptional: true },
    options: [
      {
        name: ["-n", "--no-session"],
        description: "Use master credentials, no session or role used",
      },
    ],
  },
  {
    name: "exec",
    description: "Execute a command with AWS credentials",
    args: [
      {
        ...profileArg,
        description: "Defaults to $AWS_PROFILE",
        isOptional: true,
      },
      {
        name: "command",
        description: "Command to execute, defaults to $SHELL",
        isCommand: true,
        isOptional: true,
      },
    ],
    options: [
      ...credentialOptions,
      {
        name: ["-j", "--json"],
        description:
          "Output credentials in JSON that can be used by credential_process",
        hidden: true,
        deprecated: { description: "Use `aws-vault export --format=json`" },
      },
      {
        name: ["-s", "--server"],
        description: "Alias for --ecs-server",
        exclusiveOn: ["--ec2-server"],
      },
      {
        name: "--ec2-server",
        description:
          "Run a EC2 metadata server in the background for credentials",
        exclusiveOn: ["--ecs-server", "-s", "--server", "-n", "--no-session"],
      },
      {
        name: "--ecs-server",
        description:
          "Run a ECS credential server in the background for credentials (the SDK or app must support AWS_CONTAINER_CREDENTIALS_FULL_URI)",
        exclusiveOn: ["--ec2-server"],
      },
      {
        name: "--lazy",
        description: "When using --ecs-server, lazily fetch credentials",
      },
      {
        name: "--profile-env",
        description:
          "Set AWS_PROFILE instead of injecting AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY",
      },
    ],
  },
  {
    name: "export",
    description: "Export AWS credentials",
    args: { ...profileArg, isOptional: true },
    options: [
      ...credentialOptions,
      {
        name: "--format",
        description: "Format to output credentials",
        args: {
          name: "format",
          suggestions: ["env", "export-env", "json", "ini"],
          default: "env",
        },
      },
    ],
  },
  {
    name: "clear",
    description: "Clear temporary credentials from the secure keystore",
    args: { ...profileArg, isOptional: true },
  },
  {
    name: "login",
    description: "Generate a login link for the AWS Console",
    args: {
      ...profileArg,
      description: "If none given, credentials will be sourced from env vars",
      isOptional: true,
    },
    options: [
      {
        ...durationOption,
        description:
          "Duration of the assume-role or federated session. Defaults to 1h",
      },
      noSessionOption,
      {
        name: ["-a", "--auto-logout"],
        description: "Auto logout when starting a new login",
      },
      mfaTokenOption,
      {
        name: "--path",
        description: "The AWS service you would like access",
        args: { name: "path" },
      },
      regionOption,
      {
        name: ["-s", "--stdout"],
        description:
          "Print the console login URL to stdout instead of opening it in the default browser",
      },
      deviceCodeOption,
      {
        name: "--browser",
        description:
          "Browser to open the AWS Console and SSO sign-in pages in instead of the default browser",
        args: browserArg,
      },
    ],
  },
  {
    name: ["proxy", "server"],
    description: "Start a proxy for the ec2 instance role server locally",
    hidden: true,
    options: [{ name: "--stop", description: "Stop the proxy" }],
  },
  {
    name: "version",
    description: "Print the aws-vault version and build info",
  },
  {
    name: "help",
    description: "Show help about the command",
    args: {
      name: "command",
      template: "help",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "aws-vault",
  description:
    "A vault for securely storing and accessing AWS credentials in development environments",
  subcommands,
  options: [
    {
      name: "--help",
      description:
        "Show context-sensitive help (also try --help-long and --help-man)",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show application version",
    },
    globalOption("--debug", "Show debugging output"),
    globalOption("--backend", "Secret backend to use", backendArg),
    globalOption(
      "--session-backend",
      "Secret backend to use for sessions",
      backendArg
    ),
    globalOption("--prompt", "Prompt driver to use", {
      name: "driver",
      suggestions: [
        "kdialog",
        "osascript",
        "terminal",
        "wincredui",
        "ykman",
        "zenity",
      ],
    }),
    globalOption(
      "--keychain",
      "Name of macOS keychain to use, if it doesn't exist it will be created",
      { name: "name" }
    ),
    globalOption(
      "--session-keychain",
      "Name of macOS keychain to use for sessions",
      { name: "name" }
    ),
    globalOption(
      "--secret-service-collection",
      "Name of secret-service collection to use, if it doesn't exist it will be created",
      { name: "name" }
    ),
    globalOption(
      "--session-secret-service-collection",
      "Name of secret-service collection to use for sessions",
      { name: "name" }
    ),
    globalOption("--pass-dir", "Pass password store directory", dirArg),
    globalOption(
      "--session-pass-dir",
      "Pass password store directory to use for sessions",
      dirArg
    ),
    globalOption("--pass-cmd", "Name of the pass executable", {
      name: "cmd",
    }),
    globalOption(
      "--session-pass-cmd",
      "Name of the pass executable to use for sessions",
      { name: "cmd" }
    ),
    globalOption(
      "--pass-prefix",
      "Prefix to prepend to the item path stored in pass",
      { name: "prefix" }
    ),
    globalOption(
      "--session-pass-prefix",
      "Prefix to prepend to session item paths stored in pass",
      { name: "prefix" }
    ),
    globalOption(
      "--passage-identities-file",
      "Passage identities file",
      fileArg
    ),
    globalOption(
      "--session-passage-identities-file",
      "Passage identities file to use for sessions",
      fileArg
    ),
    globalOption(
      "--file-dir",
      'Directory for the "file" password store',
      dirArg
    ),
    globalOption(
      "--session-file-dir",
      'Directory for the session "file" password store',
      dirArg
    ),
    globalOption(
      "--oo7-keyring-path",
      "Path of the oo7 keyring file (default ~/.local/share/aws-vault/keyrings/default.keyring)",
      fileArg
    ),
    globalOption(
      "--session-oo7-keyring-path",
      "Path of the oo7 keyring file to use for sessions",
      fileArg
    ),
    globalOption(
      "--oo7-key-source",
      "Where the oo7 keyring's encryption secret comes from",
      { name: "source", suggestions: ["auto", "portal", "passphrase"] }
    ),
    globalOption(
      "--op-timeout",
      "Timeout for 1Password API operations (1Password Service Accounts only)",
      durationArg
    ),
    globalOption("--op-vault-id", "UUID of the 1Password vault", {
      name: "uuid",
    }),
    globalOption(
      "--session-op-vault-id",
      "UUID of the 1Password vault to use for sessions",
      { name: "uuid" }
    ),
    globalOption(
      "--op-item-title-prefix",
      "Prefix to prepend to 1Password item titles",
      { name: "prefix" }
    ),
    globalOption(
      "--session-op-item-title-prefix",
      "Prefix to prepend to 1Password session item titles",
      { name: "prefix" }
    ),
    globalOption("--op-item-tag", "Tag to apply to 1Password items", {
      name: "tag",
    }),
    globalOption(
      "--session-op-item-tag",
      "Tag to apply to 1Password session items",
      { name: "tag" }
    ),
    globalOption("--op-connect-host", "1Password Connect server HTTP(S) URI", {
      name: "uri",
    }),
    globalOption(
      "--op-desktop-account-id",
      "1Password Desktop App account name or account UUID",
      { name: "account" }
    ),
    globalOption(
      "--proton-pass-share-id",
      "Share ID of the Proton Pass vault to use",
      { name: "id" }
    ),
    globalOption(
      "--session-proton-pass-share-id",
      "Share ID of the Proton Pass vault to use for sessions",
      { name: "id" }
    ),
    globalOption(
      "--proton-pass-item-title-prefix",
      "Prefix to prepend to Proton Pass item titles",
      { name: "prefix" }
    ),
    globalOption(
      "--session-proton-pass-item-title-prefix",
      "Prefix to prepend to Proton Pass session item titles",
      { name: "prefix" }
    ),
    globalOption("--proton-pass-api-base", "Proton API base URL", {
      name: "url",
    }),
    globalOption(
      "--proton-pass-timeout",
      "Timeout for Proton Pass API operations",
      durationArg
    ),
    globalOption("--biometrics", "Use biometric authentication if supported"),
    globalOption(
      "--parallel-safe",
      "Enable cross-process locking for keyring operations, session caching, and SSO browser flows"
    ),
  ],
};

export default completionSpec;
