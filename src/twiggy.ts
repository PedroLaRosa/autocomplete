// Twiggy v0.8.0 (crates.io latest twiggy 0.8.0, 2026-11-19). Source: built twiggy 0.8.0 from the crates.io
// release with `cargo install` and walked `--help` of every subcommand; checked twiggy-opt definitions.rs
// and twiggy-traits (--mode and --format values) from the same release.
// Note: the upstream git repository (rustwasm/twiggy) only tags up to 0.6.0, the later releases are crates.io only.

const outputOptions: Fig.Option[] = [
  {
    name: "--mode",
    description: "The parse mode for the input binary data (default: auto)",
    args: {
      name: "parse mode",
      suggestions: [
        {
          name: "auto",
          description: "Determine the parse mode automatically",
        },
        { name: "wasm", description: "WebAssembly file parse mode" },
        { name: "dwarf", description: "DWARF sections parse mode" },
      ],
    },
  },
  {
    name: "-o",
    description:
      "The destination to write the output to (default: `-` for stdout)",
    args: {
      name: "output destination",
      template: "filepaths",
    },
  },
  {
    name: ["-f", "--format"],
    description: "The format the output should be written in (default: text)",
    args: {
      name: "output format",
      suggestions: ["text", "json", "csv"],
    },
  },
];

const regexOption = (what: string): Fig.Option => ({
  name: "--regex",
  description: `Whether or not \`${what}\` should be treated as regular expressions`,
});

const allOption = (description: string): Fig.Option => ({
  name: ["-a", "--all"],
  description,
});

const inputArg: Fig.Arg = {
  name: "input",
  description: "The path to the input binary to size profile",
  template: "filepaths",
};

const completionSpec: Fig.Spec = {
  name: "twiggy",
  description: "A code-size profiler for WebAssembly",
  icon: "🌱",
  subcommands: [
    {
      name: "diff",
      description:
        "Diff the old and new versions of a binary to see what sizes changed",
      options: [
        allOption("Display all items (overrides -n)"),
        regexOption("items"),
        {
          name: "-n",
          description: "The maximum number of items to display (default: 20)",
          args: { name: "max items" },
        },
        ...outputOptions,
      ],
      args: [
        {
          name: "old input",
          description: "The path to the old version of the input binary",
          template: "filepaths",
        },
        {
          name: "new input",
          description: "The path to the new version of the input binary",
          template: "filepaths",
        },
        {
          name: "items",
          description: "The name of the item(s) whose diff should be printed",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "dominators",
      icon: "🌲",
      description:
        "Compute and display the dominator tree for a binary's call graph",
      options: [
        regexOption("items"),
        {
          name: "-d",
          description: "The maximum depth to print the dominators tree",
          args: { name: "max depth" },
        },
        {
          name: "-r",
          description:
            "The maximum number of rows, regardless of depth in the tree, to display",
          args: { name: "max rows" },
        },
        ...outputOptions,
      ],
      args: [
        inputArg,
        {
          name: "items",
          description:
            "The name of the function whose dominator subtree should be printed",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "garbage",
      icon: "🗑️",
      description:
        "Find and display code and data that is not transitively referenced by any exports or public functions",
      options: [
        allOption("Display all items (overrides -n)"),
        {
          name: "--show-data-segments",
          description:
            "Show data segments rather than summarizing them in a single line",
        },
        {
          name: "-n",
          description: "The maximum number of items to display (default: 10)",
          args: { name: "max items" },
        },
        ...outputOptions,
      ],
      args: inputArg,
    },
    {
      name: "help",
      description: "Prints this message or the help of the given subcommand(s)",
      args: {
        name: "subcommand",
        template: "help",
      },
    },
    {
      name: "monos",
      icon: "📈",
      description:
        "List the generic function monomorphizations that are contributing to code bloat",
      options: [
        allOption(
          "List all generics and all of their individual monomorphizations (overrides -m and -n; hides monomorphizations when combined with -g)"
        ),
        {
          name: "--all-generics",
          description: "List all generics (overrides -m)",
        },
        {
          name: "--all-monos",
          description:
            "List all individual monomorphizations for each listed generic function (overrides -n)",
        },
        {
          name: ["-g", "--only-generics"],
          description:
            "Hide individual monomorphizations and only show the generic functions",
        },
        regexOption("functions"),
        {
          name: ["-m", "--max-generics"],
          description: "The maximum number of generics to list (default: 10)",
          args: { name: "max generics" },
        },
        {
          name: ["-n", "--max-monos"],
          description:
            "The maximum number of individual monomorphizations to list for each listed generic function (default: 10)",
          args: { name: "max monos" },
        },
        {
          name: ["-d", "--mode"],
          description:
            "The parse mode for the input binary data (default: auto)",
          args: {
            name: "parse mode",
            suggestions: ["auto", "wasm", "dwarf"],
          },
        },
        ...outputOptions.filter((option) => option.name !== "--mode"),
      ],
      args: [
        inputArg,
        {
          name: "functions",
          description:
            "The names of the generic functions whose monomorphizations should be printed",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "paths",
      icon: "📁",
      description:
        "Find and display the call paths to a function in the given binary's call graph",
      options: [
        {
          name: "--descending",
          description: "Traverse the paths in descending direction",
        },
        regexOption("functions"),
        {
          name: "-d",
          description: "The maximum depth to print the paths (default: 10)",
          args: { name: "max depth" },
        },
        {
          name: "-r",
          description:
            "The maximum number of paths, regardless of depth in the tree, to display (default: 10)",
          args: { name: "max paths" },
        },
        ...outputOptions,
      ],
      args: [
        inputArg,
        {
          name: "functions",
          description: "The functions to find call paths to",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "top",
      icon: "📈",
      description: "List the top code size offenders in a binary",
      options: [
        {
          name: ["-r", "--retaining-paths"],
          description: "Display retaining paths",
        },
        {
          name: "--retained",
          description: "Sort list by retained size, rather than shallow size",
        },
        {
          name: "-n",
          description: "The maximum number of items to display",
          args: { name: "max items" },
        },
        ...outputOptions,
      ],
      args: inputArg,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Prints help information",
    },
    {
      name: ["--version", "-V"],
      description: "Prints version information",
    },
  ],
};

export default completionSpec;
