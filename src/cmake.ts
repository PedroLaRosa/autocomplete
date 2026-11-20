// CMake v4.5.1 (latest stable tag of Kitware/CMake via git ls-remote, 2026-11-20). Source: Help/manual/cmake.1.rst, Help/manual/include/{OPTIONS_BUILD,OPTIONS_HELP}.rst,
// Help/manual/cmake-diagnostics.7.rst and the argument parsers Source/cmake.cxx, Source/cmakemain.cxx and Source/cmcmd.cxx
// read statically from a shallow clone of the v4.5.1 tag (the cmake binary was not run).
// Internal/undocumented options (--vs-solution-file, --check-build-system, ...), the Windows "/" option forms and the ambiguous -H are intentionally left out.

const diagnosticCategories: Fig.Suggestion[] = [
  {
    name: "author",
    description: "Incorrect use of CMake by the build system's author",
  },
  {
    name: "deprecated",
    description: "Use of a deprecated function or package",
  },
  {
    name: "experimental",
    description: "Use of an experimental feature",
  },
  {
    name: "install-absolute-destination",
    description: "An install command specifies an absolute DESTINATION",
  },
  {
    name: "non-target-directive",
    description:
      "Use of non-target directives which alter the build environment",
  },
  {
    name: "policy",
    description: "Potential dependency on the OLD behavior of a policy",
  },
  {
    name: "strict",
    description: "Allowed but disrecommended usage",
  },
  {
    name: "uninitialized",
    description: "Dereference of an uninitialized variable",
  },
  {
    name: "unused-cli",
    description: "Variables declared on the command line but not used",
  },
];

// -W<category> and -Wno-<category> for every diagnostic category
const diagnosticOptions: Fig.Option[] = diagnosticCategories.flatMap(
  ({ name, description }) => [
    {
      name: `-W${name}`,
      description: `Enable warnings: ${String(description).toLowerCase()}`,
    },
    {
      name: `-Wno-${name}`,
      description: `Disable warnings: ${String(description).toLowerCase()}`,
    },
  ]
);

const presetsFileOption: Fig.Option = {
  name: "--presets-file",
  description:
    "Read presets from the given file instead of CMakePresets.json and CMakeUserPresets.json",
  args: {
    name: "file",
    template: "filepaths",
  },
};

const listDefinedPresetsOption = (what: string): Fig.Option => ({
  name: "--list-presets",
  description: `Lists the available ${what} presets. With 'defined', all non-hidden defined presets are listed, including unavailable ones`,
  args: {
    name: "type",
    isOptional: true,
    suggestions: ["defined"],
  },
});

const listPresetTypes = [
  "configure",
  "build",
  "test",
  "package",
  "workflow",
  "all",
];

const parallelOption = (
  description: string,
  jobsOptional: boolean
): Fig.Option => ({
  name: ["--parallel", "-j"],
  description,
  args: jobsOptional ? { name: "jobs", isOptional: true } : { name: "jobs" },
});

const verboseOption = (description: string): Fig.Option => ({
  name: ["--verbose", "-v"],
  description,
});

const configOption = (description: string): Fig.Option => ({
  name: "--config",
  description,
  args: {
    name: "cfg",
  },
});

const checksumCommand = (bits: string): Fig.Subcommand => ({
  name: `${bits}sum`,
  description: `Create ${bits.toUpperCase()} checksum of files in ${bits}sum compatible format. Passing - reads from standard input`,
  args: {
    name: "file",
    template: "filepaths",
    isVariadic: true,
  },
});

// Destination given first (copy -t <destination> <file>...)
const targetDirectoryOption: Fig.Option = {
  name: "-t",
  description: "Copy to the given destination directory",
  args: {
    name: "destination",
    template: "folders",
  },
};

const copyFilesCommand = (
  name: string,
  description: string
): Fig.Subcommand => ({
  name,
  description,
  options: [targetDirectoryOption],
  args: [
    {
      name: "file",
      template: "filepaths",
      isVariadic: true,
    },
    {
      name: "destination",
      template: "folders",
    },
  ],
});

const copyDirectoriesCommand = (
  name: string,
  description: string
): Fig.Subcommand => ({
  name,
  description,
  options: [targetDirectoryOption],
  args: [
    {
      name: "dir",
      template: "folders",
      isVariadic: true,
    },
    {
      name: "destination",
      template: "folders",
    },
  ],
});

const helpOption = (
  topic: string,
  argName: string,
  description: string
): Fig.Option => ({
  name: `--help-${topic}`,
  description,
  args: [
    {
      name: argName,
    },
    {
      name: "file",
      template: "filepaths",
      isOptional: true,
    },
  ],
});

const helpListOption = (topic: string, description: string): Fig.Option => ({
  name: `--help-${topic}`,
  description,
  args: {
    name: "file",
    template: "filepaths",
    isOptional: true,
  },
});

const completion: Fig.Spec = {
  name: "cmake",
  description:
    "Command-line interface of the cross-platform buildsystem generator CMake",
  subcommands: [
    {
      name: "--build",
      description:
        "Project binary directory to be built and must be first. This is required unless a preset is specified",
      args: {
        name: "dir",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: "--preset",
          description: "Use a build preset to specify build options",
          args: {
            name: "preset",
          },
        },
        presetsFileOption,
        listDefinedPresetsOption("build"),
        parallelOption(
          "The maximum number of concurrent processes to use when building. If <jobs> is omitted the native build tool's default number is used",
          true
        ),
        {
          name: ["--target", "-t"],
          description:
            "Build <tgt> instead of the default target. Multiple targets may be given, separated by spaces",
          args: {
            name: "target",
            isVariadic: true,
          },
        },
        configOption(
          "For multi-configuration tools, choose configuration <cfg>"
        ),
        {
          name: "--clean-first",
          description: "Build target clean first, then build",
        },
        {
          name: "--resolve-package-references",
          description:
            "Resolve remote package references from external package managers (e.g. NuGet) before build",
          args: {
            name: "value",
            suggestions: [
              {
                name: "on",
                description: "Restore packages before building (default)",
              },
              {
                name: "only",
                description: "Restore packages but do not build",
              },
              {
                name: "off",
                description: "Do not restore packages",
              },
            ],
          },
        },
        {
          name: "--use-stderr",
          description: "Ignored. Behavior is default in CMake >= 3.0",
        },
        verboseOption(
          "Enable verbose output - if supported - including the build commands to be executed"
        ),
        {
          name: "--",
          description: "Pass remaining options to the native tool",
        },
      ],
    },
    {
      name: "--install",
      description:
        "Project binary directory to install. This is required and must be first",
      args: {
        name: "dir",
        template: "folders",
      },
      options: [
        configOption(
          "For multi-configuration generators, choose configuration <cfg>"
        ),
        {
          name: "--component",
          description:
            "Component-based install. Only install the specified components",
          isRepeatable: true,
          args: {
            name: "comp",
            isVariadic: true,
          },
        },
        {
          name: "--default-directory-permissions",
          description: "Default directory install permissions",
          args: {
            name: "permissions",
            description: "Format: <u=rwx,g=rx,o=rx>",
          },
        },
        {
          name: "--prefix",
          description: "Override the installation prefix",
          args: {
            name: "prefix",
            template: "folders",
          },
        },
        {
          name: "--strip",
          description: "Strip before installing",
        },
        verboseOption("Enable verbose output"),
        parallelOption(
          "Install in parallel using the given number of jobs. Only available if INSTALL_PARALLEL is enabled",
          false
        ),
      ],
    },
    {
      name: "--open",
      description:
        "Open the generated project in the associated application. This is only supported by some generators",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "--workflow",
      description:
        "Run a workflow preset, executing multiple build steps in order",
      args: {
        name: "preset",
        description: "Workflow preset name (same as --preset <preset>)",
        isOptional: true,
      },
      options: [
        {
          name: "--preset",
          description: "Use a workflow preset to specify a workflow",
          args: {
            name: "preset",
          },
        },
        presetsFileOption,
        listDefinedPresetsOption("workflow"),
        {
          name: "--fresh",
          description:
            "Perform a fresh configuration of the build tree, as with cmake --fresh",
        },
      ],
    },
    {
      name: "-P",
      description:
        "Process the given cmake file as a script written in the CMake language. No configure or generate step is performed and the cache is not modified. If variables are defined using -D, this must be done before the -P argument",
      args: {
        name: "cmake script file",
        template: "filepaths",
      },
    },
    {
      name: "-E",
      description:
        "Run a builtin command-line tool. Run cmake -E for a summary of commands",
      subcommands: [
        {
          name: "bin2c",
          description:
            "Convert a binary file to a C array. If input file is unspecified or '-', read from standard input. If output file is unspecified or '-', write to standard output",
          options: [
            {
              name: "--signed",
              description:
                "Print the bytes as signed integers rather than unsigned",
            },
            {
              name: "--decimal",
              description: "Print the bytes as decimal rather than hexadecimal",
            },
            {
              name: "--trailing-comma",
              description:
                "Append a trailing comma after the last byte (not included by default)",
            },
            {
              name: "--template-file",
              description:
                "Format from a template file containing @array@ and optionally @length@ placeholders",
              args: {
                name: "template-file",
                template: "filepaths",
              },
            },
            {
              name: "--template-array-placeholder",
              description:
                "Specify a name for the array placeholder in the template file (default: array)",
              args: {
                name: "placeholder-name",
              },
            },
            {
              name: "--template-length-placeholder",
              description:
                "Specify a name for the length placeholder in the template file (default: length)",
              args: {
                name: "placeholder-name",
              },
            },
            {
              name: "--",
              description:
                "Stop interpreting options and treat the rest as file names",
            },
          ],
          args: [
            {
              name: "input-file",
              template: "filepaths",
              isOptional: true,
            },
            {
              name: "output-file",
              template: "filepaths",
              isOptional: true,
            },
          ],
        },
        {
          name: "capabilities",
          description:
            "Report cmake capabilities in JSON format. The output is a JSON object with the following keys",
        },
        {
          name: "cat",
          description: "Concatenate files and print on the standard output",
          options: [
            {
              name: "--",
              description:
                "Stop interpreting options, in case a file name starts with -",
            },
          ],
          args: {
            name: "files",
            template: "filepaths",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "chdir",
          description: "Change the current working directory and run a command",
          args: [
            {
              name: "dir",
              template: "folders",
            },
            {
              name: "command",
            },
          ],
        },
        {
          name: "compare_files",
          description:
            "Check if file1 is the same as file2. If files are the same, then returns 0, if not returns 1. In case of invalid arguments, it returns 2",
          args: [
            {
              name: "file1",
              template: "filepaths",
            },
            {
              name: "file2",
              template: "filepaths",
            },
          ],
          options: [
            {
              name: "--ignore-eol",
              description:
                "Implies line-wise comparison and ignores LF/CRLF differences",
            },
          ],
        },
        copyFilesCommand(
          "copy",
          "Copy files to <destination> (either file or directory). If multiple files are specified, or if -t is specified, the <destination> must be directory and it must exist. Wildcards are not supported. copy does follow symlinks. That means it does not copy symlinks, but the files or directories it point to"
        ),
        copyDirectoriesCommand(
          "copy_directory",
          "Copy content of <dir>... directories to <destination> directory. If <destination> directory does not exist it will be created. copy_directory does follow symlinks"
        ),
        copyDirectoriesCommand(
          "copy_directory_if_different",
          "Copy changed content of <dir>... directories to <destination> directory. If <destination> directory does not exist it will be created. The command fails when the source directory does not exist"
        ),
        copyDirectoriesCommand(
          "copy_directory_if_newer",
          "Copy content of <dir>... directories to <destination> directory if source files are newer than destination files (based on file timestamps). Faster than copy_directory_if_different"
        ),
        copyFilesCommand(
          "copy_if_different",
          "Copy files to <destination> (either file or directory) if they have changed. If multiple files are specified, or if -t is specified, the <destination> must be directory and it must exist. copy_if_different does follow symlinks"
        ),
        copyFilesCommand(
          "copy_if_newer",
          "Copy files to <destination> (either file or directory) if source files are newer than destination files (based on file timestamps). Faster than copy_if_different"
        ),
        {
          name: "create_symlink",
          description: "Create a symbolic link <new> naming <old>",
          args: [
            {
              name: "old",
            },
            {
              name: "new",
            },
          ],
        },
        {
          name: "create_hardlink",
          description: "Create a hard link <new> naming <old>",
          args: [
            {
              name: "old",
            },
            {
              name: "new",
            },
          ],
        },
        {
          name: "echo",
          description: "Displays arguments as text",
          args: {
            name: "string",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "echo_append",
          description: "Displays arguments as text but no new line",
          args: {
            name: "string",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "env",
          description: "Run command in a modified environment",
          args: [
            {
              name: "key value pair",
              description: "Format: NAME=VALUE",
              isOptional: true,
              isVariadic: true,
            },
            {
              name: "command",
            },
          ],
          options: [
            {
              name: "--unset",
              description: "Unset the current value of NAME",
              requiresSeparator: true,
              isRepeatable: true,
              args: {
                name: "name",
              },
            },
            {
              name: "--modify",
              description:
                "Apply a single ENVIRONMENT_MODIFICATION operation to the modified environment",
              isRepeatable: true,
              args: {
                name: "ENVIRONMENT_MODIFICATION",
                description: "Format: NAME=operation:value",
              },
            },
            {
              name: "--",
              description:
                "Stop interpreting options and treat the next argument as the command",
            },
          ],
        },
        {
          name: "environment",
          description: "Display the current environment variables",
        },
        {
          name: "false",
          description: "Do nothing, with an exit code of 1",
        },
        {
          name: "make_directory",
          description:
            "Create <dir> directories. If necessary, create parent directories too. If a directory already exists it will be silently ignored",
          args: {
            name: "dir",
            template: "folders",
            isVariadic: true,
          },
        },
        checksumCommand("md5"),
        checksumCommand("sha1"),
        checksumCommand("sha224"),
        checksumCommand("sha256"),
        checksumCommand("sha384"),
        checksumCommand("sha512"),
        {
          name: "remove",
          description:
            "Remove the file(s). Deprecated since 3.17, use rm instead. The planned behavior was that if any of the listed files already do not exist, the command returns a non-zero exit code, but no message is logged",
          deprecated: true,
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
          options: [
            {
              name: "-f",
              description:
                "The -f option changes the behavior to return a zero exit code (i.e. success) in such situations instead. remove does not follow symlinks. That means it remove only symlinks and not files it point to",
            },
          ],
        },
        {
          name: "remove_directory",
          description:
            "Remove <dir> directories and their contents. Deprecated since 3.17, use rm instead. If a directory does not exist it will be silently ignored. If <dir> is a symlink to a directory, just the symlink will be removed",
          deprecated: true,
          args: {
            name: "dir",
            template: "folders",
            isVariadic: true,
          },
        },
        {
          name: "rename",
          description:
            "Rename a file or directory (on one volume). If file with the <newname> name already exists, then it will be silently replaced",
          args: [
            {
              name: "oldname",
              template: ["filepaths", "folders"],
            },
            {
              name: "newname",
              template: ["filepaths", "folders"],
            },
          ],
        },
        {
          name: "rm",
          description: "Remove the files <file> or directories dir",
          args: {
            name: "file or dir",
            template: ["filepaths", "folders"],
            isVariadic: true,
          },
          options: [
            {
              name: ["-r", "-R"],
              description:
                "Remove directories and their contents recursively. If any of the listed files/directories do not exist, the command returns a non-zero exit code, but no message is logged",
            },
            {
              name: "-f",
              description:
                "Return a zero exit code (i.e. success) if any of the listed files/directories do not exist",
            },
            {
              name: "--",
              description:
                "Stop interpreting options and treat all remaining arguments as paths, even if they start with -",
            },
          ],
        },
        {
          name: "sleep",
          description:
            "Sleep for given number of seconds. The number may be a floating point number",
          args: {
            name: "number",
            isVariadic: true,
          },
        },
        {
          name: "tar",
          description: "Create or extract a tar or zip archive",
          options: [
            {
              name: "c",
              description:
                "Create a new archive containing the specified files. If used, the pathname argument is mandatory",
            },
            {
              name: "x",
              description:
                "Extract to disk from the archive. The <pathname>... argument could be used to extract only selected files or directories. When extracting selected files or directories, you must provide their exact names including the path, as printed by list (-t)",
            },
            {
              name: "t",
              description:
                "List archive contents. The <pathname>... argument could be used to list only selected files or directories",
            },
            {
              name: "v",
              description: "Produce verbose output",
            },
            {
              name: "z",
              description: "Compress the resulting archive with gzip (Deflate)",
            },
            {
              name: "j",
              description: "Compress the resulting archive with bzip2",
            },
            {
              name: "J",
              description: "Compress the resulting archive with XZ (LZMA2)",
            },
            {
              name: "--zstd",
              description: "Compress the resulting archive with Zstandard",
            },
            {
              name: "--lzma",
              description: "Compress the resulting archive with LZMA algorithm",
            },
            {
              name: "--files-from",
              description:
                "Read file names from the given file, one per line. Blank lines are ignored. Lines may not start in - except for --add-file=<name> to add files whose names start in -",
              requiresSeparator: true,
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--format",
              description:
                "Specify the format of the archive to be created (default: paxr)",
              requiresSeparator: true,
              args: {
                name: "format",
                suggestions: [
                  "7zip",
                  "gnutar",
                  "pax",
                  {
                    name: "paxr",
                    description: "Restricted pax (default)",
                  },
                  {
                    name: "raw",
                    description: "Compress only one file, without an archive",
                  },
                  "zip",
                ],
              },
            },
            {
              name: "--mtime",
              description:
                "Specify modification time recorded in tarball entries",
              requiresSeparator: true,
              args: {
                name: "date",
              },
            },
            {
              name: "--cmake-tar-compression-method",
              description: "Select the compression method of the archive",
              requiresSeparator: true,
              args: {
                name: "compression-method",
                suggestions: [
                  "none",
                  "store",
                  "deflate",
                  "gzip",
                  "bzip2",
                  "lzma",
                  "lzma2",
                  "xz",
                  {
                    name: "ppmd",
                    description: "Only supported by the 7zip format",
                  },
                  "zstd",
                ],
              },
            },
            {
              name: "--cmake-tar-compression-level",
              description:
                "Set the compression level, between 0 (default) and 9 (0 to 19 for Zstandard, except for the zip format)",
              requiresSeparator: true,
              args: {
                name: "compression-level",
              },
            },
            {
              name: "--cmake-tar-encoding",
              description:
                "Specify the pathname character encoding used in the archive (default: UTF-8)",
              requiresSeparator: true,
              args: {
                name: "encoding",
                suggestions: ["UTF-8", "OEM", "UTF-16LE", "UTF-16BE"],
              },
            },
            {
              name: "--cmake-tar-threads",
              description:
                "Use the given number of threads to operate on the archive. 0 uses the number of available cores",
              requiresSeparator: true,
              args: {
                name: "number",
              },
            },
            {
              name: "--touch",
              description:
                "Use current local timestamp instead of extracting file timestamps from the archive",
            },
            {
              name: "--",
              description:
                "Stop interpreting options and treat all remaining arguments as file names, even if they start with -",
            },
          ],
          args: {
            name: "pathname",
            isOptional: true,
          },
        },
        {
          name: "time",
          description: "Run command and display elapsed time",
          args: {
            name: "command",
            isCommand: true,
          },
        },
        {
          name: "touch",
          description:
            "Creates <file> if file do not exist. If <file> exists, it is changing <file> access and modification times",
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: "touch_nocreate",
          description:
            "Touch a file if it exists but do not create it. If a file does not exist it will be silently ignored",
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: "true",
          description: "Do nothing, with an exit code of 0",
        },
        {
          name: "delete_regv",
          description: "Delete Windows registry value (Windows only)",
          args: {
            name: "key",
          },
        },
        {
          name: "env_vs8_wince",
          description:
            "Displays a batch file which sets the environment for the provided Windows CE SDK installed in VS2005 (Windows only)",
          args: {
            name: "sdkname",
          },
        },
        {
          name: "env_vs9_wince",
          description:
            "Displays a batch file which sets the environment for the provided Windows CE SDK installed in VS2008 (Windows only)",
          args: {
            name: "sdkname",
          },
        },
        {
          name: "write_regv",
          description: "Write Windows registry value (Windows only)",
          args: [
            {
              name: "key",
            },
            {
              name: "value",
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: "-S",
      description: "Path to root directory of the CMake project to build",
      args: {
        name: "path-to-source",
        template: "folders",
      },
    },
    {
      name: ["--help", "-h", "-help", "-usage"],
      description:
        "Print usage information and exit. With a keyword (property, variable, command, policy, generator or module) print the help for it",
      args: [
        {
          name: "keyword",
          isOptional: true,
        },
        {
          name: "file",
          template: "filepaths",
          isOptional: true,
        },
      ],
    },
    {
      name: ["--version", "-version"],
      description:
        "Show program name/version banner and exit. With =json-v1, print extended version information in JSON format",
      requiresSeparator: true,
      args: {
        name: "format",
        isOptional: true,
        suggestions: ["json-v1"],
      },
    },
    helpListOption("full", "Print all help manuals and exit"),
    helpOption("manual", "man", "Print one help manual and exit"),
    helpListOption("manual-list", "List help manuals available and exit"),
    helpOption("command", "cmd", "Print help for one command and exit"),
    helpListOption(
      "command-list",
      "List commands with help available and exit"
    ),
    helpListOption("commands", "Print cmake-commands manual and exit"),
    helpOption("diagnostic", "diag", "Print help for one diagnostic and exit"),
    helpListOption(
      "diagnostic-list",
      "List diagnostics with help available and exit"
    ),
    helpListOption("diagnostics", "Print cmake-diagnostics manual and exit"),
    helpOption("module", "mod", "Print help for one module and exit"),
    helpListOption("module-list", "List modules with help available and exit"),
    helpListOption("modules", "Print cmake-modules manual and exit"),
    helpOption("policy", "cmp", "Print help for one policy and exit"),
    helpListOption("policy-list", "List policies with help available and exit"),
    helpListOption("policies", "Print cmake-policies manual and exit"),
    helpOption("property", "prop", "Print help for one property and exit"),
    helpListOption(
      "property-list",
      "List properties with help available and exit"
    ),
    helpListOption("properties", "Print cmake-properties manual and exit"),
    helpOption("variable", "var", "Print help for one variable and exit"),
    helpListOption(
      "variable-list",
      "List variables with help available and exit"
    ),
    helpListOption("variables", "Print cmake-variables manual and exit"),
    {
      name: "-B",
      description:
        "Path to directory which CMake will use as the root of build directory. If the directory doesn't already exist CMake will make it",
      args: {
        name: "path-to-build",
        template: "folders",
      },
    },
    {
      name: "-C",
      description: "Pre-load a script to populate the cache",
      isRepeatable: true,
      args: {
        name: "initial-cache",
        template: "filepaths",
      },
    },
    {
      name: "-D",
      description: "Create or update a CMake CACHE entry",
      isRepeatable: true,
      args: {
        name: "key value pair",
        description: "<var>:<type>=<value> or <var>=<value>",
      },
    },
    {
      name: "-U",
      description: "Remove matching entries from CMake CACHE",
      isRepeatable: true,
      args: {
        name: "globbing_expr",
      },
    },
    {
      name: "-G",
      description: "Specify a build system generator",
      args: {
        name: "generator-name",
      },
    },
    {
      name: "-T",
      description: "Toolset specification for the generator, if supported",
      args: {
        name: "toolset-spec",
      },
    },
    {
      name: "-A",
      description: "Specify platform name if supported by generator",
      args: {
        name: "platform-name",
      },
    },
    {
      name: "--toolchain",
      description:
        "Specify the cross compiling toolchain file, equivalent to setting CMAKE_TOOLCHAIN_FILE variable",
      args: {
        name: "path-to-file",
        template: "filepaths",
      },
    },
    {
      name: "--install-prefix",
      description:
        "Specify the installation directory, used by the CMAKE_INSTALL_PREFIX variable. Must be an absolute path",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--project-file",
      description:
        "Specify an alternate project file name to be processed instead of CMakeLists.txt",
      args: {
        name: "project-file-name",
        template: "filepaths",
      },
    },
    {
      name: "-Wdev",
      description: "Enable developer warnings. Use -Wauthor instead",
      deprecated: true,
    },
    {
      name: "-Wno-dev",
      description: "Suppress developer warnings. Use -Wno-author instead",
      deprecated: true,
    },
    ...diagnosticOptions,
    {
      name: "-Werror",
      description:
        "Promote the diagnostic category (and any children) to at least SEND_ERROR severity",
      requiresSeparator: true,
      args: {
        name: "category",
        suggestions: [
          ...diagnosticCategories,
          {
            name: "dev",
            description: "Make developer warnings errors (use author instead)",
            deprecated: true,
          },
        ],
      },
    },
    {
      name: "-Wno-error",
      description:
        "Demote the diagnostic category (and any children) to at most WARN severity",
      requiresSeparator: true,
      args: {
        name: "category",
        suggestions: [
          ...diagnosticCategories,
          {
            name: "dev",
            description:
              "Make developer warnings not errors (use author instead)",
            deprecated: true,
          },
        ],
      },
    },
    {
      name: "--fresh",
      description:
        "Perform a fresh configuration of the build tree, removing any existing CMakeCache.txt file and CMakeFiles/ directory",
    },
    {
      name: "-L",
      description: "List non-advanced cached variables",
    },
    {
      name: "-LA",
      description: "List all cached variables, including advanced ones",
    },
    {
      name: "-LH",
      description: "List non-advanced cached variables with help for each",
    },
    {
      name: "-LAH",
      description:
        "List all cached variables, including advanced ones, with help for each",
    },
    {
      name: "-LR",
      description:
        "Show non-advanced cached variables that match the given regex",
      args: {
        name: "regex",
      },
    },
    {
      name: "-LRA",
      description: "Show all cached variables that match the given regex",
      args: {
        name: "regex",
      },
    },
    {
      name: "-LRH",
      description:
        "Show non-advanced cached variables that match the given regex, with help for each",
      args: {
        name: "regex",
      },
    },
    {
      name: "-LRAH",
      description:
        "Show all cached variables that match the given regex, with help for each",
      args: {
        name: "regex",
      },
    },
    {
      name: "-N",
      description: "View mode only",
    },
    {
      name: "--graphviz",
      description: "Generate graphviz of dependencies",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--system-information",
      description: "Dump information about this system",
      args: {
        name: "file",
        template: "filepaths",
        isOptional: true,
      },
    },
    {
      name: "--print-config-dir",
      description:
        "Print CMake config directory for user-wide File API queries",
    },
    {
      name: ["--log-level", "--loglevel"],
      description: "Set log-level",
      args: {
        name: "log-level",
        suggestions: [
          "ERROR",
          "WARNING",
          "NOTICE",
          "STATUS",
          "VERBOSE",
          "DEBUG",
          "TRACE",
        ],
      },
    },
    {
      name: "--log-context",
      description:
        "Enable the message() command outputting context attached to each message",
    },
    {
      name: "--sarif-output",
      description:
        "Enable logging of diagnostic messages produced by CMake in the SARIF format at the given path",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--debug-trycompile",
      description:
        "Do not delete the files and directories created for try_compile() / try_run() calls",
    },
    {
      name: "--debug-output",
      description: "Put cmake in a debug mode",
    },
    {
      name: "--debug-find",
      description: "Put cmake find commands in a debug mode",
    },
    {
      name: "--debug-find-pkg",
      description:
        "Put cmake find commands in a debug mode when running under calls to find_package() for the given packages",
      requiresSeparator: true,
      args: {
        name: "pkg",
        description: "Comma-separated list of case-sensitive package names",
      },
    },
    {
      name: "--debug-find-var",
      description:
        "Put cmake find commands in a debug mode when called with the given result variables",
      requiresSeparator: true,
      args: {
        name: "var",
        description: "Comma-separated list of variable names",
      },
    },
    {
      name: "--trace",
      description: "Put cmake in trace mode",
    },
    {
      name: "--trace-expand",
      description: "Put cmake in trace mode with variables expanded",
    },
    {
      name: "--trace-format",
      description: "Put cmake in trace mode and sets the trace output format",
      args: {
        name: "format",
        suggestions: ["human", "json-v1"],
      },
    },
    {
      name: "--trace-source",
      description:
        "Put cmake in trace mode, but output only lines of a specified file",
      isRepeatable: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--trace-redirect",
      description:
        "Put cmake in trace mode and redirect trace output to a file instead of stderr",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--warn-uninitialized",
      description: "Compatibility synonym for -Wuninitialized",
      deprecated: true,
    },
    {
      name: "--warn-unused-vars",
      description:
        "Does nothing. In CMake versions 3.2 and below this enabled warnings about unused variables. In CMake versions 3.3 through 3.18 the option was broken. In CMake 3.19 and above the option has been removed",
      deprecated: true,
    },
    {
      name: "--no-warn-unused-cli",
      description: "Compatibility synonym for -Wno-unused-cli",
      deprecated: true,
    },
    {
      name: "--check-system-vars",
      description: "Find problems with variable usage in system files",
    },
    {
      name: "--compile-no-warning-as-error",
      description:
        "Ignore target property COMPILE_WARNING_AS_ERROR and variable CMAKE_COMPILE_WARNING_AS_ERROR, preventing warnings from being treated as errors on compile",
    },
    {
      name: "--link-no-warning-as-error",
      description:
        "Ignore target property LINK_WARNING_AS_ERROR and variable CMAKE_LINK_WARNING_AS_ERROR, preventing warnings from being treated as errors on link",
    },
    {
      name: "--profiling-output",
      description:
        "Used in conjunction with --profiling-format to output to a given path",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--profiling-format",
      description:
        "Enable the output of profiling data of CMake script in the given format",
      args: {
        name: "format",
        suggestions: [
          {
            name: "google-trace",
            description: "Google Trace Format",
          },
        ],
      },
    },
    {
      name: "--preset",
      description:
        "Reads a preset from CMakePresets.json and CMakeUserPresets.json (or the file given by --presets-file) in the top level source directory. The preset may specify the generator, the build directory, a list of variables, and other arguments to pass to CMake",
      args: {
        name: "preset",
      },
    },
    presetsFileOption,
    {
      name: "--list-presets",
      description:
        "Lists the available presets of the given type. Defaults to configure. A '-defined' suffix lists all non-hidden defined presets, including unavailable ones",
      args: {
        name: "type",
        isOptional: true,
        suggestions: [
          ...listPresetTypes,
          "defined",
          ...listPresetTypes.map((type) => `${type}-defined`),
        ],
      },
    },
    {
      name: "--debugger",
      description:
        "Enables interactive debugging of the CMake language through a Debug Adapter Protocol interface on the pipe named by --debugger-pipe",
    },
    {
      name: "--debugger-pipe",
      description:
        "Name of the pipe (on Windows) or domain socket (on Unix) to use for debugger communication",
      args: {
        name: "pipe name",
      },
    },
    {
      name: "--debugger-dap-log",
      description: "Logs all debugger communication to the specified file",
      args: {
        name: "log path",
        template: "filepaths",
      },
    },
    {
      name: "--find-package",
      description: "Legacy pkg-config like mode. Do not use in new projects",
    },
  ],
  args: {
    name: "path-to-source | path-to-existing-build",
    template: "folders",
  },
};

export default completion;
