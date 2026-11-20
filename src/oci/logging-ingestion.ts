// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const completionSpec: Fig.Spec = {
  name: "logging-ingestion",
  description: "Logging Ingestion",
  subcommands: [
    {
      name: "put-logs",
      description: "This API allows ingesting logs associated with a logId",
      options: [
        {
          name: "--log-id",
          description: "OCID of a log to work with",
          args: { name: "log-id" },
          isRequired: true,
        },
        {
          name: "--specversion",
          description:
            "Required for identifying the version of the data format being used",
          args: { name: "specversion" },
          isRequired: true,
        },
        {
          name: "--log-entry-batches",
          description: "List of log-batches",
          args: { name: "json" },
          isRequired: true,
        },
        {
          name: "--opc-agent-version",
          description: "Version of the agent sending the request",
          args: { name: "opc-agent-version" },
        },
        {
          name: "--agent-timestamp",
          description:
            "Effective timestamp, for when the agent started processing the log segment being sent",
          args: { name: "datetime" },
        },
        {
          name: "--from-json",
          description:
            "Provide input to this command as a JSON document from a file (file://path)",
          args: { name: "file://path" },
        },
      ],
    },
  ],
};

export default completionSpec;
