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
      "NEEDS_ATTENTION",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
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
const optDescription: Fig.Option = {
  name: "--description",
  description: "A user-friendly description",
  args: { name: "description" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
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
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optFleetId: Fig.Option = {
  name: "--fleet-id",
  description: "Unique Fleet identifier",
  args: { name: "fleet-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire display name given",
  args: { name: "display-name" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "Compartment OCID",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
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
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description: "OCID of the compartment to which the resource belongs to",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optPlatformConfigurationId: Fig.Option = {
  name: "--platform-configuration-id",
  description: "Unique PlatformConfiguration identifier",
  args: { name: "platform-configuration-id" },
  isRequired: true,
};
const optSchedulerJobId: Fig.Option = {
  name: "--scheduler-job-id",
  description: "Unique SchedulerJob identifier",
  args: { name: "scheduler-job-id" },
  isRequired: true,
};
const optEnvironmentType: Fig.Option = {
  name: "--environment-type",
  description: "Environment Type associated with the Fleet",
  args: { name: "environment-type" },
};
const optIsTargetAutoConfirm: Fig.Option = {
  name: "--is-target-auto-confirm",
  description:
    "A value that represents if auto-confirming of the targets can be enabled",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optNotificationPreferences: Fig.Option = {
  name: "--notification-preferences",
  description: "Notification Preferences associated with the Fleet",
  args: { name: "json" },
};
const optProducts: Fig.Option = {
  name: "--products",
  description: "Products associated with the Fleet",
  args: { name: "json" },
};
const optCompartmentIdInSubtree: Fig.Option = {
  name: "--compartment-id-in-subtree",
  description:
    "If set to true, resources will be returned for not only the provided compartment",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optRunbookId: Fig.Option = {
  name: "--runbook-id",
  description: "Unique Runbook identifier",
  args: { name: "runbook-id" },
  isRequired: true,
};
const optGracePeriod: Fig.Option = {
  name: "--grace-period",
  description:
    "Grace period in days,weeks,months or years the exemption is applicable for the rule",
  args: { name: "grace-period" },
};
const optSeverity: Fig.Option = {
  name: "--severity",
  description: "Severity to which this CompliancePolicyRule applies",
  args: { suggestions: ["CRITICAL", "HIGH", "MEDIUM", "LOW"] },
};
const optCatalogItemId: Fig.Option = {
  name: "--catalog-item-id",
  description: "The OCID of the CatalogItem",
  args: { name: "catalog-item-id" },
  isRequired: true,
};
const optCredentials: Fig.Option = {
  name: "--credentials",
  description: "Credentials associated with the Fleet",
  args: { name: "json" },
};
const optParentFleetId: Fig.Option = {
  name: "--parent-fleet-id",
  description: "The OCID of the fleet that would be the parent for this fleet",
  args: { name: "parent-fleet-id" },
};
const optProperties: Fig.Option = {
  name: "--properties",
  description: "Properties associated with the Fleet",
  args: { name: "json" },
};
const optResources: Fig.Option = {
  name: "--resources",
  description:
    "Resources associated with the Fleet if resourceSelectionType is MANUAL",
  args: { name: "json" },
};
const optVersionDescription: Fig.Option = {
  name: "--version-description",
  description: "Version description about the catalog item",
  args: { name: "version-description" },
};
const optCompartmentId5: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompliancePolicyRuleId: Fig.Option = {
  name: "--compliance-policy-rule-id",
  description: "Unique CompliancePolicyRule identifier",
  args: { name: "compliance-policy-rule-id" },
  isRequired: true,
};
const optIsItemLocked: Fig.Option = {
  name: "--is-item-locked",
  description: "Indicates if the CatalogItem is immutable or not",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optPatchId: Fig.Option = {
  name: "--patch-id",
  description: "Unique Patch identifier",
  args: { name: "patch-id" },
  isRequired: true,
};
const optRunBooks: Fig.Option = {
  name: "--run-books",
  description: "Runbooks",
  args: { name: "json" },
};
const optRunbookVersionId: Fig.Option = {
  name: "--runbook-version-id",
  description: "Unique Runbook Version identifier",
  args: { name: "runbook-version-id" },
  isRequired: true,
};
const optSchedulerDefinitionId: Fig.Option = {
  name: "--scheduler-definition-id",
  description: "Unique SchedulerDefinition identifier",
  args: { name: "scheduler-definition-id" },
  isRequired: true,
};
const optShortDescription: Fig.Option = {
  name: "--short-description",
  description: "Short description about the catalog item",
  args: { name: "short-description" },
};
const optConfigSourceType: Fig.Option = {
  name: "--config-source-type",
  description:
    "Config source type Eg: STACK_TEMPLATE_CATALOG_SOURCE, PAR_CATALOG_SOURCE, GIT_CATALOG_SOURCE",
  args: { name: "config-source-type" },
  isRequired: true,
};
const optContentDestination: Fig.Option = {
  name: "--content-destination",
  args: { name: "json" },
  isRequired: true,
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "The description of the CatalogItem",
  args: { name: "description" },
  isRequired: true,
};
const optDisplayName4: Fig.Option = {
  name: "--display-name",
  description: "The CatalogItem name",
  args: { name: "display-name" },
  isRequired: true,
};
const optJobActivityId: Fig.Option = {
  name: "--job-activity-id",
  description: "Unique jobActivity identifier",
  args: { name: "job-activity-id" },
  isRequired: true,
};
const optListingId: Fig.Option = {
  name: "--listing-id",
  description: "The catalog listing Id",
  args: { name: "listing-id" },
};
const optListingVersion: Fig.Option = {
  name: "--listing-version",
  description: "The catalog package version",
  args: { name: "listing-version" },
};
const optOnboardingId: Fig.Option = {
  name: "--onboarding-id",
  description:
    "A filter to return resources whose Onboarding identifier matches the given identifier",
  args: { name: "onboarding-id" },
  isRequired: true,
};
const optPackageType: Fig.Option = {
  name: "--package-type",
  description:
    "Config package type Eg: TF_PACKAGE, NON_TF_PACKAGE, CONFIG_FILE",
  args: { name: "package-type" },
  isRequired: true,
};
const optResourceId: Fig.Option = {
  name: "--resource-id",
  description: "Resource Identifier",
  args: { name: "resource-id" },
};
const optResourceSelection: Fig.Option = {
  name: "--resource-selection",
  args: { name: "json" },
  isRequired: true,
};
const optTargetName: Fig.Option = {
  name: "--target-name",
  description: "Unique target name",
  args: { name: "target-name" },
};
const optTimeReleased: Fig.Option = {
  name: "--time-released",
  description:
    "The date and time the CatalogItem was released, in the format defined by RFC 3339",
  args: { name: "datetime" },
};
const optCatalogSourcePayloadWorkingDirectory: Fig.Option = {
  name: "--catalog-source-payload-working-directory",
  description: "File path to the directory to use for running Terraform",
  args: {
    name: "catalog-source-payload-working-directory",
    template: "folders",
  },
};
const optCompliancePolicyId: Fig.Option = {
  name: "--compliance-policy-id",
  description:
    "Unique OCID of the CompliancePolicy this CompliancePolicyRule belongs to",
  args: { name: "compliance-policy-id" },
  isRequired: true,
};
const optDetails: Fig.Option = { name: "--details", args: { name: "json" } };
const optFleetId2: Fig.Option = {
  name: "--fleet-id",
  description: "Unique Fleet identifier",
  args: { name: "fleet-id" },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources that match the given lifecycle state",
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
};
const optPatchTypeId: Fig.Option = {
  name: "--patch-type-id",
  description:
    "PlatformConfiguration OCID for the patch type to which this CompliancePolicyRule applies",
  args: { name: "json" },
  isRequired: true,
};
const optPatchTypeId2: Fig.Option = {
  name: "--patch-type-id",
  description:
    "PlatformConfiguration OCID for the patch type to which this CompliancePolicyRule applies",
  args: { name: "json" },
};
const optProductVersion: Fig.Option = {
  name: "--product-version",
  args: { name: "json" },
  isRequired: true,
};
const optProductVersion2: Fig.Option = {
  name: "--product-version",
  args: { name: "json" },
};
const optPropertyId: Fig.Option = {
  name: "--property-id",
  description: "Unique Property identifier",
  args: { name: "property-id" },
  isRequired: true,
};
const optProvisionId: Fig.Option = {
  name: "--provision-id",
  description: "The OCID of the FamProvision",
  args: { name: "provision-id" },
  isRequired: true,
};
const optRunbookId2: Fig.Option = {
  name: "--runbook-id",
  description: "The OCID of the resource",
  args: { name: "runbook-id" },
  isRequired: true,
};
const optScheduleExecutionStartdate: Fig.Option = {
  name: "--schedule-execution-startdate",
  description: "Start Date for the schedule",
  args: { name: "datetime" },
  isRequired: true,
};
const optSeverity2: Fig.Option = {
  name: "--severity",
  description: "Patch severity",
  args: { suggestions: ["CRITICAL", "HIGH", "MEDIUM", "LOW"] },
};
const optTaskRecordId: Fig.Option = {
  name: "--task-record-id",
  description: "The OCID of the task record",
  args: { name: "task-record-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACTIVE",
      "INACTIVE",
      "DELETED",
      "DELETING",
      "FAILED",
      "UPDATING",
    ],
  },
  isRepeatable: true,
};
const optActionGroups: Fig.Option = {
  name: "--action-groups",
  description: "Action Groups associated with the Schedule",
  args: { name: "json" },
  isRequired: true,
};
const optActionGroups2: Fig.Option = {
  name: "--action-groups",
  description: "Action Groups associated with the Schedule",
  args: { name: "json" },
};
const optContentSource: Fig.Option = {
  name: "--content-source",
  args: { name: "json" },
  isRequired: true,
};
const optDependentPatches: Fig.Option = {
  name: "--dependent-patches",
  description: "Dependent Patches for this patch",
  args: { name: "json" },
};
const optDependentPatches2: Fig.Option = {
  name: "--dependent-patches",
  description: "Dependent Patches",
  args: { name: "json" },
};
const optExportAs: Fig.Option = {
  name: "--export-as",
  description: "Export Runbook As Type",
  args: { suggestions: ["TERRAFORM", "NON_TERRAFORM"] },
};
const optFleetCredentialId: Fig.Option = {
  name: "--fleet-credential-id",
  description: "Unique FleetCredential identifier",
  args: { name: "fleet-credential-id" },
  isRequired: true,
};
const optFleetPropertyId: Fig.Option = {
  name: "--fleet-property-id",
  description: "Unique fleetProperty identifier",
  args: { name: "fleet-property-id" },
  isRequired: true,
};
const optFleetResourceId: Fig.Option = {
  name: "--fleet-resource-id",
  description: "Unique FleetResource identifier",
  args: { name: "fleet-resource-id" },
  isRequired: true,
};
const optId: Fig.Option = {
  name: "--id",
  description: "Unique identifier or OCID for listing a single Runbook by id",
  args: { name: "id" },
};
const optMaintenanceWindowId: Fig.Option = {
  name: "--maintenance-window-id",
  description: "Unique MaintenanceWindow identifier",
  args: { name: "maintenance-window-id" },
  isRequired: true,
};
const optName: Fig.Option = {
  name: "--name",
  description: "A user-friendly name",
  args: { name: "name" },
  isRequired: true,
};
const optPatchType: Fig.Option = {
  name: "--patch-type",
  args: { name: "json" },
  isRequired: true,
};
const optPatchType2: Fig.Option = {
  name: "--patch-type",
  args: { name: "json" },
};
const optProduct: Fig.Option = {
  name: "--product",
  args: { name: "json" },
  isRequired: true,
};
const optProduct2: Fig.Option = { name: "--product", args: { name: "json" } };
const optRequiredValues: Fig.Option = {
  name: "--required-values",
  description: "List of required values",
  args: { name: "json" },
};
const optResourceTaskId: Fig.Option = {
  name: "--resource-task-id",
  description: "Task Id",
  args: { name: "resource-task-id" },
};
const optRunbookId3: Fig.Option = {
  name: "--runbook-id",
  description:
    "A filter to return only schedule definitions whose associated runbookId matches the given runbookId",
  args: { name: "runbook-id" },
};
const optSequence: Fig.Option = {
  name: "--sequence",
  description: "Task Order Sequence",
  args: { name: "sequence" },
};
const optSeverity3: Fig.Option = {
  name: "--severity",
  description: "Patch Severity",
  args: { suggestions: ["CRITICAL", "HIGH", "MEDIUM", "LOW"] },
  isRequired: true,
};
const optSeverity4: Fig.Option = {
  name: "--severity",
  description: "Patch Severity",
  args: { suggestions: ["CRITICAL", "HIGH", "MEDIUM", "LOW"] },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeStarted"] },
};
const optStepName: Fig.Option = {
  name: "--step-name",
  description: "Unique step name",
  args: { name: "step-name" },
};
const optTargetId: Fig.Option = {
  name: "--target-id",
  description: "Target Id",
  args: { name: "target-id" },
};
const optTargetName2: Fig.Option = {
  name: "--target-name",
  description: "Target name",
  args: { name: "target-name" },
};
const optTimeReleased2: Fig.Option = {
  name: "--time-released",
  description: "Date when the patch was released",
  args: { name: "datetime" },
  isRequired: true,
};
const optTimeReleased3: Fig.Option = {
  name: "--time-released",
  description: "Date when the patch was released",
  args: { name: "datetime" },
};
const optTimeScheduledGreaterThanOrEqualTo: Fig.Option = {
  name: "--time-scheduled-greater-than-or-equal-to",
  description: "Scheduled Time",
  args: { name: "datetime" },
};
const optTimeScheduledLessThan: Fig.Option = {
  name: "--time-scheduled-less-than",
  description: "Scheduled Time",
  args: { name: "datetime" },
};
const optVersionParameterconflict: Fig.Option = {
  name: "--version-parameterconflict",
  description: "Export Runbook Version Details",
  args: { name: "number" },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED", "FAILED", "UPDATING"] },
  isRepeatable: true,
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACTIVE",
      "INACTIVE",
      "CREATING",
      "DELETED",
      "DELETING",
      "FAILED",
      "UPDATING",
      "NEEDS_ATTENTION",
    ],
  },
  isRepeatable: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "fleet-apps-management",
  description: "Fleet Application Management Service",
  subcommands: [
    {
      name: "fleet",
      description:
        "A fleet is a collection or grouping of resources based on criteria",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Fleet into a different compartment within the same tenancy",
          options: [
            optFleetId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the Fleet to",
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
          name: "check-resource-tagging",
          description:
            "Check if Fleet Application Management tags can be added to the resources",
          options: [
            optCompartmentId,
            {
              name: "--resource-ids",
              description:
                "Resource OCIDS that need to be verified if a tag can be enabled for them",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--fleet-display-name",
              description: "Fleet Display Name",
              args: { name: "fleet-display-name" },
            },
            optFromJson,
          ],
        },
        {
          name: "confirm-targets",
          description: "Confirm targets to be managed for a Fleet",
          options: [
            {
              name: "--targets",
              description: "The targets to confirm",
              args: { name: "json" },
              isRequired: true,
            },
            optFleetId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Create a fleet in Fleet Application Management",
          options: [
            optDisplayName2,
            optCompartmentId,
            optResourceSelection,
            optDescription,
            optDetails,
            optProducts,
            optEnvironmentType,
            optNotificationPreferences,
            optResources,
            optCredentials,
            optProperties,
            optParentFleetId,
            optIsTargetAutoConfirm,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-fleet-dynamic-resource-selection",
          description: "Create a fleet in Fleet Application Management",
          options: [
            optDisplayName2,
            optCompartmentId,
            {
              name: "--resource-selection-rule-selection-criteria",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optDetails,
            optProducts,
            optEnvironmentType,
            optNotificationPreferences,
            optResources,
            optCredentials,
            optProperties,
            optParentFleetId,
            optIsTargetAutoConfirm,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-fleet-manual-resource-selection",
          description: "Create a fleet in Fleet Application Management",
          options: [
            optDisplayName2,
            optCompartmentId,
            optDescription,
            optDetails,
            optProducts,
            optEnvironmentType,
            optNotificationPreferences,
            optResources,
            optCredentials,
            optProperties,
            optParentFleetId,
            optIsTargetAutoConfirm,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-fleet-group-fleet-details",
          description: "Create a fleet in Fleet Application Management",
          options: [
            optDisplayName2,
            optCompartmentId,
            optResourceSelection,
            optDescription,
            optProducts,
            optEnvironmentType,
            optNotificationPreferences,
            optResources,
            optCredentials,
            optProperties,
            optParentFleetId,
            optIsTargetAutoConfirm,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-fleet-product-fleet-details",
          description: "Create a fleet in Fleet Application Management",
          options: [
            optDisplayName2,
            optCompartmentId,
            optResourceSelection,
            optDescription,
            optProducts,
            optEnvironmentType,
            optNotificationPreferences,
            optResources,
            optCredentials,
            optProperties,
            optParentFleetId,
            optIsTargetAutoConfirm,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-fleet-generic-fleet-details",
          description: "Create a fleet in Fleet Application Management",
          options: [
            optDisplayName2,
            optCompartmentId,
            optResourceSelection,
            optDescription,
            optProducts,
            optEnvironmentType,
            optNotificationPreferences,
            optResources,
            optCredentials,
            optProperties,
            optParentFleetId,
            optIsTargetAutoConfirm,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-fleet-environment-fleet-details",
          description: "Create a fleet in Fleet Application Management",
          options: [
            optDisplayName2,
            optCompartmentId,
            optResourceSelection,
            optDescription,
            optProducts,
            optEnvironmentType,
            optNotificationPreferences,
            optResources,
            optCredentials,
            optProperties,
            optParentFleetId,
            optIsTargetAutoConfirm,
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
          description: "Delete a fleet in Fleet Application Management",
          options: [
            optFleetId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-compliance-report",
          description: "Generate compliance report for a Fleet",
          options: [
            optFleetId,
            {
              name: "--are-details-required",
              description:
                "A value that specifies if compliance details are required at the target level also? Allowed values are N",
              args: { name: "are-details-required" },
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
            "Get the details of a fleet in Fleet Application Management",
          options: [optFleetId, optFromJson],
        },
        {
          name: "request-resource-validation",
          description: "Request validation for resources within a fleet",
          options: [
            optFleetId,
            {
              name: "--is-applicable-to-all-resources",
              description:
                "A boolean flag that decides if all resources within the fleet should be part of the validation",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--resource-ids",
              description: "Resource OCIDS to be included for validation",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "request-target-discovery",
          description: "Request target discovery for resources with in a fleet",
          options: [
            optFleetId,
            {
              name: "--is-applicable-to-all-resources",
              description:
                "A boolean flag that decides if all resources within the fleet should be part of discovery",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--resource-ids",
              description: "Resource OCIDS to be included for discovery",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Update fleet information in Fleet Application Management",
          options: [
            optFleetId,
            optDisplayName,
            optDescription,
            optNotificationPreferences,
            optIsTargetAutoConfirm,
            { name: "--resource-selection", args: { name: "json" } },
            optProducts,
            optFreeformTags,
            optDefinedTags,
            optEnvironmentType,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-fleet-dynamic-resource-selection",
          description:
            "Update fleet information in Fleet Application Management",
          options: [
            optFleetId,
            {
              name: "--resource-selection-rule-selection-criteria",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optNotificationPreferences,
            optIsTargetAutoConfirm,
            optProducts,
            optFreeformTags,
            optDefinedTags,
            optEnvironmentType,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-fleet-manual-resource-selection",
          description:
            "Update fleet information in Fleet Application Management",
          options: [
            optFleetId,
            optDisplayName,
            optDescription,
            optNotificationPreferences,
            optIsTargetAutoConfirm,
            optProducts,
            optFreeformTags,
            optDefinedTags,
            optEnvironmentType,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fleet-product-collection",
      description: "Results of a fleetProduct search",
      subcommands: [
        {
          name: "list-fleet-products",
          description:
            "Returns a list of products associated with the confirmed targets",
          options: [
            optFleetId,
            optCompartmentId2,
            optResourceId,
            {
              name: "--resource-display-name",
              description: "Resource Display Name",
              args: { name: "resource-display-name" },
            },
            optDisplayName3,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["displayName", "resourceDisplayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "inventory-resource-collection",
      description: "Results of a inventoryResource search",
      subcommands: [
        {
          name: "list-inventory-resources",
          description:
            "Returns a list of Inventory Resources based on the criteria provided. instance, dbsystem",
          options: [
            {
              name: "--compartment-id",
              description:
                "A filter to return only resources whose base Compartment ID(TenancyId) matches the given base Compartment ID",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--resource-compartment-id",
              description:
                "A filter to return only resources whose resource Compartment ID matches the given resource Compartment ID",
              args: { name: "resource-compartment-id" },
              isRequired: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: { name: "lifecycle-state" },
            },
            optDisplayName3,
            {
              name: "--resource-region",
              description: "Resource Region",
              args: { name: "resource-region" },
            },
            {
              name: "--defined-tag-equals",
              description: "A list of tag filters to apply",
              args: { name: "defined-tag-equals" },
              isRepeatable: true,
            },
            {
              name: "--freeform-tag-equals",
              description: "A list of tag filters to apply",
              args: { name: "freeform-tag-equals" },
              isRepeatable: true,
            },
            {
              name: "--inventory-properties",
              description: "A list of inventory properties filters to apply",
              args: { name: "inventory-properties" },
              isRepeatable: true,
            },
            {
              name: "--matching-criteria",
              description:
                'Fetch resources matching ANY or ALL criteria passed as params in "tags" and "inventoryProperties"',
              args: { name: "matching-criteria" },
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
      name: "fleet-property-collection",
      description: "Results of a fleetProperty search",
      subcommands: [
        {
          name: "list-fleet-properties",
          description: "List properties associated with a fleet",
          options: [
            optFleetId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given lifecycleState",
              args: { suggestions: ["ACTIVE", "DELETED", "FAILED"] },
            },
            optDisplayName3,
            {
              name: "--id",
              description:
                "A filter to return only resources whose fleetProperty identifier matches the given identifier",
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
      ],
    },
    {
      name: "announcement-collection",
      description: "Results of list announcements",
      subcommands: [
        {
          name: "list-announcements",
          description:
            "Return a list of Announcement Summary items in a tenancy",
          options: [
            optCompartmentId3,
            {
              name: "--summary-contains",
              description:
                "Filter the list of announcements that contains the given summary value",
              args: { name: "summary-contains" },
            },
            optDisplayName3,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort AnnouncementSummary by",
              args: { suggestions: ["timeReleased", "summary"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fleet-credential",
      description: "Credential in Fleet Application Management",
      subcommands: [
        {
          name: "create",
          description:
            "Add credentials to a fleet in Fleet Application Management",
          options: [
            optDisplayName2,
            {
              name: "--entity-specifics",
              args: { name: "json" },
              isRequired: true,
            },
            { name: "--user", args: { name: "json" }, isRequired: true },
            { name: "--password", args: { name: "json" }, isRequired: true },
            optFleetId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a credential associated with a fleet or with a product/target with in a fleet",
          options: [
            optFleetCredentialId,
            optFleetId,
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
          description: "Gets a fleet credential by identifier",
          options: [optFleetCredentialId, optFleetId, optFromJson],
        },
        {
          name: "update",
          description:
            "Edit credential associated with a fleet or with a product/target with in a fleet",
          options: [
            optFleetCredentialId,
            optFleetId,
            optDisplayName,
            { name: "--entity-specifics", args: { name: "json" } },
            { name: "--user", args: { name: "json" } },
            { name: "--password", args: { name: "json" } },
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
      name: "fleet-resource-collection",
      description: "Results of a fleetResource search",
      subcommands: [
        {
          name: "list-fleet-resources",
          description:
            "List resources for a fleet in Fleet Application Management",
          options: [
            optFleetId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given lifecycleState",
              args: {
                suggestions: ["ACTIVE", "DELETED", "FAILED", "NEEDS_ATTENTION"],
              },
            },
            optDisplayName3,
            {
              name: "--id",
              description:
                "A filter to return only resources whose identifier matches the given identifier",
              args: { name: "id" },
            },
            {
              name: "--fleet-resource-type",
              description:
                "A filter to return only resources whose resourceType matches the given resourceType",
              args: { name: "fleet-resource-type" },
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
      name: "compliance-report",
      description:
        "Compliance details for a fleet in Fleet Application Management",
      subcommands: [
        {
          name: "get",
          description: "Retrieve compliance report for a fleet",
          options: [
            optFleetId,
            {
              name: "--compliance-report-id",
              description: "Compliance report identifier",
              args: { name: "compliance-report-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fleet-target-collection",
      description: "Results of a fleetTarget search",
      subcommands: [
        {
          name: "list-fleet-targets",
          description:
            "Returns the list of all confirmed targets within a fleet",
          options: [
            optFleetId,
            optDisplayName3,
            {
              name: "--product",
              description: "Product Name",
              args: { name: "product" },
            },
            optResourceId,
            {
              name: "--resource-display-name",
              description: "Resource Display Name",
              args: { name: "resource-display-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["displayName", "product", "resourceDisplayName"],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return fleets whose lifecycleState matches the given lifecycleState",
              args: { suggestions: ["ACTIVE", "DELETED", "FAILED"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-targets",
          description:
            "Return all targets belonging to the resources within a fleet",
          options: [
            optFleetId,
            optDisplayName3,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--is-confirmed-targets",
              description: "If set to true, confirmed targets will be returned",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "fleet-resource",
      description: "Resource added to a fleet in Fleet Application Management",
      subcommands: [
        {
          name: "create",
          description:
            "Add resource to a fleet in Fleet Application Management",
          options: [
            {
              name: "--resource-id",
              description: "The OCID of the resource",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--tenancy-id",
              description:
                "OCID of the tenancy to which the resource belongs to",
              args: { name: "tenancy-id" },
              isRequired: true,
            },
            optCompartmentId4,
            optFleetId,
            {
              name: "--resource-region",
              description: "Associated region",
              args: { name: "resource-region" },
            },
            {
              name: "--resource-type",
              description: "Type of the Resource",
              args: { name: "resource-type" },
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
            "Removes a resource from the fleet in Fleet Application Management",
          options: [
            optFleetResourceId,
            optFleetId,
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
          description: "Gets a fleet resource by identifier",
          options: [optFleetResourceId, optFleetId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the FleetResource",
          options: [
            optFleetResourceId,
            optFleetId,
            {
              name: "--tenancy-id",
              description:
                "OCID of the tenancy to which the resource belongs to",
              args: { name: "tenancy-id" },
            },
            {
              name: "--compartment-id",
              description:
                "OCID of the compartment to which the resource belongs to",
              args: { name: "compartment-id" },
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
      name: "compliance",
      description: "Compliance Summary",
      subcommands: [
        {
          name: "get",
          description: "Retrieve compliance for a fleet",
          options: [optFleetId, optFromJson],
        },
      ],
    },
    {
      name: "fleet-property",
      description:
        "Property to manage fleet metadata details in Fleet Application Management",
      subcommands: [
        {
          name: "create",
          description:
            "Add an existing global property to a fleet in Fleet Application Management",
          options: [
            {
              name: "--value",
              description: "Value of the Property",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--property-id",
              description: "OCID referring to global level metadata property",
              args: { name: "property-id" },
              isRequired: true,
            },
            optFleetId,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "DELETED", "FAILED"] },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a property associated with a fleet in Fleet Application Management",
          options: [
            optFleetPropertyId,
            optFleetId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets a fleet property by identifier",
          options: [optFleetPropertyId, optFleetId, optFromJson],
        },
        {
          name: "update",
          description:
            "Edit a property associated with a fleet in Fleet Application Management",
          options: [
            optFleetPropertyId,
            optFleetId,
            {
              name: "--value",
              description: "Value of the Property",
              args: { name: "value" },
            },
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: { suggestions: ["ACTIVE", "DELETED", "FAILED"] },
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
      name: "fleet-credential-collection",
      description: "Results of a fleetCredential search",
      subcommands: [
        {
          name: "list-fleet-credentials",
          description: "List credentials associated with a fleet",
          options: [
            optFleetId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose lifecycleState matches the given lifecycleState",
              args: { suggestions: ["ACTIVE", "DELETED", "FAILED"] },
            },
            optDisplayName3,
            optResourceId,
            {
              name: "--target",
              description:
                "A filter to return only resources whose target matches the given target name",
              args: { name: "target" },
            },
            {
              name: "--credential-level",
              description:
                "A filter to return only resources whose credentialLevel matches the given credentialLevel",
              args: { suggestions: ["FLEET", "RESOURCE", "TARGET"] },
            },
            {
              name: "--id",
              description:
                "A filter to return only resources whose credential identifier matches the given identifier",
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
      ],
    },
    {
      name: "fleet-collection",
      description: "Results of a fleet search",
      subcommands: [
        {
          name: "list-fleets",
          description:
            "Returns a list of all the Fleets in the specified compartment",
          options: [
            {
              name: "--lifecycle-state",
              description:
                "A filter to return fleets whose lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACTIVE",
                  "INACTIVE",
                  "CREATING",
                  "DELETED",
                  "DELETING",
                  "FAILED",
                  "UPDATING",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optCompartmentId2,
            {
              name: "--fleet-type",
              description:
                "A filter to return fleets whose fleetType matches the given fleetType",
              args: {
                suggestions: ["GENERIC", "PRODUCT", "ENVIRONMENT", "GROUP"],
              },
            },
            {
              name: "--application-type",
              description:
                "A filter to return resources that match the Application Type/Product Stack given",
              args: { name: "application-type" },
            },
            {
              name: "--product",
              description:
                "A filter to return resources that match the Product/Product Stack given",
              args: { name: "product" },
            },
            {
              name: "--environment-type",
              description:
                "A filter to return resources that match the Environment Type given",
              args: { name: "environment-type" },
            },
            optDisplayName3,
            {
              name: "--id",
              description:
                "Unique identifier or OCID for listing a single fleet by id",
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
      ],
    },
    {
      name: "fleet-apps-management-admin",
      description:
        "Fleet Application Management provides a centralized platform to help you automate resource management tasks",
      subcommands: [
        {
          name: "property-collection",
          description: "Results of a property search",
          subcommands: [
            {
              name: "list-properties",
              description:
                "Returns a list of all the Properties in the specified compartment",
              options: [
                optCompartmentId2,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources whose lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: ["ACTIVE", "DELETED", "FAILED", "UPDATING"],
                  },
                },
                optDisplayName3,
                {
                  name: "--id",
                  description:
                    "Unique identifier or OCID for listing a single Property by id",
                  args: { name: "id" },
                },
                {
                  name: "--type",
                  description:
                    "A filter to return properties whose type matches the given type",
                  args: {
                    suggestions: [
                      "USER_DEFINED",
                      "ORACLE_DEFINED",
                      "SYSTEM_DEFINED",
                    ],
                  },
                },
                {
                  name: "--scope",
                  description:
                    "A filter to return only resources their scope matches the given scope",
                  args: { suggestions: ["TAXONOMY", "PLATFORM_CONFIG"] },
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
          name: "compliance-policy-rule",
          description:
            "Set of rules that are used to calculate the compliance status of the product",
          subcommands: [
            {
              name: "create",
              description: "Creates a compliance policy rule",
              options: [
                optDisplayName2,
                optCompliancePolicyId,
                optProductVersion,
                optPatchTypeId,
                {
                  name: "--patch-selection",
                  args: { name: "json" },
                  isRequired: true,
                },
                optSeverity,
                optGracePeriod,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-compliance-policy-rule-patch-level-selection-details",
              description: "Creates a compliance policy rule",
              options: [
                optDisplayName2,
                optCompliancePolicyId,
                optProductVersion,
                optPatchTypeId,
                {
                  name: "--patch-selection-patch-level",
                  description: "Patch Name",
                  args: {
                    suggestions: [
                      "LATEST",
                      "LATEST_MINUS_ONE",
                      "LATEST_MINUS_TWO",
                    ],
                  },
                  isRequired: true,
                },
                optSeverity,
                optGracePeriod,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-compliance-policy-rule-patch-release-date-selection-details",
              description: "Creates a compliance policy rule",
              options: [
                optDisplayName2,
                optCompliancePolicyId,
                optProductVersion,
                optPatchTypeId,
                {
                  name: "--patch-selection-days-since-release",
                  description: "Days passed since patch release",
                  args: { name: "integer" },
                  isRequired: true,
                },
                optSeverity,
                optGracePeriod,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-compliance-policy-rule-patch-name-selection-details",
              description: "Creates a compliance policy rule",
              options: [
                optDisplayName2,
                optCompliancePolicyId,
                optProductVersion,
                optPatchTypeId,
                {
                  name: "--patch-selection-patch-name",
                  description: "Patch Name",
                  args: { name: "patch-selection-patch-name" },
                  isRequired: true,
                },
                optSeverity,
                optGracePeriod,
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
                "Deletes a compliance policy rule specified by an identifier",
              options: [
                optCompliancePolicyRuleId,
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
              description: "Gets information about a compliance policy rule",
              options: [optCompliancePolicyRuleId, optFromJson],
            },
            {
              name: "update",
              description:
                "Updates a compliance policy rule specified by an identifier",
              options: [
                optCompliancePolicyRuleId,
                optProductVersion2,
                optPatchTypeId2,
                optSeverity,
                { name: "--patch-selection", args: { name: "json" } },
                optGracePeriod,
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
              name: "update-compliance-policy-rule-patch-level-selection-details",
              description:
                "Updates a compliance policy rule specified by an identifier",
              options: [
                optCompliancePolicyRuleId,
                {
                  name: "--patch-selection-patch-level",
                  description: "Patch Name",
                  args: {
                    suggestions: [
                      "LATEST",
                      "LATEST_MINUS_ONE",
                      "LATEST_MINUS_TWO",
                    ],
                  },
                  isRequired: true,
                },
                optProductVersion2,
                optPatchTypeId2,
                optSeverity,
                optGracePeriod,
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
              name: "update-compliance-policy-rule-patch-release-date-selection-details",
              description:
                "Updates a compliance policy rule specified by an identifier",
              options: [
                optCompliancePolicyRuleId,
                {
                  name: "--patch-selection-days-since-release",
                  description: "Days passed since patch release",
                  args: { name: "integer" },
                  isRequired: true,
                },
                optProductVersion2,
                optPatchTypeId2,
                optSeverity,
                optGracePeriod,
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
              name: "update-compliance-policy-rule-patch-name-selection-details",
              description:
                "Updates a compliance policy rule specified by an identifier",
              options: [
                optCompliancePolicyRuleId,
                {
                  name: "--patch-selection-patch-name",
                  description: "Patch Name",
                  args: { name: "patch-selection-patch-name" },
                  isRequired: true,
                },
                optProductVersion2,
                optPatchTypeId2,
                optSeverity,
                optGracePeriod,
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
          ],
        },
        {
          name: "onboarding-collection",
          description: "List of Fleet Application Management Onboardings",
          subcommands: [
            {
              name: "list-onboardings",
              description:
                "Returns a list of all the onboardings in the specified root compartment (tenancy)",
              options: [
                optCompartmentId2,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources whose lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "INACTIVE",
                      "CREATING",
                      "DELETED",
                      "DELETING",
                      "FAILED",
                      "UPDATING",
                      "NEEDS_ATTENTION",
                    ],
                  },
                },
                {
                  name: "--id",
                  description:
                    "Unique identifier or OCID for listing a single onboarding by id",
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
          ],
        },
        {
          name: "platform-configuration",
          description: "Fleet Application Management Platform Configuration",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves a PlatformConfiguration into a different compartment within the same tenancy",
              options: [
                optPlatformConfigurationId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to move the Platform Configuration to",
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
              description: "Creates a new PlatformConfiguration",
              options: [
                optCompartmentId,
                optDisplayName2,
                {
                  name: "--config-category-details",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDescription,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-platform-configuration-product-stack-config-category-details",
              description: "Creates a new PlatformConfiguration",
              options: [
                optCompartmentId,
                optDisplayName2,
                {
                  name: "--config-category-details-products",
                  description: "Products that belong to the stack",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDescription,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--config-category-details-sub-category-details",
                  args: { name: "json" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-platform-configuration-environment-config-category-details",
              description: "Creates a new PlatformConfiguration",
              options: [
                optCompartmentId,
                optDisplayName2,
                optDescription,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-platform-configuration-credential-config-category-details",
              description: "Creates a new PlatformConfiguration",
              options: [
                optCompartmentId,
                optDisplayName2,
                optDescription,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-platform-configuration-patch-type-config-category-details",
              description: "Creates a new PlatformConfiguration",
              options: [
                optCompartmentId,
                optDisplayName2,
                optDescription,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-platform-configuration-lifecycle-operation-config-category-details",
              description: "Creates a new PlatformConfiguration",
              options: [
                optCompartmentId,
                optDisplayName2,
                optDescription,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-platform-configuration-product-config-category-details",
              description: "Creates a new PlatformConfiguration",
              options: [
                optCompartmentId,
                optDisplayName2,
                optDescription,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--config-category-details-versions",
                  description: "Versions associated with the PRODUCT",
                  args: { name: "json" },
                },
                {
                  name: "--config-category-details-credentials",
                  description:
                    "OCID for the Credential name to be associated with the Product",
                  args: { name: "json" },
                },
                {
                  name: "--config-category-details-components",
                  description: "Various components of the Product",
                  args: { name: "json" },
                },
                {
                  name: "--config-category-details-compatible-products",
                  description: "Products compatible with this Product",
                  args: { name: "json" },
                },
                {
                  name: "--config-category-details-patch-types",
                  description: "Patch Types associated with this Product",
                  args: { name: "json" },
                },
                {
                  name: "--config-category-details-is-softlink",
                  description:
                    "Specify if the product is softlink product or not",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--config-category-details-link-product-id",
                  description:
                    "The OCID of the product that would be the target for the softlink",
                  args: { name: "config-category-details-link-product-id" },
                },
                {
                  name: "--config-category-details-is-compliance-policy-required-for-softlink",
                  description:
                    "If set true ,compliance policies will be created for softlink product",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-platform-configuration-self-hosted-instance-config-category-details",
              description: "Creates a new PlatformConfiguration",
              options: [
                optCompartmentId,
                optDisplayName2,
                {
                  name: "--config-category-details-instance-id",
                  description: "The OCID of the resource",
                  args: { name: "config-category-details-instance-id" },
                  isRequired: true,
                },
                optDescription,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--config-category-details-instance-name",
                  description: "A user-friendly name",
                  args: { name: "config-category-details-instance-name" },
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
                "Deletes a PlatformConfiguration resource by identifier",
              options: [
                optPlatformConfigurationId,
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
              description: "Gets a PlatformConfiguration by identifier",
              options: [optPlatformConfigurationId, optFromJson],
            },
            {
              name: "update",
              description: "Updates the PlatformConfiguration",
              options: [
                optPlatformConfigurationId,
                optDisplayName,
                optDescription,
                { name: "--config-category-details", args: { name: "json" } },
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
              name: "update-platform-configuration-product-stack-config-category-details",
              description: "Updates the PlatformConfiguration",
              options: [
                optPlatformConfigurationId,
                {
                  name: "--config-category-details-products",
                  description: "Products that belong to the stack",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDisplayName,
                optDescription,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                {
                  name: "--config-category-details-sub-category-details",
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
              name: "update-platform-configuration-environment-config-category-details",
              description: "Updates the PlatformConfiguration",
              options: [
                optPlatformConfigurationId,
                optDisplayName,
                optDescription,
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
              name: "update-platform-configuration-credential-config-category-details",
              description: "Updates the PlatformConfiguration",
              options: [
                optPlatformConfigurationId,
                optDisplayName,
                optDescription,
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
              name: "update-platform-configuration-patch-type-config-category-details",
              description: "Updates the PlatformConfiguration",
              options: [
                optPlatformConfigurationId,
                optDisplayName,
                optDescription,
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
              name: "update-platform-configuration-lifecycle-operation-config-category-details",
              description: "Updates the PlatformConfiguration",
              options: [
                optPlatformConfigurationId,
                optDisplayName,
                optDescription,
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
              name: "update-platform-configuration-product-config-category-details",
              description: "Updates the PlatformConfiguration",
              options: [
                optPlatformConfigurationId,
                optDisplayName,
                optDescription,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                {
                  name: "--config-category-details-versions",
                  description: "Versions associated with the PRODUCT",
                  args: { name: "json" },
                },
                {
                  name: "--config-category-details-credentials",
                  description:
                    "OCID for the Credential name to be associated with the Product",
                  args: { name: "json" },
                },
                {
                  name: "--config-category-details-components",
                  description: "Various components of the Product",
                  args: { name: "json" },
                },
                {
                  name: "--config-category-details-compatible-products",
                  description: "Products compatible with this Product",
                  args: { name: "json" },
                },
                {
                  name: "--config-category-details-patch-types",
                  description: "Patch Types associated with this Product",
                  args: { name: "json" },
                },
                {
                  name: "--config-category-details-is-softlink",
                  description:
                    "Specify if the product is softlink product or not",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--config-category-details-link-product-id",
                  description:
                    "The OCID of the product that would be the target for the softlink",
                  args: { name: "config-category-details-link-product-id" },
                },
                {
                  name: "--config-category-details-is-compliance-policy-required-for-softlink",
                  description:
                    "If set true ,compliance policies will be created for softlink product",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-platform-configuration-self-hosted-instance-config-category-details",
              description: "Updates the PlatformConfiguration",
              options: [
                optPlatformConfigurationId,
                {
                  name: "--config-category-details-instance-id",
                  description: "The OCID of the resource",
                  args: { name: "config-category-details-instance-id" },
                  isRequired: true,
                },
                optDisplayName,
                optDescription,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                {
                  name: "--config-category-details-instance-name",
                  description: "A user-friendly name",
                  args: { name: "config-category-details-instance-name" },
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
          name: "property",
          description: "Global metadata element details",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves a Property into a different compartment within the same tenancy",
              options: [
                optPropertyId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to move the Property to",
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
              description:
                "Create a business-specific metadata property in Fleet Application Management",
              options: [
                optCompartmentId,
                optDisplayName2,
                {
                  name: "--selection",
                  description: "Text selection of the property",
                  args: {
                    suggestions: [
                      "SINGLE_CHOICE",
                      "MULTI_CHOICE",
                      "DEFAULT_TEXT",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--value-type",
                  description: "Format of the value",
                  args: { suggestions: ["STRING", "NUMERIC"] },
                  isRequired: true,
                },
                {
                  name: "--values",
                  description:
                    "Values of the property (must be a single value if selection = 'SINGLE_CHOICE')",
                  args: { name: "json" },
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
              description: "Delete a property in Fleet Application Management",
              options: [
                optPropertyId,
                optIfMatch,
                optForce2,
                optWaitForState3,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets a Property by identifier",
              options: [optPropertyId, optFromJson],
            },
            {
              name: "update",
              description: "Update a property in Fleet Application Management",
              options: [
                optPropertyId,
                optDisplayName,
                {
                  name: "--selection",
                  description: "Text selection of the property",
                  args: {
                    suggestions: [
                      "SINGLE_CHOICE",
                      "MULTI_CHOICE",
                      "DEFAULT_TEXT",
                    ],
                  },
                },
                {
                  name: "--value-type",
                  description: "Format of the value",
                  args: { suggestions: ["STRING", "NUMERIC"] },
                },
                {
                  name: "--values",
                  description:
                    "Values of the property (must be a single value if selection = 'SINGLE_CHOICE')",
                  args: { name: "json" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce,
                optWaitForState3,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "onboarding",
          description: "Fleet Application Management onboarding resource",
          subcommands: [
            {
              name: "create",
              description: "Onboard a tenant to Fleet Application Management",
              options: [
                {
                  name: "--compartment-id",
                  description: "Tenancy OCID",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--is-fams-tag-enabled",
                  description:
                    "A value determining if the Fleet Application Management tagging is enabled or not",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--is-cost-tracking-tag-enabled",
                  description:
                    "A value determining if the cost tracking tag is enabled or not",
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
              description:
                "Deletes Fleet Application Management onboarding resource by identifier",
              options: [
                optOnboardingId,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "enable-latest-policy",
              description:
                "Enable Policies for a newer version of Fleet Application Management",
              options: [
                optOnboardingId,
                {
                  name: "--can-latest-fams-policies-be-enabled",
                  description:
                    "A value determining if latest Fleet Application Management policies should be enabled",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "Gets a Fleet Application Management Onboarding by identifier",
              options: [optOnboardingId, optFromJson],
            },
            {
              name: "manage-settings",
              description: "Updates the Onboarding setting",
              options: [
                optOnboardingId,
                {
                  name: "--discovery-frequency",
                  description: "Provide discovery frequency",
                  args: { name: "discovery-frequency" },
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the Onboarding",
              options: [
                optOnboardingId,
                {
                  name: "--is-fams-tag-enabled",
                  description:
                    "A value determining Fleet Application Management tag is enabled or not",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--is-cost-tracking-tag-enabled",
                  description:
                    "A value determining if cost tracking tag is enabled or not",
                  args: { name: "boolean", suggestions: ["true", "false"] },
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
          ],
        },
        {
          name: "platform-configuration-collection",
          description: "Results of a platform configuration search",
          subcommands: [
            {
              name: "list-platform-configurations",
              description:
                "Returns a list of all the Platform Configurations in the specified compartment",
              options: [
                optCompartmentId2,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources their lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "DELETED",
                      "FAILED",
                      "DELETING",
                      "UPDATING",
                      "CREATING",
                      "INACTIVE",
                    ],
                  },
                },
                optDisplayName3,
                {
                  name: "--id",
                  description:
                    "Unique identifier or OCID for listing a single Platform Configuration by id",
                  args: { name: "id" },
                },
                {
                  name: "--config-category",
                  description: "Config Category",
                  args: {
                    suggestions: [
                      "PRODUCT",
                      "PRODUCT_STACK",
                      "ENVIRONMENT",
                      "PATCH_TYPE",
                      "CREDENTIAL",
                      "SELF_HOSTED_INSTANCE",
                      "LIFECYCLE_OPERATION",
                    ],
                  },
                },
                optCompartmentIdInSubtree,
                {
                  name: "--type",
                  description:
                    "A filter to return Platform Configurations whose type matches the given type",
                  args: { suggestions: ["USER_DEFINED", "ORACLE_DEFINED"] },
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
          name: "compliance-policy-collection",
          description: "Results of a compliancePolicy search",
          subcommands: [
            {
              name: "list-compliance-policies",
              description:
                "Returns a list of all the Compliance Policies in the specified compartment",
              options: [
                optCompartmentId2,
                optLifecycleState,
                optDisplayName3,
                {
                  name: "--type",
                  description:
                    "A filter to return Platform Configurations whose type matches the given type",
                  args: { suggestions: ["USER_DEFINED", "ORACLE_DEFINED"] },
                },
                {
                  name: "--id",
                  description:
                    "Unique identifier or OCID for listing a single Compliance Policy by id",
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
          ],
        },
        {
          name: "compliance-policy-rule-collection",
          description: "Results of a compliancePolicyRule search",
          subcommands: [
            {
              name: "list-compliance-policy-rules",
              description:
                "Gets a list of Compliance policy rules in a compartment",
              options: [
                optCompartmentId2,
                optDisplayName3,
                optLifecycleState,
                {
                  name: "--patch-name",
                  description:
                    "A filter to return only resources that match the patch selection against the given patch name",
                  args: { name: "patch-name" },
                },
                {
                  name: "--compliance-policy-id",
                  description: "Unique CompliancePolicy identifier",
                  args: { name: "compliance-policy-id" },
                },
                {
                  name: "--id",
                  description:
                    "Unique identifier or OCID for listing a single Compliance Policy Rule by id",
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
          ],
        },
        {
          name: "onboarding-policy-collection",
          description: "List of Fleet Application Management Onboard policies",
          subcommands: [
            {
              name: "list-onboarding-policies",
              description:
                "Returns a list of onboarding policy information for Fleet Application Management",
              options: [
                optCompartmentId3,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["timeCreated"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "compliance-policy",
          description:
            "Define software patch compliance policies for various products running in OCI resources",
          subcommands: [
            {
              name: "get",
              description: "Gets information about a compliance policy",
              options: [
                {
                  name: "--compliance-policy-id",
                  description: "Unique CompliancePolicy identifier",
                  args: { name: "compliance-policy-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "fleet-apps-management-catalog",
      description:
        "Fleet Application Management provides a centralized platform to help you automate resource management tasks",
      subcommands: [
        {
          name: "catalog-item-variables-definition",
          description: "Variables Definitions for a CatalogItem",
          subcommands: [
            {
              name: "get",
              description: "Gets information about a CatalogItem Variables",
              options: [optCatalogItemId, optFromJson],
            },
          ],
        },
        {
          name: "catalog-item",
          description: "A description of a CatalogItem resource",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves a CatalogItem into a different compartment within the same tenancy",
              options: [
                optCatalogItemId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to move the CatalogItem",
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
              name: "clone",
              description:
                "Clones a CatalogItem into a different compartment within the same tenancy",
              options: [
                optCatalogItemId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to clone the CatalogItem",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optVersionDescription,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "configure",
              description: "Configures a CatalogItem",
              options: [
                optCatalogItemId,
                {
                  name: "--storage-namespace",
                  description:
                    "The Oracle Cloud Object Storage namespace where the artifact or variables are stored",
                  args: { name: "storage-namespace" },
                  isRequired: true,
                },
                {
                  name: "--bucket-name",
                  description:
                    "The name of the Object Storage bucket that contains the catalog item configuration object",
                  args: { name: "bucket-name" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description: "OCID of the Compartment",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--input-variables",
                  description:
                    "Array of key value pairs specifying variables or parameters to be used when configuring the catalog item",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--object-name",
                  description:
                    "The name of the object file in the specified bucket containing catalog item configuration details",
                  args: { name: "object-name" },
                },
                {
                  name: "--catalog-listing-id",
                  description:
                    "The unique identifier of the catalog listing to which configuration applies",
                  args: { name: "catalog-listing-id" },
                },
                {
                  name: "--catalog-listing-version-id",
                  description:
                    "The unique identifier for the specific version of the catalog listing",
                  args: { name: "catalog-listing-version-id" },
                },
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--system-tags",
                  description: "System tags for this resource",
                  args: { name: "json" },
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
              description: "Creates a CatalogItem",
              options: [
                optCompartmentId5,
                optConfigSourceType,
                optDescription2,
                optDisplayName4,
                optPackageType,
                optVersionDescription,
                optShortDescription,
                optTimeReleased,
                { name: "--catalog-source-payload", args: { name: "json" } },
                optListingId,
                optListingVersion,
                optIsItemLocked,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-catalog-item-catalog-git-source-config",
              description: "Creates a CatalogItem",
              options: [
                optCompartmentId5,
                optConfigSourceType,
                optDescription2,
                optDisplayName4,
                optPackageType,
                optVersionDescription,
                optShortDescription,
                optTimeReleased,
                optListingId,
                optListingVersion,
                optIsItemLocked,
                optFreeformTags,
                optDefinedTags,
                optCatalogSourcePayloadWorkingDirectory,
                {
                  name: "--catalog-source-payload-branch-name",
                  description: "Branch Name",
                  args: { name: "catalog-source-payload-branch-name" },
                },
                {
                  name: "--catalog-source-payload-configuration-source-provider-id",
                  description: "Configuration Source Provider OCID",
                  args: {
                    name: "catalog-source-payload-configuration-source-provider-id",
                  },
                },
                {
                  name: "--catalog-source-payload-repository-url",
                  description: "Repository Url",
                  args: { name: "catalog-source-payload-repository-url" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-catalog-item-catalog-source-template-config",
              description: "Creates a CatalogItem",
              options: [
                optCompartmentId5,
                optConfigSourceType,
                optDescription2,
                optDisplayName4,
                optPackageType,
                optVersionDescription,
                optShortDescription,
                optTimeReleased,
                optListingId,
                optListingVersion,
                optIsItemLocked,
                optFreeformTags,
                optDefinedTags,
                optCatalogSourcePayloadWorkingDirectory,
                {
                  name: "--catalog-source-payload-zip-file-base64-encoded",
                  description: "The Base64 encoded template",
                  args: {
                    name: "catalog-source-payload-zip-file-base64-encoded",
                  },
                },
                {
                  name: "--catalog-source-payload-description",
                  description: "Template Description",
                  args: { name: "catalog-source-payload-description" },
                },
                {
                  name: "--catalog-source-payload-long-description",
                  description: "Template Long Description",
                  args: { name: "catalog-source-payload-long-description" },
                },
                {
                  name: "--catalog-source-payload-template-display-name",
                  description: "Template Display Name",
                  args: {
                    name: "catalog-source-payload-template-display-name",
                  },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-catalog-item-catalog-par-source-config",
              description: "Creates a CatalogItem",
              options: [
                optCompartmentId5,
                optConfigSourceType,
                optDescription2,
                optDisplayName4,
                optPackageType,
                optVersionDescription,
                optShortDescription,
                optTimeReleased,
                optListingId,
                optListingVersion,
                optIsItemLocked,
                optFreeformTags,
                optDefinedTags,
                optCatalogSourcePayloadWorkingDirectory,
                {
                  name: "--catalog-source-payload-namespace-name",
                  description: "NameSpace",
                  args: { name: "catalog-source-payload-namespace-name" },
                },
                {
                  name: "--catalog-source-payload-bucket-name",
                  description: "Bucket name",
                  args: { name: "catalog-source-payload-bucket-name" },
                },
                {
                  name: "--catalog-source-payload-object-name",
                  description: "Object name",
                  args: { name: "catalog-source-payload-object-name" },
                },
                {
                  name: "--catalog-source-payload-access-uri",
                  description: "Access uri",
                  args: { name: "catalog-source-payload-access-uri" },
                },
                {
                  name: "--catalog-source-payload-time-expires",
                  description:
                    "The date and time expires, in the format defined by RFC 3339",
                  args: { name: "datetime" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-catalog-item-catalog-marketplace-source-config",
              description: "Creates a CatalogItem",
              options: [
                optCompartmentId5,
                optConfigSourceType,
                optDescription2,
                optDisplayName4,
                optPackageType,
                optVersionDescription,
                optShortDescription,
                optTimeReleased,
                optListingId,
                optListingVersion,
                optIsItemLocked,
                optFreeformTags,
                optDefinedTags,
                optCatalogSourcePayloadWorkingDirectory,
                {
                  name: "--catalog-source-payload-listing-id",
                  description: "This listing Id parameter of Payload",
                  args: { name: "catalog-source-payload-listing-id" },
                },
                {
                  name: "--catalog-source-payload-version",
                  description: "This version parameter of Payload",
                  args: { name: "catalog-source-payload-version" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Deletes a CatalogItem",
              options: [
                optCatalogItemId,
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
              description: "Gets information about a CatalogItem",
              options: [optCatalogItemId, optFromJson],
            },
            {
              name: "update",
              description: "Updates a CatalogItem",
              options: [
                optCatalogItemId,
                {
                  name: "--description",
                  description: "The description of the CatalogItem",
                  args: { name: "description" },
                },
                optVersionDescription,
                optShortDescription,
                {
                  name: "--display-name",
                  description: "The CatalogItem name",
                  args: { name: "display-name" },
                },
                optIsItemLocked,
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
          ],
        },
        {
          name: "catalog-item-collection",
          description:
            "The results of a CatalogItem search containing list of CatalogItemSummary items",
          subcommands: [
            {
              name: "list-catalog-items",
              description: "Gets a list of Catalog Items in a compartment",
              options: [
                optCompartmentId3,
                {
                  name: "--config-source-type",
                  description:
                    "The ConfigSourceType Eg: STACK_TEMPLATE_CATALOG_SOURCE, PAR_CATALOG_SOURCE, URL_CATALOG_SOURCE",
                  args: { name: "config-source-type" },
                },
                optLifecycleState,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: {
                    suggestions: [
                      "timeCreated",
                      "displayName",
                      "timeBackfillLastChecked",
                    ],
                  },
                },
                optDisplayName3,
                optLimit,
                optPage,
                {
                  name: "--catalog-listing-id",
                  description: "CatalogListingId of the package",
                  args: { name: "catalog-listing-id" },
                },
                {
                  name: "--catalog-listing-version-criteria",
                  description:
                    "Parameter to list all catalog items only with latest version or list all catalog items with all versions",
                  args: {
                    suggestions: [
                      "LIST_ALL_VERSIONS",
                      "LIST_EARLIEST_VERSION_ONLY",
                      "LIST_LATEST_VERSION_ONLY",
                    ],
                  },
                },
                {
                  name: "--package-type",
                  description:
                    "A filter to return only resources that match the given package type",
                  args: {
                    suggestions: [
                      "TF_PACKAGE",
                      "NON_TF_PACKAGE",
                      "CONFIG_FILE",
                    ],
                  },
                },
                {
                  name: "--should-list-public-items",
                  description:
                    "The indicator to append Public Items from the root compartment to any query, when set to TRUE",
                  args: { name: "boolean", suggestions: ["true", "false"] },
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
    {
      name: "fleet-apps-management-maintenance-window",
      description:
        "Fleet Application Management provides a centralized platform to help you automate resource management tasks",
      subcommands: [
        {
          name: "maintenance-window",
          description:
            "Details of Maintenance Window in Fleet Application Management",
          subcommands: [
            {
              name: "create",
              description:
                "Create a maintenance window in Fleet Application Management",
              options: [
                optCompartmentId,
                {
                  name: "--time-schedule-start",
                  description:
                    "Specify the date and time of the day that the maintenance window starts",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                {
                  name: "--duration",
                  description: "Duration of the maintenance window",
                  args: { name: "duration" },
                  isRequired: true,
                },
                optDisplayName,
                optDescription,
                {
                  name: "--is-outage",
                  description:
                    "Does the maintenenace window cause outage? An outage indicates whether a maintenance window can consider",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--is-recurring",
                  description: "Is this a recurring maintenance window?",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--recurrences",
                  description:
                    "Recurrence rule specification if maintenance window recurring",
                  args: { name: "recurrences" },
                },
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--wait-for-state",
                  description:
                    "Wait until the resource or work request reaches the given state",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "DELETED",
                      "FAILED",
                      "DELETING",
                      "UPDATING",
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
              name: "delete",
              description:
                "Delete a maintenance window in Fleet Application Management",
              options: [
                optMaintenanceWindowId,
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
                "Get the details for a maintenance window in Fleet Application Management",
              options: [optMaintenanceWindowId, optFromJson],
            },
            {
              name: "update",
              description:
                "Update a maintenance window in Fleet Application Management",
              options: [
                optMaintenanceWindowId,
                optDisplayName,
                optDescription,
                {
                  name: "--is-outage",
                  description:
                    "Does the maintenenace window cause outage? An outage indicates whether a maintenance window can consider",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--time-schedule-start",
                  description:
                    "Specify the date and time of the day that the maintenance window starts",
                  args: { name: "datetime" },
                },
                {
                  name: "--duration",
                  description: "Duration of the maintenance window",
                  args: { name: "duration" },
                },
                {
                  name: "--is-recurring",
                  description: "Is this a recurring maintenance window?",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--recurrences",
                  description:
                    "Recurrence rule specification if maintenance window recurring",
                  args: { name: "recurrences" },
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
          ],
        },
        {
          name: "maintenance-window-collection",
          description: "Results of a maintenanceWindow search",
          subcommands: [
            {
              name: "list-maintenance-windows",
              description:
                "Returns a list of all the Maintenance Windows in the specified compartment",
              options: [
                optCompartmentId2,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources whose lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "DELETED",
                      "FAILED",
                      "DELETING",
                      "UPDATING",
                      "NEEDS_ATTENTION",
                    ],
                  },
                },
                optDisplayName3,
                {
                  name: "--time-schedule-start-greater-than-or-equal-to",
                  description:
                    "A filter to return only resources whose timeScheduleStart is greater than or equal to the provided date",
                  args: { name: "datetime" },
                },
                {
                  name: "--id",
                  description:
                    "Unique identifier or OCID for listing a single maintenance window by id",
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
          ],
        },
      ],
    },
    {
      name: "fleet-apps-management-operations",
      description:
        "Fleet Application Management provides a centralized platform to help you automate resource management tasks",
      subcommands: [
        {
          name: "scheduler-job-aggregation-collection",
          description: "An array of SchedulerJob objects",
          subcommands: [
            {
              name: "summarize-scheduler-job-counts",
              description:
                "Retrieve aggregated summary information of Scheduler Jobs within a Compartment",
              options: [
                optCompartmentId2,
                optCompartmentIdInSubtree,
                optLimit,
                optPage,
                optSortOrder,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "report-collection",
          description: "Results of a summarize report",
          subcommands: [
            {
              name: "report",
              description: "Report",
              options: [
                {
                  name: "--name",
                  description: "Name of report",
                  args: { name: "name" },
                  isRequired: true,
                },
                optCompartmentId3,
                {
                  name: "--granularity",
                  description: "Granularity",
                  args: {
                    suggestions: ["DAY", "WEEK", "MONTH", "QUARTER", "YEAR"],
                  },
                },
                { name: "--report-time-range", args: { name: "json" } },
                {
                  name: "--condition",
                  description: "Condition",
                  args: { suggestions: ["ALL", "ANY"] },
                },
                {
                  name: "--filters",
                  description: "Filters for reports",
                  args: { name: "json" },
                },
                {
                  name: "--order-clause",
                  description: "Order clauses for reports",
                  args: { name: "json" },
                },
                optIfMatch,
                optLimit,
                optPage,
                optCompartmentIdInSubtree,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "patch",
          description: "Patch metadata for Custom and Oracle patches",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves a Patch into a different compartment within the same tenancy",
              options: [
                optPatchId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to move the patch to",
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
              description: "Creates a new Patch",
              options: [
                optName,
                optPatchType,
                optSeverity3,
                optTimeReleased2,
                {
                  name: "--artifact-details",
                  args: { name: "json" },
                  isRequired: true,
                },
                optProduct,
                optCompartmentId4,
                optDescription,
                optDependentPatches,
                optFreeformTags,
                optDefinedTags,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-patch-platform-specific-artifact-details",
              description: "Creates a new Patch",
              options: [
                optName,
                optPatchType,
                optSeverity3,
                optTimeReleased2,
                optProduct,
                optCompartmentId4,
                {
                  name: "--artifact-details-artifacts",
                  description: "Artifacts",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDescription,
                optDependentPatches,
                optFreeformTags,
                optDefinedTags,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-patch-generic-artifact-details",
              description: "Creates a new Patch",
              options: [
                optName,
                optPatchType,
                optSeverity3,
                optTimeReleased2,
                optProduct,
                optCompartmentId4,
                {
                  name: "--artifact-details-artifact",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDescription,
                optDependentPatches,
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
              description: "Deletes the patch specified by identifier",
              options: [
                optPatchId,
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
              description: "Gets a Patch by identifier",
              options: [optPatchId, optFromJson],
            },
            {
              name: "update",
              description: "Updates the patch specified by the identifier",
              options: [
                optPatchId,
                optDescription,
                optPatchType2,
                optSeverity4,
                optTimeReleased3,
                { name: "--artifact-details", args: { name: "json" } },
                optProduct2,
                optDependentPatches2,
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
              name: "update-patch-platform-specific-artifact-details",
              description: "Updates the patch specified by the identifier",
              options: [
                optPatchId,
                {
                  name: "--artifact-details-artifacts",
                  description: "Artifacts",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDescription,
                optPatchType2,
                optSeverity4,
                optTimeReleased3,
                optProduct2,
                optDependentPatches2,
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
              name: "update-patch-generic-artifact-details",
              description: "Updates the patch specified by the identifier",
              options: [
                optPatchId,
                {
                  name: "--artifact-details-artifact",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDescription,
                optPatchType2,
                optSeverity4,
                optTimeReleased3,
                optProduct2,
                optDependentPatches2,
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
          ],
        },
        {
          name: "job-activity",
          description:
            "Activity details including status corresponding to an Action Group",
          subcommands: [
            {
              name: "get",
              description: "Gets activity details by identifier for a job",
              options: [
                optSchedulerJobId,
                optJobActivityId,
                {
                  name: "--is-details-required",
                  description:
                    "If set to true, inventory details will be returned",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "execution-collection",
          description: "A collection of ExecutionSummary",
          subcommands: [
            {
              name: "list-executions",
              description: "Returns a list of Task Executions for a Resource",
              options: [
                optSchedulerJobId,
                optJobActivityId,
                {
                  name: "--resource-id",
                  description: "Unique Resource identifier",
                  args: { name: "resource-id" },
                  isRequired: true,
                },
                optResourceTaskId,
                optStepName,
                optTargetName,
                optSequence,
                optLimit,
                optPage,
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
          name: "target-property-collection",
          description: "Results of an target property search",
          subcommands: [
            {
              name: "list-target-properties",
              description: "Gets a list of target properties",
              options: [
                optCompartmentId3,
                optTargetId,
                optTargetName2,
                optSeverity2,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["propertyName"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "scheduled-fleet-collection",
          description: "Results of a Scheduled ActionGroup search",
          subcommands: [
            {
              name: "list-scheduled-fleets",
              description: "Returns a list of ScheduledFleets",
              options: [
                optSchedulerDefinitionId,
                optDisplayName3,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["displayName"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "execution",
          description: "Task Execution associated with the Job",
          subcommands: [
            {
              name: "get",
              description:
                "Get Task Execution by Identifier for a Resource within an action group",
              options: [
                optSchedulerJobId,
                optJobActivityId,
                {
                  name: "--resource-id",
                  description: "Unique Resource identifier",
                  args: { name: "resource-id" },
                  isRequired: true,
                },
                {
                  name: "--execution-id",
                  description: "Execution Id",
                  args: { name: "execution-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "target-component-collection",
          description: "Results of an target component search",
          subcommands: [
            {
              name: "list-target-components",
              description: "Gets a list of target component",
              options: [
                optCompartmentId3,
                optTargetId,
                optTargetName2,
                optSeverity2,
                {
                  name: "--name",
                  description: "Target Component Name",
                  args: { name: "name" },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["componentName"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "inventory-record-collection",
          description: "Results of an inventory search",
          subcommands: [
            {
              name: "list-inventory-records",
              description: "Gets a list of inventoryDetails",
              options: [
                optCompartmentId3,
                optCompartmentIdInSubtree,
                optFleetId2,
                optResourceId,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--is-details-required",
                  description:
                    "If set to true, inventory details will be returned",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: {
                    suggestions: [
                      "targetName",
                      "targetProductName",
                      "targetResourceId",
                      "osType",
                      "architecture",
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
          name: "report-metadata-collection",
          description: "Results of a run report",
          subcommands: [
            {
              name: "list-report-metadata",
              description: "Returns a list of all the report metadata",
              options: [
                optCompartmentId3,
                {
                  name: "--report-name",
                  description: "A filter to return data for given report name",
                  args: { name: "report-name" },
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
          name: "patch-collection",
          description: "Results of a patch search",
          subcommands: [
            {
              name: "list-patches",
              description:
                "Returns a list of all the Patches in the specified compartment",
              options: [
                optCompartmentId2,
                {
                  name: "--product-id",
                  description:
                    "Product platformConfigurationId associated with the Patch",
                  args: { name: "product-id" },
                },
                {
                  name: "--version-parameterconflict",
                  description: "Product version",
                  args: { name: "version-parameterconflict" },
                },
                {
                  name: "--type",
                  description: "DefinedBy type",
                  args: { suggestions: ["USER_DEFINED", "ORACLE_DEFINED"] },
                },
                {
                  name: "--patch-type-id",
                  description:
                    "Patch Type platformConfigurationId associated with the Patch",
                  args: { name: "patch-type-id" },
                },
                {
                  name: "--name",
                  description:
                    "A filter to return only resources that match the entire name given",
                  args: { name: "name" },
                },
                {
                  name: "--id",
                  description:
                    "Unique identifier or OCID for listing a single Patch by id",
                  args: { name: "id" },
                },
                {
                  name: "--time-released-greater-than-or-equal-to",
                  description:
                    "A filter to return patches whose release date is greater than or equal to the given date",
                  args: { name: "datetime" },
                },
                {
                  name: "--time-released-less-than",
                  description:
                    "A filter to return patches whose release date is less than the given date",
                  args: { name: "datetime" },
                },
                {
                  name: "--should-compliance-policy-rules-be-applied",
                  description:
                    "Filter patch based on compliance policy rules for the Product",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optLimit,
                optPage,
                {
                  name: "--lifecycle-state",
                  description: "The current state of the Patch",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "INACTIVE",
                      "DELETED",
                      "DELETING",
                      "FAILED",
                      "UPDATING",
                    ],
                  },
                },
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["timeCreated", "name"] },
                },
                optSortOrder,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "compliance-record-collection",
          description: "Results of a compliancePolicy search",
          subcommands: [
            {
              name: "list-compliance-records",
              description: "Gets a list of complianceDetails",
              options: [
                optCompartmentId3,
                {
                  name: "--resource-id",
                  description: "Resource identifier",
                  args: { name: "resource-id" },
                },
                {
                  name: "--entity-id",
                  description: "Entity identifier.Ex:FleetId",
                  args: { name: "entity-id" },
                },
                {
                  name: "--product-name",
                  description: "Product Name",
                  args: { name: "product-name" },
                },
                {
                  name: "--product-stack",
                  description: "ProductStack name",
                  args: { name: "product-stack" },
                },
                optTargetName,
                {
                  name: "--compliance-state",
                  description: "Target Compliance State",
                  args: { name: "compliance-state" },
                },
                optCompartmentIdInSubtree,
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
          name: "scheduler-definition",
          description: "Definition of a Schedule",
          subcommands: [
            {
              name: "create",
              description:
                "Create a SchedulerDefinition to perform lifecycle operations",
              options: [
                optCompartmentId,
                {
                  name: "--schedule",
                  args: { name: "json" },
                  isRequired: true,
                },
                optActionGroups,
                optDisplayName,
                optDescription,
                optRunBooks,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-scheduler-definition-custom-schedule",
              description:
                "Create a SchedulerDefinition to perform lifecycle operations",
              options: [
                optCompartmentId,
                optActionGroups,
                optScheduleExecutionStartdate,
                {
                  name: "--schedule-duration",
                  description: "Duration of the schedule",
                  args: { name: "schedule-duration" },
                  isRequired: true,
                },
                optDisplayName,
                optDescription,
                optRunBooks,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--schedule-recurrences",
                  description: "Recurrence rule specification if recurring",
                  args: { name: "schedule-recurrences" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-scheduler-definition-maintenance-window-schedule",
              description:
                "Create a SchedulerDefinition to perform lifecycle operations",
              options: [
                optCompartmentId,
                optActionGroups,
                optScheduleExecutionStartdate,
                {
                  name: "--schedule-maintenance-window-id",
                  description: "Provide MaintenanceWindowId",
                  args: { name: "schedule-maintenance-window-id" },
                  isRequired: true,
                },
                optDisplayName,
                optDescription,
                optRunBooks,
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
                "Deletes a SchedulerDefinition resource by identifier",
              options: [
                optSchedulerDefinitionId,
                optIfMatch,
                optForce2,
                {
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
                      "INACTIVE",
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
                "Get the details of a SchedulerDefinition that performs lifecycle management operations",
              options: [optSchedulerDefinitionId, optFromJson],
            },
            {
              name: "update",
              description:
                "Update the details of a SchedulerDefinition that performs lifecycle management operations",
              options: [
                optSchedulerDefinitionId,
                optDisplayName,
                optDescription,
                { name: "--schedule", args: { name: "json" } },
                optActionGroups2,
                optRunBooks,
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
              name: "update-scheduler-definition-custom-schedule",
              description:
                "Update the details of a SchedulerDefinition that performs lifecycle management operations",
              options: [
                optSchedulerDefinitionId,
                optScheduleExecutionStartdate,
                {
                  name: "--schedule-duration",
                  description: "Duration of the schedule",
                  args: { name: "schedule-duration" },
                  isRequired: true,
                },
                optDisplayName,
                optDescription,
                optActionGroups2,
                optRunBooks,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                {
                  name: "--schedule-recurrences",
                  description: "Recurrence rule specification if recurring",
                  args: { name: "schedule-recurrences" },
                },
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-scheduler-definition-maintenance-window-schedule",
              description:
                "Update the details of a SchedulerDefinition that performs lifecycle management operations",
              options: [
                optSchedulerDefinitionId,
                optScheduleExecutionStartdate,
                {
                  name: "--schedule-maintenance-window-id",
                  description: "Provide MaintenanceWindowId",
                  args: { name: "schedule-maintenance-window-id" },
                  isRequired: true,
                },
                optDisplayName,
                optDescription,
                optActionGroups2,
                optRunBooks,
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
          ],
        },
        {
          name: "scheduler-definition-collection",
          description: "Results of a schedulerDefinition search",
          subcommands: [
            {
              name: "list-scheduler-definitions",
              description:
                "Returns a list of all the Schedule Definitions in the specified compartment",
              options: [
                optCompartmentId2,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only scheduleDefinitions whose lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "CREATING",
                      "UPDATING",
                      "ACTIVE",
                      "DELETING",
                      "DELETED",
                      "FAILED",
                      "INACTIVE",
                    ],
                  },
                },
                optDisplayName3,
                {
                  name: "--product",
                  description:
                    "A filter to return only dchedule definitions whose assocaited product matches the given product",
                  args: { name: "product" },
                },
                {
                  name: "--id",
                  description:
                    "Unique identifier or OCID for listing a single Schedule Definition by id",
                  args: { name: "id" },
                },
                {
                  name: "--maintenance-window-id",
                  description:
                    "A filter to return only schedule definitions whose associated maintenanceWindowId matches the given",
                  args: { name: "maintenance-window-id" },
                },
                optRunbookId3,
                {
                  name: "--runbook-version-name",
                  description: "RunbookVersion Name filter",
                  args: { name: "runbook-version-name" },
                },
                optTimeScheduledGreaterThanOrEqualTo,
                optTimeScheduledLessThan,
                optFleetId2,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: {
                    suggestions: [
                      "timeCreated",
                      "displayName",
                      "timeOfNextRun",
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
          name: "managed-entity-aggregation-collection",
          description: "An array of Managed Entity objects",
          subcommands: [
            {
              name: "summarize-managed-entity-counts",
              description:
                "Retrieve aggregated summary information of Managed entities within a Compartment",
              options: [
                optCompartmentId2,
                optCompartmentIdInSubtree,
                optLimit,
                optPage,
                optSortOrder,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "resource-collection",
          description: "Results of a ResourceSummary Search",
          subcommands: [
            {
              name: "list-resources",
              description:
                "Returns a list of resources for an Activity Execution",
              options: [
                optSchedulerJobId,
                optJobActivityId,
                optResourceTaskId,
                optStepName,
                optTargetName,
                optSequence,
                optLimit,
                optPage,
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
          name: "scheduler-job-collection",
          description: "Results of a schedulerJob search",
          subcommands: [
            {
              name: "list-scheduler-jobs",
              description:
                "Returns a list of all schedule jobs in the specified compartment",
              options: [
                optCompartmentId2,
                optCompartmentIdInSubtree,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources whose lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "ACCEPTED",
                      "IN_PROGRESS",
                      "WAITING",
                      "FAILED",
                      "SUCCEEDED",
                      "CANCELED",
                      "NEEDS_ATTENTION",
                    ],
                  },
                },
                optFleetId2,
                optTimeScheduledGreaterThanOrEqualTo,
                optTimeScheduledLessThan,
                {
                  name: "--is-remediation-job-needed",
                  description: "Fetch next remediation Job",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--substate",
                  description:
                    "A filter to return only resources their subState matches the given subState",
                  args: { name: "substate" },
                },
                optDisplayName3,
                {
                  name: "--id",
                  description:
                    "Unique identifier or OCID for listing a single Schedule Job by id",
                  args: { name: "id" },
                },
                {
                  name: "--scheduler-defintion-id",
                  description: "SchedulerDefinition identifier",
                  args: { name: "scheduler-defintion-id" },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: {
                    suggestions: [
                      "timeCreated",
                      "timeScheduled",
                      "displayName",
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
          name: "scheduler-execution-collection",
          description: "Results of a schedulerExecution search",
          subcommands: [
            {
              name: "list-scheduler-executions",
              description:
                "Returns a list of all executions that are scheduled",
              options: [
                optCompartmentId2,
                optDisplayName3,
                optTimeScheduledGreaterThanOrEqualTo,
                optTimeScheduledLessThan,
                {
                  name: "--scheduler-defintion-id",
                  description: "SchedulerDefinition identifier",
                  args: { name: "scheduler-defintion-id" },
                },
                {
                  name: "--scheduler-job-id",
                  description: "SchedulerJob identifier filter",
                  args: { name: "scheduler-job-id" },
                },
                {
                  name: "--resource-id",
                  description: "ResourceId filter (Example FleetId)",
                  args: { name: "resource-id" },
                },
                optRunbookId3,
                {
                  name: "--runbook-version-name",
                  description: "RunbookVersion Name filter",
                  args: { name: "runbook-version-name" },
                },
                {
                  name: "--substate",
                  description:
                    "A filter to return only resources their subState matches the given subState",
                  args: { name: "substate" },
                },
                {
                  name: "--lifecycle-operation",
                  description:
                    "A filter to return only resources their lifecycleOperation matches the given lifecycleOperation",
                  args: { name: "lifecycle-operation" },
                },
                optCompartmentIdInSubtree,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["timeCreated", "timeScheduled"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "compliance-record",
          description: "The compliance status reports",
          subcommands: [
            {
              name: "export-compliance-report",
              description: "Generate Compliance Report",
              options: [
                optCompartmentId5,
                {
                  name: "--file",
                  description:
                    "The name of the file that will receive the response data, or '-' to write to STDOUT",
                  args: { name: "file", template: "filepaths" },
                  isRequired: true,
                },
                {
                  name: "--entity-id",
                  description:
                    "The OCID of the entity for which the compliance is calculated.Ex.FleetId",
                  args: { name: "entity-id" },
                },
                {
                  name: "--resource-id",
                  description: "The OCID to identify the resource",
                  args: { name: "resource-id" },
                },
                {
                  name: "--product-stack",
                  description: "Product Stack",
                  args: { name: "product-stack" },
                },
                {
                  name: "--product-name",
                  description: "Product Name",
                  args: { name: "product-name" },
                },
                {
                  name: "--compliance-state",
                  description: "Last known compliance state of target",
                  args: {
                    suggestions: [
                      "UNKNOWN",
                      "COMPLIANT",
                      "NON_COMPLIANT",
                      "WARNING",
                    ],
                  },
                },
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "compliance-record-aggregation-collection",
          description: "An array of ComplianceRecord objects",
          subcommands: [
            {
              name: "summarize-compliance-record-counts",
              description:
                "Retrieve aggregated summary information of ComplianceRecords within a Compartment",
              options: [
                optCompartmentId2,
                optCompartmentIdInSubtree,
                optLimit,
                optPage,
                optSortOrder,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "scheduler-job",
          description: "A SchedulerJob resource",
          subcommands: [
            {
              name: "delete",
              description:
                "Deletes the schedule job specified by an identifier",
              options: [
                optSchedulerJobId,
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
                      "WAITING",
                      "FAILED",
                      "SUCCEEDED",
                      "CANCELED",
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
              description:
                "Get the details of a lifecycle management operations job in Fleet Application Management",
              options: [optSchedulerJobId, optFromJson],
            },
            {
              name: "manage-job-execution",
              description:
                "Manage execution actions for a Job like retrying or pausing a task",
              options: [
                {
                  name: "--action-details",
                  args: { name: "json" },
                  isRequired: true,
                },
                optSchedulerJobId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "manage-job-execution-step-based-user-action-details",
              description:
                "Manage execution actions for a Job like retrying or pausing a task",
              options: [
                optSchedulerJobId,
                {
                  name: "--action-details-action",
                  description: "Action to be Performed",
                  args: { suggestions: ["RETRY", "RESUME", "IGNORE", "ABORT"] },
                  isRequired: true,
                },
                {
                  name: "--action-details-action-group-id",
                  description: "Unique identifier for the action group",
                  args: { name: "action-details-action-group-id" },
                  isRequired: true,
                },
                {
                  name: "--action-details-resource-id",
                  description: "Resource OCID",
                  args: { name: "action-details-resource-id" },
                  isRequired: true,
                },
                {
                  name: "--action-details-step-name",
                  description:
                    "Name of the step on which user action needs to be performed",
                  args: { name: "action-details-step-name" },
                  isRequired: true,
                },
                optIfMatch,
                {
                  name: "--action-details-target-id",
                  description: "Target associated with the execution",
                  args: { name: "action-details-target-id" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "manage-job-execution-action-group-based-user-action-details",
              description:
                "Manage execution actions for a Job like retrying or pausing a task",
              options: [
                optSchedulerJobId,
                {
                  name: "--action-details-action",
                  description: "Action to be Performed",
                  args: { suggestions: ["RETRY", "RESUME", "IGNORE", "ABORT"] },
                  isRequired: true,
                },
                {
                  name: "--action-details-action-group-id",
                  description: "Unique identifier for the action group",
                  args: { name: "action-details-action-group-id" },
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
                "Updates certain attributes for the specified schedule job",
              options: [
                optSchedulerJobId,
                {
                  name: "--time-scheduled",
                  description: "The scheduled date and time for the Job",
                  args: { name: "datetime" },
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
                      "WAITING",
                      "FAILED",
                      "SUCCEEDED",
                      "CANCELED",
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
          ],
        },
        {
          name: "installed-patch-collection",
          description: "Results of an installed patches search",
          subcommands: [
            {
              name: "list-installed-patches",
              description: "Gets a list of installed patches",
              options: [
                optCompartmentId3,
                optTargetId,
                optTargetName2,
                optSeverity2,
                {
                  name: "--patch-level",
                  description: "Patch level",
                  args: { name: "patch-level" },
                },
                {
                  name: "--patch-type",
                  description: "Patch Type",
                  args: { name: "patch-type" },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["patchName"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "recommended-patch-collection",
          description: "Results of an recommended patches search",
          subcommands: [
            {
              name: "list-recommended-patches",
              description: "Gets a list of recommended patches",
              options: [
                optCompartmentId3,
                {
                  name: "--target-id",
                  description: "Target identifier",
                  args: { name: "target-id" },
                },
                optTargetName,
                {
                  name: "--patch-level",
                  description: "Patch level",
                  args: {
                    suggestions: [
                      "LATEST",
                      "LATEST_MINUS_ONE",
                      "LATEST_MINUS_TWO",
                    ],
                  },
                },
                optSeverity2,
                {
                  name: "--patch-type",
                  description: "Patch Type",
                  args: { name: "patch-type" },
                },
                {
                  name: "--patch-id",
                  description: "Patch identifier",
                  args: { name: "patch-id" },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["patchName"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "step-collection",
          description: "Results of a StepSummary search",
          subcommands: [
            {
              name: "list-steps",
              description: "Returns a list of Steps for an Activity Execution",
              options: [
                optSchedulerJobId,
                optJobActivityId,
                optResourceTaskId,
                optStepName,
                optTargetName,
                optSequence,
                optLimit,
                optPage,
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
    {
      name: "fleet-apps-management-provision",
      description:
        "Fleet Application Management provides a centralized platform to help you automate resource management tasks",
      subcommands: [
        {
          name: "provision",
          description: "A FamProvision is a description of a FamProvision",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves a Provision into a different compartment within the same tenancy",
              options: [
                optProvisionId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to move the FamProvision to",
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
              description: "Creates a Provision",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to create the FamProvision in",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--package-catalog-item-id",
                  description: "The OCID of the Catalog Item",
                  args: { name: "package-catalog-item-id" },
                  isRequired: true,
                },
                {
                  name: "--config-catalog-item-id",
                  description:
                    "A OCID of the Catalog Item to a file with key/value pairs to set up variables for createStack API",
                  args: { name: "config-catalog-item-id" },
                  isRequired: true,
                },
                {
                  name: "--fleet-id",
                  description: "The OCID of the Fleet",
                  args: { name: "fleet-id" },
                  isRequired: true,
                },
                {
                  name: "--tf-variable-tenancy-id",
                  description:
                    "A mandatory variable added to a list of RMS variables for createStack API",
                  args: { name: "tf-variable-tenancy-id" },
                  isRequired: true,
                },
                {
                  name: "--tf-variable-region-id",
                  description:
                    "A mandatory variable added to a list of RMS variables for createStack API",
                  args: { name: "tf-variable-region-id" },
                  isRequired: true,
                },
                optDisplayName,
                {
                  name: "--provision-description",
                  description: "A description of the provision",
                  args: { name: "provision-description" },
                },
                {
                  name: "--tf-variable-current-user-id",
                  description:
                    "An optional variable added to a list of RMS variables for createStack API",
                  args: { name: "tf-variable-current-user-id" },
                },
                {
                  name: "--tf-variable-compartment-id",
                  description:
                    "An optional variable added to a list of RMS variables for createStack API",
                  args: { name: "tf-variable-compartment-id" },
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
              description: "Deletes a Provision",
              options: [
                optProvisionId,
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
              description: "Gets information about a Provision",
              options: [optProvisionId, optFromJson],
            },
            {
              name: "update",
              description: "Updates a Provision",
              options: [
                optProvisionId,
                optDisplayName,
                {
                  name: "--provision-description",
                  description: "A description of the provision",
                  args: { name: "provision-description" },
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
          ],
        },
        {
          name: "provision-collection",
          description: "Results of a famProvision search",
          subcommands: [
            {
              name: "list-provisions",
              description:
                "Returns a list of all the Provisions in the specified compartment",
              options: [
                optCompartmentId2,
                optLifecycleState,
                optDisplayName3,
                {
                  name: "--id",
                  description:
                    "Unique identifier or OCID for listing a single provision by id",
                  args: { name: "id" },
                },
                optFleetId2,
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
      name: "fleet-apps-management-runbooks",
      description:
        "Fleet Application Management provides a centralized platform to help you automate resource management tasks",
      subcommands: [
        {
          name: "import-runbook-details",
          description: "Request to Import Runbook",
          subcommands: [
            {
              name: "import-runbook",
              description: "Import the specified version of the runbook",
              options: [
                optCompartmentId4,
                optContentSource,
                optContentDestination,
                {
                  name: "--runbook-name",
                  description: "The name of the runbook",
                  args: { name: "runbook-name" },
                },
                {
                  name: "--import-option",
                  description: "ImportOptions for Runbook",
                  args: { suggestions: ["RETAIN", "REPLACE", "INCREMENT"] },
                },
                {
                  name: "--version-parameterconflict",
                  description: "Version number",
                  args: { name: "version-parameterconflict" },
                },
                optRequiredValues,
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
          name: "runbook-import-status-collection",
          description: "Results of a runbook search",
          subcommands: [
            {
              name: "list-runbook-import-statuses",
              description:
                "Returns a list of all the Runbook import status in the specified compartment",
              options: [
                optCompartmentId3,
                optId,
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
          name: "import-runbook-version-details",
          description: "Request to Export Runbook Version",
          subcommands: [
            {
              name: "import-runbook-version",
              description: "Export the specified version of the runbook",
              options: [
                optCompartmentId4,
                optContentSource,
                optContentDestination,
                {
                  name: "--runbook-id",
                  description: "The OCID of the resource",
                  args: { name: "runbook-id" },
                },
                {
                  name: "--import-option",
                  description: "ImportOptions for Runbook",
                  args: { name: "import-option" },
                },
                {
                  name: "--version-parameterconflict",
                  description: "Version number",
                  args: { name: "version-parameterconflict" },
                },
                optRequiredValues,
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
          name: "import-runbook-precheck-details",
          description: "Request for precheck of Runbook import",
          subcommands: [
            {
              name: "import-runbook-precheck",
              description: "Precheck for import runbook",
              options: [
                optCompartmentId4,
                optContentSource,
                optContentDestination,
                { name: "--import-as", args: { name: "json" } },
                optRequiredValues,
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
          name: "runbook-import",
          description: "Runbook Import Status check details",
          subcommands: [
            {
              name: "get",
              description:
                "Get the runbook import status for provided runbook and importId",
              options: [
                optRunbookId,
                {
                  name: "--import-id",
                  description:
                    "Unique tracking identifier to fetch runbook import status",
                  args: { name: "import-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "runbook-version",
          description: "Version for the runbook",
          subcommands: [
            {
              name: "create",
              description: "Add RunbookVersion in Fleet Application Management",
              options: [
                optRunbookId2,
                {
                  name: "--tasks",
                  description: "A set of tasks to execute in the runbook",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--groups",
                  description: "The groups of the runbook version",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--execution-workflow-details",
                  args: { name: "json" },
                  isRequired: true,
                },
                { name: "--rollback-workflow-details", args: { name: "json" } },
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
                "Removes a Runbook Version from the runbook in Fleet Application Management",
              options: [
                optRunbookVersionId,
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
              description: "Gets a Runbook Version by identifier",
              options: [optRunbookVersionId, optFromJson],
            },
            {
              name: "update",
              description: "Updates the RunbookVersion",
              options: [
                optRunbookVersionId,
                {
                  name: "--tasks",
                  description: "A set of tasks to execute in the runbook",
                  args: { name: "json" },
                },
                {
                  name: "--groups",
                  description: "The groups of the runbook version",
                  args: { name: "json" },
                },
                {
                  name: "--execution-workflow-details",
                  args: { name: "json" },
                },
                { name: "--rollback-workflow-details", args: { name: "json" } },
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
          name: "runbook-import-dependency-collection",
          description: "Results of a find runbook import dependency",
          subcommands: [
            {
              name: "find-runbook-import-dependency",
              description: "Find runbook import Dependencies",
              options: [
                optCompartmentId4,
                { name: "--content", args: { name: "json" }, isRequired: true },
                optLimit,
                optPage,
                optFromJson,
              ],
            },
            {
              name: "find-runbook-import-dependency-transfer-runbook-object-storage-bucket-content-details",
              description: "Find runbook import Dependencies",
              options: [
                optCompartmentId4,
                {
                  name: "--content-namespace-name",
                  description: "Namespace",
                  args: { name: "content-namespace-name" },
                  isRequired: true,
                },
                {
                  name: "--content-bucket-name",
                  description: "Bucket Name",
                  args: { name: "content-bucket-name" },
                  isRequired: true,
                },
                optLimit,
                optPage,
                {
                  name: "--content-object-name",
                  description: "Object Name",
                  args: { name: "content-object-name" },
                },
                {
                  name: "--content-checksum",
                  description: "Md5 checksum of the artifact",
                  args: { name: "content-checksum" },
                },
                optFromJson,
              ],
            },
            {
              name: "find-runbook-import-dependency-transfer-runbook-par-url-content-details",
              description: "Find runbook import Dependencies",
              options: [
                optCompartmentId4,
                {
                  name: "--content-url",
                  description: "PAR url",
                  args: { name: "content-url" },
                  isRequired: true,
                },
                optLimit,
                optPage,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "task-record",
          description: "Attributes of a task record",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves a task record into a different compartment within the same tenancy",
              options: [
                optTaskRecordId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to move the task record to",
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
              description: "Creates a new task record",
              options: [
                optDisplayName2,
                { name: "--details", args: { name: "json" }, isRequired: true },
                optCompartmentId4,
                optDescription,
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
              description: "Deletes the task record specified by an identifier",
              options: [
                optTaskRecordId,
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
              description: "Gets information for the specified task record",
              options: [optTaskRecordId, optFromJson],
            },
            {
              name: "update",
              description:
                "Updates certain attributes for the specified task record",
              options: [
                optTaskRecordId,
                optDisplayName,
                optDescription,
                optDetails,
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
          ],
        },
        {
          name: "task-record-collection",
          description: "Results of a task record search",
          subcommands: [
            {
              name: "list-task-records",
              description:
                "Returns a list of all the task records in the specified compartment",
              options: [
                optCompartmentId2,
                {
                  name: "--platform",
                  description: "The platform for the task record",
                  args: { name: "platform" },
                },
                {
                  name: "--type",
                  description: "The type of the Task",
                  args: {
                    suggestions: [
                      "USER_DEFINED",
                      "ORACLE_DEFINED",
                      "SYSTEM_DEFINED",
                    ],
                  },
                },
                optDisplayName3,
                {
                  name: "--operation",
                  description:
                    "A filter to return task records whose operation matches the given lifecycle operation",
                  args: { name: "operation" },
                },
                {
                  name: "--id",
                  description:
                    "Unique identifier or OCID for listing a single task record by id",
                  args: { name: "id" },
                },
                optLimit,
                optPage,
                {
                  name: "--lifecycle-state",
                  description: "The current state of the task record",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "INACTIVE",
                      "DELETED",
                      "DELETING",
                      "FAILED",
                      "UPDATING",
                    ],
                  },
                },
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
          name: "runbook-export-status-collection",
          description: "Results of a runbook search",
          subcommands: [
            {
              name: "list-runbook-export-statuses",
              description:
                "Returns a list of all the Runbook export status in the specified compartment",
              options: [
                optCompartmentId3,
                optId,
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
          name: "runbook-export-dependency-collection",
          description: "Results of a find runbook export dependency",
          subcommands: [
            {
              name: "find-runbook-export-dependency",
              description: "Find runbook export Dependencies",
              options: [
                optRunbookId2,
                {
                  name: "--runbook-version-id",
                  description: "The OCID of the resource",
                  args: { name: "runbook-version-id" },
                },
                optLimit,
                optPage,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "runbook-version-collection",
          description: "Results of a RunbookVersion search",
          subcommands: [
            {
              name: "list-runbook-versions",
              description:
                "List versions for a runbook in Fleet Application Management",
              options: [
                optCompartmentId2,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources whose lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "DELETED",
                      "FAILED",
                      "NEEDS_ATTENTION",
                      "INACTIVE",
                      "CREATING",
                      "DELETING",
                      "UPDATING",
                    ],
                  },
                },
                optRunbookId3,
                {
                  name: "--id",
                  description:
                    "A filter to return runbook versions whose identifier matches the given identifier",
                  args: { name: "id" },
                },
                optLimit,
                optPage,
                optSortOrder,
                optSortBy,
                {
                  name: "--name",
                  description:
                    "A filter to return only resources that match the entire name given",
                  args: { name: "name" },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "runbook-collection",
          description: "Results of a runbook search",
          subcommands: [
            {
              name: "list-runbooks",
              description:
                "Returns a list of all the runbooks in the specified compartment",
              options: [
                optCompartmentId2,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter to return only resources whose lifecycleState matches the given lifecycleState",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "DELETED",
                      "FAILED",
                      "INACTIVE",
                      "CREATING",
                      "DELETING",
                      "UPDATING",
                    ],
                  },
                },
                optDisplayName3,
                optId,
                {
                  name: "--type",
                  description:
                    "A filter to return runbooks whose type matches the given type",
                  args: {
                    suggestions: [
                      "USER_DEFINED",
                      "ORACLE_DEFINED",
                      "SYSTEM_DEFINED",
                    ],
                  },
                },
                {
                  name: "--platform",
                  description:
                    "A filter to return runbooks whose platform matches the given platform",
                  args: { name: "platform" },
                },
                {
                  name: "--operation",
                  description:
                    "A filter to return runbooks whose operation matches the given lifecycle operation",
                  args: { name: "operation" },
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
          name: "runbook",
          description: "Runbook definition",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves a Runbook into a different compartment within the same tenancy",
              options: [
                optRunbookId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to move the Planner to",
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
              description: "Creates a runbook",
              options: [
                optDisplayName2,
                {
                  name: "--operation",
                  description: "The lifecycle operation performed by the task",
                  args: { name: "operation" },
                  isRequired: true,
                },
                {
                  name: "--runbook-version",
                  args: { name: "json" },
                  isRequired: true,
                },
                optCompartmentId4,
                optDescription,
                {
                  name: "--os-type",
                  description: "The OS type for the runbook",
                  args: { suggestions: ["WINDOWS", "LINUX", "GENERIC"] },
                },
                {
                  name: "--platform",
                  description: "The platform of the runbook",
                  args: { name: "platform" },
                },
                {
                  name: "--is-default",
                  description: "Is the runbook default?",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--is-sudo-access-needed",
                  description: "Does this runbook need SUDO access to execute?",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--estimated-time",
                  description:
                    "Estimated time to successfully complete the runbook execution",
                  args: { name: "estimated-time" },
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
              description: "Deletes a runbook specified by the identifier",
              options: [
                optRunbookId,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "export",
              description: "Export the specified version of the runbook",
              options: [
                optContentDestination,
                optRunbookId,
                optExportAs,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "export-runbook-transfer-runbook-object-storage-bucket-content-details",
              description: "Export the specified version of the runbook",
              options: [
                optRunbookId,
                {
                  name: "--content-destination-namespace-name",
                  description: "Namespace",
                  args: { name: "content-destination-namespace-name" },
                  isRequired: true,
                },
                {
                  name: "--content-destination-bucket-name",
                  description: "Bucket Name",
                  args: { name: "content-destination-bucket-name" },
                  isRequired: true,
                },
                optExportAs,
                optIfMatch,
                {
                  name: "--content-destination-object-name",
                  description: "Object Name",
                  args: { name: "content-destination-object-name" },
                },
                {
                  name: "--content-destination-checksum",
                  description: "Md5 checksum of the artifact",
                  args: { name: "content-destination-checksum" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "export-runbook-transfer-runbook-par-url-content-details",
              description: "Export the specified version of the runbook",
              options: [
                optRunbookId,
                {
                  name: "--content-destination-url",
                  description: "PAR url",
                  args: { name: "content-destination-url" },
                  isRequired: true,
                },
                optExportAs,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "export-runbook-version",
              description: "Export the specified version of the runbook",
              options: [
                optContentDestination,
                optRunbookVersionId,
                optVersionParameterconflict,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "export-runbook-version-transfer-runbook-object-storage-bucket-content-details",
              description: "Export the specified version of the runbook",
              options: [
                optRunbookVersionId,
                {
                  name: "--content-destination-namespace-name",
                  description: "Namespace",
                  args: { name: "content-destination-namespace-name" },
                  isRequired: true,
                },
                {
                  name: "--content-destination-bucket-name",
                  description: "Bucket Name",
                  args: { name: "content-destination-bucket-name" },
                  isRequired: true,
                },
                optVersionParameterconflict,
                optIfMatch,
                {
                  name: "--content-destination-object-name",
                  description: "Object Name",
                  args: { name: "content-destination-object-name" },
                },
                {
                  name: "--content-destination-checksum",
                  description: "Md5 checksum of the artifact",
                  args: { name: "content-destination-checksum" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "export-runbook-version-transfer-runbook-par-url-content-details",
              description: "Export the specified version of the runbook",
              options: [
                optRunbookVersionId,
                {
                  name: "--content-destination-url",
                  description: "PAR url",
                  args: { name: "content-destination-url" },
                  isRequired: true,
                },
                optVersionParameterconflict,
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
                "Get the details of a runbook in Fleet Application Management",
              options: [optRunbookId, optFromJson],
            },
            {
              name: "publish",
              description: "Publish the specified version of the runbook",
              options: [
                optRunbookId2,
                {
                  name: "--runbook-version-id",
                  description: "The OCID of the resource",
                  args: { name: "runbook-version-id" },
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
              name: "set-default",
              description: "Set a runbook as default",
              options: [optRunbookId2, optIfMatch, optFromJson],
            },
            {
              name: "update",
              description: "Updates the runbook specified by the identifier",
              options: [
                optRunbookId,
                optDisplayName,
                optDescription,
                {
                  name: "--is-sudo-access-needed",
                  description: "Does this runbook need SUDO access to execute?",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--operation",
                  description:
                    "The lifecycle operation performed by the runbook",
                  args: { name: "operation" },
                },
                {
                  name: "--os-type",
                  description: "The OS type for the runbook",
                  args: { suggestions: ["WINDOWS", "LINUX", "GENERIC"] },
                },
                {
                  name: "--platform",
                  description: "The platform of the runbook",
                  args: { name: "platform" },
                },
                {
                  name: "--is-default",
                  description: "Is the runbook default?",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--estimated-time",
                  description:
                    "Estimated time to successfully complete the runbook execution",
                  args: { name: "estimated-time" },
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
          ],
        },
        {
          name: "runbook-export",
          description: "Runbook Export Status check details",
          subcommands: [
            {
              name: "get",
              description:
                "Get the runbook export status for provided runbook and exportId",
              options: [
                optRunbookId,
                {
                  name: "--export-id",
                  description:
                    "Unique tracking identifier to fetch runbook export status",
                  args: { name: "export-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "fleet-apps-management-work-request",
      description:
        "Fleet Application Management provides a centralized platform to help you automate resource management tasks",
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
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["timestamp"] },
                },
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
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["timestamp"] },
                },
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
                optCompartmentId2,
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
                      "NEEDS_ATTENTION",
                      "FAILED",
                      "SUCCEEDED",
                      "CANCELING",
                      "CANCELED",
                    ],
                  },
                },
                optResourceId,
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
