// git-cliff v2.14.2 (latest tag of orhun/git-cliff via git ls-remote, matches the Homebrew formula, 2026-11-19).
// Source: git-cliff/src/args.rs (clap definitions), website/docs/usage/args.md and examples/*.toml read statically
// from a shallow clone of tag v2.14.2; the binary was not built or run. Remote options are visible in default builds.
const flags: Fig.Option[] = [
  {
    name: ["--verbose", "-v"],
    description: "Increases the logging verbosity",
    isRepeatable: true,
    priority: 1,
  },
  {
    name: "--list-templates",
    description:
      "Prints the names of the available templates (built-in and user-defined)",
  },
  {
    name: "--bumped-version",
    description: "Prints bumped version for unreleased changes",
  },
  {
    name: ["--latest", "-l"],
    description: "Processes the commits starting from the latest tag",
  },
  {
    name: "--current",
    description: "Processes the commits that belong to the current tag",
  },
  {
    name: ["--unreleased", "-u"],
    description: "Processes the commits that do not belong to a tag",
  },
  {
    name: "--topo-order",
    description: "Sorts the tags topologically",
  },
  {
    name: "--use-branch-tags",
    description: "Include only the tags that belong to the current branch",
  },
  {
    name: "--no-exec",
    description: "Disables the external command execution",
  },
  {
    name: ["--context", "-x"],
    description: "Prints changelog context as JSON",
  },
  {
    name: "--use-native-tls",
    description: "Load TLS certificates from the native certificate store",
  },
  {
    name: ["--help", "-h"],
    description: "Prints help information",
    priority: 1,
  },
  {
    name: ["--version", "-V"],
    description: "Prints version information",
    priority: 1,
  },
];

const folderPathArg = {
  name: "path",
  template: "folders",
  suggestCurrentToken: true,
} as const;

const filePathArg = {
  name: "path",
  template: "filepaths",
  suggestCurrentToken: true,
} as const;

const patternArg = {
  name: "pattern",
} as const;

const templateGenerator: Fig.Generator = {
  script: ["git-cliff", "--list-templates"],
  postProcess: (out) =>
    out
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((name) => ({
        name,
        description: "Configuration template",
        icon: "fig://icon?type=file",
      })),
};

const remoteOptions = (
  flag: string,
  label: string
): [Fig.Option, Fig.Option] => [
  {
    name: `--${flag}-token`,
    description: `Sets the ${label} API token`,
    args: { name: "token" },
  },
  {
    name: `--${flag}-repo`,
    description: `Sets the ${label} repository`,
    args: { name: "owner/repo" },
  },
];

const options: Fig.Option[] = [
  {
    name: ["--init", "-i"],
    description: "Writes the default configuration file to cliff.toml",
    args: {
      name: "config",
      description: "Name of the configuration template to write",
      isOptional: true,
      generators: templateGenerator,
    },
  },
  {
    name: "--templates-dir",
    description:
      "Sets the directory to look up user-defined templates for --init",
    args: folderPathArg,
  },
  {
    name: "--bump",
    description:
      "Bumps the version for unreleased changes. Optionally with specified version",
    args: {
      name: "bump",
      isOptional: true,
      default: "auto",
      suggestions: ["auto", "major", "minor", "patch"],
    },
  },
  {
    name: ["--config", "-c"],
    description: "Sets the configuration file",
    args: filePathArg,
  },
  {
    name: "--config-url",
    description: "Sets the URL for the configuration file",
    args: { name: "url" },
  },
  {
    name: ["--workdir", "-w"],
    description: "Sets the working directory",
    args: folderPathArg,
  },
  {
    name: ["--repository", "-r"],
    description: "Sets the git repository",
    args: {
      ...folderPathArg,
      isVariadic: true,
      optionsCanBreakVariadicArg: true,
    },
  },
  {
    name: "--include-path",
    description: "Sets the path to include related commits",
    isRepeatable: true,
    args: patternArg,
  },
  {
    name: "--exclude-path",
    description: "Sets the path to exclude related commits",
    isRepeatable: true,
    args: patternArg,
  },
  {
    name: "--tag-pattern",
    description: "Sets the regex for matching git tags",
    args: patternArg,
  },
  {
    name: "--with-commit",
    description: "Sets custom commit messages to include in the changelog",
    isRepeatable: true,
    args: { name: "msg" },
  },
  {
    name: "--with-tag-message",
    description: "Sets custom message for the latest release",
    args: { name: "msg", isOptional: true },
  },
  {
    name: "--skip-tags",
    description: "Sets the tags to skip in the changelog",
    args: patternArg,
  },
  {
    name: "--ignore-tags",
    description: "Sets the tags to ignore in the changelog",
    args: patternArg,
  },
  {
    name: "--count-tags",
    description: "Sets the tags to count in the changelog",
    args: patternArg,
  },
  {
    name: "--limit-tags",
    description: "Limits the number of tags to process",
    args: { name: "n" },
  },
  {
    name: "--skip-commit",
    description: "Sets commits that will be skipped in the changelog",
    isRepeatable: true,
    args: { name: "sha1" },
  },
  {
    name: ["--prepend", "-p"],
    description: "Prepends entries to the given changelog file",
    args: { ...filePathArg, isOptional: true },
  },
  {
    name: ["--output", "-o"],
    description: "Writes output to the given file",
    args: { ...filePathArg, isOptional: true },
  },
  {
    name: ["--tag", "-t"],
    description: "Sets the tag for the latest version",
    args: {
      name: "tag",
    },
  },
  {
    name: ["--body", "-b"],
    description: "Sets the template for the changelog body",
    args: {
      name: "template",
    },
  },
  {
    name: "--body-file",
    description: "Reads the template for the changelog body from a file",
    args: filePathArg,
  },
  {
    name: "--from-context",
    description: "Generates changelog from a JSON context",
    args: filePathArg,
  },
  {
    name: ["--strip", "-s"],
    description: "Strips the given parts from the changelog",
    args: {
      name: "part",
      suggestions: [{ name: "header" }, { name: "footer" }, { name: "all" }],
    },
  },
  {
    name: "--sort",
    description: "Sets sorting of the commits inside sections",
    args: {
      name: "sort",
      default: "oldest",
      suggestions: [{ name: "oldest" }, { name: "newest" }],
    },
  },
  ...remoteOptions("github", "GitHub"),
  ...remoteOptions("gitlab", "GitLab"),
  ...remoteOptions("gitea", "Gitea"),
  ...remoteOptions("bitbucket", "Bitbucket"),
  ...remoteOptions("azure-devops", "Azure DevOps"),
  {
    name: "--http-timeout",
    description: "Sets the HTTP timeout for remote metadata requests",
    args: { name: "secs" },
  },
  {
    name: "--offline",
    description: "Disable network access for remote repositories",
  },
];

const completionSpec: Fig.Spec = {
  name: "git-cliff",
  description: "A highly customizable changelog generator ⛰️",
  options: [...flags, ...options],
  args: {
    name: "range",
    description: "Sets the commit range to process",
    isOptional: true,
    generators: {
      trigger: "..",
      getQueryTerm: ".",
      script: ["git", "rev-list", "--all", "--oneline", "--abbrev-commit"],
      postProcess: (out, tokens) => {
        if (out.startsWith("fatal:")) {
          return [];
        }

        if (out.startsWith("warning:") || out.startsWith("error:")) {
          out = out.slice(out.indexOf("\n") + 1);
        }

        const token = tokens.pop();

        return [
          ...out.split("\n").map((line) => {
            const space = line.indexOf(" ");
            const hash = line.slice(0, space);

            return {
              name: hash,
              insertValue: hash + (token?.includes("..") ? "" : ".."),
              icon: "fig://icon?type=node",
              description: line.slice(space + 1),
              priority: 1,
            };
          }),
          {
            name: "HEAD",
            insertValue: "HEAD" + (token?.includes("..") ? "" : ".."),
            icon: "fig://icon?type=node",
            description: "The current commit",
            priority: 5,
          },
        ];
      },
    },
  },
};
export default completionSpec;
