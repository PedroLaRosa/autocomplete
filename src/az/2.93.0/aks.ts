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
  name: "aks",
  description: "Azure Kubernetes Service",
  subcommands: [
    {
      name: "browse",
      description:
        "Show the dashboard for a Kubernetes cluster in a web browser",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--disable-browser",
          description:
            "Don't launch a web browser after establishing port-forwarding",
        },
        {
          name: "--listen-address",
          description: "The listening address for the dashboard",
          args: { name: "listen-address" },
        },
        {
          name: "--listen-port",
          description: "The listening port for the dashboard",
          args: { name: "listen-port" },
        },
      ],
    },
    {
      name: "check-acr",
      description: "Validate an ACR is accessible from an AKS cluster",
      options: [
        {
          name: "--acr",
          description: "The FQDN of the ACR",
          args: { name: "acr" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--node-name",
          description:
            "The name of a specific node to perform acr pull test checks. If not specified, it will be checked on a random node",
          args: { name: "node-name" },
        },
      ],
    },
    {
      name: "create",
      description: "Create a new managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--aad-admin-group-object-ids",
          description:
            "Comma-separated list of aad group object IDs that will be set as cluster admin",
          args: { name: "aad-admin-group-object-ids" },
        },
        {
          name: "--aad-tenant-id",
          description: "The ID of an Azure Active Directory tenant",
          args: { name: "aad-tenant-id" },
        },
        {
          name: "--aci-subnet-name",
          description:
            "The name of a subnet in an existing VNet into which to deploy the virtual nodes",
          args: { name: "aci-subnet-name" },
        },
        {
          name: "--acns-advanced-networkpolicies",
          description:
            'Enable advanced network policies (None, FQDN or L7) on a cluster when enabling advanced networking features with "--enable-acns"',
          args: {
            name: "acns-advanced-networkpolicies",
            suggestions: ["FQDN", "L7", "None"],
          },
        },
        {
          name: "--acns-datapath-acceleration-mode",
          description:
            "Set the datapath acceleration mode for Azure Container Networking Solution (ACNS) Performance. Valid values are 'BpfVeth' and 'None'",
          args: {
            name: "acns-datapath-acceleration-mode",
            suggestions: ["BpfVeth", "None"],
          },
        },
        {
          name: "--acns-transit-encryption-type",
          description: "Set transit encryption type for ACNS security",
          args: {
            name: "acns-transit-encryption-type",
            suggestions: ["None", "WireGuard"],
          },
        },
        acquirePolicyToken,
        {
          name: ["--admin-username", "-u"],
          description: "User account to create on node VMs for SSH access",
          args: { name: "admin-username" },
        },
        {
          name: "--aks-custom-headers",
          description:
            "Comma-separated key-value pairs to specify custom headers",
          args: { name: "aks-custom-headers" },
        },
        {
          name: "--ampls-resource-id",
          description:
            "Resource ID of Azure Monitor Private Link scope for Monitoring Addon",
          args: { name: "ampls-resource-id" },
        },
        {
          name: "--api-server-authorized-ip-ranges",
          description:
            "Comma-separated list of authorized apiserver IP ranges. Set to 0.0.0.0/32 to restrict apiserver traffic to node pools",
          args: { name: "api-server-authorized-ip-ranges" },
        },
        {
          name: "--apiserver-subnet-id",
          description:
            "The ID of a subnet in an existing VNet into which to assign control plane apiserver pods(requires --enable-apiserver-vnet-integration)",
          args: { name: "apiserver-subnet-id" },
        },
        {
          name: ["--app-routing-default-nginx-controller", "--ardnc"],
          description:
            "Configure default nginx ingress controller type. Valid values are annotationControlled (default behavior), external, internal, or none",
          args: {
            name: "app-routing-default-nginx-controller",
            suggestions: [
              "AnnotationControlled",
              "External",
              "Internal",
              "None",
            ],
          },
        },
        {
          name: "--appgw-id",
          description:
            "Resource Id of an existing Application Gateway to use with AGIC. Use with ingress-azure addon",
          args: { name: "appgw-id" },
        },
        {
          name: "--appgw-name",
          description:
            "Name of the application gateway to create/use in the node resource group. Use with ingress-azure addon",
          args: { name: "appgw-name" },
        },
        {
          name: "--appgw-subnet-cidr",
          description:
            "Subnet CIDR to use for a new subnet created to deploy the Application Gateway. Use with ingress-azure addon",
          args: { name: "appgw-subnet-cidr" },
        },
        {
          name: "--appgw-subnet-id",
          description:
            "Resource Id of an existing Subnet used to deploy the Application Gateway. Use with ingress-azure addon",
          args: { name: "appgw-subnet-id" },
        },
        {
          name: "--appgw-watch-namespace",
          description:
            "Specify the namespace, which AGIC should watch. This could be a single string value, or a comma-separated list of namespaces",
          args: { name: "appgw-watch-namespace" },
        },
        {
          name: "--assign-identity",
          description:
            "Specify an existing user assigned identity for control plane's usage in order to manage cluster resource group",
          args: { name: "assign-identity" },
        },
        {
          name: "--assign-kubelet-identity",
          description:
            "Specify an existing user assigned identity for kubelet's usage, which is typically used to pull image from ACR",
          args: { name: "assign-kubelet-identity" },
        },
        {
          name: "--attach-acr",
          description:
            "Grant the 'acrpull' role assignment to the ACR specified by name or resource ID",
          args: { name: "attach-acr" },
        },
        {
          name: "--auto-upgrade-channel",
          description: "Specify the upgrade channel for autoupgrade",
          args: {
            name: "auto-upgrade-channel",
            suggestions: ["node-image", "none", "patch", "rapid", "stable"],
          },
        },
        {
          name: "--azure-keyvault-kms-key-id",
          description: "Identifier of Azure Key Vault key",
          args: { name: "azure-keyvault-kms-key-id" },
        },
        {
          name: "--azure-keyvault-kms-key-vault-network-access",
          description: "Network Access of Azure Key Vault",
          args: {
            name: "azure-keyvault-kms-key-vault-network-access",
            suggestions: ["Private", "Public"],
          },
        },
        {
          name: "--azure-keyvault-kms-key-vault-resource-id",
          description: "Resource ID of Azure Key Vault",
          args: { name: "azure-keyvault-kms-key-vault-resource-id" },
        },
        {
          name: "--azure-monitor-workspace-resource-id",
          description: "Resource ID of the Azure Monitor Workspace",
          args: { name: "azure-monitor-workspace-resource-id" },
        },
        {
          name: "--bootstrap-artifact-source",
          description:
            "Configure artifact source when bootstraping the cluster",
          args: {
            name: "bootstrap-artifact-source",
            suggestions: ["Cache", "Direct"],
          },
        },
        {
          name: "--bootstrap-container-registry-resource-id",
          description:
            'Configure container registry resource ID. Must use "Cache" as bootstrap artifact source',
          args: { name: "bootstrap-container-registry-resource-id" },
        },
        {
          name: ["--custom-ca-trust-certificates", "--ca-certs"],
          description:
            "Path to a file containing up to 10 blank line separated certificates. Only valid for Linux nodes",
          args: { name: "custom-ca-trust-certificates" },
        },
        {
          name: ["--cluster-autoscaler-profile", "--ca-profile"],
          description:
            "Comma-separated list of key=value pairs for configuring cluster autoscaler. Pass an empty string to clear the profile",
          args: { name: "cluster-autoscaler-profile", isVariadic: true },
        },
        changeReference,
        {
          name: "--client-secret",
          description:
            "Secret associated with the service principal. This argument is required if --service-principal is specified",
          args: { name: "client-secret" },
        },
        {
          name: "--container-storage-version",
          description:
            "Set azure container storage version, the latest version will be installed by default",
          args: { name: "container-storage-version", suggestions: ["1", "2"] },
        },
        {
          name: "--crg-id",
          description:
            "The crg id used to associate the new cluster with the existed Capacity Reservation Group resource",
          args: { name: "crg-id" },
        },
        {
          name: "--data-collection-settings",
          description:
            "Path to JSON file containing data collection settings for Monitoring addon",
          args: { name: "data-collection-settings" },
        },
        {
          name: "--defender-config",
          description:
            "Path to JSON file containing Microsoft Defender profile configurations",
          args: { name: "defender-config" },
        },
        {
          name: "--disable-acns-observability",
          description:
            'Used to disable advanced networking observability features on a clusters when enabling advanced networking features with "--enable-acns"',
        },
        {
          name: "--disable-acns-security",
          description:
            'Used to disable advanced networking security features on a clusters when enabling advanced networking features with "--enable-acns"',
        },
        {
          name: "--disable-disk-driver",
          description: "Disable AzureDisk CSI Driver",
        },
        {
          name: "--disable-file-driver",
          description: "Disable AzureFile CSI Driver",
        },
        {
          name: "--disable-local-accounts",
          description:
            "If set to true, getting static credential will be disabled for this cluster",
        },
        {
          name: "--disable-opentelemetry-logs-traces",
          description:
            "Disable the OpenTelemetry (OTLP) logs and traces receiver",
        },
        {
          name: "--disable-opentelemetry-metrics",
          description: "Disable the OpenTelemetry (OTLP) metrics receiver",
        },
        {
          name: "--disable-prometheus-metrics-scraping",
          description:
            "Disable Prometheus metrics scraping by the Azure Monitor agent. Requires --enable-azure-monitor-logs",
        },
        {
          name: "--disable-public-fqdn",
          description: "Disable public fqdn feature for private cluster",
        },
        {
          name: "--disable-rbac",
          description: "Disable Kubernetes Role-Based Access Control",
        },
        {
          name: "--disable-run-command",
          description: "Disable Run command feature for the cluster",
        },
        {
          name: "--disable-snapshot-controller",
          description: "Disable CSI Snapshot Controller",
        },
        {
          name: ["--dns-name-prefix", "-p"],
          description:
            "Prefix for hostnames that are created. If not specified, generate a hostname using the managed cluster and resource group names",
          args: { name: "dns-name-prefix" },
        },
        {
          name: "--dns-service-ip",
          description: "An IP address assigned to the Kubernetes DNS service",
          args: { name: "dns-service-ip" },
        },
        {
          name: "--edge-zone",
          description: "The name of the Edge Zone",
          args: { name: "edge-zone" },
        },
        {
          name: "--enable-aad",
          description: "Enable managed AAD feature for cluster",
        },
        {
          name: "--enable-acns",
          description:
            "Enable advanced network functionalities on a cluster. Enabling this will incur additional costs. For non-cilium clusters, acns security will be disabled by default until further notice",
        },
        {
          name: ["--enable-addons", "-a"],
          description: "Enable the Kubernetes addons in a comma-separated list",
          args: { name: "enable-addons" },
        },
        {
          name: "--enable-ahub",
          description:
            "Enable Azure Hybrid User Benefits (AHUB) for Windows VMs",
        },
        {
          name: "--enable-ai-toolchain-operator",
          description: "Enable AI toolchain operator to the cluster",
        },
        {
          name: "--enable-apiserver-vnet-integration",
          description:
            "Enable integration of user vnet with control plane apiserver pods",
        },
        {
          name: "--enable-app-routing",
          description: "Enable Application Routing addon",
        },
        {
          name: ["--enable-app-routing-istio", "--enable-ari"],
          description:
            "Enable Gateway API based ingress on App Routing via Istio without service mesh functionality",
        },
        {
          name: ["--enable-azure-service-mesh", "--enable-asm"],
          description: "Enable Azure Service Mesh addon",
        },
        {
          name: "--enable-azure-container-storage",
          description:
            "Enable azure container storage. Can be used as a flag (defaults to True) or with a storage pool type value: (azureDisk, ephemeralDisk, elasticSan)",
          args: {
            name: "enable-azure-container-storage",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "--enable-azure-keyvault-kms",
          description: "Enable Azure KeyVault Key Management Service",
        },
        {
          name: "--enable-azure-monitor-app-monitoring",
          description:
            "Enable Azure Monitor Application Monitoring auto-instrumentation for a Kubernetes cluster",
        },
        {
          name: "--enable-azure-monitor-logs",
          description:
            "Enable Azure Monitor logs (Container Insights) for the cluster using managed identity authentication",
        },
        {
          name: "--enable-azure-monitor-metrics",
          description:
            "Enable a kubernetes cluster with the Azure Monitor managed service for Prometheus integration",
        },
        {
          name: "--enable-azure-rbac",
          description:
            "Enable Azure RBAC to control authorization checks on cluster",
        },
        {
          name: "--enable-blob-driver",
          description: "Enable AzureBlob CSI Driver",
        },
        {
          name: "--enable-cluster-autoscaler",
          description: "Enable cluster autoscaler, default value is false",
        },
        {
          name: "--enable-container-network-logs",
          description:
            "Enable container network log collection functionalities on a cluster. Automatically enables --enable-high-log-scale-mode",
        },
        {
          name: ["--enable-control-plane-metrics", "--enable-cp-metrics"],
          description:
            "Enable collection of Azure Monitor managed Prometheus control plane metrics for managed cluster components (controlplane-apiserver and controlplane-etcd targets by default). Requires Azure Monitor metrics to be enabled (already enabled or via --enable-azure-monitor-metrics)",
        },
        {
          name: "--enable-cost-analysis",
          description:
            "Enable exporting Kubernetes Namespace and Deployment details to the Cost Analysis views in the Azure portal. For more information see aka.ms/aks/docs/cost-analysis",
        },
        {
          name: "--enable-defender",
          description: "Enable Microsoft Defender security profile",
        },
        {
          name: "--enable-encryption-at-host",
          description: "Enable EncryptionAtHost, default value is false",
        },
        {
          name: "--enable-fips-image",
          description: "Use FIPS-enabled OS on agent nodes",
        },
        {
          name: "--enable-gateway-api",
          description:
            "Enable managed installation of Gateway API CRDs from the standard release channel",
        },
        {
          name: "--enable-high-log-scale-mode",
          description:
            "Enable High Log Scale Mode for Container Logs. Auto-enabled when --enable-container-network-logs is specified",
          args: {
            name: "enable-high-log-scale-mode",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-hosted-system",
          description:
            "(Automatic SKU) Explicitly opt in to a Managed System Pool for the Automatic cluster",
        },
        {
          name: "--enable-image-cleaner",
          description: "Enable ImageCleaner Service",
        },
        {
          name: "--enable-keda",
          description: "Enable KEDA workload auto-scaler",
        },
        {
          name: "--enable-managed-identity",
          description:
            'Using a system assigned managed identity to manage cluster resource group. You can explicitly specify "--service-principal" and "--client-secret" to disable managed identity, otherwise it will be enabled',
        },
        {
          name: "--enable-msi-auth-for-monitoring",
          description:
            "Option '--enable-msi-auth-for-monitoring' has been deprecated and will be removed in a future release. Use '--enable-azure-monitor-logs' instead. Enable Managed Identity Auth for Monitoring addon",
          args: {
            name: "enable-msi-auth-for-monitoring",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-node-public-ip",
          description: "Enable VMSS or VMs node public IP",
        },
        { name: "--enable-oidc-issuer", description: "Enable OIDC issuer" },
        {
          name: "--enable-opentelemetry-logs-traces",
          description:
            "Enable the OpenTelemetry (OTLP) logs and traces receiver. Requires --enable-azure-monitor-logs",
        },
        {
          name: "--enable-opentelemetry-metrics",
          description:
            "Enable the OpenTelemetry (OTLP) metrics receiver. Requires --enable-azure-monitor-metrics",
        },
        {
          name: "--enable-private-cluster",
          description: "Enable private cluster",
        },
        {
          name: "--enable-prometheus-metrics-scraping",
          description:
            "Enable Prometheus metrics scraping by the Azure Monitor agent. Requires --enable-azure-monitor-logs",
        },
        {
          name: "--enable-secret-rotation",
          description:
            "Enable secret rotation. Use with azure-keyvault-secrets-provider addon",
        },
        {
          name: "--enable-secure-boot",
          description:
            "Enable Secure Boot on all node pools in the cluster. Must use VMSS or VMs agent pool type",
        },
        {
          name: "--enable-sgxquotehelper",
          description: "Enable SGX quote helper for confcom addon",
        },
        {
          name: "--enable-static-egress-gateway",
          description: "Enable Static Egress Gateway addon to the cluster",
        },
        {
          name: "--enable-syslog",
          description: "Enable syslog data collection for Monitoring addon",
          args: {
            name: "enable-syslog",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-ultra-ssd",
          description: "Enable UltraSSD, default value is false",
        },
        {
          name: "--enable-upstream-kubescheduler-user-configuration",
          description:
            "Enable user-defined scheduler configuration for kube-scheduler upstream on the cluster",
        },
        {
          name: "--enable-vpa",
          description: "Enable vertical pod autoscaler for cluster",
        },
        {
          name: "--enable-vtpm",
          description:
            "Enable vTPM on all node pools in the cluster. Must use VMSS or VMs agent pool type",
        },
        { name: "--enable-windows-gmsa", description: "Enable Windows gmsa" },
        {
          name: "--enable-windows-recording-rules",
          description:
            "Enable Windows Recording Rules when enabling the Azure Monitor Metrics addon",
        },
        {
          name: "--enable-workload-identity",
          description: "Enable workload identity addon",
        },
        {
          name: "--ephemeral-disk-nvme-perf-tier",
          description:
            "Set ephemeral disk volume type for azure container storage",
          args: {
            name: "ephemeral-disk-nvme-perf-tier",
            suggestions: ["Basic", "Premium", "Standard"],
          },
        },
        {
          name: "--ephemeral-disk-volume-type",
          description:
            "Set ephemeral disk volume type for azure container storage",
          args: {
            name: "ephemeral-disk-volume-type",
            suggestions: [
              "EphemeralVolumeOnly",
              "PersistentVolumeWithAnnotation",
            ],
          },
        },
        {
          name: "--fqdn-subdomain",
          description:
            "Prefix for FQDN that is created for private cluster with custom private dns zone scenario",
          args: { name: "fqdn-subdomain" },
        },
        {
          name: "--generate-ssh-keys",
          description:
            "Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory",
        },
        {
          name: "--gmsa-dns-server",
          description: "Specify DNS server for Windows gmsa for this cluster",
          args: { name: "gmsa-dns-server" },
        },
        {
          name: "--gmsa-root-domain-name",
          description:
            "Specify root domain name for Windows gmsa for this cluster",
          args: { name: "gmsa-root-domain-name" },
        },
        {
          name: "--gpu-instance-profile",
          description:
            "GPU instance profile to partition multi-gpu Nvidia GPUs",
          args: {
            name: "gpu-instance-profile",
            suggestions: ["MIG1g", "MIG2g", "MIG3g", "MIG4g", "MIG7g"],
          },
        },
        {
          name: "--grafana-resource-id",
          description: "Resource ID of the Azure Managed Grafana Workspace",
          args: { name: "grafana-resource-id" },
        },
        {
          name: "--host-group-id",
          description:
            "The fully qualified dedicated host group id used to provision agent node pool",
          args: { name: "host-group-id" },
        },
        {
          name: "--http-proxy-config",
          description: "HTTP Proxy configuration for this cluster",
          args: { name: "http-proxy-config" },
        },
        {
          name: "--if-match",
          description:
            "The value provided will be compared to the ETag of the managed cluster, if it matches the operation will proceed. If it does not match, the request will be rejected to prevent accidental overwrites. This must not be specified when creating a new cluster",
          args: { name: "if-match" },
        },
        {
          name: "--if-none-match",
          description:
            "Set to '*' to allow a new cluster to be created, but to prevent updating an existing cluster. Other values will be ignored",
          args: { name: "if-none-match" },
        },
        {
          name: "--image-cleaner-interval-hours",
          description: "ImageCleaner scanning interval",
          args: { name: "image-cleaner-interval-hours" },
        },
        {
          name: "--ip-families",
          description:
            "A comma-separated list of IP versions to use for cluster networking",
          args: { name: "ip-families" },
        },
        {
          name: "--k8s-support-plan",
          description:
            'Choose from "KubernetesOfficial" or "AKSLongTermSupport", with "AKSLongTermSupport" you get 1 extra year of CVE patchs',
          args: {
            name: "k8s-support-plan",
            suggestions: ["AKSLongTermSupport", "KubernetesOfficial"],
          },
        },
        {
          name: "--kms-infrastructure-encryption",
          description:
            "Enable encryption at rest of Kubernetes resource objects using service-managed keys",
          args: {
            name: "kms-infrastructure-encryption",
            suggestions: ["Enabled"],
          },
        },
        {
          name: "--ksm-metric-annotations-allow-list",
          description:
            "Comma-separated list of additional Kubernetes label keys that will be used in the resource' labels metric. By default the metric contains only name and namespace labels. To include additional labels provide a list of resource names in their plural form and Kubernetes label keys you would like to allow for them (e.g.'=namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...)'. A single '*' can be provided per resource instead to allow any labels, but that has severe performance implications (e.g. '=pods=[*]')",
          args: { name: "ksm-metric-annotations-allow-list" },
        },
        {
          name: "--ksm-metric-labels-allow-list",
          description:
            "Comma-separated list of additional Kubernetes label keys that will be used in the resource' labels metric. By default the metric contains only name and namespace labels. To include additional labels provide a list of resource names in their plural form and Kubernetes label keys you would like to allow for them (e.g. '=namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...)'. A single '*' can be provided per resource instead to allow any labels, but that has severe performance implications (e.g. '=pods=[*]')",
          args: { name: "ksm-metric-labels-allow-list" },
        },
        {
          name: "--kubelet-config",
          description:
            "Path to JSON file containing Kubelet configurations for agent nodes. https://aka.ms/aks/custom-node-config",
          args: { name: "kubelet-config" },
        },
        {
          name: ["--kubernetes-version", "-k"],
          description:
            'Version of Kubernetes to use for creating the cluster, such as "1.16.9"',
          args: { name: "kubernetes-version" },
        },
        {
          name: "--linux-os-config",
          description:
            "Path to JSON file containing OS configurations for Linux agent nodes. https://aka.ms/aks/custom-node-config",
          args: { name: "linux-os-config" },
        },
        {
          name: "--load-balancer-backend-pool-type",
          description: "Load balancer backend pool type",
          args: {
            name: "load-balancer-backend-pool-type",
            suggestions: ["nodeIP", "nodeIPConfiguration"],
          },
        },
        {
          name: "--load-balancer-idle-timeout",
          description: "Load balancer idle timeout in minutes",
          args: { name: "load-balancer-idle-timeout" },
        },
        {
          name: "--load-balancer-managed-outbound-ip-count",
          description: "Load balancer managed outbound IP count",
          args: { name: "load-balancer-managed-outbound-ip-count" },
        },
        {
          name: "--load-balancer-managed-outbound-ipv6-count",
          description: "Load balancer managed outbound IPv6 IP count",
          args: { name: "load-balancer-managed-outbound-ipv6-count" },
        },
        {
          name: "--load-balancer-outbound-ip-prefixes",
          description: "Load balancer outbound IP prefix resource IDs",
          args: { name: "load-balancer-outbound-ip-prefixes" },
        },
        {
          name: "--load-balancer-outbound-ips",
          description: "Load balancer outbound IP resource IDs",
          args: { name: "load-balancer-outbound-ips" },
        },
        {
          name: "--load-balancer-outbound-ports",
          description: "Load balancer outbound allocated ports",
          args: { name: "load-balancer-outbound-ports" },
        },
        {
          name: "--load-balancer-sku",
          description:
            "Azure Load Balancer SKU selection for your cluster. basic or standard. Defaults to 'standard'",
          args: {
            name: "load-balancer-sku",
            suggestions: ["basic", "standard"],
          },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--max-count",
          description:
            'Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 1000]',
          args: { name: "max-count" },
        },
        {
          name: ["--max-pods", "-m"],
          description: "The maximum number of pods deployable to a node",
          args: { name: "max-pods" },
        },
        {
          name: "--message-of-the-day",
          description:
            "Path to a file containing the desired message of the day. Only valid for linux nodes. Will be written to /etc/motd",
          args: { name: "message-of-the-day" },
        },
        {
          name: "--min-count",
          description:
            'Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 1000]',
          args: { name: "min-count" },
        },
        {
          name: "--nat-gateway-idle-timeout",
          description: "NAT gateway idle timeout in minutes",
          args: { name: "nat-gateway-idle-timeout" },
        },
        {
          name: "--nat-gateway-managed-outbound-ip-count",
          description: "NAT gateway managed outbound IP count",
          args: { name: "nat-gateway-managed-outbound-ip-count" },
        },
        {
          name: [
            "--nat-gateway-managed-outbound-ipv6-count",
            "--nat-gw-ipv6-count",
          ],
          description:
            "NAT gateway managed outbound IPv6 count. Only valid with --outbound-type managedNATGateway and --outbound-type-sku StandardV2",
          args: { name: "nat-gateway-managed-outbound-ipv6-count" },
        },
        {
          name: ["--nat-gateway-outbound-ip-prefixes", "--nat-gw-prefixes"],
          description:
            "Comma-separated public IP prefix resource IDs for the cluster NAT gateway. Only valid with --outbound-type-sku StandardV2",
          args: { name: "nat-gateway-outbound-ip-prefixes" },
        },
        {
          name: ["--nat-gateway-outbound-ips", "--nat-gw-ips"],
          description:
            "Comma-separated public IP resource IDs for the cluster NAT gateway. Only valid with --outbound-type-sku StandardV2",
          args: { name: "nat-gateway-outbound-ips" },
        },
        {
          name: "--network-dataplane",
          description: "The network dataplane to use",
          args: { name: "network-dataplane", suggestions: ["azure", "cilium"] },
        },
        {
          name: "--network-plugin",
          description: "The Kubernetes network plugin to use",
          args: {
            name: "network-plugin",
            suggestions: ["azure", "kubenet", "none"],
          },
        },
        {
          name: "--network-plugin-mode",
          description: "The network plugin mode to use",
          args: { name: "network-plugin-mode", suggestions: ["overlay"] },
        },
        {
          name: "--network-policy",
          description: "Network Policy Engine to use",
          args: { name: "network-policy" },
        },
        {
          name: ["--no-ssh-key", "-x"],
          description: "Do not use or create a local SSH key",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--node-count", "-c"],
          description:
            "Number of nodes in the Kubernetes node pool. After creating a cluster, you can change the size of its node pool with az aks scale",
          args: { name: "node-count" },
        },
        {
          name: "--node-os-upgrade-channel",
          description:
            "Manner in which the OS on your nodes is updated. It could be NodeImage, None, SecurityPatch or Unmanaged",
          args: {
            name: "node-os-upgrade-channel",
            suggestions: ["NodeImage", "None", "SecurityPatch", "Unmanaged"],
          },
        },
        {
          name: ["--node-osdisk-diskencryptionset-id", "-d"],
          description:
            "ResourceId of the disk encryption set to use for enabling encryption at rest on agent node os disk",
          args: { name: "node-osdisk-diskencryptionset-id" },
        },
        {
          name: "--node-osdisk-size",
          description:
            "Size in GiB of the OS disk for each node in the node pool. Minimum 30 GiB",
          args: { name: "node-osdisk-size" },
        },
        {
          name: "--node-osdisk-type",
          description:
            "OS disk type to be used for machines in a given agent pool: Ephemeral or Managed. Defaults to 'Ephemeral' when possible in conjunction with VM size and OS disk size. May not be changed for this pool after creation",
          args: {
            name: "node-osdisk-type",
            suggestions: ["Ephemeral", "Managed"],
          },
        },
        {
          name: "--node-provisioning-default-pools",
          description:
            'The set of default Karpenter NodePools configured for node provisioning. Valid values are "Auto" and "None"',
          args: {
            name: "node-provisioning-default-pools",
            suggestions: ["Auto", "None"],
          },
        },
        {
          name: "--node-provisioning-mode",
          description:
            'Set the node provisioning mode of the cluster. Valid values are "Auto" and "Manual". For more information on "Auto" mode see aka.ms/aks/nap',
          args: {
            name: "node-provisioning-mode",
            suggestions: ["Auto", "Manual"],
          },
        },
        {
          name: "--node-public-ip-prefix-id",
          description:
            "Public IP prefix ID used to assign public IPs to VMSS or VMs nodes",
          args: { name: "node-public-ip-prefix-id" },
        },
        {
          name: "--node-public-ip-tags",
          description: "The ipTags of the node public IPs",
          args: {
            name: "node-public-ip-tags",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "--node-resource-group",
          description:
            "The node resource group is the resource group where all customer's resources will be created in, such as virtual machines",
          args: { name: "node-resource-group" },
        },
        {
          name: "--node-subnet-id",
          description:
            "(Automatic SKU) The ID of a subnet in an existing VNet to be used by user node pools in an Automatic cluster",
          args: { name: "node-subnet-id" },
        },
        {
          name: ["--node-vm-size", "-s"],
          description:
            "Size of Virtual Machines to create as Kubernetes nodes. If the user does not specify one, server will select a default VM size for her/him",
          args: { name: "node-vm-size" },
        },
        {
          name: "--nodepool-allowed-host-ports",
          description:
            "Expose host ports on the node pool. When specified, format should be a space-separated list of ranges with protocol, eg. 80/TCP 443/TCP 4000-5000/TCP",
          args: { name: "nodepool-allowed-host-ports", isVariadic: true },
        },
        {
          name: "--nodepool-asg-ids",
          description:
            "The IDs of the application security groups to which the node pool's network interface should belong. When specified, format should be a space-separated list of IDs",
          args: { name: "nodepool-asg-ids", isVariadic: true },
        },
        {
          name: "--nodepool-labels",
          description:
            "The node labels for all node pool. See https://aka.ms/node-labels for syntax of labels",
          args: { name: "nodepool-labels", isOptional: true, isVariadic: true },
        },
        {
          name: "--nodepool-name",
          description:
            "Node pool name, alphanumeric characters only. See https://aka.ms/aks-naming-rules for length limits",
          args: { name: "nodepool-name" },
        },
        {
          name: "--nodepool-tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "nodepool-tags", isOptional: true, isVariadic: true },
        },
        {
          name: "--nodepool-taints",
          description: "The node taints for all node pool",
          args: { name: "nodepool-taints" },
        },
        {
          name: "--nrg-lockdown-restriction-level",
          description: "Restriction level on the managed node resource group",
          args: {
            name: "nrg-lockdown-restriction-level",
            suggestions: ["ReadOnly", "Unrestricted"],
          },
        },
        {
          name: "--opentelemetry-logs-traces-port-grpc",
          description:
            "GRPC port for the OpenTelemetry logs and traces receiver",
          args: { name: "opentelemetry-logs-traces-port-grpc" },
        },
        {
          name: "--opentelemetry-logs-traces-port-http",
          description:
            "HTTP/protobuf port for the OpenTelemetry logs and traces receiver",
          args: { name: "opentelemetry-logs-traces-port-http" },
        },
        {
          name: "--opentelemetry-metrics-port-grpc",
          description: "GRPC port for the OpenTelemetry metrics receiver",
          args: { name: "opentelemetry-metrics-port-grpc" },
        },
        {
          name: "--opentelemetry-metrics-port-http",
          description:
            "HTTP/protobuf port for the OpenTelemetry metrics receiver",
          args: { name: "opentelemetry-metrics-port-http" },
        },
        {
          name: "--os-sku",
          description:
            "The OS SKU of the agent node pool. Ubuntu, AzureLinux, AzureLinux3, AzureContainerLinux, Ubuntu2204, or Ubuntu2404",
          args: {
            name: "os-sku",
            suggestions: [
              "AzureContainerLinux",
              "AzureLinux",
              "AzureLinux3",
              "CBLMariner",
              "Mariner",
              "Ubuntu",
              "Ubuntu2204",
              "Ubuntu2404",
            ],
          },
        },
        {
          name: "--outbound-type",
          description: "How outbound traffic will be configured for a cluster",
          args: {
            name: "outbound-type",
            suggestions: [
              "loadBalancer",
              "managedNATGateway",
              "none",
              "userAssignedNATGateway",
              "userDefinedRouting",
            ],
          },
        },
        {
          name: "--outbound-type-sku",
          description:
            "SKU of the managed NAT Gateway (Standard or StandardV2)",
          args: {
            name: "outbound-type-sku",
            suggestions: ["Standard", "StandardV2"],
          },
        },
        {
          name: "--pod-cidr",
          description:
            "A CIDR notation IP range from which to assign pod IPs when Azure CNI Overlay or Kubenet is used (On 31 March 2028, Kubenet will be retired)",
          args: { name: "pod-cidr" },
        },
        {
          name: "--pod-cidrs",
          description:
            "A comma-separated list of CIDR notation IP ranges from which to assign pod IPs when Azure CNI Overlay or Kubenet is used (On 31 March 2028, Kubenet will be retired)",
          args: { name: "pod-cidrs" },
        },
        {
          name: "--pod-ip-allocation-mode",
          description:
            'Set the ip allocation mode for how Pod IPs from the Azure Pod Subnet are allocated to the nodes in the AKS cluster. The choice is between dynamic batches of individual IPs or static allocation of a set of CIDR blocks. Accepted Values are "DynamicIndividual" or "StaticBlock"',
          args: {
            name: "pod-ip-allocation-mode",
            suggestions: ["DynamicIndividual", "StaticBlock"],
          },
        },
        {
          name: "--pod-subnet-id",
          description:
            "The ID of a subnet in an existing VNet into which to assign pods in the cluster (requires azure network-plugin)",
          args: { name: "pod-subnet-id" },
        },
        {
          name: "--ppg",
          description: "The ID of a PPG",
          args: { name: "ppg" },
        },
        {
          name: "--private-dns-zone",
          description: "Private dns zone mode for private cluster",
          args: { name: "private-dns-zone" },
        },
        {
          name: "--revision",
          description: "Azure Service Mesh revision to install",
          args: { name: "revision" },
        },
        {
          name: "--rotation-poll-interval",
          description:
            "Set interval of rotation poll. Use with azure-keyvault-secrets-provider addon",
          args: { name: "rotation-poll-interval" },
        },
        {
          name: "--service-cidr",
          description:
            "A CIDR notation IP range from which to assign service cluster IPs",
          args: { name: "service-cidr" },
        },
        {
          name: "--service-cidrs",
          description:
            "A comma-separated list of CIDR notation IP ranges from which to assign service cluster IPs",
          args: { name: "service-cidrs" },
        },
        {
          name: "--service-principal",
          description:
            "Service principal used for authentication to Azure APIs",
          args: { name: "service-principal" },
        },
        {
          name: "--skip-subnet-role-assignment",
          description: "Skip role assignment for subnet (advanced networking)",
        },
        {
          name: "--sku",
          description:
            "Specify SKU name for managed clusters. Use '--sku base' enables a base managed cluster. Use '--sku automatic' enables an automatic managed cluster",
          args: { name: "sku", suggestions: ["automatic", "base"] },
        },
        {
          name: "--snapshot-id",
          description: "The source snapshot id used to create this cluster",
          args: { name: "snapshot-id" },
        },
        {
          name: "--ssh-access",
          description: "Configure SSH access for the first system node pool",
          args: {
            name: "ssh-access",
            suggestions: ["disabled", "entraid", "localuser"],
          },
        },
        {
          name: "--ssh-key-value",
          description:
            "Public key path or key contents to install on node VMs for SSH access. For example, 'ssh-rsa AAAAB...snip...UcyupgH azureuser@linuxvm'",
          args: { name: "ssh-key-value" },
        },
        {
          name: "--storage-pool-name",
          description: "Set storage pool name for azure container storage",
          args: { name: "storage-pool-name" },
        },
        {
          name: "--storage-pool-option",
          description:
            "Set ephemeral disk storage pool option for azure container storage",
          args: { name: "storage-pool-option", suggestions: ["NVMe", "Temp"] },
        },
        {
          name: "--storage-pool-size",
          description: "Set storage pool size for azure container storage",
          args: { name: "storage-pool-size" },
        },
        {
          name: "--storage-pool-sku",
          description:
            "Set azure disk type storage pool sku for azure container storage",
          args: {
            name: "storage-pool-sku",
            suggestions: [
              "PremiumV2_LRS",
              "Premium_LRS",
              "Premium_ZRS",
              "StandardSSD_LRS",
              "StandardSSD_ZRS",
              "Standard_LRS",
              "UltraSSD_LRS",
            ],
          },
        },
        {
          name: "--syslog-port",
          description:
            "TCP port that the Azure Monitor agent listens on for syslog data. Requires --enable-azure-monitor-logs",
          args: { name: "syslog-port" },
        },
        {
          name: "--system-node-subnet-id",
          description:
            "(Automatic SKU) The ID of a subnet in an existing VNet to be used by the Managed System Pool in an Automatic cluster",
          args: { name: "system-node-subnet-id" },
        },
        {
          name: "--tags",
          description:
            "The tags of the managed cluster. The managed cluster instance and all resources managed by the cloud provider will be tagged",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
        {
          name: "--tier",
          description:
            "Specify SKU tier for managed clusters. '--tier standard' enables a standard managed cluster service with a financially backed SLA. '--tier free' does not have a financially backed SLA",
          args: { name: "tier", suggestions: ["free", "premium", "standard"] },
        },
        {
          name: "--vm-set-type",
          description:
            "Agent pool vm set type. VirtualMachineScaleSets or AvailabilitySet or VirtualMachines. Defaults to 'VirtualMachineScaleSets'",
          args: { name: "vm-set-type" },
        },
        {
          name: "--vm-sizes",
          description:
            "Comma-separated list of VM sizes. Valid for VirtualMachines node pool only. If --vm-sizes not specified but --node-vm-size specified, value of --node-vm-size will be used. If neither of them specified, defaults to Standard_DS2_v2 for Linux or Standard_D2s_v3 for Windows",
          args: { name: "vm-sizes" },
        },
        {
          name: "--vnet-subnet-id",
          description:
            "The ID of a subnet in an existing VNet into which to deploy the cluster",
          args: { name: "vnet-subnet-id" },
        },
        {
          name: "--windows-admin-password",
          description: "User account password to use on windows node VMs",
          args: { name: "windows-admin-password" },
        },
        {
          name: "--windows-admin-username",
          description: "User account to create on windows node VMs",
          args: { name: "windows-admin-username" },
        },
        {
          name: "--workload-runtime",
          description: "Set the workload runtime",
          args: { name: "workload-runtime", suggestions: ["KataVmIsolation"] },
        },
        {
          name: "--workspace-resource-id",
          description:
            "The resource ID of an existing Log Analytics Workspace to use for storing monitoring data. If not specified, uses the default Log Analytics Workspace if it exists, otherwise creates one",
          args: { name: "workspace-resource-id" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
        {
          name: ["--zones", "-z"],
          description:
            "Availability zones where agent nodes will be placed. Also, to install agent nodes to more than one zones you need to pass zone numbers (1,2 or 3) separated by blanks. For example - To have all 3 zones, you are expected to enter --zones 1 2 3",
          args: { name: "zones", isVariadic: true },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--if-match",
          description:
            "The value provided will be compared to the ETag of the managed cluster, if it matches the operation will proceed. If it does not match, the request will be rejected to prevent accidental overwrites",
          args: { name: "if-match" },
        },
        {
          name: "--if-none-match",
          description:
            "Set to '*' to allow deleting a cluster only if it exists. Other values will be ignored",
          args: { name: "if-none-match" },
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
      name: "disable-addons",
      description: "Disable Kubernetes addons",
      options: [
        {
          name: ["--addons", "-a"],
          description:
            "Disable the Kubernetes addons in a comma-separated list",
          args: { name: "addons" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
      name: "enable-addons",
      description: "Enable Kubernetes addons",
      options: [
        {
          name: ["--addons", "-a"],
          description: "Enable the Kubernetes addons in a comma-separated list",
          args: { name: "addons" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--ampls-resource-id",
          description:
            "Resource ID of Azure Monitor Private Link scope for Monitoring Addon",
          args: { name: "ampls-resource-id" },
        },
        {
          name: "--appgw-id",
          description:
            "Resource Id of an existing Application Gateway to use with AGIC. Use with ingress-azure addon",
          args: { name: "appgw-id" },
        },
        {
          name: "--appgw-name",
          description:
            "Name of the application gateway to create/use in the node resource group. Use with ingress-azure addon",
          args: { name: "appgw-name" },
        },
        {
          name: "--appgw-subnet-cidr",
          description:
            "Subnet CIDR to use for a new subnet created to deploy the Application Gateway. Use with ingress-azure addon",
          args: { name: "appgw-subnet-cidr" },
        },
        {
          name: "--appgw-subnet-id",
          description:
            "Resource Id of an existing Subnet used to deploy the Application Gateway. Use with ingress-azure addon",
          args: { name: "appgw-subnet-id" },
        },
        {
          name: "--appgw-watch-namespace",
          description:
            "Specify the namespace, which AGIC should watch. This could be a single string value, or a comma-separated list of namespaces",
          args: { name: "appgw-watch-namespace" },
        },
        changeReference,
        {
          name: "--data-collection-settings",
          description:
            "Path to JSON file containing data collection settings for Monitoring addon",
          args: { name: "data-collection-settings" },
        },
        {
          name: "--enable-high-log-scale-mode",
          description:
            "Enable High Log Scale Mode for Container Logs. Auto-enabled when --enable-container-network-logs is specified",
          args: {
            name: "enable-high-log-scale-mode",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-msi-auth-for-monitoring",
          description:
            "Option '--enable-msi-auth-for-monitoring' has been deprecated and will be removed in a future release. Use '--enable-azure-monitor-logs' instead. Enable Managed Identity Auth for Monitoring addon",
          args: {
            name: "enable-msi-auth-for-monitoring",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-secret-rotation",
          description:
            "Enable secret rotation. Use with azure-keyvault-secrets-provider addon",
        },
        {
          name: "--enable-sgxquotehelper",
          description: "Enable SGX quote helper for confcom addon",
        },
        {
          name: "--enable-syslog",
          description: "Enable syslog data collection for Monitoring addon",
          args: {
            name: "enable-syslog",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--rotation-poll-interval",
          description:
            "Set interval of rotation poll. Use with azure-keyvault-secrets-provider addon",
          args: { name: "rotation-poll-interval" },
        },
        {
          name: ["--subnet-name", "-s"],
          description:
            "Name of an existing subnet to use with the virtual-node add-on",
          args: { name: "subnet-name" },
        },
        {
          name: "--workspace-resource-id",
          description:
            "The resource ID of an existing Log Analytics Workspace to use for storing monitoring data",
          args: { name: "workspace-resource-id" },
        },
      ],
    },
    {
      name: "get-credentials",
      description: "Get access credentials for a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
        },
        changeReference,
        {
          name: "--context",
          description:
            "If specified, overwrite the default context name. The --admin parameter takes precedence over --context",
          args: { name: "context" },
        },
        {
          name: ["--file", "-f"],
          description:
            'Kubernetes configuration file to update. Use "-" to print YAML to stdout instead',
          args: { name: "file" },
        },
        {
          name: "--format",
          description:
            'Specify the format of the returned credential. Available values are ["exec", "azure"]. Only take effect when requesting clusterUser credential of AAD clusters',
          args: { name: "format" },
        },
        {
          name: "--overwrite-existing",
          description:
            "Overwrite any existing cluster entry with the same name",
        },
        {
          name: "--public-fqdn",
          description:
            "Get private cluster credential with server address to be public fqdn",
        },
      ],
    },
    {
      name: "get-upgrades",
      description:
        "Get the upgrade versions available for a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
      name: "get-versions",
      description:
        "Get the versions available for creating a managed Kubernetes cluster",
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
      name: "install-cli",
      description:
        "Download and install kubectl, the Kubernetes command-line tool. Download and install kubelogin, a client-go credential (exec) plugin implementing azure authentication",
      options: [
        acquirePolicyToken,
        {
          name: "--base-src-url",
          description: "Base download source URL for kubectl releases",
          args: { name: "base-src-url" },
        },
        changeReference,
        {
          name: "--client-version",
          description: "Version of kubectl to install",
          args: { name: "client-version" },
        },
        {
          name: "--gh-token",
          description:
            "GitHub authentication token used when downloading kubelogin binaries from GitHub releases. Supplying a token helps avoid GitHub API rate limits",
          args: { name: "gh-token" },
        },
        {
          name: "--install-location",
          description:
            "Path at which to install kubectl. Note: the path should contain the binary filename",
          args: { name: "install-location" },
        },
        {
          name: ["--kubelogin-base-src-url", "-l"],
          description: "Base download source URL for kubelogin releases",
          args: { name: "kubelogin-base-src-url" },
        },
        {
          name: "--kubelogin-install-location",
          description:
            "Path at which to install kubelogin. Note: the path should contain the binary filename",
          args: { name: "kubelogin-install-location" },
        },
        {
          name: "--kubelogin-version",
          description: "Version of kubelogin to install",
          args: { name: "kubelogin-version" },
        },
      ],
    },
    {
      name: "install-desktop",
      description: "Download and install AKS Desktop for the current platform",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--gh-token",
          description:
            "GitHub authentication token used to retrieve AKS Desktop release metadata. Prefer the GH_TOKEN environment variable to avoid exposing credentials in shell history, process listings, or debug logs. This option overrides GH_TOKEN. Supplying a token helps avoid GitHub API rate limits",
          args: { name: "gh-token" },
        },
        {
          name: "--version",
          description:
            "Version of AKS Desktop to install. By default, the latest stable version is installed",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "list",
      description: "List managed Kubernetes clusters",
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
      name: "operation-abort",
      description: "Abort last running operation on managed cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "remove-dev-spaces",
      description:
        "Remove Azure Dev Spaces from a managed Kubernetes cluster. This command has been deprecated and will be removed in a future release",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "rotate-certs",
      description:
        "Rotate certificates and keys on a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
      name: "scale",
      description: "Scale the node pool in a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--node-count", "-c"],
          description: "Number of nodes in the Kubernetes node pool",
          args: { name: "node-count" },
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--nodepool-name",
          description:
            "Node pool name, alphanumeric characters only. See https://aka.ms/aks-naming-rules for length limits",
          args: { name: "nodepool-name" },
        },
      ],
    },
    {
      name: "show",
      description: "Show the details for a managed Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
      name: "start",
      description: "Starts a previously stopped Managed Cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "stop",
      description: "Stop a managed cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "update",
      description:
        "Update a managed Kubernetes cluster. When called with no optional arguments this attempts to move the cluster to its goal state without changing the current cluster configuration. This can be used to move out of a non succeeded state",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--aad-admin-group-object-ids",
          description:
            "Comma-separated list of aad group object IDs that will be set as cluster admin",
          args: { name: "aad-admin-group-object-ids" },
        },
        {
          name: "--aad-tenant-id",
          description: "The ID of an Azure Active Directory tenant",
          args: { name: "aad-tenant-id" },
        },
        {
          name: "--acns-advanced-networkpolicies",
          description:
            'Enable advanced network policies (None, FQDN or L7) on a cluster when enabling advanced networking features with "--enable-acns"',
          args: {
            name: "acns-advanced-networkpolicies",
            suggestions: ["FQDN", "L7", "None"],
          },
        },
        {
          name: "--acns-datapath-acceleration-mode",
          description:
            "Set the datapath acceleration mode for Azure Container Networking Solution (ACNS) Performance. Valid values are 'BpfVeth' and 'None'",
          args: {
            name: "acns-datapath-acceleration-mode",
            suggestions: ["BpfVeth", "None"],
          },
        },
        {
          name: "--acns-transit-encryption-type",
          description: "Set transit encryption type for ACNS security",
          args: {
            name: "acns-transit-encryption-type",
            suggestions: ["None", "WireGuard"],
          },
        },
        acquirePolicyToken,
        {
          name: "--aks-custom-headers",
          description:
            "Comma-separated key-value pairs to specify custom headers",
          args: { name: "aks-custom-headers" },
        },
        {
          name: "--ampls-resource-id",
          description:
            "Resource ID of Azure Monitor Private Link scope for Monitoring Addon",
          args: { name: "ampls-resource-id" },
        },
        {
          name: "--api-server-authorized-ip-ranges",
          description:
            'Comma-separated list of authorized apiserver IP ranges. Set to "" to allow all traffic on a previously restricted cluster. Set to 0.0.0.0/32 to restrict apiserver traffic to node pools',
          args: { name: "api-server-authorized-ip-ranges" },
        },
        {
          name: "--apiserver-subnet-id",
          description:
            "The ID of a subnet in an existing VNet into which to assign control plane apiserver pods(requires --enable-apiserver-vnet-integration)",
          args: { name: "apiserver-subnet-id" },
        },
        {
          name: "--assign-identity",
          description:
            "Specify an existing user assigned identity to manage cluster resource group",
          args: { name: "assign-identity" },
        },
        {
          name: "--assign-kubelet-identity",
          description:
            "Update cluster's kubelet identity to an existing user assigned identity. Please note this operation will recreate all agent nodes in the cluster",
          args: { name: "assign-kubelet-identity" },
        },
        {
          name: ["--assignee-principal-type", "-t"],
          description:
            "Use this parameter in conjunction with --attach-acr to explicitly set the principal type in the ACR role assignment. This helps avoid RBAC-related errors by ensuring the correct principal type is applied. Valid values are 'User', 'Group' or 'ServicePrincipal'",
          args: { name: "assignee-principal-type" },
        },
        {
          name: "--attach-acr",
          description:
            "Grant the 'acrpull' role assignment to the ACR specified by name or resource ID",
          args: { name: "attach-acr" },
        },
        {
          name: "--auto-upgrade-channel",
          description: "Specify the upgrade channel for autoupgrade",
          args: {
            name: "auto-upgrade-channel",
            suggestions: ["node-image", "none", "patch", "rapid", "stable"],
          },
        },
        {
          name: "--azure-container-storage-nodepools",
          description:
            "Define the comma separated nodepool list to install azure container storage",
          args: { name: "azure-container-storage-nodepools" },
        },
        {
          name: "--azure-keyvault-kms-key-id",
          description: "Identifier of Azure Key Vault key",
          args: { name: "azure-keyvault-kms-key-id" },
        },
        {
          name: "--azure-keyvault-kms-key-vault-network-access",
          description: "Network Access of Azure Key Vault",
          args: {
            name: "azure-keyvault-kms-key-vault-network-access",
            suggestions: ["Private", "Public"],
          },
        },
        {
          name: "--azure-keyvault-kms-key-vault-resource-id",
          description: "Resource ID of Azure Key Vault",
          args: { name: "azure-keyvault-kms-key-vault-resource-id" },
        },
        {
          name: "--azure-monitor-workspace-resource-id",
          description: "Resource ID of the Azure Monitor Workspace",
          args: { name: "azure-monitor-workspace-resource-id" },
        },
        {
          name: "--bootstrap-artifact-source",
          description:
            "Configure artifact source when bootstraping the cluster",
          args: {
            name: "bootstrap-artifact-source",
            suggestions: ["Cache", "Direct"],
          },
        },
        {
          name: "--bootstrap-container-registry-resource-id",
          description:
            'Configure container registry resource ID. Must use "Cache" as bootstrap artifact source',
          args: { name: "bootstrap-container-registry-resource-id" },
        },
        {
          name: ["--custom-ca-trust-certificates", "--ca-certs"],
          description:
            "Path to a file containing up to 10 blank line separated certificates. Only valid for Linux nodes",
          args: { name: "custom-ca-trust-certificates" },
        },
        {
          name: ["--cluster-autoscaler-profile", "--ca-profile"],
          description:
            "Comma-separated list of key=value pairs for configuring cluster autoscaler. Pass an empty string to clear the profile",
          args: { name: "cluster-autoscaler-profile", isVariadic: true },
        },
        changeReference,
        {
          name: "--container-storage-version",
          description:
            "Set azure container storage version, the latest version will be installed by default",
          args: { name: "container-storage-version", suggestions: ["1", "2"] },
        },
        {
          name: "--data-collection-settings",
          description:
            "Path to JSON file containing data collection settings for Monitoring addon",
          args: { name: "data-collection-settings" },
        },
        {
          name: "--defender-config",
          description:
            "Path to JSON file containing Microsoft Defender profile configurations",
          args: { name: "defender-config" },
        },
        {
          name: "--detach-acr",
          description:
            "Disable the 'acrpull' role assignment to the ACR specified by name or resource ID",
          args: { name: "detach-acr" },
        },
        {
          name: "--disable-acns",
          description:
            "Disable all advanced networking functionalities on a cluster",
        },
        {
          name: "--disable-acns-observability",
          description:
            'Used to disable advanced networking observability features on a clusters when enabling advanced networking features with "--enable-acns"',
        },
        {
          name: "--disable-acns-security",
          description:
            'Used to disable advanced networking security features on a clusters when enabling advanced networking features with "--enable-acns"',
        },
        {
          name: "--disable-ahub",
          description:
            "Disable Azure Hybrid User Benefits (AHUB) feature for cluster",
        },
        {
          name: "--disable-ai-toolchain-operator",
          description: "Disable AI toolchain operator",
        },
        {
          name: ["--disable-app-routing-istio", "--disable-ari"],
          description:
            "Disable Gateway API based ingress on App Routing via Istio",
        },
        {
          name: "--disable-azure-container-storage",
          description:
            "Disable azure container storage or any one of the storage pool types. Can be used as a flag (defaults to True) or with a storagepool type value: azureDisk, ephemeralDisk, elasticSan, all (to disable all storage pools)",
          args: {
            name: "disable-azure-container-storage",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "--disable-azure-keyvault-kms",
          description: "Disable Azure KeyVault Key Management Service",
        },
        {
          name: "--disable-azure-monitor-app-monitoring",
          description:
            "Disable Azure Monitor Application Monitoring auto-instrumentation for a Kubernetes cluster",
        },
        {
          name: "--disable-azure-monitor-logs",
          description:
            "Disable Azure Monitor logs (Container Insights) for the cluster",
        },
        {
          name: "--disable-azure-monitor-metrics",
          description:
            "Disable Azure Monitor Metrics Profile. This will delete all DCRA's associated with the cluster, any linked DCRs with the data stream = prometheus-stream and the recording rule groups created by the addon for this AKS cluster",
        },
        {
          name: "--disable-azure-rbac",
          description:
            "Disable Azure RBAC to control authorization checks on cluster",
        },
        {
          name: "--disable-blob-driver",
          description: "Disable AzureBlob CSI Driver",
        },
        {
          name: ["--disable-cluster-autoscaler", "-d"],
          description:
            "Disable cluster autoscaler. For VirtualMachines pools, converts all autoscale profiles back to manual scale profiles",
        },
        {
          name: "--disable-container-network-logs",
          description:
            "Disable container network log collection functionalities on a cluster",
        },
        {
          name: ["--disable-control-plane-metrics", "--disable-cp-metrics"],
          description:
            "Disable collection of Azure Monitor managed Prometheus control plane metrics. Leaves Azure Monitor metrics enabled",
        },
        {
          name: "--disable-cost-analysis",
          description:
            "Disable exporting Kubernetes Namespace and Deployment details to the Cost Analysis views in the Azure portal",
        },
        { name: "--disable-defender", description: "Disable defender profile" },
        {
          name: "--disable-disk-driver",
          description: "Disable AzureDisk CSI Driver",
        },
        {
          name: "--disable-file-driver",
          description: "Disable AzureFile CSI Driver",
        },
        {
          name: "--disable-force-upgrade",
          description: "Disable forceUpgrade cluster upgrade settings override",
        },
        {
          name: "--disable-gateway-api",
          description: "Disable managed installation of Gateway API CRDs",
        },
        {
          name: "--disable-http-proxy",
          description: "Disable HTTP Proxy Configuration on the cluster",
        },
        {
          name: "--disable-image-cleaner",
          description: "Disable ImageCleaner Service",
        },
        {
          name: "--disable-keda",
          description: "Disable KEDA workload auto-scaler",
        },
        {
          name: "--disable-local-accounts",
          description:
            "If set to true, getting static credential will be disabled for this cluster",
        },
        {
          name: "--disable-opentelemetry-logs-traces",
          description:
            "Disable the OpenTelemetry (OTLP) logs and traces receiver",
        },
        {
          name: "--disable-opentelemetry-metrics",
          description: "Disable the OpenTelemetry (OTLP) metrics receiver",
        },
        {
          name: "--disable-private-cluster",
          description:
            "Disable private cluster for apiserver vnet integration cluster",
        },
        {
          name: "--disable-prometheus-metrics-scraping",
          description:
            "Disable Prometheus metrics scraping by the Azure Monitor agent. Requires Azure Monitor logs to be enabled",
        },
        {
          name: "--disable-public-fqdn",
          description: "Disable public fqdn feature for private cluster",
        },
        {
          name: "--disable-run-command",
          description: "Disable Run command feature for the cluster",
        },
        {
          name: "--disable-secret-rotation",
          description:
            "Disable secret rotation. Use with azure-keyvault-secrets-provider addon",
        },
        {
          name: "--disable-snapshot-controller",
          description: "Disable CSI Snapshot Controller",
        },
        {
          name: "--disable-static-egress-gateway",
          description: "Disable Static Egress Gateway addon to the cluster",
        },
        {
          name: "--disable-upstream-kubescheduler-user-configuration",
          description:
            "Disable user-defined scheduler configuration for kube-scheduler upstream on the cluster",
        },
        {
          name: "--disable-vpa",
          description: "Disable vertical pod autoscaler for cluster",
        },
        {
          name: "--disable-windows-gmsa",
          description: "Disable Windows gmsa on cluster",
        },
        {
          name: "--disable-workload-identity",
          description: "Disable workload identity addon",
        },
        {
          name: "--enable-aad",
          description: "Enable managed AAD feature for cluster",
        },
        {
          name: "--enable-acns",
          description:
            "Enable advanced network functionalities on a cluster. Enabling this will incur additional costs. For non-cilium clusters, acns security will be disabled by default until further notice",
        },
        {
          name: "--enable-ahub",
          description:
            "Enable Azure Hybrid User Benefits (AHUB) feature for cluster",
        },
        {
          name: "--enable-ai-toolchain-operator",
          description: "Enable AI toolchain operator to the cluster",
        },
        {
          name: "--enable-apiserver-vnet-integration",
          description:
            "Enable integration of user vnet with control plane apiserver pods",
        },
        {
          name: ["--enable-app-routing-istio", "--enable-ari"],
          description:
            "Enable Gateway API based ingress on App Routing via Istio without service mesh functionality",
        },
        {
          name: "--enable-azure-container-storage",
          description:
            "Enable azure container storage. Can be used as a flag (defaults to True) or with a storage pool type value: (azureDisk, ephemeralDisk, elasticSan)",
          args: {
            name: "enable-azure-container-storage",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "--enable-azure-keyvault-kms",
          description: "Enable Azure KeyVault Key Management Service",
        },
        {
          name: "--enable-azure-monitor-app-monitoring",
          description:
            "Enable Azure Monitor Application Monitoring auto-instrumentation for a Kubernetes cluster",
        },
        {
          name: "--enable-azure-monitor-logs",
          description:
            "Enable Azure Monitor logs (Container Insights) for the cluster using managed identity authentication",
        },
        {
          name: "--enable-azure-monitor-metrics",
          description:
            "Enable a kubernetes cluster with the Azure Monitor managed service for Prometheus integration",
        },
        {
          name: "--enable-azure-rbac",
          description:
            "Enable Azure RBAC to control authorization checks on cluster",
        },
        {
          name: "--enable-blob-driver",
          description: "Enable AzureBlob CSI Driver",
        },
        {
          name: ["--enable-cluster-autoscaler", "-e"],
          description:
            "Enable cluster autoscaler. For VirtualMachines pools, converts all manual scale profiles to autoscale profiles using the same min/max counts",
        },
        {
          name: "--enable-container-network-logs",
          description:
            "Enable container network log collection functionalities on a cluster. Automatically enables --enable-high-log-scale-mode",
        },
        {
          name: ["--enable-control-plane-metrics", "--enable-cp-metrics"],
          description:
            "Enable collection of Azure Monitor managed Prometheus control plane metrics for managed cluster components (controlplane-apiserver and controlplane-etcd targets by default). Requires Azure Monitor metrics to be enabled (already enabled or via --enable-azure-monitor-metrics)",
        },
        {
          name: "--enable-cost-analysis",
          description:
            "Enable exporting Kubernetes Namespace and Deployment details to the Cost Analysis views in the Azure portal. For more information see aka.ms/aks/docs/cost-analysis",
        },
        {
          name: "--enable-defender",
          description: "Enable Microsoft Defender security profile",
        },
        {
          name: "--enable-disk-driver",
          description: "Enable AzureDisk CSI Driver",
        },
        {
          name: "--enable-file-driver",
          description: "Enable AzureFile CSI Driver",
        },
        {
          name: "--enable-force-upgrade",
          description: "Enable forceUpgrade cluster upgrade settings override",
        },
        {
          name: "--enable-gateway-api",
          description:
            "Enable managed installation of Gateway API CRDs from the standard release channel",
        },
        {
          name: "--enable-high-log-scale-mode",
          description:
            "Enable High Log Scale Mode for Container Logs. Auto-enabled when --enable-container-network-logs is specified",
          args: {
            name: "enable-high-log-scale-mode",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-http-proxy",
          description: "Enable HTTP Proxy Configuration on the cluster",
        },
        {
          name: "--enable-image-cleaner",
          description: "Enable ImageCleaner Service",
        },
        {
          name: "--enable-keda",
          description: "Enable KEDA workload auto-scaler",
        },
        {
          name: "--enable-local-accounts",
          description:
            "If set to true, will enable getting static credential for this cluster",
        },
        {
          name: "--enable-managed-identity",
          description:
            "Update current cluster to use managed identity to manage cluster resource group",
        },
        {
          name: "--enable-msi-auth-for-monitoring",
          description:
            "Option '--enable-msi-auth-for-monitoring' has been deprecated and will be removed in a future release. Use '--enable-azure-monitor-logs' instead. Enable Managed Identity Auth for Monitoring addon",
          args: {
            name: "enable-msi-auth-for-monitoring",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        { name: "--enable-oidc-issuer", description: "Enable OIDC issuer" },
        {
          name: "--enable-opentelemetry-logs-traces",
          description:
            "Enable the OpenTelemetry (OTLP) logs and traces receiver. Requires Azure Monitor logs to be enabled",
        },
        {
          name: "--enable-opentelemetry-metrics",
          description:
            "Enable the OpenTelemetry (OTLP) metrics receiver. Requires Azure Monitor metrics to be enabled",
        },
        {
          name: "--enable-private-cluster",
          description:
            "Enable private cluster for apiserver vnet integration cluster",
        },
        {
          name: "--enable-prometheus-metrics-scraping",
          description:
            "Enable Prometheus metrics scraping by the Azure Monitor agent. Requires Azure Monitor logs to be enabled",
        },
        {
          name: "--enable-public-fqdn",
          description: "Enable public fqdn feature for private cluster",
        },
        {
          name: "--enable-run-command",
          description: "Enable Run command feature for the cluster",
        },
        {
          name: "--enable-secret-rotation",
          description:
            "Enable secret rotation. Use with azure-keyvault-secrets-provider addon",
        },
        {
          name: "--enable-snapshot-controller",
          description: "Enable Snapshot Controller",
        },
        {
          name: "--enable-static-egress-gateway",
          description: "Enable Static Egress Gateway addon to the cluster",
        },
        {
          name: "--enable-syslog",
          description: "Enable syslog data collection for Monitoring addon",
          args: {
            name: "enable-syslog",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-upstream-kubescheduler-user-configuration",
          description:
            "Enable user-defined scheduler configuration for kube-scheduler upstream on the cluster",
        },
        {
          name: "--enable-vpa",
          description: "Enable vertical pod autoscaler for cluster",
        },
        {
          name: "--enable-windows-gmsa",
          description: "Enable Windows gmsa on cluster",
        },
        {
          name: "--enable-windows-recording-rules",
          description:
            "Enable Windows Recording Rules when enabling the Azure Monitor Metrics addon",
        },
        {
          name: "--enable-workload-identity",
          description: "Enable workload identity addon",
        },
        {
          name: "--ephemeral-disk-nvme-perf-tier",
          description:
            "Set ephemeral disk volume type for azure container storage",
          args: {
            name: "ephemeral-disk-nvme-perf-tier",
            suggestions: ["Basic", "Premium", "Standard"],
          },
        },
        {
          name: "--ephemeral-disk-volume-type",
          description:
            "Set ephemeral disk volume type for azure container storage",
          args: {
            name: "ephemeral-disk-volume-type",
            suggestions: [
              "EphemeralVolumeOnly",
              "PersistentVolumeWithAnnotation",
            ],
          },
        },
        {
          name: "--gmsa-dns-server",
          description: "Specify DNS server for Windows gmsa on cluster",
          args: { name: "gmsa-dns-server" },
        },
        {
          name: "--gmsa-root-domain-name",
          description: "Specify root domain name for Windows gmsa on cluster",
          args: { name: "gmsa-root-domain-name" },
        },
        {
          name: "--grafana-resource-id",
          description: "Resource ID of the Azure Managed Grafana Workspace",
          args: { name: "grafana-resource-id" },
        },
        {
          name: "--http-proxy-config",
          description: "HTTP Proxy configuration for this cluster",
          args: { name: "http-proxy-config" },
        },
        {
          name: "--if-match",
          description:
            "The value provided will be compared to the ETag of the managed cluster, if it matches the operation will proceed. If it does not match, the request will be rejected to prevent accidental overwrites. This must not be specified when creating a new cluster",
          args: { name: "if-match" },
        },
        {
          name: "--if-none-match",
          description:
            "Set to '*' to allow a new cluster to be created, but to prevent updating an existing cluster. Other values will be ignored",
          args: { name: "if-none-match" },
        },
        {
          name: "--image-cleaner-interval-hours",
          description: "ImageCleaner scanning interval",
          args: { name: "image-cleaner-interval-hours" },
        },
        {
          name: "--ip-families",
          description:
            "A comma-separated list of IP versions to use for cluster networking",
          args: { name: "ip-families" },
        },
        {
          name: "--k8s-support-plan",
          description:
            'Choose from "KubernetesOfficial" or "AKSLongTermSupport", with "AKSLongTermSupport" you get 1 extra year of CVE patchs',
          args: {
            name: "k8s-support-plan",
            suggestions: ["AKSLongTermSupport", "KubernetesOfficial"],
          },
        },
        {
          name: "--kms-infrastructure-encryption",
          description:
            "Enable encryption at rest of Kubernetes resource objects using service-managed keys",
          args: {
            name: "kms-infrastructure-encryption",
            suggestions: ["Enabled"],
          },
        },
        {
          name: "--ksm-metric-annotations-allow-list",
          description:
            "Comma-separated list of additional Kubernetes label keys that will be used in the resource' labels metric. By default the metric contains only name and namespace labels. To include additional labels provide a list of resource names in their plural form and Kubernetes label keys you would like to allow for them (e.g.'=namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...)'. A single '*' can be provided per resource instead to allow any labels, but that has severe performance implications (e.g. '=pods=[*]')",
          args: { name: "ksm-metric-annotations-allow-list" },
        },
        {
          name: "--ksm-metric-labels-allow-list",
          description:
            "Comma-separated list of additional Kubernetes label keys that will be used in the resource' labels metric. By default the metric contains only name and namespace labels. To include additional labels provide a list of resource names in their plural form and Kubernetes label keys you would like to allow for them (e.g. '=namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...)'. A single '*' can be provided per resource instead to allow any labels, but that has severe performance implications (e.g. '=pods=[*]')",
          args: { name: "ksm-metric-labels-allow-list" },
        },
        {
          name: "--load-balancer-backend-pool-type",
          description: "Load balancer backend pool type",
          args: {
            name: "load-balancer-backend-pool-type",
            suggestions: ["nodeIP", "nodeIPConfiguration"],
          },
        },
        {
          name: "--load-balancer-idle-timeout",
          description: "Load balancer idle timeout in minutes",
          args: { name: "load-balancer-idle-timeout" },
        },
        {
          name: "--load-balancer-managed-outbound-ip-count",
          description: "Load balancer managed outbound IP count",
          args: { name: "load-balancer-managed-outbound-ip-count" },
        },
        {
          name: "--load-balancer-managed-outbound-ipv6-count",
          description: "Load balancer managed outbound IPv6 IP count",
          args: { name: "load-balancer-managed-outbound-ipv6-count" },
        },
        {
          name: "--load-balancer-outbound-ip-prefixes",
          description: "Load balancer outbound IP prefix resource IDs",
          args: { name: "load-balancer-outbound-ip-prefixes" },
        },
        {
          name: "--load-balancer-outbound-ips",
          description: "Load balancer outbound IP resource IDs",
          args: { name: "load-balancer-outbound-ips" },
        },
        {
          name: "--load-balancer-outbound-ports",
          description: "Load balancer outbound allocated ports",
          args: { name: "load-balancer-outbound-ports" },
        },
        {
          name: "--load-balancer-sku",
          description:
            "Azure Load Balancer SKU selection for your cluster. only standard is accepted",
          args: { name: "load-balancer-sku", suggestions: ["standard"] },
        },
        {
          name: "--max-count",
          description:
            'Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 1000]',
          args: { name: "max-count" },
        },
        {
          name: "--migrate-vmas-to-vms",
          description: "Migrate cluster with VMAS node pool to VMS node pool",
        },
        {
          name: "--min-count",
          description:
            'Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [1, 1000]',
          args: { name: "min-count" },
        },
        {
          name: "--nat-gateway-idle-timeout",
          description: "NAT gateway idle timeout in minutes",
          args: { name: "nat-gateway-idle-timeout" },
        },
        {
          name: "--nat-gateway-managed-outbound-ip-count",
          description: "NAT gateway managed outbound IP count",
          args: { name: "nat-gateway-managed-outbound-ip-count" },
        },
        {
          name: [
            "--nat-gateway-managed-outbound-ipv6-count",
            "--nat-gw-ipv6-count",
          ],
          description:
            "NAT gateway managed outbound IPv6 count. Only valid with --outbound-type managedNATGateway and --outbound-type-sku StandardV2",
          args: { name: "nat-gateway-managed-outbound-ipv6-count" },
        },
        {
          name: ["--nat-gateway-outbound-ip-prefixes", "--nat-gw-prefixes"],
          description:
            "Comma-separated public IP prefix resource IDs for the cluster NAT gateway. Only valid with --outbound-type-sku StandardV2",
          args: { name: "nat-gateway-outbound-ip-prefixes" },
        },
        {
          name: ["--nat-gateway-outbound-ips", "--nat-gw-ips"],
          description:
            "Comma-separated public IP resource IDs for the cluster NAT gateway. Only valid with --outbound-type-sku StandardV2",
          args: { name: "nat-gateway-outbound-ips" },
        },
        {
          name: "--network-dataplane",
          description: "The network dataplane to use",
          args: { name: "network-dataplane", suggestions: ["azure", "cilium"] },
        },
        {
          name: "--network-plugin",
          description: "The Kubernetes network plugin to use",
          args: {
            name: "network-plugin",
            suggestions: ["azure", "kubenet", "none"],
          },
        },
        {
          name: "--network-plugin-mode",
          description:
            "Update the mode of a network plugin to migrate to a different pod networking setup",
          args: { name: "network-plugin-mode" },
        },
        {
          name: "--network-policy",
          description: "Update Network Policy Engine",
          args: {
            name: "network-policy",
            suggestions: ["azure", "calico", "cilium", "none"],
          },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--node-os-upgrade-channel",
          description:
            "Manner in which the OS on your nodes is updated. It could be NodeImage, None, SecurityPatch or Unmanaged",
          args: { name: "node-os-upgrade-channel" },
        },
        {
          name: "--node-provisioning-default-pools",
          description:
            'The set of default Karpenter NodePools configured for node provisioning. Valid values are "Auto" and "None"',
          args: {
            name: "node-provisioning-default-pools",
            suggestions: ["Auto", "None"],
          },
        },
        {
          name: "--node-provisioning-mode",
          description:
            'Set the node provisioning mode of the cluster. Valid values are "Auto" and "Manual". For more information on "Auto" mode see aka.ms/aks/nap',
          args: {
            name: "node-provisioning-mode",
            suggestions: ["Auto", "Manual"],
          },
        },
        {
          name: "--nodepool-labels",
          description:
            "The node labels for all node pool. See https://aka.ms/node-labels for syntax of labels",
          args: { name: "nodepool-labels", isOptional: true, isVariadic: true },
        },
        {
          name: "--nodepool-taints",
          description: "The node taints for all node pool",
          args: { name: "nodepool-taints" },
        },
        {
          name: "--nrg-lockdown-restriction-level",
          description: "Restriction level on the managed node resource group",
          args: {
            name: "nrg-lockdown-restriction-level",
            suggestions: ["ReadOnly", "Unrestricted"],
          },
        },
        {
          name: "--opentelemetry-logs-traces-port-grpc",
          description:
            "GRPC port for the OpenTelemetry logs and traces receiver",
          args: { name: "opentelemetry-logs-traces-port-grpc" },
        },
        {
          name: "--opentelemetry-logs-traces-port-http",
          description:
            "HTTP/protobuf port for the OpenTelemetry logs and traces receiver",
          args: { name: "opentelemetry-logs-traces-port-http" },
        },
        {
          name: "--opentelemetry-metrics-port-grpc",
          description: "GRPC port for the OpenTelemetry metrics receiver",
          args: { name: "opentelemetry-metrics-port-grpc" },
        },
        {
          name: "--opentelemetry-metrics-port-http",
          description:
            "HTTP/protobuf port for the OpenTelemetry metrics receiver",
          args: { name: "opentelemetry-metrics-port-http" },
        },
        {
          name: "--outbound-type",
          description: "How outbound traffic will be configured for a cluster",
          args: {
            name: "outbound-type",
            suggestions: [
              "loadBalancer",
              "managedNATGateway",
              "none",
              "userAssignedNATGateway",
              "userDefinedRouting",
            ],
          },
        },
        {
          name: "--outbound-type-sku",
          description:
            "SKU of the managed NAT Gateway (Standard or StandardV2)",
          args: {
            name: "outbound-type-sku",
            suggestions: ["Standard", "StandardV2"],
          },
        },
        {
          name: "--pod-cidr",
          description:
            "Update the pod CIDR for a cluster. Used when updating a cluster from Azure CNI to Azure CNI Overlay",
          args: { name: "pod-cidr" },
        },
        {
          name: "--private-dns-zone",
          description: "The private dns zone mode for private cluster",
          args: { name: "private-dns-zone" },
        },
        {
          name: "--rotation-poll-interval",
          description:
            "Set interval of rotation poll. Use with azure-keyvault-secrets-provider addon",
          args: { name: "rotation-poll-interval" },
        },
        {
          name: "--sku",
          description:
            "Specify SKU name for managed clusters. Use '--sku base' enables a base managed cluster. Use '--sku automatic' enables an automatic managed cluster",
          args: { name: "sku", suggestions: ["automatic", "base"] },
        },
        {
          name: "--storage-pool-name",
          description: "Set storage pool name for azure container storage",
          args: { name: "storage-pool-name" },
        },
        {
          name: "--storage-pool-option",
          description:
            "Set ephemeral disk storage pool option for azure container storage",
          args: {
            name: "storage-pool-option",
            suggestions: ["NVMe", "Temp", "all"],
          },
        },
        {
          name: "--storage-pool-size",
          description: "Set storage pool size for azure container storage",
          args: { name: "storage-pool-size" },
        },
        {
          name: "--storage-pool-sku",
          description:
            "Set azure disk type storage pool sku for azure container storage",
          args: {
            name: "storage-pool-sku",
            suggestions: [
              "PremiumV2_LRS",
              "Premium_LRS",
              "Premium_ZRS",
              "StandardSSD_LRS",
              "StandardSSD_ZRS",
              "Standard_LRS",
              "UltraSSD_LRS",
            ],
          },
        },
        {
          name: "--syslog-port",
          description:
            "TCP port that the Azure Monitor agent listens on for syslog data. Requires Azure Monitor logs to be enabled",
          args: { name: "syslog-port" },
        },
        {
          name: "--tags",
          description:
            "The tags of the managed cluster. The managed cluster instance and all resources managed by the cloud provider will be tagged",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
        {
          name: "--tier",
          description:
            "Specify SKU tier for managed clusters. '--tier standard' enables a standard managed cluster service with a financially backed SLA. '--tier free' changes a standard managed cluster to a free one",
          args: { name: "tier", suggestions: ["free", "premium", "standard"] },
        },
        {
          name: ["--update-cluster-autoscaler", "-u"],
          description:
            "Update min-count or max-count for cluster autoscaler. Not supported for VirtualMachines pools; use 'az aks nodepool auto-scale update' instead",
        },
        {
          name: "--upgrade-override-until",
          description:
            "Until when the cluster upgradeSettings overrides are effective. It needs to be in a valid date-time format that's within the next 30 days. For example, 2023-04-01T13:00:00Z. Note that if --force-upgrade is set to true and --upgrade-override-until is not set, by default it will be set to 3 days from now",
          args: { name: "upgrade-override-until" },
        },
        {
          name: "--windows-admin-password",
          description: "User account password to use on windows node VMs",
          args: { name: "windows-admin-password" },
        },
        {
          name: "--workspace-resource-id",
          description:
            "The resource ID of an existing Log Analytics Workspace to use for storing monitoring data. If not specified, uses the default Log Analytics Workspace if it exists, otherwise creates one",
          args: { name: "workspace-resource-id" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "update-credentials",
      description:
        "Update credentials for a managed Kubernetes cluster, like service principal",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--client-secret",
          description:
            "Secret associated with the service principal. This argument is required if --service-principal is specified",
          args: { name: "client-secret" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--reset-service-principal",
          description: "Reset service principal for a managed cluster",
        },
        {
          name: "--service-principal",
          description:
            "Service principal used for authentication to Azure APIs. This argument is required if --reset-service-principal is specified",
          args: { name: "service-principal" },
        },
      ],
    },
    {
      name: "upgrade",
      description: "Upgrade a managed Kubernetes cluster to a newer version",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: "--control-plane-only",
          description:
            "Upgrade the cluster control plane only. If not specified, both control plane AND all node pools will be upgraded",
        },
        {
          name: "--disable-force-upgrade",
          description: "Disable forceUpgrade cluster upgrade settings override",
        },
        {
          name: "--enable-force-upgrade",
          description: "Enable forceUpgrade cluster upgrade settings override",
        },
        {
          name: "--if-match",
          description:
            "The value provided will be compared to the ETag of the managed cluster, if it matches the operation will proceed. If it does not match, the request will be rejected to prevent accidental overwrites. This must not be specified when creating a new cluster",
          args: { name: "if-match" },
        },
        {
          name: "--if-none-match",
          description:
            "Set to '*' to allow a new cluster to be created, but to prevent updating an existing cluster. Other values will be ignored",
          args: { name: "if-none-match" },
        },
        {
          name: "--k8s-support-plan",
          description:
            'Choose from "KubernetesOfficial" or "AKSLongTermSupport", with "AKSLongTermSupport" you get 1 extra year of CVE patchs',
          args: {
            name: "k8s-support-plan",
            suggestions: ["AKSLongTermSupport", "KubernetesOfficial"],
          },
        },
        {
          name: ["--kubernetes-version", "-k"],
          description:
            'Version of Kubernetes to upgrade the cluster to, such as "1.16.9"',
          args: { name: "kubernetes-version" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--node-image-only",
          description: "Only upgrade node image for agent pools",
        },
        {
          name: "--tier",
          description:
            "Specify SKU tier for managed clusters. '--tier standard' enables a standard managed cluster service with a financially backed SLA. '--tier free' does not have a financially backed SLA. '--tier premium' is required for '--k8s-support-plan AKSLongTermSupport'",
          args: { name: "tier", suggestions: ["free", "premium", "standard"] },
        },
        {
          name: "--upgrade-override-until",
          description:
            "Until when the cluster upgradeSettings overrides are effective",
          args: { name: "upgrade-override-until" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "use-dev-spaces",
      description:
        "Use Azure Dev Spaces with a managed Kubernetes cluster. This command has been deprecated and will be removed in a future release",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
          name: ["--endpoint", "-e"],
          description:
            "The endpoint type to be used for an Azure Dev Spaces controller. See https://aka.ms/azds-networking for more information",
          args: {
            name: "endpoint",
            suggestions: ["None", "Private", "Public"],
          },
        },
        {
          name: ["--space", "-s"],
          description:
            "Name of the new or existing dev space to select. Defaults to an interactive selection experience",
          args: { name: "space" },
        },
        {
          name: "--update",
          description:
            "Update to the latest Azure Dev Spaces client components",
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation. Requires --space",
        },
      ],
    },
    {
      name: "wait",
      description:
        "Wait for a managed Kubernetes cluster to reach a desired state",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the managed cluster",
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
      name: "approuting",
      description: "Commands to manage App Routing addon",
      subcommands: [
        {
          name: "disable",
          description: "Disable App Routing addon",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable App Routing",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: "--attach-kv",
              description:
                "Attach a keyvault id to access secrets and certificates",
              args: { name: "attach-kv" },
            },
            changeReference,
            {
              name: "--enable-kv",
              description: "Enable the keyvault secrets provider",
            },
            {
              name: "--nginx",
              description: "Configure default NginxIngressController resource",
              args: {
                name: "nginx",
                suggestions: [
                  "AnnotationControlled",
                  "External",
                  "Internal",
                  "None",
                ],
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update App Routing addon",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: "--attach-kv",
              description:
                "Attach a keyvault id to access secrets and certificates",
              args: { name: "attach-kv" },
            },
            changeReference,
            {
              name: "--enable-kv",
              description: "Enable the keyvault secrets provider addon",
            },
            {
              name: "--nginx",
              description: "Configure default NginxIngressController resource",
              args: {
                name: "nginx",
                suggestions: [
                  "AnnotationControlled",
                  "External",
                  "Internal",
                  "None",
                ],
              },
            },
          ],
        },
        {
          name: "gateway",
          description:
            "Commands to manage App Routing Gateway API implementations",
          subcommands: [
            {
              name: "istio",
              description:
                "Commands to manage the Istio Gateway API implementation for App Routing",
              subcommands: [
                {
                  name: "disable",
                  description:
                    "Disable Gateway API based ingress on App Routing via Istio",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the managed cluster",
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
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "enable",
                  description:
                    "Enable Gateway API based ingress on App Routing via Istio without service mesh functionality",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the managed cluster",
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
              ],
            },
          ],
        },
        {
          name: "zone",
          description: "Commands to manage App Routing DNS Zones",
          subcommands: [
            {
              name: "add",
              description: "Add DNS Zone(s) to App Routing",
              options: [
                {
                  name: "--ids",
                  description:
                    "Comma-separated list of DNS zone resource IDs to add to App Routing",
                  args: { name: "ids" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the managed cluster",
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
                  name: "--attach-zones",
                  description:
                    "Grant DNS zone Contributor permissions on all zone IDs specified in --ids",
                },
                changeReference,
              ],
            },
            {
              name: "delete",
              description: "Delete DNS Zone(s) from App Routing",
              options: [
                {
                  name: "--ids",
                  description:
                    "Comma-separated list of DNS zone resource IDs to delete from App Routing",
                  args: { name: "ids" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the managed cluster",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List DNS Zone IDs in App Routing",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the managed cluster",
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
              description: "Replace DNS Zone(s) in App Routing",
              options: [
                {
                  name: "--ids",
                  description:
                    "Comma-separated list of DNS zone resource IDs to replace in App Routing",
                  args: { name: "ids" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the managed cluster",
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
                  name: "--attach-zones",
                  description:
                    "Grant DNS zone Contributor permissions on all zone IDs specified in --ids",
                },
                changeReference,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "command",
      description:
        "See detail usage in 'az aks command invoke', 'az aks command result'",
      subcommands: [
        {
          name: "invoke",
          description:
            "Run a shell command (with kubectl, helm) on your aks cluster, support attaching files as well",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: ["--command", "-c"],
              description: "Command or shell script you want to run",
              args: { name: "command" },
            },
            {
              name: ["--file", "-f"],
              description:
                "Files to be used by the command, use '.' to attach the current folder",
              args: { name: "file" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "result",
          description:
            "Fetch result from previously triggered 'aks command invoke'",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: ["--command-id", "-i"],
              description: "CommandId returned from 'aks command invoke'",
              args: { name: "command-id" },
            },
          ],
        },
      ],
    },
    {
      name: "connection",
      description: "Commands to manage aks connections",
      subcommands: [
        {
          name: "delete",
          description: "Delete a aks connection",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--connection",
              description: "Name of the aks connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the managed cluster. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List connections of a aks",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the managed cluster. Required if '--source-id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--source-id",
              description:
                "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
              args: { name: "source-id" },
            },
          ],
        },
        {
          name: "list-configuration",
          description: "List source configurations of a aks connection",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--connection",
              description: "Name of the aks connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the managed cluster. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list-support-types",
          description:
            "List client types and auth types supported by aks connections",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--target-type", "-t"],
              description: "The target resource type",
              args: {
                name: "target-type",
                suggestions: [
                  "app-insights",
                  "appconfig",
                  "cognitiveservices",
                  "confluent-cloud",
                  "cosmos-cassandra",
                  "cosmos-gremlin",
                  "cosmos-mongo",
                  "cosmos-sql",
                  "cosmos-table",
                  "eventhub",
                  "keyvault",
                  "mongodb-atlas",
                  "mysql",
                  "mysql-flexible",
                  "neon-postgres",
                  "postgres",
                  "postgres-flexible",
                  "redis",
                  "redis-enterprise",
                  "servicebus",
                  "signalr",
                  "sql",
                  "storage-blob",
                  "storage-file",
                  "storage-queue",
                  "storage-table",
                  "webpubsub",
                ],
              },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a aks connection",
          options: [
            {
              name: "--connection",
              description: "Name of the aks connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the managed cluster. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate a aks connection",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--connection",
              description: "Name of the aks connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the managed cluster. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the connection is met",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--connection",
              description: "Name of the aks connection",
              args: { name: "connection" },
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
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the managed cluster. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
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
          name: "create",
          description:
            "Create a connection between a aks and a target resource",
          subcommands: [
            {
              name: "app-insights",
              description: "Create a aks connection to app-insights",
              options: [
                acquirePolicyToken,
                {
                  name: "--app-insights",
                  description:
                    "Name of the app insights. Required if '--target-id' is not specified",
                  args: { name: "app-insights" },
                },
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--app-insights'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the app insights. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
              ],
            },
            {
              name: "appconfig",
              description: "Create a aks connection to appconfig",
              options: [
                acquirePolicyToken,
                {
                  name: "--app-config",
                  description:
                    "Name of the app configuration. Required if '--target-id' is not specified",
                  args: { name: "app-config" },
                },
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--app-config'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the app configuration. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: ["--use-appconfig-extension", "-e"],
                  description:
                    "Install Azure App Configuration extension in the Kubernetes cluster",
                  args: {
                    name: "use-appconfig-extension",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "cognitiveservices",
              description: "Create a aks connection to cognitiveservices",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cognitive services account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cognitive services. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "confluent-cloud",
              description: "Create a aks connection to confluent-cloud",
              options: [
                {
                  name: "--bootstrap-server",
                  description: "Kafka bootstrap server url",
                  args: { name: "bootstrap-server" },
                  isRequired: true,
                },
                {
                  name: "--kafka-key",
                  description: "Kafka API-Key (key)",
                  args: { name: "kafka-key" },
                  isRequired: true,
                },
                {
                  name: "--kafka-secret",
                  description: "Kafka API-Key (secret)",
                  args: { name: "kafka-secret" },
                  isRequired: true,
                },
                {
                  name: "--schema-key",
                  description: "Schema registry API-Key (key)",
                  args: { name: "schema-key" },
                  isRequired: true,
                },
                {
                  name: "--schema-registry",
                  description: "Schema registry url",
                  args: { name: "schema-registry" },
                  isRequired: true,
                },
                {
                  name: "--schema-secret",
                  description: "Schema registry API-Key (secret)",
                  args: { name: "schema-secret" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
              ],
            },
            {
              name: "cosmos-cassandra",
              description: "Create a aks connection to cosmos-cassandra",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--key-space",
                  description:
                    "Name of the keyspace. Required if '--target-id' is not specified",
                  args: { name: "key-space" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--key-space'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "cosmos-gremlin",
              description: "Create a aks connection to cosmos-gremlin",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--graph",
                  description:
                    "Name of the graph. Required if '--target-id' is not specified",
                  args: { name: "graph" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--database', '--graph'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "cosmos-mongo",
              description: "Create a aks connection to cosmos-mongo",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "cosmos-sql",
              description: "Create a aks connection to cosmos-sql",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "cosmos-table",
              description: "Create a aks connection to cosmos-table",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--table",
                  description:
                    "Name of the table. Required if '--target-id' is not specified",
                  args: { name: "table" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--table'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "eventhub",
              description: "Create a aks connection to eventhub",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "kafka-springBoot",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--namespace",
                  description:
                    "Name of the eventhub namespace. Required if '--target-id' is not specified",
                  args: { name: "namespace" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--namespace'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the eventhub. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "keyvault",
              description: "Create a aks connection to keyvault",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new keyvault when creating the aks connection",
                  args: {
                    name: "new",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--vault'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the keyvault. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault",
                  description:
                    "Name of the keyvault. Required if '--target-id' is not specified",
                  args: { name: "vault" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "mongodb-atlas",
              description: "Create a aks connection to mongodb-atlas",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The connection string for secret auth",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the MongoDB Atlas server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the MongoDB Atlas. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
              ],
            },
            {
              name: "mysql",
              description:
                "Create a aks connection to mysql. This command has been deprecated and will be removed in a future release",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the mysql database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the mysql server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the mysql server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
              ],
            },
            {
              name: "mysql-flexible",
              description: "Create a aks connection to mysql-flexible",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the mysql flexible database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the mysql flexible server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the mysql flexible server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
              ],
            },
            {
              name: "neon-postgres",
              description: "Create a aks connection to neon-postgres",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the sql database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the sql server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
              ],
            },
            {
              name: "postgres",
              description:
                "Create a aks connection to postgres. This command has been deprecated and will be removed in a future release",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of postgres database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new postgres when creating the aks connection",
                  args: {
                    name: "new",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of postgres server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the postgres service. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
              ],
            },
            {
              name: "postgres-flexible",
              description: "Create a aks connection to postgres-flexible",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of postgres flexible database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of postgres flexible server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the flexible postgres service. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
              ],
            },
            {
              name: "redis",
              description: "Create a aks connection to redis",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the redis database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the redis server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the redis server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "redis-enterprise",
              description: "Create a aks connection to redis-enterprise",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the redis enterprise database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the redis enterprise server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the redis server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
              ],
            },
            {
              name: "servicebus",
              description: "Create a aks connection to servicebus",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--namespace",
                  description:
                    "Name of the servicebus namespace. Required if '--target-id' is not specified",
                  args: { name: "namespace" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--namespace'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the servicebus. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "signalr",
              description: "Create a aks connection to signalr",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "dotnet-internal", "none"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--signalr",
                  description:
                    "Name of the signalr service. Required if '--target-id' is not specified",
                  args: { name: "signalr" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--signalr'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the signalr. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "sql",
              description: "Create a aks connection to sql",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the sql database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the sql server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the sql server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
              ],
            },
            {
              name: "storage-blob",
              description: "Create a aks connection to storage-blob",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new storage-blob when creating the aks connection",
                  args: {
                    name: "new",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "storage-file",
              description: "Create a aks connection to storage-file",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
              ],
            },
            {
              name: "storage-queue",
              description: "Create a aks connection to storage-queue",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "storage-table",
              description: "Create a aks connection to storage-table",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "webpubsub",
              description: "Create a aks connection to webpubsub",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--webpubsub'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the webpubsub. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--webpubsub",
                  description:
                    "Name of the webpubsub service. Required if '--target-id' is not specified",
                  args: { name: "webpubsub" },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update a aks connection",
          subcommands: [
            {
              name: "app-insights",
              description: "Update a aks to app-insights connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
              ],
            },
            {
              name: "appconfig",
              description: "Update a aks to appconfig connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "cognitiveservices",
              description: "Update a aks to cognitiveservices connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "confluent-cloud",
              description: "Update a aks to confluent-cloud connection",
              options: [
                {
                  name: "--connection",
                  description: "Name of the connection",
                  args: { name: "connection" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                {
                  name: "--bootstrap-server",
                  description: "Kafka bootstrap server url",
                  args: { name: "bootstrap-server" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kafka-key",
                  description: "Kafka API-Key (key)",
                  args: { name: "kafka-key" },
                },
                {
                  name: "--kafka-secret",
                  description: "Kafka API-Key (secret)",
                  args: { name: "kafka-secret" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--schema-key",
                  description: "Schema registry API-Key (key)",
                  args: { name: "schema-key" },
                },
                {
                  name: "--schema-registry",
                  description: "Schema registry url",
                  args: { name: "schema-registry" },
                },
                {
                  name: "--schema-secret",
                  description: "Schema registry API-Key (secret)",
                  args: { name: "schema-secret" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a aks. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
              ],
            },
            {
              name: "cosmos-cassandra",
              description: "Update a aks to cosmos-cassandra connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "cosmos-gremlin",
              description: "Update a aks to cosmos-gremlin connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "cosmos-mongo",
              description: "Update a aks to cosmos-mongo connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "cosmos-sql",
              description: "Update a aks to cosmos-sql connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "cosmos-table",
              description: "Update a aks to cosmos-table connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "eventhub",
              description: "Update a aks to eventhub connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "kafka-springBoot",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "keyvault",
              description: "Update a aks to keyvault connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "mongodb-atlas",
              description: "Update a aks to mongodb-atlas connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The connection string for secret auth",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
              ],
            },
            {
              name: "mysql",
              description:
                "Update a aks to mysql connection. This command has been deprecated and will be removed in a future release",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "mysql-flexible",
              description: "Update a aks to mysql-flexible connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
              ],
            },
            {
              name: "neon-postgres",
              description: "Update a aks to neon-postgres connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
              ],
            },
            {
              name: "postgres",
              description:
                "Update a aks to postgres connection. This command has been deprecated and will be removed in a future release",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "postgres-flexible",
              description: "Update a aks to postgres-flexible connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
              ],
            },
            {
              name: "redis",
              description: "Update a aks to redis connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "redis-enterprise",
              description: "Update a aks to redis-enterprise connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
              ],
            },
            {
              name: "servicebus",
              description: "Update a aks to servicebus connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "signalr",
              description: "Update a aks to signalr connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "dotnet-internal", "none"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "sql",
              description: "Update a aks to sql connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "storage-blob",
              description: "Update a aks to storage-blob connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "storage-file",
              description: "Update a aks to storage-file connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "storage-queue",
              description: "Update a aks to storage-queue connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "storage-table",
              description: "Update a aks to storage-table connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "webpubsub",
              description: "Update a aks to webpubsub connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the aks",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the aks connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--enable-csi",
                  description:
                    "Use keyvault as a secrets store via a CSI volume. If specified, AuthType Arguments are not needed",
                  args: {
                    name: "enable-csi",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: "--kube-namespace",
                  description:
                    "The kubernetes namespace where the connection information will be saved into (as kubernetes secret)",
                  args: { name: "kube-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the managed cluster. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--workload-identity",
                  description:
                    "The user-assigned managed identity used to create workload identity federation",
                  args: {
                    name: "workload-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "identity-binding",
      description:
        "Commands to manage identity bindings in Azure Kubernetes Service",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new identity binding in a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the managed Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--managed-identity-resource-id",
              description: "The resource ID of the managed identity to use",
              args: { name: "managed-identity-resource-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the identity binding to create",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a specific identity binding in a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the managed Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the identity binding to delete",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
            "List all identity bindings under a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the managed Kubernetes cluster",
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
          ],
        },
        {
          name: "show",
          description:
            "Show details of a specific identity binding in a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the managed Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the identity binding to show",
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
      ],
    },
    {
      name: "machine",
      description:
        "Get information about machines in a nodepool of a managed clusters",
      subcommands: [
        {
          name: "list",
          description:
            "Get information about IP Addresses, Hostname for all machines in an agentpool",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the managed cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--nodepool-name",
              description: "Name of the agentpool of a managed cluster",
              args: { name: "nodepool-name" },
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
          name: "show",
          description:
            "Show IP Addresses, Hostname for a specific machine in an agentpool for a managedcluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the managed cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--machine-name",
              description:
                "Name of the machine in the agentpool of a managed cluster",
              args: { name: "machine-name" },
              isRequired: true,
            },
            {
              name: "--nodepool-name",
              description: "Name of the agentpool of a managed cluster",
              args: { name: "nodepool-name" },
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
      ],
    },
    {
      name: "maintenanceconfiguration",
      description:
        "Commands to manage maintenance configurations in managed Kubernetes cluster",
      subcommands: [
        {
          name: "add",
          description:
            "Add a maintenance configuration in managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The config name",
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
              name: "--config-file",
              description: "The maintenance configuration json file",
              args: { name: "config-file" },
            },
            {
              name: "--day-of-month",
              description:
                "Specify on which day of the month the maintenance occurs. E.g. 1 indicates the 1st of the month. Applicable to absolute monthly schedule type only. Not applicable to default maintenance configuration",
              args: { name: "day-of-month" },
            },
            {
              name: "--day-of-week",
              description:
                'Specify on which day of the week the maintenance occurs. E.g. "Monday". Applicable to weekly and relative monthly schedule types',
              args: { name: "day-of-week" },
            },
            {
              name: "--duration",
              description:
                "The length of maintenance window range from 4 to 24 hours",
              args: { name: "duration" },
            },
            {
              name: "--interval-days",
              description:
                "The number of days between each set of occurrences for daily schedule type. Not applicable to default maintenance configuration",
              args: { name: "interval-days" },
            },
            {
              name: "--interval-months",
              description:
                "The number of months between each set of occurrences. Applicable to absolute and relative monthly schedule types. Not applicable to default maintenance configuration",
              args: { name: "interval-months" },
            },
            {
              name: "--interval-weeks",
              description:
                "The number of weeks between each set of occurrences. Applicable to weekly schedule types only. Cannot be specified for default maintenance configuration (the interval is always 1 week)",
              args: { name: "interval-weeks" },
            },
            {
              name: "--schedule-type",
              description:
                "Choose either 'Daily', 'Weekly', 'AbsoluteMonthly' or 'RelativeMonthly' for your maintenance schedule. For default maintenance configuration, only 'Weekly' is supported",
              args: {
                name: "schedule-type",
                suggestions: [
                  "AbsoluteMonthly",
                  "Daily",
                  "RelativeMonthly",
                  "Weekly",
                ],
              },
            },
            {
              name: "--start-date",
              description:
                'The date the maintenance configuration activates. If not specified, the maintenance window will be active right away. Supported for all configuration types, including default."',
              args: { name: "start-date" },
            },
            {
              name: "--start-hour",
              description:
                "The start of a 1-hour maintenance window, e.g. 1 means 1:00am-2:00am (legacy timeInWeek format, default config only). See examples for the maintenanceWindow alternative",
              args: { name: "start-hour" },
            },
            {
              name: "--start-time",
              description:
                "The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. '--utc-offset' applies to this field. For example, '02:00' with '--utc-offset +02:00' means UTC time '00:00'",
              args: { name: "start-time" },
            },
            {
              name: "--utc-offset",
              description:
                "The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'. Supported for all configuration types, including default",
              args: { name: "utc-offset" },
            },
            {
              name: "--week-index",
              description:
                "Specify on which instance of the allowed days specified in '--day-of-week' the maintenance occurs. Applicable to relative monthly schedule type only. Not applicable to default maintenance configuration",
              args: {
                name: "week-index",
                suggestions: ["First", "Fourth", "Last", "Second", "Third"],
              },
            },
            {
              name: "--weekday",
              description:
                "A day in week on which maintenance is allowed (legacy timeInWeek format, default config only). See examples for the maintenanceWindow alternative",
              args: { name: "weekday" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a maintenance configuration in managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The config name",
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
          name: "list",
          description:
            "List maintenance configurations in managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
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
          ],
        },
        {
          name: "show",
          description:
            "Show the details of a maintenance configuration in managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The config name",
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
          description:
            "Update a maintenance configuration of a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The config name",
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
              name: "--config-file",
              description: "The maintenance configuration json file",
              args: { name: "config-file" },
            },
            {
              name: "--day-of-month",
              description:
                "Specify on which day of the month the maintenance occurs. E.g. 1 indicates the 1st of the month. Applicable to absolute monthly schedule type only. Not applicable to default maintenance configuration",
              args: { name: "day-of-month" },
            },
            {
              name: "--day-of-week",
              description:
                'Specify on which day of the week the maintenance occurs. E.g. "Monday". Applicable to weekly and relative monthly schedule types',
              args: { name: "day-of-week" },
            },
            {
              name: "--duration",
              description:
                "The length of maintenance window range from 4 to 24 hours",
              args: { name: "duration" },
            },
            {
              name: "--interval-days",
              description:
                "The number of days between each set of occurrences for daily schedule type. Not applicable to default maintenance configuration",
              args: { name: "interval-days" },
            },
            {
              name: "--interval-months",
              description:
                "The number of months between each set of occurrences. Applicable to absolute and relative monthly schedule types. Not applicable to default maintenance configuration",
              args: { name: "interval-months" },
            },
            {
              name: "--interval-weeks",
              description:
                "The number of weeks between each set of occurrences. Applicable to weekly schedule types only. Cannot be specified for default maintenance configuration (the interval is always 1 week)",
              args: { name: "interval-weeks" },
            },
            {
              name: "--schedule-type",
              description:
                "Choose either 'Daily', 'Weekly', 'AbsoluteMonthly' or 'RelativeMonthly' for your maintenance schedule. For default maintenance configuration, only 'Weekly' is supported",
              args: {
                name: "schedule-type",
                suggestions: [
                  "AbsoluteMonthly",
                  "Daily",
                  "RelativeMonthly",
                  "Weekly",
                ],
              },
            },
            {
              name: "--start-date",
              description:
                'The date the maintenance configuration activates. If not specified, the maintenance window will be active right away. Supported for all configuration types, including default."',
              args: { name: "start-date" },
            },
            {
              name: "--start-hour",
              description:
                "The start of a 1-hour maintenance window, e.g. 1 means 1:00am-2:00am (legacy timeInWeek format, default config only). See examples for the maintenanceWindow alternative",
              args: { name: "start-hour" },
            },
            {
              name: "--start-time",
              description:
                "The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. '--utc-offset' applies to this field. For example, '02:00' with '--utc-offset +02:00' means UTC time '00:00'",
              args: { name: "start-time" },
            },
            {
              name: "--utc-offset",
              description:
                "The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'. Supported for all configuration types, including default",
              args: { name: "utc-offset" },
            },
            {
              name: "--week-index",
              description:
                "Specify on which instance of the allowed days specified in '--day-of-week' the maintenance occurs. Applicable to relative monthly schedule type only. Not applicable to default maintenance configuration",
              args: {
                name: "week-index",
                suggestions: ["First", "Fourth", "Last", "Second", "Third"],
              },
            },
            {
              name: "--weekday",
              description:
                "A day in week on which maintenance is allowed (legacy timeInWeek format, default config only). See examples for the maintenanceWindow alternative",
              args: { name: "weekday" },
            },
          ],
        },
      ],
    },
    {
      name: "mesh",
      description: "Commands to manage Azure Service Mesh",
      subcommands: [
        {
          name: "disable",
          description: "Disable Azure Service Mesh",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "disable-egress-gateway",
          description: "Disable an Azure Service Mesh egress gateway",
          options: [
            {
              name: ["--istio-egressgateway-name", "--istio-eg-gtw-name"],
              description: "Specify the name of the Istio egress gateway",
              args: { name: "istio-egressgateway-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: ["--istio-egressgateway-namespace", "--istio-eg-gtw-ns"],
              description: "Specify the namespace of the Istio egress gateway",
              args: { name: "istio-egressgateway-namespace" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "disable-ingress-gateway",
          description: "Disable an Azure Service Mesh ingress gateway",
          options: [
            {
              name: "--ingress-gateway-type",
              description: "Specify the type of ingress gateway",
              args: {
                name: "ingress-gateway-type",
                suggestions: ["External", "Internal"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable Azure Service Mesh",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: "--ca-cert-object-name",
              description:
                "Intermediate cert object name in the Azure Keyvault",
              args: { name: "ca-cert-object-name" },
            },
            {
              name: "--ca-key-object-name",
              description: "Intermediate key object name in the Azure Keyvault",
              args: { name: "ca-key-object-name" },
            },
            {
              name: "--cert-chain-object-name",
              description: "Cert chain object name in the Azure Keyvault",
              args: { name: "cert-chain-object-name" },
            },
            changeReference,
            {
              name: "--key-vault-id",
              description: "The Azure Keyvault id with plugin CA info",
              args: { name: "key-vault-id" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--proxy-redirection-mechanism",
              description: "Set the proxy redirection mechanism",
              args: {
                name: "proxy-redirection-mechanism",
                suggestions: ["CNIChaining", "InitContainers"],
              },
            },
            {
              name: "--revision",
              description: "Azure Service Mesh revision to install",
              args: { name: "revision" },
            },
            {
              name: "--root-cert-object-name",
              description: "Root cert object name in the Azure Keyvault",
              args: { name: "root-cert-object-name" },
            },
          ],
        },
        {
          name: "enable-egress-gateway",
          description: "Enable an Azure Service Mesh egress gateway",
          options: [
            {
              name: ["--gateway-configuration-name", "--gtw-config-name"],
              description:
                "Specify the name of the StaticGatewayConfiguration resource",
              args: { name: "gateway-configuration-name" },
              isRequired: true,
            },
            {
              name: ["--istio-egressgateway-name", "--istio-eg-gtw-name"],
              description: "Specify the name of the Istio egress gateway",
              args: { name: "istio-egressgateway-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: ["--istio-egressgateway-namespace", "--istio-eg-gtw-ns"],
              description: "Specify the namespace of the Istio egress gateway",
              args: { name: "istio-egressgateway-namespace" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "enable-ingress-gateway",
          description: "Enable an Azure Service Mesh ingress gateway",
          options: [
            {
              name: "--ingress-gateway-type",
              description: "Specify the type of ingress gateway",
              args: {
                name: "ingress-gateway-type",
                suggestions: ["External", "Internal"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "get-revisions",
          description:
            "Discover available Azure Service Mesh revisions and their compatibility",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location in which to discover available Azure Service Mesh revisions",
              args: { name: "location" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "get-upgrades",
          description: "Discover available Azure Service Mesh upgrades",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
          name: "proxy-redirection-mechanism",
          description:
            "Set the proxy redirection mechanism for Azure Service Mesh",
          options: [
            {
              name: "--mechanism",
              description: "The proxy redirection mechanism",
              args: {
                name: "mechanism",
                suggestions: ["CNIChaining", "InitContainers"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "upgrade",
          description: "Commands to manage the upgrades for Azure Service Mesh",
          subcommands: [
            {
              name: "complete",
              description: "Complete Azure Service Mesh upgrade",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the managed cluster",
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "rollback",
              description: "Rollback Azure Service Mesh upgrade",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the managed cluster",
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "start",
              description: "Initiate Azure Service Mesh upgrade",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the managed cluster",
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
                  name: "--revision",
                  description: "Azure Service Mesh revision to upgrade to",
                  args: { name: "revision" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "namespace",
      description: "Commands to manage namespace in managed Kubernetes cluster",
      subcommands: [
        {
          name: "add",
          description: "Add namespace to the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the managed cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--cpu-limit",
              description: "CPU limit of the namespace",
              args: { name: "cpu-limit" },
              isRequired: true,
            },
            {
              name: "--cpu-request",
              description: "CPU request of the namespace",
              args: { name: "cpu-request" },
              isRequired: true,
            },
            {
              name: "--memory-limit",
              description: "Memory limit of the namespace",
              args: { name: "memory-limit" },
              isRequired: true,
            },
            {
              name: "--memory-request",
              description: "Memory request of the namespace",
              args: { name: "memory-request" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The managed namespace name",
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
              name: "--adoption-policy",
              description:
                "Action if Kubernetes namespace with same name already exists. The default value is Never",
              args: {
                name: "adoption-policy",
                suggestions: ["Always", "IfIdentical", "Never"],
              },
            },
            {
              name: "--aks-custom-headers",
              description:
                "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
              args: { name: "aks-custom-headers" },
            },
            {
              name: "--annotations",
              description: "Annotations for the managed namespace",
              args: { name: "annotations", isOptional: true, isVariadic: true },
            },
            changeReference,
            {
              name: "--delete-policy",
              description:
                "Delete options of a namespace. The default value is Keep",
              args: { name: "delete-policy", suggestions: ["Delete", "Keep"] },
            },
            {
              name: "--egress-policy",
              description:
                "Egress policy for the network. The default value is AllowAll",
              args: {
                name: "egress-policy",
                suggestions: ["AllowAll", "AllowSameNamespace", "DenyAll"],
              },
            },
            {
              name: "--ingress-policy",
              description:
                "Ingress policy for the network. The default value is AllowSameNamespace",
              args: {
                name: "ingress-policy",
                suggestions: ["AllowAll", "AllowSameNamespace", "DenyAll"],
              },
            },
            {
              name: "--labels",
              description: "Labels for the managed namespace",
              args: { name: "labels", isOptional: true, isVariadic: true },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--tags",
              description: "The tags of the managed namespace",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a managed namespace in managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The managed namespace name",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "get-credentials",
          description: "Get access credentials for a managed namespace",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The managed namespace name",
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
              name: "--context",
              description: "If specified, overwrite the default context name",
              args: { name: "context" },
            },
            {
              name: ["--file", "-f"],
              description:
                'Kubernetes configuration file to update. Use "-" to print YAML to stdout instead',
              args: { name: "file" },
            },
            {
              name: "--overwrite-existing",
              description:
                "Overwrite any existing cluster entry with the same name",
            },
          ],
        },
        {
          name: "list",
          description: "List managed namespaces in managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
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
          name: "show",
          description:
            "Show the details of a managed namespace in managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The managed namespace name",
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
          description: "Update namespace on the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the managed cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The managed namespace name",
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
              name: "--adoption-policy",
              description:
                "Action if Kubernetes namespace with same name already exists",
              args: {
                name: "adoption-policy",
                suggestions: ["Always", "IfIdentical", "Never"],
              },
            },
            {
              name: "--aks-custom-headers",
              description:
                "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
              args: { name: "aks-custom-headers" },
            },
            {
              name: "--annotations",
              description: "Annotations for the managed namespace",
              args: { name: "annotations", isOptional: true, isVariadic: true },
            },
            changeReference,
            {
              name: "--cpu-limit",
              description: "CPU limit of the namespace",
              args: { name: "cpu-limit" },
            },
            {
              name: "--cpu-request",
              description: "CPU request of the namespace",
              args: { name: "cpu-request" },
            },
            {
              name: "--delete-policy",
              description: "Delete options of a namespace",
              args: { name: "delete-policy", suggestions: ["Delete", "Keep"] },
            },
            {
              name: "--egress-policy",
              description: "Egress policy rule for the network",
              args: {
                name: "egress-policy",
                suggestions: ["AllowAll", "AllowSameNamespace", "DenyAll"],
              },
            },
            {
              name: "--ingress-policy",
              description: "Ingress policy rule for the network",
              args: {
                name: "ingress-policy",
                suggestions: ["AllowAll", "AllowSameNamespace", "DenyAll"],
              },
            },
            {
              name: "--labels",
              description: "Labels for the managed namespace",
              args: { name: "labels", isOptional: true, isVariadic: true },
            },
            {
              name: "--memory-limit",
              description: "Memory limit of the namespace",
              args: { name: "memory-limit" },
            },
            {
              name: "--memory-request",
              description: "Memory request of the namespace",
              args: { name: "memory-request" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--tags",
              description: "The tags of the managed namespace",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
          ],
        },
      ],
    },
    {
      name: "nodepool",
      description:
        "Commands to manage node pools in Kubernetes kubernetes cluster",
      subcommands: [
        {
          name: "add",
          description: "Add a node pool to the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--aks-custom-headers",
              description:
                "Comma-separated key-value pairs to specify custom headers",
              args: { name: "aks-custom-headers" },
            },
            {
              name: "--allowed-host-ports",
              description:
                "Expose host ports on the node pool. When specified, format should be a space-separated list of ranges with protocol, eg. 80/TCP 443/TCP 4000-5000/TCP",
              args: { name: "allowed-host-ports", isVariadic: true },
            },
            {
              name: "--asg-ids",
              description:
                "The IDs of the application security groups to which the node pool's network interface should belong. When specified, format should be a space-separated list of IDs",
              args: { name: "asg-ids", isVariadic: true },
            },
            changeReference,
            {
              name: "--crg-id",
              description:
                "The crg id used to associate the new nodepool with the existed Capacity Reservation Group resource",
              args: { name: "crg-id" },
            },
            {
              name: "--disable-windows-outbound-nat",
              description:
                "Disable Windows OutboundNAT on Windows agent node pool",
            },
            {
              name: "--drain-timeout",
              description:
                "When nodes are drain how many minutes to wait for all pods to be evicted",
              args: { name: "drain-timeout" },
            },
            {
              name: "--enable-artifact-streaming",
              description:
                "Enable artifact streaming for VirtualMachineScaleSets managed by a node pool, to speed up the cold-start of containers on a node through on-demand image loading. This option is only valid for Linux nodepools. To use this feature, container images must also enable artifact streaming on ACR. If not specified, the default is false",
            },
            {
              name: ["--enable-cluster-autoscaler", "-e"],
              description: "Enable cluster autoscaler",
            },
            {
              name: "--enable-encryption-at-host",
              description: "Enable EncryptionAtHost, default value is false",
            },
            {
              name: "--enable-fips-image",
              description: "Use FIPS-enabled OS on agent nodes",
            },
            {
              name: "--enable-managed-dranet",
              description: "Enable or disable Managed DRANET on the node pool",
              args: {
                name: "enable-managed-dranet",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-managed-gpu",
              description:
                "Enable the Managed GPU experience, which installs additional components like DCGM metrics for monitoring on top of the GPU driver",
            },
            {
              name: "--enable-node-public-ip",
              description: "Enable VMSS or VMs node public IP",
            },
            {
              name: "--enable-secure-boot",
              description:
                "Enable Secure Boot on agent node pool. Must use VMSS or VMs agent pool type",
            },
            {
              name: "--enable-ultra-ssd",
              description: "Enable UltraSSD, default value is false",
            },
            {
              name: "--enable-vtpm",
              description:
                "Enable vTPM on agent node pool. Must use VMSS or VMs agent pool type",
            },
            {
              name: "--eviction-policy",
              description:
                "The eviction policy of the Spot node pool. It can only be set when --priority is Spot",
              args: {
                name: "eviction-policy",
                suggestions: ["Deallocate", "Delete"],
              },
            },
            {
              name: "--gateway-prefix-size",
              description:
                "The size of Public IPPrefix attached to the Gateway-mode node pool. The node pool must be in Gateway mode",
              args: { name: "gateway-prefix-size" },
            },
            {
              name: "--gpu-driver",
              description:
                'Whether to install driver for GPU node pool. Possible values are "Install" or "None". Default is "Install"',
              args: { name: "gpu-driver", suggestions: ["Install", "None"] },
            },
            {
              name: "--gpu-instance-profile",
              description:
                "GPU instance profile to partition multi-gpu Nvidia GPUs",
              args: {
                name: "gpu-instance-profile",
                suggestions: ["MIG1g", "MIG2g", "MIG3g", "MIG4g", "MIG7g"],
              },
            },
            {
              name: "--host-group-id",
              description:
                "The fully qualified dedicated host group id used to provision agent node pool",
              args: { name: "host-group-id" },
            },
            {
              name: "--if-match",
              description:
                "The value provided will be compared to the ETag of the agentpool, if it matches the operation will proceed. If it does not match, the request will be rejected to prevent accidental overwrites. This must not be specified when creating a new agentpool",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new agentpool to be created, but to prevent updating an existing agentpool. Other values will be ignored",
              args: { name: "if-none-match" },
            },
            {
              name: "--kubelet-config",
              description:
                "Path to JSON file containing Kubelet configurations for agent nodes. https://aka.ms/aks/custom-node-config",
              args: { name: "kubelet-config" },
            },
            {
              name: ["--kubernetes-version", "-k"],
              description:
                'Version of Kubernetes to use for creating the cluster, such as "1.16.9"',
              args: { name: "kubernetes-version" },
            },
            {
              name: "--labels",
              description:
                "The node labels for the node pool. See https://aka.ms/node-labels for syntax of labels",
              args: { name: "labels", isOptional: true, isVariadic: true },
            },
            {
              name: "--linux-os-config",
              description:
                "Path to JSON file containing OS configurations for Linux agent nodes. https://aka.ms/aks/custom-node-config",
              args: { name: "linux-os-config" },
            },
            {
              name: "--localdns-config",
              description:
                "Set the localDNS Profile for a nodepool with a JSON config file",
              args: { name: "localdns-config" },
            },
            {
              name: "--max-count",
              description:
                'Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [0, 1000] for user nodepool, and [1,1000] for system nodepool',
              args: { name: "max-count" },
            },
            {
              name: ["--max-pods", "-m"],
              description: "The maximum number of pods deployable to a node",
              args: { name: "max-pods" },
            },
            {
              name: "--max-surge",
              description:
                "Extra nodes used to speed upgrade. When specified, it represents the number or percent used, eg. 5 or 33%",
              args: { name: "max-surge" },
            },
            {
              name: "--max-unavailable",
              description:
                "The maximum number or percentage of nodes that can be simultaneously unavailable during upgrade. When specified, it represents the number or percent used, eg. 1 or 5%",
              args: { name: "max-unavailable" },
            },
            {
              name: "--message-of-the-day",
              description:
                "Path to a file containing the desired message of the day. Only valid for linux nodes. Will be written to /etc/motd",
              args: { name: "message-of-the-day" },
            },
            {
              name: "--min-count",
              description:
                'Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [0, 1000] for user nodepool, and [1,1000] for system nodepool',
              args: { name: "min-count" },
            },
            {
              name: "--mode",
              description:
                'The mode for a node pool which defines a node pool\'s primary function. If set as "System", AKS prefers system pods scheduling to node pools with mode System. Learn more at https://aka.ms/aks/nodepool/mode',
              args: {
                name: "mode",
                suggestions: ["Gateway", "System", "User"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--node-count", "-c"],
              description:
                "Number of nodes in the Kubernetes agent pool. After creating a cluster, you can change the size of its node pool with az aks scale",
              args: { name: "node-count" },
            },
            {
              name: "--node-osdisk-size",
              description:
                "Size in GiB of the OS disk for each node in the agent pool. Minimum 30 GiB",
              args: { name: "node-osdisk-size" },
            },
            {
              name: "--node-osdisk-type",
              description:
                "OS disk type to be used for machines in a given agent pool. Defaults to 'Ephemeral' when possible in conjunction with VM size and OS disk size. May not be changed for this pool after creation. ('Ephemeral' or 'Managed')",
              args: {
                name: "node-osdisk-type",
                suggestions: ["Ephemeral", "Managed"],
              },
            },
            {
              name: "--node-public-ip-prefix-id",
              description:
                "Public IP prefix ID used to assign public IPs to VMSS or VMs nodes",
              args: { name: "node-public-ip-prefix-id" },
            },
            {
              name: "--node-public-ip-tags",
              description: "The ipTags of the node public IPs",
              args: {
                name: "node-public-ip-tags",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--node-soak-duration",
              description:
                "The amount of time (in minutes) to wait after draining a node and before reimaging it and moving on to next node",
              args: { name: "node-soak-duration" },
            },
            {
              name: "--node-taints",
              description: "The node taints for the node pool",
              args: { name: "node-taints" },
            },
            {
              name: ["--node-vm-size", "-s"],
              description:
                "Size of Virtual Machines to create as Kubernetes nodes. If the user does not specify one, server will select a default VM size for her/him",
              args: { name: "node-vm-size" },
            },
            {
              name: "--os-sku",
              description:
                "The OS SKU of the agent node pool. Ubuntu, Ubuntu2204, Ubuntu2404, AzureLinux, AzureLinux3, or AzureContainerLinux for Linux. Windows2019, Windows2022, or Windows2025 for Windows",
              args: {
                name: "os-sku",
                suggestions: [
                  "AzureContainerLinux",
                  "AzureLinux",
                  "AzureLinux3",
                  "CBLMariner",
                  "Mariner",
                  "Ubuntu",
                  "Ubuntu2204",
                  "Ubuntu2404",
                  "Windows2019",
                  "Windows2022",
                  "Windows2025",
                ],
              },
            },
            {
              name: "--os-type",
              description: "The OS Type. Linux or Windows",
              args: { name: "os-type" },
            },
            {
              name: "--pod-ip-allocation-mode",
              description:
                'Set the ip allocation mode for how Pod IPs from the Azure Pod Subnet are allocated to the nodes in the AKS cluster. The choice is between dynamic batches of individual IPs or static allocation of a set of CIDR blocks. Accepted Values are "DynamicIndividual" or "StaticBlock"',
              args: {
                name: "pod-ip-allocation-mode",
                suggestions: ["DynamicIndividual", "StaticBlock"],
              },
            },
            {
              name: "--pod-subnet-id",
              description:
                "The Resource Id of a subnet in an existing VNet into which to assign pods in the cluster (requires azure network-plugin)",
              args: { name: "pod-subnet-id" },
            },
            {
              name: "--ppg",
              description: "The ID of a PPG",
              args: { name: "ppg" },
            },
            {
              name: "--priority",
              description: "The priority of the node pool",
              args: { name: "priority", suggestions: ["Regular", "Spot"] },
            },
            {
              name: "--scale-down-mode",
              description:
                "Describe how VMs are added to or removed from nodepools",
              args: {
                name: "scale-down-mode",
                suggestions: ["Deallocate", "Delete"],
              },
            },
            {
              name: "--snapshot-id",
              description:
                "The source snapshot id used to create this nodepool",
              args: { name: "snapshot-id" },
            },
            {
              name: "--spot-max-price",
              description:
                "It can only be set when --priority is Spot. Specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand. It can only include up to 5 decimal places",
              args: { name: "spot-max-price" },
            },
            {
              name: "--ssh-access",
              description: "Configure SSH access for the node pool",
              args: {
                name: "ssh-access",
                suggestions: ["disabled", "entraid", "localuser"],
              },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--undrainable-node-behavior",
              description:
                'Define the behavior for undrainable nodes during upgrade. The value should be "Cordon" or "Schedule". The default value is "Schedule"',
              args: { name: "undrainable-node-behavior" },
            },
            {
              name: "--vm-set-type",
              description:
                "Agent pool vm set type. VirtualMachineScaleSets or AvailabilitySet or VirtualMachines. Defaults to 'VirtualMachineScaleSets'",
              args: { name: "vm-set-type" },
            },
            {
              name: "--vm-sizes",
              description:
                "Comma-separated list of VM sizes. Valid for VirtualMachines node pool only. If --vm-sizes not specified but --node-vm-size specified, value of --node-vm-size will be used. If neither of them specified, defaults to Standard_DS2_v2 for Linux or Standard_D2s_v3 for Windows",
              args: { name: "vm-sizes" },
            },
            {
              name: "--vnet-subnet-id",
              description:
                "The Resource Id of a subnet in an existing VNet into which to deploy the cluster",
              args: { name: "vnet-subnet-id" },
            },
            {
              name: "--workload-runtime",
              description: "Set the workload runtime",
              args: {
                name: "workload-runtime",
                suggestions: ["KataVmIsolation"],
              },
            },
            {
              name: ["--zones", "-z"],
              description:
                "Availability zones where agent nodes will be placed. Also, to install agent nodes to more than one zone you need to pass zone numbers separated by blanks. For example - To have all 3 zones, you are expected to enter --zones 1 2 3",
              args: { name: "zones", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete the agent pool in the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--if-match",
              description:
                "The value provided will be compared to the ETag of the node pool, if it matches the operation will proceed. If it does not match, the request will be rejected to prevent accidental overwrites. This must not be specified when creating a new agentpool",
              args: { name: "if-match" },
            },
            {
              name: ["--ignore-pdb", "-i"],
              description:
                "Delete an existing nodepool without considering Pod Disruption Budget",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete-machines",
          description:
            "Delete specific machines in an agentpool for a managed cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--machine-names",
              description:
                "Space-separated list of machine names from the agent pool to be deleted",
              args: { name: "machine-names", isVariadic: true },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "get-rollback-versions",
          description:
            "Get the available rollback versions for an agent pool of the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
          name: "get-upgrades",
          description:
            "Get the available upgrade versions for an agent pool of the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
          name: "list",
          description:
            "List node pools in the managed Kubernetes cluster. To get list of nodes in the cluster run kubectl get nodes command",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
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
          ],
        },
        {
          name: "operation-abort",
          description: "Abort last running operation on nodepool",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "rollback",
          description:
            "Rollback an agent pool to the most recently used configuration (N-1)",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--aks-custom-headers",
              description:
                "Comma-separated key-value pairs to specify custom headers",
              args: { name: "aks-custom-headers" },
            },
            changeReference,
            {
              name: "--if-match",
              description:
                "The value provided will be compared to the ETag of the node pool, if it matches the operation will proceed. If it does not match, the request will be rejected to prevent accidental overwrites. This must not be specified when creating a new agentpool",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new node pool to be created, but to prevent updating an existing node pool. Other values will be ignored",
              args: { name: "if-none-match" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "scale",
          description: "Scale the node pool in a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--node-count", "-c"],
              description: "Number of nodes in the Kubernetes node pool",
              args: { name: "node-count" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the details for a node pool in the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
          name: "start",
          description:
            "Start stopped agent pool in the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--aks-custom-headers",
              description:
                "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
              args: { name: "aks-custom-headers" },
            },
            changeReference,
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "stop",
          description:
            "Stop running agent pool in the managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--aks-custom-headers",
              description:
                "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
              args: { name: "aks-custom-headers" },
            },
            changeReference,
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "update",
          description: "Update a node pool properties",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--aks-custom-headers",
              description:
                "Comma-separated key-value pairs to specify custom headers",
              args: { name: "aks-custom-headers" },
            },
            {
              name: "--allowed-host-ports",
              description:
                "Expose host ports on the node pool. When specified, format should be a space-separated list of ranges with protocol, eg. 80/TCP 443/TCP 4000-5000/TCP",
              args: { name: "allowed-host-ports", isVariadic: true },
            },
            {
              name: "--asg-ids",
              description:
                "The IDs of the application security groups to which the node pool's network interface should belong. When specified, format should be a space-separated list of IDs",
              args: { name: "asg-ids", isVariadic: true },
            },
            changeReference,
            {
              name: "--disable-artifact-streaming",
              description:
                "Disable artifact streaming for VirtualMachineScaleSets managed by a Linux node pool",
            },
            {
              name: ["--disable-cluster-autoscaler", "-d"],
              description:
                "Disable cluster autoscaler. For VirtualMachines pools, converts all autoscale profiles back to manual scale profiles",
            },
            {
              name: "--disable-fips-image",
              description: "Switch to use non-FIPS-enabled OS on agent nodes",
            },
            {
              name: "--disable-secure-boot",
              description:
                "Disable Secure Boot on on an existing Trusted Launch enabled agent node pool",
            },
            {
              name: "--disable-vtpm",
              description:
                "Disable vTPM on an existing Trusted Launch enabled agent node pool",
            },
            {
              name: "--drain-timeout",
              description:
                "When nodes are drain how many minutes to wait for all pods to be evicted",
              args: { name: "drain-timeout" },
            },
            {
              name: "--enable-artifact-streaming",
              description:
                "Enable artifact streaming for VirtualMachineScaleSets managed by a Linux node pool, to speed up the cold-start of containers on a node through on-demand image loading. To use this feature, container images must also enable artifact streaming on ACR. If not specified, the default is false",
            },
            {
              name: ["--enable-cluster-autoscaler", "-e"],
              description:
                "Enable cluster autoscaler. For VirtualMachines pools, converts all manual scale profiles to autoscale profiles using the same min/max counts",
            },
            {
              name: "--enable-fips-image",
              description: "Switch to use FIPS-enabled OS on agent nodes",
            },
            {
              name: "--enable-managed-dranet",
              description: "Enable or disable Managed DRANET on the node pool",
              args: {
                name: "enable-managed-dranet",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-secure-boot",
              description:
                "Enable Secure Boot on an existing Trusted Launch enabled agent node pool. Must use VMSS or VMs agent pool type",
            },
            {
              name: "--enable-vtpm",
              description:
                "Enable vTPM on an existing Trusted Launch enabled agent node pool. Must use VMSS or VMs agent pool type",
            },
            {
              name: "--gpu-driver",
              description:
                'Whether to install driver for GPU node pool. Possible values are "Install" or "None"',
              args: { name: "gpu-driver", suggestions: ["Install", "None"] },
            },
            {
              name: "--if-match",
              description:
                "The value provided will be compared to the ETag of the node pool, if it matches the operation will proceed. If it does not match, the request will be rejected to prevent accidental overwrites. This must not be specified when creating a new agentpool",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new node pool to be created, but to prevent updating an existing node pool. Other values will be ignored",
              args: { name: "if-none-match" },
            },
            {
              name: "--labels",
              description:
                "The node labels for the node pool. See https://aka.ms/node-labels for syntax of labels",
              args: { name: "labels", isOptional: true, isVariadic: true },
            },
            {
              name: "--localdns-config",
              description:
                "Set the localDNS Profile for a nodepool with a JSON config file",
              args: { name: "localdns-config" },
            },
            {
              name: "--max-count",
              description:
                'Maximum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [0, 1000] for user nodepool, and [1,1000] for system nodepool',
              args: { name: "max-count" },
            },
            {
              name: "--max-surge",
              description:
                "Extra nodes used to speed upgrade. When specified, it represents the number or percent used, eg. 5 or 33%",
              args: { name: "max-surge" },
            },
            {
              name: "--max-unavailable",
              description:
                "The maximum number or percentage of nodes that can be simultaneously unavailable during upgrade. When specified, it represents the number or percent used, eg. 1 or 5%",
              args: { name: "max-unavailable" },
            },
            {
              name: "--min-count",
              description:
                'Minimum nodes count used for autoscaler, when "--enable-cluster-autoscaler" specified. Please specify the value in the range of [0, 1000] for user nodepool, and [1,1000] for system nodepool',
              args: { name: "min-count" },
            },
            {
              name: "--mode",
              description:
                'The mode for a node pool which defines a node pool\'s primary function. If set as "System", AKS prefers system pods scheduling to node pools with mode System. Learn more at https://aka.ms/aks/nodepool/mode',
              args: {
                name: "mode",
                suggestions: ["Gateway", "System", "User"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--node-soak-duration",
              description:
                "The amount of time (in minutes) to wait after draining a node and before reimaging it and moving on to next node",
              args: { name: "node-soak-duration" },
            },
            {
              name: "--node-taints",
              description:
                'The node taints for the node pool. You can update the existing node taint of a nodepool or create a new node taint for a nodepool. Pass the empty string "" to remove all taints',
              args: { name: "node-taints" },
            },
            {
              name: ["--node-vm-size", "-s"],
              description:
                "Resize the VMs of a VirtualMachineScaleSets node pool",
              args: { name: "node-vm-size" },
            },
            {
              name: "--os-sku",
              description: "The OS SKU of the agent node pool",
              args: {
                name: "os-sku",
                suggestions: [
                  "AzureContainerLinux",
                  "AzureLinux",
                  "AzureLinux3",
                  "Ubuntu",
                  "Ubuntu2204",
                  "Ubuntu2404",
                  "Windows2022",
                  "Windows2025",
                ],
              },
            },
            {
              name: "--scale-down-mode",
              description:
                "Describe how VMs are added to or removed from nodepools",
              args: {
                name: "scale-down-mode",
                suggestions: ["Deallocate", "Delete"],
              },
            },
            {
              name: "--ssh-access",
              description:
                "Update SSH access for the node pool. For Kubernetes versions below 1.37, this change takes effect after the node pool is upgraded. For Kubernetes versions 1.37 and above, this change can trigger node pool reimaging",
              args: {
                name: "ssh-access",
                suggestions: ["disabled", "entraid", "localuser"],
              },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--undrainable-node-behavior",
              description:
                'Define the behavior for undrainable nodes during upgrade. The value should be "Cordon" or "Schedule". The default value is "Schedule"',
              args: { name: "undrainable-node-behavior" },
            },
            {
              name: ["--update-cluster-autoscaler", "-u"],
              description:
                "Update min-count or max-count for cluster autoscaler. Not supported for VirtualMachines pools; use 'az aks nodepool auto-scale update' instead",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade the node pool in a managed Kubernetes cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
              name: "--aks-custom-headers",
              description:
                "Comma-separated key-value pairs to specify custom headers",
              args: { name: "aks-custom-headers" },
            },
            changeReference,
            {
              name: "--drain-timeout",
              description:
                "When nodes are drain how long to wait for all pods to be evicted",
              args: { name: "drain-timeout" },
            },
            {
              name: "--if-match",
              description:
                "The value provided will be compared to the ETag of the node pool, if it matches the operation will proceed. If it does not match, the request will be rejected to prevent accidental overwrites. This must not be specified when creating a new agentpool. For upgrade node image version requests this will be ignored",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new node pool to be created, but to prevent updating an existing node pool. Other values will be ignored",
              args: { name: "if-none-match" },
            },
            {
              name: ["--kubernetes-version", "-k"],
              description:
                'Version of Kubernetes to upgrade the node pool to, such as "1.16.9"',
              args: { name: "kubernetes-version" },
            },
            {
              name: "--max-surge",
              description:
                'Extra nodes used to speed upgrade. When specified, it represents the number or percent used, eg. 5 or 33% (mutually exclusive with "--node-image-only". See "az aks nodepool update --max-surge" to update max surge before upgrading with "--node-image-only")',
              args: { name: "max-surge" },
            },
            {
              name: "--max-unavailable",
              description:
                "The maximum number or percentage of nodes that can be simultaneously unavailable during upgrade. When specified, it represents the number or percent used, eg. 1 or 5%",
              args: { name: "max-unavailable" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--node-image-only",
              description: "Only upgrade agent pool's node image",
            },
            {
              name: "--node-soak-duration",
              description:
                "The amount of time (in minutes) to wait after draining a node and before reimaging it and moving on to next node",
              args: { name: "node-soak-duration" },
            },
            {
              name: "--snapshot-id",
              description:
                "The source snapshot id used to upgrade this nodepool",
              args: { name: "snapshot-id" },
            },
            {
              name: "--undrainable-node-behavior",
              description:
                'Define the behavior for undrainable nodes during upgrade. The value should be "Cordon" or "Schedule". The default value is "Schedule"',
              args: { name: "undrainable-node-behavior" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "wait",
          description: "Wait for a node pool to reach a desired state",
          options: [
            {
              name: "--cluster-name",
              description: "The cluster name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--nodepool-name", "--name", "-n"],
              description: "The node pool name",
              args: { name: "nodepool-name" },
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
          name: "auto-scale",
          description:
            "Commands to manage nodepool virtualMachinesProfile.scale.autoscale",
          subcommands: [
            {
              name: "add",
              description:
                "Add a new autoscale profile to a VirtualMachines agentpool in the managed Kubernetes cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--max-count",
                  description: "Maximum number of nodes for autoscaling",
                  args: { name: "max-count" },
                  isRequired: true,
                },
                {
                  name: "--min-count",
                  description: "Minimum number of nodes for autoscaling",
                  args: { name: "min-count" },
                  isRequired: true,
                },
                {
                  name: ["--nodepool-name", "--name", "-n"],
                  description: "The node pool name",
                  args: { name: "nodepool-name" },
                  isRequired: true,
                },
                {
                  name: "--node-vm-size",
                  description: "VM size for the autoscale profile",
                  args: { name: "node-vm-size" },
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an existing autoscale profile from a VirtualMachines agentpool in the managed Kubernetes cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--current-node-vm-size",
                  description:
                    "The VM size of the autoscale profile to be deleted",
                  args: { name: "current-node-vm-size" },
                  isRequired: true,
                },
                {
                  name: ["--nodepool-name", "--name", "-n"],
                  description: "The node pool name",
                  args: { name: "nodepool-name" },
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an existing autoscale profile of a VirtualMachines agentpool in the managed Kubernetes cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--current-node-vm-size",
                  description:
                    "The current VM size of the autoscale profile to be updated",
                  args: { name: "current-node-vm-size" },
                  isRequired: true,
                },
                {
                  name: ["--nodepool-name", "--name", "-n"],
                  description: "The node pool name",
                  args: { name: "nodepool-name" },
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
                  name: "--max-count",
                  description: "Maximum number of nodes for autoscaling",
                  args: { name: "max-count" },
                },
                {
                  name: "--min-count",
                  description: "Minimum number of nodes for autoscaling",
                  args: { name: "min-count" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--node-vm-size",
                  description: "The new VM size for the autoscale profile",
                  args: { name: "node-vm-size" },
                },
              ],
            },
          ],
        },
        {
          name: "manual-scale",
          description:
            "Commands to manage nodepool virtualMachinesProfile.scale.manual",
          subcommands: [
            {
              name: "add",
              description:
                "Add a new manual to a VirtualMachines agentpool in the managed Kubernetes cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--nodepool-name", "--name", "-n"],
                  description: "The node pool name",
                  args: { name: "nodepool-name" },
                  isRequired: true,
                },
                {
                  name: ["--node-count", "-c"],
                  description: "Number of nodes in the manual",
                  args: { name: "node-count" },
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
                  name: "--vm-sizes",
                  description: "Comma-separated list of sizes in the manual",
                  args: { name: "vm-sizes" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an existing manual to a VirtualMachines agentpool in the managed Kubernetes cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--current-vm-sizes",
                  description:
                    "Comma-separated list of sizes in the manual to be deleted",
                  args: { name: "current-vm-sizes" },
                  isRequired: true,
                },
                {
                  name: ["--nodepool-name", "--name", "-n"],
                  description: "The node pool name",
                  args: { name: "nodepool-name" },
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an existing manual of a VirtualMachines agentpool in the managed Kubernetes cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--current-vm-sizes",
                  description:
                    "Comma-separated list of sizes in the manual to be updated",
                  args: { name: "current-vm-sizes" },
                  isRequired: true,
                },
                {
                  name: ["--nodepool-name", "--name", "-n"],
                  description: "The node pool name",
                  args: { name: "nodepool-name" },
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--node-count", "-c"],
                  description: "Number of nodes in the manual",
                  args: { name: "node-count" },
                },
                {
                  name: "--vm-sizes",
                  description: "Comma-separated list of new sizes",
                  args: { name: "vm-sizes" },
                },
              ],
            },
          ],
        },
        {
          name: "snapshot",
          description: "Commands to manage nodepool snapshots",
          subcommands: [
            {
              name: "create",
              description: "Create a nodepool snapshot",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The nodepool snapshot name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--nodepool-id",
                  description:
                    "The source nodepool id from which to create this snapshot",
                  args: { name: "nodepool-id" },
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
                  name: "--aks-custom-headers",
                  description:
                    "Send custom headers. When specified, format should be Key1=Value1,Key2=Value2",
                  args: { name: "aks-custom-headers" },
                },
                changeReference,
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--tags",
                  description: "The tags of the snapshot",
                  args: { name: "tags", isOptional: true, isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a nodepool snapshot",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The nodepool snapshot name",
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List nodepool snapshots",
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
              name: "show",
              description: "Show the details of a nodepool snapshot",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The nodepool snapshot name",
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
              description: "Update tags on a snapshot of a nodepool",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The nodepool snapshot name",
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
                  name: "--tags",
                  description: "The tags to set to the snapshot",
                  args: { name: "tags", isOptional: true, isVariadic: true },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "wait",
              description:
                "Wait for a nodepool snapshot to reach a desired state",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the managed cluster",
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
          ],
        },
      ],
    },
    {
      name: "oidc-issuer",
      description: "Oidc issuer related commands",
      subcommands: [
        {
          name: "rotate-signing-keys",
          description: "Rotate oidc issuer service account signing keys",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the managed cluster",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
      ],
    },
    {
      name: "safeguards",
      description: "Manage Deployment Safeguards",
      subcommands: [
        {
          name: "create",
          description: "Enable Deployment Safeguards for a Managed Cluster",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--managed-cluster", "--cluster", "-c"],
              description:
                "The fully qualified Azure Resource manager identifier of the Managed Cluster",
              args: { name: "managed-cluster" },
            },
            {
              name: ["--excluded-namespaces", "--excluded-ns"],
              description:
                'User defined list of namespaces to exclude from Deployment Safeguards. Deployments in these namespaces will not be checked against any safeguards Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "excluded-namespaces", isVariadic: true },
            },
            {
              name: "--level",
              description:
                "The deployment safeguards level. Possible values are Warn and Enforce",
              args: { name: "level", suggestions: ["Enforce", "Warn"] },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Managed Cluster.You may provide either 'managed_cluster' or both 'resource_group' and name', but not both",
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
              name: "--pss-level",
              description: "The pod security standards level",
              args: {
                name: "pss-level",
                suggestions: ["Baseline", "Privileged", "Restricted"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The name of the resource group. You can configure the default group using az configure --defaults group=<name>. You may provide either 'managed_cluster' or both 'resource_group' and 'name', but not both",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "delete",
          description: "Disable Deployment Safeguards for a Managed Cluster",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--managed-cluster", "--cluster", "-c"],
              description:
                "The fully qualified Azure Resource manager identifier of the Managed Cluster",
              args: { name: "managed-cluster" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Managed Cluster.You may provide either 'managed_cluster' or both 'resource_group' and name', but not both",
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
                "The name of the resource group. You can configure the default group using az configure --defaults group=<name>. You may provide either 'managed_cluster' or both 'resource_group' and 'name', but not both",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List DeploymentSafeguards by parent resource",
          options: [
            {
              name: ["--managed-cluster", "--cluster", "-c"],
              description:
                "The fully qualified Azure Resource manager identifier of the Managed Cluster",
              args: { name: "managed-cluster" },
            },
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Managed Cluster.You may provide either 'managed_cluster' or both 'resource_group' and name', but not both",
              args: { name: "name" },
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
                "The name of the resource group. You can configure the default group using az configure --defaults group=<name>. You may provide either 'managed_cluster' or both 'resource_group' and 'name', but not both",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show Deployment Safeguards Configuration for a Managed Cluster",
          options: [
            {
              name: ["--managed-cluster", "--cluster", "-c"],
              description:
                "The fully qualified Azure Resource manager identifier of the Managed Cluster",
              args: { name: "managed-cluster" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Managed Cluster.You may provide either 'managed_cluster' or both 'resource_group' and name', but not both",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The name of the resource group. You can configure the default group using az configure --defaults group=<name>. You may provide either 'managed_cluster' or both 'resource_group' and 'name', but not both",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update Deployment Safeguards configuration for a Managed Cluster",
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
              name: ["--managed-cluster", "--cluster", "-c"],
              description:
                "The fully qualified Azure Resource manager identifier of the Managed Cluster",
              args: { name: "managed-cluster" },
            },
            {
              name: ["--excluded-namespaces", "--excluded-ns"],
              description:
                'User defined list of namespaces to exclude from Deployment Safeguards. Deployments in these namespaces will not be checked against any safeguards Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "excluded-namespaces", isVariadic: true },
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
              name: "--level",
              description:
                "The deployment safeguards level. Possible values are Warn and Enforce",
              args: { name: "level", suggestions: ["Enforce", "Warn"] },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Managed Cluster.You may provide either 'managed_cluster' or both 'resource_group' and name', but not both",
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
              name: "--pss-level",
              description:
                "The pod security standards level. Possible values: Privileged (off), Baseline, Restricted",
              args: {
                name: "pss-level",
                suggestions: ["Baseline", "Privileged", "Restricted"],
              },
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
                "The name of the resource group. You can configure the default group using az configure --defaults group=<name>. You may provide either 'managed_cluster' or both 'resource_group' and 'name', but not both",
              args: { name: "resource-group" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
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
              name: ["--managed-cluster", "--cluster", "-c"],
              description:
                "The fully qualified Azure Resource manager identifier of the Managed Cluster",
              args: { name: "managed-cluster" },
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
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Managed Cluster.You may provide either 'managed_cluster' or both 'resource_group' and name', but not both",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The name of the resource group. You can configure the default group using az configure --defaults group=<name>. You may provide either 'managed_cluster' or both 'resource_group' and 'name', but not both",
              args: { name: "resource-group" },
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
      name: "trustedaccess",
      description: "Commands to manage trusted access security features",
      subcommands: [
        {
          name: "role",
          description: "Commands to manage trusted access roles",
          subcommands: [
            {
              name: "list",
              description: "List trusted access roles",
              options: [
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "rolebinding",
          description: "Commands to manage trusted access role bindings",
          subcommands: [
            {
              name: "create",
              description: "Create a new trusted access role binding",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Specify the role binding name",
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
                  name: "--roles",
                  description: "Specify the comma-separated roles",
                  args: { name: "roles" },
                  isRequired: true,
                },
                {
                  name: "--source-resource-id",
                  description: "Specify the source resource id of the binding",
                  args: { name: "source-resource-id" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "delete",
              description:
                "Delete a trusted access role binding according to name",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Specify the role binding name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all the trusted access role bindings",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
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
              ],
            },
            {
              name: "show",
              description:
                "Get the specific trusted access role binding according to binding name",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Specify the role binding name",
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
              description: "Update a trusted access role binding",
              options: [
                {
                  name: "--cluster-name",
                  description: "The cluster name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Specify the role binding name",
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
                  name: "--roles",
                  description: "Specify the comma-separated roles",
                  args: { name: "roles" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
