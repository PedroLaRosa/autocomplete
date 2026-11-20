// ghq v1.12.0 (latest tag of x-motemen/ghq via git ls-remote, matches the Homebrew formula, 2026-11-19).
// Source: commands.go (urfave/cli v3 definitions), main.go and misc/zsh/_ghq read statically from a shallow clone
// of tag v1.12.0; the binary was not built or run.
const vcsSuggestions = [
  "git",
  "github",
  "codecommit",
  "svn",
  "subversion",
  "git-svn",
  "hg",
  "mercurial",
  "darcs",
  "pijul",
  "fossil",
  "bzr",
  "bazaar",
];

const vcsOption = (description: string): Fig.Option => ({
  name: "--vcs",
  description,
  args: { name: "vcs", suggestions: vcsSuggestions },
});

const bareOption = (description: string): Fig.Option => ({
  name: "--bare",
  description,
});

const dryRunOption = (description: string): Fig.Option => ({
  name: "--dry-run",
  description,
});

const repositoryGenerator: Fig.Generator = {
  script: ["ghq", "list"],
  postProcess: (out) =>
    out
      .split("\n")
      .filter(Boolean)
      .map((name) => ({
        name,
        description: "Local repository",
        icon: "fig://icon?type=git",
      })),
};

const completionSpec: Fig.Spec = {
  name: "ghq",
  description:
    "'ghq' provides a way to organize remote repository clones, like go get does. When you clone a remote repository by ghq get, ghq makes a directory under a specific root directory (by default ~/ghq) using the remote repository URL’s host and path",
  subcommands: [
    {
      name: ["get", "clone"],
      description: "Clone/sync with a remote repository",
      options: [
        {
          name: ["-u", "--update"],
          description: "Update local repository if cloned already",
        },
        {
          name: "-p",
          description: "Clone with SSH",
        },
        {
          name: "--shallow",
          description: "Do a shallow clone",
        },
        {
          name: ["-l", "--look"],
          description: "Look after get",
        },
        vcsOption("Specify vcs backend for cloning"),
        {
          name: ["-s", "--silent"],
          description: "Clone or update silently",
        },
        {
          name: "--no-recursive",
          description: "Prevent recursive fetching",
        },
        {
          name: ["-b", "--branch"],
          description:
            "Specify branch name. This flag implies --single-branch on Git",
          args: { name: "branch" },
        },
        {
          name: ["-P", "--parallel"],
          description: "Import parallelly",
        },
        bareOption("Do a bare clone"),
        {
          name: "--clean-bare",
          description:
            "Do a clean bare clone (bare gitdir as a .git subdirectory of the repo directory). Implies --bare",
        },
        {
          name: "--partial",
          description: "Do a partial clone",
          args: {
            name: "partial",
            suggestions: ["blobless", "treeless"],
          },
        },
      ],
      args: {
        name: "<repository URL>|<project>|<user>/<project>|<host>/<user>/<project>",
        description: "Repositories to clone (read from stdin when omitted)",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "list",
      description: "List local repositories",
      options: [
        {
          name: ["-e", "--exact"],
          description: "Perform an exact match",
        },
        vcsOption("Specify vcs backend for matching"),
        {
          name: ["-p", "--full-path"],
          description: "Print full paths",
          exclusiveOn: ["--unique"],
        },
        {
          name: "--unique",
          description: "Print unique subpaths",
          exclusiveOn: ["--full-path"],
        },
        bareOption("Query bare repositories"),
      ],
      args: {
        name: "query",
        isOptional: true,
      },
    },
    {
      name: "rm",
      description: "Remove local repository",
      options: [
        dryRunOption("Do not remove actually"),
        bareOption("Remove a bare repository"),
      ],
      args: {
        name: "<project>|<user>/<project>|<host>/<user>/<project>",
        description: "Local repositories to remove",
        isVariadic: true,
        generators: repositoryGenerator,
      },
    },
    {
      name: "root",
      description: "Show repositories' root",
      options: [
        {
          name: "--all",
          description: "Show all roots",
        },
      ],
    },
    {
      name: "create",
      description: "Create a new repository",
      options: [
        vcsOption("Specify vcs backend explicitly"),
        bareOption("Create a bare repository"),
      ],
      args: {
        name: "<project>|<user>/<project>|<host>/<user>/<project>",
      },
    },
    {
      name: "migrate",
      description: "Migrate existing repository to ghq-managed directory",
      options: [
        {
          name: "-y",
          description: "Skip confirmation prompt",
        },
        dryRunOption("Show what would happen without moving"),
      ],
      args: {
        name: "repository-directory",
        template: "folders",
      },
    },
    {
      name: ["help", "h"],
      description: "Show a list of commands or help for one command",
      args: {
        name: "command",
        isOptional: true,
        suggestions: [
          "get",
          "clone",
          "list",
          "rm",
          "root",
          "create",
          "migrate",
        ],
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help",
      isPersistent: true,
      exclusiveOn: ["--version"],
    },
    {
      name: ["-v", "--version"],
      description: "Print the version",
      exclusiveOn: ["--help"],
    },
  ],
};
export default completionSpec;
