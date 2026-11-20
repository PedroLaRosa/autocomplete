// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optTableNameOrId: Fig.Option = {
  name: "--table-name-or-id",
  description: "A table name within the compartment, or a table OCID",
  args: { name: "table-name-or-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of a table's compartment",
  args: { name: "compartment-id" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of a table's compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the table's compartment",
  args: { name: "compartment-id" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const completionSpec: Fig.Spec = {
  name: "nosql",
  description: "NoSQL Database",
  subcommands: [
    {
      name: "configuration",
      description: "A tenancy or service-level configuration",
      subcommands: [
        {
          name: "get",
          description: "Retrieves the current service-level configuration",
          options: [optCompartmentId2, optFromJson],
        },
        {
          name: "unassign-kms-key",
          description:
            "Removes the global encryption key, if such exists, from a Hosted Environment",
          options: [
            optCompartmentId2,
            optIfMatch,
            {
              name: "--is-opc-dry-run",
              description:
                "If true, indicates that the request is a dry run A dry run request does not modify the configuration item",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-hosted",
          description: "Updates the service-level configuration",
          options: [
            optCompartmentId2,
            { name: "--kms-key", args: { name: "json" }, isRequired: true },
            optIfMatch,
            {
              name: "--is-opc-dry-run",
              description:
                "If true, indicates that the request is a dry run A dry run request does not modify the configuration item",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "index",
      description: "Information about an index",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new index on the table identified by tableNameOrId",
          options: [
            optTableNameOrId,
            {
              name: "--keys",
              description: "A set of keys for a secondary index",
              args: { name: "json" },
              isRequired: true,
            },
            optCompartmentId3,
            {
              name: "--is-if-not-exists",
              description:
                "If true, the operation completes successfully even when the index exists",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--index-name",
              description: "Index name",
              args: { name: "index-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Delete an index from the table identified by tableNameOrId",
          options: [
            optTableNameOrId,
            {
              name: "--index-name",
              description: "The name of a table's index",
              args: { name: "index-name" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--is-if-exists",
              description: 'Set as true to select "if exists" behavior',
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get information about a single index",
          options: [
            optTableNameOrId,
            {
              name: "--index-name",
              description: "The name of a table's index",
              args: { name: "index-name" },
              isRequired: true,
            },
            optCompartmentId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Get a list of indexes on a table",
          options: [
            optTableNameOrId,
            optCompartmentId,
            {
              name: "--name",
              description: "A shell-globbing-style (*?[]) filter for names",
              args: { name: "name" },
            },
            {
              name: "--lifecycle-state",
              description: "Filter list by the lifecycle state of the item",
              args: {
                suggestions: [
                  "ALL",
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "INACTIVE",
                ],
              },
            },
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'ASC' or 'DESC'",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "row",
      description: "The result of GetRow",
      subcommands: [
        {
          name: "delete",
          description: "Delete a single row from the table, by primary key",
          options: [
            optTableNameOrId,
            {
              name: "--key",
              description:
                'An array of strings, each of the format "column-name:value", representing the primary key of the row',
              args: { name: "key" },
              isRequired: true,
              isRepeatable: true,
            },
            optCompartmentId,
            {
              name: "--is-get-return-row",
              description:
                "If true, and the operation fails due to an option setting (ifVersion et al)",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--timeout-in-ms",
              description: "Timeout setting for this operation",
              args: { name: "integer" },
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a single row from the table by primary key",
          options: [
            optTableNameOrId,
            {
              name: "--key",
              description:
                'An array of strings, each of the format "column-name:value", representing the primary key of the row',
              args: { name: "key" },
              isRequired: true,
              isRepeatable: true,
            },
            optCompartmentId,
            {
              name: "--consistency",
              description: "Consistency requirement for a read operation",
              args: { suggestions: ["EVENTUAL", "ABSOLUTE"] },
            },
            {
              name: "--timeout-in-ms",
              description: "Timeout setting for this operation",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Write a single row into the table",
          options: [
            optTableNameOrId,
            {
              name: "--value",
              description: "The map of values from a row",
              args: { name: "json" },
              isRequired: true,
            },
            optCompartmentId3,
            {
              name: "--option",
              description: "Specifies a condition for the put operation",
              args: { suggestions: ["IF_ABSENT", "IF_PRESENT"] },
            },
            {
              name: "--is-get-return-row",
              description:
                "If true, and the put fails due to an option setting, then the existing row will be returned",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--timeout-in-ms",
              description: "Timeout setting for the put",
              args: { name: "integer" },
            },
            {
              name: "--ttl",
              description: "Time-to-live for the row, in days",
              args: { name: "integer" },
            },
            {
              name: "--identity-cache-size",
              description:
                "Sets the number of generated identity values that are requested from the server during a put",
              args: { name: "integer" },
            },
            {
              name: "--is-exact-match",
              description:
                "If present and true, the presented row value must exactly match the table's schema",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce2,
            {
              name: "--ttl-use-default",
              description:
                "If true, set time-to-live for this row to the table's default",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "delete",
          description: "Cancel a work request operation with the given ID",
          options: [
            optWorkRequestId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "List the work requests in a compartment",
          options: [
            optCompartmentId2,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "table",
      description: "Complete metadata about a table",
      subcommands: [
        {
          name: "change-compartment",
          description: "Change a table's compartment",
          options: [
            optTableNameOrId,
            {
              name: "--to-compartment-id",
              description: "The OCID of the table's new compartment",
              args: { name: "to-compartment-id" },
              isRequired: true,
            },
            {
              name: "--from-compartment-id",
              description: "The OCID of the table's current compartment",
              args: { name: "from-compartment-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-replica",
          description: "Add a replica for this table",
          options: [
            optTableNameOrId,
            optCompartmentId3,
            {
              name: "--max-read-units",
              description:
                "Maximum sustained read throughput limit for the new replica table",
              args: { name: "integer" },
            },
            {
              name: "--max-write-units",
              description:
                "Maximum sustained write throughput limit for the new replica table",
              args: { name: "integer" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--replica-region",
              description:
                "Name of the remote region in standard OCI format, i.e. us-ashburn-1 required",
              args: { name: "replica-region" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new table",
          options: [
            {
              name: "--name",
              description: "Table name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "Compartment Identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--ddl-statement",
              description: "Complete CREATE TABLE DDL statement",
              args: { name: "ddl-statement" },
              isRequired: true,
            },
            { name: "--table-limits", args: { name: "json" } },
            {
              name: "--is-auto-reclaimable",
              description:
                "True if table can be reclaimed after an idle period",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-replica",
          description:
            "Delete the specified replica table in the remote region",
          options: [
            optTableNameOrId,
            optCompartmentId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--replica-region",
              description: "A customer-facing region identifier required",
              args: { name: "replica-region" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a table by tableNameOrId",
          options: [
            optTableNameOrId,
            optCompartmentId,
            {
              name: "--is-if-exists",
              description: 'Set as true to select "if exists" behavior',
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get table info by identifier",
          options: [optTableNameOrId, optCompartmentId, optFromJson],
        },
        {
          name: "list-table-usage",
          description: "Get table usage info",
          options: [
            optTableNameOrId,
            optCompartmentId,
            {
              name: "--time-start",
              description: "The start time to use for the request",
              args: { name: "datetime" },
            },
            {
              name: "--time-end",
              description: "The end time to use for the request",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Get a list of tables in a compartment",
          options: [
            optCompartmentId2,
            {
              name: "--name",
              description: "A shell-globbing-style (*?[]) filter for names",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'ASC' or 'DESC'",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "name"] },
            },
            {
              name: "--lifecycle-state",
              description: "Filter list by the lifecycle state of the item",
              args: {
                suggestions: [
                  "ALL",
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "INACTIVE",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Alter the table identified by tableNameOrId, changing schema, limits, or tags",
          options: [
            optTableNameOrId,
            {
              name: "--compartment-id",
              description: "The OCID of the table's current compartment",
              args: { name: "compartment-id" },
            },
            {
              name: "--ddl-statement",
              description: "Complete ALTER TABLE DDL statement",
              args: { name: "ddl-statement" },
            },
            { name: "--table-limits", args: { name: "json" } },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "query",
      description: "The result of a query",
      subcommands: [
        {
          name: "prepare",
          description:
            "Prepare a SQL statement for use in a query with variable substitution",
          options: [
            optCompartmentId2,
            {
              name: "--statement",
              description: "A NoSQL SQL statement",
              args: { name: "statement" },
              isRequired: true,
            },
            {
              name: "--is-get-query-plan",
              description: "Include a query execution plan in the result",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "execute",
          description: "Execute a SQL query",
          options: [
            {
              name: "--compartment-id",
              description:
                "Compartment OCID, to provide context for a table name in the given statement",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--statement",
              description:
                "A NoSQL SQL query statement; or a Base64-encoded prepared statement",
              args: { name: "statement" },
              isRequired: true,
            },
            {
              name: "--is-prepared",
              description: "If true, the statement is a prepared statement",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--consistency",
              description: "Consistency requirement for a read operation",
              args: { suggestions: ["EVENTUAL", "ABSOLUTE"] },
            },
            {
              name: "--max-read-in-kbs",
              description:
                "A limit on the total amount of data read during this operation, in KB",
              args: { name: "integer" },
            },
            {
              name: "--variables",
              description: "A map of prepared statement variables to values",
              args: { name: "json" },
            },
            {
              name: "--timeout-in-ms",
              description: "Timeout setting for the query",
              args: { name: "integer" },
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-error",
      description: "Error messages associated with a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-log",
      description: "Log messages associated with a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
