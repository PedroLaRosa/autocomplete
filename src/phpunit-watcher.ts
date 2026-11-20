// phpunit-watcher v1.25.0 (Packagist and GitHub tag 1.25.0, 2026-11-20). Source: bin/phpunit-watcher,
// src/WatcherCommand.php and README.md at tag 1.25.0 plus the symfony/console v8 Application defaults,
// read statically (the binary was not executed). Arguments after "watch" are passed on to PHPUnit.
import phpunit from "./phpunit";

const tests: Fig.Generator = {
  script: ["phpunit", "--list-tests"],
  postProcess: function (out) {
    if (out.startsWith("fatal:")) {
      return [];
    }

    return out
      .split("\n")
      .filter((line) => line.indexOf("::") > 0)
      .map((line) => {
        return {
          name: line.substring(line.indexOf("::") + 2, line.length),
          icon: "fig://icon?type=php",
          description: line.substring(line.indexOf("::") + 2, line.length),
        };
      });
  },
};

// The options of the Symfony application (-h, -V, ...) are persistent and cover the same names
const phpunitOptions: Fig.Option[] = ((phpunit as Fig.Subcommand).options ?? [])
  .filter((option) => {
    const names = Array.isArray(option.name) ? option.name : [option.name];
    return !names.includes("--help") && !names.includes("--version");
  })
  .map((option) =>
    option.name === "--filter"
      ? {
          ...option,
          description: "Watch a specific test",
          args: {
            generators: tests,
            name: "filter",
          },
        }
      : option
  );

const globalOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Display help for the given command",
    isPersistent: true,
  },
  {
    name: "--silent",
    description: "Do not output any message",
    isPersistent: true,
  },
  {
    name: ["-q", "--quiet"],
    description: "Only errors are displayed. All other output is suppressed",
    isPersistent: true,
  },
  {
    name: ["-v", "--verbose"],
    description:
      "Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug",
    isPersistent: true,
    isRepeatable: 3,
  },
  {
    name: ["-V", "--version"],
    description: "Display this application version",
    isPersistent: true,
  },
  {
    name: "--ansi",
    description: "Force ANSI output",
    isPersistent: true,
  },
  {
    name: "--no-ansi",
    description: "Disable ANSI output",
    isPersistent: true,
  },
  {
    name: ["-n", "--no-interaction"],
    description: "Do not ask any interactive question",
    isPersistent: true,
  },
];

const outputFormats = ["txt", "xml", "json", "md"];

const completionSpec: Fig.Spec = {
  name: "phpunit-watcher",
  description: "Automatically rerun PHPUnit tests when source code changes",
  options: globalOptions,
  subcommands: [
    {
      name: "watch",
      description:
        "Rerun PHPUnit tests when source code changes. Arguments are passed on to PHPUnit",
      options: phpunitOptions,
      args: {
        name: "directory|file",
        template: "filepaths",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "help",
      description: "Display help for a command",
      options: [
        {
          name: "--format",
          description: "The output format",
          args: { name: "format", suggestions: outputFormats },
        },
        { name: "--raw", description: "To output raw command help" },
      ],
      args: {
        name: "command_name",
        isOptional: true,
        suggestions: ["watch", "help", "list", "completion"],
      },
    },
    {
      name: "list",
      description: "List commands",
      options: [
        { name: "--raw", description: "To output raw command list" },
        {
          name: "--format",
          description: "The output format",
          args: { name: "format", suggestions: outputFormats },
        },
        {
          name: "--short",
          description: "To skip describing commands' arguments",
        },
      ],
      args: { name: "namespace", isOptional: true },
    },
    {
      name: "completion",
      description: "Dump the shell completion script",
      options: [
        { name: "--debug", description: "Tail the completion debug log" },
      ],
      args: {
        name: "shell",
        isOptional: true,
        suggestions: ["bash", "fish", "zsh"],
      },
    },
  ],
};

export default completionSpec;
