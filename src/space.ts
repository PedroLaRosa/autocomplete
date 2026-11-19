// Deta Space CLI v0.4.2 (latest stable tag of deta/space-cli, 2023-10-03; main is v0.4.2 plus one dependency bump, 2023-10-19; synced 2026-11-19).
// Source: cobra command/flag definitions in cmd/*.go at tag v0.4.2, read statically (not built or run).
// The v0.5.0-rc.0 / v0.9.0-* tags are pre-releases and are not covered. Upstream has had no commits since 2023-10-19.
const dirOption = (description: string, defaultValue = "./"): Fig.Option => ({
  name: ["--dir", "-d"],
  description,
  args: { name: "dir", default: defaultValue, template: "folders" },
});

const idOption = (description: string): Fig.Option => ({
  name: ["--id", "-i"],
  description,
  args: { name: "id" },
});

const openOption = (description: string): Fig.Option => ({
  name: "--open",
  description,
});

const portOption = (
  description: string,
  defaultValue?: string
): Fig.Option => ({
  name: ["--port", "-p"],
  description,
  args: { name: "port", default: defaultValue },
});

const hostOption = (description: string): Fig.Option => ({
  name: ["--host", "-H"],
  description,
  args: { name: "host", default: "localhost" },
});

const noDescriptionsOption: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const shellCompletion = (shell: string): Fig.Subcommand => ({
  name: shell,
  description: `Generate the autocompletion script for ${shell}`,
  options: [noDescriptionsOption],
});

/** Mirrors `space help <command>`: the visible command tree without options */
const helpSubcommands = (commands: Fig.Subcommand[]): Fig.Subcommand[] =>
  commands
    .filter(({ hidden }) => !hidden)
    .map(({ name, description, subcommands }) => ({
      name,
      description,
      ...(subcommands && { subcommands: helpSubcommands(subcommands) }),
    }));

const commands: Fig.Subcommand[] = [
  {
    name: "api",
    description:
      "Makes an authenticated HTTP request to the Space API and prints the response",
    hidden: true,
    options: [
      {
        name: ["--method", "-X"],
        description: "HTTP method",
        args: { name: "method" },
      },
      {
        name: "--jq",
        description: "Jq filter",
        args: { name: "jq" },
      },
    ],
    args: { name: "path" },
  },
  {
    name: "builder",
    description: "Interact with the builder",
    subcommands: [
      {
        name: "env",
        description:
          "Interact with the env variables in the dev instance of your project",
        options: [
          {
            name: ["--get", "-g"],
            description: "File name to write the env variables",
            args: { name: "file", template: "filepaths" },
            exclusiveOn: ["--set", "-s"],
          },
          {
            name: ["--set", "-s"],
            description: "File name to read env variables from",
            args: { name: "file", default: ".env", template: "filepaths" },
            exclusiveOn: ["--get", "-g"],
          },
          {
            name: ["--micro", "-m"],
            description: "Micro name to operate on",
            args: { name: "micro" },
          },
          idOption("Project id of project"),
          dirOption("Src of project"),
        ],
      },
    ],
  },
  {
    name: "completion",
    description: "Generate the autocompletion script for the specified shell",
    subcommands: ["bash", "fish", "powershell", "zsh"].map(shellCompletion),
  },
  {
    name: "dev",
    description:
      "Spin up a local development environment for your Space project",
    options: [
      dirOption("Directory of the project", "."),
      idOption("Project id"),
      portOption("Port to run the proxy on"),
      hostOption("Host to run the proxy on"),
      openOption("Open the app in the browser"),
    ],
    subcommands: [
      {
        name: "proxy",
        description: "Start a reverse proxy for your micros",
        options: [
          dirOption("Directory of the project", "."),
          portOption("Port to run the proxy on"),
          hostOption("Host to run the proxy on"),
          openOption("Open the app in the browser"),
        ],
      },
      {
        name: "serve",
        description: "Serve static files",
        hidden: true,
        options: [
          portOption("Port to serve on", "8080"),
          hostOption("Host to serve on"),
        ],
        args: { name: "dir", template: "folders" },
      },
      {
        name: ["trigger", "t"],
        description: "Trigger a micro action",
        options: [
          {
            name: ["--input", "-i"],
            description: "Action input",
            isRepeatable: true,
            args: { name: "input" },
          },
          {
            name: ["--experimental", "-x"],
            description: "Enable experimental features",
            hidden: true,
          },
          {
            name: "--id",
            description: "Project id",
            args: { name: "id" },
          },
        ],
        args: { name: "action", isOptional: true },
      },
      {
        name: "up",
        description: "Start a single micro for local development",
        options: [
          dirOption("Directory of the project", "."),
          idOption("Project id"),
          portOption("Port to run the micro on"),
          openOption("Open the app in the browser"),
        ],
        args: { name: "micro" },
      },
    ],
  },
  {
    name: "exec",
    description: "Run a command in the context of your project",
    options: [
      {
        name: "--project",
        description: "Id of project to exec the command in",
        args: { name: "project" },
      },
    ],
    args: { name: "command", isVariadic: true, isCommand: true },
  },
  {
    name: "link",
    description: "Link a local directory with an existing project",
    options: [
      idOption("Project id of project to link"),
      dirOption("Src of project to link"),
    ],
  },
  {
    name: "login",
    description: "Login to space",
    options: [
      {
        name: ["--with-token", "-t"],
        description: "Read token from standard input",
      },
    ],
  },
  {
    name: "new",
    description: "Create new project",
    options: [
      {
        name: ["--name", "-n"],
        description: "Project name",
        args: { name: "name" },
      },
      dirOption("Src of project to create"),
      { name: ["--blank", "-b"], description: "Create blank project" },
    ],
  },
  {
    name: "open",
    description: "Open your local project in the Builder UI",
    options: [
      idOption("Project id of project to open"),
      dirOption("Src of project to open"),
    ],
  },
  {
    name: "print-access-token",
    description: "Prints the access token used by the CLI",
    hidden: true,
  },
  {
    name: "push",
    description: "Push your changes to Space and create a new revision",
    options: [
      idOption("Project id of project to push"),
      dirOption("Src of project to push"),
      {
        name: ["--tag", "-t"],
        description: "Tag to identify this push",
        args: { name: "tag" },
      },
      openOption("Open builder instance/project in browser after push"),
      { name: "--skip-logs", description: "Skip following logs after push" },
      {
        name: "--experimental",
        description: "Use experimental builds",
        hidden: true,
      },
    ],
  },
  {
    name: "release",
    description: "Create a new release from a revision",
    options: [
      dirOption("Src of project to release"),
      idOption("Project id of an existing project"),
      {
        name: "--rid",
        description: "Revision id for release",
        args: { name: "rid" },
        exclusiveOn: ["--confirm"],
      },
      {
        name: ["--version", "-v"],
        description: "Version for the release",
        args: { name: "version" },
      },
      { name: "--listed", description: "Listed on discovery" },
      {
        name: "--confirm",
        description: "Confirm to use latest revision",
        exclusiveOn: ["--rid"],
      },
      {
        name: ["--notes", "-n"],
        description: "Release notes",
        args: { name: "notes" },
      },
    ],
  },
  {
    name: "trigger",
    description: "Trigger a app action",
    hidden: true,
    options: [
      {
        name: ["--input", "-i"],
        description: "Input parameters",
        isRepeatable: true,
        args: { name: "input" },
      },
    ],
    args: [{ name: "instance-alias" }, { name: "action-name" }],
  },
  {
    name: "validate",
    description: "Validate your Spacefile and check for errors",
    options: [dirOption("Src of project to validate")],
  },
  {
    name: "version",
    description: "Space CLI version",
    subcommands: [
      {
        name: "upgrade",
        description: "Upgrade Space CLI version",
        options: [
          {
            name: ["--version", "-v"],
            description: "Version number",
            args: { name: "version" },
          },
        ],
      },
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "space",
  description: "Deta Space CLI",
  subcommands: [
    ...commands,
    {
      name: "help",
      description: "Help about any command",
      subcommands: helpSubcommands(commands),
    },
  ],
  options: [
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
    { name: ["--version", "-v"], description: "Version for space" },
  ],
};
export default completionSpec;
