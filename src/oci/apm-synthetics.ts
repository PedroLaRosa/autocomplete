// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optApmDomainId: Fig.Option = {
  name: "--apm-domain-id",
  description: "The APM domain ID the request is intended for",
  args: { name: "apm-domain-id" },
  isRequired: true,
};
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
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
const optAvailabilityConfiguration: Fig.Option = {
  name: "--availability-configuration",
  args: { name: "json" },
};
const optBatchIntervalInSeconds: Fig.Option = {
  name: "--batch-interval-in-seconds",
  description:
    "Time interval between two runs in round robin batch mode (SchedulingPolicy - BATCHED_ROUND_ROBIN)",
  args: { name: "integer" },
};
const optIsIpv6: Fig.Option = {
  name: "--is-ipv6",
  description: "If enabled, domain name will resolve to an IPv6 address",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsRunNow: Fig.Option = {
  name: "--is-run-now",
  description: "If isRunNow is enabled, then the monitor will run immediately",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsRunOnce: Fig.Option = {
  name: "--is-run-once",
  description: "If runOnce is enabled, then the monitor will run once",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optMaintenanceWindowSchedule: Fig.Option = {
  name: "--maintenance-window-schedule",
  args: { name: "json" },
};
const optSchedulingPolicy: Fig.Option = {
  name: "--scheduling-policy",
  description:
    "Scheduling policy to decide the distribution of monitor executions on vantage points",
  args: { suggestions: ["ALL", "ROUND_ROBIN", "BATCHED_ROUND_ROBIN"] },
};
const optScriptId: Fig.Option = {
  name: "--script-id",
  description:
    "The OCID of the script. scriptId is mandatory for creation of SCRIPTED_BROWSER and SCRIPTED_REST monitor",
  args: { name: "script-id" },
};
const optScriptParameters: Fig.Option = {
  name: "--script-parameters",
  description: "List of script parameters in the monitor",
  args: { name: "json" },
};
const optStatus: Fig.Option = {
  name: "--status",
  description: "Enables or disables the monitor",
  args: { suggestions: ["ENABLED", "DISABLED", "INVALID"] },
};
const optTarget: Fig.Option = {
  name: "--target",
  description: "Specify the endpoint on which to run the monitor",
  args: { name: "target" },
};
const optTimeoutInSeconds: Fig.Option = {
  name: "--timeout-in-seconds",
  description: "Timeout in seconds",
  args: { name: "integer" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optMonitorId: Fig.Option = {
  name: "--monitor-id",
  description: "The OCID of the monitor",
  args: { name: "monitor-id" },
  isRequired: true,
};
const optDnsConfiguration: Fig.Option = {
  name: "--dns-configuration",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optIsFailureRetried: Fig.Option = {
  name: "--is-failure-retried",
  description:
    "If isFailureRetried is enabled, then a failed call will be retried",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "Unique name that can be edited",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "Unique name that can be edited",
  args: { name: "display-name" },
};
const optMonitorType: Fig.Option = {
  name: "--monitor-type",
  description: "Type of monitor",
  args: {
    suggestions: [
      "SCRIPTED_BROWSER",
      "BROWSER",
      "SCRIPTED_REST",
      "REST",
      "NETWORK",
      "DNS",
      "FTP",
      "SQL",
    ],
  },
  isRequired: true,
};
const optRepeatIntervalInSeconds: Fig.Option = {
  name: "--repeat-interval-in-seconds",
  description:
    "Interval in seconds after the start time when the job should be repeated",
  args: { name: "integer" },
  isRequired: true,
};
const optRepeatIntervalInSeconds2: Fig.Option = {
  name: "--repeat-interval-in-seconds",
  description:
    "Interval in seconds after the start time when the job should be repeated",
  args: { name: "integer" },
};
const optVantagePoints: Fig.Option = {
  name: "--vantage-points",
  description:
    "A list of public and dedicated vantage points from which to execute the monitor",
  args: { name: "json" },
  isRequired: true,
};
const optVantagePoints2: Fig.Option = {
  name: "--vantage-points",
  description:
    "A list of public and dedicated vantage points from which to execute the monitor",
  args: { name: "json" },
};
const optVerifyResponseContent: Fig.Option = {
  name: "--verify-response-content",
  description:
    "Verify response content against regular expression based string",
  args: { name: "verify-response-content" },
};
const optDnsConfiguration2: Fig.Option = {
  name: "--dns-configuration",
  description: "Dns settings",
  args: { name: "json" },
};
const optIsFailureRetried2: Fig.Option = {
  name: "--is-failure-retried",
  description:
    "If isFailureRetried enabled, then if call is failed then it will be retried",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optNetworkConfiguration: Fig.Option = {
  name: "--network-configuration",
  description: "Details of the network configuration",
  args: { name: "json" },
};
const optOnPremiseVantagePointId: Fig.Option = {
  name: "--on-premise-vantage-point-id",
  description: "The OCID of the On-premise vantage point",
  args: { name: "on-premise-vantage-point-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optDisplayName3: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only the resources that match the entire display name",
  args: { name: "display-name" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    'The maximum number of results per page, or items to return in a paginated "List" call',
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optRecordType: Fig.Option = {
  name: "--record-type",
  description: "DNS record type",
  args: {
    suggestions: [
      "A",
      "AAAA",
      "ANY",
      "CNAME",
      "DNSKEY",
      "DS",
      "MX",
      "NS",
      "NSEC",
      "NULL_REC",
      "PTR",
      "RRSIG",
      "SOA",
      "TXT",
    ],
  },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optVerifyResponseCodes: Fig.Option = {
  name: "--verify-response-codes",
  description: "Expected HTTP response codes",
  args: { name: "json" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optIsCertificateValidationEnabled: Fig.Option = {
  name: "--is-certificate-validation-enabled",
  description:
    "If certificate validation enabled, then call will fail for certificate errors",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optIsDefaultSnapshotEnabled: Fig.Option = {
  name: "--is-default-snapshot-enabled",
  description: "If disabled then auto snapshots are not collected",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optName: Fig.Option = {
  name: "--name",
  description:
    "A filter to return only the resources that match the entire name",
  args: { name: "name" },
};
const optNetworkConfiguration2: Fig.Option = {
  name: "--network-configuration",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optProtocol: Fig.Option = {
  name: "--protocol",
  description: "Type of protocol",
  args: { suggestions: ["TCP", "UDP"] },
};
const optDedicatedVantagePointId: Fig.Option = {
  name: "--dedicated-vantage-point-id",
  description: "The OCID of the dedicated vantage point",
  args: { name: "dedicated-vantage-point-id" },
  isRequired: true,
};
const optScriptId2: Fig.Option = {
  name: "--script-id",
  description: "The OCID of the script",
  args: { name: "script-id" },
  isRequired: true,
};
const optWorkerId: Fig.Option = {
  name: "--worker-id",
  description: "The OCID of the On-premise vantage point worker",
  args: { name: "worker-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "apm-synthetics",
  description: "APM Availability Monitoring",
  subcommands: [
    {
      name: "worker-collection",
      description:
        "The results of an On-premise VP worker search, which contains WorkerSummary items and other data in an APM",
      subcommands: [
        {
          name: "list-workers",
          description: "Returns a list of workers",
          options: [
            optApmDomainId,
            optOnPremiseVantagePointId,
            optLimit,
            optPage,
            {
              name: "--status",
              description:
                "A filter to return only On-premise VP workers that match the status given",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--capability",
              description:
                "A filter to return only On-premise VP workers that match the capability given",
              args: { name: "capability" },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "displayName",
                  "name",
                  "status",
                  "priority",
                  "timeCreated",
                  "timeUpdated",
                  "timeLastSyncup",
                ],
              },
            },
            optDisplayName3,
            optName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dedicated-vantage-point",
      description: "The information about a dedicated vantage point",
      subcommands: [
        {
          name: "delete",
          description: "Deregisters the specified dedicated vantage point",
          options: [
            optApmDomainId,
            optDedicatedVantagePointId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of the dedicated vantage point identified by the OCID",
          options: [optApmDomainId, optDedicatedVantagePointId, optFromJson],
        },
        {
          name: "create-with-oracle-rm-stack",
          description: "Registers a new dedicated vantage point",
          options: [
            optApmDomainId,
            {
              name: "--display-name",
              description:
                "Unique dedicated vantage point name that cannot be edited",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--dvp-stack-details-dvp-version",
              description: "Version of the dedicated vantage point",
              args: { name: "dvp-stack-details-dvp-version" },
              isRequired: true,
            },
            {
              name: "--dvp-stack-details-dvp-stack-id",
              description:
                "Stack OCID of the Resource Manager stack for dedicated vantage point",
              args: { name: "dvp-stack-details-dvp-stack-id" },
              isRequired: true,
            },
            {
              name: "--dvp-stack-details-dvp-stream-id",
              description:
                "Stream OCID of the Resource Manager stack for dedicated vantage point",
              args: { name: "dvp-stack-details-dvp-stream-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Status of the dedicated vantage point",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--dvp-region",
              description: "Name of the region. required",
              args: { name: "dvp-region" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-with-oracle-rm-stack",
          description: "Updates the dedicated vantage point",
          options: [
            optApmDomainId,
            optDedicatedVantagePointId,
            {
              name: "--dvp-stack-details-dvp-version",
              description: "Version of the dedicated vantage point",
              args: { name: "dvp-stack-details-dvp-version" },
              isRequired: true,
            },
            {
              name: "--dvp-stack-details-dvp-stack-id",
              description:
                "Stack OCID of the Resource Manager stack for dedicated vantage point",
              args: { name: "dvp-stack-details-dvp-stack-id" },
              isRequired: true,
            },
            {
              name: "--dvp-stack-details-dvp-stream-id",
              description:
                "Stream OCID of the Resource Manager stack for dedicated vantage point",
              args: { name: "dvp-stack-details-dvp-stream-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Status of the dedicated vantage point",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            {
              name: "--dvp-region",
              description: "Name of the region",
              args: { name: "dvp-region" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "on-premise-vantage-point",
      description: "The information about an On-premise vantage point",
      subcommands: [
        {
          name: "create",
          description: "Registers a new On-premise vantage point",
          options: [
            optApmDomainId,
            {
              name: "--name",
              description:
                "Unique On-premise vantage point name that cannot be edited",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Type of On-premise vantage point",
              args: { suggestions: ["ON_PREMISE_DOCKER_VANTAGE_POINT"] },
            },
            {
              name: "--description",
              description:
                "A short description about the On-premise vantage point",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deregisters the specified On-premise vantage point",
          options: [
            optApmDomainId,
            optOnPremiseVantagePointId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the details of the On-premise vantage point identified by the OCID",
          options: [optApmDomainId, optOnPremiseVantagePointId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the On-premise vantage point",
          options: [
            optApmDomainId,
            optOnPremiseVantagePointId,
            {
              name: "--description",
              description:
                "A short description about the On-premise vantage point",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "monitor",
      description: "The information about a monitor",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the specified monitor",
          options: [
            optApmDomainId,
            optMonitorId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the configuration of the monitor identified by the OCID",
          options: [optApmDomainId, optMonitorId, optFromJson],
        },
        {
          name: "create-scripted-rest-monitor",
          description: "Creates a new monitor",
          options: [
            optApmDomainId,
            optDisplayName,
            optMonitorType,
            optVantagePoints,
            optRepeatIntervalInSeconds,
            optScriptId,
            optStatus,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIsIpv6,
            {
              name: "--req-authentication-scheme",
              description: "Request HTTP authentication scheme",
              args: { suggestions: ["NONE", "RESOURCE_PRINCIPAL"] },
            },
            optVerifyResponseCodes,
            optDnsConfiguration2,
            optNetworkConfiguration,
            optIsFailureRetried2,
            optFromJson,
          ],
        },
        {
          name: "update-scripted-rest-monitor",
          description: "Updates the monitor",
          options: [
            optApmDomainId,
            optMonitorId,
            optDisplayName2,
            optVantagePoints2,
            optScriptId,
            optStatus,
            optRepeatIntervalInSeconds2,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIfMatch,
            optForce,
            optIsIpv6,
            {
              name: "--req-authentication-scheme",
              description: "Request HTTP authentication scheme",
              args: { suggestions: ["NONE", "RESOURCE_PRINCIPAL"] },
            },
            optVerifyResponseCodes,
            optDnsConfiguration2,
            optNetworkConfiguration,
            optIsFailureRetried2,
            optFromJson,
          ],
        },
        {
          name: "create-scripted-browser-monitor",
          description: "Creates a new monitor",
          options: [
            optApmDomainId,
            optDisplayName,
            optMonitorType,
            optVantagePoints,
            optRepeatIntervalInSeconds,
            optScriptId,
            optStatus,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIsIpv6,
            optIsDefaultSnapshotEnabled,
            optDnsConfiguration2,
            optNetworkConfiguration,
            optIsCertificateValidationEnabled,
            optIsFailureRetried2,
            optFromJson,
          ],
        },
        {
          name: "update-scripted-browser-monitor",
          description: "Updates the monitor",
          options: [
            optApmDomainId,
            optMonitorId,
            optDisplayName2,
            optVantagePoints2,
            optScriptId,
            optStatus,
            optRepeatIntervalInSeconds2,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIfMatch,
            optForce,
            optIsIpv6,
            optIsDefaultSnapshotEnabled,
            optDnsConfiguration2,
            optNetworkConfiguration,
            optIsCertificateValidationEnabled,
            optIsFailureRetried2,
            optFromJson,
          ],
        },
        {
          name: "create-browser-monitor",
          description: "Creates a new monitor",
          options: [
            optApmDomainId,
            optDisplayName,
            optMonitorType,
            optVantagePoints,
            optRepeatIntervalInSeconds,
            optScriptId,
            optStatus,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIsIpv6,
            optIsDefaultSnapshotEnabled,
            optVerifyResponseCodes,
            optDnsConfiguration2,
            optNetworkConfiguration,
            {
              name: "--is-certificate-validation-enabled",
              description:
                "If validation enabled, then call will fail for certificate errors",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsFailureRetried2,
            {
              name: "--verify-texts",
              description: "Verify all the search strings present in response",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "update-browser-monitor",
          description: "Updates the monitor",
          options: [
            optApmDomainId,
            optMonitorId,
            optDisplayName2,
            optVantagePoints2,
            optScriptId,
            optStatus,
            optRepeatIntervalInSeconds2,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIfMatch,
            optForce,
            optIsIpv6,
            optIsDefaultSnapshotEnabled,
            optVerifyResponseCodes,
            optDnsConfiguration2,
            optNetworkConfiguration,
            {
              name: "--is-certificate-validation-enabled",
              description:
                "If validation enabled, then call will fail for certificate errors",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsFailureRetried2,
            {
              name: "--verify-texts",
              description: "Verify all the search strings present in response",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-rest-monitor",
          description: "Creates a new monitor",
          options: [
            optApmDomainId,
            optDisplayName,
            optMonitorType,
            optVantagePoints,
            optRepeatIntervalInSeconds,
            optScriptId,
            optStatus,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIsIpv6,
            {
              name: "--client-certificate-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optDnsConfiguration2,
            optNetworkConfiguration,
            optIsCertificateValidationEnabled,
            optIsFailureRetried2,
            {
              name: "--is-redirection-enabled",
              description:
                "If redirection enabled, then redirects will be allowed while accessing target URL",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--req-authentication-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--req-authentication-scheme",
              description: "Request http authentication scheme",
              args: { suggestions: ["OAUTH", "NONE", "BASIC", "BEARER"] },
            },
            {
              name: "--request-headers",
              description: "List of request headers",
              args: { name: "json" },
            },
            {
              name: "--request-method",
              description: "Request HTTP method",
              args: { suggestions: ["GET", "POST"] },
            },
            {
              name: "--request-post-body",
              description: "Request post body content",
              args: { name: "request-post-body" },
            },
            {
              name: "--request-query-params",
              description: "List of request query params",
              args: { name: "json" },
            },
            optVerifyResponseCodes,
            optVerifyResponseContent,
            optFromJson,
          ],
        },
        {
          name: "update-rest-monitor",
          description: "Updates the monitor",
          options: [
            optApmDomainId,
            optMonitorId,
            optDisplayName2,
            optVantagePoints2,
            optScriptId,
            optStatus,
            optRepeatIntervalInSeconds2,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIfMatch,
            optForce,
            optIsIpv6,
            {
              name: "--client-certificate-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optDnsConfiguration2,
            optNetworkConfiguration,
            optIsCertificateValidationEnabled,
            optIsFailureRetried2,
            {
              name: "--is-redirection-enabled",
              description:
                "If redirection enabled, then redirects will be allowed while accessing target URL",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--req-authentication-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--req-authentication-scheme",
              description: "Request http authentication scheme",
              args: { suggestions: ["OAUTH", "NONE", "BASIC", "BEARER"] },
            },
            {
              name: "--request-headers",
              description: "List of request headers",
              args: { name: "json" },
            },
            {
              name: "--request-method",
              description: "Request HTTP method",
              args: { suggestions: ["GET", "POST"] },
            },
            {
              name: "--request-post-body",
              description: "Request post body content",
              args: { name: "request-post-body" },
            },
            {
              name: "--request-query-params",
              description: "List of request query params",
              args: { name: "json" },
            },
            optVerifyResponseCodes,
            optVerifyResponseContent,
            optFromJson,
          ],
        },
        {
          name: "create-network-monitor",
          description: "Creates a new monitor",
          options: [
            optApmDomainId,
            optDisplayName,
            optMonitorType,
            optVantagePoints,
            optRepeatIntervalInSeconds,
            optScriptId,
            optStatus,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIsIpv6,
            {
              name: "--network-configuration",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
              isRequired: true,
            },
            optDnsConfiguration,
            optIsFailureRetried,
            optFromJson,
          ],
        },
        {
          name: "update-network-monitor",
          description: "Updates the monitor",
          options: [
            optApmDomainId,
            optMonitorId,
            optDisplayName2,
            optVantagePoints2,
            optScriptId,
            optStatus,
            optRepeatIntervalInSeconds2,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIfMatch,
            optForce,
            optIsIpv6,
            {
              name: "--network-configuration",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
              isRequired: true,
            },
            optDnsConfiguration,
            optIsFailureRetried,
            optFromJson,
          ],
        },
        {
          name: "create-dns-sec-monitor",
          description: "Creates a new monitor",
          options: [
            optApmDomainId,
            optDisplayName,
            optMonitorType,
            optVantagePoints,
            optRepeatIntervalInSeconds,
            optScriptId,
            optStatus,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIsIpv6,
            optDnsConfiguration,
            optIsFailureRetried,
            optRecordType,
            optVerifyResponseContent,
            optFromJson,
          ],
        },
        {
          name: "create-dns-server-monitor",
          description: "Creates a new monitor",
          options: [
            optApmDomainId,
            optDisplayName,
            optMonitorType,
            optVantagePoints,
            optRepeatIntervalInSeconds,
            optScriptId,
            optStatus,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIsIpv6,
            optDnsConfiguration,
            optIsFailureRetried,
            {
              name: "--is-query-recursive",
              description:
                "If isQueryRecursive is enabled, then queries will be sent recursively to the target server",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--name-server",
              description:
                "Name of the server that will be used to perform DNS lookup",
              args: { name: "name-server" },
            },
            optNetworkConfiguration2,
            optProtocol,
            optRecordType,
            optVerifyResponseContent,
            optFromJson,
          ],
        },
        {
          name: "create-dns-trace-monitor",
          description: "Creates a new monitor",
          options: [
            optApmDomainId,
            optDisplayName,
            optMonitorType,
            optVantagePoints,
            optRepeatIntervalInSeconds,
            optScriptId,
            optStatus,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIsIpv6,
            optDnsConfiguration,
            optIsFailureRetried,
            optProtocol,
            optRecordType,
            optVerifyResponseContent,
            optFromJson,
          ],
        },
        {
          name: "update-dns-sec-monitor",
          description: "Updates the monitor",
          options: [
            optApmDomainId,
            optMonitorId,
            optDisplayName2,
            optVantagePoints2,
            optScriptId,
            optStatus,
            optRepeatIntervalInSeconds2,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIfMatch,
            optForce,
            optIsIpv6,
            optDnsConfiguration,
            optIsFailureRetried,
            optRecordType,
            optVerifyResponseContent,
            optFromJson,
          ],
        },
        {
          name: "update-dns-server-monitor",
          description: "Updates the monitor",
          options: [
            optApmDomainId,
            optMonitorId,
            optDisplayName2,
            optVantagePoints2,
            optScriptId,
            optStatus,
            optRepeatIntervalInSeconds2,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIfMatch,
            optForce,
            optIsIpv6,
            optDnsConfiguration,
            optIsFailureRetried,
            {
              name: "--is-query-recursive",
              description:
                "If isQueryRecursive is enabled, then queries will be sent recursively to the target server",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--name-server",
              description:
                "Name of the server that will be used to perform DNS lookup",
              args: { name: "name-server" },
            },
            optNetworkConfiguration2,
            optProtocol,
            optRecordType,
            optVerifyResponseContent,
            optFromJson,
          ],
        },
        {
          name: "update-dns-trace-monitor",
          description: "Updates the monitor",
          options: [
            optApmDomainId,
            optMonitorId,
            optDisplayName2,
            optVantagePoints2,
            optScriptId,
            optStatus,
            optRepeatIntervalInSeconds2,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIfMatch,
            optForce,
            optIsIpv6,
            optDnsConfiguration,
            optIsFailureRetried,
            optProtocol,
            optRecordType,
            optVerifyResponseContent,
            optFromJson,
          ],
        },
        {
          name: "create-ftp-monitor",
          description: "Creates a new monitor",
          options: [
            optApmDomainId,
            optDisplayName,
            optMonitorType,
            optVantagePoints,
            optRepeatIntervalInSeconds,
            optScriptId,
            optStatus,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optDnsConfiguration,
            {
              name: "--download-size-limit-in-bytes",
              description:
                "Download size limit in Bytes, at which to stop the transfer",
              args: { name: "integer" },
            },
            {
              name: "--ftp-basic-authentication-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ftp-protocol",
              description: "FTP protocol type",
              args: { suggestions: ["FTP", "FTPS", "SFTP"] },
            },
            {
              name: "--ftp-request-type",
              description: "FTP monitor request type",
              args: { suggestions: ["LIST", "UPLOAD", "DOWNLOAD"] },
            },
            optIsFailureRetried,
            optNetworkConfiguration2,
            {
              name: "--upload-file-size-in-bytes",
              description:
                "File upload size in Bytes, at which to stop the transfer",
              args: { name: "integer" },
            },
            {
              name: "--verify-response-codes",
              description: "Expected FTP response codes",
              args: { name: "json" },
            },
            optVerifyResponseContent,
            {
              name: "--is-active-mode",
              description:
                "If enabled, Active mode will be used for the FTP connection",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsIpv6,
            optFromJson,
          ],
        },
        {
          name: "create-sql-monitor",
          description: "Creates a new monitor",
          options: [
            optApmDomainId,
            optDisplayName,
            optMonitorType,
            optVantagePoints,
            optRepeatIntervalInSeconds,
            optScriptId,
            optStatus,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            {
              name: "--database-service-name",
              description: "Service name of the database",
              args: { name: "database-service-name" },
            },
            {
              name: "--database-wallet",
              description: "The database wallet configuration zip file path",
              args: { name: "database-wallet" },
            },
            {
              name: "--connection-string",
              description: "Database connection string",
              args: { name: "connection-string" },
            },
            {
              name: "--database-authentication-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--database-connection-type",
              description: "Database connection type",
              args: { suggestions: ["CLOUD_WALLET", "CUSTOM_JDBC"] },
            },
            {
              name: "--database-role",
              description: "Database role",
              args: {
                suggestions: [
                  "DEFAULT",
                  "SYSDBA",
                  "SYSOPER",
                  "SYSBACKUP",
                  "SYSDG",
                  "SYSKM",
                  "SYSASM",
                ],
              },
            },
            {
              name: "--database-type",
              description: "Database type",
              args: { suggestions: ["ORACLE", "MYSQL"] },
            },
            optDnsConfiguration,
            optIsFailureRetried,
            {
              name: "--database-query",
              description: "SQL query to be executed",
              args: { name: "database-query" },
            },
            optIsIpv6,
            optFromJson,
          ],
        },
        {
          name: "update-ftp-monitor",
          description: "Updates the monitor",
          options: [
            optApmDomainId,
            optMonitorId,
            optDisplayName2,
            optVantagePoints2,
            optScriptId,
            optStatus,
            optRepeatIntervalInSeconds2,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIfMatch,
            optForce,
            optDnsConfiguration,
            {
              name: "--download-size-limit-in-bytes",
              description:
                "Download size limit in Bytes, at which to stop the transfer",
              args: { name: "integer" },
            },
            {
              name: "--ftp-basic-authentication-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ftp-request-type",
              description: "FTP monitor request type",
              args: { suggestions: ["LIST", "UPLOAD", "DOWNLOAD"] },
            },
            optIsFailureRetried,
            optNetworkConfiguration2,
            {
              name: "--upload-file-size-in-bytes",
              description:
                "File upload size in Bytes, at which to stop the transfer",
              args: { name: "integer" },
            },
            {
              name: "--verify-response-codes",
              description: "Expected FTP response codes",
              args: { name: "json" },
            },
            optVerifyResponseContent,
            {
              name: "--is-active-mode",
              description:
                "If enabled, Active mode will be used for the FTP connection",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIsIpv6,
            optFromJson,
          ],
        },
        {
          name: "update-sql-monitor",
          description: "Updates the monitor",
          options: [
            optApmDomainId,
            optMonitorId,
            optDisplayName2,
            optVantagePoints2,
            optScriptId,
            optStatus,
            optRepeatIntervalInSeconds2,
            optIsRunOnce,
            optTimeoutInSeconds,
            optTarget,
            optScriptParameters,
            optAvailabilityConfiguration,
            optMaintenanceWindowSchedule,
            optFreeformTags,
            optDefinedTags,
            optIsRunNow,
            optSchedulingPolicy,
            optBatchIntervalInSeconds,
            optIfMatch,
            optForce,
            {
              name: "--database-service-name",
              description: "Service name of the database",
              args: { name: "database-service-name" },
            },
            {
              name: "--database-wallet",
              description: "The database wallet configuration zip file path",
              args: { name: "database-wallet" },
            },
            {
              name: "--connection-string",
              description: "Database connection string",
              args: { name: "connection-string" },
            },
            {
              name: "--database-authentication-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--database-connection-type",
              description: "Database connection type",
              args: { suggestions: ["CLOUD_WALLET", "CUSTOM_JDBC"] },
            },
            {
              name: "--database-role",
              description: "Database role",
              args: {
                suggestions: [
                  "DEFAULT",
                  "SYSDBA",
                  "SYSOPER",
                  "SYSBACKUP",
                  "SYSDG",
                  "SYSKM",
                  "SYSASM",
                ],
              },
            },
            {
              name: "--database-type",
              description: "Database type",
              args: { suggestions: ["ORACLE", "MYSQL"] },
            },
            optDnsConfiguration,
            optIsFailureRetried,
            {
              name: "--database-query",
              description: "SQL query to be executed",
              args: { name: "database-query" },
            },
            optIsIpv6,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "monitor-collection",
      description:
        "The results of a monitor search, which contains both MonitorSummary items and other data in an APM domain",
      subcommands: [
        {
          name: "list-monitors",
          description: "Returns a list of monitors",
          options: [
            optApmDomainId,
            optDisplayName3,
            {
              name: "--script-id",
              description: "A filter to return only monitors using scriptId",
              args: { name: "script-id" },
            },
            {
              name: "--vantage-point",
              description: "The name of the public or dedicated vantage point",
              args: { name: "vantage-point" },
            },
            {
              name: "--monitor-type",
              description:
                "A filter to return only monitors that match the given monitor type",
              args: { name: "monitor-type" },
            },
            {
              name: "--status",
              description:
                "A filter to return only monitors that match the status given",
              args: { suggestions: ["ENABLED", "DISABLED", "INVALID"] },
            },
            optLimit,
            optPage,
            {
              name: "--is-maintenance-window-active",
              description:
                "A filter to return the monitors whose maintenance window is currently active",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-maintenance-window-set",
              description:
                "A filter to return the monitors whose maintenance window is set",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "displayName",
                  "timeCreated",
                  "timeUpdated",
                  "status",
                  "monitorType",
                  "maintenanceWindowTimeStarted",
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
    {
      name: "script",
      description: "The information about the script",
      subcommands: [
        {
          name: "create",
          description: "Creates a new script",
          options: [
            optApmDomainId,
            optDisplayName,
            {
              name: "--content-type",
              description: "Content type of script",
              args: { suggestions: ["SIDE", "JS", "PLAYWRIGHT_TS"] },
              isRequired: true,
            },
            {
              name: "--content",
              description: "The content of the script",
              args: { name: "content" },
              isRequired: true,
            },
            {
              name: "--content-file-name",
              description: "File name of uploaded script content",
              args: { name: "content-file-name" },
            },
            {
              name: "--parameters",
              description: "List of script parameters",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified script",
          options: [
            optApmDomainId,
            optScriptId2,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets the configuration of the script identified by the OCID",
          options: [optApmDomainId, optScriptId2, optFromJson],
        },
        {
          name: "update",
          description: "Updates the script",
          options: [
            optApmDomainId,
            optScriptId2,
            optDisplayName2,
            {
              name: "--content-type",
              description: "Content type of script",
              args: { suggestions: ["SIDE", "JS", "PLAYWRIGHT_TS"] },
            },
            {
              name: "--content",
              description: "The content of the script",
              args: { name: "content" },
            },
            {
              name: "--content-file-name",
              description: "File name of uploaded script content",
              args: { name: "content-file-name" },
            },
            {
              name: "--parameters",
              description: "List of script parameters",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "aggregated-network-data-result",
      description: "The aggregated network results",
      subcommands: [
        {
          name: "aggregate-network-data",
          description: "Gets aggregated network data for given executions",
          options: [
            optApmDomainId,
            optMonitorId,
            {
              name: "--vantage-point-execution-times",
              description: "List of VantagePointExecution items",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "script-collection",
      description:
        "The results of a script search, which contains both ScriptSummary items and other data in an APM domain",
      subcommands: [
        {
          name: "list-scripts",
          description: "Returns a list of scripts",
          options: [
            optApmDomainId,
            optDisplayName3,
            {
              name: "--content-type",
              description:
                "A filter to return only resources that match the content type given",
              args: { name: "content-type" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "displayName",
                  "timeCreated",
                  "timeUpdated",
                  "contentType",
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
    {
      name: "on-premise-vantage-point-collection",
      description:
        "The results of an On-premise vantage point search, which contains OnPremiseVantagePointSummary items",
      subcommands: [
        {
          name: "list-on-premise-vantage-points",
          description: "Returns a list of On-premise vantage points",
          options: [
            optApmDomainId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "displayName",
                  "name",
                  "timeCreated",
                  "timeUpdated",
                ],
              },
            },
            optDisplayName3,
            optName,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "monitor-result",
      description: "The monitor result for a specific execution",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the results for a specific execution of a monitor identified by OCID",
          options: [
            optApmDomainId,
            optMonitorId,
            {
              name: "--vantage-point",
              description: "The vantagePoint name",
              args: { name: "vantage-point" },
              isRequired: true,
            },
            {
              name: "--result-type",
              description:
                "The result type: har, screenshot, log, network, diagnostics or script",
              args: { name: "result-type" },
              isRequired: true,
            },
            {
              name: "--result-content-type",
              description: "The result content type: zip or raw",
              args: { name: "result-content-type" },
              isRequired: true,
            },
            {
              name: "--execution-time",
              description: "The time the object was posted",
              args: { name: "execution-time" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "worker",
      description: "The information about an On-premise VP worker",
      subcommands: [
        {
          name: "create",
          description: "Registers a new worker",
          options: [
            optApmDomainId,
            optOnPremiseVantagePointId,
            {
              name: "--name",
              description:
                "Unique On-premise VP worker name that cannot be edited",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource-principal-token-public-key",
              description:
                "Public key for resource Principal Token based validation to be used in further calls",
              args: { name: "resource-principal-token-public-key" },
              isRequired: true,
            },
            {
              name: "--configuration-details",
              description: "Configuration details of the On-premise VP worker",
              args: { name: "json" },
            },
            {
              name: "--worker-type",
              description: "Type of the On-premise VP worker",
              args: { suggestions: ["DOCKER"] },
            },
            {
              name: "--status",
              description: "Enables or disables the On-premise VP worker",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--priority",
              description:
                "Priority of the On-premise VP worker to schedule monitors",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--worker-version",
              description:
                "Image version of the On-premise VP worker. required",
              args: { name: "worker-version" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deregisters the specified worker",
          options: [
            optApmDomainId,
            optOnPremiseVantagePointId,
            optWorkerId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of the worker identified by the OCID",
          options: [
            optApmDomainId,
            optOnPremiseVantagePointId,
            optWorkerId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the worker",
          options: [
            optApmDomainId,
            optOnPremiseVantagePointId,
            optWorkerId,
            {
              name: "--configuration-details",
              description: "Configuration details of the On-premise VP worker",
              args: { name: "json" },
            },
            {
              name: "--status",
              description: "Enables or disables the On-premise VP worker",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            {
              name: "--priority",
              description:
                "Priority of the On-premise VP worker to schedule monitors",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dedicated-vantage-point-collection",
      description:
        "The results of a dedicated vantage point search, which contains DedicatedVantagePointSummary items and other",
      subcommands: [
        {
          name: "list-dedicated-vantage-points",
          description: "Returns a list of dedicated vantage points",
          options: [
            optApmDomainId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "displayName",
                  "name",
                  "timeCreated",
                  "timeUpdated",
                  "status",
                ],
              },
            },
            optDisplayName3,
            optName,
            {
              name: "--status",
              description:
                "A filter to return only the dedicated vantage points that match a given status",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "public-vantage-point-collection",
      description:
        "The results of a public vantage point search, which contains PublicVantagePointSummary items and other data",
      subcommands: [
        {
          name: "list-public-vantage-points",
          description: "Returns a list of public vantage points",
          options: [
            optApmDomainId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["name", "displayName"] },
            },
            optDisplayName3,
            optName,
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
