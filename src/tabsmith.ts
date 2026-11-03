const shells: Fig.Suggestion[] = [
  { name: "zsh" },
  { name: "bash" },
  { name: "fish" },
  { name: "pwsh", description: "PowerShell 7" },
];

const formatOption: Fig.Option = {
  name: ["-f", "--format"],
  description: "Output format",
  args: {
    name: "format",
    default: "plain",
    suggestions: ["plain", "json", "json-pretty"],
  },
};

const settingKeys: Fig.Generator = {
  script: ["tabsmith", "settings", "list", "--all", "--format", "json"],
  postProcess: (out) => {
    try {
      return JSON.parse(out).map((s: { key: string; description: string }) => ({
        name: s.key,
        description: s.description,
      }));
    } catch {
      return [];
    }
  },
};

const themes: Fig.Generator = {
  script: ["tabsmith", "theme", "--list"],
  splitOn: "\n",
};

const inlineSources: Fig.Generator = {
  script: ["tabsmith", "inline", "show-customizations", "--format", "json"],
  postProcess: (out) => {
    try {
      return JSON.parse(out).map(
        (s: { name: string; description: string; kind: string }) => ({
          name: s.name,
          description: s.description || s.kind,
        })
      );
    } catch {
      return [];
    }
  },
};

const integrationTarget = (
  extraOptions: Fig.Option[] = []
): Pick<Fig.Subcommand, "subcommands" | "options"> => ({
  subcommands: [
    {
      name: "dotfiles",
      description: "Shell dotfile integrations",
      args: { name: "shell", isOptional: true, suggestions: shells },
    },
    { name: "all", description: "All integrations" },
  ],
  options: extraOptions,
});

const silentOption: Fig.Option = {
  name: ["-s", "--silent"],
  description: "Suppress status messages",
};

const completionSpec: Fig.Spec = {
  name: "tabsmith",
  description: "IDE-style autocomplete for your terminal",
  subcommands: [
    {
      name: "settings",
      description: "Customize appearance & behavior",
      subcommands: [
        { name: "open", description: "Open the settings file" },
        {
          name: "list",
          description: "List settings",
          options: [
            {
              name: "--all",
              description: "List all available settings with descriptions",
            },
            formatOption,
          ],
        },
      ],
      args: [
        {
          name: "key",
          description: "Key of the setting",
          isOptional: true,
          generators: settingKeys,
        },
        {
          name: "value",
          description: "Value of the setting (JSON, or a plain string)",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-d", "--delete"],
          description: "Delete a setting (wildcards * and ? allowed)",
        },
        formatOption,
      ],
    },
    {
      name: "theme",
      description: "Get or set theme",
      args: {
        name: "theme",
        description: "Theme name: dark, light, system, or a custom theme",
        isOptional: true,
        generators: themes,
      },
      options: [
        {
          name: "--list",
          description: "List all available themes",
          exclusiveOn: ["--folder"],
        },
        { name: "--folder", description: "Print the theme directory path" },
      ],
    },
    {
      name: "inline",
      description: "Inline shell completions",
      subcommands: [
        { name: "enable", description: "Enable inline suggestions" },
        { name: "disable", description: "Disable inline suggestions" },
        { name: "status", description: "Show current status" },
        {
          name: ["set-customization", "set-source"],
          description:
            "Select the inline suggestion source (history, specs, history+specs or an LLM profile)",
          args: {
            name: "name",
            isOptional: true,
            generators: inlineSources,
          },
        },
        {
          name: ["show-customizations", "show-sources"],
          description: "Show the available inline sources",
          options: [formatOption],
        },
      ],
    },
    {
      name: "integrations",
      description: "Manage system integrations",
      subcommands: [
        {
          name: "install",
          description: "Install an integration",
          ...integrationTarget([silentOption]),
        },
        {
          name: "uninstall",
          description: "Uninstall an integration",
          ...integrationTarget([silentOption]),
        },
        {
          name: "reinstall",
          description: "Reinstall an integration",
          ...integrationTarget([silentOption]),
        },
        {
          name: "status",
          description: "Check the status of an integration",
          ...integrationTarget([formatOption]),
        },
      ],
    },
    {
      name: "init",
      description: "Generate the dotfiles for the given shell",
      args: [
        { name: "shell", suggestions: shells },
        { name: "when", suggestions: ["pre", "post"] },
      ],
      options: [
        {
          name: "--rcfile",
          description: "Name of the rc file sourcing the integration",
          args: { name: "rcfile" },
        },
      ],
    },
    {
      name: "doctor",
      description: "Fix and diagnose common issues",
      options: [
        {
          name: ["-a", "--all"],
          description:
            "Run all checks, print every result, never fix, never abort",
        },
        { name: ["-s", "--strict"], description: "Error on warnings" },
      ],
    },
    {
      name: ["setup", "install"],
      description: "Setup cli components",
      options: [
        { name: "--no-confirm", description: "Do not prompt for confirmation" },
        { name: "--force", description: "Force installation (e.g. as root)" },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall tabsmith",
      options: [
        {
          name: ["-y", "--no-confirm"],
          description: "Do not prompt for confirmation",
        },
        { name: "--purge", description: "Also remove ~/.tabsmith" },
      ],
    },
    {
      name: ["diagnostic", "diagnostics"],
      description: "Run diagnostic tests",
      options: [formatOption],
    },
    {
      name: "debug",
      description: "Debug tabsmith",
      subcommands: [
        {
          name: "key-tester",
          description: "Print the bytes of every key press (Ctrl-D exits)",
        },
        {
          name: "shell",
          description:
            "Start a shell with only the tabsmith integration loaded",
          args: { name: "shell", isOptional: true, suggestions: shells },
        },
        {
          name: "logs",
          description: "Show log file paths and the end of pty.log",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-v", "--verbose"],
      description:
        "Increase log verbosity (-v warn, -vv info, -vvv debug, -vvvv trace)",
      isRepeatable: 4,
      isPersistent: true,
    },
    { name: ["-h", "--help"], description: "Print help", isPersistent: true },
    { name: ["-V", "--version"], description: "Print version" },
  ],
};

export default completionSpec;
