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
  description: "Used for optimistic concurrency control",
  args: { name: "if-match" },
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
const optIsLockOverride: Fig.Option = {
  name: "--is-lock-override",
  description: "Whether to override locks (if any exist)",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
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
  description: "The sort order to use, either ascending or descending order",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID for the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The lock compartment ID",
  args: { name: "compartment-id" },
};
const optEmailDomainId: Fig.Option = {
  name: "--email-domain-id",
  description: "The OCID of this email domain",
  args: { name: "email-domain-id" },
  isRequired: true,
};
const optEmailIpPoolId: Fig.Option = {
  name: "--email-ip-pool-id",
  description: "The OCID of the IpPool",
  args: { name: "email-ip-pool-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optSenderId: Fig.Option = {
  name: "--sender-id",
  description: "The unique OCID of the sender",
  args: { name: "sender-id" },
  isRequired: true,
};
const optType: Fig.Option = {
  name: "--type",
  description: "Lock type",
  args: { suggestions: ["FULL", "DELETE"] },
  isRequired: true,
};
const optEmailReturnPathId: Fig.Option = {
  name: "--email-return-path-id",
  description: "The OCID of this email return path",
  args: { name: "email-return-path-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "NEEDS_ATTENTION",
      "INACTIVE",
      "FAILED",
      "DELETING",
      "DELETED",
      "UPDATING",
    ],
  },
  isRepeatable: true,
};
const optId: Fig.Option = {
  name: "--id",
  description:
    "A filter to only return resources that match the given id exactly",
  args: { name: "id" },
};
const optName: Fig.Option = {
  name: "--name",
  description:
    "A filter to only return resources that match the given name exactly",
  args: { name: "name" },
};
const optDkimId: Fig.Option = {
  name: "--dkim-id",
  description: "The OCID of this DKIM",
  args: { name: "dkim-id" },
  isRequired: true,
};
const optMessage: Fig.Option = {
  name: "--message",
  description: "A message added by the lock creator",
  args: { name: "message" },
};
const optRelatedResourceId: Fig.Option = {
  name: "--related-resource-id",
  description: "The resource ID that is locking this resource",
  args: { name: "related-resource-id" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "email",
  description: "Email Delivery",
  subcommands: [
    {
      name: "dkim",
      description: "The properties that define a DKIM",
      subcommands: [
        {
          name: "create",
          description: "Creates a new DKIM for an email domain",
          options: [
            {
              name: "--email-domain-id",
              description: "The OCID of the EmailDomain for this DKIM",
              args: { name: "email-domain-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The DKIM selector",
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "A string that describes the details about the DKIM",
              args: { name: "description" },
            },
            {
              name: "--private-key",
              description:
                "The DKIM RSA Private Key in Privacy-Enhanced Mail (PEM) format",
              args: { name: "private-key" },
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
          description: "Deletes a DKIM",
          options: [
            optDkimId,
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
          description: "Retrieves the specified DKIM",
          options: [optDkimId, optFromJson],
        },
        {
          name: "list",
          description: "Lists DKIMs for an email domain",
          options: [
            {
              name: "--email-domain-id",
              description:
                "The OCID of the email domain to which this DKIM belongs",
              args: { name: "email-domain-id" },
              isRequired: true,
            },
            optId,
            optName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description: "Filter returned list by specified lifecycle state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "INACTIVE",
                  "NEEDS_ATTENTION",
                  "UPDATING",
                ],
              },
            },
            {
              name: "--sort-by",
              description:
                "Specifies the attribute with which to sort the DKIMs",
              args: { suggestions: ["TIMECREATED", "ID", "NAME"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Modifies a DKIM",
          options: [
            optDkimId,
            {
              name: "--description",
              description: "A string that describes the details about the DKIM",
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
      name: "email-return-path",
      description: "The properties that define a Email Return Path",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a resource",
          options: [
            optEmailReturnPathId,
            optType,
            optCompartmentId2,
            optRelatedResourceId,
            optMessage,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
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
          name: "create",
          description: "Creates a new email return path",
          options: [
            {
              name: "--parent-resource-id",
              description:
                "The OCID of the EmailDomain for this email return path",
              args: { name: "parent-resource-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "The name of the email return path domain in the Internet Domain Name System (DNS)",
              args: { name: "name" },
            },
            {
              name: "--description",
              description:
                "A string that describes the details about the email return path",
              args: { name: "description" },
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
          description: "Deletes an email return path",
          options: [
            optEmailReturnPathId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves the specified email return path",
          options: [optEmailReturnPathId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists email return paths in the specified compartment or emaildomain",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID for the compartment",
              args: { name: "compartment-id" },
            },
            {
              name: "--parent-resource-id",
              description:
                "The OCID of the Email Domain to which this Email Return Path belongs",
              args: { name: "parent-resource-id" },
            },
            optId,
            optName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description: "Filter returned list by specified lifecycle state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "UPDATING",
                ],
              },
            },
            {
              name: "--sort-by",
              description:
                "Specifies the attribute with which to sort the return paths",
              args: { suggestions: ["TIMECREATED", "ID", "NAME"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove a lock to a resource",
          options: [
            optEmailReturnPathId,
            optType,
            optCompartmentId2,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
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
          name: "update",
          description: "Modifies an email return path",
          options: [
            optEmailReturnPathId,
            {
              name: "--description",
              description:
                "A string that describes the details about the email return path",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
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
      name: "configuration",
      description: "Tenancy level customer email configuration details",
      subcommands: [
        {
          name: "get-email",
          description:
            "Returns email configuration associated with the specified compartment",
          options: [optCompartmentId, optFromJson],
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
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            optPage,
            optLimit,
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
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            optSortOrder,
            {
              name: "--operation-type",
              description:
                "A filter to return only resources matching the given operation type",
              args: {
                suggestions: [
                  "CREATE_DKIM",
                  "DELETE_DKIM",
                  "MOVE_DKIM",
                  "UPDATE_DKIM",
                  "CREATE_EMAIL_DOMAIN",
                  "DELETE_EMAIL_DOMAIN",
                  "MOVE_EMAIL_DOMAIN",
                  "UPDATE_EMAIL_DOMAIN",
                  "CREATE_RETURN_PATH",
                  "DELETE_RETURN_PATH",
                  "UPDATE_RETURN_PATH",
                  "CREATE_IP_POOL",
                  "UPDATE_IP_POOL",
                  "DELETE_IP_POOL",
                  "MOVE_IP_POOL",
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
      name: "sender",
      description: "The full information representing an approved sender",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a resource",
          options: [
            optSenderId,
            optType,
            optCompartmentId2,
            optRelatedResourceId,
            optMessage,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a sender into a different compartment",
          options: [
            optSenderId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the sender should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a sender for a tenancy in a given compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the sender",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--email-address",
              description: "The email address of the sender",
              args: { name: "email-address" },
              isRequired: true,
            },
            {
              name: "--email-ip-pool-id",
              description: "An optional field",
              args: { name: "email-ip-pool-id" },
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
            "Deletes an approved sender for a tenancy in a given compartment for a provided senderId",
          options: [
            optSenderId,
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
          description: "Gets an approved sender for a given senderId",
          options: [optSenderId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a collection of approved sender email addresses and sender IDs",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description: "The current state of a sender",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "NEEDS_ATTENTION",
                  "INACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                  "UPDATING",
                ],
              },
            },
            {
              name: "--domain",
              description:
                "A filter to only return resources that match the given domain exactly",
              args: { name: "domain" },
            },
            {
              name: "--email-address",
              description: "The email address of the approved sender",
              args: { name: "email-address" },
            },
            {
              name: "--email-ip-pool-id",
              description:
                "A filter to only return resources that match the given IpPool resource exactly",
              args: { name: "email-ip-pool-id" },
            },
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED", "EMAILADDRESS"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove a lock to a resource",
          options: [
            optSenderId,
            optType,
            optCompartmentId2,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Replaces the set of tags for a sender with the tags provided",
          options: [
            optSenderId,
            {
              name: "--email-ip-pool-id",
              description:
                "The IpPool OCID used to submit an email by Email Delivery when sent from this sender",
              args: { name: "email-ip-pool-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
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
      name: "email-ip-pool",
      description:
        "A collection of IP addresses used by the Email Delivery service to submit an email",
      subcommands: [
        {
          name: "add",
          description: "Add OutboundIps to EmailIpPool",
          options: [
            {
              name: "--outbound-ips",
              description: "List of public IPs to ADD to the IpPool",
              args: { name: "json" },
              isRequired: true,
            },
            optEmailIpPoolId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a resource into a different compartment",
          options: [
            optEmailIpPoolId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new EmailIpPool",
          options: [
            {
              name: "--name",
              description: "The name of the IpPool",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment for this IpPool",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--outbound-ips",
              description:
                "A list of outbound public IPs for assignment to the IpPool",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the IpPool",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--last-ip-drain-period",
              description:
                "Last IP will be unassigned from the IP Pool after the period of time (in hours) specified by this parameter",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an EmailIpPool resource by identifier",
          options: [
            optEmailIpPoolId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves the specified IpPool by identifier",
          options: [optEmailIpPoolId, optFromJson],
        },
        {
          name: "remove",
          description: "Remove OutboundIps from EmailIpPool",
          options: [
            {
              name: "--outbound-ips",
              description: "List of public IPs to REMOVE from the IpPool",
              args: { name: "json" },
              isRequired: true,
            },
            optEmailIpPoolId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the EmailIpPool",
          options: [
            optEmailIpPoolId,
            {
              name: "--description",
              description: "The description of the IpPool",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--last-ip-drain-period",
              description:
                "Last IP will be unassigned from the IP Pool after the period of time (in hours) specified by this parameter",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of EmailIpPools",
          options: [
            optCompartmentId,
            optId,
            optName,
            {
              name: "--lifecycle-state",
              description: "Filter returned list by specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "INACTIVE",
                ],
              },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Specifies the attribute with which to sort the Email IpPools",
              args: { suggestions: ["TIMECREATED", "NAME"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "suppression",
      description: "The full information representing an email suppression",
      subcommands: [
        {
          name: "create",
          description:
            "Adds recipient email addresses to the suppression list for a tenancy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to contain the suppression",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--email-address",
              description: "The recipient email address of the suppression",
              args: { name: "email-address" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Removes a suppressed recipient email address from the suppression list for a tenancy in a given compartment",
          options: [
            {
              name: "--suppression-id",
              description: "The unique OCID of the suppression",
              args: { name: "suppression-id" },
              isRequired: true,
            },
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of a suppressed recipient email address for a given suppressionId",
          options: [
            {
              name: "--suppression-id",
              description: "The unique OCID of the suppression",
              args: { name: "suppression-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of suppressed recipient email addresses for a user",
          options: [
            optCompartmentId,
            {
              name: "--email-address",
              description: "The email address of the suppression",
              args: { name: "email-address" },
            },
            {
              name: "--time-created-greater-than-or-equal-to",
              description:
                "Search for suppressions that were created within a specific date range",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-less-than",
              description:
                "Search for suppressions that were created within a specific date range",
              args: { name: "datetime" },
            },
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED", "EMAILADDRESS"] },
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
      name: "work-request-log",
      description: "Results of a workRequestLog search",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of logs for a given work request",
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
      name: "domain",
      description: "The properties that define an email domain",
      subcommands: [
        {
          name: "add",
          description: "Adds a lock to a resource",
          options: [
            optEmailDomainId,
            optType,
            optCompartmentId2,
            optRelatedResourceId,
            optMessage,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
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
          name: "change-compartment",
          description: "Moves an email domain into a different compartment",
          options: [
            optEmailDomainId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the specified resource to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new email domain",
          options: [
            {
              name: "--name",
              description:
                "The name of the email domain in the Internet Domain Name System (DNS)",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment for this email domain",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--domain-verification-id",
              description:
                "Id for Domain in Domain Management (under governance) if DOMAINID verification method used",
              args: { name: "domain-verification-id" },
            },
            {
              name: "--description",
              description:
                "A string that describes the details about the domain",
              args: { name: "description" },
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
          description: "Deletes an email domain",
          options: [
            optEmailDomainId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves the specified email domain",
          options: [optEmailDomainId, optFromJson],
        },
        {
          name: "list",
          description: "Lists email domains in the specified compartment",
          options: [
            optCompartmentId,
            optId,
            optName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description: "Filter returned list by specified lifecycle state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "UPDATING",
                ],
              },
            },
            {
              name: "--sort-by",
              description:
                "Specifies the attribute with which to sort the email domains",
              args: { suggestions: ["TIMECREATED", "ID", "NAME"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description: "Remove a lock to a resource",
          options: [
            optEmailDomainId,
            optType,
            optCompartmentId2,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
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
          name: "update",
          description: "Modifies an email domain",
          options: [
            optEmailDomainId,
            {
              name: "--domain-verification-id",
              description:
                "Id for Domain in Domain Management (under governance) if DOMAINID verification method used",
              args: { name: "domain-verification-id" },
            },
            {
              name: "--description",
              description:
                "A string that describes the details about the domain",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
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
      name: "work-request-error",
      description: "Results of a workRequestError search",
      subcommands: [
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
      name: "email-outbound-ip",
      description: "Results of an outbound public IP search",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a list of all Outbound Public IPs assigned for a given tenant",
          options: [
            optCompartmentId,
            {
              name: "--outbound-ip",
              description: "The outbound IP address assigned to the tenancy",
              args: { name: "outbound-ip" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description: "Filter returned list by specified lifecycle state",
              args: {
                suggestions: ["UPDATING", "ACTIVE", "FAILED", "DRAINING"],
              },
            },
            {
              name: "--assignment-state",
              description: "Filter returned list by specified assignment state",
              args: { suggestions: ["AVAILABLE", "ASSIGNED"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["OUTBOUNDIP"] },
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
