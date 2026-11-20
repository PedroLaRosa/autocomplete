// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optNamespaceName: Fig.Option = {
  name: "--namespace-name",
  description: "The Log Analytics namespace used for the request",
  args: { name: "namespace-name" },
  isRequired: true,
};
const optNamespaceName2: Fig.Option = {
  name: ["--namespace-name", "--namespace", "-ns"],
  description: "The Log Analytics namespace used for the request",
  args: { name: "namespace-name" },
  isRequired: true,
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
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
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
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
const optSourceName: Fig.Option = {
  name: "--source-name",
  description: "The source name",
  args: { name: "source-name" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment Identifier OCID",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "Work Request Identifier OCID for the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optScheduledTaskId: Fig.Option = {
  name: "--scheduled-task-id",
  description: "Unique scheduledTask id returned from task create",
  args: { name: "scheduled-task-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optEntityId: Fig.Option = {
  name: "--entity-id",
  description: "The log analytics entity OCID",
  args: { name: "entity-id" },
  isRequired: true,
};
const optExpect: Fig.Option = {
  name: "--expect",
  description:
    "A value of 100-continue requests preliminary verification of the request method, path",
  args: { name: "expect" },
};
const optIsSystem: Fig.Option = {
  name: "--is-system",
  description: "The system flag",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Description for this resource",
  args: { name: "description" },
};
const optIngestTimeRuleId: Fig.Option = {
  name: "--ingest-time-rule-id",
  description: "Unique ocid of the ingest time rule",
  args: { name: "ingest-time-rule-id" },
  isRequired: true,
};
const optLookupName: Fig.Option = {
  name: "--lookup-name",
  description: "The name of the lookup to operate on",
  args: { name: "lookup-name" },
  isRequired: true,
};
const optUploadReference: Fig.Option = {
  name: "--upload-reference",
  description: "Unique internal identifier to refer upload container",
  args: { name: "upload-reference" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment where the log analytics entity should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optIsSystem2: Fig.Option = {
  name: "--is-system",
  description: "The system value used for filtering",
  args: { suggestions: ["ALL", "CUSTOM", "BUILT_IN"] },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The attribute used to sort the returned items",
  args: { suggestions: ["name"] },
};
const optSubSystem: Fig.Option = {
  name: "--sub-system",
  description:
    "Default subsystem to qualify fields with in the queryString if not specified",
  args: { suggestions: ["LOG"] },
  isRequired: true,
};
const optBridgeId: Fig.Option = {
  name: "--bridge-id",
  description: "The log analytics enterprise manager bridge OCID",
  args: { name: "bridge-id" },
  isRequired: true,
};
const optCategories: Fig.Option = {
  name: "--categories",
  description: "A comma-separated list of categories used for filtering",
  args: { name: "categories" },
};
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment id",
  args: { name: "compartment-id" },
};
const optContentType: Fig.Option = {
  name: "--content-type",
  description: "The content type of the log data",
  args: { name: "content-type" },
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "The parser description",
  args: { name: "description" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A user-friendly name that is changeable and that does not have to be unique",
  args: { name: "display-name" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "The parser display name",
  args: { name: "display-name" },
};
const optEntityId2: Fig.Option = {
  name: "--entity-id",
  description: "The entity OCID",
  args: { name: "entity-id" },
};
const optFieldDelimiter: Fig.Option = {
  name: "--field-delimiter",
  description: "The parser field delimiter",
  args: { name: "field-delimiter" },
};
const optFieldMaps: Fig.Option = {
  name: "--field-maps",
  description: "The parser fields",
  args: { name: "json" },
};
const optFieldQualifier: Fig.Option = {
  name: "--field-qualifier",
  description: "The parser field qualifier",
  args: { name: "field-qualifier" },
};
const optFooterContent: Fig.Option = {
  name: "--footer-content",
  description: "The footer regular expression",
  args: { name: "footer-content" },
};
const optHeaderContent: Fig.Option = {
  name: "--header-content",
  description: "The header content",
  args: { name: "header-content" },
};
const optIsDefault: Fig.Option = {
  name: "--is-default",
  description: "A flag indicating if this is a default parser",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsNamespaceAware: Fig.Option = {
  name: "--is-namespace-aware",
  description:
    "A flag indicating whether the XML parser should consider the namespace(s) while processing the log data",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsParserWrittenOnce: Fig.Option = {
  name: "--is-parser-written-once",
  description: "A flag indicating whether or not the parser is write once",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsPositionAware: Fig.Option = {
  name: "--is-position-aware",
  description: "A flag indicating whether the parser is positionally aware",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsSingleLineContent: Fig.Option = {
  name: "--is-single-line-content",
  description: "A flag indicating if this is a single line content parser",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optItems: Fig.Option = {
  name: "--items",
  description: "An array of event type specifications",
  args: { name: "json" },
};
const optLanguage: Fig.Option = {
  name: "--language",
  description: "The language",
  args: { name: "language" },
};
const optLogGroupId: Fig.Option = {
  name: "--log-group-id",
  description: "The log group OCID",
  args: { name: "log-group-id" },
};
const optName: Fig.Option = {
  name: "--name",
  description:
    "A filter to return only log analytics entities whose name matches the entire name given",
  args: { name: "name" },
};
const optName2: Fig.Option = {
  name: "--name",
  description: "Log analytics entity type name",
  args: { name: "name" },
  isRequired: true,
};
const optObjectCollectionRuleId: Fig.Option = {
  name: "--object-collection-rule-id",
  description: "The Logging Analytics Object Collection Rule OCID",
  args: { name: "object-collection-rule-id" },
  isRequired: true,
};
const optParserFunctions: Fig.Option = {
  name: "--parser-functions",
  description: "The parser function list",
  args: { name: "json" },
};
const optParserIgnorelineChars: Fig.Option = {
  name: "--parser-ignoreline-chars",
  description: "Ignore line characters",
  args: { name: "parser-ignoreline-chars" },
};
const optParserSequence: Fig.Option = {
  name: "--parser-sequence",
  description: "The parser sequence",
  args: { name: "integer" },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "timeUpdated", "displayName"] },
};
const optSourceName2: Fig.Option = {
  name: "--source-name",
  description: "The source name",
  args: { name: "source-name" },
};
const optTimeUpdated: Fig.Option = {
  name: "--time-updated",
  description: "The last updated date",
  args: { name: "datetime" },
};
const optTokenizeOriginalText: Fig.Option = {
  name: "--tokenize-original-text",
  description: "Tokenize original text: true/false",
  args: { name: "tokenize-original-text" },
};
const optType: Fig.Option = {
  name: "--type",
  description: "The parser type",
  args: { suggestions: ["XML", "JSON", "REGEX", "ODL", "DELIMITED"] },
};
const optCharEncoding: Fig.Option = {
  name: "--char-encoding",
  description: "The character encoding of the uploaded file",
  args: { name: "char-encoding" },
};
const optCompartmentId5: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment ID",
  args: { name: "compartment-id" },
};
const optCompartmentIdInSubtree: Fig.Option = {
  name: "--compartment-id-in-subtree",
  description:
    "Flag to search all child compartments of the compartment Id specified in the compartmentId query parameter",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optContent: Fig.Option = {
  name: "--content",
  description: "The content",
  args: { name: "content" },
};
const optDescription3: Fig.Option = {
  name: "--description",
  description: "The source description",
  args: { name: "description" },
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "The source display name",
  args: { name: "display-name" },
};
const optEditVersion: Fig.Option = {
  name: "--edit-version",
  description: "The parser edit version",
  args: { name: "integer" },
};
const optEditVersion2: Fig.Option = {
  name: "--edit-version",
  description: "The source edit version",
  args: { name: "integer" },
};
const optEncoding: Fig.Option = {
  name: "--encoding",
  description: "The encoding",
  args: { name: "encoding" },
};
const optEndpoints: Fig.Option = {
  name: "--endpoints",
  description: "An array of REST API endpoints for log collection",
  args: { name: "json" },
};
const optEntityType: Fig.Option = {
  name: "--entity-type",
  description: "The entity type used for filtering",
  args: { name: "entity-type" },
};
const optExampleContent: Fig.Option = {
  name: "--example-content",
  description: "The example content",
  args: { name: "example-content" },
};
const optFieldName: Fig.Option = {
  name: "--field-name",
  description: "The field name",
  args: { name: "field-name" },
  isRequired: true,
};
const optFile: Fig.Option = {
  name: "--file",
  description: "Path to the lookup content file",
  args: { name: "file", template: "filepaths" },
  isRequired: true,
};
const optFilename: Fig.Option = {
  name: "--filename",
  description: "The name of the file being uploaded",
  args: { name: "filename" },
  isRequired: true,
};
const optIsForCloud: Fig.Option = {
  name: "--is-for-cloud",
  description: "A flag indicating whether or not this is a cloud source",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsForce: Fig.Option = {
  name: "--is-force",
  description: "Is force",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsSecureContent: Fig.Option = {
  name: "--is-secure-content",
  description: "A flag indicating whether or not the source content is secure",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsTimezoneOverride: Fig.Option = {
  name: "--is-timezone-override",
  description:
    "A flag indicating whether or not the source has a time zone override",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLogSet: Fig.Option = {
  name: "--log-set",
  description: "The log set that gets associated with the uploaded logs",
  args: { name: "log-set" },
};
const optMetadata: Fig.Option = { name: "--metadata", args: { name: "json" } };
const optName3: Fig.Option = {
  name: "--name",
  description: "The parser name",
  args: { name: "name" },
};
const optName4: Fig.Option = {
  name: "--name",
  description: "The source internal name",
  args: { name: "name" },
};
const optOpcMetaProperties: Fig.Option = {
  name: "--opc-meta-properties",
  description: "Metadata key and value pairs separated by a semicolon",
  args: { name: "opc-meta-properties" },
};
const optParserTimezone: Fig.Option = {
  name: "--parser-timezone",
  description: "The time zone",
  args: { name: "parser-timezone" },
};
const optRuleId: Fig.Option = {
  name: "--rule-id",
  description: "The rule unique identifier",
  args: { name: "integer" },
};
const optShouldIncludeColumns: Fig.Option = {
  name: "--should-include-columns",
  description: "Include columns in response",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optSortBy3: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort entities by",
  args: { suggestions: ["timeCreated", "timeUpdated", "name"] },
};
const optSortBy4: Fig.Option = {
  name: "--sort-by",
  description: "This is the query parameter of which field to sort by",
  args: { suggestions: ["timeStarted", "timeDataStarted"] },
};
const optSourceId: Fig.Option = {
  name: "--source-id",
  description: "The source unique identifier",
  args: { name: "integer" },
};
const optSourceProperties: Fig.Option = {
  name: "--source-properties",
  description: "A list of source properties",
  args: { name: "json" },
};
const optTimezone: Fig.Option = {
  name: "--timezone",
  description:
    "Timezone to be used when processing log entries whose timestamps do not include an explicit timezone",
  args: { name: "timezone" },
};
const optTypeName: Fig.Option = {
  name: "--type-name",
  description: "The source type internal name",
  args: { name: "type-name" },
};
const optUserParsers: Fig.Option = {
  name: "--user-parsers",
  description: "An array of custom parsers",
  args: { name: "json" },
};
const optWarningConfig: Fig.Option = {
  name: "--warning-config",
  description: "The source warning configuration",
  args: { name: "integer" },
};
const completionSpec: Fig.Spec = {
  name: "log-analytics",
  description: "LogAnalytics",
  subcommands: [
    {
      name: "scheduled-task",
      description: "Log analytics scheduled task resource",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move the scheduled task into a different compartment within the same tenancy",
          options: [
            optNamespaceName2,
            optScheduledTaskId,
            optCompartmentId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "clean",
          description:
            "Clean accumulated acceleration data stored for the accelerated saved search",
          options: [
            optNamespaceName2,
            optScheduledTaskId,
            {
              name: "--time-start",
              description:
                "Optional parameter to specify start of time range, in the format defined by RFC3339",
              args: { name: "datetime" },
            },
            {
              name: "--time-end",
              description:
                "Optional parameter to specify end of time range, in the format defined by RFC3339",
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete the scheduled task",
          options: [
            optNamespaceName2,
            optScheduledTaskId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get the scheduled task for the specified task identifier",
          options: [optNamespaceName2, optScheduledTaskId, optFromJson],
        },
        {
          name: "list",
          description: "Lists scheduled tasks",
          options: [
            optNamespaceName2,
            {
              name: "--task-type",
              description: "Required parameter to specify schedule task type",
              args: { suggestions: ["SAVED_SEARCH", "ACCELERATION", "PURGE"] },
              isRequired: true,
            },
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the given display name exactly",
              args: { name: "display-name" },
            },
            optSortOrder,
            optSortBy2,
            {
              name: "--template-id",
              description:
                "A filter to return only scheduled tasks whose stream action templateId matches the given id exactly",
              args: { name: "template-id" },
            },
            {
              name: "--saved-search-id",
              description:
                "A filter to return only scheduled tasks whose stream action savedSearchId matches the given",
              args: { name: "saved-search-id" },
            },
            {
              name: "--display-name-contains",
              description:
                "A filter to return only resources whose display name contains the substring",
              args: { name: "display-name-contains" },
            },
            {
              name: "--target-service",
              description: "The target service to use for filtering",
              args: { name: "target-service" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "pause",
          description:
            "Pause the scheduled task specified by {scheduledTaskId}",
          options: [
            optNamespaceName2,
            optScheduledTaskId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "resume",
          description:
            "Resume the scheduled task specified by {scheduledTaskId}",
          options: [
            optNamespaceName2,
            optScheduledTaskId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "run",
          description:
            "Execute the saved search acceleration task in the foreground",
          options: [
            optNamespaceName2,
            optScheduledTaskId,
            {
              name: "--time-start",
              description:
                "Optional parameter to specify start of time range, in the format defined by RFC3339",
              args: { name: "datetime" },
            },
            {
              name: "--time-end",
              description:
                "Optional parameter to specify end of time range, in the format defined by RFC3339",
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
        {
          name: "verify",
          description:
            "Verify the accelerated saved search task specified by {scheduledTaskId}",
          options: [
            optNamespaceName2,
            optScheduledTaskId,
            {
              name: "--should-include-results",
              description:
                "Optional parameter to specify whether to include acceleration results",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create-acceleration-task",
          description: "Schedule a task as specified and return task info",
          options: [
            optNamespaceName2,
            optCompartmentId2,
            {
              name: "--saved-search-id",
              description:
                "The ManagementSavedSearch id OCID to be accelerated",
              args: { name: "saved-search-id" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-standard-task",
          description: "Schedule a task as specified and return task info",
          options: [
            optNamespaceName2,
            optCompartmentId2,
            {
              name: "--task-type",
              description: "Task type",
              args: { suggestions: ["SAVED_SEARCH", "ACCELERATION", "PURGE"] },
              isRequired: true,
            },
            { name: "--action", args: { name: "json" }, isRequired: true },
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--schedules",
              description: "Schedules, typically a single schedule",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update the scheduled task",
          options: [
            optNamespaceName2,
            optScheduledTaskId,
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--schedules",
              description:
                "Schedules may be updated for task types SAVED_SEARCH and PURGE",
              args: { name: "json" },
            },
            { name: "--action", args: { name: "json" } },
            optIfMatch,
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
      name: "upload",
      description:
        "Upload is a container that can be used to put all the relevant and related on-demand upload based log files",
      subcommands: [
        {
          name: "delete",
          description: "Deletes an Upload by its reference",
          options: [
            optNamespaceName2,
            optUploadReference,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "delete-upload-file",
          description:
            "Deletes a specific log file inside an upload by upload file reference",
          options: [
            optNamespaceName2,
            optUploadReference,
            {
              name: "--file-reference",
              description: "Unique internal identifier to refer upload file",
              args: { name: "file-reference" },
              isRequired: true,
            },
            optForce,
            optFromJson,
          ],
        },
        {
          name: "delete-upload-warning",
          description: "Suppresses a specific warning inside an upload",
          options: [
            optNamespaceName2,
            optUploadReference,
            {
              name: "--warning-reference",
              description: "Unique internal identifier to refer upload warning",
              args: { name: "warning-reference" },
              isRequired: true,
            },
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets an On-Demand Upload info by reference",
          options: [optNamespaceName2, optUploadReference, optFromJson],
        },
        {
          name: "list-upload-files",
          description:
            "Gets list of files in an upload along with its processing state",
          options: [
            optNamespaceName2,
            optUploadReference,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "timeStarted",
                  "name",
                  "logGroupName",
                  "sourceName",
                  "status",
                  "timeCreated",
                  "fileName",
                  "logGroup",
                ],
              },
            },
            {
              name: "--search-str",
              description:
                "This can be used to filter upload files based on the file, log group and log source names",
              args: { name: "search-str" },
            },
            {
              name: "--status",
              description: "Upload File processing state",
              args: { suggestions: ["IN_PROGRESS", "SUCCESSFUL", "FAILED"] },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-upload-warnings",
          description:
            "Gets list of warnings in an upload caused by incorrect configuration",
          options: [
            optNamespaceName2,
            optUploadReference,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of all On-demand uploads",
          options: [
            optNamespaceName2,
            {
              name: "--name",
              description: "Name of the upload container",
              args: { name: "name" },
            },
            {
              name: "--name-contains",
              description:
                "A filter to return only uploads whose name contains the given name",
              args: { name: "name-contains" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeUpdated", "timeCreated", "name"] },
            },
            {
              name: "--warnings-filter",
              description: "Use this for filtering uploads w.r.t warnings",
              args: {
                suggestions: ["WITH_WARNINGS", "WITHOUT_WARNINGS", "ALL"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "upload-log-events-file",
          description: "Accepts log events for processing by Log Analytics",
          options: [
            optNamespaceName2,
            {
              name: "--log-group-id",
              description:
                "The log group OCID that gets mapped to the uploaded logs",
              args: { name: "log-group-id" },
              isRequired: true,
            },
            optLogSet,
            {
              name: "--payload-type",
              description: "Identifies the type of request payload",
              args: { suggestions: ["JSON", "GZIP", "ZIP"] },
            },
            optContentType,
            optOpcMetaProperties,
            optExpect,
            {
              name: "--file",
              description: "Log data file",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "upload-log-file",
          description: "Accepts log data for processing by Log Analytics",
          options: [
            optNamespaceName2,
            {
              name: "--log-source-name",
              description:
                "Name of the log source that will be used to process the files being uploaded",
              args: { name: "log-source-name" },
              isRequired: true,
            },
            optFilename,
            {
              name: "--opc-meta-loggrpid",
              description:
                "The log group OCID to which the log data in this upload will be mapped to",
              args: { name: "opc-meta-loggrpid" },
              isRequired: true,
            },
            {
              name: "--upload-name",
              description: "The name of the upload",
              args: { name: "upload-name" },
            },
            optEntityId2,
            optTimezone,
            {
              name: "--char-encoding",
              description:
                "Character encoding to be used to detect the encoding type of file(s) being uploaded",
              args: { name: "char-encoding" },
            },
            {
              name: "--date-format",
              description:
                "This property is used to specify the format of the date",
              args: { name: "date-format" },
            },
            {
              name: "--date-year",
              description:
                "Used to indicate the year where the log entries timestamp do not mention year (Ex: Nov 8 20:45:56)",
              args: { name: "date-year" },
            },
            {
              name: "--invalidate-cache",
              description:
                "This property can be used to reset configuration cache in case of an issue with the upload",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--content-md5",
              description: "The base-64 encoded MD5 hash of the body",
              args: { name: "content-md5" },
            },
            optContentType,
            optLogSet,
            optExpect,
            {
              name: "--file",
              description: "Log data file",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "upload-otlp-logs",
          description: "Accepts log data in OTLP JSON-encoded Protobuf format",
          options: [
            optNamespaceName,
            {
              name: "--opc-meta-loggrpid",
              description:
                "The log group OCID to which the log data in this upload will be mapped to",
              args: { name: "opc-meta-loggrpid" },
              isRequired: true,
            },
            optLogSet,
            optContentType,
            optOpcMetaProperties,
            optExpect,
            {
              name: "--file",
              description:
                "Accepts log data in OTLP JSON-encoded Protobuf format",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "validate-file",
          description:
            "Validates a log file to check whether it is eligible to be uploaded or not",
          options: [
            optNamespaceName2,
            {
              name: "--object-location",
              description: "Location of the log file",
              args: { name: "object-location" },
              isRequired: true,
            },
            optFilename,
            optFromJson,
          ],
        },
        {
          name: "validate-source-mapping",
          description:
            "Validates the source mapping for a given file and provides match status and the parsed representation of log",
          options: [
            optNamespaceName2,
            {
              name: "--object-location",
              description: "Location of the log file",
              args: { name: "object-location" },
              isRequired: true,
            },
            optFilename,
            {
              name: "--log-source-name",
              description:
                "Name of the log source that will be used to process the files being uploaded",
              args: { name: "log-source-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-unprocessed-bucket",
          description:
            "This API retrieves details of the configured bucket that stores unprocessed payloads",
          options: [optNamespaceName2, optFromJson],
        },
        {
          name: "set-unprocessed-bucket",
          description:
            "This API configures a bucket to store unprocessed payloads",
          options: [
            optNamespaceName2,
            {
              name: "--bucket-name",
              description: "Name of the Object Storage bucket",
              args: { name: "bucket-name" },
              isRequired: true,
            },
            {
              name: "--is-enabled",
              description: "The enabled flag used for filtering",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "rule",
      description:
        "A generic rule object - represents an ingest time rule or a scheduled task",
      subcommands: [
        {
          name: "get-rules-summary",
          description: "Returns the count of detection rules in a compartment",
          options: [optNamespaceName, optCompartmentId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of ingest time rules and scheduled tasks in a compartment",
          options: [
            optNamespaceName,
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return rules whose displayName matches in whole or in part the specified value",
              args: { name: "display-name" },
            },
            {
              name: "--kind",
              description: "The rule kind used for filtering",
              args: { suggestions: ["INGEST_TIME", "SAVED_SEARCH", "ALL"] },
            },
            {
              name: "--target-service",
              description: "The target service to use for filtering",
              args: { name: "target-service" },
            },
            {
              name: "--lifecycle-state",
              description: "The rule lifecycle state used for filtering",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "storage",
      description:
        "This is the storage configuration and status of a tenancy in Log Analytics application",
      subcommands: [
        {
          name: "assign-encryption-key",
          description:
            "This API submits a work request to assign customer encryption key",
          options: [
            optNamespaceName,
            {
              name: "--key-id",
              description: "This is the key OCID for encryption key",
              args: { name: "key-id" },
              isRequired: true,
            },
            {
              name: "--key-type",
              description: "This is the type of data to be encrypted",
              args: { suggestions: ["ACTIVE_DATA", "ARCHIVAL_DATA", "ALL"] },
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
          name: "disable-archiving",
          description: "This API disables archiving",
          options: [optNamespaceName, optIfMatch, optFromJson],
        },
        {
          name: "enable-archiving",
          description: "THis API enables archiving",
          options: [optNamespaceName, optIfMatch, optFromJson],
        },
        {
          name: "estimate-purge-data-size",
          description:
            "This API estimates the size of data to be purged based on time interval, purge query etc",
          options: [
            optNamespaceName,
            {
              name: "--compartment-id",
              description:
                "This is the compartment OCID under which the data will be purged",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--time-data-ended",
              description: "This is the time before which data will be purged",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--compartment-id-in-subtree",
              description: "If true, purge child compartments data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--purge-query-string",
              description: "This is the solr data filter query, '*' means all",
              args: { name: "purge-query-string" },
            },
            {
              name: "--data-type",
              description: "This is the type of the log data to be purged",
              args: { suggestions: ["LOG", "LOOKUP"] },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "estimate-recall-data-size",
          description:
            "This API gives an active storage usage estimate for archived data to be recalled and the time range of such",
          options: [
            optNamespaceName,
            {
              name: "--time-data-started",
              description:
                "This is the start of the time range for the data to be recalled",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-data-ended",
              description:
                "This is the end of the time range for the data to be recalled",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--log-sets",
              description:
                "This is the list of logsets to be accounted for in the recalled data",
              args: { name: "log-sets" },
            },
            {
              name: "--is-recall-new-data-only",
              description:
                "This indicates if only new data has to be recalled in the timeframe",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--collection-id",
              description:
                "This is the existing recalled data collection ID, to be used only for recalling new data",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "estimate-release-data-size",
          description:
            "This API gives an active storage usage estimate for recalled data to be released and the time range of such",
          options: [
            optNamespaceName,
            {
              name: "--time-data-started",
              description:
                "This is the start of the time range for the data to be released",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-data-ended",
              description:
                "This is the end of the time range for the data to be released",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description:
                "This is the id for the recalled data collection to be released",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "get-log-sets-count",
          description: "This API returns the count of distinct log sets",
          options: [optNamespaceName, optFromJson],
        },
        {
          name: "get-recall-count",
          description:
            "This API gets the number of recalls made and the maximum recalls that can be made",
          options: [optNamespaceName, optFromJson],
        },
        {
          name: "get-recalled-data-size",
          description:
            "This API gets the datasize of recalls for a given timeframe",
          options: [
            optNamespaceName,
            {
              name: "--time-data-started",
              description:
                "This is the start of the time range for recalled data",
              args: { name: "datetime" },
            },
            {
              name: "--time-data-ended",
              description:
                "This is the end of the time range for recalled data",
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "This API gets the storage configuration of a tenancy",
          options: [optNamespaceName, optFromJson],
        },
        {
          name: "get-storage-usage",
          description: "This API gets storage usage information of a tenancy",
          options: [optNamespaceName, optFromJson],
        },
        {
          name: "get-storage-work-request",
          description:
            "This API returns work request details specified by {workRequestId}",
          options: [optWorkRequestId, optNamespaceName, optFromJson],
        },
        {
          name: "list-encryption-key-info",
          description:
            "This API returns the list of customer owned encryption key info",
          options: [optNamespaceName, optAll, optFromJson],
        },
        {
          name: "list-log-sets",
          description: "This API returns a list of log sets",
          options: [
            optNamespaceName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--log-set-name-contains",
              description:
                "If this filter is present, each of the logsets returned must contain the value of this filter",
              args: { name: "log-set-name-contains" },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-overlapping-recalls",
          description:
            "This API gets the list of overlapping recalls made in the given timeframe",
          options: [
            optNamespaceName,
            optLimit,
            optPage,
            optSortBy4,
            optSortOrder,
            {
              name: "--time-data-started",
              description:
                "This is the start of the time range for recalled data",
              args: { name: "datetime" },
            },
            {
              name: "--time-data-ended",
              description:
                "This is the end of the time range for recalled data",
              args: { name: "datetime" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-recalled-data",
          description:
            "This API returns the list of recalled data of a tenancy",
          options: [
            optNamespaceName,
            optLimit,
            optPage,
            optSortBy4,
            optSortOrder,
            {
              name: "--time-data-started-greater-than-or-equal",
              description:
                "This is the start of the time range for recalled data",
              args: { name: "datetime" },
            },
            {
              name: "--time-data-ended-less-than",
              description:
                "This is the end of the time range for recalled data",
              args: { name: "datetime" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-recalled-info",
          description:
            "This API returns the list of recalled data of a tenancy",
          options: [
            optNamespaceName,
            optLimit,
            optPage,
            optSortBy4,
            optSortOrder,
            {
              name: "--time-data-started-greater-than-or-equal",
              description:
                "This is the start of the time range for recalled data",
              args: { name: "datetime" },
            },
            {
              name: "--time-data-ended-less-than",
              description:
                "This is the end of the time range for recalled data",
              args: { name: "datetime" },
            },
            {
              name: "--log-sets",
              description:
                "This is the set of logsets to filter recalled collection by if any",
              args: { name: "log-sets" },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-storage-work-request-errors",
          description:
            "This API returns the list of work request errors if any",
          options: [
            optCompartmentId,
            optWorkRequestId,
            optNamespaceName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-storage-work-requests",
          description: "This API lists storage work requests",
          options: [
            optCompartmentId,
            optNamespaceName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "This is the query parameter of which field to sort by",
              args: {
                suggestions: ["timeAccepted", "timeExpires", "timeFinished"],
              },
            },
            {
              name: "--operation-type",
              description: "The is the work request type query parameter",
              args: {
                suggestions: [
                  "OFFBOARD_TENANCY",
                  "PURGE_STORAGE_DATA",
                  "RECALL_ARCHIVED_STORAGE_DATA",
                  "RELEASE_RECALLED_STORAGE_DATA",
                  "PURGE_ARCHIVAL_DATA",
                  "ARCHIVE_STORAGE_DATA",
                  "CLEANUP_ARCHIVAL_STORAGE_DATA",
                  "ENCRYPT_ACTIVE_DATA",
                  "ENCRYPT_ARCHIVAL_DATA",
                  "ENCRYPT_ALL_DATA",
                ],
              },
            },
            {
              name: "--status",
              description: "The is the work request status query parameter",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "CANCELED",
                  "FAILED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                ],
              },
            },
            {
              name: "--time-started",
              description:
                "The is the query parameter of when the processing of work request was started",
              args: { name: "datetime" },
            },
            {
              name: "--time-finished",
              description:
                "The is the query parameter of when the processing of work request was finished",
              args: { name: "datetime" },
            },
            {
              name: "--policy-name",
              description: "This is the query parameter of purge policy name",
              args: { name: "policy-name" },
            },
            {
              name: "--policy-id",
              description: "This is the query parameter of purge policy ID",
              args: { name: "policy-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "purge-storage-data",
          description: "This API submits a work request to purge data",
          options: [
            optNamespaceName,
            {
              name: "--compartment-id",
              description:
                "This is the compartment OCID under which the data will be purged and required permission will be checked",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--time-data-ended",
              description: "This is the end of the purge time interval",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--compartment-id-in-subtree",
              description: "If true, purge child compartments data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--purge-query-string",
              description:
                "This is the solr query used to filter data, '*' means all",
              args: { name: "purge-query-string" },
            },
            {
              name: "--data-type",
              description: "This is the type of the log data to be purged",
              args: { suggestions: ["LOG", "LOOKUP"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "recall-archived-data",
          description:
            "This API submits a work request to recall archived data based on time interval and data type",
          options: [
            optNamespaceName,
            {
              name: "--compartment-id",
              description:
                "This is the compartment OCID for permission checking",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--time-data-ended",
              description: "This is the end of the time interval",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-data-started",
              description: "This is the start of the time interval",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--data-type",
              description: "This is the type of the log data to be recalled",
              args: { suggestions: ["LOG", "LOOKUP"] },
            },
            {
              name: "--log-sets",
              description:
                "This is a list of comma-separated log sets that recalled data belongs to",
              args: { name: "log-sets" },
            },
            {
              name: "--purpose",
              description: "This is the purpose of the recall",
              args: { name: "purpose" },
            },
            {
              name: "--is-recall-new-data-only",
              description:
                "This indicates if only new data has to be recalled in this recall request",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-use-recommended-data-set",
              description:
                "This indicates if user checked system recommended time range",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--collection-id",
              description:
                "This is the id for the recalled data collection to be used only for recall new data",
              args: { name: "integer" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--query-string",
              description:
                "This is the query that identifies the recalled data",
              args: { name: "query-string" },
            },
            optFromJson,
          ],
        },
        {
          name: "release-recalled-data",
          description:
            "This API submits a work request to release recalled data based on time interval and data type",
          options: [
            optNamespaceName,
            {
              name: "--compartment-id",
              description:
                "This is the compartment OCID for permission checking",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--time-data-ended",
              description: "This is the end of the time interval",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-data-started",
              description: "This is the start of the time interval",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--data-type",
              description:
                "This is the type of the recalled data to be released",
              args: { suggestions: ["LOG", "LOOKUP"] },
            },
            {
              name: "--collection-id",
              description:
                "This is the id for the recalled data collection to be released",
              args: { name: "integer" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "This API updates the archiving configuration",
          options: [
            optNamespaceName,
            {
              name: "--archiving-configuration",
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
    {
      name: "work-request",
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optNamespaceName, optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optNamespaceName,
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
      name: "work-request-log",
      description: "This is a log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optNamespaceName,
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
      name: "char-encoding-collection",
      description: "List of supported character encodings",
      subcommands: [
        {
          name: "list-supported-encodings",
          description:
            "Gets list of character encodings which are supported by on-demand upload",
          options: [
            optNamespaceName2,
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
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of errors for a given work request",
          options: [
            optNamespaceName,
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
      name: "query-work-request",
      description:
        "Job details outlining parameters specified when job was submitted",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel/Remove query job work request",
          options: [
            optNamespaceName2,
            optWorkRequestId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieve work request details by workRequestId",
          options: [optNamespaceName2, optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "List active asynchronous queries",
          options: [
            optNamespaceName2,
            optCompartmentId,
            {
              name: "--mode",
              description: "Filter based on job execution mode",
              args: { suggestions: ["ALL", "FOREGROUND", "BACKGROUND"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeStarted", "timeExpires"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "background",
          description:
            "Put the work request specified by {workRequestId} into the background",
          options: [
            optNamespaceName2,
            optWorkRequestId,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ingest-time-rule",
      description: "An ingest time rule object",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified ingest time rule to a different compartment",
          options: [
            optNamespaceName,
            optIngestTimeRuleId,
            optCompartmentId3,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new ingest time rule in the specified compartment",
          options: [
            optNamespaceName,
            optCompartmentId2,
            {
              name: "--display-name",
              description: "The ingest time rule display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            { name: "--conditions", args: { name: "json" }, isRequired: true },
            {
              name: "--actions",
              description:
                "The action(s) to be performed if the ingest time rule condition(s) are satisfied",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
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
          description: "Deletes the specified ingest time rule",
          options: [
            optNamespaceName,
            optIngestTimeRuleId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "disable",
          description: "Disables the specified ingest time rule",
          options: [
            optNamespaceName,
            optIngestTimeRuleId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable",
          description: "Enables the specified ingest time rule",
          options: [
            optNamespaceName,
            optIngestTimeRuleId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets detailed information about the specified ingest time rule such as description, defined tags",
          options: [optNamespaceName, optIngestTimeRuleId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of ingest time rules in a compartment",
          options: [
            optNamespaceName,
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return rules whose displayName matches in whole or in part the specified value",
              args: { name: "display-name" },
            },
            {
              name: "--lifecycle-state",
              description: "The rule lifecycle state used for filtering",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            {
              name: "--condition-kind",
              description:
                "The ingest time rule condition kind used for filtering",
              args: { suggestions: ["FIELD"] },
            },
            {
              name: "--field-name",
              description: "The field name used for filtering",
              args: { name: "field-name" },
            },
            {
              name: "--field-value",
              description: "The field value used for filtering",
              args: { name: "field-value" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified ingest time rule's description, defined tags, and free-form tags",
          options: [
            optNamespaceName,
            optIngestTimeRuleId,
            {
              name: "--id",
              description: "The log analytics entity OCID",
              args: { name: "id" },
              isRequired: true,
            },
            optCompartmentId2,
            {
              name: "--display-name",
              description: "The ingest time rule display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--time-created",
              description:
                "The date and time the resource was created, in the format defined by RFC3339",
              args: { name: "datetime" },
            },
            {
              name: "--time-updated",
              description:
                "The date and time the resource was last updated, in the format defined by RFC3339",
              args: { name: "datetime" },
            },
            {
              name: "--lifecycle-state",
              description: "The current state of the ingest time rule",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            {
              name: "--is-enabled",
              description:
                "A flag indicating whether or not the ingest time rule is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--conditions", args: { name: "json" } },
            {
              name: "--actions",
              description:
                "The action(s) to be performed if the ingest time rule condition(s) are satisfied",
              args: { name: "json" },
            },
            optIfMatch,
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
      name: "namespace",
      description:
        "This is the namespace details of a tenancy in Log Analytics application",
      subcommands: [
        {
          name: "get",
          description:
            "This API gets the namespace details of a tenancy already onboarded in Log Analytics Application",
          options: [optNamespaceName, optFromJson],
        },
        {
          name: "list",
          description:
            "Given a tenancy OCID, this API returns the namespace of the tenancy if it is valid and subscribed to",
          options: [
            optCompartmentId,
            {
              name: "--is-compartment-delete",
              description:
                "If true, the request is from compartment delete service",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optFromJson,
          ],
        },
        {
          name: "offboard",
          description: "Off-boards a tenant from Log Analytics",
          options: [
            optNamespaceName,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "onboard",
          description: "On-boards a tenant to Log Analytics",
          options: [
            optNamespaceName,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "timezone-collection",
      description: "List of supported timezones",
      subcommands: [
        {
          name: "list-supported-timezones",
          description:
            "Gets list of timezones which are supported by on-demand upload",
          options: [
            optNamespaceName2,
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
      name: "query",
      description: "Input arguments for running a log anlaytics query",
      subcommands: [
        {
          name: "compare-content",
          description:
            "Returns the difference between the two input payloads, including intraline differences",
          options: [
            optNamespaceName2,
            {
              name: "--content1",
              description: "The first of two strings to compare",
              args: { name: "content1" },
            },
            {
              name: "--content2",
              description: "The second of two strings to compare",
              args: { name: "content2" },
            },
            optFromJson,
          ],
        },
        {
          name: "filter",
          description:
            "Each filter specifies an operator, a field and one or more values to be inserted into the provided query",
          options: [
            optNamespaceName2,
            {
              name: "--query-string",
              description: "Query to apply edits to",
              args: { name: "query-string" },
              isRequired: true,
            },
            optSubSystem,
            {
              name: "--filters",
              description:
                "List of edit operations to be applied in the specified order to the specified queryString",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "get-query-result",
          description:
            "Returns the intermediate results for a query that was specified to run asynchronously if the query has not",
          options: [
            optNamespaceName2,
            optWorkRequestId,
            optPage,
            {
              name: "--limit",
              description:
                "Maximum number of results to return in this request",
              args: { name: "integer" },
            },
            optShouldIncludeColumns,
            {
              name: "--should-include-fields",
              description: "Include fields in response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--output-mode",
              description: "Specifies the format for the returned results",
              args: { suggestions: ["JSON_ROWS"] },
            },
            optFromJson,
          ],
        },
        {
          name: "suggest",
          description:
            "Returns a context specific list of either commands, fields",
          options: [
            optNamespaceName2,
            optCompartmentId2,
            {
              name: "--query-string",
              description: "Query seeking suggestions for",
              args: { name: "query-string" },
              isRequired: true,
            },
            optSubSystem,
            optCompartmentIdInSubtree,
            optFromJson,
          ],
        },
        {
          name: "search",
          description:
            "Performs a log analytics search, if shouldRunAsync is false returns the query results once they become",
          options: [
            optNamespaceName2,
            optCompartmentId2,
            {
              name: "--query-string",
              description: "Query to perform",
              args: { name: "query-string" },
              isRequired: true,
            },
            optSubSystem,
            optCompartmentIdInSubtree,
            {
              name: "--max-total-count",
              description: "Maximum number of results to count",
              args: { name: "integer" },
            },
            {
              name: "--scope-filters",
              description:
                "List of filters to be applied when the query executes",
              args: { name: "json" },
            },
            {
              name: "--variables",
              description:
                "List of variables to be prepended to the query string",
              args: { name: "json" },
            },
            {
              name: "--query-timeout-in-seconds",
              description:
                "Amount of time, in seconds, allowed for a query to execute",
              args: { name: "integer" },
            },
            {
              name: "--should-run-async",
              description: "Option to run the query asynchronously",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--async-mode",
              description:
                "Execution mode for the query if running asynchronously i.e (shouldRunAsync is set to true)",
              args: { suggestions: ["FOREGROUND", "BACKGROUND"] },
            },
            {
              name: "--should-include-total-count",
              description: "Include the total number of results from the query",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optShouldIncludeColumns,
            {
              name: "--should-include-fields",
              description: "Include fields in response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--should-use-acceleration",
              description:
                "Controls if query should ignore pre-calculated results if available and only use raw data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optPage,
            {
              name: "--limit",
              description:
                "Maximum number of results to return in this request",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--time-start",
              description: "Date-time for query to start matching results from",
              args: { name: "datetime" },
            },
            {
              name: "--time-end",
              description: "Date-time for query to stop matching results to",
              args: { name: "datetime" },
            },
            {
              name: "--timezone",
              description: "Time zone for query",
              args: { name: "timezone" },
            },
            optFromJson,
          ],
        },
        {
          name: "parse",
          description: "Describe query",
          options: [
            optNamespaceName2,
            {
              name: "--query-string",
              description: "Query to parse",
              args: { name: "query-string" },
              isRequired: true,
            },
            optSubSystem,
            optFromJson,
          ],
        },
        {
          name: "export",
          description: "Export data based on query",
          options: [
            optNamespaceName2,
            optCompartmentId2,
            {
              name: "--query-string",
              description: "Query to perform",
              args: { name: "query-string" },
              isRequired: true,
            },
            optSubSystem,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optCompartmentIdInSubtree,
            {
              name: "--scope-filters",
              description:
                "List of filters to be applied when the query executes",
              args: { name: "json" },
            },
            {
              name: "--max-total-count",
              description:
                "Maximum number of results retrieved from data source is determined by the specific query used and",
              args: { name: "integer" },
            },
            {
              name: "--query-timeout-in-seconds",
              description:
                "Amount of time, in seconds, allowed for a query to execute",
              args: { name: "integer" },
            },
            optShouldIncludeColumns,
            {
              name: "--output-format",
              description: "Specifies the format for the returned results",
              args: { suggestions: ["CSV", "JSON", "PARQUET"] },
            },
            {
              name: "--should-localize",
              description:
                "Localize results, including header columns, List-Of-Values and timestamp values",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--should-use-acceleration",
              description:
                "Controls if query should ignore pre-calculated results if available and only use raw data",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--time-start",
              description: "Date-time for query to start matching results from",
              args: { name: "datetime" },
            },
            {
              name: "--time-end",
              description: "Date-time for query to stop matching results to",
              args: { name: "datetime" },
            },
            {
              name: "--timezone",
              description: "Time zone for query",
              args: { name: "timezone" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "object-collection-rule",
      description:
        "The configuration details of an Object Storage based collection rule",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move the rule from it's current compartment to the given compartment",
          options: [
            optNamespaceName2,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the rule have to be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optObjectCollectionRuleId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a rule to collect logs from an object storage bucket",
          options: [
            optNamespaceName2,
            {
              name: "--name",
              description: "A unique name given to the rule",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which this rule belongs",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--os-namespace",
              description: "Object Storage namespace",
              args: { name: "os-namespace" },
              isRequired: true,
            },
            {
              name: "--os-bucket-name",
              description: "Name of the Object Storage bucket",
              args: { name: "os-bucket-name" },
              isRequired: true,
            },
            {
              name: "--log-group-id",
              description:
                "Log Analytics Log group OCID to associate the processed logs with",
              args: { name: "log-group-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A string that describes the details of the rule",
              args: { name: "description" },
            },
            {
              name: "--collection-type",
              description: "The type of collection",
              args: { suggestions: ["LIVE", "HISTORIC", "HISTORIC_LIVE"] },
            },
            {
              name: "--poll-since",
              description:
                "The oldest time of the file in the bucket to consider for collection",
              args: { name: "poll-since" },
            },
            {
              name: "--poll-till",
              description:
                "The newest time of the file in the bucket to consider for collection",
              args: { name: "poll-till" },
            },
            {
              name: "--log-source-name",
              description:
                "Name of the Log Analytics Source to use for the processing",
              args: { name: "log-source-name" },
            },
            {
              name: "--entity-id",
              description: "Log Analytics entity OCID",
              args: { name: "entity-id" },
            },
            {
              name: "--char-encoding",
              description:
                "An optional character encoding to aid in detecting the character encoding of the contents of the objects",
              args: { name: "char-encoding" },
            },
            {
              name: "--is-enabled",
              description: "Whether or not this rule is currently enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optTimezone,
            {
              name: "--log-set",
              description:
                "The logSet to be associated with the processed logs",
              args: { name: "log-set" },
            },
            {
              name: "--log-set-key",
              description:
                "An optional parameter to indicate from where the logSet to be extracted using logSetExtRegex. Default value",
              args: { suggestions: ["OBJECT_PATH"] },
            },
            {
              name: "--log-set-ext-regex",
              description: "The regex to be applied against given logSetKey",
              args: { name: "log-set-ext-regex" },
            },
            {
              name: "--overrides",
              description:
                "The override is used to modify some important configuration properties for objects matching a specific",
              args: { name: "json" },
            },
            {
              name: "--object-name-filters",
              description:
                "When the filters are provided, only the objects matching the filters are picked up for processing",
              args: { name: "json" },
            },
            {
              name: "--log-type",
              description:
                "Type of files/objects in this object collection rule",
              args: { suggestions: ["LOG", "LOG_EVENTS"] },
            },
            {
              name: "--is-force-historic-collection",
              description:
                "Flag to allow historic collection if poll period overlaps with existing ACTIVE collection rule",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--stream-id",
              description:
                "A Stream OCID is required for Object Collection rules of type LIVE or HISTORIC_LIVE",
              args: { name: "stream-id" },
            },
            {
              name: "--stream-cursor-type",
              description: "Cursor type used to fetch messages from stream",
              args: {
                suggestions: ["DEFAULT", "TRIM_HORIZON", "LATEST", "AT_TIME"],
              },
            },
            {
              name: "--stream-cursor-time",
              description:
                "The time from which to consume the objects, if streamCursorType is AT_TIME",
              args: { name: "datetime" },
            },
            optDefinedTags,
            optFreeformTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "DELETED", "INACTIVE"] },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the configured object storage bucket based collection rule and stop the log collection",
          options: [
            optNamespaceName2,
            optIfMatch,
            optForce,
            optObjectCollectionRuleId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets a configured object storage based collection rule by given id",
          options: [optNamespaceName2, optObjectCollectionRuleId, optFromJson],
        },
        {
          name: "list",
          description: "Gets list of collection rules",
          options: [
            optNamespaceName2,
            optCompartmentId,
            {
              name: "--name",
              description:
                "A filter to return rules only matching with this name",
              args: { name: "name" },
            },
            {
              name: "--lifecycle-state",
              description: "Lifecycle state filter",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeUpdated", "timeCreated", "name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates configuration of the object collection rule for the given id",
          options: [
            optNamespaceName2,
            {
              name: "--description",
              description: "A string that describes the details of the rule",
              args: { name: "description" },
            },
            {
              name: "--log-group-id",
              description:
                "Log Analytics Log group OCID to associate the processed logs with",
              args: { name: "log-group-id" },
            },
            {
              name: "--log-source-name",
              description:
                "Name of the Log Analytics Source to use for the processing",
              args: { name: "log-source-name" },
            },
            {
              name: "--entity-id",
              description: "Log Analytics entity OCID",
              args: { name: "entity-id" },
            },
            {
              name: "--char-encoding",
              description:
                "An optional character encoding to aid in detecting the character encoding of the contents of the objects",
              args: { name: "char-encoding" },
            },
            {
              name: "--is-enabled",
              description: "Whether or not this rule is currently enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optTimezone,
            {
              name: "--log-set",
              description:
                "The logSet to be associated with the processed logs",
              args: { name: "log-set" },
            },
            {
              name: "--log-set-key",
              description:
                "An optional parameter to indicate from where the logSet to be extracted using logSetExtRegex. Default value",
              args: { suggestions: ["OBJECT_PATH"] },
            },
            {
              name: "--log-set-ext-regex",
              description: "The regex to be applied against given logSetKey",
              args: { name: "log-set-ext-regex" },
            },
            {
              name: "--overrides",
              description:
                "Use this to override some property values which are defined at bucket level to the scope of object",
              args: { name: "json" },
            },
            {
              name: "--object-name-filters",
              description:
                "When the filters are provided, only the objects matching the filters are picked up for processing",
              args: { name: "json" },
            },
            {
              name: "--stream-id",
              description:
                "A Stream OCID is required for Object Collection rules of type LIVE or HISTORIC_LIVE",
              args: { name: "stream-id" },
            },
            {
              name: "--stream-cursor-type",
              description: "Cursor type used to fetch messages from stream",
              args: {
                suggestions: ["DEFAULT", "TRIM_HORIZON", "LATEST", "AT_TIME"],
              },
            },
            {
              name: "--stream-cursor-time",
              description:
                "The time from which to consume the objects, if streamCursorType is AT_TIME",
              args: { name: "datetime" },
            },
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            optForce2,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "DELETED", "INACTIVE"] },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optObjectCollectionRuleId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "entity-type",
      description: "Description of log analytics entity type",
      subcommands: [
        {
          name: "create",
          description: "Add custom log analytics entity type",
          options: [
            optNamespaceName2,
            optName2,
            {
              name: "--category",
              description: "Log analytics entity type category",
              args: { name: "category" },
            },
            {
              name: "--properties",
              description: "Log analytics entity type property definition",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete log analytics entity type with the given name",
          options: [
            optNamespaceName2,
            optIfMatch,
            optForce,
            optName2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieve the log analytics entity type with the given name",
          options: [optNamespaceName2, optName2, optFromJson],
        },
        {
          name: "list",
          description: "Return a list of log analytics entity types",
          options: [
            optNamespaceName2,
            {
              name: "--name",
              description:
                "A filter to return only log analytics entity types whose name matches the entire name given",
              args: { name: "name" },
            },
            {
              name: "--name-contains",
              description:
                "A filter to return only log analytics entity types whose name or internalName contains name given",
              args: { name: "name-contains" },
            },
            {
              name: "--cloud-type",
              description: "A filter to return CLOUD or NON_CLOUD entity types",
              args: { suggestions: ["CLOUD", "NON_CLOUD", "ALL"] },
            },
            {
              name: ["--lifecycle-state", "-lc"],
              description:
                "A filter to return only those log analytics entities with the specified lifecycle state",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "timeUpdated", "name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update custom log analytics entity type",
          options: [
            optNamespaceName2,
            {
              name: "--category",
              description: "Log analytics entity type category",
              args: { name: "category" },
            },
            {
              name: "--properties",
              description:
                "A single log analytics entity type property definition",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optName2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "entity",
      description: "Description of a log analytics entity",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Update the compartment of the log analytics entity with the given id",
          options: [
            optNamespaceName2,
            optCompartmentId3,
            optIfMatch,
            optEntityId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a new log analytics entity",
          options: [
            optNamespaceName2,
            {
              name: "--name",
              description: "Log analytics entity name",
              args: { name: "name" },
              isRequired: true,
            },
            optCompartmentId2,
            {
              name: "--entity-type-name",
              description: "Log analytics entity type name",
              args: { name: "entity-type-name" },
              isRequired: true,
            },
            {
              name: "--cloud-resource-id",
              description:
                "The OCID of the Cloud resource which this entity is a representation of",
              args: { name: "cloud-resource-id" },
            },
            {
              name: "--timezone-region",
              description: "The timezone region of the log analytics entity",
              args: { name: "timezone-region" },
            },
            {
              name: "--hostname",
              description:
                "The hostname where the entity represented here is actually present",
              args: { name: "hostname" },
            },
            {
              name: "--source-id",
              description: "This indicates the type of source",
              args: { name: "source-id" },
            },
            {
              name: "--properties",
              description:
                "The name/value pairs for parameter values to be used in file patterns specified in log sources",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--time-last-discovered",
              description:
                "The date and time the resource was last discovered, in the format defined by RFC3339",
              args: { name: "datetime" },
            },
            optMetadata,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--agent-id",
              description: "The OCID of the Management Agent",
              args: { name: "agent-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete log analytics entity with the given id",
          options: [
            optNamespaceName2,
            optIfMatch,
            {
              name: "--is-force-delete",
              description:
                "Option to delete entity even if the entity is associated with a log source and stop any log collections",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce,
            optEntityId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieve the log analytics entity with the given id",
          options: [
            optNamespaceName2,
            optEntityId,
            {
              name: "--is-show-assoc-src-count",
              description:
                "Option to return count of associated log sources for log analytics entity(s)",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Return a list of log analytics entities",
          options: [
            optNamespaceName2,
            optCompartmentId,
            optName,
            {
              name: "--name-contains",
              description:
                "A filter to return only log analytics entities whose name contains the name given",
              args: { name: "name-contains" },
            },
            {
              name: "--entity-type-name",
              description:
                "A filter to return only log analytics entities whose entityTypeName matches the entire log analytics entity",
              args: { name: "entity-type-name" },
              isRepeatable: true,
            },
            {
              name: "--cloud-resource-id",
              description:
                "A filter to return only log analytics entities whose cloudResourceId matches the cloudResourceId given",
              args: { name: "cloud-resource-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only those log analytics entities with the specified lifecycle state",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            {
              name: "--lifecycle-details-contains",
              description:
                "A filter to return only log analytics entities whose lifecycleDetails contains the specified string",
              args: { name: "lifecycle-details-contains" },
            },
            {
              name: "--hostname",
              description:
                "A filter to return only log analytics entities whose hostname matches the entire hostname given",
              args: { name: "hostname" },
            },
            {
              name: "--hostname-contains",
              description:
                "A filter to return only log analytics entities whose hostname contains the substring given",
              args: { name: "hostname-contains" },
            },
            {
              name: "--source-id",
              description:
                "A filter to return only log analytics entities whose sourceId matches the sourceId given",
              args: { name: "source-id" },
            },
            {
              name: "--creation-source-type",
              description:
                "A filter to return only those log analytics entities with the specified auto-creation source",
              args: {
                suggestions: [
                  "EM_BRIDGE",
                  "BULK_DISCOVERY",
                  "SERVICE_CONNECTOR_HUB",
                  "DISCOVERY",
                  "LOGGING_ANALYTICS",
                  "NONE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--creation-source-details",
              description:
                "A filter to return only log analytics entities whose auto-creation source details contains the specified",
              args: { name: "creation-source-details" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            {
              name: "--metadata-equals",
              description:
                "A filter to return only log analytics entities whose metadata name",
              args: { name: "metadata-equals" },
              isRepeatable: true,
            },
            {
              name: "--defined-tag-equals",
              description: "A list of tag filters to apply",
              args: { name: "defined-tag-equals" },
              isRepeatable: true,
            },
            {
              name: "--freeform-tag-equals",
              description: "A list of tag filters to apply",
              args: { name: "freeform-tag-equals" },
              isRepeatable: true,
            },
            {
              name: "--defined-tag-exists",
              description: "A list of tag existence filters to apply",
              args: { name: "defined-tag-exists" },
              isRepeatable: true,
            },
            {
              name: "--freeform-tag-exists",
              description: "A list of tag existence filters to apply",
              args: { name: "freeform-tag-exists" },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            {
              name: "--is-show-assoc-src-count",
              description:
                "Option to return count of associated log sources for log analytics entity(s)",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-agent-id-null",
              description:
                "A filter to return only those log analytics entities whose managementAgentId is null or is not null",
              args: { suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update the log analytics entity with the given id",
          options: [
            optNamespaceName2,
            {
              name: "--name",
              description: "Log analytics entity name",
              args: { name: "name" },
            },
            {
              name: "--timezone-region",
              description: "The timezone region of the log analytics entity",
              args: { name: "timezone-region" },
            },
            {
              name: "--hostname",
              description:
                "The hostname where the entity represented here is actually present",
              args: { name: "hostname" },
            },
            {
              name: "--properties",
              description:
                "The name/value pairs for parameter values to be used in file patterns specified in log sources",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--time-last-discovered",
              description:
                "The date and time the resource was last discovered, in the format defined by RFC3339",
              args: { name: "datetime" },
            },
            optMetadata,
            {
              name: "--cloud-resource-id",
              description:
                "The OCID of the Cloud resource which this entity is a representation of",
              args: { name: "cloud-resource-id" },
            },
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optEntityId,
            {
              name: "--agent-id",
              description: "The OCID of the Management Agent",
              args: { name: "agent-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "upload-discovery-data",
          description: "Accepts discovery data for processing by Log Analytics",
          options: [
            optNamespaceName,
            optOpcMetaProperties,
            {
              name: "--discovery-data-type",
              description: "Discovery data type",
              args: { suggestions: ["ENTITY", "K8S_OBJECTS"] },
            },
            {
              name: "--log-group-id",
              description:
                "The log group OCID that gets mapped to the logs in the discovery data",
              args: { name: "log-group-id" },
            },
            {
              name: "--payload-type",
              description: "Identifies the type of request payload",
              args: { suggestions: ["JSON", "GZIP", "ZIP"] },
            },
            optContentType,
            optExpect,
            {
              name: "--file",
              description: "Discovery data file",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "add-associations",
          description:
            "Adds association between input source log analytics entity and one or more existing destination entities",
          options: [
            optNamespaceName2,
            {
              name: "--association-entities",
              description:
                "Destination entities OCIDs with which associations are to be added",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optEntityId,
            optFromJson,
          ],
        },
        {
          name: "list-associations",
          description:
            "Return a list of log analytics entities associated with input source log analytics entity",
          options: [
            optNamespaceName2,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optEntityId,
            {
              name: "--direct-or-all",
              description:
                "Indicates whether to return direct associated entities or direct and inferred associated entities",
              args: { suggestions: ["DIRECT", "ALL"] },
            },
            optFromJson,
          ],
        },
        {
          name: "remove-associations",
          description:
            "Delete association between input source log analytics entity and destination entities",
          options: [
            optNamespaceName2,
            {
              name: "--association-entities",
              description:
                "Destination entities OCIDs with which associations are to be deleted",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optEntityId,
            optFromJson,
          ],
        },
        {
          name: "summary",
          description: "Returns log analytics entities count summary report",
          options: [optNamespaceName2, optCompartmentId, optFromJson],
        },
      ],
    },
    {
      name: "em-bridge",
      description: "Configuration details for enterprise manager bridge",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Update the compartment of the log analytics enterprise manager bridge with the given id",
          options: [
            optNamespaceName2,
            optCompartmentId3,
            optIfMatch,
            optBridgeId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Add configuration for enterprise manager bridge",
          options: [
            optNamespaceName2,
            {
              name: "--display-name",
              description:
                "Log analytics enterprise manager bridge display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            optCompartmentId2,
            {
              name: "--em-entities-compartment-id",
              description:
                "Compartment for entities created from enterprise manager",
              args: { name: "em-entities-compartment-id" },
              isRequired: true,
            },
            {
              name: "--bucket-name",
              description:
                "Object store bucket name where enterprise manager harvested entities will be uploaded",
              args: { name: "bucket-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "A description for log analytics enterprise manager bridge",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETED",
                  "NEEDS_ATTENTION",
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
          description:
            "Delete log analytics enterprise manager bridge with the given id",
          options: [
            optNamespaceName2,
            optIfMatch,
            {
              name: "--is-delete-entities",
              description: "If true, delete entities created by this bridge",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce,
            optBridgeId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieve the log analytics enterprise manager bridge with the given id",
          options: [optNamespaceName2, optBridgeId, optFromJson],
        },
        {
          name: "list",
          description:
            "Return a list of log analytics enterprise manager bridges",
          options: [
            optNamespaceName2,
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return only log analytics enterprise manager bridge name whose name matches the entire name given",
              args: { name: "display-name" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only log analytics enterprise manager bridges matching all the lifecycle states specified",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETED",
                  "NEEDS_ATTENTION",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-details-contains",
              description:
                "A filter to return only log analytics enterprise manager bridges whose lifecycleDetails contains",
              args: { name: "lifecycle-details-contains" },
            },
            {
              name: "--import-status",
              description:
                "Filter by the processing status of the latest upload from enterprise manager",
              args: {
                suggestions: [
                  "NOT_STARTED",
                  "SUCCESS",
                  "IN_PROGRESS",
                  "FAILED",
                  "PARTIAL_SUCCESS",
                ],
              },
              isRepeatable: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort enterprise manager bridges by",
              args: {
                suggestions: ["timeCreated", "timeUpdated", "displayName"],
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
            "Update log analytics enterprise manager bridge with the given id",
          options: [
            optNamespaceName2,
            {
              name: "--display-name",
              description:
                "Log analytics enterprise manager bridge display name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "A description for log analytics enterprise manager bridge",
              args: { name: "description" },
            },
            {
              name: "--bucket-name",
              description:
                "Object store bucket name where enterprise manager harvested entities will be uploaded",
              args: { name: "bucket-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETED",
                  "NEEDS_ATTENTION",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optBridgeId,
            optFromJson,
          ],
        },
        {
          name: "summary",
          description:
            "Returns log analytics enterprise manager bridges summary report",
          options: [optNamespaceName2, optCompartmentId, optFromJson],
        },
      ],
    },
    {
      name: "entity-topology",
      description: "Summary of a log analytics entity",
      subcommands: [
        {
          name: "list",
          description:
            "Return a log analytics entity topology collection that contains a set of log analytics entities and a set",
          options: [
            optNamespaceName2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only those log analytics entities with the specified lifecycle state",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            {
              name: "--metadata-equals",
              description:
                "A filter to return only log analytics entities whose metadata name",
              args: { name: "metadata-equals" },
              isRepeatable: true,
            },
            {
              name: "--context",
              description:
                "A filter to return log analytics entity toplogy whose context matches the specified string",
              args: { name: "context" },
            },
            optAll,
            optPageSize,
            optEntityId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "log-group",
      description: "Summary of an Log-Analytics log group",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified log group to a different compartment",
          options: [
            optNamespaceName,
            optCompartmentId3,
            optIfMatch,
            optLogGroupId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new log group in the specified compartment with the input display name",
          options: [
            optNamespaceName,
            {
              name: "--display-name",
              description:
                "A user-friendly name that is changeable and that does not have to be unique",
              args: { name: "display-name" },
              isRequired: true,
            },
            optCompartmentId2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified log group",
          options: [
            optNamespaceName,
            optIfMatch,
            optForce,
            optLogGroupId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets detailed information about the specified log group such as display name, description, defined tags",
          options: [optNamespaceName, optLogGroupId, optFromJson],
        },
        {
          name: "get-log-analytics-log-groups-summary",
          description: "Returns the count of log groups in a compartment",
          options: [optNamespaceName, optCompartmentId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of log groups in a compartment",
          options: [
            optNamespaceName,
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return only log analytics log groups whose displayName matches the entire display name given",
              args: { name: "display-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified log group's display name, description, defined tags, and free-form tags",
          options: [
            optNamespaceName,
            optDisplayName,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optLogGroupId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "label",
      description: "LogAnalytics label",
      subcommands: [
        {
          name: "batch-get-basic-info",
          description:
            "Lists basic information about a specified set of labels in batch",
          options: [
            optNamespaceName,
            {
              name: "--is-include-deleted",
              description:
                "A flag specifying whether or not to include information on deleted labels",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--label-names",
              description: "An array of label names",
              args: { name: "json" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--basic-label-sort-by",
              description: "The attribute used to sort the returned labels",
              args: { suggestions: ["name", "priority"] },
            },
            optFromJson,
          ],
        },
        {
          name: "delete-label",
          description: "Deletes label with the specified name",
          options: [
            optNamespaceName,
            {
              name: "--label-name",
              description: "The label name",
              args: { name: "label-name" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get-label",
          description:
            "Gets detailed information about the label with the specified name",
          options: [
            optNamespaceName,
            {
              name: "--label-name",
              description: "The label name",
              args: { name: "label-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-label-summary",
          description: "Returns the count of labels",
          options: [optNamespaceName, optFromJson],
        },
        {
          name: "list-label-priorities",
          description:
            "Lists the available problem priorities that could be associated with a label",
          options: [
            optNamespaceName,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-label-source-details",
          description:
            "Lists sources using the label, along with configuration details like base field, operator and condition",
          options: [
            optNamespaceName,
            {
              name: "--label-name",
              description: "The label name used for filtering",
              args: { name: "label-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--label-source-sort-by",
              description: "The attribute used to sort the returned sources",
              args: {
                suggestions: ["sourceDisplayName", "labelFieldDisplayName"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-labels",
          description:
            "Returns a list of labels, containing detailed information about them",
          options: [
            optNamespaceName,
            {
              name: "--label-name",
              description: "The label name used for filtering",
              args: { name: "label-name" },
            },
            {
              name: "--label-display-text",
              description: "The label display text used for filtering",
              args: { name: "label-display-text" },
            },
            optIsSystem2,
            {
              name: "--label-priority",
              description: "The label priority used for filtering",
              args: { suggestions: ["NONE", "LOW", "MEDIUM", "HIGH"] },
            },
            {
              name: "--is-count-pop",
              description:
                "A flag indicating whether or not to count the label usage per source and per rule",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-alias-pop",
              description:
                "A flag indicating whether or not return the aliases used by each label",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--label-sort-by",
              description: "The attribute used to sort the returned labels",
              args: {
                suggestions: ["name", "priority", "sourceUsing", "timeUpdated"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "upsert-label",
          description:
            "Creates or updates a label that could be used to tag a log entry",
          options: [
            optNamespaceName,
            {
              name: "--aliases",
              description: "The alias list",
              args: { name: "json" },
            },
            {
              name: "--suggest-type",
              description: "Suggest type",
              args: { name: "integer" },
            },
            {
              name: "--description",
              description: "The label description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The label display name",
              args: { name: "display-name" },
            },
            {
              name: "--edit-version",
              description: "The edit version",
              args: { name: "integer" },
            },
            {
              name: "--impact",
              description: "The label impact",
              args: { name: "impact" },
            },
            optIsSystem,
            {
              name: "--name",
              description: "The label name",
              args: { name: "name" },
            },
            {
              name: "--priority",
              description: "The label priority",
              args: { suggestions: ["NONE", "LOW", "MEDIUM", "HIGH"] },
            },
            {
              name: "--recommendation",
              description: "The label recommendation",
              args: { name: "recommendation" },
            },
            {
              name: "--type",
              description: "The label type",
              args: { suggestions: ["INFO", "PROBLEM"] },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "field",
      description: "Field Details",
      subcommands: [
        {
          name: "delete-field",
          description: "Deletes field with the specified name",
          options: [
            optNamespaceName,
            optFieldName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get-field",
          description:
            "Gets detailed information about the field with the specified name",
          options: [optNamespaceName, optFieldName, optFromJson],
        },
        {
          name: "get-fields-summary",
          description: "Returns the count of fields",
          options: [
            optNamespaceName,
            {
              name: "--is-show-detail",
              description:
                "A boolean indicating whether or not to display detailed field summary information",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "list-fields",
          description:
            "Returns a list of log fields, containing detailed information about them",
          options: [
            optNamespaceName,
            {
              name: "--is-match-all",
              description:
                "A flag indicating how to handle filtering when multiple filter criteria are specified",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--source-ids",
              description: "A list of source IDs used for filtering",
              args: { name: "source-ids" },
            },
            {
              name: "--source-names",
              description: "A list of source names used for filtering",
              args: { name: "source-names" },
            },
            {
              name: "--parser-type",
              description: "The parser type used for filtering",
              args: {
                suggestions: [
                  "ALL",
                  "REGEX",
                  "XML",
                  "JSON",
                  "ODL",
                  "DELIMITED",
                ],
              },
            },
            {
              name: "--parser-ids",
              description: "A list of parser names used for filtering",
              args: { name: "parser-ids" },
            },
            {
              name: "--parser-names",
              description: "A list of parser names used for filtering",
              args: { name: "parser-names" },
            },
            {
              name: "--is-include-parser",
              description: "IsIncludeParser",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--filter",
              description: "Filter",
              args: { name: "filter" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The attribute used to sort the returned fields",
              args: { suggestions: ["name", "dataType", "timeUpdated"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "upsert-field",
          description:
            "Creates or updates a field that could be used in parser expressions to extract and assign value",
          options: [
            optNamespaceName,
            {
              name: "--data-type",
              description: "The data type",
              args: { name: "data-type" },
            },
            {
              name: "--is-multi-valued",
              description:
                "A flag indicating whether or not the field is multi-valued",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--description",
              description: "The field description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The field display name",
              args: { name: "display-name" },
            },
            {
              name: "--name",
              description: "The field internal name",
              args: { name: "name" },
            },
            {
              name: "--is-keep-duplicates",
              description:
                "A flag indicating whether duplicates should be retained while processing multi-valued fields",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get-usages",
          description:
            "Gets usage information about the field with the specified name",
          options: [optNamespaceName, optFieldName, optFromJson],
        },
      ],
    },
    {
      name: "parser",
      description: "LogAnalyticsParser",
      subcommands: [
        {
          name: "delete-parser",
          description: "Deletes parser with the specified name",
          options: [
            optNamespaceName,
            {
              name: "--parser-name",
              description: "The parser name",
              args: { name: "parser-name" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "extract-structured-log-field-paths",
          description:
            "Extracts the field paths from the example json or xml content",
          options: [
            optNamespaceName,
            optContent,
            optDescription2,
            optDisplayName2,
            optEditVersion,
            optEncoding,
            optExampleContent,
            optFieldMaps,
            optFooterContent,
            optHeaderContent,
            optName3,
            optIsDefault,
            optIsSingleLineContent,
            optIsSystem,
            optLanguage,
            optTimeUpdated,
            {
              name: "--log-type-test-request-version",
              description: "The log type test request",
              args: { name: "integer" },
            },
            {
              name: "--mapped-parsers",
              description: "The mapped parser list",
              args: { name: "json" },
            },
            {
              name: "--is-hidden",
              description: "A flag indicating if the parser is hidden or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optParserSequence,
            optParserTimezone,
            { name: "--parser-filter", args: { name: "json" } },
            optIsParserWrittenOnce,
            optParserFunctions,
            {
              name: "--sources-count",
              description: "The number of sources using this parser",
              args: { name: "integer" },
            },
            {
              name: "--sources",
              description: "The list of sources using this parser",
              args: { name: "json" },
            },
            optFieldDelimiter,
            optFieldQualifier,
            optType,
            {
              name: "--is-user-deleted",
              description:
                "A flag indicating whether or not the parser has been deleted",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsNamespaceAware,
            {
              name: "--categories",
              description: "An array of categories assigned to this parser",
              args: { name: "json" },
            },
            optIsPositionAware,
            {
              name: "--dependent-sources",
              description:
                "A list of sources that depend on the parser, either directly or indirectly",
              args: { name: "json" },
            },
            {
              name: "--dependent-parsers",
              description: "A list of sub parsers used by this parser",
              args: { name: "json" },
            },
            {
              name: "--parser-type",
              description:
                "The parser type - possible values are XML, JSON or DELIMITED",
              args: { suggestions: ["XML", "JSON", "DELIMITED", "REGEX"] },
            },
            optParserIgnorelineChars,
            optTokenizeOriginalText,
            optFromJson,
          ],
        },
        {
          name: "extract-structured-log-header-paths",
          description:
            "Extracts the header paths from the example json or xml content",
          options: [
            optNamespaceName,
            optContent,
            optDescription2,
            optDisplayName2,
            optEditVersion,
            optEncoding,
            optExampleContent,
            optFieldMaps,
            optFooterContent,
            optHeaderContent,
            optName3,
            optIsDefault,
            optIsSingleLineContent,
            optIsSystem,
            optLanguage,
            optTimeUpdated,
            {
              name: "--log-type-test-request-version",
              description: "The log type test request",
              args: { name: "integer" },
            },
            {
              name: "--mapped-parsers",
              description: "The mapped parser list",
              args: { name: "json" },
            },
            {
              name: "--is-hidden",
              description: "A flag indicating if the parser is hidden or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optParserSequence,
            optParserTimezone,
            { name: "--parser-filter", args: { name: "json" } },
            optIsParserWrittenOnce,
            optParserFunctions,
            {
              name: "--sources-count",
              description: "The number of sources using this parser",
              args: { name: "integer" },
            },
            {
              name: "--sources",
              description: "The list of sources using this parser",
              args: { name: "json" },
            },
            optFieldDelimiter,
            optFieldQualifier,
            optType,
            {
              name: "--is-user-deleted",
              description:
                "A flag indicating whether or not the parser has been deleted",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsNamespaceAware,
            {
              name: "--categories",
              description: "An array of categories assigned to this parser",
              args: { name: "json" },
            },
            optIsPositionAware,
            {
              name: "--dependent-sources",
              description:
                "A list of sources that depend on the parser, either directly or indirectly",
              args: { name: "json" },
            },
            {
              name: "--dependent-parsers",
              description: "A list of sub parsers used by this parser",
              args: { name: "json" },
            },
            {
              name: "--parser-type",
              description:
                "The parser type - possible values are XML, JSON or DELIMITED",
              args: { suggestions: ["XML", "JSON", "DELIMITED", "REGEX"] },
            },
            optParserIgnorelineChars,
            optTokenizeOriginalText,
            optFromJson,
          ],
        },
        {
          name: "get-parser",
          description:
            "Gets detailed information about the parser with the specified name",
          options: [
            optNamespaceName,
            {
              name: "--parser-name",
              description: "The parser name",
              args: { name: "parser-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-parser-summary",
          description: "Returns the count of parsers",
          options: [optNamespaceName, optFromJson],
        },
        {
          name: "list-parser-actions",
          description: "Returns a list of parser actions",
          options: [
            optNamespaceName,
            {
              name: "--name",
              description: "The parser action name used for filtering",
              args: { name: "name" },
            },
            {
              name: "--action-display-text",
              description: "The parser action display text used for filtering",
              args: { name: "action-display-text" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The attribute used to sort the returned parser actions",
              args: { suggestions: ["displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-parser-functions",
          description:
            "Lists the parser functions defined for the specified parser",
          options: [
            optNamespaceName,
            {
              name: "--parser-name",
              description: "The parser name used for filtering",
              args: { name: "parser-name" },
            },
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-parser-meta-plugins",
          description:
            "Lists the parser meta plugins available for defining parser functions",
          options: [
            optNamespaceName,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-parsers",
          description:
            "Returns a list of parsers, containing detailed information about them",
          options: [
            optNamespaceName,
            {
              name: "--is-match-all",
              description:
                "A flag indicating how to handle filtering when multiple filter criteria are specified",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--source-type",
              description: "The source type used for filtering",
              args: {
                suggestions: ["OS_FILE", "SYSLOG", "ODL", "OS_WINDOWS_SYS"],
              },
            },
            {
              name: "--parser-name",
              description: "The parser name used for filtering",
              args: { name: "parser-name" },
            },
            {
              name: "--parser-display-text",
              description: "The parser display text used for filtering",
              args: { name: "parser-display-text" },
            },
            {
              name: "--parser-type",
              description: "The parser type used for filtering",
              args: {
                suggestions: [
                  "ALL",
                  "REGEX",
                  "XML",
                  "JSON",
                  "ODL",
                  "DELIMITED",
                ],
              },
            },
            optCategories,
            optIsSystem2,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The attribute used to sort the returned parsers",
              args: {
                suggestions: ["name", "type", "sourcesCount", "timeUpdated"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "test-parser",
          description:
            "Tests the parser definition against the specified example content to ensure fields are successfully extracted",
          options: [
            optNamespaceName,
            {
              name: "--content",
              description: "The content used for testing",
              args: { name: "content" },
            },
            optDescription2,
            optDisplayName2,
            {
              name: "--encoding",
              description: "The content encoding",
              args: { name: "encoding" },
            },
            optExampleContent,
            optFieldMaps,
            optFooterContent,
            optHeaderContent,
            optName3,
            optIsDefault,
            optIsSingleLineContent,
            optIsSystem,
            optLanguage,
            optTimeUpdated,
            {
              name: "--log-type-test-request-version",
              description: "The log type test request version",
              args: { name: "integer" },
            },
            optMetadata,
            {
              name: "--is-hidden",
              description: "A flag indicating if the parser is hidden or not",
              args: { name: "integer" },
            },
            optParserSequence,
            {
              name: "--parser-timezone",
              description: "The parser timezone",
              args: { name: "parser-timezone" },
            },
            optIsParserWrittenOnce,
            optParserFunctions,
            optFieldDelimiter,
            optFieldQualifier,
            optType,
            optIsNamespaceAware,
            optIsPositionAware,
            {
              name: "--scope",
              description: "The scope used when testing a parser",
              args: {
                suggestions: [
                  "LOG_LINES",
                  "LOG_ENTRIES",
                  "LOG_LINES_LOG_ENTRIES",
                ],
              },
            },
            {
              name: "--req-origin-module",
              description: "The module to test",
              args: { name: "req-origin-module" },
            },
            optParserIgnorelineChars,
            optTokenizeOriginalText,
            optFromJson,
          ],
        },
        {
          name: "upsert-parser",
          description:
            "Creates or updates a parser, which defines how fields are extracted from a log entry",
          options: [
            optNamespaceName,
            optContent,
            optDescription2,
            optDisplayName2,
            optEditVersion,
            optEncoding,
            {
              name: "--example-content",
              description: "Example content",
              args: { name: "example-content" },
            },
            optFieldMaps,
            optFooterContent,
            optHeaderContent,
            {
              name: "--name",
              description: "The parser internal name",
              args: { name: "name" },
            },
            optIsDefault,
            optIsSingleLineContent,
            optIsSystem,
            optLanguage,
            {
              name: "--log-type-test-request-version",
              description: "The log type test request version",
              args: { name: "integer" },
            },
            optParserSequence,
            optParserTimezone,
            optIsParserWrittenOnce,
            optParserFunctions,
            optFieldDelimiter,
            optFieldQualifier,
            optType,
            optIsNamespaceAware,
            {
              name: "--categories",
              description: "An array of categories to assign to the parser",
              args: { name: "json" },
            },
            optIsPositionAware,
            optIfMatch,
            optParserIgnorelineChars,
            optTokenizeOriginalText,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "source",
      description: "LogAnalyticsSource",
      subcommands: [
        {
          name: "delete-source",
          description: "Deletes source with the specified name",
          options: [
            optNamespaceName,
            optSourceName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get-column-names",
          description: "Extracts column names from the input SQL query",
          options: [
            optNamespaceName,
            {
              name: "--sql-query",
              description:
                "The SQL query from which column names are to be extracted",
              args: { name: "sql-query" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-source",
          description:
            "Gets detailed information about the source with the specified name",
          options: [
            optNamespaceName,
            optSourceName,
            optCompartmentId,
            optFromJson,
          ],
        },
        {
          name: "get-source-summary",
          description: "Returns the count of sources",
          options: [optNamespaceName, optFromJson],
        },
        {
          name: "list-associable-entities",
          description:
            "Lists the entities in the specified compartment which are (in)eligible for association with this source",
          options: [
            optNamespaceName,
            optSourceName,
            optCompartmentId,
            {
              name: "--type",
              description:
                "The entity type - either eligible or ineligible for association",
              args: { suggestions: ["ELIGIBLE", "INELIGIBLE"] },
            },
            {
              name: "--search-text",
              description: "The text used for filtering returned entities",
              args: { name: "search-text" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The attribute used to sort the returned entities",
              args: {
                suggestions: [
                  "entityName",
                  "entityTypeName",
                  "host",
                  "agentId",
                ],
              },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-meta-source-types",
          description: "Lists the types of log sources supported",
          options: [
            optNamespaceName,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-source-label-operators",
          description:
            "Lists the supported conditional operators that could be used for matching log field values to generate",
          options: [
            optNamespaceName,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-source-patterns",
          description:
            "Lists the source patterns for the source with the specified name",
          options: [
            optNamespaceName,
            optSourceName,
            {
              name: "--is-include",
              description: "Is included source patterns",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The attribute used to sort the returned source patterns",
              args: { suggestions: ["patternText"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-sources",
          description:
            "Returns a list of sources, containing detailed information about them",
          options: [
            optNamespaceName,
            optCompartmentId,
            {
              name: "--entity-type",
              description:
                "A filter to return only sources associated with entities of the specified type",
              args: { name: "entity-type" },
            },
            {
              name: "--source-display-text",
              description: "The source display text used for filtering",
              args: { name: "source-display-text" },
            },
            optIsSystem2,
            {
              name: "--lifecycle-state",
              description: "The source lifecycle state used for filtering",
              args: { suggestions: ["ACTIVE", "DELETED", "ALL"] },
            },
            {
              name: "--is-auto-associated",
              description: "An auto-associate flag used for filtering",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The attribute used to sort the returned sources",
              args: {
                suggestions: [
                  "name",
                  "timeUpdated",
                  "associationCount",
                  "sourceType",
                ],
              },
            },
            optLimit,
            optPage,
            optName,
            {
              name: "--source-type",
              description: "The source type",
              args: { name: "source-type" },
            },
            optCategories,
            {
              name: "--pattern-text",
              description: "The pattern text filter",
              args: { name: "pattern-text" },
            },
            {
              name: "--is-simplified",
              description:
                "A flag specifying whether or not to return all source information",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "upsert-source",
          description: "Creates or updates a log source",
          options: [
            optNamespaceName,
            {
              name: "--label-conditions",
              description: "An array of source label conditions",
              args: { name: "json" },
            },
            {
              name: "--data-filter-definitions",
              description: "An array of data filter definitions",
              args: { name: "json" },
            },
            {
              name: "--database-credential",
              description: "The database credential name",
              args: { name: "database-credential" },
            },
            optIsForCloud,
            {
              name: "--labels",
              description: "An array of labels",
              args: { name: "json" },
            },
            {
              name: "--metric-definitions",
              description: "An array of metric definitions",
              args: { name: "json" },
            },
            {
              name: "--metrics",
              description: "An array of metrics",
              args: { name: "json" },
            },
            {
              name: "--oob-parsers",
              description: "An array of built in source parsers",
              args: { name: "json" },
            },
            {
              name: "--parameters",
              description: "An array of parameters",
              args: { name: "json" },
            },
            {
              name: "--patterns",
              description: "An array of patterns",
              args: { name: "json" },
            },
            optDescription3,
            optDisplayName3,
            optEditVersion2,
            {
              name: "--functions",
              description: "An array of source functions",
              args: { name: "json" },
            },
            optSourceId,
            optName4,
            optIsSecureContent,
            optIsSystem,
            {
              name: "--parsers",
              description: "An array of parser",
              args: { name: "json" },
            },
            optRuleId,
            optTypeName,
            optWarningConfig,
            {
              name: "--metadata-fields",
              description: "An array of source metadata fields",
              args: { name: "json" },
            },
            {
              name: "--label-definitions",
              description: "An array of labels",
              args: { name: "json" },
            },
            {
              name: "--entity-types",
              description: "An array of entity types",
              args: { name: "json" },
            },
            optIsTimezoneOverride,
            optUserParsers,
            {
              name: "--categories",
              description: "An array of categories to assign to the source",
              args: { name: "json" },
            },
            optEndpoints,
            optSourceProperties,
            {
              name: "--create-like-source-id",
              description:
                "The unique identifier of the source to use as the reference for a create like operation",
              args: { name: "integer" },
            },
            {
              name: "--is-incremental",
              description:
                "A flag indicating whether or not the update of a source is incremental or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-ignore-warning",
              description: "Is ignore warning",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            {
              name: "--extfield-defs",
              description: "Extended field definitions",
              args: { name: "extfield-defs" },
            },
            optFromJson,
          ],
        },
        {
          name: "validate-label-condition",
          description: "Validates specified condition for a source label",
          options: [
            optNamespaceName,
            {
              name: "--condition-string",
              description:
                "String representation of the label condition to validate",
              args: { name: "condition-string" },
            },
            { name: "--condition-block", args: { name: "json" } },
            {
              name: "--field-values",
              description:
                "An array of field name-value pairs to evaluate the label condition",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "validate-source",
          description:
            "Checks if the specified input is a valid log source definition",
          options: [
            optNamespaceName,
            {
              name: "--label-conditions",
              description: "An array of source label conditions",
              args: { name: "json" },
            },
            {
              name: "--data-filter-definitions",
              description: "An array of data filter definitions",
              args: { name: "json" },
            },
            {
              name: "--database-credential",
              description: "The database credential name",
              args: { name: "database-credential" },
            },
            optIsForCloud,
            {
              name: "--labels",
              description: "An array of labels",
              args: { name: "json" },
            },
            {
              name: "--metric-definitions",
              description: "An array of metric definitions",
              args: { name: "json" },
            },
            {
              name: "--metrics",
              description: "An array of metrics",
              args: { name: "json" },
            },
            {
              name: "--oob-parsers",
              description: "An array of built in source parsers",
              args: { name: "json" },
            },
            {
              name: "--parameters",
              description: "An array of parameters",
              args: { name: "json" },
            },
            {
              name: "--patterns",
              description: "An array of patterns",
              args: { name: "json" },
            },
            optDescription3,
            optDisplayName3,
            optEditVersion2,
            {
              name: "--functions",
              description: "An array of source functions",
              args: { name: "json" },
            },
            optSourceId,
            optName4,
            optIsSecureContent,
            optIsSystem,
            {
              name: "--parsers",
              description: "An array of parser",
              args: { name: "json" },
            },
            optRuleId,
            optTypeName,
            optWarningConfig,
            {
              name: "--metadata-fields",
              description: "An array of source metadata fields",
              args: { name: "json" },
            },
            {
              name: "--label-definitions",
              description: "An array of labels",
              args: { name: "json" },
            },
            {
              name: "--entity-types",
              description: "An array of entity types",
              args: { name: "json" },
            },
            optIsTimezoneOverride,
            optUserParsers,
            {
              name: "--categories",
              description: "An array of categories to assign to the source",
              args: { name: "json" },
            },
            optEndpoints,
            optSourceProperties,
            {
              name: "--create-like-source-id",
              description:
                "The unique identifier of the source to use as the reference for a create like operation",
              args: { name: "integer" },
            },
            {
              name: "--is-incremental",
              description:
                "A flag indicating whether or not the update of a source is incremental or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-ignore-warning",
              description: "Is ignore warning",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--extfield-defs",
              description: "Extended field definitions",
              args: { name: "extfield-defs" },
            },
            optFromJson,
          ],
        },
        {
          name: "validate-source-extfield-details",
          description:
            "Checks if the specified input contains valid extended field definitions against the provided example content",
          options: [
            optNamespaceName,
            {
              name: "--label-conditions",
              description: "The label alert conditions",
              args: { name: "json" },
            },
            {
              name: "--data-filter-definitions",
              description: "The data filter definitions",
              args: { name: "json" },
            },
            {
              name: "--database-credential",
              description: "The database credential",
              args: { name: "database-credential" },
            },
            optIsForCloud,
            {
              name: "--labels",
              description: "The labels associated with the source",
              args: { name: "json" },
            },
            {
              name: "--metric-definitions",
              description: "The metric definitions",
              args: { name: "json" },
            },
            {
              name: "--metrics",
              description: "The metric source map",
              args: { name: "json" },
            },
            {
              name: "--oob-parsers",
              description: "The built in parsers associated with source",
              args: { name: "json" },
            },
            {
              name: "--parameters",
              description: "The source parameters",
              args: { name: "json" },
            },
            {
              name: "--pattern-count",
              description: "The pattern count",
              args: { name: "integer" },
            },
            {
              name: "--patterns",
              description: "The source patterns",
              args: { name: "json" },
            },
            optDescription3,
            optDisplayName3,
            optEditVersion2,
            {
              name: "--functions",
              description: "The source functions",
              args: { name: "json" },
            },
            optSourceId,
            optName4,
            optIsSecureContent,
            optIsSystem,
            {
              name: "--parsers",
              description: "The list of parsers used by the source",
              args: { name: "json" },
            },
            optRuleId,
            optTypeName,
            {
              name: "--type-display-name",
              description: "The source type name",
              args: { name: "type-display-name" },
            },
            optWarningConfig,
            {
              name: "--metadata-fields",
              description: "The source metadata fields",
              args: { name: "json" },
            },
            {
              name: "--label-definitions",
              description: "The labels used by the source",
              args: { name: "json" },
            },
            {
              name: "--entity-types",
              description: "The entity types",
              args: { name: "json" },
            },
            optIsTimezoneOverride,
            optUserParsers,
            optTimeUpdated,
            {
              name: "--event-types",
              description: "An array of event types",
              args: { name: "json" },
            },
            {
              name: "--categories",
              description: "An array of categories assigned to this source",
              args: { name: "json" },
            },
            optEndpoints,
            optSourceProperties,
            {
              name: "--lifecycle-state",
              description: "The current state of the Log Analytics source",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            {
              name: "--assoc-count",
              description: "Association count",
              args: { name: "assoc-count" },
            },
            {
              name: "--assoc-entity",
              description: "Association entity",
              args: { name: "assoc-entity" },
            },
            {
              name: "--extfield-defs",
              description: "Extended Field Definitions",
              args: { name: "extfield-defs" },
            },
            {
              name: "--is-auto-assoc-enabled",
              description: "Auto associaton enabled flag",
              args: { name: "is-auto-assoc-enabled" },
            },
            {
              name: "--is-auto-assoc-override",
              description: "Auto associaton override flag",
              args: { name: "is-auto-assoc-override" },
            },
            optFromJson,
          ],
        },
        {
          name: "list-event-types",
          description:
            "Lists the event types mapped to the source with the specified name",
          options: [
            optNamespaceName,
            optSourceName,
            {
              name: "--display-text",
              description:
                "The text used for filtering event types by name or description",
              args: { name: "display-text" },
            },
            optIsSystem2,
            {
              name: "--is-enabled",
              description: "The enabled flag used for filtering",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The attribute used to sort the returned source event types",
              args: { suggestions: ["eventType", "timeUpdated"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "add-event-types",
          description: "Add one or more event types to a source",
          options: [optNamespaceName, optSourceName, optItems, optFromJson],
        },
        {
          name: "enable-event-types",
          description: "Enable one or more event types in a source",
          options: [optNamespaceName, optSourceName, optItems, optFromJson],
        },
        {
          name: "disable-event-types",
          description: "Disable one or more event types in a source",
          options: [optNamespaceName, optSourceName, optItems, optFromJson],
        },
        {
          name: "remove-event-types",
          description: "Remove one or more event types from a source",
          options: [optNamespaceName, optSourceName, optItems, optFromJson],
        },
        {
          name: "list-auto-assocs",
          description:
            "Gets information related to auto association for the source with the specified name",
          options: [
            optNamespaceName,
            optSourceName,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The attribute used to sort the returned auto association information",
              args: { suggestions: ["isEnabled"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "enable-auto-assoc",
          description: "Enables auto association for a log source",
          options: [
            optNamespaceName,
            optSourceName,
            {
              name: "--items",
              description:
                "A list of information required to enable auto association on a source",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-auto-assoc",
          description: "Disables auto association for a log source",
          options: [
            optNamespaceName,
            optSourceName,
            {
              name: "--items",
              description:
                "A list of information required to disable auto association on a source",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-source-extfield-defs",
          description:
            "Lists the extended field definitions for the source with the specified name",
          options: [
            optNamespaceName,
            optSourceName,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The attribute used to sort the returned source patterns",
              args: { suggestions: ["baseFieldName", "regularExpression"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-source-functions",
          description:
            "Lists the functions that could be used to enrich log entries based on meaningful information extracted from",
          options: [
            optNamespaceName,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "validate-loglist-endpoint",
          description: "Validates the REST endpoint configuration",
          options: [
            optNamespaceName,
            {
              name: "--list-endpoint",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--log-endpoints",
              description:
                "Log endpoints, which reference the listEndpoint response, to fetch log data",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "validate-log-endpoint",
          description: "Validates the REST endpoint configuration",
          options: [
            optNamespaceName,
            {
              name: "--log-endpoint",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "assoc",
      description: "LogAnalyticsAssociation",
      subcommands: [
        {
          name: "list-associated-entities",
          description:
            "Lists the association details of entities in the specified compartment that are associated with at least one",
          options: [
            optNamespaceName,
            optCompartmentId,
            optSourceName2,
            optEntityId2,
            optEntityType,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The attribute used to sort the returned entities",
              args: {
                suggestions: [
                  "entityName",
                  "entityTypeDisplayName",
                  "associationCount",
                ],
              },
            },
            optAll,
            optPageSize,
            {
              name: "--entity-type-name",
              description: "Entity Type Display Name",
              args: { name: "entity-type-name" },
            },
            optFromJson,
          ],
        },
        {
          name: "get-assoc-summary",
          description:
            "Returns the count of source associations for entities in the specified compartment",
          options: [optNamespaceName, optCompartmentId, optFromJson],
        },
        {
          name: "delete-assocs",
          description:
            "Deletes the associations between the sources and entities specified",
          options: [
            optNamespaceName,
            optCompartmentId5,
            {
              name: "--items",
              description: "The information required to delete an association",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "upsert-assocs",
          description:
            "Creates or updates associations between sources and entities",
          options: [
            optNamespaceName,
            optCompartmentId5,
            {
              name: "--items",
              description:
                "The information required to create or update an association",
              args: { name: "json" },
            },
            {
              name: "--is-from-republish",
              description: "IsFromRepublish",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-entity-source-assocs",
          description:
            "Returns the list of source associations for the specified entity",
          options: [
            optNamespaceName,
            optCompartmentId,
            optSourceName2,
            optEntityId2,
            optEntityType,
            {
              name: "--life-cycle-state",
              description: "The life cycle state used for filtering",
              args: {
                suggestions: [
                  "ALL",
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--is-show-total",
              description:
                "A flag indicating whether or not to return the total number of items returned",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The attribute used to sort the returned associations",
              args: {
                suggestions: [
                  "sourceDisplayName",
                  "timeLastAttempted",
                  "status",
                ],
              },
            },
            optAll,
            optPageSize,
            {
              name: "--entity-type-name",
              description: "Entity Type Display Name",
              args: { name: "entity-type-name" },
            },
            optFromJson,
          ],
        },
        {
          name: "list-source-assocs",
          description:
            "Returns the list of entity associations in the input compartment for the specified source",
          options: [
            optNamespaceName,
            {
              name: "--source-name",
              description: "The souce name used for filtering associations",
              args: { name: "source-name" },
              isRequired: true,
            },
            optCompartmentId,
            optEntityId2,
            {
              name: "--entity-name",
              description: "The entity name used for filtering",
              args: { name: "entity-name" },
            },
            {
              name: "--life-cycle-state",
              description: "The life cycle state used for filtering",
              args: {
                suggestions: [
                  "ALL",
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--is-show-total",
              description:
                "A flag indicating whether or not to return the total number of items returned",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The attribute used to sort the returned associations",
              args: {
                suggestions: ["entityName", "timeLastAttempted", "status"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "validate-assoc-params",
          description:
            "Checks if the passed in entities could be associated with the specified sources",
          options: [
            optNamespaceName,
            optCompartmentId5,
            {
              name: "--items",
              description:
                "The information required to create or update an association",
              args: { name: "json" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The attribute used to sort the returned association parameters",
              args: { suggestions: ["sourceDisplayName", "status"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "lookup",
      description: "LogAnalyticsLookup",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves the specified lookup to a different compartment",
          options: [
            optNamespaceName,
            optLookupName,
            optCompartmentId3,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "register-lookup",
          description:
            "Creates a lookup with the specified name, type and description",
          options: [
            optNamespaceName,
            {
              name: "--type",
              description: "The lookup type",
              args: { suggestions: ["Lookup", "Dictionary", "Module"] },
              isRequired: true,
            },
            optName,
            {
              name: "--description",
              description: "The description for a created lookup",
              args: { name: "description" },
            },
            optCharEncoding,
            {
              name: "--is-hidden",
              description:
                "A flag indicating whether or not the new lookup should be hidden",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optExpect,
            optCompartmentId4,
            optFile,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of lookups, containing detailed information about them",
          options: [
            optNamespaceName,
            {
              name: "--type",
              description: "The lookup type",
              args: { suggestions: ["Lookup", "Dictionary", "Module"] },
              isRequired: true,
            },
            {
              name: "--lookup-display-text",
              description: "The lookup text used for filtering",
              args: { name: "lookup-display-text" },
            },
            optIsSystem2,
            {
              name: "--sort-by",
              description: "Sort by field",
              args: {
                suggestions: [
                  "displayName",
                  "status",
                  "type",
                  "updatedTime",
                  "creationType",
                ],
              },
            },
            {
              name: "--status",
              description:
                "The lookup status used for filtering when fetching a list of lookups",
              args: {
                suggestions: ["ALL", "SUCCESSFUL", "FAILED", "INPROGRESS"],
              },
            },
            optCategories,
            optCompartmentId4,
            {
              name: "--is-hide-special",
              description:
                "A flag indicating whether or not to return OMC annotated or hidden lookups",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets detailed information about the lookup with the specified name",
          options: [optNamespaceName, optLookupName, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the metadata of the specified lookup, such as the lookup description",
          options: [
            optNamespaceName,
            optLookupName,
            {
              name: "--default-match-value",
              description: "The default match value",
              args: { name: "default-match-value" },
            },
            {
              name: "--description",
              description: "The lookup description",
              args: { name: "description" },
            },
            {
              name: "--fields",
              description: "The lookup fields",
              args: { name: "json" },
            },
            {
              name: "--max-matches",
              description: "The maximum number of matches",
              args: { name: "integer" },
            },
            {
              name: "--categories",
              description: "An array of categories to assign to the lookup",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes lookup with the specified name",
          options: [
            optNamespaceName,
            optLookupName,
            optIsForce,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "append-data",
          description: "Appends data to the lookup content",
          options: [
            optNamespaceName,
            optLookupName,
            optIsForce,
            optCharEncoding,
            optIfMatch,
            optExpect,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFile,
            optFromJson,
          ],
        },
        {
          name: "update-data",
          description: "Updates the lookup content",
          options: [
            optNamespaceName,
            optLookupName,
            optIsForce,
            optCharEncoding,
            optIfMatch,
            optExpect,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFile,
            optFromJson,
          ],
        },
        {
          name: "get-summary",
          description:
            "Returns the count of user created and oracle defined lookups",
          options: [optNamespaceName, optCompartmentId4, optFromJson],
        },
      ],
    },
    {
      name: "content-export",
      subcommands: [
        {
          name: "export-custom-content",
          description:
            "Exports all custom details of the specified sources, parsers, fields and labels, in zip format",
          options: [
            optNamespaceName,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--field-names",
              description: "The field names",
              args: { name: "json" },
            },
            {
              name: "--parser-names",
              description: "The parser names",
              args: { name: "json" },
            },
            {
              name: "--source-names",
              description: "The source names",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "content-import",
      description: "LogAnalyticsImportCustomContent",
      subcommands: [
        {
          name: "import-custom-content",
          description:
            "Imports the specified custom content from the input in zip format",
          options: [
            optNamespaceName,
            {
              name: "--is-overwrite",
              description:
                "A flag indicating whether or not to overwrite existing content if a conflict is found during import content",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optExpect,
            {
              name: "--file",
              description: "Path to the custom content file",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "config-work-request",
      description: "LogAnalyticsConfigWorkRequest",
      subcommands: [
        {
          name: "get-config-work-request",
          description:
            "Returns detailed information about the configuration work request with the specified id",
          options: [optNamespaceName, optWorkRequestId, optFromJson],
        },
        {
          name: "list-config-work-requests",
          description:
            "Returns the list of configuration work requests such as association or lookup operations",
          options: [
            optNamespaceName,
            optCompartmentId,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The attribute used to sort the returned work requests",
              args: { suggestions: ["timeAccepted"] },
            },
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
      name: "warning",
      description: "LogAnalyticsWarning",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a list of collection warnings, containing detailed information about them",
          options: [
            optNamespaceName,
            optCompartmentId,
            {
              name: "--warning-state",
              description: "The warning state used for filtering",
              args: { suggestions: ["ALL", "SUPPRESSED", "UNSUPPRESSED"] },
            },
            optSourceName2,
            {
              name: "--source-pattern",
              description: "The source pattern used for filtering",
              args: { name: "source-pattern" },
            },
            {
              name: "--warning-message",
              description: "Warning message query parameter",
              args: { name: "warning-message" },
            },
            {
              name: "--entity-name",
              description: "The entity name used for filtering",
              args: { name: "entity-name" },
            },
            optEntityType,
            {
              name: "--warning-type",
              description: "The warning type query parameter",
              args: { name: "warning-type" },
            },
            {
              name: "--is-no-source",
              description:
                "A flag indicating whether to filter warnings based on source display name or on warning level",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--start-time",
              description: "The warning start date query parameter",
              args: { name: "start-time" },
            },
            {
              name: "--end-time",
              description: "The warning end date query parameter",
              args: { name: "end-time" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The attribute used to sort the returned warnings",
              args: {
                suggestions: [
                  "EntityType",
                  "SourceName",
                  "PatternText",
                  "FirstReported",
                  "WarningMessage",
                  "Host",
                  "EntityName",
                  "InitialWarningDate",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "suppress",
          description: "Supresses a list of warnings",
          options: [
            optNamespaceName,
            optCompartmentId,
            {
              name: "--warning-references",
              description: "A list of LogAnalyticsWarning references",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "unsuppress",
          description: "Unsupresses a list of warnings",
          options: [
            optNamespaceName,
            optCompartmentId,
            {
              name: "--warning-references",
              description: "A list of LogAnalyticsWarning references",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "preference",
      description: "The preference information",
      subcommands: [
        {
          name: "remove",
          description:
            "Removes the tenant preferences such as DEFAULT_HOMEPAGE and collection properties",
          options: [
            optNamespaceName,
            {
              name: "--items",
              description: "An array of tenant preference details",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Lists the tenant preferences such as DEFAULT_HOMEPAGE and collection properties",
          options: [
            optNamespaceName,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The attribute used to sort the returned preferences",
              args: { suggestions: ["name"] },
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the tenant preferences such as DEFAULT_HOMEPAGE and collection properties",
          options: [
            optNamespaceName,
            {
              name: "--items",
              description: "An array of tenant preference details",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "category",
      description: "A category into which resources can be placed",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a list of categories, containing detailed information about them",
          options: [
            optNamespaceName,
            {
              name: "--category-type",
              description:
                "A comma-separated list of category types used for filtering",
              args: { name: "category-type" },
            },
            {
              name: "--category-display-text",
              description: "The category display text used for filtering",
              args: { name: "category-display-text" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The attribute used to sort the returned categories",
              args: { suggestions: ["displayName", "type"] },
            },
            optLimit,
            optPage,
            optName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets detailed information about the category with the specified name",
          options: [
            optNamespaceName,
            {
              name: "--category-name",
              description: "The category name",
              args: { name: "category-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-resource-category",
          description:
            "Returns a list of resources and their category assignments",
          options: [
            optNamespaceName,
            optCategories,
            {
              name: "--resource-types",
              description:
                "A comma-separated list of resource types used for filtering",
              args: { name: "resource-types" },
            },
            {
              name: "--resource-ids",
              description:
                "A comma-separated list of resource unique identifiers used for filtering",
              args: { name: "resource-ids" },
            },
            optCompartmentId4,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "The attribute used to sort the returned category resources",
              args: {
                suggestions: ["resourceType", "categoryName", "resourceId"],
              },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove-resource-category",
          description:
            "Removes the category assignments of DASHBOARD and SAVEDSEARCH resources",
          options: [
            optNamespaceName,
            {
              name: "--items",
              description:
                "An array of resources and their corresponding category assignments to update",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-resource-category",
          description:
            "Updates the category assignments of DASHBOARD and SAVEDSEARCH resources",
          options: [
            optNamespaceName,
            {
              name: "--items",
              description:
                "An array of resources and their corresponding category assignments to update",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "property",
      description: "A property represented as a name-value pair",
      subcommands: [
        {
          name: "list-effective-properties",
          description:
            "Returns a list of effective properties for the specified resource",
          options: [
            optNamespaceName,
            {
              name: "--agent-id",
              description: "The agent ocid",
              args: { name: "agent-id" },
            },
            optSourceName2,
            {
              name: "--is-include-patterns",
              description: "The include pattern flag",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--entity-id",
              description: "The entity ocid",
              args: { name: "entity-id" },
            },
            {
              name: "--pattern-id",
              description: "The pattern id",
              args: { name: "integer" },
            },
            {
              name: "--pattern-id-long",
              description: "The pattern id (long)",
              args: { name: "integer" },
            },
            {
              name: "--name",
              description: "The property name used for filtering",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The attribute used to sort the returned properties",
              args: { suggestions: ["name", "displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-properties-metadata",
          description: "Returns a list of properties along with their metadata",
          options: [
            optNamespaceName,
            {
              name: "--name",
              description: "The property name used for filtering",
              args: { name: "name" },
            },
            {
              name: "--display-text",
              description: "The property display text used for filtering",
              args: { name: "display-text" },
            },
            {
              name: "--level",
              description:
                "The level for which applicable properties are to be listed",
              args: { name: "level" },
            },
            {
              name: "--constraints",
              description:
                "The constraints that apply to the properties at a certain level",
              args: { name: "constraints" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The attribute used to sort the returned properties",
              args: { suggestions: ["name", "displayName"] },
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
      description: "A template object",
      subcommands: [
        {
          name: "get",
          description:
            "Gets detailed information about the template with the specified ocid",
          options: [
            optNamespaceName,
            {
              name: "--template-id",
              description: "Unique ocid of the template",
              args: { name: "template-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of templates, containing detailed information about them",
          options: [
            optNamespaceName,
            optCompartmentId,
            {
              name: "--type",
              description: "The template type used for filtering",
              args: { name: "type" },
            },
            {
              name: "--name",
              description: "The template name used for filtering",
              args: { name: "name" },
            },
            {
              name: "--template-display-text",
              description: "The template display text used for filtering",
              args: { name: "template-display-text" },
            },
            {
              name: "--lifecycle-state",
              description: "The template lifecycle state used for filtering",
              args: { suggestions: ["ACTIVE", "DELETED"] },
            },
            {
              name: "--filter",
              description: "Filter",
              args: { name: "filter" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The attribute used to sort the returned templates",
              args: {
                suggestions: ["displayName", "timeCreated", "timeUpdated"],
              },
            },
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
