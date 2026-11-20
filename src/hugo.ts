// Hugo v0.170.1 (Go module proxy / git tag v0.170.1, 2026-11-20). Source: gohugoio/hugo @ v0.170.1 read statically (commands/*.go cobra definitions, docs/content/en/commands/*.md generated CLI reference, resources/kinds, chroma v2.27.0 style registry); `mod get` pass-through flags checked against the local Go 1.24 toolchain; the binary was not run.
// Not covered: hidden maintainer-only commands (`hugo gen docshelper`, `hugo release`). `hugo deploy` only works in release builds that have "withdeploy" in the archive name.

const help = (name: string): Fig.Option => ({
  name: ["-h", "--help"],
  description: `Help for ${name}`,
});

// Persistent flags of the root command. They are inherited by every
// subcommand except `hugo mod get`, which hands all flags to `go get`.
const globalOptions: Fig.Option[] = [
  {
    name: "--clock",
    description:
      "Set the clock used by Hugo, e.g. --clock 2021-11-06T22:30:00.00+09:00",
    args: {
      name: "time",
    },
  },
  {
    name: "--config",
    description: "Config file (default is hugo.yaml|json|toml)",
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: "--configDir",
    description: "Config dir (default 'config')",
    args: {
      name: "directory path",
      default: "config",
      template: "folders",
    },
  },
  {
    name: ["-d", "--destination"],
    description: "Filesystem path to write files to",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: ["-e", "--environment"],
    description: "Build environment",
    args: {
      name: "environment",
      suggestions: ["development", "production"],
    },
  },
  {
    name: "--ignoreVendorPaths",
    description:
      "Ignores any _vendor for module paths matching the given Glob pattern",
    args: {
      name: "glob pattern",
    },
  },
  {
    name: "--logLevel",
    description: "Log level (debug|info|warn|error)",
    args: {
      name: "level",
      suggestions: ["debug", "info", "warn", "error"],
    },
  },
  {
    name: "--noBuildLock",
    description: "Don't create .hugo_build.lock file",
  },
  {
    name: "--quiet",
    description: "Build in quiet mode",
  },
  {
    name: ["-M", "--renderToMemory"],
    description: "Render to memory (mostly useful when running the server)",
  },
  {
    name: ["-s", "--source"],
    description: "Filesystem path to read files relative from",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--themesDir",
    description: "Filesystem path to themes directory",
    args: {
      name: "path",
      template: "folders",
    },
  },
];

// Config-related build flags, used by 'hugo', 'hugo build', 'hugo server',
// 'hugo config', 'hugo mod' (except 'get') and 'hugo new content'

const buildConfigOptions: Fig.Option[] = [
  {
    name: ["-b", "--baseURL"],
    description: "Hostname (and path) to the root, e.g. https://spf13.com/",
    args: {
      name: "hostname and path",
    },
  },
  {
    name: "--cacheDir",
    description: "Filesystem path to cache directory",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: ["-c", "--contentDir"],
    description: "Filesystem path to content directory",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--renderSegments",
    description: "Named segments to render (configured in the segments config)",
    isRepeatable: true,
    args: {
      name: "segment",
    },
  },
  {
    name: ["-t", "--theme"],
    description: "Themes to use (located in /themes/THEMENAME/)",
    isRepeatable: true,
    args: {
      name: "theme name",
    },
  },
];

// Build flags common to 'hugo', 'hugo build' and 'hugo server' (on top of buildConfigOptions)

const buildOptions: Fig.Option[] = [
  {
    name: ["-D", "--buildDrafts"],
    description: "Include content marked as draft",
  },
  {
    name: ["-E", "--buildExpired"],
    description: "Include expired content",
  },
  {
    name: ["-F", "--buildFuture"],
    description: "Include content with publishdate in the future",
  },
  {
    name: "--cleanDestinationDir",
    description: "Remove stale files from destination",
  },
  {
    name: "--disableKinds",
    description: "Disable different kind of pages (home, RSS etc.)",
    isRepeatable: true,
    args: {
      name: "kind,kind",
      suggestions: [
        "page",
        "home",
        "section",
        "taxonomy",
        "term",
        "rss",
        "sitemap",
        "robotstxt",
        "404",
      ],
    },
  },
  {
    name: "--enableGitInfo",
    description:
      "Add Git revision, date, author, and CODEOWNERS info to the pages",
  },
  {
    name: "--forceSyncStatic",
    description: "Copy all files when static is changed",
  },
  {
    name: "--gc",
    description:
      "Enable to run some cleanup tasks (remove unused cache files) after the build",
  },
  {
    name: "--ignoreCache",
    description: "Ignore the configured file caches",
  },
  {
    name: ["-l", "--layoutDir"],
    description: "Filesystem path to layout directory",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--minify",
    description: "Minify any supported output format (HTML, XML etc.)",
  },
  {
    name: "--noChmod",
    description: "Don't sync permission mode of files",
  },
  {
    name: "--noTimes",
    description: "Don't sync modification time of files",
  },
  {
    name: "--panicOnWarning",
    description: "Panic on first WARNING log",
  },
  {
    name: "--poll",
    description:
      "Set this to a poll interval, e.g --poll 700ms, to use a poll based approach to watch for file system changes",
    args: {
      name: "interval",
    },
  },
  {
    name: "--printI18nWarnings",
    description: "Print missing translations",
  },
  {
    name: "--printMemoryUsage",
    description: "Print memory usage to screen at intervals",
  },
  {
    name: "--printPathWarnings",
    description: "Print warnings on duplicate target paths etc",
  },
  {
    name: "--printUnusedTemplates",
    description: "Print warnings on unused templates",
  },
  {
    name: "--profile-cpu",
    description: "Write cpu profile to file",
    hidden: true,
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: "--profile-mem",
    description: "Write memory profile to file",
    hidden: true,
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: "--profile-mutex",
    description: "Write Mutex profile to file",
    hidden: true,
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: "--templateMetrics",
    description: "Display metrics about template executions",
  },
  {
    name: "--templateMetricsHints",
    description:
      "Calculate some improvement hints when combined with --templateMetrics",
  },
  {
    name: "--trace",
    description: "Write trace to file (not useful in general)",
    args: {
      name: "file",
      template: "filepaths",
    },
  },
];

// Options of 'hugo' and 'hugo build'. Only these take --watch with a default of false;
// 'hugo server' defines its own --watch (default true).

const rootBuildOptions = (name: string): Fig.Option[] => [
  help(name),
  ...buildConfigOptions,
  ...buildOptions,
  ...globalOptions,
  {
    name: ["-w", "--watch"],
    description: "Watch filesystem for changes and recreate as needed",
  },
];

// Options of 'hugo new content'. Also accepted by 'hugo new', which inserts
// "content" itself when it is called as `hugo new <path>` (legacy form).

const archetypeGenerator: Fig.Generator = {
  script: ["ls", "./archetypes/"],
  postProcess: (output) =>
    output
      .split("\n")
      .filter(Boolean)
      .map((fileName) => {
        const dot = fileName.lastIndexOf(".");
        return {
          name: dot > 0 ? fileName.slice(0, dot) : fileName,
          icon: "fig://icon?type=string",
        };
      }),
};

const newContentOptions: Fig.Option[] = [
  ...buildConfigOptions,
  ...globalOptions,
  {
    name: "--editor",
    description: "Edit new content with this editor, if provided",
    args: {
      name: "editor",
    },
  },
  {
    name: ["-f", "--force"],
    description: "Overwrite file if it already exists",
    isDangerous: true,
  },
  {
    name: ["-k", "--kind"],
    description: "Content type to create",
    args: {
      name: "archetype",
      generators: archetypeGenerator,
    },
  },
];

const contentPathArg: Fig.Arg = {
  name: "path",
  description:
    "Content path relative to the content dir, e.g. posts/my-post.md",
  template: "folders",
};

const formatOption: Fig.Option = {
  name: "--format",
  description: "Preferred file format (toml, yaml or json) (default 'toml')",
  args: {
    name: "format",
    default: "toml",
    suggestions: ["toml", "yaml", "json"],
  },
};

const highlighterStyles = [
  "abap",
  "algol",
  "algol_nu",
  "arduino",
  "ashen",
  "aura-theme-dark",
  "aura-theme-dark-soft",
  "autumn",
  "average",
  "base16-snazzy",
  "borland",
  "bw",
  "catppuccin-frappe",
  "catppuccin-latte",
  "catppuccin-macchiato",
  "catppuccin-mocha",
  "colorful",
  "darcula",
  "doom-one",
  "doom-one2",
  "dracula",
  "emacs",
  "evergarden",
  "friendly",
  "fruity",
  "github",
  "github-dark",
  "gruvbox",
  "gruvbox-light",
  "hr_high_contrast",
  "hrdark",
  "igor",
  "kanagawa-dragon",
  "kanagawa-lotus",
  "kanagawa-wave",
  "lovelace",
  "manni",
  "modus-operandi",
  "modus-vivendi",
  "monokai",
  "monokailight",
  "murphy",
  "native",
  "nord",
  "nordic",
  "onedark",
  "onesenterprise",
  "paraiso-dark",
  "paraiso-light",
  "pastie",
  "perldoc",
  "pygments",
  "rainbow_dash",
  "rose-pine",
  "rose-pine-dawn",
  "rose-pine-moon",
  "rpgle",
  "rrt",
  "solarized-dark",
  "solarized-dark256",
  "solarized-light",
  "swapoff",
  "tango",
  "tokyonight-day",
  "tokyonight-moon",
  "tokyonight-night",
  "tokyonight-storm",
  "trac",
  "vim",
  "vs",
  "vulcan",
  "witchhazel",
  "xcode",
  "xcode-dark",
];

// Options common to 'toJSON', 'toTOML' and 'toYAML' (persistent flags of 'hugo convert')

const convertOptions: Fig.Option[] = [
  {
    name: ["-o", "--output"],
    description: "Filesystem path to write files to",
    isPersistent: true,
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--unsafe",
    description: "Enable less safe operations, please backup first",
    isDangerous: true,
    isPersistent: true,
  },
];

const completionShell = (shell: string): Fig.Subcommand => ({
  name: shell,
  description: `Generate the autocompletion script for ${shell}`,
  options: [
    help(shell),
    {
      name: "--no-descriptions",
      description: "Disable completion descriptions",
    },
  ],
});

const completionSpec: Fig.Spec = {
  name: "hugo",
  description: "Build your project",
  subcommands: [
    {
      name: "build",
      description: "Build your project",
      options: rootBuildOptions("build"),
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        completionShell("bash"),
        completionShell("fish"),
        completionShell("powershell"),
        completionShell("zsh"),
      ],
      options: [help("completion")],
    },
    {
      name: "config",
      description: "Display project configuration",
      subcommands: [
        {
          name: "mounts",
          description: "Print the configured file mounts",
          options: [help("mounts"), ...buildConfigOptions, ...globalOptions],
        },
      ],
      options: [
        help("config"),
        ...buildConfigOptions,
        ...globalOptions,
        formatOption,
        {
          name: "--lang",
          description:
            "The language to display config for (default is the default content language)",
          args: {
            name: "language",
          },
        },
        {
          name: "--printZero",
          description:
            'Include config options with zero values (e.g. false, 0, "") in the output',
        },
      ],
    },
    {
      name: "convert",
      description: "Convert front matter to another format",
      subcommands: [
        {
          name: "toJSON",
          description: "Convert front matter to JSON",
          isDangerous: true,
          options: [help("toJSON"), ...globalOptions],
        },
        {
          name: "toTOML",
          description: "Convert front matter to TOML",
          isDangerous: true,
          options: [help("toTOML"), ...globalOptions],
        },
        {
          name: "toYAML",
          description: "Convert front matter to YAML",
          isDangerous: true,
          options: [help("toYAML"), ...globalOptions],
        },
      ],
      options: [help("convert"), ...globalOptions, ...convertOptions],
    },
    {
      name: "deploy",
      description: "Deploy your project to a cloud provider",
      options: [
        help("deploy"),
        ...globalOptions,
        {
          name: "--confirm",
          description:
            "Ask for confirmation before making changes to the target",
        },
        {
          name: "--dryRun",
          description: "Dry run",
        },
        {
          name: "--force",
          description: "Force upload of all files",
        },
        {
          name: "--invalidateCDN",
          description:
            "Invalidate the CDN cache listed in the deployment target (default true)",
          requiresSeparator: true,
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--maxDeletes",
          description:
            "Maximum # of files to delete, or -1 to disable (default 256)",
          args: {
            name: "int",
          },
        },
        {
          name: "--target",
          description:
            "Target deployment from deployments section in config file; defaults to the first one",
          args: {
            name: "target",
          },
        },
        {
          name: "--workers",
          description: "Number of workers to transfer files (default 10)",
          args: {
            name: "int",
          },
        },
      ],
    },
    {
      name: "env",
      description: "Display version and environment info",
      options: [help("env"), ...globalOptions],
    },
    {
      name: "gen",
      description: "Generate documentation and syntax highlighting styles",
      subcommands: [
        {
          name: "chromastyles",
          description:
            "Generate CSS stylesheet for the Chroma code highlighter",
          options: [
            help("chromastyles"),
            ...globalOptions,
            {
              name: "--classDark",
              description:
                "Class name used by --modeSelector for dark styles (default 'dark')",
              args: {
                name: "class",
                default: "dark",
              },
            },
            {
              name: "--classLight",
              description:
                "Class name used by --modeSelector for light styles (default 'light')",
              args: {
                name: "class",
                default: "light",
              },
            },
            {
              name: "--highlightStyle",
              description:
                'Foreground and background colors for highlighted lines, e.g. --highlightStyle "#fff000 bg:#000fff"',
              args: {
                name: "style",
              },
            },
            {
              name: "--lineNumbersInlineStyle",
              description:
                'Foreground and background colors for inline line numbers, e.g. --lineNumbersInlineStyle "#fff000 bg:#000fff"',
              args: {
                name: "style",
              },
            },
            {
              name: "--lineNumbersTableStyle",
              description:
                'Foreground and background colors for table line numbers, e.g. --lineNumbersTableStyle "#fff000 bg:#000fff"',
              args: {
                name: "style",
              },
            },
            {
              name: "--mode",
              description: "Style mode (light or dark)",
              args: {
                name: "mode",
                suggestions: ["light", "dark"],
              },
            },
            {
              name: "--modeSelector",
              description:
                'Scope selectors under a top level mode class, e.g. ".dark .chroma"',
            },
            {
              name: "--omitClassComments",
              description:
                "Omit CSS class comment prefixes in the generated CSS",
            },
            {
              name: "--omitEmpty",
              description:
                "Omit empty CSS rules (no longer needed, empty classes are always omitted)",
              deprecated: true,
            },
            {
              name: "--style",
              description:
                "Highlighter style, see https://gohugo.io/quick-reference/syntax-highlighting-styles/ (default 'friendly')",
              args: {
                name: "style name",
                default: "friendly",
                suggestions: highlighterStyles,
              },
            },
          ],
        },
        {
          name: "doc",
          description: "Generate Markdown documentation for the Hugo CLI",
          options: [
            help("doc"),
            ...globalOptions,
            {
              name: "--dir",
              description:
                "The directory to write the doc (default '/tmp/hugodoc/')",
              args: {
                name: "path",
                template: "folders",
              },
            },
          ],
        },
        {
          name: "man",
          description: "Generate man pages for the Hugo CLI",
          options: [
            help("man"),
            ...globalOptions,
            {
              name: "--dir",
              description:
                "The directory to write the man pages (default 'man/')",
              args: {
                name: "path",
                template: "folders",
              },
            },
          ],
        },
      ],
      options: [help("gen"), ...globalOptions],
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        isOptional: true,
        suggestions: [
          { name: "build" },
          { name: "completion" },
          { name: "config" },
          { name: "convert" },
          { name: "deploy" },
          { name: "env" },
          { name: "gen" },
          { name: "help" },
          { name: "import" },
          { name: "list" },
          { name: "mod" },
          { name: "new" },
          { name: "server" },
          { name: "version" },
        ],
      },
    },
    {
      name: "import",
      description: "Import a project from another system",
      subcommands: [
        {
          name: "jekyll",
          description:
            "Import from Jekyll (requires the Jekyll root path and the target path)",
          args: [
            {
              name: "jekyll_root_path",
              template: "folders",
            },
            {
              name: "target_path",
              template: "folders",
            },
          ],
          options: [
            help("jekyll"),
            ...globalOptions,
            {
              name: "--force",
              description: "Allow import into non-empty target directory",
              isDangerous: true,
            },
          ],
        },
      ],
      options: [help("import"), ...globalOptions],
    },
    {
      name: "list",
      description: "List content",
      subcommands: [
        {
          name: "all",
          description: "List all content including draft, future, and expired",
          options: [help("all"), ...globalOptions],
        },
        {
          name: "drafts",
          description: "List draft content",
          options: [help("drafts"), ...globalOptions],
        },
        {
          name: "expired",
          description: "List content with a past expiration date",
          options: [help("expired"), ...globalOptions],
        },
        {
          name: "future",
          description: "List content with a future publication date",
          options: [help("future"), ...globalOptions],
        },
        {
          name: "published",
          description: "List content that is not draft, future, or expired",
          options: [help("published"), ...globalOptions],
        },
      ],
      options: [help("list"), ...globalOptions],
    },
    {
      name: "mod",
      description: "Manage modules",
      subcommands: [
        {
          name: "clean",
          description: "Delete the Hugo Module cache for the current project",
          options: [
            help("clean"),
            ...buildConfigOptions,
            ...globalOptions,
            {
              name: "--all",
              description: "Clean entire module cache",
            },
            {
              name: "--pattern",
              description:
                'Pattern matching module paths to clean (all if not set), e.g. "**hugo*"',
              args: {
                name: "pattern",
              },
            },
          ],
        },
        {
          name: "get",
          description: "Resolves dependencies in your current Hugo project",
          args: {
            name: "module",
            description:
              "Module path, optionally with a version (e.g. github.com/gohugoio/testshortcodes@v0.3.0), or ./... for a recursive update",
            isOptional: true,
            isVariadic: true,
          },
          // All flags are passed on to `go get` (flag parsing is disabled in Hugo),
          // so the global Hugo flags do not apply here.
          options: [
            help("get"),
            {
              name: "-d",
              description: "Deprecated, a no-op in current Go versions",
              deprecated: true,
            },
            {
              name: "-f",
              description: "Deprecated, a no-op in current Go versions",
              deprecated: true,
            },
            {
              name: "-fix",
              description: "Deprecated, a no-op in current Go versions",
              deprecated: true,
            },
            {
              name: "-t",
              description:
                "Also consider modules needed to build tests of the specified packages",
            },
            {
              name: "-tool",
              description:
                "Add a tool line to go.mod for each listed package (removed when used with @none)",
            },
            {
              name: "-u",
              description:
                "Update modules providing dependencies of the named packages to newer minor or patch releases (-u=patch selects patch releases by default)",
            },
            {
              name: "-v",
              description: "Enables verbose progress and debug output",
            },
            {
              name: "-x",
              description: "Print commands as they are executed",
            },
          ],
        },
        {
          name: "graph",
          description: "Print a module dependency graph",
          options: [
            help("graph"),
            ...buildConfigOptions,
            ...globalOptions,
            {
              name: "--clean",
              description:
                "Delete module cache for dependencies that fail verification",
            },
          ],
        },
        {
          name: "init",
          description: "Initialize this project as a Hugo Module",
          args: {
            name: "module path",
            description: "Module path, e.g. github.com/gohugoio/testshortcodes",
            isOptional: true,
          },
          options: [help("init"), ...buildConfigOptions, ...globalOptions],
        },
        {
          name: "npm",
          description: "Various npm helpers",
          subcommands: [
            {
              name: "pack",
              description:
                "Merges module Node.js dependencies into an npm workspace",
              options: [help("pack"), ...buildConfigOptions, ...globalOptions],
            },
          ],
          options: [help("npm"), ...globalOptions],
        },
        {
          name: "tidy",
          description: "Remove unused entries in go.mod and go.sum",
          options: [help("tidy"), ...buildConfigOptions, ...globalOptions],
        },
        {
          name: "vendor",
          description:
            "Vendor all module dependencies into the _vendor directory",
          options: [help("vendor"), ...buildConfigOptions, ...globalOptions],
        },
        {
          name: "verify",
          description: "Verify dependencies",
          options: [
            help("verify"),
            ...buildConfigOptions,
            ...globalOptions,
            {
              name: "--clean",
              description:
                "Delete module cache for dependencies that fail verification",
            },
          ],
        },
      ],
      options: [help("mod"), ...globalOptions],
    },
    {
      name: "new",
      description: "Create new content",
      // `hugo new <path>` is mapped to `hugo new content <path>`
      args: contentPathArg,
      subcommands: [
        {
          name: "content",
          description: "Create new content",
          args: contentPathArg,
          options: [help("content"), ...newContentOptions],
        },
        {
          name: ["project", "site"],
          description: "Create a new project",
          args: {
            name: "path",
            template: "folders",
          },
          options: [
            help("project"),
            ...globalOptions,
            {
              name: ["-f", "--force"],
              description: "Init inside non-empty directory",
              isDangerous: true,
            },
            formatOption,
          ],
        },
        {
          name: "theme",
          description: "Create a new theme",
          args: {
            name: "name",
          },
          options: [help("theme"), ...globalOptions, formatOption],
        },
      ],
      options: [help("new"), ...newContentOptions],
    },
    {
      name: ["server", "serve"],
      description: "Start the embedded web server",
      subcommands: [
        {
          name: "trust",
          description: "Install the local CA in the system trust store",
          options: [
            help("trust"),
            ...globalOptions,
            {
              name: "--uninstall",
              description: "Uninstall the local CA (but do not delete it)",
            },
          ],
        },
      ],
      options: [
        help("server"),
        ...buildConfigOptions,
        ...buildOptions,
        ...globalOptions,
        {
          name: "--appendPort",
          description: "Append port to baseURL (default true)",
          requiresSeparator: true,
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--bind",
          description:
            "Interface to which the server will bind (default '127.0.0.1')",
          args: {
            name: "ip address",
            default: "127.0.0.1",
          },
        },
        {
          name: "--disableBrowserError",
          description: "Do not show build errors in the browser",
        },
        {
          name: "--disableFastRender",
          description: "Enables full re-renders on changes",
        },
        {
          name: "--disableLiveReload",
          description: "Watch without enabling live browser reload on rebuild",
        },
        {
          name: "--liveReloadPort",
          description:
            "Port for live reloading (i.e. 443 in HTTPS proxy situations) (default -1)",
          args: {
            name: "port",
          },
        },
        {
          name: ["-N", "--navigateToChanged"],
          description:
            "Navigate to changed content file on live browser reload",
        },
        {
          name: "--noHTTPCache",
          description:
            "Disable browser caching of pages served by the embedded web server",
        },
        {
          name: ["-O", "--openBrowser"],
          description: "Open the project in a browser after server startup",
        },
        {
          name: ["-p", "--port"],
          description: "Port on which the server will listen (default 1313)",
          args: {
            name: "port",
            default: "1313",
          },
        },
        {
          name: "--pprof",
          description: "Enable the pprof server (port 8080)",
        },
        {
          name: "--renderStaticToDisk",
          description:
            "Serve static files from disk and dynamic files from memory",
        },
        {
          name: "--tlsAuto",
          description: "Generate and use locally-trusted certificates",
        },
        {
          name: "--tlsCertFile",
          description: "Path to TLS certificate file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--tlsKeyFile",
          description: "Path to TLS key file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["-w", "--watch"],
          description:
            "Watch filesystem for changes and recreate as needed (default true)",
          requiresSeparator: true,
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
      ],
    },
    {
      name: "version",
      description: "Display version",
      options: [help("version"), ...globalOptions],
    },
  ],
  options: rootBuildOptions("hugo"),
};

export default completionSpec;
