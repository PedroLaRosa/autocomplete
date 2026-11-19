// goto v2.1.0 (iridakos/goto master, 2020-11-15; no git tag for 2.1.0, latest tag is v2.0.0; checked 2026-11-19). Source: read
// statically goto.sh (usage text, option parsing, bash/zsh completion functions), CHANGELOG.md and README.md.
// goto is a shell function: the alias DB is $GOTO_DB, else $XDG_CONFIG_HOME/goto, else ~/.config/goto (one "alias directory" per line).
const listTargets: Fig.Generator = {
  custom: async (tokens, executeShellCommand, context) => {
    const env = context.environmentVariables;
    const db =
      env["GOTO_DB"] ||
      `${env["XDG_CONFIG_HOME"] || `${env["HOME"]}/.config`}/goto`;
    const { stdout } = await executeShellCommand({
      command: "cat",
      // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
      args: [db],
    });

    const targetSuggestions = new Map<string, Fig.Suggestion>();

    for (const target of stdout.split("\n")) {
      if (!target) continue;
      const [alias, ...directory] = target.split(" ");
      targetSuggestions.set(target, {
        name: alias,
        description: "Goto " + directory.join(" "),
        icon: "🔖",
        priority: 80,
      });
    }

    return [...targetSuggestions.values()];
  },
};

const completionSpec: Fig.Spec = {
  name: "goto",
  displayName: "Goto a Folder by alias",
  options: [
    {
      name: ["--help", "-h"],
      description: "Prints help for goto",
    },
    {
      name: ["--register", "-r"],
      description: "Registers an alias",
      args: [
        {
          name: "alias",
        },
        {
          name: "target",
          template: "folders",
        },
      ],
    },
    {
      name: ["--unregister", "-u"],
      description: "Unregister an alias",
      args: {
        name: "alias",
        isDangerous: true,
        generators: listTargets,
        filterStrategy: "prefix",
      },
    },
    {
      name: ["--push", "-p"],
      description:
        "Pushes the current directory onto the stack, then performs goto",
      args: {
        name: "alias",
        generators: listTargets,
      },
    },
    {
      name: ["--pop", "-o"],
      description:
        "Pops the top directory from the stack, then changes to that directory",
    },
    {
      name: ["--list", "-l"],
      description: "Lists aliases",
    },
    {
      name: ["--expand", "-x"],
      description: "Expands an alias",
      args: {
        name: "alias",
        generators: listTargets,
      },
    },
    {
      name: ["--cleanup", "-c"],
      description: "Cleans up non existent directory aliases",
    },
    {
      name: ["--version", "-v"],
      description: "Displays the version of the goto script",
    },
  ],
  args: {
    name: "alias",
    description:
      "Registered alias, or a special directory such as ~ that cannot be registered",
    generators: listTargets,
  },
};
export default completionSpec;
