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
const optResourceAnalyticsInstanceId: Fig.Option = {
  name: "--resource-analytics-instance-id",
  description: "The OCID of the ResourceAnalyticsInstance",
  args: { name: "resource-analytics-instance-id" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optTenancyAttachmentId: Fig.Option = {
  name: "--tenancy-attachment-id",
  description: "The OCID of the TenancyAttachment",
  args: { name: "tenancy-attachment-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "resource-analytics",
  description: "Resource Analytics",
  subcommands: [
    {
      name: "monitored-region",
      description:
        "A MonitoredRegion is a region to collect data for the associated ResourceAnalyticsInstance",
      subcommands: [
        {
          name: "create",
          description: "Creates a MonitoredRegion",
          options: [
            {
              name: "--resource-analytics-instance-id",
              description:
                "The OCID of the ResourceAnalyticsInstance associated with this MonitoredRegion",
              args: { name: "resource-analytics-instance-id" },
              isRequired: true,
            },
            {
              name: "--region-id",
              description: "The Region Identifier of this MonitoredRegion",
              args: { name: "region-id" },
              isRequired: true,
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a MonitoredRegion",
          options: [
            {
              name: "--monitored-region-id",
              description: "The OCID of the MonitoredRegion",
              args: { name: "monitored-region-id" },
              isRequired: true,
            },
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
          description: "Gets information about a MonitoredRegion",
          options: [
            {
              name: "--monitored-region-id",
              description: "The OCID of the MonitoredRegion",
              args: { name: "monitored-region-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of MonitoredRegions",
          options: [
            {
              name: "--resource-analytics-instance-id",
              description: "The OCID of a ResourceAnalyticsInstance",
              args: { name: "resource-analytics-instance-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
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
            {
              name: "--id",
              description: "The OCID of the MonitoredRegion",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIME_CREATED", "REGION_ID"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource-analytics-instance",
      description:
        "A ResourceAnalyticsInstance is an ADW housing analytics for all of a customers' OCI resources",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a ResourceAnalyticsInstance into a different compartment within the same tenancy",
          options: [
            optResourceAnalyticsInstanceId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the ResourceAnalyticsInstance to",
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
          description: "Creates a ResourceAnalyticsInstance",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the ResourceAnalyticsInstance in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet the resource is associated with",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--adw-admin-password-secret-id",
              description:
                "The OCID of the vault secret to use as the ADW admin password",
              args: { name: "adw-admin-password-secret-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "A description of the ResourceAnalyticsInstance instance",
              args: { name: "description" },
            },
            {
              name: "--is-mutual-tls-required",
              description:
                "Require mutual TLS (mTLS) when authenticating connections to the ADW database",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--nsg-ids",
              description: "List of Network Security Group OCID's",
              args: { name: "json" },
            },
            {
              name: "--compute-count",
              description:
                "The compute amount (CPUs) available to the Autonomous Database",
              args: { name: "integer" },
            },
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to the ADW instance",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
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
          description: "Deletes a ResourceAnalyticsInstance",
          options: [
            optResourceAnalyticsInstanceId,
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
          description: "Gets information about a ResourceAnalyticsInstance",
          options: [optResourceAnalyticsInstanceId, optFromJson],
        },
        {
          name: "disable-oac",
          description:
            "Disable an OAC instance for a ResourceAnalyticsInstance",
          options: [
            optResourceAnalyticsInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-oac",
          description:
            "Attaches an OAC instance to a ResourceAnalyticsInstance",
          options: [
            optResourceAnalyticsInstanceId,
            {
              name: "--attachment-type",
              description: "The type of attachment the OAC instance is using",
              args: { suggestions: ["MANAGED"] },
              isRequired: true,
            },
            {
              name: "--attachment-details",
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
          name: "update",
          description: "Updates a ResourceAnalyticsInstance",
          options: [
            optResourceAnalyticsInstanceId,
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "A description of the ResourceAnalyticsInstance instance",
              args: { name: "description" },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
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
        {
          name: "list",
          description: "Gets a list of ResourceAnalyticsInstances",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "NEEDS_ATTENTION",
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
              description: "The OCID of the ResourceAnalyticsInstance",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIME_CREATED", "DISPLAY_NAME"] },
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
          name: "list",
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
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
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
      name: "tenancy-attachment",
      description:
        "A TenancyAttachment is a customers' tenancy attached to a ResourceAnalyticsInstance",
      subcommands: [
        {
          name: "create",
          description: "Creates a TenancyAttachment",
          options: [
            {
              name: "--resource-analytics-instance-id",
              description:
                "The OCID of the ResourceAnalyticsInstance associated with this TenancyAttachment",
              args: { name: "resource-analytics-instance-id" },
              isRequired: true,
            },
            {
              name: "--tenancy-id",
              description:
                "The OCID of the tenancy associated with this TenancyAttachment",
              args: { name: "tenancy-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description of the tenancy",
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
          description: "Deletes a TenancyAttachment",
          options: [
            optTenancyAttachmentId,
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
          description: "Gets information about a TenancyAttachment",
          options: [optTenancyAttachmentId, optFromJson],
        },
        {
          name: "update",
          description: "Updates a TenancyAttachment",
          options: [
            optTenancyAttachmentId,
            {
              name: "--description",
              description: "A description of the tenancy",
              args: { name: "description" },
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
          name: "list",
          description: "Gets a list of TenancyAttachments",
          options: [
            {
              name: "--resource-analytics-instance-id",
              description: "The OCID of a ResourceAnalyticsInstance",
              args: { name: "resource-analytics-instance-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "NEEDS_ATTENTION",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--id",
              description: "The OCID of the TenancyAttachment",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIME_CREATED", "DESCRIPTION"] },
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
