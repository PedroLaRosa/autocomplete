// Laravel Installer v5.33.0 (latest tag/master of laravel/installer, 2026-11-19). Source: NewCommand.php and PackageCommand.php configure() at v5.33.0 plus symfony/console 7.4/8.1 default commands and options (not run).
const formatOption = (rawDescription: string): Fig.Option[] => [
  {
    name: "--format",
    description: "The output format (txt, xml, json, or md)",
    args: {
      name: "format",
      suggestions: ["txt", "xml", "json", "md"],
      default: "txt",
    },
  },
  {
    name: "--raw",
    description: rawDescription,
  },
];

const commandNames = ["new", "package", "help", "list", "completion"];

const completionSpec: Fig.Spec = {
  name: "laravel",
  description: "Laravel Installer",
  subcommands: [
    {
      name: "completion",
      description: "Dump the shell completion script",
      options: [
        {
          name: "--debug",
          description: "Tail the completion debug log",
        },
      ],
      args: {
        name: "shell",
        description:
          'The shell type (e.g. "bash"), the value of the "$SHELL" env var will be used if this is not given',
        isOptional: true,
        suggestions: ["bash", "fish", "zsh"],
      },
    },
    {
      name: "help",
      description: "Display help for a command",
      options: formatOption("To output raw command help"),
      args: {
        name: "command_name",
        description: "The command name",
        isOptional: true,
        suggestions: commandNames,
      },
    },
    {
      name: "list",
      description: "List commands",
      options: [
        ...formatOption("To output raw command list"),
        {
          name: "--short",
          description: "To skip describing commands' arguments",
        },
      ],
      args: {
        name: "namespace",
        description: "The namespace name",
        isOptional: true,
      },
    },
    {
      name: "new",
      description: "Create a new Laravel application",
      args: {
        name: "name",
      },
      options: [
        {
          name: "--dev",
          description: 'Install the latest "development" release',
        },
        {
          name: "--git",
          description: "Initialize a Git repository",
        },
        {
          name: "--branch",
          description: "The branch that should be created for a new repository",
          args: {
            name: "BRANCH",
            default: "main",
          },
        },
        {
          name: "--github",
          description:
            'Create a new repository on GitHub, optionally for the given owner or with the given "gh repo create" flags',
          args: {
            name: "GITHUB",
            isOptional: true,
            default: "false",
          },
        },
        {
          name: "--organization",
          description:
            "The GitHub organization to create the new repository for",
          args: {
            name: "ORGANIZATION",
          },
        },
        {
          name: "--database",
          description: "The database driver your application will use",
          args: {
            name: "DATABASE",
            suggestions: ["mysql", "mariadb", "pgsql", "sqlite", "sqlsrv"],
          },
        },
        {
          name: "--react",
          description: "Install the React Starter Kit",
        },
        {
          name: "--svelte",
          description: "Install the Svelte Starter Kit",
        },
        {
          name: "--vue",
          description: "Install the Vue Starter Kit",
        },
        {
          name: "--livewire",
          description: "Install the Livewire Starter Kit",
        },
        {
          name: "--livewire-class-components",
          description: "Generate stand-alone Livewire class components",
        },
        {
          name: "--workos",
          description: "Use WorkOS for authentication",
        },
        {
          name: "--teams",
          description: "Install team support",
        },
        {
          name: "--no-authentication",
          description: "Do not generate authentication scaffolding",
        },
        {
          name: "--pest",
          description: "Install the Pest testing framework",
        },
        {
          name: "--phpunit",
          description: "Install the PHPUnit testing framework",
        },
        {
          name: "--npm",
          description: "Install and build NPM dependencies",
        },
        {
          name: "--pnpm",
          description: "Install and build NPM dependencies via PNPM",
        },
        {
          name: "--bun",
          description: "Install and build NPM dependencies via Bun",
        },
        {
          name: "--yarn",
          description: "Install and build NPM dependencies via Yarn",
        },
        {
          name: "--no-node",
          description: "Skip installing and building NPM dependencies",
        },
        {
          name: "--boost",
          description: "Install Laravel Boost to improve AI assisted coding",
        },
        {
          name: "--no-boost",
          description: "Skip Laravel Boost installation",
        },
        {
          name: "--using",
          description:
            "Install a custom starter kit from a community maintained package",
          args: {
            name: "USING",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--force"],
          description: "Forces install even if the directory already exists",
        },
      ],
    },
    {
      name: "package",
      description: "Create a new Laravel package",
      args: {
        name: "name",
        isOptional: true,
      },
      options: [
        {
          name: ["-f", "--force"],
          description: "Force install even if the directory already exists",
        },
        {
          name: "--config",
          description: "Include a configuration file",
        },
        {
          name: "--routes",
          description: "Include routes",
        },
        {
          name: "--views",
          description: "Include views",
        },
        {
          name: "--translations",
          description: "Include translations",
        },
        {
          name: "--migrations",
          description: "Include migrations",
        },
        {
          name: "--assets",
          description: "Include assets",
        },
        {
          name: "--commands",
          description: "Include commands",
        },
        {
          name: "--facade",
          description: "Include a facade",
        },
        {
          name: "--boost-skill",
          description: "Include a Laravel Boost skill",
        },
        {
          name: "--author-name",
          description: "Author name",
          args: {
            name: "AUTHOR-NAME",
          },
        },
        {
          name: "--author-email",
          description: "Author email",
          args: {
            name: "AUTHOR-EMAIL",
          },
        },
        {
          name: "--package-name",
          description: "Package name",
          args: {
            name: "PACKAGE-NAME",
          },
        },
        {
          name: "--package-name-human",
          description: "Package display name",
          args: {
            name: "PACKAGE-NAME-HUMAN",
          },
        },
        {
          name: "--package-description",
          description: "Package description",
          args: {
            name: "PACKAGE-DESCRIPTION",
          },
        },
        {
          name: "--vendor-namespace",
          description: "Vendor namespace",
          args: {
            name: "VENDOR-NAMESPACE",
          },
        },
        {
          name: "--class-name",
          description: "Main class name",
          args: {
            name: "CLASS-NAME",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description:
        "Display help for the given command. When no command is given display help for the list command",
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
      name: ["-V", "--version"],
      description: "Display this application version",
    },
    {
      name: "--ansi",
      description: "Force (or disable --no-ansi) ANSI output",
      exclusiveOn: ["--no-ansi"],
      isPersistent: true,
    },
    {
      name: "--no-ansi",
      description: "Disable ANSI output",
      exclusiveOn: ["--ansi"],
      isPersistent: true,
    },
    {
      name: ["-n", "--no-interaction"],
      description: "Do not ask any interactive question",
      isPersistent: true,
    },
    {
      name: ["-v", "--verbose"],
      isRepeatable: 3,
      description:
        "Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
