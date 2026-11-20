// Amplify CLI (Gen 1) v14.6.0 (npm @aws-amplify/cli latest, published 2026-11-10; synced 2026-11-20). Source: static read of aws-amplify/amplify-cli tag @aws-amplify/cli@14.6.0
// (amplify-cli-core help/commands-info.ts, packages/amplify-cli/src/commands, plugin manifests and category command modules) plus the npm tarballs of the bundled external plugins
// @aws-amplify/amplify-category-api@5.15.7 and amplify-codegen@4.10.4 (latest releases within the CLI's dependency ranges). The binary was not run (downloaded binaries are not executed here).
// Amplify Gen 2 projects use the separate ampx CLI, which this spec does not cover. The xr category no longer exists upstream and was removed.

const envNameGenerator: Fig.Generator = {
  script: ["amplify", "env", "list", "--json"],
  postProcess: function (out) {
    const envContent = JSON.parse(out);
    return envContent["envs"].map((env: string) => {
      return { name: env, description: "Environment" };
    });
  },
};

const yesOption: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Skip all interactive prompts by selecting default options",
};

const forceOption: Fig.Option = {
  name: ["-f", "--force"],
  description:
    "Pushes all resources regardless of update status and bypasses all guardrails",
};

const allowDestructiveOption: Fig.Option = {
  name: "--allow-destructive-graphql-schema-updates",
  description:
    "Pushes schema changes that require removal or replacement of underlying tables",
};

const jsonOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  args: { name: "payload", description: "JSON payload" },
});

const codegenOption = jsonOption(
  "--codegen",
  "Configuration for GraphQL codegen"
);

const headlessOption = jsonOption("--headless", "Headless JSON payload");

const projectInputOptions: Fig.Option[] = [
  jsonOption("--amplify", "Basic information of the project"),
  jsonOption(
    "--frontend",
    "Information for the project's frontend application"
  ),
  jsonOption("--providers", "Configuration settings for provider plugins"),
];

const categoryDescriptions: Record<string, string> = {
  analytics: "Add analytics resources to your Amplify project",
  api: "Enable an easy and secure solution to access backend data",
  auth: "Enable sign-in, sign-up, and sign-out for your app",
  custom:
    "Add custom AWS resources to your Amplify project using the AWS CDK or CloudFormation",
  function: "Configure function resources for your Amplify project",
  geo: "Configure geo resources for your Amplify project",
  hosting: "Configure hosting resources for your Amplify project",
  interactions: "Configure interactions resources for your Amplify project",
  notifications: "Configure notifications for your Amplify project",
  predictions: "Configure predictions resources for your Amplify project",
  storage: "Enable a mechanism for managing user content",
};

const allCategories = Object.keys(categoryDescriptions);

const categorySubcommands = (names: string[]): Fig.Subcommand[] =>
  names.map((name) => ({ name, description: categoryDescriptions[name] }));

const withAliases = (name: string, aliases: string[] = []) =>
  aliases.length === 0 ? name : [name, ...aliases];

const resourceNameArg = (description: string): Fig.Arg => ({
  name: "resource-name",
  description,
  isOptional: true,
});

// Category-level commands (`amplify <category> <command>`)
const addCommand = (
  description: string,
  aliases?: string[]
): Fig.Subcommand => ({
  name: withAliases("add", aliases),
  description,
  options: [headlessOption, yesOption],
});

const updateCommand = (
  description: string,
  aliases: string[] = ["configure"]
): Fig.Subcommand => ({
  name: withAliases("update", aliases),
  description,
  options: [headlessOption, yesOption],
});

const removeCommand = (
  description: string,
  aliases?: string[]
): Fig.Subcommand => ({
  name: withAliases("remove", aliases),
  description,
  options: [headlessOption],
  args: resourceNameArg("Name of the resource to remove"),
});

const pushCommand = (description: string): Fig.Subcommand => ({
  name: "push",
  description,
  options: [yesOption],
  args: resourceNameArg("Name of the resource to push"),
});

const consoleCommand = (description: string): Fig.Subcommand => ({
  name: "console",
  description,
});

const overrideCommand = (description: string): Fig.Subcommand => ({
  name: "override",
  description,
});

const importCommand = (description: string): Fig.Subcommand => ({
  name: "import",
  description,
});

const category = (
  name: string,
  subcommands: Fig.Subcommand[]
): Fig.Subcommand => ({
  name,
  description: categoryDescriptions[name],
  subcommands,
});

const categoryCommands: Fig.Subcommand[] = [
  category("analytics", [
    addCommand(
      "Takes you through a CLI flow to add an analytics resource to your local backend"
    ),
    updateCommand(
      "Takes you through steps in the CLI to update an analytics resource"
    ),
    pushCommand(
      "Provisions only analytics cloud resources with the latest local developments"
    ),
    removeCommand("Removes analytics resource from your local backend"),
    consoleCommand("Opens the web console for the analytics category"),
  ]),
  category("api", [
    {
      name: "add-graphql-datasource",
      description: "Add an RDS datasource to your GraphQL API",
    },
    {
      name: "rebuild",
      description:
        "Removes all GraphQL resources and recreates the API (only use in dev envs)",
    },
    addCommand(
      "Takes you through a CLI flow to add an API resource to your local backend"
    ),
    pushCommand(
      "Provisions API cloud resources with the latest local developments"
    ),
    removeCommand("Removes API resource from your local backend"),
    updateCommand("Updates an API resource"),
    {
      name: "gql-compile",
      description:
        "Compiles your GraphQL schema and generates a CloudFormation template",
    },
    consoleCommand("Opens the web console for the selected api service"),
    {
      name: "migrate",
      description:
        "Migrates GraphQL schemas to the latest GraphQL transformer version",
    },
    overrideCommand(
      "Generates overrides file to apply custom modifications to CloudFormation"
    ),
    {
      name: "status",
      description: "Displays the current status of your API",
      options: [
        {
          name: "-acm",
          description: "Displays the access control matrix",
          args: { name: "table-name" },
        },
      ],
    },
    importCommand("Imports the schema of an existing RDS database (preview)"),
    {
      name: "generate-schema",
      description:
        "Generates a GraphQL schema from an imported database or a SQL schema file (preview)",
      options: [
        {
          name: "--sql-schema",
          description: "SQL schema file to generate the GraphQL schema from",
          args: { name: "path", template: "filepaths" },
          dependsOn: ["--engine-type", "--out"],
        },
        {
          name: "--engine-type",
          description: "Database engine of the SQL schema",
          args: { name: "engine", suggestions: ["mysql", "postgres"] },
          dependsOn: ["--sql-schema", "--out"],
        },
        {
          name: "--out",
          description: "Path of the GraphQL schema file to write",
          args: { name: "path", template: "filepaths" },
          dependsOn: ["--sql-schema", "--engine-type"],
        },
      ],
    },
    {
      name: "update-secrets",
      description:
        "Updates the database connection secrets of an imported RDS data source (preview)",
    },
  ]),
  category("auth", [
    addCommand("Adds an auth resource to your local backend"),
    importCommand("Imports an existing auth resource to your local backend"),
    pushCommand(
      "Provisions only auth cloud resources with the latest local developments"
    ),
    removeCommand("Removes auth resources from your local backend"),
    updateCommand("Updates the auth resource from your local backend", []),
    consoleCommand("Opens the web console for the auth category"),
    overrideCommand("Generates overrides file to override auth resources"),
  ]),
  category("custom", [
    addCommand("Adds a custom resource to your local backend"),
    updateCommand("Updates a custom resource in your local backend"),
    removeCommand("Removes a custom resource from your local backend"),
    {
      name: "build",
      description: "Builds the custom resources in the project",
      args: resourceNameArg("Name of the custom resource to build"),
    },
  ]),
  category("function", [
    addCommand(
      "Takes you through a CLI flow to add a function resource to your local backend"
    ),
    updateCommand(
      "Takes you through a CLI flow to update an existing function resource"
    ),
    pushCommand(
      "Provisions only function cloud resources with the latest local developments"
    ),
    {
      name: "build",
      description: "Builds all the functions in the project",
    },
    removeCommand("Removes function resource from your local backend"),
    consoleCommand("Opens the web console for the function category"),
  ]),
  category("geo", [
    addCommand(
      "Takes you through a CLI flow to add a geo resource to your local backend"
    ),
    updateCommand(
      "Takes you through steps in the CLI to update a geo resource"
    ),
    pushCommand(
      "Provisions only geo cloud resources with the latest local developments"
    ),
    removeCommand("Removes geo resource from your local backend"),
    consoleCommand("Opens the web console for the geo category"),
    importCommand("Imports an existing geofence collection"),
  ]),
  category("hosting", [
    {
      name: "serve",
      description: "Opens your deployed site",
    },
    {
      name: withAliases("configure", ["update"]),
      description: "Configure hosting resources via the Amplify Console",
    },
    {
      name: "publish",
      description: "Publishes changes to manually deployed apps",
    },
    {
      name: "remove",
      description: "Remove hosting from your app",
    },
    pushCommand("Provisions cloud resources with the latest local changes"),
    {
      name: withAliases("add", ["enable"]),
      description: "Adds hosting to your Amplify project",
    },
    {
      name: "status",
      description: "Displays the current status of your hosting",
    },
    consoleCommand("Opens the web console for the hosting category"),
  ]),
  category("interactions", [
    addCommand("Adds interactions resources to your local backend"),
    updateCommand(
      "Takes you through a CLI flow to update an interactions resource"
    ),
    pushCommand(
      "Provisions only interactions cloud resources with the latest local developments"
    ),
    removeCommand("Removes interactions resources from your local backend"),
  ]),
  category("notifications", [
    addCommand("Adds a notification channel", ["enable"]),
    removeCommand("Removes a notification channel", ["disable", "delete"]),
    updateCommand("Updates the configuration of a notification channel"),
    {
      name: withAliases("status", ["list", "ls"]),
      description:
        "Lists the enabled/disabled statuses of the available notification channels",
    },
    consoleCommand(
      "Opens the Amazon Pinpoint console displaying the current channel settings"
    ),
    pushCommand("Provisions cloud resources with the latest local changes"),
  ]),
  category("predictions", [
    addCommand(
      "Takes you through a CLI flow to add a predictions resource to your local backend"
    ),
    removeCommand("Removes predictions resource from your local backend"),
    updateCommand(
      "Takes you through steps in the CLI to update a predictions resource"
    ),
    consoleCommand("Opens a web console to view your predictions resource"),
    pushCommand("Provisions cloud resources with the latest local changes"),
  ]),
  category("storage", [
    addCommand("Adds a storage resource to your local backend"),
    importCommand("Import an existing storage resource to your local backend"),
    updateCommand("Update a storage resource"),
    pushCommand(
      "Provisions storage cloud resources with the latest local developments"
    ),
    removeCommand("Removes storage resource from your local backend"),
    overrideCommand("Generates overrides.ts for overriding storage resources"),
    consoleCommand("Opens the web console for the storage category"),
  ]),
];

const gen2MigrationOptions: Fig.Option[] = [
  {
    name: "--skip-validations",
    description: "Skip pre-execution validations",
    isPersistent: true,
    exclusiveOn: ["--validations-only"],
  },
  {
    name: "--validations-only",
    description: "Run validations without executing the step",
    isPersistent: true,
    exclusiveOn: ["--skip-validations"],
  },
  {
    name: "--rollback",
    description: "Rollback the specified step",
    isPersistent: true,
    exclusiveOn: ["--no-rollback"],
  },
  {
    name: "--no-rollback",
    description: "Disable automatic rollback on failure",
    isPersistent: true,
    exclusiveOn: ["--rollback"],
  },
  {
    name: "--additional-stateful-resource-types",
    description:
      "Path to a JSON file containing additional CloudFormation resource types to treat as stateful",
    isPersistent: true,
    args: { name: "path", template: "filepaths" },
  },
];

const frontends = ["javascript", "android", "ios", "flutter"];

const outOption = (description: string): Fig.Option => ({
  name: "--out",
  description,
  args: { name: "path", template: "folders" },
});

const completionSpec: Fig.Spec = {
  name: "amplify",
  description:
    "A set of tools and services to help front-end web and mobile developers build scalable full stack applications",
  subcommands: [
    {
      name: "init",
      description:
        "Initializes a new project, sets up deployment resources in the cloud, and makes your project ready for Amplify",
      options: [
        yesOption,
        ...projectInputOptions,
        {
          name: "--envName",
          description: "Name of the environment for the Amplify project",
          args: { name: "env-name" },
        },
        jsonOption(
          "--categories",
          "Configuration settings for resources in the given categories"
        ),
        {
          name: "--app",
          description:
            "Specify a GitHub repository from which to create an Amplify project",
          args: { name: "git-url" },
        },
        {
          name: "--permissions-boundary",
          description:
            "Specify an IAM permissions boundary for the roles created during init",
          args: { name: "arn" },
        },
      ],
    },
    {
      name: "configure",
      description:
        "Configures the attributes of your project for amplify-cli, such as switching front-end framework and adding/removing cloud-provider plugins",
      options: [
        {
          name: "--usage-data-on",
          description: "Turn on usage data sharing",
          exclusiveOn: ["--usage-data-off"],
        },
        {
          name: "--usage-data-off",
          description: "Turn off usage data sharing",
          exclusiveOn: ["--usage-data-on"],
        },
        {
          name: "--share-project-config-on",
          description:
            "Turn on non-sensitive project configurations sharing on failures",
          exclusiveOn: ["--share-project-config-off"],
        },
        {
          name: "--share-project-config-off",
          description:
            "Turn off non-sensitive project configurations sharing on failures",
          exclusiveOn: ["--share-project-config-on"],
        },
        {
          name: "--appId",
          description:
            "Amplify app ID to log in to with the Amplify Studio admin login flow",
          args: { name: "app-id" },
          dependsOn: ["--envName"],
        },
        {
          name: "--envName",
          description:
            "Environment name to log in to with the Amplify Studio admin login flow",
          args: { name: "env-name" },
          dependsOn: ["--appId"],
        },
      ],
      subcommands: [
        {
          name: "project",
          description: "Configure the attributes of your project",
          options: [yesOption, ...projectInputOptions],
        },
        {
          name: "hosting",
          description: "Configure hosting resources for your Amplify project",
        },
        {
          name: "codegen",
          description: "Configure GraphQL codegen for your Amplify project",
        },
      ],
    },
    {
      name: "push",
      description:
        "Provisions cloud resources with the latest local developments",
      options: [codegenOption, forceOption, yesOption, allowDestructiveOption],
      args: [
        {
          name: "category",
          description: "Push the resources of a single category",
          isOptional: true,
          suggestions: allCategories,
        },
        resourceNameArg("Name of the resource to push"),
      ],
    },
    {
      name: "pull",
      description:
        "Fetch upstream backend environment definition changes from the cloud and updates the local environment to match that definition",
      options: [
        {
          name: "--appId",
          description: "The unique identifier for the Amplify project",
          args: { name: "app-id" },
        },
        {
          name: "--envName",
          description: "Name of the environment for the Amplify project",
          args: { name: "env-name" },
        },
        yesOption,
        {
          name: "--restore",
          description:
            "Overwrite your local backend changes with configurations from the cloud",
        },
        ...projectInputOptions,
        jsonOption(
          "--categories",
          "Configuration settings for resources in the given categories"
        ),
      ],
    },
    {
      name: "publish",
      description:
        "Executes amplify push, and then builds and publishes client-side application for hosting",
      options: [
        {
          name: ["-y", "--yes"],
          description: "Automatically accept publish prompt",
        },
        codegenOption,
        forceOption,
        allowDestructiveOption,
        {
          name: ["-c", "--invalidateCloudFront"],
          description:
            "Send an invalidation request to the Amazon CloudFront service",
        },
      ],
    },
    {
      name: ["serve", "run"],
      description:
        "Executes amplify push, and then executes the project's start command to test run the client-side application locally",
    },
    {
      name: ["status", "ls"],
      description:
        "Shows the state of local resources not yet pushed to the cloud (Create/Update/Delete)",
      options: [
        {
          name: ["-v", "--verbose"],
          description:
            "Shows the detailed verbose diff between local and deployed resources, including cloudformation-diff",
        },
      ],
      args: {
        name: "category",
        description: "Limit the status to the given categories",
        isOptional: true,
        isVariadic: true,
        suggestions: allCategories,
      },
    },
    {
      name: "delete",
      description:
        "Deletes all of the resources tied to the project from the cloud",
      options: [
        yesOption,
        {
          name: ["-f", "--force"],
          description: "Skip the confirmation prompts",
        },
      ],
    },
    {
      name: "add",
      description:
        "Adds a resource for an Amplify category in your local backend",
      options: [
        { ...headlessOption, isPersistent: true },
        { ...yesOption, isPersistent: true },
      ],
      subcommands: categorySubcommands(allCategories),
    },
    {
      name: "update",
      description:
        "Update resource for an Amplify category in your local backend",
      options: [
        { ...headlessOption, isPersistent: true },
        { ...yesOption, isPersistent: true },
      ],
      subcommands: categorySubcommands(allCategories),
    },
    {
      name: "remove",
      description:
        "Removes a resource for an Amplify category in your local backend",
      options: [{ ...headlessOption, isPersistent: true }],
      subcommands: categorySubcommands(allCategories),
    },
    {
      name: "import",
      description: "Imports existing resources to your local backend",
      options: [{ ...headlessOption, isPersistent: true }],
      subcommands: [
        {
          name: "auth",
          description:
            "Imports an existing auth resource to your local backend",
        },
        {
          name: "env",
          description:
            "Imports an existing Amplify project environment stack to your local backend",
          options: [
            {
              name: "--name",
              description: "Name of the environment to import",
              args: { name: "env-name" },
            },
            {
              name: "--config",
              description: "Provider configuration of the environment",
              args: { name: "provider-configs", description: "JSON payload" },
            },
            {
              name: "--awsInfo",
              description: "AWS account information of the environment",
              args: { name: "aws-configs", description: "JSON payload" },
            },
          ],
        },
        {
          name: "storage",
          description:
            "Imports an existing storage resource to your local backend",
        },
      ],
    },
    {
      name: "override",
      description:
        "Override Amplify-generated resources with Cloud Development Kit (CDK)",
      subcommands: [
        {
          name: "api",
          description: "Override Amplify-generated GraphQL API resources",
        },
        {
          name: "auth",
          description: "Override Amplify-generated auth resources",
        },
        {
          name: "storage",
          description: "Override Amplify-generated storage resources",
        },
        {
          name: "project",
          description:
            "Override Amplify-generated project-level resources, such as IAM roles",
        },
      ],
    },
    {
      name: "upgrade",
      description: "Download and install the latest version of the Amplify CLI",
    },
    {
      name: "uninstall",
      description:
        "Remove all global Amplify configuration files and uninstall the Amplify CLI. This will not delete any Amplify projects",
      options: [yesOption],
    },
    ...categoryCommands,
    {
      name: "mock",
      description: "Run mock server for testing categories locally",
      subcommands: [
        {
          name: "api",
          description: "Run mock server for testing API locally",
        },
        {
          name: "storage",
          description: "Run mock server for testing storage locally",
        },
        {
          name: "function",
          description: "Run mock server for testing functions locally",
          options: [
            {
              name: "--event",
              description:
                "Specified JSON file as the event to pass to the Lambda handler",
              args: { name: "path-to-json-file", template: "filepaths" },
            },
            {
              name: "--timeout",
              description:
                "Override the default 10-second function response timeout",
              args: { name: "number-of-seconds" },
            },
          ],
          args: {
            name: "function-name",
            description: "Name of a specific function to run",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "codegen",
      description:
        "Generates GraphQL statements(queries, mutations and eventHandlers) and type annotations",
      options: [
        {
          name: "--nodownload",
          description: "Do not download the schema before generating code",
        },
        {
          name: "--maxDepth",
          description:
            "Maximum depth of the generated GraphQL statements (only used when generating statements)",
          args: { name: "number" },
        },
      ],
      subcommands: [
        {
          name: "add",
          description:
            "Generate API code or type annotations based on a GraphQL schema and query documents",
          options: [
            {
              name: "--apiId",
              description: "ID of the AppSync API to generate code for",
              args: { name: "api-id" },
            },
            {
              name: "--region",
              description: "AWS region of the AppSync API",
              args: { name: "region" },
            },
          ],
        },
        {
          name: "remove",
          description: "Remove the GraphQL codegen configuration",
        },
        {
          name: ["configure", "update"],
          description: "Change/Update codegen configuration",
        },
        {
          name: "statements",
          description:
            "Generates GraphQL statements (queries, mutations, and subscriptions)",
          options: [
            {
              name: "--nodownload",
              description: "Do not download the schema before generating code",
            },
            {
              name: "--maxDepth",
              description: "Maximum depth of the generated GraphQL statements",
              args: { name: "number" },
            },
          ],
        },
        {
          name: "types",
          description: "Generates GraphQL type annotations",
          options: [
            {
              name: "--nodownload",
              description: "Do not download the schema before generating code",
            },
          ],
        },
        {
          name: ["models", "model"],
          description: "Generates GraphQL DataStore models",
          options: [
            {
              name: "--output-dir",
              description: "Directory to write the generated models to",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--model-schema",
              description: "Path of the GraphQL schema to generate models from",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
        {
          name: "model-introspection",
          description: "Generates the model introspection schema",
          options: [
            {
              name: "--output-dir",
              description: "Directory to write the introspection schema to",
              isRequired: true,
              args: { name: "path", template: "folders" },
            },
            {
              name: "--model-schema",
              description: "Path of the GraphQL schema to generate from",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
      ],
    },
    {
      name: "console",
      description: "Opens the web console for the selected cloud resource",
      subcommands: categorySubcommands(
        allCategories.filter(
          (name) => name !== "interactions" && name !== "custom"
        )
      ),
    },
    {
      name: "logout",
      description:
        "If using temporary cloud provider credentials, this logs out of the account",
      options: [
        {
          name: "--appId",
          description: "Specify app ID",
          args: { name: "app-id" },
        },
      ],
    },
    {
      name: "env",
      description:
        "Displays and manages environment related information for your Amplify project",
      subcommands: [
        {
          name: "add",
          description: "Adds a new environment to your Amplify Project",
          options: [
            yesOption,
            {
              name: "--envName",
              description: "Specify environment name",
              args: { name: "env-name" },
            },
          ],
          args: {
            name: "env-name",
            description: "Name of the new environment",
            isOptional: true,
          },
        },
        {
          name: "pull",
          description:
            "Pulls your environment with the current cloud environment",
          options: [
            yesOption,
            {
              name: "--restore",
              description:
                "Overwrite your local backend with that of the specified environment",
            },
          ],
        },
        {
          name: "checkout",
          description:
            "Moves your environment to the environment specified in the command",
          args: {
            name: "env-name",
            description: "Env name",
            generators: envNameGenerator,
          },
          options: [
            {
              name: "--restore",
              description:
                "Overwrite your local backend with that of the specified environment",
            },
          ],
        },
        {
          name: "list",
          description:
            "Displays a list of all the environments in your Amplify project",
          options: [
            {
              name: "--details",
              description: "List environment details",
            },
            {
              name: "--json",
              description: "List environment details in JSON format",
            },
          ],
        },
        {
          name: "get",
          description: "Displays the environment details",
          options: [
            {
              name: "--name",
              description: "Specify name",
              isRequired: true,
              args: {
                name: "env-name",
                description: "Env name",
                generators: envNameGenerator,
              },
            },
            {
              name: "--json",
              description: "Get environment information in JSON format",
            },
          ],
        },
        {
          name: "import",
          description:
            "Imports an existing Amplify project environment stack to your local backend",
          options: [
            yesOption,
            {
              name: "--name",
              description: "Specify name",
              isRequired: true,
              args: { name: "env-name" },
            },
            {
              name: "--config",
              description: "Specify provider configs",
              isRequired: true,
              args: { name: "provider-configs", description: "JSON payload" },
            },
            {
              name: "--awsInfo",
              description: "Specify AWS account info",
              args: { name: "aws-configs", description: "JSON payload" },
            },
          ],
        },
        {
          name: "remove",
          description: "Removes an environment from the Amplify project",
          options: [
            yesOption,
            {
              name: "--envName",
              description: "Specify environment name",
              args: { name: "env-name", generators: envNameGenerator },
            },
          ],
          args: {
            name: "env-name",
            description: "Env name",
            isOptional: true,
            generators: envNameGenerator,
          },
        },
        {
          name: "update",
          description: "Update the environment configuration",
          options: [
            {
              name: "--permissions-boundary",
              description: "Set a permissions boundary",
              args: { name: "iam-policy-arn" },
            },
          ],
        },
      ],
    },
    {
      name: "plugin",
      description: "Configure Amplify plugins",
      subcommands: [
        {
          name: ["init", "new"],
          description: "Scaffolds a skeleton Amplify CLI plugin",
        },
        {
          name: "configure",
          description: "Configures Amplify CLI plugin options",
        },
        {
          name: "list",
          description: "Lists general plugin information",
        },
        {
          name: "scan",
          description:
            "Explicitly starts a scan/search for new and existing plugins",
        },
        {
          name: "add",
          description: "Explicitly adds a plugin for the Amplify CLI to use",
        },
        {
          name: "remove",
          description: "Explicitly removes a plugin from the Amplify CLI",
        },
        {
          name: "verify",
          description:
            "Verifies if a plugin package/directory is a valid Amplify CLI plugin",
        },
      ],
    },
    {
      name: "diagnose",
      description:
        "Capture non-sensitive Amplify backend metadata for debugging purposes",
      options: [
        {
          name: "--send-report",
          description:
            "Share non-sensitive project configurations of your Amplify backend with the Amplify team",
        },
        {
          name: "--auto-send-off",
          description:
            "Opt out of sharing your project configurations with Amplify on failures",
          exclusiveOn: ["--auto-send-on"],
        },
        {
          name: "--auto-send-on",
          description:
            "Opt in to sharing your project configurations with Amplify on failures",
          exclusiveOn: ["--auto-send-off"],
        },
      ],
    },
    {
      name: "export",
      description:
        "Export Amplify CLI-generated backend as a Cloud Development Kit (CDK) stack",
      options: [
        {
          name: "--cdk",
          description: "Exports all Amplify-generated resources as CDK",
        },
        outOption(
          "Specify the output path, where this is typically the path to your CDK project"
        ),
      ],
      subcommands: [
        {
          name: "pull",
          description:
            "Generate frontend config files at a desired location from an exported backend",
          options: [
            {
              name: "--rootStackName",
              description: "Amplify CLI deployed root stack name",
              isRequired: true,
              args: { name: "stack-name" },
            },
            {
              name: "--frontend",
              description: "Front end type",
              isRequired: true,
              args: { name: "frontend", suggestions: frontends },
            },
            outOption("Directory to write the front-end config files"),
          ],
        },
      ],
    },
    {
      name: "gen2-migration",
      description: "Migrates your Gen1 Amplify project to Gen2",
      options: gen2MigrationOptions,
      subcommands: [
        {
          name: "assess",
          description: "Assesses migration readiness for your Gen1 environment",
        },
        {
          name: "lock",
          description:
            "Locks your Gen1 environment to prevent updates during migration",
        },
        {
          name: "generate",
          description:
            "Generates Gen2 application code from your existing Gen1 environment",
        },
        {
          name: "refactor",
          description:
            "Moves stateful resources from your Gen1 CloudFormation stacks to your Gen2 stacks",
        },
        {
          name: "retain",
          description:
            "Applies retention policies to Gen1 stack resources so they survive stack deletion",
        },
      ],
    },
    {
      name: "drift",
      description:
        "Detect drift between local, deployed, and actual cloud resource states",
    },
    {
      name: "build",
      description: "Builds all resources in the project",
      args: [
        {
          name: "category",
          description: "Build only the resources of this category",
          isOptional: true,
          suggestions: allCategories,
        },
        resourceNameArg("Name of the resource to build"),
      ],
    },
    {
      name: "version",
      description: "Displays the installed Amplify CLI version",
    },
    {
      name: ["help", "h"],
      description: "Displays help for the Amplify CLI or a command",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for the command",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Displays the installed Amplify CLI version",
    },
    {
      name: "--debug",
      description: "Run the CLI in debug mode",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
