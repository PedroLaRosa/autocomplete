// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const completionSpec: Fig.Spec = {
  name: "secrets",
  description: "Vault Secret Retrieval",
  subcommands: [
    {
      name: "secret-bundle",
      description:
        "The contents of the secret, properties of the secret (and secret version)",
      subcommands: [
        {
          name: "get",
          description:
            "Gets a secret bundle that matches either the specified stage, secretVersionName, or versionNumber parameter",
          options: [
            {
              name: "--secret-id",
              description: "The OCID of the secret",
              args: { name: "secret-id" },
              isRequired: true,
            },
            {
              name: "--version-number",
              description: "The version number of the secret",
              args: { name: "integer" },
            },
            {
              name: "--secret-version-name",
              description:
                "The name of the secret. (This might be referred to as the name of the secret version",
              args: { name: "secret-version-name" },
            },
            {
              name: "--stage",
              description: "The rotation state of the secret version",
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
            optFromJson,
          ],
        },
        {
          name: "get-secret-bundle-by-name",
          description:
            "Gets a secret bundle by secret name and vault ID, and secret version that matches either the specified stage",
          options: [
            {
              name: "--secret-name",
              description: "A user-friendly name for the secret",
              args: { name: "secret-name" },
              isRequired: true,
            },
            {
              name: "--vault-id",
              description: "The OCID of the vault that contains the secret",
              args: { name: "vault-id" },
              isRequired: true,
            },
            {
              name: "--version-number",
              description: "The version number of the secret",
              args: { name: "integer" },
            },
            {
              name: "--secret-version-name",
              description:
                "The name of the secret. (This might be referred to as the name of the secret version",
              args: { name: "secret-version-name" },
            },
            {
              name: "--stage",
              description: "The rotation state of the secret version",
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
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "secret-bundle-version",
      description:
        "The properties of the secret bundle. (Secret bundle version summary objects do not include the actual",
      subcommands: [
        {
          name: "list-versions",
          description:
            "Lists all secret bundle versions for the specified secret",
          options: [
            {
              name: "--secret-id",
              description: "The OCID of the secret",
              args: { name: "secret-id" },
              isRequired: true,
            },
            {
              name: "--limit",
              description:
                'The maximum number of items to return in a paginated "List" call',
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                'The value of the opc-next-page response header from the previous "List" call',
              args: { name: "page" },
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
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
