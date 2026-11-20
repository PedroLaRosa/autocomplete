// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
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
const optMonitoredInstanceId: Fig.Option = {
  name: "--monitored-instance-id",
  description: "OCID of monitored instance",
  args: { name: "monitored-instance-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "appmgmt-control",
  description: "Resource Discovery and Monitoring Control",
  subcommands: [
    {
      name: "monitored-instance-collection",
      description: "Results of a monitored instance search",
      subcommands: [
        {
          name: "list-monitored-instances",
          description: "Returns a list of monitored instances",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending ('ASC') or descending ('DESC')",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
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
            "Return a (paginated) list of errors for a given work request",
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
      name: "monitored-instance",
      description: "Description of Monitored Instance",
      subcommands: [
        {
          name: "get",
          description: "Gets a monitored instance by identifier",
          options: [optMonitoredInstanceId, optFromJson],
        },
        {
          name: "activate-plugin",
          description:
            "Activates Resource Plugin for compute instance identified by the instance ocid",
          options: [
            optMonitoredInstanceId,
            {
              name: "--if-match",
              description: "For optimistic concurrency control",
              args: { name: "if-match" },
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--max-wait-seconds",
              description:
                "Maximum time to wait for the --wait-for-state state (default 1200)",
              args: { name: "integer" },
            },
            {
              name: "--wait-interval-seconds",
              description:
                "Check interval for --wait-for-state in seconds (default 30)",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "publish-top-processes",
          description: "Starts cpu and memory top processes collection",
          options: [
            optMonitoredInstanceId,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--max-wait-seconds",
              description:
                "Maximum time to wait for the --wait-for-state state (default 1200)",
              args: { name: "integer" },
            },
            {
              name: "--wait-interval-seconds",
              description:
                "Check interval for --wait-for-state in seconds (default 30)",
              args: { name: "integer" },
            },
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
          description:
            "Return a (paginated) list of logs for a given work request",
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
      description: "A description of workrequest status",
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
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--work-request-id",
              description: "The ID of the asynchronous work request",
              args: { name: "work-request-id" },
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
  ],
};

export default completionSpec;
