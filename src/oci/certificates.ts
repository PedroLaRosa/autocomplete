// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const completionSpec: Fig.Spec = {
  name: "certificates",
  description: "Certificates Service Retrieval",
  subcommands: [
    {
      name: "certificate-authority-bundle",
      description:
        "The contents of the certificate, properties of the certificate (and certificate version)",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a bundle for a certificate authority (CA) that matches either the specified stage, name",
          options: [
            {
              name: "--certificate-authority-id",
              description: "The OCID of the certificate authority (CA)",
              args: { name: "certificate-authority-id" },
              isRequired: true,
            },
            {
              name: "--version-number",
              description:
                "The version number of the certificate authority (CA)",
              args: { name: "integer" },
            },
            {
              name: "--stage",
              description: "The rotation state of the certificate version",
              args: {
                suggestions: [
                  "CURRENT",
                  "PENDING",
                  "PENDING_ACTIVATION",
                  "LATEST",
                  "PREVIOUS",
                  "DEPRECATED",
                ],
              },
            },
            {
              name: "--version-name",
              description:
                "The name of the certificate authority (CA). (This might be referred to as the name of the CA version",
              args: { name: "version-name" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "ca-bundle",
      description:
        "The contents of the CA bundle (root and intermediate certificates), properties of the CA bundle",
      subcommands: [
        {
          name: "get",
          description: "Gets the bundle for the specified CA bundle",
          options: [
            {
              name: "--ca-bundle-id",
              description: "The OCID of the CA bundle",
              args: { name: "ca-bundle-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "certificate-bundle",
      description:
        "The contents of the certificate, properties of the certificate (and certificate version)",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a certificate bundle that matches either the specified stage, versionName, or versionNumber parameter",
          options: [
            {
              name: "--certificate-id",
              description: "The OCID of the certificate",
              args: { name: "certificate-id" },
              isRequired: true,
            },
            {
              name: "--version-number",
              description: "The version number of the certificate",
              args: { name: "integer" },
            },
            {
              name: "--stage",
              description: "The rotation state of the certificate version",
              args: {
                suggestions: [
                  "CURRENT",
                  "PENDING",
                  "LATEST",
                  "PREVIOUS",
                  "DEPRECATED",
                ],
              },
            },
            {
              name: "--bundle-type",
              description: "The type of certificate bundle",
              args: {
                suggestions: [
                  "CERTIFICATE_CONTENT_PUBLIC_ONLY",
                  "CERTIFICATE_CONTENT_WITH_PRIVATE_KEY",
                ],
              },
            },
            {
              name: "--version-name",
              description:
                "The name of the certificate. (This might be referred to as the name of the certificate version",
              args: { name: "version-name" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "certificate-authority-bundle-version",
      description:
        "The properties of a version of a bundle for a certificate authority (CA)",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all versions of bundles for a given certificate authority (CA)",
          options: [
            {
              name: "--certificate-authority-id",
              description: "The OCID of the certificate authority (CA)",
              args: { name: "certificate-authority-id" },
              isRequired: true,
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["VERSION_NUMBER"] },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending (ASC) or descending (DESC)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            { name: "--all", description: "Fetches all pages of results" },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "certificate-bundle-version",
      description: "The properties of the certificate bundle",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all certificate bundle versions for the specified certificate",
          options: [
            {
              name: "--certificate-id",
              description: "The OCID of the certificate",
              args: { name: "certificate-id" },
              isRequired: true,
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["VERSION_NUMBER"] },
            },
            {
              name: "--sort-order",
              description:
                "The sort order to use, either ascending (ASC) or descending (DESC)",
              args: { suggestions: ["ASC", "DESC"] },
            },
            { name: "--all", description: "Fetches all pages of results" },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
