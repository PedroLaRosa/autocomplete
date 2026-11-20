// xxd 2026-06-16 (bundled with Vim v9.2.1373, latest tag as of 2026-11-19). Source: src/xxd/xxd.c (option parser and usage) and runtime/doc/xxd.1 (man page dated Mar 2026) from github.com/vim/vim at v9.2.1373.
const bitsFlags = ["-bits", "-b"];
const ebcdicFlags = ["-EBCDIC", "-E"];
const littleEndianFlags = ["-e"];
const includeFlags = ["-include", "-i"];
const postscriptFlags = ["-postscript", "-plain", "-ps", "-p"];
const revertFlags = ["-revert", "-r"];

const completionSpec: Fig.Spec = {
  name: "xxd",
  description: "Make a hexdump or do the reverse",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["-help", "-h"],
      description: "Print a summary of available options and exit",
    },
    {
      name: ["-autoskip", "-a"],
      description:
        "Toggle autoskip: A single '*' replaces nul-lines.  Default off",
    },
    {
      name: bitsFlags,
      description: "Switch to bits (binary digits) dump, rather than hexdump",
      exclusiveOn: [...postscriptFlags, ...littleEndianFlags],
    },
    {
      name: ["-cols", "-c"],
      description:
        "Format <cols> octets per line. Default 16 (-i: 12, -ps: 30, -b: 6). Max 256",
      args: {
        name: "cols",
      },
    },
    {
      name: ["-capitalize", "-C"],
      description:
        "Capitalize variable names in C include file style, when using -i",
    },
    {
      name: "-d",
      description: "Show offset in decimal instead of hex",
    },
    {
      name: ebcdicFlags,
      description:
        "Change the character encoding in the righthand column from ASCII to EBCDIC",
      exclusiveOn: [...postscriptFlags, ...revertFlags, ...includeFlags],
    },
    {
      name: littleEndianFlags,
      description: "Switch to little-endian hexdump",
      exclusiveOn: [
        ...bitsFlags,
        ...postscriptFlags,
        ...includeFlags,
        ...revertFlags,
      ],
    },
    {
      name: ["-groupsize", "-g"],
      description:
        "Separate the output of every <bytes> bytes by a whitespace (0 to suppress grouping)",
      args: {
        name: "bytes",
      },
    },
    {
      name: includeFlags,
      description: "Output in C include file style",
      exclusiveOn: [...ebcdicFlags, ...littleEndianFlags, ...postscriptFlags],
    },
    {
      name: ["-len", "-l"],
      description: "Stop after writing <len> octets",
      args: {
        name: "len",
      },
    },
    {
      name: ["-name", "-n"],
      description: "Override the variable name output when -i is used",
      args: {
        name: "name",
      },
    },
    {
      name: "-o",
      description: "Add <offset> to the displayed file position",
      args: {
        name: "offset",
      },
    },
    {
      name: postscriptFlags,
      description: "Output in postscript continuous hexdump style",
      exclusiveOn: [
        ...ebcdicFlags,
        ...bitsFlags,
        ...littleEndianFlags,
        ...includeFlags,
      ],
    },
    {
      name: revertFlags,
      description: "Reverse operation: convert (or patch) hexdump into binary",
      exclusiveOn: [...ebcdicFlags, ...littleEndianFlags],
    },
    {
      name: "-R",
      description:
        "Colorize the output depending on the byte value (disabled when NO_COLOR is set)",
      args: {
        name: "when",
        default: "auto",
        suggestions: ["always", "auto", "never"],
      },
    },
    {
      name: "-seek",
      description:
        "When used after -r: revert with <offset> added to file positions found in hexdump",
      args: {
        name: "offset",
      },
    },
    {
      name: "-s",
      description:
        "Start at <seek> bytes absolute (or relative to the current stdin position with +, from the end with -) infile offset",
      args: {
        name: "seek",
        description:
          "Offset, optionally prefixed with + (relative) and/or - (from the end)",
      },
    },
    {
      name: "-t",
      description:
        "Include the terminating zero when outputting in C include file style (-i)",
    },
    {
      name: "-u",
      description: "Use upper case hex letters. Default is lower case",
    },
    {
      name: ["-version", "-v"],
      description: "Show version string",
    },
  ],
  args: [
    {
      name: "infile",
      template: "filepaths",
      isOptional: true,
    },
    {
      name: "outfile",
      template: "filepaths",
      isOptional: true,
    },
  ],
};
export default completionSpec;
