// IntelliJ IDEA v2026.3 (Homebrew cask intellij-idea 2026.3, build 263.7307.200, 2026-11-19). Source: shared launcher CLI for all IntelliJ-platform IDEs
// (idea, clion, goland, phpstorm, pycharm, rubymine, rustrover, webstorm), read from the open-source platform at JetBrains/intellij-community tag idea/263.7307.200:
// CommandLineProcessor.kt, ApplicationStartArguments.kt, DiffApplication.kt, MergeApplication.kt, FormatterStarter.kt, InspectionMain.kt and HeadlessPluginsInstaller.java
// plus their usage texts. The JetBrains help site was not reachable and product-specific (closed-source) starters were not checked.

const filePath = (name: string, description?: string): Fig.Arg => ({
  name,
  description,
  template: "filepaths",
});

const helpOption = (names: string[]): Fig.Option => ({
  name: names,
  description: "Show help and exit",
});

export const generateIntelliJCompletionSpec = (
  name: string,
  editorName: string
): Fig.Spec => {
  return {
    name,
    description: `${editorName} cli`,
    args: {
      name: "path",
      description: "File or directory to open",
      template: "filepaths",
      isVariadic: true,
    },
    subcommands: [
      {
        name: "diff",
        description:
          "Open the diff viewer to see the differences between two specified files",
        args: [
          filePath("left-file"),
          filePath("right-file"),
          {
            ...filePath("base-file", "Optional base file for a three-way diff"),
            isOptional: true,
          },
        ],
      },
      {
        name: "merge",
        description: "Open the Merge dialog to merge the specified files",
        args: [
          filePath("left-file"),
          filePath("right-file"),
          {
            ...filePath(
              "base-file",
              "Optional common base version of the file"
            ),
            isOptional: true,
          },
          filePath("output-file", "File to save the merge result to"),
        ],
      },
      {
        name: "format",
        description: "Apply code style formatting to the specified files",
        args: {
          name: "path",
          description: "File or directory to format",
          template: "filepaths",
          isVariadic: true,
        },
        options: [
          helpOption(["-h", "-help", "--help"]),
          {
            name: ["-m", "-mask"],
            description:
              "Specify a comma-separated list of file masks that define the files to be processed",
            args: {
              name: "masks",
              description: "Comma-separated list of file masks",
            },
          },
          {
            name: ["-r", "-R"],
            description: "Process specified directories recursively",
          },
          {
            name: ["-s", "-settings"],
            description:
              "Specify the code style settings file to use for formatting",
            args: filePath("settings-file", "Code style settings .xml file"),
          },
          {
            name: "-allowDefaults",
            description:
              "Use the default code style settings when the code style is not defined for a file or a group of files",
          },
          {
            name: "-charset",
            description:
              "Preserve encoding and enforce the charset for reading and writing source files",
            args: {
              name: "charset",
              description: "Charset name, for example UTF-8",
            },
          },
          {
            name: ["-d", "-dry"],
            description: "Run the formatter in the validation mode",
          },
        ],
      },
      {
        name: "inspect",
        description: "Perform code inspection on the specified project",
        args: [
          filePath("project", "Path to the project directory or project file"),
          {
            name: "inspection-profile",
            description:
              "Inspection profile name or path to an inspection profile file",
            template: "filepaths",
          },
          {
            name: "output",
            description: "Directory to write the inspection results to",
            template: "folders",
          },
        ],
        options: [
          helpOption(["-h", "-help", "--help"]),
          {
            name: "-changes",
            description: "Run inspections only on local uncommitted changes",
          },
          {
            name: "-d",
            description:
              "Specify the full path to the subdirectory if you don't want to inspect the whole project",
            args: {
              name: "directory",
              template: "folders",
            },
          },
          {
            name: "-e",
            description:
              "Use the inspection profile that is set for the project",
          },
          {
            name: "-format",
            description:
              "Specify the format of the output file with inspection results",
            args: {
              name: "format",
              suggestions: ["xml", "json", "plain"],
            },
          },
          {
            name: "-profileName",
            description: "Name of an inspection profile defined in the project",
            args: {
              name: "profile-name",
            },
          },
          {
            name: "-profilePath",
            description: "Absolute path to an inspection profile file",
            args: filePath("profile-path"),
          },
          {
            name: "-scope",
            description: "Inspect only the files that match the scope pattern",
            args: {
              name: "scope-pattern",
            },
          },
          {
            name: "-v0",
            description: "Set the verbosity level of the output to silent",
          },
          {
            name: "-v1",
            description: "Set the verbosity level of the output to verbose",
          },
          {
            name: "-v2",
            description:
              "Set the verbosity level of the output to most verbose",
          },
        ],
      },
      {
        name: "installPlugins",
        description:
          "Install plugins by plugin ID from JetBrains Marketplace or a custom plugin repository",
        args: [
          {
            name: "plugin-id",
            description: "ID of a plugin to install",
            isVariadic: true,
          },
          {
            name: "repository-url",
            description: "URL of a custom plugin repository",
            isOptional: true,
            isVariadic: true,
          },
        ],
        options: [
          helpOption(["-h", "--help"]),
          {
            name: "--for-project",
            description:
              "Also install the plugins required by the project located at the given path",
            requiresSeparator: true,
            isRepeatable: true,
            args: {
              name: "project-path",
              template: "folders",
            },
          },
          {
            name: "--give-consent-to-use-third-party-plugins",
            description:
              "Approve installed third-party plugins automatically instead of asking at the next IDE start",
          },
        ],
      },
    ],
    options: [
      {
        name: "nosplash",
        description: `Do not show the splash screen when loading ${editorName}`,
      },
      {
        name: "dontReopenProjects",
        description: "Do not reopen projects and show the welcome screen",
      },
      {
        name: "disableNonBundledPlugins",
        description: "Do not load manually installed plugins",
      },
      {
        name: "--wait",
        description:
          "Wait for the files to be closed before returning to the command prompt",
      },
      {
        name: ["-l", "--line"],
        description: "Open the file and place the caret at the specified line",
        args: {
          name: "line",
        },
      },
      {
        name: ["-c", "--column"],
        description:
          "Open the file and place the caret at the specified column",
        args: {
          name: "column",
        },
      },
      {
        name: "--temp-project",
        description: "Open the file in a temporary project",
      },
      {
        name: ["-p", "--project"],
        description: "Open the path as a project",
      },
      {
        name: ["-e", "--edit"],
        description:
          "Open the file in LightEdit mode without loading a project",
      },
    ],
  };
};

const completionSpec = generateIntelliJCompletionSpec("idea", "IntelliJ IDEA");

export default completionSpec;
