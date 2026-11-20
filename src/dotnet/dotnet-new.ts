import { nugetSearchGenerator } from "./shared";

const searchGenerator = nugetSearchGenerator("Template");

const interactiveOption: Fig.Option = {
  name: "--interactive",
  description:
    "Allows the command to stop and wait for user input or action (for example to complete authentication)",
};

const addSourceOption: Fig.Option = {
  name: ["--add-source", "--nuget-source"],
  description: "Specifies a NuGet source to use",
  isRepeatable: true,
  args: {
    name: "nuget-source",
  },
};

const ignoreConstraintsOption: Fig.Option = {
  name: "--ignore-constraints",
  description:
    "Disables checking if the template meets the constraints to be run",
};

const columnsOptions: Fig.Option[] = [
  {
    name: "--columns-all",
    description: "Displays all columns in the output",
  },
  {
    name: "--columns",
    description: "Specifies the columns to display in the output",
    args: {
      name: "columns",
      suggestions: ["author", "language", "type", "tags"],
    },
  },
];

const languageSuggestions = ["C#", "F#", "VB"];

// Filters for `dotnet new list` and `dotnet new search`.
const filterOptions: Fig.Option[] = [
  {
    name: "--author",
    description: "Filters the templates based on the template author",
    args: {
      name: "author",
    },
  },
  {
    name: ["-lang", "--language"],
    description: "Filters templates based on language",
    args: {
      name: "language",
      suggestions: languageSuggestions,
    },
  },
  {
    name: "--type",
    description:
      "Filters templates based on available types. Predefined values are 'project' and 'item'",
    args: {
      name: "type",
      suggestions: ["project", "item"],
    },
  },
  {
    name: "--tag",
    description: "Filters the templates based on the tag",
    args: {
      name: "tag",
    },
  },
];

const packageFilterOption: Fig.Option = {
  name: "--package",
  description: "Filters the templates based on NuGet package ID",
  args: {
    name: "package",
  },
};

const outputOption: Fig.Option = {
  name: ["-o", "--output"],
  description: "Location to place the generated output",
  args: {
    name: "output_directory",
    template: "folders",
  },
};

const projectOption: Fig.Option = {
  name: "--project",
  description: "The project that should be used for context evaluation",
  args: {
    name: "project",
    template: "filepaths",
  },
};

// Options that apply when a template is instantiated.
const instantiateOptions: Fig.Option[] = [
  outputOption,
  {
    name: ["-n", "--name"],
    description:
      "The name for the output being created. If no name is specified, the name of the output directory is used",
    args: {
      name: "output_name",
    },
  },
  {
    name: "--dry-run",
    description:
      "Displays a summary of what would happen if the given command line were run if it would result in a template creation",
  },
  {
    name: "--force",
    description:
      "Forces content to be generated even if it would change existing files",
  },
  {
    name: "--no-update-check",
    description:
      "Disables checking for the template package updates when instantiating a template",
  },
  projectOption,
];

const templateArg: Fig.Arg = {
  name: "template",
  description:
    "The template to instantiate when the command is invoked. Each template might have specific options you can pass",
  generators: {
    script: ["dotnet", "new", "--list"],
    postProcess(out) {
      const lines = out.split("\n").slice(4);

      return lines.map<Fig.Suggestion>((line) => {
        const argRegex = /(([a-zA-Z \.\[\]#,/][^ ]{1,})+)/g;
        const [templateName, shortName, language, tags] = line
          .match(argRegex)
          .map((match) => match.trim());

        return {
          insertValue: shortName,
          name: templateName,
          description: tags,
        };
      });
    },
  },
};

const installArgs: Fig.Arg = {
  name: "package",
  description:
    "NuGet package ID or path to folder or NuGet package to install. To install the NuGet package of certain version, use <package ID>::<version>",
  isVariadic: true,
  debounce: true,
  generators: searchGenerator,
};

const uninstallArgs: Fig.Arg = {
  name: "package",
  description:
    "NuGet package ID (without version) or path to folder to uninstall. If command is specified without the argument, it lists all the template packages installed",
  isOptional: true,
  isVariadic: true,
};

const installForceOption: Fig.Option = {
  name: "--force",
  description:
    "Allows installing template packages from the specified sources even if they would override a template package from another source",
};

const checkOnlyOption: Fig.Option = {
  name: ["--check-only", "--dry-run"],
  description:
    "Only checks for updates and display the template packages to be updated without applying update",
};

const commands: Fig.Subcommand[] = [
  {
    name: "create",
    description:
      "Instantiates a template with given short name. An alias of 'dotnet new <template name>'",
    args: templateArg,
    options: instantiateOptions,
  },
  {
    name: "install",
    description: "Installs a template package",
    args: installArgs,
    options: [interactiveOption, addSourceOption, installForceOption],
  },
  {
    name: "uninstall",
    description: "Uninstalls a template package",
    args: uninstallArgs,
  },
  {
    name: "update",
    description:
      "Checks the currently installed template packages for update, and install the updates",
    options: [interactiveOption, addSourceOption, checkOnlyOption],
  },
  {
    name: "search",
    description: "Searches for the templates on NuGet.org",
    args: {
      name: "template-name",
      description:
        "If specified, only the templates matching the name will be shown",
      isOptional: true,
    },
    options: [
      ...filterOptions,
      packageFilterOption,
      ignoreConstraintsOption,
      ...columnsOptions,
    ],
  },
  {
    name: "list",
    description:
      "Lists templates containing the specified template name. If no name is specified, lists all templates",
    args: {
      name: "template-name",
      description:
        "If specified, only the templates matching the name will be shown",
      isOptional: true,
    },
    options: [
      ...filterOptions,
      ignoreConstraintsOption,
      outputOption,
      projectOption,
      ...columnsOptions,
    ],
  },
  {
    name: "details",
    description:
      "Provides the details for specified template package. The command checks if the package is installed locally, if it was not found, it searches the configured NuGet feeds",
    args: {
      name: "package-identifier",
      description: "Package identifier",
    },
    options: [interactiveOption, addSourceOption],
  },
  // Legacy option-style commands. They are hidden in the CLI help but still accepted.
  {
    name: ["-l", "--list"],
    description: "Lists templates (legacy form of 'dotnet new list')",
    deprecated: true,
    args: {
      name: "template-name",
      isOptional: true,
    },
    options: [
      ...filterOptions,
      ignoreConstraintsOption,
      outputOption,
      projectOption,
      ...columnsOptions,
    ],
  },
  {
    name: "--search",
    description:
      "Searches for templates on NuGet.org (legacy form of 'dotnet new search')",
    deprecated: true,
    args: {
      name: "template-name",
      isOptional: true,
    },
    options: [
      ...filterOptions,
      packageFilterOption,
      ignoreConstraintsOption,
      ...columnsOptions,
    ],
  },
  {
    name: ["-i", "--install"],
    description:
      "Installs a template package (legacy form of 'dotnet new install')",
    deprecated: true,
    args: installArgs,
    options: [interactiveOption, addSourceOption, installForceOption],
  },
  {
    name: ["-u", "--uninstall"],
    description:
      "Uninstalls a template package (legacy form of 'dotnet new uninstall')",
    deprecated: true,
    args: uninstallArgs,
  },
  {
    name: "--update-check",
    description:
      "Checks the currently installed template packages for updates (legacy form of 'dotnet new update --check-only')",
    deprecated: true,
    options: [interactiveOption, addSourceOption],
  },
  {
    name: "--update-apply",
    description:
      "Checks the currently installed template packages for update, and installs the updates (legacy form of 'dotnet new update')",
    deprecated: true,
    options: [interactiveOption, addSourceOption],
  },
];

const completionSpec: Fig.Spec = {
  name: "new",
  // The dotnet CLI does not bundle single-dash flags (-lp, -bl, -lang, ...).
  parserDirectives: { flagsArePosixNoncompliant: true },
  description: "Template Instantiation Commands for .NET CLI",
  args: templateArg,
  options: [
    ...instantiateOptions,
    {
      name: ["-lang", "--language"],
      description: "The language of the template to create",
      args: {
        name: "language",
        suggestions: languageSuggestions,
      },
    },
    {
      name: ["-v", "--verbosity"],
      description:
        "Sets the verbosity level. Allowed values are q[uiet], m[inimal], n[ormal], and diag[nostic]",
      args: {
        name: "level",
        suggestions: ["quiet", "minimal", "normal", "diagnostic"],
      },
    },
    {
      name: ["-d", "--diagnostics"],
      description: "Enables diagnostic output",
    },
    {
      name: ["-?", "-h", "--help"],
      description:
        "Prints out help for the command. It can be invoked for the dotnet new command itself or for any template. For example, dotnet new mvc --help",
    },
  ],
  subcommands: commands,
};

export default completionSpec;
