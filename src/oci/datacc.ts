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
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
      "WAITING",
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
  description: "For Optimistic concurrency control",
  args: { name: "if-match" },
};
const optInfrastructureId: Fig.Option = {
  name: "--infrastructure-id",
  description: "The OCID of the Database Infrastructure",
  args: { name: "infrastructure-id" },
  isRequired: true,
};
const optVmInstanceId: Fig.Option = {
  name: "--vm-instance-id",
  description: "The OCID of the VM instance",
  args: { name: "vm-instance-id" },
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
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return in a page",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which you want to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
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
    "The sort order that you want to use, which is either ASC or DESC",
  args: { suggestions: ["ASC", "DESC"] },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return resources that match the entire display name given",
  args: { name: "display-name" },
};
const optDnsServers: Fig.Option = {
  name: "--dns-servers",
  description: "The list of DNS server IP addresses",
  args: { name: "json" },
};
const optNtpServers: Fig.Option = {
  name: "--ntp-servers",
  description: "The list of NTP server IP addresses",
  args: { name: "json" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field by which you want to sort",
  args: { suggestions: ["timeCreated", "displayName", "buildIdentifier"] },
};
const optVmClusterNetworkId: Fig.Option = {
  name: "--vm-cluster-network-id",
  description: "The OCID of the VM cluster network",
  args: { name: "vm-cluster-network-id" },
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
const optListenerPort: Fig.Option = {
  name: "--listener-port",
  description: "The listener TCP/IP port",
  args: { name: "integer" },
};
const optListenerPortSsl: Fig.Option = {
  name: "--listener-port-ssl",
  description: "The listener TCP/IP SSL port",
  args: { name: "integer" },
};
const optMaintenanceRunId: Fig.Option = {
  name: "--maintenance-run-id",
  description: "The maintenance run OCID",
  args: { name: "maintenance-run-id" },
  isRequired: true,
};
const optNodeCount: Fig.Option = {
  name: "--node-count",
  description: "Count of virtual machines in this VM cluster",
  args: { name: "integer" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "datacc",
  description: "Database Infrastructure Cloud@Customer Service",
  subcommands: [
    {
      name: "infrastructure-scale-option",
      description: "The available scale options for the infrastructure",
      subcommands: [
        {
          name: "get",
          description:
            "Get the available scale options for the infrastructure that has the specified OCID",
          options: [optInfrastructureId, optFromJson],
        },
      ],
    },
    {
      name: "maintenance-execution",
      description: "Details of a maintenance executions",
      subcommands: [
        {
          name: "get",
          description: "Gets information about the specified OCID",
          options: [
            {
              name: "--maintenance-execution-id",
              description: "The maintenance execution OCID",
              args: { name: "maintenance-execution-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of the maintenance executions in the specified compartment",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--infrastructure-id",
              description: "The Database Infrastructure ID",
              args: { name: "infrastructure-id" },
            },
            {
              name: "--target-resource-type",
              description: "The type of the target resource",
              args: { suggestions: ["DB_CC_INFRASTRUCTURE"] },
            },
            {
              name: "--maintenance-type",
              description: "The maintenance type",
              args: { suggestions: ["PLANNED", "UNPLANNED"] },
            },
            {
              name: "--maintenance-run-id",
              description: "The maintenance run OCID",
              args: { name: "maintenance-run-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "CREATING",
                  "SCHEDULED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "SKIPPED",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "CANCELED",
                  "PARTIAL_SUCCESS",
                ],
              },
            },
            {
              name: "--maintenance-subtype",
              description: "The sub-type of the maintenance run",
              args: {
                suggestions: [
                  "YEARLY",
                  "HALFYEARLY",
                  "QUARTERLY",
                  "MONTHLY",
                  "DAILY",
                  "HARDWARE",
                  "CRITICAL",
                  "INFRA_UPDATE",
                  "CPS_SERVICES_UPDATE",
                  "CPS_VM_UPDATE",
                  "SECURITY_MONTHLY",
                ],
              },
            },
            {
              name: "--time-accepted-less-than-or-equal-to",
              description: "Filter maintenance run for before given time",
              args: { name: "datetime" },
            },
            {
              name: "--time-accepted-greater-than-or-equal-to",
              description: "Filter maintenance run for after given time",
              args: { name: "datetime" },
            },
            {
              name: "--type",
              description: "The maintenance execution type",
              args: { suggestions: ["NOTIFY", "EXECUTE"] },
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
      name: "vm-cluster-network",
      description:
        "Details of the VM cluster network on Database Infrastructure",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Change the VM cluster network Compartment to the specified OCID",
          options: [
            optVmClusterNetworkId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the VM cluster network is moving",
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
            "Create an VM cluster on Database Infrastructure network using the specified details",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the VM cluster network",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optInfrastructureId,
            {
              name: "--display-name",
              description: "The user-friendly name for the VM cluster network",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--vm-networks",
              description: "Details of the client and backup networks",
              args: { name: "json" },
              isRequired: true,
            },
            optNodeCount,
            {
              name: "--scans",
              description: "The SCAN details",
              args: { name: "json" },
            },
            optListenerPort,
            optListenerPortSsl,
            optDnsServers,
            optNtpServers,
            {
              name: "--consumer-type",
              description: "Consumer type for the VM cluster network",
              args: { suggestions: ["INSTANCE", "CLUSTER"] },
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
            "Delete the VM cluster network on Database Infrastructure that has the specified OCID",
          options: [
            optVmClusterNetworkId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "generate-recommended",
          description:
            "Generates an VM cluster network configuration using the specified details",
          options: [
            optInfrastructureId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the VM cluster network",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The user-friendly name for the VM cluster network",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--vm-networks",
              description: "Details of the client and backup networks",
              args: { name: "json" },
              isRequired: true,
            },
            optNodeCount,
            optListenerPort,
            optListenerPortSsl,
            optDnsServers,
            optNtpServers,
            optDefinedTags,
            optFreeformTags,
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
            "Obtain the VM cluster network on Database Infrastructure that has the specified OCID",
          options: [optVmClusterNetworkId, optFromJson],
        },
        {
          name: "update",
          description:
            "Update the VM cluster network on Database Infrastructure that has the specified OCID",
          options: [
            optVmClusterNetworkId,
            {
              name: "--display-name",
              description: "The user-friendly name for the VM cluster network",
              args: { name: "display-name" },
            },
            {
              name: "--scans",
              description: "The SCAN details",
              args: { name: "json" },
            },
            optListenerPort,
            optListenerPortSsl,
            optDnsServers,
            optNtpServers,
            {
              name: "--vm-networks",
              description: "Details of the client and backup networks",
              args: { name: "json" },
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
          name: "validate",
          description:
            "Validates an VM cluster network on Database Infrastructure",
          options: [
            optVmClusterNetworkId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Obtain a list of VM cluster networks on Database Infrastructure",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "REQUIRES_VALIDATION",
                  "VALIDATING",
                  "VALIDATED",
                  "VALIDATION_FAILED",
                  "UPDATING",
                  "ALLOCATED",
                  "DELETING",
                  "DELETED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--is-scan-enabled",
              description:
                "A filter to return VM cluster network resources that matches the specified value",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--infrastructure-id",
              description: "The OCID of the Database Infrastructure",
              args: { name: "infrastructure-id" },
            },
            optNodeCount,
            {
              name: "--vm-network-consumer-type",
              description: "VM network consumer type",
              args: { suggestions: ["INSTANCE", "CLUSTER"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "infrastructure",
      description: "Details about Database Infrastructure resource",
      subcommands: [
        {
          name: "activate",
          description:
            "Activate an Database Infrastructure using the specified details",
          options: [
            {
              name: "--activation-zip-file",
              description: "The activation zip file",
              args: { name: "activation-zip-file", template: "filepaths" },
              isRequired: true,
            },
            optInfrastructureId,
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
            "Change the Database Infrastructure Cloud@Customer Compartment to the specified OCID",
          options: [
            optInfrastructureId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the Database Infrastructure Cloud@Customer is moving",
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
            "Create a Database Infrastructure using the specified details",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Database Infrastructure",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--system-model",
              description: "Database Infrastructure System Model specification",
              args: { suggestions: ["X11_HA_768", "X10_HA_512", "X8_HA_384"] },
              isRequired: true,
            },
            {
              name: "--shape",
              description: "The shape of the Database Infrastructure",
              args: {
                suggestions: [
                  "SIX_SSDS",
                  "TWELVE_SSDS",
                  "EIGHTEEN_SSDS",
                  "TWENTY_FOUR_SSDS",
                ],
              },
              isRequired: true,
            },
            {
              name: "--netmask",
              description: "The netmask for the control plane network",
              args: { name: "netmask" },
              isRequired: true,
            },
            {
              name: "--gateway",
              description: "The gateway for the control plane network",
              args: { name: "gateway" },
              isRequired: true,
            },
            {
              name: "--dns-servers",
              description: "The list of DNS server IP addresses",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--ntp-servers",
              description: "The list of NTP server IP addresses",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Database Infrastructure description",
              args: { name: "description" },
            },
            {
              name: "--admin-networkcidr",
              description: "The CIDR block for the system network",
              args: { name: "admin-networkcidr" },
            },
            {
              name: "--data-disk-percentage",
              description:
                "Percentage of disk space assigned for DATA disk group",
              args: { name: "integer" },
            },
            {
              name: "--contacts",
              description:
                "The list of contacts for the Database Infrastructure",
              args: { name: "json" },
            },
            {
              name: "--client-bond-mode",
              description:
                "The network bonding mode for Client networks for the Database Infrastructure",
              args: { suggestions: ["ACTIVE_BACKUP", "LACP"] },
            },
            {
              name: "--backup-bond-mode",
              description:
                "The network bonding mode for Backup networks for the Database Infrastructure",
              args: { suggestions: ["ACTIVE_BACKUP", "LACP"] },
            },
            {
              name: "--cps-bond-mode",
              description:
                "The network bonding mode for CPS networks for the Database Infrastructure",
              args: { suggestions: ["ACTIVE_BACKUP", "LACP"] },
            },
            {
              name: "--client-bond-iface",
              description:
                "The network bonding interface for client network for the Database Infrastructure",
              args: {
                suggestions: [
                  "BTBOND1",
                  "BTBOND2",
                  "BTBOND3",
                  "BTBOND4",
                  "BTBOND5",
                  "BTBOND6",
                ],
              },
            },
            {
              name: "--backup-bond-iface",
              description:
                "The network bonding interface for backup network for the Database Infrastructure",
              args: {
                suggestions: [
                  "BTBOND1",
                  "BTBOND2",
                  "BTBOND3",
                  "BTBOND4",
                  "BTBOND5",
                  "BTBOND6",
                ],
              },
            },
            {
              name: "--cps-bond-iface",
              description:
                "The network bonding interface for CPS network for the Database Infrastructure",
              args: {
                suggestions: [
                  "BTBOND1",
                  "BTBOND2",
                  "BTBOND3",
                  "BTBOND4",
                  "BTBOND5",
                  "BTBOND6",
                ],
              },
            },
            {
              name: "--acfs-size-in-gbs",
              description:
                "The amount of storage (in GB) in the DATA disk group that is reserved for creating local storage for VM",
              args: { name: "acfs-size-in-gbs" },
            },
            {
              name: "--corporate-proxy",
              description:
                "The corporate network proxy for access to the control plane network",
              args: { name: "corporate-proxy" },
            },
            {
              name: "--vlan-id",
              description: "The CPS network VLAN ID",
              args: { name: "vlan-id" },
            },
            { name: "--maintenance-window", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--control-plane-server2",
              description:
                "The IP address for the second control plane server. required",
              args: { name: "control-plane-server2" },
              isRequired: true,
            },
            {
              name: "--control-plane-server1",
              description:
                "The IP address for the first control plane server. required",
              args: { name: "control-plane-server1" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Delete the Database Infrastructure that has the specified OCID",
          options: [
            optInfrastructureId,
            optIfMatch,
            {
              name: "--is-force-delete",
              description:
                "When set to true, infrastructure will be deleted even if it has dependent resources",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "download-config-file",
          description:
            "Downloads the configuration file for the specified Database Infrastructure Cloud@Customer",
          options: [
            optInfrastructureId,
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
        {
          name: "download-validation-script",
          description:
            "Downloads the validation script for the specified Database Infrastructure Cloud@Customer",
          options: [
            optInfrastructureId,
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
        {
          name: "get",
          description:
            "Obtain the Database Infrastructure that has the specified OCID",
          options: [optInfrastructureId, optFromJson],
        },
        {
          name: "scale-infrastructure-storage",
          description:
            "Scale storage for the specified infrastructure using the specified details",
          options: [
            optInfrastructureId,
            {
              name: "--ssd-configuration-requested",
              description:
                "The scale option to be selected for the infrastructure",
              args: {
                suggestions: [
                  "SIX_SSDS",
                  "TWELVE_SSDS",
                  "EIGHTEEN_SSDS",
                  "TWENTY_FOUR_SSDS",
                ],
              },
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
            "Update the Database Infrastructure that has the specified OCID",
          options: [
            optInfrastructureId,
            {
              name: "--display-name",
              description:
                "The user-friendly name for the Database Infrastructure",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Database Infrastructure description",
              args: { name: "description" },
            },
            {
              name: "--system-model",
              description: "Database Infrastructure System Model specification",
              args: { suggestions: ["X11_HA_768", "X10_HA_512", "X8_HA_384"] },
            },
            {
              name: "--shape",
              description: "The shape of the Database Infrastructure",
              args: {
                suggestions: [
                  "SIX_SSDS",
                  "TWELVE_SSDS",
                  "EIGHTEEN_SSDS",
                  "TWENTY_FOUR_SSDS",
                ],
              },
            },
            {
              name: "--netmask",
              description: "The netmask for the control plane network",
              args: { name: "netmask" },
            },
            {
              name: "--gateway",
              description: "The gateway for the control plane network",
              args: { name: "gateway" },
            },
            {
              name: "--admin-networkcidr",
              description: "The CIDR block for the system network",
              args: { name: "admin-networkcidr" },
            },
            {
              name: "--data-disk-percentage",
              description:
                "Percentage of disk space assigned for DATA disk group",
              args: { name: "integer" },
            },
            {
              name: "--contacts",
              description:
                "The list of contacts for the Database Infrastructure",
              args: { name: "json" },
            },
            optDnsServers,
            optNtpServers,
            {
              name: "--client-bond-mode",
              description:
                "The network bonding mode for Client networks for the Database Infrastructure",
              args: { suggestions: ["ACTIVE_BACKUP", "LACP"] },
            },
            {
              name: "--backup-bond-mode",
              description:
                "The network bonding mode for Backup networks for the Database Infrastructure",
              args: { suggestions: ["ACTIVE_BACKUP", "LACP"] },
            },
            {
              name: "--cps-bond-mode",
              description:
                "The network bonding mode for CPS networks for the Database Infrastructure",
              args: { suggestions: ["ACTIVE_BACKUP", "LACP"] },
            },
            {
              name: "--client-bond-iface",
              description:
                "The network bonding interface for client network for the Database Infrastructure",
              args: {
                suggestions: [
                  "BTBOND1",
                  "BTBOND2",
                  "BTBOND3",
                  "BTBOND4",
                  "BTBOND5",
                  "BTBOND6",
                ],
              },
            },
            {
              name: "--backup-bond-iface",
              description:
                "The network bonding interface for backup network for the Database Infrastructure",
              args: {
                suggestions: [
                  "BTBOND1",
                  "BTBOND2",
                  "BTBOND3",
                  "BTBOND4",
                  "BTBOND5",
                  "BTBOND6",
                ],
              },
            },
            {
              name: "--cps-bond-iface",
              description:
                "The network bonding interface for CPS network for the Database Infrastructure",
              args: {
                suggestions: [
                  "BTBOND1",
                  "BTBOND2",
                  "BTBOND3",
                  "BTBOND4",
                  "BTBOND5",
                  "BTBOND6",
                ],
              },
            },
            {
              name: "--acfs-size-in-gbs",
              description:
                "The amount of storage (in GB) in the DATA disk group that is reserved for creating local storage for VM",
              args: { name: "acfs-size-in-gbs" },
            },
            {
              name: "--corporate-proxy",
              description:
                "The corporate network proxy for access to the control plane network",
              args: { name: "corporate-proxy" },
            },
            {
              name: "--vlan-id",
              description: "The CPS network VLAN ID",
              args: { name: "vlan-id" },
            },
            { name: "--maintenance-window", args: { name: "json" } },
            optDefinedTags,
            optFreeformTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--control-plane-server2",
              description: "The IP address for the second control plane server",
              args: { name: "control-plane-server2" },
            },
            {
              name: "--control-plane-server1",
              description: "The IP address for the first control plane server",
              args: { name: "control-plane-server1" },
            },
            optFromJson,
          ],
        },
        {
          name: "validate",
          description:
            "Validate an Database Infrastructure using the specified details",
          options: [
            {
              name: "--validation-zip-file",
              description: "The validation zip file",
              args: { name: "validation-zip-file", template: "filepaths" },
              isRequired: true,
            },
            optInfrastructureId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Obtain a list of Database Infrastructures",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "REQUIRES_VALIDATION",
                  "VALIDATING",
                  "VALIDATION_FAILED",
                  "REQUIRES_ACTIVATION",
                  "ACTIVATING",
                  "ACTIVE",
                  "ACTIVATION_FAILED",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "DISCONNECTED",
                  "MAINTENANCE_IN_PROGRESS",
                ],
              },
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
      ],
    },
    {
      name: "vm-instance",
      description: "VM instance details",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Change the VM instance on Database Infrastructure Compartment to the specified OCID",
          options: [
            optVmInstanceId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to which the VM instance is moving",
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
            "Create an VM instance on Database Infrastructure using the specified details",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the VM instance",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optInfrastructureId,
            {
              name: "--cpus-enabled",
              description:
                "The number of CPU cores enabled for each VM instance",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--ssh-public-keys",
              description:
                "List of public key used for SSH access to the VM instance",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "VM instance display name",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "VM instance description",
              args: { name: "description" },
            },
            {
              name: "--memory-size-in-gbs",
              description: "The memory to be allocated in GBs",
              args: { name: "memory-size-in-gbs" },
            },
            {
              name: "--boot-storage-size-in-gbs",
              description: "Boot storage memory to be allocated in GBs",
              args: { name: "boot-storage-size-in-gbs" },
            },
            {
              name: "--data-storage-size-in-gbs",
              description: "Data storage to be allocated in GBs",
              args: { name: "data-storage-size-in-gbs" },
            },
            {
              name: "--image-id",
              description: "The OCID of the VM custom instance uploaded",
              args: { name: "image-id" },
            },
            {
              name: "--server-id",
              description:
                "The OCID of the compute node on which VM instance should be launched",
              args: { name: "server-id" },
            },
            {
              name: "--domain-name",
              description: "The domain name of the VM instance",
              args: { name: "domain-name" },
            },
            {
              name: "--time-zone",
              description: "The time zone to use for the VM instance",
              args: { name: "time-zone" },
            },
            optDnsServers,
            optNtpServers,
            {
              name: "--hostname",
              description: "The host name of the instance",
              args: { name: "hostname" },
            },
            {
              name: "--ip-address",
              description: "The IP address of the instance",
              args: { name: "ip-address" },
            },
            {
              name: "--netmask",
              description: "The netmask of the VM instance network",
              args: { name: "netmask" },
            },
            {
              name: "--gateway",
              description: "The gateway IP address of the VM instance network",
              args: { name: "gateway" },
            },
            {
              name: "--vlan-id",
              description: "The network VLAN ID",
              args: { name: "vlan-id" },
            },
            {
              name: "--userdata",
              description:
                "Base64-encoded data to be used by Cloud-Init to run custom scripts or provide custom Cloud-Init configuration",
              args: { name: "userdata" },
            },
            {
              name: "--metadata",
              description:
                "Custom metadata key/value pairs which can be used to",
              args: { name: "json" },
            },
            {
              name: "--vm-network-id",
              description: "The OCID of the VM Network",
              args: { name: "vm-network-id" },
            },
            optDefinedTags,
            optFreeformTags,
            {
              name: "--system-tags",
              description: "Usage of system tag keys",
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
            "Delete the VM instance on Database Infrastructure that has the specified OCID",
          options: [
            optVmInstanceId,
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
            "Obtain the VM instance on Database Infrastructure that has the specified OCID",
          options: [optVmInstanceId, optFromJson],
        },
        {
          name: "migrate",
          description:
            "Migrate the VM instance on Database Infrastructure that has the specified OCID",
          options: [
            optVmInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "restart",
          description:
            "Restart the VM instance on Database Infrastructure that has the specified OCID",
          options: [
            optVmInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "scale",
          description:
            "Scale the VM instance on Database Infrastructure that has the specified OCID",
          options: [
            optVmInstanceId,
            {
              name: "--memory-size-in-gbs",
              description: "The memory to be allocated in GBs",
              args: { name: "memory-size-in-gbs" },
            },
            {
              name: "--cpus-enabled",
              description:
                "The number of CPU cores to be enabled for VM instance",
              args: { name: "integer" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "start",
          description:
            "Start the VM instance on Database Infrastructure that has the specified OCID",
          options: [
            optVmInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description:
            "Stop the VM instance on Database Infrastructure that has the specified OCID",
          options: [
            optVmInstanceId,
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
            "Update the VM instance on Database Infrastructure that has the specified OCID",
          options: [
            optVmInstanceId,
            {
              name: "--description",
              description: "VM instance description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "VM instance display name",
              args: { name: "display-name" },
            },
            {
              name: "--data-storage-size-in-gbs",
              description: "Data storage to be allocated in GBs",
              args: { name: "data-storage-size-in-gbs" },
            },
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
        {
          name: "list",
          description: "Obtain a list of VM instances",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return resources that match the specified lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "INACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                ],
              },
              isRepeatable: true,
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            {
              name: "--infrastructure-id",
              description: "The OCID of the Database Infrastructure",
              args: { name: "infrastructure-id" },
            },
            {
              name: "--base-server-id",
              description: "The OCID of the Database Infrastructure Server Id",
              args: { name: "base-server-id" },
            },
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
          description:
            "View the list of errors for the work request that have the specified work request OCID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "maintenance-run",
      description: "Details of a maintenance run",
      subcommands: [
        {
          name: "get",
          description: "Gets information about the specified OCID",
          options: [optMaintenanceRunId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of the maintenance runs in the specified compartment",
          options: [
            optCompartmentId,
            optDisplayName,
            {
              name: "--infrastructure-id",
              description: "The Database Infrastructure ID",
              args: { name: "infrastructure-id" },
            },
            {
              name: "--target-resource-type",
              description: "The type of the target resource",
              args: { suggestions: ["DB_CC_INFRASTRUCTURE"] },
            },
            {
              name: "--maintenance-type",
              description: "The maintenance type",
              args: { suggestions: ["PLANNED", "UNPLANNED"] },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state exactly",
              args: {
                suggestions: [
                  "CREATING",
                  "SCHEDULED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "SKIPPED",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "CANCELED",
                  "PARTIAL_SUCCESS",
                ],
              },
            },
            {
              name: "--maintenance-subtype",
              description: "The sub-type of the maintenance run",
              args: {
                suggestions: [
                  "YEARLY",
                  "HALFYEARLY",
                  "QUARTERLY",
                  "MONTHLY",
                  "DAILY",
                  "HARDWARE",
                  "CRITICAL",
                  "INFRA_UPDATE",
                  "CPS_SERVICES_UPDATE",
                  "CPS_VM_UPDATE",
                  "SECURITY_MONTHLY",
                ],
              },
            },
            {
              name: "--time-accepted-less-than-or-equal-to",
              description: "Filter maintenance run for before given time",
              args: { name: "datetime" },
            },
            {
              name: "--time-accepted-greater-than-or-equal-to",
              description: "Filter maintenance run for after given time",
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
          name: "reschedule",
          description:
            "Reschedules the specified maintenance run by providing a new timeScheduled value",
          options: [
            optMaintenanceRunId,
            {
              name: "--time-scheduled",
              description:
                "The new date and time for the scheduled maintenance run",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--reason",
              description: "The reason for rescheduling the maintenance run",
              args: { name: "reason" },
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
          description: "Update maintenance run attributes",
          options: [
            {
              name: "--patching-mode",
              description:
                'Database Infrastructure patching mode, either "ROLLING" or "NONROLLING"',
              args: { suggestions: ["ROLLING", "NONROLLING"] },
              isRequired: true,
            },
            {
              name: "--custom-action-timeout-in-mins",
              description:
                "Determines the amount of time the system will wait before the start of each compute server patching operation",
              args: { name: "integer" },
              isRequired: true,
            },
            optMaintenanceRunId,
            {
              name: "--is-custom-action-timeout-enabled",
              description:
                "If true, enables configuration of customActionTimeoutInMins for this maintenance run update request",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
      name: "work-request",
      description: "Work request details",
      subcommands: [
        {
          name: "get",
          description:
            "Get the status of the work request having the specified work request OCID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description:
            "View a list of work request details in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--resource-id",
              description: "The OCID of the work request resource",
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
      name: "work-request-log",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "View the log entries for the work request that have the specified work request OCID",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optSortOrder,
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
