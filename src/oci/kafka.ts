// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optKafkaClusterId: Fig.Option = {
  name: "--kafka-cluster-id",
  description: "The OCID of the KafkaCluster",
  args: { name: "kafka-cluster-id" },
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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "For list pagination",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "For list pagination",
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
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "WAITING",
      "NEEDS_ATTENTION",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optKafkaClusterConfigId: Fig.Option = {
  name: "--kafka-cluster-config-id",
  description: "The OCID of the KafkaClusterConfig",
  args: { name: "kafka-cluster-config-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const optAddonName: Fig.Option = {
  name: "--addon-name",
  description: "The unique name of the KafkaClusterAddon",
  args: { name: "addon-name" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optName: Fig.Option = {
  name: "--name",
  description: "The name to filter on",
  args: { name: "name" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: { suggestions: ["CREATING", "ACTIVE", "UPDATING", "DELETED"] },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "kafka",
  description: "Oracle Streaming with Apache Kafka (OSAK)",
  subcommands: [
    {
      name: "work-request-error",
      description:
        "An error encountered while performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list",
          description: "Lists the errors for a work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-log-entry",
      description:
        "A log message from performing an operation that is tracked by a work request",
      subcommands: [
        {
          name: "list-work-request-logs",
          description: "Lists the logs for a work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timestamp"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a work request",
          options: [optWorkRequestId, optIfMatch, optForce, optFromJson],
        },
        {
          name: "get",
          description: "Gets the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "The OCID of the asynchronous work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only the resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "IN_PROGRESS",
                  "WAITING",
                  "NEEDS_ATTENTION",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--resource-id",
              description:
                "The OCID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cluster",
      description: "A KafkaCluster is a description of a KafkaCluster",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a KafkaCluster into a different compartment within the same tenancy",
          options: [
            optKafkaClusterId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the KafkaCluster to",
              args: { name: "compartment-id" },
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
          name: "create",
          description: "Creates a KafkaCluster",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the KafkaCluster in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--access-subnets",
              description:
                "Subnets where broker/coordinator VNICs will be created",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--kafka-version",
              description: "Version of Kafka to use to spin up the cluster",
              args: { name: "kafka-version" },
              isRequired: true,
            },
            {
              name: "--cluster-type",
              description: "Type of the cluster to spin up",
              args: { name: "cluster-type" },
              isRequired: true,
            },
            {
              name: "--broker-shape",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--cluster-config-id",
              description: "The OCID of Kafka Cluster configuration object",
              args: { name: "cluster-config-id" },
              isRequired: true,
            },
            {
              name: "--cluster-config-version",
              description: "The version of configuration object",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--coordination-type",
              description: "Kafka coordination type",
              args: { name: "coordination-type" },
              isRequired: true,
            },
            optDisplayName,
            {
              name: "--client-certificate-bundle",
              description:
                "CA certificate bundle for mTLS broker authentication",
              args: { name: "client-certificate-bundle" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a KafkaCluster",
          options: [
            optKafkaClusterId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "disable-superuser",
          description: "Removes the SASL superuser to the Kafka cluster",
          options: [
            optKafkaClusterId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "enable-superuser",
          description: "Adds a SASL superuser to the Kafka cluster",
          options: [
            optKafkaClusterId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the superuser secret",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--secret-id",
              description:
                "The OCID of the secret that will be populated with the generated superuser password",
              args: { name: "secret-id" },
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
          description: "Gets information about a KafkaCluster",
          options: [optKafkaClusterId, optFromJson],
        },
        {
          name: "list-addons",
          description: "Gets a list of KafkaClusterAddons",
          options: [
            optKafkaClusterId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
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
            optLimit,
            optPage,
            optName,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of KafkaClusters",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
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
              name: "--display-name",
              description:
                "A filter to return only resources that match the given display name exactly",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "The OCID of the KafkaCluster",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-node-shapes",
          description: "Returns the list of shapes allowed in the region",
          options: [
            optCompartmentId,
            optName,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "uninstall-addon",
          description:
            "Uninstalls a KafkaClusterAddon in a provisioned cluster",
          options: [
            optKafkaClusterId,
            optAddonName,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a KafkaCluster",
          options: [
            optKafkaClusterId,
            optDisplayName,
            {
              name: "--client-certificate-bundle",
              description:
                "CA certificate bundle for mTLS broker authentication",
              args: { name: "client-certificate-bundle" },
            },
            { name: "--broker-shape", args: { name: "json" } },
            {
              name: "--cluster-config-id",
              description: "The OCID of Kafka Cluster configuration object",
              args: { name: "cluster-config-id" },
            },
            {
              name: "--cluster-config-version",
              description: "The version of configuration object",
              args: { name: "integer" },
            },
            {
              name: "--access-subnets",
              description:
                "Subnets where broker/coordinator VNICs will be created",
              args: { name: "json" },
            },
            {
              name: "--coordination-type",
              description: "Kafka coordination type",
              args: { name: "coordination-type" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "install-public-connectivity-addon",
          description: "Installs a KafkaClusterAddon",
          options: [
            {
              name: "--name",
              description: "A unique user-friendly name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--authentication-mechanism",
              description: "Authentication mechanism",
              args: { name: "authentication-mechanism" },
              isRequired: true,
            },
            {
              name: "--network-cidrs",
              description: "A list of CIDR's for ingress/egress traffic",
              args: { name: "json" },
              isRequired: true,
            },
            optKafkaClusterId,
            {
              name: "--description",
              description: "A brief description of the add on being installed",
              args: { name: "description" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-public-connectivity-addon",
          description: "Installs updates on the existing KafkaClusterAddon",
          options: [
            {
              name: "--network-cidrs",
              description: "A list of CIDR ranges for ingress/egress traffic",
              args: { name: "json" },
              isRequired: true,
            },
            optKafkaClusterId,
            optAddonName,
            {
              name: "--description",
              description: "A unique user-friendly name",
              args: { name: "description" },
            },
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get-addon",
          description: "Gets information about a KafkaClusterAddon",
          options: [optKafkaClusterId, optAddonName, optFromJson],
        },
      ],
    },
    {
      name: "cluster-config",
      description:
        "A shared configuration object used by 0 or more kafka clusters",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a KafkaClusterConfig into a different compartment within the same tenancy",
          options: [
            optKafkaClusterConfigId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to move the KafkaClusterConfig to",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a KafkaClusterConfig",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment to create the KafkaClusterConfig in",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--latest-config",
              args: { name: "json" },
              isRequired: true,
            },
            optDisplayName,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a KafkaClusterConfig",
          options: [
            optKafkaClusterConfigId,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a KafkaClusterConfig",
          options: [optKafkaClusterConfigId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of KafkaClusterConfigs",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: ["CREATING", "ACTIVE", "UPDATING", "DELETED"],
              },
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the given display name exactly",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "The OCID of the KafkaClusterConfig",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates a KafkaClusterConfig",
          options: [
            optKafkaClusterConfigId,
            optDisplayName,
            { name: "--latest-config", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cluster-config-version",
      description:
        "A shared configuration object used by 0 or more kafka clusters",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a KafkaClusterConfig version",
          options: [
            optKafkaClusterConfigId,
            {
              name: "--version-number",
              description: "The versionNumber of the KafkaClusterConfig",
              args: { name: "integer" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a KafkaClusterConfig version",
          options: [
            optKafkaClusterConfigId,
            {
              name: "--version-number",
              description: "The versionNumber of the KafkaClusterConfig",
              args: { name: "integer" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Gets a list of KafkaClusterConfig Versions",
          options: [
            optKafkaClusterConfigId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["versionNumber"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "addon-options",
      description: "Results of a AddonOptions search",
      subcommands: [
        {
          name: "list-addon-options",
          description: "Gets a list of supported KafkaClusterAddons",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optName,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
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
