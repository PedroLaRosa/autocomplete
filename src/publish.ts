// Publish v0.9.0 (latest git tag of JohnSundell/Publish, 2026-11-19). Source: Sources/PublishCLI + Sources/PublishCLICore (CLI.swift, ProjectKind.swift) read at tag 0.9.0.
// The CLI has no real option parser: it dispatches on the first argument and prints its help text for anything unknown (including -h/--help).
const completionSpec: Fig.Spec = {
  name: "publish",
  description:
    "Interact with the Publish static site generator from the command line",
  subcommands: [
    {
      name: "new",
      description: "Set up a new website in the current folder",
      args: {
        name: "kind",
        description: "Kind of project to set up (defaults to website)",
        isOptional: true,
        suggestions: [
          { name: "website", description: "Set up a new website" },
          { name: "plugin", description: "Set up a new Publish plugin" },
        ],
      },
    },
    {
      name: "run",
      description:
        "Generate and run a localhost server on default port 8000 for the website in the current folder",
      parserDirectives: {
        flagsArePosixNoncompliant: true,
      },
      options: [
        {
          name: ["-p", "--port"],
          description: "Customize the port",
          args: {
            name: "port",
            default: "8000",
          },
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Generate and deploy the website in the current folder, according to its deployment method",
    },
    {
      name: "generate",
      description: "Generate the website in the current folder",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for publish",
    },
  ],
};
export default completionSpec;
