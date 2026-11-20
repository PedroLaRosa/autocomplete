// Tailcall v1.6.14 (npm @tailcallhq/tailcall latest, 2026-11-19).
// Source: static read of the clap strings embedded in the linux-x64 binary of @tailcallhq/core-linux-x64-gnu 1.6.14 (not executed);
// the upstream repo tailcallhq/tailcall is no longer cloneable here. Subcommands, `start --verify-ssl`, `check --n-plus-one-queries`
// and the existence of `check --schema` are verified; the help text and the `check --format` flag could not be verified and were left as they were.

const completionSpec: Fig.Spec = {
  name: "tailcall",
  description:
    "TailCall CLI for managing and optimizing GraphQL configurations",
  subcommands: [
    {
      name: "check",
      description: "Validate a composition spec",
      args: {
        name: "FILE_PATHS",
        description:
          "Path for the configuration files separated by spaces if more than one",
        template: "filepaths",
        isVariadic: true,
      },
      options: [
        {
          name: "--n-plus-one-queries",
          description: "Detect N+1 issues",
          isPersistent: true,
        },
        {
          name: "--schema",
          description: "Display the schema of the composition spec",
          isPersistent: true,
        },
        {
          name: "--format",
          description: "Change the format of the input file",
          args: {
            suggestions: ["gql", "graphql", "yml", "yaml", "json"],
          },
        },
      ],
    },
    {
      name: "start",
      description: "Starts the GraphQL server on the configured port",
      args: {
        name: "FILE_PATHS",
        description:
          "Path for the configuration files or http(s) link to config files separated by spaces if more than one",
        template: ["filepaths", "folders"],
        isVariadic: true,
      },
      options: [
        {
          name: "--verify-ssl",
          description:
            "Controls SSL/TLS certificate verification for remote config files. Set to false to skip certificate verification (not recommended for production)",
          args: {
            name: "VERIFY_SSL",
            suggestions: ["true", "false"],
          },
        },
      ],
    },
    {
      name: "init",
      description: "Initialize a new project",
      args: {
        name: "FOLDER_PATH",
        template: "folders",
      },
    },
    {
      name: "gen",
      description:
        "Generates a Tailcall Configuration from one or more source files",
      args: {
        name: "FILE_PATH",
        description: "Path of the configuration file",
        template: "filepaths",
      },
    },
  ],
};

export default completionSpec;
