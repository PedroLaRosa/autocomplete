// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
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
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCommandId: Fig.Option = {
  name: "--command-id",
  description: "The OCID of the command",
  args: { name: "command-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "instance-agent",
  description: "Compute Instance Agent Service",
  subcommands: [
    {
      name: "command",
      description: "The command payload",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancels a command that is scheduled to run on a compute instance that is managed by Oracle Cloud Agent",
          options: [
            {
              name: "--if-match",
              description: "For optimistic concurrency control",
              args: { name: "if-match" },
            },
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optCommandId,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a command or script to run on a compute instance that is managed by Oracle Cloud Agent",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the command in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--target",
              description: "The target instance to run the command on",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--content",
              description: "The contents of the command",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the command",
              args: { name: "display-name" },
            },
            {
              name: "--timeout-in-seconds",
              description: "Command execution time limit",
              args: { name: "timeout-in-seconds" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about an Oracle Cloud Agent command",
          options: [optCommandId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists the Oracle Cloud Agent commands issued in a compartment",
          options: [
            optCompartmentId,
            optPage,
            optLimit,
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
      name: "command-execution",
      description: "A command's execution summary",
      subcommands: [
        {
          name: "get",
          description:
            "Gets information about the status of specified instance agent commandId for the given instanceId",
          options: [
            {
              name: "--instance-id",
              description: "The OCID of the instance",
              args: { name: "instance-id" },
              isRequired: true,
            },
            optCommandId,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists the execution details for Oracle Cloud Agent commands that run on the specified compute instance",
          options: [
            optCompartmentId,
            {
              name: "--instance-id",
              description: "The OCID of the instance",
              args: { name: "instance-id" },
              isRequired: true,
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            {
              name: "--lifecycle-state",
              description:
                "A filter to only return resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "SUCCEEDED",
                  "FAILED",
                  "TIMED_OUT",
                  "CANCELED",
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
      name: "plugin",
      description: "An Oracle Cloud Agent plugin",
      subcommands: [
        {
          name: "get",
          description:
            "Gets information about a specific Oracle Cloud Agent plugin on a compute instance",
          options: [
            {
              name: "--instanceagent-id",
              description: "The OCID of the instance",
              args: { name: "instanceagent-id" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--plugin-name",
              description: "The name of the plugin",
              args: { name: "plugin-name" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets information about the Oracle Cloud Agent plugins that are available on a specific compute instance",
          options: [
            optCompartmentId,
            {
              name: "--instanceagent-id",
              description: "The OCID of the instance",
              args: { name: "instanceagent-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "The plugin status",
              args: {
                suggestions: ["RUNNING", "STOPPED", "NOT_SUPPORTED", "INVALID"],
              },
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            {
              name: "--name",
              description: "The plugin name",
              args: { name: "name" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "available-plugins",
      description:
        "CLI for the Oracle Cloud Agent software running on compute instances",
      subcommands: [
        {
          name: "get",
          description:
            "Lists the Oracle Cloud Agent plugins that are available for compute instances",
          options: [
            optCompartmentId,
            {
              name: "--os-name",
              description: "The image (OS) for the compute instance",
              args: { name: "os-name" },
              isRequired: true,
            },
            {
              name: "--os-version",
              description: "The OS version for the instance",
              args: { name: "os-version" },
              isRequired: true,
            },
            optPage,
            optLimit,
            optSortBy,
            optSortOrder,
            {
              name: "--name",
              description: "The plugin name",
              args: { name: "name" },
            },
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
