// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
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
      "ACCEPTED",
      "IN_PROGRESS",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "The name of the session",
  args: { name: "display-name" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optBastionId: Fig.Option = {
  name: "--bastion-id",
  description:
    "The unique identifier (OCID) of the bastion on which to create this session",
  args: { name: "bastion-id" },
  isRequired: true,
};
const optBastionId2: Fig.Option = {
  name: "--bastion-id",
  description: "The unique identifier (OCID) of the bastion",
  args: { name: "bastion-id" },
  isRequired: true,
};
const optKeyType: Fig.Option = {
  name: "--key-type",
  description: "The type of the key used to connect to the session",
  args: { suggestions: ["PUB"] },
};
const optSessionId: Fig.Option = {
  name: "--session-id",
  description: "The unique identifier (OCID) of the session",
  args: { name: "session-id" },
  isRequired: true,
};
const optSshPublicKeyFile: Fig.Option = {
  name: "--ssh-public-key-file",
  description: "A file containing ssh public key content for ssh connection",
  args: { name: "file", template: "filepaths" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The unique identifier (OCID) of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "bastion",
  description: "Bastion",
  subcommands: [
    {
      name: "session",
      description: "A bastion session resource",
      subcommands: [
        {
          name: "create",
          description: "Creates a new session in a bastion",
          options: [
            optBastionId,
            {
              name: "--target-resource-details",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optKeyType,
            {
              name: "--session-ttl-in-seconds",
              description: "The amount of time the session can remain active",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optSshPublicKeyFile,
            optFromJson,
          ],
        },
        {
          name: "create-session-create-dynamic-port-forwarding-session-target-resource-details",
          description: "Creates a new session in a bastion",
          options: [
            optBastionId,
            { name: "--key-details", args: { name: "json" }, isRequired: true },
            optDisplayName,
            optKeyType,
            {
              name: "--session-ttl-in-seconds",
              description: "The amount of time the session can remain active",
              args: { name: "integer" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a session identified by the session ID",
          options: [
            optSessionId,
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
          name: "get",
          description: "Retrieves a session identified by the session ID",
          options: [optSessionId, optFromJson],
        },
        {
          name: "list",
          description:
            "Retrieves a list of SessionSummary objects for an existing bastion",
          options: [
            {
              name: "--bastion-id",
              description:
                "The unique identifier (OCID) of the bastion in which to list sessions",
              args: { name: "bastion-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--session-lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--session-id",
              description:
                "The unique identifier (OCID) of the session in which to list resources",
              args: { name: "session-id" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'asc' or 'desc'",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "displayName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the session identified by the session ID",
          options: [
            optSessionId,
            optDisplayName,
            optIfMatch,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
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
          name: "create-managed-ssh",
          description: "Creates a new session in a bastion",
          options: [
            optBastionId,
            optDisplayName,
            optKeyType,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optSshPublicKeyFile,
            {
              name: "--session-ttl",
              description: "TTL of the session in seconds",
              args: { name: "session-ttl" },
            },
            {
              name: "--target-resource-id",
              description: "The OCID of the target resource to connect to",
              args: { name: "target-resource-id" },
            },
            {
              name: "--target-os-username",
              description:
                "Name of the user to use on target resource operating system",
              args: { name: "target-os-username" },
            },
            {
              name: "--target-port",
              description: "Target resource port to use",
              args: { name: "target-port" },
            },
            {
              name: "--target-private-ip",
              description: "Target resource private ip address",
              args: { name: "target-private-ip" },
            },
            optFromJson,
          ],
        },
        {
          name: "create-port-forwarding",
          description: "Creates a new session in a bastion",
          options: [
            optBastionId,
            optDisplayName,
            optKeyType,
            {
              name: "--target-resource-details-target-resource-fqdn",
              description:
                "The Fully Qualified Domain Name of the target resource that the session connects to",
              args: { name: "target-resource-details-target-resource-fqdn" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optSshPublicKeyFile,
            {
              name: "--session-ttl",
              description: "TTL of the session in seconds",
              args: { name: "session-ttl" },
            },
            {
              name: "--target-resource-id",
              description: "The OCID of the target resource to connect to",
              args: { name: "target-resource-id" },
            },
            {
              name: "--target-port",
              description: "Target resource port to use",
              args: { name: "target-port" },
            },
            {
              name: "--target-private-ip",
              description: "Target resource private ip address",
              args: { name: "target-private-ip" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-error",
      description: "An error encountered while executing a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-log-entry",
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "bastion",
      description: "A bastion resource",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a bastion into a different compartment",
          options: [
            optBastionId2,
            {
              name: "--compartment-id",
              description:
                "The unique identifier (OCID) of the compartment that the bastion should move to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new bastion",
          options: [
            {
              name: "--bastion-type",
              description: "The type of bastion",
              args: { name: "bastion-type" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The unique identifier (OCID) of the compartment where the bastion is located",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--target-subnet-id",
              description:
                "The unique identifier (OCID) of the subnet that the bastion connects to",
              args: { name: "target-subnet-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "The name of the bastion, which can't be changed after creation",
              args: { name: "name" },
            },
            {
              name: "--phone-book-entry",
              description:
                "The phonebook entry of the customer's team, which can't be changed after creation",
              args: { name: "phone-book-entry" },
            },
            {
              name: "--dns-proxy-status",
              description: "The desired dns proxy status of the bastion",
              args: { suggestions: ["DISABLED", "ENABLED"] },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--max-session-ttl",
              description: "Max TTL of the sessions on the bastion in seconds",
              args: { name: "integer" },
            },
            {
              name: "--jump-host-ips",
              description:
                "The ip addresses of the hosts that the bastion has access to",
              args: { name: "json" },
            },
            {
              name: "--client-cidr-list",
              description: "The ip ranges that the bastion has access to",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a bastion identified by the bastion ID",
          options: [
            optBastionId2,
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
          name: "get",
          description: "Retrieves a bastion identified by the bastion ID",
          options: [optBastionId2, optFromJson],
        },
        {
          name: "list",
          description:
            "Retrieves a list of BastionSummary objects in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The unique identifier (OCID) of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--bastion-lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--bastion-id",
              description:
                "The unique identifier (OCID) of the bastion in which to list resources",
              args: { name: "bastion-id" },
            },
            {
              name: "--name",
              description:
                "A filter to return only resources that match the entire name given",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'asc' or 'desc'",
              args: { suggestions: ["ASC", "DESC"] },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated", "name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the bastion identified by the bastion ID",
          options: [
            optBastionId2,
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            optIfMatch,
            {
              name: "--force",
              description: "Perform update without prompting for confirmation",
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--max-session-ttl",
              description: "Max TTL in seconds of the sessions on the bastion",
              args: { name: "integer" },
            },
            {
              name: "--jump-host-ips",
              description:
                "The ip addresses of the hosts that the bastion has access to",
              args: { name: "json" },
            },
            {
              name: "--client-cidr-list",
              description: "The ip ranges that the bastion has access to",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the work request with the given ID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The unique identifier (OCID) of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optPage,
            optLimit,
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
