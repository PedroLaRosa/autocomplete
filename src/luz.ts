// Luz v1.0.0 (pyproject.toml on main of LuzProject/luz at b5d1126, 2026-11-05; the project has no tags or releases, checked 2026-11-19). Source: luz/__main__.py (argparse definitions) and docs/commands.rst, read statically; the CLI was not run.

const helpOption = (command: string): Fig.Option => ({
  name: ["--help", "-h"],
  description: `Show help for the ${command} command`,
});

const pathOption = (verb: string): Fig.Option => ({
  name: ["--path", "-p"],
  description: `Path to the project to ${verb}`,
  args: {
    name: "path",
    template: "folders",
  },
});

const completionSpec: Fig.Spec = {
  name: "luz",
  description: "A next-generation build system for Apple Darwin-based systems",
  subcommands: [
    {
      name: "build",
      description: "Compile a Luz project using luzconf.py",
      options: [
        helpOption("build"),
        {
          name: ["--clean", "-c"],
          description: "Clean the project before building",
        },
        {
          name: ["--meta", "-m"],
          description: "Meta configuration, for example release=true",
          isRepeatable: true,
          args: {
            name: "key=value",
            isVariadic: true,
          },
        },
        pathOption("build"),
        {
          name: ["--install", "-i"],
          description: "Install the project after building it",
        },
        {
          name: ["--funny-time", "-f"],
          description:
            "Append a random time phrase to the build completion message",
          hidden: true,
        },
      ],
    },
    {
      name: "verify",
      description: "Verify the format of luzconf.py",
      options: [helpOption("verify"), pathOption("verify")],
    },
    {
      name: "gen",
      description: "Generate a new project using LuzGen",
      options: [
        helpOption("gen"),
        {
          name: ["--type", "-t"],
          description: "The type of project to generate (default: tweak)",
          args: {
            name: "type",
            suggestions: [
              {
                name: "tool",
                description: "A command-line tool",
                icon: "💻",
              },
              {
                name: "tweak",
                description: "A tweak",
                icon: "🛠",
              },
              {
                name: "preferences",
                description: "A preferences bundle",
              },
              {
                name: "prefs",
                description: "Alias for preferences",
              },
              {
                name: "library",
                description: "A library",
              },
              {
                name: "lib",
                description: "Alias for library",
              },
              {
                name: "framework",
                description: "A framework",
              },
              {
                name: "fw",
                description: "Alias for framework",
              },
            ],
          },
        },
      ],
    },
    {
      name: "update",
      description: "Update the installed Luz command",
      options: [
        helpOption("update"),
        {
          name: ["--ref", "-r"],
          description: "GitHub branch, tag, or commit to install",
          args: {
            name: "ref",
            default: "main",
          },
        },
        {
          name: "--no-vendors",
          description: "Do not update vendored headers, libraries, and pyLogos",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for Luz",
    },
    {
      name: ["--version", "-v"],
      description: "Show current version and exit",
    },
  ],
};
export default completionSpec;
