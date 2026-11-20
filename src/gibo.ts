// gibo v3.0.23 (GitHub release, 2026-10-23). Source: cmd/*.go in simonwhitaker/gibo (cobra)
const boilerplates: Fig.Generator = {
  script: ["gibo", "list"],
  splitOn: "\n",
};

const noDescriptions: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const completionShell = (name: string): Fig.Subcommand => ({
  name,
  description: `Generate the autocompletion script for ${name}`,
  options: [noDescriptions],
});

const completionSpec: Fig.Spec = {
  name: "gibo",
  description: "Easy access to gitignore boilerplates",
  subcommands: [
    {
      name: "dump",
      description: "Dump one or more named boilerplates",
      args: {
        name: "boilerplate",
        description: "Name of the boilerplate to dump",
        generators: boilerplates,
        isVariadic: true,
      },
    },
    {
      name: "search",
      description: "Search for boilerplates",
      args: {
        name: "search term",
        description: "Name of the language or framework to search for",
      },
    },
    {
      name: "root",
      description: "Show the directory where gibo stores its boilerplates",
    },
    {
      name: "help",
      description: "Help about any command",
      args: { name: "command", isOptional: true, template: "help" },
    },
    { name: "list", description: "List available boilerplates" },
    {
      name: "update",
      description: "Update the gitignore boilerplate repository",
    },
    {
      name: "version",
      description: "Show the current version number of gibo",
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: ["bash", "fish", "powershell", "zsh"].map(completionShell),
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for gibo",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
