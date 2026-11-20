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
  description: "Free-form tags for this resource",
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
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only resources that match the given lifecycle state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
};
const optSystemTags: Fig.Option = {
  name: "--system-tags",
  description: "System tags for this resource",
  args: { name: "json" },
};
const optOracleDbAwsKeyId: Fig.Option = {
  name: "--oracle-db-aws-key-id",
  description: "The OCID of the Oracle DB AWS Key resource",
  args: { name: "oracle-db-aws-key-id" },
  isRequired: true,
};
const optOracleDbAzureVaultId: Fig.Option = {
  name: "--oracle-db-azure-vault-id",
  description: "The OCID of the Oracle DB Azure Vault resource",
  args: { name: "oracle-db-azure-vault-id" },
  isRequired: true,
};
const optOracleDbGcpKeyRingId: Fig.Option = {
  name: "--oracle-db-gcp-key-ring-id",
  description: "The OCID of the Oracle DB GCP Key-Ring resource",
  args: { name: "oracle-db-gcp-key-ring-id" },
  isRequired: true,
};
const optOracleDbAwsIdentityConnectorId: Fig.Option = {
  name: "--oracle-db-aws-identity-connector-id",
  description: "The OCID of the Oracle DB AWS Identity Connector resource",
  args: { name: "oracle-db-aws-identity-connector-id" },
  isRequired: true,
};
const optOracleDbAwsKeyPoolId: Fig.Option = {
  name: "--oracle-db-aws-key-pool-id",
  description: "The OCID of the Oracle DB AWS Key Pool resource",
  args: { name: "oracle-db-aws-key-pool-id" },
  isRequired: true,
};
const optOracleDbAzureConnectorId: Fig.Option = {
  name: "--oracle-db-azure-connector-id",
  description:
    "A filter to return Oracle DB Azure Identity Connector resources",
  args: { name: "oracle-db-azure-connector-id" },
};
const optOracleDbAzureConnectorId2: Fig.Option = {
  name: "--oracle-db-azure-connector-id",
  description: "The OCID of the Oracle DB Azure Connector resource",
  args: { name: "oracle-db-azure-connector-id" },
  isRequired: true,
};
const optOracleDbAzureVaultAssociationId: Fig.Option = {
  name: "--oracle-db-azure-vault-association-id",
  description: "The OCID of the Oracle DB Azure Vault Association resource",
  args: { name: "oracle-db-azure-vault-association-id" },
  isRequired: true,
};
const optOracleDbGcpIdentityConnectorId: Fig.Option = {
  name: "--oracle-db-gcp-identity-connector-id",
  description: "The OCID of the Oracle DB GCP Identity Configuration Resource",
  args: { name: "oracle-db-gcp-identity-connector-id" },
  isRequired: true,
};
const optMultiCloudResourceDiscoveryId: Fig.Option = {
  name: "--multi-cloud-resource-discovery-id",
  description: "The OCID of the Multicloud Discovery Resource",
  args: { name: "multi-cloud-resource-discovery-id" },
  isRequired: true,
};
const optOracleDbAzureBlobContainerId: Fig.Option = {
  name: "--oracle-db-azure-blob-container-id",
  description: "The OCID of the Oracle DB Azure Blob Container resource",
  args: { name: "oracle-db-azure-blob-container-id" },
  isRequired: true,
};
const optOracleDbAzureBlobMountId: Fig.Option = {
  name: "--oracle-db-azure-blob-mount-id",
  description: "The OCID of the Oracle DB Azure Blob Mount resource",
  args: { name: "oracle-db-azure-blob-mount-id" },
  isRequired: true,
};
const optPrivateEndpointDnsAlias: Fig.Option = {
  name: "--private-endpoint-dns-alias",
  description: "Private endpoint's DNS alias",
  args: { name: "private-endpoint-dns-alias" },
};
const optPrivateEndpointIpAddress: Fig.Option = {
  name: "--private-endpoint-ip-address",
  description: "Private endpoint IP",
  args: { name: "private-endpoint-ip-address" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optAwsAccountId: Fig.Option = {
  name: "--aws-account-id",
  description: "AWS Account ID",
  args: { name: "aws-account-id" },
};
const optOracleDbAzureVaultId2: Fig.Option = {
  name: "--oracle-db-azure-vault-id",
  description:
    "A filter to return Oracle DB Azure Vault resources that match the specified OCID of the Oracle DB Azure Vault",
  args: { name: "oracle-db-azure-vault-id" },
};
const completionSpec: Fig.Spec = {
  name: "dbmulticloud",
  description: "Oracle Database MultiCloud Data Plane Integration",
  subcommands: [
    {
      name: "oracle-db-aws-identity-connector",
      description: "Oracle DB AWS Connector resource object",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Oracle DB AWS Identity Connector resource into a different compartment",
          options: [
            optOracleDbAwsIdentityConnectorId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment to contain the Oracle DB AWS Identity Connector resource",
              args: { name: "compartment-id" },
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
          description: "Creates Oracle DB AWS Identity Connector resource",
          options: [
            {
              name: "--display-name",
              description:
                "Oracle DB Google AWS Identity Connector resource name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains Oracle DB AWS Identity Connector resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "The OCID of the AWS VM Cluster resource",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--oidc-scope",
              description: "OCI IAM Domain scope for issuer URL",
              args: { name: "oidc-scope" },
              isRequired: true,
            },
            {
              name: "--issuer-url",
              description: "OIDC token issuer Url",
              args: { name: "issuer-url" },
              isRequired: true,
            },
            {
              name: "--service-role-details",
              description:
                "Service role details and respective Amazon resource nam of Role",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--aws-location",
              description: "AWS resource location",
              args: { name: "aws-location" },
              isRequired: true,
            },
            {
              name: "--aws-sts-private-endpoint",
              description: "Private endpoint of AWS Security Token Service",
              args: { name: "aws-sts-private-endpoint" },
            },
            optAwsAccountId,
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
          description: "Deletes a Oracle DB AWS Identity Connector resource",
          options: [
            optOracleDbAwsIdentityConnectorId,
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
            "Retrieves detailed information about a Oracle DB AWS Identity Connector resource by specifying its unique",
          options: [optOracleDbAwsIdentityConnectorId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all Oracle DB AWS Identity Connectors based on the specified filters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB AWS Identity Connector Resource that match the given display name",
              args: { name: "display-name" },
            },
            optLifecycleState,
            {
              name: "--resource-id",
              description:
                "A filter to return Oracle DB Identity Connector resource that match the given resource OCID",
              args: { name: "resource-id" },
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
          name: "refresh",
          description: "Refreshes the Oracle DB AWS Connector resource",
          options: [
            optOracleDbAwsIdentityConnectorId,
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
            "Modifies the existing Oracle DB AWS Identity Connector resource for a given OCID",
          options: [
            optOracleDbAwsIdentityConnectorId,
            {
              name: "--display-name",
              description:
                "Oracle DB Google AWS Identity Connector resource name",
              args: { name: "display-name" },
            },
            {
              name: "--resource-id",
              description: "The OCID of the AWS VM Cluster resource",
              args: { name: "resource-id" },
            },
            {
              name: "--oidc-scope",
              description: "IAM Domain scope for issuer URL",
              args: { name: "oidc-scope" },
            },
            {
              name: "--issuer-url",
              description: "OIDC token issuer Url",
              args: { name: "issuer-url" },
            },
            {
              name: "--service-role-details",
              description:
                "Service role details and respective Amazon resource nam of Role",
              args: { name: "json" },
            },
            {
              name: "--aws-location",
              description: "AWS resource Location",
              args: { name: "aws-location" },
            },
            {
              name: "--aws-sts-private-endpoint",
              description: "Private endpoint of AWS Security Token Service",
              args: { name: "aws-sts-private-endpoint" },
            },
            optAwsAccountId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oracle-db-aws-key",
      description: "Oracle DB AWS Key Resource object",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the AWS Key resource into a different compartment",
          options: [
            optOracleDbAwsKeyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment to contain the Oracle DB AWS Key resource",
              args: { name: "compartment-id" },
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
          description: "Create DB AWS Key resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains Oracle DB AWS Key resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--oracle-db-connector-id",
              description: "The OCID of the Oracle DB Connector resource",
              args: { name: "oracle-db-connector-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Oracle DB AWS Key resource name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--oracle-db-aws-key-pool-id",
              description: "The OCID of the Oracle DB AWS Key Pool resource",
              args: { name: "oracle-db-aws-key-pool-id" },
            },
            {
              name: "--aws-key-arn",
              description: "Amazon resource name of AWS Key",
              args: { name: "aws-key-arn" },
            },
            optAwsAccountId,
            {
              name: "--type",
              description: "AWS Key resource type",
              args: { name: "type" },
            },
            {
              name: "--location",
              description: "AWS Key resource Location",
              args: { name: "location" },
            },
            {
              name: "--is-aws-key-enabled",
              description:
                "The Oracle AWS Key resource is enabled or disabled at AWS",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--properties",
              description: "AWS Key resource's properties",
              args: { name: "json" },
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
          description: "Delete AWS Key resource",
          options: [
            optOracleDbAwsKeyId,
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
            "Retrieves detailed information about a Oracle AWS Key resource by specifying its unique resource OCID",
          options: [
            optOracleDbAwsKeyId,
            optLimit,
            optPage,
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists all DB AWS Keys based on the specified filters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB AWS Key Resource that match the given display name",
              args: { name: "display-name" },
            },
            {
              name: "--oracle-db-aws-key-id",
              description:
                "A filter to return Oracle DB AWS Identity Connector Resource that match the given",
              args: { name: "oracle-db-aws-key-id" },
            },
            optLifecycleState,
            {
              name: "--oracle-db-aws-connector-id",
              description:
                "A filter to return Oracle DB AWS Identity Connector resources that match the specified OCID of the Oracle DB",
              args: { name: "oracle-db-aws-connector-id" },
            },
            {
              name: "--oracle-db-aws-key-pool-id",
              description:
                "A filter to return only resources that match the given OCID](/Content/General/Concepts/identifiers.htm)",
              args: { name: "oracle-db-aws-key-pool-id" },
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
          name: "refresh",
          description: "Refreshes Oracle AWS Key resource",
          options: [
            optOracleDbAwsKeyId,
            {
              name: "--oracle-db-aws-connector-id",
              description: "The OCID of the Oracle DB AWS Connector resource",
              args: { name: "oracle-db-aws-connector-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "replicate",
          description: "Replicate Oracle AWS Key resource to target region",
          options: [
            optOracleDbAwsKeyId,
            {
              name: "--target-region",
              description:
                "The Destination region where Oracle AWS Key resource will replicate",
              args: { name: "target-region" },
              isRequired: true,
            },
            {
              name: "--action",
              description: "Action for replicate Resource",
              args: { suggestions: ["CREATE", "DELETE"] },
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
            "Modifies the existing Oracle AWS Key Details for a given OCID",
          options: [
            optOracleDbAwsKeyId,
            {
              name: "--display-name",
              description: "Oracle DB AWS Key resource name",
              args: { name: "display-name" },
            },
            {
              name: "--oracle-db-aws-key-pool-id",
              description: "The OCID of the Oracle DB AWS Key Pool resource",
              args: { name: "oracle-db-aws-key-pool-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--is-force-delete-from-key-pool",
              description:
                "If true, removes the key from its key pool even when it is currently in use",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oracle-db-aws-key-pool",
      description:
        "Oracle DB AWS Key Pool is a resource that represents a collection of AWS KMS keys",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the AWS Key Pool resource into a different compartment",
          options: [
            optOracleDbAwsKeyPoolId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment to contain the Oracle DB AWS Key Pool resource",
              args: { name: "compartment-id" },
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
          description: "Create DB AWS Key Pool resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The Compartment OCID that contains this Oracle DB AWS Pool resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The display name of the Oracle DB AWS key pool resource",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--is-reuse-allowed",
              description:
                "Indicates whether AWS KMS keys in this key pool can be reused",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-multi-region-key-pool",
              description:
                "Indicates whether this key pool accepts only multi-region AWS KMS keys",
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
          description: "Delete AWS Key Pool resource",
          options: [
            optOracleDbAwsKeyPoolId,
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
            "Retrieves detailed information about a Oracle AWS Key Pool resource by specifying its unique resource OCID",
          options: [optOracleDbAwsKeyPoolId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all DB AWS Key Pools based on the specified filters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB AWS Key Pool Resource that match the given display name",
              args: { name: "display-name" },
            },
            {
              name: "--oracle-db-aws-key-pool-id",
              description:
                "A filter to return only resources that match the given OCID](/Content/General/Concepts/identifiers.htm)",
              args: { name: "oracle-db-aws-key-pool-id" },
            },
            optLifecycleState,
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
          name: "replicate",
          description:
            "Replicate Oracle AWS Key Pool resource to target region",
          options: [
            optOracleDbAwsKeyPoolId,
            {
              name: "--target-region",
              description:
                "The destination OCI public region name (e.g., us-phoenix-1 or us-ashburn-1) where the Oracle DB AWS Key Pool",
              args: { name: "target-region" },
              isRequired: true,
            },
            {
              name: "--action",
              description:
                "The replication action to perform for the Oracle DB AWS key pool resource",
              args: { suggestions: ["CREATE", "DELETE"] },
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
            "Modifies the existing Oracle AWS Key Pool Details for a given OCID",
          options: [
            optOracleDbAwsKeyPoolId,
            {
              name: "--display-name",
              description:
                "The display name of the Oracle DB AWS key pool resource",
              args: { name: "display-name" },
            },
            {
              name: "--is-reuse-allowed",
              description:
                "Indicates whether AWS KMS keys in this key pool can be reused",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-multi-region-key-pool",
              description:
                "Indicates whether this key pool accepts only multi-region AWS KMS keys",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oracle-db-gcp-identity-connector",
      description:
        "This resource is used to create and manage a GCP Identity Connector for Oracle Database running on Oracle",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Oracle DB GCP Identity Connector resource into a different compartment",
          options: [
            optOracleDbGcpIdentityConnectorId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the Oracle DB GCP Identity Connector resource",
              args: { name: "compartment-id" },
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
          description: "Creates Oracle DB GCP Identity Connector resource",
          options: [
            {
              name: "--display-name",
              description:
                "Oracle DB Google GCP Identity Connector resource name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the Oracle DB GCP Identity Connector resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--issuer-url",
              description: "OIDC token issuer Url",
              args: { name: "issuer-url" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project id of the customer project",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "The OCID of the GCP VM Cluster resource",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--gcp-location",
              description: "GCP Location",
              args: { name: "gcp-location" },
              isRequired: true,
            },
            {
              name: "--gcp-workload-identity-pool-id",
              description: "The ID of the cloud GCP Workload Identity Pool",
              args: { name: "gcp-workload-identity-pool-id" },
              isRequired: true,
            },
            {
              name: "--gcp-workload-identity-provider-id",
              description: "The ID of the GCP Workload Identity Provider",
              args: { name: "gcp-workload-identity-provider-id" },
              isRequired: true,
            },
            {
              name: "--gcp-resource-service-agent-id",
              description: "The ID of the GCP resource service agent",
              args: { name: "gcp-resource-service-agent-id" },
              isRequired: true,
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
            "Deletes the Oracle DB GCP Identity Connector resource and removes the associated connector from the database",
          options: [
            optOracleDbGcpIdentityConnectorId,
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
            "Retrieves the Oracle DB GCP Identity Connector for a specified resource OCID",
          options: [optOracleDbGcpIdentityConnectorId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists all Oracle DB GCP Identity Connectors based on the specified filters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB GCP Identity Connector resources that match the specified display name",
              args: { name: "display-name" },
            },
            {
              name: "--resource-id",
              description:
                "A filter to return Oracle DB Identity Connector resource that match the given resource OCID",
              args: { name: "resource-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
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
          name: "refresh",
          description: "Refreshes the Oracle DB GCP Connector resource",
          options: [
            optOracleDbGcpIdentityConnectorId,
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
            "Modifies the existing Oracle DB GCP Identity Connector resource for a given OCID",
          options: [
            optOracleDbGcpIdentityConnectorId,
            {
              name: "--display-name",
              description:
                "Oracle DB Google GCP Identity Connector resource name",
              args: { name: "display-name" },
            },
            {
              name: "--issuer-url",
              description: "OIDC token issuer Url",
              args: { name: "issuer-url" },
            },
            {
              name: "--project-id",
              description: "Project ID of the customer project",
              args: { name: "project-id" },
            },
            {
              name: "--resource-id",
              description: "The OCID of the GCP VM Cluster resource",
              args: { name: "resource-id" },
            },
            {
              name: "--gcp-location",
              description: "GCP Location",
              args: { name: "gcp-location" },
            },
            {
              name: "--gcp-workload-identity-pool-id",
              description: "The ID of the cloud GCP Workload Identity Pool",
              args: { name: "gcp-workload-identity-pool-id" },
            },
            {
              name: "--gcp-workload-identity-provider-id",
              description: "The ID of the GCP Workload Identity Provider",
              args: { name: "gcp-workload-identity-provider-id" },
            },
            {
              name: "--gcp-resource-service-agent-id",
              description: "The ID of the GCP resource service agent",
              args: { name: "gcp-resource-service-agent-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oracle-db-gcp-key-ring",
      description: "Oracle DB GCP Key Ring resource object",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the GCP Key Ring resource into a different compartment",
          options: [
            optOracleDbGcpKeyRingId,
            {
              name: "--compartment-id",
              description:
                "The compartment OCID where the Oracle DB GCP Key Ring resource resides",
              args: { name: "compartment-id" },
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
            "Creates DB GCP Key Rings based on the provided information and retrieves the associated keys",
          options: [
            {
              name: "--compartment-id",
              description:
                "The compartment OCID where the Oracle DB GCP Key Ring resource resides",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--oracle-db-connector-id",
              description:
                "The OCID of the compartment where the Oracle DB GCP Identity Connector resource resides",
              args: { name: "oracle-db-connector-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Display name of DB GCP Key Ring resource",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--gcp-key-ring-id",
              description: "GCP Key Ring ID",
              args: { name: "gcp-key-ring-id" },
            },
            {
              name: "--type",
              description: "Oracle DB GCP Key Ring resource Type",
              args: { name: "type" },
            },
            {
              name: "--location",
              description: "Location of the GCP Key Ring resource",
              args: { name: "location" },
            },
            {
              name: "--properties",
              description: "Oracle DB GCP Key Ring resource's properties",
              args: { name: "json" },
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
          description: "Deletes the GCP Key Ring and its associated metadata",
          options: [
            optOracleDbGcpKeyRingId,
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
            "Retrieves the Oracle GCP Key Ring details using a specific Container resource OCID",
          options: [
            optOracleDbGcpKeyRingId,
            optLimit,
            optPage,
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the all DB GCP Key Rings based on filters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB GCP Key Ring resources that match the specified display name",
              args: { name: "display-name" },
            },
            {
              name: "--oracle-db-gcp-key-ring-id",
              description: "A filter to return Oracle DB GCP Key Rings",
              args: { name: "oracle-db-gcp-key-ring-id" },
            },
            optLifecycleState,
            {
              name: "--oracle-db-gcp-connector-id",
              description:
                "A filter to return Oracle DB GCP Identity Connector resources that match the specified resource OCID",
              args: { name: "oracle-db-gcp-connector-id" },
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
          name: "refresh",
          description: "Refreshes Oracle GCP Key Ring details from the backend",
          options: [
            optOracleDbGcpKeyRingId,
            {
              name: "--oracle-db-gcp-connector-id",
              description: "The OCID of the Oracle DB GCP Connector resource",
              args: { name: "oracle-db-gcp-connector-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "replicate",
          description: "Replicate Oracle GCP Key Ring details to target region",
          options: [
            optOracleDbGcpKeyRingId,
            {
              name: "--target-region",
              description:
                "The Destination region where Oracle GCP Keyring resource will replicate",
              args: { name: "target-region" },
              isRequired: true,
            },
            {
              name: "--action",
              description: "Action for replicate Resource",
              args: { suggestions: ["CREATE", "DELETE"] },
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
            "Modifies the existing Oracle GCP Key Ring Details for a given OCID",
          options: [
            optOracleDbGcpKeyRingId,
            {
              name: "--display-name",
              description: "Display name of DB GCP Key Ring resource",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oracle-db-gcp-key",
      description: "Oracle DB Google Cloud Key resource",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves Oracle DB Google Cloud Key details using a specific resource OCID",
          options: [
            {
              name: "--oracle-db-gcp-key-id",
              description:
                "The OCID of the Oracle DB Google Cloud Key resource",
              args: { name: "oracle-db-gcp-key-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all Oracle DB Google Cloud Keys based on the specified filters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB Google Cloud Key resources that match the specified display name",
              args: { name: "display-name" },
            },
            {
              name: "--oracle-db-gcp-key-ring-id",
              description: "A filter to return Oracle DB GCP Key Rings",
              args: { name: "oracle-db-gcp-key-ring-id" },
            },
            {
              name: "--oracle-db-gcp-key-id",
              description:
                "A filter to return Oracle DB Google Cloud Key resources",
              args: { name: "oracle-db-gcp-key-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
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
      name: "multi-cloud-resource-discovery",
      description:
        "<b>Microsoft Azure:</b> <br> <b>Oracle Azure Connector Resource:</b>:&nbsp;&nbsp;The Oracle Azure Connector",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Multicloud Resource Discovery resource into a different compartment",
          options: [
            optMultiCloudResourceDiscoveryId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment that contains Multicloud Resource Discovery resource",
              args: { name: "compartment-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
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
            "Discovers Multicloud Resource and their associated resources based on the information provided",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains Multicloud Resource Discovery resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "Display name of the Multicloud Resource Discovery resource",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--oracle-db-connector-id",
              description: "The OCID of the Oracle DB Connector resource",
              args: { name: "oracle-db-connector-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource Type to discover",
              args: { name: "resource-type" },
              isRequired: true,
            },
            {
              name: "--resources-filter",
              description:
                "Discover resource using attributes as key-value pair",
              args: { name: "json" },
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
          description:
            "Deletes the Multicloud Resource Discovery resource and removes its associated metadata from Oracle Cloud",
          options: [
            optMultiCloudResourceDiscoveryId,
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
            "Retrieves detailed information about a Multicloud discovered resource by specifying its unique resource OCID",
          options: [
            optMultiCloudResourceDiscoveryId,
            optLimit,
            optPage,
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all Multicloud Resource Discovery resources based on the specified filters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB Multicloud Discovery resources that match the specified display name",
              args: { name: "display-name" },
            },
            {
              name: "--multi-cloud-resource-discovery-id",
              description: "The OCID of the Multicloud Discovery resource",
              args: { name: "multi-cloud-resource-discovery-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "SUCCEEDED",
                  "UPDATING",
                  "CANCELING",
                  "CANCELED",
                  "FAILED",
                  "NEEDS_ATTENTION",
                ],
              },
            },
            optOracleDbAzureConnectorId,
            {
              name: "--resource-type",
              description: "The type of Multicloud Resource",
              args: {
                suggestions: ["VAULTS", "STORAGE", "GCP_KEY_RINGS", "AWS_KEYS"],
              },
            },
            {
              name: "--resources-filter",
              description:
                "Specifies the type(s) of resources to discover in the target cloud provider",
              args: { name: "resources-filter" },
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
          name: "update",
          description:
            "Modifies the properties of an Azure discovered resource identified by the specified resource OCID",
          options: [
            optMultiCloudResourceDiscoveryId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains Multicloud Resource Discovery resource",
              args: { name: "compartment-id" },
            },
            {
              name: "--display-name",
              description:
                "Display name of the Multicloud Resource Discovery resource",
              args: { name: "display-name" },
            },
            {
              name: "--oracle-db-connector-id",
              description: "The OCID of the Oracle DB Connector resource",
              args: { name: "oracle-db-connector-id" },
            },
            {
              name: "--resource-type",
              description: "Resource Type to discover",
              args: { name: "resource-type" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oracle-db-azure-blob-container",
      description:
        "<b>Microsoft Azure:</b> <br> <b>Oracle Azure Connector Resource:</b>:&nbsp;&nbsp;The Oracle Azure Connector",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Oracle DB Azure Blob Container resource into a different compartment",
          options: [
            optOracleDbAzureBlobContainerId,
            {
              name: "--compartment-id",
              description:
                "He OCID of the compartment that contains the Oracle DB Azure Blob Container resource",
              args: { name: "compartment-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates Oracle DB Azure Blob Container resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of Oracle DB Azure Blob Container resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Oracle DB Azure Blob Container resource name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--azure-storage-account-name",
              description: "Azure Storage account name",
              args: { name: "azure-storage-account-name" },
              isRequired: true,
            },
            {
              name: "--azure-storage-container-name",
              description: "Azure Storage container name",
              args: { name: "azure-storage-container-name" },
              isRequired: true,
            },
            optPrivateEndpointIpAddress,
            optPrivateEndpointDnsAlias,
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
          description: "Delete Oracle DB Azure Blob Container resource",
          options: [
            optOracleDbAzureBlobContainerId,
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
            "Retrieves the details of an Oracle DB–associated Azure Blob Container using the specified container resource",
          options: [
            optOracleDbAzureBlobContainerId,
            optLimit,
            optPage,
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all Oracle DB Azure Blob Container resources based on the specified filters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB Azure Blob Container resources that match the specified display name",
              args: { name: "display-name" },
            },
            {
              name: "--oracle-db-azure-blob-container-id",
              description:
                "A filter to return Oracle DB Azure Blob Container resource",
              args: { name: "oracle-db-azure-blob-container-id" },
            },
            optLifecycleState,
            {
              name: "--azure-storage-account-name",
              description:
                "A filter to return Oracle DB Azure Blob Container resources that match the specified Azure Account name",
              args: { name: "azure-storage-account-name" },
            },
            {
              name: "--azure-storage-container-name",
              description:
                "A filter to return Oracle DB Azure Blob Container resources that match the specified Azure Storage name",
              args: { name: "azure-storage-container-name" },
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
          name: "update",
          description:
            "Modifies the existing Oracle DB Azure Blob Container resource for a given OCID",
          options: [
            optOracleDbAzureBlobContainerId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the Oracle DB Azure Blob Container resource",
              args: { name: "compartment-id" },
            },
            {
              name: "--display-name",
              description: "Oracle DB Azure Blob Container resource name",
              args: { name: "display-name" },
            },
            optPrivateEndpointIpAddress,
            optPrivateEndpointDnsAlias,
            {
              name: "--azure-storage-account-name",
              description: "Azure Storage account name",
              args: { name: "azure-storage-account-name" },
            },
            {
              name: "--azure-storage-container-name",
              description: "Azure Storage container name",
              args: { name: "azure-storage-container-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oracle-db-azure-blob-mount",
      description:
        "<b>Microsoft Azure:</b> <br> <b>Oracle Azure Connector Resource:</b>:&nbsp;&nbsp;The Oracle Azure Connector",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Oracle DB Azure Blob Mount resource into a different compartment",
          options: [
            optOracleDbAzureBlobMountId,
            {
              name: "--compartment-id",
              description:
                "The ID of the new compartment to contain the Oracle DB Azure Blob Mount resource",
              args: { name: "compartment-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates Oracle DB Azure Blob Mount resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "TThe OCID of the compartment that contains Oracle DB Azure Blob Mount resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Oracle DB Azure Blob Mount resource name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--oracle-db-azure-connector-id",
              description:
                "The OCID of the Oracle DB Azure Connector resource that contains Oracle DB Azure Blob Mount resource",
              args: { name: "oracle-db-azure-connector-id" },
              isRequired: true,
            },
            {
              name: "--oracle-db-azure-blob-container-id",
              description:
                "The OCID of the Oracle DB Azure Blob Container resource that contains Oracle DB Azure Blob Mount resource",
              args: { name: "oracle-db-azure-blob-container-id" },
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
          description:
            "Unmounts Oracle DB Azure Blob Mount resource from an Exadata VM cluster in Oracle Exadata Database Service",
          options: [
            optOracleDbAzureBlobMountId,
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
            "Retrieves the Oracle DB Azure Blob Mount resource for a specified resource OCID",
          options: [
            optOracleDbAzureBlobMountId,
            optLimit,
            optPage,
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all Oracle DB Azure Blob Mount resources based on the specified filters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB Azure Blob Mount resources that match the specified display name",
              args: { name: "display-name" },
            },
            {
              name: "--oracle-db-azure-blob-mount-id",
              description:
                "The OCID of the Oracle DB Azure Blob Mount resource",
              args: { name: "oracle-db-azure-blob-mount-id" },
            },
            optLifecycleState,
            {
              name: "--oracle-db-azure-blob-container-id",
              description:
                "A filter to return Oracle DB Azure Blob Container resource",
              args: { name: "oracle-db-azure-blob-container-id" },
            },
            optOracleDbAzureConnectorId,
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
          description:
            "Modifies the existing Oracle DB Azure Blob Mount resource for a given OCID",
          options: [
            optOracleDbAzureBlobMountId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains Oracle DB Azure Blob Mount resource",
              args: { name: "compartment-id" },
            },
            {
              name: "--display-name",
              description: "Oracle DB Azure Blob Mount resource name",
              args: { name: "display-name" },
            },
            {
              name: "--oracle-db-azure-connector-id",
              description:
                "The OCID of the Oracle DB Azure Connector resource that contains Oracle DB Azure Blob Mount resource",
              args: { name: "oracle-db-azure-connector-id" },
            },
            {
              name: "--oracle-db-azure-blob-container-id",
              description:
                "The OCID of the Oracle DB Azure Blob Container resource that contains Oracle DB Azure Blob Mount resource",
              args: { name: "oracle-db-azure-blob-container-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oracle-db-azure-connector",
      description:
        "<b>Microsoft Azure:</b> <br> <b>Oracle Azure Connector Resource:</b>:&nbsp;&nbsp;The Oracle Azure Connector",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Oracle DB Azure Connector resource into a different compartment",
          options: [
            optOracleDbAzureConnectorId2,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment to contain the Oracle DB Azure Connector resource",
              args: { name: "compartment-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
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
            "Creates Oracle DB Azure Connector resource and configured Azure Identity in Oracle Database resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains Oracle DB Azure Connector resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Oracle DB Azure Connector resource name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--db-cluster-resource-id",
              description:
                "The OCID of the Oracle DB Cloud VM Cluster resource where this Azure Arc Agent Identity to configure",
              args: { name: "db-cluster-resource-id" },
              isRequired: true,
            },
            {
              name: "--azure-identity-mechanism",
              description: "Azure Identity mechanism",
              args: { name: "azure-identity-mechanism" },
              isRequired: true,
            },
            {
              name: "--azure-tenant-id",
              description: "Azure Tenant ID",
              args: { name: "azure-tenant-id" },
              isRequired: true,
            },
            {
              name: "--azure-subscription-id",
              description: "Azure Subscription ID",
              args: { name: "azure-subscription-id" },
              isRequired: true,
            },
            {
              name: "--azure-resource-group",
              description: "Azure Resource group name",
              args: { name: "azure-resource-group" },
              isRequired: true,
            },
            {
              name: "--access-token",
              description: "Azure bearer access token",
              args: { name: "access-token" },
            },
            optPrivateEndpointIpAddress,
            optPrivateEndpointDnsAlias,
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
            "Deletes the Oracle DB Azure Identity Connector resource",
          options: [
            optOracleDbAzureConnectorId2,
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
            "Retrieves the Oracle DB Azure Identity Connector for a specified resource OCID",
          options: [
            optOracleDbAzureConnectorId2,
            optLimit,
            optPage,
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all Oracle DB Azure Connector resources based on the specified filters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB Azure Connector resources that match the specified display name",
              args: { name: "display-name" },
            },
            optOracleDbAzureConnectorId,
            optLifecycleState,
            {
              name: "--db-cluster-resource-id",
              description: "The ID of the Database resource",
              args: { name: "db-cluster-resource-id" },
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
          name: "patch",
          description:
            "Patch Azure Arc Agent on Oracle Cloud VM Cluster with new version",
          options: [
            optOracleDbAzureConnectorId2,
            {
              name: "--new-version",
              description:
                "The new version of Azure Agent to be used for patching",
              args: { name: "new-version" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
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
            "Modifies the existing Oracle DB Azure Connector resource for a given OCID",
          options: [
            optOracleDbAzureConnectorId2,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains Oracle DB Azure Connector resource",
              args: { name: "compartment-id" },
            },
            {
              name: "--display-name",
              description: "Oracle DB Azure Connector resource name",
              args: { name: "display-name" },
            },
            {
              name: "--db-cluster-resource-id",
              description:
                "The OCID of the Oracle DB Cloud VM Cluster resource where this Azure Arc Agent Identity to configure",
              args: { name: "db-cluster-resource-id" },
            },
            {
              name: "--azure-identity-mechanism",
              description: "Azure Identity mechanism",
              args: { name: "azure-identity-mechanism" },
            },
            {
              name: "--azure-tenant-id",
              description: "Azure Tenant ID",
              args: { name: "azure-tenant-id" },
            },
            {
              name: "--azure-subscription-id",
              description: "Azure Subscription ID",
              args: { name: "azure-subscription-id" },
            },
            {
              name: "--azure-resource-group",
              description: "Azure Resource group name",
              args: { name: "azure-resource-group" },
            },
            {
              name: "--access-token",
              description: "Azure bearer access token",
              args: { name: "access-token" },
            },
            optPrivateEndpointIpAddress,
            optPrivateEndpointDnsAlias,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oracle-db-azure-key",
      description:
        "<b>Microsoft Azure:</b> <br> <b>Oracle Azure Connector Resource:</b>:&nbsp;&nbsp;The Oracle Azure Connector",
      subcommands: [
        {
          name: "get",
          description:
            "Retrieves detailed information about a Oracle DB Azure Key resource by specifying its unique resource OCID",
          options: [
            {
              name: "--oracle-db-azure-key-id",
              description: "The OCID of the Oracle DB Azure Vault Key resource",
              args: { name: "oracle-db-azure-key-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all Oracle DB Azure Keys based on the specified filters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB Azure Vault Keys resources that match the specified display name",
              args: { name: "display-name" },
            },
            optOracleDbAzureVaultId2,
            {
              name: "--oracle-db-azure-key-id",
              description:
                "A filter to return Oracle DB Azure Vault Keys resource that match the specified Oracle DB Azure Key OCID",
              args: { name: "oracle-db-azure-key-id" },
            },
            optLifecycleState,
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
      name: "oracle-db-azure-vault",
      description: "Oracle DB Azure Vault resource object",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the DB Azure Vault resource into a different compartment",
          options: [
            optOracleDbAzureVaultId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment to contain the Oracle DB Azure Vault resource",
              args: { name: "compartment-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates DB Azure Vault resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains DB Azure Vault resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--oracle-db-connector-id",
              description:
                "The OCID of the Oracle DB Connector resource that contains Oracle DB Azure Vault resource",
              args: { name: "oracle-db-connector-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Oracle DB Azure Vault resource name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--oracle-db-azure-resource-group",
              description: "Oracle DB Azure resource group name",
              args: { name: "oracle-db-azure-resource-group" },
            },
            {
              name: "--azure-vault-id",
              description: "Azure Vault ID",
              args: { name: "azure-vault-id" },
            },
            {
              name: "--type",
              description: "Oracle DB Azure Vault resource type",
              args: { name: "type" },
            },
            {
              name: "--location",
              description: "Oracle DB Azure Vault resource location",
              args: { name: "location" },
            },
            {
              name: "--properties",
              description: "Resource's properties",
              args: { name: "json" },
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
          description: "Deletes the DB Azure Vault resource",
          options: [
            optOracleDbAzureVaultId,
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
            "Retrieves detailed information about an Oracle Database Azure Vault resource using its unique resource OCID",
          options: [
            optOracleDbAzureVaultId,
            optLimit,
            optPage,
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all DB Azure Vault resources based on the specified filters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB Azure Vault resources that match the specified display name",
              args: { name: "display-name" },
            },
            optOracleDbAzureVaultId2,
            optLifecycleState,
            {
              name: "--oracle-db-azure-resource-group",
              description:
                "A filter to return Oracle DB Azure Vault resources that match the specified Oracle DB Azure resource group",
              args: { name: "oracle-db-azure-resource-group" },
            },
            optOracleDbAzureConnectorId,
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
          name: "refresh",
          description: "Refreshes the Oracle DB Azure Vault resource",
          options: [
            optOracleDbAzureVaultId,
            {
              name: "--oracle-db-azure-connector-id",
              description: "The OCID of the Oracle DB Azure Vault resource",
              args: { name: "oracle-db-azure-connector-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "replicate",
          description:
            "Replicate the Oracle DB Azure Vault resource to target region",
          options: [
            optOracleDbAzureVaultId,
            {
              name: "--target-region",
              description:
                "The Destination region where Oracle GCP Keyring resource will replicate",
              args: { name: "target-region" },
              isRequired: true,
            },
            {
              name: "--action",
              description: "Action for replicate Resource",
              args: { suggestions: ["CREATE", "DELETE"] },
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
            "Modifies the configuration details of an existing Oracle Database Azure Vault resource identified by its",
          options: [
            optOracleDbAzureVaultId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains this Oracle DB Azure Vault resource",
              args: { name: "compartment-id" },
            },
            {
              name: "--oracle-db-connector-id",
              description:
                "The OCID of the Oracle DB Connector resource that contains Oracle DB Azure Vault resource",
              args: { name: "oracle-db-connector-id" },
            },
            {
              name: "--display-name",
              description: "Oracle DB Azure Vault resource name",
              args: { name: "display-name" },
            },
            {
              name: "--oracle-db-azure-resource-group",
              description: "Oracle DB Azure resource group name",
              args: { name: "oracle-db-azure-resource-group" },
            },
            {
              name: "--azure-vault-id",
              description: "Azure Vault ID",
              args: { name: "azure-vault-id" },
            },
            {
              name: "--type",
              description: "Oracle DB Azure Vault resource type",
              args: { name: "type" },
            },
            {
              name: "--location",
              description: "Oracle DB Azure Vault resource location",
              args: { name: "location" },
            },
            {
              name: "--properties",
              description: "Oracle DB Azure Vault resource's properties",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oracle-db-azure-vault-association",
      description:
        "<b>Microsoft Azure:</b> <br> <b>Oracle Azure Connector Resource:</b>:&nbsp;&nbsp;The Oracle Azure Connector",
      subcommands: [
        {
          name: "cascading-delete",
          description: "Deletes the Oracle DB Azure Vault Association resource",
          options: [
            optOracleDbAzureVaultAssociationId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves the Oracle DB Azure Vault Association resource into a different compartment",
          options: [
            optOracleDbAzureVaultAssociationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the new compartment to contain the Oracle DB Azure Vault Association resource",
              args: { name: "compartment-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates Oracle DB Azure Vault Association resource",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains Oracle DB Azure Vault Association resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Oracle DB Azure Vault Association resource name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--oracle-db-azure-vault-id",
              description:
                "The OCID of the Oracle DB Azure Vault that contains Oracle DB Azure Vault Association resource",
              args: { name: "oracle-db-azure-vault-id" },
              isRequired: true,
            },
            {
              name: "--oracle-db-azure-connector-id",
              description:
                "The OCID of the Oracle DB Azure Connector that contains Oracle DB Azure Vault Association resource",
              args: { name: "oracle-db-azure-connector-id" },
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
          description: "Deletes the Oracle DB Azure Vault Association resource",
          options: [
            optOracleDbAzureVaultAssociationId,
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
            "Retrieves the details of an Oracle DB Azure Vault Association using the specified association resource OCID",
          options: [
            optOracleDbAzureVaultAssociationId,
            optLimit,
            optPage,
            optSortOrder,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all Oracle DB Azure Associations based on the specified filters",
          options: [
            optCompartmentId,
            optOracleDbAzureVaultId2,
            {
              name: "--display-name",
              description:
                "A filter to return Oracle DB Azure Vault Association resources that match the specified display name",
              args: { name: "display-name" },
            },
            {
              name: "--oracle-db-azure-vault-association-id",
              description:
                "A filter to return Oracle DB Azure Vault resources that match the specified",
              args: { name: "oracle-db-azure-vault-association-id" },
            },
            optLifecycleState,
            optOracleDbAzureConnectorId,
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
          description:
            "Modifies the properties of an Oracle DB Azure Vault Association resource identified by the specified resource",
          options: [
            optOracleDbAzureVaultAssociationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains Oracle DB Azure Vault Association resource",
              args: { name: "compartment-id" },
            },
            {
              name: "--display-name",
              description: "Oracle DB Azure Vault Association resource name",
              args: { name: "display-name" },
            },
            {
              name: "--oracle-db-azure-vault-id",
              description:
                "The OCID of the Oracle DB Azure Vault that contains Oracle DB Azure Vault Association resource",
              args: { name: "oracle-db-azure-vault-id" },
            },
            {
              name: "--oracle-db-azure-connector-id",
              description:
                "The OCID of the Oracle DB Azure Connector that contains Oracle DB Azure Vault Association resource",
              args: { name: "oracle-db-azure-connector-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
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
      description:
        "<b>Microsoft Azure:</b> <br> <b>Oracle Azure Connector Resource:</b>:&nbsp;&nbsp;The Oracle Azure Connector",
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
          name: "cancel",
          description: "Cancels a work request",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets details of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only work requests with the given OperationStatus",
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
                "The ID of the resource affected by the work request",
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
};

export default completionSpec;
