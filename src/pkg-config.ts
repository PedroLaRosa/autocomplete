// pkgconf v3.0.11 (gh release pkgconf/pkgconf, 2026-11-19). Source: cli/main.c
// usage() and options table, man/pkgconf.1. Homebrew's pkg-config is pkgconf

const completionSpec: Fig.Spec = {
  name: "pkg-config",
  description: "Return metainformation about installed libraries",
  args: {
    name: "libraries...",
    isVariadic: true,
  },
  options: [
    // Basic options
    {
      name: "--help",
      description: "Displays a help message and terminates",
    },
    {
      name: "--about",
      description: "Print pkgconf version and license",
    },
    {
      name: "--version",
      description: "Print the supported pkg-config version",
    },
    {
      name: "--verbose",
      description: "Print additional information",
      isRepeatable: true,
    },
    {
      name: "--atleast-pkgconfig-version",
      description: "Require at least the given version of pkg-config",
      args: {
        name: "version",
      },
    },
    {
      name: "--errors-to-stdout",
      description:
        "If printing errors, print them to stdout rather than the default stderr",
    },
    {
      name: "--print-errors",
      description:
        "Print errors if modules cannot be found or if an error occurs in parsing a .pc file",
    },
    {
      name: "--short-errors",
      description: "Print short error messages",
    },
    {
      name: "--silence-errors",
      description: "Explicitly be silent about errors",
    },
    {
      name: "--debug",
      description: "Print non-fatal warnings and debugging messages",
    },
    {
      name: "--list-all",
      description: "List all modules found in the pkg-config path",
    },
    {
      name: "--list-package-names",
      description: "List the names of all modules found in the pkg-config path",
    },
    {
      name: "--simulate",
      description: "Simulate walking the calculated dependency graph",
    },
    {
      name: "--no-cache",
      description:
        "Do not cache already seen packages when walking the dependency graph",
    },
    {
      name: "--log-file",
      description: "Write an audit log to the given file",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "--with-path",
      description: "Add a directory to the search path",
      isRepeatable: true,
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--define-prefix",
      description:
        "Use the installed location of the .pc file to determine the prefix",
    },
    {
      name: "--dont-define-prefix",
      description:
        "Use the specified prefix variable value defined in the .pc file as the prefix",
    },
    {
      name: "--prefix-variable",
      description:
        "Set the name of the variable to be overridden instead of prefix when using --define-prefix",
      args: {
        name: "variable-name",
      },
    },
    {
      name: "--dont-relocate-paths",
      description: "Disable path relocation support",
    },
    // Cross-compilation personality support
    {
      name: "--personality",
      description: "Set the personality to a target triplet or a file",
      args: {
        name: "triplet|filename",
        template: "filepaths",
      },
    },
    {
      name: "--dump-personality",
      description: "Print details of the selected personality",
    },
    // Checking specific pkg-config database entries
    {
      name: "--atleast-version",
      description:
        "Test whether the packages on the command line exist and are at least the specified version",
      args: {
        name: "version",
      },
    },
    {
      name: "--exact-version",
      description:
        "Test whether the packages on the command line exist and are exactly the specified version",
      args: {
        name: "version",
      },
    },
    {
      name: "--max-version",
      description:
        "Test whether the packages on the command line exist and are at most the specified version",
      args: {
        name: "version",
      },
    },
    {
      name: "--exists",
      description: "Test whether the packages on the command line exist",
    },
    {
      name: "--uninstalled",
      description:
        'Return successfully if any "-uninstalled" packages are being used, and return failure otherwise',
    },
    {
      name: "--no-uninstalled",
      description: "Never use uninstalled modules when satisfying dependencies",
    },
    {
      name: "--no-provides",
      description: "Do not use 'provides' rules to resolve dependencies",
    },
    {
      name: "--maximum-traverse-depth",
      description:
        "Maximum allowed depth for the dependency graph (-1 for unlimited)",
      args: {
        name: "depth",
        default: "256",
      },
    },
    {
      name: "--static",
      description: "Output libraries suitable for static linking",
    },
    {
      name: "--shared",
      description: "Use a simplified dependency graph (usually default)",
    },
    {
      name: "--pure",
      description:
        "Optimize a static dependency graph as if it were a normal dependency graph",
    },
    {
      name: "--env-only",
      description: "Look only for package entries in PKG_CONFIG_PATH",
    },
    {
      name: "--ignore-conflicts",
      description: "Ignore 'conflicts' rules in modules",
    },
    {
      name: "--validate",
      description: "Check the syntax of a package's .pc file for validity",
    },
    // Querying specific pkg-config database fields
    {
      name: "--define-variable",
      description:
        "Set a global value for a variable, overriding the value in any .pc files",
      isRepeatable: true,
      args: {
        name: "varname=value",
      },
    },
    {
      name: "--variable",
      description:
        "Return the value of a variable defined in a package's .pc file",
      args: {
        name: "variable-name",
      },
    },
    {
      name: "--cflags",
      description:
        "Print pre-processor and compile flags required to compile the packages on the command line",
    },
    {
      name: "--cflags-only-I",
      description:
        'Print parts of "--cflags" that define the header search path',
    },
    {
      name: "--cflags-only-other",
      description: 'Print parts of "--cflags" not covered by "--cflags-only-I"',
    },
    {
      name: "--libs",
      description:
        "Print link flags required to compile the packages on the command line",
    },
    {
      name: "--libs-only-L",
      description: 'Print parts of "-libs" that define library search path',
    },
    {
      name: "--libs-only-l",
      description:
        'Print parts of "-libs" that specify which libraries to link to',
    },
    {
      name: "--libs-only-other",
      description:
        'Print parts of "-libs" not covered by "--libs-only-L" and "--libs-only-l"',
    },
    {
      name: "--print-requires",
      description: "List all modules the given packages requires",
    },
    {
      name: "--print-requires-private",
      description:
        "List all modules the given packages requires for static linking",
    },
    {
      name: "--print-provides",
      description: "List all modules the given packages provides",
    },
    {
      name: "--print-variables",
      description: "Return a list of all variables defined in the package",
    },
    {
      name: "--digraph",
      description: "Print the entire dependency graph in graphviz 'dot' format",
    },
    {
      name: "--print-digraph-query-nodes",
      description: "Also print query nodes in 'dot' format",
    },
    {
      name: "--solution",
      description: "Print the dependency graph solution in a simple format",
    },
    {
      name: "--keep-system-cflags",
      description: "Keep system include directory entries in cflags output",
    },
    {
      name: "--keep-system-libs",
      description: "Keep system library directory entries in libs output",
    },
    {
      name: "--path",
      description: "Show the exact filenames for any matching .pc files",
    },
    {
      name: "--modversion",
      description:
        "Display the version information of the libraries specified on the command line",
    },
    {
      name: "--internal-cflags",
      description: "Do not filter 'internal' cflags from output",
    },
    {
      name: "--license",
      description: "Print the module's license if known",
    },
    {
      name: "--license-file",
      description: "Print the module's license file location if known",
    },
    {
      name: "--link-abi",
      description:
        "Print the link ABIs (e.g. c, c++) the module must be linked against",
    },
    {
      name: "--source",
      description: "Print the module's source code location if known",
    },
    {
      name: "--exists-cflags",
      description: "Add -DHAVE_FOO fragments to cflags for each found module",
    },
    // Filtering output
    {
      name: "--msvc-syntax",
      description:
        "Output -l and -L flags in the form recognized by the Microsoft Visual C++ command-line compiler",
    },
    {
      name: "--fragment-filter",
      description: "Filter output fragments to the specified types",
      args: {
        name: "types",
      },
    },
    {
      name: "--env",
      description: "Print output as shell-compatible environment variables",
      args: {
        name: "prefix",
      },
    },
    {
      name: "--fragment-tree",
      description: "Visualize printed CFLAGS/LIBS fragments as a tree",
    },
    {
      name: "--newlines",
      description: "Use newlines for whitespace between fragments",
    },
  ],
};

export default completionSpec;
