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
      "NEEDS_ATTENTION",
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
const optTraceConfig: Fig.Option = {
  name: "--trace-config",
  args: { name: "json" },
};
const optConfig: Fig.Option = {
  name: "--config",
  description: "Function configuration",
  args: { name: "json" },
};
const optDetachedModeTimeoutInSeconds: Fig.Option = {
  name: "--detached-mode-timeout-in-seconds",
  description: "Timeout for detached function invocations",
  args: { name: "integer" },
};
const optTimeoutInSeconds: Fig.Option = {
  name: "--timeout-in-seconds",
  description: "Timeout for executions of the function",
  args: { name: "integer" },
};
const optFailureDestination: Fig.Option = {
  name: "--failure-destination",
  args: { name: "json" },
};
const optSuccessDestination: Fig.Option = {
  name: "--success-destination",
  args: { name: "json" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optProvisionedConcurrencyConfig: Fig.Option = {
  name: "--provisioned-concurrency-config",
  args: { name: "json" },
};
const optApplicationId: Fig.Option = {
  name: "--application-id",
  description: "The OCID of the application this function belongs to",
  args: { name: "application-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "The display name of the function",
  args: { name: "display-name" },
  isRequired: true,
};
const optMemoryInMbs: Fig.Option = {
  name: "--memory-in-mbs",
  description: "Maximum usable memory for the function (MiB)",
  args: { name: "integer" },
  isRequired: true,
};
const optFunctionId: Fig.Option = {
  name: "--function-id",
  description: "The OCID of this function",
  args: { name: "function-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optMemoryInMbs2: Fig.Option = {
  name: "--memory-in-mbs",
  description: "Maximum usable memory for the function (MiB)",
  args: { name: "integer" },
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
    "The pagination token for a list query returned by a previous operation",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "Specifies sort order",
  args: { suggestions: ["ASC", "DESC"] },
};
const optSourceDetails: Fig.Option = {
  name: "--source-details",
  args: { name: "json" },
  isRequired: true,
};
const optSourceDetails2: Fig.Option = {
  name: "--source-details",
  args: { name: "json" },
};
const optProvisionedConcurrency: Fig.Option = {
  name: "--provisioned-concurrency",
  description: "Provisioned concurrency configuration for this function",
  args: { name: "json" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optHandler: Fig.Option = {
  name: "--handler",
  description:
    "The function handler that is executed when the function is invoked",
  args: { name: "handler" },
};
const optApplicationId2: Fig.Option = {
  name: "--application-id",
  description: "The OCID of this application",
  args: { name: "application-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optFunctionsRuntimeName: Fig.Option = {
  name: "--functions-runtime-name",
  description:
    "The name of the FunctionsRuntime this function is associated with",
  args: { name: "functions-runtime-name" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timestamp"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment to which this resource belongs",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optObjectVersionId: Fig.Option = {
  name: "--object-version-id",
  description: "VersionId used to identify a particular version of the object",
  args: { name: "object-version-id" },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "name"] },
};
const completionSpec: Fig.Spec = {
  name: "fn",
  description: "Functions Service",
  subcommands: [
    {
      name: "work-request-management",
      description: "CLI for the Functions service",
      subcommands: [
        {
          name: "work-request-error",
          description:
            "An error encountered while performing an operation that is tracked by a work request",
          subcommands: [
            {
              name: "list",
              description: "Lists the errors for a work request",
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
          name: "work-request-log-entry",
          description:
            "A log message from performing an operation that is tracked by a work request",
          subcommands: [
            {
              name: "list",
              description: "Lists the logs for a work request",
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
          description: "An asynchronous work request",
          subcommands: [
            {
              name: "cancel",
              description: "Cancels a work request",
              options: [optWorkRequestId, optIfMatch, optForce2, optFromJson],
            },
            {
              name: "get",
              description: "Gets the details of a work request",
              options: [optWorkRequestId, optFromJson],
            },
            {
              name: "list",
              description: "Lists the work requests in a compartment",
              options: [
                optCompartmentId,
                {
                  name: "--work-request-id",
                  description: "The OCID of the asynchronous work request",
                  args: { name: "work-request-id" },
                },
                {
                  name: "--status",
                  description:
                    "A filter to return only the resources that match the given lifecycle state",
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
                {
                  name: "--resource-id",
                  description:
                    "The OCID of the resource affected by the work request",
                  args: { name: "resource-id" },
                },
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
    {
      name: "application",
      description:
        "An application contains functions and defined attributes shared between those functions",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an application into a different compartment within the same tenancy",
          options: [
            optApplicationId2,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
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
          description: "Creates a new application",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the application within",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the application",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--subnet-ids",
              description:
                "The OCIDs of the subnets in which to run functions in the application",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--config",
              description: "Application configuration",
              args: { name: "json" },
            },
            {
              name: "--shape",
              description:
                "Valid values are GENERIC_X86, GENERIC_ARM and GENERIC_X86_ARM",
              args: {
                suggestions: ["GENERIC_X86", "GENERIC_ARM", "GENERIC_X86_ARM"],
              },
            },
            {
              name: "--network-security-group-ids",
              description:
                "The OCIDs of the Network Security Groups to add the application to",
              args: { name: "json" },
            },
            {
              name: "--syslog-url",
              description: "A syslog URL to which to send all function logs",
              args: { name: "syslog-url" },
            },
            optTraceConfig,
            { name: "--logging", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            { name: "--image-policy-config", args: { name: "json" } },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
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
          description: "Deletes an application",
          options: [
            optApplicationId2,
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
          description: "Retrieves an application",
          options: [optApplicationId2, optFromJson],
        },
        {
          name: "list",
          description: "Lists applications for a compartment",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only applications that match the lifecycle state in this parameter",
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
                "A filter to return only applications with display names that match the display name string",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description:
                "A filter to return only applications with the specified OCID",
              args: { name: "id" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Specifies the attribute with which to sort the rules",
              args: { suggestions: ["timeCreated", "id", "displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Modifies an application",
          options: [
            optApplicationId2,
            {
              name: "--config",
              description: "Application configuration",
              args: { name: "json" },
            },
            {
              name: "--network-security-group-ids",
              description:
                "The OCIDs of the Network Security Groups to add the application to",
              args: { name: "json" },
            },
            {
              name: "--syslog-url",
              description: "A syslog URL to which to send all function logs",
              args: { name: "syslog-url" },
            },
            optTraceConfig,
            { name: "--logging", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            { name: "--image-policy-config", args: { name: "json" } },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
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
      name: "function",
      description:
        "A function resource defines the code (Docker image) and configuration for a specific function",
      subcommands: [
        {
          name: "create",
          description: "Creates a new function",
          subcommands: [
            {
              name: "archive-function",
              description:
                "Commands for functions created from archive sources",
              subcommands: [
                {
                  name: "object-storage",
                  description:
                    "Commands for functions using an archive stored in Object Storage",
                  subcommands: [
                    {
                      name: "fn-update-runtime-config",
                      description: "Creates a new function",
                      options: [
                        optDisplayName,
                        optApplicationId,
                        optMemoryInMbs,
                        optConfig,
                        optTimeoutInSeconds,
                        optDetachedModeTimeoutInSeconds,
                        optFailureDestination,
                        optSuccessDestination,
                        optTraceConfig,
                        optFreeformTags,
                        optDefinedTags,
                        optWaitForState,
                        optMaxWaitSeconds,
                        optWaitIntervalSeconds,
                        {
                          name: "--bucket-name",
                          description: "The name of the Object Storage bucket",
                          args: { name: "bucket-name" },
                          isRequired: true,
                        },
                        {
                          name: "--namespace",
                          description: "The Object Storage namespace",
                          args: { name: "namespace" },
                          isRequired: true,
                        },
                        {
                          name: "--object-name",
                          description: "The name of the Object Storage object",
                          args: { name: "object-name" },
                          isRequired: true,
                        },
                        optObjectVersionId,
                        optFunctionsRuntimeName,
                        optHandler,
                        optProvisionedConcurrency,
                        optFromJson,
                      ],
                    },
                    {
                      name: "manual-runtime-config",
                      description: "Creates a new function",
                      options: [
                        optDisplayName,
                        optApplicationId,
                        optMemoryInMbs,
                        optConfig,
                        optTimeoutInSeconds,
                        optDetachedModeTimeoutInSeconds,
                        optFailureDestination,
                        optSuccessDestination,
                        optTraceConfig,
                        optFreeformTags,
                        optDefinedTags,
                        optWaitForState,
                        optMaxWaitSeconds,
                        optWaitIntervalSeconds,
                        {
                          name: "--bucket-name",
                          description: "The name of the Object Storage bucket",
                          args: { name: "bucket-name" },
                          isRequired: true,
                        },
                        {
                          name: "--namespace",
                          description: "The Object Storage namespace",
                          args: { name: "namespace" },
                          isRequired: true,
                        },
                        {
                          name: "--object-name",
                          description: "The name of the Object Storage object",
                          args: { name: "object-name" },
                          isRequired: true,
                        },
                        optObjectVersionId,
                        optFunctionsRuntimeName,
                        {
                          name: "--functions-runtime-version-id",
                          description:
                            "The OCID of the FunctionsRuntime version used when runtime config type is MANUAL",
                          args: { name: "functions-runtime-version-id" },
                          isRequired: true,
                        },
                        optHandler,
                        optProvisionedConcurrency,
                        optFromJson,
                      ],
                    },
                  ],
                },
                {
                  name: "direct-archive",
                  description:
                    "Commands for functions using a directly provided archive file",
                  subcommands: [
                    {
                      name: "fn-update-runtime-config",
                      description: "Creates a new function",
                      options: [
                        optDisplayName,
                        optApplicationId,
                        optMemoryInMbs,
                        optConfig,
                        optTimeoutInSeconds,
                        optDetachedModeTimeoutInSeconds,
                        optFailureDestination,
                        optSuccessDestination,
                        optTraceConfig,
                        optFreeformTags,
                        optDefinedTags,
                        optWaitForState,
                        optMaxWaitSeconds,
                        optWaitIntervalSeconds,
                        {
                          name: "--archive-file",
                          description:
                            "Path to the .zip or .jar archive file of the function code",
                          args: { name: "archive-file", template: "filepaths" },
                          isRequired: true,
                        },
                        optFunctionsRuntimeName,
                        optHandler,
                        optProvisionedConcurrency,
                        optFromJson,
                      ],
                    },
                    {
                      name: "manual-runtime-config",
                      description: "Creates a new function",
                      options: [
                        optDisplayName,
                        optApplicationId,
                        optMemoryInMbs,
                        optConfig,
                        optTimeoutInSeconds,
                        optDetachedModeTimeoutInSeconds,
                        optFailureDestination,
                        optSuccessDestination,
                        optTraceConfig,
                        optFreeformTags,
                        optDefinedTags,
                        optWaitForState,
                        optMaxWaitSeconds,
                        optWaitIntervalSeconds,
                        {
                          name: "--archive-file",
                          description:
                            "Path to the .zip or .jar archive file of the function code",
                          args: { name: "archive-file", template: "filepaths" },
                          isRequired: true,
                        },
                        optFunctionsRuntimeName,
                        {
                          name: "--functions-runtime-version-id",
                          description:
                            "The OCID of the FunctionsRuntime version used when runtime config type is MANUAL",
                          args: { name: "functions-runtime-version-id" },
                          isRequired: true,
                        },
                        optHandler,
                        optProvisionedConcurrency,
                        optFromJson,
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "container-function",
              description: "Creates a new function",
              options: [
                optDisplayName,
                optApplicationId,
                optMemoryInMbs,
                optConfig,
                optTimeoutInSeconds,
                optDetachedModeTimeoutInSeconds,
                optFailureDestination,
                optSuccessDestination,
                optTraceConfig,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                {
                  name: "--image",
                  description:
                    "The full path to the Docker image for a container-image function",
                  args: { name: "image" },
                  isRequired: true,
                },
                {
                  name: "--image-digest",
                  description: "An optional digest for the Docker image",
                  args: { name: "image-digest" },
                },
                optProvisionedConcurrency,
                optFromJson,
              ],
            },
            {
              name: "pbf-function",
              description: "Creates a new function",
              options: [
                optDisplayName,
                optApplicationId,
                optMemoryInMbs,
                optConfig,
                optTimeoutInSeconds,
                optDetachedModeTimeoutInSeconds,
                optFailureDestination,
                optSuccessDestination,
                optTraceConfig,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                {
                  name: "--pbf-listing-id",
                  description: "The OCID of the pre-built function listing",
                  args: { name: "pbf-listing-id" },
                  isRequired: true,
                },
                optProvisionedConcurrency,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "create-function-create-pre-built-function-source-details",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optMemoryInMbs,
            {
              name: "--source-details-pbf-listing-id",
              description:
                "The OCID of the PbfListing this function is sourced from",
              args: { name: "source-details-pbf-listing-id" },
              isRequired: true,
            },
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optSuccessDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-create-archive-function-source-details",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optMemoryInMbs,
            {
              name: "--source-details-archive-source-details",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--source-details-runtime-config",
              args: { name: "json" },
              isRequired: true,
            },
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optSuccessDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--source-details-handler",
              description:
                "The function handler that is executed when the function is invoked",
              args: { name: "source-details-handler" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-create-container-image-function-source-details",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optMemoryInMbs,
            {
              name: "--source-details-image",
              description:
                "The qualified name of the Docker image to use in the function, including the image tag",
              args: { name: "source-details-image" },
              isRequired: true,
            },
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optSuccessDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--source-details-image-digest",
              description:
                "The image digest for the version of the image that will be pulled when invoking this function",
              args: { name: "source-details-image-digest" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-none-provisioned-concurrency-config",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optSourceDetails,
            optMemoryInMbs,
            optConfig,
            optTimeoutInSeconds,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optSuccessDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-constant-provisioned-concurrency-config",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optSourceDetails,
            optMemoryInMbs,
            {
              name: "--provisioned-concurrency-config-count",
              description:
                "Configuration specifying a constant amount of provisioned concurrency",
              args: { name: "integer" },
              isRequired: true,
            },
            optConfig,
            optTimeoutInSeconds,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optSuccessDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-stream-failure-destination-details",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optSourceDetails,
            optMemoryInMbs,
            {
              name: "--failure-destination-stream-id",
              description: "The OCID of the stream",
              args: { name: "failure-destination-stream-id" },
              isRequired: true,
            },
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optSuccessDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-queue-failure-destination-details",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optSourceDetails,
            optMemoryInMbs,
            {
              name: "--failure-destination-queue-id",
              description: "The OCID of the queue",
              args: { name: "failure-destination-queue-id" },
              isRequired: true,
            },
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optSuccessDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--failure-destination-channel-id",
              description: "The ID of the channel in the queue",
              args: { name: "failure-destination-channel-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-notification-failure-destination-details",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optSourceDetails,
            optMemoryInMbs,
            {
              name: "--failure-destination-topic-id",
              description: "The OCID of the topic",
              args: { name: "failure-destination-topic-id" },
              isRequired: true,
            },
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optSuccessDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-none-failure-destination-details",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optSourceDetails,
            optMemoryInMbs,
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optSuccessDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-stream-success-destination-details",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optSourceDetails,
            optMemoryInMbs,
            {
              name: "--success-destination-stream-id",
              description: "The OCID of the stream",
              args: { name: "success-destination-stream-id" },
              isRequired: true,
            },
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-notification-success-destination-details",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optSourceDetails,
            optMemoryInMbs,
            {
              name: "--success-destination-topic-id",
              description: "The OCID of the topic",
              args: { name: "success-destination-topic-id" },
              isRequired: true,
            },
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-queue-success-destination-details",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optSourceDetails,
            optMemoryInMbs,
            {
              name: "--success-destination-queue-id",
              description: "The OCID of the queue",
              args: { name: "success-destination-queue-id" },
              isRequired: true,
            },
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--success-destination-channel-id",
              description: "The ID of the channel in the queue",
              args: { name: "success-destination-channel-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-function-none-success-destination-details",
          description: "Creates a new function",
          options: [
            optDisplayName,
            optApplicationId,
            optSourceDetails,
            optMemoryInMbs,
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optTraceConfig,
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
          description: "Deletes a function",
          options: [
            optFunctionId,
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
          description: "Retrieves a function",
          options: [optFunctionId, optFromJson],
        },
        {
          name: "list",
          description: "Lists functions for an application",
          options: [
            {
              name: "--application-id",
              description:
                "The OCID of the application to which this function belongs",
              args: { name: "application-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only functions that match the lifecycle state in this parameter",
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
                "A filter to return only functions with display names that match the display name string",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description:
                "A filter to return only functions with the specified OCID",
              args: { name: "id" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description:
                "Specifies the attribute with which to sort the rules",
              args: { suggestions: ["timeCreated", "id", "displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Modifies a function",
          subcommands: [
            {
              name: "archive-function",
              description: "Modifies a function",
              options: [
                optFunctionId,
                optMemoryInMbs2,
                optConfig,
                optTimeoutInSeconds,
                optDetachedModeTimeoutInSeconds,
                optFailureDestination,
                optSuccessDestination,
                optTraceConfig,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                {
                  name: "--bucket-name",
                  description: "The name of the Object Storage bucket",
                  args: { name: "bucket-name" },
                },
                {
                  name: "--namespace",
                  description: "The Object Storage namespace",
                  args: { name: "namespace" },
                },
                {
                  name: "--object-name",
                  description: "The name of the Object Storage object",
                  args: { name: "object-name" },
                },
                optObjectVersionId,
                {
                  name: "--functions-runtime-name",
                  description:
                    "The name of the FunctionsRuntime this function is associated with",
                  args: { name: "functions-runtime-name" },
                },
                {
                  name: "--functions-runtime-version-id",
                  description:
                    "The OCID of the FunctionsRuntime version used when runtime config type is MANUAL",
                  args: { name: "functions-runtime-version-id" },
                },
                {
                  name: "--archive-file",
                  description:
                    "Path to the .zip or .jar archive file of the function code",
                  args: { name: "archive-file", template: "filepaths" },
                },
                {
                  name: "--runtime-config",
                  description:
                    "The runtime configuration type to use for this archive function",
                  args: { suggestions: ["FUNCTION_UPDATE", "MANUAL"] },
                },
                optHandler,
                optProvisionedConcurrency,
                optFromJson,
              ],
            },
            {
              name: "container-function",
              description: "Modifies a function",
              options: [
                optFunctionId,
                optMemoryInMbs2,
                optConfig,
                optTimeoutInSeconds,
                optDetachedModeTimeoutInSeconds,
                optFailureDestination,
                optSuccessDestination,
                optTraceConfig,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                {
                  name: "--image",
                  description:
                    "The full path to the Docker image for a container-image function",
                  args: { name: "image" },
                },
                {
                  name: "--image-digest",
                  description: "An optional digest for the Docker image",
                  args: { name: "image-digest" },
                },
                optProvisionedConcurrency,
                optFromJson,
              ],
            },
            {
              name: "pbf-function",
              description: "Modifies a function",
              options: [
                optFunctionId,
                optMemoryInMbs2,
                optConfig,
                optTimeoutInSeconds,
                optDetachedModeTimeoutInSeconds,
                optFailureDestination,
                optSuccessDestination,
                optTraceConfig,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optProvisionedConcurrency,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "update-function-none-provisioned-concurrency-config",
          description: "Modifies a function",
          options: [
            optFunctionId,
            optMemoryInMbs2,
            optConfig,
            optTimeoutInSeconds,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optSuccessDestination,
            optTraceConfig,
            optSourceDetails2,
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
          name: "update-function-constant-provisioned-concurrency-config",
          description: "Modifies a function",
          options: [
            optFunctionId,
            {
              name: "--provisioned-concurrency-config-count",
              description:
                "Configuration specifying a constant amount of provisioned concurrency",
              args: { name: "integer" },
              isRequired: true,
            },
            optMemoryInMbs2,
            optConfig,
            optTimeoutInSeconds,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optSuccessDestination,
            optTraceConfig,
            optSourceDetails2,
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
          name: "update-function-stream-failure-destination-details",
          description: "Modifies a function",
          options: [
            optFunctionId,
            {
              name: "--failure-destination-stream-id",
              description: "The OCID of the stream",
              args: { name: "failure-destination-stream-id" },
              isRequired: true,
            },
            optMemoryInMbs2,
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optSuccessDestination,
            optTraceConfig,
            optSourceDetails2,
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
          name: "update-function-queue-failure-destination-details",
          description: "Modifies a function",
          options: [
            optFunctionId,
            {
              name: "--failure-destination-queue-id",
              description: "The OCID of the queue",
              args: { name: "failure-destination-queue-id" },
              isRequired: true,
            },
            optMemoryInMbs2,
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optSuccessDestination,
            optTraceConfig,
            optSourceDetails2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--failure-destination-channel-id",
              description: "The ID of the channel in the queue",
              args: { name: "failure-destination-channel-id" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-function-notification-failure-destination-details",
          description: "Modifies a function",
          options: [
            optFunctionId,
            {
              name: "--failure-destination-topic-id",
              description: "The OCID of the topic",
              args: { name: "failure-destination-topic-id" },
              isRequired: true,
            },
            optMemoryInMbs2,
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optSuccessDestination,
            optTraceConfig,
            optSourceDetails2,
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
          name: "update-function-none-failure-destination-details",
          description: "Modifies a function",
          options: [
            optFunctionId,
            optMemoryInMbs2,
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optSuccessDestination,
            optTraceConfig,
            optSourceDetails2,
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
          name: "update-function-stream-success-destination-details",
          description: "Modifies a function",
          options: [
            optFunctionId,
            {
              name: "--success-destination-stream-id",
              description: "The OCID of the stream",
              args: { name: "success-destination-stream-id" },
              isRequired: true,
            },
            optMemoryInMbs2,
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optTraceConfig,
            optSourceDetails2,
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
          name: "update-function-notification-success-destination-details",
          description: "Modifies a function",
          options: [
            optFunctionId,
            {
              name: "--success-destination-topic-id",
              description: "The OCID of the topic",
              args: { name: "success-destination-topic-id" },
              isRequired: true,
            },
            optMemoryInMbs2,
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optTraceConfig,
            optSourceDetails2,
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
          name: "update-function-queue-success-destination-details",
          description: "Modifies a function",
          options: [
            optFunctionId,
            {
              name: "--success-destination-queue-id",
              description: "The OCID of the queue",
              args: { name: "success-destination-queue-id" },
              isRequired: true,
            },
            optMemoryInMbs2,
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optTraceConfig,
            optSourceDetails2,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--success-destination-channel-id",
              description: "The ID of the channel in the queue",
              args: { name: "success-destination-channel-id" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-function-none-success-destination-details",
          description: "Modifies a function",
          options: [
            optFunctionId,
            optMemoryInMbs2,
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optTraceConfig,
            optSourceDetails2,
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
          name: "update-function-update-container-image-function-source-details",
          description: "Modifies a function",
          options: [
            optFunctionId,
            optMemoryInMbs2,
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optSuccessDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--source-details-image",
              description:
                "The qualified name of the Docker image to use in the function, including the image tag",
              args: { name: "source-details-image" },
            },
            {
              name: "--source-details-image-digest",
              description:
                "The image digest for the version of the image that will be pulled when invoking this function",
              args: { name: "source-details-image-digest" },
            },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-function-update-archive-function-source-details",
          description: "Modifies a function",
          options: [
            optFunctionId,
            optMemoryInMbs2,
            optConfig,
            optTimeoutInSeconds,
            optProvisionedConcurrencyConfig,
            optDetachedModeTimeoutInSeconds,
            optFailureDestination,
            optSuccessDestination,
            optTraceConfig,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--source-details-archive-source-details",
              args: { name: "json" },
            },
            {
              name: "--source-details-handler",
              description:
                "The function handler that is executed when the function is invoked",
              args: { name: "source-details-handler" },
            },
            { name: "--source-details-runtime-config", args: { name: "json" } },
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "invoke",
          description: "Invokes a function",
          options: [
            optFunctionId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--fn-intent",
              description:
                "An optional intent header that indicates to the FDK the way the event should be interpreted",
              args: { suggestions: ["httprequest", "cloudevent"] },
            },
            {
              name: "--fn-invoke-type",
              description:
                "Indicates whether Oracle Functions should execute the request and return the result",
              args: { suggestions: ["detached", "sync"] },
            },
            {
              name: "--is-dry-run",
              description:
                'Indicates that the request is a dry run, if set to "true"',
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--endpoint-cache-ttl",
              description:
                "The number of seconds to cache the resolved function invoke endpoint",
              args: { name: "integer" },
            },
            {
              name: "--no-endpoint-cache",
              description:
                "Disable the local function invoke endpoint cache for this invocation",
            },
            {
              name: "--body",
              description: "The body of the function invocation",
              args: { name: "body" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "pbf-listing",
      description:
        "PbfListing resources provide details about the available PBFs for consumption by the user",
      subcommands: [
        {
          name: "get",
          description: "Fetches a Pre-built Function(PBF) Listing",
          options: [
            {
              name: "--pbf-listing-id",
              description: "Unique PbfListing identifier",
              args: { name: "pbf-listing-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Fetches a wrapped list of all Pre-built Function(PBF) Listings",
          options: [
            {
              name: "--pbf-listing-id",
              description: "Unique PbfListing identifier",
              args: { name: "pbf-listing-id" },
            },
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire PBF name given",
              args: { name: "name" },
            },
            {
              name: "--name-contains",
              description:
                "A filter to return only resources that contain the supplied filter text in the PBF name given",
              args: { name: "name-contains" },
            },
            {
              name: "--name-starts-with",
              description:
                "A filter to return only resources that start with the supplied filter text in the PBF name given",
              args: { name: "name-starts-with" },
            },
            {
              name: "--trigger",
              description:
                "A filter to return only resources that match the service trigger sources of a PBF",
              args: { name: "trigger" },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: { suggestions: ["ACTIVE", "INACTIVE", "DELETED"] },
            },
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
      name: "trigger",
      description: "Results of a Trigger search",
      subcommands: [
        {
          name: "list",
          description: "Returns a list of Triggers",
          options: [
            {
              name: "--name",
              description:
                "A filter to return only resources that match the service trigger source of a PBF",
              args: { name: "name" },
            },
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
      name: "pbf-listing-version",
      description: "This represents a version of a PbfListing",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a PbfListingVersion by identifier for a PbfListing",
          options: [
            {
              name: "--pbf-listing-version-id",
              description: "Unique PbfListingVersion identifier",
              args: { name: "pbf-listing-version-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Fetches a wrapped list of all Pre-built Function(PBF) Listing versions",
          options: [
            {
              name: "--pbf-listing-id",
              description: "Unique PbfListing identifier",
              args: { name: "pbf-listing-id" },
              isRequired: true,
            },
            {
              name: "--pbf-listing-version-id",
              description: "Unique PbfListingVersion identifier",
              args: { name: "pbf-listing-version-id" },
            },
            {
              name: "--name",
              description:
                "Matches a PbfListingVersion based on a provided semantic version name for a PbfListingVersion",
              args: { name: "name" },
            },
            {
              name: "--is-current-version",
              description:
                "Matches the current version (the most recently added version with an Active lifecycleState) associated with",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: { suggestions: ["ACTIVE", "INACTIVE", "DELETED"] },
            },
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
      name: "runtime",
      description:
        "FunctionsRuntime resources provide details about the available runtimes for consumption by the user",
      subcommands: [
        {
          name: "get",
          description: "Fetches a FunctionsRuntime by ID",
          options: [
            {
              name: "--functions-runtime-id",
              description: "Unique FunctionsRuntime identifier",
              args: { name: "functions-runtime-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Fetches a wrapped list of all FunctionsRuntimes",
          options: [
            {
              name: "--functions-runtime-id",
              description: "Unique FunctionsRuntime identifier",
              args: { name: "functions-runtime-id" },
            },
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire FunctionsRuntime name given",
              args: { name: "name" },
            },
            {
              name: "--name-contains",
              description:
                "A filter to return only resources that contain the supplied filter text in the FunctionsRuntime name given",
              args: { name: "name-contains" },
            },
            {
              name: "--name-starts-with",
              description:
                "A filter to return only resources that start with the supplied filter text in the FunctionsRuntime name given",
              args: { name: "name-starts-with" },
            },
            {
              name: "--os",
              description:
                "A filter to return only resources that match the entire os name given",
              args: { name: "os" },
            },
            {
              name: "--language",
              description:
                "A filter to return only resources that match the entire language name given",
              args: { name: "language" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources where their lifecycleState matches the given lifecycleState",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
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
                  "name",
                  "timeDeprecated",
                  "timeDecommissioned",
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
      name: "runtime-version",
      description: "This represents a version of a FunctionsRuntime",
      subcommands: [
        {
          name: "get",
          description: "Fetches a FunctionsRuntimeVersion by ID",
          options: [
            {
              name: "--functions-runtime-version-id",
              description: "Unique FunctionsRuntimeVersion identifier",
              args: { name: "functions-runtime-version-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Fetches a wrapped list of all FunctionsRuntimeVersions",
          options: [
            {
              name: "--functions-runtime-id",
              description: "Unique FunctionsRuntime identifier",
              args: { name: "functions-runtime-id" },
            },
            {
              name: "--functions-runtime-name",
              description:
                "A filter to return only resources that match the entire FunctionsRuntime name given",
              args: { name: "functions-runtime-name" },
            },
            {
              name: "--functions-runtime-version-id",
              description: "Unique FunctionsRuntimeVersion identifier",
              args: { name: "functions-runtime-version-id" },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire FunctionsRuntimeVersion name given",
              args: { name: "display-name" },
            },
            {
              name: "--os-version",
              description:
                "A filter to return only resources that match the entire osVersion name given",
              args: { name: "os-version" },
            },
            {
              name: "--language-version",
              description:
                "A filter to return only resources that match the entire languageVersion name given",
              args: { name: "language-version" },
            },
            {
              name: "--is-current-version",
              description:
                "Matches the current version associated with a FunctionsRuntime",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
            },
            optSortBy2,
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
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a work request",
          options: [optWorkRequestId, optIfMatch, optForce2, optFromJson],
        },
        {
          name: "get",
          description: "Gets the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "The OCID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only the resources that match the given lifecycle state",
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
            {
              name: "--resource-id",
              description:
                "The OCID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
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
    {
      name: "work-request-error",
      description:
        "An error encountered while performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "Lists the errors for a work request",
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
      name: "work-request-log-entry",
      description:
        "A log message from performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "Lists the logs for a work request",
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
