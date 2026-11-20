// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optRuleId: Fig.Option = {
  name: "--rule-id",
  description: "The OCID of this rule",
  args: { name: "rule-id" },
  isRequired: true,
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
const optWaitForState: Fig.Option = {
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
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const completionSpec: Fig.Spec = {
  name: "events",
  description: "Events",
  subcommands: [
    {
      name: "rule",
      description: "The configuration details of an Events rule",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a rule into a different compartment within the same tenancy",
          options: [
            optRuleId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new rule",
          options: [
            {
              name: "--display-name",
              description: "A string that describes the rule",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--is-enabled",
              description: "Whether or not this rule is currently enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--condition",
              description:
                "A filter that specifies the event that will trigger actions associated with this rule",
              args: { name: "condition" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which this rule belongs",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            { name: "--actions", args: { name: "json" }, isRequired: true },
            {
              name: "--description",
              description: "A string that describes the details of the rule",
              args: { name: "description" },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a rule",
          options: [
            optRuleId,
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
          description: "Retrieves a rule",
          options: [optRuleId, optFromJson],
        },
        {
          name: "list",
          description: "Lists rules for this compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which this rule belongs",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--limit",
              description: "The maximum number of items to return",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description: "For list pagination",
              args: { name: "page" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only rules that match the lifecycle state in this parameter",
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
            {
              name: "--display-name",
              description:
                "A filter to return only rules with descriptions that match the displayName string in this parameter",
              args: { name: "display-name" },
            },
            {
              name: "--sort-by",
              description:
                "Specifies the attribute with which to sort the rules",
              args: { suggestions: ["TIME_CREATED", "ID", "DISPLAY_NAME"] },
            },
            {
              name: "--sort-order",
              description: "Specifies sort order",
              args: { suggestions: ["ASC", "DESC"] },
            },
            { name: "--all", description: "Fetches all pages of results" },
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a rule",
          options: [
            optRuleId,
            {
              name: "--display-name",
              description: "A string that describes the rule",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A string that describes the details of the rule",
              args: { name: "description" },
            },
            {
              name: "--is-enabled",
              description: "Whether or not this rule is currently enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--condition",
              description:
                "A filter that specifies the event that will trigger actions associated with this rule",
              args: { name: "condition" },
            },
            { name: "--actions", args: { name: "json" } },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
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
      ],
    },
  ],
};

export default completionSpec;
