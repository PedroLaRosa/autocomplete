// Expo CLI v58.1.21 (npm @expo/cli "latest", shipped with expo 58.0.26, 2026-11-19).
// Source: packages/@expo/cli/src/index.ts and each command's index.ts/help.ts
// on the expo/expo sdk-58 branch. The local `npx expo` CLI replaced the global
// expo-cli; its legacy commands live in expo-cli.ts.

const _gen: Record<string, Fig.Generator> = {
  npm: {
    script(context) {
      if (context[context.length - 1] === "") return undefined;
      const searchTerm = context[context.length - 1];
      return [
        "curl",
        "-s",
        "-H",
        "Accept: application/json",
        `https://api.npms.io/v2/search?q=${searchTerm}&size=20`,
      ];
    },
    postProcess(script: string) {
      try {
        const results: {
          package: {
            name: string;
            description: string;
          };
          searchScore: number;
        }[] = JSON.parse(script).results;
        return results.map((item) => ({
          name: item.package.name,
          description: item.package.description,
        })) as Fig.Suggestion[];
      } catch (e) {
        return [];
      }
    },
  },
  "xcode-configuration": {
    // Array scripts skip the shell, so the glob needs bash
    script: ["bash", "-c", "xcodebuild -project ios/*.xcodeproj -list -json"],
    postProcess: (script: string) =>
      JSON.parse(script).project.configurations.map((name) => ({ name })),
  },
  "xcode-scheme": {
    script: ["bash", "-c", "xcodebuild -project ios/*.xcodeproj -list -json"],
    postProcess: (script: string) =>
      JSON.parse(script).project.schemes.map((name) => ({ name })),
  },
  "xcode-devices": {
    script: ["xcrun", "xctrace", "list", "devices"],
    postProcess: (script: string) =>
      script
        .split("\n")
        .filter((item) => !item.match(/^=/))
        .filter(Boolean)
        .map((item) => item.split(/(.*?) (\(([0-9.]+)\) )?\(([0-9A-F-]+)\)/i))
        // filter catalyst
        .filter((item: string[] | null) => !!item?.[3])
        .map(([, name, , osVersion, udid]) => ({
          displayName: `${name.trim()} (${osVersion})`,
          name: udid,
        })),
  },
  "max-workers": {
    script: ["sysctl", "-n", "hw.ncpu"],
    postProcess: (script: string) => {
      const count = Number(script);
      return Array.from({ length: count }, (_, i) => {
        const v = count - i;
        return {
          priority: v,
          name: String(v),
        };
      });
    },
  },
};

const help: Fig.Option = {
  name: ["-h", "--help"],
  description: "Usage info",
  priority: 1,
};

const dirArg: Fig.Arg = {
  name: "dir",
  description: "Directory of the Expo project (default: current directory)",
  isOptional: true,
  template: "folders",
};

const clear: Fig.Option = {
  name: ["-c", "--clear", "--reset-cache"],
  description: "Clear the bundler cache",
};

const maxWorkers: Fig.Option = {
  name: "--max-workers",
  description: "Maximum number of tasks to allow the bundler to spawn",
  args: { name: "number", generators: _gen["max-workers"] },
};

const port = (description: string): Fig.Option => ({
  name: ["-p", "--port"],
  description: `${description} (default: 8081)`,
  args: { name: "port" },
});

const packageManagers: Fig.Option[] = [
  ["--npm", "npm", "package-lock.json"],
  ["--yarn", "Yarn", "yarn.lock"],
  ["--bun", "bun", "bun.lock or bun.lockb"],
  ["--pnpm", "pnpm", "pnpm-lock.yaml"],
].map(([name, pm, lock], _, all) => ({
  name,
  description: `Use ${pm} to install dependencies (default when ${lock} exists)`,
  exclusiveOn: all.map(([n]) => n).filter((n) => n !== name),
}));

// start allows at most one of these
const hostFlags = [
  "-m",
  "--host",
  "--tunnel",
  "--lan",
  "--localhost",
  "--offline",
];
const notHost = (...own: string[]) => hostFlags.filter((f) => !own.includes(f));

const noBuildCache: Fig.Option = {
  name: "--no-build-cache",
  description: "Clear the native build cache before building",
};
const noInstall: Fig.Option = {
  name: "--no-install",
  description: "Skip installing dependencies",
};
const noBundler: Fig.Option = {
  name: "--no-bundler",
  description: "Skip starting the Metro bundler",
};

const runIos: Fig.Subcommand = {
  name: "run:ios",
  description: "Run the iOS app binary locally",
  args: dirArg,
  options: [
    help,
    noBuildCache,
    noInstall,
    noBundler,
    {
      name: "--scheme",
      description: "Scheme to build",
      args: {
        name: "scheme",
        isOptional: true,
        generators: _gen["xcode-scheme"],
      },
    },
    {
      name: "--binary",
      description: "Path to existing .app or .ipa to install",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--configuration",
      description: "Xcode configuration to use (default: Debug)",
      args: {
        name: "configuration",
        suggestions: ["Debug", "Release"],
        generators: _gen["xcode-configuration"],
      },
    },
    {
      name: ["-d", "--device"],
      description: 'Device name, UDID, or "generic" for build-only',
      args: {
        name: "device",
        isOptional: true,
        suggestions: ["generic"],
        generators: _gen["xcode-devices"],
      },
    },
    {
      name: ["-o", "--output"],
      description: "Directory to output the built app binary",
      args: { name: "path", template: "folders" },
    },
    port("Port to start the Metro bundler on"),
    {
      name: "--unstable-rebundle",
      description: "Re-bundle the JS and assets of an existing build",
      hidden: true,
    },
  ],
};

const runAndroid: Fig.Subcommand = {
  name: "run:android",
  description: "Run the native Android app locally",
  args: dirArg,
  options: [
    help,
    noBuildCache,
    noInstall,
    noBundler,
    {
      name: "--app-id",
      description: "Custom Android application ID to launch",
      args: { name: "appId" },
    },
    {
      name: "--variant",
      description:
        "Build variant or product flavor and build variant (default: debug)",
      args: { name: "name", suggestions: ["debug", "release"] },
    },
    {
      name: "--binary",
      description: "Path to existing .apk or .aab to install",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: ["-d", "--device"],
      description: "Device name to run the app on",
      args: { name: "device", isOptional: true },
    },
    port("Port to start the dev server on"),
    {
      name: "--all-arch",
      description: "Build for all architectures, not just the active one",
      hidden: true,
    },
  ],
};

const selector: Fig.Arg = {
  name: "selector",
  description: "Session ID, PID, or substring of CWD or command",
  isOptional: true,
};

const commandPs: Fig.Subcommand = {
  name: "command:ps",
  description: "List running and stopped CLI sessions, newest first",
  args: selector,
  options: [
    help,
    { name: ["-a", "--active"], description: "Show only running sessions" },
    { name: "--json", description: "Print sessions as a JSON array" },
  ],
};

const commandEvents: Fig.Subcommand = {
  name: "command:events",
  description: "Replay a session's structured events as JSONL",
  args: selector,
  options: [
    help,
    {
      name: "--since",
      description: "Duration ago (5m, 90s), Unix time, or ISO date",
      args: { name: "time" },
    },
    {
      name: "--filter",
      description:
        "Event-name prefixes on whole segments, * wildcards, comma-separated",
      isRepeatable: true,
      args: {
        name: "pattern",
        suggestions: ["metro", "metro:bundling", "cli", "devserver"],
      },
    },
    {
      name: "--spans",
      description: "Keep only span events (with a _d duration)",
    },
    {
      name: "--tail",
      description: "Follow live events after replay until the session stops",
    },
  ],
};

// ponytail: string-valued passthrough flags for the internal export:embed
const stringOpts = (opts: [string, string, string][]): Fig.Option[] =>
  opts.map(([name, arg, description]) => ({
    name,
    description,
    args: { name: arg },
  }));

const completionSpec: Fig.Spec = {
  name: "expo",
  icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/expo.png",
  description:
    "Expo CLI: start, run, prebuild and export Expo and React Native apps",
  options: [
    help,
    { name: ["-v", "--version"], description: "Version number", priority: 1 },
    {
      name: "--non-interactive",
      description: "Not supported, set CI=1 instead",
      deprecated: true,
    },
  ],
  subcommands: [
    {
      name: "start",
      description: "Start a local dev server for the app",
      priority: 80,
      args: dirArg,
      options: [
        help,
        {
          name: ["-a", "--android"],
          description: "Open on a connected Android device",
        },
        { name: ["-i", "--ios"], description: "Open in an iOS simulator" },
        { name: ["-w", "--web"], description: "Open in a web browser" },
        {
          name: ["-d", "--dev-client"],
          description: "Launch in a custom native app",
          exclusiveOn: ["-g", "--go"],
        },
        {
          name: ["-g", "--go"],
          description: "Launch in Expo Go",
          exclusiveOn: ["-d", "--dev-client"],
        },
        clear,
        maxWorkers,
        { name: "--no-dev", description: "Bundle in production mode" },
        { name: "--minify", description: "Minify JavaScript" },
        {
          name: ["-m", "--host"],
          description: "Dev server hosting type (default: lan)",
          exclusiveOn: notHost("-m", "--host"),
          args: {
            name: "type",
            suggestions: [
              { name: "lan", description: "Use the local network" },
              {
                name: "tunnel",
                description: "Use any network through an Expo tunnel",
              },
              {
                name: "localhost",
                description: "Connect to the dev server over localhost",
              },
            ],
          },
        },
        {
          name: "--tunnel",
          description: "Use a tunnel (default: expo)",
          exclusiveOn: notHost("--tunnel"),
          args: {
            name: "provider",
            isOptional: true,
            suggestions: ["expo", "ngrok"],
          },
        },
        {
          name: "--lan",
          description: "Same as --host lan",
          exclusiveOn: notHost("--lan"),
        },
        {
          name: "--localhost",
          description: "Same as --host localhost",
          exclusiveOn: notHost("--localhost"),
        },
        {
          name: "--offline",
          description:
            "Skip network requests and use anonymous manifest signatures",
          exclusiveOn: notHost("--offline"),
        },
        {
          name: "--https",
          description: "Start the dev server with https protocol",
          deprecated: { description: "Use --tunnel" },
        },
        {
          name: "--scheme",
          description: "Custom URI protocol to use when launching an app",
          args: { name: "scheme" },
        },
        port("Port to start the dev server on, not for web"),
        {
          name: "--private-key-path",
          description: "Path to private key for code signing dev manifests",
          args: { name: "path", template: "filepaths" },
        },
      ],
    },
    {
      name: "export",
      description:
        "Export the static files of the app for hosting it on a web server",
      args: dirArg,
      options: [
        help,
        {
          name: "--output-dir",
          description:
            "The directory to export the static files to (default: dist)",
          args: { name: "dir", template: "folders" },
        },
        {
          name: "--dev",
          description:
            "Configure static files for developing locally using a non-https server",
        },
        { name: "--no-minify", description: "Prevent minifying source" },
        {
          name: "--no-bytecode",
          description: "Prevent generating Hermes bytecode",
        },
        maxWorkers,
        {
          name: "--dump-assetmap",
          description: "Emit an asset map for further processing",
        },
        {
          name: ["--no-ssg", "--api-only"],
          description:
            "Skip exporting static HTML files and only export API routes for web",
        },
        {
          name: ["-p", "--platform"],
          description: "Platform to export (default: all)",
          isRepeatable: true,
          args: {
            name: "platform",
            suggestions: ["android", "ios", "web", "all"],
          },
        },
        {
          name: ["-s", "--source-maps"],
          description: "Emit JavaScript source maps (default: false)",
          args: {
            name: "mode",
            isOptional: true,
            suggestions: ["true", "false", "inline", "external"],
          },
        },
        {
          name: "--dump-sourcemap",
          description: "Emit JavaScript source maps",
          deprecated: { description: "Use --source-maps" },
        },
        clear,
        { name: "--experimental-bundle", hidden: true },
        { name: "--unstable-hosted-native", hidden: true },
      ],
    },
    {
      name: "export:web",
      description:
        "Bundle the static files of the web app with Webpack for hosting on a web server",
      deprecated: { description: "Use `expo export --platform web`" },
      args: dirArg,
      options: [
        help,
        { name: "--dev", description: "Bundle in development mode" },
        { name: ["-c", "--clear"], description: "Clear the bundler cache" },
      ],
    },
    {
      name: "export:embed",
      description:
        "Internal: export the JS bundle during a native build for embedding in a native binary",
      hidden: true,
      args: dirArg,
      options: [
        help,
        ...stringOpts([
          ["--entry-file", "path", "Path to the root JS file"],
          ["--transformer", "string", "Custom transformer to use"],
          [
            "--bundle-output",
            "string",
            "File to store the resulting bundle in",
          ],
          ["--bundle-encoding", "string", "Encoding to write the bundle in"],
          ["--sourcemap-output", "string", "File to store the source map in"],
          [
            "--sourcemap-sources-root",
            "string",
            "Path to make source map sources entries relative to",
          ],
          [
            "--assets-dest",
            "string",
            "Directory to store referenced assets in",
          ],
          [
            "--asset-catalog-dest",
            "string",
            "Directory to create an iOS Asset Catalog for images",
          ],
          ["--config", "string", "Path to the CLI configuration file"],
        ]),
        {
          name: "--platform",
          description: "Platform to bundle for (default: ios)",
          args: { name: "platform", suggestions: ["ios", "android"] },
        },
        {
          name: "--dev",
          description:
            "If false, warnings are disabled and the bundle is minified",
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--minify",
          description: "Override whether the bundle is minified",
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        maxWorkers,
        {
          name: "--sourcemap-use-absolute-path",
          description: "Report SourceMapURL using its full path",
        },
        {
          name: "--unstable-transform-profile",
          description: "Transform JS for a specific JS engine",
          args: {
            name: "profile",
            suggestions: ["hermes", "hermes-canary", "default"],
          },
        },
        { name: "--reset-cache", description: "Remove cached files" },
        {
          name: "--eager",
          description: "Eagerly export the bundle with default options",
        },
        {
          name: "--bytecode",
          description: "Export the bundle as Hermes bytecode",
        },
        {
          name: "--skip-server",
          description: "Skip exporting the standalone server",
        },
        {
          name: "--read-global-cache",
          description: "Try to fetch transformed JS code from the global cache",
        },
        { name: ["-v", "--verbose"], description: "Enable debug logging" },
        { name: "--config-cmd", hidden: true, args: { name: "string" } },
      ],
    },
    runIos,
    runAndroid,
    {
      name: "run",
      description: "Run the native app locally",
      options: [help],
      subcommands: [
        { ...runAndroid, name: "android" },
        { ...runIos, name: "ios" },
      ],
    },
    {
      name: "prebuild",
      description:
        "Create native iOS and Android project files for building natively",
      args: dirArg,
      options: [
        help,
        {
          name: "--no-install",
          description: "Skip installing npm packages and CocoaPods",
        },
        {
          name: "--no-clean",
          description:
            "Apply changes to the existing native folders instead of recreating them",
        },
        {
          name: "--clean",
          description: "Recreate the native folders",
          hidden: true,
        },
        ...packageManagers,
        {
          name: "--template",
          description:
            "Project template to clone from: local tar file, npm package or GitHub repo",
          args: { name: "template", template: "filepaths" },
        },
        {
          name: ["-p", "--platform"],
          description: "Platforms to sync (default: all)",
          args: { name: "platform", suggestions: ["all", "android", "ios"] },
        },
        {
          name: "--skip-dependency-update",
          description:
            "Preserve versions of listed packages in package.json (comma separated)",
          args: { name: "dependencies" },
        },
      ],
    },
    {
      name: ["install", "add"],
      description: "Install a module or other package to a project",
      args: {
        name: "package",
        isOptional: true,
        isVariadic: true,
        generators: _gen["npm"],
        debounce: true,
      },
      options: [
        help,
        {
          name: "--check",
          description: "Check which installed packages need to be updated",
          exclusiveOn: ["--fix"],
        },
        {
          name: "--dev",
          description: "Save the dependencies as devDependencies",
        },
        {
          name: "--fix",
          description: "Automatically update any invalid package versions",
          exclusiveOn: ["--check"],
        },
        ...packageManagers,
        {
          name: "--json",
          description: "Output dependency information in JSON format",
          dependsOn: ["--check"],
        },
      ],
    },
    {
      name: "customize",
      description: "Generate static project files",
      args: {
        name: "files",
        isOptional: true,
        isVariadic: true,
        // ponytail: upstream matches the destination path; assumes default public/ and app/ dirs
        suggestions: [
          "babel.config.js",
          "metro.config.js",
          "tsconfig.json",
          "eslint.config.js",
          {
            name: "public/index.html",
            description: "Web index.html (web/index.html with webpack)",
          },
          "webpack.config.js",
          "app/+html.tsx",
          "app/+native-intent.ts",
        ],
      },
      options: [help],
    },
    {
      name: "config",
      description: "Show the project config",
      args: dirArg,
      options: [
        help,
        { name: "--full", description: "Include all project config data" },
        { name: "--json", description: "Output in JSON format" },
        {
          name: ["-t", "--type"],
          description: "Type of config to show",
          args: {
            name: "type",
            suggestions: ["public", "prebuild", "introspect"],
          },
        },
      ],
    },
    {
      name: "serve",
      description: "Host the production server locally",
      args: dirArg,
      options: [
        help,
        {
          name: "--port",
          description: "Port to host the server on",
          args: { name: "number" },
        },
      ],
    },
    {
      name: "lint",
      description:
        "Lint all files in /src, /app, /components directories with ESLint",
      args: {
        name: "path",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        help,
        {
          name: "--ext",
          description:
            "Additional file extensions to lint (default: .js, .jsx, .ts, .tsx, .mjs, .cjs)",
          isRepeatable: true,
          args: { name: "string" },
        },
        {
          name: "--config",
          description: "Custom ESLint config file",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--no-cache",
          description: "Check all files, instead of changes between runs",
        },
        { name: "--fix", description: "Automatically fix problems" },
        {
          name: "--fix-type",
          description: "Types of fixes to apply",
          isRepeatable: true,
          args: {
            name: "string",
            suggestions: ["problem", "suggestion", "layout", "directive"],
          },
        },
        {
          name: "--no-ignore",
          description: "Disable use of ignore files and patterns",
        },
        {
          name: "--ignore-pattern",
          description: "Patterns of files to ignore",
          isRepeatable: true,
          args: { name: "string" },
        },
        { name: "--quiet", description: "Only report errors" },
        {
          name: "--max-warnings",
          description: "Number of warnings to trigger nonzero exit code",
          args: { name: "number" },
        },
      ],
    },
    commandPs,
    commandEvents,
    {
      name: "command",
      description:
        "Inspect recorded command sessions and their structured events",
      options: [help],
      subcommands: [
        { ...commandPs, name: "ps" },
        { ...commandEvents, name: "events" },
      ],
    },
    {
      name: "login",
      description: "Log in to an Expo account",
      options: [
        help,
        {
          name: ["-u", "--username"],
          description: "Username",
          args: { name: "string" },
        },
        {
          name: ["-p", "--password"],
          description: 'Password ("-" for stdin)',
          args: { name: "string" },
        },
        {
          name: "--otp",
          description: "One-time password from your 2FA device",
          args: { name: "string" },
        },
        { name: ["-s", "--sso"], description: "Log in with SSO" },
        {
          name: ["-b", "--browser"],
          description: "Log in with a browser (default)",
          exclusiveOn: ["--no-browser"],
        },
        {
          name: "--no-browser",
          description: "Log in with username and password instead of a browser",
          exclusiveOn: ["-b", "--browser"],
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of an Expo account",
      options: [help],
    },
    {
      name: "register",
      description: "Sign up for a new Expo account",
      options: [help],
    },
    {
      name: "whoami",
      description: "Show the currently authenticated username",
      options: [help],
    },
  ],
};

export default completionSpec;
