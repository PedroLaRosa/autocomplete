// lp (macOS 26 CUPS lp, apple-oss-distributions/cups tag cups-522.4 (Apple fork based on CUPS 2.3.x), 2026-11-19). Source: man/lp.1 and systemv/lp.c usage text and option parser; not run on macOS.
// Cross-checked against upstream OpenPrinting CUPS v2.4.20 man/lp.1 (only difference: -o print-as-raster, not in Apple's CUPS). Legacy options that lp parses but ignores with a warning (-f, -S, -T, -y) and the undocumented aliases -w (= -m) and -p (= -q) are omitted.
// Fixed from the previous spec: -H (hold/immediate/restart/resume/HH:MM) and -P (page-list) had swapped argument names and suggestions.
const prioritySuggestions: (string | Fig.Suggestion)[] = Array.from(
  { length: 100 },
  (_, i) => i + 1
).map((item) => item.toString());

const holdSuggestions: Fig.Suggestion[] = [
  { name: "hold", description: "Hold the job indefinitely" },
  { name: "immediate", description: "Print the job as soon as possible" },
  {
    name: "restart",
    description: "Reprint a completed job (use with -i)",
  },
  { name: "resume", description: "Resume a held job (use with -i)" },
];

const jobOptionSuggestions: Fig.Suggestion[] = [
  {
    name: "job-sheets=standard",
    description: "Print a banner page with the job",
  },
  {
    name: "job-sheets=classified",
    description: "Print a classified banner page",
  },
  {
    name: "job-sheets=confidential",
    description: "Print a confidential banner page",
  },
  { name: "job-sheets=secret", description: "Print a secret banner page" },
  {
    name: "job-sheets=topsecret",
    description: "Print a top secret banner page",
  },
  {
    name: "job-sheets=unclassified",
    description: "Print an unclassified banner page",
  },
  { name: "media=a4", description: "Use A4 paper" },
  { name: "media=letter", description: "Use Letter paper" },
  { name: "media=legal", description: "Use Legal paper" },
  { name: "number-up=2", description: "Print 2 input pages per output page" },
  { name: "number-up=4", description: "Print 4 input pages per output page" },
  { name: "number-up=6", description: "Print 6 input pages per output page" },
  { name: "number-up=9", description: "Print 9 input pages per output page" },
  {
    name: "number-up=16",
    description: "Print 16 input pages per output page",
  },
  {
    name: "orientation-requested=3",
    description: "Print in portrait orientation",
  },
  {
    name: "orientation-requested=4",
    description: "Print in landscape (rotated 90 degrees counter-clockwise)",
  },
  {
    name: "orientation-requested=5",
    description: "Print in landscape (rotated 90 degrees clockwise)",
  },
  {
    name: "orientation-requested=6",
    description: "Print in reverse portrait (rotated 180 degrees)",
  },
  { name: "print-quality=3", description: "Draft output quality" },
  { name: "print-quality=4", description: "Normal output quality" },
  { name: "print-quality=5", description: "Best output quality" },
  { name: "sides=one-sided", description: "Print on one side of the paper" },
  {
    name: "sides=two-sided-long-edge",
    description: "Print on both sides of the paper for portrait output",
  },
  {
    name: "sides=two-sided-short-edge",
    description: "Print on both sides of the paper for landscape output",
  },
];

const completionSpec: Fig.Spec = {
  name: "lp",
  description: "Print files",
  options: [
    {
      name: "-E",
      description: "Force encryption when connecting to the server",
    },
    {
      name: "-U",
      description: "Specify the username to use when connecting to the server",
      args: {
        name: "username",
      },
    },
    {
      name: "-c",
      description:
        "Copy the print file to the spool directory before printing (accepted for backwards compatibility only, CUPS always does this)",
    },
    {
      name: "-d",
      description: "Print files to the named printer",
      args: {
        name: "destination",
      },
    },
    {
      name: "-h",
      description: "Choose an alternate server",
      args: {
        name: "hostname[:port]",
      },
    },
    {
      name: "-i",
      description: "Specify an existing job to modify",
      args: {
        name: "job-id",
      },
    },
    {
      name: "-m",
      description: "Send an email when the job is completed",
    },
    {
      name: "-n",
      description: "Set the number of copies to print",
      args: {
        name: "copies",
      },
    },
    {
      name: "-o",
      description:
        "Set a job option, for example media, sides, number-up, orientation-requested, print-quality or job-sheets",
      isRepeatable: true,
      args: {
        name: "name=value",
        suggestions: jobOptionSuggestions,
      },
    },
    {
      name: "-q",
      description:
        "Set the job priority from 1 (lowest) to 100 (highest), the default priority is 50",
      args: {
        name: "priority",
        suggestions: prioritySuggestions,
        default: "50",
      },
    },
    {
      name: "-s",
      description: "Do not report the resulting job IDs (silent mode)",
    },
    {
      name: "-t",
      description: "Set the job name",
      args: {
        name: "name",
      },
    },
    {
      name: "-H",
      description:
        "Specify when the job should be printed: immediately, held indefinitely, or held until the given UTC (not local) time",
      args: {
        name: "hh:mm",
        description:
          "Time (HH:MM, UTC) to hold the job until, or hold, immediate, restart, resume",
        suggestions: holdSuggestions,
      },
    },
    {
      name: "-P",
      description:
        "Specify which output pages to print, for example 1,3-5,16 (numbering follows output pages, so options like number-up affect it)",
      args: {
        name: "page-list",
      },
    },
    {
      name: "--",
      description: "Mark the end of options, to print a file starting with -",
    },
    {
      name: "--help",
      description: "Show help for lp",
    },
  ],
  args: {
    template: "filepaths",
    suggestCurrentToken: true,
    description: "Filepath you want to print",
    isOptional: true,
    isVariadic: true,
  },
};
export default completionSpec;
