// mask v0.11.7 (latest release tag mask/0.11.7 of jacobdeichert/mask, 2026-11-19). Source: static read of
// mask/src/main.rs (clap 2 definitions), mask-parser/src/{maskfile,parser}.rs and README.md at that tag; the binary
// was not run. Commands, positional args and flags come from the maskfile at completion time via `mask --introspect`.

interface MaskFlag {
  name: string;
  description: string;
  short: string;
  long: string;
  multiple: boolean;
  takes_value: boolean;
  validate_as_number: boolean;
  choices: string[];
  required: boolean;
}

interface MaskCommand {
  name: string;
  description: string;
  subcommands: MaskCommand[];
  required_args: { name: string }[];
  optional_args: { name: string }[];
  named_flags: MaskFlag[];
}

const toOption = (flag: MaskFlag): Fig.Option | undefined => {
  const names = [
    flag.short ? `-${flag.short}` : "",
    flag.long ? `--${flag.long}` : "",
  ].filter(Boolean);
  if (names.length === 0) return undefined;

  return {
    name: names.length === 1 ? names[0] : names,
    description: flag.description || undefined,
    isRepeatable: flag.multiple || undefined,
    isRequired: flag.required || undefined,
    args: flag.takes_value
      ? {
          name: flag.validate_as_number ? "number" : flag.name,
          suggestions: flag.choices.length > 0 ? flag.choices : undefined,
        }
      : undefined,
  };
};

const toSubcommand = (command: MaskCommand): Fig.Subcommand => {
  const args: Fig.Arg[] = [
    ...command.required_args.map((arg) => ({ name: arg.name })),
    ...command.optional_args.map((arg) => ({
      name: arg.name,
      isOptional: true,
    })),
  ];
  const options = command.named_flags
    .map(toOption)
    .filter((option): option is Fig.Option => option !== undefined);

  return {
    name: command.name,
    description: command.description || undefined,
    subcommands:
      command.subcommands.length > 0
        ? command.subcommands.map(toSubcommand)
        : undefined,
    args: args.length > 0 ? args : undefined,
    options: options.length > 0 ? options : undefined,
  };
};

const completionSpec: Fig.Spec = {
  name: "mask",
  description: "A CLI task runner defined by a simple markdown file",
  generateSpec: async (tokens, executeShellCommand) => {
    // `--maskfile <path>` is only honoured by mask as the very first argument
    const maskfileIdx = tokens.indexOf("--maskfile");
    const hasCustomMaskfile =
      maskfileIdx >= 0 && maskfileIdx + 3 <= tokens.length;
    const args = hasCustomMaskfile
      ? ["--maskfile", tokens[maskfileIdx + 1], "--introspect"]
      : ["--introspect"];

    try {
      const { stdout } = await executeShellCommand({
        command: "mask",
        args,
      });
      // mask prints a warning before the JSON in some cases, so start at the first brace
      const json = JSON.parse(stdout.slice(stdout.indexOf("{")));
      const commands: MaskCommand[] = json.commands ?? [];
      return {
        name: "mask",
        subcommands: commands.map(toSubcommand),
      };
    } catch {
      return { name: "mask" };
    }
  },
  subcommands: [
    {
      name: "help",
      description: "Prints this message or the help of the given subcommand(s)",
    },
  ],
  options: [
    {
      name: "--maskfile",
      description: "Path to a different maskfile you want to use",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--introspect",
      description: "Print out the maskfile command structure in json",
    },
    {
      name: ["-h", "--help"],
      description: "Prints help information",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Prints version information",
    },
  ],
};

export default completionSpec;
