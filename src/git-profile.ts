// Git Profile v1.9.2 (gh release view -R dotzero/git-profile, 2026-11-19). Source: cmd/*.go at v1.9.2
// https://github.com/dotzero/git-profile
const profiles: Fig.Generator = {
  script: ["git-profile", "list"],
  postProcess: (output) => {
    // `list` prints "- <name>:" per profile, styled with ANSI codes
    const plain = output.replace(/\x1b\[[0-9;]*m/g, "");
    return Array.from(plain.matchAll(/^- (.+):$/gm)).map((result) => ({
      name: result[1],
      description: `Profile "${result[1]}"`,
    }));
  },
};

const profileArg: Fig.Arg = {
  name: "profile",
  generators: profiles,
};

const keyArg: Fig.Arg = {
  name: "key",
  suggestions: ["user.name", "user.email", "user.signingkey"],
};

const completionSpec: Fig.Spec = {
  name: "git-profile",
  description: "Manage multiple Git identities per repository",
  subcommands: [
    {
      name: ["add", "set"],
      description: "Add or update profile entries",
      args: [
        { ...profileArg, isOptional: true },
        { ...keyArg, isOptional: true },
        { name: "value", isOptional: true },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion script",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: ["current", "c"],
      description: "Show the current profile",
    },
    {
      name: ["del", "rm"],
      description: "Delete a profile or a profile entry",
      args: [
        { ...profileArg, isOptional: true },
        { ...keyArg, isOptional: true },
      ],
    },
    {
      name: ["export", "e"],
      description: "Export a profile as JSON",
      args: profileArg,
    },
    {
      name: ["import", "i"],
      description: "Import a profile from JSON",
      args: [profileArg, { name: "json-values" }],
    },
    {
      name: ["list", "l"],
      description: "List profiles",
    },
    {
      name: "migrate",
      description: "Migrate ~/.gitprofile to the XDG config path",
      options: [
        {
          name: "--force",
          description: "Overwrite an existing XDG config file",
        },
      ],
    },
    {
      name: ["use", "u"],
      description: "Apply a profile to the current repository",
      args: { ...profileArg, isOptional: true },
    },
    {
      name: ["unuse", "uu"],
      description: "Remove the applied profile from the current repository",
      args: { ...profileArg, isOptional: true },
    },
    {
      name: "version",
      description: "Print version information",
    },
    {
      name: "help",
      description: "Help about any command",
      args: { name: "command", isOptional: true, template: "help" },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help for git-profile",
      isPersistent: true,
    },
    {
      name: ["--config", "-c"],
      description:
        "Config file (default: $XDG_CONFIG_HOME/git-profile/config.json or ~/.gitprofile)",
      isPersistent: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["--directory", "-C"],
      description: "Run git commands in the given path",
      isPersistent: true,
      args: { name: "path", template: "folders" },
    },
  ],
};

export default completionSpec;
