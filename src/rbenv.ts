// rbenv v1.3.2 (git tag and Homebrew formula, 2026-11-20); install/uninstall from
// ruby-build v20261119 (git tag and Homebrew formula). Source: libexec/ usage
// headers, `--complete` handlers and README of rbenv/rbenv, bin/rbenv-install
// and bin/rbenv-uninstall of rbenv/ruby-build (read statically)

const lines = (out: string) =>
  out
    .split("\n")
    .filter(Boolean)
    .map((name) => ({ name }));

const installVersionsGenerator: Fig.Generator = {
  script: ["rbenv", "install", "-L"],
  postProcess: lines,
};

const installedVersionsGenerator: Fig.Generator = {
  script: ["rbenv", "versions", "--bare"],
  postProcess: lines,
};

const shimsGenerator: Fig.Generator = {
  script: ["rbenv", "shims", "--short"],
  postProcess: lines,
};

const commandsGenerator: Fig.Generator = {
  script: ["rbenv", "commands"],
  postProcess: lines,
};

const installedVersionArg: Fig.Arg = {
  name: "version",
  isOptional: true,
  suggestions: [{ name: "system", description: "Use the system Ruby" }],
  generators: installedVersionsGenerator,
};

const executableArg: Fig.Arg = {
  name: "command",
  generators: shimsGenerator,
};

const commandArg: Fig.Arg = {
  name: "command",
  generators: commandsGenerator,
};

const completionSpec: Fig.Spec = {
  name: "rbenv",
  description:
    "Pick a Ruby version for your application and guarantee that your development environment matches production",
  options: [
    { name: ["-v", "--version"], description: "Show the rbenv version" },
    { name: ["-h", "--help"], description: "Show help" },
    {
      name: "--debug",
      description:
        "Print debug information about rbenv internals (same as RBENV_DEBUG=1)",
    },
  ],
  subcommands: [
    {
      name: "commands",
      description: "List all available rbenv commands",
      options: [
        {
          name: "--sh",
          description: "List only shell commands",
          exclusiveOn: ["--no-sh"],
        },
        {
          name: "--no-sh",
          description: "Exclude shell commands",
          exclusiveOn: ["--sh"],
        },
      ],
    },
    {
      name: "completions",
      description: "List completions for an rbenv command",
      hidden: true,
      args: [commandArg, { name: "args", isOptional: true, isVariadic: true }],
    },
    {
      name: "exec",
      description: "Run an executable with the selected Ruby version",
      args: { ...executableArg, isCommand: true },
    },
    {
      name: "global",
      description: "Set or show the global Ruby version",
      args: installedVersionArg,
    },
    {
      name: "help",
      description: "Display help for a command",
      args: { ...commandArg, isOptional: true },
      options: [{ name: "--usage", description: "Show only the usage line" }],
    },
    {
      name: "hooks",
      description: "List hook scripts for a given rbenv command",
      args: {
        name: "command",
        suggestions: [
          "exec",
          "rehash",
          "version-name",
          "version-origin",
          "which",
        ],
      },
    },
    {
      name: "init",
      description: "Configure the shell environment for rbenv",
      args: {
        name: "shell",
        isOptional: true,
        isVariadic: true,
        suggestions: [
          {
            name: "-",
            description:
              "Print the init script to eval instead of editing shell files",
          },
          "bash",
          "fish",
          "ksh",
          "zsh",
        ],
      },
      options: [
        {
          name: "--no-rehash",
          description: "Skip rehashing shims in the printed init script",
        },
      ],
    },
    {
      name: "install",
      description: "Install a Ruby version using ruby-build",
      args: [
        {
          name: "version",
          description: "Version or definition file; defaults to the local one",
          isOptional: true,
          generators: installVersionsGenerator,
        },
        { name: "configure-args", isOptional: true, isVariadic: true },
      ],
      options: [
        {
          name: ["-l", "--list"],
          description: "List latest stable versions for each Ruby",
        },
        {
          name: ["-L", "--list-all"],
          description: "List all local versions, including outdated ones",
        },
        {
          name: ["-f", "--force"],
          description: "Allow overwriting an existing installed version",
          exclusiveOn: ["-s", "--skip-existing"],
        },
        {
          name: ["-s", "--skip-existing"],
          description: "Avoid overwriting an existing installed version",
          exclusiveOn: ["-f", "--force"],
        },
        {
          name: ["-v", "--verbose"],
          description: "Forward all build output to stdout/stderr",
        },
        {
          name: ["-p", "--patch"],
          description: "Apply a patch from stdin before building",
        },
        {
          name: ["-k", "--keep"],
          description:
            "Keep source tree in RBENV_BUILD_ROOT after installation",
        },
        { name: "--version", description: "Show version of ruby-build" },
      ],
    },
    {
      name: "local",
      description: "Set or show the local application-specific Ruby version",
      args: installedVersionArg,
      options: [
        { name: "--unset", description: "Remove the .ruby-version file" },
      ],
    },
    {
      name: "prefix",
      description: "Display prefix for a Ruby version",
      args: installedVersionArg,
    },
    {
      name: "rehash",
      description: "Regenerate rbenv shims",
    },
    {
      name: "root",
      description:
        "Display the root directory where versions and shims are kept",
    },
    {
      name: "shell",
      description: "Set or show the shell-specific Ruby version",
      args: {
        ...installedVersionArg,
        suggestions: [
          { name: "system", description: "Use the system Ruby" },
          { name: "-", description: "Restore the previously set version" },
        ],
      },
      options: [
        { name: "--unset", description: "Unset RBENV_VERSION in this shell" },
      ],
    },
    {
      name: "shims",
      description: "List existing rbenv shims",
      options: [{ name: "--short", description: "List shim names only" }],
    },
    {
      name: "uninstall",
      description: "Uninstall a specific Ruby version",
      args: { name: "version", generators: installedVersionsGenerator },
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Remove without prompting; no error if the version does not exist",
        },
      ],
    },
    {
      name: "version",
      description: "Show the current Ruby version and its origin",
    },
    {
      name: "version-file",
      description: "Detect the file that sets the current rbenv version",
      args: { name: "dir", isOptional: true, template: "folders" },
    },
    {
      name: "version-file-read",
      description: "Read the Ruby version from a version file",
      hidden: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "version-file-write",
      description: "Write a Ruby version to a version file",
      hidden: true,
      args: [
        { name: "file", template: "filepaths" },
        { name: "version", generators: installedVersionsGenerator },
      ],
    },
    {
      name: "version-name",
      description: "Show the current Ruby version",
    },
    {
      name: "version-origin",
      description: "Explain how the current Ruby version is set",
    },
    {
      name: "versions",
      description: "List installed Ruby versions",
      options: [
        { name: "--bare", description: "List version names only" },
        { name: "--skip-aliases", description: "Skip symlinked versions" },
      ],
    },
    {
      name: "whence",
      description: "List all Ruby versions that contain the given executable",
      args: executableArg,
      options: [{ name: "--path", description: "Show full executable paths" }],
    },
    {
      name: "which",
      description: "Display the full path to an executable",
      args: executableArg,
    },
  ],
};

export default completionSpec;
