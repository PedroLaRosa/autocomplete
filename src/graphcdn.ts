// GraphCDN CLI v3.2.37 (npm `stellate` latest, 2026-11-19). GraphCDN was renamed Stellate in 2022: the old `graphcdn` npm
// package is deprecated at 1.12.0 and the `stellate` package still ships a `graphcdn` bin alias for the same CLI.
// Source: read statically (not executed) the bundled dist/bin.js of stellate@3.2.37: the arg() parsers and per-command
// help text of every registered command; the 1.x-only `init --yes` and `push rules` no longer exist and were removed.
const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Display this help message",
};

const envOption = (action: string): Fig.Option => ({
  name: ["-e", "--env"],
  description: `Name of the environment to ${action}`,
  args: {
    name: "env",
  },
});

const orgOption = (description: string): Fig.Option => ({
  name: ["-o", "--org"],
  description,
  args: {
    name: "slug",
  },
});

const outputFormatOption: Fig.Option = {
  name: "--output-format",
  description: "The file format used for the generated config",
  args: {
    name: "format",
    suggestions: ["yml", "ts", "js", "mjs"],
  },
};

const completionSpec: Fig.Spec = {
  name: "graphcdn",
  description: "Stellate (formerly GraphCDN) CLI",
  subcommands: [
    {
      name: "login",
      description: "Authenticate the CLI",
      options: [
        {
          name: "--token",
          description: "Provide a token to use for authentication",
          args: {
            name: "token",
          },
        },
        helpOption,
      ],
    },
    {
      name: "init",
      description: "Create a new Stellate service",
      options: [
        orgOption("The slug of the existing organization for the new service"),
        outputFormatOption,
        helpOption,
      ],
    },
    {
      name: "pull",
      description: "Pull the latest service configuration",
      options: [
        {
          name: ["--service", "--app"],
          description:
            "Name of the service to pull from (only required without a stellate config file)",
          args: {
            name: "service",
          },
        },
        envOption("pull from"),
        outputFormatOption,
        helpOption,
      ],
    },
    {
      name: "ls",
      description: "List services of an organization",
      options: [
        {
          ...orgOption("The slug of the organization to list services of"),
          isRequired: true,
        },
        helpOption,
      ],
    },
    {
      name: "organizations",
      description: "List all organizations",
      options: [helpOption],
    },
    {
      name: "push",
      description: "Push and deploy the latest service configuration",
      options: [
        envOption("push to"),
        orgOption("The slug of the organization"),
        {
          name: "--dry",
          description:
            "Show the diff of the local vs the current configuration",
        },
        {
          name: ["--service", "--app"],
          description: "Name of the service to push to",
          hidden: true,
          args: {
            name: "service",
          },
        },
        helpOption,
      ],
      args: {
        name: "field",
        description: "Only push this part of the configuration",
        isOptional: true,
        suggestions: [
          {
            name: "schema",
            description: "Push the schema defined in the config file",
          },
        ],
      },
    },
    {
      name: "check",
      description:
        "Check for breaking schema changes, e.g. removing a field that is still used (BETA)",
      options: [
        {
          name: ["-b", "--breaking-limit"],
          description:
            "Minimum usages in the given interval to be considered breaking",
          args: {
            name: "limit",
            default: "0",
          },
        },
        {
          name: ["-t", "--time-interval"],
          description: "The time interval in seconds to check for usages",
          args: {
            name: "seconds",
          },
        },
        envOption("check"),
        helpOption,
      ],
    },
    {
      name: "serve",
      description:
        "Use your local backend with Stellate's GraphQL Edge Cache (BETA)",
      options: [
        {
          name: "--backend-port",
          description: "The port your application is running on",
          isRequired: true,
          args: {
            name: "port",
          },
        },
        {
          name: "--serve-port",
          description: "The port the CDN should run on",
          args: {
            name: "port",
          },
        },
        orgOption(
          "The slug of the existing organization to create the service in"
        ),
        {
          name: ["-s", "--service"],
          description: "Name of the service (if not in the config file)",
          args: {
            name: "service",
          },
        },
        {
          name: ["-w", "--watch"],
          description: "Watch the stellate config file for changes",
        },
        {
          name: "--path",
          description: "The suffix after your port, e.g. /graphql",
          args: {
            name: "path",
          },
        },
        helpOption,
      ],
    },
    {
      name: "subset",
      description:
        "Print the subset of your schema according to the configured schema view (BETA)",
      options: [envOption("use"), helpOption],
    },
    {
      name: "persisted-operations",
      description: "Manipulate the persisted operations of your service (BETA)",
      options: [helpOption],
      subcommands: [
        {
          name: "push",
          description: "Push persisted operations from a JSON file",
          options: [
            envOption("push to"),
            orgOption("The slug of the organization"),
            helpOption,
          ],
          args: {
            name: "file",
            description: "JSON file with persisted operations",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "config",
      description: "Work with the local service configuration",
      options: [helpOption],
      subcommands: [
        {
          name: "preview",
          description: "Preview how rules changes would impact your service",
          options: [
            {
              name: ["-s", "--service"],
              description: "Name of the service",
              args: {
                name: "service",
              },
            },
            {
              name: ["-b", "--browser"],
              description:
                "Automatically open the preview UI with the default browser",
            },
            {
              name: "--json",
              description: "Print the rule diff summary as JSON",
            },
            helpOption,
          ],
        },
      ],
    },
    {
      name: "version",
      description: "Print current version of Stellate",
      options: [helpOption],
    },
  ],
  options: [
    helpOption,
    {
      name: ["-v", "--version"],
      description: "Print current version of Stellate",
    },
  ],
};

export default completionSpec;
