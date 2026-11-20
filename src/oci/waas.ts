// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optWaasPolicyId: Fig.Option = {
  name: "--waas-policy-id",
  description: "The OCID of the WAAS policy",
  args: { name: "waas-policy-id" },
  isRequired: true,
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
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
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return in a paginated call",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The value of the opc-next-page response header from the previous paginated call",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "FAILED",
      "UPDATING",
      "DELETING",
      "DELETED",
    ],
  },
  isRepeatable: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The value of the sorting direction of resources in a paginated 'List' call",
  args: { suggestions: ["ASC", "DESC"] },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optAddressListId: Fig.Option = {
  name: "--address-list-id",
  description: "The OCID of the address list",
  args: { name: "address-list-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment into which the resource should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCertificateId: Fig.Option = {
  name: "--certificate-id",
  description: "The OCID of the SSL certificate used in the WAAS policy",
  args: { name: "certificate-id" },
  isRequired: true,
};
const optCustomProtectionRuleId: Fig.Option = {
  name: "--custom-protection-rule-id",
  description: "The OCID of the custom protection rule",
  args: { name: "custom-protection-rule-id" },
  isRequired: true,
};
const optHttpRedirectId: Fig.Option = {
  name: "--http-redirect-id",
  description: "The OCID of the HTTP Redirect",
  args: { name: "http-redirect-id" },
  isRequired: true,
};
const optChallengeSettings: Fig.Option = {
  name: "--challenge-settings",
  args: { name: "json" },
};
const optOriginGroups: Fig.Option = {
  name: "--origin-groups",
  description:
    "The map of origin groups and their keys used to associate origins to the wafConfig",
  args: { name: "json" },
};
const optTimeObservedGreaterThanOrEqualTo: Fig.Option = {
  name: "--time-observed-greater-than-or-equal-to",
  description:
    "A filter that limits returned events to those occurring on or after a date and time",
  args: { name: "datetime" },
};
const optTimeObservedLessThan: Fig.Option = {
  name: "--time-observed-less-than",
  description:
    "A filter that limits returned events to those occurring before a date and time, specified in RFC 3339 format",
  args: { name: "datetime" },
};
const completionSpec: Fig.Spec = {
  name: "waas",
  description: "Web Application Acceleration and Security Services",
  subcommands: [
    {
      name: "http-redirect",
      description:
        "The details of a HTTP Redirect configuration to allow redirecting HTTP traffic from a request domain to a new",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves HTTP Redirect into a different compartment",
          options: [
            optHttpRedirectId,
            optCompartmentId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new HTTP Redirect on the WAF edge",
          options: [
            {
              name: "--compartment-id",
              description: "The OCID of the HTTP Redirects compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--domain",
              description: "The domain from which traffic will be redirected",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: "--target",
              description:
                "The redirect target object including all the redirect data",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The user-friendly name of the HTTP Redirect",
              args: { name: "display-name" },
            },
            {
              name: "--response-code",
              description:
                "The response code returned for the redirect to the client",
              args: { name: "integer" },
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
          description: "Deletes a redirect",
          options: [
            optHttpRedirectId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of a HTTP Redirect",
          options: [optHttpRedirectId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of HTTP Redirects",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort the results of the List query",
              args: { suggestions: ["id", "domain", "target", "displayName"] },
            },
            {
              name: "--id",
              description: "Filter redirects using a list of redirect OCIDs",
              args: { name: "id" },
              isRepeatable: true,
            },
            {
              name: "--display-name",
              description: "Filter redirects using a display name",
              args: { name: "display-name" },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-state",
              description: "Filter redirects using a list of lifecycle states",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--time-created-greater-than-or-equal-to",
              description:
                "A filter that matches redirects created on or after the specified date and time",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-less-than",
              description:
                "A filter that matches redirects created before the specified date-time",
              args: { name: "datetime" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the details of a HTTP Redirect, including target and tags",
          options: [
            optHttpRedirectId,
            {
              name: "--display-name",
              description: "The user-friendly name of the HTTP Redirect",
              args: { name: "display-name" },
            },
            {
              name: "--target",
              description:
                "The redirect target object including all the redirect data",
              args: { name: "json" },
            },
            {
              name: "--response-code",
              description:
                "The response code returned for the redirect to the client",
              args: { name: "integer" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "waas-policy",
      description:
        "The details of a Web Application Acceleration and Security (WAAS) policy",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves WAAS policy into a different compartment",
          options: [
            optWaasPolicyId,
            optCompartmentId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new Web Application Acceleration and Security (WAAS) policy in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the WAAS policy",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--domain",
              description:
                "The web application domain that the WAAS policy protects",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the WAAS policy",
              args: { name: "display-name" },
            },
            {
              name: "--additional-domains",
              description:
                "An array of additional domains for the specified web application",
              args: { name: "json" },
            },
            {
              name: "--origins",
              description: "A map of host to origin for the web application",
              args: { name: "json" },
            },
            optOriginGroups,
            { name: "--policy-config", args: { name: "json" } },
            { name: "--waf-config", args: { name: "json" } },
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
          description: "Deletes a policy",
          options: [
            optWaasPolicyId,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of a WAAS policy",
          options: [optWaasPolicyId, optFromJson],
        },
        {
          name: "list",
          description: "Gets a list of WAAS policies",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The value by which policies are sorted in a paginated 'List' call",
              args: { suggestions: ["id", "displayName", "timeCreated"] },
            },
            optSortOrder,
            {
              name: "--id",
              description: "Filter policies using a list of policy OCIDs",
              args: { name: "id" },
              isRepeatable: true,
            },
            {
              name: "--display-name",
              description: "Filter policies using a list of display names",
              args: { name: "display-name" },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-state",
              description: "Filter policies using a list of lifecycle states",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--time-created-greater-than-or-equal-to",
              description:
                "A filter that matches policies created on or after the specified date and time",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-less-than",
              description:
                "A filter that matches policies created before the specified date-time",
              args: { name: "datetime" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the details of a WAAS policy, including origins and tags",
          options: [
            optWaasPolicyId,
            {
              name: "--display-name",
              description: "A user-friendly name for the WAAS policy",
              args: { name: "display-name" },
            },
            {
              name: "--additional-domains",
              description:
                "An array of additional domains protected by this WAAS policy",
              args: { name: "json" },
            },
            {
              name: "--origins",
              description: "A map of host to origin for the web application",
              args: { name: "json" },
            },
            optOriginGroups,
            { name: "--policy-config", args: { name: "json" } },
            { name: "--waf-config", args: { name: "json" } },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "custom-protection-rule",
          description: "Summary information about a Custom Protection rule",
          subcommands: [
            {
              name: "list",
              description:
                "Gets the list of currently configured custom protection rules for a WAAS policy",
              options: [
                optWaasPolicyId,
                optLimit,
                optPage,
                {
                  name: "--mod-security-rule-id",
                  description:
                    "Filter rules using a list of ModSecurity rule IDs",
                  args: { name: "mod-security-rule-id" },
                  isRepeatable: true,
                },
                {
                  name: "--action",
                  description: "Filter rules using a list of actions",
                  args: { suggestions: ["DETECT", "BLOCK"] },
                  isRepeatable: true,
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "access-rule",
      description: "A content access rule",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the currently configured access rules for the Web Application Firewall configuration of a specified WAAS",
          options: [
            optWaasPolicyId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the list of access rules in the Web Application Firewall configuration for a specified WAAS policy",
          options: [
            optWaasPolicyId,
            {
              name: "--access-rules",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "good-bot",
      description: "The good bot settings",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the list of good bots defined in the Web Application Firewall configuration for a WAAS policy",
          options: [
            optWaasPolicyId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the list of good bots in the Web Application Firewall configuration for a policy",
          options: [
            optWaasPolicyId,
            { name: "--good-bots", args: { name: "json" }, isRequired: true },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "threat-feed",
      description: "The settings of the threat intelligence feed",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the list of available web application threat intelligence feeds and the actions set for each feed",
          options: [
            optWaasPolicyId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the action to take when a request's IP address matches an address in the specified threat",
          options: [
            optWaasPolicyId,
            {
              name: "--threat-feeds",
              description:
                "A list of threat feeds for which to update the actions",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "waf-traffic-datum",
      description:
        "A time series of traffic data for the Web Application Firewall configured for a policy",
      subcommands: [
        {
          name: "list-waf-traffic",
          description:
            "Gets the Web Application Firewall traffic data for a WAAS policy",
          options: [
            optWaasPolicyId,
            optTimeObservedGreaterThanOrEqualTo,
            optTimeObservedLessThan,
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
      name: "certificate",
      description: "The details of the SSL certificate",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves certificate into a different compartment",
          options: [
            optCertificateId,
            optCompartmentId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Allows an SSL certificate to be added to a WAAS policy",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the SSL certificate",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--certificate-data",
              description: "The data of the SSL certificate",
              args: { name: "certificate-data" },
              isRequired: true,
            },
            {
              name: "--private-key-data",
              description: "The private key of the SSL certificate",
              args: { name: "private-key-data" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the SSL certificate",
              args: { name: "display-name" },
            },
            {
              name: "--is-trust-verification-disabled",
              description: "Set to true if the SSL certificate is self-signed",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
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
          description: "Deletes an SSL certificate from the WAAS service",
          options: [
            optCertificateId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of an SSL certificate",
          options: [optCertificateId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of SSL certificates that can be used in a WAAS policy",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The value by which certificate summaries are sorted in a paginated 'List' call",
              args: {
                suggestions: [
                  "id",
                  "compartmentId",
                  "displayName",
                  "notValidAfter",
                  "timeCreated",
                ],
              },
            },
            optSortOrder,
            {
              name: "--id",
              description:
                "Filter certificates using a list of certificates OCIDs",
              args: { name: "id" },
              isRepeatable: true,
            },
            {
              name: "--display-name",
              description: "Filter certificates using a list of display names",
              args: { name: "display-name" },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "Filter certificates using a list of lifecycle states",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--time-created-greater-than-or-equal-to",
              description:
                "A filter that matches certificates created on or after the specified date-time",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-less-than",
              description:
                "A filter that matches certificates created before the specified date-time",
              args: { name: "datetime" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "It is not possible to update a certificate, only create and delete",
          options: [
            optCertificateId,
            optIfMatch,
            {
              name: "--display-name",
              description: "A user-friendly name for the SSL certificate",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-address-list",
          description:
            "Deprecated, use oci waas address-list update command Updates the details of an address list",
          deprecated: true,
          options: [
            optAddressListId,
            optIfMatch,
            {
              name: "--display-name",
              description: "A user-friendly name for the address list",
              args: { name: "display-name" },
            },
            {
              name: "--addresses",
              description: "A list of IP addresses or CIDR notations",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "edge-subnet",
      description: "The details about an edge node subnet",
      subcommands: [
        {
          name: "list",
          description: "Return the list of the tenant's edge node subnets",
          options: [
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The value by which edge node subnets are sorted in a paginated 'List' call",
              args: { suggestions: ["cidr", "region", "timeModified"] },
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
      name: "recommendation",
      description: "A recommended protection rule for a web application",
      subcommands: [
        {
          name: "accept",
          description:
            "Accepts a list of recommended Web Application Firewall protection rules",
          options: [
            optWaasPolicyId,
            {
              name: "--protection-rule-keys",
              args: { name: "json" },
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
          name: "list",
          description:
            "Gets the list of recommended Web Application Firewall protection rules",
          options: [
            optWaasPolicyId,
            {
              name: "--recommended-action",
              description:
                "A filter that matches recommended protection rules based on the selected action",
              args: { suggestions: ["DETECT", "BLOCK"] },
            },
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
      name: "js-challenge",
      description: "The JavaScript challenge settings",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the JavaScript challenge settings in the Web Application Firewall configuration for a WAAS policy",
          options: [optWaasPolicyId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the JavaScript challenge settings in the Web Application Firewall configuration for a WAAS policy",
          options: [
            optWaasPolicyId,
            {
              name: "--is-enabled",
              description:
                "Enables or disables the JavaScript challenge Web Application Firewall feature",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--action",
              description:
                "The action to take against requests from detected bots",
              args: { suggestions: ["DETECT", "BLOCK"] },
            },
            {
              name: "--failure-threshold",
              description: "The number of failed requests before taking action",
              args: { name: "integer" },
            },
            {
              name: "--action-expiration-in-seconds",
              description:
                "The number of seconds between challenges from the same IP address",
              args: { name: "integer" },
            },
            {
              name: "--set-http-header",
              description:
                "Adds an additional HTTP header to requests that fail the challenge before being passed to the origin",
              args: { name: "json" },
            },
            optChallengeSettings,
            {
              name: "--are-redirects-challenged",
              description:
                "When enabled, redirect responses from the origin will also be challenged",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--criteria",
              description:
                "When defined, the JavaScript Challenge would be applied only for the requests that matched all the listed",
              args: { name: "json" },
            },
            {
              name: "--is-nat-enabled",
              description:
                "When enabled, the user is identified not only by the IP address but also by an unique additional hash",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description:
        "Many of the API requests you use to create and configure WAAS policies do not take effect immediately",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a specified work request",
          options: [
            {
              name: "--work-request-id",
              description: "The OCID of the work request",
              args: { name: "work-request-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of a specified work request",
          options: [
            {
              name: "--work-request-id",
              description: "The OCID of the work request",
              args: { name: "work-request-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets a list of subnets (CIDR notation) from which the WAAS EDGE may make requests",
          options: [
            {
              name: "--waas-policy-id",
              description: "The OCID of the policy",
              args: { name: "waas-policy-id" },
              isRequired: true,
            },
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The value by which work requests are sorted in a paginated 'List' call",
              args: {
                suggestions: [
                  "id",
                  "status",
                  "timeAccepted",
                  "timeStarted",
                  "timeFinished",
                  "operationType",
                ],
              },
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
      name: "custom-protection-rule",
      description: "The details of a custom protection rule",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a custom protection rule into a different compartment within the same tenancy",
          options: [
            optCustomProtectionRuleId,
            optCompartmentId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new custom protection rule in the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the custom protection rule",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "A user-friendly name for the custom protection rule",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--template",
              description: "The template text of the custom protection rule",
              args: { name: "template" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description for the Custom Protection rule",
              args: { name: "description" },
            },
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
          description: "Deletes a Custom Protection rule",
          options: [
            optCustomProtectionRuleId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of a custom protection rule",
          options: [optCustomProtectionRuleId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of custom protection rules for the specified Web Application Firewall",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The value by which custom protection rules are sorted in a paginated 'List' call",
              args: {
                suggestions: [
                  "id",
                  "compartmentId",
                  "displayName",
                  "modSecurityRuleId",
                  "timeCreated",
                ],
              },
            },
            optSortOrder,
            {
              name: "--id",
              description:
                "Filter custom protection rules using a list of custom protection rule OCIDs",
              args: { name: "id" },
              isRepeatable: true,
            },
            {
              name: "--display-name",
              description:
                "Filter custom protection rules using a list of display names",
              args: { name: "display-name" },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "Filter Custom Protection rules using a list of lifecycle states",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--time-created-greater-than-or-equal-to",
              description:
                "A filter that matches Custom Protection rules created on or after the specified date-time",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-less-than",
              description:
                "A filter that matches custom protection rules created before the specified date-time",
              args: { name: "datetime" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the configuration of a custom protection rule",
          options: [
            optCustomProtectionRuleId,
            {
              name: "--display-name",
              description:
                "A user-friendly name for the custom protection rule",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "A description for the custom protection rule",
              args: { name: "description" },
            },
            {
              name: "--template",
              description: "The template text of the custom protection rule",
              args: { name: "template" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update-setting",
          description:
            "Updates the action for each specified custom protection rule",
          options: [
            optWaasPolicyId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--custom-protection-rules-details",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "address-rate-limiting",
      description: "The IP rate limiting configuration",
      subcommands: [
        {
          name: "get-waf",
          description:
            "Gets the address rate limiting settings of the Web Application Firewall configuration for a WAAS policy",
          options: [optWaasPolicyId, optFromJson],
        },
        {
          name: "update-waf",
          description:
            "Updates the address rate limiting settings in the Web Application Firewall configuration for a policy",
          options: [
            optWaasPolicyId,
            {
              name: "--is-enabled",
              description:
                "Enables or disables the address rate limiting Web Application Firewall feature",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--allowed-rate-per-address",
              description:
                "The number of allowed requests per second from one IP address",
              args: { name: "integer" },
            },
            {
              name: "--max-delayed-count-per-address",
              description:
                "The maximum number of requests allowed to be queued before subsequent requests are dropped",
              args: { name: "integer" },
            },
            {
              name: "--block-response-code",
              description:
                "The response status code returned when a request is blocked",
              args: { name: "integer" },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "captcha",
      description: "The settings of the CAPTCHA challenge",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the list of currently configured CAPTCHA challenges in the Web Application Firewall configuration of",
          options: [
            optWaasPolicyId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the list of CAPTCHA challenges in the Web Application Firewall configuration for a WAAS policy",
          options: [
            optWaasPolicyId,
            {
              name: "--captchas",
              description: "A list of CAPTCHA details",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "waf-blocked-request",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the number of blocked requests by a Web Application Firewall feature in five minute blocks",
          options: [
            optWaasPolicyId,
            optTimeObservedGreaterThanOrEqualTo,
            optTimeObservedLessThan,
            optLimit,
            optPage,
            {
              name: "--waf-feature",
              description:
                "Filter stats by the Web Application Firewall feature that triggered the block action",
              args: {
                suggestions: [
                  "PROTECTION_RULES",
                  "JS_CHALLENGE",
                  "ACCESS_RULES",
                  "THREAT_FEEDS",
                  "HUMAN_INTERACTION_CHALLENGE",
                  "DEVICE_FINGERPRINT_CHALLENGE",
                  "CAPTCHA",
                  "ADDRESS_RATE_LIMITING",
                ],
              },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "policy-config",
      description: "The configuration details for the WAAS policy",
      subcommands: [
        {
          name: "get",
          description: "Gets the configuration of a WAAS policy",
          options: [optWaasPolicyId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the configuration for a WAAS policy",
          options: [
            optWaasPolicyId,
            {
              name: "--certificate-id",
              description:
                "The OCID of the SSL certificate to use if HTTPS is supported",
              args: { name: "certificate-id" },
            },
            {
              name: "--is-https-enabled",
              description: "Enable or disable HTTPS support",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-https-forced",
              description: "Force HTTP to HTTPS redirection",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-origin-compression-enabled",
              description:
                "Enable or disable GZIP compression of origin responses",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-behind-cdn",
              description:
                "Enabling isBehindCdn allows for the collection of IP addresses from client requests if the WAF is connected",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--client-address-header",
              description:
                "Specifies an HTTP header name which is treated as the connecting client's IP address",
              args: {
                suggestions: [
                  "X_FORWARDED_FOR",
                  "X_CLIENT_IP",
                  "X_REAL_IP",
                  "CLIENT_IP",
                  "TRUE_CLIENT_IP",
                ],
              },
            },
            {
              name: "--is-cache-control-respected",
              description:
                "Enable or disable automatic content caching based on the response cache-control header",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-response-buffering-enabled",
              description:
                "Enable or disable buffering of responses from the origin",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--cipher-group",
              description:
                "The set cipher group for the configured TLS protocol",
              args: { suggestions: ["DEFAULT"] },
            },
            {
              name: "--load-balancing-method",
              description:
                "An object that represents a load balancing method and its properties",
              args: { name: "json" },
            },
            {
              name: "--websocket-path-prefixes",
              description: "ModSecurity is not capable to inspect WebSockets",
              args: { name: "json" },
            },
            {
              name: "--is-sni-enabled",
              description:
                "SNI stands for Server Name Indication and is an extension of the TLS protocol",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--health-checks", args: { name: "json" } },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--tls-protocols",
              description: "A list of allowed TLS protocols",
              args: {
                suggestions: ["TLS_V1", "TLS_V1_1", "TLS_V1_2", "TLS_V1_3"],
              },
              isRepeatable: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "waf-request",
      description:
        "A time series of request counts handled by the Web Application Firewall, including blocked requests",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the number of requests managed by a Web Application Firewall over a specified period of time",
          options: [
            optWaasPolicyId,
            optTimeObservedGreaterThanOrEqualTo,
            optTimeObservedLessThan,
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
      name: "protection-rule",
      description: "The protection rule settings",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the details of a protection rule in the Web Application Firewall configuration for a WAAS policy",
          options: [
            optWaasPolicyId,
            {
              name: "--protection-rule-key",
              description: "The protection rule key",
              args: { name: "protection-rule-key" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Gets the list of available protection rules for a WAAS policy",
          options: [
            optWaasPolicyId,
            optLimit,
            optPage,
            {
              name: "--mod-security-rule-id",
              description: "Filter rules using a list of ModSecurity rule IDs",
              args: { name: "mod-security-rule-id" },
              isRepeatable: true,
            },
            {
              name: "--action",
              description: "Filter rules using a list of actions",
              args: { suggestions: ["OFF", "DETECT", "BLOCK"] },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the action for each specified protection rule",
          options: [
            optWaasPolicyId,
            {
              name: "--protection-rules",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "whitelist",
      description:
        "An array of IP addresses that bypass the Web Application Firewall",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the list of whitelists defined in the Web Application Firewall configuration for a WAAS policy",
          options: [
            optWaasPolicyId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the list of IP addresses that bypass the Web Application Firewall for a WAAS policy",
          options: [
            optWaasPolicyId,
            { name: "--whitelists", args: { name: "json" }, isRequired: true },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "human-interaction-challenge",
      description: "The human interaction challenge settings",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the human interaction challenge settings in the Web Application Firewall configuration for a WAAS policy",
          options: [optWaasPolicyId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the Human Interaction Challenge (HIC) settings in the Web Application Firewall configuration for",
          options: [
            optWaasPolicyId,
            {
              name: "--is-enabled",
              description:
                "Enables or disables the human interaction challenge Web Application Firewall feature",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--action",
              description:
                "The action to take against requests from detected bots",
              args: { suggestions: ["DETECT", "BLOCK"] },
            },
            {
              name: "--failure-threshold",
              description: "The number of failed requests before taking action",
              args: { name: "integer" },
            },
            {
              name: "--action-expiration-in-seconds",
              description:
                "The number of seconds between challenges for the same IP address",
              args: { name: "integer" },
            },
            {
              name: "--failure-threshold-expiration-in-seconds",
              description:
                "The number of seconds before the failure threshold resets",
              args: { name: "integer" },
            },
            {
              name: "--interaction-threshold",
              description:
                "The number of interactions required to pass the challenge",
              args: { name: "integer" },
            },
            {
              name: "--recording-period-in-seconds",
              description:
                "The number of seconds to record the interactions from the user",
              args: { name: "integer" },
            },
            {
              name: "--set-http-header",
              description:
                "Adds an additional HTTP header to requests that fail the challenge before being passed to the origin",
              args: { name: "json" },
            },
            optChallengeSettings,
            {
              name: "--is-nat-enabled",
              description:
                "When enabled, the user is identified not only by the IP address but also by an unique additional hash",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "device-fingerprint-challenge",
      description: "The device fingerprint challenge settings",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the device fingerprint challenge settings in the Web Application Firewall configuration for a WAAS",
          options: [optWaasPolicyId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the Device Fingerprint Challenge (DFC) settings in the Web Application Firewall configuration for",
          options: [
            optWaasPolicyId,
            {
              name: "--is-enabled",
              description:
                "Enables or disables the device fingerprint challenge Web Application Firewall feature",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--action",
              description: "The action to take on requests from detected bots",
              args: { suggestions: ["DETECT", "BLOCK"] },
            },
            {
              name: "--failure-threshold",
              description:
                "The number of failed requests allowed before taking action",
              args: { name: "integer" },
            },
            {
              name: "--action-expiration-in-seconds",
              description:
                "The number of seconds between challenges for the same IP address",
              args: { name: "integer" },
            },
            {
              name: "--failure-threshold-expiration-in-seconds",
              description:
                "The number of seconds before the failure threshold resets",
              args: { name: "integer" },
            },
            {
              name: "--max-address-count",
              description:
                "The maximum number of IP addresses permitted with the same device fingerprint",
              args: { name: "integer" },
            },
            {
              name: "--max-address-count-expiration-in-seconds",
              description:
                "The number of seconds before the maximum addresses count resets",
              args: { name: "integer" },
            },
            optChallengeSettings,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "address-list",
      description: "The details of the address list",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves address list into a different compartment",
          options: [
            optAddressListId,
            optCompartmentId2,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates an address list in a set compartment and allows it to be used in a WAAS policy and referenced",
          options: [
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment in which to create the address list",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user-friendly name for the address list",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--addresses",
              description: "A list of IP addresses or CIDR notations",
              args: { name: "json" },
              isRequired: true,
            },
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
          description:
            "Deletes the address list from the compartment if it is not used",
          options: [
            optAddressListId,
            optIfMatch,
            optForce2,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets the details of an address list",
          options: [optAddressListId, optFromJson],
        },
        {
          name: "list",
          description:
            "Gets a list of address lists that can be used in a WAAS policy",
          options: [
            optCompartmentId,
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description:
                "The value by which address lists are sorted in a paginated 'List' call",
              args: { suggestions: ["id", "name", "timeCreated"] },
            },
            optSortOrder,
            {
              name: "--id",
              description:
                "Filter address lists using a list of address lists OCIDs",
              args: { name: "id" },
              isRepeatable: true,
            },
            {
              name: "--name",
              description: "Filter address lists using a list of names",
              args: { name: "name" },
              isRepeatable: true,
            },
            {
              name: "--lifecycle-state",
              description:
                "Filter address lists using a list of lifecycle states",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "FAILED",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--time-created-greater-than-or-equal-to",
              description:
                "A filter that matches address lists created on or after the specified date-time",
              args: { name: "datetime" },
            },
            {
              name: "--time-created-less-than",
              description:
                "A filter that matches address lists created before the specified date-time",
              args: { name: "datetime" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the details of an address list",
          options: [
            optAddressListId,
            optIfMatch,
            {
              name: "--display-name",
              description: "A user-friendly name for the address list",
              args: { name: "display-name" },
            },
            {
              name: "--addresses",
              description: "A list of IP addresses or CIDR notations",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "waf-log",
      description: "A list of Web Application Firewall log entries",
      subcommands: [
        {
          name: "list",
          description:
            "Gets structured Web Application Firewall event logs for a WAAS policy",
          options: [
            optWaasPolicyId,
            optLimit,
            optPage,
            {
              name: "--time-observed-greater-than-or-equal-to",
              description:
                "A filter that matches log entries where the observed event occurred on or after a date and time specified",
              args: { name: "datetime" },
            },
            {
              name: "--time-observed-less-than",
              description:
                "A filter that matches log entries where the observed event occurred before a date and time",
              args: { name: "datetime" },
            },
            {
              name: "--text-contains",
              description: "A full text search for logs",
              args: { name: "text-contains" },
            },
            {
              name: "--access-rule-key",
              description: "Filters logs by access rule key",
              args: { name: "access-rule-key" },
              isRepeatable: true,
            },
            {
              name: "--action",
              description: "Filters logs by Web Application Firewall action",
              args: {
                suggestions: ["BLOCK", "DETECT", "BYPASS", "LOG", "REDIRECTED"],
              },
              isRepeatable: true,
            },
            {
              name: "--client-address",
              description: "Filters logs by client IP address",
              args: { name: "client-address" },
              isRepeatable: true,
            },
            {
              name: "--country-code",
              description: "Filters logs by country code",
              args: { name: "country-code" },
              isRepeatable: true,
            },
            {
              name: "--country-name",
              description: "Filter logs by country name",
              args: { name: "country-name" },
              isRepeatable: true,
            },
            {
              name: "--fingerprint",
              description: "Filter logs by device fingerprint",
              args: { name: "fingerprint" },
              isRepeatable: true,
            },
            {
              name: "--http-method",
              description: "Filter logs by HTTP method",
              args: {
                suggestions: [
                  "OPTIONS",
                  "GET",
                  "HEAD",
                  "POST",
                  "PUT",
                  "DELETE",
                  "TRACE",
                  "CONNECT",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--incident-key",
              description: "Filter logs by incident key",
              args: { name: "incident-key" },
              isRepeatable: true,
            },
            {
              name: "--log-type",
              description: "Filter by log type",
              args: {
                suggestions: [
                  "ACCESS",
                  "PROTECTION_RULES",
                  "JS_CHALLENGE",
                  "CAPTCHA",
                  "ACCESS_RULES",
                  "THREAT_FEEDS",
                  "HUMAN_INTERACTION_CHALLENGE",
                  "DEVICE_FINGERPRINT_CHALLENGE",
                  "ADDRESS_RATE_LIMITING",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--origin-address",
              description: "Filter by origin IP address",
              args: { name: "origin-address" },
              isRepeatable: true,
            },
            {
              name: "--referrer",
              description: "Filter by referrer",
              args: { name: "referrer" },
              isRepeatable: true,
            },
            {
              name: "--request-url",
              description: "Filter by request URL",
              args: { name: "request-url" },
              isRepeatable: true,
            },
            {
              name: "--response-code",
              description: "Filter by response code",
              args: { name: "response-code" },
              isRepeatable: true,
            },
            {
              name: "--threat-feed-key",
              description: "Filter by threat feed key",
              args: { name: "threat-feed-key" },
              isRepeatable: true,
            },
            {
              name: "--user-agent",
              description: "Filter by user agent",
              args: { name: "user-agent" },
              isRepeatable: true,
            },
            {
              name: "--protection-rule-key",
              description: "Filter by protection rule key",
              args: { name: "protection-rule-key" },
              isRepeatable: true,
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "caching-rule",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the currently configured caching rules for the Web Application Firewall configuration of a specified",
          options: [
            optWaasPolicyId,
            optLimit,
            optPage,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "update",
          description:
            "Updates the configuration for each specified caching rule",
          options: [
            optWaasPolicyId,
            {
              name: "--caching-rules-details",
              args: { name: "json" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "protection-settings",
      description: "The settings used for protection rules",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the protection settings in the Web Application Firewall configuration for a WAAS policy",
          options: [optWaasPolicyId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the protection settings in the Web Application Firewall configuration for a WAAS policy",
          options: [
            optWaasPolicyId,
            {
              name: "--block-action",
              description:
                "If action is set to BLOCK, this specifies how the traffic is blocked when detected as malicious by",
              args: { suggestions: ["SHOW_ERROR_PAGE", "SET_RESPONSE_CODE"] },
            },
            {
              name: "--block-response-code",
              description:
                "The response code returned when action is set to BLOCK, blockAction is set to SET_RESPONSE_CODE",
              args: { name: "integer" },
            },
            {
              name: "--block-error-page-message",
              description:
                "The message to show on the error page when action is set to BLOCK, blockAction is set to SHOW_ERROR_PAGE",
              args: { name: "block-error-page-message" },
            },
            {
              name: "--block-error-page-code",
              description:
                "The error code to show on the error page when action is set to BLOCK, blockAction is set to SHOW_ERROR_PAGE",
              args: { name: "block-error-page-code" },
            },
            {
              name: "--block-error-page-description",
              description:
                "The description text to show on the error page when action is set to BLOCK",
              args: { name: "block-error-page-description" },
            },
            {
              name: "--max-argument-count",
              description:
                "The maximum number of arguments allowed to be passed to your application before an action is taken",
              args: { name: "integer" },
            },
            {
              name: "--max-name-length-per-argument",
              description:
                "The maximum length allowed for each argument name, in characters",
              args: { name: "integer" },
            },
            {
              name: "--max-total-name-length-of-arguments",
              description:
                "The maximum length allowed for the sum of the argument name and value, in characters",
              args: { name: "integer" },
            },
            {
              name: "--recommendations-period-in-days",
              description: "The length of time to analyze traffic, in days",
              args: { name: "integer" },
            },
            {
              name: "--is-response-inspected",
              description: "Inspects the response body of origin responses",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--max-response-size-in-ki-b",
              description:
                "The maximum response size to be fully inspected, in binary kilobytes (KiB)",
              args: { name: "integer" },
            },
            {
              name: "--allowed-http-methods",
              description: "The list of allowed HTTP methods",
              args: {
                suggestions: [
                  "OPTIONS",
                  "GET",
                  "HEAD",
                  "POST",
                  "PUT",
                  "DELETE",
                  "TRACE",
                  "CONNECT",
                  "PATCH",
                  "PROPFIND",
                ],
              },
            },
            {
              name: "--media-types",
              description:
                "The list of media types to allow for inspection, if isResponseInspected is enabled",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "waf-config",
      description:
        "The Web Application Firewall configuration for the WAAS policy",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the Web Application Firewall configuration details for a WAAS policy",
          options: [optWaasPolicyId, optFromJson],
        },
        {
          name: "update",
          description:
            "Updates the Web Application Firewall configuration for a specified WAAS policy",
          options: [
            optWaasPolicyId,
            {
              name: "--access-rules",
              description:
                "The access rules applied to the Web Application Firewall",
              args: { name: "json" },
            },
            {
              name: "--address-rate-limiting",
              description:
                "The IP address rate limiting settings used to limit the number of requests from an address",
              args: { name: "json" },
            },
            {
              name: "--captchas",
              description: "A list of CAPTCHA challenge settings",
              args: { name: "json" },
            },
            {
              name: "--device-fingerprint-challenge",
              description: "The device fingerprint challenge settings",
              args: { name: "json" },
            },
            {
              name: "--good-bots",
              description:
                "A list of bots allowed to access the web application",
              args: { name: "json" },
            },
            {
              name: "--human-interaction-challenge",
              description: "The human interaction challenge settings",
              args: { name: "json" },
            },
            {
              name: "--js-challenge",
              description: "The JavaScript challenge settings",
              args: { name: "json" },
            },
            {
              name: "--origin",
              description:
                "The key in the map of origins referencing the origin used for the Web Application Firewall",
              args: { name: "origin" },
            },
            {
              name: "--caching-rules",
              description:
                "A list of caching rules applied to the web application",
              args: { name: "json" },
            },
            {
              name: "--custom-protection-rules",
              description:
                "A list of the custom protection rule OCIDs and their actions",
              args: { name: "json" },
            },
            optOriginGroups,
            {
              name: "--protection-rules",
              description: "A list of the protection rules and their details",
              args: { name: "json" },
            },
            {
              name: "--protection-settings",
              description: "The settings to apply to protection rules",
              args: { name: "json" },
            },
            {
              name: "--threat-feeds",
              description:
                "A list of threat intelligence feeds and the actions to apply to known malicious traffic based on internet",
              args: { name: "json" },
            },
            {
              name: "--whitelists",
              description:
                "A list of IP addresses that bypass the Web Application Firewall",
              args: { name: "json" },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "purge-cache",
      description: "Performs a purge of the cache for each specified resource",
      options: [
        optWaasPolicyId,
        optIfMatch,
        {
          name: "--resources",
          description:
            "A resource to purge, specified by either a hostless absolute path starting with a single slash",
          args: { name: "json" },
        },
        optWaitForState,
        optMaxWaitSeconds,
        optWaitIntervalSeconds,
        optFromJson,
      ],
    },
  ],
};

export default completionSpec;
