// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const completionSpec: Fig.Spec = {
  name: "audit",
  description: "Audit",
  subcommands: [
    {
      name: "event",
      description: "All the attributes of an audit event",
      subcommands: [
        {
          name: "list",
          description:
            "Returns all the audit events processed for the specified compartment within the specified time range",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--page",
              description: "For list pagination",
              args: { name: "page" },
            },
            { name: "--all", description: "Fetches all pages of results" },
            {
              name: "--skip-deserialization",
              description:
                "Skips deserializing service response into python sdk response models and returns as plain JSON object",
            },
            {
              name: "--stream-output",
              description:
                "Print output to stdout as it is fetched so the full response is not stored in memory",
            },
            {
              name: "--start-time",
              description:
                "Returns events that were processed at or after this start date and time",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--end-time",
              description:
                "Returns events that were processed before this end date and time, expressed in RFC 3339 timestamp format",
              args: { name: "datetime" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "config",
      description: "The retention period setting, specified in days",
      subcommands: [
        {
          name: "get",
          description: "Get the configuration",
          options: [
            {
              name: "--compartment-id",
              description: "ID of the root compartment (tenancy)",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Update the configuration",
          options: [
            {
              name: "--compartment-id",
              description: "ID of the root compartment (tenancy)",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--retention-period-days",
              description: "The retention period setting, specified in days",
              args: { name: "integer" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
