// base64 (macOS 15.5 BSD, `man base64` = bintrans(1) dated 2024-01-23, 2026-11-19). Source: apple-oss-distributions/text_cmds tag text_cmds-195 (bintrans/bintrans.1 and bintrans.c option table); not a live run on macOS
const completionSpec: Fig.Spec = {
  name: "base64",
  description: "Encode and decode using Base64 representation",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Print usage summary and exit",
    },
    {
      // --wrap / -w are GNU-compatibility aliases that set the same value
      name: ["--break", "--breaks", "--wrap", "-b", "-w"],
      description:
        "Insert line breaks every count characters.  Default is 0, which generates an unbroken stream",
      args: {
        name: "count",
        suggestions: ["0"],
        default: "0",
      },
    },
    {
      name: ["--decode", "-d", "-D"],
      description: "Decode incoming Base64 stream into binary data",
    },
    {
      name: ["--input", "-i"],
      description:
        "Read input from input_file.  Default is stdin; passing - also represents stdin",
      args: {
        name: "input_file",
        suggestions: ["-"],
        default: "-",
        template: "filepaths",
      },
    },
    {
      name: ["--output", "-o"],
      description:
        "Write output to output_file.  Default is stdout; passing - also represents stdout",
      args: {
        name: "output_file",
        suggestions: ["-"],
        default: "-",
        template: "filepaths",
      },
    },
    {
      name: "--version",
      description: "Print version information and exit",
    },
  ],
};
export default completionSpec;
