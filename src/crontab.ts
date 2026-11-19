// crontab (macOS 15 Vixie cron V3, apple-oss-distributions/cron cron-50, crontab.1 dated 1993-12-29, 2026-11-19). Source: crontab.1 man page and
// crontab.c (getopt "u:lerx:"). Not run on macOS. Only the options macOS crontab accepts are listed (no Linux-only -i, -n, -s).
const completionSpec: Fig.Spec = {
  name: "crontab",
  description: "Maintain crontab file for individual users",
  options: [
    {
      name: "-e",
      description:
        "Edit the current crontab using the editor specified by the VISUAL or EDITOR environment variables",
      exclusiveOn: ["-l", "-r"],
    },
    {
      name: "-l",
      description: "Display the current crontab on standard output",
      exclusiveOn: ["-e", "-r"],
    },
    {
      name: "-r",
      description: "Remove the current crontab",
      isDangerous: true,
      exclusiveOn: ["-e", "-l"],
    },
    {
      name: "-u",
      description:
        "Specify the name of the user whose crontab is to be tweaked",
      args: {
        name: "user",
      },
    },
  ],
  args: {
    name: "file",
    description:
      "File to install as the new crontab (use - to read from standard input)",
    template: "filepaths",
    isOptional: true,
  },
};

export default completionSpec;
