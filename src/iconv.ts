// iconv (macOS 15 libiconv man page dated 2009-10-22 + GNU libiconv 1.18 man page, 2026-11-19). Source: apple-oss-distributions/libiconv iconv/iconv.1 and iconv.c (-c -f -l -s -t), GNU libiconv 1.18 iconv(1) (long options, --*-subst, --help, --version); read only, not run on macOS.
// The GNU-only options were already in this spec and still exist in libiconv 1.18; macOS's own iconv does not accept them. Homebrew ships libiconv 1.19.1, whose docs could not be fetched.
const encodingGenerator: Fig.Generator = {
  script: ["bash", "-c", "iconv -l | command tr ' ' '\\n' | sort"],
  postProcess: (out) =>
    out
      .split("\n")
      .filter(Boolean)
      .map((encoding) => ({
        name: encoding,
        description: encoding,
        type: "arg",
      })),
};

const substitutionArg: Fig.Arg = {
  name: "FORMATSTRING",
  description:
    "The formatstring must be a format string in the same format as for the printf command",
};

const completionSpec: Fig.Spec = {
  name: "iconv",
  description: "Character set conversion",
  options: [
    {
      name: "--help",
      description: "Show help for iconv",
    },
    {
      name: "--version",
      description: "Output version information and exit",
    },
    {
      name: ["-f", "--from-code"],
      description: "Specifies the encoding of the input",
      exclusiveOn: ["-l", "--list"],
      args: {
        name: "encoding",
        generators: encodingGenerator,
      },
    },
    {
      name: ["-t", "--to-code"],
      description: "Specifies the encoding of the output",
      exclusiveOn: ["-l", "--list"],
      args: {
        name: "encoding",
        generators: encodingGenerator,
      },
    },
    {
      name: "-c",
      description: "Discard unconvertible characters",
      exclusiveOn: ["-l", "--list"],
    },
    {
      name: ["-s", "--silent"],
      description:
        "Do not output the number of invalid characters or error messages about them",
      exclusiveOn: ["-l", "--list"],
    },
    {
      name: ["-l", "--list"],
      description: "List the supported encodings",
      exclusiveOn: [
        "-f",
        "--from-code",
        "-t",
        "--to-code",
        "-c",
        "-s",
        "--silent",
        "--unicode-subst",
        "--byte-subst",
        "--widechar-subst",
      ],
    },
    {
      name: "--unicode-subst",
      description: "Substitution for unconvertible Unicode characters",
      exclusiveOn: ["-l", "--list"],
      requiresSeparator: true,
      args: substitutionArg,
    },
    {
      name: "--byte-subst",
      description: "Substitution for unconvertible bytes",
      exclusiveOn: ["-l", "--list"],
      requiresSeparator: true,
      args: substitutionArg,
    },
    {
      name: "--widechar-subst",
      description: "Substitution for unconvertible wide characters",
      exclusiveOn: ["-l", "--list"],
      requiresSeparator: true,
      args: substitutionArg,
    },
  ],
  args: {
    name: "inputfile",
    isVariadic: true,
    isOptional: true,
    template: "filepaths",
  },
};
export default completionSpec;
