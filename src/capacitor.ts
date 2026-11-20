// Capacitor CLI v8.6.2 (npm @capacitor/cli dist-tag latest, 2026-11-20). Source: statically read the
// published @capacitor/cli@8.6.2 package (dist/index.js commander definitions, telemetry.js choices, tasks/*.js)
// and the capacitor-docs CLI command pages; the CLI itself was not executed. `cap` (src/cap.ts) is the same CLI's bin alias.
// Hidden upstream commands config/telemetry are marked hidden; create, serve and plugin:generate are internal stubs and omitted.
const platforms: Fig.Suggestion[] = [
  { name: "android", icon: "fig://icon?type=android" },
  { name: "ios", icon: "fig://icon?type=apple" },
];

function isPlatform(value: string): value is "ios" | "android" {
  return value === "ios" || value === "android";
}

const targetGenerator: Fig.Generator = {
  cache: {
    ttl: 1000 * 60, // Only caches targets for one minute, in case a new device is connected
  },
  custom: async (tokens, executeShellCommand) => {
    const [cliName, command, platform] = tokens;
    if (!isPlatform(platform)) {
      return [];
    }

    const { stdout } = await executeShellCommand({
      command: "npx",
      args: ["capacitor", "run", platform, "--list"],
    });

    return stdout
      .trim()
      .split("\n")
      .slice(2) // Ignore output header lines
      .map((s) => {
        const [name, api, targetId] = s.replace(/\s\s+/g, "|").split("|");
        return {
          name: targetId,
          displayName: `${name} ${api}`,
          icon: "📱",
        };
      });
  },
};

const optionalPlatformArg: Fig.Arg = {
  name: "platform",
  suggestions: platforms,
  isOptional: true,
};

const deploymentOption: Fig.Option = {
  name: "--deployment",
  description:
    "Podfile.lock won't be deleted and pod install will use --deployment option",
};

const inlineOption: Fig.Option = {
  name: "--inline",
  description:
    "After syncing, all JS source maps will be inlined allowing for debugging an Android Web View in Chromium based browsers",
};

const schemeOption = (description: string): Fig.Option => ({
  name: "--scheme",
  description,
  args: { name: "scheme" },
});

const flavorOption = (description: string): Fig.Option => ({
  name: "--flavor",
  description,
  args: { name: "flavor" },
});

const configurationOption: Fig.Option = {
  name: "--configuration",
  description: "Configuration name of the iOS Scheme",
  args: { name: "name" },
};

const completionSpec: Fig.Spec = {
  name: "capacitor",
  description:
    "The Capacitor command-line interface (CLI) tool is used to develop Capacitor apps",
  icon: "https://capacitorjs.com/docs/img/meta/favicon.png",
  subcommands: [
    {
      name: "add",
      description: "Add a native platform project to your app",
      args: optionalPlatformArg,
      options: [
        {
          name: "--packagemanager",
          description:
            "The package manager to use for iOS dependency installs (CocoaPods or SPM)",
          args: {
            name: "packageManager",
            suggestions: ["SPM", "CocoaPods"],
          },
        },
      ],
    },
    {
      name: "build",
      description:
        "Build the native project to create a signed AAB, APK or IPA file",
      priority: 51,
      args: {
        name: "platform",
        suggestions: platforms,
      },
      options: [
        schemeOption("iOS Scheme to build"),
        flavorOption("Android Flavor to build"),
        {
          name: "--keystorepath",
          description: "Path to the keystore",
          args: { name: "keystorePath", template: "filepaths" },
        },
        {
          name: "--keystorepass",
          description: "Password to the keystore",
          args: { name: "keystorePass" },
        },
        {
          name: "--keystorealias",
          description: "Key Alias in the keystore",
          args: { name: "keystoreAlias" },
        },
        configurationOption,
        {
          name: "--keystorealiaspass",
          description: "Password for the Key Alias",
          args: { name: "keystoreAliasPass" },
        },
        {
          name: "--androidreleasetype",
          description: "Android release type",
          args: {
            name: "androidreleasetype",
            suggestions: ["AAB", "APK"],
          },
        },
        {
          name: "--signing-type",
          description: "Program used to sign apps (default: jarsigner)",
          args: {
            name: "signingtype",
            suggestions: ["apksigner", "jarsigner"],
          },
        },
        {
          name: "--xcode-team-id",
          description:
            "The Developer team to use for building and exporting the archive",
          args: { name: "xcodeTeamID" },
        },
        {
          name: "--xcode-export-method",
          description:
            "Describes how xcodebuild should export the archive (default: app-store-connect)",
          args: {
            name: "xcodeExportMethod",
            suggestions: [
              "app-store-connect",
              "release-testing",
              "enterprise",
              "debugging",
              "developer-id",
              "mac-application",
              "validation",
            ],
          },
        },
        {
          name: "--xcode-signing-style",
          description:
            "The iOS signing style to use when building the app for distribution (default: automatic)",
          args: {
            name: "xcodeSigningStyle",
            suggestions: ["automatic", "manual"],
          },
        },
        {
          name: "--xcode-signing-certificate",
          description:
            "A certificate name, SHA-1 hash, or automatic selector to use for signing for iOS builds",
          args: { name: "xcodeSigningCertificate" },
        },
        {
          name: "--xcode-provisioning-profile",
          description: "A provisioning profile name or UUID for iOS builds",
          args: { name: "xcodeProvisioningProfile" },
        },
      ],
    },
    {
      name: "copy",
      description:
        "Copy the web app build and Capacitor configuration file into the native platform project. Run this each time you make changes to your web app or change a configuration value",
      priority: 51,
      args: optionalPlatformArg,
      options: [inlineOption],
    },
    {
      name: "doctor",
      description: "Check the current setup for common errors",
      args: optionalPlatformArg,
    },
    {
      name: "init",
      description: "Initialize Capacitor configuration",
      args: [
        {
          name: "appName",
          description: "The application's name",
          isOptional: true,
        },
        {
          name: "appId",
          description:
            "The application's App ID, something like com.example.appname",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--web-dir",
          description: "Directory of your project's built web assets",
          args: { name: "value", template: "folders" },
        },
        {
          name: "--skip-appid-validation",
          description:
            "Skip validating the app ID for iOS and Android compatibility",
        },
      ],
    },
    {
      name: "ls",
      description: "List all installed Cordova and Capacitor plugins",
      args: optionalPlatformArg,
    },
    {
      name: "migrate",
      description:
        "Migrate your current Capacitor app to the latest major version of Capacitor",
      options: [
        {
          name: "--noprompt",
          description: "Do not prompt for confirmation",
        },
        {
          name: "--packagemanager",
          description: "The package manager to use for dependency installs",
          args: {
            name: "packageManager",
            suggestions: ["npm", "pnpm", "yarn", "bun"],
          },
        },
      ],
    },
    {
      name: "open",
      description:
        "Opens the native project workspace in the specified native IDE (Xcode for iOS, Android Studio for Android)",
      priority: 51,
      args: optionalPlatformArg,
    },
    {
      name: "run",
      description: "Run sync, then build and deploy the native app",
      priority: 51,
      args: optionalPlatformArg,
      options: [
        schemeOption("Set the scheme of the iOS project"),
        flavorOption(
          "Set the flavor of the Android project (flavor dimensions not yet supported)"
        ),
        {
          name: "--list",
          description:
            "Print a list of target devices available to the given platform",
          icon: "📱",
        },
        {
          name: "--target",
          description: "Run on a specific target device",
          icon: "📱",
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
        {
          name: "--target-name",
          description: "Run on a specific target device by its name",
          icon: "📱",
          args: { name: "name" },
        },
        {
          name: "--target-name-sdk-version",
          description:
            "Use a specific SDK version when using --target-name, e.g. 26.0 (iOS 26) or 35 (Android API 35)",
          args: { name: "version" },
        },
        {
          name: "--no-sync",
          description: "Do not run sync",
        },
        {
          name: "--forwardPorts",
          description:
            'Automatically run "adb reverse" for better live-reloading support',
          args: { name: "port:port" },
        },
        {
          name: ["-l", "--live-reload"],
          description:
            "Set live-reload URL via CLI (uses defaults, overrides server.url config)",
        },
        {
          name: "--host",
          description:
            "Configure host for live-reload URL (used with --live-reload)",
          args: { name: "host" },
        },
        {
          name: "--port",
          description:
            "Configure port for live-reload URL (used with --live-reload)",
          args: { name: "port" },
        },
        configurationOption,
        {
          name: "--https",
          description:
            "Use https:// instead of http:// for live-reload URL (used with --live-reload)",
        },
      ],
    },
    {
      name: "spm-migration-assistant",
      description:
        "Remove CocoaPods from the project and switch to Swift Package Manager",
    },
    {
      name: "sync",
      description: "This command runs copy and then update",
      args: optionalPlatformArg,
      options: [deploymentOption, inlineOption],
    },
    {
      name: "update",
      description:
        "Updates the native plugins and dependencies referenced in package.json",
      args: optionalPlatformArg,
      options: [deploymentOption],
    },
    {
      name: "config",
      description: "Print evaluated Capacitor config",
      hidden: true,
      options: [
        {
          name: "--json",
          description: "Print in JSON format",
        },
      ],
    },
    {
      name: "telemetry",
      description: "Enable or disable telemetry",
      hidden: true,
      args: {
        name: "on|off",
        isOptional: true,
        suggestions: ["on", "off"],
      },
    },
    {
      name: "help",
      description: "Display help for a command",
      args: {
        name: "command",
        isOptional: true,
        suggestions: [
          "add",
          "build",
          "copy",
          "doctor",
          "init",
          "ls",
          "migrate",
          "open",
          "run",
          "spm-migration-assistant",
          "sync",
          "update",
        ],
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description:
        "Output usage information. Can be used with individual commands too",
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      description: "Output the version number",
    },
  ],
};
export default completionSpec;
