// Watson v2.1.0 (latest release: PyPI td-watson 2.1.0 / GitHub jazzband/Watson tag 2.1.0, 2022-05-16, 2026-11-20).
// Source: read statically (not run) from a shallow clone of jazzband/Watson: watson/cli.py (click definitions),
// watson/autocompletion.py and docs/user-guide/configuration.md. Master only differs from the 2.1.0 tag by the
// behavior of `start --at` with a running frame (no flag changes). No release since 2.1.0.

const projectIcon = "🗂";
const tagIcon = "🏷";

const nameGenerator = (
  kind: "projects" | "tags",
  icon: string,
  prefix = ""
): Fig.Generator => ({
  script: ["watson", kind],
  postProcess: (output) =>
    output
      .split("\n")
      .filter((name) => name.trim() !== "")
      .map((name) => ({ name: `${prefix}${name}`, icon })),
});

const listProjects = nameGenerator("projects", projectIcon);
const listTags = nameGenerator("tags", tagIcon);
// Tags are given as `+tag` on the command line of `start` and `add`
const listPlusTags = nameGenerator("tags", tagIcon, "+");

// The type of an object being renamed is the first argument of `watson rename`
const listRenameTargets: Fig.Generator = {
  script: (tokens) => [
    "watson",
    tokens[tokens.indexOf("rename") + 1] === "tag" ? "tags" : "projects",
  ],
  postProcess: (output, tokens) =>
    output
      .split("\n")
      .filter((name) => name.trim() !== "")
      .map((name) => ({
        name,
        icon:
          tokens[tokens.indexOf("rename") + 1] === "tag"
            ? tagIcon
            : projectIcon,
      })),
};

const listFrames: Fig.Generator = {
  script: ["watson", "log", "--json", "--reverse"],
  postProcess: (output) => {
    return JSON.parse(output).map((frame) => ({
      name: frame.id.substring(0, 7),
      icon: "⏲",
      displayName: `${frame.id.substring(0, 7)} - ${frame.project} - ${
        frame.start
      }`,
    }));
  },
};

const dateTimeArg = (description: string): Fig.Arg => ({
  name: "DATETIME",
  description,
});

const exampleDateTime = "A date and time. Ex: 2022-03-04 12:00:00";

const confirmNewOptions: Fig.Option[] = [
  {
    name: ["--confirm-new-project", "-c"],
    description: "Confirm addition of new project",
  },
  {
    name: ["--confirm-new-tag", "-b"],
    description: "Confirm creation of new tag",
  },
];

const gapOptions = (extra: string[] = []): Fig.Option[] => [
  {
    name: ["--gap", "-g"],
    description:
      "Leave gap between end time of previous project and start time of the current",
    exclusiveOn: ["--no-gap", ...extra],
  },
  {
    name: ["--no-gap", "-G"],
    description:
      "Don't leave gap between end time of previous project and start time of the current",
    exclusiveOn: ["--gap", ...extra],
  },
];

const currentOptions = (what: "report" | "output"): Fig.Option[] => [
  {
    name: ["--current", "-c"],
    description: `Include currently running frame in ${what}`,
    exclusiveOn: ["--no-current"],
  },
  {
    name: ["--no-current", "-C"],
    description: `Don't include currently running frame in ${what}`,
    exclusiveOn: ["--current"],
  },
];

const pagerOptions: Fig.Option[] = [
  {
    name: ["--pager", "-g"],
    description: "View output through a pager",
    exclusiveOn: ["--no-pager"],
  },
  {
    name: ["--no-pager", "-G"],
    description: "Don't view output through a pager",
    exclusiveOn: ["--pager"],
  },
];

const outputFormatOptions: Fig.Option[] = [
  {
    name: ["--json", "-j"],
    description: "Format output in JSON instead of plain text",
    exclusiveOn: ["--csv", "--plain"],
  },
  {
    name: ["--csv", "-s"],
    description: "Format output in CSV instead of plain text",
    exclusiveOn: ["--json", "--plain"],
  },
  {
    name: "--plain",
    description: "Format output in plain text (default)",
    exclusiveOn: ["--json", "--csv"],
    hidden: true,
  },
  ...pagerOptions,
];

const projectTagOptions = (verb: "Logs" | "Reports"): Fig.Option[] => [
  {
    name: ["--project", "-p"],
    description: `${verb} activity only for the given project. You can add other projects by using this option several times`,
    isRepeatable: true,
    args: {
      name: "PROJECT",
      generators: listProjects,
    },
  },
  {
    name: ["--tag", "-T"],
    description: `${verb} activity only for frames containing the given tag. You can add several tags by using this option multiple times`,
    isRepeatable: true,
    args: {
      name: "TAG",
      generators: listTags,
    },
  },
];

const ignoreOptions = (verb: "Logs" | "Reports"): Fig.Option[] => [
  {
    name: "--ignore-project",
    description: `${verb} activity for all projects but the given ones. You can ignore several projects by using the option multiple times. Any given project will be ignored`,
    isRepeatable: true,
    args: {
      name: "PROJECT",
      generators: listProjects,
    },
  },
  {
    name: "--ignore-tag",
    description: `${verb} activity for all tags but the given ones. You can ignore several tags by using the option multiple times. Any given tag will be ignored`,
    isRepeatable: true,
    args: {
      name: "TAG",
      generators: listTags,
    },
  },
];

// Shortcuts for common timespans, mutually exclusive with each other
const periodShortcuts: { names: string[]; description: string }[] = [
  {
    names: ["--year", "-y"],
    description: "Reports activity for the current year",
  },
  {
    names: ["--month", "-m"],
    description: "Reports activity for the current month",
  },
  {
    names: ["--luna", "-l"],
    description: "Reports activity for the current moon cycle",
  },
  {
    names: ["--week", "-w"],
    description: "Reports activity for the current week",
  },
  {
    names: ["--day", "-d"],
    description: "Reports activity for the current day",
  },
  { names: ["--all", "-a"], description: "Reports all activities" },
];

// `withRange`: the shortcuts also exclude `--from` and `--to` (`report` only)
const periodOptions = (withRange: boolean): Fig.Option[] =>
  periodShortcuts.map(({ names, description }) => ({
    name: names,
    description,
    exclusiveOn: [
      ...periodShortcuts.map((p) => p.names[0]).filter((n) => n !== names[0]),
      ...(withRange ? ["--from", "--to"] : []),
    ],
  }));

const rangeOptions = (
  what: "log" | "report",
  exclusiveWithPeriods: boolean
): Fig.Option[] => {
  const exclusive = exclusiveWithPeriods
    ? { exclusiveOn: periodShortcuts.map((p) => p.names[0]) }
    : {};
  return [
    {
      name: ["--from", "-f"],
      description: `The date from when the ${what} should start. Defaults to seven days ago`,
      ...exclusive,
      args: dateTimeArg(exampleDateTime),
    },
    {
      name: ["--to", "-t"],
      description: `The date at which the ${what} should stop (inclusive). Defaults to tomorrow`,
      ...exclusive,
      args: dateTimeArg(exampleDateTime),
    },
  ];
};

const atOption = (
  verb: "Start" | "Stop",
  exclusive: string[] = []
): Fig.Option => ({
  name: "--at",
  description: `${verb} frame at this time. Must be in (YYYY-MM-DDT)?HH:MM(:SS)? format`,
  ...(exclusive.length > 0 && { exclusiveOn: exclusive }),
  args: dateTimeArg("The time. Ex: 2022-03-04T12:00:00 or 12:00"),
});

const completionSpec: Fig.Spec = {
  name: "watson",
  description: "A wonderful CLI to track your time",
  subcommands: [
    {
      name: "add",
      description:
        "Add time to a project with tag(s) that was not tracked live",
      args: {
        name: "PROJECT [+TAG...]",
        description: "The project, followed by its tags as +tag",
        isVariadic: true,
        generators: [listProjects, listPlusTags],
      },
      options: [
        {
          name: ["--from", "-f"],
          description: "Date and time of start of tracked activity",
          isRequired: true,
          args: dateTimeArg(exampleDateTime),
        },
        {
          name: ["--to", "-t"],
          description: "Date and time of end of tracked activity",
          isRequired: true,
          args: dateTimeArg(exampleDateTime),
        },
        ...confirmNewOptions,
      ],
    },
    {
      name: "aggregate",
      description:
        "Display a report of the time spent on each project aggregated by day",
      options: [
        ...currentOptions("report"),
        ...rangeOptions("report", false),
        ...projectTagOptions("Reports"),
        ...outputFormatOptions,
      ],
    },
    {
      name: "cancel",
      description:
        "Cancel the last call to the start command. The time will not be recorded",
    },
    {
      name: "config",
      description: "Get and set configuration options",
      options: [
        {
          name: ["--edit", "-e"],
          description: "Edit the configuration file with an editor",
        },
      ],
      args: [
        {
          name: "SECTION.OPTION",
          isOptional: true,
          suggestions: [
            {
              name: "backend.url",
              description:
                "This is the API root url of your repository, e.g. https://my.server.com/api/",
            },
            {
              name: "backend.token",
              description:
                "To authenticate watson as an API client, once generated, you will need to set up your API token in your configuration, e.g. 7e329263e329",
            },
            {
              name: "options.confirm_new_project",
              description:
                "If true, the user will be asked for confirmation before creating a new project. The option can be overriden in the command line with --confirm-new-project flag. Default: false",
            },
            {
              name: "options.confirm_new_tag",
              description:
                "If true, the user will be asked for confirmation before creating a new tag. The option can be overriden in the command line with --confirm-new-tag flag. Default: false",
            },
            {
              name: "options.date_format",
              description:
                "Globally configure how dates should be formatted. All python’s strftime directives are supported. Default: %Y.%m.%d",
            },
            {
              name: "options.log_current",
              description:
                "If true, the output of the log command will include the currently running frame (if any) by default. The option can be overridden on the command line with the -c/-C resp. --current/--no-current flags. Default: false",
            },
            {
              name: "options.pager",
              description:
                "If true, the output of the log and report command will be run through a pager by default. The option can be overridden on the command line with the -g/-G or --pager/--no-pager flags. If other commands output in colour, but log or report do not, try disabling the pager. Default: true",
            },
            {
              name: "options.report_current",
              description:
                "If true, the output of the report command will include the currently running frame (if any) by default. The option can be overridden on the command line with the -c/-C resp. --current/--no-current flags. Default: false",
            },
            {
              name: "options.reverse_log",
              description:
                "If true, the output of the log command will reverse the order of the days to display the latest day’s entries on top and the oldest day’s entries at the bottom. The option can be overridden on the command line with the -r/-R resp. --reverse/--no-reverse flags. Default: true",
            },
            {
              name: "options.stop_on_start",
              description:
                "If true, starting a new project will stop running projects. Default false",
            },
            {
              name: "options.stop_on_restart",
              description:
                "Similar to the options.stop_on_start option, but for the restart command. Default: false",
            },
            {
              name: "options.time_format",
              description:
                "Globally configure how time should be formatted. All python’s strftime directives are supported. Default: %H:%M:%S%z",
            },
            {
              name: "options.week_start",
              description:
                "Globally configure which day corresponds to the start of a week. Allowable values are monday, tuesday, wednesday, thursday, friday, saturday, and sunday. Default: monday",
            },
          ],
        },
        {
          name: "VALUE",
          description: "The value to set. Omit it to display the current value",
          isOptional: true,
        },
      ],
    },
    {
      name: "edit",
      description: "Edit a frame",
      args: {
        name: "ID",
        description:
          "Frame ID or position (ex: -2 for the second-to-last frame). Defaults to the current frame, or else the last recorded one",
        isOptional: true,
        generators: listFrames,
      },
      options: confirmNewOptions,
    },
    {
      name: "frames",
      description: "Display the list of all frame IDs",
    },
    {
      name: "help",
      description: "Display help information",
      args: {
        name: "COMMAND",
        isOptional: true,
      },
    },
    {
      name: "log",
      description: "Display each recorded session during the given timespan",
      options: [
        ...currentOptions("output"),
        {
          name: ["--reverse", "-r"],
          description: "Reverse the order of the days in output",
          exclusiveOn: ["--no-reverse"],
        },
        {
          name: ["--no-reverse", "-R"],
          description: "Don't reverse the order of the days in output",
          exclusiveOn: ["--reverse"],
        },
        ...rangeOptions("log", false),
        ...periodOptions(false),
        ...projectTagOptions("Logs"),
        ...ignoreOptions("Logs"),
        ...outputFormatOptions,
      ],
    },
    {
      name: "merge",
      description:
        "Perform a merge of the existing frames with a conflicting frames file.  When storing the frames on a file hosting service, there is the possibility that the frame file goes out-of-sync due to one or more of the connected clients going offline. This can cause the frames to diverge",
      args: {
        name: "FRAMES_WITH_CONFLICT",
        description: "Path to the conflicting frames file",
        template: "filepaths",
      },
      options: [
        {
          name: ["-f", "--force"],
          description:
            "If specified, then the merge will automatically be performed",
        },
      ],
    },
    {
      name: "projects",
      description: "Display the list of all the existing projects",
    },
    {
      name: "remove",
      description:
        "Remove a frame. You can specify the frame either by id or by position (ex: -1 for the last frame)",
      args: {
        name: "ID",
        generators: listFrames,
      },
      options: [
        {
          name: ["-f", "--force"],
          description: "Don't ask for confirmation",
        },
      ],
    },
    {
      name: "rename",
      description: "Rename a project or tag",
      args: [
        {
          name: "TYPE",
          description: "Project or tag",
          suggestions: [
            {
              name: "project",
              icon: projectIcon,
            },
            {
              name: "tag",
              icon: tagIcon,
            },
          ],
        },
        {
          name: "OLD_NAME",
          generators: listRenameTargets,
        },
        {
          name: "NEW_NAME",
        },
      ],
    },
    {
      name: "report",
      description: "Display a report of the time spent on each project",
      options: [
        ...currentOptions("report"),
        ...rangeOptions("report", true),
        ...periodOptions(true),
        ...projectTagOptions("Reports"),
        ...ignoreOptions("Reports"),
        ...outputFormatOptions,
      ],
    },
    {
      name: "restart",
      description: "Restart monitoring time for a previously stopped project",
      args: {
        name: "ID",
        description:
          "Frame ID or position (ex: -2 for the second-to-last frame). Defaults to the last recorded frame",
        isOptional: true,
        generators: listFrames,
      },
      options: [
        atOption("Start", ["--gap", "--no-gap"]),
        ...gapOptions(["--at"]),
        {
          name: ["--stop", "-s"],
          description: "Stop an already running project",
          exclusiveOn: ["--no-stop"],
        },
        {
          name: ["--no-stop", "-S"],
          description: "Don't stop an already running project",
          exclusiveOn: ["--stop"],
        },
      ],
    },
    {
      name: "start",
      description:
        "Start monitoring time for the given project. You can add tags indicating more specifically what you are working on with +tag",
      args: {
        name: "PROJECT [+TAG...]",
        description: "The project, followed by its tags as +tag",
        isVariadic: true,
        generators: [listProjects, listPlusTags],
      },
      options: [
        atOption("Start", ["--gap", "--no-gap"]),
        ...gapOptions(["--at"]),
        ...confirmNewOptions,
      ],
    },
    {
      name: "status",
      description:
        "Display when the current project was started and the time spent since",
      options: [
        {
          name: ["--project", "-p"],
          description: "Only output project",
          exclusiveOn: ["--tags", "--elapsed"],
        },
        {
          name: ["--tags", "-t"],
          description: "Only show tags",
          exclusiveOn: ["--project", "--elapsed"],
        },
        {
          name: ["--elapsed", "-e"],
          description: "Only show time elapsed",
          exclusiveOn: ["--project", "--tags"],
        },
      ],
    },
    {
      name: "stop",
      description: "Stop monitoring time for the current project",
      options: [atOption("Stop")],
    },
    {
      name: "sync",
      description: "Get the frames from the server and push the new ones",
    },
    {
      name: "tags",
      description: "Display the list of all the tags",
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help for watson",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show the version for watson",
    },
    {
      name: "--color",
      description: "Color output",
      exclusiveOn: ["--no-color"],
    },
    {
      name: "--no-color",
      description: "No color output",
      exclusiveOn: ["--color"],
    },
  ],
};
export default completionSpec;
