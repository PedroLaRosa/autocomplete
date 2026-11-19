// hub v2.14.2 (latest release tag of mislav/hub, cross-checked with Homebrew, 2026-11-19).
// Source: static read of the v2.14.2 tag (share/man/man1/hub.1.md and the Usage/Long help
// of every command in commands/*.go); the binary was not run. hub wraps git, so this spec
// reuses the git spec (src/git.ts) and adds hub's own commands, the hub-only flags of the
// extended git commands (clone -p, init -g) and the global --noop flag. Upstream is
// effectively unmaintained (last release 2020, GitHub points users to `gh`).
import git from "./git";

const gitSpec = git as Fig.Subcommand;

const colorOption: Fig.Option = {
  name: "--color",
  description: "Enable colored output even if stdout is not a terminal",
  requiresSeparator: true,
  args: {
    name: "when",
    isOptional: true,
    suggestions: ["always", "never", "auto"],
  },
};

const browseOption = (what: string): Fig.Option => ({
  name: ["-o", "--browse"],
  description: `Open the new ${what} in a web browser`,
});

const copyOption = (what: string): Fig.Option => ({
  name: ["-c", "--copy"],
  description: `Put the URL of the new ${what} to clipboard instead of printing it`,
});

const urlOption: Fig.Option = {
  name: ["-u", "--url"],
  description: "Print the URL instead of opening it",
};

const copyUrlOption: Fig.Option = {
  name: ["-c", "--copy"],
  description: "Put the URL in clipboard instead of opening it",
};

const formatOption = (description: string): Fig.Option => ({
  name: ["-f", "--format"],
  description,
  args: { name: "format" },
});

const limitOption = (what: string): Fig.Option => ({
  name: ["-L", "--limit"],
  description: `Display only the first LIMIT ${what}`,
  args: { name: "limit" },
});

const sortAscendingOption: Fig.Option = {
  name: ["-^", "--sort-ascending"],
  description: "Sort by ascending dates instead of descending",
};

// Message-related options shared by pull-request, issue, release and pr merge
const messageOption = (what: string): Fig.Option => ({
  name: ["-m", "--message"],
  description: `Set the ${what} title and description (text up to the first blank line is the title)`,
  isRepeatable: true,
  args: { name: "message" },
});

const fileOption = (what: string): Fig.Option => ({
  name: ["-F", "--file"],
  description: `Read the ${what} title and description from FILE (use - for standard input)`,
  args: { name: "file", template: "filepaths" },
});

const editOption = (what: string): Fig.Option => ({
  name: ["-e", "--edit"],
  description: `Open the ${what} title and description in a text editor before submitting`,
});

const milestoneOption = (description: string): Fig.Option => ({
  name: ["-M", "--milestone"],
  description,
  args: { name: "name" },
});

const labelsOption = (description: string): Fig.Option => ({
  name: ["-l", "--labels"],
  description,
  args: { name: "labels" },
});

const stateSuggestions = ["open", "closed", "all"];

const gitExtensions: Record<string, Fig.Option[]> = {
  clone: [
    {
      name: "-p",
      description: "Clone private repositories over SSH",
      deprecated: true,
    },
  ],
  init: [
    {
      name: "-g",
      description:
        'After initializing the repository, add the "origin" remote pointing to USER/REPO on GitHub',
    },
  ],
};

const gitSubcommands: Fig.Subcommand[] = (gitSpec.subcommands ?? []).map(
  (subcommand) => {
    const extra =
      typeof subcommand.name === "string"
        ? gitExtensions[subcommand.name]
        : undefined;
    return extra
      ? { ...subcommand, options: [...(subcommand.options ?? []), ...extra] }
      : subcommand;
  },
);

const hubSubcommands: Fig.Subcommand[] = [
  {
    name: "alias",
    description: "Show shell instructions for wrapping git",
    options: [
      {
        name: "-s",
        description: "Output shell script suitable for eval",
      },
    ],
    args: {
      name: "shell",
      description: "Type of shell (default: $SHELL)",
      isOptional: true,
      suggestions: ["bash", "zsh", "sh", "ksh", "csh", "tcsh", "fish", "rc"],
    },
  },
  {
    name: "api",
    description: "Low-level GitHub API request interface",
    options: [
      {
        name: ["-X", "--method"],
        description: "The HTTP method to use for the request",
        args: {
          name: "method",
          default: "GET",
          suggestions: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        },
      },
      {
        name: ["-F", "--field"],
        description: "Data to serialize with the request (value has magic handling)",
        isRepeatable: true,
        args: { name: "KEY=VALUE" },
      },
      {
        name: ["-f", "--raw-field"],
        description: "Same as --field, but sends the value as a plain string",
        isRepeatable: true,
        args: { name: "KEY=VALUE" },
      },
      {
        name: "--input",
        description: "File to read the raw request body from (use - for standard input)",
        args: { name: "file", template: "filepaths" },
      },
      {
        name: ["-H", "--header"],
        description: "Set an HTTP request header",
        isRepeatable: true,
        args: { name: "KEY:VALUE" },
      },
      {
        name: ["-i", "--include"],
        description: "Include HTTP response headers in the output",
      },
      {
        name: ["-t", "--flat"],
        description:
          "Output the response JSON in a line-based key-value format for shell scripts",
      },
      {
        name: "--paginate",
        description:
          "Automatically request and output the next page of results until all resources have been listed",
      },
      colorOption,
      {
        name: "--cache",
        description: "Cache valid responses to GET requests for TTL seconds",
        args: { name: "ttl" },
      },
      {
        name: "--obey-ratelimit",
        description:
          "After exceeding the API rate limit, pause until the reset time and retry the request",
      },
    ],
    args: {
      name: "endpoint",
      description:
        "GitHub API endpoint to send the request to, or graphql for GraphQL queries",
      suggestions: ["graphql", "user", "repos/{owner}/{repo}"],
    },
  },
  {
    name: "browse",
    description: "Open a GitHub repository in a web browser",
    options: [urlOption, copyUrlOption],
    args: [
      {
        name: "repository",
        description: "[USER/]REPOSITORY (default: the current repository)",
        isOptional: true,
      },
      {
        name: "subpage",
        description: "One of wiki, commits, issues, or other (default: tree)",
        isOptional: true,
        suggestions: ["wiki", "commits", "issues", "tree", "blob", "settings"],
      },
    ],
  },
  {
    name: "ci-status",
    description: "Display status of GitHub checks for a commit",
    options: [
      {
        name: ["-v", "--verbose"],
        description: "Print detailed report of all status checks and their URLs",
      },
      formatOption(
        "Pretty print all status checks using FORMAT (implies --verbose)",
      ),
      colorOption,
    ],
    args: {
      name: "commit",
      description: "A commit SHA or branch name (default: HEAD)",
      isOptional: true,
    },
  },
  {
    name: "compare",
    description: "Open a GitHub compare page in a web browser",
    options: [
      urlOption,
      copyUrlOption,
      {
        name: ["-b", "--base"],
        description:
          "Base branch to compare against in case no explicit arguments were given",
        args: { name: "base" },
      },
    ],
    args: [
      {
        name: "owner",
        description: "Owner of the repository for the compare page URL",
        isOptional: true,
      },
      {
        name: "range",
        description: "[BASE...]HEAD branch names, tag names, or commit SHAs",
        isOptional: true,
      },
    ],
  },
  {
    name: "create",
    description: "Create a new repository on GitHub and add a git remote for it",
    options: [
      {
        name: ["-p", "--private"],
        description: "Create a private repository",
      },
      {
        name: ["-d", "--description"],
        description: "A short description of the GitHub repository",
        args: { name: "description" },
      },
      {
        name: ["-h", "--homepage"],
        description: "A URL with more information about the repository",
        args: { name: "homepage" },
      },
      {
        name: "--remote-name",
        description: "Set the name for the new git remote",
        args: { name: "remote", default: "origin" },
      },
      browseOption("repository"),
      copyOption("repository"),
    ],
    args: {
      name: "name",
      description:
        "[ORGANIZATION/]NAME of the repository (default: name of the current directory)",
      isOptional: true,
    },
  },
  {
    name: "delete",
    description: "Delete a repository on GitHub",
    options: [
      {
        name: ["-y", "--yes"],
        description:
          "Skip the confirmation prompt and immediately delete the repository",
      },
    ],
    args: {
      name: "name",
      description: "[ORGANIZATION/]NAME of the repository",
    },
  },
  {
    name: "fork",
    description: "Fork the current repository on GitHub and add a git remote for it",
    options: [
      {
        name: "--no-remote",
        description: "Skip adding a git remote for the fork",
      },
      {
        name: "--remote-name",
        description: "Set the name for the new git remote",
        args: { name: "remote" },
      },
      {
        name: "--org",
        description: "Fork the repository within this organization",
        args: { name: "organization" },
      },
    ],
  },
  {
    name: "gist",
    description: "Create and print GitHub Gists",
    subcommands: [
      {
        name: "create",
        description:
          "Create a new gist (content is read from standard input if no files are given)",
        options: [
          {
            name: "--public",
            description: "Make the new gist public",
          },
          browseOption("gist"),
          copyOption("gist"),
        ],
        args: {
          name: "files",
          template: "filepaths",
          isOptional: true,
          isVariadic: true,
        },
      },
      {
        name: "show",
        description: "Print the contents of a gist",
        args: [
          { name: "id", description: "Gist ID" },
          {
            name: "filename",
            description: "File within the gist (required for gists with multiple files)",
            isOptional: true,
          },
        ],
      },
    ],
  },
  {
    name: "pull-request",
    description: "Create a GitHub Pull Request",
    options: [
      {
        name: ["-f", "--force"],
        description: "Skip the check for unpushed commits",
      },
      messageOption("pull request"),
      {
        name: "--no-edit",
        description:
          "Use the message from the first commit on the branch as title and description without opening an editor",
      },
      fileOption("pull request"),
      editOption("pull request"),
      {
        name: ["-i", "--issue"],
        description: "Convert an issue (referenced by its number) to a pull request",
        args: { name: "issue" },
      },
      browseOption("pull request"),
      copyOption("pull request"),
      {
        name: ["-p", "--push"],
        description: "Push the current branch to HEAD before creating the pull request",
      },
      {
        name: ["-b", "--base"],
        description: "The base branch in the [OWNER:]BRANCH format",
        args: { name: "base" },
      },
      {
        name: ["-h", "--head"],
        description: "The head branch in the [OWNER:]BRANCH format",
        args: { name: "head" },
      },
      {
        name: ["-r", "--reviewer"],
        description: "Comma-separated list of GitHub handles to request a review from",
        args: { name: "users" },
      },
      {
        name: ["-a", "--assign"],
        description: "Comma-separated list of GitHub handles to assign",
        args: { name: "users" },
      },
      milestoneOption("The milestone name to add to this pull request"),
      labelsOption(
        "Comma-separated list of labels to add (created if they do not exist)",
      ),
      {
        name: ["-d", "--draft"],
        description: "Create the pull request as a draft",
      },
      {
        name: "--no-maintainer-edits",
        description:
          "Disallow project maintainers from pushing to the head branch of this fork",
      },
    ],
  },
  {
    name: "pr",
    description: "Manage GitHub Pull Requests for the current repository",
    subcommands: [
      {
        name: "list",
        description: "List pull requests in the current repository",
        options: [
          {
            name: ["-s", "--state"],
            description: "Filter pull requests by state (default: open)",
            args: {
              name: "state",
              suggestions: ["open", "closed", "merged", "all"],
            },
          },
          {
            name: ["-h", "--head"],
            description:
              "Show pull requests started from the specified head branch (OWNER:BRANCH for forks)",
            args: { name: "branch" },
          },
          {
            name: ["-b", "--base"],
            description: "Show pull requests based off the specified branch",
            args: { name: "branch" },
          },
          {
            name: ["-o", "--sort"],
            description: "Sort displayed pull requests (default: created)",
            args: {
              name: "key",
              suggestions: ["created", "updated", "popularity", "long-running"],
            },
          },
          sortAscendingOption,
          formatOption("Pretty print the list of pull requests using FORMAT"),
          limitOption("pull requests"),
          colorOption,
        ],
      },
      {
        name: "checkout",
        description: "Check out the head of a pull request in a new branch",
        args: [
          { name: "pr-number", description: "Pull request number" },
          { name: "branch", isOptional: true },
        ],
      },
      {
        name: "show",
        description: "Open a pull request page in a web browser",
        options: [
          {
            name: ["-h", "--head"],
            description:
              "Look up open pull requests for this head branch (default: current branch)",
            args: { name: "head" },
          },
          urlOption,
          copyUrlOption,
          formatOption(
            "Print information about the pull request using FORMAT instead of opening it",
          ),
          colorOption,
        ],
        args: {
          name: "pr-number",
          description: "Pull request number",
          isOptional: true,
        },
      },
      {
        name: "merge",
        description: "Merge a pull request in the current repository remotely",
        options: [
          {
            name: ["-m", "--message"],
            description: "Commit subject and body for the merge commit",
            isRepeatable: true,
            args: { name: "message" },
          },
          {
            name: ["-F", "--file"],
            description:
              "Read the subject and body for the merge commit from FILE (use - for standard input)",
            args: { name: "file", template: "filepaths" },
          },
          {
            name: "--head-sha",
            description:
              "Ensure that the head of the pull request matches the commit SHA when merging",
            args: { name: "commit-sha" },
          },
          {
            name: "--squash",
            description: "Squash commits instead of creating a merge commit",
            exclusiveOn: ["--rebase"],
          },
          {
            name: "--rebase",
            description: "Rebase commits on top of the base branch",
            exclusiveOn: ["--squash"],
          },
          {
            name: ["-d", "--delete-branch"],
            description: "Delete the head branch after successfully merging",
          },
        ],
        args: { name: "pr-number", description: "Pull request number" },
      },
    ],
  },
  {
    name: "issue",
    description: "Manage GitHub Issues for the current repository",
    options: [
      {
        name: ["-a", "--assignee"],
        description: "Display only issues assigned to ASSIGNEE",
        args: { name: "assignee" },
      },
      {
        name: ["-c", "--creator"],
        description: "Display only issues created by CREATOR",
        args: { name: "creator" },
      },
      {
        name: ["-@", "--mentioned"],
        description: "Display only issues mentioning USER",
        args: { name: "user" },
      },
      {
        name: ["-s", "--state"],
        description: "Display issues with this state (default: open)",
        args: { name: "state", suggestions: stateSuggestions },
      },
      formatOption("Pretty print the contents of the issues using FORMAT"),
      milestoneOption("Display only issues for a GitHub milestone with this name"),
      labelsOption("Display only issues with certain labels"),
      {
        name: ["-d", "--since"],
        description:
          "Display only issues updated on or after DATE in ISO 8601 format",
        args: { name: "date" },
      },
      {
        name: ["-o", "--sort"],
        description: "Sort displayed issues (default: created)",
        args: {
          name: "key",
          suggestions: ["created", "updated", "comments"],
        },
      },
      sortAscendingOption,
      limitOption("issues"),
      {
        name: "--include-pulls",
        description: "Include pull requests as well as issues",
      },
      colorOption,
    ],
    subcommands: [
      {
        name: "show",
        description: "Show an existing issue",
        options: [
          formatOption("Pretty print the issue using FORMAT"),
          colorOption,
        ],
        args: { name: "number", description: "Issue number" },
      },
      {
        name: "create",
        description: "Open an issue in the current repository",
        options: [
          messageOption("issue"),
          fileOption("issue"),
          editOption("issue"),
          browseOption("issue"),
          copyOption("issue"),
          {
            name: ["-a", "--assign"],
            description: "Comma-separated list of GitHub handles to assign",
            args: { name: "users" },
          },
          milestoneOption("Add the issue to the GitHub milestone with this name"),
          labelsOption("Comma-separated list of labels to add to the issue"),
        ],
      },
      {
        name: "update",
        description: "Update fields of an existing issue",
        options: [
          messageOption("issue"),
          fileOption("issue"),
          editOption("issue"),
          {
            name: ["-a", "--assign"],
            description: "Comma-separated list of GitHub handles to assign",
            args: { name: "users" },
          },
          milestoneOption("Add the issue to the GitHub milestone with this name"),
          labelsOption("Comma-separated list of labels to set on the issue"),
          {
            name: ["-s", "--state"],
            description: "Set the state of the issue",
            args: { name: "state", suggestions: ["open", "closed"] },
          },
        ],
        args: { name: "number", description: "Issue number" },
      },
      {
        name: "labels",
        description: "List the labels available in this repository",
        options: [
          {
            ...colorOption,
            description: "Enable colored output for the labels list",
          },
        ],
      },
      {
        name: "transfer",
        description: "Transfer an issue to another repository",
        args: [
          { name: "number", description: "Issue number" },
          { name: "repo", description: "[OWNER/]REPOSITORY to transfer the issue to" },
        ],
      },
    ],
  },
  {
    name: "release",
    description: "Manage GitHub Releases for the current repository",
    options: [
      {
        name: ["-d", "--include-drafts"],
        description: "List drafts together with published releases",
      },
      {
        name: ["-p", "--exclude-prereleases"],
        description: "Exclude prereleases from the list",
      },
      limitOption("releases"),
      formatOption("Pretty print releases using FORMAT (default: %T%n)"),
      colorOption,
    ],
    subcommands: [
      {
        name: "show",
        description: "Show GitHub release notes for a tag",
        options: [
          {
            name: ["-d", "--show-downloads"],
            description: 'Include the "Downloads" section',
          },
          formatOption("Pretty print the release using FORMAT"),
          colorOption,
        ],
        args: { name: "tag", description: "Git tag name of the release" },
      },
      {
        name: "create",
        description: "Create a GitHub release for a tag",
        options: createOrEditReleaseOptions(),
        args: { name: "tag", description: "Git tag name for this release" },
      },
      {
        name: "edit",
        description: "Edit the GitHub release for a tag",
        options: createOrEditReleaseOptions(),
        args: { name: "tag", description: "Git tag name of the release" },
      },
      {
        name: "download",
        description: "Download the assets attached to the release for a tag",
        options: [
          {
            name: ["-i", "--include"],
            description: "Only download files that match the glob PATTERN",
            args: { name: "pattern" },
          },
        ],
        args: { name: "tag", description: "Git tag name of the release" },
      },
      {
        name: "delete",
        description:
          "Delete the release and its assets for a tag (does not remove the git tag)",
        args: { name: "tag", description: "Git tag name of the release" },
      },
    ],
  },
  {
    name: "sync",
    description: "Fetch git objects from upstream and update local branches",
    options: [colorOption],
  },
  {
    name: "help",
    description: "Show the help page for a command",
    options: [
      {
        name: "--plain-text",
        description: "Skip man page lookup and display raw help text",
      },
    ],
    args: {
      name: "command",
      description: "A command, or hub-COMMAND for hub extensions to a git command",
      isOptional: true,
    },
  },
  {
    name: "version",
    description: "Show git version and hub client version",
  },
];

function createOrEditReleaseOptions(): Fig.Option[] {
  return [
    editOption("release"),
    {
      name: ["-d", "--draft"],
      description: "Create a draft release",
    },
    {
      name: ["-p", "--prerelease"],
      description: "Create a pre-release",
    },
    browseOption("release"),
    copyOption("release"),
    {
      name: ["-a", "--attach"],
      description:
        "Attach a file as an asset for this release (FILE#TEXT sets the asset label)",
      isRepeatable: true,
      args: { name: "file", template: "filepaths" },
    },
    messageOption("release"),
    fileOption("release"),
    {
      name: ["-t", "--commitish"],
      description:
        "A commit SHA or branch name to attach the release to, if the tag does not exist yet",
      args: { name: "target" },
    },
  ];
}

const completionSpec: Fig.Spec = {
  ...gitSpec,
  name: "hub",
  description: "Make git easier with GitHub",
  options: [
    {
      name: "--noop",
      description: "Print the commands that would be run instead of running them",
    },
    ...(gitSpec.options ?? []),
  ],
  subcommands: [...hubSubcommands, ...gitSubcommands],
};

export default completionSpec;
