// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optApmDomainId: Fig.Option = {
  name: "--apm-domain-id",
  description: "The APM Domain ID the request is intended for",
  args: { name: "apm-domain-id" },
  isRequired: true,
};
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
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
const optOpcDryRun: Fig.Option = {
  name: "--opc-dry-run",
  description: 'Indicates that the request is a dry run, if set to "true"',
  args: { name: "opc-dry-run" },
};
const optConfigId: Fig.Option = {
  name: "--config-id",
  description: "The OCID of the configuration item",
  args: { name: "config-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "The name by which a configuration entity is displayed to the end user",
  args: { name: "display-name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optApmType: Fig.Option = {
  name: "--apm-type",
  description: "The type of the data file",
  args: { name: "apm-type" },
  isRequired: true,
};
const optDataFileName: Fig.Option = {
  name: "--data-file-name",
  description: "The name of the data file",
  args: { name: "data-file-name" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "The name by which a configuration entity is displayed to the end user",
  args: { name: "display-name" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "apm-config",
  description: "Application Performance Monitoring Configuration",
  subcommands: [
    {
      name: "metric-group",
      description:
        "A metric group defines a set of metrics to collect from a span",
      subcommands: [
        {
          name: "get-namespace-metrics",
          description:
            "Returns all metrics associated with the specified namespace",
          options: [
            optApmDomainId,
            {
              name: "--name",
              description: "Name of the namespace",
              args: { name: "name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-namespaces",
          description: "Returns all namespaces available in APM",
          options: [optApmDomainId, optFromJson],
        },
      ],
    },
    {
      name: "data-file",
      description: "The data file to be uploaded",
      subcommands: [
        {
          name: "delete",
          description: "Removes the data file",
          options: [
            optDataFileName,
            optApmDomainId,
            optApmType,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves the Data file with the specified name and type",
          options: [
            optDataFileName,
            optApmDomainId,
            optApmType,
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
          name: "head",
          description: "Returns metadata about the datafile",
          options: [optDataFileName, optApmDomainId, optApmType, optFromJson],
        },
        {
          name: "put",
          description:
            "Creates a new data file or replaces an existing one with the same name and type",
          options: [
            optDataFileName,
            optApmDomainId,
            optApmType,
            {
              name: "--content-md5",
              description:
                "Optional base64-encoded MD5 hash of the request body",
              args: { name: "content-md5" },
            },
            {
              name: "--content-type",
              description:
                "Optional parameter specifying the media type (MIME type) of the request or response body",
              args: { name: "content-type" },
            },
            {
              name: "--content-language",
              description:
                "Optional parameter that indicates the natural language of the content",
              args: { name: "content-language" },
            },
            {
              name: "--content-encoding",
              description:
                "Optional parameter indicating the content encodings applied to the request body (e.g., gzip, deflate)",
              args: { name: "content-encoding" },
            },
            {
              name: "--content-disposition",
              description:
                "Optional parameter that provides presentation information for how the content should be displayed or handled",
              args: { name: "content-disposition" },
            },
            {
              name: "--metadata",
              description:
                "A string containing a JSON-encoded object with metadata related to the uploaded file or resource",
              args: { name: "metadata" },
            },
            {
              name: "--data-file-body",
              description: "The data file to be uploaded. required",
              args: { name: "data-file-body" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "span-filter",
      description:
        "A named setting that specifies the filter criteria to match a subset of the spans",
      subcommands: [
        {
          name: "validate-pattern",
          description:
            "Validates the Span Filter pattern (filterText) for syntactic correctness",
          options: [
            optApmDomainId,
            {
              name: "--filter-text",
              description: "The string that defines the Span Filter expression",
              args: { name: "filter-text" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "config-collection",
      description: "A collection of configuration items",
      subcommands: [
        {
          name: "list",
          description:
            "Returns all configuration items, which can optionally be filtered by configuration type",
          options: [
            optApmDomainId,
            {
              name: "--config-type",
              description:
                "A filter to match configuration items of a given type",
              args: { name: "config-type" },
            },
            {
              name: "--display-name",
              description:
                "A filter to return resources that match the given display name",
              args: { name: "display-name" },
            },
            {
              name: "--limit",
              description: "The maximum number of items to return",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                'The maximum number of results per page, or items to return in a paginated "List" call',
              args: { name: "page" },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending (ASC) or descending (DESC)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["displayName", "timeCreated", "timeUpdated"],
              },
            },
            {
              name: "--options-group",
              description:
                "A filter to return OPTIONS resources that match the given group",
              args: { name: "options-group" },
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
            { name: "--all", description: "Fetches all pages of results" },
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "config",
      description:
        "A configuration item, which has a number of mutually exclusive properties that can be used to set specific",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the configuration item identified by the OCID",
          options: [
            optApmDomainId,
            optConfigId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the configuration item identified by the OCID",
          options: [optApmDomainId, optConfigId, optFromJson],
        },
        {
          name: "create-apdex-rules",
          description: "Creates a new configuration item",
          options: [
            optApmDomainId,
            { name: "--rules", args: { name: "json" }, isRequired: true },
            optDisplayName2,
            optFreeformTags,
            optDefinedTags,
            optOpcDryRun,
            optFromJson,
          ],
        },
        {
          name: "create-metric-group",
          description: "Creates a new configuration item",
          options: [
            optApmDomainId,
            optDisplayName2,
            {
              name: "--filter-id",
              description: "The OCID of a Span Filter",
              args: { name: "filter-id" },
              isRequired: true,
            },
            {
              name: "--metrics",
              description: "The list of metrics in this group",
              args: { name: "json" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--namespace",
              description: "The namespace to which the metrics are published",
              args: { name: "namespace" },
            },
            {
              name: "--dimensions",
              description: "A list of dimensions for the metric",
              args: { name: "json" },
            },
            optOpcDryRun,
            optFromJson,
          ],
        },
        {
          name: "create-span-filter",
          description: "Creates a new configuration item",
          options: [
            optApmDomainId,
            optDisplayName2,
            {
              name: "--filter-text",
              description: "The string that defines the Span Filter expression",
              args: { name: "filter-text" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--description",
              description:
                "An optional string that describes what the filter is intended or used for",
              args: { name: "description" },
            },
            optOpcDryRun,
            optFromJson,
          ],
        },
        {
          name: "update-apdex-rules",
          description:
            "Updates the details of the configuration item identified by the OCID",
          options: [
            optApmDomainId,
            optConfigId,
            { name: "--rules", args: { name: "json" }, isRequired: true },
            optFreeformTags,
            optDefinedTags,
            optDisplayName,
            optIfMatch,
            optOpcDryRun,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "update-metric-group",
          description:
            "Updates the details of the configuration item identified by the OCID",
          options: [
            optApmDomainId,
            optConfigId,
            optFreeformTags,
            optDefinedTags,
            optDisplayName,
            {
              name: "--filter-id",
              description: "The OCID of a Span Filter",
              args: { name: "filter-id" },
            },
            {
              name: "--namespace",
              description: "The namespace to which the metrics are published",
              args: { name: "namespace" },
            },
            {
              name: "--dimensions",
              description: "A list of dimensions for the metric",
              args: { name: "json" },
            },
            {
              name: "--metrics",
              description: "The list of metrics in this group",
              args: { name: "json" },
            },
            optIfMatch,
            optOpcDryRun,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "update-span-filter",
          description:
            "Updates the details of the configuration item identified by the OCID",
          options: [
            optApmDomainId,
            optConfigId,
            optFreeformTags,
            optDefinedTags,
            optDisplayName,
            {
              name: "--filter-text",
              description: "The string that defines the Span Filter expression",
              args: { name: "filter-text" },
            },
            {
              name: "--description",
              description:
                "An optional string that describes what the filter is intended or used for",
              args: { name: "description" },
            },
            optIfMatch,
            optOpcDryRun,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "create-options",
          description: "Creates a new configuration item",
          options: [
            optApmDomainId,
            optFreeformTags,
            optDefinedTags,
            optDisplayName,
            {
              name: "--options",
              description: "The options are stored here as JSON",
              args: { name: "json" },
            },
            {
              name: "--group",
              description:
                "A string that specifies the group that an OPTIONS item belongs to",
              args: { name: "group" },
            },
            {
              name: "--description",
              description:
                "An optional string that describes what the options are intended or used for",
              args: { name: "description" },
            },
            optOpcDryRun,
            optFromJson,
          ],
        },
        {
          name: "update-options",
          description:
            "Updates the details of the configuration item identified by the OCID",
          options: [
            optApmDomainId,
            optConfigId,
            optFreeformTags,
            optDefinedTags,
            optDisplayName,
            {
              name: "--options",
              description: "The options are stored here as JSON",
              args: { name: "json" },
            },
            {
              name: "--group",
              description:
                "A string that specifies the group that an OPTIONS item belongs to",
              args: { name: "group" },
            },
            {
              name: "--description",
              description:
                "An optional string that describes what the options are intended or used for",
              args: { name: "description" },
            },
            optIfMatch,
            optOpcDryRun,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "create-agent",
          description: "Creates a new configuration item",
          options: [
            optApmDomainId,
            {
              name: "--match-agents-with-attribute-value",
              description:
                "The agent attribute VALUE by which an agent configuration is matched to an agent",
              args: { name: "match-agents-with-attribute-value" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            { name: "--config", args: { name: "json" } },
            { name: "--overrides", args: { name: "json" } },
            optOpcDryRun,
            optFromJson,
          ],
        },
        {
          name: "create-macs-extension",
          description: "Creates a new configuration item",
          options: [
            optApmDomainId,
            {
              name: "--management-agent-id",
              description:
                "The OCID of the Management Agent that will provision the APM Agent",
              args: { name: "management-agent-id" },
              isRequired: true,
            },
            {
              name: "--process-filter",
              description:
                "Filter patterns used to discover active Java processes for provisioning the APM Agent",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--run-as-user",
              description:
                "The OS user that should be used to discover Java processes",
              args: { name: "run-as-user" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the service being monitored",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--agent-version",
              description: "The version of the referenced agent bundle",
              args: { name: "agent-version" },
              isRequired: true,
            },
            {
              name: "--attach-install-dir",
              description: "The directory owned by runAsUser",
              args: { name: "attach-install-dir", template: "folders" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optDisplayName,
            optOpcDryRun,
            optFromJson,
          ],
        },
        {
          name: "update-agent",
          description:
            "Updates the details of the configuration item identified by the OCID",
          options: [
            optApmDomainId,
            optConfigId,
            optFreeformTags,
            optDefinedTags,
            { name: "--config", args: { name: "json" } },
            { name: "--overrides", args: { name: "json" } },
            optIfMatch,
            optOpcDryRun,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "update-macs-extension",
          description:
            "Updates the details of the configuration item identified by the OCID",
          options: [
            optApmDomainId,
            optConfigId,
            optFreeformTags,
            optDefinedTags,
            optDisplayName,
            {
              name: "--process-filter",
              description:
                "Filter patterns used to discover active Java processes for provisioning the APM Agent",
              args: { name: "json" },
            },
            {
              name: "--run-as-user",
              description:
                "The OS user that should be used to discover Java processes",
              args: { name: "run-as-user" },
            },
            {
              name: "--service-name",
              description: "The name of the service being monitored",
              args: { name: "service-name" },
            },
            {
              name: "--agent-version",
              description: "The version of the referenced agent bundle",
              args: { name: "agent-version" },
            },
            {
              name: "--attach-install-dir",
              description: "The directory owned by runAsUser",
              args: { name: "attach-install-dir", template: "folders" },
            },
            optIfMatch,
            optOpcDryRun,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "match-agents-with-attribute-key",
      description: "The object representing the agent matching attribute keys",
      subcommands: [
        {
          name: "get",
          description: "The domain-wide agents matching attribute key",
          options: [optApmDomainId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the agent matching attribute key for the APM Domain",
          options: [
            optApmDomainId,
            {
              name: "--items",
              description:
                "The list of agent matching attribute keys to be updated",
              args: { name: "json" },
            },
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "test",
      description: "The result of running a test",
      subcommands: [
        {
          name: "test",
          description:
            "Tests a data processing operation on the provided input, returning the potentially modified input as output",
          options: [
            optApmDomainId,
            {
              name: "--test-type",
              description: "The kind of test to run",
              args: { suggestions: ["SPAN_ENRICHMENT"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "span-enrichment-group",
          description:
            "Tests a data processing operation on the provided input, returning the potentially modified input as output",
          options: [
            optApmDomainId,
            {
              name: "--options",
              description:
                "The span enrichment rules to test in the format of an Options resource",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--span",
              description: "The span to test the rules on",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--filters",
              description: "A list of filters to try against the given span",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "export-configuration",
      description:
        "Array of configuration items with its dependencies to export",
      subcommands: [
        {
          name: "copy",
          description:
            "Fast importing configuration items to a destination APM domain ID",
          options: [
            {
              name: "--configuration-map",
              description:
                "Simple key-value pair that has parameters related to the import process (EnableOcidSubstitution",
              args: { name: "json" },
              isRequired: true,
            },
            optApmDomainId,
            {
              name: "--apm-target-domain-id",
              description:
                "The Target APM Domain ID the request is intended for",
              args: { name: "apm-target-domain-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "export",
          description:
            "Exports configurations for the whole domain by domainId",
          options: [
            {
              name: "--configuration-map",
              description:
                "Simple key-value pair that has parameters related to the export process (ConfigurationId, Skip, …) and more",
              args: { name: "json" },
              isRequired: true,
            },
            optApmDomainId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "import-configuration",
      description: "Array of configuration items with dependencies to import",
      subcommands: [
        {
          name: "import",
          description:
            "Import configurations Item(s) with its dependencies into a destination domain",
          options: [
            {
              name: "--configuration-items",
              description: "A list of Configurations Details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--configuration-map",
              description:
                "Simple key-value pair that has parameters related to the import process (EnableOcidSubstitution, Skip",
              args: { name: "json" },
              isRequired: true,
            },
            optApmDomainId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "data-file-collection",
      description: "A collection of Data File summaries",
      subcommands: [
        {
          name: "list",
          description: "Fetches a list of Data files using some parameters",
          options: [
            optApmDomainId,
            {
              name: "--apm-type",
              description: "The type of the data file",
              args: { name: "apm-type" },
            },
            {
              name: "--name",
              description:
                "A filter to return resources that match the specified name",
              args: { name: "name" },
            },
            {
              name: "--time-last-modified-before",
              description:
                "Return data files with time 'timeLastModified' before the specified time",
              args: { name: "datetime" },
            },
            {
              name: "--time-last-modified-after",
              description:
                "Return data files with the 'timeLastModified' after the specified time",
              args: { name: "datetime" },
            },
            {
              name: "--limit",
              description: "The maximum number of items to return",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                'The maximum number of results per page, or items to return in a paginated "List" call',
              args: { name: "page" },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending (ASC) or descending (DESC)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["displayName", "timeCreated", "timeUpdated"],
              },
            },
            {
              name: "--metadata",
              description:
                "A string containing a JSON-encoded object with metadata related to the uploaded file or resource",
              args: { name: "metadata" },
            },
            { name: "--all", description: "Fetches all pages of results" },
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
