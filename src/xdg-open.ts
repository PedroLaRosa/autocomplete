// xdg-open v1.2.1 (latest upstream release, tag v1.2.1 of xdg-utils, 2024-02-06; confirmed against nixpkgs master; 2026-11-19).
// Source: xdg-utils 1.2.1 release tarball read statically (scripts/xdg-open.in, scripts/desc/xdg-open.xml,
// scripts/xdg-utils-common.in); the script was not executed.
const completionSpec: Fig.Spec = {
  name: "xdg-open",
  description: "Open a file or URL in the user's preferred application",
  args: {
    name: "file | URL",
    description: "Path, or a file, ftp, http or https URL",
    template: "filepaths",
  },
  options: [
    {
      name: "--help",
      description: "Show command synopsis",
    },
    {
      name: "--manual",
      description: "Show manual page",
    },
    {
      name: "--version",
      description: "Show the xdg-utils version information",
    },
  ],
};
export default completionSpec;
