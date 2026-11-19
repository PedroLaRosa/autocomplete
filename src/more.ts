// util-linux more v2.42.4 (gh api util-linux tags, 2026-11-19). Source: text-utils/more.c usage() and longopts at v2.42.4
// ponytail: macOS /usr/bin/more is less 581.2 in more mode (see less.ts); -<number>, +<number> and +/<pattern> are left out
const completionSpec: Fig.Spec = {
  name: "more",
  description: "Display the contents of a file in a terminal",
  options: [
    {
      name: ["-d", "--silent"],
      description:
        "Prompt with '[Press space to continue, 'q' to quit.]', and display '[Press 'h' for instructions.]' instead of ringing the bell when an illegal key is pressed",
    },
    {
      name: ["-f", "--logical"],
      description: "Count logical lines, rather than screen lines",
    },
    {
      name: ["-l", "--no-pause"],
      description: "Do not pause after any line containing a ^L (form feed)",
    },
    {
      name: ["-c", "--print-over"],
      description:
        "Do not scroll; paint each screen from the top, clearing the remainder of each line as it is displayed",
    },
    {
      name: ["-p", "--clean-print"],
      description:
        "Do not scroll; clear the whole screen and then display the text",
    },
    {
      name: ["-e", "--exit-on-eof"],
      description: "Exit on end-of-file",
    },
    {
      name: ["-s", "--squeeze"],
      description: "Squeeze multiple blank lines into one",
    },
    {
      name: ["-u", "--plain"],
      description:
        "Suppress underlining and bold (silently ignored for backwards compatibility)",
    },
    {
      name: ["-n", "--lines"],
      description: "Specify the number of lines per screenful",
      args: { name: "number" },
    },
    {
      name: ["-h", "--help"],
      description: "Display help text",
    },
    {
      name: ["-V", "--version"],
      description: "Display version information",
    },
  ],
  args: {
    isVariadic: true,
    template: "filepaths",
  },
};

export default completionSpec;
