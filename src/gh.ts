// GitHub CLI v2.103.3 (2026-10-26). Source: `gh help reference` + `--help` on
// every subcommand. Installed extensions (dash, enhance, notify, stack) and the
// user alias `co` are left out: they are per-machine, not part of gh.

import {
  filepaths,
  keyValue,
  valueList,
} from "@tabsmith/autocomplete-generators";

const filterMessages = (out: string): string => {
  return out.startsWith("warning:") || out.startsWith("error:")
    ? out.split("\n").slice(1).join("\n")
    : out;
};

const postProcessRemoteBranches: Fig.Generator["postProcess"] = (out) => {
  const output = filterMessages(out);

  if (output.startsWith("fatal:")) {
    return [];
  }

  return output.split("\n").map((elm) => {
    // Trim and remove the remote part of the branch name (origin/, fork/...)
    let name = elm.trim().replace(/\w+\//, "");

    const parts = elm.match(/\S+/g);
    if (parts.length > 1) {
      if (parts[0] === "*") {
        // We are in a detached HEAD state
        if (elm.includes("HEAD detached")) {
          return {};
        }
        // Current branch
        return {
          name: elm.replace("*", "").trim(),
          description: "Current branch",
          priority: 100,
          icon: "⭐️",
        };
      } else if (parts[0] === "+") {
        // Branch checked out in another worktree.
        name = elm.replace("+", "").trim();
      }
    }

    return {
      name,
      description: "Branch",
      icon: "fig://icon?type=git",
      priority: 75,
    };
  });
};

interface RepoDataType {
  isPrivate: boolean;
  nameWithOwner: string;
  description: string | null;
}

const listRepoMapFunction = (repo: RepoDataType) => ({
  name: repo.nameWithOwner,
  description: repo.description,
  //be able to see if the repo is private at a glance
  icon: repo.isPrivate ? "🔒" : "👀",
});

const ghGenerators: Record<string, Fig.Generator> = {
  listCustomRepositories: {
    trigger: "/",
    //execute is script then postProcess
    custom: async (tokens, execute) => {
      //get the last command token
      const last = tokens.pop();

      //gatekeeper
      if (!last) return [];

      /**
       * this turns this input:
       * `withfig/autocomplete`
       *
       * into:
       * ["withfig", "autocomplete"]
       */
      const userRepoSplit = last.split("/");

      // make sure it has some length.
      if (userRepoSplit.length === 0) return [];

      //get first element of arr
      const userOrOrg = userRepoSplit.shift();

      // make sure it has some existence.
      if (!userOrOrg) return [];

      //run `gh repo list` cmd
      const { stdout, status } = await execute({
        command: "gh",
        args: [
          "repo",
          "list",
          userOrOrg,
          "--limit",
          "9999",
          "--json",
          "nameWithOwner,description,isPrivate",
        ],
      });

      // make sure it has some existence.
      if (status !== 0) return [];

      //parse the JSON string output of the command
      const repoArr: RepoDataType[] = JSON.parse(stdout);

      return repoArr.map(listRepoMapFunction);
    },
  },
  listRepositories: {
    /*
     * based on the gh api (use this instead as it also returns repos in the orgs that the user is part of)
     * https://cli.github.com/manual/gh_api
     *
     * --jq https://cli.github.com/manual/gh_help_formatting https://www.baeldung.com/linux/jq-command-json
     */
    script: [
      "gh",
      "api",
      "graphql",
      "--paginate",
      "-f",
      "query='query($endCursor: String) { viewer { repositories(first: 100, after: $endCursor) { nodes { isPrivate, nameWithOwner, description } pageInfo { hasNextPage endCursor }}}}'",
      "--jq",
      ".data.viewer.repositories.nodes[]",
    ],
    postProcess: (out) => {
      if (out) {
        /**
         * the string thats returned bt the command will contain lines like this:
         *
         * {...data}
         * {...data}
         * etc
         *
         * so the string needs to be transformed into a json array by adding commas on all newline chars then wrapping in square braces
         *
         * compared to none paginating request this is a touch slower 300ms or so, but it fixes the over 100 repos issue!
         *
         */
        const jsonifiedOutString = `[${out.replace(/(?:\r\n|\r|\n)/g, ",")}]`;
        try {
          const data: RepoDataType[] = JSON.parse(jsonifiedOutString);

          return data.map(listRepoMapFunction);
        } catch {
          return [];
        }
      }
      return [];
    },
  },
  listPR: {
    cache: { strategy: "stale-while-revalidate" },
    script: ["gh", "pr", "list", "--json=number,title,headRefName,state"],
    postProcess: (out) => {
      interface PR {
        headRefName: string;
        number: number;
        state: string;
        title: string;
      }
      const items = JSON.parse(out) as PR[];
      return items.map((line) => {
        const { number, title, headRefName, state } = line;
        return {
          name: number.toString(),
          displayName: title,
          description: `#${number} | ${headRefName}`,
          icon: state === "OPEN" ? "✅" : "☑️",
        };
      });
    },
  },
  listIssue: {
    cache: { strategy: "stale-while-revalidate" },
    script: ["gh", "issue", "list", "--json=number,title,state"],
    postProcess: (out) => {
      interface Issue {
        number: number;
        state: string;
        title: string;
      }
      const items = JSON.parse(out) as Issue[];
      return items.map(({ number, title, state }) => ({
        name: number.toString(),
        displayName: title,
        description: `#${number}`,
        icon: state === "OPEN" ? "✅" : "☑️",
      }));
    },
  },
  listAlias: {
    script: ["gh", "alias", "list"],
    postProcess: (out) => {
      const aliases = out.split("\n").map((line) => {
        const [name, content] = line.split(":");

        return { name: name.trim(), content: content.trim() };
      });

      return aliases.map(({ name, content }) => ({
        name,
        description: `Alias for '${content}'`,
        icon: "fig://icon?type=commandkey",
      }));
    },
  },
  remoteBranches: {
    script: [
      "git",
      "--no-optional-locks",
      "branch",
      "-r",
      "--no-color",
      "--sort=-committerdate",
    ],
    postProcess: postProcessRemoteBranches,
  },
};

const cloneGitFlags: Fig.Option = {
  name: "--",
  description: "Flags to pass to git when cloning",
  priority: 25,
  args: {
    name: "flags",
    description: "Flags to pass to git when cloning",
    isVariadic: true,
  },
};

const rootAliasArg: Fig.Arg = {
  name: "alias",
  description: "Custom user defined gh alias",
  isOptional: true,
  generators: ghGenerators.listAlias,
  parserDirectives: {
    alias: async (token, executeShellCommand) => {
      const { stdout } = await executeShellCommand({
        command: "gh",
        args: ["alias", "list"],
      });
      const alias = stdout
        .split("\n")
        .find((line) => line.startsWith(`${token}:\t`));

      if (!alias) {
        throw new Error("Failed to parse alias");
      }

      return alias.slice(token.length + 1).trim();
    },
  },
};

const agentTaskListJsonFields = [
  "completedAt",
  "createdAt",
  "id",
  "name",
  "pullRequestNumber",
  "pullRequestState",
  "pullRequestTitle",
  "pullRequestUrl",
  "repository",
  "state",
  "updatedAt",
  "user",
];

const authStatusJsonFields = ["hosts"];

const cacheListJsonFields = [
  "createdAt",
  "id",
  "key",
  "lastAccessedAt",
  "ref",
  "sizeInBytes",
  "version",
];

const codespaceListJsonFields = [
  "createdAt",
  "displayName",
  "gitStatus",
  "lastUsedAt",
  "machineName",
  "name",
  "owner",
  "repository",
  "state",
  "vscsTarget",
];

const codespacePortsJsonFields = [
  "browseUrl",
  "label",
  "sourcePort",
  "visibility",
];

const codespaceViewJsonFields = [
  "billableOwner",
  "createdAt",
  "devcontainerPath",
  "displayName",
  "environmentId",
  "gitStatus",
  "idleTimeoutMinutes",
  "lastUsedAt",
  "location",
  "machineDisplayName",
  "machineName",
  "name",
  "owner",
  "prebuild",
  "recentFolders",
  "repository",
  "retentionExpiresAt",
  "retentionPeriodDays",
  "state",
  "vscsTarget",
];

const configKeys: Fig.Suggestion[] = [
  {
    name: "api_host",
    description:
      "Experimental: the hostname to use when making API requests for a GitHub host. Note: this is not a security boundary and requests to the canonical host will remain authenticated",
  },
  {
    name: "git_protocol",
    description: "The protocol to use for git clone and push operations",
  },
  {
    name: "editor",
    description: "The text editor program to use for authoring text",
  },
  {
    name: "prompt",
    description: "Toggle interactive prompting in the terminal",
  },
  {
    name: "prefer_editor_prompt",
    description:
      "Toggle preference for editor-based interactive prompting in the terminal",
  },
  {
    name: "expiring_credentials",
    description:
      "Toggle preference for expiring credentials that gh refreshes automatically when logging in",
  },
  {
    name: "pager",
    description: "The terminal pager program to send standard output to",
  },
  {
    name: "http_unix_socket",
    description:
      "The path to a Unix socket through which to make an HTTP connection",
  },
  { name: "browser", description: "The web browser to use for opening URLs" },
  {
    name: "clipboard",
    description: "Whether to copy one-time OAuth device codes to the clipboard",
  },
  {
    name: "color_labels",
    description:
      "Whether to display labels using their RGB hex color codes in terminals that support truecolor",
  },
  {
    name: "accessible_colors",
    description: "Whether customizable, 4-bit accessible colors should be used",
  },
  {
    name: "accessible_prompter",
    description: "Whether an accessible prompter should be used",
  },
  {
    name: "spinner",
    description: "Whether to use an animated spinner as a progress indicator",
  },
  {
    name: "telemetry",
    description: "Whether telemetry is enabled, disabled, or logging",
  },
];

const discussionListJsonFields = [
  "answerChosenAt",
  "answerChosenBy",
  "answered",
  "author",
  "body",
  "category",
  "closed",
  "closedAt",
  "createdAt",
  "id",
  "labels",
  "locked",
  "number",
  "stateReason",
  "title",
  "updatedAt",
  "url",
];

const discussionViewJsonFields = [
  "answerChosenAt",
  "answerChosenBy",
  "answered",
  "author",
  "body",
  "category",
  "closed",
  "closedAt",
  "comments",
  "createdAt",
  "id",
  "labels",
  "locked",
  "number",
  "reactionGroups",
  "state",
  "stateReason",
  "title",
  "updatedAt",
  "url",
];

const extensionSearchJsonFields = [
  "createdAt",
  "defaultBranch",
  "description",
  "forksCount",
  "fullName",
  "hasDownloads",
  "hasIssues",
  "hasPages",
  "hasProjects",
  "hasWiki",
  "homepage",
  "id",
  "isArchived",
  "isDisabled",
  "isFork",
  "isPrivate",
  "language",
  "license",
  "name",
  "openIssuesCount",
  "owner",
  "pushedAt",
  "size",
  "stargazersCount",
  "updatedAt",
  "url",
  "visibility",
  "watchersCount",
];

const issueArtifactListJsonFields = [
  "body",
  "bodyHtml",
  "createdAt",
  "creator",
  "description",
  "id",
  "name",
  "number",
  "type",
  "updatedAt",
  "updatedByActor",
  "url",
];

const issueArtifactViewJsonFields = [
  "body",
  "bodyHtml",
  "createdAt",
  "creator",
  "description",
  "id",
  "name",
  "number",
  "type",
  "updatedAt",
  "updatedByActor",
  "url",
  "versions",
];

const issueListJsonFields = [
  "assignees",
  "author",
  "blockedBy",
  "blocking",
  "body",
  "closed",
  "closedAt",
  "closedByPullRequestsReferences",
  "comments",
  "createdAt",
  "id",
  "isPinned",
  "issueType",
  "labels",
  "milestone",
  "number",
  "parent",
  "projectCards",
  "projectItems",
  "reactionGroups",
  "state",
  "stateReason",
  "subIssues",
  "subIssuesSummary",
  "title",
  "updatedAt",
  "url",
];

const labelListJsonFields = [
  "color",
  "createdAt",
  "description",
  "id",
  "isDefault",
  "name",
  "updatedAt",
  "url",
];

const prChecksJsonFields = [
  "bucket",
  "completedAt",
  "description",
  "event",
  "link",
  "name",
  "startedAt",
  "state",
  "workflow",
];

const prListJsonFields = [
  "additions",
  "assignees",
  "author",
  "autoMergeRequest",
  "baseRefName",
  "baseRefOid",
  "body",
  "changedFiles",
  "closed",
  "closedAt",
  "closingIssuesReferences",
  "comments",
  "commits",
  "createdAt",
  "deletions",
  "files",
  "fullDatabaseId",
  "headRefName",
  "headRefOid",
  "headRepository",
  "headRepositoryOwner",
  "id",
  "isCrossRepository",
  "isDraft",
  "labels",
  "latestReviews",
  "maintainerCanModify",
  "mergeCommit",
  "mergeStateStatus",
  "mergeable",
  "mergedAt",
  "mergedBy",
  "milestone",
  "number",
  "potentialMergeCommit",
  "projectCards",
  "projectItems",
  "reactionGroups",
  "reviewDecision",
  "reviewRequests",
  "reviews",
  "state",
  "statusCheckRollup",
  "title",
  "updatedAt",
  "url",
];

const releaseListJsonFields = [
  "createdAt",
  "isDraft",
  "isImmutable",
  "isLatest",
  "isPrerelease",
  "name",
  "publishedAt",
  "tagName",
];

const releaseViewJsonFields = [
  "apiUrl",
  "assets",
  "author",
  "body",
  "createdAt",
  "databaseId",
  "id",
  "isDraft",
  "isImmutable",
  "isPrerelease",
  "name",
  "publishedAt",
  "tagName",
  "tarballUrl",
  "targetCommitish",
  "uploadUrl",
  "url",
  "zipballUrl",
];

const repoAutolinkListJsonFields = [
  "id",
  "isAlphanumeric",
  "keyPrefix",
  "urlTemplate",
];

const repoDeployKeyListJsonFields = [
  "createdAt",
  "id",
  "key",
  "readOnly",
  "title",
];

const repoListJsonFields = [
  "archivedAt",
  "assignableUsers",
  "codeOfConduct",
  "contactLinks",
  "createdAt",
  "defaultBranchRef",
  "deleteBranchOnMerge",
  "description",
  "diskUsage",
  "forkCount",
  "fundingLinks",
  "hasDiscussionsEnabled",
  "hasIssuesEnabled",
  "hasProjectsEnabled",
  "hasWikiEnabled",
  "homepageUrl",
  "id",
  "isArchived",
  "isBlankIssuesEnabled",
  "isEmpty",
  "isFork",
  "isInOrganization",
  "isMirror",
  "isPrivate",
  "isSecurityPolicyEnabled",
  "isTemplate",
  "isUserConfigurationRepository",
  "issueTemplates",
  "issues",
  "labels",
  "languages",
  "latestRelease",
  "licenseInfo",
  "mentionableUsers",
  "mergeCommitAllowed",
  "milestones",
  "mirrorUrl",
  "name",
  "nameWithOwner",
  "openGraphImageUrl",
  "owner",
  "parent",
  "primaryLanguage",
  "projects",
  "projectsV2",
  "pullRequestTemplates",
  "pullRequests",
  "pushedAt",
  "rebaseMergeAllowed",
  "repositoryTopics",
  "securityPolicyUrl",
  "squashMergeAllowed",
  "sshUrl",
  "stargazerCount",
  "templateRepository",
  "updatedAt",
  "url",
  "usesCustomOpenGraphImage",
  "viewerCanAdminister",
  "viewerDefaultCommitEmail",
  "viewerDefaultMergeMethod",
  "viewerHasStarred",
  "viewerPermission",
  "viewerPossibleCommitEmails",
  "viewerSubscription",
  "visibility",
  "watchers",
];

const repoReadDirJsonFields = [
  "gitSHA",
  "gitType",
  "mode",
  "modeOctal",
  "name",
  "nameRaw",
  "path",
  "pathRaw",
  "size",
  "submodule",
  "type",
];

const repoReadFileJsonFields = [
  "content",
  "downloadUrl",
  "encoding",
  "gitSHA",
  "gitUrl",
  "htmlUrl",
  "name",
  "path",
  "size",
  "type",
  "url",
];

const runListJsonFields = [
  "attempt",
  "conclusion",
  "createdAt",
  "databaseId",
  "displayTitle",
  "event",
  "headBranch",
  "headSha",
  "name",
  "number",
  "startedAt",
  "status",
  "updatedAt",
  "url",
  "workflowDatabaseId",
  "workflowName",
];

const runViewJsonFields = [
  "attempt",
  "conclusion",
  "createdAt",
  "databaseId",
  "displayTitle",
  "event",
  "headBranch",
  "headSha",
  "jobs",
  "name",
  "number",
  "startedAt",
  "status",
  "updatedAt",
  "url",
  "workflowDatabaseId",
  "workflowName",
];

const searchCodeJsonFields = [
  "path",
  "repository",
  "sha",
  "textMatches",
  "url",
];

const searchCommitsJsonFields = [
  "author",
  "commit",
  "committer",
  "id",
  "parents",
  "repository",
  "sha",
  "url",
];

const searchIssuesJsonFields = [
  "assignees",
  "author",
  "authorAssociation",
  "body",
  "closedAt",
  "commentsCount",
  "createdAt",
  "id",
  "isLocked",
  "isPullRequest",
  "labels",
  "number",
  "repository",
  "state",
  "title",
  "updatedAt",
  "url",
];

const searchPrsJsonFields = [
  "assignees",
  "author",
  "authorAssociation",
  "body",
  "closedAt",
  "commentsCount",
  "createdAt",
  "id",
  "isDraft",
  "isLocked",
  "isPullRequest",
  "labels",
  "number",
  "repository",
  "state",
  "title",
  "updatedAt",
  "url",
];

const secretListJsonFields = [
  "name",
  "numSelectedRepos",
  "selectedReposURL",
  "updatedAt",
  "visibility",
];

const skillAgents: Fig.Suggestion[] = [
  { name: "github-copilot", description: "GitHub Copilot" },
  { name: "claude-code", description: "Claude Code" },
  { name: "cursor", description: "Cursor" },
  { name: "codex", description: "Codex" },
  { name: "gemini-cli", description: "Gemini CLI" },
  { name: "antigravity", description: "Antigravity" },
  { name: "antigravity-cli", description: "Antigravity CLI" },
  { name: "antigravity2.0", description: "Antigravity 2.0" },
  { name: "adal", description: "AdaL" },
  { name: "amp", description: "Amp" },
  { name: "augment", description: "Augment" },
  { name: "bob", description: "IBM Bob" },
  { name: "cline", description: "Cline" },
  { name: "codebuddy", description: "CodeBuddy" },
  { name: "command-code", description: "Command Code" },
  { name: "continue", description: "Continue" },
  { name: "cortex", description: "Cortex Code" },
  { name: "crush", description: "Crush" },
  { name: "deepagents", description: "Deep Agents" },
  { name: "devin", description: "Devin" },
  { name: "droid", description: "Droid" },
  { name: "firebender", description: "Firebender" },
  { name: "goose", description: "Goose" },
  { name: "grok", description: "Grok" },
  { name: "iflow-cli" },
  { name: "junie", description: "Junie" },
  { name: "kilo", description: "Kilo Code" },
  { name: "kimi-cli", description: "Kimi Code CLI" },
  { name: "kiro-cli", description: "Kiro CLI" },
  { name: "kode", description: "Kode" },
  { name: "mcpjam", description: "MCPJam" },
  { name: "mistral-vibe", description: "Mistral Vibe" },
  { name: "mux", description: "Mux" },
  { name: "neovate", description: "Neovate" },
  { name: "openclaw", description: "OpenClaw" },
  { name: "opencode", description: "OpenCode" },
  { name: "openhands", description: "OpenHands" },
  { name: "pi", description: "Pi" },
  { name: "pochi", description: "Pochi" },
  { name: "qoder", description: "Qoder" },
  { name: "qwen-code", description: "Qwen Code" },
  { name: "replit", description: "Replit" },
  { name: "roo", description: "Roo Code" },
  { name: "trae", description: "Trae" },
  { name: "trae-cn", description: "Trae CN" },
  { name: "universal", description: "Universal" },
  { name: "warp", description: "Warp" },
  { name: "zencoder", description: "Zencoder" },
];

const skillListJsonFields = [
  "agentHosts",
  "path",
  "pinned",
  "scope",
  "skillName",
  "sourceURL",
  "version",
];

const skillSearchJsonFields = [
  "description",
  "namespace",
  "path",
  "repo",
  "skillName",
  "stars",
];

const variableGetJsonFields = [
  "createdAt",
  "name",
  "numSelectedRepos",
  "selectedReposURL",
  "updatedAt",
  "value",
  "visibility",
];

const workflowListJsonFields = ["id", "name", "path", "state"];

const completionSpec: Fig.Spec = {
  name: "gh",
  description: "Work seamlessly with GitHub from the command line",
  args: rootAliasArg,
  subcommands: [
    {
      name: ["agent-task", "agent-tasks", "agent", "agents"],
      description: "Work with agent tasks (preview)",
      subcommands: [
        {
          name: "create",
          description: "Create an agent task (preview)",
          args: { name: "task description", isOptional: true },
          options: [
            {
              name: ["-b", "--base"],
              description:
                "Base branch for the pull request (use default branch if not provided)",
              args: { name: "base" },
            },
            {
              name: ["-a", "--custom-agent"],
              description:
                "Use a custom agent for the task. e.g., use 'my-agent' for the 'my-agent.md' agent",
              args: { name: "custom-agent" },
            },
            { name: "--follow", description: "Follow agent session logs" },
            {
              name: ["-F", "--from-file"],
              description:
                'Read task description from file (use "-" to read from standard input)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: {
                name: "[HOST/]OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
          ],
        },
        {
          name: "list",
          description: "List agent tasks (preview)",
          options: [
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: agentTaskListJsonFields }),
              },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of agent tasks to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "Open agent tasks in the browser",
            },
          ],
        },
        {
          name: "view",
          description: "View an agent task session (preview)",
          args: {
            name: "session-id | pr-number | pr-url | pr-branch",
            isOptional: true,
          },
          options: [
            { name: "--follow", description: "Follow agent session logs" },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: agentTaskListJsonFields }),
              },
            },
            { name: "--log", description: "Show agent session logs" },
            {
              name: ["-R", "--repo"],
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: {
                name: "[HOST/]OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "Open agent task in the browser",
            },
          ],
        },
      ],
    },
    {
      name: "alias",
      description: "Create command shortcuts",
      subcommands: [
        {
          name: "delete",
          description: "Delete set aliases",
          isDangerous: true,
          args: {
            name: "alias",
            isOptional: true,
            generators: ghGenerators.listAlias,
          },
          options: [{ name: "--all", description: "Delete all aliases" }],
        },
        {
          name: "import",
          description: "Import aliases from a YAML file",
          args: { name: "filename", isOptional: true, template: "filepaths" },
          options: [
            {
              name: "--clobber",
              description: "Overwrite existing aliases of the same name",
            },
          ],
        },
        { name: ["list", "ls"], description: "List your aliases" },
        {
          name: "set",
          description: "Create a shortcut for a gh command",
          args: [{ name: "alias" }, { name: "expansion" }],
          options: [
            {
              name: "--clobber",
              description: "Overwrite existing aliases of the same name",
            },
            {
              name: ["-s", "--shell"],
              description:
                "Declare an alias to be passed through a shell interpreter",
            },
          ],
        },
      ],
    },
    {
      name: "api",
      description: "Make an authenticated GitHub API request",
      args: { name: "endpoint" },
      options: [
        {
          name: "--allow-escape-sequences",
          description: "Allow printing terminal escape sequences",
        },
        {
          name: "--cache",
          description: 'Cache the response, e.g. "3600s", "60m", "1h"',
          args: { name: "duration" },
        },
        {
          name: ["-F", "--field"],
          description:
            'Add a typed parameter in key=value format (use "@<path>" or "@-" to read value from file or stdin)',
          isRepeatable: true,
          args: { name: "key=value" },
        },
        {
          name: ["-H", "--header"],
          description: "Add a HTTP request header in key:value format",
          isRepeatable: true,
          args: { name: "key:value" },
        },
        {
          name: "--hostname",
          description: "The GitHub hostname for the request",
          args: { name: "hostname", default: "github.com" },
        },
        {
          name: ["-i", "--include"],
          description:
            "Include HTTP response status line and headers in the output",
        },
        {
          name: "--input",
          description:
            'The file to use as body for the HTTP request (use "-" to read from standard input)',
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-q", "--jq"],
          description:
            "Query to select values from the response using jq syntax",
          args: { name: "jq" },
        },
        {
          name: ["-X", "--method"],
          description: "The HTTP method for the request",
          args: { name: "method", default: "GET" },
        },
        {
          name: "--paginate",
          description:
            "Make additional HTTP requests to fetch all pages of results",
        },
        {
          name: ["-p", "--preview"],
          description:
            "Opt into GitHub API previews (names should omit '-preview')",
          isRepeatable: true,
          args: { name: "preview" },
        },
        {
          name: ["-f", "--raw-field"],
          description: "Add a string parameter in key=value format",
          isRepeatable: true,
          args: { name: "key=value" },
        },
        { name: "--silent", description: "Do not print the response body" },
        {
          name: "--slurp",
          description:
            'Use with "--paginate" to return an array of all pages of either JSON arrays or objects',
        },
        {
          name: ["-t", "--template"],
          description:
            'Format JSON output using a Go template; see "gh help formatting"',
          args: { name: "template" },
        },
        {
          name: "--verbose",
          description: "Include full HTTP request and response in the output",
        },
      ],
    },
    {
      name: ["attestation", "at"],
      description: "Work with artifact attestations",
      subcommands: [
        {
          name: "download",
          description: "Download an artifact's attestations for offline use",
          args: {
            name: "file-path | oci://image-uri",
            isOptional: true,
            template: "filepaths",
          },
          options: [
            {
              name: ["-d", "--digest-alg"],
              description:
                "The algorithm used to compute a digest of the artifact: {sha256|sha512}",
              args: {
                name: "digest-alg",
                default: "sha256",
                suggestions: ["sha256", "sha512"],
              },
            },
            {
              name: "--hostname",
              description: "Configure host to use",
              args: { name: "hostname" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of attestations to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: ["-o", "--owner"],
              description: "GitHub organization to scope attestation lookup by",
              args: { name: "owner" },
            },
            {
              name: "--predicate-type",
              description: "Filter attestations by provided predicate type",
              args: { name: "predicate-type" },
            },
            {
              name: ["-R", "--repo"],
              description: "Repository name in the format <owner>/<repo>",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
          ],
        },
        {
          name: "trusted-root",
          description:
            "Output trusted_root.jsonl contents, likely for offline verification",
          options: [
            {
              name: "--hostname",
              description: "Configure host to use",
              args: { name: "hostname" },
            },
            {
              name: "--tuf-root",
              description: "Path to the TUF root.json file on disk",
              args: { name: "tuf-root" },
            },
            {
              name: "--tuf-url",
              description: "URL to the TUF repository mirror",
              args: { name: "tuf-url" },
            },
            {
              name: "--verify-only",
              description: "Don't output trusted_root.jsonl contents",
            },
          ],
        },
        {
          name: "verify",
          description: "Verify an artifact's integrity using attestations",
          args: {
            name: "file-path | oci://image-uri",
            isOptional: true,
            template: "filepaths",
          },
          options: [
            {
              name: ["-b", "--bundle"],
              description:
                "Path to bundle on disk, either a single bundle in a JSON file or a JSON lines file with multiple bundles",
              args: { name: "bundle" },
            },
            {
              name: "--bundle-from-oci",
              description:
                "When verifying an OCI image, fetch the attestation bundle from the OCI registry instead of from GitHub",
            },
            {
              name: "--cert-identity",
              description:
                "Enforce that the certificate's SubjectAlternativeName matches the provided value exactly",
              args: { name: "cert-identity" },
            },
            {
              name: ["-i", "--cert-identity-regex"],
              description:
                "Enforce that the certificate's SubjectAlternativeName matches the provided regex",
              args: { name: "cert-identity-regex" },
            },
            {
              name: "--cert-oidc-issuer",
              description:
                "Enforce that the issuer of the OIDC token matches the provided value",
              args: {
                name: "cert-oidc-issuer",
                default: "https://token.actions.githubusercontent.com",
              },
            },
            {
              name: "--custom-trusted-root",
              description:
                "Path to a trusted_root.jsonl file; likely for offline verification",
              args: { name: "custom-trusted-root" },
            },
            {
              name: "--deny-self-hosted-runners",
              description:
                "Fail verification for attestations generated on self-hosted runners",
            },
            {
              name: ["-d", "--digest-alg"],
              description:
                "The algorithm used to compute a digest of the artifact: {sha256|sha512}",
              args: {
                name: "digest-alg",
                default: "sha256",
                suggestions: ["sha256", "sha512"],
              },
            },
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: "--hostname",
              description: "Configure host to use",
              args: { name: "hostname" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of attestations to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: "--no-public-good",
              description:
                "Do not verify attestations signed with Sigstore public good instance",
            },
            {
              name: ["-o", "--owner"],
              description: "GitHub organization to scope attestation lookup by",
              args: { name: "owner" },
            },
            {
              name: "--predicate-type",
              description:
                "Enforce that verified attestations' predicate type matches the provided value",
              args: {
                name: "predicate-type",
                default: "https://slsa.dev/provenance/v1",
              },
            },
            {
              name: ["-R", "--repo"],
              description: "Repository name in the format <owner>/<repo>",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--signer-digest",
              description:
                "Enforce that the digest associated with the signer workflow matches the provided value",
              args: { name: "signer-digest" },
            },
            {
              name: "--signer-repo",
              description:
                "Enforce that the workflow that signed the attestation's repository matches the provided value (<owner>/<repo>)",
              args: { name: "signer-repo" },
            },
            {
              name: "--signer-workflow",
              description:
                "Enforce that the workflow that signed the attestation matches the provided value ([host/]<owner>/<repo>/<path>/<to>/<workflow>)",
              args: { name: "signer-workflow" },
            },
            {
              name: "--source-digest",
              description:
                "Enforce that the digest associated with the source repository matches the provided value",
              args: { name: "source-digest" },
            },
            {
              name: "--source-ref",
              description:
                "Enforce that the git ref associated with the source repository matches the provided value",
              args: { name: "source-ref" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Authenticate gh and git with GitHub",
      subcommands: [
        {
          name: "login",
          description: "Log in to a GitHub account",
          options: [
            {
              name: ["-c", "--clipboard"],
              description: "Copy one-time OAuth device code to clipboard",
            },
            {
              name: "--expiring",
              description:
                "Prefer expiring credentials that gh refreshes automatically, if the host supports them",
            },
            {
              name: ["-p", "--git-protocol"],
              description:
                "The protocol to use for git operations on this host: {ssh|https}",
              args: { name: "git-protocol", suggestions: ["ssh", "https"] },
            },
            {
              name: ["-h", "--hostname"],
              description:
                "The hostname of the GitHub instance to authenticate with",
              args: { name: "hostname" },
            },
            {
              name: "--insecure-storage",
              description:
                "Save authentication credentials in plain text instead of credential store",
            },
            {
              name: ["-s", "--scopes"],
              description: "Additional authentication scopes to request",
              isRepeatable: true,
              args: { name: "scopes" },
            },
            {
              name: "--skip-ssh-key",
              description: "Skip generate/upload SSH key prompt",
            },
            {
              name: ["-w", "--web"],
              description: "Open a browser to authenticate",
            },
            {
              name: "--with-token",
              description: "Read token from standard input",
            },
          ],
        },
        {
          name: "logout",
          description: "Log out of a GitHub account",
          options: [
            {
              name: ["-h", "--hostname"],
              description: "The hostname of the GitHub instance to log out of",
              args: { name: "hostname" },
            },
            {
              name: ["-u", "--user"],
              description: "The account to log out of",
              args: { name: "user" },
            },
          ],
        },
        {
          name: "refresh",
          description: "Refresh stored authentication credentials",
          options: [
            {
              name: ["-c", "--clipboard"],
              description: "Copy one-time OAuth device code to clipboard",
            },
            {
              name: "--expiring",
              description:
                "Prefer expiring credentials that gh refreshes automatically, if the host supports them",
            },
            {
              name: ["-h", "--hostname"],
              description: "The GitHub host to use for authentication",
              args: { name: "hostname" },
            },
            {
              name: "--insecure-storage",
              description:
                "Save authentication credentials in plain text instead of credential store",
            },
            {
              name: ["-r", "--remove-scopes"],
              description: "Authentication scopes to remove from gh",
              isRepeatable: true,
              args: { name: "remove-scopes" },
            },
            {
              name: "--reset-scopes",
              description:
                "Reset authentication scopes to the default minimum set of scopes",
            },
            {
              name: ["-s", "--scopes"],
              description: "Additional authentication scopes for gh to have",
              isRepeatable: true,
              args: { name: "scopes" },
            },
          ],
        },
        {
          name: "setup-git",
          description: "Setup git with GitHub CLI",
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Force setup even if the host is not known. Must be used in conjunction with --hostname",
            },
            {
              name: ["-h", "--hostname"],
              description: "The hostname to configure git for",
              args: { name: "hostname" },
            },
          ],
        },
        {
          name: "status",
          description:
            "Display active account and authentication state on each known GitHub host",
          options: [
            {
              name: ["-a", "--active"],
              description: "Display the active account only",
            },
            {
              name: ["-h", "--hostname"],
              description: "Check only a specific hostname's auth status",
              args: { name: "hostname" },
            },
            {
              name: "--jq",
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: authStatusJsonFields }),
              },
            },
            {
              name: "--no-refresh",
              description: "Do not automatically refresh expired tokens",
            },
            {
              name: ["-t", "--show-token"],
              description: "Display the auth token",
            },
            {
              name: "--template",
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "switch",
          description: "Switch active GitHub account",
          options: [
            {
              name: ["-h", "--hostname"],
              description:
                "The hostname of the GitHub instance to switch account for",
              args: { name: "hostname" },
            },
            {
              name: ["-u", "--user"],
              description: "The account to switch to",
              args: { name: "user" },
            },
          ],
        },
        {
          name: "token",
          description:
            "Print the authentication token gh uses for a hostname and account",
          options: [
            {
              name: ["-h", "--hostname"],
              description:
                "The hostname of the GitHub instance authenticated with",
              args: { name: "hostname" },
            },
            {
              name: "--no-refresh",
              description: "Do not automatically refresh an expired token",
            },
            {
              name: ["-u", "--user"],
              description: "The account to output the token for",
              args: { name: "user" },
            },
          ],
        },
      ],
    },
    {
      name: "browse",
      description:
        "Open repositories, issues, pull requests, and more in the browser",
      args: {
        name: "number | path | commit-sha",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        { name: ["-a", "--actions"], description: "Open repository actions" },
        { name: "--blame", description: "Open blame view for a file" },
        {
          name: ["-b", "--branch"],
          description: "Select another branch by passing in the branch name",
          args: { name: "branch", generators: ghGenerators.remoteBranches },
        },
        {
          name: ["-c", "--commit"],
          description:
            "Select another commit by passing in the commit SHA, default is the last commit",
          args: { name: "commit", isOptional: true },
        },
        {
          name: ["-n", "--no-browser"],
          description: "Print destination URL instead of opening the browser",
        },
        { name: ["-p", "--projects"], description: "Open repository projects" },
        { name: ["-r", "--releases"], description: "Open repository releases" },
        {
          name: ["-R", "--repo"],
          description:
            "Select another repository using the [HOST/]OWNER/REPO format",
          args: {
            name: "[HOST/]OWNER/REPO",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
        },
        { name: ["-s", "--settings"], description: "Open repository settings" },
        { name: ["-w", "--wiki"], description: "Open repository wiki" },
      ],
    },
    {
      name: "cache",
      description: "Manage GitHub Actions caches",
      subcommands: [
        {
          name: "delete",
          description: "Delete GitHub Actions caches",
          isDangerous: true,
          args: { name: "cache-id | cache-key", isOptional: true },
          options: [
            {
              name: ["-a", "--all"],
              description:
                "Delete all caches, can be used with --ref to delete all caches for a specific ref",
            },
            {
              name: ["-r", "--ref"],
              description:
                "Delete by cache key and ref, formatted as refs/heads/<branch name> or refs/pull/<number>/merge",
              args: { name: "ref" },
            },
            {
              name: "--succeed-on-no-caches",
              description:
                "Return exit code 0 if no caches found. Must be used in conjunction with --all",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List GitHub Actions caches",
          options: [
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: cacheListJsonFields }),
              },
            },
            {
              name: ["-k", "--key"],
              description: "Filter by cache key prefix",
              args: { name: "key" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of caches to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: ["-O", "--order"],
              description: "Order of caches returned: {asc|desc}",
              args: {
                name: "order",
                default: "desc",
                suggestions: ["asc", "desc"],
              },
            },
            {
              name: ["-r", "--ref"],
              description:
                "Filter by ref, formatted as refs/heads/<branch name> or refs/pull/<number>/merge",
              args: { name: "ref" },
            },
            {
              name: ["-S", "--sort"],
              description:
                "Sort fetched caches: {created_at|last_accessed_at|size_in_bytes}",
              args: {
                name: "sort",
                default: "last_accessed_at",
                suggestions: [
                  "created_at",
                  "last_accessed_at",
                  "size_in_bytes",
                ],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["-R", "--repo"],
          description:
            "Select another repository using the [HOST/]OWNER/REPO format",
          args: {
            name: "[HOST/]OWNER/REPO",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          isPersistent: true,
        },
      ],
    },
    {
      name: ["codespace", "cs"],
      description: "Connect to and manage codespaces",
      subcommands: [
        {
          name: "code",
          description: "Open a codespace in Visual Studio Code",
          options: [
            {
              name: ["-c", "--codespace"],
              description: "Name of the codespace",
              args: { name: "codespace" },
            },
            {
              name: "--insiders",
              description: "Use the insiders version of Visual Studio Code",
            },
            {
              name: ["-R", "--repo"],
              description:
                "Filter codespace selection by repository name (user/repo)",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--repo-owner",
              description:
                "Filter codespace selection by repository owner (username or org)",
              args: { name: "repo-owner" },
            },
            {
              name: ["-w", "--web"],
              description: "Use the web version of Visual Studio Code",
            },
          ],
        },
        {
          name: "cp",
          description: "Copy files between local and remote file systems",
          args: [{ name: "sources", isVariadic: true }, { name: "dest" }],
          options: [
            {
              name: ["-c", "--codespace"],
              description: "Name of the codespace",
              args: { name: "codespace" },
            },
            {
              name: ["-e", "--expand"],
              description: "Expand remote file names on remote shell",
            },
            {
              name: ["-p", "--profile"],
              description: "Name of the SSH profile to use",
              args: { name: "profile" },
            },
            {
              name: ["-r", "--recursive"],
              description: "Recursively copy directories",
            },
            {
              name: ["-R", "--repo"],
              description:
                "Filter codespace selection by repository name (user/repo)",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--repo-owner",
              description:
                "Filter codespace selection by repository owner (username or org)",
              args: { name: "repo-owner" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a codespace",
          options: [
            {
              name: ["-b", "--branch"],
              description: "Repository branch",
              args: { name: "branch" },
            },
            {
              name: "--default-permissions",
              description:
                "Do not prompt to accept additional permissions requested by the codespace",
            },
            {
              name: "--devcontainer-path",
              description:
                "Path to the devcontainer.json file to use when creating codespace",
              args: {
                name: "devcontainer-path",
                generators: filepaths({ extensions: ["json"] }),
              },
            },
            {
              name: ["-d", "--display-name"],
              description:
                "Display name for the codespace (48 characters or less)",
              args: { name: "display-name" },
            },
            {
              name: "--idle-timeout",
              description:
                'Allowed inactivity before codespace is stopped, e.g. "10m", "1h"',
              args: { name: "duration" },
            },
            {
              name: ["-l", "--location"],
              description:
                "Location: {EastUs|SouthEastAsia|WestEurope|WestUs2} (determined automatically if not provided)",
              args: {
                name: "location",
                suggestions: [
                  "EastUs",
                  "SouthEastAsia",
                  "WestEurope",
                  "WestUs2",
                ],
              },
            },
            {
              name: ["-m", "--machine"],
              description: "Hardware specifications for the VM",
              args: { name: "machine" },
            },
            {
              name: ["-R", "--repo"],
              description: "Repository name with owner: user/repo",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--retention-period",
              description:
                'Allowed time after shutting down before the codespace is automatically deleted (maximum 30 days), e.g. "1h", "72h"',
              args: { name: "duration" },
            },
            {
              name: ["-s", "--status"],
              description: "Show status of post-create command and dotfiles",
            },
            {
              name: ["-w", "--web"],
              description:
                "Create codespace from browser, cannot be used with --display-name, --idle-timeout, or --retention-period",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete codespaces",
          isDangerous: true,
          options: [
            { name: "--all", description: "Delete all codespaces" },
            {
              name: ["-c", "--codespace"],
              description: "Name of the codespace",
              args: { name: "codespace" },
            },
            {
              name: "--days",
              description: "Delete codespaces older than N days",
              args: { name: "N" },
            },
            {
              name: ["-f", "--force"],
              description:
                "Skip confirmation for codespaces that contain unsaved changes",
            },
            {
              name: ["-o", "--org"],
              description: "The login handle of the organization (admin-only)",
              args: { name: "login" },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Filter codespace selection by repository name (user/repo)",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--repo-owner",
              description:
                "Filter codespace selection by repository owner (username or org)",
              args: { name: "repo-owner" },
            },
            {
              name: ["-u", "--user"],
              description:
                "The username to delete codespaces for (used with --org)",
              args: { name: "username" },
            },
            {
              name: "-r",
              description:
                "Filter codespace selection by repository name (user/repo)",
              args: { name: "string" },
              deprecated: { description: "Use -R instead" },
            },
          ],
        },
        {
          name: "edit",
          description: "Edit a codespace",
          options: [
            {
              name: ["-c", "--codespace"],
              description: "Name of the codespace",
              args: { name: "codespace" },
            },
            {
              name: ["-d", "--display-name"],
              description: "Set the display name",
              args: { name: "display-name" },
            },
            {
              name: ["-m", "--machine"],
              description: "Set hardware specifications for the VM",
              args: { name: "machine" },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Filter codespace selection by repository name (user/repo)",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--repo-owner",
              description:
                "Filter codespace selection by repository owner (username or org)",
              args: { name: "repo-owner" },
            },
          ],
        },
        {
          name: "jupyter",
          description: "Open a codespace in JupyterLab",
          options: [
            {
              name: ["-c", "--codespace"],
              description: "Name of the codespace",
              args: { name: "codespace" },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Filter codespace selection by repository name (user/repo)",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--repo-owner",
              description:
                "Filter codespace selection by repository owner (username or org)",
              args: { name: "repo-owner" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List codespaces",
          options: [
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: codespaceListJsonFields }),
              },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of codespaces to list",
              args: { name: "int", default: "30" },
            },
            {
              name: ["-o", "--org"],
              description:
                "The login handle of the organization to list codespaces for (admin-only)",
              args: { name: "login" },
            },
            {
              name: ["-R", "--repo"],
              description: "Repository name with owner: user/repo",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-u", "--user"],
              description:
                "The username to list codespaces for (used with --org)",
              args: { name: "username" },
            },
            {
              name: ["-w", "--web"],
              description:
                "List codespaces in the web browser, cannot be used with --user or --org",
            },
          ],
        },
        {
          name: "logs",
          description: "Access codespace logs",
          options: [
            {
              name: ["-c", "--codespace"],
              description: "Name of the codespace",
              args: { name: "codespace" },
            },
            {
              name: ["-f", "--follow"],
              description: "Tail and follow the logs",
            },
            {
              name: ["-R", "--repo"],
              description:
                "Filter codespace selection by repository name (user/repo)",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--repo-owner",
              description:
                "Filter codespace selection by repository owner (username or org)",
              args: { name: "repo-owner" },
            },
          ],
        },
        {
          name: "ports",
          description: "List ports in a codespace",
          subcommands: [
            {
              name: "forward",
              description: "Forward ports",
              args: {
                name: "remote-port:local-port",
                isVariadic: true,
                generators: keyValue({ separator: ":", cache: true }),
              },
              options: [
                {
                  name: "--all-interfaces",
                  description: "Listen on all network interfaces",
                },
              ],
            },
            {
              name: "visibility",
              description: "Change the visibility of the forwarded port",
              args: {
                name: "port:visibility",
                isVariadic: true,
                generators: keyValue({
                  separator: ":",
                  values: ["public", "private", "org"],
                  cache: true,
                }),
              },
            },
          ],
          options: [
            {
              name: ["-c", "--codespace"],
              description: "Name of the codespace",
              args: { name: "codespace" },
              isPersistent: true,
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
              isPersistent: true,
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: codespacePortsJsonFields }),
              },
              isPersistent: true,
            },
            {
              name: ["-R", "--repo"],
              description:
                "Filter codespace selection by repository name (user/repo)",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
              isPersistent: true,
            },
            {
              name: "--repo-owner",
              description:
                "Filter codespace selection by repository owner (username or org)",
              args: { name: "repo-owner" },
              isPersistent: true,
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
              isPersistent: true,
            },
          ],
        },
        {
          name: "rebuild",
          description: "Rebuild a codespace",
          options: [
            {
              name: ["-c", "--codespace"],
              description: "Name of the codespace",
              args: { name: "codespace" },
            },
            { name: "--full", description: "Perform a full rebuild" },
            {
              name: ["-R", "--repo"],
              description:
                "Filter codespace selection by repository name (user/repo)",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--repo-owner",
              description:
                "Filter codespace selection by repository owner (username or org)",
              args: { name: "repo-owner" },
            },
          ],
        },
        {
          name: "ssh",
          description: "SSH into a codespace",
          args: { name: "command", isOptional: true },
          options: [
            {
              name: ["-c", "--codespace"],
              description: "Name of the codespace",
              args: { name: "codespace" },
            },
            {
              name: "--config",
              description: "Write OpenSSH configuration to stdout",
            },
            {
              name: ["-d", "--debug"],
              description: "Log debug data to a file",
            },
            {
              name: "--debug-file",
              description: "Path of the file log to",
              args: { name: "debug-file", template: "filepaths" },
            },
            {
              name: "--profile",
              description: "Name of the SSH profile to use",
              args: { name: "profile" },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Filter codespace selection by repository name (user/repo)",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--repo-owner",
              description:
                "Filter codespace selection by repository owner (username or org)",
              args: { name: "repo-owner" },
            },
            {
              name: "--server-port",
              description: "SSH server port number (0 => pick unused)",
              args: { name: "int" },
            },
          ],
        },
        {
          name: "stop",
          description: "Stop a running codespace",
          options: [
            {
              name: ["-c", "--codespace"],
              description: "Name of the codespace",
              args: { name: "codespace" },
            },
            {
              name: ["-o", "--org"],
              description: "The login handle of the organization (admin-only)",
              args: { name: "login" },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Filter codespace selection by repository name (user/repo)",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--repo-owner",
              description:
                "Filter codespace selection by repository owner (username or org)",
              args: { name: "repo-owner" },
            },
            {
              name: ["-u", "--user"],
              description:
                "The username to stop codespace for (used with --org)",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "view",
          description: "View details about a codespace",
          options: [
            {
              name: ["-c", "--codespace"],
              description: "Name of the codespace",
              args: { name: "codespace" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: codespaceViewJsonFields }),
              },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Filter codespace selection by repository name (user/repo)",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--repo-owner",
              description:
                "Filter codespace selection by repository owner (username or org)",
              args: { name: "repo-owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion scripts",
      options: [
        {
          name: ["-s", "--shell"],
          description: "Shell type: {bash|zsh|fish|powershell}",
          args: {
            name: "shell",
            suggestions: ["bash", "zsh", "fish", "powershell"],
          },
        },
      ],
    },
    {
      name: "config",
      description: "Manage configuration for gh",
      subcommands: [
        { name: "clear-cache", description: "Clear the cli cache" },
        {
          name: "get",
          description: "Print the value of a given configuration key",
          args: { name: "key", suggestions: configKeys },
          options: [
            {
              name: ["-h", "--host"],
              description: "Get per-host setting",
              args: { name: "host" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "Print a list of configuration keys and values",
          options: [
            {
              name: ["-h", "--host"],
              description: "Get per-host configuration",
              args: { name: "host" },
            },
          ],
        },
        {
          name: "set",
          description: "Update configuration with a value for the given key",
          args: [{ name: "key", suggestions: configKeys }, { name: "value" }],
          options: [
            {
              name: ["-h", "--host"],
              description: "Set per-host setting",
              args: { name: "host" },
            },
          ],
        },
      ],
    },
    {
      name: "copilot",
      description: "Run the GitHub Copilot CLI (preview)",
      args: { name: "args", isOptional: true, isVariadic: true },
      options: [
        { name: "--remove", description: "Remove the downloaded Copilot CLI" },
      ],
    },
    {
      name: "discussion",
      description: "Work with GitHub Discussions (preview)",
      subcommands: [
        {
          name: "comment",
          description:
            "Add, edit, or delete a comment or a reply on a discussion (preview)",
          args: { name: "number | discussion-url | comment-id | comment-url" },
          options: [
            {
              name: ["-b", "--body"],
              description: "Comment body text",
              args: { name: "body" },
            },
            {
              name: ["-F", "--body-file"],
              description:
                'Read body text from file (use "-" to read from standard input)',
              args: { name: "body-file", template: "filepaths" },
            },
            { name: "--delete", description: "Delete the specified comment" },
            { name: "--edit", description: "Edit the specified comment" },
            {
              name: ["-R", "--repo"],
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: {
                name: "[HOST/]OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--yes",
              description: "Skip the delete confirmation prompt",
            },
          ],
        },
        {
          name: "create",
          description: "Create a new discussion (preview)",
          options: [
            {
              name: ["-b", "--body"],
              description: "Body for the discussion",
              args: { name: "body" },
            },
            {
              name: ["-F", "--body-file"],
              description:
                'Read body text from file (use "-" to read from stdin)',
              args: { name: "body-file", template: "filepaths" },
            },
            {
              name: ["-c", "--category"],
              description: "Category name or slug for the discussion",
              args: { name: "category" },
            },
            {
              name: ["-l", "--label"],
              description: "Labels to apply to the discussion",
              isRepeatable: true,
              args: { name: "label" },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: {
                name: "[HOST/]OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: ["-t", "--title"],
              description: "Title for the discussion",
              args: { name: "title" },
            },
          ],
        },
        {
          name: "edit",
          description: "Edit a discussion (preview)",
          args: { name: "number | discussion-url" },
          options: [
            {
              name: "--add-label",
              description: "Add labels by name",
              isRepeatable: true,
              args: { name: "name" },
            },
            {
              name: ["-b", "--body"],
              description: "New body for the discussion",
              args: { name: "body" },
            },
            {
              name: ["-F", "--body-file"],
              description:
                'Read body text from file (use "-" to read from standard input)',
              args: { name: "body-file", template: "filepaths" },
            },
            {
              name: ["-c", "--category"],
              description: "New category name or slug for the discussion",
              args: { name: "category" },
            },
            {
              name: "--remove-label",
              description: "Remove labels by name",
              isRepeatable: true,
              args: { name: "name" },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: {
                name: "[HOST/]OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: ["-t", "--title"],
              description: "New title for the discussion",
              args: { name: "title" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List discussions in a repository (preview)",
          options: [
            {
              name: "--after",
              description: "Cursor for the next page of results",
              args: { name: "after" },
            },
            { name: "--answered", description: "Filter by answered state" },
            {
              name: ["-A", "--author"],
              description: "Filter by author",
              args: { name: "author" },
            },
            {
              name: ["-c", "--category"],
              description: "Filter by category name or slug",
              args: { name: "category" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: discussionListJsonFields }),
              },
            },
            {
              name: ["-l", "--label"],
              description: "Filter by label",
              isRepeatable: true,
              args: { name: "label" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of discussions to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: "--order",
              description: "Order of results: {asc|desc}",
              args: {
                name: "order",
                default: "desc",
                suggestions: ["asc", "desc"],
              },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: {
                name: "[HOST/]OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: ["-S", "--search"],
              description: "Search discussions with query",
              args: { name: "query" },
            },
            {
              name: "--sort",
              description: "Sort by field: {created|updated}",
              args: {
                name: "sort",
                default: "updated",
                suggestions: ["created", "updated"],
              },
            },
            {
              name: ["-s", "--state"],
              description: "Filter by state: {open|closed|all}",
              args: {
                name: "state",
                default: "open",
                suggestions: ["open", "closed", "all"],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "List discussions in the web browser",
            },
          ],
        },
        {
          name: "view",
          description: "View a discussion (preview)",
          args: { name: "number | discussion-url | comment-id | comment-url" },
          options: [
            {
              name: "--after",
              description: "Cursor for the next page",
              args: { name: "after" },
            },
            {
              name: ["-c", "--comments"],
              description: "View discussion comments",
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: discussionViewJsonFields }),
              },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of comments or replies to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: "--order",
              description: "Order of comments or replies: {oldest|newest}",
              args: {
                name: "order",
                default: "newest",
                suggestions: ["oldest", "newest"],
              },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: {
                name: "[HOST/]OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "Open a discussion in the browser",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-R", "--repo"],
          description:
            "Select another repository using the [HOST/]OWNER/REPO format",
          args: {
            name: "[HOST/]OWNER/REPO",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          isPersistent: true,
        },
      ],
    },
    {
      name: ["extension", "extensions", "ext"],
      description: "Manage gh extensions",
      subcommands: [
        {
          name: "browse",
          description:
            "Enter a UI for browsing, adding, and removing extensions",
          options: [
            { name: "--debug", description: "Log to /tmp/extBrowse-*" },
            {
              name: ["-s", "--single-column"],
              description: "Render TUI with only one column of text",
            },
          ],
        },
        {
          name: "create",
          description: "Create a new extension",
          args: { name: "name", isOptional: true },
          options: [
            {
              name: "--precompiled",
              description:
                "Create a precompiled extension. Possible values: go, other",
              args: { name: "precompiled" },
            },
          ],
        },
        {
          name: "exec",
          description: "Execute an installed extension",
          args: [
            { name: "name" },
            { name: "args", isOptional: true, isVariadic: true },
          ],
        },
        {
          name: "install",
          description: "Install a gh extension from a repository",
          args: { name: "repository" },
          options: [
            {
              name: "--force",
              description:
                "Force upgrade extension, or ignore if latest already installed",
            },
            {
              name: "--pin",
              description: "Pin extension to a release tag or commit ref",
              args: { name: "pin" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List installed extension commands",
        },
        {
          name: ["remove", "uninstall"],
          description: "Remove an installed extension",
          args: { name: "name" },
        },
        {
          name: "search",
          description: "Search extensions to the GitHub CLI",
          args: { name: "query", isOptional: true },
          options: [
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: extensionSearchJsonFields }),
              },
            },
            {
              name: "--license",
              description: "Filter based on license type",
              isRepeatable: true,
              args: { name: "license" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of extensions to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: "--order",
              description:
                "Order of repositories returned, ignored unless '--sort' flag is specified: {asc|desc}",
              args: {
                name: "order",
                default: "desc",
                suggestions: ["asc", "desc"],
              },
            },
            {
              name: "--owner",
              description: "Filter on owner",
              isRepeatable: true,
              args: { name: "owner" },
            },
            {
              name: "--sort",
              description:
                "Sort fetched repositories: {forks|help-wanted-issues|stars|updated}",
              args: {
                name: "sort",
                default: "best-match",
                suggestions: [
                  "forks",
                  "help-wanted-issues",
                  "stars",
                  "updated",
                ],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "Open the search query in the web browser",
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade installed extensions",
          args: { name: "name", isOptional: true },
          options: [
            { name: "--all", description: "Upgrade all extensions" },
            { name: "--dry-run", description: "Only display upgrades" },
            { name: "--force", description: "Force upgrade extension" },
          ],
        },
      ],
    },
    {
      name: "gist",
      description: "Manage gists",
      subcommands: [
        {
          name: "clone",
          description: "Clone a gist locally",
          args: [
            { name: "gist" },
            { name: "directory", isOptional: true, template: "folders" },
          ],
          options: [cloneGitFlags],
        },
        {
          name: ["create", "new"],
          description: "Create a new gist",
          args: {
            name: "filename... | pattern...",
            isOptional: true,
            template: "filepaths",
          },
          options: [
            {
              name: ["-d", "--desc"],
              description: "A description for this gist",
              args: { name: "desc" },
            },
            {
              name: ["-f", "--filename"],
              description:
                "Provide a filename to be used when reading from standard input",
              args: { name: "filename" },
            },
            {
              name: ["-p", "--public"],
              description: 'List the gist publicly (default "secret")',
            },
            {
              name: ["-w", "--web"],
              description: "Open the web browser with created gist",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a gist",
          isDangerous: true,
          args: { name: "id | url" },
          options: [
            {
              name: "--yes",
              description: "Confirm deletion without prompting",
            },
          ],
        },
        {
          name: "edit",
          description: "Edit one of your gists",
          args: [
            { name: "id | url" },
            { name: "filename", isOptional: true, template: "filepaths" },
          ],
          options: [
            {
              name: ["-a", "--add"],
              description: "Add a new file to the gist",
              args: { name: "add" },
            },
            {
              name: ["-d", "--desc"],
              description: "New description for the gist",
              args: { name: "desc" },
            },
            {
              name: ["-f", "--filename"],
              description: "Select a file to edit",
              args: { name: "filename" },
            },
            {
              name: ["-r", "--remove"],
              description: "Remove a file from the gist",
              args: { name: "remove" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List your gists",
          options: [
            {
              name: "--filter",
              description: "Filter gists using a regular expression",
              args: { name: "expression" },
            },
            {
              name: "--include-content",
              description: "Include gists' file content when filtering",
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of gists to fetch",
              args: { name: "int", default: "10" },
            },
            { name: "--public", description: "Show only public gists" },
            { name: "--secret", description: "Show only secret gists" },
          ],
        },
        {
          name: "rename",
          description: "Rename a file in a gist",
          args: [
            { name: "id | url" },
            { name: "old-filename", template: "filepaths" },
            { name: "new-filename", template: "filepaths" },
          ],
        },
        {
          name: "view",
          description: "View a gist",
          args: { name: "id | url", isOptional: true },
          options: [
            {
              name: "--allow-escape-sequences",
              description: "Allow printing terminal escape sequences",
            },
            {
              name: ["-f", "--filename"],
              description: "Display a single file from the gist",
              args: { name: "filename" },
            },
            { name: "--files", description: "List file names from the gist" },
            {
              name: ["-r", "--raw"],
              description: "Print raw instead of rendered gist contents",
            },
            { name: ["-w", "--web"], description: "Open gist in the browser" },
          ],
        },
      ],
    },
    {
      name: "gpg-key",
      description: "Manage GPG keys",
      subcommands: [
        {
          name: "add",
          description: "Add a GPG key to your GitHub account",
          args: { name: "key-file", isOptional: true, template: "filepaths" },
          options: [
            {
              name: ["-t", "--title"],
              description: "Title for the new key",
              args: { name: "title" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a GPG key from your GitHub account",
          isDangerous: true,
          args: { name: "key-id" },
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "Lists GPG keys in your GitHub account",
        },
      ],
    },
    {
      name: "issue",
      description: "Manage issues",
      subcommands: [
        {
          name: "artifact",
          description: "Work with issue artifacts (preview)",
          subcommands: [
            {
              name: ["create", "new"],
              description: "Create issue artifacts (preview)",
              args: [
                { name: "issue-number | issue-url" },
                {
                  name: "file[#name] | url",
                  isOptional: true,
                  isVariadic: true,
                  template: "filepaths",
                },
              ],
              options: [
                {
                  name: "--attach",
                  description:
                    "Attach an image or video file, in '<file>#<image alt text>' format",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: ["-b", "--body"],
                  description: "Content for a single document",
                  args: { name: "body" },
                },
                {
                  name: ["-F", "--body-file"],
                  description:
                    'Read content for a single artifact from file (use "-" to read from standard input)',
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--name",
                  description: "Name for a single artifact",
                  args: { name: "name" },
                },
                {
                  name: "--type",
                  description:
                    "Type for documents: {generic|plan|embedded_html}",
                  args: {
                    name: "type",
                    suggestions: ["generic", "plan", "embedded_html"],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete issue artifacts (preview)",
              isDangerous: true,
              args: {
                name: "issue artifact-number... | artifact-url...",
                isVariadic: true,
              },
              options: [
                {
                  name: "--yes",
                  description: "Confirm deletion without prompting",
                },
              ],
            },
            {
              name: "download",
              description: "Download issue artifacts (preview)",
              args: {
                name: "issue [artifact-number...] | artifact-url...",
                isVariadic: true,
              },
              options: [
                {
                  name: "--clobber",
                  description: "Overwrite existing files of the same name",
                },
                {
                  name: ["-D", "--dir"],
                  description: "The directory to download files into",
                  args: {
                    name: "directory",
                    default: ".",
                    template: "folders",
                  },
                },
                {
                  name: ["-O", "--output"],
                  description:
                    'The file to write a single artifact to (use "-" to write to standard output)',
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--skip-existing",
                  description:
                    "Skip downloading when files of the same name exist",
                },
                {
                  name: "--version",
                  description:
                    "Download the version with this number from the edit history",
                  args: { name: "number" },
                },
              ],
            },
            {
              name: "edit",
              description: "Edit an issue artifact (preview)",
              args: { name: "issue artifact-number | artifact-url" },
              options: [
                {
                  name: "--attach",
                  description:
                    "Attach an image or video file, in '<file>#<image alt text>' format",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: ["-b", "--body"],
                  description: "New content; for a link, a URL",
                  args: { name: "body" },
                },
                {
                  name: ["-F", "--body-file"],
                  description:
                    'Read new content from file (use "-" to read from standard input)',
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--name",
                  description: "New name",
                  args: { name: "name" },
                },
                {
                  name: "--restore-version",
                  description:
                    "Restore the version with this number from the edit history",
                  args: { name: "number" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List artifacts on an issue (preview)",
              args: { name: "issue-number | issue-url" },
              options: [
                {
                  name: ["-q", "--jq"],
                  description: "Filter JSON output using a jq expression",
                  args: { name: "expression" },
                },
                {
                  name: "--json",
                  description: "Output JSON with the specified fields",
                  args: {
                    name: "fields",
                    generators: valueList({
                      values: issueArtifactListJsonFields,
                    }),
                  },
                },
                {
                  name: ["-L", "--limit"],
                  description: "Maximum number of artifacts to fetch",
                  args: { name: "int" },
                },
                {
                  name: ["-t", "--template"],
                  description:
                    'Format JSON output using a Go template; see "gh help formatting"',
                  args: { name: "template" },
                },
                {
                  name: "--type",
                  description:
                    "Filter by type: {generic|plan|link|embedded_html}",
                  args: {
                    name: "type",
                    suggestions: ["generic", "plan", "link", "embedded_html"],
                  },
                },
              ],
            },
            {
              name: "view",
              description: "View an issue artifact (preview)",
              args: { name: "issue artifact-number | artifact-url" },
              options: [
                {
                  name: ["-q", "--jq"],
                  description: "Filter JSON output using a jq expression",
                  args: { name: "expression" },
                },
                {
                  name: "--json",
                  description: "Output JSON with the specified fields",
                  args: {
                    name: "fields",
                    generators: valueList({
                      values: issueArtifactViewJsonFields,
                    }),
                  },
                },
                {
                  name: ["-t", "--template"],
                  description:
                    'Format JSON output using a Go template; see "gh help formatting"',
                  args: { name: "template" },
                },
                {
                  name: "--version",
                  description:
                    "Show the version with this number from the edit history",
                  args: { name: "number" },
                },
                {
                  name: ["-w", "--web"],
                  description:
                    "Open a document's page on GitHub, or a link's URL",
                },
              ],
            },
          ],
        },
        {
          name: "close",
          description: "Close issue",
          args: { name: "number | url", generators: ghGenerators.listIssue },
          options: [
            {
              name: ["-c", "--comment"],
              description: "Leave a closing comment",
              args: { name: "comment" },
            },
            {
              name: "--duplicate-of",
              description:
                "Mark as duplicate of another issue by number or URL",
              args: { name: "duplicate-of" },
            },
            {
              name: ["-r", "--reason"],
              description:
                "Reason for closing: {completed|not planned|duplicate}",
              args: { name: "reason" },
            },
          ],
        },
        {
          name: "comment",
          description: "Add a comment to an issue",
          args: { name: "number | url", generators: ghGenerators.listIssue },
          options: [
            {
              name: "--attach",
              description:
                "Attach an image or video file, in '<file>#<image alt text>' format",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-b", "--body"],
              description: "The comment body text",
              args: { name: "text" },
            },
            {
              name: ["-F", "--body-file"],
              description:
                'Read body text from file (use "-" to read from standard input)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--create-if-none",
              description:
                "Create a new comment if no comments are found. Can be used only with --edit-last",
            },
            {
              name: "--delete-last",
              description: "Delete the last comment of the current user",
            },
            {
              name: "--edit-last",
              description: "Edit the last comment of the current user",
            },
            {
              name: ["-e", "--editor"],
              description:
                "Skip prompts and open the text editor to write the body in",
            },
            {
              name: ["-w", "--web"],
              description: "Open the web browser to write the comment",
            },
            {
              name: "--yes",
              description:
                "Skip the delete confirmation prompt when --delete-last is provided",
            },
          ],
        },
        {
          name: ["create", "new"],
          description: "Create a new issue",
          options: [
            {
              name: ["-a", "--assignee"],
              description:
                'Assign people by their login. Use "@me" to self-assign',
              isRepeatable: true,
              args: { name: "login" },
            },
            {
              name: "--attach",
              description:
                "Attach an image or video file, in '<file>#<image alt text>' format",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--blocked-by",
              description:
                "Mark the new issue as blocked by these issue numbers or URLs",
              args: { name: "numbers" },
            },
            {
              name: "--blocking",
              description:
                "Mark the new issue as blocking these issue numbers or URLs",
              args: { name: "numbers" },
            },
            {
              name: ["-b", "--body"],
              description: "Supply a body. Will prompt for one otherwise",
              args: { name: "body" },
            },
            {
              name: ["-F", "--body-file"],
              description:
                'Read body text from file (use "-" to read from standard input)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-e", "--editor"],
              description:
                "Skip prompts and open the text editor to write the title and body in. The first line is the title and the remaining text is the body",
            },
            {
              name: ["-l", "--label"],
              description: "Add labels by name",
              isRepeatable: true,
              args: { name: "name" },
            },
            {
              name: ["-m", "--milestone"],
              description: "Add the issue to a milestone by name",
              args: { name: "name" },
            },
            {
              name: "--parent",
              description:
                "Add the new issue as a sub-issue of the specified parent number or URL",
              args: { name: "number" },
            },
            {
              name: ["-p", "--project"],
              description: "Add the issue to projects by title",
              isRepeatable: true,
              args: { name: "title" },
            },
            {
              name: "--recover",
              description: "Recover input from a failed run of create",
              args: { name: "recover" },
            },
            {
              name: ["-T", "--template"],
              description: "Template name to use as starting body text",
              args: { name: "name" },
            },
            {
              name: ["-t", "--title"],
              description: "Supply a title. Will prompt for one otherwise",
              args: { name: "title" },
            },
            {
              name: "--type",
              description: "Set the issue type by name",
              args: { name: "name" },
            },
            {
              name: ["-w", "--web"],
              description: "Open the browser to create an issue",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete issue",
          isDangerous: true,
          args: { name: "number | url", generators: ghGenerators.listIssue },
          options: [
            {
              name: "--yes",
              description: "Confirm deletion without prompting",
            },
          ],
        },
        {
          name: "develop",
          description: "Manage linked branches for an issue",
          args: { name: "number | url", generators: ghGenerators.listIssue },
          options: [
            {
              name: ["-b", "--base"],
              description:
                "Name of the remote branch you want to make your new branch from",
              args: { name: "base" },
            },
            {
              name: "--branch-repo",
              description:
                "Name or URL of the repository where you want to create your new branch",
              args: { name: "branch-repo" },
            },
            {
              name: ["-c", "--checkout"],
              description: "Checkout the branch after creating it",
            },
            {
              name: ["-l", "--list"],
              description: "List linked branches for the issue",
            },
            {
              name: ["-n", "--name"],
              description: "Name of the branch to create",
              args: { name: "name" },
            },
            {
              name: "--worktree",
              description:
                "Check out the branch into a worktree at the given path",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
        {
          name: "edit",
          description: "Edit issues",
          args: {
            name: "numbers | urls",
            generators: ghGenerators.listIssue,
            isVariadic: true,
          },
          options: [
            {
              name: "--add-assignee",
              description:
                'Add assigned users by their login. Use "@me" to assign yourself, or "@copilot" to assign Copilot',
              args: { name: "login" },
            },
            {
              name: "--add-blocked-by",
              description:
                "Add 'blocked by' relationships by issue number or URL",
              args: { name: "number" },
            },
            {
              name: "--add-blocking",
              description:
                "Add 'blocking' relationships by issue number or URL",
              args: { name: "number" },
            },
            {
              name: "--add-label",
              description: "Add labels by name",
              isRepeatable: true,
              args: { name: "name" },
            },
            {
              name: "--add-project",
              description: "Add the issue to projects by title",
              isRepeatable: true,
              args: { name: "title" },
            },
            {
              name: "--add-sub-issue",
              description: "Add sub-issues by number or URL",
              args: { name: "number" },
            },
            {
              name: "--attach",
              description:
                "Attach an image or video file, in '<file>#<image alt text>' format",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-b", "--body"],
              description: "Set the new body",
              args: { name: "body" },
            },
            {
              name: ["-F", "--body-file"],
              description:
                'Read body text from file (use "-" to read from standard input)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-m", "--milestone"],
              description: "Edit the milestone the issue belongs to by name",
              args: { name: "name" },
            },
            {
              name: "--parent",
              description: "Set the parent issue by number or URL",
              args: { name: "number" },
            },
            {
              name: "--remove-assignee",
              description:
                'Remove assigned users by their login. Use "@me" to unassign yourself, or "@copilot" to unassign Copilot',
              args: { name: "login" },
            },
            {
              name: "--remove-blocked-by",
              description:
                "Remove 'blocked by' relationships by issue number or URL",
              args: { name: "number" },
            },
            {
              name: "--remove-blocking",
              description:
                "Remove 'blocking' relationships by issue number or URL",
              args: { name: "number" },
            },
            {
              name: "--remove-label",
              description: "Remove labels by name",
              isRepeatable: true,
              args: { name: "name" },
            },
            {
              name: "--remove-milestone",
              description: "Remove the milestone association from the issue",
            },
            { name: "--remove-parent", description: "Remove the parent issue" },
            {
              name: "--remove-project",
              description: "Remove the issue from projects by title",
              isRepeatable: true,
              args: { name: "title" },
            },
            {
              name: "--remove-sub-issue",
              description: "Remove sub-issues by number or URL",
              args: { name: "number" },
            },
            {
              name: "--remove-type",
              description: "Remove the issue type from the issue",
            },
            {
              name: ["-t", "--title"],
              description: "Set the new title",
              args: { name: "title" },
            },
            {
              name: "--type",
              description: "Set the issue type by name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List issues in a repository",
          options: [
            {
              name: "--app",
              description: "Filter by GitHub App author",
              args: { name: "app" },
            },
            {
              name: ["-a", "--assignee"],
              description: "Filter by assignee",
              args: { name: "assignee" },
            },
            {
              name: ["-A", "--author"],
              description:
                "Filter by author (use --app to filter by a GitHub App)",
              args: { name: "author" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: issueListJsonFields }),
              },
            },
            {
              name: ["-l", "--label"],
              description: "Filter by label",
              isRepeatable: true,
              args: { name: "label" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of issues to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: "--mention",
              description: "Filter by mention",
              args: { name: "mention" },
            },
            {
              name: ["-m", "--milestone"],
              description: "Filter by milestone number or title",
              args: { name: "milestone" },
            },
            {
              name: ["-S", "--search"],
              description: "Search issues with query",
              args: { name: "query" },
            },
            {
              name: ["-s", "--state"],
              description: "Filter by state: {open|closed|all}",
              args: {
                name: "state",
                default: "open",
                suggestions: ["open", "closed", "all"],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: "--type",
              description: "Filter by issue type name",
              args: { name: "name" },
            },
            {
              name: ["-w", "--web"],
              description: "List issues in the web browser",
            },
          ],
        },
        {
          name: "lock",
          description: "Lock issue conversation",
          args: { name: "number | url", generators: ghGenerators.listIssue },
          options: [
            {
              name: ["-r", "--reason"],
              description:
                "Optional reason for locking conversation (off_topic, resolved, spam, too_heated)",
              args: { name: "reason" },
            },
          ],
        },
        {
          name: "pin",
          description: "Pin an issue",
          args: { name: "number | url", generators: ghGenerators.listIssue },
        },
        {
          name: "reopen",
          description: "Reopen issue",
          args: { name: "number | url", generators: ghGenerators.listIssue },
          options: [
            {
              name: ["-c", "--comment"],
              description: "Add a reopening comment",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "status",
          description: "Show status of relevant issues",
          options: [
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: issueListJsonFields }),
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "transfer",
          description: "Transfer issue to another repository",
          args: [
            { name: "number | url", generators: ghGenerators.listIssue },
            { name: "destination-repo" },
          ],
        },
        {
          name: "unlock",
          description: "Unlock issue conversation",
          args: { name: "number | url", generators: ghGenerators.listIssue },
        },
        {
          name: "unpin",
          description: "Unpin an issue",
          args: { name: "number | url", generators: ghGenerators.listIssue },
        },
        {
          name: "view",
          description: "View an issue",
          args: { name: "number | url", generators: ghGenerators.listIssue },
          options: [
            { name: ["-c", "--comments"], description: "View issue comments" },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: issueListJsonFields }),
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "Open an issue in the browser",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-R", "--repo"],
          description:
            "Select another repository using the [HOST/]OWNER/REPO format",
          args: {
            name: "[HOST/]OWNER/REPO",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          isPersistent: true,
        },
      ],
    },
    {
      name: "label",
      description: "Manage labels",
      subcommands: [
        {
          name: "clone",
          description: "Clones labels from one repository to another",
          args: {
            name: "source-repository",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          options: [
            {
              name: ["-f", "--force"],
              description: "Overwrite labels in the destination repository",
            },
          ],
        },
        {
          name: "create",
          description: "Create a new label",
          args: { name: "name" },
          options: [
            {
              name: ["-c", "--color"],
              description: "Color of the label",
              args: { name: "color" },
            },
            {
              name: ["-d", "--description"],
              description: "Description of the label",
              args: { name: "description" },
            },
            {
              name: ["-f", "--force"],
              description:
                "Update the label color and description if label already exists",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a label from a repository",
          isDangerous: true,
          args: { name: "name" },
          options: [
            {
              name: "--yes",
              description: "Confirm deletion without prompting",
            },
          ],
        },
        {
          name: "edit",
          description: "Edit a label",
          args: { name: "name" },
          options: [
            {
              name: ["-c", "--color"],
              description: "Color of the label",
              args: { name: "color" },
            },
            {
              name: ["-d", "--description"],
              description: "Description of the label",
              args: { name: "description" },
            },
            {
              name: ["-n", "--name"],
              description: "New name of the label",
              args: { name: "name" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List labels in a repository",
          options: [
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: labelListJsonFields }),
              },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of labels to fetch",
              isRepeatable: true,
              args: { name: "int", default: "30" },
            },
            {
              name: "--order",
              description: "Order of labels returned: {asc|desc}",
              isRepeatable: true,
              args: {
                name: "order",
                default: "asc",
                suggestions: ["asc", "desc"],
              },
            },
            {
              name: ["-S", "--search"],
              description: "Search label names and descriptions",
              args: { name: "search" },
            },
            {
              name: "--sort",
              description: "Sort fetched labels: {created|name}",
              isRepeatable: true,
              args: {
                name: "sort",
                default: "created",
                suggestions: ["created", "name"],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "List labels in the web browser",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-R", "--repo"],
          description:
            "Select another repository using the [HOST/]OWNER/REPO format",
          args: {
            name: "[HOST/]OWNER/REPO",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          isPersistent: true,
        },
      ],
    },
    { name: "licenses", description: "View third-party license information" },
    {
      name: "org",
      description: "Manage organizations",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List organizations for the authenticated user",
          options: [
            {
              name: ["-L", "--limit"],
              description: "Maximum number of organizations to list",
              args: { name: "int", default: "30" },
            },
          ],
        },
      ],
    },
    {
      name: "pr",
      description: "Manage pull requests",
      subcommands: [
        {
          name: ["checkout", "co"],
          description: "Check out a pull request in git",
          args: {
            name: "number | url | branch",
            isOptional: true,
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: ["-b", "--branch"],
              description:
                "Local branch name to use (default [the name of the head branch])",
              args: { name: "branch" },
            },
            {
              name: "--detach",
              description: "Checkout PR with a detached HEAD",
            },
            {
              name: ["-f", "--force"],
              description:
                "Reset the existing local branch to the latest state of the pull request",
            },
            {
              name: "--recurse-submodules",
              description: "Update all submodules after checkout",
            },
            {
              name: "--worktree",
              description:
                "Check out the pull request into a worktree at the given path",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
        {
          name: "checks",
          description: "Show CI status for a single pull request",
          args: {
            name: "number | url | branch",
            isOptional: true,
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: "--fail-fast",
              description: "Exit watch mode on first check failure",
            },
            {
              name: ["-i", "--interval"],
              description: "Refresh interval in seconds in watch mode",
              args: { name: "int", default: "10" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: prChecksJsonFields }),
              },
            },
            {
              name: "--required",
              description: "Only show checks that are required",
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            { name: "--watch", description: "Watch checks until they finish" },
            {
              name: ["-w", "--web"],
              description: "Open the web browser to show details about checks",
            },
          ],
        },
        {
          name: "close",
          description: "Close a pull request",
          args: {
            name: "number | url | branch",
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: ["-c", "--comment"],
              description: "Leave a closing comment",
              args: { name: "comment" },
            },
            {
              name: ["-d", "--delete-branch"],
              description: "Delete the local and remote branch after close",
            },
          ],
        },
        {
          name: "comment",
          description: "Add a comment to a pull request",
          args: {
            name: "number | url | branch",
            isOptional: true,
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: "--attach",
              description:
                "Attach an image or video file, in '<file>#<image alt text>' format",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-b", "--body"],
              description: "The comment body text",
              args: { name: "text" },
            },
            {
              name: ["-F", "--body-file"],
              description:
                'Read body text from file (use "-" to read from standard input)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--create-if-none",
              description:
                "Create a new comment if no comments are found. Can be used only with --edit-last",
            },
            {
              name: "--delete-last",
              description: "Delete the last comment of the current user",
            },
            {
              name: "--edit-last",
              description: "Edit the last comment of the current user",
            },
            {
              name: ["-e", "--editor"],
              description:
                "Skip prompts and open the text editor to write the body in",
            },
            {
              name: ["-w", "--web"],
              description: "Open the web browser to write the comment",
            },
            {
              name: "--yes",
              description:
                "Skip the delete confirmation prompt when --delete-last is provided",
            },
          ],
        },
        {
          name: ["create", "new"],
          description: "Create a pull request",
          options: [
            {
              name: ["-a", "--assignee"],
              description:
                'Assign people by their login. Use "@me" to self-assign',
              isRepeatable: true,
              args: { name: "login" },
            },
            {
              name: "--attach",
              description:
                "Attach an image or video file, in '<file>#<image alt text>' format",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-B", "--base"],
              description: "The branch into which you want your code merged",
              args: { name: "branch", generators: ghGenerators.remoteBranches },
            },
            {
              name: ["-b", "--body"],
              description: "Body for the pull request",
              args: { name: "body" },
            },
            {
              name: ["-F", "--body-file"],
              description:
                'Read body text from file (use "-" to read from standard input)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-d", "--draft"],
              description: "Mark pull request as a draft",
            },
            {
              name: "--dry-run",
              description:
                "Print details instead of creating the PR. May still push git changes",
            },
            {
              name: ["-e", "--editor"],
              description:
                "Skip prompts and open the text editor to write the title and body in. The first line is the title and the remaining text is the body",
            },
            {
              name: ["-f", "--fill"],
              description: "Use commit info for title and body",
            },
            {
              name: "--fill-first",
              description: "Use first commit info for title and body",
            },
            {
              name: "--fill-verbose",
              description: "Use commits msg+body for description",
            },
            {
              name: ["-H", "--head"],
              description:
                "The branch that contains commits for your pull request (default [current branch])",
              args: { name: "branch", generators: ghGenerators.remoteBranches },
            },
            {
              name: ["-l", "--label"],
              description: "Add labels by name",
              isRepeatable: true,
              args: { name: "name" },
            },
            {
              name: ["-m", "--milestone"],
              description: "Add the pull request to a milestone by name",
              args: { name: "name" },
            },
            {
              name: "--no-maintainer-edit",
              description:
                "Disable maintainer's ability to modify pull request",
            },
            {
              name: ["-p", "--project"],
              description: "Add the pull request to projects by title",
              isRepeatable: true,
              args: { name: "title" },
            },
            {
              name: "--recover",
              description: "Recover input from a failed run of create",
              args: { name: "recover" },
            },
            {
              name: ["-r", "--reviewer"],
              description:
                "Request reviews from people or teams by their handle",
              isRepeatable: true,
              args: { name: "handle" },
            },
            {
              name: ["-T", "--template"],
              description: "Template file to use as starting body text",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-t", "--title"],
              description: "Title for the pull request",
              args: { name: "title" },
            },
            {
              name: ["-w", "--web"],
              description: "Open the web browser to create a pull request",
            },
          ],
        },
        {
          name: "diff",
          description: "View changes in a pull request",
          args: {
            name: "number | url | branch",
            isOptional: true,
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: "--allow-escape-sequences",
              description: "Allow printing terminal escape sequences",
            },
            {
              name: "--color",
              description: "Use color in diff output: {always|never|auto}",
              args: {
                name: "color",
                default: "auto",
                suggestions: ["always", "never", "auto"],
              },
            },
            {
              name: ["-e", "--exclude"],
              description: "Exclude files matching glob patterns from the diff",
              args: { name: "patterns" },
            },
            {
              name: "--name-only",
              description: "Display only names of changed files",
            },
            { name: "--patch", description: "Display diff in patch format" },
            {
              name: ["-w", "--web"],
              description: "Open the pull request diff in the browser",
            },
          ],
        },
        {
          name: "edit",
          description: "Edit a pull request",
          args: {
            name: "number | url | branch",
            isOptional: true,
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: "--add-assignee",
              description:
                'Add assigned users by their login. Use "@me" to assign yourself, or "@copilot" to assign Copilot',
              args: { name: "login" },
            },
            {
              name: "--add-label",
              description: "Add labels by name",
              isRepeatable: true,
              args: { name: "name" },
            },
            {
              name: "--add-project",
              description: "Add the pull request to projects by title",
              isRepeatable: true,
              args: { name: "title" },
            },
            {
              name: "--add-reviewer",
              description:
                'Add or re-request reviewers by their login. Use "@copilot" to request review from Copilot',
              isRepeatable: true,
              args: { name: "login" },
            },
            {
              name: "--attach",
              description:
                "Attach an image or video file, in '<file>#<image alt text>' format",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-B", "--base"],
              description: "Change the base branch for this pull request",
              args: { name: "branch", generators: ghGenerators.remoteBranches },
            },
            {
              name: ["-b", "--body"],
              description: "Set the new body",
              args: { name: "body" },
            },
            {
              name: ["-F", "--body-file"],
              description:
                'Read body text from file (use "-" to read from standard input)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-m", "--milestone"],
              description:
                "Edit the milestone the pull request belongs to by name",
              args: { name: "name" },
            },
            {
              name: "--remove-assignee",
              description:
                'Remove assigned users by their login. Use "@me" to unassign yourself, or "@copilot" to unassign Copilot',
              args: { name: "login" },
            },
            {
              name: "--remove-label",
              description: "Remove labels by name",
              isRepeatable: true,
              args: { name: "name" },
            },
            {
              name: "--remove-milestone",
              description:
                "Remove the milestone association from the pull request",
            },
            {
              name: "--remove-project",
              description: "Remove the pull request from projects by title",
              isRepeatable: true,
              args: { name: "title" },
            },
            {
              name: "--remove-reviewer",
              description:
                'Remove reviewers by their login. Use "@copilot" to remove review request from Copilot',
              isRepeatable: true,
              args: { name: "login" },
            },
            {
              name: ["-t", "--title"],
              description: "Set the new title",
              args: { name: "title" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List pull requests in a repository",
          options: [
            {
              name: "--app",
              description: "Filter by GitHub App author",
              args: { name: "app" },
            },
            {
              name: ["-a", "--assignee"],
              description: "Filter by assignee",
              args: { name: "assignee" },
            },
            {
              name: ["-A", "--author"],
              description:
                "Filter by author (use --app to filter by a GitHub App)",
              args: { name: "author" },
            },
            {
              name: ["-B", "--base"],
              description: "Filter by base branch",
              args: { name: "base", generators: ghGenerators.remoteBranches },
            },
            { name: ["-d", "--draft"], description: "Filter by draft state" },
            {
              name: ["-H", "--head"],
              description:
                'Filter by head branch ("<owner>:<branch>" syntax not supported)',
              args: { name: "head", generators: ghGenerators.remoteBranches },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: prListJsonFields }),
              },
            },
            {
              name: ["-l", "--label"],
              description: "Filter by label",
              isRepeatable: true,
              args: { name: "label" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of items to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: ["-S", "--search"],
              description: "Search pull requests with query",
              args: { name: "query" },
            },
            {
              name: ["-s", "--state"],
              description: "Filter by state: {open|closed|merged|all}",
              args: {
                name: "state",
                default: "open",
                suggestions: ["open", "closed", "merged", "all"],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "List pull requests in the web browser",
            },
          ],
        },
        {
          name: "lock",
          description: "Lock pull request conversation",
          args: { name: "number | url", generators: ghGenerators.listPR },
          options: [
            {
              name: ["-r", "--reason"],
              description:
                "Optional reason for locking conversation (off_topic, resolved, spam, too_heated)",
              args: { name: "reason" },
            },
          ],
        },
        {
          name: "merge",
          description: "Merge a pull request",
          args: {
            name: "number | url | branch",
            isOptional: true,
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: "--admin",
              description:
                "Use administrator privileges to merge a pull request that does not meet requirements",
            },
            {
              name: ["-A", "--author-email"],
              description: "Email text for merge commit author",
              args: { name: "text" },
            },
            {
              name: "--auto",
              description:
                "Automatically merge only after necessary requirements are met",
            },
            {
              name: ["-b", "--body"],
              description: "Body text for the merge commit",
              args: { name: "text" },
            },
            {
              name: ["-F", "--body-file"],
              description:
                'Read body text from file (use "-" to read from standard input)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-d", "--delete-branch"],
              description: "Delete the local and remote branch after merge",
            },
            {
              name: "--disable-auto",
              description: "Disable auto-merge for this pull request",
            },
            {
              name: "--match-head-commit",
              description:
                "Commit SHA that the pull request head must match to allow merge",
              args: { name: "SHA" },
            },
            {
              name: ["-m", "--merge"],
              description: "Merge the commits with the base branch",
            },
            {
              name: ["-r", "--rebase"],
              description: "Rebase the commits onto the base branch",
            },
            {
              name: ["-s", "--squash"],
              description:
                "Squash the commits into one commit and merge it into the base branch",
            },
            {
              name: ["-t", "--subject"],
              description: "Subject text for the merge commit",
              args: { name: "text" },
            },
          ],
        },
        {
          name: "ready",
          description: "Mark a pull request as ready for review",
          args: {
            name: "number | url | branch",
            isOptional: true,
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: "--undo",
              description: 'Convert a pull request to "draft"',
            },
          ],
        },
        {
          name: "reopen",
          description: "Reopen a pull request",
          args: {
            name: "number | url | branch",
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: ["-c", "--comment"],
              description: "Add a reopening comment",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "revert",
          description: "Revert a pull request",
          args: {
            name: "number | url | branch",
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: ["-b", "--body"],
              description: "Body for the revert pull request",
              args: { name: "body" },
            },
            {
              name: ["-F", "--body-file"],
              description:
                'Read body text from file (use "-" to read from standard input)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-d", "--draft"],
              description: "Mark revert pull request as a draft",
            },
            {
              name: ["-t", "--title"],
              description: "Title for the revert pull request",
              args: { name: "title" },
            },
          ],
        },
        {
          name: "review",
          description: "Add a review to a pull request",
          args: {
            name: "number | url | branch",
            isOptional: true,
            generators: ghGenerators.listPR,
          },
          options: [
            { name: ["-a", "--approve"], description: "Approve pull request" },
            {
              name: ["-b", "--body"],
              description: "Specify the body of a review",
              args: { name: "body" },
            },
            {
              name: ["-F", "--body-file"],
              description:
                'Read body text from file (use "-" to read from standard input)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-c", "--comment"],
              description: "Comment on a pull request",
            },
            {
              name: ["-r", "--request-changes"],
              description: "Request changes on a pull request",
            },
          ],
        },
        {
          name: "status",
          description: "Show status of relevant pull requests",
          options: [
            {
              name: ["-c", "--conflict-status"],
              description:
                "Display the merge conflict status of each pull request",
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: prListJsonFields }),
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "unlock",
          description: "Unlock pull request conversation",
          args: { name: "number | url", generators: ghGenerators.listPR },
        },
        {
          name: "update-branch",
          description: "Update a pull request branch",
          args: {
            name: "number | url | branch",
            isOptional: true,
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: "--rebase",
              description:
                "Update PR branch by rebasing on top of latest base branch",
            },
          ],
        },
        {
          name: "view",
          description: "View a pull request",
          args: {
            name: "number | url | branch",
            isOptional: true,
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: ["-c", "--comments"],
              description: "View pull request comments",
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: prListJsonFields }),
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "Open a pull request in the browser",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-R", "--repo"],
          description:
            "Select another repository using the [HOST/]OWNER/REPO format",
          args: {
            name: "[HOST/]OWNER/REPO",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          isPersistent: true,
        },
      ],
    },
    {
      name: "preview",
      description: "Execute previews for gh features",
      subcommands: [
        {
          name: "prompter",
          description: "Execute a test program to preview the prompter",
          args: { name: "prompt type", isOptional: true },
        },
      ],
    },
    {
      name: "project",
      description: "Work with GitHub Projects",
      subcommands: [
        {
          name: "close",
          description: "Close a project",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            { name: "--undo", description: "Reopen a closed project" },
          ],
        },
        {
          name: "copy",
          description: "Copy a project",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--drafts",
              description: "Include draft issues when copying",
            },
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--source-owner",
              description:
                'Login of the source owner. Use "@me" for the current user',
              args: { name: "source-owner" },
            },
            {
              name: "--target-owner",
              description:
                'Login of the target owner. Use "@me" for the current user',
              args: { name: "target-owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: "--title",
              description: "Title for the new project",
              args: { name: "title" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a project",
          options: [
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: "--title",
              description: "Title for the project",
              args: { name: "title" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a project",
          isDangerous: true,
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "edit",
          description: "Edit a project",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: ["-d", "--description"],
              description: "New description of the project",
              args: { name: "description" },
            },
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: "--readme",
              description: "New readme for the project",
              args: { name: "readme" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: "--title",
              description: "New title for the project",
              args: { name: "title" },
            },
            {
              name: "--visibility",
              description: "Change project visibility: {PUBLIC|PRIVATE}",
              args: { name: "visibility", suggestions: ["PUBLIC", "PRIVATE"] },
            },
          ],
        },
        {
          name: "field-create",
          description: "Create a field in a project",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--data-type",
              description:
                "DataType of the new field.: {TEXT|SINGLE_SELECT|DATE|NUMBER}",
              args: {
                name: "data-type",
                suggestions: ["TEXT", "SINGLE_SELECT", "DATE", "NUMBER"],
              },
            },
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--name",
              description: "Name of the new field",
              args: { name: "name" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: "--single-select-options",
              description: "Options for SINGLE_SELECT data type",
              isRepeatable: true,
              args: { name: "single-select-options" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "field-delete",
          description: "Delete a field in a project",
          options: [
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: "--id",
              description: "ID of the field to delete",
              args: { name: "id" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "field-list",
          description: "List the fields in a project",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of fields to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "item-add",
          description: "Add a pull request or an issue to a project",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: "--url",
              description:
                "URL of the issue or pull request to add to the project",
              args: { name: "url" },
            },
          ],
        },
        {
          name: "item-archive",
          description: "Archive an item in a project",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: "--id",
              description: "ID of the item to archive",
              args: { name: "id" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            { name: "--undo", description: "Unarchive an item" },
          ],
        },
        {
          name: "item-create",
          description: "Create a draft issue item in a project",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--body",
              description: "Body for the draft issue",
              args: { name: "body" },
            },
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: "--title",
              description: "Title for the draft issue",
              args: { name: "title" },
            },
          ],
        },
        {
          name: "item-delete",
          description: "Delete an item from a project by ID",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: "--id",
              description: "ID of the item to delete",
              args: { name: "id" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "item-edit",
          description: "Edit an item in a project",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--body",
              description: "Body of the draft issue item",
              args: { name: "body" },
            },
            { name: "--clear", description: "Remove field value" },
            {
              name: "--date",
              description: "Date value for the field (YYYY-MM-DD)",
              args: { name: "date" },
            },
            {
              name: "--field",
              description: "Name of the field to update",
              args: { name: "field" },
            },
            {
              name: "--field-id",
              description: "ID of the field to update",
              args: { name: "field-id" },
            },
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: "--id",
              description: "ID of the item to edit",
              args: { name: "id" },
            },
            {
              name: "--iteration-id",
              description: "ID of the iteration value to set on the field",
              args: { name: "iteration-id" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--number",
              description: "Number value for the field",
              args: { name: "float" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: "--project-id",
              description: "ID of the project to which the field belongs to",
              args: { name: "project-id" },
            },
            {
              name: "--single-select-option-id",
              description:
                "ID of the single select option value to set on the field",
              args: { name: "single-select-option-id" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: "--text",
              description: "Text value for the field",
              args: { name: "text" },
            },
            {
              name: "--title",
              description: "Title of the draft issue item",
              args: { name: "title" },
            },
            {
              name: "--url",
              description:
                "URL of the issue or pull request whose project item to edit",
              args: { name: "url" },
            },
            {
              name: "--value",
              description: "Value to set on the field named by --field",
            },
          ],
        },
        {
          name: "item-list",
          description: "List the items in a project",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--field",
              description: "Name of a field to show as an extra column",
              isRepeatable: true,
              args: { name: "field" },
            },
            {
              name: "--field-id",
              description: "ID of a field to show as an extra column",
              isRepeatable: true,
              args: { name: "field-id" },
            },
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of items to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: "--query",
              description:
                'Filter items using the Projects filter syntax, e.g. "assignee:octocat -status:Done"',
              isRepeatable: true,
              args: { name: "query" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "link",
          description: "Link a project to a repository or a team",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: ["-R", "--repo"],
              description: "The repository to be linked to this project",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: ["-T", "--team"],
              description: "The team to be linked to this project",
              args: { name: "team" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List the projects for an owner",
          options: [
            { name: "--closed", description: "Include closed projects" },
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of projects to fetch",
              isRepeatable: true,
              args: { name: "int", default: "30" },
            },
            {
              name: "--owner",
              description: "Login of the owner",
              args: { name: "owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "Open projects list in the browser",
            },
          ],
        },
        {
          name: "mark-template",
          description: "Mark a project as a template",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--owner",
              description: "Login of the org owner",
              args: { name: "owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            { name: "--undo", description: "Unmark the project as a template" },
          ],
        },
        {
          name: "unlink",
          description: "Unlink a project from a repository or a team",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: ["-R", "--repo"],
              description: "The repository to be unlinked from this project",
              args: {
                name: "repo",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: ["-T", "--team"],
              description: "The team to be unlinked from this project",
              args: { name: "team" },
            },
          ],
        },
        {
          name: "view",
          description: "View a project",
          args: { name: "number", isOptional: true },
          options: [
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--owner",
              description: 'Login of the owner. Use "@me" for the current user',
              args: { name: "owner" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "Open a project in the browser",
            },
          ],
        },
      ],
    },
    {
      name: "release",
      description: "Manage releases",
      subcommands: [
        {
          name: ["create", "new"],
          description: "Create a new release",
          args: [
            { name: "tag", isOptional: true },
            {
              name: "filename... | pattern...",
              isOptional: true,
              isVariadic: true,
              template: "filepaths",
            },
          ],
          options: [
            {
              name: "--discussion-category",
              description: "Start a discussion in the specified category",
              args: { name: "discussion-category" },
            },
            {
              name: ["-d", "--draft"],
              description:
                "Save the release as a draft instead of publishing it",
            },
            {
              name: "--fail-on-no-commits",
              description:
                "Fail if there are no commits since the last release (no impact on the first release)",
            },
            {
              name: "--generate-notes",
              description:
                "Automatically generate title and notes for the release via GitHub Release Notes API",
            },
            {
              name: "--latest",
              description:
                'Mark this release as "Latest" (default [automatic based on date and version]). --latest=false to explicitly NOT set as latest',
            },
            {
              name: ["-n", "--notes"],
              description: "Release notes",
              args: { name: "notes" },
            },
            {
              name: ["-F", "--notes-file"],
              description:
                'Read release notes from file (use "-" to read from standard input)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--notes-from-tag",
              description:
                "Fetch notes from the tag annotation or message of commit associated with tag",
            },
            {
              name: "--notes-start-tag",
              description:
                "Tag to use as the starting point for generating release notes",
              args: { name: "notes-start-tag" },
            },
            {
              name: ["-p", "--prerelease"],
              description: "Mark the release as a prerelease",
            },
            {
              name: "--target",
              description:
                "Target branch or full commit SHA (default [main branch])",
              args: { name: "branch" },
            },
            {
              name: ["-t", "--title"],
              description: "Release title",
              args: { name: "title" },
            },
            {
              name: "--verify-tag",
              description:
                "Abort in case the git tag doesn't already exist in the remote repository",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a release",
          isDangerous: true,
          args: { name: "tag" },
          options: [
            {
              name: "--cleanup-tag",
              description:
                "Delete the specified tag in addition to its release",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
        {
          name: "delete-asset",
          description: "Delete an asset from a release",
          isDangerous: true,
          args: [{ name: "tag" }, { name: "asset-name" }],
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
        {
          name: "download",
          description: "Download release assets",
          args: { name: "tag", isOptional: true },
          options: [
            {
              name: "--allow-escape-sequences",
              description:
                "Allow printing terminal escape sequences when writing an asset to standard output",
            },
            {
              name: ["-A", "--archive"],
              description:
                "Download the source code archive in the specified format (zip or tar.gz)",
              args: { name: "format" },
            },
            {
              name: "--clobber",
              description: "Overwrite existing files of the same name",
            },
            {
              name: ["-D", "--dir"],
              description: "The directory to download files into",
              args: { name: "directory", default: ".", template: "folders" },
            },
            {
              name: ["-O", "--output"],
              description:
                'The file to write a single asset to (use "-" to write to standard output)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-p", "--pattern"],
              description: "Download only assets that match a glob pattern",
              isRepeatable: true,
              args: { name: "pattern" },
            },
            {
              name: "--skip-existing",
              description: "Skip downloading when files of the same name exist",
            },
          ],
        },
        {
          name: "edit",
          description: "Edit a release",
          args: { name: "tag" },
          options: [
            {
              name: "--discussion-category",
              description:
                "Start a discussion in the specified category when publishing a draft",
              args: { name: "discussion-category" },
            },
            {
              name: "--draft",
              description:
                "Save the release as a draft instead of publishing it",
            },
            {
              name: "--latest",
              description: 'Explicitly mark the release as "Latest"',
            },
            {
              name: ["-n", "--notes"],
              description: "Release notes",
              args: { name: "notes" },
            },
            {
              name: ["-F", "--notes-file"],
              description:
                'Read release notes from file (use "-" to read from standard input)',
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--prerelease",
              description: "Mark the release as a prerelease",
            },
            {
              name: "--tag",
              description: "The name of the tag",
              args: { name: "tag" },
            },
            {
              name: "--target",
              description:
                "Target branch or full commit SHA (default [main branch])",
              args: { name: "branch" },
            },
            {
              name: ["-t", "--title"],
              description: "Release title",
              args: { name: "title" },
            },
            {
              name: "--verify-tag",
              description:
                "Abort in case the git tag doesn't already exist in the remote repository",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List releases in a repository",
          options: [
            { name: "--exclude-drafts", description: "Exclude draft releases" },
            {
              name: "--exclude-pre-releases",
              description: "Exclude pre-releases",
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: releaseListJsonFields }),
              },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of items to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: ["-O", "--order"],
              description: "Order of releases returned: {asc|desc}",
              args: {
                name: "order",
                default: "desc",
                suggestions: ["asc", "desc"],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "upload",
          description: "Upload assets to a release",
          args: [
            { name: "tag" },
            { name: "files", isVariadic: true, template: "filepaths" },
          ],
          options: [
            {
              name: "--clobber",
              description:
                "Delete and re-upload existing assets of the same name",
            },
          ],
        },
        {
          name: "verify",
          description: "Verify the attestation for a release",
          args: { name: "tag", isOptional: true },
          options: [
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "verify-asset",
          description: "Verify that a given asset originated from a release",
          args: [
            { name: "tag", isOptional: true },
            { name: "file-path", template: "filepaths" },
          ],
          options: [
            {
              name: "--format",
              description: "Output format: {json}",
              args: { name: "format", suggestions: ["json"] },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "view",
          description: "View information about a release",
          args: { name: "tag", isOptional: true },
          options: [
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: releaseViewJsonFields }),
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "Open the release in the browser",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-R", "--repo"],
          description:
            "Select another repository using the [HOST/]OWNER/REPO format",
          args: {
            name: "[HOST/]OWNER/REPO",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          isPersistent: true,
        },
      ],
    },
    {
      name: "repo",
      description: "Manage repositories",
      subcommands: [
        {
          name: "archive",
          description: "Archive a repository",
          isDangerous: true,
          args: {
            name: "repository",
            isOptional: true,
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
            {
              name: "--confirm",
              description: "Skip the confirmation prompt",
              deprecated: { description: "Use --yes instead" },
            },
          ],
        },
        {
          name: "autolink",
          description: "Manage autolink references",
          subcommands: [
            {
              name: ["create", "new"],
              description: "Create a new autolink reference",
              args: [{ name: "keyPrefix" }, { name: "urlTemplate" }],
              options: [
                {
                  name: ["-n", "--numeric"],
                  description: "Mark autolink as numeric",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an autolink reference",
              isDangerous: true,
              args: { name: "id" },
              options: [
                {
                  name: "--yes",
                  description: "Confirm deletion without prompting",
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List autolink references for a GitHub repository",
              options: [
                {
                  name: ["-q", "--jq"],
                  description: "Filter JSON output using a jq expression",
                  args: { name: "expression" },
                },
                {
                  name: "--json",
                  description: "Output JSON with the specified fields",
                  args: {
                    name: "fields",
                    generators: valueList({
                      values: repoAutolinkListJsonFields,
                    }),
                  },
                },
                {
                  name: ["-t", "--template"],
                  description:
                    'Format JSON output using a Go template; see "gh help formatting"',
                  args: { name: "template" },
                },
                {
                  name: ["-w", "--web"],
                  description: "List autolink references in the web browser",
                },
              ],
            },
            {
              name: "view",
              description: "View an autolink reference",
              args: { name: "id" },
              options: [
                {
                  name: ["-q", "--jq"],
                  description: "Filter JSON output using a jq expression",
                  args: { name: "expression" },
                },
                {
                  name: "--json",
                  description: "Output JSON with the specified fields",
                  args: {
                    name: "fields",
                    generators: valueList({
                      values: repoAutolinkListJsonFields,
                    }),
                  },
                },
                {
                  name: ["-t", "--template"],
                  description:
                    'Format JSON output using a Go template; see "gh help formatting"',
                  args: { name: "template" },
                },
              ],
            },
          ],
          options: [
            {
              name: ["-R", "--repo"],
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: {
                name: "[HOST/]OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
              isPersistent: true,
            },
          ],
        },
        {
          name: "clone",
          description: "Clone a repository locally",
          args: [
            {
              name: "repository",
              generators: [
                ghGenerators.listRepositories,
                ghGenerators.listCustomRepositories,
              ],
            },
            { name: "directory", isOptional: true, template: "folders" },
          ],
          options: [
            {
              name: "--no-upstream",
              description: "Do not add an upstream remote when cloning a fork",
            },
            {
              name: ["-u", "--upstream-remote-name"],
              description: "Upstream remote name when cloning a fork",
              args: { name: "upstream-remote-name", default: "upstream" },
            },
            cloneGitFlags,
          ],
        },
        {
          name: ["create", "new"],
          description: "Create a new repository",
          args: { name: "name", isOptional: true },
          options: [
            {
              name: "--add-readme",
              description: "Add a README file to the new repository",
            },
            {
              name: ["-c", "--clone"],
              description: "Clone the new repository to the current directory",
            },
            {
              name: ["-d", "--description"],
              description: "Description of the repository",
              args: { name: "description" },
            },
            {
              name: "--disable-issues",
              description: "Disable issues in the new repository",
            },
            {
              name: "--disable-wiki",
              description: "Disable wiki in the new repository",
            },
            {
              name: ["-g", "--gitignore"],
              description: "Specify a gitignore template for the repository",
              args: { name: "gitignore" },
            },
            {
              name: ["-h", "--homepage"],
              description: "Repository home page URL",
              args: { name: "URL" },
            },
            {
              name: "--include-all-branches",
              description: "Include all branches from template repository",
            },
            {
              name: "--internal",
              description: "Make the new repository internal",
            },
            {
              name: ["-l", "--license"],
              description: "Specify an Open Source License for the repository",
              args: { name: "license" },
            },
            {
              name: "--private",
              description: "Make the new repository private",
            },
            { name: "--public", description: "Make the new repository public" },
            {
              name: "--push",
              description: "Push local commits to the new repository",
            },
            {
              name: ["-r", "--remote"],
              description: "Specify remote name for the new repository",
              args: { name: "remote" },
            },
            {
              name: ["-s", "--source"],
              description: "Specify path to local repository to use as source",
              args: { name: "source" },
            },
            {
              name: ["-t", "--team"],
              description:
                "The name of the organization team to be granted access",
              args: { name: "name" },
            },
            {
              name: ["-p", "--template"],
              description:
                "Make the new repository based on a template repository",
              args: { name: "repository" },
            },
            {
              name: ["-y", "--confirm"],
              description: "Skip the confirmation prompt",
              deprecated: {
                description: "Pass any argument to skip confirmation prompt",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a repository",
          isDangerous: true,
          args: {
            name: "repository",
            isOptional: true,
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          options: [
            {
              name: "--yes",
              description: "Confirm deletion without prompting",
            },
            {
              name: "--confirm",
              description: "Confirm deletion without prompting",
              deprecated: { description: "Use --yes instead" },
            },
          ],
        },
        {
          name: "deploy-key",
          description: "Manage deploy keys in a repository",
          subcommands: [
            {
              name: "add",
              description: "Add a deploy key to a GitHub repository",
              args: { name: "key-file", template: "filepaths" },
              options: [
                {
                  name: ["-w", "--allow-write"],
                  description: "Allow write access for the key",
                },
                {
                  name: ["-t", "--title"],
                  description: "Title of the new key",
                  args: { name: "title" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a deploy key from a GitHub repository",
              isDangerous: true,
              args: { name: "key-id" },
            },
            {
              name: ["list", "ls"],
              description: "List deploy keys in a GitHub repository",
              options: [
                {
                  name: ["-q", "--jq"],
                  description: "Filter JSON output using a jq expression",
                  args: { name: "expression" },
                },
                {
                  name: "--json",
                  description: "Output JSON with the specified fields",
                  args: {
                    name: "fields",
                    generators: valueList({
                      values: repoDeployKeyListJsonFields,
                    }),
                  },
                },
                {
                  name: ["-t", "--template"],
                  description:
                    'Format JSON output using a Go template; see "gh help formatting"',
                  args: { name: "template" },
                },
              ],
            },
          ],
          options: [
            {
              name: ["-R", "--repo"],
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: {
                name: "[HOST/]OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
              isPersistent: true,
            },
          ],
        },
        {
          name: "edit",
          description: "Edit repository settings",
          args: {
            name: "repository",
            isOptional: true,
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          options: [
            {
              name: "--accept-visibility-change-consequences",
              description:
                "Accept the consequences of changing the repository visibility",
            },
            {
              name: "--add-topic",
              description: "Add repository topic",
              isRepeatable: true,
              args: { name: "add-topic" },
            },
            {
              name: "--allow-forking",
              description: "Allow forking of an organization repository",
            },
            {
              name: "--allow-update-branch",
              description:
                "Allow a pull request head branch that is behind its base branch to be updated",
            },
            {
              name: "--default-branch",
              description: "Set the default branch name for the repository",
              args: { name: "name" },
            },
            {
              name: "--delete-branch-on-merge",
              description: "Delete head branch when pull requests are merged",
            },
            {
              name: ["-d", "--description"],
              description: "Description of the repository",
              args: { name: "description" },
            },
            {
              name: "--enable-advanced-security",
              description: "Enable advanced security in the repository",
            },
            {
              name: "--enable-auto-merge",
              description: "Enable auto-merge functionality",
            },
            {
              name: "--enable-discussions",
              description: "Enable discussions in the repository",
            },
            {
              name: "--enable-issues",
              description: "Enable issues in the repository",
            },
            {
              name: "--enable-merge-commit",
              description: "Enable merging pull requests via merge commit",
            },
            {
              name: "--enable-projects",
              description: "Enable projects in the repository",
            },
            {
              name: "--enable-rebase-merge",
              description: "Enable merging pull requests via rebase",
            },
            {
              name: "--enable-secret-scanning",
              description: "Enable secret scanning in the repository",
            },
            {
              name: "--enable-secret-scanning-push-protection",
              description:
                "Enable secret scanning push protection in the repository. Secret scanning must be enabled first",
            },
            {
              name: "--enable-squash-merge",
              description: "Enable merging pull requests via squashed commit",
            },
            {
              name: "--enable-wiki",
              description: "Enable wiki in the repository",
            },
            {
              name: ["-h", "--homepage"],
              description: "Repository home page URL",
              args: { name: "URL" },
            },
            {
              name: "--remove-topic",
              description: "Remove repository topic",
              isRepeatable: true,
              args: { name: "remove-topic" },
            },
            {
              name: "--squash-merge-commit-message",
              description:
                "The default value for a squash merge commit message: {default|pr-title|pr-title-commits|pr-title-description}",
              args: {
                name: "squash-merge-commit-message",
                suggestions: [
                  "default",
                  "pr-title",
                  "pr-title-commits",
                  "pr-title-description",
                ],
              },
            },
            {
              name: "--template",
              description:
                "Make the repository available as a template repository",
            },
            {
              name: "--visibility",
              description:
                "Change the visibility of the repository to {public,private,internal}",
              args: { name: "visibility" },
            },
          ],
        },
        {
          name: "fork",
          description: "Create a fork of a repository",
          args: {
            name: "repository",
            isOptional: true,
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          options: [
            { name: "--clone", description: "Clone the fork" },
            {
              name: "--default-branch-only",
              description: "Only include the default branch in the fork",
            },
            {
              name: "--fork-name",
              description: "Rename the forked repository",
              args: { name: "fork-name" },
            },
            {
              name: "--org",
              description: "Create the fork in an organization",
              args: { name: "org" },
            },
            { name: "--remote", description: "Add a git remote for the fork" },
            {
              name: "--remote-name",
              description: "Specify the name for the new remote",
              args: { name: "remote-name", default: "origin" },
            },
            cloneGitFlags,
          ],
        },
        {
          name: "gitignore",
          description: "List and view available repository gitignore templates",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List available repository gitignore templates",
            },
            {
              name: "view",
              description: "View an available repository gitignore template",
              args: { name: "template" },
            },
          ],
        },
        {
          name: "license",
          description: "Explore repository licenses",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List common repository licenses",
            },
            {
              name: "view",
              description: "View a specific repository license",
              args: { name: "license-key | spdx-id" },
              options: [
                {
                  name: ["-w", "--web"],
                  description:
                    "Open https://choosealicense.com/ in the browser",
                },
              ],
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List repositories owned by user or organization",
          args: { name: "owner", isOptional: true },
          options: [
            {
              name: "--archived",
              description: "Show only archived repositories",
            },
            { name: "--fork", description: "Show only forks" },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: repoListJsonFields }),
              },
            },
            {
              name: ["-l", "--language"],
              description: "Filter by primary coding language",
              args: { name: "language" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of repositories to list",
              args: { name: "int", default: "30" },
            },
            {
              name: "--no-archived",
              description: "Omit archived repositories",
            },
            { name: "--source", description: "Show only non-forks" },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: "--topic",
              description: "Filter by topic",
              isRepeatable: true,
              args: { name: "topic" },
            },
            {
              name: "--visibility",
              description:
                "Filter by repository visibility: {public|private|internal}",
              args: {
                name: "visibility",
                suggestions: ["public", "private", "internal"],
              },
            },
            {
              name: "--private",
              description: "Show only private repositories",
              deprecated: { description: "Use --visibility=private instead" },
            },
            {
              name: "--public",
              description: "Show only public repositories",
              deprecated: { description: "Use --visibility=public instead" },
            },
          ],
        },
        {
          name: "read-dir",
          description: "List a directory in a repository (preview)",
          args: { name: "path", isOptional: true },
          options: [
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: repoReadDirJsonFields }),
              },
            },
            {
              name: "--ref",
              description: "The branch, tag, or commit to list from",
              args: { name: "ref" },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: {
                name: "[HOST/]OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "read-file",
          description: "Read a file from a repository (preview)",
          args: { name: "path" },
          options: [
            {
              name: "--allow-escape-sequences",
              description: "Allow printing terminal escape sequences",
            },
            {
              name: "--clobber",
              description: "Overwrite the output path if it already exists",
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: repoReadFileJsonFields }),
              },
            },
            {
              name: ["-o", "--output"],
              description: "Write the file to a path instead of stdout",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--ref",
              description: "The branch, tag, or commit to read from",
              args: { name: "ref" },
            },
            {
              name: ["-R", "--repo"],
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: {
                name: "[HOST/]OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "rename",
          description: "Rename a repository",
          args: { name: "new-name", isOptional: true },
          options: [
            {
              name: ["-R", "--repo"],
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: {
                name: "[HOST/]OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
            {
              name: "--confirm",
              description: "Skip confirmation prompt",
              deprecated: { description: "Use --yes instead" },
            },
          ],
        },
        {
          name: "set-default",
          description: "Configure default repository for this directory",
          args: {
            name: "repository",
            isOptional: true,
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          options: [
            {
              name: ["-u", "--unset"],
              description: "Unset the current default repository",
            },
            {
              name: ["-v", "--view"],
              description: "View the current default repository",
            },
          ],
        },
        {
          name: "sync",
          description: "Sync a repository",
          args: {
            name: "destination-repository",
            isOptional: true,
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          options: [
            {
              name: ["-b", "--branch"],
              description: "Branch to sync (default [default branch])",
              args: { name: "branch" },
            },
            {
              name: "--force",
              description:
                "Hard reset the branch of the destination repository to match the source repository",
            },
            {
              name: ["-s", "--source"],
              description: "Source repository",
              args: { name: "source" },
            },
          ],
        },
        {
          name: "unarchive",
          description: "Unarchive a repository",
          args: {
            name: "repository",
            isOptional: true,
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
        {
          name: "view",
          description: "View a repository",
          args: {
            name: "repository",
            isOptional: true,
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          options: [
            {
              name: ["-b", "--branch"],
              description: "View a specific branch of the repository",
              args: { name: "branch" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: repoListJsonFields }),
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "Open a repository in the browser",
            },
          ],
        },
      ],
    },
    {
      name: ["ruleset", "rs"],
      description: "View info about repo rulesets",
      subcommands: [
        {
          name: "check",
          description: "View rules that would apply to a given branch",
          args: {
            name: "branch",
            isOptional: true,
            generators: ghGenerators.remoteBranches,
          },
          options: [
            { name: "--default", description: "Check rules on default branch" },
            {
              name: ["-w", "--web"],
              description: "Open the branch rules page in a web browser",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List rulesets for a repository or organization",
          options: [
            {
              name: ["-L", "--limit"],
              description: "Maximum number of rulesets to list",
              args: { name: "int", default: "30" },
            },
            {
              name: ["-o", "--org"],
              description:
                "List organization-wide rulesets for the provided organization",
              args: { name: "org" },
            },
            {
              name: ["-p", "--parents"],
              description:
                "Whether to include rulesets configured at higher levels that also apply (default true)",
            },
            {
              name: ["-w", "--web"],
              description: "Open the list of rulesets in the web browser",
            },
          ],
        },
        {
          name: "view",
          description: "View information about a ruleset",
          args: { name: "ruleset-id", isOptional: true },
          options: [
            {
              name: ["-o", "--org"],
              description:
                "Organization name if the provided ID is an organization-level ruleset",
              args: { name: "org" },
            },
            {
              name: ["-p", "--parents"],
              description:
                "Whether to include rulesets configured at higher levels that also apply (default true)",
            },
            {
              name: ["-w", "--web"],
              description: "Open the ruleset in the browser",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-R", "--repo"],
          description:
            "Select another repository using the [HOST/]OWNER/REPO format",
          args: {
            name: "[HOST/]OWNER/REPO",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          isPersistent: true,
        },
      ],
    },
    {
      name: "run",
      description: "View details about workflow runs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a workflow run",
          args: { name: "run-id", isOptional: true },
          options: [
            { name: "--force", description: "Force cancel a workflow run" },
          ],
        },
        {
          name: "delete",
          description: "Delete a workflow run",
          isDangerous: true,
          args: { name: "run-id", isOptional: true },
        },
        {
          name: "download",
          description: "Download artifacts generated by a workflow run",
          args: { name: "run-id", isOptional: true },
          options: [
            {
              name: ["-D", "--dir"],
              description: "The directory to download artifacts into",
              args: { name: "dir", default: "." },
            },
            {
              name: ["-n", "--name"],
              description:
                "Download artifacts that match any of the given names",
              isRepeatable: true,
              args: { name: "name" },
            },
            {
              name: ["-p", "--pattern"],
              description: "Download artifacts that match a glob pattern",
              isRepeatable: true,
              args: { name: "pattern" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List recent workflow runs",
          options: [
            {
              name: ["-a", "--all"],
              description: "Include disabled workflows",
            },
            {
              name: ["-b", "--branch"],
              description: "Filter runs by branch",
              args: { name: "branch" },
            },
            {
              name: ["-c", "--commit"],
              description: "Filter runs by the SHA of the commit",
              args: { name: "SHA" },
            },
            {
              name: "--created",
              description: "Filter runs by the date it was created",
              args: { name: "date" },
            },
            {
              name: ["-e", "--event"],
              description: "Filter runs by which event triggered the run",
              args: { name: "event" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: runListJsonFields }),
              },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of runs to fetch",
              args: { name: "int", default: "20" },
            },
            {
              name: ["-s", "--status"],
              description:
                "Filter runs by status: {queued|completed|in_progress|requested|waiting|pending|action_required|cancelled|failure|neutral|skipped|stale|startup_failure|success|timed_out}",
              args: {
                name: "status",
                suggestions: [
                  "queued",
                  "completed",
                  "in_progress",
                  "requested",
                  "waiting",
                  "pending",
                  "action_required",
                  "cancelled",
                  "failure",
                  "neutral",
                  "skipped",
                  "stale",
                  "startup_failure",
                  "success",
                  "timed_out",
                ],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-u", "--user"],
              description: "Filter runs by user who triggered the run",
              args: { name: "user" },
            },
            {
              name: ["-w", "--workflow"],
              description: "Filter runs by workflow",
              args: { name: "workflow" },
            },
          ],
        },
        {
          name: "rerun",
          description: "Rerun a run",
          args: { name: "run-id", isOptional: true },
          options: [
            {
              name: ["-d", "--debug"],
              description: "Rerun with debug logging",
            },
            {
              name: "--failed",
              description: "Rerun only failed jobs, including dependencies",
            },
            {
              name: ["-j", "--job"],
              description:
                "Rerun a specific job ID from a run, including dependencies",
              args: { name: "job" },
            },
          ],
        },
        {
          name: "view",
          description: "View a summary of a workflow run",
          args: { name: "run-id", isOptional: true },
          options: [
            {
              name: ["-a", "--attempt"],
              description: "The attempt number of the workflow run",
              args: { name: "uint" },
            },
            {
              name: "--exit-status",
              description: "Exit with non-zero status if run failed",
            },
            {
              name: ["-j", "--job"],
              description: "View a specific job ID from a run",
              args: { name: "job" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: runViewJsonFields }),
              },
            },
            {
              name: "--log",
              description: "View full log for either a run or specific job",
            },
            {
              name: "--log-failed",
              description:
                "View the log for any failed steps in a run or specific job",
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            { name: ["-v", "--verbose"], description: "Show job steps" },
            { name: ["-w", "--web"], description: "Open run in the browser" },
          ],
        },
        {
          name: "watch",
          description: "Watch a run until it completes, showing its progress",
          args: { name: "run-id" },
          options: [
            {
              name: "--compact",
              description: "Show only relevant/failed steps",
            },
            {
              name: "--exit-status",
              description: "Exit with non-zero status if run fails",
            },
            {
              name: ["-i", "--interval"],
              description: "Refresh interval in seconds",
              args: { name: "int", default: "3" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["-R", "--repo"],
          description:
            "Select another repository using the [HOST/]OWNER/REPO format",
          args: {
            name: "[HOST/]OWNER/REPO",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          isPersistent: true,
        },
      ],
    },
    {
      name: "search",
      description: "Search for repositories, issues, and pull requests",
      subcommands: [
        {
          name: "code",
          description: "Search within code",
          args: { name: "query" },
          options: [
            {
              name: "--extension",
              description: "Filter on file extension",
              args: { name: "extension" },
            },
            {
              name: "--filename",
              description: "Filter on filename",
              args: { name: "filename" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: searchCodeJsonFields }),
              },
            },
            {
              name: "--language",
              description: "Filter results by language",
              args: { name: "language" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of code results to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: "--match",
              description:
                "Restrict search to file contents or file path: {file|path}",
              isRepeatable: true,
              args: { name: "match", suggestions: ["file", "path"] },
            },
            {
              name: "--owner",
              description: "Filter on owner",
              isRepeatable: true,
              args: { name: "owner" },
            },
            {
              name: ["-R", "--repo"],
              description: "Filter on repository, in OWNER/REPO format",
              args: {
                name: "OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--size",
              description: "Filter on size range, in kilobytes",
              args: { name: "size" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-w", "--web"],
              description: "Open the search query in the web browser",
            },
          ],
        },
        {
          name: "commits",
          description: "Search for commits",
          args: { name: "query", isOptional: true },
          options: [
            {
              name: "--author",
              description: "Filter by author",
              args: { name: "author" },
            },
            {
              name: "--author-date",
              description: "Filter based on authored date",
              args: { name: "date" },
            },
            {
              name: "--author-email",
              description: "Filter on author email",
              args: { name: "author-email" },
            },
            {
              name: "--author-name",
              description: "Filter on author name",
              args: { name: "author-name" },
            },
            {
              name: "--committer",
              description: "Filter by committer",
              args: { name: "committer" },
            },
            {
              name: "--committer-date",
              description: "Filter based on committed date",
              args: { name: "date" },
            },
            {
              name: "--committer-email",
              description: "Filter on committer email",
              args: { name: "committer-email" },
            },
            {
              name: "--committer-name",
              description: "Filter on committer name",
              args: { name: "committer-name" },
            },
            {
              name: "--hash",
              description: "Filter by commit hash",
              args: { name: "hash" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: searchCommitsJsonFields }),
              },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of commits to fetch",
              args: { name: "int", default: "30" },
            },
            { name: "--merge", description: "Filter on merge commits" },
            {
              name: "--order",
              description:
                "Order of commits returned, ignored unless '--sort' flag is specified: {asc|desc}",
              args: {
                name: "order",
                default: "desc",
                suggestions: ["asc", "desc"],
              },
            },
            {
              name: "--owner",
              description: "Filter on repository owner",
              isRepeatable: true,
              args: { name: "owner" },
            },
            {
              name: "--parent",
              description: "Filter by parent hash",
              args: { name: "parent" },
            },
            {
              name: ["-R", "--repo"],
              description: "Filter on repository, in OWNER/REPO format",
              args: {
                name: "OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--sort",
              description: "Sort fetched commits: {author-date|committer-date}",
              args: {
                name: "sort",
                default: "best-match",
                suggestions: ["author-date", "committer-date"],
              },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: "--tree",
              description: "Filter by tree hash",
              args: { name: "tree" },
            },
            {
              name: "--visibility",
              description:
                "Filter based on repository visibility: {public|private|internal}",
              isRepeatable: true,
              args: {
                name: "visibility",
                suggestions: ["public", "private", "internal"],
              },
            },
            {
              name: ["-w", "--web"],
              description: "Open the search query in the web browser",
            },
          ],
        },
        {
          name: "issues",
          description: "Search for issues",
          args: { name: "query", isOptional: true },
          options: [
            {
              name: "--app",
              description: "Filter by GitHub App author",
              args: { name: "app" },
            },
            {
              name: "--archived",
              description:
                "Filter based on the repository archived state {true|false}",
            },
            {
              name: "--assignee",
              description: "Filter by assignee",
              args: { name: "assignee" },
            },
            {
              name: "--author",
              description:
                "Filter by author (use --app to filter by a GitHub App)",
              args: { name: "author" },
            },
            {
              name: "--closed",
              description: "Filter on closed at date",
              args: { name: "date" },
            },
            {
              name: "--commenter",
              description: "Filter based on comments by user",
              args: { name: "user" },
            },
            {
              name: "--comments",
              description: "Filter on number of comments",
              args: { name: "number" },
            },
            {
              name: "--created",
              description: "Filter based on created at date",
              args: { name: "date" },
            },
            {
              name: "--include-prs",
              description: "Include pull requests in results",
            },
            {
              name: "--interactions",
              description: "Filter on number of reactions and comments",
              args: { name: "number" },
            },
            {
              name: "--involves",
              description: "Filter based on involvement of user",
              args: { name: "user" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: searchIssuesJsonFields }),
              },
            },
            {
              name: "--label",
              description: "Filter on label",
              isRepeatable: true,
              args: { name: "label" },
            },
            {
              name: "--language",
              description: "Filter based on the coding language",
              args: { name: "language" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of results to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: "--locked",
              description: "Filter on locked conversation status",
            },
            {
              name: "--match",
              description:
                "Restrict search to specific field of issue: {title|body|comments}",
              isRepeatable: true,
              args: {
                name: "match",
                suggestions: ["title", "body", "comments"],
              },
            },
            {
              name: "--mentions",
              description: "Filter based on user mentions",
              args: { name: "user" },
            },
            {
              name: "--milestone",
              description: "Filter by milestone title",
              args: { name: "title" },
            },
            {
              name: "--no-assignee",
              description: "Filter on missing assignee",
            },
            { name: "--no-label", description: "Filter on missing label" },
            {
              name: "--no-milestone",
              description: "Filter on missing milestone",
            },
            { name: "--no-project", description: "Filter on missing project" },
            {
              name: "--order",
              description:
                "Order of results returned, ignored unless '--sort' flag is specified: {asc|desc}",
              args: {
                name: "order",
                default: "desc",
                suggestions: ["asc", "desc"],
              },
            },
            {
              name: "--owner",
              description: "Filter on repository owner",
              isRepeatable: true,
              args: { name: "owner" },
            },
            {
              name: "--project",
              description: "Filter on project board owner/number",
              args: { name: "owner/number" },
            },
            {
              name: "--reactions",
              description: "Filter on number of reactions",
              args: { name: "number" },
            },
            {
              name: ["-R", "--repo"],
              description: "Filter on repository, in OWNER/REPO format",
              args: {
                name: "OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--search-type",
              description:
                "Type of issue search to perform: {lexical|semantic|hybrid}",
              args: {
                name: "search-type",
                default: "lexical",
                suggestions: ["lexical", "semantic", "hybrid"],
              },
            },
            {
              name: "--sort",
              description:
                "Sort fetched results: {comments|created|interactions|reactions|reactions-+1|reactions--1|reactions-heart|reactions-smile|reactions-tada|reactions-thinking_face|updated}",
              args: { name: "sort", default: "best-match" },
            },
            {
              name: "--state",
              description: "Filter based on state: {open|closed}",
              args: { name: "state", suggestions: ["open", "closed"] },
            },
            {
              name: "--team-mentions",
              description: "Filter based on team mentions",
              args: { name: "team-mentions" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: "--updated",
              description: "Filter on last updated at date",
              args: { name: "date" },
            },
            {
              name: "--visibility",
              description:
                "Filter based on repository visibility: {public|private|internal}",
              isRepeatable: true,
              args: {
                name: "visibility",
                suggestions: ["public", "private", "internal"],
              },
            },
            {
              name: ["-w", "--web"],
              description: "Open the search query in the web browser",
            },
          ],
        },
        {
          name: "prs",
          description: "Search for pull requests",
          args: { name: "query", isOptional: true },
          options: [
            {
              name: "--app",
              description: "Filter by GitHub App author",
              args: { name: "app" },
            },
            {
              name: "--archived",
              description:
                "Filter based on the repository archived state {true|false}",
            },
            {
              name: "--assignee",
              description: "Filter by assignee",
              args: { name: "assignee" },
            },
            {
              name: "--author",
              description:
                "Filter by author (use --app to filter by a GitHub App)",
              args: { name: "author" },
            },
            {
              name: ["-B", "--base"],
              description: "Filter on base branch name",
              args: { name: "base" },
            },
            {
              name: "--checks",
              description:
                "Filter based on status of the checks: {pending|success|failure}",
              args: {
                name: "checks",
                suggestions: ["pending", "success", "failure"],
              },
            },
            {
              name: "--closed",
              description: "Filter on closed at date",
              args: { name: "date" },
            },
            {
              name: "--commenter",
              description: "Filter based on comments by user",
              args: { name: "user" },
            },
            {
              name: "--comments",
              description: "Filter on number of comments",
              args: { name: "number" },
            },
            {
              name: "--created",
              description: "Filter based on created at date",
              args: { name: "date" },
            },
            { name: "--draft", description: "Filter based on draft state" },
            {
              name: ["-H", "--head"],
              description: "Filter on head branch name",
              args: { name: "head" },
            },
            {
              name: "--interactions",
              description: "Filter on number of reactions and comments",
              args: { name: "number" },
            },
            {
              name: "--involves",
              description: "Filter based on involvement of user",
              args: { name: "user" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: searchPrsJsonFields }),
              },
            },
            {
              name: "--label",
              description: "Filter on label",
              isRepeatable: true,
              args: { name: "label" },
            },
            {
              name: "--language",
              description: "Filter based on the coding language",
              args: { name: "language" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of results to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: "--locked",
              description: "Filter on locked conversation status",
            },
            {
              name: "--match",
              description:
                "Restrict search to specific field of issue: {title|body|comments}",
              isRepeatable: true,
              args: {
                name: "match",
                suggestions: ["title", "body", "comments"],
              },
            },
            {
              name: "--mentions",
              description: "Filter based on user mentions",
              args: { name: "user" },
            },
            { name: "--merged", description: "Filter based on merged state" },
            {
              name: "--merged-at",
              description: "Filter on merged at date",
              args: { name: "date" },
            },
            {
              name: "--milestone",
              description: "Filter by milestone title",
              args: { name: "title" },
            },
            {
              name: "--no-assignee",
              description: "Filter on missing assignee",
            },
            { name: "--no-label", description: "Filter on missing label" },
            {
              name: "--no-milestone",
              description: "Filter on missing milestone",
            },
            { name: "--no-project", description: "Filter on missing project" },
            {
              name: "--order",
              description:
                "Order of results returned, ignored unless '--sort' flag is specified: {asc|desc}",
              args: {
                name: "order",
                default: "desc",
                suggestions: ["asc", "desc"],
              },
            },
            {
              name: "--owner",
              description: "Filter on repository owner",
              isRepeatable: true,
              args: { name: "owner" },
            },
            {
              name: "--project",
              description: "Filter on project board owner/number",
              args: { name: "owner/number" },
            },
            {
              name: "--reactions",
              description: "Filter on number of reactions",
              args: { name: "number" },
            },
            {
              name: ["-R", "--repo"],
              description: "Filter on repository, in OWNER/REPO format",
              args: {
                name: "OWNER/REPO",
                generators: [
                  ghGenerators.listRepositories,
                  ghGenerators.listCustomRepositories,
                ],
              },
            },
            {
              name: "--review",
              description:
                "Filter based on review status: {none|required|approved|changes_requested}",
              args: {
                name: "review",
                suggestions: [
                  "none",
                  "required",
                  "approved",
                  "changes_requested",
                ],
              },
            },
            {
              name: "--review-requested",
              description: "Filter on user or team requested to review",
              args: { name: "user" },
            },
            {
              name: "--reviewed-by",
              description: "Filter on user who reviewed",
              args: { name: "user" },
            },
            {
              name: "--sort",
              description:
                "Sort fetched results: {comments|reactions|reactions-+1|reactions--1|reactions-smile|reactions-thinking_face|reactions-heart|reactions-tada|interactions|created|updated}",
              args: { name: "sort", default: "best-match" },
            },
            {
              name: "--state",
              description: "Filter based on state: {open|closed}",
              args: { name: "state", suggestions: ["open", "closed"] },
            },
            {
              name: "--team-mentions",
              description: "Filter based on team mentions",
              args: { name: "team-mentions" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: "--updated",
              description: "Filter on last updated at date",
              args: { name: "date" },
            },
            {
              name: "--visibility",
              description:
                "Filter based on repository visibility: {public|private|internal}",
              isRepeatable: true,
              args: {
                name: "visibility",
                suggestions: ["public", "private", "internal"],
              },
            },
            {
              name: ["-w", "--web"],
              description: "Open the search query in the web browser",
            },
          ],
        },
        {
          name: "repos",
          description: "Search for repositories",
          args: { name: "query", isOptional: true },
          options: [
            {
              name: "--archived",
              description:
                "Filter based on the repository archived state {true|false}",
            },
            {
              name: "--created",
              description: "Filter based on created at date",
              args: { name: "date" },
            },
            {
              name: "--followers",
              description: "Filter based on number of followers",
              args: { name: "number" },
            },
            {
              name: "--forks",
              description: "Filter on number of forks",
              args: { name: "number" },
            },
            {
              name: "--good-first-issues",
              description:
                "Filter on number of issues with the 'good first issue' label",
              args: { name: "number" },
            },
            {
              name: "--help-wanted-issues",
              description:
                "Filter on number of issues with the 'help wanted' label",
              args: { name: "number" },
            },
            {
              name: "--include-forks",
              description:
                "Include forks in fetched repositories: {false|true|only}",
              args: {
                name: "include-forks",
                suggestions: ["false", "true", "only"],
              },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: extensionSearchJsonFields }),
              },
            },
            {
              name: "--language",
              description: "Filter based on the coding language",
              args: { name: "language" },
            },
            {
              name: "--license",
              description: "Filter based on license type",
              isRepeatable: true,
              args: { name: "license" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of repositories to fetch",
              args: { name: "int", default: "30" },
            },
            {
              name: "--match",
              description:
                "Restrict search to specific field of repository: {name|description|readme}",
              isRepeatable: true,
              args: {
                name: "match",
                suggestions: ["name", "description", "readme"],
              },
            },
            {
              name: "--number-topics",
              description: "Filter on number of topics",
              args: { name: "number" },
            },
            {
              name: "--order",
              description:
                "Order of repositories returned, ignored unless '--sort' flag is specified: {asc|desc}",
              args: {
                name: "order",
                default: "desc",
                suggestions: ["asc", "desc"],
              },
            },
            {
              name: "--owner",
              description: "Filter on owner",
              isRepeatable: true,
              args: { name: "owner" },
            },
            {
              name: "--size",
              description: "Filter on a size range, in kilobytes",
              args: { name: "size" },
            },
            {
              name: "--sort",
              description:
                "Sort fetched repositories: {forks|help-wanted-issues|stars|updated}",
              args: {
                name: "sort",
                default: "best-match",
                suggestions: [
                  "forks",
                  "help-wanted-issues",
                  "stars",
                  "updated",
                ],
              },
            },
            {
              name: "--stars",
              description: "Filter on number of stars",
              args: { name: "number" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: "--topic",
              description: "Filter on topic",
              isRepeatable: true,
              args: { name: "topic" },
            },
            {
              name: "--updated",
              description: "Filter on last updated at date",
              args: { name: "date" },
            },
            {
              name: "--visibility",
              description:
                "Filter based on visibility: {public|private|internal}",
              isRepeatable: true,
              args: {
                name: "visibility",
                suggestions: ["public", "private", "internal"],
              },
            },
            {
              name: ["-w", "--web"],
              description: "Open the search query in the web browser",
            },
          ],
        },
      ],
    },
    {
      name: "secret",
      description: "Manage GitHub secrets",
      subcommands: [
        {
          name: ["delete", "remove"],
          description: "Delete secrets",
          isDangerous: true,
          args: { name: "secret-name" },
          options: [
            {
              name: ["-a", "--app"],
              description:
                "Delete a secret for a specific application: {actions|agents|codespaces|dependabot}",
              args: {
                name: "app",
                suggestions: ["actions", "agents", "codespaces", "dependabot"],
              },
            },
            {
              name: ["-e", "--env"],
              description: "Delete a secret for an environment",
              args: { name: "env" },
            },
            {
              name: ["-o", "--org"],
              description: "Delete a secret for an organization",
              args: { name: "org" },
            },
            {
              name: ["-u", "--user"],
              description: "Delete a secret for your user",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List secrets",
          options: [
            {
              name: ["-a", "--app"],
              description:
                "List secrets for a specific application: {actions|agents|codespaces|dependabot}",
              args: {
                name: "app",
                suggestions: ["actions", "agents", "codespaces", "dependabot"],
              },
            },
            {
              name: ["-e", "--env"],
              description: "List secrets for an environment",
              args: { name: "env" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: secretListJsonFields }),
              },
            },
            {
              name: ["-o", "--org"],
              description: "List secrets for an organization",
              args: { name: "org" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
            {
              name: ["-u", "--user"],
              description: "List a secret for your user",
            },
          ],
        },
        {
          name: "set",
          description: "Create or update secrets",
          args: { name: "secret-name" },
          options: [
            {
              name: ["-a", "--app"],
              description:
                "Set the application for a secret: {actions|agents|codespaces|dependabot}",
              args: {
                name: "app",
                suggestions: ["actions", "agents", "codespaces", "dependabot"],
              },
            },
            {
              name: ["-b", "--body"],
              description:
                "The value for the secret (reads from standard input if not specified)",
              args: { name: "body" },
            },
            {
              name: ["-e", "--env"],
              description: "Set deployment environment secret",
              args: { name: "environment" },
            },
            {
              name: ["-f", "--env-file"],
              description:
                "Load secret names and values from a dotenv-formatted file",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--no-repos-selected",
              description: "No repositories can access the organization secret",
            },
            {
              name: "--no-store",
              description:
                "Print the encrypted, base64-encoded value instead of storing it on GitHub",
            },
            {
              name: ["-o", "--org"],
              description: "Set organization secret",
              args: { name: "organization" },
            },
            {
              name: ["-r", "--repos"],
              description:
                "List of repositories that can access an organization or user secret",
              args: { name: "repositories" },
            },
            {
              name: ["-u", "--user"],
              description: "Set a secret for your user",
            },
            {
              name: ["-v", "--visibility"],
              description:
                "Set visibility for an organization secret: {all|private|selected}",
              args: {
                name: "visibility",
                default: "private",
                suggestions: ["all", "private", "selected"],
              },
            },
          ],
        },
      ],
      options: [
        {
          name: ["-R", "--repo"],
          description:
            "Select another repository using the [HOST/]OWNER/REPO format",
          args: {
            name: "[HOST/]OWNER/REPO",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          isPersistent: true,
        },
      ],
    },
    {
      name: ["skill", "skills"],
      description: "Install and manage agent skills (preview)",
      subcommands: [
        {
          name: ["install", "add"],
          description:
            "Install agent skills from a GitHub repository (preview)",
          args: [
            { name: "repository" },
            { name: "skill[@version]", isOptional: true },
          ],
          options: [
            {
              name: "--agent",
              description: "Target agent (see supported values above)",
              args: { name: "agent", suggestions: skillAgents },
            },
            {
              name: "--all",
              description:
                "Install all skills without prompting for skill selection",
            },
            {
              name: "--allow-hidden-dirs",
              description:
                "Include skills in hidden directories (e.g. .claude/skills/, .agents/skills/)",
            },
            {
              name: "--dir",
              description:
                "Install to a custom directory (overrides --agent and --scope)",
              args: { name: "dir" },
            },
            {
              name: ["-f", "--force"],
              description: "Overwrite existing skills without prompting",
            },
            {
              name: "--from-local",
              description:
                "Treat the argument as a local directory path instead of a repository",
            },
            {
              name: "--pin",
              description: "Pin to a specific git tag or commit SHA",
              args: { name: "pin" },
            },
            {
              name: "--scope",
              description: "Installation scope: {project|user}",
              args: {
                name: "scope",
                default: "project",
                suggestions: ["project", "user"],
              },
            },
            {
              name: "--upstream",
              description:
                "Install from the upstream source when a re-published skill is detected",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List installed skills (preview)",
          options: [
            {
              name: "--agent",
              description:
                "Filter by target agent: {github-copilot|claude-code|cursor|codex|gemini-cli|antigravity|antigravity-cli|antigravity2.0|adal|amp|augment|bob|cline|codebuddy|command-code|continue|cortex|crush|deepagents|devin|droid|firebender|goose|grok|iflow-cli|junie|kilo|kimi-cli|kiro-cli|kode|mcpjam|mistral-vibe|mux|neovate|openclaw|opencode|openhands|pi|pochi|qoder|qwen-code|replit|roo|trae|trae-cn|universal|warp|zencoder}",
              args: { name: "agent", suggestions: skillAgents },
            },
            {
              name: "--dir",
              description: "Scan a custom directory for installed skills",
              args: { name: "dir" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: skillListJsonFields }),
              },
            },
            {
              name: "--scope",
              description: "Filter by installation scope: {project|user}",
              args: { name: "scope", suggestions: ["project", "user"] },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: ["preview", "show"],
          description: "Preview a skill from a GitHub repository (preview)",
          args: [{ name: "repository" }, { name: "skill", isOptional: true }],
          options: [
            {
              name: "--allow-hidden-dirs",
              description:
                "Include skills in hidden directories (e.g. .claude/skills/, .agents/skills/)",
            },
          ],
        },
        {
          name: "publish",
          description:
            "Validate and publish skills to a GitHub repository (preview)",
          args: { name: "directory", isOptional: true, template: "folders" },
          options: [
            { name: "--dry-run", description: "Validate without publishing" },
            {
              name: "--fix",
              description:
                "Auto-fix issues where possible without publishing (e.g. strip install metadata)",
            },
            {
              name: "--tag",
              description: "Version tag for the release (e.g. v1.0.0)",
              args: { name: "tag" },
            },
          ],
        },
        {
          name: "search",
          description: "Search for skills across GitHub (preview)",
          args: { name: "query" },
          options: [
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: skillSearchJsonFields }),
              },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of results per page",
              args: { name: "int", default: "15" },
            },
            {
              name: "--owner",
              description:
                "Filter results to a specific GitHub user or organization",
              args: { name: "owner" },
            },
            {
              name: "--page",
              description: "Page number of results to fetch",
              args: { name: "int", default: "1" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update installed skills to their latest versions (preview)",
          args: { name: "skill...", isOptional: true, isVariadic: true },
          options: [
            {
              name: "--all",
              description: "Update all skills without prompting",
            },
            {
              name: "--dir",
              description: "Scan a custom directory for installed skills",
              args: { name: "dir" },
            },
            {
              name: "--dry-run",
              description: "Report available updates without modifying files",
            },
            {
              name: "--force",
              description: "Re-download even if already up to date",
            },
            {
              name: "--unpin",
              description:
                "Clear pinned version and include pinned skills in update",
            },
          ],
        },
      ],
    },
    {
      name: "ssh-key",
      description: "Manage SSH keys",
      subcommands: [
        {
          name: "add",
          description: "Add an SSH key to your GitHub account",
          args: { name: "key-file", isOptional: true, template: "filepaths" },
          options: [
            {
              name: ["-t", "--title"],
              description: "Title for the new key",
              args: { name: "title" },
            },
            {
              name: "--type",
              description: "Type of the ssh key: {authentication|signing}",
              args: {
                name: "type",
                default: "authentication",
                suggestions: ["authentication", "signing"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an SSH key from your GitHub account",
          isDangerous: true,
          args: { name: "id" },
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "Lists SSH keys in your GitHub account",
        },
      ],
    },
    {
      name: "status",
      description:
        "Print information about relevant issues, pull requests, and notifications across repositories",
      options: [
        {
          name: ["-e", "--exclude"],
          description:
            "Comma separated list of repos to exclude in owner/name format",
          isRepeatable: true,
          args: { name: "exclude" },
        },
        {
          name: ["-o", "--org"],
          description: "Report status within an organization",
          args: { name: "org" },
        },
      ],
    },
    {
      name: "variable",
      description: "Manage GitHub Actions variables",
      subcommands: [
        {
          name: ["delete", "remove"],
          description: "Delete variables",
          isDangerous: true,
          args: { name: "variable-name" },
          options: [
            {
              name: ["-e", "--env"],
              description: "Delete a variable for an environment",
              args: { name: "env" },
            },
            {
              name: ["-o", "--org"],
              description: "Delete a variable for an organization",
              args: { name: "org" },
            },
          ],
        },
        {
          name: "get",
          description: "Get variables",
          args: { name: "variable-name" },
          options: [
            {
              name: ["-e", "--env"],
              description: "Get a variable for an environment",
              args: { name: "env" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: variableGetJsonFields }),
              },
            },
            {
              name: ["-o", "--org"],
              description: "Get a variable for an organization",
              args: { name: "org" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List variables",
          options: [
            {
              name: ["-e", "--env"],
              description: "List variables for an environment",
              args: { name: "env" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: variableGetJsonFields }),
              },
            },
            {
              name: ["-o", "--org"],
              description: "List variables for an organization",
              args: { name: "org" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "set",
          description: "Create or update variables",
          args: { name: "variable-name" },
          options: [
            {
              name: ["-b", "--body"],
              description:
                "The value for the variable (reads from standard input if not specified)",
              args: { name: "body" },
            },
            {
              name: ["-e", "--env"],
              description: "Set deployment environment variable",
              args: { name: "environment" },
            },
            {
              name: ["-f", "--env-file"],
              description:
                "Load variable names and values from a dotenv-formatted file",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-o", "--org"],
              description: "Set organization variable",
              args: { name: "organization" },
            },
            {
              name: ["-r", "--repos"],
              description:
                "List of repositories that can access an organization variable",
              args: { name: "repositories" },
            },
            {
              name: ["-v", "--visibility"],
              description:
                "Set visibility for an organization variable: {all|private|selected}",
              args: {
                name: "visibility",
                default: "private",
                suggestions: ["all", "private", "selected"],
              },
            },
          ],
        },
      ],
      options: [
        {
          name: ["-R", "--repo"],
          description:
            "Select another repository using the [HOST/]OWNER/REPO format",
          args: {
            name: "[HOST/]OWNER/REPO",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          isPersistent: true,
        },
      ],
    },
    {
      name: "workflow",
      description: "View details about GitHub Actions workflows",
      subcommands: [
        {
          name: "disable",
          description: "Disable a workflow",
          args: { name: "workflow-id | workflow-name", isOptional: true },
        },
        {
          name: "enable",
          description: "Enable a workflow",
          args: { name: "workflow-id | workflow-name", isOptional: true },
        },
        {
          name: ["list", "ls"],
          description: "List workflows",
          options: [
            {
              name: ["-a", "--all"],
              description: "Include disabled workflows",
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: {
                name: "fields",
                generators: valueList({ values: workflowListJsonFields }),
              },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of workflows to fetch",
              args: { name: "int", default: "50" },
            },
            {
              name: ["-t", "--template"],
              description:
                'Format JSON output using a Go template; see "gh help formatting"',
              args: { name: "template" },
            },
          ],
        },
        {
          name: "run",
          description: "Run a workflow by creating a workflow_dispatch event",
          args: { name: "workflow-id | workflow-name", isOptional: true },
          options: [
            {
              name: ["-F", "--field"],
              description:
                'Add a string parameter in key=value format, respecting @ syntax (see "gh help api")',
              isRepeatable: true,
              args: { name: "key=value" },
            },
            {
              name: "--json",
              description: "Read workflow inputs as JSON via STDIN",
            },
            {
              name: ["-f", "--raw-field"],
              description: "Add a string parameter in key=value format",
              isRepeatable: true,
              args: { name: "key=value" },
            },
            {
              name: ["-r", "--ref"],
              description:
                "Branch or tag name which contains the version of the workflow file you'd like to run",
              args: { name: "ref" },
            },
          ],
        },
        {
          name: "view",
          description: "View the summary of a workflow",
          args: {
            name: "workflow-id | workflow-name | filename",
            isOptional: true,
            template: "filepaths",
          },
          options: [
            {
              name: ["-r", "--ref"],
              description:
                "The branch or tag name which contains the version of the workflow file you'd like to view",
              args: { name: "ref" },
            },
            {
              name: ["-w", "--web"],
              description: "Open workflow in the browser",
            },
            {
              name: ["-y", "--yaml"],
              description: "View the workflow yaml file",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-R", "--repo"],
          description:
            "Select another repository using the [HOST/]OWNER/REPO format",
          args: {
            name: "[HOST/]OWNER/REPO",
            generators: [
              ghGenerators.listRepositories,
              ghGenerators.listCustomRepositories,
            ],
          },
          isPersistent: true,
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command or topic",
      args: {
        name: "topic",
        isOptional: true,
        suggestions: [
          {
            name: "accessibility",
            description: "Learn about GitHub CLI's accessibility experiences",
          },
          {
            name: "actions",
            description: "Learn about working with GitHub Actions",
          },
          {
            name: "environment",
            description: "Environment variables that can be used with gh",
          },
          { name: "exit-codes", description: "Exit codes used by gh" },
          {
            name: "formatting",
            description: "Formatting options for JSON data exported from gh",
          },
          {
            name: "mintty",
            description: "Information about using gh with MinTTY",
          },
          {
            name: "reference",
            description: "A comprehensive reference of all gh commands",
          },
          {
            name: "telemetry",
            description: "Information about telemetry in gh",
          },
        ],
      },
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help for command",
      isPersistent: true,
    },
    { name: "--version", description: "Show gh version" },
  ],
};

export default completionSpec;
