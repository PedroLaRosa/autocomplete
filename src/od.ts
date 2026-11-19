// od (macOS BSD, od.1 dated 2011-12-22, apple-oss-distributions/shell_cmds-329 hexdump/od.1 + odsyntax.c, 2026-11-19). Source: man page + source from Apple's OSS mirror (not run on macOS)
const integerSizes = ["", "C", "S", "I", "L"];
const integerTypes = ["d", "o", "u", "x"].flatMap((kind) =>
  integerSizes.map((size) => kind + size)
);

const completionSpec: Fig.Spec = {
  name: "od",
  description: "Octal, decimal, hex, ASCII dump",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "-A",
      description:
        "Specify the input address base: decimal, octal, hexadecimal or no address (default is octal)",
      args: {
        name: "base",
        suggestions: [
          {
            name: "d",
            description: "Decimal addresses",
          },
          {
            name: "o",
            description: "Octal addresses",
          },
          {
            name: "x",
            description: "Hexadecimal addresses",
          },
          {
            name: "n",
            description: "No address",
          },
        ],
        default: "o",
      },
    },
    {
      name: "-a",
      description: "Output named characters.  Equivalent to -t a",
    },
    {
      name: ["-B", "-o"],
      description: "Output octal shorts.  Equivalent to -t o2",
    },
    {
      name: "-b",
      description: "Output octal bytes.  Equivalent to -t o1",
    },
    {
      name: "-c",
      description: "Output C-style escaped characters.  Equivalent to -t c",
    },
    {
      name: "-D",
      description: "Output unsigned decimal ints.  Equivalent to -t u4",
    },
    {
      name: "-d",
      description: "Output unsigned decimal shorts.  Equivalent to -t u2",
    },
    {
      name: ["-e", "-F"],
      description:
        "Output double-precision floating point numbers.  Equivalent to -t fD",
    },
    {
      name: "-f",
      description:
        "Output single-precision floating point numbers.  Equivalent to -t fF",
    },
    {
      name: ["-H", "-X"],
      description: "Output hexadecimal ints.  Equivalent to -t x4",
    },
    {
      name: ["-h", "-x"],
      description: "Output hexadecimal shorts.  Equivalent to -t x2",
    },
    {
      name: ["-I", "-L", "-l"],
      description: "Output signed decimal longs.  Equivalent to -t dL",
    },
    {
      name: "-i",
      description: "Output signed decimal ints.  Equivalent to -t dI",
    },
    {
      name: "-j",
      description:
        "Skip skip bytes of the combined input before dumping.  The number may be followed by one of b, k, m or g which specify the units of the number as blocks (512 bytes), kilobytes, megabytes and gigabytes, respectively",
      args: {
        name: "skip",
      },
    },
    {
      name: "-N",
      description: "Dump at most length bytes of input",
      args: {
        name: "length",
      },
    },
    {
      name: "-O",
      description: "Output octal ints.  Equivalent to -t o4",
    },
    {
      name: "-s",
      description: "Output signed decimal shorts.  Equivalent to -t d2",
    },
    {
      name: "-t",
      description:
        "Specify the output format: a (named characters), c (C-style escaped characters), [d|o|u|x] followed by an optional size (C, S, I, L or a byte count) for integers, or f followed by an optional size (F, D, L or a byte count) for floating point numbers (default is oS)",
      isRepeatable: true,
      args: {
        name: "type",
        suggestions: [
          "a",
          "c",
          ...integerTypes,
          "f",
          "fF",
          "fD",
          "fL",
        ],
      },
    },
    {
      name: "-v",
      description:
        "Write all input data, instead of replacing lines of duplicate values with a '*'",
    },
  ],
  args: [
    {
      name: "[+]offset[.][Bb]",
      description:
        "Offset into the input: octal by default, hexadecimal with a leading 0x or x, decimal with a trailing dot, in 512 (b) or 1024 (B) byte units with a trailing b or B",
      isOptional: true,
    },
    {
      name: "file",
      description: "File name",
      template: "filepaths",
      isOptional: true,
      isVariadic: true,
    },
  ],
};
export default completionSpec;
