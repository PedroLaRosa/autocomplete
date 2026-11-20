// xcodebuild (Xcode 27.2 build 27B52, latest stable Xcode release as of 2026-11-20). Source: the xcodebuild(1) man page
// shipped in Xcode 27.2, read statically from the keith/xcode-man-pages mirror (commit 03c4382; identical in the
// Xcode 27.3 beta 2 export). NOT run on macOS. Options/actions the man page documents are synced to it. Options kept
// from the previous spec that the man page does not list (-help-only or older: -dry-run, -jobs, -parallelizeTargets,
// -hideShellScriptEnvironment, -find-executable, -find-library, -xcroot, -showBuildSettingsForIndex,
// -resultStreamPath, -resultBundleVersion, -clonedSourcePackagesDirPath, -resolvePackageDependencies,
// -disableAutomaticPackageResolution, -scmProvider, -create-xcframework, -json) were left as they were, unverified.
const yesNoArg = (name = "mode"): Fig.Arg => ({
  name,
  suggestions: ["YES", "NO"],
});

const completionSpec: Fig.Spec = {
  name: "xcodebuild",
  description: "Build Xcode projects and workspaces",
  options: [
    {
      name: "-usage",
      description: "Print brief usage",
    },
    {
      name: "-help",
      description: "Print complete usage",
    },
    {
      name: "-verbose",
      description: "Provide additional status output",
    },
    {
      name: "-license",
      description:
        "Show the Xcode and SDK license agreements. Allows accepting the license agreements without launching Xcode, which is useful for headless systems (must be run as a privileged user)",
    },
    {
      name: "-checkFirstLaunchStatus",
      description:
        "Check if any additional system components or configuration tasks need to be performed (exits non-zero if -runFirstLaunch is needed)",
    },
    {
      name: "-runFirstLaunch",
      description:
        "Install additional system components and agree to the license",
    },
    {
      name: "-downloadAllPlatforms",
      description: "Download and install all available platforms",
    },
    {
      name: "-project",
      description:
        "Build the project name.xcodeproj. Required if there are multiple project files in the same directory",
      args: {
        name: "name.xcodeproj",
        template: "folders",
      },
    },
    {
      name: "-target",
      description: "Build the target specified by targetname",
      isRepeatable: true,
      args: {
        name: "targetname",
      },
    },
    {
      name: "-alltargets",
      description: "Build all the targets in the specified project",
    },
    {
      name: "-workspace",
      description: "Build the workspace name.xcworkspace",
      args: {
        name: "name.xcworkspace",
        template: "folders",
      },
    },
    {
      name: "-scheme",
      description:
        "Build the scheme specified by schemename. Required if building a workspace",
      args: {
        name: "schemename",
      },
    },
    {
      name: "-configuration",
      description:
        "Use the build configuration specified by configurationname when building each target",
      args: {
        name: "configurationname",
      },
    },
    {
      name: "-xcconfig",
      description:
        "Load the build settings defined in filename when building all targets, overriding all other settings including those passed on the command line",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "-arch",
      description:
        "Use the architecture specified by architecture when building each target",
      args: {
        name: "architecture",
        suggestions: ["arm64", "x86_64", "arm64_32"],
      },
    },
    {
      name: "-sdk",
      description:
        "Build against the specified SDK (an absolute path to an SDK, or the canonical name of an SDK), using build tools appropriate for that SDK",
      args: {
        name: "sdkfullpath | sdkname",
        template: "folders",
      },
    },
    {
      name: "-toolchain",
      description:
        "Use the toolchain specified with either an identifier or name",
      args: {
        name: "identifier | name",
      },
    },
    {
      name: "-destination",
      description:
        "Use the destination device described by destinationspecifier (a comma-separated set of key=value pairs, e.g. platform=iOS Simulator,name=iPhone 16)",
      isRepeatable: true,
      args: {
        name: "destinationspecifier",
      },
    },
    {
      name: "-destination-timeout",
      description:
        "Wait for timeout seconds while searching for a destination device (default 30)",
      args: {
        name: "timeout",
      },
    },
    {
      name: "-parallelizeTargets",
      description: "Build independent targets in parallel",
    },
    {
      name: "-jobs",
      description: "Specify the maximum number of concurrent build operations",
      args: {
        name: "NUMBER",
      },
    },
    {
      name: "-disable-concurrent-destination-testing",
      description:
        "Do not run tests on the specified destinations concurrently. The full test suite runs to completion on a destination before it begins on the next",
    },
    {
      name: "-maximum-concurrent-test-device-destinations",
      description:
        "If multiple device destinations are specified, only test on this many devices at a time",
      args: {
        name: "number",
      },
    },
    {
      name: "-maximum-concurrent-test-simulator-destinations",
      description:
        "If multiple simulator destinations are specified, only test on this many simulators at a time",
      args: {
        name: "number",
      },
    },
    {
      name: "-parallel-testing-enabled",
      description:
        "Overrides the per-target setting in the scheme for running tests in parallel",
      args: yesNoArg(),
    },
    {
      name: "-parallel-testing-worker-count",
      description:
        "Spawn exactly this many test runners when executing tests in parallel (overrides -maximum-parallel-testing-workers)",
      args: {
        name: "number",
      },
    },
    {
      name: "-maximum-parallel-testing-workers",
      description:
        "Limit the number of test runners that will be spawned when running tests in parallel",
      args: {
        name: "number",
      },
    },
    {
      name: "-parallelize-tests-among-destinations",
      description:
        "With parallel testing and multiple destinations, distribute test classes among the destinations instead of running the entire test suite on each",
    },
    {
      name: "-dry-run",
      description: "Do everything except actually running the commands",
    },
    {
      name: "-quiet",
      description: "Do not print any output except for warnings and errors",
    },
    {
      name: "-hideShellScriptEnvironment",
      description: "Don't show shell script environment variables in build log",
    },
    {
      name: "-showsdks",
      description:
        "List all available SDKs and their canonical names for use with -sdk. Does not initiate a build",
    },
    {
      name: "-showdestinations",
      description:
        "List the valid destinations for a project or workspace and scheme. Does not initiate a build",
    },
    {
      name: "-showTestPlans",
      description:
        "List the test plans (if any) associated with the specified scheme. Does not initiate a build",
    },
    {
      name: "-showBuildSettings",
      description:
        "List the build settings for targets in a project or workspace. Does not initiate a build",
    },
    {
      name: "-showBuildSettingsForIndex",
      description: "Display build settings for the index service",
    },
    {
      name: "-list",
      description:
        "List the targets and configurations in a project, or the schemes in a workspace. Does not initiate a build",
    },
    {
      name: "-find-executable",
      description:
        "Display the full path to executable NAME in the provided SDK and toolchain",
      args: {
        name: "NAME",
      },
    },
    {
      name: "-find-library",
      description:
        "Display the full path to library NAME in the provided SDK and toolchain",
      args: {
        name: "NAME",
      },
    },
    {
      name: "-version",
      description:
        "Display version information for this install of Xcode (with -sdk, the version of the specified SDK, or of all SDKs). Does not initiate a build",
    },
    {
      name: "-enableAddressSanitizer",
      description:
        "Turn the address sanitizer on or off, overriding the setting for the launch action of the scheme",
      args: yesNoArg(),
    },
    {
      name: "-enableThreadSanitizer",
      description:
        "Turn the thread sanitizer on or off, overriding the setting for the launch action of the scheme",
      args: yesNoArg(),
    },
    {
      name: "-enableUndefinedBehaviorSanitizer",
      description:
        "Turn the undefined behavior sanitizer on or off, overriding the setting for the launch action of the scheme",
      args: yesNoArg(),
    },
    {
      name: "-resultBundlePath",
      description:
        "Write a bundle with the results of the action (build logs, coverage reports, test results, attachments, diagnostics) to this path. Fails if the path already exists",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "-resultStreamPath",
      description:
        "Specifies the file where a result stream will be written to (the file must already exist)",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "-resultBundleVersion",
      description: "Specifies which result bundle version should be used",
      args: {
        name: "version",
        default: "3",
      },
    },
    {
      name: "-clonedSourcePackagesDirPath",
      description:
        "Specifies the directory to which remote source packages are fetch or expected to be found",
      args: {
        name: "PATH",
        template: "folders",
      },
    },
    {
      name: "-derivedDataPath",
      description:
        "Override the folder used for derived data when performing an action on a scheme",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "-archivePath",
      description:
        "Specifies the path for the archive produced by the archive action, or the archive to export with -exportArchive or -exportNotarizedApp",
      args: {
        name: "xcarchivepath",
        template: "folders",
      },
    },
    {
      name: "-exportArchive",
      description:
        "Distribute an archive. Requires -archivePath, -exportPath and -exportOptionsPlist. Cannot be passed along with an action",
    },
    {
      name: "-exportNotarizedApp",
      description:
        "Export an archive that has been notarized by Apple. Requires -archivePath and -exportPath",
    },
    {
      name: "-exportOptionsPlist",
      description:
        "Specifies options for -exportArchive (xcodebuild -help prints the full set of available options)",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "-exportPath",
      description:
        "Specifies the destination for the exported product, including the name of the exported file",
      args: {
        name: "destinationpath",
        template: "folders",
      },
    },
    {
      name: "-allowProvisioningUpdates",
      description:
        "Allow xcodebuild to communicate with the Apple Developer website. For automatically signed targets, xcodebuild will create and update profiles, app IDs, and certificates. For manually signed targets, xcodebuild will download missing or updated provisioning profiles. Requires a developer account to have been added in Xcode's Accounts preference pane",
    },
    {
      name: "-allowProvisioningDeviceRegistration",
      description:
        "Allow xcodebuild to register your destination device on the Apple Developer website if necessary. Requires -allowProvisioningUpdates",
      dependsOn: ["-allowProvisioningUpdates"],
    },
    {
      name: "-authenticationKeyPath",
      description:
        "Path to an App Store Connect authentication key used to authenticate with the Apple Developer website. Requires -authenticationKeyID and -authenticationKeyIssuerID",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "-authenticationKeyID",
      description:
        "Key identifier of the App Store Connect authentication key at -authenticationKeyPath",
      args: {
        name: "keyID",
      },
    },
    {
      name: "-authenticationKeyIssuerID",
      description:
        "App Store Connect issuer identifier of the authentication key at -authenticationKeyPath",
      args: {
        name: "issuerID",
      },
    },
    {
      name: "-enableCodeCoverage",
      description:
        "Turn code coverage on or off during testing, overriding the setting for the test action of the scheme",
      args: yesNoArg(),
    },
    {
      name: "-skipUnavailableActions",
      description:
        "Skip actions that cannot be performed instead of failing (only honored if -scheme is passed)",
    },
    {
      name: "-exportLocalizations",
      description:
        "Export localizations to XLIFF files. Requires -project and -localizationPath. Cannot be passed along with an action",
    },
    {
      name: "-importLocalizations",
      description:
        "Import localizations from an XLIFF file. Requires -project and -localizationPath. Cannot be passed along with an action",
    },
    {
      name: "-localizationPath",
      description:
        "Specifies a path to a directory or a single XLIFF localization file",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "-exportLanguage",
      description:
        "Specifies an optional ISO 639-1 language included in a localization export (may be repeated)",
      isRepeatable: true,
      args: {
        name: "language",
      },
    },
    {
      name: "-xcroot",
      description:
        "Specifies a path to a .xcroot to use for building and/or testing",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "-xctestrun",
      description:
        "Specifies test run parameters. Can only be used with the test-without-building action, and not with -workspace or -project",
      exclusiveOn: ["-workspace", "-project"],
      args: {
        name: "xctestrunpath",
        template: "filepaths",
      },
    },
    {
      name: "-testProductsPath",
      description:
        "Specifies the .xctestproducts path to write to (build-for-testing) or to test from (test-without-building). Cannot be used with -workspace or -project",
      exclusiveOn: ["-workspace", "-project"],
      args: {
        name: "path-to-xctestproducts",
        template: "folders",
      },
    },
    {
      name: "-testPlan",
      description:
        "Specifies which test plan associated with the scheme should be used for testing (the name of the .xctestplan file without its extension)",
      args: {
        name: "test-plan-name",
      },
    },
    {
      name: "-only-testing",
      description:
        "Constrain a test action to only the specified test identifier (TestTarget[/TestClass[/TestMethod]] or @response-file), excluding all others. Takes precedence over -skip-testing",
      isRepeatable: true,
      args: {
        name: "test-identifier",
      },
    },
    {
      name: "-only-testing:",
      insertValue: "-only-testing:{cursor}",
      description:
        "Constrain a test action to only the specified test identifier (TestTarget[/TestClass[/TestMethod]]), excluding all others. Takes precedence over -skip-testing",
      isRepeatable: true,
      args: {
        name: "Test Identifier",
      },
    },
    {
      name: "-skip-testing",
      description:
        "Constrain a test action to skip the specified test identifier (TestTarget[/TestClass[/TestMethod]] or @response-file), including all others",
      isRepeatable: true,
      args: {
        name: "test-identifier",
      },
    },
    {
      name: "-skip-testing:",
      insertValue: "-skip-testing:{cursor}",
      description:
        "Constrain a test action to skip the specified test identifier (TestTarget[/TestClass[/TestMethod]]), including all others",
      isRepeatable: true,
      args: {
        name: "Test Identifier",
      },
    },
    {
      name: "-only-test-configuration",
      description:
        "Constrain a test action to only the specified test configuration within a test plan, excluding all others. Takes precedence over -skip-test-configuration",
      isRepeatable: true,
      args: {
        name: "test-configuration-name",
      },
    },
    {
      name: "-skip-test-configuration",
      description:
        "Constrain a test action to skip the specified test configuration within a test plan, including all others",
      isRepeatable: true,
      args: {
        name: "test-configuration-name",
      },
    },
    {
      name: "-testLanguage",
      description:
        "Specifies the ISO 639-1 language to run tests in, overriding the setting for the test action of the scheme",
      args: {
        name: "language",
      },
    },
    {
      name: "-testRegion",
      description:
        "Specifies the ISO 3166-1 region to run tests in, overriding the setting for the test action of the scheme",
      args: {
        name: "region",
      },
    },
    {
      name: "-test-timeouts-enabled",
      description:
        "Enable or disable test timeout behavior (takes precedence over the value in the test plan)",
      args: yesNoArg(),
    },
    {
      name: "-default-test-execution-time-allowance",
      description:
        "The default execution time an individual test is given to execute, if test timeouts are enabled",
      args: {
        name: "seconds",
      },
    },
    {
      name: "-maximum-test-execution-time-allowance",
      description:
        "The maximum execution time an individual test is given to execute, regardless of the test's preferred allowance",
      args: {
        name: "seconds",
      },
    },
    {
      name: "-test-iterations",
      description:
        "Run tests this many times. With -retry-tests-on-failure or -run-tests-until-failure, this is the maximum number of iterations",
      args: {
        name: "number",
      },
    },
    {
      name: "-retry-tests-on-failure",
      description:
        "Retry tests on failure (a maximum of 3 iterations unless -test-iterations is given)",
      exclusiveOn: ["-run-tests-until-failure"],
    },
    {
      name: "-run-tests-until-failure",
      description:
        "Run tests until they fail (a maximum of 100 iterations unless -test-iterations is given)",
      exclusiveOn: ["-retry-tests-on-failure"],
    },
    {
      name: "-test-repetition-relaunch-enabled",
      description:
        "Whether each repetition of a test uses a new process. Use with -test-iterations, -retry-tests-on-failure or -run-tests-until-failure",
      args: yesNoArg(),
    },
    {
      name: "-collect-test-diagnostics",
      description:
        "Whether verbose and long-running diagnostics, like sysdiagnoses or log archives, are collected when testing (default: the value in the test plan)",
      args: {
        name: "mode",
        suggestions: ["on-failure", "never"],
      },
    },
    {
      name: "-enumerate-tests",
      description:
        "List the tests that would execute (with the test or test-without-building actions) instead of running them. Requires a -destination",
    },
    {
      name: "-test-enumeration-style",
      description:
        "Whether enumerated tests are grouped hierarchically (default) or listed flat as identifiers for -skip-testing and -only-testing",
      args: {
        name: "style",
        suggestions: ["hierarchical", "flat"],
      },
    },
    {
      name: "-test-enumeration-format",
      description:
        "Whether enumerated tests are output as human-readable text (default) or as JSON",
      args: {
        name: "format",
        suggestions: ["text", "json"],
      },
    },
    {
      name: "-test-enumeration-output-path",
      description:
        "Write the enumerated tests to this file (- for stdout, the default)",
      args: {
        name: "path | -",
        template: "filepaths",
      },
    },
    {
      name: "-resolvePackageDependencies",
      description:
        "Resolves any Swift package dependencies referenced by the project or workspace",
    },
    {
      name: "-disableAutomaticPackageResolution",
      description:
        "Prevents packages from automatically being resolved to versions other than those recorded in the `Package.resolved` file",
    },
    {
      name: "-json",
      description: "Output as JSON",
    },
    {
      name: "-scmProvider",
      description:
        "Which implementation to use for Git operations (system/xcode)",
      args: {
        name: "Implementation",
        suggestions: ["system", "xcode"],
      },
    },
    {
      name: "-showBuildTimingSummary",
      description:
        "Display a report of the timings of all the commands invoked during the build",
    },
    {
      name: "-create-xcframework",
      description:
        "Create an xcframework from prebuilt libraries; -help for more information",
    },
    {
      name: "build",
      description:
        "Build the target in the build root (SYMROOT). This is the default build action",
    },
    {
      name: "build-for-testing",
      description:
        "Build the target and associated tests in the build root (SYMROOT), and write an xctestrun file there. Requires a scheme",
    },
    {
      name: "analyze",
      description:
        "Build and analyze a target or scheme from the build root (SYMROOT). Requires a scheme",
    },
    {
      name: "archive",
      description:
        "Archive a scheme from the build root (SYMROOT). Requires a scheme",
    },
    {
      name: "test",
      description:
        "Test a scheme from the build root (SYMROOT). Requires a scheme and optionally a destination",
    },
    {
      name: "test-without-building",
      description:
        "Test compiled bundles found via -scheme (in the build root) or via -xctestrun or -testProductsPath",
    },
    {
      name: "docbuild",
      description:
        "Build the target and associated documentation in the build root (SRCROOT)",
    },
    {
      name: "installsrc",
      description:
        "Copy the source of the project to the source root (SRCROOT)",
    },
    {
      name: "install",
      description:
        "Build the target and install it into the target's installation directory in the distribution root (DSTROOT)",
    },
    {
      name: "clean",
      description:
        "Remove build products and intermediate files from the build root (SYMROOT)",
    },
  ],
};

export default completionSpec;
