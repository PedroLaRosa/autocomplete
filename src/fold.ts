// fold (macOS BSD fold from Apple OSS text_cmds-199, man page dated 2020-10-29, 2026-11-19). Source: apple-oss-distributions/text_cmds fold/fold.1 + fold.c (usage: fold [-bs] [-w width] [file ...]); spec already matched. Not run on macOS.
const completionSpec: Fig.Spec = {
  name: "fold",
  description: "Fold long lines for finite width output device",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "-b",
      description: `Count width in bytes rather than column positions`,
    },
    {
      name: "-s",
      description: `Fold line after the last blank character within the first width
column positions (or bytes)`,
    },
    {
      name: "-w",
      description: `Specify a line width to use instead of the default 80 columns.
The width value should be a multiple of 8 if tabs are present,
or the tabs should be expanded using expand(1) before using
fold`,
      args: {
        name: "width",
        suggestions: ["80", "90", "100", "110", "120"],
        default: "80",
      },
    },
  ],
  args: {
    name: "file",
    description: "File(s) to fold",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
