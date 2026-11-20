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
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags associated with this resource",
  args: { name: "json" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optStackId: Fig.Option = {
  name: "--stack-id",
  description: "The OCID of the stack",
  args: { name: "stack-id" },
  isRequired: true,
};
const optVariables: Fig.Option = {
  name: "--variables",
  description: "Terraform variables associated with this resource",
  args: { name: "json" },
};
const optCustomTerraformProvider: Fig.Option = {
  name: "--custom-terraform-provider",
  args: { name: "json" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Description of the stack",
  args: { name: "description" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optFreeformTags2: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags associated with the resource",
  args: { name: "json" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The number of items returned in a paginated List call",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The value of the opc-next-page response header from the preceding List call",
  args: { name: "page" },
};
const optTerraformVersion: Fig.Option = {
  name: "--terraform-version",
  description: "The version of Terraform to use with the stack",
  args: { name: "terraform-version" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE"] },
  isRepeatable: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "A filter to return only resources that exist in the compartment, identified by OCID",
  args: { name: "compartment-id" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED"] },
  isRepeatable: true,
};
const optConfigSourceWorkingDirectory: Fig.Option = {
  name: "--config-source-working-directory",
  description: "File path to the directory to use for running Terraform",
  args: { name: "config-source-working-directory", template: "folders" },
};
const optJobId: Fig.Option = {
  name: "--job-id",
  description: "The OCID of the job",
  args: { name: "job-id" },
  isRequired: true,
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "Description of the configuration source provider",
  args: { name: "description" },
};
const optPrivateServerConfigDetails: Fig.Option = {
  name: "--private-server-config-details",
  args: { name: "json" },
};
const optDefinedTags2: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags associated with this resource",
  args: { name: "json" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use when sorting returned resources",
  args: { suggestions: ["ASC", "DESC"] },
};
const optWaitForState3: Fig.Option = {
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
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description:
    "Unique identifier (OCID) of the compartment in which the stack resides",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optConfigurationSourceProviderId: Fig.Option = {
  name: "--configuration-source-provider-id",
  description: "The OCID of the configuration source provider",
  args: { name: "configuration-source-provider-id" },
  isRequired: true,
};
const optFile: Fig.Option = {
  name: "--file",
  description:
    "The name of the file that will receive the response data, or '-' to write to STDOUT",
  args: { name: "file", template: "filepaths" },
  isRequired: true,
};
const optStackId2: Fig.Option = {
  name: "--stack-id",
  description: "The OCID of the stack that is associated with the current job",
  args: { name: "stack-id" },
  isRequired: true,
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["CREATING", "ACTIVE", "DELETING", "DELETED", "FAILED"],
  },
  isRepeatable: true,
};
const optIsThirdPartyProviderExperienceEnabled: Fig.Option = {
  name: "--is-third-party-provider-experience-enabled",
  description:
    "When true, changes the stack's sourcing of third-party Terraform providers to Terraform Registry and allows",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optTemplateId: Fig.Option = {
  name: "--template-id",
  description: "The OCID of the template",
  args: { name: "template-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment where you want to create the configuration source provider",
  args: { name: "compartment-id" },
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the given display name exactly",
  args: { name: "display-name" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optPrivateEndpointId: Fig.Option = {
  name: "--private-endpoint-id",
  description: "The OCID of the private endpoint",
  args: { name: "private-endpoint-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to use when sorting returned resources",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optJobOperationDetailsIsProviderUpgradeRequired: Fig.Option = {
  name: "--job-operation-details-is-provider-upgrade-required",
  description: "Specifies whether or not to upgrade provider versions",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optOperation: Fig.Option = {
  name: "--operation",
  description: "Terraform-specific operation to execute",
  args: { name: "operation" },
};
const optTerraformAdvancedOptions: Fig.Option = {
  name: "--terraform-advanced-options",
  description: "Specifies advanced options for Terraform commands",
  args: { name: "json" },
};
const completionSpec: Fig.Spec = {
  name: "resource-manager",
  description: "Resource Manager",
  subcommands: [
    {
      name: "template",
      description: "The properties that define a template",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a template into a different compartment within the same tenancy",
          options: [
            optTemplateId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the configuration source provider to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified template",
          options: [
            optTemplateId,
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
          description: "Gets the specified template",
          options: [optTemplateId, optFromJson],
        },
        {
          name: "get-template-logo",
          description:
            "Returns the Terraform logo file in .logo format for the specified template",
          options: [optTemplateId, optFile, optFromJson],
        },
        {
          name: "get-template-tf-config",
          description:
            "Returns the Terraform configuration file in zip format for the specified template",
          options: [optTemplateId, optFile, optFromJson],
        },
        {
          name: "list",
          description: "Lists templates according to the specified filter",
          options: [
            optCompartmentId,
            {
              name: "--template-category-id",
              description: "Unique identifier for the template category",
              args: { name: "template-category-id" },
            },
            {
              name: "--template-id",
              description: "The OCID of the template",
              args: { name: "template-id" },
            },
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-template-categories",
          description: "Lists template categories",
          options: [optAll, optFromJson],
        },
        {
          name: "create",
          description:
            "Creates a private template in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing this template",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the template",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--long-description",
              description: "Detailed description of the template",
              args: { name: "long-description" },
            },
            optFreeformTags2,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--logo-file",
              description: "Base64-encoded logo for the template",
              args: { name: "logo-file", template: "filepaths" },
            },
            {
              name: "--config-source",
              description: "Required",
              args: { name: "config-source" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified template",
          options: [
            optTemplateId,
            optDisplayName,
            {
              name: "--description",
              description: "Description of the template",
              args: { name: "description" },
            },
            {
              name: "--long-description",
              description: "Detailed description of the template",
              args: { name: "long-description" },
            },
            optFreeformTags2,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--logo-file",
              description: "Base64-encoded logo for the template",
              args: { name: "logo-file", template: "filepaths" },
            },
            { name: "--config-source", args: { name: "config-source" } },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "stack",
      description: "The properties that define a stack",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a stack (and its associated jobs) into a different compartment within the same tenancy",
          options: [
            optStackId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the Stack should be moved",
              args: { name: "compartment-id" },
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
          name: "create-stack-create-dev-ops-config-source-details",
          description: "Creates a stack in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--config-source-project-id",
              description: "The OCID of the DevOps project",
              args: { name: "config-source-project-id" },
              isRequired: true,
            },
            {
              name: "--config-source-repository-id",
              description: "The OCID of the DevOps repository",
              args: { name: "config-source-repository-id" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags2,
            optConfigSourceWorkingDirectory,
            {
              name: "--config-source-branch-name",
              description:
                "The name of the branch that contains the Terraform configuration",
              args: { name: "config-source-branch-name" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified stack",
          options: [
            optStackId,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified stack",
          options: [optStackId, optFromJson],
        },
        {
          name: "get-stack-tf-config",
          description:
            "Returns the Terraform configuration file for the specified stack in zip format",
          options: [optStackId, optFile, optFromJson],
        },
        {
          name: "get-stack-tf-state",
          description: "Returns the Terraform state for the specified stack",
          options: [optStackId, optFile, optFromJson],
        },
        {
          name: "list-resource-discovery-services",
          description:
            "Returns a list of supported services for Resource Discovery",
          options: [optCompartmentId, optAll, optFromJson],
        },
        {
          name: "list",
          description: "Lists stacks according to the specified filter",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description: "The OCID on which to query for a stack",
              args: { name: "id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns only those resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-terraform-versions",
          description:
            "Returns a list of supported Terraform versions for use with stacks",
          options: [optCompartmentId, optAll, optFromJson],
        },
        {
          name: "update-stack-update-dev-ops-config-source-details",
          description: "Updates the specified stack",
          options: [
            optStackId,
            {
              name: "--config-source-project-id",
              description: "The OCID of the DevOps project",
              args: { name: "config-source-project-id" },
              isRequired: true,
            },
            {
              name: "--config-source-repository-id",
              description: "The OCID of the DevOps repository",
              args: { name: "config-source-repository-id" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optIsThirdPartyProviderExperienceEnabled,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optConfigSourceWorkingDirectory,
            {
              name: "--config-source-branch-name",
              description:
                "The name of the branch that contains the Terraform configuration",
              args: { name: "config-source-branch-name" },
            },
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a Stack",
          options: [
            optCompartmentId2,
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--config-source",
              description: "A Terraform configuration .zip file",
              args: { name: "config-source" },
              isRequired: true,
            },
            {
              name: "--working-directory",
              description:
                "The path of the directory from which to run terraform",
              args: { name: "working-directory", template: "folders" },
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NOT_CHECKED",
                  "IN_SYNC",
                  "DRIFTED",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update the Stack object",
          options: [
            optStackId,
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optIsThirdPartyProviderExperienceEnabled,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--config-source",
              description: "A Terraform configuration .zip file",
              args: { name: "config-source" },
            },
            {
              name: "--working-directory",
              description:
                "The path of the directory from which to run terraform",
              args: { name: "working-directory", template: "folders" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-from-compartment",
          description: "Creates a stack in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--config-source-compartment-id",
              description:
                "The OCID of the compartment to use for creating the stack",
              args: { name: "config-source-compartment-id" },
              isRequired: true,
            },
            {
              name: "--config-source-region",
              description: "The region to use for creating the stack",
              args: { name: "config-source-region" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags2,
            optConfigSourceWorkingDirectory,
            {
              name: "--config-source-services-to-discover",
              description: "Filter for services to use with Resource Discovery",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-from-git-provider",
          description: "Creates a stack in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--config-source-configuration-source-provider-id",
              description:
                "Unique identifier (OCID) for the Git configuration source",
              args: { name: "config-source-configuration-source-provider-id" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags2,
            optConfigSourceWorkingDirectory,
            {
              name: "--config-source-repository-url",
              description: "The URL of the Git repository",
              args: { name: "config-source-repository-url" },
            },
            {
              name: "--config-source-branch-name",
              description: "The name of the branch within the Git repository",
              args: { name: "config-source-branch-name" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-from-git-provider",
          description: "Updates the specified stack",
          options: [
            optStackId,
            {
              name: "--config-source-configuration-source-provider-id",
              description:
                "Unique identifier (OCID) for the Git configuration source",
              args: { name: "config-source-configuration-source-provider-id" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optIsThirdPartyProviderExperienceEnabled,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optConfigSourceWorkingDirectory,
            {
              name: "--config-source-repository-url",
              description: "The URL of the Git repository",
              args: { name: "config-source-repository-url" },
            },
            {
              name: "--config-source-branch-name",
              description: "The name of the branch within the Git repository",
              args: { name: "config-source-branch-name" },
            },
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "detect-drift",
          description: "Checks drift status for the specified stack",
          options: [
            optStackId,
            optIfMatch,
            {
              name: "--resource-addresses",
              description:
                "The list of resources in the specified stack to detect drift for",
              args: { name: "json" },
            },
            {
              name: "--is-provider-upgrade-required",
              description:
                "Specifies whether or not to upgrade provider versions",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list-resource-drift-details",
          description:
            "Lists drift status details for each resource defined in the specified stack",
          options: [
            optStackId,
            {
              name: "--work-request-id",
              description: "The OCID of the work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--resource-drift-status",
              description:
                "A filter that returns only resources that match the given drift status",
              args: {
                suggestions: ["NOT_CHECKED", "IN_SYNC", "MODIFIED", "DELETED"],
              },
              isRepeatable: true,
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-from-object-storage",
          description: "Creates a stack in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--config-source-region",
              description: "The name of the bucket's region",
              args: { name: "config-source-region" },
              isRequired: true,
            },
            {
              name: "--config-source-namespace",
              description:
                "The Object Storage namespace that contains the bucket",
              args: { name: "config-source-namespace" },
              isRequired: true,
            },
            {
              name: "--config-source-bucket-name",
              description:
                "The name of the bucket that contains the Terraform configuration files",
              args: { name: "config-source-bucket-name" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags2,
            optConfigSourceWorkingDirectory,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-from-object-storage",
          description: "Updates the specified stack",
          options: [
            optStackId,
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optIsThirdPartyProviderExperienceEnabled,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optConfigSourceWorkingDirectory,
            {
              name: "--config-source-region",
              description: "The name of the bucket's region",
              args: { name: "config-source-region" },
            },
            {
              name: "--config-source-namespace",
              description:
                "The Object Storage namespace that contains the bucket",
              args: { name: "config-source-namespace" },
            },
            {
              name: "--config-source-bucket-name",
              description:
                "The name of the bucket that contains the Terraform configuration files",
              args: { name: "config-source-bucket-name" },
            },
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-from-template",
          description: "Creates a stack in the specified compartment",
          options: [
            optCompartmentId2,
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--template-id",
              description: "Required",
              args: { name: "template-id" },
              isRequired: true,
            },
            {
              name: "--working-directory",
              description:
                "File path to the directory from which Terraform runs",
              args: { name: "working-directory", template: "folders" },
            },
            optFromJson,
          ],
        },
        {
          name: "copy",
          description:
            "Creates a copy of the specified stack in the specified destination (compartment and region)",
          options: [
            optStackId,
            {
              name: "--destination-compartment-id",
              description:
                "The OCID of the destination compartment for the copied stack",
              args: { name: "destination-compartment-id" },
            },
            {
              name: "--destination-region",
              description: "The destination region for the copied stack",
              args: { name: "destination-region" },
            },
            {
              name: "--display-name",
              description: "The display name to use for the copied stack",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The description to use for the copied stack",
              args: { name: "description" },
            },
            optVariables,
            optFreeformTags,
            optDefinedTags2,
            {
              name: "--access-token",
              description: "The personal access token for the Git repository",
              args: { name: "access-token" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-from-bitbucket-cloud",
          description: "Creates a stack in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--config-source-configuration-source-provider-id",
              description:
                "The OCID of the Bitbucket Cloud configuration source",
              args: { name: "config-source-configuration-source-provider-id" },
              isRequired: true,
            },
            {
              name: "--config-source-repository-url",
              description:
                "The URL of the Bitbucket Cloud repository for the configuration source",
              args: { name: "config-source-repository-url" },
              isRequired: true,
            },
            {
              name: "--config-source-workspace-id",
              description:
                "The id of the workspace in Bitbucket Cloud for the configuration source",
              args: { name: "config-source-workspace-id" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags2,
            optConfigSourceWorkingDirectory,
            {
              name: "--config-source-branch-name",
              description:
                "The name of the branch in the Bitbucket Cloud repository for the configuration source",
              args: { name: "config-source-branch-name" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-from-bitbucket-server",
          description: "Creates a stack in the specified compartment",
          options: [
            optCompartmentId2,
            {
              name: "--config-source-configuration-source-provider-id",
              description:
                "Unique identifier (OCID) for the Bitbucket Server configuration source",
              args: { name: "config-source-configuration-source-provider-id" },
              isRequired: true,
            },
            {
              name: "--config-source-repository-url",
              description: "The URL of the Bitbucket Server repository",
              args: { name: "config-source-repository-url" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags2,
            optConfigSourceWorkingDirectory,
            {
              name: "--config-source-branch-name",
              description:
                "The name of the branch within the Bitbucket Server repository",
              args: { name: "config-source-branch-name" },
            },
            {
              name: "--config-source-project-id",
              description: "Unique identifier for a Bitbucket Server project",
              args: { name: "config-source-project-id" },
            },
            {
              name: "--config-source-repository-id",
              description:
                "Bitbucket Server repository identifier, usually identified as <repository>.git",
              args: { name: "config-source-repository-id" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-from-bitbucket-cloud",
          description: "Updates the specified stack",
          options: [
            optStackId,
            {
              name: "--config-source-configuration-source-provider-id",
              description:
                "The OCID of the Bitbucket Cloud configuration source",
              args: { name: "config-source-configuration-source-provider-id" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optIsThirdPartyProviderExperienceEnabled,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optConfigSourceWorkingDirectory,
            {
              name: "--config-source-repository-url",
              description:
                "The URL of the Bitbucket Cloud repository for the configuration source",
              args: { name: "config-source-repository-url" },
            },
            {
              name: "--config-source-branch-name",
              description:
                "The name of the branch in the Bitbucket Cloud repository for the configuration source",
              args: { name: "config-source-branch-name" },
            },
            {
              name: "--config-source-workspace-id",
              description:
                "The id of the workspace in Bitbucket Cloud for the configuration source",
              args: { name: "config-source-workspace-id" },
            },
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "code",
          description: "Updates the specified stack",
          options: [
            optStackId,
            {
              name: "--config-source-configuration-source-provider-id",
              description:
                "Unique identifier (OCID) for the Bitbucket Server configuration source",
              args: { name: "config-source-configuration-source-provider-id" },
              isRequired: true,
            },
            optDisplayName,
            optDescription,
            optCustomTerraformProvider,
            optIsThirdPartyProviderExperienceEnabled,
            optVariables,
            optTerraformVersion,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optConfigSourceWorkingDirectory,
            {
              name: "--config-source-repository-url",
              description: "The URL of the Bitbucket Server repository",
              args: { name: "config-source-repository-url" },
            },
            {
              name: "--config-source-branch-name",
              description:
                "The name of the branch within the Bitbucket Server repository",
              args: { name: "config-source-branch-name" },
            },
            {
              name: "--config-source-project-id",
              description: "Unique identifier for a Bitbucket Server project",
              args: { name: "config-source-project-id" },
            },
            {
              name: "--config-source-repository-id",
              description:
                "Bitbucket Server repository identifier, usually identified as <repository>.git",
              args: { name: "config-source-repository-id" },
            },
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
      name: "private-endpoint",
      description:
        "A private endpoint allowing Resource Manager to access nonpublic cloud resources",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a private endpoint to a different compartment within the same tenancy",
          options: [
            optPrivateEndpointId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the private endpoint to",
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
            "Creates a private endpoint in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing this private endpoint",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN for the private endpoint",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet within the VCN for the private endpoint",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the private endpoint",
              args: { name: "description" },
            },
            {
              name: "--dns-zones",
              description:
                "DNS Proxy forwards any DNS FQDN queries over into the consumer DNS resolver if the DNS FQDN is included",
              args: { name: "json" },
            },
            {
              name: "--nsg-id-list",
              description:
                "The OCIDs of network security groups (NSGs) for the private endpoint",
              args: { name: "json" },
            },
            {
              name: "--is-used-with-configuration-source-provider",
              description:
                "When true, allows the private endpoint to be used with a configuration source provider",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags2,
            optDefinedTags,
            {
              name: "--security-attributes",
              description:
                "Security attributes are labels for a resource that can be referenced in a Zero Trust Packet Routing",
              args: { name: "json" },
            },
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified private endpoint",
          options: [
            optPrivateEndpointId,
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
          description: "Gets the specified private endpoint",
          options: [optPrivateEndpointId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified private endpoint",
          options: [
            optPrivateEndpointId,
            optDisplayName,
            {
              name: "--description",
              description: "Description of the private endpoint",
              args: { name: "description" },
            },
            {
              name: "--vcn-id",
              description: "The OCID of the VCN for the private endpoint",
              args: { name: "vcn-id" },
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet within the VCN for the private endpoint",
              args: { name: "subnet-id" },
            },
            {
              name: "--dns-zones",
              description:
                "DNS Proxy forwards any DNS FQDN queries over into the consumer DNS resolver if the DNS FQDN is included",
              args: { name: "json" },
            },
            {
              name: "--nsg-id-list",
              description:
                "The OCIDs of network security groups (NSGs) for the private endpoint",
              args: { name: "json" },
            },
            {
              name: "--is-used-with-configuration-source-provider",
              description:
                "When true, allows the private endpoint to be used with a configuration source provider",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags2,
            optDefinedTags,
            {
              name: "--security-attributes",
              description:
                "Security attributes are labels for a resource that can be referenced in a Zero Trust Packet Routing",
              args: { name: "json" },
            },
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
            "Lists private endpoints according to the specified filter",
          options: [
            optCompartmentId,
            {
              name: "--private-endpoint-id",
              description: "The OCID of the private endpoint",
              args: { name: "private-endpoint-id" },
            },
            optDisplayName2,
            {
              name: "--vcn-id",
              description: "The OCID of the VCN",
              args: { name: "vcn-id" },
            },
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get-reachable-ip",
          description:
            "Gets the reachable, or alternative, IP address for a nonpublic IP address that is associated with the private",
          options: [
            {
              name: "--private-ip",
              description:
                "The IP address of the resource in the private subnet",
              args: { name: "private-ip" },
              isRequired: true,
            },
            optPrivateEndpointId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "The status of a work request",
      subcommands: [
        {
          name: "get",
          description: "Returns the specified work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "get-work-request-log-entries",
          description:
            "Returns console log entries for the specified work request in JSON format",
          options: [
            optWorkRequestId,
            {
              name: "--type",
              description:
                "A filter that returns only logs of a specified type",
              args: { suggestions: ["TERRAFORM_CONSOLE"] },
              isRepeatable: true,
            },
            {
              name: "--level-greater-than-or-equal-to",
              description:
                "A filter that returns only log entries that match a given severity level or greater",
              args: {
                suggestions: [
                  "TRACE",
                  "DEBUG",
                  "INFO",
                  "WARN",
                  "ERROR",
                  "FATAL",
                ],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            {
              name: "--timestamp-greater-than-or-equal-to",
              description:
                "Time stamp specifying the lower time limit for which logs are returned in a query",
              args: { name: "datetime" },
            },
            {
              name: "--timestamp-less-than-or-equal-to",
              description:
                "Time stamp specifying the upper time limit for which logs are returned in a query",
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
        {
          name: "get-work-request-log-entries-content",
          description:
            "Returns the raw log file for the specified work request in text format",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list-work-request-errors",
          description:
            "Returns a paginated list of errors for the specified work request",
          options: [
            optWorkRequestId,
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-work-request-logs",
          description:
            "Returns a paginated list of logs for the specified work request",
          options: [
            optWorkRequestId,
            optCompartmentId,
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
            "Lists the work requests in the specified compartment or for the specified resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "A filter to return only resources that exist in the compartment, identified by OCID",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "The OCID of the resource",
              args: { name: "resource-id" },
            },
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
      name: "associated-resource-summary",
      description:
        "Summary information for a resource associated with a stack or job",
      subcommands: [
        {
          name: "list-job-associated-resources",
          description:
            "Gets the list of resources associated with the specified job",
          options: [
            optJobId,
            optCompartmentId,
            {
              name: "--terraform-resource-type",
              description: "A filter to return only specified resource types",
              args: { name: "terraform-resource-type" },
            },
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-stack-associated-resources",
          description:
            "Gets the list of resources associated with the specified stack",
          options: [
            optStackId,
            {
              name: "--terraform-resource-type",
              description: "A filter to return only specified resource types",
              args: { name: "terraform-resource-type" },
            },
            optCompartmentId,
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
      name: "configuration-source-provider",
      description: "The properties that define a configuration source provider",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a configuration source provider into a different compartment within the same tenancy",
          options: [
            optConfigurationSourceProviderId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the configuration source provider to",
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
            "Creates a configuration source provider in the specified compartment",
          options: [
            {
              name: "--config-source-provider-type",
              description: "The type of configuration source provider",
              args: { name: "config-source-provider-type" },
              isRequired: true,
            },
            optCompartmentId3,
            optDisplayName,
            optDescription2,
            optPrivateServerConfigDetails,
            optFreeformTags2,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified configuration source provider",
          options: [
            optConfigurationSourceProviderId,
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
            "Gets the properties of the specified configuration source provider",
          options: [optConfigurationSourceProviderId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the properties of the specified configuration source provider",
          options: [
            optConfigurationSourceProviderId,
            optDisplayName,
            optDescription2,
            {
              name: "--config-source-provider-type",
              description: "The type of configuration source provider",
              args: { name: "config-source-provider-type" },
            },
            optPrivateServerConfigDetails,
            optFreeformTags2,
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
          name: "create-gitlab-access-token-provider",
          description:
            "Creates a configuration source provider in the specified compartment",
          options: [
            {
              name: "--api-endpoint",
              description: "The Git service endpoint",
              args: { name: "api-endpoint" },
              isRequired: true,
            },
            {
              name: "--access-token",
              description:
                "The personal access token to be configured on the GitLab repository",
              args: { name: "access-token" },
              isRequired: true,
            },
            optCompartmentId3,
            optDisplayName,
            optDescription2,
            optPrivateServerConfigDetails,
            optFreeformTags2,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-gitlab-access-token-provider",
          description:
            "Updates the properties of the specified configuration source provider",
          options: [
            optConfigurationSourceProviderId,
            optDisplayName,
            optDescription2,
            optPrivateServerConfigDetails,
            optFreeformTags2,
            optDefinedTags,
            {
              name: "--api-endpoint",
              description: "The Git service endpoint",
              args: { name: "api-endpoint" },
            },
            {
              name: "--access-token",
              description:
                "The personal access token to be configured on the GitLab repository",
              args: { name: "access-token" },
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
          name: "create-github-access-token-provider",
          description:
            "Creates a configuration source provider in the specified compartment",
          options: [
            {
              name: "--api-endpoint",
              description: "The GitHub service endpoint",
              args: { name: "api-endpoint" },
              isRequired: true,
            },
            {
              name: "--access-token",
              description:
                "The personal access token to be configured on the GitHub repository",
              args: { name: "access-token" },
              isRequired: true,
            },
            optCompartmentId3,
            optDisplayName,
            optDescription2,
            optPrivateServerConfigDetails,
            optFreeformTags2,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-github-access-token-provider",
          description:
            "Updates the properties of the specified configuration source provider",
          options: [
            optConfigurationSourceProviderId,
            optDisplayName,
            optDescription2,
            optPrivateServerConfigDetails,
            optFreeformTags2,
            optDefinedTags,
            {
              name: "--api-endpoint",
              description: "The GitHub service endpoint",
              args: { name: "api-endpoint" },
            },
            {
              name: "--access-token",
              description:
                "The personal access token to be configured on the GitHub repository",
              args: { name: "access-token" },
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
          name: "list",
          description:
            "Lists configuration source providers according to the specified filter",
          options: [
            optCompartmentId,
            {
              name: "--configuration-source-provider-id",
              description:
                "A filter to return only configuration source providers that match the provided OCID",
              args: { name: "configuration-source-provider-id" },
            },
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            {
              name: "--config-source-provider-type",
              description:
                "A filter to return only configuration source providers of the specified type (GitHub or GitLab)",
              args: { name: "config-source-provider-type" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "create-bitbucket-server-access-token-provider",
          description:
            "Creates a configuration source provider in the specified compartment",
          options: [
            {
              name: "--secret-id",
              description:
                "The secret ocid which is used to authorize the user",
              args: { name: "secret-id" },
              isRequired: true,
            },
            {
              name: "--api-endpoint",
              description: "The Bitbucket Server service endpoint",
              args: { name: "api-endpoint" },
              isRequired: true,
            },
            optCompartmentId3,
            optDisplayName,
            optDescription2,
            optPrivateServerConfigDetails,
            optFreeformTags2,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-bitbucket-server-access-token-provider",
          description:
            "Updates the properties of the specified configuration source provider",
          options: [
            optConfigurationSourceProviderId,
            optDisplayName,
            optDescription2,
            optPrivateServerConfigDetails,
            optFreeformTags2,
            optDefinedTags,
            {
              name: "--secret-id",
              description:
                "The secret ocid which is used to authorize the user",
              args: { name: "secret-id" },
            },
            {
              name: "--api-endpoint",
              description: "The Bitbucket server service endpoint",
              args: { name: "api-endpoint" },
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
          name: "create-bitbucket-cloud-email-api-token-provider",
          description:
            "Creates a configuration source provider in the specified compartment",
          options: [
            {
              name: "--api-endpoint",
              description: "The Bitbucket cloud service endpoint",
              args: { name: "api-endpoint" },
              isRequired: true,
            },
            {
              name: "--email",
              description:
                "Atlassian account email used for Bitbucket Cloud API token authentication",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--secret-id",
              description:
                "The secret ocid which is used to authorize the user",
              args: { name: "secret-id" },
              isRequired: true,
            },
            optCompartmentId3,
            optDisplayName,
            optDescription2,
            optPrivateServerConfigDetails,
            optFreeformTags2,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-bitbucket-cloud-email-api-token-provider",
          description:
            "Updates the properties of the specified configuration source provider",
          options: [
            optConfigurationSourceProviderId,
            optDisplayName,
            optDescription2,
            optPrivateServerConfigDetails,
            optFreeformTags2,
            optDefinedTags,
            {
              name: "--api-endpoint",
              description: "The Bitbucket service endpoint",
              args: { name: "api-endpoint" },
            },
            {
              name: "--email",
              description:
                "Atlassian account email used for Bitbucket Cloud API token authentication",
              args: { name: "email" },
            },
            {
              name: "--secret-id",
              description: "The secret OCID containing an Atlassian API token",
              args: { name: "secret-id" },
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
      name: "job",
      description: "The properties of a job",
      subcommands: [
        {
          name: "cancel",
          description: "Indicates the intention to cancel the specified job",
          options: [
            optJobId,
            optIfMatch,
            {
              name: "--is-forced",
              description:
                "Indicates whether a forced cancellation is requested for the job while it was running",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a job",
          options: [
            optStackId2,
            optDisplayName,
            optOperation,
            { name: "--job-operation-details", args: { name: "json" } },
            { name: "--apply-job-plan-resolution", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the properties of the specified job",
          options: [optJobId, optFromJson],
        },
        {
          name: "get-job-logs",
          description:
            "Returns console log entries for the specified job in JSON format",
          options: [
            optJobId,
            {
              name: "--type",
              description:
                "A filter that returns only logs of a specified type",
              args: { suggestions: ["TERRAFORM_CONSOLE"] },
              isRepeatable: true,
            },
            {
              name: "--level-greater-than-or-equal-to",
              description:
                "A filter that returns only log entries that match a given severity level or greater",
              args: {
                suggestions: [
                  "TRACE",
                  "DEBUG",
                  "INFO",
                  "WARN",
                  "ERROR",
                  "FATAL",
                ],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            {
              name: "--timestamp-greater-than-or-equal-to",
              description:
                "Time stamp specifying the lower time limit for which logs are returned in a query",
              args: { name: "datetime" },
            },
            {
              name: "--timestamp-less-than-or-equal-to",
              description:
                "Time stamp specifying the upper time limit for which logs are returned in a query",
              args: { name: "datetime" },
            },
            optAll,
            optFromJson,
          ],
        },
        {
          name: "get-job-logs-content",
          description:
            "Returns the raw log file for the specified job in text format",
          options: [optJobId, optFromJson],
        },
        {
          name: "get-job-tf-config",
          description:
            "Returns the Terraform configuration for the specified job in zip format",
          options: [optJobId, optFile, optFromJson],
        },
        {
          name: "get-job-tf-plan",
          description:
            "Returns the output of the specified Terraform plan job in binary or JSON format",
          options: [
            optJobId,
            optFile,
            {
              name: "--tf-plan-format",
              description: "The output format of the Terraform plan",
              args: { suggestions: ["BINARY", "JSON"] },
            },
            optFromJson,
          ],
        },
        {
          name: "get-job-tf-state",
          description: "Returns the Terraform state for the specified job",
          options: [optJobId, optFile, optFromJson],
        },
        {
          name: "list",
          description: "Lists jobs according to the specified filter",
          options: [
            optCompartmentId,
            {
              name: "--stack-id",
              description: "The stack OCID on which to filter",
              args: { name: "stack-id" },
            },
            {
              name: "--id",
              description: "The OCID on which to query for jobs",
              args: { name: "id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns all resources that match the specified lifecycle state",
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
            optDisplayName2,
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified job",
          options: [
            optJobId,
            optDisplayName,
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
          name: "create-plan-job",
          description: "Creates a job",
          options: [
            optStackId2,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optJobOperationDetailsIsProviderUpgradeRequired,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optTerraformAdvancedOptions,
            optFromJson,
          ],
        },
        {
          name: "create-apply-job",
          description: "Creates a job",
          options: [
            optStackId2,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optJobOperationDetailsIsProviderUpgradeRequired,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--execution-plan-job-id",
              description:
                "Specifies the source of the execution plan to apply",
              args: { name: "execution-plan-job-id" },
            },
            {
              name: "--execution-plan-strategy",
              description:
                "The OCID of a plan job, for use when specifying FROM_PLAN_JOB_ID as the executionPlanStrategy",
              args: { name: "execution-plan-strategy" },
              isRequired: true,
            },
            optTerraformAdvancedOptions,
            optFromJson,
          ],
        },
        {
          name: "create-destroy-job",
          description: "Creates a job",
          options: [
            optStackId2,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optJobOperationDetailsIsProviderUpgradeRequired,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--execution-plan-strategy",
              description:
                "Specifies the source of the execution plan to apply",
              args: { name: "execution-plan-strategy" },
              isRequired: true,
            },
            optTerraformAdvancedOptions,
            optFromJson,
          ],
        },
        {
          name: "create-import-tf-state-job",
          description: "Creates a job",
          options: [
            optStackId2,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optJobOperationDetailsIsProviderUpgradeRequired,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--tf-state-file",
              description:
                "Job details that are specific to import Terraform state operations",
              args: { name: "tf-state-file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-detailed-log-content",
          description:
            "Returns the Terraform detailed log content for the specified job in plain text",
          options: [optJobId, optFromJson],
        },
        {
          name: "create-apply-rollback-job",
          description: "Creates a job",
          options: [
            optStackId2,
            optDisplayName,
            optOperation,
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--execution-plan-rollback-strategy",
              description:
                "Specifies the source of the execution plan for rollback to apply",
              args: { name: "execution-plan-rollback-strategy" },
              isRequired: true,
            },
            {
              name: "--execution-plan-rollback-job-id",
              description:
                'The OCID of a plan rollback job, for use when specifying "FROM_PLAN_ROLLBACK_JOB_ID" as',
              args: { name: "execution-plan-rollback-job-id" },
            },
            {
              name: "--target-rollback-job-id",
              description:
                'The OCID of a successful apply job, for use when specifying "AUTO_APPROVED" as',
              args: { name: "target-rollback-job-id" },
            },
            {
              name: "--terraform-advanced-options",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-plan-rollback-job",
          description: "Creates a job",
          options: [
            optStackId2,
            optDisplayName,
            optOperation,
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--target-rollback-job-id",
              description:
                "The OCID of a successful apply job to use for the plan rollback job. required",
              args: { name: "target-rollback-job-id" },
              isRequired: true,
            },
            {
              name: "--terraform-advanced-options",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "job-output-summary",
      description: "Terraform output associated with a job",
      subcommands: [
        {
          name: "list-job-outputs",
          description:
            "Gets the list of outputs associated with the specified job",
          options: [
            optJobId,
            optCompartmentId,
            optLimit,
            optPage,
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
