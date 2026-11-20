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
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
      "WAITING",
      "NEEDS_ATTENTION",
    ],
  },
  isRepeatable: true,
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
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optRepositoryId: Fig.Option = {
  name: "--repository-id",
  description: "Unique repository identifier",
  args: { name: "repository-id" },
  isRequired: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Optional description about the deployment stage",
  args: { name: "description" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "Deployment stage display name, which can be renamed and is not necessarily unique",
  args: { name: "display-name" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
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
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use",
  args: { suggestions: ["ASC", "DESC"] },
};
const optPullRequestId: Fig.Option = {
  name: "--pull-request-id",
  description: "Unique PullRequest identifier",
  args: { name: "pull-request-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "Optional description about the trigger",
  args: { name: "description" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "Trigger display name",
  args: { name: "display-name" },
};
const optPipelineId: Fig.Option = {
  name: "--pipeline-id",
  description: "The OCID of a pipeline. required",
  args: { name: "pipeline-id" },
  isRequired: true,
};
const optProjectId: Fig.Option = {
  name: "--project-id",
  description: "Unique project identifier",
  args: { name: "project-id" },
  isRequired: true,
};
const optStagePredecessorCollection: Fig.Option = {
  name: "--stage-predecessor-collection",
  args: { name: "json" },
};
const optDescription3: Fig.Option = {
  name: "--description",
  description: "Optional description about the connection",
  args: { name: "description" },
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optDisplayName4: Fig.Option = {
  name: "--display-name",
  description: "Optional connection display name",
  args: { name: "display-name" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optStagePredecessorCollection2: Fig.Option = {
  name: "--stage-predecessor-collection",
  args: { name: "json" },
  isRequired: true,
};
const optDescription4: Fig.Option = {
  name: "--description",
  description: "Optional description about the deployment artifact",
  args: { name: "description" },
};
const optDisplayName5: Fig.Option = {
  name: "--display-name",
  description: "Deployment artifact display name",
  args: { name: "display-name" },
};
const optId: Fig.Option = {
  name: "--id",
  description: "Unique identifier or OCID for listing a single resource by ID",
  args: { name: "id" },
};
const optStageId: Fig.Option = {
  name: "--stage-id",
  description: "Unique stage identifier. required",
  args: { name: "stage-id" },
  isRequired: true,
};
const optStagePredecessorCollection3: Fig.Option = {
  name: "--stage-predecessor-collection",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
  isRequired: true,
};
const optStagePredecessorCollection4: Fig.Option = {
  name: "--stage-predecessor-collection",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optStageId2: Fig.Option = {
  name: "--stage-id",
  description: "Unique Stage identifier",
  args: { name: "stage-id" },
  isRequired: true,
};
const optConnectionId: Fig.Option = {
  name: "--connection-id",
  description: "Unique connection identifier",
  args: { name: "connection-id" },
  isRequired: true,
};
const optPipelineId2: Fig.Option = {
  name: "--pipeline-id",
  description: "Pipeline Identifier",
  args: { name: "pipeline-id" },
  isRequired: true,
};
const optProjectId2: Fig.Option = {
  name: "--project-id",
  description: "The OCID of a project",
  args: { name: "project-id" },
  isRequired: true,
};
const optProjectId3: Fig.Option = {
  name: "--project-id",
  description: "Unique project identifier",
  args: { name: "project-id" },
};
const optTriggerId: Fig.Option = {
  name: "--trigger-id",
  description: "Unique trigger identifier",
  args: { name: "trigger-id" },
  isRequired: true,
};
const optConnectionId2: Fig.Option = {
  name: "--connection-id",
  description:
    "The OCID of the connection resource used to get details for triggered events",
  args: { name: "connection-id" },
};
const optDisplayName6: Fig.Option = {
  name: "--display-name",
  description:
    "Stage display name, which can be renamed and is not necessarily unique",
  args: { name: "display-name" },
};
const optRollbackPolicy: Fig.Option = {
  name: "--rollback-policy",
  args: { name: "json" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optActions: Fig.Option = {
  name: "--actions",
  description: "The list of actions that are to be performed for this trigger",
  args: { name: "json" },
  isRequired: true,
};
const optActions2: Fig.Option = {
  name: "--actions",
  description: "The list of actions that are to be performed for this trigger",
  args: { name: "json" },
};
const optDescription5: Fig.Option = {
  name: "--description",
  description: "Optional description about the deployment environment",
  args: { name: "description" },
};
const optDisplayName7: Fig.Option = {
  name: "--display-name",
  description: "Deployment environment display name",
  args: { name: "display-name" },
};
const optProjectId4: Fig.Option = {
  name: "--project-id",
  description: "The OCID of the DevOps project to which the trigger belongs to",
  args: { name: "project-id" },
  isRequired: true,
};
const optProjectId5: Fig.Option = {
  name: "--project-id",
  description: "The OCID of the DevOps project",
  args: { name: "project-id" },
  isRequired: true,
};
const optSecurityAttributes: Fig.Option = {
  name: "--security-attributes",
  description: "Security attributes for this resource",
  args: { name: "json" },
};
const optArgumentSubstitutionMode: Fig.Option = {
  name: "--argument-substitution-mode",
  description: "Mode for artifact parameter substitution",
  args: { name: "argument-substitution-mode" },
};
const optArtifactId: Fig.Option = {
  name: "--artifact-id",
  description: "Unique Artifact identifier",
  args: { name: "artifact-id" },
  isRequired: true,
};
const optDisplayName8: Fig.Option = {
  name: "--display-name",
  description: "Deployment display name",
  args: { name: "display-name" },
};
const optEnvironmentId: Fig.Option = {
  name: "--environment-id",
  description: "Unique Environment identifier",
  args: { name: "environment-id" },
  isRequired: true,
};
const optPrincipalId: Fig.Option = {
  name: "--principal-id",
  description: "Unique principal identifier",
  args: { name: "principal-id" },
  isRequired: true,
};
const optRolloutPolicy: Fig.Option = {
  name: "--rollout-policy",
  args: { name: "json" },
  isRequired: true,
};
const optRolloutPolicy2: Fig.Option = {
  name: "--rollout-policy",
  args: { name: "json" },
};
const optStageId3: Fig.Option = {
  name: "--stage-id",
  description: "Unique stage identifier",
  args: { name: "stage-id" },
  isRequired: true,
};
const optArgumentSubstitutionMode2: Fig.Option = {
  name: "--argument-substitution-mode",
  description: "Mode for artifact parameter substitution",
  args: { name: "argument-substitution-mode" },
  isRequired: true,
};
const optBuildPipelineId: Fig.Option = {
  name: "--build-pipeline-id",
  description: "The OCID of the build pipeline",
  args: { name: "build-pipeline-id" },
  isRequired: true,
};
const optCommentId: Fig.Option = {
  name: "--comment-id",
  description: "Unique PullRequest Comment identifier",
  args: { name: "comment-id" },
  isRequired: true,
};
const optDeploymentId: Fig.Option = {
  name: "--deployment-id",
  description: "Unique deployment identifier",
  args: { name: "deployment-id" },
  isRequired: true,
};
const optFilePath: Fig.Option = {
  name: "--file-path",
  description:
    "A filter to return only commits that affect any of the specified paths",
  args: { name: "file-path" },
};
const optHelmDiffArguments: Fig.Option = {
  name: "--helm-diff-arguments",
  args: { name: "json" },
  isRequired: true,
};
const optRefName: Fig.Option = {
  name: "--ref-name",
  description:
    "A filter to return only resources that match the given reference name",
  args: { name: "ref-name" },
  isRequired: true,
};
const optRefName2: Fig.Option = {
  name: "--ref-name",
  description:
    "A filter to return only resources that match the given reference name",
  args: { name: "ref-name" },
};
const optArtifactIds: Fig.Option = {
  name: "--artifact-ids",
  description: "The list of file artifact OCIDs to deploy",
  args: { name: "json" },
};
const optCreateDeploymentDetailsDefinedTags: Fig.Option = {
  name: "--create-deployment-details-defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optCreateDeploymentDetailsDeployPipelineId: Fig.Option = {
  name: "--create-deployment-details-deploy-pipeline-id",
  description: "The OCID of a pipeline",
  args: { name: "create-deployment-details-deploy-pipeline-id" },
  isRequired: true,
};
const optCreateDeploymentDetailsDisplayName: Fig.Option = {
  name: "--create-deployment-details-display-name",
  description: "Deployment display name",
  args: { name: "create-deployment-details-display-name" },
};
const optCreateDeploymentDetailsFreeformTags: Fig.Option = {
  name: "--create-deployment-details-freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optDescription6: Fig.Option = {
  name: "--description",
  description: "Optional description about the build stage",
  args: { name: "description" },
};
const optDescription7: Fig.Option = {
  name: "--description",
  description: "Optional description about the stage",
  args: { name: "description" },
};
const optFailurePolicy: Fig.Option = {
  name: "--failure-policy",
  args: { name: "json" },
};
const optFile: Fig.Option = {
  name: "--file",
  description:
    "The name of the file that will receive the response data, or '-' to write to STDOUT",
  args: { name: "file", template: "filepaths" },
  isRequired: true,
};
const optNamespace: Fig.Option = {
  name: "--namespace",
  description:
    "Default namespace to be used for Kubernetes deployment when not specified in the manifest",
  args: { name: "namespace" },
};
const optNetworkChannel: Fig.Option = {
  name: "--network-channel",
  args: { name: "json" },
};
const optTestLoadBalancerConfig: Fig.Option = {
  name: "--test-load-balancer-config",
  args: { name: "json" },
};
const optTlsVerifyConfig: Fig.Option = {
  name: "--tls-verify-config",
  args: { name: "json" },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
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
  isRepeatable: true,
};
const optApprovalPolicy: Fig.Option = {
  name: "--approval-policy",
  args: { name: "json" },
  isRequired: true,
};
const optApprovalPolicy2: Fig.Option = {
  name: "--approval-policy",
  args: { name: "json" },
};
const optArtifactType: Fig.Option = {
  name: "--artifact-type",
  description: "Type of the DeployArtifact",
  args: {
    suggestions: [
      "COMMAND_SPEC",
      "DEPLOYMENT_SPEC",
      "JOB_SPEC",
      "KUBERNETES_MANIFEST",
      "GENERIC_FILE",
      "DOCKER_IMAGE",
    ],
  },
};
const optAttachmentId: Fig.Option = {
  name: "--attachment-id",
  description: "Unique PullRequest attachment identifier",
  args: { name: "attachment-id" },
  isRequired: true,
};
const optBuildPipelineId2: Fig.Option = {
  name: "--build-pipeline-id",
  description: "Unique build pipeline identifier",
  args: { name: "build-pipeline-id" },
  isRequired: true,
};
const optBuildRunId: Fig.Option = {
  name: "--build-run-id",
  description: "Unique build run identifier",
  args: { name: "build-run-id" },
  isRequired: true,
};
const optDeploymentSpecArtifactId: Fig.Option = {
  name: "--deployment-spec-artifact-id",
  description:
    "The OCID of the artifact that contains the deployment specification",
  args: { name: "deployment-spec-artifact-id" },
};
const optLoadBalancerConfig: Fig.Option = {
  name: "--load-balancer-config",
  args: { name: "json" },
};
const optOkeClusterEnvironmentId: Fig.Option = {
  name: "--oke-cluster-environment-id",
  description: "Kubernetes cluster environment OCID for deployment. required",
  args: { name: "oke-cluster-environment-id" },
  isRequired: true,
};
const optPersonalAccessToken: Fig.Option = {
  name: "--personal-access-token",
  description: "OCID of personal access token saved in secret store",
  args: { name: "personal-access-token" },
};
const optPipelineId3: Fig.Option = {
  name: "--pipeline-id",
  description: "Unique Pipeline identifier",
  args: { name: "pipeline-id" },
  isRequired: true,
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
      "DELETING",
    ],
  },
  isRepeatable: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "devops",
  description: "DevOps",
  subcommands: [
    {
      name: "project",
      description:
        "DevOps project groups resources needed to implement the CI/CD workload",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a project resource from one compartment OCID to another",
          options: [
            optProjectId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the resource must be moved",
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
          description: "Creates a new project",
          options: [
            {
              name: "--name",
              description: "Project name (case-sensitive)",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--notification-config",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where the project is created",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Project description",
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
          description: "Deletes a project resource by identifier",
          options: [
            optProjectId,
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
          description: "Retrieves a project by identifier",
          options: [optProjectId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the project",
          options: [
            optProjectId,
            {
              name: "--description",
              description: "Project description",
              args: { name: "description" },
            },
            { name: "--notification-config", args: { name: "json" } },
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
          name: "list",
          description: "Returns a list of projects",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Projects that matches the given lifecycleState",
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
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire name given",
              args: { name: "name" },
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
          name: "cancel-cascading-delete",
          description:
            "Cascading operation that restores Project and child resources from a DELETING state to an active state",
          options: [
            optProjectId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "schedule-cascading-delete",
          description:
            "Cascading operation that marks Project and child DevOps resources in a DELETING state for a retention period",
          options: [
            optProjectId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-notification-preference",
          description:
            "Get the project notification preference for the user passed as path param",
          options: [optProjectId, optPrincipalId, optFromJson],
        },
        {
          name: "update-notification-preference",
          description:
            "Update the project notification preference for the user passed as path param",
          options: [
            {
              name: "--notification-preference",
              description:
                "The override value of project notification preference",
              args: { name: "notification-preference" },
              isRequired: true,
            },
            optProjectId,
            optPrincipalId,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete-project-settings",
          description:
            "Removes the custom repository settings configured for a project",
          options: [optProjectId, optIfMatch, optForce2, optFromJson],
        },
        {
          name: "get-project-settings",
          description: "Retrieves a project's repository settings details",
          options: [optProjectId, optFromJson],
        },
        {
          name: "update-project-settings",
          description: "Updates the repository settings for a project",
          options: [
            optProjectId,
            { name: "--merge-settings", args: { name: "json" } },
            { name: "--approval-rules", args: { name: "json" } },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "list-project-analytics-authors",
          description: "Retrieve a list of all the Commit Analytics authors",
          options: [
            optProjectId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["authorName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-project-analytics",
          description: "Retrieves analytics for a given project",
          options: [
            optProjectId,
            {
              name: "--repository-metrics",
              description: "The name of the metric to be filtered",
              args: {
                suggestions: [
                  "COMMITS",
                  "LINES_ADDED",
                  "LINES_DELETED",
                  "PULL_REQUEST_CREATED",
                  "PULL_REQUEST_MERGED",
                  "PULL_REQUEST_DECLINED",
                  "PULL_REQUEST_REVIEW_START_DURATION_IN_DAYS",
                  "PULL_REQUEST_REVIEW_DURATION_IN_DAYS",
                  "PULL_REQUEST_APPROVED",
                  "PULL_REQUEST_REVIEWED",
                  "PULL_REQUEST_COMMENTS",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--start-time",
              description: "The beginning of the metric data query time range",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--author-email",
              description: "Email address of the author",
              args: { name: "author-email" },
            },
            {
              name: "--aggregation-duration",
              description: "Metrics aggregated for the defined period",
              args: { suggestions: ["DAILY", "WEEKLY", "MONTHLY", "YEARLY"] },
            },
            {
              name: "--end-time",
              description: "The end of the metric data query time range",
              args: { name: "datetime" },
            },
            {
              name: "--group-by",
              description: "Attribute by which metric data has to be grouped",
              args: { suggestions: ["AUTHOR"] },
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "trigger-dry-run-result",
      description: "Details about helm diff command execution",
      subcommands: [
        {
          name: "trigger-deployment-dry-run",
          description:
            "Sends a request to trigger a dry run, passing a HelmDiffArgumentCollection This is an internal-only endpoint",
          options: [
            optHelmDiffArguments,
            {
              name: "--create-deployment-details",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "trigger-deployment-dry-run-create-deploy-pipeline-redeployment-details",
          description:
            "Sends a request to trigger a dry run, passing a HelmDiffArgumentCollection This is an internal-only endpoint",
          options: [
            optHelmDiffArguments,
            optCreateDeploymentDetailsDeployPipelineId,
            {
              name: "--create-deployment-details-previous-deployment-id",
              description:
                "Specifies the OCID of the previous deployment to be redeployed",
              args: {
                name: "create-deployment-details-previous-deployment-id",
              },
              isRequired: true,
            },
            optCreateDeploymentDetailsDisplayName,
            optCreateDeploymentDetailsFreeformTags,
            optCreateDeploymentDetailsDefinedTags,
            optFromJson,
          ],
        },
        {
          name: "trigger-deployment-dry-run-create-deploy-pipeline-deployment-details",
          description:
            "Sends a request to trigger a dry run, passing a HelmDiffArgumentCollection This is an internal-only endpoint",
          options: [
            optHelmDiffArguments,
            optCreateDeploymentDetailsDeployPipelineId,
            optCreateDeploymentDetailsDisplayName,
            optCreateDeploymentDetailsFreeformTags,
            optCreateDeploymentDetailsDefinedTags,
            {
              name: "--create-deployment-details-deployment-arguments",
              args: { name: "json" },
            },
            {
              name: "--create-deployment-details-deploy-stage-override-arguments",
              args: { name: "json" },
            },
            {
              name: "--create-deployment-details-deploy-artifact-override-arguments",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "trigger-deployment-dry-run-create-single-deploy-stage-deployment-details",
          description:
            "Sends a request to trigger a dry run, passing a HelmDiffArgumentCollection This is an internal-only endpoint",
          options: [
            optHelmDiffArguments,
            optCreateDeploymentDetailsDeployPipelineId,
            {
              name: "--create-deployment-details-deploy-stage-id",
              description: "Specifies the OCID of the stage to be redeployed",
              args: { name: "create-deployment-details-deploy-stage-id" },
              isRequired: true,
            },
            optCreateDeploymentDetailsDisplayName,
            optCreateDeploymentDetailsFreeformTags,
            optCreateDeploymentDetailsDefinedTags,
            {
              name: "--create-deployment-details-deployment-arguments",
              args: { name: "json" },
            },
            {
              name: "--create-deployment-details-deploy-stage-override-arguments",
              args: { name: "json" },
            },
            {
              name: "--create-deployment-details-deploy-artifact-override-arguments",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "trigger-deployment-dry-run-create-single-deploy-stage-redeployment-details",
          description:
            "Sends a request to trigger a dry run, passing a HelmDiffArgumentCollection This is an internal-only endpoint",
          options: [
            optHelmDiffArguments,
            optCreateDeploymentDetailsDeployPipelineId,
            {
              name: "--create-deployment-details-deploy-stage-id",
              description: "Specifies the OCID of the stage to be redeployed",
              args: { name: "create-deployment-details-deploy-stage-id" },
              isRequired: true,
            },
            optCreateDeploymentDetailsDisplayName,
            optCreateDeploymentDetailsFreeformTags,
            optCreateDeploymentDetailsDefinedTags,
            {
              name: "--create-deployment-details-previous-deployment-id",
              description:
                "Specifies the OCID of the previous deployment to be redeployed",
              args: {
                name: "create-deployment-details-previous-deployment-id",
              },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "Details of the work request status",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources where the lifecycle state matches the given operation status",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "WAITING",
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
            {
              name: "--operation-type-multi-value-query",
              description:
                "A filter to return only resources where their Operation Types matches the parameter operation types",
              args: { name: "operation-type-multi-value-query" },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "repository",
      description:
        "Repositories containing the source code to build and deploy",
      subcommands: [
        {
          name: "create",
          description: "Creates a new repository",
          options: [
            {
              name: "--name",
              description: "Name of the repository",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description:
                "The OCID of the DevOps project containing the repository",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--repository-type",
              description: "Type of repository",
              args: { name: "repository-type" },
              isRequired: true,
            },
            {
              name: "--parent-repository-id",
              description: "The OCID of the parent repository",
              args: { name: "parent-repository-id" },
            },
            {
              name: "--default-branch",
              description: "The default branch of the repository",
              args: { name: "default-branch" },
            },
            { name: "--mirror-repository-config", args: { name: "json" } },
            {
              name: "--description",
              description: "Details of the repository",
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
          name: "delete-git-ref",
          description: "Deletes a Repository's Ref by its name",
          options: [
            optRepositoryId,
            optRefName,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-ref",
          description: "Deletes a Repository's Ref by its name",
          options: [
            optRepositoryId,
            optRefName,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a repository resource by identifier",
          options: [
            optRepositoryId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-commit",
          description: "Retrieves a repository's commit by commit ID",
          options: [
            optRepositoryId,
            {
              name: "--commit-id",
              description:
                "A filter to return only resources that match the given commit ID",
              args: { name: "commit-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-commit-diff",
          description: "Compares two revisions for their differences",
          options: [
            optRepositoryId,
            {
              name: "--target-version",
              description:
                "The commit or reference name that represents the newer changes against the base version",
              args: { name: "target-version" },
              isRequired: true,
            },
            {
              name: "--base-version",
              description:
                "The commit or reference name to compare changes against",
              args: { name: "base-version" },
            },
            {
              name: "--target-repository-id",
              description: "The target repository identifier",
              args: { name: "target-repository-id" },
            },
            {
              name: "--is-comparison-from-merge-base",
              description:
                "Boolean value to indicate whether to use merge base or most recent revision",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "get-file-diff",
          description:
            "Gets the line-by-line difference between file on different commits",
          options: [
            optRepositoryId,
            {
              name: "--file-path",
              description: "Path to a file within a repository",
              args: { name: "file-path" },
              isRequired: true,
            },
            {
              name: "--base-version",
              description: "The branch to compare changes against",
              args: { name: "base-version" },
              isRequired: true,
            },
            {
              name: "--target-version",
              description: "The branch where changes are coming from",
              args: { name: "target-version" },
              isRequired: true,
            },
            {
              name: "--is-comparison-from-merge-base",
              description:
                "Boolean to indicate whether to use merge base or most recent revision",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "get-mirror-record",
          description:
            "Returns either current mirror record or last successful mirror record for a specific mirror repository",
          options: [
            optRepositoryId,
            {
              name: "--mirror-record-type",
              description: "The field of mirror record type",
              args: { suggestions: ["current", "lastSuccessful"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-object-content",
          description: "Retrieve contents of a specified object",
          options: [
            optRepositoryId,
            {
              name: "--sha",
              description: "The SHA of a blob or tree",
              args: { name: "sha" },
              isRequired: true,
            },
            optFile,
            optFilePath,
            optFromJson,
          ],
        },
        {
          name: "get-ref",
          description:
            "This API will be deprecated on Wed, 12 June 2024 01:00:00 GMT as it does not get recognized when refName has",
          options: [optRepositoryId, optRefName, optFromJson],
        },
        {
          name: "get-repo-file-diff",
          description:
            "Gets the line-by-line difference between file on different commits",
          options: [
            optRepositoryId,
            {
              name: "--base-version",
              description: "The branch to compare changes against",
              args: { name: "base-version" },
              isRequired: true,
            },
            {
              name: "--target-version",
              description: "The branch where changes are coming from",
              args: { name: "target-version" },
              isRequired: true,
            },
            optFilePath,
            {
              name: "--is-comparison-from-merge-base",
              description:
                "Boolean to indicate whether to use merge base or most recent revision",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "get-repo-file-lines",
          description: "Retrieve lines of a specified file",
          options: [
            optRepositoryId,
            {
              name: "--revision",
              description: "Retrieve file lines from specific revision",
              args: { name: "revision" },
              isRequired: true,
            },
            optFilePath,
            {
              name: "--start-line-number",
              description:
                "Line number from where to start returning file lines",
              args: { name: "integer" },
            },
            optLimit,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a repository by identifier",
          options: [
            optRepositoryId,
            {
              name: "--fields",
              description:
                "Fields parameter can contain multiple flags useful in deciding the API functionality",
              args: {
                suggestions: ["branchCount", "commitCount", "sizeInBytes"],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-repository-archive-content",
          description: "Returns the archived repository information",
          options: [
            optRepositoryId,
            optFile,
            optRefName2,
            {
              name: "--format",
              description:
                "The archive format query parameter for downloading repository endpoint",
              args: { name: "format" },
            },
            optFromJson,
          ],
        },
        {
          name: "get-repository-file-lines",
          description: "Retrieve lines of a specified file",
          options: [
            optRepositoryId,
            {
              name: "--file-path",
              description: "Path to a file within a repository",
              args: { name: "file-path" },
              isRequired: true,
            },
            {
              name: "--revision",
              description: "Retrieve file lines from specific revision",
              args: { name: "revision" },
              isRequired: true,
            },
            {
              name: "--start-line-number",
              description:
                "Line number from where to start returning file lines",
              args: { name: "integer" },
            },
            optLimit,
            optFromJson,
          ],
        },
        {
          name: "list-authors",
          description: "Retrieve a list of all the authors",
          options: [
            optRepositoryId,
            optRefName2,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-commit-diffs",
          description: "Compares two revisions and lists the differences",
          options: [
            optRepositoryId,
            {
              name: "--base-version",
              description:
                "The commit or reference name to compare changes against",
              args: { name: "base-version" },
              isRequired: true,
            },
            {
              name: "--target-version",
              description:
                "The commit or reference name where changes are coming from",
              args: { name: "target-version" },
              isRequired: true,
            },
            {
              name: "--target-repository-id",
              description: "The target repository identifier",
              args: { name: "target-repository-id" },
            },
            {
              name: "--is-comparison-from-merge-base",
              description:
                "Boolean value to indicate whether to use merge base or most recent revision",
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
          name: "list-fork-sync-statuses",
          description:
            "LIST operation that returns a collection of fork sync status objects",
          options: [
            optRepositoryId,
            {
              name: "--branch-name-query-param",
              description:
                "Specifies the branch for which the fork sync status will be checked",
              args: { name: "branch-name-query-param" },
              isRequired: true,
            },
            optIfMatch,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "list-mirror-records",
          description:
            "Returns a list of mirror entry in history within 30 days",
          options: [
            optRepositoryId,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-pull-request-authors",
          description: "Retrieve a list of all the PR authors",
          options: [
            optRepositoryId,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Returns a list of repositories given a compartment ID or a project ID",
          options: [
            optCompartmentId,
            optProjectId3,
            {
              name: "--repository-id",
              description: "Unique repository identifier",
              args: { name: "repository-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycle state matches the given lifecycle state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETED",
                  "FAILED",
                  "DELETING",
                ],
              },
            },
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire name given",
              args: { name: "name" },
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
        {
          name: "mirror",
          description:
            "Synchronize a mirrored repository to the latest version from external providers",
          options: [
            optRepositoryId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "sync",
          description: "Synchronize a forked repository to the latest version",
          options: [
            optRepositoryId,
            {
              name: "--sync-merge-strategy",
              description:
                "If fetch and merge is passed in, the changes from the upstream will be fetched and merged into",
              args: { suggestions: ["FETCH_AND_MERGE", "DISCARD"] },
              isRequired: true,
            },
            {
              name: "--source-branch",
              description:
                "The branch in the upstream repository we want to sync from",
              args: { name: "source-branch" },
              isRequired: true,
            },
            {
              name: "--destination-branch",
              description:
                "The branch in the repository we want to be updated with changes from the upstream",
              args: { name: "destination-branch" },
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
          name: "update",
          description: "Updates the repository",
          options: [
            optRepositoryId,
            {
              name: "--name",
              description: "Name of the repository",
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "Details of the repository",
              args: { name: "description" },
            },
            {
              name: "--default-branch",
              description: "The default branch of the repository",
              args: { name: "default-branch" },
            },
            {
              name: "--repository-type",
              description: "Type of repository",
              args: { name: "repository-type" },
            },
            { name: "--mirror-repository-config", args: { name: "json" } },
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
          name: "put-repository-ref-branch-details",
          description: "Creates a new reference or updates an existing one",
          options: [
            optRepositoryId,
            optRefName,
            {
              name: "--commit-id",
              description: "Commit ID pointed to by the new branch",
              args: { name: "commit-id" },
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
          name: "put-repository-ref-tag-details",
          description: "Creates a new reference or updates an existing one",
          options: [
            optRepositoryId,
            optRefName,
            {
              name: "--object-id",
              description:
                "SHA-1 hash value of the object pointed to by the tag",
              args: { name: "object-id" },
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
          name: "list-refs",
          description: "Returns a list of references",
          options: [
            optRepositoryId,
            {
              name: "--ref-type",
              description:
                "Reference type to distinguish between branch and tag",
              args: { suggestions: ["BRANCH", "TAG"] },
            },
            {
              name: "--commit-id",
              description: "Commit ID in a repository",
              args: { name: "commit-id" },
            },
            optLimit,
            optPage,
            optRefName2,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["refType", "refName", "timeUpdated"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get-object",
          description:
            "Retrieves blob of specific branch name/commit ID and file path",
          options: [optRepositoryId, optFilePath, optRefName2, optFromJson],
        },
        {
          name: "list-commits",
          description: "Returns a list of commits",
          options: [
            optRepositoryId,
            optRefName2,
            {
              name: "--exclude-ref-name",
              description:
                "A filter to exclude commits that match the given reference name",
              args: { name: "exclude-ref-name" },
            },
            optFilePath,
            {
              name: "--timestamp-greater-than-or-equal-to",
              description:
                "A filter to return commits only created after the specified timestamp value",
              args: { name: "datetime" },
            },
            {
              name: "--timestamp-less-than-or-equal-to",
              description:
                "A filter to return commits only created before the specified timestamp value",
              args: { name: "datetime" },
            },
            {
              name: "--commit-message",
              description:
                "A filter to return any commits that contains the given message",
              args: { name: "commit-message" },
            },
            {
              name: "--author-name",
              description:
                "A filter to return any commits that are pushed by the requested author",
              args: { name: "author-name" },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-or-update-git-branch-details",
          description: "Creates a new reference or updates an existing one",
          options: [
            optRepositoryId,
            {
              name: "--ref-name",
              description: "The name of the reference to create or update",
              args: { name: "ref-name" },
              isRequired: true,
            },
            {
              name: "--commit-id",
              description: "Commit ID pointed to by the new branch",
              args: { name: "commit-id" },
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
          name: "create-or-update-git-tag-details",
          description: "Creates a new reference or updates an existing one",
          options: [
            optRepositoryId,
            {
              name: "--ref-name",
              description: "The name of the reference to create or update",
              args: { name: "ref-name" },
              isRequired: true,
            },
            {
              name: "--object-id",
              description:
                "SHA-1 hash value of the object pointed to by the tag",
              args: { name: "object-id" },
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
          name: "get-repository-notification-preference",
          description:
            "Get the repository notification preference for the user passed as path param",
          options: [optRepositoryId, optPrincipalId, optFromJson],
        },
        {
          name: "update-repository-notification-preference",
          description:
            "Update the repository notification preference for the user passed as path param",
          options: [
            {
              name: "--notification-preference",
              description:
                "The override value of repository notification preference",
              args: { name: "notification-preference" },
              isRequired: true,
            },
            optRepositoryId,
            optPrincipalId,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete-repository-settings",
          description:
            "Removes the custom settings configured for a repository",
          options: [optRepositoryId, optIfMatch, optForce2, optFromJson],
        },
        {
          name: "get-repository-settings",
          description: "Retrieves a repository's settings details",
          options: [optRepositoryId, optFromJson],
        },
        {
          name: "update-repository-settings",
          description: "Updates the settings for a repository",
          options: [
            optRepositoryId,
            { name: "--merge-checks", args: { name: "json" } },
            { name: "--merge-settings", args: { name: "json" } },
            { name: "--approval-rules", args: { name: "json" } },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "list-repository-analytics-authors",
          description: "Retrieve a list of all the Commit Analytics authors",
          options: [
            optRepositoryId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["authorName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "summarize-repository-analytics",
          description: "Retrieves repository analytics for a given repository",
          options: [
            optRepositoryId,
            {
              name: "--repository-metrics",
              description: "The name of the metric to be filtered",
              args: {
                suggestions: [
                  "COMMITS",
                  "LINES_ADDED",
                  "LINES_DELETED",
                  "PULL_REQUEST_CREATED",
                  "PULL_REQUEST_MERGED",
                  "PULL_REQUEST_DECLINED",
                  "PULL_REQUEST_REVIEW_START_DURATION_IN_DAYS",
                  "PULL_REQUEST_REVIEW_DURATION_IN_DAYS",
                  "PULL_REQUEST_APPROVED",
                  "PULL_REQUEST_REVIEWED",
                  "PULL_REQUEST_COMMENTS",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--start-time",
              description: "The beginning of the metric data query time range",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--author-email",
              description: "Email address of the author",
              args: { name: "author-email" },
            },
            {
              name: "--aggregation-duration",
              description: "Metrics aggregated for the defined period",
              args: { suggestions: ["DAILY", "WEEKLY", "MONTHLY", "YEARLY"] },
            },
            {
              name: "--end-time",
              description: "The end of the metric data query time range",
              args: { name: "datetime" },
            },
            {
              name: "--group-by",
              description: "Attribute by which metric data has to be grouped",
              args: { suggestions: ["AUTHOR"] },
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "protected-branch-collection",
      description: "Collection of protected branches",
      subcommands: [
        {
          name: "list-protected-branches",
          description: "Returns a list of Protected Branches",
          options: [
            optRepositoryId,
            {
              name: "--name",
              description:
                "A filter to return only resources that match the given branch name",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["branchName"] },
            },
            optAll,
            optPageSize,
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
          description: "Returns a list of errors for a given work request",
          options: [
            optWorkRequestId,
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
      name: "build-pipeline",
      description:
        "A set of stages forming a directed acyclic graph that defines the build process",
      subcommands: [
        {
          name: "create",
          description: "Creates a new build pipeline",
          options: [
            optProjectId5,
            {
              name: "--description",
              description: "Optional description about the build pipeline",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Build pipeline display name",
              args: { name: "display-name" },
            },
            { name: "--build-pipeline-parameters", args: { name: "json" } },
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
          description: "Deletes a build pipeline resource by identifier",
          options: [
            optBuildPipelineId2,
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
          description: "Retrieves a build pipeline by identifier",
          options: [optBuildPipelineId2, optFromJson],
        },
        {
          name: "update",
          description: "Updates the build pipeline",
          options: [
            optBuildPipelineId2,
            {
              name: "--description",
              description: "Optional description about the build pipeline",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Build pipeline display name",
              args: { name: "display-name" },
            },
            { name: "--build-pipeline-parameters", args: { name: "json" } },
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
          name: "list",
          description: "Returns a list of build pipelines",
          options: [
            optId,
            optProjectId3,
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only build pipelines that matches the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName3,
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
      name: "connection",
      description:
        "The properties that define a connection to external repositories",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a connection resource by identifier",
          options: [
            optConnectionId,
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
          description: "Retrieves a connection by identifier",
          options: [optConnectionId, optFromJson],
        },
        {
          name: "validate",
          description:
            "Return whether the credentials of the connection are valid",
          options: [
            optConnectionId,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "DELETING"] },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of connections",
          options: [
            optId,
            optProjectId3,
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only connections that matches the given lifecycle state",
              args: { suggestions: ["ACTIVE", "DELETING"] },
            },
            optDisplayName3,
            {
              name: "--connection-type",
              description:
                "A filter to return only resources that match the given connection type",
              args: {
                suggestions: [
                  "GITHUB_ACCESS_TOKEN",
                  "GITLAB_ACCESS_TOKEN",
                  "GITLAB_SERVER_ACCESS_TOKEN",
                  "BITBUCKET_SERVER_ACCESS_TOKEN",
                  "BITBUCKET_CLOUD_APP_PASSWORD",
                  "VBS_ACCESS_TOKEN",
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
          name: "create-github-connection",
          description: "Creates a new connection",
          options: [
            optProjectId5,
            optDescription3,
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--personal-access-token",
              description:
                "OCID of personal access token saved in secret store",
              args: { name: "personal-access-token" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-gitlab-connection",
          description: "Creates a new connection",
          options: [
            optProjectId5,
            optDescription3,
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--personal-access-token",
              description:
                "OCID of personal access token saved in secret store",
              args: { name: "personal-access-token" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-github-connection",
          description: "Updates the connection",
          options: [
            optConnectionId,
            optDescription3,
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPersonalAccessToken,
            optFromJson,
          ],
        },
        {
          name: "update-gitlab-connection",
          description: "Updates the connection",
          options: [
            optConnectionId,
            optDescription3,
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPersonalAccessToken,
            optFromJson,
          ],
        },
        {
          name: "create-bitbucket-cloud-connection",
          description: "Creates a new connection",
          options: [
            optProjectId5,
            {
              name: "--app-password",
              description:
                "OCID of personal Bitbucket Cloud AppPassword saved in secret store",
              args: { name: "app-password" },
              isRequired: true,
            },
            optDescription3,
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bitbucket-cloud-username",
              description:
                "Public Bitbucket Cloud Username in plain text(not more than 30 characters) required",
              args: { name: "bitbucket-cloud-username" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-bitbucket-cloud-connection",
          description: "Updates the connection",
          options: [
            optConnectionId,
            optDescription3,
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--app-password",
              description:
                "OCID of personal Bitbucket Cloud AppPassword saved in secret store",
              args: { name: "app-password" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--bitbucket-cloud-username",
              description:
                "Public Bitbucket Cloud Username in plain text(not more than 30 characters)",
              args: { name: "bitbucket-cloud-username" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-bitbucket-server-connection",
          description: "Creates a new connection",
          options: [
            optProjectId5,
            {
              name: "--base-url",
              description: "The Base URL of the hosted BitbucketServer",
              args: { name: "base-url" },
              isRequired: true,
            },
            optDescription3,
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            optTlsVerifyConfig,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--personal-access-token",
              description:
                "The OCID of personal access token saved in secret store. required",
              args: { name: "personal-access-token" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-gitlab-server-connection",
          description: "Creates a new connection",
          options: [
            optProjectId5,
            {
              name: "--base-url",
              description: "The baseUrl of the hosted GitLabServer",
              args: { name: "base-url" },
              isRequired: true,
            },
            optDescription3,
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            optTlsVerifyConfig,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--personal-access-token",
              description:
                "The OCID of personal access token saved in secret store. required",
              args: { name: "personal-access-token" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-bitbucket-server-connection",
          description: "Updates the connection",
          options: [
            optConnectionId,
            optDescription3,
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--base-url",
              description: "The Base URL of the hosted BitbucketServer",
              args: { name: "base-url" },
            },
            optTlsVerifyConfig,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPersonalAccessToken,
            optFromJson,
          ],
        },
        {
          name: "update-gitlab-server-connection",
          description: "Updates the connection",
          options: [
            optConnectionId,
            optDescription3,
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--base-url",
              description: "The baseUrl of the hosted GitLabServer",
              args: { name: "base-url" },
            },
            optTlsVerifyConfig,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--personal-access-token",
              description:
                "The OCID of personal access token saved in secret store",
              args: { name: "personal-access-token" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-vbs-connection",
          description: "Creates a new connection",
          options: [
            optProjectId5,
            {
              name: "--access-token",
              description:
                "The OCID of personal access token saved in secret store",
              args: { name: "access-token" },
              isRequired: true,
            },
            {
              name: "--base-url",
              description: "The Base URL of the hosted VBS server",
              args: { name: "base-url" },
              isRequired: true,
            },
            optDescription3,
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-vbs-connection",
          description: "Updates the connection",
          options: [
            optConnectionId,
            optDescription3,
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--access-token",
              description:
                "OCID of personal access token saved in secret store",
              args: { name: "access-token" },
            },
            {
              name: "--base-url",
              description: "The Base URL of the hosted VBS server",
              args: { name: "base-url" },
            },
            optIfMatch,
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
      name: "repository-path-summary",
      description:
        "Object containing information about files and directories in a repository",
      subcommands: [
        {
          name: "list-paths",
          description:
            "Retrieves a list of files and directories in a repository",
          options: [
            optRepositoryId,
            {
              name: "--ref",
              description: "The name of branch/tag or commit hash it points to",
              args: { name: "ref" },
            },
            {
              name: "--paths-in-subtree",
              description:
                "Flag to determine if files must be retrieved recursively",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--folder-path",
              description:
                "The fully qualified path to the folder whose contents are returned, including the folder name",
              args: { name: "folder-path" },
            },
            optLimit,
            optPage,
            optDisplayName3,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["type", "sizeInBytes", "name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "deploy-stage",
      description: "A single node in a pipeline",
      subcommands: [
        {
          name: "create-deploy-compute-instance-group-blue-green-stage",
          description: "Creates a new deployment stage",
          options: [
            optRolloutPolicy,
            {
              name: "--production-load-balancer-config",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optFailurePolicy,
            optTestLoadBalancerConfig,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--environment-id-a",
              description:
                "First compute instance group environment OCID for deployment. required",
              args: { name: "environment-id-a" },
              isRequired: true,
            },
            {
              name: "--environment-id-b",
              description:
                "Second compute instance group environment OCID for deployment. required",
              args: { name: "environment-id-b" },
              isRequired: true,
            },
            optPipelineId,
            optStagePredecessorCollection3,
            {
              name: "--deployment-spec-artifact-id",
              description:
                "The OCID of the artifact that contains the deployment specification. required",
              args: { name: "deployment-spec-artifact-id" },
              isRequired: true,
            },
            optArtifactIds,
            optFromJson,
          ],
        },
        {
          name: "create-compute-instance-group-blue-green-traffic-shift-stage",
          description: "Creates a new deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--compute-instance-group-blue-green-stage-id",
              description:
                "The OCID of the upstream compute instance group blue-green deployment stage in this pipeline. required",
              args: { name: "compute-instance-group-blue-green-stage-id" },
              isRequired: true,
            },
            optPipelineId,
            optStagePredecessorCollection3,
            optFromJson,
          ],
        },
        {
          name: "create-compute-instance-group-canary-approval-stage",
          description: "Creates a new deployment stage",
          options: [
            optApprovalPolicy,
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--compute-instance-group-canary-traffic-shift-stage-id",
              description:
                "A compute instance group canary traffic shift stage OCID for load balancer. required",
              args: {
                name: "compute-instance-group-canary-traffic-shift-stage-id",
              },
              isRequired: true,
            },
            optPipelineId,
            optStagePredecessorCollection3,
            optFromJson,
          ],
        },
        {
          name: "create-deploy-compute-instance-group-canary-stage",
          description: "Creates a new deployment stage",
          options: [
            optRolloutPolicy,
            {
              name: "--production-load-balancer-config",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optTestLoadBalancerConfig,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--compute-instance-group-environment-id",
              description:
                "A compute instance group environment OCID for canary deployment. required",
              args: { name: "compute-instance-group-environment-id" },
              isRequired: true,
            },
            optPipelineId,
            optStagePredecessorCollection3,
            {
              name: "--deployment-spec-artifact-id",
              description:
                "The OCID of the artifact that contains the deployment specification. required",
              args: { name: "deployment-spec-artifact-id" },
              isRequired: true,
            },
            optArtifactIds,
            optFromJson,
          ],
        },
        {
          name: "create-compute-instance-group-canary-traffic-shift-stage",
          description: "Creates a new deployment stage",
          options: [
            optRolloutPolicy,
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--compute-instance-group-canary-stage-id",
              description:
                "A compute instance group canary stage OCID for load balancer. required",
              args: { name: "compute-instance-group-canary-stage-id" },
              isRequired: true,
            },
            optPipelineId,
            optStagePredecessorCollection3,
            optFromJson,
          ],
        },
        {
          name: "create-deploy-oke-blue-green-stage",
          description: "Creates a new deployment stage",
          options: [
            {
              name: "--blue-green-strategy",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId,
            optStagePredecessorCollection3,
            {
              name: "--kubernetes-manifest-artifact-ids",
              description: "List of Kubernetes manifest artifact OCIDs",
              args: { name: "json" },
              isRequired: true,
            },
            optOkeClusterEnvironmentId,
            optFromJson,
          ],
        },
        {
          name: "create-oke-blue-green-traffic-shift-stage",
          description: "Creates a new deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId,
            optStagePredecessorCollection3,
            {
              name: "--oke-blue-green-stage-id",
              description:
                "The OCID of the upstream OKE blue-green deployment stage in this pipeline. required",
              args: { name: "oke-blue-green-stage-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-oke-canary-approval-stage",
          description: "Creates a new deployment stage",
          options: [
            optApprovalPolicy,
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId,
            optStagePredecessorCollection3,
            {
              name: "--oke-canary-traffic-shift-stage-id",
              description:
                "The OCID of an upstream OKE canary deployment traffic shift stage in this pipeline. required",
              args: { name: "oke-canary-traffic-shift-stage-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-deploy-oke-canary-stage",
          description: "Creates a new deployment stage",
          options: [
            {
              name: "--canary-strategy",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId,
            optStagePredecessorCollection3,
            {
              name: "--kubernetes-manifest-artifact-ids",
              description: "List of Kubernetes manifest artifact OCIDs",
              args: { name: "json" },
              isRequired: true,
            },
            optOkeClusterEnvironmentId,
            optFromJson,
          ],
        },
        {
          name: "create-oke-canary-traffic-shift-stage",
          description: "Creates a new deployment stage",
          options: [
            optRolloutPolicy,
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId,
            optStagePredecessorCollection3,
            {
              name: "--oke-canary-stage-id",
              description:
                "The OCID of an upstream OKE canary deployment stage in this pipeline. required",
              args: { name: "oke-canary-stage-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-deploy-compute-instance-group-blue-green-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optRolloutPolicy2,
            optFailurePolicy,
            optTestLoadBalancerConfig,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optArtifactIds,
            optStagePredecessorCollection4,
            optDeploymentSpecArtifactId,
            optFromJson,
          ],
        },
        {
          name: "update-compute-instance-group-blue-green-traffic-shift-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optStagePredecessorCollection4,
            optFromJson,
          ],
        },
        {
          name: "update-compute-instance-group-canary-approval-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optApprovalPolicy2,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--stage-id",
              description: "Unique stage identifier. required",
              args: { name: "stage-id" },
            },
            optStagePredecessorCollection4,
            optFromJson,
          ],
        },
        {
          name: "update-deploy-compute-instance-group-canary-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optRolloutPolicy2,
            optTestLoadBalancerConfig,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optArtifactIds,
            optStagePredecessorCollection4,
            optDeploymentSpecArtifactId,
            optFromJson,
          ],
        },
        {
          name: "update-compute-instance-group-canary-traffic-shift-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optRolloutPolicy2,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optStagePredecessorCollection4,
            optFromJson,
          ],
        },
        {
          name: "update-deploy-oke-blue-green-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optStagePredecessorCollection4,
            {
              name: "--kubernetes-manifest-artifact-ids",
              description:
                "List of Kubernetes manifest artifact OCIDs, the manifests should not include any job resource",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-oke-blue-green-traffic-shift-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optStagePredecessorCollection4,
            optFromJson,
          ],
        },
        {
          name: "update-oke-canary-approval-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optApprovalPolicy2,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optStagePredecessorCollection4,
            optFromJson,
          ],
        },
        {
          name: "update-deploy-oke-canary-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optStagePredecessorCollection4,
            {
              name: "--kubernetes-manifest-artifact-ids",
              description: "List of Kubernetes manifest artifact OCIDs",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-oke-canary-traffic-shift-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optRolloutPolicy2,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optStagePredecessorCollection4,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId2,
            optStagePredecessorCollection,
            optFromJson,
          ],
        },
        {
          name: "create-deploy-compute-instance-group-stage",
          description: "Creates a new deployment stage",
          options: [
            optRolloutPolicy,
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optRollbackPolicy,
            optFailurePolicy,
            optLoadBalancerConfig,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId2,
            optStagePredecessorCollection2,
            {
              name: "--compute-instance-group-environment-id",
              description:
                "A compute instance group environment OCID for rolling deployment",
              args: { name: "compute-instance-group-environment-id" },
              isRequired: true,
            },
            {
              name: "--deployment-spec-artifact-id",
              description:
                "The OCID of the artifact that contains the deployment specification",
              args: { name: "deployment-spec-artifact-id" },
              isRequired: true,
            },
            {
              name: "--artifact-ids",
              description: "Additional file artifact OCIDs",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a deployment stage resource by identifier",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId2,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Retrieves a list of deployment stages",
          options: [
            optId,
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only deployment stages that matches the given lifecycle state",
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
            optDisplayName3,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            {
              name: "--pipeline-id",
              description: "Pipeline Identifier",
              args: { name: "pipeline-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-deploy-oke-stage",
          description: "Creates a new deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optNamespace,
            optRollbackPolicy,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId2,
            {
              name: "--kubernetes-manifest-artifact-ids",
              description:
                "List of KubernetesManifest artifact OCIDs, the manifests should not include any Job resource",
              args: { name: "json" },
              isRequired: true,
            },
            optStagePredecessorCollection2,
            {
              name: "--oke-cluster-environment-id",
              description: "OkeCluster environment OCID for deployment",
              args: { name: "oke-cluster-environment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-deploy-function-stage",
          description: "Creates a new deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--config",
              description:
                "User provided key and value pair configuration, which is assigned through constants or parameter",
              args: { name: "json" },
            },
            {
              name: "--max-memory-in-mbs",
              description: "Maximum usable memory for the Function (in MB)",
              args: { name: "integer" },
            },
            {
              name: "--function-timeout-in-seconds",
              description: "Timeout for execution of the Function",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStagePredecessorCollection2,
            optPipelineId2,
            {
              name: "--function-environment-id",
              description: "Function environment OCID",
              args: { name: "function-environment-id" },
              isRequired: true,
            },
            {
              name: "--docker-image-artifact-id",
              description: "A docker image artifact OCID",
              args: { name: "docker-image-artifact-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-oke-helm-chart-stage",
          description: "Creates a new deployment stage",
          options: [
            {
              name: "--release-name",
              description: "Default name of the chart instance",
              args: { name: "release-name" },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--values-artifact-ids",
              description: "List of values.yaml file artifact OCIDs",
              args: { name: "json" },
            },
            {
              name: "--is-uninstall-on-stage-delete",
              description:
                "Uninstall the Helm chart release on deleting the stage",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--helm-command-artifact-ids",
              description: "List of Helm command artifact OCIDs",
              args: { name: "json" },
            },
            {
              name: "--purpose",
              description: "The purpose of running this Helm stage",
              args: {
                suggestions: ["EXECUTE_HELM_UPGRADE", "EXECUTE_HELM_COMMAND"],
              },
            },
            optNamespace,
            {
              name: "--timeout-in-seconds",
              description: "Time to wait for execution of a helm stage",
              args: { name: "integer" },
            },
            optRollbackPolicy,
            { name: "--set-values", args: { name: "json" } },
            { name: "--set-string", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optOkeClusterEnvironmentId,
            {
              name: "--helm-chart-artifact-id",
              description: "Helm chart artifact OCID. required",
              args: { name: "helm-chart-artifact-id" },
              isRequired: true,
            },
            optStagePredecessorCollection3,
            optPipelineId,
            {
              name: "--cleanup-on-fail",
              description: "Passes the --cleanup-on-fail flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--debug-helm",
              description: "Passes the --debug flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--force-helm",
              description: "Passes the --force flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--history-max",
              description: "Passes the --history-max flag for helm upgrade",
              args: { name: "integer" },
            },
            {
              name: "--no-hooks",
              description: "Passes the --no-hooks flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--render-subchart-notes",
              description:
                "Passes the --render-subchart-notes flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--reset-values",
              description: "Passes the --reset-values flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--reuse-values",
              description: "Passes the --reuse-values flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--skip-crds",
              description: "Passes the --skip-crds flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--wait-helm",
              description: "Passes the --wait flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create-invoke-function-stage",
          description: "Creates a new deployment stage",
          options: [
            {
              name: "--is-async",
              description:
                "A boolean flag specifies whether this stage executes asynchronously",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--is-validation-enabled",
              description:
                "A boolean flag specifies whether the invoked function should be validated",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId2,
            optStagePredecessorCollection2,
            {
              name: "--function-environment-id",
              description: "Function environment OCID",
              args: { name: "function-environment-id" },
              isRequired: true,
            },
            {
              name: "--artifact-id",
              description:
                "Optional binary artifat OCID user may provide to this stage",
              args: { name: "artifact-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-load-balancer-traffic-shift-stage",
          description: "Creates a new deployment stage",
          options: [
            {
              name: "--blue-backend-ips",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--green-backend-ips",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--traffic-shift-target",
              description: "Specifies the target or destination backend set",
              args: { name: "traffic-shift-target" },
              isRequired: true,
            },
            optRolloutPolicy,
            {
              name: "--load-balancer-config",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optRollbackPolicy,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId2,
            optStagePredecessorCollection2,
            optFromJson,
          ],
        },
        {
          name: "create-manual-approval-stage",
          description: "Creates a new deployment stage",
          options: [
            optApprovalPolicy,
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId2,
            optStagePredecessorCollection2,
            optFromJson,
          ],
        },
        {
          name: "create-wait-stage",
          description: "Creates a new deployment stage",
          options: [
            {
              name: "--wait-criteria",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId2,
            optStagePredecessorCollection2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a deployment stage by identifier",
          options: [optStageId2, optFromJson],
        },
        {
          name: "update-deploy-compute-instance-group-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optRolloutPolicy2,
            optRollbackPolicy,
            optFailurePolicy,
            optLoadBalancerConfig,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId2,
            optStagePredecessorCollection,
            {
              name: "--artifact-ids",
              description: "Additional file artifact OCIDs",
              args: { name: "json" },
            },
            optDeploymentSpecArtifactId,
            {
              name: "--compute-instance-group-environment-id",
              description:
                "A compute instance group environment OCID for rolling deployment",
              args: { name: "compute-instance-group-environment-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-deploy-function-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--config",
              description:
                "User provided key and value pair configuration, which is assigned through constants or parameter",
              args: { name: "json" },
            },
            {
              name: "--max-memory-in-mbs",
              description: "Maximum usable memory for the Function (in MB)",
              args: { name: "integer" },
            },
            {
              name: "--function-timeout-in-seconds",
              description: "Timeout for execution of the Function",
              args: { name: "integer" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId2,
            optStagePredecessorCollection,
            {
              name: "--function-environment-id",
              description: "Function environment OCID",
              args: { name: "function-environment-id" },
            },
            {
              name: "--docker-image-artifact-id",
              description: "A docker image artifact OCID",
              args: { name: "docker-image-artifact-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-invoke-function-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-async",
              description:
                "A boolean flag specifies whether this stage executes asynchronously",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-validation-enabled",
              description:
                "A boolean flag specifies whether the invoked function must be validated",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId2,
            optStagePredecessorCollection,
            {
              name: "--function-environment-id",
              description: "Function environment OCID",
              args: { name: "function-environment-id" },
            },
            {
              name: "--artifact-id",
              description:
                "Optional binary artifat OCID user may provide to this stage",
              args: { name: "artifact-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-load-balancer-traffic-shift-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            { name: "--blue-backend-ips", args: { name: "json" } },
            { name: "--green-backend-ips", args: { name: "json" } },
            {
              name: "--traffic-shift-target",
              description: "Specifies the target or destination backend set",
              args: { name: "traffic-shift-target" },
            },
            optRolloutPolicy2,
            optLoadBalancerConfig,
            optRollbackPolicy,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId2,
            optStagePredecessorCollection,
            optFromJson,
          ],
        },
        {
          name: "update-manual-approval-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optApprovalPolicy2,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId2,
            optStagePredecessorCollection,
            optFromJson,
          ],
        },
        {
          name: "update-deploy-oke-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optNamespace,
            optRollbackPolicy,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId2,
            optStagePredecessorCollection,
            {
              name: "--kubernetes-manifest-artifact-ids",
              description:
                "List of KubernetesManifest artifact OCIDs, the manifests should not include any Job resource",
              args: { name: "json" },
            },
            {
              name: "--oke-cluster-environment-id",
              description: "OkeCluster environment OCID for deployment",
              args: { name: "oke-cluster-environment-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-oke-helm-chart-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--values-artifact-ids",
              description: "List of values.yaml file artifact OCIDs",
              args: { name: "json" },
            },
            {
              name: "--release-name",
              description: "Name of the Helm chart release",
              args: { name: "release-name" },
            },
            {
              name: "--is-uninstall-on-stage-delete",
              description:
                "Uninstall the Helm chart release on deleting the stage",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--helm-command-artifact-ids",
              description: "List of Helm command artifact OCIDs",
              args: { name: "json" },
            },
            {
              name: "--purpose",
              description: "The purpose of running this Helm stage",
              args: {
                suggestions: ["EXECUTE_HELM_UPGRADE", "EXECUTE_HELM_COMMAND"],
              },
            },
            optNamespace,
            {
              name: "--timeout-in-seconds",
              description: "Time to wait for execution of a helm stage",
              args: { name: "integer" },
            },
            optRollbackPolicy,
            { name: "--set-values", args: { name: "json" } },
            { name: "--set-string", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--oke-cluster-environment-id",
              description: "Kubernetes cluster environment OCID for deployment",
              args: { name: "oke-cluster-environment-id" },
            },
            {
              name: "--helm-chart-artifact-id",
              description: "Helm chart artifact OCID",
              args: { name: "helm-chart-artifact-id" },
            },
            optStagePredecessorCollection4,
            optStageId,
            {
              name: "--cleanup-on-fail",
              description: "Passes the --cleanup-on-fail flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--debug-helm",
              description: "Passes the --debug flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--force-helm",
              description: "Passes the --force flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--history-max",
              description: "Passes the --history-max flag for helm upgrade",
              args: { name: "integer" },
            },
            {
              name: "--no-hooks",
              description: "Passes the --no-hooks flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--render-subchart-notes",
              description:
                "Passes the --render-subchart-notes flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--reset-values",
              description: "Passes the --reset-values flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--reuse-values",
              description: "Passes the --reuse-values flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--skip-crds",
              description: "Passes the --skip-crds flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--wait-helm",
              description: "Passes the --wait flag for helm upgrade",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "update-wait-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            { name: "--wait-criteria", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId2,
            optStagePredecessorCollection,
            optFromJson,
          ],
        },
        {
          name: "create-shell-stage",
          description: "Creates a new deployment stage",
          options: [
            {
              name: "--container-config",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--timeout-in-seconds",
              description: "Time to wait for execution of a shell stage",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--command-spec-artifact-id",
              description:
                "The OCID of the artifact that contains the command specification. required",
              args: { name: "command-spec-artifact-id" },
              isRequired: true,
            },
            optStagePredecessorCollection2,
            optPipelineId,
            optFromJson,
          ],
        },
        {
          name: "update-shell-stage",
          description: "Updates the deployment stage",
          options: [
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            { name: "--container-config", args: { name: "json" } },
            {
              name: "--timeout-in-seconds",
              description: "Time to wait for execution of a shell stage",
              args: { name: "integer" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--command-spec-artifact-id",
              description:
                "The OCID of the artifact that contains the command specification",
              args: { name: "command-spec-artifact-id" },
            },
            optStageId,
            optStagePredecessorCollection,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "deployment",
      description: "A single execution or run of a pipeline",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a deployment resource by identifier",
          options: [
            optDeploymentId,
            {
              name: "--reason",
              description: "The reason for canceling the deployment",
              args: { name: "reason" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a deployment by identifier",
          options: [optDeploymentId, optFromJson],
        },
        {
          name: "create-single-stage-redeployment",
          description: "Creates a new deployment",
          options: [
            optDisplayName8,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--previous-deployment-id",
              description:
                "Specifies the OCID of the previous deployment to be redeployed",
              args: { name: "previous-deployment-id" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId,
            {
              name: "--stage-id",
              description: "Specifies the OCID of the stage to be redeployed",
              args: { name: "stage-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-single-stage-redeployment",
          description: "Updates the deployment",
          options: [
            optDeploymentId,
            optDisplayName8,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the deployment",
          options: [
            optDeploymentId,
            optDisplayName8,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of deployments",
          options: [
            optId,
            optCompartmentId,
            optProjectId3,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only Deployments that matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            optDisplayName3,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--time-created-less-than",
              description:
                "Search for DevOps resources that were created before a specific date",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-greater-than-or-equal-to",
              description:
                "Search for DevOps resources that were created after a specific date",
              args: { name: "datetime" },
            },
            optAll,
            optPageSize,
            {
              name: "--pipeline-id",
              description: "Pipeline Identifier",
              args: { name: "pipeline-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-pipeline-deployment",
          description: "Creates a new deployment",
          options: [
            optDisplayName8,
            optFreeformTags,
            optDefinedTags,
            { name: "--deployment-arguments", args: { name: "json" } },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--stage-override-arguments",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optPipelineId2,
            { name: "--artifact-override-arguments", args: { name: "json" } },
            {
              name: "--dry-run",
              description: "Set this flag to execute a dry run deployment",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "approve",
          description: "Submit stage approval",
          options: [
            optDeploymentId,
            {
              name: "--action",
              description: "The action of Approve or Reject",
              args: { suggestions: ["APPROVE", "REJECT"] },
              isRequired: true,
            },
            {
              name: "--reason",
              description:
                "The reason for approving or rejecting the deployment",
              args: { name: "reason" },
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--stage-id",
              description: "The OCID of the stage which is marked for approval",
              args: { name: "stage-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-pipeline-redeployment",
          description: "Creates a new deployment",
          options: [
            {
              name: "--previous-deployment-id",
              description:
                "Specifies the OCID of the previous deployment to be redeployed",
              args: { name: "previous-deployment-id" },
              isRequired: true,
            },
            optDisplayName8,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--deployment-id",
              description: "Pipeline Identifier",
              args: { name: "deployment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-single-stage-deployment",
          description: "Creates a new deployment",
          options: [
            optDisplayName8,
            optFreeformTags,
            optDefinedTags,
            { name: "--deployment-arguments", args: { name: "json" } },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--stage-override-arguments",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optPipelineId2,
            {
              name: "--stage-id",
              description: "The OCID of the stage which is marked for approval",
              args: { name: "stage-id" },
              isRequired: true,
            },
            { name: "--artifact-override-arguments", args: { name: "json" } },
            {
              name: "--dry-run",
              description: "Set this flag to execute a dry run deployment",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "protected-branch",
      description:
        "Holds information used to restrict certain actions on branches",
      subcommands: [
        {
          name: "create-or-update",
          description:
            "Creates a restriction on a branch that prevents certain actions on it",
          options: [
            optRepositoryId,
            {
              name: "--branch-name",
              description:
                "The branchName can either be exact branch name or branch pattern",
              args: { name: "branch-name" },
              isRequired: true,
            },
            {
              name: "--protection-levels",
              description: "Level of protection to add on a branch",
              args: { suggestions: ["READ_ONLY", "PULL_REQUEST_MERGE_ONLY"] },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Removes the protection from a branch",
          options: [
            optRepositoryId,
            {
              name: "--branch-name",
              description:
                "The branchName can either be exact branch name or branch pattern",
              args: { name: "branch-name" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "pull-request",
      description:
        "Pull Request containing the diff between a review branch and a destination branch",
      subcommands: [
        {
          name: "create",
          description: "Creates a new PullRequest",
          options: [
            {
              name: "--display-name",
              description: "Pull Request title",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--source-branch",
              description: "The source branch of the pull request",
              args: { name: "source-branch" },
              isRequired: true,
            },
            {
              name: "--repository-id",
              description: "The OCID of the repository",
              args: { name: "repository-id" },
              isRequired: true,
            },
            {
              name: "--destination-branch",
              description: "The destination branch of the pull request",
              args: { name: "destination-branch" },
            },
            {
              name: "--source-repository-id",
              description:
                "The OCID of the forked repository that will act as the source of the changes to be included in the pull",
              args: { name: "source-repository-id" },
            },
            {
              name: "--description",
              description: "Details of the pull request",
              args: { name: "description" },
            },
            {
              name: "--reviewers",
              description: "Reviewers for this pull request",
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
          name: "create-pull-request-attachment",
          description: "Creates PullRequest attachment",
          options: [
            optPullRequestId,
            {
              name: "--content-disposition",
              description:
                "The Content-Disposition response-header field has been proposed as a means for the origin server to suggest",
              args: { name: "content-disposition" },
              isRequired: true,
            },
            {
              name: "--create-pull-request-attachment-body",
              description: "Uploads the content of the attachment",
              args: { name: "create-pull-request-attachment-body" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "decline",
          description: "Decline a PullRequest",
          options: [
            optPullRequestId,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a PullRequest resource by identifier",
          options: [
            optPullRequestId,
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-pull-request-attachment",
          description:
            "Deletes a PullRequest attachment metadata by identifier",
          options: [
            optPullRequestId,
            optAttachmentId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a PullRequest by identifier",
          options: [optPullRequestId, optFromJson],
        },
        {
          name: "get-pull-request-attachment",
          description: "Get PullRequest attachment metadata by identifier",
          options: [optPullRequestId, optAttachmentId, optFromJson],
        },
        {
          name: "get-pull-request-attachment-content",
          description: "Gets the content of the attachment",
          options: [optPullRequestId, optAttachmentId, optFile, optFromJson],
        },
        {
          name: "list-pull-request-activities",
          description: "List actions that have been taken on a pull request",
          options: [
            optPullRequestId,
            {
              name: "--activity-type",
              description:
                "An optional filter to list activities based on activity type",
              args: {
                suggestions: [
                  "LIFECYCLE",
                  "APPROVAL",
                  "COMMIT",
                  "REVIEWER",
                  "COMMENT",
                ],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-pull-request-attachments",
          description: "List PullRequest level attachments by identifier",
          options: [
            optPullRequestId,
            optCompartmentId,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["fileName", "timeCreated", "createdBy"] },
            },
            {
              name: "--file-name",
              description:
                "A filter to return only resources that match the entire file name given",
              args: { name: "file-name" },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Updates the reviewer list of a pull request",
          options: [
            optPullRequestId,
            {
              name: "--items",
              description: "List of patch instructions",
              args: { name: "json" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "reopen",
          description: "Reopen a PullRequest",
          options: [
            optPullRequestId,
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "review",
          description: "Review a PullRequest",
          options: [
            optPullRequestId,
            {
              name: "--action",
              description: "The review action taken",
              args: { suggestions: ["APPROVE", "UNAPPROVE"] },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "unsubscribe",
          description: "Unsubscribe the PullRequest",
          options: [
            optPullRequestId,
            {
              name: "--token",
              description: "The unsubscription token",
              args: { name: "token" },
              isRequired: true,
            },
            optFile,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the PullRequest",
          options: [
            optPullRequestId,
            {
              name: "--display-name",
              description: "Pull Request title",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Details of the pull request",
              args: { name: "description" },
            },
            {
              name: "--destination-branch",
              description:
                "The destination branch against which the changes are to be reviewed",
              args: { name: "destination-branch" },
            },
            {
              name: "--reviewers",
              description: "Reviewers for this Review",
              args: { name: "json" },
            },
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
          name: "execute-merge-pull-request",
          description: "Merge the PullRequest",
          options: [
            optPullRequestId,
            {
              name: "--commit-message",
              description:
                "The commit message to be shown for this pull request in the destination branch after merge is done",
              args: { name: "commit-message" },
              isRequired: true,
            },
            {
              name: "--merge-strategy",
              description: "The strategy of merging",
              args: {
                suggestions: [
                  "MERGE_COMMIT",
                  "FAST_FORWARD",
                  "FAST_FORWARD_ONLY",
                  "REBASE_AND_MERGE",
                  "REBASE_AND_FAST_FORWARD",
                  "SQUASH",
                  "SQUASH_FAST_FORWARD_ONLY",
                ],
              },
              isRequired: true,
            },
            {
              name: "--post-merge-action",
              description:
                "What needs to happen after the merge is done successfully",
              args: {
                suggestions: ["DELETE_SOURCE_BRANCH", "KEEP_SOURCE_BRANCH"],
              },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "validate-merge-pull-request",
          description: "Merge the PullRequest",
          options: [
            optPullRequestId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-build-run-snapshots",
          description:
            "Returns a list of build run snapshots for a given commit or the latest commit on a pull request if no commit",
          options: [
            optPullRequestId,
            {
              name: "--pipeline-id",
              description: "Unique build pipeline identifier",
              args: { name: "pipeline-id" },
            },
            {
              name: "--build-run-id",
              description: "Unique build run identifier",
              args: { name: "build-run-id" },
            },
            {
              name: "--commit-id",
              description: "Commit ID in a repository",
              args: { name: "commit-id" },
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
        {
          name: "get-pull-request-notification-preference",
          description:
            "Get the pull request notification preference for the user passed as path param",
          options: [optPullRequestId, optPrincipalId, optFromJson],
        },
        {
          name: "update-pull-request-notification-preference",
          description:
            "Update the pull request notification preference for the user passed as path param",
          options: [
            {
              name: "--notification-preference",
              description:
                "The override value of pull request notification preference",
              args: { name: "notification-preference" },
              isRequired: true,
            },
            optPullRequestId,
            optPrincipalId,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list-pull-requests",
          description: "Returns a list of PullRequests",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only pull requests that match the given lifecycle state",
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
            {
              name: "--lifecycle-details",
              description:
                "A filter to return only pull requests that match the given lifecycle state",
              args: {
                suggestions: [
                  "OPEN",
                  "CONFLICT",
                  "CLOSED",
                  "MERGING",
                  "MERGED",
                ],
              },
            },
            {
              name: "--repository-id",
              description:
                "The OCID of the repository in which to list resources",
              args: { name: "repository-id" },
            },
            optDisplayName3,
            optId,
            {
              name: "--created-by",
              description: "PullRequest Created By",
              args: { name: "created-by" },
            },
            {
              name: "--destination-branch",
              description: "PullRequest Target Branch",
              args: { name: "destination-branch" },
            },
            {
              name: "--source-branch",
              description: "PullRequest Source Branch",
              args: { name: "source-branch" },
            },
            {
              name: "--reviewer-principal-id",
              description: "PullRequest Reviewer Id",
              args: { name: "reviewer-principal-id" },
            },
            {
              name: "--source-repository-id",
              description: "PullRequest Source Repository Id",
              args: { name: "source-repository-id" },
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
      name: "deploy-pipeline",
      description:
        "A set of stages whose predecessor relation forms a directed acyclic graph",
      subcommands: [
        {
          name: "list",
          description: "Returns a list of deployment pipelines",
          options: [
            optId,
            optProjectId3,
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only DeployPipelines that matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName3,
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
          name: "create",
          description: "Creates a new deployment pipeline",
          options: [
            optProjectId2,
            {
              name: "--description",
              description: "Optional description about the deployment pipeline",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Deployment pipeline display name",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            { name: "--pipeline-parameters", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a deployment pipeline resource by identifier",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId3,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a deployment pipeline by identifier",
          options: [optPipelineId3, optFromJson],
        },
        {
          name: "update",
          description: "Updates the deployment pipeline",
          options: [
            {
              name: "--description",
              description: "Optional description about the deloyment pipeline",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Deloyment pipeline display name",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optPipelineId3,
            { name: "--pipeline-parameters", args: { name: "json" } },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "deploy-artifact",
      description:
        "Artifacts are deployment manifests that are referenced in a pipeline stage for automated deployment to",
      subcommands: [
        {
          name: "create-helm-command-spec",
          description: "Creates a new deployment artifact",
          options: [
            {
              name: "--deploy-artifact-type",
              description: "Type of the deployment artifact",
              args: { name: "deploy-artifact-type" },
              isRequired: true,
            },
            optArgumentSubstitutionMode2,
            optProjectId2,
            optDescription4,
            optDisplayName5,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--base64-encoded-content",
              description: "The Helm commands to be executed, base 64 encoded",
              args: { name: "base64-encoded-content" },
              isRequired: true,
            },
            {
              name: "--helm-artifact-source",
              description: "Type of source for the helm artifact",
              args: { suggestions: ["INLINE"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-helm-command-spec",
          description: "Updates the deployment artifact",
          options: [
            {
              name: "--deploy-artifact-id",
              description: "Unique artifact identifier",
              args: { name: "deploy-artifact-id" },
              isRequired: true,
            },
            optDescription4,
            optDisplayName5,
            {
              name: "--deploy-artifact-type",
              description: "Type of the deployment artifact",
              args: { name: "deploy-artifact-type" },
            },
            optArgumentSubstitutionMode,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--base64-encoded-content",
              description: "The Helm commands to be executed, base 64 encoded",
              args: { name: "base64-encoded-content" },
              isRequired: true,
            },
            {
              name: "--helm-artifact-source",
              description: "Type of source for the helm artifact",
              args: { suggestions: ["INLINE"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of deployment artifacts",
          options: [
            optId,
            optProjectId3,
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only DeployArtifacts that matches the given lifecycleState",
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
            optDisplayName3,
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
          description: "Updates the deployment artifact",
          options: [
            optDescription4,
            optDisplayName5,
            optArgumentSubstitutionMode,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optArtifactId,
            optArtifactType,
            optFromJson,
          ],
        },
        {
          name: "create-generic-artifact",
          description: "Creates a new deployment artifact",
          options: [
            optArgumentSubstitutionMode2,
            optProjectId2,
            optDescription4,
            optDisplayName5,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--repository-id",
              description: "Specifies the repository id",
              args: { name: "repository-id" },
              isRequired: true,
            },
            {
              name: "--artifact-path",
              description: "Specifies the artifact path in the repository",
              args: { name: "artifact-path" },
              isRequired: true,
            },
            {
              name: "--artifact-version",
              description:
                "Users should be able to set this as a pipeline parameter for example ${appVersion}",
              args: { name: "artifact-version" },
              isRequired: true,
            },
            {
              name: "--artifact-type",
              description: "Type of the DeployArtifact",
              args: {
                suggestions: [
                  "COMMAND_SPEC",
                  "DEPLOYMENT_SPEC",
                  "JOB_SPEC",
                  "KUBERNETES_MANIFEST",
                  "GENERIC_FILE",
                  "DOCKER_IMAGE",
                ],
              },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-inline-artifact",
          description: "Creates a new deployment artifact",
          options: [
            optArgumentSubstitutionMode2,
            optProjectId2,
            optDescription4,
            optDisplayName5,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--artifact-type",
              description: "Type of the DeployArtifact",
              args: {
                suggestions: [
                  "COMMAND_SPEC",
                  "DEPLOYMENT_SPEC",
                  "JOB_SPEC",
                  "KUBERNETES_MANIFEST",
                  "GENERIC_FILE",
                  "DOCKER_IMAGE",
                ],
              },
              isRequired: true,
            },
            {
              name: "--base64-encoded-content",
              description: "Base64 Encoded String",
              args: { name: "base64-encoded-content" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-ocir-artifact",
          description: "Creates a new deployment artifact",
          options: [
            optArgumentSubstitutionMode2,
            optProjectId2,
            optDescription4,
            optDisplayName5,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--source-image-uri",
              description: "Base64 Encoded String",
              args: { name: "source-image-uri" },
              isRequired: true,
            },
            {
              name: "--image-digest",
              description:
                "Specifies image digest for the version of the image",
              args: { name: "image-digest" },
            },
            {
              name: "--artifact-type",
              description: "Type of the DeployArtifact",
              args: {
                suggestions: [
                  "DEPLOYMENT_SPEC",
                  "JOB_SPEC",
                  "KUBERNETES_MANIFEST",
                  "GENERIC_FILE",
                  "DOCKER_IMAGE",
                ],
              },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-helm-repository-artifact",
          description: "Creates a new deployment artifact",
          options: [
            optArgumentSubstitutionMode2,
            optProjectId2,
            optDescription4,
            optDisplayName5,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--artifact-type",
              description: "Type of the deployment artifact. required",
              args: { name: "artifact-type" },
              isRequired: true,
            },
            {
              name: "--artifact-version",
              description:
                "Users can set this as a placeholder value that refers to a pipeline parameter, for example",
              args: { name: "artifact-version" },
              isRequired: true,
            },
            {
              name: "--artifact-chart-url",
              description: "The URL of an OCIR repository. required",
              args: { name: "artifact-chart-url" },
              isRequired: true,
            },
            { name: "--helm-verification-key-source", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "update-generic-artifact",
          description: "Updates the deployment artifact",
          options: [
            optDescription4,
            optDisplayName5,
            optArgumentSubstitutionMode,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optArtifactId,
            {
              name: "--repository-id",
              description: "Specifies the repository id",
              args: { name: "repository-id" },
            },
            {
              name: "--artifact-path",
              description: "Specifies the artifact path in the repository",
              args: { name: "artifact-path" },
            },
            {
              name: "--artifact-version",
              description:
                "Users should be able to set this as a pipeline parameter for example ${appVersion}",
              args: { name: "artifact-version" },
            },
            optArtifactType,
            optFromJson,
          ],
        },
        {
          name: "update-inline-artifact",
          description: "Updates the deployment artifact",
          options: [
            optDescription4,
            optDisplayName5,
            optArgumentSubstitutionMode,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optArtifactId,
            {
              name: "--base64-encoded-content",
              description: "Base64 Encoded String",
              args: { name: "base64-encoded-content" },
            },
            optArtifactType,
            optFromJson,
          ],
        },
        {
          name: "update-ocir-artifact",
          description: "Updates the deployment artifact",
          options: [
            optDescription4,
            optDisplayName5,
            optArgumentSubstitutionMode,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optArtifactId,
            {
              name: "--source-image-uri",
              description: "Base64 Encoded String",
              args: { name: "source-image-uri" },
            },
            {
              name: "--image-digest",
              description:
                "Specifies image digest for the version of the image",
              args: { name: "image-digest" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-helm-repository-artifact",
          description: "Updates the deployment artifact",
          options: [
            optDescription4,
            optDisplayName5,
            {
              name: "--deploy-artifact-type",
              description: "Type of the deployment artifact",
              args: { name: "deploy-artifact-type" },
            },
            optArgumentSubstitutionMode,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--artifact-version",
              description:
                "Users can set this as a placeholder value that refers to a pipeline parameter, for example",
              args: { name: "artifact-version" },
              isRequired: true,
            },
            {
              name: "--artifact-chart-url",
              description: "The URL of an OCIR repository. required",
              args: { name: "artifact-chart-url" },
              isRequired: true,
            },
            {
              name: "--artifact-id",
              description: "Unique artifact identifier. required",
              args: { name: "artifact-id" },
              isRequired: true,
            },
            { name: "--helm-verification-key-source", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a deployment artifact by identifier",
          options: [optArtifactId, optFromJson],
        },
        {
          name: "delete",
          description: "Deletes a deployment artifact resource by identifier",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optArtifactId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "trigger",
      description: "Trigger the deployment pipeline to deploy the artifact",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a trigger resource by identifier",
          options: [
            optTriggerId,
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
          description: "Retrieves a trigger by identifier",
          options: [optTriggerId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of triggers",
          options: [
            optCompartmentId,
            optProjectId3,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only triggers that matches the given lifecycle state",
              args: { suggestions: ["ACTIVE", "DELETING"] },
            },
            optDisplayName3,
            {
              name: "--id",
              description: "Unique trigger identifier",
              args: { name: "id" },
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
          name: "create-devops-code-repo-trigger",
          description: "Creates a new trigger",
          options: [
            optProjectId4,
            optActions,
            optDisplayName2,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--repository-id",
              description: "The OCID of the DevOps code repository",
              args: { name: "repository-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-github-trigger",
          description: "Creates a new trigger",
          options: [
            optProjectId4,
            optActions,
            optDisplayName2,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optConnectionId2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-gitlab-trigger",
          description: "Creates a new trigger",
          options: [
            optProjectId4,
            optActions,
            optDisplayName2,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optConnectionId2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-devops-code-repo-trigger",
          description: "Updates the trigger",
          options: [
            optTriggerId,
            optDisplayName2,
            optDescription2,
            optActions2,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--repository-id",
              description: "The OCID of the DevOps code repository",
              args: { name: "repository-id" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-github-trigger",
          description: "Updates the trigger",
          options: [
            optTriggerId,
            optDisplayName2,
            optDescription2,
            optActions2,
            optFreeformTags,
            optDefinedTags,
            optConnectionId2,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-gitlab-trigger",
          description: "Updates the trigger",
          options: [
            optTriggerId,
            optDisplayName2,
            optDescription2,
            optActions2,
            optFreeformTags,
            optDefinedTags,
            optConnectionId2,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-bitbucket-cloud-trigger",
          description: "Creates a new trigger",
          options: [
            optProjectId4,
            optActions,
            optDisplayName2,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optConnectionId2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-bitbucket-cloud-trigger",
          description: "Updates the trigger",
          options: [
            optTriggerId,
            optDisplayName2,
            optDescription2,
            optActions2,
            optFreeformTags,
            optDefinedTags,
            optConnectionId2,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-bitbucket-server-trigger",
          description: "Creates a new trigger",
          options: [
            optProjectId4,
            optActions,
            optDisplayName2,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-gitlab-server-trigger",
          description: "Creates a new trigger",
          options: [
            optProjectId4,
            optActions,
            optDisplayName2,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-bitbucket-server-trigger",
          description: "Updates the trigger",
          options: [
            optTriggerId,
            optDisplayName2,
            optDescription2,
            optActions2,
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
          name: "update-gitlab-server-trigger",
          description: "Updates the trigger",
          options: [
            optTriggerId,
            optDisplayName2,
            optDescription2,
            optActions2,
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
          name: "create-vbs-trigger",
          description: "Creates a new trigger",
          options: [
            optProjectId4,
            optActions,
            optDisplayName2,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optConnectionId2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-vbs-trigger",
          description: "Updates the trigger",
          options: [
            optTriggerId,
            optDisplayName2,
            optDescription2,
            optActions2,
            optFreeformTags,
            optDefinedTags,
            optConnectionId2,
            optIfMatch,
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
      name: "build-pipeline-stage",
      description: "A single node in a build pipeline",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes a stage based on the stage ID provided in the request",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId3,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Retrieves a stage based on the stage ID provided in the request",
          options: [optStageId3, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a list of all stages in a compartment or build pipeline",
          options: [
            optId,
            {
              name: "--build-pipeline-id",
              description: "The OCID of the parent build pipeline",
              args: { name: "build-pipeline-id" },
            },
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return the stages that matches the given lifecycle state",
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
            optDisplayName3,
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
          name: "create-build-stage",
          description: "Creates a new stage",
          options: [
            optBuildPipelineId,
            {
              name: "--image",
              description: "Image name for the build environment",
              args: { name: "image" },
              isRequired: true,
            },
            {
              name: "--build-source-collection",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName6,
            optDescription7,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--build-spec-file",
              description:
                "The path to the build specification file for this environment",
              args: { name: "build-spec-file", template: "filepaths" },
            },
            {
              name: "--stage-execution-timeout-in-seconds",
              description: "Timeout for the build stage execution",
              args: { name: "integer" },
            },
            {
              name: "--primary-build-source",
              description:
                "Name of the build source where the build_spec.yml file is located",
              args: { name: "primary-build-source" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStagePredecessorCollection2,
            optNetworkChannel,
            { name: "--build-runner-config", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "create-wait-stage",
          description: "Creates a new stage",
          options: [
            optBuildPipelineId,
            {
              name: "--wait-criteria",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName6,
            optDescription7,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStagePredecessorCollection2,
            optFromJson,
          ],
        },
        {
          name: "create-deliver-artifact-stage",
          description: "Creates a new stage",
          options: [
            optBuildPipelineId,
            {
              name: "--deliver-artifact-collection",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName6,
            optDescription7,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStagePredecessorCollection2,
            optFromJson,
          ],
        },
        {
          name: "create-trigger-deployment-stage",
          description: "Creates a new stage",
          options: [
            optBuildPipelineId,
            {
              name: "--deploy-pipeline-id",
              description:
                "A target deployment pipeline OCID that will run in this stage",
              args: { name: "deploy-pipeline-id" },
              isRequired: true,
            },
            {
              name: "--is-pass-all-parameters-enabled",
              description:
                "A boolean flag that specifies whether all the parameters must be passed when the deployment is triggered",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optDisplayName6,
            optDescription7,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStagePredecessorCollection2,
            optFromJson,
          ],
        },
        {
          name: "update-build-stage",
          description:
            "Updates the stage based on the stage ID provided in the request",
          options: [
            optDisplayName6,
            optDescription6,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--image",
              description: "Image name for the build environment",
              args: { name: "image" },
            },
            {
              name: "--build-spec-file",
              description:
                "The path to the build specification file for this environment",
              args: { name: "build-spec-file", template: "filepaths" },
            },
            {
              name: "--stage-execution-timeout-in-seconds",
              description: "Timeout for the build stage execution",
              args: { name: "integer" },
            },
            { name: "--build-source-collection", args: { name: "json" } },
            {
              name: "--primary-build-source",
              description:
                "Name of the build source where the build_spec.yml file is located",
              args: { name: "primary-build-source" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId3,
            optStagePredecessorCollection,
            optNetworkChannel,
            { name: "--build-runner-config", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "update-wait-stage",
          description:
            "Updates the stage based on the stage ID provided in the request",
          options: [
            optDisplayName6,
            optDescription6,
            optFreeformTags,
            optDefinedTags,
            { name: "--wait-criteria", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId3,
            optStagePredecessorCollection,
            optFromJson,
          ],
        },
        {
          name: "update-deliver-artifact-stage",
          description:
            "Updates the stage based on the stage ID provided in the request",
          options: [
            optDisplayName6,
            optDescription6,
            optFreeformTags,
            optDefinedTags,
            { name: "--deliver-artifact-collection", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId3,
            optStagePredecessorCollection,
            optFromJson,
          ],
        },
        {
          name: "update-trigger-deployment-stage",
          description:
            "Updates the stage based on the stage ID provided in the request",
          options: [
            optDisplayName6,
            optDescription6,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--deploy-pipeline-id",
              description:
                "A target deployment pipeline OCID that will run in this stage",
              args: { name: "deploy-pipeline-id" },
            },
            {
              name: "--is-pass-all-parameters-enabled",
              description:
                "A boolean flag that specifies whether all the parameters must be passed when the deployment is triggered",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId3,
            optStagePredecessorCollection,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "deploy-environment",
      description:
        "The target OCI resources, such as Compute instances, Container Engine for Kubernetes(OKE) clusters",
      subcommands: [
        {
          name: "create-compute-instance-environment",
          description: "Creates a new deployment environment",
          options: [
            optProjectId2,
            {
              name: "--compute-instance-group-selectors",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription5,
            optDisplayName7,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-environment",
          description: "Creates a new deployment environment",
          options: [
            optProjectId2,
            {
              name: "--function-id",
              description: "The OCID of the Function",
              args: { name: "function-id" },
              isRequired: true,
            },
            optDescription5,
            optDisplayName7,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-oke-cluster-environment",
          description: "Creates a new deployment environment",
          options: [
            optProjectId2,
            {
              name: "--cluster-id",
              description: "The OCID of the Kubernetes cluster",
              args: { name: "cluster-id" },
              isRequired: true,
            },
            optDescription5,
            optDisplayName7,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optNetworkChannel,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of deployment environments",
          options: [
            optProjectId3,
            optCompartmentId,
            optId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only DeployEnvironments that matches the given lifecycleState",
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
            optDisplayName3,
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
          description: "Updates the deployment environment",
          options: [
            optDescription5,
            optDisplayName7,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optEnvironmentId,
            optFromJson,
          ],
        },
        {
          name: "update-compute-instance-environment",
          description: "Updates the deployment environment",
          options: [
            optDescription5,
            optDisplayName7,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            {
              name: "--compute-instance-group-selectors",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optEnvironmentId,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a deployment environment resource by identifier",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optEnvironmentId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a deployment environment by identifier",
          options: [optEnvironmentId, optFromJson],
        },
        {
          name: "update-function-environment",
          description: "Updates the deployment environment",
          options: [
            optDescription5,
            optDisplayName7,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            {
              name: "--function-id",
              description: "The OCID of the Function",
              args: { name: "function-id" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optEnvironmentId,
            optFromJson,
          ],
        },
        {
          name: "update-oke-cluster-environment",
          description: "Updates the deployment environment",
          options: [
            optDescription5,
            optDisplayName7,
            optFreeformTags,
            optDefinedTags,
            optSecurityAttributes,
            {
              name: "--cluster-id",
              description: "The OCID of the Kubernetes cluster",
              args: { name: "cluster-id" },
            },
            optNetworkChannel,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optEnvironmentId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "build-run",
      description:
        "Each time you attempt to run a build pipeline you create one build run",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancels the build run based on the build run ID provided in the request",
          options: [
            {
              name: "--reason",
              description: "The reason for canceling the build run",
              args: { name: "reason" },
              isRequired: true,
            },
            optBuildRunId,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Starts a build pipeline run for a predefined build pipeline",
          options: [
            optBuildPipelineId,
            {
              name: "--display-name",
              description:
                "Build run display name, which can be renamed and is not necessarily unique",
              args: { name: "display-name" },
            },
            { name: "--commit-info", args: { name: "json" } },
            { name: "--build-run-arguments", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Returns the details of a build run for a given build run ID",
          options: [optBuildRunId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the build run",
          options: [
            optBuildRunId,
            {
              name: "--display-name",
              description: "Build run display name",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of build run summary",
          options: [
            optId,
            {
              name: "--build-pipeline-id",
              description: "Unique build pipeline identifier",
              args: { name: "build-pipeline-id" },
            },
            optProjectId3,
            optCompartmentId,
            optDisplayName3,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only build runs that matches the given lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "DELETING",
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
      name: "work-request-log",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description: "Returns a list of logs for a given work request",
          options: [
            optWorkRequestId,
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
      name: "pull-request-comment",
      description:
        "Pull Request Comment includes all the comment resources under a pull request",
      subcommands: [
        {
          name: "create-pull-request-comment",
          description: "Creates a new PullRequest comment",
          options: [
            optPullRequestId,
            {
              name: "--data",
              description: "Content of the Comment",
              args: { name: "data" },
              isRequired: true,
            },
            {
              name: "--parent-id",
              description: "ID of parent Comment",
              args: { name: "parent-id" },
            },
            {
              name: "--file-path",
              description: "File path in the commit",
              args: { name: "file-path" },
            },
            {
              name: "--commit-id",
              description: "Commit SHA",
              args: { name: "commit-id" },
            },
            {
              name: "--file-type",
              description: "File path in the target commit",
              args: { name: "file-type" },
            },
            {
              name: "--line-number",
              description: "Line number in the file",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete-pull-request-comment",
          description: "Deletes a PullRequest comment by identifier",
          options: [
            optPullRequestId,
            optCommentId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get-pull-request-comment",
          description: "Get PullRequest comment by identifier",
          options: [optPullRequestId, optCommentId, optFromJson],
        },
        {
          name: "like-pull-request-comment",
          description: "Like a PullRequest comment",
          options: [optPullRequestId, optCommentId, optIfMatch, optFromJson],
        },
        {
          name: "list-pull-request-comments",
          description: "List PullRequest level comments by identifier",
          options: [
            optPullRequestId,
            optCompartmentId,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "createdBy"] },
            },
            {
              name: "--comment-id",
              description: "Unique PullRequest Comment identifier",
              args: { name: "comment-id" },
            },
            {
              name: "--commit-id",
              description: "PullRequest Comment Commit SHA",
              args: { name: "commit-id" },
            },
            {
              name: "--file-path",
              description: "PullRequest File Path",
              args: { name: "file-path" },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "unlike-pull-request-comment",
          description: "Unlike a PullRequest comment",
          options: [optPullRequestId, optCommentId, optIfMatch, optFromJson],
        },
        {
          name: "update-pull-request-comment",
          description: "Updates the PullRequest comment",
          options: [
            optPullRequestId,
            optCommentId,
            {
              name: "--data",
              description: "Pull Request comment content",
              args: { name: "data" },
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
