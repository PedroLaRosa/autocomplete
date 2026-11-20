// Sourcegraph CLI (src) v8.2.0 (GitHub tag sourcegraph/src-cli 8.2.0, 2026-11-20). Source: shallow clone of
// sourcegraph/src-cli at tag 8.2.0, read statically (cmd/src/*.go registered commands and Go flag / urfave-cli
// flag definitions, internal/clicompat, internal/api/flags.go); the binary was not run.
// The old `lsif` and `validate` commands no longer exist (`code-intel` replaces `lsif`); `batch exec` was removed.
// Go `flag` style single-dash flags are used throughout (the double-dash form is accepted too).

const icon = "https://sourcegraph.com/.assets/img/sourcegraph-mark.svg";

// Flags added by api.NewFlags / clicompat.WithAPIFlags to every command that talks to the API
const apiOptions: Fig.Option[] = [
  {
    name: "-dump-requests",
    description: "Log GraphQL requests and responses to stdout",
  },
  {
    name: "-get-curl",
    description:
      "Print the curl command for executing this query and exit (WARNING: includes printing your access token!)",
  },
  {
    name: "-insecure-skip-verify",
    description: "Skip validation of TLS certificates against trusted chains",
  },
  {
    name: "-trace",
    description:
      "Log the trace ID for requests. See https://sourcegraph.com/docs/admin/observability/tracing",
  },
  {
    name: "-user-agent-telemetry",
    description:
      "Include the operating system and architecture in the User-Agent sent with requests to Sourcegraph",
  },
];

const formatOption = (example: string, defaultValue?: string): Fig.Option => ({
  name: "-f",
  description: `Format for the output, using the syntax of Go package text/template. (e.g. ${example})`,
  args: {
    name: "template",
    ...(defaultValue === undefined ? {} : { default: defaultValue }),
  },
});

const firstOption = (what: string): Fig.Option => ({
  name: "-first",
  description: `Returns the first n ${what} from the list`,
  args: { name: "n", default: "1000" },
});

const subjectOption = (verb: string): Fig.Option => ({
  name: "-subject",
  description: `The ID of the settings subject whose settings to ${verb} (default: authenticated user)`,
  args: { name: "id" },
});

const batchSpecArg: Fig.Arg = {
  name: "FILE",
  description: "The batch spec file to read, or - to read from standard input",
  template: "filepaths",
  isOptional: true,
};

const batchSpecFileOption = (description: string): Fig.Option => ({
  name: "-f",
  description,
  args: { name: "FILE", template: "filepaths" },
});

// Flags shared by `batch apply`, `batch preview` and `batch remote` (newBatchExecutionFlags)
const batchExecutionOptions: Fig.Option[] = [
  ...apiOptions,
  {
    name: "-allow-unsupported",
    description: "Allow unsupported code hosts",
  },
  {
    name: "-clear-cache",
    description:
      "If true, clears the execution cache and executes all steps anew",
  },
  {
    name: "-skip-errors",
    description:
      "If true, errors encountered won't stop the program, but only log them",
  },
  {
    name: "-force-override-ignore",
    description: "Do not ignore repositories that have a .batchignore file",
  },
  {
    name: ["-namespace", "-n"],
    description:
      "The user or organization namespace to place the batch change within. Default is the currently authenticated user",
    args: { name: "namespace" },
  },
];

// Flags shared by `batch validate` and `batch repositories`
const batchSpecCheckOptions: Fig.Option[] = [
  batchSpecFileOption(
    "The batch spec file to read, or - to read from standard input"
  ),
  ...apiOptions,
  {
    name: "-allow-unsupported",
    description: "Allow unsupported code hosts",
  },
  {
    name: "-force-override-ignore",
    description: "Do not ignore repositories that have a .batchignore file",
  },
  {
    name: "-skip-errors",
    description:
      "If true, errors encountered won't stop the program, but only log them",
  },
];

// Flags for local execution, shared by `batch apply` and `batch preview` (newBatchExecuteFlags)
const batchExecuteOptions: Fig.Option[] = [
  ...batchExecutionOptions,
  {
    name: "-text-only",
    description:
      "INTERNAL USE ONLY. EXPERIMENTAL. Switches off the TUI to only print JSON lines",
    hidden: true,
  },
  {
    name: "-apply",
    description: "Ignored",
    deprecated: true,
  },
  {
    name: "-keep-logs",
    description: "Retain logs after executing steps",
  },
  {
    name: "-cache",
    description: "Directory for caching results and repository archives",
    args: { name: "dir", template: "folders" },
  },
  {
    name: "-tmp",
    description:
      "Directory for storing temporary data, such as log files. Default is /tmp. Can also be set with environment variable SRC_BATCH_TMP_DIR; if both are set, this flag will be used and not the environment variable",
    args: { name: "dir", template: "folders" },
  },
  batchSpecFileOption(
    "The batch spec file to read, or - to read from standard input"
  ),
  {
    name: "-j",
    description:
      "The maximum number of parallel jobs. Default (or 0) is the number of CPU cores available to Docker",
    args: { name: "jobs", default: "0" },
  },
  {
    name: "-timeout",
    description: "The maximum duration a single batch spec step can take",
    args: { name: "duration", default: "1h0m0s" },
  },
  {
    name: "-clean-archives",
    description:
      "If true, deletes downloaded repository archives after executing batch spec steps. Note that only the archives related to the actual repositories matched by the batch spec will be cleaned up, and clean up will not occur if src exits unexpectedly. Defaults to true",
  },
  {
    name: "-workspace",
    description: "Workspace mode to use",
    args: {
      name: "mode",
      default: "auto",
      suggestions: ["auto", "bind", "volume"],
    },
  },
  {
    name: "-v",
    description: "Print verbose output",
  },
  {
    name: "-run-as-root",
    description: "If true, forces all step containers to run as root",
  },
  {
    name: "-fail-fast",
    description:
      "Halts execution immediately upon first error instead of continuing with other tasks",
  },
];

// Flags shared by `repos add-metadata`, `update-metadata` and `delete-metadata`
const repoMetadataOptions = (
  repoDescription: string,
  keyDescription: string,
  valueDescription?: string
): Fig.Option[] => [
  {
    name: "-repo",
    description: `${repoDescription} (required if -repo-name is not specified)`,
    args: { name: "id" },
  },
  {
    name: "-repo-name",
    description:
      "The name of the repo to add the key-value pair metadata to (required if -repo is not specified)",
    args: { name: "name" },
  },
  {
    name: "-key",
    description: `${keyDescription} (required)`,
    args: { name: "key" },
  },
  ...(valueDescription === undefined
    ? []
    : [
        {
          name: "-value",
          description: valueDescription,
          args: { name: "value" },
        },
      ]),
  ...apiOptions,
];

const addMetadataCommand: Fig.Subcommand = {
  name: "add-metadata",
  description: "Adds a key-value pair metadata to a repository",
  options: repoMetadataOptions(
    "The ID of the repo to add the key-value pair metadata to",
    "The name of the metadata key to add",
    "The metadata value associated with the metadata key. Defaults to null"
  ),
};

const updateMetadataCommand: Fig.Subcommand = {
  name: "update-metadata",
  description: "Updates a key-value pair metadata on a repository",
  options: repoMetadataOptions(
    "The ID of the repo with the metadata key to be updated",
    "The name of the metadata key to be updated",
    "The new metadata value of the metadata key to be set. Defaults to null"
  ),
};

const deleteMetadataCommand: Fig.Subcommand = {
  name: "delete-metadata",
  description: "Deletes a key-value pair metadata from a repository",
  options: repoMetadataOptions(
    "The ID of the repo with the key-value pair metadata to be deleted",
    "The name of the metadata key to be deleted"
  ),
};

// Flags shared by the `search-jobs` subcommands (SearchJobCommandBuilder)
const searchJobsOptions: Fig.Option[] = [
  ...apiOptions,
  {
    name: "-c",
    description:
      "Comma-separated list of columns to display. Available: id,query,state,username,createdat,startedat,finishedat,url,logurl,total,completed,failed,inprogress",
    args: { name: "columns", default: "id,username,state,query" },
  },
  {
    name: "-json",
    description: "Output results as JSON for programmatic access",
  },
];

const searchJobIdArg: Fig.Arg = {
  name: "id",
  description: "The ID of the search job",
};

// Arguments and flags shared by `snapshot databases` and `snapshot restore`
const snapshotTargetsOption: Fig.Option = {
  name: "-targets",
  description:
    "Predefined targets ('docker' or 'k8s'), or a custom targets.yaml file",
  args: {
    name: "targets",
    default: "auto",
    suggestions: ["docker", "k8s"],
    template: "filepaths",
  },
};

const snapshotRunOption: Fig.Option = {
  name: "-run",
  description: "Automatically run the commands",
};

const snapshotBuilderArg: Fig.Arg = {
  name: "builder",
  description: "How the generated commands reach the databases",
  isOptional: true,
  suggestions: ["pg_dump", "docker", "kubectl"],
};

const codeownersRepoOption = (description: string): Fig.Option => ({
  name: "-repo",
  description,
  args: { name: "repo" },
  isRequired: true,
});

const codeownersFileOption: Fig.Option = {
  name: ["-file", "-f"],
  description: "File path to read ownership information from (- for stdin)",
  args: { name: "file", template: "filepaths" },
  isRequired: true,
};

const completionSpec: Fig.Spec = {
  name: "src",
  description: "Interact with Sourcegraph from the command line",
  subcommands: [
    {
      name: "abc",
      icon,
      description: "Manages agentic batch changes",
      subcommands: [
        {
          name: "variables",
          description: "Manage workflow instance variables",
          subcommands: [
            {
              name: "set",
              description: "Set variables on a workflow instance",
              options: [
                ...apiOptions,
                {
                  name: "-var",
                  description:
                    "Variable assignment in <name>=<value> form. Repeat to set multiple variables",
                  args: { name: "name=value" },
                  isRepeatable: true,
                },
              ],
              args: [
                { name: "workflow-instance-id" },
                {
                  name: "name=value",
                  description:
                    "Values are interpreted as JSON literals when valid, otherwise sent as plain strings",
                  isOptional: true,
                  isVariadic: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Delete variables on a workflow instance",
              options: [
                ...apiOptions,
                {
                  name: "-var",
                  description:
                    "Variable name to delete. Repeat for multiple names",
                  args: { name: "name" },
                  isRepeatable: true,
                },
              ],
              args: [
                { name: "workflow-instance-id" },
                { name: "name", isOptional: true, isVariadic: true },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "api",
      icon,
      description: "Interacts with the Sourcegraph GraphQL API",
      options: [
        ...apiOptions,
        {
          name: "-query",
          description:
            "GraphQL query to execute, e.g. 'query { currentUser { username } }' (stdin otherwise)",
          args: { name: "query" },
        },
        {
          name: "-vars",
          description:
            'GraphQL query variables to include as JSON string, e.g. \'{"var": "val", "var2": "val2"}\'',
          args: { name: "json" },
        },
      ],
      args: {
        name: "variable=value",
        description: "GraphQL query variable",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "auth",
      icon,
      description: "Authentication helper commands",
      subcommands: [
        {
          name: "token",
          description:
            "Prints the current authentication token or Authorization header",
          options: [
            {
              name: "-header",
              description: "Print the token as an Authorization header",
            },
          ],
        },
      ],
    },
    {
      name: [
        "batch",
        "batchchange",
        "batch-change",
        "batchchanges",
        "batch-changes",
        "batches",
      ],
      icon,
      description: "Manages batch changes",
      subcommands: [
        {
          name: "apply",
          description:
            "Applies a batch spec to create or update a batch change",
          options: batchExecuteOptions,
          args: batchSpecArg,
        },
        {
          name: "new",
          description: "Creates a new batch spec YAML file",
          options: [
            ...apiOptions,
            {
              name: "-f",
              description: "The name of the batch spec file to create",
              args: {
                name: "FILE",
                default: "batch.yaml",
                template: "filepaths",
              },
            },
            {
              name: "-skip-errors",
              description:
                "If true, errors encountered won't stop the program, but only log them",
            },
          ],
        },
        {
          name: "preview",
          description: "Creates a batch spec to be previewed or applied",
          options: batchExecuteOptions,
          args: batchSpecArg,
        },
        {
          name: "remote",
          description: "Creates server side batch changes",
          options: [
            ...batchExecutionOptions,
            batchSpecFileOption("The name of the batch spec file to run"),
          ],
          args: batchSpecArg,
        },
        {
          name: ["repositories", "repos"],
          description:
            "Queries the exact repositories that a batch spec will apply to",
          options: batchSpecCheckOptions,
          args: batchSpecArg,
        },
        {
          name: "validate",
          description: "Validates a batch spec",
          options: batchSpecCheckOptions,
          args: batchSpecArg,
        },
      ],
    },
    {
      name: "code-intel",
      icon,
      description: "Manages code intelligence data",
      subcommands: [
        {
          name: "upload",
          description: "Uploads a SCIP index",
          options: [
            {
              name: "-file",
              description:
                "The path to the SCIP index file. Defaults to index.scip.gz or index.scip in the current directory",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "-repo",
              description:
                "The name of the repository (e.g. github.com/gorilla/mux). By default, derived from the origin remote",
              args: { name: "repo" },
            },
            {
              name: "-commit",
              description:
                "The 40-character hash of the commit. Defaults to the currently checked-out commit",
              args: { name: "commit" },
            },
            {
              name: "-root",
              description:
                "The path in the repository that matches the SCIP projectRoot (e.g. cmd/project1). Defaults to the directory where the SCIP index file is located",
              args: { name: "path" },
            },
            {
              name: "-indexer",
              description:
                "The name of the indexer that generated the dump. This will override the 'toolInfo.name' field in the metadata section of SCIP index. This must be supplied if the indexer does not set this field (in which case the upload will fail with an explicit message)",
              args: { name: "name" },
            },
            {
              name: "-indexerVersion",
              description:
                "The version of the indexer that generated the dump. This will override the 'toolInfo.version' field in the metadata section of SCIP index. This must be supplied if the indexer does not set this field (in which case the upload will fail with an explicit message)",
              args: { name: "version" },
            },
            {
              name: "-associated-index-id",
              description:
                "ID of the associated index record for this upload. For internal use only",
              args: { name: "id", default: "-1" },
              hidden: true,
            },
            {
              name: "-upload-route",
              description:
                "The path of the upload route. For internal use only",
              args: { name: "path", default: "/.api/scip/upload" },
              hidden: true,
            },
            {
              name: "-max-payload-size",
              description:
                "The maximum upload size (in megabytes). Indexes exceeding this limit will be uploaded over multiple HTTP requests",
              args: { name: "megabytes", default: "100" },
            },
            {
              name: "-max-concurrency",
              description:
                "The maximum number of concurrent uploads. Only relevant for multipart uploads. Defaults to all parts concurrently",
              args: { name: "n", default: "-1" },
            },
            {
              name: "-github-token",
              description:
                "A GitHub access token with 'public_repo' scope that Sourcegraph uses to verify you have access to the repository",
              args: { name: "token" },
            },
            {
              name: "-gitlab-token",
              description:
                "A GitLab access token with 'read_api' scope that Sourcegraph uses to verify you have access to the repository",
              args: { name: "token" },
            },
            {
              name: "-ignore-upload-failure",
              description: "Exit with status code zero on upload failure",
            },
            {
              name: "-no-progress",
              description: "Do not display progress updates",
            },
            {
              name: "-trace",
              description:
                "Trace level: 0 shows no logs; 1 shows requests and response metadata; 2 shows headers; 3 shows response body",
              args: {
                name: "level",
                default: "0",
                suggestions: ["0", "1", "2", "3"],
              },
            },
            {
              name: "-json",
              description: "Output relevant state in JSON on success",
            },
            {
              name: "-open",
              description: "Open the SCIP upload page in your browser",
            },
            {
              name: "-insecure-skip-verify",
              description:
                "Skip validation of TLS certificates against trusted chains",
            },
          ],
        },
      ],
    },
    {
      name: ["codeowners", "codeowner"],
      icon,
      description: "Manages ingested code ownership data",
      subcommands: [
        {
          name: "get",
          description:
            "Returns the codeowners file for a repository, if it exists",
          options: [
            ...apiOptions,
            codeownersRepoOption("The repository to attach the data to"),
          ],
        },
        {
          name: "create",
          description: "Create a codeowners file",
          options: [
            ...apiOptions,
            codeownersRepoOption("The repository to attach the data to"),
            codeownersFileOption,
          ],
        },
        {
          name: "update",
          description: "Update a codeowners file",
          options: [
            ...apiOptions,
            codeownersRepoOption("The repository to attach the data to"),
            codeownersFileOption,
          ],
        },
        {
          name: "delete",
          description: "Delete a codeowners file",
          options: [
            ...apiOptions,
            codeownersRepoOption("The repository to delete the data for"),
          ],
        },
      ],
    },
    {
      name: "config",
      icon,
      description: "Manages global, org, and user settings",
      subcommands: [
        {
          name: "get",
          description: "Gets the effective (merged) settings",
          options: [
            ...apiOptions,
            subjectOption("get"),
            formatOption('"{{.|json}}"', "{{.|jsonIndent}}"),
          ],
        },
        {
          name: "edit",
          description: "Updates settings",
          options: [
            ...apiOptions,
            subjectOption("edit"),
            {
              name: "-property",
              description: "The name of the settings property to set",
              args: { name: "property" },
            },
            {
              name: "-value",
              description:
                "The value for the settings property (when used with -property)",
              args: { name: "value" },
            },
            {
              name: "-value-file",
              description:
                "Read the value from this file instead of from the -value command-line option",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "-overwrite",
              description:
                "Overwrite the entire settings with the value given in -value (not just a single property)",
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists the partial settings (that, when merged, yield the effective settings)",
          options: [
            ...apiOptions,
            subjectOption("list"),
            formatOption('"{{.|json}}"'),
          ],
        },
      ],
    },
    {
      name: "debug",
      icon,
      description:
        "Gathers and bundles debug data from a Sourcegraph deployment for troubleshooting",
      subcommands: [
        {
          name: "compose",
          description:
            "Dumps context from docker-compose deployments into an archive",
          options: [
            {
              name: "-o",
              description: "The name of the output zip archive",
              args: {
                name: "file",
                default: "debug.zip",
                template: "filepaths",
              },
            },
            {
              name: "-no-configs",
              description: "If true, exclude Sourcegraph configuration files",
            },
          ],
        },
        {
          name: "kube",
          description: "Dumps context from k8s deployments into an archive",
          options: [
            {
              name: "-o",
              description: "The name of the output zip archive",
              args: {
                name: "file",
                default: "debug.zip",
                template: "filepaths",
              },
            },
            {
              name: "-n",
              description:
                "The namespace passed to kubectl commands, if not specified the 'default' namespace is used",
              args: { name: "namespace", default: "default" },
            },
            {
              name: "-no-configs",
              description: "If true, exclude Sourcegraph configuration files",
            },
          ],
        },
      ],
    },
    {
      name: "doc",
      icon,
      description:
        "Generates the Markdown reference documentation used within Sourcegraph",
      hidden: true,
      options: [
        {
          name: "-o",
          description: "Output directory",
          args: { name: "dir", template: "folders" },
        },
      ],
    },
    {
      name: ["extsvc", "external-service"],
      icon,
      description: "Manages external services",
      subcommands: [
        {
          name: "create",
          description:
            "Creates an external service configuration on the Sourcegraph instance",
          options: [
            ...apiOptions,
            {
              name: "-name",
              description: "Exact name of the external service to create",
              args: { name: "name" },
            },
            {
              name: "-kind",
              description: "Kind of the external service to create",
              args: { name: "kind" },
            },
          ],
          args: {
            name: "file",
            description: "JSON config file (stdin otherwise)",
            template: "filepaths",
            isOptional: true,
          },
        },
        {
          name: "edit",
          description: "Edits external services on the Sourcegraph instance",
          options: [
            ...apiOptions,
            {
              name: "-name",
              description: "Exact name of the external service to edit",
              args: { name: "name" },
            },
            {
              name: "-id",
              description: "ID of the external service to edit",
              args: { name: "id" },
            },
            {
              name: "-rename",
              description: "When specified, renames the external service",
              args: { name: "name" },
            },
            {
              name: "-exclude-repos",
              description:
                "When specified, add these repositories to the exclusion list",
              args: { name: "repos" },
            },
          ],
          args: {
            name: "file",
            description: "JSON config file (stdin otherwise)",
            template: "filepaths",
            isOptional: true,
          },
        },
        {
          name: "list",
          description:
            "Lists the external services on the Sourcegraph instance",
          options: [
            ...apiOptions,
            {
              name: "-first",
              description: "Return only the first n external services",
              args: { name: "n", default: "1000" },
            },
            formatOption('"{{.|json}}"'),
          ],
        },
      ],
    },
    {
      name: "login",
      icon,
      description:
        "Authenticate to a Sourcegraph instance with your user credentials",
      options: apiOptions,
      args: {
        name: "SOURCEGRAPH_URL",
        description: "URL of the Sourcegraph instance",
        isOptional: true,
      },
    },
    {
      name: "lsp",
      icon,
      description:
        "Runs a Language Server Protocol server that proxies requests to Sourcegraph code intelligence",
      options: apiOptions,
    },
    {
      name: ["orgs", "org"],
      icon,
      description: "Manages organizations",
      subcommands: [
        {
          name: "list",
          description: "Lists organizations",
          options: [
            ...apiOptions,
            firstOption("organizations"),
            {
              name: "-query",
              description:
                'Returns organizations whose names match the query. (e.g. "alice")',
              args: { name: "query" },
            },
            formatOption(
              '"{{.ID}}: {{.Name}} ({{.DisplayName}})" or "{{.|json}}"',
              "{{.Name}}"
            ),
          ],
        },
        {
          name: "get",
          description: "Gets an organization",
          options: [
            ...apiOptions,
            {
              name: "-name",
              description: 'Look up organization by name. (e.g. "abc-org")',
              args: { name: "name" },
            },
            formatOption(
              '"{{.ID}}: {{.Name}} ({{.DisplayName}})"',
              "{{.|json}}"
            ),
          ],
        },
        {
          name: "create",
          description: "Creates an organization",
          options: [
            ...apiOptions,
            {
              name: "-name",
              description: "The new organization's name (required)",
              args: { name: "name" },
            },
            {
              name: "-display-name",
              description:
                "The new organization's display name. Defaults to organization name if unspecified",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an organization",
          options: [
            ...apiOptions,
            {
              name: "-id",
              description: "The ID of the organization to delete",
              args: { name: "id" },
            },
          ],
        },
        {
          name: ["members", "member"],
          description: "Manages organization members",
          subcommands: [
            {
              name: "add",
              description: "Adds a user as a member to an organization",
              options: [
                ...apiOptions,
                {
                  name: "-org-id",
                  description:
                    "ID of organization to which to add member (required)",
                  args: { name: "id" },
                },
                {
                  name: "-username",
                  description: "Username of user to add as member (required)",
                  args: { name: "username" },
                },
              ],
            },
            {
              name: "remove",
              description: "Removes a user as a member from an organization",
              options: [
                ...apiOptions,
                {
                  name: "-org-id",
                  description:
                    "ID of organization from which to remove member (required)",
                  args: { name: "id" },
                },
                {
                  name: "-user-id",
                  description: "ID of user to remove as member (required)",
                  args: { name: "id" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["repos", "repo"],
      icon,
      description: "Manages repositories",
      subcommands: [
        {
          name: "get",
          description: "Gets a repository",
          options: [
            ...apiOptions,
            {
              name: "-name",
              description: "The name of the repository",
              args: { name: "name" },
              isRequired: true,
            },
            formatOption('"{{.ID}}: {{.Name}}" or "{{.|json}}"', "{{.ID}}"),
          ],
        },
        {
          name: "list",
          description: "Lists repositories",
          options: [
            ...apiOptions,
            firstOption("repositories"),
            {
              name: "-query",
              description:
                'Returns repositories whose names match the query. (e.g. "myorg/")',
              args: { name: "query" },
            },
            {
              name: "-cloned",
              description: "Include cloned repositories. Defaults to true",
            },
            {
              name: "-not-cloned",
              description:
                "Include repositories that are not yet cloned and for which cloning is not in progress. Defaults to true",
            },
            {
              name: "-indexed",
              description:
                "Include repositories that have a text search index. Defaults to true",
            },
            {
              name: "-not-indexed",
              description:
                "Include repositories that do not have a text search index. Defaults to true",
            },
            {
              name: "-order-by",
              description: "How to order the results",
              args: {
                name: "field",
                default: "name",
                suggestions: ["name", "created-at"],
              },
            },
            {
              name: "-descending",
              description:
                "Whether or not results should be in descending order",
            },
            {
              name: "-names-without-host",
              description:
                "Whether or not repository names should be printed without the hostname (or other first path component). If set, -f is ignored",
            },
            formatOption('"{{.ID}}: {{.Name}}" or "{{.|json}}"', "{{.Name}}"),
          ],
        },
        {
          name: "delete",
          description: "Deletes repositories",
          options: apiOptions,
          args: {
            name: "repository",
            description: "Name of the repository to delete",
            isVariadic: true,
          },
        },
        addMetadataCommand,
        updateMetadataCommand,
        deleteMetadataCommand,
        {
          ...addMetadataCommand,
          name: "add-kvp",
          description: "Deprecated alias of add-metadata",
          deprecated: true,
        },
        {
          ...updateMetadataCommand,
          name: "update-kvp",
          description: "Deprecated alias of update-metadata",
          deprecated: true,
        },
        {
          ...deleteMetadataCommand,
          name: "delete-kvp",
          description: "Deprecated alias of delete-metadata",
          deprecated: true,
        },
      ],
    },
    {
      name: "search",
      icon,
      description: "Run a code search",
      options: [
        ...apiOptions,
        {
          name: "-display",
          description:
            "Limit the number of results that are displayed. Only supported together with stream flag. Statistics continue to report all results",
          args: { name: "n", default: "-1" },
          dependsOn: ["-stream"],
        },
        {
          name: "-explain-json",
          description: "Explain the JSON output schema and exit",
        },
        {
          name: "-json",
          description: "Whether or not to output results as JSON",
        },
        {
          name: "-less",
          description:
            "Pipe output to `less -R` (only if stdout is terminal, and not json flag). Defaults to true",
        },
        {
          name: "-stream",
          description:
            "Consume results as stream. Streaming search only supports a subset of flags and parameters: trace, insecure-skip-verify, display, json",
        },
      ],
      args: {
        name: "query",
        description: "The search query",
      },
    },
    {
      name: ["search-jobs", "search-job"],
      icon,
      description: "Manages search jobs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a search job by ID",
          options: searchJobsOptions,
          args: searchJobIdArg,
        },
        {
          name: "create",
          description: "Creates a search job",
          options: searchJobsOptions,
          args: { name: "query", description: "The search query" },
        },
        {
          name: "delete",
          description: "Deletes a search job by ID",
          options: searchJobsOptions,
          args: searchJobIdArg,
        },
        {
          name: "get",
          description: "Gets a search job by ID",
          options: searchJobsOptions,
          args: searchJobIdArg,
        },
        {
          name: "list",
          description: "Lists search jobs",
          options: [
            ...searchJobsOptions,
            {
              name: "-limit",
              description: "Limit the number of search jobs returned",
              args: { name: "n", default: "10" },
            },
            {
              name: "-asc",
              description: "Sort search jobs in ascending order",
            },
            {
              name: "-order-by",
              description: "Sort search jobs by a sortable field",
              args: {
                name: "field",
                default: "CREATED_AT",
                suggestions: ["QUERY", "CREATED_AT", "STATE"],
              },
            },
          ],
        },
        {
          name: "logs",
          description: "Fetches logs for a search job by ID",
          options: [
            ...searchJobsOptions,
            {
              name: "-out",
              description: "File path to save the logs (optional)",
              args: { name: "file", template: "filepaths" },
            },
          ],
          args: searchJobIdArg,
        },
        {
          name: "restart",
          description: "Restarts a search job by ID",
          options: searchJobsOptions,
          args: searchJobIdArg,
        },
        {
          name: "results",
          description: "Fetches results for a search job by ID",
          options: [
            ...searchJobsOptions,
            {
              name: "-out",
              description: "File path to save the results (optional)",
              args: { name: "file", template: "filepaths" },
            },
          ],
          args: searchJobIdArg,
        },
      ],
    },
    {
      name: ["serve-git", "servegit"],
      icon,
      description:
        "Serves your local git repositories over HTTP for Sourcegraph to pull",
      options: [
        {
          name: "-addr",
          description: "Address on which to serve (end with : for unused port)",
          args: { name: "address", default: ":3434" },
        },
        {
          name: "-list",
          description: "List found repository names",
        },
      ],
      args: {
        name: "dir",
        description: "Directory to serve (default: current directory)",
        template: "folders",
        isOptional: true,
      },
    },
    {
      name: "snapshot",
      icon,
      description:
        "Manages snapshots of Sourcegraph instance databases (EXPERIMENTAL)",
      subcommands: [
        {
          name: "databases",
          description: "Export databases from a Sourcegraph instance",
          options: [snapshotTargetsOption, snapshotRunOption],
          args: snapshotBuilderArg,
        },
        {
          name: "restore",
          description: "Restore databases from an export",
          options: [snapshotTargetsOption, snapshotRunOption],
          args: snapshotBuilderArg,
        },
        {
          name: "summary",
          description:
            "Export summary data about an instance for acceptance testing of a restored Sourcegraph instance",
          options: apiOptions,
        },
        {
          name: "test",
          description:
            "Use exported summary data and instance health indicators to validate a restored and upgraded instance",
          options: [
            ...apiOptions,
            {
              name: "-summary-path",
              description: "Path to read snapshot summary from",
              args: {
                name: "file",
                default: "src-snapshot/summary.json",
                template: "filepaths",
              },
            },
            {
              name: "-since",
              description: "Duration ago to look for healthcheck data",
              args: { name: "duration", default: "1h0m0s" },
            },
          ],
        },
        {
          name: "upload",
          description:
            "Upload exported databases and summary file when migrating to Sourcegraph Cloud",
          options: [
            {
              name: "-bucket",
              description:
                "Name of the Google Cloud Storage bucket provided by Sourcegraph",
              args: { name: "bucket" },
            },
            {
              name: "-credentials",
              description:
                "File path to the credentials file provided by Sourcegraph",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "-file",
              description:
                "Specify which files from the ./src-snapshot directory to upload (comma-delimited, with file-type extensions)",
              args: {
                name: "files",
                default:
                  "codeinsights.sql,codeintel.sql,pgsql.sql,summary.json",
                suggestions: [
                  "codeinsights.sql",
                  "codeintel.sql",
                  "pgsql.sql",
                  "summary.json",
                ],
              },
            },
            {
              name: "-filter-sql",
              description:
                "Filter incompatible SQL statements from database snapshots which break the import into Google Cloud SQL. Defaults to true",
            },
          ],
        },
      ],
    },
    {
      name: ["users", "user"],
      icon,
      description: "Manages users",
      subcommands: [
        {
          name: "list",
          description: "Lists users",
          options: [
            ...apiOptions,
            firstOption("users"),
            {
              name: "-query",
              description:
                'Returns users whose names match the query. (e.g. "alice")',
              args: { name: "query" },
            },
            {
              name: "-tag",
              description: "Returns users with the given tag",
              args: { name: "tag" },
            },
            formatOption(
              '"{{.ID}}: {{.Username}} ({{.DisplayName}})" or "{{.|json}}"',
              "{{.Username}}"
            ),
          ],
        },
        {
          name: "get",
          description: "Gets a user",
          options: [
            ...apiOptions,
            {
              name: "-username",
              description: 'Look up user by username. (e.g. "alice")',
              args: { name: "username" },
            },
            {
              name: "-email",
              description:
                'Look up user by email. (e.g. "alice@sourcegraph.com")',
              args: { name: "email" },
            },
            formatOption(
              '"{{.ID}}: {{.Username}} ({{.DisplayName}})"',
              "{{.|json}}"
            ),
          ],
        },
        {
          name: "create",
          description: "Creates a user account",
          options: [
            ...apiOptions,
            {
              name: "-username",
              description: "The new user's username",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: "-email",
              description: "The new user's email address",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "-reset-password-url",
              description:
                "Print the reset password URL to manually send to the new user",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a user account",
          options: [
            ...apiOptions,
            {
              name: "-id",
              description: "The ID of the user to delete",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "prune",
          description: "Deletes inactive users",
          options: [
            ...apiOptions,
            {
              name: "-days",
              description:
                "Days threshold on which to remove users, must be 60 days or greater and defaults to this value",
              args: { name: "days", default: "60" },
            },
            {
              name: "-remove-admin",
              description: "Prune admin accounts",
            },
            {
              name: "-remove-null-users",
              description: "Removes users with no last active value",
            },
            {
              name: "-force",
              description:
                "Skips user confirmation step allowing programmatic use",
              isDangerous: true,
            },
            {
              name: "-display-users",
              description: "Display table of users to be deleted by prune",
            },
          ],
        },
        {
          name: "tag",
          description: "Add/remove a tag on a user",
          options: [
            ...apiOptions,
            {
              name: "-user-id",
              description: "The ID of the user to tag",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "-tag",
              description: "The tag to set on the user",
              args: { name: "tag" },
              isRequired: true,
            },
            {
              name: "-remove",
              description: "Remove the tag (default: add the tag)",
            },
          ],
        },
      ],
    },
    {
      name: "version",
      icon,
      description:
        "Display and compare the src-cli version against the recommended version for your instance",
      options: [
        ...apiOptions,
        {
          name: "-client-only",
          description: "If true, only the client version will be printed",
        },
      ],
    },
  ],
  options: [
    {
      name: "-v",
      description: "Print verbose output",
    },
    {
      name: "-config",
      description:
        "Path to a JSON config file (deprecated: use SRC_ENDPOINT, SRC_ACCESS_TOKEN and SRC_PROXY instead)",
      args: { name: "file", template: "filepaths" },
      deprecated: true,
    },
    {
      name: "-endpoint",
      description:
        "Sourcegraph endpoint to use (deprecated: use SRC_ENDPOINT instead)",
      args: { name: "url" },
      deprecated: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show help for src",
    },
  ],
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
};
export default completionSpec;
