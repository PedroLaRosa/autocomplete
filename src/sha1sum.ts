// sha1sum v9.12 (GNU coreutils, latest tag v9.12 from the coreutils/coreutils git mirror and Homebrew coreutils 9.12, 2026-11-19).
// Source: src/cksum.c usage() and long_options (sha1sum is a thin wrapper that runs cksum in legacy mode with algorithm sha1; legacy_long_options) at v9.12, checked against `sha1sum --help` of the local 9.4 build.
// No option changes between 9.4 and 9.12. sha1sum is not part of macOS (use shasum / `sha1`); this spec describes the GNU tool.
const completionSpec: Fig.Spec = {
  name: "sha1sum",
  description: "Print or check SHA1 (160-bit) checksums",
  options: [
    {
      name: ["-b", "--binary"],
      description: "Read in binary mode",
    },
    {
      name: ["-c", "--check"],
      description: "Read checksums from the FILEs and check them",
    },
    {
      name: "--tag",
      description: "Create a BSD-style checksum",
    },
    {
      name: ["-t", "--text"],
      description: "Read in text mode (default)",
    },
    {
      name: ["-z", "--zero"],
      description:
        "End each output line with NUL, not newline, and disable file name escaping",
    },
    {
      name: "--ignore-missing",
      description: "Don't fail or report status for missing files",
    },
    {
      name: "--quiet",
      description: "Don't print OK for each successfully verified file",
    },
    {
      name: "--status",
      description: "Don't output anything, status code shows success",
    },
    {
      name: "--strict",
      description: "Exit non-zero for improperly formatted checksum lines",
    },
    {
      name: ["-w", "--warn"],
      description: "Warn about improperly formatted checksum lines",
    },
    {
      name: "--help",
      description: "Output help message and exit",
    },
    {
      name: "--version",
      description: "Output version information and exit",
    },
  ],
  args: {
    name: "file",
    description: "With no FILE, or when FILE is -, read standard input",
    template: "filepaths",
    suggestions: ["-"],
    isOptional: true,
    isVariadic: true,
  },
};
export default completionSpec;
