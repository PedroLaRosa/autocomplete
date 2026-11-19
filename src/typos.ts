// Typos v1.52.2 (crates.io typos-cli / GitHub tag v1.52.2, 2026-11-19). Source: static read of the
// clap definitions in crates/typos-cli/src/bin/typos-cli/args.rs (shallow clone at the v1.52.2 tag), the
// clap-verbosity-flag 3.0.4 and colorchoice-clap 1.0.8 crates for -v/-q/--color, and Locale::variants()
// in config.rs. The binary was not run.
const completionSpec: Fig.Spec = {
  name: "typos",
  description: "Source code spelling correction",
  args: {
    name: "path",
    template: ["filepaths", "folders"],
    isVariadic: true,
    isOptional: true,
    suggestions: [{ name: "-", hidden: true, description: "Read from stdin" }],
  },
  options: [
    {
      name: "--file-list",
      args: {
        name: "path",
        template: "filepaths",
        suggestions: [
          { name: "-", hidden: true, description: "Read from stdin" },
        ],
      },
      description:
        "Read the list of newline separated paths from file or stdin (if `-`)",
    },
    {
      name: ["-j", "--threads"],
      args: { name: "number" },
      description: "The approximate number of threads to use",
    },
    { name: "--sort", description: "Sort results" },
    {
      name: "--force-exclude",
      description: "Respect excluded files even for paths passed explicitly",
    },
    {
      name: ["-c", "--config"],
      args: { name: "path", template: "filepaths" },
      description: "Custom config file",
    },
    { name: "--isolated", description: "Ignore implicit configuration files" },
    {
      name: "--exclude",
      args: { name: "glob" },
      description: "Ignore files & directories matching the glob",
      isRepeatable: true,
    },
    { name: "--hidden", description: "Search hidden files and directories" },
    {
      name: "--no-hidden",
      description: "Don't search hidden files and directories",
      hidden: true,
    },
    { name: "--no-ignore", description: "Don't respect ignore files" },
    {
      name: "--ignore",
      description: "Respect ignore files",
      hidden: true,
    },
    { name: "--no-ignore-dot", description: "Don't respect .ignore files" },
    {
      name: "--ignore-dot",
      description: "Respect .ignore files",
      hidden: true,
    },
    {
      name: "--no-ignore-global",
      description: "Don't respect global ignore files",
    },
    {
      name: "--ignore-global",
      description: "Respect global ignore files",
      hidden: true,
    },
    {
      name: "--no-ignore-parent",
      description: "Don't respect ignore files in parent directories",
    },
    {
      name: "--ignore-parent",
      description: "Respect ignore files in parent directories",
      hidden: true,
    },
    {
      name: "--no-ignore-vcs",
      description: "Don't respect ignore files in vcs directories",
    },
    {
      name: "--ignore-vcs",
      description: "Respect ignore files in vcs directories",
      hidden: true,
    },
    { name: "--binary", description: "Search binary files" },
    {
      name: "--no-binary",
      description: "Don't search binary files",
      hidden: true,
    },
    {
      name: "--no-check-filenames",
      description: "Skip verifying spelling in file names",
    },
    {
      name: "--check-filenames",
      description: "Verify spelling in file names",
      hidden: true,
    },
    {
      name: "--no-check-files",
      description: "Skip verifying spelling in files",
    },
    {
      name: "--check-files",
      description: "Verify spelling in files",
      hidden: true,
    },
    {
      name: "--no-unicode",
      description: "Only allow ASCII characters in identifiers",
    },
    {
      name: "--unicode",
      description: "Allow Unicode characters in identifiers",
      hidden: true,
    },
    {
      name: "--locale",
      args: {
        name: "locale",
        suggestions: ["en", "en-us", "en-gb", "en-ca", "en-au"],
      },
      description: "Language locale to suggest corrections for",
    },
    { name: "--diff", description: "Print a diff of what would change" },
    { name: ["-w", "--write-changes"], description: "Write fixes out" },
    {
      name: "--files",
      description: "Debug: Print each file that would be spellchecked",
    },
    {
      name: "--file-types",
      description: "Debug: Print each file's type",
    },
    {
      name: "--highlight-identifiers",
      description:
        "Debug: Print back out files, stylizing identifiers that would be spellchecked",
    },
    {
      name: "--identifiers",
      description: "Debug: Print each identifier that would be spellchecked",
    },
    {
      name: "--highlight-words",
      description:
        "Debug: Print back out files, stylizing words that would be spellchecked",
    },
    {
      name: "--words",
      description: "Debug: Print each word that would be spellchecked",
    },
    {
      name: "--dump-config",
      args: {
        name: "path",
        template: "filepaths",
        suggestions: [
          { name: "-", hidden: true, description: "Print to stdout" },
        ],
      },
      description:
        "Write the current configuration to file with `-` for stdout",
    },
    { name: "--type-list", description: "Show all supported file types" },
    {
      name: "--format",
      args: {
        name: "format",
        suggestions: ["silent", "brief", "long", "json", "sarif"],
      },
      description: "Render style for messages",
    },
    {
      name: "--color",
      args: { name: "when", suggestions: ["auto", "always", "never"] },
      description: "Controls when to use color",
      isPersistent: true,
    },
    {
      name: ["-v", "--verbose"],
      description: "Increase logging verbosity",
      isRepeatable: true,
      exclusiveOn: ["-q", "--quiet"],
    },
    {
      name: ["-q", "--quiet"],
      description: "Decrease logging verbosity",
      isRepeatable: true,
      exclusiveOn: ["-v", "--verbose"],
    },
    { name: ["-h", "--help"], description: "Print help" },
    { name: ["-V", "--version"], description: "Print version" },
  ],
};

export default completionSpec;
