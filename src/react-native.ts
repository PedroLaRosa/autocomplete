// react-native CLI v21.0.0 (@react-native-community/cli, npm latest, 2026-11-19). Source: npm tarballs read statically, nothing was executed:
// @react-native-community/cli{,-clean,-config,-doctor,-platform-android,-platform-ios,-platform-apple}@21.0.0 (command and option
// definitions in build/*.js), @react-native/community-cli-plugin@0.88.1 (start, bundle, codegen, spm) and react-native@0.88.1
// (react-native.config.js, scripts/setup-apple-spm.js). New templates still pin CLI 20.2.0, whose option sets are identical.
// Removed upstream and dropped here: link, unlink, install, uninstall, upgrade, ram-bundle, profile-hermes.
// The optional @react-native-community/cli-link-assets package (link-assets) is not part of the default command tree and is not covered.
import { filepaths } from "@tabsmith/autocomplete-generators";

const JS_ICON =
  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_js.svg";
const GRADLE_ICON =
  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_gradle.svg";
const APPLE_ICON =
  "https://developer.apple.com/library/archive/Resources/1282/Images/apple2.png";
const ANDROID_ICON = "https://www.android.com/static/images/fav/favicon.ico";

const getJsFilesAndFolders = filepaths({
  extensions: ["js"],
  editFileSuggestions: { icon: JS_ICON },
});

const workerGenerator = {
  script: ["sysctl", "-n", "hw.ncpu"],
  postProcess: (scriptOutput: string) => {
    return Array.from({ length: Number(scriptOutput) }, (_x, i) => ({
      name: `${i}`,
    }));
  },
};
const xcodeConfigGenerator = {
  script: ["bash", "-c", "xcodebuild -project ios/*.xcodeproj  -list -json"],
  postProcess: (scriptOutput: string) => {
    const configurations = JSON.parse(scriptOutput).project.configurations;

    return configurations.map((name) => ({ name }));
  },
};

const xcodeSchemeGenerator = {
  script: ["bash", "-c", "xcodebuild -project ios/*.xcodeproj  -list -json"],
  postProcess: (scriptOutput: string) => {
    const configurations = JSON.parse(scriptOutput).project.schemes;

    return configurations.map((name) => ({ name }));
  },
};

const androidGetDevicesGenerator = {
  script: ["adb", "devices"],
  postProcess: (scriptOutput: string) => {
    const devices = scriptOutput
      .split("\n")
      .filter((item) => !item.match(/^(List)|\*/))
      .filter(Boolean)
      .filter((item) => item.match(/device$/))
      .map((item) => item.split(/device/)[0].trim());
    return devices.map((item) => ({
      name: item,
      icon: ANDROID_ICON,
    }));
  },
};

type IosRecordType = { name: string };

const iosGetDevicesSimulatorGenerator = {
  script: ["xcrun", "simctl", "list", "--json", "devices", "available"],
  postProcess: (scriptOutput: string) => {
    const devices = JSON.parse(scriptOutput).devices;

    return Object.entries(devices)
      .map(([_, data]) => data)
      .reduce<Array<IosRecordType>>(
        (
          a: Array<IosRecordType>,
          b: Array<IosRecordType>
        ): Array<IosRecordType> => [...a, ...b],
        []
      )
      .map(({ name }: IosRecordType) => ({ name, icon: APPLE_ICON }));
  },
};

const iosGetDevicesGenerator = {
  script: ["xcrun", "xctrace", "list", "devices"],
  postProcess: (scriptOutput: string) => {
    const devices = scriptOutput
      .split("\n")
      .filter((item) => !item.match(/^=/))
      .filter(Boolean)
      .map((item) => item.split(/\([\w\d\-]+\)$/))
      .map(([name]) => ({ name: name.trim() }));

    return devices;
  },
};

const iosGetDevicesUdidGenerator = {
  script: ["xcrun", "xctrace", "list", "devices"],
  postProcess: (scriptOutput: string) => {
    const devices = scriptOutput
      .split("\n")
      .filter((item) => !item.match(/^=/))
      .filter(Boolean)
      .map((item) => item.split(" "))
      .map((items) =>
        items[items.length - 1].trim().replace("(", "").replace(")", "")
      )
      .map((name) => ({ name }));

    return devices;
  },
};

const gradleTasksGenerator: Fig.Generator = {
  script: ["bash", "-c", "cd android/ && ./gradlew tasks"],
  postProcess: (scriptOutput: string) => {
    const tasks = scriptOutput
      .split("\n")
      .filter((item) => item.match(/^\w+ \- |\*/))
      .map((item) => item.split(" - "))
      .map(([name, description]) => ({ name, description }));
    return tasks;
  },
};

const VERBOSE_ICON = "🔊";
const MODE_ICON = "🛠";

const BOOLEAN_SUGGESTIONS = [
  { name: "true", icon: "✅" },
  { name: "false", icon: "❌" },
];

const PLATFORM_SUGGESTIONS = [
  { name: "android", icon: ANDROID_ICON },
  { name: "ios", icon: APPLE_ICON },
];

const HERMES_ICON = "https://reactnative.dev/docs/assets/HermesLogo.svg";

// Every command registered by the CLI gets its own --verbose flag
const verboseOption: Fig.Option = {
  name: "--verbose",
  icon: VERBOSE_ICON,
  description: "Increase logging verbosity",
};

const interactiveOption = (description: string): Fig.Option => ({
  name: ["-i", "--interactive"],
  description,
});

const maxWorkersOption: Fig.Option = {
  name: "--max-workers",
  description:
    "Specifies the maximum number of workers the worker-pool will spawn for transforming files. This defaults to the number of the cores available on your machine",
  args: {
    name: "number",
    generators: workerGenerator,
  },
};

const resetCacheDescription = "Removes cached files";

const configOption: Fig.Option = {
  name: "--config",
  icon: MODE_ICON,
  description: "Path to the CLI configuration file",
  args: {
    name: "string",
    template: "filepaths",
  },
};

const metroPortOption: Fig.Option = {
  name: "--port",
  description: "Port of the Metro server (default: 8081, or RCT_METRO_PORT)",
  args: {
    name: "number",
  },
};

const noPackagerOption: Fig.Option = {
  name: "--no-packager",
  description: "Do not launch packager while running the app",
};

const terminalOption: Fig.Option = {
  name: "--terminal",
  description:
    "Launches the Metro Bundler in a new window using the specified terminal path. Defaults to the terminal program in use",
  args: {
    name: "string",
  },
};

const extraParamsOption = (tool: string): Fig.Option => ({
  name: "--extra-params",
  description: `Custom params passed to ${tool} build command`,
  args: {
    name: "string",
  },
});

const androidTasksOption = (
  defaultTask: string,
  exclusiveOn?: string[]
): Fig.Option => ({
  name: "--tasks",
  description: `Run custom Gradle tasks, comma-separated. By default it's "${defaultTask}". Will override passed mode and variant arguments`,
  icon: GRADLE_ICON,
  ...(exclusiveOn ? { exclusiveOn } : {}),
  args: {
    name: "list",
    // TODO: Ask about scripts that take longer to execute
    generators: gradleTasksGenerator,
  },
});

const androidModeOption: Fig.Option = {
  name: "--mode",
  description: "Specify your app's build variant",
  args: {
    name: "mode",
    suggestions: ["debug", "release"],
  },
};

const androidActiveArchOnlyOption: Fig.Option = {
  name: "--active-arch-only",
  description:
    "Build native libraries only for the current device architecture for debug builds",
};

const iosBuildOptions: Fig.Option[] = [
  {
    name: "--mode",
    icon: MODE_ICON,
    description:
      "Explicitly set the scheme configuration to use. This option is case sensitive",
    args: {
      name: "mode",
      // TODO: Ask about scripts that take longer to execute
      generators: xcodeConfigGenerator,
    },
  },
  {
    name: "--scheme",
    description: "Explicitly set Xcode scheme to use",
    args: {
      name: "scheme",
      generators: xcodeSchemeGenerator,
    },
  },
  {
    name: "--destination",
    description: 'Explicitly extend destination e.g. "arch=x86_64"',
    args: {
      name: "destination",
    },
  },
  {
    name: "--verbose",
    icon: VERBOSE_ICON,
    description: "Do not use xcbeautify or xcpretty even if installed",
  },
  {
    name: "--xcconfig",
    description: "Explicitly set xcconfig to use",
    args: {
      name: "xcconfig",
      template: "filepaths",
      isOptional: true,
    },
  },
  {
    name: "--buildFolder",
    description:
      'Location for iOS build artifacts. Corresponds to Xcode\'s "-derivedDataPath"',
    args: {
      name: "path",
      template: "folders",
    },
  },
  extraParamsOption("xcodebuild"),
  {
    name: "--target",
    description: "Explicitly set Xcode target to use",
    args: {
      name: "target",
    },
  },
  interactiveOption(
    "Explicitly select which scheme and configuration to use before running a build"
  ),
  {
    name: "--force-pods",
    description: "Force CocoaPods installation",
  },
  {
    name: "--only-pods",
    description: "Only install Cocoapods, do not build the app",
  },
  {
    name: "--device",
    description:
      "Explicitly set the device to use by name or by unique device identifier. If the value is not provided, the app will run on the first available physical device",
    args: {
      name: "device name",
      isOptional: true,
      generators: iosGetDevicesGenerator,
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "react-native",
  description:
    "Command line tools that ship with react-native in form of the @react-native-community/cli package",
  subcommands: [
    {
      name: "init",
      description:
        "Initialize a new React Native project named <projectName> in a directory of the same name. Android and iOS projects will use this name for publishing setup",
      options: [
        verboseOption,
        {
          name: "--version",
          description: "React Native version to install in the template",
          args: {
            name: "version",
          },
        },
        {
          name: "--template",
          description:
            "Uses a custom template. Valid arguments are the ones supported by `npm install [package]` or `yarn add [package]`, if you are using `--pm yarn` option",
          args: {
            name: "template",
          },
        },
        {
          name: "--pm",
          description:
            "Use specific package manager to initialize the project (default: the invoking package manager, else npm)",
          args: {
            name: "package manager",
            suggestions: ["npm", "yarn", "bun"],
          },
        },
        {
          name: "--directory",
          description: "Uses a custom directory instead of `<projectName>`",
          args: {
            template: "folders",
            name: "string",
          },
        },
        {
          name: "--title",
          description: "Uses a custom app title name for application",
          args: {
            name: "title",
          },
        },
        {
          name: "--skip-install",
          description: "Skips dependencies installation step",
          icon: "⏭️",
        },
        {
          name: "--install-pods",
          description:
            "Determine if CocoaPods should be installed when initializing a project. If not used, a prompt will be displayed",
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: BOOLEAN_SUGGESTIONS,
          },
        },
        {
          name: "--package-name",
          description:
            "Inits a project with a custom package name (Android) and bundle ID (iOS), e.g. com.example.app",
          args: {
            name: "package name",
          },
        },
        {
          name: "--platform-name",
          description:
            "Name of out of tree platform to be used for ex. react-native-macos. This flag is optional as it should be passed automatically by out of tree platform. It needs to match the name of the platform declared in package.json",
          args: {
            name: "platform name",
          },
        },
        {
          name: "--skip-git-init",
          description: "Skip git repository initialization",
        },
        {
          name: "--replace-directory",
          description: "Replaces the directory if it already exists",
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: BOOLEAN_SUGGESTIONS,
          },
        },
        {
          name: "--yarn-config-options",
          description:
            "Passes extra options that will be added to `.yarnrc.yml` file, format: key=value,key2=value2",
          args: {
            name: "key=value,key2=value2",
          },
        },
      ],
      args: {
        name: "projectName",
        isOptional: true,
      },
    },
    {
      name: "doctor",
      description:
        "Diagnose and fix common Node.js, iOS, Android & React Native issues",
      options: [
        verboseOption,
        {
          name: "--fix",
          description: "Attempt to fix all diagnosed issues",
        },
        {
          name: "--contributor",
          description:
            "Add healthchecks required to installations required for contributing to React Native",
        },
      ],
    },
    {
      name: "info",
      description:
        "Get relevant version info about OS, toolchain and libraries",
      options: [verboseOption],
    },
    {
      name: "config",
      description: "Print CLI configuration",
      icon: MODE_ICON,
      options: [
        verboseOption,
        {
          name: "--platform",
          description: "Output configuration for a specific platform",
          args: {
            name: "platform",
            suggestions: PLATFORM_SUGGESTIONS,
          },
        },
      ],
    },
    {
      name: "clean",
      description:
        "Cleans your project by removing React Native related caches and modules",
      options: [
        verboseOption,
        {
          name: "--include",
          description:
            "Comma-separated flag of caches to clear e.g. `npm,yarn`. If omitted, an interactive prompt will appear",
          args: {
            name: "caches",
            suggestions: [
              {
                name: "android",
                description: "Android build caches, e.g. Gradle",
              },
              {
                name: "cocoapods",
                description: "CocoaPods cache (macOS only)",
              },
              { name: "metro", description: "Metro, haste-map caches" },
              { name: "bun", description: "Bun cache" },
              {
                name: "watchman",
                description: "Stop Watchman and delete its cache",
              },
              { name: "yarn", description: "Yarn cache" },
              {
                name: "npm",
                description:
                  "`node_modules` folder in the current package, and optionally verify npm cache",
              },
            ],
          },
        },
        {
          name: "--project-root",
          description:
            "Root path to your React Native project. When not specified, defaults to current working directory",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--verify-cache",
          description:
            "Whether to verify the cache. Currently only applies to npm cache",
        },
      ],
    },
    {
      name: "start",
      description: "Start the React Native development server",
      options: [
        verboseOption,
        {
          name: "--port",
          description: "Port on which to listen to",
          args: {
            name: "number",
          },
        },
        {
          name: "--host",
          description: "Change the default host",
          args: {
            name: "host",
          },
        },
        {
          name: "--projectRoot",
          description: "Path to a custom project root",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--watchFolders",
          description:
            "Specify any additional folders to be added to the watch list",
          args: {
            template: "folders",
            name: "list",
          },
        },
        {
          name: "--assetPlugins",
          description:
            "Specify any additional asset plugins to be used by the packager by full filepath",
          args: {
            template: "filepaths",
            name: "list",
          },
        },
        {
          name: "--sourceExts",
          description:
            "Specify any additional source extensions to be used by the packager",
          args: {
            name: "list",
            suggestions: ["js", "css", "png", "xml"],
          },
        },
        maxWorkersOption,
        {
          name: "--transformer",
          description: "Specify a custom transformer to be used",
          args: {
            name: "transformer",
          },
        },
        {
          name: ["--reset-cache", "--resetCache"],
          description: resetCacheDescription,
        },
        {
          name: ["--custom-log-reporter-path", "--customLogReporterPath"],
          description:
            "Path to a JavaScript file that exports a log reporter as a replacement for TerminalReporter",
          args: {
            name: "logFile",
            generators: getJsFilesAndFolders,
          },
        },
        {
          name: "--https",
          icon: "🌐",
          description: "Enables https connections to the server",
        },
        {
          name: "--key",
          description: "Path to custom SSL key",
          args: {
            template: "filepaths",
            name: "path",
          },
        },
        {
          name: "--cert",
          description: "Path to custom SSL cert",
          args: {
            template: "filepaths",
            name: "path",
          },
        },
        configOption,
        {
          name: "--no-interactive",
          description: "Disables interactive mode",
        },
        {
          name: "--client-logs",
          description:
            "Enable plain text JavaScript log streaming for all connected apps. This feature is deprecated and will be removed in future",
          deprecated: true,
        },
      ],
    },
    {
      name: "bundle",
      description: "Build the bundle for the provided JavaScript entry file",
      options: [
        verboseOption,
        {
          name: "--entry-file",
          description:
            "Path to the root JS file, either absolute or relative to JS root",
          args: {
            name: "path",
            generators: getJsFilesAndFolders,
          },
        },
        {
          name: "--platform",
          description: 'Either "ios" or "android" (default: "ios")',
          args: {
            name: "platform",
            suggestions: PLATFORM_SUGGESTIONS,
          },
        },
        {
          name: "--transformer",
          description: "Specify a custom transformer to be used",
          args: {
            name: "transformer",
          },
        },
        {
          name: "--dev",
          description:
            "If false, warnings are disabled and the bundle is minified (default: true)",
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: BOOLEAN_SUGGESTIONS,
          },
        },
        {
          name: "--minify",
          description:
            "Allows overriding whether bundle is minified. This defaults to false if dev is true, and true if dev is false. Disabling minification can be useful for speeding up production builds for testing purposes",
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: BOOLEAN_SUGGESTIONS,
          },
        },
        {
          name: "--bundle-output",
          description:
            "File name where to store the resulting bundle, ex. /tmp/groups.bundle",
          args: {
            name: "bundle file",
            template: "filepaths",
          },
        },
        {
          name: "--bundle-encoding",
          description:
            'Encoding the bundle should be written in (https://nodejs.org/api/buffer.html#buffer_buffer). (default: "utf8")',
          args: {
            name: "encoding",
            suggestions: ["utf8", "utf16le", "latin1"],
          },
        },
        maxWorkersOption,
        {
          name: "--sourcemap-output",
          description:
            "File name where to store the sourcemap file for resulting bundle, ex. /tmp/groups.map",
          args: {
            name: "sourcemap-output",
            template: "filepaths",
          },
        },
        {
          name: "--sourcemap-sources-root",
          description:
            "Path to make sourcemap's sources entries relative to, ex. /root/dir",
          args: {
            template: "folders",
            name: "root",
          },
        },
        {
          name: "--sourcemap-use-absolute-path",
          description: "Report SourceMapURL using its full path",
        },
        {
          name: "--assets-dest",
          description:
            "Directory name where to store assets referenced in the bundle",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--unstable-transform-profile",
          description:
            "Experimental, transform JS for a specific JS engine. Currently supported: hermes, hermes-canary, default",
          args: {
            name: "transform-profile",
            suggestions: [
              { name: "hermes", icon: HERMES_ICON },
              { name: "hermes-canary", icon: HERMES_ICON },
              { name: "default" },
            ],
          },
        },
        {
          name: "--asset-catalog-dest",
          description: "Path where to create an iOS Asset Catalog for images",
          args: {
            name: "path",
            template: "folders",
            isOptional: true,
          },
        },
        {
          name: "--reset-cache",
          description: resetCacheDescription,
        },
        {
          name: "--read-global-cache",
          description:
            "Try to fetch transformed JS code from the global cache, if configured",
        },
        configOption,
        {
          name: "--resolver-option",
          description:
            "Custom resolver options of the form key=value. URL-encoded. May be specified multiple times",
          isRepeatable: true,
          args: {
            name: "key=value",
          },
        },
      ],
    },
    {
      name: "codegen",
      description:
        "Generate native code for the React Native project, for apps and libraries",
      options: [
        verboseOption,
        {
          name: "--path",
          description:
            "Path to the React Native project root (default: current directory)",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--platform",
          description: 'Target platform (default: "all")',
          args: {
            name: "platform",
            suggestions: [...PLATFORM_SUGGESTIONS, { name: "all" }],
          },
        },
        {
          name: "--outputPath",
          description: "Path where generated artifacts will be output to",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--source",
          description:
            'Whether the script is invoked from an `app` or a `library` (default: "app")',
          args: {
            name: "source",
            suggestions: ["app", "library"],
          },
        },
      ],
    },
    {
      name: "spm",
      description:
        "Set up or maintain Swift Package Manager support for the iOS/macOS app. With no action: add (or update if SPM is already set up)",
      options: [
        verboseOption,
        {
          name: "--version",
          description:
            "React Native version (e.g. 0.80.0). Defaults to the version in node_modules/react-native/package.json",
          args: {
            name: "version",
          },
        },
        {
          name: "--yes",
          description: "Skip the dirty-pbxproj confirmation prompt",
        },
        {
          name: "--xcodeproj",
          description:
            "[add] Path to the .xcodeproj to inject SPM packages into (disambiguates when several exist)",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--productName",
          description:
            "[add] App target to inject into (disambiguates when several exist)",
          args: {
            name: "name",
          },
        },
        {
          name: "--deintegrate",
          description:
            "[add] Run `pod deintegrate` and strip React Native from the Podfile before injecting (CocoaPods to SwiftPM migration)",
        },
        {
          name: "--artifacts",
          description:
            "[advanced] Local artifact root containing complete debug/ and release/ slots",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--download",
          description:
            "[advanced] Artifact download policy: auto (default), skip, or force",
          args: {
            name: "policy",
            suggestions: ["auto", "skip", "force"],
          },
        },
        {
          name: "--skipCodegen",
          description: "[advanced] Skip the react-native codegen step",
        },
      ],
      args: {
        name: "action",
        isOptional: true,
        suggestions: [
          {
            name: "add",
            description:
              "Inject SPM packages into your existing .xcodeproj, in place",
          },
          {
            name: "update",
            description:
              "Re-run the pipeline and refresh the existing injection",
          },
          {
            name: "deinit",
            description: "Remove only what `add` injected",
          },
          {
            name: "scaffold",
            description:
              "Generate Package.swift for community deps that lack SPM support",
          },
          {
            name: "sync",
            description:
              "Re-run the build-time autolinking sync and its checks",
          },
        ],
      },
    },
    {
      name: "log-ios",
      description: "Starts iOS device syslog tail",
      options: [
        verboseOption,
        interactiveOption(
          "Explicitly select simulator to tail logs from. By default it will tail logs from the first booted and available simulator"
        ),
      ],
    },
    {
      name: "log-android",
      description: "Starts logkitty",
      options: [verboseOption],
    },
    {
      name: "run-ios",
      description: "Builds your app and starts it on iOS simulator",
      options: [
        metroPortOption,
        noPackagerOption,
        terminalOption,
        {
          name: "--binary-path",
          description:
            "Path relative to project root where pre-built .app binary lives",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--list-devices",
          description:
            "List all available iOS devices and simulators and let you choose one to run the app",
        },
        {
          name: "--udid",
          description: "Explicitly set the device to use by UDID",
          args: {
            name: "udid",
            generators: iosGetDevicesUdidGenerator,
          },
        },
        {
          name: "--simulator",
          description:
            'Explicitly set the simulator to use. Optionally set the iOS version between parentheses at the end to match an exact version: "iPhone 15 (17.0)"',
          args: {
            name: "simulator",
            generators: iosGetDevicesSimulatorGenerator,
          },
        },
        ...iosBuildOptions,
      ],
    },
    {
      name: "build-ios",
      description: "Builds your app for iOS platform",
      options: iosBuildOptions,
    },
    {
      name: "run-android",
      description:
        "Builds your app and starts it on a connected Android emulator or device",
      options: [
        verboseOption,
        androidModeOption,
        androidTasksOption("installDebug", ["--binary-path"]),
        androidActiveArchOnlyOption,
        extraParamsOption("gradle"),
        interactiveOption(
          "Explicitly select build type and flavour to use before running a build"
        ),
        noPackagerOption,
        metroPortOption,
        terminalOption,
        {
          name: "--appId",
          description:
            "Specify an applicationId to launch after build. If not specified, `package` from AndroidManifest.xml will be used",
          args: {
            name: "appId",
          },
        },
        {
          name: "--appIdSuffix",
          description: "Specify an applicationIdSuffix to launch after build",
          args: {
            name: "appIdSuffix",
          },
        },
        {
          name: "--main-activity",
          description: "Name of the activity to start",
          args: {
            name: "main activity",
          },
        },
        {
          name: "--device",
          icon: ANDROID_ICON,
          description:
            "Explicitly set the device to use by name. The value is not required if you have a single device connected",
          args: {
            name: "device",
            generators: androidGetDevicesGenerator,
          },
        },
        {
          name: "--deviceId",
          icon: ANDROID_ICON,
          description:
            'Builds your app and starts it on a specific device/simulator with the given device id (listed by running "adb devices" on the command line). Deprecated, use --device',
          deprecated: true,
          args: {
            name: "deviceId",
            generators: androidGetDevicesGenerator,
          },
        },
        {
          name: "--list-devices",
          description:
            "Lists all available Android devices and simulators and let you choose one to run the app",
        },
        {
          name: "--binary-path",
          description:
            "Path relative to project root where pre-built .apk binary lives",
          exclusiveOn: ["--tasks"],
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--user",
          description: "Id of the User Profile you want to install the app on",
          args: {
            name: "number",
          },
        },
      ],
    },
    {
      name: "build-android",
      description: "Builds your app",
      options: [
        verboseOption,
        androidModeOption,
        androidTasksOption("assembleDebug"),
        androidActiveArchOnlyOption,
        extraParamsOption("gradle"),
        interactiveOption(
          "Explicitly select build type and flavour to use before running a build"
        ),
      ],
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "Output the current version",
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
