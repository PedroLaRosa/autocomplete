// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
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
      "WAITING",
      "NEEDS_ATTENTION",
    ],
  },
  isRepeatable: true,
};
const optIsLockOverride: Fig.Option = {
  name: "--is-lock-override",
  description: "Whether to override locks (if any exist)",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optMessage: Fig.Option = {
  name: "--message",
  description: "A message added by the creator of the lock",
  args: { name: "message" },
};
const optRelatedResourceId: Fig.Option = {
  name: "--related-resource-id",
  description: "The id of the resource that is locking this resource",
  args: { name: "related-resource-id" },
};
const optTimeCreated: Fig.Option = {
  name: "--time-created",
  description: "When the lock was created",
  args: { name: "datetime" },
};
const optType: Fig.Option = {
  name: "--type",
  description: "Type of the lock",
  args: { suggestions: ["FULL", "DELETE"] },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optLocks: Fig.Option = {
  name: "--locks",
  description: "Locks associated with this resource",
  args: { name: "json" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
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
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire specified display name",
  args: { name: "display-name" },
};
const optMcpToolsetId: Fig.Option = {
  name: "--mcp-toolset-id",
  description: "The OCID of a Database Tools MCP Toolset",
  args: { name: "mcp-toolset-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optConnectionId: Fig.Option = {
  name: "--connection-id",
  description: "The OCID of a Database Tools connection",
  args: { name: "connection-id" },
  isRequired: true,
};
const optDefaultExecutionType: Fig.Option = {
  name: "--default-execution-type",
  description: "The default execution type for the toolset",
  args: { suggestions: ["SYNCHRONOUS", "ASYNCHRONOUS"] },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "A human readable description of the Database Tools MCP toolset",
  args: { name: "description" },
};
const optIdentityId: Fig.Option = {
  name: "--identity-id",
  description: "The OCID of a Database Tools identity. required",
  args: { name: "identity-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optMcpServerId: Fig.Option = {
  name: "--mcp-server-id",
  description: "The OCID of a Database Tools MCP server",
  args: { name: "mcp-server-id" },
  isRequired: true,
};
const optDatabaseApiGatewayConfigId: Fig.Option = {
  name: "--database-api-gateway-config-id",
  description: "The OCID of a Database Tools database API gateway config",
  args: { name: "database-api-gateway-config-id" },
  isRequired: true,
};
const optKeyStores: Fig.Option = {
  name: "--key-stores",
  description:
    "The CA certificate to verify the server's certificate and the client private key and associated certificate",
  args: { name: "json" },
};
const optPrivateEndpointId: Fig.Option = {
  name: "--private-endpoint-id",
  description: "The OCID of a Database Tools private endpoint. required",
  args: { name: "private-endpoint-id" },
  isRequired: true,
};
const optRelatedResource: Fig.Option = {
  name: "--related-resource",
  args: { name: "json" },
};
const optSqlReportId: Fig.Option = {
  name: "--sql-report-id",
  description: "The OCID of a Database Tools SQL Report",
  args: { name: "sql-report-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment containing the Database Tools MCP server",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optRuntimeIdentity: Fig.Option = {
  name: "--runtime-identity",
  description:
    "Specifies the identity used when accessing OCI resources at runtime",
  args: { suggestions: ["AUTHENTICATED_PRINCIPAL", "RESOURCE_PRINCIPAL"] },
};
const optUserName: Fig.Option = {
  name: "--user-name",
  description: "The database user name",
  args: { name: "user-name" },
};
const optUserPasswordSecretId: Fig.Option = {
  name: "--user-password-secret-id",
  description: "The OCID of the secret containing the user password",
  args: { name: "user-password-secret-id" },
};
const optAdvancedProperties: Fig.Option = {
  name: "--advanced-properties",
  description:
    "The advanced connection properties key-value pair (e.g., sslMode)",
  args: { name: "json" },
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment containing the Database Tools connection",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optMcpServerId2: Fig.Option = {
  name: "--mcp-server-id",
  description: "The OCID of the Database Tools MCP Server",
  args: { name: "mcp-server-id" },
  isRequired: true,
};
const optRuntimeSupport: Fig.Option = {
  name: "--runtime-support",
  description:
    "Specifies whether this connection is supported by the Database Tools Runtime",
  args: { suggestions: ["SUPPORTED", "UNSUPPORTED"] },
};
const optToolsetVersion: Fig.Option = {
  name: "--toolset-version",
  description: "The MCP toolset version",
  args: { name: "integer" },
  isRequired: true,
};
const optToolsetVersion2: Fig.Option = {
  name: "--toolset-version",
  description: "The MCP toolset version",
  args: { name: "integer" },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
      "INACTIVE",
    ],
  },
  isRepeatable: true,
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
      "NEEDS_ATTENTION",
    ],
  },
  isRepeatable: true,
};
const optConnectionId2: Fig.Option = {
  name: "--connection-id",
  description: "The OCID of a Database Tools connection. required",
  args: { name: "connection-id" },
  isRequired: true,
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources their lifecycleState matches the specified lifecycleState",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
      "INACTIVE",
    ],
  },
};
const optPrivateEndpointId2: Fig.Option = {
  name: "--private-endpoint-id",
  description:
    "The OCID of the Database Tools private endpoint used to access the database in the Customer VCN",
  args: { name: "private-endpoint-id" },
};
const optPrivateEndpointId3: Fig.Option = {
  name: "--private-endpoint-id",
  description:
    "The OCID of the Database Tools private endpoint used to access the database in the customer VCN",
  args: { name: "private-endpoint-id" },
};
const optUserName2: Fig.Option = {
  name: "--user-name",
  description: "The database user name",
  args: { name: "user-name" },
  isRequired: true,
};
const optUserPasswordSecretId2: Fig.Option = {
  name: "--user-password-secret-id",
  description: "The OCID of the secret containing the user password",
  args: { name: "user-password-secret-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "dbtools",
  description: "Database Tools",
  subcommands: [
    {
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a paginated list of errors for the specified work request",
          options: [
            optWorkRequestId,
            optSortOrder,
            optSortBy,
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
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a paginated list of logs for the specified work request",
          options: [
            optWorkRequestId,
            optSortOrder,
            optSortBy,
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
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the specified work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--resource-identifier",
              description: "The OCID of the resource",
              args: { name: "resource-identifier" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted", "timeUpdated"] },
            },
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
      name: "connection",
      description:
        "Provides connectivity details required to establish a connection to a database",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified Database Tools connection to a different compartment in the same tenancy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Database Tools connection to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConnectionId,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified Database Tools connection resource",
          options: [
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConnectionId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets details of the specified Database Tools connection",
          options: [optConnectionId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Database Tools connections",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName3,
            {
              name: "--type",
              description:
                "A filter to return only resources their type matches the specified type",
              args: {
                suggestions: [
                  "ORACLE_DATABASE",
                  "MYSQL",
                  "POSTGRESQL",
                  "GENERIC_JDBC",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--runtime-support",
              description:
                "A filter to return only resources with one of the specified type values",
              args: { suggestions: ["SUPPORTED", "UNSUPPORTED"] },
              isRepeatable: true,
            },
            {
              name: "--runtime-identity",
              description:
                "A filter to return only resources with one of the specified runtimeIdentity values",
              args: {
                suggestions: ["AUTHENTICATED_PRINCIPAL", "RESOURCE_PRINCIPAL"],
              },
              isRepeatable: true,
            },
            {
              name: "--related-resource-identifier",
              description: "The OCID of the related resource",
              args: { name: "related-resource-identifier" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-oracle-database",
          description: "Creates a new Database Tools connection",
          options: [
            optDisplayName,
            optCompartmentId3,
            {
              name: "--connection-string",
              description:
                "The connect descriptor or Easy Connect Naming method use to connect to the database",
              args: { name: "connection-string" },
              isRequired: true,
            },
            optDefinedTags,
            optFreeformTags,
            optLocks,
            optRuntimeSupport,
            optRuntimeIdentity,
            optRelatedResource,
            optUserName,
            {
              name: "--advanced-properties",
              description:
                "The advanced connection properties key-value pair (e.g., oracle.net.ssl_server_dn_match)",
              args: { name: "json" },
            },
            {
              name: "--key-stores",
              description:
                "Oracle wallet or Java Keystores containing trusted certificates for authenticating the server's public",
              args: { name: "json" },
            },
            optPrivateEndpointId3,
            { name: "--proxy-client", args: { name: "json" } },
            {
              name: "--authentication-type",
              description:
                "Specifies the authentication type used by the Database Tools service to authenticate with the database",
              args: { suggestions: ["TOKEN", "PASSWORD"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optUserPasswordSecretId,
            optFromJson,
          ],
        },
        {
          name: "update-oracle-database",
          description: "Updates the specified Database Tools connection",
          options: [
            optDisplayName2,
            optDefinedTags,
            optFreeformTags,
            optRelatedResource,
            {
              name: "--connection-string",
              description:
                "The connect descriptor or Easy Connect Naming method used to connect to the database",
              args: { name: "connection-string" },
            },
            optUserName,
            {
              name: "--advanced-properties",
              description:
                "The advanced connection properties key-value pair (e.g., oracle.net.ssl_server_dn_match)",
              args: { name: "json" },
            },
            {
              name: "--key-stores",
              description:
                "Oracle wallet or Java Keystores containing trusted certificates for authenticating the server's public",
              args: { name: "json" },
            },
            optPrivateEndpointId2,
            { name: "--proxy-client", args: { name: "json" } },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConnectionId,
            optUserPasswordSecretId,
            optFromJson,
          ],
        },
        {
          name: "validate-oracle-database",
          description:
            "Validates the Database Tools connection details by establishing a connection to the database",
          options: [optIfMatch, optConnectionId, optFromJson],
        },
        {
          name: "create-mysql-database",
          description: "Creates a new Database Tools connection",
          options: [
            optDisplayName,
            optCompartmentId3,
            {
              name: "--connection-string",
              description:
                "The connection string used to connect to the MySQL Server",
              args: { name: "connection-string" },
              isRequired: true,
            },
            optUserName2,
            optDefinedTags,
            optFreeformTags,
            optLocks,
            optRuntimeSupport,
            optRuntimeIdentity,
            optRelatedResource,
            optAdvancedProperties,
            optKeyStores,
            optPrivateEndpointId3,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optUserPasswordSecretId2,
            optFromJson,
          ],
        },
        {
          name: "update-mysql-database",
          description: "Updates the specified Database Tools connection",
          options: [
            optDisplayName2,
            optDefinedTags,
            optFreeformTags,
            optRelatedResource,
            {
              name: "--connection-string",
              description:
                "The connection string used to connect to the MySQL Server",
              args: { name: "connection-string" },
            },
            optUserName,
            optAdvancedProperties,
            optKeyStores,
            optPrivateEndpointId2,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConnectionId,
            optUserPasswordSecretId,
            optFromJson,
          ],
        },
        {
          name: "validate-mysql-database",
          description:
            "Validates the Database Tools connection details by establishing a connection to the database",
          options: [optIfMatch, optConnectionId, optFromJson],
        },
        {
          name: "create-postgresql",
          description: "Creates a new Database Tools connection",
          options: [
            optDisplayName,
            optCompartmentId3,
            {
              name: "--connection-string",
              description:
                "The connection string used to connect to the PostgreSQL Server",
              args: { name: "connection-string" },
              isRequired: true,
            },
            optUserName2,
            optDefinedTags,
            optFreeformTags,
            optLocks,
            optRuntimeSupport,
            optRuntimeIdentity,
            optRelatedResource,
            optAdvancedProperties,
            optKeyStores,
            optPrivateEndpointId3,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optUserPasswordSecretId2,
            optFromJson,
          ],
        },
        {
          name: "update-postgresql",
          description: "Updates the specified Database Tools connection",
          options: [
            optDisplayName2,
            optDefinedTags,
            optFreeformTags,
            optRelatedResource,
            {
              name: "--connection-string",
              description:
                "The connection string used to connect to the PostgreSQL Server",
              args: { name: "connection-string" },
            },
            optUserName,
            optAdvancedProperties,
            optKeyStores,
            optPrivateEndpointId2,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConnectionId,
            optUserPasswordSecretId,
            optFromJson,
          ],
        },
        {
          name: "create-generic-jdbc",
          description: "Creates a new Database Tools connection",
          options: [
            optDisplayName,
            optCompartmentId3,
            {
              name: "--url",
              description:
                "The JDBC URL used to connect to the Generic JDBC database system",
              args: { name: "url" },
              isRequired: true,
            },
            optUserName2,
            optDefinedTags,
            optFreeformTags,
            optLocks,
            optRuntimeSupport,
            optRuntimeIdentity,
            {
              name: "--advanced-properties",
              description: "The advanced connection properties key-value pair",
              args: { name: "json" },
            },
            optKeyStores,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optUserPasswordSecretId2,
            optFromJson,
          ],
        },
        {
          name: "update-generic-jdbc",
          description: "Updates the specified Database Tools connection",
          options: [
            optDisplayName2,
            optDefinedTags,
            optFreeformTags,
            {
              name: "--url",
              description:
                "The JDBC URL used to connect to the Generic JDBC database system",
              args: { name: "url" },
            },
            optUserName,
            {
              name: "--advanced-properties",
              description: "The advanced connection properties key-value pair",
              args: { name: "json" },
            },
            optKeyStores,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-id",
              description: "The OCID of a Database Tools Connection",
              args: { name: "connection-id" },
              isRequired: true,
            },
            optUserPasswordSecretId,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a Database Tools connection resource",
          options: [
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConnectionId2,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description:
            "Removes a lock from a Database Tools connection resource",
          options: [
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConnectionId2,
            optFromJson,
          ],
        },
        {
          name: "validate-postgresql",
          description:
            "Validates the Database Tools connection details by establishing a connection to the database",
          options: [optIfMatch, optConnectionId2, optFromJson],
        },
      ],
    },
    {
      name: "endpoint-service",
      description:
        "Provides information about Database Tools endpoint services",
      subcommands: [
        {
          name: "get",
          description:
            "Gets details for the specified Database Tools endpoint service",
          options: [
            {
              name: "--endpoint-service-id",
              description:
                "The OCID of a DatabaseToolsEndpointService. required",
              args: { name: "endpoint-service-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of Database Tools endpoint services",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optLifecycleState,
            optDisplayName3,
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire specified name",
              args: { name: "name" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "private-endpoint",
      description:
        "Allows the Database Tools service to connect to databases in a customer's virtual cloud network (VCN)",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Database Tools private endpoint into a different compartment in the same tenancy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the DatabaseConnectionProfile to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPrivateEndpointId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Database Tools private endpoint",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the Database Tools private endpoint",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--endpoint-service-id",
              description: "The OCID of the DatabaseToolsEndpointService",
              args: { name: "endpoint-service-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet that the private endpoint belongs to",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            optDefinedTags,
            optFreeformTags,
            optLocks,
            {
              name: "--description",
              description:
                "A description of the Database Tools private endpoint",
              args: { name: "description" },
            },
            {
              name: "--private-endpoint-ip",
              description:
                "The private IP address that represents the access point for the associated endpoint service",
              args: { name: "private-endpoint-ip" },
            },
            {
              name: "--nsg-ids",
              description:
                "The OCID of the network security groups that the private endpoint's VNIC belongs to",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified Database Tools private endpoint",
          options: [
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPrivateEndpointId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets details of a specified Database Tools private endpoint",
          options: [optPrivateEndpointId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Database Tools private endpoints",
          options: [
            optCompartmentId,
            {
              name: "--subnet-id",
              description:
                "A filter to return only resources their subnetId matches the specified subnetId",
              args: { name: "subnet-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--endpoint-service-id",
              description:
                "A filter to return only resources their endpointServiceId matches the specified endpointServiceId",
              args: { name: "endpoint-service-id" },
            },
            optLifecycleState,
            optDisplayName3,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified Database Tools private endpoint",
          options: [
            optDefinedTags,
            optFreeformTags,
            optDisplayName2,
            {
              name: "--description",
              description:
                "A description of the Database Tools private endpoint",
              args: { name: "description" },
            },
            {
              name: "--nsg-ids",
              description:
                "The OCID of the network security groups that the private endpoint's VNIC belongs to",
              args: { name: "json" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPrivateEndpointId,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description:
            "Adds a lock to a Database Tools private endpoint resource",
          options: [
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPrivateEndpointId,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description:
            "Removes a lock from a Database Tools private endpoint resource",
          options: [
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPrivateEndpointId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "identity",
      description:
        "Manages credentials in a database to access service resources",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified Database Tools identity to a different compartment in the same tenancy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Database Tools identity to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIdentityId,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified Database Tools identity resource",
          options: [
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIdentityId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details of the specified Database Tools identity",
          options: [optIdentityId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Database Tools identities",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return resources only when their databaseToolsIdentityLifecycleState matches the specified",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optDisplayName3,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--type",
              description:
                "A filter to return only resources with one of the specified type values",
              args: { suggestions: ["ORACLE_DATABASE_RESOURCE_PRINCIPAL"] },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            {
              name: "--connection-id",
              description:
                "A filter to return only resources their databaseToolsConnectionId matches the specified",
              args: { name: "connection-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a Database Tools identity resource",
          options: [
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIdentityId,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description: "Removes a lock from a Database Tools identity resource",
          options: [
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIdentityId,
            optFromJson,
          ],
        },
        {
          name: "create-oracle-database-resource-principal",
          description: "Creates a new Database Tools identity",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the Database Tools identity",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--credential-key",
              description:
                "The name of the credential object created in the Oracle Database",
              args: { name: "credential-key" },
              isRequired: true,
            },
            optDefinedTags,
            optFreeformTags,
            optLocks,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-id",
              description:
                "The OCID of the related Database Tools Connection. required",
              args: { name: "connection-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "refresh-oracle-database-resource-principal-credential",
          description: "Refresh Database Tools identity credential",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIdentityId,
            optFromJson,
          ],
        },
        {
          name: "update-oracle-database-resource-principal",
          description: "Updates the specified Database Tools identity",
          options: [
            optDisplayName2,
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIdentityId,
            optFromJson,
          ],
        },
        {
          name: "validate-oracle-database-resource-principal-credential",
          description:
            "Validates the Database Tools identity credentials by establishing a connection to the customer database",
          options: [optIfMatch, optIdentityId, optFromJson],
        },
      ],
    },
    {
      name: "database-api-gateway-config",
      description:
        "Manage configuration related to database API gateway config resources",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified Database Tools database API gateway config to a different compartment in the same tenancy",
          options: [
            optDatabaseApiGatewayConfigId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Database Tools database API gateway config to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified Database Tools database API gateway config resource",
          options: [
            optDatabaseApiGatewayConfigId,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets details of the specified Database Tools database API gateway config",
          options: [optDatabaseApiGatewayConfigId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of Database Tools database API gateway configs",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return resources only when their lifecycleState matches the specified lifecycleState",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            optDisplayName3,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--type",
              description:
                "A filter to return only resources with one of the specified type values",
              args: { suggestions: ["DEFAULT"] },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-database-api-gateway-config-default",
          description:
            "Creates a new default Database Tools database API gateway config",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the Database Tools database API gateway config",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--metadata-source",
              description: "The RESTful service definition location",
              args: { suggestions: ["DATABASE", "CLOUD"] },
              isRequired: true,
            },
            optDefinedTags,
            optFreeformTags,
            optLocks,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-database-api-gateway-config-default",
          description:
            "Updates the specified Database Tools database API gateway config",
          options: [
            optDatabaseApiGatewayConfigId,
            optDisplayName2,
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description:
            "Adds a lock to a DatabaseToolsDatabaseApiGatewayConfig resource",
          options: [
            optDatabaseApiGatewayConfigId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description:
            "Removes a lock from a DatabaseToolsDatabaseApiGatewayConfig resource",
          options: [
            optDatabaseApiGatewayConfigId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "mcp-server",
      description:
        "Allows the creation, configuration and management of an MCP server",
      subcommands: [
        {
          name: "cascading-delete",
          description:
            "Deletes the Database Tools MCP server resource and its associated assets",
          options: [
            optMcpServerId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves the specified Database Tools MCP server to a different compartment in the same tenancy",
          options: [
            optMcpServerId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Database Tools MCP server to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified Database Tools MCP server resource",
          options: [
            optMcpServerId,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets details of the specified Database Tools MCP server",
          options: [optMcpServerId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Database Tools MCP servers",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return resources only when their databaseToolsMcpServerLifecycleState matches the specified",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optDisplayName3,
            {
              name: "--database-tools-connection-id",
              description:
                "A filter to return only resources when their databaseToolsConnectionId matches the specified",
              args: { name: "database-tools-connection-id" },
            },
            {
              name: "--related-resource-identifier",
              description: "The OCID of the related resource",
              args: { name: "related-resource-identifier" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--type",
              description:
                "A filter to return only resources with one of the specified type values",
              args: { suggestions: ["DEFAULT"] },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-mcp-server-default",
          description: "Creates a new Database Tools MCP server",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description:
                "A meaningful, human-readable label displayed to end users",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--connection-id",
              description: "The OCID of the related Database Tools connection",
              args: { name: "connection-id" },
              isRequired: true,
            },
            {
              name: "--domain-id",
              description: "The OCID of the associated identity domain",
              args: { name: "domain-id" },
              isRequired: true,
            },
            { name: "--storage", args: { name: "json" }, isRequired: true },
            {
              name: "--custom-roles",
              description: "Custom Roles associated with the MCP Server",
              args: { name: "json" },
            },
            {
              name: "--description",
              description:
                "A human-readable description of the Database Tools MCP server",
              args: { name: "description" },
            },
            {
              name: "--access-token-expiry-in-seconds",
              description: "Access token expiry in seconds",
              args: { name: "integer" },
            },
            {
              name: "--refresh-token-expiry-in-seconds",
              description: "Refresh token expiry in seconds",
              args: { name: "integer" },
            },
            optDefinedTags,
            optFreeformTags,
            optRuntimeIdentity,
            optLocks,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-mcp-server-default",
          description: "Updates the specified Database Tools MCP server",
          options: [
            optMcpServerId,
            {
              name: "--display-name",
              description:
                "A meaningful, human-readable label displayed to end users",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "A human-readable description of the Database Tools MCP server",
              args: { name: "description" },
            },
            {
              name: "--custom-roles",
              description: "Custom roles associated with the MCP Server",
              args: { name: "json" },
            },
            {
              name: "--access-token-expiry-in-seconds",
              description: "Access token expiry in seconds",
              args: { name: "integer" },
            },
            {
              name: "--refresh-token-expiry-in-seconds",
              description: "Refresh token expiry in seconds",
              args: { name: "integer" },
            },
            optDefinedTags,
            optFreeformTags,
            { name: "--storage", args: { name: "json" } },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a DatabaseToolsMcpServer resource",
          options: [
            optMcpServerId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description: "Removes a lock from a DatabaseToolsMcpServer resource",
          options: [
            optMcpServerId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "mcp-toolset",
      description:
        "Allows the creation, configuration and management of an MCP Toolset",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified Database Tools MCP Toolset to a different compartment in the same tenancy",
          options: [
            optMcpToolsetId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Database Tools MCP Toolset to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified Database Tools MCP Toolset resource",
          options: [
            optMcpToolsetId,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets details of the specified Database Tools MCP Toolset",
          options: [optMcpToolsetId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Database Tools Toolsets",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return resources only when their databaseToolsMcpToolsetLifecycleState matches the specified",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName3,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--type",
              description:
                "A filter to return only resources with one of the specified type values",
              args: {
                suggestions: [
                  "CUSTOM_SQL_TOOL",
                  "BUILT_IN_SQL_TOOLS",
                  "CUSTOMIZABLE_REPORTING_TOOLS",
                  "GENAI_SQL_ASSISTANT",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--mcp-server-id",
              description:
                "A filter to return only resources matching the specified databaseToolsMcpServerId",
              args: { name: "mcp-server-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-mcp-toolset-built-in-sql-tools",
          description:
            "Creates a new Database Tools MCP Toolset for built-in SQL tools",
          options: [
            optToolsetVersion,
            optCompartmentId2,
            optDisplayName,
            optMcpServerId2,
            optDescription,
            optDefinedTags,
            optFreeformTags,
            optLocks,
            {
              name: "--tools",
              description:
                "List of Database Tools BUILT_IN_SQL_TOOLS toolset tool configurations",
              args: { name: "json" },
            },
            optDefaultExecutionType,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-mcp-toolset-custom-sql-tool",
          description:
            "Creates a new Database Tools MCP Toolset for a custom SQL tool",
          options: [
            optToolsetVersion,
            optCompartmentId2,
            optDisplayName,
            optMcpServerId2,
            {
              name: "--tool-name",
              description: "Name of the tool returned by the MCP Server",
              args: { name: "tool-name" },
              isRequired: true,
            },
            { name: "--source", args: { name: "json" }, isRequired: true },
            optDescription,
            optDefinedTags,
            optFreeformTags,
            optLocks,
            {
              name: "--tool-description",
              description:
                "Instructions describing how to use the MCP toolset and its features",
              args: { name: "tool-description" },
            },
            {
              name: "--variables",
              description: "The variables to use with the query",
              args: { name: "json" },
            },
            {
              name: "--allowed-roles",
              description:
                "The roles granted access to the MCP tool generated by this toolset",
              args: { name: "json" },
            },
            optDefaultExecutionType,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-mcp-toolset-customizable-reporting-tools",
          description:
            "Creates a new Database Tools MCP Toolset for customizable reporting tools",
          options: [
            optToolsetVersion,
            optCompartmentId2,
            optDisplayName,
            optMcpServerId2,
            {
              name: "--reports",
              description: "List of Database Tools SQL Reports",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optDefinedTags,
            optFreeformTags,
            optLocks,
            {
              name: "--tools",
              description:
                "List of Database Tools CUSTOMIZABLE_REPORTING_TOOLS toolset tool configurations",
              args: { name: "json" },
            },
            optDefaultExecutionType,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-mcp-toolset-gen-ai-sql-assistant",
          description:
            "Creates a new Database Tools MCP Toolset for a GenAI SQL assistant",
          options: [
            optToolsetVersion,
            optCompartmentId2,
            optDisplayName,
            optMcpServerId2,
            {
              name: "--generative-ai-semantic-store-id",
              description:
                "The OCID of the related Generative AI Semantic Store",
              args: { name: "generative-ai-semantic-store-id" },
              isRequired: true,
            },
            optDescription,
            optDefinedTags,
            optFreeformTags,
            optLocks,
            {
              name: "--tools",
              description:
                "List of Database Tools GENAI_SQL_ASSISTANT toolset tool configurations",
              args: { name: "json" },
            },
            optDefaultExecutionType,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-mcp-toolset-built-in-sql-tools",
          description:
            "Updates the specified Database Tools MCP Toolset for built-in SQL tools",
          options: [
            optMcpToolsetId,
            optToolsetVersion2,
            optDisplayName2,
            optDescription,
            optDefinedTags,
            optFreeformTags,
            {
              name: "--tools",
              description:
                "List of Database Tools BUILT_IN_SQL_TOOLS toolset tool configurations",
              args: { name: "json" },
            },
            optDefaultExecutionType,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-mcp-toolset-custom-sql-tool",
          description:
            "Updates the specified Database Tools MCP Toolset for a custom SQL tool",
          options: [
            optMcpToolsetId,
            optToolsetVersion2,
            optDisplayName2,
            optDescription,
            optDefinedTags,
            optFreeformTags,
            {
              name: "--tool-description",
              description:
                "Instructions describing how to use the MCP toolset and its features",
              args: { name: "tool-description" },
            },
            {
              name: "--tool-name",
              description: "Name of the tool returned by the MCP Server",
              args: { name: "tool-name" },
            },
            { name: "--source", args: { name: "json" } },
            {
              name: "--variables",
              description: "The variables to use with the query",
              args: { name: "json" },
            },
            {
              name: "--allowed-roles",
              description:
                "The roles granted access to the MCP tool generated by this toolset",
              args: { name: "json" },
            },
            optDefaultExecutionType,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-mcp-toolset-customizable-reporting-tools",
          description:
            "Updates the specified Database Tools MCP Toolset for customizable reporting tools",
          options: [
            optMcpToolsetId,
            optToolsetVersion2,
            optDisplayName2,
            optDescription,
            optDefinedTags,
            optFreeformTags,
            {
              name: "--reports",
              description: "List of Database Tools SQL Reports",
              args: { name: "json" },
            },
            {
              name: "--tools",
              description:
                "List of Database Tools CUSTOMIZABLE_REPORTING_TOOLS toolset tool configurations",
              args: { name: "json" },
            },
            optDefaultExecutionType,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-mcp-toolset-gen-ai-sql-assistant",
          description:
            "Updates the specified Database Tools MCP Toolset for a GenAI SQL assistant",
          options: [
            optMcpToolsetId,
            optToolsetVersion2,
            optDisplayName2,
            optDescription,
            optDefinedTags,
            optFreeformTags,
            {
              name: "--generative-ai-semantic-store-id",
              description:
                "The OCID of the related Generative AI Semantic Store",
              args: { name: "generative-ai-semantic-store-id" },
            },
            {
              name: "--tools",
              description:
                "List of Database Tools GENAI_SQL_ASSISTANT toolset tool configurations",
              args: { name: "json" },
            },
            optDefaultExecutionType,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a DatabaseToolsMcpToolset resource",
          options: [
            optMcpToolsetId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description: "Removes a lock from a DatabaseToolsMcpToolset resource",
          options: [
            optMcpToolsetId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sql-report",
      description:
        "Allows generating a summary of SQL query execution details for database operations",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified Database Tools SQL Report to a different compartment in the same tenancy",
          options: [
            optSqlReportId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Database Tools SQL Report to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified Database Tools SQL Report resource",
          options: [
            optSqlReportId,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets details of the specified Database Tools SQL report",
          options: [optSqlReportId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Database Tools SQL reports",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return resources only when their databaseToolsSqlReportLifecycleState matches the specified",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            optDisplayName3,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--type",
              description:
                "A filter to return only resources with one of the specified type values",
              args: { suggestions: ["ORACLE_DATABASE"] },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-sql-report-oracle-database",
          description:
            "Creates a new Database Tools SQL report for Oracle Database",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the Database Tools SQL report",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--source",
              description: "SQL query executed to generate the report",
              args: { name: "source" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description of the SQL report",
              args: { name: "description" },
            },
            {
              name: "--purpose",
              description: "Purpose of the Database Tools SQL report",
              args: { name: "purpose" },
            },
            {
              name: "--instructions",
              description: "Instructions on how to use the SQL report",
              args: { name: "instructions" },
            },
            {
              name: "--variables",
              description:
                "Variables referenced in the Database Tools SQL Report source",
              args: { name: "json" },
            },
            {
              name: "--columns",
              description:
                "Descriptive information on columns referenced in the Database Tools SQL Report source",
              args: { name: "json" },
            },
            optDefinedTags,
            optFreeformTags,
            optLocks,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-sql-report-oracle-database",
          description: "Updates the specified Database Tools SQL Report",
          options: [
            optSqlReportId,
            optDisplayName2,
            optDefinedTags,
            optFreeformTags,
            {
              name: "--source",
              description: "SQL query executed to generate the report",
              args: { name: "source" },
            },
            {
              name: "--description",
              description: "A description of the SQL report",
              args: { name: "description" },
            },
            {
              name: "--purpose",
              description: "Purpose of the Database Tools SQL report",
              args: { name: "purpose" },
            },
            {
              name: "--instructions",
              description: "Instructions on how to use the SQL report",
              args: { name: "instructions" },
            },
            {
              name: "--variables",
              description:
                "Variables referenced in the Database Tools SQL Report source",
              args: { name: "json" },
            },
            {
              name: "--columns",
              description:
                "Descriptive information on columns referenced in the Database Tools SQL Report source",
              args: { name: "json" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a DatabaseToolsSqlReport resource",
          options: [
            optSqlReportId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description: "Removes a lock from a DatabaseToolsSqlReport resource",
          options: [
            optSqlReportId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "mcp-toolset-version-collection",
      description: "List of MCP toolset type version summary items",
      subcommands: [
        {
          name: "list-mcp-toolset-version",
          description: "Returns a list of Database Tools Toolset versions",
          options: [
            optCompartmentId,
            {
              name: "--mcp-server-id",
              description:
                "A filter to return only resources matching the specified databaseToolsMcpServerId",
              args: { name: "mcp-server-id" },
            },
            optDisplayName3,
            optAll,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
