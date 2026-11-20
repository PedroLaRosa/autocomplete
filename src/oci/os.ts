// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optNamespaceName: Fig.Option = {
  name: ["--namespace-name", "--namespace", "-ns"],
  description: "The Object Storage namespace used for the request",
  args: { name: "namespace-name" },
  isRequired: true,
};
const optBucketName: Fig.Option = {
  name: ["--bucket-name", "-bn"],
  description: "The name of the bucket",
  args: { name: "bucket-name" },
  isRequired: true,
};
const optBucketName2: Fig.Option = {
  name: ["--bucket-name", "--bucket", "-bn"],
  description: "The name of the bucket",
  args: { name: "bucket-name" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optNamespace: Fig.Option = {
  name: ["--namespace", "--namespace-name", "-ns"],
  description: "The top-level namespace used for the request",
  args: { name: "namespace" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description:
    "The entity tag (ETag) to match with the ETag of an existing resource",
  args: { name: "if-match" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "For list pagination",
  args: { name: "page" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "For list pagination",
  args: { name: "integer" },
};
const optEncryptionKeyFile: Fig.Option = {
  name: "--encryption-key-file",
  description:
    "A file containing the base64-encoded string of the AES-256 encryption key associated with the object",
  args: { name: "file", template: "filepaths" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optNamespaceName2: Fig.Option = {
  name: "--namespace-name",
  description: "The Object Storage namespace used for the request",
  args: { name: "namespace-name" },
  isRequired: true,
};
const optDelimiter: Fig.Option = {
  name: "--delimiter",
  description:
    "When this parameter is set, only objects whose names do not contain the delimiter character",
  args: { name: "delimiter" },
};
const optExclude: Fig.Option = {
  name: "--exclude",
  args: { name: "exclude" },
  isRepeatable: true,
};
const optInclude: Fig.Option = {
  name: "--include",
  args: { name: "include" },
  isRepeatable: true,
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optNoMultipart: Fig.Option = {
  name: "--no-multipart",
  description: "Do not transfer the file in multiple parts",
};
const optPartSize: Fig.Option = {
  name: "--part-size",
  description:
    "Part size (in MiB) to use when the file is split into multiple parts and then combined",
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
      "COMPLETED",
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
const optParallelOperationsCount: Fig.Option = {
  name: "--parallel-operations-count",
  description: "The number of parallel operations to perform",
  args: { name: "integer" },
};
const optVersionId: Fig.Option = {
  name: "--version-id",
  description: "VersionId used to identify a particular version of the object",
  args: { name: "version-id" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optCacheControl: Fig.Option = {
  name: "--cache-control",
  description:
    "The optional Cache-Control header that defines the caching behavior value to be returned in GetObject",
  args: { name: "cache-control" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list buckets",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optContentDisposition: Fig.Option = {
  name: "--content-disposition",
  description:
    "The optional Content-Disposition header that defines presentational information for the object to be returned",
  args: { name: "content-disposition" },
};
const optContentEncoding: Fig.Option = {
  name: "--content-encoding",
  description:
    "The optional Content-Encoding header that defines the content encoding of the object to be returned",
  args: { name: "content-encoding" },
};
const optContentLanguage: Fig.Option = {
  name: "--content-language",
  description:
    "The optional Content-Language header that defines the content language of the object to be returned",
  args: { name: "content-language" },
};
const optContentType: Fig.Option = {
  name: "--content-type",
  description:
    "The optional Content-Type header that defines the standard MIME type format of the object to be returned",
  args: { name: "content-type" },
};
const optIfMatch2: Fig.Option = {
  name: "--if-match",
  description: "The entity tag to match",
  args: { name: "if-match" },
};
const optIfNoneMatch: Fig.Option = {
  name: "--if-none-match",
  description: "The entity tag (ETag) to avoid matching",
  args: { name: "if-none-match" },
};
const optMetadata: Fig.Option = {
  name: "--metadata",
  description: "Arbitrary string keys and values for user-defined metadata",
  args: { name: "metadata" },
};
const optName: Fig.Option = {
  name: "--name",
  description: "The name of the object",
  args: { name: "name" },
  isRequired: true,
};
const optParallelUploadCount: Fig.Option = {
  name: "--parallel-upload-count",
  description: "The number of parallel operations to perform",
  args: { name: "integer" },
};
const optPeName: Fig.Option = {
  name: "--pe-name",
  description: "The name of the private endpoint",
  args: { name: "pe-name" },
  isRequired: true,
};
const optRetentionRuleId: Fig.Option = {
  name: "--retention-rule-id",
  description: "The ID of the retention rule",
  args: { name: "retention-rule-id" },
  isRequired: true,
};
const optStorageTier: Fig.Option = {
  name: "--storage-tier",
  description: "The storage tier that the objects should be stored in",
  args: { suggestions: ["Standard", "InfrequentAccess", "Archive"] },
};
const optBucketName3: Fig.Option = {
  name: ["--bucket-name", "--name", "-bn"],
  description: "The name of the bucket",
  args: { name: "bucket-name" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "os",
  description: "Object Storage Service",
  subcommands: [
    {
      name: "bucket",
      description:
        "A bucket is a container for storing objects in a compartment within a namespace",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a bucket in the given namespace with a bucket name and optional user-defined metadata",
          options: [
            optNamespaceName,
            {
              name: "--name",
              description: "The name of the bucket",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to create the bucket",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--metadata",
              description:
                "Arbitrary string, up to 4KB, of keys and values for user-defined metadata",
              args: { name: "json" },
            },
            {
              name: "--public-access-type",
              description: "The type of public access enabled on this bucket",
              args: {
                suggestions: [
                  "NoPublicAccess",
                  "ObjectRead",
                  "ObjectReadWithoutList",
                ],
              },
            },
            {
              name: "--storage-tier",
              description: "The type of storage tier of this bucket",
              args: { suggestions: ["Standard", "Archive"] },
            },
            {
              name: "--object-events-enabled",
              description:
                "Whether or not events are emitted for object state changes in this bucket",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--kms-key-id",
              description:
                "The OCID of a master encryption key used to call the Key Management service to generate a data encryption key",
              args: { name: "kms-key-id" },
            },
            {
              name: "--is-bucket-key-enabled",
              description:
                "Specifies whether Object Storage should use intermediate cached Bucket Encryption Keys with server-side",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--versioning",
              description: "Set the versioning status on the bucket",
              args: { suggestions: ["Enabled", "Disabled"] },
            },
            {
              name: "--auto-tiering",
              description: "Set the auto tiering status on the bucket",
              args: { name: "auto-tiering" },
            },
            {
              name: "--bucket-scope",
              description:
                "The bucket scope determines weather the bucket name must be unique within the tenancy and region",
              args: { name: "bucket-scope" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a bucket if the bucket is already empty",
          options: [
            optNamespaceName,
            optBucketName3,
            optIfMatch,
            optForce,
            {
              name: "--empty",
              description:
                "Delete all objects, pre-authenticated requests, uncommitted multipart uploads and replication policies",
            },
            {
              name: "--dry-run",
              description:
                "When specified with the --empty option, displays a list of objects which would be deleted by this command if",
            },
            {
              name: "--parallel-operations-count",
              description:
                "When specified with the --empty option, specifies the number of parallel delete operations to perform",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the current representation of the given bucket in the given Object Storage namespace",
          options: [
            optNamespaceName,
            optBucketName3,
            optIfMatch,
            optIfNoneMatch,
            {
              name: "--fields",
              description:
                "Bucket summary includes the 'namespace', 'name', 'compartmentId', 'createdBy', 'timeCreated'",
              args: {
                suggestions: [
                  "approximateCount",
                  "approximateSize",
                  "autoTiering",
                ],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of all BucketSummary items in a compartment",
          options: [
            optNamespaceName,
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--fields",
              description:
                "Bucket summary in list of buckets includes the 'namespace', 'name', 'compartmentId', 'createdBy'",
              args: { suggestions: ["tags"] },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "reencrypt",
          description:
            "Re-encrypts the unique data encryption key that encrypts each object written to the bucket by using the most",
          options: [
            optNamespaceName,
            optBucketName,
            {
              name: "--is-reencrypt-bucket-key-only",
              description:
                "If true, reencrypt only the intermediate bucket keys and skip everything else in the bucket",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
            "Performs a partial or full update of a bucket's user-defined metadata",
          options: [
            optNamespaceName,
            optBucketName3,
            {
              name: "--compartment-id",
              description:
                "The compartmentId for the compartment to move the bucket to",
              args: { name: "compartment-id" },
            },
            {
              name: "--metadata",
              description:
                "Arbitrary string, up to 4KB, of keys and values for user-defined metadata",
              args: { name: "json" },
            },
            {
              name: "--public-access-type",
              description: "The type of public access enabled on this bucket",
              args: {
                suggestions: [
                  "NoPublicAccess",
                  "ObjectRead",
                  "ObjectReadWithoutList",
                ],
              },
            },
            {
              name: "--object-events-enabled",
              description:
                "Whether or not events are emitted for object state changes in this bucket",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--kms-key-id",
              description:
                "The OCID of the Key Management master encryption key to associate with the specified bucket",
              args: { name: "kms-key-id" },
            },
            {
              name: "--is-bucket-key-enabled",
              description:
                "Specifies whether Object Storage should use intermediate cached Bucket Encryption Keys with server-side",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--versioning",
              description: "The versioning status on the bucket",
              args: { suggestions: ["Enabled", "Suspended"] },
            },
            {
              name: "--auto-tiering",
              description: "The auto tiering status on the bucket",
              args: { name: "auto-tiering" },
            },
            {
              name: "--bucket-scope",
              description:
                "The bucket scope determines weather the bucket name must be unique within the tenancy and region",
              args: { name: "bucket-scope" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "object-lifecycle-policy",
      description:
        "The collection of lifecycle policy rules that together form the object lifecycle policy of a given bucket",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the object lifecycle policy for the bucket",
          options: [
            optNamespaceName,
            optBucketName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the object lifecycle policy for the bucket",
          options: [optNamespaceName, optBucketName, optFromJson],
        },
        {
          name: "put",
          description:
            "Creates or replaces the object lifecycle policy for the bucket",
          options: [
            optNamespaceName,
            optBucketName,
            {
              name: "--items",
              description: "The bucket's set of lifecycle policy rules",
              args: { name: "json" },
            },
            optIfMatch,
            optIfNoneMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-error",
      subcommands: [
        {
          name: "list",
          description: "Lists the errors of the work request with the given ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "private-endpoint",
      description:
        "A private endpoint makes your service accessible through a private IP in the customer's private network",
      subcommands: [
        {
          name: "create",
          description: "Create a PrivateEndpoint",
          options: [
            optNamespaceName2,
            {
              name: "--name",
              description: "This name associated with the endpoint",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to create the Private Endpoint",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the customer's subnet where the private endpoint VNIC will reside",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            {
              name: "--prefix",
              description: "A prefix to use for the private endpoint",
              args: { name: "prefix" },
              isRequired: true,
            },
            {
              name: "--access-targets",
              description:
                "A list of targets that can be accessed by the private endpoint",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--additional-prefixes",
              description:
                "A list of additional prefix that you can provide along with any other prefix",
              args: { name: "json" },
            },
            {
              name: "--private-endpoint-ip",
              description:
                "The private IP address to assign to this private endpoint",
              args: { name: "private-endpoint-ip" },
            },
            {
              name: "--nsg-ids",
              description:
                "A list of the OCIDs of the network security groups (NSGs) to add the private endpoint's VNIC to",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-attributes",
              description: "Security attributes for Private Endpoint resource",
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
            "Deletes a Private Endpoint if it exists in the given namespace",
          options: [
            optNamespaceName2,
            optPeName,
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
          description:
            "Gets the current representation of the given Private Endpoint in the given Object Storage namespace",
          options: [
            optNamespaceName2,
            optPeName,
            optIfMatch,
            optIfNoneMatch,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of all PrivateEndpointSummary in a compartment associated with a namespace",
          options: [
            optNamespaceName2,
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--fields",
              description:
                "PrivateEndpoint summary in list of PrivateEndpoints includes the 'namespace', 'name', 'compartmentId'",
              args: { suggestions: ["tags"] },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-state",
              description: "The lifecycle state of the Private Endpoint",
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
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Performs a partial or full update of a user-defined data associated with the Private Endpoint",
          options: [
            optNamespaceName2,
            optPeName,
            {
              name: "--name",
              description: "This name associated with the endpoint",
              args: { name: "name" },
            },
            {
              name: "--namespace",
              description:
                "The Object Storage namespace which will associated with the private endpoint",
              args: { name: "namespace" },
            },
            {
              name: "--access-targets",
              description:
                "A list of targets that can be accessed by the private endpoint",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--security-attributes",
              description: "Security attributes for Private Endpoint resource",
              args: { name: "json" },
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
      name: "retention-rule",
      description: "The details of a retention rule",
      subcommands: [
        {
          name: "create",
          description: "Creates a new retention rule in the specified bucket",
          options: [
            optNamespaceName,
            optBucketName2,
            {
              name: "--display-name",
              description: "A user-specified name for the retention rule",
              args: { name: "display-name" },
            },
            {
              name: "--time-rule-locked",
              description:
                "The date and time as per RFC 3339 after which this rule is locked and can only be deleted by deleting",
              args: { name: "datetime" },
            },
            {
              name: "--time-amount",
              description:
                "The amount of time that objects in the bucket should be preserved for and which is calculated in relation",
              args: { name: "integer" },
            },
            {
              name: "--time-unit",
              description:
                "The unit that should be used to interpret time-amount",
              args: { suggestions: ["DAYS", "YEARS"] },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified rule",
          options: [
            optNamespaceName,
            optBucketName2,
            optRetentionRuleId,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get the specified retention rule",
          options: [
            optNamespaceName,
            optBucketName2,
            optRetentionRuleId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "List the retention rules for a bucket",
          options: [
            optNamespaceName,
            optBucketName2,
            optPage,
            optAll,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified retention rule",
          options: [
            optNamespaceName,
            optBucketName2,
            optRetentionRuleId,
            {
              name: "--display-name",
              description: "A user-specified name for the retention rule",
              args: { name: "display-name" },
            },
            optIfMatch,
            {
              name: "--time-amount",
              description:
                "The amount of time that objects in the bucket should be preserved for and which is calculated in relation",
              args: { name: "time-amount" },
            },
            {
              name: "--time-unit",
              description:
                "The unit that should be used to interpret time-amount",
              args: { suggestions: ["DAYS", "YEARS"] },
            },
            {
              name: "--time-rule-locked",
              description:
                "The date and time as per RFC 3339 after which this rule is locked and can only be deleted by deleting",
              args: { name: "time-rule-locked" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-log-entry",
      subcommands: [
        {
          name: "list",
          description: "Lists the logs of the work request with the given ID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "A description of workRequest status",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a work request",
          options: [optWorkRequestId, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets the status of the work request for the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--private-endpoint-name",
              description:
                "The name of the privateEndpoint for which to list work requests",
              args: { name: "private-endpoint-name" },
            },
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "replication",
      subcommands: [
        {
          name: "delete-replication-policy",
          description:
            "Deletes the replication policy associated with the source bucket",
          options: [
            optNamespaceName,
            optBucketName2,
            {
              name: "--replication-id",
              description: "The ID of the replication policy",
              args: { name: "replication-id" },
              isRequired: true,
            },
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get-replication-policy",
          description: "Get the replication policy",
          options: [
            optNamespaceName,
            optBucketName2,
            {
              name: "--replication-id",
              description: "The ID of the replication policy",
              args: { name: "replication-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-replication-policies",
          description: "List the replication policies associated with a bucket",
          options: [
            optNamespaceName,
            optBucketName2,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-replication-sources",
          description: "List the replication sources of a destination bucket",
          options: [
            optNamespaceName,
            optBucketName2,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "make-bucket-writable",
          description:
            "Stops replication to the destination bucket and removes the replication policy",
          options: [optNamespaceName, optBucketName2, optFromJson],
        },
        {
          name: "create-replication-policy",
          description: "Creates a replication policy for the specified bucket",
          options: [
            optNamespaceName,
            optBucketName2,
            {
              name: "--name",
              description: "The name of the policy",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--destination-region",
              args: { name: "destination-region" },
              isRequired: true,
            },
            {
              name: "--destination-bucket",
              args: { name: "destination-bucket" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "object",
      subcommands: [
        {
          name: "batch-delete",
          description: "Deletes a batch of objects",
          options: [
            optNamespaceName2,
            {
              name: "--bucket-name",
              description: "The name of the bucket",
              args: { name: "bucket-name" },
              isRequired: true,
            },
            {
              name: "--objects",
              description: "The list of the objects to delete",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--is-skip-deleted-result",
              description:
                "Specifies whether to skip the details of successfully deleted objects in the response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an object",
          options: [
            optNamespaceName,
            optBucketName,
            {
              name: ["--object-name", "--name"],
              description: "The name of the object",
              args: { name: "object-name" },
              isRequired: true,
            },
            optIfMatch,
            optVersionId,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "reencrypt",
          description:
            "Re-encrypts the data encryption keys that encrypt the object and its chunks",
          options: [
            optNamespaceName,
            optBucketName,
            {
              name: ["--object-name", "--name", "-on"],
              description: "The name of the object",
              args: { name: "object-name" },
              isRequired: true,
            },
            {
              name: "--kms-key-id",
              description:
                "The OCID of the master encryption key used to call the Vault service to re-encrypt the data encryption keys",
              args: { name: "kms-key-id" },
            },
            optVersionId,
            optEncryptionKeyFile,
            {
              name: "--source-encryption-key-file",
              description:
                "A file containing the base64-encoded string of the AES-256 encryption key associated with the source object",
              args: { name: "file", template: "filepaths" },
            },
            optFromJson,
          ],
        },
        {
          name: "rename",
          description: "Rename an object in the given Object Storage namespace",
          options: [
            optNamespaceName,
            optBucketName2,
            {
              name: ["--source-name", "--name"],
              description: "The name of the source object to be renamed",
              args: { name: "source-name" },
              isRequired: true,
            },
            {
              name: "--new-name",
              description: "The new name of the source object",
              args: { name: "new-name" },
              isRequired: true,
            },
            {
              name: ["--src-obj-if-match-e-tag", "--src-if-match"],
              description:
                "The if-match entity tag (ETag) of the source object",
              args: { name: "src-obj-if-match-e-tag" },
            },
            {
              name: ["--new-obj-if-match-e-tag", "--new-if-match"],
              description: "The if-match entity tag (ETag) of the new object",
              args: { name: "new-obj-if-match-e-tag" },
            },
            {
              name: ["--new-obj-if-none-match-e-tag", "--new-if-none-match"],
              description:
                "The if-none-match entity tag (ETag) of the new object",
              args: { name: "new-obj-if-none-match-e-tag" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-storage-tier",
          description:
            "Changes the storage tier of the object specified by the objectName parameter",
          options: [
            optNamespaceName,
            optBucketName2,
            {
              name: "--object-name",
              description:
                "An object for which the storage tier needs to be changed",
              args: { name: "object-name" },
              isRequired: true,
            },
            {
              name: "--storage-tier",
              description:
                "The storage tier that the object should be moved to",
              args: {
                suggestions: ["Standard", "InfrequentAccess", "Archive"],
              },
              isRequired: true,
            },
            {
              name: "--version-id",
              description: "The versionId of the object",
              args: { name: "version-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "list-object-versions",
          description: "Lists the object versions in a bucket",
          options: [
            optNamespaceName,
            optBucketName2,
            {
              name: "--prefix",
              description:
                "The string to use for matching against the start of object names in a list query",
              args: { name: "prefix" },
            },
            {
              name: "--start",
              description:
                "Object names returned by a list query must be greater or equal to this parameter",
              args: { name: "start" },
            },
            {
              name: "--end",
              description:
                "Object names returned by a list query must be strictly less than this parameter",
              args: { name: "end" },
            },
            {
              name: "--limit",
              description: "The maximum number of items to return",
              args: { name: "integer" },
            },
            optDelimiter,
            {
              name: "--fields",
              description:
                "Object summary in list of objects includes the 'name' field",
              args: { name: "fields" },
            },
            {
              name: "--start-after",
              description:
                "Object names returned by a list query must be greater than this parameter",
              args: { name: "start-after" },
            },
            {
              name: "--page",
              description: "The page at which to start retrieving results",
              args: { name: "page" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          options: [
            optNamespace,
            optBucketName,
            {
              name: "--prefix",
              description:
                "Only object names that begin with this prefix will be returned",
              args: { name: "prefix" },
            },
            {
              name: "--start",
              description:
                "Only object names greater or equal to this parameter will be returned",
              args: { name: "start" },
            },
            {
              name: "--end",
              description:
                "Only object names less than this parameter will be returned",
              args: { name: "end" },
            },
            {
              name: "--limit",
              description:
                "The maximum number of items to return. default: 100",
              args: { name: "integer" },
            },
            optPageSize,
            optAll,
            optDelimiter,
            {
              name: "--fields",
              description:
                "Object summary in list of objects includes the 'name' field",
              args: { name: "fields" },
            },
            {
              name: "--stream-output",
              description:
                "Print output to stdout as it is fetched so the full response is not stored in memory",
            },
            optFromJson,
          ],
        },
        {
          name: "put",
          options: [
            optNamespace,
            optBucketName,
            {
              name: "--file",
              description:
                "The file to load as the content of the object, or '-' to read from STDIN",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the object",
              args: { name: "name" },
            },
            optIfMatch2,
            {
              name: "--content-md5",
              description:
                "The optional base-64 header that defines the encoded MD5 hash of the body",
              args: { name: "content-md5" },
            },
            {
              name: "--opc-checksum-algorithm",
              description:
                "The optional checksum algorithm to use to compute and store the checksum of the body of the HTTP request",
              args: { suggestions: ["CRC32C", "SHA256", "SHA384"] },
            },
            {
              name: "--opc-content-crc32c",
              description:
                "Applicable only if CRC32C is specified in the opc-checksum-algorithm request header",
              args: { name: "opc-content-crc32c" },
            },
            {
              name: "--opc-content-sha256",
              description:
                "Applicable only if SHA256 is specified in the opc-checksum-algorithm request header",
              args: { name: "opc-content-sha256" },
            },
            {
              name: "--opc-content-sha384",
              description:
                "Applicable only if SHA384 is specified in the opc-checksum-algorithm request header",
              args: { name: "opc-content-sha384" },
            },
            optMetadata,
            optContentType,
            optContentLanguage,
            optContentEncoding,
            {
              name: "--force",
              description:
                "If the object name already exists, overwrite the existing object without a confirmation prompt",
            },
            {
              name: "--no-overwrite",
              description:
                "If the object name already exists, do not overwrite the existing object",
            },
            optNoMultipart,
            optPartSize,
            {
              name: "--disable-parallel-uploads",
              description:
                "If the object will be uploaded in multiple parts, this option disables those parts from being uploaded",
            },
            optParallelUploadCount,
            {
              name: "--verify-checksum",
              description:
                "Verify the checksum of the uploaded object with the local file",
            },
            optContentDisposition,
            optCacheControl,
            optEncryptionKeyFile,
            optStorageTier,
            {
              name: "--opc-sse-kms-key-id",
              description:
                "The OCID of a master encryption key used to call the Key Management Service to generate a data encryption key",
              args: { name: "opc-sse-kms-key-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "bulk-upload",
          options: [
            {
              name: ["--namespace", "--namespace-name", "-ns"],
              description: "Object Storage namespace",
              args: { name: "namespace" },
              isRequired: true,
            },
            optBucketName,
            {
              name: "--src-dir",
              description: "The directory which contains files to upload",
              args: { name: "src-dir", template: "folders" },
              isRequired: true,
            },
            {
              name: ["--prefix", "--object-prefix"],
              description:
                "A prefix to apply to the names of all files being uploaded",
              args: { name: "prefix" },
            },
            optMetadata,
            optContentType,
            optContentLanguage,
            optContentEncoding,
            optCacheControl,
            optContentDisposition,
            optStorageTier,
            {
              name: "--overwrite",
              description:
                "If a file being uploaded already exists in Object Storage with the same name",
            },
            {
              name: "--no-overwrite",
              description:
                "If a file being uploaded already exists in Object Storage with the same name, do not overwite the object",
            },
            optNoMultipart,
            optPartSize,
            {
              name: "--disable-parallel-uploads",
              description: "DEPRECATED This option is no longer used",
            },
            optParallelUploadCount,
            {
              name: "--verify-checksum",
              description:
                "Verify the checksum of the uploaded object with the local file",
            },
            optInclude,
            optExclude,
            optEncryptionKeyFile,
            {
              name: "--dry-run",
              description: "Prints the list of files to be uploaded",
            },
            {
              name: "--no-follow-symlinks",
              description:
                "Symbolic links will be ignored while traversing the local filesystem",
            },
            {
              name: "--opc-sse-kms-key-id",
              description:
                "The OCID of a master encryption key used to call the Key Management Service to generate a data encryption key",
              args: { name: "opc-sse-kms-key-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          options: [
            optNamespace,
            optBucketName,
            optName,
            {
              name: "--file",
              description:
                "The name of the file that will receive the object content, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optVersionId,
            optIfMatch2,
            {
              name: "--if-none-match",
              description: "The entity tag to avoid matching",
              args: { name: "if-none-match" },
            },
            {
              name: "--range",
              description: "Byte range to fetch",
              args: { name: "range" },
            },
            {
              name: "--multipart-download-threshold",
              description:
                "Objects larger than this size (in MiB) will be downloaded in multiple parts",
              args: { name: "integer" },
            },
            optPartSize,
            {
              name: "--parallel-download-count",
              description:
                "The number of parallel operations to perform when downloading an object in multiple parts",
              args: { name: "integer" },
            },
            optNoMultipart,
            optEncryptionKeyFile,
            {
              name: "--http-response-content-disposition",
              description:
                "This value will be used in Content-Disposition header of the response",
              args: { name: "http-response-content-disposition" },
            },
            {
              name: "--http-response-cache-control",
              description:
                "This value will be used in Cache-Control header of the response",
              args: { name: "http-response-cache-control" },
            },
            {
              name: "--http-response-content-type",
              description:
                "This value will be used in Content-Type header of the response",
              args: { name: "http-response-content-type" },
            },
            {
              name: "--http-response-content-language",
              description:
                "This value will be used in Content-Language header of the response",
              args: { name: "http-response-content-language" },
            },
            {
              name: "--http-response-content-encoding",
              description:
                "This value will be used in Content-Encoding header of the response",
              args: { name: "http-response-content-encoding" },
            },
            {
              name: "--http-response-expires",
              description:
                "This value will be used in Expires header of the response",
              args: { name: "http-response-expires" },
            },
            optFromJson,
          ],
        },
        {
          name: "bulk-download",
          options: [
            optNamespace,
            optBucketName,
            {
              name: "--prefix",
              description: "Retrieve all objects with the given prefix",
              args: { name: "prefix" },
            },
            optDelimiter,
            {
              name: ["--dest-dir", "--download-dir"],
              description:
                "The directory where retrieved objects will be placed as files",
              args: { name: "dest-dir", template: "folders" },
              isRequired: true,
            },
            {
              name: "--overwrite",
              description:
                "If a file with the same name as an object already exists in the download directory, overwrite it",
            },
            {
              name: "--no-overwrite",
              description:
                "If a file with the same name as an object already exists in the download directory, do not overwite it",
            },
            optParallelOperationsCount,
            {
              name: "--multipart-download-threshold",
              description:
                "Objects larger than this size (in MiB) will be downloaded in multiple parts",
              args: { name: "integer" },
            },
            optNoMultipart,
            optPartSize,
            optInclude,
            optExclude,
            optEncryptionKeyFile,
            {
              name: "--dry-run",
              description: "Prints the list of files to be downloaded",
            },
            optFromJson,
          ],
        },
        {
          name: "sync",
          description:
            "Synchronizes a filesystem directory with objects in a bucket",
          options: [
            optNamespace,
            optBucketName,
            {
              name: "--src-dir",
              description: "Required when not specifying --dest-dir",
              args: { name: "src-dir", template: "folders" },
            },
            {
              name: "--dest-dir",
              description: "Required when not specifying --src-dir",
              args: { name: "dest-dir", template: "folders" },
            },
            optCacheControl,
            optContentDisposition,
            optContentEncoding,
            optContentLanguage,
            optContentType,
            {
              name: "--delete",
              description:
                "Delete files/objects that exist in the destination but not in the source",
            },
            {
              name: "--dry-run",
              description:
                "Prints the list of files that would be uploaded, downloaded or deleted without actually performing any",
            },
            optEncryptionKeyFile,
            optExclude,
            optInclude,
            optMetadata,
            {
              name: "--no-follow-symlinks",
              description:
                "Symbolic links will be ignored while traversing the local filesystem",
            },
            optNoMultipart,
            optParallelOperationsCount,
            {
              name: "--part-size",
              description:
                "Part size (in MiB) to use when downloading an object in multiple parts",
              args: { name: "integer" },
            },
            {
              name: "--prefix",
              description:
                "When specified with --src-dir, the files are uploaded as objects with the specified prefix",
              args: { name: "prefix" },
            },
            optStorageTier,
            optFromJson,
          ],
        },
        {
          name: "head",
          options: [
            optNamespace,
            optBucketName,
            optName,
            optVersionId,
            optIfMatch2,
            {
              name: "--if-none-match",
              description: "The entity tag to avoid matching",
              args: { name: "if-none-match" },
            },
            optEncryptionKeyFile,
            optFromJson,
          ],
        },
        {
          name: "bulk-delete",
          options: [
            optNamespace,
            optBucketName,
            {
              name: "--prefix",
              description: "Delete all objects with the given prefix",
              args: { name: "prefix" },
            },
            optDelimiter,
            {
              name: "--dry-run",
              description:
                "Displays a list of objects which would be deleted by this command, if it were run without --dry-run",
            },
            {
              name: "--force",
              description:
                "Do not ask for confirmation prior to performing the bulk delete",
            },
            optParallelOperationsCount,
            optInclude,
            optExclude,
            optFromJson,
          ],
        },
        {
          name: "bulk-delete-versions",
          options: [
            optNamespace,
            optBucketName,
            {
              name: "--prefix",
              description: "Delete all object versions with the given prefix",
              args: { name: "prefix" },
            },
            {
              name: "--object-name",
              description: "Delete all versions of the given objectName",
              args: { name: "object-name" },
            },
            optDelimiter,
            {
              name: "--dry-run",
              description:
                "Displays a list of objects which would be deleted by this command, if it were run without --dry-run",
            },
            {
              name: "--force",
              description:
                "Do not ask for confirmation prior to performing the bulk delete",
            },
            optParallelOperationsCount,
            optInclude,
            optExclude,
            optFromJson,
          ],
        },
        {
          name: "resume-put",
          options: [
            optNamespace,
            optBucketName,
            {
              name: "--file",
              description: "The file to load as the content of the object",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "The name of the object",
              args: { name: "name" },
            },
            {
              name: "--upload-id",
              description: "Upload ID to resume",
              args: { name: "upload-id" },
              isRequired: true,
            },
            optPartSize,
            {
              name: "--disable-parallel-uploads",
              description:
                "If the object will be uploaded in multiple parts, this option disables those parts from being uploaded",
            },
            optParallelUploadCount,
            optFromJson,
          ],
        },
        {
          name: "restore",
          description:
            "Restores the object specified by the objectName parameter",
          options: [
            {
              name: "--hours",
              description:
                "The number of hours for which this object will be restored",
              args: { name: "integer" },
            },
            {
              name: "--version-id",
              description: "The versionId of the object to restore",
              args: { name: "version-id" },
            },
            optNamespace,
            {
              name: ["--bucket", "--bucket-name", "-bn"],
              description: "The name of the bucket",
              args: { name: "bucket" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "A object which was in an archived state and need to be restored",
              args: { name: "name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "restore-status",
          options: [optNamespace, optBucketName, optName, optFromJson],
        },
        {
          name: "copy",
          description:
            "Creates a request to copy an object within a region or to another region",
          options: [
            optNamespaceName,
            optBucketName,
            {
              name: "--source-object-name",
              description: "The name of the object to be copied",
              args: { name: "source-object-name" },
              isRequired: true,
            },
            {
              name: "--destination-region",
              description:
                'The destination region the object will be copied to, for example "us-ashburn-1"',
              args: { name: "destination-region" },
              isRequired: true,
            },
            {
              name: "--destination-namespace",
              description:
                "The destination Object Storage namespace the object will be copied to",
              args: { name: "destination-namespace" },
              isRequired: true,
            },
            {
              name: "--destination-bucket",
              description:
                "The destination bucket the object will be copied to",
              args: { name: "destination-bucket" },
              isRequired: true,
            },
            {
              name: "--destination-object-name",
              description:
                "The name of the destination object resulting from the copy operation",
              args: { name: "destination-object-name" },
              isRequired: true,
            },
            {
              name: "--source-object-if-match-e-tag",
              description:
                "The entity tag (ETag) to match against that of the source object",
              args: { name: "source-object-if-match-e-tag" },
            },
            {
              name: "--source-version-id",
              description: "VersionId of the object to copy",
              args: { name: "source-version-id" },
            },
            {
              name: "--destination-object-if-match-e-tag",
              description:
                "The entity tag (ETag) to match against that of the destination object (an object intended to be overwritten)",
              args: { name: "destination-object-if-match-e-tag" },
            },
            {
              name: "--destination-object-if-none-match-e-tag",
              description: "The entity tag (ETag) to avoid matching",
              args: { name: "destination-object-if-none-match-e-tag" },
            },
            {
              name: "--destination-object-metadata",
              description:
                "Arbitrary string keys and values for the user-defined metadata for the object",
              args: { name: "json" },
            },
            {
              name: "--destination-object-storage-tier",
              description:
                "The storage tier that the object should be stored in",
              args: {
                suggestions: ["Standard", "InfrequentAccess", "Archive"],
              },
            },
            {
              name: "--opc-sse-customer-algorithm",
              description:
                'The optional header that specifies "AES256" as the encryption algorithm',
              args: { name: "opc-sse-customer-algorithm" },
            },
            {
              name: "--opc-sse-customer-key",
              description:
                "The optional header that specifies the base64-encoded 256-bit encryption key to use to encrypt or decrypt",
              args: { name: "opc-sse-customer-key" },
            },
            {
              name: "--opc-sse-customer-key-sha256",
              description:
                "The optional header that specifies the base64-encoded SHA256 hash of the encryption key",
              args: { name: "opc-sse-customer-key-sha256" },
            },
            {
              name: "--opc-source-sse-customer-algorithm",
              description:
                'The optional header that specifies "AES256" as the encryption algorithm to use to decrypt the source object',
              args: { name: "opc-source-sse-customer-algorithm" },
            },
            {
              name: "--opc-source-sse-customer-key",
              description:
                "The optional header that specifies the base64-encoded 256-bit encryption key to use to decrypt the source",
              args: { name: "opc-source-sse-customer-key" },
            },
            {
              name: "--opc-source-sse-customer-key-sha256",
              description:
                "The optional header that specifies the base64-encoded SHA256 hash of the encryption key used to decrypt",
              args: { name: "opc-source-sse-customer-key-sha256" },
            },
            {
              name: "--opc-sse-kms-key-id",
              description:
                "The OCID of a master encryption key used to call the Key Management service to generate a data encryption key",
              args: { name: "opc-sse-kms-key-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optEncryptionKeyFile,
            {
              name: "--source-encryption-key-file",
              description:
                "A file containing the base64-encoded string of the AES-256 encryption key associated with the source object",
              args: { name: "file", template: "filepaths" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ns",
      description:
        "A namespace is a logical entity that serves as a top-level container for all buckets and objects",
      subcommands: [
        {
          name: "get",
          description:
            "Each Oracle Cloud Infrastructure tenant is assigned one unique and uneditable Object Storage namespace",
          options: [
            {
              name: "--compartment-id",
              description:
                "This is an optional field representing either the tenancy OCID or the compartment OCID within the tenancy",
              args: { name: "compartment-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "get-metadata",
          description: "Gets the metadata for the Object Storage namespace",
          options: [optNamespaceName, optFromJson],
        },
        {
          name: "update-metadata",
          description:
            "By default, buckets created using the Amazon S3 Compatibility API or the Swift API are created in the root",
          options: [
            optNamespaceName,
            {
              name: "--default-s3-compartment-id",
              description:
                "The updated compartment id for use by an S3 client, if this field is set",
              args: { name: "default-s3-compartment-id" },
            },
            {
              name: "--default-swift-compartment-id",
              description:
                "The updated compartment id for use by a Swift client, if this field is set",
              args: { name: "default-swift-compartment-id" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "preauth-request",
      description:
        "Pre-authenticated requests provide a way to let users access a bucket or an object without having their own",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a pre-authenticated request specific to the bucket",
          options: [
            optNamespaceName,
            optBucketName,
            {
              name: "--name",
              description:
                "A user-specified name for the pre-authenticated request",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--access-type",
              description:
                "The operation that can be performed on this resource",
              args: {
                suggestions: [
                  "ObjectRead",
                  "ObjectWrite",
                  "ObjectReadWrite",
                  "AnyObjectWrite",
                  "AnyObjectRead",
                  "AnyObjectReadWrite",
                ],
              },
              isRequired: true,
            },
            {
              name: "--time-expires",
              description:
                "The expiration date for the pre-authenticated request as per RFC 3339",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--bucket-listing-action",
              description:
                'Specifies whether a list operation is allowed on a PAR with accessType "AnyObjectRead"',
              args: { name: "bucket-listing-action" },
            },
            {
              name: ["--object-name", "-on"],
              description:
                "The name of the object that is being granted access to by the pre-authenticated request",
              args: { name: "object-name" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the pre-authenticated request for the bucket",
          options: [
            optNamespaceName,
            optBucketName,
            {
              name: "--par-id",
              description:
                "The unique identifier for the pre-authenticated request",
              args: { name: "par-id" },
              isRequired: true,
            },
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the pre-authenticated request for the bucket",
          options: [
            optNamespaceName,
            optBucketName,
            {
              name: "--par-id",
              description:
                "The unique identifier for the pre-authenticated request",
              args: { name: "par-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists pre-authenticated requests for the bucket",
          options: [
            optNamespaceName,
            optBucketName,
            {
              name: "--object-name-prefix",
              description:
                "User-specified object name prefixes can be used to query and return a list of pre-authenticated requests",
              args: { name: "object-name-prefix" },
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
      name: "multipart",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all of the in-progress multipart uploads for the given bucket in the given Object Storage namespace",
          options: [
            optNamespaceName,
            optBucketName,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "abort",
          options: [
            optNamespace,
            optBucketName,
            {
              name: ["--object-name", "-on"],
              description: "The name of the object",
              args: { name: "object-name" },
              isRequired: true,
            },
            {
              name: "--upload-id",
              description: "Upload ID to abort",
              args: { name: "upload-id" },
              isRequired: true,
            },
            {
              name: "--force",
              description:
                "Abort the existing multipart upload without a confirmation prompt",
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
