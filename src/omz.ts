// Oh My Zsh `omz` at ohmyzsh/ohmyzsh master 6010fb6 (2026-11-09; the project
// ships no releases). Source: lib/cli.zsh (`_omz` completion and help text)
// and tools/shellsaver.zsh --help.

// $ZSH is exported by .zshrc; $ZSH_CUSTOM usually is not, so fall back to the
// same default oh-my-zsh.sh uses.
const omzDirs = 'Z="${ZSH:-$HOME/.oh-my-zsh}"; C="${ZSH_CUSTOM:-$Z/custom}"';

const lines =
  (description: string, icon: string): Fig.Generator["postProcess"] =>
  (out) =>
    [...new Set(out.split("\n").filter(Boolean))].map((name) => ({
      name,
      description,
      icon,
    }));

// ponytail: `disable` gets every plugin, not only enabled ones; $plugins is a
// zsh array set inside .zshrc and isn't visible to a generator.
const plugins: Fig.Generator = {
  script: [
    "bash",
    "-c",
    `${omzDirs}; for f in "$Z"/plugins/*/{_*,*.plugin.zsh} "$C"/plugins/*/{_*,*.plugin.zsh}; do [ -e "$f" ] || continue; basename "$(dirname "$f")"; done`,
  ],
  postProcess: lines("Plugin", "🔌"),
};

const themes: Fig.Generator = {
  script: [
    "bash",
    "-c",
    `${omzDirs}; for f in "$Z"/themes/*.zsh-theme "$C"/themes/*.zsh-theme "$C"/*.zsh-theme; do [ -e "$f" ] || continue; basename "$f" .zsh-theme; done`,
  ],
  postProcess: lines("Theme", "🎨"),
};

const refs: Fig.Generator = {
  script: [
    "bash",
    "-c",
    `${omzDirs}; git -C "$Z" for-each-ref --format='%(refname:short)' refs/heads refs/tags`,
  ],
  postProcess: lines("Branch or tag", "fig://icon?type=git"),
};

const pluginArgs: Fig.Arg = {
  name: "plugin",
  generators: plugins,
  isVariadic: true,
};

const scenes: Fig.Suggestion[] = [
  { name: "aquarium", description: "Sea shells and a hermit crab (default)" },
  { name: "logo", description: "The Oh My Zsh wordmark takes a coffee break" },
  { name: "hermit", description: "A hermit crab looks for its directory" },
  { name: "party", description: "A rainbow stage and dancing shell fans" },
];

const shellsaver: Fig.Subcommand = {
  name: "shellsaver",
  description: "Launch a whimsical terminal screensaver",
  args: { name: "scene", isOptional: true, suggestions: scenes },
  options: [
    { name: "--list", description: "List available scenes and the default" },
    {
      name: "--mono",
      description: "Use the terminal default foreground color",
    },
    {
      name: "--seconds",
      description: "Exit automatically after 1-3600 seconds",
      args: { name: "N" },
    },
    {
      name: "--snapshot",
      description: "Print a 96x28 plain-text still (no terminal needed)",
      args: { name: "frame", isOptional: true },
    },
    { name: "--help", description: "Show Shellsaver help" },
  ],
};

const completionSpec: Fig.Spec = {
  name: "omz",
  description: "Oh My Zsh",
  subcommands: [
    { name: "help", description: "Print the help message" },
    {
      name: "changelog",
      description: "Print the changelog",
      args: {
        name: "version",
        description: "Branch, tag or commit (default: HEAD)",
        isOptional: true,
        generators: refs,
      },
    },
    {
      name: "plugin",
      description: "Manage plugins",
      subcommands: [
        { name: "disable", description: "Disable plugin(s)", args: pluginArgs },
        { name: "enable", description: "Enable plugin(s)", args: pluginArgs },
        {
          name: "info",
          description: "Get information of a plugin",
          args: { name: "plugin", generators: plugins },
        },
        {
          name: "list",
          description: "List all available Oh My Zsh plugins",
          options: [
            { name: "--enabled", description: "List enabled plugins only" },
          ],
        },
        { name: "load", description: "Load plugin(s)", args: pluginArgs },
      ],
    },
    {
      name: "pr",
      description: "Manage Oh My Zsh Pull Requests",
      subcommands: [
        {
          name: "clean",
          description: "Delete all PR branches (ohmyzsh/pull-*)",
        },
        {
          name: "test",
          description: "Fetch PR #NUMBER and rebase against master",
          args: { name: "PR_number_or_URL" },
        },
      ],
    },
    { name: "reload", description: "Reload the current zsh session" },
    shellsaver,
    { ...shellsaver, name: "screensaver", hidden: true },
    { name: "shop", description: "Open the Oh My Zsh shop" },
    {
      name: "theme",
      description: "Manage themes",
      subcommands: [
        { name: "list", description: "List all available Oh My Zsh themes" },
        {
          name: "set",
          description: "Set a theme in your .zshrc file",
          args: { name: "theme", generators: themes },
        },
        {
          name: "use",
          description: "Load a theme",
          args: { name: "theme", generators: themes },
        },
      ],
    },
    { name: "update", description: "Update Oh My Zsh" },
    { name: "version", description: "Show the version" },
  ],
};

export default completionSpec;
