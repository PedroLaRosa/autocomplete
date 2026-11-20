// rm (macOS 15 BSD, rm.1 dated 2018-11-10 in Apple OSS file_cmds-457.140.3 and file_cmds-479, 2026-11-19).
// Source: rm.1 + rm.c (getopt "dfiIPRrvWx") from apple-oss-distributions/file_cmds; man page / OSS mirror only, not run on macOS.
// The man page says -P has no effect, but the Apple rm.c still implements it (removefile 7-pass secure delete), so it is kept.
const completionSpec: Fig.Spec = {
  name: "rm",
  description: "Remove directory entries",
  args: {
    isVariadic: true,
    template: ["folders", "filepaths"],
  },

  options: [
    {
      name: ["-r", "-R"],
      description:
        "Attempt to remove the file hierarchy rooted in each file argument. Implies -d",
      isDangerous: true,
    },
    {
      name: "-P",
      description:
        "Overwrite regular files before deleting them (seven-pass secure removal)",
      isDangerous: true,
    },
    {
      name: "-d",
      description:
        "Attempt to remove directories as well as other types of files",
    },
    {
      name: "-f",
      description:
        "⚠️ Attempt to remove the files without prompting for confirmation, regardless of the file's permissions. Nonexistent files are ignored and no error is reported. Overrides any previous -i",
      isDangerous: true,
    },
    {
      name: "-i",
      description:
        "Request confirmation before attempting to remove each file, regardless of the file's permissions. Overrides any previous -f",
    },
    {
      name: "-I",
      description:
        "Request confirmation once if more than three files are being removed or if a directory is being recursively removed",
    },
    {
      name: "-v",
      description:
        "Be verbose when deleting files, showing them as they are removed",
    },
    {
      name: "-W",
      description:
        "Attempt to undelete the named files (only for files covered by whiteouts in a union file system)",
    },
    {
      name: "-x",
      description: "When removing a hierarchy, do not cross mount points",
    },
  ],
};

export default completionSpec;
