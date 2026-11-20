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
      "CANCELLED",
      "CANCELLING",
      "FAILED",
      "INPROGRESS",
      "SUCCEEDED",
    ],
  },
  isRepeatable: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optRunId: Fig.Option = {
  name: "--run-id",
  description: "The unique ID for the run",
  args: { name: "run-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of a compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    "The maximum number of results to return in a paginated List call",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The value of the opc-next-page or opc-prev-page response header from the last List call to sent back",
  args: { name: "page" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "A user-friendly description",
  args: { name: "description" },
};
const optDriverShapeConfig: Fig.Option = {
  name: "--driver-shape-config",
  args: { name: "json" },
};
const optExecutorShapeConfig: Fig.Option = {
  name: "--executor-shape-config",
  args: { name: "json" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optPoolId: Fig.Option = {
  name: "--pool-id",
  description: "The unique ID for a pool",
  args: { name: "pool-id" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The ordering of results in ascending or descending order",
  args: { suggestions: ["ASC", "DESC"] },
};
const optSqlEndpointId: Fig.Option = {
  name: "--sql-endpoint-id",
  description: "The unique id of the SQL Endpoint",
  args: { name: "sql-endpoint-id" },
  isRequired: true,
};
const optApplicationId: Fig.Option = {
  name: "--application-id",
  description: "The unique ID for an application",
  args: { name: "application-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "The query parameter for the Spark application name",
  args: { name: "display-name" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optIdleTimeoutInMinutes: Fig.Option = {
  name: "--idle-timeout-in-minutes",
  description: "The timeout value in minutes used to manage Runs",
  args: { name: "integer" },
};
const optMaxDurationInMinutes: Fig.Option = {
  name: "--max-duration-in-minutes",
  description:
    "The maximum duration in minutes for which an Application should run",
  args: { name: "integer" },
};
const optApplicationLogConfig: Fig.Option = {
  name: "--application-log-config",
  args: { name: "json" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optDisplayNameStartsWith: Fig.Option = {
  name: "--display-name-starts-with",
  description: "The displayName prefix",
  args: { name: "display-name-starts-with" },
};
const optLogsBucketUri: Fig.Option = {
  name: "--logs-bucket-uri",
  description:
    "An Oracle Cloud Infrastructure URI of the bucket where the Spark job logs are to be uploaded",
  args: { name: "logs-bucket-uri" },
};
const optMetastoreId: Fig.Option = {
  name: "--metastore-id",
  description: "The OCID of OCI Hive Metastore",
  args: { name: "metastore-id" },
};
const optOwnerPrincipalId: Fig.Option = {
  name: "--owner-principal-id",
  description: "The OCID of the user who created the resource",
  args: { name: "owner-principal-id" },
};
const optPoolId2: Fig.Option = {
  name: "--pool-id",
  description: "The OCID of a pool",
  args: { name: "pool-id" },
};
const optPrivateEndpointId: Fig.Option = {
  name: "--private-endpoint-id",
  description: "The unique ID for a private endpoint",
  args: { name: "private-endpoint-id" },
  isRequired: true,
};
const optSparkVersion: Fig.Option = {
  name: "--spark-version",
  description: "The Spark version utilized to run the application",
  args: { name: "spark-version" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "CANCELING",
      "CANCELED",
      "FAILED",
      "SUCCEEDED",
      "STOPPING",
      "STOPPED",
    ],
  },
  isRepeatable: true,
};
const optWarehouseBucketUri: Fig.Option = {
  name: "--warehouse-bucket-uri",
  description:
    "An Oracle Cloud Infrastructure URI of the bucket to be used as default warehouse directory for BATCH SQL runs",
  args: { name: "warehouse-bucket-uri" },
};
const optArchiveUri: Fig.Option = {
  name: "--archive-uri",
  description:
    "A comma separated list of one or more archive files as Oracle Cloud Infrastructure URIs",
  args: { name: "archive-uri" },
};
const optDriverShape: Fig.Option = {
  name: "--driver-shape",
  description: "The VM shape for the driver",
  args: { name: "driver-shape" },
};
const optExecutorShape: Fig.Option = {
  name: "--executor-shape",
  description: "The VM shape for the executors",
  args: { name: "executor-shape" },
};
const optNumExecutors: Fig.Option = {
  name: "--num-executors",
  description: "The number of executor VMs requested",
  args: { name: "integer" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field used to sort the results",
  args: { suggestions: ["timeCreated"] },
};
const optType: Fig.Option = {
  name: "--type",
  description: "The Spark application processing type",
  args: { suggestions: ["BATCH", "STREAMING", "SESSION"] },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETING", "DELETED", "INACTIVE"] },
  isRepeatable: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The unique ID for a work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "data-flow",
  description: "Data Flow",
  subcommands: [
    {
      name: "work-request-log",
      description: "A Data Flow work request log object",
      subcommands: [
        {
          name: "list",
          description:
            "Return a paginated list of logs for a given work request",
          options: [
            optWorkRequestId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "application",
      description: "A Data Flow application object",
      subcommands: [
        {
          name: "cascading-delete",
          description:
            "Deletes an application using an applicationId and terminates related runs",
          options: [
            optApplicationId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves an application into a different compartment",
          options: [
            optApplicationId,
            optCompartmentId,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an application",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--driver-shape",
              description: "The VM shape for the driver",
              args: { name: "driver-shape" },
              isRequired: true,
            },
            {
              name: "--executor-shape",
              description: "The VM shape for the executors",
              args: { name: "executor-shape" },
              isRequired: true,
            },
            {
              name: "--language",
              description: "The Spark language",
              args: { suggestions: ["SCALA", "JAVA", "PYTHON", "SQL"] },
              isRequired: true,
            },
            {
              name: "--num-executors",
              description: "The number of executor VMs requested",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--spark-version",
              description: "The Spark version utilized to run the application",
              args: { name: "spark-version" },
              isRequired: true,
            },
            optArchiveUri,
            optApplicationLogConfig,
            {
              name: "--class-name",
              description: "The class for the application",
              args: { name: "class-name" },
            },
            optDefinedTags,
            optDescription,
            optDriverShapeConfig,
            optExecutorShapeConfig,
            {
              name: "--file-uri",
              description:
                "An Oracle Cloud Infrastructure URI of the file containing the application to execute",
              args: { name: "file-uri" },
            },
            optFreeformTags,
            optLogsBucketUri,
            optMetastoreId,
            optPoolId2,
            {
              name: "--private-endpoint-id",
              description: "The OCID of a private endpoint",
              args: { name: "private-endpoint-id" },
            },
            optType,
            optWarehouseBucketUri,
            optMaxDurationInMinutes,
            optIdleTimeoutInMinutes,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--arguments",
              description:
                "The arguments passed to the running application as command line arguments",
              args: { name: "arguments" },
            },
            {
              name: "--parameters",
              description:
                "A string of name=value pairs used to supply SQL parameters or fill placeholders found in the arguments",
              args: { name: "parameters" },
            },
            {
              name: "--configuration",
              description:
                "The Spark configuration passed to the running process",
              args: { name: "configuration" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an application using an applicationId",
          options: [
            optApplicationId,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves an application using an applicationId",
          options: [optApplicationId, optFromJson],
        },
        {
          name: "list",
          description: "Lists all applications in the specified compartment",
          options: [
            optCompartmentId2,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field used to sort the results",
              args: { suggestions: ["timeCreated", "displayName", "language"] },
            },
            optSortOrder,
            optDisplayName,
            optOwnerPrincipalId,
            optDisplayNameStartsWith,
            optSparkVersion,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates an application using an applicationId",
          options: [
            optApplicationId,
            {
              name: "--class-name",
              description: "The class for the application",
              args: { name: "class-name" },
            },
            {
              name: "--file-uri",
              description:
                "An Oracle Cloud Infrastructure URI of the file containing the application to execute",
              args: { name: "file-uri" },
            },
            optSparkVersion,
            {
              name: "--language",
              description: "The Spark language",
              args: { suggestions: ["SCALA", "JAVA", "PYTHON", "SQL"] },
            },
            optApplicationLogConfig,
            optArchiveUri,
            optDefinedTags,
            optDescription,
            optDisplayName2,
            optDriverShape,
            optDriverShapeConfig,
            optExecutorShape,
            optExecutorShapeConfig,
            optFreeformTags,
            optLogsBucketUri,
            optMetastoreId,
            optNumExecutors,
            optPoolId2,
            {
              name: "--private-endpoint-id",
              description: "The OCID of a private endpoint",
              args: { name: "private-endpoint-id" },
            },
            optWarehouseBucketUri,
            optMaxDurationInMinutes,
            optIdleTimeoutInMinutes,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--arguments",
              description:
                "The arguments passed to the running application as command line arguments",
              args: { name: "arguments" },
            },
            {
              name: "--parameters",
              description:
                "A string of name=value pairs used to supply SQL parameters or fill placeholders found in the arguments",
              args: { name: "parameters" },
            },
            {
              name: "--configuration",
              description:
                "The Spark configuration passed to the running process",
              args: { name: "configuration" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sql-endpoint-collection",
      description: "The results of a Sql Endpoint search",
      subcommands: [
        {
          name: "list-sql-endpoints",
          description: "Lists all Sql Endpoints in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to query resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--sql-endpoint-id",
              description: "The unique id of the SQL Endpoint",
              args: { name: "sql-endpoint-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only those resources whose sqlEndpointLifecycleState matches the given",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                  "INACTIVE",
                ],
              },
            },
            optDisplayName,
            {
              name: "--limit",
              description: "The maximum number of items that can be returned",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                "The page token representing the page at which to start retrieving results",
              args: { name: "page" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["id", "timeCreated", "displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-error",
      description: "A Data Flow work request error object",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "pool",
      description: "A Data Flow pool object",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a pool into a different compartment",
          options: [optPoolId, optCompartmentId, optIfMatch, optFromJson],
        },
        {
          name: "create",
          description:
            "Create a pool to be used by dataflow runs or applications",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--configurations",
              description: "List of PoolConfig items",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            {
              name: "--schedules",
              description:
                "A list of schedules for pool to auto start and stop",
              args: { name: "json" },
            },
            {
              name: "--idle-timeout-in-minutes",
              description:
                "Optional timeout value in minutes used to auto stop Pools",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a pool using a poolId",
          options: [
            optPoolId,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "SCHEDULED",
                  "CREATING",
                  "ACTIVE",
                  "STOPPING",
                  "STOPPED",
                  "UPDATING",
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
          name: "get",
          description: "Retrieves a pool using a poolId",
          options: [optPoolId, optFromJson],
        },
        {
          name: "list",
          description: "Lists all pools in the specified compartment",
          options: [
            optCompartmentId2,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The LifecycleState of the pool",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "SCHEDULED",
                  "CREATING",
                  "ACTIVE",
                  "STOPPING",
                  "STOPPED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optSortBy,
            optSortOrder,
            optDisplayName,
            optOwnerPrincipalId,
            optDisplayNameStartsWith,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Starts the dataflow pool for a given poolId",
          options: [
            optPoolId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops the dataflow pool for a given poolId",
          options: [
            optPoolId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates a pool using a poolId.If changes to a pool doesn't match a previously defined pool,then a 409 status",
          options: [
            optPoolId,
            optDisplayName2,
            optDescription,
            {
              name: "--configurations",
              description: "List of PoolConfig items",
              args: { name: "json" },
            },
            {
              name: "--schedules",
              description:
                "A list of schedules for pool to auto start and stop",
              args: { name: "json" },
            },
            {
              name: "--idle-timeout-in-minutes",
              description:
                "Optional timeout value in minutes used to auto stop Pools",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
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
      name: "private-endpoint",
      description: "A Data Flow private endpoint object",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a private endpoint into a different compartment",
          options: [
            optPrivateEndpointId,
            optCompartmentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a private endpoint to be used by applications",
          options: [
            optCompartmentId,
            {
              name: "--dns-zones",
              description: "An array of DNS zone names",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description: "The OCID of a subnet",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDescription,
            optDisplayName2,
            optFreeformTags,
            {
              name: "--max-host-count",
              description:
                "The maximum number of hosts to be accessed through the private endpoint",
              args: { name: "integer" },
            },
            {
              name: "--nsg-ids",
              description: "An array of network security group OCIDs",
              args: { name: "json" },
            },
            {
              name: "--scan-details",
              description:
                "An array of fqdn/port pairs used to create private endpoint",
              args: { name: "json" },
            },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
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
          description: "Deletes a private endpoint using a privateEndpointId",
          options: [
            optPrivateEndpointId,
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
          description:
            "Retrieves an private endpoint using a privateEndpointId",
          options: [optPrivateEndpointId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all private endpoints in the specified compartment",
          options: [
            optCompartmentId2,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The LifecycleState of the private endpoint",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optSortBy,
            optSortOrder,
            optDisplayName,
            optOwnerPrincipalId,
            optDisplayNameStartsWith,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a private endpoint using a privateEndpointId",
          options: [
            optPrivateEndpointId,
            optDefinedTags,
            optDescription,
            optDisplayName2,
            {
              name: "--dns-zones",
              description: "An array of DNS zone names",
              args: { name: "json" },
            },
            optFreeformTags,
            {
              name: "--max-host-count",
              description:
                "The maximum number of hosts to be accessed through the private endpoint",
              args: { name: "integer" },
            },
            {
              name: "--nsg-ids",
              description: "An array of network security group OCIDs",
              args: { name: "json" },
            },
            {
              name: "--scan-details",
              description:
                "An array of fqdn/port pairs used to create private endpoint",
              args: { name: "json" },
            },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
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
      name: "statement",
      description: "A statement object",
      subcommands: [
        {
          name: "create",
          description: "Executes a statement for a Session run",
          options: [
            {
              name: "--code",
              description: "The statement code to execute",
              args: { name: "code" },
              isRequired: true,
            },
            optRunId,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "CANCELLING",
                  "CANCELLED",
                  "FAILED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
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
          name: "delete",
          description: "Cancels the specified statement for a Session run",
          options: [
            optRunId,
            {
              name: "--statement-id",
              description: "The unique ID for the statement",
              args: { name: "statement-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves the statement corresponding to the statementId for a Session run specified by runId",
          options: [
            optRunId,
            {
              name: "--statement-id",
              description: "The unique ID for the statement",
              args: { name: "statement-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists all statements for a Session run",
          options: [
            optRunId,
            {
              name: "--lifecycle-state",
              description: "The LifecycleState of the statement",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "CANCELLING",
                  "CANCELLED",
                  "FAILED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                ],
              },
            },
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "run",
      description: "A run object",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a run into a different compartment",
          options: [optRunId, optCompartmentId, optIfMatch, optFromJson],
        },
        {
          name: "create",
          description: "Creates a run for an application",
          options: [
            optCompartmentId,
            optApplicationLogConfig,
            {
              name: "--arguments",
              description:
                "The arguments passed to the running application as command line arguments",
              args: { name: "json" },
            },
            {
              name: "--configuration",
              description:
                "The Spark configuration passed to the running process",
              args: { name: "json" },
            },
            optDefinedTags,
            optDriverShape,
            optDriverShapeConfig,
            optExecutorShape,
            optExecutorShapeConfig,
            optFreeformTags,
            optLogsBucketUri,
            optMetastoreId,
            optNumExecutors,
            {
              name: "--parameters",
              description:
                "An array of name/value pairs used to fill placeholders found in properties like Application.arguments",
              args: { name: "json" },
            },
            optPoolId2,
            optSparkVersion,
            optType,
            optWarehouseBucketUri,
            optMaxDurationInMinutes,
            optIdleTimeoutInMinutes,
            {
              name: "--opc-parent-rpt-url",
              description:
                "(Optional header param, required for Resource Principal version 3.0+) Parent resource control plane endpoint",
              args: { name: "opc-parent-rpt-url" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--application-id",
              description: "The OCID of the associated application",
              args: { name: "application-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A user-friendly name that does not have to be unique",
              args: { name: "display-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Cancels the specified run if it has not already completed or was previously cancelled",
          options: [
            optRunId,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves the run for the specified runId",
          options: [optRunId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all runs of an application in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--application-id",
              description: "The ID of the application",
              args: { name: "application-id" },
            },
            {
              name: "--pool-id",
              description: "The ID of the pool",
              args: { name: "pool-id" },
            },
            optOwnerPrincipalId,
            optDisplayNameStartsWith,
            {
              name: "--lifecycle-state",
              description: "The LifecycleState of the run",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "CANCELING",
                  "CANCELED",
                  "FAILED",
                  "SUCCEEDED",
                  "STOPPING",
                  "STOPPED",
                ],
              },
            },
            {
              name: "--time-created-greater-than",
              description: "The epoch time that the resource was created",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field used to sort the results",
              args: {
                suggestions: [
                  "timeCreated",
                  "displayName",
                  "language",
                  "runDurationInMilliseconds",
                  "lifecycleState",
                  "totalOCpu",
                  "dataReadInBytes",
                  "dataWrittenInBytes",
                ],
              },
            },
            optSortOrder,
            optDisplayName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a run using a runId",
          options: [
            optRunId,
            optDefinedTags,
            optFreeformTags,
            optMaxDurationInMinutes,
            optIdleTimeoutInMinutes,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-log",
          description: "Retrieves the content of an run log",
          options: [
            optRunId,
            {
              name: "--name",
              description: "The name of the log",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-logs",
          description: "Retrieves summaries of the run's logs",
          options: [optRunId, optFromJson],
        },
        {
          name: "submit",
          description: "Submit a run using spark-submit like syntax",
          options: [
            optCompartmentId,
            optApplicationLogConfig,
            optArchiveUri,
            {
              name: "--configuration",
              description:
                "The Spark configuration passed to the running process",
              args: { name: "json" },
            },
            optDefinedTags,
            {
              name: "--display-name",
              description:
                "A user-friendly name that does not have to be unique",
              args: { name: "display-name" },
            },
            optDriverShape,
            optDriverShapeConfig,
            optExecutorShape,
            optExecutorShapeConfig,
            optFreeformTags,
            optLogsBucketUri,
            optMetastoreId,
            optNumExecutors,
            optPoolId2,
            optSparkVersion,
            optType,
            optWarehouseBucketUri,
            optMaxDurationInMinutes,
            optIdleTimeoutInMinutes,
            {
              name: "--opc-parent-rpt-url",
              description:
                "(Optional header param, required for Resource Principal version 3.0+) Parent resource control plane endpoint",
              args: { name: "opc-parent-rpt-url" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--execute",
              description: "The input used for spark-submit command",
              args: { name: "execute" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "A Data Flow work request object",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the status of the work request with the given OCID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId2,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sql-endpoint",
      description: "The description of a SQL Endpoint",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves an Sql Endpoint from one compartment to another",
          options: [
            optSqlEndpointId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new Sql Endpoint",
          options: [
            {
              name: "--compartment-id",
              description:
                "The identifier of the compartment used with the SQL Endpoint",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The SQL Endpoint name, which can be changed",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--sql-endpoint-version",
              description: "The version of the SQL Endpoint",
              args: { name: "sql-endpoint-version" },
              isRequired: true,
            },
            {
              name: "--driver-shape",
              description: "The shape of the SQL Endpoint driver instance",
              args: { name: "driver-shape" },
              isRequired: true,
            },
            {
              name: "--executor-shape",
              description: "The shape of the SQL Endpoint worker instance",
              args: { name: "executor-shape" },
              isRequired: true,
            },
            {
              name: "--min-executor-count",
              description: "The minimum number of executors",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--max-executor-count",
              description: "The maximum number of executors",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--metastore-id",
              description: "Metastore OCID",
              args: { name: "metastore-id" },
              isRequired: true,
            },
            {
              name: "--lake-id",
              description: "OCI lake OCID",
              args: { name: "lake-id" },
              isRequired: true,
            },
            {
              name: "--warehouse-bucket-uri",
              description: "The warehouse bucket URI",
              args: { name: "warehouse-bucket-uri" },
              isRequired: true,
            },
            {
              name: "--network-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of CreateSQLEndpointDetails",
              args: { name: "description" },
            },
            optDriverShapeConfig,
            optExecutorShapeConfig,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--spark-advanced-configurations",
              description:
                "The Spark configuration passed to the running process",
              args: { name: "json" },
            },
            {
              name: "--log-group-id",
              description:
                "The identifier of the log group used with the SQL Endpoint",
              args: { name: "log-group-id" },
            },
            {
              name: "--log-compartment-id",
              description:
                "The identifier of the log group compartment used with the SQL Endpoint",
              args: { name: "log-compartment-id" },
            },
            {
              name: "--log-display-name",
              description:
                "The friendly name of the log object used with the SQL Endpoint",
              args: { name: "log-display-name" },
            },
            {
              name: "--log-retention-duration",
              description: "Log retention duration in days",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Delete a Sql Endpoint resource, identified by the SqlEndpoint id",
          options: [
            optSqlEndpointId,
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
          description: "Retrieves a SQL Endpoint using a sqlEndpointId",
          options: [optSqlEndpointId, optFromJson],
        },
        {
          name: "start",
          description: "Starts the SqlEndpoint for a given SqlEndpointId",
          options: [
            optSqlEndpointId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops the SqlEndpoint for a given SqlEndpointId",
          options: [
            optSqlEndpointId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Update a Sql Endpoint resource, identified by the SqlEndpoint id",
          options: [
            optSqlEndpointId,
            optDefinedTags,
            optFreeformTags,
            {
              name: "--display-name",
              description: "The SQL Endpoint name, which can be changed",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of CreateSQLEndpointDetails",
              args: { name: "description" },
            },
            {
              name: "--driver-shape",
              description: "The shape of the SQL Endpoint driver instance",
              args: { name: "driver-shape" },
            },
            optDriverShapeConfig,
            {
              name: "--executor-shape",
              description: "The shape of the SQL Endpoint worker instance",
              args: { name: "executor-shape" },
            },
            optExecutorShapeConfig,
            {
              name: "--min-executor-count",
              description: "The minimum number of executors",
              args: { name: "integer" },
            },
            {
              name: "--max-executor-count",
              description: "The maximum number of executors",
              args: { name: "integer" },
            },
            {
              name: "--metastore-id",
              description: "Metastore OCID",
              args: { name: "metastore-id" },
            },
            {
              name: "--lake-id",
              description: "OCI lake OCID",
              args: { name: "lake-id" },
            },
            {
              name: "--log-group-id",
              description:
                "The identifier of the log group used with the SQL Endpoint",
              args: { name: "log-group-id" },
            },
            {
              name: "--log-compartment-id",
              description:
                "The identifier of the log group compartment used with the SQL Endpoint",
              args: { name: "log-compartment-id" },
            },
            {
              name: "--log-display-name",
              description:
                "The friendly name of the log object used with the SQL Endpoint",
              args: { name: "log-display-name" },
            },
            {
              name: "--log-retention-duration",
              description: "Log retention duration in days",
              args: { name: "integer" },
            },
            {
              name: "--log-operation",
              description:
                "The log operation will be performed for the Sql Endpoint",
              args: { suggestions: ["ENABLE", "DISABLE", "DELETE"] },
            },
            {
              name: "--spark-advanced-configurations",
              description:
                "The Spark configuration passed to the running process",
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
  ],
};

export default completionSpec;
