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
  name: "vmss",
  description:
    "Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS)",
  subcommands: [
    {
      name: "create",
      description: "Create an Azure Virtual Machine Scale Set",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the virtual machine scale set",
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
          name: "--accelerated-networking",
          description:
            "Enable accelerated networking. Unless specified, CLI will enable it based on machine image and size",
          args: {
            name: "accelerated-networking",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--accept-term",
          description: "Accept the license agreement and privacy statement",
        },
        acquirePolicyToken,
        {
          name: ["--add-proxy-agent-extension", "--add-proxy-agent-ext"],
          description:
            "Specify whether to implicitly install the ProxyAgent Extension. This option is currently applicable only for Linux OS. Use with --enable-proxy-agent",
          args: {
            name: "add-proxy-agent-extension",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--additional-scheduled-events", "--additional-events"],
          description:
            "The configuration parameter used while creating event grid and resource graph scheduled event setting",
          args: {
            name: "additional-scheduled-events",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--admin-password",
          description:
            "Password for the VM if authentication type is 'Password'",
          args: { name: "admin-password" },
        },
        {
          name: "--admin-username",
          description:
            "Username for the VM. Default value is current username of OS. If the default value is system reserved, then default value will be set to azureuser. Please refer to https://learn.microsoft.com/rest/api/compute/virtualmachines/createorupdate#osprofile to get a full list of reserved values",
          args: { name: "admin-username" },
        },
        {
          name: ["--enable-all-instance-down", "--all-instance-down"],
          description:
            "Specifies if Scheduled Events should be auto-approved when all instances are down. Its default value is true",
          args: {
            name: "enable-all-instance-down",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--app-gateway",
          description:
            'Name to use when creating a new application gateway (default) or referencing an existing one. Can also reference an existing application gateway by ID or specify "" for none',
          args: { name: "app-gateway" },
        },
        {
          name: "--app-gateway-capacity",
          description:
            "The number of instances to use when creating a new application gateway",
          args: { name: "app-gateway-capacity" },
        },
        {
          name: "--app-gateway-sku",
          description: "SKU when creating a new application gateway",
          args: { name: "app-gateway-sku" },
        },
        {
          name: "--app-gateway-subnet-address-prefix",
          description:
            "The subnet IP address prefix to use when creating a new application gateway in CIDR format",
          args: { name: "app-gateway-subnet-address-prefix" },
        },
        {
          name: "--asgs",
          description:
            "Space-separated list of existing application security groups to associate with the VM",
          args: { name: "asgs", isVariadic: true },
        },
        {
          name: "--assign-identity",
          description:
            "Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples",
          args: { name: "assign-identity", isOptional: true, isVariadic: true },
        },
        {
          name: "--authentication-type",
          description:
            'Type of authentication to use with the VM. Defaults to password for Windows and SSH public key for Linux. "all" enables both ssh and password authentication',
          args: {
            name: "authentication-type",
            suggestions: ["all", "password", "ssh"],
          },
        },
        {
          name: "--automatic-repairs-action",
          description:
            "Type of repair action that will be used for repairing unhealthy virtual machines in the scale set",
          args: {
            name: "automatic-repairs-action",
            suggestions: ["Reimage", "Replace", "Restart"],
          },
        },
        {
          name: "--automatic-repairs-grace-period",
          description:
            "The amount of time (in minutes, between 30 and 90) for which automatic repairs are suspended due to a state change on VM",
          args: { name: "automatic-repairs-grace-period" },
        },
        {
          name: ["--automatic-zone-balancing-behavior", "--balancing-behavior"],
          description:
            "Type of rebalance behavior that will be used for recreating virtualmachines in the scale set across availability zones",
          args: {
            name: "automatic-zone-balancing-behavior",
            suggestions: ["CreateBeforeDelete"],
          },
        },
        {
          name: ["--automatic-zone-balancing-strategy", "--balancing-strategy"],
          description:
            "Type of rebalance strategy that will be used for rebalancing virtualmachines in the scale set across availability zones",
          args: {
            name: "automatic-zone-balancing-strategy",
            suggestions: ["Recreate"],
          },
        },
        {
          name: "--backend-pool-name",
          description:
            "Name to use for the backend pool when creating a new load balancer or application gateway",
          args: { name: "backend-pool-name" },
        },
        {
          name: "--backend-port",
          description:
            "When creating a new load balancer, backend port to open with NAT rules (Defaults to 22 on Linux and 3389 on Windows). When creating an application gateway, the backend port to use for the backend HTTP settings",
          args: { name: "backend-port" },
        },
        {
          name: ["--capacity-reservation-group", "--crg"],
          description:
            'The ID or name of the capacity reservation group that is used to allocate. Pass in "None" to disassociate the capacity reservation group. Please note that if you want to delete a VM/VMSS that has been associated with capacity reservation group, you need to disassociate the capacity reservation group first',
          args: { name: "capacity-reservation-group" },
        },
        changeReference,
        {
          name: "--computer-name-prefix",
          description:
            "Computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long",
          args: { name: "computer-name-prefix" },
        },
        {
          name: "--custom-data",
          description:
            "Custom init script file or text (cloud-init, cloud-config, etc..)",
          args: { name: "custom-data" },
        },
        {
          name: "--data-disk-caching",
          description:
            "Storage caching type for data disk(s), including 'None', 'ReadOnly', 'ReadWrite', etc. Use a singular value to apply on all disks, or use <lun>=<vaule1> <lun>=<value2> to configure individual disk",
          args: { name: "data-disk-caching", isVariadic: true },
        },
        {
          name: "--data-disk-delete-option",
          description:
            "Specify whether data disk should be deleted or detached upon VMSS Flex deletion (This feature is only for VMSS with flexible orchestration mode)",
          args: {
            name: "data-disk-delete-option",
            suggestions: ["Delete", "Detach"],
          },
        },
        {
          name: "--data-disk-encryption-sets",
          description:
            "Names or IDs (space delimited) of disk encryption sets for data disks",
          args: { name: "data-disk-encryption-sets", isVariadic: true },
        },
        {
          name: ["--data-disk-storage-fd-alignment", "--data-disk-fda"],
          description:
            "Specifies the storage fault domain alignment type for data disks. This option is only valid for a single-zone Flexible VMSS and is set at create time. Omit this option to leave data disks unaligned",
          args: {
            name: "data-disk-storage-fd-alignment",
            suggestions: ["Aligned", "BestEffortAligned"],
          },
        },
        {
          name: "--data-disk-iops",
          description:
            "Specify the Read-Write IOPS (space delimited) for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB",
          args: { name: "data-disk-iops", isVariadic: true },
        },
        {
          name: "--data-disk-mbps",
          description:
            "Specify the bandwidth in MB per second (space delimited) for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB",
          args: { name: "data-disk-mbps", isVariadic: true },
        },
        {
          name: "--data-disk-sizes-gb",
          description:
            "Space-separated empty managed data disk sizes in GB to create",
          args: { name: "data-disk-sizes-gb", isVariadic: true },
        },
        {
          name: [
            "--disable-capacity-reservation-assignment",
            "--no-cap-reservation",
          ],
          description:
            "Specifies whether the virtual machine scale set is explicitly opted out from being associated with any capacity reservation. When set to true, its virtual machines will not be allowed to implicitly or explicitly associate with any type of capacity reservation and will consume publicly available capacity. This option applies to the parent VMSS only",
          args: {
            name: "disable-capacity-reservation-assignment",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--disable-integrity-monitoring-autoupgrade",
          description:
            "Disable auto upgrade of guest attestation extension for Trusted Launch enabled VMs and VMSS",
        },
        {
          name: "--disable-overprovision",
          description:
            "Overprovision option (see https://azure.microsoft.com/documentation/articles/virtual-machine-scale-sets-overview/ for details)",
        },
        {
          name: "--disk-controller-type",
          description:
            "Specify the disk controller type configured for the VM or VMSS",
          args: { name: "disk-controller-type", suggestions: ["NVMe", "SCSI"] },
        },
        {
          name: "--dns-servers",
          description:
            "Space-separated IP addresses of DNS servers, e.g. 10.0.0.5 10.0.0.6",
          args: { name: "dns-servers", isVariadic: true },
        },
        {
          name: "--edge-zone",
          description: "The name of edge zone",
          args: { name: "edge-zone" },
        },
        {
          name: "--enable-agent",
          description:
            "Indicate whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later",
          args: {
            name: "enable-agent",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-auto-os-upgrade",
          description:
            "Indicate whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available",
          args: {
            name: "enable-auto-os-upgrade",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--enable-automatic-repairs", "--enable-auto-repairs"],
          description: "Enable automatic repairs",
          args: {
            name: "enable-automatic-repairs",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-auto-update",
          description:
            "Indicate whether Automatic Updates is enabled for the Windows virtual machine",
          args: {
            name: "enable-auto-update",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: [
            "--enable-automatic-zone-balancing",
            "--enable-zone-balancing",
          ],
          description:
            "Specify whether automatic AZ balancing should be enabled on the virtualmachine scale set",
          args: {
            name: "enable-automatic-zone-balancing",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-cross-zone-upgrade",
          description:
            "Set this Boolean property will allow VMSS to ignore AZ boundaries when constructing upgrade batches, and only consider Update Domain and maxBatchInstancePercent to determine the batch size",
          args: {
            name: "enable-cross-zone-upgrade",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-hibernation",
          description:
            "The flag that enable or disable hibernation capability on the VMSS",
          args: {
            name: "enable-hibernation",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-integrity-monitoring",
          description:
            "Enable installing Microsoft propietary and not security supported guest attestation extension and enabling System Assigned Identity for Trusted Launch enabled VMs and VMSS",
        },
        {
          name: "--enable-osimage-notification",
          description:
            "Specify whether the OS Image Scheduled event is enabled or disabled",
          args: {
            name: "enable-osimage-notification",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-proxy-agent",
          description:
            "Specify whether metadata security protoco (proxy agent) feature should be enabled on the virtual machine or virtual machine scale set",
          args: {
            name: "enable-proxy-agent",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--enable-user-reboot-scheduled-events", "--enable-reboot"],
          description:
            "The configuration parameter used while publishing scheduled events additional publishing targets",
          args: {
            name: "enable-user-reboot-scheduled-events",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: [
            "--enable-user-redeploy-scheduled-events",
            "--enable-redeploy",
          ],
          description:
            "The configuration parameter used while creating user initiated redeploy scheduled event setting creation",
          args: {
            name: "enable-user-redeploy-scheduled-events",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-resilient-creation",
          description:
            "Automatically recover customers from OS Provisioning Timeout and VM Start Timeout errors experienced during a VM Create operation by deleting and recreating the affected VM",
          args: {
            name: "enable-resilient-creation",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-resilient-deletion",
          description:
            "Retry VM Delete requests asynchronously in the event of a failed delete operation",
          args: {
            name: "enable-resilient-deletion",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-secure-boot",
          description: "Enable secure boot",
          args: {
            name: "enable-secure-boot",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-spot-restore",
          description:
            "Enable the Spot-Try-Restore feature where evicted VMSS SPOT instances will be tried to be restored opportunistically based on capacity availability and pricing constraints",
          args: {
            name: "enable-spot-restore",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-vtpm",
          description: "Enable vTPM",
          args: {
            name: "enable-vtpm",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--encryption-at-host",
          description:
            "Enable Host Encryption for the VM or VMSS. This will enable the encryption for all the disks including Resource/Temp disk at host itself",
          args: {
            name: "encryption-at-host",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--encryption-identity",
          description:
            "Resource Id of the user managed identity which can be used for Azure disk encryption",
          args: { name: "encryption-identity" },
        },
        {
          name: [
            "--ephemeral-os-disk-enable-full-caching",
            "--ephemeral-full-caching",
          ],
          description:
            "Specify whether or not to enable full caching for this VM/VMSS which will cache the OS disk locally on the host and make this VM/VMSS more resilient to storage outages",
          args: {
            name: "ephemeral-os-disk-enable-full-caching",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--ephemeral-os-disk",
          description:
            "Allows you to create an OS disk directly on the host node, providing local disk performance and faster VM/VMSS reimage time",
          args: {
            name: "ephemeral-os-disk",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--ephemeral-os-disk-placement", "--ephemeral-placement"],
          description:
            "Only applicable when used with --ephemeral-os-disk. Allows you to choose the Ephemeral OS disk provisioning location",
          args: {
            name: "ephemeral-os-disk-placement",
            suggestions: ["CacheDisk", "NvmeDisk", "ResourceDisk"],
          },
        },
        {
          name: "--eviction-policy",
          description:
            "The eviction policy for virtual machines in a Spot priority scale set. Default eviction policy is Deallocate for a Spot priority scale set",
          args: {
            name: "eviction-policy",
            suggestions: ["Deallocate", "Delete"],
          },
        },
        {
          name: [
            "--security-posture-reference-exclude-extensions",
            "--exclude-extensions",
          ],
          description:
            "List of virtual machine extensions to exclude when applying the Security Posture. Either a Json string or a file path is acceptable. Please refer to https://docs.microsoft.com/rest/api/compute/virtualmachinescalesets/get#virtualmachineextension for the data format",
          args: {
            name: "security-posture-reference-exclude-extensions",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "--exclude-zones",
          description:
            "Specify a list of availability zones that must be excluded from placement when --zone-placement-policy is set to Auto. If not specified, no availability zones are excluded",
          args: { name: "exclude-zones", isVariadic: true },
        },
        {
          name: "--generate-ssh-keys",
          description:
            "Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory",
        },
        {
          name: "--health-probe",
          description:
            "Probe name from the existing load balancer, mainly used for rolling upgrade or automatic repairs",
          args: { name: "health-probe" },
        },
        {
          name: "--host-group",
          description:
            "Name or ID of dedicated host group that the virtual machine scale set resides in",
          args: { name: "host-group" },
        },
        {
          name: "--image",
          description:
            'The name of the operating system image as a URN alias, URN, custom image name or ID, or VHD blob URI. In addition, it also supports shared gallery image. Please use the image alias including the version of the distribution you want to use. For example: please use Debian11 instead of Debian.\' This parameter is required unless using --attach-os-disk. Valid URN format: "Publisher:Offer:Sku:Version". For more information, see https://learn.microsoft.com/azure/virtual-machines/linux/cli-ps-findimage',
          args: { name: "image" },
        },
        {
          name: [
            "--imds-access-control-profile-reference-id",
            "--imds-profile-id",
          ],
          description:
            "Specify the access control profile version resource id resource id of imds",
          args: { name: "imds-access-control-profile-reference-id" },
        },
        {
          name: "--imds-mode",
          description:
            "Specify the mode that proxy agent will execute on if the feature is enabled",
          args: { name: "imds-mode", suggestions: ["Audit", "Enforce"] },
        },
        {
          name: "--include-zones",
          description:
            "Specify a list of availability zones that must be considered for placement when --zone-placement-policy is set to Auto. If not specified, all availability zones in the region are considered",
          args: { name: "include-zones", isVariadic: true },
        },
        {
          name: "--instance-count",
          description: "Number of VMs in the scale set",
          args: { name: "instance-count" },
        },
        {
          name: ["--instance-percent-policy", "--ipp"],
          description:
            "Specify whether maximum percentage of virtual machine instances per zone policy should be enabled on the virtual machine scale set",
          args: {
            name: "instance-percent-policy",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: [
            "--security-posture-reference-is-overridable",
            "--is-overridable",
          ],
          description:
            "Whether the security posture can be overridden by the user",
          args: {
            name: "security-posture-reference-is-overridable",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--load-balancer", "--lb"],
          description:
            'Name to use when creating a new load balancer (default) or referencing an existing one. Can also reference an existing load balancer by ID or specify "" for none',
          args: { name: "load-balancer" },
        },
        {
          name: ["--lb-nat-rule-name", "--nat-rule-name"],
          description:
            "Name to use for the NAT rule v2 when creating a new load balancer. (NAT rule V2 is used to replace NAT pool)",
          args: { name: "lb-nat-rule-name" },
        },
        {
          name: "--lb-sku",
          description:
            "Sku of the Load Balancer to create. The public IP is supported to be created on edge zone only when it is 'Standard'",
          args: {
            name: "lb-sku",
            suggestions: ["Basic", "Gateway", "Standard"],
          },
        },
        {
          name: "--license-type",
          description:
            "Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multi-tenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs",
          args: {
            name: "license-type",
            suggestions: [
              "None",
              "RHEL_BASE",
              "RHEL_BASESAPAPPS",
              "RHEL_BASESAPHA",
              "RHEL_BYOS",
              "RHEL_ELS_6",
              "RHEL_EUS",
              "RHEL_SAPAPPS",
              "RHEL_SAPHA",
              "SLES",
              "SLES_BYOS",
              "SLES_HPC",
              "SLES_SAP",
              "SLES_STANDARD",
              "UBUNTU",
              "UBUNTU_PRO",
              "Windows_Client",
              "Windows_Server",
            ],
          },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location in which to create VM and related resources. If default location is not configured, will default to the resource group's location",
          args: { name: "location" },
        },
        {
          name: "--max-batch-instance-percent",
          description:
            "The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. Default: 20%",
          args: { name: "max-batch-instance-percent" },
        },
        {
          name: [
            "--value-max-instance-percent-per-zone",
            "--max-instance-percent",
          ],
          description:
            "Specify the maximum percentage of virtual machine instances that can be allocated to a single availability zone in the virtual machine scale set. Valid values are integers between 1 and 100",
          args: { name: "value-max-instance-percent-per-zone" },
        },
        {
          name: "--max-price",
          description:
            "The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons",
          args: { name: "max-price" },
        },
        {
          name: "--max-surge",
          description:
            "Specify it to create new virtual machines to upgrade the scale set, rather than updating the existing virtual machines",
          args: {
            name: "max-surge",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--max-unhealthy-instance-percent",
          description:
            "The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy. Default: 20%",
          args: { name: "max-unhealthy-instance-percent" },
        },
        {
          name: "--max-unhealthy-upgraded-instance-percent",
          description:
            "The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. Default: 20%",
          args: { name: "max-unhealthy-upgraded-instance-percent" },
        },
        {
          name: "--max-zone-count",
          description:
            "Specify the maximum number of availability zones to use when --zone-placement-policy is set to Auto. If not specified, all available zones in the region may be used",
          args: { name: "max-zone-count" },
        },
        {
          name: "--network-api-version",
          description:
            "Specify the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations for Virtual Machine Scale Set with orchestration mode 'Flexible'. Default value is 2020-11-01",
          args: { name: "network-api-version" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--nsg",
          description: "Name or ID of an existing Network Security Group",
          args: { name: "nsg" },
        },
        {
          name: "--orchestration-mode",
          description:
            "Choose how virtual machines are managed by the scale set. In Uniform mode, you define a virtual machine model and Azure will generate identical instances based on that model. In Flexible mode, you manually create and add a virtual machine of any configuration to the scale set or generate identical instances based on virtual machine model defined for the scale set",
          args: {
            name: "orchestration-mode",
            suggestions: ["Flexible", "Uniform"],
          },
        },
        {
          name: "--os-disk-caching",
          description:
            "Storage caching type for the VM OS disk. Default: ReadWrite",
          args: {
            name: "os-disk-caching",
            suggestions: ["None", "ReadOnly", "ReadWrite"],
          },
        },
        {
          name: "--os-disk-delete-option",
          description:
            "Specify whether OS disk should be deleted or detached upon VMSS Flex deletion (This feature is only for VMSS with flexible orchestration mode)",
          args: {
            name: "os-disk-delete-option",
            suggestions: ["Delete", "Detach"],
          },
        },
        {
          name: "--os-disk-encryption-set",
          description: "Name or ID of disk encryption set for OS disk",
          args: { name: "os-disk-encryption-set" },
        },
        {
          name: ["--os-disk-storage-fd-alignment", "--os-disk-fda"],
          description:
            "Specifies the storage fault domain alignment type for the OS disk. This option is only valid for a single-zone Flexible VMSS and is set at create time. Omit this option to leave the OS disk unaligned",
          args: {
            name: "os-disk-storage-fd-alignment",
            suggestions: ["Aligned", "BestEffortAligned"],
          },
        },
        {
          name: "--os-disk-name",
          description: "The name of the new VM OS disk",
          args: { name: "os-disk-name" },
        },
        {
          name: "--os-disk-secure-vm-disk-encryption-set",
          description:
            "Specify the customer managed disk encryption set resource ID or name for the managed disk that is used for customer managed key encrypted Confidential VM OS disk and VM guest blob",
          args: { name: "os-disk-secure-vm-disk-encryption-set" },
        },
        {
          name: "--os-disk-security-encryption-type",
          description: "Specify the encryption type of the OS managed disk",
          args: {
            name: "os-disk-security-encryption-type",
            suggestions: [
              "DiskWithVMGuestState",
              "NonPersistedTPM",
              "VMGuestStateOnly",
            ],
          },
        },
        {
          name: "--os-disk-size-gb",
          description: "OS disk size in GB to create",
          args: { name: "os-disk-size-gb" },
        },
        {
          name: "--os-type",
          description:
            "Type of OS installed on a custom VHD. Do not use when specifying an URN or URN alias",
          args: { name: "os-type", suggestions: ["linux", "windows"] },
        },
        {
          name: "--patch-mode",
          description:
            "Mode of in-guest patching to IaaS virtual machine. Allowed values for Windows VM: AutomaticByOS, AutomaticByPlatform, Manual. Allowed values for Linux VM: AutomaticByPlatform, ImageDefault. Manual - You control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the paramater --enable-auto-update must be false. AutomaticByOS - The virtual machine will automatically be updated by the OS. The parameter --enable-auto-update must be true. AutomaticByPlatform - the virtual machine will automatically updated by the OS. ImageDefault - The virtual machine's default patching configuration is used. The parameter --enable-agent and --enable-auto-update must be true",
          args: {
            name: "patch-mode",
            suggestions: [
              "AutomaticByOS",
              "AutomaticByPlatform",
              "ImageDefault",
              "Manual",
            ],
          },
        },
        {
          name: "--pause-time-between-batches",
          description:
            "The wait time between completing the update for all virtual machines in one batch and starting the next batch. Default: 0 seconds",
          args: { name: "pause-time-between-batches" },
        },
        {
          name: "--plan-name",
          description: "Plan name",
          args: { name: "plan-name" },
        },
        {
          name: "--plan-product",
          description: "Plan product",
          args: { name: "plan-product" },
        },
        {
          name: "--plan-promotion-code",
          description: "Plan promotion code",
          args: { name: "plan-promotion-code" },
        },
        {
          name: "--plan-publisher",
          description: "Plan publisher",
          args: { name: "plan-publisher" },
        },
        {
          name: "--platform-fault-domain-count",
          description:
            "Fault Domain count for each placement group in the availability zone",
          args: { name: "platform-fault-domain-count" },
        },
        {
          name: "--ppg",
          description:
            "The name or ID of the proximity placement group the VMSS should be associated with",
          args: { name: "ppg" },
        },
        {
          name: "--prioritize-unhealthy-instances",
          description:
            "Set this Boolean property will lead to all unhealthy instances in a scale set getting upgraded before any healthy instances",
          args: {
            name: "prioritize-unhealthy-instances",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--priority",
          description:
            "Priority. Use 'Spot' or 'SpotPlus' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' or 'SpotPlus' to deploy Azure spot VM and/or VMSS. Default to Regular",
          args: {
            name: "priority",
            suggestions: ["Low", "Regular", "Spot", "SpotPlus"],
          },
        },
        {
          name: "--processor-mode",
          description:
            "Specifies the processor mode for the virtual machine or virtual machine scale set. Optional; if omitted, the platform default applies (currently Deterministic). This property can be updated on a running VM or VMSS without deallocation or reboot",
          args: {
            name: "processor-mode",
            suggestions: ["Deterministic", "Opportunistic"],
          },
        },
        {
          name: "--proxy-agent-mode",
          description:
            "Option '--proxy-agent-mode' has been deprecated and will be removed in a future release. Use '--wire-server-mode' instead. Specify the mode that proxy agent will execute on if the feature is enabled",
          args: { name: "proxy-agent-mode", suggestions: ["Audit", "Enforce"] },
        },
        {
          name: "--public-ip-address",
          description:
            "Name of the public IP address when creating one (default) or referencing an existing one. Can also reference an existing public IP by ID or specify \"\" or '' for None ('\"\"' in Azure CLI using PowerShell)",
          args: { name: "public-ip-address" },
        },
        {
          name: "--public-ip-address-allocation",
          args: {
            name: "public-ip-address-allocation",
            suggestions: ["dynamic", "static"],
          },
        },
        {
          name: "--public-ip-address-dns-name",
          description: "Globally unique DNS name for a newly created public IP",
          args: { name: "public-ip-address-dns-name" },
        },
        {
          name: "--public-ip-per-vm",
          description:
            "Each VM instance will have a public ip. For security, you can use '--nsg' to apply appropriate rules",
        },
        {
          name: "--regular-priority-count",
          description:
            "The base number of regular priority VMs that will be created in this scale set as it scales out. Must be greater than 0",
          args: { name: "regular-priority-count" },
        },
        {
          name: "--regular-priority-percentage",
          description:
            "The percentage of VM instances, after the base regular priority count has been reached, that are expected to use regular priority. Must be between 0 and 100",
          args: { name: "regular-priority-percentage" },
        },
        {
          name: "--role",
          description: "Role name or id the system assigned identity will have",
          args: { name: "role" },
        },
        {
          name: "--scale-in-policy",
          description:
            "Specify the scale-in policy (space delimited) that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in",
          args: {
            name: "scale-in-policy",
            suggestions: ["Default", "NewestVM", "OldestVM"],
            isVariadic: true,
          },
        },
        {
          name: ["--scheduled-events-api-version", "--se-api-version"],
          description:
            "Specifies the api-version to determine which Scheduled Events configuration schema version will be delivered",
          args: { name: "scheduled-events-api-version" },
        },
        {
          name: "--scope",
          description: "Scope that the system assigned identity can access",
          args: { name: "scope" },
        },
        {
          name: "--secrets",
          description:
            'One or many Key Vault secrets as JSON strings or files via @{path} containing [{ "sourceVault": { "id": "value" }, "vaultCertificates": [{ "certificateUrl": "value", "certificateStore": "cert store name (only on windows)"}] }]',
          args: { name: "secrets", isVariadic: true },
        },
        {
          name: ["--security-posture-reference-id", "--security-posture-id"],
          description:
            "The security posture reference id in the form of /CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch}|{major.*}|latest",
          args: { name: "security-posture-reference-id" },
        },
        {
          name: "--security-type",
          description:
            "Specify the security type of the virtual machine scale set",
          args: {
            name: "security-type",
            suggestions: ["ConfidentialVM", "Standard", "TrustedLaunch"],
          },
        },
        {
          name: "--single-placement-group",
          description:
            "Limit the scale set to a single placement group. See https://learn.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups for details",
          args: {
            name: "single-placement-group",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--skuprofile-allocation-strategy", "--sku-allocat-strat"],
          description: "Allocation strategy for vm sizes in SKU profile",
          args: {
            name: "skuprofile-allocation-strategy",
            suggestions: ["CapacityOptimized", "LowestPrice", "Prioritized"],
          },
        },
        {
          name: "--skuprofile-rank",
          description:
            "A list for ranks associated with the SKU profile vm sizes",
          args: { name: "skuprofile-rank", isVariadic: true },
        },
        {
          name: "--skuprofile-vmsizes",
          description:
            "A list of VM sizes in the scale set. See https://azure.microsoft.com/pricing/details/virtual-machines/ for size info",
          args: { name: "skuprofile-vmsizes", isVariadic: true },
        },
        {
          name: "--specialized",
          description: "Indicate whether the source image is specialized",
          args: {
            name: "specialized",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--spot-restore-timeout",
          description:
            "Timeout value expressed as an ISO 8601 time duration after which the platform will not try to restore the VMSS SPOT instances",
          args: { name: "spot-restore-timeout" },
        },
        {
          name: "--ssh-dest-key-path",
          description:
            'Destination file path on the VM for the SSH key. If the file already exists, the specified key(s) are appended to the file. Destination path for SSH public keys is currently limited to its default value "/home/username/.ssh/authorized_keys" due to a known issue in Linux provisioning agent',
          args: { name: "ssh-dest-key-path" },
        },
        {
          name: "--ssh-key-type",
          description:
            "Specify the type of SSH public and private key files to be generated if missing",
          args: { name: "ssh-key-type", suggestions: ["Ed25519", "RSA"] },
        },
        {
          name: "--ssh-key-values",
          description:
            "Space-separated list of SSH public keys or public key file paths",
          args: { name: "ssh-key-values", isVariadic: true },
        },
        {
          name: "--storage-container-name",
          description:
            "Only applicable when used with --use-unmanaged-disk. Name of the storage container for the VM OS disk. Default: vhds",
          args: { name: "storage-container-name" },
        },
        {
          name: "--storage-sku",
          description:
            'The SKU of the storage account with which to persist VM. Use a singular sku that would be applied across all disks, or specify individual disks. Usage: [--storage-sku SKU | --storage-sku ID=SKU ID=SKU ID=SKU...], where each ID is "os" or a 0-indexed lun. Allowed values: Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, PremiumV2_LRS',
          args: { name: "storage-sku", isVariadic: true },
        },
        {
          name: "--subnet",
          description:
            "The name of the subnet when creating a new VNet or referencing an existing one. Can also reference an existing subnet by ID. If both vnet-name and subnet are omitted, an appropriate VNet and subnet will be selected automatically, or a new one will be created",
          args: { name: "subnet" },
        },
        {
          name: "--subnet-address-prefix",
          description:
            "The subnet IP address prefix to use when creating a new VNet in CIDR format",
          args: { name: "subnet-address-prefix" },
        },
        {
          name: "--tags",
          description:
            "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
        {
          name: "--terminate-notification-time",
          description:
            "Length of time (in minutes, between 5 and 15) a notification to be sent to the VM on the instance metadata server till the VM gets deleted",
          args: { name: "terminate-notification-time" },
        },
        {
          name: "--ultra-ssd-enabled",
          description:
            "Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account",
          args: {
            name: "ultra-ssd-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--upgrade-policy-mode",
          description:
            "Specify the mode of an upgrade to virtual machines in the scale set",
          args: {
            name: "upgrade-policy-mode",
            suggestions: ["Automatic", "Manual", "Rolling"],
          },
        },
        {
          name: "--use-unmanaged-disk",
          description: "Do not use managed disk to persist VM",
        },
        {
          name: "--user-data",
          description:
            "UserData for the virtual machines in the scale set. It can be passed in as file or string",
          args: { name: "user-data" },
        },
        {
          name: "--v-cpus-available",
          description: "Specify the number of vCPUs available",
          args: { name: "v-cpus-available" },
        },
        {
          name: "--v-cpus-per-core",
          description:
            "Specify the ratio of vCPU to physical core. Setting this property to 1 also means that hyper-threading is disabled",
          args: { name: "v-cpus-per-core" },
        },
        {
          name: "--validate",
          description:
            "Generate and validate the ARM template without creating any resources",
        },
        {
          name: "--vm-domain-name",
          description:
            "Domain name of VM instances, once configured, the FQDN is vm<vm-index>.<vm-domain-name>.<..rest..>",
          args: { name: "vm-domain-name" },
        },
        {
          name: "--vm-sku",
          description:
            'Size of VMs in the scale set. Default to "Standard_D2s_v5". See https://azure.microsoft.com/pricing/details/virtual-machines/ for size info',
          args: { name: "vm-sku" },
        },
        {
          name: "--vnet-address-prefix",
          description:
            "The IP address prefix to use when creating a new VNet in CIDR format",
          args: { name: "vnet-address-prefix" },
        },
        {
          name: "--vnet-name",
          description:
            "Name of the virtual network when creating a new one or referencing an existing one",
          args: { name: "vnet-name" },
        },
        {
          name: ["--wire-server-use-local-file-rules", "--wire-local-rules"],
          description:
            "When set to true, instructs the GuestProxyAgent inside the VM to load additional access control rules defined in a local file on the VM",
          args: {
            name: "wire-server-use-local-file-rules",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: [
            "--wire-server-access-control-profile-reference-id",
            "--wire-server-profile-id",
          ],
          description:
            "Specify the access control profile version resource id of wire server",
          args: { name: "wire-server-access-control-profile-reference-id" },
        },
        {
          name: "--wire-server-mode",
          description:
            "Specify the mode that proxy agent will execute on if the feature is enabled",
          args: { name: "wire-server-mode", suggestions: ["Audit", "Enforce"] },
        },
        {
          name: ["--zonal-fault-domain-align-mode", "--zonal-fda"],
          description:
            "Specifies the alignment mode between Virtual Machine Scale Set compute and storage fault domains. This option is only valid for a single-zone Flexible VMSS",
          args: {
            name: "zonal-fault-domain-align-mode",
            suggestions: ["Aligned", "BestEffortAligned", "Unaligned"],
          },
        },
        {
          name: "--zone-balance",
          description:
            "Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage",
          args: {
            name: "zone-balance",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--zone-placement-policy",
          description:
            "Specify the policy for availability zone placement of the virtual machine scale set. When set to Auto, the platform automatically selects the availability zones",
          args: { name: "zone-placement-policy", suggestions: ["Auto"] },
        },
        {
          name: ["--zones", "-z"],
          description:
            "Space-separated list of availability zones into which to provision the resource",
          args: { name: "zones", isVariadic: true },
        },
      ],
    },
    {
      name: "deallocate",
      description: "Deallocate VMs within a VMSS",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "--hibernate",
          description:
            "Hibernate a virtual machine from the VM scale set. Available for VMSS with Flexible OrchestrationMode only",
          args: {
            name: "hibernate",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--instance-ids",
          description:
            "Space-separated list of IDs (ex: 1 2 3 ...) or * for all instances. If not provided, the action will be applied on the scaleset itself",
          args: { name: "instance-ids", isVariadic: true },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a VM scale set",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--force-deletion",
          description:
            "Optional parameter to force delete a VM scale set. (Feature in Preview)",
          args: {
            name: "force-deletion",
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
          name: ["--vm-scale-set-name", "--name", "-n"],
          description: "The name of the VM scale set",
          args: { name: "vm-scale-set-name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "delete-instances",
      description: "Delete VMs within a VMSS",
      options: [
        {
          name: "--instance-ids",
          description:
            'Space-separated list of IDs (ex: 1 2 3 ...) or * for all instances. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "instance-ids", isVariadic: true },
          isRequired: true,
        },
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
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "get-instance-view",
      description: "View an instance of a VMSS",
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
          name: "--instance-id",
          description:
            'A VM instance ID or "*" to list instance view for all VMs in a scale set',
          args: { name: "instance-id" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
      name: "get-os-upgrade-history",
      description: "List the OS upgrades on a VM scale set instance",
      options: [
        {
          name: ["--vm-scale-set-name", "--name", "-n"],
          description: "The name of the VM scale set",
          args: { name: "vm-scale-set-name" },
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
      name: "get-resiliency-view",
      description: "View the resiliency status of a VMSS instance",
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
          name: "--instance",
          description: "The instance ID of the virtual machine",
          args: { name: "instance" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the VM scale set",
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
      name: "list",
      description: "List all VM scale sets under a resource group",
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
      name: "list-instance-connection-info",
      description:
        "Get the IP address and port number used to connect to individual VM instances within a set",
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
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
      name: "list-instance-public-ips",
      description: "List public IP addresses of VM instances within a set",
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
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
      name: "list-instances",
      description: "List all virtual machines in a VM scale sets",
      options: [
        {
          name: ["--virtual-machine-scale-set-name", "--name", "-n"],
          description: "The name of the VM scale set",
          args: { name: "virtual-machine-scale-set-name" },
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
          name: "--expand",
          description:
            "The expand expression to apply to the operation. Allowed values are 'instanceView'",
          args: { name: "expand" },
        },
        {
          name: "--filter",
          description:
            "The filter to apply to the operation. Allowed values are 'startswith(instanceView/statuses/code, 'PowerState') eq true', 'properties/latestModelApplied eq true', 'properties/latestModelApplied eq false'",
          args: { name: "filter" },
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
          name: "--resiliency-view",
          description: "Show resiliency status of each instance",
        },
        {
          name: "--select",
          description:
            "The list parameters. Allowed values are 'instanceView', 'instanceView/statuses'",
          args: { name: "select" },
        },
      ],
    },
    {
      name: "list-skus",
      description:
        "List SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU",
      options: [
        {
          name: ["--vm-scale-set-name", "--name", "-n"],
          description: "The name of the VM scale set",
          args: { name: "vm-scale-set-name" },
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
      name: "perform-maintenance",
      description:
        "Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which are not eligible for perform maintenance will be failed. Please refer to best practices for more details: https://learn.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications",
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
          name: "--instance-ids",
          description:
            'The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "instance-ids", isVariadic: true },
        },
        {
          name: ["--vm-scale-set-name", "--name", "-n"],
          description: "The name of the VM scale set",
          args: { name: "vm-scale-set-name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "reimage",
      description: "Reimage VMs within a VMSS",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: ["--force-update-os-disk-for-ephemeral", "--update-os-disk"],
          description:
            "Force update ephemeral OS disk for a virtual machine scale set VM",
          args: {
            name: "force-update-os-disk-for-ephemeral",
            suggestions: ["false", "true"],
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
          name: "--instance-ids",
          description:
            "Space-separated list of VM instance ID. If missing, reimage all instances",
          args: { name: "instance-ids", isVariadic: true },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "restart",
      description: "Restart VMs within a VMSS",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "--instance-ids",
          description:
            "Space-separated list of IDs (ex: 1 2 3 ...) or * for all instances. If not provided, the action will be applied on the scaleset itself",
          args: { name: "instance-ids", isVariadic: true },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "scale",
      description: "Change the number of VMs within a VMSS",
      options: [
        {
          name: "--new-capacity",
          description: "Number of VMs in the VMSS",
          args: { name: "new-capacity" },
          isRequired: true,
        },
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
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "set-orchestration-service-state",
      description:
        "Change ServiceState property for a given service within a VMSS",
      options: [
        {
          name: "--action",
          description: "The action to be performed",
          args: { name: "action", suggestions: ["Resume", "Suspend"] },
          isRequired: true,
        },
        {
          name: "--service-name",
          description: "The name of the orchestration service",
          args: { name: "service-name", suggestions: ["AutomaticRepairs"] },
          isRequired: true,
        },
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
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      description: "Get details on VMs within a VMSS",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: ["--include-user-data", "-u"],
          description: "Include the user data properties in the query result",
        },
        {
          name: "--instance-id",
          description: "VM instance ID. If missing, show the VMSS",
          args: { name: "instance-id" },
        },
      ],
    },
    {
      name: "simulate-eviction",
      description:
        "Simulate the eviction of a Spot virtual machine in a VM scale set",
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
          name: "--instance-id",
          description: "The instance ID of the virtual machine",
          args: { name: "instance-id" },
        },
        {
          name: ["--vm-scale-set-name", "--name", "-n"],
          description: "The name of the VM scale set",
          args: { name: "vm-scale-set-name" },
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
      name: "start",
      description: "Start VMs within a VMSS",
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
          name: "--instance-ids",
          description:
            'Space-separated list of IDs (ex: 1 2 3 ...) or * for all instances. If not provided, the action will be applied on the scaleset itself. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "instance-ids", isVariadic: true },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "stop",
      description: "Power off (stop) VMs within a VMSS",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "--instance-ids",
          description:
            "Space-separated list of IDs (ex: 1 2 3 ...) or * for all instances. If not provided, the action will be applied on the scaleset itself",
          args: { name: "instance-ids", isVariadic: true },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--skip-shutdown",
          description: "Skip shutdown and power-off immediately",
        },
      ],
    },
    {
      name: "update",
      description:
        "Update a VMSS. Run 'az vmss update-instances' command to roll out the changes to VMs if you have not configured upgrade policy",
      options: [
        acquirePolicyToken,
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add", isVariadic: true },
        },
        {
          name: ["--add-proxy-agent-extension", "--add-proxy-agent-ext"],
          description:
            "Specify whether to implicitly install the ProxyAgent Extension. This option is currently applicable only for Linux OS. Use with --enable-proxy-agent",
          args: {
            name: "add-proxy-agent-extension",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--additional-scheduled-events", "--additional-events"],
          description:
            "The configuration parameter used while creating event grid and resource graph scheduled event setting",
          args: {
            name: "additional-scheduled-events",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--enable-all-instance-down", "--all-instance-down"],
          description:
            "Specifies if Scheduled Events should be auto-approved when all instances are down. Its default value is true",
          args: {
            name: "enable-all-instance-down",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--automatic-repairs-action",
          description:
            "Type of repair action that will be used for repairing unhealthy virtual machines in the scale set",
          args: {
            name: "automatic-repairs-action",
            suggestions: ["Reimage", "Replace", "Restart"],
          },
        },
        {
          name: "--automatic-repairs-grace-period",
          description:
            "The amount of time (in minutes, between 30 and 90) for which automatic repairs are suspended due to a state change on VM",
          args: { name: "automatic-repairs-grace-period" },
        },
        {
          name: ["--automatic-zone-balancing-behavior", "--balancing-behavior"],
          description:
            "Type of rebalance behavior that will be used for recreating virtualmachines in the scale set across availability zones",
          args: {
            name: "automatic-zone-balancing-behavior",
            suggestions: ["CreateBeforeDelete"],
          },
        },
        {
          name: ["--automatic-zone-balancing-strategy", "--balancing-strategy"],
          description:
            "Type of rebalance strategy that will be used for rebalancing virtualmachines in the scale set across availability zones",
          args: {
            name: "automatic-zone-balancing-strategy",
            suggestions: ["Recreate"],
          },
        },
        {
          name: ["--capacity-reservation-group", "--crg"],
          description:
            'The ID or name of the capacity reservation group that is used to allocate. Pass in "None" to disassociate the capacity reservation group. Please note that if you want to delete a VM/VMSS that has been associated with capacity reservation group, you need to disassociate the capacity reservation group first',
          args: { name: "capacity-reservation-group" },
        },
        changeReference,
        {
          name: "--custom-data",
          description:
            "Custom init script file or text (cloud-init, cloud-config, etc..)",
          args: { name: "custom-data" },
        },
        {
          name: [
            "--disable-capacity-reservation-assignment",
            "--no-cap-reservation",
          ],
          description:
            "Specifies whether the virtual machine scale set is explicitly opted out from being associated with any capacity reservation. When set to true, its virtual machines will not be allowed to implicitly or explicitly associate with any type of capacity reservation and will consume publicly available capacity. This option applies to the parent VMSS only",
          args: {
            name: "disable-capacity-reservation-assignment",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--disk-controller-type",
          description:
            "Specify the disk controller type configured for the VM or VMSS",
          args: { name: "disk-controller-type", suggestions: ["NVMe", "SCSI"] },
        },
        {
          name: "--enable-auto-os-upgrade",
          description:
            "Indicate whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available",
          args: {
            name: "enable-auto-os-upgrade",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-automatic-repairs",
          description: "Enable automatic repairs",
          args: {
            name: "enable-automatic-repairs",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: [
            "--enable-automatic-zone-balancing",
            "--enable-zone-balancing",
          ],
          description:
            "Specify whether automatic AZ balancing should be enabled on the virtualmachine scale set",
          args: {
            name: "enable-automatic-zone-balancing",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-cross-zone-upgrade",
          description:
            "Set this Boolean property will allow VMSS to ignore AZ boundaries when constructing upgrade batches, and only consider Update Domain and maxBatchInstancePercent to determine the batch size",
          args: {
            name: "enable-cross-zone-upgrade",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-hibernation",
          description:
            "The flag that enable or disable hibernation capability on the VMSS",
          args: {
            name: "enable-hibernation",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-osimage-notification",
          description:
            "Specify whether the OS Image Scheduled event is enabled or disabled",
          args: {
            name: "enable-osimage-notification",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-proxy-agent",
          description:
            "Specify whether metadata security protoco (proxy agent) feature should be enabled on the virtual machine or virtual machine scale set",
          args: {
            name: "enable-proxy-agent",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--enable-user-reboot-scheduled-events", "--enable-reboot"],
          description:
            "The configuration parameter used while publishing scheduled events additional publishing targets",
          args: {
            name: "enable-user-reboot-scheduled-events",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: [
            "--enable-user-redeploy-scheduled-events",
            "--enable-redeploy",
          ],
          description:
            "The configuration parameter used while creating user initiated redeploy scheduled event setting creation",
          args: {
            name: "enable-user-redeploy-scheduled-events",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-resilient-creation",
          description:
            "Automatically recover customers from OS Provisioning Timeout and VM Start Timeout errors experienced during a VM Create operation by deleting and recreating the affected VM",
          args: {
            name: "enable-resilient-creation",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-resilient-deletion",
          description:
            "Retry VM Delete requests asynchronously in the event of a failed delete operation",
          args: {
            name: "enable-resilient-deletion",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-secure-boot",
          description: "Enable secure boot",
          args: {
            name: "enable-secure-boot",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-spot-restore",
          description:
            "Enable the Spot-Try-Restore feature where evicted VMSS SPOT instances will be tried to be restored opportunistically based on capacity availability and pricing constraints",
          args: {
            name: "enable-spot-restore",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-terminate-notification",
          description: "Enable terminate notification",
          args: {
            name: "enable-terminate-notification",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-vtpm",
          description: "Enable vTPM",
          args: {
            name: "enable-vtpm",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--ephemeral-os-disk-option", "--ephemeral-option"],
          description:
            "Specify the ephemeral disk settings for operating system disk",
          args: { name: "ephemeral-os-disk-option", suggestions: ["Local"] },
        },
        {
          name: "--ephemeral-os-disk",
          description:
            "Allow you to specify the ephemeral disk settings for the operating system disk. Specify it to false to set ephemeral disk setting as empty and migrate it to non ephemeral",
          args: {
            name: "ephemeral-os-disk",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--ephemeral-os-disk-placement", "--ephemeral-placement"],
          description:
            "Only applicable when used with --vm-sku. Allows you to choose the Ephemeral OS disk provisioning location",
          args: {
            name: "ephemeral-os-disk-placement",
            suggestions: ["CacheDisk", "NvmeDisk", "ResourceDisk"],
          },
        },
        {
          name: [
            "--security-posture-reference-exclude-extensions",
            "--exclude-extensions",
          ],
          description:
            "List of virtual machine extensions to exclude when applying the Security Posture. Either a Json string or a file path is acceptable. Please refer to https://docs.microsoft.com/rest/api/compute/virtualmachinescalesets/get#virtualmachineextension for the data format",
          args: {
            name: "security-posture-reference-exclude-extensions",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "--exclude-zones",
          description:
            "Specify a list of availability zones that must be excluded from placement when --zone-placement-policy is set to Auto. If not specified, no availability zones are excluded",
          args: { name: "exclude-zones", isVariadic: true },
        },
        {
          name: "--force-deletion",
          description:
            "This property allow you to specify if virtual machines chosen for removal have to be force deleted when a virtual machine scale set is being scaled-in",
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: [
            "--imds-access-control-profile-reference-id",
            "--imds-profile-id",
          ],
          description:
            "Specify the access control profile version resource id resource id of imds",
          args: { name: "imds-access-control-profile-reference-id" },
        },
        {
          name: "--imds-mode",
          description:
            "Specify the mode that proxy agent will execute on if the feature is enabled",
          args: { name: "imds-mode", suggestions: ["Audit", "Enforce"] },
        },
        {
          name: "--include-zones",
          description:
            "Specify a list of availability zones that must be considered for placement when --zone-placement-policy is set to Auto. If not specified, all availability zones in the region are considered",
          args: { name: "include-zones", isVariadic: true },
        },
        {
          name: "--instance-id",
          description:
            "Update the VM instance with this ID. If missing, update the VMSS",
          args: { name: "instance-id" },
        },
        {
          name: ["--instance-percent-policy", "--ipp"],
          description:
            "Specify whether maximum percentage of virtual machine instances per zone policy should be enabled on the virtual machine scale set",
          args: {
            name: "instance-percent-policy",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: [
            "--security-posture-reference-is-overridable",
            "--is-overridable",
          ],
          description:
            "Whether the security posture can be overridden by the user",
          args: {
            name: "security-posture-reference-is-overridable",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--license-type",
          description:
            "Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multi-tenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs",
          args: {
            name: "license-type",
            suggestions: [
              "None",
              "RHEL_BASE",
              "RHEL_BASESAPAPPS",
              "RHEL_BASESAPHA",
              "RHEL_BYOS",
              "RHEL_ELS_6",
              "RHEL_EUS",
              "RHEL_SAPAPPS",
              "RHEL_SAPHA",
              "SLES",
              "SLES_BYOS",
              "SLES_HPC",
              "SLES_SAP",
              "SLES_STANDARD",
              "UBUNTU",
              "UBUNTU_PRO",
              "Windows_Client",
              "Windows_Server",
            ],
          },
        },
        {
          name: "--max-batch-instance-percent",
          description:
            "The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. Default: 20%",
          args: { name: "max-batch-instance-percent" },
        },
        {
          name: [
            "--value-max-instance-percent-per-zone",
            "--max-instance-percent",
          ],
          description:
            "Specify the maximum percentage of virtual machine instances that can be allocated to a single availability zone in the virtual machine scale set. Valid values are integers between 1 and 100",
          args: { name: "value-max-instance-percent-per-zone" },
        },
        {
          name: "--max-price",
          description:
            "The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons",
          args: { name: "max-price" },
        },
        {
          name: "--max-surge",
          description:
            "Specify it to create new virtual machines to upgrade the scale set, rather than updating the existing virtual machines",
          args: {
            name: "max-surge",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--max-unhealthy-instance-percent",
          description:
            "The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy. Default: 20%",
          args: { name: "max-unhealthy-instance-percent" },
        },
        {
          name: "--max-unhealthy-upgraded-instance-percent",
          description:
            "The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. Default: 20%",
          args: { name: "max-unhealthy-upgraded-instance-percent" },
        },
        {
          name: "--max-zone-count",
          description:
            "Specify the maximum number of availability zones to use for this scale set. This setting is only honored for scale sets that use automatic zone placement. If not specified, all available zones in the region may be used",
          args: { name: "max-zone-count" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--pause-time-between-batches",
          description:
            "The wait time between completing the update for all virtual machines in one batch and starting the next batch. Default: 0 seconds",
          args: { name: "pause-time-between-batches" },
        },
        {
          name: "--ppg",
          description:
            "The name or ID of the proximity placement group the VMSS should be associated with",
          args: { name: "ppg" },
        },
        {
          name: "--prioritize-unhealthy-instances",
          description:
            "Set this Boolean property will lead to all unhealthy instances in a scale set getting upgraded before any healthy instances",
          args: {
            name: "prioritize-unhealthy-instances",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--priority",
          description:
            "Priority. Use 'Spot' or 'SpotPlus' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' or 'SpotPlus' to deploy Azure spot VM and/or VMSS. Default to Regular",
          args: {
            name: "priority",
            suggestions: ["Low", "Regular", "Spot", "SpotPlus"],
          },
        },
        {
          name: "--processor-mode",
          description:
            "Specifies the processor mode for the virtual machine or virtual machine scale set. Optional; if omitted, the platform default applies (currently Deterministic). This property can be updated on a running VM or VMSS without deallocation or reboot",
          args: {
            name: "processor-mode",
            suggestions: ["Deterministic", "Opportunistic"],
          },
        },
        {
          name: "--protect-from-scale-in",
          description: "Protect the VM instance from scale-in operations",
          args: {
            name: "protect-from-scale-in",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--protect-from-scale-set-actions",
          description:
            "Protect the VM instance from scale set actions (including scale-in)",
          args: {
            name: "protect-from-scale-set-actions",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--proxy-agent-mode",
          description:
            "Option '--proxy-agent-mode' has been deprecated and will be removed in a future release. Use '--wire-server-mode' instead. Specify the mode that proxy agent will execute on if the feature is enabled",
          args: { name: "proxy-agent-mode", suggestions: ["Audit", "Enforce"] },
        },
        {
          name: "--regular-priority-count",
          description:
            "The base number of regular priority VMs that will be created in this scale set as it scales out. Must be greater than 0",
          args: { name: "regular-priority-count" },
        },
        {
          name: "--regular-priority-percentage",
          description:
            "The percentage of VM instances, after the base regular priority count has been reached, that are expected to use regular priority. Must be between 0 and 100",
          args: { name: "regular-priority-percentage" },
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
          name: "--scale-in-policy",
          description:
            "Specify the scale-in policy (space delimited) that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in",
          args: {
            name: "scale-in-policy",
            suggestions: ["Default", "NewestVM", "OldestVM"],
            isVariadic: true,
          },
        },
        {
          name: ["--scheduled-events-api-version", "--se-api-version"],
          description:
            "Specifies the api-version to determine which Scheduled Events configuration schema version will be delivered",
          args: { name: "scheduled-events-api-version" },
        },
        {
          name: ["--security-posture-reference-id", "--security-posture-id"],
          description:
            "The security posture reference id in the form of /CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch}|{major.*}|latest",
          args: { name: "security-posture-reference-id" },
        },
        {
          name: "--security-type",
          description:
            "Specify the security type of the virtual machine scale set",
          args: {
            name: "security-type",
            suggestions: ["ConfidentialVM", "Standard", "TrustedLaunch"],
          },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
          args: { name: "set", isVariadic: true },
        },
        {
          name: ["--skuprofile-allocation-strategy", "--sku-allocat-strat"],
          description: "Allocation strategy for vm sizes in SKU profile",
          args: {
            name: "skuprofile-allocation-strategy",
            suggestions: ["CapacityOptimized", "LowestPrice", "Prioritized"],
          },
        },
        {
          name: "--skuprofile-rank",
          description:
            "A list for ranks associated with the SKU profile vm sizes",
          args: { name: "skuprofile-rank", isVariadic: true },
        },
        {
          name: "--skuprofile-vmsizes",
          description:
            "A list of VM sizes in the scale set. See https://azure.microsoft.com/pricing/details/virtual-machines/ for size info",
          args: { name: "skuprofile-vmsizes", isVariadic: true },
        },
        {
          name: "--spot-restore-timeout",
          description:
            "Timeout value expressed as an ISO 8601 time duration after which the platform will not try to restore the VMSS SPOT instances",
          args: { name: "spot-restore-timeout" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: "--terminate-notification-time",
          description:
            "Length of time (in minutes, between 5 and 15) a notification to be sent to the VM on the instance metadata server till the VM gets deleted",
          args: { name: "terminate-notification-time" },
        },
        {
          name: "--ultra-ssd-enabled",
          description:
            "Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account",
          args: {
            name: "ultra-ssd-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--upgrade-policy-mode",
          description:
            "Specify the mode of an upgrade to virtual machines in the scale set",
          args: {
            name: "upgrade-policy-mode",
            suggestions: ["Automatic", "Manual", "Rolling"],
          },
        },
        {
          name: "--user-data",
          description:
            "UserData for the virtual machines in the scale set. It can be passed in as file or string. If empty string is passed in, the existing value will be deleted",
          args: { name: "user-data" },
        },
        {
          name: "--v-cpus-available",
          description: "Specify the number of vCPUs available",
          args: { name: "v-cpus-available" },
        },
        {
          name: "--v-cpus-per-core",
          description:
            "Specify the ratio of vCPU to physical core. Setting this property to 1 also means that hyper-threading is disabled",
          args: { name: "v-cpus-per-core" },
        },
        {
          name: "--vm-sku",
          description:
            'The new size of the virtual machine instances in the scale set. Default to "Standard_D2s_v5". See https://azure.microsoft.com/pricing/details/virtual-machines/ for size info',
          args: { name: "vm-sku" },
        },
        {
          name: ["--wire-server-use-local-file-rules", "--wire-local-rules"],
          description:
            "When set to true, instructs the GuestProxyAgent inside the VM to load additional access control rules defined in a local file on the VM",
          args: {
            name: "wire-server-use-local-file-rules",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: [
            "--wire-server-access-control-profile-reference-id",
            "--wire-server-profile-id",
          ],
          description:
            "Specify the access control profile version resource id of wire server",
          args: { name: "wire-server-access-control-profile-reference-id" },
        },
        {
          name: "--wire-server-mode",
          description:
            "Specify the mode that proxy agent will execute on if the feature is enabled",
          args: { name: "wire-server-mode", suggestions: ["Audit", "Enforce"] },
        },
        {
          name: "--zone-balance",
          description:
            "Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage",
          args: {
            name: "zone-balance",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--zone-placement-policy",
          description:
            "Specify the policy for availability zone placement of the virtual machine scale set. When set to Auto, the platform automatically selects the availability zones",
          args: { name: "zone-placement-policy", suggestions: ["Auto"] },
        },
        {
          name: ["--zones", "-z"],
          description:
            "Space-separated list of availability zones into which to provision the resource",
          args: { name: "zones", isVariadic: true },
        },
      ],
    },
    {
      name: "update-domain-walk",
      description:
        "Manual platform update domain walk to update virtual machines in a service fabric virtual machine scale set",
      options: [
        {
          name: "--platform-update-domain",
          description:
            "The platform update domain for which a manual recovery walk is requested",
          args: { name: "platform-update-domain" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: "--placement-group-id",
          description:
            "The placement group id for which the manual recovery walk is requested",
          args: { name: "placement-group-id" },
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
          name: "--vmss-name",
          description: "The name of the VM scale set",
          args: { name: "vmss-name" },
        },
        {
          name: "--zone",
          description:
            "The zone in which the manual recovery walk is requested for cross zone virtual machine scale set",
          args: { name: "zone" },
        },
      ],
    },
    {
      name: "update-instances",
      description: "Upgrade VMs within a VMSS",
      options: [
        {
          name: "--instance-ids",
          description:
            "Space-separated list of IDs (ex: 1 2 3 ...) or * for all instances",
          args: { name: "instance-ids", isVariadic: true },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of a scale set is met",
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
        { name: "--exists", description: "Wait until the resource exists" },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: "--instance-id",
          description:
            "Wait on the VM instance with this ID. If missing, wait on the VMSS",
          args: { name: "instance-id" },
        },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
      name: "application",
      description: "Manage applications for VM scale set",
      subcommands: [
        {
          name: "list",
          description: "List applications for VMSS",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "set",
          description: "Set applications for VMSS",
          options: [
            {
              name: "--app-version-ids",
              description:
                "Space-separated application version ids to set to VM",
              args: {
                name: "app-version-ids",
                isOptional: true,
                isVariadic: true,
              },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--app-config-overrides",
              description:
                "Space-separated application configuration overrides for each application version ids. It should have the same number of items as the application version ids. Null is available for a application which does not have a configuration override",
              args: {
                name: "app-config-overrides",
                isOptional: true,
                isVariadic: true,
              },
            },
            changeReference,
            {
              name: ["--enable-automatic-upgrade", "--enable-auto-upgrade"],
              description:
                "Space-separated list of true or false corresponding to the application version ids. If set to true, when a new Gallery Application version is available in PIR/SIG, it will be automatically updated for the VM/VMSS",
              args: {
                name: "enable-automatic-upgrade",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "name" },
            },
            {
              name: "--order-applications",
              description:
                "Whether to set order index at each gallery application. If specified, the first app version id gets specified an order = 1, then the next one 2, and so on. This parameter is meant to be used when the VMApplications specified by app version ids must be installed in a particular order; the lowest order is installed first",
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
              name: "--treat-deployment-as-failure",
              description:
                "Space-separated list of true or false corresponding to the application version ids. If set to true, failure to install or update gallery application version operation will fail this operation",
              args: {
                name: "treat-deployment-as-failure",
                isOptional: true,
                isVariadic: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "diagnostics",
      description:
        "Configure the Azure Virtual Machine Scale Set diagnostics extension",
      subcommands: [
        {
          name: "get-default-config",
          description:
            "Show the default config file which defines data to be collected",
          options: [
            acquirePolicyToken,
            changeReference,
            { name: "--is-windows-os", description: "For Windows VMs" },
          ],
        },
        {
          name: "set",
          description: "Enable diagnostics on a VMSS",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--settings",
              description:
                "Json string or a file path, which defines data to be collected",
              args: { name: "settings" },
              isRequired: true,
            },
            {
              name: "--vmss-name",
              description: "Scale set name",
              args: { name: "vmss-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--no-auto-upgrade-minor-version", "--no-auto-upgrade"],
              description:
                "If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed",
              args: {
                name: "no-auto-upgrade-minor-version",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--protected-settings",
              description:
                "Json string or a file path containing private configurations such as storage account keys, etc",
              args: { name: "protected-settings" },
            },
            {
              name: "--version",
              description:
                "Version of the diagnostics extension. Will use the latest if not specfied",
              args: { name: "version" },
            },
          ],
        },
      ],
    },
    {
      name: "disk",
      description: "Manage data disks of a VMSS",
      subcommands: [
        {
          name: "attach",
          description:
            "Attach managed data disks to a scale set or its instances",
          options: [
            acquirePolicyToken,
            {
              name: "--caching",
              description: "Disk caching policy",
              args: {
                name: "caching",
                suggestions: ["None", "ReadOnly", "ReadWrite"],
              },
            },
            changeReference,
            {
              name: "--disk",
              description:
                "Existing disk name or ID to attach or detach from VM instances",
              args: { name: "disk" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--instance-id",
              description: "Scale set VM instance id",
              args: { name: "instance-id" },
            },
            {
              name: "--lun",
              description:
                "0-based logical unit number (LUN). Max value depends on the Virtual Machine instance size",
              args: { name: "lun" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--size-gb", "-z"],
              description:
                "Size in GB. Max size: 4095 GB (certain preview disks can be larger)",
              args: { name: "size-gb" },
            },
            {
              name: "--sku",
              description: "Underlying storage SKU",
              args: {
                name: "sku",
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vmss-name",
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "vmss-name" },
            },
          ],
        },
        {
          name: "detach",
          description:
            "Detach managed data disks from a scale set or its instances",
          options: [
            {
              name: "--lun",
              description:
                "0-based logical unit number (LUN). Max value depends on the Virtual Machine instance size",
              args: { name: "lun" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--instance-id",
              description: "Scale set VM instance id",
              args: { name: "instance-id" },
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
              name: "--vmss-name",
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "vmss-name" },
            },
          ],
        },
      ],
    },
    {
      name: "encryption",
      description: "Manage encryption of VMSS",
      subcommands: [
        {
          name: "disable",
          description: "Disable the encryption on a VMSS with managed disks",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--force",
              description: "Continue by ignoring client side validation errors",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
              name: "--volume-type",
              description:
                "Type of volume that the encryption operation is performed on",
              args: { name: "volume-type", suggestions: ["ALL", "DATA", "OS"] },
            },
          ],
        },
        {
          name: "enable",
          description: "Encrypt a VMSS with managed disks",
          options: [
            {
              name: "--disk-encryption-keyvault",
              description:
                "Name or ID of the key vault where the generated encryption key will be placed",
              args: { name: "disk-encryption-keyvault" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--encryption-identity",
              description:
                "Resource Id of the user managed identity which can be used for Azure disk encryption",
              args: { name: "encryption-identity" },
            },
            {
              name: "--force",
              description: "Continue by ignoring client side validation errors",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--key-encryption-algorithm",
              args: { name: "key-encryption-algorithm" },
            },
            {
              name: "--key-encryption-key",
              description:
                "Key vault key name or URL used to encrypt the disk encryption key",
              args: { name: "key-encryption-key" },
            },
            {
              name: "--key-encryption-keyvault",
              description:
                "Name or ID of the key vault containing the key encryption key used to encrypt the disk encryption key. If missing, CLI will use --disk-encryption-keyvault",
              args: { name: "key-encryption-keyvault" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
              name: "--volume-type",
              description:
                "Type of volume that the encryption operation is performed on",
              args: { name: "volume-type", suggestions: ["ALL", "DATA", "OS"] },
            },
          ],
        },
        {
          name: "show",
          description: "Show encryption status",
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
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
      ],
    },
    {
      name: "extension",
      description: "Manage extensions on a VM scale set",
      subcommands: [
        {
          name: "delete",
          description: "Delete an extension from a VMSS",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the extension",
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
              name: "--vmss-name",
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "vmss-name" },
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
          name: "list",
          description: "List extensions associated with a VMSS",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vmss-name",
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "vmss-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "set",
          description:
            "Add an extension to a VMSS or update an existing extension",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the extension",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--publisher",
              description: "The name of the extension publisher",
              args: { name: "publisher" },
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
              name: "--vmss-name",
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "vmss-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--enable-auto-upgrade",
              description:
                "Indicate the extension should be automatically upgraded by the platform if there is a newer version of the extension available",
              args: {
                name: "enable-auto-upgrade",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--extension-instance-name",
              description:
                "Name of extension instance, which can be customized. Default: name of the extension",
              args: { name: "extension-instance-name" },
            },
            {
              name: "--force-update",
              description:
                "Force to update even if the extension configuration has not changed",
            },
            {
              name: ["--no-auto-upgrade-minor-version", "--no-auto-upgrade"],
              description:
                "If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed",
              args: {
                name: "no-auto-upgrade-minor-version",
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
              name: "--protected-settings",
              description:
                "Protected settings in JSON format for sensitive information like credentials. A JSON file path is also accepted",
              args: { name: "protected-settings" },
            },
            {
              name: "--provision-after-extensions",
              description:
                "Space-separated list of extension names after which this extension should be provisioned. These extensions must already be set on the vm",
              args: { name: "provision-after-extensions", isVariadic: true },
            },
            {
              name: "--settings",
              description:
                "Extension settings in JSON format. A JSON file path is also accepted",
              args: { name: "settings" },
            },
            {
              name: "--version",
              description:
                "The version of the extension. To pin extension version to this value, please specify --no-auto-upgrade-minor-version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details on a VMSS extension",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the extension",
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
              name: "--vmss-name",
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "vmss-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "upgrade",
          description:
            "Upgrade all extensions for all VMSS instances to the latest version",
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
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "image",
          description:
            "Find the available VM extensions for a subscription and region",
          subcommands: [
            {
              name: "list",
              description: "List the information on available extensions",
              options: [
                {
                  name: "--latest",
                  description: "Show the latest version only",
                },
                {
                  name: ["--location", "-l"],
                  description: "Image location",
                  args: { name: "location" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Image name",
                  args: { name: "name" },
                },
                {
                  name: ["--publisher", "-p"],
                  description: "Image publisher name",
                  args: { name: "publisher" },
                },
                {
                  name: "--version",
                  description: "Extension version",
                  args: { name: "version" },
                },
              ],
            },
            {
              name: "list-names",
              description: "List virtual machine extension image types",
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
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: ["--publisher-name", "--publisher", "-p"],
                  description: "Image publisher name",
                  args: { name: "publisher-name" },
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
              name: "list-versions",
              description: "List the versions for available extensions",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--expand",
                  description:
                    "Expand the response to include additional read-only metadata. Allowed values: properties — returns extended metadata (releaseCategory, urgencyLevel, runProfile)",
                  args: { name: "expand", suggestions: ["properties"] },
                },
                {
                  name: "--filter",
                  description:
                    "The filter to apply on the operation. Default value is None",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: ["--name", "--type", "-n"],
                  description: "Name of the extension",
                  args: { name: "name" },
                },
                {
                  name: "--orderby",
                  description: "The $orderby odata query option",
                  args: { name: "orderby" },
                },
                {
                  name: ["--publisher-name", "--publisher", "-p"],
                  description: "Image publisher name",
                  args: { name: "publisher-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "The $top odata query option",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Display information for an extension",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: ["--name", "--type", "-n"],
                  description: "Name of the extension",
                  args: { name: "name" },
                },
                {
                  name: ["--publisher-name", "--publisher", "-p"],
                  description: "Image publisher name",
                  args: { name: "publisher-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--version",
                  description: "Extension version",
                  args: { name: "version" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description: "Manage service identities of a VM scaleset",
      subcommands: [
        {
          name: "assign",
          description: "Enable managed service identity on a VMSS",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--identities",
              description:
                "Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities", isOptional: true, isVariadic: true },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description:
                "Role name or id the system assigned identity will have",
              args: { name: "role" },
            },
            {
              name: "--scope",
              description: "Scope that the system assigned identity can access",
              args: { name: "scope" },
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
          name: "remove",
          description: "Remove user assigned identities from a VM scaleset",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--identities",
              description:
                "Space-separated identities to remove. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities", isVariadic: true },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "show",
          description: "Display VM scaleset's managed identity info",
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
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
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
      ],
    },
    {
      name: "lifecycle-hook",
      description:
        "Manage lifecycle hooks on a Virtual Machine Scale Set (preview)",
      subcommands: [
        {
          name: "add",
          description: "Add a lifecycle hook to a VMSS",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Specifies the type of the lifecycle hook",
              args: {
                name: "type",
                suggestions: [
                  "UpgradeAutoOSRollingBatchStarting",
                  "UpgradeAutoOSScheduling",
                ],
              },
              isRequired: true,
            },
            {
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--default-action",
              description:
                "Specifies the action that will be applied to a target resource in the virtual machine scale set lifecycle hook event if the platform does not receive a response from the customer for the target resource before waitUntil",
              args: {
                name: "default-action",
                suggestions: ["Approve", "Reject"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--wait-duration",
              description:
                "Specifies the time duration a virtual machine scale set lifecycle hook event sent to the customer waits for a response from the customer. It should be in ISO 8601 format",
              args: { name: "wait-duration" },
            },
          ],
        },
        {
          name: "list",
          description: "List all lifecycle hooks on a VMSS",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove one lifecycle hook (--type) or all lifecycle hooks (--all) from a VMSS",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--all",
              description:
                "Remove all lifecycle hooks. Mutually exclusive with --type",
            },
            changeReference,
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--type",
              description:
                "Specifies the type of the lifecycle hook. Mutually exclusive with --all",
              args: {
                name: "type",
                suggestions: [
                  "UpgradeAutoOSRollingBatchStarting",
                  "UpgradeAutoOSScheduling",
                ],
              },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a lifecycle hook on a VMSS",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Specifies the type of the lifecycle hook",
              args: {
                name: "type",
                suggestions: [
                  "UpgradeAutoOSRollingBatchStarting",
                  "UpgradeAutoOSScheduling",
                ],
              },
              isRequired: true,
            },
            {
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an existing lifecycle hook on a VMSS",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Specifies the type of the lifecycle hook",
              args: {
                name: "type",
                suggestions: [
                  "UpgradeAutoOSRollingBatchStarting",
                  "UpgradeAutoOSScheduling",
                ],
              },
              isRequired: true,
            },
            {
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--default-action",
              description:
                "Specifies the action that will be applied to a target resource in the virtual machine scale set lifecycle hook event if the platform does not receive a response from the customer for the target resource before waitUntil",
              args: {
                name: "default-action",
                suggestions: ["Approve", "Reject"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--wait-duration",
              description:
                "Specifies the time duration a virtual machine scale set lifecycle hook event sent to the customer waits for a response from the customer. It should be in ISO 8601 format",
              args: { name: "wait-duration" },
            },
          ],
        },
      ],
    },
    {
      name: "lifecycle-hook-event",
      description: "Manage Lifecycle Hook Event",
      subcommands: [
        {
          name: "approve",
          description:
            "Approve a virtual machine scale set lifecycle hook event",
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
              name: "--instance-ids",
              description:
                "Space-separated list of identifiers for target resources in the lifecycle hook event. For a scale-set-level event such as UpgradeAutoOSScheduling, specify the VM scale set name. For an instance-level event such as UpgradeAutoOSRollingBatchStarting, specify decimal instance IDs for a Uniform scale set (e.g. 0 1 2) or VM names for a Flexible scale set. Each identifier must correspond to a target resource listed by the event. When omitted, the action is applied to all target resources of the event",
              args: { name: "instance-ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the VMScaleSetLifecycleHookEvent",
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
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List a list of virtual machine scale set lifecycle hook events created for a virtual machine scale set resource",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "reject",
          description:
            "Reject a virtual machine scale set lifecycle hook event",
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
              name: "--instance-ids",
              description:
                "Space-separated list of identifiers for target resources in the lifecycle hook event. For a scale-set-level event such as UpgradeAutoOSScheduling, specify the VM scale set name. For an instance-level event such as UpgradeAutoOSRollingBatchStarting, specify decimal instance IDs for a Uniform scale set (e.g. 0 1 2) or VM names for a Flexible scale set. Each identifier must correspond to a target resource listed by the event. When omitted, the action is applied to all target resources of the event",
              args: { name: "instance-ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the VMScaleSetLifecycleHookEvent",
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
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a virtual machine scale set lifecycle hook event",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the VMScaleSetLifecycleHookEvent",
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
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update a virtual machine scale set lifecycle hook event",
          options: [
            acquirePolicyToken,
            {
              name: "--action-state",
              description:
                "State of the lifecycle hook for the target resource. The customer can patch this property to move the lifecycle hook to a terminal state",
              args: {
                name: "action-state",
                suggestions: ["Approved", "Rejected"],
              },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--instance-ids",
              description:
                "Space-separated list of identifiers for target resources in the lifecycle hook event. For a scale-set-level event such as UpgradeAutoOSScheduling, specify the VM scale set name. For an instance-level event such as UpgradeAutoOSRollingBatchStarting, specify decimal instance IDs for a Uniform scale set (e.g. 0 1 2) or VM names for a Flexible scale set. Each identifier must correspond to a target resource listed by the event. When omitted, the action is applied to all target resources of the event",
              args: { name: "instance-ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the VMScaleSetLifecycleHookEvent",
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
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
            },
            {
              name: "--wait-until",
              description:
                "Specifies the exact UTC timestamp in ISO 8601 format till which the event would remain in the current lifecycle state waiting for an action from the customer. Beyond this timestamp, the platform will apply the defaultAction for the event",
              args: { name: "wait-until" },
            },
          ],
        },
      ],
    },
    {
      name: "nic",
      description: "Manage network interfaces of a VMSS",
      subcommands: [
        {
          name: "list",
          description:
            "Get all network interfaces in a virtual machine scale set",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--virtual-machine-scale-set-name", "--vmss-name"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "virtual-machine-scale-set-name" },
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
          name: "list-vm-nics",
          description:
            "Get information about all network interfaces in a virtual machine in a virtual machine scale set",
          options: [
            {
              name: ["--virtualmachine-index", "--instance-id"],
              description: "The virtual machine index",
              args: { name: "virtualmachine-index" },
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
              name: ["--virtual-machine-scale-set-name", "--vmss-name"],
              description: "Scale set name",
              args: { name: "virtual-machine-scale-set-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
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
            "Get the specified network interface in a virtual machine scale set",
          options: [
            {
              name: "--expand",
              description:
                "Expands referenced resources. Default value is None",
              args: { name: "expand" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--virtualmachine-index", "--instance-id"],
              description: "The virtual machine index",
              args: { name: "virtualmachine-index" },
            },
            {
              name: ["--network-interface-name", "--name", "-n"],
              description: "The network interface (NIC)",
              args: { name: "network-interface-name" },
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
              name: ["--virtual-machine-scale-set-name", "--vmss-name"],
              description: "Scale set name",
              args: { name: "virtual-machine-scale-set-name" },
            },
          ],
        },
      ],
    },
    {
      name: "rolling-upgrade",
      description: "Manage rolling upgrades",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancel the current virtual machine scale set rolling upgrade",
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
              name: [
                "--virtual-machine-scale-set-name",
                "--vm-scale-set-name",
                "--name",
                "-n",
              ],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "virtual-machine-scale-set-name" },
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
          name: "get-latest",
          description:
            "Get the status of the latest virtual machine scale set rolling upgrade",
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
              name: [
                "--virtual-machine-scale-set-name",
                "--vm-scale-set-name",
                "--name",
                "-n",
              ],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "virtual-machine-scale-set-name" },
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
          name: "start",
          description:
            "Start a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected",
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
              name: [
                "--virtual-machine-scale-set-name",
                "--vm-scale-set-name",
                "--name",
                "-n",
              ],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "virtual-machine-scale-set-name" },
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
      ],
    },
    {
      name: "run-command",
      description: "Manage Run Command",
      subcommands: [
        {
          name: "create",
          description: "The operation to Create the VMSS VM run command",
          options: [
            {
              name: "--instance-id",
              description: "The instance ID of the virtual machine",
              args: { name: "instance-id" },
              isRequired: true,
            },
            {
              name: ["--run-command-name", "--name"],
              description: "The name of the virtual machine run command",
              args: { name: "run-command-name" },
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
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--async-execution",
              description:
                "Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete",
              args: {
                name: "async-execution",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            changeReference,
            {
              name: "--command-id",
              description: "Specify a commandId of predefined built-in script",
              args: { name: "command-id" },
            },
            {
              name: "--error-blob-uri",
              description:
                "Uri (without SAS) to an append blob where the script error stream will be uploaded",
              args: { name: "error-blob-uri" },
            },
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
              name: "--output-blob-uri",
              description:
                "Uri (without SAS) to an append blob where the script output will be uploaded",
              args: { name: "output-blob-uri" },
            },
            {
              name: "--parameters",
              description: "The parameters used by the script",
              args: { name: "parameters", isVariadic: true },
            },
            {
              name: "--protected-parameters",
              description: "The parameters used by the script",
              args: { name: "protected-parameters", isVariadic: true },
            },
            {
              name: "--run-as-password",
              description:
                "Password if needed for using run-as-user parameter. It will be encrypted and not logged",
              args: { name: "run-as-password" },
            },
            {
              name: "--run-as-user",
              description:
                "By default script process runs under system/root user. Specify custom user to host the process",
              args: { name: "run-as-user" },
            },
            {
              name: "--script",
              description:
                "Specify the script content to be executed on the VM",
              args: { name: "script" },
            },
            {
              name: "--script-uri",
              description: "Specify the script download location",
              args: { name: "script-uri" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--timeout-in-seconds",
              description: "The timeout in seconds to execute the run command",
              args: { name: "timeout-in-seconds" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete operation to delete the VMSS VM run command",
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
              name: "--instance-id",
              description: "The instance of the VM",
              args: { name: "instance-id" },
            },
            {
              name: ["--run-command-name", "--name", "-n"],
              description: "The name of the VirtualMachineRunCommand",
              args: { name: "run-command-name" },
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
              name: "--vmss-name",
              description: "The name of the VirtualMachineScaleSet",
              args: { name: "vmss-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "invoke",
          description:
            "Execute a specific run command on a Virtual Machine Scale Set instance",
          options: [
            {
              name: "--command-id",
              description: "The command id",
              args: { name: "command-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--instance-id",
              description: "Scale set VM instance id",
              args: { name: "instance-id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "name" },
            },
            {
              name: "--parameters",
              description:
                "Space-separated parameters in the format of '[name=]value'",
              args: { name: "parameters", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scripts",
              description:
                "Space-separated script lines. Use @{file} to load script from a file",
              args: { name: "scripts", isVariadic: true },
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
          name: "list",
          description:
            "List operation to get all run commands of an instance in Virtual Machine Scaleset",
          options: [
            {
              name: "--instance-id",
              description: "The instance of the VM",
              args: { name: "instance-id" },
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
              name: "--vmss-name",
              description: "The name of the VirtualMachineScaleSet",
              args: { name: "vmss-name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "The expand expression to apply on the operation",
              args: { name: "expand" },
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
          description: "The operation to get the VMSS run command",
          options: [
            {
              name: ["--run-command-name", "--name"],
              description: "The name of the virtual machine run command",
              args: { name: "run-command-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--instance-id",
              description: "The instance ID of the virtual machine",
              args: { name: "instance-id" },
            },
            {
              name: "--instance-view",
              description: "The instance view of a run command",
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
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
            },
          ],
        },
        {
          name: "update",
          description: "The operation to update the VMSS run command",
          options: [
            {
              name: ["--run-command-name", "--name"],
              description: "The name of the virtual machine run command",
              args: { name: "run-command-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--async-execution",
              description:
                "Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete",
              args: {
                name: "async-execution",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            changeReference,
            {
              name: "--command-id",
              description: "Specify a commandId of predefined built-in script",
              args: { name: "command-id" },
            },
            {
              name: "--error-blob-uri",
              description:
                "Uri (without SAS) to an append blob where the script error stream will be uploaded",
              args: { name: "error-blob-uri" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--instance-id",
              description: "The instance ID of the virtual machine",
              args: { name: "instance-id" },
            },
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
              name: "--output-blob-uri",
              description:
                "Uri (without SAS) to an append blob where the script output will be uploaded",
              args: { name: "output-blob-uri" },
            },
            {
              name: "--parameters",
              description: "The parameters used by the script",
              args: { name: "parameters", isVariadic: true },
            },
            {
              name: "--protected-parameters",
              description: "The parameters used by the script",
              args: { name: "protected-parameters", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--run-as-password",
              description:
                "Password if needed for using run-as-user parameter. It will be encrypted and not logged",
              args: { name: "run-as-password" },
            },
            {
              name: "--run-as-user",
              description:
                "By default script process runs under system/root user. Specify custom user to host the process",
              args: { name: "run-as-user" },
            },
            {
              name: "--script",
              description:
                "Specify the script content to be executed on the VM",
              args: { name: "script" },
            },
            {
              name: "--script-uri",
              description: "Specify the script download location",
              args: { name: "script-uri" },
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
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--timeout-in-seconds",
              description: "The timeout in seconds to execute the run command",
              args: { name: "timeout-in-seconds" },
            },
            {
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
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
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--expand",
              description: "The expand expression to apply on the operation",
              args: { name: "expand" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--instance-id",
              description: "The instance of the VM",
              args: { name: "instance-id" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--run-command-name", "--name", "-n"],
              description: "The name of the VirtualMachineRunCommand",
              args: { name: "run-command-name" },
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
            {
              name: "--vmss-name",
              description: "The name of the VirtualMachineScaleSet",
              args: { name: "vmss-name" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
