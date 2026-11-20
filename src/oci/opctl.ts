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
const optAccessRequestId: Fig.Option = {
  name: "--access-request-id",
  description: "Unique AccessRequest identifier",
  args: { name: "access-request-id" },
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
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optOperatorControlAssignmentId: Fig.Option = {
  name: "--operator-control-assignment-id",
  description: "Unique OperatorControl identifier",
  args: { name: "operator-control-assignment-id" },
  isRequired: true,
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
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
const optOperatorControlId: Fig.Option = {
  name: "--operator-control-id",
  description: "Unique OperatorControl identifier",
  args: { name: "operator-control-id" },
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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATED",
      "APPLIED",
      "APPLYFAILED",
      "UPDATING",
      "UPDATEFAILED",
      "DELETING",
      "DELETED",
      "DELETIONFAILED",
      "CUSTOMERASSIGNED",
    ],
  },
  isRepeatable: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["CREATED", "ASSIGNED", "UNASSIGNED", "DELETED"] },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "opctl",
  description: "Operator Access Control",
  subcommands: [
    {
      name: "access-request",
      description:
        "An Oracle operator raises access request when they need access to any infrastructure resource governed",
      subcommands: [
        {
          name: "approve",
          description: "Approves an access request",
          options: [
            optAccessRequestId,
            {
              name: "--approver-comment",
              description: "Comment by the approver during approval",
              args: { name: "approver-comment" },
            },
            {
              name: "--audit-type",
              description: "Specifies the type of auditing to be enabled",
              args: { name: "json" },
            },
            {
              name: "--additional-message",
              description: "Message that needs to be displayed to the Ops User",
              args: { name: "additional-message" },
            },
            {
              name: "--time-of-user-creation",
              description:
                "The time when access request is scheduled to be approved in RFC 3339 timestamp format",
              args: { name: "datetime" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details of an access request",
          options: [optAccessRequestId, optFromJson],
        },
        {
          name: "interaction-request",
          description:
            "Posts query for additional information for the given access request",
          options: [
            optAccessRequestId,
            {
              name: "--more-info-details",
              description:
                "Questions for asking to provide more information to operators",
              args: { name: "more-info-details" },
            },
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATED",
                  "APPROVALWAITING",
                  "PREAPPROVED",
                  "APPROVED",
                  "MOREINFO",
                  "REJECTED",
                  "DEPLOYED",
                  "DEPLOYFAILED",
                  "UNDEPLOYED",
                  "UNDEPLOYFAILED",
                  "CLOSEFAILED",
                  "REVOKEFAILED",
                  "EXPIRYFAILED",
                  "REVOKING",
                  "REVOKED",
                  "EXTENDING",
                  "EXTENDED",
                  "EXTENSIONREJECTED",
                  "COMPLETING",
                  "COMPLETED",
                  "EXPIRED",
                  "APPROVEDFORFUTURE",
                  "INREVIEW",
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
          name: "list-access-request-histories",
          description:
            "Returns a history of all status associated with the accessRequestId",
          options: [
            optAccessRequestId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists all access requests in the compartment",
          options: [
            optCompartmentId,
            {
              name: "--resource-name",
              description:
                "A filter to return only resources that match the given ResourceName",
              args: { name: "resource-name" },
            },
            optResourceType,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given AccessRequest lifecycleState",
              args: {
                suggestions: [
                  "CREATED",
                  "APPROVALWAITING",
                  "PREAPPROVED",
                  "APPROVED",
                  "MOREINFO",
                  "REJECTED",
                  "DEPLOYED",
                  "DEPLOYFAILED",
                  "UNDEPLOYED",
                  "UNDEPLOYFAILED",
                  "CLOSEFAILED",
                  "REVOKEFAILED",
                  "EXPIRYFAILED",
                  "REVOKING",
                  "REVOKED",
                  "EXTENDING",
                  "EXTENDED",
                  "EXTENSIONREJECTED",
                  "COMPLETING",
                  "COMPLETED",
                  "EXPIRED",
                  "APPROVEDFORFUTURE",
                  "INREVIEW",
                ],
              },
            },
            {
              name: "--num-days",
              description:
                "The number of days since when the user wants to search",
              args: { name: "integer" },
            },
            {
              name: "--time-start",
              description:
                "Query start time in UTC in ISO 8601 format(inclusive)",
              args: { name: "datetime" },
            },
            {
              name: "--time-end",
              description:
                "Query start time in UTC in ISO 8601 format(inclusive)",
              args: { name: "datetime" },
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
          name: "list-interactions",
          description:
            "Lists the MoreInformation interaction between customer and operators",
          options: [
            optAccessRequestId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "reject",
          description: "Rejects an access request",
          options: [
            optAccessRequestId,
            {
              name: "--approver-comment",
              description:
                "Comment by the approver explaining why the request is rejected",
              args: { name: "approver-comment" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "review",
          description: "Reviews the access request",
          options: [
            optAccessRequestId,
            {
              name: "--approver-comment",
              description:
                "Comment by the approver explaining that the access request is in review",
              args: { name: "approver-comment" },
            },
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATED",
                  "APPROVALWAITING",
                  "PREAPPROVED",
                  "APPROVED",
                  "MOREINFO",
                  "REJECTED",
                  "DEPLOYED",
                  "DEPLOYFAILED",
                  "UNDEPLOYED",
                  "UNDEPLOYFAILED",
                  "CLOSEFAILED",
                  "REVOKEFAILED",
                  "EXPIRYFAILED",
                  "REVOKING",
                  "REVOKED",
                  "EXTENDING",
                  "EXTENDED",
                  "EXTENSIONREJECTED",
                  "COMPLETING",
                  "COMPLETED",
                  "EXPIRED",
                  "APPROVEDFORFUTURE",
                  "INREVIEW",
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
          name: "revoke",
          description: "Revokes an already approved access request",
          options: [
            optAccessRequestId,
            {
              name: "--approver-comment",
              description:
                "Comment specified by the approver explaining why the approval is revoked",
              args: { name: "approver-comment" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "operator-control",
      description: "Operator Access Control enables you to grant, audit",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Operator Control resource into a different compartment",
          options: [
            optOperatorControlId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment to contain the operator contol",
              args: { name: "compartment-id" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an Operator Control",
          options: [
            {
              name: "--operator-control-name",
              description: "Name of the operator control",
              args: { name: "operator-control-name" },
              isRequired: true,
            },
            {
              name: "--approver-groups-list",
              description:
                "List of user groups who can approve an access request associated with a resource governed by this operator",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--is-fully-pre-approved",
              description:
                "Whether all the operator actions have been pre-approved",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description:
                "ResourceType for which the OperatorControl is applicable",
              args: {
                suggestions: [
                  "EXACC",
                  "EXADATAINFRASTRUCTURE",
                  "AUTONOMOUSVMCLUSTER",
                  "CLOUDAUTONOMOUSVMCLUSTER",
                  "CCCINFRASTRUCTURE",
                  "CLOUDEXADATAINFRASTRUCTURE",
                ],
              },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains this operator control",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the operator control",
              args: { name: "description" },
            },
            {
              name: "--approvers-list",
              description:
                "List of users who can approve an access request associated with a resource governed by this operator control",
              args: { name: "json" },
            },
            {
              name: "--pre-approved-op-action-list",
              description: "List of pre-approved operator actions",
              args: { name: "json" },
            },
            {
              name: "--number-of-approvers",
              description:
                "Number of approvers required to approve an access request",
              args: { name: "integer" },
            },
            {
              name: "--notification-topic-id",
              description:
                "The OCID of the OCI Notification topic to publish messages related to this operator control",
              args: { name: "notification-topic-id" },
            },
            {
              name: "--email-id-list",
              description: "List of emailId",
              args: { name: "json" },
            },
            {
              name: "--system-message",
              description:
                "This is the message that will be displayed to the operator users while accessing the system",
              args: { name: "system-message" },
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
          description: "Deletes an Operator Control",
          options: [
            optOperatorControlId,
            {
              name: "--description",
              description: "Reason for deletion of OperatorControl",
              args: { name: "description" },
            },
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the Operator Control associated with the specified Operator Control ID",
          options: [optOperatorControlId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the operator controls in the compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given OperatorControl lifecycleState",
              args: {
                suggestions: ["CREATED", "ASSIGNED", "UNASSIGNED", "DELETED"],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return OperatorControl that match the entire display name given",
              args: { name: "display-name" },
            },
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
        {
          name: "update",
          description:
            "Modifies the existing OperatorControl for a given operator control id except the operator control id",
          options: [
            optOperatorControlId,
            {
              name: "--operator-control-name",
              description: "Name of the operator control",
              args: { name: "operator-control-name" },
              isRequired: true,
            },
            {
              name: "--approver-groups-list",
              description:
                "List of user groups who can approve an access request associated with a target resource under the governance",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--is-fully-pre-approved",
              description:
                "Whether all the operator actions have been pre-approved",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the operator control",
              args: { name: "description" },
            },
            {
              name: "--approvers-list",
              description:
                "List of users who can approve an access request associated with a target resource under the governance",
              args: { name: "json" },
            },
            {
              name: "--pre-approved-op-action-list",
              description: "List of pre-approved operator actions",
              args: { name: "json" },
            },
            {
              name: "--notification-topic-id",
              description:
                "The OCID of the OCI Notification topic to publish messages related to this operator control",
              args: { name: "notification-topic-id" },
            },
            {
              name: "--email-id-list",
              description: "List of emailId",
              args: { name: "json" },
            },
            {
              name: "--number-of-approvers",
              description:
                "Number of approvers required to approve an access request",
              args: { name: "integer" },
            },
            {
              name: "--system-message",
              description:
                "System message that would be displayed to the operator users on accessing the target resource under",
              args: { name: "system-message" },
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
      name: "operator-action",
      description: "Details of the operator action",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the operator action associated with the specified operator action ID",
          options: [
            {
              name: "--operator-action-id",
              description:
                "Unique Oracle supplied identifier associated with the operator action",
              args: { name: "operator-action-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists all the OperatorActions available in the system",
          options: [
            optCompartmentId,
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "name" },
            },
            optResourceType,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given OperatorAction lifecycleState",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
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
      name: "operator-control-assignment",
      description:
        "An Operator Control Assignment identifies the target resource that is placed under the governance of",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Changes the compartment of the specified Operator Control assignment ID",
          options: [
            optOperatorControlAssignmentId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment to contain the operator contol assignment",
              args: { name: "compartment-id" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an Operator Control Assignment resource",
          options: [
            {
              name: "--operator-control-id",
              description:
                "The OCID of the operator control that is being assigned to a target resource",
              args: { name: "operator-control-id" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description:
                "The OCID of the target resource being brought under the governance of the operator control",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the target resource",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Type of the target resource",
              args: {
                suggestions: [
                  "EXACC",
                  "EXADATAINFRASTRUCTURE",
                  "AUTONOMOUSVMCLUSTER",
                  "CLOUDAUTONOMOUSVMCLUSTER",
                  "CCCINFRASTRUCTURE",
                  "CLOUDEXADATAINFRASTRUCTURE",
                ],
              },
              isRequired: true,
            },
            {
              name: "--resource-compartment-id",
              description:
                "The OCID of the compartment that contains the target resource",
              args: { name: "resource-compartment-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the operator control assignment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-enforced-always",
              description:
                "If set, then the target resource is always governed by the operator control",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--time-assignment-from",
              description:
                "The time at which the target resource will be brought under the governance of the operator control in RFC",
              args: { name: "datetime" },
            },
            {
              name: "--time-assignment-to",
              description:
                "The time at which the target resource will leave the governance of the operator control in RFC 3339timestamp",
              args: { name: "datetime" },
            },
            {
              name: "--comment",
              description:
                "Comment about the assignment of the operator control to this target resource",
              args: { name: "comment" },
            },
            {
              name: "--is-log-forwarded",
              description:
                "If set, then the audit logs will be forwarded to the relevant remote logging server",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--remote-syslog-server-address",
              description:
                "The address of the remote syslog server where the audit logs will be forwarded to",
              args: { name: "remote-syslog-server-address" },
            },
            {
              name: "--remote-syslog-server-port",
              description: "The listening port of the remote syslog server",
              args: { name: "integer" },
            },
            {
              name: "--remote-syslog-server-ca-cert",
              description: "The CA certificate of the remote syslog server",
              args: { name: "remote-syslog-server-ca-cert" },
            },
            {
              name: "--is-hypervisor-log-forwarded",
              description:
                "If set, then the hypervisor audit logs will be forwarded to the relevant remote syslog server",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-auto-approve-during-maintenance",
              description:
                "The boolean if true would autoApprove during maintenance",
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
          name: "delete",
          description: "Deletes the specified Operator Control Assignment",
          options: [
            optOperatorControlAssignmentId,
            {
              name: "--description",
              description: "Reason for detachment of OperatorAssignment",
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
          name: "get-assignment-validation-status",
          description:
            "Returns the status of assignment validation associated with the assignmentId and the executionId",
          options: [optOperatorControlAssignmentId, optFromJson],
        },
        {
          name: "get",
          description:
            "Gets the details of an Operator Control Assignment of the specified ID",
          options: [optOperatorControlAssignmentId, optFromJson],
        },
        {
          name: "list",
          description: "Lists all Operator Control Assignments",
          options: [
            optCompartmentId,
            {
              name: "--operator-control-name",
              description:
                "A filter to return OperatorControl that match the given operatorControlName",
              args: { name: "operator-control-name" },
            },
            {
              name: "--resource-name",
              description:
                "A filter to return only resources that match the given ResourceName",
              args: { name: "resource-name" },
            },
            optResourceType,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given OperatorControlAssignment",
              args: {
                suggestions: [
                  "CREATED",
                  "APPLIED",
                  "APPLYFAILED",
                  "UPDATING",
                  "UPDATEFAILED",
                  "DELETING",
                  "DELETED",
                  "DELETIONFAILED",
                  "CUSTOMERASSIGNED",
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
          description:
            "Modifies the existing Operator Control assignment of the specified Operator Control assignment ID",
          options: [
            optOperatorControlAssignmentId,
            {
              name: "--is-enforced-always",
              description:
                "If true, then the target resource is always governed by the operator control",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--time-assignment-from",
              description:
                "The time at which the target resource will be brought under the governance of the operator control in RFC",
              args: { name: "datetime" },
            },
            {
              name: "--time-assignment-to",
              description:
                "The time at which the target resource will leave the governance of the operator control in RFC 3339timestamp",
              args: { name: "datetime" },
            },
            {
              name: "--comment",
              description:
                "Comment about the modification of the operator control assignment",
              args: { name: "comment" },
            },
            {
              name: "--is-log-forwarded",
              description:
                "If set, then the audit logs will be forwarded to the relevant remote logging server",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--remote-syslog-server-address",
              description:
                "The address of the remote syslog server where the audit logs will be forwarded to",
              args: { name: "remote-syslog-server-address" },
            },
            {
              name: "--remote-syslog-server-port",
              description: "The listening port of the remote syslog server",
              args: { name: "integer" },
            },
            {
              name: "--remote-syslog-server-ca-cert",
              description: "The CA certificate of the remote syslog server",
              args: { name: "remote-syslog-server-ca-cert" },
            },
            {
              name: "--is-hypervisor-log-forwarded",
              description:
                "If set, then the hypervisor audit logs will be forwarded to the relevant remote syslog server",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-auto-approve-during-maintenance",
              description:
                "The boolean if true would autoApprove during maintenance",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
          name: "validate-operator-assignment",
          description:
            "Validates the assignment for the specified Operator Control Assignment ID",
          options: [
            optOperatorControlAssignmentId,
            {
              name: "--action-name",
              description:
                "Specifies the name of the operator action name for creating accessRequest",
              args: { name: "action-name" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
