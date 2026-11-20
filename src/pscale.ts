// pscale v0.355.0 (planetscale/cli git tag v0.355.0, the release in the Homebrew pscale formula, 2026-11-20). Source: static read of the cobra command definitions under internal/cmd/** at that tag
// (command tree, flags, aliases, hidden and deprecated markers, required and mutually exclusive flags, flag completion enums); the binary was not built or run.
// Closed value sets that are only stated in a flag's help text were added as suggestions; dynamic completions (databases, branches, regions, cluster sizes) are not modelled.

const budgetIdOption: Fig.Option = {
  name: "--budget-id",
  description: "Filter by traffic budget ID",
  args: { name: "string" },
};

const clientIdOption: Fig.Option = {
  name: "--client-id",
  description: "The client ID for the PlanetScale CLI application",
  args: { name: "string" },
};

const clientSecretOption: Fig.Option = {
  name: "--client-secret",
  description: "The client secret for the PlanetScale CLI application",
  args: { name: "string" },
};

const completedAtOption: Fig.Option = {
  name: "--completed-at",
  description: "Only show changes completed at this time",
  args: { name: "string" },
};

const dryRunOption: Fig.Option = {
  name: "--dry-run",
  description: "Only show what would be done",
};

const fromOption: Fig.Option = {
  name: "--from",
  description: "Start of a custom time range as an ISO 8601 timestamp",
  args: { name: "string" },
};

const inputOption: Fig.Option = {
  name: "--input",
  description: "Path to D1 SQL export",
  args: { name: "string", template: "filepaths" },
  isRequired: true,
};

const keyspaceFilterOption: Fig.Option = {
  name: "--keyspace",
  description: "Filter by keyspace",
  args: { name: "string" },
};

const keyspaceOption: Fig.Option = {
  name: "--keyspace",
  description: "Keyspace name",
  args: { name: "string" },
  isRequired: true,
};

const keyspaceOwnerTableOption: Fig.Option = {
  name: "--keyspace",
  description:
    "Keyspace of the owner table, where the lookup vindex is defined",
  args: { name: "string" },
};

const keyspaceVitessTargetOption: Fig.Option = {
  name: "--keyspace",
  description: "Vitess keyspace to target",
  args: { name: "string" },
};

const localAddrOption: Fig.Option = {
  name: "--local-addr",
  description:
    "Local address to bind and listen for connections. By default the proxy binds to 127.0.0.1 with a random port",
  args: { name: "string" },
};

const maxStorageOption: Fig.Option = {
  name: "--max-storage",
  description: "Maximum storage size in bytes for autoscaling",
  args: { name: "int" },
};

const metricOption: Fig.Option = {
  name: "--metric",
  description: "Metric to query (repeat or comma-separate)",
  args: { name: "strings" },
  isRequired: true,
  isRepeatable: true,
};

const minStorageOption: Fig.Option = {
  name: "--min-storage",
  description: "Minimum storage size in bytes",
  args: { name: "int" },
};

const nameOption: Fig.Option = {
  name: "--name",
  description: "Name of the Lookup Vindex",
  args: { name: "string" },
  isRequired: true,
};

const orgLocalOption: Fig.Option = {
  name: "--org",
  description: "The organization for the current user",
  args: { name: "string" },
};

const orgOption: Fig.Option = {
  name: "--org",
  description: "The organization for the current user",
  args: { name: "string" },
  isPersistent: true,
};

const pageDefault1Option: Fig.Option = {
  name: "--page",
  description: "Page number to fetch",
  args: { name: "int", default: "1" },
};

const pageOption: Fig.Option = {
  name: "--page",
  description: "Page number to fetch",
  args: { name: "int" },
};

const parametersOption: Fig.Option = {
  name: "--parameters",
  description: "Set a parameter as namespace.name=value; repeatable",
  args: { name: "string" },
  isRepeatable: true,
};

const perPageDefault25Option: Fig.Option = {
  name: "--per-page",
  description: "Number of results per page",
  args: { name: "int", default: "25" },
};

const perPageOption: Fig.Option = {
  name: "--per-page",
  description: "Number of results per page",
  args: { name: "int", default: "100" },
};

const periodNamedTimeOption: Fig.Option = {
  name: "--period",
  description:
    "Named time period to query (for example 1h, 12h, or 1d; defaults to 12h)",
  args: { name: "string" },
};

const periodOption: Fig.Option = {
  name: "--period",
  description: "Only show changes from this period",
  args: { name: "string" },
};

const periodTimeAggregateOption: Fig.Option = {
  name: "--period",
  description: "Time period to aggregate over (e.g. 1h, 1d)",
  args: { name: "string" },
};

const periodTimeLookOption: Fig.Option = {
  name: "--period",
  description: "Time period to look back (e.g. 1h, 1d)",
  args: { name: "string" },
};

const remoteAddrOption: Fig.Option = {
  name: "--remote-addr",
  description:
    "PlanetScale Database remote network address. By default the remote address is populated automatically from the PlanetScale API (format: `hostname:port`)",
  args: { name: "string" },
};

const replicaOption: Fig.Option = {
  name: "--replica",
  description:
    "When enabled, the password will route all reads to the branch's primary replicas and all read-only regions",
};

const ruleIdOption: Fig.Option = {
  name: "--rule-id",
  description: "Filter by traffic rule ID",
  args: { name: "string" },
};

const searchOption: Fig.Option = {
  name: ["--search", "-q"],
  description: "Filter by search terms",
  args: { name: "string" },
};

const shardNameUnshardedOption: Fig.Option = {
  name: "--shard",
  description: 'Shard name (e.g. "-" for unsharded)',
  args: { name: "string" },
  isRequired: true,
};

const shardOption: Fig.Option = {
  name: "--shard",
  description: "Filter by shard",
  args: { name: "string" },
};

const shardVitessTargetOption: Fig.Option = {
  name: "--shard",
  description: "Vitess shard to target",
  args: { name: "string" },
};

const stepsOption: Fig.Option = {
  name: "--steps",
  description: "Requested number of data points",
  args: { name: "int" },
};

const tableKeyspaceOption: Fig.Option = {
  name: "--table-keyspace",
  description: "Keyspace where the lookup table and its workflow live",
  args: { name: "string" },
  isRequired: true,
};

const tabletTypeOption: Fig.Option = {
  name: "--tablet-type",
  description: "Filter by tablet type",
  args: { name: "string" },
};

const targetKeyspaceOption: Fig.Option = {
  name: "--target-keyspace",
  description: "Target keyspace",
  args: { name: "string" },
  isRequired: true,
};

const toOption: Fig.Option = {
  name: "--to",
  description: "End of a custom time range as an ISO 8601 timestamp",
  args: { name: "string" },
};

const uuidOption: Fig.Option = {
  name: "--uuid",
  description: "UUID of the VDiff",
  args: { name: "string" },
  isRequired: true,
};

const waitOption: Fig.Option = {
  name: "--wait",
  description: "Wait for the change request to complete before returning",
};

const waitTimeoutOption: Fig.Option = {
  name: "--wait-timeout",
  description:
    "Maximum time to wait for the change request to complete with --wait",
  args: { name: "duration" },
};

const webOpenBrowserOption: Fig.Option = {
  name: ["--web", "-w"],
  description: "Open in your web browser",
};

const webOption: Fig.Option = {
  name: "--web",
  description: "Open in your web browser",
};

const workflowOption: Fig.Option = {
  name: "--workflow",
  description: "Name of the workflow",
  args: { name: "string" },
  isRequired: true,
};

const branchArg: Fig.Arg = { name: "branch" };

const branchOptionalArg: Fig.Arg = { name: "branch", isOptional: true };

const budgetIdArg: Fig.Arg = { name: "budget-id" };

const changeIdArg: Fig.Arg = { name: "change-id" };

const databaseArg: Fig.Arg = { name: "database" };

const idArg: Fig.Arg = { name: "id" };

const keyspaceArg: Fig.Arg = { name: "keyspace" };

const nameArg: Fig.Arg = { name: "name" };

const numberArg: Fig.Arg = { name: "number" };

const roleIdArg: Fig.Arg = { name: "role-id" };

const sidecarArg: Fig.Arg = { name: "sidecar" };

const teamArg: Fig.Arg = { name: "team" };

const branchConfigProfileCommand: Fig.Subcommand = {
  name: "config-profile",
  description: "Manage configuration profiles for a Neki database branch",
  subcommands: [
    {
      name: "changes",
      description: "Manage changes to a Neki configuration profile",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancel a pending change to a Neki configuration profile",
          args: [databaseArg, branchArg, nameArg, changeIdArg],
        },
        {
          name: ["list", "ls"],
          description: "List changes for a Neki configuration profile",
          args: [databaseArg, branchArg, nameArg],
          options: [periodOption, completedAtOption, pageOption, perPageOption],
        },
        {
          name: ["show", "get"],
          description: "Show a change to a Neki configuration profile",
          args: [databaseArg, branchArg, nameArg, changeIdArg],
        },
      ],
    },
    {
      name: "create",
      description: "Create a Neki configuration profile",
      args: [databaseArg, branchArg, nameArg],
      options: [
        {
          name: "--cluster-size",
          description: "Cluster size for shards in the profile",
          args: { name: "string" },
        },
        {
          name: "--replicas",
          description: "Number of replicas for shards in the profile",
          args: { name: "int" },
        },
        {
          name: "--read-only-replicas",
          description:
            "Number of read-only replicas per shard (0-8; defaults to 0)",
          args: { name: "int" },
        },
        {
          name: "--postgres-major-version",
          description: "PostgreSQL major version",
          args: { name: "string" },
        },
        {
          name: "--postgres-minor-version",
          description: "PostgreSQL minor version",
          args: { name: "string" },
        },
        minStorageOption,
        maxStorageOption,
        {
          name: "--storage-autoscaling",
          description: "Enable storage autoscaling",
        },
        {
          name: "--storage-iops",
          description: "Storage IOPS",
          args: { name: "int" },
        },
        {
          name: "--storage-throughput",
          description: "Storage throughput in MiB/s",
          args: { name: "int" },
        },
      ],
    },
    {
      name: "default",
      description: "Show the default Neki configuration profile",
      args: [databaseArg, branchArg],
    },
    {
      name: ["delete", "rm"],
      description: "Delete a Neki configuration profile",
      isDangerous: true,
      args: [databaseArg, branchArg, nameArg],
      options: [
        {
          name: "--force",
          description: "Delete the configuration profile without confirmation",
          isDangerous: true,
        },
      ],
    },
    {
      name: "extensions",
      description: "List extensions for a Neki configuration profile",
      args: [databaseArg, branchArg, nameArg],
      subcommands: [
        {
          name: "disable",
          description: "Disable an extension for a Neki configuration profile",
          args: [databaseArg, branchArg, nameArg, { name: "extension" }],
        },
        {
          name: "enable",
          description: "Enable an extension for a Neki configuration profile",
          args: [databaseArg, branchArg, nameArg, { name: "extension" }],
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List configuration profiles for a Neki branch",
      args: [databaseArg, branchArg],
    },
    {
      name: "maintenance",
      description:
        "Run maintenance for one or more Neki configuration profiles",
      args: [databaseArg, branchArg, { name: "name", isVariadic: true }],
    },
    {
      name: ["parameters", "params"],
      description: "List parameters for a Neki configuration profile",
      args: [databaseArg, branchArg, nameArg],
      options: [
        {
          name: "--namespace",
          description: "Only show parameters in this namespace",
          args: { name: "string" },
        },
        { name: "--extension", description: "Only show extension parameters" },
        { name: "--internal", description: "Only show internal parameters" },
      ],
    },
    {
      name: "set-default",
      description: "Set the default Neki configuration profile",
      args: [databaseArg, branchArg, nameArg],
    },
    {
      name: ["show", "get"],
      description: "Show a Neki configuration profile",
      args: [databaseArg, branchArg, nameArg],
    },
    {
      name: "update",
      description: "Update a Neki configuration profile",
      args: [databaseArg, branchArg, nameArg],
      options: [
        {
          name: "--name",
          description: "New name for the configuration profile",
          args: { name: "string" },
        },
        {
          name: "--cluster-size",
          description: "New cluster size for shards in the profile",
          args: { name: "string" },
        },
        {
          name: "--replicas",
          description: "New number of replicas for shards in the profile",
          args: { name: "int" },
        },
        {
          name: "--read-only-replicas",
          description:
            "New number of read-only replicas per shard (0-8; 0 removes them)",
          args: { name: "int" },
        },
        {
          name: "--extensions",
          description:
            "Extensions to enable; replaces the current set. Use --extensions= to disable extensions",
          args: { name: "strings" },
          isRepeatable: true,
        },
        parametersOption,
        {
          name: "--postgres-major-version",
          description: "PostgreSQL major version",
          args: { name: "string" },
        },
        {
          name: "--postgres-minor-version",
          description: "PostgreSQL minor version",
          args: { name: "string" },
        },
        minStorageOption,
        maxStorageOption,
        {
          name: "--storage-autoscaling",
          description: "Enable storage autoscaling",
        },
        {
          name: "--storage-iops",
          description: "Storage IOPS",
          args: { name: "int" },
        },
        {
          name: "--storage-throughput",
          description: "Storage throughput in MiB/s",
          args: { name: "int" },
        },
      ],
    },
  ],
};

const branchVtctlMoveTablesCommand: Fig.Subcommand = {
  name: "move-tables",
  description: "Manage MoveTables workflows",
  subcommands: [
    {
      name: "cancel",
      description: "Cancel a MoveTables workflow",
      args: [databaseArg, branchArg],
      options: [
        workflowOption,
        targetKeyspaceOption,
        {
          name: "--keep-data",
          description:
            "Keep the data copied into the target keyspace instead of deleting it",
          isRequired: true,
        },
        {
          name: "--keep-routing-rules",
          description: "Keep the routing rules",
          isRequired: true,
        },
        {
          name: "--ignore-source-keyspace",
          description:
            "Cancel without touching the source keyspace. Only use this when the source keyspace has been deleted or is unavailable",
        },
      ],
    },
    {
      name: "complete",
      description: "Complete a MoveTables workflow",
      args: [databaseArg, branchArg],
      options: [
        workflowOption,
        targetKeyspaceOption,
        {
          name: "--keep-data",
          description:
            "Keep the source tables instead of dropping them. Use this when the source is an external keyspace",
          isRequired: true,
        },
        {
          name: "--keep-routing-rules",
          description: "Keep the routing rules",
          isRequired: true,
        },
        {
          name: "--rename-tables",
          description: "Rename source tables instead of dropping them",
        },
        {
          name: "--ignore-source-keyspace",
          description:
            "Complete without touching the source keyspace. Only use this when the source keyspace has been deleted or is unavailable",
        },
        dryRunOption,
      ],
    },
    {
      name: "create",
      description: "Create a MoveTables workflow",
      args: [databaseArg, branchArg],
      options: [
        workflowOption,
        targetKeyspaceOption,
        {
          name: "--source-keyspace",
          description: "Source keyspace",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--tables",
          description: "Tables to move (comma-separated)",
          args: { name: "strings" },
          isRepeatable: true,
          exclusiveOn: ["--all-tables", "--exclude-tables"],
        },
        {
          name: "--all-tables",
          description: "Move all tables from the source keyspace",
          exclusiveOn: ["--tables"],
        },
        {
          name: "--auto-start",
          description: "Automatically start the workflow after creation",
        },
        {
          name: "--stop-after-copy",
          description: "Stop the workflow after the copy phase",
        },
        {
          name: "--defer-secondary-keys",
          description: "Defer secondary keys during the copy phase",
        },
        {
          name: "--on-ddl",
          description:
            "DDL handling strategy (IGNORE, STOP, EXEC, EXEC_IGNORE)",
          args: { name: "string" },
        },
        {
          name: "--sharded-auto-increment-handling",
          description: "Auto increment handling for sharded keyspaces",
          args: { name: "string" },
        },
        {
          name: "--global-keyspace",
          description:
            "Unsharded keyspace in which to create the backing sequence tables when --sharded-auto-increment-handling is REPLACE",
          args: { name: "string" },
        },
        {
          name: "--source-time-zone",
          description: "Source time zone",
          args: { name: "string" },
        },
        {
          name: "--tenant-id",
          description: "Tenant ID",
          args: { name: "string" },
        },
        {
          name: "--cells",
          description:
            "Restrict source tablet selection to these cells (comma-separated). When omitted, all cells are used",
          args: { name: "strings" },
          isRepeatable: true,
          exclusiveOn: ["--all-cells"],
        },
        {
          name: "--all-cells",
          description:
            "Select source tablets from all cells. This is the default when --cells is omitted",
          exclusiveOn: ["--cells"],
        },
        {
          name: "--tablet-types",
          description: "Tablet types to use for the workflow (comma-separated)",
          args: { name: "strings" },
          isRepeatable: true,
        },
        {
          name: "--exclude-tables",
          description: "Tables to exclude from the move (comma-separated)",
          args: { name: "strings" },
          isRepeatable: true,
          exclusiveOn: ["--tables"],
        },
        {
          name: "--atomic-copy",
          description: "Use atomic copy for the workflow",
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List MoveTables workflows",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--target-keyspace",
          description:
            "Filter by target keyspace (lists all keyspaces if omitted)",
          args: { name: "string" },
        },
      ],
    },
    {
      name: "reverse-traffic",
      description: "Reverse traffic for a MoveTables workflow",
      args: [databaseArg, branchArg],
      options: [
        workflowOption,
        targetKeyspaceOption,
        {
          name: "--tablet-types",
          description: "Tablet types to reverse traffic for (comma-separated)",
          args: { name: "strings" },
          isRepeatable: true,
        },
        {
          name: "--max-replication-lag-allowed",
          description: "Maximum replication lag allowed in seconds",
          args: { name: "int" },
        },
        dryRunOption,
      ],
    },
    {
      name: "show",
      description: "Show details of a MoveTables workflow",
      args: [databaseArg, branchArg],
      options: [workflowOption, targetKeyspaceOption],
    },
    {
      name: "start",
      description: "Start a MoveTables workflow",
      args: [databaseArg, branchArg],
      options: [workflowOption, targetKeyspaceOption],
    },
    {
      name: "status",
      description: "Show the status of a MoveTables workflow",
      args: [databaseArg, branchArg],
      options: [workflowOption, targetKeyspaceOption],
    },
    {
      name: "stop",
      description: "Stop a MoveTables workflow",
      args: [databaseArg, branchArg],
      options: [workflowOption, targetKeyspaceOption],
    },
    {
      name: "switch-traffic",
      description: "Switch traffic for a MoveTables workflow",
      args: [databaseArg, branchArg],
      options: [
        workflowOption,
        targetKeyspaceOption,
        {
          name: "--tablet-types",
          description: "Tablet types to switch traffic for (comma-separated)",
          args: { name: "strings" },
          isRequired: true,
          isRepeatable: true,
        },
        dryRunOption,
        {
          name: "--initialize-target-sequences",
          description: "Initialize target sequences",
        },
        {
          name: "--max-replication-lag-allowed",
          description: "Maximum replication lag allowed in seconds",
          args: { name: "int" },
        },
      ],
    },
  ],
};

const branchVtctlCommand: Fig.Subcommand = {
  name: ["vtctl", "vtctld"],
  description: "Run vtctl commands against a branch",
  subcommands: [
    {
      name: "apply-keyspace-routing-rules",
      description: "Replace live keyspace routing rules for a branch",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--rules",
          description: "Keyspace routing rules as JSON",
          args: { name: "string" },
        },
        {
          name: "--rules-file",
          description: "Path to keyspace routing rules JSON",
          args: { name: "string", template: "filepaths" },
        },
        {
          name: "--cells",
          description: "Limit SrvVSchema rebuilding to these cells",
          args: { name: "strings" },
          isRepeatable: true,
        },
        {
          name: "--skip-rebuild",
          description: "Skip rebuilding SrvVSchema objects",
        },
      ],
    },
    {
      name: "get-keyspace-routing-rules",
      description: "Get live keyspace routing rules for a branch",
      args: [databaseArg, branchArg],
    },
    {
      name: "get-routing-rules",
      description: "Get live routing rules for a branch",
      args: [databaseArg, branchArg],
    },
    {
      name: "get-shard",
      description: "Get a shard record for a branch",
      args: [databaseArg, branchArg],
      options: [keyspaceOption, shardNameUnshardedOption],
    },
    {
      name: "list-keyspaces",
      description: "List vtctld keyspaces for a branch",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--name",
          description: "Filter by keyspace name",
          args: { name: "string" },
        },
      ],
    },
    {
      name: "list-tablets",
      description: "List tablets for a branch, grouped by keyspace and shard",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--keyspace",
          description: "Only list tablets in this keyspace",
          args: { name: "string" },
        },
        {
          name: "--shard",
          description: "Only list tablets in this shard (requires --keyspace)",
          args: { name: "string" },
        },
        {
          name: "--tablet-type",
          description:
            "Only list tablets of this type (e.g. primary, replica, rdonly)",
          args: { name: "string" },
        },
        {
          name: "--tablet-alias",
          description:
            "Only list the tablet(s) with these aliases, e.g. zone1-0000000100 (comma-separated; overrides the other filters)",
          args: { name: "strings" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "list-workflows",
      description: "List vtctld workflows for a branch",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--keyspace",
          description: "Keyspace to list workflows for",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--workflow",
          description: "Filter by workflow name",
          args: { name: "string" },
        },
        {
          name: "--include-logs",
          description: "Include workflow logs in the response",
        },
      ],
    },
    {
      name: "lookup-vindex",
      description: "Manage Lookup Vindex operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Lookup Vindex creation",
          args: [databaseArg, branchArg],
          options: [nameOption, tableKeyspaceOption],
        },
        {
          name: "complete",
          description: "Complete a Lookup Vindex creation",
          args: [databaseArg, branchArg],
          options: [nameOption, tableKeyspaceOption, keyspaceOwnerTableOption],
        },
        {
          name: "create",
          description: "Create a Lookup Vindex",
          args: [databaseArg, branchArg],
          options: [
            nameOption,
            {
              name: "--table-keyspace",
              description:
                "Keyspace where the lookup table and its backfill workflow are created",
              args: { name: "string" },
              isRequired: true,
            },
            keyspaceOwnerTableOption,
            {
              name: "--type",
              description: "Type of the vindex",
              args: { name: "string" },
            },
            {
              name: "--cells",
              description: "Cells to replicate from (comma-separated)",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--tablet-types",
              description: "Tablet types to replicate from (comma-separated)",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--table-owner",
              description: "Owner table name",
              args: { name: "string" },
            },
            {
              name: "--table-name",
              description: "Name of the lookup table",
              args: { name: "string" },
            },
            {
              name: "--table-owner-columns",
              description: "Owner table columns (comma-separated)",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--table-vindex-type",
              description: "Vindex type on the owner table",
              args: { name: "string" },
            },
            { name: "--ignore-nulls", description: "Ignore null values" },
            {
              name: "--tablet-types-in-preference-order",
              description: "Use tablet types in preference order",
            },
            {
              name: "--continue-after-copy-with-owner",
              description:
                "Keep the backfill workflow running after the copy phase when the vindex has an owner",
            },
          ],
        },
        {
          name: "externalize",
          description: "Externalize a Lookup Vindex",
          args: [databaseArg, branchArg],
          options: [
            nameOption,
            tableKeyspaceOption,
            keyspaceOwnerTableOption,
            {
              name: "--delete",
              description: "Delete the workflow after externalizing",
            },
          ],
        },
        {
          name: "internalize",
          description: "Internalize a Lookup Vindex",
          args: [databaseArg, branchArg],
          options: [nameOption, tableKeyspaceOption, keyspaceOwnerTableOption],
        },
        {
          name: "show",
          description: "Show details of a Lookup Vindex",
          args: [databaseArg, branchArg],
          options: [nameOption, tableKeyspaceOption],
        },
      ],
    },
    {
      name: "materialize",
      description: "Manage Materialize workflows",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Materialize workflow",
          args: [databaseArg, branchArg],
          options: [
            workflowOption,
            targetKeyspaceOption,
            {
              name: "--keep-data",
              description: "Keep the data after canceling",
            },
            {
              name: "--keep-routing-rules",
              description: "Keep the routing rules after canceling",
            },
          ],
        },
        {
          name: "create",
          description: "Create a Materialize workflow",
          args: [databaseArg, branchArg],
          options: [
            workflowOption,
            targetKeyspaceOption,
            {
              name: "--source-keyspace",
              description: "Source keyspace",
              args: { name: "string" },
              isRequired: true,
            },
            {
              name: "--table-settings",
              description: "JSON array of table materialization settings",
              args: { name: "string" },
              isRequired: true,
            },
            {
              name: "--cells",
              description: "Cells to use",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--reference-tables",
              description: "Reference tables to include",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--tablet-types",
              description: "Tablet types to use",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--stop-after-copy",
              description: "Stop the workflow after copying is complete",
            },
            {
              name: "--tablet-types-in-preference-order",
              description: "Use tablet types in order of preference",
            },
            {
              name: "--defer-secondary-keys",
              description: "Defer secondary keys during copy",
            },
            { name: "--atomic-copy", description: "Use atomic copy" },
            {
              name: "--on-ddl",
              description:
                "DDL handling strategy (IGNORE, STOP, EXEC, EXEC_IGNORE)",
              args: { name: "string" },
            },
            {
              name: "--source-time-zone",
              description: "Source time zone",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a Materialize workflow",
          args: [databaseArg, branchArg],
          options: [
            workflowOption,
            targetKeyspaceOption,
            {
              name: "--include-logs",
              description: "Include workflow logs in the response",
            },
          ],
        },
        {
          name: "start",
          description: "Start a Materialize workflow",
          args: [databaseArg, branchArg],
          options: [workflowOption, targetKeyspaceOption],
        },
        {
          name: "stop",
          description: "Stop a Materialize workflow",
          args: [databaseArg, branchArg],
          options: [workflowOption, targetKeyspaceOption],
        },
      ],
    },
    branchVtctlMoveTablesCommand,
    {
      name: "planned-reparent-shard",
      description: "Reparent a shard to a new primary",
      args: [databaseArg, branchArg],
      options: [
        keyspaceOption,
        {
          name: "--shard",
          description: "Shard range (e.g., '-80', '80-', or '-' for unsharded)",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--new-primary",
          description: "Tablet alias to promote as the new primary",
          args: { name: "string" },
          isRequired: true,
        },
        { name: "--wait", description: "Wait for the operation to complete" },
      ],
      subcommands: [
        {
          name: "status",
          description: "Check the status of a planned reparent shard operation",
          args: [databaseArg, branchArg, { name: "operation-id" }],
        },
      ],
    },
    {
      name: "refresh-state-by-shard",
      description: "Reload tablet records for all tablets in a shard",
      args: [databaseArg, branchArg],
      options: [
        keyspaceOption,
        shardNameUnshardedOption,
        {
          name: "--cells",
          description: "Cells to refresh (comma-separated)",
          args: { name: "strings" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "set-shard-tablet-control",
      description: "Update shard tablet controls for a branch",
      args: [databaseArg, branchArg],
      options: [
        keyspaceOption,
        shardNameUnshardedOption,
        {
          name: "--tablet-type",
          description: "Tablet type (e.g. rdonly, replica, primary)",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--cells",
          description: "Cells to update (comma-separated)",
          args: { name: "strings" },
          isRepeatable: true,
        },
        {
          name: "--denied-tables",
          description:
            "Tables to add to or remove from the denylist (comma-separated)",
          args: { name: "strings" },
          isRepeatable: true,
        },
        {
          name: "--remove",
          description:
            "Remove tablet controls (or specific denied tables when combined with --denied-tables)",
        },
        {
          name: "--disable-query-service",
          description: "Disable query service on the provided tablets",
        },
      ],
    },
    {
      name: "start-workflow",
      description: "Start a workflow on a branch",
      args: [databaseArg, branchArg, { name: "workflow" }],
      options: [
        {
          name: "--keyspace",
          description: "Keyspace the workflow belongs to",
          args: { name: "string" },
          isRequired: true,
        },
      ],
    },
    {
      name: "stop-workflow",
      description: "Stop a workflow on a branch",
      args: [databaseArg, branchArg, { name: "workflow" }],
      options: [
        {
          name: "--keyspace",
          description: "Keyspace the workflow belongs to",
          args: { name: "string" },
          isRequired: true,
        },
      ],
    },
    {
      name: "throttler",
      description: "Inspect and configure the tablet throttler",
      subcommands: [
        {
          name: "check",
          description: "Issue a throttler check against a single tablet",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--tablet-alias",
              description:
                'Alias of the tablet to check (e.g. "zone1-0000000100")',
              args: { name: "string" },
              isRequired: true,
            },
            {
              name: "--app-name",
              description:
                'App to issue the check on behalf of (e.g. "online-ddl"). Defaults to the throttler\'s default app',
              args: { name: "string" },
            },
            {
              name: "--scope",
              description:
                'Scope of the check, either "shard" or "self". Defaults to the throttler\'s default scope',
              args: { name: "string", suggestions: ["shard", "self"] },
            },
            {
              name: "--skip-request-heartbeats",
              description:
                "Do not renew the throttler's heartbeat lease while serving this check",
            },
            {
              name: "--ok-if-not-exists",
              description:
                "Return OK even if the requested metric does not exist",
            },
          ],
        },
        {
          name: "status",
          description: "Get the throttler status for a single tablet",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--tablet-alias",
              description:
                'Alias of the tablet to probe (e.g. "zone1-0000000100")',
              args: { name: "string" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-config",
          description: "Update the throttler configuration for a keyspace",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--keyspace",
              description: "Keyspace whose throttler config to update",
              args: { name: "string" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description:
                "Enable (true) or disable (false) the throttler for the keyspace. Omit to leave unchanged",
            },
            {
              name: "--threshold",
              description:
                "Replication lag threshold in seconds for the default check",
              args: { name: "float" },
            },
            {
              name: "--throttle-app",
              description: 'App name to throttle (e.g. "rowstreamer")',
              args: { name: "string" },
              exclusiveOn: ["--unthrottle-app"],
            },
            {
              name: "--throttle-app-ratio",
              description:
                "Ratio to throttle the app specified by --throttle-app (0.00-1.00)",
              args: { name: "float", default: "1" },
            },
            {
              name: "--throttle-app-duration",
              description:
                "Duration after which the --throttle-app rule expires",
              args: { name: "duration" },
            },
            {
              name: "--unthrottle-app",
              description:
                "App name whose throttled-app rule should be removed",
              args: { name: "string" },
              exclusiveOn: ["--throttle-app"],
            },
            {
              name: "--app-name",
              description:
                "App name for which to assign checked metrics (requires --app-metrics)",
              args: { name: "string" },
              dependsOn: ["--app-metrics"],
            },
            {
              name: "--app-metrics",
              description: "Metrics to check for --app-name (e.g. lag,loadavg)",
              args: { name: "strings" },
              isRepeatable: true,
              dependsOn: ["--app-name"],
            },
          ],
        },
      ],
    },
    {
      name: "vdiff",
      description: "Manage VDiff operations",
      subcommands: [
        {
          name: "create",
          description: "Create a VDiff",
          args: [databaseArg, branchArg],
          options: [
            workflowOption,
            targetKeyspaceOption,
            {
              name: "--auto-retry",
              description: "Automatically retry on error",
            },
            {
              name: "--auto-start",
              description: "Automatically start the VDiff",
            },
            {
              name: "--debug-query",
              description: "Log the queries used for the VDiff",
            },
            { name: "--only-pks", description: "Only compare primary keys" },
            {
              name: "--update-table-stats",
              description: "Update table statistics before the VDiff",
            },
            { name: "--verbose", description: "Verbose output" },
            {
              name: "--tables",
              description: "Tables to compare (comma-separated)",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--tablet-types",
              description: "Tablet types to use (comma-separated)",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--tablet-selection-preference",
              description: "Tablet selection preference",
              args: { name: "string" },
            },
            {
              name: "--filtered-replication-wait-time",
              description: "Filtered replication wait time in seconds",
              args: { name: "int" },
            },
            {
              name: "--max-report-sample-rows",
              description: "Maximum number of sample rows in report",
              args: { name: "int" },
            },
            {
              name: "--max-extra-rows-to-compare",
              description: "Maximum extra rows to compare",
              args: { name: "int" },
            },
            {
              name: "--row-diff-column-truncate-at",
              description:
                "Truncate column values at this length in the report",
              args: { name: "int" },
            },
            {
              name: "--limit",
              description: "Maximum number of rows to compare",
              args: { name: "int" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a VDiff",
          isDangerous: true,
          args: [databaseArg, branchArg],
          options: [workflowOption, uuidOption, targetKeyspaceOption],
        },
        {
          name: "list",
          description: "List VDiffs",
          args: [databaseArg, branchArg],
          options: [workflowOption, targetKeyspaceOption],
        },
        {
          name: "resume",
          description: "Resume a stopped VDiff",
          args: [databaseArg, branchArg],
          options: [
            workflowOption,
            uuidOption,
            targetKeyspaceOption,
            {
              name: "--target-shards",
              description: "Target shards to resume (comma-separated)",
              args: { name: "strings" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show details of a VDiff",
          args: [databaseArg, branchArg],
          options: [workflowOption, uuidOption, targetKeyspaceOption],
        },
        {
          name: "stop",
          description: "Stop a VDiff",
          args: [databaseArg, branchArg],
          options: [
            workflowOption,
            uuidOption,
            targetKeyspaceOption,
            {
              name: "--target-shards",
              description: "Target shards to stop (comma-separated)",
              args: { name: "strings" },
              isRepeatable: true,
            },
          ],
        },
      ],
    },
  ],
};

const agentGuideCommand: Fig.Subcommand = {
  name: "agent-guide",
  description: "Show guidance for AI agents and automation",
  options: [
    {
      name: "--skill",
      description:
        "Print the guide as an installable agent skill file and exit",
    },
  ],
};

const agentsCommand: Fig.Subcommand = {
  name: "agents",
  description: "How AI agents and automation should use pscale",
};

const apiCommand: Fig.Subcommand = {
  name: "api",
  description:
    "Performs authenticated calls against the PlanetScale API. Useful for scripting",
  args: { name: "endpoint" },
  options: [
    orgLocalOption,
    {
      name: "--database",
      description: "The database this project is using",
      args: { name: "string" },
    },
    {
      name: "--branch",
      description: "The branch this project is using",
      args: { name: "string" },
    },
    {
      name: ["--method", "-X"],
      description:
        "HTTP method to use for the request. Defaults to GET for requests without a body, or POST when a body is specified with --field/-F or --input/-I",
      args: { name: "string", default: "GET" },
    },
    {
      name: ["--query", "-Q"],
      description: "Query to append to the URL path, in `key=value` format",
      args: { name: "string" },
      isRepeatable: true,
    },
    {
      name: ["--header", "-H"],
      description: "HTTP headers to add to the request",
      args: { name: "string" },
      isRepeatable: true,
    },
    {
      name: ["--field", "-F"],
      description:
        "HTTP body to send with the request, in `key=value` format where value is a JSON entity, unless value starts with a @ in which case the string after @ represents a file that will be read. Nested types are represented as 'root.depth1.depth2=value'",
      args: { name: "string" },
      isRepeatable: true,
    },
    {
      name: ["--input", "-I"],
      description:
        "HTTP body to send with the request, as a file that will be read and then sent",
      args: { name: "string", template: "filepaths" },
    },
  ],
};

const auditLogCommand: Fig.Subcommand = {
  name: "audit-log",
  description: "List audit logs and download authentication-attempt exports",
  options: [orgOption],
  subcommands: [
    {
      name: "auth-attempts",
      description: "Download authentication-attempt export reports",
      subcommands: [
        {
          name: "download",
          description: "Download an authentication-attempt export",
          options: [
            {
              name: "--since",
              description:
                "Export window ending now: positive duration such as 24h, 7d, or 2w",
              args: { name: "string" },
              exclusiveOn: ["--start-at", "--end-at"],
            },
            {
              name: "--start-at",
              description:
                "Inclusive start: now, today, yesterday, YYYY-MM-DD, local ISO, or RFC3339",
              args: { name: "string" },
              exclusiveOn: ["--since"],
            },
            {
              name: "--end-at",
              description:
                "Exclusive end: now, today, yesterday, YYYY-MM-DD, local ISO, or RFC3339; defaults to now",
              args: { name: "string" },
              exclusiveOn: ["--since"],
            },
            {
              name: "--source-ip",
              description:
                "Source IP address or CIDR range (repeat or comma-separate)",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--branch",
              description:
                "Branch public ID or database/branch name (repeat or comma-separate)",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--outcome",
              description: "Authentication outcome: allow or deny",
              args: { name: "strings", suggestions: ["allow", "deny"] },
              isRepeatable: true,
            },
            {
              name: "--username",
              description:
                "Authentication username (repeatable; commas are part of the name, not separators)",
              args: { name: "string" },
              isRepeatable: true,
            },
            {
              name: "--startup-database",
              description: "Startup database name (repeatable)",
              args: { name: "string" },
              isRepeatable: true,
            },
            {
              name: "--failure-reason",
              description:
                "Failure reason: bad_password, unknown_user, authorization_failed, ip_not_allowed, other",
              args: {
                name: "strings",
                suggestions: [
                  "bad_password",
                  "unknown_user",
                  "authorization_failed",
                  "ip_not_allowed",
                  "other",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--backend-route",
              description: "Backend route: postgres, pgbouncer, unknown",
              args: {
                name: "strings",
                suggestions: ["postgres", "pgbouncer", "unknown"],
              },
              isRepeatable: true,
            },
            {
              name: "--export-format",
              description:
                "Artifact format: jsonl, csv, parquet; defaults from --format (human/csv -> csv, json -> JSONL; parquet is explicit)",
              args: {
                name: "string",
                suggestions: ["jsonl", "csv", "parquet"],
              },
            },
            {
              name: "--output",
              description:
                "Output file name, or - to write raw ZIP bytes to stdout",
              args: { name: "string", template: "filepaths" },
            },
          ],
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List all audit logs of an organization",
      options: [
        {
          name: ["--web", "-w"],
          description: "List audit logs in your web browser",
        },
        {
          name: "--action",
          description: "Filter based on the action type",
          args: { name: "strings" },
          isRepeatable: true,
        },
        {
          name: "--starting-after",
          description: "Public ID to start after (for pagination)",
          args: { name: "string" },
        },
        {
          name: "--limit",
          description: "The number of audit log events to return",
          args: { name: "int" },
        },
      ],
    },
  ],
};

const authCommand: Fig.Subcommand = {
  name: "auth",
  description: "Login and logout via the PlanetScale API",
  subcommands: [
    { name: "check", description: "Check if you are authenticated" },
    {
      name: "login",
      description: "Authenticate with the PlanetScale API",
      options: [
        clientIdOption,
        clientSecretOption,
        {
          name: "--api-url",
          description: "The PlanetScale Auth API base URL",
          args: { name: "string", default: "https://auth.planetscale.com/" },
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of the PlanetScale API",
      options: [
        clientIdOption,
        clientSecretOption,
        {
          name: "--api-url",
          description: "The PlanetScale base API URL",
          args: { name: "string", default: "https://auth.planetscale.com/" },
        },
      ],
    },
  ],
};

const backupCommand: Fig.Subcommand = {
  name: "backup",
  description: "Manage branch backups, backup policies, and restores",
  options: [orgOption],
  subcommands: [
    {
      name: ["create", "b"],
      description: "Backup a branch's data and schema",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--name",
          description: "Optional name for the backup",
          args: { name: "string" },
        },
        {
          name: "--emergency",
          description:
            "Request an emergency backup that clones data from a live tablet instead of waiting for the next scheduled backup. Requires --emergency-source",
        },
        {
          name: "--emergency-source",
          description:
            "Tablet type to clone from for an emergency backup: primary or replica. Required with --emergency; rejected otherwise",
          args: { name: "string", suggestions: ["primary", "replica"] },
        },
      ],
    },
    {
      name: ["delete", "rm"],
      description: "Delete a branch backup",
      isDangerous: true,
      args: [databaseArg, branchArg, { name: "backup" }],
      options: [
        {
          name: "--force",
          description: "Delete a backup without confirmation",
          isDangerous: true,
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List all backups of a branch",
      args: [databaseArg, branchArg],
      options: [
        {
          name: ["--web", "-w"],
          description: "List backups in your web browser",
        },
      ],
    },
    {
      name: "policy",
      description: "Create, list, show, update, and delete backup policies",
      subcommands: [
        {
          name: "create",
          description: "Create a backup policy",
          args: databaseArg,
          options: [
            {
              name: "--name",
              description: "Optional name for the backup policy",
              args: { name: "string" },
            },
            {
              name: "--target",
              description: "Branch target: production or development",
              args: {
                name: "string",
                suggestions: ["production", "development"],
              },
              isRequired: true,
            },
            {
              name: "--retention-value",
              description: "Retention period value",
              args: { name: "int" },
              isRequired: true,
            },
            {
              name: "--retention-unit",
              description: "Retention unit: hour, day, week, month, or year",
              args: {
                name: "string",
                suggestions: ["hour", "day", "week", "month", "year"],
              },
              isRequired: true,
            },
            {
              name: "--frequency-value",
              description: "Frequency value",
              args: { name: "int" },
              isRequired: true,
            },
            {
              name: "--frequency-unit",
              description: "Frequency unit: hour, day, week, or month",
              args: {
                name: "string",
                suggestions: ["hour", "day", "week", "month"],
              },
              isRequired: true,
            },
            {
              name: "--schedule-time",
              description: "Schedule time of day in HH:MM format",
              args: { name: "string" },
              isRequired: true,
            },
            {
              name: "--schedule-day",
              description:
                "Day of week (0=Sunday … 6=Saturday); used for weekly/monthly schedules",
              args: { name: "int" },
            },
            {
              name: "--schedule-week",
              description:
                "Week of month (0=first … 3=fourth); used for monthly schedules",
              args: { name: "int" },
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a backup policy",
          isDangerous: true,
          args: [databaseArg, { name: "policy-id" }],
          options: [
            {
              name: "--force",
              description: "Delete a backup policy without confirmation",
              isDangerous: true,
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List backup policies for a database",
          args: databaseArg,
        },
        {
          name: "show",
          description: "Show a backup policy",
          args: [databaseArg, { name: "policy-id" }],
        },
        {
          name: "update",
          description: "Update a backup policy",
          args: [databaseArg, { name: "policy-id" }],
          options: [
            {
              name: "--name",
              description: "Name for the backup policy",
              args: { name: "string" },
            },
            {
              name: "--target",
              description: "Branch target: production or development",
              args: {
                name: "string",
                suggestions: ["production", "development"],
              },
            },
            {
              name: "--retention-value",
              description: "Retention period value",
              args: { name: "int" },
            },
            {
              name: "--retention-unit",
              description: "Retention unit: hour, day, week, month, or year",
              args: {
                name: "string",
                suggestions: ["hour", "day", "week", "month", "year"],
              },
            },
            {
              name: "--frequency-value",
              description: "Frequency value",
              args: { name: "int" },
            },
            {
              name: "--frequency-unit",
              description: "Frequency unit: hour, day, week, or month",
              args: {
                name: "string",
                suggestions: ["hour", "day", "week", "month"],
              },
            },
            {
              name: "--schedule-time",
              description: "Schedule time of day in HH:MM format",
              args: { name: "string" },
            },
            {
              name: "--schedule-day",
              description: "Day of week (0=Sunday … 6=Saturday)",
              args: { name: "int" },
            },
            {
              name: "--schedule-week",
              description: "Week of month (0=first … 3=fourth)",
              args: { name: "int" },
            },
          ],
        },
      ],
    },
    {
      name: "restore",
      description: "Restore a backup to a new branch",
      args: [databaseArg, { name: "new-branch" }, { name: "backup" }],
      options: [
        {
          name: "--cluster-size",
          description:
            "Cluster size for restored backup branch. For Neki, omitted unless set so the source default profile size is used. Use `pscale size cluster list` to see the valid sizes",
          args: { name: "string", default: "PS-10" },
        },
        {
          name: "--replicas",
          description:
            "Number of additional replicas for a PostgreSQL restore. 0 creates a single-node branch; omit to use the target cluster size default",
          args: { name: "int" },
        },
        {
          name: "--storage-iops",
          description: "Storage IOPS for a PostgreSQL restore",
          args: { name: "int" },
        },
        {
          name: "--storage-throughput",
          description: "Storage throughput in MiB/s for a PostgreSQL restore",
          args: { name: "int" },
        },
        {
          name: "--config-profile",
          description:
            "For Neki backup restores, size and replica count for one configuration profile as name=<profile>[,cluster-size=<size>][,replicas=<n>]. Repeatable. Omitted profiles inherit the source. List names with 'pscale branch config-profile list' on the source branch",
          args: { name: "string" },
          isRepeatable: true,
        },
        {
          name: "--router",
          description:
            "For Neki backup restores, size and replica count for one router as name=<router>[,size=<sku>][,replicas-per-cell=<n>]. Repeatable. Omitted routers inherit the source. List names with 'pscale branch router list' on the source branch",
          args: { name: "string" },
          isRepeatable: true,
        },
      ],
      subcommands: [
        {
          name: "show",
          description:
            "Show the sizes a Neki backup restore will use if you do not override them",
          args: [databaseArg, branchArg, { name: "backup" }],
        },
      ],
    },
    {
      name: "show",
      description: "Show a specific backup of a branch",
      args: [databaseArg, branchArg, { name: "backup" }],
      options: [
        {
          name: ["--web", "-w"],
          description: "Show a branch backup in your web browser",
        },
      ],
    },
    {
      name: "update",
      description: "Update a backup's protected status",
      args: [databaseArg, branchArg, { name: "backup-id" }],
      options: [
        {
          name: "--protected",
          description:
            "Protect the backup from deletion (use --protected=false to disable)",
        },
      ],
    },
  ],
};

const billingCommand: Fig.Subcommand = {
  name: "billing",
  description: "Manage organization billing",
  options: [orgOption],
  subcommands: [
    {
      name: "invoice",
      description: "List and show organization invoices",
      subcommands: [
        {
          name: "line-items",
          description: "List line items for an invoice",
          args: { name: "invoice-id" },
          options: [pageDefault1Option, perPageDefault25Option],
        },
        {
          name: ["list", "ls"],
          description: "List invoices for an organization",
          options: [pageDefault1Option, perPageDefault25Option],
        },
        {
          name: "show",
          description: "Show an invoice",
          args: { name: "invoice-id" },
        },
      ],
    },
    {
      name: "payment-method",
      description: "Manage the organization payment method",
      subcommands: [
        {
          name: ["delete", "rm"],
          description: "Delete the organization payment method",
          isDangerous: true,
          options: [
            {
              name: "--force",
              description: "Delete the payment method without confirmation",
              isDangerous: true,
            },
          ],
        },
        { name: "show", description: "Show the organization payment method" },
        {
          name: "status",
          description: "Show a payment method setup started by update",
          args: { name: "setup-id" },
        },
        {
          name: "update",
          description: "Update the payment method using Stripe Checkout",
        },
      ],
    },
  ],
};

const branchCommand: Fig.Subcommand = {
  name: "branch",
  description: "Create, delete, diff, and manage branches",
  options: [orgOption],
  subcommands: [
    {
      name: "admin",
      description: "Manage the admin config for a Neki database branch",
      subcommands: [
        {
          name: "changes",
          description: "Manage changes to a Neki admin",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a pending change to a Neki admin",
              args: [databaseArg, branchArg, changeIdArg],
            },
            {
              name: ["list", "ls"],
              description: "List changes for a Neki admin",
              args: [databaseArg, branchArg],
              options: [
                periodOption,
                completedAtOption,
                pageOption,
                perPageOption,
              ],
            },
            {
              name: ["show", "get"],
              description: "Show a change to a Neki admin",
              args: [databaseArg, branchArg, changeIdArg],
            },
          ],
        },
        {
          name: ["parameters", "params"],
          description: "List parameters for a Neki admin",
          args: [databaseArg, branchArg],
        },
        {
          name: ["show", "get"],
          description: "Show the admin for a Neki database branch",
          args: [databaseArg, branchArg],
        },
        {
          name: ["sizes", "size-skus"],
          description: "List available admin sizes for a Neki database branch",
          args: [databaseArg, branchArg],
        },
        {
          name: "update",
          description: "Update the admin for a Neki database branch",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--size",
              description: "New admin size SKU (e.g. NKA-0)",
              args: { name: "string" },
            },
            parametersOption,
          ],
        },
      ],
    },
    {
      name: ["changes", "neki-changes"],
      description: "List change requests across a Neki branch",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a pending Neki branch change request",
          args: [databaseArg, branchArg, changeIdArg],
        },
        {
          name: ["list", "ls"],
          description: "List change requests for a Neki branch",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--state",
              description: "Filter by state (repeat or comma-separate)",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--target-type",
              description:
                "Filter by target type: admin, cluster, config-profile, router, or sidecar",
              args: {
                name: "strings",
                suggestions: [
                  "admin",
                  "cluster",
                  "config-profile",
                  "router",
                  "sidecar",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--target-id",
              description: "Filter by target ID. Requires --target-type",
              args: { name: "string" },
            },
            periodOption,
            {
              name: "--completed-at",
              description: "Only show changes completed in this time range",
              args: { name: "string" },
            },
            pageOption,
            perPageOption,
          ],
        },
        {
          name: ["show", "get"],
          description: "Show a Neki branch change request",
          args: [databaseArg, branchArg, changeIdArg],
        },
      ],
    },
    branchConfigProfileCommand,
    {
      name: "connections",
      description: "Show and kill branch connections",
      subcommands: [
        {
          name: "kill",
          description: "Kill a branch connection or query",
          args: [databaseArg, branchArg, idArg],
          options: [
            keyspaceVitessTargetOption,
            shardVitessTargetOption,
            {
              name: "--query",
              description:
                "Cancel the query_id instead of terminating the connection_id",
            },
          ],
        },
        {
          name: "kill-transaction",
          description: "Kill a Postgres or Neki branch transaction",
          args: [databaseArg, branchArg, { name: "transaction-id" }],
        },
        {
          name: "show",
          description: "Show branch connections once",
          args: [databaseArg, branchArg],
          options: [
            keyspaceVitessTargetOption,
            shardVitessTargetOption,
            {
              name: "--instance",
              description: "Postgres instance to target",
              args: { name: "string" },
            },
            {
              name: "--role",
              description:
                "Postgres instance role to target: primary or replica",
              args: { name: "string", suggestions: ["primary", "replica"] },
            },
          ],
        },
        {
          name: "top",
          description: "Show live branch connection activity",
          args: [{ name: "database", isOptional: true }, branchOptionalArg],
          options: [
            {
              name: "--interval",
              description: "Refresh interval",
              args: { name: "duration" },
            },
            {
              name: "--capture",
              description:
                "Write captured samples to a trace file. Required in headless mode",
              args: { name: "string", template: "filepaths" },
            },
            {
              name: "--replay",
              description:
                "Replay a previously captured trace file in the TUI. Mutually exclusive with --capture",
              args: { name: "string", template: "filepaths" },
            },
            {
              name: "--duration",
              description:
                "Run for this duration. Default is to run until interrupted",
              args: { name: "duration" },
            },
            {
              name: "--instance",
              description:
                "Filter the live view to a single instance (by id from the list response)",
              args: { name: "string" },
            },
            {
              name: "--role",
              description:
                "Filter the live view to rows whose instance role is primary or replica",
              args: { name: "string" },
            },
            keyspaceVitessTargetOption,
            shardVitessTargetOption,
          ],
        },
      ],
    },
    {
      name: ["create", "b"],
      description: "Create a new branch from a database",
      args: [{ name: "source-database" }, branchArg],
      options: [
        {
          name: "--from",
          description:
            "Parent branch to create the new branch from. Cannot be used with --restore unless --restore-point is set",
          args: { name: "string" },
        },
        {
          name: "--region",
          description: "Region for the branch to be created in",
          args: { name: "string" },
        },
        {
          name: "--restore",
          description: "ID of Backup to restore into branch",
          args: { name: "string" },
          exclusiveOn: ["--seed-data"],
        },
        {
          name: "--restore-point",
          description:
            "For PostgreSQL databases, restore from a point-in-time recovery timestamp (e.g. 2023-01-01T00:00:00Z). Requires --restore or --from",
          args: { name: "string" },
          exclusiveOn: ["--seed-data"],
        },
        {
          name: "--cluster-size",
          description:
            "Cluster size for the branch. Defaults to PS_DEV for regular branches, or PS-10 for branches created from a backup or with seed-data. Omitted for Neki so the API uses the database default. Use 'pscale size cluster list' to see the valid sizes",
          args: { name: "string" },
        },
        {
          name: "--seed-data",
          description:
            "Add seed data using the Data Branching™ feature. This branch will be created with the same resources as the base branch",
          exclusiveOn: ["--restore", "--restore-point"],
        },
        { name: "--wait", description: "Wait until the branch is ready" },
        {
          name: "--major-version",
          description:
            "For PostgreSQL databases, the PostgreSQL major version to use for the branch. Defaults to the major version of the parent branch if it exists or the database's default branch major version. Ignored for branches restored from backups",
          args: {
            name: "string",
            suggestions: [{ name: "17", description: "PostgreSQL 17" }],
          },
        },
        {
          name: "--replicas",
          description:
            "Number of additional replicas for a PostgreSQL restore. 0 creates a single-node branch; omit to use the target cluster size default",
          args: { name: "int" },
        },
        minStorageOption,
        maxStorageOption,
        {
          name: "--storage-iops",
          description:
            "Storage IOPS for a PostgreSQL restore. Requires --restore or --restore-point",
          args: { name: "int" },
        },
        {
          name: "--storage-throughput",
          description:
            "Storage throughput in MiB/s for a PostgreSQL restore. Requires --restore or --restore-point",
          args: { name: "int" },
        },
        {
          name: "--config-profile",
          description:
            "For Neki backup restores, size and replica count for one configuration profile as name=<profile>[,cluster-size=<size>][,replicas=<n>]. Repeatable. Omitted profiles inherit the source. List names with 'pscale branch config-profile list' on the source branch",
          args: { name: "string" },
          isRepeatable: true,
        },
        {
          name: "--router",
          description:
            "For Neki backup restores, size and replica count for one router as name=<router>[,size=<sku>][,replicas-per-cell=<n>]. Repeatable. Omitted routers inherit the source. List names with 'pscale branch router list' on the source branch",
          args: { name: "string" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "data-topology",
      description: "Fetch or update the data topology of a Neki branch",
      subcommands: [
        {
          name: ["get", "show"],
          description: "Show the data topology of a Neki branch",
          args: [databaseArg, branchArg],
        },
        {
          name: "ls",
          description:
            "Show the relationships in a Neki branch's data topology",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--shards",
              description: "Group data by the physical shards that host it",
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the data topology of a Neki branch from standard input",
          args: [databaseArg, branchArg],
        },
      ],
    },
    {
      name: ["delete", "rm"],
      description: "Delete a branch from a database",
      isDangerous: true,
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--force",
          description: "Delete a branch without confirmation",
          isDangerous: true,
        },
        {
          name: "--delete-descendants",
          description: "Delete the branch and all of its descendant branches",
        },
      ],
    },
    {
      name: "demote",
      description: "Demote a production branch to development",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--cluster-size",
          description:
            "Postgres cluster size to apply when demoting (for example, PS-DEV). Use 'pscale size cluster list' to see valid sizes",
          args: { name: "string" },
        },
        {
          name: "--replicas",
          description:
            "Postgres replica count, not including the primary. 0 is a single node. 2 to 8 is high availability",
          args: { name: "int" },
        },
      ],
    },
    {
      name: "diff",
      description: "Show the schema diff of a MySQL branch",
      args: [databaseArg, branchArg],
      options: [webOption],
    },
    {
      name: "extensions",
      description: "List extensions available on a Postgres branch",
      args: [databaseArg, branchArg],
      subcommands: [
        {
          name: "disable",
          description: "Disable an extension on a Postgres branch",
          args: [databaseArg, branchArg, { name: "extension" }],
          options: [waitOption, waitTimeoutOption],
        },
        {
          name: "enable",
          description: "Enable an extension on a Postgres branch",
          args: [databaseArg, branchArg, { name: "extension" }],
          options: [waitOption, waitTimeoutOption],
        },
        {
          name: ["list", "ls"],
          description: "List extensions available on a Postgres branch",
          args: [databaseArg, branchArg],
        },
      ],
    },
    {
      name: "infra",
      description: "Show infrastructure (pods) for a branch",
      hidden: true,
      args: [databaseArg, branchArg],
    },
    {
      name: "lint",
      description: "Lint the schema of a MySQL branch",
      args: [databaseArg, branchArg],
    },
    {
      name: ["list", "ls"],
      description: "List all branches of a database",
      args: databaseArg,
      options: [
        {
          name: ["--web", "-w"],
          description: "List branches in your web browser",
        },
        pageOption,
        perPageOption,
      ],
    },
    {
      name: "maintenance",
      description: "Manage maintenance for a Postgres or Neki branch",
      subcommands: [
        {
          name: "event",
          description:
            "List, show, and reschedule maintenance events for a Postgres branch",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List maintenance events for a Postgres branch",
              args: [databaseArg, branchArg],
              options: [
                {
                  name: "--state",
                  description:
                    "Only list events in this state: scheduled, in_progress, completed, canceled, expired",
                  args: {
                    name: "string",
                    suggestions: [
                      "scheduled",
                      "in_progress",
                      "completed",
                      "canceled",
                      "expired",
                    ],
                  },
                },
                pageOption,
                perPageOption,
              ],
            },
            {
              name: "reschedule",
              description:
                "Reschedule a maintenance event for a Postgres branch",
              args: [databaseArg, branchArg, idArg],
              options: [
                {
                  name: "--to",
                  description:
                    "Time to move the event to, in RFC 3339 (e.g. 2026-11-08T03:00:00Z). Must be one of the event's available times",
                  args: { name: "string" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show a maintenance event for a Postgres branch",
              args: [databaseArg, branchArg, idArg],
            },
          ],
        },
        {
          name: "run",
          description: "Run maintenance for a Postgres or Neki branch now",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--update-postgres-minor-version",
              description:
                "Upgrade the branch to the latest PostgreSQL minor version during maintenance",
            },
          ],
        },
        {
          name: "window",
          description:
            "Show and set the maintenance window of a Postgres branch",
          subcommands: [
            {
              name: "set",
              description: "Change the maintenance window of a Postgres branch",
              args: [databaseArg, branchArg],
              options: [
                {
                  name: "--day",
                  description:
                    "Day of the week the window opens, in UTC: a day name or a number from 0 (Sunday) to 6 (Saturday)",
                  args: { name: "string" },
                },
                {
                  name: "--hour",
                  description:
                    "Hour of the day the window opens, in UTC (0-23)",
                  args: { name: "int" },
                },
              ],
            },
            {
              name: "show",
              description: "Show the maintenance window of a Postgres branch",
              args: [databaseArg, branchArg],
            },
          ],
        },
      ],
    },
    {
      name: ["parameters", "params"],
      description: "List the configuration parameters of a Postgres branch",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--namespace",
          description:
            "Only show parameters in this namespace (e.g. pgconf, pgbouncer, patroni)",
          args: { name: "string" },
        },
        {
          name: "--extension",
          description:
            "Only show parameters that configure an extension (--extension=false hides them)",
        },
        {
          name: "--internal",
          description:
            "Only show internal parameters, which cannot be changed (--internal=false hides them)",
        },
      ],
      subcommands: [
        {
          name: "list",
          description: "List the configuration parameters of a Postgres branch",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--namespace",
              description:
                "Only show parameters in this namespace (e.g. pgconf, pgbouncer, patroni)",
              args: { name: "string" },
            },
            {
              name: "--extension",
              description:
                "Only show parameters that configure an extension (--extension=false hides them)",
            },
            {
              name: "--internal",
              description:
                "Only show internal parameters, which cannot be changed (--internal=false hides them)",
            },
          ],
        },
      ],
    },
    {
      name: "processlist",
      description: "Show and kill running MySQL processes for a branch",
      hidden: true,
      subcommands: [
        {
          name: "kill",
          description: "Kill a running MySQL process on a branch (Vitess only)",
          args: [databaseArg, branchArg, idArg],
          options: [
            {
              name: "--keyspace",
              description:
                "Keyspace to target (required when the database has multiple keyspaces)",
              args: { name: "string" },
            },
            {
              name: "--shard",
              description:
                "Shard to target (required when the targeted keyspace is sharded)",
              args: { name: "string" },
            },
            {
              name: "--query",
              description:
                "Kill only the running query (KILL QUERY) instead of the whole connection",
            },
          ],
        },
        {
          name: "show",
          description: "Show the running MySQL processes for a branch",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--keyspace",
              description:
                "Keyspace to target (required when the database has multiple keyspaces)",
              args: { name: "string" },
            },
            {
              name: "--shard",
              description:
                "Shard to target (required when the targeted keyspace is sharded)",
              args: { name: "string" },
            },
          ],
        },
      ],
    },
    {
      name: "promote",
      description: "Promote a branch to production",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--cluster-size",
          description:
            "Cluster size to apply when promoting (for example, PS-10). PS-DEV is not permitted. Use 'pscale size cluster list' to see valid sizes",
          args: { name: "string" },
        },
        {
          name: "--replicas",
          description:
            "Postgres replica count, not including the primary. 0 is a single node. 2 to 8 is high availability",
          args: { name: "int" },
        },
      ],
    },
    {
      name: "query-patterns",
      description:
        "List, show, delete, and download query pattern reports for a MySQL branch",
      subcommands: [
        {
          name: ["delete", "rm"],
          description: "Delete a query pattern report",
          isDangerous: true,
          args: [databaseArg, branchArg, { name: "report-id" }],
          options: [
            {
              name: "--force",
              description: "Delete the report without confirmation",
              isDangerous: true,
            },
          ],
        },
        {
          name: "download",
          description:
            "Download a CSV report of the query patterns for a MySQL branch",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--output",
              description:
                "Output file name, or - to write to stdout. Defaults to query-patterns-<organization>-<database>-<branch>-<timestamp>.csv",
              args: { name: "string", template: "filepaths" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List query pattern reports for a branch",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--limit",
              description: "Number of results to return (max 100)",
              args: { name: "int", default: "25" },
            },
            {
              name: "--starting-after",
              description: "Cursor to fetch the next page of reports",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a query pattern report",
          args: [databaseArg, branchArg, { name: "report-id" }],
        },
      ],
    },
    {
      name: "refresh-schema",
      description: "Refresh the schema for a MySQL branch",
      args: [databaseArg, branchArg],
    },
    {
      name: "resize",
      description:
        "Change a Postgres branch's cluster size, replicas, or parameters",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--cluster-size",
          description:
            "New cluster size for the branch (a fully-qualified SKU name, e.g. PS_10_GCP_X86). Use 'pscale size cluster list --engine postgresql' to see the valid sizes",
          args: { name: "string" },
        },
        {
          name: "--replicas",
          description: "Desired number of replicas for the branch",
          args: { name: "int" },
        },
        {
          name: "--parameters",
          description:
            "Set a configuration parameter as namespace.name=value (e.g. pgconf.max_connections=200). Repeatable. Use 'pscale branch parameters list' to see available parameters",
          args: { name: "string" },
          isRepeatable: true,
        },
        waitOption,
        waitTimeoutOption,
      ],
      subcommands: [
        {
          name: "cancel",
          description: "Cancel the queued change request for a Postgres branch",
          args: [databaseArg, branchArg],
        },
        {
          name: "status",
          description: "Show the latest change request for a Postgres branch",
          args: [databaseArg, branchArg],
        },
      ],
    },
    {
      name: "router",
      description: "Manage routers for a Neki database branch",
      subcommands: [
        {
          name: "changes",
          description: "Manage changes to a Neki router",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a pending change to a Neki router",
              args: [databaseArg, branchArg, { name: "router" }, changeIdArg],
            },
            {
              name: ["list", "ls"],
              description: "List changes for a Neki router",
              args: [databaseArg, branchArg, { name: "router" }],
              options: [
                periodOption,
                completedAtOption,
                pageOption,
                perPageOption,
              ],
            },
            {
              name: ["show", "get"],
              description: "Show a change to a Neki router",
              args: [databaseArg, branchArg, { name: "router" }, changeIdArg],
            },
          ],
        },
        {
          name: "create",
          description: "Create a router for a Neki database branch",
          args: [databaseArg, branchArg, nameArg],
          options: [
            {
              name: "--size",
              description:
                "Router size SKU (e.g. NKR-5); the API picks a default if omitted",
              args: { name: "string" },
            },
            {
              name: "--replicas-per-cell",
              description: "Number of replicas in each cell",
              args: { name: "int" },
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a router from a Neki database branch",
          isDangerous: true,
          args: [databaseArg, branchArg, nameArg],
          options: [
            {
              name: "--force",
              description: "Delete the router without confirmation",
              isDangerous: true,
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List routers for a Neki database branch",
          args: [databaseArg, branchArg],
        },
        {
          name: ["show", "get"],
          description: "Show a router for a Neki database branch",
          args: [databaseArg, branchArg, nameArg],
        },
        {
          name: ["sizes", "size-skus"],
          description: "List available router sizes for a Neki database branch",
          args: [databaseArg, branchArg],
        },
        {
          name: "update",
          description: "Update a router for a Neki database branch",
          args: [databaseArg, branchArg, nameArg],
          options: [
            {
              name: "--size",
              description: "New router size SKU (e.g. NKR-5)",
              args: { name: "string" },
            },
            {
              name: "--replicas-per-cell",
              description: "New number of replicas in each cell",
              args: { name: "int" },
            },
            {
              name: "--autoscaling",
              description:
                "Whether the router scales horizontally within each cell",
            },
            {
              name: "--max-replicas-per-cell",
              description:
                "Maximum number of replicas in each cell when autoscaling",
              args: { name: "int" },
            },
            {
              name: "--target-cpu-utilization",
              description:
                "Target average CPU utilization percentage when autoscaling",
              args: { name: "int" },
            },
            parametersOption,
          ],
        },
      ],
    },
    {
      name: "routing-rules",
      description: "Fetch or update routing rules for a MySQL branch",
      subcommands: [
        {
          name: ["get", "show"],
          description: "Show the routing rules of a MySQL branch",
          args: [databaseArg, branchArg],
        },
        {
          name: "update",
          description: "Replace the routing rules of a MySQL branch",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--routing-rules",
              description: "The routing to set",
              args: { name: "string" },
            },
          ],
        },
      ],
    },
    {
      name: "safe-migrations",
      description: "Enable or disable safe migrations on a MySQL branch",
      subcommands: [
        {
          name: "disable",
          description: "Disable safe migrations for a MySQL branch",
          args: [databaseArg, branchArg],
        },
        {
          name: "enable",
          description: "Enable safe migrations for a MySQL branch",
          args: [databaseArg, branchArg],
        },
      ],
    },
    {
      name: "schema",
      description: "Show the schema of a branch",
      args: [databaseArg, branchArg],
      options: [
        webOption,
        {
          name: "--keyspace",
          description: "The keyspace in the branch (MySQL only)",
          args: { name: "string" },
        },
        {
          name: "--namespace",
          description: "The namespace in the branch (PostgreSQL only)",
          args: { name: "string" },
        },
      ],
    },
    {
      name: "shard",
      description: "Manage shards for a Neki database branch",
      subcommands: [
        {
          name: "assign",
          description: "Assign shards to a Neki configuration profile",
          args: [
            databaseArg,
            branchArg,
            { name: "shard-id", isVariadic: true },
          ],
          options: [
            {
              name: "--config-profile",
              description: "Configuration profile to assign the shards to",
              args: { name: "string" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create",
          description: "Create shards in a Neki configuration profile",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--config-profile",
              description:
                "Configuration profile that will host the new shards",
              args: { name: "string" },
              isRequired: true,
            },
            {
              name: "--count",
              description: "Number of shards to create",
              args: { name: "int", default: "1" },
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a shard from a Neki database branch",
          isDangerous: true,
          args: [databaseArg, branchArg, { name: "shard-id" }],
          options: [
            {
              name: "--force",
              description: "Delete the shard without confirmation",
              isDangerous: true,
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List shards for a Neki database branch",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--config-profile",
              description: "List shards assigned to this configuration profile",
              args: { name: "string" },
              exclusiveOn: ["--exclude-config-profile"],
            },
            {
              name: "--exclude-config-profile",
              description:
                "Exclude shards assigned to this configuration profile",
              args: { name: "string" },
              exclusiveOn: ["--config-profile"],
            },
            {
              name: ["--query", "-q"],
              description:
                "Search by shard name, display name, or configuration profile",
              args: { name: "string" },
            },
            pageOption,
            perPageOption,
          ],
        },
        {
          name: ["show", "get"],
          description: "Show a shard for a Neki database branch",
          args: [databaseArg, branchArg, { name: "shard-id" }],
        },
        {
          name: "update",
          description: "Update a Neki shard's display name",
          args: [databaseArg, branchArg, { name: "shard-id" }],
          options: [
            {
              name: "--display-name",
              description: "New display name; pass an empty string to clear it",
              args: { name: "string" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "show",
      description: "Show a specific branch of a database",
      args: [{ name: "source-database" }, branchArg],
      options: [
        {
          name: ["--web", "-w"],
          description: "Show a database branch in your web browser",
        },
      ],
    },
    {
      name: "sidecar",
      description:
        'Manage sidecars for a Neki database branch (deprecated: use "pscale branch config-profile update <database> <branch> <profile> --parameters sidecar.<name>=<value>" instead)',
      deprecated: true,
      subcommands: [
        {
          name: "changes",
          description: "Manage changes to a Neki sidecar",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a pending change to a Neki sidecar",
              args: [databaseArg, branchArg, sidecarArg, changeIdArg],
            },
            {
              name: ["list", "ls"],
              description: "List changes for a Neki sidecar",
              args: [databaseArg, branchArg, sidecarArg],
              options: [
                periodOption,
                completedAtOption,
                pageOption,
                perPageOption,
              ],
            },
            {
              name: ["show", "get"],
              description: "Show a change to a Neki sidecar",
              args: [databaseArg, branchArg, sidecarArg, changeIdArg],
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List sidecars for a Neki database branch",
          args: [databaseArg, branchArg],
        },
        {
          name: ["parameters", "params"],
          description: "List parameters for a Neki sidecar",
          args: [databaseArg, branchArg, sidecarArg],
        },
        {
          name: ["show", "get"],
          description: "Show a sidecar for a Neki database branch",
          args: [databaseArg, branchArg, sidecarArg],
        },
        {
          name: "update",
          description: "Update a sidecar for a Neki database branch",
          args: [databaseArg, branchArg, sidecarArg],
          options: [parametersOption],
        },
      ],
    },
    {
      name: "switch",
      description: "Switches the current project to use the specified branch",
      args: branchArg,
      options: [
        {
          name: "--database",
          description: "The database this project is using",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--parent-branch",
          description:
            "Parent branch to inherit from if a new branch is being created",
          args: { name: "string" },
        },
        {
          name: "--create",
          description:
            "If enabled, will automatically create the branch if it does not exist",
        },
        { name: "--wait", description: "Wait until the branch is ready" },
      ],
    },
    {
      name: "switchover",
      description:
        "Switch over the primary of a Postgres branch (Postgres only)",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--candidate",
          description:
            "Name of the replica to promote, as returned by 'branch infra'. Omit to select automatically. Only applies to branches with replicas",
          args: { name: "string" },
        },
      ],
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List switchovers for a Postgres branch",
          args: [databaseArg, branchArg],
          options: [pageOption, perPageOption],
        },
        {
          name: "show",
          description: "Show a switchover for a Postgres branch",
          args: [databaseArg, branchArg, idArg],
        },
      ],
    },
    {
      name: "update",
      description: "Update a branch's name or deletion protection",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--new-name",
          description: "Rename the branch",
          args: { name: "string" },
        },
        {
          name: "--deletion-protected",
          description:
            "Protect the branch from deletion (use --deletion-protected=false to disable)",
        },
      ],
    },
    branchVtctlCommand,
    {
      name: "vtgate",
      description: "Manage VTGate size and parameters for a Vitess branch",
      subcommands: [
        {
          name: "changes",
          description: "Manage VTGate parameter changes for a Vitess branch",
          subcommands: [
            {
              name: "cancel",
              description:
                "Cancel a pending VTGate parameter change for a Vitess branch",
              args: [databaseArg, branchArg, changeIdArg],
            },
            {
              name: ["list", "ls"],
              description: "List VTGate parameter changes for a Vitess branch",
              args: [databaseArg, branchArg],
              options: [pageOption, perPageDefault25Option],
            },
            {
              name: ["show", "get"],
              description: "Show a VTGate parameter change for a Vitess branch",
              args: [databaseArg, branchArg, changeIdArg],
            },
          ],
        },
        {
          name: ["parameters", "params"],
          description: "List the VTGate parameters of a Vitess branch",
          args: [databaseArg, branchArg],
        },
        {
          name: "resize",
          description: "Resize VTGates for a Vitess production branch",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--vtgate-size",
              description: "VTGate size SKU (e.g. VTG_320, VTG_1280)",
              args: { name: "string" },
            },
            {
              name: "--vtgate-count",
              description:
                "Number of VTGates per availability zone (minimum when autoscaling is enabled)",
              args: { name: "int" },
            },
            {
              name: "--vtgate-max-count",
              description:
                "Maximum VTGates per availability zone when autoscaling is enabled",
              args: { name: "int" },
            },
            {
              name: "--vtgate-autoscaling",
              description:
                "Enable or disable VTGate autoscaling (use --vtgate-autoscaling=false to disable)",
            },
            {
              name: "--vtgate-target-cpu-utilization",
              description:
                "Target CPU utilization percent when autoscaling is enabled",
              args: { name: "int" },
            },
          ],
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a queued VTGate resize for a Vitess branch",
              args: [databaseArg, branchArg],
            },
            {
              name: "status",
              description: "Show the latest VTGate resize for a Vitess branch",
              args: [databaseArg, branchArg],
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the current VTGate configuration for a Vitess branch",
          args: [databaseArg, branchArg],
        },
        {
          name: "update",
          description: "Change the VTGate parameters of a Vitess branch",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--parameters",
              description:
                "Set a parameter as vtgate.name=value (e.g. vtgate.max_memory_rows=500000). Repeatable. Use 'pscale branch vtgate parameters' to see available parameters",
              args: { name: "string" },
              isRepeatable: true,
            },
            {
              name: "--reset",
              description:
                "Set a parameter back to its default, as vtgate.name (e.g. vtgate.query-timeout). Repeatable",
              args: { name: "string" },
              isRepeatable: true,
            },
          ],
        },
      ],
    },
  ],
};

const completionCommand: Fig.Subcommand = {
  name: "completion",
  description: "Generate completion script for your shell",
  args: { name: "shell", suggestions: ["bash", "zsh", "fish", "powershell"] },
};

const connectCommand: Fig.Subcommand = {
  name: "connect",
  description:
    "Create a secure connection to a database and branch for a local client",
  args: [{ name: "database", isOptional: true }, branchOptionalArg],
  options: [
    orgLocalOption,
    {
      name: "--host",
      description: "Local host to bind and listen for connections",
      args: { name: "string", default: "127.0.0.1" },
    },
    {
      name: "--port",
      description: "Local port to bind and listen for connections",
      args: { name: "string", default: "3306" },
    },
    {
      name: "--no-random",
      description: "Do not pick a random port if the default port is in use",
    },
    {
      name: "--remote-addr",
      description:
        "PlanetScale Database remote network address. By default the remote address is populated automatically from the PlanetScale API",
      args: { name: "string" },
    },
    {
      name: "--execute",
      description:
        "Run this command after successfully connecting to the database",
      args: { name: "string" },
    },
    {
      name: "--execute-protocol",
      description:
        "Protocol for the exposed URL (by default DATABASE_URL) value in execute",
      args: { name: "string", default: "mysql2" },
    },
    {
      name: "--execute-env-url",
      description:
        "Environment variable name that contains the exposed Database URL",
      args: { name: "string", default: "DATABASE_URL" },
    },
    {
      name: "--role",
      description:
        "Role defines the access level, allowed values are: reader, writer, readwriter, admin. Defaults to 'reader' for replica passwords, otherwise defaults to 'admin'",
      args: {
        name: "string",
        suggestions: ["reader", "writer", "readwriter", "admin"],
      },
    },
    replicaOption,
    {
      name: "--mysql-auth-method",
      description:
        "MySQL auth method defines the authentication method returned for the MySQL protocol. Allowed values are: caching_sha2_password, mysql_native_password. Defaults to 'caching_sha2_password'",
      args: {
        name: "string",
        suggestions: ["caching_sha2_password", "mysql_native_password"],
      },
    },
  ],
};

const databaseCommand: Fig.Subcommand = {
  name: ["database", "db"],
  description: "Create, read, update, delete, and dump/restore databases",
  options: [orgOption],
  subcommands: [
    {
      name: "aggressive-cutover",
      description: "Show or change aggressive cutover for a database",
      subcommands: [
        {
          name: "disable",
          description: "Disable aggressive cutover for a database",
          args: databaseArg,
        },
        {
          name: "enable",
          description: "Enable aggressive cutover for a database",
          args: databaseArg,
        },
        {
          name: "show",
          description: "Show whether aggressive cutover is enabled",
          args: databaseArg,
        },
      ],
    },
    {
      name: "create",
      description: "Create a database instance",
      args: databaseArg,
      options: [
        {
          name: "--region",
          description: "Region for the database",
          args: { name: "string" },
        },
        {
          name: "--cluster-size",
          description:
            "Cluster size for Scaler Pro databases. Use `pscale size cluster list` to see the valid sizes",
          args: { name: "string" },
        },
        {
          name: "--replicas",
          description:
            "Number of replicas for Postgres or Neki databases. Use 0 for single-node Postgres or 2 or more for HA",
          args: { name: "int" },
        },
        {
          name: "--engine",
          description:
            "The database engine for the database. Supported values: mysql, postgresql, neki. Defaults to mysql",
          args: {
            name: "string",
            default: "mysql",
            suggestions: [
              { name: "mysql", description: "A Vitess database" },
              { name: "postgresql", description: "The fastest cloud Postgres" },
              { name: "neki", description: "Sharded PostgreSQL" },
            ],
          },
        },
        {
          name: "--major-version",
          description:
            "For Postgres or Neki databases, the Postgres major version to use. Defaults to the latest available major version",
          args: {
            name: "string",
            suggestions: [{ name: "17", description: "PostgreSQL 17" }],
          },
        },
        minStorageOption,
        maxStorageOption,
        {
          name: "--cloudflare-billing",
          description:
            'Cloudflare billing proof as JSON, or "@-" to read it from stdin',
          args: { name: "string" },
          hidden: true,
        },
        { name: "--wait", description: "Wait until the database is ready" },
      ],
    },
    {
      name: ["delete", "rm"],
      description: "Delete a database instance",
      isDangerous: true,
      args: databaseArg,
      options: [
        {
          name: "--force",
          description: "Delete a database without confirmation",
          isDangerous: true,
        },
      ],
    },
    {
      name: "dump",
      description: "Backup and dump your database (Vitess databases only)",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--keyspace",
          description:
            "Optionally target a specific keyspace to be dumped. Useful for sharded databases",
          args: { name: "string" },
        },
        {
          name: "--shard",
          description: "Optional shard to target, must be used with keyspace",
          args: { name: "string" },
        },
        localAddrOption,
        remoteAddrOption,
        {
          name: "--replica",
          description:
            "Dump from a replica tablet in the primary region (if available; will fail if not)",
        },
        {
          name: "--rdonly",
          description:
            "Dump from a rdonly tablet in the primary region (if available; will fail if not). Not for separate read-only regions — use --read-only-region instead",
        },
        {
          name: "--read-only-region",
          description:
            "Dump from a Vitess read-only region (region slug, display name, or id). List regions with: pscale database read-only-regions list <database>",
          args: { name: "string" },
        },
        {
          name: "--tables",
          description:
            "Comma separated string of tables to dump. By default all tables are dumped",
          args: { name: "string" },
        },
        {
          name: "--wheres",
          description:
            "Comma separated string of WHERE clauses to filter the tables to dump. Only used when you specify tables to dump. Default is not to filter dumped tables",
          args: { name: "string" },
        },
        {
          name: "--output",
          description:
            "Output directory of the dump. By default the dump is saved to a folder in the current directory",
          args: { name: "string", template: "folders" },
        },
        {
          name: "--threads",
          description:
            "Number of concurrent threads to use to dump the database",
          args: { name: "int", default: "16" },
        },
        {
          name: "--schema-only",
          description: "Only dump schema, skip table data",
        },
        {
          name: "--output-format",
          description:
            "Output format for data: sql (for MySQL, default), json, or csv",
          args: {
            name: "string",
            default: "sql",
            suggestions: ["sql", "json", "csv"],
          },
        },
        {
          name: "--columns",
          description:
            "Columns to include for specific tables (format: 'table:col1,col2'). Can be specified multiple times for different tables",
          args: { name: "string" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: ["ip-restriction", "cidr", "cidrs"],
      description: "Manage Postgres IP restrictions",
      subcommands: [
        {
          name: "create",
          description: "Create an IP restriction entry",
          args: databaseArg,
          options: [
            {
              name: "--cidrs",
              description:
                "IPv4 CIDR ranges to allow (required, repeatable or comma-separated)",
              args: { name: "strings" },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--schema",
              description: "Postgres schema to restrict (omit for all schemas)",
              args: { name: "string" },
            },
            {
              name: "--role",
              description: "Postgres role to restrict (omit for all roles)",
              args: { name: "string" },
            },
            {
              name: "--description",
              description: "Optional description for the IP restriction entry",
              args: { name: "string" },
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete an IP restriction entry",
          isDangerous: true,
          args: [databaseArg, { name: "entry-id" }],
          options: [
            {
              name: "--force",
              description:
                "Delete an IP restriction entry without confirmation",
              isDangerous: true,
            },
          ],
        },
        {
          name: "list",
          description: "List IP restriction entries for a Postgres database",
          args: databaseArg,
        },
        {
          name: "show",
          description: "Show an IP restriction entry",
          args: [databaseArg, { name: "entry-id" }],
        },
        {
          name: "update",
          description: "Update an IP restriction entry",
          args: [databaseArg, { name: "entry-id" }],
          options: [
            {
              name: "--cidrs",
              description:
                "IPv4 CIDR ranges to allow (replaces the existing list)",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--schema",
              description:
                "Postgres schema to restrict (empty for all schemas)",
              args: { name: "string" },
            },
            {
              name: "--role",
              description: "Postgres role to restrict (empty for all roles)",
              args: { name: "string" },
            },
            {
              name: "--description",
              description:
                "Description for the IP restriction entry (empty to clear)",
              args: { name: "string" },
            },
          ],
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List databases",
      options: [webOpenBrowserOption, pageOption, perPageOption],
    },
    {
      name: "read-only-regions",
      description: "List read-only regions for a database",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List read-only regions for a database",
          args: databaseArg,
          options: [pageOption, perPageOption],
        },
      ],
    },
    {
      name: "regions",
      description: "List regions available to a database",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List regions available to a database",
          args: databaseArg,
          options: [pageOption, perPageOption],
        },
      ],
    },
    {
      name: "restore-dump",
      description:
        "Restore your database from a local dump directory (Vitess databases only)",
      args: [databaseArg, branchArg],
      options: [
        localAddrOption,
        remoteAddrOption,
        {
          name: "--dir",
          description:
            "Directory containing the files to be used for the restore",
          args: { name: "string", template: "folders" },
          isRequired: true,
        },
        {
          name: "--overwrite-tables",
          description: "If true, will attempt to DROP TABLE before restoring",
        },
        {
          name: "--schema-only",
          description:
            "If true, will only restore the schema files during the restore process",
        },
        {
          name: "--data-only",
          description:
            "If true, will only restore the data files during the restore process",
        },
        {
          name: "--show-details",
          description:
            "If true, will add extra output during the restore process",
        },
        {
          name: "--starting-table",
          description:
            "Table to start from for the restore (useful for restarting from a certain point)",
          args: { name: "string" },
        },
        {
          name: "--ending-table",
          description:
            "Table to end at for the restore (useful for stopping restore at a certain point)",
          args: { name: "string" },
        },
        {
          name: "--allow-different-destination",
          description:
            "If true, will allow you to restore the files to a database with a different name without needing to rename the existing dump's files",
        },
        {
          name: "--max-query-size",
          description:
            "The maximum size allowed for each individual query processed by the command. Defaults to 16777216 bytes (16 MiB)",
          args: { name: "int", default: "16777216" },
        },
        {
          name: "--threads",
          description:
            "Number of concurrent threads to use to restore the database",
          args: { name: "int", default: "1" },
        },
      ],
    },
    {
      name: "show",
      description: "Retrieve information about a database, including settings",
      args: databaseArg,
      options: [webOpenBrowserOption],
    },
    {
      name: "throttler",
      description: "Show or update database throttler configuration",
      subcommands: [
        {
          name: "show",
          description: "Show database throttler configuration",
          args: databaseArg,
        },
        {
          name: "update",
          description: "Update database throttler configuration",
          args: databaseArg,
          options: [
            {
              name: "--ratio",
              description:
                "Throttler ratio 0-95 applied to all eligible keyspaces",
              args: { name: "int" },
            },
            {
              name: "--configuration",
              description: "Per-keyspace ratio as keyspace=ratio (repeatable)",
              args: { name: "string" },
              isRepeatable: true,
            },
          ],
        },
      ],
    },
    {
      name: "update",
      description: "Update a database's settings",
      args: databaseArg,
      options: [
        {
          name: "--new-name",
          description: "Rename the database (PostgreSQL and Vitess)",
          args: { name: "string" },
        },
        {
          name: "--default-branch",
          description:
            "The default branch of the database (PostgreSQL and Vitess)",
          args: { name: "string" },
        },
        {
          name: "--restrict-branch-region",
          description:
            "Limit branch creation to the database region (PostgreSQL and Vitess)",
        },
        {
          name: "--production-branch-web-console",
          description:
            "Allow the web console on the production branch (PostgreSQL and Vitess)",
        },
        {
          name: "--insights-raw-queries",
          description:
            "Collect full SQL queries for Insights (Vitess only; PostgreSQL uses pgconf.pginsights.raw_queries)",
        },
        {
          name: "--require-approval-for-deploy",
          description:
            "Require admin approval for deploy requests (Vitess only)",
        },
        {
          name: "--allow-data-branching",
          description: "Allow seeding branches with data (Vitess only)",
        },
        {
          name: "--allow-foreign-key-constraints",
          description: "Allow foreign key constraints (Vitess only)",
        },
        {
          name: "--automatic-migrations",
          description:
            "Copy migration data to new branches and deploy requests (Vitess only)",
        },
        {
          name: "--migration-framework",
          description: "Migration framework for the database (Vitess only)",
          args: { name: "string" },
        },
        {
          name: "--migration-table-name",
          description: "Migration table name for the database (Vitess only)",
          args: { name: "string" },
        },
      ],
    },
  ],
};

const dedicatedReadReplicaCommand: Fig.Subcommand = {
  name: "dedicated-read-replica",
  description: "Manage dedicated read replicas for a Postgres branch",
  options: [orgOption],
  subcommands: [
    {
      name: "create",
      description: "Create a dedicated read replica",
      args: [databaseArg, branchArg, nameArg],
      options: [
        {
          name: "--region",
          description: "Region slug for the dedicated read replica",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--replicas",
          description: "Number of instances serving reads",
          args: { name: "int", default: "1" },
        },
        {
          name: "--cluster-size",
          description: "Cluster size SKU; defaults to the primary cluster size",
          args: { name: "string" },
        },
      ],
    },
    {
      name: ["delete", "rm"],
      description: "Delete a dedicated read replica",
      isDangerous: true,
      args: [databaseArg, branchArg, nameArg],
      options: [
        {
          name: "--force",
          description: "Delete a dedicated read replica without confirmation",
          isDangerous: true,
        },
      ],
    },
    {
      name: "detach",
      description: "Detach a dedicated read replica into a standalone branch",
      hidden: true,
      args: [databaseArg, branchArg, nameArg],
      options: [
        {
          name: "--force",
          description: "Detach a dedicated read replica without confirmation",
          isDangerous: true,
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List dedicated read replicas for a Postgres branch",
      args: [databaseArg, branchArg],
    },
    {
      name: "show",
      description: "Show a dedicated read replica",
      args: [databaseArg, branchArg, nameArg],
    },
    {
      name: "update",
      description: "Update a dedicated read replica",
      args: [databaseArg, branchArg, nameArg],
      options: [
        {
          name: "--replicas",
          description: "Desired number of instances serving reads",
          args: { name: "int" },
        },
        {
          name: "--cluster-size",
          description: "New cluster size SKU",
          args: { name: "string" },
        },
        {
          name: "--parameters",
          description:
            "Set a parameter as namespace.name=value (for example pgconf.max_connections=300); repeatable",
          args: { name: "string" },
          isRepeatable: true,
        },
      ],
    },
  ],
};

const deployRequestCommand: Fig.Subcommand = {
  name: ["deploy-request", "dr"],
  description: "Create, review, diff, revert, and manage deploy requests",
  options: [orgOption],
  subcommands: [
    {
      name: "apply",
      description: "Apply changes to a gated deploy request",
      args: [databaseArg, numberArg],
    },
    {
      name: "cancel",
      description: "Cancel a deploy request",
      args: [databaseArg, numberArg],
    },
    {
      name: "close",
      description: "Close a deploy request",
      args: [databaseArg, numberArg],
    },
    {
      name: "create",
      description: "Create a deploy request from a branch",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--into",
          description:
            "Branch to deploy into. By default, it's the parent branch (if present) or the database's default branch",
          args: { name: "string" },
        },
        {
          name: "--notes",
          description: "Notes to include with the deploy request",
          args: { name: "string" },
        },
        {
          name: "--auto-delete-branch",
          description: "Delete the branch after the deploy request completes",
        },
        {
          name: "--aggressive-cutover",
          description:
            "Cut this deploy request over aggressively: Vitess kills blocking queries and transactions on the first cutover attempt instead of retrying for up to an hour. Does not change the database setting. Other deploy requests are unaffected",
        },
        {
          name: "--enable-auto-apply",
          description:
            "Enable auto-apply. The deploy request will automatically swap over to the new schema once ready",
        },
        {
          name: "--disable-auto-apply",
          description:
            "Disable auto-apply. The deploy request will wait for your confirmation before swapping to the new schema. Use 'deploy-request apply' to apply the changes manually",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy a specific deploy request",
      args: [databaseArg, { name: "number|branch" }],
      options: [
        { name: "--wait", description: "Wait until the branch is deployed" },
        {
          name: "--instant",
          description:
            "If enabled, the schema migrations from this deploy request will be applied using MySQL’s built-in ALGORITHM=INSTANT option. Deployment will be faster, but cannot be reverted",
        },
        {
          name: "--strategy",
          description: 'Deployment strategy: "serial" (default) or "parallel"',
          args: { name: "string" },
        },
      ],
    },
    {
      name: "deployment",
      description: "Show the deployment for a deploy request",
      args: [databaseArg, numberArg],
    },
    {
      name: "diff",
      description: "Show the diff of a deploy request",
      args: [databaseArg, numberArg],
      options: [webOption],
    },
    {
      name: "force-cutover",
      description: "Force cutover when a migration is delayed by a table lock",
      args: [databaseArg, numberArg],
      options: [
        {
          name: "--force",
          description: "Skip the confirmation prompt and force cutover now",
          isDangerous: true,
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List all deploy requests for a database",
      args: databaseArg,
      options: [webOpenBrowserOption],
    },
    {
      name: "operations",
      description: "List deploy operations for a deploy request",
      args: [databaseArg, numberArg],
    },
    {
      name: "queue",
      description: "Show the deploy queue for a database",
      args: databaseArg,
    },
    {
      name: "retry",
      description: "Retry failed operations on a deploy request",
      args: [databaseArg, numberArg],
    },
    {
      name: "revert",
      description: "Revert a deployed deploy request",
      args: [databaseArg, numberArg],
    },
    {
      name: "review",
      description: "Review a deploy request (approve, comment, etc...)",
      args: [databaseArg, numberArg],
      options: [
        { name: "--approve", description: "Approve a deploy request" },
        {
          name: "--comment",
          description: "Comment on a deploy request",
          args: { name: "string" },
        },
      ],
    },
    {
      name: "reviews",
      description: "List reviews for a deploy request",
      args: [databaseArg, numberArg],
    },
    {
      name: "show",
      description: "Show a specific deploy request",
      args: [databaseArg, { name: "number|branch" }],
      options: [webOption],
    },
    {
      name: "skip-revert",
      description: "Skip and close a pending deploy request revert",
      args: [databaseArg, numberArg],
    },
    {
      name: "storage-check",
      description: "Check storage readiness for a deploy request",
      args: [databaseArg, numberArg],
    },
    {
      name: "throttler",
      description: "Show or update deploy request throttler configuration",
      subcommands: [
        {
          name: "show",
          description: "Show throttler configuration for a deploy request",
          args: [databaseArg, numberArg],
        },
        {
          name: "update",
          description: "Update throttler configuration for a deploy request",
          args: [databaseArg, numberArg],
          options: [
            {
              name: "--ratio",
              description:
                "Throttler ratio 0-95 applied to all eligible keyspaces",
              args: { name: "int" },
            },
            {
              name: "--configuration",
              description: "Per-keyspace ratio as keyspace=ratio (repeatable)",
              args: { name: "string" },
              isRepeatable: true,
            },
          ],
        },
      ],
    },
    {
      name: "unblock",
      description: "Unblock the deploy queue after a failed deploy or revert",
      args: [databaseArg, numberArg],
    },
    {
      name: ["update", "edit"],
      description: "Update a deploy request",
      args: [databaseArg, numberArg],
      options: [
        {
          name: "--enable-auto-apply",
          description:
            "Enable auto-apply. The deploy request will automatically swap over to the new schema once ready",
        },
        {
          name: "--disable-auto-apply",
          description:
            "Disable auto-apply. The deploy request will wait for your confirmation before swapping to the new schema. Use 'deploy-request apply' to apply the changes manually",
        },
        {
          name: "--auto-delete-branch",
          description:
            "Delete the branch after the deploy request completes. Pass --auto-delete-branch=false to keep it",
        },
        {
          name: "--aggressive-cutover",
          description:
            "Cut this deploy request over aggressively: Vitess kills blocking queries and transactions on the first cutover attempt instead of retrying for up to an hour. Does not change the database setting. Other deploy requests are unaffected. Pass --aggressive-cutover=false to clear the opt-in",
        },
        {
          name: "--auto-apply",
          description:
            "Update the auto apply setting for a deploy request. Possible values: [enable,disable] (deprecated: use --enable-auto-apply or --disable-auto-apply instead)",
          args: { name: "string", suggestions: ["enable", "disable"] },
          deprecated: true,
        },
      ],
    },
  ],
};

const helpCommand: Fig.Subcommand = {
  name: "help",
  description: "Help about any command",
  args: { name: "command", isOptional: true },
};

const importCommand: Fig.Subcommand = {
  name: "import",
  description: "Import external databases into PlanetScale Postgres",
  options: [orgOption],
  subcommands: [
    {
      name: "d1",
      description: "Import Cloudflare D1 into PlanetScale Postgres",
      subcommands: [
        {
          name: ["complete", "teardown"],
          description: "Mark a D1 migration as complete in local state",
          args: [databaseArg, branchOptionalArg],
          options: [
            {
              name: "--migration-id",
              description: "Migration ID",
              args: { name: "string" },
              isRequired: true,
            },
            {
              name: "--force",
              description: "Skip confirmation prompt",
              isDangerous: true,
            },
          ],
        },
        {
          name: "convert-schema",
          description: "Convert SQLite schema in a D1 export to PostgreSQL DDL",
          options: [
            inputOption,
            {
              name: "--output",
              description: "Output PostgreSQL schema file",
              args: { name: "string", template: "filepaths" },
            },
          ],
        },
        { name: "doctor", description: "Check prerequisites for D1 migration" },
        {
          name: "lint",
          description: "Analyze a D1 SQL export for migration issues",
          options: [inputOption],
        },
        {
          name: "start",
          description: "Start importing a D1 export (lint + plan, then load)",
          args: [databaseArg, branchOptionalArg],
          options: [
            inputOption,
            {
              name: "--method",
              description:
                "Import method: pgloader (≥1GB) or psql (<1GB; schema via psql, data via pgloader)",
              args: { name: "string" },
            },
            {
              name: "--migration-id",
              description: "Existing migration ID from a prior start --dry-run",
              args: { name: "string" },
            },
            {
              name: "--dbname",
              description: "Destination PostgreSQL database name",
              args: { name: "string", default: "postgres" },
            },
            {
              name: "--dry-run",
              description:
                "Lint and build import plan without loading Postgres",
            },
            {
              name: "--force",
              description: "Skip confirmation prompt",
              isDangerous: true,
            },
          ],
        },
        {
          name: "status",
          description: "Show local migration state",
          args: [databaseArg, branchOptionalArg],
          options: [
            {
              name: "--migration-id",
              description: "Migration ID",
              args: { name: "string" },
              isRequired: true,
            },
          ],
        },
        {
          name: "verify",
          description:
            "Verify D1 import (row counts, sequences, coercion, content checks)",
          args: [databaseArg, branchOptionalArg],
          options: [
            {
              name: "--migration-id",
              description: "Migration ID from plan/import",
              args: { name: "string" },
              isRequired: true,
            },
            {
              name: "--input",
              description: "Path to original D1 SQL export",
              args: { name: "string", template: "filepaths" },
            },
            {
              name: "--sqlite",
              description: "Path to local SQLite file for source counts",
              args: { name: "string", template: "filepaths" },
            },
            {
              name: "--dbname",
              description: "Destination PostgreSQL database name",
              args: { name: "string", default: "postgres" },
            },
          ],
        },
      ],
    },
  ],
};

const insightsCommand: Fig.Subcommand = {
  name: "insights",
  description:
    "Query performance insights and schema recommendations for a database",
  options: [orgOption],
  subcommands: [
    {
      name: "agent",
      description: "Start and review Insights Agent runs and schedules",
      subcommands: [
        {
          name: ["runs", "run"],
          description: "List Insights Agent runs on a branch, newest first",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--fingerprint",
              description:
                "Only list runs that reviewed the slow query with this fingerprint",
              args: { name: "string" },
            },
            {
              name: "--keyspace",
              description: "Keyspace of the --fingerprint query",
              args: { name: "string" },
            },
            {
              name: "--schema-recommendation",
              description:
                "Only list runs that implemented the schema recommendation with this number",
              args: { name: "int" },
            },
            pageOption,
            perPageDefault25Option,
          ],
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a pending or running Insights Agent run",
              args: [databaseArg, branchArg, numberArg],
              options: [
                {
                  name: "--force",
                  description: "Cancel without confirmation",
                  isDangerous: true,
                },
              ],
            },
            {
              name: "create",
              description:
                "Start an Insights Agent run that reviews slow queries or implements schema recommendations",
              args: [databaseArg, branchArg],
              options: [
                {
                  name: "--fingerprint",
                  description:
                    "Fingerprint of a slow query to review (repeat or comma-separate)",
                  args: { name: "strings" },
                  isRepeatable: true,
                  exclusiveOn: ["--schema-recommendation"],
                  dependsOn: ["--keyspace"],
                },
                {
                  name: "--keyspace",
                  description: "Keyspace of the --fingerprint queries",
                  args: { name: "string" },
                  dependsOn: ["--fingerprint"],
                },
                {
                  name: "--schema-recommendation",
                  description:
                    "Number of a schema recommendation to implement (repeat or comma-separate)",
                  args: { name: "ints" },
                  isRepeatable: true,
                  exclusiveOn: ["--fingerprint"],
                },
              ],
            },
            {
              name: "show",
              description:
                "Show an Insights Agent run, its stages, and the pull request it opened",
              args: [databaseArg, branchArg, numberArg],
            },
          ],
        },
        {
          name: ["schedules", "schedule"],
          description: "List the Insights Agent schedules on a branch",
          args: [databaseArg, branchArg],
          subcommands: [
            {
              name: "update",
              description:
                "Turn on, turn off, or change the schedule for a run type",
              args: [databaseArg, branchArg, { name: "run-type" }],
              options: [
                { name: "--enabled", description: "Whether the schedule runs" },
                {
                  name: "--frequency",
                  description:
                    "How often the schedule runs: day, week, or month",
                  args: {
                    name: "string",
                    suggestions: ["day", "week", "month"],
                  },
                },
                {
                  name: "--time",
                  description: "The local time of day to run, in HH:MM format",
                  args: { name: "string" },
                },
                {
                  name: "--time-zone",
                  description:
                    "The IANA time zone for --time, such as America/New_York",
                  args: { name: "string" },
                },
                {
                  name: "--day-of-week",
                  description:
                    "The day of the week for weekly schedules, from 0 (Sunday) to 6 (Saturday)",
                  args: { name: "int" },
                },
                {
                  name: "--day-of-month",
                  description:
                    "The day of the month for monthly schedules, from 1 to 31. Shorter months run on their last day",
                  args: { name: "int" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "anomalies",
      description:
        "List detected resource anomalies (CPU, memory, IOPS, rows read/written)",
      args: [databaseArg, branchArg],
      subcommands: [
        {
          name: "show",
          description: "Show an anomaly and its correlated queries",
          args: [databaseArg, branchArg, { name: "anomaly-id" }],
        },
      ],
    },
    {
      name: "errors",
      description: "List queries that are failing with errors",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--limit",
          description: "Number of errors to return",
          args: { name: "int", default: "15" },
        },
        periodTimeAggregateOption,
      ],
      subcommands: [
        {
          name: "show",
          description: "Show the queries behind an error fingerprint",
          args: [databaseArg, branchArg, { name: "fingerprint" }],
          options: [
            {
              name: "--limit",
              description: "Number of queries to return",
              args: { name: "int", default: "25" },
            },
            periodTimeLookOption,
          ],
        },
      ],
    },
    {
      name: "queries",
      description: "List the top queries by a performance metric",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--sort",
          description:
            "Metric to rank queries by, one of: totalTime, count, errorCount, rowsRead, rowsReturned, rowsAffected, rowsReadPerReturned, p50Latency, p99Latency, maxLatency, cpuTime, ioTime, lastRun",
          args: {
            name: "string",
            default: "totalTime",
            suggestions: [
              "dimensions",
              "totalTime",
              "count",
              "errorCount",
              "rowsRead",
              "rowsReturned",
              "rowsAffected",
              "rowsReadPerReturned",
              "p50Latency",
              "p99Latency",
              "maxLatency",
              "cpuTime",
              "ioTime",
              "lastRun",
            ],
          },
        },
        {
          name: "--dir",
          description: "Sort direction: asc or desc",
          args: {
            name: "string",
            default: "desc",
            suggestions: ["asc", "desc"],
          },
        },
        {
          name: "--limit",
          description: "Number of queries to return",
          args: { name: "int", default: "15" },
        },
        periodTimeAggregateOption,
      ],
      subcommands: [
        {
          name: "samples",
          description: "List recent executions for a query fingerprint",
          args: [databaseArg, branchArg, { name: "fingerprint" }],
          options: [
            {
              name: "--limit",
              description: "Number of samples to return",
              args: { name: "int", default: "25" },
            },
            periodTimeLookOption,
            {
              name: "--keyspace",
              description:
                "Keyspace for the fingerprint (required; from insights queries)",
              args: { name: "string" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show an individual query execution",
          args: [databaseArg, branchArg, { name: "query-id" }],
        },
        {
          name: "summary",
          description: "Show aggregate statistics for a query fingerprint",
          args: [databaseArg, branchArg, { name: "fingerprint" }],
          options: [
            {
              name: "--keyspace",
              description:
                "Keyspace for the fingerprint (required; from insights queries)",
              args: { name: "string" },
              isRequired: true,
            },
            {
              name: "--period",
              description:
                "Named time period to summarize (for example 1h, 12h, or 1d)",
              args: { name: "string" },
            },
            fromOption,
            toOption,
          ],
        },
        {
          name: "traffic-budgets",
          description: "List traffic budgets affecting a query fingerprint",
          args: [databaseArg, branchArg, { name: "fingerprint" }],
          options: [
            {
              name: "--keyspace",
              description: "Keyspace for the fingerprint",
              args: { name: "string" },
            },
            pageOption,
            perPageDefault25Option,
          ],
        },
      ],
    },
    {
      name: ["recommendations", "recommendation"],
      description:
        "List schema recommendations (unused/duplicate indexes, bloat, missing indexes)",
      args: databaseArg,
      subcommands: [
        {
          name: "dismiss",
          description: "Dismiss a schema recommendation",
          args: [databaseArg, numberArg],
          options: [
            {
              name: "--reason",
              description: "Optional reason for dismissing the recommendation",
              args: { name: "string" },
            },
            {
              name: "--force",
              description: "Dismiss without confirmation",
              isDangerous: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show a schema recommendation and its DDL",
          args: [databaseArg, numberArg],
        },
      ],
    },
    {
      name: "tags",
      description: "List query tag keys (sqlcommenter / system)",
      args: [databaseArg, branchArg],
      options: [
        periodTimeLookOption,
        {
          name: "--fingerprint",
          description: "Only tags seen on this query fingerprint",
          args: { name: "string" },
        },
        {
          name: "--keyspace",
          description: "Filter tags to a keyspace",
          args: { name: "string" },
        },
        {
          name: "--limit",
          description: "Number of top values to show in human output",
          args: { name: "int", default: "3" },
        },
      ],
      subcommands: [
        {
          name: "show",
          description: "Show a query tag key and its values",
          args: [databaseArg, branchArg, { name: "tag" }],
          options: [
            periodTimeLookOption,
            {
              name: "--keyspace",
              description: "Filter tag values to a keyspace",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "summaries",
          description: "List query statistics grouped by tag keys",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--tags",
              description:
                "Tag key name from 'pscale insights tags' (repeatable; e.g. --tags username --tags app)",
              args: { name: "string" },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--sort",
              description:
                "Metric to rank by, one of: dimensions, totalTime, count, errorCount, rowsRead, rowsReturned, rowsAffected, rowsReadPerReturned, p50Latency, p99Latency, maxLatency, cpuTime, ioTime, lastRun",
              args: {
                name: "string",
                default: "totalTime",
                suggestions: [
                  "dimensions",
                  "totalTime",
                  "count",
                  "errorCount",
                  "rowsRead",
                  "rowsReturned",
                  "rowsAffected",
                  "rowsReadPerReturned",
                  "p50Latency",
                  "p99Latency",
                  "maxLatency",
                  "cpuTime",
                  "ioTime",
                  "lastRun",
                ],
              },
            },
            {
              name: "--dir",
              description: "Sort direction: asc or desc",
              args: {
                name: "string",
                default: "desc",
                suggestions: ["asc", "desc"],
              },
            },
            {
              name: "--limit",
              description: "Number of summary rows to return",
              args: { name: "int", default: "25" },
            },
            periodTimeAggregateOption,
          ],
        },
      ],
    },
  ],
};

const inspectCommand: Fig.Subcommand = {
  name: "inspect",
  description: "Run read-only diagnostic checks against a database branch",
  options: [
    orgOption,
    {
      name: "--keyspace",
      description:
        'Vitess keyspace to inspect, optionally with a shard and tablet type (e.g. mykeyspace, mykeyspace/-80, mykeyspace/-80@replica). List shards with: pscale sql <database> <branch> --query "SHOW VITESS_SHARDS". Defaults to @primary',
      args: { name: "string" },
      isPersistent: true,
    },
    {
      name: "--shard",
      description:
        "Neki shard ID to inspect. Pins the session to that shard. List shards with: pscale branch shard list <database> <branch>. Only supported for Neki databases",
      args: { name: "string" },
      isPersistent: true,
    },
    {
      name: "--router",
      description:
        "Neki router group to inspect through. List routers with: pscale branch router list <database> <branch>. Only supported for Neki databases",
      args: { name: "string" },
      isPersistent: true,
    },
    {
      name: "--dbname",
      description: "PostgreSQL database name to inspect",
      args: { name: "string", default: "postgres" },
      isPersistent: true,
    },
    {
      name: "--role",
      description:
        "Access role for the ephemeral credentials: reader, writer, readwriter, or admin. Defaults to reader. On PostgreSQL, the reader role may lack CONNECT on non-default databases; use --role admin if connecting with --dbname fails",
      args: {
        name: "string",
        suggestions: ["reader", "writer", "readwriter", "admin"],
      },
      isPersistent: true,
    },
    {
      name: "--replica",
      description: "Run checks against a replica instead of the primary",
      isPersistent: true,
    },
  ],
  subcommands: [
    {
      name: "all",
      description: "Run every applicable check and print a combined report",
      args: [databaseArg, branchArg],
    },
    {
      name: "bloat",
      description:
        "Wasted space: estimated bloat (PostgreSQL) or fragmentation (MySQL)",
      args: [databaseArg, branchArg],
    },
    {
      name: "calls",
      description: "Most frequently called queries (needs pg_stat_statements)",
      args: [databaseArg, branchArg],
    },
    {
      name: "index-sizes",
      description: "Indexes by size, largest first",
      args: [databaseArg, branchArg],
    },
    {
      name: "invalid-indexes",
      description:
        "Invalid indexes left over from failed concurrent index builds",
      args: [databaseArg, branchArg],
    },
    {
      name: "locks",
      description: "Blocking locks and the sessions stuck behind them",
      args: [databaseArg, branchArg],
    },
    {
      name: "long-running-queries",
      description: "Queries running longer than 5 minutes",
      args: [databaseArg, branchArg],
    },
    {
      name: "outliers",
      description:
        "Queries by cumulative execution time (needs pg_stat_statements)",
      args: [databaseArg, branchArg],
    },
    {
      name: "redundant-indexes",
      description: "Indexes made redundant by another index",
      args: [databaseArg, branchArg],
    },
    {
      name: "replication-slots",
      description: "Replication slots: status, WAL retention, and lag",
      args: [databaseArg, branchArg],
    },
    {
      name: "seq-scans",
      description: "Tables receiving full-table scans",
      args: [databaseArg, branchArg],
    },
    {
      name: "subscriptions",
      description: "Per-table logical replication progress on this subscriber",
      args: [databaseArg, branchArg],
    },
    {
      name: "table-sizes",
      description: "Tables by total size, largest first",
      args: [databaseArg, branchArg],
    },
    {
      name: "unused-indexes",
      description: "Indexes with little or no use — removal candidates",
      args: [databaseArg, branchArg],
    },
    {
      name: "vacuum-stats",
      description:
        "Autovacuum and autoanalyze health: last runs, dead tuples, thresholds",
      args: [databaseArg, branchArg],
    },
  ],
};

const keyspaceCommand: Fig.Subcommand = {
  name: "keyspace",
  description: "List, show, and manage keyspaces",
  options: [orgOption],
  subcommands: [
    {
      name: "create",
      description: "Create a new keyspace within a branch",
      args: [databaseArg, branchArg, keyspaceArg],
      options: [
        {
          name: "--shards",
          description: "Number of shards in the keyspace",
          args: { name: "int", default: "1" },
        },
        {
          name: "--cluster-size",
          description:
            "Cluster size for the keyspace. Use `pscale size cluster list` to get a list of valid sizes",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--additional-replicas",
          description:
            "Number of additional replicas per shard. By default, each production cluster includes 2 replicas",
          args: { name: "int" },
        },
        { name: "--wait", description: "Wait until the keyspace is ready" },
      ],
    },
    {
      name: "create-external",
      description: "Create an external keyspace on a branch",
      args: [databaseArg, branchArg, keyspaceArg],
      options: [
        {
          name: "--host",
          description: "Host name of the external database",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--source-database",
          description: "Name of the database on the external MySQL server",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--username",
          description: "Username to connect to the external database",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--password",
          description: "Password to connect to the external database",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--port",
          description: "Port number to connect to the external database",
          args: { name: "int", default: "3306" },
        },
        {
          name: "--ssl-mode",
          description:
            "SSL verification mode, allowed values: disabled, preferred, required, verify_ca, verify_identity",
          args: {
            name: "string",
            suggestions: [
              "disabled",
              "preferred",
              "required",
              "verify_ca",
              "verify_identity",
            ],
          },
          isRequired: true,
        },
        {
          name: "--ssl-certificate-authority",
          description: "CA certificate chain, or a path to a PEM file",
          args: { name: "string" },
        },
        {
          name: "--ssl-client-key",
          description: "Client private key, or a path to a PEM file",
          args: { name: "string" },
        },
        {
          name: "--ssl-client-certificate",
          description: "Client certificate, or a path to a PEM file",
          args: { name: "string" },
        },
        {
          name: "--ssl-server-name",
          description: "SSL server name override",
          args: { name: "string" },
        },
        {
          name: "--min-tls-version",
          description: "Minimum TLS version",
          args: { name: "string" },
        },
        {
          name: "--tablet-cell",
          description: "Cell where the external tablet runs",
          args: { name: "string" },
        },
        {
          name: "--cluster-size",
          description:
            "External tablet size. Optional; defaults from source storage. Use `pscale size cluster list` for valid sizes",
          args: { name: "string" },
        },
        {
          name: "--skip-lint-errors",
          description:
            "Create even if datasource lint reports errors, when the organization allows it",
        },
        {
          name: "--dry-run",
          description:
            "Check compatibility with the external database without creating the keyspace",
        },
        { name: "--wait", description: "Wait until the keyspace is ready" },
      ],
    },
    {
      name: ["delete", "rm"],
      description: "Delete a keyspace from a branch",
      isDangerous: true,
      args: [databaseArg, branchArg, keyspaceArg],
      options: [
        {
          name: "--force",
          description: "Delete a keyspace without confirmation",
          isDangerous: true,
        },
      ],
    },
    {
      name: "list",
      description: "List all keyspaces within a branch",
      args: [databaseArg, branchArg],
    },
    {
      name: ["parameters", "params"],
      description:
        "List and change the VTTablet and MySQL parameters of a keyspace",
      args: [databaseArg, branchArg, keyspaceArg],
      options: [
        {
          name: "--namespace",
          description:
            "Only show parameters in this namespace: vttablet or mysqld",
          args: { name: "string", suggestions: ["vttablet", "mysqld"] },
        },
      ],
      subcommands: [
        {
          name: "changes",
          description: "Manage parameter changes to a keyspace",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a pending parameter change to a keyspace",
              args: [databaseArg, branchArg, keyspaceArg, changeIdArg],
            },
            {
              name: ["list", "ls"],
              description: "List parameter changes to a keyspace",
              args: [databaseArg, branchArg, keyspaceArg],
              options: [pageOption, perPageDefault25Option],
            },
            {
              name: ["show", "get"],
              description: "Show a parameter change to a keyspace",
              args: [databaseArg, branchArg, keyspaceArg, changeIdArg],
            },
          ],
        },
        {
          name: "list",
          description: "List the VTTablet and MySQL parameters of a keyspace",
          args: [databaseArg, branchArg, keyspaceArg],
          options: [
            {
              name: "--namespace",
              description:
                "Only show parameters in this namespace: vttablet or mysqld",
              args: { name: "string", suggestions: ["vttablet", "mysqld"] },
            },
          ],
        },
        {
          name: "set",
          description: "Change the VTTablet and MySQL parameters of a keyspace",
          args: [databaseArg, branchArg, keyspaceArg],
          options: [
            {
              name: "--parameters",
              description:
                "Set a parameter as namespace.name=value, where namespace is vttablet or mysqld (e.g. vttablet.vreplication-parallel-insert-workers=4). Repeatable. Use 'pscale keyspace parameters list' to see available parameters",
              args: { name: "string" },
              isRepeatable: true,
            },
            {
              name: "--reset",
              description:
                "Set a parameter back to its default, as namespace.name (e.g. vttablet.vreplication-parallel-insert-workers). Repeatable",
              args: { name: "string" },
              isRepeatable: true,
            },
          ],
        },
      ],
    },
    {
      name: "read-only-regions",
      description: "List read-only regions for a keyspace",
      args: [databaseArg, branchArg, keyspaceArg],
      subcommands: [
        {
          name: "add",
          description: "Add a read-only region to a keyspace",
          args: [databaseArg, branchArg, keyspaceArg, { name: "region" }],
          options: [
            {
              name: "--cluster-size",
              description:
                "Cluster size for the keyspace in this read-only region. Use `pscale size cluster list` to get a list of valid sizes",
              args: { name: "string" },
            },
            {
              name: "--replicas",
              description:
                "Number of replicas per shard in this read-only region",
              args: { name: "int" },
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a read-only region from a keyspace",
          args: [databaseArg, branchArg, keyspaceArg, { name: "region" }],
        },
        {
          name: "update",
          description: "Update a keyspace's read-only region",
          args: [databaseArg, branchArg, keyspaceArg, { name: "region" }],
          options: [
            {
              name: "--cluster-size",
              description:
                "Cluster size for the keyspace in this read-only region. Use `pscale size cluster list` to get a list of valid sizes",
              args: { name: "string" },
            },
            {
              name: "--replicas",
              description:
                "Number of replicas per shard in this read-only region",
              args: { name: "int" },
            },
          ],
        },
      ],
    },
    {
      name: "resize",
      description: "Resize a keyspace within a branch",
      args: [databaseArg, branchArg, keyspaceArg],
      options: [
        {
          name: "--additional-replicas",
          description:
            "Number of additional replicas per shard. By default, each production cluster includes 2 replicas",
          args: { name: "int" },
        },
        {
          name: "--cluster-size",
          description:
            "Cluster size for the keyspace. Use `pscale size cluster list` to get a list of valid sizes",
          args: { name: "string" },
        },
      ],
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancels a queued resize operation for a branch's keyspace",
          args: [databaseArg, branchArg, keyspaceArg],
        },
        {
          name: "status",
          description: "Show the last resize operation on a branch's keyspace",
          args: [databaseArg, branchArg, keyspaceArg],
        },
      ],
    },
    {
      name: "rollout-status",
      description: "Show keyspace rollout status per shard",
      args: [databaseArg, branchArg, keyspaceArg],
    },
    {
      name: "settings",
      description: "Show the settings for a keyspace",
      args: [databaseArg, branchArg, keyspaceArg],
    },
    {
      name: "show",
      description: "Show a keyspace within a branch",
      args: [databaseArg, branchArg, keyspaceArg],
    },
    {
      name: "update-settings",
      description: "Update the settings for a keyspace",
      args: [databaseArg, branchArg, keyspaceArg],
      options: [
        {
          name: "--replication-durability-constraints-strategy",
          description:
            "By default, replication is configured to maximize safety and data integrity. This setting may be relaxed to favor increased performance and reduced replication lag. Options: maximum, dynamic, minimum",
          args: {
            name: "string",
            default: "maximum",
            suggestions: ["maximum", "dynamic", "minimum"],
          },
        },
        {
          name: "--vreplication-optimize-inserts",
          description:
            "When enabled, skips sending INSERT events for rows that have yet to be replicated",
        },
        {
          name: "--vreplication-enable-noblob-binlog-mode",
          description:
            "When enabled, omits changed BLOB and TEXT columns from replication events, which reduces binlog sizes",
        },
        {
          name: "--vreplication-batch-replication-events",
          description:
            "When enabled, sends fewer queries to MySQL to improve performance",
        },
        {
          name: "--throttler-enabled",
          description:
            "Pause schema migrations and VReplication workflows when replication lag rises above the threshold",
        },
        {
          name: "--throttler-threshold",
          description:
            "Replication lag in seconds above which migrations and workflows are paused",
          args: { name: "float", default: "5" },
        },
        {
          name: "--max-rollout",
          description:
            "Maximum number of shards to roll out changes to concurrently (1-32)",
          args: { name: "int", default: "1" },
        },
        {
          name: "--disk-scaling-strategy",
          description:
            "The disk scaling strategy (grow, disable, shrink). 'grow' lets dedicated disks grow automatically up to --max-storage; 'disable' turns autoscaling off; 'shrink' recreates disks at --storage and then disables autoscaling",
          args: {
            name: "string",
            default: "grow",
            suggestions: ["grow", "disable", "shrink"],
          },
        },
        {
          name: "--max-storage",
          description:
            "The maximum size that dedicated disks may autoscale to, in bytes or with a unit such as 200GiB or 1TiB. Must be at least 12 GiB and no smaller than the current disk size. Cannot be raised above the organization default (4 TiB, or 16 TiB for managed tenancy). Read-only while PlanetScale staff have raised it above that default",
          args: { name: "string" },
        },
        {
          name: "--storage",
          description:
            "The disk size to recreate disks at, in bytes or with a unit such as 200GiB or 1TiB. Must be a multiple of 1 GiB. Only accepted when the disk scaling strategy is shrink, either passed with --disk-scaling-strategy or already set on the keyspace",
          args: { name: "string" },
        },
        {
          name: ["--interactive", "-i"],
          description: "Run the command in interactive mode",
        },
      ],
    },
    {
      name: "vschema",
      description: "Update or show the VSchema of a branch",
      subcommands: [
        {
          name: "show",
          description: "Show the VSchema of a keyspace in a branch",
          args: [databaseArg, branchArg, keyspaceArg],
        },
        {
          name: "update",
          description: "Update the VSchema of a keyspace",
          args: [databaseArg, branchArg, keyspaceArg],
          options: [
            {
              name: "--vschema",
              description: "The path to the VSchema file",
              args: { name: "string", template: "filepaths" },
            },
          ],
        },
      ],
    },
  ],
};

const loginCommand: Fig.Subcommand = {
  name: "login",
  description: "Authenticate with the PlanetScale API",
  hidden: true,
  options: [
    clientIdOption,
    clientSecretOption,
    {
      name: "--api-url",
      description: "The PlanetScale Auth API base URL",
      args: { name: "string", default: "https://auth.planetscale.com/" },
    },
  ],
};

const logoutCommand: Fig.Subcommand = {
  name: "logout",
  description: "Log out of the PlanetScale API",
  hidden: true,
  options: [
    clientIdOption,
    clientSecretOption,
    {
      name: "--api-url",
      description: "The PlanetScale base API URL",
      args: { name: "string", default: "https://auth.planetscale.com/" },
    },
  ],
};

const logsCommand: Fig.Subcommand = {
  name: "logs",
  description: "Query logs for a PostgreSQL or Neki branch",
  args: [databaseArg, branchArg],
  options: [
    orgLocalOption,
    {
      name: "--query",
      description: "Text or LogsQL expression to search for",
      args: { name: "string" },
    },
    {
      name: "--period",
      description: "Time period to query: 15m, 1h, 3h, 6h, 12h, 1d, 7d, or 8d",
      args: { name: "string", default: "1h" },
    },
    fromOption,
    toOption,
    {
      name: "--level",
      description:
        "Log levels to include (comma-separated or repeatable): DEBUG, INFO, WARNING, ERROR",
      args: {
        name: "strings",
        suggestions: ["DEBUG", "INFO", "WARNING", "ERROR"],
      },
      isRepeatable: true,
    },
    {
      name: "--server",
      description:
        "Servers to include (comma-separated or repeatable); primary selects the primary role, other values select pod names",
      args: { name: "strings" },
      isRepeatable: true,
    },
    {
      name: "--shard",
      description: "Neki shards to include (comma-separated or repeatable)",
      args: { name: "strings" },
      isRepeatable: true,
    },
    {
      name: "--limit",
      description: "Maximum number of logs to return",
      args: { name: "int", default: "100" },
    },
    pageDefault1Option,
  ],
};

const maintenanceCommand: Fig.Subcommand = {
  name: "maintenance",
  description: "List and show maintenance schedules for a database",
  options: [orgOption],
  subcommands: [
    {
      name: ["list", "ls"],
      description: "List maintenance schedules for a database",
      args: databaseArg,
    },
    {
      name: "show",
      description: "Show a maintenance schedule",
      args: [databaseArg, { name: "schedule-id" }],
    },
    {
      name: "windows",
      description: "List maintenance windows for a schedule",
      args: [databaseArg, { name: "schedule-id" }],
    },
  ],
};

const metricsCommand: Fig.Subcommand = {
  name: "metrics",
  description: "Query historical and current metrics for a database branch",
  options: [orgOption],
  subcommands: [
    {
      name: "instant",
      description: "Show current metric values",
      args: [databaseArg, branchArg],
      options: [
        metricOption,
        {
          name: "--role",
          description: "Filter by Postgres role",
          args: { name: "string" },
        },
        shardOption,
        {
          name: "--container",
          description: "Filter by container",
          args: { name: "string" },
        },
        {
          name: "--pod",
          description: "Filter by pod",
          args: { name: "string" },
        },
      ],
    },
    {
      name: "keyspace-tables",
      description: "Show table storage metrics by keyspace",
      args: [databaseArg, branchArg],
    },
    {
      name: "queries",
      description: "Show metrics for SQL queries",
      args: [databaseArg, branchArg],
      options: [
        metricOption,
        periodNamedTimeOption,
        fromOption,
        toOption,
        stepsOption,
        tabletTypeOption,
        budgetIdOption,
        ruleIdOption,
        searchOption,
        {
          name: "--query-id",
          description: "Filter by query pattern ID (repeat or comma-separate)",
          args: { name: "strings" },
          isRepeatable: true,
        },
        {
          name: "--fingerprint",
          description: "Filter by query fingerprint",
          args: { name: "string" },
        },
        {
          name: "--keyspace",
          description: "Keyspace for the query fingerprint",
          args: { name: "string" },
        },
      ],
    },
    {
      name: "report",
      description: "Produce a grouped performance metrics report",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--period",
          description:
            "Named report period (15m, 1h, 3h, 6h, 12h, 1d, 2d, 7d, or 8d)",
          args: { name: "string", default: "1d" },
        },
        fromOption,
        toOption,
        {
          name: "--steps",
          description: "Requested number of historical data points",
          args: { name: "int" },
        },
      ],
    },
    {
      name: "show",
      description: "Show historical metric series",
      args: [databaseArg, branchArg],
      options: [
        metricOption,
        periodNamedTimeOption,
        fromOption,
        toOption,
        stepsOption,
        tabletTypeOption,
        keyspaceFilterOption,
        shardOption,
        {
          name: "--role",
          description: "Filter by Postgres role",
          args: { name: "string" },
        },
        {
          name: "--container",
          description: "Filter by container",
          args: { name: "string" },
        },
        {
          name: "--pod",
          description: "Filter by one pod",
          args: { name: "string" },
        },
        {
          name: "--pods",
          description: "Filter by pods (repeat or comma-separate)",
          args: { name: "strings" },
          isRepeatable: true,
        },
        {
          name: "--query-id",
          description: "Filter by query pattern ID (repeat or comma-separate)",
          args: { name: "strings" },
          isRepeatable: true,
        },
        {
          name: "--fingerprint",
          description: "Filter by query fingerprint",
          args: { name: "string" },
        },
        budgetIdOption,
        ruleIdOption,
        searchOption,
      ],
    },
    {
      name: "tables",
      description: "Show table storage metrics",
      args: [databaseArg, branchArg],
    },
    {
      name: "tablets",
      description: "Show tablet metric series",
      args: [databaseArg, branchArg],
      options: [
        metricOption,
        periodNamedTimeOption,
        fromOption,
        toOption,
        stepsOption,
        keyspaceFilterOption,
        shardOption,
        {
          name: "--pod",
          description: "Filter by pod",
          args: { name: "string" },
        },
        {
          name: "--workflow",
          description: "Filter by VReplication workflow",
          args: { name: "string" },
        },
      ],
      subcommands: [
        {
          name: "instant",
          description: "Show current tablet metric values",
          args: [databaseArg, branchArg],
          options: [metricOption, keyspaceFilterOption, shardOption],
        },
      ],
    },
    {
      name: "tags",
      description: "Show metrics grouped by query tags",
      args: [databaseArg, branchArg],
      options: [
        metricOption,
        periodNamedTimeOption,
        fromOption,
        toOption,
        stepsOption,
        tabletTypeOption,
        budgetIdOption,
        ruleIdOption,
        searchOption,
        {
          name: "--tag-set",
          description:
            "Tag set as key=value pairs. Repeat for independent series; comma-separate keys in one set (for example Busername=alice,Senv=production)",
          args: { name: "string" },
          isRepeatable: true,
        },
      ],
    },
  ],
};

const oidcTrustCommand: Fig.Subcommand = {
  name: "oidc-trust",
  description: "Manage OIDC trusts",
  options: [orgOption],
  subcommands: [
    {
      name: "create",
      description: "Create an OIDC trust",
      options: [
        {
          name: "--name",
          description: "The display name of the trust",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--provider",
          description:
            "The identity provider; run 'pscale oidc-trust providers list' to list them",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--max-ttl",
          description: "The maximum token lifetime in seconds",
          args: { name: "int" },
          isRequired: true,
        },
        {
          name: "--condition",
          description:
            "A claim the token must match, as claim=value; repeatable",
          args: { name: "string" },
          isRepeatable: true,
        },
        {
          name: "--org-access",
          description: "An organization access to grant; repeatable",
          args: { name: "string" },
          isRepeatable: true,
        },
        {
          name: "--database-access",
          description:
            "A database access to grant, as database:access; repeatable",
          args: { name: "string" },
          isRepeatable: true,
        },
        {
          name: "--all-databases-access",
          description: "An access to grant on all databases; repeatable",
          args: { name: "string" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an OIDC trust",
      isDangerous: true,
      args: { name: "trust-id" },
      options: [
        {
          name: "--force",
          description: "Delete the OIDC trust without confirmation",
          isDangerous: true,
        },
      ],
    },
    { name: "list", description: "List OIDC trusts" },
    {
      name: "providers",
      description: "List and show OIDC trust providers",
      subcommands: [
        { name: ["list", "ls"], description: "List OIDC trust providers" },
        {
          name: "show",
          description:
            "Show an OIDC trust provider and the claims in its tokens",
          args: nameArg,
        },
      ],
    },
    {
      name: "show",
      description: "Show an OIDC trust",
      args: { name: "trust-id" },
    },
    {
      name: "update",
      description: "Update an OIDC trust",
      args: { name: "trust-id" },
      options: [
        {
          name: "--name",
          description: "The display name of the trust",
          args: { name: "string" },
        },
        {
          name: "--max-ttl",
          description: "The maximum token lifetime in seconds",
          args: { name: "int" },
        },
        {
          name: "--condition",
          description:
            "A claim the token must match, as claim=value; repeatable; replaces all conditions",
          args: { name: "string" },
          isRepeatable: true,
        },
        {
          name: "--org-access",
          description:
            "An organization access to grant; repeatable; replaces all org and database accesses",
          args: { name: "string" },
          isRepeatable: true,
        },
        {
          name: "--database-access",
          description:
            "A database access to grant, as database:access; repeatable; replaces all org and database accesses",
          args: { name: "string" },
          isRepeatable: true,
        },
        {
          name: "--all-databases-access",
          description:
            "An access to grant on all databases; repeatable; replaces all all-databases accesses",
          args: { name: "string" },
          isRepeatable: true,
        },
      ],
    },
  ],
};

const orgCommand: Fig.Subcommand = {
  name: "org",
  description: "Manage organizations",
  subcommands: [
    {
      name: ["list", "ls"],
      description: "List the currently active organizations",
    },
    {
      name: "member",
      description: "List, show, update, and remove organization members",
      options: [orgOption],
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List members of an organization",
          options: [
            {
              name: "--query",
              description: "Filter members by name or email prefix",
              args: { name: "string" },
            },
            pageOption,
            perPageOption,
          ],
        },
        {
          name: ["remove", "rm"],
          description: "Remove a member from an organization",
          args: { name: "email|user-id" },
          options: [
            {
              name: "--force",
              description: "Remove the member without confirmation",
              isDangerous: true,
            },
            {
              name: "--delete-passwords",
              description:
                "Delete passwords created by the member. Cannot be used when removing yourself",
            },
            {
              name: "--delete-service-tokens",
              description:
                "Delete service tokens created by the member. Cannot be used when removing yourself",
            },
          ],
        },
        {
          name: "show",
          description: "Show an organization member",
          args: { name: "email|user-id" },
        },
        {
          name: "update",
          description: "Update an organization member's role",
          args: { name: "email|user-id" },
          options: [
            {
              name: "--role",
              description: "Role to assign: admin, member, or analyst",
              args: {
                name: "string",
                suggestions: ["admin", "member", "analyst"],
              },
            },
          ],
        },
      ],
    },
    { name: "show", description: "Display the currently active organization" },
    {
      name: "sso",
      description: "Manage organization SSO",
      options: [orgOption],
      subcommands: [
        {
          name: "configure",
          description: "Open the identity provider setup portal",
        },
        {
          name: "directory",
          description: "Enable or disable directory sync",
          subcommands: [
            {
              name: "disable",
              description: "Disable directory sync",
              options: [
                {
                  name: "--force",
                  description: "Disable directory sync without confirmation",
                  isDangerous: true,
                },
              ],
            },
            {
              name: "enable",
              description: "Open the directory sync setup portal",
            },
          ],
        },
        {
          name: "disable",
          description: "Disable organization SSO",
          options: [
            {
              name: "--force",
              description: "Disable SSO without confirmation",
              isDangerous: true,
            },
          ],
        },
        {
          name: "domain",
          description: "List, show, verify, and delete SSO email domains",
          subcommands: [
            {
              name: ["delete", "rm"],
              description: "Delete an SSO email domain",
              isDangerous: true,
              args: { name: "domain-id" },
              options: [
                {
                  name: "--force",
                  description: "Delete the domain without confirmation",
                  isDangerous: true,
                },
              ],
            },
            { name: ["list", "ls"], description: "List SSO email domains" },
            {
              name: "show",
              description: "Show an SSO email domain",
              args: { name: "domain-id" },
            },
            {
              name: "verify",
              description: "Open the domain verification portal",
              options: [
                {
                  name: "--wait",
                  description:
                    "After opening the portal, wait until a domain is verified",
                },
                {
                  name: "--wait-timeout",
                  description: "Maximum time to wait with --wait",
                  args: { name: "duration" },
                },
              ],
            },
          ],
        },
        { name: "enable", description: "Enable organization SSO" },
        { name: "show", description: "Show organization SSO status" },
      ],
    },
    {
      name: "switch",
      description: "Switch the currently active organization",
      args: { name: "organization" },
      options: [
        {
          name: "--save-config",
          description:
            "Path to store the organization. By default the configuration is deducted automatically based on where pscale is executed",
          args: { name: "string", template: "filepaths" },
        },
      ],
    },
    {
      name: "team",
      description: "Manage organization teams",
      options: [orgOption],
      subcommands: [
        {
          name: "create",
          description: "Create an organization team",
          options: [
            {
              name: "--name",
              description: "Name of the team",
              args: { name: "string" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the team",
              args: { name: "string" },
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete an organization team",
          isDangerous: true,
          args: teamArg,
          options: [
            {
              name: "--force",
              description: "Delete the team without confirmation",
              isDangerous: true,
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List organization teams",
          options: [
            {
              name: "--query",
              description: "Filter teams by name",
              args: { name: "string" },
            },
            pageOption,
            perPageOption,
          ],
        },
        {
          name: "member",
          description: "Manage organization team members",
          subcommands: [
            {
              name: "add",
              description: "Add an organization member to a team",
              args: [teamArg, { name: "email-or-id" }],
            },
            {
              name: ["list", "ls"],
              description: "List members of an organization team",
              args: teamArg,
              options: [pageOption, perPageOption],
            },
            {
              name: ["remove", "rm"],
              description: "Remove a member from an organization team",
              args: [teamArg, { name: "email-or-id" }],
              options: [
                {
                  name: "--force",
                  description: "Remove the team member without confirmation",
                  isDangerous: true,
                },
                {
                  name: "--delete-passwords",
                  description: "Delete passwords created through this team",
                },
              ],
            },
          ],
        },
        {
          name: "show",
          description: "Show an organization team",
          args: { name: "team-id-or-name" },
        },
        {
          name: "update",
          description: "Update an organization team",
          args: teamArg,
          options: [
            {
              name: "--name",
              description: "New name for the team",
              args: { name: "string" },
            },
            {
              name: "--description",
              description: "New description for the team",
              args: { name: "string" },
            },
          ],
        },
      ],
    },
    {
      name: "update",
      description: "Update an organization's settings",
      options: [
        orgLocalOption,
        {
          name: "--billing-email",
          description: "The billing email for the organization",
          args: { name: "string" },
        },
        {
          name: "--idp-managed-roles",
          description:
            "Whether the identity provider manages organization roles through directory sync",
        },
        {
          name: "--idp-sso-managed-roles",
          description:
            "Whether the identity provider manages organization roles through SSO",
        },
        {
          name: "--spend-alert",
          description: "Enable or disable billing spend alerts",
        },
        {
          name: "--spend-alert-amount",
          description: "Monthly spend amount that triggers spend alerts",
          args: { name: "int" },
        },
      ],
    },
  ],
};

const passwordCommand: Fig.Subcommand = {
  name: "password",
  description: "Create, list, update, and delete branch passwords",
  options: [orgOption],
  subcommands: [
    {
      name: ["create", "p"],
      description: "Create password to access a branch's data",
      args: [databaseArg, branchArg, nameArg],
      options: [
        {
          name: "--role",
          description:
            "Role defines the access level, allowed values are: reader, writer, readwriter, admin. Defaults to 'reader' for replica and read-only region passwords, otherwise defaults to 'admin'",
          args: {
            name: "string",
            suggestions: ["reader", "writer", "readwriter", "admin"],
          },
        },
        {
          name: "--ttl",
          description:
            'TTL defines the time to live for the password. Durations such as "30m", "24h", or bare integers such as "3600" (seconds) are accepted. The default TTL is 0s, which means the password will never expire',
          args: { name: "string" },
        },
        replicaOption,
        {
          name: "--read-only-region",
          description:
            "Create a password scoped to a Vitess read-only region (region slug, display name, or id). List regions with: pscale database read-only-regions list <database>",
          args: { name: "string" },
        },
      ],
    },
    {
      name: ["delete", "rm"],
      description: "Delete a branch password",
      isDangerous: true,
      args: [databaseArg, branchArg, { name: "password-id", isOptional: true }],
      options: [
        {
          name: "--force",
          description: "Delete a password without confirmation",
          isDangerous: true,
        },
        {
          name: "--name",
          description: "Delete password by name instead of ID",
          args: { name: "string" },
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List all passwords of a database",
      args: [databaseArg, branchOptionalArg],
      options: [
        {
          name: ["--web", "-w"],
          description: "List passwords in your web browser",
        },
        {
          name: "--name",
          description: "Filter passwords by name using a substring match",
          args: { name: "string" },
        },
        {
          name: "--status",
          description:
            "Filter passwords by status (active, renewable, or expired)",
          args: {
            name: "string",
            suggestions: ["active", "renewable", "expired"],
          },
        },
        pageOption,
        perPageOption,
      ],
    },
    {
      name: "renew",
      description: "Renew a branch password",
      args: [databaseArg, branchArg, { name: "password-id" }],
    },
    {
      name: "show",
      description: "Show a branch password",
      args: [databaseArg, branchArg, { name: "password-id", isOptional: true }],
      options: [
        {
          name: "--name",
          description: "Show password by name instead of ID",
          args: { name: "string" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a branch password's name or IP restrictions",
      args: [databaseArg, branchArg, { name: "password-id", isOptional: true }],
      options: [
        {
          name: "--name",
          description: "Update password by name instead of ID",
          args: { name: "string" },
        },
        {
          name: "--new-name",
          description: "New name for the password",
          args: { name: "string" },
        },
        {
          name: "--cidrs",
          description:
            "Replace the IP addresses and CIDR ranges allowed to use this password. Pass an empty value to remove all restrictions",
          args: { name: "strings" },
          isRepeatable: true,
        },
      ],
    },
  ],
};

const pgbouncerCommand: Fig.Subcommand = {
  name: "pgbouncer",
  description: "Manage dedicated PgBouncers for a Postgres branch",
  options: [orgOption],
  subcommands: [
    {
      name: "create",
      description: "Create a dedicated PgBouncer",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--name",
          description:
            "Name for the PgBouncer (optional; auto-generated if omitted)",
          args: { name: "string" },
        },
        {
          name: "--target",
          description:
            "Traffic target: primary, replica, or replica_az_affinity",
          args: {
            name: "string",
            suggestions: ["primary", "replica", "replica_az_affinity"],
          },
          isRequired: true,
        },
        {
          name: "--size",
          description: "PgBouncer size SKU (e.g. PGB_10)",
          args: { name: "string" },
        },
        {
          name: "--replicas-per-cell",
          description: "Number of replica servers per cell",
          args: { name: "int", default: "1" },
        },
      ],
    },
    {
      name: ["delete", "rm"],
      description: "Delete a dedicated PgBouncer",
      isDangerous: true,
      args: [databaseArg, branchArg, nameArg],
      options: [
        {
          name: "--force",
          description: "Delete a PgBouncer without confirmation",
          isDangerous: true,
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List dedicated PgBouncers for a Postgres branch",
      args: [databaseArg, branchArg],
    },
    {
      name: "resize",
      description:
        "Change a dedicated PgBouncer's size, replicas, target, or parameters",
      args: [databaseArg, branchArg, nameArg],
      options: [
        {
          name: "--size",
          description: "PgBouncer size SKU (e.g. PGB_10)",
          args: { name: "string" },
        },
        {
          name: "--replicas-per-cell",
          description: "Number of PgBouncer replica servers per cell",
          args: { name: "int", default: "1" },
        },
        {
          name: "--target",
          description:
            "Traffic target: primary, replica, or replica_az_affinity",
          args: {
            name: "string",
            suggestions: ["primary", "replica", "replica_az_affinity"],
          },
        },
        {
          name: "--parameters",
          description:
            "Set a PgBouncer parameter as namespace.name=value (e.g. pgbouncer.default_pool_size=100). Repeatable",
          args: { name: "string" },
          isRepeatable: true,
        },
        {
          name: "--wait",
          description:
            "Wait for the resize request to complete before returning",
        },
        {
          name: "--wait-timeout",
          description:
            "Maximum time to wait for the resize request to complete with --wait",
          args: { name: "duration" },
        },
      ],
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancel unfinished resize requests for a dedicated PgBouncer",
          args: [databaseArg, branchArg, nameArg],
        },
        {
          name: "status",
          description:
            "Show the latest resize request for a dedicated PgBouncer",
          args: [databaseArg, branchArg, nameArg],
        },
      ],
    },
    {
      name: "show",
      description: "Show a dedicated PgBouncer",
      args: [databaseArg, branchArg, nameArg],
    },
  ],
};

const pingCommand: Fig.Subcommand = {
  name: "ping",
  description: "Ping public PlanetScale database endpoints",
  options: [
    {
      name: "--timeout",
      description: "Timeout for each ping to succeed",
      args: { name: "duration" },
    },
    {
      name: "--concurrency",
      description: "Number of concurrent pings",
      args: { name: "int", default: "8" },
    },
    {
      name: ["--count", "-n"],
      description: "Number of total pings",
      args: { name: "int", default: "10" },
    },
    {
      name: ["--provider", "-p"],
      description:
        "Only ping endpoints for the specified infrastructure provider. Possible values: [aws, gcp]",
      args: { name: "string", suggestions: ["aws", "gcp"] },
    },
  ],
};

const readOnlyReplicaCommand: Fig.Subcommand = {
  ...dedicatedReadReplicaCommand,
  name: "read-only-replica",
  description:
    "Manage dedicated read replicas for a Postgres branch (deprecated: use dedicated-read-replica instead)",
  hidden: true,
  deprecated: true,
};

const regionCommand: Fig.Subcommand = {
  name: "region",
  description: "List regions",
  options: [orgOption],
  subcommands: [{ name: ["list", "ls"], description: "List regions" }],
};

const roleCommand: Fig.Subcommand = {
  name: "role",
  description: "Manage database roles for a Postgres or Neki database branch",
  options: [orgOption],
  subcommands: [
    {
      name: "create",
      description: "Create a new role for a Postgres or Neki database branch",
      args: [databaseArg, branchArg, nameArg],
      options: [
        {
          name: "--ttl",
          description:
            'TTL defines the time to live for the role. Durations such as "30m", "24h", or bare integers such as "3600" (seconds) are accepted. The default TTL is 0s, which means the role will never expire',
          args: { name: "string" },
        },
        {
          name: "--inherited-roles",
          description:
            "Comma-separated list of roles to inherit privileges from. Postgres: pg_read_all_data (read), pg_write_all_data (write), postgres (admin). Neki also accepts neki_viewer (requires pg_read_all_data) and neki_operator (requires postgres)",
          args: { name: "string" },
        },
        {
          name: "--with-replication",
          description:
            "When enabled, the role is created with REPLICATION privilege for logical replication. Requires --inherited-roles to include 'postgres'",
        },
      ],
    },
    {
      name: "default",
      description: "Show the default postgres role",
      args: [databaseArg, branchArg],
    },
    {
      name: ["delete", "rm"],
      description: "Delete a role",
      isDangerous: true,
      args: [databaseArg, branchArg, roleIdArg],
      options: [
        {
          name: "--force",
          description: "Delete a role without confirmation",
          isDangerous: true,
        },
        {
          name: "--successor",
          description:
            "Role to transfer ownership to before deletion. Usually 'postgres'",
          args: { name: "string" },
        },
      ],
    },
    {
      name: ["get", "show"],
      description: "Retrieve information about a specific role",
      args: [databaseArg, branchArg, roleIdArg],
      options: [
        {
          name: "--replica",
          description:
            "Return connection details for a branch replica. On Neki this sets libpq options, not a username suffix",
          exclusiveOn: [
            "--dedicated-read-replica",
            "--read-only-replica",
            "--bouncer",
          ],
        },
        {
          name: "--dedicated-read-replica",
          description:
            "Return connection details for a dedicated read replica (name). Postgres only",
          args: { name: "string" },
          exclusiveOn: [
            "--replica",
            "--read-only-replica",
            "--bouncer",
            "--router",
            "--shard",
          ],
        },
        {
          name: "--read-only-replica",
          description:
            "Deprecated alias for --dedicated-read-replica (deprecated: use --dedicated-read-replica instead)",
          args: { name: "string" },
          exclusiveOn: [
            "--replica",
            "--dedicated-read-replica",
            "--bouncer",
            "--router",
            "--shard",
          ],
          deprecated: true,
        },
        {
          name: "--bouncer",
          description:
            "Return connection details for a PgBouncer (name). Postgres only",
          args: { name: "string" },
          exclusiveOn: [
            "--replica",
            "--dedicated-read-replica",
            "--read-only-replica",
            "--router",
            "--shard",
          ],
        },
        {
          name: "--router",
          description:
            "Return connection details for a Neki router group (name). List routers with: pscale branch router list <database> <branch>",
          args: { name: "string" },
          exclusiveOn: [
            "--dedicated-read-replica",
            "--read-only-replica",
            "--bouncer",
          ],
        },
        {
          name: "--shard",
          description:
            "Return connection details that pin a Neki shard (name from pscale branch shard list)",
          args: { name: "string" },
          exclusiveOn: [
            "--dedicated-read-replica",
            "--read-only-replica",
            "--bouncer",
          ],
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List all roles for a Postgres or Neki database branch",
      args: [databaseArg, branchArg],
      options: [
        {
          name: ["--web", "-w"],
          description: "List roles in your web browser",
        },
        {
          name: "--name",
          description: "Filter roles by name using a substring match",
          args: { name: "string" },
        },
        {
          name: "--status",
          description:
            "Filter roles by status (active, renewable, disabled, or expired)",
          args: {
            name: "string",
            suggestions: ["active", "renewable", "disabled", "expired"],
          },
        },
        pageOption,
        perPageOption,
      ],
    },
    {
      name: "reassign",
      description: "Reassign objects owned by a role to another role",
      args: [databaseArg, branchArg, roleIdArg],
      options: [
        {
          name: "--force",
          description: "Reassign objects without confirmation",
          isDangerous: true,
        },
        {
          name: "--successor",
          description: "Successor role to transfer ownership to",
          args: { name: "string" },
          isRequired: true,
        },
      ],
    },
    {
      name: "renew",
      description: "Renew a role's expiration",
      args: [databaseArg, branchArg, roleIdArg],
    },
    {
      name: "reset",
      description: "Reset a role's password",
      args: [databaseArg, branchArg, roleIdArg],
      options: [
        {
          name: "--force",
          description: "Reset password without confirmation",
          isDangerous: true,
        },
      ],
    },
    {
      name: "reset-default",
      description: "Reset the credentials for the default `postgres` role",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--force",
          description: "Force reset without confirmation",
          isDangerous: true,
        },
      ],
    },
    {
      name: "update",
      description: "Update a role's name",
      args: [databaseArg, branchArg, roleIdArg],
      options: [
        {
          name: "--name",
          description: "New name for the role",
          args: { name: "string" },
          isRequired: true,
        },
      ],
    },
  ],
};

const serviceTokenCommand: Fig.Subcommand = {
  name: "service-token",
  description: "Create, list, and manage access for service tokens",
  options: [orgOption],
  subcommands: [
    {
      name: "add-access",
      description: "Add access to a service token in the organization",
      args: [{ name: "token" }, { name: "access", isVariadic: true }],
      options: [
        {
          name: "--database",
          description: "The database to add access to",
          args: { name: "string" },
        },
      ],
    },
    {
      name: "create",
      description: "Create a service token for the organization",
      options: [
        {
          name: "--name",
          description: "Optional name for the service token",
          args: { name: "string" },
        },
        {
          name: "--ttl",
          description:
            "Time to live (in seconds) for the service token. The token will be invalid when TTL has passed",
          args: { name: "int" },
        },
        {
          name: "--cidrs",
          description:
            "IP addresses and CIDR ranges allowed to use this service token. Omit to leave the token unrestricted",
          args: { name: "strings" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an entire service token in an organization",
      isDangerous: true,
      args: { name: "token" },
    },
    {
      name: "delete-access",
      description:
        "Delete access granted to a service token in the organization",
      args: [{ name: "token" }, { name: "access", isVariadic: true }],
      options: [
        {
          name: "--database",
          description: "The database to remove access to",
          args: { name: "string" },
        },
      ],
    },
    {
      name: "duplicate",
      description: "Duplicate a service token in the organization",
      args: idArg,
      options: [
        {
          name: "--name",
          description: "Name for the duplicated service token",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--ttl",
          description:
            "Time to live (in seconds) for the duplicated service token. The token will be invalid when TTL has passed",
          args: { name: "int" },
        },
      ],
    },
    { name: "list", description: "List service tokens for the organization" },
    {
      name: "show",
      description: "Show a service token in the organization",
      args: idArg,
    },
    {
      name: "show-access",
      description: "Fetch a service token and its accesses",
      args: nameArg,
    },
    {
      name: "update",
      description: "Update a service token's name, expiry, or IP restrictions",
      args: idArg,
      options: [
        {
          name: "--name",
          description:
            "New name for the service token. Omit to leave the name unchanged",
          args: { name: "string" },
        },
        {
          name: "--ttl",
          description:
            'Time to live in seconds, or "never" to remove the expiry. Omit to leave the expiry unchanged',
          args: { name: "string" },
        },
        {
          name: "--cidrs",
          description:
            "Replace the IP addresses and CIDR ranges allowed to use this service token. Pass an empty value to remove all restrictions",
          args: { name: "strings" },
          isRepeatable: true,
        },
      ],
    },
  ],
};

const shellCommand: Fig.Subcommand = {
  name: "shell",
  description: "Open a shell instance to a database and branch",
  args: [
    { name: "database", isOptional: true },
    branchOptionalArg,
    { name: "db-name", isOptional: true },
  ],
  options: [
    orgLocalOption,
    localAddrOption,
    remoteAddrOption,
    {
      name: "--role",
      description:
        "Role defines the access level, allowed values are: reader, writer, readwriter, admin. Defaults to 'reader' for replica passwords, otherwise defaults to 'admin'",
      args: {
        name: "string",
        suggestions: ["reader", "writer", "readwriter", "admin"],
      },
    },
    replicaOption,
    {
      name: "--router",
      description:
        "Connect through the named router group. Only supported for Neki databases",
      args: { name: "string" },
    },
    {
      name: "--db-name",
      description:
        "Postgres logical database name to connect to (default: postgres). Only supported for Postgres databases",
      args: { name: "string" },
    },
  ],
};

const signupCommand: Fig.Subcommand = {
  name: ["signup", "register", "sign-up"],
  description: "Signup for a new PlanetScale account",
};

const sizeCommand: Fig.Subcommand = {
  name: "size",
  description: "Lists the sizes for various components within PlanetScale",
  options: [orgOption],
  subcommands: [
    {
      name: ["cluster", "clusters"],
      description: "List the sizes for PlanetScale databases",
      subcommands: [
        {
          name: ["list", "ls"],
          description:
            "List the sizes that are available for a PlanetScale database",
          options: [
            {
              name: "--region",
              description: "View cluster sizes and rates for a specific region",
              args: { name: "string" },
            },
            {
              name: "--metal",
              description:
                "View cluster sizes and rates for clusters with metal storage",
              exclusiveOn: ["--external"],
            },
            {
              name: "--engine",
              description:
                "Filter cluster sizes by database engine. Supported values: mysql, postgresql, neki. If not specified, shows all clusters for all engines",
              args: {
                name: "string",
                suggestions: [
                  { name: "mysql", description: "A Vitess database" },
                  {
                    name: "postgresql",
                    description: "The fastest cloud Postgres",
                  },
                  { name: "neki", description: "Sharded PostgreSQL" },
                ],
              },
            },
            {
              name: "--external",
              description: "View cluster sizes for external keyspaces",
              exclusiveOn: ["--metal"],
            },
          ],
        },
      ],
    },
  ],
};

const sqlCommand: Fig.Subcommand = {
  name: "sql",
  description: "Execute a SQL query without an interactive shell",
  args: [databaseArg, branchArg],
  options: [
    orgLocalOption,
    {
      name: "--query",
      description: "SQL query to execute",
      args: { name: "string" },
      isRequired: true,
    },
    {
      name: "--keyspace",
      description:
        'Vitess keyspace, optionally with a shard and tablet type (e.g. mykeyspace, mykeyspace/-80, mykeyspace/-80@replica). List shards with --query "SHOW VITESS_SHARDS". Defaults to @primary, same as pscale shell',
      args: { name: "string" },
    },
    {
      name: "--dbname",
      description: "Postgres or Neki database name",
      args: { name: "string", default: "postgres" },
    },
    {
      name: "--role",
      description:
        "Role defines the access level, allowed values are: reader, writer, readwriter, admin. Defaults to reader (use --role admin for writes)",
      args: {
        name: "string",
        suggestions: ["reader", "writer", "readwriter", "admin"],
      },
    },
    replicaOption,
    {
      name: "--force",
      description:
        "Allow destructive SQL (DELETE, DROP, TRUNCATE). Only use after the user explicitly approves",
      isDangerous: true,
    },
    {
      name: "--vertical",
      description:
        "Print each row vertically, one column per line. Same as ending the query with \\G in the mysql client",
    },
  ],
};

const trafficControlCommand: Fig.Subcommand = {
  name: "traffic-control",
  description:
    "Manage Database Traffic Control™ for a Postgres database branch",
  options: [orgOption],
  subcommands: [
    {
      name: "budget",
      description: "Manage traffic budgets",
      subcommands: [
        {
          name: "create",
          description: "Create a traffic budget",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--name",
              description: "Name of the traffic budget",
              args: { name: "string" },
              isRequired: true,
            },
            {
              name: "--mode",
              description: "Mode of the budget: enforce, warn, or off",
              args: {
                name: "string",
                default: "warn",
                suggestions: ["enforce", "warn", "off"],
              },
            },
            {
              name: "--capacity",
              description:
                "Maximum capacity that can be banked (0-6000). Unlimited when not set",
              args: { name: "int" },
            },
            {
              name: "--rate",
              description:
                "Rate at which capacity refills, as a percentage of server resources (0-100). Unlimited when not set",
              args: { name: "int" },
            },
            {
              name: "--burst",
              description:
                "Maximum capacity a single query can consume (0-6000). Unlimited when not set",
              args: { name: "int" },
            },
            {
              name: "--concurrency",
              description:
                "Percentage of available worker processes (0-100). Unlimited when not set",
              args: { name: "int" },
            },
            {
              name: "--warning-threshold",
              description:
                "Percentage (0-100) of capacity, burst, or concurrency at which to emit warnings for enforced budgets",
              args: { name: "int" },
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a traffic budget",
          isDangerous: true,
          args: [databaseArg, branchArg, budgetIdArg],
          options: [
            {
              name: "--force",
              description: "Delete a budget without confirmation",
              isDangerous: true,
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List traffic budgets for a branch",
          args: [databaseArg, branchArg],
          options: [
            {
              name: "--fingerprint",
              description:
                "Only list budgets with a rule for this query fingerprint",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a traffic budget",
          args: [databaseArg, branchArg, budgetIdArg],
        },
        {
          name: "update",
          description: "Update a traffic budget",
          args: [databaseArg, branchArg, budgetIdArg],
          options: [
            {
              name: "--name",
              description: "Name of the traffic budget",
              args: { name: "string" },
            },
            {
              name: "--mode",
              description: "Mode of the budget: enforce, warn, or off",
              args: { name: "string", suggestions: ["enforce", "warn", "off"] },
            },
            {
              name: "--capacity",
              description:
                "Maximum capacity that can be banked (0-6000). Unlimited when not set",
              args: { name: "int" },
            },
            {
              name: "--rate",
              description:
                "Rate at which capacity refills, as a percentage of server resources (0-100). Unlimited when not set",
              args: { name: "int" },
            },
            {
              name: "--burst",
              description:
                "Maximum capacity a single query can consume (0-6000). Unlimited when not set",
              args: { name: "int" },
            },
            {
              name: "--concurrency",
              description:
                "Percentage of available worker processes (0-100). Unlimited when not set",
              args: { name: "int" },
            },
            {
              name: "--warning-threshold",
              description:
                "Percentage (0-100) of capacity, burst, or concurrency at which to emit warnings for enforced budgets",
              args: { name: "int" },
            },
          ],
        },
      ],
    },
    {
      name: "rule",
      description: "Manage traffic rules",
      subcommands: [
        {
          name: "create",
          description: "Create a traffic rule on a budget",
          args: [databaseArg, branchArg, budgetIdArg],
          options: [
            {
              name: "--kind",
              description: "Kind of rule",
              args: { name: "string", default: "match" },
            },
            {
              name: "--fingerprint",
              description: "SQL fingerprint to match",
              args: { name: "string" },
            },
            {
              name: "--keyspace",
              description: "Keyspace to match",
              args: { name: "string" },
            },
            {
              name: "--tag",
              description:
                "Tag in the format key=<key>,value=<value>,source=<source> (repeatable)",
              args: { name: "string" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a traffic rule from a budget",
          isDangerous: true,
          args: [databaseArg, branchArg, budgetIdArg, { name: "rule-id" }],
          options: [
            {
              name: "--force",
              description: "Delete a rule without confirmation",
              isDangerous: true,
            },
          ],
        },
      ],
    },
  ],
};

const versionCommand: Fig.Subcommand = {
  name: "version",
  description: "",
  hidden: true,
};

const webhookCommand: Fig.Subcommand = {
  name: "webhook",
  description: "Create, list, and manage webhooks",
  options: [orgOption],
  subcommands: [
    {
      name: "create",
      description: "Create a webhook for a database",
      args: databaseArg,
      options: [
        {
          name: "--url",
          description: "The URL to send webhook events to",
          args: { name: "string" },
          isRequired: true,
        },
        {
          name: "--authorization-header",
          description:
            "The complete Authorization header value, for example Bearer token",
          args: { name: "string" },
        },
        {
          name: "--events",
          description: "Comma-separated list of events to subscribe to",
          args: { name: "strings" },
          isRepeatable: true,
        },
        { name: "--enabled", description: "Whether the webhook is enabled" },
      ],
    },
    {
      name: "delete",
      description: "Delete a webhook for a database",
      isDangerous: true,
      args: [databaseArg, { name: "webhook-id" }],
    },
    {
      name: "list",
      description: "List webhooks for a database",
      args: databaseArg,
    },
    {
      name: "show",
      description: "Show a webhook for a database",
      args: [databaseArg, { name: "webhook-id" }],
    },
    {
      name: "test",
      description: "Send a test event to a webhook",
      args: [databaseArg, { name: "webhook-id" }],
    },
    {
      name: "update",
      description: "Update a webhook for a database",
      args: [databaseArg, { name: "webhook-id" }],
      options: [
        {
          name: "--url",
          description: "The URL to send webhook events to",
          args: { name: "string" },
        },
        {
          name: "--authorization-header",
          description:
            "The complete Authorization header value, for example Bearer token",
          args: { name: "string" },
          exclusiveOn: ["--clear-authorization-header"],
        },
        {
          name: "--clear-authorization-header",
          description: "Remove the configured Authorization header",
          exclusiveOn: ["--authorization-header"],
        },
        {
          name: "--events",
          description: "Comma-separated list of events to subscribe to",
          args: { name: "strings" },
          isRepeatable: true,
        },
        { name: "--enabled", description: "Whether the webhook is enabled" },
      ],
    },
  ],
};

const workflowCommand: Fig.Subcommand = {
  name: "workflow",
  description:
    'Manage the workflows for PlanetScale databases (deprecated: use "pscale branch vtctl move-tables" instead. See https://planetscale.com/docs/cli/move-tables for more information)',
  deprecated: true,
  options: [orgOption],
  subcommands: [
    {
      name: "cancel",
      description: "Cancel a workflow that is in progress",
      args: [databaseArg, numberArg],
      options: [
        {
          name: "--force",
          description: "Force cancel the workflow without confirmation",
          isDangerous: true,
        },
      ],
    },
    {
      name: "complete",
      description: "Mark a workflow as complete",
      args: [databaseArg, numberArg],
    },
    {
      name: "create",
      description: "Create a new workflow within a branch",
      args: [databaseArg, branchArg],
      options: [
        {
          name: "--name",
          description: "Name of the workflow",
          args: { name: "string" },
        },
        {
          name: "--source-keyspace",
          description: "Keyspace where the tables will be copied from",
          args: { name: "string" },
        },
        {
          name: "--target-keyspace",
          description: "Keyspace where the tables will be copied to",
          args: { name: "string" },
        },
        {
          name: "--global-keyspace",
          description:
            "Choose an unsharded keyspace where sequence tables will be created for any workflow table that contains `AUTO_INCREMENT`",
          args: { name: "string" },
        },
        {
          name: "--tables",
          description: "Tables to migrate to the target keyspace",
          args: { name: "strings" },
          isRepeatable: true,
        },
        {
          name: "--defer-secondary-keys",
          description:
            "Don't create secondary indexes for tables until they've been copied",
        },
        {
          name: "--on-ddl",
          description:
            "Action to take when a DDL statement is encountered during a running workflow. Options: EXEC, EXEC_IGNORE, STOP, IGNORE",
          args: {
            name: "string",
            default: "STOP",
            suggestions: [
              {
                name: "EXEC",
                description:
                  "Try to execute the DDL on the target keyspace. If it fails, stop the workflow",
              },
              {
                name: "EXEC_IGNORE",
                description:
                  "Try to execute the DDL on the target keyspace, ignoring any errors",
              },
              { name: "STOP", description: "Stop the workflow on DDL" },
              {
                name: "IGNORE",
                description: "Ignore the DDL statement and continue",
              },
            ],
          },
        },
        {
          name: ["--interactive", "-i"],
          description: "Create the workflow in interactive mode",
        },
      ],
    },
    {
      name: "cutover",
      description:
        "Completes the workflow, cutting over all traffic to the target keyspace",
      args: [databaseArg, numberArg],
      options: [
        {
          name: "--force",
          description: "Force the cutover without prompting for confirmation",
          isDangerous: true,
        },
      ],
    },
    {
      name: "list",
      description: "List all of the workflows for a PlanetScale database",
      args: databaseArg,
    },
    {
      name: "retry",
      description: "Retry a workflow that has been stopped or failed",
      args: [databaseArg, numberArg],
    },
    {
      name: "reverse-cutover",
      description:
        "Reverse the cutover of a workflow back to the source keyspace by reverting the routing rules",
      args: [databaseArg, numberArg],
    },
    {
      name: "reverse-traffic",
      description:
        "Route queries back to the source keyspace for a specific workflow",
      args: [databaseArg, numberArg],
    },
    {
      name: "show",
      description: "Show a specific workflow for a PlanetScale database",
      args: [databaseArg, numberArg],
    },
    {
      name: "switch-traffic",
      description:
        "Route queries to the target keyspace for a specific workflow in a PlanetScale database",
      args: [databaseArg, numberArg],
      options: [
        {
          name: "--replicas-only",
          description:
            "Route read queries from the replica and read-only tablets to the target keyspace",
        },
        {
          name: "--force",
          description:
            "Force the switch traffic operation without prompting for confirmation",
          isDangerous: true,
        },
      ],
    },
    {
      name: "verify-data",
      description:
        "Verify data consistency for a specific workflow in a PlanetScale database",
      args: [databaseArg, numberArg],
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "pscale",
  description: "A CLI for PlanetScale",
  options: [
    { name: ["--help", "-h"], description: "Show help", isPersistent: true },
    {
      name: "--config",
      description:
        "Config file (default is $HOME/.config/planetscale/pscale.yml)",
      args: { name: "file", template: "filepaths" },
      isPersistent: true,
    },
    { name: "--version", description: "Show pscale version" },
    { name: "--skill", description: "Print the agent skill file and exit" },
    {
      name: "--api-url",
      description: "The base URL for the PlanetScale API",
      args: { name: "string", default: "https://api.planetscale.com/" },
      isPersistent: true,
    },
    {
      name: "--api-token",
      description:
        "The API token to use for authenticating against the PlanetScale API",
      args: { name: "string" },
      isPersistent: true,
    },
    {
      name: ["--format", "-f"],
      description:
        "Show output in a specific format. Possible values: [human, json, csv]",
      args: { name: "format", suggestions: ["human", "json", "csv"] },
      isPersistent: true,
    },
    { name: "--debug", description: "Enable debug mode", isPersistent: true },
    {
      name: "--service-token-name",
      description:
        "The Service Token name for authenticating (deprecated: use --service-token-id instead)",
      args: { name: "string" },
      isPersistent: true,
      hidden: true,
      deprecated: true,
    },
    {
      name: "--service-token-id",
      description: "The Service Token ID for authenticating",
      args: { name: "string" },
      isPersistent: true,
    },
    {
      name: "--service-token",
      description: "Service Token for authenticating",
      args: { name: "string" },
      isPersistent: true,
    },
    {
      name: "--no-color",
      description: "Disable color output",
      isPersistent: true,
    },
  ],
  subcommands: [
    agentGuideCommand,
    agentsCommand,
    apiCommand,
    auditLogCommand,
    authCommand,
    backupCommand,
    billingCommand,
    branchCommand,
    completionCommand,
    connectCommand,
    databaseCommand,
    dedicatedReadReplicaCommand,
    deployRequestCommand,
    helpCommand,
    importCommand,
    insightsCommand,
    inspectCommand,
    keyspaceCommand,
    loginCommand,
    logoutCommand,
    logsCommand,
    maintenanceCommand,
    metricsCommand,
    oidcTrustCommand,
    orgCommand,
    passwordCommand,
    pgbouncerCommand,
    pingCommand,
    readOnlyReplicaCommand,
    regionCommand,
    roleCommand,
    serviceTokenCommand,
    shellCommand,
    signupCommand,
    sizeCommand,
    sqlCommand,
    trafficControlCommand,
    versionCommand,
    webhookCommand,
    workflowCommand,
  ],
};

export default completionSpec;
