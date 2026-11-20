// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optAnalyticsInstanceId: Fig.Option = {
  name: "--analytics-instance-id",
  description: "The OCID of the Analytics instance",
  args: { name: "analytics-instance-id" },
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
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
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optAnalyticsInstanceResourceGroupId: Fig.Option = {
  name: "--analytics-instance-resource-group-id",
  description:
    "Specify unique id of a resource group within an Analytics instance",
  args: { name: "analytics-instance-resource-group-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Optional description",
  args: { name: "description" },
};
const optPrivateAccessChannelKey: Fig.Option = {
  name: "--private-access-channel-key",
  description: "The unique identifier key of the private access channel",
  args: { name: "private-access-channel-key" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const completionSpec: Fig.Spec = {
  name: "analytics",
  description: "Analytics",
  subcommands: [
    {
      name: "work-request-log",
      description: "Log entries related to a specific work request",
      subcommands: [
        {
          name: "list",
          description: "Get the logs of a work request",
          options: [
            optWorkRequestId,
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
      description: "Error encountered during the execution of a work request",
      subcommands: [
        {
          name: "list",
          description: "Get the errors of a work request",
          options: [
            optWorkRequestId,
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
      name: "analytics-instance",
      description: "Analytics instance metadata",
      subcommands: [
        {
          name: "change-compartment",
          description: "Change the compartment of an Analytics instance",
          options: [
            optAnalyticsInstanceId,
            {
              name: "--compartment-id",
              description: "The OCID of the new compartment",
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
            "Create a new Analytics instance in the specified compartment",
          options: [
            {
              name: "--name",
              description: "The name of the Analytics instance",
              args: { name: "name" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--feature-set",
              description: "The feature set",
              args: {
                suggestions: ["SELF_SERVICE_ANALYTICS", "ENTERPRISE_ANALYTICS"],
              },
              isRequired: true,
            },
            {
              name: "--license-type",
              description: "The license used for the service",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
              isRequired: true,
            },
            optDescription,
            {
              name: "--email-notification",
              description: "Email address receiving notifications",
              args: { name: "email-notification" },
            },
            { name: "--network-endpoint-details", args: { name: "json" } },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--update-channel",
              description: "The Analytics instance update cycle",
              args: { suggestions: ["REGULAR", "EARLY", "PHASE_2", "PHASE_1"] },
            },
            {
              name: "--kms-key-id",
              description:
                "OCID of the OCI Vault Key encrypting the customer data stored in this Analytics instance",
              args: { name: "kms-key-id" },
            },
            {
              name: "--domain-id",
              description:
                "The OCID of the identity domain to use for the new Analytics instance",
              args: { name: "domain-id" },
            },
            {
              name: "--admin-user",
              description: "The Analytics instance administrator user",
              args: { name: "admin-user" },
            },
            {
              name: "--feature-bundle",
              description: "The feature set of an Analytics instance",
              args: {
                suggestions: [
                  "FAW_PAID",
                  "FAW_FREE",
                  "FDI_BASE",
                  "EE_EMBEDDED",
                  "SE_EMBEDDED",
                ],
              },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--idcs-access-token-file",
              description:
                "A file containing the IDCS access token identifying a stripe and service administrator user",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--capacity-type",
              description: "The capacity model to use",
              args: { name: "capacity-type" },
              isRequired: true,
            },
            {
              name: "--capacity-value",
              description:
                "The capacity value selected (OLPU count, number of users, ...etc...)",
              args: { name: "integer" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-private-access-channel",
          description:
            "Create an private access channel for the Analytics instance",
          options: [
            optAnalyticsInstanceId,
            {
              name: "--display-name",
              description: "Display name of the private access channel",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description:
                "OCID of the customer VCN peered with the private access channel",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "OCID of the customer subnet connected to the private access channel",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--private-source-dns-zones",
              description:
                "List of private source DNS zones registered with the private access channel",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--private-source-scan-hosts",
              description:
                "List of private source database SCAN hosts registered with the private access channel for access from",
              args: { name: "json" },
            },
            {
              name: "--network-security-group-ids",
              description:
                "Network Security Group OCIDs for the Analytics instance",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-resource-group",
          description: "Create a new resource group for the instance",
          options: [
            optAnalyticsInstanceId,
            {
              name: "--resource-name",
              description: "Meaningful name of resource group for end user",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--capacity",
              description:
                "The capacity (in OCPU's) to be allocated for this resource",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Meaningful name of resource group for end user",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Optional description of the resource group",
              args: { name: "description" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-vanity-url",
          description:
            "Allows you to specify a custom host name to be used to access the Analytics instance",
          options: [
            optAnalyticsInstanceId,
            {
              name: "--hosts",
              description:
                "List of fully-qualified hostnames supported by this vanity URL definition (maximum of 3)",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            {
              name: "--passphrase",
              description: "Passphrase for the PEM private key (if any)",
              args: { name: "passphrase" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--private-key-file",
              description: "PEM Private key file for HTTPS connections",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--public-certificate-file",
              description: "PEM certificate file for HTTPS connections",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--ca-certificate-file",
              description: "PEM CA certificate(s) file for HTTPS connections",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified Analytics instance",
          options: [
            optAnalyticsInstanceId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-private-access-channel",
          description:
            "Delete a private access channel with a given unique identifier key, for an Analytics instance",
          options: [
            optPrivateAccessChannelKey,
            optAnalyticsInstanceId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-resource-group",
          description: "Allows deleting a previously created resource group",
          options: [
            optAnalyticsInstanceId,
            optAnalyticsInstanceResourceGroupId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-vanity-url",
          description: "Deletes a previously created vanity URL",
          options: [
            optAnalyticsInstanceId,
            {
              name: "--vanity-url-key",
              description:
                "Specify unique identifier key of a vanity URL to update or delete",
              args: { name: "vanity-url-key" },
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
          description: "Information about a specific Analytics instance",
          options: [optAnalyticsInstanceId, optFromJson],
        },
        {
          name: "get-private-access-channel",
          description:
            "Retrieve private access channel for the specified Analytics Instance",
          options: [
            optPrivateAccessChannelKey,
            optAnalyticsInstanceId,
            optFromJson,
          ],
        },
        {
          name: "get-resource-group",
          description: "Get details of a resource group for an instance",
          options: [
            optAnalyticsInstanceId,
            optAnalyticsInstanceResourceGroupId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "List Analytics instances",
          options: [
            optCompartmentId,
            {
              name: "--name",
              description:
                "A filter to return only resources that match the given name exactly",
              args: { name: "name" },
            },
            {
              name: "--capacity-type",
              description:
                "A filter to only return resources matching the capacity type enum",
              args: { suggestions: ["OLPU_COUNT", "USER_COUNT"] },
            },
            {
              name: "--feature-set",
              description:
                "A filter to only return resources matching the feature set",
              args: {
                suggestions: ["SELF_SERVICE_ANALYTICS", "ENTERPRISE_ANALYTICS"],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources matching the lifecycle state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETED",
                  "DELETING",
                  "FAILED",
                  "INACTIVE",
                  "UPDATING",
                ],
              },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by (one column only)",
              args: {
                suggestions: [
                  "capacityType",
                  "capacityValue",
                  "featureSet",
                  "lifecycleState",
                  "name",
                  "timeCreated",
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
          name: "list-resource-groups",
          description: "List resource groups associated with an instance",
          options: [
            optAnalyticsInstanceId,
            {
              name: "--name",
              description:
                "A filter to return only resources that match the given name exactly",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by (one column only)",
              args: {
                suggestions: [
                  "id",
                  "resourceName",
                  "displayName",
                  "description",
                  "capacity",
                  "status",
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
          name: "scale",
          description: "Scale an Analytics instance up or down",
          options: [
            optAnalyticsInstanceId,
            { name: "--capacity", args: { name: "json" }, isRequired: true },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "set-feature-bundle",
          description:
            "Set the external service properties of an Analytics instance",
          options: [
            optAnalyticsInstanceId,
            {
              name: "--feature-bundle",
              description: "The feature set of an Analytics instance",
              args: {
                suggestions: [
                  "FAW_PAID",
                  "FAW_FREE",
                  "FDI_BASE",
                  "EE_EMBEDDED",
                  "SE_EMBEDDED",
                ],
              },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "set-kms-key",
          description:
            "Encrypts the customer data of this Analytics instance using either a customer OCI vault key or default",
          options: [
            optAnalyticsInstanceId,
            {
              name: "--kms-key-id",
              description:
                "OCID of the OCI vault key encrypting the customer data stored in this Analytics instance",
              args: { name: "kms-key-id" },
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
          name: "start",
          description: "Starts the specified Analytics instance",
          options: [
            optAnalyticsInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stop the specified Analytics instance",
          options: [
            optAnalyticsInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates certain fields of an Analytics instance",
          options: [
            optAnalyticsInstanceId,
            optDescription,
            {
              name: "--email-notification",
              description: "Email address receiving notifications",
              args: { name: "email-notification" },
            },
            {
              name: "--license-type",
              description: "The license used for the service",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--update-channel",
              description: "The Analytics instance update cycle",
              args: { suggestions: ["REGULAR", "EARLY", "PHASE_2", "PHASE_1"] },
            },
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            {
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
                  "INACTIVE",
                  "UPDATING",
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
          name: "update-private-access-channel",
          description:
            "Update the private access channel with the given unique identifier key in the specified Analytics instance",
          options: [
            optPrivateAccessChannelKey,
            optAnalyticsInstanceId,
            {
              name: "--display-name",
              description: "Display name of the private access channel",
              args: { name: "display-name" },
            },
            {
              name: "--vcn-id",
              description:
                "OCID of the customer VCN peered with the private access channel",
              args: { name: "vcn-id" },
            },
            {
              name: "--subnet-id",
              description:
                "OCID of the customer subnet connected to the private access channel",
              args: { name: "subnet-id" },
            },
            {
              name: "--private-source-dns-zones",
              description:
                "List of private source DNS zones registered with the private access channel",
              args: { name: "json" },
            },
            {
              name: "--private-source-scan-hosts",
              description:
                "List of private source database SCAN hosts registered with the private access channel for access from",
              args: { name: "json" },
            },
            {
              name: "--network-security-group-ids",
              description:
                "Network Security Group OCIDs for the Analytics instance",
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
          name: "update-resource-group",
          description: "Update any fields in a resource group",
          options: [
            optAnalyticsInstanceId,
            optAnalyticsInstanceResourceGroupId,
            {
              name: "--resource-name",
              description: "Meaningful name of resource group for end user",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--capacity",
              description:
                "The capacity (in OCPU's) to be allocated for this resource",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Meaningful name of resource group for end user",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Optional description of the resource group",
              args: { name: "description" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-vanity-url",
          description: "Uploads a new certificate for a vanity URL",
          options: [
            optAnalyticsInstanceId,
            {
              name: "--vanity-url-key",
              description:
                "Specify unique identifier key of a vanity URL to update or delete",
              args: { name: "vanity-url-key" },
              isRequired: true,
            },
            {
              name: "--passphrase",
              description: "Passphrase for the PEM private key (if any)",
              args: { name: "passphrase" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--private-key-file",
              description: "PEM Private key file for HTTPS connections",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--public-certificate-file",
              description: "PEM certificate file for HTTPS connections",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--ca-certificate-file",
              description: "PEM CA certificate(s) file for HTTPS connections",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "change-network-endpoint",
          description: "Change the network endpoint for an Analytics instance",
          options: [
            optAnalyticsInstanceId,
            {
              name: "--network-endpoint-details",
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
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "delete",
          description: "Cancel a work request that hasn't started yet",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Get the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "List all work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--resource-id",
              description:
                "The OCID of the resource associated with a work request",
              args: { name: "resource-id" },
            },
            {
              name: "--resource-type",
              description:
                "Type of the resource associated with a work request",
              args: { suggestions: ["ANALYTICS_INSTANCE"] },
            },
            {
              name: "--status",
              description:
                "One or more work request status values to filter on",
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
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field used for sorting work request results",
              args: {
                suggestions: [
                  "id",
                  "operationType",
                  "status",
                  "timeAccepted",
                  "timeStarted",
                  "timeFinished",
                ],
              },
            },
            optSortOrder,
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
