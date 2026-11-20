// dd (macOS 15.5 BSD, `man dd` dated 2021-05-19, 2026-11-19). Source: apple-oss-distributions file_cmds-457.120.3 dd.1 + args.c operand/conv tables, matches the Xcode 16.4 man page; not run on macOS
const convValues: Fig.Suggestion[] = [
  {
    name: "ascii",
    icon: "fig://icon?type=string",
    description:
      "The same as 'unblock' except characters are translated from EBCDIC to ASCII",
  },
  {
    name: "oldascii",
    icon: "fig://icon?type=string",
    description:
      "Like 'ascii' but use the conversion map of historic AT&T and pre-4.3reno systems",
  },
  {
    name: "block",
    icon: "fig://icon?type=string",
    description:
      "Treats the input as a sequence of newline or EOF-terminated variable length records of independent input and output block boundaries",
  },
  {
    name: "ebcdic",
    icon: "fig://icon?type=string",
    description:
      "The same as the 'block' value except that characters are translated from ASCII to EBCDIC after the records are converted",
  },
  {
    name: "ibm",
    icon: "fig://icon?type=string",
    description:
      "Like 'ebcdic' but use a slightly different mapping, compatible with the AT&T System V 'ibm' value",
  },
  {
    name: "oldebcdic",
    icon: "fig://icon?type=string",
    description:
      "Like 'ebcdic' but use the conversion map of historic AT&T and pre-4.3reno systems",
  },
  {
    name: "oldibm",
    icon: "fig://icon?type=string",
    description:
      "Like 'ibm' but use the conversion map of historic AT&T and pre-4.3reno systems",
  },
  {
    name: "fsync",
    icon: "fig://icon?type=string",
    description: "Perform an fsync on the output file before closing it",
  },
  {
    name: "lcase",
    icon: "fig://icon?type=string",
    description: "Transform uppercase characters into lowercase characters",
  },
  {
    name: "noerror",
    icon: "fig://icon?type=string",
    description: "Do not stop processing on an input error",
  },
  {
    name: "notrunc",
    icon: "fig://icon?type=string",
    description:
      "Do not truncate the output file. This will preserve any blocks in the output file not explicitly written by dd",
  },
  {
    name: "osync",
    icon: "fig://icon?type=string",
    description: "Pad the final output block to the full output block size",
  },
  {
    name: "pareven",
    icon: "fig://icon?type=string",
    description: "Output data with even parity",
  },
  {
    name: "parnone",
    icon: "fig://icon?type=string",
    description: "Output data with no parity",
  },
  {
    name: "parodd",
    icon: "fig://icon?type=string",
    description: "Output data with odd parity",
  },
  {
    name: "parset",
    icon: "fig://icon?type=string",
    description: "Output data with the parity bit set",
  },
  {
    name: "sparse",
    icon: "fig://icon?type=string",
    description:
      "If one or more output blocks would consist solely of NUL bytes, try to seek the output file by the required space instead of filling them with NULs, resulting in a sparse file",
  },
  {
    name: "swab",
    icon: "fig://icon?type=string",
    description: "Swap every pair of input bytes",
  },
  {
    name: "sync",
    icon: "fig://icon?type=string",
    description: "Pad every input block to the input buffer size",
  },
  {
    name: "ucase",
    icon: "fig://icon?type=string",
    description: "Transform lowercase characters into uppercase characters",
  },
  {
    name: "unblock",
    icon: "fig://icon?type=string",
    description:
      "Treats the input as a sequence of fixed length records independent of input and output block boundaries",
  },
];

const flagValues = (
  values: [name: string, description: string][]
): Fig.Suggestion[] =>
  values.map(([name, description]) => ({
    name,
    icon: "fig://icon?type=string",
    description,
  }));

const iflagValues = flagValues([
  [
    "fullblock",
    "When a read returns short, continue reading to fill the block (cannot be combined with conv=sync)",
  ],
  [
    "direct",
    "Set F_NOCACHE on the input file to make reads bypass any local caching",
  ],
]);

const oflagValues = flagValues([
  [
    "fsync",
    "Set the O_FSYNC flag on the output file to make writes synchronous",
  ],
  ["sync", "Same as fsync"],
  [
    "direct",
    "Set F_NOCACHE on the output file to make writes bypass any local caching",
  ],
]);

const completionSpec: Fig.Spec = {
  name: "dd",
  description: "Convert and copy a file",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  // dd has "operands", which are most closely modeled as options in a Fig spec.
  // Asterisk *feels* a lot better than the default option icon here.
  options: [
    {
      name: "bs",
      icon: "fig://icon?type=asterisk",
      description: "Set input and output block size",
      requiresSeparator: true,
      args: {
        name: "size",
      },
    },
    {
      name: "cbs",
      icon: "fig://icon?type=asterisk",
      description: "Set the conversion record size",
      requiresSeparator: true,
      args: {
        name: "size",
      },
    },
    {
      name: "count",
      icon: "fig://icon?type=asterisk",
      description: "Copy this many input blocks",
      requiresSeparator: true,
      args: {
        name: "number",
      },
    },
    {
      name: "files",
      icon: "fig://icon?type=asterisk",
      description:
        "Copy this many input files before terminating (only applicable when the input is a tape)",
      requiresSeparator: true,
      args: {
        name: "number",
      },
    },
    {
      name: "fillchar",
      icon: "fig://icon?type=asterisk",
      description:
        "Fill with this ASCII character when padding a block in conversion mode or due to noerror and sync, instead of a space or NUL",
      requiresSeparator: true,
      args: {
        name: "character",
      },
    },
    {
      name: "ibs",
      icon: "fig://icon?type=asterisk",
      description: "Set the input block size",
      requiresSeparator: true,
      args: {
        name: "size",
        default: "512",
      },
    },
    {
      name: "if",
      icon: "fig://icon?type=asterisk",
      description: "Read an input file instead of stdin",
      requiresSeparator: true,
      priority: 60,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "iflag",
      icon: "fig://icon?type=asterisk",
      description: "Set input flags (comma-separated list)",
      requiresSeparator: true,
      args: {
        name: "value",
        generators: {
          getQueryTerm: ",",
          custom: async () => iflagValues,
        },
      },
    },
    {
      name: "iseek",
      icon: "fig://icon?type=asterisk",
      description: "Seek this many blocks on the input file (same as skip)",
      requiresSeparator: true,
      args: {
        name: "blocks",
      },
    },
    {
      name: "obs",
      icon: "fig://icon?type=asterisk",
      description: "Set the output block size",
      requiresSeparator: true,
      args: {
        name: "size",
        default: "512",
      },
    },
    {
      name: "of",
      icon: "fig://icon?type=asterisk",
      description: "Write to an output file instead of stdout",
      requiresSeparator: true,
      priority: 59,
      args: {
        name: "file",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
    {
      name: "oflag",
      icon: "fig://icon?type=asterisk",
      description: "Set output flags (comma-separated list)",
      requiresSeparator: true,
      args: {
        name: "value",
        generators: {
          getQueryTerm: ",",
          custom: async () => oflagValues,
        },
      },
    },
    {
      name: "oseek",
      icon: "fig://icon?type=asterisk",
      description: "Seek this many blocks on the output file (same as seek)",
      requiresSeparator: true,
      args: {
        name: "blocks",
      },
    },
    {
      name: "seek",
      icon: "fig://icon?type=asterisk",
      description:
        "Seek this many blocks from the beginning of the output before copying",
      requiresSeparator: true,
      args: {
        name: "blocks",
      },
    },
    {
      name: "skip",
      icon: "fig://icon?type=asterisk",
      description:
        "Skip this many blocks from the beginning of the input before copying",
      requiresSeparator: true,
      args: {
        name: "blocks",
      },
    },
    {
      name: "speed",
      icon: "fig://icon?type=asterisk",
      description: "Limit the copying speed to this many bytes per second",
      requiresSeparator: true,
      args: {
        name: "bytes",
      },
    },
    {
      name: "status",
      icon: "fig://icon?type=asterisk",
      description: "Control the status output",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: [
          {
            name: "noxfer",
            description:
              "Do not print the transfer statistics as the last line of status output",
          },
          {
            name: "none",
            description:
              "Do not print the status output (error messages are still shown)",
          },
          {
            name: "progress",
            description: "Print basic transfer statistics once per second",
          },
        ],
      },
    },
    {
      name: "conv",
      icon: "fig://icon?type=asterisk",
      description: "Convert input data (comma-separated list)",
      requiresSeparator: true,
      args: {
        name: "value",
        generators: {
          getQueryTerm: ",",
          custom: async () => convValues,
        },
      },
    },
  ],
};
export default completionSpec;
