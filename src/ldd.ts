// glibc ldd v2.44 (latest stable glibc release, glibc_2.44.orig.tar.xz from archive.ubuntu.com, 2026-11-19). Source: static read of
// elf/ldd.bash.in (the whole option parser and --help text), identical to glibc master; not run. Linux/glibc-only tool
// (on macOS use `otool -L`). The script also accepts unambiguous abbreviations of the long options and `--` to end options.
const completionSpec: Fig.Spec = {
  name: "ldd",
  description: "Print shared library dependencies",
  options: [
    {
      name: "--help",
      description: "Print this help and exit",
    },
    {
      name: "--version",
      description: "Print version information and exit",
    },
    {
      name: ["-d", "--data-relocs"],
      description: "Process data relocations",
    },
    {
      name: ["-r", "--function-relocs"],
      description: "Process data and function relocations",
    },
    {
      name: ["-u", "--unused"],
      description: "Print unused direct dependencies",
    },
    {
      name: ["-v", "--verbose"],
      description: "Print all information",
    },
  ],
  args: {
    name: "file",
    template: "filepaths",
    isVariadic: true,
  },
};
export default completionSpec;
