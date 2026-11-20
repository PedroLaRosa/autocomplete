// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optFusionEnvironmentId: Fig.Option = {
  name: "--fusion-environment-id",
  description: "Unique FusionEnvironment identifier",
  args: { name: "fusion-environment-id" },
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
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optMarketingBrandId: Fig.Option = {
  name: "--marketing-brand-id",
  description: "Unique brand identifier",
  args: { name: "marketing-brand-id" },
  isRequired: true,
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
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
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
const optEmailSubdomainId: Fig.Option = {
  name: "--email-subdomain-id",
  description: "Unique emailSubdomain identifier",
  args: { name: "email-subdomain-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIME_CREATED", "DISPLAY_NAME"] },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optFusionEnvironmentFamilyId: Fig.Option = {
  name: "--fusion-environment-family-id",
  description: "The unique identifier (OCID) of the FusionEnvironmentFamily",
  args: { name: "fusion-environment-family-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE"] },
  isRepeatable: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optMicrositeId: Fig.Option = {
  name: "--microsite-id",
  description: "Unique microsite identifier",
  args: { name: "microsite-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optVanityDomainId: Fig.Option = {
  name: "--vanity-domain-id",
  description: "The unique identifier (OCID) of the VanityDomain",
  args: { name: "vanity-domain-id" },
  isRequired: true,
};
const optCommonName: Fig.Option = {
  name: "--common-name",
  description: "Fully qualified host name",
  args: { name: "common-name" },
  isRequired: true,
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter that returns all resources that match the specified status",
  args: { suggestions: ["ACTIVE", "INACTIVE"] },
};
const optName: Fig.Option = {
  name: "--name",
  description:
    "A filter to return only resources that match the entire name given",
  args: { name: "name" },
};
const optRefreshActivityId: Fig.Option = {
  name: "--refresh-activity-id",
  description: "The unique identifier (OCID) of the Refresh activity",
  args: { name: "refresh-activity-id" },
  isRequired: true,
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIME_CREATED", "NAME", "ID"] },
};
const optSortBy3: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const optVanityDomainActivityId: Fig.Option = {
  name: "--vanity-domain-activity-id",
  description: "The unique identifier (OCID) of the VanityDomainActivity",
  args: { name: "vanity-domain-activity-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "fusion-apps",
  description: "Fusion Applications Environment Management",
  subcommands: [
    {
      name: "fusion-environment-family",
      description: "Details of a Fusion environment family",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a FusionEnvironmentFamily into a different compartment",
          options: [
            optFusionEnvironmentFamilyId,
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
          description: "Creates a new FusionEnvironmentFamily",
          options: [
            {
              name: "--display-name",
              description: "A friendly name for the environment family",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the environment family is located",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--subscription-ids",
              description:
                "The list of the IDs of the applications subscriptions that are associated with the environment family",
              args: { name: "json" },
              isRequired: true,
            },
            { name: "--family-maintenance-policy", args: { name: "json" } },
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
          description:
            "Deletes a FusionEnvironmentFamily resource by identifier",
          options: [
            optFusionEnvironmentFamilyId,
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
            "Retrieves a fusion environment family identified by its OCID",
          options: [optFusionEnvironmentFamilyId, optFromJson],
        },
        {
          name: "get-fusion-environment-family-subscription-detail",
          description:
            "Gets the subscription details of an fusion environment family",
          options: [optFusionEnvironmentFamilyId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of FusionEnvironmentFamilies",
          options: [
            optCompartmentId,
            {
              name: "--fusion-environment-family-id",
              description:
                "The ID of the fusion environment family in which to list resources",
              args: { name: "fusion-environment-family-id" },
            },
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns all resources that match the specified lifecycle state",
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
          description: "Updates the FusionEnvironmentFamily",
          options: [
            optFusionEnvironmentFamilyId,
            {
              name: "--display-name",
              description: "A friendly name for the environment family",
              args: { name: "display-name" },
            },
            { name: "--family-maintenance-policy", args: { name: "json" } },
            {
              name: "--subscription-ids",
              description:
                "The list of the IDs of the applications subscriptions that are associated with the environment family",
              args: { name: "json" },
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
      name: "refresh-activity",
      description:
        "An environment refresh copies data from a source environment to a target environment",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes a scheduled RefreshActivity resource by identifier",
          options: [
            optFusionEnvironmentId,
            optRefreshActivityId,
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
          description: "Gets a RefreshActivity by identifier",
          options: [optFusionEnvironmentId, optRefreshActivityId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of RefreshActivities",
          options: [
            optFusionEnvironmentId,
            optDisplayName,
            {
              name: "--time-scheduled-start-greater-than-or-equal-to",
              description:
                "A filter that returns all resources that are scheduled after this date",
              args: { name: "datetime" },
            },
            {
              name: "--time-expected-finish-less-than-or-equal-to",
              description:
                "A filter that returns all resources that end before this date",
              args: { name: "datetime" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns all resources that match the specified status",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELED",
                ],
              },
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
      ],
    },
    {
      name: "update-refresh-activity-details",
      description: "The information about scheduled refresh",
      subcommands: [
        {
          name: "update-refresh-activity",
          description: "Updates a scheduled RefreshActivity",
          options: [
            optFusionEnvironmentId,
            optRefreshActivityId,
            {
              name: "--time-scheduled-start",
              description: "Time the refresh activity is scheduled to start",
              args: { name: "datetime" },
            },
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "vanity-domain-activity",
      description: "Vanity Domain Activity resource",
      subcommands: [
        {
          name: "create",
          description: "Create a VanityDomainActivity",
          options: [
            {
              name: "--vanity-domain-id",
              description: "Vanity domain ID",
              args: { name: "vanity-domain-id" },
              isRequired: true,
            },
            {
              name: "--time-scheduled",
              description: "Activity start time",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--operation-type",
              description: "The type of operation",
              args: {
                suggestions: ["ENABLE_VANITY_DOMAIN", "DELETE_VANITY_DOMAIN"],
              },
              isRequired: true,
            },
            optFusionEnvironmentId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a VanityDomainActivity",
          options: [
            optFusionEnvironmentId,
            optVanityDomainActivityId,
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
          description: "Gets a VanityDomainActivity",
          options: [
            optFusionEnvironmentId,
            optVanityDomainActivityId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a VanityDomainActivity",
          options: [
            optFusionEnvironmentId,
            optVanityDomainActivityId,
            {
              name: "--time-scheduled",
              description: "Expected activity start time",
              args: { name: "datetime" },
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
      name: "microsite",
      description: "Microsite details for a marketing brand",
      subcommands: [
        {
          name: "create",
          description: "Creates a microsite for brand",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            {
              name: "--name",
              description: "Microsite name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--dns-management",
              description: "Dns management type for email subdomain",
              args: { name: "dns-management" },
              isRequired: true,
            },
            {
              name: "--certificate-management",
              description: "Certificate management type for email subdomain",
              args: { name: "certificate-management" },
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
          description: "Delete microsite for a brand",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optMicrositeId,
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
          description: "Get the microsite for the brand",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optMicrositeId,
            optFromJson,
          ],
        },
        {
          name: "get-microsite-dns-config",
          description: "Get DNS records for microsite",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optMicrositeId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of microsites",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            {
              name: "--microsite-id",
              description: "Unique microsite identifier",
              args: { name: "microsite-id" },
            },
            optName,
            optLifecycleState,
            optSortOrder,
            optSortBy2,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates an microsite",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optMicrositeId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "validate-and-configure-microsite-dns",
          description: "Validate and configure DNS records for microsite",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optMicrositeId,
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
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy3,
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
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--status",
              description:
                "A filter to return only resources their lifecycleState matches the given OperationStatus",
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
            optSortBy3,
            optSortOrder,
            {
              name: "--resource-id",
              description:
                "The ID of the a resource in which to list associated resources",
              args: { name: "resource-id" },
            },
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
      name: "create-refresh-activity-details",
      description: "The information about current refresh",
      subcommands: [
        {
          name: "create-refresh-activity",
          description: "Creates a new RefreshActivity",
          options: [
            optFusionEnvironmentId,
            {
              name: "--source-fusion-environment-id",
              description: "The OCID of the source environment",
              args: { name: "source-fusion-environment-id" },
              isRequired: true,
            },
            {
              name: "--is-data-masking-opted",
              description:
                "Represents if the customer opted for Data Masking or not during refreshActivity",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--time-scheduled-start",
              description:
                "Current time the refresh activity is scheduled to start",
              args: { name: "datetime" },
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
      name: "fusion-environment",
      description: "Description of FusionEnvironment",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a FusionEnvironment into a different compartment",
          options: [
            optFusionEnvironmentId,
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
          description: "Creates a new FusionEnvironment",
          options: [
            {
              name: "--display-name",
              description: "FusionEnvironment Identifier can be renamed",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The unique identifier (OCID) of the compartment where the Fusion Environment is located",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--fusion-environment-family-id",
              description:
                "The unique identifier (OCID) of the Fusion Environment Family that the Fusion Environment belongs to",
              args: { name: "fusion-environment-family-id" },
              isRequired: true,
            },
            {
              name: "--fusion-environment-type",
              description: "The type of environment",
              args: { name: "fusion-environment-type" },
              isRequired: true,
            },
            {
              name: "--create-fusion-environment-admin-user-details",
              args: { name: "json" },
              isRequired: true,
            },
            { name: "--maintenance-policy", args: { name: "json" } },
            {
              name: "--kms-key-id",
              description: "Byok kms keyId",
              args: { name: "kms-key-id" },
            },
            {
              name: "--dns-prefix",
              description: "DNS prefix",
              args: { name: "dns-prefix" },
            },
            {
              name: "--additional-language-packs",
              description: "Language packs",
              args: { name: "json" },
            },
            { name: "--rules", description: "Rules", args: { name: "json" } },
            {
              name: "--additional-egress-rules",
              description:
                "Additional egress rules that should be applied to the environment",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--ipv6-dual-stack-enabled",
              description:
                "Enable IPv4/IPv6 dual stack support for the environment",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create-fusion-environment-admin-user",
          description: "Create a FusionEnvironment admin user",
          options: [
            {
              name: "--username",
              description: "The username for the administrator",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: "--email-address",
              description: "The email address for the administrator",
              args: { name: "email-address" },
              isRequired: true,
            },
            {
              name: "--first-name",
              description: "The administrator's first name",
              args: { name: "first-name" },
              isRequired: true,
            },
            {
              name: "--last-name",
              description: "The administrator's last name",
              args: { name: "last-name" },
              isRequired: true,
            },
            optFusionEnvironmentId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the Fusion environment identified by it's OCID",
          options: [
            optFusionEnvironmentId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-fusion-environment-admin-user",
          description:
            "Deletes the FusionEnvironment administrator user identified by the username",
          options: [
            {
              name: "--admin-username",
              description: "The admin user name for the fusion environment",
              args: { name: "admin-username" },
              isRequired: true,
            },
            optFusionEnvironmentId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-extract-details",
          description:
            "Begin the process of showing the details about where to retrieve data extract for a Fusion environment",
          options: [optFusionEnvironmentId, optFromJson],
        },
        {
          name: "get",
          description: "Gets a FusionEnvironment by identifier",
          options: [optFusionEnvironmentId, optFromJson],
        },
        {
          name: "initiate-extract",
          description:
            "Begin the process of generating the data extract for a Fusion environment",
          options: [
            optFusionEnvironmentId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-admin-users",
          description: "List all FusionEnvironment admin users",
          options: [optFusionEnvironmentId, optAll, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of FusionEnvironments",
          options: [
            optCompartmentId,
            {
              name: "--fusion-environment-family-id",
              description:
                "The ID of the fusion environment family in which to list resources",
              args: { name: "fusion-environment-family-id" },
            },
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns all resources that match the specified lifecycle state",
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
          name: "reset-fusion-environment-password",
          description: "Reset FusionEnvironment admin password",
          options: [
            {
              name: "--password",
              description: "Admin password",
              args: { name: "password" },
              isRequired: true,
            },
            optFusionEnvironmentId,
            {
              name: "--admin-username",
              description: "The admin user name for the fusion environment",
              args: { name: "admin-username" },
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
          description: "Updates the FusionEnvironment",
          options: [
            optFusionEnvironmentId,
            {
              name: "--display-name",
              description: "FusionEnvironment Identifier, can be renamed",
              args: { name: "display-name" },
            },
            {
              name: "--kms-key-id",
              description: "Byok kms keyId",
              args: { name: "kms-key-id" },
            },
            { name: "--maintenance-policy", args: { name: "json" } },
            {
              name: "--additional-language-packs",
              description: "Language packs",
              args: { name: "json" },
            },
            {
              name: "--rules",
              description:
                "Network access control rules to limit internet traffic that can access the environment",
              args: { name: "json" },
            },
            {
              name: "--additional-egress-rules",
              description:
                "Additional egress rules that should be applied to the environment",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--ipv6-dual-stack-enabled",
              description:
                "Enable IPv4/IPv6 dual stack support for the environment",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "data-masking-activity",
      description: "Details of data masking activity",
      subcommands: [
        {
          name: "create",
          description: "Creates a new DataMaskingActivity",
          options: [
            optFusionEnvironmentId,
            {
              name: "--is-resume-data-masking",
              description:
                "This allows the Data Safe service to resume the previously failed data masking activity",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a DataMaskingActivity by identifier",
          options: [
            optFusionEnvironmentId,
            {
              name: "--data-masking-activity-id",
              description: "Unique DataMasking run identifier",
              args: { name: "data-masking-activity-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of DataMaskingActivities",
          options: [
            optFusionEnvironmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns all resources that match the specified status",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELED",
                ],
              },
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
      ],
    },
    {
      name: "marketing-brand",
      description: "Marketing brand details for fusion environment",
      subcommands: [
        {
          name: "create",
          description: "Creates a marketing brand for fusion environment",
          options: [
            optFusionEnvironmentId,
            {
              name: "--name",
              description: "Marketing brand name for fusion environment",
              args: { name: "name" },
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
          description: "Deletes a Marketing brand for fusion Environment",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
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
          description: "Gets a Marketing Brand by identifier",
          options: [optFusionEnvironmentId, optMarketingBrandId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of marketing brands",
          options: [
            optFusionEnvironmentId,
            {
              name: "--marketing-brand-id",
              description: "Unique brand identifier",
              args: { name: "marketing-brand-id" },
            },
            optName,
            optLifecycleState,
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
          description: "Updates a Marketing Brand",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optFreeformTags,
            optDefinedTags,
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
      name: "vanity-domain",
      description: "Vanity Domain resource",
      subcommands: [
        {
          name: "create",
          description: "Create a VanityDomain",
          options: [
            optFusionEnvironmentId,
            {
              name: "--origin-cert-request-type",
              description:
                "The origin request type for which the certificate is generated",
              args: { suggestions: ["REQUEST_CSR", "REQUEST_DV"] },
            },
            {
              name: "--cdn-cert-request-type",
              description:
                "The cdn request type for which the certificate is generated",
              args: { suggestions: ["REQUEST_CSR", "REQUEST_DV"] },
            },
            {
              name: "--vanity-domain",
              description: "Vanity domain",
              args: { name: "vanity-domain" },
            },
            {
              name: "--dns-managed-by",
              description: "The dns is managed by the customer or Oracle",
              args: { suggestions: ["ORACLE_MANAGED", "CUSTOMER_MANAGED"] },
            },
            {
              name: "--prefix",
              description: "The prefix value of the DnsPrefix",
              args: { name: "prefix" },
            },
            { name: "--certificate-info", args: { name: "json" } },
            {
              name: "--change-management-link",
              description: "The cm link that was used to create the DNS prefix",
              args: { name: "change-management-link" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a VanityDomain",
          options: [
            optFusionEnvironmentId,
            optVanityDomainId,
            {
              name: "--does-download-origin-csr",
              description:
                "A parameter indicating whether to download the Origin Csr or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--does-download-akamai-csr",
              description:
                "A parameter indicating whether to download the Akamai Csr or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists all VanityDomains",
          options: [
            optFusionEnvironmentId,
            optCompartmentId,
            {
              name: "--is-full-vanity-domain",
              description:
                "The boolean filter to distinguish prefix or full vanity",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
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
          name: "submit-vanity-domain-validation",
          description: "Submit Vanity Domain Validation",
          options: [
            optVanityDomainId,
            optFusionEnvironmentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a VanityDomain",
          options: [
            optFusionEnvironmentId,
            optVanityDomainId,
            { name: "--certificate-info", args: { name: "json" } },
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "upload-vanity-domain-certificate",
          description: "Upload Vanity Domain certificate",
          options: [
            {
              name: "--is-akamai",
              description:
                "Identify if this is certificate for pod LB or Akamai",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optCommonName,
            {
              name: "--certificate-pem",
              description: "Public certificate PEM",
              args: { name: "certificate-pem" },
              isRequired: true,
            },
            optVanityDomainId,
            optFusionEnvironmentId,
            {
              name: "--certificate-chain-pem",
              description:
                "Certificate chain PEM, including intermediate and root",
              args: { name: "certificate-chain-pem" },
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
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optSortBy3,
            optSortOrder,
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
      name: "service-attachment",
      description: "Description of ServiceAttachment",
      subcommands: [
        {
          name: "create",
          description: "Attaches a service instance to the fusion pod",
          options: [
            {
              name: "--service-instance-type",
              description: "Type of the ServiceInstance being attached",
              args: { name: "service-instance-type" },
              isRequired: true,
            },
            {
              name: "--service-instance-id",
              description:
                "The service instance OCID of the instance being attached",
              args: { name: "service-instance-id" },
              isRequired: true,
            },
            optFusionEnvironmentId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a service attachment by identifier",
          options: [
            optFusionEnvironmentId,
            {
              name: "--service-attachment-id",
              description: "OCID of the Service Attachment",
              args: { name: "service-attachment-id" },
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
          description: "Gets a Service Attachment by identifier",
          options: [
            optFusionEnvironmentId,
            {
              name: "--service-attachment-id",
              description: "OCID of the Service Attachment",
              args: { name: "service-attachment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of service attachments",
          options: [
            optFusionEnvironmentId,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns all resources that match the specified lifecycle state",
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
              name: "--service-instance-type",
              description:
                "A filter that returns all resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "DIGITAL_ASSISTANT",
                  "INTEGRATION_CLOUD",
                  "ANALYTICS_WAREHOUSE",
                  "FUSION_DATA_INTELLIGENCE",
                  "VBCS",
                  "VISUAL_BUILDER_STUDIO",
                ],
              },
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
          name: "verify",
          description:
            "Verify whether a service instance can be attached to the fusion pod",
          options: [
            {
              name: "--service-instance-type",
              description: "Type of the ServiceInstance being attached",
              args: { name: "service-instance-type" },
              isRequired: true,
            },
            {
              name: "--service-instance-id",
              description:
                "The service instance OCID of the instance being attached",
              args: { name: "service-instance-id" },
              isRequired: true,
            },
            optFusionEnvironmentId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fusion-environment-status",
      description: "The health status of the Fusion Applications environment",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the status of a Fusion environment identified by its OCID",
          options: [optFusionEnvironmentId, optFromJson],
        },
      ],
    },
    {
      name: "time-available-for-refresh",
      description: "One available refresh time",
      subcommands: [
        {
          name: "list",
          description:
            "Gets available refresh time for this fusion environment",
          options: [
            optFusionEnvironmentId,
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
      name: "fusion-environment-family-limits-and-usage",
      description: "Details of EnvironmentLimits",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the number of environments (usage) of each type in the fusion environment family",
          options: [optFusionEnvironmentFamilyId, optFromJson],
        },
      ],
    },
    {
      name: "email-subdomain",
      description: "Email subdomain details for a marketing brand",
      subcommands: [
        {
          name: "create",
          description: "Creates an email Subdomain for a brand",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            {
              name: "--name",
              description: "Email subdomain name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--dns-management",
              description: "Dns management type for email subdomain",
              args: { name: "dns-management" },
              isRequired: true,
            },
            {
              name: "--certificate-management",
              description: "Certificate management type for email subdomain",
              args: { name: "certificate-management" },
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
          description: "Delete an email subdomain for a brand",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optEmailSubdomainId,
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
          description: "Gets an email subdomain for the brand",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optEmailSubdomainId,
            optFromJson,
          ],
        },
        {
          name: "get-email-subdomain-csr",
          description: "Gets a CSR for email subdomain for a brand",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optEmailSubdomainId,
            optFromJson,
          ],
        },
        {
          name: "get-email-subdomain-dns-config",
          description: "Get all DNS records for emailSubdomain",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optEmailSubdomainId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of email subdomains for a brand",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            {
              name: "--email-subdomain-id",
              description: "Unique emailSubdomain identifier",
              args: { name: "email-subdomain-id" },
            },
            optName,
            optLifecycleState,
            optSortOrder,
            optSortBy2,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "request-email-subdomain-csr",
          description: "Request Email Subdomain CSR",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optEmailSubdomainId,
            optCommonName,
            {
              name: "--organization-name",
              description: "Company name",
              args: { name: "organization-name" },
              isRequired: true,
            },
            {
              name: "--organization-unit",
              description: "Company section",
              args: { name: "organization-unit" },
              isRequired: true,
            },
            {
              name: "--locality",
              description: "City",
              args: { name: "locality" },
              isRequired: true,
            },
            {
              name: "--state",
              description: "State or province",
              args: { name: "state" },
              isRequired: true,
            },
            {
              name: "--country",
              description: "Country name",
              args: { name: "country" },
              isRequired: true,
            },
            {
              name: "--email-address",
              description: "Email address",
              args: { name: "email-address" },
              isRequired: true,
            },
            {
              name: "--sans",
              description: "Subject alternative names, comma separated",
              args: { name: "sans" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates an email subdomain",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optEmailSubdomainId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "upload-email-subdomain-certificate",
          description: "Upload certificate for emailSubdomain",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optEmailSubdomainId,
            optCommonName,
            {
              name: "--certificate-pem",
              description: "Certificate PEM",
              args: { name: "certificate-pem" },
              isRequired: true,
            },
            {
              name: "--certificate-chain-pem",
              description:
                "Certificate chain PEM, including intermediate and root",
              args: { name: "certificate-chain-pem" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "validate-and-configure-email-subdomain-certificate",
          description: "Validate and configure certificate for emailSubdomain",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optEmailSubdomainId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "validate-and-configure-email-subdomain-dns",
          description: "Validate and configure DNS records for emailSubdomain",
          options: [
            optFusionEnvironmentId,
            optMarketingBrandId,
            optEmailSubdomainId,
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
      name: "scheduled-activity",
      description: "Details of scheduled activity",
      subcommands: [
        {
          name: "get",
          description: "Gets a ScheduledActivity by identifier",
          options: [
            optFusionEnvironmentId,
            {
              name: "--scheduled-activity-id",
              description: "Unique ScheduledActivity identifier",
              args: { name: "scheduled-activity-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of ScheduledActivities",
          options: [
            optFusionEnvironmentId,
            optDisplayName,
            {
              name: "--time-scheduled-start-greater-than-or-equal-to",
              description:
                "A filter that returns all resources that are scheduled after this date",
              args: { name: "datetime" },
            },
            {
              name: "--time-expected-finish-less-than-or-equal-to",
              description:
                "A filter that returns all resources that end before this date",
              args: { name: "datetime" },
            },
            {
              name: "--run-cycle",
              description:
                "A filter that returns all resources that match the specified run cycle",
              args: {
                suggestions: ["QUARTERLY", "MONTHLY", "ONEOFF", "VERTEX"],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns all resources that match the specified status",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--scheduled-activity-association-id",
              description:
                "A filter that returns all resources that match the specified scheduledActivityAssociationId",
              args: { name: "scheduled-activity-association-id" },
            },
            {
              name: "--scheduled-activity-phase",
              description:
                "A filter that returns all resources that match the specified scheduledActivityPhase",
              args: {
                suggestions: [
                  "PRE_MAINTENANCE",
                  "MAINTENANCE",
                  "POST_MAINTENANCE",
                ],
              },
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
      ],
    },
  ],
};

export default completionSpec;
