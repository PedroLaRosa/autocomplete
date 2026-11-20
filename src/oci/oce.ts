// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optOceInstanceId: Fig.Option = {
  name: "--oce-instance-id",
  description: "Unique OceInstance identifier",
  args: { name: "oce-instance-id" },
  isRequired: true,
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
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The ID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "oce",
  description: "Oracle Content and Experience",
  subcommands: [
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
          name: "list",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            optPageSize,
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
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description:
                "The resource Identifier for which to list resources",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oce-instance",
      description: "Details of OceInstance",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a OceInstance into a different compartment",
          options: [
            optOceInstanceId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the OceInstance should be moved",
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
          description: "Creates a new OceInstance",
          options: [
            {
              name: "--compartment-id",
              description: "Compartment Identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "OceInstance Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--tenancy-id",
              description: "Tenancy Identifier",
              args: { name: "tenancy-id" },
              isRequired: true,
            },
            {
              name: "--idcs-access-token",
              description:
                "Identity Cloud Service access token identifying a stripe and service administrator user",
              args: { name: "idcs-access-token" },
              isRequired: true,
            },
            {
              name: "--tenancy-name",
              description: "Tenancy Name",
              args: { name: "tenancy-name" },
              isRequired: true,
            },
            {
              name: "--object-storage-namespace",
              description: "Object Storage Namespace of Tenancy",
              args: { name: "object-storage-namespace" },
              isRequired: true,
            },
            {
              name: "--admin-email",
              description: "Admin Email for Notification",
              args: { name: "admin-email" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "OceInstance description",
              args: { name: "description" },
            },
            { name: "--identity-stripe", args: { name: "json" } },
            {
              name: "--instance-usage-type",
              description: "Instance type based on its usage",
              args: { suggestions: ["PRIMARY", "NONPRIMARY"] },
            },
            {
              name: "--add-on-features",
              description: "A list of add-on features for the ocm instance",
              args: { name: "json" },
            },
            {
              name: "--upgrade-schedule",
              description:
                "Upgrade schedule type representing service to be upgraded immediately whenever latest version is released",
              args: { name: "upgrade-schedule" },
            },
            {
              name: "--waf-primary-domain",
              description: "Web Application Firewall(WAF) primary domain",
              args: { name: "waf-primary-domain" },
            },
            {
              name: "--instance-access-type",
              description:
                "Flag indicating whether the instance access is private or public",
              args: { suggestions: ["PUBLIC", "PRIVATE"] },
            },
            {
              name: "--instance-license-type",
              description:
                "Flag indicating whether the instance license is new cloud or bring your own license",
              args: { suggestions: ["NEW", "BYOL", "PREMIUM", "STARTER"] },
            },
            {
              name: "--dr-region",
              description: "Disaster recovery paired ragion name",
              args: { name: "dr-region" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Usage of predefined tag keys",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a OceInstance resource by identifier",
          options: [
            optOceInstanceId,
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
          description: "Gets a OceInstance by identifier",
          options: [optOceInstanceId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the OceInstance",
          options: [
            optOceInstanceId,
            {
              name: "--description",
              description: "OceInstance description",
              args: { name: "description" },
            },
            {
              name: "--waf-primary-domain",
              description: "Web Application Firewall(WAF) primary domain",
              args: { name: "waf-primary-domain" },
            },
            {
              name: "--instance-license-type",
              description:
                "Flag indicating whether the instance license is new cloud or bring your own license",
              args: { suggestions: ["NEW", "BYOL", "PREMIUM", "STARTER"] },
            },
            {
              name: "--instance-usage-type",
              description: "Instance type based on its usage",
              args: { suggestions: ["PRIMARY", "NONPRIMARY"] },
            },
            {
              name: "--add-on-features",
              description: "A list of add-on features for the ocm instance",
              args: { name: "json" },
            },
            {
              name: "--lifecycle-details",
              description:
                "Details of the current state of the instance lifecycle",
              args: { suggestions: ["STANDBY", "FAILOVER", "DOWN", "PRIMARY"] },
            },
            {
              name: "--dr-region",
              description: "Disaster recovery paired ragion name",
              args: { name: "dr-region" },
            },
            {
              name: "--freeform-tags",
              description:
                "Simple key-value pair that is applied without any predefined name, type or scope",
              args: { name: "json" },
            },
            {
              name: "--defined-tags",
              description: "Usage of predefined tag keys",
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
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of OceInstances",
          options: [
            {
              name: "--compartment-id",
              description:
                "The ID of the compartment in which to list resources",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--tenancy-id",
              description: "The ID of the tenancy in which to list resources",
              args: { name: "tenancy-id" },
            },
            {
              name: "--display-name",
              description: "A user-friendly name",
              args: { name: "display-name" },
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
            {
              name: "--lifecycle-state",
              description: "Filter results on lifecycleState",
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
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
