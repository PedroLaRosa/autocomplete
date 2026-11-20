// Rake v13.4.2 (RubyGems latest, released 2026-04-16; spec checked 2026-11-19). Source: lib/rake/application.rb
// (standard_rake_options / handle_options / display_tasks_and_comments) of the rake-13.4.2 gem, read not executed.
const traceOutputArg: Fig.Arg = {
  name: "OUT",
  description: "Output stream (stderr by default)",
  isOptional: true,
  suggestions: ["stderr", "stdout"],
};

const completionSpec: Fig.Spec = {
  name: "rake",
  description: "A ruby build program with capabilities similar to make",
  icon: "https://avatars.githubusercontent.com/u/210414?s=48&v=4",
  args: {
    name: "targets",
    isVariadic: true,
    isOptional: true,
    generators: {
      script: ["rake", "--tasks", "--silent"],
      cache: {
        strategy: "stale-while-revalidate",
        cacheByDirectory: true,
      },
      postProcess: function (out) {
        // Lines look like: `rake <name>[args]  # <comment>`
        return out.split("\n").flatMap((line) => {
          const match = line.match(/^rake\s+(\S+)\s+#\s?(.*)$/);
          return match
            ? [{ name: match[1], description: match[2].trim() }]
            : [];
        });
      },
    },
  },
  options: [
    {
      name: ["-A", "--all"],
      description:
        "Show all tasks, even uncommented ones (in combination with -T or -D)",
    },
    {
      name: "--backtrace",
      description: "Enable full backtrace",
      requiresSeparator: true,
      args: traceOutputArg,
    },
    {
      name: ["-B", "--build-all"],
      description:
        "Build all prerequisites, including those which are up-to-date",
    },
    {
      name: "--comments",
      description: "Show commented tasks only",
    },
    {
      name: ["-D", "--describe"],
      description: "Describe the tasks (matching optional PATTERN), then exit",
      args: {
        name: "PATTERN",
        isOptional: true,
      },
    },
    {
      name: ["-C", "--directory"],
      description: "Change to DIRECTORY before doing anything",
      args: {
        name: "DIRECTORY",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: ["-n", "--dry-run"],
      description: "Do a dry run without executing actions",
    },
    {
      name: ["-e", "--execute"],
      description: "Execute some Ruby code and exit",
      args: {
        name: "CODE",
      },
    },
    {
      name: ["-p", "--execute-print"],
      description: "Execute some Ruby code, print the result, then exit",
      args: {
        name: "CODE",
      },
    },
    {
      name: ["-E", "--execute-continue"],
      description:
        "Execute some Ruby code, then continue with normal task processing",
      isRepeatable: true,
      args: {
        name: "CODE",
      },
    },
    {
      name: ["-h", "-H", "--help"],
      description: "Display this help message",
    },
    {
      name: ["-j", "--jobs"],
      description:
        "Specifies the maximum number of tasks to execute in parallel (default is number of CPU cores + 4)",
      args: {
        name: "NUMBER",
        isOptional: true,
      },
    },
    {
      name: "--job-stats",
      description:
        "Display job statistics. LEVEL=history displays a complete job list",
      args: {
        name: "LEVEL",
        isOptional: true,
        suggestions: ["history"],
      },
    },
    {
      name: ["-I", "--libdir"],
      description: "Include LIBDIR in the search path for required modules",
      isRepeatable: true,
      args: {
        name: "LIBDIR",
        template: "folders",
      },
    },
    {
      name: ["-m", "--multitask"],
      description: "Treat all tasks as multitasks",
    },
    {
      name: ["-N", "--no-search", "--nosearch"],
      description: "Do not search parent directories for the Rakefile",
    },
    {
      name: ["-P", "--prereqs"],
      description: "Display the tasks and dependencies, then exit",
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not log messages to standard output",
    },
    {
      name: ["-f", "--rakefile"],
      description: "Use FILENAME as the rakefile to search for",
      args: {
        name: "FILENAME",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: ["-R", "--rakelibdir", "--rakelib"],
      description:
        "Auto-import any .rake files in RAKELIBDIR (default is 'rakelib')",
      args: {
        name: "RAKELIBDIR",
        template: "folders",
      },
    },
    {
      name: ["-r", "--require"],
      description: "Require MODULE before executing rakefile",
      isRepeatable: true,
      args: {
        name: "MODULE",
      },
    },
    {
      name: "--rules",
      description: "Trace the rules resolution",
    },
    {
      name: ["-s", "--silent"],
      description:
        "Like --quiet, but also suppresses the 'in directory' announcement",
    },
    {
      name: "--suppress-backtrace",
      description:
        "Suppress backtrace lines matching regexp PATTERN (ignored if --trace is on)",
      args: {
        name: "PATTERN",
      },
    },
    {
      name: ["-g", "--system"],
      description:
        "Use system wide (global) rakefiles (usually ~/.rake/*.rake)",
    },
    {
      name: ["-G", "--no-system", "--nosystem"],
      description:
        "Use standard project Rakefile search paths, ignore system wide rakefiles",
    },
    {
      name: ["-T", "--tasks"],
      description:
        "Display the tasks (matching optional PATTERN) with descriptions, then exit (-AT displays all tasks, including those without descriptions)",
      args: {
        name: "PATTERN",
        isOptional: true,
      },
    },
    {
      name: ["-t", "--trace"],
      description: "Turn on invoke/execute tracing, enable full backtrace",
      requiresSeparator: true,
      args: traceOutputArg,
    },
    {
      name: ["-v", "--verbose"],
      description: "Log message to standard output",
    },
    {
      name: ["-V", "--version"],
      description: "Display the program version",
    },
    {
      name: ["-W", "--where"],
      description:
        "Print the source locations of the tasks (matching optional PATTERN), then exit",
      args: {
        name: "PATTERN",
        isOptional: true,
      },
    },
    {
      name: ["-X", "--no-deprecation-warnings"],
      description: "Disable the deprecation warnings",
    },
  ],
};

export default completionSpec;
