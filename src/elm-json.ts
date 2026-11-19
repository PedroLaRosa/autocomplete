// elm-json v0.2.13 (npm "latest" and GitHub tag v0.2.13, 2026-11-19). Source: src/lib/cli/mod.rs and
// src/lib/cli/completions.rs at tag v0.2.13 of https://github.com/zwilias/elm-json (clap 2 definitions read
// statically, not run). Hidden commands `solve` and `completions` are marked hidden.
import { filepaths } from "@tabsmith/autocomplete-generators";

const packageList: Fig.Generator = {
  script: [
    "curl",
    "-sH",
    "accept-encoding: gzip",
    "--compressed",
    "https://package.elm-lang.org/search.json",
  ],
  cache: {
    ttl: 1000 * 24 * 60 * 60 * 3, // 3 days
  },
  postProcess: (output) => {
    return JSON.parse(output).map((package_) => ({
      name: package_.name,
      description: package_.summary,
    }));
  },
};

const helpOption: Fig.Option = {
  name: ["--help", "-h"],
  description: "Prints help information",
};

const versionOption: Fig.Option = {
  name: ["--version", "-V"],
  description: "Prints version information",
};

const yesOption: Fig.Option = {
  name: "--yes",
  description: 'Answer "yes" to all questions',
};

const testOption = (description: string): Fig.Option => ({
  name: "--test",
  description,
});

const elmJsonArg = (description: string, name = "INPUT"): Fig.Arg => ({
  name,
  description: `${description} [default: elm.json]`,
  isOptional: true,
  generators: filepaths({ extensions: ["json"] }),
});

/**
 * Based on [elm-json](https://github.com/zwilias/elm-json), version 0.2.13. Cli tool for working with your elm.json file.
 */
const completionSpec: Fig.Spec = {
  name: "elm-json",
  description: "Deal with your elm.json",
  subcommands: [
    {
      name: "help",
      description: "Prints this message or the help of the given subcommand(s)",
      args: {
        name: "subcommand",
        template: "help",
      },
    },
    {
      name: "install",
      description: "Install a package",
      options: [
        helpOption,
        testOption("Install as a test-dependency"),
        versionOption,
        yesOption,
      ],
      args: [
        {
          name: "PACKAGE",
          description:
            "Package to install, e.g. elm/core or elm/core@1.0.2 or elm/core@1",
          debounce: true,
          isVariadic: true,
          generators: packageList,
        },
        elmJsonArg("The elm.json file to upgrade", "-- INPUT"),
      ],
    },
    {
      name: "new",
      description: "Create a new elm.json file",
      options: [helpOption, versionOption],
    },
    {
      name: "tree",
      description: "List entire dependency graph as a tree",
      options: [
        helpOption,
        testOption("Promote test-dependencies to top-level dependencies"),
        versionOption,
      ],
      args: [
        {
          name: "PACKAGE",
          description:
            "Limit output to show path to some (indirect) dependency",
          isOptional: true,
          debounce: true,
          generators: packageList,
        },
        elmJsonArg("The elm.json file to solve", "-- INPUT"),
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall a package",
      options: [helpOption, versionOption, yesOption],
      args: [
        {
          name: "PACKAGE",
          description: "Package to uninstall, e.g. elm/html",
          debounce: true,
          isVariadic: true,
          generators: packageList,
        },
        elmJsonArg("The elm.json file to upgrade", "-- INPUT"),
      ],
    },
    {
      name: "upgrade",
      description: "Bring your dependencies up to date",
      options: [
        helpOption,
        {
          name: "--unsafe",
          description: "Allow major versions bumps",
        },
        versionOption,
        yesOption,
      ],
      args: elmJsonArg("The elm.json file to upgrade"),
    },
    {
      name: "solve",
      description:
        "Figure out a solution given the version constraints in your elm.json",
      hidden: true,
      options: [
        helpOption,
        {
          name: ["--minimize", "-m"],
          description: "Choose lowest available versions rather than highest",
        },
        testOption("Promote test-dependencies to top-level dependencies"),
        versionOption,
        {
          name: ["--extra", "-e"],
          description:
            "Specify extra dependencies, e.g. elm/core or elm/core@1.0.2",
          isRepeatable: true,
          args: {
            name: "PACKAGE",
            debounce: true,
            generators: packageList,
          },
        },
      ],
      args: elmJsonArg("The elm.json file to solve"),
    },
    {
      name: "completions",
      description: "Generates completion scripts for your shell",
      hidden: true,
      options: [helpOption, versionOption],
      args: {
        name: "SHELL",
        description: "The shell to generate the script for",
        suggestions: ["bash", "fish", "zsh"],
      },
    },
  ],
  options: [
    helpOption,
    {
      name: "--offline",
      description:
        "Enable offline mode, which means no HTTP traffic will happen",
    },
    versionOption,
    {
      name: ["--verbose", "-v"],
      description: "Sets the level of verbosity",
      isRepeatable: true,
    },
  ],
};
export default completionSpec;
