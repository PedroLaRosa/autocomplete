// Cosign v3.1.4 (Homebrew formula + upstream git tag, 2026-11-19). Source: cosign v3.1.4 checkout, read statically (binary not run):
// generated CLI reference (doc/*.md, `cosign --help` output of every command) cross-checked flag-by-flag against the cobra/pflag
// definitions in cmd/cosign/cli. Deprecated flags/commands (hidden from --help) come from the Go source and are marked `deprecated`.
// Not covered: the hidden `generate-fig-spec` helper. `piv-tool` / `pkcs11-tool` only exist in builds with the `pivkey` / `pkcs11key` tags.
// Flag aliases (--cert, --cert-chain, --cert-oidc-issuer, --output-cert, --cert-identity) come from the global normalization func in commands.go.

const certVerifyOptions: Fig.Option[] = [
  {
    name: ["--certificate", "--cert"],
    description:
      "Path to the public certificate. The certificate will be verified against the Fulcio roots if the --certificate-chain option is not passed (deprecated: use --bundle with --trusted-root to provide the public certificate)",
    deprecated: true,
    args: { name: "certificate", template: "filepaths" },
  },
  {
    name: ["--certificate-identity", "--cert-identity"],
    description:
      "The identity expected in a valid Fulcio certificate. Valid values include email address, DNS names, IP addresses, and URIs. Either --certificate-identity or --certificate-identity-regexp must be set for keyless flows",
    args: { name: "certificate-identity" },
  },
  {
    name: "--certificate-identity-regexp",
    description:
      "A regular expression alternative to --certificate-identity. Accepts the Go regular expression syntax described at https://golang.org/s/re2syntax. Either --certificate-identity or --certificate-identity-regexp must be set for keyless flows",
    args: { name: "certificate-identity-regexp" },
  },
  {
    name: ["--certificate-oidc-issuer", "--cert-oidc-issuer"],
    description:
      "The OIDC issuer expected in a valid Fulcio certificate, e.g. https://token.actions.githubusercontent.com or https://oauth2.sigstore.dev/auth. Either --certificate-oidc-issuer or --certificate-oidc-issuer-regexp must be set for keyless flows",
    args: { name: "certificate-oidc-issuer" },
  },
  {
    name: "--certificate-oidc-issuer-regexp",
    description:
      "A regular expression alternative to --certificate-oidc-issuer. Accepts the Go regular expression syntax described at https://golang.org/s/re2syntax. Either --certificate-oidc-issuer or --certificate-oidc-issuer-regexp must be set for keyless flows",
    args: { name: "certificate-oidc-issuer-regexp" },
  },
  {
    name: "--certificate-github-workflow-trigger",
    description:
      "Contains the event_name claim from the GitHub OIDC Identity token that contains the name of the event that triggered the workflow run",
    args: { name: "certificate-github-workflow-trigger" },
  },
  {
    name: "--certificate-github-workflow-sha",
    description:
      "Contains the sha claim from the GitHub OIDC Identity token that contains the commit SHA that the workflow run was based upon",
    args: { name: "certificate-github-workflow-sha" },
  },
  {
    name: "--certificate-github-workflow-name",
    description:
      "Contains the workflow claim from the GitHub OIDC Identity token that contains the name of the executed workflow",
    args: { name: "certificate-github-workflow-name" },
  },
  {
    name: "--certificate-github-workflow-repository",
    description:
      "Contains the repository claim from the GitHub OIDC Identity token that contains the repository that the workflow run was based upon",
    args: { name: "certificate-github-workflow-repository" },
  },
  {
    name: "--certificate-github-workflow-ref",
    description:
      "Contains the ref claim from the GitHub OIDC Identity token that contains the git ref that the workflow run was based upon",
    args: { name: "certificate-github-workflow-ref" },
  },
  {
    name: "--ca-intermediates",
    description:
      "Path to a file of intermediate CA certificates in PEM format which will be needed when building the certificate chains for the signing certificate. The flag is optional and must be used together with --ca-roots, conflicts with --certificate-chain (deprecated: use --trusted-root to provide CA certificates)",
    deprecated: true,
    args: { name: "ca-intermediates", template: "filepaths" },
  },
  {
    name: "--ca-roots",
    description:
      "Path to a bundle file of CA certificates in PEM format which will be needed when building the certificate chains for the signing certificate. Conflicts with --certificate-chain (deprecated: use --trusted-root to provide CA certificates)",
    deprecated: true,
    args: { name: "ca-roots", template: "filepaths" },
  },
  {
    name: ["--certificate-chain", "--cert-chain"],
    description:
      "Path to a list of CA certificates in PEM format which will be needed when building the certificate chain for the signing certificate. Must start with the parent intermediate CA certificate of the signing certificate and end with the root certificate. Conflicts with --ca-roots and --ca-intermediates (deprecated: use --trusted-root to provide the certificate chain)",
    deprecated: true,
    args: { name: "certificate-chain", template: "filepaths" },
  },
  {
    name: "--sct",
    description:
      "Path to a detached Signed Certificate Timestamp, formatted as a RFC6962 AddChainResponse struct. If a certificate contains an SCT, verification will check both the detached and embedded SCTs (deprecated: a Signed Certificate Timestamp is now provided via a Sigstore bundle)",
    deprecated: true,
    args: { name: "sct" },
  },
  {
    name: "--insecure-ignore-sct",
    description:
      "When set, verification will not check that a certificate contains an embedded SCT, a proof of inclusion in a certificate transparency log",
  },
];

const commonBundleCreateOptions: Fig.Option[] = [
  {
    name: "--ignore-tlog",
    description:
      "Ignore transparency log verification, to be used when an artifact signature has not been uploaded to the transparency log",
  },
  {
    name: "--key",
    description: "Path to the public key file, KMS URI or Kubernetes Secret",
    args: { name: "key", template: "filepaths" },
  },
  {
    name: "--rekor-url",
    description: "Address of rekor STL server",
    args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
  },
  { name: "--sk", description: "Whether to use a hardware security key" },
  {
    name: "--slot",
    description:
      "Security key slot to use for generated key (authentication|signature|card-authentication|key-management)",
    args: {
      name: "slot",
      default: "signature",
      suggestions: [
        "authentication",
        "signature",
        "card-authentication",
        "key-management",
      ],
    },
  },
];

const commonVerifyOptions: Fig.Option[] = [
  {
    name: "--offline",
    description:
      "Only verify an artifact's inclusion in a transparency log using a provided proof, rather than querying the log. May still include network requests to retrieve service keys from a TUF repository (deprecated: To verify in an airgapped environment, provide a --bundle with the signature and verification material, and a --trusted-root file with the service keys and certificates)",
    deprecated: true,
  },
  {
    name: "--timestamp-certificate-chain",
    description:
      "Path to PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must contain the root CA certificate. Optionally may contain intermediate CA certificates, and may contain the leaf TSA certificate if not present in the timestamp (deprecated: use --trusted-root to provide the timestamp authority certificate chain)",
    deprecated: true,
    args: { name: "timestamp-certificate-chain", template: "filepaths" },
  },
  { name: "--use-signed-timestamps", description: "Verify rfc3161 timestamps" },
  {
    name: "--insecure-ignore-tlog",
    description:
      "Ignore transparency log verification, to be used when an artifact signature has not been uploaded to the transparency log. Artifacts cannot be publicly verified when not included in a log",
  },
  {
    name: "--private-infrastructure",
    description:
      "Skip transparency log verification when verifying artifacts in a privately deployed infrastructure (deprecated: use --insecure-ignore-tlog instead)",
    deprecated: true,
  },
  {
    name: "--experimental-oci11",
    description:
      "Set to true to enable experimental OCI 1.1 behaviour (unrelated to bundle format) (deprecated: OCI referrers will be the default behavior in future versions)",
    deprecated: true,
  },
  {
    name: "--max-workers",
    description: "The amount of maximum workers for parallel executions",
    args: { name: "max-workers", default: "10" },
  },
  {
    name: "--trusted-root",
    description: "Path to a Sigstore TrustedRoot JSON file",
    args: { name: "trusted-root", template: "filepaths" },
  },
  {
    name: "--new-bundle-format",
    description:
      "Expect the signature/attestation to be packaged in a Sigstore bundle (deprecated: this will be the only supported format in future versions)",
    deprecated: true,
  },
  {
    name: "--allow-certificate-chain",
    description:
      "Allow X.509 certificate chains in bundle verification material for v0.3+ bundles",
  },
];

const fulcioOptions: Fig.Option[] = [
  {
    name: "--fulcio-url",
    description:
      "Address of sigstore PKI server (deprecated: use a signing config to specify a fulcio url; see `cosign signing-config --help`)",
    deprecated: true,
    args: { name: "fulcio-url", default: "https://fulcio.sigstore.dev" },
  },
  {
    name: "--identity-token",
    description:
      "Identity token to use for certificate from fulcio. the token or a path to a file containing the token is accepted",
    args: { name: "identity-token" },
  },
  {
    name: "--fulcio-auth-flow",
    description:
      "Fulcio interactive oauth2 flow to use for certificate from fulcio. Defaults to determining the flow based on the runtime environment. (options) normal|device|token|client_credentials",
    args: {
      name: "fulcio-auth-flow",
      suggestions: ["normal", "device", "token", "client_credentials"],
    },
  },
  {
    name: "--insecure-skip-verify",
    description:
      "Skip verifying fulcio published to the SCT (this should only be used for testing) (deprecated: SCT verification is no longer performed during signing/attestation)",
    deprecated: true,
  },
];

const oidcOptions: Fig.Option[] = [
  {
    name: "--oidc-issuer",
    description:
      "OIDC provider to be used to issue ID token (deprecated: use a signing config to specify an OIDC issuer; see `cosign signing-config create --help`)",
    deprecated: true,
    args: { name: "oidc-issuer", default: "https://oauth2.sigstore.dev/auth" },
  },
  {
    name: "--oidc-client-id",
    description: "OIDC client ID for application",
    args: { name: "oidc-client-id", default: "sigstore" },
  },
  {
    name: "--oidc-client-secret-file",
    description: "Path to file containing OIDC client secret for application",
    args: { name: "oidc-client-secret-file" },
  },
  {
    name: "--oidc-redirect-url",
    description:
      "OIDC redirect URL (Optional). The default oidc-redirect-url is 'http://localhost:0/auth/callback'",
    args: { name: "oidc-redirect-url" },
  },
  {
    name: "--oidc-provider",
    description:
      "Specify the provider to get the OIDC token from (Optional). If unset, all options will be tried. Options include: [spiffe, google, github-actions, filesystem, buildkite-agent]",
    args: {
      name: "oidc-provider",
      suggestions: [
        "spiffe",
        "google",
        "github-actions",
        "filesystem",
        "buildkite-agent",
      ],
    },
  },
  {
    name: "--oidc-disable-ambient-providers",
    description:
      "Disable ambient OIDC providers. When true, ambient credentials will not be read",
  },
];

const predicateLocalOptions: Fig.Option[] = [
  {
    name: "--predicate",
    description: "Path to the predicate file",
    args: { name: "predicate" },
  },
  {
    name: "--statement",
    description: "Path to the statement file",
    args: { name: "statement" },
  },
];

const registryOptions: Fig.Option[] = [
  {
    name: "--allow-insecure-registry",
    description:
      "Whether to allow insecure connections to registries (e.g., with expired or self-signed TLS certificates). Don't use this for anything but testing",
  },
  {
    name: "--allow-http-registry",
    description:
      "Whether to allow using HTTP protocol while connecting to registries. Don't use this for anything but testing",
  },
  {
    name: "--k8s-keychain",
    description:
      "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
  },
  {
    name: "--registry-username",
    description: "Registry basic auth username",
    args: { name: "registry-username" },
  },
  {
    name: "--registry-password",
    description: "Registry basic auth password",
    args: { name: "registry-password" },
  },
  {
    name: "--registry-token",
    description: "Registry bearer auth token",
    args: { name: "registry-token" },
  },
  {
    name: "--registry-cacert",
    description:
      "Path to the X.509 CA certificate file in PEM format to be used for the connection to the registry",
    args: { name: "registry-cacert", template: "filepaths" },
  },
  {
    name: "--registry-client-cert",
    description:
      "Path to the X.509 certificate file in PEM format to be used for the connection to the registry",
    args: { name: "registry-client-cert", template: "filepaths" },
  },
  {
    name: "--registry-client-key",
    description:
      "Path to the X.509 private key file in PEM format to be used, together with the 'registry-client-cert' value, for the connection to the registry",
    args: { name: "registry-client-key", template: "filepaths" },
  },
  {
    name: "--registry-server-name",
    description:
      "SAN name to use as the 'ServerName' tls.Config field to verify the mTLS connection to the registry",
    args: { name: "registry-server-name" },
  },
];

const securityKeyOptions: Fig.Option[] = [
  { name: "--sk", description: "Whether to use a hardware security key" },
  {
    name: "--slot",
    description:
      "Security key slot to use for generated key (default: signature) (authentication|signature|card-authentication|key-management)",
    args: {
      name: "slot",
      suggestions: [
        "authentication",
        "signature",
        "card-authentication",
        "key-management",
      ],
    },
  },
];

const verifyOptions: Fig.Option[] = [
  {
    name: "--key",
    description: "Path to the public key file, KMS URI or Kubernetes Secret",
    args: { name: "key", template: "filepaths" },
  },
  {
    name: "--attachment",
    description:
      "Related image attachment to verify (sbom), default none (deprecated: use OCI referrers for attachments and verify with `--experimental-oci11`)",
    deprecated: true,
    args: { name: "attachment", template: "filepaths" },
  },
  {
    name: ["--output", "-o"],
    description: "Output format for the signing image information (json|text)",
    args: { name: "output", default: "json", suggestions: ["json", "text"] },
  },
  {
    name: "--signature",
    description:
      "Signature content or path or remote URL (deprecated: signatures are automatically fetched from the OCI registry during image verification)",
    deprecated: true,
    args: { name: "signature", template: "filepaths" },
  },
  {
    name: "--payload",
    description:
      "Payload path or remote URL (deprecated: payload will always be verified from the bundle in future versions)",
    deprecated: true,
    args: { name: "payload" },
  },
  {
    name: "--local-image",
    description:
      "Whether the specified image is a path to an image saved locally via 'cosign save'",
  },
];

const completionSpec: Fig.Spec = {
  name: "cosign",
  description:
    "A tool for Container Signing, Verification and Storage in an OCI registry",
  subcommands: [
    {
      name: "attach",
      description:
        "Provides utilities for attaching artifacts to other artifacts in a registry (deprecated: will be removed in v4.0.0, use oras to attach artifacts)",
      deprecated: true,
      subcommands: [
        {
          name: "attestation",
          description: "Attach attestation to the supplied container image",
          options: [
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
              deprecated: true,
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--attestation",
              description: "Path to the attestation envelope",
              isRepeatable: true,
              args: { name: "attestation" },
            },
            ...registryOptions,
          ],
          args: { name: "image", isVariadic: true },
        },
        {
          name: "sbom",
          description: "Attach sbom to the supplied container image",
          options: [
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
              deprecated: true,
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--input-format",
              description: "Type of sbom input format (json|xml|text)",
              args: {
                name: "input-format",
                suggestions: ["json", "xml", "text"],
              },
            },
            {
              name: "--registry-referrers-mode",
              description:
                "Mode for fetching references from the registry. allowed: legacy, oci-1-1",
              args: {
                name: "registry-referrers-mode",
                suggestions: ["legacy", "oci-1-1"],
              },
            },
            {
              name: "--sbom",
              description: "Path to the sbom, or {-} for stdin",
              args: { name: "sbom", template: "filepaths" },
            },
            {
              name: "--type",
              description: "Type of sbom (spdx|cyclonedx|syft)",
              args: {
                name: "type",
                default: "spdx",
                suggestions: ["spdx", "cyclonedx", "syft"],
              },
            },
            ...registryOptions,
          ],
          args: { name: "image" },
        },
        {
          name: "signature",
          description: "Attach signatures to the supplied container image",
          options: [
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
              deprecated: true,
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--bundle",
              description:
                "Path to bundle containing signature (alias for payload)",
              args: { name: "bundle" },
            },
            {
              name: ["--certificate", "--cert"],
              description:
                "Path to the X.509 certificate in PEM format to include in the OCI Signature",
              args: { name: "certificate" },
            },
            {
              name: ["--certificate-chain", "--cert-chain"],
              description:
                "Path to a list of CA X.509 certificates in PEM format which will be needed when building the certificate chain for the signing certificate. Must start with the parent intermediate CA certificate of the signing certificate and end with the root certificate. Included in the OCI Signature",
              args: { name: "certificate-chain" },
            },
            {
              name: "--payload",
              description: "Path to the payload covered by the signature",
              args: { name: "payload" },
            },
            {
              name: "--rekor-response",
              description: "Path to the rekor bundle",
              args: { name: "rekor-response" },
            },
            {
              name: "--signature",
              description: "Path to the signature, or {-} for stdin",
              args: { name: "signature" },
            },
            {
              name: "--tsr",
              description:
                "Path to the Time Stamped Signature Response from RFC3161 compliant TSA",
              args: { name: "tsr" },
            },
            ...registryOptions,
          ],
          args: { name: "image" },
        },
      ],
    },
    {
      name: "attest",
      description: "Attest the supplied container image",
      options: [
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
          deprecated: true,
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--bundle",
          description: "Write everything required to verify the blob to a FILE",
          args: { name: "bundle", template: "filepaths" },
        },
        {
          name: ["--certificate", "--cert"],
          description:
            "Path to the X.509 certificate in PEM format to include in the OCI Signature",
          args: { name: "certificate", template: "filepaths" },
        },
        {
          name: ["--certificate-chain", "--cert-chain"],
          description:
            "Path to a list of CA X.509 certificates in PEM format which will be needed when building the certificate chain for the signing certificate. Must start with the parent intermediate CA certificate of the signing certificate and end with the root certificate. Included in the OCI Signature",
          args: { name: "certificate-chain", template: "filepaths" },
        },
        {
          name: "--issue-certificate",
          description:
            "Issue a code signing certificate from Fulcio, even if a key is provided (deprecated: support for this flag will be removed in the future)",
          deprecated: true,
        },
        {
          name: "--key",
          description:
            "Path to the private key file, KMS URI or Kubernetes Secret",
          args: { name: "key", template: "filepaths" },
        },
        {
          name: "--new-bundle-format",
          description:
            "Attach a Sigstore bundle using OCI referrers API (deprecated: this will be the only supported format in future versions)",
          deprecated: true,
        },
        {
          name: "--no-upload",
          description:
            "Do not upload the generated attestation, but send the attestation output to STDOUT",
        },
        {
          name: "--record-creation-timestamp",
          description:
            "Set the createdAt timestamp in the attestation artifact to the time it was created; by default, cosign sets this to the zero value (deprecated: not used with the new bundle format)",
          deprecated: true,
        },
        {
          name: "--rekor-entry-type",
          description:
            "Specifies the type to be used for a rekor entry upload (dsse|intoto) (deprecated: support for this flag will be removed in the future. it is strongly discouraged to rely on Rekor for attestation storage, and in future releases of Rekor, this functionality will be removed)",
          deprecated: true,
          args: {
            name: "rekor-entry-type",
            default: "dsse",
            suggestions: ["dsse", "intoto"],
          },
        },
        {
          name: "--rekor-url",
          description:
            "Address of rekor STL server (deprecated: use a signing config to specify a rekor url; see `cosign signing-config --help`)",
          deprecated: true,
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--replace",
          description:
            "Replace existing attestations (deprecated: not needed when OCI referrers become the default behavior)",
          deprecated: true,
        },
        {
          name: "--signing-config",
          description: "Path to a signing config file",
          args: { name: "signing-config" },
        },
        {
          name: "--timestamp-client-cacert",
          description:
            "Path to the X.509 CA certificate file in PEM format to be used for the connection to the TSA Server",
          args: { name: "timestamp-client-cacert" },
        },
        {
          name: "--timestamp-client-cert",
          description:
            "Path to the X.509 certificate file in PEM format to be used for the connection to the TSA Server",
          args: { name: "timestamp-client-cert" },
        },
        {
          name: "--timestamp-client-key",
          description:
            "Path to the X.509 private key file in PEM format to be used, together with the 'timestamp-client-cert' value, for the connection to the TSA Server",
          args: { name: "timestamp-client-key" },
        },
        {
          name: "--timestamp-server-name",
          description:
            "SAN name to use as the 'ServerName' tls.Config field to verify the mTLS connection to the TSA Server",
          args: { name: "timestamp-server-name" },
        },
        {
          name: "--timestamp-server-url",
          description:
            "Url to the Timestamp RFC3161 server, default none. Must be the path to the API to request timestamp responses, e.g. https://freetsa.org/tsr (deprecated: use a signing config to specify a timestamp server url; see `cosign signing-config --help`)",
          deprecated: true,
          args: { name: "timestamp-server-url" },
        },
        {
          name: "--tlog-upload",
          description:
            "Whether or not to upload to the tlog (deprecated: prefer using a --signing-config file with no transparency log services)",
          deprecated: true,
        },
        {
          name: "--trusted-root",
          description:
            "Optional path to a TrustedRoot JSON file to verify a signature after signing",
          args: { name: "trusted-root" },
        },
        {
          name: "--type",
          description:
            "Specify a predicate type (slsaprovenance|slsaprovenance02|slsaprovenance1|link|spdx|spdxjson|cyclonedx|vuln|openvex|custom) or an URI",
          args: {
            name: "type",
            default: "custom",
            suggestions: [
              "slsaprovenance",
              "slsaprovenance02",
              "slsaprovenance1",
              "link",
              "spdx",
              "spdxjson",
              "cyclonedx",
              "vuln",
              "openvex",
              "custom",
            ],
          },
        },
        {
          name: "--use-signing-config",
          description:
            "Whether to use a TUF-provided signing config for the service URLs (deprecated: an offline signing flag will be added in the future; TUF will continue to provide a signing config by default if one is not provided manually)",
          deprecated: true,
        },
        {
          name: ["--yes", "-y"],
          description:
            "Skip confirmation prompts for non-destructive operations",
        },
        ...securityKeyOptions,
        ...predicateLocalOptions,
        ...fulcioOptions,
        ...oidcOptions,
        ...registryOptions,
      ],
      args: { name: "image", isVariadic: true },
    },
    {
      name: "attest-blob",
      description: "Attest the supplied blob",
      options: [
        {
          name: "--bundle",
          description: "Write everything required to verify the blob to a FILE",
          args: { name: "bundle", template: "filepaths" },
        },
        {
          name: ["--certificate", "--cert"],
          description: "Path to the X.509 certificate for signing attestation",
          args: { name: "certificate", template: "filepaths" },
        },
        {
          name: ["--certificate-chain", "--cert-chain"],
          description:
            "Path to a list of CA X.509 certificates in PEM format which will be needed when building the certificate chain for the signed attestation. Must start with the parent intermediate CA certificate of the signing certificate and end with the root certificate",
          args: { name: "certificate-chain", template: "filepaths" },
        },
        {
          name: "--hash",
          description:
            "Hash of blob in hexadecimal (base16). Used if you want to sign an artifact stored elsewhere and have the hash",
          args: { name: "hash" },
        },
        {
          name: "--issue-certificate",
          description:
            "Issue a code signing certificate from Fulcio, even if a key is provided (deprecated: support for this flag will be removed in the future)",
          deprecated: true,
        },
        {
          name: "--key",
          description:
            "Path to the private key file, KMS URI or Kubernetes Secret",
          args: { name: "key", template: "filepaths" },
        },
        {
          name: "--new-bundle-format",
          description:
            "Output bundle in new format that contains all verification material (deprecated: this will be the only supported format in future versions)",
          deprecated: true,
        },
        {
          name: "--output-attestation",
          description:
            "Write the attestation to FILE (deprecated: use --bundle to provide the output bundle location, which will include the attestation)",
          deprecated: true,
          args: { name: "output-attestation" },
        },
        {
          name: ["--output-certificate", "--output-cert"],
          description:
            "Write the certificate to FILE (deprecated: use --bundle to provide the output bundle location, which will include the certificate)",
          deprecated: true,
          args: { name: "output-certificate" },
        },
        {
          name: "--output-signature",
          description:
            "Write the signature to FILE (deprecated: use --bundle to provide the output bundle location, which will include the signature)",
          deprecated: true,
          args: { name: "output-signature", template: "filepaths" },
        },
        {
          name: "--rekor-entry-type",
          description:
            "Specifies the type to be used for a rekor entry upload (dsse|intoto) (deprecated: support for this flag will be removed in the future. it is strongly discouraged to rely on Rekor for attestation storage, and in future releases of Rekor, this functionality will be removed)",
          deprecated: true,
          args: {
            name: "rekor-entry-type",
            default: "dsse",
            suggestions: ["dsse", "intoto"],
          },
        },
        {
          name: "--rekor-url",
          description:
            "Address of rekor STL server (deprecated: use a signing config to specify a rekor url; see `cosign signing-config --help`)",
          deprecated: true,
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--rfc3161-timestamp-bundle",
          description:
            "Path to an RFC 3161 timestamp bundle FILE (deprecated: use --bundle to provide the output bundle location, which will include the signed timestamp)",
          deprecated: true,
          args: { name: "rfc3161-timestamp-bundle" },
        },
        {
          name: "--signing-config",
          description:
            "Path to a signing config file. Must provide --bundle, which will output verification material in the new format",
          args: { name: "signing-config" },
        },
        {
          name: "--timestamp-client-cacert",
          description:
            "Path to the X.509 CA certificate file in PEM format to be used for the connection to the TSA Server",
          args: { name: "timestamp-client-cacert" },
        },
        {
          name: "--timestamp-client-cert",
          description:
            "Path to the X.509 certificate file in PEM format to be used for the connection to the TSA Server",
          args: { name: "timestamp-client-cert" },
        },
        {
          name: "--timestamp-client-key",
          description:
            "Path to the X.509 private key file in PEM format to be used, together with the 'timestamp-client-cert' value, for the connection to the TSA Server",
          args: { name: "timestamp-client-key" },
        },
        {
          name: "--timestamp-server-name",
          description:
            "SAN name to use as the 'ServerName' tls.Config field to verify the mTLS connection to the TSA Server",
          args: { name: "timestamp-server-name" },
        },
        {
          name: "--timestamp-server-url",
          description:
            "Url to the Timestamp RFC3161 server, default none. Must be the path to the API to request timestamp responses, e.g. https://freetsa.org/tsr (deprecated: use a signing config to specify a timestamp server url; see `cosign signing-config --help`)",
          deprecated: true,
          args: { name: "timestamp-server-url" },
        },
        {
          name: "--tlog-upload",
          description:
            "Whether or not to upload to the tlog (deprecated: prefer using a --signing-config file with no transparency log services)",
          deprecated: true,
        },
        {
          name: "--trusted-root",
          description:
            "Optional path to a TrustedRoot JSON file to verify a signature after signing",
          args: { name: "trusted-root" },
        },
        {
          name: "--type",
          description:
            "Specify a predicate type (slsaprovenance|slsaprovenance02|slsaprovenance1|link|spdx|spdxjson|cyclonedx|vuln|openvex|custom) or an URI",
          args: {
            name: "type",
            default: "custom",
            suggestions: [
              "slsaprovenance",
              "slsaprovenance02",
              "slsaprovenance1",
              "link",
              "spdx",
              "spdxjson",
              "cyclonedx",
              "vuln",
              "openvex",
              "custom",
            ],
          },
        },
        {
          name: "--use-signing-config",
          description:
            "Whether to use a TUF-provided signing config for the service URLs. Must provide --bundle, which will output verification material in the new format (deprecated: an offline signing flag will be added in the future; TUF will continue to provide a signing config by default if one is not provided manually)",
          deprecated: true,
        },
        {
          name: ["--yes", "-y"],
          description:
            "Skip confirmation prompts for non-destructive operations",
        },
        ...predicateLocalOptions,
        ...fulcioOptions,
        ...oidcOptions,
        ...securityKeyOptions,
      ],
      args: { name: "blob", isOptional: true, template: "filepaths" },
    },
    {
      name: "bundle",
      description: "Interact with a Sigstore protobuf bundle",
      subcommands: [
        {
          name: "create",
          description: "Create a Sigstore protobuf bundle",
          options: [
            {
              name: "--artifact",
              description: "Path to artifact FILE",
              args: { name: "artifact" },
            },
            {
              name: "--attestation",
              description: "Path to attestation FILE",
              args: { name: "attestation" },
            },
            {
              name: "--bundle",
              description: "Path to old format bundle FILE",
              args: { name: "bundle", template: "filepaths" },
            },
            {
              name: ["--certificate", "--cert"],
              description:
                "Path to the signing certificate, likely from Fulcio",
              args: { name: "certificate", template: "filepaths" },
            },
            {
              name: "--out",
              description: "Path to output bundle",
              args: { name: "out", template: "filepaths" },
            },
            {
              name: "--rfc3161-timestamp",
              description: "Path to RFC3161 timestamp FILE",
              args: { name: "rfc3161-timestamp" },
            },
            {
              name: "--signature",
              description:
                "Path to base64-encoded signature over attestation in DSSE format",
              args: { name: "signature", template: "filepaths" },
            },
            ...commonBundleCreateOptions,
          ],
        },
        {
          name: "create-from-container",
          description:
            "Create Sigstore protobuf bundles from legacy container attestations",
          options: [
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
              deprecated: true,
              args: { name: "attachment-tag-prefix" },
            },
            ...commonBundleCreateOptions,
            ...registryOptions,
          ],
          args: { name: "image" },
        },
        {
          name: "inspect",
          description: "Inspect a Sigstore protobuf bundle",
          args: { name: "bundle", template: "filepaths" },
        },
        {
          name: "upgrade",
          description: "Upgrade a Sigstore protobuf bundle",
          options: [
            {
              name: "--out",
              description: "Path to the output upgraded bundle file",
              args: { name: "out", template: "filepaths" },
            },
            {
              name: "--rekor-url",
              description: "URL of the transparency log",
              args: {
                name: "rekor-url",
                default: "https://rekor.sigstore.dev",
              },
            },
          ],
          args: { name: "bundle", template: "filepaths" },
        },
      ],
    },
    {
      name: "clean",
      description: "Remove all signatures from an image",
      options: [
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
          deprecated: true,
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: ["--force", "-f"],
          description: "Do not prompt for confirmation",
        },
        {
          name: "--type",
          description:
            "A type of clean: <signature|attestation|referrer|sbom|all> (sbom is deprecated)",
          args: {
            name: "type",
            default: "all",
            suggestions: [
              "signature",
              "attestation",
              "referrer",
              "sbom",
              "all",
            ],
          },
        },
        ...registryOptions,
      ],
      args: { name: "image" },
    },
    {
      name: "completion",
      description: "Generate completion script",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: "copy",
      description:
        "Copy the supplied container image and signatures (deprecated: use `oras copy -r`, or `cosign save` then `cosign load`)",
      deprecated: true,
      options: [
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
          deprecated: true,
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: ["--force", "-f"],
          description: "Overwrite destination image(s), if necessary",
        },
        {
          name: "--only",
          description:
            "Custom string array to only copy specific items, this flag is comma delimited. ex: --only=sig,att,sbom",
          isRepeatable: true,
          args: { name: "only" },
        },
        {
          name: "--platform",
          description:
            "Only copy container image and its signatures for a specific platform image",
          args: { name: "platform" },
        },
        { name: "--sig-only", description: "Only copy the image signature" },
        ...registryOptions,
      ],
      args: [{ name: "source image" }, { name: "destination image" }],
    },
    {
      name: "debug",
      description: "Hidden debugging commands",
      hidden: true,
      subcommands: [
        {
          name: "providers",
          description: "Show enabled/disabled OIDC providers",
        },
      ],
    },
    {
      name: "dockerfile",
      description:
        "Provides utilities for discovering images in and performing operations on Dockerfiles (deprecated: will be removed in v4.0.0, use `cosign verify` for each image in the Dockerfile)",
      deprecated: true,
      subcommands: [
        {
          name: "verify",
          description:
            "Verify a signature on the base image specified in the Dockerfile",
          options: [
            {
              name: ["--annotations", "-a"],
              description: "Extra key=value pairs to sign",
              isRepeatable: true,
              args: { name: "annotations" },
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
              deprecated: true,
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--base-image-only",
              description:
                "Only verify the base image (the last FROM image in the Dockerfile)",
            },
            {
              name: "--check-claims",
              description: "Whether to check the claims found",
            },
            {
              name: "--rekor-url",
              description:
                "Address of rekor STL server (deprecated: use --bundle, which includes the Rekor inclusion proof)",
              deprecated: true,
              args: {
                name: "rekor-url",
                default: "https://rekor.sigstore.dev",
              },
            },
            {
              name: "--signature-digest-algorithm",
              description:
                "Digest algorithm to use when processing a signature (sha224|sha256|sha384|sha512) (deprecated: use --bundle, which already includes the digest algorithm)",
              deprecated: true,
              args: {
                name: "signature-digest-algorithm",
                suggestions: ["sha224", "sha256", "sha384", "sha512"],
              },
            },
            ...securityKeyOptions,
            ...certVerifyOptions,
            ...registryOptions,
            ...commonVerifyOptions,
            ...verifyOptions,
          ],
          args: { name: "Dockerfile", template: "filepaths" },
        },
      ],
    },
    {
      name: "download",
      description:
        "Provides utilities for downloading artifacts and attached artifacts in a registry",
      subcommands: [
        {
          name: "attestation",
          description:
            "Download in-toto attestations from the supplied container image",
          options: [
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
              deprecated: true,
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--platform",
              description: "Download attestation for a specific platform image",
              args: { name: "platform" },
            },
            {
              name: "--predicate-type",
              description: "Download attestation with matching predicateType",
              args: { name: "predicate-type" },
            },
            ...registryOptions,
          ],
          args: { name: "image" },
        },
        {
          name: "sbom",
          description: "Download SBOMs from the supplied container image",
          options: [
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
              deprecated: true,
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--platform",
              description: "Download SBOM for a specific platform image",
              args: { name: "platform" },
            },
            ...registryOptions,
          ],
          args: { name: "image" },
        },
        {
          name: "signature",
          description: "Download signatures from the supplied container image",
          options: [
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
              deprecated: true,
              args: { name: "attachment-tag-prefix" },
            },
            ...registryOptions,
          ],
          args: { name: "image" },
        },
      ],
    },
    {
      name: "env",
      description: "Prints Cosign environment variables",
      options: [
        {
          name: "--show-descriptions",
          description:
            "Show descriptions for environment variables (default true)",
        },
        {
          name: "--show-sensitive-values",
          description: "Show values of sensitive environment variables",
        },
      ],
    },
    {
      name: "generate",
      description:
        "Generates (unsigned) signature payloads from the supplied container image (deprecated: will be removed in v4.0.0, use in-toto tooling)",
      deprecated: true,
      options: [
        {
          name: ["--annotations", "-a"],
          description: "Extra key=value pairs to sign",
          isRepeatable: true,
          args: { name: "annotations" },
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
          deprecated: true,
          args: { name: "attachment-tag-prefix" },
        },
        ...registryOptions,
      ],
      args: { name: "image" },
    },
    {
      name: "generate-key-pair",
      description: "Generates a key-pair",
      options: [
        {
          name: "--kms",
          description: "Create key pair in KMS service to use for signing",
          args: { name: "kms" },
        },
        {
          name: "--output-key-prefix",
          description:
            "Name used for generated .pub and .key files (defaults to cosign)",
          args: { name: "output-key-prefix", default: "cosign" },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "attach",
          description:
            "Provides utilities for attaching artifacts to other artifacts in a registry (deprecated: will be removed in v4.0.0, use oras to attach artifacts)",
          subcommands: [
            {
              name: "attestation",
              description: "Attach attestation to the supplied container image",
            },
            {
              name: "sbom",
              description: "Attach sbom to the supplied container image",
            },
            {
              name: "signature",
              description: "Attach signatures to the supplied container image",
            },
          ],
        },
        { name: "attest", description: "Attest the supplied container image" },
        { name: "attest-blob", description: "Attest the supplied blob" },
        {
          name: "bundle",
          description: "Interact with a Sigstore protobuf bundle",
          subcommands: [
            {
              name: "create",
              description: "Create a Sigstore protobuf bundle",
            },
            {
              name: "create-from-container",
              description:
                "Create Sigstore protobuf bundles from legacy container attestations",
            },
            {
              name: "inspect",
              description: "Inspect a Sigstore protobuf bundle",
            },
            {
              name: "upgrade",
              description: "Upgrade a Sigstore protobuf bundle",
            },
          ],
        },
        { name: "clean", description: "Remove all signatures from an image" },
        { name: "completion", description: "Generate completion script" },
        {
          name: "copy",
          description:
            "Copy the supplied container image and signatures (deprecated: use `oras copy -r`, or `cosign save` then `cosign load`)",
        },
        {
          name: "dockerfile",
          description:
            "Provides utilities for discovering images in and performing operations on Dockerfiles (deprecated: will be removed in v4.0.0, use `cosign verify` for each image in the Dockerfile)",
          subcommands: [
            {
              name: "verify",
              description:
                "Verify a signature on the base image specified in the Dockerfile",
            },
          ],
        },
        {
          name: "download",
          description:
            "Provides utilities for downloading artifacts and attached artifacts in a registry",
          subcommands: [
            {
              name: "attestation",
              description:
                "Download in-toto attestations from the supplied container image",
            },
            {
              name: "sbom",
              description: "Download SBOMs from the supplied container image",
            },
            {
              name: "signature",
              description:
                "Download signatures from the supplied container image",
            },
          ],
        },
        { name: "env", description: "Prints Cosign environment variables" },
        {
          name: "generate",
          description:
            "Generates (unsigned) signature payloads from the supplied container image (deprecated: will be removed in v4.0.0, use in-toto tooling)",
        },
        { name: "generate-key-pair", description: "Generates a key-pair" },
        {
          name: "import-key-pair",
          description: "Imports a PEM-encoded RSA or EC private key",
        },
        {
          name: "initialize",
          description:
            "Initializes SigStore root to retrieve trusted certificate and key targets for verification",
        },
        {
          name: "load",
          description: "Load a signed image on disk to a remote registry",
        },
        { name: "login", description: "Log in to a registry" },
        {
          name: "manifest",
          description:
            "Provides utilities for discovering images in and performing operations on Kubernetes manifests (deprecated: will be removed in v4.0.0, use `cosign verify` for each image in the manifest)",
          subcommands: [
            {
              name: "verify",
              description:
                "Verify all signatures of images specified in the manifest",
            },
          ],
        },
        {
          name: "piv-tool",
          description: "Provides utilities for managing a hardware token",
          subcommands: [
            {
              name: "attestation",
              description: "Manage hardware token attestations",
            },
            {
              name: "generate-key",
              description: "Generate a new signing key on the hardware token",
            },
            {
              name: "reset",
              description: "Reset the hardware token completely",
            },
            {
              name: "set-management-key",
              description: "Set the management key of a hardware token",
            },
            { name: "set-pin", description: "Set the PIN on a hardware token" },
            { name: "set-puk", description: "Set the PUK on a hardware token" },
            {
              name: "unblock",
              description: "Unblock a hardware token and set a new PIN",
            },
          ],
        },
        {
          name: "pkcs11-tool",
          description:
            "Provides utilities for retrieving information from a PKCS11 token",
          subcommands: [
            {
              name: "list-keys-uris",
              description: "List URIs of all keys in a PKCS11 token",
            },
            {
              name: "list-tokens",
              description: "List all PKCS11 tokens linked to a module",
            },
          ],
        },
        {
          name: "public-key",
          description: "Gets a public key from the key-pair",
        },
        {
          name: "save",
          description:
            "Save the container image and associated signatures to disk at the specified directory",
        },
        { name: "sign", description: "Sign the supplied container image" },
        {
          name: "sign-blob",
          description:
            "Sign the supplied blob, outputting the base64-encoded signature to stdout",
        },
        {
          name: "signing-config",
          description: "Interact with a Sigstore protobuf signing config",
          subcommands: [
            {
              name: "create",
              description: "Create a Sigstore protobuf signing config",
            },
          ],
        },
        {
          name: "tree",
          description:
            "Display supply chain security related artifacts for an image such as signatures, SBOMs and attestations",
        },
        {
          name: "triangulate",
          description:
            "Outputs the located cosign image reference. This is the location where cosign stores the specified artifact type (deprecated: will be removed in v4.0.0, use `oras discover` or `cosign tree`)",
        },
        {
          name: "trusted-root",
          description: "Interact with a Sigstore protobuf trusted root",
          subcommands: [
            {
              name: "create",
              description: "Create a Sigstore protobuf trusted root",
            },
          ],
        },
        {
          name: "upload",
          description:
            "Provides utilities for uploading artifacts to a registry (deprecated: will be removed in v4.0.0, use `oras blob push`)",
          subcommands: [
            {
              name: "blob",
              description:
                "Upload one or more blobs to the supplied container image address",
            },
            {
              name: "wasm",
              description:
                "Upload a wasm module to the supplied container image reference",
            },
          ],
        },
        {
          name: "verify",
          description: "Verify a signature on the supplied container image",
        },
        {
          name: "verify-attestation",
          description: "Verify an attestation on the supplied container image",
        },
        {
          name: "verify-blob",
          description: "Verify a signature on the supplied blob",
        },
        {
          name: "verify-blob-attestation",
          description: "Verify an attestation on the supplied blob",
        },
        { name: "version", description: "Prints the version" },
      ],
    },
    {
      name: "import-key-pair",
      description: "Imports a PEM-encoded RSA or EC private key",
      options: [
        {
          name: ["--key", "-k"],
          description: "Import key pair to use for signing",
          args: { name: "key", template: "filepaths" },
        },
        {
          name: ["--output-key-prefix", "-o"],
          description: "Name used for outputted key pairs",
          args: { name: "output-key-prefix", default: "import-cosign" },
        },
        {
          name: ["--yes", "-y"],
          description: "Skip confirmation prompts for overwriting existing key",
        },
      ],
    },
    {
      name: "initialize",
      description:
        "Initializes SigStore root to retrieve trusted certificate and key targets for verification",
      options: [
        {
          name: "--mirror",
          description:
            "GCS bucket to a SigStore TUF repository, or HTTP(S) base URL, or file:/// for local filestore remote (air-gap)",
          args: {
            name: "mirror",
            default: "https://tuf-repo-cdn.sigstore.dev",
          },
        },
        {
          name: "--root",
          description:
            "Path to trusted initial root. defaults to embedded root",
          args: { name: "root", template: "folders" },
        },
        {
          name: "--root-checksum",
          description:
            "Checksum of the initial root, required if root is downloaded via http(s). expects sha256 by default, can be changed to sha512 by providing sha512:<checksum>",
          args: { name: "root-checksum" },
        },
        { name: "--staging", description: "Use the staging TUF repository" },
      ],
    },
    {
      name: "load",
      description: "Load a signed image on disk to a remote registry",
      options: [
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
          deprecated: true,
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--dir",
          description:
            "Path to directory where the signed image is stored on disk",
          isRequired: true,
          args: { name: "dir", template: "folders" },
        },
        ...registryOptions,
      ],
      args: { name: "image" },
    },
    {
      name: "login",
      description: "Log in to a registry",
      options: [
        {
          name: ["--password", "-p"],
          description: "Password",
          args: { name: "password" },
        },
        {
          name: "--password-stdin",
          description: "Take the password from stdin",
        },
        {
          name: ["--username", "-u"],
          description: "Username",
          args: { name: "username" },
        },
      ],
      args: { name: "server", isOptional: true },
    },
    {
      name: "manifest",
      description:
        "Provides utilities for discovering images in and performing operations on Kubernetes manifests (deprecated: will be removed in v4.0.0, use `cosign verify` for each image in the manifest)",
      deprecated: true,
      subcommands: [
        {
          name: "verify",
          description:
            "Verify all signatures of images specified in the manifest",
          options: [
            {
              name: ["--annotations", "-a"],
              description: "Extra key=value pairs to sign",
              isRepeatable: true,
              args: { name: "annotations" },
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
              deprecated: true,
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--check-claims",
              description: "Whether to check the claims found",
            },
            {
              name: "--rekor-url",
              description:
                "Address of rekor STL server (deprecated: use --bundle, which includes the Rekor inclusion proof)",
              deprecated: true,
              args: {
                name: "rekor-url",
                default: "https://rekor.sigstore.dev",
              },
            },
            {
              name: "--signature-digest-algorithm",
              description:
                "Digest algorithm to use when processing a signature (sha224|sha256|sha384|sha512) (deprecated: use --bundle, which already includes the digest algorithm)",
              deprecated: true,
              args: {
                name: "signature-digest-algorithm",
                suggestions: ["sha224", "sha256", "sha384", "sha512"],
              },
            },
            ...securityKeyOptions,
            ...certVerifyOptions,
            ...registryOptions,
            ...commonVerifyOptions,
            ...verifyOptions,
          ],
          args: { name: "manifest", template: "filepaths" },
        },
      ],
    },
    {
      name: "piv-tool",
      description: "Provides utilities for managing a hardware token",
      subcommands: [
        {
          name: "attestation",
          description: "Manage hardware token attestations",
          options: [
            {
              name: ["--output", "-o"],
              description:
                "Format to output attestation information in. (text|json)",
              args: {
                name: "output",
                default: "text",
                suggestions: ["json", "text"],
              },
            },
            {
              name: "--slot",
              description:
                "Slot to use for generated key (authentication|signature|card-authentication|key-management)",
              args: {
                name: "slot",
                suggestions: [
                  "authentication",
                  "signature",
                  "card-authentication",
                  "key-management",
                ],
              },
            },
          ],
        },
        {
          name: "generate-key",
          description: "Generate a new signing key on the hardware token",
          options: [
            {
              name: "--management-key",
              description: "Management key, uses default if empty",
              args: { name: "management-key" },
            },
            {
              name: "--pin-policy",
              description: "PIN policy for slot (never|once|always)",
              args: {
                name: "pin-policy",
                suggestions: ["never", "once", "always"],
              },
            },
            {
              name: "--random-management-key",
              description:
                "If set to true, generates a new random management key and deletes it after",
            },
            {
              name: "--slot",
              description:
                "Slot to use for generated key (authentication|signature|card-authentication|key-management)",
              args: {
                name: "slot",
                suggestions: [
                  "authentication",
                  "signature",
                  "card-authentication",
                  "key-management",
                ],
              },
            },
            {
              name: "--touch-policy",
              description: "Touch policy for slot (never|always|cached)",
              args: {
                name: "touch-policy",
                suggestions: ["never", "always", "cached"],
              },
            },
          ],
        },
        {
          name: "reset",
          description: "Reset the hardware token completely",
        },
        {
          name: "set-management-key",
          description: "Set the management key of a hardware token",
          options: [
            {
              name: "--new-key",
              description: "New management key, uses default if empty",
              args: { name: "new-key" },
            },
            {
              name: "--old-key",
              description: "Existing management key, uses default if empty",
              args: { name: "old-key" },
            },
            {
              name: "--random-management-key",
              description:
                "If set to true, generates a new random management key and deletes it after",
            },
          ],
        },
        {
          name: "set-pin",
          description: "Set the PIN on a hardware token",
          options: [
            {
              name: "--new-pin",
              description: "New PIN, uses default if empty",
              args: { name: "new-pin" },
            },
            {
              name: "--old-pin",
              description: "Existing PIN, uses default if empty",
              args: { name: "old-pin" },
            },
          ],
        },
        {
          name: "set-puk",
          description: "Set the PUK on a hardware token",
          options: [
            {
              name: "--new-puk",
              description: "New PUK, uses default if empty",
              args: { name: "new-puk" },
            },
            {
              name: "--old-puk",
              description: "Existing PUK, uses default if empty",
              args: { name: "old-puk" },
            },
          ],
        },
        {
          name: "unblock",
          description: "Unblock a hardware token and set a new PIN",
          options: [
            {
              name: "--new-PIN",
              description: "New PIN, uses default if empty",
              args: { name: "new-PIN" },
            },
            {
              name: "--puk",
              description: "Existing PUK, uses default if empty",
              args: { name: "puk" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--no-input", "-f"],
          description: "Skip warnings and confirmations",
          isPersistent: true,
        },
      ],
    },
    {
      name: "pkcs11-tool",
      description:
        "Provides utilities for retrieving information from a PKCS11 token",
      subcommands: [
        {
          name: "list-keys-uris",
          description: "List URIs of all keys in a PKCS11 token",
          options: [
            {
              name: "--module-path",
              description: "Absolute path to the PKCS11 module",
              args: { name: "module-path", template: "filepaths" },
            },
            {
              name: "--pin",
              description:
                "PIN of the PKCS11 slot, uses environment variable COSIGN_PKCS11_PIN if empty",
              args: { name: "pin" },
            },
            {
              name: "--slot-id",
              description: "Id of the PKCS11 slot, uses 0 if empty",
              args: { name: "slot-id" },
            },
          ],
        },
        {
          name: "list-tokens",
          description: "List all PKCS11 tokens linked to a module",
          options: [
            {
              name: "--module-path",
              description: "Absolute path to the PKCS11 module",
              args: { name: "module-path", template: "filepaths" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--no-input", "-f"],
          description: "Skip warnings and confirmations",
          isPersistent: true,
        },
      ],
    },
    {
      name: "public-key",
      description: "Gets a public key from the key-pair",
      options: [
        {
          name: "--key",
          description:
            "Path to the private key file, KMS URI or Kubernetes Secret",
          args: { name: "key", template: "filepaths" },
        },
        {
          name: "--outfile",
          description:
            "Path to a payload file to use rather than generating one",
          args: { name: "outfile", template: "filepaths" },
        },
        ...securityKeyOptions,
      ],
    },
    {
      name: "save",
      description:
        "Save the container image and associated signatures to disk at the specified directory",
      options: [
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
          deprecated: true,
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--dir",
          description:
            "Path to dir where the signed image should be stored on disk",
          isRequired: true,
          args: { name: "dir", template: "folders" },
        },
        ...registryOptions,
      ],
      args: { name: "image" },
    },
    {
      name: "sign",
      description: "Sign the supplied container image",
      options: [
        {
          name: ["--annotations", "-a"],
          description: "Extra key=value pairs to sign",
          isRepeatable: true,
          args: { name: "annotations" },
        },
        {
          name: "--attachment",
          description:
            "Related image attachment to sign (sbom), default none (deprecated: use OCI referrers for attachments; see `cosign attach sbom --registry-referrers-mode=oci-1-1 --help`)",
          deprecated: true,
          args: { name: "attachment", template: "filepaths" },
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
          deprecated: true,
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--bundle",
          description: "Write everything required to verify the image to FILE",
          args: { name: "bundle", template: "filepaths" },
        },
        {
          name: ["--certificate", "--cert"],
          description:
            "Path to the X.509 certificate in PEM format to include in the OCI Signature",
          args: { name: "certificate", template: "filepaths" },
        },
        {
          name: ["--certificate-chain", "--cert-chain"],
          description:
            "Path to a list of CA X.509 certificates in PEM format which will be needed when building the certificate chain for the signing certificate. Must start with the parent intermediate CA certificate of the signing certificate and end with the root certificate. Included in the OCI Signature",
          args: { name: "certificate-chain", template: "filepaths" },
        },
        {
          name: "--issue-certificate",
          description:
            "Issue a code signing certificate from Fulcio, even if a key is provided (deprecated: support for this flag will be removed in the future)",
          deprecated: true,
        },
        {
          name: "--key",
          description:
            "Path to the private key file, KMS URI or Kubernetes Secret",
          args: { name: "key", template: "filepaths" },
        },
        {
          name: "--new-bundle-format",
          description:
            "Expect the signature/attestation to be packaged in a Sigstore bundle (deprecated: this will be the only supported format in future versions)",
          deprecated: true,
        },
        {
          name: ["--output-certificate", "--output-cert"],
          description:
            "Write the certificate to FILE (deprecated: use --bundle to provide the output bundle location, which will include the certificate)",
          deprecated: true,
          args: { name: "output-certificate", template: "filepaths" },
        },
        {
          name: "--output-payload",
          description:
            "Write the signed payload to FILE (deprecated: use --bundle to provide the output bundle location, which will include the payload)",
          deprecated: true,
          args: { name: "output-payload" },
        },
        {
          name: "--output-signature",
          description:
            "Write the signature to FILE (deprecated: use --bundle to provide the output bundle location, which will include the signature)",
          deprecated: true,
          args: { name: "output-signature", template: "filepaths" },
        },
        {
          name: "--payload",
          description:
            "Path to a payload file to use rather than generating one (deprecated: payload will always be generated automatically in future versions)",
          deprecated: true,
          args: { name: "payload" },
        },
        {
          name: "--record-creation-timestamp",
          description:
            "Set the createdAt timestamp in the signature artifact to the time it was created; by default, cosign sets this to the zero value (deprecated: not used with the new bundle format)",
          deprecated: true,
        },
        {
          name: ["--recursive", "-r"],
          description:
            "If a multi-arch image is specified, additionally sign each discrete image",
        },
        {
          name: "--registry-referrers-mode",
          description:
            "Mode for fetching references from the registry. allowed: legacy, oci-1-1",
          args: {
            name: "registry-referrers-mode",
            suggestions: ["legacy", "oci-1-1"],
          },
        },
        {
          name: "--rekor-url",
          description:
            "Address of rekor STL server (deprecated: use a signing config to specify a rekor url; see `cosign signing-config --help`)",
          deprecated: true,
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--sign-container-identity",
          description:
            "Manually set the .critical.docker-reference field for the signed identity, which is useful when image proxies are being used where the pull reference should match the signature, this flag is comma delimited. ex: --sign-container-identity=identity1,identity2 (deprecated: not possible when OCI referrers become the default behavior)",
          isRepeatable: true,
          deprecated: true,
          args: { name: "sign-container-identity" },
        },
        {
          name: "--signing-config",
          description: "Path to a signing config file",
          args: { name: "signing-config" },
        },
        {
          name: "--timestamp-client-cacert",
          description:
            "Path to the X.509 CA certificate file in PEM format to be used for the connection to the TSA Server",
          args: { name: "timestamp-client-cacert", template: "filepaths" },
        },
        {
          name: "--timestamp-client-cert",
          description:
            "Path to the X.509 certificate file in PEM format to be used for the connection to the TSA Server",
          args: { name: "timestamp-client-cert", template: "filepaths" },
        },
        {
          name: "--timestamp-client-key",
          description:
            "Path to the X.509 private key file in PEM format to be used, together with the 'timestamp-client-cert' value, for the connection to the TSA Server",
          args: { name: "timestamp-client-key", template: "filepaths" },
        },
        {
          name: "--timestamp-server-name",
          description:
            "SAN name to use as the 'ServerName' tls.Config field to verify the mTLS connection to the TSA Server",
          args: { name: "timestamp-server-name" },
        },
        {
          name: "--timestamp-server-url",
          description:
            "Url to the Timestamp RFC3161 server, default none. Must be the path to the API to request timestamp responses, e.g. https://freetsa.org/tsr (deprecated: use a signing config to specify a timestamp server url; see `cosign signing-config --help`)",
          deprecated: true,
          args: { name: "timestamp-server-url" },
        },
        {
          name: "--tlog-upload",
          description:
            "Whether or not to upload to the tlog (deprecated: prefer using a --signing-config file with no transparency log services)",
          deprecated: true,
        },
        {
          name: "--trusted-root",
          description:
            "Optional path to a TrustedRoot JSON file to verify a signature after signing",
          args: { name: "trusted-root" },
        },
        {
          name: "--upload",
          description: "Whether to upload the signature (default true)",
        },
        {
          name: "--use-signing-config",
          description:
            "Whether to use a TUF-provided signing config for the service URLs (deprecated: an offline signing flag will be added in the future; TUF will continue to provide a signing config by default if one is not provided manually)",
          deprecated: true,
        },
        {
          name: ["--yes", "-y"],
          description:
            "Skip confirmation prompts for non-destructive operations",
        },
        ...fulcioOptions,
        ...oidcOptions,
        ...securityKeyOptions,
        ...registryOptions,
      ],
      args: { name: "image", isVariadic: true },
    },
    {
      name: "sign-blob",
      description:
        "Sign the supplied blob, outputting the base64-encoded signature to stdout",
      options: [
        {
          name: "--b64",
          description:
            "Whether to base64 encode the output (deprecated: use --bundle, which already base64 encodes content as appropriate)",
          deprecated: true,
        },
        {
          name: "--bundle",
          description: "Write everything required to verify the blob to a FILE",
          args: { name: "bundle", template: "filepaths" },
        },
        {
          name: ["--certificate", "--cert"],
          description: "Path to the X.509 certificate for signing attestation",
          args: { name: "certificate", template: "filepaths" },
        },
        {
          name: ["--certificate-chain", "--cert-chain"],
          description:
            "Path to a list of CA X.509 certificates in PEM format which will be needed when building the certificate chain for the signed attestation. Must start with the parent intermediate CA certificate of the signing certificate and end with the root certificate",
          args: { name: "certificate-chain", template: "filepaths" },
        },
        {
          name: "--issue-certificate",
          description:
            "Issue a code signing certificate from Fulcio, even if a key is provided (deprecated: support for this flag will be removed in the future)",
          deprecated: true,
        },
        {
          name: "--key",
          description:
            "Path to the private key file, KMS URI or Kubernetes Secret",
          args: { name: "key", template: "filepaths" },
        },
        {
          name: "--new-bundle-format",
          description:
            "Output bundle in new format that contains all verification material (deprecated: this will be the only supported format in future versions)",
          deprecated: true,
        },
        {
          name: "--output",
          description:
            "Write the signature to FILE (deprecated: use --bundle to provide the output bundle location, which will include the signature)",
          deprecated: true,
          args: { name: "output", template: "filepaths" },
        },
        {
          name: ["--output-certificate", "--output-cert"],
          description:
            "Write the certificate to FILE (deprecated: use --bundle to provide the output bundle location, which will include the certificate)",
          deprecated: true,
          args: { name: "output-certificate", template: "filepaths" },
        },
        {
          name: "--output-signature",
          description:
            "Write the signature to FILE (deprecated: use --bundle to provide the output bundle location, which will include the signature)",
          deprecated: true,
          args: { name: "output-signature", template: "filepaths" },
        },
        {
          name: "--rekor-url",
          description:
            "Address of rekor STL server (deprecated: use a signing config to specify a rekor url; see `cosign signing-config --help`)",
          deprecated: true,
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--rfc3161-timestamp",
          description:
            "Write the RFC3161 timestamp to a file (deprecated: use --bundle to provide the output bundle location, which will include the signed timestamp)",
          deprecated: true,
          args: { name: "rfc3161-timestamp" },
        },
        {
          name: "--signing-algorithm",
          description:
            "Signing algorithm to use for signing/hashing (allowed ecdsa-sha2-256-nistp256, ecdsa-sha2-384-nistp384, ecdsa-sha2-512-nistp521, rsa-sign-pkcs1-2048-sha256, rsa-sign-pkcs1-3072-sha256, rsa-sign-pkcs1-4096-sha256)",
          args: {
            name: "signing-algorithm",
            default: "ecdsa-sha2-256-nistp256",
            suggestions: [
              "ecdsa-sha2-256-nistp256",
              "ecdsa-sha2-384-nistp384",
              "ecdsa-sha2-512-nistp521",
              "rsa-sign-pkcs1-2048-sha256",
              "rsa-sign-pkcs1-3072-sha256",
              "rsa-sign-pkcs1-4096-sha256",
            ],
          },
        },
        {
          name: "--signing-config",
          description:
            "Path to a signing config file. Must provide --bundle, which will output verification material in the new format",
          args: { name: "signing-config" },
        },
        {
          name: "--timestamp-client-cacert",
          description:
            "Path to the X.509 CA certificate file in PEM format to be used for the connection to the TSA Server",
          args: { name: "timestamp-client-cacert", template: "filepaths" },
        },
        {
          name: "--timestamp-client-cert",
          description:
            "Path to the X.509 certificate file in PEM format to be used for the connection to the TSA Server",
          args: { name: "timestamp-client-cert", template: "filepaths" },
        },
        {
          name: "--timestamp-client-key",
          description:
            "Path to the X.509 private key file in PEM format to be used, together with the 'timestamp-client-cert' value, for the connection to the TSA Server",
          args: { name: "timestamp-client-key", template: "filepaths" },
        },
        {
          name: "--timestamp-server-name",
          description:
            "SAN name to use as the 'ServerName' tls.Config field to verify the mTLS connection to the TSA Server",
          args: { name: "timestamp-server-name" },
        },
        {
          name: "--timestamp-server-url",
          description:
            "Url to the Timestamp RFC3161 server, default none. Must be the path to the API to request timestamp responses, e.g. https://freetsa.org/tsr (deprecated: use a signing config to specify a timestamp server url; see `cosign signing-config --help`)",
          deprecated: true,
          args: { name: "timestamp-server-url" },
        },
        {
          name: "--tlog-upload",
          description:
            "Whether or not to upload to the tlog (deprecated: prefer using a --signing-config file with no transparency log services)",
          deprecated: true,
        },
        {
          name: "--trusted-root",
          description:
            "Optional path to a TrustedRoot JSON file to verify a signature after signing",
          args: { name: "trusted-root" },
        },
        {
          name: "--use-signing-config",
          description:
            "Whether to use a TUF-provided signing config for the service URLs. Must provide --bundle, which will output verification material in the new format (deprecated: an offline signing flag will be added in the future; TUF will continue to provide a signing config by default if one is not provided manually)",
          deprecated: true,
        },
        {
          name: ["--yes", "-y"],
          description:
            "Skip confirmation prompts for non-destructive operations",
        },
        ...securityKeyOptions,
        ...fulcioOptions,
        ...oidcOptions,
      ],
      args: { name: "blob", template: "filepaths" },
    },
    {
      name: "signing-config",
      description: "Interact with a Sigstore protobuf signing config",
      subcommands: [
        {
          name: "create",
          description: "Create a Sigstore protobuf signing config",
          options: [
            {
              name: "--base-config",
              description:
                "Path to base signing config file to use as starting point. Service flags will replace services from the base config",
              args: { name: "base-config" },
            },
            {
              name: "--fulcio",
              description:
                "Fulcio service specification, as a comma-separated key-value list. Required keys: url, api-version (integer), start-time, operator. Optional keys: end-time",
              isRepeatable: true,
              args: { name: "fulcio" },
            },
            {
              name: "--no-default-fulcio",
              description:
                "Removes the default Fulcio URLs from the signing config",
            },
            {
              name: "--no-default-oidc",
              description:
                "Removes the default OIDC provider URLs from the signing config",
            },
            {
              name: "--no-default-rekor",
              description:
                "Removes the default Rekor URLs from the signing config",
            },
            {
              name: "--no-default-tsa",
              description:
                "Removes the default TSA URLs from the signing config",
            },
            {
              name: "--oidc-provider",
              description:
                "OIDC provider specification, as a comma-separated key-value list. Required keys: url, api-version (integer), start-time, operator. Optional keys: end-time",
              isRepeatable: true,
              args: { name: "oidc-provider" },
            },
            {
              name: "--out",
              description: "Path to output signing config",
              args: { name: "out" },
            },
            {
              name: "--rekor",
              description:
                "Rekor service specification, as a comma-separated key-value list. Required keys: url, api-version (integer), start-time, operator. Optional keys: end-time",
              isRepeatable: true,
              args: { name: "rekor" },
            },
            {
              name: "--rekor-config",
              description:
                "Rekor configuration. Required if --rekor is provided. One of: ANY, ALL, EXACT:<count>",
              args: { name: "rekor-config", suggestions: ["ANY", "ALL"] },
            },
            {
              name: "--tsa",
              description:
                "Timestamping authority specification, as a comma-separated key-value list. Required keys: url, api-version (integer), start-time, operator. Optional keys: end-time",
              isRepeatable: true,
              args: { name: "tsa" },
            },
            {
              name: "--tsa-config",
              description:
                "Timestamping authority configuration. Required if --tsa is provided. One of: ANY, ALL, EXACT:<count>",
              args: { name: "tsa-config", suggestions: ["ANY", "ALL"] },
            },
            {
              name: "--with-default-rekor-v2",
              description:
                "Use the Sigstore TUF root, with the Rekor v2 service, as default values to populate the signing config. Specifying the other service flags will override the default values",
            },
            {
              name: "--with-default-services",
              description:
                "Use the Sigstore TUF root as default values to populate the signing config. Specifying the other service flags will override the default values",
            },
          ],
        },
      ],
    },
    {
      name: "tree",
      description:
        "Display supply chain security related artifacts for an image such as signatures, SBOMs and attestations",
      options: [
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
          deprecated: true,
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--experimental-oci11",
          description:
            "Set to false to ignore OCI 1.1 behavior (deprecated: OCI referrers will be the default behavior in future versions)",
          deprecated: true,
        },
        {
          name: "--registry-referrers-mode",
          description:
            "Mode for fetching references from the registry. allowed: legacy, oci-1-1",
          args: {
            name: "registry-referrers-mode",
            suggestions: ["legacy", "oci-1-1"],
          },
        },
        ...registryOptions,
      ],
      args: { name: "image" },
    },
    {
      name: "triangulate",
      description:
        "Outputs the located cosign image reference. This is the location where cosign stores the specified artifact type (deprecated: will be removed in v4.0.0, use `oras discover` or `cosign tree`)",
      deprecated: true,
      options: [
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
          deprecated: true,
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--type",
          description:
            "Related attachment to triangulate (attestation|sbom|signature|digest), default signature (sbom is deprecated)",
          args: {
            name: "type",
            default: "signature",
            suggestions: ["attestation", "sbom", "signature", "digest"],
          },
        },
        ...registryOptions,
      ],
      args: { name: "image" },
    },
    {
      name: "trusted-root",
      description: "Interact with a Sigstore protobuf trusted root",
      subcommands: [
        {
          name: "create",
          description: "Create a Sigstore protobuf trusted root",
          options: [
            {
              name: ["--certificate-chain", "--cert-chain"],
              description:
                "Path to a list of CA certificates in PEM format which will be needed when building the certificate chain for the signing certificate. Must start with the parent intermediate CA certificate of the signing certificate and end with the root certificate (deprecated: use --fulcio instead)",
              isRepeatable: true,
              deprecated: true,
              args: { name: "certificate-chain", template: "filepaths" },
            },
            {
              name: "--ctfe",
              description:
                "CTFE service specification, as a comma-separated key-value list. Required keys: url, public-key (path to PEM-encoded public key), start-time. Optional keys: end-time, origin",
              isRepeatable: true,
              args: { name: "ctfe" },
            },
            {
              name: "--ctfe-end-time",
              description:
                "RFC 3339 string describing validity end time for key use by certificate transparency log (deprecated: use --ctfe instead)",
              isRepeatable: true,
              deprecated: true,
              args: { name: "ctfe-end-time" },
            },
            {
              name: "--ctfe-key",
              description:
                "Path to a PEM-encoded public key used by certificate authority for certificate transparency log (deprecated: use --ctfe instead)",
              isRepeatable: true,
              deprecated: true,
              args: { name: "ctfe-key", template: "filepaths" },
            },
            {
              name: "--ctfe-start-time",
              description:
                "RFC 3339 string describing validity start time for key use by certificate transparency log (deprecated: use --ctfe instead)",
              isRepeatable: true,
              deprecated: true,
              args: { name: "ctfe-start-time" },
            },
            {
              name: "--ctfe-url",
              description:
                "URL of the certificate transparency log (deprecated: use --ctfe instead)",
              isRepeatable: true,
              deprecated: true,
              args: { name: "ctfe-url" },
            },
            {
              name: "--fulcio",
              description:
                "Fulcio service specification, as a comma-separated key-value list. Required keys: url, certificate-chain (path to PEM-encoded certificate chain). Optional keys: start-time, end-time",
              isRepeatable: true,
              args: { name: "fulcio" },
            },
            {
              name: "--fulcio-uri",
              description:
                "URI of the Fulcio server issuing certificates (deprecated: use --fulcio instead)",
              isRepeatable: true,
              deprecated: true,
              args: { name: "fulcio-uri" },
            },
            {
              name: "--no-default-ctfe",
              description:
                "Removes the default CTFE URLs from the trusted root",
            },
            {
              name: "--no-default-fulcio",
              description:
                "Removes the default Fulcio URLs from the trusted root",
            },
            {
              name: "--no-default-rekor",
              description:
                "Removes the default Rekor URLs from the trusted root",
            },
            {
              name: "--no-default-tsa",
              description: "Removes the default TSA URLs from the trusted root",
            },
            {
              name: "--out",
              description: "Path to output trusted root",
              args: { name: "out" },
            },
            {
              name: "--rekor",
              description:
                "Rekor service specification, as a comma-separated key-value list. Required keys: url, public-key (path to PEM-encoded public key), start-time. Optional keys: end-time, origin",
              isRepeatable: true,
              args: { name: "rekor" },
            },
            {
              name: "--rekor-end-time",
              description:
                "RFC 3339 string describing validity end time for key use by transparency log like Rekor (deprecated: use --rekor instead)",
              isRepeatable: true,
              deprecated: true,
              args: { name: "rekor-end-time" },
            },
            {
              name: "--rekor-key",
              description:
                "Path to a PEM-encoded public key used by transparency log like Rekor. For Rekor V2, append the Rekor server name with ',', e.g. '--rekor-key=/path/to/key.pub,rekor.example.test' (deprecated: use --rekor instead)",
              isRepeatable: true,
              deprecated: true,
              args: { name: "rekor-key", template: "filepaths" },
            },
            {
              name: "--rekor-start-time",
              description:
                "RFC 3339 string describing validity start time for key use by transparency log like Rekor (deprecated: use --rekor instead)",
              isRepeatable: true,
              deprecated: true,
              args: { name: "rekor-start-time" },
            },
            {
              name: "--rekor-url",
              description:
                "URL of the transparency log (deprecated: use --rekor instead)",
              isRepeatable: true,
              deprecated: true,
              args: { name: "rekor-url" },
            },
            {
              name: "--timestamp-certificate-chain",
              description:
                "Path to PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must contain the root CA certificate. Optionally may contain intermediate CA certificates (deprecated: use --tsa instead)",
              isRepeatable: true,
              deprecated: true,
              args: {
                name: "timestamp-certificate-chain",
                template: "filepaths",
              },
            },
            {
              name: "--timestamp-uri",
              description:
                "URI of the timestamp authority server (deprecated: use --tsa instead)",
              isRepeatable: true,
              deprecated: true,
              args: { name: "timestamp-uri" },
            },
            {
              name: "--tsa",
              description:
                "Timestamping authority specification, as a comma-separated key-value list. Required keys: url, certificate-chain (path to PEM-encoded certificate chain). Optional keys: start-time, end-time",
              isRepeatable: true,
              args: { name: "tsa" },
            },
            {
              name: "--with-default-services",
              description:
                "Use the Sigstore TUF root as default values to populate the trusted root. Specifying the other service flags will override the default values",
            },
          ],
        },
      ],
    },
    {
      name: "upload",
      description:
        "Provides utilities for uploading artifacts to a registry (deprecated: will be removed in v4.0.0, use `oras blob push`)",
      deprecated: true,
      subcommands: [
        {
          name: "blob",
          description:
            "Upload one or more blobs to the supplied container image address",
          options: [
            {
              name: ["--annotation", "-a"],
              description: "Annotations to set",
              isRepeatable: true,
              args: { name: "annotation" },
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
              deprecated: true,
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--ct",
              description: "Content type to set",
              args: { name: "ct" },
            },
            {
              name: ["--files", "-f"],
              description: "<filepath>:[platform/arch]",
              isRepeatable: true,
              args: { name: "files" },
            },
            ...registryOptions,
          ],
          args: { name: "image" },
        },
        {
          name: "wasm",
          description:
            "Upload a wasm module to the supplied container image reference",
          options: [
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
              deprecated: true,
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: ["--file", "-f"],
              description: "Path to the wasm file to upload",
              isRequired: true,
              args: { name: "file", template: "filepaths" },
            },
            ...registryOptions,
          ],
          args: { name: "image" },
        },
      ],
    },
    {
      name: "verify",
      description: "Verify a signature on the supplied container image",
      options: [
        {
          name: ["--annotations", "-a"],
          description: "Extra key=value pairs to sign",
          isRepeatable: true,
          args: { name: "annotations" },
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
          deprecated: true,
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--check-claims",
          description: "Whether to check the claims found (default true)",
        },
        {
          name: "--rekor-url",
          description:
            "Address of rekor STL server (deprecated: use --bundle, which includes the Rekor inclusion proof)",
          deprecated: true,
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--signature-digest-algorithm",
          description:
            "Digest algorithm to use when processing a signature (sha224|sha256|sha384|sha512) (deprecated: use --bundle, which already includes the digest algorithm)",
          deprecated: true,
          args: {
            name: "signature-digest-algorithm",
            suggestions: ["sha224", "sha256", "sha384", "sha512"],
          },
        },
        ...securityKeyOptions,
        ...certVerifyOptions,
        ...registryOptions,
        ...commonVerifyOptions,
        ...verifyOptions,
      ],
      args: { name: "image", isVariadic: true },
    },
    {
      name: "verify-attestation",
      description: "Verify an attestation on the supplied container image",
      options: [
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]` (deprecated: use OCI referrers)",
          deprecated: true,
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--check-claims",
          description: "Whether to check the claims found (default true)",
        },
        {
          name: "--key",
          description:
            "Path to the public key file, KMS URI or Kubernetes Secret",
          args: { name: "key", template: "filepaths" },
        },
        {
          name: "--local-image",
          description:
            "Whether the specified image is a path to an image saved locally via 'cosign save'",
        },
        {
          name: ["--output", "-o"],
          description:
            "Output format for the signing image information (json|text)",
          args: {
            name: "output",
            default: "json",
            suggestions: ["json", "text"],
          },
        },
        {
          name: "--policy",
          description:
            "Specify CUE or Rego files with policies to be used for validation",
          isRepeatable: true,
          args: { name: "policy", template: "filepaths" },
        },
        {
          name: "--rekor-url",
          description:
            "Address of rekor STL server (deprecated: use --bundle, which includes the Rekor inclusion proof)",
          deprecated: true,
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--signature-digest-algorithm",
          description:
            "Digest algorithm to use when processing a signature (sha224|sha256|sha384|sha512) (deprecated: use --bundle, which already includes the digest algorithm)",
          deprecated: true,
          args: {
            name: "signature-digest-algorithm",
            suggestions: ["sha224", "sha256", "sha384", "sha512"],
          },
        },
        {
          name: "--type",
          description:
            "Specify a predicate type (slsaprovenance|slsaprovenance02|slsaprovenance1|link|spdx|spdxjson|cyclonedx|vuln|openvex|custom) or an URI",
          args: {
            name: "type",
            default: "custom",
            suggestions: [
              "slsaprovenance",
              "slsaprovenance02",
              "slsaprovenance1",
              "link",
              "spdx",
              "spdxjson",
              "cyclonedx",
              "vuln",
              "openvex",
              "custom",
            ],
          },
        },
        ...securityKeyOptions,
        ...certVerifyOptions,
        ...registryOptions,
        ...commonVerifyOptions,
      ],
      args: { name: "image", isVariadic: true },
    },
    {
      name: "verify-blob",
      description: "Verify a signature on the supplied blob",
      options: [
        {
          name: "--bundle",
          description: "Path to bundle FILE",
          args: { name: "bundle", template: "filepaths" },
        },
        {
          name: "--key",
          description:
            "Path to the public key file, KMS URI or Kubernetes Secret",
          args: { name: "key", template: "filepaths" },
        },
        {
          name: "--rekor-url",
          description:
            "Address of rekor STL server (deprecated: use --bundle, which includes the Rekor inclusion proof)",
          deprecated: true,
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--rfc3161-timestamp",
          description:
            "Path to RFC3161 timestamp FILE (deprecated: use --bundle to provide the output bundle location, which will include the signed timestamp)",
          deprecated: true,
          args: { name: "rfc3161-timestamp" },
        },
        {
          name: "--signature",
          description:
            "Signature content or path or remote URL (deprecated: use --bundle to provide a signature)",
          deprecated: true,
          args: { name: "signature", template: "filepaths" },
        },
        {
          name: "--signature-digest-algorithm",
          description:
            "Digest algorithm to use when processing a signature (sha224|sha256|sha384|sha512) (deprecated: use --bundle, which already includes the digest algorithm)",
          deprecated: true,
          args: {
            name: "signature-digest-algorithm",
            suggestions: ["sha224", "sha256", "sha384", "sha512"],
          },
        },
        ...securityKeyOptions,
        ...certVerifyOptions,
        ...commonVerifyOptions,
      ],
      args: { name: "blob", template: "filepaths" },
    },
    {
      name: "verify-blob-attestation",
      description: "Verify an attestation on the supplied blob",
      options: [
        {
          name: "--bundle",
          description: "Path to bundle FILE",
          args: { name: "bundle", template: "filepaths" },
        },
        {
          name: "--check-claims",
          description:
            "If true, verifies the digest exists in the in-toto subject (using either the provided digest and digest algorithm or the provided blob's sha256 digest). If false, only the DSSE envelope is verified. (default true)",
        },
        {
          name: "--digest",
          description:
            "Digest to use for verifying in-toto subject (instead of providing a blob)",
          args: { name: "digest" },
        },
        {
          name: "--digestAlg",
          description:
            "Digest algorithm to use for verifying in-toto subject (instead of providing a blob)",
          args: { name: "digestAlg" },
        },
        {
          name: "--key",
          description:
            "Path to the public key file, KMS URI or Kubernetes Secret",
          args: { name: "key", template: "filepaths" },
        },
        {
          name: "--rekor-url",
          description:
            "Address of rekor STL server (deprecated: use --bundle, which includes the Rekor inclusion proof)",
          deprecated: true,
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--rfc3161-timestamp",
          description:
            "Path to RFC3161 timestamp FILE (deprecated: use --bundle to provide the output bundle location, which will include the signed timestamp)",
          deprecated: true,
          args: { name: "rfc3161-timestamp" },
        },
        {
          name: "--signature",
          description:
            "Path to base64-encoded signature over attestation in DSSE format (deprecated: use --bundle to provide a signature)",
          deprecated: true,
          args: { name: "signature", template: "filepaths" },
        },
        {
          name: "--signature-digest-algorithm",
          description:
            "Digest algorithm to use when processing a signature (sha224|sha256|sha384|sha512) (deprecated: use --bundle, which already includes the digest algorithm)",
          deprecated: true,
          args: {
            name: "signature-digest-algorithm",
            suggestions: ["sha224", "sha256", "sha384", "sha512"],
          },
        },
        {
          name: "--type",
          description:
            "Specify a predicate type (slsaprovenance|slsaprovenance02|slsaprovenance1|link|spdx|spdxjson|cyclonedx|vuln|openvex|custom) or an URI",
          args: {
            name: "type",
            default: "custom",
            suggestions: [
              "slsaprovenance",
              "slsaprovenance02",
              "slsaprovenance1",
              "link",
              "spdx",
              "spdxjson",
              "cyclonedx",
              "vuln",
              "openvex",
              "custom",
            ],
          },
        },
        ...securityKeyOptions,
        ...certVerifyOptions,
        ...commonVerifyOptions,
      ],
      args: { name: "blob", isOptional: true, template: "filepaths" },
    },
    {
      name: "version",
      description: "Prints the version",
      options: [{ name: "--json", description: "Print JSON instead of text" }],
    },
  ],
  options: [
    {
      name: "--output-file",
      description: "Log output to a file",
      isPersistent: true,
      args: { name: "output-file", template: "filepaths" },
    },
    {
      name: ["--timeout", "-t"],
      description: "Timeout for commands",
      isPersistent: true,
      args: { name: "timeout", default: "3m0s" },
    },
    {
      name: ["--verbose", "-d"],
      description: "Log debug output",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Help for cosign",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
