// Python v3.15.2 (latest stable CPython: git tag v3.15.2 and Homebrew python@3.15, 2026-11-20).
// Source: usage text in Python/initconfig.c (what `python3 --help-all` prints), Python/getopt.c,
// Doc/using/cmdline.rst and Doc/using/configure.rst at tag v3.15.2. Read statically, not run:
// the sandbox only has python 3.13.
import { filepaths } from "@tabsmith/autocomplete-generators";

const xOptions: [string, string][] = [
  ["context_aware_warnings=0", "Use module globals for warnings filter state"],
  [
    "context_aware_warnings=1",
    "Use a context variable for warnings filter state",
  ],
  ["cpu_count=", "Override the return value of os.cpu_count() (N or default)"],
  ["dev", "Enable Python Development Mode"],
  ["disable-remote-debug", "Disable remote debugging"],
  ["faulthandler", "Dump the Python traceback on fatal errors"],
  ["frozen_modules=on", "Use frozen modules"],
  ["frozen_modules=off", "Don't use frozen modules"],
  ["gil=0", "Disable the GIL (free-threaded builds only)"],
  ["gil=1", "Enable the GIL"],
  ["importtime", "Show how long each import takes"],
  ["importtime=2", "Also log imports of already-loaded modules"],
  [
    "int_max_str_digits=",
    "Limit the size of int<->str conversions (0 disables)",
  ],
  ["lazy_imports=all", "Make all imports lazy by default"],
  ["lazy_imports=normal", "Respect the lazy keyword in source code"],
  [
    "no_debug_ranges",
    "Don't include extra location information in code objects",
  ],
  ["pathconfig_warnings=0", "Suppress path configuration warnings"],
  ["pathconfig_warnings=1", "Allow path configuration to log warnings"],
  ["perf", "Support the Linux perf profiler"],
  ["perf_jit", "Support the Linux perf profiler with DWARF support"],
  ["presite=", "Module or module:func to run before site (debug builds only)"],
  ["pycache_prefix=", "Write .pyc files to a parallel tree at PATH"],
  ["pystats", "Enable pystats collection at startup (--enable-pystats builds)"],
  ["showrefcount", "Output the total reference count (debug builds only)"],
  ["thread_inherit_context=0", "Threads start with an empty context"],
  ["thread_inherit_context=1", "Threads inherit the caller's context"],
  ["tlbc=0", "Disable thread-local bytecode (free-threaded builds only)"],
  ["tlbc=1", "Enable thread-local bytecode (free-threaded builds only)"],
  ["tracemalloc", "Trace Python memory allocations"],
  ["tracemalloc=", "Trace memory allocations keeping N traceback frames"],
  ["utf8", "Enable UTF-8 mode"],
  ["utf8=0", "Disable UTF-8 mode"],
  ["warn_default_encoding", "Emit EncodingWarning for encoding=None"],
];

const completionSpec: Fig.Spec = {
  name: "python3",
  description: "Run the python interpreter",
  generateSpec: async (tokens, executeShellCommand) => {
    const isDjangoManagePyFilePresentCommand = "cat manage.py | grep -q django";

    if (
      (
        await executeShellCommand({
          command: "bash",
          args: ["-c", isDjangoManagePyFilePresentCommand],
        })
      ).status === 0
    ) {
      return {
        name: "python3",
        subcommands: [{ name: "manage.py", loadSpec: "django-admin" }],
      };
    }
  },
  args: {
    name: "python script",
    isScript: true,
    generators: filepaths({
      extensions: ["py"],
      editFileSuggestions: { priority: 76 },
    }),
  },
  options: [
    {
      name: "-c",
      insertValue: "-c '{cursor}'",
      description:
        "Execute the Python code in command. command can be one or more statements separated by newlines, with significant leading whitespace as in normal module code",
      args: {
        name: "command",
        isCommand: true,
      },
    },
    {
      name: "-m",
      insertValue: "-m '{cursor}'",
      description:
        "Search sys.path for the named module and execute its contents as the __main__ module",
      args: {
        name: "command",
        isCommand: true,
      },
    },
    {
      name: ["-?", "-h", "--help"],
      description:
        "Print a short description of all command line options and exit",
    },
    {
      name: "--help-env",
      description: "Print help about Python environment variables and exit",
    },
    {
      name: "--help-xoptions",
      description:
        "Print help about implementation-specific -X options and exit",
    },
    {
      name: "--help-all",
      description: "Print complete help information and exit",
    },
    {
      name: ["-V", "--version"],
      description:
        "Print the Python version number and exit; given twice, print build information",
      isRepeatable: 2,
    },
    {
      name: "-b",
      description:
        "Issue a warning when converting bytes/bytearray to str or comparing them with str, or bytes with int. Issue an error when given twice (-bb)",
      isRepeatable: 2,
      deprecated: {
        description: "Becomes a no-op in Python 3.17; use a type checker",
      },
    },
    {
      name: "-B",
      description:
        "If given, Python won’t try to write .pyc files on the import of source modules",
    },
    {
      name: "--check-hash-based-pycs",
      description:
        "Control the validation behavior of hash-based .pyc files. See Cached bytecode invalidation",
      args: {
        suggestions: [
          { name: "default" },
          { name: "always" },
          { name: "never" },
        ],
      },
    },
    {
      name: "-d",
      description:
        "Turn on parser debugging output (for experts only, only works on debug builds)",
    },
    {
      name: "-E",
      description:
        "Ignore all PYTHON* environment variables, e.g. PYTHONPATH and PYTHONHOME, that might be set",
    },
    {
      name: "-i",
      description:
        "When a script is passed as first argument or the -c option is used, enter interactive mode after executing the script or the command, even when sys.stdin does not appear to be a terminal",
    },
    {
      name: "-I",
      description:
        "Run Python in isolated mode. This also implies -E, -P and -s. In isolated mode sys.path contains neither the script’s directory nor the user’s site-packages directory",
    },
    {
      name: "-O",
      description:
        "Remove assert statements and any code conditional on the value of __debug__",
    },
    {
      name: "-OO",
      description: "Do -O and also discard docstrings",
    },
    {
      name: "-P",
      description:
        "Don’t prepend a potentially unsafe path to sys.path (also PYTHONSAFEPATH)",
    },
    {
      name: "-q",
      description:
        "Don’t display the copyright and version messages even in interactive mode",
    },
    {
      name: "-R",
      description:
        "Turn on hash randomization. This option only has an effect if the PYTHONHASHSEED environment variable is set to anything other than random, since hash randomization is enabled by default",
    },
    {
      name: "-s",
      description: "Don’t add the user site-packages directory to sys.path",
    },
    {
      name: "-S",
      description:
        "Disable the import of the module site and the site-dependent manipulations of sys.path that it entails",
    },
    {
      name: "-u",
      description:
        "Force the stdout and stderr streams to be unbuffered. This option has no effect on the stdin stream",
    },
    {
      name: "-v",
      description:
        "Print a message each time a module is initialized, showing the place (filename or built-in module) from which it is loaded. Repeat to increase verbosity",
      isRepeatable: true,
    },
    {
      name: "-W",
      description:
        "Warning control; arg is action:message:category:module:lineno",
      isRepeatable: true,
      args: {
        name: "arg",
        suggestions: [
          "default",
          "error",
          "always",
          "all",
          "module",
          "once",
          "ignore",
        ],
      },
    },
    {
      name: "-x",
      description:
        "Skip the first line of the source, allowing use of non-Unix forms of #!cmd. This is intended for a DOS specific hack only",
    },
    {
      name: "-X",
      description: "Set implementation-specific option",
      isRepeatable: true,
      args: {
        name: "opt",
        suggestions: xOptions.map(([name, description]) => ({
          name,
          description,
        })),
      },
    },
  ],
};

export default completionSpec;
