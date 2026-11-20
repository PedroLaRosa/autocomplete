// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optSemanticStoreId: Fig.Option = {
  name: "--semantic-store-id",
  description: "The OCID of the semantic store",
  args: { name: "semantic-store-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly display name",
  args: { name: "display-name" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "An optional description of the EnrichmentJob",
  args: { name: "description" },
};
const optSchemaName: Fig.Option = {
  name: "--schema-name",
  description: "Name of the DB Schema to be enriched",
  args: { name: "schema-name" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "generative-ai-data",
  description: "Generative AI Service NL2SQL",
  subcommands: [
    {
      name: "enrichment-jobs",
      description: "A description of the ReferenceService CLI. in progress",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels an EnrichmentJob resource by identifier",
          options: [
            optSemanticStoreId,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
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
            {
              name: "--job-id",
              description: "The OCID of the enrichment job",
              args: { name: "job-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "generate",
          description: "Creates a new asynchronous EnrichmentJob",
          options: [
            optSemanticStoreId,
            optDescription,
            optDisplayName,
            {
              name: "--enrichment-job-type",
              description: "Deprecated",
              args: {
                suggestions: ["FULL_BUILD", "PARTIAL_BUILD", "DELTA_REFRESH"],
              },
              deprecated: true,
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--configuration",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets an EnrichmentJob by identifier",
          options: [
            optSemanticStoreId,
            {
              name: "--job-id",
              description: "The OCID of the enrichment job",
              args: { name: "job-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists EnrichmentJobs in a semantic store",
          options: [
            optSemanticStoreId,
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
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--limit",
              description: "The maximum number of items to return",
              args: { name: "integer" },
            },
            {
              name: "--page",
              description:
                "A token representing the position at which to start retrieving results",
              args: { name: "page" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            {
              name: "--sort-order",
              description: "The sort order to use, either 'ASC' or 'DESC'",
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
        {
          name: "generate-full-build",
          description: "Creates a new asynchronous EnrichmentJob",
          options: [
            optSemanticStoreId,
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optSchemaName,
            optFromJson,
          ],
        },
        {
          name: "generate-partial-build",
          description: "Creates a new asynchronous EnrichmentJob",
          options: [
            optSemanticStoreId,
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--database-objects",
              description:
                "Collection of the DatabaseObjects to be enriched for the given schema",
              args: { name: "json" },
              isRequired: true,
            },
            optSchemaName,
            optFromJson,
          ],
        },
        {
          name: "generate-delta-refresh",
          description: "Creates a new asynchronous EnrichmentJob",
          options: [
            optSemanticStoreId,
            optDescription,
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optSchemaName,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "generate-sql-jobs",
      description: "A description of the ReferenceService CLI. in progress",
      subcommands: [
        {
          name: "get",
          description: "Retrieves the current state of a GenerateSqlFromNlJob",
          options: [
            optSemanticStoreId,
            {
              name: "--job-id",
              description: "The OCID of the GenerateSqlFromNl job",
              args: { name: "job-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "generate",
          description:
            "Generates a SQL query from a natural language input for the specified SemanticStore",
          options: [
            optSemanticStoreId,
            {
              name: "--description",
              description:
                "An optional description of the GenerateSqlFromNlJob",
              args: { name: "description" },
            },
            optDisplayName,
            {
              name: "--model-id",
              description: "The generative AI modelId to use for Generate SQL",
              args: { name: "model-id" },
            },
            {
              name: "--completion-mode",
              description:
                "Controls whether GenerateSqlFromNl should be accepted as a background job or wait for completion",
              args: { suggestions: ["WAIT_FOR_COMPLETION", "BACKGROUND_JOB"] },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            {
              name: "--nl-query",
              description:
                "A user-provided query or instruction written in plain, conversational language",
              args: { name: "nl-query" },
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
