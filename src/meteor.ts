// Meteor v3.6.1 (npm registry latest = git tag release/METEOR@3.6.1, 2026-11-19). Source: tools/cli/help.txt, the option tables in tools/cli/commands*.js and docs/source/commandline.md
// from a shallow clone of meteor/meteor at that tag, read statically (the CLI was not run). Internal-only commands (self-test, dummy, admin make-bootstrap-tarballs, ...) are omitted or hidden.
import { filepaths } from "@tabsmith/autocomplete-generators";

const stripAnsi = (text: string) =>
  text.replace(/\u001b\[[0-9;]*[A-Za-z]/g, "");

// `meteor create --list` prints "  <slug> v<meteor version>" followed by indented details
const examplesGenerator: Fig.Generator = {
  script: ["meteor", "create", "--list"],
  postProcess: (output) => {
    const lines = stripAnsi(output).split("\n");
    const suggestions: Fig.Suggestion[] = [];
    lines.forEach((line, index) => {
      const match = line.match(/^ {2}(\S+)(?: v\S+)?$/);
      if (!match) {
        return;
      }
      const details = lines[index + 1] ?? "";
      const isDescription =
        /^ {4}\S/.test(details) &&
        !/^ {4}(Tech|Demo|Tutorial|Repo):/.test(details);
      suggestions.push({
        name: match[1],
        description: isDescription ? details.trim() : undefined,
      });
    });
    return suggestions;
  },
};

const packagesGenerator: Fig.Generator = {
  script: ["cat", "./.meteor/packages"],
  postProcess: (output) => {
    if (output.includes("No such file or directory")) {
      return [];
    }

    return output
      .split("\n")
      .map((pack) => {
        let trimmedPack = pack
          .replace(/#.*/g, "")
          .replace(/^\s+|\s+$|\s+(?=\s)/g, "");
        if (trimmedPack.includes("@")) {
          trimmedPack = trimmedPack.split("@").at(0);
        }
        return trimmedPack;
      })
      .filter(Boolean)
      .map((name) => ({ name }));
  },
};

const platformGenerator: Fig.Generator = {
  script: ["meteor", "list-platforms"],
  postProcess: (output) => {
    return output
      .split("\n")
      .filter(Boolean)
      .map((platform) => {
        return { name: platform };
      });
  },
};

const allowIncompatibleUpdateOption: Fig.Option = {
  name: "--allow-incompatible-update",
  description:
    "Allow packages in your project to be upgraded or downgraded to versions that are potentially incompatible with the current versions, if required to satisfy all package version constraints",
};

const verboseOption: Fig.Option = {
  name: ["--verbose", "-v"],
  description: "Print all output from builds logs",
};

const noLintOption: Fig.Option = {
  name: "--no-lint",
  description: "Don't run linters used by the app on every rebuild",
};

const settingsOption = (description: string): Fig.Option => ({
  name: ["--settings", "-s"],
  description,
  args: {
    name: "JSON File",
    generators: filepaths({ extensions: ["json"] }),
  },
});

const portOption = (description: string): Fig.Option => ({
  name: ["--port", "-p"],
  description,
  args: {
    name: "port",
    default: "3000",
  },
});

const inspectOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  requiresSeparator: true,
  args: {
    name: "port",
    isOptional: true,
    default: "9229",
  },
});

const inspectOptions: Fig.Option[] = [
  inspectOption(
    "--inspect",
    "Enable server-side debugging via debugging clients like the Node.js command-line debugger, Chrome DevTools, or Visual Studio Code"
  ),
  inspectOption(
    "--inspect-brk",
    "Enable server-side debugging via debugging clients like the Node.js command-line debugger, Chrome DevTools, or Visual Studio Code. The server will be paused at startup, waiting for clients to attach to the process on the specified port"
  ),
];

const openOption: Fig.Option = {
  name: ["--open", "-o"],
  description: "Opens a browser window when the app starts",
};

const mobileServerOption = (description: string): Fig.Option => ({
  name: "--mobile-server",
  description,
  args: {
    name: "url",
  },
});

const cordovaServerPortOption: Fig.Option = {
  name: "--cordova-server-port",
  description:
    "Local port where Cordova will serve the content. It's important when multiple Cordova apps are build from the same Meteor app source code as by default the port is generated using the id inside .meteor/.id file",
  args: {
    name: "port",
  },
};

const productionOption: Fig.Option = {
  name: "--production",
  description: "Simulate production mode. Minify and bundle CSS and JS files",
};

const rawLogsOption: Fig.Option = {
  name: "--raw-logs",
  description: "Run without parsing logs from stdout and stderr",
};

const timestampsOption: Fig.Option = {
  name: "--timestamps",
  description: "Run with timestamps in logs. Turns off --raw-logs",
};

const extraPackagesOption: Fig.Option = {
  name: "--extra-packages",
  description:
    'Run with additional packages (comma separated, for example: --extra-packages "package-name1, package-name2@1.2.3")',
  args: {
    name: "packages",
  },
};

const excludeArchsOption: Fig.Option = {
  name: "--exclude-archs",
  description:
    'Don\'t create bundles for certain web architectures (comma separated, for example: --exclude-archs "web.browser.legacy, web.cordova")',
  args: {
    name: "architectures",
    suggestions: ["web.browser", "web.browser.legacy", "web.cordova"],
  },
};

const onceOption: Fig.Option = {
  name: "--once",
  description:
    "Do not re-run the project if it crashes and do not monitor for file changes. Intended for automated testing",
  hidden: true,
};

const headlessOption = (description: string): Fig.Option => ({
  name: "--headless",
  description,
  hidden: true,
});

const runOptions: Fig.Option[] = [
  portOption(
    "Port to listen on (instead of the default 3000). Also uses port N+1 and a port specified by --app-port"
  ),
  openOption,
  {
    name: "--app-port",
    description:
      "Port the application server listens on, behind the --port proxy. Specify as host:port to bind to a specific interface",
    args: {
      name: "port",
    },
  },
  ...inspectOptions,
  {
    name: "--debug-port",
    description: "Deprecated, use --inspect-brk=<port> instead",
    deprecated: true,
    args: {
      name: "port",
    },
  },
  mobileServerOption(
    "Location where mobile builds connect to the Meteor server. Defaults to your local IP and the port that the Meteor server binds to. Can include a URL scheme (for example, --mobile-server=https://example.com:443)"
  ),
  cordovaServerPortOption,
  productionOption,
  rawLogsOption,
  timestampsOption,
  settingsOption("Set optional data for Meteor.settings on the server"),
  verboseOption,
  noLintOption,
  {
    name: "--no-release-check",
    description: "Don't run the release updater to check for new releases",
  },
  allowIncompatibleUpdateOption,
  extraPackagesOption,
  excludeArchsOption,
  onceOption,
];

const runTargetArg: Fig.Arg = {
  name: "target",
  description:
    "Mobile target to run on, once the platform has been added with 'meteor add-platform'",
  isOptional: true,
  isVariadic: true,
  suggestions: [
    { name: "android", description: "Run on the Android emulator" },
    {
      name: "android-device",
      description: "Run on a connected Android device",
    },
    { name: "ios", description: "Run on the iOS simulator" },
    {
      name: "ios-device",
      description:
        "Open Xcode with the iOS project for this app, where you can run your app on a connected iOS device",
    },
  ],
};

// `meteor test` and `meteor test-packages` share one option table
const testOptions: Fig.Option[] = [
  portOption(
    "Port to listen on (instead of the default 3000). Also uses port N+1 and N+2"
  ),
  openOption,
  ...inspectOptions,
  mobileServerOption(
    "If running tests in an emulator or on a mobile device, the location where mobile builds connect to the Meteor server. Defaults to your local IP and the port that the Meteor server binds to. Can include a URL scheme (for example, --mobile-server=https://example.com:443)"
  ),
  cordovaServerPortOption,
  productionOption,
  rawLogsOption,
  timestampsOption,
  settingsOption("Set optional data for Meteor.settings on the server"),
  {
    name: "--ios",
    description:
      "Run tests in an iOS emulator. All of the tests for client and server will run in addition to mobile-specific tests",
  },
  {
    name: "--android",
    description:
      "Run tests in an Android emulator. All of the tests for client and server will run in addition to mobile-specific tests",
  },
  {
    name: "--ios-device",
    description:
      "Run tests on iOS mobile device. All of the tests for client and server will run in addition to mobile-specific tests",
  },
  {
    name: "--android-device",
    description:
      "Run tests on Android emulator or on a mobile device. All of the tests for client and server will run in addition to mobile-specific tests",
  },
  {
    name: "--test-app-path",
    description:
      "Set the directory in which to create a temporary app used for tests. Defaults to the system's temporary directory, usually /tmp",
    args: {
      name: "path",
      template: "folders",
    },
  },
  verboseOption,
  {
    name: "--no-lint",
    description:
      "Don't run linters used by the tested packages on every test app rebuild",
  },
  extraPackagesOption,
  {
    name: "--driver-package",
    description:
      "Test driver package to use to run tests and display results. For example: --driver-package meteortesting:mocha",
    args: {
      name: "driver-package",
    },
  },
  {
    name: "--full-app",
    description:
      "Your app is loaded as usual, then hidden, so that your tests can inspect and interact with the full running application",
  },
  {
    name: ["--filter", "-f"],
    description: "Only run tests matching this filter (sets TINYTEST_FILTER)",
    args: {
      name: "filter",
    },
  },
  {
    name: "--exclude",
    description:
      "Comma-separated list of package names to exclude when testing all packages",
    args: {
      name: "packages",
    },
  },
  excludeArchsOption,
  allowIncompatibleUpdateOption,
  headlessOption(
    "Run headless, for example in a continuous integration environment, where progress bars and spinners are unimportant"
  ),
  onceOption,
];

const mobilePlatformArg: Fig.Arg = {
  name: "platform",
  suggestions: ["android", "ios"],
};

// Options shared by `meteor build` and the deprecated `meteor bundle`
const buildOptions: Fig.Option[] = [
  {
    name: "--debug",
    description: "Build in debug mode (don't minify, etc)",
  },
  {
    name: "--directory",
    description:
      "Output a directory (rather than a tarball) for the application server bundle. If the output location exists, it will be recursively deleted first",
  },
  {
    name: "--server-only",
    description:
      "Skip building mobile apps even if mobile platforms have been added, but still build the 'web.cordova' client target so the server can support hot code push for Cordova apps",
  },
  {
    name: "--mobile-settings",
    description:
      "Set optional data for the initial value of Meteor.settings in your mobile application. A new value for Meteor.settings can be set later by the server as part of hot code push",
    args: {
      name: "settings.json",
      generators: filepaths({ extensions: ["json"] }),
    },
  },
  {
    name: "--server",
    description:
      "Location where mobile builds connect to the Meteor server. Defaults to localhost:3000. Can include a URL scheme (for example, --server=https://example.com:443)",
    args: {
      name: "url",
    },
  },
  cordovaServerPortOption,
  {
    name: "--architecture",
    description:
      "Builds the server for a different architecture than your developer machine's architecture. Note: This option selects the architecture of the binary-dependent Atmosphere packages you would like bundled into your application, when those packages were specifically published for multiple architectures (i.e. with meteor publish-for-arch). If your project doesn't use any Atmosphere packages that have binary dependencies, --architecture has no effect",
    args: {
      name: "arch",
      suggestions: [
        "os.osx.x86_64",
        "os.linux.x86_64",
        "os.linux.x86_32",
        "os.windows.x86_32",
        "os.windows.x86_64",
      ],
    },
  },
  allowIncompatibleUpdateOption,
  {
    name: "--platforms",
    description:
      "Builds only the specified platforms (comma separated, when available)",
    args: {
      name: "platforms",
      suggestions: [
        "web.browser",
        "web.browser.legacy",
        "web.cordova",
        "android",
        "ios",
      ],
    },
  },
  {
    name: "--packageType",
    description: "Choose between apk/bundle for android builds",
    args: {
      name: "package-type",
      default: "bundle",
      suggestions: ["apk", "bundle"],
    },
  },
  verboseOption,
  headlessOption(
    "Run headless, for example in a continuous integration environment, where progress bars and spinners are unimportant"
  ),
];

const buildOutputArg: Fig.Arg = {
  name: "output path",
  template: "folders",
  suggestCurrentToken: true,
};

const completionSpec: Fig.Spec = {
  name: "meteor",
  description: "Run the meteor command-line tool",
  options: [
    {
      name: "--release",
      description: "Specify the release of Meteor to use",
      isPersistent: true,
      args: {
        name: "release",
      },
    },
    {
      name: "--help",
      description: "Show help for a command",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Print the Meteor release in use",
    },
    {
      name: "--arch",
      description: "Print the Meteor architecture name of this host",
    },
    ...inspectOptions,
  ],
  subcommands: [
    {
      name: "npm",
      loadSpec: "npm",
    },
    {
      name: "node",
      loadSpec: "node",
    },
    {
      name: "help",
      description: "Get help on meteor command line usage",
      args: {
        name: "command",
        description: "Built-in command",
        isOptional: true,
        template: "help",
      },
      subcommands: [
        {
          name: "admin",
          subcommands: [
            { name: "maintainers" },
            { name: "recommend-release" },
            { name: "change-homepage" },
            { name: "list-organizations" },
            { name: "members" },
          ],
        },
      ],
    },
    {
      name: "run",
      description:
        "Run this project in local development mode. Searches upward from the current directory for the root directory of a Meteor project",
      args: runTargetArg,
      options: runOptions,
    },
    {
      name: "debug",
      description:
        "DEPRECATED. The 'meteor debug' command is deprecated in favor of 'meteor --inspect-brk'",
      deprecated: true,
      options: runOptions,
    },
    {
      name: "create",
      description:
        "Create a new Meteor project. By default, it uses React and makes a subdirectory named name and copies in the template app. You can pass an absolute or relative path",
      args: {
        name: "path",
        description:
          "Directory of the new app (or name of the package with --package). A Git URL can be passed as the source",
        isOptional: true,
      },
      options: [
        {
          name: "--package",
          description: "Create a new meteor package instead of an app",
        },
        {
          name: "--example",
          description: "Create from a community example (use --list to browse)",
          args: {
            name: "example_name",
            generators: examplesGenerator,
          },
        },
        {
          name: "--list",
          description: "Show detailed list of available examples",
        },
        {
          name: "--from",
          description:
            "Clone a Meteor project from a Git URL. Accepts GitHub, GitLab, and Bitbucket tree/src URLs. Branch and subdirectory are auto-detected from the URL when possible. GitHub shorthand such as owner/repo is supported",
          args: {
            name: "url",
          },
        },
        {
          name: "--from-branch",
          description:
            "Branch to clone from (overrides branch parsed from URL)",
          args: {
            name: "branch",
          },
        },
        {
          name: "--from-dir",
          description:
            "Extract only a subdirectory (overrides dir parsed from URL)",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--bare",
          description: "Create an empty app",
        },
        {
          name: "--minimal",
          description: "Create an app with as few Meteor packages as possible",
        },
        {
          name: "--full",
          description: "Create a fully scaffolded app",
        },
        {
          name: "--pnpm",
          description: "Create a pnpm monorepo with a Meteor app in apps/app",
        },
        {
          name: "--react",
          description: "Create a basic react-based app, same as default",
        },
        {
          name: "--vue",
          description: "Create a basic vue3-based app",
        },
        {
          name: "--apollo",
          description: "Create a basic apollo-based app",
        },
        {
          name: "--svelte",
          description: "Create a basic svelte-based app",
        },
        {
          name: "--typescript",
          description: "Create a basic Typescript React-based app",
        },
        {
          name: "--typescript-tailwind",
          description: "Create an app using TypeScript, React, and Tailwind",
        },
        {
          name: "--blaze",
          description: "Create a basic blaze-based app",
        },
        {
          name: "--pwa",
          description: "Create a basic blaze-based app, installable as a PWA",
        },
        {
          name: "--tailwind",
          description:
            "Create a basic react-based app, with tailwind configured",
        },
        {
          name: "--chakra-ui",
          description:
            "Create a basic react-based app, with chakra-ui configured",
        },
        {
          name: "--coffeescript",
          description: "Create a basic coffeescript app, with react",
        },
        {
          name: "--babel",
          description: "Create a React app with Babel support",
        },
        {
          name: "--solid",
          description: "Create a basic solid-based app",
        },
        {
          name: "--angular",
          description: "Create a basic Angular app",
        },
        {
          name: "--legacy",
          description: "Create an app from the legacy skeleton",
        },
        {
          name: "--prototype",
          description:
            "Create a prototype app with the insecure & autopublish packages",
        },
      ],
    },
    {
      name: "update",
      description:
        "Attempts to bring you to the latest version of Meteor, and then to upgrade your packages to their latest versions. By default, update will not break compatibility",
      args: {
        name: "package_names",
        isOptional: true,
        isVariadic: true,
        generators: packagesGenerator,
      },
      options: [
        {
          name: "--packages-only",
          description:
            "Update the package versions only. Do not update the release",
        },
        {
          name: "--patch",
          description: "Update the release to a patch release only",
        },
        allowIncompatibleUpdateOption,
        {
          name: "--all-packages",
          description: "Update all packages including indirect dependencies",
        },
        {
          name: "--npm",
          description:
            "Compile the app to resolve NPM dependency bumps coming from plugins",
          hidden: true,
        },
      ],
    },
    {
      name: "add",
      description:
        "Add packages to your Meteor project. You can add multiple packages with one command. Run without package names to search the Atmosphere package directory interactively",
      args: {
        name: "package",
        description:
          "Package name, optionally with a version constraint, or a Git URL",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        allowIncompatibleUpdateOption,
        {
          name: "--search",
          description:
            "Open an interactive Atmosphere package search pre-populated with the given query. Incompatible with positional package names and Git options",
          args: {
            name: "query",
          },
        },
        {
          name: "--from",
          description:
            "Clone a package from a Git URL or GitHub shorthand (user/repo)",
          args: {
            name: "url",
          },
        },
        {
          name: "--from-branch",
          description: "Branch to clone from",
          args: {
            name: "branch",
          },
        },
        {
          name: "--from-dir",
          description: "Extract only a subdirectory from the repo",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--to",
          description:
            "Destination path relative to project root. By default, Meteor uses packages/<dir-name> when --from-dir is set, otherwise packages/<repo-name>",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--force",
          description: "Overwrite destination directory if it already exists",
        },
      ],
    },
    {
      name: "remove",
      description:
        'Removes a package previously added to your Meteor project. You can remove multiple packages with one command. For a list of the packages that your application is currently using, see "meteor list"',
      args: {
        name: "package",
        isOptional: true,
        isVariadic: true,
        generators: packagesGenerator,
      },
      options: [
        allowIncompatibleUpdateOption,
        {
          name: "--search",
          description:
            "Open an interactive picker pre-filtered by the given query. Incompatible with positional package names",
          args: {
            name: "query",
          },
        },
      ],
    },
    {
      name: "list",
      description:
        "Lists the packages that you have explicitly added to your project",
      options: [
        {
          name: "--tree",
          description: "Outputs a tree showing how packages are referenced",
        },
        {
          name: "--json",
          description: "Outputs the tree in JSON format",
        },
        {
          name: "--weak",
          description: "Show weakly referenced dependencies in the tree",
        },
        {
          name: "--details",
          description: "Adds more package details to the JSON output",
        },
      ],
    },
    {
      name: "add-platform",
      description:
        "Adds platforms to your Meteor project. You can add multiple platforms with one command",
      args: {
        name: "platform",
        isVariadic: true,
        suggestions: ["server", "browser", "android", "ios"],
      },
      options: [verboseOption],
    },
    {
      name: "install-sdk",
      description:
        "Installs the SDK for a platform; will also verify that the platform requirements are met",
      hidden: true,
      args: mobilePlatformArg,
      options: [verboseOption],
    },
    {
      name: "remove-platform",
      description: "Removes a platform previously added to your Meteor project",
      args: {
        name: "platform",
        isVariadic: true,
        generators: platformGenerator,
      },
    },
    {
      name: "list-platforms",
      description: "Lists all of the platforms added to your project",
    },
    {
      name: "ensure-cordova-dependencies",
      description:
        "Check if the dependencies are installed, otherwise install them",
      options: [verboseOption],
    },
    {
      name: "configure-android",
      description:
        "Run the Android configuration tool from Meteor's ADK environment. Useful to configure AVDs, HAX and update the SDK",
      hidden: true,
      options: [verboseOption],
    },
    {
      name: "bundle",
      description:
        "Deprecated command. Use 'build' instead. Packs this project up into a tarball",
      deprecated: true,
      hidden: true,
      args: buildOutputArg,
      options: buildOptions,
    },
    {
      name: "build",
      description:
        "Package this project up for deployment. The command outputs a directory with builds for all platforms in this project",
      args: buildOutputArg,
      options: buildOptions,
    },
    {
      name: "types",
      description:
        "Build local packages and generate .meteor/types/ declarations for projects that have a tsconfig.json or jsconfig.json, skipping linting and bundling",
      options: [allowIncompatibleUpdateOption],
    },
    {
      name: "lint",
      description:
        "Run through the whole build process for the app and run all linters the app uses",
      options: [allowIncompatibleUpdateOption],
    },
    {
      name: "shell",
      description:
        "When `meteor shell` is executed in an application directory where a server is already running, it connects to the server and starts an interactive shell for evaluating server-side code",
    },
    {
      name: "mongo",
      description:
        "Opens a Mongo shell (mongosh) to view or manipulate collections. Pass the name of a deployed site to connect to its database",
      args: {
        name: "site",
        description: "Deployed site whose database to connect to",
        isOptional: true,
      },
      options: [
        {
          name: ["--url", "-U"],
          description:
            "Return a Mongo database URL suitable for an external program instead of opening a shell",
        },
        {
          name: ["--verbose", "-V"],
          description:
            "Show the errors that have occurred while connecting to the database",
        },
      ],
    },
    {
      name: "reset",
      description:
        "Reset the current project to a fresh state and clear the local cache",
      options: [
        {
          name: "--db",
          description: "Also remove the local database",
        },
        {
          name: "--skip-cache",
          description: "Keep the local Meteor npm cache",
          hidden: true,
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Deploys the project in your current directory to Galaxy, Meteor's hosting service",
      args: {
        name: "site",
        description:
          'You can deploy to any available name under "meteorapp.com" without any additional configuration, for example, "myapp.meteorapp.com". If you deploy to a custom domain, such as "myapp.mydomain.com", then you\'ll also need to configure your domain\'s DNS records. See the Meteor / Galaxy docs (http://cloud-guide.meteor.com/dns.html) for details',
      },
      options: [
        {
          name: ["--delete", "-D"],
          description:
            "Permanently delete this deployment, including all of its stored data",
        },
        {
          name: "--debug",
          description: "Deploy in debug mode (don't minify, etc)",
        },
        settingsOption("Set optional data for Meteor.settings"),
        allowIncompatibleUpdateOption,
        {
          name: "--deploy-polling-timeout",
          description:
            "The number of milliseconds to wait for build/deploy success or failure after a successful upload of your app's minified code; defaults to 15 minutes",
          args: {
            name: "milliseconds",
            description: "Milliseconds to wait",
          },
        },
        {
          name: "--no-wait",
          description:
            "Exits when Meteor has uploaded the app's code instead of waiting for the deploy to conclude",
        },
        {
          name: "--cache-build",
          description:
            "Reuses the build already created if the git commit hash is the same",
        },
        {
          name: "--build-only",
          description:
            "Only build the app (useful to create a cached build once and deploy it to many apps) without deploying",
        },
        {
          name: "--free",
          description:
            "When deploying an app for the first time, you can pass this option to deploy your app in the Galaxy's free mode",
        },
        {
          name: "--plan",
          description:
            "You can change the app plan by providing this argument with one of the following values: professional, essentials, or free. Be aware that this argument overwrites the `--free` argument",
          args: {
            name: "plan",
            suggestions: ["professional", "essentials", "free"],
          },
        },
        {
          name: "--mongo",
          description:
            "If this flag is true and it's not provided a mongo url in the settings ('galaxy.meteor.com'.env.MONGO_URL), when deploying, Galaxy will create a database to your app in its shared cluster and will insert the URL in your app's settings for you",
        },
        {
          name: "--container-size",
          description:
            "Change your app's container size using the deploy command",
          args: {
            name: "size",
            suggestions: [
              "tiny",
              "compact",
              "standard",
              "double",
              "quad",
              "octa",
              "dozen",
            ],
          },
        },
        {
          name: "--owner",
          description:
            "Organization or user account to deploy a new app to, if you are a member of more than one Galaxy-enabled account",
          args: {
            name: "owner",
          },
        },
        {
          name: "--deploy-token",
          description: "Deploy token to use instead of logging in",
          args: {
            name: "token",
          },
        },
        {
          name: "--override-architecture-with-local",
          description:
            "Deploy whatever is built locally, even if it contains binary packages that are incompatible with the deploy architecture",
          hidden: true,
        },
      ],
    },
    {
      name: "authorized",
      description:
        "View or change authorized users and organizations for a site. Lists them by default",
      args: {
        name: "site",
      },
      options: [
        {
          name: ["--add", "-a"],
          description: "Add an authorized user or organization",
          args: {
            name: "username",
          },
        },
        {
          name: ["--remove", "-r"],
          description: "Remove an authorized user or organization",
          args: {
            name: "username",
          },
        },
        {
          name: ["--transfer", "-t"],
          description:
            "Transfer the (Galaxy) app to a new user or organization",
          args: {
            name: "username",
          },
        },
        {
          name: "--list",
          description: "List authorized users and organizations",
        },
      ],
    },
    {
      name: "login",
      description:
        "Prompts for your username and password and logs you in to your Meteor developer account",
      options: [
        {
          name: "--email",
          description: "Log in by email address rather than by username",
          icon: "fig://icon?type=invite",
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of your Meteor developer account",
    },
    {
      name: "whoami",
      description:
        "Prints the username of the currently logged-in Meteor developer",
    },
    {
      name: "test-packages",
      description:
        "Runs unit tests for one or more packages. The results are shown in a browser dashboard that updates whenever a relevant source file is modified",
      args: {
        name: "package",
        description:
          "Package name or path (an argument containing a '/' is loaded from that directory). All available packages are tested if omitted",
        isOptional: true,
        isVariadic: true,
      },
      options: testOptions,
    },
    {
      name: "test",
      description: "Runs tests against the application",
      options: testOptions,
    },
    {
      name: "admin",
      description:
        "Rarely used commands for administering official Meteor services",
      subcommands: [
        {
          name: "maintainers",
          description:
            "Manage users and organizations that are maintainers for a particular package",
          args: {
            name: "package_name",
          },
          options: [
            {
              name: ["--add", "-a"],
              description: "Add an authorized maintainer to a package",
              args: {
                name: "username",
              },
            },
            {
              name: ["--remove", "-r"],
              description:
                "Remove an authorized maintainer from a package. You cannot remove yourself if you are the last maintainer on a package",
              args: {
                name: "username",
              },
            },
            {
              name: "--list",
              description: "List authorized maintainers",
            },
          ],
        },
        {
          name: "recommend-release",
          description:
            "Recommend a previously published version of a meteor release",
          args: {
            name: "release",
            description:
              "Release in the form <release track>@<release version>",
          },
          options: [
            {
              name: ["--unrecommend", "-u"],
              description: "Unrecommend a previously recommended release",
            },
          ],
        },
        {
          name: "change-homepage",
          description: "Change the homepage containing package information",
          args: [
            {
              name: "package_name",
            },
            {
              name: "new_url",
            },
          ],
        },
        {
          name: "list-organizations",
          description: "List the organizations of which you are a member",
        },
        {
          name: "members",
          description: "Manage members of an organization",
          args: {
            name: "organization_name",
            suggestCurrentToken: true,
          },
          options: [
            {
              name: "--add",
              description: "Add a member to the organization",
              args: {
                name: "username",
              },
            },
            {
              name: "--remove",
              description: "Remove a member from the organization",
              args: {
                name: "username",
              },
            },
            {
              name: "--list",
              description: "List members of the organization",
            },
          ],
        },
        {
          name: "run-upgrader",
          description:
            "Execute a specific upgrader by name. Intended for testing",
          hidden: true,
          args: {
            name: "upgrader",
          },
        },
        {
          name: "make-bootstrap-tarballs",
          description: "Makes bootstrap tarballs. For internal use only",
          hidden: true,
          args: [
            {
              name: "release@version",
            },
            {
              name: "output directory",
              template: "folders",
            },
          ],
          options: [
            {
              name: "--unpacked",
              description:
                "Copy the tarball contents to the output directory instead of making a tarball",
            },
            {
              name: "--target-arch",
              description: "Build a tarball only for a specific arch",
              args: {
                name: "arch",
              },
            },
          ],
        },
        {
          name: "set-unmigrated",
          description:
            "Set a version of a package as unmigrated: make it invisible in search and show, without a special option",
          hidden: true,
          args: {
            name: "package_name[@version]",
          },
          options: [
            {
              name: "--success",
              description: "Mark the package as successfully migrated",
            },
          ],
        },
        {
          name: "set-banners",
          description: "Set banners on previously published releases",
          hidden: true,
          args: {
            name: "banner configuration",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "list-sites",
      description:
        "List the sites that you have deployed with `meteor deploy`, and sites for which other users have authorized you with the `meteor authorized` command. To see sites in a region other than us-east-1, set the DEPLOY_HOSTNAME environment variable. For example, `DEPLOY_HOSTNAME=eu-west-1.galaxy-deploy.meteor.com meteor list-sites`",
    },
    {
      name: "generate",
      description:
        "Generate boilerplate code for a MeteorJS RPC api: a collection with the name you pass and its methods and publications. Without a collection name it runs a wizard",
      args: {
        name: "collectionName",
        isOptional: true,
      },
      options: [
        {
          name: "--path",
          description:
            "The path to the folder where the files will be generated. Default is the current folder",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--templatePath",
          description:
            "Path to the template file used to generate the boilerplate code",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--replaceFn",
          description: "Replace function to replace the names in the template",
          args: {
            name: "function",
          },
        },
        {
          name: "--methods",
          description: "Generate methods",
        },
        {
          name: "--publications",
          description: "Generate publications",
        },
      ],
    },
    {
      name: "publish-release",
      description:
        "Publishes a new release to the package server, as determined by a JSON configuration file",
      args: {
        name: "JSON File",
        generators: filepaths({ extensions: ["json"] }),
      },
      options: [
        {
          name: "--create-track",
          description: "Publish a new release track",
        },
        {
          name: "--from-checkout",
          description: "Publish the release from a Meteor checkout",
          hidden: true,
        },
        {
          name: "--dry-run",
          description: "Go through the motions, but publish nothing",
          hidden: true,
        },
        {
          name: "--skip-tree-hashing",
          description:
            "Skip the check that core package sources match what was previously published for the current version",
          hidden: true,
        },
      ],
    },
    {
      name: "publish",
      description:
        "Publishes a new version of a local package to the package server. Must be run from the directory containing the package",
      options: [
        {
          name: "--create",
          description: "Publish a new package",
        },
        {
          name: "--update",
          description: "Change the metadata of a previously published version",
        },
        allowIncompatibleUpdateOption,
        {
          name: "--no-lint",
          description:
            "Don't run linters on the published package and its local dependencies before publishing",
        },
        {
          name: "--existing-version",
          description:
            "Publish using the local source of an already published version, after verifying the source is the same",
          hidden: true,
        },
        {
          name: "--top-level",
          description:
            "Allow publishing a package in the top level namespace, without a username prefix",
          hidden: true,
        },
      ],
    },
    {
      name: "publish-for-arch",
      description:
        "Publish a package for the same architecture that you are currently on",
      args: {
        name: "packageName@version",
      },
    },
    {
      name: "rebuild",
      description:
        "Rebuild local packages from scratch. Rebuilds all local packages when none are given",
      hidden: true,
      args: {
        name: "package name",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "search",
      description:
        "Searches through the Meteor package and release database for items whose names match the regular expression",
      args: {
        name: "regex",
      },
      options: [
        {
          name: "--maintainer",
          description: "Filter by authorized maintainer",
          args: {
            name: "maintainer_name",
          },
        },
        {
          name: "--show-all",
          description: "Show all matches, even prereleases",
        },
        {
          name: "--ejson",
          description: "Show more detailed output in EJSON format",
        },
        {
          name: "--debug-only",
          description: "Only show debug-only packages",
          hidden: true,
        },
        {
          name: "--prod-only",
          description: "Only show production-only packages",
          hidden: true,
        },
        {
          name: "--test-only",
          description: "Only show test-only packages",
          hidden: true,
        },
      ],
    },
    {
      name: "show",
      description:
        "Show detailed information about a release or package, including a list of available versions. Without arguments, shows the package in the current directory",
      args: {
        name: "name or name@version",
        isOptional: true,
      },
      options: [
        {
          name: "--show-all",
          description: "Show hidden versions of packages and releases",
        },
        {
          name: "--ejson",
          description: "Show more detailed output in EJSON format",
        },
      ],
    },
    {
      name: "profile",
      description:
        "Run performance profiling for the Meteor application, monitoring the bundler process and tracking key build and bundle metrics. Accepts the same options as meteor run",
      options: [
        {
          name: "--size",
          description: "Monitor both bundle runtime and size",
        },
        {
          name: "--size-only",
          description: "Monitor only the bundle size",
        },
        {
          name: "--build",
          description: "Monitor build time",
        },
        ...runOptions,
      ],
    },
    {
      name: "shell-completion",
      description:
        "Install and configure tab completion for the meteor command (Bash and Zsh on macOS and Linux)",
      hidden: true,
      options: [
        {
          name: "--install",
          description: "Install completion to your shell profile configuration",
        },
        {
          name: "--uninstall",
          description:
            "Uninstall completion from your shell profile configuration",
        },
        {
          name: "--script",
          description: "Print the shell completion script to stdout",
        },
        {
          name: "--shell",
          description: "Specify the shell type for --install or --script",
          args: {
            name: "shell",
            suggestions: ["bash", "zsh"],
          },
        },
        {
          name: "--index",
          description:
            "Print completions for the word at this index of the arguments (used by the generated completion script)",
          hidden: true,
          args: {
            name: "index",
          },
        },
      ],
    },
  ],
};
export default completionSpec;
