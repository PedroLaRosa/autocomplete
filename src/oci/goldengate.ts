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
    suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED", "CANCELED"],
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
  description: "Tags defined for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "A simple key-value pair that is applied without any predefined name, type, or scope",
  args: { name: "json" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Metadata about this specific object",
  args: { name: "description" },
};
const optNsgIds: Fig.Option = {
  name: "--nsg-ids",
  description:
    "An array of Network Security Group OCIDs used to define network access for either Deployments or Connections",
  args: { name: "json" },
};
const optSecurityAttributes: Fig.Option = {
  name: "--security-attributes",
  description: "Security attributes for this resource",
  args: { name: "json" },
};
const optSubnetId: Fig.Option = {
  name: "--subnet-id",
  description: "The OCID of the target subnet of the dedicated connection",
  args: { name: "subnet-id" },
};
const optDoesUseSecretIds: Fig.Option = {
  name: "--does-use-secret-ids",
  description: "Indicates that sensitive attributes are provided via Secrets",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optKeyId: Fig.Option = {
  name: "--key-id",
  description:
    "References the OCI Vault key in the OCI Vault identified by vaultId",
  args: { name: "key-id" },
};
const optRoutingMethod: Fig.Option = {
  name: "--routing-method",
  description:
    "Controls the network traffic direction to the target: SHARED_DEPLOYMENT_ENDPOINT",
  args: {
    suggestions: [
      "SHARED_SERVICE_ENDPOINT",
      "SHARED_DEPLOYMENT_ENDPOINT",
      "DEDICATED_ENDPOINT",
    ],
  },
};
const optVaultId: Fig.Option = {
  name: "--vault-id",
  description:
    "References the OCI Vault that contains the customer-managed encryption key identified by keyId",
  args: { name: "vault-id" },
};
const optIsLockOverride: Fig.Option = {
  name: "--is-lock-override",
  description: "Whether to override locks (if any exist)",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment being referenced",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optConnectionId: Fig.Option = {
  name: "--connection-id",
  description: "The OCID of a Connection",
  args: { name: "connection-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "An object's Display Name",
  args: { name: "display-name" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "An object's Display Name",
  args: { name: "display-name" },
};
const optLocks: Fig.Option = {
  name: "--locks",
  description: "Locks associated with this resource",
  args: { name: "json" },
};
const optSubscriptionId: Fig.Option = {
  name: "--subscription-id",
  description:
    "The OCID of the subscription with which resource needs to be associated with",
  args: { name: "subscription-id" },
};
const optClusterPlacementGroupId: Fig.Option = {
  name: "--cluster-placement-group-id",
  description:
    "The OCID(/Content/General/Concepts/identifiers.htm) of the cluster placement group for the resource",
  args: { name: "cluster-placement-group-id" },
};
const optDeploymentId: Fig.Option = {
  name: "--deployment-id",
  description: "A unique Deployment identifier",
  args: { name: "deployment-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optPasswordSecretId: Fig.Option = {
  name: "--password-secret-id",
  description: "The OCID of the Secret where the password is stored",
  args: { name: "password-secret-id" },
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
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optPassword: Fig.Option = {
  name: "--password",
  description:
    "The password Oracle GoldenGate uses to connect the associated system of the given technology",
  args: { name: "password" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment that contains the work request",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only the resources that match the entire 'displayName' given",
  args: { name: "display-name" },
};
const optPipelineId: Fig.Option = {
  name: "--pipeline-id",
  description: "The OCID of the pipeline created",
  args: { name: "pipeline-id" },
  isRequired: true,
};
const optUsername: Fig.Option = {
  name: "--username",
  description:
    "The username Oracle GoldenGate uses to connect the associated system of the given technology",
  args: { name: "username" },
};
const optDeploymentBackupId: Fig.Option = {
  name: "--deployment-backup-id",
  description: "A unique DeploymentBackup identifier",
  args: { name: "deployment-backup-id" },
  isRequired: true,
};
const optAdditionalAttributes: Fig.Option = {
  name: "--additional-attributes",
  description: "An array of name-value pair attribute entries",
  args: { name: "json" },
};
const optClientSecretSecretId: Fig.Option = {
  name: "--client-secret-secret-id",
  description: "The OCID of the Secret where the client secret is stored",
  args: { name: "client-secret-secret-id" },
};
const optHost: Fig.Option = {
  name: "--host",
  description: "The name or address of a host",
  args: { name: "host" },
};
const optKeyStore: Fig.Option = {
  name: "--key-store",
  description: "The base64 encoded content of the KeyStore file",
  args: { name: "key-store" },
};
const optKeyStorePassword: Fig.Option = {
  name: "--key-store-password",
  description: "The KeyStore password",
  args: { name: "key-store-password" },
};
const optPort: Fig.Option = {
  name: "--port",
  description: "The port of an endpoint usually specified for a connection",
  args: { name: "integer" },
};
const optPrivateKeyFileSecretId: Fig.Option = {
  name: "--private-key-file-secret-id",
  description:
    "The OCID of the Secret that stores the content of the private key file",
  args: { name: "private-key-file-secret-id" },
};
const optShouldUseResourcePrincipal: Fig.Option = {
  name: "--should-use-resource-principal",
  description:
    "Specifies that the user intends to authenticate to the instance using a resource principal",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optTrustStore: Fig.Option = {
  name: "--trust-store",
  description: "The base64 encoded content of the TrustStore file",
  args: { name: "trust-store" },
};
const optTrustStorePassword: Fig.Option = {
  name: "--trust-store-password",
  description: "The TrustStore password",
  args: { name: "trust-store-password" },
};
const optDeploymentUpgradeId: Fig.Option = {
  name: "--deployment-upgrade-id",
  description: "A unique Deployment Upgrade identifier",
  args: { name: "deployment-upgrade-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optPrivateIp: Fig.Option = {
  name: "--private-ip",
  description: "This property is not available when creating connections",
  args: { name: "private-ip" },
};
const optPrivateKeyFile: Fig.Option = {
  name: "--private-key-file",
  description:
    "The base64 encoded content of the private key file (PEM file) corresponding to the API key of the fingerprint",
  args: { name: "private-key-file", template: "filepaths" },
};
const optPrivateKeyPassphrase: Fig.Option = {
  name: "--private-key-passphrase",
  description: "The passphrase of the private key",
  args: { name: "private-key-passphrase" },
};
const optPrivateKeyPassphraseSecretId: Fig.Option = {
  name: "--private-key-passphrase-secret-id",
  description:
    "The OCID of the Secret that stores the passphrase of the private key",
  args: { name: "private-key-passphrase-secret-id" },
};
const optPublicKeyFingerprint: Fig.Option = {
  name: "--public-key-fingerprint",
  description:
    "The fingerprint of the API Key of the user specified by the userId",
  args: { name: "public-key-fingerprint" },
};
const optServiceAccountKeyFile: Fig.Option = {
  name: "--service-account-key-file",
  description:
    "The base64 encoded content of the service account key file containing the credentials required to use Google",
  args: { name: "service-account-key-file", template: "filepaths" },
};
const optServiceAccountKeyFileSecretId: Fig.Option = {
  name: "--service-account-key-file-secret-id",
  description:
    "The OCID of the Secret where the content of the service account key file is stored",
  args: { name: "service-account-key-file-secret-id" },
};
const optTenancyId: Fig.Option = {
  name: "--tenancy-id",
  description: "The OCID of the related OCI tenancy",
  args: { name: "tenancy-id" },
};
const optType: Fig.Option = {
  name: "--type",
  description: "Type of the lock",
  args: { suggestions: ["FULL", "DELETE"] },
  isRequired: true,
};
const optUsername2: Fig.Option = {
  name: "--username",
  description:
    "The username Oracle GoldenGate uses to connect the associated system of the given technology",
  args: { name: "username" },
  isRequired: true,
};
const optBucketName: Fig.Option = {
  name: "--bucket-name",
  description:
    "Name of the bucket where the object is to be uploaded in the object storage",
  args: { name: "bucket-name" },
  isRequired: true,
};
const optClientId: Fig.Option = {
  name: "--client-id",
  description:
    "OAuth client id, only applicable for authenticationType == OAUTH_M2M",
  args: { name: "client-id" },
};
const optClientSecret: Fig.Option = {
  name: "--client-secret",
  description:
    "OAuth client secret, only applicable for authenticationType == OAUTH_M2M Deprecated",
  args: { name: "client-secret" },
};
const optConnectionRegion: Fig.Option = {
  name: "--connection-region",
  description:
    "The name of the region. e.g.: us-ashburn-1 If the region is not provided",
  args: { name: "connection-region" },
};
const optConnectionString: Fig.Option = {
  name: "--connection-string",
  description:
    "Connect descriptor or Easy Connect Naming method used to connect to a database",
  args: { name: "connection-string" },
};
const optCpuCoreCount: Fig.Option = {
  name: "--cpu-core-count",
  description:
    "The Minimum number of OCPUs to be made available for this Deployment",
  args: { name: "integer" },
};
const optDatabaseName: Fig.Option = {
  name: "--database-name",
  description: "The name of the database",
  args: { name: "database-name" },
  isRequired: true,
};
const optDatabaseName2: Fig.Option = {
  name: "--database-name",
  description: "The name of the database",
  args: { name: "database-name" },
};
const optDatabaseRegistrationId: Fig.Option = {
  name: "--database-registration-id",
  description: "A unique DatabaseRegistration identifier",
  args: { name: "database-registration-id" },
  isRequired: true,
};
const optDbSystemId: Fig.Option = {
  name: "--db-system-id",
  description: "The OCID of the database system being referenced",
  args: { name: "db-system-id" },
};
const optDeploymentId2: Fig.Option = {
  name: "--deployment-id",
  description: "The OCID of the deployment in which to list resources",
  args: { name: "deployment-id" },
};
const optIsAutoScalingEnabled: Fig.Option = {
  name: "--is-auto-scaling-enabled",
  description:
    "Indicates if auto scaling is enabled for the Deployment's CPU core count",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optKeyStoreSecretId: Fig.Option = {
  name: "--key-store-secret-id",
  description:
    "The OCID of the Secret that stores the content of the KeyStore file",
  args: { name: "key-store-secret-id" },
};
const optKeyStoreSecretId2: Fig.Option = {
  name: "--key-store-secret-id",
  description:
    "The OCID of the Secret where the content of the KeyStore file is stored",
  args: { name: "key-store-secret-id" },
};
const optNamespaceName: Fig.Option = {
  name: "--namespace-name",
  description:
    "Name of namespace that serves as a container for all of your buckets",
  args: { name: "namespace-name" },
  isRequired: true,
};
const optSslCa: Fig.Option = {
  name: "--ssl-ca",
  description:
    "Database Certificate - The base64 encoded content of a .pem or .crt file containing the server public key",
  args: { name: "ssl-ca" },
};
const optSslCrl: Fig.Option = {
  name: "--ssl-crl",
  description:
    "The base64 encoded list of certificates revoked by the trusted certificate authorities (Trusted CA)",
  args: { name: "ssl-crl" },
};
const optSslKeyPassword: Fig.Option = {
  name: "--ssl-key-password",
  description: "The password for the cert inside of the KeyStore",
  args: { name: "ssl-key-password" },
};
const optTrustStoreSecretId: Fig.Option = {
  name: "--trust-store-secret-id",
  description:
    "The OCID of the Secret that stores the content of the TrustStore file",
  args: { name: "trust-store-secret-id" },
};
const optTrustStoreSecretId2: Fig.Option = {
  name: "--trust-store-secret-id",
  description:
    "The OCID of the Secret where the content of the TrustStore file is stored",
  args: { name: "trust-store-secret-id" },
};
const optUserId: Fig.Option = {
  name: "--user-id",
  description: "The OCID of the OCI user who will access the Object Storage",
  args: { name: "user-id" },
};
const optWallet: Fig.Option = {
  name: "--wallet",
  description:
    "The wallet contents Oracle GoldenGate uses to make connections to a database",
  args: { name: "wallet" },
};
const optAuthDetails: Fig.Option = {
  name: "--auth-details",
  args: { name: "json" },
};
const optAvailabilityDomain: Fig.Option = {
  name: "--availability-domain",
  description: "The availability domain of a placement",
  args: { name: "availability-domain" },
  isRequired: true,
};
const optConnectionAssignmentId: Fig.Option = {
  name: "--connection-assignment-id",
  description: "The OCID of the Connection Assignment",
  args: { name: "connection-assignment-id" },
  isRequired: true,
};
const optDatabaseId: Fig.Option = {
  name: "--database-id",
  description: "The OCID of the database being referenced",
  args: { name: "database-id" },
};
const optFaultDomain: Fig.Option = {
  name: "--fault-domain",
  description: "The fault domain of a placement",
  args: { name: "fault-domain" },
  isRequired: true,
};
const optFqdn: Fig.Option = {
  name: "--fqdn",
  description:
    "A three-label Fully Qualified Domain Name (FQDN) for a resource",
  args: { name: "fqdn" },
};
const optLicenseModel: Fig.Option = {
  name: "--license-model",
  description: "The Oracle license model that applies to a Deployment",
  args: { suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"] },
};
const optMessage: Fig.Option = {
  name: "--message",
  description: "A message added by the creator of the lock",
  args: { name: "message" },
};
const optVaultId2: Fig.Option = {
  name: "--vault-id",
  description: "Refers to the customer's vault OCID",
  args: { name: "vault-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
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
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "goldengate",
  description: "GoldenGate",
  subcommands: [
    {
      name: "deployment-backup",
      description: "A backup of the current state of the GoldenGate deployment",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a DeploymentBackup into a different compartment within the same tenancy",
          options: [
            optDeploymentBackupId,
            optCompartmentId,
            optIfMatch,
            optIsLockOverride,
            optFromJson,
          ],
        },
        {
          name: "copy",
          description: "Creates a copy of a Deployment Backup",
          options: [
            optDeploymentBackupId,
            optNamespaceName,
            optBucketName,
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
          name: "create",
          description: "Creates a new DeploymentBackup",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--deployment-id",
              description: "The OCID of the deployment being referenced",
              args: { name: "deployment-id" },
              isRequired: true,
            },
            optNamespaceName,
            optBucketName,
            {
              name: "--object-name",
              description:
                "Name of the object to be uploaded to object storage",
              args: { name: "object-name" },
              isRequired: true,
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-metadata-only",
              description:
                "Parameter to allow users to create backup without trails",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLocks,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a DeploymentBackup",
          options: [
            optDeploymentBackupId,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a DeploymentBackup",
          options: [optDeploymentBackupId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the Backups in a compartment",
          options: [
            optCompartmentId2,
            optDeploymentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the deployment backups having the 'lifecycleState' given",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "CANCELING",
                  "CANCELED",
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
        {
          name: "restore-deployment",
          description:
            "Restores a Deployment from a Deployment Backup created from the same Deployment",
          options: [
            optDeploymentBackupId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Modifies a Deployment Backup",
          options: [
            optDeploymentBackupId,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "cancel",
          description: "Cancels a Deployment Backup creation process",
          options: [
            optDeploymentBackupId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a DeploymentBackup resource",
          options: [
            optDeploymentBackupId,
            optType,
            optMessage,
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-lock",
          description: "Removes a lock from a DeploymentBackup resource",
          options: [
            optDeploymentBackupId,
            optType,
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
      name: "trail-file-summary",
      description: "Summary of the TrailFiles",
      subcommands: [
        {
          name: "list-trail-files",
          description: "Lists the TrailFiles for a deployment",
          options: [
            optDeploymentId,
            optDisplayName3,
            {
              name: "--trail-file-id",
              description: "A Trail File identifier",
              args: { name: "trail-file-id" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeLastUpdated", "displayName"] },
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
      name: "certificate",
      description: "Certificate data",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the certificate from truststore",
          options: [
            optDeploymentId,
            {
              name: "--certificate-key",
              description: "A unique certificate identifier",
              args: { name: "certificate-key" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a Certificate",
          options: [
            optDeploymentId,
            {
              name: "--certificate-key",
              description: "A unique certificate identifier",
              args: { name: "certificate-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new certificate to truststore",
          options: [
            {
              name: "--key",
              description:
                "The identifier key (unique name in the scope of the deployment) of the certificate being referenced",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--certificate-content",
              description:
                "The base64 encoded content of the PEM file containing the SSL certificate",
              args: { name: "certificate-content" },
              isRequired: true,
            },
            optDeploymentId,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of certificates from truststore",
          options: [
            optDeploymentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only connections having the 'lifecycleState' given",
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
      name: "deployment-peer-summary",
      description: "The summary of the deployment Peer",
      subcommands: [
        {
          name: "list-deployment-peers",
          description: "Lists the local and remote peers in a deployment",
          options: [
            optDeploymentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the deployment peers having the 'lifecycleState' given",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "INACTIVE",
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
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description: "Lists work request logs",
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
      description:
        "The API operations that create and configure GoldenGate resources do not take effect immediately",
      subcommands: [
        {
          name: "get",
          description: "Retrieve the WorkRequest identified by the given OCID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in the compartment",
          options: [
            optCompartmentId2,
            {
              name: "--resource-id",
              description:
                "The OCID of the resource in which to list resources",
              args: { name: "resource-id" },
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
      name: "message-summary",
      description: "Deployment message Summary",
      subcommands: [
        {
          name: "list-messages",
          description: "Lists the DeploymentMessages for a deployment",
          options: [
            optDeploymentId,
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
      name: "database-registration",
      description:
        "Represents the metadata description of a database used by deployments in the same compartment",
      subcommands: [
        {
          name: "change-compartment",
          description: "Note: Deprecated",
          options: [
            optDatabaseRegistrationId,
            optCompartmentId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Note: Deprecated",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--fqdn",
              description:
                "A three-label Fully Qualified Domain Name (FQDN) for a resource",
              args: { name: "fqdn" },
              isRequired: true,
            },
            optUsername2,
            {
              name: "--password",
              description:
                "The password Oracle GoldenGate uses to connect the associated system of the given technology",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--alias-name",
              description: "Credential store alias",
              args: { name: "alias-name" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--ip-address",
              description:
                "The private IP address in the customer's VCN of the customer's endpoint, typically a database",
              args: { name: "ip-address" },
            },
            optSubnetId,
            optDatabaseId,
            optConnectionString,
            {
              name: "--session-mode",
              description:
                "The mode of the database connection session to be established by the data client. 'REDIRECT'",
              args: { suggestions: ["DIRECT", "REDIRECT"] },
            },
            optWallet,
            {
              name: "--vault-id",
              description: "Refers to the customer's vault OCID",
              args: { name: "vault-id" },
            },
            {
              name: "--key-id",
              description: "Refers to the customer's master key OCID",
              args: { name: "key-id" },
            },
            {
              name: "--secret-compartment-id",
              description:
                "The OCID of the compartment where the GoldenGate Secret will be created",
              args: { name: "secret-compartment-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Note: Deprecated",
          options: [
            optDatabaseRegistrationId,
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
          description: "Note: Deprecated",
          options: [optDatabaseRegistrationId, optFromJson],
        },
        {
          name: "list",
          description: "Note: Deprecated",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the resources that match the 'lifecycleState' given",
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
                  "IN_PROGRESS",
                  "CANCELING",
                  "CANCELED",
                  "SUCCEEDED",
                  "WAITING",
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
        {
          name: "update",
          description: "Note: Deprecated",
          options: [
            optDatabaseRegistrationId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optFqdn,
            optUsername,
            optPassword,
            optConnectionString,
            {
              name: "--session-mode",
              description:
                "The mode of the database connection session to be established by the data client. 'REDIRECT'",
              args: { suggestions: ["DIRECT", "REDIRECT"] },
            },
            optWallet,
            {
              name: "--alias-name",
              description: "Credential store alias",
              args: { name: "alias-name" },
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
      name: "deployment-upgrade",
      description: "A container for your OCI GoldenGate Upgrade information",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancels a DeploymentUpgrade, applicable only for DeploymentUpgrade in Waiting state",
          options: [
            optDeploymentUpgradeId,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "WAITING",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
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
          name: "cancel-snooze",
          description: "Cancel snooze of a DeploymentUpgrade",
          options: [optDeploymentUpgradeId, optIfMatch, optFromJson],
        },
        {
          name: "get",
          description: "Retrieves a deployment upgrade",
          options: [optDeploymentUpgradeId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the Deployment Upgrades in a compartment",
          options: [
            optCompartmentId2,
            optDeploymentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the deployment upgrades having the 'lifecycleState' given",
              args: {
                suggestions: [
                  "WAITING",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELED",
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
        {
          name: "reschedule",
          description:
            "Reschedules a DeploymentUpgrade, applicable only for DeploymentUpgrade in Waiting state",
          options: [
            optDeploymentUpgradeId,
            {
              name: "--time-schedule",
              description: "The time of upgrade schedule",
              args: { name: "datetime" },
              isRequired: true,
            },
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "WAITING",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
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
          name: "rollback",
          description: "Rollback a deployment to it's previous version",
          options: [
            optDeploymentUpgradeId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "snooze",
          description: "Snooze a DeploymentUpgrade",
          options: [optDeploymentUpgradeId, optIfMatch, optFromJson],
        },
        {
          name: "upgrade",
          description: "Upgrade a deployment",
          options: [
            optDeploymentUpgradeId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "deployment-wallets-operation-summary",
      description: "Summary of the deployment wallets operations",
      subcommands: [
        {
          name: "list-wallet-operations",
          description:
            "Lists the wallets export/import operations to/from a deployment",
          options: [
            optDeploymentId,
            optDisplayName3,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeStarted"] },
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
      name: "pipeline",
      description:
        "Represents the metadata details of a pipeline in the same compartment",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Pipeline into a different compartment within the same tenancy",
          options: [
            optPipelineId,
            optCompartmentId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "clone",
          description: "Clones the pipeline",
          options: [
            {
              name: "--type",
              description: "Type of a pipeline clone",
              args: { suggestions: ["DEFAULT"] },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--source-pipeline-id",
              description: "The OCID of the pipeline",
              args: { name: "source-pipeline-id" },
              isRequired: true,
            },
            optCompartmentId,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--system-tags",
              description:
                "The system tags associated with this resource, if any",
              args: { name: "json" },
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "clone-pipeline-default-clone-pipeline-details",
          description: "Clones the pipeline",
          options: [
            optDisplayName,
            {
              name: "--source-pipeline-id",
              description: "The OCID of the pipeline",
              args: { name: "source-pipeline-id" },
              isRequired: true,
            },
            optCompartmentId,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--system-tags",
              description:
                "The system tags associated with this resource, if any",
              args: { name: "json" },
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Pipeline",
          options: [
            optPipelineId,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a Pipeline details",
          options: [optPipelineId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the Pipelines in the compartment",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filtered list of pipelines to return for a given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "NEEDS_ATTENTION",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "INACTIVE",
                ],
              },
            },
            {
              name: "--lifecycle-sub-state",
              description:
                "A filtered list of pipelines to return for a given lifecycleSubState",
              args: {
                suggestions: [
                  "STARTING",
                  "STOPPING",
                  "STOPPED",
                  "MOVING",
                  "RUNNING",
                  "PAUSING",
                  "PAUSED",
                  "START_FAILED",
                  "STOP_FAILED",
                  "PAUSE_FAILED",
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
        {
          name: "pause",
          description: "Pauses the pipeline",
          options: [
            optPipelineId,
            {
              name: "--type",
              description: "Type of a pipeline pause",
              args: { suggestions: ["DEFAULT"] },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "pause-pipeline-default-pause-pipeline-details",
          description: "Pauses the pipeline",
          options: [
            optPipelineId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Starts the pipeline for data replication",
          options: [
            optPipelineId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops the pipeline for data replication",
          options: [
            optPipelineId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-zero-etl-pipeline",
          description: "Creates a new Pipeline",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--license-model",
              description:
                "The Oracle license model that applies to a Deployment",
              args: {
                suggestions: ["LICENSE_INCLUDED", "BRING_YOUR_OWN_LICENSE"],
              },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet of the pipeline's private endpoint",
              args: { name: "subnet-id" },
            },
            optCpuCoreCount,
            optIsAutoScalingEnabled,
            { name: "--process-options", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--source-connection",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--target-connection",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-initialization-steps",
          description:
            "Retrieves a Pipeline recipe steps and its progress details",
          options: [optPipelineId, optAll, optFromJson],
        },
        {
          name: "list-running-processes",
          description:
            "Retrieves a Pipeline's running replication process's status like Capture/Apply",
          options: [
            optPipelineId,
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
          name: "list-schema-tables",
          description:
            "Returns an array of tables under the given schemas of the pipeline for given source and target schemas passed",
          options: [
            optPipelineId,
            {
              name: "--source-schema-name",
              description:
                "Name of the source schema obtained from get schema endpoint of the created pipeline",
              args: { name: "source-schema-name" },
              isRequired: true,
            },
            {
              name: "--target-schema-name",
              description:
                "Name of the target schema obtained from get schema endpoint of the created pipeline",
              args: { name: "target-schema-name" },
              isRequired: true,
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
        {
          name: "list-schemas",
          description:
            "Returns an array of schemas based on mapping rules for a pipeline",
          options: [
            optPipelineId,
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
        {
          name: "test-connection",
          description:
            "Tests pipeline connections against pipeline to verify the connectivity",
          options: [
            optPipelineId,
            {
              name: "--connection-id",
              description: "The OCID of the connection being referenced",
              args: { name: "connection-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-zero-etl-pipeline",
          description: "Updates the Pipeline",
          options: [
            optPipelineId,
            optDisplayName2,
            optDescription,
            optLicenseModel,
            optFreeformTags,
            optDefinedTags,
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet of the pipeline's private endpoint",
              args: { name: "subnet-id" },
            },
            optCpuCoreCount,
            optIsAutoScalingEnabled,
            { name: "--process-options", args: { name: "json" } },
            {
              name: "--mapping-rules",
              description:
                "Mapping for source/target schema/tables for the pipeline data replication",
              args: { name: "json" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "collect-diagnostic",
          description: "Collects diagnostics for the pipeline",
          options: [
            optPipelineId,
            optNamespaceName,
            optBucketName,
            {
              name: "--diagnostic-name-prefix",
              description:
                "Name of the diagnostic collected and uploaded to object storage",
              args: { name: "diagnostic-name-prefix" },
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
      name: "deployment-type-collection",
      description: "The list of DeploymentTypeDescriptor objects",
      subcommands: [
        {
          name: "list-deployment-types",
          description: "Returns an array of DeploymentTypeDescriptor",
          options: [
            optCompartmentId2,
            {
              name: "--deployment-type",
              description:
                "The type of deployment, the value determines the exact 'type' of the service executed in the deployment",
              args: {
                suggestions: [
                  "OGG",
                  "DATABASE_ORACLE",
                  "BIGDATA",
                  "DATABASE_MICROSOFT_SQLSERVER",
                  "DATABASE_MYSQL",
                  "DATABASE_POSTGRESQL",
                  "DATABASE_DB2ZOS",
                  "DATABASE_DB2I",
                  "GGSA",
                  "DATA_TRANSFORMS",
                  "VERIDATA_SERVER",
                  "VERIDATA_AGENT",
                ],
              },
            },
            {
              name: "--ogg-version",
              description: "Allows to query by a specific GoldenGate version",
              args: { name: "ogg-version" },
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
      name: "connection-assignment",
      description:
        "Represents the metadata description of a connection assignment",
      subcommands: [
        {
          name: "create",
          description: "Creates a new Connection Assignment",
          options: [
            {
              name: "--connection-id",
              description: "The OCID of the connection being referenced",
              args: { name: "connection-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "The OCID of the deployment being referenced",
              args: { name: "deployment-id" },
              isRequired: true,
            },
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Connection Assignment",
          options: [
            optConnectionAssignmentId,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a Connection Assignment",
          options: [optConnectionAssignmentId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the Connection Assignments in the compartment",
          options: [
            optCompartmentId2,
            optDeploymentId2,
            {
              name: "--connection-id",
              description: "The OCID of the connection",
              args: { name: "connection-id" },
            },
            {
              name: "--connection-type",
              description: "The array of connection types",
              args: {
                suggestions: [
                  "GOLDENGATE",
                  "KAFKA",
                  "KAFKA_SCHEMA_REGISTRY",
                  "MYSQL",
                  "JAVA_MESSAGE_SERVICE",
                  "MICROSOFT_SQLSERVER",
                  "OCI_OBJECT_STORAGE",
                  "ORACLE",
                  "AZURE_DATA_LAKE_STORAGE",
                  "POSTGRESQL",
                  "AZURE_SYNAPSE_ANALYTICS",
                  "SNOWFLAKE",
                  "AMAZON_S3",
                  "HDFS",
                  "ORACLE_AI_DATA_PLATFORM",
                  "ORACLE_AI_DATA_PLATFORM_ENGINE",
                  "ORACLE_NOSQL",
                  "MONGODB",
                  "AMAZON_KINESIS",
                  "AMAZON_REDSHIFT",
                  "DB2",
                  "REDIS",
                  "ELASTICSEARCH",
                  "GENERIC",
                  "GOOGLE_CLOUD_STORAGE",
                  "GOOGLE_BIGQUERY",
                  "DATABRICKS",
                  "DATABRICKS_ENGINE",
                  "GOOGLE_PUBSUB",
                  "MICROSOFT_FABRIC",
                  "SPARK",
                  "ICEBERG",
                  "AI_PROVIDER",
                  "AI_MODEL",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--connection-type-not-equal-to",
              description: "The array of connection types to exclude",
              args: {
                suggestions: [
                  "GOLDENGATE",
                  "KAFKA",
                  "KAFKA_SCHEMA_REGISTRY",
                  "MYSQL",
                  "JAVA_MESSAGE_SERVICE",
                  "MICROSOFT_SQLSERVER",
                  "OCI_OBJECT_STORAGE",
                  "ORACLE",
                  "AZURE_DATA_LAKE_STORAGE",
                  "POSTGRESQL",
                  "AZURE_SYNAPSE_ANALYTICS",
                  "SNOWFLAKE",
                  "AMAZON_S3",
                  "HDFS",
                  "ORACLE_AI_DATA_PLATFORM",
                  "ORACLE_AI_DATA_PLATFORM_ENGINE",
                  "ORACLE_NOSQL",
                  "MONGODB",
                  "AMAZON_KINESIS",
                  "AMAZON_REDSHIFT",
                  "DB2",
                  "REDIS",
                  "ELASTICSEARCH",
                  "GENERIC",
                  "GOOGLE_CLOUD_STORAGE",
                  "GOOGLE_BIGQUERY",
                  "DATABRICKS",
                  "DATABRICKS_ENGINE",
                  "GOOGLE_PUBSUB",
                  "MICROSOFT_FABRIC",
                  "SPARK",
                  "ICEBERG",
                  "AI_PROVIDER",
                  "AI_MODEL",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--name",
              description:
                "The name of the connection in the assignment (aliasName)",
              args: { name: "name" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only connection assignments having the 'lifecycleState' given",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
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
          name: "test",
          description:
            "Tests the connectivity between given GoldenGate deployment and one of the associated database / service",
          options: [optConnectionAssignmentId, optIfMatch, optFromJson],
        },
      ],
    },
    {
      name: "trail-sequence-summary",
      description: "Summary of the TrailSequences",
      subcommands: [
        {
          name: "list-trail-sequences",
          description:
            "Lists the Trail Sequences for a TrailFile in a given deployment",
          options: [
            optDeploymentId,
            {
              name: "--trail-file-id",
              description: "A Trail File identifier",
              args: { name: "trail-file-id" },
              isRequired: true,
            },
            {
              name: "--trail-sequence-id",
              description: "A Trail Sequence identifier",
              args: { name: "trail-sequence-id" },
            },
            optDisplayName3,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeLastUpdated", "displayName"] },
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
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description: "Lists work request errors",
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
      name: "connection",
      description:
        "Represents the metadata description of a connection used by deployments in the same compartment",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Connection into a different compartment within the same tenancy",
          options: [
            optConnectionId,
            optCompartmentId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a Connection",
          options: [
            optConnectionId,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a Connection",
          options: [
            optConnectionId,
            {
              name: "--view",
              description:
                "Selects the connection fields returned in connection details",
              args: { suggestions: ["FULL", "COMPACT"] },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the Connections in the compartment",
          options: [
            optCompartmentId2,
            {
              name: "--technology-type",
              description: "The array of technology types",
              args: {
                suggestions: [
                  "GOLDENGATE",
                  "GENERIC",
                  "OCI_AUTONOMOUS_DATABASE",
                  "OCI_AUTONOMOUS_JSON_DATABASE",
                  "OCI_CACHE_WITH_REDIS",
                  "OCI_MYSQL",
                  "OCI_OBJECT_STORAGE",
                  "OCI_POSTGRESQL",
                  "OCI_STREAMING",
                  "OCI_STREAMING_WITH_APACHE_KAFKA",
                  "ORACLE_DATABASE",
                  "ORACLE_EXADATA",
                  "ORACLE_EXADATA_EXASCALE",
                  "ORACLE_EXADATA_DATABASE_AT_AZURE",
                  "ORACLE_EXADATA_EXASCALE_AT_AZURE",
                  "ORACLE_AUTONOMOUS_DATABASE_AT_AZURE",
                  "ORACLE_JSON_COLLECTION",
                  "ORACLE_EXADATA_DATABASE_AT_GOOGLE_CLOUD",
                  "ORACLE_EXADATA_EXASCALE_AT_GOOGLE_CLOUD",
                  "ORACLE_AUTONOMOUS_DATABASE_AT_GOOGLE_CLOUD",
                  "ORACLE_EXADATA_DATABASE_AT_AWS",
                  "ORACLE_AUTONOMOUS_DATABASE_AT_AWS",
                  "ORACLE_AI_DATA_PLATFORM",
                  "ORACLE_AI_DATA_PLATFORM_ENGINE",
                  "ORACLE_NOSQL",
                  "ORACLE_REST_DATA_SERVICES",
                  "ORACLE_WEBLOGIC_JMS",
                  "AMAZON_RDS_ORACLE",
                  "AMAZON_RDS_SQLSERVER",
                  "AMAZON_S3",
                  "AMAZON_AURORA_MYSQL",
                  "AMAZON_AURORA_POSTGRESQL",
                  "AMAZON_DOCUMENT_DB",
                  "AMAZON_KINESIS",
                  "AMAZON_REDSHIFT",
                  "AMAZON_RDS_MARIADB",
                  "AMAZON_RDS_MYSQL",
                  "AMAZON_RDS_POSTGRESQL",
                  "APACHE_ICEBERG",
                  "APACHE_KAFKA",
                  "AZURE_COSMOS_DB_FOR_MONGODB",
                  "AZURE_COSMOS_DB_FOR_POSTGRESQL",
                  "AZURE_DATA_LAKE_STORAGE",
                  "AZURE_EVENT_HUBS",
                  "AZURE_MYSQL",
                  "AZURE_POSTGRESQL",
                  "AZURE_SQLSERVER_MANAGED_INSTANCE",
                  "AZURE_SQLSERVER_NON_MANAGED_INSTANCE",
                  "AZURE_SYNAPSE_ANALYTICS",
                  "CONFLUENT_KAFKA",
                  "CONFLUENT_SCHEMA_REGISTRY",
                  "DATABRICKS",
                  "DATABRICKS_ENGINE",
                  "DB2_I",
                  "DB2_ZOS",
                  "ELASTICSEARCH",
                  "EDB_POSTGRES_ADVANCED_SERVER",
                  "GOOGLE_ALLOY_DB_FOR_POSTGRESQL",
                  "GOOGLE_BIGQUERY",
                  "GOOGLE_CLOUD_MANAGED_SERVICE_FOR_APACHE_KAFKA",
                  "GOOGLE_CLOUD_STORAGE",
                  "GOOGLE_CLOUD_SQL_MYSQL",
                  "GOOGLE_CLOUD_SQL_POSTGRESQL",
                  "GOOGLE_CLOUD_SQL_SQLSERVER",
                  "GOOGLE_PUBSUB",
                  "HDFS",
                  "MARIADB",
                  "MICROSOFT_SQLSERVER",
                  "MICROSOFT_FABRIC_EVENTSTREAM",
                  "MICROSOFT_FABRIC_LAKEHOUSE",
                  "MICROSOFT_FABRIC_MIRROR",
                  "MONGODB",
                  "MYSQL_SERVER",
                  "MYSQL_HEATWAVE_ON_AZURE",
                  "MYSQL_HEATWAVE_ON_AWS",
                  "APACHE_SPARK",
                  "POSTGRESQL_SERVER",
                  "REDIS",
                  "SINGLESTOREDB",
                  "SINGLESTOREDB_CLOUD",
                  "SNOWFLAKE",
                  "YUGABYTE_DB",
                  "OCI_GENERATIVE_AI",
                  "GEMINI",
                  "OPEN_AI",
                  "VOYAGE_AI",
                  "AI_MODEL",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--connection-type",
              description: "The array of connection types",
              args: {
                suggestions: [
                  "GOLDENGATE",
                  "KAFKA",
                  "KAFKA_SCHEMA_REGISTRY",
                  "MYSQL",
                  "JAVA_MESSAGE_SERVICE",
                  "MICROSOFT_SQLSERVER",
                  "OCI_OBJECT_STORAGE",
                  "ORACLE",
                  "AZURE_DATA_LAKE_STORAGE",
                  "POSTGRESQL",
                  "AZURE_SYNAPSE_ANALYTICS",
                  "SNOWFLAKE",
                  "AMAZON_S3",
                  "HDFS",
                  "ORACLE_AI_DATA_PLATFORM",
                  "ORACLE_AI_DATA_PLATFORM_ENGINE",
                  "ORACLE_NOSQL",
                  "MONGODB",
                  "AMAZON_KINESIS",
                  "AMAZON_REDSHIFT",
                  "DB2",
                  "REDIS",
                  "ELASTICSEARCH",
                  "GENERIC",
                  "GOOGLE_CLOUD_STORAGE",
                  "GOOGLE_BIGQUERY",
                  "DATABRICKS",
                  "DATABRICKS_ENGINE",
                  "GOOGLE_PUBSUB",
                  "MICROSOFT_FABRIC",
                  "SPARK",
                  "ICEBERG",
                  "AI_PROVIDER",
                  "AI_MODEL",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--connection-type-not-equal-to",
              description: "The array of connection types to exclude",
              args: {
                suggestions: [
                  "GOLDENGATE",
                  "KAFKA",
                  "KAFKA_SCHEMA_REGISTRY",
                  "MYSQL",
                  "JAVA_MESSAGE_SERVICE",
                  "MICROSOFT_SQLSERVER",
                  "OCI_OBJECT_STORAGE",
                  "ORACLE",
                  "AZURE_DATA_LAKE_STORAGE",
                  "POSTGRESQL",
                  "AZURE_SYNAPSE_ANALYTICS",
                  "SNOWFLAKE",
                  "AMAZON_S3",
                  "HDFS",
                  "ORACLE_AI_DATA_PLATFORM",
                  "ORACLE_AI_DATA_PLATFORM_ENGINE",
                  "ORACLE_NOSQL",
                  "MONGODB",
                  "AMAZON_KINESIS",
                  "AMAZON_REDSHIFT",
                  "DB2",
                  "REDIS",
                  "ELASTICSEARCH",
                  "GENERIC",
                  "GOOGLE_CLOUD_STORAGE",
                  "GOOGLE_BIGQUERY",
                  "DATABRICKS",
                  "DATABRICKS_ENGINE",
                  "GOOGLE_PUBSUB",
                  "MICROSOFT_FABRIC",
                  "SPARK",
                  "ICEBERG",
                  "AI_PROVIDER",
                  "AI_MODEL",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--assigned-deployment-id",
              description:
                "The OCID of the deployment which for the connection must be assigned",
              args: { name: "assigned-deployment-id" },
            },
            {
              name: "--assignable-deployment-id",
              description:
                "Filters for compatible connections which can be, but currently not assigned to the deployment specified",
              args: { name: "assignable-deployment-id" },
            },
            {
              name: "--assignable-deployment-type",
              description:
                "Filters for connections which can be assigned to the latest version of the specified deployment type",
              args: {
                suggestions: [
                  "OGG",
                  "DATABASE_ORACLE",
                  "BIGDATA",
                  "DATABASE_MICROSOFT_SQLSERVER",
                  "DATABASE_MYSQL",
                  "DATABASE_POSTGRESQL",
                  "DATABASE_DB2ZOS",
                  "DATABASE_DB2I",
                  "GGSA",
                  "DATA_TRANSFORMS",
                  "VERIDATA_SERVER",
                  "VERIDATA_AGENT",
                ],
              },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only connections having the 'lifecycleState' given",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                  "NEEDS_ATTENTION",
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
        {
          name: "migrate",
          description: "Migrate Connection attributes",
          options: [
            optConnectionId,
            {
              name: "--type",
              description: "The type of a migrate Connection",
              args: { suggestions: ["SECRET"] },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "refresh",
          description: "Refresh the external Connection attributes",
          options: [
            optConnectionId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-goldengate-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The GoldenGate technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--deployment-id",
              description: "The OCID of the deployment being referenced",
              args: { name: "deployment-id" },
            },
            optHost,
            optPort,
            {
              name: "--username",
              description:
                "The username credential existing in the Oracle GoldenGate used to be connected to",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password used to connect to the Oracle GoldenGate accessed trough this connection",
              args: { name: "password" },
            },
            optPasswordSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-kafka-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Kafka technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--stream-pool-id",
              description: "The OCID of the stream pool being referenced",
              args: { name: "stream-pool-id" },
            },
            {
              name: "--cluster-id",
              description:
                "The OCID of the Kafka cluster being referenced from OCI Streaming with Apache Kafka",
              args: { name: "cluster-id" },
            },
            {
              name: "--bootstrap-servers",
              description: "Kafka bootstrap",
              args: { name: "json" },
            },
            {
              name: "--security-protocol",
              description: "Security Type for Kafka",
              args: { name: "security-protocol" },
            },
            optUsername,
            optPassword,
            optPasswordSecretId,
            optTrustStore,
            optTrustStoreSecretId2,
            optTrustStorePassword,
            {
              name: "--trust-store-password-secret-id",
              description:
                "The OCID of the Secret where the kafka TrustStore password is stored",
              args: { name: "trust-store-password-secret-id" },
            },
            optKeyStore,
            optKeyStoreSecretId2,
            optKeyStorePassword,
            {
              name: "--key-store-password-secret-id",
              description:
                "The OCID of the Secret where the kafka KeyStore password is stored",
              args: { name: "key-store-password-secret-id" },
            },
            optSslKeyPassword,
            {
              name: "--ssl-key-password-secret-id",
              description:
                "The OCID of the Secret where the kafka Ssl Key password is stored",
              args: { name: "ssl-key-password-secret-id" },
            },
            {
              name: "--consumer-properties",
              description:
                "The base64 encoded content of the consumer.properties file",
              args: { name: "consumer-properties" },
            },
            {
              name: "--producer-properties",
              description:
                "The base64 encoded content of the producer.properties file",
              args: { name: "producer-properties" },
            },
            optShouldUseResourcePrincipal,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-mysql-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The MySQL technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optUsername2,
            optDatabaseName,
            {
              name: "--security-protocol",
              description: "Security Type for MySQL",
              args: { name: "security-protocol" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optPassword,
            optPasswordSecretId,
            optHost,
            optPort,
            {
              name: "--ssl-mode",
              description: "SSL modes for MySQL",
              args: { name: "ssl-mode" },
            },
            optSslCa,
            optSslCrl,
            {
              name: "--ssl-cert",
              description:
                "Client Certificate - The base64 encoded content of a .pem or .crt file containing the client public key",
              args: { name: "ssl-cert" },
            },
            {
              name: "--ssl-key",
              description:
                "Client Key - The base64 encoded content of a .pem or .crt file containing the client private key",
              args: { name: "ssl-key" },
            },
            {
              name: "--ssl-key-secret-id",
              description:
                "The OCID of the Secret that stores the Client Key - The content of a .pem or .crt file containing the client",
              args: { name: "ssl-key-secret-id" },
            },
            optAdditionalAttributes,
            optDbSystemId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-object-storage-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The OCI Object Storage technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optTenancyId,
            optUserId,
            optPrivateKeyFile,
            optPrivateKeyFileSecretId,
            optPrivateKeyPassphrase,
            optPrivateKeyPassphraseSecretId,
            optPublicKeyFingerprint,
            optShouldUseResourcePrincipal,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--os-region",
              description:
                "The name of the region. e.g.: us-ashburn-1 If the region is not provided",
              args: { name: "os-region" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-oracle-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Oracle technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optUsername2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optPassword,
            optPasswordSecretId,
            optConnectionString,
            {
              name: "--authentication-mode",
              description: "Authentication mode",
              args: { name: "authentication-mode" },
            },
            optWallet,
            {
              name: "--wallet-secret-id",
              description:
                "The OCID of the Secret where the wallet file is stored",
              args: { name: "wallet-secret-id" },
            },
            {
              name: "--session-mode",
              description:
                "Specifies the session mode for the database connection",
              args: { name: "session-mode" },
            },
            optDatabaseId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-oracle-ai-data-platform-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Oracle AI Data Platform technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--connection-url",
              description: "Connection URL",
              args: { name: "connection-url" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optTenancyId,
            optUserId,
            optPrivateKeyFileSecretId,
            optPrivateKeyPassphraseSecretId,
            optPrivateKeyFile,
            optPrivateKeyPassphrase,
            optPublicKeyFingerprint,
            optShouldUseResourcePrincipal,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConnectionRegion,
            optFromJson,
          ],
        },
        {
          name: "update-goldengate-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--deployment-id",
              description: "The OCID of the deployment being referenced",
              args: { name: "deployment-id" },
            },
            optHost,
            optPort,
            {
              name: "--username",
              description:
                "The username credential existing in the Oracle GoldenGate used to be connected to",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password used to connect to the Oracle GoldenGate accessed trough this connection",
              args: { name: "password" },
            },
            optPasswordSecretId,
            optPrivateIp,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-kafka-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--stream-pool-id",
              description: "The OCID of the stream pool being referenced",
              args: { name: "stream-pool-id" },
            },
            {
              name: "--cluster-id",
              description:
                "The OCID of the Kafka cluster being referenced from OCI Streaming with Apache Kafka",
              args: { name: "cluster-id" },
            },
            {
              name: "--bootstrap-servers",
              description: "Kafka bootstrap",
              args: { name: "json" },
            },
            {
              name: "--security-protocol",
              description: "Security Type for Kafka",
              args: { name: "security-protocol" },
            },
            optUsername,
            optPassword,
            optPasswordSecretId,
            optTrustStore,
            optTrustStoreSecretId2,
            optTrustStorePassword,
            {
              name: "--trust-store-password-secret-id",
              description:
                "The OCID of the Secret where the kafka TrustStore password is stored",
              args: { name: "trust-store-password-secret-id" },
            },
            optKeyStore,
            optKeyStoreSecretId2,
            optKeyStorePassword,
            {
              name: "--key-store-password-secret-id",
              description:
                "The OCID of the Secret where the kafka KeyStore password is stored",
              args: { name: "key-store-password-secret-id" },
            },
            optSslKeyPassword,
            {
              name: "--ssl-key-password-secret-id",
              description:
                "The OCID of the Secret where the kafka Ssl Key password is stored",
              args: { name: "ssl-key-password-secret-id" },
            },
            {
              name: "--consumer-properties",
              description:
                "The base64 encoded content of the consumer.properties file",
              args: { name: "consumer-properties" },
            },
            {
              name: "--producer-properties",
              description:
                "The base64 encoded content of the producer.properties file",
              args: { name: "producer-properties" },
            },
            optShouldUseResourcePrincipal,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-mysql-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            optUsername,
            optPassword,
            optPasswordSecretId,
            optHost,
            optPort,
            optDatabaseName2,
            {
              name: "--security-protocol",
              description: "Security Type for MySQL",
              args: { name: "security-protocol" },
            },
            {
              name: "--ssl-mode",
              description: "SSL modes for MySQL",
              args: { name: "ssl-mode" },
            },
            optSslCa,
            optSslCrl,
            {
              name: "--ssl-cert",
              description:
                "Client Certificate - The base64 encoded content of a .pem or .crt file containing the client public key",
              args: { name: "ssl-cert" },
            },
            {
              name: "--ssl-key",
              description:
                "Client Key - The base64 encoded content of a .pem or .crt file containing the client private key",
              args: { name: "ssl-key" },
            },
            {
              name: "--ssl-key-secret-id",
              description:
                "The OCID of the Secret that stores the Client Key - The content of a .pem or .crt file containing the client",
              args: { name: "ssl-key-secret-id" },
            },
            optPrivateIp,
            optAdditionalAttributes,
            optDbSystemId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-object-storage-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            optTenancyId,
            optUserId,
            optPrivateKeyFile,
            optPrivateKeyFileSecretId,
            optPrivateKeyPassphrase,
            optPrivateKeyPassphraseSecretId,
            optPublicKeyFingerprint,
            optShouldUseResourcePrincipal,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--os-region",
              description:
                "The name of the region. e.g.: us-ashburn-1 If the region is not provided",
              args: { name: "os-region" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-oracle-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            optUsername,
            optPassword,
            optPasswordSecretId,
            optConnectionString,
            {
              name: "--authentication-mode",
              description: "Authentication mode",
              args: { name: "authentication-mode" },
            },
            optWallet,
            {
              name: "--wallet-secret-id",
              description:
                "The OCID of the Secret where the wallet file is stored",
              args: { name: "wallet-secret-id" },
            },
            {
              name: "--session-mode",
              description:
                "Specifies the session mode for the database connection",
              args: { name: "session-mode" },
            },
            optPrivateIp,
            optDatabaseId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-oracle-ai-data-platform-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--connection-url",
              description: "Connection URL",
              args: { name: "connection-url" },
            },
            optTenancyId,
            optUserId,
            optPrivateKeyFileSecretId,
            optPrivateKeyPassphraseSecretId,
            optPrivateKeyFile,
            optPrivateKeyPassphrase,
            optPublicKeyFingerprint,
            optShouldUseResourcePrincipal,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConnectionRegion,
            optFromJson,
          ],
        },
        {
          name: "create-azure-data-lake-storage-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Azure Data Lake Storage technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--authentication-type",
              description:
                "Used authentication mechanism to access Azure Data Lake Storage",
              args: { name: "authentication-type" },
              isRequired: true,
            },
            {
              name: "--account-name",
              description: "Sets the Azure storage account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--account-key",
              description: "Azure storage account key",
              args: { name: "account-key" },
            },
            {
              name: "--account-key-secret-id",
              description:
                "The OCID of the Secret where the account key is stored",
              args: { name: "account-key-secret-id" },
            },
            {
              name: "--sas-token",
              description:
                "Credential that uses a shared access signature (SAS) to authenticate to an Azure Service",
              args: { name: "sas-token" },
            },
            {
              name: "--sas-token-secret-id",
              description:
                "The OCID of the Secret where the sas token is stored",
              args: { name: "sas-token-secret-id" },
            },
            {
              name: "--azure-tenant-id",
              description: "Azure tenant ID of the application",
              args: { name: "azure-tenant-id" },
            },
            {
              name: "--client-id",
              description: "Azure client ID of the application",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description:
                "Azure client secret (aka application password) for authentication",
              args: { name: "client-secret" },
            },
            optClientSecretSecretId,
            {
              name: "--azure-authority-host",
              description:
                "The endpoint used for authentication with Microsoft Entra ID (formerly Azure Active Directory)",
              args: { name: "azure-authority-host" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-endpoint",
              description:
                "Azure Storage service endpoint. e.g: https://test.blob.core.windows.net",
              args: { name: "connection-endpoint" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-azure-synapse-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Azure Synapse Analytics technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--connection-string",
              description:
                "JDBC connection string. e.g.: 'jdbc:sqlserver://<synapse-workspace>.sql.azuresynapse.net:1433;database=<db-nam",
              args: { name: "connection-string" },
              isRequired: true,
            },
            optUsername2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optPassword,
            optPasswordSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-kafka-schema-registry-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description:
                "The Kafka (e.g. Confluent) Schema Registry technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--url",
              description:
                "Kafka Schema Registry URL. e.g.: 'https://server1.us.oracle.com:8081'",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--authentication-type",
              description:
                "Used authentication mechanism to access Schema Registry",
              args: { name: "authentication-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--username",
              description:
                "The username to access Schema Registry using basic authentication",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password to access Schema Registry using basic authentication",
              args: { name: "password" },
            },
            {
              name: "--password-secret-id",
              description:
                "The OCID of the Secret where the Kafka Schema Registry password is stored",
              args: { name: "password-secret-id" },
            },
            optTrustStore,
            optTrustStoreSecretId,
            optTrustStorePassword,
            {
              name: "--trust-store-password-secret-id",
              description:
                "The OCID of the Secret where the kafka Ssl TrustStore password is stored",
              args: { name: "trust-store-password-secret-id" },
            },
            optKeyStore,
            optKeyStoreSecretId,
            optKeyStorePassword,
            {
              name: "--key-store-password-secret-id",
              description:
                "The OCID of the Secret where the kafka Ssl KeyStore password is stored",
              args: { name: "key-store-password-secret-id" },
            },
            {
              name: "--ssl-key-password",
              description: "The password for the cert inside the KeyStore",
              args: { name: "ssl-key-password" },
            },
            {
              name: "--ssl-key-password-secret-id",
              description:
                "The OCID of the Secret that stores the password for the cert inside the KeyStore",
              args: { name: "ssl-key-password-secret-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-postgresql-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The PostgreSQL technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDatabaseName,
            optUsername2,
            {
              name: "--security-protocol",
              description: "Security protocol for PostgreSQL",
              args: { name: "security-protocol" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optHost,
            optPort,
            optPassword,
            optPasswordSecretId,
            optAdditionalAttributes,
            {
              name: "--ssl-mode",
              description: "SSL modes for PostgreSQL",
              args: { name: "ssl-mode" },
            },
            {
              name: "--ssl-ca",
              description:
                "The base64 encoded certificate of the trusted certificate authorities (Trusted CA) for PostgreSQL",
              args: { name: "ssl-ca" },
            },
            optSslCrl,
            {
              name: "--ssl-cert",
              description:
                "The base64 encoded certificate of the PostgreSQL server",
              args: { name: "ssl-cert" },
            },
            {
              name: "--ssl-key",
              description:
                "The base64 encoded private key of the PostgreSQL server",
              args: { name: "ssl-key" },
            },
            {
              name: "--ssl-key-secret-id",
              description:
                "The OCID of the Secret that stores the private key of the PostgreSQL server",
              args: { name: "ssl-key-secret-id" },
            },
            optDbSystemId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-azure-data-lake-storage-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--authentication-type",
              description:
                "Used authentication mechanism to access Azure Data Lake Storage",
              args: { name: "authentication-type" },
            },
            {
              name: "--account-name",
              description: "Sets the Azure storage account name",
              args: { name: "account-name" },
            },
            {
              name: "--account-key",
              description: "Azure storage account key",
              args: { name: "account-key" },
            },
            {
              name: "--account-key-secret-id",
              description:
                "The OCID of the Secret where the account key is stored",
              args: { name: "account-key-secret-id" },
            },
            {
              name: "--sas-token",
              description:
                "Credential that uses a shared access signature (SAS) to authenticate to an Azure Service",
              args: { name: "sas-token" },
            },
            {
              name: "--sas-token-secret-id",
              description:
                "The OCID of the Secret where the sas token is stored",
              args: { name: "sas-token-secret-id" },
            },
            {
              name: "--azure-tenant-id",
              description: "Azure tenant ID of the application",
              args: { name: "azure-tenant-id" },
            },
            {
              name: "--client-id",
              description: "Azure client ID of the application",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description:
                "Azure client secret (aka application password) for authentication",
              args: { name: "client-secret" },
            },
            optClientSecretSecretId,
            {
              name: "--azure-authority-host",
              description:
                "The endpoint used for authentication with Microsoft Entra ID (formerly Azure Active Directory)",
              args: { name: "azure-authority-host" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-endpoint",
              description:
                "Azure Storage service endpoint. e.g: https://test.blob.core.windows.net",
              args: { name: "connection-endpoint" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-azure-synapse-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--connection-string",
              description:
                "JDBC connection string. e.g.: 'jdbc:sqlserver://<synapse-workspace>.sql.azuresynapse.net:1433;database=<db-nam",
              args: { name: "connection-string" },
            },
            optUsername,
            optPassword,
            optPasswordSecretId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-kafka-schema-registry-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--url",
              description:
                "Kafka Schema Registry URL. e.g.: 'https://server1.us.oracle.com:8081'",
              args: { name: "url" },
            },
            {
              name: "--authentication-type",
              description:
                "Used authentication mechanism to access Schema Registry",
              args: { name: "authentication-type" },
            },
            {
              name: "--username",
              description:
                "The username to access Schema Registry using basic authentication",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password to access Schema Registry using basic authentication",
              args: { name: "password" },
            },
            optPasswordSecretId,
            optTrustStore,
            optTrustStoreSecretId,
            optTrustStorePassword,
            {
              name: "--trust-store-password-secret-id",
              description:
                "The OCID of the Secret where the kafka Ssl TrustStore password is stored",
              args: { name: "trust-store-password-secret-id" },
            },
            optKeyStore,
            optKeyStoreSecretId,
            optKeyStorePassword,
            {
              name: "--key-store-password-secret-id",
              description:
                "The OCID of the Secret where the kafka Ssl KeyStore password is stored",
              args: { name: "key-store-password-secret-id" },
            },
            {
              name: "--ssl-key-password",
              description: "The password for the cert inside the KeyStore",
              args: { name: "ssl-key-password" },
            },
            {
              name: "--ssl-key-password-secret-id",
              description:
                "The OCID of the Secret that stores the password for the cert inside the KeyStore",
              args: { name: "ssl-key-password-secret-id" },
            },
            optPrivateIp,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-postgresql-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            optDatabaseName2,
            optHost,
            optPort,
            optUsername,
            optPassword,
            optPasswordSecretId,
            optAdditionalAttributes,
            {
              name: "--security-protocol",
              description: "Security protocol for PostgreSQL",
              args: { name: "security-protocol" },
            },
            {
              name: "--ssl-mode",
              description: "SSL modes for PostgreSQL",
              args: { name: "ssl-mode" },
            },
            {
              name: "--ssl-ca",
              description:
                "The base64 encoded certificate of the trusted certificate authorities (Trusted CA) for PostgreSQL",
              args: { name: "ssl-ca" },
            },
            optSslCrl,
            {
              name: "--ssl-cert",
              description:
                "The base64 encoded certificate of the PostgreSQL server",
              args: { name: "ssl-cert" },
            },
            {
              name: "--ssl-key",
              description:
                "The base64 encoded private key of the PostgreSQL server",
              args: { name: "ssl-key" },
            },
            {
              name: "--ssl-key-secret-id",
              description:
                "The OCID of the Secret that stores the private key of the PostgreSQL server",
              args: { name: "ssl-key-secret-id" },
            },
            optPrivateIp,
            optDbSystemId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-amazon-s3-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Amazon S3 technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--access-key-id",
              description: "Access key ID to access the Amazon S3 bucket",
              args: { name: "access-key-id" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--secret-access-key",
              description: "Secret access key to access the Amazon S3 bucket",
              args: { name: "secret-access-key" },
            },
            {
              name: "--secret-access-key-secret-id",
              description:
                "The OCID of the Secret where the Secret Access Key is stored",
              args: { name: "secret-access-key-secret-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-endpoint",
              description:
                "The Amazon Endpoint for S3. e.g.: https://my-bucket.s3.us-east-1.amazonaws.com If not provided",
              args: { name: "connection-endpoint" },
            },
            {
              name: "--connection-region",
              description:
                "The name of the AWS region where the bucket is created",
              args: { name: "connection-region" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-hdfs-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Hadoop Distributed File System technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--core-site-xml",
              description:
                "The base64 encoded content of the Hadoop Distributed File System configuration file (core-site.xml)",
              args: { name: "core-site-xml" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-microsoft-sqlserver-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Microsoft SQL Server technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDatabaseName,
            {
              name: "--host",
              description: "The name or address of a host",
              args: { name: "host" },
              isRequired: true,
            },
            {
              name: "--port",
              description:
                "The port of an endpoint usually specified for a connection",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--username",
              description:
                "The username Oracle GoldenGate uses to connect to the Microsoft SQL Server",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: "--security-protocol",
              description: "Security Type for Microsoft SQL Server",
              args: { name: "security-protocol" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--password",
              description:
                "The password Oracle GoldenGate uses to connect the associated Microsoft SQL Server",
              args: { name: "password" },
            },
            {
              name: "--password-secret-id",
              description:
                "The OCID of the Secret that stores the password Oracle GoldenGate uses to connect the associated Microsoft",
              args: { name: "password-secret-id" },
            },
            optAdditionalAttributes,
            optSslCa,
            {
              name: "--should-validate-server-certificate",
              description:
                "If set to true, the driver validates the certificate that is sent by the database server",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-mongo-db-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The MongoDB technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--connection-string",
              description:
                "MongoDB connection string. e.g.: 'mongodb://mongodb0.example.com:27017/recordsrecords'",
              args: { name: "connection-string" },
            },
            {
              name: "--username",
              description:
                "The username Oracle GoldenGate uses to connect to the database",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password Oracle GoldenGate uses to connect the associated database",
              args: { name: "password" },
            },
            {
              name: "--password-secret-id",
              description:
                "The OCID of the Secret that stores the password Oracle GoldenGate uses to connect the associated database",
              args: { name: "password-secret-id" },
            },
            {
              name: "--database-id",
              description: "The OCID of the Oracle Autonomous Json Database",
              args: { name: "database-id" },
            },
            {
              name: "--security-protocol",
              description: "Security Type for MongoDB",
              args: { name: "security-protocol" },
            },
            {
              name: "--tls-ca-file",
              description:
                "Database Certificate - The base64 encoded content of a .pem file, containing the server public key",
              args: { name: "tls-ca-file", template: "filepaths" },
            },
            {
              name: "--tls-certificate-key-file",
              description:
                "Client Certificate - The base64 encoded content of a .pem file, containing the client public key",
              args: { name: "tls-certificate-key-file", template: "filepaths" },
            },
            {
              name: "--tls-certificate-key-file-secret-id",
              description:
                "The OCID of the Secret that stores the certificate key file of the mtls connection",
              args: { name: "tls-certificate-key-file-secret-id" },
            },
            {
              name: "--tls-certificate-key-file-password",
              description: "Client Certificate key file password",
              args: { name: "tls-certificate-key-file-password" },
            },
            {
              name: "--tls-certificate-key-file-password-secret-id",
              description:
                "The OCID of the Secret that stores the password of the tls certificate key file",
              args: { name: "tls-certificate-key-file-password-secret-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-oracle-nosql-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Oracle NoSQL technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optTenancyId,
            {
              name: "--user-id",
              description:
                "The OCID of the OCI user who will access the Oracle NoSQL database",
              args: { name: "user-id" },
            },
            optPrivateKeyFile,
            optPrivateKeyFileSecretId,
            optPrivateKeyPassphrase,
            optPrivateKeyPassphraseSecretId,
            optPublicKeyFingerprint,
            optShouldUseResourcePrincipal,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConnectionRegion,
            optFromJson,
          ],
        },
        {
          name: "create-snowflake-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Snowflake technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--connection-url",
              description:
                "JDBC connection URL. e.g.: 'jdbc:snowflake://<account_name>.snowflakecomputing.com/?warehouse=<warehouse-name>",
              args: { name: "connection-url" },
              isRequired: true,
            },
            {
              name: "--authentication-type",
              description: "Used authentication mechanism to access Snowflake",
              args: { name: "authentication-type" },
              isRequired: true,
            },
            {
              name: "--username",
              description:
                "The username Oracle GoldenGate uses to connect to Snowflake",
              args: { name: "username" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--password",
              description:
                "The password Oracle GoldenGate uses to connect to Snowflake platform",
              args: { name: "password" },
            },
            optPasswordSecretId,
            {
              name: "--private-key-file",
              description:
                "The base64 encoded content of private key file in PEM format",
              args: { name: "private-key-file", template: "filepaths" },
            },
            optPrivateKeyFileSecretId,
            {
              name: "--private-key-passphrase",
              description: "Password if the private key file is encrypted",
              args: { name: "private-key-passphrase" },
            },
            {
              name: "--private-key-passphrase-secret-id",
              description:
                "The OCID of the Secret that stores the password for the private key file",
              args: { name: "private-key-passphrase-secret-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-amazon-s3-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--access-key-id",
              description: "Access key ID to access the Amazon S3 bucket",
              args: { name: "access-key-id" },
            },
            {
              name: "--secret-access-key",
              description: "Secret access key to access the Amazon S3 bucket",
              args: { name: "secret-access-key" },
            },
            {
              name: "--secret-access-key-secret-id",
              description:
                "The OCID of the Secret where the Secret Access Key is stored",
              args: { name: "secret-access-key-secret-id" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-endpoint",
              description:
                "The Amazon Endpoint for S3. e.g.: https://my-bucket.s3.us-east-1.amazonaws.com If not provided",
              args: { name: "connection-endpoint" },
            },
            {
              name: "--connection-region",
              description:
                "The name of the AWS region where the bucket is created",
              args: { name: "connection-region" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-hdfs-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--core-site-xml",
              description:
                "The base64 encoded content of the Hadoop Distributed File System configuration file (core-site.xml)",
              args: { name: "core-site-xml" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-microsoft-sqlserver-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            optDatabaseName2,
            optHost,
            optPort,
            {
              name: "--username",
              description:
                "The username Oracle GoldenGate uses to connect to the Microsoft SQL Server",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password Oracle GoldenGate uses to connect the associated Microsoft SQL Server",
              args: { name: "password" },
            },
            {
              name: "--password-secret-id",
              description:
                "The OCID of the Secret that stores the password Oracle GoldenGate uses to connect the associated Microsoft",
              args: { name: "password-secret-id" },
            },
            optAdditionalAttributes,
            {
              name: "--security-protocol",
              description: "Security Type for Microsoft SQL Server",
              args: { name: "security-protocol" },
            },
            optSslCa,
            {
              name: "--should-validate-server-certificate",
              description:
                "If set to true, the driver validates the certificate that is sent by the database server",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optPrivateIp,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-mongo-db-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--connection-string",
              description:
                "MongoDB connection string. e.g.: 'mongodb://mongodb0.example.com:27017/recordsrecords'",
              args: { name: "connection-string" },
            },
            {
              name: "--username",
              description:
                "The username Oracle GoldenGate uses to connect to the database",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password Oracle GoldenGate uses to connect the associated database",
              args: { name: "password" },
            },
            {
              name: "--password-secret-id",
              description:
                "The OCID of the Secret that stores the password Oracle GoldenGate uses to connect the associated database",
              args: { name: "password-secret-id" },
            },
            {
              name: "--database-id",
              description: "The OCID of the Oracle Autonomous Json Database",
              args: { name: "database-id" },
            },
            {
              name: "--security-protocol",
              description: "Security Type for MongoDB",
              args: { name: "security-protocol" },
            },
            {
              name: "--tls-ca-file",
              description:
                "Database Certificate - The base64 encoded content of a .pem file, containing the server public key",
              args: { name: "tls-ca-file", template: "filepaths" },
            },
            {
              name: "--tls-certificate-key-file",
              description:
                "Client Certificate - The base64 encoded content of a .pem file, containing the client public key",
              args: { name: "tls-certificate-key-file", template: "filepaths" },
            },
            {
              name: "--tls-certificate-key-file-secret-id",
              description:
                "The OCID of the Secret that stores the certificate key file of the mtls connection",
              args: { name: "tls-certificate-key-file-secret-id" },
            },
            {
              name: "--tls-certificate-key-file-password",
              description: "Client Certificate key file password",
              args: { name: "tls-certificate-key-file-password" },
            },
            {
              name: "--tls-certificate-key-file-password-secret-id",
              description:
                "The OCID of the Secret that stores the password of the tls certificate key file",
              args: { name: "tls-certificate-key-file-password-secret-id" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-oracle-nosql-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            optTenancyId,
            {
              name: "--user-id",
              description:
                "The OCID of the OCI user who will access the Oracle NoSQL database",
              args: { name: "user-id" },
            },
            optPrivateKeyFile,
            optPrivateKeyFileSecretId,
            optPrivateKeyPassphrase,
            optPrivateKeyPassphraseSecretId,
            optPublicKeyFingerprint,
            optShouldUseResourcePrincipal,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optConnectionRegion,
            optFromJson,
          ],
        },
        {
          name: "update-snowflake-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--connection-url",
              description:
                "JDBC connection URL. e.g.: 'jdbc:snowflake://<account_name>.snowflakecomputing.com/?warehouse=<warehouse-name>",
              args: { name: "connection-url" },
            },
            {
              name: "--authentication-type",
              description: "Used authentication mechanism to access Snowflake",
              args: { name: "authentication-type" },
            },
            {
              name: "--username",
              description:
                "The username Oracle GoldenGate uses to connect to Snowflake",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password Oracle GoldenGate uses to connect to Snowflake platform",
              args: { name: "password" },
            },
            {
              name: "--password-secret-id",
              description:
                "The OCID of the Secret that stores the password Oracle GoldenGate uses to connect to Snowflake platform",
              args: { name: "password-secret-id" },
            },
            {
              name: "--private-key-file",
              description:
                "The base64 encoded content of private key file in PEM format",
              args: { name: "private-key-file", template: "filepaths" },
            },
            optPrivateKeyFileSecretId,
            {
              name: "--private-key-passphrase",
              description: "Password if the private key file is encrypted",
              args: { name: "private-key-passphrase" },
            },
            {
              name: "--private-key-passphrase-secret-id",
              description:
                "The OCID of the Secret that stores the password for the private key file",
              args: { name: "private-key-passphrase-secret-id" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-jms-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Java Message Service technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--should-use-jndi",
              description:
                "If set to true, Java Naming and Directory Interface (JNDI) properties should be provided",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--jndi-connection-factory",
              description:
                "The Connection Factory can be looked up using this name. e.g.: 'ConnectionFactory'",
              args: { name: "jndi-connection-factory" },
            },
            {
              name: "--jndi-provider-url",
              description:
                "The URL that Java Message Service will use to contact the JNDI provider. e.g",
              args: { name: "jndi-provider-url" },
            },
            {
              name: "--jndi-initial-context-factory",
              description:
                "The implementation of javax.naming.spi.InitialContextFactory interface that the client uses to obtain initial",
              args: { name: "jndi-initial-context-factory" },
            },
            {
              name: "--jndi-security-principal",
              description:
                "Specifies the identity of the principal (user) to be authenticated. e.g.: 'admin2'",
              args: { name: "jndi-security-principal" },
            },
            {
              name: "--jndi-security-credentials",
              description: "The password associated to the principal",
              args: { name: "jndi-security-credentials" },
            },
            {
              name: "--jndi-security-credentials-secret-id",
              description:
                "The OCID of the Secret where the security credentials are stored associated to the principal",
              args: { name: "jndi-security-credentials-secret-id" },
            },
            {
              name: "--connection-url",
              description:
                "Connection URL of the Java Message Service, specifying the protocol, host, and port. e.g",
              args: { name: "connection-url" },
            },
            {
              name: "--connection-factory",
              description:
                "The of Java class implementing javax.jms.ConnectionFactory interface supplied by the Java Message Service",
              args: { name: "connection-factory" },
            },
            {
              name: "--username",
              description:
                "The username Oracle GoldenGate uses to connect to the Java Message Service",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password Oracle GoldenGate uses to connect the associated Java Message Service",
              args: { name: "password" },
            },
            optPasswordSecretId,
            {
              name: "--security-protocol",
              description: "Security protocol for Java Message Service",
              args: { name: "security-protocol" },
            },
            {
              name: "--authentication-type",
              description: "Authentication type for Java Message Service",
              args: { name: "authentication-type" },
            },
            optTrustStore,
            optTrustStoreSecretId2,
            optTrustStorePassword,
            {
              name: "--trust-store-password-secret-id",
              description:
                "The OCID of the Secret where the TrustStore password is stored",
              args: { name: "trust-store-password-secret-id" },
            },
            optKeyStore,
            optKeyStoreSecretId2,
            optKeyStorePassword,
            {
              name: "--key-store-password-secret-id",
              description:
                "The OCID of the Secret where the KeyStore password is stored",
              args: { name: "key-store-password-secret-id" },
            },
            optSslKeyPassword,
            {
              name: "--ssl-key-password-secret-id",
              description:
                "The OCID of the Secret where the password is stored for the cert inside of the Keystore",
              args: { name: "ssl-key-password-secret-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-jms-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--should-use-jndi",
              description:
                "If set to true, Java Naming and Directory Interface (JNDI) properties should be provided",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jndi-connection-factory",
              description:
                "The Connection Factory can be looked up using this name. e.g.: 'ConnectionFactory'",
              args: { name: "jndi-connection-factory" },
            },
            {
              name: "--jndi-provider-url",
              description:
                "The URL that Java Message Service will use to contact the JNDI provider. e.g",
              args: { name: "jndi-provider-url" },
            },
            {
              name: "--jndi-initial-context-factory",
              description:
                "The implementation of javax.naming.spi.InitialContextFactory interface that the client uses to obtain initial",
              args: { name: "jndi-initial-context-factory" },
            },
            {
              name: "--jndi-security-principal",
              description:
                "Specifies the identity of the principal (user) to be authenticated. e.g.: 'admin2'",
              args: { name: "jndi-security-principal" },
            },
            {
              name: "--jndi-security-credentials",
              description: "The password associated to the principal",
              args: { name: "jndi-security-credentials" },
            },
            {
              name: "--jndi-security-credentials-secret-id",
              description:
                "The OCID of the Secret where the security credentials are stored associated to the principal",
              args: { name: "jndi-security-credentials-secret-id" },
            },
            {
              name: "--connection-url",
              description:
                "Connection URL of the Java Message Service, specifying the protocol, host, and port. e.g",
              args: { name: "connection-url" },
            },
            {
              name: "--connection-factory",
              description:
                "The of Java class implementing javax.jms.ConnectionFactory interface supplied by the Java Message Service",
              args: { name: "connection-factory" },
            },
            {
              name: "--username",
              description:
                "The username Oracle GoldenGate uses to connect to the Java Message Service",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password Oracle GoldenGate uses to connect the associated Java Message Service",
              args: { name: "password" },
            },
            optPasswordSecretId,
            {
              name: "--security-protocol",
              description: "Security protocol for Java Message Service",
              args: { name: "security-protocol" },
            },
            {
              name: "--authentication-type",
              description: "Authentication type for Java Message Service",
              args: { name: "authentication-type" },
            },
            optTrustStore,
            optTrustStoreSecretId2,
            optTrustStorePassword,
            {
              name: "--trust-store-password-secret-id",
              description:
                "The OCID of the Secret where the TrustStore password is stored",
              args: { name: "trust-store-password-secret-id" },
            },
            optKeyStore,
            optKeyStoreSecretId2,
            optKeyStorePassword,
            {
              name: "--key-store-password-secret-id",
              description:
                "The OCID of the Secret where the KeyStore password is stored",
              args: { name: "key-store-password-secret-id" },
            },
            optSslKeyPassword,
            {
              name: "--ssl-key-password-secret-id",
              description:
                "The OCID of the Secret where the password is stored for the cert inside of the Keystore",
              args: { name: "ssl-key-password-secret-id" },
            },
            optPrivateIp,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-amazon-kinesis-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Amazon Kinesis technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--access-key-id",
              description: "Access key ID to access the Amazon Kinesis",
              args: { name: "access-key-id" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--secret-access-key",
              description: "Secret access key to access the Amazon Kinesis",
              args: { name: "secret-access-key" },
            },
            {
              name: "--secret-access-key-secret-id",
              description:
                "The OCID of the Secret where the secret access key is stored",
              args: { name: "secret-access-key-secret-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-endpoint",
              description:
                "The endpoint URL of the Amazon Kinesis service. e.g",
              args: { name: "connection-endpoint" },
            },
            {
              name: "--connection-region",
              description: "The name of the AWS region",
              args: { name: "connection-region" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-amazon-redshift-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Amazon Redshift technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--connection-url",
              description:
                "Connection URL. e.g.: 'jdbc:redshift://aws-redshift-instance.aaaaaaaaaaaa.us-east-2.redshift.amazonaws.com:543",
              args: { name: "connection-url" },
              isRequired: true,
            },
            optUsername2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optPassword,
            optPasswordSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-elasticsearch-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Elasticsearch technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--servers",
              description:
                "Comma separated list of Elasticsearch server addresses, specified as host:port entries",
              args: { name: "servers" },
              isRequired: true,
            },
            {
              name: "--security-protocol",
              description: "Security protocol for Elasticsearch",
              args: { name: "security-protocol" },
              isRequired: true,
            },
            {
              name: "--authentication-type",
              description: "Authentication type for Elasticsearch",
              args: { name: "authentication-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optUsername,
            optPassword,
            optPasswordSecretId,
            {
              name: "--fingerprint",
              description: "Fingerprint required by TLS security protocol",
              args: { name: "fingerprint" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-generic-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Generic technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--host",
              description: "Host and port separated by colon",
              args: { name: "host" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-google-big-query-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Google BigQuery technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optServiceAccountKeyFile,
            optServiceAccountKeyFileSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-endpoint",
              description:
                "A legal URL to connect to BigQuery including scheme, server name and port (if not the default port)",
              args: { name: "connection-endpoint" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-google-cloud-storage-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Google Cloud Storage technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optServiceAccountKeyFile,
            optServiceAccountKeyFileSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-endpoint",
              description:
                "A legal URL to connect to Google Cloud Storage including scheme, server name and port",
              args: { name: "connection-endpoint" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-redis-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Redis technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--security-protocol",
              description: "Security protocol for Redis",
              args: { name: "security-protocol" },
              isRequired: true,
            },
            {
              name: "--authentication-type",
              description:
                "Authenticationentication type for the Redis database",
              args: { name: "authentication-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--servers",
              description:
                "Comma separated list of Redis server addresses, specified as host:port entries, where :port is optional",
              args: { name: "servers" },
            },
            optUsername,
            optPassword,
            optPasswordSecretId,
            optTrustStore,
            optTrustStoreSecretId,
            optTrustStorePassword,
            {
              name: "--trust-store-password-secret-id",
              description:
                "The OCID of the Secret where the Redis TrustStore password is stored",
              args: { name: "trust-store-password-secret-id" },
            },
            optKeyStore,
            optKeyStoreSecretId,
            optKeyStorePassword,
            {
              name: "--key-store-password-secret-id",
              description:
                "The OCID of the Secret where the Redis KeyStore password is stored",
              args: { name: "key-store-password-secret-id" },
            },
            {
              name: "--redis-cluster-id",
              description: "The OCID of the Redis cluster",
              args: { name: "redis-cluster-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-amazon-kinesis-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--access-key-id",
              description: "Access key ID to access the Amazon Kinesis",
              args: { name: "access-key-id" },
            },
            {
              name: "--secret-access-key",
              description: "Secret access key to access the Amazon Kinesis",
              args: { name: "secret-access-key" },
            },
            {
              name: "--secret-access-key-secret-id",
              description:
                "The OCID of the Secret where the secret access key is stored",
              args: { name: "secret-access-key-secret-id" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-endpoint",
              description:
                "The endpoint URL of the Amazon Kinesis service. e.g",
              args: { name: "connection-endpoint" },
            },
            {
              name: "--connection-region",
              description: "The name of the AWS region",
              args: { name: "connection-region" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-amazon-redshift-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--connection-url",
              description:
                "Connection URL. e.g.: 'jdbc:redshift://aws-redshift-instance.aaaaaaaaaaaa.us-east-2.redshift.amazonaws.com:543",
              args: { name: "connection-url" },
            },
            optUsername,
            optPassword,
            optPasswordSecretId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-elasticsearch-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--servers",
              description:
                "Comma separated list of Elasticsearch server addresses, specified as host:port entries",
              args: { name: "servers" },
            },
            {
              name: "--security-protocol",
              description: "Security protocol for Elasticsearch",
              args: { name: "security-protocol" },
            },
            {
              name: "--authentication-type",
              description: "Authentication type for Elasticsearch",
              args: { name: "authentication-type" },
            },
            optUsername,
            optPassword,
            optPasswordSecretId,
            {
              name: "--fingerprint",
              description: "Fingerprint required by TLS security protocol",
              args: { name: "fingerprint" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-generic-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--host",
              description: "Host and port separated by colon",
              args: { name: "host" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-google-big-query-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            optServiceAccountKeyFile,
            optServiceAccountKeyFileSecretId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-endpoint",
              description:
                "A legal URL to connect to BigQuery including scheme, server name and port (if not the default port)",
              args: { name: "connection-endpoint" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-google-cloud-storage-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            optServiceAccountKeyFile,
            optServiceAccountKeyFileSecretId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-endpoint",
              description:
                "A legal URL to connect to Google Cloud Storage including scheme, server name and port",
              args: { name: "connection-endpoint" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-redis-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--servers",
              description:
                "Comma separated list of Redis server addresses, specified as host:port entries, where :port is optional",
              args: { name: "servers" },
            },
            {
              name: "--security-protocol",
              description: "Security protocol for Redis",
              args: { name: "security-protocol" },
            },
            {
              name: "--authentication-type",
              description:
                "Authenticationentication type for the Redis database",
              args: { name: "authentication-type" },
            },
            optUsername,
            optPassword,
            optPasswordSecretId,
            optTrustStore,
            optTrustStoreSecretId,
            optTrustStorePassword,
            {
              name: "--trust-store-password-secret-id",
              description:
                "The OCID of the Secret where the Redis TrustStore password is stored",
              args: { name: "trust-store-password-secret-id" },
            },
            optKeyStore,
            optKeyStoreSecretId,
            optKeyStorePassword,
            {
              name: "--key-store-password-secret-id",
              description:
                "The OCID of the Secret where the Redis KeyStore password is stored",
              args: { name: "key-store-password-secret-id" },
            },
            {
              name: "--redis-cluster-id",
              description: "The OCID of the Redis cluster",
              args: { name: "redis-cluster-id" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a Connection resource",
          options: [
            optConnectionId,
            optType,
            optMessage,
            optIfMatch,
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
          name: "remove-lock",
          description: "Removes a lock from a Connection resource",
          options: [
            optConnectionId,
            optType,
            optIfMatch,
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
          name: "create-db2-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The DB2 technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDatabaseName,
            {
              name: "--host",
              description: "The name or address of a host",
              args: { name: "host" },
              isRequired: true,
            },
            {
              name: "--port",
              description:
                "The port of an endpoint usually specified for a connection",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--username",
              description:
                "The username Oracle GoldenGate uses to connect to the DB2 database",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: "--security-protocol",
              description: "Security protocol for the DB2 database",
              args: { name: "security-protocol" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--password",
              description:
                "The password Oracle GoldenGate uses to connect the associated DB2 database",
              args: { name: "password" },
            },
            optPasswordSecretId,
            optAdditionalAttributes,
            {
              name: "--ssl-client-keystoredb",
              description:
                "The base64 encoded keystore file created at the client containing the server certificate / CA root",
              args: { name: "ssl-client-keystoredb" },
            },
            {
              name: "--ssl-client-keystoredb-secret-id",
              description:
                "The OCID of the Secret where the keystore file stored",
              args: { name: "ssl-client-keystoredb-secret-id" },
            },
            {
              name: "--ssl-client-keystash",
              description:
                "The base64 encoded keystash file which contains the encrypted password to the key database file",
              args: { name: "ssl-client-keystash" },
            },
            {
              name: "--ssl-client-keystash-secret-id",
              description:
                "The OCID of the Secret where the keystash file is stored",
              args: { name: "ssl-client-keystash-secret-id" },
            },
            {
              name: "--ssl-server-certificate",
              description:
                "The base64 encoded file which contains the self-signed server certificate / Certificate Authority",
              args: { name: "ssl-server-certificate" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-db2-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            optDatabaseName2,
            optHost,
            optPort,
            {
              name: "--username",
              description:
                "The username Oracle GoldenGate uses to connect to the DB2 database",
              args: { name: "username" },
            },
            {
              name: "--password",
              description:
                "The password Oracle GoldenGate uses to connect the associated DB2 database",
              args: { name: "password" },
            },
            optPasswordSecretId,
            optAdditionalAttributes,
            {
              name: "--security-protocol",
              description: "Security protocol for the DB2 database",
              args: { name: "security-protocol" },
            },
            {
              name: "--ssl-client-keystoredb",
              description:
                "The base64 encoded keystore file created at the client containing the server certificate / CA root",
              args: { name: "ssl-client-keystoredb" },
            },
            {
              name: "--ssl-client-keystoredb-secret-id",
              description:
                "The OCID of the Secret where the keystore file stored",
              args: { name: "ssl-client-keystoredb-secret-id" },
            },
            {
              name: "--ssl-client-keystash",
              description:
                "The base64 encoded keystash file which contains the encrypted password to the key database file",
              args: { name: "ssl-client-keystash" },
            },
            {
              name: "--ssl-client-keystash-secret-id",
              description:
                "The OCID of the Secret where the keystash file is stored",
              args: { name: "ssl-client-keystash-secret-id" },
            },
            {
              name: "--ssl-server-certificate",
              description:
                "The base64 encoded file which contains the self-signed server certificate / Certificate Authority",
              args: { name: "ssl-server-certificate" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-databricks-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Databricks technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--authentication-type",
              description: "Used authentication mechanism to access Databricks",
              args: { name: "authentication-type" },
              isRequired: true,
            },
            {
              name: "--connection-url",
              description:
                "Connection URL. e.g.: 'jdbc:databricks://adb-33934.4.azuredatabricks.net:443/default;transportMode=http;ssl=1",
              args: { name: "connection-url" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--password",
              description: "The password used to connect to Databricks",
              args: { name: "password" },
            },
            optPasswordSecretId,
            optClientId,
            optClientSecret,
            optClientSecretSecretId,
            {
              name: "--storage-credential-name",
              description: "Optional",
              args: { name: "storage-credential-name" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-databricks-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--authentication-type",
              description: "Used authentication mechanism to access Databricks",
              args: { name: "authentication-type" },
            },
            {
              name: "--connection-url",
              description:
                "Connection URL. e.g.: 'jdbc:databricks://adb-33934.4.azuredatabricks.net:443/default;transportMode=http;ssl=1",
              args: { name: "connection-url" },
            },
            {
              name: "--password",
              description: "The password used to connect to Databricks",
              args: { name: "password" },
            },
            optPasswordSecretId,
            optClientId,
            optClientSecret,
            optClientSecretSecretId,
            {
              name: "--storage-credential-name",
              description: "Optional",
              args: { name: "storage-credential-name" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-google-pub-sub-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Google PubSub technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optServiceAccountKeyFile,
            optServiceAccountKeyFileSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-google-pub-sub-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            optServiceAccountKeyFile,
            optServiceAccountKeyFileSecretId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-microsoft-fabric-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Microsoft Fabric technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--tenant-id",
              description:
                "Azure tenant ID of the application. e.g.: 14593954-d337-4a61-a364-9f758c64f97f",
              args: { name: "tenant-id" },
              isRequired: true,
            },
            {
              name: "--client-id",
              description:
                "Azure client ID of the application. e.g.: 06ecaabf-8b80-4ec8-a0ec-20cbf463703d",
              args: { name: "client-id" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--client-secret",
              description: "Client secret associated with the client id",
              args: { name: "client-secret" },
            },
            optClientSecretSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-endpoint",
              description: "Optional Microsoft Fabric service endpoint",
              args: { name: "connection-endpoint" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-microsoft-fabric-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--tenant-id",
              description:
                "Azure tenant ID of the application. e.g.: 14593954-d337-4a61-a364-9f758c64f97f",
              args: { name: "tenant-id" },
            },
            {
              name: "--client-id",
              description:
                "Azure client ID of the application. e.g.: 06ecaabf-8b80-4ec8-a0ec-20cbf463703d",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "Client secret associated with the client id",
              args: { name: "client-secret" },
            },
            optClientSecretSecretId,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--connection-endpoint",
              description: "Optional Microsoft Fabric service endpoint",
              args: { name: "connection-endpoint" },
            },
            optFromJson,
          ],
        },
        {
          name: "change-subscription",
          description:
            "Associate a GoldanGate connection with a different subscription",
          options: [
            optConnectionId,
            optSubscriptionId,
            {
              name: "--is-default",
              description: "Indicates if the subscription is UCM or not",
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
          name: "create-iceberg-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Iceberg technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            { name: "--catalog", args: { name: "json" }, isRequired: true },
            { name: "--storage", args: { name: "json" }, isRequired: true },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-iceberg-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            { name: "--catalog", args: { name: "json" } },
            { name: "--storage", args: { name: "json" } },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "migrate-secret",
          description: "Migrate Connection attributes",
          options: [
            optConnectionId,
            {
              name: "--secret-compartment-id",
              description: "The OCID of the compartment being referenced",
              args: { name: "secret-compartment-id" },
              isRequired: true,
            },
            optVaultId2,
            {
              name: "--key-id",
              description: "Refers to the customer's master key OCID",
              args: { name: "key-id" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-ai-model-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The AI Model technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--model-key",
              description: "AI model identifier",
              args: { name: "model-key" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--provider-type",
              description: "AI Provider type used by the AI Model Connection",
              args: {
                suggestions: [
                  "OCI_GENERATIVE_AI",
                  "GEMINI",
                  "OPEN_AI",
                  "VOYAGE_AI",
                ],
              },
            },
            {
              name: "--provider-id",
              description:
                "Optional identifier of the AI Provider Connection backing this AI Model Connection",
              args: { name: "provider-id" },
            },
            {
              name: "--max-input-chars",
              description:
                "Maximum number of input characters supported by this AI model connection",
              args: { name: "integer" },
            },
            optAuthDetails,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-ai-model-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--model-key",
              description: "AI model identifier",
              args: { name: "model-key" },
            },
            {
              name: "--max-input-chars",
              description:
                "Maximum number of input characters supported by this AI model connection",
              args: { name: "integer" },
            },
            optAuthDetails,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-ai-provider-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The AI Provider technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--auth-details",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-databricks-engine-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Databricks Engine technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--authentication-type",
              description:
                "Used authentication mechanism to access the Databricks Engine REST API",
              args: { name: "authentication-type" },
              isRequired: true,
            },
            {
              name: "--workspace-url",
              description:
                "Databricks workspace base URL for the REST API. e.g",
              args: { name: "workspace-url" },
              isRequired: true,
            },
            {
              name: "--artifact-location",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--auth-token",
              description:
                "Personal access token used to connect to the Databricks Engine REST API",
              args: { name: "auth-token" },
            },
            {
              name: "--auth-token-secret-id",
              description:
                "The OCID of the Secret where the personal access token is stored",
              args: { name: "auth-token-secret-id" },
            },
            optClientId,
            optClientSecret,
            optClientSecretSecretId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-oracle-ai-data-platform-engine-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Oracle AI Data Platform Engine technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--workspace-url",
              description: "Oracle AI Data Platform workspace URL",
              args: { name: "workspace-url" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-spark-connection",
          description: "Creates a new Connection",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--technology-type",
              description: "The Spark technology type",
              args: { name: "technology-type" },
              isRequired: true,
            },
            {
              name: "--submit-mode",
              description: "Selects the submission channel",
              args: { name: "submit-mode" },
              isRequired: true,
            },
            {
              name: "--authentication-type",
              description: "Authentication type for Spark",
              args: { name: "authentication-type" },
              isRequired: true,
            },
            {
              name: "--security-protocol",
              description: "Security protocol for Spark submission traffic",
              args: { name: "security-protocol" },
              isRequired: true,
            },
            {
              name: "--cluster-endpoint",
              description: "Spark master URL used for job submission",
              args: { name: "cluster-endpoint" },
              isRequired: true,
            },
            {
              name: "--artifact-location",
              args: { name: "json" },
              isRequired: true,
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optLocks,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--rest-endpoint",
              description:
                "Spark standalone REST submission base URL. e.g.: 'https://spark-master.example.com:6066' Applicable only",
              args: { name: "rest-endpoint" },
            },
            {
              name: "--auth-secret",
              description: "The shared secret used for Spark authentication",
              args: { name: "auth-secret" },
            },
            {
              name: "--auth-secret-secret-id",
              description:
                "The OCID of the Secret that stores the Spark authentication shared secret",
              args: { name: "auth-secret-secret-id" },
            },
            {
              name: "--rpc-cipher",
              description: "Cipher transform used for Spark RPC encryption",
              args: { name: "rpc-cipher" },
            },
            {
              name: "--rest-auth-secret-key",
              description:
                "The BASE64URL-encoded HMAC secret key used to sign REST submission requests when the Spark master's REST",
              args: { name: "rest-auth-secret-key" },
            },
            {
              name: "--rest-auth-secret-key-secret-id",
              description:
                "The OCID of the Secret that stores the REST submission signing key",
              args: { name: "rest-auth-secret-key-secret-id" },
            },
            {
              name: "--trust-store",
              description:
                "The base64 encoded content of the trust store used to validate the Spark server certificate",
              args: { name: "trust-store" },
            },
            {
              name: "--trust-store-secret-id",
              description:
                "The OCID of the Secret that stores the trust store content",
              args: { name: "trust-store-secret-id" },
            },
            {
              name: "--trust-store-password",
              description: "Password for the trust store",
              args: { name: "trust-store-password" },
            },
            {
              name: "--trust-store-password-secret-id",
              description:
                "The OCID of the Secret that stores the trust store password",
              args: { name: "trust-store-password-secret-id" },
            },
            {
              name: "--trust-store-type",
              description: "Trust store format used by the Spark client",
              args: { name: "trust-store-type" },
            },
            {
              name: "--key-store",
              description:
                "The base64 encoded content of the client key store used for mutual TLS",
              args: { name: "key-store" },
            },
            {
              name: "--key-store-secret-id",
              description:
                "The OCID of the Secret that stores the client key store content",
              args: { name: "key-store-secret-id" },
            },
            {
              name: "--key-store-password",
              description: "Password for the client key store",
              args: { name: "key-store-password" },
            },
            {
              name: "--key-store-password-secret-id",
              description:
                "The OCID of the Secret that stores the client key store password",
              args: { name: "key-store-password-secret-id" },
            },
            {
              name: "--key-store-type",
              description: "Client key store format used for mutual TLS",
              args: { name: "key-store-type" },
            },
            {
              name: "--ssl-key-password",
              description:
                "Password for the certificate private key inside the client key store",
              args: { name: "ssl-key-password" },
            },
            {
              name: "--ssl-key-password-secret-id",
              description:
                "The OCID of the Secret that stores the private key password",
              args: { name: "ssl-key-password-secret-id" },
            },
            {
              name: "--tls-protocol",
              description: "TLS protocol negotiated by the Spark client",
              args: { name: "tls-protocol" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-ai-provider-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            optAuthDetails,
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-databricks-engine-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--authentication-type",
              description:
                "Used authentication mechanism to access the Databricks Engine REST API",
              args: { name: "authentication-type" },
            },
            {
              name: "--workspace-url",
              description:
                "Databricks workspace base URL for the REST API. e.g",
              args: { name: "workspace-url" },
            },
            {
              name: "--auth-token",
              description:
                "Personal access token used to connect to the Databricks Engine REST API",
              args: { name: "auth-token" },
            },
            {
              name: "--auth-token-secret-id",
              description:
                "The OCID of the Secret where the personal access token is stored",
              args: { name: "auth-token-secret-id" },
            },
            optClientId,
            optClientSecret,
            optClientSecretSecretId,
            { name: "--artifact-location", args: { name: "json" } },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-oracle-ai-data-platform-engine-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--workspace-url",
              description: "Oracle AI Data Platform workspace URL",
              args: { name: "workspace-url" },
            },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-spark-connection",
          description: "Updates the Connection",
          options: [
            optConnectionId,
            optDisplayName2,
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optVaultId,
            optKeyId,
            optNsgIds,
            optSubnetId,
            optRoutingMethod,
            optDoesUseSecretIds,
            optSecurityAttributes,
            {
              name: "--submit-mode",
              description: "Selects the submission channel",
              args: { name: "submit-mode" },
            },
            {
              name: "--authentication-type",
              description: "Authentication type for Spark",
              args: { name: "authentication-type" },
            },
            {
              name: "--security-protocol",
              description: "Security protocol for Spark submission traffic",
              args: { name: "security-protocol" },
            },
            {
              name: "--cluster-endpoint",
              description: "Spark master URL used for job submission",
              args: { name: "cluster-endpoint" },
            },
            {
              name: "--rest-endpoint",
              description:
                "Spark standalone REST submission base URL. e.g.: 'https://spark-master.example.com:6066' Applicable only",
              args: { name: "rest-endpoint" },
            },
            {
              name: "--auth-secret",
              description: "The shared secret used for Spark authentication",
              args: { name: "auth-secret" },
            },
            {
              name: "--auth-secret-secret-id",
              description:
                "The OCID of the Secret that stores the Spark authentication shared secret",
              args: { name: "auth-secret-secret-id" },
            },
            {
              name: "--rpc-cipher",
              description: "Cipher transform used for Spark RPC encryption",
              args: { name: "rpc-cipher" },
            },
            {
              name: "--rest-auth-secret-key",
              description:
                "The BASE64URL-encoded HMAC secret key used to sign REST submission requests when the Spark master's REST",
              args: { name: "rest-auth-secret-key" },
            },
            {
              name: "--rest-auth-secret-key-secret-id",
              description:
                "The OCID of the Secret that stores the REST submission signing key",
              args: { name: "rest-auth-secret-key-secret-id" },
            },
            {
              name: "--trust-store",
              description:
                "The base64 encoded content of the trust store used to validate the Spark server certificate",
              args: { name: "trust-store" },
            },
            {
              name: "--trust-store-secret-id",
              description:
                "The OCID of the Secret that stores the trust store content",
              args: { name: "trust-store-secret-id" },
            },
            {
              name: "--trust-store-password",
              description: "Password for the trust store",
              args: { name: "trust-store-password" },
            },
            {
              name: "--trust-store-password-secret-id",
              description:
                "The OCID of the Secret that stores the trust store password",
              args: { name: "trust-store-password-secret-id" },
            },
            {
              name: "--trust-store-type",
              description: "Trust store format used by the Spark client",
              args: { name: "trust-store-type" },
            },
            {
              name: "--key-store",
              description:
                "The base64 encoded content of the client key store used for mutual TLS",
              args: { name: "key-store" },
            },
            {
              name: "--key-store-secret-id",
              description:
                "The OCID of the Secret that stores the client key store content",
              args: { name: "key-store-secret-id" },
            },
            {
              name: "--key-store-password",
              description: "Password for the client key store",
              args: { name: "key-store-password" },
            },
            {
              name: "--key-store-password-secret-id",
              description:
                "The OCID of the Secret that stores the client key store password",
              args: { name: "key-store-password-secret-id" },
            },
            {
              name: "--key-store-type",
              description: "Client key store format used for mutual TLS",
              args: { name: "key-store-type" },
            },
            {
              name: "--ssl-key-password",
              description:
                "Password for the certificate private key inside the client key store",
              args: { name: "ssl-key-password" },
            },
            {
              name: "--ssl-key-password-secret-id",
              description:
                "The OCID of the Secret that stores the private key password",
              args: { name: "ssl-key-password-secret-id" },
            },
            {
              name: "--tls-protocol",
              description: "TLS protocol negotiated by the Spark client",
              args: { name: "tls-protocol" },
            },
            { name: "--artifact-location", args: { name: "json" } },
            optIfMatch,
            optIsLockOverride,
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
      name: "deployment",
      description:
        "A container for your OCI GoldenGate resources, such as the OCI GoldenGate deployment console",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves the Deployment into a different compartment within the same tenancy",
          options: [
            optDeploymentId,
            optCompartmentId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Deployment",
          options: [
            optDisplayName,
            optCompartmentId,
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet of the deployment's private endpoint",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            optLicenseModel,
            {
              name: "--is-byol-cpu-core-count-limit-enabled",
              description:
                "Flag to allow to configure the 'Bring Your Own License' (BYOL) license type CPU limit",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--byol-cpu-core-count-limit",
              description:
                "The maximum number of CPUs allowed with a 'Bring Your Own License' (BYOL) license type",
              args: { name: "integer" },
            },
            {
              name: "--environment-type",
              description:
                "Specifies whether the deployment is used in a production or development/testing environment",
              args: { suggestions: ["PRODUCTION", "DEVELOPMENT_OR_TESTING"] },
            },
            optDescription,
            {
              name: "--source-deployment-id",
              description: "The OCID of the deployment being referenced",
              args: { name: "source-deployment-id" },
            },
            {
              name: "--availability-domain",
              description: "The availability domain of a placement",
              args: { name: "availability-domain" },
            },
            {
              name: "--fault-domain",
              description: "The fault domain of a placement",
              args: { name: "fault-domain" },
            },
            {
              name: "--placements",
              description: "An array of local peers of deployment",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optLocks,
            {
              name: "--deployment-backup-id",
              description: "The OCID of the backup being referenced",
              args: { name: "deployment-backup-id" },
            },
            {
              name: "--load-balancer-subnet-id",
              description:
                "The OCID of a public subnet in the customer tenancy used to host the public load balancer of the deployment",
              args: { name: "load-balancer-subnet-id" },
            },
            optFqdn,
            optNsgIds,
            {
              name: "--is-public",
              description: "True if this object is publicly available",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optCpuCoreCount,
            optIsAutoScalingEnabled,
            {
              name: "--deployment-type",
              description:
                "The type of deployment, which can be any one of the Allowed values",
              args: {
                suggestions: [
                  "OGG",
                  "DATABASE_ORACLE",
                  "BIGDATA",
                  "DATABASE_MICROSOFT_SQLSERVER",
                  "DATABASE_MYSQL",
                  "DATABASE_POSTGRESQL",
                  "DATABASE_DB2ZOS",
                  "DATABASE_DB2I",
                  "GGSA",
                  "DATA_TRANSFORMS",
                  "VERIDATA_SERVER",
                  "VERIDATA_AGENT",
                ],
              },
            },
            optSubscriptionId,
            optClusterPlacementGroupId,
            optSecurityAttributes,
            {
              name: "--disaster-recovery-status",
              description:
                "Indicates if disaster recovery is enabled for a deployment",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            { name: "--maintenance-configuration", args: { name: "json" } },
            { name: "--backup-schedule", args: { name: "json" } },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--deployment-name",
              description:
                "The name given to the GoldenGate service deployment",
              args: { name: "deployment-name" },
            },
            {
              name: "--credential-store",
              description: "The type of credential store for OGG",
              args: { suggestions: ["IAM", "GOLDENGATE"] },
            },
            {
              name: "--identity-domain-id",
              description:
                "The OCID of the Identity Domain when IAM credential store is used",
              args: { name: "identity-domain-id" },
            },
            {
              name: "--admin-username",
              description: "The GoldenGate deployment console username",
              args: { name: "admin-username" },
            },
            {
              name: "--admin-password",
              description:
                "The password associated with the GoldenGate deployment console username",
              args: { name: "admin-password" },
            },
            {
              name: "--password-secret-id",
              description:
                "The OCID of the Secret where the deployment password is stored",
              args: { name: "password-secret-id" },
            },
            {
              name: "--certificate-file",
              description:
                "The SSL certificate for this deployment in PEM format",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--private-key-file",
              description: "The private key for your certificate in PEM format",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--ogg-version",
              description: "Version of OGG",
              args: { name: "ogg-version" },
            },
            {
              name: "--maintenance-window-day",
              description: "Day of week for the maintenance",
              args: {
                suggestions: [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY",
                ],
              },
            },
            {
              name: "--maintenance-window-start-hour",
              description: "Start hour for maintenance period",
              args: { name: "maintenance-window-start-hour" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the Deployment",
          options: [
            optDeploymentId,
            optIfMatch,
            optIsLockOverride,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-disaster-recovery-precheck-report",
          description:
            "Generates disaster recovery precheck report for standby peer",
          options: [
            optDeploymentId,
            optAvailabilityDomain,
            optFaultDomain,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-library-url",
          description:
            "Generates a Pre-Authenticated Request Object URL to a DB2 for z/OS library that needs to be uploaded to your",
          options: [
            optDeploymentId,
            {
              name: "--library-type",
              description: "The type of the library URL generation",
              args: { suggestions: ["LOG_READER_COMPONENT"] },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves a deployment",
          options: [optDeploymentId, optFromJson],
        },
        {
          name: "get-disaster-recovery-precheck-report",
          description:
            "Returns DR precheck report for a standby peer with the specified placement",
          options: [
            optDeploymentId,
            {
              name: "--availability-domain",
              description:
                "The availability domain of the placement to evaluate DR pre-checks for",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--fault-domain",
              description:
                "The fault domain of the placement to evaluate DR pre-checks for",
              args: { name: "fault-domain" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists the Deployments in a compartment",
          options: [
            optCompartmentId2,
            {
              name: "--supported-connection-type",
              description:
                "The connection type which the deployment must support",
              args: {
                suggestions: [
                  "GOLDENGATE",
                  "KAFKA",
                  "KAFKA_SCHEMA_REGISTRY",
                  "MYSQL",
                  "JAVA_MESSAGE_SERVICE",
                  "MICROSOFT_SQLSERVER",
                  "OCI_OBJECT_STORAGE",
                  "ORACLE",
                  "AZURE_DATA_LAKE_STORAGE",
                  "POSTGRESQL",
                  "AZURE_SYNAPSE_ANALYTICS",
                  "SNOWFLAKE",
                  "AMAZON_S3",
                  "HDFS",
                  "ORACLE_AI_DATA_PLATFORM",
                  "ORACLE_AI_DATA_PLATFORM_ENGINE",
                  "ORACLE_NOSQL",
                  "MONGODB",
                  "AMAZON_KINESIS",
                  "AMAZON_REDSHIFT",
                  "DB2",
                  "REDIS",
                  "ELASTICSEARCH",
                  "GENERIC",
                  "GOOGLE_CLOUD_STORAGE",
                  "GOOGLE_BIGQUERY",
                  "DATABRICKS",
                  "DATABRICKS_ENGINE",
                  "GOOGLE_PUBSUB",
                  "MICROSOFT_FABRIC",
                  "SPARK",
                  "ICEBERG",
                  "AI_PROVIDER",
                  "AI_MODEL",
                ],
              },
            },
            {
              name: "--assigned-connection-id",
              description:
                "The OCID of the connection which for the deployment must be assigned",
              args: { name: "assigned-connection-id" },
            },
            {
              name: "--assignable-connection-id",
              description:
                "Return the deployments to which the specified connectionId may be assigned",
              args: { name: "assignable-connection-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only the deployments having the 'lifecycleState' given",
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
            },
            {
              name: "--lifecycle-sub-state",
              description:
                "A filter to return only the resources that match the 'lifecycleSubState' given",
              args: {
                suggestions: [
                  "RECOVERING",
                  "STARTING",
                  "STOPPING",
                  "MOVING",
                  "UPGRADING",
                  "RESTORING",
                  "BACKUP_IN_PROGRESS",
                  "ROLLBACK_IN_PROGRESS",
                ],
              },
            },
            {
              name: "--deployment-type",
              description:
                "A filter that returns only the resources matching the specified 'deploymentType'",
              args: {
                suggestions: [
                  "OGG",
                  "DATABASE_ORACLE",
                  "BIGDATA",
                  "DATABASE_MICROSOFT_SQLSERVER",
                  "DATABASE_MYSQL",
                  "DATABASE_POSTGRESQL",
                  "DATABASE_DB2ZOS",
                  "DATABASE_DB2I",
                  "GGSA",
                  "DATA_TRANSFORMS",
                  "VERIDATA_SERVER",
                  "VERIDATA_AGENT",
                ],
              },
            },
            optDisplayName3,
            {
              name: "--fqdn",
              description:
                "A filter to return only the resources that match the 'fqdn' given",
              args: { name: "fqdn" },
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
          name: "start",
          description: "Starts a Deployment",
          options: [
            optDeploymentId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops a Deployment",
          options: [
            optDeploymentId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "switchover-deployment-peer",
          description:
            "Switchover to the selected standby peer, which can be a local placement or a standby deployment in different",
          options: [
            optDeploymentId,
            optAvailabilityDomain,
            optFaultDomain,
            {
              name: "--mode",
              description: "Specifies the switchover mode",
              args: { suggestions: ["SWITCHOVER", "FAILOVER"] },
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
          description: "Modifies a Deployment",
          options: [
            optDeploymentId,
            optDisplayName2,
            optLicenseModel,
            {
              name: "--is-byol-cpu-core-count-limit-enabled",
              description:
                "Flag to allow to configure the 'Bring Your Own License' (BYOL) license type CPU limit",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--byol-cpu-core-count-limit",
              description:
                "The maximum number of CPUs allowed with a 'Bring Your Own License' (BYOL) license type",
              args: { name: "integer" },
            },
            {
              name: "--environment-type",
              description:
                "Specifies whether the deployment is used in a production or development/testing environment",
              args: { suggestions: ["PRODUCTION", "DEVELOPMENT_OR_TESTING"] },
            },
            optDescription,
            optFreeformTags,
            optDefinedTags,
            optNsgIds,
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet of the deployment's private endpoint",
              args: { name: "subnet-id" },
            },
            {
              name: "--load-balancer-subnet-id",
              description:
                "The OCID of a public subnet in the customer tenancy used to host the public load balancer of the deployment",
              args: { name: "load-balancer-subnet-id" },
            },
            {
              name: "--is-public",
              description: "True if this object is publicly available",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFqdn,
            optCpuCoreCount,
            optIsAutoScalingEnabled,
            {
              name: "--placements",
              description: "An array of local peers of deployment",
              args: { name: "json" },
            },
            optSecurityAttributes,
            { name: "--maintenance-configuration", args: { name: "json" } },
            { name: "--backup-schedule", args: { name: "json" } },
            optIfMatch,
            optIsLockOverride,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--credential-store",
              description: "The type of credential store for OGG",
              args: { suggestions: ["IAM", "GOLDENGATE"] },
            },
            {
              name: "--identity-domain-id",
              description:
                "The OCID of the Identity Domain when IAM credential store is used",
              args: { name: "identity-domain-id" },
            },
            {
              name: "--admin-username",
              description: "The GoldenGate deployment console username",
              args: { name: "admin-username" },
            },
            {
              name: "--admin-password",
              description:
                "The password associated with the GoldenGate deployment console username",
              args: { name: "admin-password" },
            },
            {
              name: "--password-secret-id",
              description:
                "The OCID of the Secret where the deployment password is stored",
              args: { name: "password-secret-id" },
            },
            {
              name: "--certificate-file",
              description:
                "The SSL certificate for this deployment in PEM format",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--private-key-file",
              description: "The private key for your certificate in PEM format",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--maintenance-window-day",
              description: "Day of week for the maintenance",
              args: { name: "maintenance-window-day" },
            },
            {
              name: "--maintenance-window-start-hour",
              description: "Start hour for maintenance period",
              args: { name: "maintenance-window-start-hour" },
            },
            optFromJson,
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade a Deployment",
          options: [
            optDeploymentId,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "collect-diagnostics",
          description: "Collects the diagnostic of a Deployment",
          options: [
            optDeploymentId,
            optNamespaceName,
            optBucketName,
            {
              name: "--diagnostic-name-prefix",
              description:
                "Prefix of the diagnostic collected and uploaded to object storage",
              args: { name: "diagnostic-name-prefix" },
              isRequired: true,
            },
            {
              name: "--time-diagnostic-start",
              description:
                "The time from which the diagnostic collection should collect the logs",
              args: { name: "datetime" },
            },
            {
              name: "--time-diagnostic-end",
              description:
                "The time until which the diagnostic collection should collect the logs",
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
          name: "upgrade-to",
          description: "Upgrade a Deployment",
          options: [
            optDeploymentId,
            {
              name: "--ogg-version",
              description: "Version of OGG",
              args: { name: "ogg-version" },
              isRequired: true,
            },
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "wallet-exists",
          description:
            "Checks if a wallet is already present in the deployment",
          options: [optDeploymentId, optIfMatch, optFromJson],
        },
        {
          name: "export-wallet",
          description: "Export the OGG wallet from the deployment to OCI vault",
          options: [
            optDeploymentId,
            optVaultId2,
            {
              name: "--master-encryption-key-id",
              description: "Refers to the customer's master key OCID",
              args: { name: "master-encryption-key-id" },
              isRequired: true,
            },
            {
              name: "--secret-name",
              description:
                "Name of the secret with which secret is shown in vault",
              args: { name: "secret-name" },
              isRequired: true,
            },
            {
              name: "--secret-compartment-id",
              description:
                "The OCID of the compartment, where the secret will be created in",
              args: { name: "secret-compartment-id" },
            },
            optDescription,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "import-wallet",
          description:
            "Imports an OGG wallet from the OCI Vault to the Deployment",
          options: [
            optDeploymentId,
            optVaultId2,
            {
              name: "--new-wallet-secret-id",
              description:
                "The OCID of the customer's GoldenGate Service Secret",
              args: { name: "new-wallet-secret-id" },
              isRequired: true,
            },
            {
              name: "--wallet-backup-secret-name",
              description:
                "Name of the secret with which secret is shown in vault",
              args: { name: "wallet-backup-secret-name" },
            },
            {
              name: "--wallet-backup-secret-compartment-id",
              description:
                "The OCID of the compartment, where the secret will be created in",
              args: { name: "wallet-backup-secret-compartment-id" },
            },
            {
              name: "--master-encryption-key-id",
              description: "Refers to the customer's master key OCID",
              args: { name: "master-encryption-key-id" },
            },
            optDescription,
            optIfMatch,
            optIsLockOverride,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "add-lock",
          description: "Adds a lock to a Deployment resource",
          options: [
            optDeploymentId,
            optType,
            optMessage,
            optIfMatch,
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
          name: "remove-lock",
          description: "Removes a lock from a Deployment resource",
          options: [
            optDeploymentId,
            optType,
            optIfMatch,
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
          name: "add-deployment-local-peer",
          description:
            "Adds a new local peer to the deployment, this will add the given placement to deployment placement attribute",
          options: [
            optDeploymentId,
            {
              name: "--availability-domain",
              description: "The availability domain of a placement",
              args: { name: "availability-domain" },
            },
            {
              name: "--fault-domain",
              description: "The fault domain of a placement",
              args: { name: "fault-domain" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "remove-deployment-local-peer",
          description:
            "Removes a local peer of the deployment, this will remove the given placement entry from the deployment",
          options: [
            optDeploymentId,
            optAvailabilityDomain,
            optFaultDomain,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-log-reader-component-library-url",
          description:
            "Generates a Pre-Authenticated Request Object URL to a DB2 for z/OS library that needs to be uploaded to your",
          options: [optDeploymentId, optIfMatch, optFromJson],
        },
        {
          name: "change-subscription",
          description:
            "Associate a GoldanGate deployment with a different subscription",
          options: [
            optDeploymentId,
            optSubscriptionId,
            {
              name: "--is-default",
              description: "Indicates if the subscription is UCM or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
      name: "deployment-version",
      description: "The list of DeploymentVersionSummary objects",
      subcommands: [
        {
          name: "list",
          description: "Returns the list of available deployment versions",
          options: [
            optCompartmentId2,
            optDeploymentId2,
            {
              name: "--deployment-type",
              description:
                "The type of deployment, the value determines the exact 'type' of the service executed in the deployment",
              args: {
                suggestions: [
                  "OGG",
                  "DATABASE_ORACLE",
                  "BIGDATA",
                  "DATABASE_MICROSOFT_SQLSERVER",
                  "DATABASE_MYSQL",
                  "DATABASE_POSTGRESQL",
                  "DATABASE_DB2ZOS",
                  "DATABASE_DB2I",
                  "GGSA",
                  "DATA_TRANSFORMS",
                  "VERIDATA_SERVER",
                  "VERIDATA_AGENT",
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
      name: "deployment-environment",
      description: "The list of DeploymentEnvironmentDescriptor objects",
      subcommands: [
        {
          name: "list",
          description: "Returns an array of DeploymentEnvironmentDescriptor",
          options: [
            optCompartmentId2,
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
      name: "pipeline-recipe-collection",
      description: "The list of Recipe objects",
      subcommands: [
        {
          name: "list-recipes",
          description: "Returns an array of Recipe Summary",
          options: [
            optCompartmentId2,
            {
              name: "--recipe-type",
              description: "The pipeline's recipe type",
              args: { suggestions: ["ZERO_ETL"] },
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
      name: "ai-model",
      description:
        "Collection of AI models currently known by GoldenGate for the specified provider",
      subcommands: [
        {
          name: "list",
          description:
            "Returns the list of AI models for the specified provider",
          options: [
            optCompartmentId2,
            {
              name: "--provider-type",
              description:
                "The AI provider type for which model information is requested",
              args: {
                suggestions: [
                  "OCI_GENERATIVE_AI",
                  "GEMINI",
                  "OPEN_AI",
                  "VOYAGE_AI",
                ],
              },
              isRequired: true,
            },
            {
              name: "--tenancy-id",
              description:
                "OCI tenancy OCID to use when resolving provider models",
              args: { name: "tenancy-id" },
            },
            optAll,
            {
              name: "--model-region",
              description: "OCI region identifier, for example us-ashburn-1",
              args: { name: "model-region" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ai-provider",
      description: "Collection of AI providers supported by GoldenGate",
      subcommands: [
        {
          name: "list",
          description:
            "Returns the list of AI providers along with their supported models",
          options: [optCompartmentId2, optAll, optFromJson],
        },
      ],
    },
  ],
};

export default completionSpec;
