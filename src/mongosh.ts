// MongoDB Shell mongosh v2.14.2 (GitHub release, 2026-11-11). Source: the
// `--help` layout in packages/cli-repl/src/constants.ts and the option schema
// in packages/arg-parser/src/cli-options.ts at tag v2.14.2. Options the
// schema accepts but `--help` doesn't list are hidden; test-only ones
// (smokeTests, perfTests, exposeAsyncRewriter, jsContext) are left out.

const file = (name: string, description: string): Fig.Option => ({
  name,
  description,
  args: { name: "file", template: "filepaths" },
});

const value = (
  name: string | string[],
  description: string,
  arg = "value"
) => ({
  name,
  description,
  args: { name: arg },
});

const optionalEquals = (
  name: string,
  description: string,
  suggestions: string[]
): Fig.Option => ({
  name,
  description,
  requiresSeparator: true,
  args: { name: "value", isOptional: true, suggestions },
});

const deprecatedSsl = (name: string, replacement: string, arg?: string) => ({
  name,
  description: `Deprecated: use ${replacement}`,
  deprecated: { description: `Use ${replacement}` },
  ...(arg && { args: { name: arg } }),
});

const completionSpec: Fig.Spec = {
  name: "mongosh",
  description:
    "The MongoDB Shell, a JavaScript and Node.js REPL for interacting with MongoDB deployments",
  args: [
    {
      name: "db address",
      description: "Database name, host[:port]/db, or a connection string",
      isOptional: true,
      suggestions: [
        {
          name: "mongodb://localhost:27017",
          description: "Default connection string",
        },
        {
          name: "mongodb+srv://",
          description: "Atlas / DNS seed list connection string",
          priority: 35,
        },
      ],
    },
    {
      name: "file names",
      description:
        "Scripts ending in .js or .mongodb; exits after unless --shell",
      isOptional: true,
      isVariadic: true,
      template: "filepaths",
    },
  ],
  options: [
    // Options
    { name: ["-h", "--help"], description: "Show this usage information" },
    {
      name: ["-f", "--file"],
      description: "Load the specified mongosh script",
      isRepeatable: true,
      args: { name: "file", template: "filepaths" },
    },
    value("--host", "Server to connect to", "host"),
    value("--port", "Port to connect to (default: 27017)", "port"),
    { name: "--build-info", description: "Show build information" },
    { name: "--version", description: "Show version information" },
    {
      name: "--quiet",
      description:
        "Silence output from the shell during the connection process",
    },
    { name: "--shell", description: "Run the shell after executing files" },
    {
      name: "--nodb",
      description:
        "Don't connect to mongod on startup (no db address expected)",
    },
    {
      name: "--norc",
      description: "Don't run the .mongoshrc.js file on startup",
    },
    {
      name: "--eval",
      description: "Evaluate javascript",
      isRepeatable: true,
      args: { name: "javascript" },
    },
    optionalEquals(
      "--json",
      "Print result of --eval as Extended JSON, including errors",
      ["canonical", "relaxed"]
    ),
    optionalEquals(
      "--retryWrites",
      "Retry write operations upon transient network errors (default: true)",
      ["true", "false"]
    ),
    optionalEquals(
      "--deep-inspect",
      "Force full depth inspection of server results (default: true if interactive)",
      ["true", "false"]
    ),

    // Authentication Options
    value(["-u", "--username"], "Username for authentication", "username"),
    value(["-p", "--password"], "Password for authentication", "password"),
    value(
      "--authenticationDatabase",
      "User source (defaults to dbname)",
      "dbname"
    ),
    {
      name: "--authenticationMechanism",
      description: "Authentication mechanism",
      args: {
        name: "mechanism",
        suggestions: [
          {
            name: "SCRAM-SHA-256",
            description: "Salted challenge-response, SHA-256",
          },
          {
            name: "SCRAM-SHA-1",
            description: "Salted challenge-response, SHA-1",
          },
          { name: "MONGODB-X509", description: "TLS client certificate" },
          { name: "MONGODB-AWS", description: "AWS IAM credentials" },
          {
            name: "MONGODB-OIDC",
            description: "OpenID Connect (workforce or workload)",
          },
          { name: "GSSAPI", description: "Kerberos (MongoDB Enterprise)" },
          { name: "PLAIN", description: "LDAP SASL (MongoDB Enterprise)" },
        ],
      },
    },
    value(
      "--awsIamSessionToken",
      "AWS IAM Temporary Session Token ID",
      "token"
    ),
    value(
      "--gssapiServiceName",
      "Service name to use when authenticating using GSSAPI/Kerberos",
      "name"
    ),
    {
      name: "--sspiHostnameCanonicalization",
      description: "SSPI hostname canonicalization (Windows)",
      args: { name: "mode", suggestions: ["none", "forward"] },
    },
    value("--sspiRealmOverride", "SSPI server realm (Windows)", "realm"),

    // TLS Options
    { name: "--tls", description: "Use TLS for all connections" },
    file("--tlsCertificateKeyFile", "PEM certificate/key file for TLS"),
    value(
      "--tlsCertificateKeyFilePassword",
      "Password for key in PEM file for TLS",
      "password"
    ),
    file("--tlsCAFile", "Certificate Authority file for TLS"),
    {
      name: "--tlsAllowInvalidHostnames",
      description: "Allow connections to servers with non-matching hostnames",
    },
    {
      name: "--tlsAllowInvalidCertificates",
      description: "Allow connections to servers with invalid certificates",
    },
    value(
      "--tlsCertificateSelector",
      "TLS Certificate in system store (Windows and macOS only)",
      "selector"
    ),
    file(
      "--tlsCRLFile",
      "PEM file that contains the Certificate Revocation List"
    ),
    {
      name: "--tlsDisabledProtocols",
      description: "Comma separated list of TLS protocols to disable",
      args: {
        name: "protocols",
        suggestions: ["TLS1_0", "TLS1_1", "TLS1_2", "TLS1_3"],
      },
    },
    {
      name: "--tlsFIPSMode",
      description: "Enable the system TLS library's FIPS mode",
    },

    // API version options
    {
      name: "--apiVersion",
      description: "Specifies the API version to connect with",
      args: { name: "version", suggestions: ["1"] },
    },
    { name: "--apiStrict", description: "Use strict API version mode" },
    {
      name: "--apiDeprecationErrors",
      description: "Fail deprecated commands for the specified API version",
    },

    // FLE Options
    value("--awsAccessKeyId", "AWS Access Key for FLE Amazon KMS", "id"),
    value("--awsSecretAccessKey", "AWS Secret Key for FLE Amazon KMS", "key"),
    value("--awsSessionToken", "Optional AWS Session Token ID", "token"),
    value(
      "--keyVaultNamespace",
      "Database.collection to store encrypted FLE parameters",
      "namespace"
    ),
    value("--kmsURL", "Test parameter to override the KMS endpoint URL", "url"),

    // OIDC auth options
    optionalEquals("--oidcFlows", "Supported OIDC auth flows", [
      "auth-code",
      "device-auth",
      "auth-code,device-auth",
    ]),
    {
      name: ["--oidcRedirectUri", "--oidcRedirectUrl"],
      description: "Local auth code flow redirect URL",
      requiresSeparator: true,
      args: {
        name: "url",
        isOptional: true,
        suggestions: ["http://localhost:27097/redirect"],
      },
    },
    {
      name: "--oidcTrustedEndpoint",
      description: "Treat the cluster/database mongosh as a trusted endpoint",
    },
    {
      name: ["--oidcIdTokenAsAccessToken", "--oidcIDTokenAsAccessToken"],
      description: "Use ID tokens in place of access tokens for auth",
    },
    optionalEquals(
      "--oidcDumpTokens",
      "Debug OIDC by printing tokens to mongosh's output",
      ["redacted", "include-secrets"]
    ),
    {
      name: "--oidcNoNonce",
      description: "Don't send a nonce argument in the OIDC auth request",
    },

    // Accepted by the parser but not listed in --help
    ...[
      { name: "--ipv6", description: "Enable IPv6 support" },
      { name: "--verbose", description: "Increase verbosity" },
      {
        name: "--tlsUseSystemCA",
        description: "Use the system CA store for TLS",
      },
      {
        name: "--skipStartupWarnings",
        description: "Skip server startup warnings",
      },
      file("--cryptSharedLibPath", "Path to the crypt_shared library"),
    ].map((o) => ({ ...o, hidden: true })),

    // Deprecated ssl* aliases
    deprecatedSsl("--ssl", "--tls"),
    deprecatedSsl(
      "--sslAllowInvalidCertificates",
      "--tlsAllowInvalidCertificates"
    ),
    deprecatedSsl("--sslAllowInvalidHostnames", "--tlsAllowInvalidHostnames"),
    deprecatedSsl("--sslPEMKeyFile", "--tlsCertificateKeyFile", "file"),
    deprecatedSsl(
      "--sslPEMKeyPassword",
      "--tlsCertificateKeyFilePassword",
      "password"
    ),
    deprecatedSsl("--sslCAFile", "--tlsCAFile", "file"),
    deprecatedSsl(
      "--sslCertificateSelector",
      "--tlsCertificateSelector",
      "selector"
    ),
    deprecatedSsl("--sslCRLFile", "--tlsCRLFile", "file"),
    deprecatedSsl(
      "--sslDisabledProtocols",
      "--tlsDisabledProtocols",
      "protocols"
    ),
  ],
};

export default completionSpec;
