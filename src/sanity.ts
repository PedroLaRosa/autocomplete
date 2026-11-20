// Sanity CLI v8.32.1 (@sanity/cli npm latest, shipped by the `sanity` package 6.24.0, 2026-11-20). Source: oclif.manifest.json of @sanity/cli 8.32.1 plus those of its
// bundled oclif plugins @sanity/runtime-cli 17.21.6 (blueprints, functions) and @sanity/workflows-cli 0.39.0 (workflows), read from the npm tarballs together with the
// dist sources (login providers, codemod names, topic aliases). Read statically, the CLI was not run. `help` comes from @oclif/plugin-help; `start` is a hidden alias of
// `preview` and singular topic names (dataset, hook, ...) are accepted aliases. Hidden commands/flags are marked hidden; camelCase flag aliases are left out; project,
// dataset and organization flag descriptions are shortened to one shared text. Dropped vs the v2-era spec: configcheck, uninstall, upgrade and the root `-h` (only --help is registered).

const datasetOption: Fig.Option = {
  name: ["-d", "--dataset"],
  description: "Dataset (overrides CLI configuration)",
  args: { name: "name" },
};

const datasetOption2: Fig.Option = {
  name: ["-d", "--dataset"],
  description:
    "Dataset to read, with --project-id (overrides sanity.workflow.ts)",
  args: { name: "name" },
  exclusiveOn: [
    "--workflow-resource",
    "--media-library-id",
    "--path",
    "--deployment",
  ],
  dependsOn: ["--project-id"],
};

const deploymentOption: Fig.Option = {
  name: "--deployment",
  description: "Deployment name",
  args: { name: "deployment" },
  exclusiveOn: ["--partition"],
};

const documentIdArg: Fig.Arg = {
  name: "documentId",
  description: "The document's ID",
};

const hiddenProjectIdOption: Fig.Option = {
  name: ["--project-id", "--project"],
  description: "Sanity project ID used to scope Blueprint and Stack",
  args: { name: "project-id" },
  hidden: true,
  exclusiveOn: ["--organization-id"],
};

const instanceIdArg: Fig.Arg = {
  name: "instanceId",
  description: "Workflow instance id",
};

const issueIdArg: Fig.Arg = {
  name: "issueId",
  description: "The issue's document ID",
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Format output as json",
};

const jsonOption2: Fig.Option = {
  name: "--json",
  description: "Emit structured JSON instead of rendered output",
};

const knowledgeBaseIdArg: Fig.Arg = {
  name: "knowledgeBaseId",
  description: "The knowledge base's ID (`kb...`), its `publicId`",
};

const knowledgeBaseIdArg2: Fig.Arg = {
  name: "knowledgeBaseId",
  description: "Knowledge base ID",
};

const limitOption: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "limit" },
};

const mediaLibraryIdOption: Fig.Option = {
  name: "--media-library-id",
  description: "Media Library to read (overrides sanity.workflow.ts)",
  args: { name: "id" },
  hidden: true,
  deprecated: true,
  exclusiveOn: [
    "--workflow-resource",
    "--project-id",
    "--dataset",
    "--path",
    "--deployment",
  ],
};

const nameArg: Fig.Arg = {
  name: "name",
  description: "MCP endpoint name, as in its URL",
};

const nameArg2: Fig.Arg = {
  name: "name",
  description: "Workflow definition name",
};

const nameArg3: Fig.Arg = {
  name: "name",
  description: "The name of the Sanity Function",
  isOptional: true,
};

const nameArg4: Fig.Arg = {
  name: "name",
  description: "The name of the Sanity Function",
};

const noAutoUpdatesOption: Fig.Option = {
  name: "--no-auto-updates",
  description: "Negate --auto-updates",
};

const noValidateResourcesOption: Fig.Option = {
  name: "--no-validate-resources",
  description: "Negate --validate-resources",
  hidden: true,
};

const organizationIdOption: Fig.Option = {
  name: ["--organization-id", "--organization", "--org"],
  description: "Sanity organization ID used to scope Blueprint and Stack",
  args: { name: "organization-id" },
  hidden: true,
  exclusiveOn: ["--project-id"],
};

const organizationOption: Fig.Option = {
  name: "--organization",
  description: "Organization ID (overrides CLI configuration)",
  args: { name: "id" },
};

const partitionOption: Fig.Option = {
  name: ["--partition", "--tag"],
  description: "Workflow environment partition (e.g. prod, test)",
  args: { name: "partition" },
  exclusiveOn: ["--deployment"],
};

const pathOption: Fig.Option = {
  name: ["-p", "--path", "--blueprint-path"],
  description: "Path to a Blueprint file or directory containing one",
  args: { name: "path", template: "filepaths" },
  hidden: true,
};

const prettyOption: Fig.Option = {
  name: "--pretty",
  description: "Colorize JSON output",
};

const projectIdOption: Fig.Option = {
  name: ["--project-id", "--project"],
  description: "Sanity project ID used to scope Blueprint and Stack",
  args: { name: "project-id" },
  exclusiveOn: ["--organization-id"],
};

const projectIdOption2: Fig.Option = {
  name: ["-p", "--project-id"],
  description:
    "Project ID of the dataset to read, with --dataset (overrides sanity.workflow.ts)",
  args: { name: "id" },
  exclusiveOn: [
    "--workflow-resource",
    "--media-library-id",
    "--path",
    "--deployment",
  ],
  dependsOn: ["--dataset"],
};

const projectOption: Fig.Option = {
  name: ["-p", "--project", "--project-id"],
  description: "Project ID (overrides CLI configuration)",
  args: { name: "id" },
};

const sourceIdArg: Fig.Arg = {
  name: "sourceId",
  description: "The source's ID",
};

const stackOption: Fig.Option = {
  name: "--stack",
  description:
    "Stack name or ID to use instead of the locally configured Stack",
  args: { name: "stack" },
  hidden: true,
};

const syncIdArg: Fig.Arg = { name: "syncId", description: "The sync's ID" };

const traceOption: Fig.Option = {
  name: "--trace",
  description: "Trace output",
  hidden: true,
};

const validateResourcesOption: Fig.Option = {
  name: "--validate-resources",
  description: "Validate resources",
  hidden: true,
};

const verboseOption: Fig.Option = {
  name: "--verbose",
  description: "Verbose output",
  hidden: true,
};

const visibleMediaLibraryIdOption: Fig.Option = {
  name: "--media-library-id",
  description: "The id of the target media library",
  args: { name: "media-library-id" },
};

const visibleOrganizationIdOption: Fig.Option = {
  name: ["--organization-id", "--organization", "--org"],
  description: "Sanity organization ID used to scope Blueprint and Stack",
  args: { name: "organization-id" },
  exclusiveOn: ["--project-id"],
};

const visiblePathOption: Fig.Option = {
  name: "--path",
  description:
    "Path to a sanity.workflow file, or a directory to search from upward through its parents",
  args: { name: "file|dir", template: "filepaths" },
};

const visibleStackOption: Fig.Option = {
  name: "--stack",
  description:
    "Stack name or ID to use instead of the locally configured Stack",
  args: { name: "stack" },
};

const watchOption: Fig.Option = {
  name: "--watch",
  description: "Wait for the job to finish, exiting non-zero if it fails",
};

const watchOption2: Fig.Option = {
  name: "--watch",
  description:
    "Wait for the sync to settle, exiting non-zero unless it completes: when it fails, is cancelled or is held for confirmation",
};

const workflowResourceOption: Fig.Option = {
  name: "--workflow-resource",
  description:
    "Resource to read, as <type>:<id>: dataset:<projectId>.<dataset>, media-library:<id>, canvas:<id> or dashboard:<id> (overrides sanity.workflow.ts)",
  args: { name: "type:id" },
  exclusiveOn: [
    "--project-id",
    "--dataset",
    "--media-library-id",
    "--path",
    "--deployment",
  ],
};

const yesOption: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Skip confirmation prompt (unattended mode)",
};

const yesOption2: Fig.Option = {
  name: ["-y", "--yes"],
  description:
    'Unattended mode, answers "yes" to any "yes/no" prompt and otherwise uses defaults',
};

const completionSpec: Fig.Spec = {
  name: "sanity",
  description: "Sanity CLI tool for managing Sanity projects and organizations",
  subcommands: [
    {
      name: "api",
      description: "Make an authenticated HTTP request to a Sanity API",
      options: [
        projectOption,
        datasetOption,
        {
          name: "--anonymous",
          description: "Send the request without an authorization token",
        },
        {
          name: "--api-version",
          description: "API version to use (eg v2025-02-19)",
          args: { name: "version" },
        },
        {
          name: ["-F", "--field"],
          description:
            "Add a typed parameter (key=value): true/false/null and numbers are converted, @file reads the value from a file, @- from stdin",
          args: { name: "key=value" },
          isRepeatable: true,
        },
        {
          name: "--global",
          description:
            "Force the request to the global API host (api.sanity.io)",
          exclusiveOn: ["--project-hosted"],
        },
        {
          name: ["-H", "--header"],
          description: "Add an HTTP request header (key: value)",
          args: { name: "key:value" },
          isRepeatable: true,
        },
        {
          name: ["-i", "--include"],
          description:
            "Include the HTTP response status and headers in the output",
        },
        {
          name: "--input",
          description:
            'Read the raw request body from a file (use "-" for stdin)',
          args: { name: "file", template: "filepaths" },
          exclusiveOn: ["--field", "--raw-field"],
        },
        {
          name: ["-X", "--method"],
          description:
            "HTTP method to use (default GET, or POST when fields or --input are provided)",
          args: { name: "method" },
        },
        prettyOption,
        {
          name: "--project-hosted",
          description:
            "Force the request to the project API host (<projectId>.api.sanity.io)",
          exclusiveOn: ["--global"],
        },
        {
          name: ["-f", "--raw-field"],
          description: "Add a string parameter (key=value)",
          args: { name: "key=value" },
          isRepeatable: true,
        },
        {
          name: ["-t", "--token"],
          description:
            "API token to authenticate with, instead of the logged-in user token",
          args: { name: "token" },
          exclusiveOn: ["--anonymous"],
        },
      ],
      args: {
        name: "endpoint",
        description:
          'API path (eg "projects" or "data/query/{dataset}"), optionally with placeholders, or a full https://*.api.sanity.io URL',
      },
    },
    {
      name: ["assets", "asset"],
      description: "Upload assets to a dataset",
      subcommands: [
        {
          name: "upload",
          description:
            "Upload one image or file to a Sanity dataset, from a local path or a URL, and print the asset document as JSON",
          options: [
            projectOption,
            datasetOption,
            {
              name: "--content-type",
              description:
                "MIME type of the asset, such as image/png or application/pdf",
              args: { name: "mime-type" },
            },
            {
              name: "--file",
              description: "Path to the local file to upload",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--filename",
              description: "Original filename stored on the asset document",
              args: { name: "filename" },
            },
            {
              name: "--from-url",
              description:
                "HTTPS URL for Sanity to fetch the asset from, instead of uploading a local file",
              args: { name: "url" },
            },
            {
              name: "--type",
              description: "Asset type to create",
              args: {
                name: "type",
                suggestions: ["image", "file"],
                default: "image",
              },
            },
          ],
        },
      ],
    },
    {
      name: ["backups", "backup"],
      description: "Manage dataset backups",
      subcommands: [
        {
          name: "disable",
          description: "Disable backup for a dataset",
          options: [projectOption],
          args: {
            name: "dataset",
            description: "Dataset name to disable backup for",
            isOptional: true,
          },
        },
        {
          name: "download",
          description: "Download a dataset backup to a local file",
          options: [
            projectOption,
            {
              name: "--backup-id",
              description: "The backup ID to download",
              args: { name: "backup-id" },
            },
            {
              name: "--concurrency",
              description:
                "Concurrent number of backup item downloads (max: 24)",
              args: { name: "concurrency", default: "10" },
            },
            {
              name: "--out",
              description:
                "The file or directory path the backup should download to",
              args: { name: "out", template: "filepaths" },
            },
            {
              name: "--overwrite",
              description: "Allows overwriting of existing backup file",
            },
          ],
          args: {
            name: "dataset",
            description: "Dataset name to download backup from",
            isOptional: true,
          },
        },
        {
          name: "enable",
          description: "Enable backup for a dataset",
          options: [projectOption],
          args: {
            name: "dataset",
            description: "Dataset name to enable backup for",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List available backups for a dataset",
          options: [
            projectOption,
            {
              name: "--after",
              description:
                "Only return backups after this date (inclusive, YYYY-MM-DD format)",
              args: { name: "after" },
            },
            {
              name: "--before",
              description:
                "Only return backups before this date (exclusive, YYYY-MM-DD format)",
              args: { name: "before" },
            },
            {
              name: ["-l", "--limit"],
              description: "Maximum number of backups returned",
              args: { name: "limit", default: "30" },
            },
          ],
          args: {
            name: "dataset",
            description: "Dataset name to list backups for",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: ["blueprints", "blueprint"],
      description: "Local Blueprint and remote Stack management commands",
      subcommands: [
        {
          name: "add",
          description: 'Use "functions add" instead',
          deprecated: true,
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            stackOption,
            hiddenProjectIdOption,
            organizationIdOption,
            {
              name: ["--example", "--recipe"],
              description: "Example to use for the function resource",
              args: { name: "example" },
              exclusiveOn: [
                "--name",
                "--fn-type",
                "--language",
                "--javascript",
                "--fn-helpers",
                "--fn-installer",
              ],
            },
            {
              name: ["-n", "--name"],
              description: "Name of the resource to add",
              args: { name: "name" },
            },
            {
              name: ["--fn-type", "--function-type"],
              description:
                "Document change event(s) that should trigger the function; you can specify multiple events by specifying this flag multiple times",
              args: {
                name: "fn-type",
                suggestions: [
                  "document-publish",
                  "document-create",
                  "document-delete",
                  "document-update",
                  "media-library-asset-create",
                  "media-library-asset-delete",
                  "media-library-asset-update",
                  "pub-sub",
                  "scheduled-function",
                  "sync-tag-invalidate",
                  "durable-function",
                ],
              },
              isRepeatable: true,
              dependsOn: ["--name"],
            },
            {
              name: [
                "--language",
                "--function-language",
                "--fn-language",
                "--lang",
              ],
              description: "Language of the new function",
              args: {
                name: "language",
                suggestions: ["ts", "js"],
                default: "ts",
              },
            },
            {
              name: ["--javascript", "--js"],
              description: "Use JavaScript instead of TypeScript",
              exclusiveOn: ["--language"],
            },
            {
              name: ["--fn-helpers", "--function-helpers", "--helpers"],
              description: "Add helpers to the new function",
            },
            { name: "--no-fn-helpers", description: "Negate --fn-helpers" },
            {
              name: ["--fn-installer", "--function-installer", "--installer"],
              description:
                "Which package manager to use when installing the @sanity/functions helpers",
              args: {
                name: "fn-installer",
                suggestions: ["skip", "npm", "pnpm", "yarn"],
              },
            },
            {
              name: ["-i", "--install"],
              description: "Shortcut for --fn-installer npm",
              exclusiveOn: ["--fn-installer"],
            },
          ],
          args: {
            name: "type",
            description:
              'Type of resource to add (only "function" is supported)',
            suggestions: ["function"],
          },
        },
        {
          name: "config",
          description: "View or edit the local Blueprint configuration",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            {
              name: ["--stack", "--stack-id"],
              description: "Stack name or ID to set in the configuration",
              args: { name: "stack" },
              dependsOn: ["--edit"],
            },
            {
              name: ["--project-id", "--project"],
              description:
                "Sanity project ID used to scope Blueprint and Stack",
              args: { name: "project-id" },
              exclusiveOn: ["--organization-id"],
              dependsOn: ["--edit"],
            },
            {
              name: ["--organization-id", "--organization", "--org"],
              description:
                "Sanity organization ID used to scope Blueprint and Stack",
              args: { name: "organization-id" },
              exclusiveOn: ["--project-id"],
              dependsOn: ["--edit"],
            },
            {
              name: ["-e", "--edit"],
              description:
                "Modify the configuration interactively, or directly when combined with ID flags",
            },
          ],
        },
        {
          name: "deploy",
          description: "Deploy the local Blueprint to the remote Stack",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            visibleStackOption,
            projectIdOption,
            visibleOrganizationIdOption,
            {
              name: ["-m", "--message"],
              description:
                "Message describing the deployment (e.g. reason for change)",
              args: { name: "message" },
            },
            {
              name: ["--fn-installer", "--function-installer", "--installer"],
              description:
                "Which package manager to use when installing Function dependencies",
              args: {
                name: "fn-installer",
                suggestions: ["npm", "pnpm", "yarn"],
              },
              hidden: true,
            },
            {
              name: "--no-wait",
              description: "Do not wait for Stack deployment to complete",
            },
            {
              name: ["--configure", "--config", "--init"],
              description:
                "Configure the local Blueprint interactively before deploying",
              hidden: true,
            },
            {
              name: "--new-stack-name",
              description: "Set a new name for the Stack",
              args: { name: "new-stack-name" },
            },
          ],
        },
        {
          name: "destroy",
          description: "Destroy a remote Stack deployment and its resources",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            {
              name: ["--stack", "--stack-id"],
              description:
                "Stack name or ID to destroy (defaults to the locally configured Stack)",
              args: { name: "stack" },
            },
            {
              name: ["--project-id", "--project"],
              description:
                "Sanity project ID used to scope Blueprint and Stack",
              args: { name: "project-id" },
              exclusiveOn: ["--organization-id"],
              dependsOn: ["--stack", "--force"],
            },
            {
              name: ["--organization-id", "--organization", "--org"],
              description:
                "Sanity organization ID used to scope Blueprint and Stack",
              args: { name: "organization-id" },
              exclusiveOn: ["--project-id"],
              dependsOn: ["--stack", "--force"],
            },
            {
              name: ["-f", "--force"],
              description: "Force Stack destruction (skip confirmation)",
            },
            {
              name: "--no-wait",
              description: "Do not wait for Stack destruction to complete",
            },
          ],
          isDangerous: true,
        },
        {
          name: "doctor",
          description:
            "Diagnose potential issues with local Blueprint and remote Stack configuration",
          options: [
            jsonOption,
            {
              name: ["-p", "--path", "--blueprint-path"],
              description:
                "Path to a Blueprint file or directory containing one",
              args: { name: "path", template: "filepaths" },
            },
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            {
              name: "--fix",
              description: "Interactively fix configuration issues",
            },
          ],
        },
        {
          name: "info",
          description:
            "Display the status and resources of the remote Stack deployment",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            {
              name: ["-v", "--verbose"],
              description: "Show resource and external IDs",
            },
            {
              name: ["--stack", "--id"],
              description: "Stack name or ID",
              args: { name: "stack" },
            },
            projectIdOption,
            visibleOrganizationIdOption,
          ],
        },
        {
          name: "init",
          description: "Initialize a Blueprint and create a remote Stack",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            {
              name: "--dir",
              description: "Directory to create the local Blueprint in",
              args: { name: "dir", template: "folders" },
            },
            {
              name: ["--example", "--recipe"],
              description: "Example to use for the local Blueprint",
              args: { name: "example" },
              exclusiveOn: ["--blueprint-type", "--stack-id", "--stack-name"],
            },
            {
              name: ["--blueprint-type", "--type"],
              description:
                "Blueprint manifest type to use for the local Blueprint",
              args: {
                name: "blueprint-type",
                suggestions: ["json", "js", "ts"],
              },
            },
            projectIdOption,
            visibleOrganizationIdOption,
            {
              name: "--stack-id",
              description: "Existing Stack ID used to scope local Blueprint",
              args: { name: "stack-id" },
              exclusiveOn: ["--stack-name"],
            },
            {
              name: ["--stack-name", "--name"],
              description:
                "Name to use for a new Stack provisioned during initialization",
              args: { name: "stack-name" },
              exclusiveOn: ["--stack-id"],
            },
          ],
          args: {
            name: "dir",
            description:
              "Directory to create the local Blueprint in (defaults to the current directory)",
            template: "folders",
            isOptional: true,
          },
        },
        {
          name: "logs",
          description:
            "Display logs for the current Blueprint's Stack deployment",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            visibleStackOption,
            projectIdOption,
            visibleOrganizationIdOption,
            {
              name: ["-w", "--watch", "--follow"],
              description: "Watch for new Stack logs",
              exclusiveOn: ["--json"],
            },
            {
              name: ["-l", "--limit"],
              description: "Maximum number of log entries to retrieve (1-500)",
              args: { name: "limit" },
              exclusiveOn: ["--watch"],
            },
            {
              name: "--since",
              description: "Only show logs after this ISO 8601 timestamp",
              args: { name: "since" },
              exclusiveOn: ["--watch"],
            },
            {
              name: "--before",
              description: "Only show logs before this ISO 8601 timestamp",
              args: { name: "before" },
              exclusiveOn: ["--watch"],
            },
          ],
        },
        {
          name: "mint-deploy-token",
          description:
            "Create a robot API token for deploying Blueprints from CI/CD",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            stackOption,
            projectIdOption,
            visibleOrganizationIdOption,
            {
              name: "--label",
              description: "Human-readable label for the robot",
              args: { name: "label" },
            },
            {
              name: ["-P", "--print"],
              description:
                "Print only the raw token to stdout (suitable for shell substitution)",
              exclusiveOn: ["--json"],
            },
          ],
        },
        {
          name: "plan",
          description:
            "Preview changes that will be applied to the remote Stack",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            visibleStackOption,
            projectIdOption,
            visibleOrganizationIdOption,
          ],
        },
        {
          name: "promote",
          description:
            "Promote a Stack from project scope to organization scope",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            {
              name: ["--stack", "--id"],
              description: "Stack name or ID to promote",
              args: { name: "stack" },
            },
            projectIdOption,
            organizationIdOption,
            { name: "--force", description: "Skip confirmation prompt" },
            {
              name: "--new-stack-name",
              description: "Set a new name for the Stack while promoting",
              args: { name: "new-stack-name" },
            },
          ],
        },
        {
          name: "stacks",
          description:
            "List remote Stack deployments for your project or organization",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            stackOption,
            {
              name: ["--project-id", "--project"],
              description:
                "Sanity project ID used to scope Blueprint and Stack",
              args: { name: "project-id" },
              exclusiveOn: ["--organization-id", "--include-projects", "--all"],
            },
            {
              name: ["--organization-id", "--organization", "--org"],
              description:
                "Sanity organization ID used to scope Blueprint and Stack",
              args: { name: "organization-id" },
              exclusiveOn: ["--project-id", "--all"],
            },
            {
              name: "--include-projects",
              description:
                "Include Stacks from all projects within the organization",
              dependsOn: ["--organization-id"],
            },
            {
              name: "--all",
              description:
                "List Stacks from every organization and project you have access to",
              exclusiveOn: [
                "--project-id",
                "--organization-id",
                "--include-projects",
              ],
            },
          ],
        },
      ],
    },
    {
      name: "build",
      description: "Build Sanity Studio into a static bundle",
      options: [
        {
          name: "--auto-updates",
          description: "Enable/disable auto updates of studio versions",
        },
        noAutoUpdatesOption,
        {
          name: "--minify",
          description: "Enable/disable minifying of built bundles",
        },
        { name: "--no-minify", description: "Negate --minify" },
        {
          name: "--source-maps",
          description:
            "Enable source maps for built bundles (increases size of bundle)",
        },
        { name: "--no-source-maps", description: "Negate --source-maps" },
        { name: "--stats", description: "Show stats about the built bundles" },
        yesOption2,
      ],
      args: {
        name: "outputDir",
        description: "Output directory",
        template: "folders",
        isOptional: true,
      },
    },
    {
      name: "codemod",
      description:
        "Updates Sanity Studio codebase with a code modification script",
      options: [
        {
          name: "--dry",
          description: "Dry run (no changes are made to files)",
        },
        {
          name: "--extensions",
          description:
            "Transform files with these file extensions (comma separated)",
          args: { name: "extensions", default: "js,ts,tsx" },
        },
        {
          name: "--no-verify",
          description: "Skip verification steps before running codemod",
        },
      ],
      args: {
        name: "codemodName",
        description: "Name of the codemod to run",
        suggestions: [
          {
            name: "dashboard",
            description:
              "Move an existing Studio or SDK app onto the Dashboard",
          },
          {
            name: "deskRename",
            description:
              "Transform `sanity/desk` imports to `sanity/structure`",
          },
          {
            name: "partsTypeDirective",
            description:
              "Add parts types directive to all ts/tsx files that has one or more part imports",
          },
          {
            name: "reactIconsV3",
            description: "Transform react-icons v2 imports to v3 form",
          },
        ],
        isOptional: true,
      },
    },
    {
      name: "context",
      description: "Manage Context knowledge bases and MCP endpoints",
      subcommands: [
        {
          name: "build",
          description: "Start a knowledge base build",
          options: [
            jsonOption,
            watchOption,
            {
              name: "--cancel",
              description: "Cancel the running build instead of starting one",
              exclusiveOn: ["--watch"],
            },
          ],
          args: knowledgeBaseIdArg,
        },
        {
          name: "create",
          description: "Create a knowledge base",
          options: [
            jsonOption,
            {
              name: "--title",
              description: "The knowledge base's title",
              args: { name: "title" },
            },
            {
              name: "--description",
              description:
                "A short description of what the knowledge base covers",
              args: { name: "description" },
            },
            {
              name: "--draft",
              description: "Whether to create the knowledge base as a draft",
            },
            { name: "--no-draft", description: "Negate --draft" },
            organizationOption,
          ],
        },
        {
          name: "delete",
          description: "Delete a knowledge base",
          options: [jsonOption, yesOption],
          args: knowledgeBaseIdArg,
          isDangerous: true,
        },
        {
          name: "documents",
          description: "Manage documents in a knowledge base",
          subcommands: [
            {
              name: "content",
              description: "Get a document's markdown",
              options: [
                jsonOption,
                {
                  name: "--format",
                  description: "Response format",
                  args: {
                    name: "format",
                    suggestions: ["json", "markdown", "plain", "raw"],
                  },
                },
                {
                  name: "--chunk",
                  description: "Return only this chunk's lines",
                  args: { name: "chunk" },
                },
                {
                  name: "--lines",
                  description:
                    "Return only these lines, from 1 and inclusive: `10-20`, or `10` for line 10 to the end",
                  args: { name: "lines" },
                },
                {
                  name: "--line-numbers",
                  description: "Number each line as citations number them",
                },
                {
                  name: ["-o", "--output"],
                  description:
                    "Write the content to this file instead of stdout",
                  args: { name: "file", template: "filepaths" },
                },
              ],
              args: [knowledgeBaseIdArg, documentIdArg],
            },
            {
              name: "delete",
              description: "Delete a document",
              options: [jsonOption, yesOption],
              args: [knowledgeBaseIdArg, documentIdArg],
              isDangerous: true,
            },
            {
              name: "edit",
              description: "Keep a missing document",
              options: [
                jsonOption,
                {
                  name: "--state",
                  description:
                    "Set to `active` to keep a `missing` page in the knowledge base",
                  args: { name: "state", suggestions: ["active"] },
                },
              ],
              args: [knowledgeBaseIdArg, documentIdArg],
            },
            {
              name: "get",
              description: "Get a document",
              options: [jsonOption],
              args: [knowledgeBaseIdArg, documentIdArg],
            },
            {
              name: "list",
              description: "List documents",
              options: [
                jsonOption,
                limitOption,
                {
                  name: "--source",
                  description: "Return only the documents of this source",
                  args: { name: "source" },
                },
                {
                  name: "--state",
                  description: "Return only documents in this state",
                  args: {
                    name: "state",
                    suggestions: ["active", "missing", "deleted"],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "Comma-separated IDs of the documents to return, up to 200, in any state",
                  args: { name: "ids" },
                },
              ],
              args: knowledgeBaseIdArg,
            },
          ],
        },
        {
          name: "entries",
          description: "Inspect entries built for a knowledge base",
          subcommands: [
            {
              name: "get",
              description: "Get an entry and its content",
              options: [jsonOption],
              args: [
                knowledgeBaseIdArg2,
                {
                  name: "path",
                  description:
                    "Entry path, as listed by `sanity context entries list`",
                },
              ],
            },
            {
              name: "list",
              description: "List the entries a knowledge base build produced",
              options: [jsonOption],
              args: knowledgeBaseIdArg2,
            },
            {
              name: "rebuild",
              description: "Rebuild an entry from its sources",
              options: [jsonOption, watchOption],
              args: [
                knowledgeBaseIdArg,
                {
                  name: "entryPath",
                  description:
                    "The entry's slash-delimited path, such as `pricing/plans/free`, URL-encoded",
                },
              ],
            },
          ],
        },
        {
          name: "get",
          description: "Get a knowledge base",
          options: [jsonOption],
          args: knowledgeBaseIdArg,
        },
        {
          name: "instructions",
          description: "Manage instructions for a knowledge base",
          subcommands: [
            {
              name: "create",
              description: "Create an instruction",
              options: [
                jsonOption,
                {
                  name: "--statement",
                  description: "The instruction in plain language",
                  args: { name: "statement" },
                },
                {
                  name: "--scope-document-ids",
                  description:
                    "IDs of the documents the instruction applies to",
                  args: { name: "scope-document-ids" },
                  isRepeatable: true,
                },
                {
                  name: "--rebuild-paths",
                  description:
                    "Paths of entries to rebuild under the new instruction right away",
                  args: { name: "rebuild-paths" },
                  isRepeatable: true,
                },
                {
                  name: "--verified",
                  description:
                    "Whether you already checked the instruction for entries that contradict it",
                },
                { name: "--no-verified", description: "Negate --verified" },
              ],
              args: knowledgeBaseIdArg,
            },
            {
              name: "delete",
              description: "Delete an instruction",
              options: [
                jsonOption,
                {
                  name: "--rebuild",
                  description:
                    "Set to `true` to rebuild every entry built from the instruction's documents once it is deleted, so pages written under the instruction reflect their documents again",
                },
                { name: "--no-rebuild", description: "Negate --rebuild" },
                yesOption,
              ],
              args: [
                knowledgeBaseIdArg,
                { name: "instructionId", description: "The instruction's ID" },
              ],
              isDangerous: true,
            },
            {
              name: "edit",
              description: "Update an instruction",
              options: [
                jsonOption,
                {
                  name: "--statement",
                  description: "The new instruction text",
                  args: { name: "statement" },
                },
                {
                  name: "--scope-document-ids",
                  description:
                    "IDs of the documents the instruction applies to",
                  args: { name: "scope-document-ids" },
                  isRepeatable: true,
                },
              ],
              args: [
                knowledgeBaseIdArg,
                { name: "instructionId", description: "The instruction's ID" },
              ],
            },
          ],
        },
        {
          name: "issues",
          description: "Manage issues found by knowledge base builds",
          subcommands: [
            {
              name: "apply",
              description: "Accept and apply issues",
              options: [jsonOption, watchOption],
              args: [
                knowledgeBaseIdArg,
                {
                  name: "issueIds",
                  description: "The IDs of the issues to accept and apply",
                },
              ],
            },
            {
              name: "dismiss",
              description: "Dismiss an issue",
              options: [jsonOption],
              args: [knowledgeBaseIdArg, issueIdArg],
            },
            {
              name: "get",
              description: "Get details of an issue",
              options: [jsonOption],
              args: [
                knowledgeBaseIdArg2,
                { name: "issueId", description: "Issue ID" },
              ],
            },
            {
              name: "list",
              description: "List issues found by knowledge base builds",
              options: [
                jsonOption,
                {
                  name: "--kind",
                  description: "Only list issues of this kind",
                  args: {
                    name: "kind",
                    suggestions: ["conflict", "update_required"],
                  },
                },
                {
                  name: "--scope",
                  description:
                    "Only list issues about this entry path or anything under it (`*` for knowledge-base-wide issues)",
                  args: { name: "path" },
                },
                {
                  name: "--severity",
                  description: "Only list issues of this severity",
                  args: {
                    name: "severity",
                    suggestions: ["critical", "suggestion"],
                  },
                },
                {
                  name: "--status",
                  description:
                    "Only list issues with this status (rejected = dismissed, accepted = resolved or applied)",
                  args: {
                    name: "status",
                    suggestions: ["open", "accepted", "rejected"],
                  },
                },
              ],
              args: knowledgeBaseIdArg2,
            },
            {
              name: "reopen",
              description: "Reopen an accepted conflict",
              options: [jsonOption],
              args: [knowledgeBaseIdArg, issueIdArg],
            },
            {
              name: "resolve",
              description: "Resolve a conflict issue",
              options: [
                jsonOption,
                watchOption,
                {
                  name: "--side",
                  description:
                    "Index of the correct side, as listed by `sanity context issues get`",
                  args: { name: "side" },
                },
              ],
              args: [knowledgeBaseIdArg, issueIdArg],
            },
          ],
        },
        {
          name: "jobs",
          description: "Inspect background jobs of a knowledge base",
          subcommands: [
            {
              name: "get",
              description: "Get a job",
              options: [jsonOption, watchOption],
              args: [
                knowledgeBaseIdArg,
                {
                  name: "jobId",
                  description:
                    "The job ID returned by the endpoint that started the work",
                },
              ],
            },
          ],
        },
        {
          name: "list",
          description: "List knowledge bases",
          options: [
            jsonOption,
            limitOption,
            {
              name: "--include-drafts",
              description:
                "Set to `true` to also list the organization's drafts, which have `state` set to `draft`",
            },
            {
              name: "--no-include-drafts",
              description: "Negate --include-drafts",
            },
            organizationOption,
          ],
        },
        {
          name: "mcp",
          description: "Manage Context MCP endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Context MCP endpoint that serves knowledge bases and a dataset to agents",
              options: [
                organizationOption,
                {
                  name: ["-d", "--dataset"],
                  description: "Dataset the endpoint serves",
                  args: { name: "name" },
                },
                {
                  name: ["-p", "--project", "--project-id"],
                  description:
                    "Project the dataset belongs to (overrides CLI configuration)",
                  args: { name: "id" },
                  dependsOn: ["--dataset"],
                },
                {
                  name: "--groq-filter",
                  description:
                    "GROQ filter that limits which dataset documents the endpoint serves",
                  args: { name: "groq-filter" },
                  dependsOn: ["--dataset"],
                },
                {
                  name: "--instructions",
                  description:
                    "Instructions the endpoint serves to connecting agents",
                  args: { name: "instructions" },
                },
                {
                  name: "--knowledge-base",
                  description:
                    "Knowledge base the endpoint serves; repeat the flag to serve several",
                  args: { name: "id" },
                  isRepeatable: true,
                },
                {
                  name: "--perspective",
                  description: "Perspective agents query the dataset with",
                  args: {
                    name: "perspective",
                    suggestions: ["published", "drafts", "raw"],
                  },
                  dependsOn: ["--dataset"],
                },
                {
                  name: "--semantic-search",
                  description:
                    "Let agents use semantic search on the dataset (--no-semantic-search to turn it off)",
                  dependsOn: ["--dataset"],
                },
                {
                  name: "--no-semantic-search",
                  description: "Negate --semantic-search",
                },
                {
                  name: "--title",
                  description: "MCP endpoint title",
                  args: { name: "title" },
                },
                {
                  name: "--workspace",
                  description:
                    "Studio workspace whose schema agents use, instead of the first workspace",
                  args: { name: "workspace" },
                  dependsOn: ["--dataset"],
                },
              ],
              args: {
                name: "name",
                description:
                  "Permanent MCP endpoint name used in its URL, made of lowercase letters, digits and hyphens",
              },
            },
            {
              name: "delete",
              description:
                "Delete a Context MCP endpoint, which disconnects any agents using it",
              options: [organizationOption, yesOption],
              args: nameArg,
              isDangerous: true,
            },
            {
              name: "get",
              description:
                "Get details of a Context MCP endpoint, including its URL",
              options: [jsonOption, organizationOption],
              args: nameArg,
            },
            {
              name: "initial-context",
              description: "Get an MCP endpoint's initial context",
              options: [
                jsonOption,
                {
                  name: "--link-resolver",
                  description:
                    "A JSON array that adds `_url` fields to query results",
                  args: { name: "link-resolver" },
                },
                {
                  name: "--heading_offset",
                  description:
                    "How many levels to shift markdown headings down, from `0` to `6`",
                  args: { name: "heading_offset" },
                },
                organizationOption,
              ],
              args: {
                name: "mcpEndpoint",
                description:
                  "The MCP endpoint's name, set when the endpoint was created",
              },
            },
            {
              name: "list",
              description: "List Context MCP endpoints in an organization",
              options: [jsonOption, organizationOption],
            },
            {
              name: "status",
              description:
                "Check whether an agent connecting with your credentials can use a Context MCP endpoint",
              options: [jsonOption, organizationOption],
              args: nameArg,
            },
            {
              name: "update",
              description: "Update a Context MCP endpoint",
              options: [
                organizationOption,
                {
                  name: "--add-knowledge-base",
                  description:
                    "Knowledge base to add to the endpoint; repeat the flag to add several",
                  args: { name: "id" },
                  isRepeatable: true,
                },
                {
                  name: ["-d", "--dataset"],
                  description:
                    "Dataset the endpoint serves, replacing its current dataset",
                  args: { name: "name" },
                },
                {
                  name: ["-p", "--project", "--project-id"],
                  description:
                    "Project the dataset belongs to (overrides CLI configuration)",
                  args: { name: "id" },
                  dependsOn: ["--dataset"],
                },
                {
                  name: "--groq-filter",
                  description:
                    'GROQ filter that limits which dataset documents the endpoint serves ("" removes it)',
                  args: { name: "groq-filter" },
                },
                {
                  name: "--instructions",
                  description:
                    'Instructions the endpoint serves to connecting agents ("" removes them)',
                  args: { name: "instructions" },
                },
                {
                  name: "--knowledge-base",
                  args: { name: "knowledge-base" },
                  isRepeatable: true,
                  hidden: true,
                },
                {
                  name: "--no-dataset",
                  description:
                    "Stop serving the dataset, which also removes the GROQ filter",
                  exclusiveOn: ["--dataset"],
                },
                {
                  name: "--perspective",
                  description: "Perspective agents query the dataset with",
                  args: {
                    name: "perspective",
                    suggestions: ["published", "drafts", "raw"],
                  },
                },
                {
                  name: "--remove-knowledge-base",
                  description:
                    "Knowledge base to remove from the endpoint; repeat the flag to remove several",
                  args: { name: "id" },
                  isRepeatable: true,
                },
                {
                  name: "--semantic-search",
                  description:
                    "Let agents use semantic search on the dataset (--no-semantic-search to turn it off)",
                },
                {
                  name: "--no-semantic-search",
                  description: "Negate --semantic-search",
                },
                {
                  name: "--title",
                  description: "New MCP endpoint title",
                  args: { name: "title" },
                },
                {
                  name: "--workspace",
                  description:
                    'Studio workspace whose schema agents use ("" goes back to the first workspace)',
                  args: { name: "workspace" },
                },
              ],
              args: nameArg,
            },
          ],
        },
        {
          name: "query",
          description: "Query an organization's Context documents with GROQ",
          options: [
            jsonOption,
            organizationOption,
            {
              name: "--params",
              description: "Query parameters as a JSON object",
              args: { name: "json" },
            },
          ],
          args: {
            name: "query",
            description:
              "GROQ query to run against the organization's Context documents",
          },
        },
        {
          name: "sources",
          description: "Manage sources of a knowledge base",
          subcommands: [
            {
              name: "create",
              description: "Add a source",
              options: [
                jsonOption,
                {
                  name: "--type",
                  description: "The source type",
                  args: {
                    name: "type",
                    suggestions: ["web", "sanity-dataset", "files"],
                  },
                },
                {
                  name: "--url",
                  description: "The URL to start crawling from",
                  args: { name: "url" },
                  exclusiveOn: ["--query", "--file", "--text"],
                },
                {
                  name: "--include-paths",
                  description: "Regular expressions for URL paths to crawl",
                  args: { name: "include-paths" },
                  isRepeatable: true,
                },
                {
                  name: "--exclude-paths",
                  description: "Regular expressions for URL paths to skip",
                  args: { name: "exclude-paths" },
                  isRepeatable: true,
                },
                {
                  name: "--max-depth",
                  description:
                    "How many levels deep the crawl goes from the root URL",
                  args: { name: "max-depth" },
                },
                {
                  name: "--sitemap-only",
                  description:
                    "Whether to crawl only the pages listed in the site's sitemap",
                },
                {
                  name: "--no-sitemap-only",
                  description: "Negate --sitemap-only",
                },
                {
                  name: "--ignore-query-parameters",
                  description:
                    "Whether to treat URLs that differ only by query string as one page",
                },
                {
                  name: "--no-ignore-query-parameters",
                  description: "Negate --ignore-query-parameters",
                },
                {
                  name: "--page-limit",
                  description: "The maximum number of pages to crawl",
                  args: { name: "page-limit" },
                },
                {
                  name: "--dry-run",
                  description:
                    "Set to `true` to estimate what a crawl would fetch without adding the source",
                },
                { name: "--no-dry-run", description: "Negate --dry-run" },
                {
                  name: "--sanity-project-id",
                  description:
                    "The ID of the Sanity project to read documents from",
                  args: { name: "sanity-project-id" },
                },
                {
                  name: "--sanity-dataset-id",
                  description: "The dataset to read documents from",
                  args: { name: "sanity-dataset-id" },
                },
                {
                  name: "--query",
                  description:
                    "A GROQ query that selects the documents, with an optional projection",
                  args: { name: "query" },
                  exclusiveOn: ["--url", "--file", "--text"],
                },
                {
                  name: "--title",
                  description: "The source's title",
                  args: { name: "title" },
                },
                {
                  name: "--content-type",
                  description:
                    "The format of `content`: `text/markdown` (the default) or `text/plain`",
                  args: {
                    name: "content-type",
                    suggestions: ["text/markdown", "text/plain"],
                  },
                },
                watchOption2,
                {
                  name: "--file",
                  description:
                    "Local file to upload as a files source: a document, or a zip, tar or gzip archive of them",
                  args: { name: "path", template: "filepaths" },
                  exclusiveOn: ["--url", "--query", "--text"],
                },
                {
                  name: "--text",
                  description:
                    "Text or markdown to hold as a files source, read from a local file or `-` for stdin",
                  args: { name: "path|-", template: "filepaths" },
                  exclusiveOn: ["--url", "--query", "--file"],
                },
              ],
              args: knowledgeBaseIdArg,
            },
            {
              name: "delete",
              description: "Delete a source",
              options: [jsonOption, yesOption],
              args: [knowledgeBaseIdArg, sourceIdArg],
              isDangerous: true,
            },
            {
              name: "edit",
              description: "Update a source",
              options: [
                jsonOption,
                {
                  name: "--title",
                  description: "The source's title",
                  args: { name: "title" },
                },
                {
                  name: "--include-paths",
                  description: "Regular expressions for URL paths to crawl",
                  args: { name: "include-paths" },
                  isRepeatable: true,
                },
                {
                  name: "--exclude-paths",
                  description: "Regular expressions for URL paths to skip",
                  args: { name: "exclude-paths" },
                  isRepeatable: true,
                },
                {
                  name: "--max-depth",
                  description:
                    "How many levels deep the crawl goes from the root URL",
                  args: { name: "max-depth" },
                },
                {
                  name: "--sitemap-only",
                  description:
                    "Whether to crawl only the pages listed in the site's sitemap",
                },
                {
                  name: "--no-sitemap-only",
                  description: "Negate --sitemap-only",
                },
                {
                  name: "--ignore-query-parameters",
                  description:
                    "Whether to treat URLs that differ only by query string as one page",
                },
                {
                  name: "--no-ignore-query-parameters",
                  description: "Negate --ignore-query-parameters",
                },
                {
                  name: "--page-limit",
                  description: "The maximum number of pages to crawl",
                  args: { name: "page-limit" },
                },
                {
                  name: "--query",
                  description:
                    "For a `sanity-dataset` source, the GROQ query, replacing the stored one",
                  args: { name: "query" },
                },
                {
                  name: "--sync-frequency",
                  description:
                    "For a `web` or `sanity-dataset` source, how often it syncs on its own: `weekly` or `monthly`",
                  args: {
                    name: "sync-frequency",
                    suggestions: ["weekly", "monthly", "null"],
                  },
                },
                {
                  name: "--confirm-deletions",
                  description:
                    "Set to `true` to apply new crawl options that delete many documents",
                },
                {
                  name: "--no-confirm-deletions",
                  description: "Negate --confirm-deletions",
                },
              ],
              args: [knowledgeBaseIdArg, sourceIdArg],
            },
            {
              name: "get",
              description: "Get a source",
              options: [jsonOption],
              args: [knowledgeBaseIdArg, sourceIdArg],
            },
            {
              name: "list",
              description: "List sources",
              options: [jsonOption, limitOption],
              args: knowledgeBaseIdArg,
            },
            {
              name: "sync",
              description: "Sync a source",
              options: [jsonOption, watchOption2],
              args: [knowledgeBaseIdArg, sourceIdArg],
            },
            {
              name: "syncs",
              description: "Inspect and confirm syncs of a source",
              subcommands: [
                {
                  name: "confirm",
                  description: "Confirm a held sync's deletions",
                  options: [jsonOption],
                  args: [knowledgeBaseIdArg, sourceIdArg, syncIdArg],
                },
                {
                  name: "discard",
                  description: "Discard a held sync's deletions",
                  options: [jsonOption],
                  args: [knowledgeBaseIdArg, sourceIdArg, syncIdArg],
                },
                {
                  name: "get",
                  description: "Get a sync",
                  options: [jsonOption],
                  args: [knowledgeBaseIdArg, sourceIdArg, syncIdArg],
                },
                {
                  name: "list",
                  description: "List a source's syncs",
                  options: [jsonOption, limitOption],
                  args: [knowledgeBaseIdArg, sourceIdArg],
                },
              ],
            },
            {
              name: "upload",
              description: "Upload a file to a source",
              options: [
                jsonOption,
                watchOption2,
                {
                  name: "--content-type",
                  description:
                    "MIME type of the file, inferred from the file extension when omitted",
                  args: { name: "type" },
                },
                {
                  name: "--file",
                  description:
                    "Local file to upload: a document, or a zip, tar or gzip archive of them",
                  args: { name: "path", template: "filepaths" },
                },
              ],
              args: [knowledgeBaseIdArg, sourceIdArg],
            },
          ],
        },
        {
          name: "sync",
          description: "Sync every source",
          options: [jsonOption],
          args: knowledgeBaseIdArg,
        },
        {
          name: "update",
          description: "Update a knowledge base",
          options: [
            jsonOption,
            {
              name: "--title",
              description: "The knowledge base's new title",
              args: { name: "title" },
            },
            {
              name: "--description",
              description: "The knowledge base's new description",
              args: { name: "description" },
            },
            {
              name: "--draft",
              description:
                "Set to `false` to finish a draft, so it can be built and is listed with your other knowledge bases",
            },
            { name: "--no-draft", description: "Negate --draft" },
          ],
          args: knowledgeBaseIdArg,
        },
      ],
    },
    {
      name: "cors",
      description: "Manage CORS origins for your project",
      subcommands: [
        {
          name: "add",
          description: "Add a CORS origin to the project",
          options: [
            projectOption,
            {
              name: "--credentials",
              description:
                "Allow credentials (token/cookie) to be sent from this origin",
            },
            { name: "--no-credentials", description: "Negate --credentials" },
            {
              name: ["-y", "--yes"],
              description: "Confirm risky wildcard origins without prompting",
            },
          ],
          args: {
            name: "origin",
            description: "Origin to allow (e.g., https://example.com)",
          },
        },
        {
          name: "delete",
          description: "Delete a CORS origin from the project",
          options: [projectOption],
          args: {
            name: "origin",
            description: "Origin to delete (will prompt if not provided)",
            isOptional: true,
          },
          isDangerous: true,
        },
        {
          name: "list",
          description: "List CORS origins for the project",
          options: [projectOption],
        },
      ],
    },
    {
      name: ["datasets", "dataset"],
      description: "Manage datasets in your project",
      subcommands: [
        {
          name: "alias",
          description: "Manage dataset aliases",
          subcommands: [
            {
              name: "create",
              description: "Create a dataset alias for the project",
              options: [projectOption],
              args: [
                {
                  name: "aliasName",
                  description: "Dataset alias name to create",
                  isOptional: true,
                },
                {
                  name: "targetDataset",
                  description: "Target dataset name to link the alias to",
                  isOptional: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a dataset alias from the project",
              options: [
                projectOption,
                {
                  name: "--force",
                  description:
                    "Skip confirmation prompt and delete immediately",
                },
              ],
              args: {
                name: "aliasName",
                description: "Dataset alias name to delete",
              },
              isDangerous: true,
            },
            {
              name: "link",
              description: "Link a dataset alias to a dataset in the project",
              options: [
                projectOption,
                {
                  name: "--force",
                  description:
                    "Skip confirmation prompt when relinking existing alias",
                },
              ],
              args: [
                {
                  name: "aliasName",
                  description: "Dataset alias name to link",
                  isOptional: true,
                },
                {
                  name: "targetDataset",
                  description: "Target dataset name to link the alias to",
                  isOptional: true,
                },
              ],
            },
            {
              name: "unlink",
              description:
                "Unlink a dataset alias from its dataset in the project",
              options: [
                projectOption,
                {
                  name: "--force",
                  description:
                    "Skip confirmation prompt and unlink immediately",
                },
              ],
              args: {
                name: "aliasName",
                description: "Dataset alias name to unlink",
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "copy",
          description: "Copy a dataset or manage copy jobs",
          options: [
            projectOption,
            {
              name: "--attach",
              description:
                "Attach to the running copy process to show progress",
              args: { name: "attach" },
              exclusiveOn: ["--list", "--detach", "--skip-history"],
            },
            {
              name: "--detach",
              description: "Start the copy without waiting for it to finish",
              exclusiveOn: ["--list", "--attach"],
            },
            {
              name: "--limit",
              description:
                "Maximum number of jobs returned (default 10, max 1000)",
              args: { name: "limit" },
              dependsOn: ["--list"],
            },
            {
              name: "--list",
              description: "Lists all dataset copy jobs",
              exclusiveOn: ["--attach", "--detach", "--skip-history"],
            },
            {
              name: "--offset",
              description: "Start position in the list of jobs (default 0)",
              args: { name: "offset" },
              dependsOn: ["--list"],
            },
            {
              name: "--skip-content-releases",
              description:
                "Don't copy content release documents to the target dataset",
              exclusiveOn: ["--list", "--attach"],
            },
            {
              name: "--skip-history",
              description: "Don't preserve document history on copy",
              exclusiveOn: ["--list", "--attach"],
            },
          ],
          args: [
            {
              name: "source",
              description: "Name of the dataset to copy from",
              isOptional: true,
            },
            {
              name: "target",
              description: "Name of the dataset to copy to",
              isOptional: true,
            },
          ],
        },
        {
          name: "create",
          description: "Create a new dataset for the project",
          options: [
            projectOption,
            {
              name: "--embeddings",
              description: "Enable embeddings for this dataset",
            },
            {
              name: "--embeddings-projection",
              description:
                'GROQ projection for embeddings indexing (e.g. "{ title, body }")',
              args: { name: "embeddings-projection" },
              dependsOn: ["--embeddings"],
            },
            {
              name: "--visibility",
              description:
                "Set visibility for this dataset (custom/private/public)",
              args: {
                name: "visibility",
                suggestions: ["custom", "private", "public"],
              },
            },
          ],
          args: {
            name: "name",
            description: "Name of the dataset to create",
            isOptional: true,
          },
        },
        {
          name: "delete",
          description: "Delete a dataset from the project",
          options: [
            projectOption,
            {
              name: "--force",
              description:
                "Do not prompt for delete confirmation - forcefully delete",
            },
          ],
          args: { name: "datasetName", description: "Dataset name to delete" },
          isDangerous: true,
        },
        {
          name: "embeddings",
          description: "Manage dataset embeddings",
          subcommands: [
            {
              name: "disable",
              description: "Disable embeddings for a dataset",
              options: [projectOption],
              args: {
                name: "dataset",
                description: "Dataset name to disable embeddings for",
                isOptional: true,
              },
            },
            {
              name: "enable",
              description: "Enable embeddings for a dataset",
              options: [
                projectOption,
                {
                  name: "--projection",
                  description:
                    'GROQ projection defining which fields to embed (e.g. "{ title, body }")',
                  args: { name: "projection" },
                },
                {
                  name: "--wait",
                  description:
                    "Wait for embeddings processing to complete before returning",
                },
              ],
              args: {
                name: "dataset",
                description: "Dataset name to enable embeddings for",
                isOptional: true,
              },
            },
            {
              name: "status",
              description: "Show embeddings settings and status for a dataset",
              options: [projectOption],
              args: {
                name: "dataset",
                description:
                  "The name of the dataset to check embeddings status for",
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "export",
          description: "Export a dataset to a local gzipped tarball",
          options: [
            projectOption,
            {
              name: "--asset-concurrency",
              description: "Concurrent number of asset downloads",
              args: { name: "asset-concurrency", default: "8" },
            },
            {
              name: "--mode",
              description:
                "Export mode ('cursor' is faster for large datasets but may miss concurrent changes)",
              args: {
                name: "mode",
                suggestions: ["stream", "cursor"],
                default: "stream",
              },
            },
            {
              name: "--no-assets",
              description:
                "Export only non-asset documents and remove references to image assets",
            },
            {
              name: "--no-compress",
              description:
                "Skips compressing tarball entries (still generates a gzip file)",
            },
            {
              name: "--no-drafts",
              description: "Export only published versions of documents",
            },
            {
              name: "--no-strict-asset-verification",
              description:
                "Do not abort the export when an asset fails hash or content-length verification",
            },
            {
              name: "--overwrite",
              description: "Overwrite any file with the same name",
            },
            {
              name: "--raw",
              description:
                "Extract only documents, without rewriting asset references",
            },
            {
              name: "--types",
              description:
                "Defines which document types to export (comma-separated)",
              args: { name: "types" },
            },
          ],
          args: [
            {
              name: "name",
              description: "Name of the dataset to export",
              isOptional: true,
            },
            {
              name: "destination",
              description: "Output destination file path",
              template: "filepaths",
              isOptional: true,
            },
          ],
        },
        {
          name: "import",
          description: "Import documents to a Sanity dataset",
          options: [
            {
              name: "--allow-assets-in-different-dataset",
              description:
                "Allow asset documents to reference different project/dataset",
            },
            {
              name: "--allow-failing-assets",
              description: "Skip assets that cannot be fetched/uploaded",
            },
            {
              name: "--allow-replacement-characters",
              description:
                "Allow unicode replacement characters in imported documents",
            },
            {
              name: "--allow-system-documents",
              description: "Imports system documents",
            },
            {
              name: "--asset-concurrency",
              description: "Number of parallel asset imports",
              args: { name: "asset-concurrency" },
            },
            {
              name: ["-d", "--dataset"],
              description: "Dataset to import to",
              args: { name: "name" },
            },
            {
              name: "--missing",
              description: "Skip documents that already exist",
              exclusiveOn: ["--replace"],
            },
            projectOption,
            {
              name: "--replace",
              description: "Replace documents with the same IDs",
              exclusiveOn: ["--missing"],
            },
            {
              name: "--replace-assets",
              description: "Skip reuse of existing assets",
            },
            {
              name: "--skip-cross-dataset-references",
              description: "Skips references to other datasets",
            },
            {
              name: ["-t", "--token"],
              description: "Token to authenticate with",
              args: { name: "token" },
            },
          ],
          args: [
            {
              name: "source",
              description: 'Source file (use "-" for stdin)',
              template: "filepaths",
            },
            {
              name: "targetDataset",
              description: "Target dataset (prefer --dataset flag instead)",
              isOptional: true,
            },
          ],
        },
        {
          name: "list",
          description: "List datasets for the project",
          options: [projectOption],
        },
        {
          name: "visibility",
          description: "Get or set the visibility of a dataset",
          subcommands: [
            {
              name: "get",
              description: "Get the visibility of a dataset",
              options: [projectOption],
              args: {
                name: "dataset",
                description: "The name of the dataset to get visibility for",
              },
            },
            {
              name: "set",
              description: "Set the visibility of a dataset",
              options: [projectOption],
              args: [
                {
                  name: "dataset",
                  description: "The name of the dataset to set visibility for",
                },
                {
                  name: "mode",
                  description: "The visibility mode to set",
                  suggestions: ["public", "private"],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "debug",
      description: "Print diagnostic info for troubleshooting",
      options: [
        { name: "--secrets", description: "Include API keys in output" },
        {
          name: "--verbose",
          description: "Show full error details including stack traces",
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Builds and deploys Sanity Studio or application to Sanity hosting",
      options: [
        { name: ["-j", "--json"], description: "Output the result as JSON" },
        {
          name: "--auto-updates",
          description: "Automatically update the studio to the latest version",
          deprecated: true,
        },
        {
          name: "--no-auto-updates",
          description: "Negate --auto-updates",
          deprecated: true,
        },
        {
          name: "--build",
          description:
            "Build the studio before deploying (use --no-build to deploy existing `dist/` output)",
        },
        { name: "--no-build", description: "Negate --build" },
        {
          name: "--create",
          description:
            "Create a new App SDK app, even if the organization has other apps",
          exclusiveOn: ["--external", "--url"],
        },
        {
          name: "--dry-run",
          description:
            "Report what would be deployed without uploading or creating anything",
        },
        {
          name: "--external",
          description: "Register an externally hosted studio",
          exclusiveOn: ["--source-maps", "--minify"],
        },
        {
          name: "--media-library-id",
          description:
            "For a Media Library config deploy: the media library to sync the aspect definitions to",
          args: { name: "media-library-id" },
          hidden: true,
        },
        {
          name: "--minify",
          description:
            "Minify built JavaScript (use --no-minify to skip for faster builds)",
        },
        { name: "--no-minify", description: "Negate --minify" },
        {
          name: "--schema-required",
          description: "Fail if schema deployment fails",
        },
        {
          name: "--source-maps",
          description:
            "Enable source maps for built bundles (increases size of bundle)",
        },
        {
          name: "--title",
          description: "Title for a newly created application or studio",
          args: { name: "title" },
        },
        {
          name: "--url",
          description: "Studio URL for deployment",
          args: { name: "url" },
        },
        { name: "--verbose", description: "Enable verbose logging" },
        yesOption2,
      ],
      args: {
        name: "sourceDir",
        description: "Source directory",
        template: "folders",
        isOptional: true,
      },
    },
    {
      name: "dev",
      description: "Start a local development server with live reloading",
      options: [
        {
          name: "--auto-updates",
          description: "Automatically update Sanity Studio dependencies",
        },
        noAutoUpdatesOption,
        {
          name: "--host",
          description:
            "Local network interface to listen on (default: localhost)",
          args: { name: "host" },
        },
        {
          name: "--load-in-dashboard",
          description: "Load the app/studio in the Sanity dashboard",
        },
        {
          name: "--no-load-in-dashboard",
          description: "Negate --load-in-dashboard",
        },
        {
          name: "--port",
          description: "TCP port to start server on (default: 3333)",
          args: { name: "port" },
        },
      ],
    },
    {
      name: "docs",
      description: "Browse and search Sanity documentation",
      subcommands: [
        {
          name: "browse",
          description: "Open Sanity docs in your browser",
        },
        {
          name: "read",
          description: "Read an article in terminal",
          options: [
            { name: ["-w", "--web"], description: "Open in a web browser" },
          ],
          args: {
            name: "path",
            description:
              "Path or URL to article, found in search results and docs content as links",
          },
        },
        {
          name: "search",
          description: "Search Sanity docs",
          options: [
            {
              name: "--limit",
              description: "Maximum number of results to return",
              args: { name: "limit", default: "10" },
            },
          ],
          args: {
            name: "query",
            description: "Search query for documentation",
          },
        },
      ],
    },
    {
      name: "doctor",
      description: "Run diagnostics on your Sanity project",
      options: [
        { name: ["-j", "--json"], description: "Output results as JSON" },
      ],
      args: {
        name: "checks",
        description: "Checks to enable (defaults to all)",
        suggestions: ["cli"],
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: ["documents", "document"],
      description: "Manage documents in a dataset",
      subcommands: [
        {
          name: "create",
          description: "Create one or more documents",
          options: [
            projectOption,
            datasetOption,
            {
              name: "--id",
              description: "Specify a document ID to use",
              args: { name: "id" },
            },
            {
              name: "--json5",
              description:
                'Use JSON5 file type to allow a "simplified" version of JSON',
            },
            {
              name: "--missing",
              description:
                "On duplicate document IDs, don't modify the target document(s)",
            },
            {
              name: "--replace",
              description:
                "On duplicate document IDs, replace existing document with specified document(s)",
            },
            {
              name: "--watch",
              description:
                "Write the documents whenever the target file or buffer changes",
            },
          ],
          args: {
            name: "file",
            description: "JSON file to create document(s) from",
            template: "filepaths",
            isOptional: true,
          },
        },
        {
          name: "delete",
          description:
            "Delete one or more documents from the project's configured dataset",
          options: [projectOption, datasetOption],
          args: {
            name: "id",
            description: "Document ID to delete",
            isVariadic: true,
          },
          isDangerous: true,
        },
        {
          name: "get",
          description: "Get and print a document by ID",
          options: [projectOption, datasetOption, prettyOption],
          args: { name: "documentId", description: "Document ID to retrieve" },
        },
        {
          name: "query",
          description: "Query for documents",
          options: [
            projectOption,
            datasetOption,
            {
              name: "--anonymous",
              description: "Send the query without any authorization token",
            },
            {
              name: "--api-version",
              description: "API version to use (defaults to 2025-08-15)",
              args: { name: "api-version" },
            },
            prettyOption,
          ],
          args: {
            name: "query",
            description: "GROQ query to run against the dataset",
          },
        },
        {
          name: "validate",
          description:
            "Validate documents in a dataset against the studio schema",
          options: [
            {
              name: ["-p", "--project", "--project-id"],
              description: "Override the project ID used",
              args: { name: "id" },
            },
            {
              name: ["-d", "--dataset"],
              description: "Override the dataset used",
              args: { name: "name" },
            },
            {
              name: "--file",
              description:
                "Path to an NDJSON file or tar archive containing an NDJSON file (optionally gzip-compressed)",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--format",
              description:
                "The output format used to print the found validation markers and report progress",
              args: {
                name: "format",
                suggestions: ["json", "ndjson", "pretty"],
              },
            },
            {
              name: "--level",
              description: "The minimum level reported",
              args: {
                name: "level",
                suggestions: ["error", "warning", "info"],
                default: "warning",
              },
            },
            {
              name: "--max-custom-validation-concurrency",
              description:
                "Specify how many custom validators can run concurrently",
              args: { name: "max-custom-validation-concurrency", default: "5" },
            },
            {
              name: "--max-fetch-concurrency",
              description:
                "Specify how many `client.fetch` requests are allowed to run concurrently",
              args: { name: "max-fetch-concurrency", default: "25" },
            },
            {
              name: "--workspace",
              description:
                "The name of the workspace to use when downloading and validating all documents",
              args: { name: "workspace" },
            },
            {
              name: ["-y", "--yes"],
              description: "Skips the first confirmation prompt",
            },
          ],
        },
      ],
    },
    {
      name: "exec",
      description: "Executes a script within the Sanity Studio context",
      options: [
        {
          name: "--mock-browser-env",
          description: "Mock a browser environment with jsdom",
        },
        {
          name: "--with-user-token",
          description: "Include your auth token in getCliClient()",
        },
      ],
      args: {
        name: "script",
        description: "Path to the script to execute",
        template: "filepaths",
      },
    },
    {
      name: ["functions", "function"],
      description: "Sanity Function development and management commands",
      subcommands: [
        {
          name: "add",
          description: "Add a Function to your Blueprint",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            stackOption,
            hiddenProjectIdOption,
            organizationIdOption,
            {
              name: ["--example", "--recipe"],
              description: "Example to use for the Function",
              args: { name: "example" },
              exclusiveOn: [
                "--name",
                "--type",
                "--language",
                "--javascript",
                "--helpers",
                "--installer",
                "--install",
              ],
            },
            {
              name: ["-n", "--name"],
              description: "Name of the Function to add",
              args: { name: "name" },
            },
            {
              name: "--type",
              description:
                "Document change event(s) that should trigger the function; you can specify multiple events by specifying this flag multiple times",
              args: {
                name: "type",
                suggestions: [
                  "document-publish",
                  "document-create",
                  "document-delete",
                  "document-update",
                  "media-library-asset-create",
                  "media-library-asset-delete",
                  "media-library-asset-update",
                  "pub-sub",
                  "scheduled-function",
                  "sync-tag-invalidate",
                  "durable-function",
                ],
              },
              isRepeatable: true,
              dependsOn: ["--name"],
            },
            {
              name: ["--language", "--lang"],
              description: "Language of the new Function",
              args: {
                name: "language",
                suggestions: ["ts", "js"],
                default: "ts",
              },
            },
            {
              name: ["--javascript", "--js"],
              description: "Use JavaScript instead of TypeScript",
              exclusiveOn: ["--language"],
            },
            {
              name: "--helpers",
              description: "Add helpers to the new Function",
            },
            { name: "--no-helpers", description: "Negate --helpers" },
            {
              name: "--installer",
              description: "How to install the @sanity/functions helpers",
              args: {
                name: "installer",
                suggestions: ["skip", "npm", "pnpm", "yarn"],
              },
            },
            {
              name: ["-i", "--install"],
              description: "Shortcut for --installer npm",
              exclusiveOn: ["--installer"],
            },
          ],
        },
        {
          name: "build",
          description: "Build Sanity Function(s) to zip archives",
          hidden: true,
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            stackOption,
            hiddenProjectIdOption,
            organizationIdOption,
            {
              name: ["--fn-installer", "--function-installer", "--installer"],
              description:
                "Which package manager to use when building Functions",
              args: {
                name: "fn-installer",
                suggestions: ["npm", "pnpm", "yarn"],
              },
              hidden: true,
            },
            {
              name: ["-o", "--out-dir"],
              description: "Output directory for zip files",
              args: { name: "out-dir", template: "folders" },
            },
          ],
          args: nameArg3,
        },
        {
          name: "dev",
          description: "Start the Sanity Function emulator",
          options: [
            jsonOption,
            {
              name: ["--path", "--blueprint-path"],
              description:
                "Path to a Blueprint file or directory containing one",
              args: { name: "path", template: "filepaths" },
              hidden: true,
            },
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            stackOption,
            hiddenProjectIdOption,
            organizationIdOption,
            {
              name: ["-h", "--host"],
              description:
                'The local network interface at which to listen. [default: "localhost"]',
              args: { name: "host" },
            },
            {
              name: ["-p", "--port"],
              description: "TCP port to start emulator on. [default: 8080]",
              args: { name: "port" },
            },
            {
              name: ["-t", "--timeout"],
              description:
                "Maximum execution time for all functions, in seconds",
              args: { name: "timeout" },
            },
          ],
        },
        {
          name: "env",
          description: "Manage environment variables of deployed functions",
          subcommands: [
            {
              name: "add",
              description:
                "Add or set an environment variable for a deployed function",
              options: [
                jsonOption,
                pathOption,
                traceOption,
                validateResourcesOption,
                noValidateResourcesOption,
                verboseOption,
                visibleStackOption,
                hiddenProjectIdOption,
                organizationIdOption,
              ],
              args: [
                nameArg4,
                {
                  name: "key",
                  description: "The name of the environment variable",
                },
                {
                  name: "value",
                  description: "The value of the environment variable",
                },
              ],
            },
            {
              name: "list",
              description: "List environment variables for a deployed function",
              options: [
                jsonOption,
                pathOption,
                traceOption,
                validateResourcesOption,
                noValidateResourcesOption,
                verboseOption,
                visibleStackOption,
                hiddenProjectIdOption,
                organizationIdOption,
              ],
              args: nameArg4,
            },
            {
              name: "remove",
              description:
                "Remove an environment variable from a deployed function",
              options: [
                jsonOption,
                pathOption,
                traceOption,
                validateResourcesOption,
                noValidateResourcesOption,
                verboseOption,
                visibleStackOption,
                hiddenProjectIdOption,
                organizationIdOption,
              ],
              args: [
                nameArg4,
                {
                  name: "key",
                  description: "The name of the environment variable",
                },
              ],
            },
          ],
        },
        {
          name: "list",
          description: "List deployed Sanity Functions",
          hidden: true,
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            {
              name: ["-v", "--verbose"],
              description: "Show function configuration details",
            },
            stackOption,
            projectIdOption,
            visibleOrganizationIdOption,
          ],
        },
        {
          name: "logs",
          description: "Retrieve or delete logs for a Sanity Function",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            visibleStackOption,
            hiddenProjectIdOption,
            organizationIdOption,
            {
              name: ["-l", "--limit"],
              description: "Total number of log entries to retrieve",
              args: { name: "limit", default: "50" },
            },
            {
              name: ["-u", "--utc"],
              description: "Show dates in UTC time zone",
            },
            {
              name: ["-d", "--delete"],
              description: "Delete all logs for the function",
              exclusiveOn: ["--limit", "--json"],
            },
            {
              name: ["-f", "--force"],
              description: "Skip confirmation for deleting logs",
              dependsOn: ["--delete"],
            },
            {
              name: ["-w", "--watch", "--follow"],
              description: "Watch for new logs (streaming mode)",
              exclusiveOn: ["--json"],
            },
          ],
          args: nameArg3,
        },
        {
          name: "test",
          description: "Invoke a local Sanity Function",
          options: [
            jsonOption,
            pathOption,
            traceOption,
            validateResourcesOption,
            noValidateResourcesOption,
            verboseOption,
            stackOption,
            projectIdOption,
            visibleOrganizationIdOption,
            {
              name: ["-d", "--data"],
              description: "Data to send to the function",
              args: { name: "data" },
              exclusiveOn: ["--file", "--document-id"],
            },
            {
              name: "--data-before",
              description: "Original document",
              args: { name: "data-before" },
              exclusiveOn: [
                "--data",
                "--file",
                "--document-id",
                "--file-before",
                "--file-after",
                "--document-id-before",
                "--document-id-after",
              ],
            },
            {
              name: "--data-after",
              description: "Current document",
              args: { name: "data-after" },
              exclusiveOn: [
                "--data",
                "--file",
                "--document-id",
                "--file-before",
                "--file-after",
                "--document-id-before",
                "--document-id-after",
              ],
            },
            {
              name: ["-e", "--event"],
              description: "Type of event (create, update, delete)",
              args: {
                name: "event",
                suggestions: ["create", "update", "delete"],
              },
            },
            {
              name: ["-f", "--file"],
              description: "Read data from file and send to the function",
              args: { name: "file", template: "filepaths" },
              exclusiveOn: ["--data", "--document-id"],
            },
            {
              name: "--file-before",
              description: "Original document",
              args: { name: "file-before", template: "filepaths" },
              exclusiveOn: [
                "--data",
                "--file",
                "--document-id",
                "--data-before",
                "--data-after",
                "--document-id-before",
                "--document-id-after",
              ],
            },
            {
              name: "--file-after",
              description: "Current document",
              args: { name: "file-after", template: "filepaths" },
              exclusiveOn: [
                "--data",
                "--file",
                "--document-id",
                "--data-before",
                "--data-after",
                "--document-id-before",
                "--document-id-after",
              ],
            },
            {
              name: ["-t", "--timeout"],
              description: "Execution timeout value in seconds",
              args: { name: "timeout" },
            },
            {
              name: ["-a", "--api"],
              description: "Sanity API Version to use",
              args: { name: "api" },
            },
            {
              name: "--dataset",
              description: "The Sanity dataset to use",
              args: { name: "dataset" },
            },
            {
              name: ["--document-id", "--doc"],
              description: "Document to fetch and send to function",
              args: { name: "document-id" },
              exclusiveOn: ["--data", "--file"],
            },
            {
              name: "--document-id-before",
              description: "Original document",
              args: { name: "document-id-before" },
              exclusiveOn: [
                "--data",
                "--file",
                "--document-id",
                "--data-before",
                "--data-after",
                "--file-before",
                "--file-after",
              ],
            },
            {
              name: "--document-id-after",
              description: "Current document",
              args: { name: "document-id-after" },
              exclusiveOn: [
                "--data",
                "--file",
                "--document-id",
                "--data-before",
                "--data-after",
                "--file-before",
                "--file-after",
              ],
            },
            {
              name: "--with-user-token",
              description: "Prime access token from CLI config",
            },
            {
              name: ["--media-library-id", "--media"],
              description: "Sanity Media Library ID to use",
              args: { name: "media-library-id" },
              exclusiveOn: ["--project-id", "--dataset"],
            },
            {
              name: "--no-wait",
              description: "Skip durable wait delays instead of sleeping",
            },
          ],
          args: nameArg3,
        },
      ],
    },
    {
      name: "graphql",
      description: "Manage GraphQL APIs for your project",
      subcommands: [
        {
          name: "deploy",
          description: "Deploy a GraphQL API from the current Sanity schema",
          options: [
            {
              name: "--api",
              description:
                "Only deploy API with this ID (can be specified multiple times)",
              args: { name: "api" },
              isRepeatable: true,
            },
            {
              name: ["-d", "--dataset"],
              description: "Deploy API for the given dataset",
              args: { name: "name" },
            },
            {
              name: "--dry-run",
              description:
                "Validate defined GraphQL APIs, check for breaking changes, skip deploy",
            },
            {
              name: "--force",
              description: "Deploy API without confirming breaking changes",
            },
            {
              name: "--generation",
              description: 'API generation to deploy (defaults to "gen3")',
              args: {
                name: "generation",
                suggestions: ["gen1", "gen2", "gen3"],
              },
            },
            {
              name: "--non-null-document-fields",
              description: "Use non-null document fields (_id, _type etc)",
            },
            {
              name: "--playground",
              description: "Enable GraphQL playground for easier debugging",
            },
            { name: "--no-playground", description: "Negate --playground" },
            {
              name: "--tag",
              description: 'Deploy API(s) to given tag (defaults to "default")',
              args: { name: "tag" },
            },
            {
              name: "--with-union-cache",
              description:
                "Cache union types (faster for schemas with many self-references)",
            },
          ],
        },
        {
          name: "list",
          description: "List deployed GraphQL endpoints for the project",
          options: [projectOption],
        },
        {
          name: "undeploy",
          description: "Remove a deployed GraphQL API",
          options: [
            projectOption,
            {
              name: "--api",
              description: "Undeploy API with this ID",
              args: { name: "api" },
              exclusiveOn: ["--project"],
            },
            datasetOption,
            { name: "--force", description: "Skip confirmation prompt" },
            {
              name: "--tag",
              description: "Tag to undeploy GraphQL API from",
              args: { name: "tag", default: "default" },
            },
          ],
          isDangerous: true,
        },
      ],
    },
    {
      name: "help",
      description: "Display help for sanity",
      options: [
        {
          name: ["-n", "--nested-commands"],
          description: "Include all nested commands in the output",
        },
      ],
      args: {
        name: "command",
        description: "Command to show help for",
        template: "help",
        isOptional: true,
      },
    },
    {
      name: ["hooks", "hook"],
      description: "Manage webhooks for your project",
      subcommands: [
        {
          name: "attempt",
          description: "Print details of a given webhook delivery attempt",
          options: [projectOption],
          args: {
            name: "attemptId",
            description: "The delivery attempt ID to get details for",
          },
        },
        {
          name: "create",
          description: "Create a new webhook for the project",
          options: [projectOption],
        },
        {
          name: "delete",
          description: "Delete a webhook from the project",
          options: [projectOption],
          args: {
            name: "name",
            description:
              "Name of webhook to delete (will prompt if not provided)",
            isOptional: true,
          },
          isDangerous: true,
        },
        {
          name: "list",
          description: "List webhooks for the project",
          options: [projectOption],
        },
        {
          name: "logs",
          description: "Show log entries for project webhooks",
          options: [
            projectOption,
            {
              name: "--detailed",
              description: "Include detailed payload and attempts",
            },
          ],
          args: {
            name: "name",
            description: "Name of the webhook to show logs for",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "init",
      description: "Initialize a new Sanity Studio, project and/or app",
      options: [
        jsonOption,
        {
          name: "--auto-updates",
          description: "Enable auto updates of studio versions",
          exclusiveOn: ["--bare"],
        },
        noAutoUpdatesOption,
        {
          name: "--bare",
          description:
            "Skip the Studio initialization and only print the selected project ID and dataset name to stdout",
        },
        {
          name: "--coupon",
          description:
            "Optionally select a coupon for a new project (cannot be used with --project-plan)",
          args: { name: "code" },
          exclusiveOn: ["--project-plan"],
        },
        {
          name: "--create-project",
          description:
            "Create a new project with the given name (use --project-name instead)",
          args: { name: "name" },
          hidden: true,
          deprecated: true,
        },
        {
          name: "--dashboard",
          description:
            "Set up the project to run in the Sanity Dashboard (beta)",
          exclusiveOn: ["--bare", "--env"],
        },
        {
          name: "--dataset",
          description: "Dataset name for the studio",
          args: { name: "name" },
          exclusiveOn: ["--dataset-default"],
        },
        {
          name: "--dataset-default",
          description:
            'Set up a project with a public dataset named "production"',
        },
        {
          name: "--env",
          description: "Write environment variables to file",
          args: { name: "filename", template: "filepaths" },
          exclusiveOn: ["--bare"],
        },
        {
          name: "--from-create",
          description:
            "Internal flag to indicate that the command is run from create-sanity",
          hidden: true,
        },
        {
          name: "--git",
          description:
            "Specify a commit message for initial commit, or disable git init",
          args: { name: "message" },
          exclusiveOn: ["--bare"],
        },
        {
          name: "--import-dataset",
          description: "Import template sample dataset",
        },
        { name: "--no-import-dataset", description: "Negate --import-dataset" },
        {
          name: "--install",
          description: "Install dependencies after scaffolding",
          exclusiveOn: ["--bare"],
        },
        { name: "--no-install", description: "Negate --install" },
        {
          name: "--mcp",
          description: "Enable AI editor integration (MCP) setup",
        },
        { name: "--no-mcp", description: "Negate --mcp" },
        {
          name: "--nextjs-add-config-files",
          description: "Add config files to Next.js project",
        },
        {
          name: "--no-nextjs-add-config-files",
          description: "Negate --nextjs-add-config-files",
        },
        {
          name: "--nextjs-append-env",
          description: "Append project ID and dataset to .env file",
        },
        {
          name: "--no-nextjs-append-env",
          description: "Negate --nextjs-append-env",
        },
        {
          name: "--nextjs-embed-studio",
          description: "Embed the Studio in Next.js application",
        },
        {
          name: "--no-nextjs-embed-studio",
          description: "Negate --nextjs-embed-studio",
        },
        {
          name: "--no-git",
          description: "Disable git initialization",
          hidden: true,
          exclusiveOn: ["--git"],
        },
        {
          name: "--organization",
          description:
            "Organization ID to use for the project (required for unattended project creation)",
          args: { name: "id" },
        },
        {
          name: "--output-path",
          description: "Path to write studio project to",
          args: { name: "path", template: "folders" },
          exclusiveOn: ["--bare"],
        },
        { name: "--overwrite-files", description: "Overwrite existing files" },
        {
          name: "--no-overwrite-files",
          description: "Negate --overwrite-files",
        },
        {
          name: "--package-manager",
          description:
            "Specify which package manager to use [allowed: npm, yarn, pnpm]",
          args: { name: "manager", suggestions: ["npm", "yarn", "pnpm"] },
          exclusiveOn: ["--bare"],
        },
        {
          name: ["-p", "--project", "--project-id"],
          description: "Project ID to use for the studio",
          args: { name: "id" },
          exclusiveOn: ["--create-project", "--project-name"],
        },
        {
          name: "--project-name",
          description: "Create a new project with the given name",
          args: { name: "name" },
          exclusiveOn: ["--project", "--create-project"],
        },
        {
          name: "--project-plan",
          description: "Optionally select a plan for a new project",
          args: { name: "name" },
        },
        {
          name: "--provider",
          description: "Login provider to use",
          args: { name: "provider" },
        },
        {
          name: "--quickstart",
          description:
            "Used for initializing a project from a server schema that is saved in the Journey API",
          hidden: true,
          deprecated: true,
        },
        {
          name: "--reconfigure",
          description:
            "Reconfigure an existing project (this flag is no longer supported)",
          hidden: true,
          deprecated: true,
        },
        {
          name: "--skills",
          description:
            "Install Sanity agent skills globally for detected AI editors",
        },
        { name: "--no-skills", description: "Negate --skills" },
        {
          name: "--template",
          description: 'Project template to use [default: "clean"]',
          args: { name: "template" },
          exclusiveOn: ["--bare"],
        },
        {
          name: "--template-token",
          description: "Used for accessing private GitHub repo templates",
          args: { name: "template-token" },
          hidden: true,
        },
        {
          name: "--typescript",
          description: "Enable TypeScript support",
          exclusiveOn: ["--bare"],
        },
        { name: "--no-typescript", description: "Negate --typescript" },
        {
          name: "--visibility",
          description: "Visibility mode for dataset",
          args: { name: "mode", suggestions: ["public", "private"] },
        },
        yesOption2,
      ],
    },
    {
      name: "install",
      description: "Install dependencies for the Sanity Studio project",
      args: {
        name: "packages",
        description: "Packages to install",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "learn",
      description: "Open Sanity Learn in your browser",
    },
    {
      name: "login",
      description: "Log in to your Sanity account",
      options: [
        {
          name: "--with-token",
          description: "Read token from standard input",
          exclusiveOn: ["--provider", "--sso"],
        },
        { name: "--experimental", hidden: true },
        {
          name: "--open",
          description:
            "Open a browser window to log in (`--no-open` only prints URL)",
        },
        { name: "--no-open", description: "Negate --open" },
        {
          name: "--provider",
          description:
            "Log in using a provider ID (google, github, sanity, vercel)",
          args: {
            name: "providerId",
            suggestions: ["google", "github", "sanity", "vercel"],
          },
          exclusiveOn: ["--sso", "--with-token"],
        },
        {
          name: "--sso",
          description:
            "Log in using Single Sign-On, using the given organization slug",
          args: { name: "slug" },
          exclusiveOn: ["--provider", "--with-token"],
        },
        {
          name: "--sso-provider",
          description:
            "Select a specific SSO provider by name (use with --sso)",
          args: { name: "name" },
          dependsOn: ["--sso"],
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of the current session",
    },
    {
      name: "manage",
      description: "Open project settings in your browser",
    },
    {
      name: "manifest",
      description: "Extract studio configuration as JSON manifests",
      subcommands: [
        {
          name: "extract",
          description: "Extract studio configuration as JSON manifest files",
          options: [
            {
              name: "--path",
              description:
                "Optional path to specify destination directory of the manifest files",
              args: {
                name: "path",
                default: "dist/static",
                template: "folders",
              },
            },
          ],
        },
      ],
    },
    {
      name: "mcp",
      description: "Configure Sanity MCP server for AI agents",
      subcommands: [
        {
          name: "configure",
          description:
            "Configure Sanity MCP server for AI editors (Antigravity, Claude Code, Cline, Codex CLI, Cursor, Gemini CLI, GitHub Copilot CLI, MCPorter, OpenCode, VS Code, VS Code Insiders, Zed)",
        },
      ],
    },
    {
      name: "media",
      description: "Manage media assets and aspect definitions",
      subcommands: [
        {
          name: "create-aspect",
          description: "Create a new aspect definition file",
          options: [
            {
              name: "--name",
              description: "Aspect name",
              args: { name: "name" },
            },
            {
              name: "--title",
              description: "Aspect title",
              args: { name: "title" },
            },
          ],
        },
        {
          name: "delete-aspect",
          description: "Delete an aspect definition",
          options: [
            projectOption,
            visibleMediaLibraryIdOption,
            {
              name: ["-y", "--yes"],
              description: "Run without prompts and confirm deletion",
            },
          ],
          args: {
            name: "aspectName",
            description: "Name of the aspect to delete",
          },
          isDangerous: true,
        },
        {
          name: "deploy-aspect",
          description: "Deploy an aspect",
          options: [
            projectOption,
            { name: "--all", description: "Deploy all aspects" },
            visibleMediaLibraryIdOption,
          ],
          args: {
            name: "aspectName",
            description: "Name of the aspect to deploy",
            isOptional: true,
          },
        },
        {
          name: "export",
          description:
            "Export file and image assets from a media library (excludes video)",
          options: [
            projectOption,
            {
              name: "--asset-concurrency",
              description: "Concurrent number of asset downloads",
              args: { name: "asset-concurrency", default: "8" },
            },
            visibleMediaLibraryIdOption,
            {
              name: "--no-compress",
              description:
                "Skips compressing tarball entries (still generates a gzip file)",
            },
            {
              name: "--overwrite",
              description: "Overwrite any file with the same name",
            },
          ],
          args: {
            name: "destination",
            description: "Output destination file path",
            template: "filepaths",
            isOptional: true,
          },
        },
        {
          name: "import",
          description: "Import a set of assets to the target media library",
          options: [
            projectOption,
            {
              name: "--aspect",
              description:
                "Aspect value to set on the imported asset, as key=value",
              args: { name: "key=value" },
              isRepeatable: true,
            },
            {
              name: "--filename",
              description: "Original filename to store on the asset",
              args: { name: "filename" },
            },
            visibleMediaLibraryIdOption,
            {
              name: "--replace-aspects",
              description: "Replace existing aspect data",
            },
          ],
          args: {
            name: "source",
            description: "Directory, archive, or asset URL to import from",
            template: "filepaths",
          },
        },
        {
          name: "prune-aspect-data",
          description:
            "Irreversibly remove an aspect's data (aspects.<name> values) from every asset of a media library",
          hidden: true,
          options: [
            {
              name: "--media-library-id",
              description:
                "The id of the media library to prune (defaults to the single active library of the configured organization)",
              args: { name: "media-library-id" },
            },
            { name: ["-y", "--yes"], description: "Execute the prune" },
          ],
          args: {
            name: "aspectName",
            description:
              "Name of the aspect whose data to remove from all assets",
          },
          isDangerous: true,
        },
        {
          name: "pull-aspects",
          description:
            "Generate field modules from a media library's stored aspect documents",
          hidden: true,
          options: [
            {
              name: "--media-library-id",
              description:
                "The id of the media library to pull from (defaults to the single active library of the configured organization)",
              args: { name: "media-library-id" },
            },
            {
              name: "--out-dir",
              description:
                "Directory to write the generated field modules to, relative to the project root",
              args: {
                name: "out-dir",
                default: "src/fields",
                template: "folders",
              },
            },
            {
              name: "--overwrite",
              description:
                "Overwrite existing field modules and re-generate fields already declared in the config",
            },
            {
              name: "--update-config",
              description:
                "Declare the generated fields in sanity.cli.ts (--no-update-config to skip)",
            },
            {
              name: "--no-update-config",
              description: "Negate --update-config",
            },
          ],
        },
      ],
    },
    {
      name: ["migrations", "migration"],
      description: "Run and manage content migrations",
      subcommands: [
        {
          name: "create",
          description: "Create a new migration within your project",
          args: {
            name: "title",
            description: "Title of migration",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List available migrations",
        },
        {
          name: "run",
          description: "Run a migration against a dataset",
          options: [
            {
              name: "--api-version",
              description: "API version to use when migrating",
              args: { name: "api-version" },
            },
            {
              name: "--concurrency",
              description: "How many mutation requests to run in parallel",
              args: { name: "concurrency", default: "6" },
            },
            {
              name: "--confirm",
              description:
                "Prompt for confirmation before running the migration (default: true)",
            },
            { name: "--no-confirm", description: "Negate --confirm" },
            {
              name: "--dataset",
              description: "Dataset to migrate",
              args: { name: "dataset" },
            },
            {
              name: "--dry-run",
              description: "By default the migration runs in dry mode",
            },
            { name: "--no-dry-run", description: "Negate --dry-run" },
            {
              name: "--from-export",
              description:
                "Use a local dataset export as source for migration instead of calling the Sanity API",
              args: { name: "from-export", template: "filepaths" },
            },
            {
              name: "--progress",
              description: "Display progress during migration (default: true)",
            },
            { name: "--no-progress", description: "Negate --progress" },
            projectOption,
          ],
          args: { name: "id", description: "Migration ID", isOptional: true },
        },
      ],
    },
    {
      name: "new",
      description:
        "Create a Sanity project without an account, and claim it within 72 hours to keep it",
      options: [
        jsonOption,
        {
          name: "--instructions",
          description:
            "Print the full setup guide from https://sanity.new and exit, creating nothing",
        },
        {
          name: "--scaffold",
          description:
            "Set up a Studio in ./sanity and a Next.js website in ./web (on by default)",
        },
        { name: "--no-scaffold", description: "Negate --scaffold" },
        {
          name: ["-y", "--yes"],
          description:
            'Skip prompts and use defaults (project: "My Sanity project")',
        },
      ],
      args: {
        name: "projectName",
        description: "Display name for the new project",
        isOptional: true,
      },
    },
    {
      name: "openapi",
      description: "Manage OpenAPI specifications",
      subcommands: [
        {
          name: "get",
          description: "Get an OpenAPI specification by slug",
          options: [
            {
              name: "--format",
              description: "Output format: yaml (default), json",
              args: {
                name: "format",
                suggestions: ["yaml", "json"],
                default: "yaml",
              },
            },
            { name: ["-w", "--web"], description: "Open in web browser" },
          ],
          args: {
            name: "slug",
            description: "Slug of the OpenAPI specification to retrieve",
          },
        },
        {
          name: "list",
          description: "List all available OpenAPI specifications",
          options: [
            jsonOption,
            {
              name: ["-w", "--web"],
              description: "Open HTTP Reference in web browser",
            },
          ],
        },
      ],
    },
    {
      name: [
        "organizations",
        "organization",
        "organisations",
        "organisation",
        "org",
        "orgs",
      ],
      description: "Manage your organizations",
      subcommands: [
        {
          name: "create",
          description: "Create a new organization",
          options: [
            {
              name: "--default-role",
              description: "Default role assigned to new members",
              args: { name: "default-role" },
            },
            {
              name: "--logo",
              description:
                "Image file to use as the logo: PNG, JPEG, GIF, WebP, SVG, BMP, TIFF, HEIF or AVIF, at most 5 MB",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--name",
              description: "Organization name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an organization",
          options: [
            {
              name: "--force",
              description:
                "Do not prompt for delete confirmation - forcefully delete",
            },
          ],
          args: {
            name: "organizationId",
            description: "Organization ID to delete",
          },
          isDangerous: true,
        },
        {
          name: "get",
          description: "Get details of an organization",
          args: { name: "organizationId", description: "Organization ID" },
        },
        {
          name: "list",
          description: "List organizations you are a member of",
        },
        {
          name: "update",
          description: "Update an organization",
          options: [
            {
              name: "--default-role",
              description: "New default role for new members",
              args: { name: "default-role" },
            },
            {
              name: "--logo",
              description:
                'Image file to use as the logo: PNG, JPEG, GIF, WebP, SVG, BMP, TIFF, HEIF or AVIF, at most 5 MB ("" removes it)',
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--name",
              description: "New organization name",
              args: { name: "name" },
            },
            {
              name: "--slug",
              description:
                "New URL slug (requires authSAML feature on the organization)",
              args: { name: "slug" },
            },
          ],
          args: { name: "organizationId", description: "Organization ID" },
        },
      ],
    },
    {
      name: ["preview", "start"],
      description: "Start a local server to preview a production build",
      options: [
        {
          name: "--host",
          description:
            "Local network interface to listen on (default: localhost)",
          args: { name: "host" },
        },
        {
          name: "--port",
          description: "TCP port to start server on (default: 3333)",
          args: { name: "port" },
        },
      ],
      args: {
        name: "outputDir",
        description: "Output directory",
        template: "folders",
        isOptional: true,
      },
    },
    {
      name: ["projects", "project"],
      description: "Manage Sanity projects",
      subcommands: [
        {
          name: "create",
          description: "Create a new Sanity project",
          options: [
            jsonOption,
            {
              name: "--dataset",
              description: "Create a dataset",
              args: { name: "dataset" },
            },
            {
              name: "--dataset-visibility",
              description: "Dataset visibility: public or private",
              args: {
                name: "dataset-visibility",
                suggestions: ["private", "public"],
              },
            },
            {
              name: "--organization",
              description: "Organization to create the project in",
              args: { name: "slug|id" },
            },
            {
              name: ["-y", "--yes"],
              description:
                'Skip prompts and use defaults (project: "My Sanity Project", dataset: production, visibility: public)',
            },
          ],
          args: {
            name: "projectName",
            description: "Name of the project to create",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List your projects",
          options: [
            {
              name: "--order",
              description: "Sort direction",
              args: {
                name: "order",
                suggestions: ["asc", "desc"],
                default: "desc",
              },
            },
            {
              name: "--sort",
              description: "Sort field",
              args: {
                name: "sort",
                suggestions: ["id", "members", "name", "url", "created"],
                default: "created",
              },
            },
          ],
        },
        {
          name: "unclaimed",
          description:
            "Recover details for unclaimed projects created on this machine",
          options: [
            {
              name: ["-p", "--project", "--project-id"],
              description: "Project ID to recover",
              args: { name: "id" },
            },
          ],
        },
      ],
    },
    {
      name: ["schemas", "schema"],
      description: "Manage and validate schemas",
      subcommands: [
        {
          name: "delete",
          description: "Delete schema documents by id",
          options: [
            projectOption,
            {
              name: ["-d", "--dataset"],
              description: "Delete schemas from a specific dataset",
              args: { name: "name" },
            },
            {
              name: "--extract-manifest",
              description:
                "Generate manifest file (disable with --no-extract-manifest)",
              hidden: true,
            },
            {
              name: "--no-extract-manifest",
              description: "Negate --extract-manifest",
              hidden: true,
            },
            {
              name: "--ids",
              description: "Comma-separated list of schema ids to delete",
              args: { name: "ids" },
            },
            {
              name: "--manifest-dir",
              description: "Directory containing manifest file",
              args: {
                name: "manifest-dir",
                default: "./dist/static",
                template: "folders",
              },
              hidden: true,
            },
            { name: "--verbose", description: "Enable verbose logging" },
            {
              name: ["-y", "--yes"],
              description: "Delete schemas without prompting for confirmation",
            },
          ],
          isDangerous: true,
        },
        {
          name: "deploy",
          description: "Deploy schema documents into workspace datasets",
          options: [
            {
              name: "--extract-manifest",
              description:
                "Regenerate manifest before deploying (use --no-extract-manifest to skip)",
            },
            {
              name: "--no-extract-manifest",
              description: "Negate --extract-manifest",
            },
            {
              name: "--manifest-dir",
              description: "Directory containing manifest file",
              args: {
                name: "directory",
                default: "./dist/static",
                template: "folders",
              },
            },
            {
              name: "--tag",
              description: "Add a tag suffix to the schema id",
              args: { name: "tag" },
            },
            {
              name: "--verbose",
              description: "Print detailed information during deployment",
            },
            {
              name: "--workspace",
              description: "The name of the workspace to deploy a schema for",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "extract",
          description:
            "Extract a JSON representation of a Sanity schema within a Studio context",
          options: [
            {
              name: "--config-path",
              description: "Path to the Sanity Studio config file",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--enforce-required-fields",
              description:
                "Makes the schema generated treat fields marked as required as non-optional",
            },
            {
              name: "--force",
              description: "Overwrite an existing schema file",
            },
            {
              name: "--format",
              description: "Output format (currently only groq-type-nodes)",
              args: {
                name: "format",
                suggestions: ["groq-type-nodes"],
                default: "groq-type-nodes",
              },
            },
            {
              name: "--path",
              description:
                "Optional path to specify destination of the schema file",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--watch",
              description:
                "Enable watch mode to re-extract schema on file changes",
            },
            {
              name: "--watch-patterns",
              description:
                "Additional glob pattern(s) to watch (can be specified multiple times)",
              args: { name: "glob" },
              isRepeatable: true,
            },
            {
              name: "--workspace",
              description: "The name of the workspace to generate a schema for",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "list",
          description: "List all schemas in the current dataset",
          options: [
            jsonOption,
            {
              name: "--extract-manifest",
              description:
                "Regenerate manifest before listing (use --no-extract-manifest to skip)",
              hidden: true,
            },
            {
              name: "--no-extract-manifest",
              description: "Negate --extract-manifest",
              hidden: true,
            },
            {
              name: "--id",
              description: "Fetch a single schema by id",
              args: { name: "schema_id" },
            },
            {
              name: "--manifest-dir",
              description: "Directory containing manifest file",
              args: {
                name: "directory",
                default: "./dist/static",
                template: "folders",
              },
              hidden: true,
            },
          ],
        },
        {
          name: "validate",
          description: "Validates all schema types specified in a workspace",
          options: [
            {
              name: "--debug-metafile-path",
              description:
                "Optional path where a metafile will be written for build analysis",
              args: { name: "debug-metafile-path", template: "filepaths" },
            },
            {
              name: "--format",
              description:
                "The output format used to print schema errors and warnings",
              args: {
                name: "format",
                suggestions: ["pretty", "ndjson", "json"],
                default: "pretty",
              },
            },
            {
              name: "--level",
              description: "The minimum level reported out",
              args: {
                name: "level",
                suggestions: ["error", "warning"],
                default: "warning",
              },
            },
            {
              name: "--workspace",
              description:
                "The name of the workspace to use when validating all schema types",
              args: { name: "workspace" },
            },
          ],
        },
      ],
    },
    {
      name: "skills",
      description: "Install Sanity agent skills for AI agents",
      subcommands: [
        {
          name: "install",
          description:
            "Install Sanity agent skills for detected AI editors (Antigravity, Claude Code, Cline, Codex CLI, Cursor, Gemini CLI, GitHub Copilot CLI, OpenCode, VS Code, VS Code Insiders)",
        },
      ],
    },
    {
      name: "telemetry",
      description: "Manage telemetry consent",
      subcommands: [
        {
          name: "disable",
          description: "Disable telemetry for your account",
        },
        {
          name: "enable",
          description: "Enable telemetry for your account",
        },
        {
          name: "status",
          description: "Check telemetry status for your account",
        },
      ],
    },
    {
      name: ["tokens", "token"],
      description: "Manage API tokens for your project",
      subcommands: [
        {
          name: ["create", "add"],
          description:
            "Create a new API token with access to an organization and its projects",
          options: [
            jsonOption,
            projectOption,
            organizationOption,
            {
              name: "--expires-at",
              description:
                "Date or timestamp the token expires (ISO 8601; tokens never expire by default)",
              args: { name: "expires-at" },
            },
            {
              name: "--grant",
              description:
                "Access to grant, as <permission>[=<role>] or project:<projectId>=<role>[,<role>]",
              args: { name: "grant" },
              isRepeatable: true,
            },
            {
              name: "--role",
              description:
                "Role to assign on the project (defaults to viewer in unattended mode)",
              args: { name: "role" },
            },
            {
              name: ["-y", "--yes"],
              description: "Skip prompts and use defaults (unattended mode)",
            },
          ],
          args: {
            name: "label",
            description: "Label for the new token",
            isOptional: true,
          },
        },
        {
          name: "delete",
          description: "Delete an API token from a project or organization",
          options: [
            {
              name: "--organization",
              description: "Delete a token managed by this organization",
              args: { name: "id" },
              exclusiveOn: ["--project"],
            },
            projectOption,
            yesOption,
          ],
          args: {
            name: "tokenId",
            description: "Token ID to delete (will prompt if not provided)",
            isOptional: true,
          },
          isDangerous: true,
        },
        {
          name: "list",
          description: "List API tokens for a project or organization",
          options: [
            jsonOption,
            {
              name: "--organization",
              description: "List tokens managed by this organization",
              args: { name: "id" },
              exclusiveOn: ["--project"],
            },
            projectOption,
          ],
        },
        {
          name: "rotate",
          description:
            "Rotate an API token, replacing its secret with a new one",
          options: [
            jsonOption,
            {
              name: ["-t", "--token"],
              description:
                "Token to rotate (prefer standard input to keep it out of shell history)",
              args: { name: "token" },
            },
          ],
        },
      ],
    },
    {
      name: "typegen",
      description: "Generate TypeScript types for schema and GROQ",
      subcommands: [
        {
          name: "generate",
          description: "Generate TypeScript types for schema and GROQ",
          options: [
            {
              name: "--config-path",
              description:
                "[Default: sanity-typegen.json] Specifies the path to the typegen configuration file",
              args: { name: "config-path", template: "filepaths" },
            },
            {
              name: "--watch",
              description: "[Default: false] Run the typegen in watch mode",
            },
          ],
        },
      ],
    },
    {
      name: "undeploy",
      description: "Removes the deployed Sanity Studio/App from Sanity hosting",
      options: [
        { name: ["-j", "--json"], description: "Output the result as JSON" },
        {
          name: "--dry-run",
          description:
            "Report what would be undeployed without deleting anything",
        },
        yesOption2,
      ],
      args: {
        name: "appId",
        description: "ID of the application to undeploy",
        isOptional: true,
      },
      isDangerous: true,
    },
    {
      name: ["users", "user"],
      description: "Manage project users and invitations",
      subcommands: [
        {
          name: "invite",
          description: "Invite a new user to the project",
          options: [
            projectOption,
            {
              name: "--role",
              description: "Role to invite the user as",
              args: { name: "role" },
            },
          ],
          args: {
            name: "email",
            description: "Email address to invite",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List project members",
          options: [
            projectOption,
            {
              name: "--invitations",
              description: "Includes or excludes pending invitations",
            },
            { name: "--no-invitations", description: "Negate --invitations" },
            {
              name: "--order",
              description: "Sort output ascending/descending",
              args: {
                name: "order",
                suggestions: ["asc", "desc"],
                default: "asc",
              },
            },
            {
              name: "--robots",
              description: "Includes or excludes robots (token users)",
            },
            { name: "--no-robots", description: "Negate --robots" },
            {
              name: "--sort",
              description: "Sort users by specified column",
              args: {
                name: "sort",
                suggestions: ["id", "name", "role", "date"],
                default: "date",
              },
            },
          ],
        },
      ],
    },
    {
      name: "versions",
      description: "Show installed package versions",
    },
    {
      name: "whoami",
      description: "Show the user or API token the CLI is authenticated as",
      options: [jsonOption],
    },
    {
      name: ["workflows", "workflow"],
      description:
        "Deploy, inspect, and administer Workflows definitions and instances",
      subcommands: [
        {
          name: "abort",
          description: "Abort an in-flight workflow instance",
          options: [
            visiblePathOption,
            deploymentOption,
            partitionOption,
            {
              name: "--reason",
              description: "Reason for aborting (recorded in history)",
              args: { name: "reason" },
            },
          ],
          args: instanceIdArg,
          isDangerous: true,
        },
        {
          name: ["blueprints", "blueprint"],
          description:
            "Generate and verify the Sanity Blueprints runtime the definitions require",
          subcommands: [
            {
              name: "generate",
              description:
                "Generate the Sanity Blueprints runtime the definitions require, next to sanity.workflow.ts",
              options: [
                visiblePathOption,
                {
                  name: "--check",
                  description:
                    "Verify the tree on disk still matches the definitions; write nothing and exit non-zero on any difference",
                },
                {
                  name: "--verbose",
                  description:
                    "Print the full runtime-needs report, every file written, and the heartbeat stack instructions even when its files are unchanged, in place of the summary of what changed and what needs you",
                  exclusiveOn: ["--check"],
                },
              ],
            },
          ],
        },
        {
          name: "codemod",
          description: "Rewrite a project for a Workflows package change",
          subcommands: [
            {
              name: "packages",
              description:
                "Move imports and dependencies from the retired Workflows packages to the @sanity/workflows packages",
              options: [
                {
                  name: "--dry-run",
                  description: "Print what would change and write nothing",
                },
              ],
              args: {
                name: "path",
                description: "File or directory to rewrite",
                template: "filepaths",
                isOptional: true,
                isVariadic: true,
              },
            },
          ],
        },
        {
          name: ["definitions", "definition"],
          description: "Read and manage workflow definitions",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete a deployed workflow definition (every version, or one via --version)",
              options: [
                visiblePathOption,
                deploymentOption,
                partitionOption,
                {
                  name: "--version",
                  description:
                    "Delete only this deployed version (default: every version)",
                  args: { name: "version" },
                },
                {
                  name: "--cascade",
                  description:
                    "Abort every non-terminal instance pinned to the targeted versions, then delete",
                },
                {
                  name: "--reason",
                  description: "Free-text reason",
                  args: { name: "reason" },
                },
              ],
              args: nameArg2,
              isDangerous: true,
            },
            {
              name: "diff",
              description:
                "Diff an in-code definition against the deployed version (latest by default)",
              options: [
                visiblePathOption,
                deploymentOption,
                partitionOption,
                {
                  name: "--version",
                  description:
                    "Deployed version to diff against (default: latest)",
                  args: { name: "version" },
                },
              ],
              args: nameArg2,
            },
            {
              name: "list",
              description: "List deployed workflow definitions",
              options: [
                visiblePathOption,
                deploymentOption,
                partitionOption,
                workflowResourceOption,
                projectIdOption2,
                datasetOption2,
                mediaLibraryIdOption,
                {
                  name: "--limit",
                  description: "The maximum number of definitions to return",
                  args: { name: "limit", default: "100" },
                },
                {
                  name: "--name",
                  description:
                    "Filter to a single workflow definition name (e.g. product-launch)",
                  args: { name: "name" },
                },
                jsonOption2,
              ],
            },
            {
              name: "show",
              description: "Show a deployed workflow definition",
              options: [
                visiblePathOption,
                deploymentOption,
                partitionOption,
                workflowResourceOption,
                projectIdOption2,
                datasetOption2,
                mediaLibraryIdOption,
                {
                  name: "--version",
                  description: "Specific version (default: latest)",
                  args: { name: "version" },
                },
                jsonOption2,
              ],
              args: nameArg2,
            },
            {
              name: "validate",
              description:
                "Validate workflow definitions in JSON files without a config, login or network access",
              options: [jsonOption2],
              args: {
                name: "file",
                description:
                  "JSON file holding one definition or an array of them",
                template: "filepaths",
                isVariadic: true,
              },
            },
          ],
        },
        {
          name: "deploy",
          description:
            "Validate workflow definitions and deploy them to the bound resource",
          options: [
            visiblePathOption,
            deploymentOption,
            {
              name: ["--partition", "--tag"],
              description: "Workflow partition (e.g. prod, test)",
              args: { name: "partition" },
              exclusiveOn: ["--deployment"],
            },
            {
              name: ["--all-partitions", "--all-tags"],
              description:
                "Deploy every deployment in the config, not just a selection",
              exclusiveOn: ["--partition", "--deployment"],
            },
            {
              name: "--dry-run",
              description:
                "Validate definitions, check any generated runtime against them, and diff against the deployed version; do not write",
            },
            {
              name: "--check",
              description:
                "Validate definitions and check any generated runtime against them; do not contact the dataset",
            },
            {
              name: "--verbose",
              description:
                "When no generated runtime is here, print the full report of the Sanity Functions the selected deployments need, in place of the summary",
            },
            {
              name: "--only",
              description:
                "Limit deploy/check/diff to a single workflow definition by name (deployments are selected with --deployment)",
              args: { name: "only" },
            },
            {
              name: "--share-defs",
              description:
                "Share the definition documents newly created by this deploy with Sanity",
            },
            { name: "--no-share-defs", description: "Negate --share-defs" },
          ],
        },
        {
          name: "diagnose",
          description:
            "Explain why a workflow instance is or isn't progressing, and what would unstick it",
          options: [
            visiblePathOption,
            deploymentOption,
            partitionOption,
            workflowResourceOption,
            projectIdOption2,
            datasetOption2,
            mediaLibraryIdOption,
            jsonOption2,
          ],
          args: instanceIdArg,
        },
        {
          name: "fire-action",
          description:
            "Fire an action on an instance to unstick a waiting activity",
          options: [
            visiblePathOption,
            deploymentOption,
            partitionOption,
            {
              name: "--activity",
              description: "Activity the action belongs to",
              args: { name: "activity" },
            },
            {
              name: "--action",
              description: "Action to fire",
              args: { name: "action" },
            },
            {
              name: "--param",
              description: "Action param as key=value (repeatable)",
              args: { name: "param" },
              isRepeatable: true,
            },
            jsonOption2,
          ],
          args: instanceIdArg,
        },
        {
          name: "list",
          description: "List workflow instances (in-flight by default)",
          options: [
            visiblePathOption,
            deploymentOption,
            partitionOption,
            workflowResourceOption,
            projectIdOption2,
            datasetOption2,
            mediaLibraryIdOption,
            {
              name: "--include-completed",
              description:
                "Include completed/aborted instances (default: in-flight only)",
            },
            {
              name: "--failed",
              description: "Only instances with at least one failed activity",
            },
            {
              name: "--definition",
              description:
                "Only instances of this workflow definition (its `name`; the instance's `definition` field)",
              args: { name: "definition" },
            },
            {
              name: "--document",
              description:
                'Only instances that reference this document (resource-qualified GDR URI, e.g. "dataset:proj:ds:article-1")',
              args: { name: "document" },
            },
            {
              name: "--assignment-user",
              description:
                "Account-global user id used for viewer-scoped assignment filtering and counts",
              args: { name: "assignment-user" },
            },
            {
              name: "--assignment-role",
              description: "A literal project role held by --assignment-user",
              args: { name: "assignment-role" },
              isRepeatable: true,
            },
            {
              name: "--assignment-state",
              description:
                "Assignment state to include: unrouted, routed (offered through a supplied role), or held",
              args: {
                name: "assignment-state",
                suggestions: ["unrouted", "routed", "held"],
              },
              isRepeatable: true,
            },
            {
              name: "--limit",
              description: "Maximum rows to return",
              args: { name: "limit", default: "50" },
            },
            jsonOption2,
          ],
        },
        {
          name: "nuke",
          description: "Delete engine-owned documents",
          options: [
            visiblePathOption,
            {
              name: "--deployment",
              description: "The deployment name to reset",
              args: { name: "deployment" },
            },
            {
              name: ["--partition", "--tag"],
              description:
                "The deployment partition to reset (while it names exactly one deployment)",
              args: { name: "partition" },
            },
            {
              name: "--instance",
              description:
                "Delete a single terminal instance by id, plus its guard docs, instead of a partition",
              args: { name: "instance" },
            },
            {
              name: "--force",
              description: "Skip the confirmation prompt (for scripts/CI)",
            },
          ],
          isDangerous: true,
        },
        {
          name: "reset-activity",
          description: "Reset a failed activity on an in-flight instance",
          options: [
            visiblePathOption,
            deploymentOption,
            partitionOption,
            {
              name: "--skip",
              description:
                "Bypass the activity (mark it skipped) instead of re-running it (back to active)",
            },
          ],
          args: [
            instanceIdArg,
            {
              name: "activity",
              description: "Activity name within the current stage",
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the state, activities, and effects of a workflow instance",
          options: [
            visiblePathOption,
            deploymentOption,
            partitionOption,
            workflowResourceOption,
            projectIdOption2,
            datasetOption2,
            mediaLibraryIdOption,
            {
              name: "--include",
              description:
                "Optional sections to include in rendered output (--json always carries the full document)",
              args: { name: "include", suggestions: ["history"] },
              isRepeatable: true,
            },
            jsonOption2,
          ],
          args: {
            name: "instanceId",
            description: "Workflow instance document id",
          },
        },
        {
          name: "start",
          description: "Start a workflow instance from a deployed definition",
          options: [
            visiblePathOption,
            deploymentOption,
            partitionOption,
            {
              name: "--version",
              description:
                "Definition version to start from (default: highest deployed)",
              args: { name: "version" },
            },
            {
              name: "--field",
              description:
                "Initial value for a declared input-sourced field, as name=value (repeatable)",
              args: { name: "field" },
              isRepeatable: true,
            },
            {
              name: "--release-resource",
              description:
                "Resource alias (from the deployment's `resourceAliases`) that bare release names in --field point at",
              args: { name: "alias" },
            },
            {
              name: "--instance-id",
              description: "Start under this instance id",
              args: { name: "instance-id" },
            },
            jsonOption2,
          ],
          args: nameArg2,
        },
        {
          name: "tail",
          description:
            "Stream new history entries on a workflow instance as they land in its workflow resource",
          options: [
            visiblePathOption,
            deploymentOption,
            partitionOption,
            workflowResourceOption,
            projectIdOption2,
            datasetOption2,
            mediaLibraryIdOption,
          ],
          args: {
            name: "instanceId",
            description: "Workflow instance id to tail",
          },
        },
        {
          name: "whoami",
          description: "Show the user ID Workflows records for your login",
          options: [
            visiblePathOption,
            deploymentOption,
            partitionOption,
            workflowResourceOption,
            projectIdOption2,
            datasetOption2,
            mediaLibraryIdOption,
            jsonOption2,
          ],
        },
      ],
    },
  ],
  options: [
    { name: "--help", description: "Show help for sanity", isPersistent: true },
    { name: ["-v", "--version"], description: "Show the CLI version" },
  ],
};

export default completionSpec;
