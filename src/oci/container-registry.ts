// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const completionSpec: Fig.Spec = {
  name: "container-registry",
  description: "Container Registry",
  subcommands: [
    {
      name: "access-token",
      description:
        "Access token response for OCI Container Registry extension authentication",
      subcommands: [
        {
          name: "get",
          description:
            "Get a token using basic auth credentials or signature headers",
          options: [
            {
              name: "--service",
              description: "Domain name of the target service server",
              args: { name: "service" },
            },
            {
              name: "--scope",
              description: "Scope to restrict access to resources",
              args: { name: "scope" },
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
    },
  ],
};

export default completionSpec;
