// StepZen CLI v0.60.0 (npm "stepzen" latest, IBM StepZen, 2026-11-19).
// Source: oclif.manifest.json and lib/commands/** of the npm package (commands, flags, args), not run against a StepZen account.
// Removed since the previous spec (0.9.33): `list schemas|configurationsets` and the generators built on them (`list` now only prints a table of endpoints and needs a logged-in account), `import <pre-configured schema>`.
// Hidden commands are kept with hidden: true (lint, transpile, validate, import openapi, import presto); hidden flags are left out.

const dirOption: Fig.Option = {
  name: "--dir",
  description: "Working directory",
  args: {
    name: "path",
    description: "Path to the StepZen workspace directory",
    template: "folders",
  },
};

const importNameOption: Fig.Option = {
  name: "--name",
  description:
    "Subfolder inside the workspace folder to save the imported schema files to",
  args: {
    name: "name",
    description: "Defaults to the name of the imported schema",
  },
};

const prefixOption: Fig.Option = {
  name: "--prefix",
  description: "Prefix to add to every type in the generated schema",
  args: { name: "prefix" },
};

const headerOption: Fig.Option = {
  name: ["--header", "-H"],
  description: "Specifies a request header to pass",
  isRepeatable: true,
  args: {
    name: "header",
    description: 'A header in the "Name: value" format',
  },
};

const headerParamOption: Fig.Option = {
  name: "--header-param",
  description:
    "Specifies a parameter in a header value, using a $paramName placeholder in place of the variable part",
  isRepeatable: true,
  args: { name: "header parameter" },
};

const secretsOption: Fig.Option = {
  name: "--secrets",
  description:
    "Specifies the names of HTTP headers whose values are considered secrets and stored in config.yaml",
  isRepeatable: true,
  args: { name: "header name" },
};

const dbLinkTypesOption: Fig.Option = {
  name: "--db-link-types",
  description:
    "Automatically link types based on foreign key relationships using @materializer",
};

const dbIncludeOption: Fig.Option = {
  name: "--db-include",
  description:
    "Should the generated GraphQL schema be based only on database views, only on tables or on both",
  args: {
    name: "kind",
    suggestions: ["tables-only", "views-only", "tables-and-views"],
  },
};

const dbUseDeprecatedNamingOption: Fig.Option = {
  name: "--db-use-deprecated-2022-naming",
  description:
    "Use the deprecated pre-2023 naming convention in the generated GraphQL schema",
};

const dbSchemaOption = (defaultSchema: string): Fig.Option => ({
  name: "--db-schema",
  description: "Database schema to import tables from",
  args: { name: "schema", default: defaultSchema },
});

const dbHostOption: Fig.Option = {
  name: "--db-host",
  description: "Database host and optional port",
  args: { name: "host[:port]" },
};

const dbUserOption: Fig.Option = {
  name: "--db-user",
  description: "Database user name",
  args: { name: "user" },
};

const dbPasswordOption: Fig.Option = {
  name: "--db-password",
  description: "Database password",
  args: { name: "password" },
};

const dbDatabaseOption: Fig.Option = {
  name: "--db-database",
  description: "Name of database to import",
  args: { name: "database" },
};

const dsnImportOptions: Fig.Option[] = [
  dirOption,
  importNameOption,
  dbLinkTypesOption,
  dbIncludeOption,
  dbUseDeprecatedNamingOption,
];

const jdbcImportOptions: Fig.Option[] = [
  dirOption,
  importNameOption,
  dbSchemaOption("public"),
  dbLinkTypesOption,
  dbIncludeOption,
  dbUseDeprecatedNamingOption,
];

const whoamiExclusiveFlags = [
  "--showkeys",
  "--account",
  "--adminkey",
  "--apikey",
  "--domain",
  "--instanceid",
  "--email",
  "--accesstoken",
];

const whoamiOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  exclusiveOn: whoamiExclusiveFlags.filter((flag) => flag !== name),
});

const completionSpec: Fig.Spec = {
  name: "stepzen",
  description:
    "The StepZen CLI is the primary way to build, deploy and test your schemas on StepZen",
  subcommands: [
    {
      name: "delete",
      description: "Delete an endpoint from your StepZen account",
      args: {
        name: "endpoint",
        description: "Name of the endpoint (e.g. api/customers)",
      },
    },
    {
      name: "deploy",
      description: "Deploy to StepZen",
      args: {
        name: "endpoint",
        description:
          "Name of the endpoint (e.g. api/customers), defaults to the endpoint property from stepzen.config.json",
        isOptional: true,
      },
      options: [
        dirOption,
        {
          name: "--silent",
          description: "Do not print progress messages",
        },
        {
          name: "--config",
          description:
            "Configuration file to use (relative to the current directory)",
          args: {
            name: "file",
            default: "config.yaml",
            template: "filepaths",
          },
        },
        {
          name: "--configurationsets",
          description:
            "Names of configuration sets uploaded earlier (deprecated, use --config instead)",
          deprecated: true,
          args: { name: "configuration sets" },
        },
        {
          name: "--schema",
          description:
            "Name of a schema uploaded earlier (deprecated, use --dir instead)",
          deprecated: true,
          args: { name: "schema" },
        },
      ],
    },
    {
      name: "help",
      description: "Display help for StepZen",
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: ["--nested-commands", "-n"],
          description: "Include all nested commands in the output",
        },
      ],
    },
    {
      name: "import",
      description:
        "Import a schema for an external data source or an API endpoint into your GraphQL API",
      args: {
        name: "source",
        description:
          "Kind of the data source (curl, graphql, mysql, postgresql, snowflake, db2, oracle) or a full DSN string",
        isOptional: true,
      },
      options: [dirOption],
      subcommands: [
        {
          name: "curl",
          description:
            "Import a schema for a REST endpoint into your GraphQL API (uses the curl syntax)",
          args: {
            name: "URL",
            description: "URL of the REST endpoint, followed by curl options",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            dirOption,
            importNameOption,
            prefixOption,
            headerOption,
            headerParamOption,
            {
              name: "--query-name",
              description:
                "Property name to add to the Query type as a way to access the imported endpoint",
              args: { name: "name" },
            },
            {
              name: "--query-type",
              description:
                "Name for the type returned by the curl request in the generated schema",
              args: { name: "type" },
            },
            {
              name: "--path-params",
              description:
                "Specifies path parameters in the URL path, using $paramName placeholders for the variable segments",
              args: { name: "path" },
            },
            secretsOption,
          ],
        },
        {
          name: "db2",
          description:
            "Import a schema for a Db2 data source into your GraphQL API",
          args: {
            name: "jdbcUrl",
            description: "JDBC URL of a Db2 database",
            isOptional: true,
          },
          options: jdbcImportOptions,
        },
        {
          name: "flow",
          description:
            "Import StepZen flow expression as a query field into your GraphQL API",
          args: {
            name: "flow",
            description: "The flow expression",
            isOptional: true,
          },
          options: [
            dirOption,
            importNameOption,
            headerOption,
            {
              name: "--endpoint",
              description:
                "Use a custom GraphQL schema instead of the project's schema as the schema providing the steps in the flow",
              args: { name: "endpoint" },
            },
          ],
        },
        {
          name: "graphql",
          description:
            "Import a GraphQL API as a subgraph into your GraphQL API",
          args: {
            name: "url",
            description: "URL of the GraphQL endpoint",
            isOptional: true,
          },
          options: [
            dirOption,
            importNameOption,
            prefixOption,
            headerOption,
            headerParamOption,
            secretsOption,
          ],
        },
        {
          name: ["mysql", "singlestore"],
          description:
            "Import a schema for a MySQL data source into your GraphQL API",
          args: {
            name: "dsn",
            description:
              "Data Source Name of a MySQL database, e.g. mysql://user:password@host:port/database",
            isOptional: true,
          },
          options: [
            ...dsnImportOptions,
            dbHostOption,
            dbUserOption,
            dbPasswordOption,
            dbDatabaseOption,
          ],
        },
        {
          name: "openapi",
          description:
            "Import a REST API from an OpenAPI spec as a subgraph into your GraphQL API",
          hidden: true,
          args: {
            name: "openapi",
            description: "OpenAPI spec file",
            isOptional: true,
            template: "filepaths",
          },
          options: [dirOption, importNameOption],
        },
        {
          name: "oracle",
          description:
            "Import a schema for an Oracle data source into your GraphQL API",
          args: {
            name: "jdbcUrl",
            description: "JDBC URL of an Oracle database",
            isOptional: true,
          },
          options: jdbcImportOptions,
        },
        {
          name: ["postgresql", "postgres"],
          description:
            "Import a schema for a PostgreSQL data source into your GraphQL API",
          args: {
            name: "dsn",
            description:
              "Data Source Name of a PostgreSQL database, e.g. postgresql://user:password@host:port/database?schema=schema",
            isOptional: true,
          },
          options: [
            ...dsnImportOptions,
            dbHostOption,
            dbUserOption,
            dbPasswordOption,
            dbDatabaseOption,
            dbSchemaOption("public"),
          ],
        },
        {
          name: "presto",
          description:
            "Import a schema for a Presto data source into your GraphQL API",
          hidden: true,
          args: {
            name: "dsn",
            description:
              "Data Source Name of a Presto data source, e.g. presto://user:password@host:port/catalog",
            isOptional: true,
          },
          options: [
            dirOption,
            importNameOption,
            dbHostOption,
            dbUserOption,
            dbPasswordOption,
            {
              name: "--db-catalog",
              description: "Name of the catalog to import",
              args: { name: "catalog" },
            },
            dbSchemaOption("public"),
            dbLinkTypesOption,
            dbIncludeOption,
          ],
        },
        {
          name: "snowflake",
          description:
            "Import a schema for a Snowflake data source into your GraphQL API",
          args: {
            name: "dsn",
            description:
              "Data Source Name of a Snowflake database, e.g. snowflake://user:password@orgname-accountname/database?warehouse=warehouse&schema=schema",
            isOptional: true,
          },
          options: [
            ...dsnImportOptions,
            dbUserOption,
            dbPasswordOption,
            dbDatabaseOption,
            dbSchemaOption("PUBLIC"),
            {
              name: "--snowflake-account-id",
              description:
                "Snowflake account identifier in the orgname-accountname format",
              args: { name: "account id" },
            },
            {
              name: "--snowflake-warehouse",
              description: "Snowflake warehouse",
              args: { name: "warehouse" },
            },
          ],
        },
      ],
    },
    {
      name: "init",
      description: "Initialize a StepZen workspace in the current directory",
      options: [
        {
          name: "--endpoint",
          description: "Endpoint name (e.g. api/myapp)",
          args: { name: "endpoint" },
        },
        {
          name: "--yes",
          description: "Accept default answers to interactive prompts",
        },
      ],
    },
    {
      name: "lint",
      description: "StepZen lint",
      hidden: true,
    },
    {
      name: "list",
      description:
        "List endpoints in your StepZen account, with timestamps in your local time zone",
      args: {
        name: "type",
        description: "The type of entities to list",
        isOptional: true,
        default: "endpoints",
        suggestions: [
          {
            name: "endpoints",
            description:
              "GraphQL API endpoints deployed with stepzen deploy or stepzen start",
          },
        ],
      },
      options: [
        {
          name: "--folder",
          description:
            "Only show endpoints within a specific folder, prefix the name with ! to exclude it",
          args: { name: "folder" },
        },
        {
          name: "--name",
          description:
            "Only show endpoints with a specific name, prefix the name with ! to exclude it",
          args: { name: "name" },
        },
      ],
    },
    {
      name: "login",
      description: "Log in to StepZen",
      args: {
        name: "domain",
        description:
          "Domain of the StepZen service to log in to (e.g. us-east-a.ibm.stepzen.net), stepzen.net if omitted",
        isOptional: true,
      },
      options: [
        {
          name: ["--account", "-a"],
          description: "StepZen account name",
          args: { name: "account" },
        },
        {
          name: ["--adminkey", "-k"],
          description:
            "Key used for authentication, the API key of the instance when used with --instanceId, otherwise the admin key",
          args: { name: "key" },
        },
        {
          name: "--introspection",
          description:
            "Override the default StepZen introspection service URL for all stepzen import commands",
          args: { name: "URL" },
        },
        {
          name: ["--instanceId", "-i"],
          description: "Instance ID of your subscribed StepZen instance",
          args: { name: "instance id" },
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of StepZen",
    },
    {
      name: "request",
      description:
        "Send a GraphQL request to a StepZen endpoint and print the response",
      args: {
        name: "query",
        description:
          "GraphQL query, mutation or subscription, required unless --file is given",
        isOptional: true,
      },
      options: [
        {
          name: "--dir",
          description:
            "StepZen workspace directory (defaults to the current directory)",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--endpoint",
          description:
            "StepZen endpoint to call (defaults to the endpoint in the current StepZen workspace)",
          args: { name: "endpoint" },
        },
        {
          name: ["--header", "-H"],
          description:
            'Add an additional HTTP header to the request, "Name:" drops a default header and "Name;" sends it with an empty value',
          isRepeatable: true,
          args: {
            name: "header",
            description: 'A header in the "Name: value" format',
          },
        },
        {
          name: "--operation-name",
          description:
            "Specify the operation name, in case the provided query includes multiple operations",
          args: { name: "operation name" },
        },
        {
          name: "--var",
          description: "Add a request variable",
          isRepeatable: true,
          args: {
            name: "variable",
            description: "A variable in the name=value format",
          },
        },
        {
          name: "--var-file",
          description:
            "Read request variables from a JSON file, --var takes priority for the same variable",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["--file", "-f"],
          description: "Read the query text from a file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "service",
      description:
        "Manage the local StepZen service instance (requires Docker), prints its status if no action is given",
      args: {
        name: "action",
        isOptional: true,
        suggestions: [
          {
            name: "start",
            description:
              "Start a local StepZen service instance in a Docker container",
          },
          {
            name: "stop",
            description: "Stop the local StepZen service instance (if running)",
          },
          {
            name: "upgrade",
            description:
              "Upgrade the local StepZen service instance if it is running",
          },
        ],
      },
      options: [
        {
          name: "--dsn",
          description: "DSN of a StepZen metadata database",
          args: {
            name: "dsn",
            description:
              "For example postgres://user:password@172.17.0.1:5432/zenctl",
          },
        },
        {
          name: "--reset-auto",
          description:
            "Create fresh empty metadata database, all existing endpoints are deleted and you are logged out",
        },
        {
          name: "--prompt",
          description: "Open an interactive prompt to ask for database details",
        },
        {
          name: "--port",
          description:
            "Override the TCP port on which the local StepZen service instance listens for connections",
          args: { name: "port", default: "9000" },
        },
        {
          name: "--driver-path",
          description:
            "Mount a local directory containing additional JDBC drivers for the introspection service",
          isRepeatable: true,
          args: {
            name: "path",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "start",
      description:
        "Deploy your schema to StepZen, and then redeploy on every change",
      options: [
        dirOption,
        {
          name: "--endpoint",
          description: "Override workspace endpoint",
          args: { name: "endpoint" },
        },
        {
          name: "--dashboard",
          description:
            "Which GraphiQL dashboard to use to explore the deployed endpoint",
          args: {
            name: "dashboard",
            default: "web",
            suggestions: [
              {
                name: "web",
                description: "Use GraphiQL at dashboard.stepzen.com",
              },
              {
                name: "local",
                description: "Start a local GraphiQL dashboard on localhost",
              },
              { name: "none", description: "Do not use GraphiQL at all" },
            ],
          },
        },
        {
          name: "--port",
          description:
            "Port for the local GraphiQL dashboard (when using --dashboard=local)",
          args: { name: "port", default: "5001" },
        },
      ],
    },
    {
      name: "transpile",
      description: "Transpile a GraphQL schema",
      hidden: true,
      args: {
        name: "folder",
        template: "folders",
      },
      options: [
        {
          name: "--output-configuration",
          description: "Output the configuration instead of the schema",
        },
        {
          name: "--silent",
          description: "Do not print progress messages",
        },
      ],
    },
    {
      name: "validate",
      description: "Validate a GraphQL schema",
      hidden: true,
      args: {
        name: "folder",
        template: "folders",
      },
    },
    {
      name: "version",
      description: "Show the version of the StepZen CLI",
      options: [
        {
          name: "--verbose",
          description:
            "Show the architecture, Node.js version, operating system and plugin versions",
        },
        {
          name: "--json",
          description: "Format output as JSON",
        },
      ],
    },
    {
      name: "whoami",
      description: "View your StepZen credentials",
      options: [
        whoamiOption("--showkeys", "Show the admin key and API key unmasked"),
        whoamiOption("--account", "Show only the account name"),
        whoamiOption("--adminkey", "Show only the admin key"),
        whoamiOption("--apikey", "Show only the API key"),
        whoamiOption("--domain", "Show only the domain"),
        whoamiOption("--instanceid", "Show only the instance ID"),
        whoamiOption("--email", "Show only the email address"),
        whoamiOption("--accesstoken", "Show only the access token"),
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show CLI help",
    },
    {
      name: ["--version", "-v"],
      description: "Show the version of the StepZen CLI",
    },
    {
      name: "--non-interactive",
      description: "Disable all interactive prompts",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
