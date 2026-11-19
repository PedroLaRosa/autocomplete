// Pipenv v2026.11.0 (PyPI "latest", 2026-11-09). Source: argparse tree in
// pipenv/cli/options.py and command.py at tag v2026.11.0, docs/cli.md
import { filepaths } from "@tabsmith/autocomplete-generators";
import { packageList } from "./pip";

const packagesArg: Fig.Arg = {
  name: "package",
  isOptional: true,
  isVariadic: true,
  suggestions: packageList,
};

const pypiMirror: Fig.Option = {
  name: "--pypi-mirror",
  description: "Specify a PyPI mirror",
  args: { name: "url" },
};

const python: Fig.Option = {
  name: "--python",
  description: "Specify which version of Python virtualenv should use",
  args: { name: "version" },
};

const verbose: Fig.Option = {
  name: ["-v", "--verbose"],
  description: "Verbose mode",
  exclusiveOn: ["-q", "--quiet"],
};

const quiet: Fig.Option = {
  name: ["-q", "--quiet"],
  description: "Quiet mode",
  exclusiveOn: ["-v", "--verbose"],
};

const clear: Fig.Option = {
  name: "--clear",
  description: "Clears caches (pipenv, pip)",
};

const system: Fig.Option = {
  name: "--system",
  description: "System pip management",
};

const bare: Fig.Option = { name: "--bare", description: "Minimal output" };

const dryRun = (description: string): Fig.Option => ({
  name: "--dry-run",
  description,
});

const dev = (description: string): Fig.Option => ({
  name: ["-d", "--dev"],
  description,
});

const devOnly: Fig.Option = {
  name: "--dev-only",
  description: "Emit development dependencies only (overrides --dev)",
};

const categories: Fig.Option = {
  name: "--categories",
  description: "Space/comma-separated list of dependency categories",
  args: { name: "categories" },
};

const extras: Fig.Option = {
  name: "--extras",
  description: "Install optional extra categories alongside default packages",
  args: { name: "extras" },
};

const editable: Fig.Option = {
  name: ["-e", "--editable"],
  description: "An editable Python package URL or path",
  isRepeatable: true,
  args: { name: "path", template: "folders" },
};

const skipLock: Fig.Option = {
  name: "--skip-lock",
  description: "Install from Pipfile bypassing lock mechanisms",
};

const lockOnly: Fig.Option = {
  name: "--lock-only",
  description: "Only update lock file (specifiers not added to Pipfile)",
};

const sitePackages: Fig.Option[] = [
  {
    name: "--site-packages",
    description: "Enable site-packages for the virtualenv",
    exclusiveOn: ["--no-site-packages"],
  },
  {
    name: "--no-site-packages",
    description: "Disable site-packages for the virtualenv",
    exclusiveOn: ["--site-packages"],
  },
];

// Mirrors upstream's option composers (_add_common_options and friends)
const commonOptions: Fig.Option[] = [pypiMirror, verbose, quiet, clear, python];

const installBaseOptions: Fig.Option[] = [
  ...commonOptions,
  { name: "--pre", description: "Allow pre-releases" },
  {
    name: "--extra-pip-args",
    description: "Additional arguments passed directly to pip",
    args: { name: "args" },
  },
  {
    name: "--resolver",
    description:
      "Select the resolver backend (overrides PIPENV_RESOLVER and the Pipfile setting)",
    args: { name: "name", suggestions: ["pip"] },
  },
];

const syncOptions: Fig.Option[] = [
  ...installBaseOptions,
  dev("Install both develop and default packages"),
  categories,
  extras,
  {
    name: "--all",
    description: "Install packages from all categories defined in the Pipfile",
  },
];

const installOptions: Fig.Option[] = [
  ...syncOptions,
  {
    name: "--config-settings",
    description:
      "Pass a build-backend configuration setting to pip for this package",
    isRepeatable: true,
    args: { name: "KEY=VALUE" },
  },
  {
    name: ["-i", "--index"],
    description:
      "Specify target package index by url or index name from Pipfile",
    args: { name: "URL" },
  },
  {
    name: ["-r", "--requirements"],
    description: "Import a requirements.txt file",
    args: {
      name: "file",
      generators: filepaths({ extensions: ["txt", "yml", "yaml"] }),
    },
  },
  {
    name: "--ignore-pipfile",
    description: "Ignore Pipfile when installing, using the Pipfile.lock",
  },
  editable,
  skipLock,
];

const ignoreVuln: Fig.Option = {
  name: ["-i", "--ignore"],
  description: "Ignore specified vulnerability",
  isRepeatable: true,
  args: { name: "vulnerability ID" },
};

const completionSpec: Fig.Spec = {
  name: "pipenv",
  description: "Python Development Workflow for Humans",
  subcommands: [
    {
      name: "install",
      description: "Install provided packages and add them to Pipfile",
      args: packagesArg,
      options: [
        system,
        {
          name: "--deploy",
          description:
            "Abort if the Pipfile.lock is out-of-date, or Python version is wrong",
        },
        ...sitePackages,
        ...installOptions,
      ],
    },
    {
      name: "init",
      description:
        "Create a Pipfile for a new project, prompting for its settings",
      options: [
        {
          name: ["-y", "--yes"],
          description: "Accept all defaults without prompting",
        },
        {
          name: "--install",
          description:
            "Create the virtualenv and lock after writing the Pipfile",
          exclusiveOn: ["--no-install"],
        },
        {
          name: "--no-install",
          description: "Don't create the virtualenv or lock",
          exclusiveOn: ["--install"],
        },
        ...commonOptions,
      ],
    },
    {
      name: "remove",
      description: "Remove the virtualenv for the current project",
    },
    {
      name: "upgrade",
      description: "Resolve provided packages and add them to Pipfile",
      args: packagesArg,
      options: [system, ...sitePackages, ...installOptions, lockOnly],
    },
    {
      name: "uninstall",
      description: "Uninstall a provided package and remove it from Pipfile",
      args: packagesArg,
      options: [
        {
          name: "--all-dev",
          description: "Uninstall all packages from [dev-packages]",
        },
        {
          name: "--all",
          description:
            "Purge all packages from virtualenv. Does not edit Pipfile",
        },
        ...installBaseOptions,
        categories,
        extras,
        dev("Uninstall packages from dev-packages"),
        editable,
        skipLock,
      ],
    },
    {
      name: "lock",
      description: "Generate Pipfile.lock",
      options: [
        ...installBaseOptions,
        dev("Generate both develop and default requirements"),
        devOnly,
        categories,
        {
          name: "--backend",
          description: "Resolver backend to use",
          args: { name: "name", suggestions: ["pip", "pure-python", "uv"] },
        },
      ],
    },
    {
      name: "shell",
      description: "Spawn a shell within the virtualenv",
      args: { name: "shell args", isOptional: true, isVariadic: true },
      options: [
        { name: "--fancy", description: "Run shell in fancy mode" },
        {
          name: "--anyway",
          description:
            "Always spawn a sub-shell, even if one is already spawned",
        },
        { name: ["-q", "--quiet"], description: "Quiet standard output" },
        pypiMirror,
        python,
      ],
    },
    {
      name: "activate",
      description: "Output the activation command for the virtualenv",
      options: [pypiMirror, python],
    },
    {
      name: "run",
      description: "Spawn a command installed into the virtualenv",
      // Upstream keeps -v/--python off run so they pass through to the command
      args: { name: "command", isCommand: true },
      options: [system],
    },
    {
      name: "check",
      description: "Check for PyUp Safety security vulnerabilities",
      deprecated: { description: "Use pipenv audit" },
      options: [
        {
          name: "--db",
          description: "Path or URL to a PyUp Safety vulnerabilities database",
          args: { name: "path or URL" },
        },
        ignoreVuln,
        {
          name: "--output",
          description: "Output format",
          args: {
            name: "format",
            suggestions: [
              "default",
              "json",
              "full-report",
              "bare",
              "screen",
              "text",
              "minimal",
            ],
          },
        },
        {
          name: "--key",
          description: "Safety API key from PyUp.io",
          args: { name: "API key" },
        },
        {
          name: "--policy-file",
          description: "Safety policy file",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--exit-code",
          description: "Exit non-zero when vulnerabilities are found (default)",
          exclusiveOn: ["--continue-on-error"],
        },
        {
          name: "--continue-on-error",
          description: "Exit zero even when vulnerabilities are found",
          exclusiveOn: ["--exit-code"],
        },
        {
          name: "--audit-and-monitor",
          description: "Send results to Safety audit and monitor (default)",
          exclusiveOn: ["--disable-audit-and-monitor"],
        },
        {
          name: "--disable-audit-and-monitor",
          description: "Don't send results to Safety audit and monitor",
          exclusiveOn: ["--audit-and-monitor"],
        },
        {
          name: "--project",
          description: "Safety project to associate results with",
          args: { name: "project" },
        },
        {
          name: "--save-json",
          description: "Save the JSON report to a file",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--use-installed",
          description: "Use installed packages instead of the lockfile",
        },
        {
          name: "--categories",
          description: "Check packages in specified categories",
          args: { name: "categories" },
        },
        {
          name: "--auto-install",
          description: "Automatically install safety if not already installed",
        },
        {
          name: "--scan",
          description:
            "Use Safety's scan command instead of the legacy check (removed in v2027.0.0)",
        },
        ...commonOptions,
        system,
      ],
    },
    {
      name: "audit",
      description:
        "Audit packages for security vulnerabilities using pip-audit",
      options: [
        {
          name: ["-f", "--output"],
          description: "Output format",
          args: {
            name: "format",
            suggestions: [
              "columns",
              "json",
              "cyclonedx-json",
              "cyclonedx-xml",
              "markdown",
            ],
          },
        },
        {
          name: ["-s", "--vulnerability-service"],
          description: "Vulnerability service to query",
          args: { name: "service", suggestions: ["pypi", "osv"] },
        },
        ignoreVuln,
        {
          name: "--fix",
          description: "Upgrade dependencies with known vulnerabilities",
        },
        dryRun("Report what --fix would do without changing anything"),
        {
          name: "--strict",
          description: "Fail the audit if any dependency cannot be collected",
        },
        {
          name: "--skip-editable",
          description: "Don't audit packages installed as editable",
        },
        { name: "--no-deps", description: "Don't resolve dependencies" },
        {
          name: "--local",
          description: "Only audit packages in the local environment",
        },
        {
          name: "--desc",
          description: "Include a description for each vulnerability",
        },
        {
          name: "--aliases",
          description: "Include alias IDs for each vulnerability",
        },
        {
          name: ["-o", "--output-file"],
          description: "Write the results to a file",
          args: { name: "path", template: "filepaths" },
        },
        { name: "--locked", description: "Audit Pipfile.lock" },
        ...commonOptions,
        system,
      ],
    },
    {
      name: "update",
      description: "Run lock, then sync",
      args: packagesArg,
      options: [
        bare,
        { name: "--outdated", description: "List out-of-date dependencies" },
        dryRun("List packages that would be updated without updating"),
        system,
        ...installOptions,
        lockOnly,
      ],
    },
    {
      name: "graph",
      description: "Display currently-installed dependency graph information",
      options: [
        bare,
        { name: "--json", description: "Output JSON" },
        { name: "--json-tree", description: "Output JSON in nested tree" },
        { name: "--reverse", description: "Reversed dependency graph" },
      ],
    },
    {
      name: "open",
      description: "View a given module in your editor",
      args: { name: "module" },
      options: commonOptions,
    },
    {
      name: "sync",
      description: "Install all packages specified in Pipfile.lock",
      options: [
        system,
        bare,
        {
          name: "--clean",
          description: "Also uninstall packages not specified in Pipfile.lock",
        },
        ...syncOptions,
        ...sitePackages,
      ],
    },
    {
      name: "clean",
      description: "Uninstall all packages not specified in Pipfile.lock",
      options: [bare, dryRun("Just output unneeded packages"), verbose, python],
    },
    {
      name: "scripts",
      description: "List scripts in current environment config",
      options: commonOptions,
    },
    {
      name: "verify",
      description: "Verify the hash in Pipfile.lock is up-to-date",
    },
    {
      name: "requirements",
      description: "Generate a requirements.txt from Pipfile.lock",
      options: [
        { name: "--dev", description: "Include development packages" },
        devOnly,
        { name: "--hash", description: "Include package hashes" },
        {
          name: "--exclude-markers",
          description: "Exclude PEP 508 markers",
        },
        {
          name: "--exclude-index",
          description: "Exclude index URLs from the output",
        },
        {
          name: "--categories",
          description: "Include packages from specified categories",
          args: { name: "categories" },
        },
        {
          name: "--from-pipfile",
          description: "Only include packages listed in the Pipfile",
        },
        {
          name: "--no-lock",
          description: "Generate from the Pipfile without Pipfile.lock",
        },
        pypiMirror,
      ],
    },
    {
      name: "pylock",
      description: "Manage PEP 751 pylock.toml files",
      options: [
        {
          name: "--generate",
          description: "Generate pylock.toml from Pipfile.lock",
        },
        {
          name: "--from-pyproject",
          description: "Generate a pylock.toml skeleton from pyproject.toml",
        },
        { name: "--validate", description: "Validate the pylock.toml file" },
        {
          name: ["-o", "--output"],
          description: "Output path for pylock.toml",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--dev-groups",
          description: "Comma-separated dependency groups (default: dev)",
          args: { name: "groups" },
        },
        ...commonOptions,
      ],
    },
  ],
  options: [
    { name: "--where", description: "Output project home information" },
    { name: "--venv", description: "Output virtualenv information" },
    { name: "--py", description: "Output Python interpreter information" },
    { name: "--envs", description: "Output environment variable options" },
    {
      name: "--rm",
      description: "Remove the virtualenv",
      deprecated: { description: "Use pipenv remove" },
    },
    bare,
    { name: "--man", description: "Display manpage" },
    {
      name: "--support",
      description: "Output diagnostic information for use in GitHub issues",
    },
    ...commonOptions,
    ...sitePackages,
    { name: "--version", description: "Show the version and exit" },
    { name: ["-h", "--help"], description: "Show this message and exit" },
  ],
};

export default completionSpec;
