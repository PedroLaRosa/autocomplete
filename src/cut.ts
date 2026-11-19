// cut (macOS 15.5 BSD, `man cut` dated 2017-08-03, 2026-11-19). Source: apple-oss-distributions/text_cmds tag text_cmds-195 (cut/cut.1 and cut/cut.c getopt "b:c:d:f:snw"); not a live run on macOS
const listArg = (description: string): Fig.Arg => ({
  name: "list",
  description: `${description}, as a comma or whitespace separated set of numbers and ranges (e.g. 1,3-5)`,
});

const completionSpec: Fig.Spec = {
  name: "cut",
  description: "Cut out selected portions of each line of a file",
  args: {
    template: "filepaths",
    isOptional: true,
    isVariadic: true,
  },
  options: [
    {
      name: "-b",
      description: "Select byte positions",
      exclusiveOn: ["-f"],
      args: listArg("Byte positions"),
    },
    {
      name: "-c",
      description: "Select character positions",
      exclusiveOn: ["-f"],
      args: listArg("Character positions"),
    },
    {
      name: "-f",
      description:
        "Select fields, separated in the input by the field delimiter character",
      exclusiveOn: ["-b", "-c"],
      args: listArg("Fields"),
    },
    {
      name: "-n",
      description: "Do not split multi-byte characters (only valid with -b)",
      exclusiveOn: ["-f"],
    },
    {
      name: "-d",
      description:
        "Use delim as the field delimiter character instead of the tab character",
      exclusiveOn: ["-w"],
      args: {
        name: "delim",
        description: "Field delimiter to use instead of the tab character",
      },
    },
    {
      name: "-s",
      description:
        "Suppress lines with no field delimiter characters.  Unless specified, lines with no delimiters are passed through unmodified",
    },
    {
      name: "-w",
      description:
        "Use whitespace (spaces and tabs) as the delimiter.  Consecutive spaces and tabs count as one single field separator",
      exclusiveOn: ["-d"],
    },
  ],
};

export default completionSpec;
