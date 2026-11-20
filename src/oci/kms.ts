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
const optKeyId: Fig.Option = {
  name: "--key-id",
  description: "The OCID of the key",
  args: { name: "key-id" },
  isRequired: true,
};
const optHsmClusterId: Fig.Option = {
  name: "--hsm-cluster-id",
  description: "The OCID of the HSM Cluster",
  args: { name: "hsm-cluster-id" },
  isRequired: true,
};
const optVaultId: Fig.Option = {
  name: "--vault-id",
  description: "The OCID of the vault",
  args: { name: "vault-id" },
  isRequired: true,
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
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    'The maximum number of items to return in a paginated "List" call',
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    'The value of the opc-next-page response header from the previous "List" call',
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
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ENABLING",
      "ENABLED",
      "DISABLING",
      "DISABLED",
      "DELETING",
      "DELETED",
      "PENDING_DELETION",
      "SCHEDULING_DELETION",
      "CANCELLING_DELETION",
      "UPDATING",
      "BACKUP_IN_PROGRESS",
      "RESTORING",
    ],
  },
  isRepeatable: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optKeyVersionId: Fig.Option = {
  name: "--key-version-id",
  description: "The OCID of the key version",
  args: { name: "key-version-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ENABLING",
      "ENABLED",
      "DISABLING",
      "DISABLED",
      "DELETING",
      "DELETED",
      "PENDING_DELETION",
      "SCHEDULING_DELETION",
      "CANCELLING_DELETION",
    ],
  },
  isRepeatable: true,
};
const optBucketName: Fig.Option = {
  name: "--bucket-name",
  args: { name: "bucket-name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optIfMatch2: Fig.Option = {
  name: "--if-match",
  args: { name: "if-match" },
};
const optLoggingContext: Fig.Option = {
  name: "--logging-context",
  description: "Information that provides context for audit logging",
  args: { name: "json" },
};
const optNamespace: Fig.Option = {
  name: "--namespace",
  args: { name: "namespace" },
};
const optObjectName: Fig.Option = {
  name: "--object-name",
  args: { name: "object-name" },
};
const optUri: Fig.Option = { name: "--uri", args: { name: "uri" } };
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "PENDING_DELETION",
      "SCHEDULING_DELETION",
      "CANCELLING_DELETION",
      "UPDATING",
      "BACKUP_IN_PROGRESS",
      "RESTORING",
    ],
  },
  isRepeatable: true,
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "INITIALIZATION_REQUIRED",
      "INITIALIZING",
      "ACTIVATION_REQUIRED",
      "ACTIVATING",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "PENDING_DELETION",
      "SCHEDULING_DELETION",
      "CANCELLING_DELETION",
    ],
  },
  isRepeatable: true,
};
const optAssociatedData: Fig.Option = {
  name: "--associated-data",
  description:
    "Information that can be used to provide an encryption context for the encrypted data",
  args: { name: "json" },
};
const optAutoKeyRotationDetails: Fig.Option = {
  name: "--auto-key-rotation-details",
  args: { name: "json" },
};
const optDefinedTags2: Fig.Option = {
  name: "--defined-tags",
  description: "Usage of predefined tag keys",
  args: { name: "json" },
};
const optEkmsPrivateEndpointId: Fig.Option = {
  name: "--ekms-private-endpoint-id",
  description: "Unique EKMS private endpoint identifier",
  args: { name: "ekms-private-endpoint-id" },
  isRequired: true,
};
const optIsAutoRotationEnabled: Fig.Option = {
  name: "--is-auto-rotation-enabled",
  description:
    "A parameter specifying whether the auto key rotation is enabled or not",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optKeyShape: Fig.Option = {
  name: "--key-shape",
  args: { name: "json" },
  isRequired: true,
};
const optWaitForState5: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["CREATING", "ACTIVE", "DELETING", "DELETED", "FAILED"],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "kms",
  description: "Vault Key Management",
  subcommands: [
    {
      name: "ekm",
      description: "Use the Key Management CLI to manage vaults and keys",
      subcommands: [
        {
          name: "ekms-private-endpoint",
          description:
            "EKMS private endpoint created in customer subnet used to connect to external key manager system",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new EKMS private endpoint used to connect to external key manager system",
              options: [
                {
                  name: "--subnet-id",
                  description:
                    "The OCID of subnet in which the EKMS private endpoint is to be created",
                  args: { name: "subnet-id" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description: "Compartment identifier",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description:
                    "Display name of the EKMS private endpoint resource being created",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--external-key-manager-ip",
                  description:
                    "External private IP to connect to from this EKMS private endpoint",
                  args: { name: "external-key-manager-ip" },
                  isRequired: true,
                },
                {
                  name: "--ca-bundle",
                  description:
                    "CABundle to validate TLS certificate of the external key manager system in PEM format",
                  args: { name: "ca-bundle" },
                  isRequired: true,
                },
                {
                  name: "--freeform-tags",
                  description:
                    "Simple key-value pair that is applied without any predefined name, type, or scope",
                  args: { name: "json" },
                },
                optDefinedTags2,
                {
                  name: "--port",
                  description: "The port of the external key manager system",
                  args: { name: "integer" },
                },
                optWaitForState5,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Deletes EKMS private endpoint by identifier",
              options: [
                optEkmsPrivateEndpointId,
                optIfMatch,
                {
                  name: "--force",
                  description:
                    "Perform deletion without prompting for confirmation",
                },
                optWaitForState5,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets a specific EKMS private by identifier",
              options: [optEkmsPrivateEndpointId, optFromJson],
            },
            {
              name: "list",
              description:
                "Returns a list of all the EKMS private endpoints in the specified compartment",
              options: [
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
              name: "update",
              description: "Updates EKMS private endpoint",
              options: [
                optEkmsPrivateEndpointId,
                {
                  name: "--display-name",
                  description: "Display name of EKMS private endpoint resource",
                  args: { name: "display-name" },
                },
                {
                  name: "--freeform-tags",
                  description:
                    "Simple key-value pair that is applied without any predefined name, type or scope",
                  args: { name: "json" },
                },
                optDefinedTags2,
                optIfMatch,
                optForce,
                optWaitForState5,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "kms-hsm-cluster",
      description: "Use the Key Management CLI to manage vaults and keys",
      subcommands: [
        {
          name: "hsm-cluster",
          description: "Dedicated KMS-HSM Cluster Management",
          subcommands: [
            {
              name: "cancel-hsm-cluster-deletion",
              description:
                "Cancels deletion of specified HSM Cluster, restores it and associated HSM partitions to pre-deletion states",
              options: [
                optHsmClusterId,
                optIfMatch,
                optWaitForState4,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "change-compartment",
              description:
                "Moves a HSM Cluster resource to a different compartment within the same tenancy",
              options: [
                optHsmClusterId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to move the hsm cluster to",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates a new HSM cluster resource",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment where you want to create this HSM cluster resource",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description:
                    "A user-friendly display name for the HSM cluster resource",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                optDefinedTags,
                optFreeformTags,
                { name: "--audit-log-config", args: { name: "json" } },
                optWaitForState4,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "disable-audit-mgmt-logging",
              description:
                "Disables management audit logging for the given HSM Cluster resource",
              options: [optHsmClusterId, optIfMatch, optFromJson],
            },
            {
              name: "download-certificate-signing-request",
              description:
                "Retrieves the certificate signing request for the designated HSM Cluster resource",
              options: [optHsmClusterId, optIfMatch, optFromJson],
            },
            {
              name: "enable-audit-mgmt-logging",
              description:
                "Validates that the Dynamic Group and bucket policy supplied during EnableAuditLogging / CreateHsmCluster",
              options: [optHsmClusterId, optIfMatch, optFromJson],
            },
            {
              name: "get",
              description:
                "Retrieves configuration details for the specified HSM Cluster resource",
              options: [optHsmClusterId, optFromJson],
            },
            {
              name: "get-pre-co-user-credentials",
              description:
                "Retrieves Pre Crypto Officer user credentials for the specified HSM cluster",
              options: [optHsmClusterId, optFromJson],
            },
            {
              name: "initiate-audit-logging",
              description:
                "Initiates the process of enabling audit logs for a HSM cluster resource by taking in the required parameters",
              options: [
                optHsmClusterId,
                {
                  name: "--bucket-name",
                  description:
                    "The bucket name to which audit logs will be stored",
                  args: { name: "bucket-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace",
                  description:
                    "The namespace under bucket to which audit logs will be stored",
                  args: { name: "namespace" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description:
                    "The compartmentId OCID under namespace to which audit logs will be stored",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Lists all HSM cluster resources contained within the specified compartment",
              options: [
                optCompartmentId,
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
              name: "schedule-hsm-cluster-deletion",
              description:
                "Schedules HSM cluster for deletion, update its lifecycle state to 'PENDING_DELETION' and deletes it after",
              options: [
                optHsmClusterId,
                {
                  name: "--time-of-deletion",
                  description:
                    "An optional property indicating when to delete the HsmCluster resource",
                  args: { name: "datetime" },
                },
                optIfMatch,
                optWaitForState4,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-audit-logging-destination",
              description:
                "Update bucket details of management audit logs for a HSM cluster resource by hsmClusterId",
              options: [
                optHsmClusterId,
                {
                  name: "--bucket-name",
                  description:
                    "The bucket name to which audit logs will be stored",
                  args: { name: "bucket-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace",
                  description:
                    "The namespace under bucket to which audit logs will be stored",
                  args: { name: "namespace" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description:
                    "The compartmentId OCID under namespace to which audit logs will be stored",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "Modifies properties of an HSM cluster resource, including displayName, freeformTags and definedTags",
              options: [
                optHsmClusterId,
                optDefinedTags,
                {
                  name: "--display-name",
                  description: "A user-friendly name for the HSM resource",
                  args: { name: "display-name" },
                },
                optFreeformTags,
                optIfMatch,
                optForce,
                optWaitForState4,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "upload-partition-certificates",
              description:
                "Uploads the partition owner certificates to the HSM Cluster resource",
              options: [
                optHsmClusterId,
                {
                  name: "--partition-certificate",
                  description:
                    "Base64 encoded (StandardCharsets.UTF_8) Partition Certificate, which gets created when the CSR is signed",
                  args: { name: "partition-certificate" },
                  isRequired: true,
                },
                {
                  name: "--partition-owner-certificate",
                  description:
                    "Base64 encoded (StandardCharsets.UTF_8) Partition Owner Certificate, which is used to help sign the CSR",
                  args: { name: "partition-owner-certificate" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "hsm-partition",
          description: "Dedicated KMS-HSM Partition Management",
          subcommands: [
            {
              name: "get",
              description:
                "Retrieves HSM partition details for the specified HSM cluster",
              options: [
                optHsmClusterId,
                {
                  name: "--hsm-partition-id",
                  description: "The OCID of the HSM Partition",
                  args: { name: "hsm-partition-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Lists all HSM partitions within the specified HSM Cluster resource",
              options: [
                optHsmClusterId,
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                {
                  name: "--lifecycle-state",
                  description:
                    "A filter that returns only resources that match the specified lifecycle state",
                  args: {
                    suggestions: [
                      "ACTIVE",
                      "INACTIVE",
                      "ACTIVATING",
                      "ACTIVATION_REQUIRED",
                      "SCHEDULING_DELETION",
                      "PENDING_DELETION",
                      "DELETING",
                      "DELETED",
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
      ],
    },
    {
      name: "crypto",
      description: "Use the Key Management CLI to manage vaults and keys",
      subcommands: [
        {
          name: "signed-data",
          description: "The response to a request to sign the message",
          subcommands: [
            {
              name: "sign",
              description:
                "Creates a digital signature for a message or message digest by using the private key of a public-private key",
              options: [
                {
                  name: "--message",
                  description:
                    "The base64-encoded binary data object denoting the message or message digest to sign",
                  args: { name: "message" },
                  isRequired: true,
                },
                {
                  name: "--key-id",
                  description: "The OCID of the key used to sign the message",
                  args: { name: "key-id" },
                  isRequired: true,
                },
                {
                  name: "--signing-algorithm",
                  description:
                    "The algorithm to use to sign the message or message digest",
                  args: {
                    suggestions: [
                      "SHA_224_RSA_PKCS_PSS",
                      "SHA_256_RSA_PKCS_PSS",
                      "SHA_384_RSA_PKCS_PSS",
                      "SHA_512_RSA_PKCS_PSS",
                      "SHA_224_RSA_PKCS1_V1_5",
                      "SHA_256_RSA_PKCS1_V1_5",
                      "SHA_384_RSA_PKCS1_V1_5",
                      "SHA_512_RSA_PKCS1_V1_5",
                      "ECDSA_SHA_256",
                      "ECDSA_SHA_384",
                      "ECDSA_SHA_512",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--key-version-id",
                  description:
                    "The OCID of the key version used to sign the message",
                  args: { name: "key-version-id" },
                },
                {
                  name: "--message-type",
                  description:
                    "Denotes whether the value of the message parameter is a raw message or a message digest",
                  args: { suggestions: ["RAW", "DIGEST"] },
                },
                {
                  name: "--logging-context",
                  description:
                    "Information that can be used to provide context for audit logging",
                  args: { name: "json" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "verified-data",
          description: "The response to a request to verify the message",
          subcommands: [
            {
              name: "verify",
              description:
                "Verifies a digital signature that was generated by the Sign operation by using the public key of the same",
              options: [
                {
                  name: "--key-id",
                  description: "The OCID of the key used to sign the message",
                  args: { name: "key-id" },
                  isRequired: true,
                },
                {
                  name: "--key-version-id",
                  description:
                    "The OCID of the key version used to sign the message",
                  args: { name: "key-version-id" },
                  isRequired: true,
                },
                {
                  name: "--signature",
                  description:
                    "The base64-encoded binary data object denoting the cryptographic signature generated for the message",
                  args: { name: "signature" },
                  isRequired: true,
                },
                {
                  name: "--message",
                  description:
                    "The base64-encoded binary data object denoting the message or message digest to sign",
                  args: { name: "message" },
                  isRequired: true,
                },
                {
                  name: "--signing-algorithm",
                  description:
                    "The algorithm to use to sign the message or message digest",
                  args: {
                    suggestions: [
                      "SHA_224_RSA_PKCS_PSS",
                      "SHA_256_RSA_PKCS_PSS",
                      "SHA_384_RSA_PKCS_PSS",
                      "SHA_512_RSA_PKCS_PSS",
                      "SHA_224_RSA_PKCS1_V1_5",
                      "SHA_256_RSA_PKCS1_V1_5",
                      "SHA_384_RSA_PKCS1_V1_5",
                      "SHA_512_RSA_PKCS1_V1_5",
                      "ECDSA_SHA_256",
                      "ECDSA_SHA_384",
                      "ECDSA_SHA_512",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--message-type",
                  description:
                    "Denotes whether the value of the message parameter is a raw message or a message digest",
                  args: { suggestions: ["RAW", "DIGEST"] },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "decrypt",
          description:
            "Decrypts data using the given DecryptDataDetails resource",
          options: [
            {
              name: "--ciphertext",
              description: "The encrypted data to decrypt",
              args: { name: "ciphertext" },
              isRequired: true,
            },
            {
              name: "--key-id",
              description: "The OCID of the key used to encrypt the ciphertext",
              args: { name: "key-id" },
              isRequired: true,
            },
            optAssociatedData,
            optLoggingContext,
            {
              name: "--key-version-id",
              description:
                "The OCID of the key version used to encrypt the ciphertext",
              args: { name: "key-version-id" },
            },
            {
              name: "--encryption-algorithm",
              description:
                "The encryption algorithm to use to encrypt or decrypt data with a customer-managed key",
              args: {
                suggestions: [
                  "AES_256_GCM",
                  "RSA_OAEP_SHA_1",
                  "RSA_OAEP_SHA_256",
                ],
              },
            },
            optFromJson,
          ],
        },
        {
          name: "encrypt",
          description:
            "Encrypts data using the given EncryptDataDetails resource",
          options: [
            {
              name: "--key-id",
              description: "The OCID of the key to encrypt with",
              args: { name: "key-id" },
              isRequired: true,
            },
            {
              name: "--plaintext",
              description: "The plaintext data to encrypt",
              args: { name: "plaintext" },
              isRequired: true,
            },
            optAssociatedData,
            optLoggingContext,
            {
              name: "--key-version-id",
              description:
                "The OCID of the key version used to encrypt the ciphertext",
              args: { name: "key-version-id" },
            },
            {
              name: "--encryption-algorithm",
              description:
                "The encryption algorithm to use to encrypt and decrypt data with a customer-managed key",
              args: {
                suggestions: [
                  "AES_256_GCM",
                  "RSA_OAEP_SHA_1",
                  "RSA_OAEP_SHA_256",
                ],
              },
            },
            optFromJson,
          ],
        },
        {
          name: "generate-data-encryption-key",
          description:
            "Generates a key that you can use to encrypt or decrypt data",
          options: [
            {
              name: "--include-plaintext-key",
              description:
                "If true, the generated key is also returned unencrypted",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--key-id",
              description:
                "The OCID of the master encryption key to encrypt the generated data encryption key with",
              args: { name: "key-id" },
              isRequired: true,
            },
            optKeyShape,
            optAssociatedData,
            optLoggingContext,
            optFromJson,
          ],
        },
        {
          name: "key",
          description: "The response to a request to export key material",
          subcommands: [
            {
              name: "export",
              description:
                "Exports a specific version of a master encryption key according to the details of the request",
              options: [
                {
                  name: "--key-id",
                  description:
                    "The OCID of the master encryption key associated with the key version you want to export",
                  args: { name: "key-id" },
                  isRequired: true,
                },
                {
                  name: "--algorithm",
                  description:
                    "The encryption algorithm to use to encrypt exportable key material from a software-backed key",
                  args: {
                    suggestions: ["RSA_OAEP_AES_SHA256", "RSA_OAEP_SHA256"],
                  },
                  isRequired: true,
                },
                {
                  name: "--public-key",
                  description:
                    "The PEM format of the 2048-bit, 3072-bit, or 4096-bit RSA wrapping key in your possession that you want",
                  args: { name: "public-key" },
                  isRequired: true,
                },
                {
                  name: "--key-version-id",
                  description: "The OCID of the specific key version to export",
                  args: { name: "key-version-id" },
                },
                optLoggingContext,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "management",
      description: "Use the Key Management CLI to manage vaults and keys",
      subcommands: [
        {
          name: "wrapping-key",
          description: "The public RSA wrapping key associated with the vault",
          subcommands: [
            {
              name: "get",
              description:
                "Gets details about the public RSA wrapping key associated with the vault in the endpoint",
              options: [optFromJson],
            },
          ],
        },
        {
          name: "key-version",
          description: "The details of the KeyVersion associated with the Key",
          subcommands: [
            {
              name: "create",
              description:
                "Generates a new KeyVersion resource that provides new cryptographic material for a master encryption key",
              options: [
                optKeyId,
                {
                  name: "--external-key-version-id",
                  description:
                    "Key version ID associated with the external key",
                  args: { name: "external-key-version-id" },
                },
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets information about the specified key version",
              options: [optKeyId, optKeyVersionId, optFromJson],
            },
            {
              name: "import",
              description:
                "Imports AES key material to create a new key version and then rotate the key to begin using the new key",
              options: [
                optKeyId,
                {
                  name: "--wrapped-import-key",
                  args: { name: "json" },
                  isRequired: true,
                },
                optDefinedTags,
                optFreeformTags,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Lists all KeyVersion resources for the specified master encryption key",
              options: [
                optKeyId,
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
              name: "cancel-deletion",
              description:
                "Cancels the scheduled deletion of the specified key version",
              options: [
                optKeyId,
                optKeyVersionId,
                optIfMatch,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "schedule-deletion",
              description:
                "Schedules the deletion of the specified key version",
              options: [
                optKeyId,
                optKeyVersionId,
                {
                  name: "--time-of-deletion",
                  description:
                    "An optional property to indicate when to delete the key version, expressed in RFC 3339 timestamp format",
                  args: { name: "datetime" },
                },
                optIfMatch,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "schedule-key-version-deletion",
              description:
                "Schedules the deletion of the specified key version",
              options: [
                optKeyId,
                optKeyVersionId,
                {
                  name: "--time-of-deletion",
                  description:
                    "An optional property to indicate when to delete the key version, expressed in RFC 3339 timestamp format",
                  args: { name: "datetime" },
                },
                optIfMatch,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "cancel-key-version-deletion",
              description:
                "Cancels the scheduled deletion of the specified key version",
              options: [
                optKeyId,
                optKeyVersionId,
                optIfMatch,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "key",
          description:
            "The logical entities that represent one or more key versions, each of which contains cryptographic material",
          subcommands: [
            {
              name: "backup",
              description:
                "Backs up an encrypted file that contains all key versions and metadata of the specified key so that you can",
              options: [
                {
                  name: "--key-id",
                  args: { name: "key-id" },
                  isRequired: true,
                },
                optNamespace,
                optBucketName,
                optObjectName,
                optUri,
                optIfMatch2,
                {
                  name: "--wait-for-state",
                  description:
                    "Wait until the resource or work request reaches the given state",
                  args: { name: "wait-for-state" },
                },
                {
                  name: "--max-wait-seconds",
                  description:
                    "Maximum time to wait for the --wait-for-state state (default 1200)",
                  args: { name: "max-wait-seconds" },
                },
                {
                  name: "--wait-interval-seconds",
                  description:
                    "Check interval for --wait-for-state in seconds (default 30)",
                  args: { name: "wait-interval-seconds" },
                },
                optFromJson,
              ],
            },
            {
              name: "change-compartment",
              description:
                "Moves a key into a different compartment within the same tenancy",
              options: [
                optKeyId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment that you want to move the key to",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates a new master encryption key",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment where you want to create the master encryption key",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "A user-friendly name for the key",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                optKeyShape,
                optDefinedTags,
                optFreeformTags,
                optIsAutoRotationEnabled,
                optAutoKeyRotationDetails,
                {
                  name: "--protection-mode",
                  description:
                    "The key's protection mode indicates how the key persists and where cryptographic operations that use the key",
                  args: { suggestions: ["HSM", "SOFTWARE", "EXTERNAL"] },
                },
                { name: "--external-key-reference", args: { name: "json" } },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "disable",
              description:
                "Disables a master encryption key so it can no longer be used for encryption, decryption",
              options: [
                optKeyId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "enable",
              description:
                "Enables a master encryption key so it can be used for encryption, decryption",
              options: [
                optKeyId,
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
                "Gets information about the specified master encryption key",
              options: [optKeyId, optFromJson],
            },
            {
              name: "import",
              description: "Imports AES and RSA keys to create a new key",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment that contains this key",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "A user-friendly name for the key",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                optKeyShape,
                {
                  name: "--wrapped-import-key",
                  args: { name: "json" },
                  isRequired: true,
                },
                optIsAutoRotationEnabled,
                optAutoKeyRotationDetails,
                optDefinedTags2,
                {
                  name: "--freeform-tags",
                  description:
                    "Simple key-value pair that is applied without any predefined name, type, or scope",
                  args: { name: "json" },
                },
                {
                  name: "--protection-mode",
                  description:
                    "The key's protection mode indicates how the key persists and where cryptographic operations that use the key",
                  args: { suggestions: ["HSM", "SOFTWARE"] },
                },
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Lists the master encryption keys in the specified vault and compartment",
              options: [
                optCompartmentId,
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                {
                  name: "--protection-mode",
                  description:
                    "A key's protection mode indicates how the key persists and where cryptographic operations that use the key",
                  args: { suggestions: ["HSM", "SOFTWARE", "EXTERNAL"] },
                },
                {
                  name: "--algorithm",
                  description:
                    "The algorithm used by a key's key versions to encrypt or decrypt data",
                  args: { suggestions: ["AES", "RSA", "ECDSA"] },
                },
                {
                  name: "--length",
                  description:
                    "The length of the key in bytes, expressed as an integer",
                  args: { name: "integer" },
                },
                {
                  name: "--curve-id",
                  description:
                    "The curve ID of the keys. (This pertains only to ECDSA keys.)",
                  args: {
                    suggestions: ["NIST_P256", "NIST_P384", "NIST_P521"],
                  },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Updates the properties of a master encryption key",
              options: [
                optKeyId,
                optIsAutoRotationEnabled,
                optAutoKeyRotationDetails,
                optDefinedTags,
                {
                  name: "--display-name",
                  description: "A user-friendly name for the key",
                  args: { name: "display-name" },
                },
                optFreeformTags,
                optIfMatch,
                optForce,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "schedule-deletion",
              description: "Schedules the deletion of the specified key",
              options: [
                optKeyId,
                {
                  name: "--time-of-deletion",
                  description:
                    "An optional property to indicate when to delete the vault, expressed in RFC 3339 timestamp format",
                  args: { name: "datetime" },
                },
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "cancel-deletion",
              description:
                "Cancels the scheduled deletion of the specified key",
              options: [
                optKeyId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "restore",
              description:
                "Restores the specified key to the specified vault from an Oracle Cloud Infrastructure Object Storage location",
              options: [
                optNamespace,
                optBucketName,
                optObjectName,
                optUri,
                optIfMatch2,
                optFromJson,
              ],
            },
            {
              name: "restore-from-file",
              description:
                "Restores the specified key to the specified vault, based on information in the backup file provided",
              options: [
                {
                  name: "--content-length",
                  description: "The content length of the body",
                  args: { name: "integer" },
                },
                optIfMatch,
                {
                  name: "--content-md5",
                  description:
                    "The base64-encoded MD5 hash value of the body, as described in RFC 2616, section 14.15",
                  args: { name: "content-md5" },
                },
                {
                  name: "--restore-key-from-file-location",
                  description:
                    "The file location of the encrypted payload to upload to restore the key",
                  args: { name: "restore-key-from-file-location" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "replication-status-details",
          description:
            "Details of replication status across all replica regions",
          subcommands: [
            {
              name: "get-replication-status",
              description:
                "When a vault has a replica, each operation on the vault or its resources, such as keys",
              options: [
                {
                  name: "--replication-id",
                  description:
                    "ReplicationId associated with an operation on a resource",
                  args: { name: "replication-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "vault",
          description:
            "The logical entity where the Vault service creates and durably stores keys",
          subcommands: [
            {
              name: "backup",
              description:
                "Backs up an encrypted file that contains all the metadata of a vault so that you can restore the vault later",
              options: [
                {
                  name: "--vault-id",
                  args: { name: "vault-id" },
                  isRequired: true,
                },
                optNamespace,
                optBucketName,
                optObjectName,
                optUri,
                optIfMatch2,
                {
                  name: "--wait-for-state",
                  description:
                    "Wait until the resource or work request reaches the given state",
                  args: { name: "wait-for-state" },
                },
                {
                  name: "--max-wait-seconds",
                  description:
                    "Maximum time to wait for the --wait-for-state state (default 1200)",
                  args: { name: "max-wait-seconds" },
                },
                {
                  name: "--wait-interval-seconds",
                  description:
                    "Check interval for --wait-for-state in seconds (default 30)",
                  args: { name: "wait-interval-seconds" },
                },
                {
                  name: "--is-include-keys",
                  args: { name: "is-include-keys" },
                },
                optFromJson,
              ],
            },
            {
              name: "change-compartment",
              description:
                "Moves a vault into a different compartment within the same tenancy",
              options: [
                optVaultId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment to move the vault to",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates a new vault",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment where you want to create this vault",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "A user-friendly name for the vault",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--vault-type",
                  description: "The type of vault to create",
                  args: {
                    suggestions: ["VIRTUAL_PRIVATE", "DEFAULT", "EXTERNAL"],
                  },
                  isRequired: true,
                },
                optDefinedTags,
                optFreeformTags,
                {
                  name: "--external-key-manager-metadata",
                  args: { name: "json" },
                },
                optWaitForState3,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-vault-replica",
              description:
                "Creates a replica for the vault in another region in the same realm",
              options: [
                optVaultId,
                {
                  name: "--replica-region",
                  description:
                    "The region in the realm to which the vault need to be replicated",
                  args: { name: "replica-region" },
                  isRequired: true,
                },
                { name: "--replica-vault-metadata", args: { name: "json" } },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "delete-vault-replica",
              description: "Deletes a vault replica",
              options: [
                optVaultId,
                {
                  name: "--replica-region",
                  description:
                    "The region in the realm on which the replica should be deleted",
                  args: { name: "replica-region" },
                  isRequired: true,
                },
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "Gets the specified vault's configuration information",
              options: [optVaultId, optFromJson],
            },
            {
              name: "list-vault-replicas",
              description: "Lists the replicas for a vault",
              options: [
                optVaultId,
                optIfMatch,
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
              name: "list",
              description: "Lists the vaults in the specified compartment",
              options: [
                optCompartmentId,
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
              description: "Updates the properties of a vault",
              options: [
                optVaultId,
                optDefinedTags,
                {
                  name: "--display-name",
                  description: "A user-friendly name for the vault",
                  args: { name: "display-name" },
                },
                optFreeformTags,
                optIfMatch,
                optForce,
                optWaitForState3,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "cancel-deletion",
              description:
                "Cancels the scheduled deletion of the specified vault",
              options: [
                optVaultId,
                optIfMatch,
                optWaitForState3,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "schedule-deletion",
              description: "Schedules the deletion of the specified vault",
              options: [
                optVaultId,
                {
                  name: "--time-of-deletion",
                  description:
                    "An optional property indicating when to delete the vault, expressed in RFC 3339 timestamp format",
                  args: { name: "datetime" },
                },
                optIfMatch,
                optWaitForState3,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "usage",
              description:
                "The details of the number of Keys and KeyVersions usage in a Vault",
              subcommands: [
                {
                  name: "get",
                  description:
                    "Gets the count of keys and key versions in the specified vault to calculate usage against service limits",
                  options: [optVaultId, optFromJson],
                },
              ],
            },
            {
              name: "restore",
              description:
                "Restores a vault from an encrypted backup file stored in Oracle Cloud Infrastructure Object Storage",
              options: [
                {
                  name: "--compartment-id",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optNamespace,
                optBucketName,
                optObjectName,
                optUri,
                optIfMatch2,
                optFromJson,
              ],
            },
            {
              name: "restore-from-file",
              description: "Restores a vault from an encrypted backup file",
              options: [
                optCompartmentId,
                {
                  name: "--content-length",
                  description: "The content length of the body",
                  args: { name: "integer" },
                },
                optIfMatch,
                {
                  name: "--content-md5",
                  description:
                    "The base64-encoded MD5 hash value of the body, as described in RFC 2616, section 14.15",
                  args: { name: "content-md5" },
                },
                {
                  name: "--restore-vault-from-file-location",
                  description:
                    "The file location which contains the encrypted payload to upload to restore the vault",
                  args: { name: "restore-vault-from-file-location" },
                  isRequired: true,
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
