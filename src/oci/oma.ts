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
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "A token representing the position at which to start retrieving results",
  args: { name: "page" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
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
      "ACTIVE",
      "CREATING",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optAccessRequestId: Fig.Option = {
  name: "--access-request-id",
  description: "The unique identifier (OCID) of the access request",
  args: { name: "access-request-id" },
  isRequired: true,
};
const optApprovalTemplateId: Fig.Option = {
  name: "--approval-template-id",
  description: "The unique identifier (OCID) of the approval template",
  args: { name: "approval-template-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The unique identifier (OCID) of the compartment where the resource is located",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optLockboxId: Fig.Option = {
  name: "--lockbox-id",
  description: "Unique Lockbox identifier",
  args: { name: "lockbox-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName", "id"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optId: Fig.Option = {
  name: "--id",
  description:
    "A generic Id query param used to filter lockbox, access request and approval template by Id",
  args: { name: "id" },
};
const optLockboxPartner: Fig.Option = {
  name: "--lockbox-partner",
  description: "The name of the lockbox partner",
  args: { suggestions: ["FAAAS", "CANARY"] },
};
const optPartnerId: Fig.Option = {
  name: "--partner-id",
  description: "The ID of the partner",
  args: { name: "partner-id" },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const completionSpec: Fig.Spec = {
  name: "oma",
  description: "Managed Access",
  subcommands: [
    {
      name: "lockbox",
      description: "Description of Lockbox",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Lockbox resource from one compartment identifier to another",
          options: [optLockboxId, optCompartmentId, optIfMatch, optFromJson],
        },
        {
          name: "create",
          description: "Creates a new Lockbox",
          options: [
            {
              name: "--resource-id",
              description:
                "The unique identifier (OCID) of the customer's resource",
              args: { name: "resource-id" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--display-name",
              description: "Lockbox Identifier",
              args: { name: "display-name" },
            },
            {
              name: "--lockbox-partner",
              description: "The partner using this lockbox to lock a resource",
              args: { suggestions: ["FAAAS", "CANARY"] },
            },
            {
              name: "--partner-id",
              description:
                "The unique identifier (OCID) of partner resource using this lockbox to lock a resource",
              args: { name: "partner-id" },
            },
            {
              name: "--partner-compartment-id",
              description: "Compartment Identifier",
              args: { name: "partner-compartment-id" },
            },
            {
              name: "--approval-template-id",
              description: "Approval template ID",
              args: { name: "approval-template-id" },
            },
            {
              name: "--max-access-duration",
              description:
                "The maximum amount of time operator has access to associated resources",
              args: { name: "max-access-duration" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--context-attributes",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Lockbox resource by identifier",
          options: [
            optLockboxId,
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
          description: "Gets a Lockbox by identifier",
          options: [optLockboxId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the Lockbox",
          options: [
            optLockboxId,
            {
              name: "--display-name",
              description: "Lockbox Identifier",
              args: { name: "display-name" },
            },
            {
              name: "--approval-template-id",
              description: "Approval template ID",
              args: { name: "approval-template-id" },
            },
            {
              name: "--max-access-duration",
              description:
                "The maximum amount of time operator has access to associated resources",
              args: { name: "max-access-duration" },
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
      name: "approval-template",
      description:
        "Group/User OCIDs of those who can approve/deny/revoke operator's request to access associated resources",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an ApprovalTemplate resource from one compartment identifier to another",
          options: [
            optApprovalTemplateId,
            optCompartmentId,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new approval template",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description: "Approval template identifier",
              args: { name: "display-name" },
            },
            { name: "--approver-levels", args: { name: "json" } },
            {
              name: "--auto-approval-state",
              description: "The auto approval state of the lockbox",
              args: { suggestions: ["ENABLED", "DISABLED"] },
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
          description: "Deletes an ApprovalTemplate resource by identifier",
          options: [
            optApprovalTemplateId,
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
            "Retrieves an approval template identified by the approval template ID",
          options: [optApprovalTemplateId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the ApprovalTemplate",
          options: [
            optApprovalTemplateId,
            { name: "--approver-levels", args: { name: "json" } },
            {
              name: "--display-name",
              description: "Approval template identifier",
              args: { name: "display-name" },
            },
            {
              name: "--auto-approval-state",
              description: "The auto approval state of the lockbox",
              args: { suggestions: ["ENABLED", "DISABLED"] },
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
            optSortBy2,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "access-request",
      description: "An access request to a customer's resource",
      subcommands: [
        {
          name: "create",
          description: "Creates a new access request",
          options: [
            {
              name: "--lockbox-id",
              description:
                "The unique identifier (OCID) of the lockbox box that the access request is associated with which is immutable",
              args: { name: "lockbox-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The rationale for requesting the access request",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--access-duration",
              description:
                "The maximum amount of time operator has access to associated resources",
              args: { name: "access-duration" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the access request",
              args: { name: "display-name" },
            },
            {
              name: "--context",
              description:
                "The context object containing the access request specific details",
              args: { name: "json" },
            },
            {
              name: "--ticket-number",
              description: "The ticket number raised by external customers",
              args: { name: "ticket-number" },
            },
            {
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
                  "NEEDS_ATTENTION",
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
            "Retrieves an access request identified by the access request ID",
          options: [optAccessRequestId, optFromJson],
        },
        {
          name: "handle",
          description: "Handle the AccessRequest",
          options: [
            optAccessRequestId,
            {
              name: "--action",
              description: "The action take by persona",
              args: { suggestions: ["APPROVE", "DENY", "REVOKE", "CANCEL"] },
              isRequired: true,
            },
            {
              name: "--message",
              description: "Action justification or details",
              args: { name: "message" },
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
                  "WAITING",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "NEEDS_ATTENTION",
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
      name: "access-materials",
      description: "Access materials details",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves the access credential/material associated with the access request",
          options: [optAccessRequestId, optFromJson],
        },
      ],
    },
    {
      name: "access-request-ext",
      description:
        "An access request to a customer's resource that includes additional requestor metadata",
      subcommands: [
        {
          name: "get-access-request-internal",
          description:
            "Retrieves an access request identified by the access request ID for internal use",
          options: [optAccessRequestId, optFromJson],
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
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId2,
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
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
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "NEEDS_ATTENTION",
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
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "approval-templates",
      description: "Results of approval template search",
      subcommands: [
        {
          name: "list",
          description:
            "Retrieves a list of ApprovalTemplateSummary objects in a compartment",
          options: [
            optCompartmentId2,
            optId,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources for which their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "UPDATING",
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
      ],
    },
    {
      name: "lockboxes",
      description: "Results of a lockbox search",
      subcommands: [
        {
          name: "list",
          description: "Returns a list of Lockboxes",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName,
            {
              name: "--id",
              description: "Unique Lockbox identifier",
              args: { name: "id" },
            },
            {
              name: "--resource-id",
              description: "The ID of the resource associated with the lockbox",
              args: { name: "resource-id" },
            },
            optLockboxPartner,
            optPartnerId,
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
      name: "access-requests",
      description: "Results of access request search",
      subcommands: [
        {
          name: "export-access-requests",
          description:
            "Exports a list of AccessRequestSummary objects within a compartment and during a specified time range in text",
          options: [
            {
              name: "--lockbox-id",
              description:
                "The unique identifier (OCID) of the lockbox box that the access request is associated with which is immutable",
              args: { name: "lockbox-id" },
              isRequired: true,
            },
            {
              name: "--time-created-after",
              description:
                "Date and time after which access requests were created, as described in RFC 3339",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--time-created-before",
              description:
                "Date and time before which access requests were created, as described in RFC 3339s",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optId,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "IN_PROGRESS",
                  "WAITING",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "FAILED",
                ],
              },
            },
            optLockboxPartner,
            optPartnerId,
            {
              name: "--requestor-id",
              description:
                "The unique identifier (OCID) of the requestor in which to list resources",
              args: { name: "requestor-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Retrieves a list of AccessRequestSummary objects in a compartment",
          options: [
            {
              name: "--lockbox-id",
              description:
                "The unique identifier (OCID) of the associated lockbox",
              args: { name: "lockbox-id" },
            },
            optId,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "IN_PROGRESS",
                  "WAITING",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "FAILED",
                ],
              },
            },
            optLockboxPartner,
            optPartnerId,
            {
              name: "--requestor-id",
              description:
                "The unique identifier (OCID) of the requestor in which to list resources",
              args: { name: "requestor-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--time-created-after",
              description:
                "Date and time on or after which Access Requests were created, as described in RFC 3339",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-before",
              description:
                "Date and time on or before which Access requests were created, as described in RFC 3339",
              args: { name: "datetime" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-log",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a (paginated) list of logs for the work request with the given ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy2,
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
