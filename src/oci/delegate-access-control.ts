// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
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
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optDelegatedResourceAccessRequestId: Fig.Option = {
  name: "--delegated-resource-access-request-id",
  description: "Unique Delegated Resource Access Request identifier",
  args: { name: "delegated-resource-access-request-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDelegationControlId: Fig.Option = {
  name: "--delegation-control-id",
  description: "Unique Delegation Control identifier",
  args: { name: "delegation-control-id" },
  isRequired: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDelegationSubscriptionId: Fig.Option = {
  name: "--delegation-subscription-id",
  description: "Unique Delegation Subscription identifier",
  args: { name: "delegation-subscription-id" },
  isRequired: true,
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timestamp"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "delegate-access-control",
  description: "Oracle Delegate Access Control",
  subcommands: [
    {
      name: "service-provider-action",
      description: "Details of the Service Provider Action",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the Service Provider Action associated with the specified Service Provider Action ID",
          options: [
            {
              name: "--service-provider-action-id",
              description:
                "Unique Oracle supplied identifier associated with the Service Provider Action",
              args: { name: "service-provider-action-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all the ServiceProviderActions available in the system",
          options: [
            optCompartmentId,
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire name given",
              args: { name: "name" },
            },
            {
              name: "--resource-type",
              description:
                "A filter to return only resources that match the given resource type",
              args: {
                suggestions: ["VMCLUSTER", "CLOUDVMCLUSTER", "EXADBVMCLUSTER"],
              },
            },
            {
              name: "--service-provider-service-type",
              description:
                "A filter to return only resources that match the given Service Provider service type",
              args: {
                suggestions: [
                  "TROUBLESHOOTING",
                  "ASSISTED_PATCHING",
                  "MANAGED_SOFTWARE_UPDATES",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given Service Provider Action",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "delegated-resource-access-request-audit-log-report",
      description: "The audit log report details",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the audit log report for the given Delegated Resource Access Request",
          options: [
            optDelegatedResourceAccessRequestId,
            {
              name: "--is-process-tree-enabled",
              description:
                "Set to true to enable process tree computation in audit report",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "delegation-control",
      description:
        "Delegation Control enables you to grant, audit, or revoke the access Oracle has to your Exadata Cloud",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Delegation Control resource into a different compartment",
          options: [
            optDelegationControlId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment to contain the Delegation Control",
              args: { name: "compartment-id" },
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
          description: "Creates a Delegation Control",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains this Delegation Control",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Name of the Delegation Control",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--delegation-subscription-ids",
              description:
                "List of Delegation Subscription OCID that are allowed for this Delegation Control",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--resource-ids",
              description:
                "The OCID of the selected resources that this Delegation Control is applicable to",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description:
                "Resource type for which the Delegation Control is applicable to",
              args: {
                suggestions: ["VMCLUSTER", "CLOUDVMCLUSTER", "EXADBVMCLUSTER"],
              },
              isRequired: true,
            },
            {
              name: "--notification-topic-id",
              description:
                "The OCID of the OCI Notification topic to publish messages related to this Delegation Control",
              args: { name: "notification-topic-id" },
              isRequired: true,
            },
            {
              name: "--notification-message-format",
              description:
                "The format of the OCI Notification messages for this Delegation Control",
              args: { name: "notification-message-format" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the Delegation Control",
              args: { name: "description" },
            },
            {
              name: "--num-approvals-required",
              description: "Number of approvals required",
              args: { name: "integer" },
            },
            {
              name: "--pre-approved-service-provider-action-names",
              description: "List of pre-approved Service Provider Action names",
              args: { name: "json" },
            },
            {
              name: "--is-auto-approve-during-maintenance",
              description:
                "Set to true to allow all Delegated Resource Access Request to be approved automatically during maintenance",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--vault-id",
              description:
                "The OCID of the OCI Vault that will store the secrets containing the SSH keys to access the resource governed",
              args: { name: "vault-id" },
            },
            {
              name: "--vault-key-id",
              description:
                "The OCID of the Master Encryption Key in the OCI Vault specified by vaultId",
              args: { name: "vault-key-id" },
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
          description: "Deletes a Delegation Control",
          options: [
            optDelegationControlId,
            {
              name: "--description",
              description: "Reason why this Delegation Control is deleted",
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
          description:
            "Gets the Delegation Control associated with the specified Delegation Control ID",
          options: [optDelegationControlId, optFromJson],
        },
        {
          name: "list-delegation-control-resources",
          description:
            "Returns a list of resources associated with the Delegation Control",
          options: [
            optDelegationControlId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the Delegation Controls in the compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Delegation Control resources whose lifecycleState matches the given Delegation",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return Delegation Control resources that match the given display name",
              args: { name: "display-name" },
            },
            {
              name: "--resource-type",
              description:
                "A filter to return only resources that match the given resource type",
              args: {
                suggestions: ["VMCLUSTER", "CLOUDVMCLUSTER", "EXADBVMCLUSTER"],
              },
            },
            {
              name: "--resource-id",
              description:
                "A filter to return Delegation Control resources that match the given resource ID",
              args: { name: "resource-id" },
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
            "Updates the existing DelegationControl for a given Delegation Control ID",
          options: [
            optDelegationControlId,
            {
              name: "--display-name",
              description: "Name of the Delegation Control",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of the Delegation Control",
              args: { name: "description" },
            },
            {
              name: "--num-approvals-required",
              description: "Number of approvals required",
              args: { name: "integer" },
            },
            {
              name: "--delegation-subscription-ids",
              description:
                "List of Delegation Subscription OCID that are allowed for this Delegation Control",
              args: { name: "json" },
            },
            {
              name: "--is-auto-approve-during-maintenance",
              description:
                "Set to true to allow all Delegated Resource Access Request to be approved automatically during maintenance",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--resource-ids",
              description:
                "The OCID of the selected resources that this Delegation Control is applicable to",
              args: { name: "json" },
            },
            {
              name: "--pre-approved-service-provider-action-names",
              description: "List of pre-approved Service Provider Action names",
              args: { name: "json" },
            },
            {
              name: "--notification-topic-id",
              description:
                "The OCID of the OCI Notification topic to publish messages related to this Delegation Control",
              args: { name: "notification-topic-id" },
            },
            {
              name: "--notification-message-format",
              description:
                "The format of the OCI Notification messages for this Delegation Control",
              args: { name: "notification-message-format" },
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
      name: "service-provider",
      description: "Details of the Service Provider",
      subcommands: [
        {
          name: "get",
          description: "Gets a ServiceProvider by identifier",
          options: [
            {
              name: "--service-provider-id",
              description: "Unique Service Provider identifier",
              args: { name: "service-provider-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the Service Providers",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Service Provider resources whose lifecycleState matches the given Service Provider",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--name",
              description:
                "A filter to return Service Provider resources that match the given name",
              args: { name: "name" },
            },
            {
              name: "--supported-resource-type",
              description:
                "A filter to return only Service Provider resources whose supported resource type matches the given resource",
              args: {
                suggestions: ["VMCLUSTER", "CLOUDVMCLUSTER", "EXADBVMCLUSTER"],
              },
            },
            {
              name: "--service-provider-type",
              description:
                "A filter to return only Service Provider resources whose provider type matches the given provider type",
              args: { suggestions: ["ORACLE_PROVIDED"] },
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
      name: "delegated-resource-access-request",
      description:
        "A support operator raises Delegated Resource Access Request when they need access to any infrastructure",
      subcommands: [
        {
          name: "approve",
          description: "Approves a Delegated Resource Access Request",
          options: [
            optDelegatedResourceAccessRequestId,
            {
              name: "--approver-comment",
              description: "Comment by the approver during approval",
              args: { name: "approver-comment" },
            },
            {
              name: "--additional-message",
              description: "Message that needs to be displayed to the operator",
              args: { name: "additional-message" },
            },
            {
              name: "--time-approved-for-access",
              description:
                "Access start time that is actually approved by the customer in RFC 3339timestamp format",
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
          name: "get",
          description: "Gets details of a Delegated Resource Access Request",
          options: [optDelegatedResourceAccessRequestId, optFromJson],
        },
        {
          name: "list-delegated-resource-access-request-histories",
          description:
            "Returns a history of all status associated with the Delegated Resource Access RequestId",
          options: [
            optDelegatedResourceAccessRequestId,
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
          name: "list",
          description:
            "Lists all Delegated Resource Access Requests in the compartment",
          options: [
            optCompartmentId,
            {
              name: "--delegation-control-id",
              description: "Unique Delegation Control identifier",
              args: { name: "delegation-control-id" },
            },
            {
              name: "--resource-id",
              description:
                "A filter to return only Delegated Resource Access Requests for the given resource identifier",
              args: { name: "resource-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Delegated Resource Access Requests whose lifecycleState matches the given Delegated",
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
              name: "--request-status",
              description:
                "A filter to return only Delegated Resource Access Requests whose status matches the given Delegated Resource",
              args: {
                suggestions: [
                  "CREATED",
                  "APPROVAL_WAITING",
                  "OPERATOR_ASSIGNMENT_WAITING",
                  "PREAPPROVED",
                  "APPROVED",
                  "APPROVED_FOR_FUTURE",
                  "REJECTED",
                  "DEPLOYED",
                  "DEPLOY_FAILED",
                  "UNDEPLOYED",
                  "UNDEPLOY_FAILED",
                  "CLOSE_FAILED",
                  "REVOKE_FAILED",
                  "EXPIRY_FAILED",
                  "REVOKING",
                  "REVOKED",
                  "EXTENDING",
                  "EXTENDED",
                  "EXTENSION_REJECTED",
                  "EXTENSION_FAILED",
                  "COMPLETING",
                  "COMPLETED",
                  "EXPIRED",
                ],
              },
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
                "Query end time in UTC in ISO 8601 format(inclusive)",
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
          name: "list-service-provider-interactions",
          description:
            "Lists the MoreInformation interaction between customer and support operators",
          options: [
            optDelegatedResourceAccessRequestId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "reject",
          description: "Rejects a Delegated Resource Access Request",
          options: [
            optDelegatedResourceAccessRequestId,
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
          description:
            "Revokes an already approved Delegated Resource Access Request",
          options: [
            optDelegatedResourceAccessRequestId,
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
          name: "service-provider-interaction-request",
          description:
            "Posts query for additional information for the given Delegated Resource Access Request",
          options: [
            optDelegatedResourceAccessRequestId,
            {
              name: "--more-info-details",
              description: "Questions for operator to provide more information",
              args: { name: "more-info-details" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "delegation-subscription",
      description: "Details of the Delegation Subscription",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Delegation Subscription resource into a different compartment",
          options: [
            optDelegationSubscriptionId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment to contain the Delegation Subscription",
              args: { name: "compartment-id" },
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
          description: "Creates Delegation Subscription in Delegation Control",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the Delegation Subscription",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--service-provider-id",
              description: "Unique identifier of the Service Provider",
              args: { name: "service-provider-id" },
              isRequired: true,
            },
            {
              name: "--subscribed-service-type",
              description: "Subscribed Service Provider Service Type",
              args: {
                suggestions: [
                  "TROUBLESHOOTING",
                  "ASSISTED_PATCHING",
                  "MANAGED_SOFTWARE_UPDATES",
                ],
              },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the Delegation Subscription",
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
          description:
            "Deletes an Delegation Subscription in Delegation Control",
          options: [
            optDelegationSubscriptionId,
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
          description: "Gets a DelegationSubscription by identifier",
          options: [optDelegationSubscriptionId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the Delegation Subscriptions in Delegation Control",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Delegation Subscription resources whose lifecycleState matches the given Delegation",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return Delegation Subscription resources that match the given display name",
              args: { name: "display-name" },
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
            "Updates the existing DelegationSubscription for a given Delegation Subscription ID",
          options: [
            optDelegationSubscriptionId,
            {
              name: "--description",
              description: "Description of the Delegation Subscription",
              args: { name: "description" },
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
      description:
        "Oracle Delegate Access Control allows customers of Oracle Exadata Database Service on Cloud@Customer",
      subcommands: [
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
          name: "work-request-log-entry",
          description: "A log message from the execution of a work request",
          subcommands: [
            {
              name: "list-work-request-logs",
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
        {
          name: "work-request",
          description: "A description of workrequest status",
          subcommands: [
            {
              name: "get",
              description: "Gets details of the work request with the given ID",
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
                {
                  name: "--status",
                  description:
                    "A filter to return only work requests with the given OperationStatus",
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
                    "The ID of the resource affected by the work request",
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
    },
  ],
};

export default completionSpec;
