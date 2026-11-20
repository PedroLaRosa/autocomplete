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
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
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
const optRemediationRunId: Fig.Option = {
  name: "--remediation-run-id",
  description: "Unique Remediation Run identifier path parameter",
  args: { name: "remediation-run-id" },
  isRequired: true,
};
const optRemediationRecipeId: Fig.Option = {
  name: "--remediation-recipe-id",
  description:
    "The Oracle Cloud Identifier (OCID) of a Remediation Recipe, as a URL path parameter",
  args: { name: "remediation-recipe-id" },
  isRequired: true,
};
const optVulnerabilityAuditId: Fig.Option = {
  name: "--vulnerability-audit-id",
  description: "Unique Vulnerability Audit identifier path parameter",
  args: { name: "vulnerability-audit-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["ACTIVE", "CREATING", "DELETED", "DELETING", "FAILED"],
  },
  isRepeatable: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "A filter to return only resources that belong to the specified compartment identifier",
  args: { name: "compartment-id" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "The name of the vulnerability audit",
  args: { name: "display-name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optApplicationDependencies: Fig.Option = {
  name: "--application-dependencies",
  description: "List of application dependencies (without vulnerabilities)",
  args: { name: "json" },
};
const optBuildType: Fig.Option = {
  name: "--build-type",
  description:
    "The type of the build tool is restricted to only two values MAVEN or UNSET",
  args: { name: "build-type" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description:
    "The compartment Oracle Cloud identifier (OCID) of the vulnerability audit",
  args: { name: "compartment-id" },
};
const optConfiguration: Fig.Option = {
  name: "--configuration",
  args: { name: "json" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optId: Fig.Option = {
  name: "--id",
  description:
    "A filter to return only resources that match the specified identifier",
  args: { name: "id" },
};
const optKnowledgeBaseId: Fig.Option = {
  name: "--knowledge-base-id",
  description:
    "The Oracle Cloud Identifier (OCID) of a Knowledge Base, as a URL path parameter",
  args: { name: "knowledge-base-id" },
  isRequired: true,
};
const optKnowledgeBaseId2: Fig.Option = {
  name: "--knowledge-base-id",
  description: "The Oracle Cloud identifier (OCID) of the knowledge base",
  args: { name: "knowledge-base-id" },
  isRequired: true,
};
const optUsageData: Fig.Option = {
  name: "--usage-data",
  args: { name: "json" },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "CANCELED",
      "CANCELING",
      "FAILED",
      "IN_PROGRESS",
      "SUCCEEDED",
      "DELETING",
      "DELETED",
    ],
  },
  isRepeatable: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The Oracle Cloud Identifier (OCID) of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description:
    "The compartment Oracle Cloud Identifier (OCID) to which the resource must be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field used to sort WorkRequests",
  args: { suggestions: ["timeAccepted"] },
};
const completionSpec: Fig.Spec = {
  name: "adm",
  description: "Application Dependency Management",
  subcommands: [
    {
      name: "remediation-recipe",
      description:
        "An Application Dependency Management (ADM) remediation recipe contains the basic configuration and",
      subcommands: [
        {
          name: "activate",
          description: "Activates the specified Remediation Recipe",
          options: [
            optRemediationRecipeId,
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
            "Moves a Remediation Recipe from one compartment to another",
          options: [
            optRemediationRecipeId,
            optCompartmentId3,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Remediation Recipe",
          options: [
            {
              name: "--compartment-id",
              description:
                "The compartment Oracle Cloud Identifier (OCID) of the remediation recipe",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--scm-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--verify-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--detect-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--network-configuration",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--knowledge-base-id",
              description:
                "The Oracle Cloud Identifier (OCID) of the knowledge base",
              args: { name: "knowledge-base-id" },
              isRequired: true,
            },
            {
              name: "--is-run-triggered-on-kb-change",
              description:
                "Boolean indicating if a run should be automatically triggered once the knowledge base is updated",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the remediation recipe",
              args: { name: "display-name" },
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
          name: "deactivate",
          description: "Deactivates the specified Remediation Recipe",
          options: [
            optRemediationRecipeId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified Remediation Recipe",
          options: [
            optRemediationRecipeId,
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
          description: "Returns the details of the specified RemediationRecipe",
          options: [optRemediationRecipeId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of Remediation Recipes based on the specified query parameters",
          options: [
            optId,
            {
              name: "--sort-by",
              description: "The field used to sort Remediation Recipes",
              args: {
                suggestions: [
                  "DISPLAY_NAME",
                  "LIFECYCLE_STATE",
                  "TIME_CREATED",
                  "TIME_UPDATED",
                  "TYPE",
                ],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Remediation Recipes that match the specified lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "INACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optSortOrder,
            optDisplayName2,
            optLimit,
            optPage,
            optCompartmentId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified Remediation Recipe",
          options: [
            optRemediationRecipeId,
            {
              name: "--display-name",
              description: "The name of the remediation recipe",
              args: { name: "display-name" },
            },
            { name: "--scm-configuration", args: { name: "json" } },
            { name: "--verify-configuration", args: { name: "json" } },
            { name: "--detect-configuration", args: { name: "json" } },
            { name: "--network-configuration", args: { name: "json" } },
            {
              name: "--knowledge-base-id",
              description:
                "The Oracle Cloud Identifier (OCID) of the knowledge base",
              args: { name: "knowledge-base-id" },
            },
            {
              name: "--is-run-triggered-on-kb-change",
              description:
                "Boolean indicating if a run should be automatically triggered once the knowledge base is updated",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
      name: "remediation-run-stage",
      description: "A remediation run stage is one step of an remediation run",
      subcommands: [
        {
          name: "get-stage",
          description:
            "Returns the details of the specified Remediation Run Stage",
          options: [
            optRemediationRunId,
            {
              name: "--stage-type",
              description:
                "The type of Remediation Run Stage, as a URL path parameter",
              args: { suggestions: ["DETECT", "RECOMMEND", "VERIFY", "APPLY"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-stages",
          description:
            "Returns a list of Remediation Run Stages based on the specified query parameters and Remediation Run",
          options: [
            optRemediationRunId,
            {
              name: "--type",
              description:
                "A filter to return only Stages that match the specified type",
              args: { suggestions: ["DETECT", "RECOMMEND", "VERIFY", "APPLY"] },
            },
            {
              name: "--status",
              description:
                "A filter to return only Stages that match the specified status",
              args: {
                suggestions: [
                  "CREATED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "FAILED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field used to sort Stages",
              args: {
                suggestions: [
                  "status",
                  "timeCreated",
                  "timeFinished",
                  "timeStarted",
                  "type",
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
      name: "remediation-run",
      description:
        "A remediation run represents an execution of a Remediation Recipe to detect and fix vulnerabilities based",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels the specified remediation run",
          options: [
            optRemediationRunId,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves a remediation run from one compartment to another",
          options: [
            optRemediationRunId,
            optCompartmentId3,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new remediation run",
          options: [
            {
              name: "--remediation-recipe-id",
              description:
                "The Oracle Cloud identifier (OCID) of the Remediation Recipe",
              args: { name: "remediation-recipe-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the remediation run",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified remediation run",
          options: [
            optRemediationRunId,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Returns the details of the specified remediation run",
          options: [optRemediationRunId, optFromJson],
        },
        {
          name: "list-application-dependency-recommendations",
          description:
            "Returns a list of application dependency with their associated recommendations",
          options: [
            optRemediationRunId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--gav",
              description:
                "A filter to return only resources that match the entire GAV (Group Artifact Version) identifier given",
              args: { name: "gav" },
            },
            {
              name: "--purl",
              description:
                "A filter to return only resources that match the entire purl given",
              args: { name: "purl" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["gav", "purl", "nodeId", "dfs", "bfs"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of remediation runs contained by a compartment",
          options: [
            optId,
            {
              name: "--remediation-recipe-id",
              description:
                "A filter to return only resources that match the specified Remediation Recipe identifier",
              args: { name: "remediation-recipe-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Remediation Runs that match the specified lifecycleState",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "CANCELED",
                  "CANCELING",
                  "FAILED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optDisplayName2,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field used to sort Remediation Runs",
              args: {
                suggestions: [
                  "timeCreated",
                  "timeFinished",
                  "timeStarted",
                  "displayName",
                  "lifecycleState",
                  "currentStageType",
                ],
              },
            },
            optCompartmentId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates by identifier one or more attributes of the specified remediation run",
          options: [
            optRemediationRunId,
            {
              name: "--display-name",
              description: "The name of the remediation run",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState3,
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
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "knowledge-base",
      description:
        "A knowledge base is a component of Application Dependency Management",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a Knowledge Base from one compartment to another",
          options: [
            optKnowledgeBaseId,
            optCompartmentId3,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Knowledge Base",
          options: [
            {
              name: "--compartment-id",
              description:
                "The compartment Oracle Cloud Identifier (OCID) of the knowledge base",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The name of the knowledge base",
              args: { name: "display-name" },
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
          description: "Deletes the specified Knowledge Base",
          options: [
            optKnowledgeBaseId,
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
          description: "Returns the details of the specified Knowledge Base",
          options: [optKnowledgeBaseId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of KnowledgeBases based on the specified query parameters",
          options: [
            optId,
            {
              name: "--sort-by",
              description: "The field used to sort Knowledge Bases",
              args: {
                suggestions: [
                  "DISPLAY_NAME",
                  "LIFECYCLE_STATE",
                  "TIME_CREATED",
                  "TIME_UPDATED",
                ],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Knowledge Bases that match the specified lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optSortOrder,
            optDisplayName2,
            optLimit,
            optPage,
            optCompartmentId,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates one or more attributes of the specified Knowledge Base",
          options: [
            optKnowledgeBaseId,
            {
              name: "--display-name",
              description: "The name of the knowledge base",
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
      ],
    },
    {
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortBy,
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
          description: "Cancel work request with the given ID",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
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
              description: "The identifier of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources that match the specified OperationStatus",
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
                "The Oracle Cloud Identifier (OCID) of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
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
      name: "vulnerability-audit",
      description:
        "A vulnerability audit associates the application dependencies of a project with their associated",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Vulnerability Audit from one compartment to another",
          options: [
            optVulnerabilityAuditId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the resource must be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new Vulnerability Audit by providing a tree of Application Dependencies",
          options: [
            optKnowledgeBaseId2,
            optCompartmentId2,
            optApplicationDependencies,
            optBuildType,
            optConfiguration,
            optUsageData,
            optDisplayName,
            { name: "--source", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optWaitForState2,
            optFromJson,
          ],
        },
        {
          name: "create-vulnerability-audit-unknown-source-vulnerability-audit-source",
          description:
            "Creates a new Vulnerability Audit by providing a tree of Application Dependencies",
          options: [
            optKnowledgeBaseId2,
            optCompartmentId2,
            optApplicationDependencies,
            optBuildType,
            optConfiguration,
            optUsageData,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optWaitForState2,
            optFromJson,
          ],
        },
        {
          name: "create-vulnerability-audit-oci-resource-vulnerability-audit-source",
          description:
            "Creates a new Vulnerability Audit by providing a tree of Application Dependencies",
          options: [
            optKnowledgeBaseId2,
            {
              name: "--source-oci-resource-id",
              description:
                "The Oracle Cloud identifier (OCID) of the OCI resource that triggered the vulnerability audit",
              args: { name: "source-oci-resource-id" },
              isRequired: true,
            },
            optCompartmentId2,
            optApplicationDependencies,
            optBuildType,
            optConfiguration,
            optUsageData,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optWaitForState2,
            optFromJson,
          ],
        },
        {
          name: "create-vulnerability-audit-external-resource-vulnerability-audit-source",
          description:
            "Creates a new Vulnerability Audit by providing a tree of Application Dependencies",
          options: [
            optKnowledgeBaseId2,
            optCompartmentId2,
            optApplicationDependencies,
            optBuildType,
            optConfiguration,
            optUsageData,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--source-description",
              description: "Description of the external resource source",
              args: { name: "source-description" },
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optWaitForState2,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified Vulnerability Audit",
          options: [
            optVulnerabilityAuditId,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Returns the details of the specified Vulnerability Audit",
          options: [optVulnerabilityAuditId, optFromJson],
        },
        {
          name: "list-application-dependency-vulnerabilities",
          description:
            "Returns a list of Application Dependencies with their associated vulnerabilities",
          options: [
            optVulnerabilityAuditId,
            {
              name: "--vulnerability-id",
              description:
                "A filter to return only Vulnerability Audits that match the specified id",
              args: { name: "vulnerability-id" },
            },
            {
              name: "--cvss-v3-greater-than-or-equal",
              description:
                "A filter that returns only Vulnerabilities that have a Common Vulnerability Scoring System Version 3",
              args: { name: "number" },
            },
            {
              name: "--cvss-v2-greater-than-or-equal",
              description:
                "A filter that returns only Vulnerabilities that have a Common Vulnerability Scoring System Version 2",
              args: { name: "number" },
            },
            {
              name: "--severity-greater-than-or-equal",
              description:
                "A filter that returns only Vulnerabilities that have a severity greater than or equal to the specified value",
              args: {
                suggestions: ["NONE", "LOW", "MEDIUM", "HIGH", "CRITICAL"],
              },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["gav", "purl", "nodeId", "dfs", "bfs"] },
            },
            {
              name: "--root-node-id",
              description:
                "A filter to override the top level root identifier with the new given value",
              args: { name: "root-node-id" },
            },
            {
              name: "--depth",
              description:
                "A filter to limit depth of the application dependencies tree traversal",
              args: { name: "integer" },
            },
            {
              name: "--gav",
              description:
                "A filter to return only resources that match the entire GAV (Group Artifact Version) identifier given",
              args: { name: "gav" },
            },
            {
              name: "--purl",
              description:
                "A filter to return only resources that match the entire purl given",
              args: { name: "purl" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-vulnerabilities",
          description: "Returns a list of vulnerability details for an audit",
          options: [
            optVulnerabilityAuditId,
            {
              name: "--is-direct-vulnerability",
              description:
                "A filter when set returns only vulnerabilities that are immediately(directly) affecting any artifact",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of Vulnerability Audits based on the specified query parameters",
          options: [
            optId,
            optCompartmentId,
            {
              name: "--knowledge-base-id",
              description:
                "A filter to return only Audits that were created against the specified knowledge base",
              args: { name: "knowledge-base-id" },
            },
            {
              name: "--is-success",
              description:
                "A filter to return only successful or failed Vulnerability Audits",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Vulnerability Audits that match the specified lifecycleState",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETED",
                  "DELETING",
                  "FAILED",
                ],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field used to sort Vulnerability Audits",
              args: {
                suggestions: [
                  "maxObservedCvssV2Score",
                  "maxObservedCvssV3Score",
                  "maxObservedSeverity",
                  "timeCreated",
                  "vulnerableArtifactsCount",
                  "maxObservedCvssV2ScoreWithIgnored",
                  "maxObservedCvssV3ScoreWithIgnored",
                  "maxObservedSeverityWithIgnored",
                  "vulnerableArtifactsCountWithIgnored",
                  "displayName",
                ],
              },
            },
            optDisplayName2,
            {
              name: "--time-created-greater-than-or-equal-to",
              description:
                "A filter to return only Vulnerability Audits with timeCreated greater or equal to the specified value",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-less-than-or-equal-to",
              description:
                "A filter to return only Vulnerability Audits with timeCreated less or equal to the specified value",
              args: { name: "datetime" },
            },
            {
              name: "--max-observed-severity-greater-than-or-equal-to",
              description:
                "A filter that returns only Vulnerability Audits that have a maximum observed Severity greater than or equal",
              args: {
                suggestions: ["NONE", "LOW", "MEDIUM", "HIGH", "CRITICAL"],
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
            "Updates one or more attributes of the specified Vulnerability Audit",
          options: [
            optVulnerabilityAuditId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState2,
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
