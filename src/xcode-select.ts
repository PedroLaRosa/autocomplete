// xcode-select (Xcode 27.2 (27B52) bundled man page, 2026-11-19). Source: xcode-select(1) HTML export from
// keith/xcode-man-pages at the Xcode 27.2 commit (page last changed in Xcode 16.0 beta 1), read statically; not run on macOS.
const completionSpec: Fig.Spec = {
  name: "xcode-select",
  description: "Manage the active developer directory for Xcode and BSD tools",
  options: [
    {
      name: ["-h", "--help"],
      description: "Print the usage message",
    },
    {
      name: ["-p", "--print-path"],
      description:
        "Print the path to the currently selected developer directory",
    },
    {
      name: ["-s", "--switch"],
      description:
        "Set the active developer directory to the given path (requires superuser)",
      insertValue: "-s ",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--install",
      description:
        "Open a dialog to request installation of the command line developer tools",
    },
    {
      name: ["-v", "--version"],
      description: "Print xcode-select version information",
    },
    {
      name: ["-r", "--reset"],
      description:
        "Unset any user-specified developer directory and use the default search mechanism (requires superuser)",
    },
  ],
};

export default completionSpec;
