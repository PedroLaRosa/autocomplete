const acquirePolicyToken: Fig.Option = {
  name: "--acquire-policy-token",
  description:
    "Acquiring an Azure Policy token automatically for this resource operation",
};

const changeReference: Fig.Option = {
  name: "--change-reference",
  description: "The related change reference ID for this resource operation",
  args: { name: "change-reference" },
};

const completion: Fig.Spec = {
  name: "aro",
  description: "Manage Azure Red Hat OpenShift resource types",
  subcommands: [
    {
      name: "create",
      description: "Create an Azure Red Hat OpenShift Standard cluster",
      options: [
        {
          name: "--master-subnet",
          description:
            "Name or ID of master vnet subnet. If name is supplied, --vnet must be supplied",
          args: { name: "master-subnet" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of cluster",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--worker-subnet",
          description:
            "Name or ID of worker vnet subnet. If name is supplied, --vnet must be supplied",
          args: { name: "worker-subnet" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: "--apiserver-visibility",
          description: "API server visibility. [Default: Public]",
          args: {
            name: "apiserver-visibility",
            suggestions: ["Private", "Public"],
          },
        },
        {
          name: ["--assign-cluster-identity", "--mi-user-assigned"],
          description:
            "Set the user managed identity on the cluster. Value must be an identity name or resource ID",
          args: { name: "assign-cluster-identity" },
        },
        {
          name: ["--assign-platform-workload-identity", "--assign-platform-wi"],
          description:
            "Assign a platform workload identity used within the cluster. Requires two values: an operator name and either the name or resource ID of the Azure identity to use for it",
          args: { name: "assign-platform-workload-identity", isVariadic: true },
        },
        changeReference,
        {
          name: "--client-id",
          description: "Client ID of cluster service principal",
          args: { name: "client-id" },
        },
        {
          name: "--client-secret",
          description: "Client secret of cluster service principal",
          args: { name: "client-secret" },
        },
        {
          name: "--cluster-resource-group",
          description: "Resource group of cluster",
          args: { name: "cluster-resource-group" },
        },
        {
          name: "--disk-encryption-set",
          description:
            "ResourceID of the DiskEncryptionSet to be used for master and worker VMs",
          args: { name: "disk-encryption-set" },
        },
        {
          name: "--domain",
          description: "Domain of cluster",
          args: { name: "domain" },
        },
        {
          name: ["--enable-managed-identity", "--enable-mi"],
          description: "Enable managed identity for this cluster",
          args: {
            name: "enable-managed-identity",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-preconfigured-nsg",
          description:
            "Use Preconfigured NSGs. Allowed values: false, true. [Default: false]",
          args: {
            name: "enable-preconfigured-nsg",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--fips-validated-modules", "--fips"],
          description:
            "Use FIPS validated cryptography modules. [Default: false]",
          args: {
            name: "fips-validated-modules",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--ingress-visibility",
          description: "Ingress visibility. [Default: Public]",
          args: {
            name: "ingress-visibility",
            suggestions: ["Private", "Public"],
          },
        },
        {
          name: ["--load-balancer-managed-outbound-ip-count", "--lb-ip-count"],
          description:
            "The desired number of IPv4 outbound IPs created and managed by Azure for the cluster public load balancer",
          args: { name: "load-balancer-managed-outbound-ip-count" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: ["--master-encryption-at-host", "--master-enc-host"],
          description:
            "Encryption at host flag for master VMs. [Default: false]",
          args: {
            name: "master-encryption-at-host",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--master-vm-size",
          description: "Size of master VMs. [Default: Standard_D8s_v5]",
          args: { name: "master-vm-size" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--outbound-type",
          description:
            'Outbound type of cluster. Must be "Loadbalancer" or "UserDefinedRouting". [Default: Loadbalancer]',
          args: { name: "outbound-type" },
        },
        {
          name: "--pod-cidr",
          description:
            "CIDR of pod network. Must be a minimum of /18 or larger. [Default: 10.128.0.0/14]",
          args: { name: "pod-cidr" },
        },
        {
          name: "--pull-secret",
          description: "Pull secret of cluster",
          args: { name: "pull-secret" },
        },
        {
          name: "--service-cidr",
          description:
            "CIDR of service network. Must be a minimum of /18 or larger. [Default: 172.30.0.0/16]",
          args: { name: "service-cidr" },
        },
        {
          name: "--tags",
          description:
            "Tags to be assigned to the openShiftCluster resource. space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
        {
          name: "--version",
          description: "OpenShift version to use for cluster creation",
          args: { name: "version" },
        },
        {
          name: "--vnet",
          description:
            "Name or ID of vnet. If name is supplied, --vnet-resource-group must be supplied",
          args: { name: "vnet" },
        },
        {
          name: "--vnet-resource-group",
          description: "Name of vnet resource group",
          args: { name: "vnet-resource-group" },
        },
        {
          name: "--worker-count",
          description: "Count of worker VMs. [Default: 3]",
          args: { name: "worker-count" },
        },
        {
          name: ["--worker-encryption-at-host", "--worker-enc-host"],
          description:
            "Encryption at host flag for worker VMs. [Default: false]",
          args: {
            name: "worker-encryption-at-host",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--worker-vm-disk-size-gb",
          description: "Disk size in GB of worker VMs. [Default: 128]",
          args: { name: "worker-vm-disk-size-gb" },
        },
        {
          name: "--worker-vm-size",
          description: "Size of worker VMs. [Default: Standard_D4s_v5]",
          args: { name: "worker-vm-size" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an Azure Red Hat OpenShift Standard cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of cluster",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--delete-identities",
          description:
            "Delete the cluster's associated managed identities together with the cluster",
          args: {
            name: "delete-identities",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "get-admin-kubeconfig",
      description:
        "List admin kubeconfig of an Azure Red Hat OpenShift Standard cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of cluster",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: ["--file", "-f"],
          description:
            "Path to the file where kubeconfig should be saved. Default: kubeconfig in local directory",
          args: { name: "file" },
        },
      ],
    },
    {
      name: "get-versions",
      description:
        "List versions available for installation for Azure Red Hat OpenShift Standard clusters",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
      ],
    },
    {
      name: "list",
      description: "List Azure Red Hat OpenShift Standard clusters",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "list-credentials",
      description:
        "List credentials of an Azure Red Hat OpenShift Standard cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of cluster",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
      ],
    },
    {
      name: "show",
      description:
        "Get the details of an Azure Red Hat OpenShift Standard cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of cluster",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
      ],
    },
    {
      name: "update",
      description: "Update an Azure Red Hat OpenShift Standard cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of cluster",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: ["--assign-cluster-identity", "--mi-user-assigned"],
          description:
            "Set the user managed identity on the cluster. Value must be an identity name or resource ID",
          args: { name: "assign-cluster-identity" },
        },
        {
          name: ["--assign-platform-workload-identity", "--assign-platform-wi"],
          description:
            "Assign a platform workload identity used within the cluster. Requires two values: an operator name and either the name or resource ID of the Azure identity to use for it",
          args: { name: "assign-platform-workload-identity", isVariadic: true },
        },
        changeReference,
        {
          name: "--client-id",
          description: "Client ID of cluster service principal",
          args: { name: "client-id" },
        },
        {
          name: "--client-secret",
          description: "Client secret of cluster service principal",
          args: { name: "client-secret" },
        },
        {
          name: ["--load-balancer-managed-outbound-ip-count", "--lb-ip-count"],
          description:
            "The desired number of IPv4 outbound IPs created and managed by Azure for the cluster public load balancer",
          args: { name: "load-balancer-managed-outbound-ip-count" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--refresh-credentials",
          description: "Refresh cluster application credentials",
          args: {
            name: "refresh-credentials",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--upgradeable-to",
          description: "OpenShift version to upgrade to",
          args: { name: "upgradeable-to" },
        },
      ],
    },
    {
      name: "validate",
      description:
        "Validate permissions required to create an Azure Red Hat OpenShift Standard cluster",
      options: [
        {
          name: "--master-subnet",
          description:
            "Name or ID of master vnet subnet. If name is supplied, --vnet must be supplied",
          args: { name: "master-subnet" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of cluster",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--worker-subnet",
          description:
            "Name or ID of worker vnet subnet. If name is supplied, --vnet must be supplied",
          args: { name: "worker-subnet" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: ["--assign-cluster-identity", "--mi-user-assigned"],
          description:
            "Set the user managed identity on the cluster. Value must be an identity name or resource ID",
          args: { name: "assign-cluster-identity" },
        },
        {
          name: ["--assign-platform-workload-identity", "--assign-platform-wi"],
          description:
            "Assign a platform workload identity used within the cluster. Requires two values: an operator name and either the name or resource ID of the Azure identity to use for it",
          args: { name: "assign-platform-workload-identity", isVariadic: true },
        },
        changeReference,
        {
          name: "--client-id",
          description: "Client ID of cluster service principal",
          args: { name: "client-id" },
        },
        {
          name: "--client-secret",
          description: "Client secret of cluster service principal",
          args: { name: "client-secret" },
        },
        {
          name: "--cluster-resource-group",
          description: "Resource group of cluster",
          args: { name: "cluster-resource-group" },
        },
        {
          name: "--disk-encryption-set",
          description:
            "ResourceID of the DiskEncryptionSet to be used for master and worker VMs",
          args: { name: "disk-encryption-set" },
        },
        {
          name: ["--enable-managed-identity", "--enable-mi"],
          description: "Enable managed identity for this cluster",
          args: {
            name: "enable-managed-identity",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--pod-cidr",
          description:
            "CIDR of pod network. Must be a minimum of /18 or larger. [Default: 10.128.0.0/14]",
          args: { name: "pod-cidr" },
        },
        {
          name: "--service-cidr",
          description:
            "CIDR of service network. Must be a minimum of /18 or larger. [Default: 172.30.0.0/16]",
          args: { name: "service-cidr" },
        },
        {
          name: "--version",
          description: "OpenShift version to use for cluster creation",
          args: { name: "version" },
        },
        {
          name: "--vnet",
          description:
            "Name or ID of vnet. If name is supplied, --vnet-resource-group must be supplied",
          args: { name: "vnet" },
        },
        {
          name: "--vnet-resource-group",
          description: "Name of vnet resource group",
          args: { name: "vnet-resource-group" },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Wait for an Azure Red Hat OpenShift Standard cluster to reach a desired state",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of cluster",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--created",
          description:
            "Wait until created with 'provisioningState' at 'Succeeded'",
        },
        {
          name: "--custom",
          description:
            "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
          args: { name: "custom" },
        },
        { name: "--deleted", description: "Wait until deleted" },
        { name: "--exists", description: "Wait until the resource exists" },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
        },
        {
          name: "--timeout",
          description: "Maximum wait in seconds",
          args: { name: "timeout" },
        },
        {
          name: "--updated",
          description:
            "Wait until updated with provisioningState at 'Succeeded'",
        },
      ],
    },
    {
      name: "hcp",
      description:
        "Manage Azure Red Hat OpenShift with hosted control plane resource types",
      subcommands: [
        {
          name: "get-versions",
          description:
            "List Azure Red Hat OpenShift with hosted control plane versions",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--control-plane",
              description:
                "List the distinct Major.Minor (X.Y) versions per channel group available for the control plane. Use one of these with 'cluster create --version', which takes an X.Y version",
              args: {
                name: "control-plane",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
            {
              name: "--node-pools",
              description:
                "List all available full X.Y.Z versions for node pools. Use one of these with 'nodepool create --version', which requires a full X.Y.Z version",
              args: {
                name: "node-pools",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "cluster",
          description:
            "Manage Azure Red Hat OpenShift with hosted control plane clusters",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Azure Red Hat OpenShift with hosted control plane cluster",
              options: [
                {
                  name: [
                    "--assign-control-plane-operator-identity",
                    "--control-plane-identity",
                  ],
                  description:
                    "Assign a user-assigned identity to a control plane operator. Usage: --assign-control-plane-operator-identity OPERATOR_NAME IDENTITY. IDENTITY is a resource ID or the name of an identity in the cluster subnet's resource group. Repeat the argument to assign more identities",
                  args: {
                    name: "assign-control-plane-operator-identity",
                    isVariadic: true,
                  },
                  isRequired: true,
                },
                {
                  name: [
                    "--assign-data-plane-operator-identity",
                    "--data-plane-identity",
                  ],
                  description:
                    "Assign a user-assigned identity to a data plane operator. Usage: --assign-data-plane-operator-identity OPERATOR_NAME IDENTITY. IDENTITY is a resource ID or the name of an identity in the cluster subnet's resource group. Repeat the argument to assign more identities",
                  args: {
                    name: "assign-data-plane-operator-identity",
                    isVariadic: true,
                  },
                  isRequired: true,
                },
                {
                  name: [
                    "--assign-service-managed-identity",
                    "--service-identity",
                  ],
                  description:
                    "Assign the user-assigned identity used for service-level actions by resource ID or by name when it is in the cluster subnet's resource group",
                  args: { name: "assign-service-managed-identity" },
                  isRequired: true,
                },
                {
                  name: "--key-management-mode",
                  description:
                    "Specify the key management strategy used for the encryption key that encrypts the ETCD data",
                  args: {
                    name: "key-management-mode",
                    suggestions: ["CustomerManaged"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--nsg",
                  description:
                    "ResourceId for the NSG (network security group) attached to the cluster subnet Note that NSGs cannot be reused for other ARO-HCP clusters",
                  args: { name: "nsg" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--subnet-id",
                  description:
                    "The Azure resource ID of the worker subnet. Note that a subnet cannot be reused between ARO-HCP Clusters",
                  args: { name: "subnet-id" },
                  isRequired: true,
                },
                {
                  name: "--version",
                  description:
                    "The desired X.Y version of the cluster control plane",
                  args: { name: "version" },
                  isRequired: true,
                },
                {
                  name: [
                    "--vnet-integration-subnet-id",
                    "--vnet-int-subnet-id",
                  ],
                  description:
                    "The Azure resource ID of a subnet that enables direct, private network connectivity between the hosted control plane and your cluster's nodes. This subnet must be dedicated to ARO HCP and cannot be shared with the cluster subnet or any node pool subnets",
                  args: { name: "vnet-integration-subnet-id" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--api-visibility",
                  description:
                    "The internet visibility of the OpenShift API server",
                  args: {
                    name: "api-visibility",
                    suggestions: ["Private", "Public"],
                  },
                },
                {
                  name: [
                    "--assign-container-registry-managed-identity",
                    "--registry-identity",
                  ],
                  description:
                    "Assign the user-assigned identity used for container registry image pulls by resource ID or by name when it is in the cluster subnet's resource group",
                  args: { name: "assign-container-registry-managed-identity" },
                },
                {
                  name: "--authorized-cidrs",
                  description:
                    'The list of authorized IPv4 CIDR blocks allowed to access the API server. Maximum 500 entries. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "authorized-cidrs", isVariadic: true },
                },
                {
                  name: "--base-domain-prefix",
                  description:
                    'BaseDomainPrefix is the base domain prefix for the cluster ingress. It will be used to configure ingress in the cluster through the subdomain "BaseDomainPrefix.BaseDomain"',
                  args: { name: "base-domain-prefix" },
                },
                changeReference,
                {
                  name: "--channel-group",
                  description:
                    "ChannelGroup is the name of the set to which this version belongs. Each version belongs to only a single set. If not specified, the default value is 'stable'",
                  args: { name: "channel-group" },
                },
                {
                  name: "--crypto-restrictions",
                  description:
                    "Cryptographic restrictions for kernel and userspace libraries",
                  args: {
                    name: "crypto-restrictions",
                    suggestions: ["FIPS", "None"],
                  },
                },
                {
                  name: "--etcd-encryption-type",
                  description:
                    'The encryption type used. By default, "KMS" is used',
                  args: { name: "etcd-encryption-type", suggestions: ["KMS"] },
                },
                {
                  name: "--host-prefix",
                  description: "Network host prefix",
                  args: { name: "host-prefix" },
                },
                {
                  name: "--image-digest-mirrors",
                  description:
                    'ImageDigestMirrors is a set of rules to allow pulling images from a mirrored registry by using digest specifications. WARNING: Updating this array will redeploy all node pools in the cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "image-digest-mirrors", isVariadic: true },
                },
                {
                  name: "--image-registry-state",
                  description:
                    "State indicates the desired ImageStream-backed cluster image registry installation mode. This can only be set during cluster creation and cannot be changed after cluster creation. Enabled means the ImageStream-backed image registry will be run as pods on worker nodes in the cluster. Disabled means the ImageStream-backed image registry will not be present in the cluster. The default is Enabled",
                  args: {
                    name: "image-registry-state",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--ingress-visibility",
                  description:
                    "The visibility of the default OpenShift ingress controller",
                  args: {
                    name: "ingress-visibility",
                    suggestions: ["Disabled", "Private", "Public"],
                  },
                },
                {
                  name: "--key-vault-type",
                  description:
                    "The type of keyvault used for KMS encryption. Defaults to KeyVault when absent",
                  args: {
                    name: "key-vault-type",
                    suggestions: ["KeyVault", "ManagedHSM"],
                  },
                },
                {
                  name: "--kms-active-key",
                  description:
                    'The details of the active key. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "kms-active-key", isVariadic: true },
                },
                {
                  name: "--kms-vault-name",
                  description:
                    "VaultName is the name of the keyvault that contains the secret",
                  args: { name: "kms-vault-name" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
                  args: { name: "location" },
                },
                {
                  name: "--machine-cidr",
                  description:
                    "The CIDR block from which to assign machine IP addresses",
                  args: { name: "machine-cidr" },
                },
                {
                  name: ["--managed-resource-group-name", "--managed-rg-name"],
                  description:
                    'The name of the resource group to put cluster resources in. If not specified then a unique name is generated from the following pattern "aro-hcp-" + clusterName + "-" + UUID where clusterName means the hcpOpenShiftClusters resource name (up to 45 characters) followed by a 16-byte universally unique identifier per RFC 4122',
                  args: { name: "managed-resource-group-name" },
                },
                {
                  name: ["--max-node-provision-time", "--node-provision-time"],
                  description:
                    "MaxNodeProvisionTimeSeconds is the maximum time to wait for node provisioning before considering the provisioning to be unsuccessful. The default is 900 seconds, or 15 minutes",
                  args: { name: "max-node-provision-time" },
                },
                {
                  name: "--max-nodes-total",
                  description:
                    "MaxNodesTotal is the maximum allowable number of nodes. The autoscaler will not grow the cluster beyond this number. If omitted, the autoscaler will not have a maximum limit",
                  args: { name: "max-nodes-total" },
                },
                {
                  name: "--max-pod-grace-period",
                  description:
                    "MaxPodGracePeriodSeconds is the maximum amount of time in seconds to wait for graceful pod termination before scaling down a NodePool",
                  args: { name: "max-pod-grace-period" },
                },
                {
                  name: "--network-type",
                  description:
                    "The main controller responsible for rendering the core networking components",
                  args: {
                    name: "network-type",
                    suggestions: ["OVNKubernetes", "Other"],
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                  args: {
                    name: "no-wait",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--node-drain-timeout",
                  description:
                    "NodeDrainTimeoutMinutes is the grace period for how long Pod Disruption Budget-protected workloads will be respected during any node draining operation. After this grace period, any workloads protected by Pod Disruption Budgets that have not been successfully drained from a node will be forcibly evicted. This is especially relevant to cluster upgrades. Valid values are in minutes and from 0 to 10080 minutes (1 week). 0 means that the MachinePool can be drained without any time limitation. This value is used as a default for all NodePools. It can be overridden by specifying nodeDrainTimeoutMinutes for a given NodePool",
                  args: { name: "node-drain-timeout" },
                },
                {
                  name: "--outbound-type",
                  description: "The core outgoing configuration",
                  args: {
                    name: "outbound-type",
                    suggestions: ["LoadBalancer"],
                  },
                },
                {
                  name: "--pod-cidr",
                  description: "The CIDR of the pod IP addresses",
                  args: { name: "pod-cidr" },
                },
                {
                  name: "--pod-priority-threshold",
                  description:
                    'PodPriorityThreshold enables users to schedule "best-effort" pods, which shouldn\'t trigger autoscaler actions, but only run when there are spare resources available. The default is -10. See the following for more details: https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#how-does-cluster-autoscaler-work-with-pod-priority-and-preemption',
                  args: { name: "pod-priority-threshold" },
                },
                {
                  name: "--service-cidr",
                  description: "The CIDR block for assigned service IPs",
                  args: { name: "service-cidr" },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
                {
                  name: "--vault-visibility",
                  description:
                    "Visibility of the keyvault that contains the secret",
                  args: {
                    name: "vault-visibility",
                    suggestions: ["Private", "Public"],
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an Azure Red Hat OpenShift with hosted control plane cluster",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                  args: {
                    name: "no-wait",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List Azure Red Hat OpenShift with hosted control plane clusters",
              options: [
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "request-credential",
              description:
                "Request a temporary credential for your Azure Red Hat OpenShift with hosted control plane cluster",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--admin", "-a"],
                  description:
                    "Get cluster administrator credentials. Default: cluster user credentials",
                  args: {
                    name: "admin",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                changeReference,
                {
                  name: "--context",
                  description:
                    "If specified, overwrite the default context name",
                  args: { name: "context" },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    'Kubernetes configuration file to update. Use "-" to print the kubeconfig to stdout instead',
                  args: { name: "file" },
                },
                {
                  name: "--overwrite-existing",
                  description:
                    "Overwrite any existing cluster entry with the same name",
                  args: {
                    name: "overwrite-existing",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "revoke-credential",
              description:
                "Revoke all credentials for your Azure Red Hat OpenShift with hosted control plane cluster",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                  args: {
                    name: "no-wait",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get an Azure Red Hat OpenShift with hosted control plane cluster",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an Azure Red Hat OpenShift with hosted control plane cluster",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: [
                    "--assign-container-registry-managed-identity",
                    "--registry-identity",
                  ],
                  description:
                    "Assign the user-assigned identity used for container registry image pulls by resource ID or by name when it is in the cluster subnet's resource group",
                  args: { name: "assign-container-registry-managed-identity" },
                },
                {
                  name: [
                    "--assign-control-plane-operator-identity",
                    "--control-plane-identity",
                  ],
                  description:
                    "Assign user-assigned identities to control plane operators. Usage: --assign-control-plane-operator-identity OPERATOR_NAME IDENTITY. IDENTITY is a resource ID or the name of an identity in the cluster subnet's resource group. Repeat the argument to assign more identities. Existing operators not specified are preserved",
                  args: {
                    name: "assign-control-plane-operator-identity",
                    isVariadic: true,
                  },
                },
                {
                  name: [
                    "--assign-data-plane-operator-identity",
                    "--data-plane-identity",
                  ],
                  description:
                    "Assign user-assigned identities to data plane operators. Usage: --assign-data-plane-operator-identity OPERATOR_NAME IDENTITY. IDENTITY is a resource ID or the name of an identity in the cluster subnet's resource group. Repeat the argument to assign more identities. Existing operators not specified are preserved",
                  args: {
                    name: "assign-data-plane-operator-identity",
                    isVariadic: true,
                  },
                },
                {
                  name: [
                    "--assign-service-managed-identity",
                    "--service-identity",
                  ],
                  description:
                    "Assign the user-assigned identity used for service-level actions by resource ID or by name when it is in the cluster subnet's resource group",
                  args: { name: "assign-service-managed-identity" },
                },
                {
                  name: "--authorized-cidrs",
                  description:
                    'The list of authorized IPv4 CIDR blocks allowed to access the API server. Maximum 500 entries. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "authorized-cidrs", isVariadic: true },
                },
                changeReference,
                {
                  name: "--channel-group",
                  description:
                    "ChannelGroup is the name of the set to which this version belongs. Each version belongs to only a single set. If not specified, the default value is 'stable'",
                  args: { name: "channel-group" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                  args: {
                    name: "force-string",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--image-digest-mirrors",
                  description:
                    'ImageDigestMirrors is a set of rules to allow pulling images from a mirrored registry by using digest specifications. WARNING: Updating this array will redeploy all node pools in the cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "image-digest-mirrors", isVariadic: true },
                },
                {
                  name: "--kms-active-key-version",
                  description: "Version contains the version of the key to use",
                  args: { name: "kms-active-key-version" },
                },
                {
                  name: ["--max-node-provision-time", "--node-provision-time"],
                  description:
                    "MaxNodeProvisionTimeSeconds is the maximum time to wait for node provisioning before considering the provisioning to be unsuccessful. The default is 900 seconds, or 15 minutes",
                  args: { name: "max-node-provision-time" },
                },
                {
                  name: "--max-nodes-total",
                  description:
                    "MaxNodesTotal is the maximum allowable number of nodes. The autoscaler will not grow the cluster beyond this number. If omitted, the autoscaler will not have a maximum limit",
                  args: { name: "max-nodes-total" },
                },
                {
                  name: "--max-pod-grace-period",
                  description:
                    "MaxPodGracePeriodSeconds is the maximum amount of time in seconds to wait for graceful pod termination before scaling down a NodePool",
                  args: { name: "max-pod-grace-period" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                  args: {
                    name: "no-wait",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                    isOptional: true,
                  },
                },
                {
                  name: "--node-drain-timeout",
                  description:
                    "NodeDrainTimeoutMinutes is the grace period for how long Pod Disruption Budget-protected workloads will be respected during any node draining operation. After this grace period, any workloads protected by Pod Disruption Budgets that have not been successfully drained from a node will be forcibly evicted. This is especially relevant to cluster upgrades. Valid values are in minutes and from 0 to 10080 minutes (1 week). 0 means that the MachinePool can be drained without any time limitation. This value is used as a default for all NodePools. It can be overridden by specifying nodeDrainTimeoutMinutes for a given NodePool",
                  args: { name: "node-drain-timeout" },
                },
                {
                  name: "--pod-priority-threshold",
                  description:
                    'PodPriorityThreshold enables users to schedule "best-effort" pods, which shouldn\'t trigger autoscaler actions, but only run when there are spare resources available. The default is -10. See the following for more details: https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#how-does-cluster-autoscaler-work-with-pod-priority-and-preemption',
                  args: { name: "pod-priority-threshold" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags", isVariadic: true },
                },
                {
                  name: "--version",
                  description:
                    "ID is the desired X.Y version of the cluster control plane",
                  args: { name: "version" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--created",
                  description:
                    "Wait until created with 'provisioningState' at 'Succeeded'",
                },
                {
                  name: "--custom",
                  description:
                    "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
                  args: { name: "custom" },
                },
                { name: "--deleted", description: "Wait until deleted" },
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--timeout",
                  description: "Maximum wait in seconds",
                  args: { name: "timeout" },
                },
                {
                  name: "--updated",
                  description:
                    "Wait until updated with provisioningState at 'Succeeded'",
                },
              ],
            },
            {
              name: "external-auth",
              description:
                "Manage Azure Red Hat OpenShift with hosted control plane external authentication",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create an Azure Red Hat OpenShift with hosted control plane external authentication instance",
                  options: [
                    {
                      name: ["--cluster-name", "-c"],
                      description:
                        "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                      args: { name: "cluster-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The name of the External Authentication",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--claim",
                      description: "Claim name of the external profile",
                      args: { name: "claim" },
                    },
                    {
                      name: ["--clients", "--client"],
                      description:
                        'External Auth OIDC clients. There must not be more than 20 entries and entries must have unique namespace/name pairs. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more. Singular flags: --client',
                      args: { name: "clients", isVariadic: true },
                    },
                    {
                      name: "--issuer-audience",
                      description:
                        "This configures the acceptable audiences for JWT tokens issued by the identity provider. At least one of the entries must match the 'aud' claim in the JWT token. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                      args: { name: "issuer-audience", isVariadic: true },
                    },
                    {
                      name: "--issuer-ca",
                      description:
                        "The issuer of the token. Certificate bundle to use to validate server certificates for the configured URL. It must be PEM encoded and when not specified, the system trust is used",
                      args: { name: "issuer-ca" },
                    },
                    {
                      name: "--issuer-url",
                      description:
                        "This configures the URL used to issue tokens by the identity provider. The Kubernetes API server determines how authentication tokens should be handled by matching the 'iss' claim in the JWT to the issuerURL of configured identity providers. issuerURL must use the 'https' scheme",
                      args: { name: "issuer-url" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                      args: {
                        name: "no-wait",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                        isOptional: true,
                      },
                    },
                    {
                      name: "--prefix",
                      description:
                        'Prefix for the claim external profile. If this is specified, prefixPolicy will be set to "Prefix" by default',
                      args: { name: "prefix" },
                    },
                    {
                      name: "--username-claim",
                      description: "Claim name of the external profile",
                      args: { name: "username-claim" },
                    },
                    {
                      name: "--username-prefix",
                      description:
                        "Prefix for the claim external profile. Must be set when the prefixPolicy field is set to 'Prefix' and must be unset otherwise",
                      args: { name: "username-prefix" },
                    },
                    {
                      name: "--username-prefix-policy",
                      description:
                        "Prefix policy is an optional field that configures how a prefix should be applied to the value of the JWT claim specified in the 'claim' field. Allowed values are 'Prefix', 'NoPrefix', and 'None'. If not specified, the default policy is 'None'. When set to 'Prefix', the value specified in the prefix field will be prepended to the value of the JWT claim. The prefix field must be set when prefixPolicy is 'Prefix'. When set to 'NoPrefix', no prefix will be prepended to the value of the JWT claim. When set to 'None', this means no opinion and the platform is left to choose any prefixes that are applied which is subject to change over time. Currently, the platform prepends {issuerURL}# to the value of the JWT claim when the claim is not 'email'. As an example, consider the following scenario: prefix is unset, issuerURL is set to https://myoidc.tld, the JWT claims include \"username\":\"userA\" and \"email\":\"userA",
                      args: {
                        name: "username-prefix-policy",
                        suggestions: ["NoPrefix", "None", "Prefix"],
                      },
                    },
                    {
                      name: "--validation-rules",
                      description:
                        'The claim validation rules. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "validation-rules", isVariadic: true },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete an Azure Red Hat OpenShift with hosted control plane external authentication instance",
                  options: [
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--cluster-name", "-c"],
                      description:
                        "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The name of the External Authentication",
                      args: { name: "name" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                      args: {
                        name: "no-wait",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                        isOptional: true,
                      },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List Azure Red Hat OpenShift with hosted control plane external authentication instances",
                  options: [
                    {
                      name: ["--cluster-name", "-c"],
                      description:
                        "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                      args: { name: "cluster-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--max-items",
                      description:
                        "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                      args: { name: "max-items" },
                    },
                    {
                      name: "--next-token",
                      description:
                        "Token to specify where to start paginating. This is the token value from a previously truncated response",
                      args: { name: "next-token" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get an Azure Red Hat OpenShift with hosted control plane external authentication instance",
                  options: [
                    {
                      name: ["--cluster-name", "-c"],
                      description:
                        "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The name of the External Authentication",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update an Azure Red Hat OpenShift with hosted control plane external authentication instance",
                  options: [
                    acquirePolicyToken,
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add", isVariadic: true },
                    },
                    changeReference,
                    {
                      name: "--claim",
                      description: "Claim name of the external profile",
                      args: { name: "claim" },
                    },
                    {
                      name: ["--clients", "--client"],
                      description:
                        'External Auth OIDC clients. There must not be more than 20 entries and entries must have unique namespace/name pairs. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more. Singular flags: --client',
                      args: { name: "clients", isVariadic: true },
                    },
                    {
                      name: ["--cluster-name", "-c"],
                      description:
                        "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: "--force-string",
                      description:
                        "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                      args: {
                        name: "force-string",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                        isOptional: true,
                      },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--issuer-audience",
                      description:
                        "This configures the acceptable audiences for JWT tokens issued by the identity provider. At least one of the entries must match the 'aud' claim in the JWT token. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                      args: { name: "issuer-audience", isVariadic: true },
                    },
                    {
                      name: "--issuer-ca",
                      description:
                        "The issuer of the token. Certificate bundle to use to validate server certificates for the configured URL. It must be PEM encoded and when not specified, the system trust is used",
                      args: { name: "issuer-ca" },
                    },
                    {
                      name: "--issuer-url",
                      description:
                        "This configures the URL used to issue tokens by the identity provider. The Kubernetes API server determines how authentication tokens should be handled by matching the 'iss' claim in the JWT to the issuerURL of configured identity providers. issuerURL must use the 'https' scheme",
                      args: { name: "issuer-url" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The name of the External Authentication",
                      args: { name: "name" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                      args: {
                        name: "no-wait",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                        isOptional: true,
                      },
                    },
                    {
                      name: "--prefix",
                      description:
                        'Prefix for the claim external profile. If this is specified, prefixPolicy will be set to "Prefix" by default',
                      args: { name: "prefix" },
                    },
                    {
                      name: "--remove",
                      description:
                        "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                      args: { name: "remove", isVariadic: true },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--set",
                      description:
                        "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                      args: { name: "set", isVariadic: true },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--username-claim",
                      description: "Claim name of the external profile",
                      args: { name: "username-claim" },
                    },
                    {
                      name: "--username-prefix",
                      description:
                        "Prefix for the claim external profile. Must be set when the prefixPolicy field is set to 'Prefix' and must be unset otherwise",
                      args: { name: "username-prefix" },
                    },
                    {
                      name: "--username-prefix-policy",
                      description:
                        "Prefix policy is an optional field that configures how a prefix should be applied to the value of the JWT claim specified in the 'claim' field. Allowed values are 'Prefix', 'NoPrefix', and 'None'. If not specified, the default policy is 'None'. When set to 'Prefix', the value specified in the prefix field will be prepended to the value of the JWT claim. The prefix field must be set when prefixPolicy is 'Prefix'. When set to 'NoPrefix', no prefix will be prepended to the value of the JWT claim. When set to 'None', this means no opinion and the platform is left to choose any prefixes that are applied which is subject to change over time. Currently, the platform prepends {issuerURL}# to the value of the JWT claim when the claim is not 'email'. As an example, consider the following scenario: prefix is unset, issuerURL is set to https://myoidc.tld, the JWT claims include \"username\":\"userA\" and \"email\":\"userA",
                      args: {
                        name: "username-prefix-policy",
                        suggestions: ["NoPrefix", "None", "Prefix"],
                      },
                    },
                    {
                      name: "--validation-rules",
                      description:
                        'The claim validation rules. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "validation-rules", isVariadic: true },
                    },
                  ],
                },
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition is met",
                  options: [
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--cluster-name", "-c"],
                      description:
                        "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: "--created",
                      description:
                        "Wait until created with 'provisioningState' at 'Succeeded'",
                    },
                    {
                      name: "--custom",
                      description:
                        "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
                      args: { name: "custom" },
                    },
                    { name: "--deleted", description: "Wait until deleted" },
                    {
                      name: "--exists",
                      description: "Wait until the resource exists",
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--interval",
                      description: "Polling interval in seconds",
                      args: { name: "interval" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The name of the External Authentication",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--timeout",
                      description: "Maximum wait in seconds",
                      args: { name: "timeout" },
                    },
                    {
                      name: "--updated",
                      description:
                        "Wait until updated with provisioningState at 'Succeeded'",
                    },
                  ],
                },
              ],
            },
            {
              name: "nodepool",
              description:
                "Manage Azure Red Hat OpenShift with hosted control plane node pools",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create an Azure Red Hat OpenShift with hosted control plane node pool",
                  options: [
                    {
                      name: ["--cluster-name", "-c"],
                      description:
                        "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                      args: { name: "cluster-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The Name of the Node Pool",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--version",
                      description:
                        "ID is the desired X.Y version of the cluster control plane",
                      args: { name: "version" },
                      isRequired: true,
                    },
                    {
                      name: "--vm-size",
                      description:
                        "The VM size according to the documentation: - https://learn.microsoft.com/en-us/azure/virtual-machines/sizes",
                      args: { name: "vm-size" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    {
                      name: "--auto-repair",
                      description: "Auto-repair",
                      args: {
                        name: "auto-repair",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                        isOptional: true,
                      },
                    },
                    {
                      name: "--availability-zone",
                      description: "The availability zone for the node pool",
                      args: { name: "availability-zone" },
                    },
                    changeReference,
                    {
                      name: "--channel-group",
                      description:
                        "ChannelGroup is the name of the set to which this version belongs. Each version belongs to only a single set. If not specified, the default value is 'stable'",
                      args: { name: "channel-group" },
                    },
                    {
                      name: "--disk-encryption-set",
                      description:
                        "The ID of the DiskEncryptionSet resource to use to encrypt the OS disks for the VMs. This needs to exist in the same subscription id listed in the Hosted Cluster, HostedCluster.Spec.Platform.Azure.SubscriptionID. DiskEncryptionSetID should also exist in a resource group under the same subscription id and the same location listed in the Hosted Cluster, HostedCluster.Spec.Platform.Azure.Location. Details on how to create a Disk Encryption Set can be found here: https://learn.microsoft.com/en-us/azure/virtual-machines/disks-enable-customer-managed-keys-portal#set-up-your-disk-encryption-set",
                      args: { name: "disk-encryption-set" },
                    },
                    {
                      name: "--disk-size",
                      description:
                        "The OS disk size in GiB. Maximum is 4095 GiB for Managed disks. For Ephemeral disks, the maximum is 2040 GiB; Azure may enforce a lower effective limit based on the selected VM size's local cache, temp, or NVMe capacity",
                      args: { name: "disk-size" },
                    },
                    {
                      name: [
                        "--disk-storage-account-type",
                        "--disk-storage-type",
                      ],
                      description:
                        "The type of the disk storage account - https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types",
                      args: {
                        name: "disk-storage-account-type",
                        suggestions: [
                          "Premium_LRS",
                          "StandardSSD_LRS",
                          "Standard_LRS",
                        ],
                      },
                    },
                    {
                      name: "--disk-type",
                      description:
                        "The type of the OS disk. - https://learn.microsoft.com/en-us/azure/virtual-machines/ephemeral-os-disks",
                      args: {
                        name: "disk-type",
                        suggestions: ["Ephemeral", "Managed"],
                      },
                    },
                    {
                      name: "--encryption-at-host",
                      description:
                        "Whether to enable host based OS and data drive encryption. - https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption#encryption-at-host---end-to-end-encryption-for-your-vm-data",
                      args: {
                        name: "encryption-at-host",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                        isOptional: true,
                      },
                    },
                    {
                      name: "--labels",
                      description:
                        'Kubernetes labels to propagate to the NodePool Nodes. Note that when the labels are updated this is only applied to newly create nodes in the NodePool, existing node labels remain unchanged. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "labels", isVariadic: true },
                    },
                    {
                      name: "--max-replicas",
                      description:
                        "The maximum number of nodes in the node pool. Validation: - Minimum: 0 (must be >= min) - Maximum: 200 (only when availabilityZone is not specified) - No maximum when availabilityZone is specified",
                      args: { name: "max-replicas" },
                    },
                    {
                      name: "--min-replicas",
                      description:
                        "The minimum number of nodes in the node pool. Validation: - Minimum: 0 - Maximum: 200 (only when availabilityZone is not specified) - No maximum when availabilityZone is specified",
                      args: { name: "min-replicas" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                      args: {
                        name: "no-wait",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                        isOptional: true,
                      },
                    },
                    {
                      name: "--node-drain-timeout",
                      description:
                        "NodeDrainTimeoutMinutes is the grace period for how long Pod Disruption Budget-protected workloads will be respected during any node draining operation. After this grace period, any workloads protected by Pod Disruption Budgets that have not been successfully drained from a node will be forcibly evicted. This is especially relevant to cluster upgrades. Valid values are from 0 to 10080 minutes (1 week) . 0 means that the NodePool can be drained without any time limitation. If unset the cluster nodeDrainTimeoutMinutes value is used as a default",
                      args: { name: "node-drain-timeout" },
                    },
                    {
                      name: "--replicas",
                      description:
                        "The number of worker nodes, it cannot be used together with autoscaling. Validation: - Minimum: 0 - Maximum: 200 (only when availabilityZone is not specified) - No maximum when availabilityZone is specified",
                      args: { name: "replicas" },
                    },
                    {
                      name: "--subnet-id",
                      description:
                        "The Azure resource ID of the worker subnet. Note that a subnet cannot be reused between ARO-HCP Clusters",
                      args: { name: "subnet-id" },
                    },
                    {
                      name: "--tags",
                      description:
                        'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tags", isVariadic: true },
                    },
                    {
                      name: "--taints",
                      description:
                        'Taints for the nodes. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "taints", isVariadic: true },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete an Azure Red Hat OpenShift with hosted control plane node pool",
                  options: [
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--cluster-name", "-c"],
                      description:
                        "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The Name of the Node Pool",
                      args: { name: "name" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                      args: {
                        name: "no-wait",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                        isOptional: true,
                      },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List Azure Red Hat OpenShift with hosted control plane node pools",
                  options: [
                    {
                      name: ["--cluster-name", "-c"],
                      description:
                        "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                      args: { name: "cluster-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--max-items",
                      description:
                        "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                      args: { name: "max-items" },
                    },
                    {
                      name: "--next-token",
                      description:
                        "Token to specify where to start paginating. This is the token value from a previously truncated response",
                      args: { name: "next-token" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get an Azure Red Hat OpenShift with hosted control plane node pool",
                  options: [
                    {
                      name: ["--cluster-name", "-c"],
                      description:
                        "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The Name of the Node Pool",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update an Azure Red Hat OpenShift with hosted control plane node pool",
                  options: [
                    acquirePolicyToken,
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add", isVariadic: true },
                    },
                    changeReference,
                    {
                      name: "--channel-group",
                      description:
                        "ChannelGroup is the name of the set to which this version belongs. Each version belongs to only a single set. If not specified, the default value is 'stable'",
                      args: { name: "channel-group" },
                    },
                    {
                      name: ["--cluster-name", "-c"],
                      description:
                        "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: "--force-string",
                      description:
                        "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                      args: {
                        name: "force-string",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                        isOptional: true,
                      },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--labels",
                      description:
                        'Kubernetes labels to propagate to the NodePool Nodes. Note that when the labels are updated this is only applied to newly create nodes in the NodePool, existing node labels remain unchanged. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "labels", isVariadic: true },
                    },
                    {
                      name: "--max-replicas",
                      description:
                        "The maximum number of nodes in the node pool. Validation: - Minimum: 0 (must be >= min) - Maximum: 200 (only when availabilityZone is not specified) - No maximum when availabilityZone is specified",
                      args: { name: "max-replicas" },
                    },
                    {
                      name: "--min-replicas",
                      description:
                        "The minimum number of nodes in the node pool. Validation: - Minimum: 0 - Maximum: 200 (only when availabilityZone is not specified) - No maximum when availabilityZone is specified",
                      args: { name: "min-replicas" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The Name of the Node Pool",
                      args: { name: "name" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                      args: {
                        name: "no-wait",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                        isOptional: true,
                      },
                    },
                    {
                      name: "--node-drain-timeout",
                      description:
                        "NodeDrainTimeoutMinutes is the grace period for how long Pod Disruption Budget-protected workloads will be respected during any node draining operation. After this grace period, any workloads protected by Pod Disruption Budgets that have not been successfully drained from a node will be forcibly evicted. This is especially relevant to cluster upgrades. Valid values are from 0 to 10080 minutes (1 week) . 0 means that the NodePool can be drained without any time limitation. If unset the cluster nodeDrainTimeoutMinutes value is used as a default",
                      args: { name: "node-drain-timeout" },
                    },
                    {
                      name: "--remove",
                      description:
                        "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                      args: { name: "remove", isVariadic: true },
                    },
                    {
                      name: "--replicas",
                      description:
                        "The number of worker nodes, it cannot be used together with autoscaling. Validation: - Minimum: 0 - Maximum: 200 (only when availabilityZone is not specified) - No maximum when availabilityZone is specified",
                      args: { name: "replicas" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--set",
                      description:
                        "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                      args: { name: "set", isVariadic: true },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--tags",
                      description:
                        'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tags", isVariadic: true },
                    },
                    {
                      name: "--taints",
                      description:
                        'Taints for the nodes. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "taints", isVariadic: true },
                    },
                    {
                      name: "--version",
                      description:
                        "ID is the desired X.Y version of the cluster control plane",
                      args: { name: "version" },
                    },
                  ],
                },
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition is met",
                  options: [
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--cluster-name", "-c"],
                      description:
                        "The name of the Azure Red Hat OpenShift with hosted control plane cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: "--created",
                      description:
                        "Wait until created with 'provisioningState' at 'Succeeded'",
                    },
                    {
                      name: "--custom",
                      description:
                        "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
                      args: { name: "custom" },
                    },
                    { name: "--deleted", description: "Wait until deleted" },
                    {
                      name: "--exists",
                      description: "Wait until the resource exists",
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--interval",
                      description: "Polling interval in seconds",
                      args: { name: "interval" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The Name of the Node Pool",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--timeout",
                      description: "Maximum wait in seconds",
                      args: { name: "timeout" },
                    },
                    {
                      name: "--updated",
                      description:
                        "Wait until updated with provisioningState at 'Succeeded'",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description:
        "Manage identities related to Azure Red Hat OpenShift Standard clusters",
      subcommands: [
        {
          name: "create-required",
          description: "Create required identities",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--master-subnet",
              description:
                "Name or ID of master vnet subnet. If name is supplied, --vnet must be supplied",
              args: { name: "master-subnet" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--version",
              description: "OpenShift version to use for cluster creation",
              args: { name: "version" },
              isRequired: true,
            },
            {
              name: "--worker-subnet",
              description:
                "Name or ID of worker vnet subnet. If name is supplied, --vnet must be supplied",
              args: { name: "worker-subnet" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--disk-encryption-set",
              description:
                "ResourceID of the DiskEncryptionSet to be used for master and worker VMs",
              args: { name: "disk-encryption-set" },
            },
            {
              name: "--vnet",
              description:
                "Name or ID of vnet. If name is supplied, --vnet-resource-group must be supplied",
              args: { name: "vnet" },
            },
            {
              name: "--vnet-resource-group",
              description: "Name of vnet resource group",
              args: { name: "vnet-resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "get-required",
          description: "Get required identities",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--master-subnet",
              description:
                "Name or ID of master vnet subnet. If name is supplied, --vnet must be supplied",
              args: { name: "master-subnet" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--version",
              description: "OpenShift version to use for cluster creation",
              args: { name: "version" },
              isRequired: true,
            },
            {
              name: "--worker-subnet",
              description:
                "Name or ID of worker vnet subnet. If name is supplied, --vnet must be supplied",
              args: { name: "worker-subnet" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--disk-encryption-set",
              description:
                "ResourceID of the DiskEncryptionSet to be used for master and worker VMs",
              args: { name: "disk-encryption-set" },
            },
            {
              name: "--vnet",
              description:
                "Name or ID of vnet. If name is supplied, --vnet-resource-group must be supplied",
              args: { name: "vnet" },
            },
            {
              name: "--vnet-resource-group",
              description: "Name of vnet resource group",
              args: { name: "vnet-resource-group" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
