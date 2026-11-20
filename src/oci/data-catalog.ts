// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optCatalogId: Fig.Option = {
  name: "--catalog-id",
  description: "Unique catalog identifier",
  args: { name: "catalog-id" },
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
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optDataAssetKey: Fig.Option = {
  name: "--data-asset-key",
  description: "Unique data asset key",
  args: { name: "data-asset-key" },
  isRequired: true,
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "INACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
      "MOVING",
    ],
  },
  isRepeatable: true,
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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
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
  description: "The field to sort by",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources that match the specified lifecycle state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "INACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
      "MOVING",
    ],
  },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optCreatedById: Fig.Option = {
  name: "--created-by-id",
  description: "OCID of the user who created the resource",
  args: { name: "created-by-id" },
};
const optEntityKey: Fig.Option = {
  name: "--entity-key",
  description: "Unique entity key",
  args: { name: "entity-key" },
  isRequired: true,
};
const optTimeCreated: Fig.Option = {
  name: "--time-created",
  description: "Time that the resource was created",
  args: { name: "datetime" },
};
const optDisplayNameContains: Fig.Option = {
  name: "--display-name-contains",
  description:
    "A filter to return only resources that match display name pattern given",
  args: { name: "display-name-contains" },
};
const optGlossaryKey: Fig.Option = {
  name: "--glossary-key",
  description: "Unique glossary key",
  args: { name: "glossary-key" },
  isRequired: true,
};
const optTimeUpdated: Fig.Option = {
  name: "--time-updated",
  description: "Time that the resource was updated",
  args: { name: "datetime" },
};
const optUpdatedById: Fig.Option = {
  name: "--updated-by-id",
  description: "OCID of the user who updated the resource",
  args: { name: "updated-by-id" },
};
const optCustomPropertyMembers: Fig.Option = {
  name: "--custom-property-members",
  description:
    "The list of customized properties along with the values for this object",
  args: { name: "json" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly display name",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly display name",
  args: { name: "display-name" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optWaitForState2: Fig.Option = {
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
const optIsLockOverride: Fig.Option = {
  name: "--is-lock-override",
  description: "Whether to override locks (if any exist)",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optJobKey: Fig.Option = {
  name: "--job-key",
  description: "Unique job key",
  args: { name: "job-key" },
  isRequired: true,
};
const optNamespaceId: Fig.Option = {
  name: "--namespace-id",
  description: "Unique namespace identifier",
  args: { name: "namespace-id" },
  isRequired: true,
};
const optTagKey: Fig.Option = {
  name: "--tag-key",
  description: "Unique tag key",
  args: { name: "tag-key" },
  isRequired: true,
};
const optTermKey: Fig.Option = {
  name: "--term-key",
  description: "Unique glossary term key",
  args: { name: "term-key" },
  isRequired: true,
};
const optAttributeKey: Fig.Option = {
  name: "--attribute-key",
  description: "Unique attribute key",
  args: { name: "attribute-key" },
  isRequired: true,
};
const optFolderKey: Fig.Option = {
  name: "--folder-key",
  description: "Unique folder key",
  args: { name: "folder-key" },
  isRequired: true,
};
const optCatalogPrivateEndpointId: Fig.Option = {
  name: "--catalog-private-endpoint-id",
  description: "Unique private reverse connection identifier",
  args: { name: "catalog-private-endpoint-id" },
  isRequired: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Usage of predefined tag keys",
  args: { name: "json" },
};
const optExternalKey: Fig.Option = {
  name: "--external-key",
  description:
    "Unique external identifier of this resource in the external source system",
  args: { name: "external-key" },
};
const optMessage: Fig.Option = {
  name: "--message",
  description: "A message added by the creator of the lock",
  args: { name: "message" },
};
const optMetastoreId: Fig.Option = {
  name: "--metastore-id",
  description: "The metastore's OCID",
  args: { name: "metastore-id" },
  isRequired: true,
};
const optName: Fig.Option = {
  name: "--name",
  description: "Immutable resource name",
  args: { name: "name" },
};
const optRelatedResourceId: Fig.Option = {
  name: "--related-resource-id",
  description: "The id of the resource that is locking this resource",
  args: { name: "related-resource-id" },
};
const optTimeCreated2: Fig.Option = {
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
const optConnectionKey: Fig.Option = {
  name: "--connection-key",
  description: "Unique connection key",
  args: { name: "connection-key" },
  isRequired: true,
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type, or scope",
  args: { name: "json" },
};
const optJobExecutionKey: Fig.Option = {
  name: "--job-execution-key",
  description: "The key of the job execution",
  args: { name: "job-execution-key" },
  isRequired: true,
};
const optPatternKey: Fig.Option = {
  name: "--pattern-key",
  description: "Unique pattern key",
  args: { name: "pattern-key" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment where you want to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optConnectionDetail: Fig.Option = {
  name: "--connection-detail",
  args: { name: "json" },
};
const optIsEventEnabled: Fig.Option = {
  name: "--is-event-enabled",
  description:
    "If an OCI Event will be emitted when the custom property is modified",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optName2: Fig.Option = {
  name: "--name",
  description: "The name of the tag in the case of a free form tag",
  args: { name: "name" },
};
const optTermKey2: Fig.Option = {
  name: "--term-key",
  description:
    "Unique key of the related term or null in the case of a free form tag",
  args: { name: "term-key" },
};
const optTermKey3: Fig.Option = {
  name: "--term-key",
  description: "Unique key of the related term",
  args: { name: "term-key" },
};
const optTermPath: Fig.Option = {
  name: "--term-path",
  description: "Path of the related term",
  args: { name: "term-path" },
};
const optTimeExternal: Fig.Option = {
  name: "--time-external",
  description: "Last modified timestamp of this object in the external system",
  args: { name: "datetime" },
};
const optBusinessName: Fig.Option = {
  name: "--business-name",
  description:
    "A filter to return only resources that match the entire business name given",
  args: { name: "business-name" },
};
const optCheckFailureLimit: Fig.Option = {
  name: "--check-failure-limit",
  description:
    "The maximum number of UNMATCHED files, in checkFilePathList, above which the check fails",
  args: { name: "integer" },
};
const optCheckFilePathList: Fig.Option = {
  name: "--check-file-path-list",
  description:
    "List of file paths against which the pattern can be tried, as a check",
  args: { name: "json" },
};
const optConnectionKey2: Fig.Option = {
  name: "--connection-key",
  description: "Unique connection key",
  args: { name: "connection-key" },
};
const optCustomPropertyKey: Fig.Option = {
  name: "--custom-property-key",
  description: "Unique Custom Property key",
  args: { name: "custom-property-key" },
  isRequired: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Detailed description of the data asset",
  args: { name: "description" },
};
const optDisplayOrBusinessNameContains: Fig.Option = {
  name: "--display-or-business-name-contains",
  description:
    "A filter to return only resources that match display name or business name pattern given",
  args: { name: "display-or-business-name-contains" },
};
const optExpression: Fig.Option = {
  name: "--expression",
  description:
    "Input string which drives the selection process, allowing for fine-grained control using qualifiers",
  args: { name: "expression" },
};
const optFilePathPrefix: Fig.Option = {
  name: "--file-path-prefix",
  description: "Input string which drives the selection process",
  args: { name: "file-path-prefix" },
};
const optFolderKey2: Fig.Option = {
  name: "--folder-key",
  description: "Key of the associated folder",
  args: { name: "folder-key" },
};
const optIsDefault: Fig.Option = {
  name: "--is-default",
  description: "Indicates whether this connection is the default connection",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsIncludeObjectRelationships: Fig.Option = {
  name: "--is-include-object-relationships",
  description:
    "Indicates whether the list of objects and their relationships to this object will be provided in the response",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optJobDefinitionKey: Fig.Option = {
  name: "--job-definition-key",
  description: "Unique job definition key",
  args: { name: "job-definition-key" },
  isRequired: true,
};
const optJobType: Fig.Option = {
  name: "--job-type",
  description: "Job type",
  args: {
    suggestions: [
      "HARVEST",
      "PROFILING",
      "SAMPLING",
      "PREVIEW",
      "IMPORT",
      "EXPORT",
      "IMPORT_GLOSSARY",
      "EXPORT_GLOSSARY",
      "INTERNAL",
      "PURGE",
      "IMMEDIATE",
      "SCHEDULED",
      "IMMEDIATE_EXECUTION",
      "SCHEDULED_EXECUTION",
      "SCHEDULED_EXECUTION_INSTANCE",
      "ASYNC_DELETE",
      "IMPORT_DATA_ASSET",
      "CREATE_SCAN_PROXY",
      "ASYNC_EXPORT_GLOSSARY",
      "ASYNC_EXPORT_DATA_ASSET",
    ],
  },
};
const optLength: Fig.Option = {
  name: "--length",
  description: "Max allowed length of the attribute value",
  args: { name: "integer" },
};
const optPath: Fig.Option = {
  name: "--path",
  description: "Full path of the resource for resources that support paths",
  args: { name: "path" },
};
const optPosition: Fig.Option = {
  name: "--position",
  description: "Position of the attribute in the record definition",
  args: { name: "integer" },
};
const optPrecision: Fig.Option = {
  name: "--precision",
  description:
    "Precision of the attribute value usually applies to float data type",
  args: { name: "integer" },
};
const optScale: Fig.Option = {
  name: "--scale",
  description:
    "Scale of the attribute value usually applies to float data type",
  args: { name: "integer" },
};
const optScheduleCronExpression: Fig.Option = {
  name: "--schedule-cron-expression",
  description: "Interval on which the job will be run",
  args: { name: "schedule-cron-expression" },
};
const optTermRelationshipKey: Fig.Option = {
  name: "--term-relationship-key",
  description: "Unique glossary term relationship key",
  args: { name: "term-relationship-key" },
  isRequired: true,
};
const optTimeScheduleBegin: Fig.Option = {
  name: "--time-schedule-begin",
  description: "Date that the schedule should be operational",
  args: { name: "datetime" },
};
const optTimeScheduleEnd: Fig.Option = {
  name: "--time-schedule-end",
  description: "Date that the schedule should end from being operational",
  args: { name: "datetime" },
};
const optTypeKey: Fig.Option = {
  name: "--type-key",
  description: "The key of the object type",
  args: { name: "type-key" },
};
const optTypeKey2: Fig.Option = {
  name: "--type-key",
  description: "Unique type key",
  args: { name: "type-key" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "data-catalog",
  description: "Data Catalog",
  subcommands: [
    {
      name: "catalog",
      description:
        "A data catalog enables you to collect, organize, find, access, understand, enrich, and activate technical",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a Catalog resource",
          options: [
            optCatalogId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "attach",
          description:
            "Attaches a private reverse connection endpoint resource to a data catalog resource",
          options: [
            {
              name: "--catalog-private-endpoint-id",
              description:
                "The identifier of the private endpoint to be attached to the catalog resource",
              args: { name: "catalog-private-endpoint-id" },
              isRequired: true,
            },
            optCatalogId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a resource into a different compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The identifier of the compartment where the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optCatalogId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new data catalog instance that includes a console and an API URL for managing metadata operations",
          options: [
            {
              name: "--compartment-id",
              description: "Compartment identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Data catalog identifier",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a data catalog resource by identifier",
          options: [
            optCatalogId,
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
          name: "detach",
          description:
            "Detaches a private reverse connection endpoint resource to a data catalog resource",
          options: [
            {
              name: "--catalog-private-endpoint-id",
              description:
                "The identifier of the private endpoint to be detached from catalog resource",
              args: { name: "catalog-private-endpoint-id" },
              isRequired: true,
            },
            optCatalogId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a data catalog by identifier",
          options: [optCatalogId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of all the data catalogs in the specified compartment",
          options: [
            optCompartmentId,
            optDisplayName,
            optLimit,
            optPage,
            optLifecycleState,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "object-stats",
          description: "Returns stats on objects by type in the repository",
          options: [
            optCatalogId,
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "process-recommendation",
          description: "Act on a recommendation",
          options: [
            optCatalogId,
            {
              name: "--recommendation-key",
              description: "Unique identifier of the recommendation",
              args: { name: "recommendation-key" },
              isRequired: true,
            },
            {
              name: "--recommendation-status",
              description: "The status of a recommendation",
              args: { suggestions: ["ACCEPTED", "REJECTED", "INFERRED"] },
              isRequired: true,
            },
            {
              name: "--properties",
              description:
                "A map of maps that contains additional properties which are specific to the associated objects",
              args: { name: "json" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "recommendations",
          description:
            "Returns a list of recommendations for the given object and recommendation type",
          options: [
            optCatalogId,
            {
              name: "--recommendation-type",
              description:
                "A filter used to return only recommendations of the specified type",
              args: { suggestions: ["LINK_GLOSSARY_TERM"] },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--source-object-key",
              description:
                "A filter used to provide the unique identifier of the source object",
              args: { name: "source-object-key" },
              isRequired: true,
            },
            {
              name: "--source-object-type",
              description:
                "A filter used to provide the type of the source object",
              args: {
                suggestions: ["DATA_ENTITY", "ATTRIBUTE", "TERM", "CATEGORY"],
              },
              isRequired: true,
            },
            {
              name: "--recommendation-status",
              description:
                "A filter used to return only recommendations having the requested status",
              args: { suggestions: ["ACCEPTED", "REJECTED", "INFERRED"] },
            },
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes a lock from a Catalog resource",
          options: [
            optCatalogId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the data catalog",
          options: [
            optCatalogId,
            {
              name: "--display-name",
              description: "Data catalog identifier",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
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
          name: "users",
          description: "Returns active users in the system",
          options: [
            optCatalogId,
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "term-relationship",
      description: "Full term relationship definition",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new term relationship for this term within a glossary",
          options: [
            optCatalogId,
            optGlossaryKey,
            optTermKey,
            optDisplayName2,
            {
              name: "--related-term-key",
              description: "Unique id of the related term",
              args: { name: "related-term-key" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "Detailed description of the term relationship usually defined at the time of creation",
              args: { name: "description" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specific glossary term relationship",
          options: [
            optCatalogId,
            optGlossaryKey,
            optTermKey,
            optTermRelationshipKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a specific glossary term relationship by key",
          options: [
            optCatalogId,
            optGlossaryKey,
            optTermKey,
            optTermRelationshipKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a term relationship response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "relatedTermKey",
                  "relatedTermDisplayName",
                  "parentTermKey",
                  "parentTermDisplayName",
                  "lifecycleState",
                  "timeCreated",
                  "uri",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of all term relationships within a glossary",
          options: [
            optCatalogId,
            optGlossaryKey,
            optTermKey,
            optDisplayName,
            optDisplayNameContains,
            optLifecycleState,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a term relationship summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "relatedTermKey",
                  "relatedTermDisplayName",
                  "parentTermKey",
                  "parentTermDisplayName",
                  "lifecycleState",
                  "timeCreated",
                  "uri",
                ],
              },
              isRepeatable: true,
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
        {
          name: "update",
          description: "Updates a specific glossary term relationship",
          options: [
            optCatalogId,
            optGlossaryKey,
            optTermKey,
            optTermRelationshipKey,
            optDisplayName3,
            {
              name: "--description",
              description:
                "Detailed description of the term relationship usually defined at the time of creation",
              args: { name: "description" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "pattern",
      description:
        "A pattern is a data selector or filter which can provide a singular",
      subcommands: [
        {
          name: "create",
          description: "Create a new pattern",
          options: [
            optCatalogId,
            optDisplayName2,
            {
              name: "--description",
              description: "Detailed description of the Pattern",
              args: { name: "description" },
            },
            optExpression,
            optFilePathPrefix,
            optCheckFilePathList,
            {
              name: "--is-enable-check-failure-limit",
              description:
                "Indicates whether the pattern check, against the checkFilePathList",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optCheckFailureLimit,
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the pattern type",
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
          description: "Deletes a specific pattern identified by it's key",
          options: [
            optCatalogId,
            optPatternKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets a specific pattern for the given key within a data catalog",
          options: [
            optCatalogId,
            optPatternKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a pattern response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "catalogId",
                  "expression",
                  "lifecycleState",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "properties",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-derived-logical-entities",
          description: "List logical entities derived from this pattern",
          options: [
            optCatalogId,
            optPatternKey,
            optDisplayNameContains,
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optIfMatch,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of patterns within a data catalog",
          options: [
            optCatalogId,
            optDisplayName,
            optDisplayNameContains,
            optLifecycleState,
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a pattern summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "catalogId",
                  "expression",
                  "lifecycleState",
                  "timeCreated",
                ],
              },
              isRepeatable: true,
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
        {
          name: "update",
          description: "Updates a specific pattern identified by the given key",
          options: [
            optCatalogId,
            optPatternKey,
            optDisplayName3,
            {
              name: "--description",
              description: "Detailed description of the Pattern",
              args: { name: "description" },
            },
            optExpression,
            optFilePathPrefix,
            optCheckFilePathList,
            {
              name: "--is-enable-check-failure-limit",
              description:
                "Indicates whether the pattern check, against the checkFilePathList",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optCheckFailureLimit,
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the pattern type",
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
        {
          name: "validate",
          description:
            "Validate pattern by deriving file groups representing logical entities using the expression",
          options: [
            optCatalogId,
            optPatternKey,
            optExpression,
            optFilePathPrefix,
            optCheckFilePathList,
            optCheckFailureLimit,
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
          name: "get",
          description:
            "Gets the status of the work request with the given OCID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
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
      name: "job-metric",
      description:
        "A set of metrics are collected periodically to assess the state and performance characteristics of",
      subcommands: [
        {
          name: "get",
          description: "Gets a specific job metric by key",
          options: [
            optCatalogId,
            optJobKey,
            optJobExecutionKey,
            {
              name: "--job-metrics-key",
              description: "Unique job metrics key",
              args: { name: "job-metrics-key" },
              isRequired: true,
            },
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a job metric response",
              args: {
                suggestions: [
                  "key",
                  "description",
                  "displayName",
                  "timeInserted",
                  "category",
                  "subCategory",
                  "unit",
                  "value",
                  "batchKey",
                  "jobExecutionKey",
                  "createdById",
                  "updatedById",
                  "timeUpdated",
                  "timeCreated",
                  "uri",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of job metrics",
          options: [
            optCatalogId,
            optJobKey,
            optJobExecutionKey,
            optDisplayName,
            optDisplayNameContains,
            {
              name: "--category",
              description: "Category of this metric",
              args: { name: "category" },
            },
            {
              name: "--sub-category",
              description: "Sub category of this metric under the category",
              args: { name: "sub-category" },
            },
            {
              name: "--unit",
              description: "Unit of this metric",
              args: { name: "unit" },
            },
            {
              name: "--value",
              description: "Value of this metric",
              args: { name: "value" },
            },
            {
              name: "--batch-key",
              description: "Batch key for grouping, may be null",
              args: { name: "batch-key" },
            },
            optTimeCreated,
            optTimeUpdated,
            {
              name: "--time-inserted",
              description:
                "The time the metric was logged or captured in the system where the job executed",
              args: { name: "datetime" },
            },
            optCreatedById,
            optUpdatedById,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a job metric summary response",
              args: {
                suggestions: [
                  "key",
                  "description",
                  "displayName",
                  "timeInserted",
                  "category",
                  "subCategory",
                  "unit",
                  "value",
                  "batchKey",
                  "jobExecutionKey",
                  "timeCreated",
                  "uri",
                ],
              },
              isRepeatable: true,
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
      name: "type",
      description: "Full data catalog type definition",
      subcommands: [
        {
          name: "get",
          description: "Gets a specific type by key within a data catalog",
          options: [
            optCatalogId,
            optTypeKey2,
            {
              name: "--fields",
              description: "Specifies the fields to return in a type response",
              args: {
                suggestions: [
                  "key",
                  "description",
                  "name",
                  "catalogId",
                  "properties",
                  "isInternal",
                  "isTag",
                  "isApproved",
                  "typeCategory",
                  "externalTypeName",
                  "lifecycleState",
                  "uri",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of all types within a data catalog",
          options: [
            optCatalogId,
            optName,
            optLifecycleState,
            {
              name: "--is-internal",
              description:
                "Indicates whether the type is internal, making it unavailable for use by metadata elements",
              args: { name: "is-internal" },
            },
            {
              name: "--is-tag",
              description:
                "Indicates whether the type can be used for tagging metadata elements",
              args: { name: "is-tag" },
            },
            {
              name: "--is-approved",
              description:
                "Indicates whether the type is approved for use as a classifying object",
              args: { name: "is-approved" },
            },
            {
              name: "--external-type-name",
              description: "Data type as defined in an external system",
              args: { name: "external-type-name" },
            },
            {
              name: "--type-category",
              description: "Indicates the category of this type",
              args: { name: "type-category" },
            },
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a type summary response",
              args: {
                suggestions: [
                  "key",
                  "description",
                  "name",
                  "catalogId",
                  "lifecycleState",
                  "typeCategory",
                  "uri",
                ],
              },
              isRepeatable: true,
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
        {
          name: "associate-custom-properties",
          description: "Associate the custom property for the given type",
          options: [
            optCatalogId,
            optTypeKey2,
            {
              name: "--custom-property-ids",
              description: "Array of custom property Ids",
              args: { name: "json" },
            },
            optIsEventEnabled,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disassociate-custom-properties",
          description: "Remove the custom property for the given type",
          options: [
            optCatalogId,
            optTypeKey2,
            {
              name: "--custom-property-ids",
              description: "Array of custom property Ids",
              args: { name: "json" },
            },
            optIsEventEnabled,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "rule-summary",
      description: "A list of rule resources",
      subcommands: [
        {
          name: "list-rules",
          description: "Returns a list of all rules of a data entity",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optDisplayName,
            optDisplayNameContains,
            {
              name: "--rule-type",
              description:
                "Rule type used to filter the response to a list rules call",
              args: { suggestions: ["PRIMARYKEY", "FOREIGNKEY", "UNIQUEKEY"] },
            },
            optLifecycleState,
            {
              name: "--origin-type",
              description:
                "Rule origin type used to filter the response to a list rules call",
              args: { suggestions: ["SOURCE", "USER", "PROFILING"] },
            },
            optExternalKey,
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a rule summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "ruleType",
                  "externalKey",
                  "referencedFolderKey",
                  "referencedFolderName",
                  "referencedEntityKey",
                  "referencedEntityName",
                  "referencedRuleKey",
                  "referencedRuleName",
                  "originType",
                  "lifecycleState",
                  "timeCreated",
                  "uri",
                ],
              },
              isRepeatable: true,
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
      name: "custom-property",
      description: "Custom Property Definition",
      subcommands: [
        {
          name: "create",
          description: "Create a new Custom Property",
          options: [
            optCatalogId,
            optNamespaceId,
            optDisplayName2,
            {
              name: "--description",
              description: "Detailed description of the custom property",
              args: { name: "description" },
            },
            {
              name: "--data-type",
              description: "The data type of the custom property",
              args: {
                suggestions: ["TEXT", "RICH_TEXT", "BOOLEAN", "NUMBER", "DATE"],
              },
            },
            {
              name: "--is-sortable",
              description: "If this field allows to sort from UI",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-filterable",
              description:
                "If this field allows to filter or create facets from UI",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-multi-valued",
              description: "If this field allows multiple values to be set",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-hidden",
              description: "If this field is a hidden field",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-editable",
              description: "If this field is a editable field",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-shown-in-list",
              description:
                "If this field is displayed in a list view of applicable objects",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-hidden-in-search",
              description: "If this field is allowed to pop in search results",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsEventEnabled,
            {
              name: "--allowed-values",
              description: "Allowed values for the custom property if any",
              args: { name: "json" },
            },
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the data asset type",
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
          description:
            "Deletes a specific custom property identified by it's key",
          options: [
            optCatalogId,
            optNamespaceId,
            optCustomPropertyKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets a specific custom property for the given key within a data catalog",
          options: [
            optCatalogId,
            optNamespaceId,
            optCustomPropertyKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a custom property response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "dataType",
                  "namespaceName",
                  "lifecycleState",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "properties",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of custom properties within a data catalog",
          options: [
            optCatalogId,
            optNamespaceId,
            optDisplayName,
            optDisplayNameContains,
            {
              name: "--data-types",
              description:
                "Return the custom properties which has specified data types",
              args: {
                suggestions: ["TEXT", "RICH_TEXT", "BOOLEAN", "NUMBER", "DATE"],
              },
              isRepeatable: true,
            },
            {
              name: "--type-name",
              description:
                "A filter to return only resources that match the entire type name given",
              args: {
                suggestions: [
                  "DATA_ASSET",
                  "AUTONOMOUS_DATA_WAREHOUSE",
                  "HIVE",
                  "KAFKA",
                  "MYSQL",
                  "ORACLE_OBJECT_STORAGE",
                  "AUTONOMOUS_TRANSACTION_PROCESSING",
                  "ORACLE",
                  "POSTGRESQL",
                  "MICROSOFT_AZURE_SQL_DATABASE",
                  "MICROSOFT_SQL_SERVER",
                  "IBM_DB2",
                  "DATA_ENTITY",
                  "LOGICAL_ENTITY",
                  "TABLE",
                  "VIEW",
                  "ATTRIBUTE",
                  "FOLDER",
                  "ORACLE_ANALYTICS_SUBJECT_AREA_COLUMN",
                  "ORACLE_ANALYTICS_LOGICAL_COLUMN",
                  "ORACLE_ANALYTICS_PHYSICAL_COLUMN",
                  "ORACLE_ANALYTICS_ANALYSIS_COLUMN",
                  "ORACLE_ANALYTICS_SERVER",
                  "ORACLE_ANALYTICS_CLOUD",
                  "ORACLE_ANALYTICS_SUBJECT_AREA",
                  "ORACLE_ANALYTICS_DASHBOARD",
                  "ORACLE_ANALYTICS_BUSINESS_MODEL",
                  "ORACLE_ANALYTICS_PHYSICAL_DATABASE",
                  "ORACLE_ANALYTICS_PHYSICAL_SCHEMA",
                  "ORACLE_ANALYTICS_PRESENTATION_TABLE",
                  "ORACLE_ANALYTICS_LOGICAL_TABLE",
                  "ORACLE_ANALYTICS_PHYSICAL_TABLE",
                  "ORACLE_ANALYTICS_ANALYSIS",
                  "DATABASE_SCHEMA",
                  "TOPIC",
                  "CONNECTION",
                  "GLOSSARY",
                  "TERM",
                  "CATEGORY",
                  "FILE",
                  "BUCKET",
                  "MESSAGE",
                  "UNRECOGNIZED_FILE",
                ],
              },
              isRepeatable: true,
            },
            optLifecycleState,
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a custom property summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "dataType",
                  "namespaceName",
                  "lifecycleState",
                  "timeCreated",
                ],
              },
              isRepeatable: true,
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["DISPLAYNAME", "USAGECOUNT"] },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates a specific custom property identified by the given key",
          options: [
            optCatalogId,
            optNamespaceId,
            optCustomPropertyKey,
            optDisplayName3,
            optDescription,
            {
              name: "--is-sortable",
              description: "If this field allows to sort from UI",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-filterable",
              description:
                "If this field allows to filter or create facets from UI",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-multi-valued",
              description: "If this field allows multiple values to be set",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-hidden",
              description: "If this field is a hidden field",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-editable",
              description: "If this field is a editable field",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-shown-in-list",
              description:
                "If this field is displayed in a list view of applicable objects",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-hidden-in-search",
              description: "If this field is allowed to pop in search results",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsEventEnabled,
            {
              name: "--allowed-values",
              description: "Allowed values for the custom property if any",
              args: { name: "json" },
            },
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the asset type",
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
      name: "work-request-log",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["MESSAGE", "TIMESTAMP"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "attribute-tag",
      description: "Represents an association of an entity attribute to a term",
      subcommands: [
        {
          name: "create",
          description: "Creates a new entity attribute tag",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optAttributeKey,
            optName2,
            optTermKey2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specific entity attribute tag",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optAttributeKey,
            optTagKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a specific entity attribute tag by key",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optAttributeKey,
            optTagKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in an entity attribute tag response",
              args: {
                suggestions: [
                  "key",
                  "name",
                  "termKey",
                  "termPath",
                  "termDescription",
                  "lifecycleState",
                  "timeCreated",
                  "createdById",
                  "uri",
                  "attributeKey",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of all tags for an entity attribute",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optAttributeKey,
            optName,
            optLifecycleState,
            optTermKey3,
            optTermPath,
            optTimeCreated,
            optCreatedById,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in an entity attribute tag summary response",
              args: {
                suggestions: [
                  "key",
                  "name",
                  "termKey",
                  "termPath",
                  "termDescription",
                  "lifecycleState",
                  "timeCreated",
                  "uri",
                  "glossaryKey",
                  "attributeKey",
                ],
              },
              isRepeatable: true,
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
      name: "job-log",
      description: "Job log details",
      subcommands: [
        {
          name: "get",
          description: "Gets a specific job log by key",
          options: [
            optCatalogId,
            optJobKey,
            optJobExecutionKey,
            {
              name: "--job-log-key",
              description: "Unique job log key",
              args: { name: "job-log-key" },
              isRequired: true,
            },
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a job log response",
              args: {
                suggestions: [
                  "key",
                  "jobExecutionKey",
                  "createdById",
                  "updatedById",
                  "timeUpdated",
                  "timeCreated",
                  "severity",
                  "logMessage",
                  "uri",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of job logs",
          options: [
            optCatalogId,
            optJobKey,
            optJobExecutionKey,
            optLifecycleState,
            {
              name: "--severity",
              description: "Severity level for this Log",
              args: { name: "severity" },
            },
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a job log summary response",
              args: {
                suggestions: [
                  "key",
                  "jobExecutionKey",
                  "severity",
                  "timeCreated",
                  "logMessage",
                  "uri",
                ],
              },
              isRepeatable: true,
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
      name: "data-asset",
      description: "Data asset representation",
      subcommands: [
        {
          name: "asynchronous-export",
          description:
            "Export technical objects from a Data Asset in Excel format",
          options: [
            optCatalogId,
            optDataAssetKey,
            {
              name: "--export-type",
              description: "Type of export",
              args: { suggestions: ["CUSTOM_PROPERTY_VALUES", "ALL"] },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--export-scope",
              description:
                "Array of objects and their child types to be selected for export",
              args: { name: "json" },
            },
            { name: "--object-storage-target", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new data asset",
          options: [
            optCatalogId,
            optDisplayName2,
            {
              name: "--type-key",
              description: "The key of the data asset type",
              args: { name: "type-key" },
              isRequired: true,
            },
            optDescription,
            optCustomPropertyMembers,
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the data asset type",
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
          description: "Deletes a specific data asset identified by it's key",
          options: [
            optCatalogId,
            optDataAssetKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets a specific data asset for the given key within a data catalog",
          options: [
            optCatalogId,
            optDataAssetKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a data asset response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "catalogId",
                  "externalKey",
                  "typeKey",
                  "lifecycleState",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "uri",
                  "properties",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "import-connection",
          description: "Import new connection for this data asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            {
              name: "--connection-payload",
              description: "The information used to import the connection",
              args: { name: "connection-payload" },
              isRequired: true,
            },
            optConnectionDetail,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "import",
          description: "Import technical objects to a Data Asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            {
              name: "--import-file-contents",
              description: "The file contents to be imported",
              args: { name: "import-file-contents" },
              isRequired: true,
            },
            {
              name: "--import-type",
              description: "Type of import",
              args: { suggestions: ["CUSTOM_PROPERTY_VALUES", "ALL"] },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--is-missing-value-ignored",
              description:
                "Specify whether to ignore the missing values in the import file",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "import-lineage",
          description: "Imports lineage metadata",
          options: [
            optCatalogId,
            optDataAssetKey,
            {
              name: "--lineage-payload",
              description: "The payload used to import lineage",
              args: { name: "lineage-payload" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "parse-connection",
          description:
            "Parse data asset references through connections from this data asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            optConnectionDetail,
            {
              name: "--connection-payload",
              description:
                "The information used to parse the connection from the wallet file payload",
              args: { name: "connection-payload" },
            },
            {
              name: "--wallet-secret-id",
              description:
                "OCID of the OCI Vault secret holding the Oracle wallet to parse",
              args: { name: "wallet-secret-id" },
            },
            {
              name: "--wallet-secret-name",
              description:
                "Name of the OCI Vault secret holding the Oracle wallet to parse",
              args: { name: "wallet-secret-name" },
            },
            optConnectionKey2,
            optFromJson,
          ],
        },
        {
          name: "synchronous-export",
          description: "Export technical objects from a Data Asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            {
              name: "--export-type",
              description: "Type of export",
              args: { suggestions: ["CUSTOM_PROPERTY_VALUES", "ALL"] },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--export-scope",
              description:
                "Array of objects and their child types to be selected for export",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates a specific data asset identified by the given key",
          options: [
            optCatalogId,
            optDataAssetKey,
            optDisplayName3,
            optDescription,
            optCustomPropertyMembers,
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the asset type",
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
        {
          name: "validate-connection",
          description:
            "Validate connection by connecting to the data asset using credentials in metadata",
          options: [
            optCatalogId,
            optDataAssetKey,
            optConnectionDetail,
            {
              name: "--connection-payload",
              description: "The information used to validate the connection",
              args: { name: "connection-payload" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of data assets within a data catalog",
          options: [
            optCatalogId,
            optDisplayName,
            optDisplayNameContains,
            optLifecycleState,
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            optExternalKey,
            optTypeKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a data asset summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "catalogId",
                  "externalKey",
                  "typeKey",
                  "lifecycleState",
                  "timeCreated",
                  "uri",
                ],
              },
              isRepeatable: true,
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
        {
          name: "add-data-selector-patterns",
          description: "Add data selector pattern to the data asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            {
              name: "--items",
              description: "Collection of pattern Ids",
              args: { name: "json" },
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
          name: "remove-data-selector-patterns",
          description: "Remove data selector pattern from the data asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            {
              name: "--items",
              description: "Collection of pattern Ids",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
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
            "Returns a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["CODE", "TIMESTAMP"] },
            },
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
      description:
        "Detailed representation of a connection to a data asset, minus any sensitive properties",
      subcommands: [
        {
          name: "create",
          description: "Creates a new connection",
          options: [
            optCatalogId,
            optDataAssetKey,
            optDisplayName2,
            {
              name: "--type-key",
              description: "The key of the object type",
              args: { name: "type-key" },
              isRequired: true,
            },
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the connection type",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description of the connection",
              args: { name: "description" },
            },
            optCustomPropertyMembers,
            {
              name: "--enc-properties",
              description:
                "A map of maps that contains the encrypted values for sensitive properties which are specific to",
              args: { name: "json" },
            },
            optIsDefault,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specific connection of a data asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            optConnectionKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a specific data asset connection by key",
          options: [
            optCatalogId,
            optDataAssetKey,
            optConnectionKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a connection response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "dataAssetKey",
                  "typeKey",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "properties",
                  "externalKey",
                  "timeStatusUpdated",
                  "lifecycleState",
                  "isDefault",
                  "uri",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "test",
          description:
            "Test the connection by connecting to the data asset using credentials in the metadata",
          options: [
            optCatalogId,
            optDataAssetKey,
            optConnectionKey,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a specific connection of a data asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            optConnectionKey,
            {
              name: "--description",
              description: "A description of the connection",
              args: { name: "description" },
            },
            optDisplayName3,
            optCustomPropertyMembers,
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the connection type",
              args: { name: "json" },
            },
            {
              name: "--enc-properties",
              description:
                "A map of maps that contains the encrypted values for sensitive properties which are specific to",
              args: { name: "json" },
            },
            optIsDefault,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "upload-credentials",
          description:
            "Upload connection credentails and metadata for this connection",
          options: [
            optCatalogId,
            optDataAssetKey,
            optConnectionKey,
            {
              name: "--credential-payload",
              description:
                "Information used in updating connection credentials",
              args: { name: "credential-payload" },
              isRequired: true,
            },
            optConnectionDetail,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of all Connections for a data asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            optDisplayName,
            optDisplayNameContains,
            optLifecycleState,
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            optExternalKey,
            {
              name: "--time-status-updated",
              description: "Time that the resource's status was last updated",
              args: { name: "datetime" },
            },
            optIsDefault,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a connection summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "dataAssetKey",
                  "typeKey",
                  "timeCreated",
                  "externalKey",
                  "lifecycleState",
                  "isDefault",
                  "uri",
                ],
              },
              isRepeatable: true,
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
      name: "term",
      description: "Full term definition",
      subcommands: [
        {
          name: "create",
          description: "Create a new term within a glossary",
          options: [
            optCatalogId,
            optGlossaryKey,
            optDisplayName2,
            {
              name: "--description",
              description: "Detailed description of the term",
              args: { name: "description" },
            },
            {
              name: "--is-allowed-to-have-child-terms",
              description: "Indicates whether a term may contain child terms",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--parent-term-key",
              description: "The parent key of the term",
              args: { name: "parent-term-key" },
            },
            {
              name: "--owner",
              description:
                "OCID of the user who is the owner of this business terminology",
              args: { name: "owner" },
            },
            {
              name: "--workflow-status",
              description:
                "Status of the approval process workflow for this business term in the glossary",
              args: {
                suggestions: ["NEW", "APPROVED", "UNDER_REVIEW", "ESCALATED"],
              },
            },
            optCustomPropertyMembers,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specific glossary term",
          options: [
            optCatalogId,
            optGlossaryKey,
            optTermKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a specific glossary term by key",
          options: [
            optCatalogId,
            optGlossaryKey,
            optTermKey,
            {
              name: "--fields",
              description: "Specifies the fields to return in a term response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "glossaryKey",
                  "parentTermKey",
                  "isAllowedToHaveChildTerms",
                  "path",
                  "lifecycleState",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "owner",
                  "workflowStatus",
                  "uri",
                  "relatedTerms",
                  "associatedObjectCount",
                  "associatedObjects",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of all terms within a glossary",
          options: [
            optCatalogId,
            optGlossaryKey,
            optDisplayName,
            optDisplayNameContains,
            optLifecycleState,
            {
              name: "--parent-term-key",
              description: "Unique key of the parent term",
              args: { name: "parent-term-key" },
            },
            {
              name: "--is-allowed-to-have-child-terms",
              description: "Indicates whether a term may contain child terms",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--workflow-status",
              description:
                "Status of the approval workflow for this business term in the glossary",
              args: {
                suggestions: ["NEW", "APPROVED", "UNDER_REVIEW", "ESCALATED"],
              },
            },
            optPath,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a term summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "glossaryKey",
                  "parentTermKey",
                  "isAllowedToHaveChildTerms",
                  "path",
                  "lifecycleState",
                  "timeCreated",
                  "workflowStatus",
                  "associatedObjectCount",
                  "uri",
                ],
              },
              isRepeatable: true,
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
        {
          name: "update",
          description: "Updates a specific glossary term",
          options: [
            optCatalogId,
            optGlossaryKey,
            optTermKey,
            optDisplayName3,
            {
              name: "--description",
              description: "Detailed description of the term",
              args: { name: "description" },
            },
            {
              name: "--parent-term-key",
              description: "The parent key of the term",
              args: { name: "parent-term-key" },
            },
            {
              name: "--owner",
              description:
                "OCID of the user who is the owner of this business terminology",
              args: { name: "owner" },
            },
            {
              name: "--workflow-status",
              description:
                "Status of the approval process workflow for this business term in the glossary",
              args: {
                suggestions: ["NEW", "APPROVED", "UNDER_REVIEW", "ESCALATED"],
              },
            },
            optCustomPropertyMembers,
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
      name: "attribute",
      description: "Details of an entity attribute",
      subcommands: [
        {
          name: "create",
          description: "Creates a new entity attribute",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optDisplayName2,
            {
              name: "--external-data-type",
              description:
                "Data type of the attribute as defined in the external system",
              args: { name: "external-data-type" },
              isRequired: true,
            },
            {
              name: "--time-external",
              description:
                "Last modified timestamp of this object in the external system",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--business-name",
              description:
                "Optional user friendly business name of the attribute",
              args: { name: "business-name" },
            },
            {
              name: "--description",
              description: "Detailed description of the attribute",
              args: { name: "description" },
            },
            {
              name: "--is-incremental-data",
              description:
                "Property that identifies if this attribute can be used as a watermark to extract incremental data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-nullable",
              description:
                "Property that identifies if this attribute can be assigned null values",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLength,
            optPosition,
            optPrecision,
            optScale,
            {
              name: "--min-collection-count",
              description:
                "The minimum count for the number of instances of a given type stored in this collection type",
              args: { name: "integer" },
            },
            {
              name: "--max-collection-count",
              description:
                "The maximum count for the number of instances of a given type stored in this collection type",
              args: { name: "integer" },
            },
            {
              name: "--external-datatype-entity-key",
              description:
                "External entity key that represents the datatype of this attribute",
              args: { name: "external-datatype-entity-key" },
            },
            {
              name: "--external-parent-attribute-key",
              description:
                "External attribute key that represents the parent attribute of this attribute",
              args: { name: "external-parent-attribute-key" },
            },
            optCustomPropertyMembers,
            {
              name: "--type-key",
              description: "Type key of the object",
              args: { name: "type-key" },
            },
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the attribute type",
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
          description: "Deletes a specific entity attribute",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optAttributeKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a specific entity attribute by key",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optAttributeKey,
            optIsIncludeObjectRelationships,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in an entity attribute response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "entityKey",
                  "lifecycleState",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "externalDataType",
                  "externalKey",
                  "isIncrementalData",
                  "isNullable",
                  "length",
                  "position",
                  "precision",
                  "scale",
                  "timeExternal",
                  "uri",
                  "properties",
                  "path",
                  "minCollectionCount",
                  "maxCollectionCount",
                  "datatypeEntityKey",
                  "externalDatatypeEntityKey",
                  "parentAttributeKey",
                  "externalParentAttributeKey",
                  "typeKey",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a specific data asset attribute",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optAttributeKey,
            optDisplayName3,
            {
              name: "--business-name",
              description:
                "Optional user friendly business name of the attribute",
              args: { name: "business-name" },
            },
            {
              name: "--description",
              description: "Detailed description of the attribute",
              args: { name: "description" },
            },
            {
              name: "--external-data-type",
              description:
                "Data type of the attribute as defined in the external system",
              args: { name: "external-data-type" },
            },
            {
              name: "--is-incremental-data",
              description:
                "Property that identifies if this attribute can be used as a watermark to extract incremental data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-nullable",
              description:
                "Property that identifies if this attribute can be assigned nullable values",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLength,
            optPosition,
            optPrecision,
            optScale,
            optTimeExternal,
            {
              name: "--min-collection-count",
              description:
                "The minimum count for the number of instances of a given type stored in this collection type",
              args: { name: "integer" },
            },
            {
              name: "--max-collection-count",
              description:
                "The maximum count for the number of instances of a given type stored in this collection type",
              args: { name: "integer" },
            },
            {
              name: "--external-datatype-entity-key",
              description:
                "External entity key that represents the datatype of this attribute",
              args: { name: "external-datatype-entity-key" },
            },
            {
              name: "--external-parent-attribute-key",
              description:
                "External attribute key that represents the parent attribute of this attribute",
              args: { name: "external-parent-attribute-key" },
            },
            optCustomPropertyMembers,
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the attribute type",
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
        {
          name: "list",
          description: "Returns a list of all attributes of an data entity",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optDisplayName,
            optBusinessName,
            optDisplayOrBusinessNameContains,
            optDisplayNameContains,
            optLifecycleState,
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            optExternalKey,
            optTimeExternal,
            {
              name: "--external-type-name",
              description: "Data type as defined in an external system",
              args: { name: "external-type-name" },
            },
            {
              name: "--is-incremental-data",
              description:
                "Identifies whether this attribute can be used as a watermark to extract incremental data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-nullable",
              description:
                "Identifies whether this attribute can be assigned null value",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLength,
            optPosition,
            optPrecision,
            optScale,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in an entity attribute summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "entityKey",
                  "lifecycleState",
                  "timeCreated",
                  "externalDataType",
                  "externalKey",
                  "length",
                  "precision",
                  "scale",
                  "isNullable",
                  "uri",
                  "path",
                  "minCollectionCount",
                  "maxCollectionCount",
                  "datatypeEntityKey",
                  "externalDatatypeEntityKey",
                  "parentAttributeKey",
                  "externalParentAttributeKey",
                  "position",
                  "typeKey",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "TIMECREATED",
                  "DISPLAYNAME",
                  "POSITION",
                  "DISPLAYORBUSINESSNAME",
                ],
              },
            },
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
      name: "job-definition",
      description: "Representation of a job definition resource",
      subcommands: [
        {
          name: "create",
          description: "Creates a new job definition",
          options: [
            optCatalogId,
            optDisplayName2,
            {
              name: "--job-type",
              description: "Type of the job definition",
              args: {
                suggestions: [
                  "HARVEST",
                  "PROFILING",
                  "SAMPLING",
                  "PREVIEW",
                  "IMPORT",
                  "EXPORT",
                  "IMPORT_GLOSSARY",
                  "EXPORT_GLOSSARY",
                  "INTERNAL",
                  "PURGE",
                  "IMMEDIATE",
                  "SCHEDULED",
                  "IMMEDIATE_EXECUTION",
                  "SCHEDULED_EXECUTION",
                  "SCHEDULED_EXECUTION_INSTANCE",
                  "ASYNC_DELETE",
                  "IMPORT_DATA_ASSET",
                  "CREATE_SCAN_PROXY",
                  "ASYNC_EXPORT_GLOSSARY",
                  "ASYNC_EXPORT_DATA_ASSET",
                ],
              },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Detailed description of the job definition",
              args: { name: "description" },
            },
            {
              name: "--is-incremental",
              description:
                "Specifies if the job definition is incremental or full",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--data-asset-key",
              description:
                "The key of the data asset for which the job is defined",
              args: { name: "data-asset-key" },
            },
            {
              name: "--glossary-key",
              description:
                "Unique key of the glossary to which this job applies",
              args: { name: "glossary-key" },
            },
            {
              name: "--connection-key",
              description:
                "The key of the connection resource to be used for the job",
              args: { name: "connection-key" },
            },
            {
              name: "--is-sample-data-extracted",
              description:
                "Specify if sample data to be extracted as part of this harvest",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--sample-data-size-in-mbs",
              description:
                "Specify the sample data size in MB, specified as number of rows, for this metadata harvest",
              args: { name: "integer" },
            },
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the job type",
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
          description:
            "Deletes a specific job definition identified by it's key",
          options: [
            optCatalogId,
            optJobDefinitionKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets a specific job definition by key within a data catalog",
          options: [
            optCatalogId,
            optJobDefinitionKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a job definition response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "catalogId",
                  "jobType",
                  "isIncremental",
                  "dataAssetKey",
                  "connectionKey",
                  "internalVersion",
                  "lifecycleState",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "uri",
                  "isSampleDataExtracted",
                  "sampleDataSizeInMBs",
                  "timeLatestExecutionStarted",
                  "timeLatestExecutionEnded",
                  "jobExecutionState",
                  "scheduleType",
                  "properties",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Update a specific job definition identified by the given key",
          options: [
            optCatalogId,
            optJobDefinitionKey,
            optDisplayName3,
            {
              name: "--is-incremental",
              description:
                "Specifies if the job definition is incremental or full",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--data-asset-key",
              description:
                "The key of the data asset for which the job is defined",
              args: { name: "data-asset-key" },
            },
            {
              name: "--glossary-key",
              description:
                "Unique key of the glossary to which this job applies",
              args: { name: "glossary-key" },
            },
            {
              name: "--description",
              description: "Detailed description of the job definition",
              args: { name: "description" },
            },
            {
              name: "--connection-key",
              description:
                "The key of the connection resource to be used for harvest, sampling, profiling jobs",
              args: { name: "connection-key" },
            },
            {
              name: "--is-sample-data-extracted",
              description:
                "Specify if sample data to be extracted as part of this harvest",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--sample-data-size-in-mbs",
              description:
                "Specify the sample data size in MB, specified as number of rows, for this metadata harvest",
              args: { name: "integer" },
            },
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the job type",
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
        {
          name: "list",
          description:
            "Returns a list of job definitions within a data catalog",
          options: [
            optCatalogId,
            optDisplayName,
            optDisplayNameContains,
            {
              name: "--job-execution-state",
              description: "Job execution state",
              args: {
                suggestions: [
                  "CREATED",
                  "IN_PROGRESS",
                  "INACTIVE",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELED",
                  "SUCCEEDED_WITH_WARNINGS",
                ],
              },
            },
            optLifecycleState,
            optJobType,
            {
              name: "--is-incremental",
              description:
                "Whether job definition is an incremental harvest (true) or a full harvest (false)",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--data-asset-key",
              description: "Unique data asset key",
              args: { name: "data-asset-key" },
            },
            {
              name: "--glossary-key",
              description: "Unique glossary key",
              args: { name: "glossary-key" },
            },
            optConnectionKey2,
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            {
              name: "--sample-data-size-in-mbs",
              description:
                "The sample data size in MB, specified as number of rows, for a metadata harvest",
              args: { name: "sample-data-size-in-mbs" },
            },
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a job definition summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "catalogId",
                  "jobType",
                  "connectionKey",
                  "lifecycleState",
                  "timeCreated",
                  "isSampleDataExtracted",
                  "uri",
                  "timeLatestExecutionStarted",
                  "timeLatestExecutionEnded",
                  "jobExecutionState",
                  "scheduleType",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "TIMECREATED",
                  "DISPLAYNAME",
                  "TIMELATESTEXECUTIONSTARTED",
                ],
              },
            },
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
      name: "job-execution",
      description:
        "A job execution is a unit of work being executed on behalf of a job",
      subcommands: [
        {
          name: "create",
          description: "Creates a new job execution",
          options: [
            optCatalogId,
            optJobKey,
            {
              name: "--sub-type",
              description: "Sub-type of this job execution",
              args: { name: "sub-type" },
            },
            {
              name: "--job-type",
              description: "Type of the job execution",
              args: {
                suggestions: [
                  "HARVEST",
                  "PROFILING",
                  "SAMPLING",
                  "PREVIEW",
                  "IMPORT",
                  "EXPORT",
                  "IMPORT_GLOSSARY",
                  "EXPORT_GLOSSARY",
                  "INTERNAL",
                  "PURGE",
                  "IMMEDIATE",
                  "SCHEDULED",
                  "IMMEDIATE_EXECUTION",
                  "SCHEDULED_EXECUTION",
                  "SCHEDULED_EXECUTION_INSTANCE",
                  "ASYNC_DELETE",
                  "IMPORT_DATA_ASSET",
                  "CREATE_SCAN_PROXY",
                  "ASYNC_EXPORT_GLOSSARY",
                  "ASYNC_EXPORT_DATA_ASSET",
                ],
              },
            },
            {
              name: "--parent-key",
              description:
                "The unique key of the parent execution or null if this job execution has no parent",
              args: { name: "parent-key" },
            },
            {
              name: "--time-started",
              description: "Time that job execution started",
              args: { name: "datetime" },
            },
            {
              name: "--time-ended",
              description:
                "Time that the job execution ended or null if it hasn't yet completed",
              args: { name: "datetime" },
            },
            {
              name: "--lifecycle-state",
              description:
                "Status of the job execution, such as running, paused, or completed",
              args: {
                suggestions: [
                  "CREATED",
                  "IN_PROGRESS",
                  "INACTIVE",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELED",
                  "SUCCEEDED_WITH_WARNINGS",
                ],
              },
            },
            {
              name: "--error-code",
              description:
                "Error code returned from the job execution or null if job is still running or didn't return an error",
              args: { name: "error-code" },
            },
            {
              name: "--error-message",
              description:
                "Error message returned from the job execution or null if job is still running or didn't return an error",
              args: { name: "error-message" },
            },
            {
              name: "--schedule-instance-key",
              description:
                "The unique key of the triggering external scheduler resource or null if this job execution is not externally",
              args: { name: "schedule-instance-key" },
            },
            {
              name: "--process-key",
              description:
                "Process identifier related to the job execution if the job is an external job",
              args: { name: "process-key" },
            },
            {
              name: "--external-url",
              description:
                "If the job is an external process, then a URL of the job for accessing this resource and its status",
              args: { name: "external-url" },
            },
            {
              name: "--event-key",
              description: "An identifier used for log message correlation",
              args: { name: "event-key" },
            },
            {
              name: "--data-entity-key",
              description: "The key of the associated data entity resource",
              args: { name: "data-entity-key" },
            },
            {
              name: "--properties",
              description:
                "A map of maps that contains the execution context properties which are specific to a job execution",
              args: { name: "json" },
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATED",
                  "IN_PROGRESS",
                  "INACTIVE",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELED",
                  "SUCCEEDED_WITH_WARNINGS",
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
          description: "Gets a specific job execution by key",
          options: [
            optCatalogId,
            optJobKey,
            optJobExecutionKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a job execution response",
              args: {
                suggestions: [
                  "key",
                  "jobKey",
                  "jobType",
                  "subType",
                  "parentKey",
                  "scheduleInstanceKey",
                  "lifecycleState",
                  "timeCreated",
                  "timeStarted",
                  "timeEnded",
                  "errorCode",
                  "errorMessage",
                  "processKey",
                  "externalUrl",
                  "eventKey",
                  "dataEntityKey",
                  "createdById",
                  "updatedById",
                  "properties",
                  "uri",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of job executions for a job",
          options: [
            optCatalogId,
            optJobKey,
            {
              name: "--lifecycle-state",
              description: "Job execution lifecycle state",
              args: {
                suggestions: [
                  "CREATED",
                  "IN_PROGRESS",
                  "INACTIVE",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELED",
                  "SUCCEEDED_WITH_WARNINGS",
                ],
              },
            },
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            optJobType,
            {
              name: "--sub-type",
              description: "Sub-type of this job execution",
              args: { name: "sub-type" },
            },
            {
              name: "--parent-key",
              description:
                "The unique key of the parent execution or null if this job execution has no parent",
              args: { name: "parent-key" },
            },
            {
              name: "--time-start",
              description:
                "Time that the job execution was started or in the case of a future time, the time when the job will start",
              args: { name: "datetime" },
            },
            {
              name: "--time-end",
              description:
                "Time that the job execution ended or null if the job is still running or hasn't run yet",
              args: { name: "datetime" },
            },
            {
              name: "--error-code",
              description:
                "Error code returned from the job execution or null if job is still running or didn't return an error",
              args: { name: "error-code" },
            },
            {
              name: "--error-message",
              description:
                "Error message returned from the job execution or null if job is still running or didn't return an error",
              args: { name: "error-message" },
            },
            {
              name: "--process-key",
              description: "Process identifier related to the job execution",
              args: { name: "process-key" },
            },
            {
              name: "--external-url",
              description:
                "The a URL of the job for accessing this resource and its status",
              args: { name: "external-url" },
            },
            {
              name: "--event-key",
              description:
                "Event that triggered the execution of this job or null",
              args: { name: "event-key" },
            },
            {
              name: "--data-entity-key",
              description: "Unique entity key",
              args: { name: "data-entity-key" },
            },
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a job execution summary response",
              args: {
                suggestions: [
                  "key",
                  "jobKey",
                  "jobType",
                  "parentKey",
                  "scheduleInstanceKey",
                  "lifecycleState",
                  "timeCreated",
                  "timeStarted",
                  "timeEnded",
                  "uri",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED"] },
            },
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
      name: "entity-tag",
      description: "Represents an association of an entity to a term",
      subcommands: [
        {
          name: "create",
          description: "Creates a new entity tag",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optName2,
            optTermKey2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specific entity tag",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optTagKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a specific entity tag by key",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optTagKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in an entity tag response",
              args: {
                suggestions: [
                  "key",
                  "name",
                  "termKey",
                  "termPath",
                  "termDescription",
                  "lifecycleState",
                  "timeCreated",
                  "createdById",
                  "uri",
                  "entityKey",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of all tags for a data entity",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optName,
            optLifecycleState,
            optTermKey3,
            optTermPath,
            optTimeCreated,
            optCreatedById,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in an entity tag summary response",
              args: {
                suggestions: [
                  "key",
                  "name",
                  "termKey",
                  "termPath",
                  "termDescription",
                  "lifecycleState",
                  "timeCreated",
                  "uri",
                  "glossaryKey",
                  "entityKey",
                ],
              },
              isRepeatable: true,
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
      name: "metastore",
      description:
        "A Data Catalog Metastore provides a centralized metastore repository for use by other OCI services",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a Metastore resource",
          options: [
            optMetastoreId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a resource into a different compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "OCID of the compartment to which the metastore should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optMetastoreId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new metastore",
          options: [
            {
              name: "--compartment-id",
              description: "OCID of the compartment which holds the metastore",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--default-managed-table-location",
              description:
                "Location under which managed tables will be created by default",
              args: { name: "default-managed-table-location" },
              isRequired: true,
            },
            {
              name: "--default-external-table-location",
              description:
                "Location under which external tables will be created by default",
              args: { name: "default-external-table-location" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Mutable name of the metastore",
              args: { name: "display-name" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a metastore resource by identifier",
          options: [
            optMetastoreId,
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
          name: "get",
          description: "Gets a metastore by identifier",
          options: [optMetastoreId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of all metastores in the specified compartment",
          options: [
            optCompartmentId,
            optDisplayName,
            optLimit,
            optPage,
            optLifecycleState,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes a lock from a Metastore resource",
          options: [
            optMetastoreId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a metastore resource by identifier",
          options: [
            optMetastoreId,
            {
              name: "--display-name",
              description: "Mutable name of the metastore",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
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
      name: "folder-tag",
      description: "Represents an association of a folder to a term",
      subcommands: [
        {
          name: "create",
          description: "Creates a new folder tag",
          options: [
            optCatalogId,
            optDataAssetKey,
            optFolderKey,
            optName2,
            optTermKey2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specific folder tag",
          options: [
            optCatalogId,
            optDataAssetKey,
            optFolderKey,
            optTagKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a specific folder tag by key",
          options: [
            optCatalogId,
            optDataAssetKey,
            optFolderKey,
            optTagKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a folder tag response",
              args: {
                suggestions: [
                  "key",
                  "name",
                  "termKey",
                  "termPath",
                  "termDescription",
                  "lifecycleState",
                  "timeCreated",
                  "createdById",
                  "uri",
                  "folderKey",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of all tags for a folder",
          options: [
            optCatalogId,
            optDataAssetKey,
            optFolderKey,
            optName,
            optLifecycleState,
            optTermKey3,
            optTermPath,
            optTimeCreated,
            optCreatedById,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a folder tag summary response",
              args: {
                suggestions: [
                  "key",
                  "name",
                  "termKey",
                  "termPath",
                  "termDescription",
                  "lifecycleState",
                  "timeCreated",
                  "uri",
                  "glossaryKey",
                  "folderKey",
                ],
              },
              isRepeatable: true,
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
      name: "data-asset-tag",
      description: "Represents an association of a data asset to a term",
      subcommands: [
        {
          name: "create",
          description: "Creates a new data asset tag",
          options: [
            optCatalogId,
            optDataAssetKey,
            optName2,
            optTermKey2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specific data asset tag",
          options: [
            optCatalogId,
            optDataAssetKey,
            optTagKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a specific data asset tag by key",
          options: [
            optCatalogId,
            optDataAssetKey,
            optTagKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a data asset tag response",
              args: {
                suggestions: [
                  "key",
                  "name",
                  "termKey",
                  "termPath",
                  "termDescription",
                  "lifecycleState",
                  "timeCreated",
                  "createdById",
                  "uri",
                  "dataAssetKey",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of all tags for a data asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            optName,
            optLifecycleState,
            optTermKey3,
            optTermPath,
            optTimeCreated,
            optCreatedById,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a data asset tag summary response",
              args: {
                suggestions: [
                  "key",
                  "name",
                  "termKey",
                  "termPath",
                  "termDescription",
                  "lifecycleState",
                  "timeCreated",
                  "uri",
                  "glossaryKey",
                  "dataAssetKey",
                ],
              },
              isRepeatable: true,
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
      name: "suggest-results",
      description:
        "The list of potential matches returned from the suggest operation for the given input text",
      subcommands: [
        {
          name: "suggest-matches",
          description:
            "Returns a list of potential string matches for a given input string",
          options: [
            optCatalogId,
            {
              name: "--input-text",
              description:
                "Text input string used for computing potential matching suggestions",
              args: { name: "input-text" },
              isRequired: true,
            },
            {
              name: "--timeout",
              description:
                "A search timeout string (for example, timeout=4000ms)",
              args: { name: "timeout" },
            },
            {
              name: "--limit",
              description:
                "Limit for the list of potential matches returned from the Suggest API",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "glossary",
      description: "Full glossary details",
      subcommands: [
        {
          name: "asynchronous-export",
          description: "Exports the contents of a glossary in Excel format",
          options: [
            optCatalogId,
            optGlossaryKey,
            { name: "--object-storage-target", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new glossary",
          options: [
            optCatalogId,
            optDisplayName2,
            {
              name: "--description",
              description: "Detailed description of the glossary",
              args: { name: "description" },
            },
            {
              name: "--workflow-status",
              description:
                "Status of the approval process workflow for this business glossary",
              args: {
                suggestions: ["NEW", "APPROVED", "UNDER_REVIEW", "ESCALATED"],
              },
            },
            {
              name: "--owner",
              description: "OCID of the user who is the owner of the glossary",
              args: { name: "owner" },
            },
            optCustomPropertyMembers,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specific glossary identified by it's key",
          options: [
            optCatalogId,
            optGlossaryKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "expand-tree-for",
          description:
            "Returns the fully expanded tree hierarchy of parent and child terms in this glossary",
          options: [optCatalogId, optGlossaryKey, optFromJson],
        },
        {
          name: "export",
          description:
            "Export the glossary and the terms and return the exported glossary as csv or json",
          options: [
            optCatalogId,
            optGlossaryKey,
            {
              name: "--is-relationship-exported",
              description:
                "Specify if the relationship metadata is exported for the glossary",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a specific glossary by key within a data catalog",
          options: [
            optCatalogId,
            optGlossaryKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a glossary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "catalogId",
                  "lifecycleState",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "owner",
                  "workflowStatus",
                  "uri",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "import",
          description:
            "Import the glossary and the terms from csv or json files and return the imported glossary resource",
          options: [
            optCatalogId,
            optGlossaryKey,
            {
              name: "--glossary-file-contents",
              description: "The file contents used for the import of glossary",
              args: { name: "glossary-file-contents" },
            },
            {
              name: "--is-relationship-imported",
              description:
                "Specify if the relationship metadata is imported for the glossary",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of all glossaries within a data catalog",
          options: [
            optCatalogId,
            optDisplayName,
            optDisplayNameContains,
            optLifecycleState,
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a glossary summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "catalogId",
                  "lifecycleState",
                  "timeCreated",
                  "uri",
                  "workflowStatus",
                ],
              },
              isRepeatable: true,
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
        {
          name: "update",
          description:
            "Updates a specific glossary identified by the given key",
          options: [
            optCatalogId,
            optGlossaryKey,
            optDisplayName3,
            {
              name: "--description",
              description: "Detailed description of the glossary",
              args: { name: "description" },
            },
            {
              name: "--owner",
              description: "OCID of the user who is the owner of the glossary",
              args: { name: "owner" },
            },
            {
              name: "--workflow-status",
              description:
                "Status of the approval process workflow for this business glossary",
              args: {
                suggestions: ["NEW", "APPROVED", "UNDER_REVIEW", "ESCALATED"],
              },
            },
            optCustomPropertyMembers,
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
      name: "folder",
      description:
        "A generic term used in the data catalog for an external organization concept used for a collection of data",
      subcommands: [
        {
          name: "create",
          description: "Creates a new folder",
          options: [
            optCatalogId,
            optDataAssetKey,
            optDisplayName2,
            {
              name: "--time-external",
              description:
                "Last modified timestamp of this object in the external system",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--business-name",
              description: "Optional user friendly business name of the folder",
              args: { name: "business-name" },
            },
            {
              name: "--description",
              description: "Detailed description of a folder",
              args: { name: "description" },
            },
            optCustomPropertyMembers,
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the folder type",
              args: { name: "json" },
            },
            {
              name: "--parent-folder-key",
              description:
                "The key of the containing folder or null if there isn't a parent folder",
              args: { name: "parent-folder-key" },
            },
            {
              name: "--last-job-key",
              description:
                "The job key of the harvest process that updated the folder definition from the source system",
              args: { name: "last-job-key" },
            },
            {
              name: "--harvest-status",
              description: "Folder harvesting status",
              args: {
                suggestions: ["COMPLETE", "ERROR", "IN_PROGRESS", "DEFERRED"],
              },
            },
            {
              name: "--type-key",
              description: "Type key of the object",
              args: { name: "type-key" },
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
            "Deletes a specific folder of a data asset identified by it's key",
          options: [
            optCatalogId,
            optDataAssetKey,
            optFolderKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a specific data asset folder by key",
          options: [
            optCatalogId,
            optDataAssetKey,
            optFolderKey,
            optIsIncludeObjectRelationships,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a folder response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "parentFolderKey",
                  "path",
                  "dataAssetKey",
                  "properties",
                  "externalKey",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "timeExternal",
                  "lifecycleState",
                  "harvestStatus",
                  "lastJobKey",
                  "uri",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a specific folder of a data asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            optFolderKey,
            optDisplayName3,
            {
              name: "--business-name",
              description: "Optional user friendly business name of the folder",
              args: { name: "business-name" },
            },
            {
              name: "--description",
              description: "Detailed description of a folder",
              args: { name: "description" },
            },
            {
              name: "--parent-folder-key",
              description: "The key of the containing folder",
              args: { name: "parent-folder-key" },
            },
            optCustomPropertyMembers,
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the folder type",
              args: { name: "json" },
            },
            optTimeExternal,
            {
              name: "--harvest-status",
              description: "Harvest status of the folder",
              args: {
                suggestions: ["COMPLETE", "ERROR", "IN_PROGRESS", "DEFERRED"],
              },
            },
            {
              name: "--last-job-key",
              description:
                "The key of the last harvest process to update the metadata of this object",
              args: { name: "last-job-key" },
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
          name: "list",
          description: "Returns a list of all folders",
          options: [
            optCatalogId,
            optDataAssetKey,
            optDisplayName,
            optBusinessName,
            optDisplayOrBusinessNameContains,
            optDisplayNameContains,
            optLifecycleState,
            {
              name: "--parent-folder-key",
              description: "Unique folder key",
              args: { name: "parent-folder-key" },
            },
            optPath,
            optExternalKey,
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            {
              name: "--harvest-status",
              description:
                "Harvest status of the harvestable resource as updated by the harvest process",
              args: {
                suggestions: ["COMPLETE", "ERROR", "IN_PROGRESS", "DEFERRED"],
              },
            },
            {
              name: "--last-job-key",
              description:
                "Key of the last harvest process to update this resource",
              args: { name: "last-job-key" },
            },
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a folder summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "parentFolderKey",
                  "path",
                  "dataAssetKey",
                  "externalKey",
                  "timeExternal",
                  "timeCreated",
                  "lifecycleState",
                  "uri",
                ],
              },
              isRepeatable: true,
            },
            optTypeKey,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "TIMECREATED",
                  "DISPLAYNAME",
                  "DISPLAYORBUSINESSNAME",
                ],
              },
            },
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
      name: "namespace",
      description: "Namespace Definition",
      subcommands: [
        {
          name: "create",
          description: "Create a new Namespace to be used by a custom property",
          options: [
            optCatalogId,
            optDisplayName2,
            {
              name: "--description",
              description: "Detailed description of the Namespace",
              args: { name: "description" },
            },
            {
              name: "--is-service-defined",
              description: "If this field is defined by service or by a user",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specific Namespace identified by it's key",
          options: [
            optCatalogId,
            optNamespaceId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets a specific namespace for the given key within a data catalog",
          options: [
            optCatalogId,
            optNamespaceId,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a namespace response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "lifecycleState",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "properties",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of namespaces within a data catalog",
          options: [
            optCatalogId,
            optDisplayName,
            optDisplayNameContains,
            optLifecycleState,
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            optSortBy,
            optSortOrder,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a namespace summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "lifecycleState",
                  "timeCreated",
                ],
              },
              isRepeatable: true,
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates a specific namespace identified by the given key",
          options: [
            optCatalogId,
            optNamespaceId,
            optDisplayName3,
            {
              name: "--description",
              description: "Detailed description of the namespace",
              args: { name: "description" },
            },
            {
              name: "--is-service-defined",
              description: "If this field is defined by service or by a user",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "catalog-private-endpoint",
      description:
        "A private network reverse connection creates a connection from service to customer subnet over a private",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a CatalogPrivateEndpoint resource",
          options: [
            optCatalogPrivateEndpointId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a resource into a different compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The identifier of the compartment where the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optCatalogPrivateEndpointId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new private reverse connection endpoint",
          options: [
            {
              name: "--dns-zones",
              description:
                "List of DNS zones to be used by the data assets to be harvested",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of subnet to which the reverse connection is to be created",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "Compartment identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--display-name",
              description:
                "Display name of the private endpoint resource being created",
              args: { name: "display-name" },
            },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a private reverse connection endpoint by identifier",
          options: [
            optCatalogPrivateEndpointId,
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
          name: "get",
          description:
            "Gets a specific private reverse connection by identifier",
          options: [optCatalogPrivateEndpointId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of all the catalog private endpoints in the specified compartment",
          options: [
            optCompartmentId,
            optDisplayName,
            optLimit,
            optPage,
            optLifecycleState,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Removes a lock from a CatalogPrivateEndpoint resource",
          options: [
            optCatalogPrivateEndpointId,
            optType,
            optRelatedResourceId,
            optMessage,
            optTimeCreated2,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the private reverse connection endpoint",
          options: [
            optCatalogPrivateEndpointId,
            {
              name: "--dns-zones",
              description:
                "List of DNS zones to be used by the data assets to be harvested",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--display-name",
              description: "Display name of the private endpoint resource",
              args: { name: "display-name" },
            },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "job",
      description: "Details of a job",
      subcommands: [
        {
          name: "create",
          description: "Creates a new job",
          options: [
            optCatalogId,
            optDisplayName2,
            {
              name: "--job-definition-key",
              description:
                "The unique key of the job definition that defined the scope of this job",
              args: { name: "job-definition-key" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Detailed description of the job",
              args: { name: "description" },
            },
            optScheduleCronExpression,
            optTimeScheduleBegin,
            optTimeScheduleEnd,
            {
              name: "--connection-key",
              description: "The key of the connection used by the job",
              args: { name: "connection-key" },
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "INACTIVE", "EXPIRED"] },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specific job identified by it's key",
          options: [optCatalogId, optJobKey, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets a specific job by key within a data catalog",
          options: [
            optCatalogId,
            optJobKey,
            {
              name: "--fields",
              description: "Specifies the fields to return in a job response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "catalogId",
                  "lifecycleState",
                  "timeCreated",
                  "timeUpdated",
                  "jobType",
                  "scheduleCronExpression",
                  "timeScheduleBegin",
                  "timeScheduleEnd",
                  "scheduleType",
                  "connectionKey",
                  "jobDefinitionKey",
                  "internalVersion",
                  "executionCount",
                  "timeOfLatestExecution",
                  "executions",
                  "createdById",
                  "updatedById",
                  "uri",
                  "jobDefinitionName",
                  "errorCode",
                  "errorMessage",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a specific job identified by the given key",
          options: [
            optCatalogId,
            optJobKey,
            optDisplayName3,
            {
              name: "--description",
              description: "Detailed description of the job",
              args: { name: "description" },
            },
            optScheduleCronExpression,
            optTimeScheduleBegin,
            optTimeScheduleEnd,
            {
              name: "--connection-key",
              description:
                "The key of the connection resource that is used for the harvest by this job",
              args: { name: "connection-key" },
            },
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "INACTIVE", "EXPIRED"] },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of jobs within a data catalog",
          options: [
            optCatalogId,
            optDisplayName,
            optDisplayNameContains,
            {
              name: "--lifecycle-state",
              description: "Job lifecycle state",
              args: { suggestions: ["ACTIVE", "INACTIVE", "EXPIRED"] },
            },
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            optJobType,
            {
              name: "--job-definition-key",
              description: "Unique job definition key",
              args: { name: "job-definition-key" },
            },
            {
              name: "--data-asset-key",
              description: "Unique data asset key",
              args: { name: "data-asset-key" },
            },
            {
              name: "--glossary-key",
              description: "Unique glossary key",
              args: { name: "glossary-key" },
            },
            optScheduleCronExpression,
            optTimeScheduleBegin,
            optTimeScheduleEnd,
            {
              name: "--schedule-type",
              description: "Type of the job schedule",
              args: { suggestions: ["SCHEDULED", "IMMEDIATE"] },
            },
            optConnectionKey2,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a job summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "catalogId",
                  "jobDefinitionKey",
                  "lifecycleState",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "jobType",
                  "scheduleCronExpression",
                  "timeScheduleBegin",
                  "scheduleType",
                  "executionCount",
                  "timeOfLatestExecution",
                  "executions",
                  "uri",
                  "jobDefinitionName",
                  "errorCode",
                  "errorMessage",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--execution-count",
              description:
                "The total number of executions for this job schedule",
              args: { name: "integer" },
            },
            {
              name: "--time-of-latest-execution",
              description:
                "The date and time the most recent execution for this job ,in the format defined by RFC3339",
              args: { name: "datetime" },
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
      name: "entity",
      description: "Data entity details",
      subcommands: [
        {
          name: "create",
          description: "Creates a new data entity",
          options: [
            optCatalogId,
            optDataAssetKey,
            optDisplayName2,
            {
              name: "--time-external",
              description:
                "Last modified timestamp of the object in the external system",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--business-name",
              description:
                "Optional user friendly business name of the data entity",
              args: { name: "business-name" },
            },
            {
              name: "--type-key",
              description: "The type of data entity object",
              args: { name: "type-key" },
            },
            {
              name: "--description",
              description: "Detailed description of a data entity",
              args: { name: "description" },
            },
            {
              name: "--is-logical",
              description:
                "Property to indicate if the object is a physical materialized object or virtual",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-partition",
              description:
                "Property to indicate if the object is a sub object of a parent physical object",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFolderKey2,
            {
              name: "--pattern-key",
              description:
                "Key of the associated pattern if this is a logical entity",
              args: { name: "pattern-key" },
            },
            {
              name: "--realized-expression",
              description: "The expression realized after resolving qualifiers",
              args: { name: "realized-expression" },
            },
            {
              name: "--harvest-status",
              description:
                "Status of the object as updated by the harvest process",
              args: {
                suggestions: ["COMPLETE", "ERROR", "IN_PROGRESS", "DEFERRED"],
              },
            },
            {
              name: "--last-job-key",
              description:
                "Key of the last harvest process to update this object",
              args: { name: "last-job-key" },
            },
            optCustomPropertyMembers,
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the entity type",
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
          description: "Deletes a specific data entity",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "fetch-entity-lineage",
          description: "Returns lineage for a given entity object",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            {
              name: "--level",
              description: "Object level at which the lineage is returned",
              args: { name: "integer" },
            },
            {
              name: "--direction",
              description: "Direction of the lineage returned",
              args: { suggestions: ["UPSTREAM", "BOTH", "DOWNSTREAM"] },
            },
            {
              name: "--is-intra-lineage",
              description: "Intra-lineages are drill down lineages",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--intra-lineage-object-key",
              description:
                "Unique object key for which intra-lineage needs to be fetched",
              args: { name: "intra-lineage-object-key" },
            },
            optLimit,
            optPage,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a specific data entity by key for a data asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optIsIncludeObjectRelationships,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in an entity response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "dataAssetKey",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "lifecycleState",
                  "externalKey",
                  "timeExternal",
                  "timeStatusUpdated",
                  "isLogical",
                  "isPartition",
                  "folderKey",
                  "folderName",
                  "typeKey",
                  "path",
                  "harvestStatus",
                  "lastJobKey",
                  "uri",
                  "properties",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-aggregated-physical",
          description:
            "List the physical entities aggregated by this logical entity",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in an entity response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "dataAssetKey",
                  "timeCreated",
                  "timeUpdated",
                  "createdById",
                  "updatedById",
                  "lifecycleState",
                  "externalKey",
                  "timeExternal",
                  "timeStatusUpdated",
                  "isLogical",
                  "isPartition",
                  "folderKey",
                  "folderName",
                  "typeKey",
                  "path",
                  "harvestStatus",
                  "lastJobKey",
                  "uri",
                  "properties",
                ],
              },
              isRepeatable: true,
            },
            optDisplayNameContains,
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            {
              name: "--is-include-properties",
              description:
                "Indicates whether the properties map will be provided in the response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of all entities of a data asset",
          options: [
            optCatalogId,
            optDataAssetKey,
            optDisplayName,
            optBusinessName,
            optDisplayOrBusinessNameContains,
            optTypeKey,
            optDisplayNameContains,
            optLifecycleState,
            optTimeCreated,
            optTimeUpdated,
            optCreatedById,
            optUpdatedById,
            optExternalKey,
            {
              name: "--pattern-key",
              description: "Unique pattern key",
              args: { name: "pattern-key" },
            },
            optTimeExternal,
            {
              name: "--time-status-updated",
              description: "Time that the resource's status was last updated",
              args: { name: "datetime" },
            },
            {
              name: "--is-logical",
              description:
                "Identifies if the object is a physical object (materialized) or virtual/logical object defined on other",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-partition",
              description:
                "Identifies if an object is a sub object (partition) of a physical or materialized parent object",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFolderKey2,
            optPath,
            {
              name: "--harvest-status",
              description:
                "Harvest status of the harvestable resource as updated by the harvest process",
              args: {
                suggestions: ["COMPLETE", "ERROR", "IN_PROGRESS", "DEFERRED"],
              },
            },
            {
              name: "--last-job-key",
              description:
                "Key of the last harvest process to update this resource",
              args: { name: "last-job-key" },
            },
            {
              name: "--fields",
              description:
                "Specifies the fields to return in an entity summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "dataAssetKey",
                  "timeCreated",
                  "timeUpdated",
                  "updatedById",
                  "lifecycleState",
                  "folderKey",
                  "folderName",
                  "externalKey",
                  "path",
                  "uri",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "TIMECREATED",
                  "DISPLAYNAME",
                  "DISPLAYORBUSINESSNAME",
                ],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            {
              name: "--is-process",
              description: "A filter to return only process entities",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a specific data entity",
          options: [
            optCatalogId,
            optDataAssetKey,
            optEntityKey,
            optDisplayName3,
            {
              name: "--business-name",
              description:
                "Optional user friendly business name of the data entity",
              args: { name: "business-name" },
            },
            {
              name: "--description",
              description: "Detailed description of a data entity",
              args: { name: "description" },
            },
            {
              name: "--time-external",
              description:
                "Last modified timestamp of the object in the external system",
              args: { name: "datetime" },
            },
            {
              name: "--is-logical",
              description:
                "Property to indicate if the object is a physical materialized object or virtual",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-partition",
              description:
                "Property to indicate if the object is a sub object of a parent physical object",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFolderKey2,
            {
              name: "--pattern-key",
              description:
                "Key of the associated pattern if this is a logical entity",
              args: { name: "pattern-key" },
            },
            {
              name: "--realized-expression",
              description: "The expression realized after resolving qualifiers",
              args: { name: "realized-expression" },
            },
            {
              name: "--harvest-status",
              description:
                "Status of the object as updated by the harvest process",
              args: {
                suggestions: ["COMPLETE", "ERROR", "IN_PROGRESS", "DEFERRED"],
              },
            },
            {
              name: "--last-job-key",
              description:
                "Key of the last harvest process to update this object",
              args: { name: "last-job-key" },
            },
            optCustomPropertyMembers,
            {
              name: "--properties",
              description:
                "A map of maps that contains the properties which are specific to the entity type",
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
      name: "tag",
      description:
        "A free-form label or keyword you create to be able to logically group data objects",
      subcommands: [
        {
          name: "list",
          description: "Returns a list of all user created tags in the system",
          options: [
            optCatalogId,
            optDisplayName,
            optDisplayNameContains,
            optLifecycleState,
            {
              name: "--fields",
              description:
                "Specifies the fields to return in a term summary response",
              args: {
                suggestions: [
                  "key",
                  "displayName",
                  "description",
                  "glossaryKey",
                  "parentTermKey",
                  "isAllowedToHaveChildTerms",
                  "path",
                  "lifecycleState",
                  "timeCreated",
                  "workflowStatus",
                  "associatedObjectCount",
                  "uri",
                ],
              },
              isRepeatable: true,
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
      name: "search",
      description:
        "The search result object is the definition of an element that is returned as part of search",
      subcommands: [
        {
          name: "query",
          description: "Returns a list of search results within a data catalog",
          options: [
            optCatalogId,
            {
              name: "--faceted-query",
              description:
                "Query string that a dataObject is to be searched with",
              args: { name: "faceted-query" },
            },
            {
              name: "--dimensions",
              description:
                "List of properties of dataObjects that needs to aggregated on for facets",
              args: { name: "json" },
            },
            {
              name: "--sort",
              description:
                "Array of objects having details about sort field and order",
              args: { name: "json" },
            },
            { name: "--filters", args: { name: "json" } },
            optDisplayName,
            optName,
            optLifecycleState,
            {
              name: "--timeout",
              description:
                "A search timeout string (for example, timeout=4000ms)",
              args: { name: "timeout" },
            },
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            {
              name: "--query-text",
              description:
                "Search query dsl that defines the query components including fields and predicates",
              args: { name: "query-text" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
