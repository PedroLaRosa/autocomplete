// EAS CLI v27.11.0 (npm "latest" of eas-cli, 2026-11-19). Source: the oclif.manifest.json
// shipped in the eas-cli@27.11.0 npm tarball (all 161 commands with aliases, flags, args, enum
// options, hidden/deprecated state), read statically; the binary was not run. `autocomplete`
// and `help` come from the manifests of the bundled @oclif/plugin-autocomplete 3.2.40 and
// @expo/plugin-help 5.1.23. This file was generated from the manifest (hidden commands and
// flags are kept with `hidden: true`; the camelCase flag spellings are oclif aliases).

const generateRange = (start: number, end: number): Array<string> => {
  return Array.from(
    { length: end - start + 1 },
    (element, index) => `${index + start}`
  );
};

const nonInteractiveOpt: Fig.Option = {
  name: "--non-interactive",
  description: "Run the command in non-interactive mode",
};

const jsonOpt: Fig.Option = {
  name: "--json",
  description:
    "Enable JSON output, non-JSON messages will be printed to stderr. Implies --non-interactive",
};

const jsonOpt2: Fig.Option = {
  name: "--json",
  description:
    "Enable JSON output, non-JSON messages will be printed to stderr",
};

const offsetOpt: Fig.Option = {
  name: "--offset",
  description:
    "Start queries from specified index. Use for paginating results. Defaults to 0",
  args: {
    name: "Offset",
    default: "0",
  },
};

const projectIdOpt: Fig.Option = {
  name: "--project-id",
  description:
    "EAS project ID (defaults to the project ID of the current directory)",
  args: {
    name: "Project ID",
  },
};

const daysOpt: Fig.Option = {
  name: "--days",
  description:
    "Show results from the last N days (mutually exclusive with --start/--end)",
  exclusiveOn: ["--start", "--end"],
  args: {
    name: "Days",
  },
};

const endOpt: Fig.Option = {
  name: "--end",
  description: "End of time range (ISO date)",
  exclusiveOn: ["--days"],
  args: {
    name: "End",
  },
};

const environmentOpt: Fig.Option = {
  name: "--environment",
  description: "Filter by environment (e.g. production, development)",
  args: {
    name: "Environment",
  },
};

const startOpt: Fig.Option = {
  name: "--start",
  description: "Start of time range (ISO date)",
  exclusiveOn: ["--days"],
  args: {
    name: "Start",
  },
};

const afterOpt: Fig.Option = {
  name: "--after",
  description:
    "Cursor for pagination. Use the endCursor from a previous query to fetch the next page",
  args: {
    name: "After",
  },
};

const buildProfileOpt: Fig.Option = {
  name: ["-e", "--profile"],
  description:
    'Name of the build profile from eas.json. Defaults to "production" if defined in eas.json',
  args: {
    name: "Profile Name",
  },
};

const platformOpt: Fig.Option = {
  name: ["-p", "--platform"],
  args: {
    name: "Platform",
    suggestions: ["android", "ios", "all"],
  },
};

const nativePlatformOpt: Fig.Option = {
  name: ["-p", "--platform"],
  args: {
    name: "Platform",
    suggestions: ["android", "ios"],
  },
};

const applePlatformOpt: Fig.Option = {
  name: "--platform",
  description:
    'Filter by platform ("apple" covers iOS, iPadOS, tvOS, and macOS)',
  args: {
    name: "Platform",
    suggestions: ["android", "ios", "ipados", "macos", "tvos", "apple"],
  },
};

const limit50Opt: Fig.Option = {
  name: "--limit",
  description:
    "The number of items to fetch each query. Defaults to 50 and is capped at 100",
  args: {
    name: "Limit",
    suggestions: generateRange(50, 100),
    default: "50",
  },
};

const privateKeyPathOpt: Fig.Option = {
  name: "--private-key-path",
  description:
    "File containing the PEM-encoded private key corresponding to the certificate in expo-updates' configuration. Defaults to a file named \"private-key.pem\" in the certificate's directory. Only relevant if you are using code signing: https://docs.expo.dev/eas-update/code-signing/",
  args: {
    name: "Private Key Path",
    template: "filepaths",
  },
};

const scopeOpt: Fig.Option = {
  name: "--scope",
  description: "Scope for the variable",
  args: {
    name: "Scope",
    suggestions: ["project", "account"],
    default: "project",
  },
};

const idOpt: Fig.Option = {
  name: "--id",
  description: "Simulator session ID. Defaults to .env.eas-simulator",
  args: {
    name: "ID",
  },
};

const environmentOpt2: Fig.Option = {
  name: "--environment",
  description:
    "Environment variable's environment, e.g. 'production', 'preview', 'development'",
  isRepeatable: true,
  args: {
    name: "Environment",
  },
};

const appVersionOpt: Fig.Option = {
  name: "--app-version",
  description: "Filter by app version",
  args: {
    name: "App Version",
  },
};

const buildNumberOpt: Fig.Option = {
  name: "--build-number",
  description: "Filter by app build number",
  args: {
    name: "Build Number",
  },
};

const limit10Opt: Fig.Option = {
  name: "--limit",
  description:
    "The number of items to fetch each query. Defaults to 10 and is capped at 100",
  args: {
    name: "Limit",
    suggestions: generateRange(10, 100),
    default: "10",
  },
};

const updateIdOpt: Fig.Option = {
  name: "--update-id",
  description: "Filter by EAS update ID",
  args: {
    name: "Update ID",
  },
};

const noWaitOpt: Fig.Option = {
  name: "--no-wait",
  description: "Disable --wait",
};

const daysOpt2: Fig.Option = {
  name: "--days",
  description:
    "Show insights from the last N days (default 7, mutually exclusive with --start/--end)",
  exclusiveOn: ["--start", "--end"],
  args: {
    name: "Days",
  },
};

const endOpt2: Fig.Option = {
  name: "--end",
  description: "End of insights time range (ISO date)",
  exclusiveOn: ["--days"],
  args: {
    name: "End",
  },
};

const startOpt2: Fig.Option = {
  name: "--start",
  description: "Start of insights time range (ISO date)",
  exclusiveOn: ["--days"],
  args: {
    name: "Start",
  },
};

const yesOpt: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Skip confirmation prompt",
};

const platformDefaultAllOpt: Fig.Option = {
  name: ["-p", "--platform"],
  args: {
    name: "Platform",
    suggestions: ["android", "ios", "all"],
    default: "all",
  },
};

const limit25Opt: Fig.Option = {
  name: "--limit",
  description:
    "The number of items to fetch each query. Defaults to 25 and is capped at 50",
  args: {
    name: "Limit",
    suggestions: generateRange(25, 50),
    default: "25",
  },
};

const buildIdArg: Fig.Arg = {
  name: "Build ID",
  isOptional: true,
};

const branchOpt: Fig.Option = {
  name: "--branch",
  description: "Name of the branch to point to",
  args: {
    name: "Branch",
  },
};

const typeOpt: Fig.Option = {
  name: "--type",
  description: "The type of variable",
  args: {
    name: "Type",
    suggestions: ["string", "file"],
  },
};

const visibilityOpt: Fig.Option = {
  name: "--visibility",
  description: "Visibility of the variable",
  args: {
    name: "Visibility",
    suggestions: ["plaintext", "sensitive", "secret"],
  },
};

const submitProfileOpt: Fig.Option = {
  name: ["-e", "--profile"],
  description:
    'Name of the submit profile from eas.json. Defaults to "production" if defined in eas.json',
  args: {
    name: "Profile",
  },
};

const submissionIdArg: Fig.Arg = {
  name: "Submission ID",
  isOptional: true,
};

const eventOpt: Fig.Option = {
  name: "--event",
  description: "Event type that triggers the webhook",
  args: {
    name: "Event",
    suggestions: ["BUILD", "SUBMIT"],
  },
};

const completionSpec: Fig.Spec = {
  name: "eas",
  description:
    "EAS CLI is the command-line app that you will use to interact with EAS services from your terminal",
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for the CLI or a command",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show the CLI version",
    },
  ],
  subcommands: [
    {
      name: "account:audit",
      description: "View the audit logs for an account",
      args: {
        name: "Account Name",
        description:
          "Account name to view audit logs for. If not provided, the account will be selected interactively (or defaults to the only account if there is just one)",
        isOptional: true,
      },
      options: [afterOpt, jsonOpt2, limit50Opt, nonInteractiveOpt],
    },
    {
      name: ["account:login", "login"],
      description: "Log in with your Expo account",
      options: [
        {
          name: ["-b", "--browser"],
          description:
            "Log in with your browser (default; use --no-browser for CLI-based login)",
        },
        {
          name: ["-s", "--sso"],
          description: "Log in with SSO",
        },
        {
          name: "--device",
          description: "Log in using a code in a browser on any device",
          exclusiveOn: ["--sso"],
        },
        {
          name: "--match",
          description: "Submit the number the user sees in their browser",
          dependsOn: ["--device", "--resume"],
          args: {
            name: "Match",
          },
        },
        {
          name: "--no-browser",
          description: "Disable --browser",
        },
        nonInteractiveOpt,
        {
          name: "--resume",
          description:
            "Resume a saved device login using its request ID (one command at a time)",
          dependsOn: ["--device"],
          args: {
            name: "Resume",
          },
        },
      ],
    },
    {
      name: ["account:logout", "logout"],
      description: "Log out",
    },
    {
      name: "account:usage",
      description: "View account usage and billing for the current cycle",
      args: {
        name: "Account Name",
        description:
          "Account name to view usage for. If not provided, the account will be selected interactively (or defaults to the only account if there is just one)",
        isOptional: true,
      },
      options: [jsonOpt2, nonInteractiveOpt],
    },
    {
      name: ["account:view", "whoami"],
      description: "Show the username you are logged in as",
    },
    {
      name: "analytics",
      description:
        "Display or change analytics settings (disabling analytics also disables experiments)",
      args: {
        name: "Status",
        isOptional: true,
        suggestions: ["on", "off"],
      },
    },
    {
      name: "autocomplete",
      description: "Display autocomplete installation instructions",
      args: {
        name: "Shell",
        description: "Shell type",
        isOptional: true,
        suggestions: ["zsh", "bash"],
      },
      options: [
        {
          name: ["-r", "--refresh-cache"],
          description: "Refresh cache (ignores displaying instructions)",
        },
      ],
    },
    {
      name: "autocomplete:create",
      description: "Create autocomplete setup scripts and completion functions",
      hidden: true,
    },
    {
      name: "autocomplete:script",
      description: "Output autocomplete config script for shells",
      hidden: true,
      args: {
        name: "Shell",
        description: "Shell type",
        isOptional: true,
        suggestions: ["zsh", "bash"],
      },
    },
    {
      name: "billing:manage",
      description: "Manage billing for an account with an active paid EAS plan",
      options: [
        {
          name: ["-a", "--account"],
          description:
            "Account with an active paid plan to manage. Defaults to your account when only one is eligible",
          args: {
            name: "Account",
          },
        },
        jsonOpt,
        {
          name: "--no-open",
          description:
            "Only print the customer portal URL instead of opening it in a browser",
        },
        nonInteractiveOpt,
      ],
    },
    {
      name: "billing:subscribe",
      description: "Subscribe a Free account to an EAS plan",
      args: {
        name: "Plan",
        description: "Plan to subscribe to. Required in non-interactive mode",
        isOptional: true,
        suggestions: ["starter", "production"],
      },
      options: [
        {
          name: ["-a", "--account"],
          description:
            "Account to subscribe. Defaults to your account when you only have one",
          args: {
            name: "Account",
          },
        },
        jsonOpt,
        {
          name: "--no-open",
          description:
            "Only print the checkout page URL instead of opening it in a browser",
        },
        nonInteractiveOpt,
      ],
    },
    {
      name: "branch:create",
      description: "Create a branch",
      args: {
        name: "Name",
        description: "Name of the branch to create",
        isOptional: true,
      },
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: "branch:delete",
      description: "Delete a branch",
      args: {
        name: "Name",
        description: "Name of the branch to delete",
        isOptional: true,
      },
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: "branch:list",
      description: "List all branches",
      options: [jsonOpt, limit50Opt, nonInteractiveOpt, offsetOpt],
    },
    {
      name: "branch:publish",
      description: 'Deprecated, use "eas update"',
      hidden: true,
      deprecated: true,
    },
    {
      name: "branch:rename",
      description: "Rename a branch",
      options: [
        {
          name: "--from",
          description: "Current name of the branch",
          args: {
            name: "From",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
        {
          name: "--to",
          description: "New name of the branch",
          args: {
            name: "To",
          },
        },
      ],
    },
    {
      name: "branch:view",
      description: "View a branch",
      args: {
        name: "Name",
        description: "Name of the branch to view",
        isOptional: true,
      },
      options: [jsonOpt, limit25Opt, nonInteractiveOpt, offsetOpt],
    },
    {
      name: "browse",
      description:
        "Transition from the terminal to the web browser to view and interact with your project on https://expo.dev",
      args: {
        name: "Page",
        description:
          "Project subpage to open. Defaults to the project dashboard",
        isOptional: true,
        suggestions: [
          "build",
          "builds",
          "submit",
          "submissions",
          "update",
          "updates",
          "workflow",
          "workflows",
          "cicd",
          "hosting",
          "deployments",
          "credentials",
          "env",
          "insights",
          "observe",
          "settings",
        ],
      },
      options: [
        {
          name: ["-n", "--no-browser"],
          description: "Print the URL instead of opening it in a web browser",
        },
        jsonOpt,
        nonInteractiveOpt,
      ],
    },
    {
      name: "build",
      description: "Start a build",
      options: [
        buildProfileOpt,
        {
          name: ["-m", "--message"],
          description: "A short message describing the build",
          args: {
            name: "Message",
          },
        },
        platformOpt,
        {
          name: ["-s", "--auto-submit", "--submit"],
          description:
            "Submit on build complete using the submit profile with the same name as the build profile",
          exclusiveOn: ["--auto-submit-with-profile"],
        },
        {
          name: "--auto-submit-with-profile",
          description:
            "Submit on build complete using the submit profile with provided name",
          exclusiveOn: ["--auto-submit"],
          args: {
            name: "Profile Name",
          },
        },
        {
          name: "--build-logger-level",
          description:
            'The level of logs to output during the build process. Defaults to "info"',
          args: {
            name: "Build Logger Level",
            suggestions: ["trace", "debug", "info", "warn", "error", "fatal"],
          },
        },
        {
          name: "--clear-cache",
          description: "Clear cache before the build",
        },
        {
          name: "--freeze-credentials",
          description:
            "Prevent the build from updating credentials in non-interactive mode",
        },
        jsonOpt,
        {
          name: "--local",
          description: "Run build locally [experimental]",
        },
        {
          name: "--no-wait",
          description: "Don't wait for build(s) to complete",
        },
        nonInteractiveOpt,
        {
          name: "--output",
          description: "Output path for local build",
          args: {
            name: "Output",
            template: "filepaths",
          },
        },
        {
          name: "--refresh-ad-hoc-provisioning-profile",
          description:
            "Refresh managed ad-hoc provisioning profiles from App Store Connect before gathering build credentials",
        },
        {
          name: "--resource-class",
          description:
            "The instance type that will be used to run this build [experimental]",
          hidden: true,
          deprecated: true,
          args: {
            name: "Resource Class",
            suggestions: [
              "default",
              "large",
              "m1-medium",
              "medium",
              "m-medium",
              "m-large",
            ],
          },
        },
        {
          name: "--skip-credentials-check",
          hidden: true,
        },
        {
          name: "--skip-project-configuration",
          hidden: true,
        },
        {
          name: "--verbose-logs",
          description: "Use verbose logs for the build process",
        },
        {
          name: "--wait",
          description: "Wait for build(s) to complete",
        },
        {
          name: "--what-to-test",
          description:
            'Specify the "What to Test" information for the build in TestFlight (iOS-only). To be used with the `auto-submit` flag',
          args: {
            name: "What To Test",
          },
        },
      ],
    },
    {
      name: "build:cancel",
      description: "Cancel a build",
      args: buildIdArg,
      options: [
        {
          name: ["-e", "--profile"],
          description:
            "Filter builds by build profile if build ID is not provided",
          args: {
            name: "Profile Name",
          },
        },
        {
          name: ["-p", "--platform"],
          description:
            "Filter builds by the platform if build ID is not provided",
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
          },
        },
        nonInteractiveOpt,
      ],
    },
    {
      name: "build:configure",
      description: "Configure the project to support EAS Build",
      options: [
        {
          name: ["-p", "--platform"],
          description: "Platform to configure",
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
          },
        },
      ],
    },
    {
      name: "build:delete",
      description: "Delete a build",
      args: buildIdArg,
      options: [
        {
          name: ["-e", "--profile"],
          description:
            "Filter builds by build profile if build ID is not provided",
          args: {
            name: "Profile Name",
          },
        },
        {
          name: ["-p", "--platform"],
          description:
            "Filter builds by the platform if build ID is not provided",
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
          },
        },
        nonInteractiveOpt,
      ],
    },
    {
      name: "build:dev",
      description:
        "Run dev client simulator/emulator build with matching fingerprint or create a new one",
      options: [
        {
          name: ["-e", "--profile"],
          description:
            'Name of the build profile from eas.json. It must be a profile allowing to create emulator/simulator internal distribution dev client builds. The "development-simulator" build profile will be selected by default',
          args: {
            name: "Profile Name",
          },
        },
        {
          name: ["-p", "--platform"],
          args: {
            name: "Platform",
            suggestions: ["ios", "android"],
          },
        },
        {
          name: "--simulator",
          description:
            "IOS simulator name or UDID to install and run the development build on. If no value is provided, you will be prompted to select a simulator",
          args: {
            name: "Simulator",
          },
        },
        {
          name: "--skip-build-if-not-found",
          description:
            "Skip build if no successful build with matching fingerprint is found",
        },
        {
          name: "--skip-bundler",
          description:
            "Install and run the development build without starting the bundler server",
        },
      ],
    },
    {
      name: "build:download",
      description:
        "Download a simulator/emulator build by build ID or fingerprint hash",
      options: [
        {
          name: ["-p", "--platform"],
          exclusiveOn: ["--build-id"],
          args: {
            name: "Platform",
            suggestions: ["ios", "android"],
          },
        },
        {
          name: "--all-artifacts",
          description:
            "Download all available build artifacts (build artifacts archive, Xcode logs, etc.) in addition to the application archive. Without this flag, only the application archive is downloaded and the command errors if it is missing",
        },
        {
          name: ["--build-id", "--id"],
          description:
            "ID of the build to download. Mutually exclusive with --fingerprint, --platform, and --dev-client; the platform is derived from the build itself",
          exclusiveOn: ["--fingerprint", "--platform", "--dev-client"],
          args: {
            name: "Build ID",
          },
        },
        {
          name: "--dev-client",
          description: "Filter only dev-client builds",
          exclusiveOn: ["--build-id"],
        },
        {
          name: "--fingerprint",
          description: "Fingerprint hash of the build to download",
          exclusiveOn: ["--build-id"],
          args: {
            name: "Fingerprint",
          },
        },
        jsonOpt,
        {
          name: "--no-dev-client",
          description: "Disable --dev-client",
        },
        nonInteractiveOpt,
      ],
    },
    {
      name: "build:inspect",
      description:
        "Inspect the state of the project at specific build stages, useful for troubleshooting",
      options: [
        buildProfileOpt,
        {
          name: ["-o", "--output"],
          description: "Output directory",
          isRequired: true,
          args: {
            name: "Output Directory",
            template: "folders",
          },
        },
        {
          name: ["-p", "--platform"],
          isRequired: true,
          args: {
            name: "Platform",
            suggestions: ["android", "ios"],
          },
        },
        {
          name: ["-s", "--stage"],
          description: "Stage of the build you want to inspect",
          isRequired: true,
          args: {
            name: "Stage",
            suggestions: [
              {
                name: "archive",
                description:
                  "Build the project archive that would be uploaded to EAS",
              },
              {
                name: "pre-build",
                description:
                  "Prepare the project to be built with Gradle/Xcode, without the native build",
              },
              {
                name: "post-build",
                description:
                  "Build the native project and leave the output directory for inspection",
              },
            ],
          },
        },
        {
          name: ["-v", "--verbose"],
        },
        {
          name: "--force",
          description: "Delete OUTPUT_DIRECTORY if it already exists",
        },
      ],
    },
    {
      name: "build:internal",
      hidden: true,
      options: [
        buildProfileOpt,
        {
          name: ["-p", "--platform"],
          isRequired: true,
          args: {
            name: "Platform",
            suggestions: ["android", "ios"],
          },
        },
        {
          name: "--auto-submit",
          description:
            "Submit on build complete using the submit profile with the same name as the build profile",
          exclusiveOn: ["--auto-submit-with-profile"],
        },
        {
          name: "--auto-submit-with-profile",
          description:
            "Submit on build complete using the submit profile with provided name",
          exclusiveOn: ["--auto-submit"],
          args: {
            name: "Profile Name",
          },
        },
        {
          name: "--refresh-ad-hoc-provisioning-profile",
          description:
            "Refresh managed ad-hoc provisioning profiles from App Store Connect before gathering build credentials",
        },
      ],
    },
    {
      name: "build:list",
      description: "List all builds for your project",
      options: [
        {
          name: ["-e", "--build-profile", "--profile", "--buildProfile"],
          description:
            "Filter only builds created with the specified build profile",
          args: {
            name: "Build Profile",
          },
        },
        platformOpt,
        {
          name: ["--app-build-version", "--appBuildVersion"],
          description:
            "Filter only builds created with the specified app build version",
          args: {
            name: "App Build Version",
          },
        },
        {
          name: ["--app-identifier", "--appIdentifier"],
          description:
            "Filter only builds created with the specified app identifier",
          args: {
            name: "App Identifier",
          },
        },
        {
          name: ["--app-version", "--appVersion"],
          description:
            "Filter only builds created with the specified main app version",
          args: {
            name: "App Version",
          },
        },
        {
          name: "--channel",
          args: {
            name: "Channel",
          },
        },
        {
          name: "--distribution",
          description:
            "Filter only builds with the specified distribution type",
          args: {
            name: "Distribution",
            suggestions: ["store", "internal", "simulator"],
          },
        },
        {
          name: "--fingerprint-hash",
          description: "Filter only builds with the specified fingerprint hash",
          args: {
            name: "Fingerprint Hash",
          },
        },
        {
          name: ["--git-commit-hash", "--gitCommitHash"],
          description:
            "Filter only builds created with the specified git commit hash",
          args: {
            name: "Git Commit Hash",
          },
        },
        jsonOpt,
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 10 and is capped at 50",
          args: {
            name: "Limit",
            suggestions: generateRange(10, 50),
            default: "10",
          },
        },
        nonInteractiveOpt,
        offsetOpt,
        {
          name: ["--runtime-version", "--runtimeVersion"],
          description:
            "Filter only builds created with the specified runtime version",
          args: {
            name: "Runtime Version",
          },
        },
        {
          name: ["--sdk-version", "--sdkVersion"],
          description:
            "Filter only builds created with the specified Expo SDK version",
          args: {
            name: "Sdk Version",
          },
        },
        {
          name: "--simulator",
          description:
            'Filter only iOS simulator builds. Can only be used with --platform flag set to "ios"',
        },
        {
          name: "--status",
          description: "Filter only builds with the specified status",
          args: {
            name: "Status",
            suggestions: [
              "new",
              "in-queue",
              "in-progress",
              "pending-cancel",
              "errored",
              "finished",
              "canceled",
            ],
          },
        },
      ],
    },
    {
      name: "build:resign",
      description: "Re-sign a build archive",
      options: [
        {
          name: ["-e", "--target-profile", "--profile"],
          description:
            'Name of the target build profile from eas.json. Credentials and environment variables from this profile will be used when re-signing. Defaults to "production" if defined in eas.json',
          args: {
            name: "Profile Name",
          },
        },
        nativePlatformOpt,
        {
          name: "--id",
          description: "ID of the build to re-sign",
          args: {
            name: "ID",
          },
        },
        jsonOpt,
        limit50Opt,
        noWaitOpt,
        nonInteractiveOpt,
        offsetOpt,
        {
          name: "--source-profile",
          description:
            "Name of the source build profile from eas.json. Used to filter builds eligible for re-signing",
          args: {
            name: "Profile Name",
          },
        },
        {
          name: "--wait",
          description: "Wait for build(s) to complete",
        },
      ],
    },
    {
      name: "build:run",
      description: "Run simulator/emulator builds from eas-cli",
      options: [
        {
          name: ["-e", "--profile"],
          description:
            "Name of the build profile used to create the build to run. When specified, only builds created with the specified build profile will be queried",
          args: {
            name: "Profile Name",
          },
        },
        nativePlatformOpt,
        {
          name: "--id",
          description: "ID of the simulator/emulator build to run",
          exclusiveOn: ["--latest, path, url"],
          args: {
            name: "ID",
          },
        },
        {
          name: "--latest",
          description:
            "Run the latest simulator/emulator build for specified platform",
          exclusiveOn: ["--id", "--path", "--url"],
        },
        limit50Opt,
        offsetOpt,
        {
          name: "--path",
          description: "Path to the simulator/emulator build archive or app",
          exclusiveOn: ["--latest", "--id", "--url"],
          args: {
            name: "Path",
            template: "filepaths",
          },
        },
        {
          name: "--simulator",
          description:
            "IOS simulator name or UDID to install and run the build on. If no value is provided, you will be prompted to select a simulator",
          args: {
            name: "Simulator",
          },
        },
        {
          name: "--url",
          description: "Simulator/Emulator build archive url",
          exclusiveOn: ["--latest", "--id", "--path"],
          args: {
            name: "URL",
          },
        },
      ],
    },
    {
      name: "build:version:get",
      description: "Get the latest version from EAS servers",
      options: [buildProfileOpt, platformOpt, jsonOpt, nonInteractiveOpt],
    },
    {
      name: "build:version:set",
      description: "Update version of an app",
      options: [buildProfileOpt, nativePlatformOpt],
    },
    {
      name: "build:version:sync",
      description:
        "Update a version in native code with a value stored on EAS servers",
      options: [buildProfileOpt, platformOpt],
    },
    {
      name: "build:view",
      description: "View a build for your project",
      args: buildIdArg,
      options: [jsonOpt2],
    },
    {
      name: "channel:create",
      description: "Create a channel",
      args: {
        name: "Name",
        description: "Name of the channel to create",
        isOptional: true,
      },
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: "channel:delete",
      description: "Delete a channel",
      args: {
        name: "Name",
        description: "Name of the channel to delete",
        isOptional: true,
      },
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: "channel:edit",
      description: "Point a channel at a new branch",
      args: {
        name: "Name",
        description: "Name of the channel to edit",
        isOptional: true,
      },
      options: [branchOpt, jsonOpt, nonInteractiveOpt],
    },
    {
      name: "channel:insights",
      description:
        "Display adoption, crash, and unique-user insights for a channel + runtime version",
      options: [
        {
          name: "--channel",
          description: "Name of the channel",
          isRequired: true,
          args: {
            name: "Channel",
          },
        },
        daysOpt2,
        endOpt2,
        jsonOpt,
        nonInteractiveOpt,
        {
          name: "--runtime-version",
          description: "Runtime version to query insights for",
          isRequired: true,
          args: {
            name: "Runtime Version",
          },
        },
        startOpt2,
      ],
    },
    {
      name: "channel:list",
      description: "List all channels",
      options: [
        jsonOpt,
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 10 and is capped at 25",
          args: {
            name: "Limit",
            suggestions: generateRange(10, 25),
            default: "10",
          },
        },
        nonInteractiveOpt,
        offsetOpt,
      ],
    },
    {
      name: "channel:pause",
      description: "Pause a channel to stop it from sending updates",
      args: {
        name: "Name",
        description: "Name of the channel to edit",
        isOptional: true,
      },
      options: [branchOpt, jsonOpt, nonInteractiveOpt],
    },
    {
      name: "channel:protect",
      description:
        "Protect a channel so only Release Managers, Admins, and Owners can publish to it",
      args: {
        name: "Name",
        description: "Name of the channel to protect",
        isOptional: true,
      },
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: "channel:resume",
      description: "Resume a channel to start sending updates",
      args: {
        name: "Name",
        description: "Name of the channel to edit",
        isOptional: true,
      },
      options: [branchOpt, jsonOpt, nonInteractiveOpt],
    },
    {
      name: "channel:rollout",
      description: "Roll a new branch out on a channel incrementally",
      args: {
        name: "Channel",
        description: "Channel on which the rollout should be done",
        isOptional: true,
      },
      options: [
        {
          name: "--action",
          description: "Rollout action to perform",
          args: {
            name: "Action",
            suggestions: ["create", "edit", "end", "view"],
          },
        },
        {
          name: "--branch",
          description: "Branch to roll out. Use with --action=create",
          args: {
            name: "Branch",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
        {
          name: "--outcome",
          description: "End outcome of rollout. Use with --action=end",
          args: {
            name: "Outcome",
            suggestions: ["republish-and-revert", "revert"],
          },
        },
        {
          name: "--percent",
          description:
            "Percent of users to send to the new branch. Use with --action=edit or --action=create",
          args: {
            name: "Percent",
          },
        },
        privateKeyPathOpt,
        {
          name: "--runtime-version",
          description: "Runtime version to target. Use with --action=create",
          args: {
            name: "Runtime Version",
          },
        },
      ],
    },
    {
      name: "channel:unprotect",
      description: "Remove a channel's protected publishing restriction",
      args: {
        name: "Name",
        description: "Name of the channel to unprotect",
        isOptional: true,
      },
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: "channel:view",
      description: "View a channel",
      args: {
        name: "Name",
        description: "Name of the channel to view",
        isOptional: true,
      },
      options: [jsonOpt, limit50Opt, nonInteractiveOpt, offsetOpt],
    },
    {
      name: "config",
      description: "Display project configuration (app.json + eas.json)",
      options: [
        buildProfileOpt,
        nativePlatformOpt,
        {
          name: "--eas-json-only",
          hidden: true,
        },
        jsonOpt,
        nonInteractiveOpt,
      ],
    },
    {
      name: "credentials",
      description: "Manage credentials",
      options: [nativePlatformOpt],
    },
    {
      name: "credentials:configure-build",
      description: "Set up credentials for building your project",
      options: [
        {
          name: ["-e", "--profile"],
          description: "The name of the build profile in eas.json",
          args: {
            name: "Profile Name",
          },
        },
        nativePlatformOpt,
      ],
    },
    {
      name: ["deploy", "worker:deploy"],
      description: "Deploy your Expo Router web build and API Routes",
      options: [
        {
          name: "--alias",
          description: "Custom alias to assign to the new deployment",
          args: {
            name: "Name",
          },
        },
        {
          name: "--dev-domain",
          description:
            'Custom preview URL subdomain to assign to the project on its first deployment, e.g. "my-app" for my-app.expo.app. Required with --non-interactive if you want to customize the preview URL',
          args: {
            name: "Name",
          },
        },
        {
          name: "--dry-run",
          description:
            "Outputs a tarball of the new deployment instead of uploading it",
        },
        {
          name: "--environment",
          description:
            "Environment variable's environment, e.g. 'production', 'preview', 'development'",
          args: {
            name: "Environment",
          },
        },
        {
          name: "--export-dir",
          description: "Directory where the Expo project was exported",
          args: {
            name: "Dir",
            default: "dist",
            template: "folders",
          },
        },
        {
          name: "--id",
          description: "Custom unique identifier for the new deployment",
          args: {
            name: "Xyz123",
          },
        },
        jsonOpt,
        {
          name: "--no-source-maps",
          description: "Disable --source-maps",
        },
        nonInteractiveOpt,
        {
          name: ["--prod", "--production"],
          description: "Create a new production deployment",
        },
        {
          name: "--source-maps",
          description: "Include source maps in the deployment",
        },
      ],
    },
    {
      name: ["deploy:alias", "worker:alias", "deploy:promote"],
      description: "Assign deployment aliases",
      options: [
        {
          name: "--alias",
          description: "Custom alias to assign to the existing deployment",
          args: {
            name: "Name",
          },
        },
        {
          name: "--id",
          description: "Unique identifier of an existing deployment",
          args: {
            name: "Xyz123",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
        {
          name: ["--prod", "--production"],
          description: "Promote an existing deployment to production",
        },
      ],
    },
    {
      name: ["deploy:alias:delete", "worker:alias:delete"],
      description: "Delete deployment aliases",
      args: {
        name: "Alias Name",
        isOptional: true,
      },
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: ["deploy:delete", "worker:delete"],
      description: "Delete a deployment",
      args: {
        name: "Deployment ID",
        isOptional: true,
      },
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: "device:create",
      description:
        "Register new Apple Devices to use for internal distribution",
    },
    {
      name: "device:delete",
      description: "Remove a registered device from your account",
      options: [
        {
          name: "--apple-team-id",
          description: "The Apple team ID on which to find the device",
          args: {
            name: "Apple Team ID",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
        {
          name: "--udid",
          description: "The Apple device ID to disable",
          args: {
            name: "UDID",
          },
        },
      ],
    },
    {
      name: "device:list",
      description: "List all registered devices for your account",
      options: [
        {
          name: "--apple-team-id",
          args: {
            name: "Apple Team ID",
          },
        },
        jsonOpt,
        limit50Opt,
        nonInteractiveOpt,
        offsetOpt,
      ],
    },
    {
      name: "device:rename",
      description: "Rename a registered device",
      options: [
        {
          name: "--apple-team-id",
          description: "The Apple team ID on which to find the device",
          args: {
            name: "Apple Team ID",
          },
        },
        jsonOpt,
        {
          name: "--name",
          description: "The new name for the device",
          args: {
            name: "Name",
          },
        },
        nonInteractiveOpt,
        {
          name: "--udid",
          description: "The Apple device ID to rename",
          args: {
            name: "UDID",
          },
        },
      ],
    },
    {
      name: "device:view",
      description: "View a device for your project",
      args: {
        name: "UDID",
        isOptional: true,
      },
    },
    {
      name: "diagnostics",
      description: "Display environment info",
    },
    {
      name: "env:create",
      description: "Deprecated, use eas env:set",
      hidden: true,
      deprecated: true,
      args: {
        name: "Environment",
        description:
          "Environment to create the variable in. Default environments are 'production', 'preview', and 'development'",
        isOptional: true,
      },
      options: [
        environmentOpt2,
        {
          name: "--force",
          description: "Overwrite existing variable",
        },
        {
          name: "--name",
          description: "Name of the variable",
          args: {
            name: "Name",
          },
        },
        nonInteractiveOpt,
        scopeOpt,
        typeOpt,
        {
          name: "--value",
          description: "Text value or the variable",
          args: {
            name: "Value",
          },
        },
        visibilityOpt,
      ],
    },
    {
      name: "env:delete",
      description:
        "Delete an environment variable for the current project or account",
      args: {
        name: "Environment",
        description:
          "Current environment of the variable to delete. Default environments are 'production', 'preview', and 'development'",
        isOptional: true,
      },
      options: [
        nonInteractiveOpt,
        scopeOpt,
        {
          name: "--variable-environment",
          description: "Current environment of the variable to delete",
          args: {
            name: "Variable Environment",
          },
        },
        {
          name: "--variable-name",
          description: "Name of the variable to delete",
          args: {
            name: "Variable Name",
          },
        },
      ],
    },
    {
      name: "env:exec",
      description:
        "Execute a command with environment variables from the selected environment",
      args: [
        {
          name: "Environment",
          description:
            "Environment to execute the command in. Default environments are 'production', 'preview', and 'development'",
        },
        {
          name: "Bash Command",
          description:
            "Bash command to execute with the environment variables from the environment",
        },
      ],
      options: [nonInteractiveOpt],
    },
    {
      name: "env:get",
      description:
        "View an environment variable for the current project or account",
      args: {
        name: "Environment",
        description:
          "Current environment of the variable. Default environments are 'production', 'preview', and 'development'",
        isOptional: true,
      },
      options: [
        {
          name: "--format",
          description: "Output format",
          args: {
            name: "Format",
            suggestions: ["long", "short"],
            default: "short",
          },
        },
        nonInteractiveOpt,
        scopeOpt,
        {
          name: "--variable-environment",
          description: "Current environment of the variable",
          args: {
            name: "Variable Environment",
          },
        },
        {
          name: "--variable-name",
          description: "Name of the variable",
          args: {
            name: "Variable Name",
          },
        },
      ],
    },
    {
      name: "env:list",
      description:
        "List environment variables for the current project or account",
      args: {
        name: "Environment",
        description:
          "Environment to list the variables from. Default environments are 'production', 'preview', and 'development'",
        isOptional: true,
      },
      options: [
        environmentOpt2,
        {
          name: "--format",
          description: "Output format",
          args: {
            name: "Format",
            suggestions: ["long", "short"],
            default: "short",
          },
        },
        {
          name: "--include-file-content",
          description: "Display files content in the output",
        },
        {
          name: "--include-sensitive",
          description: "Display sensitive values in the output",
        },
        scopeOpt,
      ],
    },
    {
      name: "env:pull",
      description:
        "Pull environment variables for the selected environment to .env file",
      args: {
        name: "Environment",
        description:
          "Environment to pull variables from. Default environments are 'production', 'preview', and 'development'",
        isOptional: true,
      },
      options: [
        {
          name: "--environment",
          description:
            "Environment variable's environment, e.g. 'production', 'preview', 'development'",
          args: {
            name: "Environment",
          },
        },
        nonInteractiveOpt,
        {
          name: "--path",
          description: "Path to the result `.env` file",
          args: {
            name: "Path",
            default: ".env.local",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "env:push",
      description:
        "Push environment variables from .env file to the selected environment",
      args: {
        name: "Environment",
        description:
          "Environment to push variables to. Default environments are 'production', 'preview', and 'development'",
        isOptional: true,
      },
      options: [
        environmentOpt2,
        {
          name: "--force",
          description:
            "Skip confirmation and automatically override existing variables",
        },
        {
          name: "--path",
          description: "Path to the input `.env` file",
          args: {
            name: "Path",
            default: ".env.local",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "env:set",
      description:
        "Set (create or update) an environment variable on the current project or account",
      args: {
        name: "Environment",
        description:
          "Environment to set the variable in. Default environments are 'production', 'preview', and 'development'",
        isOptional: true,
      },
      options: [
        environmentOpt2,
        jsonOpt,
        {
          name: ["--name", "--variable-name"],
          description: "Name of the variable",
          args: {
            name: "Name",
          },
        },
        nonInteractiveOpt,
        scopeOpt,
        typeOpt,
        {
          name: ["--value", "--variable-value"],
          description: "Text value of the variable",
          args: {
            name: "Value",
          },
        },
        visibilityOpt,
      ],
    },
    {
      name: "env:update",
      description: "Deprecated, use eas env:set",
      hidden: true,
      deprecated: true,
      args: {
        name: "Environment",
        description:
          "Current environment of the variable to update. Default environments are 'production', 'preview', and 'development'",
        isOptional: true,
      },
      options: [
        environmentOpt2,
        {
          name: "--name",
          description: "New name of the variable",
          args: {
            name: "Name",
          },
        },
        nonInteractiveOpt,
        scopeOpt,
        typeOpt,
        {
          name: "--value",
          description: "New value or the variable",
          args: {
            name: "Value",
          },
        },
        {
          name: "--variable-environment",
          description: "Current environment of the variable to update",
          args: {
            name: "Variable Environment",
          },
        },
        {
          name: "--variable-name",
          description: "Current name of the variable",
          args: {
            name: "Variable Name",
          },
        },
        visibilityOpt,
      ],
    },
    {
      name: "fingerprint:compare",
      description:
        "Compare fingerprints of the current project, builds, and updates",
      args: [
        {
          name: "Hash1",
          description:
            "If provided alone, HASH1 is compared against the current project's fingerprint",
          isOptional: true,
        },
        {
          name: "Hash2",
          description:
            "If two hashes are provided, HASH1 is compared against HASH2",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["--build-id", "--buildId"],
          description:
            "Compare the fingerprint with the build with the specified ID",
          isRepeatable: true,
          args: {
            name: "Build ID",
          },
        },
        {
          name: "--environment",
          description:
            "If generating a fingerprint from the local directory, use the specified environment",
          args: {
            name: "Environment",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
        {
          name: "--open",
          description: "Open the fingerprint comparison in the browser",
        },
        {
          name: ["--update-id", "--updateId"],
          description:
            "Compare the fingerprint with the update with the specified ID",
          isRepeatable: true,
          args: {
            name: "Update ID",
          },
        },
      ],
    },
    {
      name: "fingerprint:generate",
      description: "Generate fingerprints from the current project",
      options: [
        {
          name: ["-e", "--build-profile"],
          description: "Name of the build profile from eas.json",
          exclusiveOn: ["--environment"],
          args: {
            name: "Build Profile",
          },
        },
        nativePlatformOpt,
        {
          name: "--environment",
          description:
            "Environment variable's environment, e.g. 'production', 'preview', 'development'",
          exclusiveOn: ["--build-profile"],
          args: {
            name: "Environment",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
      ],
    },
    {
      name: "go",
      description: "Create a custom Expo Go and submit to TestFlight",
      hidden: true,
      options: [
        {
          name: "--bundle-id",
          description: "IOS bundle identifier (auto-generated if not provided)",
          args: {
            name: "Bundle ID",
          },
        },
        {
          name: "--credentials",
          description:
            "Interactively select credentials (default: auto-select)",
        },
        {
          name: "--name",
          description: "App name",
          args: {
            name: "Name",
            default: "My Expo Go",
          },
        },
        {
          name: "--sdk-version",
          description:
            "Expo Go SDK version to prepare, for example 57 (default: the SDK version of the current project)",
          args: {
            name: "Sdk Version",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Display help for eas-cli",
      args: {
        name: "Command",
        description: "Command to show help for",
        isOptional: true,
      },
      options: [
        {
          name: ["-n", "--nested-commands"],
          description: "Include all nested commands in the output",
        },
      ],
    },
    {
      name: "integrations:asc:connect",
      description: "Connect a project to an App Store Connect app",
      options: [
        {
          name: "--api-key-id",
          description: "Apple App Store Connect API Key ID",
          args: {
            name: "Api Key ID",
          },
        },
        {
          name: "--asc-app-id",
          description: "App Store Connect app identifier",
          args: {
            name: "Asc App ID",
          },
        },
        {
          name: "--bundle-id",
          description: "Filter discovered apps by bundle identifier",
          args: {
            name: "Bundle ID",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
      ],
    },
    {
      name: "integrations:asc:disconnect",
      description:
        "Disconnect the current project from its App Store Connect app",
      options: [
        jsonOpt,
        nonInteractiveOpt,
        {
          name: "--yes",
          description: "Skip confirmation prompt",
        },
      ],
    },
    {
      name: "integrations:asc:status",
      description:
        "Show the App Store Connect app link status for the current project",
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: "integrations:convex:connect",
      description: "Connect Convex to your Expo project",
      options: [
        nonInteractiveOpt,
        {
          name: "--project-name",
          description: "Name for the Convex project (defaults to app slug)",
          args: {
            name: "Project Name",
          },
        },
        {
          name: "--region",
          description:
            "Convex deployment region (e.g. aws-us-east-1, aws-eu-west-1)",
          args: {
            name: "Region",
            suggestions: ["aws-us-east-1", "aws-eu-west-1"],
          },
        },
        {
          name: "--team-name",
          description:
            "Name for the new Convex team (defaults to EAS account name)",
          args: {
            name: "Team Name",
          },
        },
      ],
    },
    {
      name: "integrations:convex:dashboard",
      description: "Open the Convex dashboard for the linked Convex project",
    },
    {
      name: "integrations:convex:project",
      description: "Display the Convex project linked to the current Expo app",
    },
    {
      name: "integrations:convex:project:delete",
      description:
        "Remove the Convex project link for the current Expo app from EAS servers",
      options: [yesOpt, nonInteractiveOpt],
    },
    {
      name: "integrations:convex:team",
      description:
        "Display Convex teams linked to the current Expo app's owner account",
    },
    {
      name: "integrations:convex:team:delete",
      description:
        "Remove a Convex team link from the current Expo app owner account's EAS servers",
      args: {
        name: "Convex Team",
        description: "Slug of the Convex team to remove",
        isOptional: true,
      },
      options: [yesOpt, nonInteractiveOpt],
    },
    {
      name: "integrations:convex:team:invite",
      description:
        "Send a Convex team invitation to your verified email address",
      args: {
        name: "Convex Team",
        description: "Slug of the Convex team to invite yourself to",
        isOptional: true,
      },
      options: [nonInteractiveOpt],
    },
    {
      name: "integrations:posthog:connect",
      description: "Connect PostHog to your Expo project",
      options: [
        {
          name: "--error-tracking",
          description:
            "Set up PostHog error tracking / source maps (requires a personal API key)",
        },
        jsonOpt,
        {
          name: "--no-error-tracking",
          description: "Disable --error-tracking",
        },
        {
          name: "--no-session-replay",
          description: "Disable --session-replay",
        },
        nonInteractiveOpt,
        {
          name: "--overwrite",
          description:
            "Overwrite existing PostHog environment variables without prompting",
        },
        {
          name: "--posthog-cli-api-key",
          description:
            "PostHog personal API key for error-tracking source-map uploads (enables error tracking non-interactively)",
          args: {
            name: "Posthog Cli Api Key",
          },
        },
        {
          name: "--region",
          description: "PostHog region",
          args: {
            name: "Region",
            suggestions: ["US", "EU"],
          },
        },
        {
          name: "--session-replay",
          description: "Set up PostHog session replay (default: yes)",
        },
      ],
    },
    {
      name: "integrations:posthog:dashboard",
      description: "Open the PostHog dashboard for the linked PostHog project",
      options: [
        jsonOpt,
        nonInteractiveOpt,
        {
          name: "--show-link",
          description:
            "Print the signed-in dashboard URL in addition to opening it. The URL contains a single-use login token",
        },
      ],
    },
    {
      name: "integrations:posthog:disconnect",
      description:
        "Remove the PostHog project link for the current Expo app from EAS servers",
      options: [yesOpt, jsonOpt, nonInteractiveOpt],
    },
    {
      name: "integrations:supabase:advisors",
      description:
        "List unresolved findings from the Supabase Security and Performance Advisors for this app's primary Supabase project",
      options: [
        jsonOpt,
        nonInteractiveOpt,
        {
          name: "--type",
          description: "Only show one advisor",
          args: {
            name: "Type",
            suggestions: ["security", "performance"],
          },
        },
      ],
    },
    {
      name: "integrations:supabase:connect",
      description:
        "Authorize Supabase, link or provision a project, install the SDK, and write EXPO_PUBLIC_SUPABASE_URL / EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
      options: [
        {
          name: "--environment",
          description:
            "EAS environments for a separate hosted project (e.g. preview). Requires prior primary connect; writes URL/key only there. Incompatible with --link and --reauth",
          args: {
            name: "Environment",
          },
        },
        jsonOpt,
        {
          name: "--link",
          description:
            "Existing project URL or Reference ID (Project Settings → General). Sets the app primary instead of provisioning. Incompatible with --environment",
          args: {
            name: "Link",
          },
        },
        nonInteractiveOpt,
        {
          name: "--organization",
          description:
            "Supabase org slug for a new primary project. Ignored with --link; incompatible with --environment",
          args: {
            name: "Organization",
          },
        },
        {
          name: "--overwrite",
          description:
            "Replace existing EXPO_PUBLIC_SUPABASE_* in .env.local and EAS without prompting",
        },
        {
          name: "--reauth",
          description:
            "Disconnect the existing Supabase OAuth connection, then re-authorize in the browser. Removes the EAS connection and primary project link (Supabase projects are kept). Then prompts to link an existing project (default) or provision a new one; pass --link to skip the prompt",
        },
        {
          name: "--region",
          description:
            "Region when provisioning (americas | emea | apac, or e.g. us-east-1). Required with --non-interactive if provisioning. Ignored with --link or if already linked",
          args: {
            name: "Region",
          },
        },
      ],
    },
    {
      name: "integrations:supabase:dashboard",
      description:
        "Open this app's primary Supabase project in the dashboard (or print the URL with --non-interactive)",
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: "integrations:supabase:disconnect",
      description:
        "Remove this app's Supabase project link from EAS (keeps the Supabase project; does not delete EXPO_PUBLIC_SUPABASE_* env vars)",
      options: [yesOpt, jsonOpt, nonInteractiveOpt],
    },
    {
      name: "metadata:lint",
      description: "Validate the local store configuration",
      options: [
        jsonOpt2,
        {
          name: "--profile",
          description:
            'Name of the submit profile from eas.json. Defaults to "production" if defined in eas.json',
          args: {
            name: "Profile",
          },
        },
      ],
    },
    {
      name: "metadata:pull",
      description: "Generate the local store configuration from the app stores",
      options: [submitProfileOpt, nonInteractiveOpt],
    },
    {
      name: "metadata:push",
      description: "Sync the local store configuration to the app stores",
      options: [submitProfileOpt, nonInteractiveOpt],
    },
    {
      name: "observe:errors",
      description:
        "Display error and exception issue groups (grouped by fingerprint) for the app",
      options: [
        afterOpt,
        appVersionOpt,
        buildNumberOpt,
        daysOpt,
        endOpt,
        environmentOpt,
        {
          name: "--fingerprint",
          description:
            "Show individual occurrences (with stack traces) for this error group fingerprint instead of the grouped summary",
          args: {
            name: "Fingerprint",
          },
        },
        jsonOpt,
        limit10Opt,
        nonInteractiveOpt,
        applePlatformOpt,
        projectIdOpt,
        {
          name: "--severity",
          description: "Filter by severity (ignored when --fingerprint is set)",
          args: {
            name: "Severity",
            suggestions: ["fatal", "error"],
          },
        },
        startOpt,
        updateIdOpt,
      ],
    },
    {
      name: "observe:event",
      description:
        "Display a single Observe event (metric, log, or error) by its ID",
      args: {
        name: "ID",
        description: "ID of the event to display",
      },
      options: [jsonOpt, nonInteractiveOpt, projectIdOpt],
    },
    {
      name: "observe:events",
      description:
        "Display individual events emitted by the app via `logEvent`, filtered by the event name in the argument",
      args: {
        name: "Event Name",
        description: "Event name to filter by",
        isOptional: true,
      },
      options: [
        afterOpt,
        {
          name: "--all-events",
          description:
            "When no event name argument is provided, list all events across all event names instead of a summary of event names + counts",
        },
        appVersionOpt,
        buildNumberOpt,
        daysOpt,
        endOpt,
        environmentOpt,
        jsonOpt,
        limit10Opt,
        nonInteractiveOpt,
        applePlatformOpt,
        projectIdOpt,
        {
          name: "--property",
          description:
            "Filter by event property (key=value, exact match). Repeat up to 5 times to require all (each key may be used once). Without an event name, lists matching events",
          isRepeatable: true,
          args: {
            name: "Property",
          },
        },
        {
          name: "--session-id",
          description:
            "Filter by session ID. When no event name is given, lists the events in the session instead of the event-name summary",
          args: {
            name: "Session ID",
          },
        },
        startOpt,
        updateIdOpt,
      ],
    },
    {
      name: "observe:metrics",
      description:
        "Display individual performance metric samples ordered by value",
      args: {
        name: "Metric",
        description: "Metric to query (e.g. tti, cold_launch, nav_tti)",
        isOptional: true,
        suggestions: [
          "nav_cold_ttr",
          "nav_warm_ttr",
          "nav_tti",
          "tti",
          "ttr",
          "cold_launch",
          "warm_launch",
          "bundle_load",
          "update_download",
        ],
      },
      options: [
        afterOpt,
        appVersionOpt,
        buildNumberOpt,
        daysOpt,
        endOpt,
        environmentOpt,
        jsonOpt,
        limit10Opt,
        nonInteractiveOpt,
        applePlatformOpt,
        projectIdOpt,
        {
          name: "--sort",
          description: "Sort order for events",
          args: {
            name: "Sort",
            suggestions: ["slowest", "fastest", "newest", "oldest"],
            default: "oldest",
          },
        },
        startOpt,
        updateIdOpt,
      ],
    },
    {
      name: "observe:metrics-summary",
      description:
        "Display aggregated performance metric statistics grouped by app version",
      options: [
        daysOpt,
        endOpt,
        environmentOpt,
        jsonOpt,
        {
          name: "--metric",
          description:
            "Metric name to display (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Metric",
            suggestions: [
              "nav_cold_ttr",
              "nav_warm_ttr",
              "nav_tti",
              "tti",
              "ttr",
              "cold_launch",
              "warm_launch",
              "bundle_load",
              "update_download",
            ],
          },
        },
        nonInteractiveOpt,
        applePlatformOpt,
        projectIdOpt,
        startOpt,
        {
          name: "--stat",
          description:
            "Statistic to display per metric (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Stat",
            suggestions: [
              "min",
              "median",
              "max",
              "average",
              "p80",
              "p90",
              "p99",
              "eventCount",
            ],
          },
        },
      ],
    },
    {
      name: "observe:routes",
      description:
        "Display app navigation route metrics (Cold TTR, Warm TTR, TTI) grouped by route name",
      options: [
        afterOpt,
        appVersionOpt,
        buildNumberOpt,
        daysOpt,
        endOpt,
        environmentOpt,
        jsonOpt,
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 50 and is capped at 200",
          args: {
            name: "Limit",
            suggestions: generateRange(50, 200),
            default: "50",
          },
        },
        {
          name: "--metric",
          description:
            "Navigation metric to display (can be specified multiple times). Defaults to all three",
          isRepeatable: true,
          args: {
            name: "Metric",
            suggestions: ["nav_cold_ttr", "nav_warm_ttr", "nav_tti"],
          },
        },
        nonInteractiveOpt,
        applePlatformOpt,
        projectIdOpt,
        {
          name: "--route-name",
          description:
            "Filter by route name (can be specified multiple times to include several routes)",
          isRepeatable: true,
          args: {
            name: "Route Name",
          },
        },
        startOpt,
        {
          name: "--stat",
          description:
            "Statistic to display per metric (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Stat",
            suggestions: [
              "median",
              "med",
              "p90",
              "count",
              "event_count",
              "eventCount",
            ],
          },
        },
        updateIdOpt,
      ],
    },
    {
      name: "observe:session",
      description:
        "Display the timeline of metric, log, and request trace span events for a specific session",
      args: {
        name: "Session ID",
        description:
          "Session ID to inspect (omit in interactive mode to pick one from a list)",
        isOptional: true,
      },
      options: [
        daysOpt,
        endOpt,
        environmentOpt,
        {
          name: "--event-name",
          description:
            "Metric or log event name to pick candidate sessions by (e.g. tti, cold_launch, login_pressed). If omitted in interactive mode, you will be prompted",
          args: {
            name: "Event Name",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
        projectIdOpt,
        {
          name: "--sort",
          description:
            "Sort order for candidate events when picking a session (if omitted in interactive mode, you will be prompted)",
          args: {
            name: "Sort",
            suggestions: ["slowest", "fastest", "newest", "oldest"],
          },
        },
        startOpt,
      ],
    },
    {
      name: "observe:trace",
      description:
        "Display every span of a single request trace by its trace ID, oldest first, with child spans indented under their parent",
      args: {
        name: "Trace ID",
        description: "ID of the trace to display",
      },
      options: [jsonOpt, nonInteractiveOpt, projectIdOpt],
    },
    {
      name: "observe:traces",
      description:
        "Display request trace spans recorded by the app, newest first",
      options: [
        afterOpt,
        {
          name: "--all-spans",
          description:
            "List individual spans instead of the summary of span names + counts, even with no span filter",
        },
        appVersionOpt,
        buildNumberOpt,
        daysOpt,
        endOpt,
        environmentOpt,
        {
          name: "--host",
          description:
            "Filter by request host (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Host",
          },
        },
        {
          name: "--http-status",
          description:
            "Filter by HTTP response status code (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Http Status",
          },
        },
        jsonOpt,
        {
          name: "--kind",
          description: "Filter by span kind (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Kind",
            suggestions: [
              "client",
              "consumer",
              "internal",
              "producer",
              "server",
              "unspecified",
            ],
          },
        },
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 20 and is capped at 100",
          args: {
            name: "Limit",
            suggestions: generateRange(20, 100),
            default: "20",
          },
        },
        {
          name: "--min-duration",
          description: "Only spans that took at least this many milliseconds",
          args: {
            name: "Min Duration",
          },
        },
        {
          name: "--name",
          description:
            "Filter by span name, such as GET or POST (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Name",
          },
        },
        nonInteractiveOpt,
        applePlatformOpt,
        projectIdOpt,
        {
          name: "--root-only",
          description: "Only root spans (spans with no parent)",
        },
        {
          name: "--session-id",
          description: "Filter by session ID",
          args: {
            name: "Session ID",
          },
        },
        startOpt,
        {
          name: "--status",
          description:
            "Filter by span status (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Status",
            suggestions: ["error", "ok", "unset"],
          },
        },
        updateIdOpt,
      ],
    },
    {
      name: "observe:versions",
      description: "Display app versions with build and update details",
      options: [
        daysOpt,
        endOpt,
        environmentOpt,
        jsonOpt,
        nonInteractiveOpt,
        applePlatformOpt,
        projectIdOpt,
        startOpt,
      ],
    },
    {
      name: "open",
      description:
        "Open the project page in a web browser (alias of eas browse)",
      hidden: true,
    },
    {
      name: "project:delete",
      description: "Delete a project",
      args: {
        name: "Name",
        description:
          "Full name (@account/slug) or ID of the project to delete. Defaults to the project in the current directory",
        isOptional: true,
      },
      options: [
        {
          name: "--dangerously-confirm-deletion",
          description:
            "The project's full name (@account/slug), to confirm deletion. Required in non-interactive mode",
          args: {
            name: "Dangerously Confirm Deletion",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
      ],
    },
    {
      name: "project:icon:set",
      description: "Set the project icon displayed on the EAS dashboard",
      args: {
        name: "Path",
        description:
          "Path to the icon image (PNG or JPEG, at most 10 MB). Non-square images are center-cropped to a square",
        template: "filepaths",
      },
      options: [nonInteractiveOpt],
    },
    {
      name: "project:info",
      description: "Information about the current project",
    },
    {
      name: ["project:init", "init"],
      description: "Create or link an EAS project",
      options: [
        {
          name: "--account",
          description: "Name of the account that will own the project",
          exclusiveOn: ["--id"],
          args: {
            name: "Account",
          },
        },
        {
          name: "--force",
          description:
            "Whether to create a new project/link an existing project without additional prompts or overwrite any existing project ID when running with --id flag",
        },
        {
          name: "--icon",
          description:
            "Set the icon shown on the EAS dashboard from the app config, when the project does not have one yet",
        },
        {
          name: "--id",
          description: "ID of the EAS project to link",
          args: {
            name: "ID",
          },
        },
        jsonOpt,
        {
          name: "--no-icon",
          description: "Disable --icon",
        },
        nonInteractiveOpt,
      ],
    },
    {
      name: ["project:new", "new"],
      description:
        "Create a new project configured with Expo Application Services (EAS)",
      args: {
        name: "Path",
        description:
          "Path to create the project (defaults to current directory)",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: ["-p", "--package-manager"],
          description: "Package manager to use for installing dependencies",
          args: {
            name: "Package Manager",
            suggestions: ["bun", "npm", "pnpm", "yarn"],
            default: "npm",
          },
        },
        {
          name: "--sdk-version",
          description:
            'Expo SDK version to use for the new project (e.g. 57, or "latest")',
          args: {
            name: "Sdk Version",
          },
        },
      ],
    },
    {
      name: ["project:status", "status"],
      description:
        "Show a snapshot of the project: recent builds, dev builds, workflow runs, submissions, and updates",
      options: [
        jsonOpt,
        {
          name: "--limit",
          description:
            "The number of items to show in each section. Defaults to 3 and is capped at 25",
          args: {
            name: "Limit",
            suggestions: generateRange(3, 25),
            default: "3",
          },
        },
        nonInteractiveOpt,
      ],
    },
    {
      name: "secret:create",
      description:
        "Create an environment secret on the current project or owner account (deprecated, use eas env:create)",
      hidden: true,
      deprecated: true,
      options: [
        {
          name: "--force",
          description: "Delete and recreate existing secrets",
        },
        {
          name: "--name",
          description: "Name of the secret",
          args: {
            name: "Name",
          },
        },
        nonInteractiveOpt,
        {
          name: "--scope",
          description: "Scope for the secret",
          args: {
            name: "Scope",
            suggestions: ["account", "project"],
            default: "project",
          },
        },
        {
          name: "--type",
          description: "The type of secret",
          args: {
            name: "Type",
            suggestions: ["string", "file"],
          },
        },
        {
          name: "--value",
          description: "Text value or path to a file to store in the secret",
          args: {
            name: "Value",
          },
        },
      ],
    },
    {
      name: "secret:delete",
      description:
        "Delete an environment secret by ID (deprecated, use eas env:delete)",
      hidden: true,
      deprecated: true,
      options: [
        {
          name: "--id",
          description: "ID of the secret to delete",
          args: {
            name: "ID",
          },
        },
        nonInteractiveOpt,
      ],
    },
    {
      name: "secret:list",
      description:
        "List environment secrets available for your current app (deprecated, use eas env:list)",
      hidden: true,
      deprecated: true,
    },
    {
      name: "secret:push",
      description:
        "Read environment secrets from env file and store on the server (deprecated, use eas env:push)",
      hidden: true,
      deprecated: true,
      options: [
        {
          name: "--env-file",
          description: "Env file with secrets",
          args: {
            name: "Env File",
            template: "filepaths",
          },
        },
        {
          name: "--force",
          description: "Delete and recreate existing secrets",
        },
        nonInteractiveOpt,
        {
          name: "--scope",
          description: "Scope for the secrets",
          args: {
            name: "Scope",
            suggestions: ["account", "project"],
            default: "project",
          },
        },
      ],
    },
    {
      name: ["simulator", "simulator:start", "sim:start"],
      description: "Start a remote simulator session on EAS",
      options: [
        {
          name: ["-p", "--platform"],
          description: "Device platform",
          args: {
            name: "Platform",
            suggestions: ["android", "ios"],
          },
        },
        {
          name: "--application-archive-url",
          description:
            "Application archive URL to download, install, and launch before the simulator session is ready",
          exclusiveOn: ["--build-id", "--build-fingerprint", "--expo-go"],
          args: {
            name: "Application Archive URL",
          },
        },
        {
          name: "--build-fingerprint",
          description:
            "Fingerprint hash of an EAS Build to install and launch before the simulator session is ready. Uses the most recent finished build with this fingerprint that can be installed on the simulator",
          exclusiveOn: ["--build-id", "--application-archive-url", "--expo-go"],
          args: {
            name: "Build Fingerprint",
          },
        },
        {
          name: "--build-id",
          description:
            "EAS Build to install and launch before the simulator session is ready",
          exclusiveOn: [
            "--build-fingerprint",
            "--application-archive-url",
            "--expo-go",
          ],
          args: {
            name: "Build ID",
          },
        },
        {
          name: "--cors-origin",
          description:
            "Origin of a page that may call the simulator preview API cross-origin, for example to render the device with @expo/hub-client, such as https://app.example.com or https://*.example.com. Repeat for multiple origins. Embedding the preview in a frame does not need this; use --frame-ancestor for that",
          isRepeatable: true,
          args: {
            name: "Cors Origin",
          },
        },
        {
          name: "--device",
          description:
            'Virtual device to start for the session. On iOS, a Simulator device name or UDID (e.g. "iPhone 17 Pro"). On Android, an AVD hardware profile id (e.g. "pixel_9"). Defaults to a device chosen by the runner. eas simulator:devices lists the devices Expo suggests',
          args: {
            name: "Device",
          },
        },
        {
          name: "--egress",
          description:
            '[EXPERIMENTAL] With "local", the simulator\'s network traffic exits from this machine and fails while the egress client is disconnected',
          args: {
            name: "Egress",
            suggestions: ["local"],
          },
        },
        {
          name: "--egress-allow",
          description:
            "Destination on this machine or its network that the simulator may reach through local egress, as an exact host:port (for example localhost:3000). Repeat for multiple destinations",
          isRepeatable: true,
          dependsOn: ["--egress"],
          args: {
            name: "Egress Allow",
          },
        },
        {
          name: "--expo-go",
          description:
            "Install and launch Expo Go matching the current project's Expo SDK before the simulator session is ready",
          exclusiveOn: [
            "--build-id",
            "--build-fingerprint",
            "--application-archive-url",
          ],
        },
        {
          name: "--force",
          description:
            "[default: true] Create a new simulator session even when an existing simulator session is present in the environment",
        },
        {
          name: "--frame-ancestor",
          description:
            "Origin of a page that may embed the simulator preview in a frame, such as https://app.example.com or https://*.example.com. Repeat for multiple origins. The embedding page loads the printed preview URL, which carries the session token, so anyone who can read that page can also control the simulator",
          isRepeatable: true,
          args: {
            name: "Frame Ancestor",
          },
        },
        {
          name: "--import",
          description: "Load start options and actions from a JSON file",
          args: {
            name: "Import",
            template: "filepaths",
          },
        },
        jsonOpt,
        {
          name: "--launch-arg",
          description:
            "Argument passed to the installed application when it launches. Repeat for multiple arguments",
          isRepeatable: true,
          args: {
            name: "Launch Arg",
          },
        },
        {
          name: "--log-source",
          description:
            "Android logs to record during the session and upload afterward. Repeat to select both sources; replaces the default emulator-output selection. Device-wide device-logcat may contain credentials and personal data. Logs are not redacted",
          isRepeatable: true,
          args: {
            name: "Log Source",
            suggestions: ["emulator-output", "device-logcat"],
          },
        },
        {
          name: "--max-duration-minutes",
          description:
            "Maximum duration of the simulator session in minutes before it is automatically stopped. Defaults to, and cannot exceed, the maximum session duration of the account's plan",
          args: {
            name: "Max Duration Minutes",
          },
        },
        {
          name: "--max-idle-time-minutes",
          description:
            "Stop the simulator session automatically after this many minutes without session activity. When omitted, the session has no idle timeout and runs until its maximum duration",
          args: {
            name: "Max Idle Time Minutes",
          },
        },
        {
          name: "--name",
          description:
            "Human-readable name for the simulator session, shown in eas simulator:list and on expo.dev. Defaults to unnamed",
          args: {
            name: "Name",
          },
        },
        {
          name: "--network-capture",
          description:
            "Record HTTP(S) traffic from apps on the device (iOS only). HTTPS is decrypted, so recordings contain credentials in cleartext and certificate-pinned apps fail to connect",
        },
        {
          name: "--network-capture-field",
          description:
            "What a recording may keep beyond method, URL, status, timing and size: header, query, request-body, response-body. Repeatable or comma-separated. Defaults to none of them, because each can carry credentials",
          isRepeatable: true,
          dependsOn: ["--network-capture"],
          args: {
            name: "Network Capture Field",
          },
        },
        {
          name: "--no-force",
          description: "Disable --force",
        },
        {
          name: "--no-network-capture",
          description: "Disable --network-capture",
        },
        {
          name: "--no-public-link",
          description: "Disable --public-link",
        },
        nonInteractiveOpt,
        {
          name: "--open-url",
          description:
            "Expo or development-client URL to open in the installed application after it launches",
          args: {
            name: "Open URL",
          },
        },
        {
          name: "--out-config-type",
          description:
            'How to output simulator connection configuration. Use "env" to print shell exports, or "dotenv" to write .env.eas-simulator',
          args: {
            name: "Out Config Type",
            suggestions: ["env", "dotenv"],
            default: "dotenv",
          },
        },
        {
          name: "--package-version",
          description:
            'Version of the package backing the simulator session (e.g. "0.1.3-alpha.3"). Defaults to "latest" when omitted',
          args: {
            name: "Package Version",
          },
        },
        {
          name: "--public-link",
          description:
            "Enable the simulator preview Share button and print a shareable link containing an access token. Anyone with the link can control the simulator. With --json, include previewApiUrl and its token for API clients when available",
        },
        {
          name: "--resource-class",
          description:
            "The instance type that will be used to run this simulator session",
          hidden: true,
          args: {
            name: "Resource Class",
            suggestions: ["large", "medium"],
          },
        },
        {
          name: "--sdk-version",
          description:
            "Expo SDK version used to select Expo Go when --expo-go is passed. Defaults to the current project SDK",
          args: {
            name: "Sdk Version",
          },
        },
        {
          name: "--system-image",
          description:
            'Android SDK system image package to use for the emulator (e.g. "system-images;android-35-ext15;google_apis_playstore;x86_64"). Defaults to a system image chosen by the runner. Only supported with --platform android',
          args: {
            name: "System Image",
          },
        },
        {
          name: "--tag",
          description:
            "Label used to group simulator sessions, for example one per app variant. Repeat for multiple tags. Stored lowercased",
          isRepeatable: true,
          args: {
            name: "Tag",
          },
        },
        {
          name: "--type",
          description:
            "Type of simulator session to create. All session types include a web preview. agent-device, appium, and argent also include an automation interface; web-preview-only includes no automation interface",
          args: {
            name: "Type",
            suggestions: [
              "agent-device",
              "appium",
              "argent",
              "web-preview-only",
            ],
            default: "agent-device",
          },
        },
      ],
    },
    {
      name: ["simulator:availability", "sim:availability"],
      description:
        "Check whether EAS Simulator is enabled for the current project account",
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: ["simulator:control", "sim:control"],
      description: "Control a remote iOS simulator session on EAS",
      args: {
        name: "Action",
        description:
          "Action name, followed by values or name=value pairs. Omit to list actions. Use -- before values starting with --",
        isOptional: true,
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Show help for this command or the selected action",
        },
        idOpt,
        {
          name: "--idle-timeout",
          description:
            "Seconds of idle time before closing the kept-alive connection (default: 120)",
          dependsOn: ["--keep-alive"],
          args: {
            name: "Idle Timeout",
          },
        },
        {
          name: "--import",
          description: "Run saved actions from a JSON file",
          args: {
            name: "Import",
            template: "filepaths",
          },
        },
        jsonOpt,
        {
          name: "--keep-alive",
          description:
            "Keep the control connection available for subsequent commands (macOS and Linux)",
        },
        {
          name: "--list",
          description: "List available actions",
        },
        nonInteractiveOpt,
        {
          name: "--output",
          description: "Local file or existing directory for saved output",
          args: {
            name: "Output",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "simulator:control:connection",
      description:
        "Optionally keep a simulator control connection available between commands",
      args: {
        name: "Operation",
        description: "Open, inspect or close the local control connection",
        suggestions: ["open", "status", "close"],
      },
      options: [
        idOpt,
        {
          name: "--idle-timeout",
          description:
            "Seconds of idle time before closing the control connection (default: 120)",
          args: {
            name: "Idle Timeout",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
      ],
    },
    {
      name: ["simulator:devices", "sim:devices"],
      description:
        "List the devices Expo suggests for a remote simulator session",
      options: [
        {
          name: ["-p", "--platform"],
          description: "Show the devices of one platform",
          args: {
            name: "Platform",
            suggestions: ["android", "ios"],
          },
        },
        jsonOpt,
        nonInteractiveOpt,
      ],
    },
    {
      name: ["simulator:egress", "sim:egress"],
      description:
        "[EXPERIMENTAL] run the local egress client for a simulator session to route proxied HTTP(S) requests through this machine",
      options: [
        {
          name: "--config-type",
          description:
            "Read session credentials from .env.eas-simulator (dotenv) or the current shell environment (env)",
          args: {
            name: "Config Type",
            suggestions: ["dotenv", "env"],
            default: "dotenv",
          },
        },
      ],
    },
    {
      name: ["simulator:events", "sim:events"],
      description: "Show activity events from a remote simulator session",
      options: [
        {
          name: ["-f", "--follow"],
          description: "Keep watching for new events until the session ends",
        },
        idOpt,
        jsonOpt,
        nonInteractiveOpt,
      ],
    },
    {
      name: ["simulator:exec", "sim:exec"],
      description:
        "Execute a simulator command with .env.eas-simulator environment loaded",
    },
    {
      name: ["simulator:get", "sim:get"],
      description:
        "Get info about a remote simulator session on EAS by its simulator session ID",
      options: [idOpt, jsonOpt, nonInteractiveOpt],
    },
    {
      name: ["simulator:list", "sim:list"],
      description: "List remote simulator sessions for the current project",
      options: [
        afterOpt,
        jsonOpt,
        limit10Opt,
        {
          name: "--name",
          description: "Filter by session name (case-insensitive prefix match)",
          args: {
            name: "Name",
          },
        },
        nonInteractiveOpt,
        {
          name: "--platform",
          description: "Filter by device platform (repeatable)",
          isRepeatable: true,
          args: {
            name: "Platform",
            suggestions: ["android", "ios"],
          },
        },
        {
          name: "--status",
          description: "Filter by session status (repeatable)",
          isRepeatable: true,
          args: {
            name: "Status",
            suggestions: [
              "new",
              "queued",
              "starting",
              "in-progress",
              "stopped",
              "errored",
            ],
          },
        },
        {
          name: "--tag",
          description:
            "Filter by tag (repeatable). A session must carry every tag listed",
          isRepeatable: true,
          args: {
            name: "Tag",
          },
        },
        {
          name: "--type",
          description:
            "Filter by session type (repeatable). All session types include a web preview. agent-device, appium, and argent also include an automation interface; web-preview-only includes no automation interface",
          isRepeatable: true,
          args: {
            name: "Type",
            suggestions: [
              "agent-device",
              "appium",
              "argent",
              "web-preview-only",
            ],
          },
        },
      ],
    },
    {
      name: ["simulator:logs", "sim:logs"],
      description: "Show buffered logs from a remote iOS simulator session",
      options: [
        {
          name: ["-f", "--follow"],
          description:
            "Stream new logs. Start following before performing actions to collect them",
          exclusiveOn: ["--json"],
        },
        {
          name: ["-o", "--output"],
          description: "Save a stopped session artifact to this path",
          args: {
            name: "Output",
            template: "filepaths",
          },
        },
        {
          name: "--artifact",
          description:
            "Artifact index to download from a stopped session (1-based)",
          args: {
            name: "Artifact",
          },
        },
        idOpt,
        jsonOpt,
        {
          name: "--limit",
          description:
            "Maximum number of buffered log lines to show while the session runs",
          args: {
            name: "Limit",
            default: "100",
          },
        },
        nonInteractiveOpt,
        {
          name: "--scope",
          description:
            "Show user app logs or all device logs while the session runs",
          args: {
            name: "Scope",
            suggestions: ["user-apps", "all"],
            default: "user-apps",
          },
        },
        {
          name: "--timestamp",
          description: "Show timestamps in live human-readable log output",
        },
      ],
    },
    {
      name: ["simulator:stop", "sim:stop"],
      description:
        "Stop a remote simulator session on EAS by its simulator session ID",
      options: [idOpt, jsonOpt, nonInteractiveOpt],
    },
    {
      name: ["submit", "build:submit"],
      description: "Submit app binary to App Store and/or Play Store",
      options: [
        submitProfileOpt,
        {
          name: ["-g", "--groups"],
          description:
            "Internal TestFlight testing groups to add the build to (iOS only). Learn more: https://developer.apple.com/help/app-store-connect/test-a-beta-version/add-internal-testers",
          isRepeatable: true,
          args: {
            name: "Groups",
          },
        },
        platformOpt,
        {
          name: "--auto-testflight-setup",
          description:
            "Set up an internal TestFlight group for the app (iOS only)",
        },
        {
          name: "--id",
          description: "ID of the build to submit",
          exclusiveOn: ["--latest, path, url"],
          args: {
            name: "ID",
          },
        },
        {
          name: "--latest",
          description: "Submit the latest build for specified platform",
          exclusiveOn: ["--id", "--path", "--url"],
        },
        {
          name: "--no-auto-testflight-setup",
          description: "Disable --auto-testflight-setup",
        },
        noWaitOpt,
        {
          name: "--non-interactive",
          description: "Run command in non-interactive mode",
        },
        {
          name: "--path",
          description: "Path to the .apk/.aab/.ipa file",
          exclusiveOn: ["--latest", "--id", "--url"],
          args: {
            name: "Path",
            template: "filepaths",
          },
        },
        {
          name: "--url",
          description: "App archive url",
          exclusiveOn: ["--latest", "--id", "--path"],
          args: {
            name: "URL",
          },
        },
        {
          name: "--verbose",
          description: "Always print logs from EAS Submit",
        },
        {
          name: "--verbose-fastlane",
          description: "Enable verbose logging for the submission process",
        },
        {
          name: "--wait",
          description: "Wait for submission to complete",
        },
        {
          name: "--what-to-test",
          description:
            'Sets the "What to test" information in TestFlight (iOS only)',
          args: {
            name: "What To Test",
          },
        },
      ],
    },
    {
      name: "submit:cancel",
      description: "Cancel a submission",
      args: submissionIdArg,
      options: [
        {
          name: ["-p", "--platform"],
          description:
            "Filter submissions by the platform if submission ID is not provided",
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
          },
        },
        nonInteractiveOpt,
      ],
    },
    {
      name: "submit:internal",
      hidden: true,
      options: [
        {
          name: "--application-identifier",
          description:
            "Bundle identifier or Android package name read from the build artifact",
          dependsOn: ["--project-id"],
          args: {
            name: "Application Identifier",
          },
        },
        {
          name: "--id",
          description: "ID of the build to submit",
          isRequired: true,
          args: {
            name: "ID",
          },
        },
        {
          name: "--platform",
          isRequired: true,
          args: {
            name: "Platform",
            suggestions: ["android", "ios"],
          },
        },
        {
          name: "--profile",
          description:
            'Name of the submit profile from eas.json. Defaults to "production" if defined in eas.json',
          args: {
            name: "Profile",
          },
        },
        {
          name: "--project-id",
          description:
            "EAS project ID. With --application-identifier, skips loading app config",
          dependsOn: ["--application-identifier"],
          args: {
            name: "Project ID",
          },
        },
      ],
    },
    {
      name: "submit:list",
      description: "List submissions for your project",
      options: [
        platformOpt,
        jsonOpt,
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 10 and is capped at 50",
          args: {
            name: "Limit",
            suggestions: generateRange(10, 50),
            default: "10",
          },
        },
        nonInteractiveOpt,
        offsetOpt,
        {
          name: "--status",
          description: "Filter only submissions with the specified status",
          args: {
            name: "Status",
            suggestions: [
              "awaiting-build",
              "in-queue",
              "in-progress",
              "finished",
              "errored",
              "canceled",
            ],
          },
        },
      ],
    },
    {
      name: "submit:retry",
      description: "Retry a failed submission",
      args: submissionIdArg,
      options: [
        {
          name: ["-p", "--platform"],
          description:
            "Filter submissions by the platform if submission ID is not provided",
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
          },
        },
        jsonOpt,
        nonInteractiveOpt,
      ],
    },
    {
      name: "submit:status",
      description:
        "Show the status of your app on the App Store: the live version and TestFlight builds",
      options: [
        {
          name: ["-e", "--profile"],
          description:
            'Name of the submit profile from eas.json used to resolve the App Store Connect API key. Defaults to "production"',
          args: {
            name: "Profile",
          },
        },
        platformOpt,
        jsonOpt,
        nonInteractiveOpt,
      ],
    },
    {
      name: "submit:view",
      description: "View a submission for your project",
      args: submissionIdArg,
      options: [
        {
          name: ["-p", "--platform"],
          description:
            "Show the most recent submission for the platform when submission ID is not provided",
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
          },
        },
        jsonOpt2,
      ],
    },
    {
      name: "testflight:crashes",
      description:
        "Display crashes reported by TestFlight testers, or the full crash log of a single crash",
      args: {
        name: "ID",
        description:
          "ID or App Store Connect API URL of a single submission to show. Accepts ${{ app_store_connect.beta_feedback.id }} or ${{ app_store_connect.beta_feedback.url }} from an EAS workflow trigger",
        isOptional: true,
      },
      options: [
        {
          name: ["-e", "--profile"],
          description:
            'Name of the submit profile from eas.json used to resolve the bundle identifier and App Store Connect API key. Defaults to "production"',
          args: {
            name: "Profile",
          },
        },
        jsonOpt,
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 20 and is capped at 200",
          args: {
            name: "Limit",
            suggestions: generateRange(20, 200),
            default: "20",
          },
        },
        nonInteractiveOpt,
        offsetOpt,
        {
          name: "--type",
          description:
            "Kind of feedback the ID refers to. Only needed when passing a bare ID for screenshot feedback; a URL already encodes it",
          args: {
            name: "Type",
            suggestions: ["crash", "screenshot"],
          },
        },
      ],
    },
    {
      name: "testflight:feedback",
      description:
        "Display screenshot feedback submitted by TestFlight testers, including their comments, device information, and screenshot URLs",
      args: {
        name: "ID",
        description:
          "ID or App Store Connect API URL of a single submission to show. Accepts ${{ app_store_connect.beta_feedback.id }} or ${{ app_store_connect.beta_feedback.url }} from an EAS workflow trigger",
        isOptional: true,
      },
      options: [
        {
          name: ["-e", "--profile"],
          description:
            'Name of the submit profile from eas.json used to resolve the bundle identifier and App Store Connect API key. Defaults to "production"',
          args: {
            name: "Profile",
          },
        },
        jsonOpt,
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 20 and is capped at 200",
          args: {
            name: "Limit",
            suggestions: generateRange(20, 200),
            default: "20",
          },
        },
        nonInteractiveOpt,
        offsetOpt,
        {
          name: "--type",
          description:
            "Kind of feedback the ID refers to. Only needed when passing a bare ID for a crash; a URL already encodes it",
          args: {
            name: "Type",
            suggestions: ["crash", "screenshot"],
          },
        },
      ],
    },
    {
      name: "update",
      description: "Publish an update group",
      options: [
        {
          name: ["-m", "--message"],
          description: "A short message describing the update",
          args: {
            name: "Message",
          },
        },
        platformDefaultAllOpt,
        {
          name: "--auto",
          description:
            "Use the current git branch and commit message for the EAS branch and update message",
        },
        {
          name: "--branch",
          description: "Branch to publish the update group on",
          args: {
            name: "Branch",
          },
        },
        {
          name: "--channel",
          description: "Channel that the published update should affect",
          args: {
            name: "Channel",
          },
        },
        {
          name: "--clear-cache",
          description: "Clear the bundler cache before publishing",
        },
        {
          name: "--emit-metadata",
          description:
            'Emit "eas-update-metadata.json" in the bundle folder with detailed information about the generated updates',
        },
        {
          name: "--environment",
          description:
            'Environment to use for the server-side defined EAS environment variables during command execution, e.g. "production", "preview", "development". Required for projects using Expo SDK 55 or greater',
          args: {
            name: "Environment",
          },
        },
        {
          name: "--force-end-active-rollout",
          description:
            "End an in-progress rollout on the runtime version being published, so this update supersedes it",
        },
        {
          name: "--input-dir",
          description: "Location of the bundle",
          args: {
            name: "Input Dir",
            default: "dist",
            template: "folders",
          },
        },
        jsonOpt,
        {
          name: "--no-bytecode",
          description:
            "Skip generating Hermes bytecode (output plain JavaScript instead)",
          hidden: true,
        },
        nonInteractiveOpt,
        privateKeyPathOpt,
        {
          name: "--rollout-percentage",
          description:
            "Percentage of users this update should be immediately available to. Users not in the rollout will be served the previous latest update on the branch, even if that update is itself being rolled out. The specified number must be an integer between 1 and 100. When not specified, this defaults to 100",
          args: {
            name: "Rollout Percentage",
          },
        },
        {
          name: "--skip-bundler",
          description:
            "Skip running Expo CLI to bundle the app before publishing",
        },
        {
          name: "--source-maps",
          description:
            "Emit source maps. Options: true (default), inline, false",
          hidden: true,
          args: {
            name: "Source Maps",
            default: "true",
          },
        },
        {
          name: "--upload-source-maps",
          description:
            "Upload the generated source maps to EAS so that stack traces from this update can be symbolicated",
        },
      ],
    },
    {
      name: "update:configure",
      description: "Configure the project to support EAS Update",
      options: [
        {
          name: ["-p", "--platform"],
          description: "Platform to configure",
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
            default: "all",
          },
        },
        {
          name: "--environment",
          description:
            'Environment to use for the server-side defined EAS environment variables during command execution, e.g. "production", "preview", "development"',
          args: {
            name: "Environment",
          },
        },
        nonInteractiveOpt,
      ],
    },
    {
      name: "update:delete",
      description: "Delete all the updates in an update group",
      args: {
        name: "Group ID",
        description: "The ID of an update group to delete",
      },
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: "update:edit",
      description: "Edit all the updates in an update group",
      args: {
        name: "Group ID",
        description: "The ID of an update group to edit",
        isOptional: true,
      },
      options: [
        {
          name: "--branch",
          description: "Branch for which to list updates to select from",
          args: {
            name: "Branch",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
        {
          name: "--rollout-percentage",
          description:
            "Rollout percentage to set for a rollout update. The specified number must be an integer between 1 and 100",
          args: {
            name: "Rollout Percentage",
          },
        },
      ],
    },
    {
      name: "update:embedded:delete",
      description: "Delete an embedded update registered with EAS Update",
      args: {
        name: "ID",
        description:
          "The ID of the embedded update (manifest UUID from app.manifest)",
      },
      options: [jsonOpt, nonInteractiveOpt],
    },
    {
      name: "update:embedded:list",
      description:
        "List embedded updates registered with EAS Update for this project",
      options: [
        {
          name: ["-p", "--platform"],
          description: "Filter by platform",
          args: {
            name: "Platform",
            suggestions: ["ios", "android"],
          },
        },
        {
          name: "--after-cursor",
          description: "Return items after this cursor (for pagination)",
          args: {
            name: "After Cursor",
          },
        },
        {
          name: "--channel",
          description:
            'Filter by channel name (pass "all" to skip the channel prompt)',
          args: {
            name: "Channel",
          },
        },
        jsonOpt,
        limit25Opt,
        nonInteractiveOpt,
        {
          name: "--runtime-version",
          description: "Filter by runtime version",
          args: {
            name: "Runtime Version",
          },
        },
      ],
    },
    {
      name: "update:embedded:upload",
      description:
        "Upload the JS bundle embedded in a native build so EAS Update can generate bsdiff patches against it",
      options: [
        {
          name: ["-p", "--platform"],
          description: "Platform of the embedded bundle",
          isRequired: true,
          args: {
            name: "Platform",
            suggestions: ["ios", "android"],
          },
        },
        {
          name: "--build-id",
          description:
            "EAS Build ID that produced this binary (required when invoked from EAS Build)",
          args: {
            name: "Build ID",
          },
        },
        {
          name: "--bundle",
          description: "Path to the embedded JS bundle file",
          isRequired: true,
          args: {
            name: "Bundle",
            template: "filepaths",
          },
        },
        {
          name: "--channel",
          description:
            "Channel name the embedded update should be associated with",
          isRequired: true,
          args: {
            name: "Channel",
          },
        },
        jsonOpt,
        {
          name: "--manifest",
          description: "Path to the app.manifest file embedded in the build",
          isRequired: true,
          args: {
            name: "Manifest",
            template: "filepaths",
          },
        },
        nonInteractiveOpt,
      ],
    },
    {
      name: "update:embedded:view",
      description:
        "View details of an embedded update registered with EAS Update",
      args: {
        name: "ID",
        description:
          "The ID of the embedded update (manifest UUID from app.manifest)",
      },
      options: [jsonOpt2],
    },
    {
      name: "update:insights",
      description:
        "Display launch, crash, unique-user, and size insights for an update group",
      args: {
        name: "Group ID",
        description: "The ID of an update group",
      },
      options: [
        daysOpt2,
        endOpt2,
        jsonOpt,
        nonInteractiveOpt,
        {
          name: "--platform",
          description: "Filter to a single platform",
          args: {
            name: "Platform",
            suggestions: ["ios", "android"],
          },
        },
        startOpt2,
      ],
    },
    {
      name: "update:list",
      description: "View the recent updates",
      options: [
        {
          name: ["-p", "--platform"],
          description: "Filter updates by platform",
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
          },
        },
        {
          name: "--all",
          description: "List updates on all branches",
          exclusiveOn: ["--branch"],
        },
        {
          name: "--branch",
          description: "List updates only on this branch",
          exclusiveOn: ["--all"],
          args: {
            name: "Branch",
          },
        },
        jsonOpt,
        limit25Opt,
        nonInteractiveOpt,
        offsetOpt,
        {
          name: "--runtime-version",
          description: "Filter updates by runtime version",
          args: {
            name: "Runtime Version",
          },
        },
      ],
    },
    {
      name: "update:republish",
      description: "Roll back to an existing update",
      options: [
        {
          name: ["-m", "--message"],
          description: "Short message describing the republished update group",
          args: {
            name: "Message",
          },
        },
        platformDefaultAllOpt,
        {
          name: "--branch",
          description:
            "Branch name to select an update group to republish from",
          exclusiveOn: ["--channel", "--group"],
          args: {
            name: "Branch",
          },
        },
        {
          name: "--channel",
          description:
            "Channel name to select an update group to republish from",
          exclusiveOn: ["--branch", "--group"],
          args: {
            name: "Channel",
          },
        },
        {
          name: "--destination-branch",
          description:
            "Branch name to republish to if republishing to a different branch",
          exclusiveOn: ["--destination-channel"],
          args: {
            name: "Destination Branch",
          },
        },
        {
          name: "--destination-channel",
          description:
            "Channel name to select a branch to republish to if republishing to a different branch",
          exclusiveOn: ["--destination-branch"],
          args: {
            name: "Destination Channel",
          },
        },
        {
          name: "--force-end-active-rollout",
          description:
            "End an in-progress rollout on the runtime version being republished to, so this update supersedes it",
        },
        {
          name: "--group",
          description: "Update group ID to republish",
          exclusiveOn: ["--branch", "--channel"],
          args: {
            name: "Group",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
        privateKeyPathOpt,
        {
          name: "--rollout-percentage",
          description:
            "Percentage of users this update should be immediately available to. Users not in the rollout will be served the previous latest update on the branch, even if that update is itself being rolled out. The specified number must be an integer between 1 and 100. When not specified, this defaults to 100",
          args: {
            name: "Rollout Percentage",
          },
        },
      ],
    },
    {
      name: "update:revert-update-rollout",
      description: "Revert a rollout update for a project",
      options: [
        {
          name: ["-m", "--message"],
          description: "Short message describing the revert",
          args: {
            name: "Message",
          },
        },
        {
          name: "--branch",
          description:
            "Branch name to select an update group to revert the rollout update from",
          exclusiveOn: ["--channel", "--group"],
          args: {
            name: "Branch",
          },
        },
        {
          name: "--channel",
          description:
            "Channel name to select an update group to revert the rollout update from",
          exclusiveOn: ["--branch", "--group"],
          args: {
            name: "Channel",
          },
        },
        {
          name: "--group",
          description: "Rollout update group ID to revert",
          exclusiveOn: ["--branch", "--channel"],
          args: {
            name: "Group",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
        privateKeyPathOpt,
      ],
    },
    {
      name: "update:roll-back-to-embedded",
      description: "Roll back to the embedded update",
      options: [
        platformDefaultAllOpt,
        {
          name: "--branch",
          description:
            "Branch to publish the rollback to embedded update group on",
          args: {
            name: "Branch",
          },
        },
        {
          name: "--channel",
          description:
            "Channel that the published rollback to embedded update should affect",
          args: {
            name: "Channel",
          },
        },
        {
          name: "--force-end-active-rollout",
          description:
            "End an in-progress rollout on the runtime version being rolled back, so this roll back supersedes it",
        },
        jsonOpt,
        {
          name: "--message",
          description:
            "A short message describing the rollback to embedded update",
          args: {
            name: "Message",
          },
        },
        nonInteractiveOpt,
        privateKeyPathOpt,
        {
          name: "--runtime-version",
          description:
            "Runtime version that the rollback to embedded update should target",
          args: {
            name: "Runtime Version",
          },
        },
      ],
    },
    {
      name: "update:rollback",
      description: "Roll back to an embedded update or an existing update",
      args: {
        name: "Group ID",
        description:
          "The ID of the update group to roll back. Must be the latest update for its branch and runtime version. The update group published before it is republished; if there is none, a roll back to the embedded update is published. Required in non-interactive mode",
        isOptional: true,
      },
      options: [
        {
          name: ["-m", "--message"],
          description: "Short message describing the rollback update",
          args: {
            name: "Message",
          },
        },
        platformDefaultAllOpt,
        {
          name: "--force-end-active-rollout",
          description:
            "End an in-progress rollout on the runtime version being rolled back, so this roll back supersedes it",
        },
        jsonOpt,
        nonInteractiveOpt,
        privateKeyPathOpt,
      ],
    },
    {
      name: "update:view",
      description: "Update group details",
      args: {
        name: "Group ID",
        description:
          "The ID of an update group, or the ID of a platform-specific update",
      },
      options: [
        {
          name: "--days",
          description:
            "Show insights from the last N days (default 7). Only used with --insights",
          exclusiveOn: ["--start", "--end"],
          args: {
            name: "Days",
          },
        },
        {
          name: "--end",
          description:
            "End of insights time range (ISO date). Only used with --insights",
          exclusiveOn: ["--days"],
          args: {
            name: "End",
          },
        },
        {
          name: "--insights",
          description:
            "Also show insights (launches, crash rate, unique users, payload size) for the update group",
        },
        jsonOpt2,
        {
          name: "--start",
          description:
            "Start of insights time range (ISO date). Only used with --insights",
          exclusiveOn: ["--days"],
          args: {
            name: "Start",
          },
        },
      ],
    },
    {
      name: "upload",
      description: "Upload a local build and generate a sharable link",
      options: [
        {
          name: ["-p", "--platform"],
          args: {
            name: "Platform",
            suggestions: ["ios", "android"],
          },
        },
        {
          name: "--build-path",
          description: "Path for the local build",
          args: {
            name: "Build Path",
            template: "filepaths",
          },
        },
        {
          name: "--fingerprint",
          description: "Fingerprint hash of the local build",
          args: {
            name: "Fingerprint",
          },
        },
        jsonOpt,
        nonInteractiveOpt,
      ],
    },
    {
      name: "webhook:create",
      description: "Create a webhook",
      options: [
        eventOpt,
        nonInteractiveOpt,
        {
          name: "--secret",
          description:
            "Secret used to create a hash signature of the request payload, provided in the 'Expo-Signature' header",
          args: {
            name: "Secret",
          },
        },
        {
          name: "--url",
          description: "Webhook URL",
          args: {
            name: "URL",
          },
        },
      ],
    },
    {
      name: "webhook:delete",
      description: "Delete a webhook",
      args: {
        name: "ID",
        description: "ID of the webhook to delete",
        isOptional: true,
      },
      options: [nonInteractiveOpt],
    },
    {
      name: "webhook:list",
      description: "List webhooks",
      options: [eventOpt, jsonOpt2],
    },
    {
      name: "webhook:update",
      description: "Update a webhook",
      options: [
        eventOpt,
        {
          name: "--id",
          description: "Webhook ID",
          isRequired: true,
          args: {
            name: "ID",
          },
        },
        nonInteractiveOpt,
        {
          name: "--secret",
          description:
            "Secret used to create a hash signature of the request payload, provided in the 'Expo-Signature' header",
          args: {
            name: "Secret",
          },
        },
        {
          name: "--url",
          description: "Webhook URL",
          args: {
            name: "URL",
          },
        },
      ],
    },
    {
      name: "webhook:view",
      description: "View a webhook",
      args: {
        name: "ID",
        description: "ID of the webhook to view",
      },
    },
    {
      name: "workflow:cancel",
      description: "Cancel one or more workflow runs",
      options: [nonInteractiveOpt],
    },
    {
      name: "workflow:create",
      description: "Create a new workflow configuration YAML file",
      args: {
        name: "Name",
        description:
          "Name of the workflow file. When provided without --template, a placeholder workflow is created",
        isOptional: true,
      },
      options: [
        {
          name: "--skip-validation",
          description:
            "If set, the workflow file will not be validated before being created",
        },
        {
          name: "--template",
          description: "Template to use for the workflow file",
          args: {
            name: "Template",
            suggestions: ["build", "update", "deploy", "custom"],
          },
        },
      ],
    },
    {
      name: "workflow:insights",
      description:
        "Display run counts, success rate, run durations, and per-workflow trends for a time range",
      options: [
        daysOpt2,
        endOpt2,
        {
          name: "--git-ref",
          description:
            "Only include runs requested for this git ref, for example main or refs/heads/main, or for the full 40-character commit SHA that eas workflow:run recorded",
          args: {
            name: "Git Ref",
          },
        },
        jsonOpt,
        {
          name: "--limit",
          description:
            "The number of workflows to list. Defaults to 50 and is capped at 100",
          args: {
            name: "Limit",
            suggestions: generateRange(50, 100),
            default: "50",
          },
        },
        nonInteractiveOpt,
        projectIdOpt,
        startOpt2,
        {
          name: "--status",
          description:
            "Only include runs with this status (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Status",
            suggestions: ["SUCCESS", "FAILURE", "CANCELED"],
          },
        },
        {
          name: "--trigger",
          description:
            "Only include runs started by this trigger (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Trigger",
            suggestions: [
              "APP_STORE_CONNECT_APP_VERSION_STATE_CHANGED",
              "APP_STORE_CONNECT_BETA_FEEDBACK_SUBMITTED",
              "APP_STORE_CONNECT_BUILD_UPLOAD_STATE_CHANGED",
              "APP_STORE_CONNECT_EXTERNAL_BETA_STATE_CHANGED",
              "EAS_SUBMIT",
              "EXPO_LAUNCH",
              "GITHUB_PULL_REQUEST_BASE_REF_CHANGED",
              "GITHUB_PULL_REQUEST_COMMENT_CREATED",
              "GITHUB_PULL_REQUEST_COMMENT_DELETED",
              "GITHUB_PULL_REQUEST_COMMENT_EDITED",
              "GITHUB_PULL_REQUEST_EDITED",
              "GITHUB_PULL_REQUEST_LABELED",
              "GITHUB_PULL_REQUEST_OPENED",
              "GITHUB_PULL_REQUEST_READY_FOR_REVIEW",
              "GITHUB_PULL_REQUEST_REOPENED",
              "GITHUB_PULL_REQUEST_SYNCHRONIZE",
              "GITHUB_PUSH",
              "GITHUB_REF_DELETE",
              "MANUAL",
              "OBSERVE_NEW_ERROR",
              "REPACK_EXPO_GO",
              "SCHEDULE",
              "SENTRY_ISSUE_ARCHIVED",
              "SENTRY_ISSUE_ASSIGNED",
              "SENTRY_ISSUE_CREATED",
              "SENTRY_ISSUE_RESOLVED",
              "SENTRY_ISSUE_UNRESOLVED",
            ],
          },
        },
        {
          name: "--workflow",
          description:
            "Only include runs of this workflow file name (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Workflow",
          },
        },
      ],
    },
    {
      name: "workflow:insights:maestro",
      description:
        "Display Maestro test insights for a time range: pass and flake rates, per-flow stats, and a single flow's history",
      options: [
        daysOpt2,
        endOpt2,
        {
          name: "--flow",
          description:
            "Show one flow's history instead of the overview, by flow path. Cannot be combined with --status, --tag, --search, --sort, --sort-direction",
          exclusiveOn: [
            "--status",
            "--tag",
            "--search",
            "--sort",
            "--sort-direction",
          ],
          args: {
            name: "Flow",
          },
        },
        {
          name: "--git-ref",
          description:
            "Only include runs requested for this git ref, for example main or refs/heads/main, or for the full 40-character commit SHA that eas workflow:run recorded",
          args: {
            name: "Git Ref",
          },
        },
        jsonOpt,
        {
          name: "--limit",
          description:
            "The number of flows to list, or of recent runs with --flow. Defaults to 50 and is capped at 100",
          args: {
            name: "Limit",
            suggestions: generateRange(50, 100),
            default: "50",
          },
        },
        nonInteractiveOpt,
        {
          name: "--platform",
          description:
            "Only include flow runs on this platform (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Platform",
            suggestions: ["ios", "android"],
          },
        },
        projectIdOpt,
        {
          name: "--search",
          description: "Only list flows whose path contains this text",
          exclusiveOn: ["--flow"],
          args: {
            name: "Search",
          },
        },
        {
          name: "--sort",
          description: "Sort the flows table by this column",
          exclusiveOn: ["--flow"],
          args: {
            name: "Sort",
            suggestions: [
              "fails",
              "runs",
              "flakes",
              "pass-rate",
              "flake-rate",
              "p90",
              "last-run",
            ],
            default: "fails",
          },
        },
        {
          name: "--sort-direction",
          description: "Sort direction for the flows table",
          exclusiveOn: ["--flow"],
          args: {
            name: "Sort Direction",
            suggestions: ["asc", "desc"],
            default: "desc",
          },
        },
        startOpt2,
        {
          name: "--status",
          description:
            "Only include flow runs with this status (can be specified multiple times). PASSED means passed on the first attempt",
          isRepeatable: true,
          exclusiveOn: ["--flow"],
          args: {
            name: "Status",
            suggestions: ["PASSED", "FLAKY", "FAILED"],
          },
        },
        {
          name: "--tag",
          description:
            "Only include flow runs with this tag (can be specified multiple times)",
          isRepeatable: true,
          exclusiveOn: ["--flow"],
          args: {
            name: "Tag",
          },
        },
        {
          name: "--workflow",
          description:
            "Only include runs of this workflow file name (can be specified multiple times)",
          isRepeatable: true,
          args: {
            name: "Workflow",
          },
        },
      ],
    },
    {
      name: "workflow:list",
      description: "List workflows for the current project",
      hidden: true,
      options: [jsonOpt2],
    },
    {
      name: "workflow:logs",
      description:
        "View logs for a workflow run, selecting a job and step to view",
      args: {
        name: "ID",
        description: "ID of the workflow run or workflow job to view logs for",
        isOptional: true,
      },
      options: [
        {
          name: "--all-steps",
          description:
            "Print all logs, rather than prompting for a specific step. This will be automatically set when in non-interactive mode",
        },
        jsonOpt2,
        nonInteractiveOpt,
      ],
    },
    {
      name: "workflow:run",
      description: "Run an EAS workflow",
      args: {
        name: "File",
        description: "Path to the workflow file to run",
        template: "filepaths",
      },
      options: [
        {
          name: ["-F", "--input", "--field"],
          description: "Set workflow inputs",
          isRepeatable: true,
          args: {
            name: "Input",
          },
        },
        {
          name: "--git-branch",
          description: "Git branch of the uploaded project",
          exclusiveOn: ["--ref"],
          dependsOn: ["--git-commit-hash"],
          args: {
            name: "Git Branch",
          },
        },
        {
          name: "--git-commit-hash",
          description: "Git commit of the uploaded project",
          exclusiveOn: ["--ref"],
          dependsOn: ["--git-branch"],
          args: {
            name: "Git Commit Hash",
          },
        },
        jsonOpt2,
        noWaitOpt,
        nonInteractiveOpt,
        {
          name: "--ref",
          description: "Git reference to run the workflow on",
          exclusiveOn: ["--git-branch", "--git-commit-hash"],
          args: {
            name: "Ref",
          },
        },
        {
          name: "--ssh",
          description: "[EXPERIMENTAL] Enable SSH on the run",
        },
        {
          name: "--ssh-idle-timeout",
          description: "[EXPERIMENTAL] SSH idle timeout in seconds",
          args: {
            name: "Ssh Idle Timeout",
          },
        },
        {
          name: "--wait",
          description: "Wait for workflow run to complete. Defaults to false",
        },
      ],
    },
    {
      name: "workflow:runs",
      description:
        "List recent workflow runs for this project, with their IDs, statuses, and timestamps",
      options: [
        jsonOpt2,
        limit10Opt,
        {
          name: "--status",
          description:
            "If present, filter the returned runs to select those with the specified status",
          args: {
            name: "Status",
            suggestions: [
              "ACTION_REQUIRED",
              "CANCELED",
              "FAILURE",
              "IN_PROGRESS",
              "NEW",
              "SUCCESS",
              "WAITING",
            ],
          },
        },
        {
          name: "--workflow",
          description:
            "If present, the query will only return runs for the specified workflow file name",
          args: {
            name: "Workflow",
          },
        },
      ],
    },
    {
      name: "workflow:ssh",
      description:
        "[EXPERIMENTAL] open an ssh session on the worker running a workflow job",
      options: [
        {
          name: "--show-connect",
          description:
            "Print the ssh connection command (host and token) instead of opening a session",
        },
      ],
    },
    {
      name: "workflow:status",
      description: "Show the status of an existing workflow run",
      args: {
        name: "Workflow Run ID",
        description: "A workflow run ID",
        isOptional: true,
      },
      options: [
        jsonOpt2,
        noWaitOpt,
        nonInteractiveOpt,
        {
          name: "--wait",
          description: "Wait for workflow run to complete. Defaults to false",
        },
      ],
    },
    {
      name: "workflow:validate",
      description: "Validate a workflow configuration yaml file",
      args: {
        name: "Path",
        description:
          "Path to the workflow configuration YAML file (must end with .yml or .yaml)",
        template: "filepaths",
      },
      options: [nonInteractiveOpt],
    },
    {
      name: "workflow:view",
      description: "View details for a workflow run, including jobs",
      args: {
        name: "ID",
        description: "ID of the workflow run to view",
        isOptional: true,
      },
      options: [jsonOpt2, nonInteractiveOpt],
    },
  ],
};

export default completionSpec;
