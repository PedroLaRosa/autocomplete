// nl (macOS BSD, nl.1 dated 2020-06-18, apple-oss-distributions/text_cmds-199, 2026-11-19). Source: nl.1 + nl.c from Apple's OSS mirror (not run on macOS)
// -n defaults to rn; -b/-f/-h all accept a, t, n and pexpr
const numberingTypes: Fig.Suggestion[] = [
  {
    name: "a",
    description: "Number all lines",
  },
  {
    name: "t",
    description: "Number only non-empty lines",
  },
  {
    name: "n",
    description: "No line numbering",
  },
  {
    name: "pexpr",
    description:
      "Only those lines that contain the basic regular expression specified by 'expr'",
  },
];

const completionSpec: Fig.Spec = {
  name: "nl",
  description: "Line numbering filter",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "-b",
      description: "Specify the logical page body lines to be numbered",
      args: {
        name: "type",
        suggestions: numberingTypes,
        default: "t",
      },
    },
    {
      name: "-d",
      description:
        "Specify the delimiter characters used to indicate the start of a logical page section in the input file (at most two characters; if only one is given, the first character is replaced and the second remains unchanged)",
      args: {
        name: "delim",
        suggestions: ["\\:"],
        default: "\\:",
      },
    },
    {
      name: "-f",
      description:
        "Specify the same as -b type except for logical page footer lines",
      args: {
        name: "type",
        suggestions: numberingTypes,
        default: "n",
      },
    },
    {
      name: "-h",
      description:
        "Specify the same as -b type except for logical page header lines",
      args: {
        name: "type",
        suggestions: numberingTypes,
        default: "n",
      },
    },
    {
      name: "-i",
      description:
        "Specify the increment value used to number logical page lines",
      args: {
        name: "incr",
        suggestions: ["1"],
        default: "1",
      },
    },
    {
      name: "-l",
      description:
        "If numbering of all lines is specified for the current logical section (-b a, -f a or -h a), specify the number of adjacent blank lines to be considered as one (-l 2 numbers only the second adjacent blank line)",
      args: {
        name: "num",
        suggestions: ["1"],
        default: "1",
      },
    },
    {
      name: "-n",
      description: "Specify the line numbering output format",
      args: {
        name: "format",
        suggestions: [
          {
            name: "ln",
            description: "Left justified",
          },
          {
            name: "rn",
            description: "Right justified (leading zeros suppressed)",
          },
          {
            name: "rz",
            description: "Right justified (leading zeros kept)",
          },
        ],
        default: "rn",
      },
    },
    {
      name: "-p",
      description:
        "Specify that line numbering should not be restarted at logical page delimiters",
    },
    {
      name: "-s",
      description:
        "Specify the characters used in separating the line number and the corresponding text line (default is a single tab character)",
      args: {
        name: "sep",
        suggestions: ["\\t"],
        default: "\\t",
      },
    },
    {
      name: "-v",
      description:
        "Specify the initial value used to number logical page lines; see also the description of the -p option",
      args: {
        name: "startnum",
        suggestions: ["1", "2", "3"],
        default: "1",
      },
    },
    {
      name: "-w",
      description:
        "Specify the number of characters to be occupied by the line number; if the width is insufficient to hold the line number, it is truncated to its width least significant digits",
      args: {
        name: "width",
        suggestions: ["6", "5", "4", "3", "2", "1"],
        default: "6",
      },
    },
  ],
  args: {
    name: "file",
    description: "File to number, - or no file reads standard input",
    isOptional: true,
    template: "filepaths",
  },
};
export default completionSpec;
