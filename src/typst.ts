// Typst v0.15.1 (gh release typst/typst 2026-07-17, still the newest stable on crates.io typst-cli and
// Homebrew on 2026-11-20). Source: crates/typst-cli/src/args.rs and compile.rs at v0.15.1, read
// statically (the binary was not run).
import { filepaths } from "@tabsmith/autocomplete-generators";

const typArg: Fig.Arg = {
  name: "input",
  description: "Path to input Typst file. Use `-` to read input from stdin",
  generators: filepaths({ extensions: ["typ"] }),
};

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Print help",
};

const serializationFormat: Fig.Arg = {
  name: "format",
  suggestions: ["json", "yaml"],
  default: "json",
};

const prettyOption: Fig.Option = {
  name: "--pretty",
  description: "Pretty-print the serialized output (JSON only)",
};

const targetOption: Fig.Option = {
  name: "--target",
  description: "The target to compile for",
  args: {
    name: "target",
    suggestions: ["paged", "html", "bundle"],
    default: "paged",
  },
};

const fontOptions: Fig.Option[] = [
  {
    name: "--font-path",
    description:
      "Adds additional directories that are recursively searched for fonts",
    isRepeatable: true,
    args: { name: "dir", template: "folders" },
  },
  {
    name: "--ignore-system-fonts",
    description:
      "Ensures system fonts won't be searched, unless explicitly included via --font-path",
  },
  {
    name: "--ignore-embedded-fonts",
    description: "Ensures fonts embedded into Typst won't be considered",
  },
];

const packageOptions: Fig.Option[] = [
  {
    name: "--package-path",
    description:
      "Custom path to local packages, defaults to system-dependent location",
    args: { name: "dir", template: "folders" },
  },
  {
    name: "--package-cache-path",
    description:
      "Custom path to package cache, defaults to system-dependent location",
    args: { name: "dir", template: "folders" },
  },
];

const worldOptions: Fig.Option[] = [
  {
    name: "--root",
    description: "Configures the project root (for absolute paths)",
    args: { name: "dir", template: "folders" },
  },
  {
    name: "--input",
    description: "Add a string key-value pair visible through `sys.inputs`",
    isRepeatable: true,
    args: { name: "key=value" },
  },
  ...fontOptions,
  ...packageOptions,
  {
    name: "--creation-timestamp",
    description: "The document's creation date formatted as a UNIX timestamp",
    args: { name: "unix_timestamp" },
  },
];

const processOptions: Fig.Option[] = [
  {
    name: ["-j", "--jobs"],
    description:
      "Number of parallel jobs spawned during compilation. Defaults to number of CPUs. Setting it to 1 disables parallelism",
    args: { name: "jobs" },
  },
  {
    name: "--features",
    description:
      "Enables in-development features that may be changed or removed at any time (comma-separated)",
    args: { name: "features", suggestions: ["html", "bundle", "a11y-extras"] },
  },
  {
    name: "--diagnostic-format",
    description: "The format to emit diagnostics in",
    args: {
      name: "diagnostic_format",
      suggestions: ["human", "short"],
      default: "human",
    },
  },
];

const compileOptions: Fig.Option[] = [
  {
    name: ["-f", "--format"],
    description:
      "The format of the output file, inferred from the extension by default",
    args: {
      name: "format",
      suggestions: ["pdf", "png", "svg", "html", "bundle"],
    },
  },
  ...worldOptions,
  {
    name: "--pretty",
    description:
      "Pretty-print produced output (affects HTML, SVG, and PDF export)",
  },
  {
    name: "--pages",
    description:
      "Which pages to export, e.g. '2,3-6,8-'. When unspecified, all pages are exported",
    args: { name: "pages" },
  },
  {
    name: "--pdf-standard",
    description:
      "One (or multiple comma-separated) PDF standards that Typst will enforce conformance with",
    args: {
      name: "pdf_standard",
      suggestions: [
        "1.4",
        "1.5",
        "1.6",
        "1.7",
        "2.0",
        "a-1b",
        "a-1a",
        "a-2b",
        "a-2u",
        "a-2a",
        "a-3b",
        "a-3u",
        "a-3a",
        "a-4",
        "a-4f",
        "a-4e",
        "ua-1",
      ],
    },
  },
  {
    name: "--no-pdf-tags",
    description: "Disables writing a tagged PDF document",
  },
  {
    name: "--ppi",
    description: "The PPI (pixels per inch) to use for PNG export",
    args: { name: "ppi", default: "144" },
  },
  {
    name: "--make-deps",
    description:
      "File path to which a Makefile with the current compilation's dependencies will be written",
    hidden: true,
    deprecated: { description: "Use --deps with --deps-format make" },
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--deps",
    description:
      "File path to which a list of current compilation's dependencies will be written. Use `-` to write to stdout",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--deps-format",
    description: "File format to use for dependencies",
    args: {
      name: "deps_format",
      suggestions: ["json", "zero", "make"],
      default: "json",
    },
  },
  ...processOptions,
  {
    name: "--open",
    description:
      "Opens the output file with the default viewer or a specific program after compilation. Ignored if output is stdout",
    args: { name: "viewer", isOptional: true },
  },
  {
    name: "--timings",
    description:
      "Produces performance timings of the compilation process (experimental)",
    args: { name: "output_json", template: "filepaths" },
  },
  helpOption,
];

const compileArgs: Fig.Arg[] = [
  typArg,
  {
    name: "output",
    description:
      "Path to output file (PDF, PNG, SVG, or HTML). Use `-` to write output to stdout",
    isOptional: true,
    template: "filepaths",
  },
];

const completionSpec: Fig.Spec = {
  name: "typst",
  description: "The Typst compiler",
  icon: "📄",
  subcommands: [
    {
      name: ["compile", "c"],
      description: "Compiles an input file into a supported output format",
      icon: "📄",
      options: compileOptions,
      args: compileArgs,
    },
    {
      name: ["watch", "w"],
      description: "Watches an input file and recompiles on changes",
      icon: "🔄",
      options: [
        ...compileOptions,
        {
          name: "--no-serve",
          description: "Disables the built-in HTTP server for HTML export",
        },
        {
          name: "--no-reload",
          description:
            "Disables the injected live reload script for HTML export",
        },
        {
          name: "--port",
          description:
            "The port where HTML is served. Defaults to the first free port in the range 3000-3005",
          args: { name: "port" },
        },
      ],
      args: compileArgs,
    },
    {
      name: "init",
      description: "Initializes a new project from a template",
      icon: "🆕",
      options: [...packageOptions, helpOption],
      args: [
        {
          name: "template",
          description:
            "The template to use, e.g. `@preview/charged-ieee` (append `:0.1.0` to pin a version)",
        },
        {
          name: "dir",
          description: "The project directory, defaults to the template's name",
          isOptional: true,
          template: "folders",
        },
      ],
    },
    {
      name: "query",
      description: "Processes an input file to extract provided metadata",
      icon: "🔍",
      hidden: true,
      deprecated: { description: "Use `typst eval` instead" },
      options: [
        {
          name: "--field",
          description: "Extracts just one field from all retrieved elements",
          args: { name: "field" },
        },
        {
          name: "--one",
          description: "Expects and retrieves exactly one element",
        },
        {
          name: "--format",
          description: "The format to serialize in",
          args: serializationFormat,
        },
        prettyOption,
        targetOption,
        ...worldOptions,
        ...processOptions,
        helpOption,
      ],
      args: [
        typArg,
        {
          name: "selector",
          description: "Defines which elements to retrieve",
        },
      ],
    },
    {
      name: "eval",
      description:
        "Evaluates a piece of Typst code, optionally in the context of a document",
      icon: "🧮",
      options: [
        {
          name: "--in",
          description:
            "A file in whose context to evaluate the code. Use `-` to read input from stdin",
          args: {
            name: "in",
            generators: filepaths({ extensions: ["typ"] }),
          },
        },
        targetOption,
        {
          name: "--format",
          description: "The format to serialize in",
          args: serializationFormat,
        },
        prettyOption,
        ...worldOptions,
        ...processOptions,
        helpOption,
      ],
      args: {
        name: "expression",
        description: "The piece of Typst code to evaluate",
      },
    },
    {
      name: "fonts",
      description: "Lists all discovered fonts in system and custom font paths",
      icon: "🔤",
      options: [
        ...fontOptions,
        {
          name: "--variants",
          description: "Also lists style variants of each font family",
        },
        helpOption,
      ],
    },
    {
      name: "update",
      description: "Self update the Typst CLI",
      icon: "🆙",
      options: [
        {
          name: "--force",
          description:
            "Forces a downgrade to an older version (required for downgrading)",
          exclusiveOn: ["--revert"],
        },
        {
          name: "--revert",
          description:
            "Reverts to the version from before the last update (only possible if `typst update` has previously ran)",
          exclusiveOn: ["--force"],
        },
        {
          name: "--backup-path",
          description:
            "Custom path to the backup file created on update and used by --revert",
          args: { name: "file", template: "filepaths" },
        },
        helpOption,
      ],
      args: {
        name: "version",
        description: "Which version to update to (defaults to latest)",
        isOptional: true,
      },
    },
    {
      name: "completions",
      description: "Generates shell completion scripts",
      icon: "🐚",
      options: [helpOption],
      args: {
        name: "shell",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
    },
    {
      name: "info",
      description: "Displays debugging information about Typst",
      icon: "ℹ️",
      options: [
        {
          name: ["-f", "--format"],
          description:
            "The format to serialize in, if it should be machine-readable",
          args: { name: "format", suggestions: ["json", "yaml"] },
        },
        prettyOption,
        helpOption,
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      icon: "❓",
      args: {
        name: "subcommand",
        isOptional: true,
        suggestions: [
          "compile",
          "watch",
          "init",
          "eval",
          "fonts",
          "update",
          "completions",
          "info",
          "help",
        ],
      },
    },
  ],
  options: [
    {
      name: "--color",
      description: "Whether to use color",
      args: {
        name: "when",
        isOptional: true,
        suggestions: ["auto", "always", "never"],
        default: "auto",
      },
    },
    {
      name: "--cert",
      description:
        "Path to a custom CA certificate to use when making network requests",
      args: { name: "cert", template: "filepaths" },
    },
    helpOption,
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
};

export default completionSpec;
