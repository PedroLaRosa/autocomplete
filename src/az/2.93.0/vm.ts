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
  name: "vm",
  description: "Manage Linux or Windows virtual machines",
  subcommands: [
    {
      name: "assess-patches",
      description: "Assess patches on a VM",
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
          name: ["--vm-name", "--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "vm-name" },
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
      name: "auto-shutdown",
      description: "Manage auto-shutdown for VM",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--email",
          description:
            "The email recipient to send notifications to (can be a list of semi-colon separated email addresses)",
          args: { name: "email" },
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
          name: ["--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "name" },
        },
        {
          name: "--off",
          description:
            "Turn off auto-shutdown for VM. Configuration will be cleared",
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
          name: "--time",
          description:
            "The UTC time of day the schedule will occur every day. Format: hhmm. Example: 1730",
          args: { name: "time" },
        },
        {
          name: "--webhook",
          description: "The webhook URL to which the notification will be sent",
          args: { name: "webhook" },
        },
      ],
    },
    {
      name: "capture",
      description: "Capture information for a stopped VM",
      options: [
        {
          name: "--vhd-name-prefix",
          description: "The VHD name prefix specify for the VM disks",
          args: { name: "vhd-name-prefix" },
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
          description: "The name of the virtual machine",
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
          name: "--overwrite",
          description: "Overwrite the existing disk file",
          args: {
            name: "overwrite",
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
          name: "--storage-container",
          description:
            "The storage account container name in which to save the disks",
          args: { name: "storage-container" },
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
      name: "convert",
      description: "Convert a VM with unmanaged disks to use managed disks",
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
          name: ["--vm-name", "--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "vm-name" },
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
      name: "create",
      description: "Create an Azure Virtual Machine",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the virtual machine",
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
          name: ["--align-regional-disks-to-vm-zone", "--align-regional-disks"],
          description:
            "Specify whether the regional disks should be aligned/moved to the VM zone. This is applicable only for VMs with placement property set. Please note that this change is irreversible",
          args: {
            name: "align-regional-disks-to-vm-zone",
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
          name: "--attach-data-disks",
          description:
            "Attach existing data disks to the VM. Can use the name or ID of a managed disk or the URI to an unmanaged disk VHD",
          args: { name: "attach-data-disks", isVariadic: true },
        },
        {
          name: "--attach-os-disk",
          description:
            "Attach an existing OS disk to the VM. Can use the name or ID of a managed disk or the URI to an unmanaged disk VHD",
          args: { name: "attach-os-disk" },
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
          name: "--availability-set",
          description:
            "Name or ID of an existing availability set to add the VM to. None by default",
          args: { name: "availability-set" },
        },
        {
          name: "--boot-diagnostics-storage",
          description:
            "Pre-existing storage account name or its blob uri to capture boot diagnostics. Its sku should be one of Standard_GRS, Standard_LRS and Standard_RAGRS",
          args: { name: "boot-diagnostics-storage" },
        },
        {
          name: ["--capacity-reservation-group", "--crg"],
          description:
            'The ID or name of the capacity reservation group that is used to allocate. Pass in "None" to disassociate the capacity reservation group. Please note that if you want to delete a VM/VMSS that has been associated with capacity reservation group, you need to disassociate the capacity reservation group first',
          args: { name: "capacity-reservation-group" },
        },
        changeReference,
        {
          name: "--computer-name",
          description:
            "The host OS name of the virtual machine. Defaults to the name of the VM",
          args: { name: "computer-name" },
        },
        {
          name: "--count",
          description:
            "Number of virtual machines to create. Value range is [2, 250], inclusive. Don't specify this parameter if you want to create a normal single VM. The VMs are created in parallel. The output of this command is an array of VMs instead of one single VM. Each VM has its own public IP, NIC. VNET and NSG are shared. It is recommended that no existing public IP, NIC, VNET and NSG are in resource group. When --count is specified, --attach-data-disks, --attach-os-disk, --boot-diagnostics-storage, --computer-name, --host, --host-group, --nics, --os-disk-name, --private-ip-address, --public-ip-address, --public-ip-address-dns-name, --storage-account, --storage-container-name, --subnet, --use-unmanaged-disk, --vnet-name are not allowed",
          args: { name: "count" },
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
            "Specify whether data disk should be deleted or detached upon VM deletion. If a single data disk is attached, the allowed values are Delete and Detach. For multiple data disks are attached, please use <data_disk>=Delete <data_disk2>=Detach to configure each disk",
          args: { name: "data-disk-delete-option", isVariadic: true },
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
            "Specifies the storage fault domain alignment type for data disks. This option is only valid when the VM joins a single-zone Flexible VMSS and is set at create time. Omit this option to leave data disks unaligned",
          args: {
            name: "data-disk-storage-fd-alignment",
            suggestions: ["Aligned", "BestEffortAligned"],
          },
        },
        {
          name: "--data-disk-iops",
          description:
            "Specify the Read-Write IOPS for the managed disk when storage account type is UltraSSD_LRS",
          args: { name: "data-disk-iops" },
        },
        {
          name: "--data-disk-mbps",
          description:
            "Specify the bandwidth in MB per second for the managed disk when storage account type is UltraSSD_LRS",
          args: { name: "data-disk-mbps" },
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
            "Explicitly opt out the VM from being associated with any capacity reservation. The VM will consume publicly available capacity",
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
          name: "--disk-controller-type",
          description:
            "Specify the disk controller type configured for the VM or VMSS",
          args: { name: "disk-controller-type", suggestions: ["NVMe", "SCSI"] },
        },
        {
          name: "--edge-zone",
          description: "The name of edge zone",
          args: { name: "edge-zone" },
        },
        {
          name: "--enable-agent",
          description:
            "Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later",
          args: {
            name: "enable-agent",
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
          name: "--enable-hibernation",
          description:
            "The flag that enable or disable hibernation capability on the VM",
          args: {
            name: "enable-hibernation",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enable-hotpatching",
          description:
            "Patch VMs without requiring a reboot. --enable-agent must be set and --patch-mode must be set to AutomaticByPlatform",
          args: {
            name: "enable-hotpatching",
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
          name: "--enable-secure-boot",
          description: "Enable secure boot",
          args: {
            name: "enable-secure-boot",
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
            "The eviction policy for the Spot priority virtual machine. Default eviction policy is Deallocate for a Spot priority virtual machine",
          args: {
            name: "eviction-policy",
            suggestions: ["Deallocate", "Delete"],
          },
        },
        {
          name: "--exclude-zones",
          description:
            'If "--zone-placement-policy" is set to "Any", availability zone selected by the system must not be present in the list of availability zones passed with "excludeZones". If "--exclude-zones" is not provided, all availability zones in region will be considered for selection',
          args: { name: "exclude-zones", isVariadic: true },
        },
        {
          name: "--generate-ssh-keys",
          description:
            "Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory",
        },
        {
          name: "--host",
          description:
            "Resource ID of the dedicated host that the VM will reside in. --host and --host-group can't be used together",
          args: { name: "host" },
        },
        {
          name: "--host-group",
          description:
            "Name or resource ID of the dedicated host group that the VM will reside in. --host and --host-group can't be used together",
          args: { name: "host-group" },
        },
        {
          name: "--image",
          description:
            'The name of the operating system image as a URN alias, URN, custom image name or ID, custom image version ID, or VHD blob URI. In addition, it also supports shared gallery image. Please use the image alias including the version of the distribution you want to use. For example: please use Debian11 instead of Debian.\' This parameter is required unless using --attach-os-disk. Valid URN format: "Publisher:Offer:Sku:Version". For more information, see https://learn.microsoft.com/azure/virtual-machines/linux/cli-ps-findimage',
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
            'If "--zone-placement-policy" is set to "Any", availability zone selected by the system must be present in the list of availability zones passed with "--include-zones". If "--include-zones" is not provided, all availability zones in region will be considered for selection',
          args: { name: "include-zones", isVariadic: true },
        },
        {
          name: "--key-incarnation-id",
          description:
            "Increase the value of this property allows user to reset the key used for securing communication channel between guest and host",
          args: { name: "key-incarnation-id" },
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
          name: "--max-price",
          description:
            "The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons",
          args: { name: "max-price" },
        },
        {
          name: "--nic-delete-option",
          description:
            "Specify what happens to the network interface when the VM is deleted. Use a singular value to apply on all resources, or use <Name>=<Value> to configure the delete behavior for individual resources. Possible options are Delete and Detach",
          args: { name: "nic-delete-option", isVariadic: true },
        },
        {
          name: "--nics",
          description:
            "Names or IDs of existing NICs to attach to the VM. The first NIC will be designated as primary. If omitted, a new NIC will be created. If an existing NIC is specified, do not specify subnet, VNet, public IP or NSG",
          args: { name: "nics", isVariadic: true },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--nsg",
          description:
            'The name to use when creating a new Network Security Group (default) or referencing an existing one. Can also reference an existing NSG by ID or specify "" for none (\'""\' in Azure CLI using PowerShell or --% operator)',
          args: { name: "nsg" },
        },
        {
          name: "--nsg-rule",
          description:
            "NSG rule to create when creating a new NSG. Defaults to open ports for allowing RDP on Windows and allowing SSH on Linux. NONE represents no NSG rule",
          args: { name: "nsg-rule", suggestions: ["NONE", "RDP", "SSH"] },
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
            "Specify the behavior of the managed disk when the VM gets deleted i.e whether the managed disk is deleted or detached",
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
            "Specifies the storage fault domain alignment type for the OS disk. This option is only valid when the VM joins a single-zone Flexible VMSS and is set at create time. Omit this option to leave the OS disk unaligned",
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
          name: "--platform-fault-domain",
          description:
            "Specify the scale set logical fault domain into which the virtual machine will be created. By default, the virtual machine will be automatically assigned to a fault domain that best maintains balance across available fault domains. This is applicable only if the virtualMachineScaleSet property of this virtual machine is set. The virtual machine scale set that is referenced, must have platform fault domain count. This property cannot be updated once the virtual machine is created. Fault domain assignment can be viewed in the virtual machine instance view",
          args: { name: "platform-fault-domain" },
        },
        {
          name: "--ppg",
          description:
            "The name or ID of the proximity placement group the VM should be associated with",
          args: { name: "ppg" },
        },
        {
          name: "--preferred-size",
          description:
            "Preferred VM size for Flow VMs. Azure may deploy a compatible alternative size. Cannot be used with --size",
          args: { name: "preferred-size" },
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
          name: "--private-ip-address",
          description: "Static private IP address (e.g. 10.0.0.5)",
          args: { name: "private-ip-address" },
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
          name: "--public-ip-sku",
          description:
            "Public IP SKU. The public IP is supported to be created on edge zone only when it is 'Standard'",
          args: { name: "public-ip-sku", suggestions: ["Basic", "Standard"] },
        },
        {
          name: "--role",
          description: "Role name or id the system assigned identity will have",
          args: { name: "role" },
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
          name: "--security-type",
          description: "Specify the security type of the virtual machine",
          args: {
            name: "security-type",
            suggestions: ["ConfidentialVM", "Standard", "TrustedLaunch"],
          },
        },
        {
          name: "--size",
          description:
            "The VM size to be created. See https://azure.microsoft.com/pricing/details/virtual-machines/ for size info",
          args: { name: "size" },
        },
        {
          name: ["--source-disk-restore-point", "--source-disk-rp"],
          description:
            "Create a data disk from a disk restore point. Can use the ID of a disk restore point",
          args: { name: "source-disk-restore-point", isVariadic: true },
        },
        {
          name: ["--source-disk-restore-point-size-gb", "--source-rp-size"],
          description: "The size of the source disk restore point in GB",
          args: { name: "source-disk-restore-point-size-gb", isVariadic: true },
        },
        {
          name: ["--source-snapshots-or-disks", "--source-resource"],
          description:
            "Create a data disk from a snapshot or another disk. Can use the ID of a disk or snapshot",
          args: { name: "source-snapshots-or-disks", isVariadic: true },
        },
        {
          name: [
            "--source-snapshots-or-disks-size-gb",
            "--source-resource-size",
          ],
          description: "The size of the source disk in GB",
          args: { name: "source-snapshots-or-disks-size-gb", isVariadic: true },
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
          name: "--ssh-dest-key-path",
          description:
            'Destination file path on the VM for the SSH key. If the file already exists, the specified key(s) are appended to the file. Destination path for SSH public keys is currently limited to its default value "/home/username/.ssh/authorized_keys" due to a known issue in Linux provisioning agent',
          args: { name: "ssh-dest-key-path" },
        },
        {
          name: "--ssh-key-name",
          description:
            "Use it as public key in virtual machine. It should be an existing SSH key resource in Azure",
          args: { name: "ssh-key-name" },
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
          name: "--storage-account",
          description:
            "Only applicable when used with --use-unmanaged-disk. The name to use when creating a new storage account or referencing an existing one. If omitted, an appropriate storage account in the same resource group and location will be used, or a new one will be created",
          args: { name: "storage-account" },
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
          name: "--use-unmanaged-disk",
          description: "Do not use managed disk to persist VM",
        },
        {
          name: "--user-data",
          description:
            "UserData for the VM. It can be passed in as file or string",
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
          name: "--vmss",
          description:
            "Name or ID of an existing virtual machine scale set that the virtual machine should be assigned to. None by default",
          args: { name: "vmss" },
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
          name: "--workspace",
          description:
            "Name or ID of Log Analytics Workspace. If you specify the workspace through its name, the workspace should be in the same resource group with the vm, otherwise a new workspace will be created",
          args: { name: "workspace" },
        },
        {
          name: ["--zone", "-z"],
          description: "Availability zone into which to provision the resource",
          args: { name: "zone" },
        },
        {
          name: "--zone-movement",
          description:
            "Indicates if zone movement is enabled. By default isEnabled is set to false i.e VM can't be moved from one zone to another",
          args: {
            name: "zone-movement",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--zone-placement-policy",
          description:
            "Specify the policy for virtual machine's placement in availability zone",
          args: { name: "zone-placement-policy", suggestions: ["Any"] },
        },
      ],
    },
    {
      name: "deallocate",
      description:
        "Deallocate a VM so that computing resources are no longer allocated (charges no longer apply). The status will change from 'Stopped' to 'Stopped (Deallocated)'",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--force-deallocate",
          description:
            "Optional parameter to force deallocate a virtual machine. Default is false",
          args: {
            name: "force-deallocate",
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
          name: "--hibernate",
          description: "Optional parameter to hibernate a virtual machine",
          args: {
            name: "hibernate",
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
          name: ["--vm-name", "--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "vm-name" },
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
      name: "delete",
      description: "Delete operation to delete a virtual machine",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--force-deletion",
          description: "Optional parameter to force delete virtual machines",
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
          name: ["--name", "-n"],
          description: "The name of the virtual machine",
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
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "generalize",
      description:
        "Mark a VM as generalized, allowing it to be imaged for multiple deployments",
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
          name: ["--vm-name", "--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "vm-name" },
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
      description: "Get instance information about a VM",
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
    {
      name: "install-patches",
      description: "Install patches on a VM",
      options: [
        {
          name: "--maximum-duration",
          description:
            "Specify the maximum amount of time that the operation will run. It must be an ISO 8601-compliant duration string such as PT4H (4 hours)",
          args: { name: "maximum-duration" },
          isRequired: true,
        },
        {
          name: "--reboot-setting",
          description:
            "Define when it is acceptable to reboot a VM during a software update operation",
          args: {
            name: "reboot-setting",
            suggestions: ["Always", "IfRequired", "Never"],
          },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--classifications-to-include-linux",
          description:
            "Space-separated list of classifications to include for Linux VM",
          args: {
            name: "classifications-to-include-linux",
            suggestions: ["Critical", "Other", "Security"],
            isVariadic: true,
          },
        },
        {
          name: "--classifications-to-include-win",
          description:
            "Space-separated list of classifications to include for Windows VM",
          args: {
            name: "classifications-to-include-win",
            suggestions: [
              "Critical",
              "Definition",
              "FeaturePack",
              "Security",
              "ServicePack",
              "Tools",
              "UpdateRollUp",
              "Updates",
            ],
            isVariadic: true,
          },
        },
        {
          name: "--exclude-kbs-requiring-reboot",
          description:
            "Filter out KBs that don't have a reboot behavior of 'NeverReboots' when this is set. Applicable to Windows VM only",
          args: {
            name: "exclude-kbs-requiring-reboot",
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
          name: "--kb-numbers-to-exclude",
          description:
            "Space-separated list of KBs to exclude in the patch operation. Applicable to Windows VM only",
          args: { name: "kb-numbers-to-exclude", isVariadic: true },
        },
        {
          name: "--kb-numbers-to-include",
          description:
            "Space-separated list of KBs to include in the patch operation. Applicable to Windows VM only",
          args: { name: "kb-numbers-to-include", isVariadic: true },
        },
        {
          name: "--max-patch-publish-date",
          description:
            "ISO 8601 time value for install patch that were published on or before this given max published date. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
          args: { name: "max-patch-publish-date", isVariadic: true },
        },
        {
          name: ["--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--package-name-masks-to-exclude",
          description:
            "Space-separated list of packages to exclude in the patch operation. Format: packageName_packageVersion. Applicable to Linux VM only",
          args: { name: "package-name-masks-to-exclude", isVariadic: true },
        },
        {
          name: "--package-name-masks-to-include",
          description:
            "Space-separated list of packages to include in the patch operation. Format: packageName_packageVersion. Applicable to Linux VM only",
          args: { name: "package-name-masks-to-include", isVariadic: true },
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
      description: "List details of Virtual Machines",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--show-details", "-d"],
          description:
            "Show public ip address, FQDN, and power states. command will run slow",
        },
        {
          name: "--vmss",
          description:
            "List VM instances in a specific VMSS. Please specify the VMSS id or VMSS name",
          args: { name: "vmss" },
        },
      ],
    },
    {
      name: "list-ip-addresses",
      description: "List IP addresses associated with a VM",
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
    {
      name: "list-sizes",
      description:
        "List available sizes for VMs. This command has been deprecated and will be removed in a future release. Use 'az vm list-skus' instead",
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
      name: "list-skus",
      description: "Get details for compute-related resource SKUs",
      options: [
        acquirePolicyToken,
        {
          name: "--all",
          description:
            "Show all information including vm sizes not available under the current subscription",
          args: {
            name: "all",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        changeReference,
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: ["--resource-type", "-r"],
          description:
            'Resource types e.g. "availabilitySets", "snapshots", "disks", etc',
          args: { name: "resource-type" },
        },
        {
          name: ["--size", "-s"],
          description: "Size name, partial name is accepted",
          args: { name: "size" },
        },
        {
          name: ["--zone", "-z"],
          description: "Show skus supporting availability zones",
          args: {
            name: "zone",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "list-usage",
      description: "List available usage resources for VMs",
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
      name: "list-vm-resize-options",
      description: "List available resizing options for VMs",
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
          name: ["--vm-name", "--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "vm-name" },
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
      name: "migrate-to-vmss",
      description:
        "Migrate a virtual machine from availability set to Flexible Virtual Machine Scale Set",
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
        {
          name: "--target-fault-domain",
          description:
            "The target compute fault domain of VM migration to Flexible Virtual Machine Scale Set",
          args: { name: "target-fault-domain" },
        },
        {
          name: "--target-vm-size",
          description:
            "The target Virtual Machine size of VM migration to Flexible Virtual Machine Scale Set",
          args: { name: "target-vm-size" },
        },
        {
          name: "--target-zone",
          description:
            "The target zone of VM migration to Flexible Virtual Machine Scale Set",
          args: { name: "target-zone" },
        },
        {
          name: "--vm-name",
          description: "The name of the virtual machine",
          args: { name: "vm-name" },
        },
      ],
    },
    {
      name: "open-port",
      description: "Opens a VM to inbound traffic on specified ports",
      options: [
        {
          name: "--port",
          description:
            "The port or port range (ex: 80-100) to open inbound traffic to. Use '*' to allow traffic to all ports. Use comma separated values to specify more than one port or port range",
          args: { name: "port" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: "--apply-to-subnet",
          description: "Allow inbound traffic on the subnet instead of the NIC",
        },
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
            "The name of the virtual machine to open inbound traffic on",
          args: { name: "name" },
        },
        {
          name: "--nsg-name",
          description:
            "The name of the network security group to create if one does not exist. Ignored if an NSG already exists",
          args: { name: "nsg-name" },
        },
        {
          name: "--priority",
          description:
            "Rule priority, between 100 (highest priority) and 4096 (lowest priority). Must be unique for each rule in the collection",
          args: { name: "priority" },
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
      name: "perform-maintenance",
      description: "The operation to perform maintenance on a virtual machine",
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
          name: ["--vm-name", "--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "vm-name" },
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
      name: "reapply",
      description: "Reapply VMs",
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
          name: ["--vm-name", "--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "vm-name" },
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
      name: "redeploy",
      description: "Redeploy an existing VM",
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
          name: ["--vm-name", "--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "vm-name" },
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
      description: "Reimage (upgrade the operating system) a virtual machine",
      options: [
        acquirePolicyToken,
        {
          name: "--admin-password",
          description: "Specifies the password of the administrator account",
          args: { name: "admin-password" },
        },
        changeReference,
        {
          name: "--custom-data",
          description: "Specifies a base-64 encoded string of custom data",
          args: { name: "custom-data" },
        },
        {
          name: "--exact-version",
          description:
            "Specifies in decimal number, the version the OS disk should be reimaged to. If exact version is not provided, the OS disk is reimaged to the existing version of OS Disk",
          args: { name: "exact-version" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--vm-name", "--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "vm-name" },
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
        {
          name: "--temp-disk",
          description:
            "Specifies whether to reimage temp disk. Default value: false. Note: This temp disk reimage parameter is only supported for VM/VMSS with Ephemeral OS disk",
          args: {
            name: "temp-disk",
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
      name: "resize",
      description: "Update a VM's size",
      options: [
        {
          name: "--size",
          description: "The VM size",
          args: { name: "size" },
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
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
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
      description: "Restart VMs",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--force",
          description:
            "Force the VM to restart by redeploying it. Use if the VM is unresponsive",
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
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
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
      description: "Get the details of a VM",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--include-user-data", "-u"],
          description: "Include the user data properties in the query result",
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
          name: ["--show-details", "-d"],
          description:
            "Show public ip address, FQDN, and power states. command will run slow",
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
      name: "simulate-eviction",
      description: "Simulate the eviction of a Spot VM",
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
          name: ["--vm-name", "--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "vm-name" },
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
      description: "Start a stopped VM",
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
          name: ["--vm-name", "--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "vm-name" },
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
      description: "Power off (stop) a running VM",
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
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
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
          name: "--skip-shutdown",
          description: "Skip shutdown and power-off immediately",
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
      description: "Update the properties of a VM",
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
          name: ["--align-regional-disks-to-vm-zone", "--align-regional-disks"],
          description:
            "Specify whether the regional disks should be aligned/moved to the VM zone. This is applicable only for VMs with placement property set. Please note that this change is irreversible",
          args: {
            name: "align-regional-disks-to-vm-zone",
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
          name: ["--capacity-reservation-group", "--crg"],
          description:
            'The ID or name of the capacity reservation group that is used to allocate. Pass in "None" to disassociate the capacity reservation group. Please note that if you want to delete a VM/VMSS that has been associated with capacity reservation group, you need to disassociate the capacity reservation group first',
          args: { name: "capacity-reservation-group" },
        },
        changeReference,
        {
          name: [
            "--disable-capacity-reservation-assignment",
            "--no-cap-reservation",
          ],
          description:
            "Explicitly opt out the VM from being associated with any capacity reservation. The VM will consume publicly available capacity",
          args: {
            name: "disable-capacity-reservation-assignment",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--disk-caching",
          description:
            "Use singular value to apply across, or specify individual disks, e.g. 'os=ReadWrite 0=None 1=ReadOnly' should enable update os disk and 2 data disks",
          args: { name: "disk-caching", isOptional: true, isVariadic: true },
        },
        {
          name: "--disk-controller-type",
          description:
            "Specify the disk controller type configured for the VM or VMSS",
          args: { name: "disk-controller-type", suggestions: ["NVMe", "SCSI"] },
        },
        {
          name: "--enable-hibernation",
          description:
            "The flag that enable or disable hibernation capability on the VM",
          args: {
            name: "enable-hibernation",
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
          name: "--enable-secure-boot",
          description: "Enable secure boot",
          args: {
            name: "enable-secure-boot",
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
          name: ["--ephemeral-os-disk-placement", "--ephemeral-placement"],
          description:
            "Only applicable when used with --size. Allows you to choose the Ephemeral OS disk provisioning location",
          args: {
            name: "ephemeral-os-disk-placement",
            suggestions: ["CacheDisk", "NvmeDisk", "ResourceDisk"],
          },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--host",
          description:
            "Resource ID of the dedicated host that the VM will reside in. --host and --host-group can't be used together. You should deallocate the VM before update, and start the VM after update. Please check out help for more examples",
          args: { name: "host" },
        },
        {
          name: "--host-group",
          description:
            "Name or resource ID of the dedicated host group that the VM will reside in. --host and --host-group can't be used together. You should deallocate the VM before update, and start the VM after update. Please check out help for more examples",
          args: { name: "host-group" },
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
          name: "--key-incarnation-id",
          description:
            "Increase the value of this property allows user to reset the key used for securing communication channel between guest and host",
          args: { name: "key-incarnation-id" },
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
          name: "--max-price",
          description:
            "The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons",
          args: { name: "max-price" },
        },
        {
          name: ["--name", "-n"],
          description:
            "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--os-disk",
          description: "Managed OS disk ID or name to swap to",
          args: { name: "os-disk" },
        },
        {
          name: "--ppg",
          description:
            "The name or ID of the proximity placement group the VM should be associated with",
          args: { name: "ppg" },
        },
        {
          name: "--preferred-size",
          description:
            "Preferred VM size for Flow VMs. Azure may deploy a compatible alternative size. Cannot be used with --size",
          args: { name: "preferred-size" },
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
          name: ["--scheduled-events-api-version", "--se-api-version"],
          description:
            "Specifies the api-version to determine which Scheduled Events configuration schema version will be delivered",
          args: { name: "scheduled-events-api-version" },
        },
        {
          name: "--security-type",
          description: "Specify the security type of the virtual machine",
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
          name: "--size",
          description:
            "The new size of the virtual machine. See https://azure.microsoft.com/pricing/details/virtual-machines/ for size info",
          args: { name: "size" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
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
          name: "--user-data",
          description:
            "UserData for the VM. It can be passed in as file or string. If empty string is passed in, the existing value will be deleted",
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
          name: "--workspace",
          description:
            "Name or ID of Log Analytics Workspace. If you specify the workspace through its name, the workspace should be in the same resource group with the vm, otherwise a new workspace will be created",
          args: { name: "workspace" },
        },
        {
          name: "--write-accelerator",
          description:
            "Enable/disable disk write accelerator. Use singular value 'true/false' to apply across, or specify individual disks, e.g.'os=true 1=true 2=true' for os disk and data disks with lun of 1 & 2",
          args: {
            name: "write-accelerator",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: ["--zone", "-z"],
          description: "Availability zone into which to provision the resource",
          args: { name: "zone" },
        },
        {
          name: "--zone-movement",
          description:
            "Indicates if zone movement is enabled. By default isEnabled is set to false i.e VM can't be moved from one zone to another",
          args: {
            name: "zone-movement",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the VM is met",
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
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
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
      description: "Manage applications for VM",
      subcommands: [
        {
          name: "list",
          description: "List applications for VM",
          options: [
            {
              name: ["--vm-name", "--name", "-n"],
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
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
          description: "Set applications for VM",
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
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
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
      name: "availability-set",
      description: "Group resources into availability sets",
      subcommands: [
        {
          name: "cancel-migration-to-vmss",
          description: "Cancel the migration operation on an Availability Set",
          options: [
            acquirePolicyToken,
            {
              name: ["--availability-set-name", "--name", "-n"],
              description: "The name of the availability set",
              args: { name: "availability-set-name" },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
          name: "convert",
          description:
            "Convert an Azure Availability Set to contain VMs with managed disks",
          options: [
            acquirePolicyToken,
            {
              name: ["--enable-all-instance-down", "--all-instance-down"],
              description:
                "Specify if Scheduled Events should be auto-approved when all instances are down. Its default value is true",
              args: {
                name: "enable-all-instance-down",
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
              name: ["--availability-set-name", "--name", "-n"],
              description: "The name of the availability set",
              args: { name: "availability-set-name" },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--scheduled-events-api-version", "--se-api-version"],
              description:
                "Specify the api-version to determine which Scheduled Events configuration schema version will be delivered",
              args: { name: "scheduled-events-api-version" },
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
          name: "convert-to-vmss",
          description:
            "Create a new Flexible Virtual Machine Scale Set and migrate all the Virtual Machines in the Availability Set. This does not trigger a downtime on the Virtual Machines",
          options: [
            acquirePolicyToken,
            {
              name: ["--availability-set-name", "--name", "-n"],
              description: "The name of the availability set",
              args: { name: "availability-set-name" },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
              description:
                "Specify information about the Virtual Machine Scale Set that the Availability Set should be converted to",
              args: { name: "vmss-name" },
            },
          ],
        },
        {
          name: "create",
          description: "Create an Azure Availability Set",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the availability set",
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
                "Specify if Scheduled Events should be auto-approved when all instances are down. Its default value is true",
              args: {
                name: "enable-all-instance-down",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            changeReference,
            {
              name: [
                "--enable-user-reboot-scheduled-events",
                "--enable-reboot",
              ],
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
              name: "--platform-fault-domain-count",
              description: "Fault Domain count",
              args: { name: "platform-fault-domain-count" },
            },
            {
              name: "--platform-update-domain-count",
              description:
                "Update Domain count. If unspecified, the server will pick the most optimal number like 5",
              args: { name: "platform-update-domain-count" },
            },
            {
              name: "--ppg",
              description:
                "The name or ID of the proximity placement group the availability set should be associated with",
              args: { name: "ppg" },
            },
            {
              name: ["--scheduled-events-api-version", "--se-api-version"],
              description:
                "Specify the api-version to determine which Scheduled Events configuration schema version will be delivered",
              args: { name: "scheduled-events-api-version" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--unmanaged",
              description: "Contained VMs should use unmanaged disks",
            },
            {
              name: "--validate",
              description:
                "Generate and validate the ARM template without creating any resources",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an availability set",
          options: [
            acquirePolicyToken,
            {
              name: ["--availability-set-name", "--name", "-n"],
              description: "The name of the availability set",
              args: { name: "availability-set-name" },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
          description: "List all availability sets in a subscription",
          options: [
            {
              name: "--expand",
              description:
                "The expand expression to apply to the operation. Allowed values are 'virtualMachines/$ref'",
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
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list-sizes",
          description:
            "List all available virtual machine sizes that can be used to create a new virtual machine in an existing availability set",
          options: [
            acquirePolicyToken,
            {
              name: ["--availability-set-name", "--name", "-n"],
              description: "The name of the availability set",
              args: { name: "availability-set-name" },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
          description: "Get information about an availability set",
          options: [
            {
              name: ["--availability-set-name", "--name", "-n"],
              description: "The name of the availability set",
              args: { name: "availability-set-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
          name: "start-migration-to-vmss",
          description:
            "Start migration operation on an Availability Set to move its Virtual Machines to a Virtual Machine Scale Set. This should be followed by a migrate operation on each Virtual Machine that triggers a downtime on the Virtual Machine",
          options: [
            acquirePolicyToken,
            {
              name: ["--availability-set-name", "--name", "-n"],
              description: "The name of the availability set",
              args: { name: "availability-set-name" },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
              name: "--vmss-flexible-id",
              description:
                "Specify resource id about the Virtual Machine Scale Set that the Availability Set should be migrated to",
              args: { name: "vmss-flexible-id" },
            },
          ],
        },
        {
          name: "update",
          description: "Update an Azure Availability Set",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: ["--additional-scheduled-events", "--additional-events"],
              description:
                "The configuration parameter used while creating event grid and resource graph scheduled event setting",
              args: {
                name: "additional-scheduled-events",
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
              name: ["--enable-all-instance-down", "--all-instance-down"],
              description:
                "Specify if Scheduled Events should be auto-approved when all instances are down. Its default value is true",
              args: {
                name: "enable-all-instance-down",
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
              name: ["--availability-set-name", "--name", "-n"],
              description: "The name of the availability set",
              args: { name: "availability-set-name" },
            },
            changeReference,
            {
              name: [
                "--enable-user-reboot-scheduled-events",
                "--enable-reboot",
              ],
              description:
                "The configuration parameter used while publishing scheduled events additional publishing targets",
              args: {
                name: "enable-user-reboot-scheduled-events",
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
              name: [
                "--enable-user-redeploy-scheduled-events",
                "--enable-redeploy",
              ],
              description:
                "The configuration parameter used while creating user initiated redeploy scheduled event setting creation",
              args: {
                name: "enable-user-redeploy-scheduled-events",
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
              name: "--ppg",
              description:
                "Name or ID of the proximity placement group that the availability set should be associated with",
              args: { name: "ppg" },
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
              name: ["--scheduled-events-api-version", "--se-api-version"],
              description:
                "Specify the api-version to determine which Scheduled Events configuration schema version will be delivered",
              args: { name: "scheduled-events-api-version" },
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
          ],
        },
        {
          name: "validate-migration-to-vmss",
          description:
            "Validate that the Virtual Machines in the Availability Set can be migrated to the provided Virtual Machine Scale Set",
          options: [
            acquirePolicyToken,
            {
              name: ["--availability-set-name", "--name", "-n"],
              description: "The name of the availability set",
              args: { name: "availability-set-name" },
            },
            changeReference,
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
              name: "--vmss-flexible-id",
              description:
                "Specify resource id about the Virtual Machine Scale Set that the Availability Set should be migrated to",
              args: { name: "vmss-flexible-id" },
            },
          ],
        },
      ],
    },
    {
      name: "boot-diagnostics",
      description:
        "Troubleshoot the startup of an Azure Virtual Machine. Use this feature to troubleshoot boot failures for custom or platform images",
      subcommands: [
        {
          name: "disable",
          description: "Disable the boot diagnostics on a VM",
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
        {
          name: "enable",
          description: "Enable the boot diagnostics on a VM",
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
              name: "--storage",
              description:
                "Name or URI of a storage account (e.g. https://your_storage_account_name.blob.core.windows.net/). If it's not specified, managed storage will be used",
              args: { name: "storage" },
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
          name: "get-boot-log",
          description: "Get the boot diagnostics log from a VM",
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
        {
          name: "get-boot-log-uris",
          description: "Get SAS URIs for a virtual machine's boot diagnostic",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--expire",
              description:
                "Expiration duration in minutes for the SAS URIs with a value between 1 to 1440 minutes. If not specified, SAS URIs will be generated with a default expiration duration of 120 minutes",
              args: { name: "expire" },
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
      name: "diagnostics",
      description: "Configure the Azure Virtual Machine diagnostics extension",
      subcommands: [
        {
          name: "get-default-config",
          description: "Get the default configuration settings for a VM",
          options: [
            acquirePolicyToken,
            changeReference,
            { name: "--is-windows-os", description: "For Windows VMs" },
          ],
        },
        {
          name: "set",
          description: "Configure the Azure VM diagnostics extension",
          options: [
            {
              name: "--settings",
              description:
                "Json string or a file path, which defines data to be collected",
              args: { name: "settings" },
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
              name: "--version",
              description:
                "Version of the diagnostics extension. Will use the latest if not specfied",
              args: { name: "version" },
            },
            {
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
            },
          ],
        },
      ],
    },
    {
      name: "disk",
      description: "Manage the managed data disks attached to a VM",
      subcommands: [
        {
          name: "attach",
          description: "Attach a managed persistent disk to a VM",
          options: [
            {
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
              isRequired: true,
            },
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
              name: "--disk-ids",
              description: "The disk IDs of the managed disk (space-delimited)",
              args: { name: "disk-ids", isVariadic: true },
            },
            {
              name: "--disks",
              description:
                "One or more names or IDs of the managed disk (space-delimited)",
              args: { name: "disks", isOptional: true, isVariadic: true },
            },
            {
              name: "--enable-write-accelerator",
              description: "Enable write accelerator",
            },
            {
              name: "--lun",
              description:
                "0-based logical unit number (LUN). Max value depends on the Virtual Machine size",
              args: { name: "lun" },
            },
            {
              name: ["--name", "-n"],
              description: "The name or ID of the managed disk",
              args: { name: "name" },
            },
            { name: "--new", description: "Create a new disk" },
            {
              name: [
                "--new-names-of-source-disk-restore-point",
                "--new-names-of-rp",
              ],
              description:
                "The name of create new data disk from a disk restore point",
              args: {
                name: "new-names-of-source-disk-restore-point",
                isVariadic: true,
              },
            },
            {
              name: [
                "--new-names-of-source-snapshots-or-disks",
                "--new-names-of-sr",
              ],
              description:
                "The name of create new data disk from a snapshot or another disk",
              args: {
                name: "new-names-of-source-snapshots-or-disks",
                isVariadic: true,
              },
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
              name: ["--source-disk-restore-point", "--source-disk-rp"],
              description:
                "Create a data disk from a disk restore point. Can use the ID of a disk restore point",
              args: { name: "source-disk-restore-point", isVariadic: true },
            },
            {
              name: ["--source-snapshots-or-disks", "--source-resource"],
              description:
                "Create a data disk from a snapshot or another disk. Can use the ID of a disk or snapshot",
              args: { name: "source-snapshots-or-disks", isVariadic: true },
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
          name: "detach",
          description: "Detach a managed disk from a VM",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--disk-ids",
              description: "The disk IDs of the managed disk (space-delimited)",
              args: { name: "disk-ids", isVariadic: true },
            },
            {
              name: "--force-detach",
              description: "Force detach managed data disks from a VM",
            },
            {
              name: ["--name", "-n"],
              description: "The data disk name",
              args: { name: "name" },
            },
          ],
        },
      ],
    },
    {
      name: "encryption",
      description: "Manage encryption of VM disks",
      subcommands: [
        {
          name: "disable",
          description:
            "Disable disk encryption on the OS disk and/or data disks. Decrypt mounted disks",
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
          description:
            "Enable disk encryption on the OS disk and/or data disks. Encrypt mounted disks",
          options: [
            {
              name: "--disk-encryption-keyvault",
              description:
                "Name or ID of the key vault where the generated encryption key will be placed",
              args: { name: "disk-encryption-keyvault" },
              isRequired: true,
            },
            {
              name: "--aad-client-cert-thumbprint",
              description:
                "Thumbprint of the AAD app certificate with permissions to write secrets to the key vault",
              args: { name: "aad-client-cert-thumbprint" },
            },
            {
              name: "--aad-client-id",
              description:
                "Client ID of an AAD app with permissions to write secrets to the key vault",
              args: { name: "aad-client-id" },
            },
            {
              name: "--aad-client-secret",
              description:
                "Client secret of the AAD app with permissions to write secrets to the key vault",
              args: { name: "aad-client-secret" },
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--encrypt-format-all",
              description:
                "Encrypts-formats data disks instead of encrypting them. Encrypt-formatting is a lot faster than in-place encryption but wipes out the partition getting encrypt-formatted. (Only supported for Linux virtual machines.)",
            },
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
      name: "extension",
      description: "Manage extensions on VMs",
      subcommands: [
        {
          name: "delete",
          description: "Delete operation to delete the extension",
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
              name: ["--vm-extension-name", "--name", "-n"],
              description: "The name of the virtual machine extension",
              args: { name: "vm-extension-name" },
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
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List the extensions attached to a VM",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
            },
          ],
        },
        {
          name: "set",
          description: "Set extensions for a VM",
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--settings",
              description:
                "Extension settings in JSON format. A JSON file path is also accepted",
              args: { name: "settings" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--version",
              description:
                "The version of the extension. To pin extension version to this value, please specify --no-auto-upgrade-minor-version",
              args: { name: "version" },
            },
            {
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Display information about extensions attached to a VM",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--instance-view",
              description: "The instance view of a virtual machine extension",
            },
            {
              name: ["--name", "-n"],
              description: "Name of the extension",
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
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--vm-extension-name", "--name", "-n"],
              description: "The name of the virtual machine extension",
              args: { name: "vm-extension-name" },
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
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
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
              description: "List the names of available extensions",
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
      name: "host",
      description: "Manage Dedicated Hosts for Virtual Machines",
      subcommands: [
        {
          name: "create",
          description: "Create a dedicated host",
          options: [
            {
              name: "--host-group",
              description: "Name of the Dedicated Host Group",
              args: { name: "host-group" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Dedicated Host",
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
              name: "--sku",
              description:
                "SKU of the dedicated host. Available SKUs: https://azure.microsoft.com/pricing/details/virtual-machines/dedicated-host/",
              args: { name: "sku" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auto-replace",
              description: "Replace the host automatically if a failure occurs",
              args: {
                name: "auto-replace",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            changeReference,
            {
              name: "--license-type",
              description:
                "The software license type that will be applied to the VMs deployed on the dedicated host",
              args: {
                name: "license-type",
                suggestions: [
                  "None",
                  "Windows_Server_Hybrid",
                  "Windows_Server_Perpetual",
                ],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. Otherwise, location will default to the resource group's location",
              args: { name: "location" },
            },
            {
              name: ["--platform-fault-domain", "-d"],
              description:
                "Fault domain of the host within a group. Allowed values: 0, 1, 2",
              args: { name: "platform-fault-domain" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a dedicated host",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--host-group-name", "--host-group"],
              description: "The name of the dedicated host group",
              args: { name: "host-group-name" },
            },
            {
              name: ["--host-name", "--name", "-n"],
              description: "The name of the dedicated host",
              args: { name: "host-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
          name: "get-instance-view",
          description: "Get instance information about a dedicated host",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--host-group",
              description: "Name of the Dedicated Host Group",
              args: { name: "host-group" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Dedicated Host",
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
          description: "List dedicated hosts",
          options: [
            {
              name: ["--host-group-name", "--host-group"],
              description: "The name of the dedicated host group",
              args: { name: "host-group-name" },
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
          name: "list-resize-options",
          description:
            "List all available dedicated host sizes to which the specified dedicated host can be resized. NOTE: The dedicated host sizes provided can be used to only scale up the existing dedicated host",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--host-group-name", "--host-group"],
              description: "The name of the dedicated host group",
              args: { name: "host-group-name" },
            },
            {
              name: ["--host-name", "--name", "-n"],
              description: "The name of the dedicated host",
              args: { name: "host-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
          name: "redeploy",
          description: "Redeploy the dedicated host",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--host-group-name", "--host-group"],
              description: "The name of the dedicated host group",
              args: { name: "host-group-name" },
            },
            {
              name: ["--host-name", "--name", "-n"],
              description: "The name of the dedicated host",
              args: { name: "host-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
          name: "resize",
          description: "Resize a dedicated host",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--host-group-name", "--host-group"],
              description: "The name of the dedicated host group",
              args: { name: "host-group-name" },
            },
            {
              name: ["--host-name", "--name", "-n"],
              description: "The name of the dedicated host",
              args: { name: "host-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
              name: "--sku",
              description:
                "Dedicated host size for resizing. Available dedicated host sizes for resizing could be listed by running 'az vm host list-resize-options'",
              args: { name: "sku" },
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
          description: "Restart the dedicated host",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--host-group-name", "--host-group"],
              description: "The name of the dedicated host group",
              args: { name: "host-group-name" },
            },
            {
              name: "--host-name",
              description: "The name of the dedicated host",
              args: { name: "host-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
          description: "Get the details of a dedicated host",
          options: [
            {
              name: "--expand",
              description:
                "The expand expression to apply on the operation. 'InstanceView' will retrieve the list of instance views of the dedicated host. 'UserData' is not supported for dedicated host",
              args: {
                name: "expand",
                suggestions: ["instanceView", "resiliencyView", "userData"],
              },
            },
            {
              name: ["--host-group-name", "--host-group"],
              description: "The name of the dedicated host group",
              args: { name: "host-group-name" },
            },
            {
              name: ["--host-name", "--name", "-n"],
              description: "The name of the dedicated host",
              args: { name: "host-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
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
          description: "Update a dedicated host",
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
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--host-group",
              description: "Name of the Dedicated Host Group",
              args: { name: "host-group" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Dedicated Host",
              args: { name: "name" },
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
              description:
                "The expand expression to apply on the operation. 'InstanceView' will retrieve the list of instance views of the dedicated host. 'UserData' is not supported for dedicated host",
              args: {
                name: "expand",
                suggestions: ["instanceView", "userData"],
              },
            },
            {
              name: ["--host-group-name", "--host-group"],
              description: "The name of the dedicated host group",
              args: { name: "host-group-name" },
            },
            {
              name: ["--host-name", "--name", "-n"],
              description: "The name of the dedicated host",
              args: { name: "host-name" },
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
          name: "group",
          description: "Manage Dedicated Host Groups",
          subcommands: [
            {
              name: "create",
              description: "Create a dedicated host group",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Dedicated Host Group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--platform-fault-domain-count", "-c"],
                  description:
                    "Number of fault domains that the host group can span",
                  args: { name: "platform-fault-domain-count" },
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
                  name: "--automatic-placement",
                  description:
                    "Specify whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to false when not provided",
                  args: {
                    name: "automatic-placement",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                changeReference,
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. Otherwise, location will default to the resource group's location",
                  args: { name: "location" },
                },
                {
                  name: "--tags",
                  description:
                    "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
                  args: { name: "tags", isOptional: true, isVariadic: true },
                },
                {
                  name: "--ultra-ssd-enabled",
                  description:
                    "Enable a capability to have UltraSSD Enabled Virtual Machines on Dedicated Hosts of the Dedicated Host Group",
                  args: {
                    name: "ultra-ssd-enabled",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--zone", "-z"],
                  description:
                    "Availability zone into which to provision the resource",
                  args: { name: "zone" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a dedicated host group",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--host-group-name", "--name", "-n"],
                  description: "Name of the Dedicated Host Group",
                  args: { name: "host-group-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
              name: "get-instance-view",
              description: "Get instance view of a dedicated host group",
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
                  description: "Name of the Dedicated Host Group",
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
              description: "List dedicated host groups",
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
              name: "show",
              description: "Get the details of a dedicated host group",
              options: [
                {
                  name: ["--host-group-name", "--name", "-n"],
                  description: "Name of the Dedicated Host Group",
                  args: { name: "host-group-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
              description: "Update a dedicated host group",
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
                  name: ["--name", "-n"],
                  description: "Name of the Dedicated Host Group",
                  args: { name: "name" },
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description: "Manage service identities of a VM",
      subcommands: [
        {
          name: "assign",
          description: "Enable managed service identity on a VM",
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
          description: "Remove managed service identities from a VM",
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
        {
          name: "show",
          description: "Display VM's managed identity info",
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
      name: "image",
      description: "Information on available virtual machine images",
      subcommands: [
        {
          name: "accept-terms",
          description:
            "Accept Azure Marketplace term so that the image can be used to create VMs. This command has been deprecated and will be removed in version '3.0.0'. Use 'az vm image terms accept' instead",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--offer", "-f"],
              description: "Image offer",
              args: { name: "offer" },
            },
            {
              name: "--plan",
              description: "Image billing plan",
              args: { name: "plan" },
            },
            {
              name: ["--publisher", "-p"],
              description: "Image publisher",
              args: { name: "publisher" },
            },
            {
              name: "--urn",
              description:
                "URN, in format of 'publisher:offer:sku:version' or 'publisher:offer:sku:edge_zone:version'. If specified, other argument values can be omitted",
              args: { name: "urn" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the VM/VMSS images available in the Azure Marketplace",
          options: [
            {
              name: "--all",
              description:
                "Retrieve image list from live Azure service rather using an offline image list",
            },
            {
              name: "--architecture",
              description: "The name of architecture",
              args: { name: "architecture", suggestions: ["Arm64", "x64"] },
            },
            {
              name: "--edge-zone",
              description: "The name of edge zone",
              args: { name: "edge-zone" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--offer", "-f"],
              description: "Image offer name, partial name is accepted",
              args: { name: "offer" },
            },
            {
              name: ["--publisher", "-p"],
              description: "Image publisher name, partial name is accepted",
              args: { name: "publisher" },
            },
            {
              name: ["--sku", "-s"],
              description: "Image sku name, partial name is accepted",
              args: { name: "sku" },
            },
          ],
        },
        {
          name: "list-offers",
          description:
            "List the VM image offers available in the Azure Marketplace",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--publisher", "-p"],
              description: "Image publisher",
              args: { name: "publisher" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--edge-zone",
              description: "The name of edge zone",
              args: { name: "edge-zone" },
            },
          ],
        },
        {
          name: "list-publishers",
          description:
            "List the VM image publishers available in the Azure Marketplace",
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
              name: "--edge-zone",
              description: "The name of edge zone",
              args: { name: "edge-zone" },
            },
          ],
        },
        {
          name: "list-skus",
          description:
            "List the VM image SKUs available in the Azure Marketplace",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--offer", "-f"],
              description: "Image offer",
              args: { name: "offer" },
              isRequired: true,
            },
            {
              name: ["--publisher", "-p"],
              description: "Image publisher",
              args: { name: "publisher" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--edge-zone",
              description: "The name of edge zone",
              args: { name: "edge-zone" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the details for a VM image available in the Azure Marketplace",
          options: [
            {
              name: "--edge-zone",
              description: "The name of edge zone",
              args: { name: "edge-zone" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--offer", "-f"],
              description: "Image offer",
              args: { name: "offer" },
            },
            {
              name: ["--publisher", "-p"],
              description: "Image publisher",
              args: { name: "publisher" },
            },
            {
              name: ["--sku", "-s"],
              description: "Image sku",
              args: { name: "sku" },
            },
            {
              name: "--urn",
              description:
                "URN, in format of 'publisher:offer:sku:version' or 'publisher:offer:sku:edge_zone:version'. If specified, other argument values can be omitted",
              args: { name: "urn" },
            },
            {
              name: "--version",
              description: "Image sku's version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "terms",
          description: "Manage Azure Marketplace image terms",
          subcommands: [
            {
              name: "accept",
              description:
                "Accept Azure Marketplace image terms so that the image can be used to create VMs",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--offer", "-f"],
                  description: "Image offer",
                  args: { name: "offer" },
                },
                {
                  name: "--plan",
                  description: "Image billing plan",
                  args: { name: "plan" },
                },
                {
                  name: ["--publisher", "-p"],
                  description: "Image publisher",
                  args: { name: "publisher" },
                },
                {
                  name: "--urn",
                  description:
                    "URN, in the format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted",
                  args: { name: "urn" },
                },
              ],
            },
            {
              name: "cancel",
              description: "Cancel Azure Marketplace image terms",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--offer", "-f"],
                  description: "Image offer",
                  args: { name: "offer" },
                },
                {
                  name: "--plan",
                  description: "Image billing plan",
                  args: { name: "plan" },
                },
                {
                  name: ["--publisher", "-p"],
                  description: "Image publisher",
                  args: { name: "publisher" },
                },
                {
                  name: "--urn",
                  description:
                    "URN, in the format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted",
                  args: { name: "urn" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of Azure Marketplace image terms",
              options: [
                {
                  name: ["--offer", "-f"],
                  description: "Image offer",
                  args: { name: "offer" },
                },
                {
                  name: "--plan",
                  description: "Image billing plan",
                  args: { name: "plan" },
                },
                {
                  name: ["--publisher", "-p"],
                  description: "Image publisher",
                  args: { name: "publisher" },
                },
                {
                  name: "--urn",
                  description:
                    "URN, in the format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted",
                  args: { name: "urn" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "monitor",
      description: "Manage monitor aspect for a vm",
      subcommands: [
        {
          name: "log",
          description: "Manage log analytics workspace for a vm",
          subcommands: [
            {
              name: "show",
              description:
                "Execute a query against the Log Analytics workspace linked with a VM",
              options: [
                {
                  name: ["--analytics-query", "-q"],
                  description: "Query to execute over Log Analytics data",
                  args: { name: "analytics-query" },
                  isRequired: true,
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
                {
                  name: "--timespan",
                  description:
                    "Timespan over which to query. Defaults to querying all available data",
                  args: { name: "timespan" },
                },
              ],
            },
          ],
        },
        {
          name: "metrics",
          description: "Manage metrics for a vm",
          subcommands: [
            {
              name: "list-definitions",
              description: "List the metric definitions for a VM",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name or ID of a virtual machine",
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
                  name: "--namespace",
                  description: "Namespace to query metric definitions for",
                  args: { name: "namespace" },
                },
              ],
            },
            {
              name: "tail",
              description: "List the metric values for a VM",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name or ID of a virtual machine",
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
                  name: "--aggregation",
                  description:
                    "The list of aggregation types (space-separated) to retrieve",
                  args: {
                    name: "aggregation",
                    suggestions: [
                      "Average",
                      "Count",
                      "Maximum",
                      "Minimum",
                      "None",
                      "Total",
                    ],
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                changeReference,
                {
                  name: "--dimension",
                  description:
                    "The list of dimensions (space-separated) the metrics are queried into",
                  args: {
                    name: "dimension",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--end-time",
                  description:
                    "End time of the query. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                  args: { name: "end-time", isVariadic: true },
                },
                {
                  name: "--filter",
                  description:
                    "A string used to reduce the set of metric data returned. eg. \"LUN eq '*'\"",
                  args: { name: "filter" },
                },
                {
                  name: "--interval",
                  description:
                    "The interval over which to aggregate metrics, in ##h##m format",
                  args: { name: "interval" },
                },
                {
                  name: "--metadata",
                  description:
                    "Return the metadata values instead of metric data",
                },
                {
                  name: "--metrics",
                  description:
                    "Space-separated list of metric names to retrieve",
                  args: { name: "metrics", isOptional: true, isVariadic: true },
                },
                {
                  name: "--namespace",
                  description: "Namespace to query metric definitions for",
                  args: { name: "namespace" },
                },
                {
                  name: "--offset",
                  description:
                    "Time offset of the query range, in ##d##h format",
                  args: { name: "offset" },
                },
                {
                  name: "--orderby",
                  description:
                    "Aggregation to use for sorting results and the direction of the sort. Only one order can be specificed. Examples: sum asc",
                  args: { name: "orderby" },
                },
                {
                  name: "--start-time",
                  description:
                    "Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                  args: { name: "start-time", isVariadic: true },
                },
                {
                  name: "--top",
                  description:
                    "Max number of records to retrieve. Valid only if --filter used",
                  args: { name: "top" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "nic",
      description: "Manage network interfaces. See also az network nic",
      subcommands: [
        {
          name: "add",
          description: "Add existing NICs to a VM",
          options: [
            {
              name: "--nics",
              description: "Names or IDs of NICs",
              args: { name: "nics", isVariadic: true },
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
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--primary-nic",
              description:
                "Name or ID of the primary NIC. If missing, the first NIC in the list will be the primary",
              args: { name: "primary-nic" },
            },
          ],
        },
        {
          name: "list",
          description: "List the NICs available on a VM",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "remove",
          description: "Remove NICs from a VM",
          options: [
            {
              name: "--nics",
              description: "Names or IDs of NICs",
              args: { name: "nics", isVariadic: true },
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
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--primary-nic",
              description:
                "Name or ID of the primary NIC. If missing, the first NIC in the list will be the primary",
              args: { name: "primary-nic" },
            },
          ],
        },
        {
          name: "set",
          description: "Configure settings of a NIC attached to a VM",
          options: [
            {
              name: "--nics",
              description: "Names or IDs of NICs",
              args: { name: "nics", isVariadic: true },
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
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--primary-nic",
              description:
                "Name or ID of the primary NIC. If missing, the first NIC in the list will be the primary",
              args: { name: "primary-nic" },
            },
          ],
        },
        {
          name: "show",
          description: "Display information for a NIC attached to a VM",
          options: [
            {
              name: "--nic",
              description: "NIC name or ID",
              args: { name: "nic" },
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
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "run-command",
      description: "Manage run commands on a Virtual Machine",
      subcommands: [
        {
          name: "create",
          description: "The operation to create the run command",
          options: [
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
              name: "--vm-name",
              description: "The name of the virtual machine",
              args: { name: "vm-name" },
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
                "Specify the Azure storage blob where script error stream will be uploaded",
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
                "Specify the Azure storage blob (SAS URI) where script output stream will be uploaded",
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
          description: "The operation to delete the run command",
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
              name: "--vm-name",
              description: "The name of the VirtualMachine",
              args: { name: "vm-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "invoke",
          description: "Execute a specific run command on a vm",
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
              name: ["--name", "-n"],
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
          description: "List run commands from a VM or a location",
          options: [
            {
              name: "--expand",
              description: "The expand expression to apply on the operation",
              args: { name: "expand" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--vm-name",
              description: "The name of the virtual machine",
              args: { name: "vm-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get specific run command",
          options: [
            {
              name: "--command-id",
              description: "The command id",
              args: { name: "command-id" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--instance-view",
              description: "The instance view of a run command",
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--run-command-name", "--name"],
              description: "The name of the virtual machine run command",
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
              name: "--vm-name",
              description: "The name of the virtual machine",
              args: { name: "vm-name" },
            },
          ],
        },
        {
          name: "update",
          description: "The operation to update the run command",
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
                "Specify the Azure storage blob where script error stream will be uploaded",
              args: { name: "error-blob-uri" },
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--output-blob-uri",
              description:
                "Specify the Azure storage blob (SAS URI) where script output stream will be uploaded",
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
              name: "--vm-name",
              description: "The name of the virtual machine",
              args: { name: "vm-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the res virtual-machine-run-command is met",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--command-id",
              description: "The command id",
              args: { name: "command-id" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--instance-view",
              description: "The instance view of a run command",
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--run-command-name", "--name"],
              description: "The name of the virtual machine run command",
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
              name: "--vm-name",
              description: "The name of the virtual machine",
              args: { name: "vm-name" },
            },
          ],
        },
      ],
    },
    {
      name: "secret",
      description: "Manage VM secrets",
      subcommands: [
        {
          name: "add",
          description: "Add a secret to a VM",
          options: [
            {
              name: "--certificate",
              description: "Key vault certificate name or its full secret URL",
              args: { name: "certificate" },
              isRequired: true,
            },
            {
              name: "--keyvault",
              description: "Name or ID of the key vault",
              args: { name: "keyvault" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--certificate-store",
              description: "Windows certificate store names. Default: My",
              args: { name: "certificate-store" },
            },
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
        {
          name: "format",
          description:
            "Transform secrets into a form that can be used by VMs and VMSSes",
          options: [
            {
              name: ["--secrets", "-s"],
              description:
                "Space-separated list of key vault secret URIs. Perhaps, produced by 'az keyvault secret list-versions --vault-name vaultname -n cert1 --query \"[?attributes.enabled].id\" -o tsv'",
              args: { name: "secrets", isVariadic: true },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--certificate-store",
              description: "Windows certificate store names. Default: My",
              args: { name: "certificate-store" },
            },
            changeReference,
            {
              name: "--keyvault",
              description: "Name or ID of the key vault",
              args: { name: "keyvault" },
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
          name: "list",
          description: "List secrets on a VM",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
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
          name: "remove",
          description: "Remove a secret from a VM",
          options: [
            {
              name: "--keyvault",
              description: "Name or ID of the key vault",
              args: { name: "keyvault" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--certificate",
              description: "Key vault certificate name or its full secret URL",
              args: { name: "certificate" },
            },
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
      name: "unmanaged-disk",
      description: "Manage the unmanaged data disks attached to a VM",
      subcommands: [
        {
          name: "attach",
          description: "Attach an unmanaged persistent disk to a VM",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
              isRequired: true,
            },
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
              name: "--lun",
              description:
                "0-based logical unit number (LUN). Max value depends on the Virtual Machine size",
              args: { name: "lun" },
            },
            {
              name: ["--name", "-n"],
              description: "The data disk name",
              args: { name: "name" },
            },
            { name: "--new", description: "Create a new disk" },
            {
              name: ["--size-gb", "-z"],
              description:
                "Size in GB. Max size: 4095 GB (certain preview disks can be larger)",
              args: { name: "size-gb" },
            },
            {
              name: "--vhd-uri",
              description:
                "Virtual hard disk URI. For example: https://mystorage.blob.core.windows.net/vhds/d1.vhd",
              args: { name: "vhd-uri" },
            },
          ],
        },
        {
          name: "detach",
          description: "Detach an unmanaged disk from a VM",
          options: [
            {
              name: ["--name", "-n"],
              description: "The data disk name",
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
              name: "--vm-name",
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "list",
          description: "List unmanaged disks of a VM",
          options: [
            {
              name: ["--vm-name", "--name", "-n"],
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "vm-name" },
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
      name: "user",
      description: "Manage user accounts for a VM",
      subcommands: [
        {
          name: "delete",
          description: "Delete a user account from a VM",
          options: [
            {
              name: ["--username", "-u"],
              description: "The user name",
              args: { name: "username" },
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
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
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
          name: "reset-ssh",
          description: "Reset the SSH configuration on a VM",
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
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
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
          name: "update",
          description:
            "Update a user account for VM. You can use it to update password or ssh key value for VM user",
          options: [
            {
              name: ["--username", "-u"],
              description: "The user name",
              args: { name: "username" },
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
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--password", "-p"],
              description: "The user password",
              args: { name: "password" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--ssh-key-value",
              description:
                "SSH public key file value or public key file path. This command appends the new public key text to the ~/.ssh/authorized_keys file for the admin user on the VM. This does not replace or remove any existing SSH keys",
              args: { name: "ssh-key-value" },
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
  ],
};

export default completion;
