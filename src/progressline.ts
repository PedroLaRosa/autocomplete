// ProgressLine v0.2.4 (GitHub tag kattouf/ProgressLine 0.2.4, Homebrew formula progressline, 2026-11-19). Source: Sources/ProgressLine.swift (Swift ArgumentParser definition) and README.md at tag 0.2.4, read statically (binary not run)
const completionSpec: Fig.Spec = {
  name: "progressline",
  description: "⏳Track commands progress in a compact one-line format",

  options: [
    {
      name: ["--help", "-h"],
      description: "Show help information",
    },
    {
      name: "--version",
      description: "Show the version",
    },
    {
      name: ["--log-all", "-a"],
      description: "Log all lines above the progress line",
      exclusiveOn: ["--log-matches", "-m"],
    },
    {
      name: ["--static-text", "-t"],
      description:
        "The static text to display instead of the latest stdin data",
      args: {
        name: "text",
      },
    },
    {
      name: ["--activity-style", "-s"],
      args: {
        name: "style",
        default: "dots",
        suggestions: ["dots", "kitt", "snake", "spinner"],
      },
      description: "The style of the activity indicator",
    },
    {
      name: ["--original-log-path", "-l"],
      description: "Save the original log to a file",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: ["--log-matches", "-m"],
      description:
        "Log above progress line lines matching the given regular expressions",
      isRepeatable: true,
      exclusiveOn: ["--log-all", "-a"],
      args: {
        name: "regex",
      },
    },
  ],
};
export default completionSpec;
