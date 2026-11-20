// degit v3.10.1 (npm latest / GitHub tag Rich-Harris/degit v3.10.1, checked 2026-11-19). Source: the npm tarball's
// assets/help.md and dist/bin.js option parser (mri aliases), cross-checked with src/bin.ts, src/aliases.ts and
// docs/CHANGELOG.md in the repo; not run. Excluded: --no-actions and --allow-env, which are only on the unreleased
// main branch (3.11.0). Note -h is documented in help.md but is not an alias in the parser, so only --help is listed.
export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: null | string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null | string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: null | string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License | null;
  allow_forking: boolean;
  is_template: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

const aliasGenerator: Fig.Generator = {
  // `degit ls` prints one "name -> repo" line per saved alias, or "no aliases"
  custom: async (_tokens, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "degit",
      // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
      args: ["ls"],
    });
    return stdout.split("\n").flatMap((line) => {
      const [name, repo] = line.split(" -> ");
      if (!name || !repo) return [];
      return [
        {
          name: name.trim(),
          description: repo.trim(),
          icon: "fig://icon?type=git",
        },
      ];
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "degit",
  description: "Straightforward project scaffolding",
  subcommands: [
    {
      name: "alias",
      description: "Save an alias for a repository",
      args: [
        {
          name: "repo",
          description: "Repository to alias, such as github:user/repo",
        },
        {
          name: "name",
          description: "Name of the alias",
        },
      ],
    },
    {
      name: "unalias",
      description: "Remove a saved alias",
      args: {
        name: "name",
        description: "Alias to remove",
        generators: aliasGenerator,
      },
    },
    {
      name: "ls",
      description: "List saved aliases",
    },
  ],
  args: [
    {
      name: "user/repo",
      description:
        "Source: user/repo, a github:, gitlab:, bitbucket: or gist: shorthand, a repository URL or a saved alias; append #ref for a branch, tag or commit",
      generators: [
        {
          trigger: (newToken, oldToken) =>
            newToken.indexOf("/") !== oldToken.indexOf("/"),
          custom: async (tokens, executeShellCommand) => {
            const lastToken = tokens[tokens.length - 1];
            if (lastToken.includes(":")) return [];
            const username = lastToken.slice(0, lastToken.indexOf("/"));
            const { stdout } = await executeShellCommand({
              command: "curl",
              args: ["-sL", `https://api.github.com/users/${username}/repos`],
            });
            const repos = JSON.parse(stdout) as Repository[];
            if (!Array.isArray(repos)) return [];
            return repos.map((repo) => ({
              name: repo.full_name,
              description: repo.description ?? "Repository",
              priority: repo.is_template ? 51 : 50,
              displayName: repo.name,
              icon: "fig://icon?type=git",
            }));
          },
        },
        aliasGenerator,
      ],
    },
    {
      name: "dest",
      description:
        "Destination directory (default: the current directory, which must be empty unless --force is used)",
      isOptional: true,
      template: "folders",
      suggestCurrentToken: true,
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show the help message",
    },
    {
      name: ["-V", "--version"],
      description: "Show the version",
    },
    {
      name: ["-f", "--force"],
      description: "Allow a non-empty destination directory",
    },
    {
      name: ["-c", "--cache"],
      description: "Only use the local cache (no network)",
    },
    {
      name: ["-F", "--files"],
      description:
        "Clone only the listed files or directories (comma-separated)",
      isRepeatable: true,
      args: {
        name: "paths",
      },
    },
    {
      name: ["-r", "--repo-name"],
      description: "Clone into a directory named after the repository",
    },
    {
      name: ["-v", "--verbose"],
      description: "Extra logging",
    },
    {
      name: ["-m", "--mode"],
      description: "Clone mode, kept for compatibility; tar is the default",
      args: {
        name: "mode",
        suggestions: ["git", "tar"],
      },
    },
  ],
};
export default completionSpec;
