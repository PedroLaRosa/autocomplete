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
const optDesktopPoolId: Fig.Option = {
  name: "--desktop-pool-id",
  description: "The OCID of the desktop pool",
  args: { name: "desktop-pool-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of results to return",
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
  description: "A field to indicate the sort order",
  args: { suggestions: ["ASC", "DESC"] },
};
const optDesktopId: Fig.Option = {
  name: "--desktop-id",
  description: "The OCID of the desktop",
  args: { name: "desktop-id" },
  isRequired: true,
};
const optAvailabilityDomain: Fig.Option = {
  name: "--availability-domain",
  description: "The name of the availability domain",
  args: { name: "availability-domain" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment of the desktop pool",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A filter to return only results with the given displayName",
  args: { name: "display-name" },
};
const optId: Fig.Option = {
  name: "--id",
  description: "A filter to return only results with the given OCID",
  args: { name: "id" },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "A filter to return only results with the given lifecycleState",
  args: { name: "lifecycle-state" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "A field to sort by",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const completionSpec: Fig.Spec = {
  name: "desktops",
  description: "Secure Desktops",
  subcommands: [
    {
      name: "desktop",
      description:
        "Provides information about a desktop including name, state, id, configuration, owner, and time created",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the desktop with the specified OCID",
          options: [
            optDesktopId,
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
            "Provides information about the desktop with the specified OCID",
          options: [optDesktopId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of desktops filtered by the specified parameters",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optDisplayName,
            optId,
            optLifecycleState,
            optLimit,
            optSortBy,
            optSortOrder,
            optPage,
            {
              name: "--desktop-pool-id",
              description: "The OCID of the desktop pool",
              args: { name: "desktop-pool-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Starts the desktop with the specified OCID",
          options: [
            optDesktopId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops the desktop with the specified OCID",
          options: [
            optDesktopId,
            optIfMatch,
            {
              name: "--is-soft-stop",
              description:
                "Force a STOP(power off) of the desktop if set to false",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Modifies information about the desktop such as the name",
          options: [
            optDesktopId,
            {
              name: "--display-name",
              description: "A user friendly display name",
              args: { name: "display-name" },
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
      name: "work-request",
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel work request with the given ID",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description:
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-work-request-logs",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
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
      name: "desktop-pool",
      description:
        "Provides information about a desktop pool including all configuration parameters",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a desktop pool into a different compartment within the same tenancy",
          options: [
            optDesktopPoolId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment which will contain the desktop pool",
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
            "Creates a desktop pool with the given configuration parameters",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment which will contain the desktop pool",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user friendly display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--maximum-size",
              description:
                "The maximum number of desktops permitted in the desktop pool",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--standby-size",
              description:
                "The maximum number of standby desktops available in the desktop pool",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--shape-name",
              description: "The shape of the desktop pool",
              args: { name: "shape-name" },
              isRequired: true,
            },
            {
              name: "--is-storage-enabled",
              description:
                "Indicates whether storage is enabled for the desktop pool",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--storage-size-in-gbs",
              description:
                "The size in GBs of the storage for the desktop pool",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--storage-backup-policy-id",
              description: "The backup policy OCID of the storage",
              args: { name: "storage-backup-policy-id" },
              isRequired: true,
            },
            {
              name: "--device-policy",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--availability-policy",
              args: { name: "json" },
              isRequired: true,
            },
            { name: "--image", args: { name: "json" }, isRequired: true },
            {
              name: "--network-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--contact-details",
              description:
                "Contact information of the desktop pool administrator",
              args: { name: "contact-details" },
              isRequired: true,
            },
            {
              name: "--are-privileged-users",
              description:
                "Indicates whether desktop pool users have administrative privileges on their desktop",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description: "The availability domain of the desktop pool",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "A user friendly description providing additional information about the resource",
              args: { name: "description" },
            },
            { name: "--shape-config", args: { name: "json" } },
            {
              name: "--use-dedicated-vm-host",
              description:
                "Indicates whether the desktop pool uses dedicated virtual machine hosts",
              args: { suggestions: ["TRUE", "FALSE", "AUTO"] },
            },
            { name: "--session-lifecycle-actions", args: { name: "json" } },
            {
              name: "--time-start-scheduled",
              description: "The start time of the desktop pool",
              args: { name: "datetime" },
            },
            {
              name: "--time-stop-scheduled",
              description: "The stop time of the desktop pool",
              args: { name: "datetime" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--nsg-ids",
              description:
                "A list of network security groups for the private access",
              args: { name: "json" },
            },
            { name: "--private-access-details", args: { name: "json" } },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            {
              name: "--boot-volume-size-in-gbs",
              description:
                "The size in GBs of the boot volume for the desktop pool",
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
          description: "Deletes a desktop pool with the specified OCID",
          options: [
            optDesktopPoolId,
            optIfMatch,
            {
              name: "--are-volumes-preserved",
              description:
                "Whether the volumes are preserved when a desktop pool is deleted",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
            "Returns information about the desktop pool including all configuration parameters and the current state",
          options: [optDesktopPoolId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of desktop pools within the given compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optDisplayName,
            optId,
            optLifecycleState,
            optLimit,
            optSortBy,
            optSortOrder,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Starts the desktop pool with the specified OCID",
          options: [
            optDesktopPoolId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops the desktop pool with the specified OCID",
          options: [
            optDesktopPoolId,
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
            "Modifies the configuration of the desktop pool such as the availability, contact information, description",
          options: [
            optDesktopPoolId,
            {
              name: "--display-name",
              description: "A user friendly display name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "A user friendly description providing additional information about the resource",
              args: { name: "description" },
            },
            {
              name: "--maximum-size",
              description:
                "The maximum number of desktops permitted in the desktop pool",
              args: { name: "integer" },
            },
            {
              name: "--standby-size",
              description:
                "The maximum number of standby desktops available in the desktop pool",
              args: { name: "integer" },
            },
            { name: "--device-policy", args: { name: "json" } },
            { name: "--availability-policy", args: { name: "json" } },
            {
              name: "--contact-details",
              description:
                "Contact information of the desktop pool administrator",
              args: { name: "contact-details" },
            },
            {
              name: "--time-start-scheduled",
              description: "The start time of the desktop pool",
              args: { name: "datetime" },
            },
            {
              name: "--time-stop-scheduled",
              description: "The stop time of the desktop pool",
              args: { name: "datetime" },
            },
            optFreeformTags,
            optDefinedTags,
            { name: "--session-lifecycle-actions", args: { name: "json" } },
            { name: "--image", args: { name: "json" } },
            { name: "--network-configuration", args: { name: "json" } },
            { name: "--private-access-details", args: { name: "json" } },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            {
              name: "--boot-volume-size-in-gbs",
              description:
                "The size in GBs of the boot volume for the desktop pool",
              args: { name: "integer" },
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
          name: "list-desktops",
          description: "Returns a list of desktops within a given desktop pool",
          options: [
            optCompartmentId,
            optDesktopPoolId,
            optAvailabilityDomain,
            optDisplayName,
            optId,
            optLifecycleState,
            optLimit,
            optSortBy,
            optSortOrder,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-volumes",
          description:
            "Returns a list of volumes within the given desktop pool",
          options: [
            optDesktopPoolId,
            optCompartmentId,
            optAvailabilityDomain,
            optDisplayName,
            optId,
            optLifecycleState,
            optLimit,
            optSortBy,
            optSortOrder,
            optPage,
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
