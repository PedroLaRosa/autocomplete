// Arduino CLI v1.6.0 (GitHub tag arduino/arduino-cli v1.6.0, 2026-11-10; Homebrew formula arduino-cli 1.6.0, 2026-11-19).
// Source: static read of the cobra command definitions in internal/cli/** and docs/configuration.md at tag v1.6.0.
// The binary was not built or run (sandbox policy), so help output was not diffed against a live run.

// JSON shapes used by the generators below were taken from internal/cli/feedback/result/rpc.go at v1.6.0.
const installedBoards: Fig.Generator = {
  script: ["arduino-cli", "board", "listall", "--json"],
  postProcess: (output) => {
    try {
      const boards = JSON.parse(output).boards ?? [];
      return boards
        .filter((board) => board.fqbn)
        .map((board) => ({
          name: board.fqbn,
          description: board.name,
        }));
    } catch (error) {
      return [];
    }
  },
};

const connectedPorts: Fig.Generator = {
  script: ["arduino-cli", "board", "list", "--json"],
  postProcess: (output) => {
    try {
      const detectedPorts = JSON.parse(output).detected_ports ?? [];
      return detectedPorts
        .filter((entry) => entry.port?.address)
        .map((entry) => ({
          name: entry.port.address,
          description:
            entry.matching_boards?.[0]?.name ??
            entry.port.protocol_label ??
            "Port",
        }));
    } catch (error) {
      return [];
    }
  },
};

const installedCores: Fig.Generator = {
  script: ["arduino-cli", "core", "list", "--json"],
  postProcess: (output) => {
    try {
      const platforms = JSON.parse(output).platforms ?? [];
      return platforms.map((platform) => ({
        name: platform.id,
        description:
          platform.releases?.[platform.installed_version]?.name ??
          "Installed platform",
      }));
    } catch (error) {
      return [];
    }
  },
};

const installedLibraries: Fig.Generator = {
  script: ["arduino-cli", "lib", "list", "--json"],
  postProcess: (output) => {
    try {
      const libraries = JSON.parse(output).installed_libraries ?? [];
      return libraries
        .filter((entry) => entry.library?.name)
        .map((entry) => ({
          name: entry.library.name,
          description: entry.library.sentence ?? "Installed library",
        }));
    } catch (error) {
      return [];
    }
  },
};

const sketchPathArg: Fig.Arg = {
  name: "sketchPath",
  isOptional: true,
  template: ["filepaths", "folders"],
};

// Settings keys, taken from internal/cli/configuration/configuration.schema.json
const arraySettingsKeys: Fig.Suggestion[] = [
  {
    name: "board_manager.additional_urls",
    description: "URLs of additional Boards Manager package index files",
  },
  {
    name: "build_cache.extra_paths",
    description: "Paths to look for precompiled artifacts",
  },
  {
    name: "directories.builtin.tools",
    description: "Directories of tools available to all platforms",
  },
];

const settingsKeys: Fig.Suggestion[] = [
  ...arraySettingsKeys,
  {
    name: "board_manager.enable_unsafe_install",
    description: "Allow installation of packages that fail the checksum test",
  },
  {
    name: "build_cache.compilations_before_purge",
    description: "Number of compilations after which the cache is purged",
  },
  {
    name: "build_cache.path",
    description: "Path to the build cache",
  },
  {
    name: "build_cache.ttl",
    description: "Cache expiration time of build folders",
  },
  {
    name: "daemon.port",
    description: "TCP port used for gRPC client connections",
  },
  {
    name: "directories.builtin.libraries",
    description: "Libraries available to all platforms (lowest priority)",
  },
  {
    name: "directories.data",
    description: "Directory for index files and platform installations",
  },
  {
    name: "directories.downloads",
    description: "Directory used to stage downloaded archives",
  },
  {
    name: "directories.user",
    description: "Sketchbook directory",
  },
  {
    name: "library.enable_unsafe_install",
    description: "Allow lib install with --git-url and --zip-path",
  },
  {
    name: "locale",
    description: "Language used to communicate to the user",
  },
  {
    name: "logging.file",
    description: "Path to the file where logs will be written",
  },
  {
    name: "logging.format",
    description: "Output format for the logs",
  },
  {
    name: "logging.level",
    description: "Messages with this level and above will be logged",
  },
  {
    name: "metrics.addr",
    description: "TCP port used for metrics communication",
  },
  {
    name: "metrics.enabled",
    description: "Controls the use of metrics",
  },
  {
    name: "network.cloud_api.skip_board_detection_calls",
    description: "Skip Arduino Cloud API calls to detect an unknown board",
  },
  {
    name: "network.connection_timeout",
    description: "Network connection timeout",
  },
  {
    name: "network.proxy",
    description: "Proxy settings for network connections",
  },
  {
    name: "network.user_agent_ext",
    description: "Extra string to append to the HTTP user agent",
  },
  {
    name: "output.no_color",
    description: "Disable colored text output",
  },
  {
    name: "sketch.always_export_binaries",
    description: "Always save binaries to the sketch folder on compile",
  },
  {
    name: "updater.enable_notification",
    description: "Notify about new Arduino CLI releases",
  },
];

const fqbnOption: Fig.Option = {
  name: ["-b", "--fqbn"],
  description: "Fully Qualified Board Name, e.g.: arduino:avr:uno",
  args: {
    name: "FQBN",
    description: "Fully qualified board name",
    generators: installedBoards,
  },
};

const boardOptionsOption: Fig.Option = {
  name: "--board-options",
  description:
    "List of board options separated by commas. Or can be used multiple times for multiple options",
  isRepeatable: true,
  args: {
    name: "options",
  },
};

const discoveryTimeoutOption: Fig.Option = {
  name: "--discovery-timeout",
  description: "Max time to wait for port discovery, e.g.: 30s, 1m",
  args: {
    name: "duration",
    default: "1s",
  },
};

const portOption: Fig.Option = {
  name: ["-p", "--port"],
  description: "Upload port address, e.g.: COM3 or /dev/ttyACM2",
  args: {
    name: "port",
    description: "Arduino board port connection",
    generators: connectedPorts,
  },
};

const protocolOption: Fig.Option = {
  name: ["-l", "--protocol"],
  description: "Upload port protocol, e.g: serial",
  args: {
    name: "protocol",
  },
};

// Flags added by arguments.Fqbn / arguments.Port in internal/cli/arguments
const fqbnOptions: Fig.Option[] = [fqbnOption, boardOptionsOption];
const portOptions: Fig.Option[] = [
  discoveryTimeoutOption,
  portOption,
  protocolOption,
];

const programmerOption: Fig.Option = {
  name: ["-P", "--programmer"],
  description: "Programmer to use, e.g: atmel_ice",
  args: {
    name: "programmer",
  },
};

const profileOption: Fig.Option = {
  name: ["-m", "--profile"],
  description: "Sketch profile to use",
  args: {
    name: "profile",
  },
};

const showPropertiesOption: Fig.Option = {
  name: "--show-properties",
  description:
    'Show build properties. The properties are expanded, use "--show-properties=unexpanded" if you want them exactly as they are defined',
  requiresSeparator: true,
  args: {
    name: "mode",
    isOptional: true,
    suggestions: [
      {
        name: "expanded",
        description: "Show the properties with their values expanded",
      },
      {
        name: "unexpanded",
        description: "Show the properties exactly as they are defined",
      },
      {
        name: "disabled",
        description: "Do not show build properties",
      },
    ],
  },
};

const debugInterpreterOption: Fig.Option = {
  name: "--interpreter",
  description: "Debug interpreter e.g.: console, mi, mi1, mi2, mi3",
  args: {
    name: "interpreter",
    suggestions: ["console", "mi", "mi1", "mi2", "mi3"],
    default: "console",
  },
};

const debugPropertyOption: Fig.Option = {
  name: "--debug-property",
  description:
    "Override an debug property with a custom value. Can be used multiple times for multiple properties",
  isRepeatable: true,
  args: {
    name: "property",
  },
};

const uploadPropertyOption: Fig.Option = {
  name: "--upload-property",
  description:
    "Override an upload property with a custom value. Can be used multiple times for multiple properties",
  isRepeatable: true,
  args: {
    name: "property",
  },
};

const verifyOption: Fig.Option = {
  name: ["-t", "--verify"],
  description: "Verify uploaded binary after the upload",
};

const dryRunOption: Fig.Option = {
  name: "--dry-run",
  description: "Do not perform the actual upload, just log out actions",
  hidden: true,
};

const runPostInstallOption: Fig.Option = {
  name: "--run-post-install",
  description:
    "Force run of post-install scripts (if the CLI is not running interactively)",
};

const skipPostInstallOption: Fig.Option = {
  name: "--skip-post-install",
  description:
    "Force skip of post-install scripts (if the CLI is running interactively)",
};

const runPreUninstallOption: Fig.Option = {
  name: "--run-pre-uninstall",
  description:
    "Force run of pre-uninstall scripts (if the CLI is not running interactively)",
};

const skipPreUninstallOption: Fig.Option = {
  name: "--skip-pre-uninstall",
  description:
    "Force skip of pre-uninstall scripts (if the CLI is running interactively)",
};

// Flags added by arguments.PrePostScriptsFlags
const scriptOptions: Fig.Option[] = [
  runPostInstallOption,
  runPreUninstallOption,
  skipPostInstallOption,
  skipPreUninstallOption,
];

const sketchPathOption: Fig.Option = {
  name: "--sketch-path",
  description: "Location of the sketch",
  args: {
    name: "sketchPath",
    template: "folders",
  },
};

const showHiddenBoardsOption: Fig.Option = {
  name: ["-a", "--show-hidden"],
  description: "Show also boards marked as 'hidden' in the platform",
};

const libraryRefArg: Fig.Arg = {
  name: "LIBRARY[@VERSION_NUMBER]",
  isVariadic: true,
};

const completionSpec: Fig.Spec = {
  name: "arduino-cli",
  description: "Arduino Command Line Interface",
  subcommands: [
    {
      name: "board",
      description: "Arduino board commands",
      subcommands: [
        {
          name: "attach",
          description:
            "Sets the default values for port, FQBN and programmer in the sketch project file. If none are specified, the current defaults are displayed",
          args: sketchPathArg,
          options: [...fqbnOptions, ...portOptions, programmerOption],
        },
        {
          name: "details",
          description:
            "Show information about a board, in particular if the board has options to be specified in the FQBN",
          options: [
            {
              ...fqbnOption,
              isRequired: true,
            },
            boardOptionsOption,
            {
              name: ["-f", "--full"],
              description: "Show full board details",
            },
            {
              name: "--list-programmers",
              description: "Show list of available programmers",
            },
            showPropertiesOption,
          ],
        },
        {
          name: "list",
          description:
            "Detects and displays a list of boards connected to the current computer",
          options: [
            discoveryTimeoutOption,
            ...fqbnOptions,
            {
              name: ["-w", "--watch"],
              description:
                "Command keeps running and prints list of connected boards whenever there is a change",
            },
          ],
        },
        {
          name: "listall",
          description:
            "List all boards that have the support platform installed. You can search for a specific board if you specify the board name",
          args: {
            name: "boardname",
            isOptional: true,
            isVariadic: true,
          },
          options: [showHiddenBoardsOption],
        },
        {
          name: "search",
          description:
            "Search for a board in the Boards Manager using the specified keywords",
          args: {
            name: "boardname",
            isOptional: true,
            isVariadic: true,
          },
          options: [showHiddenBoardsOption],
        },
      ],
    },
    {
      name: "burn-bootloader",
      description:
        "Upload the bootloader on the board using an external programmer",
      options: [
        ...fqbnOptions,
        ...portOptions,
        programmerOption,
        uploadPropertyOption,
        verifyOption,
        {
          name: ["-v", "--verbose"],
          description: "Turns on verbose mode",
        },
        dryRunOption,
      ],
    },
    {
      name: "cache",
      description: "Arduino cache commands",
      subcommands: [
        {
          name: "clean",
          description:
            "Delete contents of the downloads cache folder, where archive files are staged during installation of libraries and boards platforms",
        },
      ],
    },
    {
      name: "compile",
      description: "Compiles Arduino sketches",
      args: sketchPathArg,
      options: [
        ...fqbnOptions,
        profileOption,
        {
          name: "--dump-profile",
          description:
            "Create and print a profile configuration from the build",
        },
        showPropertiesOption,
        {
          name: "--preprocess",
          description: "Print preprocessed code to stdout instead of compiling",
        },
        {
          name: "--build-cache-path",
          description:
            "Builds of cores and sketches are saved into this path to be cached and reused. Deprecated: use --build-path alone or configure build_cache.path in the CLI settings",
          deprecated: true,
          hidden: true,
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--output-dir",
          description: "Save build artifacts in this directory",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--build-path",
          description:
            "Path where to save compiled files. If omitted, a directory will be created in the default temporary path of your OS",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--build-properties",
          description:
            "List of custom build properties separated by commas. Or can be used multiple times for multiple properties. Deprecated: use --build-property instead",
          deprecated: true,
          isRepeatable: true,
          args: {
            name: "properties",
          },
        },
        {
          name: "--build-property",
          description:
            "Override a build property with a custom value. Can be used multiple times for multiple properties",
          isRepeatable: true,
          args: {
            name: "property",
          },
        },
        {
          name: "--keys-keychain",
          description:
            "The path of the dir to search for the custom keys to sign and encrypt a binary. Used only by the platforms that support it",
          dependsOn: ["--sign-key", "--encrypt-key"],
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--sign-key",
          description:
            "The name of the custom signing key to use to sign a binary during the compile process. Used only by the platforms that support it",
          dependsOn: ["--keys-keychain", "--encrypt-key"],
          args: {
            name: "key",
          },
        },
        {
          name: "--encrypt-key",
          description:
            "The name of the custom encryption key to use to encrypt a binary during the compile process. Used only by the platforms that support it",
          dependsOn: ["--keys-keychain", "--sign-key"],
          args: {
            name: "key",
          },
        },
        {
          name: "--warnings",
          description:
            "Optional, can be: none, default, more, all. Used to tell gcc which warning level to use (-W flag)",
          args: {
            name: "level",
            suggestions: [
              {
                name: "none",
                description: "Use warning level 'none'",
                icon: "fig://icon?type=alert",
              },
              {
                name: "default",
                description: "Use warning level 'default'",
                icon: "fig://icon?type=alert",
              },
              {
                name: "more",
                description: "Use warning level 'more'",
                icon: "fig://icon?type=alert",
              },
              {
                name: "all",
                description: "Use warning level 'all'",
                icon: "fig://icon?type=alert",
              },
            ],
            default: "none",
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "Optional, turns on verbose mode",
          exclusiveOn: ["-q", "--quiet"],
        },
        {
          name: ["-q", "--quiet"],
          description: "Optional, suppresses almost every output",
          exclusiveOn: ["-v", "--verbose"],
        },
        {
          name: ["-u", "--upload"],
          description: "Upload the binary after the compilation",
        },
        ...portOptions,
        verifyOption,
        {
          name: "--library",
          description:
            "Path to a single library’s root folder. Can be used multiple times or entries can be comma separated",
          isRepeatable: true,
          args: {
            name: "path",
            template: ["filepaths", "folders"],
          },
        },
        {
          name: "--libraries",
          description:
            "Path to a collection of libraries. Can be used multiple times or entries can be comma separated",
          isRepeatable: true,
          args: {
            name: "path",
            template: ["filepaths", "folders"],
          },
        },
        {
          name: "--optimize-for-debug",
          description:
            "Optional, optimize compile output for debugging, rather than for release",
        },
        programmerOption,
        {
          name: "--only-compilation-database",
          description:
            "Just produce the compilation database, without actually compiling. All build commands are skipped except pre* hooks",
        },
        {
          name: "--clean",
          description:
            "Optional, cleanup the build folder and do not use any cached build",
        },
        {
          name: ["-e", "--export-binaries"],
          description:
            "If set built binaries will be exported to the sketch folder",
        },
        {
          name: "--source-override",
          description:
            "Optional. Path to a .json file that contains a set of replacements of the sketch source code",
          hidden: true,
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--skip-libraries-discovery",
          description:
            "Skip libraries discovery. This flag is provided only for use in language server and other, very specific, use cases. Do not use for normal compiles",
          hidden: true,
        },
        {
          name: ["-j", "--jobs"],
          description:
            "Max number of parallel compiles. If set to 0 the number of available CPUs cores will be used",
          args: {
            name: "jobs",
            default: "0",
          },
        },
      ],
    },
    {
      name: "completion",
      description: "Generates completion scripts for various shells",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
      options: [
        {
          name: "--no-descriptions",
          description:
            "Disable completion description for shells that support it",
        },
      ],
    },
    {
      name: "config",
      description: "Arduino configuration commands",
      subcommands: [
        {
          name: "add",
          description: "Adds one or more values to a setting",
          args: [
            {
              name: "key",
              suggestions: arraySettingsKeys,
            },
            {
              name: "value",
              isVariadic: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a settings key and all its sub keys",
          args: {
            name: "key",
            suggestions: settingsKeys,
          },
        },
        {
          name: "dump",
          description: "Prints the current configuration",
        },
        {
          name: "get",
          description: "Gets a settings key value",
          args: {
            name: "key",
            isVariadic: true,
            suggestions: settingsKeys,
          },
        },
        {
          name: "init",
          description:
            "Creates or updates the configuration file in the data directory or custom directory with the current configuration settings",
          options: [
            {
              name: "--dest-dir",
              description: "Sets where to save the configuration file",
              exclusiveOn: ["--dest-file"],
              args: {
                name: "directory",
                template: "folders",
              },
            },
            {
              name: "--dest-file",
              description: "Sets where to save the configuration file",
              exclusiveOn: ["--dest-dir"],
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--overwrite",
              description: "Overwrite existing config file",
            },
          ],
        },
        {
          name: "remove",
          description: "Removes one or more values from a setting",
          args: [
            {
              name: "key",
              suggestions: arraySettingsKeys,
            },
            {
              name: "value",
              isVariadic: true,
            },
          ],
        },
        {
          name: "set",
          description: "Sets a setting value",
          args: [
            {
              name: "key",
              suggestions: settingsKeys,
            },
            {
              name: "value",
              isVariadic: true,
            },
          ],
        },
      ],
    },
    {
      name: "core",
      description: "Arduino core operations",
      subcommands: [
        {
          name: "download",
          description:
            "Downloads one or more cores and corresponding tool dependencies",
          args: {
            name: "PACKAGER:ARCH[@VERSION]",
            isVariadic: true,
          },
        },
        {
          name: "install",
          description:
            "Installs one or more cores and corresponding tool dependencies",
          args: {
            name: "PACKAGER:ARCH[@VERSION]",
            isVariadic: true,
          },
          options: [
            {
              ...runPostInstallOption,
              exclusiveOn: ["--skip-post-install"],
            },
            runPreUninstallOption,
            {
              ...skipPostInstallOption,
              exclusiveOn: ["--run-post-install"],
            },
            skipPreUninstallOption,
            {
              name: "--no-overwrite",
              description: "Do not overwrite already installed platforms",
            },
          ],
        },
        {
          name: "list",
          description: "Shows the list of installed platforms",
          options: [
            {
              name: "--updatable",
              description: "List updatable platforms",
            },
            {
              name: "--all",
              description:
                "If set return all installable and installed cores, including manually installed",
            },
          ],
        },
        {
          name: "search",
          description:
            "Search for a core in Boards Manager using the specified keywords",
          args: {
            name: "keywords",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            {
              name: ["-a", "--all"],
              description: "Show all available core versions",
            },
          ],
        },
        {
          name: "uninstall",
          description:
            "Uninstalls one or more cores and corresponding tool dependencies if no longer used",
          args: {
            name: "PACKAGER:ARCH",
            isVariadic: true,
            generators: installedCores,
          },
          options: scriptOptions,
        },
        {
          name: "update-index",
          description: "Updates the index of cores to the latest version",
        },
        {
          name: "upgrade",
          description:
            "Upgrades one or all installed platforms to the latest version",
          args: {
            name: "PACKAGER:ARCH",
            isOptional: true,
            isVariadic: true,
            generators: installedCores,
          },
          options: scriptOptions,
        },
      ],
    },
    {
      name: "daemon",
      description: "Run the Arduino CLI as a gRPC daemon",
      options: [
        {
          name: "--port",
          description: "The TCP port the daemon will listen to",
          args: {
            name: "port",
            default: "50051",
          },
        },
        {
          name: "--daemonize",
          description:
            "Do not terminate daemon process if the parent process dies",
        },
        {
          name: "--debug",
          description: "Enable debug logging of gRPC calls",
        },
        {
          name: "--debug-file",
          description: "Append debug logging to the specified file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--debug-filter",
          description: "Display only the provided gRPC calls",
          isRepeatable: true,
          args: {
            name: "calls",
          },
        },
        {
          name: "--max-grpc-recv-message-size",
          description:
            "Sets the maximum message size in bytes the daemon can receive",
          args: {
            name: "bytes",
            default: "16777216",
          },
        },
      ],
    },
    {
      name: "debug",
      description:
        "Debug Arduino sketches. (this command opens an interactive gdb session)",
      args: sketchPathArg,
      subcommands: [
        {
          name: "check",
          description:
            "Check if the given board/programmer combination supports debugging",
          options: [
            ...fqbnOptions,
            ...portOptions,
            programmerOption,
            debugInterpreterOption,
            debugPropertyOption,
          ],
        },
      ],
      options: [
        ...fqbnOptions,
        ...portOptions,
        programmerOption,
        profileOption,
        debugInterpreterOption,
        {
          name: "--build-path",
          description: "Directory containing binaries for debug",
          exclusiveOn: ["--input-dir"],
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--input-dir",
          description: "Directory containing binaries for debug",
          exclusiveOn: ["--build-path"],
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: ["-I", "--info"],
          description:
            "Show metadata about the debug session instead of starting the debugger",
        },
        debugPropertyOption,
      ],
    },
    {
      name: "generate-docs",
      description: "Generates bash completion and command manpages",
      hidden: true,
      subcommands: [
        {
          name: "bash-completions",
          description: "Generate the bash completion file",
        },
        {
          name: "manpage",
          description: "Generate the command manpages",
        },
      ],
      options: [
        {
          name: ["-o", "--output-dir"],
          description:
            "Directory where to save generated files. Default is './docs', the directory must exist",
          isPersistent: true,
          args: {
            name: "directory",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        isOptional: true,
      },
    },
    {
      name: "lib",
      description: "Arduino commands about libraries",
      subcommands: [
        {
          name: "deps",
          description: "Check dependencies status for the specified library",
          args: {
            name: "LIBRARY[@VERSION_NUMBER]",
            generators: installedLibraries,
          },
          options: [
            {
              name: "--no-overwrite",
              description:
                "Do not try to update library dependencies if already installed",
            },
          ],
        },
        {
          name: "download",
          description:
            "Downloads one or more libraries without installing them",
          args: libraryRefArg,
        },
        {
          name: "examples",
          description:
            "Shows the list of the examples for libraries. A name may be given as argument to search a specific library",
          args: {
            name: "LIBRARY_NAME",
            isOptional: true,
            generators: installedLibraries,
          },
          options: fqbnOptions,
        },
        {
          name: "install",
          description:
            "Installs one or more specified libraries into the system",
          args: libraryRefArg,
          options: [
            {
              name: "--no-deps",
              description: "Do not install dependencies",
            },
            {
              name: "--no-overwrite",
              description: "Do not overwrite already installed libraries",
            },
            {
              name: "--git-url",
              description:
                "Enter git url for libraries hosted on repositories (needs library.enable_unsafe_install)",
            },
            {
              name: "--zip-path",
              description:
                "Enter a path to zip file (needs library.enable_unsafe_install)",
            },
            {
              name: "--install-in-builtin-dir",
              description: "Install libraries in the IDE-Builtin directory",
            },
          ],
        },
        {
          name: "list",
          description:
            "Shows a list of installed libraries. If the LIBNAME parameter is specified the listing is limited to that specific library. By default the libraries provided as built-in by platforms/core are not listed, they can be listed by adding the --all flag",
          args: {
            name: "LIBNAME",
            isOptional: true,
            generators: installedLibraries,
          },
          options: [
            {
              name: "--all",
              description:
                "Include built-in libraries (from platforms and IDE) in listing",
            },
            ...fqbnOptions,
            {
              name: "--updatable",
              description: "List updatable libraries",
            },
          ],
        },
        {
          name: "search",
          description:
            "Search for libraries matching zero or more search terms. Terms can be basic or qualifier-value, e.g. name=ArduinoJson or provides:tinyusb.h (case-insensitive)",
          args: {
            name: "SEARCH_TERM",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            {
              name: "--names",
              description: "Show library names only",
            },
            {
              name: "--omit-releases-details",
              description:
                "Omit library details far all versions except the latest (produce a more compact JSON output)",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstalls one or more libraries",
          args: {
            name: "LIBRARY_NAME",
            isVariadic: true,
            generators: installedLibraries,
          },
        },
        {
          name: "update-index",
          description: "Updates the libraries index to the latest version",
        },
        {
          name: "upgrade",
          description:
            "Upgrades installed libraries. This command upgrades an installed library to the latest available version. Multiple libraries can be passed separated by a space. If no arguments are provided, the command will upgrade all the installed libraries where an update is available",
          args: {
            name: "LIBRARY_NAME",
            isOptional: true,
            isVariadic: true,
            generators: installedLibraries,
          },
        },
      ],
    },
    {
      name: "monitor",
      description: "Open a communication port with a board",
      args: sketchPathArg,
      options: [
        ...portOptions,
        profileOption,
        {
          name: "--raw",
          description: "Set terminal in raw mode (unbuffered)",
        },
        {
          name: "--describe",
          description: "Show all the settings of the communication port",
        },
        {
          name: ["-c", "--config"],
          description:
            "Configure communication port settings. The format is <ID>=<value>[,<ID>=<value>]",
          isRepeatable: true,
          args: {
            name: "settings",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Run in silent mode, show only monitor input and output",
        },
        {
          name: "--timestamp",
          description: "Timestamp each incoming line",
        },
        ...fqbnOptions,
      ],
    },
    {
      name: "outdated",
      description:
        "Shows a list of installed cores and/or libraries that can be upgraded. If nothing needs to be updated the output is empty",
    },
    {
      name: "profile",
      description: "Build profile operations",
      subcommands: [
        {
          name: "create",
          description: "Create or update a profile in the sketch project file",
          args: sketchPathArg,
          options: [
            {
              ...fqbnOption,
              isRequired: true,
            },
            boardOptionsOption,
            {
              ...profileOption,
              isRequired: true,
            },
            {
              name: "--set-default",
              description: "Set the profile as the default one",
            },
          ],
        },
        {
          name: "lib",
          description: "Commands to manage libraries in sketch profiles",
          subcommands: [
            {
              name: "add",
              description: "Adds a library to a sketch profile",
              args: libraryRefArg,
              options: [
                profileOption,
                sketchPathOption,
                {
                  name: "--no-deps",
                  description: "Do not add dependencies",
                },
                {
                  name: "--no-overwrite",
                  description: "Do not overwrite already added libraries",
                },
              ],
            },
            {
              name: "remove",
              description:
                "Removes a library from a sketch profile with its dependencies if no longer needed",
              args: libraryRefArg,
              options: [
                profileOption,
                sketchPathOption,
                {
                  name: "--no-deps",
                  description: "Do not remove unused dependencies",
                },
              ],
            },
          ],
        },
        {
          name: "set-default",
          description: "Set the default build profile",
          args: {
            name: "profile",
          },
          options: [sketchPathOption],
        },
      ],
    },
    {
      name: "sketch",
      description: "Arduino CLI sketch commands",
      subcommands: [
        {
          name: "archive",
          description: "Creates a zip file containing all sketch files",
          args: [
            {
              name: "sketchPath",
              isOptional: true,
              template: "folders",
            },
            {
              name: "archivePath",
              isOptional: true,
              template: ["filepaths", "folders"],
            },
          ],
          options: [
            {
              name: "--include-build-dir",
              description: "Includes build directory in the archive",
            },
            {
              name: ["-f", "--overwrite"],
              description: "Overwrites an already existing archive",
            },
          ],
        },
        {
          name: "new",
          description: "Create a new Sketch",
          args: {
            name: "sketchName",
          },
          options: [
            {
              name: ["-f", "--overwrite"],
              description: "Overwrites an existing .ino sketch",
            },
          ],
        },
      ],
    },
    {
      name: "update",
      description:
        "Updates the index of cores and libraries to the latest versions",
      options: [
        {
          name: "--show-outdated",
          description: "Show outdated cores and libraries after index update",
        },
      ],
    },
    {
      name: "upgrade",
      description: "Upgrades installed cores and libraries to latest version",
      options: scriptOptions,
    },
    {
      name: "upload",
      description:
        "Upload Arduino sketches. This does NOT compile the sketch prior to upload",
      args: sketchPathArg,
      options: [
        ...fqbnOptions,
        ...portOptions,
        profileOption,
        {
          name: "--build-path",
          description: "Directory containing binaries to upload",
          exclusiveOn: ["--input-dir", "-i", "--input-file"],
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--input-dir",
          description: "Directory containing binaries to upload",
          exclusiveOn: ["--build-path", "-i", "--input-file"],
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: ["-i", "--input-file"],
          description: "Binary file to upload",
          exclusiveOn: ["--build-path", "--input-dir"],
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        uploadPropertyOption,
        verifyOption,
        {
          name: ["-v", "--verbose"],
          description: "Optional, turns on verbose mode",
        },
        programmerOption,
        dryRunOption,
        {
          name: ["-F", "--upload-field"],
          description:
            "Set a value for a field required to upload. Can be used multiple times for multiple fields",
          isRepeatable: true,
          args: {
            name: "key=value",
          },
        },
      ],
    },
    {
      name: "version",
      description:
        "Shows the version number of Arduino CLI which is installed on your system",
    },
  ],
  options: [
    {
      name: "--additional-urls",
      description:
        "Comma-separated list of additional URLs for the Boards Manager",
      isPersistent: true,
      isRepeatable: true,
      args: {
        name: "urls",
      },
    },
    {
      name: "--config-dir",
      description:
        "Sets the default data directory (Arduino CLI will look for configuration file in this directory)",
      isPersistent: true,
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--config-file",
      description:
        "The custom config file (if not specified the default will be used)",
      isPersistent: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--format",
      description: "The command output format, can be: text, json, jsonmini",
      isPersistent: true,
      hidden: true,
      args: {
        name: "format",
        suggestions: ["text", "json", "jsonmini"],
        default: "text",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Help for arduino-cli",
      isPersistent: true,
    },
    {
      name: "--json",
      description: "Print the output in JSON format",
      isPersistent: true,
    },
    {
      name: "--log",
      description: "Print the logs on the standard output",
      isPersistent: true,
    },
    {
      name: "--log-file",
      description: "Path to the file where logs will be written",
      isPersistent: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--log-format",
      description: "The output format for the logs, can be: text, json",
      isPersistent: true,
      args: {
        name: "format",
        suggestions: ["text", "json"],
        default: "text",
      },
    },
    {
      name: "--log-level",
      description:
        "Messages with this level and above will be logged. Valid levels are: trace, debug, info, warn, error, fatal, panic",
      isPersistent: true,
      args: {
        name: "level",
        suggestions: [
          "trace",
          "debug",
          "info",
          "warn",
          "error",
          "fatal",
          "panic",
        ],
        default: "info",
      },
    },
    {
      name: "--no-color",
      description: "Disable colored output",
      isPersistent: true,
    },
  ],
  additionalSuggestions: [
    {
      name: "compile -b",
      insertValue: "compile -b {cursor}",
      description: "Compile arduino shortcut",
      icon: "fig://template?color=33ccc9&badge=∞",
    },
  ],
};

export default completionSpec;
