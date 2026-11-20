// Capgo CLI (@capgo/cli) v8.108.2 (npm "latest", published 2026-11-17, checked 2026-11-20).
// Source: commander definitions in cli/src/index.ts of Cap-go/capgo at the npm gitHead (662544b), the README command
// reference shipped in the npm package, and cli/src/{shared/email-preferences,versionHelpers,framework/mode}.ts for enum
// values. Read statically from the sources, the CLI itself was not executed. The spec name stays "cli" (npm bin: capgo).

const platforms = ["ios", "android"];

const orgEmailPreferenceKeys = [
  "usage_limit",
  "credit_usage",
  "bundle_created",
  "bundle_deployed",
  "deploy_stats_24h",
  "weekly_stats",
  "monthly_stats",
  "billing_period_stats",
  "device_error",
  "channel_self_rejected",
  "onboarding",
  "builder_onboarding",
];

const userEmailPreferenceKeys = [
  ...orgEmailPreferenceKeys,
  "bundle_incompatible",
  "cli_realtime_feed",
  "security_updates",
];

const emailPreferenceSuggestions = (keys: string[]): Fig.Suggestion[] =>
  keys
    .flatMap((key) => [`${key}=true`, `${key}=false`])
    .map((name) => ({ name }));

// --- Shared options -------------------------------------------------------

const apikeyOption: Fig.Option = {
  name: ["-a", "--apikey"],
  description: "API key to link to your account",
  args: { name: "apikey" },
};

const apiHostOption: Fig.Option = {
  name: "--api-host",
  description:
    "Custom Capgo API URL for self-hosting or testing, e.g. https://api.example.com (env: CAPGO_API_HOST)",
  args: { name: "apiHost" },
};

const filesHostOption: Fig.Option = {
  name: "--files-host",
  description:
    "Custom Capgo files API URL when it differs from --api-host (env: CAPGO_FILES_HOST)",
  args: { name: "filesHost" },
};

/** -a, --api-host and --files-host: the trio most Capgo Cloud commands accept */
const cloudOptions: Fig.Option[] = [
  apikeyOption,
  apiHostOption,
  filesHostOption,
];

const packageJsonOption: Fig.Option = {
  name: "--package-json",
  description: "Paths to package.json files for monorepos (comma-separated)",
  args: { name: "packageJson" },
};

const nodeModulesOption: Fig.Option = {
  name: "--node-modules",
  description:
    "Paths to node_modules directories for monorepos (comma-separated)",
  args: { name: "nodeModules" },
};

const verboseOption: Fig.Option = {
  name: "--verbose",
  description: "Enable verbose output with detailed logging",
};

const jsonOption = (description = "Output in JSON"): Fig.Option => ({
  name: ["-j", "--json"],
  description,
});

const localOption = (description: string): Fig.Option => ({
  name: "--local",
  description,
});

const forceOption: Fig.Option = {
  name: ["-f", "--force"],
  description: "Force generate a new one",
};

const keyOption: Fig.Option = {
  name: "--key",
  description: "Custom path for private signing key",
  args: { name: "key", template: "filepaths" },
};

const keyDataOption: Fig.Option = {
  name: "--key-data",
  description: "Private signing key",
  args: { name: "keyData" },
};

const platformOption = (description: string): Fig.Option => ({
  name: "--platform",
  description,
  args: { name: "platform", suggestions: platforms },
});

const pathOption = (description: string): Fig.Option => ({
  name: "--path",
  description,
  args: { name: "path", template: "folders" },
});

const encryptDeltaOption: Fig.Option = {
  name: "--encrypt-delta",
  description:
    "Encrypt delta update files (auto-enabled for updater >= 6.14.4)",
};

const encryptPartialOption: Fig.Option = {
  name: "--encrypt-partial",
  description: "Use --encrypt-delta instead; encrypts delta update files",
  deprecated: true,
};

const disableBrotliOption: Fig.Option = {
  name: "--disable-brotli",
  description:
    "Completely disable brotli compression even if updater version supports it",
};

const forceCrc32ChecksumOption: Fig.Option = {
  name: "--force-crc32-checksum",
  description: "Force CRC32 checksum for upload (override auto-detection)",
};

/** Builds a "--flag" / "--no-flag" pair that excludes each other */
const toggle = (flag: string, on: string, off: string): Fig.Option[] => [
  { name: `--${flag}`, description: on, exclusiveOn: [`--no-${flag}`] },
  { name: `--no-${flag}`, description: off, exclusiveOn: [`--${flag}`] },
];

const optionalAppId: Fig.Arg = { name: "appId", isOptional: true };

// --- init / run / star / doctor / login / get-qr ---------------------------

const initCommand: Fig.Subcommand = {
  name: ["init", "i"],
  description: "Initialize a new app in Capgo Cloud with step-by-step guidance",
  args: [
    { name: "apikey", isOptional: true },
    { name: "appId", isOptional: true },
  ],
  options: [
    apikeyOption,
    {
      name: ["-n", "--name"],
      description: "App name for display in Capgo Cloud",
      args: { name: "name" },
    },
    {
      name: ["-i", "--icon"],
      description: "App icon path for display in Capgo Cloud",
      args: { name: "icon", template: "filepaths" },
    },
    apiHostOption,
    filesHostOption,
    {
      name: "--package-json",
      description:
        "Package JSON for the Capacitor app to onboard (useful in monorepos)",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--main-file",
      description: "Application entry file to update (useful in monorepos)",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--no-analytics",
      description: "Disable init analytics and terminal replay for this run",
    },
  ],
};

const runCommand: Fig.Subcommand = {
  name: "run",
  description: "Run Capacitor apps on devices from the CLI",
  subcommands: [
    {
      name: "device",
      description: "Run your Capacitor app on a connected device or simulator",
      args: { name: "platform", isOptional: true, suggestions: platforms },
      options: [
        {
          name: "--no-launch",
          description:
            "Resolve and print the run command without starting the app",
        },
      ],
    },
  ],
};

const starCommands: Fig.Subcommand[] = [
  {
    name: "star",
    description: "Star a Capgo GitHub repository to support the project",
    args: {
      name: "repository",
      isOptional: true,
      suggestions: ["capacitor-updater"],
    },
  },
  {
    name: "star-all",
    description:
      "Star all Capgo GitHub repositories with a small random delay between each request",
    args: { name: "repositories", isOptional: true, isVariadic: true },
    options: [
      {
        name: "--min-delay-ms",
        description:
          "Minimum delay in ms between each star action (default: 20)",
        args: { name: "ms" },
      },
      {
        name: "--max-delay-ms",
        description:
          "Maximum delay in ms between each star action (default: 180)",
        args: { name: "ms" },
      },
      {
        name: "--max-concurrency",
        description:
          "Maximum number of star requests running in parallel (default: 4)",
        args: { name: "count" },
      },
    ],
  },
];

const doctorCommand: Fig.Subcommand = {
  name: "doctor",
  description:
    "Check if your Capgo app installation is up-to-date and gather information for bug reports",
  options: [packageJsonOption],
};

const loginCommand: Fig.Subcommand = {
  name: ["login", "l"],
  description:
    "Save your Capgo API key to your machine or local folder for easier access to Capgo Cloud",
  args: { name: "apikey", isOptional: true },
  options: [
    apikeyOption,
    localOption("Only save in local folder, git ignored for security"),
    apiHostOption,
    filesHostOption,
  ],
};

const getQrCommand: Fig.Subcommand = {
  name: "get-qr",
  description: "Print a terminal QR code for a bundle or channel preview",
  args: [optionalAppId, { name: "target", isOptional: true }],
  options: [
    apikeyOption,
    {
      name: "--bundle",
      description: "Bundle name or id to preview",
      args: { name: "bundle" },
    },
    {
      name: "--channel",
      description: "Channel name or id to preview",
      args: { name: "channel" },
    },
    {
      name: "--type",
      description: "Type for positional target",
      args: { name: "type", suggestions: ["bundle", "channel"] },
    },
    {
      name: "--png",
      description:
        "Write the preview QR code as a PNG image to the given file path",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--url",
      description:
        "Print preview URLs only (web and deep link), without a terminal QR code",
    },
    {
      name: "--web-url",
      description:
        "Encode the web preview URL in the QR code and PNG instead of the capgo:// deep link",
    },
    {
      name: "--preview-env",
      description: "Preview web URL environment (default: prod)",
      args: { name: "env", suggestions: ["prod", "preprod", "dev"] },
    },
    apiHostOption,
    filesHostOption,
  ],
};

// --- bundle ---------------------------------------------------------------

const acceptIncompatibleDescription =
  "Accept native-package incompatibility as handled (still checks and warns, continues, skips the crash-warning email)";

const bundleCommand: Fig.Subcommand = {
  name: "bundle",
  description:
    "Manage app bundles for deployment in Capgo Cloud, including upload, compatibility checks, and encryption",
  subcommands: [
    {
      name: "recommend",
      description:
        "Suggest the next version using Cloudflare AI (active paid subscription required)",
      args: optionalAppId,
      options: [
        apikeyOption,
        apiHostOption,
        {
          name: "--base-version",
          description:
            "Override the latest Capgo version as the release baseline",
          args: { name: "version" },
        },
        {
          name: "--since",
          description:
            "Git ref to compare from (defaults to the latest reachable local tag)",
          args: { name: "ref" },
        },
        {
          name: "--ref",
          description:
            "Git ref to compare to (defaults to HEAD locally; required for GitHub)",
          args: { name: "ref" },
        },
        {
          name: "--repo",
          description:
            "Use GitHub comparison history through your authenticated gh CLI",
          args: { name: "owner/repo" },
        },
        {
          name: "--changelog",
          description: "Also draft a Markdown changelog",
        },
        {
          name: "--json",
          description: "Print the recommendation as JSON",
        },
        {
          name: "--dry-run",
          description: "Print local context without sending it to Capgo or AI",
        },
      ],
    },
    {
      name: ["upload", "u"],
      description: "Upload a new app bundle to Capgo Cloud for distribution",
      args: optionalAppId,
      options: [
        apikeyOption,
        {
          name: "--mode",
          description:
            "Project framework mode. Use cordova for Cordova apps without capacitor.config (webDir defaults to www)",
          args: { name: "framework", suggestions: ["cordova"] },
        },
        {
          name: ["-p", "--path"],
          description:
            "Path of the folder to upload, if not provided it will use the webDir set in capacitor.config (or www with --mode cordova)",
          args: { name: "path", template: "folders" },
        },
        {
          name: ["-c", "--channel"],
          description:
            "Channel to link to. Use commas for multiple channels, for example production,beta",
          args: { name: "channel" },
        },
        {
          name: "--rollout",
          description:
            "Set the uploaded bundle as this channel's rollout target at a percentage from 0 to 100",
          args: { name: "rollout" },
        },
        {
          name: "--rollout-percentage-bps",
          description:
            "Set the uploaded bundle rollout percentage in basis points from 0 to 10000",
          args: { name: "rolloutPercentageBps" },
        },
        {
          name: "--rollout-advance",
          description:
            "Promote the current rollout target to stable, then set the uploaded bundle as the new rollout. Reuses the previous percentage unless --rollout or --rollout-percentage-bps is also set",
        },
        {
          name: "--rollout-cache-ttl-seconds",
          description: "Cloudflare rollout decision cache TTL in seconds",
          args: { name: "rolloutCacheTtlSeconds" },
        },
        {
          name: ["-e", "--external"],
          description: "Link to external URL instead of upload to Capgo Cloud",
          args: { name: "url" },
        },
        {
          name: "--iv-session-key",
          description: "Set the IV and session key for bundle URL external",
          args: { name: "key" },
        },
        {
          name: "--s3-region",
          description: "Region for your S3 bucket",
          args: { name: "region" },
        },
        {
          name: "--s3-apikey",
          description: "API key for your S3 endpoint",
          args: { name: "apikey" },
        },
        {
          name: "--s3-apisecret",
          description: "API secret for your S3 endpoint",
          args: { name: "apisecret" },
        },
        {
          name: "--s3-endpoint",
          description: "URL of S3 endpoint",
          args: { name: "s3Endpoint" },
        },
        {
          name: "--s3-bucket-name",
          description: "Name for your AWS S3 bucket",
          args: { name: "bucketName" },
        },
        {
          name: "--s3-port",
          description: "Port for your S3 endpoint",
          args: { name: "port" },
        },
        { name: "--no-s3-ssl", description: "Disable SSL for S3 upload" },
        {
          name: "--key-v2",
          description: "Custom path for private signing key (v2 system)",
          args: { name: "key", template: "filepaths" },
        },
        {
          name: "--key-data-v2",
          description: "Private signing key (v2 system)",
          args: { name: "keyDataV2" },
        },
        {
          name: "--bundle-url",
          description: "Prints bundle URL into stdout",
        },
        {
          name: "--no-key",
          description: "Ignore signing key and send clear update",
        },
        {
          name: "--no-code-check",
          description:
            "Ignore checking if notifyAppReady() is called in source code and index present in root folder",
        },
        {
          name: "--ignore-notify-app-ready",
          description:
            "Skip notifyAppReady() check (not recommended, updates may roll back)",
        },
        {
          name: "--display-iv-session",
          description:
            "Show in the console the IV and session key used to encrypt the update",
        },
        {
          name: ["-b", "--bundle"],
          description: "Bundle version number of the bundle to upload",
          args: { name: "bundle" },
        },
        {
          name: "--link",
          description: "Link to external resource (e.g. GitHub release)",
          args: { name: "link" },
        },
        {
          name: "--comment",
          description:
            "Comment about this version, could be a release note, a commit hash, a commit message, etc",
          args: { name: "comment" },
        },
        {
          name: "--min-update-version",
          description:
            "Minimal version required to update to this version. Used only if the disable auto update is set to metadata in channel",
          args: { name: "minUpdateVersion" },
        },
        {
          name: "--auto-min-update-version",
          description: "Set the min update version based on native packages",
        },
        {
          name: "--ignore-metadata-check",
          description:
            "Ignores the metadata (node_modules) check when uploading",
          exclusiveOn: ["--fail-on-incompatible", "--accept-incompatible"],
        },
        {
          name: "--fail-on-incompatible",
          description:
            "Fail the upload (exit non-zero) instead of uploading when the bundle is incompatible with the channel's current native packages",
          exclusiveOn: ["--ignore-metadata-check", "--accept-incompatible"],
        },
        {
          name: "--accept-incompatible",
          description: `${acceptIncompatibleDescription}. Use this when your app already guards missing plugins at runtime`,
          exclusiveOn: ["--fail-on-incompatible", "--ignore-metadata-check"],
        },
        {
          name: "--ignore-checksum-check",
          description: "Ignores the checksum check when uploading",
        },
        forceCrc32ChecksumOption,
        {
          name: "--timeout",
          description: "Timeout for the upload process in seconds",
          args: { name: "timeout" },
        },
        {
          name: "--multipart",
          description:
            "Use --tus instead; uses multipart protocol for S3 uploads",
          deprecated: true,
        },
        {
          name: "--zip",
          description: "Upload the bundle using zip to Capgo cloud (legacy)",
        },
        {
          name: "--tus",
          description: "Upload the bundle using TUS to Capgo cloud",
        },
        {
          name: "--tus-chunk-size",
          description:
            "Chunk size in bytes for TUS resumable uploads (default: auto)",
          args: { name: "tusChunkSize" },
        },
        {
          name: "--partial",
          description: "Use --delta instead; uploads incremental updates",
          deprecated: true,
        },
        {
          name: "--partial-only",
          description:
            "Use --delta-only instead; uploads only incremental updates, skips full bundle",
          deprecated: true,
        },
        {
          name: "--delta",
          description:
            "Upload delta updates (only changed files) instead of big zip downloads. Capgo refuses delta uploads over 10,000 files",
        },
        {
          name: "--delta-only",
          description:
            "Upload only delta updates without full bundle for maximum speed (useful for large apps)",
        },
        {
          name: "--no-delta",
          description:
            "Disable delta updates even if instant updates are enabled",
        },
        {
          name: "--delta-upload-concurrency",
          description:
            "Maximum number of delta files processed concurrently (1-500, default: 50)",
          args: { name: "count" },
        },
        {
          name: "--encrypted-checksum",
          description:
            "An encrypted checksum (signature). Used only when uploading an external bundle",
          args: { name: "encryptedChecksum" },
        },
        {
          name: "--auto-set-bundle",
          description: "Set the bundle version in Capacitor config",
        },
        {
          name: "--auto-bump",
          description:
            "Auto-increment bundle version from the latest remote channel/app version (level defaults to minor)",
          args: {
            name: "level",
            isOptional: true,
            suggestions: [
              { name: "major" },
              { name: "minor", description: "Default" },
              { name: "patch" },
              { name: "fix", description: "Alias of patch" },
              { name: "metadata", description: "Prerelease increment" },
              { name: "ai", description: "Let Capgo AI classify the change" },
            ],
          },
        },
        {
          name: "--dry-upload",
          description:
            "Dry upload the bundle process: add the row in database without uploading files or updating channels (used by Capgo for internal testing)",
        },
        packageJsonOption,
        nodeModulesOption,
        encryptDeltaOption,
        encryptPartialOption,
        {
          name: "--delete-linked-bundle-on-upload",
          description:
            "Locates the currently linked bundle in the channel you are trying to upload to, and deletes it",
        },
        {
          name: "--no-brotli-patterns",
          description:
            'Files to exclude from Brotli compression (comma-separated globs, e.g. "*.jpg,*.png")',
          args: { name: "patterns" },
        },
        disableBrotliOption,
        {
          name: "--version-exists-ok",
          description:
            "Exit successfully if bundle version already exists, useful for CI/CD workflows with monorepos",
        },
        {
          name: "--self-assign",
          description:
            "Allow devices to auto-join this channel (updates channel setting)",
        },
        {
          name: "--qr-preview",
          description:
            "Print a terminal QR code for this bundle preview after upload",
        },
        {
          name: "--send-update-notification",
          description:
            "Send a native update-check notification to devices after updating linked channel bundles",
        },
        apiHostOption,
        filesHostOption,
        verboseOption,
      ],
    },
    {
      name: "compatibility",
      description:
        "Check compatibility of a bundle with a specific channel in Capgo Cloud",
      args: optionalAppId,
      options: [
        apikeyOption,
        {
          name: ["-c", "--channel"],
          description: "Channel to check the compatibility with",
          args: { name: "channel" },
        },
        { name: "--text", description: "Output text instead of emojis" },
        packageJsonOption,
        nodeModulesOption,
        apiHostOption,
        filesHostOption,
      ],
    },
    {
      name: "releaseType",
      description:
        'Print "native" or "OTA" based on compatibility with a channel\'s latest metadata',
      args: optionalAppId,
      options: [
        apikeyOption,
        {
          name: ["-c", "--channel"],
          description: "Channel to compare against",
          args: { name: "channel" },
        },
        packageJsonOption,
        nodeModulesOption,
        apiHostOption,
        filesHostOption,
      ],
    },
    {
      name: ["delete", "d"],
      description:
        "Delete a specific bundle from Capgo Cloud, optionally targeting a single version",
      args: [{ name: "bundleId", isOptional: true }, optionalAppId],
      options: cloudOptions,
    },
    {
      name: ["list", "l"],
      description: "List all bundles uploaded for an app in Capgo Cloud",
      args: optionalAppId,
      options: cloudOptions,
    },
    {
      name: ["cleanup", "c"],
      description:
        "Delete old bundles in Capgo Cloud, keeping specified number of recent versions",
      args: optionalAppId,
      options: [
        {
          name: ["-b", "--bundle"],
          description: "Bundle version number of the app to delete",
          args: { name: "bundle" },
        },
        apikeyOption,
        {
          name: ["-k", "--keep"],
          description: "Number of versions to keep",
          args: { name: "keep" },
        },
        { name: ["-f", "--force"], description: "Force removal" },
        {
          name: "--ignore-channel",
          description:
            "Delete bundles even if linked to channels (WARNING: deletes channels too)",
        },
        apiHostOption,
        filesHostOption,
      ],
    },
    {
      name: "encrypt",
      description: "Encrypt a zip bundle for secure external storage",
      args: [
        { name: "zipPath", isOptional: true, template: "filepaths" },
        { name: "checksum", isOptional: true },
      ],
      options: [keyOption, keyDataOption, jsonOption(), packageJsonOption],
    },
    {
      name: "decrypt",
      description: "Decrypt an encrypted bundle (mainly for testing)",
      args: [
        { name: "zipPath", isOptional: true, template: "filepaths" },
        { name: "ivSessionKey", isOptional: true },
      ],
      options: [
        keyOption,
        keyDataOption,
        {
          name: "--checksum",
          description:
            "Checksum of the bundle, to verify the integrity of the bundle",
          args: { name: "checksum" },
        },
        packageJsonOption,
      ],
    },
    {
      name: "zip",
      description: "Create a zip file of your app bundle",
      args: optionalAppId,
      options: [
        {
          name: ["-p", "--path"],
          description:
            "Path of the folder to upload, if not provided it will use the webDir set in capacitor.config",
          args: { name: "path", template: "folders" },
        },
        {
          name: ["-b", "--bundle"],
          description: "Bundle version number to name the zip file",
          args: { name: "bundle" },
        },
        {
          name: ["-n", "--name"],
          description: "Name of the zip file",
          args: { name: "name" },
        },
        jsonOption(),
        {
          name: "--no-code-check",
          description:
            "Ignore checking if notifyAppReady() is called in source code and index present in root folder",
        },
        {
          name: "--ignore-notify-app-ready",
          description:
            "Skip notifyAppReady() check (not recommended, updates may roll back)",
        },
        {
          name: "--key-v2",
          description:
            "Use encryption v2. With --for-upload: custom path for private signing key (v2 system), defaults to .capgo_key_v2",
          args: { name: "key", isOptional: true, template: "filepaths" },
        },
        {
          name: "--key-data-v2",
          description:
            "Private signing key (v2 system), used with --for-upload",
          args: { name: "keyDataV2" },
        },
        {
          name: "--no-key",
          description:
            "Ignore signing key and produce a clear bundle (with --for-upload)",
        },
        {
          name: "--for-upload",
          description:
            "Produce the exact artifact and metadata 'bundle upload' would send (encryption, checksum, native packages)",
        },
        {
          name: "--delta-pack",
          description:
            "Also write a delta pack zip (manifest + per-file upload bytes) for delta uploads. Implies --for-upload",
          args: { name: "file", template: "filepaths" },
        },
        encryptDeltaOption,
        encryptPartialOption,
        disableBrotliOption,
        forceCrc32ChecksumOption,
        packageJsonOption,
        nodeModulesOption,
      ],
    },
  ],
};

// --- app ------------------------------------------------------------------

const appSettingToggles: [string, string, string][] = [
  [
    "preview",
    "Enable bundle and channel preview QR codes for this app",
    "Disable bundle and channel preview QR codes for this app",
  ],
  [
    "allow-device-custom-id",
    "Allow devices to set a custom device ID for this app",
    "Disallow custom device IDs for this app",
  ],
  [
    "collect-country",
    "Store the request country on device records and stats",
    "Do not store country on device records or stats",
  ],
  [
    "collect-platform",
    "Store device platform on device records and stats",
    "Do not store device platform on device records or stats",
  ],
  [
    "collect-os-version",
    "Store device OS version on device records and stats",
    "Do not store device OS version on device records or stats",
  ],
  [
    "collect-plugin-version",
    "Store the updater plugin version on device records and stats",
    "Do not store the updater plugin version on device records or stats",
  ],
  [
    "collect-version-build",
    "Store the native app version on device records and stats",
    "Do not store the native app version on device records or stats",
  ],
  [
    "collect-is-emulator",
    "Store whether the client reported itself as an emulator",
    "Do not store the emulator flag",
  ],
  [
    "collect-is-prod",
    "Store whether the client reported a production build",
    "Do not store the production / development flag",
  ],
  [
    "collect-install-source",
    "Store App Store, Play Store, TestFlight, or other install source",
    "Do not store install source",
  ],
  [
    "block-provider-infra-requests",
    "Block provider infrastructure requests for this app",
    "Allow provider infrastructure requests for this app",
  ],
];

const nameOption: Fig.Option = {
  name: ["-n", "--name"],
  description: "App name for display in Capgo Cloud",
  args: { name: "name" },
};

const appCommand: Fig.Subcommand = {
  name: "app",
  description:
    "Manage your Capgo app settings and configurations in Capgo Cloud",
  subcommands: [
    {
      name: ["add", "a"],
      description:
        "Add a new app to Capgo Cloud with a unique app ID in the format com.test.app",
      args: optionalAppId,
      options: [
        nameOption,
        {
          name: ["-i", "--icon"],
          description: "App icon path for display in Capgo Cloud",
          args: { name: "icon", template: "filepaths" },
        },
        ...cloudOptions,
      ],
    },
    {
      name: "delete",
      description:
        "Delete an app from Capgo Cloud, optionally specifying a version to delete only that bundle",
      args: optionalAppId,
      options: cloudOptions,
    },
    {
      name: ["list", "l"],
      description: "List all apps registered under your account in Capgo Cloud",
      options: [
        apikeyOption,
        {
          name: "--filter-by-org-id",
          description: "Only list apps from this organization ID",
          args: { name: "orgId" },
        },
        {
          name: "--show-org",
          description: "Show the organization name for each app",
        },
        {
          name: "--show-org-id",
          description: "Show the organization ID for each app",
        },
        {
          name: "--output-text",
          description:
            "Print plain text with a CSV app table and no interactive formatting",
        },
        apiHostOption,
        filesHostOption,
      ],
    },
    {
      name: ["todo", "todoList"],
      description:
        "Show your app's onboarding todo list with done, skipped, and pending tasks",
      args: optionalAppId,
      options: [
        {
          name: "--list",
          description:
            "Show one todo list and exit; required for dual checklists in non-interactive mode",
          args: { name: "list", suggestions: ["builder", "ota"] },
        },
        ...cloudOptions,
      ],
    },
    {
      name: "debug",
      description:
        "Listen for live update events in Capgo Cloud to debug your app",
      args: optionalAppId,
      options: [
        apikeyOption,
        {
          name: ["-d", "--device"],
          description: "The specific device ID to debug",
          args: { name: "device" },
        },
        apiHostOption,
        filesHostOption,
      ],
    },
    {
      name: "setting",
      description: "Modify Capacitor configuration programmatically",
      args: {
        name: "path",
        isOptional: true,
        description:
          "Setting path, e.g. plugins.CapacitorUpdater.defaultChannel",
      },
      options: [
        {
          name: "--bool",
          description:
            "A value for the setting to modify as a boolean, ex: --bool true",
          args: { name: "bool", suggestions: ["true", "false"] },
        },
        {
          name: "--string",
          description:
            'A value for the setting to modify as a string, ex: --string "Production"',
          args: { name: "string" },
        },
      ],
    },
    {
      name: ["set", "s"],
      description:
        "Update settings for an existing app in Capgo Cloud, such as name, icon, or retention period for bundles",
      args: optionalAppId,
      options: [
        nameOption,
        {
          name: ["-i", "--icon"],
          description:
            "Local image file path (png, jpg, webp, svg) used as the app icon in Capgo Cloud",
          args: { name: "icon", template: "filepaths" },
        },
        apikeyOption,
        {
          name: ["-r", "--retention"],
          description: "Days to keep old bundles (0 = infinite, default: 0)",
          args: { name: "retention" },
        },
        {
          name: "--expose-metadata",
          description:
            "Expose bundle metadata (link and comment) to the plugin (true/false, default: false)",
          args: { name: "exposeMetadata", suggestions: ["true", "false"] },
        },
        ...appSettingToggles.flatMap(([flag, on, off]) =>
          toggle(flag, on, off)
        ),
        {
          name: "--build-timeout-minutes",
          description: "Native build timeout in minutes (5-360, default: 15)",
          args: { name: "minutes" },
        },
        {
          name: "--ios-store-url",
          description: "App Store URL of the iOS app",
          args: { name: "url" },
        },
        {
          name: "--android-store-url",
          description: "Google Play Store URL for this app",
          args: { name: "url" },
        },
        {
          name: "--default-upload-channel",
          description: "Default upload channel name for this app",
          args: { name: "channel" },
        },
        {
          name: "--default-download-channel",
          description:
            "Default download channel name for this app (sets channel public=true)",
          args: { name: "channel" },
        },
        {
          name: "--disable-download-channels",
          description:
            "Disable Capgo download channels for this app (sets all channels public=false)",
        },
        apiHostOption,
        filesHostOption,
      ],
    },
  ],
};

// --- channel --------------------------------------------------------------

const sendUpdateNotificationOption: Fig.Option = {
  name: "--send-update-notification",
  description:
    "Send a native update-check notification to devices after updating the linked channel bundle",
};

const ignoreMetadataCheckChannelOption: Fig.Option = {
  name: "--ignore-metadata-check",
  description:
    "Ignore checking node_modules compatibility if present in the bundle",
  exclusiveOn: ["--accept-incompatible"],
};

const acceptIncompatibleChannelOption: Fig.Option = {
  name: "--accept-incompatible",
  description:
    "Accept native-package incompatibility as handled (still checks and warns, sets the channel instead of failing). Use this when your app already guards missing plugins at runtime",
  exclusiveOn: ["--ignore-metadata-check"],
};

const intArg = (name: string): Fig.Arg => ({ name });

const channelCommand: Fig.Subcommand = {
  name: "channel",
  description:
    "Manage distribution channels for app updates in Capgo Cloud, controlling how updates are delivered to devices",
  subcommands: [
    {
      name: ["add", "a"],
      description:
        "Create a new channel for app distribution in Capgo Cloud to manage update delivery",
      args: [{ name: "channelName", isOptional: true }, optionalAppId],
      options: [
        {
          name: ["-d", "--default"],
          description: "Set the channel as default",
        },
        {
          name: "--self-assign",
          description: "Allow device to self-assign to this channel",
        },
        ...cloudOptions,
      ],
    },
    {
      name: ["delete", "d"],
      description:
        "Delete a channel from Capgo Cloud, optionally removing associated bundles to free up resources",
      args: [{ name: "channelName", isOptional: true }, optionalAppId],
      options: [
        apikeyOption,
        {
          name: "--delete-bundle",
          description: "Delete the bundle associated with the channel",
        },
        {
          name: "--success-if-not-found",
          description: "Success if the channel is not found",
        },
        apiHostOption,
        filesHostOption,
      ],
    },
    {
      name: ["list", "l"],
      description:
        "List all channels configured for an app in Capgo Cloud to review distribution settings",
      args: optionalAppId,
      options: cloudOptions,
    },
    {
      name: "currentBundle",
      description:
        "Get the current bundle linked to a specific channel in Capgo Cloud for update tracking",
      args: [{ name: "channel", isOptional: true }, optionalAppId],
      options: [
        {
          name: ["-c", "--channel"],
          description: "Channel to get the current bundle from",
          args: { name: "channel" },
        },
        apikeyOption,
        { name: "--quiet", description: "Only print the bundle version" },
        apiHostOption,
        filesHostOption,
      ],
    },
    {
      name: "promote",
      description:
        "Promote the bundle currently linked to one channel to another channel, for example from staging to production",
      args: [
        { name: "fromChannel", isOptional: true },
        { name: "toChannel", isOptional: true },
        optionalAppId,
      ],
      options: [
        apikeyOption,
        sendUpdateNotificationOption,
        ignoreMetadataCheckChannelOption,
        acceptIncompatibleChannelOption,
        apiHostOption,
        filesHostOption,
      ],
    },
    {
      name: ["set", "s"],
      description:
        "Configure settings for a channel, such as linking a bundle, setting update strategies, or device targeting",
      args: [{ name: "channelName", isOptional: true }, optionalAppId],
      options: [
        apikeyOption,
        {
          name: ["-b", "--bundle"],
          description: "Bundle version number of the file to set",
          args: { name: "bundle" },
        },
        {
          name: ["-s", "--state"],
          description: "Set the state of the channel, default or normal",
          args: { name: "state", suggestions: ["default", "normal"] },
        },
        {
          name: "--latest-remote",
          description:
            "Get the latest bundle uploaded in capgo cloud and set it to the channel",
        },
        {
          name: "--latest",
          description:
            "Get the latest version key in the package.json to set it to the channel",
        },
        ...toggle(
          "downgrade",
          "Allow to downgrade to version under native one",
          "Disable downgrade to version under native one"
        ),
        ...toggle(
          "ios",
          "Allow sending update to iOS devices",
          "Disable sending update to iOS devices"
        ),
        ...toggle(
          "android",
          "Allow sending update to Android devices",
          "Disable sending update to Android devices"
        ),
        ...toggle(
          "electron",
          "Allow sending update to Electron apps",
          "Disable sending update to Electron apps"
        ),
        {
          name: "--pause",
          description:
            "Pause all updates on this channel (devices stay on their current bundle)",
        },
        { name: "--resume", description: "Resume updates on a paused channel" },
        ...toggle(
          "self-assign",
          "Allow device to self-assign to this channel",
          "Disable devices to self-assign to this channel"
        ),
        {
          name: "--disable-auto-update",
          description:
            "Block updates by type: major, minor, metadata, patch, or none (allows all)",
          args: {
            name: "disableAutoUpdate",
            suggestions: ["major", "minor", "metadata", "patch", "none"],
          },
        },
        {
          name: "--update-package",
          description: "Serve zip, delta, or both",
          args: {
            name: "updatePackage",
            suggestions: [
              "all",
              "zip",
              "delta",
              "zip_from_builtin",
              "delta_from_builtin",
            ],
          },
        },
        {
          name: "--rollout-bundle",
          description: "Bundle version to release gradually on this channel",
          args: { name: "rolloutBundle" },
        },
        {
          name: "--rollout-percentage",
          description: "Rollout percentage from 0 to 100",
          args: intArg("rolloutPercentage"),
        },
        {
          name: "--rollout-percentage-bps",
          description: "Rollout percentage in basis points from 0 to 10000",
          args: intArg("rolloutPercentageBps"),
        },
        {
          name: "--rollout-enable",
          description: "Enable the configured rollout",
        },
        {
          name: "--rollout-disable",
          description:
            "Disable the configured rollout and unlink the rollout bundle",
        },
        {
          name: "--rollout-pause",
          description:
            "Pause rollout exposure without rolling back selected devices",
        },
        { name: "--rollout-resume", description: "Resume a paused rollout" },
        {
          name: "--rollout-rollback",
          description: "Clear rollout state and return devices to stable",
        },
        {
          name: "--rollout-promote",
          description:
            "Promote rollout target to stable and clear rollout state",
        },
        {
          name: "--rollout-cache-ttl-seconds",
          description: "Cloudflare rollout decision cache TTL in seconds",
          args: intArg("rolloutCacheTtlSeconds"),
        },
        {
          name: "--auto-pause-enabled",
          description: "Enable rollout auto-pause policy",
        },
        {
          name: "--auto-pause-disabled",
          description: "Disable rollout auto-pause policy",
        },
        {
          name: "--auto-pause-window-minutes",
          description: "Stats window for rollout auto-pause",
          args: intArg("autoPauseWindowMinutes"),
        },
        {
          name: "--auto-pause-failure-rate-bps",
          description: "Failure-rate threshold in basis points",
          args: intArg("autoPauseFailureRateBps"),
        },
        {
          name: "--auto-pause-confidence",
          description: "Confidence level between 0 and 1",
          args: intArg("autoPauseConfidence"),
        },
        {
          name: "--auto-pause-min-attempts",
          description:
            "Minimum install plus fail attempts before auto-pause can trigger",
          args: intArg("autoPauseMinAttempts"),
        },
        {
          name: "--auto-pause-min-failures",
          description: "Minimum failures before auto-pause can trigger",
          args: intArg("autoPauseMinFailures"),
        },
        {
          name: "--auto-pause-action",
          description: "Auto-pause action: pause, rollback, or notify",
          args: {
            name: "autoPauseAction",
            suggestions: ["pause", "rollback", "notify"],
          },
        },
        {
          name: "--auto-pause-cooldown-minutes",
          description: "Cooldown before auto-pause can trigger again",
          args: intArg("autoPauseCooldownMinutes"),
        },
        ...toggle(
          "dev",
          "Allow sending update to development devices",
          "Disable sending update to development devices"
        ),
        ...toggle(
          "prod",
          "Allow sending update to production devices",
          "Disable sending update to production devices"
        ),
        ...toggle(
          "emulator",
          "Allow sending update to emulator devices",
          "Disable sending update to emulator devices"
        ),
        ...toggle(
          "device",
          "Allow sending update to physical devices",
          "Disable sending update to physical devices"
        ),
        {
          name: "--qr-preview",
          description:
            "Print a terminal QR code for this channel preview after updating it",
        },
        sendUpdateNotificationOption,
        packageJsonOption,
        ignoreMetadataCheckChannelOption,
        acceptIncompatibleChannelOption,
        apiHostOption,
        filesHostOption,
      ],
    },
  ],
};

// --- key ------------------------------------------------------------------

const keyCommand: Fig.Subcommand = {
  name: "key",
  description:
    "Manage encryption keys for secure bundle distribution in Capgo Cloud, supporting end-to-end encryption with RSA and AES combination",
  subcommands: [
    {
      name: "save",
      description:
        "Save the public key in the Capacitor config, useful for CI environments",
      options: [
        forceOption,
        {
          name: "--key",
          description: "Key path to save in Capacitor config",
          args: { name: "key", template: "filepaths" },
        },
        {
          name: "--key-data",
          description: "Key data to save in Capacitor config",
          args: { name: "keyData" },
        },
      ],
    },
    {
      name: "create",
      description: "Create RSA key pair for end-to-end encryption",
      options: [
        forceOption,
        {
          name: "--skip-capgo-app-id-prompt",
          description:
            "Skip the optional prompt to create a Capgo app with a random app ID after key creation",
        },
      ],
    },
    {
      name: "delete_old",
      description:
        "Delete the old encryption key from the Capacitor config to ensure only the current key is used",
    },
  ],
};

// --- account --------------------------------------------------------------

const accountCommand: Fig.Subcommand = {
  name: "account",
  description:
    "Manage your Capgo account details and retrieve information for support or collaboration",
  subcommands: [
    {
      name: ["whoami", "id"],
      description: "Retrieve your account ID and email address",
      options: [apikeyOption],
    },
    {
      name: ["get", "g"],
      description: "Show your account profile and email notification settings",
      options: cloudOptions,
    },
    {
      name: ["set", "s"],
      description:
        "Update your account profile and email notification settings",
      options: [
        {
          name: "--first-name",
          description: "First name",
          args: { name: "firstName" },
        },
        {
          name: "--last-name",
          description: "Last name",
          args: { name: "lastName" },
        },
        {
          name: "--country",
          description: "Country",
          args: { name: "country" },
        },
        {
          name: "--discord-username",
          description: "Discord username (empty or null to clear)",
          args: { name: "username" },
        },
        {
          name: "--format-locale",
          description:
            "Locale used to format dates and numbers, e.g. en-US (empty or null to clear)",
          args: { name: "locale" },
        },
        ...toggle(
          "notifications",
          "Enable email notifications",
          "Disable all email notifications"
        ),
        ...toggle(
          "newsletter",
          "Subscribe to the newsletter",
          "Unsubscribe from the newsletter"
        ),
        {
          name: "--email-preference",
          description:
            "Email notification toggle (repeatable), e.g. --email-preference weekly_stats=false",
          isRepeatable: true,
          args: {
            name: "key=bool",
            suggestions: emailPreferenceSuggestions(userEmailPreferenceKeys),
          },
        },
        ...cloudOptions,
      ],
    },
  ],
};

// --- organization ---------------------------------------------------------

const memberRoles = [
  "org_member",
  "org_billing_admin",
  "org_admin",
  "org_super_admin",
];

const memberRoleOption: Fig.Option = {
  name: ["-r", "--role"],
  description:
    "Role: org_member, org_billing_admin, org_admin or org_super_admin",
  args: { name: "role", suggestions: memberRoles },
};

const orgNameOption: Fig.Option = {
  name: ["-n", "--name"],
  description: "Organization name",
  args: { name: "name" },
};

const orgEmailOption: Fig.Option = {
  name: ["-e", "--email"],
  description: "Management email for the organization",
  args: { name: "email" },
};

const orgSetOptions: Fig.Option[] = [
  orgNameOption,
  orgEmailOption,
  ...toggle(
    "enforce-2fa",
    "Enable 2FA enforcement for all organization members",
    "Disable 2FA enforcement for organization"
  ),
  ...toggle(
    "password-policy",
    "Enable password policy enforcement for organization",
    "Disable password policy enforcement"
  ),
  {
    name: "--min-length",
    description: "Minimum password length (6-128, default: 10)",
    args: { name: "minLength" },
  },
  ...toggle(
    "require-uppercase",
    "Require uppercase letter in password",
    "Do not require uppercase letter"
  ),
  ...toggle(
    "require-number",
    "Require number in password",
    "Do not require number"
  ),
  ...toggle(
    "require-special",
    "Require special character in password",
    "Do not require special character"
  ),
  ...toggle(
    "require-apikey-expiration",
    "Require all API keys to have an expiration date",
    "Do not require API key expiration"
  ),
  {
    name: "--max-apikey-expiration-days",
    description:
      "Maximum days before API key expiration (1-365, null for no limit)",
    args: { name: "days" },
  },
  ...toggle(
    "enforce-hashed-api-keys",
    "Enforce hashed/secure API keys (key value stored as hash, shown only once)",
    "Allow plain-text API keys"
  ),
  {
    name: "--website",
    description: "Organization website URL (empty or null to clear)",
    args: { name: "url" },
  },
  ...toggle(
    "enforce-encrypted-bundles",
    "Require every uploaded bundle to be encrypted",
    "Allow unencrypted bundles"
  ),
  {
    name: "--required-encryption-key",
    description:
      "Only accept bundles encrypted with this public key fingerprint (null to clear)",
    args: { name: "key" },
  },
  {
    name: "--email-preference",
    description:
      "Organization email notification toggle (repeatable), e.g. --email-preference weekly_stats=false",
    isRepeatable: true,
    args: {
      name: "key=bool",
      suggestions: emailPreferenceSuggestions(orgEmailPreferenceKeys),
    },
  },
  ...cloudOptions,
];

const orgIdArg: Fig.Arg = { name: "orgId", isOptional: true };

const organizationCommand: Fig.Subcommand = {
  name: "organization",
  description:
    "Manage your organizations in Capgo Cloud for team collaboration and app management",
  subcommands: [
    {
      name: ["list", "l"],
      description: "List all organizations you have access to in Capgo Cloud",
      options: cloudOptions,
    },
    {
      name: ["add", "a"],
      description:
        "Create a new organization in Capgo Cloud for team collaboration",
      options: [orgNameOption, orgEmailOption, ...cloudOptions],
    },
    {
      name: ["members", "m"],
      description: "List organization members and their 2FA status",
      args: orgIdArg,
      options: cloudOptions,
    },
    {
      name: "members-invite",
      description: "Invite a user to an organization by email with a role",
      args: orgIdArg,
      options: [
        {
          name: ["-e", "--email"],
          description: "Email of the user to invite",
          args: { name: "email" },
        },
        memberRoleOption,
        ...cloudOptions,
      ],
    },
    {
      name: "members-role",
      description:
        "Change the role of an organization member or pending invite",
      args: orgIdArg,
      options: [
        {
          name: ["-e", "--email"],
          description: "Email of the member",
          args: { name: "email" },
        },
        memberRoleOption,
        ...cloudOptions,
      ],
    },
    {
      name: "members-remove",
      description: "Remove a member from an organization",
      args: orgIdArg,
      options: [
        {
          name: ["-e", "--email"],
          description: "Email of the member to remove",
          args: { name: "email" },
        },
        ...cloudOptions,
      ],
    },
    {
      name: ["set", "s"],
      description:
        "Update organization settings including name, email, security policies, and enforcement options",
      args: orgIdArg,
      options: orgSetOptions,
    },
    {
      name: ["delete", "d"],
      description:
        "Delete an organization from Capgo Cloud. This action cannot be undone",
      args: orgIdArg,
      options: cloudOptions,
    },
  ],
};

const organisationCommand: Fig.Subcommand = {
  name: "organisation",
  description: 'Deprecated, use "organization" instead',
  deprecated: true,
  subcommands: [
    {
      name: ["list", "l"],
      description: 'Deprecated, use "organization list" instead',
      options: cloudOptions,
    },
    {
      name: ["add", "a"],
      description: 'Deprecated, use "organization add" instead',
      options: [orgNameOption, orgEmailOption, ...cloudOptions],
    },
    {
      name: ["set", "s"],
      description: 'Deprecated, use "organization set" instead',
      args: orgIdArg,
      options: orgSetOptions,
    },
    {
      name: ["delete", "d"],
      description: 'Deprecated, use "organization delete" instead',
      args: orgIdArg,
      options: cloudOptions,
    },
  ],
};

// --- build ----------------------------------------------------------------

const appleIdOption: Fig.Option = {
  name: "--apple-id",
  description:
    "For iOS: Apple ID email for app-specific password uploads (alternative to App Store Connect API key)",
  args: { name: "email" },
};

const appleAppSpecificPasswordOption: Fig.Option = {
  name: "--apple-app-specific-password",
  description:
    "For iOS: App-specific password (xxxx-xxxx-xxxx-xxxx) for TestFlight uploads",
  args: { name: "password" },
};

const appleAppIdOption: Fig.Option = {
  name: "--apple-app-id",
  description:
    "For iOS: Numeric App Store Connect app id (required together with --apple-id and --apple-app-specific-password)",
  args: { name: "id" },
};

const appleKeyIdOption: Fig.Option = {
  name: "--apple-key-id",
  description: "For iOS: App Store Connect API Key ID",
  args: { name: "id" },
};

const appleIssuerIdOption: Fig.Option = {
  name: "--apple-issuer-id",
  description: "For iOS: App Store Connect Issuer ID",
  args: { name: "id" },
};

const p12PasswordOption: Fig.Option = {
  name: "--p12-password",
  description:
    "For iOS: Certificate password (optional if cert has no password)",
  args: { name: "password" },
};

const iosDistributionModes = [
  { name: "app_store", description: "Upload to TestFlight/App Store" },
  { name: "ad_hoc", description: "Build an Ad Hoc IPA for device install" },
];

const androidFlavorOption: Fig.Option = {
  name: "--android-flavor",
  description:
    "Android: Product flavor to build (e.g. production). Required if your project has multiple flavors",
  args: { name: "flavor" },
};

const provisioningProfileOption = (description: string): Fig.Option => ({
  name: "--ios-provisioning-profile",
  description,
  isRepeatable: true,
  args: { name: "mapping", template: "filepaths" },
});

const keystoreKeyPasswordOption = (prefix: string): Fig.Option => ({
  name: "--keystore-key-password",
  description: `${prefix}Keystore key password`,
  args: { name: "password" },
});

const keystoreStorePasswordOption = (prefix: string): Fig.Option => ({
  name: "--keystore-store-password",
  description: `${prefix}Keystore store password`,
  args: { name: "password" },
});

const outputRetentionOption = (description: string): Fig.Option => ({
  name: "--output-retention",
  description,
  args: { name: "duration", suggestions: ["1h", "6h", "1d", "2d", "7d"] },
});

const inAppUpdatePriorityOption = (description: string): Fig.Option => ({
  name: "--in-app-update-priority",
  description,
  args: { name: "priority", suggestions: ["0", "1", "2", "3", "4", "5"] },
});

/** The "Build defaults" flags shared by `build credentials save` and `update` */
const buildDefaultsOptions = (outputRetention: string): Fig.Option[] => [
  {
    name: "--output-upload",
    description:
      "Upload build outputs (IPA/APK/AAB) to Capgo storage and print download links",
    exclusiveOn: ["--no-output-upload"],
  },
  {
    name: "--no-output-upload",
    description: "Do not upload build outputs (IPA/APK/AAB) to Capgo storage",
    exclusiveOn: ["--output-upload"],
  },
  outputRetentionOption(outputRetention),
  {
    name: "--symbols-upload",
    description:
      "Keep debug symbols (iOS dSYMs, Android mapping.txt) in Capgo storage on future builds and print a download link. Also pass --no-output-upload to avoid keeping the IPA/APK/AAB when output upload is enabled",
    exclusiveOn: ["--no-symbols-upload"],
  },
  {
    name: "--no-symbols-upload",
    description:
      "Do not keep debug symbols on future builds unless output upload is enabled. --output-upload still includes debug symbols",
    exclusiveOn: ["--symbols-upload"],
  },
  ...toggle(
    "skip-build-number-bump",
    "Skip automatic build number/version code incrementing on future builds",
    "Re-enable automatic build number incrementing (default behavior)"
  ),
  ...toggle(
    "skip-marketing-version-bump",
    "Skip automatic marketing version bump on future builds when the app is already released",
    "Re-enable automatic marketing version bump (default behavior)"
  ),
];

const syncIosVersionOption: Fig.Option = {
  name: "--sync-ios-version",
  description:
    "For iOS: sync the app version from package.json before uploading the project. Updates MARKETING_VERSION or CFBundleShortVersionString based on the Xcode Info.plist configuration",
};

const syncAndroidVersionOption: Fig.Option = {
  name: "--sync-android-version",
  description:
    "Android: sync versionName in android/app/build.gradle from package.json before uploading the project. Fails unless versionName is a standalone quoted string literal",
};

const buildPathOption = pathOption(
  "Path to the project directory to build (default: current directory)"
);

const credentialsAppIdOption = (description: string): Fig.Option => ({
  name: "--appId",
  description,
  args: { name: "appId" },
});

const credentialsPlatformOption = (description: string): Fig.Option => ({
  name: "--platform",
  description,
  args: { name: "platform", suggestions: platforms },
});

const buildCredentialsCommand: Fig.Subcommand = {
  name: "credentials",
  description: "Manage locally saved build credentials",
  subcommands: [
    {
      name: ["apple-key", "asc-key"],
      description: "Create an App Store Connect API key on macOS (macOS only)",
      options: [
        apikeyOption,
        credentialsAppIdOption(
          "Save the captured key into this app iOS build credentials"
        ),
        localOption(
          "Save into the per-project .capgo-credentials.json instead of the global file"
        ),
        {
          name: "--json",
          description:
            "Print the captured Key ID / Issuer ID / .p8 path as JSON",
        },
      ],
    },
    {
      name: "ios-provisioning",
      description: "Set up provisioning profiles for every signable iOS target",
      options: [
        {
          name: "--local",
          description: "Use credentials from the current project",
          exclusiveOn: ["--global"],
        },
        {
          name: "--global",
          description: "Use credentials from the global store",
          exclusiveOn: ["--local"],
        },
      ],
    },
    {
      name: "save",
      description: "Save iOS or Android build credentials on this machine",
      options: [
        credentialsAppIdOption("App ID (e.g., com.example.app) (required)"),
        credentialsPlatformOption("Platform: ios or android (required)"),
        localOption(
          "Save to .capgo-credentials.json in project root instead of global ~/.capgo-credentials/"
        ),
        {
          name: "--certificate",
          description: "For iOS: Path to .p12 certificate file",
          args: { name: "path", template: "filepaths" },
        },
        provisioningProfileOption(
          "For iOS: Provisioning profile path or bundleId=path (repeatable)"
        ),
        p12PasswordOption,
        {
          name: "--apple-key",
          description: "For iOS: Path to .p8 App Store Connect API key",
          args: { name: "path", template: "filepaths" },
        },
        appleKeyIdOption,
        appleIssuerIdOption,
        {
          name: "--apple-team-id",
          description: "For iOS: App Store Connect Team ID",
          args: { name: "id" },
        },
        {
          name: "--ios-distribution",
          description: "For iOS: Distribution mode (default: app_store)",
          args: { name: "mode", suggestions: iosDistributionModes },
        },
        appleIdOption,
        appleAppSpecificPasswordOption,
        appleAppIdOption,
        {
          name: "--keystore",
          description: "Android: Path to keystore file (.keystore or .jks)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--keystore-alias",
          description: "Android: Keystore key alias",
          args: { name: "alias" },
        },
        keystoreKeyPasswordOption("Android: "),
        keystoreStorePasswordOption("Android: "),
        {
          name: "--play-config",
          description: "Android: Path to Play Store service account JSON",
          args: { name: "path", template: "filepaths" },
        },
        androidFlavorOption,
        inAppUpdatePriorityOption(
          "Android: Google Play in-app update priority for future releases (integer 0-5; higher = more urgent). Omit to leave Play's existing value untouched"
        ),
        ...buildDefaultsOptions(
          "Output link TTL: 1h to 7d (default: 1h). Examples: 1h, 6h, 2d"
        ),
      ],
    },
    {
      name: "list",
      description: "List saved build credentials (passwords masked)",
      options: [
        credentialsAppIdOption(
          "App ID to list (optional, lists all if omitted)"
        ),
        localOption("List credentials from local .capgo-credentials.json only"),
      ],
    },
    {
      name: "clear",
      description: "Clear saved build credentials",
      options: [
        credentialsAppIdOption(
          "App ID to clear (optional, clears all apps if omitted)"
        ),
        credentialsPlatformOption(
          "Platform to clear: ios or android (optional, clears all platforms if omitted)"
        ),
        localOption(
          "Clear from local .capgo-credentials.json instead of global"
        ),
      ],
    },
    {
      name: "update",
      description:
        "Update specific saved credentials without providing all of them again",
      options: [
        credentialsAppIdOption(
          "App ID (auto-detected from capacitor.config if omitted)"
        ),
        credentialsPlatformOption(
          "Platform: ios or android (auto-detected from options)"
        ),
        localOption("Update local .capgo-credentials.json instead of global"),
        {
          name: "--certificate",
          description: "Path to P12 certificate file",
          args: { name: "path", template: "filepaths" },
        },
        provisioningProfileOption(
          "Provisioning profile path or bundleId=path (repeatable, additive by default)"
        ),
        {
          name: "--overwrite-ios-provisioning-map",
          description:
            "Replace the entire provisioning map instead of merging (default: merge)",
        },
        {
          name: "--p12-password",
          description: "P12 certificate password",
          args: { name: "password" },
        },
        {
          name: "--apple-key",
          description: "Path to App Store Connect API key (.p8 file)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--apple-key-id",
          description: "App Store Connect API Key ID",
          args: { name: "id" },
        },
        {
          name: "--apple-issuer-id",
          description: "App Store Connect Issuer ID",
          args: { name: "id" },
        },
        {
          name: "--apple-team-id",
          description: "App Store Connect Team ID",
          args: { name: "id" },
        },
        appleIdOption,
        appleAppSpecificPasswordOption,
        appleAppIdOption,
        {
          name: "--ios-distribution",
          description: "For iOS: Distribution mode",
          args: { name: "mode", suggestions: iosDistributionModes },
        },
        {
          name: "--keystore",
          description: "Path to keystore file (.keystore or .jks)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--keystore-alias",
          description: "Keystore key alias",
          args: { name: "alias" },
        },
        keystoreKeyPasswordOption(""),
        keystoreStorePasswordOption(""),
        {
          name: "--play-config",
          description: "Path to Google Play service account JSON",
          args: { name: "path", template: "filepaths" },
        },
        androidFlavorOption,
        inAppUpdatePriorityOption(
          "Android: Google Play in-app update priority for future releases (integer 0-5; higher = more urgent)"
        ),
        ...buildDefaultsOptions(
          "Output link TTL: 1h to 7d. Examples: 1h, 6h, 2d"
        ),
      ],
    },
    {
      name: "manage",
      description: "Interactively manage saved build credentials",
      options: [
        credentialsAppIdOption(
          "App ID to manage (optional, prompts to pick if omitted)"
        ),
        credentialsPlatformOption(
          "Platform to manage: ios or android (optional, prompts to pick if omitted)"
        ),
        localOption("Only browse local .capgo-credentials.json"),
      ],
    },
    {
      name: "export",
      description: "Export one saved Builder credential or configuration value",
      args: { name: "variable" },
      options: [
        {
          name: "--app-id",
          description:
            "App ID whose saved Builder value will be exported (required)",
          args: { name: "appId" },
        },
        {
          name: "--appId",
          description: "Compatibility alias for --app-id",
          args: { name: "appId" },
          hidden: true,
        },
        credentialsPlatformOption(
          "Platform: ios or android (required when saved platform values are ambiguous)"
        ),
        {
          name: "--local",
          description:
            "Export only from the project-local .capgo-credentials.json",
          exclusiveOn: ["--global"],
        },
        {
          name: "--global",
          description: "Export only from ~/.capgo-credentials/credentials.json",
          exclusiveOn: ["--local"],
        },
        {
          name: "--file",
          description:
            "Write the value to a new file; existing destinations are never overwritten",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--raw",
          description:
            "Write only the exact stored value to stdout without a trailing newline",
        },
        {
          name: "--decode-base64",
          description:
            "Decode Base64 before file output; valid only with --file",
          dependsOn: ["--file"],
        },
      ],
    },
    {
      name: "migrate",
      description:
        "Migrate legacy provisioning profile to the new multi-target format",
      options: [
        credentialsAppIdOption(
          "App ID (auto-detected from capacitor.config if omitted)"
        ),
        {
          name: "--platform",
          description: "Platform (only ios is supported)",
          args: { name: "platform", suggestions: ["ios"] },
        },
        localOption(
          "Migrate from local .capgo-credentials.json instead of global"
        ),
      ],
    },
    {
      name: "push",
      description:
        "Store this machine's saved build credentials for one platform on Capgo, encrypted",
      args: optionalAppId,
      options: [
        credentialsPlatformOption(
          "Platform to store: ios or android (required)"
        ),
        {
          name: "--mode",
          description:
            "Replace: overwrite stored keys (default). Merge: keep stored keys not in the local set",
          args: { name: "mode", suggestions: ["replace", "merge"] },
        },
        {
          name: "--local",
          description: "Read from local .capgo-credentials.json only",
          exclusiveOn: ["--global"],
        },
        {
          name: "--global",
          description: "Read from ~/.capgo-credentials/credentials.json only",
          exclusiveOn: ["--local"],
        },
        apikeyOption,
        apiHostOption,
      ],
    },
    {
      name: "remote-status",
      description:
        "Show which build credentials are stored on Capgo for an app and what is still missing to build",
      args: optionalAppId,
      options: [
        {
          name: "--platform",
          description: "Only show ios or android",
          args: { name: "platform", suggestions: platforms },
        },
        apikeyOption,
        apiHostOption,
      ],
    },
    {
      name: "remote-delete",
      description:
        "Delete the build credentials stored on Capgo for one platform (local saved credentials are not touched)",
      args: optionalAppId,
      options: [
        credentialsPlatformOption(
          "Platform to delete: ios or android (required)"
        ),
        { name: ["-y", "--yes"], description: "Do not ask for confirmation" },
        apikeyOption,
        apiHostOption,
      ],
    },
  ],
};

const buildRequestOptions: Fig.Option[] = [
  buildPathOption,
  nodeModulesOption,
  platformOption("Target platform: ios or android (required)"),
  {
    name: "--build-mode",
    description: "Build mode: debug or release (default: release)",
    args: { name: "buildMode", suggestions: ["debug", "release"] },
  },
  // iOS
  {
    name: "--build-certificate-base64",
    description: "For iOS: Base64-encoded .p12 certificate",
    args: { name: "cert" },
  },
  p12PasswordOption,
  appleIdOption,
  appleAppSpecificPasswordOption,
  appleAppIdOption,
  appleKeyIdOption,
  appleIssuerIdOption,
  {
    name: "--apple-key-content",
    description: "For iOS: Base64-encoded App Store Connect API key (.p8)",
    args: { name: "content" },
  },
  {
    name: "--app-store-connect-team-id",
    description: "For iOS: App Store Connect Team ID",
    args: { name: "id" },
  },
  {
    name: "--ios-scheme",
    description: "For iOS: Xcode scheme to build (default: App)",
    args: { name: "scheme" },
  },
  {
    name: "--ios-target",
    description:
      "For iOS: Xcode target for reading build settings (default: same as scheme)",
    args: { name: "target" },
  },
  {
    name: "--xcode-version",
    description:
      "For iOS: build on a machine with this Xcode version (e.g. 26, 26.0.1, 27). A major version accepts any minor. Default: any machine. Precedence: CLI > env (CAPGO_IOS_XCODE_VERSION) > saved credentials",
    args: { name: "version" },
  },
  {
    name: "--ios-distribution",
    description:
      "For iOS: Distribution mode. app_store (default) uploads to TestFlight/App Store; ad_hoc skips store upload and builds an Ad Hoc IPA for device install",
    args: { name: "mode", suggestions: iosDistributionModes },
  },
  {
    name: "--use-stored-credentials",
    description:
      'Use the signing credentials stored on Capgo for this app (see "build credentials push"). Requires app admin rights on the app',
  },
  provisioningProfileOption(
    "For iOS: Provisioning profile path or bundleId=path mapping (repeatable)"
  ),
  {
    name: "--no-cache",
    description:
      "Disable Xcode compilation cache for this build (default: cache enabled)",
  },
  {
    name: "--cache-key",
    description:
      "Custom compilation cache key for this build (e.g. rc, prod, feature-branch). Ignored when --no-cache is set",
    args: { name: "key" },
  },
  // Android
  {
    name: "--android-keystore-file",
    description: "Android: Base64-encoded keystore file",
    args: { name: "keystore" },
  },
  {
    name: "--keystore-key-alias",
    description: "Android: Keystore key alias",
    args: { name: "alias" },
  },
  keystoreKeyPasswordOption("Android: "),
  keystoreStorePasswordOption("Android: "),
  {
    name: "--play-config-json",
    description: "Android: Base64-encoded Google Play service account JSON",
    args: { name: "json" },
  },
  androidFlavorOption,
  {
    name: "--android-track",
    description:
      "Android: Google Play track for this upload. Default without --submit-to-store-review: internal. With it and no track set: production. Precedence: CLI > env > saved credentials",
    args: {
      name: "track",
      suggestions: ["internal", "alpha", "beta", "production"],
    },
  },
  {
    name: "--android-release-status",
    description:
      "Android: Google Play release status. Default without --submit-to-store-review: draft. With it and no status set: completed. Precedence: CLI > env > saved credentials",
    args: {
      name: "status",
      suggestions: ["draft", "completed", "inProgress", "halted"],
    },
  },
  inAppUpdatePriorityOption(
    "Android: Google Play in-app update priority for this release (integer 0-5; higher = more urgent). Precedence: CLI > env > saved credentials"
  ),
  {
    name: "--no-playstore-upload",
    description:
      "Android: do not upload the AAB/APK to Google Play for this build (ignores saved Play credentials). Use when the Play app does not exist yet, or you only want a Capgo download link",
    dependsOn: ["--output-upload"],
  },
  // Store
  {
    name: "--submit-to-store-review",
    description:
      "After upload, submit the store release for review instead of leaving it as a draft/inactive build. On Android this defaults to the production track with release_status completed. On iOS this submits the processed TestFlight build to App Store review",
  },
  {
    name: "--store-release-name",
    description:
      "Store release name/version label. Android sends this as the Google Play version_name; iOS uses it as the App Store version when creating or reusing the editable version",
    args: { name: "name" },
  },
  {
    name: "--store-release-notes",
    description:
      "Default store release notes. Android uses this as the Play changelog; iOS uses it as the fallback App Store What's New text",
    args: { name: "notes" },
  },
  {
    name: "--store-release-notes-locale",
    description:
      'Localized store release notes (repeatable), for example --store-release-notes-locale en-US="Bug fixes"',
    isRepeatable: true,
    args: { name: "locale=notes" },
  },
  {
    name: "--ios-testflight-groups",
    description:
      "For iOS: optional comma-separated TestFlight external group names or IDs for external beta distribution",
    args: { name: "groups" },
  },
  {
    name: "--ios-automatic-release",
    description:
      "For iOS: automatically release the App Store version after Apple approval. Default is manual release",
    exclusiveOn: ["--no-ios-automatic-release"],
  },
  {
    name: "--no-ios-automatic-release",
    description:
      "For iOS: keep the App Store version waiting for manual release after Apple approval",
    exclusiveOn: ["--ios-automatic-release"],
  },
  // Output and version
  {
    name: "--output-upload",
    description:
      "Upload the finished IPA/APK/AAB to Capgo storage and print a time-limited download link (and QR), plus a link to the debug symbols. Precedence: CLI > env > saved credentials",
    exclusiveOn: ["--no-output-upload"],
  },
  {
    name: "--no-output-upload",
    description:
      "Do not upload the finished IPA/APK/AAB to Capgo storage (no download link). Store upload still happens when Play/TestFlight credentials are configured",
    exclusiveOn: ["--output-upload"],
  },
  outputRetentionOption(
    "Override output link TTL for this build only (1h to 7d). Examples: 1h, 6h, 2d. Precedence: CLI > env > saved credentials"
  ),
  {
    name: "--symbols-upload",
    description:
      "Keep the debug symbols (iOS dSYMs zip, Android mapping.txt) in Capgo storage and print a time-limited download link for crash reporters. Link TTL follows --output-retention",
    exclusiveOn: ["--no-symbols-upload"],
  },
  {
    name: "--no-symbols-upload",
    description:
      "Do not keep debug symbols unless output upload is enabled. --output-upload still includes debug symbols",
    exclusiveOn: ["--symbols-upload"],
  },
  {
    name: "--build-env",
    description:
      "Pass an env var to the cloud build (repeatable). KEY alone takes the value from your environment, so CI secrets stay off the command line. Also read from CAPGO_BUILD_ENV (comma-separated names)",
    isRepeatable: true,
    args: { name: "KEY|KEY=VALUE" },
  },
  {
    name: "--output-record",
    description:
      "After a successful build, write a JSON record (jobId, status, outputUrl, symbolsUrl, qrCodeAscii, qrCodePngPath, finishedAt) to the path. Read fields back with 'build last-output'",
    args: { name: "path", template: "filepaths" },
  },
  ...toggle(
    "skip-build-number-bump",
    "Skip automatic build number/version code incrementing. Uses whatever version is already in the project files",
    "Override saved credentials to re-enable automatic build number incrementing for this build only"
  ),
  ...toggle(
    "skip-marketing-version-bump",
    "Skip automatic marketing version (CFBundleShortVersionString / versionName) bump when the app is already released",
    "Override saved credentials to re-enable automatic marketing version bump for this build only"
  ),
  syncIosVersionOption,
  syncAndroidVersionOption,
  // Prescan and diagnostics
  {
    name: "--ai-analytics",
    description:
      "On build failure, send logs to Capgo AI for diagnosis. In interactive terminals this skips the upfront confirmation; in CI this auto-uploads and prints the analysis to stderr",
  },
  { name: "--no-prescan", description: "Skip the automatic pre-build scan" },
  {
    name: "--prescan-ignore-fatal",
    description:
      "Run the pre-build scan but never block the build (report only)",
  },
  {
    name: "--prescan-skip",
    description:
      "Skip specific prescan check(s) by id (repeatable or comma-separated). Other checks still run",
    isRepeatable: true,
    args: { name: "checkId" },
  },
  {
    name: "--prescan-warn",
    description:
      "Downgrade specific prescan check(s) to warning by id (repeatable or comma-separated). Check still runs",
    isRepeatable: true,
    args: { name: "checkId" },
  },
  {
    name: "--fail-on-warnings",
    description: "Treat prescan warnings as fatal",
  },
  {
    name: "--send-logs-to-support",
    description:
      "On a CI/CD build failure, automatically upload the build logs to Capgo support (no email required). Additive to --ai-analytics",
  },
  {
    name: "--send-logs",
    description: "Deprecated alias for --send-logs-to-support",
    deprecated: true,
    hidden: true,
  },
  verboseOption,
  ...cloudOptions,
];

const buildCommand: Fig.Subcommand = {
  name: "build",
  description:
    "Build native iOS and Android apps with Capgo Cloud, including guided signing setup and optional store submission",
  subcommands: [
    {
      name: "needed",
      description: "Check whether a native build is required",
      args: optionalAppId,
      options: [
        apikeyOption,
        {
          name: ["-c", "--channel"],
          description:
            "Channel to compare against. Defaults to CapacitorUpdater.defaultChannel or the public default channel",
          args: { name: "channel" },
        },
        packageJsonOption,
        nodeModulesOption,
        verboseOption,
        apiHostOption,
        filesHostOption,
      ],
    },
    {
      name: ["init", "onboarding"],
      description: "Set up build credentials interactively",
      options: [
        apikeyOption,
        {
          name: ["-p", "--platform"],
          description:
            "Platform to onboard (ios or android). If omitted, uses the saved platform for Builder-only checklists, then auto-detects a single native folder or prompts",
          args: { name: "platform", suggestions: platforms },
        },
        apiHostOption,
        filesHostOption,
        {
          name: "--no-analytics",
          description:
            "Disable build onboarding analytics and terminal replay for this run",
        },
      ],
    },
    {
      name: "request",
      description: "Request a native build from Capgo Cloud",
      args: optionalAppId,
      options: buildRequestOptions,
    },
    {
      name: "zip",
      description:
        "Zip the native project exactly like 'build request' does, without uploading it",
      args: optionalAppId,
      options: [
        platformOption("Target platform: ios or android (required)"),
        buildPathOption,
        nodeModulesOption,
        syncIosVersionOption,
        syncAndroidVersionOption,
        {
          name: "--output",
          description:
            "Path of the zip file to write (default: <appId>_<platform>_native.zip)",
          args: { name: "file", template: "filepaths" },
        },
        jsonOption(),
      ],
    },
    {
      name: "sync-ios-version",
      description: "Sync the local iOS app version from package.json",
      options: [
        pathOption(
          "Path to the project directory (default: current directory)"
        ),
        {
          name: "--check",
          description:
            "Check only; exit non-zero when MARKETING_VERSION or CFBundleShortVersionString is out of sync",
        },
      ],
    },
    {
      name: "prescan",
      description: "Check for build problems before uploading anything",
      args: optionalAppId,
      options: [
        platformOption("Target platform: ios or android (required)"),
        pathOption(
          "Path to the project directory (default: current directory)"
        ),
        apikeyOption,
        {
          name: "--android-flavor",
          description: "Android: product flavor the build will use",
          args: { name: "flavor" },
        },
        {
          name: "--ios-dist",
          description: "For iOS: distribution mode to validate against",
          args: { name: "mode", suggestions: iosDistributionModes },
        },
        {
          name: "--json",
          description: "Output a machine-readable JSON report",
        },
        {
          name: "--fail-on-warnings",
          description: "Exit non-zero when warnings are found (CI)",
        },
        {
          name: "--ignore-fatal",
          description: "Diagnostic mode: report everything but always exit 0",
        },
        {
          name: "--skip",
          description:
            "Skip specific check(s) by id (repeatable or comma-separated). Alias of --prescan-skip on build request",
          isRepeatable: true,
          args: { name: "checkId" },
        },
        {
          name: "--warn",
          description:
            "Downgrade specific check(s) to warning by id (repeatable or comma-separated). Alias of --prescan-warn on build request",
          isRepeatable: true,
          args: { name: "checkId" },
        },
        verboseOption,
        apiHostOption,
        filesHostOption,
      ],
    },
    {
      name: "last-output",
      description:
        "Read the build output record written by a previous 'build request --output-record'",
      options: [
        {
          name: "--path",
          description:
            "Path to the JSON record written by --output-record (required)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--field",
          description: "Print a single field",
          args: {
            name: "field",
            suggestions: [
              "jobId",
              "appId",
              "platform",
              "buildMode",
              "status",
              "outputUrl",
              "symbolsUrl",
              "qrCodeAscii",
              "qrCodePngPath",
              "finishedAt",
              "schemaVersion",
            ],
          },
        },
        {
          name: "--qr",
          description:
            "Print the rendered ASCII QR code (shortcut for --field qrCodeAscii)",
        },
      ],
    },
    buildCredentialsCommand,
  ],
};

// --- notifications / probe -------------------------------------------------

const notificationsCommand: Fig.Subcommand = {
  name: "notifications",
  description: "Set up Capgo native notifications in your Capacitor app",
  subcommands: [
    {
      name: "setup",
      description:
        "Install the Capgo notifications plugin, add Capacitor config, create a helper file, and run Capacitor sync",
      args: optionalAppId,
      options: [
        {
          name: "--server-url",
          description: "Capgo API server URL",
          args: { name: "serverUrl" },
        },
        {
          name: "--file",
          description:
            "Helper file to create (default: src/capgo-notifications.ts)",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--force",
          description: "Overwrite the helper file if it already exists",
        },
        {
          name: "--no-install",
          description: "Skip installing the notifications package",
        },
        { name: "--no-sync", description: "Skip Capacitor sync" },
      ],
    },
  ],
};

const probeCommand: Fig.Subcommand = {
  name: "probe",
  description:
    "Probe the Capgo updates endpoint to check if an update is available for your app",
  options: [platformOption("Platform to probe: ios or android")],
};

// --- observe --------------------------------------------------------------

const observeViews = [
  "logs",
  "errors",
  "release",
  "summary",
  "metrics",
  "events",
  "device",
  "versions",
  "routes",
] as const;

type ObserveView = (typeof observeViews)[number];

const observeDescriptions: Record<ObserveView, string> = {
  logs: "Native and updater event logs with metadata and documented explanations",
  errors:
    "Native and updater error trends with metadata and documented explanations",
  release: "Live release adoption, success, failures and rollout stats",
  summary: "Actionable Observe findings for an app",
  metrics: "Sample Observe timings, slowest first by default",
  events: "Observe action counts and latest devices",
  device: "Device timeline (session substitute) for one device_id",
  versions: "Observe breakdown by bundle version",
  routes: "Per-screen Observe timings from metadata.route or action=app_nav",
};

/** Mirrors addObserveQueryOptions() in cli/src/index.ts: which flags each view accepts */
const observeOptions = (view: ObserveView): Fig.Option[] => {
  const options: Fig.Option[] = [apikeyOption];
  if (view !== "release")
    options.push({
      name: "--days",
      description: "Lookback window in days: 1, 3, 7, or 30 (default: 7)",
      args: { name: "days", suggestions: ["1", "3", "7", "30"] },
    });
  if (!["release", "summary", "versions"].includes(view)) {
    const example =
      view === "metrics"
        ? "app_launch_ready or app_nav"
        : view === "routes"
          ? "app_nav"
          : "update_fail or app_crash_native";
    options.push({
      name: "--action",
      description: `Filter by stats action, for example ${example}; overrides the default action filter`,
      args: { name: "action" },
    });
  }
  if (["logs", "errors", "metrics", "routes"].includes(view))
    options.push({
      name: "--sort",
      description: "Sort samples: slowest, fastest, newest, or oldest",
      args: {
        name: "sort",
        suggestions: ["slowest", "fastest", "newest", "oldest"],
      },
    });
  if (["logs", "errors", "metrics", "routes", "device"].includes(view))
    options.push({
      name: "--limit",
      description: "Max rows to return",
      args: { name: "limit" },
    });
  if (view !== "summary" && view !== "versions")
    options.push({
      name: "--version-name",
      description: "Filter by bundle version name",
      args: { name: "versionName" },
    });
  if (view === "logs" || view === "errors" || view === "device")
    options.push({
      name: "--source",
      description: "Event source (default: all)",
      args: { name: "source", suggestions: ["native", "updater", "all"] },
    });
  if (view === "release")
    options.push({
      name: "--channel-id",
      description: "Channel ID (default app default channel)",
      args: { name: "channelId" },
    });
  if (view === "device")
    options.push({
      name: ["-d", "--device"],
      description: "Device ID",
      args: { name: "device" },
    });
  options.push(
    { name: "--json", description: "Output as JSON" },
    apiHostOption,
    filesHostOption
  );
  return options;
};

const observeCommand: Fig.Subcommand = {
  name: "observe",
  description:
    "Query Capgo Observe metrics so you can act on launch, crash, WebView, and navigation data",
  subcommands: observeViews.map((view): Fig.Subcommand => ({
    name: view,
    description: observeDescriptions[view],
    args:
      view === "device"
        ? [{ name: "deviceId", isOptional: true }, optionalAppId]
        : optionalAppId,
    options: observeOptions(view),
  })),
};

// --- simulator ------------------------------------------------------------

const jsonSessionOption: Fig.Option = {
  name: "--json",
  description: "Print the session JSON",
};

const sessionIdArg: Fig.Arg = { name: "sessionId", isOptional: true };

const simulatorCommand: Fig.Subcommand = {
  name: "simulator",
  description:
    "Start a cloud simulator. A running simulator uses one builder slot and counts as build time. It stops by itself after 5 minutes without input",
  subcommands: [
    {
      name: "start",
      description:
        "Start an iOS or Android simulator and print its session URL",
      args: optionalAppId,
      options: [
        {
          name: ["-p", "--platform"],
          description: "Simulator platform (default: ios)",
          args: { name: "platform", suggestions: platforms },
        },
        {
          name: ["-n", "--name"],
          description: "Session name",
          args: { name: "name" },
        },
        {
          name: "--build-job",
          description: "Saved iOS build job to install into the simulator",
          args: { name: "buildJobId" },
        },
        jsonSessionOption,
        apikeyOption,
        apiHostOption,
      ],
    },
    {
      name: "get",
      description: "Read one simulator session",
      args: [sessionIdArg, optionalAppId],
      options: [jsonSessionOption, apikeyOption, apiHostOption],
    },
    {
      name: "command",
      description: "Send one agent-device command to a running simulator",
      args: [
        {
          name: "deviceCommand",
          suggestions: [
            "devices",
            "screenshot",
            "snapshot",
            "home",
            "lock",
            "tap",
            "open",
          ],
        },
        sessionIdArg,
        optionalAppId,
      ],
      options: [
        {
          name: "--x",
          description:
            "Tap x. 0 to 1 is a fraction of the screen. Above 1 is a point",
          args: { name: "x" },
        },
        {
          name: "--y",
          description:
            "Tap y. 0 to 1 is a fraction of the screen. Above 1 is a point",
          args: { name: "y" },
        },
        {
          name: "--bundle-id",
          description: "Bundle id for open",
          args: { name: "bundleId" },
        },
        { name: "--json", description: "Print the command JSON" },
        apikeyOption,
        apiHostOption,
      ],
    },
    {
      name: "stop",
      description: "Stop a simulator session and record its build minutes",
      args: [sessionIdArg, optionalAppId],
      options: [jsonSessionOption, apikeyOption, apiHostOption],
    },
  ],
};

// --- root -----------------------------------------------------------------

const completionSpec: Fig.Spec = {
  name: "cli",
  description: "Manage packages and bundle versions in Capgo Cloud",
  subcommands: [
    initCommand,
    runCommand,
    ...starCommands,
    doctorCommand,
    loginCommand,
    getQrCommand,
    bundleCommand,
    appCommand,
    channelCommand,
    keyCommand,
    accountCommand,
    organizationCommand,
    organisationCommand,
    buildCommand,
    notificationsCommand,
    probeCommand,
    observeCommand,
    {
      name: "generate-docs",
      description:
        "Generate Markdown documentation for CLI commands, either for README or individual files",
      args: { name: "filePath", isOptional: true, template: "filepaths" },
      options: [
        {
          name: "--folder",
          description:
            "Generate individual markdown files for each command in the specified folder (instead of updating README)",
          args: { name: "folderPath", template: "folders" },
        },
      ],
    },
    {
      name: "mcp",
      description:
        "Start the Capgo MCP (Model Context Protocol) server for AI agent integration",
    },
    simulatorCommand,
    {
      name: "help",
      description: "Display help for command",
      args: { name: "command", isOptional: true },
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "Output the current version",
    },
    {
      name: "--capacitor-config",
      description:
        "Capacitor config source to update (useful with dynamic monorepo configs)",
      isPersistent: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
