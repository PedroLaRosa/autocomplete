// MkDocs v1.6.1 (latest PyPI release, 2026-11-19). Source: `mkdocs --help` and `mkdocs <command> --help` of an installed 1.6.1 plus mkdocs/__main__.py (click definitions, hidden options).
const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Show this message and exit",
};

const configFileOption: Fig.Option = {
  name: ["-f", "--config-file"],
  description:
    "Provide a specific MkDocs config. This can be a file name, or '-' to read from stdin",
  args: {
    name: "filename",
    template: "filepaths",
  },
};

// options common to 'mkdocs build' 'mkdocs gh-deploy' and 'mkdocs serve'
const commonOptions: Fig.Option[] = [
  configFileOption,
  {
    name: ["-s", "--strict"],
    description:
      "Enable strict mode. This will cause MkDocs to abort the build on any warnings",
  },
  {
    name: "--no-strict",
    description: "Disable strict mode",
  },
  {
    name: ["-t", "--theme"],
    description: "The theme to use when building your documentation",
    args: {
      name: "theme",
      suggestions: ["mkdocs", "readthedocs"],
    },
  },
  {
    name: "--use-directory-urls",
    description: "Use directory URLs when building pages (the default)",
  },
  {
    name: "--no-directory-urls",
    description: "Don't use directory URLs when building pages",
  },
];

const quietOption: Fig.Option = {
  name: ["-q", "--quiet"],
  description: "Silence warnings",
};

const verboseOption: Fig.Option = {
  name: ["-v", "--verbose"],
  description: "Enable verbose output",
};

const globalOptions: Fig.Option[] = [quietOption, verboseOption];

const cleanOption: Fig.Option = {
  name: ["-c", "--clean"],
  description:
    "Remove old files from the site_dir before building (the default)",
};

const dirtyOption: Fig.Option = {
  name: "--dirty",
  description: "Only rebuild pages that have been modified since last build",
};

const siteDirOption: Fig.Option = {
  name: ["-d", "--site-dir"],
  description: "The directory to output the result of the documentation build",
  args: {
    name: "path",
    template: "folders",
  },
};

const completionSpec: Fig.Spec = {
  name: "mkdocs",
  description: "Project documentation with Markdown",
  subcommands: [
    {
      name: "build",
      description: "Build the MkDocs documentation",
      options: [
        helpOption,
        ...globalOptions,
        ...commonOptions,
        cleanOption,
        dirtyOption,
        siteDirOption,
      ],
    },
    {
      name: "get-deps",
      description:
        "Show required PyPI packages inferred from plugins in mkdocs.yml",
      options: [
        helpOption,
        verboseOption,
        configFileOption,
        {
          name: ["-p", "--projects-file"],
          description:
            "URL or local path of the registry file that declares all known MkDocs-related projects",
          args: {
            name: "projects file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "gh-deploy",
      description: "Deploy your documentation to GitHub Pages",
      options: [
        helpOption,
        ...globalOptions,
        ...commonOptions,
        cleanOption,
        dirtyOption,
        siteDirOption,
        {
          name: ["-m", "--message"],
          description:
            "A commit message to use when committing to the GitHub Pages remote branch. Commit {sha} and MkDocs {version} are available as expansions",
          args: {
            name: "message",
          },
        },
        {
          name: ["-b", "--remote-branch"],
          description:
            "The remote branch to commit to for GitHub Pages. This overrides the value specified in config",
          args: {
            name: "branch name",
          },
        },
        {
          name: ["-r", "--remote-name"],
          description:
            "The remote name to commit to for GitHub Pages. This overrides the value specified in config",
          args: {
            name: "remote name",
          },
        },
        {
          name: "--force",
          description: "Force the push to the repository",
          isDangerous: true,
        },
        {
          name: "--no-history",
          description: "Replace the whole Git history with one new commit",
          isDangerous: true,
        },
        {
          name: "--ignore-version",
          description:
            "Ignore check that build is not being deployed with an older version of MkDocs",
        },
        {
          name: "--shell",
          description: "Use the shell when invoking Git",
        },
      ],
    },
    {
      name: "new",
      description: "Create a new MkDocs project",
      options: [helpOption, ...globalOptions],
      args: {
        name: "project directory",
        template: "folders",
      },
    },
    {
      name: "serve",
      description: "Run the builtin development server",
      options: [
        helpOption,
        ...globalOptions,
        ...commonOptions,
        {
          name: ["-a", "--dev-addr"],
          description:
            "IP address and port to serve documentation locally (default: localhost:8000)",
          args: {
            name: "IP:PORT",
          },
        },
        {
          name: ["-o", "--open"],
          description:
            "Open the website in a Web browser after the initial build finishes",
        },
        {
          name: "--no-livereload",
          description: "Disable the live reloading in the development server",
        },
        {
          name: "--livereload",
          description:
            "Enable the live reloading in the development server (the default)",
          hidden: true,
        },
        {
          name: "--dirtyreload",
          description: "Deprecated alias of --dirty",
          deprecated: true,
          hidden: true,
        },
        {
          name: "--dirty",
          description: "Only re-build files that have changed",
        },
        {
          name: ["-c", "--clean"],
          description:
            "Build the site without any effects of `mkdocs serve` - pure `mkdocs build`, then serve",
        },
        {
          name: "--watch-theme",
          description:
            "Include the theme in list of files to watch for live reloading. Ignored when live reload is not used",
        },
        {
          name: ["-w", "--watch"],
          description:
            "A directory or file to watch for live reloading. Can be supplied multiple times",
          isRepeatable: true,
          args: {
            name: "path",
            template: ["folders", "filepaths"],
          },
        },
      ],
    },
  ],
  options: [
    helpOption,
    {
      name: ["-V", "--version"],
      description: "Show the version and exit",
    },
    ...globalOptions,
    {
      name: "--color",
      description:
        "Force enable color and wrapping for the output (default: auto-detect)",
    },
    {
      name: "--no-color",
      description:
        "Force disable color and wrapping for the output (default: auto-detect)",
    },
  ],
};

export default completionSpec;
