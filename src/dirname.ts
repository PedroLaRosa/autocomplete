// dirname (macOS 15.5 BSD, `man dirname` is basename.1 dated 2020-05-26, 2026-11-19). Source: apple-oss-distributions shell_cmds-326 basename.1 + dirname.c (usage: dirname string [...]), matches the Xcode 16.4 man page; spec already correct, header only
const completionSpec: Fig.Spec = {
  name: "dirname",
  description: "Return directory portion of pathname",
  args: {
    name: "string",
    description: "String to operate on (typically filenames)",
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
