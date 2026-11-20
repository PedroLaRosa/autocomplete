// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optServingMode: Fig.Option = {
  name: "--serving-mode",
  args: { name: "json" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of compartment in which to call the Generative AI service to chat",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optChatRequest: Fig.Option = {
  name: "--chat-request",
  args: { name: "json" },
  isRequired: true,
};
const optChatRequestFrequencyPenalty: Fig.Option = {
  name: "--chat-request-frequency-penalty",
  description:
    "To reduce repetitiveness of generated tokens, this number penalizes new tokens based on their frequency",
  args: { name: "chat-request-frequency-penalty" },
};
const optChatRequestPresencePenalty: Fig.Option = {
  name: "--chat-request-presence-penalty",
  description:
    "To reduce repetitiveness of generated tokens, this number penalizes new tokens based on whether they've",
  args: { name: "chat-request-presence-penalty" },
};
const optChatRequestResponseFormat: Fig.Option = {
  name: "--chat-request-response-format",
  args: { name: "json" },
};
const optChatRequestSeed: Fig.Option = {
  name: "--chat-request-seed",
  description:
    "If specified, the backend will make a best effort to sample tokens deterministically",
  args: { name: "integer" },
};
const optChatRequestStreamOptions: Fig.Option = {
  name: "--chat-request-stream-options",
  args: { name: "json" },
};
const optChatRequestTemperature: Fig.Option = {
  name: "--chat-request-temperature",
  description: "A number that sets the randomness of the generated output",
  args: { name: "chat-request-temperature" },
};
const optChatRequestTopP: Fig.Option = {
  name: "--chat-request-top-p",
  description:
    "If set to a probability 0.0 < p < 1.0, it ensures that only the most likely tokens",
  args: { name: "chat-request-top-p" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment to apply guardrails",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment to call into the Generative AI service LLMs",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDocuments: Fig.Option = {
  name: "--documents",
  description: "A list of document strings to rerank based on the query asked",
  args: { name: "json" },
  isRequired: true,
};
const optGuardrailConfigs: Fig.Option = {
  name: "--guardrail-configs",
  args: { name: "json" },
  isRequired: true,
};
const optGuardrailVersionConfig: Fig.Option = {
  name: "--guardrail-version-config",
  args: { name: "json" },
};
const optInput: Fig.Option = {
  name: "--input",
  description: "Input query for search in the documents",
  args: { name: "input" },
  isRequired: true,
};
const optIsEcho: Fig.Option = {
  name: "--is-echo",
  description: "Whether or not to return the documents in the response",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optMaxChunksPerDocument: Fig.Option = {
  name: "--max-chunks-per-document",
  description:
    "The maximum number of chunks to produce internally from a document",
  args: { name: "integer" },
};
const optMaxTokensPerDocument: Fig.Option = {
  name: "--max-tokens-per-document",
  description:
    "Used to truncate the long documents with the specified no of tokens",
  args: { name: "integer" },
};
const optMultimodalInput: Fig.Option = {
  name: "--multimodal-input",
  description:
    "An ordered list of text and image inputs for multimodal guardrail evaluation",
  args: { name: "json" },
};
const optTopN: Fig.Option = {
  name: "--top-n",
  description: "The number of most relevant documents or indices to return",
  args: { name: "integer" },
};
const completionSpec: Fig.Spec = {
  name: "generative-ai-inference",
  description: "Generative AI Service Inference",
  subcommands: [
    {
      name: "generate-text-result",
      description: "The generated text result to return",
      subcommands: [
        {
          name: "generate-text-llama-llm-inference-request",
          description: "Generates a text response based on the user prompt",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of compartment in which to call the Generative AI service to generate text",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optServingMode,
            {
              name: "--inference-request-prompt",
              description: "Represents the prompt to be completed",
              args: { name: "inference-request-prompt" },
            },
            {
              name: "--inference-request-is-stream",
              description: "Whether to stream back partial progress",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--inference-request-num-generations",
              description:
                "The number of generated texts that will be returned",
              args: { name: "integer" },
            },
            {
              name: "--inference-request-is-echo",
              description:
                "Whether or not to return the user prompt in the response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--inference-request-top-k",
              description:
                "An integer that sets up the model to use only the top k most likely tokens in the generated output",
              args: { name: "integer" },
            },
            {
              name: "--inference-request-top-p",
              description:
                "If set to a probability 0.0 < p < 1.0, it ensures that only the most likely tokens",
              args: { name: "inference-request-top-p" },
            },
            {
              name: "--inference-request-temperature",
              description:
                "A number that sets the randomness of the generated output",
              args: { name: "inference-request-temperature" },
            },
            {
              name: "--inference-request-frequency-penalty",
              description:
                "To reduce repetitiveness of generated tokens, this number penalizes new tokens based on their frequency",
              args: { name: "inference-request-frequency-penalty" },
            },
            {
              name: "--inference-request-presence-penalty",
              description:
                "To reduce repetitiveness of generated tokens, this number penalizes new tokens based on whether they've",
              args: { name: "inference-request-presence-penalty" },
            },
            {
              name: "--inference-request-stop",
              description:
                "List of strings that stop the generation if they are generated for the response text",
              args: { name: "json" },
            },
            {
              name: "--inference-request-log-probs",
              description:
                "Includes the logarithmic probabilities for the most likely output tokens and the chosen tokens",
              args: { name: "integer" },
            },
            {
              name: "--inference-request-max-tokens",
              description:
                "The maximum number of tokens that can be generated per output sequence",
              args: { name: "integer" },
            },
            optFromJson,
          ],
        },
        {
          name: "generate-text-cohere-llm-inference-request",
          description: "Generates a text response based on the user prompt",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of compartment in which to call the Generative AI service to generate text",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optServingMode,
            {
              name: "--inference-request-prompt",
              description: "Represents the prompt to be completed",
              args: { name: "inference-request-prompt" },
              isRequired: true,
            },
            {
              name: "--inference-request-is-stream",
              description: "Whether to stream back partial progress",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--inference-request-num-generations",
              description:
                "The number of generated texts that will be returned",
              args: { name: "integer" },
            },
            {
              name: "--inference-request-is-echo",
              description:
                "Whether or not to return the user prompt in the response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--inference-request-max-tokens",
              description:
                "The maximum number of tokens to predict for each response",
              args: { name: "integer" },
            },
            {
              name: "--inference-request-temperature",
              description:
                "A number that sets the randomness of the generated output",
              args: { name: "inference-request-temperature" },
            },
            {
              name: "--inference-request-top-k",
              description:
                "An integer that sets up the model to use only the top k most likely tokens in the generated output",
              args: { name: "integer" },
            },
            {
              name: "--inference-request-top-p",
              description:
                "If set to a probability 0.0 < p < 1.0, it ensures that only the most likely tokens",
              args: { name: "inference-request-top-p" },
            },
            {
              name: "--inference-request-frequency-penalty",
              description:
                "To reduce repetitiveness of generated tokens, this number penalizes new tokens based on their frequency",
              args: { name: "inference-request-frequency-penalty" },
            },
            {
              name: "--inference-request-presence-penalty",
              description:
                "To reduce repetitiveness of generated tokens, this number penalizes new tokens based on whether they've",
              args: { name: "inference-request-presence-penalty" },
            },
            {
              name: "--inference-request-stop-sequences",
              description:
                "The generated text is cut at the end of the earliest occurrence of this stop sequence",
              args: { name: "json" },
            },
            {
              name: "--inference-request-return-likelihoods",
              description:
                "Specifies how and if the token likelihoods are returned with the response",
              args: { suggestions: ["NONE", "ALL", "GENERATION"] },
            },
            {
              name: "--inference-request-truncate",
              description:
                "For an input that's longer than the maximum token length",
              args: { suggestions: ["NONE", "START", "END"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "apply-guardrails-result",
      description: "The result of applying guardrails to the input content",
      subcommands: [
        {
          name: "apply-guardrails",
          description:
            "Applies guardrails to the input content, including content moderation, PII detection",
          options: [
            optGuardrailConfigs,
            optCompartmentId2,
            { name: "--input", args: { name: "json" } },
            optMultimodalInput,
            optGuardrailVersionConfig,
            optFromJson,
          ],
        },
        {
          name: "apply-guardrails-guardrails-text-input",
          description:
            "Applies guardrails to the input content, including content moderation, PII detection",
          options: [
            optGuardrailConfigs,
            optCompartmentId2,
            optMultimodalInput,
            optGuardrailVersionConfig,
            {
              name: "--input-content",
              description: "The actual input data",
              args: { name: "input-content" },
            },
            {
              name: "--input-language-code",
              description:
                "The language code of the input text. example - en | es | en-US | zh-CN",
              args: { name: "input-language-code" },
            },
            optFromJson,
          ],
        },
        {
          name: "apply-guardrails-guardrails-image-input",
          description:
            "Applies guardrails to the input content, including content moderation, PII detection",
          options: [
            optGuardrailConfigs,
            optCompartmentId2,
            optMultimodalInput,
            optGuardrailVersionConfig,
            { name: "--input-image-url", args: { name: "json" } },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "embed-text-result",
      description: "The generated embedded result to return",
      subcommands: [
        {
          name: "embed-text",
          description: "Produces embeddings for the inputs",
          options: [
            optServingMode,
            {
              name: "--compartment-id",
              description:
                "The OCID of compartment in which to call the Generative AI service to create text embeddings",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--inputs",
              description:
                "Provide a list of strings or one base64 encoded image with input_type setting to IMAGE",
              args: { name: "json" },
            },
            {
              name: "--embed-contents",
              description: "An array of text/image inputs to be embedded",
              args: { name: "json" },
            },
            {
              name: "--is-echo",
              description:
                "Whether or not to include the original inputs in the response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--embedding-types",
              description:
                "Specifies the types of embeddings you want to get back",
              args: {
                suggestions: [
                  "float",
                  "int8",
                  "uint8",
                  "binary",
                  "ubinary",
                  "base64",
                ],
              },
            },
            {
              name: "--output-dimensions",
              description: "The number of dimensions of the output embedding",
              args: { name: "integer" },
            },
            {
              name: "--truncate",
              description:
                "For an input that's longer than the maximum token length",
              args: { suggestions: ["NONE", "START", "END"] },
            },
            {
              name: "--input-type",
              description: "Specifies the input type",
              args: {
                suggestions: [
                  "SEARCH_DOCUMENT",
                  "SEARCH_QUERY",
                  "CLASSIFICATION",
                  "CLUSTERING",
                  "IMAGE",
                ],
              },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "guardrail-version-collection",
      description:
        "The response containing a list of guardrail system versions",
      subcommands: [
        {
          name: "list-guardrail-versions",
          description: "List the available guardrail system versions",
          options: [
            {
              name: "--opc-compartment-id",
              description: "The client compartment ID",
              args: { name: "opc-compartment-id" },
              isRequired: true,
            },
            {
              name: "--state",
              description:
                "A filter to return only the guardrail versions whose state matches the given value",
              args: {
                suggestions: ["ACTIVE", "PREVIEW", "DEPRECATED", "RETIRED"],
              },
            },
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
      name: "summarize-text-result",
      description: "Summarize text result to return to caller",
      subcommands: [
        {
          name: "summarize-text",
          description: "Summarizes the input text",
          options: [
            {
              name: "--input",
              description: "The input string to be summarized",
              args: { name: "input" },
              isRequired: true,
            },
            optServingMode,
            {
              name: "--compartment-id",
              description:
                "The OCID of compartment in which to call the Generative AI service to summarize text",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--is-echo",
              description:
                "Whether or not to include the original inputs in the response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--temperature",
              description:
                "A number that sets the randomness of the generated output",
              args: { name: "temperature" },
            },
            {
              name: "--additional-command",
              description:
                "A free-form instruction for modifying how the summaries get generated",
              args: { name: "additional-command" },
            },
            {
              name: "--length",
              description: "Indicates the approximate length of the summary",
              args: { suggestions: ["SHORT", "MEDIUM", "LONG", "AUTO"] },
            },
            {
              name: "--format",
              description:
                "Indicates the style in which the summary will be delivered - in a free form paragraph or in bullet points",
              args: { suggestions: ["PARAGRAPH", "BULLETS", "AUTO"] },
            },
            {
              name: "--extractiveness",
              description:
                "Controls how close to the original text the summary is",
              args: { suggestions: ["LOW", "MEDIUM", "HIGH", "AUTO"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "rerank-text-result",
      description: "The rerank response to return to the caller",
      subcommands: [
        {
          name: "rerank-text",
          description:
            "Reranks the text responses based on the input documents and a prompt",
          options: [
            optInput,
            optCompartmentId3,
            optServingMode,
            optDocuments,
            optTopN,
            optIsEcho,
            optMaxChunksPerDocument,
            optMaxTokensPerDocument,
            optFromJson,
          ],
        },
        {
          name: "rerank-text-dedicated-serving-mode",
          description:
            "Reranks the text responses based on the input documents and a prompt",
          options: [
            optInput,
            optCompartmentId3,
            optDocuments,
            {
              name: "--serving-mode-endpoint-id",
              description: "The OCID of the endpoint to use",
              args: { name: "serving-mode-endpoint-id" },
              isRequired: true,
            },
            optTopN,
            optIsEcho,
            optMaxChunksPerDocument,
            optMaxTokensPerDocument,
            optFromJson,
          ],
        },
        {
          name: "rerank-text-on-demand-serving-mode",
          description:
            "Reranks the text responses based on the input documents and a prompt",
          options: [
            optInput,
            optCompartmentId3,
            optDocuments,
            {
              name: "--serving-mode-model-id",
              description: "The unique ID of a model to use",
              args: { name: "serving-mode-model-id" },
              isRequired: true,
            },
            optTopN,
            optIsEcho,
            optMaxChunksPerDocument,
            optMaxTokensPerDocument,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "chat-result",
      description: "The response to the chat conversation",
      subcommands: [
        {
          name: "chat",
          description: "Creates a response for the given conversation",
          options: [
            optCompartmentId,
            optServingMode,
            optChatRequest,
            optFromJson,
          ],
        },
        {
          name: "chat-dedicated-serving-mode",
          description: "Creates a response for the given conversation",
          options: [
            optCompartmentId,
            optChatRequest,
            {
              name: "--serving-mode-endpoint-id",
              description: "The OCID of the endpoint to use",
              args: { name: "serving-mode-endpoint-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "chat-on-demand-serving-mode",
          description: "Creates a response for the given conversation",
          options: [
            optCompartmentId,
            optChatRequest,
            {
              name: "--serving-mode-model-id",
              description: "The unique ID of a model to use",
              args: { name: "serving-mode-model-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "chat-cohere-chat-request-v2",
          description: "Creates a response for the given conversation",
          options: [
            optCompartmentId,
            optServingMode,
            {
              name: "--chat-request-messages",
              description:
                "A list of chat messages in chronological order, representing a conversation between the user and the model",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--chat-request-documents",
              description:
                "A list of relevant documents that the model can refer to for generating grounded responses to the user's",
              args: { name: "json" },
            },
            { name: "--chat-request-citation-options", args: { name: "json" } },
            {
              name: "--chat-request-tools-choice",
              description:
                "Used to control whether or not the model will be forced to use a tool when answering",
              args: { suggestions: ["REQUIRED", "NONE"] },
            },
            {
              name: "--chat-request-tools",
              description:
                "A list of available tools (functions) that the model may suggest invoking before producing a text response",
              args: { name: "json" },
            },
            {
              name: "--chat-request-is-strict-tools-enabled",
              description:
                "When set to true, tool calls in the Assistant message will be forced to follow the tool definition strictly",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--chat-request-is-log-probs-enabled",
              description:
                "The log probabilities of the generated tokens will be included in the response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--chat-request-thinking", args: { name: "json" } },
            optChatRequestResponseFormat,
            {
              name: "--chat-request-is-search-queries-only",
              description:
                "When set to true, the response contains only a list of generated search queries without the search results",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optChatRequestStreamOptions,
            {
              name: "--chat-request-is-stream",
              description:
                "Whether to stream the partial progress of the model's response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--chat-request-max-tokens",
              description:
                "The maximum number of output tokens that the model will generate for the response",
              args: { name: "integer" },
            },
            optChatRequestTemperature,
            {
              name: "--chat-request-top-k",
              description:
                "A sampling method in which the model chooses the next token randomly from the top k most likely tokens",
              args: { name: "integer" },
            },
            optChatRequestTopP,
            optChatRequestFrequencyPenalty,
            optChatRequestPresencePenalty,
            optChatRequestSeed,
            {
              name: "--chat-request-stop-sequences",
              description:
                "Stop the model generation when it reaches a stop sequence defined in this parameter",
              args: { name: "json" },
            },
            {
              name: "--chat-request-priority",
              description:
                "The priority of the request (lower means earlier handling; default 0 highest priority)",
              args: { name: "integer" },
            },
            {
              name: "--chat-request-is-raw-prompting",
              description:
                "When enabled, the user’s message will be sent to the model without any preprocessing",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--chat-request-safety-mode",
              description:
                "Safety mode: Adds a safety instruction for the model to use when generating responses",
              args: { suggestions: ["CONTEXTUAL", "STRICT", "OFF"] },
            },
            optFromJson,
          ],
        },
        {
          name: "chat-generic-chat-request",
          description: "Creates a response for the given conversation",
          options: [
            optCompartmentId,
            optServingMode,
            {
              name: "--chat-request-messages",
              description: "The series of messages in a chat request",
              args: { name: "json" },
            },
            {
              name: "--chat-request-reasoning-effort",
              description:
                "Constrains effort on reasoning for reasoning models",
              args: {
                suggestions: ["NONE", "MINIMAL", "LOW", "MEDIUM", "HIGH"],
              },
            },
            {
              name: "--chat-request-verbosity",
              description: "Constrains the verbosity of the model's response",
              args: { suggestions: ["LOW", "MEDIUM", "HIGH"] },
            },
            {
              name: "--chat-request-metadata",
              description:
                "Set of 16 key-value pairs that can be attached to an object",
              args: { name: "json" },
            },
            {
              name: "--chat-request-is-stream",
              description: "Whether to stream back partial progress",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optChatRequestStreamOptions,
            {
              name: "--chat-request-num-generations",
              description:
                "The number of generated texts that will be returned",
              args: { name: "integer" },
            },
            optChatRequestSeed,
            {
              name: "--chat-request-is-echo",
              description: "Whether to include the user prompt in the response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--chat-request-top-k",
              description:
                "An integer that sets up the model to use only the top k most likely tokens in the generated output",
              args: { name: "integer" },
            },
            optChatRequestTopP,
            optChatRequestTemperature,
            optChatRequestFrequencyPenalty,
            optChatRequestPresencePenalty,
            {
              name: "--chat-request-stop",
              description:
                "List of strings that stop the generation if they are generated for the response text",
              args: { name: "json" },
            },
            {
              name: "--chat-request-log-probs",
              description:
                "Includes the logarithmic probabilities for the most likely output tokens and the chosen tokens",
              args: { name: "integer" },
            },
            {
              name: "--chat-request-max-tokens",
              description:
                "The maximum number of tokens that can be generated per output sequence",
              args: { name: "integer" },
            },
            {
              name: "--chat-request-max-completion-tokens",
              description:
                "An upper bound for the number of tokens that can be generated for a completion",
              args: { name: "integer" },
            },
            {
              name: "--chat-request-logit-bias",
              description:
                "Modifies the likelihood of specified tokens that appear in the completion",
              args: { name: "json" },
            },
            { name: "--chat-request-prediction", args: { name: "json" } },
            optChatRequestResponseFormat,
            { name: "--chat-request-tool-choice", args: { name: "json" } },
            {
              name: "--chat-request-is-parallel-tool-calls",
              description:
                "Whether to enable parallel function calling during tool use",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--chat-request-tools",
              description: "A list of tools the model may call",
              args: { name: "json" },
            },
            {
              name: "--chat-request-web-search-options",
              args: { name: "json" },
            },
            {
              name: "--chat-request-service-tier",
              description:
                "Specifies the processing type used for serving the request",
              args: { suggestions: ["AUTO", "DEFAULT", "PRIORITY"] },
            },
            optFromJson,
          ],
        },
        {
          name: "chat-cohere-chat-request",
          description: "Creates a response for the given conversation",
          options: [
            optCompartmentId,
            optServingMode,
            {
              name: "--chat-request-message",
              description:
                "The text that the user inputs for the model to respond to",
              args: { name: "chat-request-message" },
              isRequired: true,
            },
            {
              name: "--chat-request-chat-history",
              description:
                "The list of previous messages between the user and the model",
              args: { name: "json" },
            },
            {
              name: "--chat-request-documents",
              description:
                "A list of relevant documents that the model can refer to for generating grounded responses to the user's",
              args: { name: "json" },
            },
            optChatRequestResponseFormat,
            {
              name: "--chat-request-is-search-queries-only",
              description:
                "When set to true, the response contains only a list of generated search queries without the search results",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--chat-request-preamble-override",
              description:
                "If specified, the default Cohere preamble is replaced with the provided preamble",
              args: { name: "chat-request-preamble-override" },
            },
            {
              name: "--chat-request-is-stream",
              description:
                "Whether to stream the partial progress of the model's response",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optChatRequestStreamOptions,
            {
              name: "--chat-request-max-tokens",
              description:
                "The maximum number of output tokens that the model will generate for the response",
              args: { name: "integer" },
            },
            {
              name: "--chat-request-max-input-tokens",
              description:
                "The maximum number of input tokens to send to the model",
              args: { name: "integer" },
            },
            optChatRequestTemperature,
            {
              name: "--chat-request-top-k",
              description:
                "A sampling method in which the model chooses the next token randomly from the top k most likely tokens",
              args: { name: "integer" },
            },
            optChatRequestTopP,
            {
              name: "--chat-request-prompt-truncation",
              description: "Defaults to OFF",
              args: { suggestions: ["OFF", "AUTO_PRESERVE_ORDER"] },
            },
            optChatRequestFrequencyPenalty,
            optChatRequestPresencePenalty,
            optChatRequestSeed,
            {
              name: "--chat-request-is-echo",
              description:
                "Returns the full prompt that was sent to the model when True",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--chat-request-tools",
              description:
                "A list of available tools (functions) that the model may suggest invoking before producing a text response",
              args: { name: "json" },
            },
            {
              name: "--chat-request-tool-results",
              description:
                "A list of results from invoking tools recommended by the model in the previous chat turn",
              args: { name: "json" },
            },
            {
              name: "--chat-request-is-force-single-step",
              description:
                "When enabled, the model will issue (potentially multiple) tool calls in a single step",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--chat-request-stop-sequences",
              description:
                "Stop the model generation when it reaches a stop sequence defined in this parameter",
              args: { name: "json" },
            },
            {
              name: "--chat-request-is-raw-prompting",
              description:
                "When enabled, the user’s message will be sent to the model without any preprocessing",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--chat-request-citation-quality",
              description:
                "When FAST is selected, citations are generated at the same time as the text output and the request will",
              args: { suggestions: ["ACCURATE", "FAST"] },
            },
            {
              name: "--chat-request-safety-mode",
              description:
                "Safety mode: Adds a safety instruction for the model to use when generating responses",
              args: { suggestions: ["CONTEXTUAL", "STRICT", "OFF"] },
            },
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
