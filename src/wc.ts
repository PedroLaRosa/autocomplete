// wc (macOS BSD, man page dated 2020-04-11, 2026-11-19). Source: apple-oss-distributions/text_cmds tag text_cmds-199 wc/wc.1 + wc/wc.c (getopt "clmwL", libxo args); man page and source only, not run on macOS. Changes: added -L and --libxo, descriptions refreshed, fixed "World" typo in the description. GNU-only long options (--bytes, --lines, --words, --chars, --max-line-length, --files0-from, --total) are not on macOS and are not listed.
const completionSpec: Fig.Spec = {
  name: "wc",
  description: "Word, line, character, and byte count",
  options: [
    {
      name: "--libxo",
      description:
        "Generate output via libxo in human or machine readable formats",
      args: {
        name: "options",
        suggestions: ["json", "xml", "html", "text", "pretty", "warn"],
      },
    },
    {
      name: "-L",
      description:
        "Write the length of the longest line in bytes (characters with -m)",
    },
    {
      name: "-c",
      description:
        "Write the number of bytes in each input file (cancels a prior -m)",
    },
    {
      name: "-l",
      description: "Write the number of lines in each input file",
    },
    {
      name: "-m",
      description:
        "Write the number of characters in each input file (cancels a prior -c)",
    },
    {
      name: "-w",
      description: "Write the number of words in each input file",
    },
  ],
  args: {
    name: "file",
    description: "File to count in (standard input if omitted)",
    template: "filepaths",
    isOptional: true,
    isVariadic: true,
  },
};

export default completionSpec;
