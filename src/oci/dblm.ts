// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "A token representing the position at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optDatabaseRelease: Fig.Option = {
  name: "--database-release",
  description:
    "A filter to return only database that match the given release version",
  args: { name: "database-release" },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources their lifecycleState matches the given lifecycleState",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "FAILED",
      "NEEDS_ATTENTION",
      "DELETING",
      "DELETED",
    ],
  },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The required ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "dblm",
  description: "Dblm",
  subcommands: [
    {
      name: "dblm-patch-management",
      description: "Description of PatchManagement",
      subcommands: [
        {
          name: "get-patch-management",
          description: "Overview of Patch Management",
          options: [
            optCompartmentId2,
            optDatabaseRelease,
            optLifecycleState,
            {
              name: "--time-started-greater-than-or-equal-to",
              description:
                "A filter to return only resources whose timeStarted is greater than or equal to the given date-time",
              args: { name: "datetime" },
            },
            {
              name: "--time-started-less-than",
              description:
                "A filter to return only resources whose timeStarted is less than the given date-time",
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "vulnerability-scan-collection",
      description: "Results of a VulnerabilityScan search",
      subcommands: [
        {
          name: "list-vulnerability-scans",
          description: "Gets a list of VulnerabilityScans",
          options: [
            {
              name: "--vulnerability-scan-id",
              description: "The ID of the vulnerability scan",
              args: { name: "vulnerability-scan-id" },
            },
            optCompartmentId,
            optDisplayName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["id", "displayName", "timeCreated", "timeEnded"],
              },
            },
            {
              name: "--time-created-greater-than",
              description: "The created greater than",
              args: { name: "datetime" },
            },
            {
              name: "--time-ended-less-than",
              description: "The time ended less than",
              args: { name: "datetime" },
            },
            {
              name: "--vulnerability-scan-status",
              description: "Filter by one or more vulnerability scan status",
              args: {
                suggestions: ["COMPLETED", "ERROR", "RUNNING", "ABORTED"],
              },
              isRepeatable: true,
            },
            {
              name: "--vulnerability-scan-type",
              description:
                "The scan type to use is 'CVE', 'PATCH' or 'IMAGE_PATCH'",
              args: { suggestions: ["CVE", "PATCH", "IMAGE_PATCH"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dblm-vulnerability",
      description:
        "A Dblm Vulnerability is a description of a Dblm Vulnerability",
      subcommands: [
        {
          name: "get-vulnerability",
          description: "Gets a Vulnerability",
          options: [
            optCompartmentId2,
            optDatabaseRelease,
            optLifecycleState,
            optFromJson,
          ],
        },
        {
          name: "list-aggregated-vulnerability-data",
          description: "Gets an AggregatedVulnerabilityData",
          options: [
            optCompartmentId,
            {
              name: "--time-created-greater-than",
              description: "The created greater than",
              args: { name: "datetime" },
            },
            {
              name: "--time-ended-less-than",
              description: "The time ended less than",
              args: { name: "datetime" },
            },
            optDatabaseRelease,
            optLifecycleState,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-vulnerabilities",
          description: "Gets the vulnerabilities summary list",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optDisplayName,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["cveId", "vulnerableResources"] },
            },
            optLifecycleState,
            optDatabaseRelease,
            {
              name: "--resource-id",
              description:
                "A filter to return only resources that match the given resource id",
              args: { name: "resource-id" },
            },
            {
              name: "--severity-type",
              description: "Filter by one or more severity types",
              args: {
                suggestions: ["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFO"],
              },
              isRepeatable: true,
            },
            {
              name: "--search-by",
              description:
                "The search input for filter cve id and cve description",
              args: { name: "search-by" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "patch-databases-collection",
      description: "Results of a patchDatabases search",
      subcommands: [
        {
          name: "list-databases",
          description: "Gets the list of databases",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDatabaseRelease,
            {
              name: "--database-type",
              description: "Filter by database type",
              args: { suggestions: ["SI", "RAC"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "timeCreated",
                  "name",
                  "resourceType",
                  "release",
                  "subscribedImage",
                  "patchCompliance",
                ],
              },
            },
            {
              name: "--image-id",
              description: "Subscribed image",
              args: { name: "image-id" },
            },
            optDisplayName,
            {
              name: "--drifter-patch-id",
              description:
                "A filter to return only database that have given patchId as additional patch (drifter from image version)",
              args: { name: "integer" },
            },
            {
              name: "--image-compliance",
              description: "Filter databases by image compliance status",
              args: {
                suggestions: [
                  "NOT_SUBSCRIBED",
                  "NOT_COMPLIANT_WITH_IMAGES",
                  "ALL_DATABASES",
                ],
              },
            },
            {
              name: "--severity-type",
              description: "Filter by one or more severity types",
              args: {
                suggestions: [
                  "CRITICAL",
                  "HIGH",
                  "MEDIUM",
                  "LOW",
                  "INFO",
                  "NONE",
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
      name: "notification-collection",
      description: "Collection of notifications for new CVEs and CPUs",
      subcommands: [
        {
          name: "list-notifications",
          description: "List of notifications",
          options: [optCompartmentId2, optLimit, optAll, optFromJson],
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
            "Returns a (paginated) list of errors for the work request with the given ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
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
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description:
            "Returns a (paginated) list of logs for the work request with the given ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
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
      name: "vulnerability-resource-collection",
      description:
        "Collection of assessed resources that may or may not have vulnerabilities",
      subcommands: [
        {
          name: "list-vulnerability-resources",
          description: "Lists the summary of vulnerable and clean resourcees",
          options: [
            optCompartmentId2,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "timeCreated",
                  "displayName",
                  "vulnerabilityCount",
                ],
              },
            },
            optDisplayName,
            optLifecycleState,
            optDatabaseRelease,
            {
              name: "--cve-id",
              description: "The id of a CVE",
              args: { name: "cve-id" },
            },
            {
              name: "--severity-type",
              description: "Filter by one or more severity types",
              args: {
                suggestions: [
                  "CRITICAL",
                  "HIGH",
                  "MEDIUM",
                  "LOW",
                  "INFO",
                  "NONE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--patch-recommendation",
              description: "Filter by one or more severity types",
              args: { suggestions: ["upToDate", "patchAvailable"] },
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
      name: "work-request",
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "get",
          description: "Gets details of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources their lifecycleState matches the given OperationStatus",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--resource-id",
              description:
                "The ID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "vulnerability-scan",
      description:
        "A VulnerabilityScan is a description of a VulnerabilityScan",
      subcommands: [
        {
          name: "create",
          description: "Creates a VulnerabilityScan",
          options: [
            {
              name: "--compartment-id",
              description: "Compartment Identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--vulnerability-scan-type",
              description:
                "Vulnerability Scan type is CVE, PATCH or IMAGE_PATCH",
              args: { name: "vulnerability-scan-type" },
              isRequired: true,
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
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
          name: "get",
          description: "Gets information about a VulnerabilityScan",
          options: [
            {
              name: "--vulnerability-scan-id",
              description: "The OCID of the VulnerabilityScan",
              args: { name: "vulnerability-scan-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
