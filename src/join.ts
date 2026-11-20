// join (macOS BSD, Apple OSS text_cmds-199 man page dated 2020-06-20, 2026-11-19). Source: apple-oss-distributions/text_cmds join/join.1 + join.c (getopt "a:e:j:1:2:o:t:v:"); man pages and source only, not run on macOS. Not added: the historical argument-less `-a` and multi-argument `-o list ...` forms, and GNU-only options (-i, -z, --check-order, ...).
const completionSpec: Fig.Spec = {
  name: "join",
  description:
    "Perform an equality join on two files, writing lines whose join fields are identical to the standard output",
  options: [
    {
      name: "-a",
      description:
        "In addition to the default output, produce a line for each unpairable line in file file_number",
      isRepeatable: 2,
      args: {
        name: "file_number",
        suggestions: ["1", "2"],
      },
    },
    {
      name: "-e",
      description: "Replace empty output fields with string",
      args: {
        name: "string",
      },
    },
    {
      name: "-o",
      description:
        "Specify the fields that will be output from each file for each line with matching join fields. Each element of the list has either the form file_number.field or the form 0 (zero), representing the join field. Elements must be comma or whitespace separated (use multiple -o options to avoid quoting)",
      isRepeatable: true,
      args: {
        name: "list",
      },
    },
    {
      name: "-t",
      description:
        "Use character char as a field delimiter for both input and output. Every occurrence of char in a line is significant",
      args: {
        name: "char",
      },
    },
    {
      name: "-v",
      description:
        "Do not display the default output, but display a line for each unpairable line in file file_number. The options -v 1 and -v 2 may be specified at the same time",
      isRepeatable: 2,
      args: {
        name: "file_number",
        suggestions: ["1", "2"],
      },
    },
    {
      name: "-1",
      description: "Join on the field'th field of file1",
      args: {
        name: "field",
      },
    },
    {
      name: "-2",
      description: "Join on the field'th field of file2",
      args: {
        name: "field",
      },
    },
    {
      name: "-j",
      description: "Join on the field'th field of both file1 and file2",
      args: {
        name: "field",
      },
    },
    {
      name: "-j1",
      description: "Join on the field'th field of file1 (historic, use -1)",
      deprecated: true,
      args: {
        name: "field",
      },
    },
    {
      name: "-j2",
      description: "Join on the field'th field of file2 (historic, use -2)",
      deprecated: true,
      args: {
        name: "field",
      },
    },
  ],
  args: [
    {
      name: "file1",
      description: "First file in the join operation (- reads standard input)",
      template: "filepaths",
    },
    {
      name: "file2",
      description: "Second file in the join operation (- reads standard input)",
      template: "filepaths",
    },
  ],
};
export default completionSpec;
