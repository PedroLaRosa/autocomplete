// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optMonitorId: Fig.Option = {
  name: "--monitor-id",
  description: "The OCID of a monitor",
  args: { name: "monitor-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optPort: Fig.Option = {
  name: "--port",
  description: "The port on which to probe endpoints",
  args: { name: "integer" },
};
const optTimeoutInSeconds: Fig.Option = {
  name: "--timeout-in-seconds",
  description: "The probe timeout in seconds",
  args: { name: "integer" },
};
const optVantagePointNames: Fig.Option = {
  name: "--vantage-point-names",
  description:
    "A list of names of vantage points from which to execute the probe",
  args: { name: "json" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    'The maximum number of items to return in a paginated "List" call',
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    'The value of the opc-next-page response header from the previous "List" call',
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "Controls the sort order of results",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
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
const optIsEnabled: Fig.Option = {
  name: "--is-enabled",
  description: "Enables or disables the monitor",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optTargets: Fig.Option = {
  name: "--targets",
  description: "A list of targets (hostnames or IP addresses) of the probe",
  args: { name: "json" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "Filters results that exactly match the displayName field",
  args: { name: "display-name" },
};
const optHeaders: Fig.Option = {
  name: "--headers",
  description: "A dictionary of HTTP request headers",
  args: { name: "json" },
};
const optMethod: Fig.Option = {
  name: "--method",
  args: { suggestions: ["GET", "HEAD"] },
};
const optPath: Fig.Option = {
  name: "--path",
  description: "The optional URL path to probe, including query parameters",
  args: { name: "path" },
};
const completionSpec: Fig.Spec = {
  name: "health-checks",
  description: "Health Checks",
  subcommands: [
    {
      name: "ping-monitor",
      description:
        "A summary containing all of the mutable and immutable properties for a ping monitor",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a monitor into a different compartment",
          options: [
            optMonitorId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a ping monitor",
          options: [
            optCompartmentId,
            optTargets,
            {
              name: "--protocol",
              args: { suggestions: ["ICMP", "TCP"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A user-friendly and mutable name suitable for display in a user interface",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--interval-in-seconds",
              description: "The monitor interval in seconds",
              args: { name: "integer" },
              isRequired: true,
            },
            optVantagePointNames,
            optPort,
            optTimeoutInSeconds,
            optIsEnabled,
            optFreeformTags,
            optDefinedTags,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the ping monitor and its configuration",
          options: [
            optMonitorId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the configuration for the specified ping monitor",
          options: [
            optMonitorId,
            {
              name: "--if-none-match",
              description:
                "The If-None-Match header field makes the request method conditional on the absence of any current",
              args: { name: "if-none-match" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of configured ping monitors",
          options: [
            {
              name: "--compartment-id",
              description: "Filters results by compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by when listing monitors",
              args: { suggestions: ["id", "displayName", "timeCreated"] },
            },
            optSortOrder,
            optDisplayName,
            {
              name: "--home-region",
              description: "Filters results that match the homeRegion",
              args: { name: "home-region" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the configuration of the specified ping monitor",
          options: [
            optMonitorId,
            {
              name: "--targets",
              description:
                "A list of targets (hostnames or IP addresses) of the probe",
              args: { name: "json" },
            },
            optVantagePointNames,
            optPort,
            optTimeoutInSeconds,
            { name: "--protocol", args: { suggestions: ["ICMP", "TCP"] } },
            {
              name: "--display-name",
              description:
                "A user-friendly and mutable name suitable for display in a user interface",
              args: { name: "display-name" },
            },
            {
              name: "--interval-in-seconds",
              description: "The monitor interval in seconds",
              args: { name: "integer" },
            },
            optIsEnabled,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ping-probe",
      description:
        "This model contains all of the mutable and immutable properties for a ping probe",
      subcommands: [
        {
          name: "create-on-demand",
          description: "Creates an on-demand ping probe",
          options: [
            optCompartmentId,
            optTargets,
            {
              name: "--protocol",
              args: { suggestions: ["ICMP", "TCP"] },
              isRequired: true,
            },
            optVantagePointNames,
            optPort,
            optTimeoutInSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "http-monitor",
      description:
        "This model contains all of the mutable and immutable properties for an HTTP monitor",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a monitor into a different compartment",
          options: [
            optMonitorId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates an HTTP monitor",
          options: [
            optCompartmentId,
            optTargets,
            {
              name: "--protocol",
              args: { suggestions: ["HTTP", "HTTPS"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A user-friendly and mutable name suitable for display in a user interface",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--interval-in-seconds",
              description: "The monitor interval in seconds",
              args: { name: "integer" },
              isRequired: true,
            },
            optVantagePointNames,
            optPort,
            optTimeoutInSeconds,
            optMethod,
            optPath,
            optHeaders,
            optIsEnabled,
            optFreeformTags,
            optDefinedTags,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the HTTP monitor and its configuration",
          options: [
            optMonitorId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the configuration for the specified monitor",
          options: [
            optMonitorId,
            {
              name: "--if-none-match",
              description:
                "The If-None-Match header field makes the request method conditional on the absence of any current",
              args: { name: "if-none-match" },
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of HTTP monitors",
          options: [
            {
              name: "--compartment-id",
              description: "Filters results by compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by when listing monitors",
              args: { suggestions: ["id", "displayName", "timeCreated"] },
            },
            optSortOrder,
            optDisplayName,
            {
              name: "--home-region",
              description: "Filters results that match the homeRegion",
              args: { name: "home-region" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the configuration of the specified HTTP monitor",
          options: [
            optMonitorId,
            {
              name: "--targets",
              description:
                "A list of targets (hostnames or IP addresses) of the probe",
              args: { name: "json" },
            },
            optVantagePointNames,
            optPort,
            optTimeoutInSeconds,
            { name: "--protocol", args: { suggestions: ["HTTP", "HTTPS"] } },
            optMethod,
            optPath,
            optHeaders,
            {
              name: "--display-name",
              description:
                "A user-friendly and mutable name suitable for display in a user interface",
              args: { name: "display-name" },
            },
            {
              name: "--interval-in-seconds",
              description: "The monitor interval in seconds",
              args: { name: "integer" },
            },
            optIsEnabled,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "http-probe-result",
      description: "The results returned by running an HTTP probe",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the HTTP probe results for the specified probe or monitor",
          options: [
            {
              name: "--probe-configuration-id",
              description: "The OCID of a monitor or on-demand probe",
              args: { name: "probe-configuration-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            {
              name: "--start-time-greater-than-or-equal-to",
              description:
                "Returns results with a startTime equal to or greater than the specified value",
              args: { name: "start-time-greater-than-or-equal-to" },
            },
            {
              name: "--start-time-less-than-or-equal-to",
              description:
                "Returns results with a startTime equal to or less than the specified value",
              args: { name: "start-time-less-than-or-equal-to" },
            },
            optSortOrder,
            {
              name: "--target",
              description: "Filters results that match the target",
              args: { name: "target" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ping-probe-result",
      description: "The results returned by running a ping probe",
      subcommands: [
        {
          name: "list",
          description:
            "Returns the results for the specified probe, where the probeConfigurationId is the OCID of either a monitor",
          options: [
            {
              name: "--probe-configuration-id",
              description: "The OCID of a monitor or on-demand probe",
              args: { name: "probe-configuration-id" },
              isRequired: true,
            },
            optLimit,
            optPage,
            {
              name: "--start-time-greater-than-or-equal-to",
              description:
                "Returns results with a startTime equal to or greater than the specified value",
              args: { name: "start-time-greater-than-or-equal-to" },
            },
            {
              name: "--start-time-less-than-or-equal-to",
              description:
                "Returns results with a startTime equal to or less than the specified value",
              args: { name: "start-time-less-than-or-equal-to" },
            },
            optSortOrder,
            {
              name: "--target",
              description: "Filters results that match the target",
              args: { name: "target" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "http-probe",
      description:
        "A summary that contains all of the mutable and immutable properties for an HTTP probe",
      subcommands: [
        {
          name: "create-on-demand",
          description: "Creates an on-demand HTTP probe",
          options: [
            optCompartmentId,
            optTargets,
            {
              name: "--protocol",
              args: { suggestions: ["HTTP", "HTTPS"] },
              isRequired: true,
            },
            optVantagePointNames,
            optPort,
            optTimeoutInSeconds,
            optMethod,
            optPath,
            optHeaders,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "vantage-point",
      description: "Information about a vantage point",
      subcommands: [
        {
          name: "list",
          description:
            "Gets information about all vantage points available to the user",
          options: [
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by when listing vantage points",
              args: { suggestions: ["name", "displayName"] },
            },
            optSortOrder,
            {
              name: "--name",
              description: "Filters results that exactly match the name field",
              args: { name: "name" },
            },
            optDisplayName,
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
