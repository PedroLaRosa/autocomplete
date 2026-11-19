// hyperfine v2.0.0 (GitHub release, 2026-10-07). Source: src/cli.rs at tag v2.0.0
const exportOption = (format: string, description: string): Fig.Option => ({
  name: `--export-${format}`,
  description,
  args: { name: "FILE", template: "filepaths" },
});

const completionSpec: Fig.Spec = {
  name: "hyperfine",
  description: "A command-line benchmarking tool",

  options: [
    {
      name: "--metrics",
      description:
        "Performance metrics to measure, in order: a preset, or a comma-separated list of METRIC[:UNIT]",
      args: {
        name: "PRESET|METRIC[:UNIT],…",
        default: "default",
        suggestions: [
          { name: "default", description: "Wall-clock time and peak RSS" },
          {
            name: "time",
            description: "Wall-clock, CPU, user, and system time",
          },
          { name: "all", description: "All available metrics" },
          "time_wall_clock",
          "time_cpu",
          "time_user",
          "time_system",
          "memory_peak_resident",
          "cpu_cycles",
          "instructions",
          "cache_references",
          "cache_misses",
          "branch_misses",
        ],
      },
    },
    {
      name: ["--warmup", "-w"],
      description: "Perform NUM warmup runs before the actual benchmark",
      args: {
        name: "NUM",
      },
    },
    {
      name: ["--min-runs", "-m"],
      description: "Perform at least NUM runs for each command",
      args: {
        name: "NUM",
        default: "10",
      },
    },
    {
      name: ["--max-runs", "-M"],
      description:
        "Perform at most NUM runs for each command. Default: no limit",
      args: {
        name: "NUM",
      },
    },
    {
      name: ["--runs", "-r"],
      description: "Perform exactly NUM runs for each command",
      args: {
        name: "NUM",
      },
      exclusiveOn: ["--min-runs", "-m", "--max-runs", "-M"],
    },
    {
      name: "--env",
      description:
        "Set space-separated environment variable assignments for benchmark commands, once for all or once per command",
      isRepeatable: true,
      args: {
        name: "ASSIGNMENTS",
      },
    },
    {
      name: ["--setup", "-s"],
      description: "Execute CMD once before each set of benchmark runs",
      args: {
        name: "CMD",
        isCommand: true,
      },
    },
    {
      name: ["--prepare", "-p"],
      description:
        "Execute CMD before each benchmark run, once for all or once per command",
      isRepeatable: true,
      args: {
        name: "CMD",
        isCommand: true,
      },
    },
    {
      name: ["--conclude", "-C"],
      description:
        "Execute CMD after each benchmark run, once for all or once per command",
      isRepeatable: true,
      args: {
        name: "CMD",
        isCommand: true,
      },
    },
    {
      name: ["--cleanup", "-c"],
      description:
        "Execute CMD after the completion of all benchmarking runs for each individual command to be benchmarked",
      args: {
        name: "CMD",
        isCommand: true,
      },
    },
    {
      name: ["--parameter-scan", "-P"],
      description:
        "Perform benchmark runs for each value in the range MIN..MAX, replacing '{VAR}' in each command",
      args: [
        {
          name: "VAR",
        },
        {
          name: "MIN",
        },
        {
          name: "MAX",
        },
      ],
    },
    {
      name: ["--parameter-step-size", "-D"],
      description:
        "This argument requires --parameter-scan to be specified as well. Traverse the range MIN..MAX in steps of DELTA",
      args: {
        name: "DELTA",
      },
      dependsOn: ["--parameter-scan", "-P"],
    },
    {
      name: ["--parameter-list", "-L"],
      description:
        "Perform benchmark runs for each value in the comma-separated list VALUES, replacing '{VAR}' in each command",
      isRepeatable: true,
      args: [
        {
          name: "VAR",
        },
        {
          name: "VALUES",
        },
      ],
      exclusiveOn: ["--parameter-scan", "-P", "--parameter-step-size", "-D"],
    },
    {
      name: "--shell",
      description:
        "Set the shell to use for executing benchmarked commands (default: none)",
      args: {
        name: "SHELL",
        suggestions: [
          {
            name: "default",
            description:
              "Use the platform shell (sh on Unix, cmd.exe on Windows)",
          },
          {
            name: "none",
            description:
              "Execute benchmarked commands directly, without a shell",
          },
          "bash",
          "zsh",
          "sh",
          "fish",
          "pwsh",
          "powershell",
        ],
      },
    },
    {
      name: "-S",
      description:
        "An alias for '--shell=default' (sh on Unix, cmd.exe on Windows)",
      exclusiveOn: ["--shell", "-N"],
    },
    {
      name: "-N",
      description: "An alias for '--shell=none'",
      exclusiveOn: ["--shell", "-S"],
    },
    {
      name: ["--ignore-failure", "-i"],
      description:
        "Ignore failures of the benchmarked programs: all non-zero exit codes, or a comma-separated list of exit codes",
      requiresSeparator: true,
      args: {
        name: "MODE",
        isOptional: true,
        suggestions: ["all-non-zero"],
      },
    },
    {
      name: "--style",
      description: "Set output style type",
      args: {
        name: "TYPE",
        default: "auto",
        suggestions: [
          {
            name: "auto",
            description: "Pick the style based on the terminal",
          },
          {
            name: "basic",
            description: "Disable output coloring and interactive elements",
          },
          {
            name: "full",
            description:
              "Enable all effects even if no interactive terminal was detected",
          },
          {
            name: "nocolor",
            description: "Keep the interactive output without any colors",
          },
          {
            name: "color",
            description: "Keep the colors without any interactive output",
          },
          {
            name: "none",
            description: "Disable all the output of the tool",
          },
        ],
      },
    },
    exportOption(
      "asciidoc",
      "Export the primary metric summary statistics as an AsciiDoc table to the given FILE"
    ),
    exportOption(
      "csv",
      "Export summary statistics for all selected metrics as CSV to the given FILE"
    ),
    exportOption(
      "json",
      "Export all collected metrics and individual runs as JSON to the given FILE"
    ),
    exportOption(
      "markdown",
      "Export the primary metric summary statistics as a Markdown table to the given FILE"
    ),
    exportOption(
      "orgmode",
      "Export the primary metric summary statistics as an Emacs org-mode table to the given FILE"
    ),
    {
      name: "--show-output",
      description:
        "Print the stdout and stderr of the benchmark instead of suppressing it",
      exclusiveOn: ["--style", "--output"],
    },
    {
      name: "--output",
      description:
        "Control where the output of the benchmark is redirected, once for all or once per command",
      isRepeatable: true,
      args: {
        name: "WHERE",
        template: "filepaths",
        suggestions: [
          {
            name: "null",
            description: "Redirect output to /dev/null (the default)",
          },
          {
            name: "pipe",
            description: "Feed the output through a pipe before discarding it",
          },
          {
            name: "inherit",
            description: "Don't redirect the output at all",
          },
        ],
      },
    },
    {
      name: "--input",
      description: "Control where the input of the benchmark comes from",
      args: {
        name: "WHERE",
        template: "filepaths",
        suggestions: [
          { name: "null", description: "Read from /dev/null (the default)" },
        ],
      },
    },
    {
      name: ["--command-name", "-n"],
      description:
        "Give a meaningful name to a command, once per benchmarked command",
      isRepeatable: true,
      args: {
        name: "NAME",
      },
    },
    {
      name: "--min-benchmarking-time",
      description: "Set the minimum time (in seconds) to run benchmarks",
      hidden: true,
      args: {
        name: "SECONDS",
      },
    },
    {
      name: "--debug-mode",
      description:
        "Don't run commands; return fake times for 'sleep <time>' commands",
      hidden: true,
    },
    {
      name: ["--help", "-h"],
      description: "Print help",
    },
    {
      name: ["--version", "-V"],
      description: "Print version",
    },
  ],
  args: {
    name: "command",
    description: "Command to benchmark; the first one is the reference",
    isCommand: true,
  },
};
export default completionSpec;
