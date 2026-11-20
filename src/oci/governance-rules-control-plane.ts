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
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Description of the governance rule",
  args: { name: "description" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optGovernanceRuleId: Fig.Option = {
  name: "--governance-rule-id",
  description: "Unique governance rule identifier",
  args: { name: "governance-rule-id" },
  isRequired: true,
};
const optRelatedResourceId: Fig.Option = {
  name: "--related-resource-id",
  description:
    "The Oracle ID (OCID) of the resource, which was used as a template to create this governance rule",
  args: { name: "related-resource-id" },
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
const optPage: Fig.Option = {
  name: "--page",
  description:
    "A token representing the position at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description:
    "The Oracle ID (OCID) of the root compartment containing the governance rule",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCreationOption: Fig.Option = {
  name: "--creation-option",
  description:
    "The type of option used to create the governance rule, could be one of TEMPLATE or CLONE",
  args: { suggestions: ["TEMPLATE", "CLONE"] },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "Display name of the governance rule",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "Display name of the governance rule",
  args: { name: "display-name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optType: Fig.Option = {
  name: "--type",
  description:
    "Type of the governance rule, can be one of QUOTA, TAG, ALLOWED_REGIONS",
  args: { suggestions: ["QUOTA", "TAG", "ALLOWED_REGIONS"] },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const completionSpec: Fig.Spec = {
  name: "governance-rules-control-plane",
  description: "GovernanceRulesControlPlane",
  subcommands: [
    {
      name: "governance-rule",
      description: "A description of the GovernanceRulesControlPlane CLI",
      subcommands: [
        {
          name: "enforced-governance-rule",
          description:
            "Represents the governance rule shown to the child which is a subset of governance rule resource in parent",
          subcommands: [
            {
              name: "get",
              description:
                "Get the specified enforced governance rule's information",
              options: [
                {
                  name: "--enforced-governance-rule-id",
                  description: "Unique enforced governance rule identifier",
                  args: { name: "enforced-governance-rule-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "list",
              description: "List enforced governance rules",
              options: [
                optCompartmentId,
                {
                  name: "--enforced-governance-rule-id",
                  description: "Unique enforced governance rule identifier",
                  args: { name: "enforced-governance-rule-id" },
                },
                {
                  name: "--governance-rule-type",
                  description:
                    "A filter to return only resources that match the type given",
                  args: { suggestions: ["QUOTA", "TAG", "ALLOWED_REGIONS"] },
                },
                {
                  name: "--display-name",
                  description:
                    "A filter to return only resources that match the entire name given",
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
          ],
        },
        {
          name: "tenancy-attachment",
          description:
            "Tenancy attachment associates a tenancy to a governance rule via an inclusion criterion",
          subcommands: [
            {
              name: "get",
              description: "Get the specified tenancy attachment's information",
              options: [
                {
                  name: "--tenancy-attachment-id",
                  description: "Unique tenancy attachment identifier",
                  args: { name: "tenancy-attachment-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "list",
              description: "List tenancy attachments",
              options: [
                optCompartmentId,
                {
                  name: "--tenancy-attachment-id",
                  description: "Unique tenancy attachment identifier",
                  args: { name: "tenancy-attachment-id" },
                },
                {
                  name: "--governance-rule-id",
                  description: "Unique governance rule identifier",
                  args: { name: "governance-rule-id" },
                },
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources when their lifecycle state matches the given lifecycle state",
                  args: {
                    suggestions: [
                      "CREATING",
                      "ACTIVE",
                      "UPDATING",
                      "NEEDS_ATTENTION",
                      "DELETING",
                      "DELETED",
                    ],
                  },
                },
                {
                  name: "--child-tenancy-id",
                  description:
                    "A filter to return only governance rules that match the given tenancy id",
                  args: { name: "child-tenancy-id" },
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
              name: "retry",
              description:
                "Retry governance rule application for the specified tenancy attachment id",
              options: [
                {
                  name: "--tenancy-attachment-id",
                  description: "Unique tenancy attachment identifier",
                  args: { name: "tenancy-attachment-id" },
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
          name: "governance-rule",
          description:
            "Represents a rule in parent tenancy which governs resources in child tenancies",
          subcommands: [
            {
              name: "create",
              description:
                "Create governance rule in the root compartment only",
              options: [
                optCompartmentId2,
                optDisplayName,
                optType,
                optCreationOption,
                {
                  name: "--template",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDescription,
                optRelatedResourceId,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-governance-rule-tag-template",
              description:
                "Create governance rule in the root compartment only",
              options: [
                optCompartmentId2,
                optDisplayName,
                optType,
                optCreationOption,
                {
                  name: "--template-name",
                  description: "The name of the tag namespace",
                  args: { name: "template-name" },
                  isRequired: true,
                },
                optDescription,
                optRelatedResourceId,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--template-description",
                  description: "Description of the tag namespace",
                  args: { name: "template-description" },
                },
                {
                  name: "--template-tags",
                  description: "Represents an array of tags for tag namespace",
                  args: { name: "json" },
                },
                {
                  name: "--template-tag-defaults",
                  description:
                    "This option is a JSON list with items of type TagDefault",
                  args: { name: "json" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-governance-rule-quota-template",
              description:
                "Create governance rule in the root compartment only",
              options: [
                optCompartmentId2,
                optDisplayName,
                optType,
                optCreationOption,
                {
                  name: "--template-display-name",
                  description: "Display name of the quota resource",
                  args: { name: "template-display-name" },
                  isRequired: true,
                },
                {
                  name: "--template-statements",
                  description: "List of quota statements",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDescription,
                optRelatedResourceId,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--template-description",
                  description: "Description of the quota resource",
                  args: { name: "template-description" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-governance-rule-allowed-regions-template",
              description:
                "Create governance rule in the root compartment only",
              options: [
                optCompartmentId2,
                optDisplayName,
                optType,
                optCreationOption,
                {
                  name: "--template-display-name",
                  description: "Display name of the allowed region resource",
                  args: { name: "template-display-name" },
                  isRequired: true,
                },
                {
                  name: "--template-regions",
                  description: "List of allowed regions",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDescription,
                optRelatedResourceId,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--template-description",
                  description: "Description of the allowed region resource",
                  args: { name: "template-description" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Delete the specified governance rule",
              options: [
                optGovernanceRuleId,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Get the specified governance rule's information",
              options: [optGovernanceRuleId, optFromJson],
            },
            {
              name: "list",
              description: "List governance rules",
              options: [
                optCompartmentId,
                {
                  name: "--governance-rule-id",
                  description: "Unique governance rule identifier",
                  args: { name: "governance-rule-id" },
                },
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources whose lifecycle state matches the given lifecycle state",
                  args: { suggestions: ["ACTIVE", "DELETED"] },
                },
                {
                  name: "--display-name",
                  description:
                    "A filter to return only resources that match the entire name given",
                  args: { name: "display-name" },
                },
                {
                  name: "--governance-rule-type",
                  description:
                    "A filter to return only resources that match the type given",
                  args: { suggestions: ["QUOTA", "TAG", "ALLOWED_REGIONS"] },
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
              name: "retry",
              description:
                "Retry the creation of the specified governance rule",
              options: [
                optGovernanceRuleId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Update the specified governance rule",
              options: [
                optGovernanceRuleId,
                optDisplayName2,
                optDescription,
                { name: "--template", args: { name: "json" } },
                optRelatedResourceId,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-governance-rule-tag-template",
              description: "Update the specified governance rule",
              options: [
                optGovernanceRuleId,
                {
                  name: "--template-name",
                  description: "The name of the tag namespace",
                  args: { name: "template-name" },
                  isRequired: true,
                },
                optDisplayName2,
                optDescription,
                optRelatedResourceId,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                {
                  name: "--template-description",
                  description: "Description of the tag namespace",
                  args: { name: "template-description" },
                },
                {
                  name: "--template-tags",
                  description: "Represents an array of tags for tag namespace",
                  args: { name: "json" },
                },
                {
                  name: "--template-tag-defaults",
                  description:
                    "This option is a JSON list with items of type TagDefault",
                  args: { name: "json" },
                },
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-governance-rule-quota-template",
              description: "Update the specified governance rule",
              options: [
                optGovernanceRuleId,
                {
                  name: "--template-display-name",
                  description: "Display name of the quota resource",
                  args: { name: "template-display-name" },
                  isRequired: true,
                },
                {
                  name: "--template-statements",
                  description: "List of quota statements",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDisplayName2,
                optDescription,
                optRelatedResourceId,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                {
                  name: "--template-description",
                  description: "Description of the quota resource",
                  args: { name: "template-description" },
                },
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-governance-rule-allowed-regions-template",
              description: "Update the specified governance rule",
              options: [
                optGovernanceRuleId,
                {
                  name: "--template-display-name",
                  description: "Display name of the allowed region resource",
                  args: { name: "template-display-name" },
                  isRequired: true,
                },
                {
                  name: "--template-regions",
                  description: "List of allowed regions",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDisplayName2,
                optDescription,
                optRelatedResourceId,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                {
                  name: "--template-description",
                  description: "Description of the allowed region resource",
                  args: { name: "template-description" },
                },
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
          name: "inclusion-criterion",
          description:
            "Represents the criterion for the inclusion of the child tenancies under a governance rule",
          subcommands: [
            {
              name: "create",
              description:
                "Create inclusion criterion of type tenancy or tag for the governance rule",
              options: [
                {
                  name: "--governance-rule-id",
                  description: "The Oracle ID (OCID) of the governance rule",
                  args: { name: "governance-rule-id" },
                  isRequired: true,
                },
                {
                  name: "--type",
                  description:
                    "Type of inclusion criterion - TENANCY, ALL or TAG",
                  args: { name: "type" },
                  isRequired: true,
                },
                { name: "--association", args: { name: "json" } },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-inclusion-criterion-tenancy-association",
              description:
                "Create inclusion criterion of type tenancy or tag for the governance rule",
              options: [
                {
                  name: "--governance-rule-id",
                  description: "The Oracle ID (OCID) of the governance rule",
                  args: { name: "governance-rule-id" },
                  isRequired: true,
                },
                {
                  name: "--type",
                  description:
                    "Type of inclusion criterion - TENANCY, ALL or TAG",
                  args: { name: "type" },
                  isRequired: true,
                },
                {
                  name: "--association-tenancy-id",
                  description:
                    "The Oracle ID (OCID) of the tenancy to which the governance rule will be applied as part of this tenancy",
                  args: { name: "association-tenancy-id" },
                  isRequired: true,
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Delete the specified inclusion criterion",
              options: [
                {
                  name: "--inclusion-criterion-id",
                  description: "Unique inclusion criterion identifier",
                  args: { name: "inclusion-criterion-id" },
                  isRequired: true,
                },
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "Get the specified inclusion criterion's information",
              options: [
                {
                  name: "--inclusion-criterion-id",
                  description: "Unique inclusion criterion identifier",
                  args: { name: "inclusion-criterion-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "list-inclusion-criteria",
              description:
                "List inclusion criteria associated with a governance rule",
              options: [
                optGovernanceRuleId,
                {
                  name: "--inclusion-criterion-id",
                  description: "Unique inclusion criterion identifier",
                  args: { name: "inclusion-criterion-id" },
                },
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources when their lifecycle state matches the given lifecycle state",
                  args: { suggestions: ["ACTIVE", "DELETED"] },
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
      ],
    },
    {
      name: "work-request",
      description: "A description of the GovernanceRulesControlPlane CLI",
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
              name: "cancel",
              description: "Cancels the work request with the given ID",
              options: [optWorkRequestId, optIfMatch, optForce2, optFromJson],
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
                optCompartmentId,
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
      ],
    },
  ],
};

export default completionSpec;
