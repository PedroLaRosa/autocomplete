// Taplo CLI (taplo-cli) v0.10.0 (crates.io latest = Homebrew = GitHub tag release-taplo-cli-0.10.0, 2026-11-20).
// Source: clap derive definitions in taplo-cli-0.10.0 (src/args.rs, src/commands/*.rs) and the formatter
// option list in crates/taplo/src/formatter/mod.rs, read statically from the crate/repo (binary not run).
// Official release builds use the default cargo features, so lint, lsp, completions and toml-test are all present.

const filesArg: Fig.Arg = {
  name: "FILES",
  description: "Paths or glob patterns to TOML documents",
  template: "filepaths",
  suggestCurrentToken: true,
  isOptional: true,
  isVariadic: true,
  suggestions: [
    {
      name: "-",
      description:
        "Read from the standard input (only when it is the sole argument)",
    },
  ],
};

// Options shared by `format`, `lint` and `lsp` (GeneralArgs in the upstream source)
const generalOptions: Fig.Option[] = [
  {
    name: ["--config", "-c"],
    description: "Path to the Taplo configuration file",
    args: {
      name: "CONFIG",
      template: "filepaths",
      suggestCurrentToken: true,
    },
  },
  {
    name: "--cache-path",
    description: "Set a cache path",
    args: {
      name: "CACHE_PATH",
      template: "filepaths",
      suggestCurrentToken: true,
    },
  },
  {
    name: "--no-auto-config",
    description: "Do not search for a configuration file",
  },
];

const helpSubcommand: Fig.Subcommand = {
  name: "help",
  description: "Print this message or the help of the given subcommand(s)",
  args: {
    name: "COMMAND",
    template: "help",
    isOptional: true,
    isVariadic: true,
  },
};

// Keys accepted by `format --option key=value` (Options in the upstream formatter)
const formatterBooleanOptions = [
  "align_entries",
  "align_comments",
  "align_single_comments",
  "array_trailing_comma",
  "array_auto_expand",
  "inline_table_expand",
  "array_auto_collapse",
  "compact_arrays",
  "compact_inline_tables",
  "compact_entries",
  "indent_tables",
  "indent_entries",
  "trailing_newline",
  "reorder_keys",
  "reorder_arrays",
  "reorder_inline_tables",
  "crlf",
];

const completionSpec: Fig.Spec = {
  name: "taplo",
  description:
    "Tool for validation, formatting, and querying TOML documents with a jq-like fashion",
  subcommands: [
    {
      name: ["lint", "check", "validate"],
      description: "Lint TOML documents",
      args: filesArg,
      options: [
        ...generalOptions,
        {
          name: "--schema",
          description: "URL to the schema to be used for validation",
          args: {
            name: "SCHEMA",
          },
        },
        {
          name: "--schema-catalog",
          description:
            "URL to a schema catalog (index) that is compatible with Schema Store or Taplo catalogs",
          isRepeatable: true,
          args: {
            name: "SCHEMA_CATALOG",
          },
        },
        {
          name: "--default-schema-catalogs",
          description: "Use the default online catalogs for schemas",
        },
        {
          name: "--no-schema",
          description: "Disable all schema validations",
        },
      ],
    },
    {
      name: ["format", "fmt"],
      description: "Format TOML documents",
      args: filesArg,
      options: [
        ...generalOptions,
        {
          name: ["--option", "-o"],
          description:
            'A formatter option given as a "key=value", can be set multiple times',
          isRepeatable: true,
          args: {
            name: "OPTIONS",
            suggestions: [
              ...formatterBooleanOptions.flatMap((key) => [
                `${key}=true`,
                `${key}=false`,
              ]),
              "column_width=80",
              "allowed_blank_lines=2",
            ],
          },
        },
        {
          name: ["--force", "-f"],
          description: "Ignore syntax errors and force formatting",
        },
        {
          name: "--check",
          description:
            "Dry-run and report any files that are not correctly formatted",
        },
        {
          name: "--diff",
          description: "Print the differences in patch formatting to `stdout`",
        },
        {
          name: "--stdin-filepath",
          description:
            "A path to the file that the Taplo CLI will treat like stdin",
          args: {
            name: "STDIN_FILEPATH",
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
      ],
    },
    {
      name: "lsp",
      description: "Language server operations",
      options: generalOptions,
      subcommands: [
        {
          name: "tcp",
          description: "Run the language server and listen on a TCP address",
          options: [
            {
              name: "--address",
              description: "The address to listen on",
              args: {
                name: "ADDRESS",
                default: "0.0.0.0:9181",
              },
            },
          ],
        },
        {
          name: "stdio",
          description:
            "Run the language server over the standard input and output",
        },
        helpSubcommand,
      ],
    },
    {
      name: ["config", "cfg"],
      description: "Operations with the Taplo config file",
      subcommands: [
        {
          name: "default",
          description: "Print the default `.taplo.toml` configuration file",
        },
        {
          name: "schema",
          description:
            "Print the JSON schema of the `.taplo.toml` configuration file",
        },
        helpSubcommand,
      ],
    },
    {
      name: "get",
      description: "Extract a value from the given TOML document",
      args: {
        name: "PATTERN",
        description:
          "A dotted key pattern to the value within the TOML document, with jq-like syntax and glob support (e.g. table.array[*].foo)",
        isOptional: true,
      },
      options: [
        {
          name: ["--output-format", "-o"],
          description: "The format specifying how the output is printed",
          args: {
            name: "OUTPUT_FORMAT",
            default: "value",
            suggestions: [
              {
                name: "value",
                description: "Extract the value outputting it in a text format",
              },
              { name: "json", description: "Output format in JSON" },
              { name: "toml", description: "Output format in TOML" },
            ],
          },
        },
        {
          name: ["--strip-newline", "-s"],
          description: "Strip the trailing newline from the output",
        },
        {
          name: ["--file-path", "-f"],
          description:
            "Path to the TOML document, if omitted the standard input will be used",
          args: {
            name: "FILE_PATH",
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
        {
          name: "--separator",
          description:
            "A string that separates array values when printing to stdout",
          args: {
            name: "SEPARATOR",
          },
        },
      ],
    },
    {
      name: "toml-test",
      description:
        "Start a decoder for `toml-test` (https://github.com/BurntSushi/toml-test)",
    },
    {
      name: "completions",
      description: "Generate completions for Taplo CLI",
      args: {
        name: "SHELL",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
    },
    helpSubcommand,
  ],
  options: [
    {
      name: "--colors",
      description: "Set color values for the output",
      isPersistent: true,
      args: {
        name: "COLORS",
        default: "auto",
        suggestions: [
          {
            name: "auto",
            description: "Determine whether to colorize output automatically",
          },
          { name: "always", description: "Always colorize output" },
          { name: "never", description: "Never colorize output" },
        ],
      },
    },
    {
      name: "--verbose",
      description: "Enable a verbose logging format",
      isPersistent: true,
    },
    {
      name: "--log-spans",
      description: "Enable logging spans",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Print help",
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      description: "Print version",
    },
  ],
};
export default completionSpec;
