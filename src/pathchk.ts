// pathchk (macOS BSD, pathchk.1 dated 2010-05-01, apple-oss-distributions/file_cmds-479, 2026-11-19). Source: pathchk.1 + pathchk.c from Apple's OSS mirror (not run on macOS)
// Options: -p (portability checks, also rejects components starting with a hyphen) and -P
const completionSpec: Fig.Spec = {
  name: "pathchk",
  description: "Check whether pathnames are valid or portable",
  options: [
    {
      name: "-p",
      description:
        "Perform portability checks: write a diagnostic if a pathname is longer than _POSIX_PATH_MAX (255) bytes, has a component longer than _POSIX_NAME_MAX (14) bytes, has a component starting with a hyphen, or contains a character outside the portable filename character set",
    },
    {
      name: "-P",
      description:
        "In addition to the default or -p checks, write a diagnostic for each pathname that is empty or has a component that starts with a hyphen",
    },
  ],
  args: {
    name: "pathname",
    description: "Pathname(s) to check",
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
