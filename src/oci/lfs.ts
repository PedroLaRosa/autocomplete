// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optObjectStorageLinkId: Fig.Option = {
  name: "--object-storage-link-id",
  description: "The OCID of the Object Storage link",
  args: { name: "object-storage-link-id" },
  isRequired: true,
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "For list pagination",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "For list pagination",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
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
const optLustreFileSystemId: Fig.Option = {
  name: "--lustre-file-system-id",
  description: "The OCID of the Lustre file system",
  args: { name: "lustre-file-system-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optAvailabilityDomain: Fig.Option = {
  name: "--availability-domain",
  description: "The name of the availability domain",
  args: { name: "availability-domain" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["CREATING", "ACTIVE", "DELETING", "DELETED", "FAILED"],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "lfs",
  description: "File Storage with Lustre",
  subcommands: [
    {
      name: "object-storage-link",
      description:
        "Object Storage links create the relationship between a directory in an File Storage with Lustre file system",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an Object Storage link into a different compartment within the same tenancy",
          options: [
            optObjectStorageLinkId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Object Storage link to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an Object Storage link",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the Object Storage link",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description:
                "The availability domain that the Lustre file system is in",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--lustre-file-system-id",
              description: "The OCID of the associated Lustre file system",
              args: { name: "lustre-file-system-id" },
              isRequired: true,
            },
            {
              name: "--file-system-path",
              description:
                "The path in the Lustre file system used for this Object Storage link",
              args: { name: "file-system-path" },
              isRequired: true,
            },
            {
              name: "--object-storage-prefix",
              description:
                "The Object Storage namespace and bucket name, including optional object prefix string",
              args: { name: "object-storage-prefix" },
              isRequired: true,
            },
            {
              name: "--is-overwrite",
              description:
                "The flag is an identifier to tell whether the job run has overwrite enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optDisplayName,
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
          description: "Deletes an Object Storage link",
          options: [
            optObjectStorageLinkId,
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
          description: "Gets information about an Object Storage link",
          options: [optObjectStorageLinkId, optFromJson],
        },
        {
          name: "get-sync-job",
          description:
            "Gets details of a sync job associated with an Object Storage link when objectStorageLink and a unique ID",
          options: [
            optObjectStorageLinkId,
            {
              name: "--sync-job-id",
              description: "The OCID of the sync job",
              args: { name: "sync-job-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list-sync-jobs",
          description:
            "Lists all sync jobs associated with the Object Storage link",
          options: [
            optObjectStorageLinkId,
            optLimit,
            optPage,
            optSortOrder,
            optIfMatch,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "FAILED",
                  "FAILING",
                ],
              },
            },
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
          name: "start-export-to-object",
          description:
            "Starts the export of data from the Lustre file system to Object Storage",
          options: [optObjectStorageLinkId, optIfMatch, optFromJson],
        },
        {
          name: "start-import-from-object",
          description:
            "Starts the import of data from Object Storage to the Lustre file system",
          options: [optObjectStorageLinkId, optIfMatch, optFromJson],
        },
        {
          name: "stop-export-to-object",
          description:
            "Stops the export of data from the Lustre file system to Object Storage",
          options: [optObjectStorageLinkId, optIfMatch, optFromJson],
        },
        {
          name: "stop-import-from-object",
          description:
            "Stops the import of data from Object Storage to the Lustre file system",
          options: [optObjectStorageLinkId, optIfMatch, optFromJson],
        },
        {
          name: "update",
          description: "Updates an Object Storage link",
          options: [
            optObjectStorageLinkId,
            optDisplayName,
            {
              name: "--is-overwrite",
              description:
                "The flag is an identifier to tell whether the job run has overwrite enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
      name: "lustre-file-system",
      description:
        "A Lustre file system is a parallel file system that is used as a storage solution for HPC/AI/ML workloads",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Lustre file system into a different compartment within the same tenancy",
          options: [
            optLustreFileSystemId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the Lustre file system to",
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
          description: "Creates a Lustre file system",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the Lustre file system",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description: "The availability domain the file system is in",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--file-system-name",
              description: "The Lustre file system name",
              args: { name: "file-system-name" },
              isRequired: true,
            },
            {
              name: "--capacity-in-gbs",
              description: "Capacity of the Lustre file system in GB",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet the Lustre file system is in",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--performance-tier",
              description: "The Lustre file system performance tier",
              args: {
                suggestions: [
                  "MBPS_PER_TB_125",
                  "MBPS_PER_TB_250",
                  "MBPS_PER_TB_500",
                  "MBPS_PER_TB_1000",
                ],
              },
              isRequired: true,
            },
            {
              name: "--root-squash-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--file-system-description",
              description: "Short description of the Lustre file system",
              args: { name: "file-system-description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--nsg-ids",
              description:
                "A list of Network Security Group OCIDs associated with this lustre file system",
              args: { name: "json" },
            },
            {
              name: "--kms-key-id",
              description:
                "The OCID of the KMS key used to encrypt the encryption keys associated with this file system",
              args: { name: "kms-key-id" },
            },
            {
              name: "--cluster-placement-group-id",
              description:
                "The OCID of the cluster placement group in which the Lustre file system exists",
              args: { name: "cluster-placement-group-id" },
            },
            { name: "--maintenance-window", args: { name: "json" } },
            { name: "--tiering-configuration", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Lustre file system",
          options: [
            optLustreFileSystemId,
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
          description: "Gets information about a Lustre file system",
          options: [optLustreFileSystemId, optFromJson],
        },
        {
          name: "override-maintenance",
          description:
            "Overrides the upcoming maintenance to the value provided by user",
          options: [
            optLustreFileSystemId,
            { name: "--date-time-details", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a Lustre file system",
          options: [
            optLustreFileSystemId,
            optDisplayName,
            {
              name: "--file-system-description",
              description: "Short description of the Lustre file system",
              args: { name: "file-system-description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--nsg-ids",
              description:
                "A list of Network Security Group OCIDs associated with this lustre file system",
              args: { name: "json" },
            },
            {
              name: "--kms-key-id",
              description:
                "The OCID of the KMS key used to encrypt the encryption keys associated with this file system",
              args: { name: "kms-key-id" },
            },
            {
              name: "--capacity-in-gbs",
              description: "Capacity of the Lustre file system in GB",
              args: { name: "integer" },
            },
            { name: "--root-squash-configuration", args: { name: "json" } },
            { name: "--maintenance-window", args: { name: "json" } },
            { name: "--tiering-configuration", args: { name: "json" } },
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
      name: "available-maintenance-schedule-start-time-collection",
      description:
        "List of items containing available start times on every day of the week",
      subcommands: [
        {
          name: "list-available-maintenance-schedule-start-times",
          description:
            "Gets the list of available maintenance schedule start times for both Create and Update operation",
          options: [
            {
              name: "--id",
              description: "The OCID of the Lustre file system",
              args: { name: "id" },
            },
            optCompartmentId,
            optAvailabilityDomain,
            {
              name: "--day-of-week",
              description: "Day of the week filter",
              args: {
                suggestions: [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY",
                ],
              },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["dayOfWeek"] },
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
      name: "available-override-maintenance-start-time-collection",
      description:
        "List of items containing available start times on every day of the week",
      subcommands: [
        {
          name: "list-available-override-maintenance-start-times",
          description:
            "Gets the list of available maintenance start times for Override operation",
          options: [
            {
              name: "--id",
              description: "The OCID of the Lustre file system",
              args: { name: "id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["date"] },
            },
            optSortOrder,
            {
              name: "--date",
              description: "Date in format YYYY-MM-DD",
              args: { name: "date" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "lustre-file-system-collection",
      description: "Results of a Lustre file system search",
      subcommands: [
        {
          name: "list-lustre-file-systems",
          description: "Gets a list of Lustre file systems",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the given display name exactly",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "The OCID of the Lustre file system",
              args: { name: "id" },
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
      name: "work-request-error",
      description:
        "An error encountered while performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "Lists the errors for a work request",
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
      description:
        "A log message from performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description: "Lists the logs for a work request",
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
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a work request",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "The OCID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only the resources that match the given lifecycle state",
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
                "The OCID of the resource affected by the work request",
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
      name: "object-storage-link-collection",
      description: "Results of a Object Storage link search",
      subcommands: [
        {
          name: "list-object-storage-links",
          description: "Gets a list of Object Storage links",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the given display name exactly",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "The OCID of the Object Storage link",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            {
              name: "--lustre-file-system-id",
              description: "The OCID of the Lustre file system",
              args: { name: "lustre-file-system-id" },
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
