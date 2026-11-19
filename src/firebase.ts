// Firebase CLI (firebase-tools) v15.37.0 (npm latest, 2026-11-19). Source: command and option definitions in lib/commands/*.js, global options in lib/index.js,
// experiment gating in lib/experiments.js + lib/commands/index.js, and lib/bin/mcp.js of the npm tarball, parsed statically (the package was not executed).
// Commands behind experiments that are off by default and not public (ailogic:*, appcheck:apps|providers|services, crashlytics:events|issues|reports,
// database:rules:*, functions:export, run:services:*, apphosting:builds|repos|rollouts:list, internaltesting:*) are intentionally omitted;
// public experiment commands (apps:init, apptesting:wata, functions:deletegcfartifacts) are listed with a note. ext:* (Firebase Extensions shutdown 2027-03-31)
// and functions:config:get|set|unset|clone (legacy Runtime Config) are marked deprecated. projectAliasesGenerator now suggests the Project ID column.
const projectAliasesGenerator: Fig.Generator = {
  script: ["firebase", "projects:list"], // this calls to a firebase server and is therefore slow
  postProcess: (out) => {
    // Table columns: Project Display Name | Project ID | Project Number | Resource Location ID
    const rows = out
      .split("\n")
      .filter((line) => line.startsWith("│"))
      .map((line) => line.split("│").slice(1, -1));
    rows.shift(); // first row is the table header
    return rows.flatMap((cells) => {
       
      const projectId = (cells[1] ?? "")
        .replace(/\u001b\[[0-9;]*m/g, "")
        .replace(/\(current\)/, "")
        .trim();
      return projectId
        ? [
            {
              name: projectId,
              description: (cells[0] ?? "").trim() || "Firebase project",
            },
          ]
        : [];
    });
  },
};

const forceOption = (
  description = "Automatically accept all interactive prompts"
): Fig.Option => ({ name: ["-f", "--force"], description });

const appOption = (
  description = "The app id of your Firebase app"
): Fig.Option => ({ name: "--app", description, args: { name: "appId" } });

const locationOption = (
  description = "The location of the SQL Connect service. Only needed if service ID is used in multiple locations"
): Fig.Option => ({
  name: "--location",
  description,
  args: { name: "location" },
});

const instanceOption = (
  description = "Use the database <instance>.firebaseio.com (if omitted, use default database instance)"
): Fig.Option => ({
  name: "--instance",
  description,
  args: { name: "instance" },
});

const serviceOption = (
  description = "The serviceId of the SQL Connect service"
): Fig.Option => ({
  name: "--service",
  description,
  args: { name: "serviceId" },
});

const databaseOption = (description: string): Fig.Option => ({
  name: "--database",
  description,
  args: { name: "databaseId" },
});

const disableTriggersOption = (
  description = "Suppress any Cloud functions triggered by this operation"
): Fig.Option => ({ name: "--disable-triggers", description });

const forceLongOption = (description: string): Fig.Option => ({
  name: "--force",
  description,
});

const siteOption = (description: string): Fig.Option => ({
  name: "--site",
  description,
  args: { name: "siteId" },
});

const locationShortOption = (description: string): Fig.Option => ({
  name: ["-l", "--location"],
  description,
  args: { name: "location" },
});

const filterOption = (description: string): Fig.Option => ({
  name: "--filter",
  description,
  args: { name: "filter" },
});

const dataOption = (
  description = "Specify escaped JSON directly"
): Fig.Option => ({
  name: ["-d", "--data"],
  description,
  args: { name: "data" },
});

const onlyOption = (description: string): Fig.Option => ({
  name: "--only",
  description,
  args: { name: "targets" },
});

const onlyEmulatorsOption = (
  description = 'Only specific emulators. This is a comma separated list of emulator names. Valid options are: ["apphosting","auth","functions","firestore","database","hosting","pubsub","storage","eventarc","dataconnect","tasks"]'
): Fig.Option => ({ name: "--only", description, args: { name: "emulators" } });

const inspectFunctionsOption = (
  description = "Emulate Cloud Functions in debug mode with the node inspector on the given port (9229 if not specified)"
): Fig.Option => ({
  name: "--inspect-functions",
  description,
  args: { name: "port", isOptional: true },
});

const localOption = (description = "Deprecated"): Fig.Option => ({
  name: "--local",
  description,
  deprecated: true,
});

const databaseShortOption = (description: string): Fig.Option => ({
  name: ["-d", "--database"],
  description,
  args: { name: "databaseId" },
});

const kmsKeyNameOption = (description: string): Fig.Option => ({
  name: ["-k", "--kms-key-name"],
  description,
  args: { name: "kmsKeyName" },
});

const noLocalhostOption = (description: string): Fig.Option => ({
  name: "--no-localhost",
  description,
});

const completionSpec: Fig.Spec = {
  name: "firebase",
  description: "Command-line interface for Firebase",
  options: [
    {
      name: ["-P", "--project"],
      description: "The Firebase project to use for this command",
      isPersistent: true,
      args: { name: "alias_or_project_id" },
    },
    {
      name: "--account",
      description: "The Google account to use for authorization",
      isPersistent: true,
      args: { name: "email" },
    },
    {
      name: ["-j", "--json"],
      description:
        "Output JSON instead of text, also triggers non-interactive mode",
      isPersistent: true,
    },
    {
      name: "--token",
      description:
        "Supply an auth token for this command (deprecated, will be removed in a future major version)",
      isPersistent: true,
      deprecated: true,
      args: { name: "token" },
    },
    {
      name: "--non-interactive",
      description: "Error out of the command instead of waiting for prompts",
      isPersistent: true,
    },
    {
      name: ["-i", "--interactive"],
      description: "Force prompts to be displayed",
      isPersistent: true,
    },
    {
      name: "--debug",
      description: "Print verbose debug output and keep a debug log file",
      isPersistent: true,
    },
    {
      name: ["-c", "--config"],
      description: "Path to the firebase.json file to use for configuration",
      isPersistent: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: ["-h", "--help"],
      description: "Output usage information",
      isPersistent: true,
    },
    { name: ["-V", "--version"], description: "Output the version number" },
  ],
  subcommands: [
    {
      name: "appcheck:debugtokens:create",
      description: "Generate and register an App Check debug token for an app",
      args: { name: "debugToken", isOptional: true },
      options: [
        appOption(),
        {
          name: "--display-name",
          description: "Display name for the debug token (max 50 characters)",
          args: { name: "displayName" },
        },
        {
          name: "--no-save-local",
          description:
            "Do not save the debug token to the local machine config",
        },
        forceOption(
          "Accept default prompts and overwrite any existing debug token with the same display name"
        ),
      ],
    },
    {
      name: "appcheck:debugtokens:delete",
      description: "Delete a Firebase App Check debug token for an app",
      args: { name: "debugTokenId" },
      options: [
        appOption(),
        forceOption(
          "Attempt to delete debug token without prompting for confirmation"
        ),
      ],
    },
    {
      name: "appcheck:debugtokens:list",
      description:
        "List Firebase App Check debug tokens for an app or stored locally on this machine",
      options: [
        appOption(),
        {
          name: "--local",
          description:
            "List debug tokens stored locally on this machine instead of querying all server tokens for an app",
        },
      ],
    },
    {
      name: "appcheck:debugtokens:prune",
      description:
        "Remove stale App Check debug tokens from the local machine config",
      options: [
        forceOption("Remove stale local debug tokens without prompting"),
      ],
    },
    {
      name: "appdistribution:distribute",
      description:
        "Upload a release binary and optionally distribute it to testers and run automated tests",
      args: { name: "release-binary-file", template: "filepaths" },
      options: [
        appOption(),
        {
          name: "--release-notes",
          description: "Release notes to include",
          args: { name: "string" },
        },
        {
          name: "--release-notes-file",
          description: "Path to file with release notes",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--testers",
          description:
            "A comma-separated list of tester emails to distribute to",
          args: { name: "string" },
        },
        {
          name: "--testers-file",
          description:
            "Path to file with a comma- or newline-separated list of tester emails to distribute to",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--groups",
          description:
            "A comma-separated list of group aliases to distribute to",
          args: { name: "string" },
        },
        {
          name: "--groups-file",
          description:
            "Path to file with a comma- or newline-separated list of group aliases to distribute to",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--test-devices",
          description:
            "Semicolon-separated list of devices to run automated tests on, in the format 'model=<model-id>,version=<os-version-id>,locale=<locale>,orientation=<orientation>'. Run 'gcloud firebase test android|ios models list' to see available devices. Note: This feature is in beta",
          args: { name: "string" },
        },
        {
          name: "--test-devices-file",
          description:
            "Path to file containing a list of semicolon- or newline-separated devices to run automated tests on, in the format 'model=<model-id>,version=<os-version-id>,locale=<locale>,orientation=<orientation>'. Run 'gcloud firebase test android|ios models list' to see available devices. Note: This feature is in beta",
          args: { name: "string", template: "filepaths" },
        },
        {
          name: "--test-username",
          description: "Username for automatic login",
          args: { name: "string" },
        },
        {
          name: "--test-password",
          description:
            "Password for automatic login. If using a real password, use --test-password-file instead to avoid putting sensitive info in history and logs",
          args: { name: "string" },
        },
        {
          name: "--test-password-file",
          description: "Path to file containing password for automatic login",
          args: { name: "string", template: "filepaths" },
        },
        {
          name: "--test-username-resource",
          description:
            "Resource name for the username field for automatic login",
          args: { name: "string" },
        },
        {
          name: "--test-password-resource",
          description:
            "Resource name for the password field for automatic login",
          args: { name: "string" },
        },
        {
          name: "--test-non-blocking",
          description:
            "Run automated tests without waiting for them to complete. Visit the Firebase console for the test results",
        },
        {
          name: "--test-case-ids",
          description: "A comma-separated list of test case IDs",
          args: { name: "string" },
        },
        {
          name: "--test-case-ids-file",
          description:
            "Path to file with a comma- or newline-separated list of test case IDs",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--results-bucket",
          description:
            "The name of a Google Cloud Storage bucket where raw results of any automated tests will be stored. If this flag is not set, Firebase creates a bucket for you. Note that the bucket must be owned by a billing-enabled project, and that using a non-default bucket will result in billing charges for the storage used",
          args: { name: "bucket" },
        },
      ],
    },
    {
      name: ["appdistribution:groups:create", "appdistribution:group:create"],
      description: "Create an App Distribution group",
      args: [{ name: "displayName" }, { name: "alias", isOptional: true }],
    },
    {
      name: ["appdistribution:groups:delete", "appdistribution:group:delete"],
      description: "Delete an App Distribution group",
      args: { name: "alias" },
    },
    {
      name: ["appdistribution:groups:list", "appdistribution:group:list"],
      description: "List App Distribution groups",
    },
    {
      name: "appdistribution:testcases:export",
      description: "Export test cases as a YAML file",
      args: { name: "test-cases-yaml-file", template: "filepaths" },
      options: [appOption()],
    },
    {
      name: "appdistribution:testcases:import",
      description: "Import test cases from YAML file",
      args: { name: "test-cases-yaml-file", template: "filepaths" },
      options: [appOption()],
    },
    {
      name: "appdistribution:testers:add",
      description:
        "Add testers to project (and App Distribution group, if specified via flag)",
      args: { name: "emails", isOptional: true, isVariadic: true },
      options: [
        {
          name: "--file",
          description:
            "A path to a file containing a list of tester emails to be added",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--group-alias",
          description:
            "If specified, the testers are also added to the group identified by this alias",
          args: { name: "group-alias" },
        },
      ],
    },
    {
      name: "appdistribution:testers:list",
      description: "List testers in project",
      args: { name: "group", isOptional: true },
    },
    {
      name: "appdistribution:testers:remove",
      description:
        "Remove testers from a project (or App Distribution group, if specified via flag)",
      args: { name: "emails", isOptional: true, isVariadic: true },
      options: [
        {
          name: "--file",
          description:
            "A path to a file containing a list of tester emails to be removed",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--group-alias",
          description:
            "If specified, the testers are only removed from the group identified by this alias, but not the project",
          args: { name: "group-alias" },
        },
      ],
    },
    {
      name: "apphosting:backends:create",
      description: "Create a Firebase App Hosting backend",
      options: [
        {
          name: ["-a", "--app"],
          description:
            "Specify an existing Firebase web app's ID to associate your App Hosting backend with",
          args: { name: "appId" },
        },
        {
          name: "--backend",
          description:
            "Specify the name of the new backend. Required with --non-interactive",
          args: { name: "backend" },
        },
        {
          name: ["-s", "--service-account"],
          description: "Specify the service account used to run the server",
          args: { name: "serviceAccount" },
        },
        {
          name: "--primary-region",
          description:
            "Specify the primary region for the backend. Required with --non-interactive",
          args: { name: "primaryRegion" },
        },
        {
          name: "--root-dir",
          description: "Specify the root directory for the backend",
          args: { name: "rootDir", template: "folders" },
        },
        {
          name: "--runtime",
          description:
            "Specify the runtime for the backend (e.g., nodejs, nodejs22)",
          args: { name: "runtime", isOptional: true },
        },
      ],
    },
    {
      name: "apphosting:backends:delete",
      description: "Delete a Firebase App Hosting backend",
      args: { name: "backend" },
      options: [forceOption()],
    },
    {
      name: "apphosting:backends:get",
      description: "Print info about a Firebase App Hosting backend",
      args: { name: "backend" },
    },
    {
      name: "apphosting:backends:list",
      description: "List Firebase App Hosting backends",
    },
    {
      name: "apphosting:rollouts:create",
      description: "Create a rollout using a build for an App Hosting backend",
      args: { name: "backendId" },
      options: [
        {
          name: ["-b", "--git-branch"],
          description:
            "Repository branch to deploy (mutually exclusive with -g)",
          args: { name: "gitBranch" },
        },
        {
          name: ["-g", "--git-commit"],
          description: "Git commit to deploy (mutually exclusive with -b)",
          args: { name: "gitCommit" },
        },
        forceOption("Skip confirmation before creating rollout"),
      ],
    },
    {
      name: "apphosting:secrets:access",
      description:
        "Access secret value given secret and its version. Defaults to accessing the latest version",
      args: { name: "secretName[@version]" },
    },
    {
      name: "apphosting:secrets:describe",
      description: "Get metadata for secret and its versions",
      args: { name: "secretName" },
    },
    {
      name: "apphosting:secrets:grantaccess",
      description:
        "Grant service accounts, users, or groups permissions to the provided secret(s). Can pass one or more secrets, separated by a comma",
      args: { name: "secretNames" },
      options: [
        locationShortOption("Backend location"),
        {
          name: ["-b", "--backend"],
          description: "Backend name",
          args: { name: "backend" },
        },
        {
          name: ["-e", "--emails"],
          description: "Comma delimited list of user or group emails",
          args: { name: "emails" },
        },
      ],
    },
    {
      name: "apphosting:secrets:revokeaccess",
      description:
        "Revoke service accounts, users, or groups permissions from the provided secret(s). Can pass one or more secrets, separated by a comma",
      args: { name: "secretNames" },
      options: [
        {
          name: ["-l", "--location"],
          description:
            "The location of the backend to revoke secret access from. Cannot be combined with --emails",
          args: { name: "location" },
          exclusiveOn: ["-e", "--emails"],
        },
        {
          name: ["-b", "--backend"],
          description:
            "The name of the backend to revoke secret access from. Cannot be combined with --emails",
          args: { name: "backend" },
          exclusiveOn: ["-e", "--emails"],
        },
        {
          name: ["-e", "--emails"],
          description:
            "Comma delimited list of user or group emails to revoke secret access from. Cannot be combined with --backend",
          args: { name: "emails" },
          exclusiveOn: ["-b", "--backend", "-l", "--location"],
        },
      ],
    },
    {
      name: "apphosting:secrets:set",
      description: "Create or update a secret for use in Firebase App Hosting",
      args: { name: "secretName" },
      options: [
        locationShortOption("Optional location to retrict secret replication"),
        forceOption(
          "Automatically create a secret, grant permissions, and add to YAML"
        ),
        {
          name: "--data-file",
          description:
            'File path from which to read secret data. Set to "-" to read the secret data from stdin',
          args: { name: "dataFile", template: "filepaths" },
        },
      ],
    },
    {
      name: "apps:android:sha:create",
      description: "Add a SHA certificate hash for a given app id",
      args: [{ name: "appId" }, { name: "shaHash" }],
    },
    {
      name: "apps:android:sha:delete",
      description: "Delete a SHA certificate hash for a given app id",
      args: [{ name: "appId" }, { name: "shaId" }],
    },
    {
      name: "apps:android:sha:list",
      description: "List the SHA certificate hashes for a given app id",
      args: { name: "appId" },
    },
    {
      name: "apps:create",
      description:
        "Create a new Firebase app. [platform] can be IOS, ANDROID or WEB (case insensitive)",
      args: [
        {
          name: "platform",
          isOptional: true,
          suggestions: ["IOS", "ANDROID", "WEB"],
        },
        { name: "displayName", isOptional: true },
      ],
      options: [
        {
          name: ["-a", "--package-name"],
          description: "Required package name for the Android app",
          args: { name: "packageName" },
        },
        {
          name: ["-b", "--bundle-id"],
          description: "Required bundle id for the iOS app",
          args: { name: "bundleId" },
        },
        {
          name: ["-s", "--app-store-id"],
          description: "(optional) app store id for the iOS app",
          args: { name: "appStoreId" },
        },
      ],
    },
    {
      name: "apps:init",
      description:
        "Automatically download and create config of a Firebase app (requires the appsinit experiment)",
      args: [
        {
          name: "platform",
          isOptional: true,
          suggestions: ["IOS", "ANDROID", "WEB"],
        },
        { name: "appId", isOptional: true },
      ],
      options: [
        {
          name: ["-o", "--out"],
          description: "(optional) write config output to a file",
          args: { name: "file", isOptional: true, template: "filepaths" },
        },
      ],
    },
    {
      name: "apps:list",
      description:
        "List the registered apps of a Firebase project. Optionally filter apps by [platform]: IOS, ANDROID or WEB (case insensitive)",
      args: {
        name: "platform",
        isOptional: true,
        suggestions: ["IOS", "ANDROID", "WEB"],
      },
    },
    {
      name: "apps:sdkconfig",
      description:
        "Print the Google Services config of a Firebase app. [platform] can be IOS, ANDROID or WEB (case insensitive)",
      args: [
        {
          name: "platform",
          isOptional: true,
          suggestions: ["IOS", "ANDROID", "WEB"],
        },
        { name: "appId", isOptional: true },
      ],
      options: [
        {
          name: ["-o", "--out"],
          description: "(optional) write config output to a file",
          args: { name: "file", isOptional: true, template: "filepaths" },
        },
      ],
    },
    {
      name: "apptesting:execute",
      description:
        "Run mobile automated tests written in natural language driven by AI",
      args: {
        name: "release-binary-file",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        appOption(
          "The app id of your Firebase web app. Optional if the project contains exactly one web app"
        ),
        {
          name: "--test-file-pattern",
          description:
            "Test file pattern. Only tests contained in files that match this pattern will be executed",
          args: { name: "pattern" },
        },
        {
          name: "--test-name-pattern",
          description:
            "Test name pattern. Only tests with names that match this pattern will be executed",
          args: { name: "pattern" },
        },
        {
          name: "--test-dir",
          description:
            "Directory where tests can be found. Defaults to './tests'",
          args: { name: "test_dir", template: "folders" },
        },
        {
          name: "--test-devices",
          description:
            "Semicolon-separated list of devices to run automated tests on, in the format 'model=<model-id>,version=<os-version-id>,locale=<locale>,orientation=<orientation>'. Run 'gcloud firebase test android|ios models list' to see available devices. Note: This feature is in beta",
          args: { name: "string" },
        },
        {
          name: "--test-devices-file",
          description:
            "Path to file containing a list of semicolon- or newline-separated devices to run automated tests on, in the format 'model=<model-id>,version=<os-version-id>,locale=<locale>,orientation=<orientation>'. Run 'gcloud firebase test android|ios models list' to see available devices. Note: This feature is in beta",
          args: { name: "string", template: "filepaths" },
        },
        {
          name: "--test-non-blocking",
          description:
            "Run automated tests without waiting for them to complete. Visit the Firebase console for the test results",
        },
        {
          name: "--results-bucket",
          description:
            "The name of a Google Cloud Storage bucket where raw test results will be stored. If this flag is not set, Firebase creates a default bucket for you. Note that the bucket must be owned by a billing-enabled project, and that using a non-default bucket will result in billing charges for the storage used",
          args: { name: "bucket" },
        },
        {
          name: "--test-username",
          description: "Username for automatic login",
          args: { name: "string" },
        },
        {
          name: "--test-password",
          description:
            "Password for automatic login. If using a real password, use --test-password-file instead to avoid putting sensitive info in history and logs",
          args: { name: "string" },
        },
        {
          name: "--test-password-file",
          description: "Path to file containing password for automatic login",
          args: { name: "string", template: "filepaths" },
        },
      ],
    },
    {
      name: "apptesting:wata",
      description:
        "Run automated tests written in natural language driven by AI (requires the apptesting experiment)",
      args: { name: "target" },
      options: [
        appOption(
          "The app id of your Firebase web app. Optional if the project contains exactly one web app"
        ),
        {
          name: "--test-file-pattern",
          description:
            "Test file pattern. Only tests contained in files that match this pattern will be executed",
          args: { name: "pattern" },
        },
        {
          name: "--test-name-pattern",
          description:
            "Test name pattern. Only tests with names that match this pattern will be executed",
          args: { name: "pattern" },
        },
        {
          name: "--tests-non-blocking",
          description:
            "Request test execution without waiting for them to complete",
        },
      ],
    },
    {
      name: "auth:export",
      description:
        "Export accounts from your Firebase project into a data file",
      args: { name: "dataFile", isOptional: true, template: "filepaths" },
      options: [
        {
          name: "--format",
          description:
            "Format of exported data (csv, json). Ignored if <dataFile> has format extension",
          args: { name: "format", suggestions: ["csv", "json"] },
        },
      ],
    },
    {
      name: "auth:import",
      description:
        "Import users into your Firebase project from a data file (.csv or .json)",
      args: { name: "dataFile", isOptional: true, template: "filepaths" },
      options: [
        {
          name: "--hash-algo",
          description:
            "Specify the hash algorithm used in password for these accounts",
          args: { name: "hashAlgo" },
        },
        {
          name: "--hash-key",
          description: "Specify the key used in hash algorithm",
          args: { name: "hashKey" },
        },
        {
          name: "--salt-separator",
          description:
            "Specify the salt separator which will be appended to salt when verifying password. only used by SCRYPT now",
          args: { name: "saltSeparator" },
        },
        {
          name: "--rounds",
          description: "Specify how many rounds for hash calculation",
          args: { name: "rounds" },
        },
        {
          name: "--mem-cost",
          description:
            "Specify the memory cost for firebase scrypt, or cpu/memory cost for standard scrypt",
          args: { name: "memCost" },
        },
        {
          name: "--parallelization",
          description: "Specify the parallelization for standard scrypt",
          args: { name: "parallelization" },
        },
        {
          name: "--block-size",
          description:
            "Specify the block size (normally is 8) for standard scrypt",
          args: { name: "blockSize" },
        },
        {
          name: "--dk-len",
          description: "Specify derived key length for standard scrypt",
          args: { name: "dkLen" },
        },
        {
          name: "--hash-input-order",
          description:
            "Specify the order of password and salt. Possible values are SALT_FIRST and PASSWORD_FIRST. MD5, SHA1, SHA256, SHA512, HMAC_MD5, HMAC_SHA1, HMAC_SHA256, HMAC_SHA512 support this flag",
          args: { name: "hashInputOrder" },
        },
      ],
    },
    {
      name: "crashlytics:heapdumps:disable",
      description:
        "Disable Crashlytics heap dump collection for an Android app",
      options: [appOption("The app id of your Firebase Android app")],
    },
    {
      name: "crashlytics:heapdumps:enable",
      description: "Enable Crashlytics heap dump collection for an Android app",
      options: [
        appOption("The app id of your Firebase Android app"),
        locationOption("The location for the Cloud Storage bucket"),
        forceOption(
          "Automatically configure without prompting for confirmation"
        ),
      ],
    },
    {
      name: "crashlytics:heapdumps:status",
      description:
        "Get Crashlytics heap dump collection status and configuration for an Android app",
      options: [appOption("The app id of your Firebase Android app")],
    },
    {
      name: "crashlytics:mappingfile:generateid",
      description:
        "Generate a mapping file id and write it to an Android resource file, which will be built into the app",
      options: [
        {
          name: "--resource-file",
          description:
            "Path to the Android resource XML file that will be created or updated",
          args: { name: "resourceFile", template: "filepaths" },
        },
      ],
    },
    {
      name: "crashlytics:mappingfile:upload",
      description:
        "Upload a ProGuard/R8-compatible mapping file to deobfuscate stack traces",
      args: { name: "mappingFile", template: "filepaths" },
      options: [
        appOption(),
        {
          name: "--resource-file",
          description:
            "Path to the Android resource XML file that includes the mapping file id",
          args: { name: "resourceFile", template: "filepaths" },
        },
      ],
    },
    {
      name: "crashlytics:setup",
      description: "Set up a Firebase web app for Crashlytics",
      args: { name: "appId", isOptional: true },
      options: [appOption()],
    },
    {
      name: "crashlytics:sourcemap:upload",
      description: "Upload javascript source maps to de-minify stack traces",
      args: { name: "mappingFiles", isOptional: true, template: "filepaths" },
      options: [
        appOption(),
        {
          name: "--bucket-location",
          description:
            'The location of the Google Cloud Storage bucket (default: "US-CENTRAL1"',
          args: { name: "bucketLocation" },
        },
        {
          name: "--app-version",
          description:
            "The version of your Firebase app (defaults to Git commit hash, if available)",
          args: { name: "appVersion" },
        },
        {
          name: "--clean",
          description:
            "Delete source map (.js.map) files after successful upload",
        },
      ],
    },
    {
      name: "crashlytics:symbols:upload",
      description:
        "Upload symbols for native code, to symbolicate stack traces",
      args: { name: "symbolFiles", isVariadic: true, template: "filepaths" },
      options: [
        appOption(),
        {
          name: "--generator",
          description: "The symbol generator being used, default is breakpad",
          args: {
            name: "generator",
            isOptional: true,
            suggestions: ["breakpad", "csym"],
          },
        },
        {
          name: "--dry-run",
          description: "Generate symbols without uploading them",
        },
      ],
    },
    {
      name: "database:get",
      description: "Fetch and print JSON data at the specified path",
      args: { name: "path" },
      options: [
        {
          name: ["-o", "--output"],
          description: "Save output to the specified file",
          args: { name: "filename", template: "filepaths" },
        },
        { name: "--pretty", description: "Pretty print response" },
        { name: "--shallow", description: "Return shallow response" },
        {
          name: "--export",
          description: "Include priorities in the output response",
        },
        {
          name: "--order-by",
          description: "Select a child key by which to order results",
          args: { name: "key" },
        },
        { name: "--order-by-key", description: "Order by key name" },
        { name: "--order-by-value", description: "Order by primitive value" },
        {
          name: "--limit-to-first",
          description: "Limit to the first <num> results",
          args: { name: "num" },
        },
        {
          name: "--limit-to-last",
          description: "Limit to the last <num> results",
          args: { name: "num" },
        },
        {
          name: "--start-at",
          description: "Start results at <val> (based on specified ordering)",
          args: { name: "val" },
        },
        {
          name: "--end-at",
          description: "End results at <val> (based on specified ordering)",
          args: { name: "val" },
        },
        {
          name: "--equal-to",
          description:
            "Restrict results to <val> (based on specified ordering)",
          args: { name: "val" },
        },
        instanceOption(),
      ],
    },
    {
      name: "database:import",
      description:
        "Non-atomically import the contents of a JSON file to the specified path in Realtime Database",
      args: [
        { name: "path" },
        { name: "infile", isOptional: true, template: "filepaths" },
      ],
      options: [
        forceOption(),
        instanceOption(),
        disableTriggersOption(
          "Suppress any Cloud functions triggered by this operation, default to true"
        ),
        filterOption(
          "Import only data at this path in the JSON file (if omitted, import entire file)"
        ),
        {
          name: "--chunk-size",
          description: "Max chunk size in megabytes, default to 1 MB",
          args: { name: "mb" },
        },
        {
          name: "--concurrency",
          description: "Concurrency limit, default to 5",
          args: { name: "val" },
        },
      ],
    },
    {
      name: "database:instances:create",
      description: "Create a Realtime Database instance",
      args: { name: "instanceName" },
      options: [
        {
          name: ["-l", "--location"],
          description:
            "(optional) location for the database instance, defaults to us-central1",
          args: {
            name: "location",
            suggestions: ["us-central1", "europe-west1", "asia-southeast1"],
          },
        },
      ],
    },
    {
      name: "database:instances:list",
      description:
        "List realtime database instances, optionally filtered by a specified location",
      options: [
        {
          name: ["-l", "--location"],
          description:
            "(optional) location for the database instance, defaults to all regions",
          args: {
            name: "location",
            suggestions: ["us-central1", "europe-west1", "asia-southeast1"],
          },
        },
      ],
    },
    {
      name: "database:profile",
      description: "Profile the Realtime Database and generate a usage report",
      options: [
        {
          name: ["-o", "--output"],
          description: "Save the output to the specified file",
          args: { name: "filename", template: "filepaths" },
        },
        {
          name: ["-d", "--duration"],
          description:
            "Collect database usage information for the specified number of seconds",
          args: { name: "seconds" },
        },
        {
          name: "--raw",
          description:
            "Output the raw stats collected as newline delimited json",
        },
        {
          name: "--no-collapse",
          description:
            "Prevent collapsing similar paths into $wildcard locations",
        },
        {
          name: ["-i", "--input"],
          description:
            "Generate the report based on the specified file instead of streaming logs from the database",
          args: { name: "filename", template: "filepaths" },
        },
        instanceOption(),
      ],
    },
    {
      name: "database:push",
      description: "Add a new JSON object to a list of data in your Firebase",
      args: [
        { name: "path" },
        { name: "infile", isOptional: true, template: "filepaths" },
      ],
      options: [dataOption(), instanceOption(), disableTriggersOption()],
    },
    {
      name: "database:remove",
      description: "Remove data from your Firebase at the specified path",
      args: { name: "path" },
      options: [
        forceOption("Pass this option to bypass confirmation prompt"),
        instanceOption(),
        disableTriggersOption(),
      ],
    },
    {
      name: "database:set",
      description:
        "Store JSON data at the specified path via STDIN, arg, or file",
      args: [
        { name: "path" },
        { name: "infile", isOptional: true, template: "filepaths" },
      ],
      options: [
        dataOption(),
        forceOption("Pass this option to bypass confirmation prompt"),
        instanceOption(),
        disableTriggersOption(),
      ],
    },
    {
      name: "database:settings:get",
      description: "Read the realtime database setting at path",
      args: { name: "path" },
      options: [
        instanceOption(
          "Use the database <instance>.firebaseio.com (if omitted, uses default database instance)"
        ),
      ],
    },
    {
      name: "database:settings:set",
      description: "Set the Realtime Database setting at path",
      args: [{ name: "path" }, { name: "value" }],
      options: [instanceOption()],
    },
    {
      name: "database:update",
      description:
        "Update some of the keys for the defined path in your Realtime Database",
      args: [
        { name: "path" },
        { name: "infile", isOptional: true, template: "filepaths" },
      ],
      options: [
        dataOption(),
        forceOption("Pass this option to bypass confirmation prompt"),
        instanceOption(),
        disableTriggersOption(),
      ],
    },
    {
      name: "dataconnect:compile",
      description:
        "Compile your SQL Connect schema and connector config and GQL files",
      options: [
        serviceOption(
          "The serviceId of the SQL Connect service. If not provided, compiles all services"
        ),
        locationOption(),
      ],
    },
    {
      name: "dataconnect:execute",
      description:
        "Execute a SQL Connect query or mutation. If FIREBASE_DATACONNECT_EMULATOR_HOST is set (such as during 'firebase emulator:exec'), executes against the emulator instead",
      args: [
        { name: "file", isOptional: true },
        { name: "operationName", isOptional: true },
      ],
      options: [
        serviceOption(
          "The service ID to execute against (optional if there's only one service)"
        ),
        locationOption(
          "The location ID to execute against (optional if there's only one service). Ignored by the emulator"
        ),
        {
          name: ["--vars", "--variables"],
          description:
            "Supply variables to the operation execution, which must be a JSON object whose keys are variable names. If vars begin with the character @, the rest is interpreted as a file name to read from, or - to read from stdin",
          args: { name: "vars" },
        },
        {
          name: "--no-debug-details",
          description:
            "Disables debug information in the response. Executions returns helpful errors or GQL extensions by default, which may expose too much for unprivilleged user or programs. If that's the case, this flag turns those output off",
        },
      ],
    },
    {
      name: "dataconnect:sdk:generate",
      description: "Generate typed SDKs to use SQL Connect in your apps",
      options: [
        serviceOption(
          "The serviceId of the SQL Connect service. If not provided, generates SDKs for all services"
        ),
        locationOption(),
        {
          name: "--watch",
          description:
            "Watch for changes to your connector GQL files and regenerate your SDKs when updates occur",
        },
      ],
    },
    {
      name: "dataconnect:services:list",
      description: "List all deployed SQL Connect services",
    },
    {
      name: "dataconnect:sql:diff",
      description:
        "Display the differences between the local SQL Connect schema and your CloudSQL database's schema",
      options: [serviceOption(), locationOption()],
    },
    {
      name: "dataconnect:sql:grant",
      description:
        "Grants the SQL role <role> to the provided user or service account <email>",
      options: [
        {
          name: ["-R", "--role"],
          description:
            "The SQL role to grant. One of: owner, writer, or reader",
          args: { name: "role", suggestions: ["owner", "writer", "reader"] },
        },
        {
          name: ["-E", "--email"],
          description:
            "The email of the user or service account we would like to grant the role to",
          args: { name: "email" },
        },
        serviceOption(),
        locationOption(),
      ],
    },
    {
      name: "dataconnect:sql:migrate",
      description:
        "Migrate your CloudSQL database's schema to match your local SQL Connect schema",
      options: [
        serviceOption(),
        locationOption(),
        forceOption("Execute any required database changes without prompting"),
      ],
    },
    {
      name: "dataconnect:sql:setup",
      description: "Set up your CloudSQL database",
      options: [serviceOption(), locationOption()],
    },
    {
      name: "dataconnect:sql:shell",
      description:
        "Start a shell connected directly to your SQL Connect service's linked CloudSQL instance",
      options: [serviceOption(), locationOption()],
    },
    {
      name: "deploy",
      description: "Deploy code and assets to your Firebase project",
      options: [
        forceOption(
          "Delete Cloud Functions missing from the current working directory and bypass interactive prompts"
        ),
        {
          name: ["-p", "--public"],
          description:
            "Override the Hosting public directory specified in firebase.json",
          args: { name: "path", template: "folders" },
        },
        {
          name: ["-m", "--message"],
          description: "An optional message describing this deploy",
          args: { name: "message" },
        },
        onlyOption(
          'Only deploy to specified, comma-separated targets (e.g. "hosting,storage"). For functions, can specify filters with colons to scope function deploys to only those functions (e.g. "--only functions:func1,functions:func2"). When filtering based on export groups (the exported module object keys), use dots to specify group names (e.g. "--only functions:group1.subgroup1,functions:group2"). When filtering based on codebases, use colons to specify codebase names (e.g. "--only functions:codebase1:func1,functions:codebase2:group1.subgroup1"). For data connect, can specify filters with colons to deploy only a service, connector, or schema (e.g. "--only dataconnect:serviceId,dataconnect:serviceId:connectorId,dataconnect:serviceId:schema")'
        ),
        {
          name: "--except",
          description:
            'Deploy to all targets except specified (e.g. "database")',
          args: { name: "targets" },
        },
        {
          name: "--dry-run",
          description:
            "Perform a dry run of your deployment. Validates your changes and builds your code without deploying any changes to your project. In order to provide better validation, this may still enable APIs on the target project",
        },
      ],
    },
    {
      name: "emulators:exec",
      description:
        "Start the local Firebase emulators, run a test script, then shut down the emulators",
      args: { name: "script" },
      options: [
        onlyEmulatorsOption(),
        inspectFunctionsOption(),
        {
          name: "--import",
          description:
            "Import emulator data from a previous export (see emulators:export)",
          args: { name: "dir", isOptional: true, template: "folders" },
        },
        {
          name: "--export-on-exit",
          description:
            "Automatically export emulator data (emulators:export) when the emulators make a clean exit (SIGINT), when no dir is provided the location of --import [dir] is used",
          args: { name: "dir", isOptional: true, template: "folders" },
        },
        {
          name: "--log-verbosity",
          description: "One of: DEBUG, INFO, QUIET, SILENT",
          args: {
            name: "verbosity",
            suggestions: ["DEBUG", "INFO", "QUIET", "SILENT"],
          },
        },
        { name: "--ui", description: "Run the Emulator UI" },
      ],
    },
    {
      name: "emulators:export",
      description: "Export data from running emulators",
      args: { name: "path", template: "folders" },
      options: [
        forceOption("Overwrite any export data in the target directory"),
        onlyEmulatorsOption(),
      ],
    },
    {
      name: "emulators:start",
      description: "Start the local Firebase emulators",
      options: [
        onlyEmulatorsOption(),
        inspectFunctionsOption(),
        {
          name: "--import",
          description:
            "Import emulator data from a previous export (see emulators:export)",
          args: { name: "dir", isOptional: true, template: "folders" },
        },
        {
          name: "--export-on-exit",
          description:
            "Automatically export emulator data (emulators:export) when the emulators make a clean exit (SIGINT), when no dir is provided the location of --import [dir] is used",
          args: { name: "dir", isOptional: true, template: "folders" },
        },
        {
          name: "--log-verbosity",
          description: "One of: DEBUG, INFO, QUIET, SILENT",
          args: {
            name: "verbosity",
            suggestions: ["DEBUG", "INFO", "QUIET", "SILENT"],
          },
        },
      ],
    },
    {
      name: "experiments:describe",
      description: "Describe what an experiment does when enabled",
      args: {
        name: "experiment",
        suggestions: [
          {
            name: "functionsv2deployoptimizations",
            description: "Optimize deployments of v2 firebase functions",
          },
          { name: "deletegcfartifacts", description: "Undefined" },
          {
            name: "legacyRuntimeConfigCommands",
            description: "Expose legacy functions.config() CLI commands",
          },
          { name: "dartfunctions", description: "Enable Dart Functions" },
          { name: "kits", description: "Enable Functions Kits" },
          {
            name: "webframeworks",
            description: "Native support for popular web frameworks",
          },
          {
            name: "pintags",
            description: "Adds the pinTag option to Run and Functions rewrites",
          },
          {
            name: "abiu",
            description:
              "Enable Automatic Base Image Updates (ABIU) and runtime selection for App Hosting",
          },
          {
            name: "appsinit",
            description: "Adds experimental `apps:init` command",
          },
          {
            name: "mcpalpha",
            description:
              "Opt-in to early MCP features before they're widely released",
          },
          { name: "mcpapps", description: "Enables MCP Apps features" },
          {
            name: "apptesting",
            description: "Adds experimental App Testing feature",
          },
          {
            name: "secretEnvParams",
            description:
              "Enable reading the backing resource binding for a Functions secret param from .env",
          },
          {
            name: "extdeprecationwarnings",
            description:
              "Show deprecation warnings for Firebase Extensions CLI commands",
          },
          {
            name: "extMigrationFeatures",
            description:
              "Enable features intended to assist with the migration of Extension instances to Kits",
          },
        ],
      },
    },
    {
      name: "experiments:disable",
      description: "Disable an experiment on this machine",
      args: {
        name: "experiment",
        suggestions: [
          {
            name: "functionsv2deployoptimizations",
            description: "Optimize deployments of v2 firebase functions",
          },
          { name: "deletegcfartifacts", description: "Undefined" },
          {
            name: "legacyRuntimeConfigCommands",
            description: "Expose legacy functions.config() CLI commands",
          },
          { name: "dartfunctions", description: "Enable Dart Functions" },
          { name: "kits", description: "Enable Functions Kits" },
          {
            name: "webframeworks",
            description: "Native support for popular web frameworks",
          },
          {
            name: "pintags",
            description: "Adds the pinTag option to Run and Functions rewrites",
          },
          {
            name: "abiu",
            description:
              "Enable Automatic Base Image Updates (ABIU) and runtime selection for App Hosting",
          },
          {
            name: "appsinit",
            description: "Adds experimental `apps:init` command",
          },
          {
            name: "mcpalpha",
            description:
              "Opt-in to early MCP features before they're widely released",
          },
          { name: "mcpapps", description: "Enables MCP Apps features" },
          {
            name: "apptesting",
            description: "Adds experimental App Testing feature",
          },
          {
            name: "secretEnvParams",
            description:
              "Enable reading the backing resource binding for a Functions secret param from .env",
          },
          {
            name: "extdeprecationwarnings",
            description:
              "Show deprecation warnings for Firebase Extensions CLI commands",
          },
          {
            name: "extMigrationFeatures",
            description:
              "Enable features intended to assist with the migration of Extension instances to Kits",
          },
        ],
      },
    },
    {
      name: "experiments:enable",
      description: "Enable an experiment on this machine",
      args: {
        name: "experiment",
        suggestions: [
          {
            name: "functionsv2deployoptimizations",
            description: "Optimize deployments of v2 firebase functions",
          },
          { name: "deletegcfartifacts", description: "Undefined" },
          {
            name: "legacyRuntimeConfigCommands",
            description: "Expose legacy functions.config() CLI commands",
          },
          { name: "dartfunctions", description: "Enable Dart Functions" },
          { name: "kits", description: "Enable Functions Kits" },
          {
            name: "webframeworks",
            description: "Native support for popular web frameworks",
          },
          {
            name: "pintags",
            description: "Adds the pinTag option to Run and Functions rewrites",
          },
          {
            name: "abiu",
            description:
              "Enable Automatic Base Image Updates (ABIU) and runtime selection for App Hosting",
          },
          {
            name: "appsinit",
            description: "Adds experimental `apps:init` command",
          },
          {
            name: "mcpalpha",
            description:
              "Opt-in to early MCP features before they're widely released",
          },
          { name: "mcpapps", description: "Enables MCP Apps features" },
          {
            name: "apptesting",
            description: "Adds experimental App Testing feature",
          },
          {
            name: "secretEnvParams",
            description:
              "Enable reading the backing resource binding for a Functions secret param from .env",
          },
          {
            name: "extdeprecationwarnings",
            description:
              "Show deprecation warnings for Firebase Extensions CLI commands",
          },
          {
            name: "extMigrationFeatures",
            description:
              "Enable features intended to assist with the migration of Extension instances to Kits",
          },
        ],
      },
    },
    {
      name: "experiments:list",
      description:
        "List all experiments, along with a description of each experiment and whether it is currently enabled",
    },
    {
      name: "ext",
      description:
        "Display information on how to use ext commands and extensions installed to your project (Firebase Extensions shuts down on March 31, 2027)",
      deprecated: true,
    },
    {
      name: "ext:configure",
      description: "Configure an existing extension instance",
      deprecated: true,
      args: { name: "extensionInstanceId" },
      options: [forceOption(), localOption()],
    },
    {
      name: "ext:dev:deprecate",
      description:
        "Deprecate extension versions that match the version predicate",
      deprecated: true,
      args: [
        { name: "extensionRef" },
        { name: "versionPredicate", isOptional: true },
      ],
      options: [
        {
          name: ["-m", "--message"],
          description: "Deprecation message",
          args: { name: "deprecationMessage" },
        },
        forceOption(
          "Override deprecation message for existing deprecated extension versions that match"
        ),
      ],
    },
    {
      name: "ext:dev:init",
      description:
        "Initialize files for writing an extension in the current directory",
      deprecated: true,
    },
    {
      name: "ext:dev:list",
      description: "List all extensions uploaded under publisher ID",
      deprecated: true,
      args: { name: "publisherId" },
    },
    {
      name: "ext:dev:register",
      description:
        "Register a publisher ID (disabled, Firebase Extensions shuts down on March 31, 2027)",
      deprecated: true,
    },
    {
      name: "ext:dev:undeprecate",
      description:
        "Undeprecate extension versions that match the version predicate",
      deprecated: true,
      args: [{ name: "extensionRef" }, { name: "versionPredicate" }],
    },
    {
      name: "ext:dev:upload",
      description: "Upload a new version of an extension",
      deprecated: true,
      args: { name: "extensionRef" },
      options: [
        {
          name: ["-s", "--stage"],
          description:
            'Release stage (supports "alpha", "beta", "rc", and "stable")',
          args: {
            name: "stage",
            suggestions: ["alpha", "beta", "rc", "stable"],
          },
        },
        {
          name: "--repo",
          description:
            "Public GitHub repo URI that contains the extension source",
          args: { name: "repo" },
        },
        {
          name: "--ref",
          description:
            "Commit hash, branch, or tag to build from the repo (defaults to HEAD)",
          args: { name: "ref" },
        },
        {
          name: "--root",
          description:
            'Root directory that contains this extension (defaults to last uploaded root or "/" if none set)',
          args: { name: "root" },
        },
        { name: "--local", description: "Upload from local source instead" },
        forceOption(),
      ],
    },
    {
      name: "ext:dev:usage",
      description: "Get usage statistics for an extension",
      deprecated: true,
      args: { name: "publisherId" },
    },
    {
      name: "ext:export",
      description:
        "Export Extension instances installed on a project to a local Firebase directory",
      deprecated: true,
      options: [
        {
          name: "--mode",
          description:
            'Experimental: controls the target system of the export (supports "extensions", "functions")',
          args: { name: "target", suggestions: ["extensions", "functions"] },
        },
        instanceOption(
          "Scope the export to the single instance with the specified instance id"
        ),
        {
          name: ["-k", "--kit-instance"],
          description:
            "Write the .env export from --mode functions to the config path for a kit instance currently defined in firebase.json",
          args: { name: "kitId" },
        },
        {
          name: "--outputDir",
          description:
            "Override the .env export from --mode functions to a specific arbitrary path",
          args: { name: "path", template: "folders" },
        },
        forceOption(),
      ],
    },
    {
      name: "ext:info",
      description:
        "Display information about an extension by name (extensionName@x.y.z for a specific version)",
      deprecated: true,
      args: { name: "extensionName" },
      options: [
        {
          name: "--markdown",
          description:
            "Output info in Markdown suitable for constructing a README file",
        },
      ],
    },
    {
      name: "ext:install",
      description: "Add an extension to firebase.json",
      deprecated: true,
      args: { name: "extensionRefOrLocalPath", isOptional: true },
      options: [localOption(), forceOption()],
    },
    {
      name: "ext:list",
      description:
        "List all the extensions that are installed in your Firebase project",
      deprecated: true,
    },
    {
      name: "ext:migrate",
      description: "Migrate an extension instance to a function kit",
      deprecated: true,
      options: [
        {
          name: ["-p", "--package"],
          description: "Optional kit package override to use",
          args: { name: "package" },
        },
        {
          name: "--ext-instance",
          description: "Extension instance ID to migrate",
          args: { name: "instanceId" },
        },
        {
          name: ["-e", "--extension"],
          description: "Extension reference or name to migrate",
          args: { name: "extensionRef" },
        },
        forceOption("Force update and migration without prompting"),
      ],
    },
    {
      name: "ext:sdk:install",
      description:
        "Get an SDK for this extension. The SDK will be put in the 'generated' directory",
      deprecated: true,
      args: { name: "extensionName" },
      options: [
        {
          name: "--codebase",
          description: "Specifies a codebase to install the SDK into",
          args: { name: "codebase" },
        },
        forceLongOption("Will overwrite existing sdk files if true"),
      ],
    },
    {
      name: "ext:uninstall",
      description:
        "Uninstall an extension that is installed in your Firebase project by instance ID",
      deprecated: true,
      args: { name: "extensionInstanceId" },
      options: [
        localOption(),
        {
          name: "--immediate",
          description:
            "Immediately destroy GCP resources instead of waiting on next deploy. Can be run outside a firebase project directory if --project is specified",
        },
        forceOption(),
      ],
    },
    {
      name: "ext:update",
      description:
        "Update an existing extension instance to the latest version, or to a specific version if provided",
      deprecated: true,
      args: [
        { name: "extensionInstanceId" },
        { name: "updateSource", isOptional: true },
      ],
      options: [forceOption()],
    },
    {
      name: "firestore:backups:delete",
      description: "Delete a backup under your Cloud Firestore database",
      args: { name: "backup" },
      options: [
        forceLongOption(
          "Attempt to delete backup without prompting for confirmation"
        ),
      ],
    },
    {
      name: "firestore:backups:get",
      description: "Get a Cloud Firestore database backup",
      args: { name: "backup" },
    },
    {
      name: "firestore:backups:list",
      description: "List all Cloud Firestore backups in a given location",
      options: [
        locationShortOption(
          "Location to search for backups, for example 'nam5'. Run 'firebase firestore:locations' to get a list of eligible locations. Defaults to all locations"
        ),
      ],
    },
    {
      name: "firestore:backups:schedules:create",
      description:
        "Create a backup schedule under your Cloud Firestore database",
      options: [
        databaseShortOption(
          "Database under which you want to create a schedule. Defaults to the (default) database"
        ),
        {
          name: "--retention",
          description: "Duration string (e.g. 12h or 30d) for backup retention",
          args: { name: "duration" },
        },
        {
          name: "--recurrence",
          description: "Recurrence settings; either DAILY or WEEKLY",
          args: { name: "recurrence", suggestions: ["DAILY", "WEEKLY"] },
        },
        {
          name: "--day-of-week",
          description:
            "On which day of the week to perform backups; one of MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, or SUNDAY",
          args: {
            name: "dayOfWeek",
            suggestions: [
              "MONDAY",
              "TUESDAY",
              "WEDNESDAY",
              "THURSDAY",
              "FRIDAY",
              "SATURDAY",
              "SUNDAY",
            ],
          },
        },
      ],
    },
    {
      name: "firestore:backups:schedules:delete",
      description:
        "Delete a backup schedule under your Cloud Firestore database",
      args: { name: "backupSchedule" },
      options: [
        forceLongOption(
          "Attempt to delete backup schedule without prompting for confirmation"
        ),
      ],
    },
    {
      name: "firestore:backups:schedules:list",
      description: "List backup schedules under your Cloud Firestore database",
      options: [
        databaseShortOption(
          "Database whose schedules you wish to list. Defaults to the (default) database"
        ),
      ],
    },
    {
      name: "firestore:backups:schedules:update",
      description:
        "Update a backup schedule under your Cloud Firestore database",
      args: { name: "backupSchedule" },
      options: [
        {
          name: "--retention",
          description: "Duration string (e.g. 12h or 30d) for backup retention",
          args: { name: "duration" },
        },
      ],
    },
    {
      name: "firestore:bulkdelete",
      description:
        "Managed bulk delete service to delete data from one or more collection groups",
      options: [
        databaseOption(
          'Database ID for database to delete from. "(default)" if none is provided'
        ),
        {
          name: "--collection-ids",
          description:
            "A comma-separated list of collection group IDs to delete. Deletes all documents in the specified collection groups",
          args: { name: "collectionIds" },
        },
      ],
    },
    {
      name: "firestore:databases:clone",
      description: "Clone one Firestore database to another",
      args: [{ name: "sourceDatabase" }, { name: "targetDatabase" }],
      options: [
        {
          name: ["-e", "--encryption-type"],
          description:
            "Encryption method of the cloned database; one of USE_SOURCE_ENCRYPTION (default), CUSTOMER_MANAGED_ENCRYPTION, GOOGLE_DEFAULT_ENCRYPTION",
          args: {
            name: "encryptionType",
            suggestions: [
              "USE_SOURCE_ENCRYPTION",
              "CUSTOMER_MANAGED_ENCRYPTION",
              "GOOGLE_DEFAULT_ENCRYPTION",
            ],
          },
        },
        kmsKeyNameOption(
          "Resource ID of the Cloud KMS key to encrypt the cloned database. This feature is allowlist only in initial launch"
        ),
        {
          name: ["-s", "--snapshot-time"],
          description:
            "Snapshot time of the source database to use, in ISO 8601 format. Can be any minutely snapshot after the database's earliest version time. If unspecified, takes the most recent available snapshot",
          args: { name: "snapshotTime" },
        },
      ],
    },
    {
      name: "firestore:databases:create",
      description: "Create a database in your Firebase project",
      args: { name: "database" },
      options: [
        locationOption(
          "Region to create database, for example 'nam5'. Run 'firebase firestore:locations' to get a list of eligible locations (required)"
        ),
        {
          name: "--edition",
          description:
            "The edition of the database to create, for example 'standard' or 'enterprise'. If not provided, 'standard' is used as a default",
          args: { name: "edition", suggestions: ["standard", "enterprise"] },
        },
        {
          name: "--delete-protection",
          description:
            "Whether or not to prevent deletion of database, for example 'ENABLED' or 'DISABLED'. Default is 'DISABLED'",
          args: {
            name: "deleteProtectionState",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--point-in-time-recovery",
          description:
            "Whether to enable the PITR feature on this database, for example 'ENABLED' or 'DISABLED'. Default is 'DISABLED'",
          args: { name: "enablement", suggestions: ["ENABLED", "DISABLED"] },
        },
        {
          name: "--realtime-updates",
          description:
            "Whether realtime updates are enabled for this database, for example 'ENABLED' or 'DISABLED'. Can only be specified for 'enterprise' edition databases. Defaults to 'ENABLED' when firestore-data-access is enabled, otherwise the server default is used",
          args: { name: "enablement", suggestions: ["ENABLED", "DISABLED"] },
        },
        {
          name: "--firestore-data-access",
          description:
            "Whether the Firestore API can be used for this database, for example 'ENABLED' or 'DISABLED'. Can only be specified for 'enterprise' edition databases. Default is 'ENABLED'",
          args: { name: "enablement", suggestions: ["ENABLED", "DISABLED"] },
        },
        {
          name: "--mongodb-compatible-data-access",
          description:
            "Whether the MongoDB compatible API can be used for this database, for example 'ENABLED' or 'DISABLED'. Can only be specified for 'enterprise' edition databases. Default is 'DISABLED'",
          args: { name: "enablement", suggestions: ["ENABLED", "DISABLED"] },
        },
        kmsKeyNameOption(
          "The resource ID of a Cloud KMS key. If set, the database created will be a Customer-managed Encryption Key (CMEK) database encrypted with this key. This feature is allowlist only in initial launch"
        ),
      ],
    },
    {
      name: "firestore:databases:delete",
      description: "Delete a database in your Cloud Firestore project",
      args: { name: "database" },
      options: [
        forceLongOption(
          "Attempt to delete database without prompting for confirmation"
        ),
      ],
    },
    {
      name: "firestore:databases:get",
      description: "Get information about a Cloud Firestore database",
      args: { name: "database", isOptional: true },
    },
    {
      name: "firestore:databases:list",
      description: "List the Cloud Firestore databases on your project",
    },
    {
      name: "firestore:databases:restore",
      description: "Restore a Firestore database from a backup",
      options: [
        databaseShortOption("ID of the database to restore into"),
        {
          name: ["-b", "--backup"],
          description: "Backup from which to restore",
          args: { name: "backup" },
        },
        {
          name: ["-e", "--encryption-type"],
          description:
            "Encryption method of the restored database; one of USE_SOURCE_ENCRYPTION (default), CUSTOMER_MANAGED_ENCRYPTION, GOOGLE_DEFAULT_ENCRYPTION",
          args: {
            name: "encryptionType",
            suggestions: [
              "USE_SOURCE_ENCRYPTION",
              "CUSTOMER_MANAGED_ENCRYPTION",
              "GOOGLE_DEFAULT_ENCRYPTION",
            ],
          },
        },
        kmsKeyNameOption(
          "Resource ID of the Cloud KMS key to encrypt the restored database. This feature is allowlist only in initial launch"
        ),
      ],
    },
    {
      name: "firestore:databases:update",
      description:
        "Update a database in your Firebase project. Must specify at least one property to update",
      args: { name: "database" },
      options: [
        {
          name: "--json",
          description:
            "Prints raw json response of the create API call if specified",
        },
        {
          name: "--delete-protection",
          description:
            "Whether or not to prevent deletion of database, for example 'ENABLED' or 'DISABLED'. Default is 'DISABLED'",
          args: {
            name: "deleteProtectionState",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--point-in-time-recovery",
          description:
            "Whether to enable the PITR feature on this database, for example 'ENABLED' or 'DISABLED'. Default is 'DISABLED'",
          args: { name: "enablement", suggestions: ["ENABLED", "DISABLED"] },
        },
      ],
    },
    {
      name: "firestore:delete",
      description: "Delete data from a Cloud Firestore database",
      args: { name: "path", isOptional: true },
      options: [
        {
          name: ["-r", "--recursive"],
          description:
            "If set, recursively delete all documents and subcollections at and under the specified level. May not be passed along with --shallow",
          exclusiveOn: ["--shallow"],
        },
        {
          name: "--shallow",
          description:
            "Delete only documents at the specified level and ignore documents in subcollections. This action can potentially orphan documents nested in subcollections. May not be passed along with -r",
          exclusiveOn: ["-r", "--recursive"],
        },
        {
          name: "--all-collections",
          description:
            "Deletes all collections and documents in the Firestore database",
        },
        forceOption(),
        databaseOption(
          'Database ID for database to delete from. "(default)" if none is provided'
        ),
      ],
    },
    {
      name: "firestore:indexes",
      description: "List indexes in a Cloud Firestore database",
      options: [
        {
          name: "--pretty",
          description:
            "Pretty print the indexes. When not specified the indexes are printed in the JSON specification format",
        },
        databaseOption(
          "Database ID of the firestore database from which to list indexes. (default) if none provided"
        ),
      ],
    },
    {
      name: "firestore:locations",
      description: "List possible locations for your Cloud Firestore database",
    },
    {
      name: "firestore:operations:cancel",
      description: "Cancels a long-running Cloud Firestore admin operation",
      args: { name: "operationName" },
      options: [
        databaseOption(
          'Database ID for which the operation is running. "(default)" if none is provided'
        ),
        forceLongOption(
          "Forces the operation cancellation without asking for confirmation"
        ),
      ],
    },
    {
      name: "firestore:operations:describe",
      description:
        "Retrieves information about a Cloud Firestore admin operation",
      args: { name: "operationName" },
      options: [
        databaseOption(
          'Database ID for which the operation is running. "(default)" if none is provided'
        ),
      ],
    },
    {
      name: "firestore:operations:list",
      description:
        "List pending Cloud Firestore admin operations and their status",
      options: [
        databaseOption(
          'Database ID for database to list operations for. "(default)" if none is provided'
        ),
        {
          name: "--limit",
          description:
            "The maximum number of operations to list. Uses 100 by default",
          args: { name: "number" },
        },
      ],
    },
    {
      name: "functions:artifacts:setpolicy",
      description:
        "Set up a cleanup policy for Cloud Run functions container images in Artifact Registry to automatically delete old function images",
      options: [
        locationOption(
          "Specify location to set up the cleanup policy. If omitted, uses the default functions location"
        ),
        {
          name: "--days",
          description:
            "Number of days to keep container images before deletion. Default is 1 day",
          args: { name: "days" },
        },
        {
          name: "--none",
          description:
            "Opt-out from cleanup policy. This will prevent suggestions to set up a cleanup policy during initialization and deployment",
        },
        forceOption("Automatically create or modify cleanup policy"),
      ],
    },
    {
      name: "functions:config:clone",
      description:
        "Clone environment config from another project (legacy, use params instead; see functions:config:export)",
      deprecated: true,
      options: [
        {
          name: "--from",
          description: "The project from which to clone configuration",
          args: { name: "projectId" },
        },
        {
          name: "--only",
          description: "A comma-separated list of keys to clone",
          args: { name: "keys" },
        },
        {
          name: "--except",
          description: "A comma-separated list of keys to not clone",
          args: { name: "keys" },
        },
      ],
    },
    {
      name: "functions:config:export",
      description:
        "Export environment config as a JSON secret to store in Cloud Secret Manager",
      options: [
        {
          name: "--secret",
          description:
            "Name of the secret to create (default: FUNCTIONS_CONFIG_EXPORT)",
          args: { name: "name" },
        },
        forceOption("Use default secret name without prompting"),
      ],
    },
    {
      name: "functions:config:get",
      description:
        "Fetch environment config stored at the given path (legacy, use params instead; see functions:config:export)",
      deprecated: true,
      args: { name: "path", isOptional: true },
    },
    {
      name: "functions:config:set",
      description:
        "Set environment config with key=value syntax (legacy, use params instead; see functions:config:export)",
      deprecated: true,
      args: { name: "values", isOptional: true, isVariadic: true },
    },
    {
      name: "functions:config:unset",
      description:
        "Unset environment config at the specified path(s) (legacy, use params instead; see functions:config:export)",
      deprecated: true,
      args: { name: "keys", isOptional: true, isVariadic: true },
    },
    {
      name: "functions:delete",
      description:
        "Delete one or more Cloud Functions by name, group name, or codebase",
      args: { name: "filters", isOptional: true, isVariadic: true },
      options: [
        {
          name: "--region",
          description:
            "Specify region of the function to be deleted. If omitted, functions from all regions whose names match the filters will be deleted",
          args: { name: "region" },
        },
        forceOption(),
      ],
    },
    {
      name: "functions:deletegcfartifacts",
      description:
        "Deletes all artifacts created by Google Cloud Functions on Google Container Registry (requires the deletegcfartifacts experiment)",
      options: [
        {
          name: "--regions",
          description:
            "Specify regions of artifacts to be deleted. If omitted, artifacts from all regions will be deleted. <regions> is a Google defined region list, e.g. us-central1,us-east1,europe-west2",
          args: { name: "regions" },
        },
      ],
    },
    {
      name: "functions:kits:install",
      description: "Install a function kit into your project",
      options: [
        forceOption(),
        {
          name: "--package",
          description:
            "NPM package name or specifier to install as a function kit",
          args: { name: "package" },
        },
        {
          name: "--directory",
          description:
            "Path to a local functions codebase directory to install as a function kit",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--template",
          description:
            "Template to use for the kit index file (installation|migration)",
          args: {
            name: "template",
            suggestions: ["installation", "migration"],
          },
        },
        {
          name: "--no-configure",
          description:
            "Skip parameter prompting and configuration during installation",
        },
      ],
    },
    {
      name: "functions:kits:list",
      description: "List all the kits that are installed in your firebase.json",
    },
    {
      name: "functions:kits:uninstall",
      description:
        "Uninstall a function kit or kit instance from your project. Deletes all running resources and the associated managed service account",
      options: [
        { name: "--kit", description: "", args: { name: "kitId" } },
        instanceOption(""),
        forceOption(),
      ],
    },
    {
      name: "functions:lifecycle:list",
      description: "List all the lifecycle hooks defined in a codebase",
      args: { name: "codebase" },
    },
    {
      name: "functions:lifecycle:run",
      description: "Run a specific lifecycle hook in isolation",
      args: [{ name: "hookName" }, { name: "codebase" }],
    },
    {
      name: "functions:list",
      description: "List all deployed functions in your Firebase project",
    },
    {
      name: "functions:log",
      description: "Read logs from deployed functions",
      options: [
        {
          name: "--only",
          description:
            'Only show logs of specified, comma-seperated functions (e.g. "funcA,funcB")',
          args: { name: "function_names" },
        },
        {
          name: ["-n", "--lines"],
          description: "Specify number of log lines to fetch",
          args: { name: "num_lines" },
        },
        { name: "--open", description: "Open logs page in web browser" },
      ],
    },
    {
      name: "functions:secrets:access",
      description:
        "Access secret value given secret and its version. Defaults to accessing the latest version",
      args: { name: "KEY[@version]" },
    },
    {
      name: "functions:secrets:describe",
      description:
        "Get metadata for secret and its versions. Alias for functions:secrets:get to align with gcloud",
      args: { name: "KEY" },
    },
    {
      name: "functions:secrets:destroy",
      description:
        "Destroy a secret. Defaults to destroying the latest version",
      args: { name: "KEY[@version]" },
      options: [forceOption("Destroy a secret without confirmation")],
    },
    {
      name: "functions:secrets:get",
      description: "Get metadata for secret and its versions",
      args: { name: "KEY" },
    },
    {
      name: "functions:secrets:prune",
      description: "Destroy unused secrets",
      options: [forceOption("Destroy unused secrets without prompt")],
    },
    {
      name: "functions:secrets:set",
      description:
        "Create or update a secret for use in Cloud Functions for Firebase",
      args: { name: "KEY" },
      options: [
        forceOption("Automatically updates functions to use the new secret"),
        {
          name: "--data-file",
          description:
            'File path from which to read secret data. Set to "-" to read the secret data from stdin',
          args: { name: "dataFile", template: "filepaths" },
        },
        {
          name: "--format",
          description:
            "Format of the secret value. 'string' (default) or 'json'",
          args: { name: "format", suggestions: ["string", "json"] },
        },
      ],
    },
    {
      name: "functions:shell",
      description: "Launch full Node shell with emulated functions",
      options: [
        {
          name: ["-p", "--port"],
          description: "The port on which to emulate functions",
          args: { name: "port" },
        },
        inspectFunctionsOption(),
      ],
    },
    {
      name: "help",
      description: "Display help information",
      args: { name: "command", isOptional: true },
    },
    {
      name: "hosting:channel:create",
      description: "Create a Firebase Hosting channel",
      args: { name: "channelId", isOptional: true },
      options: [
        {
          name: ["-e", "--expires"],
          description:
            "Duration string (e.g. 12h or 30d) for channel expiration, max 30d",
          args: { name: "duration" },
        },
        siteOption("Site for which to create the channel"),
      ],
    },
    {
      name: "hosting:channel:delete",
      description: "Delete a Firebase Hosting channel",
      args: { name: "channelId" },
      options: [forceOption(), siteOption("Site in which the channel exists")],
    },
    {
      name: "hosting:channel:deploy",
      description: "Deploy to a specific Firebase Hosting channel",
      args: { name: "channelId", isOptional: true },
      options: [
        {
          name: ["-e", "--expires"],
          description:
            "Duration string (e.g. 12h, 30d) for channel expiration, max 30d; defaults to 7d",
          args: { name: "duration" },
        },
        onlyOption("Only create previews for specified targets"),
        {
          name: "--open",
          description: "Open a browser to the channel after deploying",
        },
        {
          name: "--no-authorized-domains",
          description: "Do not sync channel domains with Firebase Auth",
        },
      ],
    },
    {
      name: "hosting:channel:list",
      description: "List all Firebase Hosting channels for your project",
      options: [siteOption("List channels for the specified site")],
    },
    {
      name: "hosting:channel:open",
      description: "Opens the URL for a Firebase Hosting channel",
      args: { name: "channelId", isOptional: true },
      options: [siteOption("The site to which the channel belongs")],
    },
    {
      name: "hosting:clone",
      description: "Clone a version from one site to another",
      args: [{ name: "source" }, { name: "targetChannel" }],
    },
    {
      name: "hosting:disable",
      description: "Stop serving web traffic to your Firebase Hosting site",
      options: [
        forceOption("Skip confirmation"),
        {
          name: ["-s", "--site"],
          description: "The site to disable",
          args: { name: "siteId" },
        },
      ],
    },
    {
      name: "hosting:sites:create",
      description: "Create a Firebase Hosting site",
      args: { name: "siteId", isOptional: true },
      options: [appOption("Specify an existing Firebase Web App ID")],
    },
    {
      name: "hosting:sites:delete",
      description: "Delete a Firebase Hosting site",
      args: { name: "siteId" },
      options: [forceOption()],
    },
    {
      name: "hosting:sites:get",
      description: "Print info about a Firebase Hosting site",
      args: { name: "siteId" },
    },
    { name: "hosting:sites:list", description: "List Firebase Hosting sites" },
    {
      name: "init",
      description:
        "Interactively configure the current directory as a Firebase project directory",
      args: {
        name: "feature",
        isOptional: true,
        suggestions: [
          {
            name: "dataconnect",
            description: "Set up a Firebase SQL Connect service",
          },
          {
            name: "firestore",
            description:
              "Configure security rules and indexes files for Firestore",
          },
          {
            name: "functions",
            description: "Configure a Cloud Functions directory and its files",
          },
          {
            name: "apphosting",
            description:
              "Set up deployments for full-stack web apps (supports server-side rendering)",
          },
          {
            name: "hosting",
            description: "Set up deployments for static web apps",
          },
          {
            name: "storage",
            description: "Configure a security rules file for Cloud Storage",
          },
          {
            name: "emulators",
            description: "Set up local emulators for Firebase products",
          },
          {
            name: "remoteconfig",
            description: "Configure a template file for Remote Config",
          },
          {
            name: "extensions",
            description: "Set up an empty Extensions manifest",
          },
          {
            name: "database",
            description:
              "Configure a security rules file for Realtime Database and (optionally) provision default instance",
          },
          {
            name: "hosting:github",
            description: "Set up GitHub Action deploys",
            hidden: true,
          },
          {
            name: "dataconnect:sdk",
            description:
              "Set up a generated SDK for your Firebase SQL Connect service",
            hidden: true,
          },
          { name: "auth", description: "Set up Firebase Authentication" },
          {
            name: "dataconnect:resolver",
            description:
              "Set up a custom resolver for your Firebase SQL Connect service",
            hidden: true,
          },
          {
            name: "genkit",
            description: "Setup a new Genkit project with Firebase",
          },
          {
            name: "ailogic",
            description: "Set up Firebase AI Logic with app provisioning",
          },
          {
            name: "aitools",
            description:
              "Configure AI coding assistants to work with your Firebase project",
            hidden: true,
          },
        ],
      },
    },
    {
      name: "login",
      description: "Log the CLI into Firebase",
      args: { name: "auth_code", isOptional: true },
      options: [
        noLocalhostOption(
          "Login from a device without an accessible localhost"
        ),
        {
          name: "--reauth",
          description: "Force reauthentication even if already logged in",
        },
      ],
    },
    {
      name: "login:add",
      description: "Authorize the CLI for an additional account",
      args: { name: "email", isOptional: true },
      options: [
        noLocalhostOption(
          "Copy and paste a code instead of starting a local server for authentication"
        ),
      ],
    },
    {
      name: "login:ci",
      description:
        "Generate an access token for use in non-interactive environments",
      options: [
        noLocalhostOption(
          "Copy and paste a code instead of starting a local server for authentication"
        ),
      ],
    },
    { name: "login:list", description: "List authorized CLI accounts" },
    {
      name: "login:use",
      description:
        "Set the default account to use for this project directory or the global default account if not in a Firebase project directory",
      args: { name: "email" },
    },
    {
      name: "logout",
      description: "Log the CLI out of Firebase",
      args: { name: "email", isOptional: true },
    },
    {
      name: ["mcp", "experimental:mcp"],
      description: "Run the Firebase MCP (Model Context Protocol) server",
      options: [
        {
          name: "--dir",
          description:
            "Project root directory (defaults to current working directory)",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--only",
          description:
            "Comma-separated list of features to enable (core, firestore, storage, dataconnect, auth, messaging, functions, remoteconfig, crashlytics, apptesting, apphosting, database, developerknowledge). If specified, auto-detection is disabled for other features",
          args: { name: "features" },
        },
        {
          name: "--tools",
          description:
            "Comma-separated list of specific tools to enable. Disables auto-detection entirely",
          args: { name: "tools" },
        },
        {
          name: "--mode",
          description: "Server mode (defaults to stdio)",
          args: { name: "mode", suggestions: ["stdio", "sse"] },
        },
        {
          name: "--port",
          description:
            "The port to listen on when running in SSE mode (defaults to 3000)",
          args: { name: "port" },
        },
        {
          name: "--generate-tool-list",
          description:
            "Print Markdown documentation of the available tools and exit",
          hidden: true,
        },
        {
          name: "--generate-prompt-list",
          description:
            "Print Markdown documentation of the available prompts and exit",
          hidden: true,
        },
        {
          name: "--generate-resource-list",
          description:
            "Print Markdown documentation of the available resources and exit",
          hidden: true,
        },
      ],
    },
    {
      name: "open",
      description: "Quickly open a browser to relevant project resources",
      args: {
        name: "link",
        isOptional: true,
        suggestions: [
          { name: "analytics", description: "Analytics" },
          { name: "apphosting", description: "App Hosting" },
          { name: "auth", description: "Authentication: Providers" },
          { name: "auth:users", description: "Authentication: Users" },
          { name: "crash", description: "Crash Reporting" },
          { name: "database", description: "Database: Data" },
          { name: "database:rules", description: "Database: Rules" },
          { name: "dataconnect", description: "SQL Connect" },
          { name: "docs", description: "Docs" },
          { name: "links", description: "Dynamic Links" },
          { name: "extensions", description: "Extensions" },
          { name: "firestore", description: "Firestore: Data" },
          { name: "firestore:rules", description: "Firestore: Rules" },
          { name: "firestore:indexes", description: "Firestore: Indexes" },
          {
            name: "firestore:databases:list",
            description: "Firestore: Databases List",
          },
          { name: "firestore:locations", description: "Firestore: Locations" },
          { name: "firestore:usage", description: "Firestore: Usage" },
          { name: "functions", description: "Functions" },
          { name: "functions:log", description: "Functions Log" },
          { name: "hosting:site", description: "Hosting: Deployed Site" },
          { name: "hosting", description: "Hosting" },
          { name: "notifications", description: "Notifications" },
          { name: "dashboard", description: "Project Dashboard" },
          { name: "settings", description: "Project Settings" },
          {
            name: "config:conditions",
            description: "Remote Config: Conditions",
          },
          { name: "config", description: "Remote Config" },
          { name: "storage", description: "Storage: Files" },
          { name: "storage:rules", description: "Storage: Rules" },
          { name: "testlab", description: "Test Lab" },
        ],
      },
    },
    {
      name: "projects:addfirebase",
      description: "Add Firebase resources to a Google Cloud Platform project",
      args: { name: "projectId", isOptional: true },
    },
    {
      name: "projects:create",
      description:
        "Creates a new Google Cloud Platform project, then adds Firebase resources to the project",
      args: { name: "projectId", isOptional: true },
      options: [
        {
          name: ["-n", "--display-name"],
          description: "(optional) display name for the project",
          args: { name: "displayName" },
        },
        {
          name: ["-o", "--organization"],
          description:
            "(optional) ID of the parent Google Cloud Platform organization under which to create this project",
          args: { name: "organizationId" },
        },
        {
          name: ["-f", "--folder"],
          description:
            "(optional) ID of the parent Google Cloud Platform folder in which to create this project",
          args: { name: "folderId" },
        },
      ],
    },
    {
      name: "projects:list",
      description: "List all Firebase projects you have access to",
    },
    {
      name: "remoteconfig:experiments:delete",
      description: "Delete a Remote Config experiment",
      args: { name: "experimentId" },
    },
    {
      name: "remoteconfig:experiments:get",
      description: "Get a Remote Config experiment",
      args: { name: "experimentId" },
    },
    {
      name: "remoteconfig:experiments:list",
      description: "Get a list of Remote Config experiments",
      options: [
        {
          name: "--pageSize",
          description:
            "Maximum number of experiments to return per page. Defaults to 10. Pass '0' to fetch all experiments",
          args: { name: "pageSize" },
        },
        {
          name: "--pageToken",
          description:
            "Token from a previous list operation to retrieve the next page of results. Listing starts from the beginning if omitted",
          args: { name: "pageToken" },
        },
        filterOption(
          "Filters experiments by their full resource name. Format: `name:projects/{project_number}/namespaces/{namespace}/experiments/{experiment_id}`"
        ),
      ],
    },
    {
      name: "remoteconfig:get",
      description: "Get a Firebase project's Remote Config template",
      options: [
        {
          name: ["-v", "--version-number"],
          description: "Grabs the specified version of the template",
          args: { name: "versionNumber" },
        },
        {
          name: ["-o", "--output"],
          description:
            "Write config output to a filename (if omitted, will use the default file path)",
          args: { name: "filename", isOptional: true, template: "filepaths" },
        },
      ],
    },
    {
      name: "remoteconfig:rollback",
      description:
        "Roll back a project's published Remote Config template to the one specified by the provided version number",
      options: [
        {
          name: ["-v", "--version-number"],
          description: "Rollback to the specified version of the template",
          args: { name: "versionNumber" },
        },
        forceOption(),
      ],
    },
    {
      name: "remoteconfig:rollouts:delete",
      description: "Delete a Remote Config rollout",
      args: { name: "rolloutId" },
    },
    {
      name: "remoteconfig:rollouts:get",
      description: "Get a Remote Config rollout",
      args: { name: "rolloutId" },
    },
    {
      name: "remoteconfig:rollouts:list",
      description: "Get a list of Remote Config rollouts",
      options: [
        {
          name: "--pageSize",
          description:
            "Maximum number of rollouts to return per page. Defaults to 10. Pass '0' to fetch all rollouts",
          args: { name: "pageSize" },
        },
        {
          name: "--pageToken",
          description:
            "Token from a previous list operation to retrieve the next page of results. Listing starts from the beginning if omitted",
          args: { name: "pageToken" },
        },
        filterOption(
          "Filters rollouts by their full resource name. Format: `name:projects/{project_id}/namespaces/{namespace}/rollouts/{rollout_id}`"
        ),
      ],
    },
    {
      name: "remoteconfig:versions:list",
      description:
        "Get a list of Remote Config template versions that have been published for a Firebase project",
      options: [
        {
          name: "--limit",
          description:
            "Limit the number of versions being returned. Pass '0' to fetch all versions",
          args: { name: "maxResults" },
        },
      ],
    },
    {
      name: "serve",
      description: "Start a local server for your static assets",
      options: [
        {
          name: ["-p", "--port"],
          description: "The port on which to listen (default: 5000)",
          args: { name: "port" },
        },
        {
          name: ["-o", "--host"],
          description: "The host on which to listen (default: localhost)",
          args: { name: "host" },
        },
        onlyOption(
          "Only serve specified targets (valid targets are: hosting, functions)"
        ),
        {
          name: "--except",
          description:
            "Serve all except specified targets (valid targets are: hosting, functions)",
          args: { name: "targets" },
        },
      ],
    },
    {
      name: "setup:emulators:database",
      description: "Download the database emulator",
    },
    {
      name: "setup:emulators:dataconnect",
      description: "Download the dataconnect emulator",
    },
    {
      name: "setup:emulators:firestore",
      description: "Download the firestore emulator",
    },
    {
      name: "setup:emulators:pubsub",
      description: "Download the pubsub emulator",
    },
    {
      name: "setup:emulators:storage",
      description: "Download the storage emulator",
    },
    { name: "setup:emulators:ui", description: "Download the ui emulator" },
    {
      name: "studio:export",
      description:
        "Bootstrap Firebase Studio apps for migration to Antigravity. Run on the unzipped folder from the Firebase Studio download, or directly on the downloaded zip file",
      args: { name: "path", isOptional: true, template: "filepaths" },
      options: [
        {
          name: "--no-start-antigravity",
          description: "Skip starting the Antigravity IDE after migration",
        },
      ],
    },
    {
      name: "target",
      description: "Display configured deploy targets for the current project",
      args: {
        name: "type",
        isOptional: true,
        suggestions: ["storage", "database", "hosting"],
      },
    },
    {
      name: "target:apply",
      description: "Apply a deploy target to a resource",
      args: [
        { name: "type", suggestions: ["storage", "database", "hosting"] },
        { name: "name" },
        { name: "resources", isVariadic: true },
      ],
    },
    {
      name: "target:clear",
      description: "Clear all resources from a named resource target",
      args: [
        { name: "type", suggestions: ["storage", "database", "hosting"] },
        { name: "target" },
      ],
    },
    {
      name: "target:remove",
      description: "Remove a resource target",
      args: [
        { name: "type", suggestions: ["storage", "database", "hosting"] },
        { name: "resource" },
      ],
    },
    {
      name: "use",
      description: "Set an active Firebase project for your working directory",
      args: {
        name: "alias_or_project_id",
        isOptional: true,
        generators: projectAliasesGenerator,
      },
      options: [
        {
          name: "--add",
          description: "Create a new project alias interactively",
        },
        {
          name: "--alias",
          description: "Create a new alias for the provided project id",
          args: { name: "name" },
        },
        {
          name: "--unalias",
          description: "Remove an already created project alias",
          args: { name: "name" },
        },
        { name: "--clear", description: "Clear the active project selection" },
      ],
    },
  ],
};

export default completionSpec;
