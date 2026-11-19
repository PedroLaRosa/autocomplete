// ln (macOS BSD, Apple OSS file_cmds-457.140.3 and file_cmds-479 man page dated 2021-05-10, 2026-11-19). Source: apple-oss-distributions/file_cmds ln/ln.1 + ln.c (getopt "FLPfhinsvw"); man pages and source only, not run on macOS. The options no longer carry the copied source/target args (they are plain flags).
const sourceDestArgs: Fig.Arg[] = [
  {
    name: "source_file",
    template: ["filepaths", "folders"],
    // isVariadic: true,
    // source_file is variadic but usability wise having it is less useful
    // because it keeps recommending "source_file" repeatedly and not "target_file or target_dir"
    // and since most people won't need multiple files and those who do can look it up
  },
  {
    name: "target_file or target_dir",
    isOptional: true,
  },
];

const completionSpec: Fig.Spec = {
  name: "ln",
  description: "Link files (hard links by default, symbolic links with -s)",
  args: sourceDestArgs,
  options: [
    {
      name: "-F",
      description:
        "If the target file already exists and is a directory, remove it so that the link may occur (implies -f unless -f or -i is given; no-op unless -s is specified)",
    },
    {
      name: "-L",
      description:
        "When creating a hard link to a symbolic link, create a hard link to the target of the symbolic link (default); cancels -P",
    },
    {
      name: "-P",
      description:
        "When creating a hard link to a symbolic link, create a hard link to the symbolic link itself; cancels -L",
    },
    {
      name: "-f",
      description:
        "If the target file already exists, unlink it so that the link may occur (overrides any previous -i and -w options)",
    },
    {
      name: "-h",
      description:
        "If the target_file or target_dir is a symbolic link, do not follow it. Most useful with -f, to replace a symlink which may point to a directory",
    },
    {
      name: "-i",
      description:
        "Prompt on standard error if the target file exists, and unlink it only if the answer begins with y or Y (overrides any previous -f options)",
    },
    {
      name: "-n",
      description:
        "Same as -h, for compatibility with other ln implementations",
    },
    {
      name: "-s",
      description: "Create a symbolic link",
    },
    {
      name: "-v",
      description: "Be verbose, showing files as they are processed",
    },
    {
      name: "-w",
      description:
        "Warn if the source of a symbolic link does not currently exist",
    },
  ],
};

export default completionSpec;
