// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optWlsDomainId: Fig.Option = {
  name: "--wls-domain-id",
  description: "The OCID of the WebLogic domain",
  args: { name: "wls-domain-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
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
    "The page token that represents the page at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order is either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
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
const optManagedInstanceId: Fig.Option = {
  name: "--managed-instance-id",
  description: "The OCID of the instance",
  args: { name: "managed-instance-id" },
  isRequired: true,
};
const optServerId: Fig.Option = {
  name: "--server-id",
  description: "The unique identifier of a server",
  args: { name: "server-id" },
  isRequired: true,
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
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment that contains the resources to list",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment that contains the resources to list",
  args: { name: "compartment-id" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field by which to sort the resource",
  args: { suggestions: ["displayName"] },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field by which to sort the resource",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "wlms",
  description: "WebLogic Management Service",
  subcommands: [
    {
      name: "resource-inventory",
      description:
        "The inventory of WebLogic domains and managed instances in the selected compartment",
      subcommands: [
        {
          name: "summarize",
          description:
            "Gets the data to be shown in the Overview page of the service in a given compartment",
          options: [optCompartmentId, optFromJson],
        },
      ],
    },
    {
      name: "agreement",
      description:
        "The terms of use agreement which must be accepted prior to accessing certain product features",
      subcommands: [
        {
          name: "get",
          description: "Returns the terms and conditions of use agreement",
          options: [optFromJson],
        },
      ],
    },
    {
      name: "managed-instance",
      description:
        "A managed instance has an agent with the WebLogic Management Service plugin running",
      subcommands: [
        {
          name: "get",
          description: "Gets information about the specified managed instance",
          options: [optManagedInstanceId, optFromJson],
        },
        {
          name: "list",
          description:
            "Lists managed instances that match the specified compartment or managed instance OCID",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description: "The display name",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "The OCID of the instance",
              args: { name: "id" },
            },
            {
              name: "--plugin-status",
              description: "The plugin status of the managed instance",
              args: { suggestions: ["ACTIVE", "INACTIVE"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "scan",
          description: "Scans a managed instance for WebLogic domains",
          options: [
            optManagedInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the specified managed instance information, such as discovery interval and domain search path",
          options: [
            optManagedInstanceId,
            { name: "--configuration", args: { name: "json" } },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "list-scan-results",
          description:
            "Gets all the scan results for all WebLogic servers in the managed instance",
          options: [
            optManagedInstanceId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field by which to sort the resource",
              args: { suggestions: ["timeOfServerCheck", "serverName"] },
            },
            {
              name: "--wls-domain-id",
              description: "The OCID of the WebLogic domain",
              args: { name: "wls-domain-id" },
            },
            {
              name: "--server-name",
              description: "The name of the server",
              args: { name: "server-name" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-servers",
          description: "Gets list of servers in a specific managed instance",
          options: [
            optManagedInstanceId,
            {
              name: "--name",
              description: "The name of the resource",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field by which to sort the resource",
              args: { suggestions: ["timeCreated", "name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get-server",
          description:
            "Gets information about the specified server in a managed instance",
          options: [optManagedInstanceId, optServerId, optFromJson],
        },
        {
          name: "list-server-installed-patches",
          description:
            "Gets a list of installed patches on a server in a managed instance",
          options: [
            optManagedInstanceId,
            optServerId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "wls-domain",
      description:
        "WLSDomain is representative of a WebLogic Domain running on one or more managed instances",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a WebLogic domain into a different compartment within the same tenancy",
          options: [
            optWlsDomainId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the WebLogic domain should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create-agreement-record",
          description:
            "Creates a terms of use agreement record for a WebLogic domain",
          options: [
            {
              name: "--agreement-uuid",
              description: "The ID of the agreement to accept",
              args: { name: "agreement-uuid" },
              isRequired: true,
            },
            {
              name: "--agreement-signature",
              description: "The agreement signature",
              args: { name: "agreement-signature" },
              isRequired: true,
            },
            optWlsDomainId,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete the WebLogic domain",
          options: [
            optWlsDomainId,
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
                  "ACTIVE",
                  "CREATING",
                  "DELETED",
                  "DELETING",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "UPDATING",
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
          description: "Gets a specific WebLogic domain",
          options: [optWlsDomainId, optFromJson],
        },
        {
          name: "install-latest-patches",
          description: "Install the latest patches on a WebLogic domain",
          options: [
            optWlsDomainId,
            {
              name: "--is-force-servers-shutdown",
              description:
                "When installing or uninstalling patches, forces shutdown of the servers if they have not shutdown after",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--must-include-domains-sharing-middleware",
              description:
                "When installing or uninstalling patches, allows the operation to proceed on all domains that share the same",
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
          name: "list-agreement-records",
          description:
            "List the terms of use agreement record for the WebLogic domain",
          options: [
            optWlsDomainId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-applicable-patches",
          description:
            "Gets the latest patches that can be installed to the WebLogic domains",
          options: [
            optWlsDomainId,
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
          name: "list",
          description: "Gets all WebLogic domains in a given compartment",
          options: [
            optCompartmentId2,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETED",
                  "DELETING",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "UPDATING",
                ],
              },
            },
            {
              name: "--display-name",
              description: "The display name",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "The OCID of the WebLogic domain",
              args: { name: "id" },
            },
            {
              name: "--weblogic-version",
              description:
                "A filter to return WebLogic domains based on the WebLogic version",
              args: { suggestions: ["v12.2.1.4", "v14.1.1.0", "v14.1.2.0"] },
            },
            {
              name: "--middleware-type",
              description:
                "A filter to return WebLogic domains based on the type of middleware of the WebLogic domain",
              args: { suggestions: ["FMW", "WLS"] },
            },
            {
              name: "--patch-readiness-status",
              description:
                "A filter to return domains based on the patch readiness status",
              args: { suggestions: ["OK", "WARNING", "ERROR", "UNKNOWN"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "restart",
          description: "Restarts all the servers in the WebLogic domains",
          options: [
            optWlsDomainId,
            {
              name: "--is-force-servers-shutdown",
              description:
                "Force shutdown of the servers if they have not shutdown after a period of time",
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
          name: "restore",
          description: "Restore a domain from backup",
          options: [
            optWlsDomainId,
            {
              name: "--is-force-servers-shutdown",
              description:
                "If the restore operation required to stop the servers",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--must-include-domains-sharing-middleware",
              description:
                "If the WebLogic Domain being restored shares middleware with other domains",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--servers-to-restore",
              description: "List of servers to restore and the backups",
              args: { name: "json" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "scan",
          description: "Runs a series of checks in the WebLogic domain",
          options: [
            optWlsDomainId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "set-restart-order",
          description:
            "Sets restart order of servers in specific WebLogic domain",
          options: [
            optWlsDomainId,
            { name: "--servers", args: { name: "json" }, isRequired: true },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "start",
          description: "Starts all the servers in the WebLogic domain",
          options: [
            optWlsDomainId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops all the servers in the WebLogic domain",
          options: [
            optWlsDomainId,
            {
              name: "--is-force-servers-shutdown",
              description:
                "Force shutdown of the servers if they have not shutdown after a period of time",
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
          name: "update",
          description: "Updates a specific WebLogic domain",
          options: [
            optWlsDomainId,
            { name: "--configuration", args: { name: "json" } },
            {
              name: "--defined-tags",
              description: "Defined tags for this resource",
              args: { name: "json" },
            },
            {
              name: "--freeform-tags",
              description: "Free-form tags for this resource",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            {
              name: "--wait-for-state",
              description:
                "Wait until the resource or work request reaches the given state",
              args: {
                suggestions: [
                  "ACTIVE",
                  "CREATING",
                  "DELETED",
                  "DELETING",
                  "FAILED",
                  "NEEDS_ATTENTION",
                  "UPDATING",
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
          name: "list-credentials",
          description: "Gets domain credentials of a specific domain",
          options: [optWlsDomainId, optAll, optFromJson],
        },
        {
          name: "get-credential",
          description:
            "Gets WebLogic and Node Manager credentials of a specific WebLogic domain",
          options: [
            optWlsDomainId,
            {
              name: "--credential-type",
              description: "The type of the credentials",
              args: { suggestions: ["weblogicAdminUser", "nodemanagerUser"] },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-credential",
          description:
            "Updates WebLogic domain credentials of specific WebLogic domain",
          options: [
            optWlsDomainId,
            {
              name: "--credential-type",
              description: "The type of the credentials",
              args: { suggestions: ["weblogicAdminUser", "nodemanagerUser"] },
              isRequired: true,
            },
            {
              name: "--strategy",
              description: "The strategy for passing new WebLogic credential",
              args: { name: "strategy" },
            },
            {
              name: "--user-secret-id",
              description: "The OCID for WebLogic user secret",
              args: { name: "user-secret-id" },
            },
            {
              name: "--password-secret-id",
              description: "The OCID for WebLogic password secret",
              args: { name: "password-secret-id" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "list-scan-results",
          description:
            "Get all scan results for a server in a specific WebLogic domain",
          options: [
            optWlsDomainId,
            {
              name: "--server-name",
              description: "The name of the server",
              args: { name: "server-name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field by which to sort the resource",
              args: { suggestions: ["timeOfServerCheck", "serverName"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-servers",
          description: "Gets list of servers in a specific WebLogic domain",
          options: [
            optWlsDomainId,
            {
              name: "--name",
              description: "The name of the resource",
              args: { name: "name" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field by which to sort the resource",
              args: { suggestions: ["timeCreated", "name"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get-server",
          description:
            "Gets information about the specified server in a WebLogic domain",
          options: [optWlsDomainId, optServerId, optFromJson],
        },
        {
          name: "get-server-backup",
          description: "Get details of specific backup for the WebLogic Domain",
          options: [
            optWlsDomainId,
            optServerId,
            {
              name: "--backup-id",
              description: "The unique identifier of the backup",
              args: { name: "backup-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "get-server-backup-content",
          description: "Get details of specific backup for the WebLogic Domain",
          options: [
            optWlsDomainId,
            optServerId,
            {
              name: "--backup-id",
              description: "The unique identifier of the backup",
              args: { name: "backup-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list-server-backups",
          description:
            "Gets a list of backups for the server of a specific WebLogic Domain",
          options: [
            optWlsDomainId,
            optServerId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field by which to sort the resource",
              args: { suggestions: ["timeCreated"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list-server-installed-patches",
          description:
            "Gets a list of installed patches on a server for a domain",
          options: [
            optWlsDomainId,
            optServerId,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "required-policy-collection",
      description: "Result of list RequiredPolicies",
      subcommands: [
        {
          name: "list-required-policies",
          description:
            "Gets all the required policies for the WebLogic Management Service",
          options: [optAll, optFromJson],
        },
      ],
    },
    {
      name: "work-request",
      description: "An asynchronous work request",
      subcommands: [
        {
          name: "get",
          description: "Gets the details of a work request",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list-work-request-errors",
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
        {
          name: "list",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId2,
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
      name: "configuration",
      description: "The configuration for service",
      subcommands: [
        {
          name: "get",
          description: "Gets service configuration",
          options: [optCompartmentId, optFromJson],
        },
        {
          name: "update",
          description: "Updates service configuration",
          options: [
            optCompartmentId,
            {
              name: "--discovery-interval",
              description:
                "Frequency of domain discovery to be run on the service",
              args: { name: "integer" },
            },
            {
              name: "--domain-search-paths",
              description:
                "The whitelisted paths which domain discovery are run against",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
