// Yarn v4.18.1 (berry, npm @yarnpkg/cli latest = git tag @yarnpkg/cli/4.18.1, 2026-09-24)
// and v1.22.22 (classic, newest tag of yarnpkg/yarn). Re-verified 2026-11-20 against both
// by reading the sources statically (nothing was executed): berry command classes
// (packages/plugin-*/sources/commands: `static paths` + `Option.*`) at the 4.18.1 tag, and
// classic src/cli/index.js + src/cli/commands/*.js at v1.22.22. Every berry command path,
// flag, arg shape and enum was diffed programmatically against this spec; the classic
// per-command flags and subcommands were compared by hand. Still-accepted Yarn 1 aliases
// (cache/licenses ls, owner/tag/team ls and rm, install -g/-S/...) are marked deprecated.
import { npmScriptsGenerator, npmSearchGenerator } from "./npm";

export const yarnScriptParserDirectives: Fig.Arg["parserDirectives"] = {
  alias: async (token, executeShellCommand) => {
    const npmPrefix = await executeShellCommand({
      command: "npm",
      // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
      args: ["prefix"],
    });
    if (npmPrefix.status !== 0) {
      throw new Error("npm prefix command failed");
    }
    const packageJson = await executeShellCommand({
      command: "cat",
      // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
      args: [`${npmPrefix.stdout.trim()}/package.json`],
    });
    const script: string = JSON.parse(packageJson.stdout).scripts?.[token];
    if (!script) {
      throw new Error(`Script not found: '${token}'`);
    }
    return script;
  },
};

export const nodeClis = new Set([
  "vue",
  "vite",
  "nuxt",
  "react-native",
  "degit",
  "expo",
  "jest",
  "next",
  "electron",
  "prisma",
  "eslint",
  "prettier",
  "tsc",
  "typeorm",
  "babel",
  "remotion",
  "autocomplete-tools",
  "redwood",
  "rw",
  "create-completion-spec",
  "publish-spec-to-team",
  "capacitor",
  "cap",
]);

// generate global package list from global package.json file
const getGlobalPackagesGenerator: Fig.Generator = {
  custom: async (tokens, executeCommand, generatorContext) => {
    const { stdout: yarnGlobalDir } = await executeCommand({
      command: "yarn",
      args: ["global", "dir"],
    });

    const { stdout } = await executeCommand({
      command: "cat",
      // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
      args: [`${yarnGlobalDir.trim()}/package.json`],
    });

    if (stdout.trim() == "") return [];

    try {
      const packageContent = JSON.parse(stdout);
      const dependencyScripts = packageContent["dependencies"] || {};
      const devDependencyScripts = packageContent["devDependencies"] || {};
      const dependencies = [
        ...Object.keys(dependencyScripts),
        ...Object.keys(devDependencyScripts),
      ];

      const filteredDependencies = dependencies.filter(
        (dependency) => !tokens.includes(dependency)
      );

      return filteredDependencies.map((dependencyName) => ({
        name: dependencyName,
        icon: "📦",
      }));
    } catch (e) {}

    return [];
  },
};

// generate package list of direct and indirect dependencies
const allDependenciesGenerator: Fig.Generator = {
  script: ["yarn", "list", "--depth=0", "--json"],
  postProcess: (out) => {
    if (out.trim() == "") return [];

    try {
      const packageContent = JSON.parse(out);
      const dependencies = packageContent.data.trees;
      return dependencies.map((dependency: { name: string }) => ({
        name: dependency.name.split("@")[0],
        icon: "📦",
      }));
    } catch (e) {}
    return [];
  },
};

const configList: Fig.Generator = {
  script: ["yarn", "config", "list"],
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }

    try {
      const startIndex = out.indexOf("{");
      const endIndex = out.indexOf("}");
      let output = out.substring(startIndex, endIndex + 1);
      // TODO: fix hacky code
      // reason: JSON parse was not working without double quotes
      output = output
        .replace(/\'/gi, '"')
        .replace("lastUpdateCheck", '"lastUpdateCheck"')
        .replace("registry", '"lastUpdateCheck"');
      const configObject = JSON.parse(output);
      if (configObject) {
        return Object.keys(configObject).map((key) => ({ name: key }));
      }
    } catch (e) {}

    return [];
  },
};

export const dependenciesGenerator: Fig.Generator = {
  script: [
    "bash",
    "-c",
    "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json",
  ],
  postProcess: function (out, context = []) {
    if (out.trim() === "") {
      return [];
    }

    try {
      const packageContent = JSON.parse(out);
      const dependencies = packageContent["dependencies"] ?? {};
      const devDependencies = packageContent["devDependencies"];
      const optionalDependencies = packageContent["optionalDependencies"] ?? {};
      Object.assign(dependencies, devDependencies, optionalDependencies);

      return Object.keys(dependencies)
        .filter((pkgName) => {
          const isListed = context.some((current) => current === pkgName);
          return !isListed;
        })
        .map((pkgName) => ({
          name: pkgName,
          icon: "📦",
          description: dependencies[pkgName]
            ? "dependency"
            : optionalDependencies[pkgName]
              ? "optionalDependency"
              : "devDependency",
        }));
    } catch (e) {
      console.error(e);
      return [];
    }
  },
};

const commonOptions: Fig.Option[] = [
  { name: ["-s", "--silent"], description: "Skip Yarn console logs" },
  {
    name: "--no-default-rc",
    description:
      "Prevent Yarn from automatically detecting yarnrc and npmrc files",
  },
  {
    name: "--use-yarnrc",
    description:
      "Specifies a yarnrc file that Yarn should use (.yarnrc only, not .npmrc) (default: )",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--verbose",
    description: "Output verbose messages on internal operations",
  },
  {
    name: "--offline",
    description:
      "Trigger an error if any required dependencies are not available in local cache",
  },
  {
    name: "--prefer-offline",
    description:
      "Use network only if dependencies are not available in local cache",
  },
  {
    name: ["--enable-pnp", "--pnp"],
    description: "Enable the Plug'n'Play installation",
  },
  {
    name: "--json",
    description: "Format Yarn log messages as lines of JSON",
  },
  {
    name: "--ignore-scripts",
    description: "Don't run lifecycle scripts",
  },
  { name: "--har", description: "Save HAR output of network traffic" },
  { name: "--ignore-platform", description: "Ignore platform checks" },
  { name: "--ignore-engines", description: "Ignore engines check" },
  {
    name: "--ignore-optional",
    description: "Ignore optional dependencies",
  },
  {
    name: "--force",
    description:
      "Install and build packages even if they were built before, overwrite lockfile",
  },
  {
    name: "--skip-integrity-check",
    description: "Run install without checking if node_modules is installed",
  },
  {
    name: "--check-files",
    description: "Install will verify file tree of packages for consistency",
  },
  {
    name: "--no-bin-links",
    description: "Don't generate bin links when setting up packages",
  },
  { name: "--flat", description: "Only allow one version of a package" },
  {
    name: ["--prod", "--production"],
    description:
      "Instruct Yarn to ignore NODE_ENV and take its production-or-not status from this flag instead",
  },
  {
    name: "--no-lockfile",
    description: "Don't read or generate a lockfile",
  },
  { name: "--pure-lockfile", description: "Don't generate a lockfile" },
  {
    name: "--frozen-lockfile",
    description: "Don't generate a lockfile and fail if an update is needed",
  },
  {
    name: "--update-checksums",
    description: "Update package checksums from current repository",
  },
  {
    name: "--link-duplicates",
    description: "Create hardlinks to the repeated modules in node_modules",
  },
  {
    name: "--link-folder",
    description: "Specify a custom folder to store global links",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--global-folder",
    description: "Specify a custom folder to store global packages",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--modules-folder",
    description:
      "Rather than installing modules into the node_modules folder relative to the cwd, output them here",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--preferred-cache-folder",
    description: "Specify a custom folder to store the yarn cache if possible",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--cache-folder",
    description:
      "Specify a custom folder that must be used to store the yarn cache",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--mutex",
    description: "Use a mutex to ensure only one yarn instance is executing",
    args: { name: "type[:specifier]" },
  },
  {
    name: "--emoji",
    description: "Enables emoji in output",
    args: {
      default: "true",
      suggestions: ["true", "false"],
    },
  },
  {
    name: "--cwd",
    description: "Working directory to use",
    args: { name: "cwd", template: "folders" },
  },
  {
    name: ["--proxy", "--https-proxy"],
    description: "",
    args: { name: "host" },
  },
  {
    name: "--registry",
    description: "Override configuration registry",
    args: { name: "url" },
  },
  { name: "--no-progress", description: "Disable progress bar" },
  {
    name: "--network-concurrency",
    description: "Maximum number of concurrent network requests",
    args: { name: "number" },
  },
  {
    name: "--network-timeout",
    description: "TCP timeout for network requests",
    args: { name: "milliseconds" },
  },
  {
    name: "--non-interactive",
    description: "Do not show interactive prompts",
  },
  {
    name: "--scripts-prepend-node-path",
    description: "Prepend the node executable dir to the PATH in scripts",
  },
  {
    name: "--no-node-version-check",
    description:
      "Do not warn when using a potentially unsupported Node version",
  },
  {
    name: "--focus",
    description:
      "Focus on a single workspace by installing remote copies of its sibling workspaces",
  },
  {
    name: "--otp",
    description: "One-time password for two factor authentication",
    args: { name: "otpcode" },
  },
];

// Yarn 2+ (berry) options shared by several commands
const jsonOption: Fig.Option = {
  name: "--json",
  description: "Format the output as an NDJSON stream",
};

const modeOption: Fig.Option = {
  name: "--mode",
  description: "Change what artifacts installs generate",
  args: { name: "mode", suggestions: ["skip-build", "update-lockfile"] },
};

const otpOption: Fig.Option = {
  name: "--otp",
  description: "The OTP token to use with the command",
  args: { name: "otp" },
};

const rangeOptions: Fig.Option[] = [
  {
    name: ["-F", "--fixed"],
    description: "Store dependency tags as-is instead of resolving them",
  },
  {
    name: ["-C", "--caret"],
    description: "Use the ^ semver modifier on the resolved range",
  },
  {
    name: ["-i", "--interactive"],
    description:
      "Offer various choices, depending on the detected upgrade paths",
  },
  {
    name: "--no-time-gate",
    description: "Disable the minimum release age check for this command",
  },
  modeOption,
];

// Yarn 1 `upgrade-interactive` flags (also used by `global upgrade-interactive`)
const upgradeInteractiveOptions: Fig.Option[] = [
  {
    name: ["-S", "--scope"],
    description: "Upgrade packages under the specified scope",
    args: { name: "scope" },
  },
  {
    name: "--latest",
    description:
      "List the latest version of packages, ignoring version ranges in package.json",
  },
  {
    name: ["-E", "--exact"],
    description: "Install exact version. Only used when --latest is specified",
    dependsOn: ["--latest"],
  },
  {
    name: ["-T", "--tilde"],
    description:
      "Install most recent release with the same minor version. Only used when --latest is specified",
    dependsOn: ["--latest"],
  },
  {
    name: ["-C", "--caret"],
    description:
      "Install most recent release with the same major version. Only used when --latest is specified",
    dependsOn: ["--latest"],
  },
];

const pluginSourcesOptions: Fig.Option[] = [
  {
    name: "--path",
    description: "The path where the repository should be cloned to",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--repository",
    description: "The repository that should be cloned",
    args: { name: "url", default: "https://github.com/yarnpkg/berry.git" },
  },
  {
    name: "--branch",
    description: "The branch of the repository that should be cloned",
    args: { name: "branch", default: "master" },
  },
  {
    name: "--no-minify",
    description:
      "Build for development (debugging) - non-minified and non-mangled",
  },
  {
    name: ["-f", "--force"],
    description:
      "Always clone the repository instead of trying to fetch the latest commits",
  },
];

export const createCLIsGenerator: Fig.Generator = {
  script: function (context) {
    if (context[context.length - 1] === "") return undefined;
    const searchTerm = "create-" + context[context.length - 1];
    return [
      "curl",
      "-s",
      "-H",
      "Accept: application/json",
      `https://api.npms.io/v2/search?q=${searchTerm}&size=20`,
    ];
  },
  cache: {
    ttl: 100 * 24 * 60 * 60 * 3, // 3 days
  },
  postProcess: function (out) {
    try {
      return JSON.parse(out).results.map(
        (item: { package: { name: string; description: string } }) =>
          ({
            name: item.package.name.substring(7),
            description: item.package.description,
          }) as Fig.Suggestion
      ) as Fig.Suggestion[];
    } catch (e) {
      return [];
    }
  },
};

const completionSpec: Fig.Spec = {
  name: "yarn",
  description: "Manage packages and run scripts",
  generateSpec: async (tokens, executeShellCommand) => {
    const binaries = (
      await executeShellCommand({
        command: "bash",
        args: [
          "-c",
          `until [[ -d node_modules/ ]] || [[ $PWD = '/' ]]; do cd ..; done; ls -1 node_modules/.bin/`,
        ],
      })
    ).stdout.split("\n");

    const subcommands = binaries
      .filter((name) => nodeClis.has(name))
      .map((name) => ({
        name: name,
        loadSpec: name === "rw" ? "redwood" : name,
        icon: "fig://icon?type=package",
      }));

    return {
      name: "yarn",
      subcommands,
    } as Fig.Spec;
  },
  args: {
    generators: npmScriptsGenerator,
    filterStrategy: "fuzzy",
    parserDirectives: yarnScriptParserDirectives,
    isOptional: true,
    isCommand: true,
  },
  options: [
    {
      name: "--disable-pnp",
      description: "Disable the Plug'n'Play installation",
    },
    {
      name: "--emoji",
      description: "Enable emoji in output (default: true)",
      args: {
        name: "bool",
        suggestions: [{ name: "true" }, { name: "false" }],
      },
    },
    {
      name: ["--enable-pnp", "--pnp"],
      description: "Enable the Plug'n'Play installation",
    },
    {
      name: "--flat",
      description: "Only allow one version of a package",
    },
    {
      name: "--focus",
      description:
        "Focus on a single workspace by installing remote copies of its sibling workspaces",
    },
    {
      name: "--force",
      description:
        "Install and build packages even if they were built before, overwrite lockfile",
    },
    {
      name: "--frozen-lockfile",
      description: "Don't generate a lockfile and fail if an update is needed",
    },
    {
      name: "--global-folder",
      description: "Specify a custom folder to store global packages",
      args: {
        template: "folders",
      },
    },
    {
      name: "--har",
      description: "Save HAR output of network traffic",
    },
    {
      name: "--https-proxy",
      description: "",
      args: {
        name: "path",
        suggestions: [{ name: "https://" }],
      },
    },
    {
      name: "--ignore-engines",
      description: "Ignore engines check",
    },
    {
      name: "--ignore-optional",
      description: "Ignore optional dependencies",
    },
    {
      name: "--ignore-platform",
      description: "Ignore platform checks",
    },
    {
      name: "--ignore-scripts",
      description: "Don't run lifecycle scripts",
    },
    {
      name: "--json",
      description:
        "Format Yarn log messages as lines of JSON (see jsonlines.org)",
    },
    {
      name: "--link-duplicates",
      description: "Create hardlinks to the repeated modules in node_modules",
    },
    {
      name: "--link-folder",
      description: "Specify a custom folder to store global links",
      args: {
        template: "folders",
      },
    },
    {
      name: "--modules-folder",
      description:
        "Rather than installing modules into the node_modules folder relative to the cwd, output them here",
      args: {
        template: "folders",
      },
    },
    {
      name: "--mutex",
      description: "Use a mutex to ensure only one yarn instance is executing",
      args: [
        {
          name: "type",
          suggestions: [{ name: ":" }],
        },
        {
          name: "specifier",
          suggestions: [{ name: ":" }],
        },
      ],
    },
    {
      name: "--network-concurrency",
      description: "Maximum number of concurrent network requests",
      args: {
        name: "number",
      },
    },
    {
      name: "--network-timeout",
      description: "TCP timeout for network requests",
      args: {
        name: "milliseconds",
      },
    },
    {
      name: "--no-bin-links",
      description: "Don't generate bin links when setting up packages",
    },
    {
      name: "--no-default-rc",
      description:
        "Prevent Yarn from automatically detecting yarnrc and npmrc files",
    },
    {
      name: "--no-lockfile",
      description: "Don't read or generate a lockfile",
    },
    {
      name: "--non-interactive",
      description: "Do not show interactive prompts",
    },
    {
      name: "--no-node-version-check",
      description:
        "Do not warn when using a potentially unsupported Node version",
    },
    {
      name: "--no-progress",
      description: "Disable progress bar",
    },
    {
      name: "--offline",
      description:
        "Trigger an error if any required dependencies are not available in local cache",
    },
    {
      name: "--otp",
      description: "One-time password for two factor authentication",
      args: {
        name: "otpcode",
      },
    },
    {
      name: "--prefer-offline",
      description:
        "Use network only if dependencies are not available in local cache",
    },
    {
      name: "--preferred-cache-folder",
      description:
        "Specify a custom folder to store the yarn cache if possible",
      args: {
        template: "folders",
      },
    },
    {
      name: ["--prod", "--production"],
      description: "",
      args: {},
    },
    {
      name: "--proxy",
      description: "",
      args: {
        name: "host",
      },
    },
    {
      name: "--pure-lockfile",
      description: "Don't generate a lockfile",
    },
    {
      name: "--registry",
      description: "Override configuration registry",
      args: {
        name: "url",
      },
    },
    {
      name: ["-s", "--silent"],
      description:
        "Skip Yarn console logs, other types of logs (script output) will be printed",
    },
    {
      name: "--scripts-prepend-node-path",
      description: "Prepend the node executable dir to the PATH in scripts",
      args: {
        suggestions: [{ name: "true" }, { name: "false" }],
      },
    },
    {
      name: "--skip-integrity-check",
      description: "Run install without checking if node_modules is installed",
    },
    {
      name: "--strict-semver",
      description: "",
    },
    ...commonOptions,
    {
      name: ["-v", "--version"],
      description: "Output the version number",
    },
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
  ],
  subcommands: [
    {
      name: "access",
      description: "Set or view package access (not implemented in Yarn 1)",
      args: [
        {
          name: "subcommand",
          suggestions: [
            "public",
            "restricted",
            "grant",
            "revoke",
            "ls-packages",
            "ls-collaborators",
            "edit",
          ],
        },
        { name: "args", isVariadic: true, isOptional: true },
      ],
    },
    {
      name: "add",
      description: "Installs a package and any packages that it depends on",
      args: {
        name: "package",
        generators: npmSearchGenerator,
        debounce: true,
        isVariadic: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["-W", "--ignore-workspace-root-check"],
          description: "Required to run yarn add inside a workspace root",
        },
        {
          name: ["-D", "--dev"],
          description: "Save package to your `devDependencies`",
        },
        {
          name: ["-P", "--peer"],
          description: "Save package to your `peerDependencies`",
        },
        {
          name: ["-O", "--optional"],
          description: "Save package to your `optionalDependencies`",
        },
        {
          name: ["-E", "--exact"],
          description: "Install exact version",
        },
        {
          name: ["-T", "--tilde"],
          description:
            "Install most recent release with the same minor version",
        },
        {
          name: ["-A", "--audit"],
          description: "Run vulnerability audit on installed packages",
        },
        ...rangeOptions.map((option) =>
          Array.isArray(option.name) && option.name.includes("--interactive")
            ? {
                ...option,
                description:
                  "Reuse the specified package from other workspaces in the project",
              }
            : option
        ),
        {
          name: "--prefer-dev",
          description: "Add / upgrade a package to a dev dependency",
        },
        {
          name: "--cached",
          description:
            "Reuse the highest version already used somewhere within the project",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "audit",
      description:
        "Perform a vulnerability audit against the installed packages",
      options: [
        {
          name: "--summary",
          description: "Only print the summary",
        },
        {
          name: "--groups",
          description:
            "Only audit dependencies from listed groups. Default: devDependencies, dependencies, optionalDependencies",
          args: {
            name: "group_name",
            isVariadic: true,
          },
        },
        {
          name: "--level",
          description:
            "Only print advisories with severity greater than or equal to one of the following: info|low|moderate|high|critical. Default: info",
          args: {
            name: "severity",
            suggestions: [
              { name: "info" },
              { name: "low" },
              { name: "moderate" },
              { name: "high" },
              { name: "critical" },
            ],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "autoclean",
      description:
        "Cleans and removes unnecessary files from package dependencies",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
        {
          name: ["-I", "--init"],
          description:
            "Creates the .yarnclean file if it does not exist, and adds the default entries",
        },
        {
          name: ["-F", "--force"],
          description: "If a .yarnclean file exists, run the clean process",
        },
      ],
    },
    {
      name: "bin",
      description: "Displays the location of the yarn bin folder",
      args: { name: "name", isOptional: true },
      options: [
        {
          name: ["-v", "--verbose"],
          description:
            "Print both the binary name and the locator of the package that provides the binary",
        },
        jsonOption,
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "cache",
      description: "Yarn cache list will print out every cached package",
      options: [
        ...commonOptions,
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
      subcommands: [
        {
          name: ["clean", "clear"],
          description: "Clear global cache",
          args: {
            name: "module",
            description: "Only clear these packages from the cache (Yarn 1)",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            {
              name: "--mirror",
              description:
                "Remove the global cache files instead of the local cache files",
            },
            {
              name: "--all",
              description:
                "Remove both the global cache files and the local cache files of the current project",
            },
          ],
        },
        {
          name: "dir",
          description: "Print yarn’s global cache path",
        },
        {
          name: "list",
          description: "Print out every cached package",
          options: [
            {
              name: "--pattern",
              description: "Filter cached packages by pattern",
              args: {
                name: "pattern",
              },
            },
          ],
        },
        {
          name: "ls",
          description: "Print out every cached package (use list instead)",
          deprecated: true,
        },
      ],
    },
    {
      name: "check",
      description:
        "Verifies if versions in the current project's package.json match that of yarn's lock file",
      options: [
        ...commonOptions,
        {
          name: "--integrity",
          description:
            "Verify that versions and hashed values of the package.json match the lock file",
        },
        {
          name: "--verify-tree",
          description:
            "Verify that the package.json dependencies match node_modules",
        },
      ],
    },
    {
      name: "config",
      description: "Configure yarn",
      options: [
        {
          name: "--no-defaults",
          description: "Omit the default values from the display",
        },
        jsonOption,
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
      subcommands: [
        {
          name: "set",
          description: "Sets the config key to a certain value",
          options: [
            {
              name: ["-g", "--global"],
              description: "Set global config",
            },
            {
              name: ["-H", "--home"],
              description:
                "Update the home configuration instead of the project configuration",
            },
            {
              name: "--json",
              description: "Set complex configuration settings to JSON values",
            },
          ],
        },
        {
          name: "get",
          description: "Print the value for a given key",
          args: {
            generators: configList,
          },
          options: [
            {
              name: "--why",
              description:
                "Print the explanation for why a setting has its value",
            },
            jsonOption,
            {
              name: "--no-redacted",
              description:
                "Don't redact secrets (such as tokens) from the output",
            },
          ],
        },
        {
          name: "unset",
          description: "Unset a configuration setting",
          args: {
            generators: configList,
          },
          options: [
            {
              name: ["-H", "--home"],
              description:
                "Update the home configuration instead of the project configuration",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a given key from the config",
          args: {
            generators: configList,
          },
        },
        {
          name: "list",
          description: "Displays the current configuration",
        },
        {
          name: "current",
          description: "Print the resolved configuration as JSON (Yarn 1)",
        },
      ],
    },
    {
      name: "constraints",
      description: "Check that the project constraints are met",
      options: [
        {
          name: "--fix",
          description:
            "Attempt to automatically fix unambiguous issues, following a multi-pass process",
        },
        jsonOption,
      ],
      subcommands: [
        {
          name: "query",
          description: "Query the constraints fact database",
          args: { name: "query" },
          options: [jsonOption],
        },
        {
          name: "source",
          description: "Print the source code for the constraints",
          options: [
            {
              name: ["-v", "--verbose"],
              description:
                "Also print the fact database automatically compiled from the workspace manifests",
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Creates new projects from any create-* starter kits",
      args: {
        name: "cli",
        generators: createCLIsGenerator,
        loadSpec: async (token) => ({
          name: "create-" + token,
          type: "global",
        }),
        isCommand: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["-p", "--package"],
          description: "The package to run the provided command from",
          args: { name: "package" },
        },
        {
          name: ["-q", "--quiet"],
          description:
            "Only report critical errors instead of printing the full install logs",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "dedupe",
      description: "Deduplicate dependencies with overlapping ranges",
      args: {
        name: "pattern",
        generators: dependenciesGenerator,
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: ["-s", "--strategy"],
          description: "The strategy to use when deduping dependencies",
          args: { name: "strategy", suggestions: ["highest"] },
        },
        {
          name: ["-c", "--check"],
          description:
            "Exit with exit code 1 when duplicates are found, without persisting the dependency tree",
        },
        jsonOption,
        modeOption,
      ],
    },
    {
      name: "dlx",
      description: "Run a package in a temporary environment",
      args: {
        name: "command",
        generators: npmSearchGenerator,
        debounce: true,
      },
      options: [
        {
          name: ["-p", "--package"],
          description: "The package(s) to install before running the command",
          isRepeatable: true,
          args: { name: "package" },
        },
        {
          name: ["-q", "--quiet"],
          description:
            "Only report critical errors instead of printing the full install logs",
        },
      ],
    },
    {
      name: "exec",
      description: "Execute a shell script",
      args: { name: "command", isCommand: true },
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "explain",
      description: "Explain an error code",
      args: { name: "code", isOptional: true },
      options: [jsonOption],
      subcommands: [
        {
          name: "peer-requirements",
          description: "Explain a set of peer requirements",
          args: { name: "hash", isOptional: true },
        },
      ],
    },
    {
      name: "generate-lock-entry",
      description: "Generates a lock file entry",
      options: [
        {
          name: "--use-manifest",
          description:
            "Specify which manifest file to use for generating lock entry",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--resolved",
          description: "Generate from <*.tgz>#<hash>",
          args: {
            template: "filepaths",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "global",
      description: "Manage yarn globally",
      subcommands: [
        {
          name: "add",
          description: "Install globally packages on your operating system",
          args: {
            name: "package",
            generators: npmSearchGenerator,
            debounce: true,
            isVariadic: true,
          },
        },
        {
          name: "bin",
          description: "Displays the location of the yarn global bin folder",
        },
        {
          name: "dir",
          description:
            "Displays the location of the global installation folder",
        },
        {
          name: "ls",
          description: "List globally installed packages (deprecated)",
        },
        {
          name: "list",
          description: "List globally installed packages",
        },
        {
          name: "remove",
          description: "Remove globally installed packages",
          args: {
            name: "package",
            filterStrategy: "fuzzy",
            generators: getGlobalPackagesGenerator,
            isVariadic: true,
          },
          options: [
            ...commonOptions,
            {
              name: ["-W", "--ignore-workspace-root-check"],
              description:
                "Required to run yarn remove inside a workspace root",
            },
            {
              name: ["-h", "--help"],
              description: "Output usage information",
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade globally installed packages",
          options: [
            ...commonOptions,
            {
              name: ["-S", "--scope"],
              description: "Upgrade packages under the specified scope",
              args: { name: "scope" },
            },
            {
              name: ["-L", "--latest"],
              description: "List the latest version of packages",
            },
            {
              name: ["-E", "--exact"],
              description:
                "Install exact version. Only used when --latest is specified",
              dependsOn: ["--latest"],
            },
            {
              name: ["-P", "--pattern"],
              description: "Upgrade packages that match pattern",
              args: { name: "pattern" },
            },
            {
              name: ["-T", "--tilde"],
              description:
                "Install most recent release with the same minor version. Only used when --latest is specified",
            },
            {
              name: ["-C", "--caret"],
              description:
                "Install most recent release with the same major version. Only used when --latest is specified",
              dependsOn: ["--latest"],
            },
            {
              name: ["-A", "--audit"],
              description: "Run vulnerability audit on installed packages",
            },
            { name: ["-h", "--help"], description: "Output usage information" },
          ],
        },
        {
          name: "upgrade-interactive",
          description:
            "Display the outdated packages before performing any upgrade",
          options: upgradeInteractiveOptions,
        },
      ],
      options: [
        ...commonOptions,
        {
          name: "--prefix",
          description: "Bin prefix to use to install binaries",
          args: {
            name: "prefix",
          },
        },
        {
          name: "--latest",
          description: "Upgrade to the latest version of packages",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "help",
      description: "Output usage information",
    },
    {
      name: "import",
      description: "Generates yarn.lock from an npm package-lock.json file",
    },
    {
      name: "info",
      description: "Show information about a package",
      args: {
        name: "package",
        generators: dependenciesGenerator,
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: ["-A", "--all"],
          description: "Print versions of a package from the whole project",
        },
        {
          name: ["-R", "--recursive"],
          description:
            "Print information for all packages, including transitive dependencies",
        },
        {
          name: ["-X", "--extra"],
          description: "An array of requests of extra data provided by plugins",
          isRepeatable: true,
          args: { name: "extra" },
        },
        {
          name: "--cache",
          description:
            "Print information about the cache entry of a package (path, size, checksum)",
        },
        {
          name: "--dependents",
          description: "Print all dependents for each matching package",
        },
        {
          name: "--manifest",
          description:
            "Print data obtained by looking at the package archive (license, homepage, ...)",
        },
        {
          name: "--name-only",
          description: "Only print the name for the matching packages",
        },
        {
          name: "--virtuals",
          description: "Print each instance of the virtual packages",
        },
        jsonOption,
      ],
    },
    {
      name: "init",
      description: "Interactively creates or updates a package.json file",
      args: {
        name: "initializer",
        description:
          "Run the given create-* initializer through yarn dlx (Yarn 2+)",
        isOptional: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["-y", "--yes"],
          description: "Use default options",
        },
        {
          name: ["-p", "--private"],
          description: "Use default options and private true",
        },
        {
          name: ["-i", "--install"],
          description: "Install a specific Yarn release",
          args: {
            name: "version",
          },
        },
        {
          name: ["-w", "--workspace"],
          description: "Initialize a workspace root with a packages/ directory",
        },
        {
          name: ["-n", "--name"],
          description: "Initialize a package with the given name",
          args: { name: "name" },
        },
        {
          name: "-2",
          description: "Generates the project using Yarn 2",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "install",
      description: "Install all the dependencies listed within package.json",
      options: [
        ...commonOptions,
        {
          name: ["-A", "--audit"],
          description: "Run vulnerability audit on installed packages",
        },
        {
          name: ["-g", "--global"],
          description: "Deprecated (use yarn global add instead)",
          deprecated: true,
        },
        {
          name: ["-S", "--save"],
          description: "Deprecated (use yarn add instead)",
          deprecated: true,
        },
        {
          name: ["-D", "--save-dev"],
          description: "Deprecated (use yarn add --dev instead)",
          deprecated: true,
        },
        {
          name: ["-P", "--save-peer"],
          description: "Deprecated (use yarn add --peer instead)",
          deprecated: true,
        },
        {
          name: ["-O", "--save-optional"],
          description: "Deprecated (use yarn add --optional instead)",
          deprecated: true,
        },
        {
          name: ["-E", "--save-exact"],
          description: "Deprecated (use yarn add --exact instead)",
          deprecated: true,
        },
        {
          name: ["-T", "--save-tilde"],
          description: "Deprecated (use yarn add --tilde instead)",
          deprecated: true,
        },
        {
          name: "--immutable",
          description:
            "Abort with an error exit code if the lockfile was to be modified",
        },
        {
          name: "--immutable-cache",
          description:
            "Abort with an error exit code if the cache folder was to be modified",
        },
        {
          name: "--refresh-lockfile",
          description: "Refresh the package metadata stored in the lockfile",
        },
        {
          name: "--check-cache",
          description:
            "Always refetch the packages and ensure that their checksums are consistent",
        },
        {
          name: "--check-resolutions",
          description: "Validates that the package resolutions are coherent",
        },
        {
          name: "--inline-builds",
          description:
            "Verbosely print the output of the build steps of dependencies",
        },
        modeOption,
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "licenses",
      description: "",
      subcommands: [
        {
          name: "list",
          description: "List licenses for installed packages",
        },
        {
          name: "ls",
          description:
            "List licenses for installed packages (use list instead)",
          deprecated: true,
        },
        {
          name: "generate-disclaimer",
          description: "List of licenses from all the packages",
        },
      ],
    },
    {
      name: "link",
      description: "Symlink a package folder during development",
      args: {
        isOptional: true,
        name: "package",
        template: "folders",
        isVariadic: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["-A", "--all"],
          description:
            "Link all workspaces belonging to the target projects to the current one",
        },
        {
          name: ["-p", "--private"],
          description:
            "Also link private workspaces belonging to the target projects to the current one",
        },
        {
          name: ["-r", "--relative"],
          description:
            "Link workspaces using relative paths instead of absolute paths",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "list",
      description: "Lists all dependencies for the current working directory",
      options: [
        {
          name: "--depth",
          description: "Restrict the depth of the dependencies",
          args: { name: "depth" },
        },
        {
          name: "--pattern",
          description: "Filter the list of dependencies by the pattern",
          args: { name: "pattern" },
        },
      ],
    },
    {
      name: "login",
      description: "Store registry username and email",
    },
    {
      name: "logout",
      description: "Clear registry username and email",
    },
    {
      name: "node",
      description: "Run node with the hook already setup",
      options: [
        {
          name: "--into",
          description: "Set the cwd to the specified location (Yarn 1)",
          args: { name: "path", template: "folders" },
        },
      ],
    },
    {
      name: "npm",
      description: "Npm-related commands (Yarn 2+)",
      subcommands: [
        {
          name: "audit",
          description:
            "Perform a vulnerability audit against the installed packages",
          options: [
            {
              name: ["-A", "--all"],
              description: "Audit dependencies from all workspaces",
            },
            {
              name: ["-R", "--recursive"],
              description: "Audit transitive dependencies as well",
            },
            {
              name: "--environment",
              description: "Which environments to cover",
              args: {
                name: "environment",
                default: "all",
                suggestions: ["all", "production", "development"],
              },
            },
            jsonOption,
            {
              name: "--no-deprecations",
              description: "Don't warn about deprecated packages",
            },
            {
              name: "--severity",
              description:
                "Minimal severity requested for packages to be displayed",
              args: {
                name: "severity",
                default: "info",
                suggestions: ["info", "low", "moderate", "high", "critical"],
              },
            },
            {
              name: "--exclude",
              description: "Glob pattern of packages to exclude from audit",
              isRepeatable: true,
              args: { name: "glob" },
            },
            {
              name: "--ignore",
              description:
                "Glob pattern of advisory IDs to ignore in the audit report",
              isRepeatable: true,
              args: { name: "glob" },
            },
          ],
        },
        {
          name: "info",
          description: "Show information about a package",
          args: {
            name: "package",
            generators: npmSearchGenerator,
            debounce: true,
            isVariadic: true,
          },
          options: [
            {
              name: ["-f", "--fields"],
              description:
                "A comma-separated list of manifest fields that should be displayed",
              args: { name: "fields" },
            },
            jsonOption,
          ],
        },
        {
          name: "login",
          description: "Store new login info to access the npm registry",
          options: [
            {
              name: ["-s", "--scope"],
              description: "Login to the registry configured for a given scope",
              args: { name: "scope" },
            },
            { name: "--publish", description: "Login to the publish registry" },
            {
              name: "--always-auth",
              description: "Set the npmAlwaysAuth configuration",
            },
            { name: "--web-login", description: "Enable web login" },
          ],
        },
        {
          name: "logout",
          description: "Logout of the npm registry",
          options: [
            {
              name: ["-s", "--scope"],
              description:
                "Logout of the registry configured for a given scope",
              args: { name: "scope" },
            },
            {
              name: "--publish",
              description: "Logout of the publish registry",
            },
            { name: ["-A", "--all"], description: "Logout of all registries" },
          ],
        },
        {
          name: "publish",
          description: "Publish the active workspace to the npm registry",
          options: [
            {
              name: "--access",
              description: "The access for the published package",
              args: { name: "access", suggestions: ["public", "restricted"] },
            },
            {
              name: "--tag",
              description:
                "The tag on the registry that the package should be attached to",
              args: { name: "tag", default: "latest" },
            },
            {
              name: "--tolerate-republish",
              description:
                "Warn and exit when republishing an already existing version of a package",
            },
            otpOption,
            {
              name: "--provenance",
              description:
                "Generate provenance for the package (GitHub Actions and GitLab CI only)",
            },
            {
              name: ["-n", "--dry-run"],
              description:
                "Show what would be published without actually publishing",
            },
            { name: "--json", description: "Output the result in JSON format" },
            {
              name: "--staged",
              description:
                "Stage the package for later approval instead of publishing it immediately",
            },
          ],
        },
        {
          name: "stage",
          description: "Manage staged package versions",
          subcommands: [
            {
              name: "approve",
              description: "Approve a staged package version for publishing",
              args: { name: "stage-id" },
              options: [otpOption],
            },
            {
              name: "list",
              description: "List all staged package versions",
              args: { name: "package", isOptional: true },
              options: [jsonOption],
            },
            {
              name: "reject",
              description: "Reject a staged package version",
              args: { name: "stage-id" },
              options: [otpOption],
            },
          ],
        },
        {
          name: "tag",
          description: "Manage dist-tags of a package",
          subcommands: [
            {
              name: "add",
              description: "Add a tag for a specific version of a package",
              args: [{ name: "package@version" }, { name: "tag" }],
            },
            {
              name: "list",
              description: "List all dist-tags of a package",
              args: { name: "package", isOptional: true },
              options: [jsonOption],
            },
            {
              name: "remove",
              description: "Remove a tag from a package",
              args: [{ name: "package" }, { name: "tag" }],
            },
          ],
        },
        {
          name: "whoami",
          description: "Display the name of the authenticated user",
          options: [
            {
              name: ["-s", "--scope"],
              description:
                "Print username for the registry configured for a given scope",
              args: { name: "scope" },
            },
            {
              name: "--publish",
              description: "Print username for the publish registry",
            },
          ],
        },
      ],
    },
    {
      name: "outdated",
      description: "Checks for outdated package dependencies",
      options: [
        ...commonOptions,
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "owner",
      description: "Manage package owners",
      subcommands: [
        {
          name: "list",
          description: "Lists all of the owners of a package",
          args: {
            name: "package",
          },
        },
        {
          name: "add",
          description: "Adds the user as an owner of the package",
          args: {
            name: "package",
          },
        },
        {
          name: "remove",
          description: "Removes the user as an owner of the package",
          args: [
            {
              name: "user",
            },
            {
              name: "package",
            },
          ],
        },
        {
          name: "ls",
          description:
            "Lists all of the owners of a package (use list instead)",
          deprecated: true,
          args: {
            name: "package",
          },
        },
        {
          name: "rm",
          description:
            "Removes the user as an owner of the package (use remove instead)",
          deprecated: true,
          args: [
            {
              name: "user",
            },
            {
              name: "package",
            },
          ],
        },
      ],
    },
    {
      name: "pack",
      description: "Creates a compressed gzip archive of package dependencies",
      options: [
        {
          name: ["-f", "--filename"],
          description:
            "Creates a compressed gzip archive of package dependencies and names the file filename",
          args: { name: "filename", template: "filepaths" },
        },
        {
          name: "--install-if-needed",
          description:
            "Run a preliminary yarn install if the package contains build scripts",
        },
        {
          name: ["-n", "--dry-run"],
          description:
            "Print the file paths without actually generating the package archive",
        },
        jsonOption,
        {
          name: ["-o", "--out"],
          description: "Create the archive at the specified path",
          args: { name: "path", template: "filepaths" },
        },
      ],
    },
    {
      name: "patch",
      description: "Prepare a package for patching",
      args: {
        name: "package",
        generators: dependenciesGenerator,
        filterStrategy: "fuzzy",
      },
      options: [
        {
          name: ["-u", "--update"],
          description:
            "Reapply local patches that already apply to this packages",
        },
        jsonOption,
      ],
    },
    {
      name: "patch-commit",
      description: "Generate a patch out of a directory",
      args: { name: "patch-folder", template: "folders" },
      options: [
        {
          name: ["-s", "--save"],
          description: "Add the patch to your resolution entries",
        },
      ],
    },
    {
      name: "plugin",
      description: "Manage Yarn plugins (Yarn 2+)",
      subcommands: [
        {
          name: "check",
          description:
            "Find all third-party plugins that differ from their own spec",
          options: [jsonOption],
        },
        {
          name: "import",
          description: "Download a plugin",
          args: { name: "name" },
          options: [
            {
              name: "--no-checksum",
              description: "Don't care if this plugin is modified",
            },
          ],
          subcommands: [
            {
              name: "from",
              description: "Build a plugin from sources",
              subcommands: [
                {
                  name: "sources",
                  description: "Build a plugin from sources",
                  args: { name: "name" },
                  options: pluginSourcesOptions,
                },
              ],
            },
          ],
        },
        {
          name: "list",
          description: "List the available official plugins",
          options: [jsonOption],
        },
        {
          name: "remove",
          description: "Remove a plugin",
          args: { name: "name" },
        },
        {
          name: "runtime",
          description: "List the active plugins",
          options: [jsonOption],
        },
      ],
    },
    {
      name: "policies",
      description: "Defines project-wide policies for your project",
      subcommands: [
        {
          name: "set-version",
          description: "Will download the latest stable release",
          args: {
            name: "version",
            description: "Yarn release, range or tag to download",
            isOptional: true,
            suggestions: [
              "latest",
              "rc",
              "classic",
              "nightly",
              "berry",
              "stable",
              "canary",
            ],
          },
        },
      ],
    },
    {
      name: "publish",
      description: "Publishes a package to the npm registry",
      args: { name: "Tarball or Folder", template: "folders" },
      options: [
        ...commonOptions,
        { name: ["-h", "--help"], description: "Output usage information" },
        {
          name: "--new-version",
          description: "New version",
          args: { name: "version" },
        },
        {
          name: "--major",
          description: "Auto-increment major version number",
        },
        {
          name: "--minor",
          description: "Auto-increment minor version number",
        },
        {
          name: "--patch",
          description: "Auto-increment patch version number",
        },
        {
          name: "--premajor",
          description: "Auto-increment premajor version number",
        },
        {
          name: "--preminor",
          description: "Auto-increment preminor version number",
        },
        {
          name: "--prepatch",
          description: "Auto-increment prepatch version number",
        },
        {
          name: "--prerelease",
          description: "Auto-increment prerelease version number",
        },
        {
          name: "--preid",
          description: "Add a custom identifier to the prerelease",
          args: { name: "preid" },
        },
        {
          name: "--message",
          description: "Message",
          args: { name: "message" },
        },
        { name: "--no-git-tag-version", description: "No git tag version" },
        {
          name: "--no-commit-hooks",
          description: "Bypass git hooks when committing new version",
        },
        { name: "--access", description: "Access", args: { name: "access" } },
        { name: "--tag", description: "Tag", args: { name: "tag" } },
      ],
    },
    {
      name: "rebuild",
      description: "Rebuild the project's native packages",
      args: {
        name: "package",
        generators: dependenciesGenerator,
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "remove",
      description: "Remove installed package",
      args: {
        filterStrategy: "fuzzy",
        generators: dependenciesGenerator,
        isVariadic: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["-A", "--all"],
          description:
            "Apply the operation to all workspaces from the current project",
        },
        modeOption,
        {
          name: ["-W", "--ignore-workspace-root-check"],
          description: "Required to run yarn remove inside a workspace root",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "run",
      description: "Runs a defined package script",
      options: [
        ...commonOptions,
        {
          name: "--inspect",
          description:
            "Forwarded to the underlying Node process when executing a binary",
          requiresSeparator: true,
          args: { name: "address", isOptional: true },
        },
        {
          name: "--inspect-brk",
          description:
            "Forwarded to the underlying Node process when executing a binary",
          requiresSeparator: true,
          args: { name: "address", isOptional: true },
        },
        {
          name: ["-T", "--top-level"],
          description:
            "Check the root workspace for scripts and/or binaries instead of the current one",
        },
        {
          name: ["-B", "--binaries-only"],
          description:
            "Ignore any user defined scripts and only check for binaries",
        },
        {
          name: "--require",
          description:
            "Forwarded to the underlying Node process when executing a binary",
          args: { name: "module" },
        },
        { name: ["-h", "--help"], description: "Output usage information" },
      ],
      args: [
        {
          name: "script",
          description: "Script to run from your package.json",
          generators: npmScriptsGenerator,
          filterStrategy: "fuzzy",
          parserDirectives: yarnScriptParserDirectives,
          isCommand: true,
        },
        {
          name: "env",
          suggestions: ["env"],
          description: "Lists environment variables available to scripts",
          isOptional: true,
        },
      ],
    },
    {
      name: "search",
      description: "Open the search interface",
    },
    {
      name: "stage",
      description: "Add all yarn files to your vcs",
      options: [
        { name: ["-c", "--commit"], description: "Commit the staged files" },
        {
          name: ["-r", "--reset"],
          description: "Remove all files from the staging area",
        },
        {
          name: ["-n", "--dry-run"],
          description:
            "Print the commit message and the list of modified files without staging / committing",
        },
      ],
    },
    {
      name: "tag",
      description: "Add, remove, or list tags on a package",
      subcommands: [
        {
          name: "add",
          description: "Add a tag to a specific version of a package",
          args: [{ name: "package@version" }, { name: "tag" }],
        },
        {
          name: "remove",
          description: "Remove a tag from a package",
          args: [{ name: "package" }, { name: "tag" }],
        },
        {
          name: "list",
          description: "List the tags of a package",
          args: { name: "package", isOptional: true },
        },
        {
          name: "rm",
          description: "Remove a tag from a package (use remove instead)",
          deprecated: true,
          args: [{ name: "package" }, { name: "tag" }],
        },
        {
          name: "ls",
          description: "List the tags of a package (use list instead)",
          deprecated: true,
          args: { name: "package", isOptional: true },
        },
      ],
    },
    {
      name: "team",
      description: "Maintain team memberships",
      subcommands: [
        {
          name: "create",
          description: "Create a new team",
          args: {
            name: "<scope:team>",
          },
        },
        {
          name: "destroy",
          description: "Destroys an existing team",
          args: {
            name: "<scope:team>",
          },
        },
        {
          name: "add",
          description: "Add a user to an existing team",
          args: [
            {
              name: "<scope:team>",
            },
            {
              name: "<user>",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a user from a team they belong to",
          args: [
            {
              name: "<scope:team>",
            },
            {
              name: "<user>",
            },
          ],
        },
        {
          name: "list",
          description:
            "If performed on an organization name, will return a list of existing teams under that organization. If performed on a team, it will instead return a list of all users belonging to that particular team",
          args: {
            name: "<scope>|<scope:team>",
          },
        },
        {
          name: "rm",
          description:
            "Remove a user from a team they belong to (use remove instead)",
          deprecated: true,
          args: [
            {
              name: "<scope:team>",
            },
            {
              name: "<user>",
            },
          ],
        },
        {
          name: "ls",
          description: "List teams or team members (use list instead)",
          deprecated: true,
          args: {
            name: "<scope>|<scope:team>",
          },
        },
      ],
    },
    {
      name: "unlink",
      description: "Unlink a previously created symlink for a package",
      args: {
        name: "package",
        template: "folders",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: ["-A", "--all"],
          description:
            "Unlink all workspaces belonging to the target project from the current one",
        },
      ],
    },
    {
      name: "unplug",
      description: "Force the unpacking of a list of packages",
      args: {
        name: "package",
        generators: dependenciesGenerator,
        isVariadic: true,
      },
      options: [
        {
          name: ["-A", "--all"],
          description: "Unplug direct dependencies from the entire project",
        },
        {
          name: ["-R", "--recursive"],
          description: "Unplug both direct and transitive dependencies",
        },
        {
          name: "--clear",
          description: "Delete the selected packages (Yarn 1)",
        },
        {
          name: "--clear-all",
          description: "Delete all unplugged packages (Yarn 1)",
        },
        jsonOption,
      ],
    },
    {
      name: "up",
      description: "Upgrade dependencies across the project",
      args: {
        name: "package",
        generators: dependenciesGenerator,
        filterStrategy: "fuzzy",
        isVariadic: true,
      },
      options: [
        ...rangeOptions,
        {
          name: ["-E", "--exact"],
          description: "Don't use any semver modifier on the resolved range",
        },
        {
          name: ["-T", "--tilde"],
          description: "Use the ~ semver modifier on the resolved range",
        },
        {
          name: ["-R", "--recursive"],
          description: "Resolve again ALL resolutions for those packages",
          exclusiveOn: [
            "-i",
            "--interactive",
            "-E",
            "--exact",
            "-T",
            "--tilde",
            "-C",
            "--caret",
          ],
        },
      ],
    },
    {
      name: "upgrade",
      description:
        "Upgrades packages to their latest version based on the specified range",
      args: {
        name: "package",
        generators: dependenciesGenerator,
        filterStrategy: "fuzzy",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["-S", "--scope"],
          description: "Upgrade packages under the specified scope",
          args: { name: "scope" },
        },
        {
          name: ["-L", "--latest"],
          description: "List the latest version of packages",
        },
        {
          name: ["-E", "--exact"],
          description:
            "Install exact version. Only used when --latest is specified",
          dependsOn: ["--latest"],
        },
        {
          name: ["-P", "--pattern"],
          description: "Upgrade packages that match pattern",
          args: { name: "pattern" },
        },
        {
          name: ["-T", "--tilde"],
          description:
            "Install most recent release with the same minor version. Only used when --latest is specified",
          dependsOn: ["--latest"],
        },
        {
          name: ["-C", "--caret"],
          description:
            "Install most recent release with the same major version. Only used when --latest is specified",
          dependsOn: ["--latest"],
        },
        {
          name: ["-A", "--audit"],
          description: "Run vulnerability audit on installed packages",
        },
        { name: ["-h", "--help"], description: "Output usage information" },
      ],
    },
    {
      name: "upgrade-interactive",
      description: "Upgrades packages in interactive mode",
      options: [...upgradeInteractiveOptions, modeOption],
    },
    {
      name: "version",
      description: "Update version of your package",
      args: {
        name: "strategy",
        description: "Yarn 2+: a semver version or a release strategy",
        isOptional: true,
        suggestions: [
          "major",
          "minor",
          "patch",
          "premajor",
          "preminor",
          "prepatch",
          "prerelease",
          "decline",
        ],
      },
      subcommands: [
        {
          name: "apply",
          description: "Apply deferred records to workspaces",
          options: [
            {
              name: "--all",
              description: "Bump the version of all workspaces",
            },
            {
              name: ["-R", "--recursive"],
              description: "Bump the version of dependent workspaces as well",
            },
            {
              name: "--exact",
              description:
                "When updating parent workspaces' dependencies, use exact versions of bumped workspaces, removing any range",
            },
            {
              name: "--prerelease",
              description:
                "Specify a prerelease pattern to use when working with prerelease versions",
              args: { name: "pattern" },
            },
            {
              name: "--dry-run",
              description:
                "Print version(s)/record(s) without actually bumping versions or recording deferred releases",
            },
            {
              name: "--force",
              description:
                "Bypass check for bumping to a lower version than the current/deferred one",
            },
            jsonOption,
          ],
        },
        {
          name: "check",
          description:
            "Check that all the changed workspaces have deferred version bump records",
          options: [
            {
              name: ["-i", "--interactive"],
              description:
                "Open an interactive interface used to set version bumps",
            },
          ],
        },
      ],
      options: [
        ...commonOptions,
        { name: ["-h", "--help"], description: "Output usage information" },
        {
          name: ["-d", "--deferred"],
          description: "Record the release strategy only",
        },
        {
          name: ["-i", "--immediate"],
          description: "Bump the version immediately",
        },
        {
          name: "--all",
          description: "Bump the version of all workspaces",
        },
        {
          name: ["-R", "--recursive"],
          description: "Bump the version of dependent workspaces as well",
        },
        {
          name: "--exact",
          description:
            "When updating parent workspaces' dependencies, use exact versions of bumped workspaces, removing any range",
        },
        {
          name: "--dry-run",
          description:
            "Print version(s)/record(s) without actually bumping versions or recording deferred releases",
        },
        {
          name: "--new-version",
          description: "New version",
          args: { name: "version" },
        },
        {
          name: "--major",
          description: "Auto-increment major version number",
        },
        {
          name: "--minor",
          description: "Auto-increment minor version number",
        },
        {
          name: "--patch",
          description: "Auto-increment patch version number",
        },
        {
          name: "--premajor",
          description: "Auto-increment premajor version number",
        },
        {
          name: "--preminor",
          description: "Auto-increment preminor version number",
        },
        {
          name: "--prepatch",
          description: "Auto-increment prepatch version number",
        },
        {
          name: "--prerelease",
          description:
            "Auto-increment prerelease version number (Yarn 2+: prerelease pattern to use)",
          args: { name: "pattern", isOptional: true },
        },
        {
          name: "--preid",
          description: "Add a custom identifier to the prerelease",
          args: { name: "preid" },
        },
        {
          name: "--message",
          description: "Message",
          args: { name: "message" },
        },
        { name: "--no-git-tag-version", description: "No git tag version" },
        {
          name: "--no-commit-hooks",
          description: "Bypass git hooks when committing new version",
        },
      ],
    },
    {
      name: "versions",
      description:
        "Displays version information of the currently installed Yarn, Node.js, and its dependencies",
    },
    {
      name: "why",
      description: "Show information about why a package is installed",
      args: {
        name: "package",
        filterStrategy: "fuzzy",
        generators: allDependenciesGenerator,
      },
      options: [
        ...commonOptions,
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
        {
          name: "--peers",
          description:
            "Print the peer dependencies that match the specified name",
        },
        {
          name: ["-R", "--recursive"],
          description:
            "List, for each workspace, what are all the paths that lead to the dependency",
        },
      ],
    },
    {
      name: "workspace",
      description: "Manage workspace",
      filterStrategy: "fuzzy",
      generateSpec: async (_tokens, executeShellCommand) => {
        const version = (
          await executeShellCommand({
            command: "yarn",
            // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
            args: ["--version"],
          })
        ).stdout;
        const isYarnV1 = version.startsWith("1.");

        const getWorkspacesDefinitionsV1 = async () => {
          const { stdout } = await executeShellCommand({
            command: "yarn",
            args: ["workspaces", "info"],
          });

          const startJson = stdout.indexOf("{");
          const endJson = stdout.lastIndexOf("}");

          return Object.entries(
            JSON.parse(stdout.slice(startJson, endJson + 1)) as Record<
              string,
              { location: string }
            >
          ).map(([name, { location }]) => ({
            name,
            location,
          }));
        };

        // For yarn >= 2.0.0
        const getWorkspacesDefinitionsVOther = async () => {
          // yarn workspaces list --json
          const out = (
            await executeShellCommand({
              command: "yarn",
              args: ["workspaces", "list", "--json"],
            })
          ).stdout;
          return out.split("\n").map((line) => JSON.parse(line.trim()));
        };

        try {
          const workspacesDefinitions = isYarnV1
            ? // transform Yarn V1 output to array of workspaces like Yarn V2
              await getWorkspacesDefinitionsV1()
            : // in yarn v>=2.0.0, workspaces definitions are a list of JSON lines
              await getWorkspacesDefinitionsVOther();

          const subcommands: Fig.Subcommand[] = workspacesDefinitions.map(
            ({ name, location }: { name: string; location: string }) => ({
              name,
              description: "Workspaces",
              args: {
                name: "script",
                generators: {
                  cache: {
                    strategy: "stale-while-revalidate",
                    ttl: 60_000, // 60s
                  },
                  script: ["cat", `${location}/package.json`],
                  postProcess: function (out: string) {
                    if (out.trim() == "") {
                      return [];
                    }
                    try {
                      const packageContent = JSON.parse(out);
                      const scripts = packageContent["scripts"];
                      if (scripts) {
                        return Object.keys(scripts).map((script) => ({
                          name: script,
                        }));
                      }
                    } catch (e) {}
                    return [];
                  },
                },
              },
            })
          );

          return {
            name: "workspace",
            subcommands,
          };
        } catch (e) {
          console.error(e);
        }
        return { name: "workspaces" };
      },
    },
    {
      name: "workspaces",
      description: "Show information about your workspaces",
      subcommands: [
        {
          name: "info",
          description: "Display the workspace dependency tree (Yarn 1)",
        },
        {
          name: "run",
          description: "Run the chosen command in every workspace (Yarn 1)",
          args: { name: "command", isVariadic: true },
        },
        {
          name: "list",
          description: "List all available workspaces",
          options: [
            {
              name: "--since",
              description:
                "Only include workspaces that have been changed since the specified ref",
              requiresSeparator: true,
              args: { name: "ref", isOptional: true },
            },
            {
              name: ["-R", "--recursive"],
              description:
                "Find packages via dependencies/devDependencies instead of using the workspaces field",
            },
            {
              name: "--no-private",
              description:
                "Exclude workspaces that have the private field set to true",
            },
            {
              name: ["-v", "--verbose"],
              description:
                "Also return the cross-dependencies between workspaces",
            },
            jsonOption,
          ],
        },
        {
          name: "focus",
          description: "Install a single workspace and its dependencies",
          args: { name: "workspace", isVariadic: true, isOptional: true },
          options: [
            jsonOption,
            {
              name: "--production",
              description:
                "Only install regular dependencies by omitting dev dependencies",
            },
            {
              name: ["-A", "--all"],
              description: "Install the entire project",
            },
          ],
        },
        {
          name: "foreach",
          description: "Run a command on all workspaces",
          args: { name: "command", isVariadic: true },
          options: [
            {
              name: "--from",
              description:
                "Glob pattern idents or paths from which to base any recursion",
              isRepeatable: true,
              args: { name: "glob" },
            },
            {
              name: ["-A", "--all"],
              description: "Run the command on all workspaces of a project",
              exclusiveOn: [
                "--from",
                "-R",
                "--recursive",
                "--since",
                "-W",
                "--worktree",
              ],
            },
            {
              name: ["-R", "--recursive"],
              description:
                "Run the command on the current workspace and all of its recursive dependencies",
            },
            {
              name: ["-W", "--worktree"],
              description:
                "Run the command on all workspaces of the current worktree",
            },
            {
              name: ["-v", "--verbose"],
              description: "Increase level of logging verbosity up to 2 times",
              isRepeatable: 2,
            },
            {
              name: ["-p", "--parallel"],
              description: "Run the commands in parallel",
            },
            {
              name: ["-i", "--interlaced"],
              description:
                "Print the output of commands in real-time instead of buffering it",
            },
            {
              name: ["-j", "--jobs"],
              description:
                "The maximum number of parallel tasks that the execution will be limited to",
              args: { name: "count", suggestions: ["unlimited"] },
            },
            {
              name: ["-t", "--topological"],
              description:
                "Run the command after all workspaces it depends on (regular) have finished",
            },
            {
              name: "--topological-dev",
              description:
                "Run the command after all workspaces it depends on (regular + dev) have finished",
            },
            {
              name: "--include",
              description:
                "Glob pattern idents or paths; only matching workspaces will be traversed",
              isRepeatable: true,
              args: { name: "glob" },
            },
            {
              name: "--exclude",
              description:
                "Glob pattern idents or paths; matching workspaces won't be traversed",
              isRepeatable: true,
              args: { name: "glob" },
            },
            {
              name: "--no-private",
              description: "Avoid running the command on private workspaces",
            },
            {
              name: "--since",
              description:
                "Only include workspaces that have been changed since the specified ref",
              requiresSeparator: true,
              args: { name: "ref", isOptional: true },
            },
            {
              name: ["-n", "--dry-run"],
              description:
                "Print the commands that would be run, without actually running them",
            },
          ],
        },
      ],
    },
    {
      name: "set",
      description: "Set global Yarn options",
      subcommands: [
        {
          name: "resolution",
          description: "Enforce a package resolution",
          args: [
            {
              name: "descriptor",
              description:
                "A descriptor for the package, in the form of 'lodash@npm:^1.2.3'",
            },
            {
              name: "resolution",
              description: "The version of the package to resolve",
            },
          ],
        },
        {
          name: "version",
          description: "Lock the Yarn version used by the project",
          args: {
            name: "version",
            description:
              "Use the specified version, which can also be a Yarn 2 build (e.g 2.0.0-rc.30) or a Yarn 1 build (e.g 1.22.1)",
            template: "filepaths",
            suggestions: [
              "stable",
              "latest",
              "berry",
              "canary",
              "classic",
              "self",
            ],
          },
          options: [
            {
              name: "--only-if-needed",
              description:
                "Only lock the Yarn version if it isn't already locked",
            },
            {
              name: "--yarn-path",
              description:
                "Set the yarnPath setting even if the version can be accessed by Corepack",
            },
          ],
          subcommands: [
            {
              name: "from",
              description: "Build Yarn from master",
              subcommands: [
                {
                  name: "sources",
                  description: "Build Yarn from master",
                  options: [
                    ...pluginSourcesOptions,
                    {
                      name: "--plugin",
                      description:
                        "An additional plugin that should be included in the bundle",
                      isRepeatable: true,
                      args: { name: "plugin" },
                    },
                    {
                      name: ["-n", "--dry-run"],
                      description:
                        "If set, the bundle will be built but not added to the project",
                    },
                    {
                      name: "--skip-plugins",
                      description: "Skip updating the contrib plugins",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
