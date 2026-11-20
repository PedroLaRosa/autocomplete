// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optWorkspaceId: Fig.Option = {
  name: "--workspace-id",
  description: "The workspace ID",
  args: { name: "workspace-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optObjectStatus: Fig.Option = {
  name: "--object-status",
  description:
    "The status of an object that can be set to value 1 for shallow references across objects",
  args: { name: "integer" },
};
const optApplicationKey: Fig.Option = {
  name: "--application-key",
  description: "The application key",
  args: { name: "application-key" },
  isRequired: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Detailed description for the object",
  args: { name: "description" },
};
const optParentRef: Fig.Option = {
  name: "--parent-ref",
  args: { name: "json" },
};
const optRegistryMetadata: Fig.Option = {
  name: "--registry-metadata",
  args: { name: "json" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    "Sets the maximum number of results per page, or items to return in a paginated List call",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "For list pagination",
  args: { name: "page" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "Specifies the field to sort by",
  args: { suggestions: ["TIME_CREATED", "DISPLAY_NAME", "TIME_UPDATED"] },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "Specifies sort order to use, either ASC (ascending) or DESC (descending)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optName: Fig.Option = {
  name: "--name",
  description: "Free form text without any restriction on permitted characters",
  args: { name: "name" },
};
const optName2: Fig.Option = {
  name: "--name",
  description: "Used to filter by the name of the object",
  args: { name: "name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optFields: Fig.Option = {
  name: "--fields",
  description: "Specifies the fields to get for an object",
  args: { name: "fields" },
  isRepeatable: true,
};
const optName3: Fig.Option = {
  name: "--name",
  description: "Free form text without any restriction on permitted characters",
  args: { name: "name" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optIdentifier: Fig.Option = {
  name: "--identifier",
  description:
    "Value can only contain upper case letters, underscore, and numbers",
  args: { name: "identifier" },
  isRequired: true,
};
const optIdentifier2: Fig.Option = {
  name: "--identifier",
  description:
    "Value can only contain upper case letters, underscore, and numbers",
  args: { name: "identifier" },
};
const optModelVersion: Fig.Option = {
  name: "--model-version",
  description: "The object's model version",
  args: { name: "model-version" },
};
const optModelVersion2: Fig.Option = {
  name: "--model-version",
  description: "The model version of an object",
  args: { name: "model-version" },
};
const optParameters: Fig.Option = {
  name: "--parameters",
  description: "An array of parameters",
  args: { name: "json" },
};
const optInputPorts: Fig.Option = {
  name: "--input-ports",
  description: "An array of input ports",
  args: { name: "json" },
};
const optOpConfigValues: Fig.Option = {
  name: "--op-config-values",
  args: { name: "json" },
};
const optOutputPorts: Fig.Option = {
  name: "--output-ports",
  description: "An array of output ports",
  args: { name: "json" },
};
const optTaskKey: Fig.Option = {
  name: "--task-key",
  description: "The task key",
  args: { name: "task-key" },
  isRequired: true,
};
const optIsConcurrentAllowed: Fig.Option = {
  name: "--is-concurrent-allowed",
  description: "Whether the same task can be executed concurrently",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optModelVersion3: Fig.Option = {
  name: "--model-version",
  description:
    "This is a version number that is used by the service to upgrade objects if needed through releases of",
  args: { name: "model-version" },
};
const optConfigProviderDelegate: Fig.Option = {
  name: "--config-provider-delegate",
  args: { name: "json" },
};
const optObjectVersion: Fig.Option = {
  name: "--object-version",
  description:
    "The version of the object that is used to track changes in the object instance",
  args: { name: "integer" },
  isRequired: true,
};
const optIsDaylightAdjEnabled: Fig.Option = {
  name: "--is-daylight-adj-enabled",
  args: { name: "is-daylight-adj-enabled" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optTimezone: Fig.Option = {
  name: "--timezone",
  description: "The timezone for the schedule",
  args: { name: "timezone" },
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optIdentifier3: Fig.Option = {
  name: "--identifier",
  description: "Used to filter by the identifier of the object",
  args: { name: "identifier" },
  isRepeatable: true,
};
const optModelType: Fig.Option = {
  name: "--model-type",
  description: "The type of the object",
  args: { name: "model-type" },
};
const optRegistryMetadata2: Fig.Option = {
  name: "--registry-metadata",
  args: { name: "json" },
  isRequired: true,
};
const optFrequency: Fig.Option = {
  name: "--frequency",
  args: { name: "frequency" },
};
const optIdentifier4: Fig.Option = {
  name: "--identifier",
  description:
    "Value can only contain upper case letters, underscore and numbers",
  args: { name: "identifier" },
};
const optConnectionKey: Fig.Option = {
  name: "--connection-key",
  description: "The connection key",
  args: { name: "connection-key" },
  isRequired: true,
};
const optKey: Fig.Option = {
  name: "--key",
  description: "Generated key that can be used in API calls to identify task",
  args: { name: "key" },
};
const optFrequencyDetailsTime: Fig.Option = {
  name: "--frequency-details-time",
  args: { name: "json" },
};
const optObjectVersion2: Fig.Option = {
  name: "--object-version",
  description:
    "The version of the object that is used to track changes in the object instance",
  args: { name: "integer" },
};
const optObjectVersion3: Fig.Option = {
  name: "--object-version",
  description:
    "This is used by the service for optimistic locking of the object",
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
const optKey2: Fig.Option = {
  name: "--key",
  description: "Generated key that can be used in API calls to identify task",
  args: { name: "key" },
  isRequired: true,
};
const optObjectVersion4: Fig.Option = {
  name: "--object-version",
  description:
    "This is used by the service for optimistic locking of the object",
  args: { name: "integer" },
  isRequired: true,
};
const optScheduleKey: Fig.Option = {
  name: "--schedule-key",
  description: "Schedule Key",
  args: { name: "schedule-key" },
  isRequired: true,
};
const optInterval: Fig.Option = {
  name: "--interval",
  args: { name: "interval" },
};
const optMetadata: Fig.Option = { name: "--metadata", args: { name: "json" } };
const optKey3: Fig.Option = {
  name: "--key",
  description:
    "Generated key that can be used in API calls to identify schedule",
  args: { name: "key" },
  isRequired: true,
};
const optKey4: Fig.Option = {
  name: "--key",
  description:
    "Generated key that can be used in API calls to identify schedule",
  args: { name: "key" },
};
const optNameContains: Fig.Option = {
  name: "--name-contains",
  description:
    "This parameter can be used to filter objects by the names that match partially or fully with the given value",
  args: { name: "name-contains" },
};
const optDataFlow: Fig.Option = { name: "--data-flow", args: { name: "json" } };
const optDisApplicationId: Fig.Option = {
  name: "--dis-application-id",
  description: "The OCID of the DIS Application",
  args: { name: "dis-application-id" },
  isRequired: true,
};
const optFlowConfigValues: Fig.Option = {
  name: "--flow-config-values",
  args: { name: "json" },
};
const optIdentifier5: Fig.Option = {
  name: "--identifier",
  description: "Used to filter by the identifier of the published object",
  args: { name: "identifier" },
  isRepeatable: true,
};
const optKey5: Fig.Option = {
  name: "--key",
  description: "Used to filter by the key of the object",
  args: { name: "key" },
  isRepeatable: true,
};
const optSchemaResourceName: Fig.Option = {
  name: "--schema-resource-name",
  description: "The schema resource name used for retrieving schemas",
  args: { name: "schema-resource-name" },
  isRequired: true,
};
const optConfigProvider: Fig.Option = {
  name: "--config-provider",
  args: { name: "config-provider" },
};
const optExpandReferences: Fig.Option = {
  name: "--expand-references",
  description: "Used to expand references of the object",
  args: { name: "expand-references" },
};
const optExternalKey: Fig.Option = {
  name: "--external-key",
  description: "The external key for the object",
  args: { name: "external-key" },
};
const optFilter: Fig.Option = {
  name: "--filter",
  description:
    "This filter parameter can be used to filter by model specific queryable fields of the object <br><br><B>",
  args: { name: "filter" },
  isRepeatable: true,
};
const optIdentifier6: Fig.Option = {
  name: "--identifier",
  description: "Used to filter by the identifier of the object",
  args: { name: "identifier" },
};
const optKey6: Fig.Option = {
  name: "--key",
  description: "Used to filter by the key of the object",
  args: { name: "key" },
};
const optPipeline: Fig.Option = { name: "--pipeline", args: { name: "json" } };
const optType: Fig.Option = {
  name: "--type",
  description: "Used to filter by the object type of the object",
  args: { name: "type" },
  isRepeatable: true,
};
const optAggregatorKey: Fig.Option = {
  name: "--aggregator-key",
  description: "Used to filter by the project or the folder object",
  args: { name: "aggregator-key" },
};
const optApiCallMode: Fig.Option = {
  name: "--api-call-mode",
  description: "The REST invocation pattern to use",
  args: {
    suggestions: ["SYNCHRONOUS", "ASYNC_OCI_WORKREQUEST", "ASYNC_GENERIC"],
  },
};
const optAuthConfig: Fig.Option = {
  name: "--auth-config",
  args: { name: "json" },
};
const optAuthDetails: Fig.Option = {
  name: "--auth-details",
  args: { name: "json" },
};
const optCancelEndpoint: Fig.Option = {
  name: "--cancel-endpoint",
  args: { name: "json" },
};
const optCancelMethodType: Fig.Option = {
  name: "--cancel-method-type",
  description: "The REST method to use for canceling the original request",
  args: { suggestions: ["GET", "POST", "PATCH", "DELETE", "PUT"] },
};
const optCategoryName: Fig.Option = {
  name: "--category-name",
  description: "The category name",
  args: { name: "category-name" },
};
const optConnectionProperties: Fig.Option = {
  name: "--connection-properties",
  description: "The properties for the connection",
  args: { name: "json" },
};
const optCredentialFileContent: Fig.Option = {
  name: "--credential-file-content",
  args: { name: "credential-file-content" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "User-defined description for the connection",
  args: { name: "description" },
};
const optDetailedDescription: Fig.Option = {
  name: "--detailed-description",
  description: "Base64 encoded rich text description of the object",
  args: { name: "detailed-description" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "Free form text without any restriction on permitted characters",
  args: { name: "display-name" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optHeaders: Fig.Option = {
  name: "--headers",
  description: "Headers data for the request",
  args: { name: "json" },
};
const optJsonData: Fig.Option = {
  name: "--json-data",
  description: "JSON data for payload body",
  args: { name: "json-data" },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "The current state of the workspace",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
};
const optLogo: Fig.Option = {
  name: "--logo",
  description: "Base64 encoded image to represent logo of the object",
  args: { name: "logo" },
};
const optMethodType: Fig.Option = {
  name: "--method-type",
  description: "The REST method to use",
  args: { suggestions: ["GET", "POST", "PATCH", "DELETE", "PUT"] },
};
const optModelType2: Fig.Option = {
  name: "--model-type",
  description: "The type of the object",
  args: { name: "model-type" },
  isRequired: true,
};
const optPollRestCallConfig: Fig.Option = {
  name: "--poll-rest-call-config",
  args: { name: "json" },
};
const optStatus: Fig.Option = {
  name: "--status",
  description: "The status of the object",
  args: { suggestions: ["TERMINATING"] },
};
const optTaskRunKey: Fig.Option = {
  name: "--task-run-key",
  description: "The task run key",
  args: { name: "task-run-key" },
  isRequired: true,
};
const optTypedExpressions: Fig.Option = {
  name: "--typed-expressions",
  description: "List of typed expressions",
  args: { name: "json" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optCopyObjectRequestKey: Fig.Option = {
  name: "--copy-object-request-key",
  description:
    "The key of the object to be copied, for example this could be the key of a project",
  args: { name: "copy-object-request-key" },
  isRequired: true,
};
const optDataAssetKey: Fig.Option = {
  name: "--data-asset-key",
  description: "The data asset key",
  args: { name: "data-asset-key" },
  isRequired: true,
};
const optDataFlowKey: Fig.Option = {
  name: "--data-flow-key",
  description: "The data flow key",
  args: { name: "data-flow-key" },
  isRequired: true,
};
const optDataFormat: Fig.Option = {
  name: "--data-format",
  args: { name: "json" },
};
const optExportRequestKey: Fig.Option = {
  name: "--export-request-key",
  description: "The key of the object export object request",
  args: { name: "export-request-key" },
  isRequired: true,
};
const optExpr: Fig.Option = { name: "--expr", args: { name: "json" } };
const optExternalPublicationsKey: Fig.Option = {
  name: "--external-publications-key",
  description: "The external published object key",
  args: { name: "external-publications-key" },
  isRequired: true,
};
const optFolderKey: Fig.Option = {
  name: "--folder-key",
  description: "The folder key",
  args: { name: "folder-key" },
  isRequired: true,
};
const optForeignKeys: Fig.Option = {
  name: "--foreign-keys",
  description: "An array of foreign keys",
  args: { name: "json" },
};
const optFunctionLibraryKey: Fig.Option = {
  name: "--function-library-key",
  description: "The functionLibrary key",
  args: { name: "function-library-key" },
  isRequired: true,
};
const optImportRequestKey: Fig.Option = {
  name: "--import-request-key",
  description: "The key of the object export object request",
  args: { name: "import-request-key" },
  isRequired: true,
};
const optKey7: Fig.Option = {
  name: "--key",
  description: "The object key",
  args: { name: "key" },
};
const optNodes: Fig.Option = {
  name: "--nodes",
  description: "A list of nodes attached to the pipeline",
  args: { name: "json" },
};
const optNodes2: Fig.Option = {
  name: "--nodes",
  description: "An array of nodes",
  args: { name: "json" },
};
const optOperation: Fig.Option = {
  name: "--operation",
  description: "Describes the shape of the execution result",
  args: { name: "json" },
};
const optOtherTypeLabel: Fig.Option = {
  name: "--other-type-label",
  description: "Specifies other type label",
  args: { name: "other-type-label" },
};
const optPipelineKey: Fig.Option = {
  name: "--pipeline-key",
  description: "The pipeline key",
  args: { name: "pipeline-key" },
  isRequired: true,
};
const optProjectKey: Fig.Option = {
  name: "--project-key",
  description: "The project key",
  args: { name: "project-key" },
  isRequired: true,
};
const optProjection: Fig.Option = {
  name: "--projection",
  description:
    "This parameter allows users to specify which view of the object to return",
  args: { suggestions: ["CHILD_COUNT_STATISTICS"] },
  isRepeatable: true,
};
const optResourceName: Fig.Option = {
  name: "--resource-name",
  description: "The resource name",
  args: { name: "resource-name" },
};
const optRuntimePipelineKey: Fig.Option = {
  name: "--runtime-pipeline-key",
  description: "Runtime Pipeline Key",
  args: { name: "runtime-pipeline-key" },
  isRequired: true,
};
const optScript: Fig.Option = { name: "--script", args: { name: "json" } };
const optShape: Fig.Option = { name: "--shape", args: { name: "json" } };
const optShapeId: Fig.Option = {
  name: "--shape-id",
  description: "The shape ID",
  args: { name: "shape-id" },
};
const optSignatures: Fig.Option = {
  name: "--signatures",
  description: "An array of function signature",
  args: { name: "json" },
};
const optSqlScriptType: Fig.Option = {
  name: "--sql-script-type",
  description:
    "Indicates whether the task is invoking a custom SQL script or stored procedure",
  args: { suggestions: ["STORED_PROCEDURE", "SQL_CODE"] },
};
const optTaskScheduleKey: Fig.Option = {
  name: "--task-schedule-key",
  description: "TaskSchedule Key",
  args: { name: "task-schedule-key" },
  isRequired: true,
};
const optTimeEndedInMillis: Fig.Option = {
  name: "--time-ended-in-millis",
  description: "Specifies end time of a copy object request",
  args: { name: "integer" },
};
const optTimeStartedInMillis: Fig.Option = {
  name: "--time-started-in-millis",
  description: "Specifies start time of a copy object request",
  args: { name: "integer" },
};
const optTimeUpatedLessThan: Fig.Option = {
  name: "--time-upated-less-than",
  description:
    "This parameter allows users to get objects which were updated before a certain time",
  args: { name: "datetime" },
};
const optType2: Fig.Option = {
  name: "--type",
  description: "Type of the object to filter the results with",
  args: { name: "type" },
};
const optUniqueKeys: Fig.Option = {
  name: "--unique-keys",
  description: "An array of unique keys",
  args: { name: "json" },
};
const optUserDefinedFunctionKey: Fig.Option = {
  name: "--user-defined-function-key",
  description: "The user defined function key",
  args: { name: "user-defined-function-key" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous work request to retrieve",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "data-integration",
  description: "Data Integration",
  subcommands: [
    {
      name: "schema",
      description: "The schema object",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves a schema that can be accessed using the specified connection",
          options: [
            optWorkspaceId,
            optConnectionKey,
            optSchemaResourceName,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of all the schemas that can be accessed using the specified connection",
          options: [
            optWorkspaceId,
            optConnectionKey,
            {
              name: "--schema-resource-name",
              description: "Schema resource name used for retrieving schemas",
              args: { name: "schema-resource-name" },
              isRequired: true,
            },
            optPage,
            optLimit,
            optFields,
            optSortBy,
            optSortOrder,
            optName2,
            {
              name: "--name-list",
              description: "Used to filter by the name of the object",
              args: { name: "name-list" },
              isRepeatable: true,
            },
            {
              name: "--include-types",
              description:
                "Artifact type which needs to be listed while listing Artifacts",
              args: { name: "include-types" },
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
      name: "template",
      description: "Template application",
      subcommands: [
        {
          name: "get",
          description:
            "This endpoint can be used to get an application template using a key",
          options: [
            optWorkspaceId,
            {
              name: "--template-id",
              description: "The OCID of the template",
              args: { name: "template-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "This endpoint can be used to list application templates with filtering options",
          options: [
            optWorkspaceId,
            optName2,
            optIdentifier5,
            optFields,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "workspace",
      description:
        "A workspace is an organizational construct to keep multiple data integration solutions and their resources",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a workspace to a specified compartment",
          options: [
            optWorkspaceId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the workspace to",
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
          description:
            "Creates a new Data Integration Workspace ready for performing data integration",
          options: [
            {
              name: "--display-name",
              description: "A user-friendly display name for the workspace",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the workspace",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN the subnet is in",
              args: { name: "vcn-id" },
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet for customer connected databases",
              args: { name: "subnet-id" },
            },
            {
              name: "--dns-server-ip",
              description: "The IP of the custom DNS",
              args: { name: "dns-server-ip" },
            },
            {
              name: "--dns-server-zone",
              description:
                "The DNS zone of the custom DNS to use to resolve names",
              args: { name: "dns-server-zone" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--description",
              description: "A user defined description for the workspace",
              args: { name: "description" },
            },
            {
              name: "--registry-id",
              description:
                "DCMS Data Asset Registry ID to which the workspace is associated",
              args: { name: "registry-id" },
            },
            {
              name: "--endpoint-id",
              description:
                "DCMS Private Endpoint ID associated with workspace if the pvt networking is enabled",
              args: { name: "endpoint-id" },
            },
            {
              name: "--registry-name",
              description: "DCMS Data Asset Registry display name",
              args: { name: "registry-name" },
            },
            {
              name: "--registry-compartment-id",
              description: "DCMS Data Asset Registry Compartment Identifier",
              args: { name: "registry-compartment-id" },
            },
            {
              name: "--endpoint-name",
              description: "DCMS Private Endpoint Name",
              args: { name: "endpoint-name" },
            },
            {
              name: "--endpoint-compartment-id",
              description: "DCMS PRivate Endpoint Compartment Identifier",
              args: { name: "endpoint-compartment-id" },
            },
            {
              name: "--workspace-properties",
              description:
                "Key-values pairs of workspace for storing properties on the workspace",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--is-private-network",
              args: { name: "is-private-network" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete-copy-object-request",
          description:
            "Delete copy object request using the specified identifier",
          options: [
            optWorkspaceId,
            optCopyObjectRequestKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "delete-export-request",
          description:
            "Delete export object request using the specified identifier",
          options: [
            optWorkspaceId,
            optExportRequestKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "delete-import-request",
          description:
            "Delete import object request using the specified identifier",
          options: [
            optImportRequestKey,
            optWorkspaceId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a Data Integration workspace resource using the specified identifier",
          options: [
            optWorkspaceId,
            {
              name: "--quiesce-timeout",
              description:
                "Used to set the timeout for Data Integration to gracefully close down any running jobs before stopping",
              args: { name: "integer" },
            },
            {
              name: "--is-force-operation",
              description: "Used to force close down the workspace",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
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
            "Retrieves a Data Integration workspace using the specified identifier",
          options: [optWorkspaceId, optFromJson],
        },
        {
          name: "list",
          description: "Retrieves a list of Data Integration workspaces",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the resources you want to list",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optName2,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of a resource",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "STARTING",
                  "STOPPING",
                  "STOPPED",
                ],
              },
            },
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Starts a workspace",
          options: [
            optWorkspaceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops a workspace",
          options: [
            optWorkspaceId,
            {
              name: "--quiesce-timeout",
              description:
                "Used to set the timeout for Data Integration to gracefully close down any running jobs before stopping",
              args: { name: "integer" },
            },
            {
              name: "--is-force-operation",
              description: "Used to force close down the workspace",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-copy-object-request",
          description: "Updates the status of a copy object request",
          options: [
            optWorkspaceId,
            optCopyObjectRequestKey,
            optStatus,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-export-request",
          description: "Updates the status of a export object request",
          options: [
            optWorkspaceId,
            optExportRequestKey,
            optStatus,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-import-request",
          description: "Updates the status of a import object request",
          options: [
            optWorkspaceId,
            optImportRequestKey,
            optStatus,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified Data Integration workspace",
          options: [
            optWorkspaceId,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--description",
              description: "A user defined description for the workspace",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "A user-friendly display name for the workspace",
              args: { name: "display-name" },
            },
            {
              name: "--workspace-properties",
              description:
                "Key-values pairs of workspace for storing properties on the workspace",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "task-run",
      description: "The information about a task run",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a data integration task run for the specified task",
          options: [
            optWorkspaceId,
            optApplicationKey,
            {
              name: "--key",
              description: "The key of the object",
              args: { name: "key" },
            },
            optModelType,
            optModelVersion2,
            optName,
            optDescription,
            { name: "--config-provider", args: { name: "json" } },
            optIdentifier2,
            {
              name: "--task-schedule-key",
              description: "Optional task schedule key reference",
              args: { name: "task-schedule-key" },
            },
            {
              name: "--ref-task-run-id",
              description: "Reference Task Run Id to be used for re-run",
              args: { name: "ref-task-run-id" },
            },
            {
              name: "--re-run-type",
              description: "Supported re-run types",
              args: { suggestions: ["BEGINNING", "FAILED", "STEP"] },
            },
            {
              name: "--step-id",
              description: "Step Id for running from a certain step",
              args: { name: "step-id" },
            },
            optRegistryMetadata,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a task run using the specified identifier",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optTaskRunKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a task run using the specified identifier",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optTaskRunKey,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of task runs and provides options to filter the list",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optKey5,
            optAggregatorKey,
            optFields,
            optName2,
            optIdentifier3,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optFilter,
            {
              name: "--name-starts-with",
              description:
                "This parameter can be used to filter objects by the names starting with the given value",
              args: { name: "name-starts-with" },
            },
            optNameContains,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the status of the task run",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optTaskRunKey,
            {
              name: "--key",
              description: "The key of the object",
              args: { name: "key" },
            },
            optStatus,
            optModelType,
            optModelVersion2,
            optName,
            optDescription,
            optObjectVersion2,
            {
              name: "--task-schedule-key",
              description: "Optional task schedule key reference",
              args: { name: "task-schedule-key" },
            },
            optRegistryMetadata,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-publication-validation",
      description: "The information about external published task validation",
      subcommands: [
        {
          name: "create",
          description: "Validates a specific task",
          options: [
            optWorkspaceId,
            optTaskKey,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify the task",
              args: { name: "key" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a task validation using the specified identifier",
          options: [
            optWorkspaceId,
            optTaskKey,
            {
              name: "--external-publication-validation-key",
              description: "The external published object key",
              args: { name: "external-publication-validation-key" },
              isRequired: true,
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves an external publication validation using the specified identifier",
          options: [
            optWorkspaceId,
            optTaskKey,
            {
              name: "--external-publication-validation-key",
              description: "The external published object key",
              args: { name: "external-publication-validation-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a lists of external publication validations in a workspace and provides options to filter the list",
          options: [
            optWorkspaceId,
            optTaskKey,
            optFields,
            optName2,
            optIdentifier3,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "user-defined-function-validation",
      description: "The information about a UserDefinedFunction validation",
      subcommands: [
        {
          name: "create",
          description:
            "Accepts the UserDefinedFunction definition in the request payload and creates a UserDefinedFunction",
          options: [
            optWorkspaceId,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify user defined function",
              args: { name: "key" },
            },
            {
              name: "--model-type",
              description: "The type of the object",
              args: { suggestions: ["DIS_USER_DEFINED_FUNCTION"] },
            },
            optModelVersion2,
            optParentRef,
            optName,
            optIdentifier2,
            optObjectVersion2,
            optSignatures,
            optExpr,
            optDescription,
            optObjectStatus,
            optMetadata,
            {
              name: "--key-map",
              description: "A key map",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a UserDefinedFunction validation using the specified identifier",
          options: [
            optWorkspaceId,
            {
              name: "--user-defined-function-validation-key",
              description: "The key of the userDefinedFunction validation",
              args: { name: "user-defined-function-validation-key" },
              isRequired: true,
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves a UserDefinedFunction validation using the specified identifier",
          options: [
            optWorkspaceId,
            {
              name: "--user-defined-function-validation-key",
              description: "The key of the userDefinedFunction validation",
              args: { name: "user-defined-function-validation-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of UserDefinedFunctionvalidations within the specified workspace",
          options: [
            optWorkspaceId,
            optKey6,
            optName2,
            optIdentifier6,
            optFields,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "runtime-operator",
      description:
        "Runtime operator model which holds the runtime metadata of the task operator executed",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves a runtime operator using the specified identifier",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optRuntimePipelineKey,
            {
              name: "--runtime-operator-key",
              description: "Runtime Operator Key",
              args: { name: "runtime-operator-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dis-application",
      description: "DIS Application is container for runtime objects",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a DIS Application to a specified compartment",
          options: [
            optWorkspaceId,
            optDisApplicationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the DIS Application to",
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
          description: "Creates a DIS Application",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            {
              name: "--compartment-id",
              description:
                "OCID of the compartment that this resource belongs to",
              args: { name: "compartment-id" },
            },
            {
              name: "--key",
              description: "Currently not used on application creation",
              args: { name: "key" },
            },
            optModelVersion,
            {
              name: "--model-type",
              description: "The type of the application",
              args: { suggestions: ["INTEGRATION_APPLICATION"] },
            },
            optDescription,
            optObjectStatus,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optLifecycleState,
            { name: "--source-application-info", args: { name: "json" } },
            optRegistryMetadata,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a DIS application using the specified identifier",
          options: [
            optWorkspaceId,
            optDisApplicationId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves an application using the specified OCID",
          options: [optWorkspaceId, optDisApplicationId, optFromJson],
        },
        {
          name: "list",
          description:
            "Retrieves a list of DIS Applications in a compartment and provides options to filter the list",
          options: [
            optWorkspaceId,
            {
              name: "--compartment-id",
              description:
                "OCID of the compartment for which the list of DIS Applications is to be retrieved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optName2,
            optNameContains,
            optIdentifier5,
            optFields,
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
          name: "update",
          description: "Updates a DIS Application",
          options: [
            optWorkspaceId,
            optDisApplicationId,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify application",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--model-type",
              description: "The object type",
              args: { name: "model-type" },
              isRequired: true,
            },
            optObjectVersion,
            optModelVersion,
            optName,
            optDescription,
            {
              name: "--application-version",
              description: "Version",
              args: { name: "integer" },
            },
            optObjectStatus,
            optIdentifier2,
            optParentRef,
            optMetadata,
            optDisplayName,
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Usage of predefined tag keys",
              args: { name: "json" },
            },
            optLifecycleState,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "connection-validation",
      description: "The information about connection validation",
      subcommands: [
        {
          name: "create",
          description: "Creates a connection validation",
          options: [
            optWorkspaceId,
            { name: "--data-asset", args: { name: "json" } },
            { name: "--connection", args: { name: "json" } },
            optRegistryMetadata,
            optFromJson,
          ],
        },
        {
          name: "create-connection-validation-create-connection-from-bip",
          description: "Creates a connection validation",
          options: [
            optWorkspaceId,
            {
              name: "--connection-name",
              description:
                "Free form text without any restriction on permitted characters",
              args: { name: "connection-name" },
              isRequired: true,
            },
            {
              name: "--connection-identifier",
              description:
                "Value can only contain upper case letters, underscore, and numbers",
              args: { name: "connection-identifier" },
              isRequired: true,
            },
            { name: "--data-asset", args: { name: "json" } },
            optRegistryMetadata,
            {
              name: "--connection-key",
              description:
                "Generated key that can be used in API calls to identify connection",
              args: { name: "connection-key" },
            },
            {
              name: "--connection-model-version",
              description: "The model version of an object",
              args: { name: "connection-model-version" },
            },
            { name: "--connection-parent-ref", args: { name: "json" } },
            {
              name: "--connection-description",
              description: "User-defined description for the connection",
              args: { name: "connection-description" },
            },
            {
              name: "--connection-object-status",
              description:
                "The status of an object that can be set to value 1 for shallow references across objects",
              args: { name: "integer" },
            },
            {
              name: "--connection-connection-properties",
              description: "The properties for the connection",
              args: { name: "json" },
            },
            { name: "--connection-registry-metadata", args: { name: "json" } },
            {
              name: "--connection-username",
              description: "The user name for the connection",
              args: { name: "connection-username" },
            },
            { name: "--connection-password-secret", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Successfully accepted the delete request",
          options: [
            optWorkspaceId,
            optIfMatch,
            optForce2,
            {
              name: "--con-validation-key",
              args: { name: "con-validation-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves a connection validation using the specified identifier",
          options: [
            optWorkspaceId,
            {
              name: "--con-validation-key",
              args: { name: "con-validation-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of connection validations within the specified workspace",
          options: [
            optWorkspaceId,
            optKey6,
            optName2,
            optIdentifier6,
            optFields,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "project",
      description:
        "The project type contains the audit summary information and the definition of the project",
      subcommands: [
        {
          name: "create",
          description: "Creates a project",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optModelVersion2,
            {
              name: "--description",
              description: "A user defined description for the project",
              args: { name: "description" },
            },
            optObjectStatus,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify project",
              args: { name: "key" },
            },
            optRegistryMetadata,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a project from the workspace using the specified identifier",
          options: [
            optWorkspaceId,
            optProjectKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get-count-statistic",
          description: "Retrieves statistics on a workspace",
          options: [
            optWorkspaceId,
            {
              name: "--count-statistic-key",
              description:
                "A unique key of the container object, such as workspace, project, and so on, to count statistics for",
              args: { name: "count-statistic-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a project using the specified identifier",
          options: [optWorkspaceId, optProjectKey, optProjection, optFromJson],
        },
        {
          name: "list",
          description:
            "Retrieves a lists of projects in a workspace and provides options to filter the list",
          options: [
            optWorkspaceId,
            optFields,
            optName2,
            optNameContains,
            optIdentifier3,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a specific project",
          options: [
            optWorkspaceId,
            optProjectKey,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify project",
              args: { name: "key" },
              isRequired: true,
            },
            optModelType2,
            optObjectVersion,
            optModelVersion2,
            optName,
            {
              name: "--description",
              description: "A user defined description for the project",
              args: { name: "description" },
            },
            optObjectStatus,
            optIdentifier2,
            optParentRef,
            optRegistryMetadata,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description:
        "The API operations used to create and configure Data Integration resources do not take effect immediately",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list-work-request-errors",
          description:
            "Retrieves a paginated list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-work-request-logs",
          description:
            "Retrieves a paginated list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the resources you want to list",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--workspace-id",
              description: "DIS workspace id",
              args: { name: "workspace-id" },
            },
            {
              name: "--work-request-status",
              description: "The work request status",
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
            },
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "import-request",
      description: "Import metadata object response",
      subcommands: [
        {
          name: "create",
          description: "Import Metadata Object",
          options: [
            optWorkspaceId,
            {
              name: "--bucket-name",
              description:
                "Name of the Object Storage bucket where the object will be imported from",
              args: { name: "bucket-name" },
              isRequired: true,
            },
            {
              name: "--file-name",
              description: "Name of the zip file to be imported",
              args: { name: "file-name" },
              isRequired: true,
            },
            {
              name: "--object-storage-tenancy-id",
              description:
                "Optional parameter to point to object storage tenancy (if using Object Storage of different tenancy)",
              args: { name: "object-storage-tenancy-id" },
            },
            {
              name: "--object-storage-region",
              description:
                "Region of the object storage (if using object storage of different region)",
              args: { name: "object-storage-region" },
            },
            {
              name: "--object-key-for-import",
              description:
                "Key of the object inside which all the objects will be imported",
              args: { name: "object-key-for-import" },
            },
            {
              name: "--are-data-asset-references-included",
              description:
                "This field controls if the data asset references will be included during import",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--import-conflict-resolution", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "This endpoint can be used to get the summary/details of object being imported",
          options: [
            optWorkspaceId,
            optImportRequestKey,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "reference",
      description: "Reference contains application configuration information",
      subcommands: [
        {
          name: "get",
          description: "Retrieves a reference in an application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            {
              name: "--reference-key",
              description: "The reference key",
              args: { name: "reference-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Retrieves a list of references in an application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optLimit,
            optPage,
            optName2,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the application references",
          options: [
            optWorkspaceId,
            optApplicationKey,
            {
              name: "--reference-key",
              description: "The reference key",
              args: { name: "reference-key" },
              isRequired: true,
            },
            {
              name: "--options",
              description: "A list of options such as ignoreObjectOnError",
              args: { name: "json" },
            },
            {
              name: "--target-object",
              description: "The new target object to reference",
              args: { name: "json" },
            },
            {
              name: "--child-references",
              description:
                "The list of child references that also need to be updated",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "copy-object-request-summary-collection",
      description: "This is the collection of copy object requests",
      subcommands: [
        {
          name: "list-copy-object-requests",
          description:
            "This endpoint can be used to get the list of copy object requests",
          options: [
            optWorkspaceId,
            optLimit,
            optPage,
            optName2,
            optSortOrder,
            optSortBy,
            {
              name: "--copy-status",
              description:
                "Specifies copy status to use, either - ALL, SUCCESSFUL, IN_PROGRESS, QUEUED, FAILED",
              args: {
                suggestions: [
                  "IN_PROGRESS",
                  "SUCCESSFUL",
                  "QUEUED",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                  "ALL",
                ],
              },
            },
            {
              name: "--projection",
              description:
                "This parameter allows users to specify which view of the copy object response to return",
              args: { suggestions: ["SUMMARY", "DETAILS"] },
            },
            optTimeStartedInMillis,
            optTimeEndedInMillis,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "data-entity",
      description: "The data entity object",
      subcommands: [
        {
          name: "create-entity-shape-create-entity-shape-from-object",
          description:
            "Creates the data entity shape using the shape from the data asset",
          options: [
            optWorkspaceId,
            optConnectionKey,
            optSchemaResourceName,
            optName3,
            optKey7,
            optParentRef,
            optDescription,
            optExternalKey,
            optShape,
            optShapeId,
            {
              name: "--entity-type",
              description: "The entity type",
              args: { suggestions: ["TABLE", "VIEW", "FILE", "SQL", "OBJECT"] },
            },
            optOtherTypeLabel,
            optUniqueKeys,
            optForeignKeys,
            optResourceName,
            optDataFormat,
            optIdentifier2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves the data entity details with the given name from live schema",
          options: [
            optWorkspaceId,
            optConnectionKey,
            optSchemaResourceName,
            {
              name: "--data-entity-key",
              description: "The key of the data entity",
              args: { name: "data-entity-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists a summary of data entities from the data asset using the specified connection",
          options: [
            optWorkspaceId,
            optConnectionKey,
            optSchemaResourceName,
            optName2,
            optPage,
            optType2,
            optLimit,
            optFields,
            optSortBy,
            optSortOrder,
            {
              name: "--name-list",
              description: "Used to filter by the name of the object",
              args: { name: "name-list" },
              isRepeatable: true,
            },
            {
              name: "--is-pattern",
              description:
                "This parameter can be used to specify whether entity search type is pattern search or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--include-types",
              description:
                "Artifact type which needs to be listed while listing Artifacts",
              args: { name: "include-types" },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-entity-shape-from-file",
          description:
            "Creates the data entity shape using the shape from the data asset",
          options: [
            optWorkspaceId,
            optConnectionKey,
            optSchemaResourceName,
            optKey7,
            optModelVersion,
            optParentRef,
            optName,
            optDescription,
            optObjectVersion2,
            optExternalKey,
            optShape,
            optShapeId,
            { name: "--types", args: { name: "json" } },
            {
              name: "--entity-type",
              description: "The entity type",
              args: {
                suggestions: [
                  "TABLE",
                  "VIEW",
                  "FILE",
                  "QUEUE",
                  "STREAM",
                  "OTHER",
                ],
              },
            },
            optOtherTypeLabel,
            optUniqueKeys,
            optForeignKeys,
            optResourceName,
            optDataFormat,
            optObjectStatus,
            optIdentifier2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create-entity-shape-from-sql",
          description:
            "Creates the data entity shape using the shape from the data asset",
          options: [
            optWorkspaceId,
            optConnectionKey,
            optSchemaResourceName,
            optKey7,
            optModelVersion,
            optParentRef,
            optName,
            optDescription,
            optObjectVersion2,
            optExternalKey,
            optShape,
            optShapeId,
            {
              name: "--entity-type",
              description: "The entity type",
              args: { suggestions: ["TABLE", "VIEW", "FILE", "SQL"] },
            },
            optOtherTypeLabel,
            optUniqueKeys,
            optForeignKeys,
            optResourceName,
            optDataFormat,
            optObjectStatus,
            optIdentifier2,
            {
              name: "--sql-query",
              description: "SqlQuery",
              args: { name: "sql-query" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "data-flow-validation",
      description: "The information about a data flow validation",
      subcommands: [
        {
          name: "create",
          description:
            "Accepts the data flow definition in the request payload and creates a data flow validation",
          options: [
            optWorkspaceId,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify data flow",
              args: { name: "key" },
            },
            optModelType,
            optModelVersion2,
            optParentRef,
            optName,
            optIdentifier2,
            optObjectVersion2,
            optNodes2,
            optParameters,
            optDescription,
            optFlowConfigValues,
            optObjectStatus,
            optMetadata,
            {
              name: "--key-map",
              description: "A key map",
              args: { name: "json" },
            },
            {
              name: "--typed-object-map",
              description:
                "A hash map that maps TypedObject keys to the object itself, for java sdk",
              args: { name: "json" },
            },
            {
              name: "--target-field-map-summary",
              description:
                "A hash map that maps TypedObject keys to a field map that maps to the typed object as a target, for java sdk",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a data flow validation using the specified identifier",
          options: [
            optWorkspaceId,
            optIfMatch,
            optForce2,
            {
              name: "--df-validation-key",
              args: { name: "df-validation-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves a data flow validation using the specified identifier",
          options: [
            optWorkspaceId,
            {
              name: "--df-validation-key",
              args: { name: "df-validation-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of data flow validations within the specified workspace",
          options: [
            optWorkspaceId,
            optKey6,
            optName2,
            optIdentifier6,
            optFields,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "data-asset",
      description: "Represents a data source in the Data Integration service",
      subcommands: [
        {
          name: "create",
          description: "Creates a data asset with default connection",
          options: [
            optWorkspaceId,
            {
              name: "--model-type",
              description: "The type of the data asset",
              args: {
                suggestions: [
                  "ORACLE_DATA_ASSET",
                  "ORACLE_OBJECT_STORAGE_DATA_ASSET",
                  "ORACLE_ATP_DATA_ASSET",
                  "ORACLE_ADWC_DATA_ASSET",
                  "MYSQL_DATA_ASSET",
                  "GENERIC_JDBC_DATA_ASSET",
                  "FUSION_APP_DATA_ASSET",
                  "AMAZON_S3_DATA_ASSET",
                  "LAKE_DATA_ASSET",
                  "ORACLE_PEOPLESOFT_DATA_ASSET",
                  "ORACLE_SIEBEL_DATA_ASSET",
                  "ORACLE_EBS_DATA_ASSET",
                  "HDFS_DATA_ASSET",
                  "MYSQL_HEATWAVE_DATA_ASSET",
                  "REST_DATA_ASSET",
                ],
              },
              isRequired: true,
            },
            optName3,
            optIdentifier,
            {
              name: "--key",
              description: "Currently not used on data asset creation",
              args: { name: "key" },
            },
            optModelVersion2,
            {
              name: "--description",
              description: "User-defined description of the data asset",
              args: { name: "description" },
            },
            optObjectStatus,
            optExternalKey,
            {
              name: "--asset-properties",
              description: "Additional properties for the data asset",
              args: { name: "json" },
            },
            optRegistryMetadata,
            { name: "--service-name", args: { name: "service-name" } },
            { name: "--driver-class", args: { name: "driver-class" } },
            optCredentialFileContent,
            {
              name: "--default-connection",
              args: { name: "default-connection" },
            },
            { name: "--url", args: { name: "url" } },
            { name: "--tenancy-id", args: { name: "tenancy-id" } },
            { name: "--namespace", args: { name: "namespace" } },
            { name: "--host", args: { name: "host" } },
            { name: "--port", args: { name: "port" } },
            { name: "--sid", args: { name: "sid" } },
            {
              name: "--data-asset-type",
              description:
                "The data asset type for the generic JDBC data asset",
              args: { name: "data-asset-type" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Removes a data asset using the specified identifier",
          options: [
            optWorkspaceId,
            optDataAssetKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves details of a data asset using the specified identifier",
          options: [optWorkspaceId, optDataAssetKey, optFromJson],
        },
        {
          name: "list",
          description: "Retrieves a list of all data asset summaries",
          options: [
            optWorkspaceId,
            optPage,
            optLimit,
            optFields,
            optType2,
            optSortBy,
            optSortOrder,
            optName2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a specific data asset with default connection",
          options: [
            optWorkspaceId,
            optDataAssetKey,
            {
              name: "--model-type",
              description: "The type of the data asset",
              args: {
                suggestions: [
                  "ORACLE_DATA_ASSET",
                  "ORACLE_OBJECT_STORAGE_DATA_ASSET",
                  "ORACLE_ATP_DATA_ASSET",
                  "ORACLE_ADWC_DATA_ASSET",
                  "MYSQL_DATA_ASSET",
                  "GENERIC_JDBC_DATA_ASSET",
                  "FUSION_APP_DATA_ASSET",
                  "AMAZON_S3_DATA_ASSET",
                  "LAKE_DATA_ASSET",
                  "ORACLE_PEOPLESOFT_DATA_ASSET",
                  "ORACLE_SIEBEL_DATA_ASSET",
                  "ORACLE_EBS_DATA_ASSET",
                  "HDFS_DATA_ASSET",
                  "MYSQL_HEATWAVE_DATA_ASSET",
                  "REST_DATA_ASSET",
                ],
              },
              isRequired: true,
            },
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify data asset",
              args: { name: "key" },
              isRequired: true,
            },
            optObjectVersion,
            optModelVersion2,
            optName,
            {
              name: "--description",
              description: "The user-defined description of the data asset",
              args: { name: "description" },
            },
            optObjectStatus,
            optIdentifier2,
            optExternalKey,
            {
              name: "--asset-properties",
              description: "Additional properties for the data asset",
              args: { name: "json" },
            },
            optRegistryMetadata,
            optIfMatch,
            optForce,
            { name: "--service-name", args: { name: "service-name" } },
            { name: "--driver-class", args: { name: "driver-class" } },
            optCredentialFileContent,
            {
              name: "--default-connection",
              args: { name: "default-connection" },
            },
            { name: "--url", args: { name: "url" } },
            { name: "--tenancy-id", args: { name: "tenancy-id" } },
            { name: "--namespace", args: { name: "namespace" } },
            { name: "--host", args: { name: "host" } },
            { name: "--port", args: { name: "port" } },
            { name: "--sid", args: { name: "sid" } },
            {
              name: "--data-asset-type",
              description:
                "The data asset type for the generic JDBC data asset",
              args: { name: "data-asset-type" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "import-request-summary-collection",
      description: "This is the collection of import object requests",
      subcommands: [
        {
          name: "list-import-requests",
          description:
            "This endpoint can be used to get the list of import object requests",
          options: [
            optWorkspaceId,
            optPage,
            optLimit,
            optName2,
            optSortOrder,
            optSortBy,
            {
              name: "--import-status",
              description:
                "Specifies import status to use, either - ALL, SUCCESSFUL, IN_PROGRESS, QUEUED, FAILED",
              args: {
                suggestions: [
                  "IN_PROGRESS",
                  "SUCCESSFUL",
                  "QUEUED",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--projection",
              description:
                "This parameter allows users to specify which view of the import object response to return",
              args: { suggestions: ["SUMMARY", "DETAILS"] },
            },
            optTimeStartedInMillis,
            optTimeEndedInMillis,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "export-request-summary-collection",
      description: "This is the collection of export object requests",
      subcommands: [
        {
          name: "list-export-requests",
          description:
            "This endpoint can be used to get the list of export object requests",
          options: [
            optWorkspaceId,
            optPage,
            optLimit,
            optName2,
            optSortOrder,
            optSortBy,
            {
              name: "--export-status",
              description:
                "Specifies export status to use, either - ALL, SUCCESSFUL, IN_PROGRESS, QUEUED, FAILED",
              args: {
                suggestions: [
                  "IN_PROGRESS",
                  "SUCCESSFUL",
                  "QUEUED",
                  "TERMINATING",
                  "TERMINATED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--projection",
              description:
                "This parameter allows users to specify which view of the export object response to return",
              args: { suggestions: ["SUMMARY", "DETAILS"] },
            },
            optTimeStartedInMillis,
            optTimeEndedInMillis,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "pipeline-validation",
      description: "The information about a pipeline validation",
      subcommands: [
        {
          name: "create",
          description:
            "Accepts the data flow definition in the request payload and creates a pipeline validation",
          options: [
            optWorkspaceId,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify pipeline",
              args: { name: "key" },
            },
            optModelVersion3,
            optParentRef,
            optName,
            optDescription,
            optModelType,
            optObjectVersion3,
            optObjectStatus,
            optIdentifier2,
            optNodes,
            {
              name: "--parameters",
              description:
                "A list of parameters for the pipeline, this allows certain aspects of the pipeline to be configured when",
              args: { name: "json" },
            },
            optFlowConfigValues,
            {
              name: "--variables",
              description:
                "The list of variables required in pipeline, variables can be used to store values that can be used as inputs",
              args: { name: "json" },
            },
            optMetadata,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a pipeline validation using the specified identifier",
          options: [
            optWorkspaceId,
            {
              name: "--pipeline-validation-key",
              description: "The key of the pipeline validation",
              args: { name: "pipeline-validation-key" },
              isRequired: true,
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves a pipeline validation using the specified identifier",
          options: [
            optWorkspaceId,
            {
              name: "--pipeline-validation-key",
              description: "The key of the pipeline validation",
              args: { name: "pipeline-validation-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of pipeline validations within the specified workspace",
          options: [
            optWorkspaceId,
            optKey6,
            optName2,
            optIdentifier6,
            optFields,
            optPage,
            optLimit,
            optSortBy,
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
      description: "The connection for a data asset",
      subcommands: [
        {
          name: "create",
          description: "Creates a connection under an existing data asset",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            {
              name: "--model-type",
              description: "The type of the connection",
              args: {
                suggestions: [
                  "ORACLE_ADWC_CONNECTION",
                  "ORACLE_ATP_CONNECTION",
                  "ORACLE_OBJECT_STORAGE_CONNECTION",
                  "ORACLEDB_CONNECTION",
                  "MYSQL_CONNECTION",
                  "GENERIC_JDBC_CONNECTION",
                  "BICC_CONNECTION",
                  "AMAZON_S3_CONNECTION",
                  "BIP_CONNECTION",
                  "LAKE_CONNECTION",
                  "ORACLE_PEOPLESOFT_CONNECTION",
                  "ORACLE_EBS_CONNECTION",
                  "ORACLE_SIEBEL_CONNECTION",
                  "HDFS_CONNECTION",
                  "MYSQL_HEATWAVE_CONNECTION",
                  "REST_NO_AUTH_CONNECTION",
                  "REST_BASIC_AUTH_CONNECTION",
                  "OAUTH2_CONNECTION",
                ],
              },
            },
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify connection",
              args: { name: "key" },
            },
            optModelVersion2,
            optParentRef,
            optDescription2,
            optObjectStatus,
            optConnectionProperties,
            optRegistryMetadata,
            { name: "--username", args: { name: "username" } },
            { name: "--password", args: { name: "password" } },
            optCredentialFileContent,
            { name: "--user-id", args: { name: "user-id" } },
            { name: "--finger-print", args: { name: "finger-print" } },
            { name: "--pass-phrase", args: { name: "pass-phrase" } },
            optFromJson,
          ],
        },
        {
          name: "create-connection-create-connection-from-bip",
          description: "Creates a connection under an existing data asset",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify connection",
              args: { name: "key" },
            },
            optModelVersion2,
            optParentRef,
            optDescription2,
            optObjectStatus,
            optConnectionProperties,
            optRegistryMetadata,
            {
              name: "--username",
              description: "The user name for the connection",
              args: { name: "username" },
            },
            { name: "--password-secret", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Removes a connection using the specified identifier",
          options: [
            optWorkspaceId,
            optConnectionKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves the connection details using the specified identifier",
          options: [optWorkspaceId, optConnectionKey, optFromJson],
        },
        {
          name: "list",
          description: "Retrieves a list of all connections",
          options: [
            optWorkspaceId,
            {
              name: "--data-asset-key",
              description: "Used to filter by the data asset key of the object",
              args: { name: "data-asset-key" },
              isRequired: true,
            },
            optName2,
            optPage,
            optLimit,
            optFields,
            optType2,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a connection under a data asset",
          options: [
            optWorkspaceId,
            optConnectionKey,
            {
              name: "--model-type",
              description: "The type of the connection",
              args: {
                suggestions: [
                  "ORACLE_ADWC_CONNECTION",
                  "ORACLE_ATP_CONNECTION",
                  "ORACLE_OBJECT_STORAGE_CONNECTION",
                  "ORACLEDB_CONNECTION",
                  "MYSQL_CONNECTION",
                  "GENERIC_JDBC_CONNECTION",
                  "BICC_CONNECTION",
                  "AMAZON_S3_CONNECTION",
                  "BIP_CONNECTION",
                  "LAKE_CONNECTION",
                  "ORACLE_PEOPLESOFT_CONNECTION",
                  "ORACLE_EBS_CONNECTION",
                  "ORACLE_SIEBEL_CONNECTION",
                  "HDFS_CONNECTION",
                  "MYSQL_HEATWAVE_CONNECTION",
                  "REST_NO_AUTH_CONNECTION",
                  "REST_BASIC_AUTH_CONNECTION",
                  "OAUTH2_CONNECTION",
                ],
              },
              isRequired: true,
            },
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify connection",
              args: { name: "key" },
              isRequired: true,
            },
            optObjectVersion,
            optModelVersion2,
            optParentRef,
            optName,
            optDescription2,
            optObjectStatus,
            optIdentifier2,
            optConnectionProperties,
            optRegistryMetadata,
            optIfMatch,
            optForce,
            { name: "--username", args: { name: "username" } },
            { name: "--password", args: { name: "password" } },
            optCredentialFileContent,
            { name: "--user-id", args: { name: "user-id" } },
            { name: "--finger-print", args: { name: "finger-print" } },
            { name: "--pass-phrase", args: { name: "pass-phrase" } },
            optFromJson,
          ],
        },
        {
          name: "update-connection-update-connection-from-bip",
          description: "Updates a connection under a data asset",
          options: [
            optWorkspaceId,
            optConnectionKey,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify connection",
              args: { name: "key" },
              isRequired: true,
            },
            optObjectVersion,
            optModelVersion2,
            optParentRef,
            optName,
            optDescription2,
            optObjectStatus,
            optIdentifier2,
            optConnectionProperties,
            optRegistryMetadata,
            {
              name: "--username",
              description: "The user name for the connection",
              args: { name: "username" },
            },
            { name: "--password-secret", args: { name: "json" } },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "composite-state",
      description:
        "The composite state object provides information on the state of a task or schedule",
      subcommands: [
        {
          name: "get",
          description:
            "This endpoint can be used to get composite state for a given aggregator",
          options: [
            optWorkspaceId,
            optApplicationKey,
            {
              name: "--aggregator-key",
              description:
                "Unique key of the aggregator for which we want to get the Composite State",
              args: { name: "aggregator-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "task-run-log",
      description: "A log message from the execution of a task",
      subcommands: [
        {
          name: "list",
          description: "Gets log entries for task runs using its key",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optTaskRunKey,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "task-validation",
      description: "The information about task validation",
      subcommands: [
        {
          name: "delete",
          description:
            "Removes a task validation using the specified identifier",
          options: [
            optWorkspaceId,
            {
              name: "--task-validation-key",
              description: "The task validation key",
              args: { name: "task-validation-key" },
              isRequired: true,
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves a task validation using the specified identifier",
          options: [
            optWorkspaceId,
            {
              name: "--task-validation-key",
              description: "The task validation key",
              args: { name: "task-validation-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of task validations within the specified workspace",
          options: [
            optWorkspaceId,
            optKey6,
            optName2,
            optIdentifier6,
            optFields,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-from-pipeline-task",
          description: "Validates a specific task",
          options: [
            optWorkspaceId,
            optKey,
            optModelVersion2,
            optParentRef,
            optName,
            optDescription,
            optObjectVersion2,
            optObjectStatus,
            optIdentifier4,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optMetadata,
            optPipeline,
            optConfigProvider,
            optFromJson,
          ],
        },
        {
          name: "create-from-integration-task",
          description: "Validates a specific task",
          options: [
            optWorkspaceId,
            optKey,
            optModelVersion2,
            optParentRef,
            optName,
            optDescription,
            optObjectVersion2,
            optObjectStatus,
            optIdentifier4,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optMetadata,
            optDataFlow,
            optFromJson,
          ],
        },
        {
          name: "create-from-data-loader-task",
          description: "Validates a specific task",
          options: [
            optWorkspaceId,
            optKey,
            optModelVersion2,
            optParentRef,
            optName,
            optDescription,
            optObjectVersion2,
            optObjectStatus,
            optIdentifier4,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optMetadata,
            optDataFlow,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "export-request",
      description: "Export metadata object response",
      subcommands: [
        {
          name: "create",
          description: "Export Metadata Object",
          options: [
            optWorkspaceId,
            {
              name: "--bucket-name",
              description:
                "Name of the Object Storage bucket where the object will be exported",
              args: { name: "bucket-name" },
              isRequired: true,
            },
            {
              name: "--file-name",
              description: "Name of the exported zip file",
              args: { name: "file-name" },
            },
            {
              name: "--object-storage-tenancy-id",
              description:
                "Optional parameter to point to object storage tenancy (if using Object Storage of different tenancy)",
              args: { name: "object-storage-tenancy-id" },
            },
            {
              name: "--object-storage-region",
              description:
                "Region of the object storage (if using object storage of different region)",
              args: { name: "object-storage-region" },
            },
            {
              name: "--is-object-overwrite-enabled",
              description:
                "Flag to control whether to overwrite the object if it is already present at the provided object storage",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--object-keys",
              description:
                "Field is used to specify which object keys to export",
              args: { name: "json" },
            },
            {
              name: "--are-references-included",
              description:
                "This field controls if the references will be exported along with the objects",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--filters",
              description: "Filters for exported objects",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "This endpoint can be used to get the summary/details of object being exported",
          options: [optWorkspaceId, optExportRequestKey, optFromJson],
        },
      ],
    },
    {
      name: "copy-object-request",
      description: "Copy metadata object request",
      subcommands: [
        {
          name: "create",
          description: "Copy Metadata Object",
          options: [
            optWorkspaceId,
            {
              name: "--source-workspace-id",
              description:
                "The workspace id of the source from where we need to copy object",
              args: { name: "source-workspace-id" },
              isRequired: true,
            },
            {
              name: "--object-keys",
              description: "The list of the objects to be copied",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--copy-conflict-resolution",
              args: { name: "json" },
              isRequired: true,
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "This endpoint can be used to get the summary/details of object being copied",
          options: [optWorkspaceId, optCopyObjectRequestKey, optFromJson],
        },
      ],
    },
    {
      name: "detailed-description",
      description: "The detailed description of an object",
      subcommands: [
        {
          name: "create-application",
          description: "Creates detailed description for an application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optLogo,
            optDetailedDescription,
            optFromJson,
          ],
        },
        {
          name: "create-dis-application",
          description: "Creates detailed description for an application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optLogo,
            optDetailedDescription,
            optFromJson,
          ],
        },
        {
          name: "delete-application",
          description: "Deletes detailed description of an Application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "delete-dis-application",
          description: "Deletes detailed description of an Application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get-application",
          description: "Retrieves detailed description of an Application",
          options: [optWorkspaceId, optApplicationKey, optFromJson],
        },
        {
          name: "get-dis-application",
          description: "Retrieves detailed description of an Application",
          options: [optWorkspaceId, optApplicationKey, optFromJson],
        },
        {
          name: "update-application",
          description: "Updates the detailed description of an Application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optLogo,
            optDetailedDescription,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-dis-application",
          description: "Updates the detailed description of an Application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optLogo,
            optDetailedDescription,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "pipeline",
      description:
        "A pipeline is a logical grouping of tasks that together perform a higher level operation",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new pipeline in a project or folder ready for performing task orchestration",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify pipeline",
              args: { name: "key" },
            },
            optModelVersion3,
            optParentRef,
            optDescription,
            optModelType,
            optObjectVersion3,
            optObjectStatus,
            optNodes,
            {
              name: "--parameters",
              description:
                "A list of additional parameters required in pipeline",
              args: { name: "json" },
            },
            optFlowConfigValues,
            {
              name: "--variables",
              description: "The list of variables required in pipeline",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a pipeline from a project or folder using the specified identifier",
          options: [
            optWorkspaceId,
            optPipelineKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a pipeline using the specified identifier",
          options: [
            optWorkspaceId,
            optPipelineKey,
            optExpandReferences,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of pipelines in a project or folder from within a workspace",
          options: [
            optWorkspaceId,
            optAggregatorKey,
            optFields,
            optName2,
            optIdentifier3,
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
          name: "update",
          description: "Updates a specific pipeline",
          options: [
            optWorkspaceId,
            optPipelineKey,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify pipeline",
              args: { name: "key" },
              isRequired: true,
            },
            optModelType2,
            optObjectVersion4,
            optModelVersion3,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier2,
            optNodes,
            {
              name: "--parameters",
              description:
                "A list of additional parameters required in pipeline",
              args: { name: "json" },
            },
            optFlowConfigValues,
            {
              name: "--variables",
              description: "The list of variables required in pipeline",
              args: { name: "json" },
            },
            optRegistryMetadata,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "schedule",
      description: "The schedule object",
      subcommands: [
        {
          name: "create",
          description: "Endpoint to create a new schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optName3,
            optIdentifier,
            optKey4,
            optModelVersion3,
            optDescription,
            optObjectVersion3,
            optObjectStatus,
            { name: "--frequency-details", args: { name: "json" } },
            optTimezone,
            optRegistryMetadata,
            optIsDaylightAdjEnabled,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Endpoint to delete schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optScheduleKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves schedule by schedule key",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optScheduleKey,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Use this endpoint to list schedules",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optKey5,
            optName2,
            optIdentifier3,
            optType,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Endpoint used to update the schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optScheduleKey,
            optKey3,
            optObjectVersion4,
            optModelVersion3,
            optModelType,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier2,
            { name: "--frequency-details", args: { name: "json" } },
            optTimezone,
            optRegistryMetadata,
            optIfMatch,
            optForce,
            optIsDaylightAdjEnabled,
            optFromJson,
          ],
        },
        {
          name: "create-custom-frequency",
          description: "Endpoint to create a new schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optName3,
            optIdentifier,
            optKey4,
            optModelVersion3,
            optDescription,
            optObjectVersion3,
            optObjectStatus,
            optTimezone,
            optRegistryMetadata,
            optIsDaylightAdjEnabled,
            optFrequency,
            {
              name: "--custom-expression",
              args: { name: "custom-expression" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-custom-frequency",
          description: "Endpoint to create a new schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optScheduleKey,
            optKey3,
            optObjectVersion4,
            optModelVersion3,
            optModelType,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier2,
            optTimezone,
            optRegistryMetadata,
            optIfMatch,
            optForce,
            optIsDaylightAdjEnabled,
            optFrequency,
            {
              name: "--custom-expression",
              args: { name: "custom-expression" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-daily-frequency",
          description: "Endpoint to create a new schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optName3,
            optIdentifier,
            optKey4,
            optModelVersion3,
            optDescription,
            optObjectVersion3,
            optObjectStatus,
            optTimezone,
            optRegistryMetadata,
            optFrequencyDetailsTime,
            optIsDaylightAdjEnabled,
            optFrequency,
            optInterval,
            optFromJson,
          ],
        },
        {
          name: "update-daily-frequency",
          description: "Endpoint used to update the schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optScheduleKey,
            optKey3,
            optObjectVersion4,
            optModelVersion3,
            optModelType,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier2,
            optTimezone,
            optRegistryMetadata,
            optIfMatch,
            optFrequencyDetailsTime,
            optForce,
            optIsDaylightAdjEnabled,
            optFrequency,
            optInterval,
            optFromJson,
          ],
        },
        {
          name: "create-hourly-frequency",
          description: "Endpoint to create a new schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optName3,
            optIdentifier,
            optKey4,
            optModelVersion3,
            optDescription,
            optObjectVersion3,
            optObjectStatus,
            optTimezone,
            optRegistryMetadata,
            optFrequencyDetailsTime,
            optIsDaylightAdjEnabled,
            optFrequency,
            optInterval,
            optFromJson,
          ],
        },
        {
          name: "update-hourly-frequency",
          description: "Endpoint to create a new schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optScheduleKey,
            optKey3,
            optObjectVersion4,
            optModelVersion3,
            optModelType,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier2,
            optTimezone,
            optRegistryMetadata,
            optIfMatch,
            optFrequencyDetailsTime,
            optForce,
            optIsDaylightAdjEnabled,
            optFrequency,
            optInterval,
            optFromJson,
          ],
        },
        {
          name: "create-weekly-frequency",
          description: "Endpoint to create a new schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optName3,
            optIdentifier,
            optKey4,
            optModelVersion3,
            optDescription,
            optObjectVersion3,
            optObjectStatus,
            optTimezone,
            optRegistryMetadata,
            optFrequencyDetailsTime,
            optIsDaylightAdjEnabled,
            optFrequency,
            { name: "--days", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "update-weekly-frequency",
          description: "Endpoint to create a new schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optScheduleKey,
            optKey3,
            optObjectVersion4,
            optModelVersion3,
            optModelType,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier2,
            optTimezone,
            optRegistryMetadata,
            optIfMatch,
            optFrequencyDetailsTime,
            optForce,
            optIsDaylightAdjEnabled,
            optFrequency,
            { name: "--days", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "create-monthly-rule-frequency",
          description: "Endpoint to create a new schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optName3,
            optIdentifier,
            optKey4,
            optModelVersion3,
            optDescription,
            optObjectVersion3,
            optObjectStatus,
            optTimezone,
            optRegistryMetadata,
            optFrequencyDetailsTime,
            optIsDaylightAdjEnabled,
            { name: "--day-of-week", args: { name: "day-of-week" } },
            optFrequency,
            optInterval,
            { name: "--week-of-month", args: { name: "week-of-month" } },
            optFromJson,
          ],
        },
        {
          name: "update-monthly-rule-frequency",
          description: "Endpoint to create a new schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optScheduleKey,
            optKey3,
            optObjectVersion4,
            optModelVersion3,
            optModelType,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier2,
            optTimezone,
            optRegistryMetadata,
            optIfMatch,
            optFrequencyDetailsTime,
            optForce,
            optIsDaylightAdjEnabled,
            { name: "--day-of-week", args: { name: "day-of-week" } },
            optFrequency,
            optInterval,
            { name: "--week-of-month", args: { name: "week-of-month" } },
            optFromJson,
          ],
        },
        {
          name: "create-monthly-frequency",
          description: "Endpoint to create a new schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optName3,
            optIdentifier,
            optKey4,
            optModelVersion3,
            optDescription,
            optObjectVersion3,
            optObjectStatus,
            optTimezone,
            optRegistryMetadata,
            optFrequencyDetailsTime,
            {
              name: "--frequency-details-days",
              description:
                "A list of days of the month to be scheduled. i.e. excute every 2nd,3rd, 10th of the month",
              args: { name: "json" },
            },
            optIsDaylightAdjEnabled,
            optFrequency,
            optInterval,
            optFromJson,
          ],
        },
        {
          name: "update-monthly-frequency",
          description: "Endpoint used to update the schedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optScheduleKey,
            optKey3,
            optObjectVersion4,
            optModelVersion3,
            optModelType,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier2,
            optTimezone,
            optRegistryMetadata,
            optIfMatch,
            optFrequencyDetailsTime,
            {
              name: "--frequency-details-days",
              description:
                "A list of days of the month to be scheduled. i.e. excute every 2nd,3rd, 10th of the month",
              args: { name: "json" },
            },
            optForce,
            optIsDaylightAdjEnabled,
            optFrequency,
            optInterval,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "data-flow",
      description:
        "The data flow type contains the audit summary information and the definition of the data flow",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new data flow in a project or folder ready for performing data integrations",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify data flow",
              args: { name: "key" },
            },
            optModelVersion2,
            optParentRef,
            optNodes2,
            optParameters,
            optDescription,
            optFlowConfigValues,
            optObjectStatus,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a data flow from a project or folder using the specified identifier",
          options: [
            optWorkspaceId,
            optDataFlowKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a data flow using the specified identifier",
          options: [
            optWorkspaceId,
            optDataFlowKey,
            optExpandReferences,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Retrieves a list of data flows in a project or folder",
          options: [
            optWorkspaceId,
            {
              name: "--folder-id",
              description: "Unique key of the folder",
              args: { name: "folder-id" },
            },
            optFields,
            optName2,
            optIdentifier3,
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
          name: "update",
          description: "Updates a specific data flow",
          options: [
            optWorkspaceId,
            optDataFlowKey,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify data flow",
              args: { name: "key" },
              isRequired: true,
            },
            optModelType2,
            optObjectVersion,
            optModelVersion2,
            optParentRef,
            optName,
            optIdentifier2,
            optNodes2,
            optParameters,
            optDescription,
            optFlowConfigValues,
            optObjectStatus,
            optRegistryMetadata,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "user-defined-function",
      description:
        "The user defined function type contains the audit summary information and the definition of the user defined",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new UserDefinedFunction in a function library ready for performing data integrations",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify user defined function",
              args: { name: "key" },
            },
            optModelVersion2,
            optParentRef,
            optSignatures,
            optExpr,
            optDescription,
            optObjectStatus,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a UserDefinedFunction from a function library using the specified identifier",
          options: [
            optWorkspaceId,
            optUserDefinedFunctionKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves a UserDefinedFunction using the specified identifier",
          options: [optWorkspaceId, optUserDefinedFunctionKey, optFromJson],
        },
        {
          name: "list",
          description:
            "Retrieves a list of UserDefinedFunctions in a function library",
          options: [
            optWorkspaceId,
            {
              name: "--function-library-key",
              description: "Unique key of the FunctionLibrary",
              args: { name: "function-library-key" },
            },
            optFields,
            optName2,
            optIdentifier3,
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
          name: "update",
          description: "Updates a specific UserDefinedFunction",
          options: [
            optWorkspaceId,
            optUserDefinedFunctionKey,
            optParentRef,
            optName,
            optIdentifier2,
            optModelVersion2,
            optObjectVersion2,
            optSignatures,
            optExpr,
            optDescription,
            optObjectStatus,
            optRegistryMetadata,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "folder",
      description:
        "The folder type contains the audit summary information and the definition of the folder",
      subcommands: [
        {
          name: "create",
          description: "Creates a folder in a project or in another folder",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            {
              name: "--key",
              description: "Currently not used on folder creation",
              args: { name: "key" },
            },
            optModelVersion2,
            {
              name: "--description",
              description: "A user defined description for the folder",
              args: { name: "description" },
            },
            optCategoryName,
            optObjectStatus,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a folder from a project using the specified identifier",
          options: [
            optWorkspaceId,
            optFolderKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a folder using the specified identifier",
          options: [optWorkspaceId, optFolderKey, optProjection, optFromJson],
        },
        {
          name: "list",
          description:
            "Retrieves a list of folders in a project and provides options to filter the list",
          options: [
            optWorkspaceId,
            optAggregatorKey,
            optFields,
            optName2,
            optNameContains,
            optIdentifier3,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a specific folder",
          options: [
            optWorkspaceId,
            optFolderKey,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify folder",
              args: { name: "key" },
              isRequired: true,
            },
            optModelType2,
            optObjectVersion,
            optModelVersion2,
            optName,
            {
              name: "--description",
              description: "A user defined description for the folder",
              args: { name: "description" },
            },
            optCategoryName,
            optObjectStatus,
            optIdentifier2,
            optParentRef,
            optRegistryMetadata,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "task",
      description:
        "The task type contains the audit summary information and the definition of the task",
      subcommands: [
        {
          name: "delete",
          description: "Removes a task using the specified identifier",
          options: [
            optWorkspaceId,
            optTaskKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a task using the specified identifier",
          options: [
            optWorkspaceId,
            optTaskKey,
            optExpandReferences,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of all tasks in a specified project or folder",
          options: [
            optWorkspaceId,
            {
              name: "--folder-id",
              description: "Unique key of the folder",
              args: { name: "folder-id" },
            },
            optFields,
            optName2,
            optKey5,
            optIdentifier3,
            optType,
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
          name: "update-pipeline-task",
          description: "Updates a specific task",
          options: [
            optWorkspaceId,
            optTaskKey,
            optKey2,
            optObjectVersion,
            optModelVersion,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier4,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            optRegistryMetadata,
            optPipeline,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "create-pipeline-task",
          description:
            "Creates a new task ready for performing data integrations",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            optKey,
            optModelVersion,
            optParentRef,
            optDescription,
            optObjectStatus,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            optPipeline,
            optFromJson,
          ],
        },
        {
          name: "create-task-create-task-from-pipeline-task",
          description:
            "Creates a new task ready for performing data integrations",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            optKey,
            optModelVersion,
            optParentRef,
            optDescription,
            optObjectStatus,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optIsConcurrentAllowed,
            optPipeline,
            optConfigProvider,
            optFromJson,
          ],
        },
        {
          name: "update-task-update-task-from-pipeline-task",
          description: "Updates a specific task",
          options: [
            optWorkspaceId,
            optTaskKey,
            optKey2,
            optObjectVersion,
            optModelVersion,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier4,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optIsConcurrentAllowed,
            optRegistryMetadata,
            optPipeline,
            optIfMatch,
            optForce,
            optConfigProvider,
            optFromJson,
          ],
        },
        {
          name: "create-task-from-sql-task",
          description:
            "Creates a new task ready for performing data integrations",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            optKey,
            optModelVersion,
            optParentRef,
            optDescription,
            optObjectStatus,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optIsConcurrentAllowed,
            optScript,
            optSqlScriptType,
            optOperation,
            optConfigProvider,
            optFromJson,
          ],
        },
        {
          name: "update-task-from-sql-task",
          description: "Updates a specific task",
          options: [
            optWorkspaceId,
            optTaskKey,
            optKey2,
            optObjectVersion,
            optModelVersion,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier4,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            optRegistryMetadata,
            optScript,
            optSqlScriptType,
            optOperation,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "update-task-update-task-from-sql-task",
          description: "Updates a specific task",
          options: [
            optWorkspaceId,
            optTaskKey,
            optKey2,
            optObjectVersion,
            optModelVersion,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier4,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optIsConcurrentAllowed,
            optRegistryMetadata,
            optScript,
            optSqlScriptType,
            optOperation,
            optIfMatch,
            optForce,
            optConfigProvider,
            optFromJson,
          ],
        },
        {
          name: "create-task-from-rest-task",
          description:
            "Creates a new task ready for performing data integrations",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            optKey,
            optModelVersion,
            optParentRef,
            optDescription,
            optObjectStatus,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            optAuthDetails,
            optAuthConfig,
            { name: "--endpoint-parameterconflict", args: { name: "json" } },
            optMethodType,
            optHeaders,
            optJsonData,
            optApiCallMode,
            optCancelEndpoint,
            optCancelMethodType,
            { name: "--execute-rest-call-config", args: { name: "json" } },
            { name: "--cancel-rest-call-config", args: { name: "json" } },
            optPollRestCallConfig,
            optTypedExpressions,
            optFromJson,
          ],
        },
        {
          name: "create-task-create-task-from-rest-task",
          description:
            "Creates a new task ready for performing data integrations",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            optKey,
            optModelVersion,
            optParentRef,
            optDescription,
            optObjectStatus,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            optAuthDetails,
            optAuthConfig,
            optMethodType,
            optHeaders,
            optJsonData,
            optApiCallMode,
            optCancelEndpoint,
            optCancelMethodType,
            optPollRestCallConfig,
            optTypedExpressions,
            { name: "--apiendpoint", args: { name: "apiendpoint" } },
            {
              name: "--execute-rest-config",
              args: { name: "execute-rest-config" },
            },
            {
              name: "--cancel-rest-config",
              args: { name: "cancel-rest-config" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-task-from-rest-task",
          description: "Updates a specific task",
          options: [
            optWorkspaceId,
            optTaskKey,
            optKey2,
            optObjectVersion,
            optModelVersion,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier4,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            optRegistryMetadata,
            optAuthDetails,
            optAuthConfig,
            { name: "--endpoint-parameterconflict", args: { name: "json" } },
            optMethodType,
            optHeaders,
            {
              name: "--additional-properties",
              description: "Header value",
              args: { name: "additional-properties" },
            },
            optJsonData,
            optApiCallMode,
            optCancelEndpoint,
            optCancelMethodType,
            { name: "--execute-rest-call-config", args: { name: "json" } },
            { name: "--cancel-rest-call-config", args: { name: "json" } },
            optPollRestCallConfig,
            optTypedExpressions,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "update-task-update-task-from-rest-task",
          description: "Updates a specific task",
          options: [
            optWorkspaceId,
            optTaskKey,
            optKey2,
            optObjectVersion,
            optModelVersion,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier4,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            optRegistryMetadata,
            optAuthDetails,
            optAuthConfig,
            optMethodType,
            optHeaders,
            {
              name: "--additional-properties",
              description: "Header value",
              args: { name: "additional-properties" },
            },
            optJsonData,
            optApiCallMode,
            optCancelEndpoint,
            optCancelMethodType,
            optPollRestCallConfig,
            optTypedExpressions,
            optIfMatch,
            optForce,
            { name: "--apiendpoint", args: { name: "apiendpoint" } },
            {
              name: "--execute-rest-config",
              args: { name: "execute-rest-config" },
            },
            {
              name: "--cancel-rest-config",
              args: { name: "cancel-rest-config" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-integration-task",
          description:
            "Creates a new task ready for performing data integrations",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            optKey,
            optModelVersion,
            optParentRef,
            optDescription,
            optObjectStatus,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            optDataFlow,
            optFromJson,
          ],
        },
        {
          name: "create-data-loader-task",
          description:
            "Creates a new task ready for performing data integrations",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            optKey,
            optModelVersion,
            optParentRef,
            optDescription,
            optObjectStatus,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            optDataFlow,
            {
              name: "--conditional-composite-field-map",
              args: { name: "json" },
            },
            {
              name: "--is-single-load",
              description:
                "Defines whether Data Loader task is used for single load or multiple",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--parallel-load-limit",
              description:
                "Defines the number of entities being loaded in parallel at a time for a Data Loader task",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-integration-task",
          description: "Updates a specific task",
          options: [
            optWorkspaceId,
            optTaskKey,
            optKey2,
            optObjectVersion,
            optModelVersion,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier4,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            optRegistryMetadata,
            optDataFlow,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "update-data-loader-task",
          description: "Updates a specific task",
          options: [
            optWorkspaceId,
            optTaskKey,
            optKey2,
            optObjectVersion,
            optModelVersion,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier4,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            optRegistryMetadata,
            optDataFlow,
            {
              name: "--conditional-composite-field-map",
              args: { name: "json" },
            },
            {
              name: "--is-single-load",
              description:
                "Defines whether Data Loader task is used for single load or multiple",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--parallel-load-limit",
              description:
                "Defines the number of entities being loaded in parallel at a time for a Data Loader task",
              args: { name: "integer" },
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "create-task-from-dataflow-task",
          description:
            "Creates a new task ready for performing data integrations",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            optKey,
            optModelVersion,
            optParentRef,
            optDescription,
            optObjectStatus,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            { name: "--dataflow-application", args: { name: "json" } },
            { name: "--driver-shape-details", args: { name: "json" } },
            { name: "--executor-shape-details", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "update-task-from-dataflow-task",
          description: "Updates a specific task",
          options: [
            optWorkspaceId,
            optTaskKey,
            optKey2,
            optObjectVersion,
            optModelVersion,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier4,
            optInputPorts,
            optOutputPorts,
            optParameters,
            optOpConfigValues,
            optConfigProviderDelegate,
            optIsConcurrentAllowed,
            optRegistryMetadata,
            { name: "--dataflow-application", args: { name: "json" } },
            { name: "--driver-shape-details", args: { name: "json" } },
            { name: "--executor-shape-details", args: { name: "json" } },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "external-publication",
      description:
        "The external published object contains the audit summary information and the definition of the task",
      subcommands: [
        {
          name: "create",
          description: "Publish a DataFlow in a OCI DataFlow application",
          options: [
            optWorkspaceId,
            optTaskKey,
            {
              name: "--application-compartment-id",
              description:
                "The OCID of the compartment where the application is created in the Oracle Cloud Infrastructure Data Flow",
              args: { name: "application-compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the application",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--application-id",
              description:
                "The unique OCID of the identifier that is returned after creating the Oracle Cloud Infrastructure Data Flow",
              args: { name: "application-id" },
            },
            {
              name: "--description",
              description: "The details of the data flow or the application",
              args: { name: "description" },
            },
            { name: "--resource-configuration", args: { name: "json" } },
            { name: "--configuration-details", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a published object using the specified identifier",
          options: [
            optWorkspaceId,
            optTaskKey,
            optExternalPublicationsKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves a publshed object in an task using the specified identifier",
          options: [
            optWorkspaceId,
            optTaskKey,
            optExternalPublicationsKey,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of external publications in an application and provides options to filter the list",
          options: [
            optWorkspaceId,
            optTaskKey,
            optFields,
            optName2,
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
          name: "update",
          description: "Updates the external publication object",
          options: [
            optWorkspaceId,
            optTaskKey,
            optExternalPublicationsKey,
            {
              name: "--application-compartment-id",
              description:
                "The OCID of the compartment where the application is created in the Oracle Cloud Infrastructure Data Flow",
              args: { name: "application-compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the application",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--application-id",
              description:
                "The unique OCID of the identifier that is returned after creating the Oracle Cloud Infrastructure Data Flow",
              args: { name: "application-id" },
            },
            {
              name: "--description",
              description: "The details of the data flow or the application",
              args: { name: "description" },
            },
            { name: "--resource-configuration", args: { name: "json" } },
            { name: "--configuration-details", args: { name: "json" } },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "application",
      description:
        "The application type contains the audit summary information and the definition of the application",
      subcommands: [
        {
          name: "create",
          description: "Creates an application",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            {
              name: "--key",
              description: "Currently not used on application creation",
              args: { name: "key" },
            },
            optModelVersion,
            {
              name: "--model-type",
              description: "The type of the application",
              args: { suggestions: ["INTEGRATION_APPLICATION"] },
            },
            optDescription,
            optObjectStatus,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optLifecycleState,
            { name: "--source-application-info", args: { name: "json" } },
            optRegistryMetadata,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-patch",
          description: "Creates a patch in an application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optName3,
            {
              name: "--identifier",
              description:
                "Value can only contain upper case letters, underscore and numbers",
              args: { name: "identifier" },
              isRequired: true,
            },
            {
              name: "--patch-type",
              description:
                "The type of the patch applied or being applied on the application",
              args: { suggestions: ["PUBLISH", "REFRESH", "UNPUBLISH"] },
              isRequired: true,
            },
            {
              name: "--object-keys",
              description:
                "The array of object keys to publish into application",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "The object's key",
              args: { name: "key" },
            },
            optModelVersion,
            optDescription,
            optObjectStatus,
            optRegistryMetadata,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Removes an application using the specified identifier",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "delete-patch",
          description: "Removes a patch using the specified identifier",
          options: [
            optWorkspaceId,
            optApplicationKey,
            {
              name: "--patch-key",
              description: "The patch key",
              args: { name: "patch-key" },
              isRequired: true,
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves an application using the specified identifier",
          options: [optWorkspaceId, optApplicationKey, optFromJson],
        },
        {
          name: "get-dependent-object",
          description:
            "Retrieves the details of a dependent object from an application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            {
              name: "--dependent-object-key",
              description: "The dependent object key",
              args: { name: "dependent-object-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-patch",
          description:
            "Retrieves a patch in an application using the specified identifier",
          options: [
            optWorkspaceId,
            optApplicationKey,
            {
              name: "--patch-key",
              description: "The patch key",
              args: { name: "patch-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-published-object",
          description:
            "Retrieves the details of a published object from an application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            {
              name: "--published-object-key",
              description: "The published object key",
              args: { name: "published-object-key" },
              isRequired: true,
            },
            optExpandReferences,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of applications and provides options to filter the list",
          options: [
            optWorkspaceId,
            optName2,
            optNameContains,
            optIdentifier5,
            optFields,
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
          name: "list-dependent-objects",
          description:
            "Retrieves a list of all dependent objects for a specific application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optFields,
            optName2,
            optNameContains,
            optIdentifier5,
            optType,
            {
              name: "--type-in-subtree",
              description: "Used in association with type parameter",
              args: { name: "type-in-subtree" },
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
          name: "list-patch-changes",
          description:
            "Retrieves a list of patches in an application and provides options to filter the list",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optName2,
            {
              name: "--since-patch",
              description: "Specifies the patch key to query from",
              args: { name: "since-patch" },
            },
            {
              name: "--to-patch",
              description: "Specifies the patch key to query to",
              args: { name: "to-patch" },
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
          name: "list-patches",
          description:
            "Retrieves a list of patches in an application and provides options to filter the list",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optName2,
            optIdentifier5,
            optFields,
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
          name: "list-published-objects",
          description:
            "Retrieves a list of all the published objects for a specified application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optFields,
            optName2,
            {
              name: "--name-starts-with",
              description:
                "This parameter can be used to filter objects by the names starting with the given value",
              args: { name: "name-starts-with" },
            },
            optNameContains,
            optIdentifier5,
            optType,
            {
              name: "--type-in-subtree",
              description: "Used in association with type parameter",
              args: { name: "type-in-subtree" },
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
          name: "update",
          description: "Updates an application",
          options: [
            optWorkspaceId,
            optApplicationKey,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify application",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--model-type",
              description: "The object type",
              args: { name: "model-type" },
              isRequired: true,
            },
            optObjectVersion,
            optModelVersion,
            optName,
            optDescription,
            {
              name: "--application-version",
              description: "Version",
              args: { name: "integer" },
            },
            optObjectStatus,
            optIdentifier2,
            optParentRef,
            optMetadata,
            optDisplayName,
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Usage of predefined tag keys",
              args: { name: "json" },
            },
            optLifecycleState,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "function-library",
      description:
        "The FunctionLibrary type contains the audit summary information and the definition of the FunctionLibrary",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a function library in a project or in another function library",
          options: [
            optWorkspaceId,
            optName3,
            optIdentifier,
            optRegistryMetadata2,
            {
              name: "--key",
              description: "Currently not used on FunctionLibrary creation",
              args: { name: "key" },
            },
            optModelVersion2,
            {
              name: "--description",
              description: "A user defined description for the FunctionLibrary",
              args: { name: "description" },
            },
            optCategoryName,
            optObjectStatus,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a Function Library from a project using the specified identifier",
          options: [
            optWorkspaceId,
            optFunctionLibraryKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves a Function Library using the specified identifier",
          options: [
            optWorkspaceId,
            optFunctionLibraryKey,
            optProjection,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of function libraries in a project and provides options to filter the list",
          options: [
            optWorkspaceId,
            optAggregatorKey,
            optFields,
            optName2,
            optIdentifier3,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a specific Function Library",
          options: [
            optWorkspaceId,
            optFunctionLibraryKey,
            optName,
            {
              name: "--description",
              description: "A user defined description for the FunctionLibrary",
              args: { name: "description" },
            },
            optCategoryName,
            optObjectStatus,
            optIdentifier2,
            optModelVersion2,
            optObjectVersion2,
            optRegistryMetadata,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "task-schedule",
      description:
        "A model that holds Schedule and other information required for scheduling a task",
      subcommands: [
        {
          name: "create",
          description: "Endpoint to be used create TaskSchedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optName3,
            optIdentifier,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify taskSchedule",
              args: { name: "key" },
            },
            optModelVersion3,
            optParentRef,
            optDescription,
            optObjectVersion3,
            optObjectStatus,
            { name: "--schedule-ref", args: { name: "json" } },
            optConfigProviderDelegate,
            {
              name: "--is-enabled",
              description: "Whether the task schedule is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--number-of-retries",
              description: "The number of retries",
              args: { name: "integer" },
            },
            {
              name: "--retry-delay",
              description:
                "The retry delay, the unit for measurement is in the property retry delay unit",
              args: { name: "retry-delay" },
            },
            {
              name: "--retry-delay-unit",
              description: "The unit for the retry delay",
              args: { suggestions: ["SECONDS", "MINUTES", "HOURS", "DAYS"] },
            },
            {
              name: "--start-time-millis",
              description: "The start time in milliseconds",
              args: { name: "integer" },
            },
            {
              name: "--end-time-millis",
              description: "The end time in milliseconds",
              args: { name: "integer" },
            },
            optIsConcurrentAllowed,
            {
              name: "--is-backfill-enabled",
              description: "Whether the backfill is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--auth-mode",
              description: "The authorization mode for the task",
              args: {
                suggestions: ["OBO", "RESOURCE_PRINCIPAL", "USER_CERTIFICATE"],
              },
            },
            {
              name: "--expected-duration",
              description: "The expected duration of the task execution",
              args: { name: "expected-duration" },
            },
            {
              name: "--expected-duration-unit",
              description: "The expected duration unit of the task execution",
              args: { suggestions: ["SECONDS", "MINUTES", "HOURS", "DAYS"] },
            },
            optRegistryMetadata,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Endpoint to delete TaskSchedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optTaskScheduleKey,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Endpoint used to get taskSchedule by its key",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optTaskScheduleKey,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "This endpoint can be used to get the list of all the TaskSchedule objects",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optKey5,
            optName2,
            optIdentifier3,
            optType,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            {
              name: "--is-enabled",
              description:
                "This filter parameter can be used to filter task schedule by its state",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Endpoint used to update the TaskSchedule",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optTaskScheduleKey,
            {
              name: "--key",
              description:
                "Generated key that can be used in API calls to identify taskSchedule",
              args: { name: "key" },
              isRequired: true,
            },
            optObjectVersion4,
            optModelVersion3,
            optModelType,
            optParentRef,
            optName,
            optDescription,
            optObjectStatus,
            optIdentifier2,
            { name: "--schedule-ref", args: { name: "json" } },
            optConfigProviderDelegate,
            {
              name: "--is-enabled",
              description: "Enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--number-of-retries",
              description: "The number of retries",
              args: { name: "integer" },
            },
            {
              name: "--retry-delay",
              description:
                "The retry delay, the unit for measurement is in the property retry delay unit",
              args: { name: "retry-delay" },
            },
            {
              name: "--retry-delay-unit",
              description: "The unit for the retry delay",
              args: { suggestions: ["SECONDS", "MINUTES", "HOURS", "DAYS"] },
            },
            {
              name: "--start-time-millis",
              description: "The start time in milliseconds",
              args: { name: "integer" },
            },
            {
              name: "--end-time-millis",
              description: "The end time in milliseconds",
              args: { name: "integer" },
            },
            optIsConcurrentAllowed,
            {
              name: "--is-backfill-enabled",
              description: "Whether the backfill is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--auth-mode",
              description: "The authorization mode for the task",
              args: {
                suggestions: ["OBO", "RESOURCE_PRINCIPAL", "USER_CERTIFICATE"],
              },
            },
            {
              name: "--expected-duration",
              description: "The expected duration of the task",
              args: { name: "expected-duration" },
            },
            {
              name: "--expected-duration-unit",
              description: "The expected duration of the task",
              args: { suggestions: ["SECONDS", "MINUTES", "HOURS", "DAYS"] },
            },
            optRegistryMetadata,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "runtime-pipeline",
      description:
        "Runtime pipeline model which holds the runtime metadata of the task executed",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves a runtime pipeline using the specified identifier",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optRuntimePipelineKey,
            optExpandReferences,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "runtime-pipelines",
      description: "List of runtimePipeline summaries",
      subcommands: [
        {
          name: "list-runtime-pipelines",
          description:
            "This endpoint can be used to list runtime pipelines with filtering options",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optKey5,
            {
              name: "--aggregator-key",
              description: "Unique key of the aggregator",
              args: { name: "aggregator-key" },
            },
            optFields,
            optName2,
            optIdentifier3,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            {
              name: "--aggregator-type",
              description: "Unique type of the aggregator",
              args: { name: "aggregator-type" },
              isRepeatable: true,
            },
            optFilter,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "runtime-operators",
      description: "List of runtimeOperator summaries",
      subcommands: [
        {
          name: "list-runtime-operators",
          description:
            "This endpoint can be used to list runtime operators with filtering options",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optRuntimePipelineKey,
            optKey5,
            optFields,
            optName2,
            optIdentifier3,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            {
              name: "--aggregator-type",
              description: "Unique type of the aggregator",
              args: { name: "aggregator-type" },
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
      name: "task-run-lineage",
      description: "List of lineage flows",
      subcommands: [
        {
          name: "list-task-run-lineages",
          description:
            "This endpoint can be used to list Task Run Lineages within a given time window",
          options: [
            optWorkspaceId,
            optApplicationKey,
            optFields,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optFilter,
            optTimeUpatedLessThan,
            optAll,
            optPageSize,
            {
              name: "--time-upated-lte",
              description:
                "This parameter allows users to get objects which were updated before and at a certain time",
              args: { name: "datetime" },
            },
            {
              name: "--time-updated-gt",
              description:
                "This parameter allows users to get objects which were updated after a certain time",
              args: { name: "datetime" },
            },
            {
              name: "--time-updated-gte",
              description:
                "This parameter allows users to get objects which were updated after and at a certain time",
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
        {
          name: "list_taskrun_lineages",
          description:
            "This endpoint can be used to list Task Run Lineages within a given time window",
          options: [
            optWorkspaceId,
            optDisApplicationId,
            optFields,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optFilter,
            {
              name: "--time-updated-greater-than",
              description:
                "This parameter allows users to get objects which were updated after a certain time",
              args: { name: "datetime" },
            },
            {
              name: "--time-updated-greater-than-or-equal-to",
              description:
                "This parameter allows users to get objects which were updated after and at a certain time",
              args: { name: "datetime" },
            },
            optTimeUpatedLessThan,
            {
              name: "--time-upated-less-than-or-equal-to",
              description:
                "This parameter allows users to get objects which were updated before and at a certain time",
              args: { name: "datetime" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-dis-application-task-run-lineages",
          description:
            "This endpoint can be used to list Task Run Lineages within a given time window",
          options: [
            optWorkspaceId,
            optDisApplicationId,
            optFields,
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            optFilter,
            optTimeUpatedLessThan,
            optAll,
            optPageSize,
            {
              name: "--time-upated-lte",
              description:
                "This parameter allows users to get objects which were updated before and at a certain time",
              args: { name: "datetime" },
            },
            {
              name: "--time-updated-gt",
              description:
                "This parameter allows users to get objects which were updated after a certain time",
              args: { name: "datetime" },
            },
            {
              name: "--time-updated-gte",
              description:
                "This parameter allows users to get objects which were updated after and at a certain time",
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
