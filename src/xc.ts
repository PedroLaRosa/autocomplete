// xc v0.9.0 (Go proxy and Homebrew formula latest, checked 2026-11-20). Source:
// cmd/xc/main.go (flags(), runMain()) and cmd/xc/usage.txt at tag v0.9.0, every
// flag compared. Go's flag package stops parsing at the first task name, so
// -f/-d/-H are really only honoured before it; the per-task copies below
// mirror usage.txt, and -d is now also offered at the top level (xc -d task).
const fileOption: Fig.Option = {
  name: ["-f", "-file"],
  args: {
    name: "path",
    template: "filepaths",
  },
  description:
    'Specify a markdown file that contains tasks (default: "README.md")',
};
const displayOption: Fig.Option = {
  name: ["-d", "-display"],
  description: "Print the markdown code of a task rather than running it",
};
const headingOption: Fig.Option = {
  name: ["-H", "-heading"],
  args: {
    name: "heading",
    suggestions: ["Tasks", "Usage", "Examples"],
  },
  description: 'Specify the heading for xc tasks (default: "Tasks")',
};

const completionSpec: Fig.Spec = {
  name: "xc",
  description: "Run tasks from an xc-compatible markdown or org file",
  generateSpec: async (context, executeShellCommand) => {
    const options: Fig.Option[] = [fileOption, displayOption, headingOption];
    const { stdout } = await executeShellCommand({
      command: "xc",
      // Bare `xc` opens an interactive picker; -no-tty prints the list
      // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
      args: ["-no-tty"],
    });
    const subcommands: Fig.Subcommand[] = stdout
      .split("\n")
      // Task rows are indented 4 spaces; deeper rows continue a description
      .filter((line) => /^ {4}\S/.test(line))
      .map((line) =>
        line
          .trim()
          .split(/^([^ ]* )/)
          .map((s) => s.trim())
      )
      .map(([_, task, desc]) => ({
        name: task,
        description: desc,
        options,
      }));

    return {
      name: "xc",
      subcommands,
    };
  },
  options: [
    {
      name: ["-s", "-short"],
      description: "List task names in a short format",
    },
    {
      name: ["-h", "-help"],
      description: "Print this help text",
    },
    fileOption,
    displayOption,
    headingOption,
    {
      name: "-type",
      args: {
        name: "type",
        suggestions: ["md", "org"],
      },
      description:
        "Specify the task file type (default: from the file extension)",
    },
    {
      name: "-no-tty",
      description:
        "Print the task list instead of opening the interactive picker",
    },
    {
      name: ["-V", "-version"],
      description: "Show xc version",
    },
    {
      name: "-complete",
      description: "Install shell completion for xc",
    },
    {
      name: "-uncomplete",
      description: "Uninstall shell completion for xc",
    },
  ],
};
export default completionSpec;
