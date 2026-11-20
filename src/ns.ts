// NativeScript CLI v9.1.2 (npm `nativescript` latest, 2026-11-19). Source: the published npm package, i.e. its shipped
// docs/man_pages/** (command and option docs), lib/options.js (accepted options) and the registered command tree in lib/**.
// `ns --help` was run from the package; per-command options come from the man pages, not from a live device or build run.
// `ns`, `nativescript` and `tns` are aliases of the same binary (package.json "bin"), so src/nativescript.ts and src/tns.ts re-export this spec.
// Left out: internal dev-* commands, post-install-cli and the cloud commands that come from the separate nativescript-cloud extension.

/**
 * Common options used throughout the CLI
 */
const cleanOption: Fig.Option = {
  name: "--clean",
  description: "Forces rebuilding the native application",
};

const timeoutOption: Fig.Option = {
  name: "--timeout",
  description:
    "Sets the number of seconds that the NativeScript CLI will wait for the debugger to boot. If not set, the default timeout is 90 seconds",
  args: {
    name: "seconds",
  },
};

const emulatorOption: Fig.Option = {
  name: "--emulator",
  description: "Specifies that you want to debug the app in an emulator",
};

const deviceOption: Fig.Option = {
  name: "--device",
  description: "Specifies a connected device/emulator to start and run the app",
  args: {
    name: "device id",
    // TODO: create a generator of ns device <platform> --available-devices
    // generators: {
    //   script: ["ns", "devices", "--json"],
    //   postProcess: (output) => {
    //     return [{
    //       name: "test1",
    //       description: "Test 1"
    //     }]
    //   },
    // },
  },
};

const forceOption: Fig.Option = {
  name: "--force",
  description:
    "Skips the application compatibility checks and forces npm i to ensure all dependencies are installed",
};

const noHmrOption: Fig.Option = {
  name: "--no-hmr",
  description: "Disables Hot Module Replacement (HMR)",
};

const frameworkPathOption: Fig.Option = {
  name: "--framework-path",
  description:
    "Sets the path to a NativeScript runtime for the specified platform that you want to use instead of the default runtime. <File Path> must point to a valid npm package",
  args: {
    name: "path",
    template: "filepaths",
  },
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Show the output of the command in JSON format",
};

const justLaunchOption: Fig.Option = {
  name: "--justlaunch",
  description: "Does not print the application output in the console",
};

const releaseOption: Fig.Option = {
  name: "--release",
  description:
    "Produces a release build by running webpack in production mode and native build in release mode. Otherwise, produces a debug build",
};

const bundleOption: Fig.Option = {
  name: "--bundle",
  description:
    "Has no effect any more, the bundler is selected with the bundler key of the project's NativeScript configuration",
  deprecated: true,
};

const helpOption = (label: string): Fig.Option => {
  return {
    name: ["--help", "-h"],
    description: `Show help for the ${label} subcommand`,
    priority: 0,
  };
};

const deviceTimeoutOption: Fig.Option = {
  name: "--timeout",
  description:
    "Sets the time in milliseconds for the operation to search for connected devices before completing. If not set, the default value is 4000",
  args: {
    name: "milliseconds",
  },
};

const noWatchOption: Fig.Option = {
  name: "--no-watch",
  description:
    "Changes in your code will not be reflected during the execution of this command",
};

const hmrOption: Fig.Option = {
  name: "--hmr",
  description: "Enables the hot module replacement (HMR) feature",
};

const gradleFlavorOption: Fig.Option = {
  name: "--gradleFlavor",
  description:
    "Builds the given product flavor, when the app declares any. For example, --gradleFlavor foo runs the assembleFooDebug/assembleFooRelease gradle task instead of assembleDebug/assembleRelease",
  args: {
    name: "flavor",
  },
};

const copyToOption = (extension?: string): Fig.Option => ({
  name: "--copy-to",
  description: extension
    ? `Specifies the file path where the built ${extension} will be copied. If it points to a non-existent directory path, it will be created. If the specified value is existing directory, the original file name will be used`
    : "Copies the generated typings to the specified folder",
  args: {
    name: "path",
    template: "folders",
  },
});

const teamIdOption: Fig.Option = {
  name: "--team-id",
  description:
    "Specifies the team id for which Xcode will try to find distribution certificate and provisioning profile when exporting for AppStore submission",
  args: {
    name: "team id",
  },
};

const appleCredentialArgs: Fig.Arg[] = [
  {
    name: "apple id",
    description:
      "Apple ID for logging in iTunes Connect. If you do not provide it when running the command, the NativeScript CLI will prompt you to provide it",
    isOptional: true,
  },
  {
    name: "password",
    description: "Password for logging in iTunes Connect",
    isOptional: true,
  },
];

const appleUploadOptions: Fig.Option[] = [
  {
    name: "--ipa",
    description: "Use the provided .ipa file instead of building the project",
    args: {
      name: "ipa file path",
      template: "filepaths",
    },
  },
  {
    name: "--appleApplicationSpecificPassword",
    description:
      "Specifies the password for accessing the information you store in iTunes Transporter application",
    args: {
      name: "password",
    },
  },
  {
    name: "--appleSessionBase64",
    description:
      "The session that will be used instead of triggering a new login each time NativeScript CLI communicates with Apple's APIs",
    args: {
      name: "base64",
    },
  },
];

const appleUploadArgs: Fig.Arg[] = [
  ...appleCredentialArgs,
  {
    name: "mobile provisioning profile identifier",
    description:
      "The identifier of the mobile provision(e.g. d5d40f61-b303-4fc8-aea3-fbb229a8171c) which will be used for building. This can easily be acquired through the iPhone Configuration Utility",
    isOptional: true,
  },
  {
    name: "code sign identity",
    description:
      "The code sign identity which will be used for building. You can set it to something generic like 'iPhone Distribution' to let the build automatically detect a code sign identity",
    isOptional: true,
  },
];

/**
 * Platform options used across many commands of the CLI
 */
const androidGeneralOptions: Fig.Option[] = [
  {
    name: "--aab",
    description:
      "Specifies that the command will produce and deploy an Android App Bundle",
  },
  {
    name: "--env.snapshot",
    description:
      "Creates a V8 Snapshot decreasing the app start time (only for release builds for Android)",
    dependsOn: ["--release"],
  },
  {
    name: "--env.compileSnapshot",
    description:
      "Compiles the static assets produced by --env.snapshot into .so files allowing the native build to split them per architecture. This will reduce the app size when using the --aab option",
    dependsOn: ["--env.snapshot", "--aab"],
  },
  {
    name: "--env.appComponents",
    description: "Allows passing additional App Components for android",
  },
];

const androidKeyOptions: Fig.Option[] = [
  {
    name: "--key-store-path",
    description:
      "Specifies the file path to the keystore file (P12) which you want to use to code sign your APK",
    args: {
      name: "path",
      template: "filepaths",
    },
    dependsOn: ["--release"],
  },
  {
    name: "--key-store-password",
    description:
      "Provides the password for the keystore file specified with --key-store-path",
    args: {
      name: "password",
    },
    dependsOn: ["--release"],
  },
  {
    name: "--key-store-alias",
    description:
      "Provides the alias for the keystore file specified with --key-store-path",
    args: {
      name: "alias",
    },
    dependsOn: ["--release"],
  },
  {
    name: "--key-store-alias-password",
    description:
      "Provides the password for the alias specified with --key-store-alias-password",
    args: {
      name: "alias password",
    },
    dependsOn: ["--release"],
  },
];

const platformEnvOptions: Fig.Option[] = [
  {
    name: "--env.aot",
    description: "Creates an Ahead-Of-Time build (Angular only)",
  },
  {
    name: "--env.uglify",
    description: "Provides basic obfuscation and smaller app size",
  },
  {
    name: "--env.report",
    description:
      "Creates a Webpack report inside a /report folder in the root folder",
  },
  {
    name: "--env.sourceMap",
    description: "Creates inline source maps",
  },
  {
    name: "--env.hiddenSourceMap",
    description:
      "Creates sources maps in the root folder (useful for Crashlytics usage with bundled app in release)",
  },
  {
    name: "--env.verbose",
    description: "Prints verbose logs and the internal config before building",
  },
  {
    name: "--env.production",
    description: "Enable production mode (will minify the code)",
  },
  {
    name: "--env.replace=from:to",
    description:
      "Add file replacement rules. For source files (.js and .ts) this will add a new alias to the config, for everything else, this will add a new copy rule",
    insertValue: "--env.replace={cursor}:",
    requiresSeparator: true,
  },
];

const platformGeneralOptions: Fig.Option[] = [
  ...platformEnvOptions,
  noHmrOption,
  forceOption,
  deviceOption,
  cleanOption,
  emulatorOption,
  timeoutOption,
];

/**
 * Defined a map of shared options for various commands
 * Some commands have slightly varied options.
 */
const platformOptions = {
  // NOTE: used like so:
  // ...platformOption.<command>.both
  // ...platformOption.<command>.ios

  run: {
    both: [
      ...platformGeneralOptions,
      justLaunchOption,
      noWatchOption,
      releaseOption,
      bundleOption,
    ],
    ios: [
      {
        name: "--sdk",
        description: "Specifies the target simulator's sdk",
        args: {
          name: "sdk",
        },
      },
    ],
    android: [
      ...androidGeneralOptions,
      ...androidKeyOptions,
      gradleFlavorOption,
    ],
  },
  debug: {
    both: [
      ...platformGeneralOptions,
      {
        name: "--debug-brk",
        description:
          "Prepares, builds and deploys the application package on a device or in an emulator, and stops at the first JavaScript line until either the debugger frontend connects or a 30 seconds timeout elapses",
      },
      {
        name: "--start",
        description: "Attaches the debug tools to a deployed and running app",
      },
      noWatchOption,
    ],
    ios: [
      {
        name: "--no-client",
        description:
          "The NativeScript CLI attaches the debug tools but does not launch the developer tools in Safari. Could be used on already started Safari Web Inspector",
      },
      {
        name: "--inspector",
        description:
          "The developer tools in the Safari Web Inspector are used for debugging the application",
      },
      {
        name: "--chrome",
        description:
          "Allows debugging in Chrome Developer Tools. This is the default behavior, so the option is not needed any more",
        deprecated: true,
      },
    ],
    android: [...androidGeneralOptions, gradleFlavorOption],
  },
  test: {
    both: [
      {
        name: "--watch",
        description:
          "When you save changes to the project, changes are automatically synchronized to the connected device and tests are re-run",
      },
      {
        name: "--debug-brk",
        description:
          "Runs the tests under the debugger. The debugger will break just before your tests are executed, so you have a chance to place breakpoints",
      },
      justLaunchOption,
      forceOption,
      deviceOption,
      emulatorOption,
    ],
    ios: [],
    android: androidGeneralOptions,
  },
  build: {
    both: [
      ...platformEnvOptions,
      releaseOption,
      copyToOption(".ipa|.apk"),
      forceOption,
      cleanOption,
      deviceOption,
    ],
    android: [
      ...androidGeneralOptions,
      {
        name: "--compileSdk",
        description:
          "Sets the Android SDK that will be used to build the project. The minimum supported SDK is 28",
        args: {
          name: "api level",
        },
      },
      ...androidKeyOptions,
      gradleFlavorOption,
    ],
    ios: [
      {
        name: "--for-device",
        description:
          "Produces an application package that you can deploy on device. Otherwise, produces a build that you can run only in the native iOS Simulator",
      },
      {
        name: "--i-cloud-container-environment",
        description:
          "Adds the passed iCloudContainerEnvironment when exporting an application package with the --for-device option",
        dependsOn: ["--for-device"],
      },
      {
        name: "--team-id",
        description:
          "If used without parameter, lists all team names and ids. If used with team name or id, it will switch to automatic signing mode and configure the .xcodeproj file of your app. In this case .xcconfig should not contain any provisioning/team id flags",
        args: {
          name: "team id",
          isOptional: true,
        },
      },
      {
        name: "--provision",
        description:
          "If used without parameter, lists all eligible provisioning profiles. If used with UUID or name of your provisioning profile, it will switch to manual signing mode and configure the .xcodeproj file of your app",
        args: {
          name: "uuid",
          isOptional: true,
        },
      },
    ],
  },
  deploy: {
    both: [
      deviceOption,
      cleanOption,
      forceOption,
      releaseOption,
      ...platformEnvOptions,
    ],
    ios: [],
    android: [...androidGeneralOptions, ...androidKeyOptions],
  },
};

// General Commands
const helpCommand: Fig.Subcommand = {
  name: "help",
  description:
    "Opens the command reference for all commands in your browser or shows information about the selected command in the browser",
  args: {
    name: "command",
    description: "A command as listed by ns help",
    isOptional: true,
  },
  options: [helpOption("help")],
};

const infoCommand: Fig.Subcommand = {
  name: "info",
  description:
    "Displays version information about the NativeScript CLI, core modules, and runtimes",
  options: [helpOption("info")],
};

const updateCommand: Fig.Subcommand = {
  name: "update",
  description:
    "Updates the project with the latest versions of iOS/Android runtimes, cross-platform modules and @nativescript/webpack",
  isDangerous: true,
  subcommands: [
    {
      name: "next",
      description: "The latest development release",
    },
  ],
  args: {
    name: "version",
    description: "The version to update the project to",
    isOptional: true,
  },
  options: [helpOption("update")],
};

const packageManagerCommand: Fig.Subcommand = {
  name: "package-manager",
  description: "Prints the value of the current package manager",
  subcommands: [
    {
      name: "get",
      description: "Prints the value of the current package manager",
    },
    {
      name: "set",
      description:
        "Enables the specified package manager for the NativeScript CLI",
      args: {
        name: "package manager",
        suggestions: ["npm", "pnpm", "yarn", "yarn2", "bun"],
      },
    },
  ],
  options: [helpOption("package-manager")],
};

const doctorCommand: Fig.Subcommand = {
  name: "doctor",
  description:
    "Checks your system for configuration problems which might prevent the NativeScript CLI from working properly for the specified platform, if configured",
  subcommands: [
    {
      name: "android",
      description: "Check your system configuration for android",
    },
    {
      name: "ios",
      description: "Check your system configuration for ios",
    },
  ],
  options: [helpOption("doctor")],
};

const migrateCommand: Fig.Subcommand = {
  name: "migrate",
  description:
    "Migrates the app dependencies to a form compatible with NativeScript 6.0",
  isDangerous: true,
  options: [helpOption("migrate")],
};

const proxyCommand: Fig.Subcommand = {
  name: "proxy",
  description: "Displays the current proxy settings of the NativeScript CLI",
  subcommands: [
    {
      name: "clear",
      description:
        "Clears the currently configured proxy settings of the NativeScript CLI",
    },
    {
      name: "set",
      description: "Sets the proxy settings of the NativeScript CLI",
      args: [
        {
          name: "proxy url",
          description:
            "Full url of the proxy. For example, http://127.0.0.1:8888. If you do not provide the url when running the command, the NativeScript CLI will prompt you to provide it",
          isOptional: true,
        },
        {
          name: "username",
          description:
            "Credentials for the proxy, can be set only on Windows. If you provide a username you need to provide a password too",
          isOptional: true,
        },
        {
          name: "password",
          description: "Credentials for the proxy, can be set only on Windows",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--insecure",
          description:
            "Allows insecure SSL connections and transfers to be performed. In case your proxy doesn't have a CA certificate or has an invalid one you need to use this flag",
        },
      ],
    },
  ],
  options: [helpOption("proxy")],
};

const usageReportingCommand: Fig.Subcommand = {
  name: "usage-reporting",
  description:
    "Configures anonymous usage reporting for the NativeScript CLI. All data gathered is used strictly for improving the product and will never be used to identify or contact you",
  subcommands: [
    {
      name: "status",
      description:
        "Shows the current configuration for anonymous usage reporting for the NativeScript CLI",
    },
    {
      name: "enable",
      description: "Enables anonymous usage reporting",
    },
    {
      name: "disable",
      description: "Disables anonymous usage reporting",
    },
  ],
  options: [helpOption("usage-reporting")],
  priority: 1,
};

const errorReportingCommand: Fig.Subcommand = {
  name: "error-reporting",
  description:
    "Configures anonymous error reporting for the NativeScript CLI. All data gathered is used strictly for improving the product and will never be used to identify or contact you",
  subcommands: [
    {
      name: "status",
      description:
        "Shows the current configuration for anonymous error reporting for the NativeScript CLI",
    },
    {
      name: "enable",
      description: "Enables anonymous error reporting",
    },
    {
      name: "disable",
      description: "Disables anonymous error reporting",
    },
  ],
  options: [helpOption("error-reporting")],
  priority: 1,
};

const autocompleteCommand: Fig.Subcommand = {
  name: "autocomplete",
  description:
    "Prints your current command-line completion settings. If disabled, prompts you to enable it",
  subcommands: [
    {
      name: "status",
      description: "Prints your current command-line completion settings",
    },
    {
      name: "enable",
      description:
        "Enables command-line completion for bash and zsh shells. You need to restart the shell to complete the operation",
    },
    {
      name: "disable",
      description:
        "Disables command-line completion for bash and zsh shells. You need to restart the shell to complete the operation",
    },
  ],
  options: [helpOption("autocomplete")],
};

const configCommand: Fig.Subcommand = {
  name: "config",
  description:
    "View and manage your project's NativeScript configuration stored in nativescript.config.(js|ts)",
  subcommands: [
    {
      name: "get",
      description:
        "Prints the value for a specific key from the project's NativeScript configuration",
      args: {
        name: "key",
        description:
          "The configuration key in dot-notation, for example ios.id, android.codeCache or bundler",
      },
    },
    {
      name: "set",
      description:
        "Sets the value for a specific key in the project's NativeScript configuration. Setting whole objects is not supported",
      args: [
        {
          name: "key",
          description:
            "The configuration key in dot-notation, for example ios.id, android.codeCache or bundler",
        },
        {
          name: "value",
          description:
            "The value to set. Parsed as JSON when possible (for example true, 42), otherwise treated as a string",
        },
      ],
    },
  ],
  options: [helpOption("config")],
};

const extensionCommand: Fig.Subcommand = {
  name: "extension",
  description: "Prints information about all installed extensions",
  subcommands: [
    {
      name: "install",
      description:
        "Installs the specified extension, which adds additional functionality to the NativeScript CLI",
      args: {
        name: "extension",
        description:
          "A package name (optionally with @version), a local path to a directory or .tar.gz archive, or a URL to a .tar.gz archive",
      },
    },
    {
      name: "uninstall",
      description:
        "Uninstalls the specified extension, after which you will no longer be able to use the functionality it adds to the NativeScript CLI",
      args: {
        name: "extension",
        description:
          "The name of the extension as listed in its package.json file",
      },
    },
  ],
  options: [helpOption("extension")],
};

const setupCommand: Fig.Subcommand = {
  name: "setup",
  description:
    "Run the setup script to automatically install the NativeScript dependencies and configure your environment for local builds",
  options: [helpOption("setup")],
};

// Project Development Commands
const createCommand: Fig.Subcommand = {
  name: "create",
  description:
    "Create a new Nativescript project. Press Enter for an interactive walkthrough",
  args: {
    name: "application name",
    description: "The name of the Nativescript project",
    isOptional: true,
  },
  options: [
    {
      name: "--template",
      description: "Create a project using a predefined template",
      args: {
        name: "template",
        generators: {
          script: [
            "curl",
            "-sfL",
            "https://api.github.com/repos/NativeScript/nativescript-app-templates/contents/packages",
          ],
          cache: {
            ttl: 100 * 24 * 60 * 60 * 1000, // 100days
          },
          postProcess: (output) => {
            return JSON.parse(output).map((branch) => {
              const template = branch?.name;
              return {
                name: `@nativescript/${template}`,
                description: `Template ${template}`,
              } as Fig.Suggestion;
            });
          },
        },
      },
    },
    {
      name: ["--angular", "--ng"],
      description: "Create a project using the Angular template",
    },
    {
      name: ["--react", "--reactjs"],
      description: "Create a project using the React template",
    },
    {
      name: ["--vue", "--vuejs"],
      description: "Create a project using the Vue template",
    },
    {
      name: "--svelte",
      description: "Create a project using the Svelte template",
    },
    {
      name: "--solid",
      description: "Create a project using the Solid template",
    },
    {
      name: "--vision",
      description:
        "Create a visionOS project. Combine it with a flavor flag (like --ng, --react, --solid, --svelte or --vue) to pick the flavor, otherwise the TypeScript template is used",
    },
    {
      name: "--vision-ng",
      description: "Create a visionOS project using the Angular template",
    },
    {
      name: "--vision-react",
      description: "Create a visionOS project using the React template",
    },
    {
      name: "--vision-solid",
      description: "Create a visionOS project using the Solid template",
    },
    {
      name: "--vision-svelte",
      description: "Create a visionOS project using the Svelte template",
    },
    {
      name: "--vision-vue",
      description: "Create a visionOS project using the Vue template",
    },
    {
      name: ["--typescript", "--tsc", "--ts"],
      description: "Create a project using plain TypeScript",
    },
    {
      name: ["--javascript", "--js"],
      description: "Create a project using plain JavaScript",
    },
    {
      name: "--path",
      description:
        "Specifies the directory where you want to create the project, if different from the current directory. <directory> is the absolute path to an empty directory in which you want to create the project",
      priority: 10,
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--appid",
      description:
        "Sets the application identifier of your project. <appid> is the value of the application identifier and it must meet the specific requirements of each platform that you want to target. If not specified, the application identifier is set to org.nativescript.<Project Name>. The application identifier must be a domain name in reverse",
      args: {
        name: "identifier",
      },
    },
    helpOption("create"),
  ],
};

const cleanCommand: Fig.Subcommand = {
  name: "clean",
  description: "Clean your Nativescript project",
  options: [
    {
      name: "--dry-run",
      description: "Shows what would be cleaned without deleting any files",
    },
    jsonOption,
    helpOption("clean"),
  ],
};

const previewCommand: Fig.Subcommand = {
  name: "preview",
  description:
    "Produces a QR code which can be used to preview the app on a device",
  options: [forceOption, noHmrOption, helpOption("preview")],
};

const platformCommand: Fig.Subcommand = {
  name: "platform",
  description:
    "Lists all platforms that the project currently targets. You can build and deploy your project only for these target platforms",
  subcommands: [
    {
      name: "list",
      description:
        "Lists all platforms that the project currently targets. You can build and deploy your project only for these target platforms",
    },
    {
      name: "add",
      description:
        "Configures the current project to target the selected platform",
      subcommands: [
        {
          name: "android",
          description: "The latest android platform",
          options: [frameworkPathOption],
        },
        {
          name: "android@[Version]",
          insertValue: "android@{cursor}",
          description: "The defined android platform eg. 1.0.0",
          options: [frameworkPathOption],
        },
        {
          name: "ios",
          description: "The latest ios platform",
          options: [frameworkPathOption],
        },
        {
          name: "ios@[Version]",
          insertValue: "ios@{cursor}",
          description: "The defined ios platform eg. 1.0.0",
          options: [frameworkPathOption],
        },
        {
          name: "visionos",
          description: "The latest visionOS platform",
          options: [frameworkPathOption],
        },
        {
          name: "visionos@[Version]",
          insertValue: "visionos@{cursor}",
          description: "The defined visionOS platform eg. 1.0.0",
          options: [frameworkPathOption],
        },
      ],
    },
    {
      name: "remove",
      description:
        "Removes the selected platform from the platforms that the project currently targets",
      subcommands: [
        {
          name: "android",
          description: "The latest android platform",
        },
        {
          name: "ios",
          description: "The latest ios platform",
        },
        {
          name: "visionos",
          description: "The visionOS platform",
        },
      ],
    },
    {
      name: "update",
      description:
        "Updates the NativeScript runtime for the specified platform",
      subcommands: [
        {
          name: "android",
          description: "The latest android platform",
        },
        {
          name: "ios",
          description: "The latest ios platform",
        },
        {
          name: "visionos",
          description: "The latest visionOS platform",
        },
      ],
    },
    {
      name: "clean",
      description:
        "Removes and adds the selected platform to the project. The latest platform version is installed, unless a version or --framework-path is specified",
      subcommands: [
        {
          name: "android",
          description: "Cleans the android platform",
          options: [frameworkPathOption],
        },
        {
          name: "ios",
          description: "Cleans the ios platform",
          options: [frameworkPathOption],
        },
        {
          name: "visionos",
          description: "Cleans the visionOS platform",
          options: [frameworkPathOption],
        },
      ],
    },
  ],
  options: [helpOption("platform")],
};

const runCommand: Fig.Subcommand = {
  name: "run",
  description:
    "Runs your project on all connected devices or in native emulators for the selected platform",
  subcommands: [
    {
      name: "android",
      description: "The latest android platform",
      options: [...platformOptions.run.both, ...platformOptions.run.android],
      priority: 90,
    },
    {
      name: "ios",
      description: "The latest ios platform",
      options: [...platformOptions.run.both, ...platformOptions.run.ios],
      priority: 90,
    },
    {
      name: ["visionos", "vision"],
      description: "The visionOS platform",
      options: [...platformOptions.run.both, ...platformOptions.run.ios],
      priority: 90,
    },
  ],
  options: [...platformOptions.run.both, helpOption("run")],
};

const debugCommand: Fig.Subcommand = {
  name: "debug",
  description:
    "Initiates a debugging session for your project on a connected device or native emulator",
  subcommands: [
    {
      name: "android",
      description:
        "Start a debugging session for your project on a connected Android device or Android emulator",
      options: [
        ...platformOptions.debug.both,
        ...platformOptions.debug.android,
      ],
      priority: 90,
    },
    {
      name: "ios",
      description:
        "Start a debugging session for your project on a connected iOS device or in the native iOS simulator",
      options: [...platformOptions.debug.both, ...platformOptions.debug.ios],
      priority: 90,
    },
  ],
  options: [helpOption("debug")],
};

const testCommand: Fig.Subcommand = {
  name: "test",
  description: "Runs unit tests on the selected mobile platform",
  subcommands: [
    {
      name: "init",
      description: "Configure your project for unit testing",
      options: [
        {
          name: "--framework",
          description:
            "Sets the unit testing framework to install. vitest is recommended, the Karma-based frameworks (mocha, jasmine, qunit) are deprecated",
          args: {
            name: "framework",
            suggestions: ["vitest", "mocha", "jasmine", "qunit"],
          },
        },
      ],
    },
    {
      name: "android",
      description:
        "Run unit tests on all connected android devices or native emulators",
      options: [...platformOptions.test.both, ...platformOptions.test.android],
      priority: 90,
    },
    {
      name: "ios",
      description:
        "Run unit tests on all connected ios devices or native emulators",
      options: [...platformOptions.test.both, ...platformOptions.test.ios],
      priority: 90,
    },
    {
      name: ["visionos", "vision"],
      description:
        "Run unit tests in the visionOS Simulator or on connected Apple Vision Pro devices. Requires the Vitest framework",
      options: [
        deviceOption,
        {
          name: "--env.codeCoverage",
          description: "Collects code coverage for the test run",
        },
        forceOption,
      ],
      priority: 90,
    },
  ],
  options: [helpOption("test")],
};

const pluginCommand: Fig.Subcommand = {
  name: "plugin",
  description: "Manage the plugins for your project",
  subcommands: [
    {
      name: ["add", "install"],
      description: "Installs the specified plugin and its dependencies",
      args: {
        name: "plugin",
        description:
          "A valid Nativescript plugin: a name (optionally with @version), a local path to a directory or .tar.gz archive, a URL or a git remote URL",
      },
    },
    {
      name: "remove",
      description: "Uninstalls the specified plugin and its dependencies",
      args: {
        name: "plugin",
        description: "A valid Nativescript plugin",
      },
    },
    {
      name: "update",
      description:
        "Uninstalls and installs the specified plugin(s) and its dependencies",
      args: {
        name: "plugin(s)",
        description:
          "A valid Nativescript plugin or a list of plugins. If not specified, the currently installed plugins in the project are used",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "build",
      description: "Builds the Android parts of a NativeScript plugin",
    },
    {
      name: "create",
      description: "Creates a project for building a new NativeScript plugin",
      args: {
        name: "plugin repository name",
        description: "A valid Nativescript plugin repository",
      },
      options: [
        {
          name: "--path",
          description:
            "Specifies the directory where you want to create the project, if different from the current directory",
          args: {
            name: "directory",
            description:
              "Specifies the directory where you want to create the project, if different from the current directory",
            template: "folders",
          },
        },
        {
          name: "--username",
          description:
            "Specifies the GitHub username, which will be used to build the URLs in the plugin's package.json file",
          args: {
            name: "username",
            description: "GitHub username",
          },
        },
        {
          name: "--pluginName",
          description:
            "Used to set the default file and class names in the plugin source",
          args: {
            name: "name",
          },
        },
        {
          name: "--includeTypeScriptDemo",
          description: "Specifies if a TypeScript demo should be created",
        },
        {
          name: "--includeTypeScriptDemo=n",
          description: "Specifies if TypeScript demo should NOT be created",
        },
        {
          name: "--includeAngularDemo",
          description: "Specifies if an Angular demo should be created",
        },
        {
          name: "--includeAngularDemo=n",
          description: "Specifies if Angular demo should NOT be created",
        },
        {
          name: "--template",
          description:
            "Specifies the custom seed archive, which you want to use to create your plugin",
          args: {
            name: "template",
            description: "Specifies the template for the plugin",
          },
        },
      ],
    },
  ],
  options: [helpOption("plugin")],
};

const resourcesCommand: Fig.Subcommand = {
  name: "resources",
  description: "Manage the App_Resources of your project",
  subcommands: [
    {
      name: "update",
      description:
        "Updates the App_Resources/<platform>'s internal folder structure to conform to that of an Android Studio project",
      subcommands: [
        {
          name: "android",
          description:
            "Updates the App_Resources/Android's folder structure (the default)",
        },
      ],
    },
    {
      name: "generate",
      description:
        "Generates icons or splashscreens for Android and iOS from an image",
      subcommands: [
        {
          name: "splashes",
          description:
            "Generates all splashscreens for Android and iOS platforms and places them in the correct directories under App_Resources/<platform>",
          args: {
            name: "image path",
            description:
              "Path to an image that will be used to generate all splashscreens",
            template: "filepaths",
          },
          options: [
            {
              name: "--background",
              description:
                "Sets the background color of the splashscreen. Can be a color name or a HEX value, for example #FFFFFF",
              args: {
                name: "color",
                default: "white",
              },
            },
          ],
        },
        {
          name: "icons",
          description:
            "Generates all icons for Android and iOS platforms and places them in the correct directories under App_Resources/<platform>",
          args: {
            name: "image path",
            description:
              "Path to an image that will be used to generate all icons",
            template: "filepaths",
          },
          options: [
            {
              name: "--background",
              description:
                "Sets the background color of the icon. Can be a color name or a HEX value, for example #FFFFFF",
              args: {
                name: "color",
                default: "transparent",
              },
            },
          ],
        },
      ],
    },
  ],
  options: [helpOption("resources")],
};

const prepareCommand: Fig.Subcommand = {
  name: "prepare",
  description:
    "Starts a Webpack compilation and prepares the app's App_Resources and the plugins platforms directories",
  subcommands: [
    {
      name: "android",
      description: "Prepares your project for an Android build",
      options: [hmrOption, forceOption],
    },
    {
      name: "ios",
      description: "Prepares your project for an iOS build",
      options: [hmrOption, forceOption],
    },
    {
      name: "visionos",
      description: "Prepares your project for a visionOS build",
      options: [hmrOption, forceOption],
    },
  ],
  options: [hmrOption, forceOption, helpOption("prepare")],
};

const buildCommand: Fig.Subcommand = {
  name: "build",
  description:
    "Builds the project for iOS and produces an APP or IPA that you can manually deploy in the iOS Simulator or on a device",
  subcommands: [
    {
      name: "android",
      options: [
        ...platformOptions.build.both,
        ...platformOptions.build.android,
      ],
      priority: 90,
    },
    {
      name: "ios",
      options: [...platformOptions.build.both, ...platformOptions.build.ios],
      priority: 90,
    },
    {
      name: ["visionos", "vision"],
      description: "Builds the project for visionOS",
      options: [...platformOptions.build.both, ...platformOptions.build.ios],
      priority: 90,
    },
  ],
  options: [
    ...platformOptions.build.both,
    hmrOption,
    justLaunchOption,
    helpOption("build"),
  ],
};

const deployCommand: Fig.Subcommand = {
  name: "deploy",
  description:
    "Prepares, builds and deploys the project to a connected device or native emulator. You must specify the target platform on which you want to deploy. It will deploy the app on all connected devices targeting the selected platform",
  subcommands: [
    {
      name: "android",
      options: [
        ...platformOptions.deploy.both,
        ...platformOptions.deploy.android,
      ],
      priority: 90,
    },
    {
      name: "ios",
      options: [...platformOptions.deploy.both, ...platformOptions.deploy.ios],
      priority: 90,
    },
  ],
  options: [helpOption("deploy")],
};

const installCommand: Fig.Subcommand = {
  name: "install",
  description:
    "Installs all dependencies described in a valid package.json or installs a selected NativeScript development module as a dev dependency",
  subcommands: [
    {
      name: "typescript",
      description: "Enable TypeScript support",
    },
  ],
  args: {
    name: "module",
    description:
      "Specifies a NativeScript development module by path to a local directory containing a valid npm module or by name in the npm registry",
  },
  options: [
    {
      name: "--path",
      description:
        "Specifies the directory which contains the package.json file, if different from the current directory",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    helpOption("install"),
  ],
};

const generateCommand: Fig.Subcommand = {
  name: "generate",
  description: "Modifies the project by executing a specified schematic to it",
  args: [
    {
      name: "schematic name",
      description:
        "Name of the schematic to be executed. The schematic should be specified in the used collection",
    },
    {
      name: "option=value",
      description: "Options for the executed schematic",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [
    {
      name: "--collection",
      description:
        "Specifies the node package to be used as schematics collection. If it's not specified, @nativescript/schematics will be used",
      args: {
        name: "collection",
      },
    },
    helpOption("generate"),
  ],
};

const nativeAddArg = (kind: string, example: string): Fig.Arg => ({
  name: `${kind} name`,
  description: `The name of the ${kind} to create, for example ${example}`,
});

const nativeCommand: Fig.Subcommand = {
  name: "native",
  description:
    "Commands to add native files to the application placing them in the correct directory",
  subcommands: [
    {
      name: "add",
      description:
        "Adds a newly generated native file with the specified name to the application",
      subcommands: [
        {
          name: "swift",
          description:
            "Adds a newly generated Swift file, which includes a class with the specified name",
          args: nativeAddArg("Swift class", "SomeClass"),
        },
        {
          name: "objective-c",
          description:
            "Adds newly generated Objective-C files, which include an interface with the specified name",
          args: nativeAddArg("Objective-C interface", "SomeInterface"),
        },
        {
          name: "java",
          description:
            "Adds a newly generated Java file, which includes a class with the specified name",
          args: nativeAddArg(
            "fully qualified Java class",
            "org.nativescript.SomeClass"
          ),
        },
        {
          name: "kotlin",
          description:
            "Adds a newly generated Kotlin file, which includes a class with the specified name",
          args: nativeAddArg(
            "fully qualified Kotlin class",
            "org.nativescript.SomeClass"
          ),
        },
      ],
    },
  ],
  options: [helpOption("native")],
};

const openCommand: Fig.Subcommand = {
  name: "open",
  description:
    "Opens the native project from the corresponding platforms directory. If the native project has not been generated yet, the prepare command is issued first",
  subcommands: [
    {
      name: "android",
      description: "Opens the Android project in Android Studio",
    },
    {
      name: "ios",
      description: "Opens the native iOS project in Xcode",
    },
    {
      name: ["visionos", "vision"],
      description: "Opens the native visionOS project in Xcode",
    },
  ],
  options: [helpOption("open")],
};

const widgetCommand: Fig.Subcommand = {
  name: "widget",
  description:
    "Interactively adds a new iOS widget based on a predefined template",
  subcommands: [
    {
      name: "ios",
      description:
        "Interactively adds a new iOS widget based on a predefined template",
    },
  ],
  options: [helpOption("widget")],
};

const hooksCommand: Fig.Subcommand = {
  name: "hooks",
  description: "Manages lifecycle hooks from installed plugins",
  subcommands: [
    {
      name: "install",
      description: "Installs hooks from each installed plugin dependency",
    },
    {
      name: "list",
      description:
        "Lists the plugins which have hooks and which scripts they install",
    },
    {
      name: "lock",
      description:
        "Generates a hooks-lock.json containing the hooks that are in the current versions of the plugins",
    },
    {
      name: "verify",
      description:
        "Verifies that the hooks contained in the installed plugins match those listed in the hooks-lock.json file",
    },
  ],
  options: [helpOption("hooks")],
};

const typingsCommand: Fig.Subcommand = {
  name: "typings",
  description:
    "Generates iOS and Android typings (respecting platform support, so no iOS typings are generated on Windows or Linux)",
  subcommands: [
    {
      name: "android",
      description: "Generates typings for Android",
      options: [
        {
          name: "--jar",
          description:
            "Path to a jar file to generate typings for. Can be passed multiple times",
          isRepeatable: true,
          args: {
            name: "jar",
            template: "filepaths",
          },
        },
        {
          name: "--aar",
          description:
            "Path to an aar file to generate typings for (currently unsupported)",
          args: {
            name: "aar",
            template: "filepaths",
          },
        },
        copyToOption(),
      ],
    },
    {
      name: "ios",
      description: "Generates typings for iOS",
      options: [
        {
          name: "--filter",
          description: "Regex to filter typings (currently unsupported)",
          args: {
            name: "filter",
          },
        },
        copyToOption(),
      ],
    },
  ],
  options: [helpOption("typings")],
};

const fontsCommand: Fig.Subcommand = {
  name: "fonts",
  description:
    "Lists the custom fonts (.ttf and .otf) found in the project's fonts folder along with the CSS properties to use them",
  options: [helpOption("fonts")],
};

const startCommand: Fig.Subcommand = {
  name: "start",
  description:
    "Starts an interactive session with key commands to run the app on Android, iOS and visionOS",
  options: [helpOption("start")],
};

const embedCommand: Fig.Subcommand = {
  name: "embed",
  description:
    "Prepares the project for embedding into a native host app. The host project path and module name default to the embed keys of the project's NativeScript configuration",
  args: [
    {
      name: "platform",
      description: "The platform to prepare the project for",
      suggestions: ["android", "ios", "visionos"],
    },
    {
      name: "host project path",
      description: "The path to the native host project",
      template: "folders",
      isOptional: true,
    },
    {
      name: "host project module name",
      description: "The name of the module in the host project",
      isOptional: true,
    },
  ],
  options: [helpOption("embed")],
};

// Publishing Commands
const uploadDescription =
  "Uploads project to iTunes Connect. The command either issues a production build and uploads it to iTunes Connect, or uses an already built package to upload";

const appStoreCommand: Fig.Subcommand = {
  name: "appstore",
  description:
    "Lists all application records in iTunes Connect. The list contains name, version and bundle ID for each application record",
  subcommands: [
    {
      name: "upload",
      description: uploadDescription,
      args: appleUploadArgs,
      options: appleUploadOptions,
    },
  ],
  args: appleCredentialArgs,
  options: [teamIdOption, helpOption("appstore")],
};

const publishCommand: Fig.Subcommand = {
  name: "publish",
  description: "Uploads project to an application store",
  subcommands: [
    {
      name: "ios",
      description: uploadDescription,
      args: appleUploadArgs,
      options: [...appleUploadOptions, teamIdOption],
    },
  ],
  options: [helpOption("publish")],
};

const appleLoginCommand: Fig.Subcommand = {
  name: "apple-login",
  description:
    "Uses the provided Apple credentials to obtain an Apple session which can be used when publishing to the Apple App Store",
  args: appleCredentialArgs,
  options: [helpOption("apple-login")],
};

// Devices Commands

const deviceCommand: Fig.Subcommand = {
  name: ["device", "devices"],
  description:
    "Lists all recognized connected Android or iOS devices with serial number and index, grouped by platform",
  subcommands: [
    {
      name: "android",
      description:
        "Lists all recognized connected Android physical and running Android virtual devices",
      options: [
        deviceTimeoutOption,
        {
          name: "--available-devices",
          description: "Lists all available Android devices",
        },
        jsonOption,
      ],
    },
    {
      name: "ios",
      description:
        "Lists all recognized connected iOS devices with serial number and index",
      options: [
        deviceTimeoutOption,
        {
          name: "--available-devices",
          description: "Lists all available iOS devices",
        },
        jsonOption,
      ],
    },
    {
      name: "log",
      description:
        "Opens the device log stream for a selected connected device",
      options: [deviceOption],
    },
    {
      name: "list-applications",
      description:
        "Lists the installed applications on all connected Android or iOS devices",
      options: [deviceOption],
    },
    {
      name: "run",
      description:
        "Runs the selected application on a connected Android or iOS device",
      args: {
        name: "application id",
        description: "The application identifier", //TODO: generator $ tns device list-applications.
        // generators: {
        //   script: ["ns", "device", "list-applications"],
        //   postProcess: (output) => {
        //     return JSON.parse(output).map((branch) => {
        //       const template = branch?.name;
        //       return {
        //         name: `@nativescript/${template}`,
        //         description: `Template ${template}`,
        //       } as Fig.Suggestion;
        //     });
        //   },
        // },
      },
      options: [deviceOption],
    },
    {
      name: "get-file",
      description:
        "Copies a file from the application's sandbox on a connected device to the local machine",
      hidden: true,
      args: [
        {
          name: "device file path",
          description: "The path of the file on the device",
        },
        {
          name: "application id",
          description:
            "The application identifier. Defaults to the identifier of the current project",
          isOptional: true,
        },
      ],
      options: [
        deviceOption,
        {
          name: "--file",
          description: "The local path where the file will be saved",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "put-file",
      description:
        "Copies a local file to the application's sandbox on a connected device",
      hidden: true,
      args: [
        {
          name: "local file path",
          description: "The path of the local file to copy",
          template: "filepaths",
        },
        {
          name: "device file path",
          description: "The destination path on the device",
        },
        {
          name: "application id",
          description:
            "The application identifier. Defaults to the identifier of the current project",
          isOptional: true,
        },
      ],
      options: [deviceOption],
    },
    {
      name: "list-files",
      description:
        "Lists the files at a path in the application's sandbox on a connected device",
      hidden: true,
      args: [
        {
          name: "device path",
          description: "The path on the device to list",
        },
        {
          name: "application id",
          description:
            "The application identifier. Defaults to the identifier of the current project",
          isOptional: true,
        },
      ],
      options: [deviceOption],
    },
    {
      name: "uninstall",
      description:
        "Uninstalls the selected application from a connected device",
      hidden: true,
      args: {
        name: "application id",
        description: "The application identifier",
      },
      options: [deviceOption],
    },
  ],
  options: [
    {
      name: "--available-devices",
      description: "Lists all available devices",
    },
    jsonOption,
    helpOption("device"),
  ],
};

/**
 * Command groups
 * (based off the help page when running `ns help`)
 */
const generalCommands: Array<Fig.Subcommand> = [
  helpCommand,
  autocompleteCommand,
  infoCommand,
  updateCommand,
  packageManagerCommand,
  doctorCommand,
  migrateCommand,
  usageReportingCommand,
  errorReportingCommand,
  proxyCommand,
  configCommand,
  extensionCommand,
];

const projectDevelopmentCommands: Array<Fig.Subcommand> = [
  createCommand,
  cleanCommand,
  previewCommand,
  startCommand,
  platformCommand,
  runCommand,
  debugCommand,
  testCommand,
  pluginCommand,
  resourcesCommand,
  prepareCommand,
  buildCommand,
  deployCommand,
  installCommand,
  generateCommand,
  nativeCommand,
  openCommand,
  widgetCommand,
  hooksCommand,
  typingsCommand,
  fontsCommand,
  embedCommand,
];

const publishingCommands: Array<Fig.Subcommand> = [
  appStoreCommand,
  publishCommand,
  appleLoginCommand,
];

const devicesCommand: Array<Fig.Subcommand> = [deviceCommand];

// Environment Configuration Commands
const environmentConfigurationCommands: Array<Fig.Subcommand> = [setupCommand];

const allCommands = [
  ...generalCommands,
  ...projectDevelopmentCommands,
  ...publishingCommands,
  ...devicesCommand,
  ...environmentConfigurationCommands,
];

const completionSpec: Fig.Spec = {
  name: "ns",
  description:
    "The NativeScript CLI lets you create, build, and deploy NativeScript based apps on iOS, Android and visionOS devices",
  subcommands: allCommands,
  options: [
    {
      name: ["-v", "--version"],
      description: "View your current Nativescript CLI version",
    },
    {
      name: ["--help", "-h"],
      description: "Print help about the selected command in the console",
    },
    {
      name: ["--path", "-p"],
      description:
        "Specifies the directory that contains the project. If not set, the project is searched for in the current directory and all directories above it",
      isPersistent: true,
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["--config", "-c"],
      description:
        "Specifies the name of the NativeScript configuration file to load (relative to the project directory). The default is nativescript.config.ts or nativescript.config.js (as a fallback)",
      isPersistent: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--log",
      description:
        "Sets the log level of the NativeScript CLI. trace prints a detailed diagnostic log for the execution of the current command",
      isPersistent: true,
      args: {
        name: "level",
        suggestions: ["trace", "debug", "info", "warn", "error", "fatal"],
      },
    },
  ],
};

export default completionSpec;
