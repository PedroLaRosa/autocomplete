// Projj v3.2.0 (crates.io latest = GitHub tag v3.2.0, 2026-11-19). Source: src/main.rs (clap derive), src/config.rs, src/task.rs and README.md at popomore/projj tag v3.2.0, read statically (binary not run)
// v3 is a Rust rewrite: the Node-era completion/import/sync commands and ~/.projj/cache.json are gone; the npm package "projj" is stuck at 2.1.0 (2021)

const projjDir = (context: Fig.GeneratorContext) =>
  `${context.environmentVariables["PROJJ_HOME"] ?? context.environmentVariables["HOME"]}/.projj`;

// Repository directory names, taken from `projj list --raw` (one path per line)
const repoGenerator: Fig.Generator = {
  script: ["projj", "list", "--raw"],
  postProcess: (output) => {
    const seen = new Set<string>();
    const suggestions: Fig.Suggestion[] = [];
    for (const path of output.split("\n")) {
      const name = path.trim().split("/").pop();
      if (!name || seen.has(name)) continue;
      seen.add(name);
      suggestions.push({ name, description: path.trim() });
    }
    return suggestions;
  },
};

// Named tasks: the `[tasks]` table of config.toml plus executables in ~/.projj/tasks/
const taskGenerator: Fig.Generator = {
  custom: async (_, executeCommand, context) => {
    const dir = projjDir(context);
    const tasks = new Map<string, Fig.Suggestion>();

    try {
      const config = await executeCommand({
        command: "cat",
        // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
        args: [`${dir}/config.toml`],
      });
      let inTasksTable = false;
      for (const line of config.stdout.split("\n")) {
        const table = line.match(/^\s*\[+[^\]]+\]+/);
        if (table) {
          inTasksTable = table[0].trim() === "[tasks]";
          continue;
        }
        const entry = line.match(/^\s*([\w-]+)\s*=\s*(.*?)\s*$/);
        if (inTasksTable && entry) {
          tasks.set(entry[1], {
            name: entry[1],
            description: entry[2].replace(/^["']|["']$/g, ""),
          });
        }
      }
    } catch {
      // No readable config.toml: `projj init` has not been run yet
    }

    try {
      const scripts = await executeCommand({
        command: "ls",
        args: ["-1", `${dir}/tasks`],
      });
      for (const name of scripts.stdout.split("\n")) {
        if (name && !tasks.has(name)) {
          tasks.set(name, { name, description: "Task script" });
        }
      }
    } catch {
      // No ~/.projj/tasks directory
    }

    return [...tasks.values()];
  },
};

const completionSpec: Fig.Spec = {
  name: "projj",
  description: "Manage git repositories with directory conventions",
  subcommands: [
    {
      name: "init",
      description: "Initialize configuration",
    },
    {
      name: "add",
      description: "Add repository",
      args: {
        name: "repo",
        description: "Repository URL, short form (owner/repo), or local path",
        template: "folders",
      },
    },
    {
      name: "find",
      description: "Find repository",
      args: {
        name: "keyword",
        description: "Keyword to search (opens fzf if omitted)",
        isOptional: true,
        generators: repoGenerator,
      },
    },
    {
      name: "remove",
      description: "Remove repository",
      args: {
        name: "keyword",
        description: "Keyword to match repository",
        generators: repoGenerator,
      },
    },
    {
      name: "run",
      description: "Run script in repository",
      options: [
        {
          name: "--all",
          description: "Run in all repositories",
        },
        {
          name: "--match",
          description: "Regex to filter repositories (with --all)",
          dependsOn: ["--all"],
          args: {
            name: "pattern",
          },
        },
      ],
      args: [
        {
          name: "script",
          description: "Script name or shell command",
          generators: taskGenerator,
        },
        {
          name: "args",
          description: "Extra arguments passed to the script (after --)",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "list",
      description: "List all repositories",
      options: [
        {
          name: "--raw",
          description: "Output raw paths only (for piping)",
        },
      ],
    },
    {
      name: "shell-setup",
      description: "Output shell setup (completions + `p()` function)",
      hidden: true,
      args: {
        name: "shell",
        description: "Shell type",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for projj",
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      description: "Show version number",
    },
  ],
};

export default completionSpec;
