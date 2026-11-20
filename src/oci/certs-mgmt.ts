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
const optCertificateAuthorityId: Fig.Option = {
  name: "--certificate-authority-id",
  description: "The OCID of the certificate authority (CA)",
  args: { name: "certificate-authority-id" },
  isRequired: true,
};
const optCertificateId: Fig.Option = {
  name: "--certificate-id",
  description: "The OCID of the certificate",
  args: { name: "certificate-id" },
  isRequired: true,
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "Free-form tags for this resource",
  args: { name: "json" },
};
const optCertificateAuthorityRules: Fig.Option = {
  name: "--certificate-authority-rules",
  description: "A list of rules that control how the CA is used and managed",
  args: { name: "json" },
};
const optCertificateRevocationListDetails: Fig.Option = {
  name: "--certificate-revocation-list-details",
  args: { name: "json" },
};
const optDefinedTags2: Fig.Option = {
  name: "--defined-tags",
  description: "Usage of predefined tag keys",
  args: { name: "json" },
};
const optDescription: Fig.Option = {
  name: "--description",
  description: "A brief description of the CA",
  args: { name: "description" },
};
const optFreeformTags2: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optValidity: Fig.Option = {
  name: "--validity",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
};
const optVersionName: Fig.Option = {
  name: "--version-name",
  description: "The name of the CA version",
  args: { name: "version-name" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "SCHEDULING_DELETION",
      "PENDING_DELETION",
      "CANCELLING_DELETION",
      "FAILED",
      "PENDING_ACTIVATION",
    ],
  },
  isRepeatable: true,
};
const optCertificateRules: Fig.Option = {
  name: "--certificate-rules",
  description:
    "An optional list of rules that control how the certificate is used and managed",
  args: { name: "json" },
};
const optDescription2: Fig.Option = {
  name: "--description",
  description: "A brief description of the certificate",
  args: { name: "description" },
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "SCHEDULING_DELETION",
      "PENDING_DELETION",
      "CANCELLING_DELETION",
      "FAILED",
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
  description:
    'The maximum number of items to return in a paginated "List" call',
  args: { name: "integer" },
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    'The value of the opc-next-page response header from the previous "List" call',
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
const optCaBundleId: Fig.Option = {
  name: "--ca-bundle-id",
  description: "The OCID of the CA bundle",
  args: { name: "ca-bundle-id" },
  isRequired: true,
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "A filter that returns only resources that match the given compartment OCID",
  args: { name: "compartment-id" },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment in which you want to create the CA",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optExternalKeyDescription: Fig.Option = {
  name: "--external-key-description",
  description:
    "For externally managed CAs, a description of the externally managed key",
  args: { name: "external-key-description" },
};
const optExternalKeyDescription2: Fig.Option = {
  name: "--external-key-description",
  description:
    "For externally managed CAs, a description of the externally managed private key",
  args: { name: "external-key-description" },
};
const optKmsKeyId: Fig.Option = {
  name: "--kms-key-id",
  description:
    "The OCID of the Oracle Cloud Infrastructure Vault key used to encrypt the CA",
  args: { name: "kms-key-id" },
};
const optName: Fig.Option = {
  name: "--name",
  description:
    "A filter that returns only resources that match the specified name",
  args: { name: "name" },
};
const optName2: Fig.Option = {
  name: "--name",
  description: "A user-friendly name for the CA",
  args: { name: "name" },
  isRequired: true,
};
const optStage: Fig.Option = {
  name: "--stage",
  description: "The rotation state of the CA",
  args: { suggestions: ["CURRENT", "PENDING"] },
};
const optSubject: Fig.Option = {
  name: "--subject",
  description: "This is a complex type whose value must be valid JSON",
  args: { name: "json" },
  isRequired: true,
};
const optVersionNumber: Fig.Option = {
  name: "--version-number",
  description: "The version number of the certificate authority (CA). required",
  args: { name: "integer" },
  isRequired: true,
};
const optVersionNumber2: Fig.Option = {
  name: "--version-number",
  description: "The version number of the certificate. required",
  args: { name: "integer" },
  isRequired: true,
};
const optCompartmentId3: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment where you want to create the certificate",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCurrentVersionNumber: Fig.Option = {
  name: "--current-version-number",
  description: "Makes this version the current version",
  args: { name: "integer" },
};
const optIssuerCertificateAuthorityId: Fig.Option = {
  name: "--issuer-certificate-authority-id",
  description: "The OCID of the private CA. required",
  args: { name: "issuer-certificate-authority-id" },
  isRequired: true,
};
const optName3: Fig.Option = {
  name: "--name",
  description: "A user-friendly name for the certificate",
  args: { name: "name" },
  isRequired: true,
};
const optSigningAlgorithm: Fig.Option = {
  name: "--signing-algorithm",
  description:
    "The algorithm used to sign public key certificates that the CA issues",
  args: {
    suggestions: [
      "SHA256_WITH_RSA",
      "SHA384_WITH_RSA",
      "SHA512_WITH_RSA",
      "SHA256_WITH_ECDSA",
      "SHA384_WITH_ECDSA",
      "SHA512_WITH_ECDSA",
    ],
  },
};
const optStage2: Fig.Option = {
  name: "--stage",
  description: "The rotation state of the certificate",
  args: { suggestions: ["CURRENT", "PENDING"] },
};
const optVersionName2: Fig.Option = {
  name: "--version-name",
  description: "A name for the certificate version",
  args: { name: "version-name" },
};
const optVersionName3: Fig.Option = {
  name: "--version-name",
  description: "A name for the certificate",
  args: { name: "version-name" },
};
const optWaitForState3: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "UPDATING",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const completionSpec: Fig.Spec = {
  name: "certs-mgmt",
  description: "Certificates Service Management",
  subcommands: [
    {
      name: "certificate-version",
      description: "The details of the certificate version",
      subcommands: [
        {
          name: "get",
          description:
            "Gets details about the specified version of a certificate",
          options: [optCertificateId, optVersionNumber2, optFromJson],
        },
        {
          name: "revoke",
          description: "Revokes the specified certificate version",
          options: [
            optCertificateId,
            {
              name: "--revocation-reason",
              description:
                "The reason that the certificate or certificate authority was revoked",
              args: {
                suggestions: [
                  "UNSPECIFIED",
                  "KEY_COMPROMISE",
                  "CA_COMPROMISE",
                  "AFFILIATION_CHANGED",
                  "SUPERSEDED",
                  "CESSATION_OF_OPERATION",
                  "PRIVILEGE_WITHDRAWN",
                  "AA_COMPROMISE",
                ],
              },
            },
            optIfMatch,
            optVersionNumber2,
            optFromJson,
          ],
        },
        {
          name: "cancel-deletion",
          description:
            "Cancels the scheduled deletion of the specified certificate version",
          options: [
            optCertificateId,
            optIfMatch,
            optVersionNumber2,
            optFromJson,
          ],
        },
        {
          name: "schedule-deletion",
          description:
            "Schedules the deletion of the specified certificate version",
          options: [
            optCertificateId,
            {
              name: "--time-of-deletion",
              description:
                "An optional property that indicates when to delete the certificate version",
              args: { name: "datetime" },
            },
            optIfMatch,
            optVersionNumber2,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all certificate versions for the specified certificate",
          options: [
            optCertificateId,
            {
              name: "--version-number",
              description:
                "A filter that returns only resources that match the specified version number",
              args: { name: "integer" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["VERSION_NUMBER"] },
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
      name: "certificate-authority",
      description: "The metadata details of the certificate authority (CA)",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a certificate authority (CA) to a different compartment within the same tenancy",
          options: [
            optCertificateAuthorityId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the CA should move",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets details about the specified certificate authority (CA)",
          options: [optCertificateAuthorityId, optFromJson],
        },
        {
          name: "cancel-deletion",
          description:
            "Cancels the scheduled deletion of the specified certificate authority (CA)",
          options: [optCertificateAuthorityId, optIfMatch, optFromJson],
        },
        {
          name: "schedule-deletion",
          description:
            "Schedules the deletion of the specified certificate authority (CA)",
          options: [
            optCertificateAuthorityId,
            {
              name: "--time-of-deletion",
              description:
                "An optional property indicating when to delete the CA, expressed in RFC 3339 timestamp format",
              args: { name: "datetime" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create-root-ca-by-generating-config-details",
          description:
            "Creates a new certificate authority (CA) according to the details of the request",
          options: [
            optName2,
            optCompartmentId2,
            optDescription,
            optCertificateAuthorityRules,
            optCertificateRevocationListDetails,
            optKmsKeyId,
            optExternalKeyDescription2,
            optFreeformTags2,
            optDefinedTags2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optSubject,
            optSigningAlgorithm,
            optValidity,
            optVersionName,
            optFromJson,
          ],
        },
        {
          name: "create-subordinate-ca-issued-by-internal-ca",
          description:
            "Creates a new certificate authority (CA) according to the details of the request",
          options: [
            optName2,
            optCompartmentId2,
            optDescription,
            optCertificateAuthorityRules,
            optCertificateRevocationListDetails,
            optKmsKeyId,
            optExternalKeyDescription2,
            optFreeformTags2,
            optDefinedTags2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optIssuerCertificateAuthorityId,
            optSigningAlgorithm,
            optSubject,
            optValidity,
            optVersionName,
            optFromJson,
          ],
        },
        {
          name: "update-root-ca-by-generating-config-details",
          description:
            "Updates the properties of the specified certificate authority (CA)",
          options: [
            optCertificateAuthorityId,
            optDescription,
            optCertificateRevocationListDetails,
            optExternalKeyDescription,
            optFreeformTags2,
            optDefinedTags2,
            optCertificateAuthorityRules,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStage,
            optValidity,
            optVersionName,
            optFromJson,
          ],
        },
        {
          name: "update-subordinate-ca-issued-by-internal-ca",
          description:
            "Updates the properties of the specified certificate authority (CA)",
          options: [
            optCertificateAuthorityId,
            optDescription,
            optCertificateRevocationListDetails,
            optExternalKeyDescription,
            optFreeformTags2,
            optDefinedTags2,
            optCertificateAuthorityRules,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStage,
            optValidity,
            optVersionName,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all certificate authorities (CAs) in the specified compartment",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "SCHEDULING_DELETION",
                  "PENDING_DELETION",
                  "CANCELLING_DELETION",
                  "FAILED",
                  "PENDING_ACTIVATION",
                ],
              },
            },
            optName,
            {
              name: "--issuer-certificate-authority-id",
              description: "The OCID of the certificate authority (CA)",
              args: { name: "issuer-certificate-authority-id" },
            },
            {
              name: "--certificate-authority-id",
              description: "The OCID of the certificate authority (CA)",
              args: { name: "certificate-authority-id" },
            },
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["NAME", "EXPIRATIONDATE", "TIMECREATED"] },
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
          name: "create-root-ca-managed-externally",
          description:
            "Creates a new certificate authority (CA) according to the details of the request",
          options: [
            optName2,
            optCompartmentId2,
            optDescription,
            optCertificateAuthorityRules,
            optCertificateRevocationListDetails,
            optKmsKeyId,
            optExternalKeyDescription2,
            optFreeformTags2,
            optDefinedTags2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optVersionName,
            {
              name: "--certificate-pem",
              description:
                "The externally signed certificate (in PEM format) for the imported root CA. required",
              args: { name: "certificate-pem" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "create-subordinate-ca-managed-internally-issued-by-external-ca",
          description:
            "Creates a new certificate authority (CA) according to the details of the request",
          options: [
            optName2,
            optCompartmentId2,
            optDescription,
            optCertificateAuthorityRules,
            optCertificateRevocationListDetails,
            optKmsKeyId,
            optExternalKeyDescription2,
            optFreeformTags2,
            optDefinedTags2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optVersionName,
            {
              name: "--issuer-certificate-authority-id",
              description:
                "The OCID of the private, external issuer CA. required",
              args: { name: "issuer-certificate-authority-id" },
              isRequired: true,
            },
            optSigningAlgorithm,
            optSubject,
            optFromJson,
          ],
        },
        {
          name: "update-root-ca-managed-externally",
          description:
            "Updates the properties of the specified certificate authority (CA)",
          options: [
            optCertificateAuthorityId,
            optDescription,
            optCurrentVersionNumber,
            optCertificateRevocationListDetails,
            optExternalKeyDescription,
            optFreeformTags2,
            optDefinedTags2,
            optCertificateAuthorityRules,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optVersionName,
            optStage,
            {
              name: "--certificate-pem",
              description:
                "The externally signed certificate (in PEM format) for the CA. required",
              args: { name: "certificate-pem" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "update-subordinate-ca-managed-internally-issued-by-external-ca",
          description:
            "Updates the properties of the specified certificate authority (CA)",
          options: [
            optCertificateAuthorityId,
            optDescription,
            optCurrentVersionNumber,
            optCertificateRevocationListDetails,
            optExternalKeyDescription,
            optFreeformTags2,
            optDefinedTags2,
            optCertificateAuthorityRules,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optVersionName,
            optStage,
            {
              name: "--action-details",
              description:
                "This is a complex type whose value must be valid JSON",
              args: { name: "json" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "certificate",
      description: "The details of the certificate",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a certificate to a different compartment within the same tenancy",
          options: [
            optCertificateId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the certificate should move",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details about the specified certificate",
          options: [optCertificateId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the properties of a certificate",
          options: [
            optCertificateId,
            optDescription2,
            optCurrentVersionNumber,
            optFreeformTags,
            optDefinedTags,
            optCertificateRules,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "cancel-deletion",
          description:
            "Cancels the pending deletion of the specified certificate",
          options: [optCertificateId, optIfMatch, optFromJson],
        },
        {
          name: "schedule-deletion",
          description: "Schedules the deletion of the specified certificate",
          options: [
            optCertificateId,
            {
              name: "--time-of-deletion",
              description:
                "An optional property indicating when to delete the certificate version",
              args: { name: "datetime" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create-by-importing-config",
          description:
            "Creates a new certificate according to the details of the request",
          options: [
            optName3,
            optCompartmentId3,
            optDescription2,
            optCertificateRules,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--cert-chain-pem",
              description:
                "The certificate chain (in PEM format) for the imported certificate. required",
              args: { name: "cert-chain-pem" },
              isRequired: true,
            },
            {
              name: "--certificate-pem",
              description:
                "The certificate (in PEM format) for the imported certificate. required",
              args: { name: "certificate-pem" },
              isRequired: true,
            },
            {
              name: "--private-key-pem",
              description:
                "The private key (in PEM format) for the imported certificate. required",
              args: { name: "private-key-pem" },
              isRequired: true,
            },
            {
              name: "--private-key-pem-passphrase",
              description: "An optional passphrase for the private key",
              args: { name: "private-key-pem-passphrase" },
            },
            optVersionName3,
            optFromJson,
          ],
        },
        {
          name: "create-certificate-issued-by-internal-ca",
          description:
            "Creates a new certificate according to the details of the request",
          options: [
            optName3,
            optCompartmentId3,
            optDescription2,
            optCertificateRules,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--certificate-profile-type",
              description:
                "The name of the profile used to create the certificate",
              args: {
                suggestions: [
                  "TLS_SERVER_OR_CLIENT",
                  "TLS_SERVER",
                  "TLS_CLIENT",
                  "TLS_CODE_SIGN",
                ],
              },
              isRequired: true,
            },
            optIssuerCertificateAuthorityId,
            optSubject,
            {
              name: "--key-algorithm",
              description: "The algorithm to use to create key pairs",
              args: {
                suggestions: ["RSA2048", "RSA4096", "ECDSA_P256", "ECDSA_P384"],
              },
            },
            {
              name: "--signature-algorithm",
              description:
                "The algorithm to use to sign the public key certificate",
              args: {
                suggestions: [
                  "SHA256_WITH_RSA",
                  "SHA384_WITH_RSA",
                  "SHA512_WITH_RSA",
                  "SHA256_WITH_ECDSA",
                  "SHA384_WITH_ECDSA",
                  "SHA512_WITH_ECDSA",
                ],
              },
            },
            {
              name: "--subject-alternative-names",
              description: "A list of subject alternative names",
              args: { name: "json" },
            },
            optValidity,
            optVersionName3,
            optFromJson,
          ],
        },
        {
          name: "create-certificate-managed-externally-issued-by-internal-ca",
          description:
            "Creates a new certificate according to the details of the request",
          options: [
            optName3,
            optCompartmentId3,
            optDescription2,
            optCertificateRules,
            optFreeformTags,
            optDefinedTags,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--csr-pem",
              description:
                "The certificate signing request (in PEM format). required",
              args: { name: "csr-pem" },
              isRequired: true,
            },
            optIssuerCertificateAuthorityId,
            optValidity,
            optVersionName3,
            optFromJson,
          ],
        },
        {
          name: "update-certificate-by-importing-config-details",
          description: "Updates the properties of a certificate",
          options: [
            optCertificateId,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optCertificateRules,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--cert-chain-pem",
              description:
                "The certificate chain (in PEM format) for the imported certificate. required",
              args: { name: "cert-chain-pem" },
              isRequired: true,
            },
            {
              name: "--certificate-pem",
              description:
                "The certificate (in PEM format) for the imported certificate. required",
              args: { name: "certificate-pem" },
              isRequired: true,
            },
            {
              name: "--private-key-pem",
              description:
                "The private key (in PEM format) for the imported certificate. required",
              args: { name: "private-key-pem" },
              isRequired: true,
            },
            {
              name: "--private-key-pem-passphrase",
              description: "An optional passphrase for the private key",
              args: { name: "private-key-pem-passphrase" },
            },
            optStage2,
            optVersionName2,
            optFromJson,
          ],
        },
        {
          name: "update-certificate-managed-internally",
          description: "Updates the properties of a certificate",
          options: [
            optCertificateId,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optCertificateRules,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optStage2,
            optValidity,
            optVersionName2,
            optFromJson,
          ],
        },
        {
          name: "update-certificate-managed-externally",
          description: "Updates the properties of a certificate",
          options: [
            optCertificateId,
            optDescription2,
            optFreeformTags,
            optDefinedTags,
            optCertificateRules,
            optIfMatch,
            optForce,
            optWaitForState2,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--csr-pem",
              description:
                "The certificate signing request (in PEM format). required",
              args: { name: "csr-pem" },
              isRequired: true,
            },
            optStage2,
            optValidity,
            optVersionName2,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists all certificates that match the query parameters",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "SCHEDULING_DELETION",
                  "PENDING_DELETION",
                  "CANCELLING_DELETION",
                  "FAILED",
                ],
              },
            },
            optName,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["NAME", "EXPIRATIONDATE", "TIMECREATED"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            {
              name: "--issuer-certificate-authority-id",
              description: "The OCID of the certificate authority (CA)",
              args: { name: "issuer-certificate-authority-id" },
            },
            {
              name: "--certificate-id",
              description: "The OCID of the certificate",
              args: { name: "certificate-id" },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "association",
      description: "The details of the association",
      subcommands: [
        {
          name: "get",
          description: "Gets details about the specified association",
          options: [
            {
              name: "--association-id",
              description:
                "The OCID of an association between a certificate-related resource and another Oracle Cloud Infrastructure",
              args: { name: "association-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists all associations that match the query parameters",
          options: [
            optCompartmentId,
            {
              name: "--certificates-resource-id",
              description:
                "A filter that returns only resources that match the given OCID of a certificate-related resource",
              args: { name: "certificates-resource-id" },
            },
            {
              name: "--associated-resource-id",
              description:
                "A filter that returns only resources that match the given OCID of an associated Oracle Cloud Infrastructure",
              args: { name: "associated-resource-id" },
            },
            {
              name: "--association-id",
              description: "The OCID of the association",
              args: { name: "association-id" },
            },
            optName,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["NAME", "TIMECREATED"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            {
              name: "--association-type",
              description: "Type of associations to list",
              args: {
                suggestions: [
                  "CERTIFICATE",
                  "CERTIFICATE_AUTHORITY",
                  "CA_BUNDLE",
                ],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "certificate-authority-version",
      description:
        "The metadata details of the certificate authority (CA) version",
      subcommands: [
        {
          name: "get",
          description:
            "Gets details about the specified certificate authority (CA) version",
          options: [optCertificateAuthorityId, optVersionNumber, optFromJson],
        },
        {
          name: "revoke",
          description: "Revokes a certificate authority (CA) version",
          options: [
            optCertificateAuthorityId,
            {
              name: "--revocation-reason",
              description:
                "The reason the certificate or certificate authority was revoked",
              args: {
                suggestions: [
                  "UNSPECIFIED",
                  "KEY_COMPROMISE",
                  "CA_COMPROMISE",
                  "AFFILIATION_CHANGED",
                  "SUPERSEDED",
                  "CESSATION_OF_OPERATION",
                  "PRIVILEGE_WITHDRAWN",
                  "AA_COMPROMISE",
                ],
              },
            },
            optIfMatch,
            optVersionNumber,
            optFromJson,
          ],
        },
        {
          name: "cancel-deletion",
          description:
            "Cancels the scheduled deletion of the specified certificate authority (CA) version",
          options: [
            optCertificateAuthorityId,
            optIfMatch,
            optVersionNumber,
            optFromJson,
          ],
        },
        {
          name: "schedule-deletion",
          description:
            "Schedules the deletion of the specified certificate authority (CA) version",
          options: [
            optCertificateAuthorityId,
            {
              name: "--time-of-deletion",
              description:
                "An optional property indicating when to delete the CA version, expressed in RFC 3339 timestamp format",
              args: { name: "datetime" },
            },
            optIfMatch,
            optVersionNumber,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists all versions for the specified certificate authority (CA)",
          options: [
            optCertificateAuthorityId,
            {
              name: "--version-number",
              description:
                "A filter that returns only resources that match the specified version number",
              args: { name: "integer" },
            },
            optLimit,
            optPage,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["VERSION_NUMBER"] },
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
      name: "ca-bundle",
      description: "CA bundle metadata",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a CA bundle to a different compartment in the same tenancy",
          options: [
            optCaBundleId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the CA bundle should move",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a new CA bundle according to the details of the request",
          options: [
            {
              name: "--name",
              description: "A user-friendly name for the CA bundle",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The OCID of the compartment for the CA bundle",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--ca-bundle-pem",
              description:
                "Certificates (in PEM format) to include in the CA bundle",
              args: { name: "ca-bundle-pem" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A brief description of the CA bundle",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified CA bundle",
          options: [
            optCaBundleId,
            optIfMatch,
            {
              name: "--force",
              description:
                "Perform deletion without prompting for confirmation",
            },
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets details about the specified CA bundle",
          options: [optCaBundleId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the properties of a CA bundle",
          options: [
            optCaBundleId,
            {
              name: "--description",
              description: "A brief description of the CA bundle",
              args: { name: "description" },
            },
            {
              name: "--ca-bundle-pem",
              description:
                "Certificates (in PEM format) to include in the CA bundle",
              args: { name: "ca-bundle-pem" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce,
            optWaitForState3,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Lists all CA bundles that match the query parameters",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter that returns only resources that match the given lifecycle state",
              args: {
                suggestions: [
                  "CREATING",
                  "ACTIVE",
                  "UPDATING",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optName,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["NAME", "TIMECREATED"] },
            },
            optSortOrder,
            optLimit,
            optPage,
            {
              name: "--ca-bundle-id",
              description: "The OCID of the CA bundle",
              args: { name: "ca-bundle-id" },
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
