// Onboardbase CLI v8.10.0 (npm "latest", 2026-09-10). Source: oclif.manifest.json
// and lib/commands of the @onboardbase/cli@8.10.0 tarball

const help: Fig.Option = {
  name: ["-h", "--help"],
  description: "Show CLI help",
};

const project: Fig.Option = {
  name: ["-p", "--project"],
  description: "Name of project",
  args: { name: "project" },
};

const environment = (
  description = "Environment to run by default"
): Fig.Option => ({
  name: ["-e", "--environment"],
  description,
  args: { name: "environment" },
});

const commandFlag: Fig.Option = {
  name: ["-c", "--command"],
  description: "Command to run",
  args: { name: "command", isCommand: true },
};

const password = (description = "Password"): Fig.Option => ({
  name: "--password",
  description,
  args: { name: "password" },
});

const verbose: Fig.Option = {
  name: "--verbose",
  description: "Enable warning/error logs",
};

const overwrite: Fig.Option = {
  name: "--overwrite",
  description: "Overwrite the existing authentication",
};

const prefix: Fig.Option = {
  name: ["-k", "--prefix"],
  description: "Prefix",
  args: { name: "prefix" },
};

const passphrase: Fig.Option = {
  name: ["-s", "--passphrase"],
  description: "Passphrase",
  args: { name: "passphrase" },
};

const liveReload: Fig.Option = {
  name: "--live-reload",
  description: "Live Reload",
};

const file: Fig.Option = {
  name: ["-f", "--file"],
  description: "Path to file",
  args: { name: "file", template: "filepaths" },
};

const encKey: Fig.Option = {
  name: "--enc-key",
  description: "Encryption Key",
  args: { name: "key" },
};

const storeOptions: Fig.Option[] = [
  help,
  {
    name: "--store-key",
    description: "Store Key",
    args: { name: "key" },
    isRequired: true,
  },
  { name: "--locker-key", description: "Locker Key", args: { name: "key" } },
  file,
  {
    name: "--file-id",
    description: "A unique identifier for the file in the store",
    args: { name: "id" },
  },
];

// ponytail: the format is a positional arg that oclif receives as "--json" etc.,
// so it completes as mutually exclusive options
const formatOptions = (formats: string[]): Fig.Option[] =>
  formats.map((format) => ({
    name: `--${format}`,
    description: `Output secrets as ${format}`,
    exclusiveOn: formats.filter((f) => f !== format).map((f) => `--${f}`),
  }));

const secretsArg: Fig.Arg = { name: "secrets", isOptional: true };

const completionSpec: Fig.Spec = {
  name: "onboardbase",
  description:
    "Onboardbase manages app secrets and credentials securely with team work and contractors in mind",
  subcommands: [
    {
      name: "auth",
      description:
        "A one stop command for authenticating, setting up a project and running the project",
      options: [help, commandFlag, overwrite, password(), verbose],
      args: { name: "command", isOptional: true, isCommand: true },
    },
    {
      name: "build",
      description: "Run a command with secrets injected into the environment",
      options: [
        help,
        project,
        environment(),
        commandFlag,
        prefix,
        passphrase,
        liveReload,
      ],
      args: { name: "command", isOptional: true, isCommand: true },
    },
    {
      name: "config:get-token",
      description: "Get all tokens",
      options: [
        {
          name: ["-S", "--scope"],
          description: "Scope",
          args: { name: "scope" },
        },
      ],
    },
    {
      name: "config:set",
      description: "Update your onboardbase config",
      options: [
        {
          name: ["-s", "--scope"],
          description: "Scope",
          args: { name: "scope" },
        },
        {
          name: ["-t", "--token"],
          description: "Auth Token",
          args: { name: "token" },
        },
        {
          name: ["-A", "--api-host"],
          description: "API Host",
          args: { name: "host" },
        },
        {
          name: ["-D", "--dashboard-host"],
          description: "Dashboard Host",
          args: { name: "host" },
        },
        password(),
        { name: "--re-authenticate", description: "Re-authenticate the CLI" },
      ],
    },
    {
      name: "destroy",
      description:
        "Cleanup Onboardbase artifacts including backup and authentication",
    },
    {
      name: "disposable:share",
      description:
        "Share sensitive files securely and quickly with end-to-end encryption and automatic deletion",
      options: [
        {
          name: ["-f", "--file"],
          description: "The file to be shared",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-e", "--expires"],
          description: "Time for file to expire in minutes",
          args: {
            name: "minutes",
            suggestions: ["5", "30", "60", "1440"],
            default: "5",
          },
        },
        {
          name: ["-m", "--message"],
          description:
            "Add a message to accompany the file. Default is file name",
          args: { name: "message" },
        },
      ],
      args: { name: "file", isOptional: true, template: "filepaths" },
    },
    {
      name: "environment:create",
      description: "Create an environment under a project",
      options: [
        help,
        project,
        { ...environment("Environment Title"), isRequired: true },
        {
          name: "--file-path",
          description: "A path to a JSON file",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--duplicate-from",
          description: "An Environment to duplicate from",
          args: { name: "environment" },
        },
      ],
      args: secretsArg,
    },
    {
      name: "init",
      description:
        "Create an account, log you in, and set up a project and environment",
    },
    {
      name: "integrations:railway",
      description: "Railway Integration",
    },
    {
      name: "login",
      description: "Authenticate your CLI",
      options: [overwrite, password()],
    },
    { name: "logout", description: "Log out of the CLI" },
    {
      name: "mr:create",
      description: "Create a recommendation",
      options: [
        help,
        project,
        environment("Environment to recommend update for"),
        {
          name: ["-n", "--note"],
          description: "Note",
          args: { name: "note" },
        },
        {
          name: "--from-local-secrets",
          description: "Create a recommendation from your local secrets",
        },
      ],
      args: secretsArg,
    },
    {
      name: "project:create",
      description: "Create a project",
      options: [
        help,
        {
          name: ["-t", "--title"],
          description: "Name of project",
          args: { name: "title" },
        },
        {
          name: ["-d", "--description"],
          description: "Project description",
          args: { name: "description" },
        },
        environment(),
      ],
    },
    {
      name: "run",
      description: "Run a command with secrets injected into the environment",
      options: [
        help,
        project,
        environment(),
        commandFlag,
        password("Your Build Secure Password"),
        {
          name: "--source-path",
          description: "The source you would like to load your secrets from",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--sync",
          description: "Pull the latest secrets before starting the command",
        },
        {
          name: "--secrets",
          description:
            "A JSON string containing key/value pairs of your secrets",
          args: { name: "json" },
        },
        prefix,
        passphrase,
        liveReload,
        {
          name: "--accept-secret-sharing",
          description: "A flag to accept secret sharing",
        },
        verbose,
      ],
      args: { name: "command", isOptional: true, isCommand: true },
    },
    { name: "scan", description: "Onboardbase Scan" },
    {
      name: "secrets",
      description: "Log secrets in different formats",
      options: [
        help,
        project,
        environment(),
        ...formatOptions(["json", "env", "yaml", "docker", "raw", "bash"]),
      ],
    },
    {
      name: "secrets:delete",
      description: "Delete secrets on Onboardbase",
      options: [help, project, environment()],
      args: secretsArg,
    },
    {
      name: "secrets:download",
      description: "Download Secrets",
      options: [
        help,
        project,
        environment(),
        { name: "--no-file", description: "No write to disk" },
        ...formatOptions(["json", "env", "yaml", "docker"]),
      ],
    },
    {
      name: "secrets:fetch",
      description: "View a single secret value using its secret key",
      options: [help, project, environment()],
      args: { name: "secret-key", isOptional: true },
    },
    {
      name: "secrets:update",
      description: "Update secrets on Onboardbase",
      options: [help, project, environment()],
      args: secretsArg,
    },
    {
      name: "secrets:upload",
      description: "Upload secrets",
      options: [
        help,
        project,
        environment(),
        {
          name: "--secrets",
          description: "Secrets to Upload",
          args: { name: "secrets" },
        },
      ],
      args: secretsArg,
    },
    {
      name: "setup",
      description: "Setup the Onboardbase CLI for managing secrets",
      options: [
        project,
        environment(),
        {
          name: "--start-script",
          description: "Your project start command",
          args: { name: "command" },
        },
      ],
    },
    {
      name: "share",
      description: "Share your local .onboardbase.yaml secrets with a teammate",
      options: [help, project],
    },
    {
      name: "teammate",
      description: "Add a teammate",
      options: [
        {
          name: ["-l", "--signupLink"],
          description: "Link Sent to Email",
          args: { name: "link" },
          isRequired: true,
        },
        {
          name: ["-n", "--name"],
          description: "Name of Teammate",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "tf",
      description:
        "Run a Terraform command with secrets injected into the environment",
      options: [
        help,
        {
          name: ["-C", "--command"],
          description: "Terraform command to execute",
          args: { name: "command" },
        },
        file,
        encKey,
      ],
      args: { name: "command", isOptional: true },
    },
    {
      name: "tf:decrypt",
      description: "Decrypt a TF state command back to how it was",
      options: [help, encKey, file],
    },
    {
      name: "tf:download",
      description: "Download a state file from an Onboardbase store",
      options: storeOptions,
    },
    {
      name: "tf:encrypt",
      description: "Encrypt a TF state file",
      options: [help, encKey, file],
    },
    {
      name: "tf:upload",
      description: "Upload a state file to an Onboardbase store",
      options: storeOptions,
    },
    { name: "update", description: "Update CLI to the latest version" },
    {
      name: "help",
      description: "Display help for onboardbase",
      options: [{ name: "--all", description: "See all commands in CLI" }],
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
      },
    },
  ],
};

export default completionSpec;
