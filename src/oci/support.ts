// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optDomainid: Fig.Option = {
  name: "--domainid",
  description: "The OCID of identity domain",
  args: { name: "domainid" },
};
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optHomeregion: Fig.Option = {
  name: "--homeregion",
  description: "The region of the tenancy",
  args: { name: "homeregion" },
};
const optOcid: Fig.Option = {
  name: "--ocid",
  description:
    "User OCID for Oracle Identity Cloud Service (IDCS) users who also have a federated Oracle Cloud",
  args: { name: "ocid" },
};
const optBearertoken: Fig.Option = {
  name: "--bearertoken",
  description:
    "Token that provided by multi cloud provider, which help to validate the email",
  args: { name: "bearertoken" },
};
const optBearertokentype: Fig.Option = {
  name: "--bearertokentype",
  description:
    "Token type that determine which cloud provider the request come from",
  args: { name: "bearertokentype" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the tenancy",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optIdtoken: Fig.Option = {
  name: "--idtoken",
  description:
    "IdToken that provided by multi cloud provider, which help to validate the email",
  args: { name: "idtoken" },
};
const optIncidentKey: Fig.Option = {
  name: "--incident-key",
  description: "Unique identifier for the support request",
  args: { name: "incident-key" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const completionSpec: Fig.Spec = {
  name: "support",
  description: "Support Management",
  subcommands: [
    {
      name: "update-incident",
      description: "Details about the support request being updated",
      subcommands: [
        {
          name: "update-incident",
          description: "Updates the specified support request",
          options: [
            optIncidentKey,
            { name: "--ticket", args: { name: "json" }, isRequired: true },
            optCompartmentId,
            {
              name: "--problem-type",
              description:
                "The kind of support request (type of support request)",
              args: {
                suggestions: [
                  "LIMIT",
                  "LEGACY_LIMIT",
                  "TECH",
                  "ACCOUNT",
                  "TAXONOMY",
                ],
              },
            },
            optIfMatch,
            optOcid,
            optHomeregion,
            optBearertokentype,
            optBearertoken,
            optIdtoken,
            optDomainid,
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
      name: "incident-resource-type",
      description:
        "Details about the resource associated with the support request",
      subcommands: [
        {
          name: "list",
          description:
            "Depending on the selected productType, either lists available products (service groups, services",
          options: [
            {
              name: "--problem-type",
              description: "The kind of support request",
              args: { name: "problem-type" },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "--limit",
              description: "For list pagination",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description: "For list pagination",
              args: { name: "page" },
            },
            {
              name: "--sort-by",
              description: "The key to use to sort the returned items",
              args: { suggestions: ["dateUpdated", "severity"] },
            },
            {
              name: "--sort-order",
              description: "The order to sort the results in",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--name",
              description: "The user-friendly name of the support request type",
              args: { name: "name" },
            },
            optOcid,
            optHomeregion,
            optDomainid,
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
    {
      name: "validation-response",
      description:
        "The validation response returned when checking whether the requested user is valid",
      subcommands: [
        {
          name: "validate-user",
          description: "Checks whether the requested user is valid",
          options: [
            {
              name: "--problem-type",
              description: "The kind of support request",
              args: {
                suggestions: [
                  "LIMIT",
                  "LEGACY_LIMIT",
                  "TECH",
                  "ACCOUNT",
                  "TAXONOMY",
                ],
              },
            },
            optOcid,
            optHomeregion,
            optBearertokentype,
            optBearertoken,
            optIdtoken,
            optDomainid,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "incident",
      description: "Details about the support request",
      subcommands: [
        {
          name: "create",
          description: "This API enables the customer to Create an Incident",
          options: [
            optCompartmentId,
            {
              name: "--problem-type",
              description:
                "The kind of support request (type of support request)",
              args: {
                suggestions: [
                  "LIMIT",
                  "LEGACY_LIMIT",
                  "TECH",
                  "ACCOUNT",
                  "TAXONOMY",
                ],
              },
              isRequired: true,
            },
            {
              name: "--user-group-id",
              description:
                "Technical support type (TECH) only: Identifier of the user group to assign the new support request to",
              args: { name: "user-group-id" },
            },
            {
              name: "--contacts",
              description: "The list of contacts",
              args: { name: "json" },
            },
            {
              name: "--referrer",
              description: "The incident referrer",
              args: { name: "referrer" },
            },
            optOcid,
            optHomeregion,
            optBearertokentype,
            optBearertoken,
            optIdtoken,
            optDomainid,
            {
              name: "--severity",
              description: "States severity level of incident",
              args: { suggestions: ["LOW", "MEDIUM", "HIGH", "HIGHEST"] },
              isRequired: true,
            },
            {
              name: "--title",
              description: "Title for the SR",
              args: { name: "title" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "This should be the description of the SR with a more granular level of detail as to what the problem you",
              args: { name: "description" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the specified support request",
          options: [
            optIncidentKey,
            optCompartmentId,
            optOcid,
            optHomeregion,
            {
              name: "--problemtype",
              description: "The kind of support request",
              args: { name: "problemtype" },
            },
            optBearertokentype,
            optBearertoken,
            optIdtoken,
            optDomainid,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists support requests for the specified tenancy",
          options: [
            optCompartmentId,
            {
              name: "--limit",
              description: "For list pagination",
              args: { name: "integer" },
            },
            {
              name: "--sort-by",
              description: "The key to use to sort the returned items",
              args: { suggestions: ["dateUpdated", "severity"] },
            },
            {
              name: "--sort-order",
              description: "The order to sort the results in",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--lifecycle-state",
              description: "The current state of the ticket",
              args: { suggestions: ["ACTIVE", "CLOSED"] },
            },
            {
              name: "--page",
              description: "For list pagination",
              args: { name: "page" },
            },
            optOcid,
            optHomeregion,
            {
              name: "--problem-type",
              description: "The kind of support request",
              args: { name: "problem-type" },
            },
            optBearertokentype,
            optBearertoken,
            optIdtoken,
            optDomainid,
            { name: "--all", description: "Fetches all pages of results" },
            {
              name: "--page-size",
              description:
                "When fetching results, the number of results to fetch per call",
              args: { name: "integer" },
            },
            {
              name: "--time-updated-greater-than-or-equal-to",
              description:
                "Filter to return results updated only after the specified timestamp",
              args: { name: "datetime" },
            },
            optFromJson,
          ],
        },
        {
          name: "put-attachment",
          description:
            "Uploads the file and attaches it to the support request",
          options: [
            optIncidentKey,
            optCompartmentId,
            {
              name: "--is-restricted-flag",
              description:
                "Set to true when the attachment contains personal information (PI) or protected health information (PHI)",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optOcid,
            optIfMatch,
            optHomeregion,
            {
              name: "--problemtype",
              description: "The kind of support request",
              args: { name: "problemtype" },
            },
            optBearertokentype,
            optBearertoken,
            optIdtoken,
            optDomainid,
            {
              name: "--file",
              description:
                "File to be uploaded as attachment to the Service Request",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "This API enables the customer to Update an Incident",
          options: [
            optIncidentKey,
            optCompartmentId,
            {
              name: "--problem-type",
              description:
                "The kind of support request (type of support request)",
              args: {
                suggestions: [
                  "LIMIT",
                  "LEGACY_LIMIT",
                  "TECH",
                  "ACCOUNT",
                  "TAXONOMY",
                ],
              },
            },
            optIfMatch,
            optOcid,
            optHomeregion,
            optBearertokentype,
            optBearertoken,
            optIdtoken,
            optDomainid,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            {
              name: "--activity-type",
              description: "This is the action to be taken on the ticket",
              args: { name: "activity-type" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Valid types are activity and contact",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--comments",
              description:
                "String text field with the comment you wish to add to the ticket. comments field is mandatory when --type",
              args: { name: "comments" },
            },
            {
              name: "--contact",
              description:
                "Email of the additional contact to be added to a Service request. contact field is mandatory when --type",
              args: { name: "contact" },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
