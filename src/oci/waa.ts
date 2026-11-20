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
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
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
const optWebAppAccelerationId: Fig.Option = {
  name: "--web-app-acceleration-id",
  description: "The OCID of the WebAppAcceleration",
  args: { name: "web-app-acceleration-id" },
  isRequired: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optSystemTags: Fig.Option = {
  name: "--system-tags",
  description: "Usage of system tag keys",
  args: { name: "json" },
};
const optWebAppAccelerationPolicyId: Fig.Option = {
  name: "--web-app-acceleration-policy-id",
  description: "The OCID of the WebAppAccelerationPolicy",
  args: { name: "web-app-acceleration-policy-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the asynchronous request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "waa",
  description: "Web Application Acceleration (WAA)",
  subcommands: [
    {
      name: "web-app-acceleration-policy",
      description: "The details of WebAppAccelerationPolicy",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a WebAppAccelerationfPolicy resource from one compartment to another",
          options: [
            optWebAppAccelerationPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
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
          description: "Creates a new WebAppAccelerationPolicy",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "WebAppAccelerationPolicy display name, can be renamed",
              args: { name: "display-name" },
            },
            { name: "--response-caching-policy", args: { name: "json" } },
            { name: "--response-compression-policy", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a WebAppAccelerationPolicy resource identified by the OCID",
          options: [
            optWebAppAccelerationPolicyId,
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
          description: "Gets a WebAppAccelerationPolicy with the given OCID",
          options: [optWebAppAccelerationPolicyId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of all WebAppAccelerationPolicies in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycleState",
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
              isRepeatable: true,
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description:
                "A filter to return only the WebAppAccelerationPolicy with the given OCID",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'ASC' or 'DESC'",
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
          description:
            "Update the WebAppAccelerationPolicy identified by the OCID",
          options: [
            optWebAppAccelerationPolicyId,
            {
              name: "--display-name",
              description:
                "WebAppAccelerationPolicy display name, can be renamed",
              args: { name: "display-name" },
            },
            { name: "--response-caching-policy", args: { name: "json" } },
            { name: "--response-compression-policy", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
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
      ],
    },
    {
      name: "web-app-acceleration",
      description:
        "A resource connecting a WebAppAccelerationPolicy to a backend of particular type",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a Web App Acceleration resource from one compartment to another",
          options: [
            optWebAppAccelerationId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the resource should be moved",
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
          name: "delete",
          description:
            "Deletes a WebAppAcceleration resource identified by the OCID",
          options: [
            optWebAppAccelerationId,
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
          description: "Gets a WebAppAcceleration by OCID",
          options: [optWebAppAccelerationId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of all WebAppAccelerations in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description:
                "A filter to return only the WebAppAcceleration with the given OCID",
              args: { name: "id" },
            },
            {
              name: "--web-app-acceleration-policy-id",
              description:
                "A filter to return only the WebAppAcceleration with the given OCID of related WebAppAccelerationPolicy",
              args: { name: "web-app-acceleration-policy-id" },
            },
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources that match the given lifecycleState",
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
              isRepeatable: true,
            },
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-order",
              description: "The sort order to use, either 'ASC' or 'DESC'",
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
          description: "Updates the WebAppAcceleration identified by the OCID",
          options: [
            optWebAppAccelerationId,
            {
              name: "--display-name",
              description: "WebAppAcceleration display name, can be renamed",
              args: { name: "display-name" },
            },
            {
              name: "--web-app-acceleration-policy-id",
              description:
                "The OCID of WebAppAccelerationPolicy, which is attached to the resource",
              args: { name: "web-app-acceleration-policy-id" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
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
          name: "create-for-load-balancer",
          description: "Creates a new WebAppAcceleration",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--web-app-acceleration-policy-id",
              description:
                "The OCID of WebAppAccelerationPolicy, which is attached to the resource",
              args: { name: "web-app-acceleration-policy-id" },
              isRequired: true,
            },
            {
              name: "--load-balancer-id",
              description:
                "LoadBalancer OCID to which the WebAppAccelerationPolicy is attached to",
              args: { name: "load-balancer-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "WebAppAcceleration display name, can be renamed",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "purge-entire-cache",
          description:
            "Clears resources from the cache of the WebAppAcceleration",
          options: [
            optWebAppAccelerationId,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-error",
      description: "An error encountered while executing a WorkRequest",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of errors for a given WorkRequest",
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
      name: "work-request-log",
      description: "A log message from the execution of a WorkRequest",
      subcommands: [
        {
          name: "list",
          description:
            "Return a (paginated) list of logs for a given WorkRequest",
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
      name: "work-request",
      description: "A description of WorkRequest status",
      subcommands: [
        {
          name: "get",
          description: "Gets the status of the WorkRequest with the given OCID",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description: "Lists the WorkRequests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description: "The OCID of the asynchronous work request",
              args: { name: "work-request-id" },
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
