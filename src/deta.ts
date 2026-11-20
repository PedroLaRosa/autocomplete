// Deta CLI v1.3.3-beta (latest tag of github.com/deta/deta-cli, 2022-04-26, 2026-11-20).
// Source: cobra command definitions in cmd/*.go and docs/*.md at tag v1.3.3-beta,
// read statically (binary not run).
// Upstream is deprecated: Deta Cloud was retired, github.com/deta/deta-cli is
// archived and no release exists after v1.3.3-beta. Deta Space has its own `space` CLI.

// Runtimes accepted by `deta new --runtime` and `deta update --runtime`
// (runtime/manager.go; cmd/utils.go appends ".x" to Node runtimes itself)
const runtimes: Fig.Suggestion[] = [
  { name: "python3.9", description: "Python 3.9 (default for --python)" },
  { name: "python3.8", description: "Python 3.8" },
  { name: "python3.7", description: "Python 3.7" },
  { name: "nodejs14", description: "Node.js 14 (default for --node)" },
  { name: "nodejs12", description: "Node.js 12" },
];

const microPath = (description: string): Fig.Arg => ({
  name: "path",
  description,
  template: "folders",
  isOptional: true,
});

const runtimeArg = (description: string): Fig.Arg => ({
  name: "runtime",
  description,
  suggestions: runtimes,
});

const apiKeyNameOption = (description: string): Fig.Option => ({
  name: ["-n", "--name"],
  description,
  isRequired: true,
  args: {
    name: "name",
    description: "The api-key name",
  },
});

const completionSpec: Fig.Spec = {
  name: "deta",
  description: "Deta CLI for managing Deta Micros",
  subcommands: [
    {
      name: "login",
      description: "Trigger the login process for the Deta CLI",
    },
    {
      name: "version",
      description: "Print the Deta version",
      subcommands: [
        {
          name: "upgrade",
          description: "Upgrade Deta CLI version",
          options: [
            {
              name: ["-v", "--version"],
              description: "Upgrade CLI to specific version",
              args: {
                name: "version",
                description: "Version number",
              },
            },
          ],
        },
      ],
    },
    {
      name: "projects",
      description: "List Deta projects",
    },
    {
      name: "new",
      description: "Create a new Deta Micro",
      args: {
        name: "path",
        description: "Path to new directory for the micro",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: ["-n", "--node"],
          description: "Create a micro with Node (nodejs14.x) runtime",
          exclusiveOn: ["-p", "--python", "--runtime"],
        },
        {
          name: ["-p", "--python"],
          description: "Create a micro with Python (python3.9) runtime",
          exclusiveOn: ["-n", "--node", "--runtime"],
        },
        {
          name: "--name",
          description: "Set the name of the new micro",
          args: {
            name: "name",
            description: "Name of the new micro",
          },
        },
        {
          name: "--project",
          description: "Set the project under which the micro is created",
          args: {
            name: "project",
            description: "Name of the existing project",
          },
        },
        {
          name: "--runtime",
          description: "Create a micro with a specified runtime",
          exclusiveOn: ["-n", "--node", "-p", "--python"],
          args: runtimeArg("The selected runtime"),
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy new code to a Deta Micro",
      args: microPath("Path to project directory"),
      subcommands: [
        {
          name: "purge-dependencies",
          description: "Remove all installed dependencies for a Deta Micro",
          args: microPath("Path to project directory"),
        },
      ],
    },
    {
      name: "details",
      description: "Get detailed information about a specific Deta micro",
      args: microPath("Path to project directory"),
    },
    {
      name: "watch",
      description:
        "Auto-deploy locally saved changes in real time to your Deta micro",
      args: microPath("Path to project directory"),
    },
    {
      name: "logs",
      description:
        "Get the logs of the last 30 minutes from a visor disabled Deta Micro",
      options: [
        {
          name: ["-f", "--follow"],
          description:
            "Follow logs (disables Visor until the command exits, then re-enables it)",
        },
      ],
    },
    {
      name: "auth",
      description: "Change auth settings for a Deta Micro",
      subcommands: [
        {
          name: "disable",
          description: "Disable HTTP Auth for a Deta Micro",
          args: microPath("Path to project directory"),
        },
        {
          name: "enable",
          description: "Enable HTTP Auth for a Deta Micro",
          args: microPath("Path to project directory"),
        },
        {
          name: "create-api-key",
          description: "Create an API key for a Deta Micro",
          args: microPath("Path to project directory"),
          options: [
            {
              name: ["-d", "--desc"],
              description: "Set the api-key description",
              args: {
                name: "description",
                description: "The api-key description",
              },
            },
            apiKeyNameOption("Set the api-key name"),
            {
              name: ["-o", "--outfile"],
              description: "Set the api-key output file",
              args: {
                name: "outfile",
                description: "The api-key output file",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "delete-api-key",
          description: "Delete an API key for a Deta Micro",
          args: microPath("Path to project directory"),
          options: [apiKeyNameOption("Name of the api-key to delete")],
        },
      ],
    },
    {
      name: "pull",
      description:
        "Pull the latest deployed code of a Deta Micro to your local machine",
      options: [
        {
          name: ["-f", "--force"],
          description: "Force the overwrite of existing files",
        },
      ],
    },
    {
      name: "clone",
      description: "Clone a Deta Micro",
      args: {
        name: "path",
        description: "Path to new directory for the clone",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: "--name",
          description: "The name of the micro to be cloned",
          isRequired: true,
          args: {
            name: "name",
            description: "Name of the micro",
          },
        },
        {
          name: "--project",
          description: "The name of the project with the micro to be cloned",
          args: {
            name: "project",
            description: "Name of the project",
          },
        },
      ],
    },
    {
      name: "update",
      description:
        "Update a Deta Micro's name, runtime or environment variables",
      args: microPath("Path to project directory"),
      options: [
        {
          name: ["-n", "--name"],
          description: "The new name of the micro",
          args: {
            name: "name",
            description: "New name for the micro",
          },
        },
        {
          name: ["-r", "--runtime"],
          description: "The new runtime of the micro",
          args: runtimeArg("New runtime for the micro"),
        },
        {
          name: ["-e", "--env"],
          description:
            "The new env file of the micro (lines of the format key=value)",
          args: {
            name: "env",
            description: "Path to env file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "visor",
      description: "Change the Visor settings for a Deta Micro",
      subcommands: [
        {
          name: "open",
          description: "Open Micro's visor page in the browser",
          args: microPath("Path to project directory"),
        },
        {
          name: "enable",
          description: "Enable Visor for a Deta Micro",
          args: microPath("Path to project directory"),
        },
        {
          name: "disable",
          description: "Disable Visor for a Deta Micro",
          args: microPath("Path to project directory"),
        },
      ],
    },
    {
      name: "run",
      description: "Run a Deta Micro from the CLI",
      args: {
        name: "action",
        description:
          "The action to be performed on the micro, followed by -- and the input args. See docs for full examples and details",
        isOptional: true,
      },
      options: [
        {
          name: ["-l", "--logs"],
          description: "Show the micro logs",
        },
      ],
    },
    {
      name: "cron",
      description: "Change cron settings for a Deta Micro",
      subcommands: [
        {
          name: "set",
          description: "Set Deta Micro to run on a schedule",
          args: {
            name: "expression",
            description:
              'The rate ("5 hours") or cron expression ("0 10 * * ? *") to be set',
          },
        },
        {
          name: "remove",
          description: "Remove the schedule from a Deta Micro",
          args: microPath("Path to project directory"),
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for deta",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
