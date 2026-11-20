// direnv v2.38.2 (latest release tag of github.com/direnv/direnv, cross-checked with the Homebrew formula, 2026-11-20).
// Source: static read of internal/cmd/cmd_*.go (command table, aliases, private commands, shell list in shell.go),
// man/direnv.1.md and CHANGELOG.md at tag v2.38.2; the binary was not built or run in the sandbox.
import { filepaths } from "@tabsmith/autocomplete-generators";

const PRIORITY_TOP_THRESHOLD = 76;
const PRIORITY_BOTTOM_THRESHOLD = 49;

/*
 *  Generators
 */
const envrcFilepathsGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  template: "filepaths",
  filterTemplateSuggestions: (paths) => {
    // Matches both .envrc and .env files
    const isEnvFile = (fileName: string) => fileName.includes(".env");
    return paths
      .filter((file) => isEnvFile(file.name) || file.name.endsWith("/"))
      .map((file) => ({
        ...file,
        priority: isEnvFile(file.name) && PRIORITY_TOP_THRESHOLD,
        ...suggestOptions,
      }));
  },
});

const dotenvFilepathsGenerator = filepaths({
  matches: /\.env(?!rc)/g,
  editFileSuggestions: { priority: PRIORITY_TOP_THRESHOLD },
});

/*
 *  Reusable suggestions
 */
const toShellSuggestions = (shells: string[]): Partial<Fig.Suggestion>[] =>
  shells.map((shell) => ({
    name: shell,
    icon: "🐚",
  }));

// Shells that `direnv hook` can generate a hook for
const hookShellSuggestions = toShellSuggestions([
  "bash",
  "zsh",
  "fish",
  "tcsh",
  "elvish",
  "pwsh",
  "murex",
]);

// Every output format direnv knows (`direnv export`, `dotenv`, `dump`, `watch`, ...)
const shellSuggestions = toShellSuggestions([
  "bash",
  "zsh",
  "fish",
  "tcsh",
  "elvish",
  "pwsh",
  "murex",
  "json",
  "vim",
  "gha",
  "gzenv",
  "systemd",
]);

/*
 *  Reusable specs
 */
const helpSpec: Partial<Fig.Subcommand> = {
  description: "Shows this help",
  args: {
    name: "SHOW_PRIVATE",
    description: "Any string",
    isOptional: true,
  },
};

const versionSpec: Partial<Fig.Subcommand> = {
  description:
    "Prints the version or checks that direnv is no older than VERSION_AT_LEAST",
  args: {
    name: "VERSION_AT_LEAST",
    isOptional: true,
  },
};

/*
 *  Completion spec
 */
const completionSpec: Fig.Spec = {
  name: "direnv",
  description: "Unclutter your .profile",
  subcommands: [
    {
      name: ["allow", "permit", "grant"],
      description:
        "Grants direnv permission to load the given .envrc or .env file",
      isDangerous: true,
      args: {
        name: "PATH_TO_RC",
        generators: envrcFilepathsGenerator({ isDangerous: true }),
        isOptional: true,
      },
    },
    {
      name: ["deny", "block", "disallow", "revoke"],
      description: "Revokes the authorization of a given .envrc or .env file",
      isDangerous: true,
      args: {
        name: "PATH_TO_RC",
        generators: envrcFilepathsGenerator({ isDangerous: true }),
        isOptional: true,
      },
    },
    {
      name: "edit",
      description:
        "Opens PATH_TO_RC or the current .envrc or .env into an $EDITOR and allow the file to be loaded afterwards",
      args: {
        name: "PATH_TO_RC",
        generators: envrcFilepathsGenerator(),
        isOptional: true,
      },
    },
    {
      name: "exec",
      description:
        "Executes a command after loading the first .envrc or .env found in DIR",
      args: [
        {
          name: "DIR",
          template: "folders",
        },
        {
          name: "COMMAND",
          isCommand: true,
          isDangerous: true,
        },
      ],
    },
    {
      name: "fetchurl",
      description: "Fetches a given URL into direnv's CAS",
      args: [
        {
          name: "url",
        },
        {
          name: "integrity-hash",
          description:
            "Check if the `integrity hash` is equal to the hash value of the file obtained from the `url`",
          isOptional: true,
        },
      ],
    },
    {
      name: "help",
      ...helpSpec,
    },
    {
      name: "hook",
      description: "Used to setup the shell hook",
      args: {
        name: "SHELL",
        suggestions: hookShellSuggestions,
      },
    },
    {
      name: "log",
      description: "Logs a given message",
      options: [
        {
          name: "--status",
          description: "Log the message as a status message",
          exclusiveOn: ["--error"],
        },
        {
          name: "--error",
          description: "Log the message as an error",
          exclusiveOn: ["--status"],
        },
      ],
      args: {
        name: "message",
      },
    },
    {
      name: "prune",
      description: "Removes old allowed and required files",
      isDangerous: true,
    },
    {
      name: "reload",
      description: "Triggers an env reload",
      isDangerous: true,
    },
    {
      name: "status",
      description: "Prints some debug status information",
      options: [
        {
          name: "--json",
          description: "Print the status as JSON",
        },
      ],
    },
    {
      name: "stdlib",
      description:
        "Displays the stdlib available in the .envrc execution context",
    },
    {
      name: "version",
      ...versionSpec,
    },
    {
      name: "check-required",
      description: "Checks if required files have been allowed",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: [
        {
          name: "SHELL",
          suggestions: shellSuggestions,
        },
        {
          name: "ENVRC_PATH",
          template: "filepaths",
        },
        {
          name: "PATH",
          description: "Path relative to the .envrc",
          template: "filepaths",
          isVariadic: true,
        },
      ],
    },
    {
      name: "apply_dump",
      description:
        "Accepts a filename containing `direnv dump` output and generates a series of bash export statements to apply the given env",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: {
        name: "FILE",
        template: "filepaths",
        isDangerous: true,
      },
    },
    {
      name: "show_dump",
      description: "Show the data inside of a dump for debugging purposes",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: {
        name: "DUMP",
        template: "filepaths",
      },
    },
    {
      name: "dotenv",
      description:
        "Transforms a .env file to evaluatable `export KEY=PAIR` statements",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: [
        {
          name: "SHELL",
          suggestions: shellSuggestions,
          isOptional: true,
        },
        {
          name: "PATH_TO_DOTENV",
          generators: dotenvFilepathsGenerator,
        },
      ],
    },
    {
      name: "dump",
      description:
        "Used to export the inner bash state at the end of execution",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: [
        {
          name: "SHELL",
          suggestions: shellSuggestions,
          isOptional: true,
        },
        {
          name: "FILE",
          description: "Overwrites by dump data",
          template: "filepaths",
          isOptional: true,
          isDangerous: true,
        },
      ],
    },
    {
      name: "export",
      description:
        "Loads an .envrc or .env and prints the diff in terms of exports",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: {
        name: "SHELL",
        suggestions: shellSuggestions,
      },
    },
    {
      name: "watch",
      description: "Adds a path to the list that direnv watches for changes",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: [
        {
          name: "SHELL",
          suggestions: shellSuggestions,
        },
        {
          name: "PATH",
          template: "filepaths",
          isVariadic: true,
        },
      ],
    },
    {
      name: "watch-dir",
      description:
        "Recursively adds a directory to the list that direnv watches for changes",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: [
        {
          name: "SHELL",
          suggestions: shellSuggestions,
        },
        {
          name: "DIR",
          template: "folders",
        },
      ],
    },
    {
      name: "watch-list",
      description:
        "Pipe pairs of `mtime path` to stdin to build a list of files to watch",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: {
        name: "SHELL",
        suggestions: shellSuggestions,
        isOptional: true,
      },
    },
    {
      name: "watch-print",
      description: "Prints the watched paths",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      options: [
        {
          name: "--null",
          description: "Separate the paths with NUL instead of a newline",
        },
      ],
    },
    {
      name: "current",
      description:
        "Reports whether direnv's view of a file is current (or stale)",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
  ],
  options: [
    {
      name: "--version",
      ...versionSpec,
    },
    {
      name: "--help",
      ...helpSpec,
    },
  ],
};

export default completionSpec;
