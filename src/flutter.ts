// Flutter v3.50.0 (stable per flutter_infra_release releases_linux.json, tag 3.50.0 = ab2912035e released 2026-11-11, 2026-11-19).
// Source: flutter_tools Dart arg parsers read statically from a shallow clone at tag 3.50.0 (commands/*.dart, runner/flutter_command{,_runner}.dart, runner/options/*, web/web_options.dart, features.dart); not run (downloaded binaries cannot be executed here).
// Options that are hidden unless "-v --help" is given are marked hidden: true. The "pub get/upgrade/add/remove" flags come from dart-lang/pub (fe19066, 2026-11-04, lib/src/command), which flutter forwards to;
// the other "pub" subcommands are forwarded to dart pub as-is and are listed without flags. "flutter build" extension targets and "flutter config" extension settings are dynamic and not included.

import { filepaths } from "@tabsmith/autocomplete-generators";

const flutterGenerators: Record<string, Fig.Generator> = {
  emulators: {
    script: ["flutter", "emulators"],
    postProcess: function (out) {
      return out
        .match(/.*•.*/gi)
        .map((info) => info.split("•"))
        .map((deviceInfo) => deviceInfo.map((info) => info.trim()))
        .map((device) => ({
          name: `${device[1]} • ${device[2]} • ${device[3]}`,
          icon: "📱",
          description: "Available emulators",
          insertValue: device[0],
        }));
    },
  },
  dartFiles: filepaths({ extensions: ["dart"] }),
};

const channelArg: Fig.Arg = {
  name: "channel-name",
  description:
    "Switch to <channel name>. Leave this blank to see available channels",
  isOptional: true,
  generators: {
    script: ["flutter", "channel"],
    postProcess: function (out) {
      return out
        .split("\n")
        .filter((channel) => channel.match(/\w+$/))
        .map((channel) => ({
          name: channel.trim().match(/\w+/)[0],
          active: channel.match(/\*/) != null,
        }))
        .map((channel) => ({
          name: `${channel.name}${channel.active ? " ✅" : ""}`,
          icon: "🐦",
          description: "Available channels",
          insertValue: channel.name,
        }));
    },
  },
};

// Boolean flags that can be negated with a "--no-" prefix
const toggle = (
  name: string,
  description: string,
  extra: Partial<Fig.Option> = {},
  short?: string
): Fig.Option[] => [
  {
    name: short ? [`-${short}`, `--${name}`] : `--${name}`,
    description,
    ...extra,
  },
  { name: `--no-${name}`, description: `Disable --${name}`, ...extra },
];

const machine: Fig.Option = {
  name: "--machine",
  description: "Outputs in a machine readable structured JSON format",
  hidden: true,
};
const pub: Fig.Option[] = toggle(
  "pub",
  'Whether to run "flutter pub get" before executing this command'
);
const dartDefine: Fig.Option = {
  name: ["-D", "--dart-define", "--dart-defines"],
  description:
    'Additional key-value pairs that will be available as constants from the String.fromEnvironment, bool.fromEnvironment, and int.fromEnvironment constructors. Multiple defines can be passed by repeating "--dart-define"',
  args: { name: "foo=bar" },
  isRepeatable: true,
};
const dartDefineFromFile: Fig.Option = {
  name: "--dart-define-from-file",
  description:
    "The path of a .json or .env file containing key-value pairs that will be available as environment variables",
  args: { name: "file", template: "filepaths" },
  isRepeatable: true,
};
const extraFrontEndOptions: Fig.Option = {
  name: "--extra-front-end-options",
  description:
    'A comma-separated list of additional command line arguments that will be passed directly to the Dart front end. For example, "--extra-front-end-options=--enable-experiment=nonfunction-type-aliases"',
  args: { name: "options" },
  isRepeatable: true,
  hidden: true,
};
const extraGenSnapshotOptions: Fig.Option = {
  name: "--extra-gen-snapshot-options",
  description:
    'A comma-separated list of additional command line arguments that will be passed directly to the Dart native compiler. (Requires the "--release", "--profile", or "--jit-release" flag.)',
  args: { name: "options" },
  isRepeatable: true,
  hidden: true,
};
const debug: Fig.Option = {
  name: "--debug",
  description: "Build a debug version of your app (default mode)",
};
const profile: Fig.Option = {
  name: "--profile",
  description:
    "Build a version of your app specialized for performance profiling",
};
const target: Fig.Option = {
  name: ["-t", "--target"],
  description:
    'The main entrypoint file of the application, as run on the device. If the "--target" option is omitted, but a file name is provided on the command line, then that file is used instead',
  args: {
    name: "path",
    default: "lib/main.dart",
    generators: flutterGenerators.dartFiles,
  },
};
const vmServicePort: Fig.Option = {
  name: "--vm-service-port",
  description:
    "(deprecated; use host-vmservice-port instead) Listen to the given port for a Dart VM Service connection",
  args: { name: "port" },
  deprecated: true,
  hidden: true,
};
const deviceVmservicePort: Fig.Option = {
  name: "--device-vmservice-port",
  description:
    "Look for vmservice connections only from the specified port. Specifying port 0 (the default) will accept the first vmservice discovered",
  args: { name: "port" },
};
const hostVmservicePort: Fig.Option = {
  name: "--host-vmservice-port",
  description:
    "When a device-side vmservice port is forwarded to a host-side port, use this value as the host port. Specifying port 0 (the default) will find a random free host port",
  args: { name: "port" },
};
const ipv6: Fig.Option = {
  name: "--ipv6",
  description:
    "Binds to IPv6 localhost instead of IPv4 when the flutter tool forwards the host port to a device port",
  hidden: true,
};
const outputDill: Fig.Option = {
  name: "--output-dill",
  description: "Specify the path to frontend server output kernel file",
  args: { name: "file", template: "filepaths" },
  hidden: true,
};
const filesystemRoot: Fig.Option = {
  name: "--filesystem-root",
  description:
    'Specify the path that is used as the root of a virtual file system during compilation. The input file name should be specified as a URL using the scheme given in "--filesystem-scheme"',
  args: { name: "directory", template: "folders" },
  isRepeatable: true,
  hidden: true,
};
const filesystemScheme: Fig.Option = {
  name: "--filesystem-scheme",
  description:
    'Specify the scheme that is used for virtual file system used in compilation. See also the "--filesystem-root" option',
  args: { name: "filesystem-scheme", default: "org-dartlang-root" },
  hidden: true,
};
const deviceUser: Fig.Option = {
  name: "--device-user",
  description:
    'Identifier number for a user or work profile on Android only. Run "adb shell pm list users" for available identifiers',
  args: { name: "user id" },
};
const enableExperiment: Fig.Option = {
  name: "--enable-experiment",
  description:
    'The name of an experimental Dart feature to enable. Multiple experiments can be enabled by repeating "--enable-experiment"',
  args: { name: "experiment" },
  isRepeatable: true,
  hidden: true,
};
const initializeFromDill: Fig.Option = {
  name: "--initialize-from-dill",
  description:
    "Initializes the resident compiler with a specific kernel file instead of the default cached location",
  args: { name: "file", template: "filepaths" },
  hidden: true,
};
const assumeInitializeFromDillUpToDate: Fig.Option[] = toggle(
  "assume-initialize-from-dill-up-to-date",
  "If set, assumes that the file passed in initialize-from-dill is up to date and skip the check and potential invalidation of files",
  { hidden: true }
);
const nativeAssetsYamlFile: Fig.Option = {
  name: "--native-assets-yaml-file",
  description:
    "Initializes the resident compiler with a custom native assets yaml file instead of the default cached location",
  args: { name: "file", template: "filepaths" },
  hidden: true,
};
const pidFile: Fig.Option = {
  name: "--pid-file",
  description:
    "Specify a file to write the process ID to. You can send SIGUSR1 to trigger a hot reload and SIGUSR2 to trigger a hot restart. The file is created when the signal handlers are hooked and deleted when they are removed",
  args: { name: "path", template: "filepaths" },
};
const reportReady: Fig.Option[] = toggle(
  "report-ready",
  'Print "ready" to the console after handling a keyboard command. This is primarily useful for tests and other automation, but consider using "--machine" instead',
  { hidden: true }
);
const trackWidgetCreation: Fig.Option[] = toggle(
  "track-widget-creation",
  "Track widget creation locations. This enables features such as the widget inspector. This parameter is only functional in debug mode (i.e. when compiling JIT, not AOT)",
  { hidden: true }
);
const ddsPort: Fig.Option = {
  name: "--dds-port",
  description:
    "When this value is provided, the Dart Development Service (DDS) will be bound to the provided port. Specifying port 0 (the default) will find a random free port",
  args: { name: "port", default: "0" },
};
const dds: Fig.Option[] = toggle(
  "dds",
  "Enable the Dart Developer Service (DDS)"
);
const disableDds: Fig.Option[] = toggle(
  "disable-dds",
  '(deprecated; use "--no-dds" instead) Disable the Dart Developer Service (DDS)',
  { deprecated: true, hidden: true }
);
const devtools: Fig.Option[] = toggle(
  "devtools",
  'Enable (or disable, with "--no-devtools") the launching of the Flutter DevTools debugger and profiler. If "--no-devtools" is specified, "--devtools-server-address" is ignored',
  { hidden: true }
);
const devtoolsServerAddress: Fig.Option = {
  name: "--devtools-server-address",
  description:
    "When this value is provided, the Flutter tool will not spin up a new DevTools server instance, and will instead use the one provided at the given address",
  args: { name: "address" },
  hidden: true,
};
const deviceTimeout: Fig.Option = {
  name: "--device-timeout",
  description:
    "Time in seconds to wait for devices to attach. Longer timeouts may be necessary for networked devices",
  args: { name: "seconds" },
};
const deviceConnection: Fig.Option = {
  name: "--device-connection",
  description: "Discover devices based on connection type",
  args: {
    name: "device-connection",
    default: "both",
    suggestions: [
      {
        name: "attached",
        description:
          "Only searches for devices connected by USB or built-in (such as simulators/emulators, MacOS/Windows, Chrome)",
      },
      {
        name: "wireless",
        description:
          "Only searches for devices connected wirelessly. Discovering wireless devices may take longer",
      },
      {
        name: "both",
        description: "Searches for both attached and wireless devices",
      },
    ],
  },
};
const adbLogFiltering: Fig.Option[] = toggle(
  "adb-log-filtering",
  "Filter adb logs so that logs not emitted by the current flutter application are not displayed",
  { hidden: true }
);
const fatalWarnings: Fig.Option[] = toggle(
  "fatal-warnings",
  "Causes the command to fail if warnings are sent to the console during its execution",
  { hidden: true }
);
const androidGradleDaemon: Fig.Option[] = toggle(
  "android-gradle-daemon",
  "Whether to enable the Gradle daemon when performing an Android build",
  { hidden: true }
);
const androidSkipBuildDependencyValidation: Fig.Option[] = toggle(
  "android-skip-build-dependency-validation",
  "Skips Android Gradle project dependency verification",
  { hidden: true }
);
const androidProjectArg: Fig.Option = {
  name: ["-P", "--android-project-arg", "--android-project-args"],
  description:
    'Additional arguments specified as key=value that are passed directly to the gradle project via the -P flag. These can be accessed in build.gradle via the "project.property" API',
  args: { name: "key=value" },
  isRepeatable: true,
  hidden: true,
};
const androidProjectCacheDir: Fig.Option = {
  name: "--android-project-cache-dir",
  description:
    "In an Android build, this flag allows the Gradle project cache directory to be specified to an absolute path. Setting this is roughly equivalent to setting the GRADLE_PROJECT_CACHE_DIR environment variable",
  args: { name: "directory", template: "folders" },
  hidden: true,
};
const treeShakeIcons: Fig.Option[] = toggle(
  "tree-shake-icons",
  "Tree shake icon fonts so that only glyphs used by the application are included"
);
const flavor: Fig.Option = {
  name: "--flavor",
  description:
    "Build a custom app flavor as defined by platform-specific build setup. Supports the use of product flavors in Android Gradle scripts, and the use of custom Xcode schemes",
  args: { name: "flavor" },
};
const buildNumber: Fig.Option = {
  name: "--build-number",
  description:
    "An identifier used as an internal version number. Each build must have a unique identifier to differentiate it from previous builds",
  args: { name: "build number" },
};
const output: Fig.Option = {
  name: ["-o", "--output", "--output-dir"],
  description:
    "The absolute path to the directory where the repository is generated. By default, this is <current-directory>/build/<target-platform>. Currently supported for subcommands: aar, web",
  args: { name: "directory", template: "folders" },
};
const splitDebugInfo: Fig.Option = {
  name: "--split-debug-info",
  description:
    "In a release build, this flag reduces application size by storing Dart program symbols in a separate file on the host rather than in the application",
  args: { name: "directory", template: "folders" },
};
const obfuscate: Fig.Option[] = toggle(
  "obfuscate",
  "In a release build, this flag removes identifiers and replaces them with randomized values for the purposes of source code obfuscation"
);
const buildName: Fig.Option = {
  name: "--build-name",
  description:
    'A "x.y.z" string used as the version number shown to users. For each new version of your app, you will provide a version number to differentiate it',
  args: { name: "x.y.z" },
};
const debugApk: Fig.Option = {
  name: "--debug",
  description: "Build a debug version of your app",
};
const release: Fig.Option = {
  name: "--release",
  description: "Build a release version of your app",
};
const jitRelease: Fig.Option = {
  name: "--jit-release",
  description: "Build a JIT release version of your app",
};
const shrink: Fig.Option[] = toggle(
  "shrink",
  "This flag has no effect. Code shrinking is always enabled in release builds. To learn more, see: https://developer.android.com/studio/build/shrink-code",
  { hidden: true }
);
const performanceMeasurementFile: Fig.Option = {
  name: "--performance-measurement-file",
  description: "Output file name for performance measurement file",
  args: { name: "file", template: "filepaths" },
};
const analyzeSize: Fig.Option[] = toggle(
  "analyze-size",
  'Whether to produce additional profile information for artifact output size. This flag is only supported on "--release" builds'
);
const codeSizeDirectory: Fig.Option = {
  name: "--code-size-directory",
  description:
    "The location to write code size analysis files. If this is not specified, files are written to a temporary directory under the build directory",
  args: { name: "directory", template: "folders" },
};
const ignoreDeprecation: Fig.Option = {
  name: "--ignore-deprecation",
  description:
    "Indicates that the app should ignore deprecation warnings and continue to build using deprecated APIs. Use of this flag may cause your app to fail to build when deprecated APIs are removed",
};
const enableHcpp: Fig.Option[] = toggle(
  "enable-hcpp",
  "Enable the use of the HCPP platform view rendering mode on the Impeller rendering backend",
  { hidden: true }
);
const targetPlatform: Fig.Option = {
  name: "--target-platform",
  description: "The target platform for which the app is compiled",
  args: {
    name: "target-platform",
    suggestions: ["android-arm", "android-arm64", "android-x64"],
  },
  isRepeatable: true,
};
const jitReleaseBundle: Fig.Option = {
  name: "--jit-release",
  description: "Build a JIT release version of your app",
  hidden: true,
};
const codesign: Fig.Option[] = toggle(
  "codesign",
  "Codesign the application bundle (only available on device builds)"
);
const publishPort: Fig.Option[] = toggle(
  "publish-port",
  "Publish the VM service port over mDNS. Disable to prevent the local network permission app dialog in debug and profile build modes (iOS devices only)",
  { hidden: true }
);
const configOnly: Fig.Option[] = toggle(
  "config-only",
  "Update the project configuration without performing a build. This can be used in CI/CD process that create an archive to avoid performing duplicate work"
);
const codesignIosFramework: Fig.Option[] = toggle(
  "codesign",
  "Whether to code-sign XCFrameworks"
);
const codesignIdentity: Fig.Option = {
  name: "--codesign-identity",
  description: "The identity to use for code-signing XCFrameworks",
  args: { name: "codesign-identity" },
};
const debugIosFramework: Fig.Option[] = toggle(
  "debug",
  "Whether to produce a framework for the debug build configuration. By default, all build configurations are built"
);
const profileIosFramework: Fig.Option[] = toggle(
  "profile",
  "Whether to produce a framework for the profile build configuration. By default, all build configurations are built"
);
const releaseIosFramework: Fig.Option[] = toggle(
  "release",
  "Whether to produce a framework for the release build configuration. By default, all build configurations are built"
);
const cocoapods: Fig.Option[] = toggle(
  "cocoapods",
  "Produce a Flutter.podspec instead of an engine Flutter.xcframework (recommended if host app uses CocoaPods)"
);
const plugins: Fig.Option[] = toggle(
  "plugins",
  "Whether to produce frameworks for the plugins. This is intended for cases where plugins are already being built separately"
);
const staticIosFramework: Fig.Option[] = toggle(
  "static",
  "Build plugins as static frameworks. Link on, but do not embed these frameworks in the existing Xcode project"
);
const outputIosFramework: Fig.Option = {
  name: ["-o", "--output"],
  description: "Location to write the frameworks",
  args: { name: "directory", template: "folders" },
};
const force: Fig.Option[] = toggle(
  "force",
  "Force Flutter.podspec creation on the master channel. This is only intended for testing the tool itself",
  { hidden: true },
  "f"
);
const configOnlyLinux: Fig.Option[] = toggle(
  "config-only",
  "Update the project configuration without performing a build"
);
const baseHref: Fig.Option = {
  name: "--base-href",
  description:
    'Overrides the href attribute of the <base> tag in web/index.html. No change is done to web/index.html if this flag is not provided. The value has to start and end with a slash "/"',
  args: { name: "path" },
};
const deprecatedJsInterop: Fig.Option[] = toggle(
  "deprecated-js-interop",
  'Whether to allow the deprecated JS interop libraries (such as "dart:html", "dart:js", and "dart:js_util") when compiling to JavaScript',
  { hidden: true }
);
const wasm: Fig.Option = {
  name: "--wasm",
  description:
    "Compile to WebAssembly (with fallback to JavaScript). See https://flutter.dev/to/wasm for more information",
};
const pubCreate: Fig.Option[] = toggle(
  "pub",
  'Whether to run "flutter pub get" after the project has been created'
);
const offline: Fig.Option[] = toggle(
  "offline",
  'When "flutter pub get" is run by the create command, this indicates whether to run it in offline mode or not'
);
const overwrite: Fig.Option[] = toggle(
  "overwrite",
  "When performing operations, overwrite existing files"
);
const webDefine: Fig.Option = {
  name: "--web-define",
  description:
    "Additional key-value pairs that will be available as template variables in web/index.html and web/flutter_bootstrap.js files during development and build. Variables are replaced in the format {{VARIABLE_NAME}}",
  args: { name: "KEY=value" },
  isRepeatable: true,
};
const webResourcesCdn: Fig.Option[] = toggle(
  "web-resources-cdn",
  "Use Web static resources hosted on a CDN"
);
const nativeNullAssertions: Fig.Option[] = toggle(
  "native-null-assertions",
  "Enables additional runtime null checks in web applications to ensure the correct nullability of native (such as in dart:html) and external (such as with JS interop) types",
  { hidden: true }
);
const useApplicationBinary: Fig.Option = {
  name: "--use-application-binary",
  description:
    "Specify a pre-built application binary to use when running. For Android applications, this must be the path to an APK. For iOS applications, the path to an IPA",
  args: { name: "file", template: "filepaths" },
};
const traceStartup: Fig.Option = {
  name: "--trace-startup",
  description:
    'Trace application startup, then exit, saving the trace to a file. By default, this will be saved in the "build" directory',
};
const cacheStartupProfile: Fig.Option[] = toggle(
  "cache-startup-profile",
  "Caches the CPU profile collected before the first frame for startup analysis"
);
const verboseSystemLogs: Fig.Option = {
  name: "--verbose-system-logs",
  description: "Include verbose logging from the Flutter engine",
};
const purgePersistentCache: Fig.Option = {
  name: "--purge-persistent-cache",
  description:
    "Removes all existing persistent caches. This allows reproducing shader compilation jank that normally only happens the first time an app is run, or for reliable testing of compilation jank fixes (e.g. shader warm-up)",
};
const route: Fig.Option = {
  name: "--route",
  description: "Which route to load when running the app",
  args: { name: "route" },
};
const vmserviceOutFile: Fig.Option = {
  name: "--vmservice-out-file",
  description:
    "A file to write the attached vmservice URL to after an application is started",
  args: { name: "file", template: "filepaths" },
  hidden: true,
};
const disableServiceAuthCodes: Fig.Option = {
  name: "--disable-service-auth-codes",
  description:
    "(deprecated) Allow connections to the VM service without using authentication codes. (Not recommended! This can open your device to remote code execution attacks!)",
  deprecated: true,
  hidden: true,
};
const disableServiceOriginCheck: Fig.Option = {
  name: "--disable-service-origin-check",
  description:
    "Allow connections to the VM service from any origin. (Not recommended. This can open your device to remote code execution attacks.)",
  hidden: true,
};
const startPaused: Fig.Option[] = toggle(
  "start-paused",
  "Start in a paused mode and wait for a debugger to connect"
);
const dartFlags: Fig.Option = {
  name: "--dart-flags",
  description:
    "Pass a list of comma separated flags to the Dart instance at application startup. Flags passed through this option must be present on the allowlist defined within the Flutter engine",
  args: { name: "flags" },
  hidden: true,
};
const endlessTraceBuffer: Fig.Option = {
  name: "--endless-trace-buffer",
  description:
    'Enable tracing to an infinite buffer, instead of a ring buffer. This is useful when recording large traces. To use an endless buffer to record startup traces, combine this with "--trace-startup"',
};
const traceSystrace: Fig.Option = {
  name: "--trace-systrace",
  description:
    "Enable tracing to the system tracer. This is only useful on platforms where such a tracer is available (Android, iOS, macOS and Fuchsia)",
};
const traceToFile: Fig.Option = {
  name: "--trace-to-file",
  description:
    "Write the timeline trace to a file at the specified path. The file will be in Perfetto's proto format; it will be possible to load the file into Perfetto's trace viewer",
  args: { name: "file", template: "filepaths" },
};
const profileMicrotasks: Fig.Option = {
  name: "--profile-microtasks",
  description:
    'Enable collection of information about each microtask. Information about completed microtasks will be written to the "Microtask" timeline stream',
  hidden: true,
};
const traceSkia: Fig.Option = {
  name: "--trace-skia",
  description:
    "Enable tracing of Skia code. This is useful when debugging the raster thread (formerly known as the GPU thread)",
};
const traceAllowlist: Fig.Option = {
  name: "--trace-allowlist",
  description:
    "Filters out all trace events except those that are specified in this comma separated list of allowed prefixes",
  args: { name: "foo,bar" },
  hidden: true,
};
const traceSkiaAllowlist: Fig.Option = {
  name: "--trace-skia-allowlist",
  description:
    "Filters out all Skia trace events except those that are specified in this comma separated list of allowed prefixes",
  args: { name: "skia.gpu,skia.shaders" },
  hidden: true,
};
const enableDartProfiling: Fig.Option[] = toggle(
  "enable-dart-profiling",
  "Whether the Dart VM sampling CPU profiler is enabled. This flag is only meaningful in debug and profile builds"
);
const profileStartup: Fig.Option = {
  name: "--profile-startup",
  description:
    "Make the profiler discard new samples once the profiler sample buffer is full",
  hidden: true,
};
const enableSoftwareRendering: Fig.Option = {
  name: "--enable-software-rendering",
  description:
    "(deprecated) Enable rendering using the Skia software backend. This is useful when testing Flutter on emulators",
  deprecated: true,
  hidden: true,
};
const skiaDeterministicRendering: Fig.Option = {
  name: "--skia-deterministic-rendering",
  description:
    '(deprecated) When combined with "--enable-software-rendering", this should provide completely deterministic (i.e. reproducible) Skia rendering. This is useful for testing purposes (e.g. when comparing screenshots)',
  deprecated: true,
  hidden: true,
};
const dartEntrypointArgs: Fig.Option = {
  name: ["-a", "--dart-entrypoint-args"],
  description:
    "Pass a list of arguments to the Dart entrypoint at application startup. By default this is main(List<String> args)",
  args: { name: "argument" },
  isRepeatable: true,
};
const uninstallFirst: Fig.Option[] = toggle(
  "uninstall-first",
  "Uninstall previous versions of the app on the device before reinstalling. Currently only supported on iOS",
  { hidden: true }
);
const iosProfileDebugger: Fig.Option = {
  name: "--ios-profile-debugger",
  description:
    "Whether to attach the LLDB debugger when running in profile mode on a physical iOS device. Only available with Xcode 26",
};
const webHeader: Fig.Option = {
  name: "--web-header",
  description:
    'Additional key-value pairs that will added by the web server as headers to all responses. Multiple headers can be passed by repeating "--web-header" multiple times',
  args: { name: "header=value" },
  isRepeatable: true,
  hidden: true,
};
const webHostname: Fig.Option = {
  name: "--web-hostname",
  description:
    "The hostname that the web server will use to resolve an IP to serve from. The unresolved hostname is used to launch Chrome when using the chrome Device",
  args: { name: "hostname" },
  hidden: true,
};
const webPort: Fig.Option = {
  name: "--web-port",
  description:
    "The host port to serve the web application from. If not provided, the tool will select a random open port on the host",
  args: { name: "port" },
  hidden: true,
};
const webTlsCertPath: Fig.Option = {
  name: "--web-tls-cert-path",
  description:
    "The certificate that host will use to serve using TLS connection. If not provided, the tool will use default http scheme",
  args: { name: "file", template: "filepaths" },
};
const webTlsCertKeyPath: Fig.Option = {
  name: "--web-tls-cert-key-path",
  description:
    "The certificate key that host will use to authenticate cert. If not provided, the tool will use default http scheme",
  args: { name: "file", template: "filepaths" },
};
const webServerDebugProtocol: Fig.Option = {
  name: "--web-server-debug-protocol",
  description:
    "The protocol (SSE or WebSockets) to use for the debug service proxy when using the Web Server device and Dart Debug extension",
  args: {
    name: "web-server-debug-protocol",
    default: "ws",
    suggestions: ["sse", "ws"],
  },
  hidden: true,
};
const webServerDebugBackendProtocol: Fig.Option = {
  name: "--web-server-debug-backend-protocol",
  description:
    "The protocol (SSE or WebSockets) to use for the Dart Debug Extension backend service when using the Web Server device. Using WebSockets can improve performance but may fail when connecting through some proxy servers",
  args: {
    name: "web-server-debug-backend-protocol",
    default: "ws",
    suggestions: ["sse", "ws"],
  },
  hidden: true,
};
const webServerDebugInjectedClientProtocol: Fig.Option = {
  name: "--web-server-debug-injected-client-protocol",
  description:
    "The protocol (SSE or WebSockets) to use for the injected client when using the Web Server device. Using WebSockets can improve performance but may fail when connecting through some proxy servers",
  args: {
    name: "web-server-debug-injected-client-protocol",
    default: "ws",
    suggestions: ["sse", "ws"],
  },
  hidden: true,
};
const webAllowExposeUrl: Fig.Option[] = toggle(
  "web-allow-expose-url",
  "Enables daemon-to-editor requests (app.exposeUrl) for exposing URLs when running on remote machines",
  { hidden: true }
);
const webRunHeadless: Fig.Option[] = toggle(
  "web-run-headless",
  "Launches the browser in headless mode. Currently only Chrome supports this option",
  { hidden: true }
);
const webBrowserDebugPort: Fig.Option = {
  name: "--web-browser-debug-port",
  description:
    "The debug port the browser should use. If not specified, a random port is selected. Currently only Chrome supports this option",
  args: { name: "port" },
  hidden: true,
};
const webEnableExpressionEvaluation: Fig.Option[] = toggle(
  "web-enable-expression-evaluation",
  "Enables expression evaluation in the debugger",
  { hidden: true }
);
const webLaunchUrl: Fig.Option = {
  name: "--web-launch-url",
  description:
    'The URL to provide to the browser. Defaults to an HTTP URL with the host name of "--web-hostname", the port of "--web-port", and the path set to "/"',
  args: { name: "url" },
};
const webBrowserFlag: Fig.Option = {
  name: "--web-browser-flag",
  description: "Additional flag to pass to a browser instance at startup",
  args: { name: "flag" },
  isRepeatable: true,
  hidden: true,
};
const crossOriginIsolation: Fig.Option[] = toggle(
  "cross-origin-isolation",
  "Adds the Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy headers to the web server. These headers are required for using APIs like SharedArrayBuffer",
  { hidden: true }
);
const enableImpeller: Fig.Option[] = toggle(
  "enable-impeller",
  "Whether to enable the Impeller rendering engine. Impeller is the default renderer on iOS. On Android, Impeller is available but not the default. This flag will cause Impeller to be used on Android",
  { hidden: true }
);
const enableFlutterGpu: Fig.Option[] = toggle(
  "enable-flutter-gpu",
  'Whether to enable the Flutter GPU API (https://api.flutter.dev/flutter/flutter_gpu/). This feature is only supported with the Impeller rendering engine, which can be enabled via the "--enable-impeller" option',
  { hidden: true }
);
const enableVulkanValidation: Fig.Option[] = toggle(
  "enable-vulkan-validation",
  "Enable vulkan validation on the Impeller rendering backend if Vulkan is in use and the validation layers are available to the application",
  { hidden: true }
);
const enableEmbedderApi: Fig.Option[] = toggle(
  "enable-embedder-api",
  "Whether to enable the experimental embedder API on iOS",
  { hidden: true }
);
const testFlag: Fig.Option[] = toggle(
  "test-flag",
  "No-op flag for testing purposes; use for testing flag priorities only",
  { hidden: true }
);
const offlineAdd: Fig.Option[] = toggle(
  "offline",
  "Use cached packages instead of accessing the network"
);
const dryRun: Fig.Option = {
  name: ["-n", "--dry-run"],
  description: "Report what dependencies would change but don't change any",
};
const precompile: Fig.Option[] = toggle(
  "precompile",
  "Build executables in immediate dependencies",
  { hidden: true }
);
const directory: Fig.Option = {
  name: ["-C", "--directory"],
  description: "Run this in the directory <dir>",
  args: { name: "dir", template: "folders" },
};
const example: Fig.Option[] = toggle(
  "example",
  "Also run in example/ (if it exists)"
);
const frontendServerStarterPath: Fig.Option = {
  name: "--frontend-server-starter-path",
  description:
    "When this value is provided, the frontend server will be started in JIT mode from the specified file, instead of from the AOT snapshot shipped with the Dart SDK",
  args: { name: "file", template: "filepaths" },
  hidden: true,
};

const completionSpec: Fig.Spec = {
  name: "flutter",
  description: "Manage your Flutter app development",
  subcommands: [
    {
      name: "analyze",
      description: "Analyze the project's Dart code",
      options: [
        {
          name: "--flutter-repo",
          description:
            "Include all the examples and tests from the Flutter repository",
          hidden: true,
        },
        ...toggle(
          "current-package",
          "Analyze the current project, if applicable"
        ),
        {
          name: "--dartdocs",
          description:
            "(deprecated) List every public member that is lacking documentation. This command will be removed in a future version of Flutter",
          deprecated: true,
          hidden: true,
        },
        {
          name: "--watch",
          description:
            "Run analysis continuously, watching the filesystem for changes",
        },
        {
          name: "--write",
          description:
            'Also output the results to a file. This is useful with "--watch" if you want a file to always contain the latest results',
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--dart-sdk",
          description: "The path to the Dart SDK",
          args: { name: "path-to-sdk", template: "folders" },
          hidden: true,
        },
        {
          name: "--protocol-traffic-log",
          description:
            "The path to write the request and response protocol. This is only intended to be used for debugging the tooling",
          args: { name: "path-to-protocol-traffic-log" },
          hidden: true,
        },
        ...toggle(
          "suggestions",
          "Show suggestions about the current flutter project"
        ),
        machine,
        {
          name: "--benchmark",
          description: "Also output the analysis time",
          hidden: true,
        },
        ...toggle("plugins", "Whether to enable analyzer plugins"),
        ...pub,
        ...toggle(
          "congratulate",
          'Show output even when there are no errors, warnings, hints, or lints. Ignored if "--watch" is specified'
        ),
        ...toggle(
          "preamble",
          'When analyzing the flutter repository, display the number of files that will be analyzed. Ignored if "--watch" is specified'
        ),
        ...toggle("fatal-infos", "Treat info level issues as fatal"),
        ...toggle("fatal-warnings", "Treat warning level issues as fatal"),
        {
          name: "--android",
          description:
            "Analyze Android sub-project. Used by internal tools only",
          hidden: true,
        },
        {
          name: "--ios",
          description:
            "Analyze iOS Xcode sub-project. Used by internal tools only",
          hidden: true,
        },
        {
          name: "--list-build-variants",
          description:
            "Print out a list of available build variants for the Android sub-project",
          hidden: true,
        },
        {
          name: "--output-app-link-settings",
          description:
            'Output a JSON with Android app link settings into a file. The "--build-variant" must also be set',
          hidden: true,
        },
        {
          name: "--build-variant",
          description: "Sets the Android build variant to be analyzed",
          args: { name: "build variant" },
          hidden: true,
        },
        ...toggle(
          "list-build-options",
          "Print out a list of available build options for the iOS Xcode sub-project",
          { hidden: true }
        ),
        {
          name: "--output-universal-link-settings",
          description:
            'Output a JSON with iOS Xcode universal link settings into a file. The "--configuration" and "--target" must be set',
          hidden: true,
        },
        {
          name: "--configuration",
          description: "Sets the iOS build configuration to be analyzed",
          args: { name: "configuration" },
          hidden: true,
        },
        {
          name: "--target",
          description: "Sets the iOS build target to be analyzed",
          args: { name: "target" },
          hidden: true,
        },
      ],
      args: {
        name: "directory",
        description: "Directories or files to analyze",
        isOptional: true,
        isVariadic: true,
        template: ["folders", "filepaths"],
      },
    },
    {
      name: "assemble",
      description: "Assemble and build Flutter resources",
      hidden: true,
      options: [
        {
          name: ["-d", "--define"],
          description:
            'DEPRECATED. Use "--dart-define" or "-D" instead for consistency. Allows passing configuration to a target, as in "--define=target=key=value"',
          args: { name: "target=key=value" },
          isRepeatable: true,
          deprecated: true,
          hidden: true,
        },
        dartDefine,
        dartDefineFromFile,
        {
          name: "--performance-measurement-file",
          description: "Output individual target performance to a JSON file",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-i", "--input"],
          description:
            'Allows passing additional inputs with "--input=key=value". Unlike defines, additional inputs do not generate a new configuration; instead they are treated as dependencies of the targets that use them',
          args: { name: "key=value" },
          isRepeatable: true,
        },
        {
          name: "--depfile",
          description:
            "A file path where a depfile will be written. This contains all build inputs and outputs in a Make-style syntax",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--build-inputs",
          description:
            "A file path where a newline-separated file containing all inputs used will be written after a build. This file is not included as a build input or output. This file is not written if the build fails for any reason",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--build-outputs",
          description:
            "A file path where a newline-separated file containing all outputs created will be written after a build. This file is not included as a build input or output. This file is not written if the build fails for any reason",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-o", "--output"],
          description:
            "A directory where output files will be written. Must be either absolute or relative from the root of the current Flutter project",
          args: { name: "directory", template: "folders" },
        },
        extraFrontEndOptions,
        extraGenSnapshotOptions,
        {
          name: "--resource-pool-size",
          description:
            "The maximum number of concurrent tasks the build system will run",
          args: { name: "count" },
        },
      ],
      args: {
        name: "target",
        description: "Build target to assemble",
        isVariadic: true,
      },
    },
    {
      name: "attach",
      description: "Attach to a running app",
      options: [
        debug,
        profile,
        target,
        vmServicePort,
        deviceVmservicePort,
        hostVmservicePort,
        ipv6,
        outputDill,
        filesystemRoot,
        filesystemScheme,
        {
          name: "--target-model",
          description:
            "Target model that determines what core libraries are available",
          args: {
            name: "target-model",
            default: "flutter",
            suggestions: ["flutter", "flutter_runner"],
          },
          hidden: true,
        },
        {
          name: ["-m", "--module"],
          description:
            "The name of the module (required if attaching to a fuchsia device)",
          args: { name: "module-name" },
          hidden: true,
        },
        dartDefine,
        dartDefineFromFile,
        deviceUser,
        enableExperiment,
        initializeFromDill,
        ...assumeInitializeFromDillUpToDate,
        nativeAssetsYamlFile,
        {
          name: "--debug-port",
          description:
            "(deprecated) Device port where the Dart VM Service is listening",
          args: { name: "port" },
          deprecated: true,
          hidden: true,
        },
        {
          name: ["--debug-url", "--debug-uri"],
          description: "The URL at which the Dart VM Service is listening",
          args: { name: "url" },
        },
        {
          name: "--app-id",
          description:
            "The package name (Android) or bundle identifier (iOS) for the app. This can be specified to avoid being prompted if multiple Dart VM Service ports are advertised",
          args: { name: "app id" },
        },
        pidFile,
        ...reportReady,
        {
          name: "--project-root",
          description: "Normally used only in run target",
          args: { name: "directory", template: "folders" },
          hidden: true,
        },
        machine,
        ...trackWidgetCreation,
        ddsPort,
        ...dds,
        ...disableDds,
        ...devtools,
        devtoolsServerAddress,
        deviceTimeout,
        deviceConnection,
        ...adbLogFiltering,
      ],
    },
    {
      name: ["bash-completion", "zsh-completion"],
      description: "Output command line shell completion setup scripts",
      options: [
        ...toggle(
          "overwrite",
          "Causes the given shell completion setup script to be overwritten if it already exists"
        ),
      ],
      args: { name: "output file", isOptional: true, template: "filepaths" },
    },
    {
      name: "build",
      description: "Build an executable app or install bundle",
      subcommands: [
        {
          name: "aar",
          description: "Build a repository containing an AAR and a POM file",
          options: [
            ...fatalWarnings,
            dartDefine,
            dartDefineFromFile,
            enableExperiment,
            ...androidGradleDaemon,
            ...androidSkipBuildDependencyValidation,
            androidProjectArg,
            androidProjectCacheDir,
            ...treeShakeIcons,
            flavor,
            buildNumber,
            output,
            ...pub,
            splitDebugInfo,
            ...obfuscate,
            extraFrontEndOptions,
            extraGenSnapshotOptions,
            ...trackWidgetCreation,
            ...toggle("debug", "Build a debug version of the current project"),
            ...toggle(
              "profile",
              "Build a version of the current project specialized for performance profiling"
            ),
            ...toggle(
              "release",
              "Build a release version of the current project"
            ),
            {
              name: "--target-platform",
              description:
                "The target platform for which the project is compiled",
              args: {
                name: "target-platform",
                suggestions: ["android-arm", "android-arm64", "android-x64"],
              },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "apk",
          description: "Build an Android APK file from your app",
          options: [
            ...fatalWarnings,
            ...treeShakeIcons,
            target,
            ...pub,
            buildNumber,
            buildName,
            debugApk,
            profile,
            release,
            jitRelease,
            dartDefine,
            dartDefineFromFile,
            enableExperiment,
            ...androidGradleDaemon,
            ...androidSkipBuildDependencyValidation,
            androidProjectArg,
            androidProjectCacheDir,
            flavor,
            ...shrink,
            splitDebugInfo,
            ...obfuscate,
            extraFrontEndOptions,
            extraGenSnapshotOptions,
            performanceMeasurementFile,
            ...analyzeSize,
            codeSizeDirectory,
            ...trackWidgetCreation,
            ignoreDeprecation,
            ...enableHcpp,
            {
              name: "--split-per-abi",
              description:
                "Whether to split the APKs per ABIs. To learn more, see: https://developer.android.com/studio/build/configure-apk-splits#configure-abi-split",
            },
            ...toggle(
              "config-only",
              "Generate build files used by flutter but do not build any artifacts"
            ),
            targetPlatform,
          ],
        },
        {
          name: ["appbundle", "aab"],
          description: "Build an Android App Bundle file from your app",
          options: [
            ...fatalWarnings,
            ...treeShakeIcons,
            target,
            ...pub,
            buildNumber,
            buildName,
            debugApk,
            profile,
            release,
            jitRelease,
            dartDefine,
            dartDefineFromFile,
            enableExperiment,
            ...androidGradleDaemon,
            ...androidSkipBuildDependencyValidation,
            androidProjectArg,
            androidProjectCacheDir,
            flavor,
            ...shrink,
            splitDebugInfo,
            ...obfuscate,
            extraFrontEndOptions,
            extraGenSnapshotOptions,
            performanceMeasurementFile,
            ...analyzeSize,
            codeSizeDirectory,
            ...trackWidgetCreation,
            ignoreDeprecation,
            ...enableHcpp,
            targetPlatform,
            ...toggle(
              "deferred-components",
              "Setting to false disables building with deferred components. All deferred code will be compiled into the base app, and assets act as if they were defined under the regular assets section in pubspec.yaml"
            ),
            ...toggle(
              "validate-deferred-components",
              "When enabled, deferred component apps will fail to build if setup problems are detected that would prevent deferred components from functioning properly"
            ),
          ],
        },
        {
          name: "bundle",
          description: "Build the Flutter assets directory from your app",
          options: [
            ...fatalWarnings,
            target,
            outputDill,
            filesystemRoot,
            filesystemScheme,
            buildNumber,
            debug,
            profile,
            release,
            jitReleaseBundle,
            dartDefine,
            dartDefineFromFile,
            extraFrontEndOptions,
            extraGenSnapshotOptions,
            {
              name: "--depfile",
              description:
                "A file path where a depfile will be written. This contains all build inputs and outputs in a Make-style syntax",
              args: {
                name: "file",
                default: "build/snapshot_blob.bin.d",
                template: "filepaths",
              },
            },
            {
              name: "--target-platform",
              description:
                "The architecture for which to build the application",
              args: {
                name: "target-platform",
                default: "android-arm",
                suggestions: [
                  "android-arm",
                  "android-arm64",
                  "android-x64",
                  "ios",
                  "darwin",
                  "linux-x64",
                  "linux-arm64",
                  "linux-riscv64",
                  "windows-x64",
                  "windows-arm64",
                ],
              },
            },
            {
              name: "--asset-dir",
              description:
                "The output directory for the kernel_blob.bin file, the native snapshot, the assets, etc. Can be used to redirect the output when driving the Flutter toolchain from another build system",
              args: {
                name: "directory",
                default: "build/flutter_assets",
                template: "folders",
              },
            },
            ...toggle(
              "tree-shake-icons",
              "(deprecated) Icon font tree shaking is not supported by this command",
              { deprecated: true, hidden: true }
            ),
            ...pub,
            ...trackWidgetCreation,
          ],
        },
        {
          name: "ios",
          description: "Build an iOS application bundle",
          options: [
            ...fatalWarnings,
            ...treeShakeIcons,
            target,
            ...pub,
            buildNumber,
            buildName,
            debugApk,
            profile,
            release,
            jitRelease,
            dartDefine,
            dartDefineFromFile,
            enableExperiment,
            flavor,
            splitDebugInfo,
            ...obfuscate,
            extraFrontEndOptions,
            extraGenSnapshotOptions,
            performanceMeasurementFile,
            ...analyzeSize,
            codeSizeDirectory,
            ...codesign,
            ...publishPort,
            ...configOnly,
            ...toggle(
              "simulator",
              "Build for the iOS simulator instead of the device. This changes the default build mode to debug if otherwise unspecified"
            ),
          ],
        },
        {
          name: "ios-framework",
          description:
            "Produce .xcframeworks for a Flutter project and its plugins for integration into existing, plain iOS Xcode projects",
          options: [
            ...fatalWarnings,
            dartDefine,
            dartDefineFromFile,
            enableExperiment,
            ...codesignIosFramework,
            codesignIdentity,
            ...treeShakeIcons,
            target,
            ...pub,
            splitDebugInfo,
            ...obfuscate,
            extraFrontEndOptions,
            extraGenSnapshotOptions,
            ...debugIosFramework,
            ...profileIosFramework,
            ...releaseIosFramework,
            ...cocoapods,
            ...plugins,
            ...staticIosFramework,
            outputIosFramework,
            ...force,
            flavor,
            ...toggle(
              "universal",
              "(deprecated) Produce universal frameworks that include all valid architectures",
              { deprecated: true, hidden: true }
            ),
            {
              name: "--xcframework",
              description:
                "Produce xcframeworks that include all valid architectures",
              hidden: true,
            },
          ],
        },
        {
          name: ["ipa", "xcarchive"],
          description: "Build an iOS archive bundle and IPA for distribution",
          options: [
            ...fatalWarnings,
            ...treeShakeIcons,
            target,
            ...pub,
            buildNumber,
            buildName,
            debugApk,
            profile,
            release,
            jitRelease,
            dartDefine,
            dartDefineFromFile,
            enableExperiment,
            flavor,
            splitDebugInfo,
            ...obfuscate,
            extraFrontEndOptions,
            extraGenSnapshotOptions,
            performanceMeasurementFile,
            ...analyzeSize,
            codeSizeDirectory,
            ...codesign,
            {
              name: "--export-method",
              description: "Specify how the IPA will be distributed",
              args: {
                name: "export-method",
                default: "app-store",
                suggestions: [
                  { name: "app-store", description: "Upload to the App Store" },
                  {
                    name: "ad-hoc",
                    description:
                      "Test on designated devices that do not need to be registered with the Apple developer account. Requires a distribution certificate",
                  },
                  {
                    name: "development",
                    description:
                      "Test only on development devices registered with the Apple developer account",
                  },
                  {
                    name: "enterprise",
                    description:
                      "Distribute an app registered with the Apple Developer Enterprise Program",
                  },
                ],
              },
            },
            {
              name: "--export-options-plist",
              description:
                'Export an IPA with these options. See "xcodebuild -h" for available exportOptionsPlist keys',
              args: { name: "file", template: "filepaths" },
            },
          ],
        },
        {
          name: "linux",
          description: "Build a Linux desktop application",
          options: [
            ...fatalWarnings,
            ...treeShakeIcons,
            target,
            ...pub,
            buildNumber,
            buildName,
            debugApk,
            profile,
            release,
            jitRelease,
            dartDefine,
            dartDefineFromFile,
            enableExperiment,
            flavor,
            splitDebugInfo,
            ...obfuscate,
            extraFrontEndOptions,
            extraGenSnapshotOptions,
            performanceMeasurementFile,
            ...analyzeSize,
            codeSizeDirectory,
            ...trackWidgetCreation,
            ...configOnlyLinux,
            {
              name: "--target-platform",
              description: "The target platform for which the app is compiled",
              args: {
                name: "target-platform",
                suggestions: ["linux-arm64", "linux-x64", "linux-riscv64"],
              },
            },
            {
              name: "--target-sysroot",
              description:
                "The root filesystem path of target platform for which the app is compiled. This option is valid only if the current host and target architectures are different",
              args: { name: "directory", default: "/", template: "folders" },
            },
          ],
        },
        {
          name: "macos",
          description: "Build a macOS desktop application",
          options: [
            ...fatalWarnings,
            ...treeShakeIcons,
            target,
            ...pub,
            buildNumber,
            buildName,
            debugApk,
            profile,
            release,
            jitRelease,
            dartDefine,
            dartDefineFromFile,
            enableExperiment,
            flavor,
            splitDebugInfo,
            ...obfuscate,
            extraFrontEndOptions,
            extraGenSnapshotOptions,
            performanceMeasurementFile,
            ...analyzeSize,
            codeSizeDirectory,
            ...trackWidgetCreation,
            ...configOnly,
          ],
        },
        {
          name: "macos-framework",
          description:
            "Produce .xcframeworks for a Flutter project and its plugins for integration into existing, plain macOS Xcode projects",
          options: [
            ...fatalWarnings,
            dartDefine,
            dartDefineFromFile,
            enableExperiment,
            ...codesignIosFramework,
            codesignIdentity,
            ...treeShakeIcons,
            target,
            ...pub,
            splitDebugInfo,
            ...obfuscate,
            extraFrontEndOptions,
            extraGenSnapshotOptions,
            ...debugIosFramework,
            ...profileIosFramework,
            ...releaseIosFramework,
            ...cocoapods,
            ...plugins,
            ...staticIosFramework,
            outputIosFramework,
            ...force,
          ],
        },
        {
          name: "swift-package",
          description:
            "Produce Swift packages and scripts for a Flutter project and its plugins for integration into existing, native non-Flutter iOS and macOS Xcode projects",
          options: [
            ...fatalWarnings,
            dartDefine,
            dartDefineFromFile,
            enableExperiment,
            ...codesignIosFramework,
            codesignIdentity,
            ...treeShakeIcons,
            target,
            ...pub,
            splitDebugInfo,
            ...obfuscate,
            extraFrontEndOptions,
            extraGenSnapshotOptions,
            flavor,
            {
              name: ["-o", "--output"],
              description: "Directory where the Swift package will be written",
              args: { name: "directory", template: "folders" },
            },
            {
              name: "--platform",
              description: "Target platform for the build",
              args: { name: "platform", default: "ios" },
            },
            {
              name: "--build-mode",
              description: "Build modes to include",
              args: {
                name: "build-mode",
                suggestions: ["debug", "profile", "release"],
              },
              isRepeatable: true,
            },
            ...toggle("static", "Build CocoaPods plugins as static frameworks"),
          ],
        },
        {
          name: "web",
          description: "Build a web application bundle",
          options: [
            ...fatalWarnings,
            ...treeShakeIcons,
            target,
            ...pub,
            buildNumber,
            buildName,
            debugApk,
            profile,
            release,
            jitRelease,
            dartDefine,
            dartDefineFromFile,
            enableExperiment,
            baseHref,
            {
              name: "--static-assets-url",
              description:
                'Used when serving the static assets from a different domain the application is hosted on. The value has to end with a slash "/"',
              args: { name: "url" },
            },
            {
              name: "--pwa-strategy",
              description:
                "This option is deprecated and will be removed in a future Flutter release. The caching strategy to be used by the PWA service worker",
              args: {
                name: "pwa-strategy",
                suggestions: ["offline-first", "none"],
              },
              deprecated: true,
              hidden: true,
            },
            ...toggle(
              "web-resources-cdn",
              'Use WebAssembly, CanvasKit, and other web resources from a content delivery network (CDN). Set to "--no-web-resources-cdn" to embed all web resources locally in the built app'
            ),
            {
              name: ["--web-define", "--web-defines"],
              description:
                "Additional key-value pairs that will be available as constants from the String.fromEnvironment, bool.fromEnvironment, and int.fromEnvironment constructors only when compiling for the web",
              args: { name: "KEY=value" },
              isRepeatable: true,
            },
            {
              name: "--web-define-from-file",
              description:
                "The path of a .json or .env file containing key-value pairs that will be available as environment variables only when compiling for the web",
              args: { name: "file", template: "filepaths" },
              isRepeatable: true,
            },
            {
              name: ["-O", "--optimization-level"],
              description:
                "Sets the optimization level used for Dart compilation to JavaScript/Wasm",
              args: { name: "level", suggestions: ["0", "1", "2", "3", "4"] },
            },
            ...toggle(
              "source-maps",
              "Generate a sourcemap file. These can be used by browsers to view and debug the original source code of a compiled and minified Dart application"
            ),
            ...toggle(
              "web-content-hash",
              'Include a content hash in the filenames of compiled web entrypoints (for example, "main.dart.<hash>.js") and static assets in "assets/", and emit a "precache_manifest.json" file so that browsers and custom service workers fetch new versions after a deploy instead of serving stale cached files'
            ),
            output,
            {
              name: "--csp",
              description:
                "Disable dynamic generation of code in the generated output. This is necessary to satisfy CSP restrictions (see http://www.w3.org/TR/CSP/)",
            },
            {
              name: "--dart2js-optimization",
              description:
                'Sets the optimization level used for Dart compilation to JavaScript. Deprecated: Please use "-O=<level>" / "--optimization-level=<level>"',
              args: { name: "level", suggestions: ["O1", "O2", "O3", "O4"] },
              deprecated: true,
            },
            {
              name: "--dump-info",
              description:
                'Passes "--dump-info" to the Javascript compiler which generates information about the generated code in main.dart.js.info.json',
              hidden: true,
            },
            ...toggle(
              "minify-js",
              "Generate minified output for js. If not explicitly set, uses the compilation mode (debug, profile, release)",
              { hidden: true }
            ),
            {
              name: "--no-frequency-based-minification",
              description:
                "Disables the frequency based minifier. Useful for comparing the output between builds",
              hidden: true,
            },
            ...toggle(
              "native-null-assertions",
              "Enables additional runtime null checks in web applications to ensure the correct nullability of native (such as in dart:html) and external (such as with JS interop) types"
            ),
            ...deprecatedJsInterop,
            wasm,
            ...toggle(
              "strip-wasm",
              "Whether to strip the resulting wasm file of static symbol names"
            ),
            ...toggle(
              "minify-wasm",
              "Generate minified output for wasm. If not explicitly set, uses the compilation mode (debug, profile, release)",
              { hidden: true }
            ),
            ...toggle(
              "enable-wasm-deferred-loading",
              "Enable multi-module deferred loading for Wasm",
              { hidden: true }
            ),
            ...toggle(
              "wasm-dry-run",
              "Compiles wasm in dry run mode during JS only compilations. Disable to suppress warnings"
            ),
          ],
        },
        {
          name: "windows",
          description: "Build a Windows desktop application",
          options: [
            ...fatalWarnings,
            ...treeShakeIcons,
            target,
            ...pub,
            buildNumber,
            buildName,
            debugApk,
            profile,
            release,
            jitRelease,
            dartDefine,
            dartDefineFromFile,
            enableExperiment,
            flavor,
            splitDebugInfo,
            ...obfuscate,
            extraFrontEndOptions,
            extraGenSnapshotOptions,
            performanceMeasurementFile,
            ...analyzeSize,
            codeSizeDirectory,
            ...trackWidgetCreation,
            ...configOnlyLinux,
          ],
        },
      ],
    },
    {
      name: "channel",
      description: "List or switch Flutter channels",
      options: [
        ...toggle(
          "all",
          "Include all the available branches (including local branches) when listing channels",
          { hidden: true },
          "a"
        ),
        ...toggle(
          "cache-artifacts",
          'After switching channels, download all required binary artifacts. This is the equivalent of running "flutter precache" with the "--all-platforms" flag'
        ),
        {
          name: ["-f", "--force"],
          description:
            "Force switch channels, potentially discarding local changes",
        },
      ],
      args: channelArg,
    },
    {
      name: "clean",
      description: "Delete the build/ and .dart_tool/ directories",
      options: [
        {
          name: "--scheme",
          description:
            "When cleaning Xcode schemes, clean only the specified scheme",
          args: { name: "scheme" },
        },
        {
          name: "--include-example",
          description:
            "Also clean the example directory, if one exists. Useful when developing in a package project",
        },
        {
          name: "--include-xcode-workspace",
          description:
            'Whether to run "xcodebuild clean" on the Xcode workspace for iOS and macOS projects. This removes build products and intermediate files from Xcode\'s build cache and can be slow to complete',
        },
        {
          name: "--stop-gradle",
          description:
            "Force stop active Gradle daemons before or during clean. Useful on Windows when files in build/ are locked by background processes",
        },
      ],
    },
    {
      name: ["config", "configure"],
      description: "Configure Flutter settings",
      options: [
        {
          name: "--list",
          description: "List all settings and their current values",
        },
        ...toggle(
          "analytics",
          "Enable or disable reporting anonymously tool usage statistics and crash reports",
          { hidden: true }
        ),
        {
          name: ["--clear-ios-signing-settings", "--clear-ios-signing-cert"],
          description:
            "Clear the saved development certificate or provisioning profile choice used to sign apps for iOS device deployment",
        },
        {
          name: "--select-ios-signing-settings",
          description:
            "Complete prompt to select and save code signing settings used to sign apps for iOS device deployment",
        },
        {
          name: "--android-sdk",
          description: "The Android SDK directory",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--android-studio-dir",
          description:
            "The Android Studio installation directory. If unset, flutter will search for valid installations at well-known locations",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--jdk-dir",
          description:
            "The Java Development Kit (JDK) installation directory. If unset, flutter will search for the JDK bundled with Android Studio, then JAVA_HOME, then the java binary in the user's path",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--build-dir",
          description:
            "The relative path to override a projects build directory",
          args: { name: "directory", template: "folders" },
        },
        machine,
        ...toggle("enable-web", "Enable or disable Flutter for web"),
        ...toggle(
          "enable-linux-desktop",
          "Enable or disable support for desktop on Linux"
        ),
        ...toggle(
          "enable-macos-desktop",
          "Enable or disable support for desktop on macOS"
        ),
        ...toggle(
          "enable-windows-desktop",
          "Enable or disable support for desktop on Windows"
        ),
        ...toggle("enable-android", "Enable or disable Flutter for Android"),
        ...toggle("enable-ios", "Enable or disable Flutter for iOS"),
        ...toggle(
          "enable-fuchsia",
          "Enable or disable Flutter for Fuchsia (master channel only)"
        ),
        ...toggle(
          "enable-custom-devices",
          "Enable or disable early support for custom device types"
        ),
        ...toggle(
          "cli-animations",
          "Enable or disable animations in the command line interface"
        ),
        ...toggle(
          "enable-native-assets",
          "Enable or disable native assets compilation and bundling"
        ),
        ...toggle(
          "enable-dart-data-assets",
          "Enable or disable Dart data assets building and bundling (master channel only)"
        ),
        ...toggle(
          "enable-record-use",
          "Enable or disable record use experiment"
        ),
        ...toggle(
          "enable-swift-package-manager",
          "Enable or disable support for Swift Package Manager for iOS and macOS"
        ),
        ...toggle(
          "omit-legacy-version-file",
          "Enable or disable omitting the legacy version file"
        ),
        ...toggle(
          "enable-windowing",
          "Enable or disable support for windowing on macOS, Linux, and Windows (master channel only)"
        ),
        ...toggle(
          "enable-lldb-debugging",
          "Enable or disable support for debugging with LLDB for physical iOS devices"
        ),
        ...toggle(
          "enable-uiscene-migration",
          "Enable or disable support for migrating to UIScene lifecycle"
        ),
        ...toggle(
          "enable-riscv64",
          "Enable or disable support for riscv64 architecture"
        ),
        ...toggle(
          "enable-macos-arm64-only",
          "Enable or disable building arm64 architecture only for non-debug macOS builds"
        ),
        ...toggle(
          "enable-hcpp",
          "Enable or disable the HCPP platform view rendering mode"
        ),
        ...toggle(
          "enable-tool-extensions",
          "Enable or disable support for tool extensions (master channel only)"
        ),
        {
          name: "--clear-features",
          description:
            "Remove all configured features and restore them to the default values",
        },
      ],
    },
    {
      name: "create",
      description: "Create a new Flutter project",
      options: [
        ...pubCreate,
        ...offline,
        ...toggle(
          "with-driver-test",
          '(deprecated) Historically, this added a flutter_driver dependency and generated a sample "flutter drive" test. Now it does nothing',
          { deprecated: true, hidden: true }
        ),
        ...overwrite,
        {
          name: "--description",
          description:
            "The description to use for your new Flutter project. This string ends up in the pubspec.yaml file",
          args: { name: "description", default: "A new Flutter project." },
        },
        {
          name: "--org",
          description:
            "The organization responsible for your new Flutter project, in reverse domain name notation",
          args: { name: "organization", default: "com.example" },
        },
        {
          name: "--project-name",
          description:
            "The project name for this new Flutter project. This must be a valid dart package name",
          args: { name: "name" },
        },
        {
          name: ["-i", "--ios-language"],
          description:
            "(deprecated) This option is deprecated and no longer has any effect. Swift is always used for iOS-specific code",
          args: {
            name: "ios-language",
            default: "swift",
            suggestions: ["objc", "swift"],
          },
          deprecated: true,
          hidden: true,
        },
        {
          name: ["-a", "--android-language"],
          description:
            "The language to use for Android-specific code, either Kotlin (recommended) or Java (legacy)",
          args: {
            name: "android-language",
            default: "kotlin",
            suggestions: ["java", "kotlin"],
          },
        },
        ...toggle(
          "skip-name-checks",
          "Allow the creation of applications and plugins with invalid names. This is only intended to enable testing of the tool itself",
          { hidden: true }
        ),
        ...toggle(
          "implementation-tests",
          "Include implementation tests that verify the template functions correctly. This is only intended to enable testing of the tool itself",
          { hidden: true }
        ),
        {
          name: "--initial-create-revision",
          description:
            "The Flutter SDK git commit hash to store in .migrate_config. This parameter is used by the tool internally and should generally not be used manually",
          args: { name: "initial-create-revision" },
          hidden: true,
        },
        {
          name: ["--platforms", "--platform"],
          description:
            'The platforms supported by this project. Platform folders (e.g. android/) will be generated in the target project. This argument only works when "--template" is set to app or plugin',
          args: {
            name: "platform",
            suggestions: [
              "ios",
              "android",
              "windows",
              "linux",
              "macos",
              "web",
              {
                name: "darwin",
                description:
                  "A shared platform for iOS and macOS. (only supported for plugins)",
              },
            ],
          },
          isRepeatable: true,
        },
        {
          name: ["-t", "--template"],
          description: "Specify the type of project to create",
          args: {
            name: "type",
            suggestions: [
              {
                name: "app",
                description: "(default) Generate a Flutter application",
              },
              {
                name: "module",
                description:
                  "Generate a project to add a Flutter module to an existing Android or iOS application",
              },
              {
                name: "package",
                description:
                  "Generate a shareable Flutter project containing modular Dart code",
              },
              {
                name: "package_ffi",
                description:
                  "Generate a shareable Dart/Flutter project containing an API in Dart code with a platform-specific implementation through dart:ffi for Android, iOS, Linux, macOS, and Windows",
              },
              {
                name: "plugin",
                description:
                  "Generate a shareable Flutter project containing an API in Dart code with a platform-specific implementation through method channels for Android, iOS, Linux, macOS, Windows, web, or any combination of these",
              },
              {
                name: "plugin_ffi",
                description:
                  '(deprecated) Generate a shareable Flutter project containing an API in Dart code with a platform-specific implementation through dart:ffi. Use "package_ffi" instead',
              },
            ],
          },
        },
        {
          name: ["-s", "--sample"],
          description:
            'Specifies the Flutter code sample to use as the "main.dart" for an application. Implies "--template=app"',
          args: { name: "id" },
          hidden: true,
        },
        ...toggle(
          "empty",
          'Specifies creating using an application template with a main.dart that is minimal, including no comments, as a starting point for a new application. Implies "--template=app"',
          {},
          "e"
        ),
        {
          name: "--list-samples",
          description:
            'Specifies a JSON output file for a listing of Flutter code samples that can be created with "--sample"',
          args: { name: "path", template: "filepaths" },
          hidden: true,
        },
      ],
      args: {
        name: "output directory",
        description: "Directory in which to create the project",
        template: "folders",
      },
    },
    {
      name: "custom-devices",
      description: "List, reset, add and delete custom devices",
      subcommands: [
        {
          name: "add",
          description: "Add a new device the custom devices config file",
          options: [
            ...toggle(
              "check",
              'Make sure the config actually works. This will execute some of the commands in the config (if necessary with dummy arguments). This flag is enabled by default when "--json" is not specified'
            ),
            {
              name: "--json",
              description:
                "Add the custom device described by this JSON-encoded string to the list of custom-devices instead of using the normal, interactive way of configuring",
              args: { name: '{"id": "pi", ...}' },
            },
            {
              name: "--ssh",
              description:
                "Add a ssh-device. This will automatically fill out some of the config options for you with good defaults, and in other cases save you some typing",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a device from the config file",
        },
        {
          name: "list",
          description:
            "List the currently configured custom devices, both enabled and disabled, reachable or not",
        },
        {
          name: "reset",
          description: "Reset the config file to the default",
        },
      ],
    },
    {
      name: "daemon",
      description:
        "Run a persistent, JSON-RPC based server to communicate with devices",
      hidden: true,
      options: [
        {
          name: "--listen-on-tcp-port",
          description:
            "If specified, the daemon will be listening for commands on the specified port instead of stdio",
          args: { name: "port" },
        },
      ],
    },
    {
      name: ["debug-adapter", "debug_adapter"],
      description:
        "Run a Debug Adapter Protocol (DAP) server to communicate with the Flutter tool",
      hidden: true,
      options: [
        ipv6,
        ddsPort,
        ...dds,
        ...disableDds,
        ...toggle(
          "test",
          'Whether to use the "flutter test" debug adapter to run tests and emit custom events for test progress/results'
        ),
      ],
    },
    {
      name: "devices",
      description: "List all connected devices",
      options: [
        machine,
        {
          name: ["-t", "--timeout"],
          description:
            '(deprecated) This option has been replaced by "--device-timeout"',
          args: { name: "seconds" },
          deprecated: true,
          hidden: true,
        },
        deviceTimeout,
        deviceConnection,
      ],
    },
    {
      name: "doctor",
      description: "Show information about the installed tooling",
      options: [
        {
          name: "--android-licenses",
          description:
            "Run the Android SDK manager tool to accept the SDK's licenses",
        },
        {
          name: "--check-for-remote-artifacts",
          description:
            "Used to determine if Flutter engine artifacts for all platforms are available for download",
          args: { name: "engine revision git hash" },
          hidden: true,
        },
      ],
    },
    {
      name: "downgrade",
      description:
        "Downgrade Flutter to the last active version for the current channel",
      options: [
        {
          name: "--working-directory",
          description:
            "Override the downgrade working directory. This is only intended to enable integration testing of the tool itself. It allows one to use the flutter tool from one checkout to downgrade a different checkout",
          args: { name: "directory", template: "folders" },
          hidden: true,
        },
        ...toggle("prompt", "Show the downgrade prompt", { hidden: true }),
      ],
    },
    {
      name: ["drive", "driver"],
      description:
        "Build and install the app, and run a Dart program that connects to the app, often to run externally facing integration tests",
      options: [
        debug,
        profile,
        release,
        jitReleaseBundle,
        dartDefine,
        dartDefineFromFile,
        webDefine,
        flavor,
        ...webResourcesCdn,
        ...nativeNullAssertions,
        useApplicationBinary,
        traceStartup,
        ...cacheStartupProfile,
        verboseSystemLogs,
        purgePersistentCache,
        route,
        vmserviceOutFile,
        disableServiceAuthCodes,
        disableServiceOriginCheck,
        ...startPaused,
        dartFlags,
        endlessTraceBuffer,
        traceSystrace,
        traceToFile,
        profileMicrotasks,
        traceSkia,
        traceAllowlist,
        traceSkiaAllowlist,
        ...enableDartProfiling,
        profileStartup,
        enableSoftwareRendering,
        skiaDeterministicRendering,
        dartEntrypointArgs,
        ...uninstallFirst,
        wasm,
        iosProfileDebugger,
        webHeader,
        webHostname,
        webPort,
        webTlsCertPath,
        webTlsCertKeyPath,
        webServerDebugProtocol,
        webServerDebugBackendProtocol,
        webServerDebugInjectedClientProtocol,
        ...webAllowExposeUrl,
        ...webRunHeadless,
        webBrowserDebugPort,
        ...webEnableExpressionEvaluation,
        webLaunchUrl,
        webBrowserFlag,
        ...crossOriginIsolation,
        baseHref,
        ...deprecatedJsInterop,
        target,
        vmServicePort,
        deviceVmservicePort,
        hostVmservicePort,
        ipv6,
        ...pub,
        ...trackWidgetCreation,
        deviceUser,
        deviceTimeout,
        deviceConnection,
        ddsPort,
        ...dds,
        ...disableDds,
        ...devtools,
        devtoolsServerAddress,
        ...androidGradleDaemon,
        ...androidSkipBuildDependencyValidation,
        androidProjectArg,
        androidProjectCacheDir,
        ...fatalWarnings,
        ...enableImpeller,
        ...enableFlutterGpu,
        ...enableVulkanValidation,
        ...enableEmbedderApi,
        ...enableHcpp,
        ...testFlag,
        ...adbLogFiltering,
        enableExperiment,
        ...publishPort,
        ...toggle(
          "keep-app-running",
          'Will keep the Flutter application running when done testing. By default, "flutter drive" stops the application after tests are finished, and "--keep-app-running" overrides this'
        ),
        {
          name: "--use-existing-app",
          description:
            "Connect to an already running instance via the given Dart VM Service URL",
          args: { name: "url" },
        },
        {
          name: "--driver",
          description:
            "The test file to run on the host (as opposed to the target file to run on the device)",
          args: { name: "path", template: "filepaths" },
        },
        ...toggle(
          "build",
          '(deprecated) Build the app before running. To use an existing app, pass the "--use-application-binary" flag with an existing APK',
          { deprecated: true }
        ),
        {
          name: "--screenshot",
          description:
            "Directory location to write screenshots on test failure",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--driver-port",
          description: "The port where Webdriver server is launched at",
          args: { name: "port", default: "4444" },
        },
        ...toggle(
          "headless",
          "Whether the driver browser is going to be launched in headless mode"
        ),
        {
          name: "--browser-name",
          description: "Name of the browser where tests will be executed",
          args: {
            name: "browser-name",
            default: "chrome",
            suggestions: [
              {
                name: "android-chrome",
                description:
                  'Chrome on Android (see also "--android-emulator")',
              },
              {
                name: "chrome",
                description:
                  'Google Chrome on this computer (see also "--chrome-binary")',
              },
              {
                name: "edge",
                description: "Microsoft Edge on this computer (Windows only)",
              },
              {
                name: "firefox",
                description: "Mozilla Firefox on this computer",
              },
              {
                name: "ios-safari",
                description: "Apple Safari on an iOS device",
              },
              {
                name: "safari",
                description: "Apple Safari on this computer (macOS only)",
              },
            ],
          },
        },
        {
          name: "--browser-dimension",
          description:
            'The dimension of the browser when running a Flutter Web test. Format is "width x height[@dpr]" where dpr is optional device pixel ratio. This will affect screenshot dimensions and all offset-related actions',
          args: { name: "width x height", default: "1600x1024" },
        },
        ...toggle(
          "android-emulator",
          'Whether to perform Flutter Driver testing using an Android Emulator. Works only if "browser-name" is set to "android-chrome"'
        ),
        {
          name: "--chrome-binary",
          description:
            'Location of the Chrome binary. Works only if "browser-name" is set to "chrome"',
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--test-arguments",
          description:
            'Additional arguments to pass to the Dart VM running The test script. This can be used to opt-in to use "dart test" as a runner for the test script, which allows, among other things, changing the reporter',
          args: { name: "test-arguments" },
          isRepeatable: true,
        },
        {
          name: "--profile-memory",
          description:
            "Launch devtools and profile application memory, writing The output data to the file path provided to this argument as JSON",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--timeout",
          description:
            'Timeout the test after the given number of seconds. If the "--screenshot" option is provided, a screenshot will be taken before exiting. Defaults to no timeout',
          args: { name: "seconds" },
        },
      ],
    },
    {
      name: ["emulators", "emulator"],
      description: "List, launch and create emulators",
      options: [
        {
          name: "--launch",
          description: "The full or partial ID of the emulator to launch",
          args: {
            name: "emulator id",
            generators: flutterGenerators.emulators,
          },
        },
        {
          name: "--cold",
          description:
            'Used with the "--launch" flag to cold boot the emulator instance (Android only)',
        },
        {
          name: "--create",
          description: "Creates a new Android emulator based on a Pixel device",
        },
        {
          name: "--name",
          description:
            'Used with the "--create" flag. Specifies a name for the emulator being created',
          args: { name: "emulator name" },
        },
      ],
    },
    {
      name: "gen-l10n",
      description: "Generate localizations for the current project",
      options: [
        {
          name: "--arb-dir",
          description:
            "The directory where the template and translated arb files are located",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--output-dir",
          description:
            'The directory where the generated localization classes will be written. The app must import the file specified in the "--output-localization-file" option from this directory',
          args: { name: "directory", template: "folders" },
        },
        ...toggle(
          "synthetic-package",
          "DEPRECATED. This flag cannot be enabled and should be removed",
          { deprecated: true }
        ),
        {
          name: "--template-arb-file",
          description:
            "The template arb file that will be used as the basis for generating the Dart localization and messages files",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--output-localization-file",
          description:
            "The filename for the output localization and localizations delegate classes",
          args: { name: "file name" },
        },
        {
          name: "--untranslated-messages-file",
          description:
            "The location of a file that describes the localization messages have not been translated yet",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--output-class",
          description:
            "The Dart class name to use for the output localization and localizations delegate classes",
          args: { name: "class name", default: "AppLocalizations" },
        },
        {
          name: "--preferred-supported-locales",
          description:
            "The list of preferred supported locales for the application. By default, the tool will generate the supported locales list in alphabetical order. Use this flag if you would like to default to a different locale",
          args: { name: "locale" },
          isRepeatable: true,
        },
        {
          name: "--header",
          description:
            'The header to prepend to the generated Dart localizations files. This option takes in a string. For example, pass in "/// All localized files." if you would like this string prepended to the generated Dart file',
          args: { name: "text" },
        },
        {
          name: "--header-file",
          description:
            "The header to prepend to the generated Dart localizations files. The value of this option is the name of the file that contains the header text which will be inserted at the top of each generated Dart file",
          args: { name: "file", template: "filepaths" },
        },
        ...toggle(
          "use-deferred-loading",
          "Whether to generate the Dart localization file with locales imported as deferred, allowing for lazy loading of each locale in Flutter web"
        ),
        {
          name: "--gen-inputs-and-outputs-list",
          description:
            "When specified, the tool generates a JSON file containing the tool's inputs and outputs named gen_l10n_inputs_and_outputs.json",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--project-dir",
          description:
            "When specified, the tool uses the path passed into this option as the directory of the root Flutter project. When null, the relative path to the present working directory will be used",
          args: { name: "directory", template: "folders" },
        },
        ...toggle(
          "required-resource-attributes",
          "Requires all resource ids to contain a corresponding resource attribute"
        ),
        ...toggle(
          "nullable-getter",
          "Whether or not the localizations class getter is nullable. By default, this value is set to true so that Localizations.of(context) returns a nullable value for backwards compatibility"
        ),
        ...toggle(
          "format",
          'When specified, the "dart format" command is run after generating the localization files'
        ),
        ...toggle(
          "use-escaping",
          "Whether or not to use escaping for messages. By default, this value is set to false for backwards compatibility"
        ),
        ...toggle(
          "suppress-warnings",
          "When specified, all warnings will be suppressed"
        ),
        ...toggle(
          "relax-syntax",
          'When specified, the syntax will be relaxed so that the special character "{" is treated as a string if it is not followed by a valid placeholder and "}" is treated as a string if it does not close any previous "{" that is treated as a special character'
        ),
        ...toggle(
          "use-named-parameters",
          "Whether or not to use named parameters for the generated localization methods"
        ),
      ],
    },
    {
      name: "generate",
      description: "Run code generators",
      hidden: true,
    },
    {
      name: "help",
      description: "Display help information for flutter",
    },
    {
      name: "ide-config",
      description: "Configure the IDE for use in the Flutter tree",
      hidden: true,
      options: [
        ...overwrite,
        {
          name: "--update-templates",
          description:
            "Update the templates in the template directory from the current configuration files. This is the opposite of what ide-config usually does",
        },
        ...toggle(
          "with-root-module",
          "Also create module that corresponds to the root of Flutter tree. This makes the entire Flutter tree browsable and searchable in IDE. Without this flag, only the child modules will be visible in IDE"
        ),
      ],
    },
    {
      name: "install",
      description: "Install a Flutter app on an attached device",
      options: [
        debugApk,
        profile,
        {
          name: "--release",
          description: "Build a release version of your app (default mode)",
        },
        {
          name: "--jit-release",
          description: "Build a JIT release version of your app (default mode)",
          hidden: true,
        },
        useApplicationBinary,
        deviceTimeout,
        deviceConnection,
        deviceUser,
        flavor,
        ...toggle(
          "uninstall-only",
          "Uninstall the app if already on the device. Skip install"
        ),
      ],
    },
    {
      name: "logs",
      description: "Show log output for running Flutter apps",
      options: [
        {
          name: ["-c", "--clear"],
          description: "Clear log history before reading from logs",
        },
        deviceTimeout,
        deviceConnection,
        ...toggle(
          "adb-log-filtering",
          "Filter adb logs so that logs not emitted by the current flutter application are not displayed"
        ),
      ],
    },
    {
      name: "precache",
      description: "Populate the Flutter tool's cache of binary artifacts",
      options: [
        {
          name: ["-a", "--all-platforms", "--all"],
          description: "Precache artifacts for all host platforms",
        },
        {
          name: ["-f", "--force"],
          description: "Force re-downloading of artifacts",
        },
        ...toggle("android", "Precache artifacts for Android development", {
          hidden: true,
        }),
        ...toggle(
          "android_gen_snapshot",
          "Precache gen_snapshot for Android development",
          { hidden: true }
        ),
        ...toggle(
          "android_maven",
          "Precache Gradle dependencies for Android development",
          { hidden: true }
        ),
        ...toggle(
          "android_internal_build",
          "Precache dependencies for internal Android development",
          { hidden: true }
        ),
        ...toggle("ios", "Precache artifacts for iOS development"),
        ...toggle("web", "Precache artifacts for web development"),
        ...toggle("linux", "Precache artifacts for Linux desktop development"),
        ...toggle(
          "windows",
          "Precache artifacts for Windows desktop development"
        ),
        ...toggle("macos", "Precache artifacts for macOS desktop development"),
        ...toggle("fuchsia", "Precache artifacts for Fuchsia development"),
        ...toggle(
          "universal",
          "Precache artifacts required for any development platform"
        ),
        {
          name: "--informative",
          description: "Precache engine_stamp.json",
          hidden: true,
        },
        ...toggle("flutter_runner", "Precache the flutter runner artifacts", {
          hidden: true,
        }),
        ...toggle(
          "use-unsigned-mac-binaries",
          "Precache the unsigned macOS binaries when available",
          { hidden: true }
        ),
        {
          name: "--host-arch",
          description:
            "Override the architecture of host artifacts to precache",
          args: { name: "host-arch", suggestions: ["x64", "arm64"] },
          hidden: true,
        },
      ],
    },
    {
      name: ["pub", "packages"],
      description: "Commands for managing Flutter packages",
      subcommands: [
        {
          name: "add",
          description: "Add a dependency to pubspec.yaml",
          options: [
            {
              name: ["-d", "--dev"],
              description: "Adds to the development dependencies instead",
              hidden: true,
            },
            {
              name: "--git-url",
              description: "Git URL of the package",
              args: { name: "git-url" },
              hidden: true,
            },
            {
              name: "--git-ref",
              description: "Git branch or commit to be retrieved",
              args: { name: "git-ref" },
              hidden: true,
            },
            {
              name: "--git-path",
              description: "Path of git package in repository",
              args: { name: "git-path" },
              hidden: true,
            },
            {
              name: "--git-tag-pattern",
              description:
                "The tag-pattern to search for versions in repository",
              args: { name: "git-tag-pattern" },
              hidden: true,
            },
            {
              name: "--hosted-url",
              description: "URL of package host server",
              args: { name: "hosted-url" },
              hidden: true,
            },
            {
              name: "--path",
              description: "Add package from local path",
              args: { name: "path" },
              hidden: true,
            },
            {
              name: "--sdk",
              description: "Add package from SDK source",
              args: { name: "[flutter]", suggestions: ["flutter"] },
              hidden: true,
            },
            ...offlineAdd,
            dryRun,
            ...precompile,
            ...toggle(
              "example",
              "Also update dependencies in example/ after modifying pubspec.yaml in the root package (if it exists)"
            ),
            directory,
          ],
        },
        {
          name: "cache",
          description: "Work with the Pub system cache",
        },
        {
          name: "deps",
          description: "Print package dependencies",
        },
        {
          name: "downgrade",
          description: "Downgrade packages in a Flutter project",
        },
        {
          name: "get",
          description: "Get the current package's dependencies",
          options: [
            ...offlineAdd,
            dryRun,
            {
              name: "--enforce-lockfile",
              description:
                "Enforce pubspec.lock. Fail if the current pubspec.lock does not exactly specify a valid resolution of pubspec.yaml or if any content hash of a hosted package has changed",
            },
            ...precompile,
            ...example,
            directory,
          ],
        },
        {
          name: "global",
          description: "Work with Pub global packages",
        },
        {
          name: "login",
          description: "Log into pub.dev",
        },
        {
          name: "logout",
          description: "Log out of pub.dev",
        },
        {
          name: "outdated",
          description:
            "Analyze dependencies to find which ones can be upgraded",
        },
        {
          name: "pub",
          description: 'Pass the remaining arguments to Dart\'s "pub" tool',
        },
        {
          name: "publish",
          description: "Publish the current package to pub.dartlang.org",
        },
        {
          name: "remove",
          description: "Removes a dependency from the current package",
          options: [
            ...offlineAdd,
            dryRun,
            ...precompile,
            ...toggle(
              "example",
              "Also update dependencies in example/ (if it exists)"
            ),
            directory,
          ],
        },
        {
          name: "run",
          description: "Run an executable from a package",
        },
        {
          name: "test",
          description: 'Run the "test" package',
          args: {
            name: "test",
            description: "Test files or directories to run",
            isOptional: true,
            isVariadic: true,
            template: ["filepaths", "folders"],
          },
        },
        {
          name: "token",
          description:
            "Manage authentication tokens for hosted pub repositories",
        },
        {
          name: "upgrade",
          description:
            "Upgrade the current package's dependencies to latest versions",
          options: [
            ...offlineAdd,
            dryRun,
            ...precompile,
            {
              name: "--tighten",
              description:
                "Updates lower bounds in pubspec.yaml to match the resolved version",
            },
            {
              name: "--unlock-transitive",
              description:
                "Also upgrades the transitive dependencies of the listed dependencies",
            },
            {
              name: "--major-versions",
              description:
                "Upgrades packages to their latest resolvable versions, and updates pubspec.yaml",
            },
            ...example,
            directory,
          ],
        },
        {
          name: "uploader",
          description: "Manage uploaders for a package on pub.dev",
        },
        {
          name: "version",
          description: "Print Pub version",
        },
      ],
    },
    {
      name: "run",
      description: "Run your Flutter app on an attached device",
      options: [
        debug,
        profile,
        release,
        jitReleaseBundle,
        dartDefine,
        dartDefineFromFile,
        webDefine,
        flavor,
        ...webResourcesCdn,
        ...nativeNullAssertions,
        useApplicationBinary,
        traceStartup,
        ...cacheStartupProfile,
        verboseSystemLogs,
        purgePersistentCache,
        route,
        vmserviceOutFile,
        disableServiceAuthCodes,
        disableServiceOriginCheck,
        ...startPaused,
        dartFlags,
        endlessTraceBuffer,
        traceSystrace,
        traceToFile,
        profileMicrotasks,
        traceSkia,
        traceAllowlist,
        traceSkiaAllowlist,
        ...enableDartProfiling,
        profileStartup,
        enableSoftwareRendering,
        skiaDeterministicRendering,
        dartEntrypointArgs,
        ...uninstallFirst,
        wasm,
        iosProfileDebugger,
        webHeader,
        webHostname,
        webPort,
        webTlsCertPath,
        webTlsCertKeyPath,
        webServerDebugProtocol,
        webServerDebugBackendProtocol,
        webServerDebugInjectedClientProtocol,
        ...webAllowExposeUrl,
        ...webRunHeadless,
        webBrowserDebugPort,
        ...webEnableExpressionEvaluation,
        webLaunchUrl,
        webBrowserFlag,
        ...crossOriginIsolation,
        baseHref,
        ...deprecatedJsInterop,
        target,
        vmServicePort,
        deviceVmservicePort,
        hostVmservicePort,
        ipv6,
        ...pub,
        ...trackWidgetCreation,
        deviceUser,
        deviceTimeout,
        deviceConnection,
        ddsPort,
        ...dds,
        ...disableDds,
        ...devtools,
        devtoolsServerAddress,
        ...androidGradleDaemon,
        ...androidSkipBuildDependencyValidation,
        androidProjectArg,
        androidProjectCacheDir,
        ...fatalWarnings,
        ...enableImpeller,
        ...enableFlutterGpu,
        ...enableVulkanValidation,
        ...enableEmbedderApi,
        ...enableHcpp,
        ...testFlag,
        ...adbLogFiltering,
        outputDill,
        filesystemRoot,
        filesystemScheme,
        extraFrontEndOptions,
        extraGenSnapshotOptions,
        frontendServerStarterPath,
        enableExperiment,
        initializeFromDill,
        ...assumeInitializeFromDillUpToDate,
        nativeAssetsYamlFile,
        ...publishPort,
        ignoreDeprecation,
        machine,
        ...toggle(
          "use-test-fonts",
          'Enable (and default to) the "Ahem" font. This is a special font used in tests to remove any dependencies on the font metrics. It is enabled when you use "flutter test"'
        ),
        ...toggle(
          "await-first-frame-when-tracing",
          'Whether to wait for the first frame when tracing startup ("--trace-startup"), or just dump the trace as soon as the application is running'
        ),
        ...toggle(
          "build",
          '(deprecated) If necessary, build the app before running. To use an existing app, pass the "--use-application-binary" flag with an existing application artifact',
          { deprecated: true, hidden: true }
        ),
        {
          name: "--project-root",
          description: "Specify the project root directory",
          args: { name: "directory", template: "folders" },
          hidden: true,
        },
        ...toggle(
          "hot",
          'Run with support for hot reloading. Only available for debug mode. Not available with "--trace-startup"'
        ),
        ...toggle(
          "resident",
          'Stay resident after launching the application. Not available with "--trace-startup"',
          { hidden: true }
        ),
        pidFile,
        ...reportReady,
        {
          name: "--benchmark",
          description:
            'Enable a benchmarking mode. This will run the given application, measure the startup time and the app restart time, write the results out to "refresh_benchmark.json", and exit',
          hidden: true,
        },
      ],
      args: {
        name: "target",
        description: "The main entry-point file of the application",
        isOptional: true,
        generators: flutterGenerators.dartFiles,
      },
    },
    {
      name: "screenshot",
      description: "Take a screenshot from a connected device",
      options: [
        {
          name: ["-o", "--out"],
          description: "Location to write the screenshot",
          args: { name: "output file", template: "filepaths" },
        },
        {
          name: "--vm-service-url",
          description:
            'The VM Service URL to which to connect. This is required when "--type" is "skia". To find the VM service URL, use "flutter run" and look for "A Dart VM Service ... is available at" in the output',
          args: { name: "URI" },
        },
        {
          name: "--type",
          description: "The type of screenshot to retrieve",
          args: {
            name: "type",
            default: "device",
            suggestions: [
              {
                name: "device",
                description:
                  "Delegate to the device's native screenshot capabilities. This screenshots the entire screen currently being displayed (including content not rendered by Flutter, like the device status bar)",
              },
              {
                name: "skia",
                description:
                  'Render the Flutter app as a Skia picture. Requires "--vm-service-url"',
              },
            ],
          },
        },
        deviceTimeout,
        deviceConnection,
      ],
    },
    {
      name: "symbolize",
      description: "Symbolize a stack trace from an AOT-compiled Flutter app",
      options: [
        {
          name: ["-d", "--debug-info"],
          description:
            'A path to the symbols file generated with "--split-debug-info"',
          args: { name: "symbols file", template: "filepaths" },
        },
        {
          name: ["-u", "--unit-id-debug-info"],
          description:
            'A loading unit id and the path to the symbols file for that unit generated with "--split-debug-info"',
          args: { name: "id:symbols file" },
          isRepeatable: true,
        },
        {
          name: ["-i", "--input"],
          description: "A file path containing a Dart stack trace",
          args: { name: "stack trace file", template: "filepaths" },
        },
        {
          name: ["-o", "--output"],
          description:
            "A file path for a symbolized stack trace to be written to",
          args: { name: "output file", template: "filepaths" },
        },
      ],
    },
    {
      name: "test",
      description: "Run Flutter unit tests for the current project",
      options: [
        ...pub,
        frontendServerStarterPath,
        ...trackWidgetCreation,
        enableExperiment,
        dartDefine,
        dartDefineFromFile,
        deviceUser,
        flavor,
        ...enableImpeller,
        machine,
        ...enableFlutterGpu,
        ...enableHcpp,
        ...deprecatedJsInterop,
        {
          name: "--experimental-faster-testing",
          description:
            "Run each test in a separate lightweight Flutter Engine to speed up testing",
          hidden: true,
        },
        {
          name: "--name",
          description:
            "A regular expression matching substrings of the names of tests to run",
          args: { name: "regexp" },
          isRepeatable: true,
        },
        {
          name: "--plain-name",
          description: "A plain-text substring of the names of tests to run",
          args: { name: "substring" },
          isRepeatable: true,
        },
        {
          name: ["-t", "--tags"],
          description:
            "Run only tests associated with the specified tags. See: https://pub.dev/packages/test#tagging-tests",
          args: { name: "tag" },
          isRepeatable: true,
        },
        {
          name: ["-x", "--exclude-tags"],
          description:
            "Run only tests that do not have the specified tags. See: https://pub.dev/packages/test#tagging-tests",
          args: { name: "tag" },
          isRepeatable: true,
        },
        {
          name: ["-P", "--preset"],
          description:
            'The configuration preset(s) to use. Presets are defined in "dart_test.yaml"',
          args: { name: "preset" },
          isRepeatable: true,
        },
        {
          name: "--start-paused",
          description:
            "Start in a paused mode and wait for a debugger to connect. You must specify a single test file to run, explicitly. Instructions for connecting with a debugger are printed to the console once the test has started",
        },
        ...toggle("fail-fast", "Stop running tests after the first failure"),
        ...toggle("run-skipped", "Run skipped tests instead of skipping them"),
        disableServiceAuthCodes,
        disableServiceOriginCheck,
        {
          name: "--coverage",
          description: "Whether to collect coverage information",
        },
        {
          name: "--merge-coverage",
          description:
            'Whether to merge coverage data with "coverage/lcov.base.info". Implies collecting coverage data. (Requires lcov.)',
        },
        {
          name: "--branch-coverage",
          description:
            "Whether to collect branch coverage information. Implies collecting coverage data",
        },
        {
          name: "--ipv6",
          description: "Whether to use IPv6 for the test harness server socket",
          hidden: true,
        },
        {
          name: "--coverage-path",
          description:
            "Where to store coverage information (if coverage is enabled)",
          args: {
            name: "file",
            default: "coverage/lcov.info",
            template: "filepaths",
          },
        },
        {
          name: "--coverage-package",
          description:
            "A regular expression matching packages names to include in the coverage report (if coverage is enabled). If unset, matches the current package name",
          args: { name: "package-name-regexp" },
          isRepeatable: true,
        },
        {
          name: "--update-goldens",
          description:
            'Whether "matchesGoldenFile()" calls within your test methods should update the golden files rather than test for an existing match',
        },
        {
          name: ["-j", "--concurrency"],
          description:
            "The number of concurrent test processes to run. This will be ignored when running integration tests",
          args: { name: "jobs" },
        },
        ...toggle(
          "test-assets",
          'Whether to build the assets bundle for testing. This takes additional time before running the tests. Consider using "--no-test-assets" if assets are not required'
        ),
        {
          name: "--platform",
          description: "Selects the test backend",
          args: {
            name: "platform",
            default: "tester",
            suggestions: [
              {
                name: "tester",
                description: "Run tests using the VM-based test environment",
              },
              {
                name: "chrome",
                description:
                  "(deprecated) Run tests using the Google Chrome web browser. This value is intended for testing the Flutter framework itself and may be removed at any time",
              },
            ],
          },
          hidden: true,
        },
        {
          name: "--test-randomize-ordering-seed",
          description:
            'The seed to randomize the execution order of test cases within test files. Must be a 32bit unsigned integer or the string "random", which indicates that a seed should be selected randomly',
          args: { name: "seed" },
        },
        {
          name: "--total-shards",
          description:
            'Tests can be sharded with the "--total-shards" and "--shard-index" arguments, allowing you to split up your test suites and run them separately',
          args: { name: "count" },
        },
        {
          name: "--shard-index",
          description:
            'Tests can be sharded with the "--total-shards" and "--shard-index" arguments, allowing you to split up your test suites and run them separately',
          args: { name: "index" },
        },
        ...toggle(
          "enable-vmservice",
          'Enables the VM service without "--start-paused". This flag is intended for use with tests that will use "dart:developer" to interact with the VM service at runtime',
          { hidden: true }
        ),
        {
          name: ["-r", "--reporter"],
          description:
            "Set how to print test results. If unset, value will default to either compact or expanded",
          args: {
            name: "reporter",
            suggestions: [
              {
                name: "compact",
                description:
                  "A single line, updated continuously (the default)",
              },
              {
                name: "expanded",
                description:
                  "A separate line for each update. May be preferred when logging to a file or in continuous integration",
              },
              {
                name: "failures-only",
                description:
                  "A separate line for failing tests, with no output for passing tests",
              },
              {
                name: "github",
                description:
                  "A custom reporter for GitHub Actions (the default reporter when running on GitHub Actions)",
              },
              {
                name: "json",
                description:
                  "A machine-readable format. See: https://dart.dev/go/test-docs/json_reporter.md",
              },
              {
                name: "silent",
                description:
                  "A reporter with no output. May be useful when only the exit code is meaningful",
              },
            ],
          },
        },
        {
          name: "--file-reporter",
          description:
            'Enable an additional reporter writing test results to a file. Should be in the form <reporter>:<filepath>, Example: "json:reports/tests.json"',
          args: { name: "reporter:path" },
        },
        {
          name: "--timeout",
          description:
            'The default timeout for individual tests, specified either in seconds (e.g. "60s"), as a multiplier of the default test timeout (e.g. "2x"), or as the string "none" to disable test timeouts entirely',
          args: { name: "timeout" },
        },
        {
          name: "--ignore-timeouts",
          description:
            "Ignore all timeouts. Useful when testing a big application that requires a longer time to compile (e.g. running integration tests for a Flutter app)",
        },
        {
          name: "--wasm",
          description:
            "Compile to WebAssembly rather than JavaScript. See https://flutter.dev/to/wasm for more information",
        },
        ...crossOriginIsolation,
        ...toggle(
          "uninstall",
          'Whether to uninstall the app after running integration tests. Set "--no-uninstall" to keep the app installed on the device'
        ),
        ddsPort,
        ...dds,
        ...disableDds,
        ...fatalWarnings,
      ],
      args: {
        name: "test",
        description: "Test files or directories to run",
        isOptional: true,
        isVariadic: true,
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "update-packages",
      description: "Update the packages inside the Flutter repo",
      hidden: true,
      options: [
        {
          name: "--force-upgrade",
          description:
            "Attempt to update all the dependencies to their latest versions. This will actually modify the pubspec.yaml files in your checkout",
        },
        {
          name: "--update-hashes",
          description: "Update the hashes of the pubspecs",
          hidden: true,
        },
        {
          name: "--cherry-pick",
          description:
            "Attempt to update only the specified package. To be specified as [pub package name]:[pub package version],[pub package2 name]:[pub package2 version]",
          args: { name: "package:version" },
          isRepeatable: true,
        },
        {
          name: "--offline",
          description: "Use cached packages instead of accessing the network",
        },
        ...toggle(
          "upgrade-major",
          "Upgrade major versions as well. Only makes sense with force-upgrade"
        ),
        ...toggle(
          "exclude-tools",
          "Don't update the deps in tools. For example when unpinning a dep"
        ),
        {
          name: "--crash",
          description:
            "For Flutter CLI testing only, forces this command to throw an unhandled exception",
          hidden: true,
        },
      ],
    },
    {
      name: "upgrade",
      description: "Upgrade your Flutter development environment",
      options: [
        ...toggle(
          "force",
          'Force upgrade the flutter branch, potentially discarding local changes to the git repository. Try this if upgrade fails with "Your flutter checkout has local changes"',
          {},
          "f"
        ),
        {
          name: "--continue",
          description:
            'Continues the upgrade flow starting with the new version of the Flutter tool. Must be used with "--continue-started-at"',
          hidden: true,
        },
        {
          name: "--continue-started-at",
          description:
            "The timestamp at which the top-level upgrade was started in ISO-8601 format",
          args: { name: "timestamp" },
          hidden: true,
        },
        ...toggle(
          "verify-only",
          "Verifies for any new version of flutter available, without upgrading to it"
        ),
        {
          name: "--working-directory",
          description:
            "Override the working directory for the upgrade. Useful for testing upgrade flows without modifying the current flutter repo",
          args: { name: "directory", template: "folders" },
          hidden: true,
        },
      ],
    },
    {
      name: "widget-preview",
      description: "Manage the widget preview environment",
      subcommands: [
        {
          name: "clean",
          description: "Clean up widget preview state",
        },
        {
          name: "start",
          description: "Start the widget preview environment",
          options: [
            ...pubCreate,
            ...offline,
            machine,
            ...devtools,
            devtoolsServerAddress,
            ...toggle(
              "web-server",
              "Serve the widget preview environment using the web-server device instead of the browser"
            ),
            {
              name: "--dtd-url",
              description:
                "The address of an existing Dart Tooling Daemon instance to be used by the Flutter CLI",
              args: { name: "url" },
              hidden: true,
            },
            ...toggle(
              "launch-previewer",
              "Launches the widget preview environment",
              { hidden: true }
            ),
            ...toggle(
              "headless",
              "Launches Chrome in headless mode for testing",
              { hidden: true }
            ),
            {
              name: "--scaffold-output-dir",
              description:
                "Generated the widget preview environment scaffolding at a given location for testing purposes",
              args: { name: "directory", template: "folders" },
              hidden: true,
            },
            ...toggle(
              "disable-dtd-service-uuid",
              "Disables the addition of a UUID to the widget preview DTD service and stream",
              { hidden: true }
            ),
            ...toggle(
              "legacy-preview-detection",
              "Enables the legacy preview detection mechanism that uses package:analyzer instead of LSP",
              { hidden: true }
            ),
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print this usage information",
      isPersistent: true,
    },
    {
      name: ["-v", "--verbose"],
      description:
        'Noisy logging, including all shell commands executed. If used with "--help", shows hidden options',
      isPersistent: true,
    },
    {
      name: ["-d", "--device-id"],
      description: "Target device id or name (prefixes allowed)",
      args: { name: "device-id", generators: flutterGenerators.emulators },
      isPersistent: true,
    },
    {
      name: "--suppress-analytics",
      description:
        "Suppress analytics reporting for the current CLI invocation",
      isPersistent: true,
    },
    {
      name: "--prefixed-errors",
      description: 'Causes lines sent to stderr to be prefixed with "ERROR:"',
      hidden: true,
    },
    {
      name: "--quiet",
      description: "Reduce the amount of output from some commands",
      hidden: true,
    },
    ...toggle(
      "wrap",
      "Toggles output word wrapping, regardless of whether or not the output is a terminal",
      { hidden: true }
    ),
    {
      name: "--wrap-column",
      description:
        'Sets the output wrap column. If not set, uses the width of the terminal. No wrapping occurs if not writing to a terminal. Use "--no-wrap" to turn off wrapping when connected to a terminal',
      args: { name: "columns" },
      hidden: true,
    },
    {
      name: "--machine",
      description:
        'When used with the "--version" flag, outputs the information using JSON',
      hidden: true,
    },
    ...toggle(
      "color",
      "Whether to use terminal colors (requires support for ANSI escape sequences)",
      { hidden: true }
    ),
    ...toggle(
      "version-check",
      "Allow Flutter to check for updates when this command runs",
      { hidden: true }
    ),
    {
      name: "--packages",
      description: 'Path to your "package_config.json" file',
      args: { name: "file", template: "filepaths" },
      hidden: true,
    },
    {
      name: "--print-dtd",
      description:
        "Print the address of the Dart Tooling Daemon, if one is hosted by the Flutter CLI",
      hidden: true,
    },
    {
      name: "--local-engine-src-path",
      description:
        "Path to your engine src directory, if you are building Flutter locally",
      args: { name: "directory", template: "folders" },
      hidden: true,
    },
    {
      name: "--local-engine",
      description:
        "Name of a build output within the engine out directory, if you are building Flutter locally",
      args: { name: "local-engine" },
      hidden: true,
    },
    {
      name: "--local-engine-host",
      description:
        "The host operating system for which engine artifacts should be selected, if you are building Flutter locally",
      args: { name: "local-engine-host" },
      hidden: true,
    },
    {
      name: "--local-web-sdk",
      description:
        "Name of a build output within the engine out directory, if you are building Flutter locally. Use this to select a specific version of the web sdk if you have built multiple engine targets",
      args: { name: "local-web-sdk" },
      hidden: true,
    },
    {
      name: "--show-test-device",
      description:
        'List the special "flutter-tester" device in device listings. This headless device is used to test Flutter tooling',
      hidden: true,
    },
    {
      name: "--show-web-server-device",
      description: 'List the special "web-server" device in device listings',
      hidden: true,
    },
    {
      name: "--ci",
      description: "Enable a set of CI-specific test debug settings",
      hidden: true,
    },
    {
      name: "--debug-logs-dir",
      description: "Path to a directory where logs for debugging may be added",
      args: { name: "directory", template: "folders" },
      hidden: true,
    },
    { name: "--version", description: "Reports the version of this tool" },
    {
      name: "--enable-analytics",
      description:
        "Enable telemetry reporting each time a flutter or dart command runs",
    },
    {
      name: "--disable-analytics",
      description:
        "Disable telemetry reporting each time a flutter or dart command runs, until it is re-enabled",
    },
  ],
};

export default completionSpec;
