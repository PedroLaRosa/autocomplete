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
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
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
const optFsuCycleId: Fig.Option = {
  name: "--fsu-cycle-id",
  description: "Unique Exadata Fleet Update Cycle identifier",
  args: { name: "fsu-cycle-id" },
  isRequired: true,
};
const optDiagnosticsCollection: Fig.Option = {
  name: "--diagnostics-collection",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "Exadata Fleet Update Action display name",
  args: { name: "display-name" },
};
const optFsuActionId: Fig.Option = {
  name: "--fsu-action-id",
  description: "Unique Exadata Fleet Update Action identifier",
  args: { name: "fsu-action-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment Identifier",
  args: { name: "compartment-id" },
  isRequired: true,
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
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "Exadata Fleet Update Cycle display name",
  args: { name: "display-name" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optBatchingStrategy: Fig.Option = {
  name: "--batching-strategy",
  args: { name: "json" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the Compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optFsuCollectionId: Fig.Option = {
  name: "--fsu-collection-id",
  description: "Unique Exadata Fleet Update Collection identifier",
  args: { name: "fsu-collection-id" },
  isRequired: true,
};
const optScheduleDetails: Fig.Option = {
  name: "--schedule-details",
  args: { name: "json" },
};
const optGoalVersionDetails: Fig.Option = {
  name: "--goal-version-details",
  args: { name: "json" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optDisplayName4: Fig.Option = {
  name: "--display-name",
  description: "The user-friendly name for the Exadata Fleet Update Collection",
  args: { name: "display-name" },
};
const optFsuCycleId2: Fig.Option = {
  name: "--fsu-cycle-id",
  description:
    "OCID identifier for the Exadata Fleet Update Cycle the Action will be part of",
  args: { name: "fsu-cycle-id" },
  isRequired: true,
};
const optFsuDiscoveryId: Fig.Option = {
  name: "--fsu-discovery-id",
  description: "Unique Exadata Fleet Update Discovery identifier",
  args: { name: "fsu-discovery-id" },
  isRequired: true,
};
const optFsuJobId: Fig.Option = {
  name: "--fsu-job-id",
  description: "The OCID of the Exadata Fleet Update Job",
  args: { name: "fsu-job-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment into which the resource should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName5: Fig.Option = {
  name: "--display-name",
  description: "Exadata Fleet Update Collection display name",
  args: { name: "display-name" },
};
const optServiceType: Fig.Option = {
  name: "--service-type",
  description: "Exadata service type for the target resource members",
  args: { suggestions: ["EXACS", "EXACC", "EXADBXS"] },
  isRequired: true,
};
const optApplyActionSchedule: Fig.Option = {
  name: "--apply-action-schedule",
  args: { name: "json" },
};
const optDetailsServiceType: Fig.Option = {
  name: "--details-service-type",
  description: "Exadata service type for the target resource members",
  args: { suggestions: ["EXACS", "EXACC", "EXADBXS"] },
  isRequired: true,
};
const optDisplayName6: Fig.Option = {
  name: "--display-name",
  description: "The user-friendly name for the Exadata Fleet Update Cycle",
  args: { name: "display-name" },
};
const optFsuReadinessCheckId: Fig.Option = {
  name: "--fsu-readiness-check-id",
  description: "Unique Exadata Fleet Update Readiness Check identifier",
  args: { name: "fsu-readiness-check-id" },
  isRequired: true,
};
const optGoalVersionDetails2: Fig.Option = {
  name: "--goal-version-details",
  args: { name: "json" },
  isRequired: true,
};
const optStageActionSchedule: Fig.Option = {
  name: "--stage-action-schedule",
  args: { name: "json" },
};
const optBatchIsForceRolling: Fig.Option = {
  name: "--batch-is-force-rolling",
  description: "True to force rolling patching",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optDetailsCriteria: Fig.Option = {
  name: "--details-criteria",
  args: { name: "json" },
  isRequired: true,
};
const optFleetDiscovery: Fig.Option = {
  name: "--fleet-discovery",
  args: { name: "json" },
};
const optFsuCollectionId2: Fig.Option = {
  name: "--fsu-collection-id",
  description:
    "The OCID of the Exadata Fleet Update Collection which will be updated by the Exadata Fleet Update Cycle being",
  args: { name: "fsu-collection-id" },
  isRequired: true,
};
const optGoalVersionDetailsIsOlderVersionAcknowledged: Fig.Option = {
  name: "--goal-version-details-is-older-version-acknowledged",
  description:
    "Indicates whether the customer acknowledged the risk of selecting an older eligible software version for this",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeAccepted"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "fleet-software-update",
  description: "Exadata Fleet Update service",
  subcommands: [
    {
      name: "fsu-collection-target",
      description:
        "Details of a target member of a Exadata Fleet Update Collection",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a Exadata Fleet Update Collection Target by identifier",
          options: [
            optFsuCollectionId,
            {
              name: "--target-id",
              description: "Target resource OCID",
              args: { name: "target-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fsu-job-summary",
      description: "Exadata Fleet Update Job resource",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all the Exadata Fleet Update Jobs associated to the specified Exadata Fleet Update Action",
          options: [
            {
              name: "--fsu-action-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "fsu-action-id" },
              isRequired: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "UNKNOWN",
                  "TERMINATED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "SUCCEEDED",
                  "WAITING",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            optDisplayName3,
            optSortBy,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "target-summary-collection",
      description: "List of TargetSummary objects",
      subcommands: [
        {
          name: "list-collection",
          description:
            "Gets a list of all Targets that are members of a specific Exadata Fleet Update Collection",
          options: [
            optFsuCollectionId,
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--target-id",
              description:
                "A filter to return a resource whose target OCID matches the given OCID",
              args: { name: "target-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only entries whose status matches the given status",
              args: { suggestions: ["IDLE", "EXECUTING_JOB", "JOB_FAILED"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["currentVersion", "status"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-discovery",
          description:
            "Gets a list of all Targets in the results of a Exadata Fleet Update Discovery",
          options: [
            optFsuDiscoveryId,
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--target-id",
              description:
                "A filter to return a resource whose target OCID matches the given OCID",
              args: { name: "target-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only entries whose status matches the given status",
              args: { suggestions: ["IDLE", "EXECUTING_JOB", "JOB_FAILED"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["currentVersion", "status"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fsu-cycle",
      description: "Exadata Fleet Update Cycle resource details",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Exadata Fleet Update Cycle resource from one compartment identifier to another",
          options: [
            optFsuCycleId,
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "clone",
          description:
            "Clones existing Exadata Fleet Update Cycle details into a new Exadata Fleet Update Cycle resource",
          options: [
            optFsuCycleId,
            optGoalVersionDetails2,
            optDisplayName6,
            {
              name: "--compartment-id",
              description: "The OCID of the Compartment",
              args: { name: "compartment-id" },
            },
            {
              name: "--fsu-collection-id",
              description:
                "The OCID of the Exadata Fleet Update Collection which will be updated by the Exadata Fleet Update Cycle being",
              args: { name: "fsu-collection-id" },
            },
            optBatchingStrategy,
            optStageActionSchedule,
            optApplyActionSchedule,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Exadata Fleet Update Cycle",
          options: [
            optCompartmentId2,
            {
              name: "--type",
              description: "Type of Exadata Fleet Update Cycle",
              args: { suggestions: ["PATCH", "UPGRADE"] },
              isRequired: true,
            },
            optFsuCollectionId2,
            optGoalVersionDetails2,
            optDisplayName6,
            optBatchingStrategy,
            optStageActionSchedule,
            optApplyActionSchedule,
            optDiagnosticsCollection,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-fsu-cycle-create-upgrade-fsu-cycle",
          description: "Creates a new Exadata Fleet Update Cycle",
          options: [
            optCompartmentId2,
            optFsuCollectionId2,
            optGoalVersionDetails2,
            optDisplayName6,
            optBatchingStrategy,
            optStageActionSchedule,
            optApplyActionSchedule,
            optDiagnosticsCollection,
            optFreeformTags,
            optDefinedTags,
            { name: "--upgrade-details", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a Exadata Fleet Update Cycle resource by identifier",
          options: [
            optFsuCycleId,
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
          description: "Gets a Exadata Fleet Update Cycle by identifier",
          options: [optFsuCycleId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the Exadata Fleet Update Cycle identified by the ID",
          options: [
            optFsuCycleId,
            {
              name: "--type",
              description: "Type of Exadata Fleet Update Cycle to update",
              args: { suggestions: ["PATCH", "UPGRADE"] },
              isRequired: true,
            },
            optDisplayName2,
            optGoalVersionDetails,
            optBatchingStrategy,
            optDiagnosticsCollection,
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
          name: "update-fsu-cycle-update-upgrade-fsu-cycle",
          description:
            "Updates the Exadata Fleet Update Cycle identified by the ID",
          options: [
            optFsuCycleId,
            optDisplayName2,
            optGoalVersionDetails,
            optBatchingStrategy,
            optDiagnosticsCollection,
            optFreeformTags,
            optDefinedTags,
            { name: "--upgrade-details", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-fsu-cycle-exadb-stack-fsu-goal-version-details",
          description:
            "Updates the Exadata Fleet Update Cycle identified by the ID",
          options: [
            optFsuCycleId,
            {
              name: "--goal-version-details-components",
              description:
                "Details of goal versions for components in an Exadata software stack",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName2,
            optBatchingStrategy,
            optDiagnosticsCollection,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optGoalVersionDetailsIsOlderVersionAcknowledged,
            {
              name: "--goal-version-details-home-policy",
              description:
                "Goal home policy to use when Staging the Goal Version during patching",
              args: { suggestions: ["CREATE_NEW", "USE_EXISTING"] },
            },
            {
              name: "--goal-version-details-new-home-prefix",
              description:
                "Prefix name used for new DB home resources created as part of the Stage Action",
              args: { name: "goal-version-details-new-home-prefix" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-patch",
          description: "Creates a new Exadata Fleet Update Cycle",
          options: [
            optCompartmentId2,
            optFsuCollectionId2,
            optGoalVersionDetails2,
            optDisplayName6,
            optBatchingStrategy,
            optStageActionSchedule,
            optApplyActionSchedule,
            optDiagnosticsCollection,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-ignore-patches",
              description:
                "Ignore patch conflicts or missing patches between the source and goal homes",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-ignore-missing-patches",
              description: "List of identifiers of patches to ignore",
              args: { name: "json" },
            },
            {
              name: "--is-keep-placement",
              description:
                "Ensure that database services are online on the same VMs before and after the maintenance update",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--max-drain-timeout-in-sec",
              description: "Service drain timeout specified in seconds",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-image-id-target",
          description:
            "Updates the Exadata Fleet Update Cycle identified by the ID",
          options: [
            optFsuCycleId,
            optDisplayName2,
            optBatchingStrategy,
            optDiagnosticsCollection,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optGoalVersionDetailsIsOlderVersionAcknowledged,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--gvd-software-image-id",
              description: "Target database software image OCID. required",
              args: { name: "gvd-software-image-id" },
              isRequired: true,
            },
            {
              name: "--gvd-home-policy",
              description:
                "Goal home policy to use when Staging the Goal Version during patching",
              args: { suggestions: ["CREATE_NEW", "USE_EXITING"] },
            },
            {
              name: "--gvd-new-home-prefix",
              description:
                "Prefix name used for new DB home resources created as part of the Stage Action",
              args: { name: "gvd-new-home-prefix" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-none-batch",
          description:
            "Updates the Exadata Fleet Update Cycle identified by the ID",
          options: [
            optFsuCycleId,
            optDisplayName2,
            optGoalVersionDetails,
            optDiagnosticsCollection,
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
          name: "update-fifty-batch",
          description:
            "Updates the Exadata Fleet Update Cycle identified by the ID",
          options: [
            optFsuCycleId,
            optDisplayName2,
            optGoalVersionDetails,
            optDiagnosticsCollection,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optBatchIsForceRolling,
            {
              name: "--batch-is-wait-f-batch-res",
              description:
                "True to wait for customer to resume the Apply Action once the first half is done",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "update-non-rolling-batch",
          description:
            "Updates the Exadata Fleet Update Cycle identified by the ID",
          options: [
            optFsuCycleId,
            optDisplayName2,
            optGoalVersionDetails,
            optDiagnosticsCollection,
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
          name: "update-patch",
          description:
            "Updates the Exadata Fleet Update Cycle identified by the ID",
          options: [
            optFsuCycleId,
            optDisplayName2,
            optGoalVersionDetails,
            optBatchingStrategy,
            optDiagnosticsCollection,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-ignore-patches",
              description:
                "Ignore patch conflicts or missing patches between the source and goal homes",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-ignore-missing-patches",
              description: "List of identifiers of patches to ignore",
              args: { name: "json" },
            },
            {
              name: "--is-keep-placement",
              description:
                "Ensure that database services are online on the same VMs before and after the maintenance update",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "---max-drain-timeout-in-sec",
              description: "Service drain timeout specified in seconds",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-sequential-batch",
          description:
            "Updates the Exadata Fleet Update Cycle identified by the ID",
          options: [
            optFsuCycleId,
            optDisplayName2,
            optGoalVersionDetails,
            optDiagnosticsCollection,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optBatchIsForceRolling,
            optFromJson,
          ],
        },
        {
          name: "update-saf-batch",
          description:
            "Updates the Exadata Fleet Update Cycle identified by the ID",
          options: [
            optFsuCycleId,
            optDisplayName2,
            optGoalVersionDetails,
            optDiagnosticsCollection,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optBatchIsForceRolling,
            {
              name: "--batch-percentage",
              description:
                "Percentage of availability in the service during the Patch operation",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-version-target",
          description:
            "Updates the Exadata Fleet Update Cycle identified by the ID",
          options: [
            optFsuCycleId,
            optDisplayName2,
            optBatchingStrategy,
            optDiagnosticsCollection,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optGoalVersionDetailsIsOlderVersionAcknowledged,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--gvd-version",
              description:
                "Target DB or GI version string for the Exadata Fleet Update Cycle. required",
              args: { name: "gvd-version" },
              isRequired: true,
            },
            {
              name: "--gvd-home-policy",
              description:
                "Goal home policy to use when Staging the Goal Version during patching",
              args: { suggestions: ["CREATE_NEW", "USE_EXITING"] },
            },
            {
              name: "--gvd-new-home-prefix",
              description:
                "Prefix name used for new DB home resources created as part of the Stage Action",
              args: { name: "gvd-new-home-prefix" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fsu-readiness-check",
      description: "Exadata Fleet Update Readiness Check resource details",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Exadata Fleet Update Readiness Check resource from one compartment identifier to another",
          options: [
            optFsuReadinessCheckId,
            optCompartmentId4,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Exadata Fleet Update Readiness Check",
          options: [
            optCompartmentId2,
            {
              name: "--type",
              description: "Type of Exadata Fleet Update Readiness Check",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Exadata Fleet Update Readiness Check resource",
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
          name: "create-fsu-readiness-check-create-target-fsu-readiness-check-details",
          description: "Creates a new Exadata Fleet Update Readiness Check",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Exadata Fleet Update Readiness Check resource",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--targets",
              description:
                "List of targets that will run the Exadata Fleet Update Readiness Check",
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
          description:
            "Deletes a Exadata Fleet Update Readiness Check resource by identifier",
          options: [
            optFsuReadinessCheckId,
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
            "Gets a Exadata Fleet Update Readiness Check by identifier",
          options: [optFsuReadinessCheckId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the Exadata Fleet Update Readiness Check identified by the ID",
          options: [
            optFsuReadinessCheckId,
            {
              name: "--display-name",
              description:
                "Updated display name for the Exadata Fleet Update Readiness Check resource",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "SUCCEEDED",
                  "WAITING",
                  "CANCELING",
                  "CANCELED",
                  "DELETING",
                  "DELETED",
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
      name: "fsu-action",
      description: "Exadata Fleet Update Action resource details",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a scheduled Action",
          options: [optFsuActionId, optIfMatch, optFromJson],
        },
        {
          name: "change-compartment",
          description:
            "Moves a Exadata Fleet Update Action resource from one compartment identifier to another",
          options: [
            optFsuActionId,
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Exadata Fleet Update Action",
          options: [
            optCompartmentId,
            {
              name: "--type",
              description: "Type of Exadata Fleet Update Action",
              args: {
                suggestions: [
                  "STAGE",
                  "PRECHECK",
                  "APPLY",
                  "ROLLBACK_AND_REMOVE_TARGET",
                  "CLEANUP",
                  "ROLLBACK_MAINTENANCE_CYCLE",
                ],
              },
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
          name: "create-fsu-action-create-rollback-cycle-apply-action-details",
          description: "Creates a new Exadata Fleet Update Action",
          options: [
            optCompartmentId,
            optFsuCycleId2,
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
            "Deletes a Exadata Fleet Update Action resource by identifier",
          options: [
            optFsuActionId,
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
          description: "Gets a Exadata Fleet Update Action by identifier",
          options: [optFsuActionId, optFromJson],
        },
        {
          name: "resume",
          description:
            "Resumes an Action that has batches of targets waiting to execute",
          options: [optFsuActionId, optIfMatch, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the Exadata Fleet Update Action identified by the ID",
          options: [
            optFsuActionId,
            {
              name: "--type",
              description: "Type of Exadata Fleet Update Action to update",
              args: {
                suggestions: [
                  "STAGE",
                  "PRECHECK",
                  "APPLY",
                  "ROLLBACK_AND_REMOVE_TARGET",
                  "CLEANUP",
                  "ROLLBACK_MAINTENANCE_CYCLE",
                ],
              },
              isRequired: true,
            },
            optDisplayName,
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
          name: "update-fsu-action-update-rollback-cycle-action-details",
          description:
            "Updates the Exadata Fleet Update Action identified by the ID",
          options: [
            optFsuActionId,
            optDisplayName,
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
          name: "create-apply",
          description: "Creates a new Exadata Fleet Update Action",
          options: [
            optCompartmentId,
            optFsuCycleId2,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optScheduleDetails,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-cleanup",
          description: "Creates a new Exadata Fleet Update Action",
          options: [
            optCompartmentId,
            optFsuCycleId2,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optScheduleDetails,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-precheck",
          description: "Creates a new Exadata Fleet Update Action",
          options: [
            optCompartmentId,
            optFsuCycleId2,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optScheduleDetails,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-rollback",
          description: "Creates a new Exadata Fleet Update Action",
          options: [
            optCompartmentId,
            optFsuCycleId2,
            { name: "--details", args: { name: "json" }, isRequired: true },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optScheduleDetails,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-stage",
          description: "Creates a new Exadata Fleet Update Action",
          options: [
            optCompartmentId,
            optFsuCycleId2,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optScheduleDetails,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-output-content",
          description:
            "Gets the Exadata Fleet Update Action Output content as a binary file (string)",
          options: [
            optFsuActionId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-apply",
          description:
            "Updates the Exadata Fleet Update Action identified by the ID",
          options: [
            optFsuActionId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optScheduleDetails,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-cleanup",
          description:
            "Updates the Exadata Fleet Update Action identified by the ID",
          options: [
            optFsuActionId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optScheduleDetails,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-precheck",
          description:
            "Updates the Exadata Fleet Update Action identified by the ID",
          options: [
            optFsuActionId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optScheduleDetails,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-rollback",
          description:
            "Updates the Exadata Fleet Update Action identified by the ID",
          options: [
            optFsuActionId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optScheduleDetails,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-stage",
          description:
            "Updates the Exadata Fleet Update Action identified by the ID",
          options: [
            optFsuActionId,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optScheduleDetails,
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
      name: "fsu-job-output-summary",
      description: "Job output summary line",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the Exadata Fleet Update Job Output messages, if any",
          options: [
            optFsuJobId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fsu-cycle-summary",
      description: "Exadata Fleet Update Cycle Summary",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of all Exadata Fleet Update Cycles in a compartment",
          options: [
            optCompartmentId3,
            {
              name: "--fsu-collection-id",
              description:
                "A filter to return only resources whose fsuCollectionId matches the given fsuCollectionId",
              args: { name: "fsu-collection-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "IN_PROGRESS",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "SUCCEEDED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            {
              name: "--collection-type",
              description:
                "A filter to return only resources whose Collection type matches the given type",
              args: { suggestions: ["DB", "GI", "GUEST_OS", "EXADB_STACK"] },
            },
            optDisplayName3,
            {
              name: "--target-version",
              description:
                "A filter to return only entries whose targetVersion matches the given targetVersion",
              args: { name: "target-version" },
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
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a paginated list of logs for a specified Work Request",
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
      name: "fsu-collection",
      description: "Exadata Fleet Update Collection Resource",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Exadata Fleet Update Collection resource from one compartment identifier to another",
          options: [
            optFsuCollectionId,
            optCompartmentId4,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Exadata Fleet Update Collection",
          options: [
            {
              name: "--type",
              description: "Collection type",
              args: { suggestions: ["DB", "GI", "GUEST_OS", "EXADB_STACK"] },
              isRequired: true,
            },
            optServiceType,
            optCompartmentId2,
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
          name: "delete",
          description:
            "Deletes a Exadata Fleet Update Collection resource by identifier",
          options: [
            optFsuCollectionId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete-fsu-collection-target",
          description:
            "Removes a target from an existing Exadata Fleet Update Collection",
          options: [
            optFsuCollectionId,
            {
              name: "--target-id",
              description: "Target resource OCID",
              args: { name: "target-id" },
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
          description: "Gets a Exadata Fleet Update Collection by identifier",
          options: [optFsuCollectionId, optFromJson],
        },
        {
          name: "remove",
          description:
            "Removes targets from an existing Exadata Fleet Update Collection",
          options: [
            optFsuCollectionId,
            {
              name: "--removal-strategy",
              description:
                "Strategy to follow for removal of targets: TARGET_IDS: Remove a list of targets",
              args: { suggestions: ["TARGET_IDS"] },
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
          description:
            "Updates the Exadata Fleet Update Collection identified by the ID",
          options: [
            optFsuCollectionId,
            optDisplayName4,
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
          name: "add-targets",
          description:
            "Adds targets to an existing Exadata Fleet Update Collection",
          options: [
            optFsuCollectionId,
            {
              name: "--targets",
              description:
                "List of Targets to add into the Exadata Fleet Update Collection",
              args: { name: "json" },
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
          name: "create-db",
          description: "Creates a new Exadata Fleet Update Collection",
          options: [
            optServiceType,
            optCompartmentId2,
            {
              name: "--source-major-version",
              description:
                "Database Major Version of targets to be included in the Exadata Fleet Update Collection",
              args: {
                suggestions: [
                  "DB_11204",
                  "DB_121",
                  "DB_122",
                  "DB_18",
                  "DB_19",
                  "DB_23",
                  "DB_26",
                ],
              },
              isRequired: true,
            },
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            optFleetDiscovery,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-gi",
          description: "Creates a new Exadata Fleet Update Collection",
          options: [
            optServiceType,
            optCompartmentId2,
            {
              name: "--source-major-version",
              description:
                "Grid Infrastructure Major Version of targets to be included in the Exadata Fleet Update Collection",
              args: { suggestions: ["GI_18", "GI_19", "GI_23", "GI_26"] },
              isRequired: true,
            },
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            optFleetDiscovery,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-targets",
          description:
            "Removes targets from an existing Exadata Fleet Update Collection",
          options: [
            optFsuCollectionId,
            {
              name: "--targets",
              description:
                "List of target entries to remove from the Exadata Fleet Update Collection",
              args: { name: "json" },
              isRequired: true,
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
          name: "create-guest-os",
          description: "Creates a new Exadata Fleet Update Collection",
          options: [
            optServiceType,
            optCompartmentId2,
            {
              name: "--source-major-version",
              description:
                "Major version of Exadata Image (Guest OS) release for Exadata VM Cluster targets to be included in",
              args: {
                suggestions: ["EXA_OL_5", "EXA_OL_6", "EXA_OL_7", "EXA_OL_8"],
              },
              isRequired: true,
            },
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
            optFleetDiscovery,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-exadb-stack",
          description: "Creates a new Exadata Fleet Update Collection",
          options: [
            optServiceType,
            optCompartmentId2,
            {
              name: "--components",
              description: "Details of components in an Exadata software stack",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName4,
            optFreeformTags,
            optDefinedTags,
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
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the status of the work request with the specified ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId3,
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
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
      name: "fsu-job",
      description: "Exadata Fleet Update Job resource",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes the Exadata Fleet Update Job resource by identifier",
          options: [
            optFsuJobId,
            optIfMatch,
            optForce2,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "UNKNOWN",
                  "TERMINATED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "SUCCEEDED",
                  "WAITING",
                  "CANCELING",
                  "CANCELED",
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
          description: "Gets a Exadata Fleet Update Job by identifier",
          options: [optFsuJobId, optFromJson],
        },
        {
          name: "retry",
          description:
            "Retry a failed Job, only while the current Action is being executed",
          options: [optFsuJobId, optIfMatch, optFromJson],
        },
        {
          name: "update",
          description: "Updates Exadata Fleet Update Job resource details",
          options: [
            optFsuJobId,
            {
              name: "--display-name",
              description: "Name of the job",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "UNKNOWN",
                  "TERMINATED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "SUCCEEDED",
                  "WAITING",
                  "CANCELING",
                  "CANCELED",
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
          name: "get-output-content",
          description:
            "Get the Exadata Fleet Update Job Output content as a binary file (string)",
          options: [
            optFsuJobId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fsu-discovery",
      description: "Exadata Fleet Update Discovery resource details",
      subcommands: [
        {
          name: "abort",
          description: "Aborts Exadata Fleet Update Discovery in progress",
          options: [optFsuDiscoveryId, optIfMatch, optFromJson],
        },
        {
          name: "change-compartment",
          description:
            "Moves a Exadata Fleet Update Discovery resource from one compartment identifier to another",
          options: [
            optFsuDiscoveryId,
            optCompartmentId4,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Exadata Fleet Update Discovery",
          options: [
            optCompartmentId,
            { name: "--details", args: { name: "json" }, isRequired: true },
            optDisplayName5,
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
            "Deletes a Exadata Fleet Update Discovery resource by identifier",
          options: [
            optFsuDiscoveryId,
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
          description: "Gets a Exadata Fleet Update Discovery by identifier",
          options: [optFsuDiscoveryId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the Exadata Fleet Update Discovery identified by the ID",
          options: [
            optFsuDiscoveryId,
            {
              name: "--display-name",
              description: "Fleet Software Update Collection display name",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "create-db",
          description: "Creates a new Exadata Fleet Update Discovery",
          options: [
            optCompartmentId,
            optDetailsServiceType,
            {
              name: "--details-source-major-version",
              description:
                "Database Major Version of targets to be included in the Exadata Fleet Update Discovery results",
              args: {
                suggestions: [
                  "DB_11204",
                  "DB_121",
                  "DB_122",
                  "DB_18",
                  "DB_19",
                  "DB_23",
                  "DB_26",
                ],
              },
              isRequired: true,
            },
            optDetailsCriteria,
            optDisplayName5,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-gi",
          description: "Creates a new Exadata Fleet Update Discovery",
          options: [
            optCompartmentId,
            optDetailsServiceType,
            {
              name: "--details-source-major-version",
              description:
                "Grid Infrastructure Major Version of targets to be included in the Exadata Fleet Update Discovery results",
              args: { suggestions: ["GI_18", "GI_19", "GI_23", "GI_26"] },
              isRequired: true,
            },
            optDetailsCriteria,
            optDisplayName5,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-guest-os",
          description: "Creates a new Exadata Fleet Update Discovery",
          options: [
            optCompartmentId,
            optDetailsServiceType,
            {
              name: "--details-source-major-version",
              description:
                "Major version of Exadata Image (Guest OS) release for Exadata VM Cluster targets to be included in",
              args: {
                suggestions: ["EXA_OL_5", "EXA_OL_6", "EXA_OL_7", "EXA_OL_8"],
              },
              isRequired: true,
            },
            optDetailsCriteria,
            optDisplayName5,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-exadb-stack",
          description: "Creates a new Exadata Fleet Update Discovery",
          options: [
            optCompartmentId,
            optDetailsServiceType,
            {
              name: "--details-components",
              description:
                "Discovery filter details of components in an Exadata software stack",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName5,
            optFreeformTags,
            optDefinedTags,
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
            "Returns a paginated list of errors for a specified Work Request",
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
      name: "fsu-discovery-summary",
      description: "Exadata Fleet Update Discovery Resource",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a list of Exadata Fleet Update Discoveries resources in the specified compartment",
          options: [
            optCompartmentId3,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "DELETING",
                  "DELETED",
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
      name: "fsu-readiness-check-summary",
      description: "Exadata Fleet Update Readiness Check Resource",
      subcommands: [
        {
          name: "list-fsu-readiness-checks",
          description:
            "Returns a list of Exadata Fleet Update Readiness Checks resources in the specified compartment",
          options: [
            optCompartmentId3,
            {
              name: "--resource-id",
              description:
                "The OCID of the resource related to the Exadata Fleet Update Readiness Check",
              args: { name: "resource-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the specified lifecycleState",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "SUCCEEDED",
                  "WAITING",
                  "CANCELING",
                  "CANCELED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optDisplayName3,
            {
              name: "--type",
              description:
                "A filter to return only resources whose type matches the specified type",
              args: { suggestions: ["TARGET"] },
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
      name: "fsu-action-summary",
      description: "List of FsuActionSummary objects",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of all Exadata Fleet Update Actions in a compartment",
          options: [
            optCompartmentId3,
            {
              name: "--fsu-cycle-id",
              description:
                "A filter to return only resources whose fsuCycleId matches the given fleetSoftwareUpdateCycleId",
              args: { name: "fsu-cycle-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "UPDATING",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "UNKNOWN",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optDisplayName3,
            {
              name: "--type",
              description:
                "A filter to return only resources whose type matches the given type",
              args: {
                suggestions: [
                  "STAGE",
                  "PRECHECK",
                  "APPLY",
                  "ROLLBACK_AND_REMOVE_TARGET",
                  "CLEANUP",
                  "ROLLBACK_MAINTENANCE_CYCLE",
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
      name: "fsu-collection-summary",
      description: "List of FsuCollectionSummary objects",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of all Exadata Fleet Update Collections in a compartment",
          options: [
            optCompartmentId3,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "NEEDS_ATTENTION",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName3,
            {
              name: "--type",
              description:
                "A filter to return only resources whose type matches the given type",
              args: { suggestions: ["DB", "GI", "GUEST_OS", "EXADB_STACK"] },
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
};

export default completionSpec;
