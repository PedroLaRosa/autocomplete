// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optSecretId: Fig.Option = {
  name: "--secret-id",
  description: "The OCID of the secret",
  args: { name: "secret-id" },
  isRequired: true,
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
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "A brief description of the secret",
  args: { name: "description" },
};
const optEnableAutoGeneration: Fig.Option = {
  name: "--enable-auto-generation",
  description:
    "The value of this flag determines whether or not secret content will be generated automatically",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optReplicationConfig: Fig.Option = {
  name: "--replication-config",
  args: { name: "json" },
};
const optRotationConfig: Fig.Option = {
  name: "--rotation-config",
  args: { name: "json" },
};
const optSecretGenerationContext: Fig.Option = {
  name: "--secret-generation-context",
  args: { name: "json" },
};
const optSecretRules: Fig.Option = {
  name: "--secret-rules",
  description: "A list of rules to control how the secret is used and managed",
  args: { name: "json" },
};
const optSecretVersionNumber: Fig.Option = {
  name: "--secret-version-number",
  description: "The version number of the secret",
  args: { name: "integer" },
  isRequired: true,
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "SCHEDULING_DELETION",
      "PENDING_DELETION",
      "CANCELLING_DELETION",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "vault",
  description: "Vault Secret Management",
  subcommands: [
    {
      name: "secret-version",
      description:
        "The details of the secret version, excluding the contents of the secret",
      subcommands: [
        {
          name: "get",
          description:
            "Gets information about the specified version of a secret",
          options: [optSecretId, optSecretVersionNumber, optFromJson],
        },
        {
          name: "list",
          description: "Lists all secret versions for the specified secret",
          options: [
            optSecretId,
            {
              name: "--limit",
              description:
                'The maximum number of items to return in a paginated "List" call',
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                'The value of the opc-next-page response header from the previous "List" call',
              args: { name: "page" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["VERSION_NUMBER"] },
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
          name: "schedule-deletion",
          description: "Schedules the deletion of the specified secret version",
          options: [
            optSecretId,
            optSecretVersionNumber,
            {
              name: "--time-of-deletion",
              description:
                "An optional property indicating when to delete the secret version, expressed in RFC 3339 timestamp format",
              args: { name: "datetime" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "cancel-deletion",
          description: "Cancels the scheduled deletion of a secret version",
          options: [
            optSecretId,
            optSecretVersionNumber,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "secret",
      description: "The details of the secret",
      subcommands: [
        {
          name: "cancel-secret-deletion",
          description: "Cancels the pending deletion of the specified secret",
          options: [optSecretId, optIfMatch, optFromJson],
        },
        {
          name: "cancel-secret-rotation",
          description: "Cancels the ongoing secret rotation",
          options: [optSecretId, optIfMatch, optFromJson],
        },
        {
          name: "change-compartment",
          description:
            "Moves a secret into a different compartment within the same tenancy",
          options: [
            optSecretId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about the specified secret",
          options: [optSecretId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all secrets in the specified vault and compartment",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The secret name",
              args: { name: "name" },
            },
            {
              name: "--limit",
              description:
                'The maximum number of items to return in a paginated "List" call',
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                'The value of the opc-next-page response header from the previous "List" call',
              args: { name: "page" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED", "NAME"] },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending (ASC) or descending (DESC)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--vault-id",
              description: "The OCID of the vault",
              args: { name: "vault-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "SCHEDULING_DELETION",
                  "PENDING_DELETION",
                  "CANCELLING_DELETION",
                  "FAILED",
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
        {
          name: "rotate",
          description:
            "API to force rotation of an existing secret in Vault and the specified target system",
          options: [
            optSecretId,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED"],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "schedule-secret-deletion",
          description: "Schedules the deletion of the specified secret",
          options: [
            optSecretId,
            {
              name: "--time-of-deletion",
              description:
                "An optional property indicating when to delete the secret version, expressed in RFC 3339 timestamp format",
              args: { name: "datetime" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the properties of a secret",
          options: [
            optSecretId,
            {
              name: "--current-version-number",
              description:
                "Details to update the secret version of the specified secret",
              args: { name: "integer" },
            },
            optDefinedTags,
            optDescription,
            optFreeformTags,
            {
              name: "--metadata",
              description:
                "Additional metadata that you can use to provide context about how to use the secret or during rotation",
              args: { name: "json" },
            },
            { name: "--secret-content", args: { name: "json" } },
            optReplicationConfig,
            optRotationConfig,
            optSecretRules,
            optSecretGenerationContext,
            optEnableAutoGeneration,
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
          name: "create-base64",
          description:
            "Creates a new secret according to the details of the request",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment where you want to create the secret",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--key-id",
              description:
                "The OCID of the master encryption key that is used to encrypt the secret",
              args: { name: "key-id" },
              isRequired: true,
            },
            {
              name: "--secret-name",
              description: "A user-friendly name for the secret",
              args: { name: "secret-name" },
              isRequired: true,
            },
            {
              name: "--vault-id",
              description:
                "The OCID of the vault where you want to create the secret",
              args: { name: "vault-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDescription,
            optFreeformTags,
            {
              name: "--metadata",
              description:
                "Additional metadata that you can use to provide context about how to use the secret during rotation or other",
              args: { name: "json" },
            },
            optReplicationConfig,
            optRotationConfig,
            optSecretRules,
            optSecretGenerationContext,
            optEnableAutoGeneration,
            {
              name: "--secret-content-name",
              description: "Names should be unique within a secret",
              args: { name: "secret-content-name" },
            },
            {
              name: "--secret-content-stage",
              description: "The rotation state of the secret content",
              args: { suggestions: ["CURRENT", "PENDING"] },
            },
            {
              name: "--secret-content-content",
              description: "The base64-encoded content of the secret",
              args: { name: "secret-content-content" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-base64",
          description: "Updates the properties of a secret",
          options: [
            optSecretId,
            {
              name: "--current-version-number",
              description:
                "Details to update the secret version of the specified secret",
              args: { name: "integer" },
            },
            optDefinedTags,
            optDescription,
            optFreeformTags,
            {
              name: "--metadata",
              description:
                "Additional metadata that you can use to provide context about how to use the secret or during rotation",
              args: { name: "json" },
            },
            optReplicationConfig,
            optRotationConfig,
            optSecretRules,
            optSecretGenerationContext,
            optEnableAutoGeneration,
            optIfMatch,
            {
              name: "--secret-content-name",
              description: "Names should be unique within a secret",
              args: { name: "secret-content-name" },
            },
            {
              name: "--secret-content-stage",
              description: "The rotation state of the secret content",
              args: { suggestions: ["CURRENT", "PENDING"] },
            },
            {
              name: "--secret-content-content",
              description: "The base64-encoded content of the secret",
              args: { name: "secret-content-content" },
            },
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
      ],
    },
  ],
};

export default completionSpec;
