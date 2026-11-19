// mv (macOS BSD, mv.1 dated 2013-03-15, apple-oss-distributions/file_cmds-479, 2026-11-19). Source: mv.1 + mv.c from Apple's OSS mirror (not run on macOS)
// BSD flags only (-f -h -i -n -v); GNU-only flags are not listed
const completionSpec: Fig.Spec = {
  name: "mv",
  description: "Move & rename files and folders",
  args: [
    {
      name: "source",
      isVariadic: true,
      template: ["filepaths", "folders"],
    },
    {
      name: "target",
      template: ["filepaths", "folders"],
    },
  ],
  options: [
    {
      name: "-f",
      description:
        "Do not prompt for confirmation before overwriting the destination path",
      exclusiveOn: ["-i", "-n"],
    },
    {
      name: "-h",
      description:
        "If the target is a symbolic link to a directory, do not follow it (rename source to target instead of moving it into the directory)",
    },
    {
      name: "-i",
      description:
        "Cause mv to write a prompt to standard error before moving a file that would overwrite an existing file",
      exclusiveOn: ["-f", "-n"],
    },
    {
      name: "-n",
      description: "Do not overwrite an existing file",
      exclusiveOn: ["-f", "-i"],
    },
    {
      name: "-v",
      description: "Cause mv to be verbose, showing files after they are moved",
    },
  ],
};

export default completionSpec;
