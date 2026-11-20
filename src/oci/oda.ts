// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optOdaInstanceId: Fig.Option = {
  name: "--oda-instance-id",
  description: "Unique Digital Assistant instance identifier",
  args: { name: "oda-instance-id" },
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
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Usage of predefined tag keys",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type, or scope",
  args: { name: "json" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description:
    "For optimistic concurrency control in a PUT or DELETE call for a Digital Assistant instance",
  args: { name: "if-match" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "IN_PROGRESS",
      "SUCCEEDED",
      "FAILED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "A short description of the Channel",
  args: { name: "description" },
};
const optSessionExpiryDurationInMilliseconds: Fig.Option = {
  name: "--session-expiry-duration-in-milliseconds",
  description: "The number of milliseconds before a session expires",
  args: { name: "integer" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "INACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optBotId: Fig.Option = {
  name: "--bot-id",
  description:
    "The ID of the Skill or Digital Assistant that the Channel is routed to",
  args: { name: "bot-id" },
};
const optChannelId: Fig.Option = {
  name: "--channel-id",
  description: "Unique Channel identifier",
  args: { name: "channel-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return per page",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description: "The page at which to start retrieving results",
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
    "Sort the results in this order, use either ASC (ascending) or DESC (descending)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optName: Fig.Option = {
  name: "--name",
  description: "The Channel's name",
  args: { name: "name" },
  isRequired: true,
};
const optName2: Fig.Option = {
  name: "--name",
  description: "The Channel's name",
  args: { name: "name" },
};
const optSkillId: Fig.Option = {
  name: "--skill-id",
  description: "Unique Skill identifier",
  args: { name: "skill-id" },
  isRequired: true,
};
const optCategory: Fig.Option = {
  name: "--category",
  description: "The resource's category",
  args: { name: "category" },
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "A short description of the resource",
  args: { name: "description" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optMultilingualMode: Fig.Option = {
  name: "--multilingual-mode",
  description: "The multilingual mode for the resource",
  args: { suggestions: ["NATIVE", "TRANSLATION"] },
};
const optPlatformVersion: Fig.Option = {
  name: "--platform-version",
  description: "The ODA Platform Version for this resource",
  args: { name: "platform-version" },
};
const optPrimaryLanguageTag: Fig.Option = {
  name: "--primary-language-tag",
  description: "The primary language for the resource",
  args: { name: "primary-language-tag" },
};
const optDigitalAssistantId: Fig.Option = {
  name: "--digital-assistant-id",
  description: "Unique Digital Assistant identifier",
  args: { name: "digital-assistant-id" },
  isRequired: true,
};
const optOdaPrivateEndpointId: Fig.Option = {
  name: "--oda-private-endpoint-id",
  description: "Unique ODA Private Endpoint identifier which is the OCID",
  args: { name: "oda-private-endpoint-id" },
  isRequired: true,
};
const optIfNoneMatch: Fig.Option = {
  name: "--if-none-match",
  description:
    "The If-None-Match HTTP request header makes the request conditional",
  args: { name: "if-none-match" },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "List only the resources that are in this lifecycle state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "INACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "The resource's display name",
  args: { name: "display-name" },
  isRequired: true,
};
const optMaxTokenExpirationTimeInMinutes: Fig.Option = {
  name: "--max-token-expiration-time-in-minutes",
  description: "The maximum time until the token expires (in minutes)",
  args: { name: "integer" },
};
const optName3: Fig.Option = {
  name: "--name",
  description: "The reource's name",
  args: { name: "name" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "Sort on this field",
  args: { suggestions: ["TIMECREATED", "DISPLAYNAME"] },
};
const optDialogVersion: Fig.Option = {
  name: "--dialog-version",
  description: "The resource's dialog version",
  args: { name: "dialog-version" },
};
const optVersionParameterconflict: Fig.Option = {
  name: "--version-parameterconflict",
  description: "The resource's version",
  args: { name: "version-parameterconflict" },
};
const optEventSinkBotIds: Fig.Option = {
  name: "--event-sink-bot-ids",
  description:
    "The IDs of the Skills and Digital Assistants that the Channel is routed to",
  args: { name: "json" },
};
const optPackageId: Fig.Option = {
  name: "--package-id",
  description: "Unique Digital Assistant package identifier",
  args: { name: "package-id" },
  isRequired: true,
};
const optAttachmentId: Fig.Option = {
  name: "--attachment-id",
  description: "Unique Digital Assistant instance attachment identifier",
  args: { name: "attachment-id" },
  isRequired: true,
};
const optAuthenticationProviderId: Fig.Option = {
  name: "--authentication-provider-id",
  description: "Unique Authentication Provider identifier",
  args: { name: "authentication-provider-id" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "List only the information for the Digital Assistant instance with this user-friendly name",
  args: { name: "display-name" },
};
const optIsClientAuthenticationEnabled: Fig.Option = {
  name: "--is-client-authentication-enabled",
  description: "Whether client authentication is enabled or not",
  args: { name: "boolean", suggestions: ["true", "false"] },
  isRequired: true,
};
const optIsClientAuthenticationEnabled2: Fig.Option = {
  name: "--is-client-authentication-enabled",
  description: "Whether client authentication is enabled or not",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optParameterName: Fig.Option = {
  name: "--parameter-name",
  description: "The name of a Skill Parameter",
  args: { name: "parameter-name" },
  isRequired: true,
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "Sort on this field",
  args: { suggestions: ["timeCreated", "timeUpdated", "name"] },
};
const optTranslatorId: Fig.Option = {
  name: "--translator-id",
  description: "Unique Translator identifier",
  args: { name: "translator-id" },
  isRequired: true,
};
const optVersionParameterconflict2: Fig.Option = {
  name: "--version-parameterconflict",
  description: "The resource's version",
  args: { name: "version-parameterconflict" },
  isRequired: true,
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The identifier of the asynchronous work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "oda",
  description: "Digital Assistant Service Instance",
  subcommands: [
    {
      name: "management",
      description:
        "CLI to create and maintain Oracle Digital Assistant service instances",
      subcommands: [
        {
          name: "digital-assistant-parameter",
          description: "Metadata for a Digital Assistant Parameter",
          subcommands: [
            {
              name: "configure",
              description:
                "This will store the provided parameters in the Digital Assistant instance and update any Digital Assistants",
              options: [
                optOdaInstanceId,
                {
                  name: "--parameters",
                  description:
                    "The values to use to configure the Digital Assistant Parameters",
                  args: { name: "json" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets the specified Digital Assistant Parameter",
              options: [
                optOdaInstanceId,
                optDigitalAssistantId,
                {
                  name: "--parameter-name",
                  description: "The name of a Digital Assistant Parameter",
                  args: { name: "parameter-name" },
                  isRequired: true,
                },
                optIfNoneMatch,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns a page of Parameters that belong to the specified Digital Assistant",
              options: [
                optOdaInstanceId,
                optDigitalAssistantId,
                {
                  name: "--name",
                  description: "List only Parameters with this name",
                  args: { name: "name" },
                },
                optLifecycleState,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "Sort on this field",
                  args: { suggestions: ["name", "displayName", "type"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "Updates the specified Digital Assistant Parameter with the information in the request body",
              options: [
                optOdaInstanceId,
                optDigitalAssistantId,
                {
                  name: "--parameter-name",
                  description: "The name of a Digital Assistant Parameter",
                  args: { name: "parameter-name" },
                  isRequired: true,
                },
                {
                  name: "--value",
                  description: "The current value",
                  args: { name: "value" },
                  isRequired: true,
                },
                optIfMatch,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "authentication-provider",
          description: "Settings for the Authentication Provider",
          subcommands: [
            {
              name: "create",
              description: "Creates a new Authentication Provider",
              options: [
                optOdaInstanceId,
                {
                  name: "--grant-type",
                  description: "The grant type for the Authentication Provider",
                  args: {
                    suggestions: ["CLIENT_CREDENTIALS", "AUTHORIZATION_CODE"],
                  },
                  isRequired: true,
                },
                {
                  name: "--identity-provider",
                  description:
                    "Which type of Identity Provider (IDP) you are using",
                  args: {
                    suggestions: ["GENERIC", "OAM", "GOOGLE", "MICROSOFT"],
                  },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "A name to identify the Authentication Provider",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--token-endpoint-url",
                  description: "The IDPs URL for requesting access tokens",
                  args: { name: "token-endpoint-url" },
                  isRequired: true,
                },
                {
                  name: "--client-id",
                  description:
                    "The client ID for the IDP application (OAuth Client) that was registered as described in Identity Provider",
                  args: { name: "client-id" },
                  isRequired: true,
                },
                {
                  name: "--client-secret",
                  description:
                    "The client secret for the IDP application (OAuth Client) that was registered as described in Identity",
                  args: { name: "client-secret" },
                  isRequired: true,
                },
                {
                  name: "--scopes",
                  description:
                    "A space-separated list of the scopes that must be included when Digital Assistant requests an access token",
                  args: { name: "scopes" },
                  isRequired: true,
                },
                {
                  name: "--authorization-endpoint-url",
                  description:
                    "The IDPs URL for the page that users authenticate with by entering the user name and password",
                  args: { name: "authorization-endpoint-url" },
                },
                {
                  name: "--short-authorization-code-request-url",
                  description:
                    "A shortened version of the authorization URL, which you can get from a URL shortener service",
                  args: { name: "short-authorization-code-request-url" },
                },
                {
                  name: "--revoke-token-endpoint-url",
                  description:
                    "If you want to revoke all the refresh tokens and access tokens of the logged-in user from a dialog flow",
                  args: { name: "revoke-token-endpoint-url" },
                },
                {
                  name: "--subject-claim",
                  description:
                    "The access-token profile claim to use to identify the user",
                  args: { name: "subject-claim" },
                },
                {
                  name: "--refresh-token-retention-period-in-days",
                  description:
                    "The number of days to keep the refresh token in the Digital Assistant cache",
                  args: { name: "integer" },
                },
                {
                  name: "--redirect-url",
                  description: "The OAuth Redirect URL",
                  args: { name: "redirect-url" },
                },
                {
                  name: "--is-visible",
                  description:
                    "Whether this Authentication Provider is visible in the ODA UI",
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
              description: "Delete the specified Authentication Provider",
              options: [
                optOdaInstanceId,
                optAuthenticationProviderId,
                optIfMatch,
                optForce2,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets the specified Authentication Provider",
              options: [
                optOdaInstanceId,
                optAuthenticationProviderId,
                optIfNoneMatch,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns a page of Authentication Providers that belong to the specified Digital Assistant instance",
              options: [
                optOdaInstanceId,
                {
                  name: "--id",
                  description: "Unique Authentication Provider identifier",
                  args: { name: "id" },
                },
                {
                  name: "--identity-provider",
                  description:
                    "List only Authentication Providers for this Identity Provider",
                  args: {
                    suggestions: ["GENERIC", "OAM", "GOOGLE", "MICROSOFT"],
                  },
                },
                {
                  name: "--name",
                  description:
                    "List only the information for Authentication Providers with this name",
                  args: { name: "name" },
                },
                optLifecycleState,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "Sort on this field",
                  args: {
                    suggestions: [
                      "timeCreated",
                      "timeUpdated",
                      "name",
                      "identityProvider",
                    ],
                  },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "Updates the specified Authentication Provider with the information in the request body",
              options: [
                optOdaInstanceId,
                optAuthenticationProviderId,
                {
                  name: "--token-endpoint-url",
                  description: "The IDPs URL for requesting access tokens",
                  args: { name: "token-endpoint-url" },
                },
                {
                  name: "--authorization-endpoint-url",
                  description:
                    "The IDPs URL for the page that users authenticate with by entering the user name and password",
                  args: { name: "authorization-endpoint-url" },
                },
                {
                  name: "--short-authorization-code-request-url",
                  description:
                    "A shortened version of the authorization URL, which you can get from a URL shortener service",
                  args: { name: "short-authorization-code-request-url" },
                },
                {
                  name: "--revoke-token-endpoint-url",
                  description:
                    "If you want to revoke all the refresh tokens and access tokens of the logged-in user from a dialog flow",
                  args: { name: "revoke-token-endpoint-url" },
                },
                {
                  name: "--client-id",
                  description:
                    "The client ID for the IDP application (OAuth Client) that was registered as described in Identity Provider",
                  args: { name: "client-id" },
                },
                {
                  name: "--client-secret",
                  description:
                    "The client secret for the IDP application (OAuth Client) that was registered as described in Identity",
                  args: { name: "client-secret" },
                },
                {
                  name: "--scopes",
                  description:
                    "A space-separated list of the scopes that must be included when Digital Assistant requests an access token",
                  args: { name: "scopes" },
                },
                {
                  name: "--subject-claim",
                  description:
                    "The access-token profile claim to use to identify the user",
                  args: { name: "subject-claim" },
                },
                {
                  name: "--refresh-token-retention-period-in-days",
                  description:
                    "The number of days to keep the refresh token in the Digital Assistant cache",
                  args: { name: "integer" },
                },
                {
                  name: "--redirect-url",
                  description: "The OAuth Redirect URL",
                  args: { name: "redirect-url" },
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
          ],
        },
        {
          name: "digital-assistant",
          description: "Digital Assistant metadata",
          subcommands: [
            {
              name: "create",
              description: "Creates a new Digital Assistant",
              options: [
                optOdaInstanceId,
                {
                  name: "--kind",
                  description: "How to create the Digital Assistant",
                  args: { suggestions: ["NEW", "CLONE", "VERSION", "EXTEND"] },
                  isRequired: true,
                },
                optCategory,
                optDescription2,
                optPlatformVersion,
                optMultilingualMode,
                optPrimaryLanguageTag,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-digital-assistant-create-digital-assistant-version-details",
              description: "Creates a new Digital Assistant",
              options: [
                optOdaInstanceId,
                {
                  name: "--id",
                  description:
                    "The unique identifier of the Digital Assistant to create a new version of",
                  args: { name: "id" },
                  isRequired: true,
                },
                optVersionParameterconflict2,
                optCategory,
                optDescription2,
                optPlatformVersion,
                optMultilingualMode,
                optPrimaryLanguageTag,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-digital-assistant-clone-digital-assistant-details",
              description: "Creates a new Digital Assistant",
              options: [
                optOdaInstanceId,
                {
                  name: "--id",
                  description:
                    "The unique identifier of the Digital Assistant to clone",
                  args: { name: "id" },
                  isRequired: true,
                },
                optName3,
                optDisplayName,
                optCategory,
                optDescription2,
                optPlatformVersion,
                optMultilingualMode,
                optPrimaryLanguageTag,
                optFreeformTags,
                optDefinedTags,
                optVersionParameterconflict,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-digital-assistant-create-new-digital-assistant-details",
              description: "Creates a new Digital Assistant",
              options: [
                optOdaInstanceId,
                optName3,
                optDisplayName,
                optCategory,
                optDescription2,
                optPlatformVersion,
                optMultilingualMode,
                optPrimaryLanguageTag,
                optFreeformTags,
                optDefinedTags,
                optVersionParameterconflict,
                {
                  name: "--native-language-tags",
                  description:
                    "A list of native languages supported by this resource",
                  args: { name: "json" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-digital-assistant-extend-digital-assistant-details",
              description: "Creates a new Digital Assistant",
              options: [
                optOdaInstanceId,
                {
                  name: "--id",
                  description:
                    "The unique identifier of the Digital Assistant to extend",
                  args: { name: "id" },
                  isRequired: true,
                },
                optName3,
                optDisplayName,
                optCategory,
                optDescription2,
                optPlatformVersion,
                optMultilingualMode,
                optPrimaryLanguageTag,
                optFreeformTags,
                optDefinedTags,
                optVersionParameterconflict,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Delete the specified Digital Assistant",
              options: [
                optOdaInstanceId,
                optDigitalAssistantId,
                optIfMatch,
                optForce2,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets the specified Digital Assistant",
              options: [
                optOdaInstanceId,
                optDigitalAssistantId,
                optIfNoneMatch,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns a page of Digital Assistants that belong to the specified Digital Assistant instance",
              options: [
                optOdaInstanceId,
                {
                  name: "--id",
                  description: "Unique Digital Assistant identifier",
                  args: { name: "id" },
                },
                {
                  name: "--category",
                  description: "List only Bot resources with this category",
                  args: { name: "category" },
                },
                {
                  name: "--name",
                  description: "List only Bot resources with this name",
                  args: { name: "name" },
                },
                {
                  name: "--version-parameterconflict",
                  description: "List only Bot resources with this version",
                  args: { name: "version-parameterconflict" },
                },
                {
                  name: "--namespace",
                  description: "List only Bot resources with this namespace",
                  args: { name: "namespace" },
                },
                {
                  name: "--platform-version",
                  description:
                    "List only Bot resources with this platform version",
                  args: { name: "platform-version" },
                },
                optLifecycleState,
                {
                  name: "--lifecycle-details",
                  description:
                    "List only Bot resources with this lifecycle details",
                  args: { name: "lifecycle-details" },
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
              name: "publish",
              description: "Publish a draft Digital Assistant",
              options: [
                optOdaInstanceId,
                optDigitalAssistantId,
                optIfMatch,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "Updates the specified Digital Assistant with the information in the request body",
              options: [
                optOdaInstanceId,
                optDigitalAssistantId,
                optCategory,
                optDescription2,
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
          ],
        },
        {
          name: "skill-parameter",
          description: "Metadata for a Skill Parameter",
          subcommands: [
            {
              name: "create",
              description: "Creates a new Skill Parameter",
              options: [
                optOdaInstanceId,
                optSkillId,
                {
                  name: "--name",
                  description: "The Parameter name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "The display name for the Parameter",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--type",
                  description: "The value type",
                  args: {
                    suggestions: [
                      "STRING",
                      "INTEGER",
                      "FLOAT",
                      "BOOLEAN",
                      "SECURE",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--value",
                  description: "The current value",
                  args: { name: "value" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "A description of the Parameter",
                  args: { name: "description" },
                },
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Delete the specified Skill Parameter",
              options: [
                optOdaInstanceId,
                optSkillId,
                optParameterName,
                optIfMatch,
                optForce2,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets the specified Skill Parameter",
              options: [
                optOdaInstanceId,
                optSkillId,
                optParameterName,
                optIfNoneMatch,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns a page of Skill Parameters that belong to the specified Skill",
              options: [
                optOdaInstanceId,
                optSkillId,
                {
                  name: "--name",
                  description: "List only Parameters with this name",
                  args: { name: "name" },
                },
                optLifecycleState,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "Sort on this field",
                  args: { suggestions: ["name", "displayName", "type"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "Updates the specified Skill Parameter with the information in the request body",
              options: [
                optOdaInstanceId,
                optSkillId,
                optParameterName,
                {
                  name: "--display-name",
                  description: "The display name for the Parameter",
                  args: { name: "display-name" },
                },
                {
                  name: "--description",
                  description: "A description of the Parameter",
                  args: { name: "description" },
                },
                {
                  name: "--value",
                  description: "The current value",
                  args: { name: "value" },
                },
                optIfMatch,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "oda-private-endpoint-scan-proxy",
          description:
            "Details pertaining to a scan proxy instance created for a scan listener FQDN/IPs",
          subcommands: [
            {
              name: "create",
              description:
                "Starts an asynchronous job to create an ODA Private Endpoint Scan Proxy",
              options: [
                {
                  name: "--scan-listener-type",
                  description:
                    "Type indicating whether Scan listener is specified by its FQDN or list of IPs",
                  args: { name: "scan-listener-type" },
                  isRequired: true,
                },
                {
                  name: "--protocol",
                  description:
                    "The protocol used for communication between client, scanProxy and RAC's scan listeners",
                  args: { name: "protocol" },
                  isRequired: true,
                },
                {
                  name: "--scan-listener-infos",
                  description:
                    "The FQDN/IPs and port information of customer's Real Application Cluster (RAC)'s SCAN listeners",
                  args: { name: "json" },
                  isRequired: true,
                },
                optOdaPrivateEndpointId,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description:
                "Starts an asynchronous job to delete the specified ODA Private Endpoint Scan Proxy",
              options: [
                {
                  name: "--oda-private-endpoint-scan-proxy-id",
                  description:
                    "Unique ODA Private Endpoint Scan Proxy identifier",
                  args: { name: "oda-private-endpoint-scan-proxy-id" },
                  isRequired: true,
                },
                optOdaPrivateEndpointId,
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
              description: "Gets the specified ODA Private Endpoint Scan Proxy",
              options: [
                {
                  name: "--oda-private-endpoint-scan-proxy-id",
                  description:
                    "Unique ODA Private Endpoint Scan Proxy identifier",
                  args: { name: "oda-private-endpoint-scan-proxy-id" },
                  isRequired: true,
                },
                optOdaPrivateEndpointId,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns a page of ODA Private Endpoint Scan Proxies that belong to the specified ODA Private Endpoint",
              options: [
                optOdaPrivateEndpointId,
                {
                  name: "--lifecycle-state",
                  description:
                    "List only the ODA Private Endpoint Scan Proxies that are in this lifecycle state",
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
          name: "bot",
          description: "Metadata for a Bot resource",
          subcommands: [
            {
              name: "import",
              description: "Import a Bot archive from Object Storage",
              options: [
                optOdaInstanceId,
                { name: "--source", args: { name: "json" }, isRequired: true },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "skill",
          description: "Skill metadata",
          subcommands: [
            {
              name: "bulk-create-skill-entities",
              description:
                "Bulk create composite and value list entities into a skill",
              options: [
                optOdaInstanceId,
                optSkillId,
                {
                  name: "--items",
                  description: "List of the skill entity objects to create",
                  args: { name: "json" },
                  isRequired: true,
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "cascading-delete-skill-custom-entities",
              description: "Cascading delete of the custom entities in a skill",
              options: [
                optOdaInstanceId,
                optSkillId,
                optIfMatch,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create",
              description: "Creates a new Skill from scratch",
              options: [
                optOdaInstanceId,
                {
                  name: "--kind",
                  description: "How to create the Skill",
                  args: { suggestions: ["NEW", "CLONE", "VERSION", "EXTEND"] },
                  isRequired: true,
                },
                optCategory,
                optDescription2,
                optPlatformVersion,
                optDialogVersion,
                optMultilingualMode,
                optPrimaryLanguageTag,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-skill-clone-skill-details",
              description: "Creates a new Skill from scratch",
              options: [
                optOdaInstanceId,
                {
                  name: "--id",
                  description: "The unique identifier of the Skill to clone",
                  args: { name: "id" },
                  isRequired: true,
                },
                optName3,
                optDisplayName,
                optCategory,
                optDescription2,
                optPlatformVersion,
                optDialogVersion,
                optMultilingualMode,
                optPrimaryLanguageTag,
                optFreeformTags,
                optDefinedTags,
                optVersionParameterconflict,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-skill-create-new-skill-details",
              description: "Creates a new Skill from scratch",
              options: [
                optOdaInstanceId,
                optName3,
                optDisplayName,
                optVersionParameterconflict2,
                optCategory,
                optDescription2,
                optPlatformVersion,
                optDialogVersion,
                optMultilingualMode,
                optPrimaryLanguageTag,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--native-language-tags",
                  description:
                    "A list of native languages supported by this resource",
                  args: { name: "json" },
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-skill-create-skill-version-details",
              description: "Creates a new Skill from scratch",
              options: [
                optOdaInstanceId,
                {
                  name: "--id",
                  description:
                    "The unique identifier of the Skill to create a new version of",
                  args: { name: "id" },
                  isRequired: true,
                },
                optVersionParameterconflict2,
                optCategory,
                optDescription2,
                optPlatformVersion,
                optDialogVersion,
                optMultilingualMode,
                optPrimaryLanguageTag,
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "create-skill-extend-skill-details",
              description: "Creates a new Skill from scratch",
              options: [
                optOdaInstanceId,
                {
                  name: "--id",
                  description: "The unique identifier of the Skill to extend",
                  args: { name: "id" },
                  isRequired: true,
                },
                optName3,
                optDisplayName,
                optCategory,
                optDescription2,
                optPlatformVersion,
                optDialogVersion,
                optMultilingualMode,
                optPrimaryLanguageTag,
                optFreeformTags,
                optDefinedTags,
                optVersionParameterconflict,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Delete the specified Skill",
              options: [
                optOdaInstanceId,
                optSkillId,
                optIfMatch,
                optForce2,
                optFromJson,
              ],
            },
            {
              name: "export-digital-assistant",
              description:
                "Exports the specified Digital Assistant as an archive to Object Storage",
              options: [
                optOdaInstanceId,
                optDigitalAssistantId,
                { name: "--target", args: { name: "json" }, isRequired: true },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "export",
              description:
                "Exports the specified Skill as an archive to Object Storage",
              options: [
                optOdaInstanceId,
                optSkillId,
                { name: "--target", args: { name: "json" }, isRequired: true },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets the specified Skill",
              options: [
                optOdaInstanceId,
                optSkillId,
                optIfNoneMatch,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns a page of Skills that belong to the specified Digital Assistant instance",
              options: [
                optOdaInstanceId,
                {
                  name: "--id",
                  description: "Unique Skill identifier",
                  args: { name: "id" },
                },
                {
                  name: "--category",
                  description: "List only Bot resources with this category",
                  args: { name: "category" },
                },
                {
                  name: "--name",
                  description: "List only Bot resources with this name",
                  args: { name: "name" },
                },
                {
                  name: "--version-parameterconflict",
                  description: "List only Bot resources with this version",
                  args: { name: "version-parameterconflict" },
                },
                {
                  name: "--namespace",
                  description: "List only Bot resources with this namespace",
                  args: { name: "namespace" },
                },
                {
                  name: "--platform-version",
                  description:
                    "List only Bot resources with this platform version",
                  args: { name: "platform-version" },
                },
                optLifecycleState,
                {
                  name: "--lifecycle-details",
                  description:
                    "List only Bot resources with this lifecycle details",
                  args: { name: "lifecycle-details" },
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
              name: "publish",
              description: "Publish a draft Skill",
              options: [
                optOdaInstanceId,
                optSkillId,
                optIfMatch,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "train",
              description: "Train a skill",
              options: [
                optOdaInstanceId,
                optSkillId,
                {
                  name: "--items",
                  description: "List of parameters for training the skill",
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
              name: "update",
              description:
                "Updates the specified Skill with the information in the request body",
              options: [
                optOdaInstanceId,
                optSkillId,
                optCategory,
                optDescription2,
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
          ],
        },
        {
          name: "translator",
          description: "The properties for a Translator",
          subcommands: [
            {
              name: "create",
              description: "Creates a new Translator",
              options: [
                optOdaInstanceId,
                {
                  name: "--type",
                  description:
                    "The Translation Service to use for this Translator",
                  args: { suggestions: ["GOOGLE", "MICROSOFT"] },
                  isRequired: true,
                },
                {
                  name: "--base-url",
                  description:
                    "The base URL for invoking the Translation Service",
                  args: { name: "base-url" },
                  isRequired: true,
                },
                {
                  name: "--auth-token",
                  description:
                    "The authentication token to use when invoking the Translation Service",
                  args: { name: "auth-token" },
                  isRequired: true,
                },
                {
                  name: "--properties",
                  description:
                    "Properties used when invoking the translation service",
                  args: { name: "json" },
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
              description: "Delete the specified Translator",
              options: [
                optOdaInstanceId,
                optTranslatorId,
                optIfMatch,
                optForce2,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets the specified Translator",
              options: [
                optOdaInstanceId,
                optTranslatorId,
                optIfNoneMatch,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns a page of Translators that belong to the specified Digital Assistant instance",
              options: [
                optOdaInstanceId,
                {
                  name: "--id",
                  description: "Unique Translator identifier",
                  args: { name: "id" },
                },
                {
                  name: "--type",
                  description: "List only Translators of this type",
                  args: { suggestions: ["GOOGLE", "MICROSOFT"] },
                },
                {
                  name: "--name",
                  description: "List only Translators with this name",
                  args: { name: "name" },
                },
                optLifecycleState,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "Sort on this field",
                  args: {
                    suggestions: ["timeCreated", "timeUpdated", "name", "type"],
                  },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "Updates the specified Translator with the information in the request body",
              options: [
                optOdaInstanceId,
                optTranslatorId,
                {
                  name: "--base-url",
                  description:
                    "The base URL for invoking the Translation Service",
                  args: { name: "base-url" },
                },
                {
                  name: "--auth-token",
                  description:
                    "The authentication token to use when invoking the Translation Service",
                  args: { name: "auth-token" },
                },
                {
                  name: "--properties",
                  description:
                    "Properties used when invoking the translation service",
                  args: { name: "json" },
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
          ],
        },
        {
          name: "oda-private-endpoint-attachment",
          description:
            "ODA Private Endpoint Attachment is used to attach ODA Private Endpoint to ODA (Digital Assistant) Instance",
          subcommands: [
            {
              name: "create",
              description:
                "Starts an asynchronous job to create an ODA Private Endpoint Attachment",
              options: [
                {
                  name: "--oda-instance-id",
                  description: "The OCID of the attached ODA Instance",
                  args: { name: "oda-instance-id" },
                  isRequired: true,
                },
                {
                  name: "--oda-private-endpoint-id",
                  description: "The OCID of the ODA Private Endpoint",
                  args: { name: "oda-private-endpoint-id" },
                  isRequired: true,
                },
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description:
                "Starts an asynchronous job to delete the specified ODA Private Endpoint Attachment",
              options: [
                {
                  name: "--oda-private-endpoint-attachment-id",
                  description: "The OCID of ODA Private Endpoint Attachment",
                  args: { name: "oda-private-endpoint-attachment-id" },
                  isRequired: true,
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
              name: "get",
              description: "Gets the specified ODA Private Endpoint Attachment",
              options: [
                {
                  name: "--oda-private-endpoint-attachment-id",
                  description: "The OCID of ODA Private Endpoint Attachment",
                  args: { name: "oda-private-endpoint-attachment-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns a page of ODA Instances attached to this ODA Private Endpoint",
              options: [
                {
                  name: "--oda-private-endpoint-id",
                  description: "The OCID of ODA Private Endpoint",
                  args: { name: "oda-private-endpoint-id" },
                  isRequired: true,
                },
                {
                  name: "--compartment-id",
                  description:
                    "List the ODA Private Endpoint Attachments that belong to this compartment",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optLimit,
                optPage,
                {
                  name: "--lifecycle-state",
                  description:
                    "List only the ODA Private Endpoint Attachments that are in this lifecycle state",
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
          name: "oda-private-endpoint",
          description:
            "A private endpoint allows Digital Assistant Instance to access resources in a customer's virtual cloud",
          subcommands: [
            {
              name: "change-compartment",
              description:
                "Starts an asynchronous job to move the specified ODA Private Endpoint into a different compartment",
              options: [
                optOdaPrivateEndpointId,
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment that the ODA private endpoint belongs to",
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
              description:
                "Starts an asynchronous job to create an ODA Private Endpoint",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the compartment that the ODA private endpoint belongs to",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--subnet-id",
                  description:
                    "The OCID of the subnet that the private endpoint belongs to",
                  args: { name: "subnet-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "User-defined name for the ODA private endpoint",
                  args: { name: "display-name" },
                },
                {
                  name: "--description",
                  description: "Description of the ODA private endpoint",
                  args: { name: "description" },
                },
                {
                  name: "--nsg-ids",
                  description: "List of OCIDs of network security groups",
                  args: { name: "json" },
                },
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--security-attributes",
                  description: "Security attributes for this resource",
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
              description:
                "Starts an asynchronous job to delete the specified ODA Private Endpoint",
              options: [
                optOdaPrivateEndpointId,
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
              description: "Gets the specified ODA Private Endpoint",
              options: [optOdaPrivateEndpointId, optFromJson],
            },
            {
              name: "list",
              description:
                "Returns a page of ODA Private Endpoints that belong to the specified compartment",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "List the ODA Private Endpoints that belong to this compartment",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                optDisplayName2,
                {
                  name: "--lifecycle-state",
                  description:
                    "List only the ODA Private Endpoints that are in this lifecycle state",
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
                optSortOrder,
                optSortBy,
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "Starts an asynchronous job to update the specified ODA Private Endpoint with the information in the request",
              options: [
                optOdaPrivateEndpointId,
                {
                  name: "--display-name",
                  description: "User-defined name for the ODA private endpoint",
                  args: { name: "display-name" },
                },
                {
                  name: "--description",
                  description: "Description of the ODA private endpoint",
                  args: { name: "description" },
                },
                {
                  name: "--nsg-ids",
                  description: "List of OCIDs of network security groups",
                  args: { name: "json" },
                },
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--security-attributes",
                  description: "Security attributes for this resource",
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
          name: "channel",
          description: "Properties of a Channel",
          subcommands: [
            {
              name: "create",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                {
                  name: "--type",
                  description: "The Channel type",
                  args: {
                    suggestions: [
                      "ANDROID",
                      "APPEVENT",
                      "APPLICATION",
                      "CORTANA",
                      "FACEBOOK",
                      "IOS",
                      "MSTEAMS",
                      "OSS",
                      "OSVC",
                      "SERVICECLOUD",
                      "SLACK",
                      "TEST",
                      "TWILIO",
                      "WEB",
                      "WEBHOOK",
                    ],
                  },
                  isRequired: true,
                },
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-ms-teams-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                {
                  name: "--msa-app-id",
                  description:
                    "The Microsoft App ID that you obtained when you created your bot registration in Azure",
                  args: { name: "msa-app-id" },
                  isRequired: true,
                },
                {
                  name: "--msa-app-password",
                  description:
                    "The client secret that you obtained from your bot registration",
                  args: { name: "msa-app-password" },
                  isRequired: true,
                },
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optBotId,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-web-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                optIsClientAuthenticationEnabled,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optMaxTokenExpirationTimeInMinutes,
                {
                  name: "--allowed-domains",
                  description: "A comma-delimited whitelist of allowed domains",
                  args: { name: "allowed-domains" },
                },
                optBotId,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-facebook-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                {
                  name: "--app-secret",
                  description: "The app secret for your Facebook app",
                  args: { name: "app-secret" },
                  isRequired: true,
                },
                {
                  name: "--page-access-token",
                  description:
                    "The page access token that you generated for your Facebook page",
                  args: { name: "page-access-token" },
                  isRequired: true,
                },
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optBotId,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-application-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                {
                  name: "--is-authenticated-user-id",
                  description:
                    "True if the user id in the AIC message should be treated as an authenticated user id",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                  isRequired: true,
                },
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--outbound-url",
                  description: "The URL to send response and error messages to",
                  args: { name: "outbound-url" },
                },
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-service-cloud-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                {
                  name: "--domain-name",
                  description: "The domain name",
                  args: { name: "domain-name" },
                  isRequired: true,
                },
                {
                  name: "--host-name-prefix",
                  description: "The host prefix",
                  args: { name: "host-name-prefix" },
                  isRequired: true,
                },
                {
                  name: "--user-name",
                  description:
                    "The user name for an Oracle B2C Service staff member who has the necessary profile permissions",
                  args: { name: "user-name" },
                  isRequired: true,
                },
                {
                  name: "--password",
                  description:
                    "The password for the Oracle B2C Service staff member who has the necessary profile permissions",
                  args: { name: "password" },
                  isRequired: true,
                },
                {
                  name: "--client-type",
                  description: "The type of Service Cloud client",
                  args: { suggestions: ["WSDL", "REST"] },
                  isRequired: true,
                },
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-slack-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                {
                  name: "--client-id",
                  description: "The Slack Client Id for the Slack app",
                  args: { name: "client-id" },
                  isRequired: true,
                },
                {
                  name: "--signing-secret",
                  description: "The Signing Secret for the Slack App",
                  args: { name: "signing-secret" },
                  isRequired: true,
                },
                {
                  name: "--client-secret",
                  description: "The Client Secret for the Slack App",
                  args: { name: "client-secret" },
                  isRequired: true,
                },
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--auth-success-url",
                  description:
                    "The URL to redirect to when authentication is successful",
                  args: { name: "auth-success-url" },
                },
                {
                  name: "--auth-error-url",
                  description:
                    "The URL to redirect to when authentication is unsuccessful",
                  args: { name: "auth-error-url" },
                },
                optBotId,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-osvc-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                {
                  name: "--host",
                  description: "The host",
                  args: { name: "host" },
                  isRequired: true,
                },
                {
                  name: "--port",
                  description: "The port",
                  args: { name: "port" },
                  isRequired: true,
                },
                {
                  name: "--user-name",
                  description: "The user name for the digital-assistant agent",
                  args: { name: "user-name" },
                  isRequired: true,
                },
                {
                  name: "--password",
                  description: "The password for the digital-assistant agent",
                  args: { name: "password" },
                  isRequired: true,
                },
                {
                  name: "--total-session-count",
                  description: "The total session count",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--authentication-provider-name",
                  description:
                    "The name of the Authentication Provider to use to authenticate the user",
                  args: { name: "authentication-provider-name" },
                  isRequired: true,
                },
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--channel-service",
                  description: "The type of OSVC service",
                  args: { suggestions: ["OSVC", "FUSION"] },
                },
                optBotId,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-app-event-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--outbound-url",
                  description: "The URL for sending errors and responses to",
                  args: { name: "outbound-url" },
                },
                optEventSinkBotIds,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-oss-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                {
                  name: "--inbound-message-topic",
                  description: "The topic inbound messages are received on",
                  args: { name: "inbound-message-topic" },
                  isRequired: true,
                },
                {
                  name: "--outbound-message-topic",
                  description: "The topic outbound messages are sent on",
                  args: { name: "outbound-message-topic" },
                  isRequired: true,
                },
                {
                  name: "--bootstrap-servers",
                  description: "The Oracle Streaming Service bootstrap servers",
                  args: { name: "bootstrap-servers" },
                  isRequired: true,
                },
                {
                  name: "--security-protocol",
                  description:
                    "The security protocol to use when conecting to the Oracle Streaming Service",
                  args: { name: "security-protocol" },
                  isRequired: true,
                },
                {
                  name: "--sasl-mechanism",
                  description:
                    "The SASL mechanmism to use when conecting to the Oracle Streaming Service",
                  args: { name: "sasl-mechanism" },
                  isRequired: true,
                },
                {
                  name: "--tenancy-name",
                  description:
                    "The tenancy to use when connecting to the Oracle Streaming Service",
                  args: { name: "tenancy-name" },
                  isRequired: true,
                },
                {
                  name: "--user-name",
                  description:
                    "The user name to use when connecting to the Oracle Streaming Service",
                  args: { name: "user-name" },
                  isRequired: true,
                },
                {
                  name: "--stream-pool-id",
                  description:
                    "The stream pool OCI to use when connecting to the Oracle Streaming Service",
                  args: { name: "stream-pool-id" },
                  isRequired: true,
                },
                {
                  name: "--auth-token",
                  description:
                    "The authentication token to use when connecting to the Oracle Streaming Service",
                  args: { name: "auth-token" },
                  isRequired: true,
                },
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optEventSinkBotIds,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-cortana-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                {
                  name: "--msa-app-id",
                  description:
                    "The Microsoft App ID that you obtained when you created your bot registration in Azure",
                  args: { name: "msa-app-id" },
                  isRequired: true,
                },
                {
                  name: "--msa-app-password",
                  description:
                    "The client secret that you obtained from your bot registration",
                  args: { name: "msa-app-password" },
                  isRequired: true,
                },
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optBotId,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-android-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                optIsClientAuthenticationEnabled,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optMaxTokenExpirationTimeInMinutes,
                optBotId,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-twilio-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                {
                  name: "--account-sid",
                  description: "The Account SID for the Twilio number",
                  args: { name: "account-sid" },
                  isRequired: true,
                },
                {
                  name: "--phone-number",
                  description: "The Twilio phone number",
                  args: { name: "phone-number" },
                  isRequired: true,
                },
                {
                  name: "--auth-token",
                  description: "The Auth Token for the Twilio number",
                  args: { name: "auth-token" },
                  isRequired: true,
                },
                {
                  name: "--is-mms-enabled",
                  description: "Whether MMS is enabled for this channel or not",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                  isRequired: true,
                },
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--original-connectors-url",
                  description:
                    "The original connectors URL (used for backward compatibility)",
                  args: { name: "original-connectors-url" },
                },
                optBotId,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-webhook-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                {
                  name: "--outbound-url",
                  description: "The URL to send responses to",
                  args: { name: "outbound-url" },
                  isRequired: true,
                },
                {
                  name: "--payload-version",
                  description: "The version for payloads",
                  args: { suggestions: ["1.0", "1.1"] },
                  isRequired: true,
                },
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optBotId,
                optFromJson,
              ],
            },
            {
              name: "create-channel-create-ios-channel-details",
              description: "Creates a new Channel",
              options: [
                optOdaInstanceId,
                optName,
                optIsClientAuthenticationEnabled,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optMaxTokenExpirationTimeInMinutes,
                optBotId,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description: "Delete the specified Channel",
              options: [
                optOdaInstanceId,
                optChannelId,
                optIfMatch,
                optForce2,
                optFromJson,
              ],
            },
            {
              name: "get",
              description: "Gets the specified Channel",
              options: [
                optOdaInstanceId,
                optChannelId,
                optIfNoneMatch,
                optFromJson,
              ],
            },
            {
              name: "list",
              description:
                "Returns a page of Channels that belong to the specified Digital Assistant instance",
              options: [
                optOdaInstanceId,
                {
                  name: "--id",
                  description: "Unique Channel identifier",
                  args: { name: "id" },
                },
                {
                  name: "--name",
                  description:
                    "List only the information for Channels with this name",
                  args: { name: "name" },
                },
                {
                  name: "--category",
                  description: "List only Channels with this category",
                  args: {
                    suggestions: [
                      "AGENT",
                      "APPLICATION",
                      "BOT",
                      "BOT_AS_AGENT",
                      "SYSTEM",
                      "EVENT",
                    ],
                  },
                },
                {
                  name: "--type",
                  description: "List only Channels of this type",
                  args: {
                    suggestions: [
                      "ANDROID",
                      "APPEVENT",
                      "APPLICATION",
                      "CORTANA",
                      "FACEBOOK",
                      "IOS",
                      "MSTEAMS",
                      "OSS",
                      "OSVC",
                      "SERVICECLOUD",
                      "SLACK",
                      "TEST",
                      "TWILIO",
                      "WEB",
                      "WEBHOOK",
                    ],
                  },
                },
                optLifecycleState,
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
              name: "rotate-channel-keys",
              description:
                "This will generate new keys for any generated keys in the Channel (eg. secretKey, verifyToken)",
              options: [
                optOdaInstanceId,
                optChannelId,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "start",
              description:
                "Starts a Channel so that it will begin accepting messages",
              options: [
                optOdaInstanceId,
                optChannelId,
                optIfMatch,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "stop",
              description:
                "Stops a Channel so that it will no longer accept messages",
              options: [
                optOdaInstanceId,
                optChannelId,
                optIfMatch,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                {
                  name: "--type",
                  description: "The Channel type",
                  args: {
                    suggestions: [
                      "ANDROID",
                      "APPEVENT",
                      "APPLICATION",
                      "CORTANA",
                      "FACEBOOK",
                      "IOS",
                      "MSTEAMS",
                      "OSS",
                      "OSVC",
                      "SERVICECLOUD",
                      "SLACK",
                      "TEST",
                      "TWILIO",
                      "WEB",
                      "WEBHOOK",
                    ],
                  },
                  isRequired: true,
                },
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
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
              name: "update-channel-update-osvc-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--host",
                  description: "The host",
                  args: { name: "host" },
                },
                {
                  name: "--port",
                  description: "The port",
                  args: { name: "port" },
                },
                {
                  name: "--user-name",
                  description: "The user name for the digital-assistant agent",
                  args: { name: "user-name" },
                },
                {
                  name: "--password",
                  description: "The password for the digital-assistant agent",
                  args: { name: "password" },
                },
                {
                  name: "--total-session-count",
                  description: "The total session count",
                  args: { name: "integer" },
                },
                {
                  name: "--channel-service",
                  description: "The type of OSVC service",
                  args: { suggestions: ["OSVC", "FUSION"] },
                },
                {
                  name: "--authentication-provider-name",
                  description:
                    "The name of the Authentication Provider to use to authenticate the user",
                  args: { name: "authentication-provider-name" },
                },
                optBotId,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-oss-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optEventSinkBotIds,
                {
                  name: "--inbound-message-topic",
                  description: "The topic inbound messages are received on",
                  args: { name: "inbound-message-topic" },
                },
                {
                  name: "--outbound-message-topic",
                  description: "The topic outbound messages are sent on",
                  args: { name: "outbound-message-topic" },
                },
                {
                  name: "--bootstrap-servers",
                  description: "The Oracle Streaming Service bootstrap servers",
                  args: { name: "bootstrap-servers" },
                },
                {
                  name: "--security-protocol",
                  description:
                    "The security protocol to use when conecting to the Oracle Streaming Service",
                  args: { name: "security-protocol" },
                },
                {
                  name: "--sasl-mechanism",
                  description:
                    "The SASL mechanmism to use when conecting to the Oracle Streaming Service",
                  args: { name: "sasl-mechanism" },
                },
                {
                  name: "--tenancy-name",
                  description:
                    "The tenancy to use when connecting to the Oracle Streaming Service",
                  args: { name: "tenancy-name" },
                },
                {
                  name: "--user-name",
                  description:
                    "The user name to use when connecting to the Oracle Streaming Service",
                  args: { name: "user-name" },
                },
                {
                  name: "--stream-pool-id",
                  description:
                    "The stream pool OCI to use when connecting to the Oracle Streaming Service",
                  args: { name: "stream-pool-id" },
                },
                {
                  name: "--auth-token",
                  description:
                    "The authentication token to use when connecting to the Oracle Streaming Service",
                  args: { name: "auth-token" },
                },
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-android-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optMaxTokenExpirationTimeInMinutes,
                optIsClientAuthenticationEnabled2,
                optBotId,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-ms-teams-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--msa-app-id",
                  description:
                    "The Microsoft App ID that you obtained when you created your bot registration in Azure",
                  args: { name: "msa-app-id" },
                },
                {
                  name: "--msa-app-password",
                  description:
                    "The client secret that you obtained from your bot registration",
                  args: { name: "msa-app-password" },
                },
                optBotId,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-app-event-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--outbound-url",
                  description: "The URL for sending errors and responses to",
                  args: { name: "outbound-url" },
                },
                optEventSinkBotIds,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-web-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optMaxTokenExpirationTimeInMinutes,
                optIsClientAuthenticationEnabled2,
                {
                  name: "--allowed-domains",
                  description: "A comma-delimited whitelist of allowed domains",
                  args: { name: "allowed-domains" },
                },
                optBotId,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-ios-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                optMaxTokenExpirationTimeInMinutes,
                optIsClientAuthenticationEnabled2,
                optBotId,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-slack-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--client-id",
                  description: "The Slack Client Id for the Slack app",
                  args: { name: "client-id" },
                },
                {
                  name: "--auth-success-url",
                  description:
                    "The URL to redirect to when authentication is successful",
                  args: { name: "auth-success-url" },
                },
                {
                  name: "--auth-error-url",
                  description:
                    "The URL to redirect to when authentication is unsuccessful",
                  args: { name: "auth-error-url" },
                },
                {
                  name: "--signing-secret",
                  description: "The Signing Secret for the Slack App",
                  args: { name: "signing-secret" },
                },
                {
                  name: "--client-secret",
                  description: "The Client Secret for the Slack App",
                  args: { name: "client-secret" },
                },
                optBotId,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-service-cloud-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--domain-name",
                  description: "The domain name",
                  args: { name: "domain-name" },
                },
                {
                  name: "--host-name-prefix",
                  description: "The host prefix",
                  args: { name: "host-name-prefix" },
                },
                {
                  name: "--user-name",
                  description:
                    "The user name for an Oracle B2C Service staff member who has the necessary profile permissions",
                  args: { name: "user-name" },
                },
                {
                  name: "--password",
                  description:
                    "The password for the Oracle B2C Service staff member who has the necessary profile permissions",
                  args: { name: "password" },
                },
                {
                  name: "--client-type",
                  description: "The type of Service Cloud client",
                  args: { suggestions: ["WSDL", "REST"] },
                },
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-twilio-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--account-sid",
                  description: "The Account SID for the Twilio number",
                  args: { name: "account-sid" },
                },
                {
                  name: "--phone-number",
                  description: "The Twilio phone number",
                  args: { name: "phone-number" },
                },
                {
                  name: "--auth-token",
                  description: "The Auth Token for the Twilio number",
                  args: { name: "auth-token" },
                },
                {
                  name: "--is-mms-enabled",
                  description: "Whether MMS is enabled for this channel or not",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                {
                  name: "--original-connectors-url",
                  description:
                    "The original connectors URL (used for backward compatibility)",
                  args: { name: "original-connectors-url" },
                },
                optBotId,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-webhook-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--outbound-url",
                  description: "The URL to send responses to",
                  args: { name: "outbound-url" },
                },
                {
                  name: "--payload-version",
                  description: "The version for payloads",
                  args: { suggestions: ["1.0", "1.1"] },
                },
                optBotId,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-application-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--outbound-url",
                  description: "The URL to send response and error messages to",
                  args: { name: "outbound-url" },
                },
                {
                  name: "--is-authenticated-user-id",
                  description:
                    "True if the user id in the AIC message should be treated as an authenticated user id",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-facebook-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--app-secret",
                  description: "The app secret for your Facebook app",
                  args: { name: "app-secret" },
                },
                {
                  name: "--page-access-token",
                  description:
                    "The page access token that you generated for your Facebook page",
                  args: { name: "page-access-token" },
                },
                optBotId,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "update-channel-update-cortana-channel-details",
              description:
                "Updates the specified Channel with the information in the request body",
              options: [
                optOdaInstanceId,
                optChannelId,
                optName2,
                optDescription,
                optSessionExpiryDurationInMilliseconds,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--msa-app-id",
                  description:
                    "The Microsoft App ID that you obtained when you created your bot registration in Azure",
                  args: { name: "msa-app-id" },
                },
                {
                  name: "--msa-app-password",
                  description:
                    "The client secret that you obtained from your bot registration",
                  args: { name: "msa-app-password" },
                },
                optBotId,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "work-request-error",
      description:
        "Description of the unexpected error that prevented completion of the request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a page of errors for the specified work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["CODE", "TIMESTAMP"] },
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
      description: "A log message from the execution of a work request",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a page of log messages for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["MESSAGE", "TIMESTAMP"] },
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
      name: "oda-instance-attachment-collection",
      description: "Results of a Oda instance attachment search",
      subcommands: [
        {
          name: "list-oda-instance-attachments",
          description: "Returns a list of ODA instance attachments",
          options: [
            optOdaInstanceId,
            {
              name: "--include-owner-metadata",
              description:
                "Whether to send attachment owner info during get/list call",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "List only the ODA instance attachments that are in this lifecycle state",
              args: {
                suggestions: [
                  "ATTACHING",
                  "ACTIVE",
                  "DETACHING",
                  "INACTIVE",
                  "FAILED",
                ],
              },
            },
            optSortOrder,
            {
              name: "--sort-by",
              description: "Sort on this field",
              args: { suggestions: ["TIMECREATED"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oda-instance-attachment",
      description: "Description of an ODA instance attachment",
      subcommands: [
        {
          name: "create",
          description:
            "Starts an asynchronous job to create a Digital Assistant instance attachment",
          options: [
            optOdaInstanceId,
            {
              name: "--attach-to-id",
              description:
                "The OCID of the target instance (which could be any other OCI PaaS/SaaS resource)",
              args: { name: "attach-to-id" },
              isRequired: true,
            },
            {
              name: "--attachment-type",
              description:
                "The type of target instance which this ODA instance is being attached",
              args: { suggestions: ["FUSION", "MAX"] },
              isRequired: true,
            },
            { name: "--owner", args: { name: "json" }, isRequired: true },
            {
              name: "--attachment-metadata",
              description: "Attachment specific metadata",
              args: { name: "attachment-metadata" },
            },
            {
              name: "--restricted-operations",
              description:
                "List of operations that are restricted while this instance is attached",
              args: { name: "json" },
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
          description:
            "Starts an asynchronous job to delete the specified Digital Assistant instance attachment",
          options: [
            optOdaInstanceId,
            optAttachmentId,
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
          description: "Gets an ODA instance attachment by identifier",
          options: [
            optOdaInstanceId,
            optAttachmentId,
            {
              name: "--include-owner-metadata",
              description:
                "Whether to send attachment owner info during get/list call",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the ODA instance attachment",
          options: [
            optOdaInstanceId,
            optAttachmentId,
            {
              name: "--attachment-metadata",
              description: "Attachment specific metadata",
              args: { name: "attachment-metadata" },
              isRequired: true,
            },
            {
              name: "--restricted-operations",
              description:
                "List of operations that are restricted while this instance is attached",
              args: { name: "json" },
              isRequired: true,
            },
            { name: "--owner", args: { name: "json" }, isRequired: true },
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
      name: "work-request",
      description: "The description of work request, including its status",
      subcommands: [
        {
          name: "get",
          description:
            "Gets information about the work request with the specified ID, including its status",
          options: [optWorkRequestId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a page of work requests for the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "List the Digital Assistant instances that belong to this compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--oda-instance-id",
              description:
                "List only the information for this Digital Assistant instance",
              args: { name: "oda-instance-id" },
            },
            {
              name: "--resource-id",
              description: "List only the information for this resource",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: [
                  "OPERATION_TYPE",
                  "STATUS",
                  "TIME_ACCEPTED",
                  "TIME_STARTED",
                  "TIME_FINISHED",
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
      name: "instance",
      description: "Description of OdaServiceInstance object",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves an Digital Assistant instance into a different compartment",
          options: [
            optOdaInstanceId,
            {
              name: "--compartment-id",
              description:
                "Identifier of the compartment into which the Digital Assistant instance should be moved",
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
          description:
            "Starts an asynchronous job to create a Digital Assistant instance",
          options: [
            {
              name: "--compartment-id",
              description: "Identifier of the compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--shape-name",
              description: "Shape or size of the instance",
              args: { suggestions: ["DEVELOPMENT", "PRODUCTION"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "User-friendly name for the instance",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of the Digital Assistant instance",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--is-role-based-access",
              description:
                "Should this Digital Assistant instance use role-based authorization via an identity domain",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--identity-domain",
              description:
                "If isRoleBasedAccess is set to true, this property specifies the identity domain that is to be used",
              args: { name: "identity-domain" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Starts an asynchronous job to delete the specified Digital Assistant instance",
          options: [
            optOdaInstanceId,
            {
              name: "--retention-time",
              description:
                "Retain the ODA instance being deleted for the given number of days before hard-delete/purge",
              args: { name: "integer" },
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
          name: "get",
          description: "Gets the specified Digital Assistant instance",
          options: [optOdaInstanceId, optFromJson],
        },
        {
          name: "list",
          description:
            "Returns a page of Digital Assistant instances that belong to the specified compartment",
          options: [
            {
              name: "--compartment-id",
              description:
                "List the Digital Assistant instances that belong to this compartment",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optDisplayName2,
            {
              name: "--lifecycle-state",
              description:
                "List only the Digital Assistant instances that are in this lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "INACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
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
          name: "start",
          description: "Starts an inactive Digital Assistant instance",
          options: [
            optOdaInstanceId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "stop",
          description: "Stops an active Digital Assistant instance",
          options: [
            optOdaInstanceId,
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
            "Updates the specified Digital Assistant instance with the information in the request body",
          options: [
            optOdaInstanceId,
            {
              name: "--display-name",
              description:
                "User-friendly name for the Digital Assistant instance",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Description of the Digital Assistant instance",
              args: { name: "description" },
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
      ],
    },
    {
      name: "odapackage",
      description:
        "CLI to create and maintain Oracle Digital Assistant service instances",
      subcommands: [
        {
          name: "package",
          description: "Details of Package object",
          subcommands: [
            {
              name: "get",
              description:
                "Returns details about a package, and how to import it",
              options: [optOdaInstanceId, optPackageId, optFromJson],
            },
            {
              name: "list",
              description:
                "Returns a page of summaries for packages that are available for import",
              options: [
                {
                  name: "--oda-instance-id",
                  description:
                    "List only the information for this Digital Assistant instance",
                  args: { name: "oda-instance-id" },
                },
                {
                  name: "--resource-type",
                  description: "Resource type identifier",
                  args: { name: "resource-type" },
                },
                {
                  name: "--compartment-id",
                  description:
                    "List the packages that belong to this compartment",
                  args: { name: "compartment-id" },
                },
                {
                  name: "--name",
                  description:
                    "List only the information for the package with this name",
                  args: { name: "name" },
                },
                optDisplayName2,
                {
                  name: "--is-latest-version-only",
                  description:
                    "Should we return only the latest version of a package (instead of all versions)?",
                  args: { name: "boolean", suggestions: ["true", "false"] },
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
          ],
        },
        {
          name: "imported-package",
          description: "An imported/instantiated package within an instance",
          subcommands: [
            {
              name: "create",
              description:
                "Starts an asynchronous job to import a package into a Digital Assistant instance",
              options: [
                {
                  name: "--current-package-id",
                  description: "ID of the package to import",
                  args: { name: "current-package-id" },
                  isRequired: true,
                },
                optOdaInstanceId,
                {
                  name: "--parameter-values",
                  description:
                    "A list of parameter values to use when importing the given package",
                  args: { name: "json" },
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
              description:
                "Starts an asynchronous job to delete a package from a Digital Assistant instance",
              options: [
                optOdaInstanceId,
                optPackageId,
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
              description:
                "Returns a list of summaries for imported packages in the instance",
              options: [optOdaInstanceId, optPackageId, optFromJson],
            },
            {
              name: "list",
              description:
                "Returns a list of summaries for imported packages in the instance",
              options: [
                optOdaInstanceId,
                {
                  name: "--name",
                  description:
                    "List only the information for the package with this name",
                  args: { name: "name" },
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
              description:
                "Starts an asynchronous job to update a package within a Digital Assistant instance",
              options: [
                {
                  name: "--current-package-id",
                  description:
                    "ID of the new package (i.e. version) to import, replacing the old imported package",
                  args: { name: "current-package-id" },
                  isRequired: true,
                },
                {
                  name: "--parameter-values",
                  description:
                    "A list of the updated parameter values to apply to this imported package",
                  args: { name: "json" },
                  isRequired: true,
                },
                optOdaInstanceId,
                optPackageId,
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--is-replace-skills",
                  description:
                    "Should old skills be replaced by new skills if packageId differs from already imported package?",
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
      ],
    },
  ],
};

export default completionSpec;
