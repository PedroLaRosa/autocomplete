// Tailwind CSS CLI v4.3.5 (npm @tailwindcss/cli latest, tag v4.3.5 of tailwindlabs/tailwindcss, 2026-11-19).
// Source: packages/@tailwindcss-cli/src/{index.ts,commands/build,commands/canonicalize,commands/help} read statically; the CLI was not executed.
// Since v4 the `tailwindcss` binary ships in @tailwindcss/cli; the v3 commands/flags (init, --config, --postcss, --purge, --content, --no-autoprefixer) no longer exist.

const commonOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Display usage information",
  },
];

const buildOptions: Fig.Option[] = [
  {
    name: ["-i", "--input"],
    description: "Input file",
    args: { name: "input file", template: "filepaths" },
  },
  {
    name: ["-o", "--output"],
    description: "Output file (default: stdout)",
    args: { name: "output file", template: "filepaths" },
  },
  {
    name: ["-w", "--watch"],
    description:
      "Watch for changes and rebuild as needed, and use `always` to keep watching when stdin is closed",
    requiresSeparator: true,
    args: {
      name: "mode",
      isOptional: true,
      suggestions: ["always"],
    },
  },
  {
    name: "--poll",
    description: "Use polling instead of filesystem events when watching",
    requiresSeparator: true,
    args: {
      name: "ms",
      isOptional: true,
    },
  },
  {
    name: ["-m", "--minify"],
    description: "Optimize and minify the output",
  },
  {
    name: "--optimize",
    description: "Optimize the output without minifying",
  },
  {
    name: "--cwd",
    description: "The current working directory (default: .)",
    args: { name: "directory", template: "folders" },
  },
  {
    name: "--map",
    description: "Generate a source map",
    requiresSeparator: true,
    args: {
      name: "file",
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "--silent",
    description: "Suppress non-error output",
  },
  ...commonOptions,
];

const completionSpec: Fig.Spec = {
  name: "tailwindcss",
  description: "Tailwindcss CLI tools",
  icon: "https://tailwindcss.com/favicons/favicon-32x32.png",
  options: buildOptions,
  subcommands: [
    {
      name: "build",
      description: "Build your CSS",
      options: buildOptions,
    },
    {
      name: "canonicalize",
      description: "Canonicalize candidate lists",
      args: {
        name: "classes",
        description: "Candidate groups to canonicalize",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: "--css",
          description:
            'CSS entry file used to load the Tailwind design system (defaults to `@import "tailwindcss";`)',
          args: { name: "input file", template: "filepaths" },
        },
        {
          name: "--format",
          description: "Output format (default: text)",
          args: {
            name: "format",
            suggestions: ["text", "json", "jsonl"],
          },
        },
        {
          name: "--stream",
          description:
            "Read candidate groups from stdin line by line and write results to stdout",
        },
        ...commonOptions,
      ],
    },
  ],
};

export default completionSpec;
