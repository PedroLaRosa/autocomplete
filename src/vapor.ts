// Vapor Toolbox 20.0.2 (Homebrew formula vapor / GitHub tag 20.0.2, 2026-11-19). Source: static read of
// Sources/VaporToolbox/{Vapor,New}.swift (swift-argument-parser definitions) and the generated
// VaporToolbox.docc/vapor.md at that tag; the binary was not run (macOS/Swift only).
// Toolbox 20 is a rewrite whose only subcommand is `new` (also the default subcommand); the former
// build, clean, heroku, run, supervisor and xcode commands no longer exist. `new` additionally accepts
// per-template variables (e.g. --fluent / --no-fluent) that are read from the template's manifest at
// runtime, so they are not listed here.
const completionSpec: Fig.Spec = {
  name: "vapor",
  description: "Vapor Toolbox (Server-side Swift web framework)",
  subcommands: [
    {
      name: "new",
      description: "Generates a new app",
      args: {
        name: "name",
        description: "Name of project and folder",
      },
      options: [
        {
          name: ["--template", "-t"],
          description: "The URL of a Git repository to use as a template",
          args: {
            name: "url",
          },
        },
        {
          name: "--branch",
          description: "Template repository branch to use",
          args: {
            name: "branch",
          },
        },
        {
          name: "--manifest",
          description:
            "The path of the manifest file. Defaults to `manifest.yml`",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["--output", "-o"],
          description: "The directory to place the new project in",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--no-commit",
          description: "Skips adding a first commit to the newly created repo",
        },
        {
          name: "--no-git",
          description: "Skips adding a Git repository to the project folder",
        },
        {
          name: ["--yes", "-y"],
          description: "Automatically answer yes to all questions",
          exclusiveOn: ["--no", "-n"],
        },
        {
          name: ["--no", "-n"],
          description: "Automatically answer no to all questions",
          exclusiveOn: ["--yes", "-y"],
        },
        {
          name: ["--verbose", "-v"],
          description: "Prints additional information",
        },
        {
          name: "--dump-variables",
          description:
            "Dumps template variables as JSON (experimental and unstable)",
          hidden: true,
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help information",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show the version",
    },
  ],
};
export default completionSpec;
