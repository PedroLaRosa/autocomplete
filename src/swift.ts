// Swift v6.4.2 (swift-6.4.2-RELEASE tag of swiftlang/swift-driver and swiftlang/swift-package-manager, 2026-11-19).
// Source: static read of the release-tag sources, nothing was executed: swift-driver Sources/SwiftOptions/Options.swift
// (the options `swift --help` prints: not hidden, not frontend-only, accepted by the interactive driver), the swift-argument-parser
// declarations in swift-package-manager (Sources/Commands, CoreCommands, SwiftSDKCommand, PackageRegistryCommand,
// PackageCollectionsCommand) and swift-driver Sources/swift-help. Hidden commands/options are left out unless the old spec had them.
// Not covered: swiftc, swift-frontend and the other `swift-*` tools shipped in the toolchain (swift-format, swift-demangle, ...).
import { keyValue } from "@tabsmith/autocomplete-generators";

const helpOption: Fig.Option = {
  name: ["--help", "-h", "-help"],
  description: "Show help information",
};

const versionOption: Fig.Option = {
  name: "--version",
  description: "Show the version",
};

const commonOptions: Fig.Option[] = [helpOption, versionOption];

// The compiler driver (`swift`, `swift repl`) also accepts the single-dash `-version`
const driverCommonOptions: Fig.Option[] = [
  helpOption,
  { ...versionOption, name: ["--version", "-version"] },
];

// `--enable-<feature>` / `--disable-<feature>` pair (swift-argument-parser's prefixedEnableDisable inversion)
const enableDisable = (
  feature: string,
  enableDescription: string,
  disableDescription: string
): Fig.Option[] => [
  {
    name: `--enable-${feature}`,
    description: enableDescription,
    exclusiveOn: [`--disable-${feature}`],
  },
  {
    name: `--disable-${feature}`,
    description: disableDescription,
    exclusiveOn: [`--enable-${feature}`],
  },
];

const pathOption = (
  name: string,
  description: string,
  template: "filepaths" | "folders" = "folders"
): Fig.Option => ({
  name,
  description,
  args: { name: "path", template },
});

const persistent = (options: Fig.Option[]): Fig.Option[] =>
  options.map((option) => ({ ...option, isPersistent: true }));

const executableGenerator: Fig.Generator = {
  script: ["swift", "package", "completion-tool", "list-executables"],
  postProcess: (output) =>
    output
      .split("\n")
      .filter(Boolean)
      .map((name) => ({ name, description: "Executable product" })),
};

const testLibraryOptions: Fig.Option[] = [
  ...enableDisable(
    "xctest",
    "Include XCTest support in the build",
    "Do not include XCTest support in the build"
  ),
  ...enableDisable(
    "swift-testing",
    "Include Swift Testing support in the build",
    "Do not include Swift Testing support in the build"
  ),
];

// Options shared by `swift build`, `swift run`, `swift test` and `swift package` (SwiftPM's GlobalOptions)
const globalOptions: Fig.Option[] = [
  // Paths & Locations
  pathOption(
    "--package-path",
    "Specify the package path to operate on (default current directory). This changes the working directory before any other operation"
  ),
  pathOption("--cache-path", "Specify the shared cache directory path"),
  pathOption(
    "--config-path",
    "Specify the shared configuration directory path"
  ),
  pathOption("--security-path", "Specify the shared security directory path"),
  pathOption(
    "--scratch-path",
    "Specify a custom scratch directory path (default .build)"
  ),
  {
    ...pathOption(
      "--build-path",
      "Specify a custom scratch directory path. Use --scratch-path instead"
    ),
    deprecated: true,
    hidden: true,
  },
  {
    ...pathOption(
      "--multiroot-data-file",
      "The path to the file containing multiroot package data (currently Xcode's workspace file)"
    ),
    hidden: true,
  },
  {
    ...pathOption(
      "--destination",
      "The path to the compilation destination describing JSON file",
      "filepaths"
    ),
    hidden: true,
  },
  pathOption(
    "--swift-sdks-path",
    "Path to the directory containing installed Swift SDKs"
  ),
  {
    name: "--toolset",
    description:
      "Specify a toolset JSON file to use when building for the target platform. Use the option multiple times to specify more than one toolset. Toolsets will be merged in the order they're specified into a single final toolset for the current build",
    isRepeatable: true,
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--pkg-config-path",
    description:
      "Specify alternative path to search for pkg-config `.pc` files. Use the option multiple times to specify more than one path",
    isRepeatable: true,
    args: { name: "path", template: "folders" },
  },

  // Caching
  ...enableDisable(
    "dependency-cache",
    "Use a shared cache when fetching dependencies (default: enabled)",
    "Do not use a shared cache when fetching dependencies"
  ),
  ...enableDisable(
    "build-manifest-caching",
    "Enable llbuild manifest caching (default: enabled)",
    "Disable llbuild manifest caching"
  ),
  {
    name: "--manifest-cache",
    description:
      "Caching mode of Package.swift manifests. Valid values are: (shared: shared cache, local: package's build directory, none: disabled)",
    args: {
      name: "mode",
      suggestions: ["shared", "local", "none"],
      default: "shared",
    },
  },
  ...enableDisable(
    "experimental-prebuilts",
    "Let macros use prebuilt swift-syntax libraries (default: enabled)",
    "Do not let macros use prebuilt swift-syntax libraries"
  ),

  // Logging
  {
    name: ["-v", "--verbose"],
    description: "Increase verbosity to include informational output",
  },
  {
    name: ["--vv", "--very-verbose"],
    description: "Increase verbosity to include debug output",
  },
  {
    name: ["-q", "--quiet"],
    description: "Decrease verbosity to only include error output",
  },
  {
    name: "--color-diagnostics",
    description:
      "Print color diagnostics when printing to a TTY (default: enabled when connected to a TTY unless NO_COLOR is set)",
    exclusiveOn: ["--no-color-diagnostics"],
  },
  {
    name: "--no-color-diagnostics",
    description: "Do not print color diagnostics",
    exclusiveOn: ["--color-diagnostics"],
  },

  // Security
  {
    name: "--disable-sandbox",
    description: "Disable the sandbox when executing subprocesses",
  },
  {
    name: "--netrc",
    description:
      "Use netrc file even in cases where other credential stores are preferred",
  },
  ...enableDisable(
    "netrc",
    "Load credentials from a netrc file (default: enabled)",
    "Do not load credentials from a netrc file"
  ),
  pathOption("--netrc-file", "Specify the netrc file path", "filepaths"),
  ...enableDisable(
    "keychain",
    "Search for credentials in the macOS keychain (default: enabled on macOS)",
    "Do not search for credentials in the macOS keychain"
  ),
  {
    name: "--resolver-fingerprint-checking",
    description: "Fingerprint checking mode used by the dependency resolver",
    args: {
      name: "mode",
      suggestions: ["strict", "warn"],
      default: "strict",
    },
  },
  {
    name: "--resolver-signing-entity-checking",
    description: "Signing entity checking mode used by the dependency resolver",
    args: {
      name: "mode",
      suggestions: ["strict", "warn"],
      default: "warn",
    },
  },
  ...enableDisable(
    "signature-validation",
    "Validate signatures on package releases downloaded from the registry (default: enabled)",
    "Do not validate signatures on package releases downloaded from the registry"
  ),

  // Resolution
  ...enableDisable(
    "prefetching",
    "Enable prefetching in the resolver, which kicks off parallel git cloning (default: enabled)",
    "Disable prefetching in the resolver"
  ),
  {
    name: [
      "--force-resolved-versions",
      "--disable-automatic-resolution",
      "--only-use-versions-from-resolved-file",
    ],
    description:
      "Only use versions from the Package.resolved file and fail resolution if it is out-of-date",
  },
  {
    name: "--skip-update",
    description:
      "Skip updating dependencies from their remote during a resolution",
  },
  {
    name: "--disable-scm-to-registry-transformation",
    description: "Disable source control to registry transformation",
    exclusiveOn: [
      "--use-registry-identity-for-scm",
      "--replace-scm-with-registry",
    ],
  },
  {
    name: "--use-registry-identity-for-scm",
    description:
      "Look up source control dependencies in the registry and use their registry identity when possible to help deduplicate across the two origins",
    exclusiveOn: [
      "--disable-scm-to-registry-transformation",
      "--replace-scm-with-registry",
    ],
  },
  {
    name: "--replace-scm-with-registry",
    description:
      "Look up source control dependencies in the registry and use the registry to retrieve them instead of source control when possible",
    exclusiveOn: [
      "--disable-scm-to-registry-transformation",
      "--use-registry-identity-for-scm",
    ],
  },
  {
    name: "--default-registry-url",
    description:
      "Default registry URL to use, instead of the registries.json configuration file",
    args: { name: "url" },
  },

  // Build options
  {
    name: ["-c", "--configuration"],
    description: "Build with the specified configuration",
    args: {
      name: "configuration",
      suggestions: ["debug", "release"],
    },
  },
  {
    name: "-Xcc",
    description: "Pass flag through to all C compiler invocations",
    isRepeatable: true,
    args: { name: "flag" },
  },
  {
    name: "-Xswiftc",
    description: "Pass flag through to all Swift compiler invocations",
    isRepeatable: true,
    args: { name: "flag" },
  },
  {
    name: "-Xlinker",
    description: "Pass flag through to all linker invocations",
    isRepeatable: true,
    args: { name: "flag" },
  },
  {
    name: "-Xcxx",
    description: "Pass flag through to all C++ compiler invocations",
    isRepeatable: true,
    args: { name: "flag" },
  },
  {
    name: "--triple",
    description: "The compilation destination's target triple",
    args: { name: "triple" },
  },
  {
    name: "--sdk",
    description: "The path to the compilation destination's SDK",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--toolchain",
    description: "The path to the compilation destination's toolchain",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--swift-sdk",
    description: "Filter for selecting a specific Swift SDK to build with",
    args: { name: "selector" },
  },
  {
    name: "--sanitize",
    description: "Turn on runtime checks for erroneous behavior",
    isRepeatable: true,
    args: {
      name: "sanitizer",
      suggestions: ["address", "thread", "undefined", "scudo", "fuzzer"],
    },
  },
  {
    name: "--auto-index-store",
    description:
      "Automatically enable or disable the indexing-while-building feature (default)",
    exclusiveOn: ["--enable-index-store", "--disable-index-store"],
  },
  {
    name: "--enable-index-store",
    description: "Enable the indexing-while-building feature",
    exclusiveOn: ["--auto-index-store", "--disable-index-store"],
  },
  {
    name: "--disable-index-store",
    description: "Disable the indexing-while-building feature",
    exclusiveOn: ["--auto-index-store", "--enable-index-store"],
  },
  {
    name: "--enable-parseable-module-interfaces",
    description:
      "Enable generation of `.swiftinterface` files alongside `.swiftmodule` files",
  },
  {
    name: ["-j", "--jobs"],
    description:
      "The number of jobs to spawn in parallel during the build process",
    args: { name: "jobs" },
  },
  {
    name: "--use-integrated-swift-driver",
    description:
      "Use the integrated Swift driver rather than shelling out to a separate process",
  },
  {
    name: "--explicit-target-dependency-import-check",
    description:
      "Check that targets only import their explicitly declared dependencies",
    args: {
      name: "mode",
      suggestions: ["none", "warn", "error"],
      default: "none",
    },
  },
  {
    name: "--build-system",
    description: "Specify the build system to use",
    args: {
      name: "build system",
      suggestions: [
        { name: "native", description: "Native build system (deprecated)" },
        {
          name: "swiftbuild",
          description: "Swift Build build engine (default)",
        },
        {
          name: "xcode",
          description: "Xcode build system integration (deprecated)",
        },
      ],
      default: "swiftbuild",
    },
  },
  {
    name: "-debug-info-format",
    description: "The debug information format to use",
    args: {
      name: "format",
      suggestions: ["dwarf", "codeview", "none"],
    },
  },
  {
    name: "--experimental-enable-codesize-profile",
    description:
      "Generate SIL, LLVM IR, and optimization record files for code size profiling",
  },
  pathOption(
    "--experimental-codesize-profile-output-dir",
    "Directory to store code size profiling output files"
  ),
  ...enableDisable(
    "experimental-strip-products",
    "Strip debug symbols from the final binary",
    "Do not strip debug symbols from the final binary"
  ),

  // Linker options
  ...enableDisable(
    "dead-strip",
    "Let the linker strip unused code (default: enabled)",
    "Do not let the linker strip unused code"
  ),
  {
    name: "--disable-local-rpath",
    description: "Disable adding $ORIGIN/@loader_path to the rpath by default",
  },

  // Trait options
  {
    name: "--traits",
    description:
      "Enable the specified traits of the package. Specify multiple traits as a comma-separated list, for example: `--traits Trait1,Trait2`. When enabling specific traits, you must also explicitly enable the default traits by passing `defaults` to this option",
    args: { name: "traits" },
  },
  {
    name: "--enable-all-traits",
    description: "Enable all traits of the package",
  },
  {
    name: "--disable-default-traits",
    description: "Disable all default traits of the package",
  },
];

// Software Bill of Materials (SBOM) options of `swift build` and `swift package generate-sbom`
const sbomOptions: Fig.Option[] = [
  {
    name: "--sbom-spec",
    description: "Set the SBOM specification and generate an SBOM",
    isRepeatable: true,
    args: {
      name: "spec",
      suggestions: [
        {
          name: "cyclonedx",
          description: "Most recent major version of CycloneDX",
        },
        { name: "spdx", description: "Most recent major version of SPDX" },
        {
          name: "cyclonedx1",
          description: "Most recent minor version of CycloneDX v1",
        },
        {
          name: "spdx3",
          description: "Most recent minor version of SPDX v3",
        },
      ],
    },
  },
  {
    name: "--sbom-output-dir",
    description:
      "The absolute or relative directory path to generate the SBOM(s) in. Must be used with --sbom-spec (default <scratch_path>/sboms)",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--sbom-filter",
    description:
      "Filter the SBOM components and dependencies by products and/or packages. Must be used with --sbom-spec",
    args: {
      name: "filter",
      suggestions: [
        { name: "all", description: "Include all entities in the SBOM" },
        {
          name: "product",
          description:
            "Only include product information and product dependencies",
        },
        {
          name: "package",
          description:
            "Only include package information and package dependencies",
        },
      ],
      default: "all",
    },
  },
  {
    name: "--sbom-warning-only",
    description:
      "Treat SBOM generation errors as warnings. Must be used with --sbom-spec",
  },
];

// Swift Testing's attachments directory (`swift test` and `swift test list`)
const attachmentsPathOption: Fig.Option = pathOption(
  "--attachments-path",
  "Path where attachments should be written (Swift Testing only). This path must be an existing directory the current user can write to. If not specified, any attachments created during testing are discarded"
);

// Options shared by `swift test` and `swift test list`
const sharedTestOptions: Fig.Option[] = [
  {
    name: "--skip-build",
    description: "Skip building the test target",
  },
  {
    name: "--test-product",
    description: "Test the specified product",
    hidden: true,
    args: { name: "product" },
  },
  ...testLibraryOptions,
  attachmentsPathOption,
];

// Options of the command plugin machinery (`swift package plugin` and `swift package <plugin-command>`)
const pluginOptions: Fig.Option[] = [
  {
    name: "--allow-writing-to-package-directory",
    description: "Allow the plugin to write to the package directory",
  },
  {
    name: "--allow-writing-to-directory",
    description: "Allow the plugin to write to an additional directory",
    isRepeatable: true,
    args: { name: "directory", template: "folders" },
  },
  {
    name: "--allow-network-connections",
    description:
      "Allow the plugin to make network connections. The `local` and `all` values can be followed by a colon and a comma-separated list of ports, for example `local:8080,9090`",
    args: {
      name: "scope",
      suggestions: ["none", "local", "all", "docker", "unixDomainSocket"],
      default: "none",
    },
  },
  {
    name: "--package",
    description:
      "Limit available plugins to a single package with the given identity",
    args: { name: "identity" },
  },
];

const driverOptions: Fig.Option[] = [
  {
    name: "-access-notes-path",
    description:
      "Specify YAML file to override attributes on Swift declarations in this module",
    args: {
      name: "path",
      description:
        "Specify YAML file to override attributes on Swift declarations in this module",
    },
  },
  {
    name: "-allow-availability-platforms",
    description:
      "Restrict availability metadata to the given platforms, e.g. 'macOS,Swift'",
    args: {
      name: "platforms",
      description:
        "Restrict availability metadata to the given platforms, e.g. 'macOS,Swift'",
    },
  },
  {
    name: "-allow-non-resilient-access",
    description:
      "Ensures all contents are generated besides exportable decls in the binary module, so non-resilient access can be allowed",
  },
  {
    name: "-allowable-client",
    description: "Module names that are allowed to import this module",
    args: {
      name: "vers",
      description: "Module names that are allowed to import this module",
    },
  },
  {
    name: "-assert-config",
    description:
      "Specify the assert_configuration replacement. Possible values are Debug, Release, Unchecked, DisableReplacement",
    args: {
      name: "configuration",
      description: "The assert_configuration replacement",
      suggestions: ["Debug", "Release", "Unchecked", "DisableReplacement"],
    },
  },
  {
    name: "-block-availability-platforms",
    description:
      "Remove the given platforms from symbol graph availability metadata, e.g. 'macOS,Swift'",
    args: {
      name: "platforms",
      description:
        "Remove the given platforms from symbol graph availability metadata, e.g. 'macOS,Swift'",
    },
  },
  {
    name: "-build-id",
    description: "Specify the build ID argument passed to the linker",
    args: {
      name: "build-id",
      description: "Specify the build ID argument passed to the linker",
    },
  },
  {
    name: "-cache-compile-job",
    description: "Enable compiler caching",
  },
  {
    name: "-cache-disable-replay",
    description: "Skip loading the compilation result from cache",
  },
  {
    name: "-cas-path",
    description: "Path to CAS",
    args: {
      name: "path",
      description: "Path to CAS",
    },
  },
  {
    name: "-cas-plugin-option",
    description: "Option pass to CAS Plugin",
    args: {
      name: "name=option",
      description: "Option pass to CAS Plugin",
    },
  },
  {
    name: "-cas-plugin-path",
    description: "Path to CAS Plugin",
    args: {
      name: "path",
      description: "Path to CAS Plugin",
    },
  },
  {
    name: "-clang-build-session-file",
    description:
      "Use the last modification time of <file> as the underlying Clang build session timestamp",
    args: {
      name: "file",
      description:
        "Use the last modification time of <file> as the underlying Clang build session timestamp",
      template: "filepaths",
    },
  },
  {
    name: "-clang-scanner-module-cache-path",
    description: "Specifies the Clang dependency scanner module cache path",
    args: {
      name: "path",
      description: "Specifies the Clang dependency scanner module cache path",
      template: "filepaths",
    },
  },
  {
    name: "-clang-target-variant",
    description:
      "Separately set the target we should use for internal Clang instance for the 'zippered' code for macCatalyst",
    args: {
      name: "target",
      description:
        "Separately set the target we should use for internal Clang instance for the 'zippered' code for macCatalyst",
    },
  },
  {
    name: "-clang-target",
    description:
      "Separately set the target we should use for internal Clang instance",
    args: {
      name: "target",
      description: "The target we should use for internal Clang instance",
    },
  },
  {
    name: "-color-diagnostics",
    description: "Print diagnostics in color",
  },
  {
    name: "-compiler-assertions",
    description: "Enable internal self-checks while compiling",
  },
  {
    name: "-const-gather-protocols-list",
    description:
      "Specify a list of protocols for extraction of conformances 'const values'",
    args: {
      name: "path",
      description:
        "Specify a list of protocols for extraction of conformances 'const values'",
      template: "filepaths",
    },
  },
  {
    name: "-continue-building-after-errors",
    description: "Continue building, even after errors are encountered",
  },
  {
    name: "-coverage-prefix-map",
    description: "Remap source paths in coverage info",
    args: {
      name: "prefix",
      description: "The remap source paths in coverage info",
      generators: keyValue({
        separator: "=",
      }),
    },
  },
  {
    name: "-cxx-interoperability-mode",
    description:
      "Enables C++ interoperability; pass 'default' to enable or 'off' to disable",
    requiresSeparator: true,
    args: {
      name: "mode",
      description: "C++ interoperability mode",
      suggestions: ["default", "off"],
    },
  },
  {
    name: "-debug-info-format",
    description:
      "Specify the debug info format type to either 'dwarf' or 'codeview'",
    dependsOn: ["-g"],
    requiresSeparator: true,
    args: {
      name: "type",
      description: "The debug info format type",
      suggestions: ["dwarf", "codeview"],
    },
  },
  {
    name: "-debug-info-store-invocation",
    description: "Emit the compiler invocation in the debug info",
  },
  {
    name: "-debug-module-path",
    description:
      "Path or cache key to this module's binary swiftmodule artifact (required by debug info)",
    args: {
      name: "path",
      description:
        "Path or cache key to this module's binary swiftmodule artifact (required by debug info)",
      template: "filepaths",
    },
  },
  {
    name: "-debug-module-self-key",
    description:
      "Embeded the key of current job in debug info generation (required by debug info)",
  },
  {
    name: "-debug-prefix-map",
    description: "Remap source paths in debug info",
    args: {
      name: "prefix=replacement",
      description: "The remap source paths in debug info",
      generators: keyValue({
        separator: "=",
      }),
    },
  },
  {
    name: "-default-isolation",
    description:
      "Specify the default actor isolation: MainActor or nonisolated. Defaults to nonisolated",
    args: {
      name: "isolation",
      description: "The default actor isolation",
      suggestions: ["MainActor", "nonisolated"],
    },
  },
  {
    name: "-dependency-scan-serialize-diagnostics-path",
    description:
      "Emit a serialized diagnostics file for the dependency scanning task to <path>",
    args: {
      name: "path",
      description:
        "Emit a serialized diagnostics file for the dependency scanning task to <path>",
      template: "filepaths",
    },
  },
  {
    name: "-diagnostic-style",
    description:
      "The formatting style used when printing diagnostics ('swift' or 'llvm')",
    args: {
      name: "style",
      description: "The formatting style used when printing diagnostics",
      suggestions: ["swift", "llvm"],
    },
  },
  {
    name: "-disable-actor-data-race-checks",
    description: "Disable runtime checks for actor data races",
  },
  {
    name: "-disable-autolinking-runtime-compatibility-concurrency",
    description:
      "Do not use autolinking for the concurrency runtime compatibility library",
  },
  {
    name: "-disable-autolinking-runtime-compatibility-dynamic-replacements",
    description:
      "Do not use autolinking for the dynamic replacement runtime compatibility library",
  },
  {
    name: "-disable-autolinking-runtime-compatibility",
    description: "Do not use autolinking for runtime compatibility libraries",
  },
  {
    name: "-disable-clang-target",
    description:
      "Disable a separately specified target triple for Clang instance to use",
  },
  {
    name: "-disable-dynamic-actor-isolation",
    description: "Disable dynamic actor isolation checks",
  },
  {
    name: "-disable-experimental-feature",
    description: "Disable an experimental feature",
    args: {
      name: "feature",
      description: "The experimental feature to disable",
    },
  },
  {
    name: "-disable-incremental-file-hashing",
    description:
      "Disable hashing of input and dependency file data that can prevent unnecessary invalidation",
  },
  {
    name: "-disable-incremental-imports",
    description:
      "Disable cross-module incremental build metadata and driver scheduling for Swift modules",
  },
  {
    name: "-disable-only-one-dependency-file",
    description:
      "Disables incremental build optimization that only produces one dependencies file",
  },
  {
    name: "-disable-sandbox",
    description: "Disable using the sandbox when executing subprocesses",
  },
  {
    name: "-disable-upcoming-feature",
    description:
      "Disable a feature that will be introduced in an upcoming language version",
    args: {
      name: "feature",
      description: "The upcoming feature to disable",
    },
  },
  {
    name: "-disallow-use-new-driver",
    description: "Disable using new swift-driver",
  },
  {
    name: "-dwarf-version",
    description: "DWARF debug info version to produce if requested",
    requiresSeparator: true,
    args: {
      name: "version",
      description: "DWARF version",
    },
  },
  {
    name: "-D",
    description: "Marks a conditional compilation flag as true",
    args: {
      name: "flag",
      description: "The conditional compilation flag to mark as true",
    },
  },
  {
    name: "-embed-tbd-for-module",
    description: "Embed symbols from the module in the emitted tbd file",
    args: {
      name: "module",
      description: "Embed symbols from the module in the emitted tbd file",
    },
  },
  {
    name: "-emit-module-dependencies-path",
    description:
      "Emit a discovered dependencies file for the emit-module task to <path>",
    args: {
      name: "path",
      description:
        "Emit a discovered dependencies file for the emit-module task to <path>",
      template: "filepaths",
    },
  },
  {
    name: "-emit-module-serialize-diagnostics-path",
    description:
      "Emit a serialized diagnostics file for the emit-module task to <path>",
    args: {
      name: "path",
      description:
        "Emit a serialized diagnostics file for the emit-module task to <path>",
      template: "filepaths",
    },
  },
  {
    name: "-enable-actor-data-race-checks",
    description: "Emit runtime checks for actor data races",
  },
  {
    name: "-enable-autolinking-runtime-compatibility-bytecode-layouts",
    description:
      "Enable autolinking for the bytecode layouts runtime compatibility library",
  },
  {
    name: "-enable-bare-slash-regex",
    description:
      "Enable the use of forward slash regular-expression literal syntax",
  },
  {
    name: "-enable-builtin-module",
    description: "Enables the explicit import of the Builtin module",
  },
  {
    name: "-enable-deterministic-check",
    description: "Check compiler output determinism by running it twice",
  },
  {
    name: "-enable-experimental-additive-arithmetic-derivation",
    description:
      "Enable experimental 'AdditiveArithmetic' derived conformances",
  },
  {
    name: "-enable-experimental-concise-pound-file",
    description: "Enable experimental concise '#file' identifier",
  },
  {
    name: "-enable-experimental-feature",
    description: "Enable an experimental feature",
    args: {
      name: "feature",
      description: "The experimental feature to enable",
    },
  },
  {
    name: "-enable-experimental-forward-mode-differentiation",
    description: "Enable experimental forward mode differentiation",
  },
  {
    name: "-enable-incremental-file-hashing",
    description:
      "Enable hashing of input and dependency file data that can prevent unnecessary invalidation",
  },
  {
    name: "-enable-incremental-imports",
    description:
      "Enable cross-module incremental build metadata and driver scheduling for Swift modules",
  },
  {
    name: "-enable-library-evolution",
    description:
      "Build the module to allow binary-compatible library evolution",
  },
  {
    name: "-enable-only-one-dependency-file",
    description:
      "Enables incremental build optimization that only produces one dependencies file",
  },
  {
    name: "-enable-upcoming-feature",
    description:
      "Enable a feature that will be introduced in an upcoming language version",
    args: {
      name: "feature",
      description: "The upcoming feature to enable",
    },
  },
  {
    name: "-enforce-exclusivity",
    description: "Enforce law of exclusivity",
    requiresSeparator: true,
    args: {
      name: "enforcement",
      description: "Enforce law of exclusivity",
    },
  },
  {
    name: "-experimental-allow-non-resilient-access",
    description: "Deprecated; use -allow-non-resilient-access instead",
    deprecated: true,
  },
  {
    name: "-experimental-emit-variant-module",
    description:
      "When a target variant triple is specified, the same driver invocation will emit two Swift modules, one for the primary target and one for the variant",
  },
  {
    name: "-experimental-package-bypass-resilience",
    description: "Deprecated; has no effect",
    deprecated: true,
  },
  {
    name: "-experimental-package-cmo-abort-on-deserialization-fail",
    description:
      "Abort if a deserialization error is found while package optimization is enabled",
  },
  {
    name: "-experimental-package-cmo",
    description: "Deprecated; use -package-cmo instead",
    deprecated: true,
  },
  {
    name: "-explain-module-dependency-detailed",
    description:
      "Emit remarks describing every possible dependency path that explains why compilation may depend on a module with a given name",
    args: {
      name: "module",
      description: "Name of the module to explain",
    },
  },
  {
    name: "-explain-module-dependency",
    description:
      "Emit remark describing why compilation may depend on a module with a given name",
    args: {
      name: "module",
      description: "Name of the module to explain",
    },
  },
  {
    name: "-explicit-auto-linking",
    description:
      "Instead of linker-load directives, have the driver specify all link dependencies on the linker invocation. Requires '-explicit-module-build'",
  },
  {
    name: "-export-as",
    description:
      "Module name to use when referenced in clients module interfaces",
    args: {
      name: "module",
      description:
        "Module name to use when referenced in clients module interfaces",
    },
  },
  {
    name: "-external-plugin-path",
    description:
      "Add directory to the plugin search path with a plugin server executable",
    args: {
      name: "path#plugin-server-path",
      description:
        "Add directory to the plugin search path with a plugin server executable",
    },
  },
  {
    name: "-e",
    description: "Executes a line of code provided on the command line",
    args: {
      name: "code",
      description: "A line of Swift code to execute",
    },
  },
  {
    name: "-file-compilation-dir",
    description:
      "The compilation directory to embed in the debug info. Coverage mapping is not supported yet",
    args: {
      name: "path",
      description: "The compilation directory to embed in the debug info",
    },
  },
  {
    name: "-file-prefix-map",
    description: "Remap source paths in debug, coverage, and index info",
    args: {
      name: "prefix",
      description: "The remap source paths in debug, coverage, and index info",
      generators: keyValue({
        separator: "=",
      }),
    },
  },
  {
    name: "-framework",
    description: "Specifies a framework which should be linked against",
    args: {
      name: "framework",
      description: "The framework which should be linked against",
    },
  },
  {
    name: "-Fsystem",
    description: "Add directory to system framework search path",
    args: {
      name: "directory",
      description: "The directory to add to the system framework search path",
    },
  },
  {
    name: "-F",
    description: "Add directory to framework search path",
    args: {
      name: "directory",
      description: "The directory to add to the framework search path",
    },
  },
  {
    name: "-gdwarf-types",
    description: "Emit full DWARF type info",
  },
  {
    name: "-gline-tables-only",
    description: "Emit minimal debug info for backtraces only",
  },
  {
    name: "-gnone",
    description: "Don't emit debug info",
  },
  {
    name: "-g",
    description:
      "Emit debug info. This is the preferred setting for debugging with LLDB",
  },
  {
    name: ["-import-bridging-header", "-import-objc-header"],
    description: "Implicitly imports a C header file",
    args: {
      name: "header",
      description: "The C header file to import implicitly",
      template: "filepaths",
    },
  },
  {
    name: "-in-process-plugin-server-path",
    description: "Path to dynamic library plugin server",
    args: {
      name: "path",
      description: "Path to the dynamic library plugin server",
      template: "filepaths",
    },
  },
  {
    name: "-index-ignore-clang-modules",
    description: "Avoid indexing clang modules (pcms)",
  },
  {
    name: "-index-include-locals",
    description:
      "Include local definitions/references in the produced index data",
  },
  {
    name: "-index-store-compress",
    description: "Compress the unit and record files in the index store",
  },
  {
    name: "-index-store-path",
    description: "Store indexing data to <path>",
    args: {
      name: "path",
      description: "The path to store indexing data to",
    },
  },
  {
    name: "-index-unit-output-path",
    description: "Use <path> as the output path in the produced index data",
    args: {
      name: "path",
      description:
        "The specified path as the output path in the produced index data",
    },
  },
  {
    name: "-internal-import-bridging-header",
    description: "Implicitly imports a C header file as an internal import",
    args: {
      name: "header",
      description:
        "The C header file to import implicitly as an internal import",
      template: "filepaths",
    },
  },
  {
    name: "-ir-output-dir",
    description:
      "Output LLVM IR files to directory <dir> as additional output during compilation",
    args: {
      name: "dir",
      description:
        "Output LLVM IR files to directory <dir> as additional output during compilation",
      template: "folders",
    },
  },
  {
    name: "-Isystem",
    description: "Add directory to the system import search path",
    args: {
      name: "directory",
      description: "The directory to add to the system import search path",
      template: "folders",
    },
  },
  {
    name: "-I",
    description: "Add directory to the import search path",
    args: {
      name: "directory",
      description: "The directory to add to the import search path",
    },
  },
  {
    name: "-j",
    description: "Number of commands to execute in parallel",
    args: {
      name: "value",
      description: "The number of commands to execute in parallel",
    },
  },
  {
    name: ["-language-mode", "-swift-version"],
    description: "Interpret input according to a specific Swift language mode",
    args: {
      name: "mode",
      description: "Swift language mode",
    },
  },
  {
    name: "-libc",
    description: "Libc runtime library to use",
    args: {
      name: "runtime",
      description: "The libc runtime library to use",
    },
  },
  {
    name: "-link-objc-runtime",
    description: "Deprecated",
    deprecated: true,
  },
  {
    name: "-load-pass-plugin",
    description: "Load LLVM pass plugin from a dynamic shared object file",
    requiresSeparator: true,
    args: {
      name: "path",
      description: "Load LLVM pass plugin from a dynamic shared object file",
      template: "filepaths",
    },
  },
  {
    name: "-load-plugin-executable",
    description:
      "Path to a compiler plugin executable and a comma-separated list of module names where the macro types are declared",
    args: {
      name: "path#module-names",
      description:
        "Path to a compiler plugin executable and a comma-separated list of module names where the macro types are declared",
    },
  },
  {
    name: "-load-plugin-library",
    description:
      "Path to a dynamic library containing compiler plugins such as macros",
    args: {
      name: "path",
      description:
        "Path to a dynamic library containing compiler plugins such as macros",
      template: "filepaths",
    },
  },
  {
    name: "-load-resolved-plugin",
    description:
      "Path to resolved plugin configuration and a comma-separated list of module names where the macro types are declared. Library path and executable path can be empty if not used",
    args: {
      name: "library-path#executable-path#module-names",
      description:
        "Path to resolved plugin configuration and a comma-separated list of module names where the macro types are declared. Library path and executable path can be empty if not used",
    },
  },
  {
    name: "-locale",
    description: "Choose a language for diagnostic messages",
    args: {
      name: "code",
      description: "The locale code",
    },
  },
  {
    name: "-localization-path",
    description: "Path to localized diagnostic messages directory",
    args: {
      name: "path",
      description: "The path to localized diagnostic messages directory",
    },
  },
  {
    name: "-L",
    description: "Add directory to library link search path",
    args: {
      name: "directory",
      description: "The directory to add to the library link search path",
    },
  },
  {
    name: "-l",
    description: "Specifies a library which should be linked against",
    args: {
      name: "path",
      description: "Specifies a library which should be linked against",
    },
  },
  {
    name: "-min-swift-runtime-version",
    description:
      "The minimum Swift runtime version that will be available at runtime",
    args: {
      name: "vers",
      description:
        "The minimum Swift runtime version that will be available at runtime",
    },
  },
  {
    name: "-module-abi-name",
    description: "ABI name to use for the contents of this module",
    args: {
      name: "name",
      description: "The ABI name to use for the contents of this module",
    },
  },
  {
    name: "-module-alias",
    description:
      "If a source file imports or references module <alias_name>, the <real_name> is used for the contents of the file",
    args: {
      name: "alias",
      description: "The module alias and the contents of the file to be used",
      generators: keyValue({
        separator: "=",
      }),
    },
  },
  {
    name: "-module-cache-path",
    description: "Specifies the module cache path",
    args: {
      name: "path",
      description: "Specifies the Clang module cache path",
    },
  },
  {
    name: "-module-link-name",
    description: "Library to link against when using this module",
    args: {
      name: "name",
      description: "Library to link against when using this module",
    },
  },
  {
    name: "-module-name",
    description: "Name of the module to build",
    args: {
      name: "name",
      description: "Name of the module to build",
    },
  },
  {
    name: "-no-color-diagnostics",
    description: "Do not print diagnostics in color",
  },
  {
    name: "-no-warnings-as-errors",
    description: "Treat warnings as warnings",
  },
  {
    name: "-nostdimport",
    description:
      "Don't search the standard library or toolchain import paths for modules",
  },
  {
    name: "-nostdlibimport",
    description: "Don't search the standard library import path for modules",
  },
  {
    name: "-num-threads",
    description: "Enable multi-threading and specify number of threads",
    args: {
      name: "value",
      description: "The number of threads",
    },
  },
  {
    name: "-Onone",
    description: "Compile without any optimization",
  },
  {
    name: "-Osize",
    description: "Compile with optimizations and target small code size",
  },
  {
    name: "-Ounchecked",
    description: "Compile with optimizations and remove runtime safety checks",
  },
  {
    name: "-O",
    description: "Compile with optimizations",
  },
  {
    name: "-package-cmo",
    description:
      "Enable optimization to perform default CMO within a package boundary",
  },
  {
    name: "-package-name",
    description: "Name of the package the module belongs to",
    args: {
      name: "name",
      description: "Name of the package the module belongs to",
    },
  },
  {
    name: "-plugin-path",
    description: "Add directory to the plugin search path",
    args: {
      name: "directory",
      description: "The directory to add to the plugin search path",
      template: "folders",
    },
  },
  {
    name: "-prefix-serialized-debugging-options",
    description:
      "Apply debug prefix mappings to serialized debug info in Swiftmodule files",
  },
  {
    name: "-pretty-print",
    description: "Pretty-print the output JSON",
  },
  {
    name: "-print-educational-notes",
    description:
      "Include educational notes in printed diagnostic output, if available",
  },
  {
    name: "-print-static-build-config",
    description:
      "Print static build configuration that can be used to evaluate #ifs in Swift source code",
  },
  {
    name: "-print-supported-features",
    description: "Print information about features supported by the compiler",
  },
  {
    name: "-print-target-info",
    description:
      "Print target information for the given target <triple>, such as x86_64-apple-macos10.9",
  },
  {
    name: "-project-name",
    description: "Name of the project this module to build belongs to",
    args: {
      name: "name",
      description: "Name of the project this module belongs to",
    },
  },
  {
    name: "-public-module-name",
    description:
      "Public facing module name to use in diagnostics and documentation",
    args: {
      name: "name",
      description: "Public facing module name",
    },
  },
  {
    name: "-Rcache-compile-job",
    description: "Show remarks for compiler caching",
  },
  {
    name: "-Rcross-import",
    description: "Emit a remark if a cross-import of a module is triggered",
  },
  {
    name: "-register-module-dependency",
    description:
      "Register module for dependency scan without importing in the frontend",
    args: {
      name: "module",
      description: "Name of the module to register",
    },
  },
  {
    name: "-remove-runtime-asserts",
    description: "Remove runtime safety checks",
  },
  {
    name: "-Rindexing-system-module",
    description: "Emit a remark when indexing a system module",
  },
  {
    name: "-Rmacro-loading",
    description: "Emit remarks about loaded macro implementations",
  },
  {
    name: "-Rmodule-api-import",
    description:
      "Emit remarks about the import bridging in each element composing the API",
  },
  {
    name: "-Rmodule-loading",
    description: "Emit remarks about loaded module",
  },
  {
    name: "-Rmodule-recovery",
    description:
      "Emit remarks about contextual inconsistencies in loaded modules",
  },
  {
    name: "-Rmodule-serialization",
    description: "Emit remarks about module serialization",
  },
  {
    name: "-Rpass-missed",
    description:
      "Report missed transformations by optimization passes whose name matches the given POSIX regular expression",
    requiresSeparator: true,
    args: {
      name: "regex",
      description: "Regex to match missed transformations",
    },
  },
  {
    name: "-Rpass",
    description:
      "Report performed transformations by optimization passes whose name matches the given POSIX regular expression",
    requiresSeparator: true,
    args: {
      name: "regex",
      description: "Regex to match performed transformations",
    },
  },
  {
    name: "-Rskip-explicit-interface-build",
    description:
      "Emit a remark if an explicit module interface invocation has an early exit because the expected output is up-to-date",
  },
  {
    name: "-runtime-compatibility-version",
    description:
      "Link compatibility library for Swift runtime version, or 'none'",
    args: {
      name: "version",
      description: "Swift runtime version, or 'none'",
    },
  },
  {
    name: "-save-optimization-record-passes",
    description:
      "Only include passes which match a specified regular expression in the generated optimization record (by default, include all passes)",
    args: {
      name: "regex",
      description:
        "Regex to specify passes to be included in the optimization record",
    },
  },
  {
    name: "-save-optimization-record-path",
    description: "Specify the file name of any generated optimization record",
    args: {
      name: "filename",
      description: "The file name of any generated optimization record",
    },
  },
  {
    name: "-save-optimization-record",
    description: "Generate an optimization record file in a specific format",
    requiresSeparator: true,
    args: {
      name: "format",
      description: "The format",
      default: "YAML",
    },
  },
  {
    name: "-save-optimization-record",
    description: "Generate a YAML optimization record file",
  },
  {
    name: "-scanner-prefix-map-paths",
    description: "Remap paths reported by dependency scanner",
    args: [
      { name: "prefix", description: "The prefix" },
      { name: "replacement", description: "The replacement" },
    ],
  },
  {
    name: "-scanner-prefix-map-sdk",
    description: "Remap paths within SDK reported by dependency scanner",
    args: {
      name: "path",
      description: "Remap paths within SDK reported by dependency scanner",
    },
  },
  {
    name: "-scanner-prefix-map-toolchain",
    description:
      "Remap paths within toolchain directory reported by dependency scanner",
    args: {
      name: "path",
      description:
        "Remap paths within toolchain directory reported by dependency scanner",
    },
  },
  {
    name: "-scanner-prefix-map",
    description: "Remap paths reported by dependency scanner",
    args: {
      name: "prefix=replacement",
      description: "Remap paths reported by dependency scanner",
    },
  },
  {
    name: "-sdk-module-cache-path",
    description:
      "Specifies the module cache path for explicitly-built SDK modules",
    args: {
      name: "path",
      description:
        "Specifies the module cache path for explicitly-built SDK modules",
      template: "filepaths",
    },
  },
  {
    name: "-sdk",
    description: "Compile against a specific SDK",
    args: {
      name: "sdk",
      description: "The SDK to compile against",
    },
  },
  {
    name: "-serialize-diagnostics-path",
    description: "Emit a serialized diagnostics file to <path>",
    args: {
      name: "path",
      description: "The path to write the file to",
    },
  },
  {
    name: "-sil-output-dir",
    description:
      "Output SIL files to directory <dir> as additional output during compilation",
    args: {
      name: "dir",
      description:
        "Output SIL files to directory <dir> as additional output during compilation",
      template: "folders",
    },
  },
  {
    name: "-static-executable",
    description: "Statically link the executable",
  },
  {
    name: "-static-stdlib",
    description: "Statically link the Swift standard library",
  },
  {
    name: "-strict-concurrency",
    description:
      "Specify the how strict concurrency checking will be. The value may be 'minimal' (most 'Sendable' checking is disabled), 'targeted' ('Sendable' checking is enabled in code that uses the concurrency model, or 'complete' ('Sendable' and other checking is enabled for all code in the module)",
    requiresSeparator: true,
    args: {
      name: "concurrency",
      description: "The concurrency",
      suggestions: ["minimal", "targeted", "complete"],
    },
  },
  {
    name: "-strict-memory-safety:migrate",
    description: "Enable migration to strict memory safety checking",
  },
  {
    name: "-strict-memory-safety",
    description: "Enable strict memory safety checking",
  },
  {
    name: "-suppress-notes",
    description: "Suppress all notes",
  },
  {
    name: "-suppress-remarks",
    description: "Suppress all remarks",
  },
  {
    name: "-suppress-warnings",
    description: "Suppress all warnings",
  },
  {
    name: "-sysroot",
    description: "Native Platform sysroot",
    args: {
      name: "sysroot",
      description: "Native Platform sysroot",
      template: "filepaths",
    },
  },
  {
    name: "-target-cpu",
    description: "Generate code for a particular CPU variant",
    args: {
      name: "cpu",
      description: "The CPU variant",
    },
  },
  {
    name: "-target-min-inlining-version",
    description:
      "Require inlinable code with no '@available' attribute to back-deploy to this version of the '-target' OS",
    args: {
      name: "version",
      description: "The target version",
    },
  },
  {
    name: "-target-variant",
    description:
      "Generate 'zippered' code for macCatalyst that can run on the specified variant target triple in addition to the main -target triple",
    args: {
      name: "variant",
      description: "The target variant",
    },
  },
  {
    name: "-target",
    description:
      "Generate code for the given target <triple>, such as x86_64-apple-macos10.9",
    args: {
      name: "triple",
      description: "The target triple",
    },
  },
  {
    name: "-use-ld",
    description: "Specifies the flavor of the linker to be used",
    requiresSeparator: true,
    args: {
      name: "linker",
      description: "The linker to be used",
    },
  },
  {
    name: "-user-module-version",
    description: "Module version specified from Swift module authors",
    args: {
      name: "module",
      description: "The module version",
    },
  },
  {
    name: "-validate-clang-modules-once",
    description:
      "Don't verify input files for Clang modules if the module has been successfully validated or loaded during this build session",
  },
  {
    name: "-vfsoverlay",
    description: "Add directory to VFS overlay file",
    args: {
      name: "directory",
      description: "The directory to the VFS overlay file",
    },
  },
  {
    name: "-visualc-tools-root",
    description: "VisualC++ Tools Root",
    args: {
      name: "root",
      description: "VisualC++ Tools Root",
      template: "filepaths",
    },
  },
  {
    name: "-visualc-tools-version",
    description: "VisualC++ ToolSet Version",
    args: {
      name: "version",
      description: "VisualC++ ToolSet Version",
    },
  },
  {
    name: "-v",
    description: "Show commands to run and use verbose output",
  },
  {
    name: "-warn-concurrency",
    description:
      "Warn about code that is unsafe according to the Swift Concurrency model and will become ill-formed in a future language version",
  },
  {
    name: "-warn-implicit-overrides",
    description: "Warn about implicit overrides of protocol members",
  },
  {
    name: "-warn-swift3-objc-inference-complete",
    description: "Deprecated, has no effect",
    deprecated: true,
  },
  {
    name: "-warn-swift3-objc-inference-minimal",
    description: "Deprecated, has no effect",
    deprecated: true,
  },
  {
    name: "-warnings-as-errors",
    description: "Treat warnings as errors",
  },
  {
    name: "-windows-sdk-root",
    description: "Windows SDK Root",
    args: {
      name: "root",
      description: "Windows SDK Root",
      template: "filepaths",
    },
  },
  {
    name: "-windows-sdk-version",
    description: "Windows SDK Version",
    args: {
      name: "version",
      description: "Windows SDK Version",
    },
  },
  {
    name: "-working-directory",
    description: "Resolve file paths relative to the specified directory",
    args: {
      name: "directory",
      description: "Resolve file paths relative to the specified directory",
    },
  },
  {
    name: "-Xcc",
    description: "Pass <arg> to the C/C++/Objective-C compiler",
    args: {
      name: "arg",
      description: "Argument to pass to the C/C++/Objective-C compiler",
    },
  },
  {
    name: "-Xlinker",
    description: "Specifies an option which should be passed to the linker",
    args: {
      name: "arg",
      description: "Option to be passed to the linker",
    },
  },
];

const mirrorOptions: Fig.Option[] = [
  {
    name: "--original",
    description: "The original url or identity",
    args: { name: "original" },
  },
  {
    name: "--mirror",
    description: "The mirror url or identity",
    args: { name: "mirror" },
  },
];

const formatOption = (
  formats: string[],
  defaultFormat: string
): Fig.Option => ({
  name: "--format",
  description: "Set the output format",
  args: { name: "format", suggestions: formats, default: defaultFormat },
});

// `swift sdk` (also reachable through the deprecated `swift experimental-sdk`)
const sdkSubcommands: Fig.Subcommand[] = [
  {
    name: "configure",
    description: "Manage configuration options for installed Swift SDKs",
    options: [
      helpOption,
      {
        name: "--sdk-root-path",
        description: "A path to a directory containing the SDK root",
        args: { name: "path", template: "folders" },
      },
      {
        name: "--swift-resources-path",
        description:
          "A path to a directory containing Swift resources for dynamic linking",
        args: { name: "path", template: "folders" },
      },
      {
        name: "--swift-static-resources-path",
        description:
          "A path to a directory containing Swift resources for static linking",
        args: { name: "path", template: "folders" },
      },
      {
        name: "--include-search-path",
        description:
          "A path to a directory containing headers. You can specify multiple paths by providing this option multiple times to the command",
        isRepeatable: true,
        args: { name: "path", template: "folders" },
      },
      {
        name: "--library-search-path",
        description:
          "A path to a directory containing libraries. You can specify multiple paths by providing this option multiple times to the command",
        isRepeatable: true,
        args: { name: "path", template: "folders" },
      },
      {
        name: "--toolset-path",
        description:
          "A path to a toolset file. You can specify multiple paths by providing this option multiple times to the command",
        isRepeatable: true,
        args: { name: "path", template: "filepaths" },
      },
      {
        name: "--reset",
        description:
          "Reset configuration properties currently applied to a given Swift SDK and target triple. If you don't specify a property, the system resets all of them for the Swift SDK",
      },
      {
        name: "--show-configuration",
        description:
          "Print all configuration properties currently applied to a given Swift SDK and target triple",
      },
    ],
    args: [
      {
        name: "sdk-id",
        description:
          "An identifier of an already installed Swift SDK. Use the `list` subcommand to see all available identifiers",
      },
      {
        name: "target-triple",
        description: "The target triple of the Swift SDK to configure",
        isOptional: true,
      },
    ],
  },
  {
    name: "install",
    description:
      "Install a given Swift SDK bundle to a location discoverable by SwiftPM. If the artifact bundle is at a remote location, it's downloaded to local filesystem first",
    options: [
      helpOption,
      {
        name: "--checksum",
        description:
          "The checksum of the bundle generated with `swift package compute-checksum`",
        args: { name: "checksum" },
      },
      {
        name: "--color-diagnostics",
        description: "Print color diagnostics when printing to a TTY",
        exclusiveOn: ["--no-color-diagnostics"],
      },
      {
        name: "--no-color-diagnostics",
        description: "Do not print color diagnostics",
        exclusiveOn: ["--color-diagnostics"],
      },
    ],
    args: {
      name: "bundle-path-or-url",
      description:
        "A local filesystem path or a URL of a Swift SDK bundle to install",
      template: "filepaths",
    },
  },
  {
    name: "list",
    description:
      "Print a list of IDs of available Swift SDKs available on the filesystem",
    options: [helpOption],
  },
  {
    name: "remove",
    description:
      "Remove a previously installed Swift SDK bundle from the filesystem",
    options: [helpOption],
    args: {
      name: "sdk-id-or-bundle-name",
      description:
        "Name of the Swift SDK bundle or ID of the Swift SDK to remove from the filesystem",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "swift",
  description: "Swift compiler",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [...driverCommonOptions, ...driverOptions],
  subcommands: [
    // swift build
    {
      name: "build",
      description: "Build sources into binary products",
      options: [
        ...commonOptions,
        ...globalOptions,
        {
          name: "--build-tests",
          description: "Build both source and test targets",
          exclusiveOn: ["--product", "--target"],
        },
        ...enableDisable(
          "code-coverage",
          "Measure code coverage during the build",
          "Do not measure code coverage during the build (default)"
        ),
        {
          name: "--show-bin-path",
          description: "Print the binary output path",
        },
        {
          name: "--print-manifest-job-graph",
          description:
            "Write the command graph for the build manifest as a Graphviz file",
        },
        {
          name: "--print-pif-manifest-graph",
          description:
            "Write the PIF JSON sent to Swift Build as a Graphviz file",
        },
        {
          name: "--target",
          description: "Build the specified target",
          exclusiveOn: ["--product", "--build-tests"],
          args: {
            name: "target",
            description: "The name of the target to build",
          },
        },
        {
          name: "--product",
          description: "Build the specified product",
          exclusiveOn: ["--target", "--build-tests"],
          args: {
            name: "product",
            description: "The name of the product to build",
          },
        },
        {
          name: "--static-swift-stdlib",
          description: "Link the Swift stdlib statically",
          exclusiveOn: ["--no-static-swift-stdlib"],
        },
        {
          name: "--no-static-swift-stdlib",
          description: "Do not link the Swift stdlib statically (default)",
          exclusiveOn: ["--static-swift-stdlib"],
        },
        ...sbomOptions,
      ],
    },
    // swift run
    {
      name: "run",
      description: "Build and run an executable product",
      options: [
        ...commonOptions,
        ...globalOptions,
        {
          name: "--skip-build",
          description: "Skip building the executable product",
          exclusiveOn: ["--build-tests"],
        },
        {
          name: "--build-tests",
          description: "Build both source and test targets",
          exclusiveOn: ["--skip-build"],
        },
        {
          name: "--repl",
          description: "Launch Swift REPL for the package",
          exclusiveOn: ["--debugger", "--run"],
        },
        {
          name: "--debugger",
          description: "Launch the executable in a debugger session",
          exclusiveOn: ["--repl", "--run"],
        },
        {
          name: "--run",
          description:
            "Launch the executable with the provided arguments (default)",
          exclusiveOn: ["--repl", "--debugger"],
        },
      ],
      args: [
        {
          name: "executable",
          description: "The executable to run",
          isOptional: true,
          generators: executableGenerator,
        },
        {
          name: "arguments",
          description: "The arguments to pass to the executable",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    // swift test
    {
      name: "test",
      description: "Build and run tests",
      options: [
        { ...helpOption, isPersistent: true },
        versionOption,
        ...persistent(globalOptions),
        ...sharedTestOptions,
        ...enableDisable(
          "testable-imports",
          "Use @testable imports in test modules (default: enabled)",
          "Do not use @testable imports in test modules"
        ),
        ...enableDisable(
          "code-coverage",
          "Measure code coverage while testing",
          "Do not measure code coverage while testing (default)"
        ),
        {
          name: "--parallel",
          description: "Run the tests in parallel",
          exclusiveOn: ["--no-parallel"],
        },
        {
          name: "--no-parallel",
          description: "Do not run the tests in parallel (default)",
          exclusiveOn: ["--parallel"],
        },
        {
          name: "--num-workers",
          description: "The number of tests to execute in parallel",
          args: { name: "num-workers" },
        },
        {
          name: "--maximum-repetitions",
          description:
            "The maximum number of times each test will repeat. Only supported for Swift Testing test suites",
          args: { name: "count" },
        },
        {
          name: "--repeat-until",
          description:
            "The condition upon which to stop repeating a test. Only supported for Swift Testing test suites",
          args: { name: "condition", suggestions: ["pass", "fail"] },
        },
        {
          name: ["-l", "--list-tests"],
          description:
            "List test methods in specifier format. Deprecated, use `swift test list` instead",
          deprecated: true,
        },
        {
          name: [
            "--show-codecov-path",
            "--show-code-coverage-path",
            "--show-coverage-path",
          ],
          description: "Print the path of the exported code coverage JSON file",
        },
        {
          name: ["-s", "--specifier"],
          description: "Run the test with the specified fully qualified name",
          args: { name: "specifier" },
        },
        {
          name: "--filter",
          description:
            "Run test cases that match a regular expression, for example, <test-target>.<test-case> or <test-target>.<test-case>/<test>",
          isRepeatable: true,
          args: { name: "regex" },
        },
        {
          name: "--skip",
          description:
            "Skip test cases that match a regular expression. For example: '--skip PerformanceTests'",
          isRepeatable: true,
          args: { name: "regex" },
        },
        {
          name: "--xunit-output",
          description:
            "The path where the test command generates the xUnit XML",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--debugger",
          description:
            "Launch the tests in a debugger session. Use the `failbreak` alias to attach breakpoints that will trigger on test failures",
        },
      ],
      subcommands: [
        {
          name: "list",
          description: "List test methods in specifier format",
          options: [
            ...sharedTestOptions,
            {
              name: ["-l", "--list-tests"],
              description: "Accepted for compatibility with `swift test -l`",
              hidden: true,
            },
          ],
        },
        {
          name: "last",
          description: "Print the results of the last test run",
        },
      ],
    },
    // swift package
    {
      name: "package",
      description: "Perform operations on Swift packages",
      options: [
        { ...helpOption, isPersistent: true },
        versionOption,
        ...persistent(globalOptions),
        ...pluginOptions,
      ],
      subcommands: [
        {
          name: "add-dependency",
          description: "Add a package dependency to the manifest",
          options: [
            {
              name: "--exact",
              description: "The exact package version to depend on",
              exclusiveOn: [
                "--revision",
                "--branch",
                "--from",
                "--up-to-next-minor-from",
              ],
              args: { name: "version" },
            },
            {
              name: "--revision",
              description: "The specific package revision to depend on",
              exclusiveOn: [
                "--exact",
                "--branch",
                "--from",
                "--up-to-next-minor-from",
              ],
              args: { name: "revision" },
            },
            {
              name: "--branch",
              description: "The branch of the package to depend on",
              exclusiveOn: [
                "--exact",
                "--revision",
                "--from",
                "--up-to-next-minor-from",
              ],
              args: { name: "branch" },
            },
            {
              name: "--from",
              description:
                "The package version to depend on (up to the next major version)",
              exclusiveOn: [
                "--exact",
                "--revision",
                "--branch",
                "--up-to-next-minor-from",
              ],
              args: { name: "version" },
            },
            {
              name: "--up-to-next-minor-from",
              description:
                "The package version to depend on (up to the next minor version)",
              exclusiveOn: ["--exact", "--revision", "--branch", "--from"],
              args: { name: "version" },
            },
            {
              name: "--to",
              description:
                "Specify upper bound on the package version range (exclusive)",
              args: { name: "version" },
            },
            {
              name: "--type",
              description: "Specify dependency type",
              args: {
                name: "type",
                suggestions: ["url", "path", "registry"],
                default: "url",
              },
            },
          ],
          args: {
            name: "dependency",
            description: "The URL or directory of the package to add",
          },
        },
        {
          name: "add-product",
          description: "Add a new product to the manifest",
          options: [
            {
              name: "--type",
              description: "The type of product to add",
              args: {
                name: "type",
                suggestions: [
                  "executable",
                  "library",
                  "static-library",
                  "dynamic-library",
                  "plugin",
                ],
                default: "library",
              },
            },
            {
              name: "--targets",
              description: "A list of targets that are part of this product",
              args: { name: "targets", isVariadic: true },
            },
          ],
          args: { name: "name", description: "The name of the new product" },
        },
        {
          name: "add-target",
          description: "Add a new target to the manifest",
          options: [
            {
              name: "--type",
              description: "The type of target to add",
              args: {
                name: "type",
                suggestions: ["library", "executable", "test", "macro"],
                default: "library",
              },
            },
            {
              name: "--dependencies",
              description: "A list of target dependency names",
              args: { name: "dependencies", isVariadic: true },
            },
            {
              name: "--url",
              description: "The URL for a remote binary target",
              args: { name: "url" },
            },
            {
              name: "--path",
              description: "The path to a local binary target",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--checksum",
              description: "The checksum for a remote binary target",
              args: { name: "checksum" },
            },
            {
              name: "--testing-library",
              description:
                "The testing library to use when generating test targets",
              args: {
                name: "library",
                suggestions: ["xctest", "swift-testing", "none"],
              },
            },
          ],
          args: { name: "name", description: "The name of the new target" },
        },
        {
          name: "add-target-dependency",
          description: "Add a new target dependency to the manifest",
          options: [
            {
              name: "--package",
              description: "The package in which the dependency resides",
              args: { name: "package" },
            },
          ],
          args: [
            {
              name: "dependency-name",
              description: "The name of the new dependency",
            },
            {
              name: "target-name",
              description: "The name of the target to update",
            },
          ],
        },
        {
          name: "add-target-plugin",
          description: "Add a new target plugin to the manifest",
          options: [
            {
              name: "--package",
              description: "The package in which the plugin resides",
              args: { name: "package" },
            },
          ],
          args: [
            {
              name: "plugin-name",
              description: "The name of the new plugin",
            },
            {
              name: "target-name",
              description: "The name of the target to update",
            },
          ],
        },
        {
          name: "add-setting",
          description: "Add a new setting to the manifest",
          options: [
            {
              name: "--target",
              description: "The target to add the setting to",
              isRequired: true,
              args: { name: "target" },
            },
            {
              name: "--swift",
              description:
                "The Swift language setting(s) to add. Supported settings: experimentalFeature, upcomingFeature, languageMode, StrictMemorySafety",
              args: {
                name: "setting",
                isVariadic: true,
                suggestions: [
                  "experimentalFeature=",
                  "upcomingFeature=",
                  "languageMode=",
                  "StrictMemorySafety",
                ],
              },
            },
          ],
        },
        {
          name: "experimental-audit-binary-artifact",
          description:
            "Audit a static library binary artifact for undefined symbols",
          args: {
            name: "path",
            description: "The absolute or relative path to the binary artifact",
            template: "filepaths",
          },
        },
        {
          name: "clean",
          description: "Delete build artifacts",
        },
        {
          name: "purge-cache",
          description: "Purge the global repository cache",
        },
        {
          name: "reset",
          description: "Reset the complete cache/build directory",
        },
        {
          name: "update",
          description: "Update package dependencies",
          options: [
            {
              name: ["-n", "--dry-run"],
              description:
                "Display the list of dependencies that can be updated",
            },
          ],
          args: {
            name: "packages",
            description: "The packages to update",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describe the current package",
          options: [
            {
              name: "--type",
              description: "Set the output format",
              args: {
                name: "type",
                suggestions: ["json", "text", "mermaid"],
                default: "text",
              },
            },
          ],
        },
        {
          name: "init",
          description: "Initialize a new package",
          options: [
            {
              name: "--type",
              description: "The package type",
              args: {
                name: "type",
                suggestions: [
                  { name: "library", description: "A package with a library" },
                  {
                    name: "executable",
                    description: "A package with an executable",
                  },
                  {
                    name: "tool",
                    description:
                      "A package with an executable that uses Swift Argument Parser",
                  },
                  {
                    name: "build-tool-plugin",
                    description: "A package that vends a build tool plugin",
                  },
                  {
                    name: "command-plugin",
                    description: "A package that vends a command plugin",
                  },
                  {
                    name: "macro",
                    description: "A package that vends a macro",
                  },
                  {
                    name: "empty",
                    description:
                      "An empty package with a Package.swift manifest",
                  },
                ],
                default: "library",
              },
            },
            {
              name: "--name",
              description: "Provide a custom package name",
              args: { name: "name" },
            },
            ...testLibraryOptions,
          ],
        },
        {
          name: "migrate",
          description:
            "Migrate a package or its individual targets to use the given set of features",
          options: [
            {
              name: "--target",
              description:
                "A comma-separated list of targets to migrate (default: all Swift targets)",
              args: { name: "targets" },
            },
            {
              name: "--to-feature",
              description:
                "A comma-separated list of Swift language features to migrate to",
              isRequired: true,
              args: { name: "features" },
            },
          ],
        },
        {
          name: "experimental-install",
          description:
            "Offers the ability to install executable products of the current package",
          options: [
            {
              name: "--product",
              description: "The name of the executable product to install",
              args: { name: "product" },
            },
          ],
        },
        {
          name: "experimental-uninstall",
          description:
            "Offers the ability to uninstall executable products previously installed by `swift package experimental-install`",
          args: {
            name: "name",
            description: "Name of the executable to uninstall",
          },
        },
        {
          name: "diagnose-api-breaking-changes",
          description:
            "Diagnose API-breaking changes to Swift modules in a package",
          options: [
            {
              name: "--breakage-allowlist-path",
              description:
                "The path to a text file containing breaking changes that the API comparison should ignore. Each ignored breaking change in the file should appear on its own line and contain the exact message to ignore (for example, 'API breakage: func foo() has been removed')",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--products",
              description:
                "One or more products to include in the API comparison. If present, only the specified products (and any targets specified using `--targets`) will be compared",
              args: { name: "products", isVariadic: true },
            },
            {
              name: "--targets",
              description:
                "One or more targets to include in the API comparison. If present, only the specified targets (and any products specified using `--products`) will be compared",
              args: { name: "targets", isVariadic: true },
            },
            {
              name: "--baseline-dir",
              description:
                "The path to a directory used to store API baseline files. If unspecified, a temporary directory will be used",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--regenerate-baseline",
              description:
                "Regenerate the API baseline, even if an existing one is available",
            },
          ],
          args: {
            name: "treeish",
            description:
              "The baseline treeish to compare to (for example, a commit hash, branch name, tag, and so on)",
          },
        },
        {
          name: "dump-symbol-graph",
          description: "Dump symbol graphs",
          options: [
            {
              name: "--pretty-print",
              description: "Pretty-print the output JSON",
            },
            {
              name: "--skip-synthesized-members",
              description:
                "Skip members inherited through classes or default implementations",
            },
            {
              name: "--minimum-access-level",
              description: "Include symbols with this access level or more",
              args: {
                name: "access level",
                suggestions: [
                  "private",
                  "fileprivate",
                  "internal",
                  "package",
                  "public",
                  "open",
                ],
                default: "public",
              },
            },
            {
              name: "--skip-inherited-docs",
              description:
                "Skip emitting doc comments for members inherited through classes or default implementations",
            },
            {
              name: "--include-spi-symbols",
              description:
                "Add symbols with SPI information to the symbol graph",
            },
            {
              name: "--emit-extension-block-symbols",
              description:
                "Emit extension block symbols for extensions to external types or directly associate members and conformances with the extended nominal",
              exclusiveOn: ["--omit-extension-block-symbols"],
            },
            {
              name: "--omit-extension-block-symbols",
              description: "Do not emit extension block symbols (default)",
              exclusiveOn: ["--emit-extension-block-symbols"],
            },
            {
              name: "--output-dir",
              description: "Specify symbol graph output directory",
              hidden: true,
              args: { name: "path", template: "folders" },
            },
          ],
        },
        {
          name: "dump-pif",
          description: "Dump PIF",
          hidden: true,
          options: [
            {
              name: "--preserve-structure",
              description: "Preserve the internal structure of PIF",
            },
          ],
        },
        {
          name: "dump-package",
          description: "Print parsed Package.swift as JSON",
        },
        {
          name: "edit",
          description: "Put a package in editable mode",
          options: [
            {
              name: "--revision",
              description: "The revision to edit",
              args: { name: "revision" },
            },
            {
              name: "--branch",
              description: "The branch to create",
              args: { name: "branch" },
            },
            {
              name: "--path",
              description: "Create or use the checkout at this path",
              args: { name: "path", template: "folders" },
            },
          ],
          args: {
            name: "package-identity",
            description: "The identity of the package to edit",
          },
        },
        {
          name: "unedit",
          description: "Remove a package from editable mode",
          options: [
            {
              name: "--force",
              description:
                "Unedit the package even if it has uncommitted and unpushed changes",
            },
          ],
          args: {
            name: "package-identity",
            description: "The identity of the package to unedit",
          },
        },
        {
          name: "config",
          description: "Manipulate configuration of the package",
          subcommands: [
            {
              name: "set-mirror",
              description: "Set a mirror for a dependency",
              options: mirrorOptions.map((option) => ({
                ...option,
                isRequired: true,
              })),
            },
            {
              name: "unset-mirror",
              description: "Remove an existing mirror",
              options: mirrorOptions,
            },
            {
              name: "get-mirror",
              description:
                "Print mirror configuration for the given package dependency",
              options: [
                {
                  ...mirrorOptions[0],
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "resolve",
          description: "Resolve package dependencies",
          options: [
            helpOption,
            {
              name: "--version",
              description: "The version to resolve at",
              args: { name: "version" },
            },
            {
              name: "--branch",
              description: "The branch to resolve at",
              args: { name: "branch" },
            },
            {
              name: "--revision",
              description: "The revision to resolve at",
              args: { name: "revision" },
            },
          ],
          args: {
            name: "package-name",
            description: "The name of the package to resolve",
            isOptional: true,
          },
        },
        {
          name: "generate-sbom",
          description: "Generate a Software Bill of Materials (SBOM)",
          options: [
            {
              name: "--product",
              description: "The product to generate an SBOM for",
              args: { name: "product" },
            },
            ...sbomOptions,
          ],
        },
        {
          name: "show-dependencies",
          description: "Print the resolved dependency graph",
          options: [
            formatOption(["text", "dot", "json", "flatlist"], "text"),
            {
              name: ["-o", "--output-path"],
              description:
                "The absolute or relative path to output the resolved dependency graph",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
        {
          name: "show-executables",
          description: "List the available executables from this package",
          options: [formatOption(["flatlist", "json"], "flatlist")],
        },
        {
          name: "show-traits",
          description: "List the available traits for a package",
          options: [
            {
              name: "--package-id",
              description:
                "Show traits for any package id in the transitive dependencies",
              args: { name: "package-id" },
            },
            formatOption(["text", "json"], "text"),
          ],
        },
        {
          name: "tools-version",
          description: "Manipulate tools version of the current package",
          options: [
            {
              name: "--set-current",
              description:
                "Set tools version of package to the current tools version in use",
              exclusiveOn: ["--set"],
            },
            {
              name: "--set",
              description: "Set tools version of package to the given value",
              exclusiveOn: ["--set-current"],
              args: { name: "tools version" },
            },
          ],
        },
        {
          name: "compute-checksum",
          description: "Compute the checksum for a binary artifact",
          args: {
            name: "path",
            description: "The absolute or relative path to the binary artifact",
            template: "filepaths",
          },
        },
        {
          name: "archive-source",
          description: "Create a source archive for the package",
          options: [
            {
              name: ["-o", "--output"],
              description:
                "The absolute or relative path for the generated source archive",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
        {
          name: "completion-tool",
          description: "Command to generate shell completions",
          args: {
            name: "mode",
            description: "Type of completions to list",
            suggestions: [
              "generate-bash-script",
              "generate-zsh-script",
              "generate-fish-script",
              "list-dependencies",
              "list-executables",
              "list-snippets",
            ],
          },
        },
        {
          name: "plugin",
          description:
            "Invoke a command plugin or perform other actions on command plugins",
          options: [
            {
              name: "--list",
              description: "List the available command plugins",
            },
            ...pluginOptions,
          ],
          args: [
            {
              name: "command",
              description: "Verb of the command plugin to invoke",
              isOptional: true,
            },
            {
              name: "arguments",
              description: "Arguments to pass to the command plugin",
              isOptional: true,
              isVariadic: true,
            },
          ],
        },
      ],
    },
    // swift sdk
    {
      name: "sdk",
      description: "Perform operations on Swift SDKs",
      options: [
        { ...helpOption, isPersistent: true },
        versionOption,
        {
          ...pathOption(
            "--swift-sdks-path",
            "Path to the directory containing installed Swift SDKs"
          ),
          isPersistent: true,
        },
      ],
      subcommands: sdkSubcommands,
    },
    {
      name: "experimental-sdk",
      description:
        "Perform operations on Swift SDKs. Deprecated, use `swift sdk` instead",
      deprecated: true,
      options: [
        { ...helpOption, isPersistent: true },
        versionOption,
        {
          ...pathOption(
            "--swift-sdks-path",
            "Path to the directory containing installed Swift SDKs"
          ),
          isPersistent: true,
        },
      ],
      subcommands: sdkSubcommands,
    },
    // swift package-registry
    {
      name: "package-registry",
      description:
        "Interact with package registry and manage related configuration",
      options: [
        { ...helpOption, isPersistent: true },
        versionOption,
        ...persistent(globalOptions),
      ],
      subcommands: [
        {
          name: "set",
          description: "Set a custom registry",
          options: [
            {
              name: "--global",
              description: "Apply settings to all projects for this user",
            },
            {
              name: "--scope",
              description: "Associate the registry with a given scope",
              args: { name: "scope" },
            },
            {
              name: "--allow-insecure-http",
              description: "Use a non-HTTPS registry URL",
            },
          ],
          args: { name: "url", description: "The registry URL" },
        },
        {
          name: "unset",
          description: "Remove a configured registry",
          options: [
            {
              name: "--global",
              description: "Apply settings to all projects for this user",
            },
            {
              name: "--scope",
              description: "Associate the registry with a given scope",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "login",
          description: "Log in to a registry",
          options: [
            {
              name: "--username",
              description: "The username for the registry",
              args: { name: "username" },
            },
            {
              name: "--password",
              description: "The password for the registry",
              args: { name: "password" },
            },
            {
              name: "--token",
              description: "The access token for the registry",
              args: { name: "token" },
            },
            {
              name: "--token-file",
              description: "Path to the file containing access token",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--no-confirm",
              description:
                "Write to the .netrc file without asking for confirmation",
            },
          ],
          args: {
            name: "url",
            description: "The registry URL",
            isOptional: true,
          },
        },
        {
          name: "logout",
          description: "Log out from a registry",
          args: {
            name: "url",
            description: "The registry URL",
            isOptional: true,
          },
        },
        {
          name: "publish",
          description: "Publish to a registry",
          options: [
            {
              name: ["--url", "--registry-url"],
              description: "The registry URL",
              args: { name: "url" },
            },
            pathOption(
              "--scratch-directory",
              "The path to the directory for working files"
            ),
            pathOption(
              "--metadata-path",
              "The path to the package metadata JSON file if it is not 'package-metadata.json' in the package directory",
              "filepaths"
            ),
            {
              name: "--signing-identity",
              description:
                "The label of the signing identity to be retrieved from the system's identity store if supported",
              args: { name: "label" },
            },
            pathOption(
              "--private-key-path",
              "The path to the certificate's PKCS#8 private key (DER-encoded)",
              "filepaths"
            ),
            {
              name: "--cert-chain-paths",
              description:
                "Path(s) to the signing certificate (DER-encoded) and optionally the rest of the certificate chain. Certificates should be ordered with the leaf first and the root last",
              args: {
                name: "path",
                template: "filepaths",
                isVariadic: true,
              },
            },
            {
              name: "--allow-insecure-http",
              description: "Use a non-HTTPS registry URL",
            },
            {
              name: "--dry-run",
              description:
                "Prepare and sign the archive without publishing it to the registry",
            },
          ],
          args: [
            { name: "package-id", description: "The package identifier" },
            {
              name: "package-version",
              description: "The package release version being created",
            },
          ],
        },
      ],
    },
    // swift package-collection
    {
      name: "package-collection",
      description: "Interact with package collections",
      options: [{ ...helpOption, isPersistent: true }, versionOption],
      subcommands: [
        {
          name: "add",
          description: "Add a new collection",
          options: [
            {
              name: "--order",
              description: "Sort order for the added collection",
              args: { name: "order" },
            },
            {
              name: "--trust-unsigned",
              description: "Trust the collection even if it is unsigned",
            },
            {
              name: "--skip-signature-check",
              description: "Skip signature check if the collection is signed",
            },
          ],
          args: {
            name: "collection-url",
            description: "URL of the collection to add",
          },
        },
        {
          name: "describe",
          description:
            "Get metadata for a collection or a package included in an imported collection",
          options: [
            { name: "--json", description: "Output as JSON" },
            {
              name: "--version",
              description: "Version of the package to get information for",
              args: { name: "version" },
            },
            {
              name: "--skip-signature-check",
              description: "Skip signature check if the collection is signed",
            },
          ],
          args: {
            name: "package-url",
            description:
              "URL of the package or collection to get information for",
          },
        },
        {
          name: "list",
          description: "List configured collections",
          options: [{ name: "--json", description: "Output as JSON" }],
        },
        {
          name: "refresh",
          description: "Refresh configured collections",
        },
        {
          name: "remove",
          description: "Remove a configured collection",
          args: {
            name: "collection-url",
            description: "URL of the collection to remove",
          },
        },
        {
          name: "search",
          description: "Search for packages by keywords or module names",
          options: [
            { name: "--json", description: "Output as JSON" },
            {
              name: "--keywords",
              description: "Search for packages by keywords",
              exclusiveOn: ["--module"],
            },
            {
              name: "--module",
              description: "Search for packages by module names",
              exclusiveOn: ["--keywords"],
            },
          ],
          args: { name: "search-query", description: "The search query" },
        },
      ],
    },
    // swift repl
    {
      name: "repl",
      description: "Experiment with Swift code interactively",
      options: [...driverCommonOptions, ...driverOptions],
    },
    // swift help
    {
      name: "help",
      description: "Show help for the Swift driver or a subcommand",
      options: [
        {
          name: "-show-hidden",
          description: "List hidden (unsupported) options",
        },
      ],
      args: [
        {
          name: "topic",
          description: "The topic to display help for",
          isOptional: true,
          suggestions: [
            "swift",
            "swiftc",
            "intro",
            "build",
            "package",
            "run",
            "test",
            "repl",
          ],
        },
        {
          name: "subtopics",
          description: "The help subtopics, if applicable",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
  ],
};
export default completionSpec;
