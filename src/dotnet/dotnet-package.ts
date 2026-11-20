import {
  configFileGenerator,
  interactiveOption,
  nugetSearchGenerator,
  packageAddSubcommand,
  packageListSubcommand,
  packageRemoveSubcommand,
  verbosityOption,
} from "./shared";

const nugetConfigFileOption: Fig.Option = {
  name: "--configfile",
  description:
    "The NuGet configuration file. If specified, only the settings from this file will be used. If not specified, the hierarchy of configuration files from the current directory will be used. For more information, see https://docs.microsoft.com/nuget/consume-packages/configuring-nuget-behavior",
  args: {
    name: "file",
    generators: configFileGenerator,
  },
};

const completionSpec: Fig.Spec = {
  name: "package",
  description: "NuGet package commands for a project or solution",
  subcommands: [
    {
      name: "search",
      description:
        "Searches one or more package sources for packages that match a search term. If no sources are specified, all sources defined in the NuGet.Config are used",
      args: {
        name: "SearchTerm",
        description:
          "Search term to filter package names, descriptions, and tags. Used as a literal value. Example: `dotnet package search some.package`. See also `--exact-match`",
        isOptional: true,
      },
      options: [
        {
          name: "--source",
          description:
            "The package source to search. You can pass multiple `--source` options to search multiple package sources. Example: `--source https://api.nuget.org/v3/index.json`",
          isRepeatable: true,
          args: {
            name: "source",
          },
        },
        {
          name: "--take",
          description: "Number of results to return. Default 20",
          args: {
            name: "take",
          },
        },
        {
          name: "--skip",
          description:
            "Number of results to skip, to allow pagination. Default 0",
          args: {
            name: "skip",
          },
        },
        {
          name: "--exact-match",
          description:
            "Require that the search term exactly match the name of the package. Causes `--take` and `--skip` options to be ignored",
        },
        interactiveOption,
        {
          name: "--prerelease",
          description: "Include prerelease packages",
        },
        nugetConfigFileOption,
        {
          name: "--format",
          description:
            "Format the output accordingly. The default value is `table`",
          args: {
            name: "format",
            suggestions: ["table", "json"],
          },
        },
        {
          name: "--verbosity",
          description:
            "Display this amount of details in the output. The default is `normal`",
          args: {
            name: "verbosity",
            suggestions: ["normal", "minimal", "detailed"],
          },
        },
      ],
    },
    packageAddSubcommand("add", ["add"]),
    packageListSubcommand("list", true),
    packageRemoveSubcommand("remove", true),
    {
      name: "update",
      description: "Update referenced packages in a project or solution",
      args: {
        name: "packages",
        description:
          "Package reference in the form of a package identifier like 'Newtonsoft.Json' or package identifier and version separated by '@' like 'Newtonsoft.Json@13.0.3'. If none are specified, all package references are updated",
        isOptional: true,
        isVariadic: true,
        generators: nugetSearchGenerator("Dependency"),
      },
      options: [
        {
          name: ["--project", "--file"],
          description:
            "Path to a project or solution file or file-based app, or a project directory",
          args: {
            name: "project",
            template: ["folders", "filepaths"],
          },
        },
        {
          name: "--vulnerable",
          description: "Upgrade packages with known vulnerabilities",
        },
        interactiveOption,
        verbosityOption(
          "Set the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]"
        ),
      ],
    },
    {
      name: "download",
      description:
        "Downloads a NuGet package to a local folder without requiring a project file",
      args: {
        name: "packages",
        description:
          "Package reference in the form of a package identifier like 'Newtonsoft.Json' or package identifier and version separated by '@' like 'Newtonsoft.Json@13.0.3'",
        isVariadic: true,
        generators: nugetSearchGenerator("Dependency"),
      },
      options: [
        {
          name: "--allow-insecure-connections",
          description:
            "Allows downloading from HTTP (non-HTTPS) package sources",
        },
        nugetConfigFileOption,
        interactiveOption,
        {
          name: ["-o", "--output"],
          description:
            "Directory where the package will be placed. Defaults to the current working directory",
          args: {
            name: "output",
            template: "folders",
          },
        },
        {
          name: "--prerelease",
          description: "Allows prerelease packages to be installed",
        },
        {
          name: ["-s", "--source"],
          description: "Specifies one or more NuGet package sources to use",
          isRepeatable: true,
          args: {
            name: "source",
          },
        },
        verbosityOption(
          "Set the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]"
        ),
      ],
    },
    {
      name: "stage",
      description: "Manages packages in a staging environment",
      subcommands: [
        {
          name: "push",
          description: "Stages a package on the server without publishing it",
          args: {
            name: "PACKAGE_PATH",
            description: "The path to the package to stage",
            template: "filepaths",
          },
          options: [
            {
              name: ["-s", "--source"],
              description:
                "Package source (URL, UNC/folder path or package source name) to use. Defaults to DefaultPushSource if specified in NuGet.Config",
              args: {
                name: "source",
              },
            },
            {
              name: ["-k", "--api-key"],
              description:
                "The API key for the server. If not set, the NUGET_API_KEY environment variable is read",
              args: {
                name: "api-key",
              },
            },
            {
              name: "--group",
              description:
                "Uploads the package into the specified staging group",
              args: {
                name: "group",
              },
            },
            {
              name: "--no-symbols",
              description:
                "Prevents automatic discovery and staging of a sibling symbols package",
            },
            nugetConfigFileOption,
            interactiveOption,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
