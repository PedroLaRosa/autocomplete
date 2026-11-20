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
const optIntegrationInstanceId: Fig.Option = {
  name: "--integration-instance-id",
  description: "Unique Integration Instance identifier",
  args: { name: "integration-instance-id" },
  isRequired: true,
};
const optId: Fig.Option = {
  name: "--id",
  description: "Unique Integration Instance identifier",
  args: { name: "id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The ID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
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
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "integration",
  description: "Oracle Integration",
  subcommands: [
    {
      name: "integration-instance",
      description: "Description of Integration Instance",
      subcommands: [
        {
          name: "change-compartment",
          description: "Change the compartment for an integration instance",
          options: [
            {
              name: "--compartment-id",
              description: "Compartment Identifier",
              args: { name: "compartment-id" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            optFromJson,
          ],
        },
        {
          name: "change-private-endpoint-outbound-connection",
          description:
            "Change private endpoint outbound connection for given Integration instance",
          options: [
            optIntegrationInstanceId,
            {
              name: "--private-endpoint-outbound-connection",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-private-endpoint-outbound-connection-private-endpoint-outbound-connection",
          description:
            "Change private endpoint outbound connection for given Integration instance",
          options: [
            optIntegrationInstanceId,
            {
              name: "--private-endpoint-outbound-connection-subnet-id",
              description: "Customer Private Network VCN Subnet OCID",
              args: { name: "private-endpoint-outbound-connection-subnet-id" },
              isRequired: true,
            },
            optIfMatch,
            {
              name: "--private-endpoint-outbound-connection-nsg-ids",
              description: "One or more Network security group Ids",
              args: { name: "json" },
            },
            {
              name: "--private-endpoint-outbound-connection-is-all-outbound-traffic-private",
              description:
                "Indicates if all traffic should go through configured outbound connection",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-private-endpoint-outbound-connection-none-outbound-connection",
          description:
            "Change private endpoint outbound connection for given Integration instance",
          options: [
            optIntegrationInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "convert-instance",
          description:
            "Integration instance identified by ID will be migrated to a new Disaster Recovery enabled integration",
          options: [
            optIntegrationInstanceId,
            {
              name: "--conversion-type",
              description: "Convert given instance to specified DR instance",
              args: {
                suggestions: [
                  "DISASTER_RECOVERY",
                  "DEVELOPMENT_SHAPE",
                  "PRODUCTION_SHAPE",
                ],
              },
              isRequired: true,
            },
            {
              name: "--conversion-phase",
              description: "Conversion phase for convert instance operation",
              args: {
                suggestions: [
                  "BEGIN_MIGRATION",
                  "COMPLETE_MIGRATION",
                  "ROLLBACK_MIGRATION",
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
          name: "create",
          description: "Creates a new Integration Instance",
          options: [
            {
              name: "--display-name",
              description: "Integration Instance Identifier",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "Compartment Identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-byol",
              description: "Bring your own license",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--message-packs",
              description: "The number of configured message packs",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Usage of predefined tag keys",
              args: { name: "json" },
            },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            {
              name: "--idcs-at",
              description: "IDCS Authentication token",
              args: { name: "idcs-at" },
            },
            {
              name: "--is-visual-builder-enabled",
              description: "Visual Builder is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--custom-endpoint", args: { name: "json" } },
            {
              name: "--alternate-custom-endpoints",
              description:
                "A list of alternate custom endpoints to be used for the integration instance URL",
              args: { name: "json" },
            },
            {
              name: "--consumption-model",
              description:
                "Optional parameter specifying which entitlement to use for billing purposes",
              args: { suggestions: ["UCM", "GOV", "OIC4SAAS"] },
            },
            {
              name: "--is-file-server-enabled",
              description: "The file server is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-disaster-recovery-enabled",
              description: "Is Disaster Recovery enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--network-endpoint-details", args: { name: "json" } },
            {
              name: "--shape",
              description: "Shape",
              args: { suggestions: ["DEVELOPMENT", "PRODUCTION"] },
            },
            {
              name: "--domain-id",
              description:
                "The OCID of the identity domain, that will be used to determine the corresponding Idcs Stripe and create",
              args: { name: "domain-id" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--type",
              description:
                "Standard, Enterprise, Standardx, Enterprisex or Healthcare type",
              args: {
                suggestions: [
                  "STANDARD",
                  "ENTERPRISE",
                  "STANDARDX",
                  "ENTERPRISEX",
                  "HEALTHCARE",
                ],
              },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes an Integration Instance resource by identifier",
          options: [
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            optFromJson,
          ],
        },
        {
          name: "disable-process-automation",
          description:
            "Disable Process Automation for given Integration Instance",
          options: [
            optIntegrationInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disaster-recovery-failover",
          description: "Allows failover for disaster recovery",
          options: [
            optIntegrationInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-process-automation",
          description:
            "Enable Process Automation for given Integration Instance",
          options: [
            optIntegrationInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "extend-data-retention",
          description:
            "Extend Data Retention period for given Integration Instance",
          options: [
            optIntegrationInstanceId,
            {
              name: "--data-retention-period",
              description:
                "Data retention period set for given integration instance",
              args: { suggestions: ["MONTHS_1", "MONTHS_3", "MONTHS_6"] },
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
          description: "Gets a IntegrationInstance by identifier",
          options: [optId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of Integration Instances",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
            },
            {
              name: "--lifecycle-state",
              description: "Life cycle state to query on",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'asc' or 'desc'",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "remove",
          description:
            "Remove Oracle Managed Custom Endpoint for given integration instance that was previously enabled",
          options: [
            optIntegrationInstanceId,
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
            "Start an integration instance that was previously in an INACTIVE state",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description:
            "Stop an integration instance that was previously in an ACTIVE state",
          options: [
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Integration Instance",
          options: [
            {
              name: "--display-name",
              description: "Integration Instance Identifier",
              args: { name: "display-name" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Usage of predefined tag keys",
              args: { name: "json" },
            },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            {
              name: "--is-byol",
              description: "Bring your own license",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--message-packs",
              description: "The number of configured message packs",
              args: { name: "integer" },
            },
            {
              name: "--is-file-server-enabled",
              description: "The file server is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-visual-builder-enabled",
              description: "Visual Builder is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--custom-endpoint", args: { name: "json" } },
            {
              name: "--alternate-custom-endpoints",
              description:
                "A list of alternate custom endpoints to be used for the integration instance URL",
              args: { name: "json" },
            },
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            {
              name: "--type",
              description:
                "Standard, Enterprise, Standardx, Enterprisex or Healthcare type",
              args: {
                suggestions: [
                  "STANDARD",
                  "ENTERPRISE",
                  "STANDARDX",
                  "ENTERPRISEX",
                  "HEALTHCARE",
                ],
              },
            },
            optFromJson,
          ],
        },
        {
          name: "change-network-endpoint",
          description: "Change an Integration instance network endpoint",
          options: [
            { name: "--network-endpoint-details", args: { name: "json" } },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optId,
            optFromJson,
          ],
        },
        {
          name: "add-oracle-managed-custom-endpoint",
          description:
            "Enable Oracle Managed Custom Endpoint for given integration instance",
          options: [
            {
              name: "--hostname",
              description: "Oracle managed custom hostname",
              args: { name: "hostname" },
              isRequired: true,
            },
            optIntegrationInstanceId,
            {
              name: "--dns-type",
              description: "Type of DNS",
              args: { suggestions: ["OCI"] },
            },
            {
              name: "--dns-zone-name",
              description: "DNS Zone name",
              args: { name: "dns-zone-name" },
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
      name: "work-request-error",
      description: "Errors related to a specific work request",
      subcommands: [
        {
          name: "list",
          description: "Get the errors of a work request",
          options: [
            optCompartmentId,
            optWorkRequestId,
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
      name: "work-request-log-entry",
      description: "Log entries related to a specific work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description: "Get the logs of a work request",
          options: [
            optCompartmentId,
            optWorkRequestId,
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
      name: "work-request",
      description: "A description of work request status",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optId,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
