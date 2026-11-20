// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optGovernanceInstanceId: Fig.Option = {
  name: "--governance-instance-id",
  description: "The OCID of the GovernanceInstance",
  args: { name: "governance-instance-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which resources are listed",
  args: { name: "compartment-id" },
  isRequired: true,
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
      "DELETING",
      "DELETED",
      "NEEDS_ATTENTION",
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
  name: "access-governance-cp",
  description: "Access Governance",
  subcommands: [
    {
      name: "governance-instance-collection",
      description: "Results of a GovernanceInstance search",
      subcommands: [
        {
          name: "list-governance-instances",
          description: "Returns a list of Governance Instances",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description: "The lifecycle state to filter on",
              args: { name: "lifecycle-state" },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "The OCID of the GovernanceInstance",
              args: { name: "id" },
            },
            {
              name: "--limit",
              description: "The maximum number of items to return",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                "A token representing the position at which to start retrieving results",
              args: { name: "page" },
            },
            {
              name: "--sort-order",
              description: "The sort order to use, either 'ASC' or 'DESC'",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "timeCreated",
                  "displayName",
                  "timeUpdated",
                  "lifecycleState",
                ],
              },
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
      ],
    },
    {
      name: "governance-instance-configuration",
      description: "The tenancy-wide configuration for GovernanceInstances",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the tenancy-wide configuration for GovernanceInstances",
          options: [optCompartmentId, optFromJson],
        },
      ],
    },
    {
      name: "governance-instance",
      description: "The details of a GovenanceInstance",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a GovernanceInstance resource from one compartment identifier to another",
          options: [
            optGovernanceInstanceId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the GovernanceInstance resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new GovernanceInstance",
          options: [
            {
              name: "--display-name",
              description: "The name for the GovernanceInstance",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--license-type",
              description: "The licenseType being used",
              args: {
                suggestions: [
                  "NEW_LICENSE",
                  "BRING_YOUR_OWN_LICENSE",
                  "AG_ORACLE_WORKLOADS",
                  "AG_OCI",
                ],
              },
              isRequired: true,
            },
            {
              name: "--tenancy-namespace",
              description: "The namespace for tenancy object storage",
              args: { name: "tenancy-namespace" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the GovernanceInstance resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--idcs-access-token",
              description:
                "IDCS access token identifying a stripe and service administrator user",
              args: { name: "idcs-access-token" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the GovernanceInstance",
              args: { name: "description" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--system-tags",
              description: "Usage of system tag keys",
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
          description: "Deletes an existing GovernanceInstance",
          options: [
            optGovernanceInstanceId,
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
          description: "Gets a GovernanceInstance by OCID",
          options: [optGovernanceInstanceId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the GovernanceInstance",
          options: [
            optGovernanceInstanceId,
            {
              name: "--display-name",
              description: "The name for the GovernanceInstance",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description of the GovernanceInstance",
              args: { name: "description" },
            },
            {
              name: "--license-type",
              description: "The licenseType being used",
              args: {
                suggestions: [
                  "NEW_LICENSE",
                  "BRING_YOUR_OWN_LICENSE",
                  "AG_ORACLE_WORKLOADS",
                  "AG_OCI",
                ],
              },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
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
        {
          name: "update-governance-instance-configuration",
          description:
            "Updates the tenancy-wide configuration for GovernanceInstances",
          options: [
            optCompartmentId,
            { name: "--sender-info", args: { name: "json" } },
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
  ],
};

export default completionSpec;
