// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description:
    "If-Match is most often used with state-changing methods (e.g., POST, PUT",
  args: { name: "if-match" },
};
const optConnectionId: Fig.Option = {
  name: "--connection-id",
  description: "The OCID of a Database Tools connection",
  args: { name: "connection-id" },
  isRequired: true,
};
const optDatabaseApiGatewayConfigId: Fig.Option = {
  name: "--database-api-gateway-config-id",
  description: "The OCID of a Database Tools database API gateway config",
  args: { name: "database-api-gateway-config-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCredentialKey: Fig.Option = {
  name: "--credential-key",
  description: "The name of the credential",
  args: { name: "credential-key" },
  isRequired: true,
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
const optPoolKey: Fig.Option = {
  name: "--pool-key",
  description: "The key of the pool config",
  args: { name: "pool-key" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optPropertySetKey: Fig.Option = {
  name: "--property-set-key",
  description: "The name of the property set",
  args: {
    suggestions: [
      "APEX_DOCUMENT_GENERATOR",
      "APEX",
      "APEX_FA_INTEGRATION",
      "ORACLE_DATABASE_EXTERNAL_AUTHENTICATION",
    ],
  },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optApiSpecKey: Fig.Option = {
  name: "--api-spec-key",
  description: "The key of the API spec config",
  args: { name: "api-spec-key" },
  isRequired: true,
};
const optAutoApiSpecKey: Fig.Option = {
  name: "--auto-api-spec-key",
  description: "The key of the auto API spec config",
  args: { name: "auto-api-spec-key" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire specified display name",
  args: { name: "display-name" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optIfMatch2: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optPublicSynonymKey: Fig.Option = {
  name: "--public-synonym-key",
  description: "The name of the public synonym for the credential",
  args: { name: "public-synonym-key" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "dbtools-runtime",
  description: "Database Tools Runtime",
  subcommands: [
    {
      name: "property-set",
      description: "The base definition for a property set",
      subcommands: [
        {
          name: "get",
          description: "Get a property set",
          options: [
            optConnectionId,
            optPropertySetKey,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update property set resources",
          subcommands: [
            {
              name: "apex-document-generator-details",
              description: "Update the APEX Document Generator property set",
              options: [
                optConnectionId,
                optPropertySetKey,
                {
                  name: "--print-server-type",
                  description: "The print server type",
                  args: { name: "print-server-type" },
                },
                {
                  name: "--credential-key",
                  description:
                    "The name of the credential used by APEX to manage Object Storage Buckets and Objects as well as invoke",
                  args: { name: "credential-key" },
                },
                {
                  name: "--autonomous-database-resource-principal-status",
                  description:
                    "The status of the Autonomous Database Serverless Resource Principal (OCI$RESOURCE_PRINCIPAL)",
                  args: {
                    name: "autonomous-database-resource-principal-status",
                  },
                },
                {
                  name: "--object-storage-namespace",
                  description:
                    "The Object Storage Namespace containing the Object Storage Buckets managed by APEX",
                  args: { name: "object-storage-namespace" },
                },
                {
                  name: "--object-storage-bucket-compartment-id",
                  description:
                    "The OCID of the compartment containing the Object Storage Buckets managed by APEX",
                  args: { name: "object-storage-bucket-compartment-id" },
                },
                {
                  name: "--object-storage-endpoint",
                  description: "Object Storage Endpoint",
                  args: { name: "object-storage-endpoint" },
                },
                {
                  name: "--function-id",
                  description: "The OCID of the Document Generator function",
                  args: { name: "function-id" },
                },
                {
                  name: "--invoke-endpoint",
                  description:
                    "The base endpoint URL to use to invoke the Document Generator function",
                  args: { name: "invoke-endpoint" },
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "apex-fa-integration-details",
              description: "Update the APEX FA Integration property set",
              options: [
                optConnectionId,
                optPropertySetKey,
                {
                  name: "--authentication-substitutions",
                  description: "APEX FA Integration key-value pairs",
                  args: { name: "json" },
                },
                {
                  name: "--instance-dbms-credential-enabled",
                  description:
                    "Specifies whether database credentials can be used in all workspaces on the APEX instance",
                  args: { name: "instance-dbms-credential-enabled" },
                },
                optIfMatch,
                optForce2,
                optFromJson,
              ],
            },
            {
              name: "oracle-database-external-authentication-details",
              description:
                "Update the Oracle Database External Authentication property set",
              options: [
                optConnectionId,
                optPropertySetKey,
                {
                  name: "--identity-provider",
                  args: { name: "json" },
                  isRequired: true,
                },
                optIfMatch,
                optForce2,
                optFromJson,
              ],
            },
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
          name: "cancel",
          description: "Attempts to cancel the specified work request",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets the status of the specified work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--resource-identifier",
              description: "The OCID of the resource",
              args: { name: "resource-identifier" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["timeAccepted", "timeUpdated", "timeFinished"],
              },
            },
            optPage,
            optLimit,
            {
              name: "--operation-type",
              description: "The work request operation type",
              args: {
                suggestions: ["EXECUTE_SQL", "EXECUTE_SQL_SCHEDULED_DELETION"],
              },
              isRepeatable: true,
            },
            {
              name: "--created-by-principal-id",
              description:
                "A filter to return only work requests initiated by the specified principal OCID",
              args: { name: "created-by-principal-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only work requests with one of the specified status values",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "WAITING",
                ],
              },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "credential",
      description: "Credential information",
      subcommands: [
        {
          name: "delete",
          description: "Delete credential",
          options: [
            optConnectionId,
            optCredentialKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a credential",
          options: [optConnectionId, optCredentialKey, optIfMatch, optFromJson],
        },
        {
          name: "list-execute-grantees",
          description: "Get a list of all execute grantees",
          options: [
            optConnectionId,
            optCredentialKey,
            optIfMatch,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-public-synonyms",
          description:
            "Get a list of all public synonyms for the given credential",
          options: [
            optConnectionId,
            optCredentialKey,
            optIfMatch,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a database credential",
          subcommands: [
            {
              name: "basic",
              description:
                "Creates a credential for the user specified by the key",
              options: [
                optConnectionId,
                {
                  name: "--credential-key",
                  description: "The credential_name to be created",
                  args: { name: "credential-key" },
                  isRequired: true,
                },
                {
                  name: "--user-name",
                  description: "The username for the new credential",
                  args: { name: "user-name" },
                  isRequired: true,
                },
                {
                  name: "--password",
                  description: "The password for the new credential",
                  args: { name: "password" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update a database credential",
          subcommands: [
            {
              name: "basic",
              description: "Update a credential",
              options: [
                optConnectionId,
                optCredentialKey,
                {
                  name: "--user-name",
                  description: "The username for the new credential",
                  args: { name: "user-name" },
                },
                {
                  name: "--password",
                  description: "The password for the new credential",
                  args: { name: "password" },
                },
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "list",
          description:
            "Returns a paginated list of CredentialSummary for the specified request",
          options: [
            optConnectionId,
            optIfMatch2,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
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
      name: "user",
      description: "User resources",
      subcommands: [
        {
          name: "credential",
          description: "User credential resources",
          subcommands: [
            {
              name: "get",
              description: "Get a user credential",
              options: [
                optConnectionId,
                {
                  name: "--user-key",
                  description: "The name of the database user",
                  args: { name: "user-key" },
                  isRequired: true,
                },
                optCredentialKey,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns a paginated list of user UserCredentialSummary for the specified request",
              options: [
                optConnectionId,
                {
                  name: "--user-key",
                  description: "The name of the database user",
                  args: { name: "user-key" },
                  isRequired: true,
                },
                optIfMatch,
                optLimit,
                optPage,
                optSortOrder,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "execute-grantee",
      description:
        "Specifies the database user, the grantee, who is granted the execute privilege on the credential",
      subcommands: [
        {
          name: "create",
          description:
            "Grants the EXECUTE privilege on the credential to the user specified by the key",
          options: [
            optConnectionId,
            optCredentialKey,
            {
              name: "--execute-grantee-key",
              description:
                "The name of the user to grant the EXECUTE privilege on the credential",
              args: { name: "execute-grantee-key" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete execute grantee",
          options: [
            optConnectionId,
            optCredentialKey,
            {
              name: "--execute-grantee-key",
              description:
                "The name of the user granted the EXECUTE privilege on the credential",
              args: { name: "execute-grantee-key" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a credential execute grantee",
          options: [
            optConnectionId,
            optCredentialKey,
            {
              name: "--execute-grantee-key",
              description:
                "The name of the user granted the EXECUTE privilege on the credential",
              args: { name: "execute-grantee-key" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Get a list of all execute grantees",
          options: [
            optConnectionId,
            optCredentialKey,
            optIfMatch,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "public-synonym",
      description: "The public synonym information",
      subcommands: [
        {
          name: "create",
          description: "Creates a public synonym for the given credentials",
          options: [
            optConnectionId,
            optCredentialKey,
            optPublicSynonymKey,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the public synonym",
          options: [
            optConnectionId,
            optCredentialKey,
            optPublicSynonymKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a public synonym",
          options: [
            optConnectionId,
            optCredentialKey,
            optPublicSynonymKey,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Get a list of all public synonyms for the given credential",
          options: [
            optConnectionId,
            optCredentialKey,
            optIfMatch,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "connection",
      description: "Database Tools connection resources",
      subcommands: [
        {
          name: "list-credentials",
          description:
            "Returns a paginated list of CredentialSummary for the specified request",
          options: [
            optConnectionId,
            optIfMatch,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "execute-sql",
          description: "Execute SQL using a connection",
          subcommands: [
            {
              name: "async",
              description: "Execute SQL asynchronously using a connection",
              options: [
                optConnectionId,
                {
                  name: "--request-input",
                  description: "Request input payload",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--request-output",
                  description: "Request output payload",
                  args: { name: "json" },
                },
                {
                  name: "--output-time-of-deletion",
                  description:
                    "The time when the object becomes eligible for deletion, expressed as an RFC 3339 date-time string",
                  args: { name: "datetime" },
                },
                {
                  name: "--timeout-in-seconds",
                  description: "The timeout in seconds",
                  args: { name: "integer" },
                },
                optIfMatch2,
                {
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
                    ],
                  },
                  isRepeatable: true,
                },
                {
                  name: "--max-wait-seconds",
                  description:
                    "Maximum time to wait for the --wait-for-state state (default 1200)",
                  args: { name: "integer" },
                },
                {
                  name: "--wait-interval-seconds",
                  description:
                    "Check interval for --wait-for-state in seconds (default 30)",
                  args: { name: "integer" },
                },
                optFromJson,
              ],
            },
            {
              name: "sync",
              description: "Execute SQL synchronously using a connection",
              options: [
                optConnectionId,
                {
                  name: "--request-input",
                  description: "Request input payload",
                  args: { name: "json" },
                  isRequired: true,
                },
                optIfMatch2,
                {
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
                    ],
                  },
                  isRepeatable: true,
                },
                {
                  name: "--max-wait-seconds",
                  description:
                    "Maximum time to wait for the --wait-for-state state (default 1200)",
                  args: { name: "integer" },
                },
                {
                  name: "--wait-interval-seconds",
                  description:
                    "Check interval for --wait-for-state in seconds (default 30)",
                  args: { name: "integer" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "validate",
          description: "Validates the specified Database Tools connection",
          subcommands: [
            {
              name: "mysql",
              description: "Validates the specified Database Tools connection",
              options: [optConnectionId, optIfMatch, optFromJson],
            },
            {
              name: "oracle-database",
              description: "Validates the specified Database Tools connection",
              options: [optConnectionId, optIfMatch, optFromJson],
            },
            {
              name: "postgresql",
              description: "Validates the specified Database Tools connection",
              options: [optConnectionId, optIfMatch, optFromJson],
            },
          ],
        },
      ],
    },
    {
      name: "database-api-gateway-config",
      description: "Database API Gateway configuration resources",
      subcommands: [
        {
          name: "get",
          description: "Get database API gateway config resources",
          subcommands: [
            {
              name: "content",
              description:
                "Get the content of a Database Tools database API gateway config",
              options: [
                optDatabaseApiGatewayConfigId,
                {
                  name: "--file",
                  description:
                    "The name of the file that will receive the response data, or '-' to write to STDOUT",
                  args: { name: "file", template: "filepaths" },
                  isRequired: true,
                },
                optIfMatch,
                {
                  name: "--if-none-match",
                  description: "For conditional requests",
                  args: { name: "if-none-match" },
                },
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "database-api-gateway-config-global",
      description:
        "The content of a Database Tools database API gateway config global resource",
      subcommands: [
        {
          name: "get",
          description:
            "Get a Database Tools database API gateway config global resource",
          options: [
            optDatabaseApiGatewayConfigId,
            {
              name: "--global-key",
              description: "The key of the global config",
              args: { suggestions: ["SETTINGS"] },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update database API gateway config global settings",
          subcommands: [
            {
              name: "default",
              description:
                "Update a Database Tools database API gateway config global resource",
              options: [
                optDatabaseApiGatewayConfigId,
                {
                  name: "--global-key",
                  description: "The key of the global config",
                  args: { suggestions: ["SETTINGS"] },
                  isRequired: true,
                },
                {
                  name: "--pool-route",
                  description:
                    "How the target pool route value is determined for a HTTP request",
                  args: { suggestions: ["PATH", "HEADER"] },
                },
                {
                  name: "--pool-routing-header",
                  description:
                    "The request header name providing the pool route value",
                  args: { name: "pool-routing-header" },
                },
                {
                  name: "--database-api-status",
                  description:
                    "ORDS database API is a database management and monitoring REST API",
                  args: { suggestions: ["ENABLED", "DISABLED"] },
                },
                {
                  name: "--http-port",
                  description: "Specifies the HTTP listen port",
                  args: { name: "integer" },
                },
                {
                  name: "--https-port",
                  description: "Specifies the HTTPS listen port",
                  args: { name: "integer" },
                },
                { name: "--certificate-bundle", args: { name: "json" } },
                {
                  name: "--document-root",
                  description:
                    "The location of the static resources to be served under the / root server path",
                  args: { name: "document-root" },
                },
                {
                  name: "--advanced-properties",
                  description: "Advanced global properties",
                  args: { name: "json" },
                },
                optIfMatch,
                optForce2,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "database-api-gateway-config-pool",
      description:
        "The content of a Database Tools database API gateway config pool sub resource",
      subcommands: [
        {
          name: "get",
          description:
            "Get a Database Tools database API gateway config pool resource",
          options: [
            optDatabaseApiGatewayConfigId,
            optPoolKey,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create database API gateway config pool resources",
          subcommands: [
            {
              name: "default",
              description:
                "Create a Database Tools database API gateway config pool resource",
              options: [
                optDatabaseApiGatewayConfigId,
                optDisplayName2,
                {
                  name: "--pool-route-value",
                  description:
                    "The pool route value provided in requests to target this pool",
                  args: { name: "pool-route-value" },
                  isRequired: true,
                },
                {
                  name: "--database-tools-connection-id",
                  description:
                    "The OCID of the related Database Tools connection",
                  args: { name: "database-tools-connection-id" },
                  isRequired: true,
                },
                {
                  name: "--max-pool-size",
                  description:
                    "Specifies the maximum number of database connections allowed for the pool",
                  args: { name: "integer" },
                },
                {
                  name: "--min-pool-size",
                  description:
                    "Specifies the minimum number of database connections allowed for the pool",
                  args: { name: "integer" },
                },
                {
                  name: "--initial-pool-size",
                  description:
                    "Specifies the initial size for the number of database connections that will be created for the pool",
                  args: { name: "integer" },
                },
                {
                  name: "--jwt-profile-jwk-url",
                  description:
                    "Specifies the URL of the JSON Web Key (JWK) that is used to verify the signature of the JWT token",
                  args: { name: "jwt-profile-jwk-url" },
                },
                {
                  name: "--jwt-profile-issuer",
                  description: "Specifies the issuer of the JWT token",
                  args: { name: "jwt-profile-issuer" },
                },
                {
                  name: "--jwt-profile-audience",
                  description:
                    "Specifies the expected audience for the JWT token",
                  args: { name: "jwt-profile-audience" },
                },
                {
                  name: "--jwt-profile-role-claim-name",
                  description:
                    "Specifies the JSON pointer to the claim in the JWT token that contains the roles of the users",
                  args: { name: "jwt-profile-role-claim-name" },
                },
                {
                  name: "--database-actions-status",
                  description:
                    "Specifies to enable the Database Actions feature",
                  args: { suggestions: ["ENABLED", "DISABLED"] },
                },
                {
                  name: "--rest-enabled-sql-status",
                  description:
                    "Specifies whether the REST-Enabled SQL service is active",
                  args: { suggestions: ["ENABLED", "DISABLED"] },
                },
                {
                  name: "--advanced-properties",
                  description: "Advanced pool properties",
                  args: { name: "json" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of Database Tools database API gateway config pool resources",
          options: [
            optDatabaseApiGatewayConfigId,
            optDisplayName,
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
          name: "delete",
          description:
            "Deletes the specified Database Tools database API gateway config pool resource",
          options: [
            optDatabaseApiGatewayConfigId,
            optPoolKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update database API gateway config pool resources",
          subcommands: [
            {
              name: "default",
              description:
                "Update a Database Tools database API gateway config pool resource",
              options: [
                optDatabaseApiGatewayConfigId,
                optPoolKey,
                optDisplayName3,
                {
                  name: "--pool-route-value",
                  description:
                    "The pool route value provided in requests to target this pool",
                  args: { name: "pool-route-value" },
                },
                {
                  name: "--database-tools-connection-id",
                  description:
                    "The OCID of the related Database Tools connection",
                  args: { name: "database-tools-connection-id" },
                },
                {
                  name: "--max-pool-size",
                  description:
                    "Specifies the maximum number of database connections allowed for the pool",
                  args: { name: "integer" },
                },
                {
                  name: "--min-pool-size",
                  description:
                    "Specifies the minimum number of database connections allowed for the pool",
                  args: { name: "integer" },
                },
                {
                  name: "--initial-pool-size",
                  description:
                    "Specifies the initial size for the number of database connections that will be created for the pool",
                  args: { name: "integer" },
                },
                {
                  name: "--jwt-profile-jwk-url",
                  description:
                    "Specifies the URL of the JSON Web Key (JWK) that is used to verify the signature of the JWT token",
                  args: { name: "jwt-profile-jwk-url" },
                },
                {
                  name: "--jwt-profile-issuer",
                  description: "Specifies the issuer of the JWT token",
                  args: { name: "jwt-profile-issuer" },
                },
                {
                  name: "--jwt-profile-audience",
                  description:
                    "Specifies the expected audience for the JWT token",
                  args: { name: "jwt-profile-audience" },
                },
                {
                  name: "--jwt-profile-role-claim-name",
                  description:
                    "Specifies the JSON pointer to the claim in the JWT token that contains the roles of the users",
                  args: { name: "jwt-profile-role-claim-name" },
                },
                {
                  name: "--database-actions-status",
                  description:
                    "Specifies to enable the Database Actions feature",
                  args: { suggestions: ["ENABLED", "DISABLED"] },
                },
                {
                  name: "--rest-enabled-sql-status",
                  description:
                    "Specifies whether the REST-Enabled SQL service is active",
                  args: { suggestions: ["ENABLED", "DISABLED"] },
                },
                {
                  name: "--advanced-properties",
                  description: "Advanced pool properties",
                  args: { name: "json" },
                },
                optIfMatch,
                optForce2,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "database-api-gateway-config-pool-api-spec",
      description:
        "The content of a Database Tools database API gateway config API spec sub resource defined within a pool",
      subcommands: [
        {
          name: "get",
          description:
            "Get a Database Tools database API gateway config API spec resource",
          options: [
            optDatabaseApiGatewayConfigId,
            optPoolKey,
            optApiSpecKey,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Create database API gateway config pool API spec resources",
          subcommands: [
            {
              name: "default",
              description:
                "Create a Database Tools database API gateway config API spec resource",
              options: [
                optDatabaseApiGatewayConfigId,
                optPoolKey,
                optDisplayName2,
                {
                  name: "--content",
                  description:
                    "The content of a string-escaped Open API spec in JSON format",
                  args: { name: "content" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of Database Tools database API gateway config API spec resources",
          options: [
            optDatabaseApiGatewayConfigId,
            optPoolKey,
            optDisplayName,
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
          name: "delete",
          description:
            "Deletes the specified Database Tools database API gateway config API spec resource",
          options: [
            optDatabaseApiGatewayConfigId,
            optPoolKey,
            optApiSpecKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Update database API gateway config pool API spec resources",
          subcommands: [
            {
              name: "default",
              description:
                "Update a Database Tools database API gateway config API spec resource",
              options: [
                optDatabaseApiGatewayConfigId,
                optPoolKey,
                optApiSpecKey,
                optDisplayName3,
                {
                  name: "--content",
                  description:
                    "The content of a string-escaped Open API spec in JSON format",
                  args: { name: "content" },
                },
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "database-api-gateway-config-pool-auto-api-spec",
      description:
        "The content of a Database Tools database API gateway config auto API spec sub resource defined within a pool",
      subcommands: [
        {
          name: "get",
          description:
            "Get a Database Tools database API gateway config auto API spec resource",
          options: [
            optDatabaseApiGatewayConfigId,
            optPoolKey,
            optAutoApiSpecKey,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Create database API gateway config pool auto API spec resources",
          subcommands: [
            {
              name: "default",
              description:
                "Create a Database Tools database API gateway config auto API spec resource",
              options: [
                optDatabaseApiGatewayConfigId,
                optPoolKey,
                optDisplayName2,
                {
                  name: "--database-object-name",
                  description: "The name of the database object",
                  args: { name: "database-object-name" },
                  isRequired: true,
                },
                {
                  name: "--database-object-type",
                  description: "The type of the database object",
                  args: {
                    suggestions: [
                      "FUNCTION",
                      "MVIEW",
                      "PACKAGE",
                      "PROCEDURE",
                      "TABLE",
                      "VIEW",
                      "DUALITYVIEW",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "Description of the autoApiSpec",
                  args: { name: "description" },
                },
                {
                  name: "--alias",
                  description: "Used as the URI path element for this object",
                  args: { name: "alias" },
                },
                {
                  name: "--operations",
                  description:
                    "The operations to limit access to this resource",
                  args: { suggestions: ["READ", "WRITE"] },
                  isRepeatable: true,
                },
                {
                  name: "--security-schemes",
                  description:
                    "The security schemes that can access this resource",
                  args: { suggestions: ["BASIC", "BEARER"] },
                  isRepeatable: true,
                },
                {
                  name: "--scope",
                  description:
                    "The name of the database API gateway config privilege protecting the resource",
                  args: { name: "scope" },
                },
                {
                  name: "--roles",
                  description:
                    "The name of the database API gateway config roles protecting the resource",
                  args: { name: "json" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of Database Tools database API gateway config auto API spec resources",
          options: [
            optDatabaseApiGatewayConfigId,
            optPoolKey,
            optDisplayName,
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
          name: "delete",
          description:
            "Deletes the specified Database Tools database API gateway config auto API spec resource",
          options: [
            optDatabaseApiGatewayConfigId,
            optPoolKey,
            optAutoApiSpecKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Update database API gateway config pool auto API spec resources",
          subcommands: [
            {
              name: "default",
              description:
                "Update a Database Tools database API gateway config auto API spec resource",
              options: [
                optDatabaseApiGatewayConfigId,
                optPoolKey,
                optAutoApiSpecKey,
                optDisplayName3,
                {
                  name: "--database-object-name",
                  description: "The name of the database object",
                  args: { name: "database-object-name" },
                },
                {
                  name: "--database-object-type",
                  description: "The type of the database object",
                  args: {
                    suggestions: [
                      "FUNCTION",
                      "MVIEW",
                      "PACKAGE",
                      "PROCEDURE",
                      "TABLE",
                      "VIEW",
                      "DUALITYVIEW",
                    ],
                  },
                },
                {
                  name: "--description",
                  description: "Description of the autoApiSpec",
                  args: { name: "description" },
                },
                {
                  name: "--alias",
                  description: "Used as the URI path element for this object",
                  args: { name: "alias" },
                },
                {
                  name: "--operations",
                  description:
                    "The operations to limit access to this resource",
                  args: { suggestions: ["READ", "WRITE"] },
                  isRepeatable: true,
                },
                {
                  name: "--security-schemes",
                  description:
                    "The security schemes that can access this resource",
                  args: { suggestions: ["BASIC", "BEARER"] },
                  isRepeatable: true,
                },
                {
                  name: "--scope",
                  description:
                    "The name of the database API gateway config privilege protecting the resource",
                  args: { name: "scope" },
                },
                {
                  name: "--roles",
                  description:
                    "The name of the database API gateway config roles protecting the resource",
                  args: { name: "json" },
                },
                optIfMatch,
                optForce2,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "database-api-gateway-config-advanced-properties",
      description:
        "Description of a database API gateway config setting to be provided as an advanced property",
      subcommands: [
        {
          name: "list",
          description:
            "Returns list of database API gateway config setting descriptions to be provided as advanced properties",
          options: [optAll, optFromJson],
        },
      ],
    },
    {
      name: "identity",
      description:
        "Manages credentials in a database to access service resources",
      subcommands: [
        {
          name: "validate",
          description:
            "Validates the Database Tools identity credentials by establishing a connection to the customer database",
          subcommands: [
            {
              name: "oracle-database-resource-principal",
              description:
                "Validates the Database Tools identity credentials by establishing a connection to the customer database",
              options: [
                {
                  name: "--identity-id",
                  description: "The OCID of a Database Tools identity",
                  args: { name: "identity-id" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
