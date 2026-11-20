// DotSlash v0.5.9 (GitHub tag v0.5.9 of facebook/dotslash, matches the Homebrew formula, 2026-11-19). Source: static read of src/execution.rs
// (flag handling) and src/subcommand.rs (the `dotslash -- <command>` help text) at tag v0.5.9; the binary was not run.
const completionSpec: Fig.Spec = {
  name: "dotslash",
  description:
    "Fetch, cache and run the executable described by a DotSlash file",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "--help",
      description: "Print the usage message (must be the first argument)",
      exclusiveOn: ["--version", "--"],
    },
    {
      name: "--version",
      description: "Print the version of dotslash (must be the first argument)",
      exclusiveOn: ["--help", "--"],
    },
    {
      name: "--",
      description: "Run one of the special experimental commands",
      exclusiveOn: ["--help", "--version"],
      args: [
        {
          name: "command",
          suggestions: [
            {
              name: "b3sum",
              description: "Compute the blake3 hash of a file",
            },
            {
              name: "clean",
              description: "Clean the dotslash cache",
            },
            {
              name: "create-url-entry",
              description: 'Generate an "http" provider entry for a URL',
            },
            {
              name: "cache-dir",
              description: "Print the path to the cache directory",
            },
            {
              name: "fetch",
              description:
                "Prepare for execution, but print the executable path instead of executing",
            },
            {
              name: "get-extracted-cache-path",
              description:
                "Print the path to the extracted artifact in the cache without running the binary",
            },
            {
              name: "parse",
              description: "Parse a DotSlash file and print its data as JSON",
            },
            {
              name: "sha256",
              description: "Compute the sha256 sum of a file",
            },
          ],
        },
        {
          name: "argument",
          description:
            "The file (FILE, DOTSLASH_FILE) or URL the command operates on, if it takes one",
          template: "filepaths",
          isOptional: true,
        },
      ],
    },
  ],
  args: [
    {
      name: "DOTSLASH_FILE",
      // This was previously just "filepaths", however, we added folders so
      // users of ohmyzsh could cd into a folder by typing the folder name without `cd`
      template: ["filepaths", "folders"],
    },
    {
      name: "args",
      description: "Arguments forwarded to the executable",
      isVariadic: true,
      isOptional: true,
    },
  ],
};

export default completionSpec;
