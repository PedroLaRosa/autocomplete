// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optSandboxId: Fig.Option = {
  name: "--sandbox-id",
  description: "Sandbox identifier",
  args: { name: "sandbox-id" },
  isRequired: true,
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "RUNNING",
      "CREATING",
      "UPDATING",
      "DELETED",
      "FAILED",
      "SUSPENDING",
      "SUSPENDED",
      "RESUMING",
      "STOPPING",
      "STOPPED",
    ],
  },
  isRepeatable: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optCommandId: Fig.Option = {
  name: "--command-id",
  description: "Sandbox command identifier",
  args: { name: "command-id" },
  isRequired: true,
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "A token representing the position at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optArgs: Fig.Option = {
  name: "--args",
  description: "Command arguments",
  args: { name: "json" },
};
const optCommand: Fig.Option = {
  name: "--command",
  description: "The command to execute in the sandbox runtime",
  args: { name: "command" },
  isRequired: true,
};
const optCwd: Fig.Option = {
  name: "--cwd",
  description:
    "Absolute directory path to use as the working directory for command execution in the sandbox",
  args: { name: "cwd" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "User-provided display name for the sandbox",
  args: { name: "display-name" },
};
const optEnvironmentVariables: Fig.Option = {
  name: "--environment-variables",
  description: "Environment variables to inject into the command execution",
  args: { name: "json" },
};
const optFromSeq: Fig.Option = {
  name: "--from-seq",
  description: "The first command event sequence number to include",
  args: { name: "integer" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optTimeout: Fig.Option = {
  name: "--timeout",
  description:
    "Maximum execution time for the command, in ISO 8601 duration format",
  args: { name: "timeout" },
};
const optCredentialProfileLabel: Fig.Option = {
  name: "--credential-profile-label",
  description: "The Project credential profile selected for this Sandbox",
  args: { name: "credential-profile-label" },
};
const optEnvironmentVariables2: Fig.Option = {
  name: "--environment-variables",
  description: "Environment variables to inject into the sandbox runtime",
  args: { name: "json" },
};
const optExpirationDuration: Fig.Option = {
  name: "--expiration-duration",
  description: "Deprecated",
  args: { name: "expiration-duration" },
  deprecated: true,
};
const optExpiresInMinutes: Fig.Option = {
  name: "--expires-in-minutes",
  description:
    "Number of minutes from creation until automatic sandbox expiration",
  args: { name: "integer" },
};
const optProjectId: Fig.Option = {
  name: "--project-id",
  description: "Required project identifier used to scope sandbox creation",
  args: { name: "project-id" },
  isRequired: true,
};
const optPublishPorts: Fig.Option = {
  name: "--publish-ports",
  description: "Published ports to expose for the sandbox",
  args: { name: "json" },
};
const optPublishedPortAuthMode: Fig.Option = {
  name: "--published-port-auth-mode",
  description:
    "Authorization for all published-port HTTP requests and WebSocket handshakes",
  args: { name: "published-port-auth-mode" },
};
const optRuntime: Fig.Option = {
  name: "--runtime",
  description:
    "Runtime identifier for the sandbox, either a built-in runtime such as python-3.11 or a same-region Oracle",
  args: { name: "runtime" },
};
const optShape: Fig.Option = {
  name: "--shape",
  description: "Compute shape for the sandbox",
  args: { name: "shape" },
};
const optWarmpoolName: Fig.Option = {
  name: "--warmpool-name",
  description: "Name of a MANAGED or CUSTOM warm pool in the owning project",
  args: { name: "warmpool-name" },
};
const completionSpec: Fig.Spec = {
  name: "generative-ai-sandbox",
  description: "GenAI Sandbox",
  subcommands: [
    {
      name: "sandbox-snapshot",
      description: "Sandbox snapshot resource representation",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a sandbox snapshot resource and returns its initial state",
          options: [
            {
              name: "--sandbox-id",
              description: "Identifier of the sandbox to snapshot",
              args: { name: "sandbox-id" },
              isRequired: true,
            },
            {
              name: "--expiration-duration",
              description:
                "Duration after creation before the sandbox snapshot expires, in ISO 8601 duration format",
              args: { name: "expiration-duration" },
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a sandbox snapshot",
          options: [
            {
              name: "--snapshot-id",
              description: "Sandbox snapshot identifier",
              args: { name: "snapshot-id" },
              isRequired: true,
            },
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                ],
              },
              isRepeatable: true,
            },
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a sandbox snapshot",
          options: [
            {
              name: "--snapshot-id",
              description: "Sandbox snapshot identifier",
              args: { name: "snapshot-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists sandbox snapshot resources with optional filtering and pagination",
          options: [
            {
              name: "--project-id",
              description:
                "The project identifier used to filter listed sandbox snapshot resources",
              args: { name: "project-id" },
            },
            {
              name: "--display-name",
              description:
                "Sandbox snapshot display name used to filter listed sandbox snapshot resources",
              args: { name: "display-name" },
            },
            {
              name: "--sandbox-id",
              description:
                "Sandbox identifier used to filter listed sandbox snapshot resources",
              args: { name: "sandbox-id" },
            },
            {
              name: "--snapshot-id",
              description:
                "Sandbox snapshot identifier used to filter listed sandbox snapshot resources",
              args: { name: "snapshot-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only sandbox snapshot resources whose state matches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sandbox-command-collection",
      description: "Paginated collection of sandbox command resources",
      subcommands: [
        {
          name: "list",
          description:
            "Lists sandbox commands for a sandbox with optional pagination",
          options: [
            optSandboxId,
            {
              name: "--command-id",
              description:
                "Sandbox command identifier used to filter listed command resources",
              args: { name: "command-id" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["timeCreated", "timeStarted", "timeFinished"],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sandbox-file",
      description: "Sandbox file resource representation",
      subcommands: [
        {
          name: "read",
          description: "Reads a file from a sandbox",
          options: [
            optSandboxId,
            {
              name: "--sandbox-file-path",
              description: "Absolute path under /workspace of the file to read",
              args: { name: "sandbox-file-path", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--local-file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
            },
            optFromJson,
          ],
        },
        {
          name: "write",
          description:
            "Writes a file in a sandbox and returns the resulting file resource",
          options: [
            optSandboxId,
            {
              name: "--sandbox-file-path",
              description:
                "Absolute path under /workspace where the file will be written",
              args: { name: "sandbox-file-path", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--opc-content-sha256",
              description:
                "Optional base64-encoded SHA-256 checksum of the sandbox file content",
              args: { name: "opc-content-sha256" },
            },
            {
              name: "--file",
              description: "Raw file contents to write, passed literally",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--local-file",
              description:
                "The local file whose bytes will be written to the sandbox, or '-' to read from STDIN",
              args: { name: "file", template: "filepaths" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sandbox",
      description: "Sandbox resource representation",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a sandbox resource and returns its initial state",
          options: [
            optProjectId,
            optWarmpoolName,
            { name: "--source", args: { name: "json" } },
            optDisplayName,
            optRuntime,
            optShape,
            optPublishedPortAuthMode,
            optPublishPorts,
            optExpiresInMinutes,
            optExpirationDuration,
            optEnvironmentVariables2,
            optCredentialProfileLabel,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-sandbox-sandbox-snapshot-source",
          description:
            "Creates a sandbox resource and returns its initial state",
          options: [
            optProjectId,
            {
              name: "--source-snapshot-id",
              description:
                "Identifier of the sandbox snapshot to restore during sandbox creation",
              args: { name: "source-snapshot-id" },
              isRequired: true,
            },
            optWarmpoolName,
            optDisplayName,
            optRuntime,
            optShape,
            optPublishedPortAuthMode,
            optPublishPorts,
            optExpiresInMinutes,
            optExpirationDuration,
            optEnvironmentVariables2,
            optCredentialProfileLabel,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a sandbox",
          options: [
            optSandboxId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "extend",
          description: "Extends the duration of a sandbox",
          options: [
            optSandboxId,
            {
              name: "--additional-duration",
              description:
                "Additional duration to extend the sandbox lifetime, in ISO 8601 duration format",
              args: { name: "additional-duration" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a sandbox",
          options: [optSandboxId, optFromJson],
        },
        {
          name: "resume",
          description:
            "Resumes a suspended sandbox by scaling its backing runtime back to one replica",
          options: [
            optSandboxId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops a running sandbox",
          options: [
            optSandboxId,
            {
              name: "--is-force",
              description:
                "Whether to send SIGKILL immediately instead of attempting graceful shutdown",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "suspend",
          description:
            "Suspends a running sandbox by scaling its backing runtime to zero replicas while retaining the workspace",
          options: [
            optSandboxId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a sandbox",
          options: [
            optSandboxId,
            optDisplayName,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create-from-snapshot",
          description:
            "Creates a sandbox resource and returns its initial state",
          options: [
            optProjectId,
            {
              name: "--source-snapshot-id",
              description:
                "Identifier of the sandbox snapshot to restore during sandbox creation",
              args: { name: "source-snapshot-id" },
              isRequired: true,
            },
            optWarmpoolName,
            optDisplayName,
            optRuntime,
            optShape,
            optPublishedPortAuthMode,
            optPublishPorts,
            optExpiresInMinutes,
            optExpirationDuration,
            optEnvironmentVariables2,
            optCredentialProfileLabel,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists sandbox resources with optional filtering and pagination",
          options: [
            {
              name: "--project-id",
              description:
                "The project identifier used to filter listed sandbox resources",
              args: { name: "project-id" },
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--sandbox-id",
              description:
                "Sandbox identifier used to filter listed sandbox resources",
              args: { name: "sandbox-id" },
            },
            {
              name: "--display-name",
              description:
                "Sandbox display name used to filter listed sandbox resources",
              args: { name: "display-name" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose state matches the given state",
              args: {
                suggestions: [
                  "RUNNING",
                  "CREATING",
                  "UPDATING",
                  "DELETED",
                  "FAILED",
                  "SUSPENDING",
                  "SUSPENDED",
                  "RESUMING",
                  "STOPPING",
                  "STOPPED",
                ],
              },
            },
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sandbox-command",
      description: "Sandbox command resource representation",
      subcommands: [
        {
          name: "cancel",
          description: "Requests cancellation of a running sandbox command",
          options: [
            optSandboxId,
            optCommandId,
            {
              name: "--signal",
              description: "Signal to send to the running command",
              args: { suggestions: ["SIGTERM", "SIGKILL"] },
            },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets command metadata for a sandbox command",
          options: [optSandboxId, optCommandId, optFromJson],
        },
        {
          name: "run",
          description:
            "Runs a command in a sandbox and returns the command identifier immediately",
          options: [
            optSandboxId,
            optCommand,
            optCwd,
            optArgs,
            optEnvironmentVariables,
            optTimeout,
            optFromJson,
          ],
        },
        {
          name: "run-and-wait",
          description:
            "Runs a command in a sandbox, blocks until command execution finishes, and returns the final command metadata",
          options: [
            optSandboxId,
            optCommand,
            optCwd,
            optArgs,
            optEnvironmentVariables,
            optTimeout,
            optFromJson,
          ],
        },
        {
          name: "run-and-stream",
          description:
            "Runs a command in a sandbox and streams command events as newline-delimited JSON",
          options: [
            optSandboxId,
            optCommand,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optCwd,
            optArgs,
            optEnvironmentVariables,
            optTimeout,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists sandbox commands for a sandbox with optional pagination",
          options: [
            optSandboxId,
            {
              name: "--command-id",
              description:
                "Sandbox command identifier used to filter listed command resources",
              args: { name: "command-id" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["timeCreated", "timeStarted", "timeFinished"],
              },
            },
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get-output",
          description:
            "Gets captured output for a sandbox command starting from the requested event sequence",
          options: [optSandboxId, optCommandId, optFromSeq, optFromJson],
        },
        {
          name: "stream",
          description:
            "Streams command events for an existing sandbox command from fromSeq through untilSeq using Server-Sent Events",
          options: [
            optSandboxId,
            optCommandId,
            optFromSeq,
            {
              name: "--until-seq",
              description: "The last command event sequence number to include",
              args: { name: "integer" },
            },
            {
              name: "--file",
              description:
                "The name of the file that will receive the raw response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sandbox-command-output",
      description: "Captured command output details",
      subcommands: [
        {
          name: "get-output",
          description:
            "Gets captured output for a sandbox command starting from the requested event sequence",
          options: [optSandboxId, optCommandId, optFromSeq, optFromJson],
        },
      ],
    },
    {
      name: "sandbox-collection",
      description: "Paginated collection of sandbox resources",
      subcommands: [
        {
          name: "list",
          description:
            "Lists sandbox resources with optional filtering and pagination",
          options: [
            {
              name: "--project-id",
              description:
                "The project identifier used to filter listed sandbox resources",
              args: { name: "project-id" },
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to list resources",
              args: { name: "compartment-id" },
            },
            {
              name: "--sandbox-id",
              description:
                "Sandbox identifier used to filter listed sandbox resources",
              args: { name: "sandbox-id" },
            },
            {
              name: "--display-name",
              description:
                "Sandbox display name used to filter listed sandbox resources",
              args: { name: "display-name" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources whose state matches the given state",
              args: {
                suggestions: [
                  "RUNNING",
                  "CREATING",
                  "UPDATING",
                  "DELETED",
                  "FAILED",
                  "SUSPENDING",
                  "SUSPENDED",
                  "RESUMING",
                  "STOPPING",
                  "STOPPED",
                ],
              },
            },
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sandbox-command-event",
      description: "Base command event emitted while a sandbox command runs",
      subcommands: [
        {
          name: "run-and-stream",
          description:
            "Runs a command in a sandbox and streams command events as newline-delimited JSON",
          options: [
            optSandboxId,
            optCommand,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optCwd,
            optArgs,
            optEnvironmentVariables,
            optTimeout,
            optFromJson,
          ],
        },
        {
          name: "stream",
          description:
            "Streams command events for an existing sandbox command from fromSeq through untilSeq using Server-Sent Events",
          options: [
            optSandboxId,
            optCommandId,
            optFromSeq,
            {
              name: "--until-seq",
              description: "The last command event sequence number to include",
              args: { name: "integer" },
            },
            {
              name: "--file",
              description:
                "The name of the file that will receive the raw response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "sandbox-snapshot-collection",
      description: "Paginated collection of sandbox snapshot resources",
      subcommands: [
        {
          name: "list",
          description:
            "Lists sandbox snapshot resources with optional filtering and pagination",
          options: [
            {
              name: "--project-id",
              description:
                "The project identifier used to filter listed sandbox snapshot resources",
              args: { name: "project-id" },
            },
            {
              name: "--display-name",
              description:
                "Sandbox snapshot display name used to filter listed sandbox snapshot resources",
              args: { name: "display-name" },
            },
            {
              name: "--sandbox-id",
              description:
                "Sandbox identifier used to filter listed sandbox snapshot resources",
              args: { name: "sandbox-id" },
            },
            {
              name: "--snapshot-id",
              description:
                "Sandbox snapshot identifier used to filter listed sandbox snapshot resources",
              args: { name: "snapshot-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only sandbox snapshot resources whose state matches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "DELETING",
                  "DELETED",
                ],
              },
            },
            optSortBy,
            optSortOrder,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
