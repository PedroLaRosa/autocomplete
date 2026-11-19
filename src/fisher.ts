// Fisher v4.4.8 (GitHub tag jorgebucaran/fisher 4.4.8, the latest release tag; 2026-11-19).
// Source: static read of functions/fisher.fish (usage text and command dispatch), completions/fisher.fish and README.md at upstream HEAD 791da64 (version string 4.4.8, same as the latest tag), not a live run.
// The `fisher list` generator no longer cuts the first 19 characters of the output: v4 prints one plugin per line. Added the uninstall and ls aliases.
// The plugin suggestions are a hand-picked list; their pinned versions were checked against the plugins' latest release tags and READMEs (tide v6, gitnow 2.13.0).

const pluginList = [
  {
    name: "IlanCosman/tide@v6",
    displayName: "Tide",
    description: "[Prompt] - 🌊 The ultimate Fish prompt",
    icon: "fig://icon?type=box",
    priority: 99,
  },
  {
    name: "pure-fish/pure",
    displayName: "Pure",
    description:
      "[Prompt] - Pretty, minimal, and fast prompt for Fish from Zsh",
    icon: "fig://icon?type=box",
    priority: 98,
  },
  {
    name: "jorgebucaran/hydro",
    displayName: "Hydro",
    description: "[Prompt] - Minimal, lag-free prompt with async Git status",
    icon: "fig://icon?type=box",
    priority: 97,
  },
  {
    name: "jethrokuan/z",
    displayName: "Z",
    description: "[Plugin] - Pure-fish z directory jumping",
    icon: "fig://icon?type=package",
  },
  {
    name: "PatrickF1/fzf.fish",
    displayName: "FZF.fish",
    description:
      "[Plugin] - Augment your fish command line with fzf key bindings",
    icon: "fig://icon?type=package",
  },
  {
    name: "jorgebucaran/nvm.fish",
    displayName: "NVM.fish",
    description: "[Plugin] -  Node.js version manager lovingly made for Fish",
    icon: "fig://icon?type=package",
  },
  {
    name: "franciscolourenco/done",
    displayName: "Done",
    description:
      "[Plugin] - A fish-shell package to automatically receive notifications when long processes finish",
    icon: "fig://icon?type=package",
  },
  {
    name: "jorgebucaran/replay.fish",
    displayName: "Replay.fish",
    description: "[Plugin] - Run Bash commands replaying changes in Fish. 🍤",
    icon: "fig://icon?type=package",
  },
  {
    name: "jorgebucaran/spark.fish",
    displayName: "Spark.fish",
    description:
      "[Plugin] - Visualize a range of numbers right in your terminal",
    icon: "fig://icon?type=package",
  },
  {
    name: "joseluisq/gitnow@2.13.0",
    displayName: "GitNow",
    description: "[Plugin] - Speed up your Git workflow. 🐠",
    icon: "fig://icon?type=package",
  },
  // To be continued ...
];

const installedPlugins: Fig.Generator = {
  script: ["fish", "-c", "fisher list"],
  postProcess: (output: string) => {
    if (!output) {
      return [];
    }
    // `fisher list` prints one installed plugin per line
    return output
      .split("\n")
      .map((p: string) => p.trim())
      .filter((p: string) => p !== "")
      .map((p: string) => {
        return {
          name: p,
          icon: "fig://icon?type=package",
          description: "Plugin",
        };
      });
  },
};

const completionSpec: Fig.Spec = {
  name: "fisher",
  description: "A plugin manager for Fish",
  subcommands: [
    {
      name: "install",
      description: "Install plugins",
      subcommands: pluginList,
      args: {
        name: "plugins",
        description:
          "Plugins to install: GitHub path (owner/repo[@ref]), gitlab.com/ path or local directory",
        isVariadic: true,
        template: "folders",
      },
    },
    {
      name: ["remove", "uninstall"],
      description: "Remove installed plugins",
      args: {
        name: "installed plugins",
        description: "The plugin you want to remove",
        isDangerous: true,
        isVariadic: true,
        generators: installedPlugins,
      },
    },
    {
      name: "update",
      description: "Update installed plugins (all of them if none is given)",
      args: {
        name: "installed plugins",
        description: "The plugin you want to update",
        isOptional: true,
        isVariadic: true,
        generators: installedPlugins,
      },
    },
    {
      name: ["list", "ls"],
      description: "List installed plugins matching regex",
      args: {
        name: "RegEx",
        description: "Search in list with regular expression",
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help",
    },
    {
      name: ["--version", "-v"],
      description: "Print version",
    },
  ],
};
export default completionSpec;
