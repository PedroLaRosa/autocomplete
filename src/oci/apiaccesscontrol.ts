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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optPrivilegedApiRequestId: Fig.Option = {
  name: "--privileged-api-request-id",
  description: "Unique PrivilegedApiRequest identifier",
  args: { name: "privileged-api-request-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the given display name exactly",
  args: { name: "display-name" },
};
const optPrivilegedApiControlId: Fig.Option = {
  name: "--privileged-api-control-id",
  description: "The OCID of the PrivilegedApiControl",
  args: { name: "privileged-api-control-id" },
  isRequired: true,
};
const optResourceType: Fig.Option = {
  name: "--resource-type",
  description:
    "A filter to return only lists of resources that match the entire given service type",
  args: { name: "resource-type" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
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
const completionSpec: Fig.Spec = {
  name: "apiaccesscontrol",
  description: "Oracle API Access Control",
  subcommands: [
    {
      name: "api-metadata",
      description:
        "This service is used to restrict the control plane service apis",
      subcommands: [
        {
          name: "get",
          description: "Gets information about a ApiMetadata",
          options: [
            {
              name: "--api-metadata-id",
              description: "The OCID of the PrivilegedApiControl",
              args: { name: "api-metadata-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of ApiMetadata",
          options: [
            optCompartmentId,
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
            optResourceType,
            optDisplayName,
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
          name: "list-api-metadata-by-entity-types",
          description: "Gets a list of ApiMetadata Grouped By Entity Types",
          options: [
            optCompartmentId,
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
            optResourceType,
            optDisplayName,
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
      name: "privileged-api-control",
      description:
        "This service is used to restrict the control plane service apis",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a PrivilegedApiControl into a different compartment within the same tenancy",
          options: [
            optPrivilegedApiControlId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the PrivilegedApiControl to",
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
          description: "Creates a PrivilegedApiControl",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the PrivilegedApiControl in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--notification-topic-id",
              description:
                "The OCID of the OCI Notification topic to publish messages related to this Privileged Api Control",
              args: { name: "notification-topic-id" },
              isRequired: true,
            },
            {
              name: "--approver-group-id-list",
              description:
                "List of user IAM group ids who can approve an privilegedApi request associated with a resource governed",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--privileged-operation-list",
              description: "List of privileged operator operations",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description:
                "ResourceType for which the PrivilegedApiControl is applicable",
              args: { name: "resource-type" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "Name of the privilegedApi control It has to be unique",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of the privilegedApi control",
              args: { name: "description" },
            },
            {
              name: "--approver-group-level-list",
              description:
                "List of Group containing the levels at which the users belonging to the group can authorize",
              args: { name: "json" },
            },
            {
              name: "--resources",
              description: "Contains Resource details",
              args: { name: "json" },
            },
            {
              name: "--number-of-approvers",
              description:
                "Number of approvers required to approve an privilegedApi request",
              args: { name: "integer" },
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
          description: "Deletes a PrivilegedApiControl",
          options: [
            optPrivilegedApiControlId,
            {
              name: "--description",
              description: "Reason for deletion of PrivilegedApiControl",
              args: { name: "description" },
            },
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a PrivilegedApiControl",
          options: [optPrivilegedApiControlId, optFromJson],
        },
        {
          name: "update",
          description: "Updates a PrivilegedApiControl",
          options: [
            optPrivilegedApiControlId,
            {
              name: "--display-name",
              description: "Name of the privilegedApi control",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of the privilegedApi control",
              args: { name: "description" },
            },
            {
              name: "--resource-type",
              description:
                "ResourceType for which the PrivilegedApiControl is applicable",
              args: { name: "resource-type" },
            },
            {
              name: "--resources",
              description: "Contains Resource details",
              args: { name: "json" },
            },
            {
              name: "--notification-topic-id",
              description:
                "The OCID of the OCI Notification topic to publish messages related to this Privileged Api Control",
              args: { name: "notification-topic-id" },
            },
            {
              name: "--approver-group-id-list",
              description:
                "List of user IAM group ids who can approve an privilegedApi request associated with a target resource under",
              args: { name: "json" },
            },
            {
              name: "--approver-group-level-list",
              description:
                "List of Group containing the levels at which the users belonging to the group can authorize",
              args: { name: "json" },
            },
            {
              name: "--privileged-operation-list",
              description: "List of privileged operator operations",
              args: { name: "json" },
            },
            {
              name: "--number-of-approvers",
              description:
                "Number of approvers required to approve an privilegedApi request",
              args: { name: "integer" },
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
        {
          name: "list-privileged-api-controls",
          description: "Gets a list of PrivilegedApiControls",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description: "The OCID of the PrivilegedApiControl",
              args: { name: "id" },
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
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optDisplayName,
            optResourceType,
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
      name: "privileged-api-requests",
      description:
        "This service is used to restrict the control plane service apis",
      subcommands: [
        {
          name: "approve",
          description: "Approves privilegedApi request",
          options: [
            optPrivilegedApiRequestId,
            {
              name: "--approver-comment",
              description: "Comment by the approver during approval",
              args: { name: "approver-comment" },
            },
            {
              name: "--time-of-user-creation",
              description:
                "The time when access request is scheduled to be approved in RFC 3339 timestamp format",
              args: { name: "datetime" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "close",
          description: "Closes privilegedApi request",
          options: [
            optPrivilegedApiRequestId,
            {
              name: "--description",
              description: "Description about why the request is closed",
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
          name: "create",
          description: "Creates a PrivilegedApiRequest",
          options: [
            {
              name: "--reason-summary",
              description:
                "Summary comment by the operator creating the access request",
              args: { name: "reason-summary" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description:
                "The OCID of the target resource associated with the access request",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--privileged-operation-list",
              description:
                "List of api names, attributes for which approval is sought by the user",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--sub-resource-name-list",
              description: "The subresource names requested for approval",
              args: { name: "json" },
            },
            {
              name: "--notification-topic-id",
              description:
                "The OCID of the OCI Notification topic to publish messages related to this Privileged Api Request",
              args: { name: "notification-topic-id" },
            },
            {
              name: "--reason-detail",
              description:
                "Reason in detail for which the operator is requesting access on the target resource",
              args: { name: "reason-detail" },
            },
            {
              name: "--severity",
              description:
                "Priority assigned to the access request by the operator",
              args: { suggestions: ["SEV_1", "SEV_2", "SEV_3", "SEV_4"] },
            },
            {
              name: "--duration-in-hrs",
              description:
                "Duration in hours for which access is sought on the target resource",
              args: { name: "integer" },
            },
            {
              name: "--ticket-numbers",
              description:
                "A list of ticket numbers related to this Privileged Api Access Request, e.g. Service Request",
              args: { name: "json" },
            },
            {
              name: "--time-requested-for-future-access",
              description:
                "Time in future when the user for the privilegedApi request needs to be created in RFC 3339timestamp format",
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
          name: "get",
          description: "Gets information about a PrivilegedApiRequest",
          options: [optPrivilegedApiRequestId, optFromJson],
        },
        {
          name: "reject",
          description: "Rejects privilegedApi request",
          options: [
            optPrivilegedApiRequestId,
            {
              name: "--approver-comment",
              description:
                "Comment by the approver explaining why the request is rejected",
              args: { name: "approver-comment" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "revoke",
          description: "Revokes an already approved privilegedApi request",
          options: [
            optPrivilegedApiRequestId,
            {
              name: "--approver-comment",
              description:
                "Comment specified by the approver explaining why the approval is revoked",
              args: { name: "approver-comment" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-privileged-api-requests",
          description: "Lists all privilegedApi requests in the compartment",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description: "The OCID of the PrivilegedApiRequest",
              args: { name: "id" },
            },
            optDisplayName,
            {
              name: "--resource-id",
              description: "The OCID of the resource",
              args: { name: "resource-id" },
            },
            optResourceType,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--state",
              description:
                "A filter to return only resources that match the state",
              args: {
                suggestions: [
                  "CREATED",
                  "APPROVAL_WAITING",
                  "APPROVED",
                  "APPROVED_FOR_FUTURE",
                  "REJECTED",
                  "DEPLOYED",
                  "DEPLOY_FAILED",
                  "CLOSE_FAILED",
                  "REVOKE_FAILED",
                  "EXPIRY_FAILED",
                  "REVOKING",
                  "REVOKED",
                  "CLOSING",
                  "CLOSED",
                  "EXPIRED",
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
      name: "privileged-api-work-request",
      description:
        "This service is used to restrict the control plane service apis",
      subcommands: [
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
          name: "cancel",
          description: "Cancels a work request",
          options: [
            optWorkRequestId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optFromJson,
          ],
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
  ],
};

export default completionSpec;
