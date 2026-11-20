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
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
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
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
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
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optAvailabilityDomain: Fig.Option = {
  name: "--availability-domain",
  description: "The name of the availability domain",
  args: { name: "availability-domain" },
};
const optInstanceId: Fig.Option = {
  name: "--instance-id",
  description: "The OCID of the instance",
  args: { name: "instance-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED"] },
  isRepeatable: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the given display name exactly",
  args: { name: "display-name" },
};
const optImageId: Fig.Option = {
  name: "--image-id",
  description: "The OCID of the image",
  args: { name: "image-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "MOVING",
      "PROVISIONING",
      "RUNNING",
      "STARTING",
      "STOPPING",
      "STOPPED",
      "CREATING_IMAGE",
      "TERMINATING",
      "TERMINATED",
    ],
  },
  isRepeatable: true,
};
const optAgentConfig: Fig.Option = {
  name: "--agent-config",
  args: { name: "json" },
};
const optAvailabilityConfig: Fig.Option = {
  name: "--availability-config",
  args: { name: "json" },
};
const optCapacityReservationId: Fig.Option = {
  name: "--capacity-reservation-id",
  description:
    "The OCID of the compute capacity reservation this instance is launched under",
  args: { name: "capacity-reservation-id" },
};
const optDedicatedVmHostId: Fig.Option = {
  name: "--dedicated-vm-host-id",
  description:
    "The OCID of the dedicated virtual machine host to place the instance on",
  args: { name: "dedicated-vm-host-id" },
};
const optExtendedMetadata: Fig.Option = {
  name: "--extended-metadata",
  description: "Additional metadata key/value pairs that you provide",
  args: { name: "json" },
};
const optFaultDomain: Fig.Option = {
  name: "--fault-domain",
  description:
    "A fault domain is a grouping of hardware and infrastructure within an availability domain",
  args: { name: "fault-domain" },
};
const optInstanceOptions: Fig.Option = {
  name: "--instance-options",
  args: { name: "json" },
};
const optIsAiEnterpriseEnabled: Fig.Option = {
  name: "--is-ai-enterprise-enabled",
  description: "Whether to enable AI enterprise on the instance",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLaunchOptions: Fig.Option = {
  name: "--launch-options",
  args: { name: "json" },
};
const optSecurityAttributes: Fig.Option = {
  name: "--security-attributes",
  description:
    "Security attributes are labels for a resource that can be referenced in a Zero Trust Packet Routing",
  args: { name: "json" },
};
const optShapeConfig: Fig.Option = {
  name: "--shape-config",
  args: { name: "json" },
};
const optCapacityTopologyId: Fig.Option = {
  name: "--capacity-topology-id",
  description: "The OCID of the compute capacity topology",
  args: { name: "capacity-topology-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
};
const optComputeHostId: Fig.Option = {
  name: "--compute-host-id",
  description: "The OCID of the compute host",
  args: { name: "compute-host-id" },
  isRequired: true,
};
const optInstanceId2: Fig.Option = {
  name: "--instance-id",
  description: "The OCID of the instance",
  args: { name: "instance-id" },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ATTACHING", "ATTACHED", "DETACHING", "DETACHED"] },
  isRepeatable: true,
};
const optListingId: Fig.Option = {
  name: "--listing-id",
  description: "The OCID of the listing",
  args: { name: "listing-id" },
  isRequired: true,
};
const optPlatformConfig: Fig.Option = {
  name: "--platform-config",
  args: { name: "json" },
};
const optSourceDetails: Fig.Option = {
  name: "--source-details",
  args: { name: "json" },
};
const optWaitForState4: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["ACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optCapacityReservationId2: Fig.Option = {
  name: "--capacity-reservation-id",
  description: "The OCID of the compute capacity reservation",
  args: { name: "capacity-reservation-id" },
  isRequired: true,
};
const optComputeClusterId: Fig.Option = {
  name: "--compute-cluster-id",
  description: "The OCID of the compute cluster",
  args: { name: "compute-cluster-id" },
  isRequired: true,
};
const optComputeGpuMemoryClusterId: Fig.Option = {
  name: "--compute-gpu-memory-cluster-id",
  description: "The OCID of the compute GPU memory cluster",
  args: { name: "compute-gpu-memory-cluster-id" },
  isRequired: true,
};
const optDedicatedVmHostId2: Fig.Option = {
  name: "--dedicated-vm-host-id",
  description: "The OCID of the dedicated VM host",
  args: { name: "dedicated-vm-host-id" },
  isRequired: true,
};
const optLicensingConfigs: Fig.Option = {
  name: "--licensing-configs",
  description:
    "The list of liscensing configurations with target update values",
  args: { name: "json" },
};
const optMetadata: Fig.Option = {
  name: "--metadata",
  description: "Custom metadata key/value string pairs that you provide",
  args: { name: "json" },
};
const optShape: Fig.Option = {
  name: "--shape",
  description: "The shape of the instance",
  args: { name: "shape" },
};
const optTimeMaintenanceRebootDue: Fig.Option = {
  name: "--time-maintenance-reboot-due",
  description:
    "For a VM instance, resets the scheduled time that the instance will be reboot migrated for infrastructure",
  args: { name: "datetime" },
};
const optUpdateOperationConstraint: Fig.Option = {
  name: "--update-operation-constraint",
  description:
    "The parameter acts as a fail-safe to prevent unwanted downtime when updating a running instance",
  args: { suggestions: ["ALLOW_DOWNTIME", "AVOID_DOWNTIME"] },
};
const optComputeHostGroupId: Fig.Option = {
  name: "--compute-host-group-id",
  description: "The OCID of the compute host group",
  args: { name: "compute-host-group-id" },
  isRequired: true,
};
const optDevice: Fig.Option = {
  name: "--device",
  description: "The device name",
  args: { name: "device" },
};
const optImageCapabilitySchemaId: Fig.Option = {
  name: "--image-capability-schema-id",
  description: "The OCID of the compute image capability schema",
  args: { name: "image-capability-schema-id" },
  isRequired: true,
};
const optInstanceConsoleHistoryId: Fig.Option = {
  name: "--instance-console-history-id",
  description: "The OCID of the console history",
  args: { name: "instance-console-history-id" },
  isRequired: true,
};
const optIsPvEncryptionInTransitEnabled: Fig.Option = {
  name: "--is-pv-encryption-in-transit-enabled",
  description:
    "Whether to enable in-transit encryption for the data volume's paravirtualized attachment",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsReadOnly: Fig.Option = {
  name: "--is-read-only",
  description: "Whether the attachment was created in read-only mode",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsShareable: Fig.Option = {
  name: "--is-shareable",
  description: "Whether the attachment should be created in shareable mode",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optPlacementConstraintDetails: Fig.Option = {
  name: "--placement-constraint-details",
  args: { name: "json" },
};
const optVolumeId: Fig.Option = {
  name: "--volume-id",
  description: "The OCID of the volume",
  args: { name: "volume-id" },
  isRequired: true,
};
const optWaitForState5: Fig.Option = {
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
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optAvailabilityDomain2: Fig.Option = {
  name: "--availability-domain",
  description: "The availability domain of the dedicated virtual machine host",
  args: { name: "availability-domain" },
  isRequired: true,
};
const optAvailabilityDomain3: Fig.Option = {
  name: "--availability-domain",
  description: "The availability domain of the instance",
  args: { name: "availability-domain" },
  isRequired: true,
};
const optCapacityConfig: Fig.Option = {
  name: "--capacity-config",
  description:
    "The capacity configuration selected to be configured for the Dedicated Virtual Machine host",
  args: { name: "capacity-config" },
};
const optClusterPlacementGroupId: Fig.Option = {
  name: "--cluster-placement-group-id",
  description: "The OCID of the cluster placement group of the instance",
  args: { name: "cluster-placement-group-id" },
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment you want the image to be created in",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optComputeClusterId2: Fig.Option = {
  name: "--compute-cluster-id",
  description:
    "The OCID of the compute cluster that the instance will be created in",
  args: { name: "compute-cluster-id" },
};
const optComputeGpuMemoryFabricId: Fig.Option = {
  name: "--compute-gpu-memory-fabric-id",
  description: "The OCID of the compute GPU memory fabric",
  args: { name: "compute-gpu-memory-fabric-id" },
  isRequired: true,
};
const optDedicatedVmHostShape: Fig.Option = {
  name: "--dedicated-vm-host-shape",
  description: "The dedicated virtual machine host shape",
  args: { name: "dedicated-vm-host-shape" },
  isRequired: true,
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name for the image",
  args: { name: "display-name" },
};
const optFaultDomain2: Fig.Option = {
  name: "--fault-domain",
  description:
    "The fault domain for the dedicated virtual machine host's assigned instances",
  args: { name: "fault-domain" },
};
const optGlobalImageCapabilitySchemaId: Fig.Option = {
  name: "--global-image-capability-schema-id",
  description: "The OCID of the compute global image capability schema",
  args: { name: "global-image-capability-schema-id" },
  isRequired: true,
};
const optHostnameLabel: Fig.Option = {
  name: "--hostname-label",
  description: "Deprecated",
  args: { name: "hostname-label" },
  deprecated: true,
};
const optImageId2: Fig.Option = {
  name: "--image-id",
  description: "Deprecated",
  args: { name: "image-id" },
  deprecated: true,
};
const optInstanceConfigurationId: Fig.Option = {
  name: "--instance-configuration-id",
  description:
    "The OCID of the Instance Configuration containing instance launch details",
  args: { name: "instance-configuration-id" },
};
const optInstanceConsoleConnectionId: Fig.Option = {
  name: "--instance-console-connection-id",
  description: "The OCID of the instance console connection",
  args: { name: "instance-console-connection-id" },
  isRequired: true,
};
const optIpxeScriptFile: Fig.Option = {
  name: "--ipxe-script-file",
  description: "This is an advanced option",
  args: { name: "file", template: "filepaths" },
};
const optIsBurstable: Fig.Option = {
  name: "--is-burstable",
  description:
    "Specifies if the Dedicated Virtual Machine Host (DVMH) is restricted to running only Burstable VMs",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsMemoryEncryptionEnabled: Fig.Option = {
  name: "--is-memory-encryption-enabled",
  description:
    "Specifies if the Dedicated Virtual Machine Host (DVMH) is restricted to running only Confidential VMs",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optLaunchMode: Fig.Option = {
  name: "--launch-mode",
  description:
    "Specifies the configuration mode for launching virtual machine (VM) instances",
  args: {
    suggestions: [
      "NATIVE",
      "EMULATED",
      "PARAVIRTUALIZED",
      "ACCELERATEDPV",
      "CUSTOM",
    ],
  },
};
const optLaunchVolumeAttachments: Fig.Option = {
  name: "--launch-volume-attachments",
  description:
    "Volume attachments to create as part of the launch instance operation",
  args: { name: "json" },
};
const optLicensingConfigs2: Fig.Option = {
  name: "--licensing-configs",
  description:
    "List of licensing configurations associated with target launch values",
  args: { name: "json" },
};
const optMetadata2: Fig.Option = {
  name: "--metadata",
  description:
    "Custom metadata key/value pairs that you provide, such as the SSH public key required to connect to",
  args: { name: "json" },
};
const optOperatingSystem: Fig.Option = {
  name: "--operating-system",
  description: "The image's operating system",
  args: { name: "operating-system" },
};
const optOperatingSystemVersion: Fig.Option = {
  name: "--operating-system-version",
  description: "The image's operating system version",
  args: { name: "operating-system-version" },
};
const optPreemptibleInstanceConfig: Fig.Option = {
  name: "--preemptible-instance-config",
  args: { name: "json" },
};
const optResourceVersion: Fig.Option = {
  name: "--resource-version",
  description: "Listing Resource Version",
  args: { name: "resource-version" },
  isRequired: true,
};
const optShape2: Fig.Option = {
  name: "--shape",
  description: "The shape of an instance",
  args: { name: "shape" },
};
const optShapeName: Fig.Option = {
  name: "--shape-name",
  description: "Shape name",
  args: { name: "shape-name" },
  isRequired: true,
};
const optVolumeAttachmentId: Fig.Option = {
  name: "--volume-attachment-id",
  description: "The OCID of the volume attachment",
  args: { name: "volume-attachment-id" },
  isRequired: true,
};
const optWaitForState6: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["ACTIVE", "CREATING", "DELETED", "DELETING", "FAILED"],
  },
  isRepeatable: true,
};
const optWaitForState7: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "AVAILABLE",
      "OCCUPIED",
      "PROVISIONING",
      "REPAIR",
      "UNAVAILABLE",
    ],
  },
  isRepeatable: true,
};
const optWaitForState8: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["CREATING", "ACTIVE", "DELETED"] },
  isRepeatable: true,
};
const optWaitForState9: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "PROVISIONING",
      "IMPORTING",
      "AVAILABLE",
      "EXPORTING",
      "DISABLED",
      "DELETED",
    ],
  },
  isRepeatable: true,
};
const optWaitForState10: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: ["REQUESTED", "GETTING-HISTORY", "SUCCEEDED", "FAILED"],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "compute",
  description: "Compute Service",
  subcommands: [
    {
      name: "instance",
      description: "A compute host",
      subcommands: [
        {
          name: "get",
          description: "Gets information about the specified instance",
          options: [optInstanceId, optFromJson],
        },
        {
          name: "launch",
          description:
            "Creates a new instance in the specified compartment and the specified availability domain",
          options: [
            optAvailabilityDomain3,
            optCompartmentId,
            optCapacityReservationId,
            optDedicatedVmHostId,
            optDefinedTags,
            optSecurityAttributes,
            optDisplayName,
            optExtendedMetadata,
            optFaultDomain,
            optClusterPlacementGroupId,
            optFreeformTags,
            optComputeClusterId2,
            optHostnameLabel,
            optImageId2,
            optIpxeScriptFile,
            optLaunchOptions,
            optInstanceOptions,
            optAvailabilityConfig,
            optPreemptibleInstanceConfig,
            optMetadata2,
            optAgentConfig,
            optShape2,
            optShapeConfig,
            optSourceDetails,
            optLaunchVolumeAttachments,
            optIsPvEncryptionInTransitEnabled,
            optPlatformConfig,
            optPlacementConstraintDetails,
            optIsAiEnterpriseEnabled,
            optInstanceConfigurationId,
            optLicensingConfigs2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--vnic-display-name",
              description:
                "A user-friendly name for the default VNIC attached to this instance",
              args: { name: "vnic-display-name" },
            },
            {
              name: "--nsg-ids",
              description:
                "A list of the OCIDs of the network security groups (NSGs) to add the VNIC to",
              args: { name: "json" },
            },
            {
              name: "--assign-public-ip",
              description:
                "Whether the default VNIC attached to this instance should be assigned a public IP address",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--private-ip",
              description:
                "A private IP address of your choice to assign to the default VNIC attached to this instance",
              args: { name: "private-ip" },
            },
            {
              name: "--skip-source-dest-check",
              description:
                "Indicates whether Source/Destination check is disabled on the VNIC",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--assign-private-dns-record",
              description: "Whether the VNIC should be assigned a DNS record",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--assign-ipv6-ip",
              description:
                "Assign an IPv6 address to the instance at launch time",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--ipv6-address-subnet-cidr-pairs",
              description:
                "A list of IPv6 addresses and subnet CIDR blocks (prefixes) to specify how IPv6 addresses are to be assigned",
              args: { name: "json" },
            },
            {
              name: "--user-data-file",
              description:
                "A file containing data that Cloud-Init can use to run custom scripts or provide custom Cloud-Init",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--ssh-authorized-keys-file",
              description:
                "A file containing one or more public SSH keys to be included in the ~/.ssh/authorized_keys file for",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--source-boot-volume-id",
              description:
                "The OCID of the boot volume used to boot the instance",
              args: { name: "source-boot-volume-id" },
            },
            {
              name: "--boot-volume-size-in-gbs",
              description: "The size of the boot volume in GBs",
              args: { name: "integer" },
            },
            {
              name: "--subnet-id",
              description:
                "The OCID of the subnet where the VNIC attached to this instance will be created",
              args: { name: "subnet-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "launch-instance-host-group-placement-constraint-details",
          description:
            "Creates a new instance in the specified compartment and the specified availability domain",
          options: [
            optAvailabilityDomain3,
            optCompartmentId,
            {
              name: "--placement-constraint-details-compute-host-group-id",
              description: "The OCID of the compute host group",
              args: {
                name: "placement-constraint-details-compute-host-group-id",
              },
              isRequired: true,
            },
            optCapacityReservationId,
            { name: "--create-vnic-details", args: { name: "json" } },
            optDedicatedVmHostId,
            optDefinedTags,
            optSecurityAttributes,
            optDisplayName,
            optExtendedMetadata,
            optFaultDomain,
            optClusterPlacementGroupId,
            optFreeformTags,
            optComputeClusterId2,
            optHostnameLabel,
            optImageId2,
            optIpxeScriptFile,
            optLaunchOptions,
            optInstanceOptions,
            optAvailabilityConfig,
            optPreemptibleInstanceConfig,
            optMetadata2,
            optAgentConfig,
            optShape2,
            optShapeConfig,
            optSourceDetails,
            {
              name: "--subnet-id",
              description: "Deprecated",
              args: { name: "subnet-id" },
              deprecated: true,
            },
            optLaunchVolumeAttachments,
            optIsPvEncryptionInTransitEnabled,
            optPlatformConfig,
            optIsAiEnterpriseEnabled,
            optInstanceConfigurationId,
            optLicensingConfigs2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "launch-instance-compute-bare-metal-host-placement-constraint-details",
          description:
            "Creates a new instance in the specified compartment and the specified availability domain",
          options: [
            optAvailabilityDomain3,
            optCompartmentId,
            {
              name: "--placement-constraint-details-compute-bare-metal-host-id",
              description: "The OCID of the compute bare metal host",
              args: {
                name: "placement-constraint-details-compute-bare-metal-host-id",
              },
              isRequired: true,
            },
            optCapacityReservationId,
            { name: "--create-vnic-details", args: { name: "json" } },
            optDedicatedVmHostId,
            optDefinedTags,
            optSecurityAttributes,
            optDisplayName,
            optExtendedMetadata,
            optFaultDomain,
            optClusterPlacementGroupId,
            optFreeformTags,
            optComputeClusterId2,
            optHostnameLabel,
            optImageId2,
            optIpxeScriptFile,
            optLaunchOptions,
            optInstanceOptions,
            optAvailabilityConfig,
            optPreemptibleInstanceConfig,
            optMetadata2,
            optAgentConfig,
            optShape2,
            optShapeConfig,
            optSourceDetails,
            {
              name: "--subnet-id",
              description: "Deprecated",
              args: { name: "subnet-id" },
              deprecated: true,
            },
            optLaunchVolumeAttachments,
            optIsPvEncryptionInTransitEnabled,
            optPlatformConfig,
            optIsAiEnterpriseEnabled,
            optInstanceConfigurationId,
            optLicensingConfigs2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the instances in the specified compartment and the specified availability domain",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            {
              name: "--capacity-reservation-id",
              description: "The OCID of the compute capacity reservation",
              args: { name: "capacity-reservation-id" },
            },
            {
              name: "--compute-cluster-id",
              description: "The OCID of the compute cluster",
              args: { name: "compute-cluster-id" },
            },
            optDisplayName2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "MOVING",
                  "PROVISIONING",
                  "RUNNING",
                  "STARTING",
                  "STOPPING",
                  "STOPPED",
                  "CREATING_IMAGE",
                  "TERMINATING",
                  "TERMINATED",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "terminate",
          description:
            "Permanently terminates (deletes) the specified instance",
          options: [
            optInstanceId,
            optIfMatch,
            {
              name: "--preserve-boot-volume",
              description:
                "Specifies whether to delete or preserve the boot volume when terminating an instance",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--preserve-data-volumes-created-at-launch",
              description:
                "Specifies whether to delete or preserve the data volumes created during launch when terminating an instance",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--recycle-level",
              description:
                "This optional parameter overrides recycle level for hosts",
              args: { suggestions: ["FULL_RECYCLE"] },
            },
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates certain fields on the specified instance",
          options: [
            optInstanceId,
            optIsAiEnterpriseEnabled,
            optCapacityReservationId,
            optDefinedTags,
            optSecurityAttributes,
            optDisplayName,
            optFreeformTags,
            optAgentConfig,
            optMetadata,
            optExtendedMetadata,
            optShape,
            optShapeConfig,
            optSourceDetails,
            optUpdateOperationConstraint,
            optInstanceOptions,
            optFaultDomain,
            optLaunchOptions,
            optAvailabilityConfig,
            optTimeMaintenanceRebootDue,
            optDedicatedVmHostId,
            optPlatformConfig,
            optLicensingConfigs,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-instance-update-instance-source-via-boot-volume-details",
          description: "Updates certain fields on the specified instance",
          options: [
            optInstanceId,
            {
              name: "--source-details-boot-volume-id",
              description:
                "The OCID of the boot volume used to boot the instance",
              args: { name: "source-details-boot-volume-id" },
              isRequired: true,
            },
            optIsAiEnterpriseEnabled,
            optCapacityReservationId,
            optDefinedTags,
            optSecurityAttributes,
            optDisplayName,
            optFreeformTags,
            optAgentConfig,
            optMetadata,
            optExtendedMetadata,
            optShape,
            optShapeConfig,
            optUpdateOperationConstraint,
            optInstanceOptions,
            optFaultDomain,
            optLaunchOptions,
            optAvailabilityConfig,
            optTimeMaintenanceRebootDue,
            optDedicatedVmHostId,
            optPlatformConfig,
            optLicensingConfigs,
            optIfMatch,
            {
              name: "--source-details-is-preserve-boot-volume-enabled",
              description:
                "Whether to preserve the boot volume that was previously attached to the instance after a successful",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-instance-update-instance-source-via-image-details",
          description: "Updates certain fields on the specified instance",
          options: [
            optInstanceId,
            {
              name: "--source-details-image-id",
              description: "The OCID of the image used to boot the instance",
              args: { name: "source-details-image-id" },
              isRequired: true,
            },
            optIsAiEnterpriseEnabled,
            optCapacityReservationId,
            optDefinedTags,
            optSecurityAttributes,
            optDisplayName,
            optFreeformTags,
            optAgentConfig,
            optMetadata,
            optExtendedMetadata,
            optShape,
            optShapeConfig,
            optUpdateOperationConstraint,
            optInstanceOptions,
            optFaultDomain,
            optLaunchOptions,
            optAvailabilityConfig,
            optTimeMaintenanceRebootDue,
            optDedicatedVmHostId,
            optPlatformConfig,
            optLicensingConfigs,
            optIfMatch,
            {
              name: "--source-details-is-preserve-boot-volume-enabled",
              description:
                "Whether to preserve the boot volume that was previously attached to the instance after a successful",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--source-details-boot-volume-size-in-gbs",
              description: "The size of the boot volume in GBs",
              args: { name: "integer" },
            },
            {
              name: "--source-details-kms-key-id",
              description:
                "The OCID of the Vault service key to assign as the master encryption key for the boot volume",
              args: { name: "source-details-kms-key-id" },
            },
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-instance-amd-vm-update-instance-platform-config",
          description: "Updates certain fields on the specified instance",
          options: [
            optInstanceId,
            optIsAiEnterpriseEnabled,
            optCapacityReservationId,
            optDefinedTags,
            optSecurityAttributes,
            optDisplayName,
            optFreeformTags,
            optAgentConfig,
            optMetadata,
            optExtendedMetadata,
            optShape,
            optShapeConfig,
            optSourceDetails,
            optUpdateOperationConstraint,
            optInstanceOptions,
            optFaultDomain,
            optLaunchOptions,
            optAvailabilityConfig,
            optTimeMaintenanceRebootDue,
            optDedicatedVmHostId,
            optLicensingConfigs,
            optIfMatch,
            {
              name: "--platform-config-is-symmetric-multi-threading-enabled",
              description:
                "Whether symmetric multithreading is enabled on the instance",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-instance-intel-vm-update-instance-platform-config",
          description: "Updates certain fields on the specified instance",
          options: [
            optInstanceId,
            optIsAiEnterpriseEnabled,
            optCapacityReservationId,
            optDefinedTags,
            optSecurityAttributes,
            optDisplayName,
            optFreeformTags,
            optAgentConfig,
            optMetadata,
            optExtendedMetadata,
            optShape,
            optShapeConfig,
            optSourceDetails,
            optUpdateOperationConstraint,
            optInstanceOptions,
            optFaultDomain,
            optLaunchOptions,
            optAvailabilityConfig,
            optTimeMaintenanceRebootDue,
            optDedicatedVmHostId,
            optLicensingConfigs,
            optIfMatch,
            {
              name: "--platform-config-is-symmetric-multi-threading-enabled",
              description:
                "Whether symmetric multithreading is enabled on the instance",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "action",
          description:
            "Performs one of the following power actions on the specified instance",
          options: [
            optInstanceId,
            {
              name: "--action",
              description: "The action to perform on the instance",
              args: { name: "action" },
              isRequired: true,
            },
            {
              name: "--action-type",
              description: "The type of power action to perform",
              args: { name: "action-type" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-windows-initial-creds",
          description: "Gets the generated credentials for the instance",
          options: [optInstanceId, optFromJson],
        },
        {
          name: "instance-action",
          description:
            "Performs one of the following power actions on the specified instance",
          options: [
            optInstanceId,
            {
              name: "--action",
              description: "The action to perform on the instance",
              args: { name: "action" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--allow-dense-reboot-migration",
              description:
                "For use with RESET and SOFTRESET actions on instances that use a DenseIO shape",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--delete-local-storage",
              description:
                "For bare metal instances that have local storage, this must be set to true to verify that the local storage",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--time-scheduled",
              description:
                "If present, this parameter will set (or re-set) the scheduled time that the instance will be reboot migrated",
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
        {
          name: "list-vnics",
          description:
            "Lists the VNICs that are attached to the specified instance",
          options: [
            optCompartmentId2,
            optAvailabilityDomain,
            optInstanceId2,
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
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "attach-vnic",
          description:
            "Creates a secondary VNIC and attaches it to the specified instance",
          options: [
            optInstanceId,
            {
              name: "--subnet-id",
              description: "The OCID of the subnet to create the VNIC in",
              args: { name: "subnet-id" },
            },
            {
              name: "--vlan-id",
              description: "The OCID of the VLAN to create the VNIC in",
              args: { name: "vlan-id" },
            },
            {
              name: "--nsg-ids",
              description:
                "A list of the OCIDs of the network security groups (NSGs) to add the VNIC to",
              args: { name: "json" },
            },
            {
              name: "--vnic-display-name",
              description: "A user-friendly name for the VNIC",
              args: { name: "vnic-display-name" },
            },
            {
              name: "--assign-public-ip",
              description:
                "Whether the VNIC should be assigned a public IP address",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--assign-ipv6-ip",
              description:
                "Assign an IPv6 address to the instance at launch time",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--ipv6-address-subnet-cidr-pairs",
              description:
                "A list of IPv6 addresses and subnet CIDR blocks (prefixes) to specify how IPv6 addresses are to be assigned",
              args: { name: "json" },
            },
            {
              name: "--skip-source-dest-check",
              description:
                "Indicates whether Source/Destination check is disabled on the VNIC",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--private-ip",
              description:
                "A private IP address of your choice to assign to the VNIC",
              args: { name: "private-ip" },
            },
            {
              name: "--assign-private-dns-record",
              description: "Whether the VNIC should be assigned a DNS record",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--hostname-label",
              description: "The hostname for the VNIC",
              args: { name: "hostname-label" },
            },
            {
              name: "--nic-index",
              description:
                "Which physical network interface card (NIC) the VNIC will use",
              args: { name: "integer" },
            },
            {
              name: "--wait",
              description:
                "If set, then wait for the attachment to complete and return the newly attached VNIC",
            },
            optFreeformTags,
            optDefinedTags,
            optFromJson,
          ],
        },
        {
          name: "detach-vnic",
          description: "Detaches and deletes the specified secondary VNIC",
          options: [
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC",
              args: { name: "vnic-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the instance's compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: ["ATTACHING", "ATTACHED", "DETACHING", "DETACHED"],
              },
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description:
            "Moves an instance into a different compartment within the same tenancy",
          options: [
            optInstanceId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the instance to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: ["ACCEPTED", "IN_PROGRESS", "FAILED", "SUCCEEDED"],
              },
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "vnic-attachment",
      description: "Represents an attachment between a VNIC and an instance",
      subcommands: [
        {
          name: "get",
          description: "Gets the information for the specified VNIC attachment",
          options: [
            {
              name: "--vnic-attachment-id",
              description: "The OCID of the VNIC attachment",
              args: { name: "vnic-attachment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the VNIC attachments in the specified compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optInstanceId2,
            optLimit,
            optPage,
            {
              name: "--vnic-id",
              description: "The OCID of the VNIC",
              args: { name: "vnic-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "volume-attachment",
      description:
        "A base object for all types of attachments between a storage volume and an instance",
      subcommands: [
        {
          name: "attach",
          description:
            "Attaches the specified storage volume to the specified instance",
          options: [
            optInstanceId,
            {
              name: "--type",
              description: "The type of volume",
              args: { name: "type" },
              isRequired: true,
            },
            optVolumeId,
            optDevice,
            optDisplayName,
            optIsReadOnly,
            optIsShareable,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "detach",
          description: "Detaches a storage volume from an instance",
          options: [
            optVolumeAttachmentId,
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
          description: "Gets information about the specified volume attachment",
          options: [optVolumeAttachmentId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the volume attachments in the specified compartment",
          options: [
            optCompartmentId2,
            optInstanceId2,
            optAvailabilityDomain,
            optLimit,
            optPage,
            {
              name: "--volume-id",
              description: "The OCID of the volume",
              args: { name: "volume-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates information about the specified volume attachment",
          options: [
            optVolumeAttachmentId,
            {
              name: "--iscsi-login-state",
              description: "The iscsi login state of the volume attachment",
              args: {
                suggestions: [
                  "UNKNOWN",
                  "LOGGING_IN",
                  "LOGIN_SUCCEEDED",
                  "LOGIN_FAILED",
                  "LOGGING_OUT",
                  "LOGOUT_SUCCEEDED",
                  "LOGOUT_FAILED",
                ],
              },
            },
            optIfMatch,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "attach-iscsi-volume",
          description:
            "Attaches the specified storage volume to the specified instance",
          options: [
            optInstanceId,
            optVolumeId,
            optDevice,
            optDisplayName,
            optIsReadOnly,
            optIsShareable,
            {
              name: "--use-chap",
              description:
                "Whether to use CHAP authentication for the volume attachment",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--encryption-in-transit-type",
              description:
                "Refer the top-level definition of encryptionInTransitType",
              args: { suggestions: ["NONE", "BM_ENCRYPTION_IN_TRANSIT"] },
            },
            {
              name: "--is-agent-auto-iscsi-login-enabled",
              description:
                "Whether to enable Oracle Cloud Agent to perform the iSCSI login and logout commands after the volume attach",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "attach-nvme-volume",
          description:
            "Attaches the specified storage volume to the specified instance",
          options: [
            optInstanceId,
            optVolumeId,
            optDevice,
            optDisplayName,
            optIsReadOnly,
            optIsShareable,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "attach-paravirtualized-volume",
          description:
            "Attaches the specified storage volume to the specified instance",
          options: [
            optInstanceId,
            optVolumeId,
            optDevice,
            optDisplayName,
            optIsReadOnly,
            optIsShareable,
            optIsPvEncryptionInTransitEnabled,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dedicated-vm-host-instance",
      description:
        "Condensed instance data when listing instances on a dedicated VM host",
      subcommands: [
        {
          name: "list",
          description:
            "Returns the list of instances on the dedicated virtual machine hosts that match the specified criteria",
          options: [
            optCompartmentId,
            optDedicatedVmHostId2,
            optAvailabilityDomain,
            {
              name: "--is-memory-encryption-enabled",
              description:
                "A filter to return only confidential Dedicated VM hosts (DVMH) or confidential VM instances on DVMH",
              args: { name: "boolean", suggestions: ["true", "false"] },
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
      ],
    },
    {
      name: "instance-maintenance-event",
      description:
        "It is the event in which the maintenance action will be performed on the customer instance on the scheduled",
      subcommands: [
        {
          name: "get",
          description: "Gets the maintenance event for the given instance",
          options: [
            {
              name: "--instance-maintenance-event-id",
              description: "The OCID of the instance maintenance event",
              args: { name: "instance-maintenance-event-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of all the maintenance events for the given compartment",
          options: [
            optCompartmentId,
            optInstanceId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "SCHEDULED",
                  "QUEUED",
                  "STARTED",
                  "PROCESSING",
                  "SUCCEEDED",
                  "FAILED",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--correlation-token",
              description:
                "A filter to only return resources that have a matching correlationToken",
              args: { name: "correlation-token" },
            },
            {
              name: "--instance-action",
              description:
                "A filter to only return resources that match the given instance action",
              args: { name: "instance-action" },
            },
            {
              name: "--time-window-start-greater-than-or-equal-to",
              description:
                "Starting range to return the maintenances which are not completed (date-time is in RFC3339 format)",
              args: { name: "datetime" },
            },
            {
              name: "--time-window-start-less-than-or-equal-to",
              description:
                "Ending range to return the maintenances which are not completed (date-time is in RFC3339 format)",
              args: { name: "datetime" },
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
          name: "update",
          description: "Updates the maintenance event for the given instance",
          options: [
            {
              name: "--instance-maintenance-event-id",
              description: "The OCID of the instance maintenance event",
              args: { name: "instance-maintenance-event-id" },
              isRequired: true,
            },
            {
              name: "--time-window-start",
              description:
                "The beginning of the time window when Maintenance is scheduled to begin",
              args: { name: "datetime" },
            },
            {
              name: "--alternative-resolution-action",
              description:
                "One of the alternativeResolutionActions that was provided in the InstanceMaintenanceEvent",
              args: { suggestions: ["REBOOT_MIGRATION", "TERMINATE"] },
            },
            {
              name: "--can-delete-local-storage",
              description:
                "This field is only applicable when setting the alternativeResolutionAction",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDisplayName,
            optDefinedTags,
            optFreeformTags,
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
      name: "compute-gpu-memory-cluster",
      description:
        "The customer facing object includes GPU Memory Cluster details",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a compute GPU memory cluster into a different compartment",
          options: [
            optComputeGpuMemoryClusterId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the compute GPU memory cluster to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Create a compute GPU memory cluster instance on a specific compute GPU memory fabric",
          options: [
            {
              name: "--availability-domain",
              description: "The availability domain of the GPU Memory Cluster",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the compute GPU Memory Cluster. compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optComputeClusterId,
            {
              name: "--instance-configuration-id",
              description:
                "Instance Configuration to be used for this GPU Memory Cluster",
              args: { name: "instance-configuration-id" },
              isRequired: true,
            },
            {
              name: "--gpu-memory-fabric-id",
              description: "The OCID of the GPU memory fabric",
              args: { name: "gpu-memory-fabric-id" },
            },
            {
              name: "--size",
              description:
                "The desired number of instances for the GPU Memory Cluster",
              args: { name: "integer" },
            },
            optDefinedTags,
            optFreeformTags,
            optDisplayName,
            {
              name: "--gpu-memory-cluster-scale-config",
              args: { name: "json" },
            },
            {
              name: "--private-ip-ids",
              description:
                "Unique list of OCIDs for private IPs (IPv4/IPv6) associated with the GPU Memory Cluster",
              args: { name: "json" },
            },
            {
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
          name: "delete",
          description:
            "Terminates and deletes the specified compute GPU memory cluster and underlying instances",
          options: [
            optComputeGpuMemoryClusterId,
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
            "Gets information about the specified compute GPU memory cluster",
          options: [optComputeGpuMemoryClusterId, optFromJson],
        },
        {
          name: "list",
          description: "List all of the compute GPU memory clusters",
          options: [
            optCompartmentId,
            {
              name: "--compute-gpu-memory-cluster-id",
              description:
                "A filter to return only the listings that matches the given GPU memory cluster id",
              args: { name: "compute-gpu-memory-cluster-id" },
            },
            {
              name: "--compute-gpu-memory-fabric-id",
              description:
                "A filter to return only the listings that matches the given GPU memory fabric id",
              args: { name: "compute-gpu-memory-fabric-id" },
            },
            optAvailabilityDomain,
            optDisplayName2,
            {
              name: "--compute-cluster-id",
              description: "The OCID of the compute cluster",
              args: { name: "compute-cluster-id" },
            },
            optPage,
            optSortBy,
            optSortOrder,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a compute gpu memory cluster resource",
          options: [
            optComputeGpuMemoryClusterId,
            {
              name: "--instance-configuration-id",
              description:
                "Instance Configuration to be used for this GPU Memory Cluster",
              args: { name: "instance-configuration-id" },
            },
            {
              name: "--size",
              description:
                "The desired number of instances for the GPU Memory Cluster",
              args: { name: "integer" },
            },
            optDefinedTags,
            optFreeformTags,
            optDisplayName,
            {
              name: "--gpu-memory-cluster-scale-config",
              args: { name: "json" },
            },
            {
              name: "--private-ip-ids",
              description:
                "Unique list of OCIDs for private IPs (IPv4/IPv6) associated with the GPU Memory Cluster",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            {
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
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "instance-console-connection",
      description:
        "The InstanceConsoleConnection API provides you with console access to Compute instances",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the specified instance console connection",
          options: [
            optInstanceConsoleConnectionId,
            optIfMatch,
            optForce2,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the specified instance console connection's information",
          options: [optInstanceConsoleConnectionId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the console connections for the specified compartment or instance",
          options: [
            optCompartmentId,
            optInstanceId2,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the defined tags and free-form tags for the specified instance console connection",
          options: [
            optInstanceConsoleConnectionId,
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new serial console connection to the specified instance",
          options: [
            {
              name: "--instance-id",
              description:
                "The OCID of the instance to create the console connection to",
              args: { name: "instance-id" },
              isRequired: true,
            },
            optDefinedTags,
            optFreeformTags,
            optWaitForState6,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--ssh-public-key-file",
              description:
                "A file containing the SSH public key used to authenticate the serial console connection",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-plink-connection-string",
          options: [
            {
              name: "--instance-console-connection-id",
              description: "The OCID of the intance console connection",
              args: { name: "instance-console-connection-id" },
              isRequired: true,
            },
            {
              name: "--private-key-file",
              description:
                "The path to the private key to be used for authentication",
              args: { name: "private-key-file", template: "filepaths" },
              isRequired: true,
            },
            { name: "--local-vnc-port", args: { name: "local-vnc-port" } },
            { name: "--ssh-proxy-port", args: { name: "ssh-proxy-port" } },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "compute-gpu-memory-cluster-instance-summary",
      description:
        "The customer facing GPU Memory Cluster instance object details",
      subcommands: [
        {
          name: "list-compute-gpu-memory-cluster-instances",
          description: "List all of the GPU memory cluster instances",
          options: [
            optComputeGpuMemoryClusterId,
            optPage,
            optSortBy,
            optSortOrder,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "compute-gpu-memory-fabric",
      description:
        "The customer facing object includes GPU memory fabric details",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a compute GPU memory fabric into a different compartment",
          options: [
            optComputeGpuMemoryFabricId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the compute GPU memory fabric to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified compute GPU memory fabric",
          options: [optComputeGpuMemoryFabricId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the compute GPU memory fabrics that match the specified criteria and compartmentId",
          options: [
            optCompartmentId,
            {
              name: "--compute-gpu-memory-fabric-id",
              description:
                "A filter to return only the listings that matches the given GPU memory fabric id",
              args: { name: "compute-gpu-memory-fabric-id" },
            },
            optAvailabilityDomain,
            optDisplayName2,
            {
              name: "--compute-hpc-island-id",
              description: "The OCID of the compute HPC island",
              args: { name: "compute-hpc-island-id" },
            },
            {
              name: "--compute-network-block-id",
              description: "The OCID of the compute network block",
              args: { name: "compute-network-block-id" },
            },
            {
              name: "--compute-gpu-memory-fabric-lifecycle-state",
              description:
                "A filter to return ComputeGpuMemoryFabricSummary resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "AVAILABLE",
                  "OCCUPIED",
                  "PROVISIONING",
                  "DEGRADED",
                  "UNAVAILABLE",
                ],
              },
            },
            {
              name: "--compute-gpu-memory-fabric-health",
              description:
                "A filter to return ComputeGpuMemoryFabricSummary resources that match the given fabric health",
              args: { suggestions: ["HEALTHY", "UNHEALTHY"] },
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
          name: "update",
          description:
            "Customer can update displayName, tags and desired firmware bundle",
          options: [
            optComputeGpuMemoryFabricId,
            optDefinedTags,
            optFreeformTags,
            optDisplayName,
            { name: "--memory-fabric-preferences", args: { name: "json" } },
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "AVAILABLE",
                  "OCCUPIED",
                  "PROVISIONING",
                  "DEGRADED",
                  "UNAVAILABLE",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dedicated-vm-host",
      description:
        "A dedicated virtual machine host lets you host multiple VM instances on a dedicated server that is not shared",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a dedicated virtual machine host from one compartment to another",
          options: [
            optDedicatedVmHostId2,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the dedicated virtual machine host to",
              args: { name: "compartment-id" },
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
          name: "create",
          description:
            "Creates a new dedicated virtual machine host in the specified compartment and the specified availability",
          options: [
            optAvailabilityDomain2,
            optCompartmentId,
            optDedicatedVmHostShape,
            optDefinedTags,
            optDisplayName,
            optFaultDomain2,
            optFreeformTags,
            optPlacementConstraintDetails,
            optCapacityConfig,
            optIsMemoryEncryptionEnabled,
            optIsBurstable,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-dedicated-vm-host-host-group-placement-constraint-details",
          description:
            "Creates a new dedicated virtual machine host in the specified compartment and the specified availability",
          options: [
            optAvailabilityDomain2,
            optCompartmentId,
            optDedicatedVmHostShape,
            {
              name: "--placement-constraint-details-compute-host-group-id",
              description: "The OCID of the compute host group",
              args: {
                name: "placement-constraint-details-compute-host-group-id",
              },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFaultDomain2,
            optFreeformTags,
            optCapacityConfig,
            optIsMemoryEncryptionEnabled,
            optIsBurstable,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-dedicated-vm-host-compute-bare-metal-host-placement-constraint-details",
          description:
            "Creates a new dedicated virtual machine host in the specified compartment and the specified availability",
          options: [
            optAvailabilityDomain2,
            optCompartmentId,
            optDedicatedVmHostShape,
            {
              name: "--placement-constraint-details-compute-bare-metal-host-id",
              description: "The OCID of the compute bare metal host",
              args: {
                name: "placement-constraint-details-compute-bare-metal-host-id",
              },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFaultDomain2,
            optFreeformTags,
            optCapacityConfig,
            optIsMemoryEncryptionEnabled,
            optIsBurstable,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified dedicated virtual machine host",
          options: [
            optDedicatedVmHostId2,
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
            "Gets information about the specified dedicated virtual machine host",
          options: [optDedicatedVmHostId2, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns the list of dedicated virtual machine hosts that match the specified criteria in the specified",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
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
            optDisplayName2,
            {
              name: "--instance-shape-name",
              description: "The name for the instance's shape",
              args: { name: "instance-shape-name" },
            },
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--remaining-memory-in-gbs-greater-than-or-equal-to",
              description:
                "The remaining memory of the dedicated VM host, in GBs",
              args: { name: "number" },
            },
            {
              name: "--remaining-ocpus-greater-than-or-equal-to",
              description: "The available OCPUs of the dedicated VM host",
              args: { name: "number" },
            },
            {
              name: "--remaining-local-volume-in-gbs-greater-than-or-equal-to",
              description:
                "The remaining local volume of the dedicated VM host, in GBs",
              args: { name: "number" },
            },
            {
              name: "--is-memory-encryption-enabled",
              description:
                "A filter to return only confidential Dedicated VM hosts (DVMH) or confidential VM instances on DVMH",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the displayName, freeformTags, and definedTags attributes for the specified dedicated virtual machine",
          options: [
            optDedicatedVmHostId2,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState5,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "instance-shape",
          description:
            "The shape used to launch instances associated with the dedicated VM host",
          subcommands: [
            {
              name: "list",
              description:
                "Lists the shapes that can be used to launch a virtual machine instance on a dedicated virtual machine host",
              options: [
                optCompartmentId,
                optAvailabilityDomain,
                {
                  name: "--dedicated-vm-host-shape",
                  description: "Dedicated VM host shape name",
                  args: { name: "dedicated-vm-host-shape" },
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
          name: "host-shape",
          description:
            "The shape used to launch the dedicated virtual machine (VM) host",
          subcommands: [
            {
              name: "list",
              description:
                "Lists the shapes that can be used to launch a dedicated virtual machine host within the specified compartment",
              options: [
                optCompartmentId,
                optAvailabilityDomain,
                {
                  name: "--instance-shape-name",
                  description: "The name for the instance's shape",
                  args: { name: "instance-shape-name" },
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
      ],
    },
    {
      name: "image",
      description: "A boot disk image for launching an instance",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an image into a different compartment within the same tenancy",
          options: [
            optImageId,
            {
              name: "--compartment-id",
              description: "The OCID of the compartment to move the image to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a boot disk image for the specified instance or imports an exported image from the Oracle Cloud",
          options: [
            optCompartmentId3,
            optDefinedTags,
            optDisplayName3,
            optFreeformTags,
            { name: "--image-source-details", args: { name: "json" } },
            {
              name: "--instance-id",
              description:
                "The OCID of the instance you want to use as the basis for the image",
              args: { name: "instance-id" },
            },
            optLaunchMode,
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an image",
          options: [
            optImageId,
            optIfMatch,
            optForce2,
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified image",
          options: [optImageId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists a subset of images available in the specified compartment, including platform images and custom images",
          options: [
            optCompartmentId,
            optDisplayName2,
            optOperatingSystem,
            optOperatingSystemVersion,
            {
              name: "--shape",
              description: "Shape name",
              args: { name: "shape" },
            },
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "PROVISIONING",
                  "IMPORTING",
                  "AVAILABLE",
                  "EXPORTING",
                  "DISABLED",
                  "DELETED",
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
          description: "Updates the display name of the image",
          options: [
            optImageId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--operating-system",
              description: "Operating system",
              args: { name: "operating-system" },
            },
            {
              name: "--operating-system-version",
              description: "Operating system version",
              args: { name: "operating-system-version" },
            },
            optIfMatch,
            optForce,
            optWaitForState9,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "export",
          description:
            "Exports an image to the Oracle Cloud Infrastructure Object Storage Service",
          subcommands: [
            {
              name: "to-object",
              description:
                "Exports the specified image to the Oracle Cloud Infrastructure Object Storage Service using the namespace",
              options: [
                optImageId,
                {
                  name: "--export-format",
                  description: "The format to export the image to",
                  args: { suggestions: ["QCOW2", "VMDK", "OCI", "VHD", "VDI"] },
                },
                optIfMatch,
                {
                  name: ["--namespace", "-ns"],
                  description:
                    "The Object Storage Service namespace to export the image to",
                  args: { name: "namespace" },
                  isRequired: true,
                },
                {
                  name: ["--bucket-name", "-bn"],
                  description: "The name of the bucket to export the image to",
                  args: { name: "bucket-name" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description:
                    "The name which will be given to the exported image object",
                  args: { name: "name" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "to-object-uri",
              description:
                "Exports the specified image to the Oracle Cloud Infrastructure Object Storage Service using the Object",
              options: [
                optImageId,
                {
                  name: "--export-format",
                  description: "The format to export the image to",
                  args: { suggestions: ["QCOW2", "VMDK", "OCI", "VHD", "VDI"] },
                },
                optIfMatch,
                {
                  name: "--uri",
                  description: "The Object Storage URL to export the image to",
                  args: { name: "uri" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "import",
          description:
            "Imports an exported image from the Oracle Cloud Infrastructure Object Storage Service",
          subcommands: [
            {
              name: "from-object",
              description:
                "Imports an exported image from the Oracle Cloud Infrastructure Object Storage Service using the namespace",
              options: [
                optCompartmentId3,
                optDefinedTags,
                optDisplayName3,
                optFreeformTags,
                optLaunchMode,
                {
                  name: ["--namespace", "-ns"],
                  description:
                    "The Object Storage Service namespace to import the image from",
                  args: { name: "namespace" },
                  isRequired: true,
                },
                {
                  name: ["--bucket-name", "-bn"],
                  description:
                    "The name of the bucket to import the image from",
                  args: { name: "bucket-name" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description:
                    "The name of the object identifying the image to import",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--source-image-type",
                  description: "The format of the image to be imported",
                  args: { suggestions: ["QCOW2", "VMDK"] },
                },
                optOperatingSystem,
                optOperatingSystemVersion,
                optFromJson,
              ],
            },
            {
              name: "from-object-uri",
              description:
                "Imports an exported image from the Oracle Cloud Infrastructure Object Storage Service using the Object",
              options: [
                optCompartmentId3,
                optDefinedTags,
                optDisplayName3,
                optFreeformTags,
                optLaunchMode,
                {
                  name: "--uri",
                  description:
                    "The Object Storage URL to import the image from",
                  args: { name: "uri" },
                  isRequired: true,
                },
                {
                  name: "--source-image-type",
                  description: "The format of the image to be imported",
                  args: { suggestions: ["QCOW2", "VMDK"] },
                },
                optOperatingSystem,
                optOperatingSystemVersion,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "instance-maintenance-reboot",
      description:
        "The maximum possible date and time that a maintenance reboot can be extended",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the maximum possible date that a maintenance reboot can be extended",
          options: [optInstanceId, optFromJson],
        },
      ],
    },
    {
      name: "compute-host",
      description: "The customer facing object includes host details",
      subcommands: [
        {
          name: "apply-host-configuration",
          description:
            "Triggers the asynchronous process that applies the host's target configuration",
          options: [
            optComputeHostId,
            optIfMatch,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "attach",
          description: "Attaches the Compute BM Host to a Host group",
          options: [
            optComputeHostId,
            {
              name: "--compute-host-group-id",
              description: "'The OCID of the compute host group.'",
              args: { name: "compute-host-group-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a compute host into a different compartment",
          options: [
            optComputeHostId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the compute host to",
              args: { name: "compartment-id" },
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
          name: "check-host-configuration",
          description:
            "Marks the host to be checked for conformance to its target configuration",
          options: [
            optComputeHostId,
            optIfMatch,
            optWaitForState7,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "detach",
          description:
            "Detaches the specified bare metal host from the compute host group",
          options: [
            optComputeHostId,
            {
              name: "--compute-host-group-id",
              description: "'The OCID of the compute host group.'",
              args: { name: "compute-host-group-id" },
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
          name: "get",
          description: "Gets information about the specified compute host",
          options: [optComputeHostId, optFromJson],
        },
        {
          name: "list",
          description: "Generates a list of summary host details",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optDisplayName2,
            {
              name: "--network-resource-id",
              description:
                "The OCID of the compute host network resoruce. - Customer-unique HPC island ID",
              args: { name: "network-resource-id" },
            },
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            {
              name: "--compute-host-lifecycle-state",
              description:
                "A filter to return only ComputeHostSummary resources that match the given Compute Host lifecycle State OCID",
              args: { name: "compute-host-lifecycle-state" },
            },
            {
              name: "--compute-host-health",
              description:
                "A filter to return only ComputeHostSummary resources that match the given Compute Host health State OCID",
              args: { name: "compute-host-health" },
            },
            {
              name: "--compute-host-group-id",
              description: "The OCID of the compute host group",
              args: { name: "compute-host-group-id" },
            },
            {
              name: "--compute-host-in-subtree",
              description:
                "When set to true, all the compartments in the tenancy are traversed and the hosts in the specified tenancy",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Customer can update the some fields for ComputeHost record",
          options: [
            optComputeHostId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
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
      name: "firmware-bundle",
      description:
        "A collection of pinned component firmware versions organized by platform",
      subcommands: [
        {
          name: "get",
          description:
            "Returns the Firmware Bundle matching the provided firmwareBundleId",
          options: [
            {
              name: "--firmware-bundle-id",
              description: "Unique identifier for the firmware bundle",
              args: { name: "firmware-bundle-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of all Firmware Bundles in a compartment for specified platform",
          options: [
            {
              name: "--platform",
              description: "Platform name",
              args: { name: "platform" },
              isRequired: true,
            },
            optCompartmentId2,
            {
              name: "--is-default-bundle",
              description:
                "If true, return only the default firmware bundle for a given platform",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state name exactly",
              args: { name: "lifecycle-state" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "shape",
      description:
        "A compute instance shape that can be used in LaunchInstance",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the shapes that can be used to launch an instance within the specified compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optLimit,
            optPage,
            {
              name: "--image-id",
              description: "The OCID of an image",
              args: { name: "image-id" },
            },
            {
              name: "--shape",
              description: "Shape name",
              args: { name: "shape" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "compute-host-group",
      description: "Detail information for a compute host group",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a compute host group into a different compartment",
          options: [
            optComputeHostGroupId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the compute host group to",
              args: { name: "compartment-id" },
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
          name: "create",
          description:
            "Creates a new compute host group in the specified compartment and availability domain",
          options: [
            {
              name: "--availability-domain",
              description: "The availability domain of a host group",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains host group",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-targeted-placement-required",
              description:
                "A flag that allows customers to restrict placement for hosts attached to the group",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--configurations",
              description: "A list of HostGroupConfiguration objects",
              args: { name: "json" },
            },
            optDefinedTags,
            optFreeformTags,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified compute host group",
          options: [
            optComputeHostGroupId,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified compute host group",
          options: [optComputeHostGroupId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the compute host groups that match the specified criteria and compartment",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified compute host group details",
          options: [
            optComputeHostGroupId,
            optDisplayName,
            {
              name: "--configurations",
              description: "A list of HostGroupConfiguration objects",
              args: { name: "json" },
            },
            {
              name: "--is-targeted-placement-required",
              description:
                "A flag that allows customers to restrict placement for hosts attached to the group",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "image-shape-compatibility-entry",
      description: "An image and shape that are compatible",
      subcommands: [
        {
          name: "add",
          description:
            "Adds a shape to the compatible shapes list for the image",
          options: [
            optImageId,
            optShapeName,
            { name: "--memory-constraints", args: { name: "json" } },
            { name: "--ocpu-constraints", args: { name: "json" } },
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves an image shape compatibility entry",
          options: [optImageId, optShapeName, optFromJson],
        },
        {
          name: "list",
          description: "Lists the compatible shapes for the specified image",
          options: [
            optImageId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description:
            "Removes a shape from the compatible shapes list for the image",
          options: [optImageId, optShapeName, optForce2, optFromJson],
        },
      ],
    },
    {
      name: "compute-capacity-report",
      description:
        "A report of the host capacity within an availability domain that is available for you to create compute",
      subcommands: [
        {
          name: "create",
          description:
            "Generates a report of the host capacity within an availability domain that is available for you to create",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID for the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description: "The availability domain for the capacity report",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--shape-availabilities",
              description:
                "Information about the shapes in the capacity report",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "compute-cluster",
      description: "The data for creating a compute cluster",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a compute cluster into a different compartment within the same tenancy",
          options: [
            optComputeClusterId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the compute cluster to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an empty compute cluster",
          options: [
            {
              name: "--availability-domain",
              description:
                "The availability domain to place the compute cluster in",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            optCompartmentId,
            optDisplayName,
            optDefinedTags,
            optFreeformTags,
            optPlacementConstraintDetails,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a compute cluster",
          options: [
            optComputeClusterId,
            optIfMatch,
            optForce2,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a compute cluster",
          options: [optComputeClusterId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the compute clusters in the specified compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optDisplayName2,
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
          description: "Updates a compute cluster",
          options: [
            optComputeClusterId,
            optDisplayName,
            optDefinedTags,
            optFreeformTags,
            optPlacementConstraintDetails,
            optIfMatch,
            optForce,
            optWaitForState4,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "boot-volume-attachment",
      description:
        "Represents an attachment between a boot volume and an instance",
      subcommands: [
        {
          name: "attach",
          description:
            "Attaches the specified boot volume to the specified instance",
          options: [
            {
              name: "--boot-volume-id",
              description: "The OCID of the boot volume",
              args: { name: "boot-volume-id" },
              isRequired: true,
            },
            optInstanceId,
            optDisplayName,
            {
              name: "--encryption-in-transit-type",
              description:
                "Refer the top-level definition of encryptionInTransitType",
              args: { suggestions: ["NONE", "BM_ENCRYPTION_IN_TRANSIT"] },
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified boot volume attachment",
          options: [
            {
              name: "--boot-volume-attachment-id",
              description: "The OCID of the boot volume attachment",
              args: { name: "boot-volume-attachment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the boot volume attachments in the specified compartment",
          options: [
            {
              name: "--availability-domain",
              description: "The name of the availability domain",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            optCompartmentId,
            optLimit,
            optPage,
            optInstanceId2,
            {
              name: "--boot-volume-id",
              description: "The OCID of the boot volume",
              args: { name: "boot-volume-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "detach",
          description: "Detaches a boot volume from an instance",
          options: [
            {
              name: "--boot-volume-attachment-id",
              description: "The OCID of the boot volume attachment",
              args: { name: "boot-volume-attachment-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce2,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "measured-boot-report",
      description: "The measured boot report for a shielded instance",
      subcommands: [
        {
          name: "accept-shielded-integrity-policy",
          description:
            "Accept the changes to the PCR values in the measured boot report",
          options: [optInstanceId, optIfMatch, optFromJson],
        },
        {
          name: "get",
          description:
            "Gets the measured boot report for this shielded instance",
          options: [optInstanceId, optFromJson],
        },
      ],
    },
    {
      name: "device",
      description:
        "Device Path corresponding to the block devices attached to instances having a name and isAvailable flag",
      subcommands: [
        {
          name: "list-instance",
          description: "Gets a list of all the devices for given instance",
          options: [
            optInstanceId,
            {
              name: "--is-available",
              description:
                "A filter to return only available devices or only used devices",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--name",
              description:
                "A filter to return only devices that match the given name exactly",
              args: { name: "name" },
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
      ],
    },
    {
      name: "console-history",
      description: "An instance's serial console data",
      subcommands: [
        {
          name: "capture",
          description:
            "Captures the most recent serial console data (up to a megabyte) for the specified instance",
          options: [
            {
              name: "--instance-id",
              description:
                "The OCID of the instance to get the console history from",
              args: { name: "instance-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified console history metadata and the console history data",
          options: [
            optInstanceConsoleHistoryId,
            optIfMatch,
            optForce2,
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Shows the metadata for the specified console history",
          options: [optInstanceConsoleHistoryId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the console history metadata for the specified compartment or instance",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optLimit,
            optPage,
            optInstanceId2,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "REQUESTED",
                  "GETTING-HISTORY",
                  "SUCCEEDED",
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
          description: "Updates the specified console history metadata",
          options: [
            optInstanceConsoleHistoryId,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState10,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-content",
          description:
            "Gets the actual console history data (not the metadata)",
          options: [
            optInstanceConsoleHistoryId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--offset",
              description: "Offset of the snapshot data to retrieve",
              args: { name: "integer" },
            },
            {
              name: "--length",
              description: "Length of the snapshot data to retrieve",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "capacity-reservation",
      description:
        "A template that defines the settings to use when creating compute capacity reservations",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a compute capacity reservation into a different compartment",
          options: [
            optCapacityReservationId2,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the compute capacity reservation to",
              args: { name: "compartment-id" },
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
          name: "create",
          description:
            "Creates a new compute capacity reservation in the specified compartment and availability domain",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the capacity reservation",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--availability-domain",
              description:
                "The availability domain of this compute capacity reservation",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--is-default-reservation",
              description: "Whether this capacity reservation is the default",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--instance-reservation-configs",
              description:
                "The capacity configurations for the capacity reservation",
              args: { name: "json" },
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "UPDATING",
                  "MOVING",
                  "DELETED",
                  "DELETING",
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
          name: "delete",
          description: "Deletes the specified compute capacity reservation",
          options: [
            optCapacityReservationId2,
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
            "Gets information about the specified compute capacity reservation",
          options: [optCapacityReservationId2, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the specified capacity reservation and its associated capacity configurations",
          options: [
            optCapacityReservationId2,
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--is-default-reservation",
              description: "Whether this capacity reservation is the default",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--instance-reservation-configs",
              description:
                "The capacity configurations for the capacity reservation",
              args: { name: "json" },
            },
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
          description:
            "Lists the compute capacity reservations that match the specified criteria and compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "UPDATING",
                  "MOVING",
                  "DELETED",
                  "DELETING",
                ],
              },
            },
            optDisplayName2,
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
          name: "instance",
          description:
            "Condensed instance data when listing instances in a compute capacity reservation",
          subcommands: [
            {
              name: "list",
              description:
                "Lists the instances launched under a capacity reservation",
              options: [
                optCapacityReservationId2,
                optAvailabilityDomain,
                optCompartmentId2,
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "instance-shape",
          description:
            "An available shape used to launch instances in a compute capacity reservation",
          subcommands: [
            {
              name: "list",
              description:
                "Lists the shapes that can be reserved within the specified compartment",
              options: [
                optCompartmentId,
                optAvailabilityDomain,
                optLimit,
                optPage,
                optDisplayName2,
                optSortBy,
                optSortOrder,
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
      name: "capacity-topology",
      description:
        "A compute capacity topology that allows you to query your bare metal hosts and their RDMA network topology",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a compute capacity topology into a different compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the compute capacity topology to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCapacityTopologyId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new compute capacity topology in the specified compartment and availability domain",
          options: [
            {
              name: "--availability-domain",
              description:
                "The availability domain of this compute capacity topology",
              args: { name: "availability-domain" },
              isRequired: true,
            },
            {
              name: "--capacity-source",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains this compute capacity topology",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "UPDATING",
                  "DELETED",
                  "DELETING",
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
          name: "delete",
          description: "Deletes the specified compute capacity topology",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCapacityTopologyId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about the specified compute capacity topology",
          options: [optCapacityTopologyId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the compute capacity topologies in the specified compartment",
          options: [
            optCompartmentId,
            optAvailabilityDomain,
            optDisplayName2,
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
          description: "Updates the specified compute capacity topology",
          options: [
            { name: "--capacity-source", args: { name: "json" } },
            optDefinedTags,
            optDisplayName,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optCapacityTopologyId,
            optFromJson,
          ],
        },
        {
          name: "bare-metal-host",
          description: "A compute bare metal host",
          subcommands: [
            {
              name: "list",
              description:
                "Lists compute bare metal hosts in the specified compute capacity topology",
              options: [
                optAvailabilityDomain,
                optCompartmentId2,
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                optAll,
                optPageSize,
                optCapacityTopologyId,
                {
                  name: "--hpc-island-id",
                  description: "The OCID of the compute HPC island",
                  args: { name: "hpc-island-id" },
                },
                {
                  name: "--network-block-id",
                  description: "The OCID of the compute network block",
                  args: { name: "network-block-id" },
                },
                {
                  name: "--local-block-id",
                  description: "The OCID of the compute local block",
                  args: { name: "local-block-id" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "hpc-island",
          description: "A compute HPC island",
          subcommands: [
            {
              name: "list",
              description:
                "Lists compute HPC islands in the specified compute capacity topology",
              options: [
                optAvailabilityDomain,
                optCompartmentId2,
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                optAll,
                optPageSize,
                optCapacityTopologyId,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "network-block",
          description: "A compute network block",
          subcommands: [
            {
              name: "list",
              description:
                "Lists compute network blocks in the specified compute capacity topology",
              options: [
                optAvailabilityDomain,
                optCompartmentId2,
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                optAll,
                optPageSize,
                optCapacityTopologyId,
                {
                  name: "--hpc-island-id",
                  description: "The OCID of the compute HPC island",
                  args: { name: "hpc-island-id" },
                },
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "global-image-capability-schema",
      description: "Global Image Capability Schema",
      subcommands: [
        {
          name: "list",
          description:
            "Lists Compute Global Image Capability Schema in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "A filter to return only resources that match the given compartment OCID exactly",
              args: { name: "compartment-id" },
            },
            optDisplayName2,
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
          name: "get",
          description:
            "Gets the specified Compute Global Image Capability Schema",
          options: [optGlobalImageCapabilitySchemaId, optFromJson],
        },
      ],
    },
    {
      name: "global-image-capability-schema-version",
      description: "Global Image Capability Schema Version",
      subcommands: [
        {
          name: "list",
          description:
            "Lists Compute Global Image Capability Schema versions in the specified compartment",
          options: [
            optDisplayName2,
            optLimit,
            optPage,
            optSortBy,
            optSortOrder,
            optAll,
            optPageSize,
            optGlobalImageCapabilitySchemaId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the specified Compute Global Image Capability Schema Version",
          options: [
            optGlobalImageCapabilitySchemaId,
            {
              name: "--global-image-capability-schema-version-name",
              description:
                "The name of the compute global image capability schema version",
              args: { name: "global-image-capability-schema-version-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "image-capability-schema",
      description: "Image Capability Schema",
      subcommands: [
        {
          name: "list",
          description:
            "Lists Compute Image Capability Schema in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "A filter to return only resources that match the given compartment OCID exactly",
              args: { name: "compartment-id" },
            },
            {
              name: "--image-id",
              description: "The OCID of an image",
              args: { name: "image-id" },
            },
            optDisplayName2,
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
          name: "change-compartment",
          description:
            "Moves a compute image capability schema into a different compartment within the same tenancy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the instance configuration to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optImageCapabilitySchemaId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates compute image capability schema",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--image-id",
              description: "The ocid of the image",
              args: { name: "image-id" },
              isRequired: true,
            },
            {
              name: "--schema-data",
              description:
                "The map of each capability name to its ImageCapabilitySchemaDescriptor",
              args: { name: "json" },
              isRequired: true,
            },
            optFreeformTags,
            optDisplayName,
            optDefinedTags,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--global-image-capability-schema-version-name",
              description:
                "The name of the compute global image capability schema version",
              args: { name: "global-image-capability-schema-version-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified Compute Image Capability Schema",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optImageCapabilitySchemaId,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified Compute Image Capability Schema",
          options: [
            {
              name: "--is-merge-enabled",
              description:
                "Merge the image capability schema with the global image capability schema",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optImageCapabilitySchemaId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the specified Compute Image Capability Schema",
          options: [
            optDisplayName,
            optFreeformTags,
            {
              name: "--schema-data",
              description:
                "The map of each capability name to its ImageCapabilitySchemaDescriptor",
              args: { name: "json" },
            },
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState8,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optImageCapabilitySchemaId,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "pic",
      description: "Partner image catalog (PIC)",
      subcommands: [
        {
          name: "listing",
          description: "A PIC listing",
          subcommands: [
            {
              name: "list",
              description: "Lists the published listings",
              options: [
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--publisher-name",
                  description:
                    "A filter to return only the publisher that matches the given publisher name exactly",
                  args: { name: "publisher-name" },
                },
                {
                  name: "--publisher-type",
                  description:
                    "A filter to return only publishers that match the given publisher type exactly",
                  args: { name: "publisher-type" },
                },
                optDisplayName2,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets the specified listing",
              options: [optListingId, optFromJson],
            },
          ],
        },
        {
          name: "version",
          description: "A PIC listing resource version",
          subcommands: [
            {
              name: "list",
              description:
                "Gets all resource versions for a particular listing",
              options: [
                optListingId,
                optLimit,
                optPage,
                optSortOrder,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets the specified listing resource version",
              options: [optListingId, optResourceVersion, optFromJson],
            },
          ],
        },
        {
          name: "agreements",
          description: "PIC listing resource version agreements",
          subcommands: [
            {
              name: "get",
              description:
                "Retrieves the agreements for a particular resource version of a listing",
              options: [optListingId, optResourceVersion, optFromJson],
            },
          ],
        },
        {
          name: "subscription",
          description: "A PIC subscription",
          subcommands: [
            {
              name: "list",
              description: "Lists subscriptions for a compartment",
              options: [
                optCompartmentId,
                optLimit,
                optPage,
                optSortBy,
                optSortOrder,
                {
                  name: "--listing-id",
                  description:
                    "A filter to return only the listings that matches the given listing id",
                  args: { name: "listing-id" },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description:
                "Delete a subscription for a listing resource version for a compartment",
              options: [
                optListingId,
                optCompartmentId,
                optResourceVersion,
                optForce2,
                optFromJson,
              ],
            },
            {
              name: "create",
              description:
                "Create a subscription for listing resource version for a compartment",
              options: [
                {
                  name: "--compartment-id",
                  description: "The compartmentID for the subscription",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optListingId,
                {
                  name: "--time-retrieved",
                  description:
                    "Date and time the agreements were retrieved, in RFC3339 format",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                {
                  name: "--signature",
                  description:
                    "A generated signature for this listing resource version retrieved the agreements API",
                  args: { name: "signature" },
                  isRequired: true,
                },
                {
                  name: "--eula-link",
                  description: "EULA link",
                  args: { name: "eula-link" },
                },
                {
                  name: "--resource-version",
                  description: "Listing Resource Version",
                  args: { name: "resource-version" },
                },
                {
                  name: "--oracle-tou-link",
                  description: "Oracle Terms of Use link",
                  args: { name: "oracle-tou-link" },
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
