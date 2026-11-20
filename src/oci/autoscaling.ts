// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optAutoScalingConfigurationId: Fig.Option = {
  name: "--auto-scaling-configuration-id",
  description: "The OCID of the autoscaling configuration",
  args: { name: "auto-scaling-configuration-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optAutoScalingPolicyId: Fig.Option = {
  name: "--auto-scaling-policy-id",
  description: "The ID of the autoscaling policy",
  args: { name: "auto-scaling-policy-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "autoscaling",
  description: "Autoscaling",
  subcommands: [
    {
      name: "configuration",
      description:
        "An autoscaling configuration lets you dynamically scale the resources in a Compute instance pool",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an autoscaling configuration into a different compartment within the same tenancy",
          options: [
            optAutoScalingConfigurationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the autoscaling configuration to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an autoscaling configuration",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the autoscaling configuration",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            { name: "--policies", args: { name: "json" }, isRequired: true },
            { name: "--resource", args: { name: "json" }, isRequired: true },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            optDisplayName,
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--cool-down-in-seconds",
              description:
                "For threshold-based autoscaling policies, this value is the minimum period of time to wait between scaling",
              args: { name: "integer" },
            },
            {
              name: "--is-enabled",
              description: "Whether the autoscaling configuration is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an autoscaling configuration",
          options: [
            optAutoScalingConfigurationId,
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
          description:
            "Gets information about the specified autoscaling configuration",
          options: [optAutoScalingConfigurationId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists autoscaling configurations in the specifed compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the given display name exactly",
              args: { name: "display-name" },
            },
            {
              name: "--limit",
              description: "For list pagination",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description: "For list pagination",
              args: { name: "page" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending (ASC) or descending (DESC)",
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
          description:
            "Updates certain fields on the specified autoscaling configuration, such as the name, the cooldown period",
          options: [
            optAutoScalingConfigurationId,
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            optDisplayName,
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--is-enabled",
              description: "Whether the autoscaling configuration is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--cool-down-in-seconds", args: { name: "integer" } },
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "policy",
      description:
        "Autoscaling policies define the criteria that trigger autoscaling actions and the actions to take",
      subcommands: [
        {
          name: "create",
          description:
            "Creates an autoscaling policy for the specified autoscaling configuration",
          options: [
            optAutoScalingConfigurationId,
            {
              name: "--policy-type",
              description: "The type of autoscaling policy",
              args: { name: "policy-type" },
              isRequired: true,
            },
            {
              name: "--capacity",
              description:
                "The capacity requirements of the autoscaling policy",
              args: { name: "json" },
            },
            optDisplayName,
            {
              name: "--is-enabled",
              description: "Whether the autoscaling policy is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--execution-schedule",
              args: { name: "execution-schedule" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes an autoscaling policy for the specified autoscaling configuration",
          options: [
            optAutoScalingConfigurationId,
            optAutoScalingPolicyId,
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
          description:
            "Gets information about the specified autoscaling policy in the specified autoscaling configuration",
          options: [
            optAutoScalingConfigurationId,
            optAutoScalingPolicyId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates an autoscaling policy in the specified autoscaling configuration",
          options: [
            optAutoScalingConfigurationId,
            optAutoScalingPolicyId,
            {
              name: "--policy-type",
              description: "Indicates the type of autoscaling policy",
              args: { name: "policy-type" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--capacity",
              description:
                "The capacity requirements of the autoscaling policy",
              args: { name: "json" },
            },
            {
              name: "--is-enabled",
              description: "Whether the autoscaling policy is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            {
              name: "--execution-schedule",
              args: { name: "execution-schedule" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
