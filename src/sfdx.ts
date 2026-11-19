// Salesforce CLI v2.159.7 (npm @salesforce/cli latest, 2026-11-19); sfdx is an alias bin of sf. Source: oclif.manifest.json of its core and JIT plugins

const flagsDirFlag: Fig.Option = {
  name: "--flags-dir",
  description: "Import flag values from a directory",
  args: { name: "flags-dir" },
};

const jsonFlag: Fig.Option = {
  name: "--json",
  description: "Format output as json",
};

const loglevelFlag: Fig.Option = {
  name: "--loglevel",
  args: { name: "loglevel" },
  hidden: true,
  deprecated: true,
};

const apiVersionFlag: Fig.Option = {
  name: "--api-version",
  description:
    "Override the api version used for api requests made by this command",
  args: { name: "api-version" },
};

const apiVersionLegacyFlag: Fig.Option = {
  name: ["--api-version", "--apiversion"],
  description:
    "Override the api version used for api requests made by this command",
  args: { name: "api-version" },
};

const targetOrgFlag: Fig.Option = {
  name: ["-o", "--target-org"],
  description:
    "Username or alias of the target org. Not required if the `target-org` configuration variable is already set",
  args: { name: "target-org" },
};

const outputDirFlag: Fig.Option = {
  name: ["-d", "--output-dir", "--outputdir"],
  description: "Directory for saving the created files",
  args: { name: "output-dir" },
};

const targetOrgLegacyFlag: Fig.Option = {
  name: ["-o", "-u", "--target-org", "--targetusername"],
  description:
    "Username or alias of the target org. Not required if the `target-org` configuration variable is already set",
  args: { name: "target-org" },
};

const targetDevHubFlag: Fig.Option = {
  name: [
    "-v",
    "--target-dev-hub",
    "--targetdevhubusername",
    "--target-hub-org",
  ],
  description:
    "Username or alias of the Dev Hub org. Not required if the `target-dev-hub` configuration variable is already set",
  args: { name: "target-dev-hub" },
};

const completionSpec: Fig.Spec = {
  name: "sfdx",
  description: "The Salesforce CLI",
  subcommands: [
    {
      name: "agent:activate",
      description: "Activate an agent in an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--api-name"],
          description:
            "API name of the agent to activate; if not specified, the command provides a list that you choose from",
          args: { name: "api-name" },
        },
        {
          name: "--version",
          description:
            "Version number of the agent to activate; if not specified, the command provides a list that you choose from",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "agent:adl:create",
      description: "Create an Agentforce Data Library",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--name"],
          description: "Display name for the data library (max 80 characters)",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--developer-name",
          description:
            "API name for the data library (max 80 characters, alphanumeric and underscores only, must start with a letter)",
          args: { name: "developer-name" },
          isRequired: true,
        },
        {
          name: "--source-type",
          description:
            "Type of grounding source: sfdrive (file upload), knowledge (Salesforce Knowledge articles), or retriever (existing active Custom Retriever)",
          args: {
            name: "source-type",
            suggestions: ["sfdrive", "knowledge", "retriever"],
          },
          isRequired: true,
        },
        {
          name: "--description",
          description: "Description of the data library (max 255 characters)",
          args: { name: "description" },
        },
        {
          name: "--index-mode",
          description: "Index mode for SFDRIVE libraries: basic or enhanced",
          args: { name: "index-mode", suggestions: ["basic", "enhanced"] },
        },
        {
          name: "--retriever-id",
          description:
            "ID of an active Custom Retriever (required for RETRIEVER source type; retriever must be active)",
          args: { name: "retriever-id" },
        },
        {
          name: "--primary-index-field1",
          description:
            "Primary index field 1 for KNOWLEDGE libraries (required, immutable after creation)",
          args: { name: "primary-index-field1" },
        },
        {
          name: "--primary-index-field2",
          description:
            "Primary index field 2 for KNOWLEDGE libraries (required, immutable after creation)",
          args: { name: "primary-index-field2" },
        },
        {
          name: "--content-fields",
          description:
            "Comma-separated list of content fields for KNOWLEDGE libraries (optional, mutable after creation)",
          args: { name: "content-fields" },
        },
        {
          name: "--data-category-ids",
          description:
            "Comma-separated list of data category selection IDs for KNOWLEDGE libraries. Mutually exclusive with --data-category-names (provide one or the other, not both)",
          args: { name: "data-category-ids" },
        },
        {
          name: "--data-category-names",
          description:
            'Comma-separated list of data category names in qualified format (e.g., "Group_API_Name.Category"). Mutually exclusive with --data-category-ids (provide one or the other, not both)',
          args: { name: "data-category-names" },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Wait N minutes for indexing to complete (KNOWLEDGE libraries). SFDRIVE libraries require upload before indexing; RETRIEVER libraries are ready immediately",
          args: { name: "wait" },
        },
      ],
    },
    {
      name: "agent:adl:delete",
      description: "Delete an Agentforce Data Library",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--library-id"],
          description:
            "Agentforce Data Library ID (18-char Salesforce ID with prefix 1JD)",
          args: { name: "library-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "agent:adl:file:add",
      description: "Add files to an existing Agentforce Data Library",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--library-id"],
          description:
            "Agentforce Data Library ID (18-char Salesforce ID with prefix 1JD)",
          args: { name: "library-id" },
          isRequired: true,
        },
        {
          name: ["-f", "--path"],
          description:
            "Path to file(s) to add. Specify multiple times for batch upload",
          args: { name: "path" },
          isRepeatable: true,
          isRequired: true,
        },
      ],
    },
    {
      name: "agent:adl:file:delete",
      description: "Delete a file from an Agentforce Data Library",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--library-id"],
          description:
            "Agentforce Data Library ID (18-char Salesforce ID with prefix 1JD)",
          args: { name: "library-id" },
          isRequired: true,
        },
        {
          name: "--file-id",
          description:
            "ID of the file to delete (AiGroundingFileRef record ID)",
          args: { name: "file-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "agent:adl:file:list",
      description: "List files in an Agentforce Data Library",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--library-id"],
          description:
            "Agentforce Data Library ID (18-char Salesforce ID with prefix 1JD)",
          args: { name: "library-id" },
          isRequired: true,
        },
        {
          name: "--page-size",
          description: "Number of files to return per page (1-200, default 50)",
          args: { name: "page-size" },
        },
        {
          name: "--offset",
          description:
            "Number of files to skip before returning results (for pagination)",
          args: { name: "offset" },
        },
        {
          name: "--status",
          description: "Filter files by indexing status",
          args: {
            name: "status",
            suggestions: [
              "uploaded",
              "indexing",
              "indexed",
              "index_failed",
              "deleting",
              "delete_failed",
            ],
          },
        },
      ],
    },
    {
      name: "agent:adl:get",
      description: "Get details of an Agentforce Data Library",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--library-id"],
          description:
            "Agentforce Data Library ID (18-char Salesforce ID with prefix 1JD)",
          args: { name: "library-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "agent:adl:list",
      description: "List Agentforce Data Libraries in an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--source-type",
          description:
            "Filter by source type: sfdrive, knowledge, or retriever",
          args: {
            name: "source-type",
            suggestions: ["sfdrive", "knowledge", "retriever"],
          },
        },
      ],
    },
    {
      name: "agent:adl:status",
      description: "Get indexing status of an Agentforce Data Library",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--library-id"],
          description:
            "Agentforce Data Library ID (18-char Salesforce ID with prefix 1JD)",
          args: { name: "library-id" },
          isRequired: true,
        },
        {
          name: "--include-artifacts",
          description:
            "Resolve DC asset artifacts (DataStream, DLO, DMO, SearchIndex, Retriever) with entity IDs and names on each stage. Slower — requires additional queries",
        },
      ],
    },
    {
      name: "agent:adl:update",
      description: "Update an Agentforce Data Library",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--library-id"],
          description:
            "Agentforce Data Library ID (18-char Salesforce ID with prefix 1JD)",
          args: { name: "library-id" },
          isRequired: true,
        },
        {
          name: ["-n", "--name"],
          description:
            "New display name for the data library (max 80 characters)",
          args: { name: "name" },
        },
        {
          name: "--description",
          description:
            "New description for the data library (max 255 characters)",
          args: { name: "description" },
        },
        {
          name: "--content-fields",
          description:
            "Comma-separated list of content fields for KNOWLEDGE libraries (triggers re-indexing)",
          args: { name: "content-fields" },
        },
        {
          name: "--restrict-to-public-articles",
          description:
            "Restrict to public Knowledge articles only (KNOWLEDGE libraries, triggers re-indexing)",
        },
        {
          name: "--no-restrict-to-public-articles",
          description: "Negate --restrict-to-public-articles",
        },
        {
          name: "--data-category-rule",
          description:
            "Enable or disable data category filtering for KNOWLEDGE libraries. Use --no-data-category-rule to disable",
        },
        {
          name: "--no-data-category-rule",
          description: "Negate --data-category-rule",
        },
        {
          name: "--retriever-id",
          description:
            "Swap the retriever for a RETRIEVER library (must be an active Custom Retriever ID)",
          args: { name: "retriever-id" },
        },
      ],
    },
    {
      name: "agent:adl:upload",
      description: "Upload a file to an SFDRIVE Agentforce Data Library",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--library-id"],
          description:
            "Agentforce Data Library ID (18-char Salesforce ID with prefix 1JD)",
          args: { name: "library-id" },
          isRequired: true,
        },
        {
          name: ["-f", "--file"],
          description: "Path to the file to upload",
          args: { name: "file" },
          isRepeatable: true,
          isRequired: true,
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for indexing to complete. If not specified, returns after triggering indexing",
          args: { name: "wait" },
        },
      ],
    },
    {
      name: "agent:create",
      description: "Create an agent in your org using a local agent spec file",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--name",
          description: "Name (label) of the new agent",
          args: { name: "name" },
        },
        {
          name: "--api-name",
          description:
            "API name of the new agent; if not specified, the API name is derived from the agent name (label); the API name must not exist in the org",
          args: { name: "api-name" },
        },
        {
          name: "--spec",
          description: "Path to an agent spec file",
          args: { name: "spec" },
        },
        {
          name: "--preview",
          description: "Preview the agent without saving it in your org",
        },
        {
          name: "--planner-id",
          description:
            "An existing GenAiPlannerBundle ID to associate with the agent",
          args: { name: "planner-id" },
          hidden: true,
        },
      ],
    },
    {
      name: "agent:deactivate",
      description: "Deactivate an agent in an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--api-name"],
          description:
            "API name of the agent to deactivate; if not specified, the command provides a list that you choose from",
          args: { name: "api-name" },
        },
      ],
    },
    {
      name: "agent:generate:agent-spec",
      description:
        "Generate an agent spec, which is a YAML file that captures what an agent can do",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--type",
          description:
            "Type of agent to create. Internal types are copilots used internally by your company and customer types are the agents you create for your customers",
          args: { name: "type", suggestions: ["customer", "internal"] },
        },
        {
          name: "--role",
          description: "Role of the agent",
          args: { name: "role" },
        },
        {
          name: "--company-name",
          description: "Name of your company",
          args: { name: "company-name" },
        },
        {
          name: "--company-description",
          description: "Description of your company",
          args: { name: "company-description" },
        },
        {
          name: "--company-website",
          description: "Website URL of your company",
          args: { name: "company-website" },
        },
        {
          name: "--max-topics",
          description:
            "Maximum number of topics to generate in the agent spec; default is 5",
          args: { name: "max-topics" },
        },
        {
          name: "--agent-user",
          description:
            "Username of a user in your org to assign to your agent; determines what your agent can access and do",
          args: { name: "agent-user" },
        },
        {
          name: "--enrich-logs",
          description:
            "Adds agent conversation data to event logs so you can view all agent session activity in one place",
          args: { name: "enrich-logs", suggestions: ["true", "false"] },
        },
        {
          name: "--tone",
          description:
            "Conversational style of the agent, such as how it expresses your brand personality in its messages through word choice, punctuation, and sentence structure",
          args: { name: "tone", suggestions: ["formal", "casual", "neutral"] },
        },
        {
          name: "--spec",
          description:
            "Agent spec file, in YAML format, to use as input to the command",
          args: { name: "spec" },
        },
        {
          name: "--output-file",
          description:
            "Path for the generated YAML agent spec file; can be an absolute or relative path",
          args: { name: "output-file" },
        },
        {
          name: "--full-interview",
          description: "Prompt for both required and optional flags",
        },
        {
          name: "--prompt-template",
          description:
            "API name of a customized prompt template to use instead of the default prompt template",
          args: { name: "prompt-template" },
        },
        {
          name: "--grounding-context",
          description:
            "Context information and personalization that's added to your prompts when using a custom prompt template",
          args: { name: "grounding-context" },
          dependsOn: ["--prompt-template"],
        },
        {
          name: "--force-overwrite",
          description:
            "Don't prompt the user to confirm that an existing spec file will be overwritten",
        },
      ],
    },
    {
      name: "agent:generate:authoring-bundle",
      description:
        "Generate an authoring bundle from an existing agent spec YAML file",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        {
          name: "--api-name",
          description:
            "API name of the new authoring bundle; if not specified, the API name is derived from the authoring bundle name (label); the API name can't exist in the org",
          args: { name: "api-name" },
        },
        apiVersionFlag,
        {
          name: ["-f", "--spec"],
          description:
            "Path to the agent spec YAML file. If you don't specify the flag, the command provides a list that you can choose from. Use the --no-spec flag to skip using an agent spec entirely",
          args: { name: "spec" },
        },
        {
          name: "--no-spec",
          description:
            "Skip prompting for an agent spec and use the default Agent Script boilerplate in the generated authoring bundle",
        },
        {
          name: ["-d", "--output-dir"],
          description:
            "Directory where the authoring bundle files are generated",
          args: { name: "output-dir" },
        },
        {
          name: ["-n", "--name"],
          description:
            "Name (label) of the authoring bundle; if not specified, you're prompted for the name",
          args: { name: "name" },
        },
        {
          name: "--force-overwrite",
          description:
            "Overwrite the existing authoring bundle if one with the same API name already exists locally",
        },
      ],
    },
    {
      name: "agent:generate:template",
      description:
        "Generate an agent template from an existing agent in your DX project so you can then package the template in a second-generation managed package",
      options: [
        jsonFlag,
        flagsDirFlag,
        apiVersionFlag,
        {
          name: ["-s", "--source-org"],
          description:
            "Username or alias of the namespaced scratch org that contains the agent which this template is based on",
          args: { name: "source-org" },
        },
        {
          name: "--agent-version",
          description: "Version of the agent (BotVersion)",
          args: { name: "agent-version" },
          isRequired: true,
        },
        {
          name: ["-f", "--agent-file"],
          description: "Path to an agent (Bot) metadata file",
          args: { name: "agent-file" },
          isRequired: true,
        },
        {
          name: ["-r", "--output-dir"],
          description:
            "Directory where the generated BotTemplate and GenAiPlannerBundle files are saved",
          args: { name: "output-dir" },
        },
      ],
    },
    {
      name: "agent:generate:test-spec",
      description:
        "Generate an agent test spec, which is a YAML file that lists the test cases for testing a specific agent",
      options: [
        flagsDirFlag,
        {
          name: ["-d", "--from-definition"],
          description:
            "Filepath to an AiEvaluationDefinition or AiTestingDefinition metadata XML file in your DX project that you want to convert to a test spec YAML file",
          args: { name: "from-definition" },
        },
        {
          name: "--force-overwrite",
          description:
            "Don't prompt for confirmation when overwriting an existing test spec YAML file",
        },
        {
          name: ["-f", "--output-file"],
          description:
            'Name of the generated test spec YAML file. Default value is "specs/<AGENT_API_NAME>-testSpec.yaml" (legacy) or "specs/<AGENT_API_NAME>-ngtTestSpec.yaml" (Agentforce Studio)',
          args: { name: "output-file" },
        },
        {
          name: "--test-runner",
          description:
            "Explicitly specify which test runner to use (agentforce-studio or testing-center)",
          args: {
            name: "test-runner",
            suggestions: ["agentforce-studio", "testing-center"],
          },
        },
      ],
    },
    {
      name: "agent:mcp:asset:list",
      description:
        "List the assets (tools, prompts, and resources) for an MCP server in the catalog",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--mcp-server-id"],
          description: "The ID of the MCP server whose assets you want to list",
          args: { name: "mcp-server-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "agent:mcp:asset:replace",
      description: "Replace the asset set of an MCP server in the API Catalog",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--mcp-server-id"],
          description: "ID of the MCP server whose assets you want to replace",
          args: { name: "mcp-server-id" },
          isRequired: true,
        },
        {
          name: "--assets",
          description:
            'The desired asset allowlist as a JSON string (or "-" to read from stdin). Mutually exclusive with --assets-file',
          args: { name: "assets" },
          exclusiveOn: ["--assets-file"],
        },
        {
          name: "--assets-file",
          description:
            "Path to a JSON file containing the desired asset allowlist. Mutually exclusive with --assets",
          args: { name: "assets-file" },
          exclusiveOn: ["--assets"],
        },
      ],
    },
    {
      name: "agent:mcp:create",
      description: "Create an MCP server in the API Catalog",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--name"],
          description: "Unique name of the MCP server",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--label",
          description: "Human-readable label for the MCP server",
          args: { name: "label" },
        },
        {
          name: "--description",
          description: "Description of the MCP server",
          args: { name: "description" },
        },
        {
          name: "--server-url",
          description: "URL of the external MCP server",
          args: { name: "server-url" },
          isRequired: true,
        },
        {
          name: "--auth-type",
          description:
            "Authorization type to use when connecting to the MCP server",
          args: { name: "auth-type", suggestions: ["OAUTH", "NO_AUTH"] },
        },
        {
          name: "--identity-provider",
          description:
            "Identity provider to use for OAuth authorization. Required when auth-type is OAUTH",
          args: { name: "identity-provider" },
        },
        {
          name: "--client-id",
          description: "OAuth client ID. Required when auth-type is OAUTH",
          args: { name: "client-id" },
        },
        {
          name: "--client-secret",
          description:
            'OAuth client secret. Required when auth-type is OAUTH. Pass "-" to read it from stdin (piped) and keep it out of shell history',
          args: { name: "client-secret" },
        },
        {
          name: "--scope",
          description:
            "OAuth scope to request. Required when auth-type is OAUTH",
          args: { name: "scope" },
        },
      ],
    },
    {
      name: "agent:mcp:delete",
      description: "Delete an MCP server from the API Catalog",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--mcp-server-id"],
          description: "ID of the MCP server to delete",
          args: { name: "mcp-server-id" },
          isRequired: true,
        },
        {
          name: "--no-prompt",
          description:
            "Skip the confirmation prompt and delete the MCP server immediately",
        },
      ],
    },
    {
      name: "agent:mcp:fetch",
      description:
        "Fetch the live assets (tools, prompts, resources) advertised by an MCP server",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--mcp-server-id"],
          description: "ID of the MCP server to fetch assets from",
          args: { name: "mcp-server-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "agent:mcp:get",
      description: "Get a single MCP server registered in the API Catalog",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--mcp-server-id"],
          description: "The identifier of the MCP server to retrieve",
          args: { name: "mcp-server-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "agent:mcp:list",
      description: "List the MCP servers registered in the API Catalog",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--label",
          description: "Filter the MCP servers by label",
          args: { name: "label" },
        },
        {
          name: "--type",
          description: "Filter the MCP servers by type",
          args: { name: "type", suggestions: ["EXTERNAL"] },
        },
        {
          name: "--status",
          description:
            "Filter the MCP servers by connection status. Only ACTIVE and DISCONNECTED are supported as filters",
          args: { name: "status", suggestions: ["ACTIVE", "DISCONNECTED"] },
        },
      ],
    },
    {
      name: "agent:mcp:update",
      description: "Update an MCP server registered in the API Catalog",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--mcp-server-id"],
          description: "ID of the MCP server to update",
          args: { name: "mcp-server-id" },
          isRequired: true,
        },
        {
          name: "--label",
          description: "New display label for the MCP server",
          args: { name: "label" },
        },
        {
          name: "--description",
          description: "New description for the MCP server",
          args: { name: "description" },
        },
        {
          name: "--server-url",
          description: "New endpoint URL of the MCP server",
          args: { name: "server-url" },
        },
        {
          name: "--auth-type",
          description:
            "Authorization type to apply to the MCP server (OAUTH or NO_AUTH)",
          args: { name: "auth-type", suggestions: ["OAUTH", "NO_AUTH"] },
        },
        {
          name: "--identity-provider",
          description:
            "Identity provider name for OAuth authorization (required when --auth-type is OAUTH)",
          args: { name: "identity-provider" },
        },
        {
          name: "--client-id",
          description: "OAuth client ID (required when --auth-type is OAUTH)",
          args: { name: "client-id" },
        },
        {
          name: "--client-secret",
          description:
            'OAuth client secret (required when --auth-type is OAUTH). Pass "-" to read it from stdin (piped) and keep it out of shell history',
          args: { name: "client-secret" },
        },
        {
          name: "--scope",
          description: "OAuth scope (required when --auth-type is OAUTH)",
          args: { name: "scope" },
        },
      ],
    },
    {
      name: "agent:preview",
      description:
        "Interact with an agent to preview how it responds to your statements, questions, and commands (utterances)",
      options: [
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--api-name"],
          description:
            "API name of the activated published agent you want to interact with",
          args: { name: "api-name" },
        },
        {
          name: "--authoring-bundle",
          description:
            "API name of the authoring bundle metadata component that contains the agent's Agent Script file",
          args: { name: "authoring-bundle" },
        },
        {
          name: ["-d", "--output-dir"],
          description: "Directory where conversation transcripts are saved",
          args: { name: "output-dir" },
        },
        {
          name: ["-x", "--apex-debug"],
          description:
            "Enable Apex debug logging during the agent preview conversation",
        },
        {
          name: "--use-live-actions",
          description:
            "Use real actions in the org; if not specified, preview uses AI to simulate (mock) actions",
        },
        {
          name: "--context-variables",
          description:
            "Session variables for the agent preview session, in the form Name=Value",
          args: { name: "context-variables" },
          isRepeatable: true,
        },
        {
          name: "--context-variables-json",
          description:
            "Typed session variables for the agent preview session, as a JSON array",
          args: { name: "context-variables-json" },
        },
        {
          name: "--agent-json",
          description:
            "Path to a pre-compiled AgentJSON file to use instead of compiling the Agent Script file. Intended for internal use and testing",
          args: { name: "agent-json" },
          dependsOn: ["--authoring-bundle"],
          hidden: true,
        },
      ],
    },
    {
      name: "agent:preview:end",
      description:
        "End an existing programmatic agent preview session and get trace location",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--session-id",
          description:
            'Session ID outputted by "agent preview start". Not required when the agent has exactly one active session. Run "agent preview sessions" to see the list of all sessions',
          args: { name: "session-id" },
          exclusiveOn: ["--all"],
        },
        {
          name: ["-n", "--api-name"],
          description:
            "API name of the activated published agent you want to preview",
          args: { name: "api-name" },
          exclusiveOn: ["--authoring-bundle"],
        },
        {
          name: "--authoring-bundle",
          description:
            "API name of the authoring bundle metadata component that contains the agent's Agent Script file",
          args: { name: "authoring-bundle" },
          exclusiveOn: ["--api-name"],
        },
        {
          name: "--all",
          description:
            "End all active preview sessions. Combine with --api-name or --authoring-bundle to limit to a specific agent, or use with only --target-org to end sessions for all agents found in the local session cache. Requires --target-org",
          exclusiveOn: ["--session-id"],
        },
        {
          name: ["-p", "--no-prompt"],
          description:
            "Don't prompt for confirmation before ending sessions. Has an effect only when used with --all",
        },
      ],
    },
    {
      name: "agent:preview:send",
      description: "Send a message to an existing agent preview session",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--session-id",
          description:
            'Session ID outputted by "agent preview start". Not required when the agent has exactly one active session. Run "agent preview sessions" to see list of all sessions',
          args: { name: "session-id" },
        },
        {
          name: ["-u", "--utterance"],
          description:
            "Utterance to send to the agent, enclosed in double quotes",
          args: { name: "utterance" },
          isRequired: true,
        },
        {
          name: ["-n", "--api-name"],
          description:
            "API name of the activated published agent you want to preview",
          args: { name: "api-name" },
        },
        {
          name: "--authoring-bundle",
          description:
            "API name of the authoring bundle metadata component that contains the agent's Agent Script file",
          args: { name: "authoring-bundle" },
        },
      ],
    },
    {
      name: "agent:preview:sessions",
      description: "List all known programmatic agent preview sessions",
      options: [jsonFlag, flagsDirFlag],
    },
    {
      name: "agent:preview:start",
      description: "Start a programmatic agent preview session",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--api-name"],
          description:
            "API name of the activated published agent you want to preview",
          args: { name: "api-name" },
        },
        {
          name: "--authoring-bundle",
          description:
            "API name of the authoring bundle metadata component that contains the agent's Agent Script file",
          args: { name: "authoring-bundle" },
        },
        {
          name: "--use-live-actions",
          description:
            "Execute real actions in the org (Apex classes, flows, etc.). Required with --authoring-bundle",
          exclusiveOn: ["--simulate-actions"],
        },
        {
          name: "--simulate-actions",
          description:
            "Use AI to simulate action execution instead of calling real actions. Required with --authoring-bundle",
          exclusiveOn: ["--use-live-actions"],
        },
        {
          name: "--context-variables",
          description:
            "Session variables for the agent preview session, in the form Name=Value",
          args: { name: "context-variables" },
          isRepeatable: true,
        },
        {
          name: "--context-variables-json",
          description:
            "Typed session variables for the agent preview session, as a JSON array",
          args: { name: "context-variables-json" },
        },
        {
          name: "--agent-json",
          description:
            "Path to a pre-compiled AgentJSON file to use instead of compiling the Agent Script file. Intended for internal use and testing",
          args: { name: "agent-json" },
          dependsOn: ["--authoring-bundle"],
          hidden: true,
        },
      ],
    },
    {
      name: "agent:publish:authoring-bundle",
      description:
        "Publish an authoring bundle to your org, which results in a new agent or a new version of an existing agent",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--api-name"],
          description:
            "API name of the authoring bundle you want to publish; if not specified, the command provides a list that you can choose from",
          args: { name: "api-name" },
        },
        {
          name: "--skip-retrieve",
          description:
            "Don't retrieve the metadata associated with the agent to your DX project",
        },
        {
          name: "--source-type",
          description:
            'Where the agent came from. Use "Bot" when the agent was converted from an Einstein Bot. Applied on the first publish only',
          args: { name: "source-type", suggestions: ["Bot"] },
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Display detailed output showing all metadata components retrieved and deployed during the publish process",
          exclusiveOn: ["--concise"],
        },
        {
          name: "--concise",
          description:
            "Display minimal output with only essential information about the publish operation",
          exclusiveOn: ["--verbose"],
        },
      ],
    },
    {
      name: "agent:test:create",
      description:
        "Create an agent test in your org using a local test spec YAML file",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: "--api-name",
          description:
            "API name of the new test; the API name must not exist in the org",
          args: { name: "api-name" },
        },
        {
          name: "--spec",
          description: "Path to the test spec YAML file",
          args: { name: "spec" },
        },
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--preview",
          description:
            "Preview the test metadata file without deploying to your org",
        },
        {
          name: "--force-overwrite",
          description:
            "Don't prompt for confirmation when overwriting an existing test (based on API name) in your org",
        },
        {
          name: "--test-runner",
          description:
            "Explicitly specify which test runner to use (agentforce-studio or testing-center)",
          args: {
            name: "test-runner",
            suggestions: ["agentforce-studio", "testing-center"],
          },
        },
      ],
    },
    {
      name: "agent:test:list",
      description: "List the available agent tests in your org",
      options: [jsonFlag, flagsDirFlag, targetOrgFlag, apiVersionFlag],
    },
    {
      name: "agent:test:results",
      description: "Get the results of a completed agent test run",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--job-id"],
          description: "Job ID of the completed agent test run",
          args: { name: "job-id" },
          isRequired: true,
        },
        {
          name: "--result-format",
          description: "Format of the agent test run results",
          args: {
            name: "result-format",
            suggestions: ["json", "human", "junit", "tap"],
          },
        },
        {
          name: ["-d", "--output-dir"],
          description: "Directory to write the agent test results into",
          args: { name: "output-dir" },
        },
        {
          name: "--test-runner",
          description:
            "Explicitly specify which test runner to use (agentforce-studio or testing-center)",
          args: {
            name: "test-runner",
            suggestions: ["agentforce-studio", "testing-center"],
          },
        },
        {
          name: "--verbose",
          description: "Show generated data in the test results output",
        },
      ],
    },
    {
      name: "agent:test:resume",
      description:
        "Resume an agent test that you previously started in your org so you can view the test results",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--job-id"],
          description: "Job ID of the original agent test run",
          args: { name: "job-id" },
        },
        {
          name: ["-r", "--use-most-recent"],
          description: "Use the job ID of the most recent agent test run",
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the command to complete and display results to the terminal window",
          args: { name: "wait" },
        },
        {
          name: "--result-format",
          description: "Format of the agent test run results",
          args: {
            name: "result-format",
            suggestions: ["json", "human", "junit", "tap"],
          },
        },
        {
          name: ["-d", "--output-dir"],
          description: "Directory to write the agent test results into",
          args: { name: "output-dir" },
        },
        {
          name: "--test-runner",
          description:
            "Explicitly specify which test runner to use (agentforce-studio or testing-center)",
          args: {
            name: "test-runner",
            suggestions: ["agentforce-studio", "testing-center"],
          },
        },
        {
          name: "--verbose",
          description: "Show generated data in the test results output",
        },
      ],
    },
    {
      name: "agent:test:run",
      description: "Start an agent test in your org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--api-name"],
          description:
            "API name of the agent test to run; corresponds to the name of the AiEvaluationDefinition metadata component that implements the agent test",
          args: { name: "api-name" },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the command to complete and display results to the terminal window",
          args: { name: "wait" },
        },
        {
          name: "--result-format",
          description: "Format of the agent test run results",
          args: {
            name: "result-format",
            suggestions: ["json", "human", "junit", "tap"],
          },
        },
        {
          name: ["-d", "--output-dir"],
          description: "Directory to write the agent test results into",
          args: { name: "output-dir" },
        },
        {
          name: "--test-runner",
          description:
            "Explicitly specify which test runner to use (agentforce-studio or testing-center)",
          args: {
            name: "test-runner",
            suggestions: ["agentforce-studio", "testing-center"],
          },
        },
        {
          name: "--verbose",
          description: "Show generated data in the test results output",
        },
      ],
    },
    {
      name: "agent:test:run-eval",
      description: "Run rich evaluation tests against an Agentforce agent",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-s", "--spec"],
          description:
            "Path to test spec file (YAML or JSON). Supports reading from stdin when piping content",
          args: { name: "spec" },
          isRequired: true,
        },
        {
          name: ["-n", "--api-name"],
          description:
            "Agent API name (also called DeveloperName) used to resolve agent_id and agent_version_id. Auto-inferred from the YAML spec's subjectName",
          args: { name: "api-name" },
        },
        {
          name: "--result-format",
          description: "Format of the agent test run results",
          args: {
            name: "result-format",
            suggestions: ["json", "human", "junit", "tap"],
          },
        },
        {
          name: "--batch-size",
          description: "Number of tests per API request (max 5)",
          args: { name: "batch-size" },
        },
        {
          name: "--no-normalize",
          description:
            "Disable auto-normalization of field names and shorthand references",
        },
      ],
    },
    {
      name: "agent:trace:delete",
      description: "Delete trace files from an agent preview session",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-a", "--agent"],
          description:
            "API name of the agent used to filter the list of trace files you want to delete. Matches against the API name used when starting the session, either an authoring bundle or a published agent API name",
          args: { name: "agent" },
        },
        {
          name: "--session-id",
          description:
            'Session ID used to filter the list of trace files you want to delete. Use the "agent preview sessions" CLI command to list all known agent preview sessions along with their session IDs',
          args: { name: "session-id" },
        },
        {
          name: "--older-than",
          description:
            "Duration used to filter the list of trace files; only files older than the duration are deleted. Accepts a number followed by a unit: m/minutes, h/hours, d/days, w/weeks. Examples: 7d, 24h, 2w",
          args: { name: "older-than" },
        },
        {
          name: "--no-prompt",
          description: "Skip the confirmation prompt and delete immediately",
        },
      ],
    },
    {
      name: "agent:trace:list",
      description:
        "List the available trace files that were recorded during all agent preview sessions",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: "--session-id",
          description:
            'Session ID used to filter the list of trace files. Use the "agent preview sessions" CLI command to list all known agent preview sessions along with their session IDs',
          args: { name: "session-id" },
        },
        {
          name: ["-a", "--agent"],
          description:
            "API name of the agent used to filter the list of available trace files. Matches against the API name used when starting the session, either an authoring bundle or a published agent API name",
          args: { name: "agent" },
        },
        {
          name: "--since",
          description:
            "Date used to filter the list of trace files; only those recorded on or after the date are listed",
          args: { name: "since" },
        },
      ],
    },
    {
      name: "agent:trace:read",
      description: "Read trace files from an agent preview session",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-s", "--session-id"],
          description:
            'Session ID to read traces for. Use the "agent preview sessions" CLI command to list all known agent preview sessions along with their session IDs',
          args: { name: "session-id" },
          isRequired: true,
        },
        {
          name: ["-f", "--format"],
          description:
            "Output format of the trace data; specifies the level of detail you want in the trace files",
          args: { name: "format", suggestions: ["summary", "detail", "raw"] },
        },
        {
          name: ["-d", "--dimension"],
          description:
            'Dimension to drill into when using "--format detail"; used to filter and organize the trace data to answer a specific type of question',
          args: {
            name: "dimension",
            suggestions: ["actions", "grounding", "routing", "errors"],
          },
        },
        {
          name: ["-t", "--turn"],
          description:
            "Turn number for which you want trace data. A turn is a single utterance or response in a conversation, starting with 1",
          args: { name: "turn" },
        },
      ],
    },
    {
      name: "agent:validate:authoring-bundle",
      description:
        "Validate an authoring bundle to ensure its Agent Script file compiles successfully and can be used to publish an agent",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--api-name"],
          description:
            "API name of the authoring bundle you want to validate; if not specified, the command provides a list that you can choose from",
          args: { name: "api-name" },
        },
      ],
    },
    {
      name: ["alias:list", "force:alias:list"],
      description: "List all aliases currently set on your local computer",
      options: [jsonFlag, flagsDirFlag, loglevelFlag],
    },
    {
      name: ["alias:set", "force:alias:set"],
      description: "Set one or more aliases on your local computer",
      options: [jsonFlag, flagsDirFlag, loglevelFlag],
      args: { name: "alias=value", isOptional: true, isVariadic: true },
    },
    {
      name: ["alias:unset", "force:alias:unset"],
      description:
        "Unset one or more aliases that are currently set on your local computer",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        {
          name: ["-a", "--all"],
          description: "Unset all currently set aliases",
        },
        {
          name: ["-p", "--no-prompt"],
          description:
            "Don't prompt the user for confirmation when unsetting all aliases",
        },
      ],
      args: { name: "alias", isOptional: true, isVariadic: true },
    },
    {
      name: "apex:get:compile-status",
      description:
        "Fetches the compilation status for Apex classes that are currently invalid or have compilation warnings",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
      ],
    },
    {
      name: ["apex:get:log", "force:apex:log:get"],
      description:
        "Fetch the specified log or given number of most recent logs from the org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-i", "--log-id", "--logid"],
          description: "ID of the specific log to display",
          args: { name: "log-id" },
        },
        {
          name: ["-n", "--number"],
          description: "Number of the most recent logs to display",
          args: { name: "number" },
        },
        {
          name: ["-d", "--output-dir", "--outputdir", "--output-directory"],
          description: "Directory for saving the log files",
          args: { name: "output-dir" },
        },
      ],
    },
    {
      name: ["apex:get:test", "force:apex:test:report"],
      description: "Display test results for a specific asynchronous test run",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-i", "--test-run-id", "--testrunid"],
          description: "ID of the test run",
          args: { name: "test-run-id" },
          isRequired: true,
        },
        {
          name: ["-c", "--code-coverage", "--codecoverage"],
          description: "Retrieve code coverage results",
        },
        {
          name: "--detailed-coverage",
          description: "Display detailed code coverage per test",
          dependsOn: ["--code-coverage"],
        },
        {
          name: ["-d", "--output-dir", "--outputdir", "--output-directory"],
          description: "Directory in which to store test result files",
          args: { name: "output-dir" },
        },
        {
          name: ["-r", "--result-format", "--resultformat"],
          description: "Format of the test results",
          args: {
            name: "result-format",
            suggestions: ["human", "tap", "junit", "json"],
          },
        },
        {
          name: "--concise",
          description:
            "Display only failed test results; works with human-readable output only",
        },
      ],
    },
    {
      name: ["apex:list:log", "force:apex:log:list"],
      description:
        "Display a list of IDs and general information about debug logs",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: ["apex:run", "force:apex:execute"],
      description:
        "Execute anonymous Apex code entered on the command line or from a local file",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-f", "--file", "--apexcodefile"],
          description: "Path to a local file that contains Apex code",
          args: { name: "file" },
        },
        {
          name: ["-d", "--debug-level"],
          description:
            "Debug level to use for the debug log that's generated in the org",
          args: {
            name: "debug-level",
            suggestions: [
              "NONE",
              "DEBUGONLY",
              "DB",
              "PROFILING",
              "CALLOUT",
              "DETAIL",
            ],
          },
          exclusiveOn: ["--category-level"],
        },
        {
          name: "--category-level",
          description:
            "Log level for a specific log category in the debug log generated in the org. Use the format: Category=Level",
          args: { name: "category-level" },
          isRepeatable: true,
          exclusiveOn: ["--debug-level"],
        },
      ],
    },
    {
      name: ["apex:run:test", "force:apex:test:run"],
      description: "Invoke Apex tests in an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-c", "--code-coverage", "--codecoverage"],
          description: "Retrieve code coverage results",
        },
        {
          name: ["-d", "--output-dir", "--outputdir", "--output-directory"],
          description: "Directory in which to store test run files",
          args: { name: "output-dir" },
        },
        {
          name: ["-l", "--test-level", "--testlevel"],
          description: "Level of tests to run; default is RunLocalTests",
          args: {
            name: "test-level",
            suggestions: [
              "RunLocalTests",
              "RunAllTestsInOrg",
              "RunSpecifiedTests",
            ],
          },
        },
        {
          name: ["-n", "--class-names", "--classnames"],
          description: "Apex test class names to run; default is all classes",
          args: { name: "class-names" },
          isRepeatable: true,
          exclusiveOn: ["--suite-names", "--tests"],
        },
        {
          name: ["-r", "--result-format", "--resultformat"],
          description: "Format of the test results",
          args: {
            name: "result-format",
            suggestions: ["human", "tap", "junit", "json"],
          },
        },
        {
          name: ["-s", "--suite-names", "--suitenames"],
          description: "Apex test suite names to run",
          args: { name: "suite-names" },
          isRepeatable: true,
          exclusiveOn: ["--class-names", "--tests"],
        },
        {
          name: ["-t", "--tests"],
          description:
            "Apex test class names or IDs and, if applicable, test methods to run; default is all tests",
          args: { name: "tests" },
          isRepeatable: true,
          exclusiveOn: ["--class-names", "--suite-names"],
        },
        {
          name: ["-i", "--poll-interval"],
          description: "Number of seconds to wait between retries",
          args: { name: "poll-interval" },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently",
          args: { name: "wait" },
        },
        {
          name: ["-y", "--synchronous"],
          description:
            "Runs test methods from a single Apex class synchronously; if not specified, tests are run asynchronously",
        },
        {
          name: ["-v", "--detailed-coverage", "--detailedcoverage"],
          description: "Display detailed code coverage per test",
          dependsOn: ["--code-coverage"],
        },
        {
          name: "--concise",
          description:
            "Display only failed test results; works with human-readable output only",
        },
      ],
    },
    {
      name: ["apex:tail:log", "force:apex:log:tail"],
      description: "Activate debug logging and display logs in the terminal",
      options: [
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-c", "--color"],
          description: "Apply default colors to noteworthy log lines",
        },
        {
          name: ["-d", "--debug-level", "--debuglevel"],
          description:
            "Debug level to set on the DEVELOPER_LOG trace flag for your user",
          args: { name: "debug-level" },
          exclusiveOn: ["--skip-trace-flag"],
        },
        {
          name: ["-s", "--skip-trace-flag", "--skiptraceflag"],
          description:
            "Skip trace flag setup. Assumes that a trace flag and debug level are fully set up",
        },
      ],
    },
    {
      name: "apex:trace:create",
      description:
        "Create a trace flag for a user, Apex class, or Apex trigger",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-i", "--traced-entity-id"],
          description: "ID of the user, Apex class, or Apex trigger to trace",
          args: { name: "traced-entity-id" },
          isRequired: true,
        },
        {
          name: ["-d", "--debug-level"],
          description: "Developer name of an existing debug level to apply",
          args: { name: "debug-level" },
          isRequired: true,
        },
        {
          name: ["-l", "--log-type"],
          description: "Type of trace flag to create",
          args: {
            name: "log-type",
            suggestions: ["DEVELOPER_LOG", "USER_DEBUG"],
          },
        },
        {
          name: "--duration",
          description:
            "Duration, in minutes, before the trace flag expires. Maximum is 1440 (24 hours)",
          args: { name: "duration" },
        },
      ],
    },
    {
      name: "apex:trace:delete",
      description: "Delete a trace flag in your org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-i", "--trace-flag-id"],
          description: "ID of the trace flag to delete",
          args: { name: "trace-flag-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "apex:trace:list",
      description: "List trace flags in your org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: "api:request:graphql",
      description: "Execute a GraphQL statement",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-S", "--stream-to-file"],
          description: "Stream responses to a file",
          args: { name: "stream-to-file" },
          exclusiveOn: ["--include"],
        },
        {
          name: ["-i", "--include"],
          description:
            "Include the HTTP response status and headers in the output",
          exclusiveOn: ["--stream-to-file"],
        },
        {
          name: "--body",
          description:
            'File or content with the GraphQL statement. Specify "-" to read from standard input',
          args: { name: "body" },
          isRequired: true,
        },
      ],
    },
    {
      name: "api:request:rest",
      description:
        "Make an authenticated HTTP request using the Salesforce REST API",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        {
          name: ["-i", "--include"],
          description:
            "Include the HTTP response status and headers in the output",
          exclusiveOn: ["--stream-to-file"],
        },
        {
          name: ["-X", "--method"],
          description: "HTTP method for the request",
          args: {
            name: "method",
            suggestions: [
              "GET",
              "POST",
              "PUT",
              "PATCH",
              "HEAD",
              "DELETE",
              "OPTIONS",
              "TRACE",
            ],
          },
        },
        {
          name: ["-H", "--header"],
          description: 'HTTP header in "key:value" format',
          args: { name: "header" },
          isRepeatable: true,
        },
        {
          name: ["-f", "--file"],
          description:
            "JSON file that contains values for the request header, body, method, and URL",
          args: { name: "file" },
          exclusiveOn: ["--body"],
        },
        {
          name: ["-S", "--stream-to-file"],
          description: "Stream responses to a file",
          args: { name: "stream-to-file" },
          exclusiveOn: ["--include"],
        },
        {
          name: ["-b", "--body"],
          description:
            'File or content for the body of the HTTP request. Specify "-" to read from standard input or "" for an empty body. If passing a file, prefix the filename with \'@\'',
          args: { name: "body" },
        },
      ],
      args: {
        name: "url",
        description: "Salesforce API endpoint",
        isOptional: true,
      },
    },
    {
      name: "autocomplete",
      description: "Display autocomplete installation instructions",
      options: [
        {
          name: ["-r", "--refresh-cache"],
          description: "Refresh cache (ignores displaying instructions)",
        },
      ],
      args: {
        name: "shell",
        description: "Shell type",
        suggestions: ["zsh", "bash", "powershell"],
        isOptional: true,
      },
    },
    {
      name: "autocomplete:create",
      description: "Create autocomplete setup scripts and completion functions",
      hidden: true,
    },
    {
      name: "autocomplete:script",
      description: "Outputs autocomplete config script for shells",
      args: {
        name: "shell",
        description: "Shell type",
        suggestions: ["zsh", "bash", "powershell"],
        isOptional: true,
      },
      hidden: true,
    },
    {
      name: [
        "cmdt:generate:field",
        "force:cmdt:field:create",
        "cmdt:field:create",
      ],
      description:
        "Generate a field for a custom metadata type based on the provided field type",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        {
          name: ["-n", "--name", "--fieldname"],
          description: "Unique name for the field",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-f", "--type", "--fieldtype"],
          description: "Type of the field",
          args: {
            name: "type",
            suggestions: [
              "Checkbox",
              "Date",
              "DateTime",
              "Email",
              "Number",
              "Percent",
              "Phone",
              "Picklist",
              "Text",
              "TextArea",
              "LongTextArea",
              "Url",
            ],
          },
          isRequired: true,
        },
        {
          name: ["-p", "--picklist-values", "--picklistvalues"],
          description: "Picklist values; required for picklist fields",
          args: { name: "picklist-values" },
          isRepeatable: true,
        },
        {
          name: ["-s", "--decimal-places", "--decimalplaces"],
          description:
            "Number of decimal places to use for number or percent fields",
          args: { name: "decimal-places" },
        },
        {
          name: ["-l", "--label"],
          description: "Label for the field",
          args: { name: "label" },
        },
        {
          name: [
            "-d",
            "--output-directory",
            "--outputdir",
            "--outputdirectory",
          ],
          description:
            "Directory to store newly-created field definition files",
          args: { name: "output-directory" },
        },
      ],
    },
    {
      name: ["cmdt:generate:fromorg", "force:cmdt:generate"],
      description:
        "Generate a custom metadata type and all its records from a Salesforce object",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-n", "--dev-name", "--devname"],
          description: "Name of the custom metadata type",
          args: { name: "dev-name" },
          isRequired: true,
        },
        {
          name: ["-l", "--label"],
          description: "Label for the custom metadata type",
          args: { name: "label" },
        },
        {
          name: ["-p", "--plural-label", "--plurallabel"],
          description:
            "Plural version of the label value; if blank, uses label",
          args: { name: "plural-label" },
        },
        {
          name: ["-v", "--visibility"],
          description: "Who can see the custom metadata type",
          args: {
            name: "visibility",
            suggestions: ["PackageProtected", "Protected", "Public"],
          },
        },
        {
          name: ["-s", "--sobject", "--sobjectname"],
          description:
            "API name of the source Salesforce object used to generate the custom metadata type",
          args: { name: "sobject" },
          isRequired: true,
        },
        {
          name: ["-i", "--ignore-unsupported", "--ignoreunsupported"],
          description: "Ignore unsupported field types",
        },
        {
          name: ["-d", "--type-output-directory", "--typeoutputdir"],
          description:
            "Directory to store newly-created custom metadata type files",
          args: { name: "type-output-directory" },
        },
        {
          name: ["-r", "--records-output-dir", "--recordsoutputdir"],
          description:
            "Directory to store newly-created custom metadata record files",
          args: { name: "records-output-dir" },
        },
      ],
    },
    {
      name: ["cmdt:generate:object", "force:cmdt:create", "cmdt:create"],
      description: "Generate a new custom metadata type in the current project",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        {
          name: ["-n", "--type-name", "--typename"],
          description: "Unique object name for the custom metadata type",
          args: { name: "type-name" },
          isRequired: true,
        },
        {
          name: ["-l", "--label"],
          description: "Label for the custom metadata type",
          args: { name: "label" },
        },
        {
          name: ["-p", "--plural-label", "--plurallabel"],
          description:
            "Plural version of the label value; if blank, uses label",
          args: { name: "plural-label" },
        },
        {
          name: ["-v", "--visibility"],
          description: "Who can see the custom metadata type",
          args: {
            name: "visibility",
            suggestions: ["PackageProtected", "Protected", "Public"],
          },
        },
        {
          name: [
            "-d",
            "--output-directory",
            "--outputdir",
            "--outputdirectory",
          ],
          description:
            "Directory to store the newly-created custom metadata type files",
          args: { name: "output-directory" },
        },
      ],
    },
    {
      name: [
        "cmdt:generate:record",
        "force:cmdt:record:create",
        "cmdt:record:create",
      ],
      description:
        "Generate a new record for a given custom metadata type in the current project",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        {
          name: ["-t", "--type-name", "--typename"],
          description:
            'API name of the custom metadata type to create a record for; must end in "__mdt"',
          args: { name: "type-name" },
          isRequired: true,
        },
        {
          name: ["-n", "--record-name", "--recordname"],
          description: "Name of the new record",
          args: { name: "record-name" },
          isRequired: true,
        },
        {
          name: ["-l", "--label"],
          description: "Label for the new record",
          args: { name: "label" },
        },
        {
          name: ["-p", "--protected"],
          description: "Protect the record when it's in a managed package",
          args: { name: "protected", suggestions: ["true", "false"] },
        },
        {
          name: ["-i", "--input-directory", "--inputdir", "--inputdirectory"],
          description:
            "Directory from which to get the custom metadata type definition from",
          args: { name: "input-directory" },
        },
        {
          name: [
            "-d",
            "--output-directory",
            "--outputdir",
            "--outputdirectory",
          ],
          description:
            "Directory to store newly-created custom metadata record files",
          args: { name: "output-directory" },
        },
      ],
      args: { name: "field=value", isOptional: true, isVariadic: true },
    },
    {
      name: [
        "cmdt:generate:records",
        "force:cmdt:record:insert",
        "cmdt:record:insert",
      ],
      description: "Generate new custom metadata type records from a CSV file",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        {
          name: ["-f", "--csv", "--filepath"],
          description: "Pathname of the CSV file",
          args: { name: "csv" },
          isRequired: true,
        },
        {
          name: ["-t", "--type-name", "--typename"],
          description:
            "API name of the custom metadata type to create a record for",
          args: { name: "type-name" },
          isRequired: true,
        },
        {
          name: ["-i", "--input-directory", "--inputdir", "--inputdirectory"],
          description:
            "Directory from which to get the custom metadata type definition from",
          args: { name: "input-directory" },
        },
        {
          name: [
            "-d",
            "--output-directory",
            "--outputdir",
            "--outputdirectory",
          ],
          description:
            "Directory to store newly-created custom metadata record files",
          args: { name: "output-directory" },
        },
        {
          name: ["-n", "--name-column", "--namecolumn"],
          description: "Column used to determine the name of the record",
          args: { name: "name-column" },
        },
      ],
    },
    {
      name: "code-analyzer:ast-dump",
      description:
        "Dump the Abstract Syntax Tree (AST) for a given source file",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: "--file",
          description: "Path to the source file to parse",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: ["-l", "--language"],
          description: "Language of the source file",
          args: {
            name: "language",
            suggestions: ["apex", "visualforce", "html", "xml", "javascript"],
          },
        },
        {
          name: "--format",
          description: "Output format for the AST",
          args: { name: "format", suggestions: ["json", "xml"] },
        },
        {
          name: "--output-file",
          description: "Path to the file where the AST output is written",
          args: { name: "output-file" },
        },
      ],
    },
    {
      name: "code-analyzer:config",
      description:
        "Output the current state of configuration for Code Analyzer",
      options: [
        flagsDirFlag,
        {
          name: ["-w", "--workspace"],
          description: "Set of files that make up your workspace",
          args: { name: "workspace" },
          isRepeatable: true,
        },
        {
          name: ["-t", "--target"],
          description:
            "Subset of files within your workspace that you want to target for analysis",
          args: { name: "target" },
          isRepeatable: true,
        },
        {
          name: ["-r", "--rule-selector"],
          description:
            "Selection of rules, based on engine name, severity level, rule name, tag, or a combination of criteria separated by colons and commas, and grouped by parentheses",
          args: { name: "rule-selector" },
          isRepeatable: true,
        },
        {
          name: ["-c", "--config-file"],
          description:
            "Path to the existing configuration file used to customize the engines and rules",
          args: { name: "config-file" },
        },
        {
          name: ["-f", "--output-file"],
          description:
            "Output file to write the configuration state to. The file is written in YAML format",
          args: { name: "output-file" },
        },
        {
          name: "--include-unmodified-rules",
          description: "Include unmodified rules in the rule override settings",
        },
        {
          name: "--no-suppressions",
          description: "Exclude suppressions from the output configuration",
        },
      ],
    },
    {
      name: "code-analyzer:rules",
      description: "List the rules that are available to analyze your code",
      options: [
        flagsDirFlag,
        {
          name: ["-w", "--workspace"],
          description: "Set of files that make up your workspace",
          args: { name: "workspace" },
          isRepeatable: true,
        },
        {
          name: ["-t", "--target"],
          description:
            "Subset of files within your workspace that you want to target for analysis",
          args: { name: "target" },
          isRepeatable: true,
        },
        {
          name: ["-r", "--rule-selector"],
          description:
            "Selection of rules, based on engine name, severity level, rule name, tag, or a combination of criteria separated by colons",
          args: { name: "rule-selector" },
          isRepeatable: true,
        },
        {
          name: ["-c", "--config-file"],
          description:
            "Path to the configuration file used to customize the engines and rules",
          args: { name: "config-file" },
        },
        {
          name: ["-f", "--output-file"],
          description:
            "Name of the file where the selected rules are written. The file format depends on the extension you specify; the currently supported extensions are .json and .csv",
          args: { name: "output-file" },
          isRepeatable: true,
        },
        {
          name: ["-v", "--view"],
          description: "Format to display the rules in the terminal",
          args: { name: "view", suggestions: ["detail", "table"] },
        },
      ],
    },
    {
      name: "code-analyzer:run",
      description:
        "Analyze your code with a selection of rules to ensure good coding practices",
      options: [
        flagsDirFlag,
        {
          name: ["-w", "--workspace"],
          description: "Set of files that make up your workspace",
          args: { name: "workspace" },
          isRepeatable: true,
        },
        {
          name: ["-t", "--target"],
          description:
            "Subset of files within your workspace to be targeted for analysis",
          args: { name: "target" },
          isRepeatable: true,
        },
        {
          name: ["-o", "--target-org"],
          description:
            "Target org username or alias for remote analysis engines",
          args: { name: "target-org" },
        },
        {
          name: ["-r", "--rule-selector"],
          description:
            "Selection of rules, based on engine name, severity level, rule name, tag, or a combination of criteria separated by colons",
          args: { name: "rule-selector" },
          isRepeatable: true,
        },
        {
          name: ["-s", "--severity-threshold"],
          description:
            "Severity level of a found violation that must be met or exceeded to cause this command to fail with a non-zero exit code",
          args: { name: "severity-threshold" },
        },
        {
          name: ["-v", "--view"],
          description: "Format to display the command results in the terminal",
          args: { name: "view", suggestions: ["detail", "table"] },
        },
        {
          name: ["-f", "--output-file"],
          description:
            "Name of the file where the analysis results are written. The file format depends on the extension you specify, such as .csv, .html, .xml, and so on",
          args: { name: "output-file" },
          isRepeatable: true,
        },
        {
          name: ["-c", "--config-file"],
          description:
            "Path to the configuration file used to customize the engines and rules",
          args: { name: "config-file" },
        },
        {
          name: "--include-fixes",
          description: "Include fix data for violations when available",
        },
        {
          name: "--include-suggestions",
          description: "Include suggestion data for violations when available",
        },
        {
          name: "--no-suppressions",
          description:
            "Disable processing of inline and bulk suppression markers",
        },
      ],
    },
    {
      name: "commands",
      description: "List all sfdx commands",
      options: [
        jsonFlag,
        {
          name: ["-c", "--columns"],
          description: "Only show provided columns (comma-separated)",
          args: {
            name: "columns",
            suggestions: ["id", "plugin", "summary", "type"],
          },
          isRepeatable: true,
          exclusiveOn: ["--tree"],
        },
        { name: "--deprecated", description: "Show deprecated commands" },
        {
          name: ["-x", "--extended"],
          description: "Show extra columns",
          exclusiveOn: ["--tree"],
        },
        { name: "--hidden", description: "Show hidden commands" },
        {
          name: "--no-truncate",
          description: "Do not truncate output",
          exclusiveOn: ["--tree"],
        },
        {
          name: "--sort",
          description: "Property to sort by",
          args: {
            name: "sort",
            suggestions: ["id", "plugin", "summary", "type"],
          },
          exclusiveOn: ["--tree"],
        },
        { name: "--tree", description: "Show tree of commands" },
      ],
    },
    {
      name: ["community:create", "force:community:create"],
      description: "Create an Experience Cloud site using a template",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name"],
          description: "Name of the site to create",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template-name", "--templatename"],
          description: "Template to use to create a site",
          args: { name: "template-name" },
          isRequired: true,
        },
        {
          name: ["-p", "--url-path-prefix", "--urlpathprefix"],
          description:
            "URL to append to the domain created when Digital Experiences was enabled for this org",
          args: { name: "url-path-prefix" },
        },
        {
          name: ["-d", "--description"],
          description: "Description of the site",
          args: { name: "description" },
        },
        targetOrgLegacyFlag,
        loglevelFlag,
        apiVersionLegacyFlag,
      ],
      args: { name: "name=value", isOptional: true, isVariadic: true },
    },
    {
      name: ["community:list:template", "force:community:template:list"],
      description: "Retrieve the list of templates available in your org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: ["community:publish", "force:community:publish"],
      description: "Publish an Experience Builder site to make it live",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name"],
          description: "Name of the Experience Builder site to publish",
          args: { name: "name" },
          isRequired: true,
        },
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: ["config:get", "force:config:get"],
      description: "Get the value of a configuration variable",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        {
          name: "--verbose",
          description:
            "Display whether the configuration variables are set locally or globally",
        },
      ],
      args: { name: "name", isOptional: true, isVariadic: true },
    },
    {
      name: ["config:list", "force:config:list"],
      description:
        "List the configuration variables that you've previously set",
      options: [jsonFlag, flagsDirFlag, loglevelFlag],
    },
    {
      name: ["config:set", "force:config:set"],
      description:
        "Set one or more configuration variables, such as your default org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        {
          name: ["-g", "--global"],
          description:
            "Set the configuration variables globally, so they can be used from any Salesforce DX project",
        },
      ],
      args: { name: "name=value", isOptional: true, isVariadic: true },
    },
    {
      name: ["config:unset", "force:config:unset"],
      description: "Unset local or global configuration variables",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        {
          name: ["-g", "--global"],
          description: "Unset the configuration variables globally",
        },
      ],
      args: { name: "name", isOptional: true, isVariadic: true },
    },
    {
      name: "data:bulk:results",
      description:
        "Get the results of a bulk ingest job that you previously ran",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-i", "--job-id"],
          description: "Job ID of the bulk job",
          args: { name: "job-id" },
          isRequired: true,
        },
        targetOrgFlag,
        apiVersionFlag,
      ],
    },
    {
      name: "data:create:file",
      description: "Upload a local file to an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-t", "--title"],
          description:
            "New title given to the file (ContentDocument) after it's uploaded",
          args: { name: "title" },
        },
        {
          name: ["-f", "--file"],
          description: "Path of file to upload",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: ["-i", "--parent-id"],
          description: "ID of the record to attach the file to",
          args: { name: "parent-id" },
        },
      ],
    },
    {
      name: ["data:create:record", "force:data:record:create"],
      description:
        "Create and insert a record into a Salesforce or Tooling API object",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-s", "--sobject", "--sobjecttype"],
          description:
            "API name of the Salesforce or Tooling API object that you're inserting a record into",
          args: { name: "sobject" },
          isRequired: true,
        },
        {
          name: ["-v", "--values"],
          description:
            "Values for the flags in the form <fieldName>=<value>, separate multiple pairs with spaces",
          args: { name: "values" },
          isRequired: true,
        },
        {
          name: ["-t", "--use-tooling-api", "--usetoolingapi"],
          description:
            "Use Tooling API so you can insert a record in a Tooling API object",
        },
        {
          name: "--perflog",
          description: "Get API performance data",
          hidden: true,
          deprecated: true,
        },
        {
          name: "--skip-assignment-rules",
          description:
            "Don't apply active assignment rules when creating the record; applies to Account, Case, and Lead records",
        },
      ],
    },
    {
      name: "data:delete:bulk",
      description:
        "Bulk delete records from an org using a CSV file. Uses Bulk API 2.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-f", "--file", "--csvfile"],
          description:
            "CSV file that contains the IDs of the records to update or delete",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: ["-s", "--sobject", "--sobjecttype"],
          description:
            "API name of the Salesforce object, either standard or custom, that you want to update or delete records from",
          args: { name: "sobject" },
          isRequired: true,
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the command to complete before displaying the results",
          args: { name: "wait" },
        },
        {
          name: "--line-ending",
          description:
            "Line ending used in the CSV file. Default value on Windows is `CRLF`; on macOS and Linux it's `LF`",
          args: { name: "line-ending", suggestions: ["CRLF", "LF"] },
          dependsOn: ["--file"],
        },
        {
          name: "--hard-delete",
          description:
            "Mark the records as immediately eligible for deletion by your org. If you don't specify this flag, the deleted records go into the Recycle Bin",
        },
      ],
    },
    {
      name: ["data:delete:record", "force:data:record:delete"],
      description:
        "Deletes a single record from a Salesforce or Tooling API object",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-s", "--sobject", "--sobjecttype"],
          description:
            "API name of the Salesforce or Tooling API object that you're deleting a record from",
          args: { name: "sobject" },
          isRequired: true,
        },
        {
          name: ["-i", "--record-id", "--sobjectid"],
          description: "ID of the record you’re deleting",
          args: { name: "record-id" },
        },
        {
          name: ["-w", "--where"],
          description:
            "List of <fieldName>=<value> pairs that identify the record you want to delete",
          args: { name: "where" },
        },
        {
          name: ["-t", "--use-tooling-api", "--usetoolingapi"],
          description:
            "Use Tooling API so you can delete a record from a Tooling API object",
        },
        {
          name: "--perflog",
          description: "Get API performance data",
          hidden: true,
          deprecated: true,
        },
      ],
    },
    {
      name: "data:delete:resume",
      description:
        "Resume a bulk delete job that you previously started. Uses Bulk API 2.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-o", "-u", "--target-org", "--targetusername"],
          description:
            'Username or alias of the target org. Not required if the "target-org" configuration variable is already set',
          args: { name: "target-org" },
        },
        {
          name: ["-i", "--job-id", "--jobid"],
          description: "ID of the job you want to resume",
          args: { name: "job-id" },
        },
        {
          name: "--use-most-recent",
          description: "Use the ID of the most recently-run bulk job",
          exclusiveOn: ["--job-id"],
        },
        {
          name: "--wait",
          description:
            "Number of minutes to wait for the command to complete before displaying the results",
          args: { name: "wait" },
        },
        apiVersionFlag,
        loglevelFlag,
      ],
    },
    {
      name: "data:export:bulk",
      description:
        "Bulk export records from an org into a file using a SOQL query. Uses Bulk API 2.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-w", "--wait"],
          description: "Time to wait for the command to finish, in minutes",
          args: { name: "wait" },
        },
        {
          name: ["-q", "--query"],
          description: "SOQL query to execute",
          args: { name: "query" },
          exclusiveOn: ["--query-file"],
        },
        {
          name: "--query-file",
          description: "File that contains the SOQL query",
          args: { name: "query-file" },
          exclusiveOn: ["--query"],
        },
        {
          name: "--all-rows",
          description:
            "Include records that have been soft-deleted due to a merge or delete. By default, deleted records are not returned",
        },
        {
          name: "--output-file",
          description: "File where records are written",
          args: { name: "output-file" },
          isRequired: true,
        },
        {
          name: ["-r", "--result-format"],
          description: "Format to write the results",
          args: { name: "result-format", suggestions: ["csv", "json"] },
        },
        {
          name: "--column-delimiter",
          description:
            "Column delimiter to be used when writing CSV output. Default is COMMA",
          args: {
            name: "column-delimiter",
            suggestions: [
              "BACKQUOTE",
              "CARET",
              "COMMA",
              "PIPE",
              "SEMICOLON",
              "TAB",
            ],
          },
        },
        {
          name: "--line-ending",
          description:
            "Line ending to be used when writing CSV output. Default value on Windows is is `CRLF`; on macOS and Linux it's `LR`",
          args: { name: "line-ending", suggestions: ["LF", "CRLF"] },
        },
      ],
    },
    {
      name: "data:export:resume",
      description:
        "Resume a bulk export job that you previously started. Uses Bulk API 2.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-i", "--job-id"],
          description: "Job ID of the bulk export",
          args: { name: "job-id" },
        },
        {
          name: "--use-most-recent",
          description:
            "Use the job ID of the bulk export job that was most recently run",
        },
        apiVersionFlag,
      ],
    },
    {
      name: ["data:export:tree", "force:data:tree:export"],
      description: "Export data from an org into one or more JSON files",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-q", "--query"],
          description:
            "SOQL query, or filepath of a file that contains the query, to retrieve records",
          args: { name: "query" },
          isRepeatable: true,
          isRequired: true,
        },
        {
          name: ["-p", "--plan"],
          description:
            "Generate multiple sObject tree files and a plan definition file for aggregated import",
        },
        {
          name: ["-x", "--prefix"],
          description: "Prefix of generated files",
          args: { name: "prefix" },
        },
        {
          name: ["-d", "--output-dir", "--outputdir"],
          description:
            "Directory in which to generate the JSON files; default is current directory",
          args: { name: "output-dir" },
        },
      ],
    },
    {
      name: ["data:get:record", "force:data:record:get"],
      description:
        "Retrieve and display a single record of a Salesforce or Tooling API object",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-s", "--sobject", "--sobjecttype"],
          description:
            "API name of the Salesforce or Tooling API object that you're retrieving a record from",
          args: { name: "sobject" },
          isRequired: true,
        },
        {
          name: ["-i", "--record-id", "--sobjectid"],
          description: "ID of the record you’re retrieving",
          args: { name: "record-id" },
        },
        {
          name: ["-w", "--where"],
          description:
            "List of <fieldName>=<value> pairs that identify the record you want to display",
          args: { name: "where" },
        },
        {
          name: ["-t", "--use-tooling-api", "--usetoolingapi"],
          description:
            "Use Tooling API so you can retrieve a record from a Tooling API object",
        },
        {
          name: "--perflog",
          description: "Get API performance data",
          hidden: true,
          deprecated: true,
        },
      ],
    },
    {
      name: "data:import:bulk",
      description:
        "Bulk import records into a Salesforce object from a CSV file. Uses Bulk API 2.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-f", "--file"],
          description:
            "CSV file that contains the Salesforce object records you want to import",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: ["-s", "--sobject"],
          description:
            "API name of the Salesforce object, either standard or custom, into which you're importing records",
          args: { name: "sobject" },
          isRequired: true,
        },
        apiVersionFlag,
        {
          name: ["-w", "--wait"],
          description: "Time to wait for the command to finish, in minutes",
          args: { name: "wait" },
        },
        targetOrgFlag,
        {
          name: "--line-ending",
          description:
            "Line ending used in the CSV file. Default value on Windows is `CRLF`; on macOS and Linux it's `LF`",
          args: { name: "line-ending", suggestions: ["CRLF", "LF"] },
          dependsOn: ["--file"],
        },
        {
          name: "--column-delimiter",
          description: "Column delimiter used in the CSV file",
          args: {
            name: "column-delimiter",
            suggestions: [
              "BACKQUOTE",
              "CARET",
              "COMMA",
              "PIPE",
              "SEMICOLON",
              "TAB",
            ],
          },
        },
      ],
    },
    {
      name: "data:import:resume",
      description:
        "Resume a bulk import job that you previously started. Uses Bulk API 2.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: "--use-most-recent",
          description:
            "Use the job ID of the bulk import job that was most recently run",
        },
        {
          name: ["-i", "--job-id"],
          description: "Job ID of the bulk import",
          args: { name: "job-id" },
        },
        {
          name: ["-w", "--wait"],
          description: "Time to wait for the command to finish, in minutes",
          args: { name: "wait" },
        },
      ],
    },
    {
      name: ["data:import:tree", "force:data:tree:import"],
      description: "Import data from one or more JSON files into an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-f", "--files", "--sobjecttreefiles"],
          description:
            "Comma-separated and in-order JSON files that contain the records, in sObject tree format, that you want to insert",
          args: { name: "files" },
          isRepeatable: true,
        },
        {
          name: ["-p", "--plan"],
          description: "Plan definition file to insert multiple data files",
          args: { name: "plan" },
        },
      ],
    },
    {
      name: ["data:query", "force:data:soql:query"],
      description: "Execute a SOQL query",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-q", "--query"],
          description: "SOQL query to execute",
          args: { name: "query" },
        },
        {
          name: ["-f", "--file", "--soqlqueryfile"],
          description: "File that contains the SOQL query",
          args: { name: "file" },
        },
        {
          name: ["-t", "--use-tooling-api", "--usetoolingapi"],
          description:
            "Use Tooling API so you can run queries on Tooling API objects",
        },
        {
          name: "--all-rows",
          description:
            "Include deleted records. By default, deleted records are not returned",
        },
        {
          name: ["-r", "--result-format", "--resultformat"],
          description:
            "Format to display the results; the --json flag overrides this flag",
          args: {
            name: "result-format",
            suggestions: ["human", "csv", "json"],
          },
        },
        {
          name: "--perflog",
          description: "Get API performance data",
          hidden: true,
          deprecated: true,
        },
        {
          name: "--output-file",
          description:
            "File where records are written; only CSV and JSON output formats are supported",
          args: { name: "output-file" },
        },
      ],
    },
    {
      name: "data:resume",
      description: "View the status of a bulk data load job or batch",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-b", "--batch-id", "--batchid"],
          description:
            "ID of the batch whose status you want to view; you must also specify the job ID",
          args: { name: "batch-id" },
        },
        {
          name: ["-i", "--job-id", "--jobid"],
          description: "ID of the job whose status you want to view",
          args: { name: "job-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "data:search",
      description: "Execute a SOSL text-based search query",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-q", "--query"],
          description: "SOSL query to execute",
          args: { name: "query" },
        },
        {
          name: ["-f", "--file"],
          description: "File that contains the SOSL query",
          args: { name: "file" },
        },
        {
          name: ["-r", "--result-format"],
          description:
            'Format to display the results, or to write to disk if you specify "csv"',
          args: {
            name: "result-format",
            suggestions: ["human", "csv", "json"],
          },
          exclusiveOn: ["--json"],
        },
      ],
    },
    {
      name: "data:update:bulk",
      description:
        "Bulk update records to an org from a CSV file. Uses Bulk API 2.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-w", "--wait"],
          description: "Time to wait for the command to finish, in minutes",
          args: { name: "wait" },
        },
        {
          name: ["-f", "--file"],
          description:
            "CSV file that contains the Salesforce object records you want to update",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: ["-s", "--sobject"],
          description:
            "API name of the Salesforce object, either standard or custom, which you are updating",
          args: { name: "sobject" },
          isRequired: true,
        },
        apiVersionFlag,
        targetOrgFlag,
        {
          name: "--line-ending",
          description:
            "Line ending used in the CSV file. Default value on Windows is `CRLF`; on macOS and Linux it's `LF`",
          args: { name: "line-ending", suggestions: ["CRLF", "LF"] },
          dependsOn: ["--file"],
        },
        {
          name: "--column-delimiter",
          description: "Column delimiter used in the CSV file",
          args: {
            name: "column-delimiter",
            suggestions: [
              "BACKQUOTE",
              "CARET",
              "COMMA",
              "PIPE",
              "SEMICOLON",
              "TAB",
            ],
          },
        },
      ],
    },
    {
      name: ["data:update:record", "force:data:record:update"],
      description:
        "Updates a single record of a Salesforce or Tooling API object",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-s", "--sobject", "--sobjecttype"],
          description:
            "API name of the Salesforce or Tooling API object that contains the record you're updating",
          args: { name: "sobject" },
          isRequired: true,
        },
        {
          name: ["-i", "--record-id", "--sobjectid"],
          description: "ID of the record you’re updating",
          args: { name: "record-id" },
        },
        {
          name: ["-w", "--where"],
          description:
            "List of <fieldName>=<value> pairs that identify the record you want to update",
          args: { name: "where" },
        },
        {
          name: ["-v", "--values"],
          description:
            "Fields that you're updating, in the format of <fieldName>=<value> pairs",
          args: { name: "values" },
          isRequired: true,
        },
        {
          name: ["-t", "--use-tooling-api", "--usetoolingapi"],
          description:
            "Use Tooling API so you can update a record in a Tooling API object",
        },
        {
          name: "--perflog",
          description: "Get API performance data",
          hidden: true,
          deprecated: true,
        },
        {
          name: "--skip-assignment-rules",
          description:
            "Don't apply active assignment rules when updating the record; applies to Account, Case, and Lead records",
        },
      ],
    },
    {
      name: "data:update:resume",
      description:
        "Resume a bulk update job that you previously started. Uses Bulk API 2.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: "--use-most-recent",
          description:
            "Use the job ID of the bulk update job that was most recently run",
        },
        {
          name: ["-i", "--job-id"],
          description: "Job ID of the bulk update",
          args: { name: "job-id" },
        },
        {
          name: ["-w", "--wait"],
          description: "Time to wait for the command to finish, in minutes",
          args: { name: "wait" },
        },
      ],
    },
    {
      name: "data:upsert:bulk",
      description:
        "Bulk upsert records to an org from a CSV file. Uses Bulk API 2.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-f", "--file", "--csvfile"],
          description:
            "CSV file that contains the IDs of the records to update or delete",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: ["-s", "--sobject", "--sobjecttype"],
          description:
            "API name of the Salesforce object, either standard or custom, that you want to update or delete records from",
          args: { name: "sobject" },
          isRequired: true,
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the command to complete before displaying the results",
          args: { name: "wait" },
        },
        {
          name: "--line-ending",
          description:
            "Line ending used in the CSV file. Default value on Windows is `CRLF`; on macOS and Linux it's `LF`",
          args: { name: "line-ending", suggestions: ["CRLF", "LF"] },
          dependsOn: ["--file"],
        },
        {
          name: "--column-delimiter",
          description: "Column delimiter used in the CSV file",
          args: {
            name: "column-delimiter",
            suggestions: [
              "BACKQUOTE",
              "CARET",
              "COMMA",
              "PIPE",
              "SEMICOLON",
              "TAB",
            ],
          },
        },
        {
          name: ["-i", "--external-id", "--externalid"],
          description: "Name of the external ID field, or the Id field",
          args: { name: "external-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "data:upsert:resume",
      description:
        "Resume a bulk upsert job that you previously started. Uses Bulk API 2.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-o", "-u", "--target-org", "--targetusername"],
          description:
            'Username or alias of the target org. Not required if the "target-org" configuration variable is already set',
          args: { name: "target-org" },
        },
        {
          name: ["-i", "--job-id", "--jobid"],
          description: "ID of the job you want to resume",
          args: { name: "job-id" },
        },
        {
          name: "--use-most-recent",
          description: "Use the ID of the most recently-run bulk job",
          exclusiveOn: ["--job-id"],
        },
        {
          name: "--wait",
          description:
            "Number of minutes to wait for the command to complete before displaying the results",
          args: { name: "wait" },
        },
        apiVersionFlag,
        loglevelFlag,
      ],
    },
    {
      name: "dev:audit:messages",
      description:
        "Audit messages in a plugin's messages directory to locate unused messages and missing messages that have references in source code",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-p", "--project-dir", "--projectdir"],
          description:
            "Location of the project where messages are to be audited",
          args: { name: "project-dir" },
        },
        {
          name: ["-m", "--messages-dir", "--messagesdir"],
          description: "Directory that contains the plugin's message files",
          args: { name: "messages-dir" },
        },
        {
          name: ["-s", "--source-dir", "--sourcedir"],
          description: "Directory that contains the plugin's source code",
          args: { name: "source-dir" },
        },
      ],
    },
    {
      name: "dev:configure:repo",
      description: "Configure a GitHub repo for the GitHub Actions pipeline",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-r", "--repository"],
          description:
            "GitHub owner/repo for which you want to configure GitHub Actions",
          args: { name: "repository" },
          isRequired: true,
        },
        {
          name: ["-d", "--dry-run", "--dryrun"],
          description: "Make no changes",
        },
        {
          name: ["-b", "--bot"],
          description: "GitHub login/username for the bot",
          args: { name: "bot" },
        },
      ],
      hidden: true,
    },
    {
      name: "dev:configure:secrets",
      description:
        "Ensures a GitHub repo has correct access to secrets based on its workflows",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-r", "--repository"],
          description: "Github owner/repo",
          args: { name: "repository" },
          isRequired: true,
        },
        {
          name: ["-d", "--dry-run", "--dryrun"],
          description: "Make no changes",
        },
      ],
      hidden: true,
    },
    {
      name: "dev:convert:messages",
      description: "Convert a .json messages file into Markdown",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-p", "--project-dir", "--projectdir"],
          description:
            "Location of the project whose messages are to be converted",
          args: { name: "project-dir" },
        },
        {
          name: ["-f", "--file-name", "--filename"],
          description: "Filename to convert",
          args: { name: "file-name" },
          isRepeatable: true,
          isRequired: true,
        },
      ],
    },
    {
      name: "dev:convert:script",
      description:
        "Convert a script file that contains deprecated sfdx-style commands to use the new sf-style commands instead",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-s", "--script"],
          description: "Filepath to the script you want to convert",
          args: { name: "script" },
          isRequired: true,
        },
        {
          name: "--no-prompt",
          description: "Don't prompt for suggested replacements",
          hidden: true,
        },
      ],
    },
    {
      name: "dev:generate:command",
      description: "Generate a new sf command",
      options: [
        flagsDirFlag,
        {
          name: ["-n", "--name"],
          description:
            "Name of the new command. Use colons to separate the topic and command names",
          args: { name: "name" },
          isRequired: true,
        },
        { name: "--force", description: "Overwrite existing files" },
        {
          name: "--dry-run",
          description:
            "Display the changes that would be made without writing them to disk",
        },
        {
          name: "--nuts",
          description: "Generate a NUT test file for the command",
        },
        { name: "--no-nuts", description: "Negate --nuts" },
        {
          name: "--unit",
          description: "Generate a unit test file for the command",
        },
        { name: "--no-unit", description: "Negate --unit" },
      ],
    },
    {
      name: "dev:generate:flag",
      description: "Generate a flag for an existing command",
      options: [
        flagsDirFlag,
        {
          name: ["-d", "--dry-run", "--dryrun"],
          description:
            "Print new flag code instead of adding it to the command file",
        },
      ],
    },
    {
      name: "dev:generate:library",
      description: "Generate a new library",
      options: [
        flagsDirFlag,
        {
          name: "--dry-run",
          description:
            "Display the changes that would be made without writing them to disk",
        },
      ],
      hidden: true,
    },
    {
      name: ["dev:generate:plugin", "plugins:generate"],
      description: "Generate a new sf plugin",
      options: [
        flagsDirFlag,
        {
          name: "--dry-run",
          description:
            "Display the changes that would be made without writing them to disk",
        },
      ],
    },
    {
      name: "devops:pipeline:create",
      description: "Create a DevOps Center pipeline",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--name"],
          description: "Name of the pipeline",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-r", "--repo"],
          description:
            "URL of an existing repository or the name of a repository to create",
          args: { name: "repo" },
          isRequired: true,
        },
        {
          name: "--repo-type",
          description:
            "Type of the source code repository. Required when creating a repository using '--create-repo'",
          args: { name: "repo-type", suggestions: ["github", "bitbucket"] },
        },
        {
          name: "--create-repo",
          description: "Create a repository if it doesn't exist",
        },
        {
          name: "--repo-owner",
          description:
            "Owner (organization or user) of the GitHub repository. Required when creating a GitHub repository using '--create-repo'",
          args: { name: "repo-owner" },
        },
        {
          name: "--bitbucket-workspace",
          description:
            "Bitbucket workspace that will own the repository. Required when creating a Bitbucket repository using '--create-repo'",
          args: { name: "bitbucket-workspace" },
        },
        {
          name: "--bitbucket-project-key",
          description:
            "Bitbucket project key to associate with the repository. Optional when creating a Bitbucket repository using '--create-repo'",
          args: { name: "bitbucket-project-key" },
        },
        {
          name: ["-s", "--stage"],
          description:
            "Name of a pipeline stage, in promotion order. Repeat the flag for each stage. Defaults to Integration, UAT, Staging, and Production",
          args: { name: "stage" },
          isRepeatable: true,
        },
        {
          name: "--project-id",
          description:
            "ID of a project to associate with the pipeline. Repeat the flag to associate multiple projects",
          args: { name: "project-id" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "devops:pipeline:get",
      description:
        "Get details of a DevOps Center pipeline including its stages, repositories, and connected projects",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--pipeline-id"],
          description: "ID of the DevOps Center pipeline",
          args: { name: "pipeline-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:pipeline:list",
      description:
        "List DevOps Center pipelines with their stages, repositories, and connected projects",
      options: [jsonFlag, flagsDirFlag, targetOrgFlag, apiVersionFlag],
    },
    {
      name: "devops:pipeline:project:add",
      description: "Attach a DevOps Center project to a pipeline",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--pipeline-id",
          description: "ID of the pipeline",
          args: { name: "pipeline-id" },
          isRequired: true,
        },
        {
          name: "--project-id",
          description: "ID of the DevOps Center project",
          args: { name: "project-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:pipeline:project:delete",
      description: "Remove a DevOps Center project's connection to a pipeline",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--pipeline-id",
          description: "ID of the pipeline",
          args: { name: "pipeline-id" },
          isRequired: true,
        },
        {
          name: "--project-id",
          description: "ID of the DevOps Center project",
          args: { name: "project-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:pipeline:stage:add",
      description: "Add a stage to a DevOps Center pipeline",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--pipeline-id",
          description: "ID of the pipeline where the stage is added",
          args: { name: "pipeline-id" },
          isRequired: true,
        },
        {
          name: ["-n", "--name"],
          description:
            "Name of the pipeline stage, such as Integration, UAT, or Staging",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--next-stage-id",
          description:
            "ID of the stage that follows the new stage in the pipeline",
          args: { name: "next-stage-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:pipeline:stage:delete",
      description: "Delete a stage from a DevOps Center pipeline",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--pipeline-id",
          description: "ID of the pipeline that contains the stage",
          args: { name: "pipeline-id" },
          isRequired: true,
        },
        {
          name: "--stage-id",
          description: "ID of the stage to delete",
          args: { name: "stage-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:pipeline:stage:update",
      description: "Update a DevOps Center pipeline stage",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-s", "--stage-id"],
          description: "ID of the pipeline stage to update",
          args: { name: "stage-id" },
          isRequired: true,
        },
        {
          name: ["-n", "--name"],
          description: "New name for the pipeline stage",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:pipeline:update",
      description: "Update a DevOps Center pipeline",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--pipeline-id",
          description: "ID of the pipeline",
          args: { name: "pipeline-id" },
          isRequired: true,
        },
        {
          name: "--activate",
          description: "Activate the pipeline. Can't be used with --deactivate",
          exclusiveOn: ["--deactivate"],
        },
        {
          name: "--deactivate",
          description: "Deactivate the pipeline. Can't be used with --activate",
          exclusiveOn: ["--activate"],
        },
        {
          name: ["-n", "--name"],
          description: "New name for the pipeline",
          args: { name: "name" },
        },
      ],
    },
    {
      name: "devops:project:create",
      description: "Create a DevOps Center project in a DevOps Center org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--name"],
          description: "Name of the new DevOps Center project",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-d", "--description"],
          description:
            "Description of the new project; if not specified, the description is blank",
          args: { name: "description" },
        },
      ],
    },
    {
      name: "devops:project:list",
      description: "List all DevOps Center projects in a Salesforce org",
      options: [jsonFlag, flagsDirFlag, targetOrgFlag, apiVersionFlag],
    },
    {
      name: "devops:project:update",
      description: "Update a DevOps Center project",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--project-id"],
          description: "ID of the DevOps Center project to update",
          args: { name: "project-id" },
          isRequired: true,
        },
        {
          name: ["-n", "--name"],
          description: "New name for the project",
          args: { name: "name" },
        },
        {
          name: ["-d", "--description"],
          description: "New description for the project",
          args: { name: "description" },
        },
        {
          name: "--is-active",
          description:
            "Set the project active status. Use --is-active to activate or --no-is-active to deactivate",
        },
        { name: "--no-is-active", description: "Negate --is-active" },
      ],
    },
    {
      name: "devops:promote",
      description:
        "Promote work items or a pipeline stage to a target pipeline stage",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-t", "--target-stage-id"],
          description: "ID of the pipeline stage to promote to",
          args: { name: "target-stage-id" },
          isRequired: true,
        },
        {
          name: ["-i", "--work-item-id"],
          description:
            "ID of the work item to promote. Mutually exclusive with --stage-id",
          args: { name: "work-item-id" },
          isRepeatable: true,
          exclusiveOn: ["--stage-id"],
        },
        {
          name: ["-s", "--stage-id"],
          description:
            "ID of the source pipeline stage whose approved work items will be promoted. Mutually exclusive with --work-item-id",
          args: { name: "stage-id" },
          exclusiveOn: ["--work-item-id"],
        },
        {
          name: ["-a", "--deploy-all"],
          description: "Deploy all metadata in the branch to the stage's org",
        },
        {
          name: ["-l", "--test-level"],
          description: "Deployment Apex testing level",
          args: {
            name: "test-level",
            suggestions: [
              "NoTestRun",
              "RunSpecifiedTests",
              "RunLocalTests",
              "RunAllTestsInOrg",
            ],
          },
        },
        {
          name: "--tests",
          description:
            "Apex tests to run when --test-level is RunSpecifiedTests",
          args: { name: "tests" },
          isRepeatable: true,
        },
        {
          name: "--skip-validation",
          description:
            "Skip pre-promote validation. By default, promotion is validated before proceeding to prevent promoting work items without an associated PR. Use this flag to bypass validation",
        },
        {
          name: "--force",
          description:
            "Submit the promotion even if another promotion to the same target stage is already in progress. By default, the command blocks to avoid creating duplicate promotions",
        },
      ],
    },
    {
      name: "devops:promotion:complete",
      description: "Deploy undeployed work items to a pipeline stage org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-t", "--target-stage-id"],
          description: "ID of the out-of-sync pipeline stage to deploy to",
          args: { name: "target-stage-id" },
          isRequired: true,
        },
        {
          name: ["-i", "--work-item-id"],
          description:
            "ID of a specific work item to deploy. Omit to deploy all undeployed work items for the stage. Use this for the first stage of a pipeline where no source stage exists",
          args: { name: "work-item-id" },
          isRepeatable: true,
        },
        {
          name: ["-a", "--deploy-all"],
          description: "Deploy all metadata in the branch to the stage's org",
        },
        {
          name: ["-l", "--test-level"],
          description: "Deployment Apex testing level",
          args: {
            name: "test-level",
            suggestions: [
              "NoTestRun",
              "RunSpecifiedTests",
              "RunLocalTests",
              "RunAllTestsInOrg",
            ],
          },
        },
        {
          name: "--tests",
          description:
            "Apex tests to run when --test-level is RunSpecifiedTests",
          args: { name: "tests" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "devops:promotion:validate",
      description: "Validate work item promotion for a pipeline stage",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-t", "--target-stage-id"],
          description:
            "ID of the target pipeline stage to validate promotion to",
          args: { name: "target-stage-id" },
          isRequired: true,
        },
        {
          name: ["-i", "--work-item-id"],
          description:
            "ID of a work item to validate for promotion. Specify multiple times for multiple work items",
          args: { name: "work-item-id" },
          isRepeatable: true,
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:request:status",
      description: "Get the status of a request",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--request-token"],
          description: "Request token from the promote response",
          args: { name: "request-token" },
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:review:create",
      description: "Create a pull request for a work item branch",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--work-item-name"],
          description: "Name of the work item, such as WI-000001",
          args: { name: "work-item-name" },
        },
        {
          name: ["-w", "--work-item-id"],
          description: "ID of the work item",
          args: { name: "work-item-id" },
        },
      ],
    },
    {
      name: "devops:stage:branch:add",
      description: "Add a source code repository branch to a pipeline stage",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--pipeline-id",
          description: "ID of the pipeline that contains the stage",
          args: { name: "pipeline-id" },
          isRequired: true,
        },
        {
          name: "--stage-id",
          description: "ID of the pipeline stage to associate the branch with",
          args: { name: "stage-id" },
          isRequired: true,
        },
        {
          name: ["-b", "--branch-name"],
          description: "Name of the repository branch to assign to the stage",
          args: { name: "branch-name" },
          isRequired: true,
        },
        {
          name: "--create-vcs-branch",
          description:
            "Create the branch in the remote repository if it doesn't already exist",
        },
        {
          name: "--force",
          description:
            "Replace the stage's existing branch. By default, the command blocks if the stage already has a branch to avoid orphaning it. With this flag, the new branch is associated and the previous branch record is removed if no other stage references it",
        },
      ],
    },
    {
      name: "devops:stage:branch:delete",
      description:
        "Delete the source code repository branch associated with a pipeline stage",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--pipeline-id",
          description:
            "ID of the pipeline that contains the stage. Used to verify the pipeline is inactive before deleting",
          args: { name: "pipeline-id" },
          isRequired: true,
        },
        {
          name: "--stage-id",
          description:
            "ID of the pipeline stage whose branch you want to delete",
          args: { name: "stage-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:stage:environment:add",
      description: "Add a Salesforce environment to a pipeline stage",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--pipeline-id",
          description: "ID of the pipeline that contains the stage",
          args: { name: "pipeline-id" },
          isRequired: true,
        },
        {
          name: "--stage-id",
          description: "ID of the pipeline stage",
          args: { name: "stage-id" },
          isRequired: true,
        },
        {
          name: ["-e", "--environment-name"],
          description: "Name of the environment",
          args: { name: "environment-name" },
          isRequired: true,
        },
        {
          name: "--org-type",
          description:
            "Type of the Salesforce org. Valid values: Production, Sandbox",
          args: { name: "org-type", suggestions: ["Production", "Sandbox"] },
          isRequired: true,
        },
        {
          name: "--no-browser",
          description:
            "Don't auto-open the browser for OAuth authentication. The redirect URL is printed for manual use",
        },
        {
          name: "--force",
          description: "Replace the stage's existing environment",
        },
      ],
    },
    {
      name: "devops:stage:environment:delete",
      description: "Delete an environment from a DevOps Center pipeline stage",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--pipeline-id",
          description:
            "ID of the pipeline. Used to verify the pipeline is inactive before deleting",
          args: { name: "pipeline-id" },
          isRequired: true,
        },
        {
          name: ["-e", "--environment-id"],
          description: "ID of the environment to delete",
          args: { name: "environment-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:work-item:combine",
      description: "Prepare work items to be combined for custom promotion",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--parent-work-item-id",
          description: "ID of the parent work item",
          args: { name: "parent-work-item-id" },
          isRequired: true,
        },
        {
          name: "--child-work-item-id",
          description: "ID of a work item to combine",
          args: { name: "child-work-item-id" },
          isRepeatable: true,
          isRequired: true,
        },
        {
          name: ["-t", "--target-stage-id"],
          description:
            "ID of the pipeline stage to promote the combined work item to",
          args: { name: "target-stage-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:work-item:create",
      description: "Create a new work item in a DevOps Center project",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-p", "--project-id"],
          description:
            "ID of the DevOps Center project to create the work item in",
          args: { name: "project-id" },
          isRequired: true,
        },
        {
          name: ["-s", "--subject"],
          description: "Subject (title) of the new work item",
          args: { name: "subject" },
          isRequired: true,
        },
        {
          name: ["-d", "--description"],
          description:
            "Description of the new work item; if not specified, the description is blank",
          args: { name: "description" },
        },
      ],
    },
    {
      name: "devops:work-item:list",
      description: "List all work items for a DevOps Center project",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-p", "--project-id"],
          description: "ID of the DevOps Center project to list work items for",
          args: { name: "project-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:work-item:prepare",
      description:
        "Prepare a work item for one-off promotion between pipeline stages",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--work-item-id"],
          description: "ID of the work item to prepare for one-off promotion",
          args: { name: "work-item-id" },
          isRequired: true,
        },
        {
          name: ["-t", "--target-stage-id"],
          description: "ID of the pipeline stage to promote the work item to",
          args: { name: "target-stage-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "devops:work-item:update",
      description: "Update a work item in DevOps Center",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--work-item-name"],
          description: "Name of the work item, such as WI-000001",
          args: { name: "work-item-name" },
        },
        {
          name: ["-w", "--work-item-id"],
          description: "ID of the work item",
          args: { name: "work-item-id" },
        },
        {
          name: "--subject",
          description: "New subject for the work item",
          args: { name: "subject" },
        },
        {
          name: "--description",
          description: "New description for the work item",
          args: { name: "description" },
        },
        {
          name: "--status",
          description:
            'New status for the work item. Allowed values: "In Progress", "Ready to Promote"',
          args: {
            name: "status",
            suggestions: ["In Progress", "Ready to Promote"],
          },
        },
      ],
    },
    {
      name: "doctor",
      description:
        "Gather CLI configuration data and run diagnostic tests to discover and report potential problems in your environment",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-c", "--command"],
          description:
            "Command to run in debug mode; results are written to a log file",
          args: { name: "command" },
        },
        {
          name: ["-p", "--plugin"],
          description: "Specific plugin on which to run diagnostics",
          args: { name: "plugin" },
        },
        {
          name: ["-d", "-o", "--output-dir", "--outputdir"],
          description:
            "Directory to save all created files rather than the current working directory",
          args: { name: "output-dir" },
        },
        {
          name: ["-i", "--create-issue", "--createissue"],
          description:
            "Create a new issue on our GitHub repo and attach all diagnostic results",
        },
        loglevelFlag,
      ],
    },
    {
      name: "flow:get:log",
      description: "Display test results for a specific asynchronous test run",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--log-id"],
          description: "ID of the specific log to display",
          args: { name: "log-id" },
        },
        {
          name: ["-n", "--number"],
          description: "Number of the most recent logs to display",
          args: { name: "number" },
        },
        {
          name: ["-d", "--output-dir"],
          description: "Directory in which to store test result files",
          args: { name: "output-dir" },
        },
      ],
      hidden: true,
    },
    {
      name: "flow:get:test",
      description: "Display test results for a specific asynchronous test run",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-i", "--test-run-id"],
          description: "ID of the test run",
          args: { name: "test-run-id" },
          isRequired: true,
        },
        {
          name: ["-c", "--code-coverage"],
          description: "Retrieve code coverage results",
        },
        {
          name: "--detailed-coverage",
          description: "Not available for flow tests",
          dependsOn: ["--code-coverage"],
        },
        {
          name: ["-d", "--output-dir"],
          description: "Directory in which to store test result files",
          args: { name: "output-dir" },
        },
        {
          name: ["-r", "--result-format"],
          description: "Format of the test results",
          args: {
            name: "result-format",
            suggestions: ["human", "tap", "junit", "json"],
          },
        },
        {
          name: "--concise",
          description:
            "Display only failed test results; works with human-readable output only",
        },
      ],
    },
    {
      name: "flow:run:test",
      description: "Invoke flow tests in an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-r", "--result-format"],
          description: "Format of the test results",
          args: {
            name: "result-format",
            suggestions: ["human", "tap", "junit", "json"],
          },
        },
        {
          name: "--concise",
          description:
            "Display only failed test results; works with human-readable output only",
        },
        {
          name: ["-d", "--output-dir"],
          description: "Directory in which to store test result files",
          args: { name: "output-dir" },
        },
        {
          name: ["-c", "--code-coverage"],
          description: "Retrieve code coverage results",
        },
        {
          name: ["-y", "--synchronous"],
          description:
            "Run flow tests for one flow synchronously; if not specified, tests are run asynchronously",
        },
        {
          name: ["-l", "--test-level"],
          description: "Level of tests to run; default is RunLocalTests",
          args: {
            name: "test-level",
            suggestions: [
              "RunLocalTests",
              "RunAllTestsInOrg",
              "RunSpecifiedTests",
            ],
          },
        },
        {
          name: ["-n", "--class-names", "--classnames"],
          description: "Flow names that contain flow tests to run",
          args: { name: "class-names" },
          isRepeatable: true,
          exclusiveOn: ["--suite-names", "--tests"],
        },
        {
          name: ["-s", "--suite-names", "--suitenames"],
          description: "Not available for flow tests",
          args: { name: "suite-names" },
          isRepeatable: true,
          exclusiveOn: ["--class-names", "--tests"],
        },
        {
          name: ["-t", "--tests"],
          description: "Flow test names to run",
          args: { name: "tests" },
          isRepeatable: true,
          exclusiveOn: ["--class-names", "--suite-names"],
        },
      ],
    },
    {
      name: "force:data:bulk:delete",
      description:
        "Bulk delete records from an org using a CSV file. Uses Bulk API 1.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-f", "--file", "--csvfile"],
          description:
            "CSV file that contains the IDs of the records to delete",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: ["-s", "--sobject", "--sobjecttype"],
          description:
            "API name of the Salesforce object, either standard or custom, that you want to delete records from",
          args: { name: "sobject" },
          isRequired: true,
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the command to complete before displaying the results",
          args: { name: "wait" },
        },
      ],
    },
    {
      name: "force:data:bulk:status",
      description:
        "View the status of a bulk data load job or batch. Uses Bulk API 1.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-b", "--batch-id", "--batchid"],
          description:
            "ID of the batch whose status you want to view; you must also specify the job ID",
          args: { name: "batch-id" },
        },
        {
          name: ["-i", "--job-id", "--jobid"],
          description: "ID of the job whose status you want to view",
          args: { name: "job-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "force:data:bulk:upsert",
      description:
        "Bulk upsert records to an org from a CSV file. Uses Bulk API 1.0",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-i", "--external-id", "--externalid"],
          description: "Name of the external ID field, or the Id field",
          args: { name: "external-id" },
          isRequired: true,
        },
        {
          name: ["-f", "--file", "--csvfile"],
          description: "CSV file that contains the records to upsert",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: ["-s", "--sobject", "--sobjecttype"],
          description:
            "API name of the Salesforce object, either standard or custom, that you want to upsert records to",
          args: { name: "sobject" },
          isRequired: true,
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the command to complete before displaying the results",
          args: { name: "wait" },
        },
        { name: ["-r", "--serial"], description: "Run batches in serial mode" },
      ],
    },
    {
      name: "force:lightning:lwc:test:create",
      description:
        "Creates a Lightning web component test file with boilerplate code inside a __tests__ directory",
      options: [
        jsonFlag,
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
          args: {
            name: "loglevel",
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-f", "--filepath"],
          description:
            "Path to Lightning web component .js file to create a test for",
          args: { name: "filepath" },
          isRequired: true,
        },
      ],
    },
    {
      name: "force:lightning:lwc:test:run",
      description: "Invokes Lightning Web Components Jest unit tests",
      options: [
        jsonFlag,
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
          args: {
            name: "loglevel",
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Run tests in debug mode",
          exclusiveOn: ["--watch"],
        },
        {
          name: "--watch",
          description: "Run tests in watch mode",
          exclusiveOn: ["--debug"],
        },
      ],
      args: { name: "passthrough", isOptional: true },
    },
    {
      name: "force:lightning:lwc:test:setup",
      description:
        "Install Jest unit testing tools for Lightning Web Components",
      options: [
        jsonFlag,
        {
          name: "--loglevel",
          description: "Logging level for this command invocation",
          args: {
            name: "loglevel",
            suggestions: [
              "trace",
              "debug",
              "info",
              "warn",
              "error",
              "fatal",
              "TRACE",
              "DEBUG",
              "INFO",
              "WARN",
              "ERROR",
              "FATAL",
            ],
          },
        },
      ],
    },
    {
      name: "force:user:password:generate",
      description: "Generate a random password for scratch org users",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-o", "--on-behalf-of", "--onbehalfof"],
          description:
            'Comma-separated list of usernames or aliases to assign the password to; must have been created locally with the "org create user" command',
          args: { name: "on-behalf-of" },
          isRepeatable: true,
        },
        {
          name: ["-l", "--length"],
          description:
            "Number of characters in the generated password; valid values are between 20 and 1000. Default value is 20",
          args: { name: "length" },
        },
        {
          name: ["-c", "--complexity"],
          description:
            "Level of password complexity or strength; the higher the value, the stronger the password",
          args: { name: "complexity" },
        },
        {
          name: ["-u", "--target-org", "--targetusername"],
          description: "Scratch org alias or login user",
          args: { name: "target-org" },
        },
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
      hidden: true,
      deprecated: true,
    },
    {
      name: "force:user:permset:assign",
      description: "Assign a permission set to one or more org users",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--perm-set-name", "--permsetname"],
          description: "Permission set to assign",
          args: { name: "perm-set-name" },
          isRepeatable: true,
          isRequired: true,
        },
        {
          name: ["-o", "--on-behalf-of", "--onbehalfof"],
          description: "Username or alias to assign the permission set to",
          args: { name: "on-behalf-of" },
          isRepeatable: true,
        },
        {
          name: ["-u", "--target-org", "--targetusername"],
          description:
            "Username or alias of the target org. Not required if the `target-org` configuration variable is already set",
          args: { name: "target-org" },
        },
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
      hidden: true,
      deprecated: true,
    },
    {
      name: "force:user:permsetlicense:assign",
      description: "Assign a permission set license to one or more org users",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--perm-set-license", "--psl"],
          description: "Name of the permission set license to assign",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-b", "--on-behalf-of", "--onbehalfof"],
          description:
            "Usernames or alias to assign the permission set license to",
          args: { name: "on-behalf-of" },
          isRepeatable: true,
        },
        {
          name: ["-u", "--target-org", "--targetusername"],
          description:
            "Username or alias of the target org. Not required if the `target-org` configuration variable is already set",
          args: { name: "target-org" },
        },
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
      hidden: true,
      deprecated: true,
    },
    {
      name: "help",
      description: "Display help for sfdx",
      options: [
        {
          name: ["-n", "--nested-commands"],
          description: "Include all nested commands in the output",
        },
      ],
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: ["info:releasenotes:display", "whatsnew"],
      description: "Display Salesforce CLI release notes on the command line",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-v", "--version"],
          description: "CLI version or tag for which to display release notes",
          args: { name: "version" },
        },
        {
          name: "--hook",
          description:
            "This hidden parameter is used in post install or update hooks",
          hidden: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: "lightning:dev:app",
      description:
        "Preview a Lightning Experience app locally and in real-time, without deploying it",
      options: [
        flagsDirFlag,
        {
          name: ["-n", "--name"],
          description: "Name of the Lightning Experience app to preview",
          args: { name: "name" },
        },
        targetOrgFlag,
        {
          name: ["-t", "--device-type"],
          description: "Type of device to display the app preview",
          args: {
            name: "device-type",
            suggestions: ["desktop", "ios", "android"],
          },
        },
        {
          name: ["-i", "--device-id"],
          description:
            "ID of the mobile device to display the preview if device type is set to `ios` or `android`. The default value is the ID of the first available mobile device",
          args: { name: "device-id" },
        },
        apiVersionFlag,
      ],
    },
    {
      name: "lightning:dev:component",
      description: "Preview LWC components in isolation",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name"],
          description: "Name of a component to preview",
          args: { name: "name" },
        },
        apiVersionFlag,
        {
          name: ["-c", "--client-select"],
          description: "Launch component preview without selecting a component",
        },
        targetOrgFlag,
      ],
    },
    {
      name: "lightning:dev:site",
      description:
        "Preview an Experience Builder site locally and in real-time, without deploying it",
      options: [
        flagsDirFlag,
        {
          name: ["-n", "--name"],
          description:
            "Name of the Experience Builder site to preview. It must match a site name from the current org",
          args: { name: "name" },
        },
        targetOrgFlag,
        apiVersionFlag,
      ],
    },
    {
      name: "logic:get:test",
      description: "Get the results of a test run",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-i", "--test-run-id", "--testrunid"],
          description: "ID of the test run",
          args: { name: "test-run-id" },
          isRequired: true,
        },
        {
          name: ["-c", "--code-coverage", "--codecoverage"],
          description: "Retrieve code coverage results",
        },
        {
          name: "--detailed-coverage",
          description: "Display detailed code coverage per test",
          dependsOn: ["--code-coverage"],
        },
        {
          name: ["-d", "--output-dir", "--outputdir", "--output-directory"],
          description: "Directory in which to store test result files",
          args: { name: "output-dir" },
        },
        {
          name: ["-r", "--result-format", "--resultformat"],
          description: "Format of the test results",
          args: {
            name: "result-format",
            suggestions: ["human", "tap", "junit", "json"],
          },
        },
        {
          name: "--concise",
          description:
            "Display only failed test results; works with human-readable output only",
        },
      ],
    },
    {
      name: "logic:run:test",
      description: "Invoke tests for Apex and Flows in an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-c", "--code-coverage", "--codecoverage"],
          description: "Retrieve code coverage results",
        },
        {
          name: ["-d", "--output-dir", "--outputdir", "--output-directory"],
          description: "Directory in which to store test run files",
          args: { name: "output-dir" },
        },
        {
          name: ["-l", "--test-level", "--testlevel"],
          description: "Level of tests to run; default is RunLocalTests",
          args: {
            name: "test-level",
            suggestions: [
              "RunLocalTests",
              "RunAllTestsInOrg",
              "RunSpecifiedTests",
            ],
          },
        },
        {
          name: ["-n", "--class-names", "--classnames"],
          description: "Apex test class names to run; default is all classes",
          args: { name: "class-names" },
          isRepeatable: true,
          exclusiveOn: ["--suite-names", "--tests", "--test-category"],
        },
        {
          name: ["-r", "--result-format", "--resultformat"],
          description: "Format of the test results",
          args: {
            name: "result-format",
            suggestions: ["human", "tap", "junit", "json"],
          },
        },
        {
          name: ["-s", "--suite-names", "--suitenames"],
          description: "Apex test suite names to run",
          args: { name: "suite-names" },
          isRepeatable: true,
          exclusiveOn: ["--class-names", "--tests", "--test-category"],
        },
        {
          name: ["-t", "--tests"],
          description:
            "Comma-separated list of test names to run. Can include Apex test classes and Flow tests",
          args: { name: "tests" },
          isRepeatable: true,
          exclusiveOn: ["--class-names", "--suite-names", "--test-category"],
        },
        {
          name: ["-w", "--wait"],
          description:
            "Sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently",
          args: { name: "wait" },
        },
        {
          name: ["-y", "--synchronous"],
          description:
            "Runs test methods from a single Apex class synchronously; if not specified, tests are run asynchronously",
        },
        {
          name: ["-v", "--detailed-coverage", "--detailedcoverage"],
          description: "Display detailed code coverage per test",
          dependsOn: ["--code-coverage"],
        },
        {
          name: "--concise",
          description:
            "Display only failed test results; works with human-readable output only",
        },
        {
          name: "--test-category",
          description: "Category of tests to run, such as Apex or Flow",
          args: { name: "test-category", suggestions: ["Apex", "Flow"] },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "node:info",
      description:
        "Returns the path to node and npx files bundled by the Salesforce CLI",
      options: [jsonFlag, flagsDirFlag],
      hidden: true,
    },
    {
      name: "org:assign:permset",
      description: "Assign a permission set to one or more org users",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--permsetname"],
          description: "Permission set to assign",
          args: { name: "name" },
          isRepeatable: true,
          isRequired: true,
        },
        {
          name: ["-b", "--on-behalf-of", "--onbehalfof"],
          description: "Username or alias to assign the permission set to",
          args: { name: "on-behalf-of" },
          isRepeatable: true,
        },
        targetOrgFlag,
        apiVersionFlag,
      ],
    },
    {
      name: "org:assign:permsetlicense",
      description: "Assign a permission set license to one or more org users",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--perm-set-license", "--psl"],
          description: "Name of the permission set license to assign",
          args: { name: "name" },
          isRepeatable: true,
          isRequired: true,
        },
        {
          name: ["-b", "--on-behalf-of", "--onbehalfof"],
          description:
            "Usernames or alias to assign the permission set license to",
          args: { name: "on-behalf-of" },
          isRepeatable: true,
        },
        targetOrgFlag,
        apiVersionFlag,
      ],
    },
    {
      name: "org:auth:show-access-token",
      description: "Show the current access token for an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        {
          name: ["-p", "--no-prompt"],
          description:
            "Skip the security warning and reveal the access token without confirmation",
        },
      ],
    },
    {
      name: "org:auth:show-sfdx-auth-url",
      description: "Show the SFDX Auth URL for an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        {
          name: ["-p", "--no-prompt"],
          description:
            "Skip the security warning and reveal the SFDX Auth URL without confirmation",
        },
      ],
    },
    {
      name: "org:auth:show-user-password",
      description: "Show the stored password for an org's user",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        {
          name: ["-p", "--no-prompt"],
          description:
            "Skip the security warning and reveal the password without confirmation",
        },
      ],
    },
    {
      name: "org:create:agent-user",
      description:
        "Create the default Salesforce user that is used to run an agent",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--base-username",
          description:
            "Base username pattern. A unique ID is appended to ensure global uniqueness of the usename",
          args: { name: "base-username" },
        },
        {
          name: "--first-name",
          description: "First name for the agent user",
          args: { name: "first-name" },
        },
        {
          name: "--last-name",
          description: "Last name for the agent user",
          args: { name: "last-name" },
        },
      ],
    },
    {
      name: ["org:create:sandbox", "env:create:sandbox"],
      description: "Create a sandbox org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-f", "--definition-file"],
          description: "Path to a sandbox definition file",
          args: { name: "definition-file" },
        },
        {
          name: ["-s", "--set-default"],
          description: "Set the sandbox org as your default org",
        },
        {
          name: ["-a", "--alias"],
          description: "Alias for the sandbox org",
          args: { name: "alias" },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the sandbox org to be ready",
          args: { name: "wait" },
          exclusiveOn: ["--async"],
        },
        {
          name: ["-i", "--poll-interval"],
          description: "Number of seconds to wait between retries",
          args: { name: "poll-interval" },
          exclusiveOn: ["--async"],
        },
        {
          name: "--async",
          description:
            "Request the sandbox creation, but don't wait for it to complete",
          exclusiveOn: ["--wait", "--poll-interval"],
        },
        {
          name: ["-n", "--name"],
          description: "Name of the sandbox org",
          args: { name: "name" },
        },
        {
          name: ["-c", "--source-sandbox-name", "--clone"],
          description: "Name of the sandbox org to clone",
          args: { name: "source-sandbox-name" },
          exclusiveOn: ["--license-type", "--source-id"],
        },
        {
          name: "--source-id",
          description: "ID of the sandbox org to clone",
          args: { name: "source-id" },
          exclusiveOn: ["--license-type", "--source-sandbox-name"],
        },
        {
          name: ["-l", "--license-type"],
          description: "Type of sandbox license",
          args: {
            name: "license-type",
            suggestions: ["Developer", "Developer_Pro", "Partial", "Full"],
          },
          exclusiveOn: ["--source-sandbox-name", "--source-id"],
        },
        {
          name: ["-o", "--target-org"],
          description:
            "Username or alias of the production org that contains the sandbox license",
          args: { name: "target-org" },
        },
        {
          name: "--no-prompt",
          description:
            "Don't prompt for confirmation about the sandbox configuration",
        },
        {
          name: "--no-track-source",
          description: "Do not use source tracking for this sandbox",
        },
      ],
    },
    {
      name: ["org:create:scratch", "env:create:scratch"],
      description: "Create a scratch org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-a", "--alias"],
          description: "Alias for the scratch org",
          args: { name: "alias" },
        },
        {
          name: "--async",
          description: "Request the org, but don't wait for it to complete",
        },
        {
          name: ["-d", "--set-default"],
          description: "Set the scratch org as your default org",
        },
        {
          name: ["-f", "--definition-file"],
          description: "Path to a scratch org definition file",
          args: { name: "definition-file" },
        },
        {
          name: ["-v", "--target-dev-hub"],
          description: "Username or alias of the Dev Hub org",
          args: { name: "target-dev-hub" },
        },
        {
          name: ["-c", "--no-ancestors"],
          description:
            "Don't include second-generation managed package (2GP) ancestors in the scratch org",
        },
        {
          name: ["-e", "--edition"],
          description:
            'Salesforce edition of the scratch org. Overrides the value of the "edition" option in the definition file, if set',
          args: {
            name: "edition",
            suggestions: [
              "developer",
              "enterprise",
              "group",
              "professional",
              "partner-developer",
              "partner-enterprise",
              "partner-group",
              "partner-professional",
            ],
          },
          exclusiveOn: ["--snapshot", "--source-org"],
        },
        {
          name: ["-s", "--snapshot"],
          description:
            'Name of the snapshot to use when creating this scratch org. Overrides the value of the "snapshot" option in the defintion file, if set',
          args: { name: "snapshot" },
          exclusiveOn: ["--edition", "--source-org"],
        },
        {
          name: ["-m", "--no-namespace"],
          description:
            "Create the scratch org with no namespace, even if the Dev Hub has a namespace",
        },
        {
          name: ["-y", "--duration-days"],
          description: "Number of days before the org expires",
          args: { name: "duration-days" },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the scratch org to be ready",
          args: { name: "wait" },
        },
        apiVersionFlag,
        {
          name: ["-i", "--client-id"],
          description: "Consumer key of the Dev Hub connected app",
          args: { name: "client-id" },
        },
        {
          name: ["-t", "--track-source"],
          description:
            "Use source tracking for this scratch org. Set --no-track-source to disable source tracking",
        },
        { name: "--no-track-source", description: "Negate --track-source" },
        {
          name: "--username",
          description:
            'Username of the scratch org admin user. Overrides the value of the "username" option in the definition file, if set',
          args: { name: "username" },
        },
        {
          name: "--description",
          description:
            'Description of the scratch org in the Dev Hub. Overrides the value of the "description" option in the definition file, if set',
          args: { name: "description" },
        },
        {
          name: "--name",
          description:
            'Name of the org, such as "Acme Company". Overrides the value of the "orgName" option in the definition file, if set',
          args: { name: "name" },
        },
        {
          name: "--release",
          description:
            "Release of the scratch org as compared to the Dev Hub release",
          args: { name: "release", suggestions: ["preview", "previous"] },
        },
        {
          name: "--admin-email",
          description:
            'Email address that will be applied to the org\'s admin user. Overrides the value of the "adminEmail" option in the definition file, if set',
          args: { name: "admin-email" },
        },
        {
          name: "--source-org",
          description:
            '15-character ID of the org shape that the new scratch org is based on. Overrides the value of the "sourceOrg" option in the definition file, if set',
          args: { name: "source-org" },
          exclusiveOn: ["--edition", "--snapshot"],
        },
      ],
    },
    {
      name: ["org:create:shape", "force:org:shape:create"],
      description:
        "Create a scratch org configuration (shape) based on the specified source org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: ["org:create:snapshot", "force:org:snapshot:create"],
      description: "Create a snapshot of a scratch org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-v", "--target-dev-hub", "--targetdevhubusername"],
          description:
            "Username or alias of the Dev Hub org. Not required if the `target-dev-hub` configuration variable is already set",
          args: { name: "target-dev-hub" },
        },
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-o", "--source-org", "--sourceorg"],
          description:
            "ID or locally authenticated username or alias of scratch org to snapshot",
          args: { name: "source-org" },
          isRequired: true,
        },
        {
          name: ["-n", "--name", "--snapshotname"],
          description: "Unique name of snapshot",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-d", "--description"],
          description: "Description of snapshot",
          args: { name: "description" },
        },
      ],
    },
    {
      name: ["org:create:user", "force:user:create"],
      description: "Create a user for a scratch org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-a", "--set-alias", "--setalias"],
          description:
            "Set an alias for the created username to reference in other CLI commands",
          args: { name: "set-alias" },
        },
        {
          name: ["-f", "--definition-file", "--definitionfile"],
          description:
            "File path to a user definition file for customizing the new user",
          args: { name: "definition-file" },
        },
        {
          name: ["-s", "--set-unique-username", "--setuniqueusername"],
          description:
            "Force the username, if specified in the definition file or at the command line, to be unique by appending the org ID",
        },
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
      args: { name: "field=value", isOptional: true, isVariadic: true },
    },
    {
      name: ["org:delete:sandbox", "env:delete:sandbox"],
      description: "Delete a sandbox",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-o", "-u", "--target-org", "--targetusername"],
          description:
            "Username or alias of the target org. Not required if the `target-org` configuration variable is already set",
          args: { name: "target-org" },
          isRequired: true,
        },
        {
          name: ["-p", "--no-prompt"],
          description: "Don't prompt the user to confirm the deletion",
        },
      ],
    },
    {
      name: ["org:delete:scratch", "env:delete:scratch"],
      description: "Delete a scratch org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-o", "-u", "--target-org", "--targetusername"],
          description:
            "Username or alias of the target org. Not required if the `target-org` configuration variable is already set",
          args: { name: "target-org" },
          isRequired: true,
        },
        {
          name: ["-p", "--no-prompt"],
          description: "Don't prompt the user to confirm the deletion",
        },
      ],
    },
    {
      name: ["org:delete:shape", "force:org:shape:delete"],
      description: "Delete all org shapes for a target org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-p", "--no-prompt", "--noprompt"],
          description: "Don't prompt for confirmation",
        },
      ],
    },
    {
      name: ["org:delete:snapshot", "force:org:snapshot:delete"],
      description: "Delete a scratch org snapshot",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-v", "--target-dev-hub", "--targetdevhubusername"],
          description:
            "Username or alias of the Dev Hub org. Not required if the `target-dev-hub` configuration variable is already set",
          args: { name: "target-dev-hub" },
        },
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-s", "--snapshot"],
          description: "Name or ID of snapshot to delete",
          args: { name: "snapshot" },
          isRequired: true,
        },
        {
          name: ["-p", "--no-prompt"],
          description: "Don't prompt the user to confirm the deletion",
        },
      ],
    },
    {
      name: "org:disable:tracking",
      description:
        "Prevent Salesforce CLI from tracking changes in your source files between your project and an org",
      options: [jsonFlag, flagsDirFlag, targetOrgFlag],
    },
    {
      name: ["org:display", "force:org:display"],
      description: "Display information about an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        { name: "--verbose", description: "Display the sfdxAuthUrl property" },
        loglevelFlag,
      ],
    },
    {
      name: ["org:display:user", "force:user:display"],
      description: "Display information about a Salesforce user",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: "org:enable:tracking",
      description:
        "Allow Salesforce CLI to track changes in your source files between your project and an org",
      options: [jsonFlag, flagsDirFlag, targetOrgFlag],
    },
    {
      name: "org:generate:password",
      description: "Generate a random password for scratch org users",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-b", "--on-behalf-of", "--onbehalfof"],
          description:
            'Comma-separated list of usernames or aliases to assign the password to; must have been created locally with the "org create user" command',
          args: { name: "on-behalf-of" },
          isRepeatable: true,
        },
        {
          name: ["-l", "--length"],
          description:
            "Number of characters in the generated password; valid values are between 20 and 1000. Default value is 20",
          args: { name: "length" },
        },
        {
          name: ["-c", "--complexity"],
          description:
            "Level of password complexity or strength; the higher the value, the stronger the password",
          args: { name: "complexity" },
        },
        targetOrgFlag,
        apiVersionFlag,
      ],
    },
    {
      name: ["org:get:snapshot", "force:org:snapshot:get"],
      description: "Get details about a scratch org snapshot",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-v", "--target-dev-hub", "--targetdevhubusername"],
          description:
            "Username or alias of the Dev Hub org. Not required if the `target-dev-hub` configuration variable is already set",
          args: { name: "target-dev-hub" },
        },
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-s", "--snapshot"],
          description: "Name or ID of snapshot to retrieve",
          args: { name: "snapshot" },
          isRequired: true,
        },
      ],
    },
    {
      name: ["org:list", "force:org:list"],
      description: "List all orgs you’ve created or authenticated to",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: "--verbose",
          description: "List more information about each org",
        },
        {
          name: "--all",
          description:
            "Include expired, deleted, and unknown-status scratch orgs",
        },
        {
          name: "--clean",
          description:
            'Remove all local org authorizations for non-active scratch orgs. Use "org logout" to remove non-scratch orgs',
        },
        {
          name: ["-p", "--no-prompt", "--noprompt"],
          description: "Don't prompt for confirmation",
        },
        {
          name: ["--skip-connection-status", "--skipconnectionstatus"],
          description:
            "Skip retrieving the connection status of non-scratch orgs",
        },
        loglevelFlag,
      ],
    },
    {
      name: ["org:list:auth", "force:auth:list", "auth:list"],
      description:
        "List authorization information about the orgs you created or logged into",
      options: [jsonFlag, flagsDirFlag, loglevelFlag],
    },
    {
      name: [
        "org:list:limits",
        "force:limits:api:display",
        "limits:api:display",
      ],
      description: "Display information about limits in your org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: ["org:list:metadata", "force:mdapi:listmetadata"],
      description:
        "List the metadata components and properties of a specified type",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-a", "--api-version", "--apiversion"],
          description:
            "API version to use; default is the most recent API version",
          args: { name: "api-version" },
        },
        loglevelFlag,
        targetOrgLegacyFlag,
        {
          name: ["-f", "--output-file", "--resultfile"],
          description: "Pathname of the file in which to write the results",
          args: { name: "output-file" },
        },
        {
          name: ["-m", "--metadata-type", "--metadatatype"],
          description:
            "Metadata type to be retrieved, such as CustomObject; metadata type names are case-sensitive",
          args: { name: "metadata-type" },
          isRequired: true,
        },
        {
          name: "--folder",
          description:
            "Folder associated with the component; required for components that use folders; folder names are case-sensitive",
          args: { name: "folder" },
        },
      ],
    },
    {
      name: ["org:list:metadata-types", "force:mdapi:describemetadata"],
      description:
        "Display details about the metadata types that are enabled for your org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-a", "--api-version", "--apiversion"],
          description:
            "API version to use; default is the most recent API version",
          args: { name: "api-version" },
        },
        loglevelFlag,
        targetOrgLegacyFlag,
        {
          name: ["-f", "--output-file", "--resultfile"],
          description: "Pathname of the file in which to write the results",
          args: { name: "output-file" },
        },
        {
          name: ["-k", "--filter-known", "--filterknown"],
          description:
            "Filter the known metadata types from the result to display only the types not yet fully supported by Salesforce CLI",
          hidden: true,
        },
      ],
    },
    {
      name: ["org:list:shape", "force:org:shape:list"],
      description: "List all org shapes you’ve created",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: "--verbose",
          description: "List more information about each org shape",
          hidden: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: ["org:list:snapshot", "force:org:snapshot:list"],
      description: "List scratch org snapshots",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-v", "--target-dev-hub", "--targetdevhubusername"],
          description:
            "Username or alias of the Dev Hub org. Not required if the `target-dev-hub` configuration variable is already set",
          args: { name: "target-dev-hub" },
        },
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: [
        "org:list:sobject:record-counts",
        "force:limits:recordcounts:display",
        "limits:recordcounts:display",
      ],
      description:
        "Display record counts for the specified standard or custom objects",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-s", "--sobject", "--sobjecttype"],
          description:
            "API name of the standard or custom object for which to display record counts",
          args: { name: "sobject" },
          isRepeatable: true,
        },
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: ["org:list:users", "force:user:list"],
      description: "List all locally-authenticated users of an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: [
        "org:login:access-token",
        "force:auth:accesstoken:store",
        "auth:accesstoken:store",
      ],
      description: "Authorize an org using an existing Salesforce access token",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-r", "--instance-url", "--instanceurl"],
          description: "URL of the instance that the org lives on",
          args: { name: "instance-url" },
          isRequired: true,
        },
        {
          name: [
            "-d",
            "--set-default-dev-hub",
            "--setdefaultdevhub",
            "--setdefaultdevhubusername",
          ],
          description: "Set the authenticated org as the default Dev Hub",
        },
        {
          name: ["-s", "--set-default", "--setdefaultusername"],
          description:
            "Set the authenticated org as the default that all org-related commands run against",
        },
        {
          name: ["-a", "--alias", "--setalias"],
          description: "Alias for the org",
          args: { name: "alias" },
        },
        {
          name: ["-p", "--no-prompt", "--noprompt"],
          description: "Don't prompt for confirmation",
        },
        loglevelFlag,
      ],
    },
    {
      name: ["org:login:jwt", "force:auth:jwt:grant", "auth:jwt:grant"],
      description: "Log in to a Salesforce org using a JSON web token (JWT)",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-o", "-u", "--username"],
          description: "Username of the user logging in",
          args: { name: "username" },
          isRequired: true,
        },
        {
          name: ["-f", "--jwt-key-file", "--jwtkeyfile", "--keyfile"],
          description: "Path to a file containing the private key",
          args: { name: "jwt-key-file" },
          isRequired: true,
        },
        {
          name: ["-i", "--client-id", "--clientid"],
          description:
            "OAuth client ID (also called consumer key) of your custom connected app",
          args: { name: "client-id" },
          isRequired: true,
        },
        {
          name: ["-r", "-l", "--instance-url", "--instanceurl"],
          description: "URL of the instance that the org lives on",
          args: { name: "instance-url" },
        },
        {
          name: [
            "-d",
            "-v",
            "--set-default-dev-hub",
            "--setdefaultdevhub",
            "--setdefaultdevhubusername",
          ],
          description: "Set the authenticated org as the default Dev Hub",
        },
        {
          name: ["-s", "--set-default", "--setdefaultusername"],
          description:
            "Set the authenticated org as the default that all org-related commands run against",
        },
        {
          name: ["-a", "--alias", "--setalias"],
          description: "Alias for the org",
          args: { name: "alias" },
        },
        {
          name: ["-p", "--no-prompt", "--noprompt"],
          description: "Don't prompt for confirmation",
          hidden: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: [
        "org:login:sfdx-url",
        "force:auth:sfdxurl:store",
        "auth:sfdxurl:store",
      ],
      description:
        "Authorize an org using a Salesforce DX authorization URL stored in a file or through standard input (stdin)",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-f", "--sfdx-url-file", "--sfdxurlfile"],
          description:
            "Path to a file that contains the Salesforce DX authorization URL",
          args: { name: "sfdx-url-file" },
        },
        {
          name: ["-u", "--sfdx-url-stdin", "--sfdxurlstdin"],
          description:
            "Pipe the Salesforce DX authorization URL through standard input (stdin)",
          args: { name: "sfdx-url-stdin" },
        },
        {
          name: [
            "-d",
            "--set-default-dev-hub",
            "--setdefaultdevhub",
            "--setdefaultdevhubusername",
          ],
          description: "Set the authenticated org as the default Dev Hub",
        },
        {
          name: ["-s", "--set-default", "--setdefaultusername"],
          description:
            "Set the authenticated org as the default that all org-related commands run against",
        },
        {
          name: ["-a", "--alias", "--setalias"],
          description: "Alias for the org",
          args: { name: "alias" },
        },
        {
          name: ["-p", "--no-prompt", "--noprompt"],
          description: "Don't prompt for confirmation",
          hidden: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: ["org:login:web", "force:auth:web:login", "auth:web:login"],
      description: "Log in to a Salesforce org using the web server flow",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-b", "--browser"],
          description: "Browser in which to open the org",
          args: { name: "browser", suggestions: ["chrome", "edge", "firefox"] },
        },
        {
          name: ["-i", "--client-id", "--clientid"],
          description:
            "OAuth client ID (also called consumer key) of your custom connected app",
          args: { name: "client-id" },
        },
        {
          name: ["-r", "-l", "--instance-url", "--instanceurl"],
          description: "URL of the instance that the org lives on",
          args: { name: "instance-url" },
        },
        {
          name: [
            "-d",
            "-v",
            "--set-default-dev-hub",
            "--setdefaultdevhubusername",
            "--setdefaultdevhub",
          ],
          description: "Set the authenticated org as the default Dev Hub",
        },
        {
          name: ["-s", "--set-default", "--setdefaultusername"],
          description:
            "Set the authenticated org as the default that all org-related commands run against",
        },
        {
          name: ["-a", "--alias", "--setalias"],
          description: "Alias for the org",
          args: { name: "alias" },
        },
        {
          name: ["-p", "--no-prompt", "--noprompt"],
          description: "Don't prompt for confirmation",
          hidden: true,
        },
        loglevelFlag,
        {
          name: ["-c", "--client-app"],
          description:
            "Name to give to the link between the connected app or external client and the already-authenticated user. You can specify any string you want. Must be used with --username",
          args: { name: "client-app" },
          dependsOn: ["--username"],
        },
        {
          name: "--username",
          description:
            "Username of the already-authenticated user to link to the connected app or external client app. Must be used with --client-app",
          args: { name: "username" },
          dependsOn: ["--client-app"],
        },
        {
          name: "--scopes",
          description:
            'Authentication (OAuth) scopes to request. Use the scope\'s short name; specify multiple scopes using just one flag instance and separated by spaces: --scopes "sfap_api chatbot_api"',
          args: { name: "scopes" },
        },
      ],
    },
    {
      name: ["org:logout", "force:auth:logout", "auth:logout"],
      description: "Log out of a Salesforce org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-o", "-u", "--target-org", "--targetusername"],
          description: "Username or alias of the target org",
          args: { name: "target-org" },
        },
        {
          name: ["-c", "--client-app"],
          description: "Client app to log out of",
          args: { name: "client-app" },
          dependsOn: ["--target-org"],
        },
        {
          name: ["-a", "--all"],
          description: "Include all authenticated orgs",
          exclusiveOn: ["--target-org"],
        },
        {
          name: ["-p", "--no-prompt", "--noprompt"],
          description: "Don't prompt for confirmation",
        },
        loglevelFlag,
      ],
    },
    {
      name: ["org:open", "force:org:open", "force:source:open"],
      description:
        "Open your default scratch org, or another specified org, in a browser",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        {
          name: "--private",
          description:
            "Open the org in the default browser using private (incognito) mode",
          exclusiveOn: ["--url-only", "--browser"],
        },
        {
          name: ["-b", "--browser"],
          description: "Browser where the org opens",
          args: { name: "browser", suggestions: ["chrome", "edge", "firefox"] },
          exclusiveOn: ["--url-only", "--private"],
        },
        {
          name: ["-p", "--path"],
          description: "Navigation URL path to open a specific page",
          args: { name: "path" },
          exclusiveOn: ["--source-file"],
        },
        {
          name: ["-r", "--url-only", "--urlonly"],
          description: "Display navigation URL, but don’t launch browser",
        },
        loglevelFlag,
        {
          name: ["-f", "--source-file", "--sourcefile"],
          description:
            "Path to ApexPage, FlexiPage, Flow, or Agent metadata to open in the associated Builder",
          args: { name: "source-file" },
          exclusiveOn: ["--path"],
        },
      ],
    },
    {
      name: "org:open:agent",
      description:
        "Open an agent in your org's Agentforce Builder UI in a browser",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: ["-n", "--api-name"],
          description:
            "API name, also known as developer name, of the agent you want to open in the org's Agentforce Builder UI",
          args: { name: "api-name" },
        },
        {
          name: "--private",
          description:
            "Open the agent in the default browser using private (incognito) mode",
          exclusiveOn: ["--url-only", "--browser"],
        },
        {
          name: ["-b", "--browser"],
          description: "Browser where the org opens",
          args: { name: "browser", suggestions: ["chrome", "edge", "firefox"] },
          exclusiveOn: ["--url-only", "--private"],
        },
        {
          name: ["-r", "--url-only", "--urlonly"],
          description: "Display navigation URL, but don’t launch browser",
        },
        {
          name: "--authoring-bundle",
          description:
            "API name of the agent's authoring bundle to open in Agentforce Builder",
          args: { name: "authoring-bundle" },
        },
        {
          name: "--version",
          description:
            "Version number of the agent to open in Agentforce Builder. If not specified, the highest version is opened by default",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "org:open:authoring-bundle",
      description:
        "Open your org in Agentforce Studio, specifically in the list view showing the list of agents",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--private",
          description:
            "Open the org in the default browser using private (incognito) mode",
          exclusiveOn: ["--url-only", "--browser"],
        },
        {
          name: ["-b", "--browser"],
          description: "Browser where the org opens",
          args: { name: "browser", suggestions: ["chrome", "edge", "firefox"] },
          exclusiveOn: ["--url-only", "--private"],
        },
        {
          name: ["-r", "--url-only", "--urlonly"],
          description: "Display navigation URL, but don't launch browser",
        },
      ],
      deprecated: true,
    },
    {
      name: "org:refresh:sandbox",
      description: "Refresh a sandbox org using the sandbox name",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: "--no-auto-activate",
          description:
            "Disable auto-activation of the sandbox after a successful refresh",
        },
        {
          name: ["-w", "--wait"],
          description: "Number of minutes to poll for sandbox refresh status",
          args: { name: "wait" },
          exclusiveOn: ["--async"],
        },
        {
          name: ["-i", "--poll-interval"],
          description:
            "Number of seconds to wait between status polling requests",
          args: { name: "poll-interval" },
          exclusiveOn: ["--async"],
        },
        {
          name: "--source-sandbox-name",
          description:
            "Name of the sandbox org that becomes the new source org for the refreshed sandbox",
          args: { name: "source-sandbox-name" },
          exclusiveOn: ["--source-id"],
        },
        {
          name: "--source-id",
          description:
            "ID of the sandbox org that becomes the new source org for the refreshed sandbox",
          args: { name: "source-id" },
          exclusiveOn: ["--source-sandbox-name"],
        },
        {
          name: "--async",
          description:
            "Request the sandbox refresh, but don't wait for it to complete",
          exclusiveOn: ["--wait", "--poll-interval"],
        },
        {
          name: ["-n", "--name"],
          description:
            "Name of the existing sandbox org in your production org that you want to refresh",
          args: { name: "name" },
        },
        {
          name: ["-f", "--definition-file"],
          description:
            "Path to a sandbox definition file for overriding its configuration when you refresh it",
          args: { name: "definition-file" },
        },
        {
          name: ["-o", "--target-org"],
          description:
            "Username or alias of the production org that contains the sandbox license",
          args: { name: "target-org" },
        },
        {
          name: "--no-prompt",
          description:
            "Don't prompt for confirmation about the sandbox refresh",
        },
      ],
    },
    {
      name: ["org:resume:sandbox", "env:resume:sandbox"],
      description:
        "Check the status of a sandbox creation, and log in to it if it's ready",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the sandbox org to be ready",
          args: { name: "wait" },
        },
        {
          name: ["-n", "--name"],
          description: "Name of the sandbox org",
          args: { name: "name" },
          exclusiveOn: ["--job-id"],
        },
        {
          name: ["-i", "--job-id"],
          description:
            "Job ID of the incomplete sandbox creation that you want to check the status of",
          args: { name: "job-id" },
          exclusiveOn: ["--name"],
        },
        {
          name: ["-l", "--use-most-recent"],
          description: "Use the most recent sandbox create request",
        },
        {
          name: ["-o", "--target-org"],
          description:
            "Username or alias of the production org that contains the sandbox license",
          args: { name: "target-org" },
        },
      ],
    },
    {
      name: ["org:resume:scratch", "env:resume:scratch"],
      description: "Resume the creation of an incomplete scratch org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-i", "--job-id"],
          description:
            "Job ID of the incomplete scratch org create that you want to resume",
          args: { name: "job-id" },
        },
        {
          name: ["-r", "--use-most-recent"],
          description:
            "Use the job ID of the most recent incomplete scratch org",
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the scratch org to be ready",
          args: { name: "wait" },
        },
      ],
    },
    {
      name: "package:bundle:create",
      description: "Create a package bundle in the Dev Hub org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        {
          name: ["-n", "--name"],
          description: "Name of the package bundle",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-d", "--description"],
          description: "Description of the package bundle",
          args: { name: "description" },
        },
        targetDevHubFlag,
        apiVersionLegacyFlag,
      ],
      hidden: true,
    },
    {
      name: "package:bundle:delete",
      description: "Delete a package bundle",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-n", "--no-prompt"],
          description: "Don't prompt before deleting the package bundle",
        },
        {
          name: ["-b", "--bundle"],
          description:
            "ID (starts with 1Fl) or alias of the package bundle to delete",
          args: { name: "bundle" },
          isRequired: true,
        },
      ],
      hidden: true,
    },
    {
      name: "package:bundle:install",
      description:
        "Install a specific version of a package bundle in the target org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        {
          name: ["-b", "--bundle"],
          description:
            'Package bundle version to install. The valid format is BundleName@VersionNumber, such as "MyPkgBundle@0.1"',
          args: { name: "bundle" },
          isRequired: true,
        },
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        {
          name: ["-d", "--dev-hub-org"],
          description:
            "Username, alias, or ID of the Dev Hub org where the bundle was created",
          args: { name: "dev-hub-org" },
          isRequired: true,
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the installation to complete",
          args: { name: "wait" },
        },
        {
          name: "--verbose",
          description: "Display extended details about the installation",
        },
      ],
      hidden: true,
    },
    {
      name: "package:bundle:install:report",
      description:
        "Report on the status of a package bundle installation request",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        {
          name: ["-i", "--package-install-request-id"],
          description:
            "ID of the package bundle installation request to report on",
          args: { name: "package-install-request-id" },
          isRequired: true,
        },
        { name: "--verbose", description: "Show verbose output" },
      ],
      hidden: true,
    },
    {
      name: "package:bundle:installed:list",
      description: "List all installed package bundles in the target org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
      ],
      hidden: true,
    },
    {
      name: "package:bundle:list",
      description: "List all package bundles in the Dev Hub org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: "--verbose",
          description: "Display extended details about the package bundles",
        },
      ],
      hidden: true,
    },
    {
      name: "package:bundle:uninstall",
      description: "Uninstall a package bundle version from a target org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        {
          name: ["-b", "--bundle"],
          description:
            "ID (starts with 1Q8) or alias of the package bundle version to uninstall",
          args: { name: "bundle" },
          isRequired: true,
        },
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the uninstall request to complete",
          args: { name: "wait" },
        },
        {
          name: "--verbose",
          description:
            "Show additional progress information while waiting for the uninstall to finish",
        },
      ],
      hidden: true,
    },
    {
      name: "package:bundle:version:create",
      description: "Create a new package bundle version",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        {
          name: ["-b", "--bundle"],
          description:
            "Name or ID of the package bundle to create a version for",
          args: { name: "bundle" },
          isRequired: true,
        },
        {
          name: ["-d", "--description"],
          description: "Description of the package bundle version",
          args: { name: "description" },
        },
        {
          name: ["-p", "--definition-file"],
          description:
            "Path to a definition file, similar to a scratch org definition file, that contains the list of package versions to include in the bundle",
          args: { name: "definition-file" },
          isRequired: true,
        },
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the package bundle version to be created",
          args: { name: "wait" },
        },
        {
          name: "--verbose",
          description: "Show verbose output of the command execution",
        },
        {
          name: ["-n", "--version-number"],
          description:
            "Version number of the package bundle version to be created; overrides the sfdx-project.json value",
          args: { name: "version-number" },
        },
      ],
      hidden: true,
    },
    {
      name: "package:bundle:version:create:list",
      description: "List package bundle version creation requests",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-c", "--created-last-days"],
          description:
            "Number of days since the request was created, starting at 0. Use 0 for today",
          args: { name: "created-last-days" },
        },
        {
          name: ["-s", "--status"],
          description:
            "Status of the installation request, used to filter the list",
          args: {
            name: "status",
            suggestions: ["Queued", "InProgress", "Success", "Error"],
          },
        },
        {
          name: "--verbose",
          description:
            "Display additional information, such as the version name and number for each package bundle version creation request",
        },
      ],
      hidden: true,
    },
    {
      name: "package:bundle:version:create:report",
      description:
        "Report on the status of a package bundle version creation request",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-i", "--bundle-version-create-request-id"],
          description:
            "ID of the package bundle version creation request to report on",
          args: { name: "bundle-version-create-request-id" },
          isRequired: true,
        },
      ],
      hidden: true,
    },
    {
      name: "package:bundle:version:list",
      description: "List all package bundle versions in the Dev Hub org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: "--verbose",
          description:
            "Display extended details about the package bundle versions",
        },
      ],
      hidden: true,
    },
    {
      name: "package:bundle:version:report",
      description: "Retrieve details about a specific package bundle version",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-b", "--bundle-version"],
          description:
            "Name or ID of the package bundle version to retrieve details about",
          args: { name: "bundle-version" },
          isRequired: true,
        },
        {
          name: "--verbose",
          description:
            "Display extended details about the package bundle version",
        },
      ],
      hidden: true,
    },
    {
      name: ["package:convert", "force:package:convert"],
      description:
        "Convert a managed-released first-generation managed package into a second-generation managed package",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 033) of the first-generation managed package to convert",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: ["-k", "--installation-key", "--installationkey"],
          description: "Installation key for key-protected package",
          args: { name: "installation-key" },
        },
        {
          name: ["-f", "--definition-file", "--definitionfile"],
          description:
            "Path to a definition file that contains features and org preferences that the metadata of the package version depends on",
          args: { name: "definition-file" },
        },
        {
          name: ["-x", "--installation-key-bypass", "--installationkeybypass"],
          description: "Bypass the installation key requirement",
        },
        {
          name: ["-w", "--wait"],
          description: "Minutes to wait for the package version to be created",
          args: { name: "wait" },
        },
        {
          name: ["-s", "--build-instance", "--buildinstance"],
          description:
            "Instance where the conversion package version will be created, such as NA50",
          args: { name: "build-instance" },
          hidden: true,
        },
        {
          name: ["-m", "--seed-metadata"],
          description:
            "Directory containing metadata to be deployed prior to conversion",
          args: { name: "seed-metadata" },
        },
        { name: "--verbose", description: "Display verbose command output" },
        {
          name: ["-a", "--patch-version", "--patchversion"],
          description: "Specific released patch version to be converted",
          args: { name: "patch-version" },
        },
        {
          name: ["-c", "--code-coverage"],
          description:
            "Calculate and store the code coverage percentage by running the packaged Apex tests included in this package version",
        },
      ],
    },
    {
      name: ["package:create", "force:package:create"],
      description: "Create a package",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-n", "--name"],
          description: "Name of the package to create",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--package-type", "--packagetype"],
          description: "Type of package",
          args: { name: "package-type", suggestions: ["Managed", "Unlocked"] },
          isRequired: true,
        },
        {
          name: ["-d", "--description"],
          description: "Description of the package",
          args: { name: "description" },
        },
        {
          name: ["-e", "--no-namespace", "--nonamespace"],
          description:
            "Create the package with no namespace; available only for unlocked packages",
        },
        {
          name: ["-r", "--path"],
          description:
            "Path to directory that contains the contents of the package",
          args: { name: "path" },
          isRequired: true,
        },
        {
          name: ["--org-dependent", "--orgdependent"],
          description:
            "Depends on unpackaged metadata in the installation org; applies to unlocked packages only",
        },
        {
          name: [
            "-o",
            "--error-notification-username",
            "--errornotificationusername",
          ],
          description:
            "Active Dev Hub user designated to receive email notifications for package errors",
          args: { name: "error-notification-username" },
        },
      ],
    },
    {
      name: ["package:delete", "force:package:delete"],
      description: "Delete a package",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-n", "--no-prompt", "--noprompt"],
          description: "Don't prompt before deleting the package",
        },
        {
          name: ["-p", "--package"],
          description: "ID (starts with 0Ho) or alias of the package to delete",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: "--undelete",
          description: "Undelete a deleted package",
          hidden: true,
        },
      ],
    },
    {
      name: ["package:install", "force:package:install"],
      description:
        "Install or upgrade a version of a package in the target org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        {
          name: ["-w", "--wait"],
          description: "Number of minutes to wait for installation status",
          args: { name: "wait" },
        },
        {
          name: ["-k", "--installation-key", "--installationkey"],
          description:
            "Installation key for key-protected package (default: null)",
          args: { name: "installation-key" },
        },
        {
          name: ["-b", "--publish-wait", "--publishwait"],
          description:
            "Maximum number of minutes to wait for the Subscriber Package Version ID to become available in the target org before canceling the install request",
          args: { name: "publish-wait" },
        },
        {
          name: ["-r", "--no-prompt", "--noprompt"],
          description: "Don't prompt for confirmation",
        },
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) or alias of the package version to install",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: ["-a", "--apex-compile", "--apexcompile"],
          description:
            "Compile all Apex in the org and package, or only Apex in the package; unlocked packages only",
          args: { name: "apex-compile", suggestions: ["all", "package"] },
        },
        {
          name: ["-s", "--security-type", "--securitytype"],
          description:
            "Security access type for the installed package. Available options are AdminsOnly and AllUsers",
          args: {
            name: "security-type",
            suggestions: ["AllUsers", "AdminsOnly"],
          },
        },
        {
          name: ["-t", "--upgrade-type", "--upgradetype"],
          description:
            "Upgrade type for the package installation; available only for unlocked packages",
          args: {
            name: "upgrade-type",
            suggestions: ["DeprecateOnly", "Mixed", "Delete"],
          },
        },
        {
          name: ["-l", "--skip-handlers"],
          description:
            "Skip install handlers (available handlers: FeatureEnforcement)",
          args: { name: "skip-handlers", suggestions: ["FeatureEnforcement"] },
          isRepeatable: true,
          hidden: true,
        },
      ],
    },
    {
      name: ["package:install:report", "force:package:install:report"],
      description: "Retrieve the status of a package installation request",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-i", "--request-id", "--requestid"],
          description:
            "ID of the package install request you want to check; starts with 0Hf",
          args: { name: "request-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: ["package:installed:list", "force:package:installed:list"],
      description: "List the org’s installed packages",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
      ],
    },
    {
      name: ["package:list", "force:package:list"],
      description: "List all packages in the Dev Hub org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        { name: "--verbose", description: "Display extended package detail" },
      ],
    },
    {
      name: "package:push-upgrade:abort",
      description:
        "Abort a package push upgrade that has been scheduled. Only push upgrade requests with a status of Created or Pending can be aborted",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-v", "--target-dev-hub"],
          description:
            "Username or alias of the Dev Hub org. Not required if the `target-dev-hub` configuration variable is already set",
          args: { name: "target-dev-hub" },
        },
        apiVersionFlag,
        {
          name: ["-i", "--push-request-id"],
          description:
            "ID of the package push request (starts with 0DV). This ID is returned after the package push-upgrade schedule command completes successfully",
          args: { name: "push-request-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: ["package:push-upgrade:list", "force:package:push-upgrade:list"],
      description:
        "Lists the status of push upgrade requests for a given package",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-p", "--package"],
          description:
            "Package ID (starts with 033) of the package that you want push upgrade information for",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: ["-l", "--scheduled-last-days", "--scheduledlastdays"],
          description:
            "Number of days in the past for which to display the list of push upgrade requests that were scheduled. Used to filter the list output to only recently scheduled push upgrades",
          args: { name: "scheduled-last-days" },
        },
        {
          name: ["-s", "--status"],
          description:
            "Status used to filter the list output Valid values are: Created, Canceled, Pending, In Progress, Failed, or Succeeded",
          args: {
            name: "status",
            suggestions: [
              "Created",
              "Cancelled",
              "Pending",
              "In Progress",
              "Failed",
              "Succeeded",
            ],
          },
        },
        {
          name: "--show-push-migrations-only",
          description:
            "Display only push upgrade requests for package migrations",
        },
      ],
    },
    {
      name: [
        "package:push-upgrade:report",
        "force:package:push-upgrade:report",
      ],
      description: "Retrieve the status of a package push upgrade",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-i", "--push-request-id", "--pushrequestid"],
          description:
            "ID of the package push request (starts with 0DV). This ID is returned after the package push-upgrade schedule command completes successfully",
          args: { name: "push-request-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "package:push-upgrade:schedule",
      description: "Schedule a package push upgrade",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-v", "--target-dev-hub"],
          description:
            "Username or alias of the Dev Hub org that owns the package",
          args: { name: "target-dev-hub" },
        },
        apiVersionLegacyFlag,
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) of the package version that the package is being upgraded to. The package version must be an active, non-beta package version",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: ["-t", "--start-time"],
          description:
            "Date and time (UTC) when the push upgrade is processed. Set to the earliest time that you want Salesforce to attempt to start the upgrade",
          args: { name: "start-time" },
        },
        {
          name: ["-l", "--org-list"],
          description:
            "Comma-separated list of subscriber org IDs that need the package upgrade. Either --org-list or --org-file must be specified",
          args: { name: "org-list" },
          exclusiveOn: ["--org-file"],
        },
        {
          name: ["-f", "--org-file"],
          description:
            "Filename of the CSV file that contains the list of subscriber org IDs that need the package upgrade. Either --org-list or --org-file must be specified",
          args: { name: "org-file" },
          exclusiveOn: ["--org-list"],
        },
        {
          name: "--migrate-to-2gp",
          description:
            "Upgrade from a first-generation managed package (1GP) to a second-generation managed package (2GP). Required when you’re pushing a 2GP package to orgs with the 1GP version installed",
        },
      ],
    },
    {
      name: ["package:uninstall", "force:package:uninstall"],
      description: "Uninstall a second-generation package from the target org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        {
          name: ["-w", "--wait"],
          description: "Number of minutes to wait for uninstall status",
          args: { name: "wait" },
        },
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) or alias of the package version to uninstall",
          args: { name: "package" },
          isRequired: true,
        },
      ],
    },
    {
      name: ["package:uninstall:report", "force:package:uninstall:report"],
      description: "Retrieve the status of a package uninstall request",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        {
          name: ["-i", "--request-id", "--requestid"],
          description:
            "ID of the package uninstall request you want to check; starts with 06y",
          args: { name: "request-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: ["package:update", "force:package:update"],
      description: "Update package details",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-p", "--package"],
          description: "ID (starts with 0Ho) or alias of the package to update",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: ["-n", "--name"],
          description: "New name of the package",
          args: { name: "name" },
        },
        {
          name: ["-d", "--description"],
          description: "New description of the package",
          args: { name: "description" },
        },
        {
          name: [
            "-o",
            "--error-notification-username",
            "--errornotificationusername",
          ],
          description:
            "Active Dev Hub user designated to receive email notifications for package errors",
          args: { name: "error-notification-username" },
        },
        {
          name: "--enable-app-analytics",
          description:
            "Enable AppExchange App Analytics usage data collection on this managed package and its components",
        },
        {
          name: "--no-enable-app-analytics",
          description: "Negate --enable-app-analytics",
        },
        {
          name: ["-r", "--recommended-version-id"],
          description:
            "ID of the package version that's installed when subscribers click the Upgrade to Recommended Version option on the Installed Packages page of their org",
          args: { name: "recommended-version-id" },
        },
        {
          name: "--skip-ancestor-check",
          description:
            "Bypass the ancestry check for setting a recommended version",
        },
      ],
    },
    {
      name: ["package:version:create", "force:package:version:create"],
      description: "Create a package version in the Dev Hub org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-b", "--branch"],
          description:
            "Name of the branch in your source control system that the package version is based on",
          args: { name: "branch" },
        },
        {
          name: ["-s", "--build-instance", "--buildinstance"],
          description:
            "Instance where the package version will be created, such as NA50",
          args: { name: "build-instance" },
          hidden: true,
        },
        {
          name: ["-c", "--code-coverage", "--codecoverage"],
          description:
            "Calculate and store the code coverage percentage by running the packaged Apex tests included in this package version",
          exclusiveOn: ["--skip-validation"],
        },
        {
          name: ["-f", "--definition-file", "--definitionfile"],
          description:
            "Path to a definition file similar to scratch org definition file that contains the list of features and org preferences that the metadata of the package version depends on",
          args: { name: "definition-file" },
        },
        {
          name: ["-k", "--installation-key", "--installationkey"],
          description:
            "Installation key for key-protected package. (either --installation-key or --installation-key-bypass is required)",
          args: { name: "installation-key" },
        },
        {
          name: ["-x", "--installation-key-bypass", "--installationkeybypass"],
          description:
            "Bypass the installation key requirement. (either --installation-key or --installation-key-bypass is required)",
        },
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 0Ho) or alias of the package to create a version of",
          args: { name: "package" },
        },
        {
          name: ["-d", "--path"],
          description:
            "Path to the directory that contains the contents of the package",
          args: { name: "path" },
        },
        {
          name: ["--post-install-script", "--postinstallscript"],
          description:
            "Name of the post-install script; applies to managed packages only",
          args: { name: "post-install-script" },
        },
        {
          name: ["--post-install-url", "--postinstallurl"],
          description: "Post-install instructions URL",
          args: { name: "post-install-url" },
        },
        {
          name: ["-r", "--preserve"],
          description: "Preserve temp files that would otherwise be deleted",
          hidden: true,
        },
        {
          name: ["--releasenotes-url", "--releasenotesurl"],
          description: "Release notes URL",
          args: { name: "releasenotes-url" },
        },
        {
          name: ["--skip-ancestor-check", "--skipancestorcheck"],
          description:
            "Override ancestry requirements, which allows you to specify a package ancestor that isn’t the highest released package version",
        },
        {
          name: ["--skip-validation", "--skipvalidation"],
          description:
            "Skip validation during package version creation; you can’t promote unvalidated package versions",
          exclusiveOn: ["--code-coverage", "--async-validation"],
        },
        {
          name: "--async-validation",
          description:
            "Return a new package version before completing package validations",
          exclusiveOn: ["--skip-validation"],
        },
        {
          name: "--generate-pkg-zip",
          description:
            "Generate a package ZIP file that you can use for debugging or to examine the package contents",
        },
        {
          name: ["-t", "--tag"],
          description: "Package version’s tag",
          args: { name: "tag" },
        },
        {
          name: ["--uninstall-script", "--uninstallscript"],
          description:
            "Uninstall script name; applies to managed packages only",
          args: { name: "uninstall-script" },
        },
        {
          name: ["-j", "--validate-schema", "--validateschema"],
          description:
            "Validate the sfdx-project.json file against the JSON schema",
          hidden: true,
        },
        {
          name: ["-e", "--version-description", "--versiondescription"],
          description:
            "Description of the package version to be created; overrides the sfdx-project.json value",
          args: { name: "version-description" },
        },
        {
          name: ["-a", "--version-name", "--versionname"],
          description:
            "Name of the package version to be created; overrides the sfdx-project.json value",
          args: { name: "version-name" },
        },
        {
          name: ["-n", "--version-number", "--versionnumber"],
          description:
            "Version number of the package version to be created; overrides the sfdx-project.json value",
          args: { name: "version-number" },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the package version to be created",
          args: { name: "wait" },
        },
        {
          name: "--language",
          description: "Language for the package",
          args: { name: "language" },
        },
        { name: "--verbose", description: "Display verbose command output" },
      ],
    },
    {
      name: [
        "package:version:create:list",
        "force:package:version:create:list",
      ],
      description: "List package version creation requests",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-c", "--created-last-days", "--createdlastdays"],
          description:
            "Number of days since the request was created, starting at 00:00:00 of first day to now. Use 0 for today",
          args: { name: "created-last-days" },
        },
        {
          name: ["-s", "--status"],
          description:
            "Status of the version creation request, used to filter the list",
          args: {
            name: "status",
            suggestions: ["Queued", "InProgress", "Success", "Error"],
          },
        },
        {
          name: "--show-conversions-only",
          description:
            "Filter the list output to display only converted package version",
        },
        {
          name: "--verbose",
          description:
            "Displays additional information at a slight performance cost, such as the version name and number for each package version create request",
        },
      ],
    },
    {
      name: [
        "package:version:create:report",
        "force:package:version:create:report",
      ],
      description: "Retrieve details about a package version creation request",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: [
            "-i",
            "--package-create-request-id",
            "--packagecreaterequestid",
          ],
          description:
            "ID (starts with 08c) of the package version creation request you want to display",
          args: { name: "package-create-request-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: ["package:version:delete", "force:package:version:delete"],
      description: "Delete a package version",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-n", "--no-prompt", "--noprompt"],
          description: "Don’t prompt before deleting the package version",
        },
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) or alias of the package version to delete",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: "--undelete",
          description: "Undelete a deleted package version",
          hidden: true,
        },
      ],
    },
    {
      name: [
        "package:version:displayancestry",
        "force:package:version:displayancestry",
      ],
      description:
        "Display the ancestry tree for a 2GP managed package version",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-p", "--package"],
          description:
            "ID or alias of the package (starts with 0Ho) or package version (starts with 04t) to display ancestry for",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: ["--dot-code", "--dotcode"],
          description: "Display the ancestry tree in DOT code",
        },
        {
          name: "--verbose",
          description:
            "Display both the package version ID (starts with 04t) and the version number (major.minor.patch.build) in the ancestry tree",
        },
      ],
    },
    {
      name: "package:version:displaydependencies",
      description:
        "Display the dependency graph for an unlocked or 2GP managed package version",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-p", "--package"],
          description:
            "ID or alias of the package version (starts with 04t) or the package version create request (starts with 08c) to display the dependency graph for",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: ["-k", "--installation-key"],
          description:
            "Installation key for a key-protected package version (starts with 04t)",
          args: { name: "installation-key" },
        },
        {
          name: "--edge-direction",
          description:
            "Order (root-first or root-last) in which the dependencies are displayed",
          args: {
            name: "edge-direction",
            suggestions: ["root-first", "root-last"],
          },
        },
        {
          name: "--verbose",
          description:
            "Display both the package version ID (starts with 04t) and the version number (major.minor.patch.build) in each node",
        },
      ],
    },
    {
      name: ["package:version:list", "force:package:version:list"],
      description: "List all package versions in the Dev Hub org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-c", "--created-last-days", "--createdlastdays"],
          description:
            "Number of days since the request was created, starting at 00:00:00 of first day to now. Use 0 for today",
          args: { name: "created-last-days" },
        },
        {
          name: "--concise",
          description: "Display limited package version details",
        },
        {
          name: "--show-conversions-only",
          description:
            "Filter the list output to display only converted package version",
        },
        {
          name: ["-m", "--modified-last-days", "--modifiedlastdays"],
          description:
            "Number of days since the items were modified, starting at 00:00:00 of first day to now. Use 0 for today",
          args: { name: "modified-last-days" },
        },
        {
          name: ["-p", "--packages"],
          description:
            "Comma-delimited list of packages (aliases or 0Ho IDs) to list",
          args: { name: "packages" },
        },
        {
          name: ["-r", "--released"],
          description: "Display released versions only (IsReleased=true)",
        },
        {
          name: ["-b", "--branch"],
          description:
            "Branch in your source control system used to filter the results; only package versions based on the specified branch are listed",
          args: { name: "branch" },
        },
        {
          name: ["-o", "--order-by", "--orderby"],
          description: "Package version fields used to order the list",
          args: { name: "order-by" },
        },
        {
          name: "--verbose",
          description: "Display extended package version details",
        },
      ],
    },
    {
      name: ["package:version:promote", "force:package:version:promote"],
      description: "Promote a package version to released",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) or alias of the package version to promote",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: ["-n", "--no-prompt", "--noprompt"],
          description:
            "Don't prompt to confirm setting the package version as released",
        },
      ],
    },
    {
      name: ["package:version:report", "force:package:version:report"],
      description:
        "Retrieve details about a package version in the Dev Hub org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) or alias of the package to retrieve details for",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: "--verbose",
          description: "Display extended package version details",
        },
      ],
    },
    {
      name: "package:version:retrieve",
      description:
        "Retrieve package metadata for a specified package version. Package metadata can be retrieved for only second-generation managed package versions or unlocked packages",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        apiVersionLegacyFlag,
        {
          name: ["-v", "--target-dev-hub", "--targetdevhubusername"],
          description:
            "Username or alias of the Dev Hub org. Not required if the `target-dev-hub` configuration variable is already set",
          args: { name: "target-dev-hub" },
        },
        {
          name: ["-p", "--package"],
          description: "Subscriber package version ID (starts with 04t)",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: ["-d", "--output-dir"],
          description:
            "Path within your Salesforce DX project directory in which to download the metadata. This directory must be empty",
          args: { name: "output-dir" },
        },
      ],
    },
    {
      name: ["package:version:update", "force:package:version:update"],
      description: "Update a package version",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetDevHubFlag,
        apiVersionLegacyFlag,
        {
          name: ["-p", "--package"],
          description:
            "ID (starts with 04t) or alias of the package to update a version of",
          args: { name: "package" },
          isRequired: true,
        },
        {
          name: ["-a", "--version-name", "--versionname"],
          description: "New package version name",
          args: { name: "version-name" },
        },
        {
          name: ["-e", "--version-description", "--versiondescription"],
          description: "New package version description",
          args: { name: "version-description" },
        },
        {
          name: ["-b", "--branch"],
          description: "New package version branch",
          args: { name: "branch" },
        },
        {
          name: ["-t", "--tag"],
          description: "New package version tag",
          args: { name: "tag" },
        },
        {
          name: ["-k", "--installation-key", "--installationkey"],
          description:
            "New installation key for key-protected package (default: null)",
          args: { name: "installation-key" },
        },
      ],
    },
    {
      name: ["package1:version:create", "force:package1:version:create"],
      description:
        "Create a first-generation package version in the release org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        {
          name: ["-i", "--package-id", "--packageid"],
          description:
            "ID of the metadata package (starts with 033) of which you’re creating a new version",
          args: { name: "package-id" },
          isRequired: true,
        },
        {
          name: ["-n", "--name"],
          description: "Package version name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-d", "--description"],
          description: "Package version description",
          args: { name: "description" },
        },
        {
          name: ["-v", "--version"],
          description:
            "Package version in major.minor format, for example, 3.2",
          args: { name: "version" },
        },
        {
          name: ["-m", "--managed-released", "--managedrelease"],
          description: "Create a managed package version",
        },
        {
          name: ["-r", "--release-notes-url", "--releasenotesurl"],
          description: "Release notes URL",
          args: { name: "release-notes-url" },
        },
        {
          name: ["-p", "--post-install-url", "--postinstallurl"],
          description: "Post install URL",
          args: { name: "post-install-url" },
        },
        {
          name: ["-k", "--installation-key", "--installationkey"],
          description:
            "Installation key for key-protected package (default: null)",
          args: { name: "installation-key" },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Minutes to wait for the package version to be created (default: 2 minutes)",
          args: { name: "wait" },
        },
      ],
    },
    {
      name: [
        "package1:version:create:get",
        "force:package1:version:create:get",
      ],
      description: "Retrieve the status of a package version creation request",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        {
          name: ["-i", "--request-id", "--requestid"],
          description: "ID of the PackageUploadRequest (starts with 0HD)",
          args: { name: "request-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: ["package1:version:display", "force:package1:version:display"],
      description: "Display details about a first-generation package version",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        {
          name: ["-i", "--package-version-id", "--packageversionid"],
          description:
            "ID (starts with 04t) of the metadata package version whose details you want to display",
          args: { name: "package-version-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: ["package1:version:list", "force:package1:version:list"],
      description:
        "List package versions for the specified first-generation package or for the org",
      options: [
        jsonFlag,
        flagsDirFlag,
        loglevelFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        {
          name: ["-i", "--package-id", "--packageid"],
          description:
            "Metadata package ID (starts with 033) whose package versions you want to list",
          args: { name: "package-id" },
        },
      ],
    },
    {
      name: "plugins",
      description: "List installed plugins",
      options: [jsonFlag, { name: "--core", description: "Show core plugins" }],
    },
    {
      name: "plugins:discover",
      description: "See a list of 3rd-party sf plugins you can install",
      options: [jsonFlag, flagsDirFlag],
    },
    {
      name: "plugins:inspect",
      description: "Displays installation properties of a plugin",
      options: [jsonFlag, { name: ["-v", "--verbose"] }],
      args: {
        name: "plugin",
        description: "Plugin to inspect",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: ["plugins:install", "plugins:add"],
      description: "Installs a plugin into sfdx",
      options: [
        jsonFlag,
        {
          name: ["-f", "--force"],
          description:
            "Force npm to fetch remote resources even if a local copy exists on disk",
        },
        { name: "--jit", hidden: true },
        {
          name: ["-s", "--silent"],
          description: "Silences npm output",
          exclusiveOn: ["--verbose"],
        },
        {
          name: ["-v", "--verbose"],
          description: "Show verbose npm output",
          exclusiveOn: ["--silent"],
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to install",
        isVariadic: true,
      },
    },
    {
      name: "plugins:link",
      description: "Links a plugin into the CLI for development",
      options: [
        {
          name: "--install",
          description: "Install dependencies after linking the plugin",
        },
        { name: "--no-install", description: "Negate --install" },
        { name: ["-v", "--verbose"] },
      ],
      args: { name: "path", description: "Path to plugin", isOptional: true },
    },
    {
      name: "plugins:reset",
      description: "Remove all user-installed and linked plugins",
      options: [
        {
          name: "--hard",
          description:
            "Delete node_modules and package manager related files in addition to uninstalling plugins",
        },
        {
          name: "--reinstall",
          description: "Reinstall all plugins after uninstalling",
        },
      ],
    },
    {
      name: "plugins:trust:allowlist:add",
      description: "Add plugins to the plugin allowlist",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name"],
          description:
            "The npm name of the plugin to add to the allowlist. Add multiple plugins by specifying the `--name` flag multiple times",
          args: { name: "name" },
          isRepeatable: true,
          isRequired: true,
        },
      ],
    },
    {
      name: "plugins:trust:allowlist:list",
      description: "List the plugins on the plugin allowlist",
      options: [jsonFlag, flagsDirFlag],
    },
    {
      name: "plugins:trust:allowlist:remove",
      description: "Remove plugins from the plugin allowlist",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name"],
          description:
            "The npm name of the plugin to remove from the allowlist. Remove multiple plugins by specifying the `--name` flag multiple times",
          args: { name: "name" },
          isRepeatable: true,
          isRequired: true,
        },
      ],
    },
    {
      name: "plugins:trust:verify",
      description: "Validate a digital signature",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--npm"],
          description: "Specify the npm name. This can include a tag/version",
          args: { name: "npm" },
          isRequired: true,
        },
        {
          name: ["-r", "--registry"],
          description: "The registry name. The behavior is the same as npm",
          args: { name: "registry" },
        },
        loglevelFlag,
      ],
    },
    {
      name: ["plugins:uninstall", "plugins:unlink", "plugins:remove"],
      description: "Removes a plugin from the CLI",
      options: [{ name: ["-v", "--verbose"] }],
      args: {
        name: "plugin",
        description: "Plugin to uninstall",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "plugins:update",
      description: "Update installed plugins",
      options: [{ name: ["-v", "--verbose"] }],
    },
    {
      name: ["project:convert:mdapi", "force:mdapi:convert"],
      description:
        "Convert metadata retrieved via Metadata API into the source format used in Salesforce DX projects",
      options: [
        jsonFlag,
        flagsDirFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-r", "--root-dir", "--rootdir"],
          description:
            "Root directory that contains the Metadata API–formatted metadata",
          args: { name: "root-dir" },
          isRequired: true,
        },
        {
          name: ["-d", "--output-dir", "--outputdir"],
          description:
            "Directory to store your files in after they’re converted to source format; can be an absolute or relative path",
          args: { name: "output-dir" },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "File path to manifest (package.xml) of metadata types to convert",
          args: { name: "manifest" },
        },
        {
          name: ["-p", "--metadata-dir", "--metadatapath"],
          description:
            "Root of directory or zip file of metadata formatted files to convert",
          args: { name: "metadata-dir" },
          isRepeatable: true,
          exclusiveOn: ["--manifest", "--metadata"],
        },
        {
          name: ["-m", "--metadata"],
          description: "Metadata component names to convert",
          args: { name: "metadata" },
          isRepeatable: true,
          exclusiveOn: ["--manifest"],
        },
      ],
    },
    {
      name: ["project:convert:source", "force:source:convert"],
      description:
        "Convert source-formatted files into metadata that you can deploy using Metadata API",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["--api-version", "--apiversion"],
          description:
            "API Version to use in the generated project's manifest. By default, will use the version from sfdx-project.json",
          args: { name: "api-version" },
        },
        loglevelFlag,
        {
          name: ["-r", "--root-dir", "--rootdir"],
          description:
            "Source directory other than the default package to convert",
          args: { name: "root-dir" },
        },
        {
          name: ["-d", "--output-dir", "--outputdir"],
          description:
            "Output directory to store the Metadata API–formatted files in",
          args: { name: "output-dir" },
        },
        {
          name: ["-n", "--package-name", "--packagename"],
          description:
            "Name of the package to associate with the metadata-formatted files",
          args: { name: "package-name" },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "Path to the manifest (package.xml) file that specifies the metadata types to convert",
          args: { name: "manifest" },
        },
        {
          name: ["-p", "--source-dir", "--sourcepath"],
          description: "Paths to the local source files to convert",
          args: { name: "source-dir" },
          isRepeatable: true,
          exclusiveOn: ["--manifest", "--metadata"],
        },
        {
          name: ["-m", "--metadata"],
          description: "Metadata component names to convert",
          args: { name: "metadata" },
          isRepeatable: true,
          exclusiveOn: ["--manifest"],
        },
      ],
    },
    {
      name: "project:convert:source-behavior",
      description:
        "Enable a behavior of your project source files, and then update your Salesforce DX project to implement the behavior",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-b", "--behavior"],
          description:
            'Behavior to enable; the values correspond to the possible values of the "sourceBehaviorOption" option in the "sfdx-project.json" file',
          args: {
            name: "behavior",
            suggestions: [
              "decomposeCustomLabelsBeta2",
              "decomposeCustomLabelsBeta",
              "decomposePermissionSetBeta",
              "decomposePermissionSetBeta2",
              "decomposeSharingRulesBeta",
              "decomposeWorkflowBeta",
              "decomposeExternalServiceRegistrationBeta",
            ],
          },
          isRequired: true,
        },
        {
          name: "--dry-run",
          description:
            "Display what the command would do, but don't make any actual changes",
        },
        {
          name: "--preserve-temp-dir",
          description:
            "Don't delete the metadata API format temporary directory that this command creates. Useful for debugging",
        },
        {
          name: ["-o", "--target-org"],
          description: "Username or alias of the target org",
          args: { name: "target-org" },
        },
      ],
    },
    {
      name: ["project:delete:source", "force:source:delete"],
      description:
        "Delete source from your project and from a non-source-tracked org",
      options: [
        jsonFlag,
        flagsDirFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        targetOrgLegacyFlag,
        {
          name: ["-c", "--check-only", "--checkonly"],
          description:
            "Validate delete command but don't delete anything from the org or the local project",
        },
        {
          name: ["-w", "--wait"],
          description: "Number of minutes to wait for the command to finish",
          args: { name: "wait" },
        },
        {
          name: "--tests",
          description:
            "Apex tests to run when --test-level is RunSpecifiedTests",
          args: { name: "tests" },
          isRepeatable: true,
        },
        {
          name: ["-l", "--test-level", "--testlevel"],
          description: "Deployment Apex testing level",
          args: {
            name: "test-level",
            suggestions: [
              "NoTestRun",
              "RunSpecifiedTests",
              "RunLocalTests",
              "RunAllTestsInOrg",
              "RunRelevantTests",
            ],
          },
        },
        {
          name: ["-r", "--no-prompt", "--noprompt"],
          description: "Don't prompt for delete confirmation",
        },
        {
          name: ["-m", "--metadata"],
          description: "Metadata components to delete",
          args: { name: "metadata" },
          isRepeatable: true,
        },
        {
          name: ["-p", "--source-dir", "--sourcepath"],
          description: "Source file paths to delete",
          args: { name: "source-dir" },
          isRepeatable: true,
        },
        {
          name: ["-t", "--track-source", "--tracksource"],
          description:
            "If the delete succeeds, update the source tracking information",
          exclusiveOn: ["--check-only"],
        },
        {
          name: ["-f", "--force-overwrite", "--forceoverwrite"],
          description:
            "Ignore conflict warnings and overwrite changes to the org",
          dependsOn: ["--track-source"],
        },
        {
          name: "--verbose",
          description: "Verbose output of the delete result",
        },
      ],
    },
    {
      name: ["project:delete:tracking", "force:source:tracking:clear"],
      description: "Delete all local source tracking information",
      options: [
        jsonFlag,
        flagsDirFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        targetOrgLegacyFlag,
        {
          name: ["-p", "--no-prompt", "--noprompt"],
          description: "Don't prompt for source tracking override confirmation",
        },
      ],
    },
    {
      name: ["project:deploy:cancel", "deploy:metadata:cancel"],
      description: "Cancel a deploy operation",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-o", "--target-org"],
          description: "Username or alias of the target org",
          args: { name: "target-org" },
        },
        {
          name: "--async",
          description: "Run the command asynchronously",
          exclusiveOn: ["--wait"],
        },
        {
          name: ["-i", "--job-id"],
          description: "Job ID of the deploy operation you want to cancel",
          args: { name: "job-id" },
        },
        {
          name: ["-r", "--use-most-recent"],
          description: "Use the job ID of the most recent deploy operation",
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the command to complete and display results",
          args: { name: "wait" },
          exclusiveOn: ["--async"],
        },
      ],
    },
    {
      name: "project:deploy:pipeline:quick",
      description: "Quickly deploy a validated deployment to an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        { name: "--async", description: "Run the command asynchronously" },
        {
          name: "--concise",
          description: "Show concise output of the command result",
          exclusiveOn: ["--verbose"],
        },
        {
          name: "--verbose",
          description: "Show verbose output of the command result",
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for command to complete and display results",
          args: { name: "wait" },
          exclusiveOn: ["--async"],
        },
        {
          name: ["-c", "--devops-center-username"],
          description: "Username or alias of the DevOps Center org",
          args: { name: "devops-center-username" },
          isRequired: true,
        },
        {
          name: ["-i", "--job-id"],
          description: "Job ID of the validated deployment to quick deploy",
          args: { name: "job-id" },
        },
        {
          name: ["-r", "--use-most-recent"],
          description:
            "Use the job ID of the most recently validated deployment",
        },
      ],
    },
    {
      name: "project:deploy:pipeline:report",
      description: "Check the status of a pipeline deploy operation",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-c", "--devops-center-username"],
          description: "Username or alias of the DevOps Center org",
          args: { name: "devops-center-username" },
          isRequired: true,
        },
        {
          name: ["-i", "--job-id"],
          description:
            "Job ID of the pipeline deployment to check the status of",
          args: { name: "job-id" },
        },
        {
          name: ["-r", "--use-most-recent"],
          description: "Use the job ID of the most recent deploy operation",
        },
      ],
    },
    {
      name: "project:deploy:pipeline:resume",
      description: "Resume watching a pipeline deploy operation",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-c", "--devops-center-username"],
          description: "Username or alias of the DevOps Center org",
          args: { name: "devops-center-username" },
          isRequired: true,
        },
        {
          name: ["-i", "--job-id"],
          description:
            "Job ID of the pipeline deploy operation you want to resume",
          args: { name: "job-id" },
        },
        {
          name: ["-r", "--use-most-recent"],
          description: "Use the job ID of the most recent deploy operation",
        },
        {
          name: "--concise",
          description: "Show concise output of the command result",
          exclusiveOn: ["--verbose"],
        },
        {
          name: "--verbose",
          description: "Show verbose output of the command result",
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for command to complete and display results",
          args: { name: "wait" },
        },
      ],
    },
    {
      name: "project:deploy:pipeline:start",
      description: "Deploy changes from a branch to the pipeline stage’s org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-b", "--branch-name"],
          description:
            "Name of the branch in the source control repository that corresponds to the pipeline stage that you want to deploy the changes to",
          args: { name: "branch-name" },
          isRequired: true,
        },
        {
          name: ["-v", "--bundle-version-name"],
          description: "Version name of the bundle",
          args: { name: "bundle-version-name" },
        },
        {
          name: ["-a", "--deploy-all"],
          description: "Deploy all metadata in the branch to the stage's org",
        },
        {
          name: ["-p", "--devops-center-project-name"],
          description: "Name of the DevOps Center project",
          args: { name: "devops-center-project-name" },
          isRequired: true,
        },
        {
          name: ["-c", "--devops-center-username"],
          description: "Username or alias of the DevOps Center org",
          args: { name: "devops-center-username" },
          isRequired: true,
        },
        {
          name: ["-t", "--tests"],
          description:
            "Apex tests to run when --test-level is RunSpecifiedTests",
          args: { name: "tests" },
          isRepeatable: true,
        },
        {
          name: ["-l", "--test-level"],
          description: "Deployment Apex testing level",
          args: {
            name: "test-level",
            suggestions: [
              "NoTestRun",
              "RunSpecifiedTests",
              "RunLocalTests",
              "RunAllTestsInOrg",
            ],
          },
        },
        { name: "--async", description: "Run the command asynchronously" },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for command to complete and display results",
          args: { name: "wait" },
          exclusiveOn: ["--async"],
        },
        {
          name: "--verbose",
          description: "Show verbose output of the command result",
        },
        {
          name: "--concise",
          description: "Show concise output of the command result",
          exclusiveOn: ["--verbose"],
        },
      ],
    },
    {
      name: "project:deploy:pipeline:validate",
      description:
        "Perform a validate-only deployment from a branch to the pipeline stage’s org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-b", "--branch-name"],
          description:
            "Name of the branch in the source control repository that corresponds to the pipeline stage that you want to deploy the changes to",
          args: { name: "branch-name" },
          isRequired: true,
        },
        {
          name: ["-v", "--bundle-version-name"],
          description: "Version name of the bundle",
          args: { name: "bundle-version-name" },
        },
        {
          name: ["-a", "--deploy-all"],
          description: "Deploy all metadata in the branch to the stage's org",
        },
        {
          name: ["-p", "--devops-center-project-name"],
          description: "Name of the DevOps Center project",
          args: { name: "devops-center-project-name" },
          isRequired: true,
        },
        {
          name: ["-c", "--devops-center-username"],
          description: "Username or alias of the DevOps Center org",
          args: { name: "devops-center-username" },
          isRequired: true,
        },
        {
          name: ["-t", "--tests"],
          description:
            "Apex tests to run when --test-level is RunSpecifiedTests",
          args: { name: "tests" },
          isRepeatable: true,
        },
        {
          name: ["-l", "--test-level"],
          description: "Deployment Apex testing level",
          args: {
            name: "test-level",
            suggestions: [
              "NoTestRun",
              "RunSpecifiedTests",
              "RunLocalTests",
              "RunAllTestsInOrg",
            ],
          },
        },
        { name: "--async", description: "Run the command asynchronously" },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for command to complete and display results",
          args: { name: "wait" },
          exclusiveOn: ["--async"],
        },
        {
          name: "--verbose",
          description: "Show verbose output of the command result",
        },
        {
          name: "--concise",
          description: "Show concise output of the command result",
          exclusiveOn: ["--verbose"],
        },
      ],
    },
    {
      name: ["project:deploy:preview", "deploy:metadata:preview"],
      description:
        "Preview a deployment to see what will deploy to the org, the potential conflicts, and the ignored files",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-c", "--ignore-conflicts"],
          description: "Don't display conflicts in preview of the deployment",
        },
        {
          name: ["-x", "--manifest"],
          description:
            "Full file path for manifest (package.xml) of components to preview",
          args: { name: "manifest" },
          exclusiveOn: ["--source-dir", "--metadata"],
        },
        {
          name: ["-m", "--metadata"],
          description: "Metadata component names to preview",
          args: { name: "metadata" },
          isRepeatable: true,
          exclusiveOn: ["--manifest", "--source-dir"],
        },
        {
          name: ["-d", "--source-dir"],
          description: "Path to the local source files to preview",
          args: { name: "source-dir" },
          isRepeatable: true,
          exclusiveOn: ["--manifest", "--metadata"],
        },
        targetOrgFlag,
        {
          name: "--concise",
          description:
            "Show only the changes that will be deployed; omits files that are forceignored",
        },
      ],
    },
    {
      name: ["project:deploy:quick", "deploy:metadata:quick"],
      description: "Quickly deploy a validated deployment to an org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: "--async",
          description: "Run the command asynchronously",
          exclusiveOn: ["--wait"],
        },
        {
          name: "--concise",
          description: "Show concise output of the deploy result",
          exclusiveOn: ["--verbose"],
        },
        {
          name: ["-i", "--job-id"],
          description: "Job ID of the deployment you want to quick deploy",
          args: { name: "job-id" },
        },
        {
          name: ["-o", "--target-org"],
          description: "Username or alias of the target org",
          args: { name: "target-org" },
        },
        {
          name: ["-r", "--use-most-recent"],
          description:
            "Use the job ID of the most recently validated deployment",
        },
        {
          name: "--verbose",
          description: "Show verbose output of the deploy result",
          exclusiveOn: ["--concise"],
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the command to complete and display results",
          args: { name: "wait" },
          exclusiveOn: ["--async"],
        },
        {
          name: ["-a", "--api-version"],
          description: "Target API version for the deploy",
          args: { name: "api-version" },
        },
      ],
    },
    {
      name: ["project:deploy:report", "deploy:metadata:report"],
      description: "Check or poll for the status of a deploy operation",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-o", "--target-org"],
          description: "Username or alias of the target org",
          args: { name: "target-org" },
        },
        {
          name: ["-i", "--job-id"],
          description:
            "Job ID of the deploy operation you want to check the status of",
          args: { name: "job-id" },
        },
        {
          name: ["-r", "--use-most-recent"],
          description: "Use the job ID of the most recent deploy operation",
        },
        {
          name: "--coverage-formatters",
          description: "Format of the code coverage results",
          args: {
            name: "coverage-formatters",
            suggestions: [
              "clover",
              "cobertura",
              "html-spa",
              "html",
              "json",
              "json-summary",
              "lcovonly",
              "none",
              "teamcity",
              "text",
              "text-summary",
            ],
          },
          isRepeatable: true,
        },
        { name: "--junit", description: "Output JUnit test results" },
        {
          name: "--results-dir",
          description:
            "Output directory for code coverage and JUnit results; defaults to the deploy ID",
          args: { name: "results-dir" },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for command to complete and display results",
          args: { name: "wait" },
        },
      ],
    },
    {
      name: ["project:deploy:resume", "deploy:metadata:resume"],
      description:
        "Resume watching a deploy operation and update source tracking when the deploy completes",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: "--concise",
          description: "Show concise output of the deploy operation result",
          exclusiveOn: ["--verbose"],
        },
        {
          name: ["-i", "--job-id"],
          description: "Job ID of the deploy operation you want to resume",
          args: { name: "job-id" },
        },
        {
          name: ["-r", "--use-most-recent"],
          description: "Use the job ID of the most recent deploy operation",
        },
        {
          name: "--verbose",
          description: "Show verbose output of the deploy operation result",
          exclusiveOn: ["--concise"],
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the command to complete and display results",
          args: { name: "wait" },
        },
        {
          name: "--coverage-formatters",
          description: "Format of the code coverage results",
          args: {
            name: "coverage-formatters",
            suggestions: [
              "clover",
              "cobertura",
              "html-spa",
              "html",
              "json",
              "json-summary",
              "lcovonly",
              "none",
              "teamcity",
              "text",
              "text-summary",
            ],
          },
          isRepeatable: true,
        },
        { name: "--junit", description: "Output JUnit test results" },
        {
          name: "--results-dir",
          description:
            "Output directory for code coverage and JUnit results; defaults to the deploy ID",
          args: { name: "results-dir" },
        },
      ],
    },
    {
      name: ["project:deploy:start", "deploy:metadata"],
      description: "Deploy metadata to an org from your local project",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-a", "--api-version"],
          description: "Target API version for the deploy",
          args: { name: "api-version" },
        },
        {
          name: "--async",
          description: "Run the command asynchronously",
          exclusiveOn: ["--wait"],
        },
        {
          name: "--concise",
          description: "Show concise output of the deploy result",
          exclusiveOn: ["--verbose"],
        },
        {
          name: "--dry-run",
          description:
            "Validate deploy and run Apex tests but don’t save to the org",
        },
        {
          name: ["-c", "--ignore-conflicts"],
          description:
            "Ignore conflicts and deploy local files, even if they overwrite changes in the org",
        },
        {
          name: ["-r", "--ignore-errors"],
          description: "Ignore any errors and don’t roll back deployment",
        },
        {
          name: ["-g", "--ignore-warnings"],
          description:
            "Ignore warnings and allow a deployment to complete successfully",
        },
        {
          name: ["-x", "--manifest"],
          description:
            "Full file path for manifest (package.xml) of components to deploy",
          args: { name: "manifest" },
          exclusiveOn: ["--source-dir", "--metadata", "--metadata-dir"],
        },
        {
          name: ["-m", "--metadata"],
          description:
            "Metadata component names to deploy. Wildcards (`*` ) supported as long as you use quotes, such as `ApexClass:MyClass*`",
          args: { name: "metadata" },
          isRepeatable: true,
          exclusiveOn: ["--manifest", "--source-dir", "--metadata-dir"],
        },
        {
          name: "--metadata-dir",
          description:
            "Root of directory or zip file of metadata formatted files to deploy",
          args: { name: "metadata-dir" },
          exclusiveOn: ["--manifest", "--source-dir", "--metadata"],
        },
        {
          name: "--single-package",
          description:
            "Indicates that the metadata zip file points to a directory structure for a single package",
          dependsOn: ["--metadata-dir"],
        },
        {
          name: ["-d", "--source-dir"],
          description: "Path to the local source files to deploy",
          args: { name: "source-dir" },
          isRepeatable: true,
          exclusiveOn: ["--manifest", "--metadata", "--metadata-dir"],
        },
        targetOrgFlag,
        {
          name: ["-t", "--tests"],
          description:
            "Apex tests to run when --test-level is RunSpecifiedTests",
          args: { name: "tests" },
          isRepeatable: true,
        },
        {
          name: ["-l", "--test-level"],
          description: "Deployment Apex testing level",
          args: {
            name: "test-level",
            suggestions: [
              "NoTestRun",
              "RunSpecifiedTests",
              "RunLocalTests",
              "RunAllTestsInOrg",
              "RunRelevantTests",
            ],
          },
        },
        {
          name: "--verbose",
          description: "Show verbose output of the deploy result",
          exclusiveOn: ["--concise"],
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for command to complete and display results",
          args: { name: "wait" },
          exclusiveOn: ["--async"],
        },
        {
          name: "--purge-on-delete",
          description:
            "Specify that deleted components in the destructive changes manifest file are immediately eligible for deletion rather than being stored in the Recycle Bin",
        },
        {
          name: "--pre-destructive-changes",
          description:
            "File path for a manifest (destructiveChangesPre.xml) of components to delete before the deploy",
          args: { name: "pre-destructive-changes" },
          dependsOn: ["--manifest"],
        },
        {
          name: "--post-destructive-changes",
          description:
            "File path for a manifest (destructiveChangesPost.xml) of components to delete after the deploy",
          args: { name: "post-destructive-changes" },
          dependsOn: ["--manifest"],
        },
        {
          name: "--coverage-formatters",
          description: "Format of the code coverage results",
          args: {
            name: "coverage-formatters",
            suggestions: [
              "clover",
              "cobertura",
              "html-spa",
              "html",
              "json",
              "json-summary",
              "lcovonly",
              "none",
              "teamcity",
              "text",
              "text-summary",
            ],
          },
          isRepeatable: true,
        },
        { name: "--junit", description: "Output JUnit test results" },
        {
          name: "--results-dir",
          description:
            "Output directory for code coverage and JUnit results; defaults to the deploy ID",
          args: { name: "results-dir" },
        },
      ],
    },
    {
      name: ["project:deploy:validate", "deploy:metadata:validate"],
      description:
        "Validate a metadata deployment without actually executing it",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-a", "--api-version"],
          description: "Target API version for the validation",
          args: { name: "api-version" },
        },
        { name: "--async", description: "Run the command asynchronously" },
        {
          name: "--concise",
          description: "Show concise output of the validation result",
          exclusiveOn: ["--verbose"],
        },
        {
          name: ["-x", "--manifest"],
          description:
            "Full file path for manifest (package.xml) of components to validate for deployment",
          args: { name: "manifest" },
        },
        {
          name: ["-m", "--metadata"],
          description: "Metadata component names to validate for deployment",
          args: { name: "metadata" },
          isRepeatable: true,
        },
        {
          name: ["-d", "--source-dir"],
          description:
            "Path to the local source files to validate for deployment",
          args: { name: "source-dir" },
          isRepeatable: true,
        },
        {
          name: "--metadata-dir",
          description:
            "Root of directory or zip file of metadata formatted files to deploy",
          args: { name: "metadata-dir" },
        },
        {
          name: "--single-package",
          description:
            "Indicates that the metadata zip file points to a directory structure for a single package",
          dependsOn: ["--metadata-dir"],
        },
        targetOrgFlag,
        {
          name: ["-t", "--tests"],
          description:
            "Apex tests to run when --test-level is RunSpecifiedTests",
          args: { name: "tests" },
          isRepeatable: true,
        },
        {
          name: ["-l", "--test-level"],
          description: "Deployment Apex testing level",
          args: {
            name: "test-level",
            suggestions: [
              "RunAllTestsInOrg",
              "RunLocalTests",
              "RunSpecifiedTests",
              "RunRelevantTests",
            ],
          },
        },
        {
          name: "--verbose",
          description: "Show verbose output of the validation result",
          exclusiveOn: ["--concise"],
        },
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the command to complete and display results",
          args: { name: "wait" },
        },
        {
          name: ["-g", "--ignore-warnings"],
          description:
            "Ignore warnings and allow a deployment to complete successfully",
        },
        {
          name: "--coverage-formatters",
          description: "Format of the code coverage results",
          args: {
            name: "coverage-formatters",
            suggestions: [
              "clover",
              "cobertura",
              "html-spa",
              "html",
              "json",
              "json-summary",
              "lcovonly",
              "none",
              "teamcity",
              "text",
              "text-summary",
            ],
          },
          isRepeatable: true,
        },
        { name: "--junit", description: "Output JUnit test results" },
        {
          name: "--results-dir",
          description:
            "Output directory for code coverage and JUnit results; defaults to the deploy ID",
          args: { name: "results-dir" },
        },
        {
          name: "--purge-on-delete",
          description:
            "Specify that deleted components in the destructive changes manifest file are immediately eligible for deletion rather than being stored in the Recycle Bin",
          dependsOn: ["--manifest"],
        },
        {
          name: "--pre-destructive-changes",
          description:
            "File path for a manifest (destructiveChangesPre.xml) of components to delete before the deploy",
          args: { name: "pre-destructive-changes" },
          dependsOn: ["--manifest"],
        },
        {
          name: "--post-destructive-changes",
          description:
            "File path for a manifest (destructiveChangesPost.xml) of components to delete after the deploy",
          args: { name: "post-destructive-changes" },
          dependsOn: ["--manifest"],
        },
      ],
    },
    {
      name: ["project:generate:manifest", "force:source:manifest:create"],
      description:
        "Create a project manifest that lists the metadata components you want to deploy or retrieve",
      options: [
        jsonFlag,
        flagsDirFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-m", "--metadata"],
          description:
            "Names of metadata components to include in the manifest",
          args: { name: "metadata" },
          isRepeatable: true,
        },
        {
          name: ["-p", "--source-dir", "--sourcepath"],
          description:
            "Paths to the local source files to include in the manifest",
          args: { name: "source-dir" },
          isRepeatable: true,
        },
        {
          name: ["-n", "--name", "--manifestname"],
          description: "Name of a custom manifest file to create",
          args: { name: "name" },
          exclusiveOn: ["--type"],
        },
        {
          name: ["-t", "--type", "--manifesttype"],
          description:
            "Type of manifest to create; the type determines the name of the created file",
          args: {
            name: "type",
            suggestions: ["pre", "post", "destroy", "package"],
          },
          exclusiveOn: ["--name"],
        },
        {
          name: ["-c", "--include-packages", "--includepackages"],
          description:
            "Package types (managed, unlocked) whose metadata is included in the manifest; by default, metadata in managed and unlocked packages is excluded. Metadata in unmanaged packages is always included",
          args: {
            name: "include-packages",
            suggestions: ["managed", "unlocked"],
          },
          isRepeatable: true,
          dependsOn: ["--from-org"],
        },
        {
          name: "--excluded-metadata",
          description:
            "Metadata types to exclude when building a manifest from an org. Specify the name of the type, not the name of a specific component",
          args: { name: "excluded-metadata" },
          isRepeatable: true,
        },
        {
          name: ["--from-org", "--fromorg"],
          description:
            "Username or alias of the org that contains the metadata components from which to build a manifest",
          args: { name: "from-org" },
          exclusiveOn: ["--source-dir"],
        },
        {
          name: ["-d", "-o", "--output-dir", "--outputdir"],
          description: "Directory to save the created manifest",
          args: { name: "output-dir" },
        },
      ],
    },
    {
      name: ["project:list:ignored", "force:source:ignored:list"],
      description:
        "Check your local project package directories for forceignored files",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-p", "--source-dir", "--sourcepath"],
          description:
            "File or directory of files that the command checks for foreceignored files",
          args: { name: "source-dir" },
        },
      ],
    },
    {
      name: ["project:reset:tracking", "force:source:tracking:reset"],
      description: "Reset local and remote source tracking",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-r", "--revision"],
          description: "SourceMember revision counter number to reset to",
          args: { name: "revision" },
        },
        {
          name: ["-p", "--no-prompt", "--noprompt"],
          description: "Don't prompt for source tracking override confirmation",
        },
      ],
    },
    {
      name: ["project:retrieve:preview", "retrieve:metadata:preview"],
      description:
        "Preview a retrieval to see what will be retrieved from the org, the potential conflicts, and the ignored files",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-c", "--ignore-conflicts"],
          description:
            "Don't display conflicts in the preview of the retrieval",
        },
        targetOrgFlag,
        {
          name: "--concise",
          description:
            "Show only the changes that will be retrieved; omits files that are forceignored",
        },
      ],
    },
    {
      name: ["project:retrieve:start", "retrieve:metadata"],
      description: "Retrieve metadata from an org to your local project",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-a", "--api-version"],
          description: "Target API version for the retrieve",
          args: { name: "api-version" },
        },
        {
          name: ["-c", "--ignore-conflicts"],
          description:
            "Ignore conflicts and retrieve and save files to your local filesystem, even if they overwrite your local changes",
        },
        {
          name: ["-x", "--manifest"],
          description:
            "File path for the manifest (package.xml) that specifies the components to retrieve",
          args: { name: "manifest" },
          exclusiveOn: ["--metadata", "--source-dir"],
        },
        {
          name: ["-m", "--metadata"],
          description:
            "Metadata component names to retrieve. Wildcards (`*`) supported as long as you use quotes, such as `ApexClass:MyClass*`",
          args: { name: "metadata" },
          isRepeatable: true,
          exclusiveOn: ["--manifest", "--source-dir"],
        },
        {
          name: ["-n", "--package-name"],
          description:
            "Package names to retrieve. Use of this flag is for reference only; don't use it to retrieve packaged metadata for development",
          args: { name: "package-name" },
          isRepeatable: true,
        },
        {
          name: "--root-type-with-dependencies",
          description:
            "Metadata type whose dependent types should also be retrieved",
          args: {
            name: "root-type-with-dependencies",
            suggestions: ["Bot", "AiAgentDefinitionVersion"],
          },
          isRepeatable: true,
        },
        {
          name: ["-r", "--output-dir"],
          description: "Directory root for the retrieved source files",
          args: { name: "output-dir" },
          exclusiveOn: ["--package-name", "--source-dir"],
        },
        {
          name: "--single-package",
          description:
            "Indicates that the zip file points to a directory structure for a single package",
          exclusiveOn: ["--ignore-conflicts"],
          dependsOn: ["--target-metadata-dir"],
        },
        {
          name: ["-d", "--source-dir"],
          description: "File paths for source to retrieve from the org",
          args: { name: "source-dir" },
          isRepeatable: true,
          exclusiveOn: ["--manifest", "--metadata"],
        },
        {
          name: ["-t", "--target-metadata-dir"],
          description:
            "Directory that will contain the retrieved metadata format files or ZIP",
          args: { name: "target-metadata-dir" },
          exclusiveOn: ["--ignore-conflicts"],
        },
        targetOrgFlag,
        {
          name: ["-w", "--wait"],
          description:
            "Number of minutes to wait for the command to complete and display results to the terminal window",
          args: { name: "wait" },
        },
        {
          name: ["-z", "--unzip"],
          description: "Extract all files from the retrieved zip file",
          exclusiveOn: ["--ignore-conflicts"],
          dependsOn: ["--target-metadata-dir"],
        },
        {
          name: "--zip-file-name",
          description: "File name to use for the retrieved zip file",
          args: { name: "zip-file-name" },
          exclusiveOn: ["--ignore-conflicts"],
          dependsOn: ["--target-metadata-dir"],
        },
      ],
    },
    {
      name: ["schema:generate:field", "generate:metadata:field"],
      description:
        "Generate metadata source files for a new custom field on a specified object",
      options: [
        flagsDirFlag,
        {
          name: ["-l", "--label"],
          description: "The field's label",
          args: { name: "label" },
          isRequired: true,
        },
        {
          name: ["-o", "--object"],
          description: "The directory that contains the object's source files",
          args: { name: "object" },
        },
      ],
    },
    {
      name: [
        "schema:generate:platformevent",
        "generate:metadata:platformevent",
      ],
      description: "Generate metadata source files for a new platform event",
      options: [
        flagsDirFlag,
        {
          name: ["-l", "--label"],
          description: "The platform event's label",
          args: { name: "label" },
          isRequired: true,
        },
      ],
    },
    {
      name: ["schema:generate:sobject", "generate:metadata:sobject"],
      description: "Generate metadata source files for a new custom object",
      options: [
        flagsDirFlag,
        {
          name: ["-l", "--label"],
          description: "The custom object's label",
          args: { name: "label" },
          isRequired: true,
        },
        {
          name: ["-f", "--use-default-features"],
          description: "Enable all optional features without prompting",
        },
      ],
    },
    {
      name: ["schema:generate:tab", "generate:metadata:tab"],
      description:
        "Generate the metadata source files for a new custom tab on a custom object",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-o", "--object"],
          description:
            "API name of the custom object you're generating a tab for",
          args: { name: "object" },
          isRequired: true,
        },
        {
          name: ["-d", "--directory"],
          description:
            'Path to a "tabs" directory that will contain the source files for your new tab',
          args: { name: "directory" },
          isRequired: true,
        },
        {
          name: ["-i", "--icon"],
          description:
            "Number from 1 to 100 that specifies the color scheme and icon for the custom tab",
          args: { name: "icon" },
        },
      ],
    },
    { name: "search", description: "Search for a command" },
    {
      name: ["sobject:describe", "force:schema:sobject:describe"],
      description:
        "Display the metadata for a standard or custom object or a Tooling API object",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-s", "--sobject", "--sobjecttype"],
          description: "API name of the object to describe",
          args: { name: "sobject" },
          isRequired: true,
        },
        {
          name: ["-t", "--use-tooling-api", "--usetoolingapi"],
          description:
            "Use Tooling API to display metadata for Tooling API objects",
        },
      ],
    },
    {
      name: ["sobject:list", "force:schema:sobject:list"],
      description: "List all Salesforce objects of a specified category",
      options: [
        jsonFlag,
        flagsDirFlag,
        targetOrgLegacyFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
        {
          name: ["-s", "-c", "--sobject", "--sobjecttypecategory"],
          description: "Category of objects to list",
          args: { name: "sobject" },
        },
      ],
    },
    { name: "telemetry", options: [jsonFlag, flagsDirFlag], hidden: true },
    {
      name: [
        "template:generate:analytics:template",
        "force:analytics:template:create",
        "analytics:generate:template",
      ],
      description: "Generate a simple Analytics template",
      options: [
        jsonFlag,
        flagsDirFlag,
        outputDirFlag,
        apiVersionLegacyFlag,
        {
          name: ["-n", "--name", "--templatename"],
          description: "Name of the Analytics template",
          args: { name: "name" },
          isRequired: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: [
        "template:generate:apex:class",
        "force:apex:class:create",
        "apex:generate:class",
      ],
      description: "Generate an Apex class",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--classname"],
          description: "Name of the generated Apex class",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: {
            name: "template",
            suggestions: [
              "ApexException",
              "ApexUnitTest",
              "BasicUnitTest",
              "Batchable",
              "DefaultApexClass",
              "InboundEmailService",
              "Queueable",
            ],
          },
        },
        outputDirFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: [
        "template:generate:apex:trigger",
        "force:apex:trigger:create",
        "apex:generate:trigger",
      ],
      description: "Generate an Apex trigger",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--triggername"],
          description: "Name of the generated Apex trigger",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: { name: "template", suggestions: ["ApexTrigger"] },
        },
        outputDirFlag,
        apiVersionLegacyFlag,
        {
          name: ["-s", "--sobject"],
          description: "Salesforce object to generate a trigger on",
          args: { name: "sobject" },
        },
        {
          name: ["-e", "--event", "--triggerevents"],
          description: "Events that fire the trigger",
          args: {
            name: "event",
            suggestions: [
              "before insert",
              "before update",
              "before delete",
              "after insert",
              "after update",
              "after delete",
              "after undelete",
            ],
          },
          isRepeatable: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: "template:generate:digital-experience:site",
      description: "Generate an Experience Cloud site",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-o", "--target-org"],
          description: "Username or alias of the target org",
          args: { name: "target-org" },
        },
        {
          name: ["-n", "--name"],
          description: "Name of the Experience Cloud site to generate",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template-name"],
          description: "Template to use when generating the site",
          args: {
            name: "template-name",
            suggestions: ["Build Your Own (LWR)"],
          },
          isRequired: true,
        },
        {
          name: ["-p", "--url-path-prefix"],
          description:
            "URL path prefix for the site; must contain only alphanumeric characters",
          args: { name: "url-path-prefix" },
        },
        {
          name: ["-e", "--admin-email"],
          description:
            "Email address for the site administrator. Defaults to the username of the currently authenticated user",
          args: { name: "admin-email" },
        },
        {
          name: ["-d", "--output-dir"],
          description: "Directory to generate the site files in",
          args: { name: "output-dir" },
        },
      ],
    },
    {
      name: "template:generate:flexipage",
      description: "Generate a FlexiPage, also known as a Lightning page",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--flexipagename"],
          description: "Name of the FlexiPage",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template"],
          description: "Template type for the FlexiPage",
          args: {
            name: "template",
            suggestions: ["RecordPage", "AppPage", "HomePage"],
          },
          isRequired: true,
        },
        outputDirFlag,
        apiVersionLegacyFlag,
        {
          name: ["--label", "--masterlabel"],
          description:
            "Label of this FlexiPage; if not specified, uses the FlexiPage name as the label",
          args: { name: "label" },
        },
        {
          name: "--description",
          description:
            "Description for the FlexiPage, which provides context about its purpose",
          args: { name: "description" },
        },
        {
          name: ["-s", "--sobject", "--entity-name", "--entity"],
          description:
            "API name of the Salesforce object; required when creating a RecordPage",
          args: { name: "sobject" },
        },
        {
          name: "--primary-field",
          description:
            "Primary field for the dynamic highlights header; typically 'Name'. Used only with RecordPage",
          args: { name: "primary-field" },
        },
        {
          name: "--secondary-fields",
          description:
            "Secondary fields shown in the dynamic highlights header. Specify multiple fields separated by commas. Maximum of 11 fields. Used only with RecordPage",
          args: { name: "secondary-fields" },
          isRepeatable: true,
        },
        {
          name: "--detail-fields",
          description:
            "Fields to display in the Details tab. Specify multiple fields separated by commas. Fields are split into two columns. Used only with RecordPage",
          args: { name: "detail-fields" },
          isRepeatable: true,
        },
        {
          name: ["-i", "--internal"],
          description:
            "Generate lightning bundles without creating a -meta.xml file",
          hidden: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: "template:generate:lightning-out",
      description:
        "Generate the required metadata to scaffold a Lightning Out 2.0 app",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: "--app-name",
          description: "Developer name of the new Lightning Out 2.0 app",
          args: { name: "app-name" },
        },
        {
          name: "--eca-name",
          description:
            "Developer name of the External Client Application associated with the app",
          args: { name: "eca-name" },
        },
        {
          name: "--runtime",
          description: "Runtime that serves the app",
          args: { name: "runtime", suggestions: ["LWR_CORE", "CLWR"] },
        },
        {
          name: "--host-domains",
          description:
            "HTTP or HTTPS origin of an external host page that embeds the app",
          args: { name: "host-domains" },
          isRepeatable: true,
        },
        {
          name: "--components",
          description:
            "Name of a Lightning web component exposed by the app. Repeat the flag to specify more than one. Replaces, rather than merges with, any components in the --definition-file",
          args: { name: "components" },
          isRepeatable: true,
        },
        {
          name: "--eca-contact-email",
          description: "Contact email for the External Client Application",
          args: { name: "eca-contact-email" },
        },
        {
          name: "--eca-callback-url",
          description: "OAuth callback URL for the External Client Application",
          args: { name: "eca-callback-url" },
        },
        {
          name: "--definition-file",
          description:
            "Path to a JSON file describing the Lightning Out 2.0 app. Individual flags, when supplied, override the corresponding value in this file",
          args: { name: "definition-file" },
        },
        outputDirFlag,
        loglevelFlag,
      ],
    },
    {
      name: [
        "template:generate:lightning:app",
        "force:lightning:app:create",
        "lightning:generate:app",
      ],
      description: "Generate a Lightning App",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--appname"],
          description: "Name of the generated Lightning App",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: { name: "template", suggestions: ["DefaultLightningApp"] },
        },
        outputDirFlag,
        apiVersionLegacyFlag,
        {
          name: ["-i", "--internal"],
          description:
            "Generate lightning bundles without creating a -meta.xml file",
          hidden: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: [
        "template:generate:lightning:component",
        "force:lightning:component:create",
        "lightning:generate:component",
      ],
      description:
        "Generate a bundle for an Aura component or a Lightning web component",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--componentname"],
          description: "Name of the generated Lightning Component",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: {
            name: "template",
            suggestions: [
              "default",
              "analyticsDashboard",
              "analyticsDashboardWithStep",
              "typescript",
            ],
          },
        },
        outputDirFlag,
        apiVersionLegacyFlag,
        {
          name: "--type",
          description: "Type of the component bundle",
          args: { name: "type", suggestions: ["aura", "lwc"] },
        },
        {
          name: ["-i", "--internal"],
          description:
            "Generate lightning bundles without creating a -meta.xml file",
          hidden: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: [
        "template:generate:lightning:event",
        "force:lightning:event:create",
        "lightning:generate:event",
      ],
      description: "Generate a Lightning Event",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--eventname"],
          description: "Name of the generated Lightning Event",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: { name: "template", suggestions: ["DefaultLightningEvt"] },
        },
        outputDirFlag,
        apiVersionLegacyFlag,
        {
          name: ["-i", "--internal"],
          description:
            "Generate lightning bundles without creating a -meta.xml file",
          hidden: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: [
        "template:generate:lightning:interface",
        "force:lightning:interface:create",
        "lightning:generate:interface",
      ],
      description: "Generate a Lightning Interface",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--interfacename"],
          description: "Name of the generated Lightning Interface",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: { name: "template", suggestions: ["DefaultLightningIntf"] },
        },
        outputDirFlag,
        apiVersionLegacyFlag,
        {
          name: ["-i", "--internal"],
          description:
            "Generate lightning bundles without creating a -meta.xml file",
          hidden: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: [
        "template:generate:lightning:test",
        "force:lightning:test:create",
        "lightning:generate:test",
      ],
      description: "Generate a Lightning test",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--testname"],
          description: "Name of the generated Lightning Test",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: { name: "template", suggestions: ["DefaultLightningTest"] },
        },
        outputDirFlag,
        {
          name: ["-i", "--internal"],
          description:
            "Generate lightning bundles without creating a -meta.xml file",
          hidden: true,
        },
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: [
        "template:generate:project",
        "force:project:create",
        "project:generate",
      ],
      description: "Generate a Salesforce DX project",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--projectname"],
          description: "Name of the generated project",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for project creation",
          args: {
            name: "template",
            suggestions: [
              "standard",
              "empty",
              "analytics",
              "reactinternalapp",
              "reactexternalapp",
              "angularinternalapp",
              "angularexternalapp",
              "vueinternalapp",
              "agent",
            ],
          },
        },
        outputDirFlag,
        {
          name: ["-s", "--namespace"],
          description:
            "Namespace associated with this project and any connected scratch orgs",
          args: { name: "namespace" },
        },
        {
          name: ["-p", "--default-package-dir", "--defaultpackagedir"],
          description: "Default package directory name",
          args: { name: "default-package-dir" },
        },
        {
          name: ["-x", "--manifest"],
          description:
            "Generate a manifest (package.xml) for change-set based development",
        },
        {
          name: ["-l", "--login-url", "--loginurl"],
          description: "Salesforce instance login URL",
          args: { name: "login-url" },
          hidden: true,
        },
        {
          name: "--lwc-language",
          description:
            'Language of the Lightning Web Components. If not specified, "javascript" is used',
          args: {
            name: "lwc-language",
            suggestions: ["javascript", "typescript"],
          },
        },
        loglevelFlag,
        {
          name: "--api-version",
          description:
            "Will set this version as sourceApiVersion in the sfdx-project.json file",
          args: { name: "api-version" },
        },
      ],
    },
    {
      name: [
        "template:generate:static-resource",
        "force:staticresource:create",
        "static-resource:generate",
      ],
      description: "Generate a static resource",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--resourcename"],
          description: "Name of the generated static resource",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--type", "--contenttype"],
          description:
            "Content type (mime type) of the generated static resource",
          args: { name: "type" },
        },
        outputDirFlag,
        apiVersionLegacyFlag,
        loglevelFlag,
      ],
    },
    {
      name: "template:generate:ui-bundle",
      description:
        "Generate a UI bundle, which contains the code and metadata to build a UI experience that uses non-native Salesforce frameworks, such as React or Angular",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name"],
          description: "API name of the generated UI bundle",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template"],
          description:
            "Template to use when creating the files for a specific UI framework",
          args: {
            name: "template",
            suggestions: ["default", "reactbasic", "angularbasic", "vuebasic"],
          },
        },
        {
          name: ["-l", "--label"],
          description: "Master label for the UI bundle",
          args: { name: "label" },
        },
        {
          name: ["-d", "--output-dir"],
          description: "Directory into which the files are created",
          args: { name: "output-dir" },
        },
        apiVersionFlag,
      ],
    },
    {
      name: "template:generate:ui-embedding",
      description:
        "Generate a Lightning Web Component (LWC) bundle that wraps the <lightning-ui-embedding> base component",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name"],
          description:
            "Name of the generated component; must be in PascalCase format",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-s", "--src"],
          description: "Absolute HTTPS URL that the iframe will load",
          args: { name: "src" },
          isRequired: true,
        },
        {
          name: "--sandbox",
          description:
            "Iframe sandbox token. Specify this flag multiple times to set more than one token",
          args: {
            name: "sandbox",
            suggestions: [
              "allow-forms",
              "allow-modals",
              "allow-orientation-lock",
              "allow-pointer-lock",
              "allow-popups",
              "allow-popups-to-escape-sandbox",
              "allow-presentation",
              "allow-same-origin",
              "allow-scripts",
              "allow-storage-access-by-user-activation",
              "allow-top-navigation",
              "allow-top-navigation-by-user-activation",
            ],
          },
          isRepeatable: true,
          isRequired: true,
        },
        {
          name: "--title",
          description: "Accessible title for the embedded iframe",
          args: { name: "title" },
          isRequired: true,
        },
        outputDirFlag,
        apiVersionLegacyFlag,
        {
          name: ["-i", "--internal"],
          description:
            "Generate lightning bundles without creating a -meta.xml file",
          hidden: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: [
        "template:generate:visualforce:component",
        "force:visualforce:component:create",
        "visualforce:generate:component",
      ],
      description: "Generate a Visualforce Component",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--componentname"],
          description: "Name of the generated Visualforce Component",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: { name: "template", suggestions: ["DefaultVFComponent"] },
        },
        outputDirFlag,
        apiVersionLegacyFlag,
        {
          name: ["-l", "--label"],
          description: "Visualforce Component label",
          args: { name: "label" },
          isRequired: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: [
        "template:generate:visualforce:page",
        "force:visualforce:page:create",
        "visualforce:generate:page",
      ],
      description: "Generate a Visualforce Page",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name", "--pagename"],
          description: "Name of the generated Visualforce Page",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["-t", "--template"],
          description: "Template to use for file creation",
          args: { name: "template", suggestions: ["DefaultVFPage"] },
          hidden: true,
        },
        outputDirFlag,
        apiVersionLegacyFlag,
        {
          name: ["-l", "--label"],
          description: "Visualforce Page label",
          args: { name: "label" },
          isRequired: true,
        },
        loglevelFlag,
      ],
    },
    {
      name: "ui-bundle:dev",
      description:
        "Preview a UI bundle locally and in real-time, without deploying it to your org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-n", "--name"],
          description: "Name of the UI bundle to preview",
          args: { name: "name" },
        },
        {
          name: ["-u", "--url"],
          description:
            "URL where your developer server runs, such as https://localhost:5173. All UI, static, and hot deployment requests are forwarded to this URL",
          args: { name: "url" },
        },
        {
          name: ["-p", "--port"],
          description: "Local port where the proxy server listens",
          args: { name: "port" },
        },
        targetOrgFlag,
        {
          name: ["-b", "--open"],
          description:
            "Automatically open the proxy server URL in your default browser when the dev server is ready",
        },
      ],
    },
    {
      name: "ui-bundle:upload",
      description: "Upload a UI Bundle to your org",
      options: [
        jsonFlag,
        flagsDirFlag,
        {
          name: ["-z", "--zip-file"],
          description: "Path to the compressed UI Bundle source to upload",
          args: { name: "zip-file" },
        },
        {
          name: ["-d", "--bundle-dir"],
          description:
            "Path to an uncompressed UI Bundle source directory. This command compresses the directory into a ZIP file before uploading",
          args: { name: "bundle-dir" },
        },
        {
          name: "--use-salesforce-pages",
          description:
            "Upload UI Bundle to Salesforce Pages. This is a required flag as only Salesforce Pages uploads are currently supported",
          isRequired: true,
        },
        targetOrgFlag,
        apiVersionFlag,
        {
          name: "--bundle-name",
          description: "Name to associate with the uploaded UI Bundle",
          args: { name: "bundle-name" },
        },
      ],
      hidden: true,
    },
    {
      name: "update",
      description: "Update the sfdx CLI",
      options: [
        { name: "--autoupdate", hidden: true },
        {
          name: ["-a", "--available"],
          description: "See available versions",
          exclusiveOn: ["--version", "--interactive"],
        },
        {
          name: "--force",
          description: "Force a re-download of the requested version",
          exclusiveOn: ["--interactive", "--available"],
        },
        {
          name: ["-i", "--interactive"],
          description:
            "Interactively select version to install. This is ignored if a channel is provided",
          exclusiveOn: ["--version"],
        },
        {
          name: ["-b", "--verbose"],
          description: "Show more details about the available versions",
          dependsOn: ["--available"],
        },
        {
          name: ["-v", "--version"],
          description: "Install a specific version",
          args: { name: "version" },
          exclusiveOn: ["--interactive"],
        },
      ],
      args: { name: "channel", isOptional: true },
    },
    {
      name: "version",
      options: [
        jsonFlag,
        {
          name: "--verbose",
          description: "Show additional information about the CLI",
        },
      ],
    },
    {
      name: "which",
      description: "Show which plugin a command is in",
      options: [jsonFlag],
      args: { name: "command", isOptional: true, isVariadic: true },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for command",
      isPersistent: true,
    },
    { name: ["-v", "--version"], description: "Show CLI version" },
  ],
};

export default completionSpec;
