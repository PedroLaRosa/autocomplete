// Hexo CLI hexo-cli v4.3.2 with hexo v8.1.2 and hexo-server v3.0.0 (latest on npm, 2026-11-20).
// Source: statically read the npm packages (hexo-cli dist/console + completion, hexo dist/plugins/console, hexo-server
// index.js/lib/server.js) and the hexojs/site docs (commands.md, migration.md); the CLI was not run.
const draftGenerator: Fig.Generator = {
  // Drafts are only loaded when --draft is passed (or render_drafts is true)
  script: ["bash", "-c", "hexo list post --draft | grep -E ^Draft"],
  postProcess: (out) => {
    return out
      .split("\n")
      .filter((file) => file.trim() !== "")
      .map(function (file) {
        const title = file
          .replace(/^.*   *_drafts\//g, "")
          .replace(/  *(.*)$/g, "")
          .replace(/\.[^.]+$/g, "");
        return {
          name: title,
          description: "Draft for " + title,
          icon: "fig://icon?type=md",
        };
      });
  },
};

const completionSpec: Fig.Spec = {
  name: "hexo",
  description: "Command line interface for Hexo, a static site generator",
  subcommands: [
    {
      name: "config",
      description: "Get or set configurations",
      args: [
        {
          name: "name",
          isOptional: true,
          description:
            "Setting name. Leave it blank if you want to show all configurations",
        },
        {
          name: "value",
          isOptional: true,
          description:
            "New value of a setting. Leave it blank if you just want to show a single configuration",
        },
      ],
    },
    {
      name: "help",
      description: "Displays a help for each command",
      args: {
        name: "command",
        description: "The command to display help for",
        isOptional: true,
        template: "help",
      },
    },
    {
      name: "init",
      description: "Create a new Hexo folder",
      options: [
        {
          name: "--no-clone",
          description: "Copy files instead of cloning from GitHub",
        },
        { name: "--no-install", description: "Skip npm install" },
      ],
      args: {
        name: "destination",
        description:
          "Folder path. Initialize in current folder if not specified",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "new",
      description: "Create a new article",
      options: [
        {
          name: ["-p", "--path"],
          description: "Post path. Customize the path of the post",
          args: {
            name: "path",
            description: "The path of the post",
            template: "filepaths",
          },
        },
        {
          name: ["-r", "--replace"],
          description: "Replace the current post if it existed",
        },
        {
          name: ["-s", "--slug"],
          description: "Post slug. Customize the URL of the post",
          args: {
            name: "slug",
            description: "The slug of the post",
          },
        },
      ],
      args: [
        {
          name: "layout",
          description: "The layout to use",
          isOptional: true,
          suggestions: ["post", "page", "draft"],
        },
        {
          name: "title",
          description: "The title of the post",
        },
      ],
    },
    {
      name: "generate",
      description: "Generate static files",
      options: [
        {
          name: ["-d", "--deploy"],
          description: "Deploy after generation finishes",
        },
        {
          name: ["-f", "--force"],
          description: "Force regenerate",
        },
        {
          name: ["-w", "--watch"],
          description: "Watch file changes",
        },
        {
          name: ["-b", "--bail"],
          description:
            "Raise an error if any unhandled exception is thrown during generation",
        },
        {
          name: ["-c", "--concurrency"],
          description:
            "Maximum number of files to be generated in parallel. Default is infinity",
          args: {
            name: "concurrency",
            description: "The number of files to generate in parallel",
          },
        },
      ],
    },
    {
      name: "publish",
      description: "Publish a draft",
      args: [
        {
          name: "layout",
          description: "The layout to use",
          isOptional: true,
          suggestions: ["post", "page", "draft"],
        },
        {
          name: "filename",
          description: "The name of the post",
          generators: draftGenerator,
        },
      ],
    },
    {
      name: "server",
      description:
        "Start a local server. By default, this is at http://localhost:4000/",
      options: [
        {
          name: ["-i", "--ip"],
          description:
            "Override the default server IP. Bind to all IP address by default",
          args: {
            name: "ip",
            description: "The IP address to bind to",
          },
        },
        {
          name: ["-p", "--port"],
          description: "Override default port",
          args: {
            name: "port",
            description: "The port to listen on (default 4000)",
          },
        },
        {
          name: ["-s", "--static"],
          description: "Only serve static files",
        },
        {
          name: ["-l", "--log"],
          description: "Enable logger. Override logger format",
          args: {
            name: "format",
            isOptional: true,
            description:
              "The morgan logger format. Can be predefined or customized",
            suggestions: ["combined", "common", "tiny", "dev", "short"],
          },
        },
        {
          name: ["-o", "--open"],
          description:
            "Immediately open the server url in your default web browser",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy your website",
      options: [
        {
          name: "--setup",
          description: "Setup without deployment",
        },
        {
          name: ["-g", "--generate"],
          description: "Generate static files before deploying",
        },
      ],
    },
    {
      name: "render",
      description:
        "Render files with renderer plugins (e.g. Markdown) and save them at the specified path",
      options: [
        {
          name: "--engine",
          description: "Specify render engine",
          args: {
            name: "engine",
            description: "The render engine to use, e.g. md or ejs",
          },
        },
        {
          name: ["-o", "--output"],
          description:
            "Output destination. Result will be printed in the terminal if the output destination is not set",
          args: {
            name: "output file",
            description: "The path of the output file",
            template: "filepaths",
          },
        },
        {
          name: "--pretty",
          description: "Prettify JSON output",
        },
      ],
      args: {
        name: "file",
        description: "The file to render",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "migrate",
      description: "Migrate content from other blog systems",
      args: {
        name: "type",
        description:
          "The type of migration (needs the matching hexo-migrator-* plugin). See https://hexo.io/docs/migration for more details",
        suggestions: ["rss", "jekyll", "octopress", "wordpress", "joomla"],
      },
    },
    {
      name: "clean",
      description:
        "Clean the cache file (`db.json`) and generated files (`public`)",
    },
    {
      name: "list",
      description: "List the information of the site",
      args: {
        name: "type",
        description: "The type of routes to list",
        suggestions: ["post", "route", "page", "tag", "category"],
      },
    },
    {
      name: "version",
      description: "Display version information",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help for a command",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Display version information",
    },
    {
      name: "--console-list",
      description: "List the registered commands",
    },
    {
      name: "--completion",
      description: "Print a shell completion script",
      args: {
        name: "shell",
        description: "The shell to print the completion script for",
        suggestions: ["bash", "zsh", "fish"],
      },
    },
    {
      name: "--config",
      description:
        "Uses a custom config file (instead of `_config.yml`). Also accepts a comma-separated list (no spaces) of JSON or YAML config files that will combine the files into a single `_multiconfig.yml`",
      isPersistent: true,
      args: {
        name: "config file",
        template: "filepaths",
      },
    },
    {
      name: "--safe",
      description: "Disable loading plugins and scripts",
      isPersistent: true,
    },
    {
      name: "--debug",
      description: "Log verbose messages to the terminal and to `debug.log`",
      isPersistent: true,
    },
    {
      name: "--silent",
      description: "Silence output to the terminal",
      isPersistent: true,
    },
    {
      name: "--draft",
      description:
        "Display draft posts (stored in the `source/_drafts` folder)",
      isPersistent: true,
    },
    {
      name: "--cwd",
      description: "Customize the path of current working directory",
      isPersistent: true,
      args: {
        name: "directory",
        template: "folders",
      },
    },
  ],
};
export default completionSpec;
