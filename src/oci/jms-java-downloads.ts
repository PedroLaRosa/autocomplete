// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
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
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the tenancy",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type, or scope",
  args: { name: "json" },
};
const optWaitForState: Fig.Option = {
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
const optFamilyVersion: Fig.Option = {
  name: "--family-version",
  description: "Unique Java family version identifier",
  args: { name: "family-version" },
};
const optJavaDownloadReportId: Fig.Option = {
  name: "--java-download-report-id",
  description: "Unique Java download report identifier",
  args: { name: "java-download-report-id" },
  isRequired: true,
};
const optJavaDownloadTokenId: Fig.Option = {
  name: "--java-download-token-id",
  description: "Unique JavaDownloadToken identifier",
  args: { name: "java-download-token-id" },
  isRequired: true,
};
const optJavaLicenseAcceptanceRecordId: Fig.Option = {
  name: "--java-license-acceptance-record-id",
  description: "Unique Java license acceptance record identifier",
  args: { name: "java-license-acceptance-record-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACTIVE",
      "CREATING",
      "DELETED",
      "DELETING",
      "FAILED",
      "NEEDS_ATTENTION",
      "UPDATING",
    ],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "jms-java-downloads",
  description: "Java Management Service Java Download",
  subcommands: [
    {
      name: "java-download-report",
      description: "Details about a Java download report in a tenancy",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new report in the specified format containing the download details for the tenancy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The compartment OCID here should be the tenancy OCID",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--format",
              description: "The format of the report that is generated",
              args: { suggestions: ["CSV"] },
              isRequired: true,
            },
            {
              name: "--time-start",
              description:
                "The start time from when download records have to be included (formatted according to RFC3339)",
              args: { name: "datetime" },
            },
            {
              name: "--time-end",
              description:
                "The end time until when the download records have to be included (formatted according to RFC3339)",
              args: { name: "datetime" },
            },
            {
              name: "--sort-by",
              description: "The property to be used for sorting the records",
              args: {
                suggestions: [
                  "timeDownloaded",
                  "downloadSourceId",
                  "downloadType",
                ],
              },
            },
            {
              name: "--sort-order",
              description: "The sort order for the records",
              args: { suggestions: ["ASC", "DESC"] },
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
          description: "Deletes a JavaDownloadReport resource by identifier",
          options: [
            optJavaDownloadReportId,
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
          description: "Gets a JavaDownloadReport by the specified identifier",
          options: [optJavaDownloadReportId, optFromJson],
        },
        {
          name: "get-java-download-report-content",
          description:
            "Retrieve a Java download report with the specified identifier",
          options: [
            optJavaDownloadReportId,
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
          name: "list",
          description: "Returns a list of JavaDownloadReports",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETED",
                  "DELETING",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "UPDATING",
                ],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the display name",
              args: { name: "display-name" },
            },
            {
              name: "--java-download-report-id",
              description: "Unique Java download report identifier",
              args: { name: "java-download-report-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "java-download-record",
      description: "A record of Java artifact download in a tenancy",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a list of Java download records in a tenancy based on specified parameters",
          options: [
            optCompartmentId,
            optFamilyVersion,
            {
              name: "--release-version",
              description: "Unique Java release version identifier",
              args: { name: "release-version" },
            },
            {
              name: "--os-family",
              description: "Target Operating System family of the artifact",
              args: { name: "os-family" },
            },
            {
              name: "--architecture",
              description:
                "Target Operating System architecture of the artifact",
              args: { name: "architecture" },
            },
            {
              name: "--package-type-detail",
              description: "Packaging type detail of the artifact",
              args: { name: "package-type-detail" },
            },
            {
              name: "--time-start",
              description:
                "The start of the time period for which reports are searched (formatted according to RFC3339)",
              args: { name: "datetime" },
            },
            {
              name: "--time-end",
              description:
                "The end of the time period for which reports are searched (formatted according to RFC3339)",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "If no value is specified _timeDownloaded_ is default",
              args: {
                suggestions: [
                  "timeDownloaded",
                  "downloadSourceId",
                  "downloadType",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "java-download-token",
      description:
        "A JavaDownloadToken is a primary resource for the script friendly URLs",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new JavaDownloadToken in the tenancy with specified attributes",
          options: [
            {
              name: "--display-name",
              description:
                "User provided display name of the JavaDownloadToken",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "User provided description of the JavaDownloadToken",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the tenancy scoped to the JavaDownloadToken",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--time-expires",
              description: "Expiry time of the token",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--java-version",
              description: "The Java version associated with the token",
              args: { name: "java-version" },
              isRequired: true,
            },
            {
              name: "--license-type",
              description:
                "The license type(s) associated with the JavaDownloadToken",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--is-default",
              description: "The token default attribute",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
          description: "Deletes a JavaDownloadToken resource by identifier",
          options: [
            optJavaDownloadTokenId,
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
          description: "Gets a JavaDownloadToken by identifier",
          options: [optJavaDownloadTokenId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of JavaDownloadTokens",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETED",
                  "DELETING",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "UPDATING",
                ],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "Unique JavaDownloadToken identifier",
              args: { name: "id" },
            },
            {
              name: "--value",
              description: "Unique JavaDownloadToken value",
              args: { name: "value" },
            },
            optFamilyVersion,
            {
              name: "--search-by-user",
              description:
                "A filter to return only resources that match the user principal detail",
              args: { name: "search-by-user" },
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
                  "timeExpires",
                  "state",
                  "displayName",
                  "javaVersion",
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
            "Updates the JavaDownloadToken specified by the identifier",
          options: [
            optJavaDownloadTokenId,
            {
              name: "--display-name",
              description:
                "User provided display name of the JavaDownloadToken",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "User provided description of the JavaDownloadToken",
              args: { name: "description" },
            },
            {
              name: "--is-default",
              description: "Update the token default status",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--time-expires",
              description: "Expiry time of the token",
              args: { name: "datetime" },
            },
            {
              name: "--license-type",
              description:
                "The license type(s) associated with the JavaDownloadToken",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
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
      name: "download-url",
      description: "Download Url object for the Java artifact",
      subcommands: [
        {
          name: "generate-artifact",
          description:
            "Generates a download URL and returns it in the response payload",
          options: [
            {
              name: "--artifact-id",
              description: "Unique identifier for the Java runtime artifact",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The tenancy OCID of the user initiating the download",
              args: { name: "compartment-id" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "java-license",
      description: "Details about a license type for Java",
      subcommands: [
        {
          name: "get",
          description: "Return details of the specified Java license type",
          options: [
            {
              name: "--license-type",
              description: "Unique Java license type",
              args: { suggestions: ["OTN", "NFTC", "BCL", "RESTRICTED"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Return a list with details of all Java licenses",
          options: [
            {
              name: "--license-type",
              description: "Unique Java license type",
              args: { suggestions: ["OTN", "NFTC", "BCL", "RESTRICTED"] },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the display name",
              args: { name: "display-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["licenseType", "displayName"] },
            },
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
      name: "java-license-acceptance-record",
      description: "User acceptance record for a Java license",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a Java license acceptance record for the specified license type in a tenancy",
          options: [
            {
              name: "--compartment-id",
              description: "The tenancy OCID of the user accepting the license",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--license-type",
              description: "License type for the Java version",
              args: { suggestions: ["OTN", "NFTC", "BCL", "RESTRICTED"] },
              isRequired: true,
            },
            {
              name: "--license-acceptance-status",
              description: "Status of license acceptance",
              args: { suggestions: ["ACCEPTED", "REVOKED"] },
              isRequired: true,
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
          description:
            "Deletes a Java license acceptance record with the specified identifier",
          options: [
            optJavaLicenseAcceptanceRecordId,
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
          description:
            "Returns a specific Java license acceptance record in a tenancy",
          options: [optJavaLicenseAcceptanceRecordId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of all the Java license acceptance records in a tenancy",
          options: [
            optCompartmentId,
            {
              name: "--search-by-user",
              description:
                "A filter to return only resources that match the user principal detail",
              args: { name: "search-by-user" },
            },
            {
              name: "--id",
              description: "Unique Java license acceptance record identifier",
              args: { name: "id" },
            },
            {
              name: "--license-type",
              description: "Unique Java license type",
              args: { suggestions: ["OTN", "NFTC", "BCL", "RESTRICTED"] },
            },
            {
              name: "--status",
              description: "The status of license acceptance",
              args: { suggestions: ["ACCEPTED", "REVOKED"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "timeAccepted",
                  "timeLastUpdated",
                  "licenseAcceptanceStatus",
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
            "Updates a specific Java license acceptance record in a tenancy",
          options: [
            optJavaLicenseAcceptanceRecordId,
            {
              name: "--license-acceptance-status",
              description: "Status of license acceptance",
              args: { suggestions: ["ACCEPTED", "REVOKED"] },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
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
          name: "cancel",
          description: "Cancels the work request with the given ID",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets details of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a tenancy",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description: "The ID of an asynchronous work request",
              args: { name: "id" },
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
      name: "java-download-count-aggregation",
      description: "Count of Java downloads aggregated by the specified type",
      subcommands: [
        {
          name: "request-summarized-java-download-counts",
          description:
            "Returns list of download counts grouped by the specified property",
          options: [
            {
              name: "--compartment-id",
              description:
                "The compartment OCID here should be the tenancy OCID",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--group-as",
              description:
                "The property that specifies the aggregation type for the download counts",
              args: {
                suggestions: ["JAVA_FAMILY", "JAVA_RELEASE", "PLATFORM"],
              },
              isRequired: true,
            },
            optFamilyVersion,
            {
              name: "--release-version",
              description: "Unique Java release version identifier",
              args: { name: "release-version" },
            },
            {
              name: "--time-start",
              description:
                "The start time from when download data has to be included (formatted according to RFC3339)",
              args: { name: "datetime" },
            },
            {
              name: "--time-end",
              description:
                "The end time until when the download data has to be included (formatted according to RFC3339)",
              args: { name: "datetime" },
            },
            {
              name: "--sort-by",
              description:
                "The property to be used for sorting the aggregated report",
              args: { suggestions: ["FAMILY_VERSION", "DOWNLOAD_COUNT"] },
            },
            {
              name: "--sort-order",
              description: "The sort order for the aggregated report",
              args: { suggestions: ["ASC", "DESC"] },
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
