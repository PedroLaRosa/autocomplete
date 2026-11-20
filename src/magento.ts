// Magento Open Source v2.4.9 (GitHub release magento/magento2 tag 2.4.9, 2.4.10 is still alpha; checked 2026-11-19). Source: composer.json (symfony/console ^7.4), Symfony 7.4 JsonDescriptor (the `bin/magento list --format=json` schema this spec parses) and Magento_Backend cache commands (`types` argument) at tag 2.4.9, read statically; Magento was not installed or run.
// The command tree is generated at runtime from `bin/magento list`, so no commands are hard-coded.

interface BinConsoleJSON {
  commands: {
    name: string;
    description: string;
    hidden: boolean;
    help: string;
    definition: {
      arguments:
        | []
        | Record<
            string,
            {
              name: string;
              is_required: boolean;
              description: string;
              is_array: boolean;
              default: unknown;
            }
          >;
      options:
        | []
        | Record<
            string,
            {
              name: string;
              accept_value: boolean;
              shortcut: string;
              is_value_required: boolean;
              is_multiple: boolean;
              description: string;
              default: unknown;
            }
          >;
    };
  }[];
}

// Symfony Console reports defaults as null, false, a scalar or an array
const getDefault = (value: unknown): string | undefined => {
  if (value === null || value === undefined || value === false) {
    return undefined;
  }
  const text = Array.isArray(value) ? value.join(",") : String(value);
  return text === "" ? undefined : text;
};

const getCacheTypes = async (
  executeShellCommand: Fig.ExecuteCommandFunction
): Promise<string[]> => {
  try {
    const { stdout } = await executeShellCommand({
      command: "php",
      args: ["-r", 'print(json_encode(require "app/etc/env.php"));'],
    });
    const env = JSON.parse(stdout);
    return Object.keys(env.cache_types ?? {});
  } catch {
    return [];
  }
};

const completionSpec: Fig.Spec = {
  name: "magento",
  description: "Open-source E-commerce",
  generateSpec: async (tokens, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "bin/magento",
      args: ["list", "--format=json", "--raw"],
    });
    const magento = JSON.parse(stdout) as BinConsoleJSON;
    const cacheTypes = await getCacheTypes(executeShellCommand);

    return {
      name: "magento",
      description: "Open-source E-commerce",
      subcommands: magento.commands.map((command) => {
        return {
          name: command.name,
          description: command.description,
          hidden: command.hidden,
          args: Object.values(command.definition.arguments).map((argument) => {
            const suggestions =
              command.name.startsWith("cache:") && argument.name === "types"
                ? cacheTypes
                : undefined;

            return {
              name: argument.name,
              description: argument.description,
              isOptional: !argument.is_required,
              default: getDefault(argument.default),
              isVariadic: argument.is_array,
              suggestions,
            };
          }),
          options: Object.values(command.definition.options).map((option) => {
            return {
              // Symfony reports shortcuts as "-v|-vv|-vvv", or "" when there are none
              name: [
                option.name,
                ...(option.shortcut ? option.shortcut.split("|") : []),
              ],
              description: option.description,
              isRepeatable: option.is_multiple,
              args: option.accept_value
                ? {
                    name: option.name.replace(/^--/, ""),
                    isOptional: !option.is_value_required,
                    default: getDefault(option.default),
                  }
                : undefined,
            };
          }),
        };
      }),
    };
  },
};

export default completionSpec;
