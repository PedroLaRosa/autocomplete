// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optAuthorization: Fig.Option = {
  name: "--authorization",
  description:
    "The Authorization field value consists of credentials containing the authentication information of the user",
  args: { name: "authorization" },
};
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optResourceTypeSchemaVersion: Fig.Option = {
  name: "--resource-type-schema-version",
  description:
    "An endpoint-specific schema version number to use in the Request",
  args: { name: "resource-type-schema-version" },
};
const optAttributeSets: Fig.Option = {
  name: "--attribute-sets",
  description:
    "A multi-valued list of strings indicating the return type of attribute definition",
  args: { suggestions: ["all", "always", "never", "request", "default"] },
  isRepeatable: true,
};
const optAttributes: Fig.Option = {
  name: "--attributes",
  description:
    "A comma-delimited string that specifies the names of resource attributes that should be returned in",
  args: { name: "attributes" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "Used to make the request conditional on an ETag",
  args: { name: "if-match" },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description:
    "The maximum number of items to return in a paginated 'List' call",
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The value of the opc-next-page response header from the previous 'List' call",
  args: { name: "page" },
};
const optSchemas: Fig.Option = {
  name: "--schemas",
  description:
    "The schemas attribute is an array of Strings which allows introspection of the supported schema version for",
  args: { name: "json" },
  isRequired: true,
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "A string that indicates the order in which the sortBy parameter is applied",
  args: { suggestions: ["ASCENDING", "DESCENDING"] },
};
const optIdcsCreatedBy: Fig.Option = {
  name: "--idcs-created-by",
  args: { name: "json" },
};
const optIdcsLastModifiedBy: Fig.Option = {
  name: "--idcs-last-modified-by",
  args: { name: "json" },
};
const optMeta: Fig.Option = { name: "--meta", args: { name: "json" } };
const optSchemas2: Fig.Option = {
  name: "--schemas",
  description: "REQUIRED",
  args: { name: "json" },
  isRequired: true,
};
const optDeleteInProgress: Fig.Option = {
  name: "--delete-in-progress",
  description:
    "A boolean flag indicating this resource in the process of being deleted",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optId: Fig.Option = {
  name: "--id",
  description:
    "Unique identifier for the SCIM Resource as defined by the Service Provider",
  args: { name: "id" },
};
const optIdcsLastUpgradedInRelease: Fig.Option = {
  name: "--idcs-last-upgraded-in-release",
  description: "The release number when the resource was upgraded",
  args: { name: "idcs-last-upgraded-in-release" },
};
const optIdcsPreventedOperations: Fig.Option = {
  name: "--idcs-prevented-operations",
  description:
    "Each value of this attribute specifies an operation that only an internal client may perform on this",
  args: { suggestions: ["replace", "update", "delete"] },
};
const optTags: Fig.Option = {
  name: "--tags",
  description: "A list of tags on this resource",
  args: { name: "json" },
};
const optOcid: Fig.Option = {
  name: "--ocid",
  description: "Unique OCI identifier for the SCIM Resource",
  args: { name: "ocid" },
};
const optCompartmentOcid: Fig.Option = {
  name: "--compartment-ocid",
  description: "OCI Compartment Id (ocid) in which the resource lives",
  args: { name: "compartment-ocid" },
};
const optDomainOcid: Fig.Option = {
  name: "--domain-ocid",
  description: "OCI Domain Id (ocid) in which the resource lives",
  args: { name: "domain-ocid" },
};
const optTenancyOcid: Fig.Option = {
  name: "--tenancy-ocid",
  description: "OCI Tenant Id (ocid) in which the resource lives",
  args: { name: "tenancy-ocid" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optCount: Fig.Option = {
  name: "--count",
  description: "OPTIONAL",
  args: { name: "integer" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "OPTIONAL",
  args: { name: "sort-by" },
};
const optStartIndex: Fig.Option = {
  name: "--start-index",
  description: "OPTIONAL",
  args: { name: "integer" },
};
const optFilter: Fig.Option = {
  name: "--filter",
  description: "OPTIONAL",
  args: { name: "filter" },
};
const optOperations: Fig.Option = {
  name: "--operations",
  description:
    'The body of an HTTP PATCH request MUST contain the attribute "Operations"',
  args: { name: "json" },
  isRequired: true,
};
const optAttributeSets2: Fig.Option = {
  name: "--attribute-sets",
  description:
    "A multi-valued list of strings indicating the return type of attribute definition",
  args: { suggestions: ["all", "always", "never", "request", "default"] },
};
const optAttributes2: Fig.Option = {
  name: "--attributes",
  description:
    "A multi-valued list of strings indicating the names of resource attributes to return in the response",
  args: { name: "json" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optForceDelete: Fig.Option = {
  name: "--force-delete",
  description: "To force delete the resource and all its references (if any)",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optCount2: Fig.Option = {
  name: "--count",
  description:
    "An integer that indicates the desired maximum number of query results per page",
  args: { name: "integer" },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description:
    "A string that indicates the attribute whose value SHALL be used to order the returned responses",
  args: { name: "sort-by" },
};
const optStartIndex2: Fig.Option = {
  name: "--start-index",
  description:
    "An integer that indicates the 1-based index of the first query result",
  args: { name: "integer" },
};
const optFilter2: Fig.Option = {
  name: "--filter",
  description:
    "The filter string that is used to request a subset of resources",
  args: { name: "filter" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optExternalId: Fig.Option = {
  name: "--external-id",
  description:
    "An identifier for the Resource as defined by the Service Consumer",
  args: { name: "external-id" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "Description",
  args: { name: "description" },
};
const optUser: Fig.Option = { name: "--user", args: { name: "json" } };
const optExtSelfChangeUser: Fig.Option = {
  name: "--ext-self-change-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optExtOciTags: Fig.Option = {
  name: "--ext-oci-tags",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optIsOpcService: Fig.Option = {
  name: "--is-opc-service",
  description: "Indicates whether this resource was created by OPC",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optStatus: Fig.Option = {
  name: "--status",
  description: "The user's credential status",
  args: { suggestions: ["ACTIVE", "INACTIVE"] },
};
const optUrnietfparamsscimschemasoracleidcsextensionociconsolesignonpolicyconsentPolicy: Fig.Option =
  {
    name: "--urnietfparamsscimschemasoracleidcsextensionociconsolesignonpolicyconsent-policy",
    args: { name: "json" },
  };
const optUserName: Fig.Option = {
  name: "--user-name",
  description: "User name",
  args: { name: "user-name" },
  isRequired: true,
};
const optActive: Fig.Option = {
  name: "--active",
  description: "User status",
  args: { name: "boolean", suggestions: ["true", "false"] },
};
const optCompartmentOcid2: Fig.Option = {
  name: "--compartment-ocid",
  description: "OCI Compartment Id (OCID) in which the resource lives",
  args: { name: "compartment-ocid" },
};
const optDomainOcid2: Fig.Option = {
  name: "--domain-ocid",
  description: "OCI Domain Id (OCID) in which the resource lives",
  args: { name: "domain-ocid" },
};
const optIdcsLockedBy: Fig.Option = {
  name: "--idcs-locked-by",
  args: { name: "json" },
};
const optIdcsLockedOn: Fig.Option = {
  name: "--idcs-locked-on",
  description: "The most recent DateTime the resource was locked",
  args: { name: "idcs-locked-on" },
};
const optIdcsLockedOperations: Fig.Option = {
  name: "--idcs-locked-operations",
  description: "Operations that are locked on the resource",
  args: { suggestions: ["replace", "update", "delete"] },
};
const optTenancyOcid2: Fig.Option = {
  name: "--tenancy-ocid",
  description: "OCI Tenant Id (OCID) in which the resource lives",
  args: { name: "tenancy-ocid" },
};
const optTimezone: Fig.Option = {
  name: "--timezone",
  description: "User's timezone",
  args: { name: "timezone" },
};
const optAddresses: Fig.Option = {
  name: "--addresses",
  description:
    "A physical mailing address for this User, as described in (address Element)",
  args: { name: "json" },
};
const optAppId: Fig.Option = {
  name: "--app-id",
  description: "ID of the resource",
  args: { name: "app-id" },
  isRequired: true,
};
const optApprovalWorkflowId: Fig.Option = {
  name: "--approval-workflow-id",
  description: "ID of the resource",
  args: { name: "approval-workflow-id" },
  isRequired: true,
};
const optCloudGate: Fig.Option = {
  name: "--cloud-gate",
  args: { name: "json" },
  isRequired: true,
};
const optCloudGateId: Fig.Option = {
  name: "--cloud-gate-id",
  description: "ID of the resource",
  args: { name: "cloud-gate-id" },
  isRequired: true,
};
const optCloudGateMappingId: Fig.Option = {
  name: "--cloud-gate-mapping-id",
  description: "ID of the resource",
  args: { name: "cloud-gate-mapping-id" },
  isRequired: true,
};
const optCloudGateServerId: Fig.Option = {
  name: "--cloud-gate-server-id",
  description: "ID of the resource",
  args: { name: "cloud-gate-server-id" },
  isRequired: true,
};
const optConditionId: Fig.Option = {
  name: "--condition-id",
  description: "ID of the resource",
  args: { name: "condition-id" },
  isRequired: true,
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "Brief description for this Cloud Gate",
  args: { name: "description" },
};
const optDescription3: Fig.Option = {
  name: "--description",
  description: "Description of the user",
  args: { name: "description" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "Display name",
  args: { name: "display-name" },
};
const optDynamicResourceGroupId: Fig.Option = {
  name: "--dynamic-resource-group-id",
  description: "ID of the resource",
  args: { name: "dynamic-resource-group-id" },
  isRequired: true,
};
const optEmails: Fig.Option = {
  name: "--emails",
  description: "A complex attribute representing emails",
  args: { name: "json" },
};
const optEntitlements: Fig.Option = {
  name: "--entitlements",
  description:
    "A list of entitlements for the User that represent a thing the User has",
  args: { name: "json" },
};
const optExpiresOn: Fig.Option = {
  name: "--expires-on",
  description: "When the user's credential expire",
  args: { name: "expires-on" },
};
const optExtCapabilitiesUser: Fig.Option = {
  name: "--ext-capabilities-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optExtDbCredentialsUser: Fig.Option = {
  name: "--ext-db-credentials-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optExtEnterprise20User: Fig.Option = {
  name: "--ext-enterprise-20-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optExtMfaUser: Fig.Option = {
  name: "--ext-mfa-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optExtPasswordStateUser: Fig.Option = {
  name: "--ext-password-state-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optExtPosixUser: Fig.Option = {
  name: "--ext-posix-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optExtSecurityQuestionsUser: Fig.Option = {
  name: "--ext-security-questions-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optExtSelfRegistrationUser: Fig.Option = {
  name: "--ext-self-registration-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optExtTermsOfUseUser: Fig.Option = {
  name: "--ext-terms-of-use-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optExtUserCredentialsUser: Fig.Option = {
  name: "--ext-user-credentials-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optExtUserStateUser: Fig.Option = {
  name: "--ext-user-state-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optExtUserUser: Fig.Option = {
  name: "--ext-user-user",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optGroupId: Fig.Option = {
  name: "--group-id",
  description: "ID of the resource",
  args: { name: "group-id" },
  isRequired: true,
};
const optGroups: Fig.Option = {
  name: "--groups",
  description:
    "A list of groups that the user belongs to, either thorough direct membership, nested groups",
  args: { name: "json" },
};
const optIdentityProofingProviderId: Fig.Option = {
  name: "--identity-proofing-provider-id",
  description: "ID of the resource",
  args: { name: "identity-proofing-provider-id" },
  isRequired: true,
};
const optIdentityProofingProviderTemplateId: Fig.Option = {
  name: "--identity-proofing-provider-template-id",
  description: "ID of the resource",
  args: { name: "identity-proofing-provider-template-id" },
  isRequired: true,
};
const optIdentityPropagationTrustId: Fig.Option = {
  name: "--identity-propagation-trust-id",
  description: "ID of the resource",
  args: { name: "identity-propagation-trust-id" },
  isRequired: true,
};
const optIdentityProviderId: Fig.Option = {
  name: "--identity-provider-id",
  description: "ID of the resource",
  args: { name: "identity-provider-id" },
  isRequired: true,
};
const optIms: Fig.Option = {
  name: "--ims",
  description: "User's instant messaging addresses",
  args: { name: "json" },
};
const optLocale: Fig.Option = {
  name: "--locale",
  description:
    "Used to indicate the User's default location for purposes of localizing items such as currency",
  args: { name: "locale" },
};
const optName: Fig.Option = { name: "--name", args: { name: "json" } };
const optNetworkPerimeterId: Fig.Option = {
  name: "--network-perimeter-id",
  description: "ID of the resource",
  args: { name: "network-perimeter-id" },
  isRequired: true,
};
const optNickName: Fig.Option = {
  name: "--nick-name",
  description: "Nick name",
  args: { name: "nick-name" },
};
const optPassword: Fig.Option = {
  name: "--password",
  description: "Password attribute",
  args: { name: "password" },
};
const optPasswordPolicyId: Fig.Option = {
  name: "--password-policy-id",
  description: "ID of the resource",
  args: { name: "password-policy-id" },
  isRequired: true,
};
const optPhoneNumbers: Fig.Option = {
  name: "--phone-numbers",
  description: "Phone numbers",
  args: { name: "json" },
};
const optPhotos: Fig.Option = {
  name: "--photos",
  description: "URLs of photos for the User",
  args: { name: "json" },
};
const optPolicyId: Fig.Option = {
  name: "--policy-id",
  description: "ID of the resource",
  args: { name: "policy-id" },
  isRequired: true,
};
const optPolicyType: Fig.Option = {
  name: "--policy-type",
  args: { name: "json" },
  isRequired: true,
};
const optPreferredLanguage: Fig.Option = {
  name: "--preferred-language",
  description:
    "User's preferred written or spoken language used for localized user interfaces",
  args: { name: "preferred-language" },
};
const optProfileUrl: Fig.Option = {
  name: "--profile-url",
  description:
    "A fully-qualified URL to a page representing the User's online profile",
  args: { name: "profile-url" },
};
const optRoles: Fig.Option = {
  name: "--roles",
  description:
    "A list of roles for the User that collectively represent who the User is; e.g., 'Student', 'Faculty'",
  args: { name: "json" },
};
const optRuleId: Fig.Option = {
  name: "--rule-id",
  description: "ID of the resource",
  args: { name: "rule-id" },
  isRequired: true,
};
const optSelfRegistrationProfileId: Fig.Option = {
  name: "--self-registration-profile-id",
  description: "ID of the resource",
  args: { name: "self-registration-profile-id" },
  isRequired: true,
};
const optSocialIdentityProviderId: Fig.Option = {
  name: "--social-identity-provider-id",
  description: "ID of the resource",
  args: { name: "social-identity-provider-id" },
  isRequired: true,
};
const optStatus2: Fig.Option = {
  name: "--status",
  description: "User credential status",
  args: { suggestions: ["ACTIVE", "INACTIVE"] },
};
const optTitle: Fig.Option = {
  name: "--title",
  description: "Title",
  args: { name: "title" },
};
const optUserId: Fig.Option = {
  name: "--user-id",
  description: "ID of the resource",
  args: { name: "user-id" },
  isRequired: true,
};
const optUserType: Fig.Option = {
  name: "--user-type",
  description: "Used to identify the organization-to-user relationship",
  args: {
    suggestions: [
      "Contractor",
      "Employee",
      "Intern",
      "Temp",
      "External",
      "Service",
      "Generic",
    ],
  },
};
const optX509Certificates: Fig.Option = {
  name: "--x509-certificates",
  description: "A list of certificates issued to the User",
  args: { name: "json" },
};
const optAccountRecoverySettingId: Fig.Option = {
  name: "--account-recovery-setting-id",
  description: "ID of the resource",
  args: { name: "account-recovery-setting-id" },
  isRequired: true,
};
const optApiKeyId: Fig.Option = {
  name: "--api-key-id",
  description: "ID of the resource",
  args: { name: "api-key-id" },
  isRequired: true,
};
const optAppRoleId: Fig.Option = {
  name: "--app-role-id",
  description: "ID of the resource",
  args: { name: "app-role-id" },
  isRequired: true,
};
const optApprovalWorkflowStepId: Fig.Option = {
  name: "--approval-workflow-step-id",
  description: "ID of the resource",
  args: { name: "approval-workflow-step-id" },
  isRequired: true,
};
const optAuthTokenId: Fig.Option = {
  name: "--auth-token-id",
  description: "ID of the resource",
  args: { name: "auth-token-id" },
  isRequired: true,
};
const optCustomerSecretKeyId: Fig.Option = {
  name: "--customer-secret-key-id",
  description: "ID of the resource",
  args: { name: "customer-secret-key-id" },
  isRequired: true,
};
const optGrantId: Fig.Option = {
  name: "--grant-id",
  description: "ID of the resource",
  args: { name: "grant-id" },
  isRequired: true,
};
const optIdentitySettingId: Fig.Option = {
  name: "--identity-setting-id",
  description: "ID of the resource",
  args: { name: "identity-setting-id" },
  isRequired: true,
};
const optKmsiSettingId: Fig.Option = {
  name: "--kmsi-setting-id",
  description: "ID of the resource",
  args: { name: "kmsi-setting-id" },
  isRequired: true,
};
const optMappedAttributeId: Fig.Option = {
  name: "--mapped-attribute-id",
  description: "ID of the resource",
  args: { name: "mapped-attribute-id" },
  isRequired: true,
};
const optMyApiKeyId: Fig.Option = {
  name: "--my-api-key-id",
  description: "ID of the resource",
  args: { name: "my-api-key-id" },
  isRequired: true,
};
const optMyAuthTokenId: Fig.Option = {
  name: "--my-auth-token-id",
  description: "ID of the resource",
  args: { name: "my-auth-token-id" },
  isRequired: true,
};
const optMyCustomerSecretKeyId: Fig.Option = {
  name: "--my-customer-secret-key-id",
  description: "ID of the resource",
  args: { name: "my-customer-secret-key-id" },
  isRequired: true,
};
const optMyDeviceId: Fig.Option = {
  name: "--my-device-id",
  description: "ID of the resource",
  args: { name: "my-device-id" },
  isRequired: true,
};
const optMyOAuth2ClientCredentialId: Fig.Option = {
  name: "--my-o-auth2-client-credential-id",
  description: "ID of the resource",
  args: { name: "my-o-auth2-client-credential-id" },
  isRequired: true,
};
const optMySmtpCredentialId: Fig.Option = {
  name: "--my-smtp-credential-id",
  description: "ID of the resource",
  args: { name: "my-smtp-credential-id" },
  isRequired: true,
};
const optOAuth2ClientCredentialId: Fig.Option = {
  name: "--o-auth2-client-credential-id",
  description: "ID of the resource",
  args: { name: "o-auth2-client-credential-id" },
  isRequired: true,
};
const optPrivacyPolicyUrl: Fig.Option = {
  name: "--privacy-policy-url",
  description: "Privacy Policy URL",
  args: { name: "privacy-policy-url" },
};
const optSchemaId: Fig.Option = {
  name: "--schema-id",
  description: "ID of the resource",
  args: { name: "schema-id" },
  isRequired: true,
};
const optSecurityQuestionId: Fig.Option = {
  name: "--security-question-id",
  description: "ID of the resource",
  args: { name: "security-question-id" },
  isRequired: true,
};
const optSecurityQuestionSettingId: Fig.Option = {
  name: "--security-question-setting-id",
  description: "ID of the resource",
  args: { name: "security-question-setting-id" },
  isRequired: true,
};
const optSettingId: Fig.Option = {
  name: "--setting-id",
  description: "ID of the resource",
  args: { name: "setting-id" },
  isRequired: true,
};
const optSmtpCredentialId: Fig.Option = {
  name: "--smtp-credential-id",
  description: "ID of the resource",
  args: { name: "smtp-credential-id" },
  isRequired: true,
};
const optThirdPartyFactor: Fig.Option = {
  name: "--third-party-factor",
  args: { name: "json" },
};
const completionSpec: Fig.Spec = {
  name: "identity-domains",
  description: "Identity Domains",
  subcommands: [
    {
      name: "my-pending-approval",
      description: "Schema for MyPendingApproval and MyCompletedApproval",
      subcommands: [
        {
          name: "get",
          description: "Get My MyPendingApproval",
          options: [
            {
              name: "--my-pending-approval-id",
              description: "ID of the resource",
              args: { name: "my-pending-approval-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update MyPendingApproval",
          options: [
            {
              name: "--my-pending-approval-id",
              description: "ID of the resource",
              args: { name: "my-pending-approval-id" },
              isRequired: true,
            },
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-user-db-credential",
      description: "User's Database Credential",
      subcommands: [
        {
          name: "create",
          description: "Create a user's own database (DB) credential",
          options: [
            optSchemas2,
            {
              name: "--db-password",
              description: "The user's database password",
              args: { name: "db-password" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            { name: "--name", description: "Name", args: { name: "name" } },
            optDescription,
            {
              name: "--mixed-db-password",
              description: "The user's database password with mixed salt",
              args: { name: "mixed-db-password" },
            },
            {
              name: "--salt",
              description: "The salt of the password",
              args: { name: "salt" },
            },
            {
              name: "--mixed-salt",
              description: "The mixed salt of the password",
              args: { name: "mixed-salt" },
            },
            {
              name: "--last-set-date",
              description:
                "A DateTime that specifies the date and time when the current database password was set",
              args: { name: "last-set-date" },
            },
            {
              name: "--expired",
              description: "Indicates that the database password has expired",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optStatus2,
            {
              name: "--expires-on",
              description: "When the user credential expires",
              args: { name: "expires-on" },
            },
            optUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's own database (DB) credential",
          options: [
            {
              name: "--my-user-db-credential-id",
              description: "ID of the resource",
              args: { name: "my-user-db-credential-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's own database (DB) credential",
          options: [
            {
              name: "--my-user-db-credential-id",
              description: "ID of the resource",
              args: { name: "my-user-db-credential-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dynamic-resource-groups",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for Dynamic Resource Groups",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for Dynamic Resource Groups using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-api-keys",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for a user's own API key",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "my-authentication-factors-remover",
      description:
        "This schema defines the attributes of Authentication Factors Remover call",
      subcommands: [
        {
          name: "create",
          description: "Remove All Authentication Factor Channels for a User",
          options: [
            optSchemas2,
            { name: "--user", args: { name: "json" }, isRequired: true },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--type",
              description: "Specifies the type of factors to remove",
              args: { suggestions: ["KMSI", "MFA", "ACCOUNTRECOVERY", "ALL"] },
            },
            {
              name: "--token",
              description: "Specifies the token to be removed",
              args: { name: "token" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "setting",
      description: "Settings schema",
      subcommands: [
        {
          name: "get",
          description: "Get Settings",
          options: [
            optSettingId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Setting",
          options: [
            optSettingId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace Settings",
          options: [
            optSettingId,
            optSchemas2,
            {
              name: "--csr-access",
              description:
                "This value indicates whether Customer Service Representatives can login and have readOnly or readWrite access",
              args: { suggestions: ["readOnly", "readWrite", "none"] },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--contact-emails",
              description: "Contact emails used to notify tenants",
              args: { name: "json" },
            },
            {
              name: "--custom-branding",
              description: "Indicates if the branding is default or custom",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--preferred-language",
              description:
                "Preferred written or spoken language used for localized user interfaces",
              args: { name: "preferred-language" },
            },
            optTimezone,
            {
              name: "--diagnostic-record-for-search-identifies-returned-resources",
              description:
                "Controls whether DiagnosticRecords for external search-operations",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--re-auth-when-changing-my-authentication-factors",
              description:
                "Specifies whether re-authentication is required or not when a user changes one of their security factors such",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--re-auth-factor",
              description:
                "If reAuthWhenChangingMyAuthenticationFactors is true (default)",
              args: { suggestions: ["password"] },
            },
            {
              name: "--locale",
              description:
                "Default location for purposes of localizing items such as currency, date and time format",
              args: { name: "locale" },
            },
            {
              name: "--signing-cert-public-access",
              description:
                "Indicates if access on SigningCert is allowed to public or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--sub-mapping-attr",
              description: "Added In: 20.1.3",
              args: { name: "sub-mapping-attr" },
            },
            {
              name: "--account-always-trust-scope",
              description:
                "Indicates whether all the Apps in this customer tenancy should trust each other",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--default-trust-scope",
              description: "Deprecated Since: 18.3.6",
              args: { suggestions: ["Explicit", "Account", "Tags"] },
              deprecated: true,
            },
            {
              name: "--issuer",
              description: "Tenant issuer",
              args: { name: "issuer" },
            },
            {
              name: "--prev-issuer",
              description: "Previous Tenant issuer",
              args: { name: "prev-issuer" },
            },
            {
              name: "--diagnostic-level",
              description:
                "The level of diagnostic logging that is currently in effect",
              args: { name: "integer" },
            },
            {
              name: "--diagnostic-tracing-upto",
              description:
                "The end time up to which diagnostic recording is switched",
              args: { name: "diagnostic-tracing-upto" },
            },
            {
              name: "--allowed-domains",
              description:
                "One or more email domains allowed in a user's email field",
              args: { name: "json" },
            },
            {
              name: "--enable-terms-of-use",
              description: "Indicates if Terms of Use is enabled in UI",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--terms-of-use-url",
              description: "Terms of Use URL",
              args: { name: "terms-of-use-url" },
            },
            optPrivacyPolicyUrl,
            {
              name: "--migration-status",
              description: "Database Migration Status",
              args: { name: "migration-status" },
            },
            {
              name: "--on-premises-provisioning",
              description: "On-Premises provisioning feature toggle",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--allowed-forgot-password-flow-return-urls",
              description:
                "If specified, indicates the set of Urls which can be returned to after successful forgot password flow",
              args: { name: "json" },
            },
            {
              name: "--allowed-notification-redirect-urls",
              description:
                "If specified, indicates the set of allowed notification redirect Urls which can be specified as the value",
              args: { name: "json" },
            },
            {
              name: "--audit-event-retention-period",
              description: "Audit Event retention period",
              args: { name: "integer" },
            },
            {
              name: "--is-hosted-page",
              description: "Indicates if 'hosted' option was selected",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--custom-html-location",
              description:
                "Storage URL location where the sanitized custom html is located",
              args: { name: "custom-html-location" },
            },
            {
              name: "--custom-css-location",
              description:
                "Storage URL location where the sanitized custom css is located",
              args: { name: "custom-css-location" },
            },
            {
              name: "--custom-translation",
              description: "Custom translations (JSON String)",
              args: { name: "custom-translation" },
            },
            {
              name: "--cloud-account-name",
              description: "The attribute to store the cloud account name",
              args: { name: "cloud-account-name" },
            },
            {
              name: "--cloud-migration-url-enabled",
              description:
                "CloudAccountMigration: Enable Custom SIM Migrator Url",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--cloud-migration-custom-url",
              description:
                "If specified, indicates the custom SIM Migrator Url which can be used while SIM to Oracle Identity Cloud",
              args: { name: "cloud-migration-custom-url" },
            },
            {
              name: "--service-admin-cannot-list-other-users",
              description:
                "By default, a service admin can list all users in stripe",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--max-no-of-app-role-members-to-return",
              description: "Limit the maximum return of members for an AppRole",
              args: { name: "integer" },
            },
            {
              name: "--max-no-of-app-cmva-to-return",
              description: "Limit the maximum return of CMVA for an App",
              args: { name: "integer" },
            },
            {
              name: "--iam-upst-session-expiry",
              description:
                "Maximum duration for IAM User Principal Session Token expiry",
              args: { name: "integer" },
            },
            { name: "--cloud-gate-cors-settings", args: { name: "json" } },
            { name: "--certificate-validation", args: { name: "json" } },
            {
              name: "--tenant-custom-claims",
              description: "Custom claims associated with the specific tenant",
              args: { name: "json" },
            },
            {
              name: "--purge-configs",
              description: "Purge Configs for different Resource Types",
              args: { name: "json" },
            },
            {
              name: "--default-company-names",
              description: "Default name of the Company in different locales",
              args: { name: "json" },
            },
            {
              name: "--default-login-texts",
              description: "Default Login text in different locales",
              args: { name: "json" },
            },
            {
              name: "--default-images",
              description: "References to various images",
              args: { name: "json" },
            },
            {
              name: "--company-names",
              description: "Name of the company in different locales",
              args: { name: "json" },
            },
            {
              name: "--login-texts",
              description: "Login text in different locales",
              args: { name: "json" },
            },
            {
              name: "--images",
              description: "References to various images",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "user-db-credentials",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for a user's database (DB) credentials",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description:
            "Search for a user's database (DB) credentials using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "branding-setting",
      description: "Brand Settings schema",
      subcommands: [
        {
          name: "get",
          description: "Get Branding Settings",
          options: [
            {
              name: "--branding-setting-id",
              description: "ID of the resource",
              args: { name: "branding-setting-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "identity-providers",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Identity Providers",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Identity Providers Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "user-password-changer",
      description:
        "The schema used to handle a user password change by an administrator",
      subcommands: [
        {
          name: "put",
          description: "Change a user's password to a known value",
          options: [
            {
              name: "--user-password-changer-id",
              description: "ID of the resource",
              args: { name: "user-password-changer-id" },
              isRequired: true,
            },
            optSchemas2,
            {
              name: "--password",
              description: "The password attribute",
              args: { name: "password" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--bypass-notification",
              description:
                "Indicates whether to send an email notification after a password is changed",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--notification-email-template-id",
              description:
                "Specifies the EmailTemplate to be used when sending a notification to the user",
              args: { name: "notification-email-template-id" },
            },
            optIfMatch,
            optForce2,
            optExtSelfChangeUser,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "app",
      description: "Schema for App resource",
      subcommands: [
        {
          name: "create",
          description: "Create an App",
          options: [
            optSchemas2,
            {
              name: "--display-name",
              description: "Display name of the application",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--based-on-template",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--meter-as-opc-service",
              description:
                "Indicates whether the application is billed as an OPCService",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--name",
              description: "Name of the application",
              args: { name: "name" },
            },
            {
              name: "--client-secret",
              description:
                "This value is the credential of this App, which this App supplies as a password when this App authenticates",
              args: { name: "client-secret" },
            },
            {
              name: "--hashed-client-secret",
              description: "Hashed Client Secret",
              args: { name: "hashed-client-secret" },
            },
            {
              name: "--description",
              description: "Description of the application",
              args: { name: "description" },
            },
            {
              name: "--id-token-enc-algo",
              description:
                "Encryption Alogrithm to use for encrypting ID token",
              args: { name: "id-token-enc-algo" },
            },
            {
              name: "--delegated-service-names",
              description:
                "Service Names allow to use OCI signature for client authentication instead of client credentials",
              args: { name: "json" },
            },
            {
              name: "--active",
              description:
                "If true, this App is able to participate in runtime services, such as automatic-login, OAuth, and SAML",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--app-icon",
              description: "Application icon",
              args: { name: "app-icon" },
            },
            {
              name: "--app-thumbnail",
              description: "Application thumbnail",
              args: { name: "app-thumbnail" },
            },
            {
              name: "--migrated",
              description:
                "If true, this App was migrated from an earlier version of Oracle Public Cloud infrastructure",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--infrastructure",
              description:
                "If true, this App is an internal infrastructure App",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-login-target",
              description:
                "If true, this App allows runtime services to log end users into this App automatically",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--show-in-my-apps",
              description:
                "If true, this app will be displayed in the MyApps page of each end-user who has access to the App",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--login-mechanism",
              description:
                "The protocol that runtime services will use to log end users in to this App automatically",
              args: { suggestions: ["OIDC", "SAML", "FORMFILL", "RADIUS"] },
            },
            {
              name: "--landing-page-url",
              description:
                "The URL of the landing page for this App, which is the first page that an end user should see if runtime",
              args: { name: "landing-page-url" },
            },
            {
              name: "--product-logo-url",
              description: "Application Logo URL",
              args: { name: "product-logo-url" },
            },
            optPrivacyPolicyUrl,
            {
              name: "--terms-of-service-url",
              description: "Terms of Service URL",
              args: { name: "terms-of-service-url" },
            },
            {
              name: "--contact-email-address",
              description: "Contact Email Address",
              args: { name: "contact-email-address" },
            },
            {
              name: "--product-name",
              description: "Product Name",
              args: { name: "product-name" },
            },
            {
              name: "--home-page-url",
              description: "Home Page URL",
              args: { name: "home-page-url" },
            },
            {
              name: "--is-form-fill",
              description:
                "If true, this application acts as FormFill Application",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-o-auth-client",
              description: "If true, this application acts as an OAuth Client",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-radius-app",
              description: "If true, this application acts as an Radius App",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--client-type",
              description:
                "Specifies the type of access that this App has when it acts as an OAuthClient",
              args: { suggestions: ["confidential", "public", "trusted"] },
            },
            {
              name: "--redirect-uris",
              description: "OPTIONAL",
              args: { name: "json" },
            },
            {
              name: "--all-url-schemes-allowed",
              description:
                "If true, indicates that the system should allow all URL-schemes within each value of the 'redirectUris'",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--logout-uri",
              description:
                "OAuth will use this URI to logout if this App wants to participate in SSO",
              args: { name: "logout-uri" },
            },
            {
              name: "--post-logout-redirect-uris",
              description:
                "Each value of this attribute is the URI of a landing page within this App",
              args: { name: "json" },
            },
            {
              name: "--allowed-grants",
              description:
                "List of grant-types that this App is allowed to use when it acts as an OAuthClient",
              args: { name: "json" },
            },
            {
              name: "--allowed-operations",
              description: "OPTIONAL",
              args: { suggestions: ["introspect", "onBehalfOfUser"] },
            },
            {
              name: "--client-ip-checking",
              description: "Network Perimeters checking mode",
              args: { suggestions: ["anywhere", "whitelisted"] },
            },
            {
              name: "--is-opc-service",
              description:
                "If true, this application is an Oracle Public Cloud service-instance",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-unmanaged-app",
              description:
                "If true, indicates that this application accepts an Oracle Cloud Identity Service User as a login-identity",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--allow-access-control",
              description:
                "If true, any managed App that is based on this template is checked for access control that",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-o-auth-resource",
              description:
                "If true, indicates that this application acts as an OAuth Resource",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--access-token-expiry",
              description: "Expiry-time in seconds for an Access Token",
              args: { name: "integer" },
            },
            {
              name: "--refresh-token-expiry",
              description: "Expiry-time in seconds for a Refresh Token",
              args: { name: "integer" },
            },
            {
              name: "--allow-offline",
              description:
                "If true, indicates that the Refresh Token is allowed when this App acts as an OAuth Resource",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--callback-service-url",
              description: "Callback Service URL",
              args: { name: "callback-service-url" },
            },
            {
              name: "--audience",
              description:
                "The base URI for all of the scopes defined in this App",
              args: { name: "audience" },
            },
            {
              name: "--is-mobile-target",
              description:
                "If true, indicates that the App should be visible in each end-user's mobile application",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--login-page-url",
              description:
                "This attribute specifies the URL of the page that the App uses when an end-user signs in to that App",
              args: { name: "login-page-url" },
            },
            {
              name: "--linking-callback-url",
              description:
                "This attribute specifies the callback URL for the social linking operation",
              args: { name: "linking-callback-url" },
            },
            {
              name: "--logout-page-url",
              description:
                "This attribute specifies the URL of the page that the App uses when an end-user signs out",
              args: { name: "logout-page-url" },
            },
            {
              name: "--error-page-url",
              description:
                "This attribute specifies the URL of the page to which an application will redirect an end-user in case",
              args: { name: "error-page-url" },
            },
            {
              name: "--is-saml-service-provider",
              description:
                "If true, then this App acts as a SAML Service Provider",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-web-tier-policy",
              description: "If true, the webtier policy is active",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-kerberos-realm",
              description:
                "If true, indicates that this App supports Kerberos Authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--icon",
              description: "URL of application icon",
              args: { name: "icon" },
            },
            {
              name: "--is-alias-app",
              description:
                "If true, this App is an AliasApp and it cannot be granted to an end-user directly",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-managed-app",
              description:
                "If true, indicates that access to this App requires an account",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--service-type-urn",
              description:
                "This Uniform Resource Name (URN) value identifies the type of Oracle Public Cloud service of which this app",
              args: { name: "service-type-urn" },
            },
            {
              name: "--service-type-version",
              description:
                "This value specifies the version of the Oracle Public Cloud service of which this App is an instance",
              args: { name: "service-type-version" },
            },
            {
              name: "--is-obligation-capable",
              description:
                "This flag indicates if the App is capable of validating obligations with the token for allowing access to",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--ready-to-upgrade",
              description:
                "If true, this App requires an upgrade and mandates attention from application administrator",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--trust-scope",
              description:
                "Indicates the scope of trust for this App when acting as an OAuthClient",
              args: { suggestions: ["Explicit", "Account", "Tags", "Default"] },
            },
            {
              name: "--is-database-service",
              description:
                "If true, this application acts as database service Application",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--secondary-audiences",
              description:
                "A list of secondary audiences--additional URIs to be added automatically to any OAuth token that allows",
              args: { name: "json" },
            },
            {
              name: "--is-enterprise-app",
              description:
                "If true, this app acts as Enterprise app with Authentication and URL Authz policy",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--bypass-consent",
              description:
                "If true, indicates that consent should be skipped for all scopes",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--disable-kmsi-token-authentication",
              description:
                "Indicates whether the application is allowed to be access using kmsi token",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-multicloud-service-app",
              description:
                "If true, indicates the app is used for multicloud service integration",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--radius-policy", args: { name: "json" } },
            {
              name: "--apps-network-perimeters",
              description: "Network Perimeter",
              args: { name: "json" },
            },
            {
              name: "--cloud-control-properties",
              description:
                "A collection of arbitrary properties that scope the privileges of a cloud-control App",
              args: { name: "json" },
            },
            {
              name: "--editable-attributes",
              description: "App attributes editable by subject",
              args: { name: "json" },
            },
            { name: "--terms-of-use", args: { name: "json" } },
            {
              name: "--protectable-secondary-audiences",
              description:
                "A list of secondary audiences--additional URIs to be added automatically to any OAuth token that allows",
              args: { name: "json" },
            },
            { name: "--idp-policy", args: { name: "json" } },
            {
              name: "--allowed-tags",
              description:
                "A list of tags, acting as an OAuthClient, this App is allowed to access",
              args: { name: "json" },
            },
            { name: "--app-signon-policy", args: { name: "json" } },
            {
              name: "--trust-policies",
              description: "Trust Policies",
              args: { name: "json" },
            },
            { name: "--signon-policy", args: { name: "json" } },
            {
              name: "--identity-providers",
              description: "A list of IdentityProvider assigned to app",
              args: { name: "json" },
            },
            {
              name: "--accounts",
              description: "Accounts of App",
              args: { name: "json" },
            },
            {
              name: "--grants",
              description: "Grants assigned to the app",
              args: { name: "json" },
            },
            {
              name: "--service-params",
              description:
                "Custom attribute that is required to compute other attribute values during app creation",
              args: { name: "json" },
            },
            {
              name: "--attr-rendering-metadata",
              description: "Label for the attribute to be shown in the UI",
              args: { name: "json" },
            },
            {
              name: "--granted-app-roles",
              description:
                "A list of AppRoles that are granted to this App (and that are defined by other Apps)",
              args: { name: "json" },
            },
            { name: "--saml-service-provider", args: { name: "json" } },
            {
              name: "--allowed-scopes",
              description:
                "A list of scopes (exposed by this App or by other Apps) that this App is allowed to access when it acts as",
              args: { name: "json" },
            },
            {
              name: "--certificates",
              description:
                "Each value of this attribute represent a certificate that this App uses when it acts as an OAuthClient",
              args: { name: "json" },
            },
            {
              name: "--alias-apps",
              description:
                "Each value of this internal attribute refers to an Oracle Public Cloud infrastructure App on which this App",
              args: { name: "json" },
            },
            { name: "--as-opc-service", args: { name: "json" } },
            {
              name: "--admin-roles",
              description: "A list of AppRoles defined by this UnmanagedApp",
              args: { name: "json" },
            },
            {
              name: "--user-roles",
              description: "A list of AppRoles defined by this UnmanagedApp",
              args: { name: "json" },
            },
            {
              name: "--scopes",
              description: "Scopes defined by this App",
              args: { name: "json" },
            },
            {
              name: "--ext-form-fill-app-template-app-template",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optExtOciTags,
            {
              name: "--ext-dbcs-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-enterprise-app-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-form-fill-app-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-kerberos-realm-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-managedapp-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-multicloud-service-app-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-opc-service-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-radius-app-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-requestable-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-saml-service-provider-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-web-tier-policy-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete an App",
          options: [
            optAppId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get an App",
          options: [
            optAppId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update an App",
          options: [
            optAppId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace an App",
          options: [
            optAppId,
            optSchemas2,
            {
              name: "--display-name",
              description: "Display name of the application",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--based-on-template",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--meter-as-opc-service",
              description:
                "Indicates whether the application is billed as an OPCService",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--name",
              description: "Name of the application",
              args: { name: "name" },
            },
            {
              name: "--client-secret",
              description:
                "This value is the credential of this App, which this App supplies as a password when this App authenticates",
              args: { name: "client-secret" },
            },
            {
              name: "--hashed-client-secret",
              description: "Hashed Client Secret",
              args: { name: "hashed-client-secret" },
            },
            {
              name: "--description",
              description: "Description of the application",
              args: { name: "description" },
            },
            {
              name: "--id-token-enc-algo",
              description:
                "Encryption Alogrithm to use for encrypting ID token",
              args: { name: "id-token-enc-algo" },
            },
            {
              name: "--delegated-service-names",
              description:
                "Service Names allow to use OCI signature for client authentication instead of client credentials",
              args: { name: "json" },
            },
            {
              name: "--active",
              description:
                "If true, this App is able to participate in runtime services, such as automatic-login, OAuth, and SAML",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--app-icon",
              description: "Application icon",
              args: { name: "app-icon" },
            },
            {
              name: "--app-thumbnail",
              description: "Application thumbnail",
              args: { name: "app-thumbnail" },
            },
            {
              name: "--migrated",
              description:
                "If true, this App was migrated from an earlier version of Oracle Public Cloud infrastructure",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--infrastructure",
              description:
                "If true, this App is an internal infrastructure App",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-login-target",
              description:
                "If true, this App allows runtime services to log end users into this App automatically",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--show-in-my-apps",
              description:
                "If true, this app will be displayed in the MyApps page of each end-user who has access to the App",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--login-mechanism",
              description:
                "The protocol that runtime services will use to log end users in to this App automatically",
              args: { suggestions: ["OIDC", "SAML", "FORMFILL", "RADIUS"] },
            },
            {
              name: "--landing-page-url",
              description:
                "The URL of the landing page for this App, which is the first page that an end user should see if runtime",
              args: { name: "landing-page-url" },
            },
            {
              name: "--product-logo-url",
              description: "Application Logo URL",
              args: { name: "product-logo-url" },
            },
            optPrivacyPolicyUrl,
            {
              name: "--terms-of-service-url",
              description: "Terms of Service URL",
              args: { name: "terms-of-service-url" },
            },
            {
              name: "--contact-email-address",
              description: "Contact Email Address",
              args: { name: "contact-email-address" },
            },
            {
              name: "--product-name",
              description: "Product Name",
              args: { name: "product-name" },
            },
            {
              name: "--home-page-url",
              description: "Home Page URL",
              args: { name: "home-page-url" },
            },
            {
              name: "--is-form-fill",
              description:
                "If true, this application acts as FormFill Application",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-o-auth-client",
              description: "If true, this application acts as an OAuth Client",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-radius-app",
              description: "If true, this application acts as an Radius App",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--client-type",
              description:
                "Specifies the type of access that this App has when it acts as an OAuthClient",
              args: { suggestions: ["confidential", "public", "trusted"] },
            },
            {
              name: "--redirect-uris",
              description: "OPTIONAL",
              args: { name: "json" },
            },
            {
              name: "--all-url-schemes-allowed",
              description:
                "If true, indicates that the system should allow all URL-schemes within each value of the 'redirectUris'",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--logout-uri",
              description:
                "OAuth will use this URI to logout if this App wants to participate in SSO",
              args: { name: "logout-uri" },
            },
            {
              name: "--post-logout-redirect-uris",
              description:
                "Each value of this attribute is the URI of a landing page within this App",
              args: { name: "json" },
            },
            {
              name: "--allowed-grants",
              description:
                "List of grant-types that this App is allowed to use when it acts as an OAuthClient",
              args: { name: "json" },
            },
            {
              name: "--allowed-operations",
              description: "OPTIONAL",
              args: { suggestions: ["introspect", "onBehalfOfUser"] },
            },
            {
              name: "--client-ip-checking",
              description: "Network Perimeters checking mode",
              args: { suggestions: ["anywhere", "whitelisted"] },
            },
            {
              name: "--is-opc-service",
              description:
                "If true, this application is an Oracle Public Cloud service-instance",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-unmanaged-app",
              description:
                "If true, indicates that this application accepts an Oracle Cloud Identity Service User as a login-identity",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--allow-access-control",
              description:
                "If true, any managed App that is based on this template is checked for access control that",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-o-auth-resource",
              description:
                "If true, indicates that this application acts as an OAuth Resource",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--access-token-expiry",
              description: "Expiry-time in seconds for an Access Token",
              args: { name: "integer" },
            },
            {
              name: "--refresh-token-expiry",
              description: "Expiry-time in seconds for a Refresh Token",
              args: { name: "integer" },
            },
            {
              name: "--allow-offline",
              description:
                "If true, indicates that the Refresh Token is allowed when this App acts as an OAuth Resource",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--callback-service-url",
              description: "Callback Service URL",
              args: { name: "callback-service-url" },
            },
            {
              name: "--audience",
              description:
                "The base URI for all of the scopes defined in this App",
              args: { name: "audience" },
            },
            {
              name: "--is-mobile-target",
              description:
                "If true, indicates that the App should be visible in each end-user's mobile application",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--login-page-url",
              description:
                "This attribute specifies the URL of the page that the App uses when an end-user signs in to that App",
              args: { name: "login-page-url" },
            },
            {
              name: "--linking-callback-url",
              description:
                "This attribute specifies the callback URL for the social linking operation",
              args: { name: "linking-callback-url" },
            },
            {
              name: "--logout-page-url",
              description:
                "This attribute specifies the URL of the page that the App uses when an end-user signs out",
              args: { name: "logout-page-url" },
            },
            {
              name: "--error-page-url",
              description:
                "This attribute specifies the URL of the page to which an application will redirect an end-user in case",
              args: { name: "error-page-url" },
            },
            {
              name: "--is-saml-service-provider",
              description:
                "If true, then this App acts as a SAML Service Provider",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-web-tier-policy",
              description: "If true, the webtier policy is active",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-kerberos-realm",
              description:
                "If true, indicates that this App supports Kerberos Authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--icon",
              description: "URL of application icon",
              args: { name: "icon" },
            },
            {
              name: "--is-alias-app",
              description:
                "If true, this App is an AliasApp and it cannot be granted to an end-user directly",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-managed-app",
              description:
                "If true, indicates that access to this App requires an account",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--service-type-urn",
              description:
                "This Uniform Resource Name (URN) value identifies the type of Oracle Public Cloud service of which this app",
              args: { name: "service-type-urn" },
            },
            {
              name: "--service-type-version",
              description:
                "This value specifies the version of the Oracle Public Cloud service of which this App is an instance",
              args: { name: "service-type-version" },
            },
            {
              name: "--is-obligation-capable",
              description:
                "This flag indicates if the App is capable of validating obligations with the token for allowing access to",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--ready-to-upgrade",
              description:
                "If true, this App requires an upgrade and mandates attention from application administrator",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--trust-scope",
              description:
                "Indicates the scope of trust for this App when acting as an OAuthClient",
              args: { suggestions: ["Explicit", "Account", "Tags", "Default"] },
            },
            {
              name: "--is-database-service",
              description:
                "If true, this application acts as database service Application",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--secondary-audiences",
              description:
                "A list of secondary audiences--additional URIs to be added automatically to any OAuth token that allows",
              args: { name: "json" },
            },
            {
              name: "--is-enterprise-app",
              description:
                "If true, this app acts as Enterprise app with Authentication and URL Authz policy",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--bypass-consent",
              description:
                "If true, indicates that consent should be skipped for all scopes",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--disable-kmsi-token-authentication",
              description:
                "Indicates whether the application is allowed to be access using kmsi token",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-multicloud-service-app",
              description:
                "If true, indicates the app is used for multicloud service integration",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--radius-policy", args: { name: "json" } },
            {
              name: "--apps-network-perimeters",
              description: "Network Perimeter",
              args: { name: "json" },
            },
            {
              name: "--cloud-control-properties",
              description:
                "A collection of arbitrary properties that scope the privileges of a cloud-control App",
              args: { name: "json" },
            },
            {
              name: "--editable-attributes",
              description: "App attributes editable by subject",
              args: { name: "json" },
            },
            { name: "--terms-of-use", args: { name: "json" } },
            {
              name: "--protectable-secondary-audiences",
              description:
                "A list of secondary audiences--additional URIs to be added automatically to any OAuth token that allows",
              args: { name: "json" },
            },
            { name: "--idp-policy", args: { name: "json" } },
            {
              name: "--allowed-tags",
              description:
                "A list of tags, acting as an OAuthClient, this App is allowed to access",
              args: { name: "json" },
            },
            { name: "--app-signon-policy", args: { name: "json" } },
            {
              name: "--trust-policies",
              description: "Trust Policies",
              args: { name: "json" },
            },
            { name: "--signon-policy", args: { name: "json" } },
            {
              name: "--identity-providers",
              description: "A list of IdentityProvider assigned to app",
              args: { name: "json" },
            },
            {
              name: "--accounts",
              description: "Accounts of App",
              args: { name: "json" },
            },
            {
              name: "--grants",
              description: "Grants assigned to the app",
              args: { name: "json" },
            },
            {
              name: "--service-params",
              description:
                "Custom attribute that is required to compute other attribute values during app creation",
              args: { name: "json" },
            },
            {
              name: "--attr-rendering-metadata",
              description: "Label for the attribute to be shown in the UI",
              args: { name: "json" },
            },
            {
              name: "--granted-app-roles",
              description:
                "A list of AppRoles that are granted to this App (and that are defined by other Apps)",
              args: { name: "json" },
            },
            { name: "--saml-service-provider", args: { name: "json" } },
            {
              name: "--allowed-scopes",
              description:
                "A list of scopes (exposed by this App or by other Apps) that this App is allowed to access when it acts as",
              args: { name: "json" },
            },
            {
              name: "--certificates",
              description:
                "Each value of this attribute represent a certificate that this App uses when it acts as an OAuthClient",
              args: { name: "json" },
            },
            {
              name: "--alias-apps",
              description:
                "Each value of this internal attribute refers to an Oracle Public Cloud infrastructure App on which this App",
              args: { name: "json" },
            },
            { name: "--as-opc-service", args: { name: "json" } },
            {
              name: "--admin-roles",
              description: "A list of AppRoles defined by this UnmanagedApp",
              args: { name: "json" },
            },
            {
              name: "--user-roles",
              description: "A list of AppRoles defined by this UnmanagedApp",
              args: { name: "json" },
            },
            {
              name: "--scopes",
              description: "Scopes defined by this App",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            {
              name: "--ext-form-fill-app-template-app-template",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optExtOciTags,
            {
              name: "--ext-dbcs-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-enterprise-app-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-form-fill-app-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-kerberos-realm-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-managedapp-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-multicloud-service-app-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-opc-service-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-radius-app-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-requestable-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-saml-service-provider-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-web-tier-policy-app",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "resource-type-schema-attributes",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Resource Type Schema Attributes",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Resource Type Schema Attributes Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-device",
      description: "Device Resource",
      subcommands: [
        {
          name: "delete",
          description: "Delete a Device",
          options: [
            optMyDeviceId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a Device",
          options: [
            optMyDeviceId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Device",
          options: [
            optMyDeviceId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "authentication-factors-remover",
      description:
        "This schema defines the attributes of Authentication Factors Remover call",
      subcommands: [
        {
          name: "create",
          description: "Remove All Authentication Factor Channels for a User",
          options: [
            optSchemas2,
            { name: "--user", args: { name: "json" }, isRequired: true },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--type",
              description: "Specifies the type of factors to remove",
              args: { suggestions: ["KMSI", "MFA", "ACCOUNTRECOVERY", "ALL"] },
            },
            {
              name: "--token",
              description: "Specifies the token to be removed",
              args: { name: "token" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "account-recovery-setting",
      description: "Account Recovery Settings",
      subcommands: [
        {
          name: "get",
          description: "Get an account recovery setting",
          options: [
            optAccountRecoverySettingId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update an account recovery setting",
          options: [
            optAccountRecoverySettingId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace an account recovery setting",
          options: [
            optAccountRecoverySettingId,
            optSchemas2,
            {
              name: "--factors",
              description:
                "The account recovery factor used (for example, email, mobile number (SMS), security questions",
              args: {
                suggestions: ["email", "sms", "secquestions", "push", "totp"],
              },
              isRequired: true,
            },
            {
              name: "--max-incorrect-attempts",
              description:
                "Indicates the maximum number of failed account recovery attempts allowed for the user",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--lockout-duration",
              description:
                "Indicates how many minutes to disable account recovery for the user",
              args: { name: "integer" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "self-registration-profiles",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for self-registration profiles",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for self-registration profile using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-completed-approvals",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search My MyCompletedApproval",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "network-perimeter",
      description: "NetworkPerimeter resource",
      subcommands: [
        {
          name: "create",
          description: "Create a NetworkPerimeter",
          options: [
            optSchemas2,
            {
              name: "--name",
              description: "NetworkPerimeter name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--ip-addresses",
              description:
                "IPAddresses or Ranges assigned to the NetworkPerimeter",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--description",
              description: "NetworkPerimeter Description",
              args: { name: "description" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a NetworkPerimeter",
          options: [
            optNetworkPerimeterId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a NetworkPerimeter",
          options: [
            optNetworkPerimeterId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a NetworkPerimeter",
          options: [
            optNetworkPerimeterId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a NetworkPerimeter",
          options: [
            optNetworkPerimeterId,
            optSchemas2,
            {
              name: "--name",
              description: "NetworkPerimeter name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--ip-addresses",
              description:
                "IPAddresses or Ranges assigned to the NetworkPerimeter",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--description",
              description: "NetworkPerimeter Description",
              args: { name: "description" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-customer-secret-key",
      description: "The user's customer secret key",
      subcommands: [
        {
          name: "create",
          description: "Add a user's own customer secret key",
          options: [
            optSchemas2,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--display-name",
              description: "Display Name",
              args: { name: "display-name" },
            },
            optDescription,
            optStatus,
            optExpiresOn,
            {
              name: "--access-key",
              description: "The access key",
              args: { name: "access-key" },
            },
            optUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's own customer secret key",
          options: [
            optMyCustomerSecretKeyId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's own customer secret key",
          options: [
            optMyCustomerSecretKeyId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a user's own customer secret key",
          options: [
            optMyCustomerSecretKeyId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "schema",
      description: "SCIM schema",
      subcommands: [
        {
          name: "get",
          description: "Get a Schema",
          options: [
            optSchemaId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Schema Def",
          options: [
            optSchemaId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a Schema Def",
          options: [
            optSchemaId,
            optSchemas2,
            {
              name: "--idcs-mappable",
              description:
                "Specifies if the attributes in this schema can be used for mapping with external identity sources such as AD",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            {
              name: "--idcs-maps-to-same-target-attribute-name-as",
              description:
                "Contains the canonical name of the other attribute sharing the same idcsTargetAttributeName",
              args: { name: "idcs-maps-to-same-target-attribute-name-as" },
            },
            optExternalId,
            {
              name: "--name",
              description: "Schema's human-readable name",
              args: { name: "name" },
            },
            {
              name: "--idcs-resource-types",
              description: "Resource types defs this resource refers",
              args: { name: "json" },
            },
            {
              name: "--description",
              description: "Schema's human-readable description",
              args: { name: "description" },
            },
            {
              name: "--idcs-attribute-cacheable",
              description: "Specifies whether the attribute is cacheable",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--idcs-override-common-attribute",
              description:
                "Specifies whether the dataprovider mapping from resource schema should override from common schema with",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--attributes",
              description:
                "A complex type that specifies the set of Resource attributes",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "password-policies",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for password policies",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for password policies using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "customer-secret-keys",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for a user's customer secret keys",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for customer secret keys using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "app-role",
      description: "AppRole resource",
      subcommands: [
        {
          name: "create",
          description: "Create an AppRole",
          options: [
            optSchemas2,
            {
              name: "--display-name",
              description: "AppRole name",
              args: { name: "display-name" },
              isRequired: true,
            },
            { name: "--app", args: { name: "json" }, isRequired: true },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--unique-name",
              description: "AppRole unique name",
              args: { name: "unique-name" },
            },
            {
              name: "--description",
              description: "AppRole description",
              args: { name: "description" },
            },
            {
              name: "--legacy-group-name",
              description:
                "The name of the legacy group associated with this AppRole",
              args: { name: "legacy-group-name" },
            },
            {
              name: "--admin-role",
              description:
                "If true, the role provides administrative access privileges",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--limited-to-one-or-more-groups",
              description:
                "If true, indicates that this Oracle Identity Cloud Service AppRole can be granted to a delegated",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--available-to-users",
              description: "If true, this AppRole can be granted to Users",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--available-to-groups",
              description: "If true, this AppRole can be granted to Groups",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--available-to-clients",
              description: "If true, this AppRole can be granted to Apps",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--public",
              description:
                "If true, this AppRole is available automatically to every Oracle Identity Cloud Service User in this tenancy",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--localized-display-name",
              description: "AppRole localization name",
              args: { name: "localized-display-name" },
            },
            {
              name: "--members",
              description:
                "AppRole members - when requesting members attribute",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete an AppRole",
          options: [
            optAppRoleId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get an AppRole",
          options: [
            optAppRoleId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update an AppRole",
          options: [
            optAppRoleId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "verification-claim",
      description:
        "Use this endpoint to get all the verifiable claims supported by the Identity Proofing Provider",
      subcommands: [
        {
          name: "create",
          description: "Create Verification Claims of IdentityProofingProvider",
          options: [
            optSchemas2,
            {
              name: "--oidc-provider",
              description: "The OIDC Identity Proofing Provide",
              args: { name: "oidc-provider" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optIdcsLockedOperations,
            optIdcsLockedBy,
            optIdcsLockedOn,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid2,
            optCompartmentOcid2,
            optTenancyOcid2,
            {
              name: "--verifiable-claims",
              description: "Verifiable Claims",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-auth-tokens",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for a user's own Auth token",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "user-password-resetter",
      description:
        "The schema used to handle a user password reset by an administrator",
      subcommands: [
        {
          name: "put",
          description: "Reset a user's password to a randomly-generated value",
          options: [
            {
              name: "--user-password-resetter-id",
              description: "ID of the resource",
              args: { name: "user-password-resetter-id" },
              isRequired: true,
            },
            optSchemas2,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--bypass-notification",
              description:
                "Indicates whether to send an email notification after resetting the user's password",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--user-flow-controlled-by-external-client",
              description:
                "A Boolean value indicating whether to bypass notification and return user token to be used by an external",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--user-token", args: { name: "json" } },
            {
              name: "--notification-email-template-id",
              description:
                "Specifies the EmailTemplate to be used when sending notifications to the user",
              args: { name: "notification-email-template-id" },
            },
            {
              name: "--one-time-password",
              description:
                "A one time password will be returned when the user doesn't have a primary email address",
              args: { name: "one-time-password" },
            },
            optIfMatch,
            optForce2,
            optExtSelfChangeUser,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-questions",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for security questions",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for security questions using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-support-accounts",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for a user's own support account",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "approval-workflow-step",
      description: "Schema for ApprovalWorkflowStep",
      subcommands: [
        {
          name: "create",
          description: "Create ApprovalWorkflowStep",
          options: [
            optSchemas2,
            {
              name: "--order",
              description: "Order of the ApprovalWorkflowStep",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Type of ApprovalWorkflowStep",
              args: { suggestions: ["escalation", "regular"] },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--minimum-approvals",
              description: "Minimum number of Approvals required for this step",
              args: { name: "integer" },
            },
            {
              name: "--approvers-expressions",
              description: "ApproversExpressions of ApprovalWorkflowStep",
              args: { name: "json" },
            },
            {
              name: "--approvers",
              description: "Approvers of the ApprovalWorkflowStep",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete ApprovalWorkflowStep",
          options: [
            optApprovalWorkflowStepId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get ApprovalWorkflowStep",
          options: [
            optApprovalWorkflowStepId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update ApprovalWorkflowStep",
          options: [
            optApprovalWorkflowStepId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-api-key",
      description: "The user's API key",
      subcommands: [
        {
          name: "create",
          description: "Add a user's own API key",
          options: [
            optSchemas2,
            {
              name: "--fingerprint",
              description: "Fingerprint",
              args: { name: "fingerprint" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Key",
              args: { name: "key" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optDescription,
            optUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's own API key",
          options: [
            optMyApiKeyId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's own API key",
          options: [
            optMyApiKeyId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a user's own API key",
          options: [
            optMyApiKeyId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "user-attributes-setting",
      description: "Schema for End User Attribute mutability",
      subcommands: [
        {
          name: "get",
          description: "Get User Schema Attribute Settings",
          options: [
            {
              name: "--user-attributes-setting-id",
              description: "ID of the resource",
              args: { name: "user-attributes-setting-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Search User Schema Attribute Settings",
          options: [
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update User Schema Attribute Settings",
          options: [
            {
              name: "--user-attributes-setting-id",
              description: "ID of the resource",
              args: { name: "user-attributes-setting-id" },
              isRequired: true,
            },
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search User Schema Attribute Settings Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "api-keys",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search API keys",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for API keys using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "apps",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Apps",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Apps Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-requestable-groups",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search My Requestable Groups",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search My Requestable Groups Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "policy",
      description: "Policy resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Policy",
          options: [
            optSchemas2,
            {
              name: "--name",
              description: "Policy name",
              args: { name: "name" },
              isRequired: true,
            },
            optPolicyType,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--description",
              description: "Policy Description",
              args: { name: "description" },
            },
            {
              name: "--active",
              description: "If true, Policy is active",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--policy-groovy",
              description:
                "The Groovy script that is run instead of the policy",
              args: { name: "policy-groovy" },
            },
            {
              name: "--rules",
              description: "Rules assigned to this policy",
              args: { name: "json" },
            },
            optUrnietfparamsscimschemasoracleidcsextensionociconsolesignonpolicyconsentPolicy,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a Policy",
          options: [
            optPolicyId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a Policy",
          options: [
            optPolicyId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Search Policies",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Policy",
          options: [
            optPolicyId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a Policy",
          options: [
            optPolicyId,
            optSchemas2,
            {
              name: "--name",
              description: "Policy name",
              args: { name: "name" },
              isRequired: true,
            },
            optPolicyType,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--description",
              description: "Policy Description",
              args: { name: "description" },
            },
            {
              name: "--active",
              description: "If true, Policy is active",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--policy-groovy",
              description:
                "The Groovy script that is run instead of the policy",
              args: { name: "policy-groovy" },
            },
            {
              name: "--rules",
              description: "Rules assigned to this policy",
              args: { name: "json" },
            },
            optUrnietfparamsscimschemasoracleidcsextensionociconsolesignonpolicyconsentPolicy,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Policies Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "kmsi-settings",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search KmsiSettings",
          options: [
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search KmsiSettings Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "o-auth-partner-certificate",
      description: "OAuth Partner Certificate schema",
      subcommands: [
        {
          name: "create",
          description: "Create an OAuth Partner Certificate",
          options: [
            optSchemas2,
            {
              name: "--certificate-alias",
              description: "Certificate alias",
              args: { name: "certificate-alias" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--key-store-name",
              description: "Key store name",
              args: { name: "key-store-name" },
            },
            { name: "--map", description: "Map", args: { name: "map" } },
            {
              name: "--key-store-password",
              description: "Key store password",
              args: { name: "key-store-password" },
            },
            {
              name: "--key-store-id",
              description: "Key store ID",
              args: { name: "key-store-id" },
            },
            {
              name: "--sha1-thumbprint",
              description: "SHA-1 Thumbprint",
              args: { name: "sha1-thumbprint" },
            },
            {
              name: "--sha256-thumbprint",
              description: "SHA-256 Thumbprint",
              args: { name: "sha256-thumbprint" },
            },
            {
              name: "--cert-start-date",
              description: "Certificate start date",
              args: { name: "cert-start-date" },
            },
            {
              name: "--x509-base64-certificate",
              description: "Base 64Key data attribute",
              args: { name: "x509-base64-certificate" },
            },
            {
              name: "--cert-end-date",
              description: "Certificate end date",
              args: { name: "cert-end-date" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete an OAuth Partner Certificate",
          options: [
            {
              name: "--o-auth-partner-certificate-id",
              description: "ID of the resource",
              args: { name: "o-auth-partner-certificate-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get an OAuth Partner Certificate",
          options: [
            {
              name: "--o-auth-partner-certificate-id",
              description: "ID of the resource",
              args: { name: "o-auth-partner-certificate-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "o-auth2-client-credentials",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for a user's OAuth2 client credentials",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for OAuth2 client credentials using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "o-auth-client-certificate",
      description: "OAuth Client Certificate schema",
      subcommands: [
        {
          name: "create",
          description: "Create an OAuth Client Certificate",
          options: [
            optSchemas2,
            {
              name: "--certificate-alias",
              description: "Certificate alias",
              args: { name: "certificate-alias" },
              isRequired: true,
            },
            {
              name: "--x509-base64-certificate",
              description: "Base 64Key data attribute",
              args: { name: "x509-base64-certificate" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--key-store-name",
              description: "Key store name",
              args: { name: "key-store-name" },
            },
            { name: "--map", description: "Map", args: { name: "map" } },
            {
              name: "--key-store-password",
              description: "Key store password",
              args: { name: "key-store-password" },
            },
            {
              name: "--key-store-id",
              description: "Key store ID",
              args: { name: "key-store-id" },
            },
            {
              name: "--sha1-thumbprint",
              description: "SHA-1 Thumbprint",
              args: { name: "sha1-thumbprint" },
            },
            {
              name: "--sha256-thumbprint",
              description: "SHA-256 Thumbprint",
              args: { name: "sha256-thumbprint" },
            },
            {
              name: "--cert-start-date",
              description: "Certificate start date",
              args: { name: "cert-start-date" },
            },
            {
              name: "--cert-end-date",
              description: "Certificate end date",
              args: { name: "cert-end-date" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete an OAuth Client Certificate",
          options: [
            {
              name: "--o-auth-client-certificate-id",
              description: "ID of the resource",
              args: { name: "o-auth-client-certificate-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get OAuth Client Certificates",
          options: [
            {
              name: "--o-auth-client-certificate-id",
              description: "ID of the resource",
              args: { name: "o-auth-client-certificate-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-devices",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Devices",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "password-policy",
      description: "PasswordPolicy resource",
      subcommands: [
        {
          name: "create",
          description: "Create a password policy",
          options: [
            optSchemas2,
            {
              name: "--name",
              description:
                "A String that is the name of the policy to display to the user",
              args: { name: "name" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--description",
              description: "A String that describes the password policy",
              args: { name: "description" },
            },
            {
              name: "--max-length",
              description: "The maximum password length (in characters)",
              args: { name: "integer" },
            },
            {
              name: "--min-length",
              description: "The minimum password length (in characters)",
              args: { name: "integer" },
            },
            {
              name: "--min-alphas",
              description:
                "The minimum number of alphabetic characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--min-numerals",
              description:
                "The minimum number of numeric characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--min-alpha-numerals",
              description:
                "The minimum number of a combination of alphabetic and numeric characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--min-special-chars",
              description:
                "The minimum number of special characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--max-special-chars",
              description:
                "The maximum number of special characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--min-lower-case",
              description:
                "The minimum number of lowercase alphabetic characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--min-upper-case",
              description:
                "The minimum number of uppercase alphabetic characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--min-unique-chars",
              description:
                "The minimum number of unique characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--max-repeated-chars",
              description:
                "The maximum number of repeated characters allowed in a password",
              args: { name: "integer" },
            },
            {
              name: "--starts-with-alphabet",
              description:
                "Indicates that the password must begin with an alphabetic character",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--first-name-disallowed",
              description:
                "Indicates a sequence of characters that match the user's first name of given name cannot be the password",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--last-name-disallowed",
              description:
                "Indicates a sequence of characters that match the user's last name of given name cannot be the password",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--user-name-disallowed",
              description:
                "Indicates a sequence of characters that match the username cannot be the password",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--disallowed-user-attribute-values",
              description:
                "List of User attributes whose values are not allowed in the password",
              args: { name: "json" },
            },
            {
              name: "--min-password-age",
              description:
                "Minimum time after which the user can resubmit the reset password request",
              args: { name: "integer" },
            },
            {
              name: "--password-expires-after",
              description:
                "The number of days after which the password expires automatically",
              args: { name: "integer" },
            },
            {
              name: "--password-expire-warning",
              description:
                "An integer indicating the number of days before which the user should be warned about password expiry",
              args: { name: "integer" },
            },
            {
              name: "--required-chars",
              description:
                "A String value whose contents indicate a set of characters that must appear, in any sequence",
              args: { name: "required-chars" },
            },
            {
              name: "--disallowed-chars",
              description:
                "A String value whose contents indicate a set of characters that cannot appear, in any sequence",
              args: { name: "disallowed-chars" },
            },
            {
              name: "--allowed-chars",
              description:
                "A String value whose contents indicate a set of characters that can appear, in any sequence",
              args: { name: "allowed-chars" },
            },
            {
              name: "--disallowed-substrings",
              description:
                "A String value whose contents indicate a set of substrings that cannot appear, in any sequence",
              args: { name: "json" },
            },
            {
              name: "--dictionary-word-disallowed",
              description:
                "Indicates whether the password can match a dictionary word",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--dictionary-location",
              description:
                "A Reference value that contains the URI of a dictionary of words not allowed to appear within a password value",
              args: { name: "dictionary-location" },
            },
            {
              name: "--dictionary-delimiter",
              description:
                "A delimiter used to separate characters in the dictionary file",
              args: { name: "dictionary-delimiter" },
            },
            {
              name: "--max-incorrect-attempts",
              description:
                "An integer that represents the maximum number of failed logins before an account is locked",
              args: { name: "integer" },
            },
            {
              name: "--lockout-duration",
              description:
                "The time period in minutes to lock out a user account when the threshold of invalid login attempts is reached",
              args: { name: "integer" },
            },
            {
              name: "--num-passwords-in-history",
              description:
                "The number of passwords that will be kept in history that may not be used as a password",
              args: { name: "integer" },
            },
            {
              name: "--password-strength",
              description:
                "Indicates whether the password policy is configured as Simple, Standard, or Custom",
              args: { suggestions: ["Simple", "Standard", "Custom"] },
            },
            {
              name: "--force-password-reset",
              description:
                "Indicates whether all of the users should be forced to reset their password on the next login",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--distinct-characters",
              description:
                "The number of distinct characters between old password and new password",
              args: { name: "integer" },
            },
            {
              name: "--priority",
              description: "Password policy priority",
              args: { name: "integer" },
            },
            {
              name: "--groups",
              description:
                "A list of groups that the password policy belongs to",
              args: { name: "json" },
            },
            {
              name: "--configured-password-policy-rules",
              description: "List of password policy rules that have values set",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a password policy",
          options: [
            optPasswordPolicyId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a password policy",
          options: [
            optPasswordPolicyId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a password policy",
          options: [
            optPasswordPolicyId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a password policy",
          options: [
            optPasswordPolicyId,
            optSchemas2,
            {
              name: "--name",
              description:
                "A String that is the name of the policy to display to the user",
              args: { name: "name" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--description",
              description: "A String that describes the password policy",
              args: { name: "description" },
            },
            {
              name: "--max-length",
              description: "The maximum password length (in characters)",
              args: { name: "integer" },
            },
            {
              name: "--min-length",
              description: "The minimum password length (in characters)",
              args: { name: "integer" },
            },
            {
              name: "--min-alphas",
              description:
                "The minimum number of alphabetic characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--min-numerals",
              description:
                "The minimum number of numeric characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--min-alpha-numerals",
              description:
                "The minimum number of a combination of alphabetic and numeric characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--min-special-chars",
              description:
                "The minimum number of special characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--max-special-chars",
              description:
                "The maximum number of special characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--min-lower-case",
              description:
                "The minimum number of lowercase alphabetic characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--min-upper-case",
              description:
                "The minimum number of uppercase alphabetic characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--min-unique-chars",
              description:
                "The minimum number of unique characters in a password",
              args: { name: "integer" },
            },
            {
              name: "--max-repeated-chars",
              description:
                "The maximum number of repeated characters allowed in a password",
              args: { name: "integer" },
            },
            {
              name: "--starts-with-alphabet",
              description:
                "Indicates that the password must begin with an alphabetic character",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--first-name-disallowed",
              description:
                "Indicates a sequence of characters that match the user's first name of given name cannot be the password",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--last-name-disallowed",
              description:
                "Indicates a sequence of characters that match the user's last name of given name cannot be the password",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--user-name-disallowed",
              description:
                "Indicates a sequence of characters that match the username cannot be the password",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--disallowed-user-attribute-values",
              description:
                "List of User attributes whose values are not allowed in the password",
              args: { name: "json" },
            },
            {
              name: "--min-password-age",
              description:
                "Minimum time after which the user can resubmit the reset password request",
              args: { name: "integer" },
            },
            {
              name: "--password-expires-after",
              description:
                "The number of days after which the password expires automatically",
              args: { name: "integer" },
            },
            {
              name: "--password-expire-warning",
              description:
                "An integer indicating the number of days before which the user should be warned about password expiry",
              args: { name: "integer" },
            },
            {
              name: "--required-chars",
              description:
                "A String value whose contents indicate a set of characters that must appear, in any sequence",
              args: { name: "required-chars" },
            },
            {
              name: "--disallowed-chars",
              description:
                "A String value whose contents indicate a set of characters that cannot appear, in any sequence",
              args: { name: "disallowed-chars" },
            },
            {
              name: "--allowed-chars",
              description:
                "A String value whose contents indicate a set of characters that can appear, in any sequence",
              args: { name: "allowed-chars" },
            },
            {
              name: "--disallowed-substrings",
              description:
                "A String value whose contents indicate a set of substrings that cannot appear, in any sequence",
              args: { name: "json" },
            },
            {
              name: "--dictionary-word-disallowed",
              description:
                "Indicates whether the password can match a dictionary word",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--dictionary-location",
              description:
                "A Reference value that contains the URI of a dictionary of words not allowed to appear within a password value",
              args: { name: "dictionary-location" },
            },
            {
              name: "--dictionary-delimiter",
              description:
                "A delimiter used to separate characters in the dictionary file",
              args: { name: "dictionary-delimiter" },
            },
            {
              name: "--max-incorrect-attempts",
              description:
                "An integer that represents the maximum number of failed logins before an account is locked",
              args: { name: "integer" },
            },
            {
              name: "--lockout-duration",
              description:
                "The time period in minutes to lock out a user account when the threshold of invalid login attempts is reached",
              args: { name: "integer" },
            },
            {
              name: "--num-passwords-in-history",
              description:
                "The number of passwords that will be kept in history that may not be used as a password",
              args: { name: "integer" },
            },
            {
              name: "--password-strength",
              description:
                "Indicates whether the password policy is configured as Simple, Standard, or Custom",
              args: { suggestions: ["Simple", "Standard", "Custom"] },
            },
            {
              name: "--force-password-reset",
              description:
                "Indicates whether all of the users should be forced to reset their password on the next login",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--distinct-characters",
              description:
                "The number of distinct characters between old password and new password",
              args: { name: "integer" },
            },
            {
              name: "--priority",
              description: "Password policy priority",
              args: { name: "integer" },
            },
            {
              name: "--groups",
              description:
                "A list of groups that the password policy belongs to",
              args: { name: "json" },
            },
            {
              name: "--configured-password-policy-rules",
              description: "List of password policy rules that have values set",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "auth-tokens",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for Auth tokens",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for Auth tokens using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "smtp-credentials",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for SMTP credentials",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for SMTP credentials using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "account-mgmt-infos",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Account Mgmt Info",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Account Mgmt Info Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "identity-settings",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for Identity settings",
          options: [
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for Identity settings using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "approval-workflows",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search ApprovalWorkflow",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "my-request",
      description: "Request resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Request",
          options: [
            optSchemas2,
            {
              name: "--justification",
              description: "Justification",
              args: { name: "justification" },
              isRequired: true,
            },
            { name: "--requesting", args: { name: "json" }, isRequired: true },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--status",
              description: "Status",
              args: {
                suggestions: [
                  "CREATED",
                  "COMPLETE",
                  "IN_PROGRESS",
                  "APPROVED",
                  "REJECTED",
                  "CANCELED",
                  "EXPIRED",
                  "FAILED",
                ],
              },
            },
            {
              name: "--action",
              description:
                "Requestor can set action to CANCEL to cancel the request or to ESCALATE to escalate the request while",
              args: { suggestions: ["CANCEL", "ESCALATE"] },
            },
            {
              name: "--expires",
              description: "Time by when Request expires",
              args: { name: "expires" },
            },
            {
              name: "--approval-details",
              description: "Approvals created for this request",
              args: { name: "json" },
            },
            { name: "--requestor", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get My Requests",
          options: [
            {
              name: "--my-request-id",
              description: "ID of the resource",
              args: { name: "my-request-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update My Requests",
          options: [
            {
              name: "--my-request-id",
              description: "ID of the resource",
              args: { name: "my-request-id" },
              isRequired: true,
            },
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-question",
      description: "Security Question",
      subcommands: [
        {
          name: "create",
          description: "Create a security question",
          options: [
            optSchemas2,
            {
              name: "--active",
              description:
                "This indicates if the question is selected by the Security Admin and is available for the end user",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--type",
              description:
                "This indicates if the question is a Custom Question added by the Security Admin",
              args: { suggestions: ["default", "custom"] },
              isRequired: true,
            },
            {
              name: "--question-text",
              description: "Locale values for the Question",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a security question",
          options: [
            optSecurityQuestionId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a security question",
          options: [
            optSecurityQuestionId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a security question",
          options: [
            optSecurityQuestionId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "authentication-factor-settings",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Authentication Factor Settings",
          options: [
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Authentication Factor Settings Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "o-auth2-client-credential",
      description: "The user's OAuth2 client credentials",
      subcommands: [
        {
          name: "create",
          description: "Add a user's OAuth2 client credentials",
          options: [
            optSchemas2,
            {
              name: "--name",
              description: "Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--scopes",
              description: "Scopes",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optDescription,
            optStatus,
            {
              name: "--expires-on",
              description: "When the user's credentials expire",
              args: { name: "expires-on" },
            },
            {
              name: "--is-reset-secret",
              description: "Specifies whether the secret must be reset",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--secret",
              description: "Secret",
              args: { name: "secret" },
            },
            optUser,
            optExtSelfChangeUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's OAuth2 client credentials",
          options: [
            optOAuth2ClientCredentialId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's OAuth2 client credentials",
          options: [
            optOAuth2ClientCredentialId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a user's OAuth2 client credentials",
          options: [
            optOAuth2ClientCredentialId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-o-auth2-client-credentials",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for a user's own OAuth2 client credential",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "my-smtp-credential",
      description: "User's smtp credential",
      subcommands: [
        {
          name: "create",
          description: "Create a user's own SMTP credential",
          options: [
            optSchemas2,
            optUserName,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optDescription,
            optStatus2,
            {
              name: "--expires-on",
              description: "User credential expires",
              args: { name: "expires-on" },
            },
            optUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's own SMTP credential",
          options: [
            optMySmtpCredentialId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's own SMTP credential",
          options: [
            optMySmtpCredentialId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a user's own SMTP credential",
          options: [
            optMySmtpCredentialId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "dynamic-resource-group",
      description: "Schema for DynamicResourceGroup resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Dynamic Resource Group",
          options: [
            optSchemas2,
            {
              name: "--matching-rule",
              description:
                "Store as a string the matching-rule for this Dynamic Resource Group",
              args: { name: "matching-rule" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "User-friendly, mutable identifier",
              args: { name: "display-name" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--description",
              description:
                "Text that explains the purpose of this Dynamic Resource Group",
              args: { name: "description" },
            },
            {
              name: "--grants",
              description: "Grants assigned to group",
              args: { name: "json" },
            },
            {
              name: "--dynamic-group-app-roles",
              description:
                "A list of appRoles that are currently granted to this Dynamic Resource Group",
              args: { name: "json" },
            },
            optExtOciTags,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a Dynamic Resource Group",
          options: [
            optDynamicResourceGroupId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a Dynamic Resource Group",
          options: [
            optDynamicResourceGroupId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Dynamic Resource Group",
          options: [
            optDynamicResourceGroupId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a Dynamic Resource Group",
          options: [
            optDynamicResourceGroupId,
            optSchemas2,
            {
              name: "--matching-rule",
              description:
                "Store as a string the matching-rule for this Dynamic Resource Group",
              args: { name: "matching-rule" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "User-friendly, mutable identifier",
              args: { name: "display-name" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--description",
              description:
                "Text that explains the purpose of this Dynamic Resource Group",
              args: { name: "description" },
            },
            {
              name: "--grants",
              description: "Grants assigned to group",
              args: { name: "json" },
            },
            {
              name: "--dynamic-group-app-roles",
              description:
                "A list of appRoles that are currently granted to this Dynamic Resource Group",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optExtOciTags,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-completed-approval",
      description: "Schema for MyPendingApproval and MyCompletedApproval",
      subcommands: [
        {
          name: "get",
          description: "Get My MyCompletedApproval",
          options: [
            {
              name: "--my-completed-approval-id",
              description: "ID of the resource",
              args: { name: "my-completed-approval-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-user-db-credentials",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for a user's own database (DB) credential",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "me",
      description: "User Account",
      subcommands: [
        {
          name: "create",
          description: "Self register a user",
          options: [
            optSchemas2,
            optUserName,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            optDescription3,
            optDisplayName,
            optNickName,
            optProfileUrl,
            optTitle,
            optUserType,
            optLocale,
            optPreferredLanguage,
            optTimezone,
            optActive,
            optPassword,
            optName,
            optEmails,
            optPhoneNumbers,
            optIms,
            optPhotos,
            optAddresses,
            optGroups,
            optEntitlements,
            optRoles,
            optX509Certificates,
            {
              name: "--ext-me-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optExtEnterprise20User,
            optExtUserUser,
            optExtPasswordStateUser,
            optExtUserStateUser,
            optExtPosixUser,
            optExtMfaUser,
            optExtSecurityQuestionsUser,
            optExtSelfRegistrationUser,
            optExtTermsOfUseUser,
            optExtOciTags,
            optExtUserCredentialsUser,
            optExtCapabilitiesUser,
            optExtDbCredentialsUser,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's own information",
          options: [
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a user's own information",
          options: [
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a user's own information",
          options: [
            optSchemas2,
            optUserName,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            optDescription3,
            optDisplayName,
            optNickName,
            optProfileUrl,
            optTitle,
            optUserType,
            optLocale,
            optPreferredLanguage,
            optTimezone,
            optActive,
            optPassword,
            optName,
            optEmails,
            optPhoneNumbers,
            optIms,
            optPhotos,
            optAddresses,
            optGroups,
            optEntitlements,
            optRoles,
            optX509Certificates,
            optIfMatch,
            optForce2,
            {
              name: "--ext-me-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optExtEnterprise20User,
            optExtUserUser,
            optExtPasswordStateUser,
            optExtUserStateUser,
            optExtPosixUser,
            optExtMfaUser,
            optExtSecurityQuestionsUser,
            optExtSelfRegistrationUser,
            optExtTermsOfUseUser,
            optExtOciTags,
            optExtUserCredentialsUser,
            optExtCapabilitiesUser,
            optExtDbCredentialsUser,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "user-db-credential",
      description: "User's Database Credential",
      subcommands: [
        {
          name: "create",
          description: "Create a user's database (DB) credentials",
          options: [
            optSchemas2,
            {
              name: "--db-password",
              description: "The user's database password",
              args: { name: "db-password" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            { name: "--name", description: "Name", args: { name: "name" } },
            optDescription,
            {
              name: "--mixed-db-password",
              description: "The user's database password with mixed salt",
              args: { name: "mixed-db-password" },
            },
            {
              name: "--salt",
              description: "The salt of the password",
              args: { name: "salt" },
            },
            {
              name: "--mixed-salt",
              description: "The mixed salt of the password",
              args: { name: "mixed-salt" },
            },
            {
              name: "--last-set-date",
              description:
                "A DateTime that specifies the date and time when the current database password was set",
              args: { name: "last-set-date" },
            },
            {
              name: "--expired",
              description: "Indicates that the database password has expired",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optStatus2,
            {
              name: "--expires-on",
              description: "When the user credential expires",
              args: { name: "expires-on" },
            },
            optUser,
            optExtSelfChangeUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's database (DB) credentials",
          options: [
            {
              name: "--user-db-credential-id",
              description: "ID of the resource",
              args: { name: "user-db-credential-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's database (DB) credentials",
          options: [
            {
              name: "--user-db-credential-id",
              description: "ID of the resource",
              args: { name: "user-db-credential-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-gates",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Cloud Gates",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Cloud Gates Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "mapped-attribute",
      description: "Schema for MappedAttribute resource",
      subcommands: [
        {
          name: "get",
          description: "Get Attribute Mappings for a Mapped Attribute",
          options: [
            optMappedAttributeId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Search Mapped Attributes",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Mapped Attribute",
          options: [
            optMappedAttributeId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a Mapped Attribute",
          options: [
            optMappedAttributeId,
            optSchemas2,
            {
              name: "--idcs-resource-type",
              description:
                "The Oracle Identity Cloud Service Resource Type for which the mapping is being done",
              args: { suggestions: ["User", "Group", "Container"] },
              isRequired: true,
            },
            {
              name: "--ref-resource-type",
              description: "The Reference Resource Type that holds the mapping",
              args: {
                suggestions: [
                  "AccountObjectClass",
                  "App",
                  "ManagedObjectClass",
                  "IdentityProvider",
                ],
              },
              isRequired: true,
            },
            {
              name: "--ref-resource-id",
              description:
                "Soft Reference to store Resource ID that holds the mapping",
              args: { name: "ref-resource-id" },
              isRequired: true,
            },
            {
              name: "--direction",
              description:
                "Direction of the attribute mapping. inbound indicates mapping is from source ManagedObjectClass to Oracle",
              args: { suggestions: ["inbound", "outbound"] },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--attribute-mappings",
              description:
                "A list of attribute mappings between Oracle Identity Cloud Service Resource Type and Account Object Class",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Mapped Attributes Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "group",
      description: "The Group resource",
      subcommands: [
        {
          name: "create",
          description: "Create a group",
          options: [
            optSchemas2,
            {
              name: "--display-name",
              description: "The Group display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--non-unique-display-name",
              description:
                "A human readable name for the group as defined by the Service Consumer",
              args: { name: "non-unique-display-name" },
            },
            {
              name: "--members",
              description:
                "The group members. <b>Important:</b> When requesting group members",
              args: { name: "json" },
            },
            optExtOciTags,
            {
              name: "--ext-dbcs-group",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-dynamic-group",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-group-group",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-posix-group",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-requestable-group",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a group",
          options: [
            optGroupId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get a group. <b>Important:</b> The Group SEARCH and GET operations on users and members will throw",
          options: [
            optGroupId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a group",
          options: [
            optGroupId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a group",
          options: [
            optGroupId,
            optSchemas2,
            {
              name: "--display-name",
              description: "The Group display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--non-unique-display-name",
              description:
                "A human readable name for the group as defined by the Service Consumer",
              args: { name: "non-unique-display-name" },
            },
            {
              name: "--members",
              description:
                "The group members. <b>Important:</b> When requesting group members",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optExtOciTags,
            {
              name: "--ext-dbcs-group",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-dynamic-group",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-group-group",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-posix-group",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-requestable-group",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "social-identity-provider",
      description: "Social Identity Provider",
      subcommands: [
        {
          name: "create",
          description: "Create a Social Identity Provider",
          options: [
            optSchemas2,
            {
              name: "--name",
              description: "Social provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description: "Whether the IDP is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--account-linking-enabled",
              description: "Whether account linking is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--registration-enabled",
              description: "Whether registration is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--show-on-login",
              description: "Whether show on login",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--consumer-key",
              description: "Social IDP Client Application Client ID",
              args: { name: "consumer-key" },
              isRequired: true,
            },
            {
              name: "--consumer-secret",
              description: "Social IDP Client Application Client Secret",
              args: { name: "consumer-secret" },
              isRequired: true,
            },
            {
              name: "--service-provider-name",
              description: "Service Provider Name",
              args: { name: "service-provider-name" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--description",
              description: "Social IDP description",
              args: { name: "description" },
            },
            {
              name: "--social-jit-provisioning-enabled",
              description: "Whether Social JIT Provisioning is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-prov-group-static-list-enabled",
              description:
                "Set to true to indicate Social JIT User Provisioning Groups should be assigned from a static list",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-prov-assigned-groups",
              description:
                "Lists the groups each social JIT-provisioned user is a member",
              args: { name: "json" },
            },
            {
              name: "--auto-redirect-enabled",
              description: "Whether social auto redirect is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--status",
              description: "Status",
              args: { suggestions: ["created", "deleted"] },
            },
            {
              name: "--id-attribute",
              description: "Id attribute used for account linking",
              args: { name: "id-attribute" },
            },
            {
              name: "--authz-url",
              description: "Social IDP Authorization URL",
              args: { name: "authz-url" },
            },
            {
              name: "--access-token-url",
              description: "Social IDP Access token URL",
              args: { name: "access-token-url" },
            },
            {
              name: "--profile-url",
              description: "Social IDP User profile URL",
              args: { name: "profile-url" },
            },
            {
              name: "--scope",
              description: "Scope to request",
              args: { name: "json" },
            },
            {
              name: "--admin-scope",
              description: "Admin scope to request",
              args: { name: "json" },
            },
            {
              name: "--apple-dev-id",
              description: "Apple Developer ID",
              args: { name: "apple-dev-id" },
            },
            {
              name: "--apple-key-id",
              description: "Apple Private Key ID",
              args: { name: "apple-key-id" },
            },
            {
              name: "--clock-skew-in-seconds",
              description: "Social IDP allowed clock skew time",
              args: { name: "integer" },
            },
            {
              name: "--redirect-url",
              description: "Redirect URL for social idp",
              args: { name: "redirect-url" },
            },
            {
              name: "--icon-url",
              description: "ICON URL for social idp",
              args: { name: "icon-url" },
            },
            {
              name: "--discovery-url",
              description: "Discovery URL",
              args: { name: "discovery-url" },
            },
            {
              name: "--client-credential-in-payload",
              description:
                "Whether the client credential is contained in payload",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--refresh-token-url",
              description: "Social IDP Refresh token URL",
              args: { name: "refresh-token-url" },
            },
            {
              name: "--relay-idp-param-mappings",
              description: "Relay Param variable for Social IDP",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a Social Identity Provider",
          options: [
            optSocialIdentityProviderId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a Social Identity Provider",
          options: [
            optSocialIdentityProviderId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Search Social Identity Providers",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Social Identity Provider",
          options: [
            optSocialIdentityProviderId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a Social Identity Provider",
          options: [
            optSocialIdentityProviderId,
            optSchemas2,
            {
              name: "--name",
              description: "Social provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description: "Whether the IDP is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--account-linking-enabled",
              description: "Whether account linking is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--registration-enabled",
              description: "Whether registration is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--show-on-login",
              description: "Whether show on login",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--consumer-key",
              description: "Social IDP Client Application Client ID",
              args: { name: "consumer-key" },
              isRequired: true,
            },
            {
              name: "--consumer-secret",
              description: "Social IDP Client Application Client Secret",
              args: { name: "consumer-secret" },
              isRequired: true,
            },
            {
              name: "--service-provider-name",
              description: "Service Provider Name",
              args: { name: "service-provider-name" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--description",
              description: "Social IDP description",
              args: { name: "description" },
            },
            {
              name: "--social-jit-provisioning-enabled",
              description: "Whether Social JIT Provisioning is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-prov-group-static-list-enabled",
              description:
                "Set to true to indicate Social JIT User Provisioning Groups should be assigned from a static list",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-prov-assigned-groups",
              description:
                "Lists the groups each social JIT-provisioned user is a member",
              args: { name: "json" },
            },
            {
              name: "--auto-redirect-enabled",
              description: "Whether social auto redirect is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--status",
              description: "Status",
              args: { suggestions: ["created", "deleted"] },
            },
            {
              name: "--id-attribute",
              description: "Id attribute used for account linking",
              args: { name: "id-attribute" },
            },
            {
              name: "--authz-url",
              description: "Social IDP Authorization URL",
              args: { name: "authz-url" },
            },
            {
              name: "--access-token-url",
              description: "Social IDP Access token URL",
              args: { name: "access-token-url" },
            },
            {
              name: "--profile-url",
              description: "Social IDP User profile URL",
              args: { name: "profile-url" },
            },
            {
              name: "--scope",
              description: "Scope to request",
              args: { name: "json" },
            },
            {
              name: "--admin-scope",
              description: "Admin scope to request",
              args: { name: "json" },
            },
            {
              name: "--apple-dev-id",
              description: "Apple Developer ID",
              args: { name: "apple-dev-id" },
            },
            {
              name: "--apple-key-id",
              description: "Apple Private Key ID",
              args: { name: "apple-key-id" },
            },
            {
              name: "--clock-skew-in-seconds",
              description: "Social IDP allowed clock skew time",
              args: { name: "integer" },
            },
            {
              name: "--redirect-url",
              description: "Redirect URL for social idp",
              args: { name: "redirect-url" },
            },
            {
              name: "--icon-url",
              description: "ICON URL for social idp",
              args: { name: "icon-url" },
            },
            {
              name: "--discovery-url",
              description: "Discovery URL",
              args: { name: "discovery-url" },
            },
            {
              name: "--client-credential-in-payload",
              description:
                "Whether the client credential is contained in payload",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--refresh-token-url",
              description: "Social IDP Refresh token URL",
              args: { name: "refresh-token-url" },
            },
            {
              name: "--relay-idp-param-mappings",
              description: "Relay Param variable for Social IDP",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Social Identity Providers Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "network-perimeters",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search NetworkPerimeters",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search NetworkPerimeters Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "settings",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Settings",
          options: [
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Settings Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "o-auth-client-certificates",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search OAuth Client Certificates",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search OAuth Client Certificates Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-gate",
      description: "Resource representing a Cloud Gate",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Gate",
          options: [
            optSchemas2,
            {
              name: "--display-name",
              description: "Display name/Host identifier for this Cloud Gate",
              args: { name: "display-name" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optIsOpcService,
            {
              name: "--last-modified-time",
              description:
                "Last updated timestamp for this CloudGate's servers and mappings",
              args: { name: "last-modified-time" },
            },
            optDescription2,
            {
              name: "--active",
              description: "Activation status for this Cloud Gate",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--type",
              description: "Type of Cloud Gate",
              args: { suggestions: ["lbaas", "gateway"] },
            },
            {
              name: "--upstream-server-groups",
              description: "A list of upstream server groups",
              args: { name: "json" },
            },
            {
              name: "--upstream-servers",
              description: "A list of upstream servers",
              args: { name: "json" },
            },
            { name: "--oauth-client", args: { name: "json" } },
            {
              name: "--servers",
              description: "A list of Server Blocks on this Cloud Gate",
              args: { name: "json" },
            },
            {
              name: "--mappings",
              description:
                "A list of Cloud Gate Mappings that map Apps to this Cloud Gate",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a Cloud Gate",
          options: [
            optCloudGateId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a Cloud Gate",
          options: [
            optCloudGateId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Cloud Gate",
          options: [
            optCloudGateId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a Cloud Gate",
          options: [
            optCloudGateId,
            optSchemas2,
            {
              name: "--display-name",
              description: "Display name/Host identifier for this Cloud Gate",
              args: { name: "display-name" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optIsOpcService,
            {
              name: "--last-modified-time",
              description:
                "Last updated timestamp for this CloudGate's servers and mappings",
              args: { name: "last-modified-time" },
            },
            optDescription2,
            {
              name: "--active",
              description: "Activation status for this Cloud Gate",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--type",
              description: "Type of Cloud Gate",
              args: { suggestions: ["lbaas", "gateway"] },
            },
            {
              name: "--upstream-server-groups",
              description: "A list of upstream server groups",
              args: { name: "json" },
            },
            {
              name: "--upstream-servers",
              description: "A list of upstream servers",
              args: { name: "json" },
            },
            { name: "--oauth-client", args: { name: "json" } },
            {
              name: "--servers",
              description: "A list of Server Blocks on this Cloud Gate",
              args: { name: "json" },
            },
            {
              name: "--mappings",
              description:
                "A list of Cloud Gate Mappings that map Apps to this Cloud Gate",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "restore-oci-console-policy",
      description: "Schema to restoring OCI Console Policy to Factory Defaults",
      subcommands: [
        {
          name: "create",
          description:
            "Create a RestoreOciConsolePolicy entry to restore Policy to factory default",
          options: [
            {
              name: "--schemas",
              description:
                "SCIM++ Properties: - caseExact: false - idcsSearchable: false - multiValued: true - mutability: readWrite",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--consent",
              description:
                "SCIM++ Properties: - idcsSearchable: false - multiValued: false - required: true - mutability: writeOnly",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--reason",
              description:
                "SCIM++ Properties: - idcsSearchable: false - multiValued: false - mutability: writeOnly - required: true",
              args: { name: "reason" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            {
              name: "--id",
              description:
                "SCIM++ Properties: - caseExact: false - idcsSearchable: true - multiValued: false - mutability: readOnly",
              args: { name: "id" },
            },
            {
              name: "--ocid",
              description:
                "SCIM++ Properties: - caseExact: true - idcsSearchable: true - multiValued: false - mutability: immutable",
              args: { name: "ocid" },
            },
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            {
              name: "--idcs-prevented-operations",
              description:
                "SCIM++ Properties: - idcsSearchable: false - multiValued: true - mutability: readOnly - required: false",
              args: { suggestions: ["replace", "update", "delete"] },
            },
            {
              name: "--tags",
              description:
                "SCIM++ Properties: - idcsCompositeKey: key, value - idcsCsvAttributeNameMappings: [columnHeaderName:Tag Key",
              args: { name: "json" },
            },
            {
              name: "--delete-in-progress",
              description:
                "SCIM++ Properties: - caseExact: false - idcsSearchable: true - multiValued: false - mutability: readOnly",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--idcs-last-upgraded-in-release",
              description:
                "SCIM++ Properties: - caseExact: false - idcsSearchable: false - multiValued: false - mutability: readOnly",
              args: { name: "idcs-last-upgraded-in-release" },
            },
            {
              name: "--domain-ocid",
              description:
                "SCIM++ Properties: - caseExact: false - idcsSearchable: false - multiValued: false - mutability: readOnly",
              args: { name: "domain-ocid" },
            },
            {
              name: "--compartment-ocid",
              description:
                "SCIM++ Properties: - caseExact: false - idcsSearchable: false - multiValued: false - mutability: readOnly",
              args: { name: "compartment-ocid" },
            },
            {
              name: "--tenancy-ocid",
              description:
                "SCIM++ Properties: - caseExact: false - idcsSearchable: false - multiValued: false - mutability: readOnly",
              args: { name: "tenancy-ocid" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "identity-proofing-provider-template",
      description:
        "Maintains a registered Collection of Identity Proofing vendors list",
      subcommands: [
        {
          name: "create",
          description:
            "Create an Identity Proofing Provider Configuration template",
          options: [
            optSchemas2,
            {
              name: "--provider",
              description: "Name of the Identity Proofing Provider",
              args: { name: "provider" },
              isRequired: true,
            },
            {
              name: "--verification-url",
              description: "Verification URL",
              args: { name: "verification-url" },
              isRequired: true,
            },
            {
              name: "--service-type",
              description:
                "Service type supported by the Identity Proofing Provider",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optIdcsLockedOperations,
            optIdcsLockedBy,
            optIdcsLockedOn,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid2,
            optCompartmentOcid2,
            optTenancyOcid2,
            {
              name: "--configuration",
              description: "Proofing Provider Configuration Template",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete an IdentityProofingProvider",
          options: [
            optIdentityProofingProviderTemplateId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get Identity Proofing Provider Configuration template",
          options: [
            optIdentityProofingProviderTemplateId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Search Identity Proofing Provider Configuration templates",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description:
            "Update an Identity Proofing Provider Configuration template",
          options: [
            optIdentityProofingProviderTemplateId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description:
            "Replace an Identity Proofing Provider Configuration template",
          options: [
            optIdentityProofingProviderTemplateId,
            optSchemas2,
            {
              name: "--provider",
              description: "Name of the Identity Proofing Provider",
              args: { name: "provider" },
              isRequired: true,
            },
            {
              name: "--verification-url",
              description: "Verification URL",
              args: { name: "verification-url" },
              isRequired: true,
            },
            {
              name: "--service-type",
              description:
                "Service type supported by the Identity Proofing Provider",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optIdcsLockedOperations,
            optIdcsLockedBy,
            optIdcsLockedOn,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid2,
            optCompartmentOcid2,
            optTenancyOcid2,
            {
              name: "--configuration",
              description: "Proofing Provider Configuration Template",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-gate-mappings",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Cloud Gate mappings",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Cloud Gate mappings Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "users",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for users",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for users using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-pending-approvals",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search My Approvals",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "condition",
      description: "Condition resource",
      subcommands: [
        {
          name: "create",
          description: "Create a condition",
          options: [
            optSchemas2,
            {
              name: "--name",
              description: "Condition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--attribute-name",
              description: "AttributeName - RHS of condition",
              args: { name: "attribute-name" },
              isRequired: true,
            },
            {
              name: "--operator",
              description:
                "SCIM++ Properties: - caseExact: true - idcsSearchable: false - multiValued: false - mutability: readWrite",
              args: {
                suggestions: [
                  "eq",
                  "ne",
                  "co",
                  "coany",
                  "sw",
                  "ew",
                  "gt",
                  "ge",
                  "lt",
                  "le",
                  "in",
                  "nin",
                ],
              },
              isRequired: true,
            },
            {
              name: "--attribute-value",
              description: "AttributeValue - RHS of condition",
              args: { name: "attribute-value" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--description",
              description: "Condition Description",
              args: { name: "description" },
            },
            {
              name: "--evaluate-condition-if",
              description:
                "Evaluate the condition if this expression returns true, else skip condition evaluation",
              args: { name: "evaluate-condition-if" },
            },
            optUrnietfparamsscimschemasoracleidcsextensionociconsolesignonpolicyconsentPolicy,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a condition",
          options: [
            optConditionId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a condition",
          options: [
            optConditionId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Search conditions",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a condition",
          options: [
            optConditionId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a condition",
          options: [
            optConditionId,
            optSchemas2,
            {
              name: "--name",
              description: "Condition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--attribute-name",
              description: "AttributeName - RHS of condition",
              args: { name: "attribute-name" },
              isRequired: true,
            },
            {
              name: "--operator",
              description:
                "SCIM++ Properties: - caseExact: true - idcsSearchable: false - multiValued: false - mutability: readWrite",
              args: {
                suggestions: [
                  "eq",
                  "ne",
                  "co",
                  "coany",
                  "sw",
                  "ew",
                  "gt",
                  "ge",
                  "lt",
                  "le",
                  "in",
                  "nin",
                ],
              },
              isRequired: true,
            },
            {
              name: "--attribute-value",
              description: "AttributeValue - RHS of condition",
              args: { name: "attribute-value" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--description",
              description: "Condition Description",
              args: { name: "description" },
            },
            {
              name: "--evaluate-condition-if",
              description:
                "Evaluate the condition if this expression returns true, else skip condition evaluation",
              args: { name: "evaluate-condition-if" },
            },
            optUrnietfparamsscimschemasoracleidcsextensionociconsolesignonpolicyconsentPolicy,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Conditions Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-smtp-credentials",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for a user's own SMTP credential",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "my-o-auth2-client-credential",
      description: "The user's OAuth2 client credentials",
      subcommands: [
        {
          name: "create",
          description: "Create a user's own OAuth2 client credential",
          options: [
            optSchemas2,
            {
              name: "--name",
              description: "Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--scopes",
              description: "Scopes",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optDescription,
            optStatus,
            {
              name: "--expires-on",
              description: "When the user's credentials expire",
              args: { name: "expires-on" },
            },
            {
              name: "--is-reset-secret",
              description: "Specifies whether the secret must be reset",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's own OAuth2 client credential",
          options: [
            optMyOAuth2ClientCredentialId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's own OAuth2 client credential",
          options: [
            optMyOAuth2ClientCredentialId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a user's own OAuth2 client credential",
          options: [
            optMyOAuth2ClientCredentialId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "schemas",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Schemas",
          options: [
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Schemas Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "me-password-changer",
      description: "The schema used for a user changing their own password",
      subcommands: [
        {
          name: "put",
          description: "Update a user's own password",
          options: [
            optSchemas2,
            {
              name: "--password",
              description: "Password attribute",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--old-password",
              description: "The old password attribute",
              args: { name: "old-password" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "authentication-factor-setting",
      description: "Multi Factor Authentication Settings for Tenant",
      subcommands: [
        {
          name: "get",
          description: "Get Authentication Factor Settings",
          options: [
            {
              name: "--authentication-factor-setting-id",
              description: "ID of the resource",
              args: { name: "authentication-factor-setting-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace Authentication Factor Settings",
          options: [
            {
              name: "--authentication-factor-setting-id",
              description: "ID of the resource",
              args: { name: "authentication-factor-setting-id" },
              isRequired: true,
            },
            optSchemas2,
            {
              name: "--sms-enabled",
              description:
                "If true, indicates that the Short Message Service (SMS) channel is enabled for authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--totp-enabled",
              description:
                "If true, indicates that the Mobile App One Time Passcode channel is enabled for authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--push-enabled",
              description:
                "If true, indicates that the Mobile App Push Notification channel is enabled for authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--bypass-code-enabled",
              description:
                "If true, indicates that Bypass Code is enabled for authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--security-questions-enabled",
              description:
                "If true, indicates that Security Questions are enabled for authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--mfa-enrollment-type",
              description:
                "Specifies if Multi-Factor Authentication enrollment is mandatory or optional for a user",
              args: { name: "mfa-enrollment-type" },
              isRequired: true,
            },
            {
              name: "--notification-settings",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--bypass-code-settings",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--client-app-settings",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--endpoint-restrictions",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--compliance-policy",
              description:
                "Compliance Policy that defines actions to be taken when a condition is violated",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--totp-settings",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--email-enabled",
              description:
                "If true, indicates that the EMAIL channel is enabled for authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--phone-call-enabled",
              description:
                "If true, indicates that the phone (PHONE_CALL) channel is enabled for authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--fido-authenticator-enabled",
              description:
                "If true, indicates that the Fido Authenticator channels are enabled for authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--yubico-otp-enabled",
              description:
                "If true, indicates that the Yubico OTP is enabled for authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--mfa-enabled-category",
              description:
                "Specifies the category of people for whom Multi-Factor Authentication is enabled",
              args: { name: "mfa-enabled-category" },
            },
            {
              name: "--hide-backup-factor-enabled",
              description:
                "If true, indicates that 'Show backup factor(s)' button will be hidden during authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--auto-enroll-email-factor-disabled",
              description:
                "If true, indicates that email will not be enrolled as a MFA factor automatically if it a account recovery",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--user-enrollment-disabled-factors",
              description:
                "Factors for which enrollment should be blocked for End User",
              args: {
                suggestions: [
                  "EMAIL",
                  "SMS",
                  "TOTP",
                  "PUSH",
                  "OFFLINETOTP",
                  "VOICE",
                  "PHONE_CALL",
                  "THIRDPARTY",
                  "FIDO_AUTHENTICATOR",
                  "YUBICO_OTP",
                ],
              },
            },
            { name: "--email-settings", args: { name: "json" } },
            optThirdPartyFactor,
            { name: "--identity-store-settings", args: { name: "json" } },
            optIfMatch,
            optForce2,
            {
              name: "--ext-third-party-authentication-factor-settings",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-fido-authentication-factor-settings",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-authentication-factor-validator",
      description: "Validate any given Authentication Factor",
      subcommands: [
        {
          name: "create",
          description:
            "Validate Self Service Enrollment using the Requested MFA Factor",
          options: [
            optSchemas2,
            {
              name: "--auth-factor",
              description: "Authentication Factor which is being validated",
              args: {
                suggestions: [
                  "USERNAME_PASSWORD",
                  "PUSH",
                  "TOTP",
                  "EMAIL",
                  "SMS",
                  "VOICE",
                  "BYPASSCODE",
                  "SECURITY_QUESTIONS",
                  "TRUST_TOKEN",
                  "PHONE_CALL",
                  "THIRDPARTY",
                  "FIDO_AUTHENTICATOR",
                  "YUBICO_OTP",
                  "KMSI_TOKEN",
                ],
              },
              isRequired: true,
            },
            {
              name: "--scenario",
              description:
                "Specifies whether the service is being used to enroll or validate a factor",
              args: { suggestions: ["ENROLLMENT", "AUTHENTICATION"] },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--request-id",
              description: "Request ID which is being validated",
              args: { name: "request-id" },
            },
            {
              name: "--otp-code",
              description: "The One Time Passcode which needs to be validated",
              args: { name: "otp-code" },
            },
            {
              name: "--device-id",
              description: "Device id whose factor is being validated",
              args: { name: "device-id" },
            },
            {
              name: "--status",
              description: "Validation status returned in the response",
              args: { suggestions: ["SUCCESS", "FAILURE"] },
            },
            {
              name: "--user-id",
              description: "User guid for whom the validation has initiated",
              args: { name: "user-id" },
            },
            {
              name: "--user-name",
              description: "User name for whom the validation has initiated",
              args: { name: "user-name" },
            },
            {
              name: "--display-name",
              description: "Display name of the verified device",
              args: { name: "display-name" },
            },
            {
              name: "--message",
              description: "Validator message which is passed by the client",
              args: { name: "message" },
            },
            {
              name: "--type",
              description: "Type indicating whether the flow is OIDC, SAML etc",
              args: { suggestions: ["SAML", "OIDC"] },
            },
            {
              name: "--update-user-preference",
              description:
                "Indicates whether to update user preferred mfa factor or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--preference-type",
              description:
                "Indicates whether to user passwordless factor to be updated or mfa factor to be updated",
              args: { suggestions: ["PASSWORDLESS", "MFA"] },
            },
            {
              name: "--security-questions",
              description:
                "List of security questions the user has submitted to get authenticated",
              args: { name: "json" },
            },
            {
              name: "--name",
              description: "Name of the client to be trusted",
              args: { name: "name" },
            },
            {
              name: "--platform",
              description: "Platform of the client to be trusted",
              args: { name: "platform" },
            },
            {
              name: "--location",
              description: "Location of the trusted client",
              args: { name: "location" },
            },
            {
              name: "--trusted-token-id",
              description: "Trusted token resource identifier",
              args: { name: "trusted-token-id" },
            },
            {
              name: "--kmsi-token-id",
              description: "KMSI token resource identifier",
              args: { name: "kmsi-token-id" },
            },
            {
              name: "--policy-enabled-second-factors",
              description: "Sign-On Policy dictated allowed second factors",
              args: { name: "json" },
            },
            {
              name: "--create-trusted-agent",
              description: "Indicates to create trust token",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--create-kmsi-token",
              description: "Indicates to create kmsi token",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--is-acc-rec-enabled",
              description:
                "Flag indicates whether the factor is enrolled in account recovery",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--policy-trusted-frequency-mins",
              description:
                "Sign-On Policy dictated validity duration for trusted client in Minutes",
              args: { name: "integer" },
            },
            optThirdPartyFactor,
            {
              name: "--additional-attributes",
              description:
                "Additional attributes which will be sent as part of a push notification",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "self-registration-profile",
      description: "Self Registration Profile",
      subcommands: [
        {
          name: "create",
          description: "Create a self-registration profile",
          options: [
            optSchemas2,
            {
              name: "--name",
              description: "Name of the profile",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--activation-email-required",
              description:
                "SCIM++ Properties: - caseExact: false - idcsSearchable: true - multiValued: false - mutability: readWrite",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--number-of-days-redirect-url-is-valid",
              description: "Number of days redirect URL is valid",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--show-on-login-page",
              description:
                "A Boolean value that indicates whether the profile should be displayed on login page",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--redirect-url",
              description:
                "This URL will be replaced in email notification sent to user",
              args: { name: "redirect-url" },
              isRequired: true,
            },
            {
              name: "--consent-text-present",
              description:
                "A boolean value that indicates whether the consent text is present",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Registration page name",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--email-template",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--active",
              description:
                "A Boolean value that indicates whether the profile is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--allowed-email-domains",
              description:
                "A Multivalue String value for Email domains which are valid for this profile",
              args: { name: "json" },
            },
            {
              name: "--disallowed-email-domains",
              description:
                "A Multivalue String Value for Email domains to be handled as exceptions",
              args: { name: "json" },
            },
            {
              name: "--header-logo",
              description: "Reference to header logo",
              args: { name: "header-logo" },
            },
            {
              name: "--footer-logo",
              description: "References to footer logo",
              args: { name: "footer-logo" },
            },
            {
              name: "--after-submit-text",
              description:
                "Text to be displayed on UI after doing self registration",
              args: { name: "json" },
            },
            {
              name: "--user-attributes",
              description:
                "SCIM++ Properties: - idcsCompositeKey: value - idcsSearchable: true - multiValued: true - mutability",
              args: { name: "json" },
            },
            {
              name: "--default-groups",
              description: "Default groups assigned to the user",
              args: { name: "json" },
            },
            {
              name: "--header-text",
              description: "Header text",
              args: { name: "json" },
            },
            {
              name: "--footer-text",
              description: "Footer text",
              args: { name: "json" },
            },
            {
              name: "--consent-text",
              description: "Consent text",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a self-registration profile",
          options: [
            optSelfRegistrationProfileId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a self-registration profile",
          options: [
            optSelfRegistrationProfileId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a self-registration profile",
          options: [
            optSelfRegistrationProfileId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a self-registration profile",
          options: [
            optSelfRegistrationProfileId,
            optSchemas2,
            {
              name: "--name",
              description: "Name of the profile",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--activation-email-required",
              description:
                "SCIM++ Properties: - caseExact: false - idcsSearchable: true - multiValued: false - mutability: readWrite",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--number-of-days-redirect-url-is-valid",
              description: "Number of days redirect URL is valid",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--show-on-login-page",
              description:
                "A Boolean value that indicates whether the profile should be displayed on login page",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--redirect-url",
              description:
                "This URL will be replaced in email notification sent to user",
              args: { name: "redirect-url" },
              isRequired: true,
            },
            {
              name: "--consent-text-present",
              description:
                "A boolean value that indicates whether the consent text is present",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Registration page name",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--email-template",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--active",
              description:
                "A Boolean value that indicates whether the profile is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--allowed-email-domains",
              description:
                "A Multivalue String value for Email domains which are valid for this profile",
              args: { name: "json" },
            },
            {
              name: "--disallowed-email-domains",
              description:
                "A Multivalue String Value for Email domains to be handled as exceptions",
              args: { name: "json" },
            },
            {
              name: "--header-logo",
              description: "Reference to header logo",
              args: { name: "header-logo" },
            },
            {
              name: "--footer-logo",
              description: "References to footer logo",
              args: { name: "footer-logo" },
            },
            {
              name: "--after-submit-text",
              description:
                "Text to be displayed on UI after doing self registration",
              args: { name: "json" },
            },
            {
              name: "--user-attributes",
              description:
                "SCIM++ Properties: - idcsCompositeKey: value - idcsSearchable: true - multiValued: true - mutability",
              args: { name: "json" },
            },
            {
              name: "--default-groups",
              description: "Default groups assigned to the user",
              args: { name: "json" },
            },
            {
              name: "--header-text",
              description: "Header text",
              args: { name: "json" },
            },
            {
              name: "--footer-text",
              description: "Footer text",
              args: { name: "json" },
            },
            {
              name: "--consent-text",
              description: "Consent text",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-authentication-factor-initiator",
      description: "This schema defines the attributes of Initiator call",
      subcommands: [
        {
          name: "create",
          description:
            "Initiate Self Service Enrollment using the Requested MFA Factor",
          options: [
            optSchemas2,
            {
              name: "--auth-factor",
              description:
                "Auth Factor represents the type of multi-factor authentication channel for which the request has been",
              args: {
                suggestions: [
                  "EMAIL",
                  "TOTP",
                  "PUSH",
                  "SMS",
                  "VOICE",
                  "PHONE_CALL",
                  "THIRDPARTY",
                  "FIDO_AUTHENTICATOR",
                  "YUBICO_OTP",
                ],
              },
              isRequired: true,
            },
            {
              name: "--device-id",
              description:
                "Enrolled Device id on which the multi factor has been initiated",
              args: { name: "device-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--type",
              description: "Authentication flow type either SAML / OIDC",
              args: { suggestions: ["SAML", "OIDC"] },
            },
            {
              name: "--request-id",
              description:
                "Unique RequestId generated for each initiator request",
              args: { name: "request-id" },
            },
            {
              name: "--user-name",
              description: "Name of the user who initiates the request",
              args: { name: "user-name" },
            },
            {
              name: "--scenario",
              description: "Specifies the scenario to initiate",
              args: { suggestions: ["ENROLLMENT", "AUTHENTICATION"] },
            },
            optThirdPartyFactor,
            {
              name: "--preference-type",
              description:
                "Indicates whether to user passwordless factor to be updated or mfa factor to be updated",
              args: { suggestions: ["PASSWORDLESS", "MFA"] },
            },
            {
              name: "--additional-attributes",
              description:
                "Additional attributes which will be sent as part of a push notification",
              args: { name: "json" },
            },
            {
              name: "--is-acc-rec-enabled",
              description:
                "Flag indicates whether the device is enrolled in account recovery",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "notification-settings",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Notification Settings",
          options: [
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Notification Settings Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "rule",
      description: "Rule resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Rule",
          options: [
            optSchemas2,
            {
              name: "--name",
              description: "Rule name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--condition",
              description: "SCIM filters",
              args: { name: "condition" },
              isRequired: true,
            },
            optPolicyType,
            {
              name: "---return",
              description: "The return values are the then portion of a Rule",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--description",
              description: "Rule Description",
              args: { name: "description" },
            },
            {
              name: "--active",
              description: "If true, rule is active",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--locked",
              description: "Shows if the rule is locked",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--rule-groovy",
              description:
                "The Groovy script that is run instead of the rule, if policy type allows the rule to be a Groovy script",
              args: { name: "rule-groovy" },
            },
            { name: "--condition-group", args: { name: "json" } },
            optUrnietfparamsscimschemasoracleidcsextensionociconsolesignonpolicyconsentPolicy,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a Rule",
          options: [
            optRuleId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a Rule",
          options: [
            optRuleId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Search Rules",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Rule",
          options: [
            optRuleId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a Rule",
          options: [
            optRuleId,
            optSchemas2,
            {
              name: "--name",
              description: "Rule name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--condition",
              description: "SCIM filters",
              args: { name: "condition" },
              isRequired: true,
            },
            optPolicyType,
            {
              name: "---return",
              description: "The return values are the then portion of a Rule",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--description",
              description: "Rule Description",
              args: { name: "description" },
            },
            {
              name: "--active",
              description: "If true, rule is active",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--locked",
              description: "Shows if the rule is locked",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--rule-groovy",
              description:
                "The Groovy script that is run instead of the rule, if policy type allows the rule to be a Groovy script",
              args: { name: "rule-groovy" },
            },
            { name: "--condition-group", args: { name: "json" } },
            optUrnietfparamsscimschemasoracleidcsextensionociconsolesignonpolicyconsentPolicy,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Rules Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "user-status-changer",
      description: "Schema to handle user status change by administrator",
      subcommands: [
        {
          name: "put",
          description: "Change a user's status",
          options: [
            {
              name: "--user-status-changer-id",
              description: "ID of the resource",
              args: { name: "user-status-changer-id" },
              isRequired: true,
            },
            optSchemas2,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            optActive,
            optIfMatch,
            optForce2,
            optExtSelfChangeUser,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-apps",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search My Apps",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search My Apps Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "notification-setting",
      description: "Notification resource",
      subcommands: [
        {
          name: "get",
          description: "Get Notification Settings",
          options: [
            {
              name: "--notification-setting-id",
              description: "ID of the resource",
              args: { name: "notification-setting-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace Notification Settings",
          options: [
            {
              name: "--notification-setting-id",
              description: "ID of the resource",
              args: { name: "notification-setting-id" },
              isRequired: true,
            },
            optSchemas2,
            {
              name: "--notification-enabled",
              description: "Tenant level settings for the notification service",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            {
              name: "--from-email-address",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--event-settings",
              description: "Event settings",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--test-mode-enabled",
              description:
                "Specify if the notification service is in test mode",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--test-recipients",
              description: "List of the test recipient email addresses",
              args: { name: "json" },
            },
            {
              name: "--send-notifications-to-secondary-email",
              description:
                "Indicates whether to allow notifications on a secondary email",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--send-notification-to-old-and-new-primary-emails-when-admin-changes-primary-email",
              description:
                "If true and admin changed user's primary email, send user's profile changed email to old and new primary",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-customer-secret-keys",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for a user's own customer secret key",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "cloud-gate-server",
      description: "Resource representing a Cloud Gate server block",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Gate server",
          options: [
            optSchemas2,
            {
              name: "--display-name",
              description: "Display name for the Server block",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--host-name",
              description: "Hostname for the Server block",
              args: { name: "host-name" },
              isRequired: true,
            },
            {
              name: "--port",
              description: "Port for the Server Block",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--ssl",
              description: "SSL flag for the Server Block",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optCloudGate,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optIsOpcService,
            {
              name: "--description",
              description: "Brief description for this Cloud Gate server block",
              args: { name: "description" },
            },
            {
              name: "--nginx-settings",
              description: "More nginx Settings",
              args: { name: "nginx-settings" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a Cloud Gate server",
          options: [
            optCloudGateServerId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a Cloud Gate server",
          options: [
            optCloudGateServerId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Cloud Gate server",
          options: [
            optCloudGateServerId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a Cloud Gate server",
          options: [
            optCloudGateServerId,
            optSchemas2,
            {
              name: "--display-name",
              description: "Display name for the Server block",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--host-name",
              description: "Hostname for the Server block",
              args: { name: "host-name" },
              isRequired: true,
            },
            {
              name: "--port",
              description: "Port for the Server Block",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--ssl",
              description: "SSL flag for the Server Block",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optCloudGate,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optIsOpcService,
            {
              name: "--description",
              description: "Brief description for this Cloud Gate server block",
              args: { name: "description" },
            },
            {
              name: "--nginx-settings",
              description: "More nginx Settings",
              args: { name: "nginx-settings" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "branding-settings",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Branding Settings",
          options: [
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "kmsi-setting",
      description: "Kmsi Settings schema",
      subcommands: [
        {
          name: "get",
          description: "Get KmsiSettings",
          options: [
            optKmsiSettingId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Setting",
          options: [
            optKmsiSettingId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace KmsiSettings",
          options: [
            optKmsiSettingId,
            optSchemas2,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--token-validity-in-days",
              description: "Identifier represents validity duration in days",
              args: { name: "integer" },
            },
            {
              name: "--last-used-validity-in-days",
              description:
                "Identifier represents duration in days within which kmsi token must be used",
              args: { name: "integer" },
            },
            {
              name: "--max-allowed-sessions",
              description:
                "Identifier represents maximum KMSI sessions allowed in the system",
              args: { name: "integer" },
            },
            {
              name: "--kmsi-feature-enabled",
              description:
                "Identifier represents KMSI feature is enabled or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--kmsi-prompt-enabled",
              description:
                "Identifier represents KMSI to be prompted to user or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--tou-prompt-disabled",
              description:
                "Identifier represents whether user is prompted for ToU or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--last-enabled-on",
              description:
                "Timestamp of when the KmsiSettings was enabled last time",
              args: { name: "last-enabled-on" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "approval-workflow-assignment",
      description: "Schema for ApprovalWorkflowAssignment",
      subcommands: [
        {
          name: "create",
          description: "Create Approval Workflow Assignment",
          options: [
            optSchemas2,
            {
              name: "--assignment-type",
              description:
                "Type of approval workflow assignment to the resource",
              args: { suggestions: ["MEMBERSHIP", "ACTIVATION"] },
              isRequired: true,
            },
            {
              name: "--approval-workflow",
              args: { name: "json" },
              isRequired: true,
            },
            { name: "--assigned-to", args: { name: "json" }, isRequired: true },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete Approval Workflow Assignment",
          options: [
            {
              name: "--approval-workflow-assignment-id",
              description: "ID of the resource",
              args: { name: "approval-workflow-assignment-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get an Approval Workflow Assignment",
          options: [
            {
              name: "--approval-workflow-assignment-id",
              description: "ID of the resource",
              args: { name: "approval-workflow-assignment-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "smtp-credential",
      description: "User's smtp credential",
      subcommands: [
        {
          name: "create",
          description: "Create a user's SMTP credentials",
          options: [
            optSchemas2,
            optUserName,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optDescription,
            optStatus2,
            {
              name: "--expires-on",
              description: "User credential expires",
              args: { name: "expires-on" },
            },
            {
              name: "--password",
              description: "Password",
              args: { name: "password" },
            },
            optUser,
            optExtSelfChangeUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's SMTP credentials",
          options: [
            optSmtpCredentialId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's SMTP credentials",
          options: [
            optSmtpCredentialId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a user's SMTP credentials",
          options: [
            optSmtpCredentialId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-trusted-user-agent",
      description:
        "This schema defines the attributes of Trusted User Agents owned by users",
      subcommands: [
        {
          name: "delete",
          description: "Delete a Trusted User Agent",
          options: [
            {
              name: "--my-trusted-user-agent-id",
              description: "ID of the resource",
              args: { name: "my-trusted-user-agent-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a Trusted User Agent",
          options: [
            {
              name: "--my-trusted-user-agent-id",
              description: "ID of the resource",
              args: { name: "my-trusted-user-agent-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-question-setting",
      description: "Security Question Settings",
      subcommands: [
        {
          name: "get",
          description: "Get a security question setting",
          options: [
            optSecurityQuestionSettingId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a security question setting",
          options: [
            optSecurityQuestionSettingId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a security question setting",
          options: [
            optSecurityQuestionSettingId,
            optSchemas2,
            {
              name: "--num-questions-to-setup",
              description:
                "Indicates the number of security questions a user must setup",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--min-answer-length",
              description:
                "Indicates the minimum length of answer for security questions",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--max-field-length",
              description:
                "Indicates the maximum length of following fields Security Questions, Answer and Hint",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--num-questions-to-ans",
              description:
                "Indicates the number of security questions that a user must answer",
              args: { name: "integer" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "approval-workflow-assignments",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Approval Workflow Assignments",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "app-roles",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search AppRoles",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search AppRoles Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "account-mgmt-info",
      description: "Schema for AccountMgmtInfo resource",
      subcommands: [
        {
          name: "get",
          description: "Get Account Mgmt Info",
          options: [
            {
              name: "--account-mgmt-info-id",
              description: "ID of the resource",
              args: { name: "account-mgmt-info-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "grants",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Grants",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Grants Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "app-status-changer",
      description: "Schema for AppStatusChanger resource",
      subcommands: [
        {
          name: "put",
          description: "Activate/Deactivate an App",
          options: [
            {
              name: "--app-status-changer-id",
              description: "ID of the resource",
              args: { name: "app-status-changer-id" },
              isRequired: true,
            },
            optSchemas2,
            {
              name: "--active",
              description: "Application status",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "approval-workflow-steps",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search ApprovalWorkflowStep",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "cloud-gate-mapping",
      description: "Resource representing a Cloud Gate mapping",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Gate mapping",
          options: [
            optSchemas2,
            {
              name: "--resource-prefix",
              description: "Resource prefix for this mapping",
              args: { name: "resource-prefix" },
              isRequired: true,
            },
            {
              name: "--policy-name",
              description:
                "The Web Tier policy name used for the App that is mapped to the owning Cloud Gate",
              args: { name: "policy-name" },
              isRequired: true,
            },
            { name: "--server", args: { name: "json" }, isRequired: true },
            { name: "--gateway-app", args: { name: "json" }, isRequired: true },
            optCloudGate,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optIsOpcService,
            optDescription2,
            {
              name: "--proxy-pass",
              description: "NGINX ProxyPass entry for this Mapping",
              args: { name: "proxy-pass" },
            },
            {
              name: "--nginx-settings",
              description: "More NGINX Settings",
              args: { name: "nginx-settings" },
            },
            { name: "--upstream-server-group", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a Cloud Gate mapping",
          options: [
            optCloudGateMappingId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a Cloud Gate mapping",
          options: [
            optCloudGateMappingId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Cloud Gate mapping",
          options: [
            optCloudGateMappingId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a Cloud Gate mapping",
          options: [
            optCloudGateMappingId,
            optSchemas2,
            {
              name: "--resource-prefix",
              description: "Resource prefix for this mapping",
              args: { name: "resource-prefix" },
              isRequired: true,
            },
            {
              name: "--policy-name",
              description:
                "The Web Tier policy name used for the App that is mapped to the owning Cloud Gate",
              args: { name: "policy-name" },
              isRequired: true,
            },
            { name: "--server", args: { name: "json" }, isRequired: true },
            { name: "--gateway-app", args: { name: "json" }, isRequired: true },
            optCloudGate,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optIsOpcService,
            optDescription2,
            {
              name: "--proxy-pass",
              description: "NGINX ProxyPass entry for this Mapping",
              args: { name: "proxy-pass" },
            },
            {
              name: "--nginx-settings",
              description: "More NGINX Settings",
              args: { name: "nginx-settings" },
            },
            { name: "--upstream-server-group", args: { name: "json" } },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-trusted-user-agents",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Trusted User Agents",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "customer-secret-key",
      description: "The user's customer secret key",
      subcommands: [
        {
          name: "create",
          description: "Create a user's customer secret key",
          options: [
            optSchemas2,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--display-name",
              description: "Display Name",
              args: { name: "display-name" },
            },
            optDescription,
            optStatus,
            optExpiresOn,
            {
              name: "--access-key",
              description: "The access key",
              args: { name: "access-key" },
            },
            {
              name: "--secret-key",
              description: "The secret key",
              args: { name: "secret-key" },
            },
            optUser,
            optExtSelfChangeUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's customer secret key",
          options: [
            optCustomerSecretKeyId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's customer secret key",
          options: [
            optCustomerSecretKeyId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a user's customer secret key",
          options: [
            optCustomerSecretKeyId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-auth-token",
      description: "The user's Auth token resource",
      subcommands: [
        {
          name: "create",
          description: "Create a user's own Auth token",
          options: [
            optSchemas2,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optDescription,
            optStatus,
            optExpiresOn,
            optUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's own Auth token",
          options: [
            optMyAuthTokenId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's own Auth token",
          options: [
            optMyAuthTokenId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a user's own Auth token",
          options: [
            optMyAuthTokenId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "groups",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description:
            "Search for groups. <b>Important:</b> The Group SEARCH and GET operations on users and members will throw",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for groups using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "o-auth-partner-certificates",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search OAuth Partner Certificates",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search OAuth Partner Certificates Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "security-question-settings",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for security question settings",
          options: [
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for security question settings using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "user-capabilities-changer",
      description: "User Capabilities Changer",
      subcommands: [
        {
          name: "put",
          description: "Change a user's capabilities",
          options: [
            {
              name: "--user-capabilities-changer-id",
              description: "ID of the resource",
              args: { name: "user-capabilities-changer-id" },
              isRequired: true,
            },
            optSchemas2,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--can-use-api-keys",
              description: "Indicates whether a user can use API keys",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-auth-tokens",
              description: "Indicates whether a user can use Auth tokens",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-console-password",
              description: "Indicates whether a user can use Console passwords",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-customer-secret-keys",
              description:
                "Indicates whether a user can use customer secret keys",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-o-auth2-client-credentials",
              description:
                "Indicates whether a user can use OAuth2 client credentials",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-smtp-credentials",
              description: "Indicates whether a user can use SMTP credentials",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-db-credentials",
              description:
                "Indicates whether a user can use database credentials",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--can-use-console",
              description: "Indicates whether a user can use the Console",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optForce2,
            optExtSelfChangeUser,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-support-account",
      description: "Support Provider Account",
      subcommands: [
        {
          name: "create",
          description: "Create a user's own support account",
          options: [
            optSchemas2,
            {
              name: "--token",
              description: "User Support Account Token",
              args: { name: "token" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--provider",
              description: "User Support Account Provider",
              args: { suggestions: ["MOS"] },
            },
            {
              name: "--user-id",
              description: "User Support User Id",
              args: { name: "user-id" },
            },
            optUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's own support account",
          options: [
            {
              name: "--my-support-account-id",
              description: "ID of the resource",
              args: { name: "my-support-account-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's own support account",
          options: [
            {
              name: "--my-support-account-id",
              description: "ID of the resource",
              args: { name: "my-support-account-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "identity-proofing-provider",
      description: "Manage Identity Proofing Providers",
      subcommands: [
        {
          name: "create",
          description: "Create an IdentityProofingProvider",
          options: [
            optSchemas2,
            {
              name: "--provider",
              description: "The Identity Proofing Provider",
              args: { name: "provider" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the Identity Proofing Provider",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--configuration",
              description: "Configure the verification provider",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--claim-mapping",
              description:
                "Configure the verification claims and IAM Domain user attribute mapping",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            {
              name: "--ocid",
              description: "Unique OCI identifier (OCID) for the SCIM Resource",
              args: { name: "ocid" },
            },
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optIdcsLockedOperations,
            optIdcsLockedBy,
            optIdcsLockedOn,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid2,
            optCompartmentOcid2,
            optTenancyOcid2,
            {
              name: "--description",
              description:
                "Description field to add comments and additional information about the Identity Proofing Provider",
              args: { name: "description" },
            },
            {
              name: "--status",
              description: "Status of the Identity Proofing Provider",
              args: { suggestions: ["INACTIVE", "ACTIVE"] },
            },
            {
              name: "--runtime-data",
              description: "Identity Proofing runtime custom data",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete an IdentityProofingProvider",
          options: [
            optIdentityProofingProviderId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get an IdentityProofingProvider",
          options: [
            optIdentityProofingProviderId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Search IdentityProofingProvider",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update an IdentityProofingProvider",
          options: [
            optIdentityProofingProviderId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace an IdentityProofingProvider",
          options: [
            optIdentityProofingProviderId,
            optSchemas2,
            {
              name: "--provider",
              description: "The Identity Proofing Provider",
              args: { name: "provider" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the Identity Proofing Provider",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--configuration",
              description: "Configure the verification provider",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--claim-mapping",
              description:
                "Configure the verification claims and IAM Domain user attribute mapping",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            {
              name: "--ocid",
              description: "Unique OCI identifier (OCID) for the SCIM Resource",
              args: { name: "ocid" },
            },
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optIdcsLockedOperations,
            optIdcsLockedBy,
            optIdcsLockedOn,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid2,
            optCompartmentOcid2,
            optTenancyOcid2,
            {
              name: "--description",
              description:
                "Description field to add comments and additional information about the Identity Proofing Provider",
              args: { name: "description" },
            },
            {
              name: "--status",
              description: "Status of the Identity Proofing Provider",
              args: { suggestions: ["INACTIVE", "ACTIVE"] },
            },
            {
              name: "--runtime-data",
              description: "Identity Proofing runtime custom data",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search IdentityProofingProvider Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "identity-provider",
      description: "Federation trusted partner Identity Provider",
      subcommands: [
        {
          name: "create",
          description: "Create an Identity Provider",
          options: [
            optSchemas2,
            {
              name: "--partner-name",
              description: "Unique name of the trusted Identity Provider",
              args: { name: "partner-name" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description: "Set to true to indicate Partner enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            optDescription,
            {
              name: "--metadata",
              description: "Metadata",
              args: { name: "metadata" },
            },
            {
              name: "--partner-provider-id",
              description: "Provider ID",
              args: { name: "partner-provider-id" },
            },
            {
              name: "--tenant-provider-id",
              description:
                "The alternate Provider ID to be used as the Oracle Identity Cloud Service providerID",
              args: { name: "tenant-provider-id" },
            },
            {
              name: "--succinct-id",
              description: "Succinct ID",
              args: { name: "succinct-id" },
            },
            {
              name: "--idp-sso-url",
              description: "Identity Provider SSO URL",
              args: { name: "idp-sso-url" },
            },
            {
              name: "--logout-request-url",
              description: "Logout request URL",
              args: { name: "logout-request-url" },
            },
            {
              name: "--logout-response-url",
              description: "Logout response URL",
              args: { name: "logout-response-url" },
            },
            {
              name: "--signing-certificate",
              description: "Signing certificate",
              args: { name: "signing-certificate" },
            },
            {
              name: "--encryption-certificate",
              description: "Encryption certificate",
              args: { name: "encryption-certificate" },
            },
            {
              name: "--name-id-format",
              description: "Default authentication request name ID format",
              args: { name: "name-id-format" },
            },
            {
              name: "--include-signing-cert-in-signature",
              description:
                "Set to true to include the signing certificate in the signature",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--authn-request-binding",
              description: "HTTP binding to use for authentication requests",
              args: { suggestions: ["Redirect", "Post"] },
            },
            {
              name: "--logout-binding",
              description: "HTTP binding to use for logout",
              args: { suggestions: ["Redirect", "Post"] },
            },
            {
              name: "--logout-enabled",
              description: "Set to true to enable logout",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--signature-hash-algorithm",
              description: "Signature hash algorithm",
              args: { suggestions: ["SHA-1", "SHA-256"] },
            },
            {
              name: "--icon-url",
              description: "Identity Provider Icon URL",
              args: { name: "icon-url" },
            },
            {
              name: "--shown-on-login-page",
              description:
                "Set to true to indicate whether to show IdP in login page or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-user-prov-enabled",
              description:
                "Set to true to indicate JIT User Provisioning is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-user-prov-group-assertion-attribute-enabled",
              description:
                "Set to true to indicate JIT User Provisioning Groups should be assigned based on assertion attribute",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-user-prov-group-static-list-enabled",
              description:
                "Set to true to indicate JIT User Provisioning Groups should be assigned from a static list",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-user-prov-create-user-enabled",
              description:
                "Set to true to indicate JIT User Creation is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-user-prov-attribute-update-enabled",
              description:
                "Set to true to indicate JIT User Creation is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-user-prov-group-assignment-method",
              description:
                "The default value is 'Overwrite', which tells Just-In-Time user-provisioning to replace any current",
              args: { suggestions: ["Overwrite", "Merge"] },
            },
            {
              name: "--jit-user-prov-group-mapping-mode",
              description: "Property to indicate the mode of group mapping",
              args: { suggestions: ["implicit", "explicit"] },
            },
            {
              name: "--jit-user-prov-group-saml-attribute-name",
              description:
                "Name of the assertion attribute containing the users groups",
              args: { name: "jit-user-prov-group-saml-attribute-name" },
            },
            {
              name: "--service-instance-identifier",
              description:
                "The serviceInstanceIdentifier of the App that hosts this IdP",
              args: { name: "service-instance-identifier" },
            },
            {
              name: "--user-mapping-method",
              description: "User mapping method",
              args: {
                suggestions: [
                  "NameIDToUserAttribute",
                  "AssertionAttributeToUserAttribute",
                  "CorrelationPolicyRule",
                ],
              },
            },
            {
              name: "--user-mapping-store-attribute",
              description:
                "This property specifies the userstore attribute value that must match the incoming assertion attribute value",
              args: { name: "user-mapping-store-attribute" },
            },
            {
              name: "--assertion-attribute",
              description: "Assertion attribute name",
              args: { name: "assertion-attribute" },
            },
            {
              name: "--type",
              description: "Identity Provider Type",
              args: { suggestions: ["SAML", "SOCIAL", "IWA", "X509", "LOCAL"] },
            },
            {
              name: "--require-force-authn",
              description:
                "This SP requires requests SAML IdP to enforce re-authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--requires-encrypted-assertion",
              description: "SAML SP must accept encrypted assertion only",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--saml-ho-k-required",
              description: "SAML SP HoK Enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--requested-authentication-context",
              description: "SAML SP authentication type",
              args: { name: "json" },
            },
            {
              name: "--jit-user-prov-ignore-error-on-absent-groups",
              description:
                "Set to true to indicate ignoring absence of group while provisioning",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--last-notification-sent-time",
              description:
                "Records the notification timestamp for the IdP whose signing certificate is about to expire",
              args: { name: "last-notification-sent-time" },
            },
            {
              name: "--jit-user-prov-group-mappings",
              description:
                "The list of mappings between the Identity Domain Group and the IDP group",
              args: { name: "json" },
            },
            { name: "--jit-user-prov-attributes", args: { name: "json" } },
            {
              name: "--jit-user-prov-assigned-groups",
              description:
                "Refers to every group of which a JIT-provisioned User should be a member",
              args: { name: "json" },
            },
            { name: "--correlation-policy", args: { name: "json" } },
            {
              name: "--ext-social-identity-provider",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-x509-identity-provider",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete an Identity Provider",
          options: [
            optIdentityProviderId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get an Identity Provider",
          options: [
            optIdentityProviderId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update an Identity Provider",
          options: [
            optIdentityProviderId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace an Identity Provider",
          options: [
            optIdentityProviderId,
            optSchemas2,
            {
              name: "--partner-name",
              description: "Unique name of the trusted Identity Provider",
              args: { name: "partner-name" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description: "Set to true to indicate Partner enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            optDescription,
            {
              name: "--metadata",
              description: "Metadata",
              args: { name: "metadata" },
            },
            {
              name: "--partner-provider-id",
              description: "Provider ID",
              args: { name: "partner-provider-id" },
            },
            {
              name: "--tenant-provider-id",
              description:
                "The alternate Provider ID to be used as the Oracle Identity Cloud Service providerID",
              args: { name: "tenant-provider-id" },
            },
            {
              name: "--succinct-id",
              description: "Succinct ID",
              args: { name: "succinct-id" },
            },
            {
              name: "--idp-sso-url",
              description: "Identity Provider SSO URL",
              args: { name: "idp-sso-url" },
            },
            {
              name: "--logout-request-url",
              description: "Logout request URL",
              args: { name: "logout-request-url" },
            },
            {
              name: "--logout-response-url",
              description: "Logout response URL",
              args: { name: "logout-response-url" },
            },
            {
              name: "--signing-certificate",
              description: "Signing certificate",
              args: { name: "signing-certificate" },
            },
            {
              name: "--encryption-certificate",
              description: "Encryption certificate",
              args: { name: "encryption-certificate" },
            },
            {
              name: "--name-id-format",
              description: "Default authentication request name ID format",
              args: { name: "name-id-format" },
            },
            {
              name: "--include-signing-cert-in-signature",
              description:
                "Set to true to include the signing certificate in the signature",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--authn-request-binding",
              description: "HTTP binding to use for authentication requests",
              args: { suggestions: ["Redirect", "Post"] },
            },
            {
              name: "--logout-binding",
              description: "HTTP binding to use for logout",
              args: { suggestions: ["Redirect", "Post"] },
            },
            {
              name: "--logout-enabled",
              description: "Set to true to enable logout",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--signature-hash-algorithm",
              description: "Signature hash algorithm",
              args: { suggestions: ["SHA-1", "SHA-256"] },
            },
            {
              name: "--icon-url",
              description: "Identity Provider Icon URL",
              args: { name: "icon-url" },
            },
            {
              name: "--shown-on-login-page",
              description:
                "Set to true to indicate whether to show IdP in login page or not",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-user-prov-enabled",
              description:
                "Set to true to indicate JIT User Provisioning is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-user-prov-group-assertion-attribute-enabled",
              description:
                "Set to true to indicate JIT User Provisioning Groups should be assigned based on assertion attribute",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-user-prov-group-static-list-enabled",
              description:
                "Set to true to indicate JIT User Provisioning Groups should be assigned from a static list",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-user-prov-create-user-enabled",
              description:
                "Set to true to indicate JIT User Creation is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-user-prov-attribute-update-enabled",
              description:
                "Set to true to indicate JIT User Creation is enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--jit-user-prov-group-assignment-method",
              description:
                "The default value is 'Overwrite', which tells Just-In-Time user-provisioning to replace any current",
              args: { suggestions: ["Overwrite", "Merge"] },
            },
            {
              name: "--jit-user-prov-group-mapping-mode",
              description: "Property to indicate the mode of group mapping",
              args: { suggestions: ["implicit", "explicit"] },
            },
            {
              name: "--jit-user-prov-group-saml-attribute-name",
              description:
                "Name of the assertion attribute containing the users groups",
              args: { name: "jit-user-prov-group-saml-attribute-name" },
            },
            {
              name: "--service-instance-identifier",
              description:
                "The serviceInstanceIdentifier of the App that hosts this IdP",
              args: { name: "service-instance-identifier" },
            },
            {
              name: "--user-mapping-method",
              description: "User mapping method",
              args: {
                suggestions: [
                  "NameIDToUserAttribute",
                  "AssertionAttributeToUserAttribute",
                  "CorrelationPolicyRule",
                ],
              },
            },
            {
              name: "--user-mapping-store-attribute",
              description:
                "This property specifies the userstore attribute value that must match the incoming assertion attribute value",
              args: { name: "user-mapping-store-attribute" },
            },
            {
              name: "--assertion-attribute",
              description: "Assertion attribute name",
              args: { name: "assertion-attribute" },
            },
            {
              name: "--type",
              description: "Identity Provider Type",
              args: { suggestions: ["SAML", "SOCIAL", "IWA", "X509", "LOCAL"] },
            },
            {
              name: "--require-force-authn",
              description:
                "This SP requires requests SAML IdP to enforce re-authentication",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--requires-encrypted-assertion",
              description: "SAML SP must accept encrypted assertion only",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--saml-ho-k-required",
              description: "SAML SP HoK Enabled",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--requested-authentication-context",
              description: "SAML SP authentication type",
              args: { name: "json" },
            },
            {
              name: "--jit-user-prov-ignore-error-on-absent-groups",
              description:
                "Set to true to indicate ignoring absence of group while provisioning",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--last-notification-sent-time",
              description:
                "Records the notification timestamp for the IdP whose signing certificate is about to expire",
              args: { name: "last-notification-sent-time" },
            },
            {
              name: "--jit-user-prov-group-mappings",
              description:
                "The list of mappings between the Identity Domain Group and the IDP group",
              args: { name: "json" },
            },
            { name: "--jit-user-prov-attributes", args: { name: "json" } },
            {
              name: "--jit-user-prov-assigned-groups",
              description:
                "Refers to every group of which a JIT-provisioned User should be a member",
              args: { name: "json" },
            },
            { name: "--correlation-policy", args: { name: "json" } },
            optIfMatch,
            optForce2,
            {
              name: "--ext-social-identity-provider",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-x509-identity-provider",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "api-key",
      description: "The user's API key",
      subcommands: [
        {
          name: "create",
          description: "Create a user's API key",
          options: [
            optSchemas2,
            {
              name: "--fingerprint",
              description: "Fingerprint",
              args: { name: "fingerprint" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Key",
              args: { name: "key" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optDescription,
            optUser,
            optExtSelfChangeUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's API key",
          options: [
            optApiKeyId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's API key",
          options: [
            optApiKeyId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a user's API key",
          options: [
            optApiKeyId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "oci-console-sign-on-policy-consent",
      description:
        'The "Security Policy for OCI Console" sign-on policy consent resource used to record consents',
      subcommands: [
        {
          name: "get",
          description: "Get a OciConsoleSignOnPolicyConsent Entry",
          options: [
            {
              name: "--oci-console-sign-on-policy-consent-id",
              description: "ID of the resource",
              args: { name: "oci-console-sign-on-policy-consent-id" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Search OciConsoleSignOnPolicyConsent entries",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search OciConsoleSignOnPolicyConsents Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-groups",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for 'My Groups'",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search for 'My Groups' using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "account-recovery-settings",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search for account recovery settings",
          options: [
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
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
      name: "auth-token",
      description: "The user's Auth token resource",
      subcommands: [
        {
          name: "create",
          description: "Create a user's Auth token",
          options: [
            optSchemas2,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optDescription,
            { name: "--token", description: "Token", args: { name: "token" } },
            optStatus,
            optExpiresOn,
            optUser,
            optExtSelfChangeUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user's Auth token",
          options: [
            optAuthTokenId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user's Auth token",
          options: [
            optAuthTokenId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a user's Auth token",
          options: [
            optAuthTokenId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "grant",
      description: "Schema for Grant Resource",
      subcommands: [
        {
          name: "create",
          description: "Add a Grantee to an AppRole",
          options: [
            optSchemas2,
            {
              name: "--grant-mechanism",
              description:
                "Each value of grantMechanism indicates how (or by what component) some App (or App-Entitlement) was granted",
              args: {
                suggestions: [
                  "IMPORT_APPROLE_MEMBERS",
                  "ADMINISTRATOR_TO_USER",
                  "ADMINISTRATOR_TO_DELEGATED_USER",
                  "ADMINISTRATOR_TO_GROUP",
                  "SERVICE_MANAGER_TO_USER",
                  "ADMINISTRATOR_TO_APP",
                  "SERVICE_MANAGER_TO_APP",
                  "OPC_INFRA_TO_APP",
                  "GROUP_MEMBERSHIP",
                  "IMPORT_GRANTS",
                  "SYNC_TO_USER",
                  "ACCESS_REQUEST",
                  "APP_ENTITLEMENT_COLLECTION",
                  "ADMINISTRATOR_TO_DYNAMIC_RESOURCE_GROUP",
                ],
              },
              isRequired: true,
            },
            { name: "--grantee", args: { name: "json" }, isRequired: true },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--composite-key",
              description:
                "Unique key of grant, composed by combining a subset of app, entitlement, grantee, grantor and grantMechanism",
              args: { name: "composite-key" },
            },
            {
              name: "--is-fulfilled",
              description:
                "If true, this Grant has been fulfilled successfully",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--granted-attribute-values-json",
              description:
                "Store granted attribute-values as a string in Javascript Object Notation (JSON) format",
              args: { name: "granted-attribute-values-json" },
            },
            { name: "--app-entitlement-collection", args: { name: "json" } },
            { name: "--grantor", args: { name: "json" } },
            { name: "--app", args: { name: "json" } },
            { name: "--entitlement", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Remove a Grantee from an AppRole",
          options: [
            optGrantId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a Grant",
          options: [
            optGrantId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a Grant",
          options: [
            optGrantId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "my-requests",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search My Requests",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search My Requests Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "approval-workflow",
      description: "Schema for ApprovalWorkflow",
      subcommands: [
        {
          name: "create",
          description: "Create ApprovalWorkflow",
          options: [
            optSchemas2,
            {
              name: "--name",
              description: "Name of the ApprovalWorkflow",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--max-duration",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--description",
              description: "Description of the ApprovalWorkflow",
              args: { name: "description" },
            },
            {
              name: "--approval-workflow-steps",
              description:
                "ApprovalWorkflowSteps applicable for the ApprovalWorkflowInstance",
              args: { name: "json" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete ApprovalWorkflow",
          options: [
            optApprovalWorkflowId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get ApprovalWorkflow",
          options: [
            optApprovalWorkflowId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update ApprovalWorkflow",
          options: [
            optApprovalWorkflowId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace ApprovalWorkflow",
          options: [
            optApprovalWorkflowId,
            optSchemas2,
            {
              name: "--name",
              description: "Name of the ApprovalWorkflow",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--max-duration",
              args: { name: "json" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--description",
              description: "Description of the ApprovalWorkflow",
              args: { name: "description" },
            },
            {
              name: "--approval-workflow-steps",
              description:
                "ApprovalWorkflowSteps applicable for the ApprovalWorkflowInstance",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "identity-propagation-trust",
      description: "Schema used for Identity Propagation Trust",
      subcommands: [
        {
          name: "create",
          description:
            "Register a new Identity Propagation Trust configuration",
          options: [
            optSchemas2,
            {
              name: "--name",
              description: "The name of the Identity Propagation Trust",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--type",
              description:
                "The type of the inbound token from the Identity cloud provider",
              args: { suggestions: ["JWT", "SAML", "SPNEGO", "AWS", "X509"] },
              isRequired: true,
            },
            {
              name: "--issuer",
              description: "The issuer claim of the Identity provider",
              args: { name: "issuer" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--description",
              description: "The description of the Identity Propagation Trust",
              args: { name: "description" },
            },
            {
              name: "--account-id",
              description:
                "The Identity cloud provider service identifier, for example, the Azure Tenancy ID, AWS Account ID",
              args: { name: "account-id" },
            },
            {
              name: "--subject-claim-name",
              description:
                "Used for locating the subject claim from the incoming token",
              args: { name: "subject-claim-name" },
            },
            {
              name: "--subject-mapping-attribute",
              description:
                "Subject Mapping Attribute to which the value from subject claim name value would be used for identity lookup",
              args: { name: "subject-mapping-attribute" },
            },
            {
              name: "--subject-type",
              description:
                "The type of the resource against which lookup will be made in the identity domain in IAM for the incoming",
              args: { suggestions: ["User", "App", "Resource"] },
            },
            {
              name: "--client-claim-name",
              description:
                "The claim name that identifies to whom the JWT/SAML token is issued",
              args: { name: "client-claim-name" },
            },
            {
              name: "--client-claim-values",
              description:
                "The value that corresponds to the client claim name used to identify to whom the token is issued",
              args: { name: "json" },
            },
            {
              name: "--active",
              description:
                "If true, specifies that this Identity Propagation Trust is in an enabled state",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--public-key-endpoint",
              description:
                "The cloud provider's public key API of SAML and OIDC providers for signature validation",
              args: { name: "public-key-endpoint" },
            },
            {
              name: "--public-certificate",
              description: "Store the public key if public key cert",
              args: { name: "public-certificate" },
            },
            {
              name: "--oauth-clients",
              description: "The value of all the authorized OAuth Clients",
              args: { name: "json" },
            },
            {
              name: "--allow-impersonation",
              description:
                "Allow customers to define whether the resulting token should contain the authenticated user as the subject",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--clock-skew-seconds",
              description:
                "The clock skew (in secs) that's allowed for the token issue and expiry time",
              args: { name: "integer" },
            },
            {
              name: "--impersonating-resource",
              description:
                "Defines the external workload that acts as impersonating resource principal",
              args: { name: "impersonating-resource" },
            },
            {
              name: "--claim-validations",
              description: "A list of claim validations",
              args: { name: "json" },
            },
            {
              name: "--claim-propagations",
              description: "A list of claims to propagate in RPST",
              args: { name: "json" },
            },
            { name: "--ca-cert-chain", args: { name: "json" } },
            {
              name: "--impersonation-service-users",
              description: "The Impersonating Principal",
              args: { name: "json" },
            },
            { name: "--keytab", args: { name: "json" } },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Delete an existing Identity Propagation Trust configuration",
          options: [
            optIdentityPropagationTrustId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Get an existing Identity Propagation Trust configuration",
          options: [
            optIdentityPropagationTrustId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "List the Identity Propagation Trust configurations",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description:
            "Update an existing Identity Propagation Trust configuration",
          options: [
            optIdentityPropagationTrustId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description:
            "Replace an existing Identity Propagation Trust configuration",
          options: [
            optIdentityPropagationTrustId,
            optSchemas2,
            {
              name: "--name",
              description: "The name of the Identity Propagation Trust",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--type",
              description:
                "The type of the inbound token from the Identity cloud provider",
              args: { suggestions: ["JWT", "SAML", "SPNEGO", "AWS", "X509"] },
              isRequired: true,
            },
            {
              name: "--issuer",
              description: "The issuer claim of the Identity provider",
              args: { name: "issuer" },
              isRequired: true,
            },
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            {
              name: "--description",
              description: "The description of the Identity Propagation Trust",
              args: { name: "description" },
            },
            {
              name: "--account-id",
              description:
                "The Identity cloud provider service identifier, for example, the Azure Tenancy ID, AWS Account ID",
              args: { name: "account-id" },
            },
            {
              name: "--subject-claim-name",
              description:
                "Used for locating the subject claim from the incoming token",
              args: { name: "subject-claim-name" },
            },
            {
              name: "--subject-mapping-attribute",
              description:
                "Subject Mapping Attribute to which the value from subject claim name value would be used for identity lookup",
              args: { name: "subject-mapping-attribute" },
            },
            {
              name: "--subject-type",
              description:
                "The type of the resource against which lookup will be made in the identity domain in IAM for the incoming",
              args: { suggestions: ["User", "App", "Resource"] },
            },
            {
              name: "--client-claim-name",
              description:
                "The claim name that identifies to whom the JWT/SAML token is issued",
              args: { name: "client-claim-name" },
            },
            {
              name: "--client-claim-values",
              description:
                "The value that corresponds to the client claim name used to identify to whom the token is issued",
              args: { name: "json" },
            },
            {
              name: "--active",
              description:
                "If true, specifies that this Identity Propagation Trust is in an enabled state",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--public-key-endpoint",
              description:
                "The cloud provider's public key API of SAML and OIDC providers for signature validation",
              args: { name: "public-key-endpoint" },
            },
            {
              name: "--public-certificate",
              description: "Store the public key if public key cert",
              args: { name: "public-certificate" },
            },
            {
              name: "--oauth-clients",
              description: "The value of all the authorized OAuth Clients",
              args: { name: "json" },
            },
            {
              name: "--allow-impersonation",
              description:
                "Allow customers to define whether the resulting token should contain the authenticated user as the subject",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--clock-skew-seconds",
              description:
                "The clock skew (in secs) that's allowed for the token issue and expiry time",
              args: { name: "integer" },
            },
            {
              name: "--impersonating-resource",
              description:
                "Defines the external workload that acts as impersonating resource principal",
              args: { name: "impersonating-resource" },
            },
            {
              name: "--claim-validations",
              description: "A list of claim validations",
              args: { name: "json" },
            },
            {
              name: "--claim-propagations",
              description: "A list of claims to propagate in RPST",
              args: { name: "json" },
            },
            { name: "--ca-cert-chain", args: { name: "json" } },
            {
              name: "--impersonation-service-users",
              description: "The Impersonating Principal",
              args: { name: "json" },
            },
            { name: "--keytab", args: { name: "json" } },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "user",
      description: "User Account",
      subcommands: [
        {
          name: "create",
          description: "Create a user",
          options: [
            optSchemas2,
            optUserName,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            optDescription3,
            optDisplayName,
            optNickName,
            optProfileUrl,
            optTitle,
            optUserType,
            optLocale,
            optPreferredLanguage,
            optTimezone,
            optActive,
            optPassword,
            optName,
            optEmails,
            optPhoneNumbers,
            optIms,
            optPhotos,
            optAddresses,
            optGroups,
            optEntitlements,
            optRoles,
            optX509Certificates,
            optExtEnterprise20User,
            optExtOciTags,
            {
              name: "--ext-adaptive-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optExtCapabilitiesUser,
            optExtDbCredentialsUser,
            {
              name: "--ext-db-user-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-kerberos-user-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optExtMfaUser,
            optExtPasswordStateUser,
            {
              name: "--ext-passwordless-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optExtPosixUser,
            optExtSecurityQuestionsUser,
            optExtSelfChangeUser,
            optExtSelfRegistrationUser,
            {
              name: "--ext-sff-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-social-account-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optExtTermsOfUseUser,
            optExtUserCredentialsUser,
            optExtUserStateUser,
            optExtUserUser,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Delete a user",
          options: [
            optUserId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optForceDelete,
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Get a user",
          options: [
            optUserId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update a user",
          options: [
            optUserId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace a user",
          options: [
            optUserId,
            optSchemas2,
            optUserName,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            optDescription3,
            optDisplayName,
            optNickName,
            optProfileUrl,
            optTitle,
            optUserType,
            optLocale,
            optPreferredLanguage,
            optTimezone,
            optActive,
            optPassword,
            optName,
            optEmails,
            optPhoneNumbers,
            optIms,
            optPhotos,
            optAddresses,
            optGroups,
            optEntitlements,
            optRoles,
            optX509Certificates,
            optIfMatch,
            optForce2,
            optExtEnterprise20User,
            optExtOciTags,
            {
              name: "--ext-adaptive-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optExtCapabilitiesUser,
            optExtDbCredentialsUser,
            {
              name: "--ext-db-user-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-kerberos-user-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optExtMfaUser,
            optExtPasswordStateUser,
            {
              name: "--ext-passwordless-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optExtPosixUser,
            optExtSecurityQuestionsUser,
            optExtSelfChangeUser,
            optExtSelfRegistrationUser,
            {
              name: "--ext-sff-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            {
              name: "--ext-social-account-user",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
            },
            optExtTermsOfUseUser,
            optExtUserCredentialsUser,
            optExtUserStateUser,
            optExtUserUser,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "cloud-gate-servers",
      description:
        "The SCIM protocol defines a standard set of query parameters that can be used to filter, sort",
      subcommands: [
        {
          name: "list",
          description: "Search Cloud Gate servers",
          options: [
            optFilter,
            optSortBy,
            optSortOrder,
            optStartIndex,
            optCount,
            optAttributes,
            optAttributeSets,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optPage,
            optLimit,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "search",
          description: "Search Cloud Gate servers Using POST",
          options: [
            optSchemas,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes2,
            optAttributeSets2,
            optFilter2,
            optSortBy2,
            optSortOrder,
            optStartIndex2,
            optCount2,
            optPage,
            optLimit,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "identity-setting",
      description: "Identity Settings",
      subcommands: [
        {
          name: "get",
          description: "Get an Identity setting",
          options: [
            optIdentitySettingId,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description: "Update an Identity setting",
          options: [
            optIdentitySettingId,
            optSchemas,
            optOperations,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "put",
          description: "Replace an Identity setting",
          options: [
            optIdentitySettingId,
            optSchemas2,
            optAuthorization,
            optResourceTypeSchemaVersion,
            optAttributes,
            optAttributeSets,
            optId,
            optOcid,
            optMeta,
            optIdcsCreatedBy,
            optIdcsLastModifiedBy,
            optIdcsPreventedOperations,
            optTags,
            optDeleteInProgress,
            optIdcsLastUpgradedInRelease,
            optDomainOcid,
            optCompartmentOcid,
            optTenancyOcid,
            optExternalId,
            {
              name: "--user-allowed-to-set-recovery-email",
              description:
                "Indicates whether a user is allowed to change their own recovery email",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--emit-locked-message-when-user-is-locked",
              description:
                "Indicates whether to show the 'user-is-locked' message during authentication if the user is already locked",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--primary-email-required",
              description: "Indicates whether the primary email is required",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--remove-invalid-emails",
              description:
                "Indicates whether to remove non-RFC5322 compliant emails before creating a user",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--return-inactive-over-locked-message",
              description: "Added In: 2302092332",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            { name: "--my-profile", args: { name: "json" } },
            { name: "--posix-uid", args: { name: "json" } },
            { name: "--posix-gid", args: { name: "json" } },
            {
              name: "--tokens",
              description: "A list of tokens and their expiry length",
              args: { name: "json" },
            },
            optIfMatch,
            optForce2,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
