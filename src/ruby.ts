// Ruby v4.0.10 (latest stable 4.0.x per Homebrew core formula and ruby/ruby tags, 2026-11-19). Source: read statically from the v4.0.10 tag (ruby.c usage text and option parser, man/ruby.1, NEWS.md, yjit/src/options.rs, zjit/src/options.rs); not run. -T removed (dropped in Ruby 3.0). JIT options only exist in builds with YJIT/ZJIT. --rjit removed in 4.0.
import { filepaths } from "@tabsmith/autocomplete-generators";

const features = [
  {
    name: "gems",
    description: "RubyGems (only for debugging, default: enabled)",
  },
  {
    name: "error_highlight",
    description: "Error highlighting (default: enabled)",
  },
  {
    name: "did_you_mean",
    description: "Did-you-mean suggestions (default: enabled)",
  },
  {
    name: "syntax_suggest",
    description: "Syntax suggestions (default: enabled)",
  },
  {
    name: "rubyopt",
    description: "RUBYOPT environment variable (default: enabled)",
  },
  {
    name: "frozen-string-literal",
    description: "Freeze all string literals (default: disabled)",
  },
  {
    name: "yjit",
    description: "In-process JIT compiler (default: disabled)",
  },
  {
    name: "zjit",
    description: "Method-based JIT compiler (default: disabled)",
  },
  { name: "all", description: "All features" },
];

const warningCategories = [
  { name: "deprecated", label: "deprecated features" },
  { name: "experimental", label: "experimental features" },
  { name: "performance", label: "performance issues" },
  { name: "strict_unused_block", label: "unused blocks (strict)" },
];

const featureOptions: Fig.Option[] = features.flatMap(({ name }) => [
  {
    name: `--enable-${name}`,
    description: `Enable the ${name} feature`,
  },
  {
    name: `--disable-${name}`,
    description: `Disable the ${name} feature`,
  },
]);

const warningCategoryOptions: Fig.Option[] = warningCategories.flatMap(
  ({ name, label }) => [
    {
      name: `-W:${name}`,
      description: `Enable warnings for ${label}`,
    },
    {
      name: `-W:no-${name}`,
      description: `Disable warnings for ${label}`,
    },
  ]
);

const valueOption = (
  name: string,
  description: string,
  argName: string,
  isOptional = false
): Fig.Option => ({
  name,
  description,
  requiresSeparator: true,
  args: isOptional ? { name: argName, isOptional: true } : { name: argName },
});

const yjitOptions: Fig.Option[] = [
  {
    name: "--yjit",
    description: "Enable in-process JIT compiler",
  },
  valueOption(
    "--yjit-mem-size",
    "Soft limit on YJIT memory usage in MiB (default: 128)",
    "num"
  ),
  valueOption(
    "--yjit-exec-mem-size",
    "Hard limit on executable memory block in MiB",
    "num"
  ),
  valueOption("--yjit-call-threshold", "Number of calls to trigger JIT", "num"),
  valueOption(
    "--yjit-cold-threshold",
    "Global calls after which ISEQs not compiled (default: 200K)",
    "num"
  ),
  {
    name: "--yjit-stats",
    description: "Enable collecting YJIT statistics",
  },
  valueOption(
    "--yjit-log",
    "Enable logging of YJIT's compilation activity",
    "file or dir",
    true
  ),
  {
    name: "--yjit-disable",
    description: "Disable YJIT for lazily enabling it with RubyVM::YJIT.enable",
  },
  {
    name: "--yjit-code-gc",
    description: "Run code GC when the code size reaches the limit",
  },
  {
    name: "--yjit-perf",
    description: "Enable frame pointers and perf profiling",
  },
  {
    name: "--yjit-trace-exits",
    description: "Record Ruby source location when exiting from generated code",
  },
  valueOption(
    "--yjit-trace-exits-sample-rate",
    "Trace exit locations only every Nth occurrence",
    "num"
  ),
];

const zjitOptions: Fig.Option[] = [
  {
    name: "--zjit",
    description: "Enable method-based JIT compiler",
  },
  valueOption(
    "--zjit-mem-size",
    "Max amount of memory that ZJIT can use in MiB (default: 128)",
    "num"
  ),
  valueOption(
    "--zjit-call-threshold",
    "Number of calls to trigger JIT (default: 30)",
    "num"
  ),
  valueOption(
    "--zjit-num-profiles",
    "Number of profiled calls before JIT (default: 5)",
    "num"
  ),
  {
    name: "--zjit-stats-quiet",
    description: "Collect ZJIT stats and suppress output",
  },
  valueOption(
    "--zjit-stats",
    "Collect ZJIT stats (=file to write to a file)",
    "file",
    true
  ),
  {
    name: "--zjit-disable",
    description: "Disable ZJIT for lazily enabling it with RubyVM::ZJIT.enable",
  },
  {
    name: "--zjit-perf",
    description: "Dump ISEQ symbols into /tmp/perf-{}.map for Linux perf",
  },
  valueOption(
    "--zjit-log-compiled-iseqs",
    "Log compiled ISEQs to the file (the file will be truncated)",
    "path"
  ),
  valueOption(
    "--zjit-trace-exits",
    "Record source on side-exit (optionally for a specific counter)",
    "counter",
    true
  ),
  valueOption(
    "--zjit-trace-exits-sample-rate",
    "Frequency at which to record side exits",
    "num"
  ),
];

const completionSpec: Fig.Spec = {
  name: "ruby",
  description: "Interpreted object-oriented scripting language",
  options: [
    {
      name: "--copyright",
      description: "Print Ruby copyright",
    },
    {
      name: "--version",
      description: "Print Ruby version",
    },
    {
      name: "-0",
      description:
        "Set input record separator ($/); -00 for paragraph mode, -0777 for slurp mode",
      args: { name: "octal", isOptional: true },
    },
    {
      name: "-a",
      description: "Split each input line ($_) into fields ($F)",
    },
    {
      name: "-c",
      description: "Check syntax (no execution)",
    },
    {
      name: ["-C", "-X"],
      description: "Execute program in specified directory",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "-d",
      description: "Set debugging flag ($DEBUG) and $VERBOSE to true",
    },
    {
      name: "--debug",
      description: "Set debugging flag ($DEBUG) and $VERBOSE to true",
      requiresSeparator: true,
      args: {
        name: "feature",
        description: "Debugging feature to enable",
        isOptional: true,
        suggestions: ["frozen-string-literal"],
      },
    },
    {
      name: "-e",
      description: "Execute given Ruby code; multiple -e allowed",
      isRepeatable: true,
      args: { name: "code" },
    },
    {
      name: ["-E", "--encoding"],
      description: "Set default external and internal encodings",
      args: {
        name: "encoding",
        description: "External[:internal] encoding",
      },
    },
    {
      name: "--external-encoding",
      description: "Set default external encoding",
      args: { name: "encoding" },
    },
    {
      name: "--internal-encoding",
      description: "Set default internal encoding",
      args: { name: "encoding" },
    },
    {
      name: "-F",
      description: "Set input field separator ($;); used with -a",
      args: { name: "pattern" },
    },
    {
      name: "-i",
      description:
        "Set ARGF in-place mode; create backup files with given extension",
      args: { name: "extension", isOptional: true },
    },
    {
      name: "-I",
      description:
        "Prepend specified directory to load paths ($LOAD_PATH); multiple -I are allowed",
      isRepeatable: true,
      args: { name: "directory", template: "folders" },
    },
    {
      name: "-K",
      description: "Specify KANJI (Japanese) encoding",
      args: {
        name: "kcode",
        isOptional: true,
        suggestions: [
          { name: "e", description: "EUC-JP" },
          { name: "s", description: "Windows-31J (CP932)" },
          { name: "u", description: "UTF-8" },
          { name: "n", description: "ASCII-8BIT (BINARY)" },
        ],
      },
    },
    {
      name: "-l",
      description:
        "Set output record separator ($\\) to $/ and chomp each line read",
    },
    {
      name: "-n",
      description: "Run program in gets loop",
    },
    {
      name: "-p",
      description: "Like -n, with printing added",
    },
    {
      name: "-r",
      description: "Require the given library",
      isRepeatable: true,
      args: { name: "library" },
    },
    {
      name: "-s",
      description:
        "Define global variables using switches following program path",
    },
    {
      name: "-S",
      description:
        "Search the script in directories found in the PATH environment variable",
    },
    {
      name: "-U",
      description: "Set default internal encoding to UTF-8",
    },
    {
      name: "-v",
      description: "Print version; set $VERBOSE to true",
    },
    {
      name: "--verbose",
      description: "Set $VERBOSE to true; ignore input from $stdin",
    },
    {
      name: "-w",
      description: "Enable verbose mode without printing the version",
    },
    {
      name: "-W",
      description: "Set warning flag ($-W)",
      args: {
        name: "level",
        isOptional: true,
        suggestions: [
          { name: "0", description: "Silent ($VERBOSE = nil)" },
          { name: "1", description: "Moderate ($VERBOSE = false)" },
          { name: "2", description: "Verbose ($VERBOSE = true, default)" },
        ],
      },
    },
    ...warningCategoryOptions,
    {
      name: "-x",
      description: "Execute Ruby code starting from a #!ruby line",
      args: { name: "directory", isOptional: true, template: "folders" },
    },
    {
      name: ["-y", "--yydebug"],
      description: "Print parser log; backward compatibility not guaranteed",
    },
    {
      name: "--jit",
      description:
        "Enable the default JIT for the build (same as --yjit or --zjit)",
    },
    ...yjitOptions,
    ...zjitOptions,
    {
      name: "-h",
      description: "Print short help message; use --help for longer message",
    },
    {
      name: "--help",
      description: "Print long help message; use -h for short message",
    },
    {
      name: "--backtrace-limit",
      description: "Set backtrace limit",
      args: { name: "num" },
    },
    {
      name: "--crash-report",
      description: "Set template for crash report file",
      args: { name: "template" },
    },
    {
      name: "--disable",
      description: "Disable features (comma-separated)",
      args: { name: "features", suggestions: features },
    },
    {
      name: "--enable",
      description: "Enable features (comma-separated)",
      args: { name: "features", suggestions: features },
    },
    ...featureOptions,
    {
      name: "--dump",
      description: "Dump items (comma-separated)",
      args: {
        name: "items",
        suggestions: [
          { name: "insns", description: "Instruction sequences" },
          {
            name: "yydebug",
            description: "Debug output of the yacc parser generator",
          },
          { name: "parsetree", description: "Abstract syntax tree (AST)" },
          {
            name: "syntax",
            description: "Check syntax (same as -c --yydebug)",
          },
          { name: "version", description: "Print Ruby version" },
          { name: "usage", description: "Print short help message" },
          { name: "help", description: "Print long help message" },
          {
            name: "-optimize",
            description: "Disable optimization (affects insns)",
          },
          {
            name: "+error-tolerant",
            description: "Error-tolerant parsing (affects yydebug, parsetree)",
          },
          {
            name: "+comment",
            description:
              "Add comments to AST (affects parsetree with --parser=parse.y)",
          },
        ],
      },
    },
    {
      name: "--parser",
      description: "Set Ruby parser",
      args: {
        name: "parser",
        suggestions: ["parse.y", "prism"],
      },
    },
  ],
  args: [
    {
      name: "programfile",
      description: "Ruby script to run",
      isOptional: true,
      isScript: true,
      generators: filepaths({
        extensions: ["rb"],
        editFileSuggestions: { priority: 76 },
      }),
    },
    {
      name: "arguments",
      description: "Arguments to pass to the script",
      isOptional: true,
      isVariadic: true,
    },
  ],
};

export default completionSpec;
