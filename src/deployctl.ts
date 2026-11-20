// deployctl v1.13.1 (GitHub tag denoland/deployctl v1.13.1 = latest release, checked 2026-11-19). Source: deployctl.ts,
// src/args.ts and the help text of every subcommand in src/subcommands/*.ts at the repo's current main (version 1.13.1),
// read statically; not run. The tool only manages Deno Deploy Classic; new Deno Deploy orgs use `deno deploy` instead.
import { filepaths } from "@tabsmith/autocomplete-generators";

type VersionsJSON = {
  latest: string;
  versions: string[];
};

const tokenOption: Fig.Option = {
  name: "--token",
  description:
    "The API token to use (defaults to the DENO_DEPLOY_TOKEN env var)",
  args: {
    name: "token",
  },
};

const configOption: Fig.Option = {
  name: "--config",
  description:
    "Path to the file from where to load deployctl config. Defaults to 'deno.json'",
  args: {
    name: "path",
    template: "filepaths",
  },
};

const projectOption: Fig.Option = {
  name: ["-p", "--project"],
  description: "The project",
  args: {
    name: "name|id",
  },
};

const orgOption: Fig.Option = {
  name: "--org",
  description: "The organization",
  args: {
    name: "org",
  },
};

const envOptions: Fig.Option[] = [
  {
    name: "--env",
    description:
      "Set individual environment variables in a KEY=VALUE format. Can be used multiple times",
    isRepeatable: true,
    args: {
      name: "key=value",
    },
  },
  {
    name: "--env-file",
    description:
      "Set environment variables using a dotenv file. If the file name is not provided, defaults to '.env'. Can be used multiple times",
    isRepeatable: true,
    requiresSeparator: true,
    args: {
      name: "file",
      isOptional: true,
      template: "filepaths",
    },
  },
];

const deploymentIdOption: Fig.Option = {
  name: "--id",
  description: "Select a deployment by id",
  args: {
    name: "deployment-id",
  },
};

const deploymentNavigationOptions: Fig.Option[] = [
  {
    name: "--next",
    description:
      "Select the deployment deployed chronologically after the selected one. Can be used multiple times (--next --next is the same as --next=2)",
    isRepeatable: true,
    requiresSeparator: true,
    args: {
      name: "pos",
      isOptional: true,
    },
  },
  {
    name: "--prev",
    description:
      "Select the deployment deployed chronologically before the selected one. Can be used multiple times (--prev --prev is the same as --prev=2)",
    isRepeatable: true,
    requiresSeparator: true,
    args: {
      name: "pos",
      isOptional: true,
    },
  },
];

const deploymentArg: Fig.Arg = {
  name: "id",
  description:
    "The deployment id (defaults to the production deployment of the project)",
  isOptional: true,
};

const completionSpec: Fig.Spec = {
  name: "deployctl",
  description: "Command line tool for Deno Deploy",
  subcommands: [
    {
      name: "deploy",
      description: "Deploy a script with static files to Deno Deploy",
      args: {
        name: "entrypoint",
        description:
          "The file that Deno Deploy will run. Takes precedence over --entrypoint",
        isOptional: true,
        generators: filepaths({
          extensions: ["js", "mjs", "jsx", "mjsx", "ts", "mts", "tsx", "mtsx"],
        }),
      },
      options: [
        {
          name: "--exclude",
          insertValue: "--exclude '{cursor}'",
          description:
            "Prevent the upload of these comma-separated paths. Can be used multiple times. Globs are supported",
          isRepeatable: true,
          args: {
            name: "path[,path]",
          },
        },
        {
          name: "--include",
          insertValue: "--include '{cursor}'",
          description:
            "Only upload files in these comma-separated paths. Can be used multiple times. Globs are supported",
          isRepeatable: true,
          args: {
            name: "path[,path]",
          },
        },
        {
          name: "--import-map",
          description: "Path to the import map file to use",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--no-static",
          description:
            "Don't upload the files in the current directory as static files (no longer listed in the help)",
          deprecated: true,
        },
        {
          name: "--prod",
          description:
            "Create a production deployment (default is preview deployment except the first deployment)",
        },
        {
          ...projectOption,
          description:
            "The project in which to deploy. If it does not exist yet, it will be created (see --org)",
        },
        {
          ...orgOption,
          description:
            "The organization in which to create the project. Defaults to the user's personal organization",
        },
        {
          name: "--entrypoint",
          description:
            "The file that Deno Deploy will run. Also available as positional argument, which takes precedence",
          args: {
            name: "path|url",
            generators: filepaths({
              extensions: [
                "js",
                "mjs",
                "jsx",
                "mjsx",
                "ts",
                "mts",
                "tsx",
                "mtsx",
              ],
            }),
          },
        },
        ...envOptions,
        tokenOption,
        {
          name: "--dry-run",
          description: "Dry run the deployment process",
        },
        configOption,
        {
          name: "--save-config",
          description:
            "Persist the arguments used into the deployctl config file",
        },
      ],
    },
    {
      name: "projects",
      description: "Manage projects",
      options: [
        {
          ...projectOption,
          description:
            "The project selected. Can also be provided as positional argument",
          isPersistent: true,
        },
        {
          ...orgOption,
          description:
            'Specify an organization. When creating a project, defaults to the user\'s personal organization. When listing projects, use "personal" to filter by the personal organization',
          isPersistent: true,
        },
        { ...tokenOption, isPersistent: true },
        { ...configOption, isPersistent: true },
        {
          name: "--force",
          description:
            "Automatically execute the command without waiting for confirmation",
          isPersistent: true,
        },
      ],
      subcommands: [
        {
          name: "list",
          description:
            "List the name of all the projects accessible by the user",
        },
        {
          name: "show",
          description:
            "View details of a project (defaults to the project in the config file or the one guessed from the working context)",
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: "delete",
          description: "Delete a project",
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: "create",
          description: "Create a new project",
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: "rename",
          description: "Change the name of the project",
          args: [
            {
              name: "old",
              description: "The current name of the project",
              isOptional: true,
            },
            {
              name: "new",
              description: "The new name of the project",
            },
          ],
        },
      ],
    },
    {
      name: "deployments",
      description: "Manage deployments",
      options: [
        { ...tokenOption, isPersistent: true },
        { ...configOption, isPersistent: true },
      ],
      subcommands: [
        {
          name: "show",
          description:
            "View details of a deployment (defaults to the current production deployment of the project)",
          args: deploymentArg,
          options: [
            deploymentIdOption,
            {
              ...projectOption,
              description:
                "Select the production deployment of a project. Ignored if combined with --id",
            },
            ...deploymentNavigationOptions,
            {
              name: "--format",
              description:
                "Output the deployment details in an overview or JSON-encoded. Defaults to 'overview' when stdout is a tty, and 'json' otherwise",
              args: {
                name: "format",
                suggestions: ["overview", "json"],
              },
            },
          ],
        },
        {
          name: "list",
          description: "List the deployments of a project",
          options: [
            {
              ...projectOption,
              description: "The project of which to list deployments",
            },
            {
              name: "--page",
              description: "Page of the deployments list to fetch",
              args: {
                name: "num",
              },
            },
            {
              name: "--limit",
              description: "Amount of deployments to include in the list",
              args: {
                name: "num",
              },
            },
            {
              name: "--format",
              description:
                "Output the deployments in an overview or JSON-encoded. Defaults to 'overview' when stdout is a tty, and 'json' otherwise",
              args: {
                name: "format",
                suggestions: ["overview", "json"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a deployment",
          args: deploymentArg,
          options: [
            deploymentIdOption,
            {
              ...projectOption,
              description:
                "Select the production deployment of a project. Ignored if combined with --id",
            },
            ...deploymentNavigationOptions,
            {
              name: "--force",
              description:
                "Automatically execute the command without waiting for confirmation",
            },
          ],
        },
        {
          name: "redeploy",
          description:
            "Create a new deployment reusing the build of an existing deployment",
          args: deploymentArg,
          options: [
            deploymentIdOption,
            {
              ...projectOption,
              description:
                "Select the production deployment of a project. Ignored if combined with --id",
            },
            ...deploymentNavigationOptions,
            {
              name: "--prod",
              description:
                "Set the production domain mappings to the new deployment. If the project has prod/preview databases and --db is not set this option also controls which database the new deployment uses",
            },
            {
              name: "--db",
              description:
                "Set the database of the new deployment. If not set, uses the preview database for a preview deployment if the project has one, and production otherwise",
              args: {
                name: "prod|preview|UUID",
                suggestions: ["prod", "preview"],
              },
            },
            ...envOptions,
          ],
        },
      ],
    },
    {
      name: "logs",
      description: "View logs for the given project",
      args: {
        name: "project",
        description: "The project you want to get the logs of",
        isOptional: true,
      },
      options: [
        {
          name: "--deployment",
          description:
            "The id of the deployment you want to get the logs of (defaults to latest deployment)",
          args: {
            name: "deployment-id",
          },
        },
        {
          name: "--prod",
          description: "Select the production deployment",
        },
        {
          ...projectOption,
          description: "The project you want to get the logs of",
        },
        tokenOption,
        {
          name: "--since",
          description:
            "The start time of the logs you want to get. RFC3339 format (e.g. 2023-07-17T06:10:38+09:00) is supported. Logs generated over 24 hours ago are not available",
          args: {
            name: "datetime",
          },
        },
        {
          name: "--until",
          description:
            "The end time of the logs you want to get. RFC3339 format (e.g. 2023-07-17T06:10:38+09:00) is supported",
          args: {
            name: "datetime",
          },
        },
        {
          name: "--grep",
          description:
            "Filter logs by a word. Multiple words can be specified for AND search",
          isRepeatable: true,
          args: {
            name: "word",
          },
        },
        {
          name: "--levels",
          description:
            "Filter logs by comma-separated log levels, e.g. info,error (defaults to all log levels)",
          args: {
            name: "levels",
          },
        },
        {
          name: "--regions",
          description:
            "Filter logs by comma-separated regions, e.g. region1,region2 (defaults to all regions)",
          args: {
            name: "regions",
          },
        },
        {
          name: "--limit",
          description:
            "Limit the number of logs to return (defaults to 100). Only effective when --since and/or --until is specified",
          args: {
            name: "limit",
          },
        },
      ],
    },
    {
      name: "top",
      description: "Monitor projects resource usage in real time (alpha)",
      options: [
        {
          ...projectOption,
          description: "The project to monitor",
        },
        tokenOption,
        configOption,
        {
          name: "--format",
          description:
            "Output the project stats in a table or JSON-encoded. Defaults to 'table' when stdout is a tty, and 'json' otherwise",
          args: {
            name: "format",
            suggestions: ["table", "json"],
          },
        },
        {
          name: "--region",
          description:
            "Show stats from only specific regions. Can be used multiple times and can be a substring (--region=us)",
          isRepeatable: true,
          args: {
            name: "region",
          },
        },
      ],
    },
    {
      name: "upgrade",
      description:
        "Upgrade deployctl to the given version (defaults to latest)",
      args: {
        name: "version",
        isOptional: true,
        generators: {
          script: [
            "curl",
            "-sL",
            "https://cdn.deno.land/deploy/meta/versions.json",
          ],
          cache: { ttl: 1000 * 60 * 60 * 24 }, // 24 hours, in milliseconds
          postProcess: (out) => {
            const data = JSON.parse(out) as VersionsJSON;
            return data.versions.map((version) => ({
              name: version,
              icon: version === data.latest ? "⭐️" : "🦕",
            }));
          },
        },
      },
    },
    {
      name: "api",
      description:
        "Perform raw HTTP requests against the Deploy API (alpha, see https://apidocs.deno.com)",
      args: {
        name: "endpoint",
        description: "The API endpoint, such as organizations/<id>/projects",
      },
      options: [
        {
          name: "--method",
          description: "HTTP method to use (defaults to GET)",
          args: {
            name: "http-method",
            default: "GET",
            suggestions: ["GET", "POST", "PUT", "PATCH", "DELETE"],
          },
        },
        {
          name: "--body",
          insertValue: "--body '{cursor}'",
          description:
            "Body of the request. The provided string is sent as is to the API",
          args: {
            name: "json",
          },
        },
        {
          name: "--format",
          description:
            "Output an overview of the response with the headers and the (possibly truncated) body, or just the body (verbatim). Defaults to 'overview' when stdout is a tty, and 'body' otherwise",
          args: {
            name: "format",
            suggestions: ["overview", "body"],
          },
        },
        {
          ...tokenOption,
          description:
            "The API token to use (defaults to an auto-provisioned token)",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Show the version",
    },
    {
      name: "--color",
      description:
        "Enable or disable colored output. Defaults to 'auto' (colored when stdout is a tty)",
      isPersistent: true,
      args: {
        name: "when",
        default: "auto",
        suggestions: ["auto", "always", "never"],
      },
    },
  ],
};
export default completionSpec;
