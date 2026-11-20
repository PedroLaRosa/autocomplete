// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optAgentEndpointId: Fig.Option = {
  name: "--agent-endpoint-id",
  description: "A unique ID for the endpoint",
  args: { name: "agent-endpoint-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optSessionId: Fig.Option = {
  name: "--session-id",
  description: "A unique ID for the session",
  args: { name: "session-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "generative-ai-agent-runtime",
  description: "Generative AI Agents Client",
  subcommands: [
    {
      name: "knowledge-base-metadata-summary",
      description:
        "Represents metadata about a field including its name, type, supported operations, and possible values",
      subcommands: [
        {
          name: "retrieve-metadata",
          description: "Returns metadata of provided knowledgeBase",
          options: [
            {
              name: "--knowledge-base-id",
              description: "A unique ID for the Knowledge Base",
              args: { name: "knowledge-base-id" },
              isRequired: true,
            },
            {
              name: "--filters",
              description:
                "List of metadata filters to narrow down the retrieved metadata",
              args: { name: "json" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "session",
      description:
        "A session represents an interactive conversation initiated by a user through an API to engage with an agent",
      subcommands: [
        {
          name: "create",
          description:
            "A session represents an interactive conversation initiated by a user through an API to engage with an agent",
          options: [
            optAgentEndpointId,
            {
              name: "--display-name",
              description: "The name of the session",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "An optional description of the session",
              args: { name: "description" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a session and all its associated information",
          options: [
            optAgentEndpointId,
            optSessionId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Return the session resource identified by the session ID",
          options: [optAgentEndpointId, optSessionId, optFromJson],
        },
        {
          name: "update",
          description:
            "Update session metadata, including but not limited to description, tags",
          options: [
            optAgentEndpointId,
            optSessionId,
            {
              name: "--display-name",
              description: "The name of the session",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A description of the session",
              args: { name: "description" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "agent-endpoint",
      subcommands: [
        {
          name: "chat",
          description: "Chat on endpoint with provided messages",
          options: [
            optAgentEndpointId,
            {
              name: "--user-message",
              description: "The input user message content for the chat",
              args: { name: "user-message" },
            },
            {
              name: "--should-stream",
              description: "Whether to stream the response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--session-id",
              description: "Optional sessionId",
              args: { name: "session-id" },
            },
            {
              name: "--tool-parameters",
              description:
                "A map where each key is a toolId and the value contains tool type and additional dynamic parameters",
              args: { name: "json" },
            },
            {
              name: "--tool-inputs",
              description:
                "Array of tool input objects, each specifying a tool's ID, type",
              args: { name: "json" },
            },
            {
              name: "--performed-actions",
              description:
                "A list of actions that have been performed based on prior required actions",
              args: { name: "json" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
