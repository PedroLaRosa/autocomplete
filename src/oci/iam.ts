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
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optUserId: Fig.Option = {
  name: "--user-id",
  description: "The OCID of the user",
  args: { name: "user-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    'The maximum number of items to return in a paginated "List" call',
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    'The value of the opc-next-page response header from the previous "List" call',
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment (remember that the tenancy is simply the root compartment)",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["CREATING", "ACTIVE", "INACTIVE", "DELETING", "DELETED"],
  },
  isRepeatable: true,
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
const optTagNamespaceId: Fig.Option = {
  name: "--tag-namespace-id",
  description: "The OCID of the tag namespace",
  args: { name: "tag-namespace-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optIsLockOverride: Fig.Option = {
  name: "--is-lock-override",
  description: "Whether to override locks (if any exist)",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optName: Fig.Option = {
  name: "--name",
  description:
    "A filter to only return resources that match the given name exactly",
  args: { name: "name" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIMECREATED", "NAME"] },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to only return resources that match the given lifecycle state",
  args: {
    suggestions: ["CREATING", "ACTIVE", "INACTIVE", "DELETING", "DELETED"],
  },
};
const optDomainId: Fig.Option = {
  name: "--domain-id",
  description: "The OCID of the identity domain",
  args: { name: "domain-id" },
  isRequired: true,
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE", "DELETING", "DELETED"] },
  isRepeatable: true,
};
const optGroupId: Fig.Option = {
  name: "--group-id",
  description: "The OCID of the group",
  args: { name: "group-id" },
  isRequired: true,
};
const optIdentityProviderId: Fig.Option = {
  name: "--identity-provider-id",
  description: "The OCID of the identity provider",
  args: { name: "identity-provider-id" },
  isRequired: true,
};
const optTagDefaultId: Fig.Option = {
  name: "--tag-default-id",
  description: "The OCID of the tag default",
  args: { name: "tag-default-id" },
  isRequired: true,
};
const optTagName: Fig.Option = {
  name: "--tag-name",
  description: "The name of the tag",
  args: { name: "tag-name" },
  isRequired: true,
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE"] },
  isRepeatable: true,
};
const optMfaTotpDeviceId: Fig.Option = {
  name: "--mfa-totp-device-id",
  description: "The OCID of the MFA TOTP device",
  args: { name: "mfa-totp-device-id" },
  isRequired: true,
};
const optType: Fig.Option = {
  name: "--type",
  description: "Type of the lock",
  args: { suggestions: ["FULL", "DELETE"] },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optDynamicGroupId: Fig.Option = {
  name: "--dynamic-group-id",
  description: "The OCID of the dynamic group",
  args: { name: "dynamic-group-id" },
  isRequired: true,
};
const optIamWorkRequestId: Fig.Option = {
  name: "--iam-work-request-id",
  description: "The OCID of the IAM work request",
  args: { name: "iam-work-request-id" },
  isRequired: true,
};
const optNetworkSourceId: Fig.Option = {
  name: "--network-source-id",
  description: "The OCID of the network source",
  args: { name: "network-source-id" },
  isRequired: true,
};
const optPolicyId: Fig.Option = {
  name: "--policy-id",
  description: "The OCID of the policy",
  args: { name: "policy-id" },
  isRequired: true,
};
const optResourceIdentifier: Fig.Option = {
  name: "--resource-identifier",
  description: "The identifier of the resource the work request affects",
  args: { name: "resource-identifier" },
};
const optTenancyId: Fig.Option = {
  name: "--tenancy-id",
  description: "The OCID of the tenancy",
  args: { name: "tenancy-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "iam",
  description: "Identity and Access Management Service",
  subcommands: [
    {
      name: "fault-domain",
      description:
        "A Fault Domain is a logical grouping of hardware and infrastructure within an Availability Domain that can",
      subcommands: [
        {
          name: "list",
          description: "Lists the Fault Domains in your tenancy",
          options: [
            optCompartmentId,
            {
              name: "--availability-domain",
              description: "The name of the availabilityDomain",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            optAll,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description:
        "The asynchronous API request does not take effect immediately",
      subcommands: [
        {
          name: "get",
          description: "Gets details on a specified work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in compartment",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            optResourceIdentifier,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "tagging-work-request-log",
      description: "The log entity",
      subcommands: [
        {
          name: "list",
          description: "Gets the logs for a work request",
          options: [
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
      name: "compartment",
      description: "A collection of related resources",
      subcommands: [
        {
          name: "bulk-delete-resources",
          description: "Deletes multiple resources in the compartment",
          options: [
            optCompartmentId2,
            {
              name: "--resources",
              description: "The resources to be deleted",
              args: { name: "json" },
              isRequired: true,
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "bulk-move-resources",
          description:
            "Moves multiple resources from one compartment to another",
          options: [
            optCompartmentId2,
            {
              name: "--resources",
              description: "The resources to be moved",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--target-compartment-id",
              description:
                "The OCID of the destination compartment into which to move the resources",
              args: { name: "target-compartment-id" },
              isRequired: true,
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new compartment in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the parent compartment containing the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "The name you assign to the compartment during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the compartment during creation",
              args: { name: "description" },
              isRequired: true,
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
          description: "Deletes the specified compartment",
          options: [
            optCompartmentId2,
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
          description: "Gets the specified compartment's information",
          options: [optCompartmentId2, optFromJson],
        },
        {
          name: "list",
          description: "Lists the compartments in a specified compartment",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            {
              name: "--access-level",
              description: "Valid values are ANY and ACCESSIBLE",
              args: { suggestions: ["ANY", "ACCESSIBLE"] },
            },
            {
              name: "--compartment-id-in-subtree",
              description: "Default is false",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optName,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            { name: "--include-root", description: "Include root compartment" },
            optFromJson,
          ],
        },
        {
          name: "move",
          description:
            "Move the compartment to a different parent compartment in the same tenancy",
          options: [
            optCompartmentId2,
            {
              name: "--target-compartment-id",
              description:
                "The OCID of the destination compartment into which to move the compartment",
              args: { name: "target-compartment-id" },
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
          name: "recover",
          description:
            "Recover the compartment from DELETED state to ACTIVE state",
          options: [
            optCompartmentId2,
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
            "Updates the specified compartment's description or name",
          options: [
            optCompartmentId2,
            {
              name: "--description",
              description: "The description you assign to the compartment",
              args: { name: "description" },
            },
            {
              name: "--name",
              description: "The new name you assign to the compartment",
              args: { name: "name" },
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
      name: "network-sources",
      description:
        "A network source specifies a list of source IP addresses that are allowed to make authorization requests",
      subcommands: [
        {
          name: "create",
          description: "Creates a new network source in your tenancy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the tenancy (root compartment) containing the network source object",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "The name you assign to the network source during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the network source during creation",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--public-source-list",
              description:
                "A list of allowed public IP addresses and CIDR ranges",
              args: { name: "json" },
            },
            {
              name: "--virtual-source-list",
              description: "A list of allowed VCN OCID and IP range pairs",
              args: { name: "json" },
            },
            {
              name: "--services",
              description:
                "-- The services attribute has no effect and is reserved for use by Oracle",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified network source",
          options: [optNetworkSourceId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets the specified network source's information",
          options: [optNetworkSourceId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the network sources in your tenancy",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            optName,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified network source",
          options: [
            optNetworkSourceId,
            {
              name: "--description",
              description: "The description you assign to the network source",
              args: { name: "description" },
            },
            {
              name: "--public-source-list",
              description:
                "A list of allowed public IP addresses and CIDR ranges",
              args: { name: "json" },
            },
            {
              name: "--virtual-source-list",
              description: "A list of allowed VCN OCID and IP range pairs",
              args: { name: "json" },
            },
            {
              name: "--services",
              description:
                "-- The services attribute has no effect and is reserved for use by Oracle",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "authentication-policy",
      description:
        "Authentication policy, currently set for the given compartment",
      subcommands: [
        {
          name: "get",
          description: "Gets the authentication policy for the given tenancy",
          options: [optCompartmentId2, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates authentication policy for the specified tenancy",
          options: [
            optCompartmentId2,
            { name: "--password-policy", args: { name: "json" } },
            { name: "--network-policy", args: { name: "json" } },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "smtp-credential",
      description:
        "Simple Mail Transfer Protocol (SMTP) credentials are needed to send email through Email Delivery",
      subcommands: [
        {
          name: "create",
          description: "Creates a new SMTP credential for the specified user",
          options: [
            {
              name: "--description",
              description:
                "The description you assign to the SMTP credentials during creation",
              args: { name: "description" },
              isRequired: true,
            },
            optUserId,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified SMTP credential for the specified user",
          options: [
            optUserId,
            {
              name: "--smtp-credential-id",
              description: "The OCID of the SMTP credential",
              args: { name: "smtp-credential-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the SMTP credentials for the specified user",
          options: [optUserId, optAll, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified SMTP credential's description",
          options: [
            optUserId,
            {
              name: "--smtp-credential-id",
              description: "The OCID of the SMTP credential",
              args: { name: "smtp-credential-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description you assign to the SMTP credential",
              args: { name: "description" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "scim-client-credentials",
      description: "The OAuth2 client credentials",
      subcommands: [
        {
          name: "reset-idp-scim-client",
          description:
            "Resets the OAuth2 client credentials for the SCIM client associated with this identity provider",
          options: [optIdentityProviderId, optFromJson],
        },
      ],
    },
    {
      name: "tag",
      description:
        'A tag definition that belongs to a specific tag namespace. "Defined tags" must be set up in your tenancy',
      subcommands: [
        {
          name: "bulk-delete",
          description: "Deletes the specified tag key definitions",
          options: [
            {
              name: "--tag-definition-ids",
              description: "The OCIDs of the tag definitions to delete",
              args: { name: "json" },
              isRequired: true,
            },
            optIsLockOverride,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "bulk-edit",
          description:
            "Edits the specified list of tag key definitions for the selected resources",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the bulk tag edit request is submitted",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--resources",
              description: "The resources to be updated",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--bulk-edit-operations",
              description:
                "The operations associated with the request to bulk edit tags",
              args: { name: "json" },
              isRequired: true,
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new tag in the specified tag namespace",
          options: [
            optTagNamespaceId,
            {
              name: "--name",
              description: "The name you assign to the tag during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the tag during creation",
              args: { name: "description" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-cost-tracking",
              description:
                "Indicates whether the tag is enabled for cost tracking",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--validator", args: { name: "json" } },
            optIsLockOverride,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified tag definition",
          options: [
            optTagNamespaceId,
            optTagName,
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
          description: "Gets the specified tag's information",
          options: [optTagNamespaceId, optTagName, optFromJson],
        },
        {
          name: "import-standard-tags",
          description:
            "OCI will release Tag Namespaces that our customers can import",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the bulk create request is submitted and where the tag namespaces will",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--standard-tag-namespace-name",
              description:
                "The name of standard tag namespace that will be imported in bulk",
              args: { name: "standard-tag-namespace-name" },
              isRequired: true,
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-cost-tracking",
          description:
            "Lists all the tags enabled for cost-tracking in the specified tenancy",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the tag definitions in the specified tag namespace",
          options: [
            optTagNamespaceId,
            optPage,
            optLimit,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: ["ACTIVE", "INACTIVE", "DELETING", "DELETED"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "bulk-edit-tags-resource-type",
          description:
            "The list of resource types that support bulk editing of tags",
          subcommands: [
            {
              name: "list",
              description:
                "Lists the resource types that support bulk tag editing",
              options: [optPage, optLimit, optAll, optPageSize, optFromJson],
            },
          ],
        },
        {
          name: "update",
          description: "Updates the specified tag",
          options: [
            optTagNamespaceId,
            optTagName,
            {
              name: "--description",
              description:
                "The description you assign to the tag during creation",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-cost-tracking",
              description:
                "Indicates whether the tag is enabled for cost tracking",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--validator", args: { name: "json" } },
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "retire",
          description:
            "Retires a tag so that it cannot be used to tag resources",
          options: [optTagNamespaceId, optTagName, optFromJson],
        },
        {
          name: "reactivate",
          description: "Reactivate tag so it can be used",
          options: [optTagNamespaceId, optTagName, optFromJson],
        },
      ],
    },
    {
      name: "iam-work-request-log",
      description:
        "(For tenancies that support identity domains) The log entity for a IAM work request",
      subcommands: [
        {
          name: "list",
          description: "Gets logs for a specified IAM work request",
          options: [
            optIamWorkRequestId,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "group",
      description:
        "A collection of users who all need the same type of access to a particular set of resources or compartment",
      subcommands: [
        {
          name: "create",
          description: "Creates a new group in your tenancy",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the tenancy containing the group",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name you assign to the group during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the group during creation",
              args: { name: "description" },
              isRequired: true,
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
          description: "Deletes the specified group",
          options: [
            optGroupId,
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
          description: "Gets the specified group's information",
          options: [optGroupId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the groups in your tenancy",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            optName,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified group",
          options: [
            optGroupId,
            {
              name: "--description",
              description: "The description you assign to the group",
              args: { name: "description" },
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
        {
          name: "list-users",
          description: "Lists the users in the specified group",
          options: [
            optCompartmentId,
            optGroupId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "add-user",
          description: "Adds the specified user to the specified group",
          options: [optUserId, optGroupId, optFromJson],
        },
        {
          name: "remove-user",
          description: "Removes a user from a group",
          options: [
            optCompartmentId,
            optUserId,
            optGroupId,
            {
              name: "--force",
              description: "Perform removal without prompting for confirmation",
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "policy",
      description:
        "A document that specifies the type of access a group has to the resources in a compartment",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new policy in the specified compartment (either the tenancy or another of your compartments)",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the policy (either the tenancy or another compartment)",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name you assign to the policy during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--statements",
              description:
                "An array of policy statements written in the policy language",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the policy during creation",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--version-date",
              description: "The version of the policy",
              args: { name: "datetime" },
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
          description: "Deletes the specified policy",
          options: [
            optPolicyId,
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
          description: "Gets the specified policy's information",
          options: [optPolicyId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the policies in the specified compartment (either the tenancy or another of your compartments)",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            optName,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified policy",
          options: [
            optPolicyId,
            {
              name: "--description",
              description: "The description you assign to the policy",
              args: { name: "description" },
            },
            {
              name: "--statements",
              description:
                "A JSON array of policy statements written in the policy language",
              args: { name: "statements" },
            },
            {
              name: "--version-date",
              description: "The version of the policy",
              args: { name: "version-date" },
            },
            optIfMatch,
            optForce2,
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Usage of predefined tag keys",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "tag-namespace",
      description: "A managed container for defined tags",
      subcommands: [
        {
          name: "add",
          description: "Add a resource lock to a tag namespace",
          options: [
            optTagNamespaceId,
            optType,
            {
              name: "--related-resource-id",
              description:
                "The ID of the resource that is locking this resource",
              args: { name: "related-resource-id" },
            },
            {
              name: "--message",
              description: "A message added by the creator of the lock",
              args: { name: "message" },
            },
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "cascade-delete",
          description: "Deletes the specified tag namespace",
          options: [
            optTagNamespaceId,
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
          description:
            "Moves the specified tag namespace to the specified compartment within the same tenancy",
          options: [
            optTagNamespaceId,
            {
              name: "--compartment-id",
              description:
                "The Oracle Cloud ID (OCID) of the destination compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new tag namespace in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the tenancy containing the tag namespace",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "The name you assign to the tag namespace during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the tag namespace during creation",
              args: { name: "description" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--locks",
              description: "Locks associated with this resource",
              args: { name: "json" },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified tag namespace",
          options: [
            optTagNamespaceId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified tag namespace's information",
          options: [optTagNamespaceId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the tag namespaces in the specified compartment",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            {
              name: "--include-subcompartments",
              description:
                "An optional boolean parameter indicating whether to retrieve all tag namespaces in subcompartments",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: ["ACTIVE", "INACTIVE", "DELETING", "DELETED"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove a resource lock from a tag namespace",
          options: [
            optTagNamespaceId,
            optType,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified tagNamespace",
          options: [
            optTagNamespaceId,
            {
              name: "--description",
              description: "The description you assign to the tag namespace",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIsLockOverride,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "retire",
          description:
            "Retire the namespace, all the contained tags and the related rules",
          options: [optTagNamespaceId, optFromJson],
        },
        {
          name: "reactivate",
          description: "Reactivates a namespace",
          options: [optTagNamespaceId, optFromJson],
        },
      ],
    },
    {
      name: "availability-domain",
      description:
        "One or more isolated, fault-tolerant Oracle data centers that host cloud resources such as instances",
      subcommands: [
        {
          name: "list",
          description: "Lists the availability domains in your tenancy",
          options: [optCompartmentId, optAll, optFromJson],
        },
      ],
    },
    {
      name: "bulk-action-resource-type-collection",
      description:
        "Collection of resource-types supported by a compartment bulk action",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the resource-types supported by compartment bulk actions",
          options: [
            {
              name: "--bulk-action-type",
              description: "The type of bulk action",
              args: {
                suggestions: ["BULK_MOVE_RESOURCES", "BULK_DELETE_RESOURCES"],
              },
              isRequired: true,
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
      name: "customer-secret-key",
      description:
        "A CustomerSecretKey is an Oracle-provided key for using the Object Storage Service's Amazon S3 compatible API",
      subcommands: [
        {
          name: "create",
          description: "Creates a new secret key for the specified user",
          options: [
            {
              name: "--display-name",
              description:
                "The name you assign to the secret key during creation",
              args: { name: "display-name" },
              isRequired: true,
            },
            optUserId,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified secret key for the specified user",
          options: [
            optUserId,
            {
              name: "--customer-secret-key-id",
              description: "The access token of the secret key",
              args: { name: "customer-secret-key-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the secret keys for the specified user",
          options: [optUserId, optAll, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified secret key's description",
          options: [
            optUserId,
            {
              name: "--customer-secret-key-id",
              description: "The access token of the secret key",
              args: { name: "customer-secret-key-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The description you assign to the secret key",
              args: { name: "display-name" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "tenancy",
      description:
        "The root compartment that contains all of your organization's compartments and other Oracle Cloud",
      subcommands: [
        {
          name: "get",
          description: "Get the specified tenancy's information",
          options: [optTenancyId, optFromJson],
        },
      ],
    },
    {
      name: "mfa-totp-device",
      description:
        "Users can enable multi-factor authentication (MFA) for their own user accounts",
      subcommands: [
        {
          name: "activate",
          description: "Activates the specified MFA TOTP device for the user",
          options: [
            optUserId,
            optMfaTotpDeviceId,
            {
              name: "--totp-token",
              description: "The Totp token for MFA",
              args: { name: "totp-token" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new MFA TOTP device for the user",
          options: [
            optUserId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified MFA TOTP device for the specified user",
          options: [
            optUserId,
            optMfaTotpDeviceId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "generate-totp-seed",
          description: "Generate seed for the MFA TOTP device",
          options: [
            optUserId,
            optMfaTotpDeviceId,
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
            "Get the specified MFA TOTP device for the specified user",
          options: [optUserId, optMfaTotpDeviceId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the MFA TOTP devices for the specified user",
          options: [
            optUserId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ui-password-information",
      description:
        "Information about the UIPassword, which is a text password that enables a user to sign in to the Console",
      subcommands: [
        {
          name: "get-user",
          description: "Gets the specified user's console password information",
          options: [optUserId, optFromJson],
        },
      ],
    },
    {
      name: "identity-provider",
      description:
        "The resulting base object when you add an identity provider to your tenancy",
      subcommands: [
        {
          name: "create",
          description: "Deprecated",
          deprecated: true,
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of your tenancy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "The name you assign to the IdentityProvider during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the IdentityProvider during creation",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--product-type",
              description: "The identity provider service or product",
              args: { suggestions: ["IDCS", "ADFS"] },
              isRequired: true,
            },
            {
              name: "--protocol",
              description: "The protocol used for federation",
              args: { suggestions: ["SAML2", "ADFS"] },
              isRequired: true,
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
          description: "Deprecated",
          deprecated: true,
          options: [
            optIdentityProviderId,
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
          description: "Deprecated",
          deprecated: true,
          options: [optIdentityProviderId, optFromJson],
        },
        {
          name: "list",
          description: "Deprecated",
          deprecated: true,
          options: [
            {
              name: "--protocol",
              description: "The protocol used for federation",
              args: { name: "protocol" },
              isRequired: true,
            },
            optCompartmentId,
            optPage,
            optLimit,
            optName,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Deprecated",
          deprecated: true,
          options: [
            optIdentityProviderId,
            {
              name: "--protocol",
              description: "The protocol used for federation",
              args: { suggestions: ["SAML2"] },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description you assign to the IdentityProvider",
              args: { name: "description" },
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
      name: "identity-provider-group",
      description:
        "A group created in an identity provider that can be mapped to a group in OCI",
      subcommands: [
        {
          name: "list",
          description: "Deprecated",
          deprecated: true,
          options: [
            optIdentityProviderId,
            optPage,
            optLimit,
            optName,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "domain",
      description:
        "(For tenancies that support identity domains) Properties for an identity domain",
      subcommands: [
        {
          name: "activate",
          description:
            "(For tenancies that support identity domains) Activates a deactivated identity domain",
          options: [
            optDomainId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "(For tenancies that support identity domains) Moves the identity domain to a different compartment in",
          options: [
            optDomainId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the destination compartment into which to move the identity domain",
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
          name: "change-domain-license-type",
          description:
            "(For tenancies that support identity domains) Changes the license type of the given identity domain",
          options: [
            optDomainId,
            {
              name: "--license-type",
              description: "The license type of the identity domain",
              args: { name: "license-type" },
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
          description:
            "(For tenancies that support identity domains) Creates a new identity domain in the tenancy with the identity",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the identity domain is created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The mutable display name of the identity domain",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The identity domain description",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--home-region",
              description: "The region's name identifier",
              args: { name: "home-region" },
              isRequired: true,
            },
            {
              name: "--license-type",
              description: "The license type of the identity domain",
              args: { name: "license-type" },
              isRequired: true,
            },
            {
              name: "--is-hidden-on-login",
              description:
                "Indicates whether the identity domain is hidden on the sign-in screen or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--admin-first-name",
              description: "The administrator's first name",
              args: { name: "admin-first-name" },
            },
            {
              name: "--admin-last-name",
              description: "The administrator's last name",
              args: { name: "admin-last-name" },
            },
            {
              name: "--admin-user-name",
              description: "The administrator's user name",
              args: { name: "admin-user-name" },
            },
            {
              name: "--admin-email",
              description: "The administrator's email address",
              args: { name: "admin-email" },
            },
            {
              name: "--is-notification-bypassed",
              description:
                "Indicates whether or not the administrator user created in the IDCS stripe would like to receive",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-primary-email-required",
              description:
                "Optional field to indicate whether users in the identity domain are required to have a primary email address",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
          name: "deactivate",
          description:
            "(For tenancies that support identity domains) Deactivates the specified identity domain",
          options: [
            optDomainId,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "(For tenancies that support identity domains) Deletes an identity domain",
          options: [
            optDomainId,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-replication-to-region",
          description:
            "(For tenancies that support identity domains) Replicates the identity domain to a new region",
          options: [
            optDomainId,
            {
              name: "--replica-region",
              description:
                "A region to which you want identity domain replication to occur",
              args: { name: "replica-region" },
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "(For tenancies that support identity domains) Gets the specified identity domain's information",
          options: [optDomainId, optFromJson],
        },
        {
          name: "list",
          description:
            "(For tenancies that support identity domains) Lists all identity domains within a tenancy",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description: "The mutable display name of the identity domain",
              args: { name: "display-name" },
            },
            {
              name: "--url",
              description: "The region-agnostic identity domain URL",
              args: { name: "url" },
            },
            {
              name: "--home-region-url",
              description: "The region-specific identity domain URL",
              args: { name: "home-region-url" },
            },
            {
              name: "--type",
              description: "The identity domain type",
              args: { name: "type" },
            },
            {
              name: "--license-type",
              description: "The license type of the identity domain",
              args: { name: "license-type" },
            },
            {
              name: "--is-hidden-on-login",
              description:
                "Indicates whether or not the identity domain is visible at the sign-in screen",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optPage,
            optLimit,
            optName,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: ["CREATING", "ACTIVE", "DELETING", "INACTIVE"],
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
            "(For tenancies that support identity domains) Updates identity domain information and the associated Identity",
          options: [
            optDomainId,
            {
              name: "--description",
              description: "The identity domain description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The mutable display name of the identity domain",
              args: { name: "display-name" },
            },
            {
              name: "--is-hidden-on-login",
              description:
                "Indicates whether the identity domain is hidden on the sign-in screen or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
          name: "list-license-types",
          description:
            "(For tenancies that support identity domains) Lists the license types for identity domains supported",
          options: [
            {
              name: "--current-license-type-name",
              description: "The license type of the identity domain",
              args: { name: "current-license-type-name" },
            },
            optAll,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "tagging-work-request-error",
      description: "The error entity",
      subcommands: [
        {
          name: "list",
          description: "Gets the errors for a work request",
          options: [
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
      name: "region-subscription",
      description:
        "An object that represents your tenancy's access to a particular region (i.e., a subscription)",
      subcommands: [
        {
          name: "create",
          description: "Creates a subscription to a region for a tenancy",
          options: [
            {
              name: "--region-key",
              description: "The regions's key",
              args: { name: "region-key" },
              isRequired: true,
            },
            optTenancyId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the region subscriptions for the specified tenancy",
          options: [optTenancyId, optAll, optFromJson],
        },
      ],
    },
    {
      name: "standard-tag-namespace-template",
      description: "The template of the standard tag namespace",
      subcommands: [
        {
          name: "get-standard-tag-template",
          description:
            "Retrieve the standard tag namespace template given the standard tag namespace name",
          options: [
            optCompartmentId,
            {
              name: "--standard-tag-namespace-name",
              description:
                "The name of the standard tag namespace tempate that is requested",
              args: { name: "standard-tag-namespace-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-standard-tag-namespaces",
          description:
            "Lists available standard tag namespaces that users can create",
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
      name: "iam-work-request",
      description:
        "(For tenancies that support identity domains) An IAM work request object that allows users to track",
      subcommands: [
        {
          name: "get",
          description: "Gets the details of a specified IAM work request",
          options: [optIamWorkRequestId, optFromJson],
        },
        {
          name: "list-iam-work-request-errors",
          description: "Gets error details for a specified IAM work request",
          options: [
            optIamWorkRequestId,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the IAM work requests in compartment",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            optResourceIdentifier,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "tagging-work-request",
      description:
        "The asynchronous API request does not take effect immediately",
      subcommands: [
        {
          name: "get",
          description: "Gets details on a specified work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the tagging work requests in compartment",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            optResourceIdentifier,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dynamic-group",
      description: "A dynamic group defines a matching rule",
      subcommands: [
        {
          name: "create",
          description: "Creates a new dynamic group in your tenancy",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the tenancy containing the group",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name you assign to the group during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--matching-rule",
              description:
                "The matching rule to dynamically match an instance certificate to this dynamic group",
              args: { name: "matching-rule" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the group during creation",
              args: { name: "description" },
              isRequired: true,
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
          description: "Deletes the specified dynamic group",
          options: [
            optDynamicGroupId,
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
          description: "Gets the specified dynamic group's information",
          options: [optDynamicGroupId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the dynamic groups in your tenancy",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            optName,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified dynamic group",
          options: [
            optDynamicGroupId,
            {
              name: "--description",
              description: "The description you assign to the dynamic group",
              args: { name: "description" },
            },
            {
              name: "--matching-rule",
              description:
                "The matching rule to dynamically match an instance certificate to this dynamic group",
              args: { name: "matching-rule" },
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
      name: "region",
      description: "A localized geographic area, such as Phoenix, AZ",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all the regions offered by Oracle Cloud Infrastructure",
          options: [optAll, optFromJson],
        },
      ],
    },
    {
      name: "auth-token",
      description:
        "An AuthToken is an Oracle-generated token string that you can use to authenticate with third-party APIs",
      subcommands: [
        {
          name: "create",
          description: "Creates a new auth token for the specified user",
          options: [
            {
              name: "--description",
              description:
                "The description you assign to the auth token during creation",
              args: { name: "description" },
              isRequired: true,
            },
            optUserId,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified auth token for the specified user",
          options: [
            optUserId,
            {
              name: "--auth-token-id",
              description: "The OCID of the auth token",
              args: { name: "auth-token-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the auth tokens for the specified user",
          options: [optUserId, optAll, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified auth token's description",
          options: [
            optUserId,
            {
              name: "--auth-token-id",
              description: "The OCID of the auth token",
              args: { name: "auth-token-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description you assign to the auth token",
              args: { name: "description" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "tag-default",
      description:
        'Tag defaults let you specify a default tag (tagnamespace.tag="value") to apply to all resource types in',
      subcommands: [
        {
          name: "add",
          description: "Add a resource lock to a tag default",
          options: [
            optTagDefaultId,
            optType,
            {
              name: "--related-resource-id",
              description:
                "The ID of the resource that is locking this resource",
              args: { name: "related-resource-id" },
            },
            {
              name: "--message",
              description: "A message added by the creator of the lock",
              args: { name: "message" },
            },
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "assemble-effective-tag-set",
          description:
            "Assembles tag defaults in the specified compartment and any parent compartments to determine the tags",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: { suggestions: ["ACTIVE"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new tag default in the specified compartment for the specified tag definition",
          options: [
            optCompartmentId2,
            {
              name: "--tag-definition-id",
              description: "The OCID of the tag definition",
              args: { name: "tag-definition-id" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "The default value for the tag definition",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--is-required",
              description:
                "If you specify that a value is required, a value is set during resource creation",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--locks",
              description: "Locks associated with this resource",
              args: { name: "json" },
            },
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified tag default",
          options: [
            optTagDefaultId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves the specified tag default",
          options: [optTagDefaultId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the tag defaults for tag definitions in the specified compartment",
          options: [
            optPage,
            optLimit,
            {
              name: "--id",
              description:
                "A filter to only return resources that match the specified OCID exactly",
              args: { name: "id" },
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment (remember that the tenancy is simply the root compartment)",
              args: { name: "compartment-id" },
            },
            {
              name: "--tag-definition-id",
              description: "The OCID of the tag definition",
              args: { name: "tag-definition-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: { suggestions: ["ACTIVE"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove a resource lock from a tag default",
          options: [
            optTagDefaultId,
            optType,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified tag default",
          options: [
            optTagDefaultId,
            {
              name: "--value",
              description: "The default value for the tag definition",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--is-required",
              description:
                "If you specify that a value is required, a value is set during resource creation",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsLockOverride,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "user",
      description:
        "An individual employee or system that needs to manage or use your company's Oracle Cloud Infrastructure",
      subcommands: [
        {
          name: "create-db-credential",
          description: "Creates a new DB credential for the specified user",
          options: [
            {
              name: "--password",
              description:
                "The password for the DB credentials during creation",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the DB credentials during creation",
              args: { name: "description" },
              isRequired: true,
            },
            optUserId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new user in your tenancy",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the tenancy containing the user",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name you assign to the user during creation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description you assign to the user during creation",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "The email you assign to the user during creation",
              args: { name: "email" },
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
          name: "delete-db-credential",
          description:
            "Deletes the specified DB credential for the specified user",
          options: [
            optUserId,
            {
              name: "--db-credential-id",
              description: "The OCID of the DB credential",
              args: { name: "db-credential-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified user",
          options: [
            optUserId,
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
          description: "Gets the specified user's information",
          options: [optUserId, optFromJson],
        },
        {
          name: "list-db-credentials",
          description: "Lists the DB credentials for the specified user",
          options: [
            optUserId,
            optPage,
            optLimit,
            optName,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: ["CREATING", "ACTIVE", "DELETING", "DELETED"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the users in your tenancy",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            {
              name: "--identity-provider-id",
              description: "The id of the identity provider",
              args: { name: "identity-provider-id" },
            },
            {
              name: "--external-identifier",
              description: "The id of a user in the identity provider",
              args: { name: "external-identifier" },
            },
            optName,
            optSortBy,
            optSortOrder,
            optLifecycleState,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the description of the specified user",
          options: [
            optUserId,
            {
              name: "--description",
              description: "The description you assign to the user",
              args: { name: "description" },
            },
            {
              name: "--email",
              description: "The email you assign to the user during creation",
              args: { name: "email" },
            },
            {
              name: "--db-user-name",
              description: "DB username of the DB credential",
              args: { name: "db-user-name" },
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
        {
          name: "update-user-capabilities",
          description: "Updates the capabilities of the specified user",
          options: [
            optUserId,
            {
              name: "--can-use-console-password",
              description: "Indicates if the user can log in to the console",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-api-keys",
              description: "Indicates if the user can use API keys",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-auth-tokens",
              description:
                "Indicates if the user can use SWIFT passwords / auth tokens",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-smtp-credentials",
              description: "Indicates if the user can use SMTP passwords",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-db-credentials",
              description: "Indicates if the user can use DB passwords",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-customer-secret-keys",
              description: "Indicates if the user can use SigV4 symmetric keys",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-o-auth2-client-credentials",
              description:
                "Indicates if the user can use OAuth2 credentials and tokens",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-user-state",
          description: "Updates the state of the specified user",
          options: [
            optUserId,
            {
              name: "--blocked",
              description: "Update state to blocked or unblocked",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "api-key",
          description:
            "A PEM-format RSA credential for securing requests to the Oracle Cloud Infrastructure REST API",
          subcommands: [
            {
              name: "delete",
              description:
                "Deletes the specified API signing key for the specified user",
              options: [
                optUserId,
                {
                  name: "--fingerprint",
                  description: "The key's fingerprint",
                  args: { name: "fingerprint" },
                  isRequired: true,
                },
                optIfMatch,
                optForce,
                optFromJson,
              ],
            },
            {
              name: "list",
              description: "Lists the API signing keys for the specified user",
              options: [optUserId, optAll, optFromJson],
            },
            {
              name: "upload",
              description: "Uploads an API signing key for the specified user",
              options: [
                optUserId,
                {
                  name: "--key",
                  description: "The public key",
                  args: { name: "key" },
                },
                {
                  name: "--key-file",
                  description: "A file containing the public key",
                  args: { name: "file", template: "filepaths" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "swift-password",
          description: "Deprecated",
          deprecated: true,
          subcommands: [
            {
              name: "create",
              description: "Deprecated",
              deprecated: true,
              options: [
                {
                  name: "--description",
                  description:
                    "The description you assign to the Swift password during creation",
                  args: { name: "description" },
                  isRequired: true,
                },
                optUserId,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Deprecated",
              deprecated: true,
              options: [
                optUserId,
                {
                  name: "--swift-password-id",
                  description: "The OCID of the Swift password",
                  args: { name: "swift-password-id" },
                  isRequired: true,
                },
                optIfMatch,
                optForce,
                optFromJson,
              ],
            },
            {
              name: "list",
              description: "Deprecated",
              deprecated: true,
              options: [optUserId, optAll, optFromJson],
            },
            {
              name: "update",
              description: "Deprecated",
              deprecated: true,
              options: [
                optUserId,
                {
                  name: "--swift-password-id",
                  description: "The OCID of the Swift password",
                  args: { name: "swift-password-id" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description:
                    "The description you assign to the Swift password",
                  args: { name: "description" },
                },
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "ui-password",
          description:
            "A text password that enables a user to sign in to the Console",
          subcommands: [
            {
              name: "create-or-reset",
              description:
                "Creates a new Console one-time password for the specified user",
              options: [optUserId, optFromJson],
            },
          ],
        },
        {
          name: "list-groups",
          description:
            "Lists the groups for which the specified user is a member",
          options: [
            optCompartmentId,
            optUserId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "oauth2-credential",
          description:
            "The OAuth 2.0 Client Credentials grant type is used by clients to obtain an access token outside of",
          subcommands: [
            {
              name: "create",
              description: "Creates Oauth token for the user",
              options: [
                optUserId,
                {
                  name: "--name",
                  description:
                    "Name of the oauth credential to help user differentiate them",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description:
                    "Description of the oauth credential to help user differentiate them",
                  args: { name: "description" },
                  isRequired: true,
                },
                {
                  name: "--scopes",
                  description: "Allowed scopes for the given oauth credential",
                  args: { name: "json" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Delete Oauth token for the user",
              options: [
                optUserId,
                {
                  name: "--oauth2-client-credential-id",
                  description: "The ID of the Oauth credential",
                  args: { name: "oauth2-client-credential-id" },
                  isRequired: true,
                },
                optIfMatch,
                optForce,
                optFromJson,
              ],
            },
            {
              name: "list",
              description: "List of Oauth tokens for the user",
              options: [
                optUserId,
                optPage,
                optLimit,
                optLifecycleState,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates Oauth token for the user",
              options: [
                optUserId,
                {
                  name: "--oauth2-client-credential-id",
                  description: "The ID of the Oauth credential",
                  args: { name: "oauth2-client-credential-id" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description:
                    "Description of the oauth credential to help user differentiate them",
                  args: { name: "description" },
                  isRequired: true,
                },
                {
                  name: "--scopes",
                  description: "Allowed scopes for the given oauth credential",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--is-reset-password",
                  description:
                    "Indicate if the password to be reset or not in the update",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optIfMatch,
                optForce2,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "db-token",
      subcommands: [
        {
          name: "get",
          description:
            "This token is used to access Oracle cloud databases from database clients",
          options: [
            {
              name: "--scope",
              description:
                "If a scope isn’t provided, the default will be the tenancy scope",
              args: { name: "scope" },
            },
            {
              name: "--db-token-location",
              description:
                "Provide the directory where you would like to store token and private/public key",
              args: { name: "db-token-location" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
