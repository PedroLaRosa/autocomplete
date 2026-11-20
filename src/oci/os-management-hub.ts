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
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "WAITING",
      "ACCEPTED",
      "IN_PROGRESS",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
      "SKIPPED",
    ],
  },
  isRepeatable: true,
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
const optWorkRequestDetails: Fig.Option = {
  name: "--work-request-details",
  args: { name: "json" },
};
const optDisplayNameContains: Fig.Option = {
  name: "--display-name-contains",
  description:
    "A filter to return resources that may partially match the given display name",
  args: { name: "display-name-contains" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment that contains the resources to list",
  args: { name: "compartment-id" },
};
const optManagedInstanceId: Fig.Option = {
  name: "--managed-instance-id",
  description: "The OCID of the managed instance",
  args: { name: "managed-instance-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optSoftwareSourceId: Fig.Option = {
  name: "--software-source-id",
  description: "The OCID of the software source",
  args: { name: "software-source-id" },
  isRequired: true,
};
const optGroupId: Fig.Option = {
  name: "--group-id",
  description: "The managed instance group OCID. required",
  args: { name: "group-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return resources that match the given display names",
  args: { name: "display-name" },
  isRepeatable: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return resources that match the given user-friendly name",
  args: { name: "display-name" },
};
const optWaitForState2: Fig.Option = {
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
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optProfileId: Fig.Option = {
  name: "--profile-id",
  description: "The OCID of the registration profile",
  args: { name: "profile-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
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
      "INACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "User-friendly name for the software source",
  args: { name: "display-name" },
};
const optDynamicSetId: Fig.Option = {
  name: "--dynamic-set-id",
  description: "The OCID of the dynamic set",
  args: { name: "dynamic-set-id" },
  isRequired: true,
};
const optManagementStationId: Fig.Option = {
  name: "--management-station-id",
  description: "The OCID of the management station",
  args: { name: "management-station-id" },
  isRequired: true,
};
const optLocation: Fig.Option = {
  name: "--location",
  description:
    "A filter to return only resources whose location matches the given value",
  args: { suggestions: ["ON_PREMISE", "OCI_COMPUTE", "AZURE", "EC2", "GCP"] },
  isRepeatable: true,
};
const optLocationNe: Fig.Option = {
  name: "--location-ne",
  description:
    "A filter to return only resources whose location does not match the given value",
  args: { suggestions: ["ON_PREMISE", "OCI_COMPUTE", "AZURE", "EC2", "GCP"] },
  isRepeatable: true,
};
const optStreamName: Fig.Option = {
  name: "--stream-name",
  description: "The name of a stream of the specified module",
  args: { name: "stream-name" },
};
const optCompartmentIdInSubtree: Fig.Option = {
  name: "--compartment-id-in-subtree",
  description:
    "Indicates whether to include subcompartments in the returned results",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optEventId: Fig.Option = {
  name: "--event-id",
  description: "The OCID of the event",
  args: { name: "event-id" },
  isRequired: true,
};
const optIsManagedByAlx: Fig.Option = {
  name: "--is-managed-by-alx",
  description:
    "Indicates whether to list only resources managed by the Autonomous Linux service",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optGroupId2: Fig.Option = {
  name: "--group-id",
  description: "The OCID of the managed instance group. required",
  args: { name: "group-id" },
  isRequired: true,
};
const optIsDefaultProfile: Fig.Option = {
  name: "--is-default-profile",
  description: "Indicates if the profile is set as the default",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optModuleName: Fig.Option = {
  name: "--module-name",
  description: "The name of a module",
  args: { name: "module-name" },
  isRequired: true,
};
const optModuleName2: Fig.Option = {
  name: "--module-name",
  description: "The name of the module",
  args: { name: "module-name" },
  isRequired: true,
};
const optOsFamily: Fig.Option = {
  name: "--os-family",
  description:
    "A filter to return only resources that match the given operating system family",
  args: {
    suggestions: [
      "ORACLE_LINUX_10",
      "ORACLE_LINUX_9",
      "ORACLE_LINUX_8",
      "ORACLE_LINUX_7",
      "ORACLE_LINUX_6",
      "WINDOWS_SERVER_2016",
      "WINDOWS_SERVER_2019",
      "WINDOWS_SERVER_2022",
      "WINDOWS_SERVER_2025",
      "WINDOWS_11",
      "ALL",
      "UBUNTU_20_04",
      "UBUNTU_22_04",
      "UBUNTU_24_04",
    ],
  },
  isRepeatable: true,
};
const optOsFamily2: Fig.Option = {
  name: "--os-family",
  description:
    "A filter to return only resources that match the given operating system family",
  args: {
    suggestions: [
      "ORACLE_LINUX_10",
      "ORACLE_LINUX_9",
      "ORACLE_LINUX_8",
      "ORACLE_LINUX_7",
      "ORACLE_LINUX_6",
      "WINDOWS_SERVER_2016",
      "WINDOWS_SERVER_2019",
      "WINDOWS_SERVER_2022",
      "WINDOWS_SERVER_2025",
      "WINDOWS_11",
      "ALL",
      "UBUNTU_20_04",
      "UBUNTU_22_04",
      "UBUNTU_24_04",
    ],
  },
};
const optPackageNames: Fig.Option = {
  name: "--package-names",
  description: "The list of package names",
  args: { name: "json" },
  isRequired: true,
};
const optStageId: Fig.Option = {
  name: "--stage-id",
  description: "The OCID of the lifecycle stage. required",
  args: { name: "stage-id" },
  isRequired: true,
};
const optClassificationType: Fig.Option = {
  name: "--classification-type",
  description:
    "A filter to return only packages that match the given update classification type",
  args: { suggestions: ["SECURITY", "BUGFIX", "ENHANCEMENT", "OTHER"] },
  isRepeatable: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment that contains the registration profile",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId4: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment that contains the software source",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "User-specified description for the software source",
  args: { name: "description" },
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "User-specified description of the registration profile",
  args: { name: "description" },
};
const optDisplayName4: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
  isRequired: true,
};
const optIsLatest: Fig.Option = {
  name: "--is-latest",
  description:
    "Indicates whether to list only the latest versions of packages, module streams, and stream profiles",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optManagementStationId2: Fig.Option = {
  name: "--management-station-id",
  description:
    "Description: The OCID of the management station to associate with an instance once registered",
  args: { name: "management-station-id" },
};
const optRegistrationType: Fig.Option = {
  name: "--registration-type",
  description: "The type of instance to register",
  args: { name: "registration-type" },
};
const optScheduledJobId: Fig.Option = {
  name: "--scheduled-job-id",
  description: "The OCID of the scheduled job",
  args: { name: "scheduled-job-id" },
  isRequired: true,
};
const optSoftwareSourceId2: Fig.Option = {
  name: "--software-source-id",
  description:
    "The OCID of the software source that provides the module stream",
  args: { name: "software-source-id" },
};
const optAdvancedRepoOptions: Fig.Option = {
  name: "--advanced-repo-options",
  description: "Advanced repository options for the software source",
  args: { name: "advanced-repo-options" },
};
const optArchType: Fig.Option = {
  name: "--arch-type",
  description:
    "A filter to return only instances whose architecture type matches the given architecture",
  args: {
    suggestions: [
      "X86_64",
      "AARCH64",
      "I686",
      "NOARCH",
      "SRC",
      "I386",
      "AMD64",
      "ARM64",
      "ALL",
    ],
  },
  isRepeatable: true,
};
const optArchType2: Fig.Option = {
  name: "--arch-type",
  description: "A filter to return only profiles that match the given archType",
  args: {
    suggestions: [
      "X86_64",
      "AARCH64",
      "I686",
      "NOARCH",
      "SRC",
      "I386",
      "AMD64",
      "ARM64",
      "ALL",
    ],
  },
};
const optCompartmentId5: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment that contains the software source",
  args: { name: "compartment-id" },
};
const optDescription3: Fig.Option = {
  name: "--description",
  description: "User-specified description of the software source",
  args: { name: "description" },
};
const optDynamicSetId2: Fig.Option = {
  name: "--dynamic-set-id",
  description: "The OCID of the dynamic set",
  args: { name: "dynamic-set-id" },
};
const optFile: Fig.Option = {
  name: "--file",
  description:
    "The name of the file that will receive the response data, or '-' to write to STDOUT",
  args: { name: "file", template: "filepaths" },
  isRequired: true,
};
const optGpgKeyUrl: Fig.Option = {
  name: "--gpg-key-url",
  description: "URI of the GPG key for this software source",
  args: { name: "gpg-key-url" },
};
const optGroupId3: Fig.Option = {
  name: "--group-id",
  description:
    "The OCID of the managed instance group for which to list resources",
  args: { name: "group-id" },
};
const optIsGpgCheckEnabled: Fig.Option = {
  name: "--is-gpg-check-enabled",
  description:
    "Whether signature verification should be done for the software source",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsMirrorSyncAllowed: Fig.Option = {
  name: "--is-mirror-sync-allowed",
  description:
    "Whether this software source can be synced to a management station",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsSslVerifyEnabled: Fig.Option = {
  name: "--is-ssl-verify-enabled",
  description: "Whether SSL validation needs to be turned",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLifecycleEnvId: Fig.Option = {
  name: "--lifecycle-env-id",
  description: "The OCID of the lifecycle environment. required",
  args: { name: "lifecycle-env-id" },
  isRequired: true,
};
const optManagedInstanceId2: Fig.Option = {
  name: "--managed-instance-id",
  description: "The OCID of the managed instance",
  args: { name: "managed-instance-id" },
};
const optManagedInstances: Fig.Option = {
  name: "--managed-instances",
  description: "The list of managed instance OCIDs to be attached/detached",
  args: { name: "json" },
};
const optModuleName3: Fig.Option = {
  name: "--module-name",
  description: "The name of a module",
  args: { name: "module-name" },
};
const optProfileName: Fig.Option = {
  name: "--profile-name",
  description: "The name of a profile of the specified module stream",
  args: { name: "profile-name" },
};
const optRebootTimeoutInMins: Fig.Option = {
  name: "--reboot-timeout-in-mins",
  description:
    "The number of minutes the service waits for the reboot to complete",
  args: { name: "integer" },
};
const optSoftwareSourceId3: Fig.Option = {
  name: "--software-source-id",
  description: "The OCID of the software source",
  args: { name: "software-source-id" },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["name"] },
};
const optUpdateTypes: Fig.Option = {
  name: "--update-types",
  description: "The types of updates to be applied",
  args: { name: "json" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optAdvisoryName: Fig.Option = {
  name: "--advisory-name",
  description: "The assigned erratum name",
  args: { name: "advisory-name" },
  isRepeatable: true,
};
const optArchType3: Fig.Option = {
  name: "--arch-type",
  description: "The architecture type",
  args: {
    suggestions: [
      "X86_64",
      "AARCH64",
      "I686",
      "NOARCH",
      "SRC",
      "I386",
      "AMD64",
      "ARM64",
      "ALL",
    ],
  },
  isRequired: true,
};
const optAutonomousSettings: Fig.Option = {
  name: "--autonomous-settings",
  args: { name: "json" },
};
const optFilter: Fig.Option = {
  name: "--filter",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optIsAutoResolveDependencies: Fig.Option = {
  name: "--is-auto-resolve-dependencies",
  description:
    "Indicates whether the service should automatically resolve package dependencies when including specific",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsLatestContentOnly: Fig.Option = {
  name: "--is-latest-content-only",
  description:
    "Indicates whether the software source will include only the latest versions of content from vendor software",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLifecycleEnvId2: Fig.Option = {
  name: "--lifecycle-env-id",
  description: "The OCID of the lifecycle environment",
  args: { name: "lifecycle-env-id" },
};
const optModuleName4: Fig.Option = {
  name: "--module-name",
  description: "The resource name",
  args: { name: "module-name" },
};
const optModuleNameContains: Fig.Option = {
  name: "--module-name-contains",
  description:
    "A filter to return resources that may partially match the name given",
  args: { name: "module-name-contains" },
};
const optName: Fig.Option = {
  name: "--name",
  description: "A filter based on the unique identifier for the Windows update",
  args: { name: "name" },
  isRepeatable: true,
};
const optNotificationTopicId: Fig.Option = {
  name: "--notification-topic-id",
  description: "The OCID for the Oracle Notifications service (ONS) topic",
  args: { name: "notification-topic-id" },
};
const optOsFamily3: Fig.Option = {
  name: "--os-family",
  description: "The operating system family",
  args: {
    suggestions: [
      "ORACLE_LINUX_10",
      "ORACLE_LINUX_9",
      "ORACLE_LINUX_8",
      "ORACLE_LINUX_7",
      "ORACLE_LINUX_6",
      "WINDOWS_SERVER_2016",
      "WINDOWS_SERVER_2019",
      "WINDOWS_SERVER_2022",
      "WINDOWS_SERVER_2025",
      "WINDOWS_11",
      "ALL",
      "UBUNTU_20_04",
      "UBUNTU_22_04",
      "UBUNTU_24_04",
    ],
  },
  isRequired: true,
};
const optPackages: Fig.Option = {
  name: "--packages",
  description:
    "List of packages specified by the name of the package (N) or the full package name (NVRA or NEVRA)",
  args: { name: "json" },
  isRequired: true,
};
const optSoftwarePackageName: Fig.Option = {
  name: "--software-package-name",
  description: "The name of the software package",
  args: { name: "software-package-name" },
  isRequired: true,
};
const optSortBy3: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "name", "displayName"] },
};
const optSortOrder2: Fig.Option = {
  name: "--sort-order",
  description: "The sort order",
  args: { suggestions: ["ASC", "DESC"] },
};
const optStageId2: Fig.Option = {
  name: "--stage-id",
  description: "The OCID of the lifecycle stage for which to list resources",
  args: { name: "stage-id" },
};
const optStatus: Fig.Option = {
  name: "--status",
  description:
    "A filter to return only managed instances whose status matches the status provided",
  args: {
    suggestions: [
      "NORMAL",
      "UNREACHABLE",
      "ERROR",
      "WARNING",
      "REGISTRATION_ERROR",
      "DELETING",
      "ONBOARDING",
      "REBOOTING",
    ],
  },
  isRepeatable: true,
};
const optVendorName: Fig.Option = {
  name: "--vendor-name",
  description:
    "A filter to return only resources that match the given vendor name",
  args: { suggestions: ["ORACLE", "MICROSOFT", "CANONICAL"] },
};
const optVendorName2: Fig.Option = {
  name: "--vendor-name",
  description: "The vendor of the operating system for the instance",
  args: { suggestions: ["ORACLE", "MICROSOFT", "CANONICAL"] },
  isRequired: true,
};
const optWindowsUpdateTypes: Fig.Option = {
  name: "--windows-update-types",
  description: "The types of Windows updates to be installed",
  args: { name: "json" },
};
const completionSpec: Fig.Spec = {
  name: "os-management-hub",
  description: "OS Management Hub",
  subcommands: [
    {
      name: "dynamic-set",
      description: "An object that defines the dynamic set",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Move the specified Dynamic Set to a different compartment",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the group to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDynamicSetId,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new dynamic set",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the dynamic set",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--target-compartments",
              description: "The list of compartment details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--match-type",
              description: "Include either any or all attributes",
              args: { suggestions: ["ANY", "ALL"] },
              isRequired: true,
            },
            {
              name: "--matching-rule",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "User-friendly name for the dynamic set",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "User-specified description for the dynamic set",
              args: { name: "description" },
            },
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
          description: "Deletes the specific dynamic set",
          options: [
            optDynamicSetId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about the specified dynamic set",
          options: [optDynamicSetId, optFromJson],
        },
        {
          name: "install-packages",
          description:
            "Installs specified software packages on all managed instances in the dynamic set",
          options: [
            optDynamicSetId,
            optPackageNames,
            optManagedInstances,
            optWorkRequestDetails,
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
            "Lists dynamic sets that match the specified compartment or dynamic set OCID",
          options: [
            optCompartmentId,
            optDisplayNameContains,
            optDisplayName2,
            optDynamicSetId2,
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
          name: "preview-managed-instances",
          description: "Preview a dynamic set",
          options: [
            {
              name: "--target-compartments",
              description: "The list of compartment details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--match-type",
              description: "Include either any or all attributes",
              args: { suggestions: ["ANY", "ALL"] },
              isRequired: true,
            },
            {
              name: "--matching-rule",
              args: { name: "json" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            optCompartmentId,
            optCompartmentIdInSubtree,
            optIfMatch,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optDisplayName2,
            optDisplayNameContains,
            optFromJson,
          ],
        },
        {
          name: "reboot",
          description:
            "Initiates a reboot of all managed instances within the specified dynamic set",
          options: [
            optDynamicSetId,
            optRebootTimeoutInMins,
            optManagedInstances,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description:
            "Removes specified software packages from all managed instances in the dynamic set",
          options: [
            optDynamicSetId,
            optPackageNames,
            optManagedInstances,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified dynamic set",
          options: [
            optDynamicSetId,
            {
              name: "--display-name",
              description: "User-friendly name for the dynamic set",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "User-specified description of the dynamic set",
              args: { name: "description" },
            },
            {
              name: "--target-compartments",
              description: "The list of compartment details",
              args: { name: "json" },
            },
            {
              name: "--match-type",
              description: "Include either any or all attributes",
              args: { suggestions: ["ANY", "ALL"] },
            },
            { name: "--matching-rule", args: { name: "json" } },
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
          name: "update-packages",
          description:
            "Updates all installed software packages on managed instances in the dynamic set",
          options: [
            optDynamicSetId,
            optManagedInstances,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optUpdateTypes,
            optFromJson,
          ],
        },
        {
          name: "list-managed-instances",
          description:
            "Retrieves a list of managed instances associated with a specified dynamic set",
          options: [
            optDynamicSetId,
            optCompartmentId,
            optCompartmentIdInSubtree,
            optDisplayNameContains,
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
      ],
    },
    {
      name: "event",
      description:
        "An event is an occurrence of something of interest on a managed instance, such as a kernel crash",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an event into a different compartment within the same tenancy",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the event to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optEventId,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified event",
          options: [
            optEventId,
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
          description: "Returns information about the specified event",
          options: [optEventId, optFromJson],
        },
        {
          name: "import-event-content",
          description:
            "Uploads an event content ZIP archive from an instance to the service",
          options: [
            optEventId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the tags for an event",
          options: [
            optEventId,
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
          description:
            "Lists events that match the specified criteria, such as compartment, state, and event type",
          options: [
            {
              name: "--event-summary",
              description:
                "A filter to return only events whose summary matches the given value",
              args: { name: "event-summary" },
            },
            {
              name: "--event-summary-contains",
              description:
                "A filter to return only events with a summary that contains the value provided",
              args: { name: "event-summary-contains" },
            },
            {
              name: "--id",
              description: "The OCID of the event",
              args: { name: "id" },
            },
            {
              name: "--event-fingerprint",
              description: "The eventFingerprint of the KernelEventData",
              args: { name: "event-fingerprint" },
            },
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only events that match the state provided",
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
              name: "--resource-id",
              description: "The OCID of the resource",
              args: { name: "resource-id" },
            },
            {
              name: "--type",
              description:
                "A filter to return only resources whose type matches the given value",
              args: {
                suggestions: [
                  "KERNEL_OOPS",
                  "KERNEL_CRASH",
                  "EXPLOIT_ATTEMPT",
                  "SOFTWARE_UPDATE",
                  "KSPLICE_UPDATE",
                  "SOFTWARE_SOURCE",
                  "AGENT",
                  "MANAGEMENT_STATION",
                  "SYSADMIN",
                  "REBOOT",
                  "SNAP_UPDATE",
                ],
              },
              isRepeatable: true,
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
                  "timeOccurredAt",
                  "timeUpdated",
                  "eventSummary",
                ],
              },
            },
            optAll,
            optPageSize,
            {
              name: "--time-created-lt",
              description:
                "A filter that returns events that occurred on or before the date provided",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-gte",
              description:
                "A filter that returns events that occurred on or after the date provided",
              args: { name: "datetime" },
            },
            optIsManagedByAlx,
            optFromJson,
          ],
        },
        {
          name: "get-event-content",
          description:
            "Returns a ZIP archive with additional information about an event",
          options: [optEventId, optFile, optFromJson],
        },
        {
          name: "delete-event-content",
          description: "Deletes an event content ZIP archive from the service",
          options: [optEventId, optIfMatch, optForce2, optFromJson],
        },
      ],
    },
    {
      name: "lifecycle-environment",
      description:
        "Defines the lifecycle environment, including the associated versioned software sources, lifecycle stages",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a lifecycle environment into a different compartment within the same tenancy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the lifecycle environment to",
              args: { name: "compartment-id" },
            },
            optIfMatch,
            optLifecycleEnvId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a lifecycle environment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the lifecycle environment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the lifecycle environment",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--stages",
              description:
                "User-specified list of ranked lifecycle stages used within the lifecycle environment",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--arch-type",
              description:
                "The CPU architecture of the managed instances in the lifecycle environment",
              args: {
                suggestions: [
                  "X86_64",
                  "AARCH64",
                  "I686",
                  "NOARCH",
                  "SRC",
                  "I386",
                  "AMD64",
                  "ARM64",
                  "ALL",
                ],
              },
              isRequired: true,
            },
            {
              name: "--os-family",
              description:
                "The operating system of the managed instances in the lifecycle environment",
              args: {
                suggestions: [
                  "ORACLE_LINUX_10",
                  "ORACLE_LINUX_9",
                  "ORACLE_LINUX_8",
                  "ORACLE_LINUX_7",
                  "ORACLE_LINUX_6",
                  "WINDOWS_SERVER_2016",
                  "WINDOWS_SERVER_2019",
                  "WINDOWS_SERVER_2022",
                  "WINDOWS_SERVER_2025",
                  "WINDOWS_11",
                  "ALL",
                  "UBUNTU_20_04",
                  "UBUNTU_22_04",
                  "UBUNTU_24_04",
                ],
              },
              isRequired: true,
            },
            {
              name: "--vendor-name",
              description:
                "The vendor of the operating system used by the managed instances in the lifecycle environment",
              args: { suggestions: ["ORACLE", "MICROSOFT", "CANONICAL"] },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "User-specified information about the lifecycle environment",
              args: { name: "description" },
            },
            {
              name: "--location",
              description:
                "The location of managed instances attached to the lifecycle environment",
              args: {
                suggestions: [
                  "ON_PREMISE",
                  "OCI_COMPUTE",
                  "AZURE",
                  "EC2",
                  "GCP",
                ],
              },
            },
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
          description: "Deletes the specified lifecycle environment",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optLifecycleEnvId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified lifecycle environment",
          options: [optLifecycleEnvId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists lifecycle environments that match the specified compartment or lifecycle environment OCID",
          options: [
            optCompartmentId,
            optDisplayName,
            optDisplayNameContains,
            optArchType2,
            optOsFamily2,
            optLocation,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the lifecycle environments that match the display name given",
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
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optLocationNe,
            optLifecycleEnvId2,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified lifecycle environment's name, description, stages, or tags",
          options: [
            {
              name: "--display-name",
              description: "A user-friendly name for the lifecycle environment",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "User-specified list of lifecycle stages used within the lifecycle environment",
              args: { name: "description" },
            },
            {
              name: "--stages",
              description: "The list of lifecycle stages to be updated",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optLifecycleEnvId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "lifecycle-stage",
      description: "Defines the lifecycle stage",
      subcommands: [
        {
          name: "get",
          description:
            "Returns information about the specified lifecycle stage",
          options: [optStageId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists lifecycle stages that match the specified compartment or lifecycle stage OCID",
          options: [
            optCompartmentId,
            optDisplayName,
            optDisplayNameContains,
            optSoftwareSourceId3,
            optArchType2,
            optOsFamily2,
            optLocation,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only lifecycle stages whose lifecycle state matches the given lifecycle state",
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
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optLocationNe,
            {
              name: "--stage-id",
              description: "The OCID of the lifecycle stage",
              args: { name: "stage-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "promote-software-source",
          description:
            "Updates the versioned custom software source content to the specified lifecycle stage",
          options: [
            optWorkRequestDetails,
            optSoftwareSourceId3,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optFromJson,
          ],
        },
        {
          name: "reboot",
          description:
            "Reboots all managed instances in the specified lifecycle stage",
          options: [
            optRebootTimeoutInMins,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optFromJson,
          ],
        },
        {
          name: "list-installed-packages",
          description:
            "Lists installed packages on managed instances in a specified lifecycle stage",
          options: [
            optCompartmentId,
            optDisplayName,
            optDisplayNameContains,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only lifecycle stages whose lifecycle state matches the given lifecycle state",
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
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optStageId,
            optFromJson,
          ],
        },
        {
          name: "attach-managed-instance",
          description: "Attaches (adds) managed instances to a lifecycle stage",
          options: [
            {
              name: "--managed-instance-details",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optFromJson,
          ],
        },
        {
          name: "detach-managed-instance",
          description:
            "Detaches (removes) a managed instance from a lifecycle stage",
          options: [
            {
              name: "--managed-instance-details",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStageId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "managed-instance",
      description:
        "An object that defines the instance being managed by the service",
      subcommands: [
        {
          name: "associate-managed-instances-with-management-station",
          description:
            "Associates managed instances to the specified management station",
          options: [
            optManagementStationId,
            {
              name: "--managed-instances",
              description:
                "List of managed instance OCIDs to associate to the management station",
              args: { name: "json" },
              isRequired: true,
            },
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Unregisters the specified managed instance from the service",
          options: [
            optManagedInstanceId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-module-stream",
          description: "Disables a module stream on a managed instance",
          options: [
            optManagedInstanceId,
            optModuleName,
            optStreamName,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-module-stream",
          description: "Enables a module stream on a managed instance",
          options: [
            optManagedInstanceId,
            optModuleName,
            optStreamName,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about the specified managed instance",
          options: [optManagedInstanceId, optFromJson],
        },
        {
          name: "install-packages",
          description: "Installs packages on a managed instance",
          options: [
            optManagedInstanceId,
            optPackageNames,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "install-snaps",
          description: "Installs specified snaps on a managed instance",
          options: [
            optManagedInstanceId,
            {
              name: "--snap-details",
              description: "The array of snaps to install",
              args: { name: "json" },
            },
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "install-windows-updates",
          description:
            "Installs Windows updates on the specified managed instance",
          options: [
            optManagedInstanceId,
            {
              name: "--windows-update-name",
              description: "The list of Windows update unique identifiers",
              args: { name: "json" },
            },
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optWindowsUpdateTypes,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists managed instances that match the specified compartment or managed instance OCID",
          options: [
            optCompartmentId,
            optDisplayName,
            optDisplayNameContains,
            optManagedInstanceId2,
            optStatus,
            optArchType,
            optOsFamily,
            {
              name: "--is-management-station",
              description:
                "A filter to return only managed instances that are acting as management stations",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--group",
              description:
                "A filter to return only managed instances that are attached to the specified group",
              args: { name: "group" },
            },
            optSoftwareSourceId3,
            optAdvisoryName,
            optLocation,
            {
              name: "--is-profile-attached",
              description:
                "A filter to return only managed instances with a registration profile attached",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--agent-version",
              description:
                "A filter to return only managed instances with the specified version of osmh-agent running",
              args: { name: "agent-version" },
            },
            {
              name: "--management-station",
              description:
                "A filter to return resources that are associated with the specified management station OCIDs",
              args: { name: "management-station" },
              isRepeatable: true,
            },
            {
              name: "--is-reboot-required",
              description:
                "A filter to return only managed instances that require a reboot to install updates",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            {
              name: "--management-station-ne",
              description:
                "A filter to return resources that aren't associated with the specified management station OCIDs",
              args: { name: "management-station-ne" },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-env-id",
              description:
                "A filter to return only managed instances in a specific lifecycle environment",
              args: { name: "lifecycle-env-id" },
            },
            {
              name: "--lifecycle-env-id-ne",
              description:
                "A filter to return only managed instances that aren't in a specific lifecycle environment",
              args: { name: "lifecycle-env-id-ne" },
            },
            optLocationNe,
            {
              name: "--profile-id-ne",
              description:
                "A multi filter to return only managed instances that don't contain the given profile OCIDs",
              args: { name: "profile-id-ne" },
              isRepeatable: true,
            },
            {
              name: "--profile-id",
              description:
                "A multi filter to return only managed instances that match the given profile ids",
              args: { name: "profile-id" },
              isRepeatable: true,
            },
            optIsManagedByAlx,
            {
              name: "--is-attached-to-group-or-stage",
              description:
                "A filter to return only managed instances that are attached to the specified group or lifecycle environment",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--stage",
              description:
                "A filter to return only managed instances that are associated with the specified lifecycle environment",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--stage-ne",
              description:
                "A filter to return only managed instances that are NOT associated with the specified lifecycle environment",
              args: { name: "stage-ne" },
            },
            {
              name: "--group-ne",
              description:
                "A filter to return only managed instances that are NOT attached to the specified group",
              args: { name: "group-ne" },
            },
            optFromJson,
          ],
        },
        {
          name: "reboot",
          description: "Initiates a reboot of the specified managed instance",
          options: [
            optManagedInstanceId,
            optRebootTimeoutInMins,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "refresh-software",
          description:
            "Refreshes the package or Windows update information on a managed instance with the latest data from",
          options: [
            optManagedInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "switch-module-stream",
          description:
            "Enables a new stream for a module that already has a stream enabled",
          options: [
            optManagedInstanceId,
            optModuleName,
            {
              name: "--stream-name",
              description: "The name of a stream of the specified module",
              args: { name: "stream-name" },
              isRequired: true,
            },
            optWorkRequestDetails,
            {
              name: "--software-source-id",
              description:
                "The OCID of the software source that contains the module stream",
              args: { name: "software-source-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "switch-snap-channel",
          description: "Switches the snap channel on a managed instance",
          options: [
            optManagedInstanceId,
            { name: "--snap-details", args: { name: "json" } },
            optWorkRequestDetails,
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
            "Updates the specified managed instance information, such as description, ONS topic",
          options: [
            optManagedInstanceId,
            {
              name: "--description",
              description: "User-specified description of the managed instance",
              args: { name: "description" },
            },
            optNotificationTopicId,
            optAutonomousSettings,
            optIfMatch,
            optForce,
            {
              name: "--primary-station-id",
              description:
                "The OCID of a management station to be used as the preferred primary",
              args: { name: "primary-station-id" },
            },
            {
              name: "--secondary-station-id",
              description:
                "The OCID of a management station to be used as the preferred secondary",
              args: { name: "secondary-station-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-packages",
          description: "Updates a package on a managed instance",
          options: [
            optManagedInstanceId,
            {
              name: "--package-names",
              description: "The list of package names",
              args: { name: "json" },
            },
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optUpdateTypes,
            optFromJson,
          ],
        },
        {
          name: "install-module-profile",
          description: "Installs a profile for an module stream",
          options: [
            optManagedInstanceId,
            optModuleName,
            optStreamName,
            optProfileName,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-available-packages",
          description:
            "Returns a list of packages that are available for installation on a managed instance",
          options: [
            optManagedInstanceId,
            optDisplayName,
            optDisplayNameContains,
            optCompartmentId,
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
          name: "list-available-software-sources",
          description:
            "Returns a list of software sources that can be attached to the specified managed instance",
          options: [
            optManagedInstanceId,
            optDisplayName,
            optDisplayNameContains,
            optCompartmentId,
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
          name: "list-errata",
          description:
            "Returns a list of applicable errata on the managed instance",
          options: [
            optManagedInstanceId,
            optClassificationType,
            {
              name: "--name",
              description: "The assigned erratum name",
              args: { name: "name" },
              isRepeatable: true,
            },
            {
              name: "--name-contains",
              description:
                "A filter to return resources that may partially match the erratum name given",
              args: { name: "name-contains" },
            },
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort errata by",
              args: { suggestions: ["timeIssued", "name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-installed-packages",
          description:
            "Lists the packages that are installed on the managed instance",
          options: [
            optManagedInstanceId,
            optDisplayName,
            optDisplayNameContains,
            {
              name: "--time-install-date-start",
              description:
                "The install date after which to list all packages, in ISO 8601 format",
              args: { name: "datetime" },
            },
            {
              name: "--time-install-date-end",
              description:
                "A filter to return only packages that were installed on or before the date provided, in ISO 8601 format",
              args: { name: "datetime" },
            },
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["timeInstalled", "timeCreated", "displayName"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-modules",
          description:
            "Retrieves a list of modules, along with streams of the modules, from a managed instance",
          options: [
            optManagedInstanceId,
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optModuleName4,
            optModuleNameContains,
            optFromJson,
          ],
        },
        {
          name: "list-updatable-packages",
          description:
            "Returns a list of updatable packages for a managed instance",
          options: [
            optManagedInstanceId,
            optClassificationType,
            optDisplayName,
            optDisplayNameContains,
            optAdvisoryName,
            {
              name: "--advisory-severity",
              description: "The advisory severity",
              args: {
                suggestions: ["LOW", "MODERATE", "IMPORTANT", "CRITICAL"],
              },
              isRepeatable: true,
            },
            optCompartmentId,
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
          name: "attach-software-sources",
          description: "Adds software sources to a managed instance",
          options: [
            optManagedInstanceId,
            {
              name: "--software-sources",
              description:
                "The list of software source OCIDs to be attached/detached",
              args: { name: "json" },
              isRequired: true,
            },
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "detach-software-sources",
          description: "Removes software sources from a managed instance",
          options: [
            optManagedInstanceId,
            {
              name: "--software-sources",
              description:
                "The list of software source OCIDs to be attached/detached",
              args: { name: "json" },
              isRequired: true,
            },
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "attach-profile",
          description: "Adds profile to a managed instance",
          options: [
            optManagedInstanceId,
            {
              name: "--profile-id",
              description: "The profile OCID to attach to the managed instance",
              args: { name: "profile-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "detach-profile",
          description: "Detaches profile from a managed instance",
          options: [optManagedInstanceId, optIfMatch, optFromJson],
        },
        {
          name: "remove-packages",
          description: "Removes an installed package from a managed instance",
          options: [
            optManagedInstanceId,
            optPackageNames,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-module-profile",
          description:
            "Removes a profile for a module stream that is installed on a managed instance",
          options: [
            optManagedInstanceId,
            optModuleName,
            optStreamName,
            optProfileName,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-available-windows-updates",
          description:
            "Returns a list of Windows updates that can be installed on the specified managed instance",
          options: [
            optManagedInstanceId,
            optClassificationType,
            optName,
            optDisplayName2,
            optDisplayNameContains,
            {
              name: "--is-installable",
              description:
                "Indicates if the update can be installed by the OS Management Hub service",
              args: { suggestions: ["INSTALLABLE", "NOT_INSTALLABLE"] },
            },
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-installed-windows-updates",
          description:
            "Returns a list of Windows updates that have been installed on the specified managed instance",
          options: [
            optManagedInstanceId,
            optName,
            optDisplayName2,
            optDisplayNameContains,
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-snaps",
          description: "Retrieves a list of snaps for a managed instance",
          options: [
            optManagedInstanceId,
            optCompartmentId,
            {
              name: "--name",
              description: "The resource name",
              args: { name: "name" },
            },
            {
              name: "--name-contains",
              description:
                "A filter to return resources that may partially match the name given",
              args: { name: "name-contains" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-snaps",
          description: "Removes specified snaps from a managed instance",
          options: [
            optManagedInstanceId,
            {
              name: "--snap-details",
              description: "The array of snaps to remove",
              args: { name: "json" },
              isRequired: true,
            },
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-analytic-content",
          description:
            "Returns a report of managed instances matching the given filters",
          options: [
            optFile,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
            },
            optCompartmentIdInSubtree,
            optDynamicSetId2,
            optStatus,
            optDisplayName,
            optDisplayNameContains,
            {
              name: "--other-updates-available-equals-to",
              description:
                "A filter to return instances that have the specified number of available other updates",
              args: { name: "integer" },
            },
            {
              name: "--other-updates-available-greater-than",
              description:
                "A filter to return instances that have more available other updates than the number specified",
              args: { name: "integer" },
            },
            optLocation,
            optOsFamily,
            {
              name: "--report-format",
              description: "The format of the report to download",
              args: { suggestions: ["csv", "json", "xml"] },
            },
            {
              name: "--report-type",
              description: "The type of the report the user wants to download",
              args: {
                suggestions: ["SECURITY", "BUGFIX", "ACTIVITY", "OTHER", "ALL"],
              },
            },
            {
              name: "--bug-updates-eq",
              description:
                "A filter to return instances with number of available bug updates equals to the number specified",
              args: { name: "integer" },
            },
            {
              name: "--bug-updates-gt",
              description:
                "A filter to return instances with number of available bug updates greater than the number specified",
              args: { name: "integer" },
            },
            optLifecycleEnvId2,
            optGroupId3,
            {
              name: "--security-updates-eq",
              description:
                "A filter to return instances with number of available security updates equals to the number specified",
              args: { name: "integer" },
            },
            {
              name: "--security-updates-gt",
              description:
                "A filter to return instances with number of available security updates greater than the number specified",
              args: { name: "integer" },
            },
            optStageId2,
            optLocationNe,
            optIsManagedByAlx,
            optFromJson,
          ],
        },
        {
          name: "summarize-analytics",
          description:
            "Returns a list of user specified metrics for a collection of managed instances",
          options: [
            {
              name: "--metric-names",
              description:
                "A filter to return only metrics whose name matches the given metric names",
              args: {
                suggestions: [
                  "TOTAL_INSTANCE_COUNT",
                  "INSTANCE_WITH_AVAILABLE_SECURITY_UPDATES_COUNT",
                  "INSTANCE_WITH_AVAILABLE_BUGFIX_UPDATES_COUNT",
                  "NORMAL_INSTANCE_COUNT",
                  "ERROR_INSTANCE_COUNT",
                  "WARNING_INSTANCE_COUNT",
                  "UNREACHABLE_INSTANCE_COUNT",
                  "REGISTRATION_FAILED_INSTANCE_COUNT",
                  "INSTANCE_WITH_AVAILABLE_OTHER_UPDATES_COUNT",
                  "DELETING_INSTANCE_COUNT",
                  "ONBOARDING_INSTANCE_COUNT",
                  "INSTANCE_SECURITY_UPDATES_COUNT",
                  "INSTANCE_BUGFIX_UPDATES_COUNT",
                  "INSTANCE_SECURITY_ADVISORY_COUNT",
                  "INSTANCE_BUGFIX_ADVISORY_COUNT",
                  "INSTANCE_OTHER_UPDATES_COUNT",
                  "REBOOTING_INSTANCE_COUNT",
                  "NEEDS_REBOOTING_INSTANCE_COUNT",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
            },
            optCompartmentIdInSubtree,
            optDynamicSetId2,
            optStatus,
            optLocation,
            optOsFamily,
            optDisplayName,
            optDisplayNameContains,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name", "metricName", "displayName"] },
            },
            optSortOrder,
            optLifecycleEnvId2,
            optGroupId3,
            optStageId2,
            optLocationNe,
            optIsManagedByAlx,
            optFromJson,
          ],
        },
        {
          name: "get-content",
          description:
            "Returns a report for a single managed instance whose associated erratas match the given filters",
          options: [
            optManagedInstanceId,
            {
              name: "--vulnerability-type",
              description:
                "A filter to return only vulnerabilities matching the given types",
              args: {
                suggestions: [
                  "SECURITY",
                  "BUGFIX",
                  "ENHANCEMENT",
                  "OTHER",
                  "ALL",
                ],
              },
              isRequired: true,
              isRepeatable: true,
            },
            optFile,
            optAdvisoryName,
            {
              name: "--advisory-name-contains",
              description:
                "A filter to return resources that may partially match the erratum advisory name given",
              args: { name: "advisory-name-contains" },
            },
            {
              name: "--advisory-type",
              description:
                "A filter to return only errata that match the given advisory types",
              args: { suggestions: ["SECURITY", "BUGFIX", "ENHANCEMENT"] },
              isRepeatable: true,
            },
            {
              name: "--vulnerability-name",
              description:
                "A filter to return vulnerabilities that match the given name",
              args: { name: "vulnerability-name" },
              isRepeatable: true,
            },
            {
              name: "--vulnerability-name-contains",
              description:
                "A filter to return vulnerabilities that partially match the given name",
              args: { name: "vulnerability-name-contains" },
            },
            {
              name: "--report-format",
              description: "The format of the report to download",
              args: { suggestions: ["csv", "json", "xml"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "windows-update",
      description:
        "An object that provides information about an update for a Windows instance",
      subcommands: [
        {
          name: "get",
          description: "Returns a Windows Update object",
          options: [
            {
              name: "--windows-update-id",
              description: "The unique identifier for the Windows update",
              args: { name: "windows-update-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-windows-updates",
          description:
            "Lists Windows updates that have been reported to the service",
          options: [
            optCompartmentId2,
            optClassificationType,
            optName,
            optDisplayNameContains,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy3,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "install-all-windows-updates-in-compartment",
      description:
        "Installs all of the available Windows updates for managed instances in a compartment",
      options: [
        optCompartmentId2,
        optWorkRequestDetails,
        optIfMatch,
        optWaitForState,
        optMaxWaitSeconds,
        optWaitIntervalSeconds,
        optWindowsUpdateTypes,
        optFromJson,
      ],
    },
    {
      name: "update-all-packages-in-compartment",
      description:
        "Install all of the available package updates for all of the managed instances in a compartment",
      options: [
        optCompartmentId2,
        optWorkRequestDetails,
        optIfMatch,
        optWaitForState,
        optMaxWaitSeconds,
        optWaitIntervalSeconds,
        optUpdateTypes,
        optFromJson,
      ],
    },
    {
      name: "managed-instance-group",
      description: "An object that defines the managed instance group",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified managed instance group to a different compartment within the same tenancy",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the group to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optGroupId2,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new managed instance group",
          options: [
            {
              name: "--display-name",
              description:
                "A user-friendly name for the managed instance group",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the managed instance group",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--os-family",
              description:
                "The operating system type of the managed instances that will be attached to this group",
              args: {
                suggestions: [
                  "ORACLE_LINUX_10",
                  "ORACLE_LINUX_9",
                  "ORACLE_LINUX_8",
                  "ORACLE_LINUX_7",
                  "ORACLE_LINUX_6",
                  "WINDOWS_SERVER_2016",
                  "WINDOWS_SERVER_2019",
                  "WINDOWS_SERVER_2022",
                  "WINDOWS_SERVER_2025",
                  "WINDOWS_11",
                  "ALL",
                  "UBUNTU_20_04",
                  "UBUNTU_22_04",
                  "UBUNTU_24_04",
                ],
              },
              isRequired: true,
            },
            {
              name: "--arch-type",
              description:
                "The CPU architecture type of the managed instances that will be attached to this group",
              args: {
                suggestions: [
                  "X86_64",
                  "AARCH64",
                  "I686",
                  "NOARCH",
                  "SRC",
                  "I386",
                  "AMD64",
                  "ARM64",
                  "ALL",
                ],
              },
              isRequired: true,
            },
            {
              name: "--vendor-name",
              description:
                "The vendor of the operating system that will be used by the managed instances in the group",
              args: { suggestions: ["ORACLE", "MICROSOFT", "CANONICAL"] },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "User-specified description of the managed instance group",
              args: { name: "description" },
            },
            {
              name: "--location",
              description:
                "The location of managed instances attached to the group",
              args: {
                suggestions: [
                  "ON_PREMISE",
                  "OCI_COMPUTE",
                  "AZURE",
                  "EC2",
                  "GCP",
                ],
              },
            },
            {
              name: "--software-source-ids",
              description:
                "The list of software source OCIDs available to the managed instances in the group",
              args: { name: "json" },
            },
            {
              name: "--managed-instance-ids",
              description:
                "The list of managed instance OCIDs to be added to the group",
              args: { name: "json" },
            },
            optNotificationTopicId,
            optAutonomousSettings,
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
          description: "Deletes the specified managed instance group",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "disable-module-stream",
          description: "Disables a module stream on a managed instance group",
          options: [
            optModuleName2,
            optStreamName,
            optSoftwareSourceId2,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "enable-module-stream",
          description: "Enables a module stream on a managed instance group",
          options: [
            optModuleName2,
            optStreamName,
            optSoftwareSourceId2,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified managed instance group",
          options: [optGroupId, optFromJson],
        },
        {
          name: "install-packages",
          description:
            "Installs the specified packages on each managed instance in a managed instance group",
          options: [
            optPackageNames,
            optWorkRequestDetails,
            {
              name: "--is-latest",
              description:
                "Indicates whether this is the latest package version",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists managed instance groups that match the specified compartment or managed instance group OCID",
          options: [
            optCompartmentId,
            optSoftwareSourceId3,
            optDisplayName,
            optDisplayNameContains,
            optArchType2,
            optOsFamily2,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only managed instance groups that are in the specified state",
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
            optLocation,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optLocationNe,
            optIsManagedByAlx,
            optGroupId3,
            optFromJson,
          ],
        },
        {
          name: "reboot",
          description: "Reboots all managed instances in the specified group",
          options: [
            optRebootTimeoutInMins,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId2,
            optFromJson,
          ],
        },
        {
          name: "refresh-software",
          description:
            "Refreshes the package, Windows update or Snap information on a managed instance with the latest data from",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId2,
            optFromJson,
          ],
        },
        {
          name: "switch-module-stream",
          description:
            "Enables a new stream for a module that already has a stream enabled",
          options: [
            optModuleName2,
            {
              name: "--stream-name",
              description: "The name of a stream of the specified module",
              args: { name: "stream-name" },
              isRequired: true,
            },
            optSoftwareSourceId2,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId2,
            optFromJson,
          ],
        },
        {
          name: "update-all-packages",
          description:
            "Updates all packages on each managed instance in the specified managed instance group",
          options: [
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId,
            optUpdateTypes,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified managed instance group's name, description, and tags",
          options: [
            {
              name: "--display-name",
              description:
                "A user-friendly name for the managed instance group",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "User-specified description of the managed instance group",
              args: { name: "description" },
            },
            optNotificationTopicId,
            optAutonomousSettings,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "install-module-profile",
          description: "Installs a profile for an enabled module stream",
          options: [
            optModuleName2,
            optStreamName,
            optProfileName,
            optSoftwareSourceId2,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "list-available-modules",
          description:
            "List modules that are available for installation on the specified managed instance group",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optGroupId,
            optModuleName4,
            optModuleNameContains,
            optFromJson,
          ],
        },
        {
          name: "list-available-packages",
          description:
            "Lists available packages on the specified managed instances group",
          options: [
            optDisplayName,
            optDisplayNameContains,
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optIsLatest,
            optAll,
            optPageSize,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "list-available-software-sources",
          description:
            "Lists available software sources for a specified managed instance group",
          options: [
            optDisplayName,
            optDisplayNameContains,
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "list-installed-packages",
          description:
            "Lists installed packages on the specified managed instances group",
          options: [
            optDisplayName,
            optDisplayNameContains,
            {
              name: "--time-install-date-start",
              description:
                "The install date after which to list all packages, in ISO 8601 format",
              args: { name: "datetime" },
            },
            {
              name: "--time-install-date-end",
              description:
                "A filter to return only packages that were installed on or before the date provided, in ISO 8601 format",
              args: { name: "datetime" },
            },
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["timeInstalled", "timeCreated", "displayName"],
              },
            },
            optAll,
            optPageSize,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "list-modules",
          description:
            "Retrieve a list of module streams, along with a summary of their status, from a managed instance group",
          options: [
            optCompartmentId,
            {
              name: "--stream-name",
              description: "The name of the module stream",
              args: { name: "stream-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId,
            optModuleName4,
            optModuleNameContains,
            optFromJson,
          ],
        },
        {
          name: "attach-software-sources",
          description:
            "Attaches software sources to the specified managed instance group",
          options: [
            {
              name: "--software-sources",
              description:
                "List of software source OCIDs to attach to the group",
              args: { name: "json" },
              isRequired: true,
            },
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "detach-software-sources",
          description:
            "Detaches the specified software sources from a managed instance group",
          options: [
            {
              name: "--software-sources",
              description:
                "List of software source OCIDs to detach from the group",
              args: { name: "json" },
              isRequired: true,
            },
            optWorkRequestDetails,
            optIfMatch,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "remove-packages",
          description:
            "Removes the specified packages from each managed instance in a managed instance group",
          options: [
            optPackageNames,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "remove-module-profile",
          description:
            "Removes a profile for a module stream that is installed on a managed instance group",
          options: [
            optModuleName2,
            optStreamName,
            optProfileName,
            optSoftwareSourceId2,
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "attach-managed-instances",
          description:
            "Adds managed instances to the specified managed instance group",
          options: [
            {
              name: "--managed-instances",
              description:
                "List of managed instance OCIDs to attach to the group",
              args: { name: "json" },
              isRequired: true,
            },
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "detach-managed-instances",
          description:
            "Removes a managed instance from the specified managed instance group",
          options: [
            {
              name: "--managed-instances",
              description:
                "List of managed instance OCIDs to detach from the group",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optGroupId,
            optFromJson,
          ],
        },
        {
          name: "list-managed-instances",
          description:
            "Lists all managed instances for a specified managed instance group",
          options: [
            optManagedInstanceId2,
            optCompartmentIdInSubtree,
            optDisplayName,
            optDisplayNameContains,
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optGroupId2,
            optFromJson,
          ],
        },
        {
          name: "install-windows-updates",
          description:
            "Installs Windows updates on each managed instance in the managed instance group",
          options: [
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optGroupId2,
            optWindowsUpdateTypes,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "management-station",
      description:
        "Provides information about the management station, including name, state, and configuration",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a managment station to a different compartment",
          options: [
            optManagementStationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the management station to",
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
            "Creates a management station using the proxy and mirror configuration information provided",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the management station",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "User-friendly name for the management station",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--hostname",
              description: "Hostname of the management station",
              args: { name: "hostname" },
              isRequired: true,
            },
            { name: "--mirror", args: { name: "json" }, isRequired: true },
            {
              name: "--description",
              description:
                "User-specified description of the management station",
              args: { name: "description" },
            },
            {
              name: "--is-auto-config-enabled",
              description:
                "When enabled, the station setup script automatically runs to configure the firewall and SELinux settings",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--os-family",
              description: "The operating system family",
              args: {
                suggestions: [
                  "ORACLE_LINUX_10",
                  "ORACLE_LINUX_9",
                  "ORACLE_LINUX_8",
                  "ORACLE_LINUX_7",
                  "ORACLE_LINUX_6",
                  "WINDOWS_SERVER_2016",
                  "WINDOWS_SERVER_2019",
                  "WINDOWS_SERVER_2022",
                  "WINDOWS_SERVER_2025",
                  "WINDOWS_11",
                  "ALL",
                  "UBUNTU_20_04",
                  "UBUNTU_22_04",
                  "UBUNTU_24_04",
                ],
              },
            },
            {
              name: "--arch-type",
              description: "The architecture type",
              args: {
                suggestions: [
                  "X86_64",
                  "AARCH64",
                  "I686",
                  "NOARCH",
                  "SRC",
                  "I386",
                  "AMD64",
                  "ARM64",
                  "ALL",
                ],
              },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--station-proxy",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a management station",
          options: [
            optManagementStationId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Returns information about the specified management station",
          options: [optManagementStationId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists management stations within the specified compartment",
          options: [
            optCompartmentId,
            optDisplayName2,
            optDisplayNameContains,
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns information for management stations in the specified state",
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
            optManagedInstanceId2,
            optLimit,
            optPage,
            optLocation,
            optSortOrder,
            optSortBy,
            {
              name: "--health-state",
              description:
                "A filter that returns information for management stations in the specified health state",
              args: { suggestions: ["HEALTHY", "UNHEALTHY", "UNAVAILABLE"] },
            },
            optAll,
            optPageSize,
            {
              name: "--management-station-id",
              description: "The OCID of the management station",
              args: { name: "management-station-id" },
            },
            optLocationNe,
            optFromJson,
          ],
        },
        {
          name: "refresh-management-station-config",
          description:
            "Refreshes the list of software sources mirrored by the management station",
          options: [
            optManagementStationId,
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
            "Updates the configuration of the specified management station",
          options: [
            optManagementStationId,
            {
              name: "--display-name",
              description: "User-friendly name for the management station",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "User-specified description of the management station",
              args: { name: "description" },
            },
            {
              name: "--hostname",
              description: "Hostname of the management station",
              args: { name: "hostname" },
            },
            {
              name: "--is-auto-config-enabled",
              description:
                "When enabled, the station setup script automatically runs to configure the firewall and SELinux settings",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--os-family",
              description: "The operating system family",
              args: {
                suggestions: [
                  "ORACLE_LINUX_10",
                  "ORACLE_LINUX_9",
                  "ORACLE_LINUX_8",
                  "ORACLE_LINUX_7",
                  "ORACLE_LINUX_6",
                  "WINDOWS_SERVER_2016",
                  "WINDOWS_SERVER_2019",
                  "WINDOWS_SERVER_2022",
                  "WINDOWS_SERVER_2025",
                  "WINDOWS_11",
                  "ALL",
                  "UBUNTU_20_04",
                  "UBUNTU_22_04",
                  "UBUNTU_24_04",
                ],
              },
            },
            {
              name: "--arch-type",
              description: "The architecture type",
              args: {
                suggestions: [
                  "X86_64",
                  "AARCH64",
                  "I686",
                  "NOARCH",
                  "SRC",
                  "I386",
                  "AMD64",
                  "ARM64",
                  "ALL",
                ],
              },
            },
            { name: "--mirror", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--station-proxy",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "sync-single-mirrors",
          description:
            "Synchronize the specified software source mirrors on the management station",
          options: [
            optManagementStationId,
            {
              name: "--mirror-id",
              description: "Unique Software Source identifier",
              args: { name: "mirror-id" },
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
          name: "sync-mirrors",
          description:
            "Synchronize the specified software sources mirrored on the management station",
          options: [
            optManagementStationId,
            {
              name: "--software-source-list",
              description: "List of software source OCIDs to synchronize",
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
          name: "list-mirrors",
          description:
            "Lists all software source mirrors associated with a specified management station",
          options: [
            optManagementStationId,
            optDisplayName2,
            optDisplayNameContains,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--mirror-states",
              description: "List of Mirror state to filter",
              args: {
                suggestions: [
                  "UNSYNCED",
                  "QUEUED",
                  "SYNCING",
                  "SYNCED",
                  "FAILED",
                ],
              },
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
      name: "profile",
      description: "Object that defines the registration profile",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves the profile to a different compartment",
          options: [
            optProfileId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the profile to",
              args: { name: "compartment-id" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specified registration profile",
          options: [
            optProfileId,
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
          description:
            "Returns information about the specified registration profile",
          options: [optProfileId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists registration profiles that match the specified compartment or profile OCID",
          options: [
            optCompartmentId,
            optDisplayName,
            optDisplayNameContains,
            {
              name: "--profile-type",
              description:
                "A filter to return registration profiles that match the given profile type",
              args: {
                suggestions: [
                  "SOFTWARESOURCE",
                  "GROUP",
                  "LIFECYCLE",
                  "STATION",
                  "WINDOWS_STANDALONE",
                  "UBUNTU_STANDALONE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--profile-id",
              description: "The OCID of the registration profile",
              args: { name: "profile-id" },
            },
            optOsFamily2,
            optArchType2,
            {
              name: "--registration-type",
              description:
                "A filter to return profiles that match the given instance type",
              args: {
                suggestions: [
                  "OCI_LINUX",
                  "NON_OCI_LINUX",
                  "OCI_WINDOWS",
                  "AUTONOMOUS_LINUX",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--is-default-profile",
              description: "A filter to return only default profiles",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-service-provided-profile",
              description: "A filter to return only service-provided profiles",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--management-station",
              description:
                "A filter to return resources that are associated with the specified management station OCIDs",
              args: { name: "management-station" },
              isRepeatable: true,
            },
            {
              name: "--profile-version",
              description: "The version of the registration profile",
              args: { name: "profile-version" },
            },
            optVendorName,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only registration profiles in the given state",
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
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            {
              name: "--management-station-ne",
              description:
                "A filter to return resources that aren't associated with the specified management station OCIDs",
              args: { name: "management-station-ne" },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified profile's name, description, and tags",
          options: [
            optProfileId,
            {
              name: "--display-name",
              description: "A user-friendly name for the profile",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "User-specified description of the profile",
              args: { name: "description" },
            },
            optIsDefaultProfile,
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
        {
          name: "create-group-profile",
          description: "Creates a registration profile",
          options: [
            optDisplayName4,
            optCompartmentId3,
            optDescription2,
            optManagementStationId2,
            optRegistrationType,
            optIsDefaultProfile,
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--group-id",
              description:
                "The OCID of the managed instance group from which the registration profile will inherit its software sources",
              args: { name: "group-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-lifecycle-profile",
          description: "Creates a registration profile",
          options: [
            optDisplayName4,
            optCompartmentId3,
            optDescription2,
            optManagementStationId2,
            optRegistrationType,
            optIsDefaultProfile,
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--stage-id",
              description:
                "The OCID of the lifecycle stage from which the registration profile will inherit its software source. required",
              args: { name: "stage-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-software-source-profile",
          description: "Creates a registration profile",
          options: [
            optDisplayName4,
            optCompartmentId3,
            optVendorName2,
            optOsFamily3,
            optArchType3,
            optDescription2,
            optManagementStationId2,
            optRegistrationType,
            optIsDefaultProfile,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--software-source-ids",
              description:
                "The list of software source OCIDs that the registration profile will use",
              args: { name: "json" },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "attach-software-sources",
          description: "Attaches the specified software sources to a profile",
          options: [
            optProfileId,
            {
              name: "--software-sources",
              description:
                "List of software source OCIDs to attach to the profile",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create-windows-stand-alone-profile",
          description: "Creates a registration profile",
          options: [
            optDisplayName4,
            optCompartmentId3,
            optVendorName2,
            optOsFamily3,
            optArchType3,
            optDescription2,
            optManagementStationId2,
            optRegistrationType,
            optIsDefaultProfile,
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "detach-software-sources",
          description: "Detaches the specified software sources from a profile",
          options: [
            optProfileId,
            {
              name: "--software-sources",
              description:
                "List of software source OCIDs to detach from the profile",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list-available-software-sources",
          description:
            "Lists available software sources for a specified profile",
          options: [
            optProfileId,
            optDisplayName,
            optDisplayNameContains,
            optCompartmentId,
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
          name: "attach-lifecycle-stage",
          description: "Attaches the specified lifecycle stage to a profile",
          options: [
            optProfileId,
            optIfMatch,
            {
              name: "--stage-id",
              description:
                "The OCID of the lifecycle stage that the profile will be associated with. required",
              args: { name: "stage-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "attach-managed-instance-group",
          description:
            "Attaches the specified managed instance group to a profile",
          options: [
            optProfileId,
            optIfMatch,
            {
              name: "--group-id",
              description:
                "The OCID of the managed instance group that the profile will be associated with",
              args: { name: "group-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "attach-management-station",
          description: "Attaches the specified management station to a profile",
          options: [
            optProfileId,
            {
              name: "--management-station-id",
              description:
                "The OCID of the management station that the instance will be associated with",
              args: { name: "management-station-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get-profile-version",
          description:
            "Returns information about the version of the specified registration profile",
          options: [
            optProfileId,
            {
              name: "--profile-version",
              description: "The version of the registration profile",
              args: { name: "profile-version" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-ubuntu-stand-alone-profile",
          description: "Creates a registration profile",
          options: [
            optDisplayName4,
            optCompartmentId3,
            optVendorName2,
            optOsFamily3,
            optArchType3,
            optDescription2,
            optManagementStationId2,
            optRegistrationType,
            optIsDefaultProfile,
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "scheduled-job",
      description: "The object that defines a scheduled job",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a scheduled job to another compartment",
          options: [
            optScheduledJobId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the scheduled job to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new scheduled job",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the scheduled job",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--schedule-type",
              description:
                "The type of scheduling frequency for the scheduled job",
              args: { suggestions: ["ONETIME", "RECURRING"] },
              isRequired: true,
            },
            {
              name: "--time-next-execution",
              description:
                "The desired time of the next execution of this scheduled job (in RFC 3339 format)",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--operations",
              description:
                "The list of operations this scheduled job needs to perform",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "User-friendly name for the scheduled job",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "User-specified description of the scheduled job",
              args: { name: "description" },
            },
            {
              name: "--locations",
              description:
                "The list of locations this scheduled job should operate on for a job targeting on compartments",
              args: { name: "json" },
            },
            {
              name: "--recurring-rule",
              description:
                "The frequency schedule for a recurring scheduled job in the RFC5535 format",
              args: { name: "recurring-rule" },
            },
            {
              name: "--managed-instance-ids",
              description:
                "The managed instance OCIDs that this scheduled job operates on",
              args: { name: "json" },
            },
            {
              name: "--managed-compartment-ids",
              description:
                "The compartment OCIDs that this scheduled job operates on",
              args: { name: "json" },
            },
            {
              name: "--dynamic-set-ids",
              description:
                "The dynamic set OCIDs that this scheduled job operates on",
              args: { name: "json" },
            },
            {
              name: "--is-subcompartment-included",
              description:
                "Indicates whether to apply the scheduled job to all compartments in the tenancy when managedCompartmentIds",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--retry-intervals",
              description:
                "The amount of time in minutes to wait until retrying the scheduled job",
              args: { name: "json" },
            },
            {
              name: "--work-request-id",
              description: "The OCID for the work request that will be rerun",
              args: { name: "work-request-id" },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--is-managed-by-alx",
              description:
                "Indicates whether this scheduled job is managed by the Autonomous Linux service",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--group-ids",
              description:
                "The list of managed instance group OCIDs this scheduled job operates on",
              args: { name: "json" },
            },
            {
              name: "--stage-ids",
              description:
                "The list of lifecycle stage OCIDs this scheduled job operates on",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified scheduled job",
          options: [
            optScheduledJobId,
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
          description: "Gets information about the specified scheduled job",
          options: [optScheduledJobId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists scheduled jobs that match the specified compartment or scheduled job OCID",
          options: [
            optCompartmentId,
            optDisplayName2,
            optDisplayNameContains,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only scheduled jobs currently in the given state",
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
            optManagedInstanceId2,
            {
              name: "--managed-compartment-id",
              description: "The OCID of the managed compartment",
              args: { name: "managed-compartment-id" },
            },
            {
              name: "--operation-type",
              description:
                "A filter to return only scheduled jobs with the given operation type",
              args: {
                suggestions: [
                  "INSTALL_PACKAGES",
                  "UPDATE_PACKAGES",
                  "REMOVE_PACKAGES",
                  "UPDATE_ALL",
                  "UPDATE_SECURITY",
                  "UPDATE_BUGFIX",
                  "UPDATE_ENHANCEMENT",
                  "UPDATE_OTHER",
                  "UPDATE_KSPLICE_USERSPACE",
                  "UPDATE_KSPLICE_KERNEL",
                  "MANAGE_MODULE_STREAMS",
                  "SWITCH_MODULE_STREAM",
                  "ATTACH_SOFTWARE_SOURCES",
                  "DETACH_SOFTWARE_SOURCES",
                  "SYNC_MANAGEMENT_STATION_MIRROR",
                  "PROMOTE_LIFECYCLE",
                  "INSTALL_WINDOWS_UPDATES",
                  "INSTALL_ALL_WINDOWS_UPDATES",
                  "INSTALL_SECURITY_WINDOWS_UPDATES",
                  "INSTALL_BUGFIX_WINDOWS_UPDATES",
                  "INSTALL_ENHANCEMENT_WINDOWS_UPDATES",
                  "INSTALL_OTHER_WINDOWS_UPDATES",
                  "REBOOT",
                  "RERUN_WORK_REQUEST",
                  "INSTALL_SNAPS",
                  "REMOVE_SNAPS",
                  "SWITCH_SNAP_CHANNEL",
                ],
              },
            },
            {
              name: "--schedule-type",
              description:
                "A filter to return only scheduled jobs of the given scheduling type (one-time or recurring)",
              args: { suggestions: ["ONETIME", "RECURRING"] },
            },
            {
              name: "--time-start",
              description:
                "A filter to return only resources with a date on or after the given value, in ISO 8601 format",
              args: { name: "datetime" },
            },
            {
              name: "--time-end",
              description:
                "A filter to return only resources with a date on or before the given value, in ISO 8601 format",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--is-restricted",
              description: "A filter to return only restricted scheduled jobs",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optCompartmentIdInSubtree,
            optLocation,
            optDynamicSetId2,
            optAll,
            optPageSize,
            optIsManagedByAlx,
            optLocationNe,
            optGroupId3,
            optStageId2,
            {
              name: "--scheduled-job-id",
              description: "The OCID of the scheduled job",
              args: { name: "scheduled-job-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified scheduled job's name, description, and other details",
          options: [
            optScheduledJobId,
            {
              name: "--display-name",
              description: "User-friendly name for the scheduled job",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "User-specified description for the scheduled job",
              args: { name: "description" },
            },
            {
              name: "--schedule-type",
              description: "The type of scheduling frequency for the job",
              args: { suggestions: ["ONETIME", "RECURRING"] },
            },
            {
              name: "--time-next-execution",
              description:
                "The time of the next execution of this scheduled job (in RFC 3339 format)",
              args: { name: "datetime" },
            },
            {
              name: "--recurring-rule",
              description:
                "The frequency schedule for a recurring scheduled job in the RFC5535 format",
              args: { name: "recurring-rule" },
            },
            {
              name: "--operations",
              description:
                "The list of operations this scheduled job needs to perform",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--retry-intervals",
              description:
                "The amount of time in minutes to wait until retrying the scheduled job",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "run-now",
          description:
            "Triggers an already created recurring scheduled job to run immediately instead of waiting for its next",
          options: [optScheduledJobId, optIfMatch, optFromJson],
        },
      ],
    },
    {
      name: "software-source",
      description: "The object that defines a software source",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the specified software sources to a different compartment within the same tenancy",
          options: [
            optSoftwareSourceId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the software source to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create-entitlement",
          description:
            "Registers the necessary entitlement credentials for OS vendor software sources for a tenancy",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the tenancy containing the entitlement",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--csi",
              description:
                "The Customer Support Identifier (CSI) which unlocks the software sources",
              args: { name: "csi" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified software source",
          options: [
            optSoftwareSourceId,
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
          name: "get-software-package",
          description:
            "Returns information about the specified software package",
          options: [optSoftwareSourceId, optSoftwarePackageName, optFromJson],
        },
        {
          name: "get-software-package-by-name",
          description:
            "Returns information about the specified software package based on its fully qualified name (NVRA or NEVRA)",
          options: [optSoftwarePackageName, optFromJson],
        },
        {
          name: "get",
          description:
            "Returns information about the specified software source",
          options: [optSoftwareSourceId, optFromJson],
        },
        {
          name: "get-software-source-manifest",
          description:
            "Returns an archive containing the list of packages in the software source",
          options: [optSoftwareSourceId, optFile, optFromJson],
        },
        {
          name: "list-all-software-packages",
          description:
            "Lists software packages available through the OS Management Hub service",
          options: [
            optDisplayName2,
            optDisplayNameContains,
            {
              name: "--architecture",
              description:
                "A filter to return software packages that match the given architecture",
              args: {
                suggestions: [
                  "I386",
                  "I686",
                  "AARCH64",
                  "X86_64",
                  "SRC",
                  "NOARCH",
                  "OTHER",
                ],
              },
            },
            optIsLatest,
            optOsFamily2,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort packages by",
              args: { suggestions: ["displayName"] },
            },
            optAll,
            optPageSize,
            {
              name: "--package-version",
              description:
                "A filter to return software packages that match the given version",
              args: { name: "package-version" },
            },
            optFromJson,
          ],
        },
        {
          name: "list-available-software-packages",
          description:
            "Lists software packages that are available to be added to a custom software source of type MANIFEST",
          options: [
            optSoftwareSourceId,
            optDisplayName2,
            optDisplayNameContains,
            optIsLatest,
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
          name: "list-entitlements",
          description: "Lists entitlements in the specified tenancy OCID",
          options: [
            optCompartmentId2,
            {
              name: "--csi",
              description:
                "A filter to return entitlements that match the given customer support identifier (CSI)",
              args: { name: "csi" },
            },
            optVendorName,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort entitlements by",
              args: { suggestions: ["csi", "vendorName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-module-streams",
          description:
            "Lists module streams from the specified software source OCID",
          options: [
            optSoftwareSourceId,
            optModuleName3,
            optIsLatest,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["moduleName"] },
            },
            {
              name: "--module-name-contains",
              description:
                "A filter to return resources that may partially match the module name given",
              args: { name: "module-name-contains" },
            },
            optAll,
            optPageSize,
            {
              name: "--stream-name",
              description: "The name of the stream",
              args: { name: "stream-name" },
            },
            optFromJson,
          ],
        },
        {
          name: "list-package-groups",
          description:
            "Lists package groups that are associated with the specified software source OCID",
          options: [
            optSoftwareSourceId,
            optCompartmentId,
            {
              name: "--name",
              description: "The name of the entity to be queried",
              args: { name: "name" },
            },
            {
              name: "--name-contains",
              description:
                "A filter to return resources that may partially match the name given",
              args: { name: "name-contains" },
            },
            {
              name: "--group-type",
              description:
                "A filter to return only package groups of the specified type",
              args: { suggestions: ["GROUP", "ENVIRONMENT", "CATEGORY"] },
              isRepeatable: true,
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
          name: "list-software-packages",
          description:
            "Lists software packages in the specified software source",
          options: [
            optSoftwareSourceId,
            optDisplayName2,
            optDisplayNameContains,
            optIsLatest,
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
          name: "list-software-source-vendors",
          description: "Lists available software source vendors",
          options: [
            optCompartmentId2,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort software source vendors by",
              args: { suggestions: ["name"] },
            },
            {
              name: "--name",
              description: "The name of the entity to be queried",
              args: { name: "name" },
            },
            optAll,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists software sources that match the specified tenancy or software source OCID",
          options: [
            optCompartmentId,
            {
              name: "--software-source-id",
              description: "The OCID for the software source",
              args: { name: "software-source-id" },
            },
            {
              name: "--software-source-type",
              description: "The type of the software source",
              args: {
                suggestions: [
                  "VENDOR",
                  "CUSTOM",
                  "VERSIONED",
                  "PRIVATE",
                  "THIRD_PARTY",
                ],
              },
              isRepeatable: true,
            },
            optVendorName,
            optOsFamily,
            optArchType,
            {
              name: "--availability",
              description:
                "The availability of the software source in a non-OCI environment for a tenancy",
              args: {
                suggestions: [
                  "AVAILABLE",
                  "SELECTED",
                  "RESTRICTED",
                  "UNAVAILABLE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--availability-at-oci",
              description:
                "The availability of the software source in an OCI environment for a tenancy",
              args: {
                suggestions: [
                  "AVAILABLE",
                  "SELECTED",
                  "RESTRICTED",
                  "UNAVAILABLE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--availability-anywhere",
              description: "The availability of the software source",
              args: {
                suggestions: [
                  "AVAILABLE",
                  "SELECTED",
                  "RESTRICTED",
                  "UNAVAILABLE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--is-mirror-sync-allowed",
              description:
                "A filter to return software sources which can be synced to a management station",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDisplayName2,
            optDisplayNameContains,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only software sources whose state matches the given state",
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
            optAll,
            optPageSize,
            {
              name: "--is-mandatory-for-alx",
              description:
                "Indicates whether the software source is mandatory for the Autonomous Linux service",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--display-name-ne",
              description:
                "A multi filter to return resources that do not contains the given display names",
              args: { name: "display-name-ne" },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-software-source-manifest",
          description:
            "Updates the package list document for the software source",
          options: [
            {
              name: "--update-software-source-manifest-details",
              description:
                "Provides the document used to update the package list of the software source",
              args: { name: "update-software-source-manifest-details" },
              isRequired: true,
            },
            optSoftwareSourceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-custom-swsrc",
          description: "Creates a new software source",
          options: [
            optCompartmentId4,
            {
              name: "--vendor-software-sources",
              description: "List of vendor software sources",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName3,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optIsAutoResolveDependencies,
            {
              name: "--is-created-from-package-list",
              description:
                "Indicates whether the service should create the software source from a list of packages provided by the user",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsLatestContentOnly,
            {
              name: "--packages",
              description: "A property used for compatibility only",
              args: { name: "json" },
            },
            {
              name: "--software-source-sub-type",
              description: "The creation type of a software source",
              args: { suggestions: ["FILTER", "MANIFEST", "SNAPSHOT"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFilter,
            {
              name: "--is-auto-updated",
              description:
                "Indicates whether service should automatically update the custom software source for the user",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "create-versioned-custom-swsrc",
          description: "Creates a new software source",
          options: [
            optCompartmentId4,
            {
              name: "--vendor-software-sources",
              description: "List of vendor software sources",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--software-source-version",
              description:
                "The version to assign to this custom software source",
              args: { name: "software-source-version" },
              isRequired: true,
            },
            optDisplayName3,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optIsAutoResolveDependencies,
            {
              name: "--is-created-from-package-list",
              description:
                "Indicates whether the service should create the software source from a list of packages provided by the user",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsLatestContentOnly,
            {
              name: "--packages",
              description: "A property used for compatibility only",
              args: { name: "json" },
            },
            {
              name: "--software-source-sub-type",
              description: "The creation type of a software source",
              args: { suggestions: ["FILTER", "MANIFEST", "SNAPSHOT"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFilter,
            optFromJson,
          ],
        },
        {
          name: "change-availability",
          description:
            "Updates the availability for a list of specified software sources",
          options: [
            {
              name: "--availabilities",
              description:
                "List of objects containing software source ids and its availability",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "list-module-profiles",
          description:
            "Lists module stream profiles from the specified software source OCID",
          options: [
            optSoftwareSourceId,
            optModuleName3,
            {
              name: "--stream-name",
              description: "The name of the module stream",
              args: { name: "stream-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["moduleName"] },
            },
            optAll,
            optPageSize,
            {
              name: "--profile-name",
              description: "The name of the profile",
              args: { name: "profile-name" },
            },
            optFromJson,
          ],
        },
        {
          name: "search-module-streams",
          description:
            "Returns a list of module streams from the specified software sources",
          options: [
            {
              name: "--software-source-ids",
              description: "List of software source OCIDs",
              args: { name: "json" },
              isRequired: true,
            },
            optSortOrder2,
            optModuleName3,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["MODULENAME"] },
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "search-modules",
          description: "Lists modules from a list of software sources",
          options: [
            {
              name: "--software-source-ids",
              description: "List of sofware source OCIDs",
              args: { name: "json" },
              isRequired: true,
            },
            optSortOrder2,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["NAME"] },
            },
            optLimit,
            optPage,
            optModuleName3,
            {
              name: "--module-name-contains",
              description:
                "Filters results, allowing only those with a name which contains the string",
              args: { name: "module-name-contains" },
            },
            optFromJson,
          ],
        },
        {
          name: "search-package-groups",
          description:
            "Searches the package groups from the specified list of software sources",
          options: [
            {
              name: "--software-source-ids",
              description: "List of software source OCIDs",
              args: { name: "json" },
              isRequired: true,
            },
            optSortOrder2,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["NAME"] },
            },
            {
              name: "--name-contains",
              description:
                "A filter that returns package groups with a name that contains the given string",
              args: { name: "name-contains" },
            },
            {
              name: "--group-type",
              description:
                "Indicates if this is a group, category or environment",
              args: { name: "group-type" },
            },
            optLimit,
            optPage,
            optFromJson,
          ],
        },
        {
          name: "update-custom-swsrc",
          description:
            "Updates the specified software source's details, including but not limited to name, description, and tags",
          options: [
            optSoftwareSourceId,
            optCompartmentId5,
            optDisplayName3,
            optDescription3,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--vendor-software-sources",
              description:
                "List of vendor software sources that are used for the basis of the custom software source",
              args: { name: "json" },
            },
            optIsAutoResolveDependencies,
            optIsLatestContentOnly,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFilter,
            {
              name: "--is-auto-updated",
              description:
                "Indicates whether service should automatically update the custom software source for the user",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "get-erratum",
          description:
            "Returns information about the specified erratum based on its advisory name",
          options: [
            optCompartmentId2,
            {
              name: "--name",
              description: "The erratum name (such as ELSA-2023-34678)",
              args: { name: "name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-errata",
          description: "Lists all of the currently available errata",
          options: [
            optCompartmentId2,
            {
              name: "--name",
              description: "The assigned erratum name",
              args: { name: "name" },
              isRepeatable: true,
            },
            {
              name: "--name-contains",
              description:
                "A filter to return resources that may partially match the erratum name given",
              args: { name: "name-contains" },
            },
            optClassificationType,
            {
              name: "--advisory-type",
              description:
                "A filter to return only errata that match the given advisory types",
              args: { suggestions: ["SECURITY", "BUGFIX", "ENHANCEMENT"] },
              isRepeatable: true,
            },
            optOsFamily2,
            {
              name: "--advisory-severity",
              description: "The advisory severity",
              args: {
                suggestions: ["LOW", "MODERATE", "IMPORTANT", "CRITICAL"],
              },
              isRepeatable: true,
            },
            {
              name: "--time-issue-date-start",
              description:
                "The issue date after which to list all errata, in ISO 8601 format",
              args: { name: "datetime" },
            },
            {
              name: "--time-issue-date-end",
              description:
                "The issue date before which to list all errata, in ISO 8601 format",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort errata by",
              args: { suggestions: ["timeIssued", "name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get-module-stream",
          description:
            "Returns information about the specified module stream in a software source",
          options: [
            optSoftwareSourceId,
            optModuleName2,
            {
              name: "--stream-name",
              description: "The name of the stream of the containing module",
              args: { name: "stream-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-module-profile",
          description:
            "Returns information about the specified module stream profile in a software source",
          options: [
            optSoftwareSourceId,
            {
              name: "--profile-name",
              description: "The name of the module stream profile",
              args: { name: "profile-name" },
              isRequired: true,
            },
            optModuleName,
            {
              name: "--stream-name",
              description: "The name of the stream of the containing module",
              args: { name: "stream-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-package-group",
          description:
            "Returns information about the specified package group from a software source",
          options: [
            optSoftwareSourceId,
            {
              name: "--package-group-id",
              description: "The unique package group identifier",
              args: { name: "package-group-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "add-packages",
          description: "Adds packages to a software source",
          options: [
            optSoftwareSourceId,
            optPackages,
            {
              name: "--is-continue-on-missing-packages",
              description:
                "Indicates whether the service should generate a custom software source when the package list contains invalid",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "replicate-vendor-swsrc",
          description: "Creates a new software source",
          options: [
            optCompartmentId4,
            optDisplayName3,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--origin-software-source-id",
              description:
                "The OCID of the vendor software source in the root compartment that is being replicated",
              args: { name: "origin-software-source-id" },
            },
            {
              name: "--origin-display-name",
              description:
                "The display name of the software source to be replicated",
              args: { name: "origin-display-name" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-software-sources-with-package",
          description:
            "Lists the software sources in the tenancy that contain the software package",
          options: [
            optSoftwarePackageName,
            optCompartmentId2,
            {
              name: "--software-source-type",
              description: "The type of the software source",
              args: {
                suggestions: [
                  "VENDOR",
                  "CUSTOM",
                  "VERSIONED",
                  "PRIVATE",
                  "THIRD_PARTY",
                ],
              },
              isRepeatable: true,
            },
            optOsFamily,
            optArchType,
            {
              name: "--availability",
              description:
                "The availability of the software source in a non-OCI environment for a tenancy",
              args: {
                suggestions: [
                  "AVAILABLE",
                  "SELECTED",
                  "RESTRICTED",
                  "UNAVAILABLE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--availability-at-oci",
              description:
                "The availability of the software source in an OCI environment for a tenancy",
              args: {
                suggestions: [
                  "AVAILABLE",
                  "SELECTED",
                  "RESTRICTED",
                  "UNAVAILABLE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--availability-anywhere",
              description: "The availability of the software source",
              args: {
                suggestions: [
                  "AVAILABLE",
                  "SELECTED",
                  "RESTRICTED",
                  "UNAVAILABLE",
                ],
              },
              isRepeatable: true,
            },
            optDisplayName2,
            optDisplayNameContains,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only software sources whose state matches the given state",
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
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update-versioned-custom-swsrc",
          description:
            "Updates the specified software source's details, including but not limited to name, description, and tags",
          options: [
            optSoftwareSourceId,
            optCompartmentId5,
            optDisplayName3,
            optDescription3,
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
          name: "create-private-swsrc",
          description: "Creates a new software source",
          options: [
            optCompartmentId4,
            {
              name: "--os-family",
              description: "The OS family for the private software source",
              args: {
                suggestions: [
                  "ORACLE_LINUX_10",
                  "ORACLE_LINUX_9",
                  "ORACLE_LINUX_8",
                  "ORACLE_LINUX_7",
                  "ORACLE_LINUX_6",
                  "WINDOWS_SERVER_2016",
                  "WINDOWS_SERVER_2019",
                  "WINDOWS_SERVER_2022",
                  "WINDOWS_SERVER_2025",
                  "WINDOWS_11",
                  "ALL",
                  "UBUNTU_20_04",
                  "UBUNTU_22_04",
                  "UBUNTU_24_04",
                ],
              },
              isRequired: true,
            },
            {
              name: "--arch-type",
              description:
                "The architecture type supported by the private software source",
              args: {
                suggestions: [
                  "X86_64",
                  "AARCH64",
                  "I686",
                  "NOARCH",
                  "SRC",
                  "I386",
                  "AMD64",
                  "ARM64",
                  "ALL",
                ],
              },
              isRequired: true,
            },
            {
              name: "--url",
              description: "URL for the private software source",
              args: { name: "url" },
              isRequired: true,
            },
            optDisplayName3,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optGpgKeyUrl,
            optIsGpgCheckEnabled,
            optIsSslVerifyEnabled,
            optAdvancedRepoOptions,
            optIsMirrorSyncAllowed,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-third-party-swsrc",
          description: "Creates a new software source",
          options: [
            optCompartmentId4,
            {
              name: "--os-family",
              description: "The OS family for the third-party software source",
              args: {
                suggestions: [
                  "ORACLE_LINUX_10",
                  "ORACLE_LINUX_9",
                  "ORACLE_LINUX_8",
                  "ORACLE_LINUX_7",
                  "ORACLE_LINUX_6",
                  "WINDOWS_SERVER_2016",
                  "WINDOWS_SERVER_2019",
                  "WINDOWS_SERVER_2022",
                  "WINDOWS_SERVER_2025",
                  "WINDOWS_11",
                  "ALL",
                  "UBUNTU_20_04",
                  "UBUNTU_22_04",
                  "UBUNTU_24_04",
                ],
              },
              isRequired: true,
            },
            {
              name: "--arch-type",
              description:
                "The architecture type supported by the third-party software source",
              args: {
                suggestions: [
                  "X86_64",
                  "AARCH64",
                  "I686",
                  "NOARCH",
                  "SRC",
                  "I386",
                  "AMD64",
                  "ARM64",
                  "ALL",
                ],
              },
              isRequired: true,
            },
            {
              name: "--url",
              description: "URL for the third-party software source",
              args: { name: "url" },
              isRequired: true,
            },
            optDisplayName3,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optGpgKeyUrl,
            optIsGpgCheckEnabled,
            optIsSslVerifyEnabled,
            optAdvancedRepoOptions,
            optIsMirrorSyncAllowed,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-packages",
          description: "Removes packages from a software source",
          options: [
            optSoftwareSourceId,
            optPackages,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "replace-packages",
          description:
            "Replaces packages in a software source with the provided list of packages",
          options: [
            optSoftwareSourceId,
            optPackages,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-metadata",
          description:
            "Regenerates metadata for the specified custom software source",
          options: [optSoftwareSourceId, optIfMatch, optFromJson],
        },
        {
          name: "update-private-swsrc",
          description:
            "Updates the specified software source's details, including but not limited to name, description, and tags",
          options: [
            optSoftwareSourceId,
            optCompartmentId5,
            optDisplayName3,
            optDescription3,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--url",
              description: "URL for the private software source",
              args: { name: "url" },
            },
            optGpgKeyUrl,
            optIsGpgCheckEnabled,
            optIsSslVerifyEnabled,
            optAdvancedRepoOptions,
            optIsMirrorSyncAllowed,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-third-party-swsrc",
          description:
            "Updates the specified software source's details, including but not limited to name, description, and tags",
          options: [
            optSoftwareSourceId,
            optCompartmentId5,
            optDisplayName3,
            optDescription3,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--url",
              description: "URL for the third-party software source",
              args: { name: "url" },
            },
            optGpgKeyUrl,
            optIsGpgCheckEnabled,
            optIsSslVerifyEnabled,
            optAdvancedRepoOptions,
            optIsMirrorSyncAllowed,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-available-software-sources",
          description:
            "Retrieves a list of software source repos that are available to add to a specified compartment",
          options: [
            optCompartmentId2,
            optOsFamily,
            optArchType,
            optDisplayName2,
            optDisplayNameContains,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optIfMatch,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "An object that defines a work request",
      subcommands: [
        {
          name: "get",
          description: "Returns information about the specified work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists work requests that match the specified compartment or work request OCID",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "The OCID of the work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return work requests that match the given status",
              args: {
                suggestions: [
                  "WAITING",
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                  "SKIPPED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--resource-id",
              description: "The OCID of the resource",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
            optSortOrder,
            optSortBy,
            {
              name: "--initiator-id",
              description:
                "The OCID of the schedule job that initiated the work request",
              args: { name: "initiator-id" },
            },
            {
              name: "--parent-id",
              description: "The OCID of the parent work request",
              args: { name: "parent-id" },
            },
            {
              name: "--operation-type",
              description:
                "The asynchronous operation tracked by this work request",
              args: {
                suggestions: [
                  "INSTALL_PACKAGES",
                  "REMOVE_PACKAGES",
                  "UPDATE_PACKAGES",
                  "UPDATE_ALL_PACKAGES",
                  "UPDATE_SECURITY",
                  "UPDATE_BUGFIX",
                  "UPDATE_ENHANCEMENT",
                  "UPDATE_OTHER",
                  "UPDATE_KSPLICE_KERNEL",
                  "UPDATE_KSPLICE_USERSPACE",
                  "ENABLE_MODULE_STREAMS",
                  "DISABLE_MODULE_STREAMS",
                  "SWITCH_MODULE_STREAM",
                  "INSTALL_MODULE_PROFILES",
                  "REMOVE_MODULE_PROFILES",
                  "SET_SOFTWARE_SOURCES",
                  "LIST_PACKAGES",
                  "SET_MANAGEMENT_STATION_CONFIG",
                  "SYNC_MANAGEMENT_STATION_MIRROR",
                  "UPDATE_MANAGEMENT_STATION_SOFTWARE",
                  "UPDATE",
                  "MODULE_ACTIONS",
                  "LIFECYCLE_PROMOTION",
                  "CREATE_SOFTWARE_SOURCE",
                  "UPDATE_SOFTWARE_SOURCE",
                  "IMPORT_CONTENT",
                  "SYNC_AGENT_CONFIG",
                  "INSTALL_WINDOWS_UPDATES",
                  "LIST_WINDOWS_UPDATE",
                  "GET_WINDOWS_UPDATE_DETAILS",
                  "INSTALL_ALL_WINDOWS_UPDATES",
                  "INSTALL_SECURITY_WINDOWS_UPDATES",
                  "INSTALL_BUGFIX_WINDOWS_UPDATES",
                  "INSTALL_ENHANCEMENT_WINDOWS_UPDATES",
                  "INSTALL_OTHER_WINDOWS_UPDATES",
                  "REMOVE_CONTENT",
                  "UNREGISTER_MANAGED_INSTANCE",
                  "REBOOT",
                  "REGISTER_MANAGED_INSTANCE",
                  "LIST_SNAPS",
                  "INSTALL_SNAPS",
                  "REMOVE_SNAPS",
                  "SWITCH_SNAP_CHANNEL",
                ],
              },
              isRepeatable: true,
            },
            optDisplayNameContains,
            {
              name: "--retry-of-id",
              description:
                "A filter to return the work requests that are a retry of the given work request OCIDs",
              args: { name: "retry-of-id" },
            },
            {
              name: "--rerun-of-id",
              description:
                "A filter to return the work requests that are a rerun of the given work request OCIDs",
              args: { name: "rerun-of-id" },
            },
            optCompartmentIdInSubtree,
            optAll,
            optPageSize,
            optIsManagedByAlx,
            {
              name: "--time-created-gte",
              description:
                "A filter to return work requests that were created on or after the date provided (in RFC 3339 format)",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-lt",
              description:
                "A filter to return work requests that were created before the date provided (in RFC 3339 format)",
              args: { name: "datetime" },
            },
            {
              name: "--parent-resources-ne",
              description:
                "A filter to return the resources whose parent resources are not the same as the given resource OCID(s)",
              args: { name: "parent-resources-ne" },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "rerun",
          description:
            "Reruns a failed work for the specified work request OCID",
          options: [
            optWorkRequestId,
            {
              name: "--managed-instances",
              description:
                "List of managed instance OCIDs to affected by the rerun of the work request",
              args: { name: "json" },
            },
            optWorkRequestDetails,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-errors",
          description: "Returns the errors for the specified work request",
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
        {
          name: "list-logs",
          description: "Returns the logs for the specified work request",
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
  ],
};

export default completionSpec;
