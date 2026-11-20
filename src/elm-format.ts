// elm-format v0.8.8 (npm "latest" and GitHub tag 0.8.8, 2026-11-19). Source: src/ElmFormat/CliFlags.hs and
// src/ElmFormat/Cli.hs at tag 0.8.8 of https://github.com/avh4/elm-format (optparse-applicative definitions read
// statically, not run). Hidden `--json` / `--from-json` flags are marked hidden.
const supportedElmVersions = [
  {
    name: "0.19",
  },
  {
    name: "0.18",
  },
];

/**
 * Based on [elm-format](https://github.com/avh4/elm-format), version 0.8.8. A cli tool for formatting Elm code.
 */
const completionSpec: Fig.Spec = {
  name: "elm-format",
  description: "Format your code in the Elm idiomatic way",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for elm-format",
    },
    {
      name: "--output",
      description:
        "Write output to FILE instead of overwriting the given source file",
      args: {
        name: "FILE",
        description: "Name and location of output file",
        template: "filepaths",
      },
    },
    {
      name: "--yes",
      description: "Reply 'yes' to all automated prompts",
    },
    {
      name: "--validate",
      description: "Check if files are formatted without changing them",
    },
    {
      name: "--stdin",
      description: "Read from stdin, output to stdout",
    },
    {
      name: "--elm-version",
      description: "The Elm version of the source files being formatted",
      args: {
        name: "VERSION",
        description: "Valid values: 0.18, 0.19. Default: auto",
        suggestions: supportedElmVersions,
      },
    },
    {
      name: "--json",
      description: "Instead of formatting, write the AST to stdout",
      hidden: true,
    },
    {
      name: "--from-json",
      description: "Read the JSON AST input and write Elm source",
      hidden: true,
    },
  ],
  args: {
    name: "INPUT",
    description: "Elm files or directories to format",
    isVariadic: true,
    template: ["filepaths", "folders"],
  },
};
export default completionSpec;
