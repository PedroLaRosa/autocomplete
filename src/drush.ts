// Drush v13.8.1 (git tag 13.8.1 of drush-ops/drush and Packagist "drush/drush" latest, 2026-11-19).
// Source: src/Commands/help/ListCommands.php and src/Application.php (global options) read statically, plus Symfony Console 7.3
// Descriptor/JsonDescriptor.php for the `drush list --format=json` shape that generateSpec parses; drush was not run (needs PHP and a Drupal project).
interface DrushArgument {
  name: string;
  is_required: boolean;
  is_array: boolean;
  description: string;
  default: null | string | Array<string>;
}

interface DrushOption {
  name: string;
  shortcut: string;
  accept_value: boolean;
  is_value_required: boolean;
  is_multiple: boolean; // isRepeatable in fig
  description: string;
  default: null | boolean; // not supported by fig
}

interface DrushCommandDefinition {
  arguments: Record<string, DrushArgument>;
  options: Record<string, DrushOption>;
}

interface DrushCommand {
  name: string;
  usage: string[]; // synopsis, usage examples, then the command aliases
  description: string;
  help: string;
  hidden: boolean;
  definition: DrushCommandDefinition;
}

interface DrushListOutput {
  commands: DrushCommand[];
}

// Descriptions can contain Symfony console style tags such as <info>...</info>
const stripTags = (text: string) =>
  text.replace(
    /<\/?(?:info|comment|error|question|(?:fg|bg|options|href)=[^>]*)?>/gi,
    ""
  );

const completionSpec: Fig.Spec = {
  name: "drush",
  description:
    "Drush is a command line shell and Unix scripting interface for Drupal",
  generateSpec: async (tokens, executeShellCommand) => {
    const { stdout: jsonList } = await executeShellCommand({
      command: "drush",
      args: ["list", "--format=json"],
    });
    const subcommands: Fig.Subcommand[] = [];

    try {
      const data: DrushListOutput = JSON.parse(jsonList);
      for (const command of data.commands) {
        // Aliases are listed after the synopsis and the usage examples (which
        // contain whitespace). Drush hides the "foo-bar" alias of "foo:bar".
        const aliases = command.usage.filter(
          (usage) =>
            !/\s/.test(usage) &&
            usage !== command.name &&
            usage !== command.name.replace(/:/g, "-")
        );

        subcommands.push({
          name: [command.name, ...aliases],
          description: stripTags(command.description),
          hidden: command.hidden || undefined,

          args: Object.keys(command.definition.arguments).map((argKey) => {
            const arg = command.definition.arguments[argKey];
            const argDefault = arg.default
              ? Array.isArray(arg.default)
                ? arg.default[0]
                : arg.default
              : undefined;

            return {
              name: arg.name,
              description: stripTags(arg.description),
              isOptional: !arg.is_required,
              default: argDefault,
              isVariadic: arg.is_array,
            };
          }),

          options: Object.keys(command.definition.options).map((optionKey) => {
            const option = command.definition.options[optionKey];
            const names = [option.name];

            // Shortcuts are joined by "|", e.g. "-v|-vv|-vvv"
            for (const shortCut of option.shortcut.split("|")) {
              if (shortCut.trim().length > 0) {
                names.push(shortCut.trim());
              }
            }

            return {
              name: names,
              description: stripTags(option.description),
              args: option.accept_value
                ? {
                    name: option.name.replace(/^--/, ""),
                    isOptional: !option.is_value_required,
                  }
                : undefined,
              isRepeatable: option.is_multiple,
            };
          }),
        });
      }
    } catch (err) {
      console.error(err);
    }

    return {
      name: "drush",
      subcommands,
    };
  },
};
export default completionSpec;
