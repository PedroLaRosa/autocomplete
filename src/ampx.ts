// Amplify Gen 2 CLI (ampx) v1.10.0 (npm @aws-amplify/backend-cli latest, published 2026-09-10; synced 2026-11-20). Source: static read of the published npm tarballs
// @aws-amplify/backend-cli@1.10.0 (yargs command and option definitions under lib/commands), @aws-amplify/client-config@1.11.1 (outputs formats and versions)
// and @aws-amplify/model-generator@1.2.5 (graphql-client-code targets). The binary was not run; the parser source was read instead.

const outputsFormats = ["mjs", "json", "json-mobile", "ts", "dart"];

const outputsVersions = ["0", "1", "1.1", "1.2", "1.3", "1.4", "1.5"];

const profileOption: Fig.Option = {
  name: "--profile",
  description: "An AWS profile name",
  args: { name: "profile" },
};

const outputsOutDirOption: Fig.Option = {
  name: "--outputs-out-dir",
  description:
    "Directory where amplify_outputs is written (default is the current directory)",
  args: { name: "directory", template: "folders" },
};

const outputsVersionOption: Fig.Option = {
  name: "--outputs-version",
  description:
    "Version of the configuration, 0 is the classic amplifyconfiguration and 1.x is amplify_outputs (default is 1.5)",
  args: { name: "version", suggestions: outputsVersions },
};

const outputsFormatOption: Fig.Option = {
  name: "--outputs-format",
  description: "The amplify_outputs file format",
  args: { name: "format", suggestions: outputsFormats },
};

const stackOption: Fig.Option = {
  name: "--stack",
  description: "A stack name that contains an Amplify backend",
  exclusiveOn: ["--app-id", "--branch"],
  args: { name: "stack_name" },
};

const appIdOption: Fig.Option = {
  name: "--app-id",
  description: "The Amplify App ID of the project",
  exclusiveOn: ["--stack"],
  dependsOn: ["--branch"],
  args: { name: "app_id" },
};

const branchOption: Fig.Option = {
  name: "--branch",
  description: "A git branch of the Amplify project",
  exclusiveOn: ["--stack"],
  dependsOn: ["--app-id"],
  args: { name: "branch_name" },
};

const backendIdentifierOptions: Fig.Option[] = [
  stackOption,
  appIdOption,
  branchOption,
];

const sandboxSecretNameArg: Fig.Arg = { name: "secret-name" };

/**
 * Builds the `ampx secret` / `ampx config` command families, which manage
 * self-managed hosting values (AWS Secrets Manager / SSM Parameter Store).
 */
const hostingValueCommand = (
  word: "secret" | "config",
  description: string,
  store: string
): Fig.Subcommand => {
  const isSecret = word === "secret";
  const keyArg: Fig.Arg = { name: "key", description: "Value key" };
  return {
    name: word,
    description,
    subcommands: [
      {
        name: "set",
        description: `Set a hosting ${word} (${store})`,
        args: isSecret
          ? keyArg
          : [
              keyArg,
              {
                name: "value",
                description: "Value (omit to be prompted)",
                isOptional: true,
              },
            ],
      },
      {
        name: "get",
        description: `Get a hosting ${word} value`,
        args: keyArg,
      },
      {
        name: "list",
        description: `List hosting ${word} keys`,
      },
      {
        name: "remove",
        description: `Remove a hosting ${word} value`,
        args: keyArg,
        options: [
          {
            name: "--force",
            description:
              "Skip the confirmation prompt (for non-interactive use)",
          },
        ],
      },
    ],
  };
};

const completionSpec: Fig.Spec = {
  name: "ampx",
  description: "CLI for Amplify Gen 2",
  subcommands: [
    {
      name: "sandbox",
      description: "Start sandbox, watch mode for Amplify backend deployments",
      options: [
        {
          name: "--dir-to-watch",
          description:
            "Directory to watch for file changes, including all subdirectories (default is the amplify directory)",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--exclude",
          description:
            "Paths or glob patterns to ignore, either files or directories",
          isRepeatable: true,
          exclusiveOn: ["--once"],
          args: { name: "pattern" },
        },
        {
          name: "--identifier",
          description:
            "Identifier to distinguish between different sandboxes (default is the system username)",
          isPersistent: true,
          args: { name: "name" },
        },
        outputsFormatOption,
        outputsVersionOption,
        outputsOutDirOption,
        { ...profileOption, isPersistent: true },
        {
          name: "--once",
          description:
            "Execute a single sandbox deployment without watching for future file changes",
          exclusiveOn: [
            "--exclude",
            "--dir-to-watch",
            "--stream-function-logs",
            "--logs-filter",
            "--logs-out-file",
          ],
        },
        {
          name: "--express",
          description:
            "Deploy using CloudFormation/CDK Express mode for faster sandbox deployments",
        },
        {
          name: "--stream-function-logs",
          description: "Stream function execution logs",
          exclusiveOn: ["--once"],
        },
        {
          name: "--logs-filter",
          description:
            "Regex pattern to stream logs from only the matching functions (default is all functions)",
          isRepeatable: true,
          dependsOn: ["--stream-function-logs"],
          exclusiveOn: ["--once"],
          args: { name: "pattern" },
        },
        {
          name: "--logs-out-file",
          description:
            "File to append the streaming logs to (default is stdout)",
          dependsOn: ["--stream-function-logs"],
          exclusiveOn: ["--once"],
          args: { name: "file", template: "filepaths" },
        },
      ],
      subcommands: [
        {
          name: "delete",
          description: "Deletes sandbox environment",
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Do not ask for confirmation before deleting the sandbox environment",
            },
          ],
        },
        {
          name: "secret",
          description: "Manage sandbox secrets",
          subcommands: [
            {
              name: "set",
              description: "Set a sandbox secret",
              args: {
                ...sandboxSecretNameArg,
                description: "Name of the secret to set",
              },
            },
            {
              name: "remove",
              description: "Remove a sandbox secret",
              options: [
                {
                  name: "--all",
                  description: "Remove all secrets",
                },
              ],
              args: {
                ...sandboxSecretNameArg,
                description: "Name of the secret to remove",
                isOptional: true,
              },
            },
            {
              name: "list",
              description: "List all sandbox secrets",
            },
            {
              name: "get",
              description: "Get a sandbox secret",
              args: {
                ...sandboxSecretNameArg,
                description: "Name of the secret to get",
              },
            },
          ],
        },
        {
          name: "seed",
          description: "Seeds sandbox environment",
          subcommands: [
            {
              name: "generate-policy",
              description: "Generates policy for seeding",
            },
          ],
        },
      ],
    },
    {
      name: "generate",
      description: "Generates post deployment artifacts",
      options: [{ ...profileOption, isPersistent: true }],
      subcommands: [
        {
          name: "outputs",
          description: "Generates Amplify backend outputs",
          options: [
            ...backendIdentifierOptions,
            {
              name: "--format",
              description: "The format the configuration is exported into",
              args: { name: "format", suggestions: outputsFormats },
            },
            {
              name: "--out-dir",
              description:
                "Directory where the config is written (default is the current directory)",
              args: { name: "directory", template: "folders" },
            },
            outputsVersionOption,
          ],
        },
        {
          name: "graphql-client-code",
          description: "Generates graphql API code",
          options: [
            ...backendIdentifierOptions,
            {
              name: "--out",
              description:
                "Directory where the code is written (default is the current directory)",
              args: { name: "directory", template: "folders" },
            },
            {
              name: "--format",
              description:
                "The format the GraphQL client code is generated in (default is graphql-codegen)",
              args: {
                name: "format",
                suggestions: ["modelgen", "graphql-codegen", "introspection"],
              },
            },
            {
              name: "--model-target",
              description:
                "The modelgen export target, only applies with --format modelgen (default is typescript)",
              args: {
                name: "target",
                suggestions: [
                  "java",
                  "swift",
                  "javascript",
                  "typescript",
                  "dart",
                ],
              },
            },
            {
              name: "--statement-target",
              description:
                "The graphql-codegen statement export target, only applies with --format graphql-codegen (default is typescript)",
              args: {
                name: "target",
                suggestions: [
                  "javascript",
                  "graphql",
                  "flow",
                  "typescript",
                  "angular",
                ],
              },
            },
            {
              name: "--type-target",
              description:
                "The optional graphql-codegen type export target, only applies with --format graphql-codegen",
              args: {
                name: "target",
                suggestions: [
                  "json",
                  "swift",
                  "typescript",
                  "flow",
                  "scala",
                  "flow-modern",
                  "angular",
                ],
              },
            },
            {
              name: "--model-generate-index-rules",
              description: "Add key/index details to iOS models",
            },
            {
              name: "--model-emit-auth-provider",
              description: "Add auth provider details to iOS models",
            },
            {
              name: "--model-respect-primary-key-attributes-on-connection-field",
              description:
                "Make DataStore queries respect the primary and sort key fields rather than a default id field",
            },
            {
              name: "--model-generate-models-for-lazy-load-and-custom-selection-set",
              description:
                "Generate lazy model type definitions, required for amplify-js v5+",
            },
            {
              name: "--model-add-timestamp-fields",
              description: "Add read-only timestamp fields in modelgen",
            },
            {
              name: "--model-handle-list-nullability-transparently",
              description:
                "Configure the nullability of the List and List components in DataStore model generation",
            },
            {
              name: "--statement-max-depth",
              description: "Maximum depth of the generated GraphQL statements",
              args: { name: "depth" },
            },
            {
              name: "--statement-typename-introspection",
              description:
                "Include the default __typename in all generated statements",
            },
            {
              name: "--type-multiple-swift-files",
              description:
                "Generate multiple per-model Swift files instead of a single API.swift",
            },
          ],
        },
        {
          name: "forms",
          description: "Generates UI forms",
          options: [
            ...backendIdentifierOptions,
            {
              name: "--out-dir",
              description:
                "Directory where generated forms are written (default is ./ui-components)",
              args: { name: "directory", template: "folders" },
            },
            {
              name: "--models",
              description: "Model name to generate",
              isRepeatable: true,
              args: { name: "model" },
            },
          ],
        },
        {
          name: "schema-from-database",
          description: "Generates typescript data schema from a SQL database",
          options: [
            ...backendIdentifierOptions,
            {
              name: "--out",
              description:
                "Path where the generated schema is written (default is amplify/data/schema.sql.ts)",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--connection-uri-secret",
              description:
                "Amplify secret name for the database connection URI",
              isRequired: true,
              args: { name: "secret_name" },
            },
            {
              name: "--ssl-cert-secret",
              description: "Amplify secret name for the SSL certificate",
              args: { name: "secret_name" },
            },
          ],
        },
      ],
    },
    {
      name: "info",
      description: "Generates information for Amplify troubleshooting",
    },
    {
      name: "pipeline-deploy",
      description:
        "Deploy backends in a custom CI/CD pipeline, not intended to be used locally",
      options: [
        {
          name: "--branch",
          description: "Name of the git branch being deployed",
          isRequired: true,
          args: { name: "branch_name" },
        },
        {
          name: "--app-id",
          description: "The app id of the target Amplify app",
          isRequired: true,
          args: { name: "app_id" },
        },
        outputsOutDirOption,
        outputsVersionOption,
        outputsFormatOption,
      ],
    },
    {
      name: "deploy",
      description:
        "Deploy Amplify backend resources without Amplify Hosting (preview)",
      options: [
        {
          name: "--identifier",
          description:
            "Unique identifier for this deployment, used as the CloudFormation stack name (default is derived from the package.json name)",
          exclusiveOn: ["--pipeline"],
          args: { name: "name" },
        },
        outputsOutDirOption,
        outputsVersionOption,
        outputsFormatOption,
        profileOption,
        {
          name: "--backend",
          description:
            "Deploy only backend resources (auth, data, storage) and skip hosting",
          exclusiveOn: ["--frontend", "--pipeline"],
        },
        {
          name: "--frontend",
          description:
            "Deploy only hosting resources, requires the backend to be deployed first",
          exclusiveOn: ["--backend", "--pipeline"],
        },
        {
          name: "--pipeline",
          description: "Deploy only the pipeline stack (amplify/pipeline.ts)",
          exclusiveOn: ["--backend", "--frontend", "--identifier"],
        },
        {
          name: ["-y", "--yes"],
          description:
            "Skip the preview confirmation prompt (useful for CI/testing)",
        },
      ],
    },
    {
      name: "configure",
      description: "Configure AWS Amplify",
      subcommands: [
        {
          name: "profile",
          description: "Configure an AWS Amplify profile",
          options: [
            {
              name: "--name",
              description: "An AWS profile name (default is default)",
              args: { name: "profile", default: "default" },
            },
          ],
        },
        {
          name: "telemetry",
          description: "Configure anonymous usage data collection",
          subcommands: [
            {
              name: "enable",
              description: "Enable anonymous data collection",
            },
            {
              name: "disable",
              description: "Disable anonymous data collection",
            },
          ],
        },
      ],
    },
    {
      name: "notices",
      description:
        "Manage and interact with Amplify backend tooling notices, such as package compatibility issues and version updates",
      subcommands: [
        {
          name: "list",
          description:
            "Display active notices relevant to your Amplify backend environment",
          options: [
            {
              name: "--all",
              description: "Include already acknowledged notices",
            },
          ],
        },
        {
          name: "acknowledge",
          description: "Mark a specific notice as acknowledged",
          args: { name: "notice-id", description: "Id of the notice" },
        },
      ],
    },
    hostingValueCommand(
      "secret",
      "Manage self-managed hosting secrets",
      "AWS Secrets Manager"
    ),
    hostingValueCommand(
      "config",
      "Manage self-managed hosting config values",
      "SSM Parameter Store"
    ),
  ],
  options: [
    {
      name: "--debug",
      description: "Print debug logs to the console",
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show version number",
    },
  ],
};

export default completionSpec;
