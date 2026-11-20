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
  args: { suggestions: ["AVAILABLE", "DELETING", "DELETED"] },
  isRepeatable: true,
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
const optRepositoryId: Fig.Option = {
  name: "--repository-id",
  description: "The OCID of the repository",
  args: { name: "repository-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optImageId: Fig.Option = {
  name: "--image-id",
  description: "The OCID of the container image",
  args: { name: "image-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optArtifactPath: Fig.Option = {
  name: "--artifact-path",
  description: "A user-defined path to describe the location of an artifact",
  args: { name: "artifact-path" },
  isRequired: true,
};
const optArtifactVersion: Fig.Option = {
  name: "--artifact-version",
  description: "The generic artifact version",
  args: { name: "artifact-version" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the given display name exactly",
  args: { name: "display-name" },
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
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optArtifactId: Fig.Option = {
  name: "--artifact-id",
  description: "The OCID of the artifact",
  args: { name: "artifact-id" },
  isRequired: true,
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources that match the given lifecycle state name exactly",
  args: { name: "lifecycle-state" },
};
const optRepositoryId2: Fig.Option = {
  name: "--repository-id",
  description: "The OCID of the container repository",
  args: { name: "repository-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment in which the container repository exists",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentIdInSubtree: Fig.Option = {
  name: "--compartment-id-in-subtree",
  description:
    "When set to true, the hierarchy of compartments is traversed and all compartments and subcompartments in",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optImageSignatureId: Fig.Option = {
  name: "--image-signature-id",
  description: "The OCID of the container image signature",
  args: { name: "image-signature-id" },
  isRequired: true,
};
const optRepositoryId3: Fig.Option = {
  name: "--repository-id",
  description:
    "A filter to return container images only for the specified container repository OCID",
  args: { name: "repository-id" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["AVAILABLE", "DELETED", "DELETING"] },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "artifacts",
  description: "Artifacts and Container Images",
  subcommands: [
    {
      name: "repository",
      description: "The metadata for the artifact repository",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a repository into a different compartment within the same tenancy",
          options: [
            optRepositoryId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the repository should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new repository for storing artifacts",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the repository's compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--repository-type",
              description: "The repository's supported artifact type",
              args: { name: "repository-type" },
              isRequired: true,
            },
            {
              name: "--is-immutable",
              description: "Whether to make the repository immutable",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly display name for the repository",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A short description of the repository",
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
          description: "Deletes the specified repository",
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
          name: "get",
          description: "Gets the specified repository's information",
          options: [optRepositoryId, optFromJson],
        },
        {
          name: "list",
          description: "Lists repositories in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description:
                "A filter to return the resources for the specified OCID",
              args: { name: "id" },
            },
            optDisplayName,
            {
              name: "--is-immutable",
              description:
                "A filter to return resources that match the isImmutable value",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLifecycleState,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the properties of a repository",
          options: [
            optRepositoryId,
            {
              name: "--repository-type",
              description: "The repository's supported artifact type",
              args: { name: "repository-type" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The repository name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The repository description",
              args: { name: "description" },
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
          name: "update-generic-repository",
          description: "Updates the properties of a repository",
          options: [
            optRepositoryId,
            {
              name: "--display-name",
              description: "The repository name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "The repository description",
              args: { name: "description" },
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
          name: "create-generic-repository",
          description: "Creates a new repository for storing artifacts",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the repository's compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-immutable",
              description: "Whether to make the repository immutable",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly display name for the repository",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A short description of the repository",
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
      ],
    },
    {
      name: "generic",
      description: "Generic metadata",
      subcommands: [
        {
          name: "artifact",
          description: "The metadata of the artifact",
          subcommands: [
            {
              name: "delete",
              description: "Deletes an artifact with a specified OCID",
              options: [
                optArtifactId,
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
                "Gets information about an artifact with a specified OCID",
              options: [optArtifactId, optFromJson],
            },
            {
              name: "list",
              description: "Lists artifacts in the specified repository",
              options: [
                optCompartmentId,
                {
                  name: "--repository-id",
                  description:
                    "A filter to return the artifacts only for the specified repository OCID",
                  args: { name: "repository-id" },
                  isRequired: true,
                },
                {
                  name: "--id",
                  description:
                    "A filter to return the resources for the specified OCID",
                  args: { name: "id" },
                },
                optDisplayName,
                {
                  name: "--artifact-path",
                  description:
                    "Filter results by a prefix for the artifactPath and return artifacts that begin with the specified prefix",
                  args: { name: "artifact-path" },
                },
                {
                  name: "--sha256",
                  description:
                    "Filter results by a specified SHA256 digest for the artifact",
                  args: { name: "sha256" },
                },
                optLifecycleState,
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                optAll,
                optPageSize,
                {
                  name: "--artifact-version",
                  description: "The generic artifact version",
                  args: { name: "artifact-version" },
                },
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the artifact with the specified OCID",
              options: [
                optArtifactId,
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
              name: "download-by-path",
              description:
                "Gets the content of an artifact with a specified artifactPath and version",
              options: [
                optRepositoryId,
                optArtifactPath,
                {
                  name: "--file",
                  description:
                    "The name of the file that will receive the response data, or '-' to write to STDOUT",
                  args: { name: "file", template: "filepaths" },
                  isRequired: true,
                },
                optArtifactVersion,
                optFromJson,
              ],
            },
            {
              name: "upload-by-path",
              description: "Uploads an artifact",
              options: [
                optRepositoryId,
                optArtifactPath,
                optIfMatch,
                optArtifactVersion,
                {
                  name: "--content-body",
                  description: "Put generic artifact content file",
                  args: { name: "content-body" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "delete-by-path",
              description:
                "Deletes an artifact with a specified artifactPath and version",
              options: [
                optRepositoryId,
                optArtifactPath,
                optIfMatch,
                optForce2,
                optArtifactVersion,
                optFromJson,
              ],
            },
            {
              name: "get-by-path",
              description:
                "Gets information about an artifact with a specified artifactPath and version",
              options: [
                optRepositoryId,
                optArtifactPath,
                optArtifactVersion,
                optFromJson,
              ],
            },
            {
              name: "update-by-path",
              description:
                "Updates an artifact with a specified artifactPath and version",
              options: [
                optRepositoryId,
                optArtifactPath,
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce,
                optArtifactVersion,
                optFromJson,
              ],
            },
            {
              name: "download",
              description: "Gets the specified artifact's content",
              options: [
                optArtifactId,
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
      ],
    },
    {
      name: "container",
      description: "Container registry",
      subcommands: [
        {
          name: "configuration",
          description: "Container configuration",
          subcommands: [
            {
              name: "get",
              description: "Get container configuration",
              options: [optCompartmentId, optFromJson],
            },
            {
              name: "update",
              description: "Update container configuration",
              options: [
                optCompartmentId,
                {
                  name: "--is-repository-created-on-first-push",
                  description:
                    "Whether to create a new container repository when a container is pushed to a new repository path",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "repository",
          description: "Container repository metadata",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Moves a container repository into a different compartment within the same tenancy",
              options: [
                optRepositoryId2,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment into which to move the resource",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Create a new empty container repository",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment in which to create the resource",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "The container repository name",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--repository-type",
                  description: "The type of container repository",
                  args: { name: "repository-type" },
                },
                {
                  name: "--is-top-level",
                  description: "Whether the repository is top-level",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--upstream-url",
                  description:
                    "The upstream registry URL for a pull-through cache repository",
                  args: { name: "upstream-url" },
                },
                {
                  name: "--upstream-username",
                  description:
                    "The upstream registry username for a pull-through cache repository",
                  args: { name: "upstream-username" },
                },
                {
                  name: "--upstream-secret-id",
                  description:
                    "The OCID of the OCI Vault secret that contains the upstream registry password as base64 encoded string for",
                  args: { name: "upstream-secret-id" },
                },
                {
                  name: "--multi-region-peers",
                  description:
                    "List of peer regions that define the multi-region group",
                  args: { name: "json" },
                },
                {
                  name: "--is-immutable",
                  description: "Whether the repository is immutable",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--is-public",
                  description: "Whether the repository is public",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                { name: "--readme", args: { name: "json" } },
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
              description: "Delete container repository",
              options: [
                optRepositoryId2,
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
              description: "Get container repository",
              options: [optRepositoryId2, optFromJson],
            },
            {
              name: "list",
              description: "List container repositories in a compartment",
              options: [
                optCompartmentId,
                optCompartmentIdInSubtree,
                optRepositoryId3,
                optDisplayName,
                {
                  name: "--repository-type",
                  description:
                    "A filter to return only resources that match the given repository type exactly",
                  args: { name: "repository-type" },
                },
                {
                  name: "--is-top-level",
                  description:
                    "A filter to return resources that match the isTopLevel value",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--is-public",
                  description:
                    "A filter to return resources that match the isPublic value",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optLifecycleState,
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Modify the properties of a container repository",
              options: [
                optRepositoryId2,
                {
                  name: "--is-immutable",
                  description: "Whether the repository is immutable",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--is-public",
                  description: "Whether the repository is public",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--upstream-username",
                  description:
                    "The upstream registry username for a pull-through cache repository",
                  args: { name: "upstream-username" },
                },
                {
                  name: "--upstream-secret-id",
                  description:
                    "The OCID of the OCI Vault secret that contains the upstream registry password as base64 encoded string for",
                  args: { name: "upstream-secret-id" },
                },
                { name: "--readme", args: { name: "json" } },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "image",
          description: "Container image metadata",
          subcommands: [
            {
              name: "delete",
              description: "Delete a container image",
              options: [
                optImageId,
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
              description: "Get container image metadata",
              options: [optImageId, optFromJson],
            },
            {
              name: "restore",
              description: "Restore a container image",
              options: [
                optImageId,
                optIfMatch,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                { name: "--image-version", args: { name: "image-version" } },
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Modify the properties of a container image",
              options: [
                optImageId,
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
              name: "remove-version",
              description: "Remove version from container image",
              options: [
                optImageId,
                optIfMatch,
                {
                  name: "--image-version",
                  args: { name: "image-version" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "list",
              description: "List container images in a compartment",
              options: [
                optCompartmentId,
                optCompartmentIdInSubtree,
                optDisplayName,
                {
                  name: "--image-id",
                  description:
                    "A filter to return a container image summary only for the specified container image OCID",
                  args: { name: "image-id" },
                },
                {
                  name: "--is-versioned",
                  description:
                    "A filter to return container images based on whether there are any associated versions",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optRepositoryId3,
                {
                  name: "--repository-name",
                  description:
                    "A filter to return container images or container image signatures that match the repository name",
                  args: { name: "repository-name" },
                },
                optLifecycleState,
                {
                  name: "--image-digest",
                  description: "The digest of the container image",
                  args: { name: "image-digest" },
                },
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                optAll,
                optPageSize,
                {
                  name: "--image-version",
                  description:
                    "A filter to return container images that match the version",
                  args: { name: "image-version" },
                },
                optFromJson,
              ],
            },
            {
              name: "lookup",
              description: "Get container image metadata by URI",
              options: [
                {
                  name: "--image-uri",
                  description:
                    "The container image URI starting with the namespace",
                  args: { name: "image-uri" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "image-signature",
          description: "Container image signature metadata",
          subcommands: [
            {
              name: "create",
              description: "Upload a signature to an image",
              options: [
                optCompartmentId2,
                optImageId,
                {
                  name: "--kms-key-id",
                  description:
                    "The OCID of the kmsKeyId used to sign the container image",
                  args: { name: "kms-key-id" },
                  isRequired: true,
                },
                {
                  name: "--kms-key-version-id",
                  description:
                    "The OCID of the kmsKeyVersionId used to sign the container image",
                  args: { name: "kms-key-version-id" },
                  isRequired: true,
                },
                {
                  name: "--message",
                  description:
                    "The base64 encoded signature payload that was signed",
                  args: { name: "message" },
                  isRequired: true,
                },
                {
                  name: "--signature",
                  description:
                    "The signature of the message field using the kmsKeyId, the kmsKeyVersionId, and the signingAlgorithm",
                  args: { name: "signature" },
                  isRequired: true,
                },
                {
                  name: "--signing-algorithm",
                  description: "The algorithm to be used for signing",
                  args: {
                    suggestions: [
                      "SHA_224_RSA_PKCS_PSS",
                      "SHA_256_RSA_PKCS_PSS",
                      "SHA_384_RSA_PKCS_PSS",
                      "SHA_512_RSA_PKCS_PSS",
                    ],
                  },
                  isRequired: true,
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Delete a container image signature",
              options: [
                optImageSignatureId,
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
              description: "Get container image signature metadata",
              options: [optImageSignatureId, optFromJson],
            },
            {
              name: "update",
              description:
                "Modify the properties of a container image signature",
              options: [
                optImageSignatureId,
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
              description: "List container image signatures in an image",
              options: [
                optCompartmentId,
                optCompartmentIdInSubtree,
                {
                  name: "--image-id",
                  description:
                    "A filter to return a container image summary only for the specified container image OCID",
                  args: { name: "image-id" },
                },
                optRepositoryId3,
                {
                  name: "--repository-name",
                  description:
                    "A filter to return container images or container image signatures that match the repository name",
                  args: { name: "repository-name" },
                },
                {
                  name: "--image-digest",
                  description: "The digest of the container image",
                  args: { name: "image-digest" },
                },
                optDisplayName,
                {
                  name: "--kms-key-id",
                  description:
                    "The OCID of the kmsKeyVersionId used to sign the container image",
                  args: { name: "kms-key-id" },
                },
                {
                  name: "--kms-key-version-id",
                  description:
                    "The OCID of the kmsKeyVersionId used to sign the container image",
                  args: { name: "kms-key-version-id" },
                },
                {
                  name: "--signing-algorithm",
                  description: "The algorithm to be used for signing",
                  args: {
                    suggestions: [
                      "SHA_224_RSA_PKCS_PSS",
                      "SHA_256_RSA_PKCS_PSS",
                      "SHA_384_RSA_PKCS_PSS",
                      "SHA_512_RSA_PKCS_PSS",
                    ],
                  },
                },
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "sign-upload",
              description:
                "Sign a container image metadata and upload the signature",
              options: [
                {
                  name: "--kms-key-id",
                  description:
                    "The OCID of the kmsKeyId used to sign the container image",
                  args: { name: "kms-key-id" },
                  isRequired: true,
                },
                {
                  name: "--kms-key-version-id",
                  description:
                    "The OCID of the kmsKeyVersionId used to sign the container image",
                  args: { name: "kms-key-version-id" },
                  isRequired: true,
                },
                {
                  name: "--signing-algorithm",
                  description: "The algorithm to be used for signing",
                  args: {
                    suggestions: [
                      "SHA_224_RSA_PKCS_PSS",
                      "SHA_256_RSA_PKCS_PSS",
                      "SHA_384_RSA_PKCS_PSS",
                      "SHA_512_RSA_PKCS_PSS",
                    ],
                  },
                  isRequired: true,
                },
                optCompartmentId2,
                optImageId,
                {
                  name: "--description",
                  description:
                    "The optional text of your choice to describe the image",
                  args: { name: "description" },
                },
                {
                  name: "--metadata",
                  description:
                    "The optional information of your choice about the image, in a valid JSON format",
                  args: { name: "metadata" },
                },
                optFromJson,
              ],
            },
            {
              name: "get-verify",
              description:
                "Fetch a container image signature metadata and verity the signature",
              options: [
                optCompartmentId2,
                {
                  name: "--compartment-id-in-subtree",
                  description:
                    "When set to true, the hierarchy of compartments is traversed",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--repo-name",
                  description:
                    "The repository name in which the container image exists eg) busybox",
                  args: { name: "repo-name" },
                  isRequired: true,
                },
                {
                  name: "--image-digest",
                  description: "The digest of the container image",
                  args: { name: "image-digest" },
                  isRequired: true,
                },
                {
                  name: "--trusted-keys",
                  description:
                    "List of OCIDs of the kmsKeyId used to sign the container image",
                  args: { name: "trusted-keys" },
                  isRequired: true,
                  isRepeatable: true,
                },
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
