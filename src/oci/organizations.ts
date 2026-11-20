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
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, whether 'asc' or 'desc'",
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
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "The lifecycle state of the resource",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "INACTIVE",
      "UPDATING",
      "FAILED",
      "TERMINATED",
    ],
  },
};
const optOrganizationId: Fig.Option = {
  name: "--organization-id",
  description: "OCID of the organization",
  args: { name: "organization-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-created name to describe the invitation",
  args: { name: "display-name" },
};
const optDomainGovernanceId: Fig.Option = {
  name: "--domain-governance-id",
  description: "The domain governance OCID",
  args: { name: "domain-governance-id" },
  isRequired: true,
};
const optDomainId: Fig.Option = {
  name: "--domain-id",
  description: "The domain OCID",
  args: { name: "domain-id" },
  isRequired: true,
};
const optSubscriptionId: Fig.Option = {
  name: "--subscription-id",
  description: "OCID of the subscription",
  args: { name: "subscription-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "INACTIVE"] },
  isRepeatable: true,
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "INACTIVE",
      "UPDATING",
      "FAILED",
      "TERMINATED",
    ],
  },
  isRepeatable: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "organizations",
  description: "Organizations",
  subcommands: [
    {
      name: "domain",
      description:
        "Use the Organizations CLI to consolidate multiple OCI tenancies into an organization",
      subcommands: [
        {
          name: "get",
          description: "Gets information about the domain",
          options: [optDomainId, optFromJson],
        },
        {
          name: "create",
          description: "Begins the registration process for claiming a domain",
          options: [
            {
              name: "--compartment-id",
              description: "OCID of the tenancy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--domain-name",
              description: "The domain name",
              args: { name: "domain-name" },
              isRequired: true,
            },
            {
              name: "--subscription-email",
              description:
                "Email address to be used to notify the user, and that the ONS subscription will be created with",
              args: { name: "subscription-email" },
            },
            {
              name: "--is-governance-enabled",
              description:
                "Indicates whether governance should be enabled for this domain",
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
          name: "update",
          description: "Updates the domain",
          options: [
            optDomainId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "DELETED", "FAILED"] },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Return a (paginated) list of domains",
          options: [
            optCompartmentId,
            {
              name: "--domain-id",
              description: "The domain OCID",
              args: { name: "domain-id" },
            },
            optLifecycleState,
            {
              name: "--status",
              description: "The status of the domain",
              args: {
                suggestions: [
                  "PENDING",
                  "RELEASING",
                  "RELEASED",
                  "EXPIRING",
                  "REVOKING",
                  "REVOKED",
                  "ACTIVE",
                  "FAILED",
                ],
              },
            },
            {
              name: "--name",
              description:
                "A filter to return only resources that exactly match the name given",
              args: { name: "name" },
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Releases the domain, making it available to be claimed again by another tenancy",
          options: [
            optDomainId,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "DELETED", "FAILED"] },
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
      name: "domain-governance",
      description:
        "Use the Organizations CLI to consolidate multiple OCI tenancies into an organization",
      subcommands: [
        {
          name: "get",
          description: "Gets information about the domain governance entity",
          options: [optDomainGovernanceId, optFromJson],
        },
        {
          name: "create",
          description: "Adds domain governance to a claimed domain",
          options: [
            {
              name: "--compartment-id",
              description: "OCID of the tenancy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--domain-id",
              description: "OCID of the domain",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--subscription-email",
              description:
                "Email address to be used to notify the user, and that the ONS subscription will be created with",
              args: { name: "subscription-email" },
              isRequired: true,
            },
            {
              name: "--ons-topic-id",
              description:
                "The ONS topic associated with this domain governance entity",
              args: { name: "ons-topic-id" },
              isRequired: true,
            },
            {
              name: "--ons-subscription-id",
              description:
                "The ONS subscription associated with this domain governance entity",
              args: { name: "ons-subscription-id" },
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
          name: "update",
          description: "Updates the domain governance entity",
          options: [
            optDomainGovernanceId,
            {
              name: "--subscription-email",
              description:
                "Email address to be used to notify the user, and that the ONS subscription will be created with",
              args: { name: "subscription-email" },
            },
            {
              name: "--is-governance-enabled",
              description:
                "Indicates whether governance is enabled for this domain",
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
          name: "list",
          description:
            "Return a (paginated) list of domain governance entities",
          options: [
            optCompartmentId,
            {
              name: "--domain-id",
              description: "The domain OCID",
              args: { name: "domain-id" },
            },
            {
              name: "--domain-governance-id",
              description: "The domain governance OCID",
              args: { name: "domain-governance-id" },
            },
            optLifecycleState,
            {
              name: "--name",
              description:
                "A filter to return only resources that exactly match the name given",
              args: { name: "name" },
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Removes domain governance from a claimed domain",
          options: [
            optDomainGovernanceId,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "governance",
      description:
        "Use the Organizations CLI to consolidate multiple OCI tenancies into an organization",
      subcommands: [
        {
          name: "organization-tenancy",
          description: "The information about the organization tenancy",
          subcommands: [
            {
              name: "add",
              description:
                "Starts a work request to opt the tenancy in to governance rules",
              options: [
                optOrganizationId,
                {
                  name: "--organization-tenancy-id",
                  description:
                    "OCID of tenancy that is opting in to governance rules",
                  args: { name: "organization-tenancy-id" },
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
              name: "remove",
              description:
                "Starts a work request to opt the tenancy out of governance rules",
              options: [
                optOrganizationId,
                {
                  name: "--organization-tenancy-id",
                  description:
                    "OCID of tenancy that is opting out of governance rules",
                  args: { name: "organization-tenancy-id" },
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
      ],
    },
    {
      name: "link",
      description:
        "Use the Organizations CLI to consolidate multiple OCI tenancies into an organization",
      subcommands: [
        {
          name: "link-with-tenancy-names",
          description:
            "A link between a parent tenancy and a child tenancy, including the parent and child tenancy names",
          subcommands: [
            {
              name: "get",
              description:
                "Gets information about the link along with the parent and child tenancy names",
              options: [
                {
                  name: "--link-id",
                  description: "OCID of the link to retrieve",
                  args: { name: "link-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "get",
          description: "Gets information about the link",
          options: [
            {
              name: "--link-id",
              description: "OCID of the link to retrieve",
              args: { name: "link-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Return a (paginated) list of links",
          options: [
            {
              name: "--parent-tenancy-id",
              description:
                "The ID of the parent tenancy this link is associated with",
              args: { name: "parent-tenancy-id" },
            },
            {
              name: "--child-tenancy-id",
              description:
                "The ID of the child tenancy this link is associated with",
              args: { name: "child-tenancy-id" },
            },
            {
              name: "--feature",
              description: "The feature associated with this link",
              args: { name: "feature" },
            },
            optLifecycleState,
            optPage,
            optLimit,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Starts the link termination workflow",
          options: [
            {
              name: "--link-id",
              description: "OCID of the link to terminate",
              args: { name: "link-id" },
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
      ],
    },
    {
      name: "link-features",
      description:
        "Use the Organizations CLI to consolidate multiple OCI tenancies into an organization",
      subcommands: [
        {
          name: "link-features-collection",
          description: "Result of a query request for a list of link features",
          subcommands: [
            {
              name: "list-link-features",
              description: "Return a list of link features",
              options: [optCompartmentId, optAll, optFromJson],
            },
          ],
        },
      ],
    },
    {
      name: "organization-tenancy",
      description: "The information about the organization tenancy",
      subcommands: [
        {
          name: "approve-organization-tenancy-for-transfer",
          description: "Approve an organization's child tenancy for transfer",
          options: [
            optCompartmentId,
            {
              name: "--organization-tenancy-id",
              description: "OCID of the child tenancy",
              args: { name: "organization-tenancy-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "If certain validations are successful, initiate tenancy termination",
          options: [
            {
              name: "--organization-tenancy-id",
              description: "OCID of the tenancy to be terminated",
              args: { name: "organization-tenancy-id" },
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
          description: "Gets information about the organization's tenancy",
          options: [
            optOrganizationId,
            {
              name: "--tenancy-id",
              description: "OCID of the tenancy to retrieve",
              args: { name: "tenancy-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "restore",
          description: "An asynchronous API to restore a tenancy",
          options: [
            {
              name: "--organization-tenancy-id",
              description: "OCID of the tenancy to be restored",
              args: { name: "organization-tenancy-id" },
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
          name: "unapprove-organization-tenancy-for-transfer",
          description: "Cancel an organization's child tenancy for transfer",
          options: [
            optCompartmentId,
            {
              name: "--organization-tenancy-id",
              description: "OCID of the child tenancy",
              args: { name: "organization-tenancy-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "organization",
      description: "An organization entity",
      subcommands: [
        {
          name: "get",
          description: "Gets information about the organization",
          options: [
            {
              name: "--organization-id",
              description: "OCID of the organization to retrieve",
              args: { name: "organization-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-organization-tenancies",
          description: "Gets a list of tenancies in the organization",
          options: [
            optOrganizationId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists organizations associated with the caller",
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
          name: "update",
          description: "Map the default subscription to the organization",
          options: [
            optOrganizationId,
            {
              name: "--default-ucm-subscription-id",
              description:
                "OCID of the default Universal Credits Model subscription",
              args: { name: "default-ucm-subscription-id" },
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
      name: "child-tenancy",
      subcommands: [
        {
          name: "create",
          description: "Creates a child tenancy asynchronously",
          options: [
            {
              name: "--compartment-id",
              description: "The tenancy ID of the parent tenancy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--tenancy-name",
              description: "The tenancy name to use for the child tenancy",
              args: { name: "tenancy-name" },
              isRequired: true,
            },
            {
              name: "--home-region",
              description: "The home region to use for the child tenancy",
              args: { name: "home-region" },
              isRequired: true,
            },
            {
              name: "--admin-email",
              description: "Email address of the child tenancy administrator",
              args: { name: "admin-email" },
              isRequired: true,
            },
            {
              name: "--policy-name",
              description:
                "The name to use for the administrator policy in the child tenancy",
              args: { name: "policy-name" },
            },
            {
              name: "--governance-status",
              description: "The governance status of the child tenancy",
              args: { suggestions: ["OPTED_IN", "OPTED_OUT"] },
            },
            {
              name: "--subscription-id",
              description:
                "OCID of the subscription that needs to be assigned to the child tenancy",
              args: { name: "subscription-id" },
            },
            {
              name: "--features",
              description:
                "List of features that the child and parent tenancies will have links for",
              args: { name: "json" },
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
      name: "recipient-invitation",
      description:
        "Use the Organizations CLI to consolidate multiple OCI tenancies into an organization",
      subcommands: [
        {
          name: "accept",
          description: "Accepts a recipient invitation",
          options: [
            {
              name: "--recipient-invitation-id",
              description: "OCID of recipient invitation to accept",
              args: { name: "recipient-invitation-id" },
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
          name: "get",
          description: "Gets information about the recipient invitation",
          options: [
            {
              name: "--recipient-invitation-id",
              description: "OCID of the recipient invitation to retrieve",
              args: { name: "recipient-invitation-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "ignore",
          description: "Ignores a recipient invitation",
          options: [
            {
              name: "--recipient-invitation-id",
              description: "OCID of recipient invitation to ignore",
              args: { name: "recipient-invitation-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Return a (paginated) list of recipient invitations",
          options: [
            optCompartmentId,
            {
              name: "--sender-tenancy-id",
              description: "The tenancy that sent the invitation",
              args: { name: "sender-tenancy-id" },
            },
            optLifecycleState,
            {
              name: "--status",
              description: "The status of the recipient invitation",
              args: {
                suggestions: [
                  "PENDING",
                  "CANCELED",
                  "ACCEPTED",
                  "IGNORED",
                  "EXPIRED",
                  "FAILED",
                ],
              },
            },
            optPage,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the recipient invitation",
          options: [
            {
              name: "--recipient-invitation-id",
              description: "OCID of the recipient invitation to update",
              args: { name: "recipient-invitation-id" },
              isRequired: true,
            },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sender-invitation",
      description:
        "Use the Organizations CLI to consolidate multiple OCI tenancies into an organization",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a sender invitation and asynchronously sends the invitation to the recipient",
          options: [
            {
              name: "--compartment-id",
              description: "OCID of the sender tenancy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--recipient-tenancy-id",
              description: "OCID of the recipient tenancy",
              args: { name: "recipient-tenancy-id" },
              isRequired: true,
            },
            {
              name: "--recipient-email-address",
              description: "Email address of the recipient",
              args: { name: "recipient-email-address" },
            },
            optDisplayName,
            {
              name: "--subjects",
              description: "The list of subjects this invitation contains",
              args: { name: "json" },
            },
            {
              name: "--features",
              description:
                "List of features that the invitation is being sent for",
              args: { name: "json" },
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
          name: "cancel",
          description: "Cancels a sender invitation",
          options: [
            {
              name: "--sender-invitation-id",
              description: "OCID of the sender invitation to cancel",
              args: { name: "sender-invitation-id" },
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
          name: "get",
          description: "Gets information about the sender invitation",
          options: [
            {
              name: "--sender-invitation-id",
              description: "OCID of the sender invitation to retrieve",
              args: { name: "sender-invitation-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Return a (paginated) list of sender invitations",
          options: [
            optCompartmentId,
            {
              name: "--recipient-tenancy-id",
              description: "The tenancy that the invitation is addressed to",
              args: { name: "recipient-tenancy-id" },
            },
            optLifecycleState,
            {
              name: "--status",
              description: "The status of the sender invitation",
              args: {
                suggestions: [
                  "PENDING",
                  "CANCELED",
                  "ACCEPTED",
                  "EXPIRED",
                  "FAILED",
                  "NOT_APPLICABLE",
                ],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the sender invitation",
          options: [
            {
              name: "--sender-invitation-id",
              description: "OCID of the sender invitation to update",
              args: { name: "sender-invitation-id" },
              isRequired: true,
            },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "subscription-mapping",
      description: "Subscription mapping information",
      subcommands: [
        {
          name: "create",
          description:
            "Assign the tenancy record identified by the compartment ID to the given subscription ID",
          options: [
            {
              name: "--compartment-id",
              description: "OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--subscription-id",
              description: "OCID of Subscription",
              args: { name: "subscription-id" },
              isRequired: true,
            },
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
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
            "Delete the subscription mapping details by subscription mapping ID",
          options: [
            {
              name: "--subscription-mapping-id",
              description: "OCID of the subscription mapping ID",
              args: { name: "subscription-mapping-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
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
          name: "get",
          description:
            "Get the subscription mapping details by subscription mapping ID",
          options: [
            {
              name: "--subscription-mapping-id",
              description: "OCID of the subscriptionMappingId",
              args: { name: "subscription-mapping-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the subscription mappings for all the subscriptions owned by a given compartmentId",
          options: [
            optSubscriptionId,
            {
              name: "--subscription-mapping-id",
              description: "A unique ID for subscription and tenancy mapping",
              args: { name: "subscription-mapping-id" },
            },
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of the resource",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optPage,
            optLimit,
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
      name: "assigned-subscription",
      description:
        "Assigned subscription type, which carries shared properties for any assigned subscription version",
      subcommands: [
        {
          name: "get",
          description:
            "Get the assigned subscription details by assigned subscription ID",
          options: [
            {
              name: "--assigned-subscription-id",
              description: "OCID of the assigned Oracle Cloud Subscription",
              args: { name: "assigned-subscription-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists subscriptions that are consumed by the compartment",
          options: [
            optCompartmentId,
            {
              name: "--subscription-id",
              description:
                "The ID of the subscription to which the tenancy is associated",
              args: { name: "subscription-id" },
            },
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            {
              name: "--entity-version",
              description: "The version of the subscription entity",
              args: { suggestions: ["V1", "V2"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "subscription",
      description:
        "Base subscription type, which carries shared properties for any subscription version",
      subcommands: [
        {
          name: "get",
          description: "Gets the subscription details by subscription ID",
          options: [optSubscriptionId, optFromJson],
        },
        {
          name: "list-available-regions",
          description: "List the available regions based on subscription ID",
          options: [optSubscriptionId, optPage, optAll, optFromJson],
        },
        {
          name: "list",
          description: "List the subscriptions that a compartment owns",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--subscription-id",
              description:
                "The ID of the subscription to which the tenancy is associated",
              args: { name: "subscription-id" },
            },
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            {
              name: "--entity-version",
              description: "The version of the subscription entity",
              args: { suggestions: ["V1", "V2"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "order",
      description:
        "Use the Organizations CLI to consolidate multiple OCI tenancies into an organization",
      subcommands: [
        {
          name: "activate",
          description:
            "Triggers an order activation workflow on behalf of the tenant, given by compartment ID in the body",
          options: [
            {
              name: "--compartment-id",
              description: "Tenant ID to activate the order",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--activation-token",
              description: "Activation token containing an order ID",
              args: { name: "activation-token" },
              isRequired: true,
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Returns the order details given by the order ID in the JWT",
          options: [
            {
              name: "--activation-token",
              description: "Activation token containing an order ID",
              args: { name: "activation-token" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description:
        "Use the Organizations CLI to consolidate multiple OCI tenancies into an organization",
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
            optPage,
            optLimit,
            optSortOrder,
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
            optWorkRequestId,
            optPage,
            optLimit,
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
          name: "list",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
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
