// shasum v6.04 (Digest::SHA 6.04 as bundled in Perl blead cpan/Digest-SHA and shipped as /usr/bin/shasum in Ubuntu 24.04, 2026-11-19). Source: shasum script GetOptions table + `shasum --help` output (bundling: b|binary c|check t|text a|algorithm=i s|status w|warn q|quiet h|help v|version 0|01 U|UNIVERSAL tag strict ignore-missing); spec already matched upstream, so no options changed and only this header was added (checked all 15 option names, the -a values 1/224/256/384/512/512224/512256 and the file argument against both sources). CPAN/metacpan could not be reached, so 6.04 is confirmed only from the Perl core copy; macOS ships the same Perl script (possibly an older Digest::SHA) and was not run.
const completionSpec: Fig.Spec = {
  name: "shasum",
  description: "Print or Check SHA Checksums",
  args: {
    name: "FILE",
    description:
      "Files to compute/check SHA checksums. With no FILE, or when FILE is -, read standard input",
    template: "filepaths",
    isOptional: true,
    isVariadic: true,
  },
  options: [
    {
      name: ["-a", "--algorithm"],
      description: "Select SHA algorithm",
      args: {
        suggestions: [
          { name: "1", description: "SHA-1 (default)" },
          { name: "224", description: "SHA-224" },
          { name: "256", description: "SHA-256" },
          { name: "384", description: "SHA-384" },
          { name: "512", description: "SHA-512" },
          { name: "512224", description: "SHA-512/224" },
          { name: "512256", description: "SHA-512/256" },
        ],
      },
    },
    {
      name: ["-b", "--binary"],
      description: "Read in binary mode",
    },
    {
      name: ["-c", "--check"],
      description: "Read SHA sums from the FILEs and check them",
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
      name: ["-U", "--UNIVERSAL"],
      description:
        "Read in Universal Newlines mode - produces same digest on Windows/Unix/Mac",
    },
    {
      name: ["-0", "--01"],
      description:
        "Read in BITS mode - ASCII '0' as 0-bit, ASCII '1' as 1-bit, others ignored",
    },
    {
      name: "--ignore-missing",
      description: "Don't fail or report status for missing files",
    },
    {
      name: ["-q", "--quiet"],
      description: "Don't print OK for each successfully verified file",
    },
    {
      name: ["-s", "--status"],
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
      name: ["-h", "--help"],
      description: "Display help and exit",
    },
    {
      name: ["-v", "--version"],
      description: "Output version information and exit",
    },
  ],
};

export default completionSpec;
