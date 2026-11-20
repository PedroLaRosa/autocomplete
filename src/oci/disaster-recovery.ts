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
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "WAITING",
      "CANCELING",
      "CANCELED",
      "SUCCEEDED",
      "FAILED",
      "NEEDS_ATTENTION",
    ],
  },
  isRepeatable: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
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
const optDrProtectionGroupId: Fig.Option = {
  name: "--dr-protection-group-id",
  description: "The OCID of the DR protection group",
  args: { name: "dr-protection-group-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "The display name of the DR plan execution",
  args: { name: "display-name" },
};
const optPlanId: Fig.Option = {
  name: "--plan-id",
  description: "The OCID of the DR plan",
  args: { name: "plan-id" },
  isRequired: true,
};
const optDrPlanExecutionId: Fig.Option = {
  name: "--dr-plan-execution-id",
  description: "The OCID of the DR plan execution",
  args: { name: "dr-plan-execution-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optDrPlanId: Fig.Option = {
  name: "--dr-plan-id",
  description: "The OCID of the DR plan",
  args: { name: "dr-plan-id" },
  isRequired: true,
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
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the given display name",
  args: { name: "display-name" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID (OCID) of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optActionType: Fig.Option = {
  name: "--action-type",
  description: "The type of control action",
  args: { suggestions: ["CANCEL", "PAUSE", "RESUME"] },
  isRequired: true,
};
const optAutomaticDrConfigurationId: Fig.Option = {
  name: "--automatic-dr-configuration-id",
  description: "The OCID of the Automatic DR configuration",
  args: { name: "automatic-dr-configuration-id" },
  isRequired: true,
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const optType: Fig.Option = {
  name: "--type",
  description: "The default type",
  args: { suggestions: ["DEFAULT"] },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "disaster-recovery",
  description: "Full Stack Disaster Recovery",
  subcommands: [
    {
      name: "dr-protection-group",
      description: "The details of a DR protection group",
      subcommands: [
        {
          name: "associate",
          description:
            "Create an association between the DR protection group identified by drProtectionGroupId and another DR",
          options: [
            {
              name: "--role",
              description: "The role of the DR protection group",
              args: { suggestions: ["PRIMARY", "STANDBY", "UNCONFIGURED"] },
              isRequired: true,
            },
            optDrProtectionGroupId,
            {
              name: "--peer-id",
              description: "The OCID of the peer DR protection group",
              args: { name: "peer-id" },
            },
            {
              name: "--peer-region",
              description: "The region of the peer DR protection group",
              args: { name: "peer-region" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Move the DR protection group identified by drProtectionGroupId to a different compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the DR protection group should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDrProtectionGroupId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a DR protection group",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the DR protection group",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the DR protection group",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--log-location",
              args: { name: "json" },
              isRequired: true,
            },
            { name: "--association", args: { name: "json" } },
            {
              name: "--members",
              description: "A list of DR protection group members",
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
          name: "delete",
          description:
            "Delete the DR protection group identified by drProtectionGroupId",
          options: [
            optDrProtectionGroupId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disassociate",
          description:
            "Delete the association between the DR protection group identified by drProtectionGroupId. and its peer DR",
          options: [
            optType,
            optDrProtectionGroupId,
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
            "Get the DR protection group identified by drProtectionGroupId",
          options: [optDrProtectionGroupId, optFromJson],
        },
        {
          name: "list",
          description:
            "Get a summary list of all DR protection groups in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID (OCID) of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only DR protection groups that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "INACTIVE",
                  "NEEDS_ATTENTION",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--dr-protection-group-id",
              description: "The OCID of the DR protection group",
              args: { name: "dr-protection-group-id" },
            },
            optDisplayName2,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--role",
              description: "The DR protection group Role",
              args: { suggestions: ["PRIMARY", "STANDBY", "UNCONFIGURED"] },
            },
            {
              name: "--lifecycle-sub-state",
              description:
                "A filter to return only DR protection groups that match the given lifecycle sub-state",
              args: {
                suggestions: [
                  "DR_DRILL_IN_PROGRESS",
                  "DR_PLAN_EXECUTION_IN_PROGRESS",
                  "AUTOMATIC_DR_PLAN_EXECUTION_IN_PROGRESS",
                ],
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
            "Update the DR protection group identified by drProtectionGroupId",
          options: [
            optDrProtectionGroupId,
            {
              name: "--display-name",
              description: "The display name of the DR protection group",
              args: { name: "display-name" },
            },
            { name: "--log-location", args: { name: "json" } },
            {
              name: "--members",
              description: "A list of DR protection group members",
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
        {
          name: "update-role",
          description:
            "Update the role of the DR protection group identified by drProtectionGroupId",
          options: [
            {
              name: "--role",
              description: "The new role of the DR protection group",
              args: { suggestions: ["PRIMARY", "STANDBY", "UNCONFIGURED"] },
              isRequired: true,
            },
            optDrProtectionGroupId,
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
      description: "An error associcated with a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Get a list of work request errors for the work request identified by workRequestId",
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
      name: "automatic-dr-configuration",
      description: "The details of Automatic DR configuration",
      subcommands: [
        {
          name: "create",
          description: "Create a Automatic DR configuration",
          options: [
            {
              name: "--display-name",
              description:
                "The display name of the Automatic DR configuration being created",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--dr-protection-group-id",
              description:
                "The OCID of the DR protection group to which this Automatic DR configuration belongs",
              args: { name: "dr-protection-group-id" },
              isRequired: true,
            },
            {
              name: "--members",
              description: "A list of members for Automatic DR configuration",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--default-switchover-dr-plan-id",
              description: "The unique id of a Switchover DR Plan",
              args: { name: "default-switchover-dr-plan-id" },
            },
            {
              name: "--default-failover-dr-plan-id",
              description: "The unique id of a Failover DR Plan",
              args: { name: "default-failover-dr-plan-id" },
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
            "Delete the automatic DR configuration identified by automaticDrConfigurationId",
          options: [
            optAutomaticDrConfigurationId,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "NEEDS_ATTENTION",
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
            "Get details for the Automatic DR configuration identified by automaticDrConfigurationId",
          options: [optAutomaticDrConfigurationId, optFromJson],
        },
        {
          name: "list",
          description:
            "Get a summary list of automatic DR configurations for a DR protection group",
          options: [
            optDrProtectionGroupId,
            {
              name: "--automatic-dr-configuration-id",
              description: "The OCID of the automatic DR configuration",
              args: { name: "automatic-dr-configuration-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Automatic DR configurations that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "NEEDS_ATTENTION",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--lifecycle-state-not-equal-to",
              description:
                "A filter to return only Automatic DR configurations that do not match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "NEEDS_ATTENTION",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName2,
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
            "Update the Automatic DR configuration identified by automaticDrConfigurationId",
          options: [
            optAutomaticDrConfigurationId,
            {
              name: "--display-name",
              description:
                "The display name of the Automatic DR configuration being updated",
              args: { name: "display-name" },
            },
            {
              name: "--members",
              description: "A list of members for Automatic DR configuration",
              args: { name: "json" },
            },
            {
              name: "--default-switchover-dr-plan-id",
              description: "The unique id of a Switchover DR Plan",
              args: { name: "default-switchover-dr-plan-id" },
            },
            {
              name: "--default-failover-dr-plan-id",
              description: "The unique id of a Failover DR Plan",
              args: { name: "default-failover-dr-plan-id" },
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
      name: "dr-plan-execution",
      description: "The details of a DR plan execution",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancel the DR plan execution identified by drPlanExecutionId",
          options: [
            optActionType,
            optDrPlanExecutionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Execute a DR plan for a DR protection group",
          options: [
            optPlanId,
            {
              name: "--execution-options",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
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
            "Delete the DR plan execution identified by drPlanExecutionId",
          options: [
            optDrPlanExecutionId,
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
            "Get details for the DR plan execution identified by drPlanExecutionId",
          options: [optDrPlanExecutionId, optFromJson],
        },
        {
          name: "ignore",
          description:
            "Ignore the failed group or step in DR plan execution identified by drPlanExecutionId and resume execution",
          options: [
            {
              name: "--group-id",
              description:
                "The unique id of the group to ignore as a whole, or the group containing the step to ignore",
              args: { name: "group-id" },
              isRequired: true,
            },
            optDrPlanExecutionId,
            {
              name: "--step-id",
              description: "The unique id of the step to ignore (optional)",
              args: { name: "step-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Get a summary list of all DR plan executions for a DR protection group",
          options: [
            optDrProtectionGroupId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only DR plan executions that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "CANCELING",
                  "CANCELED",
                  "SUCCEEDED",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                  "PAUSING",
                  "PAUSED",
                  "RESUMING",
                ],
              },
            },
            {
              name: "--dr-plan-execution-id",
              description: "The OCID of the DR plan execution",
              args: { name: "dr-plan-execution-id" },
            },
            optDisplayName2,
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
          name: "pause",
          description:
            "Pause the DR plan execution identified by drPlanExecutionId",
          options: [
            optActionType,
            optDrPlanExecutionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "resume",
          description:
            "Resume the DR plan execution identified by drPlanExecutionId",
          options: [
            optActionType,
            optDrPlanExecutionId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "retry",
          description:
            "Retry the failed group or step in DR plan execution identified by drPlanExecutionId and resume execution",
          options: [
            {
              name: "--group-id",
              description:
                "The unique id of the group to retry as a whole, or the group containing the step being retried",
              args: { name: "group-id" },
              isRequired: true,
            },
            optDrPlanExecutionId,
            {
              name: "--step-id",
              description: "The unique id of the step to retry (optional)",
              args: { name: "step-id" },
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
          description:
            "Update the DR plan execution identified by drPlanExecutionId",
          options: [
            optDrPlanExecutionId,
            {
              name: "--display-name",
              description:
                "The display name of the DR protection group to update",
              args: { name: "display-name" },
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
          name: "create-failover",
          description: "Execute a DR plan for a DR protection group",
          options: [
            optPlanId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--prechecks-enabled",
              description:
                "A flag indicating whether a precheck should be executed before the plan",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--warnings-ignored",
              description:
                "A flag indicating whether warnings should be ignored during the failover",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create-failover-precheck",
          description: "Execute a DR plan for a DR protection group",
          options: [
            optPlanId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--warnings-ignored",
              description:
                "A flag indicating whether warnings should be ignored during the failover",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create-switchover",
          description: "Execute a DR plan for a DR protection group",
          options: [
            optPlanId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--prechecks-enabled",
              description:
                "A flag indicating whether a precheck should be executed before the plan",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--warnings-ignored",
              description:
                "A flag indicating whether warnings should be ignored during the switchover",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create-switchover-precheck",
          description: "Execute a DR plan for a DR protection group",
          options: [
            optPlanId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--warnings-ignored",
              description:
                "A flag indicating whether warnings should be ignored during the switchover",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create-start-drill",
          description: "Execute a DR plan for a DR protection group",
          options: [
            optPlanId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--prechecks-enabled",
              description:
                "A flag indicating whether prechecks should be executed before the plan execution",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--warnings-ignored",
              description:
                "A flag indicating whether warnings should be ignored during the plan execution",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create-start-drill-precheck",
          description: "Execute a DR plan for a DR protection group",
          options: [
            optPlanId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--warnings-ignored",
              description:
                "A flag indicating whether warnings should be ignored during the precheck",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create-stop-drill",
          description: "Execute a DR plan for a DR protection group",
          options: [
            optPlanId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--prechecks-enabled",
              description:
                "A flag indicating whether prechecks should be executed before the plan execution",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--warnings-ignored",
              description:
                "A flag indicating whether warnings should be ignored during the plan execution",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create-stop-drill-precheck",
          description: "Execute a DR plan for a DR protection group",
          options: [
            optPlanId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--warnings-ignored",
              description:
                "A flag indicating whether warnings should be ignored during the precheck",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "Information on a work request",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel the work request identified by workRequestId",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description:
            "Get the status of the work request identified by workRequestId",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID (OCID) of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--work-request-id",
              description: "The ID (OCID) of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources whose lifecycleState matches the given OperationStatus",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "CANCELING",
                  "CANCELED",
                  "SUCCEEDED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--resource-id",
              description:
                "The ID (OCID) of the resource affected by the work request",
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
      name: "dr-plan",
      description: "The details of a DR plan",
      subcommands: [
        {
          name: "create",
          description: "Create a DR plan of the specified DR plan type",
          options: [
            {
              name: "--display-name",
              description: "The display name of the DR plan being created",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "The type of DR plan to be created",
              args: {
                suggestions: [
                  "SWITCHOVER",
                  "FAILOVER",
                  "START_DRILL",
                  "STOP_DRILL",
                ],
              },
              isRequired: true,
            },
            {
              name: "--dr-protection-group-id",
              description:
                "The OCID of the DR protection group to which this DR plan belongs",
              args: { name: "dr-protection-group-id" },
              isRequired: true,
            },
            {
              name: "--source-plan-id",
              description:
                "The OCID of the source DR plan that should be cloned",
              args: { name: "source-plan-id" },
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
          description: "Delete the DR plan identified by drPlanId",
          options: [
            optDrPlanId,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
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
          description: "Get details for the DR plan identified by drPlanId",
          options: [optDrPlanId, optFromJson],
        },
        {
          name: "list",
          description:
            "Get a summary list of all DR plans for a DR protection group",
          options: [
            optDrProtectionGroupId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only DR plans that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            {
              name: "--dr-plan-id",
              description: "The OCID of the DR plan",
              args: { name: "dr-plan-id" },
            },
            {
              name: "--dr-plan-type",
              description: "The DR plan type",
              args: {
                suggestions: [
                  "SWITCHOVER",
                  "FAILOVER",
                  "START_DRILL",
                  "STOP_DRILL",
                ],
              },
            },
            optDisplayName2,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--lifecycle-sub-state",
              description:
                "A filter to return only DR plans that match the given lifecycle sub-state",
              args: {
                suggestions: [
                  "NEEDS_REFRESH",
                  "NEEDS_VERIFICATION",
                  "REFRESHING",
                  "VERIFYING",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "refresh",
          description: "Refresh DR Plan identified by drPlanId",
          options: [
            optType,
            optDrPlanId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "refresh-dr-plan-refresh-dr-plan-default-details",
          description: "Refresh DR Plan identified by drPlanId",
          options: [
            optDrPlanId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update the DR plan identified by drPlanId",
          options: [
            optDrPlanId,
            {
              name: "--display-name",
              description: "The display name of the DR plan being updated",
              args: { name: "display-name" },
            },
            {
              name: "--plan-groups",
              description: "An ordered list of groups in a DR plan",
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
        {
          name: "verify",
          description: "Verify DR Plan identified by drPlanId",
          options: [
            optType,
            optDrPlanId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "verify-dr-plan-verify-dr-plan-default-details",
          description: "Verify DR Plan identified by drPlanId",
          options: [
            optDrPlanId,
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
      name: "work-request-logs",
      description: "A log message related to the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Get a list of logs for the work request identified by workRequestId",
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
