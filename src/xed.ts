// xed (Xcode 27.2 man pages, 2026-11-19). Source: xed(1) from keith/xcode-man-pages, the HTML export of the man pages bundled with Xcode 27.2 (27B52); identical in 27.3 beta 2 and unchanged since Xcode 15.
// Read statically from the man page (revision March 19, 2015), not a live run on macOS.
// The man page SYNOPSIS also lists -r (no description in OPTIONS), so it is not included.
const completionSpec: Fig.Spec = {
  name: "xed",
  description: "Xcode text editor invocation tool",
  options: [
    {
      name: ["--launch", "-x"],
      description:
        "Launches Xcode opening a new empty unsaved file, without reading from standard input",
    },
    {
      name: ["--create", "-c"],
      description:
        "Creates any files in the file list that do not already exist. If used without --launch, standard input will be read and piped to the last file created",
    },
    {
      name: ["--wait", "-w"],
      description:
        "Wait for the files to be closed before exiting. xed will idle in a run loop waiting for a notification from Xcode when each file is closed, and will only terminate when all are closed",
    },
    {
      name: ["--line", "-l"],
      description: "Selects the given line in the last file opened",
      args: {
        name: "number",
        description: "The line number to select",
      },
    },
    {
      name: ["--background", "-b"],
      description:
        "Opens Xcode without activating it; the process that invoked xed remains in front",
    },
    {
      name: ["--help", "-h"],
      description: "Prints a brief summary of usage",
      exclusiveOn: ["-x", "-c", "-w", "-l", "-b", "-v"],
    },
    {
      name: ["--version", "-v"],
      description: "Prints the version number of xed",
    },
  ],
  args: {
    name: "file",
    description:
      "A list of file paths. Existing files will be opened; nonexistent files will be created only if the --create flag is passed. If no files are passed, then standard input will be read and piped into a new untitled document (unless --launch is passed)",
    isVariadic: true,
    isOptional: true,
    template: "filepaths",
  },
};
export default completionSpec;
