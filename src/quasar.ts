// Quasar CLI: @quasar/cli v5.0.10 (npm latest, 2026-11-19), project commands from @quasar/app-vite v3.10.4 and @quasar/app-webpack v4.4.5 (npm latest). Source: package tarballs from the npm registry, read bin/ and lib/cmd/ (parseArgs definitions and help texts), not executed.
// Global @quasar/cli only knows info, upgrade, serve and help (`create` now just prints scaffolding instructions); dev, build, prepare, clean, new, mode, inspect, ext, run and describe come from the project-local app package and only work inside a Quasar project.
// Options marked "app-webpack only" / "app-vite only" exist in one of the two app packages.
const appModes = [
  "spa",
  "ssr",
  "ssg",
  "pwa",
  "cordova",
  "capacitor",
  "electron",
  "bex",
];

const noColorOption: Fig.Option = {
  name: "--no-color",
  description: "Disable colored output",
  isPersistent: true,
};

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Displays this message",
  isPersistent: true,
};

const modeOption = (description: string, extra: string[] = []): Fig.Option => ({
  name: ["-m", "--mode"],
  description,
  args: {
    name: "mode",
    default: "spa",
    suggestions: [...extra, ...appModes],
  },
});

const completionSpec: Fig.Spec = {
  name: "quasar",
  description: "Quasar Framework CLI",
  options: [
    helpOption,
    noColorOption,
    {
      name: ["-v", "--version"],
      description: "Print Quasar CLI version",
    },
  ],
  subcommands: [
    {
      name: "create",
      description:
        "Prints instructions for scaffolding a project (use `npm init quasar@latest` instead)",
      deprecated: true,
    },
    {
      name: ["info", "i"],
      description:
        "Display info about your machine (and your App if in a project folder)",
    },
    {
      name: "upgrade",
      description:
        "Check (and optionally) upgrade Quasar packages from a Quasar project folder",
      options: [
        {
          name: ["--install", "-i"],
          description: "Skip the install prompt and just do it",
        },
        {
          name: ["--prerelease", "-p"],
          description: "Allow pre-release versions (alpha/beta/rc)",
        },
        {
          name: ["--major", "-m"],
          description: "Allow newer major versions (breaking changes)",
        },
        {
          name: ["--registry", "-r"],
          description:
            "NPM registry URL (default is taken from your machine's npm config)",
          args: {
            name: "url",
          },
        },
      ],
    },
    {
      name: "serve",
      description: "Create an ad-hoc server on App's distributables",
      args: {
        name: "path",
        template: "folders",
        description: "Path to serve",
        isOptional: true,
      },
      options: [
        {
          name: ["--port", "-p"],
          description: "Port to use (default 4000)",
          args: {
            name: "port",
          },
        },
        {
          name: ["--hostname", "-H"],
          description: "Address to use (default 0.0.0.0)",
          args: {
            name: "hostname",
          },
        },
        {
          name: ["--silent", "-s"],
          description: "Suppress log message",
        },
        {
          name: "--cors",
          description: "Enable CORS",
        },
        {
          name: ["--open", "-o"],
          description: "Open browser window after starting",
        },
        {
          name: ["--index", "-i"],
          description: "Index url path (default index.html)",
          args: {
            name: "path",
          },
        },
        {
          name: "--history",
          description:
            "Use history mode: all requests fall back to /index.html or whatever --index specifies",
        },
        {
          name: "--https",
          description: "Enable HTTPS",
        },
        {
          name: ["--cert", "-C"],
          description: "Path to SSL cert file (optional)",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: ["--key", "-K"],
          description: "Path to SSL key file (optional)",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: ["--proxy", "-P"],
          description: "Path to proxy definition file (optional)",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: ["dev", "d"],
      description: "Start a dev server for your App (inside a Quasar project)",
      options: [
        modeOption("App mode (default spa)", ["ios", "android"]),
        {
          name: ["--target", "-T"],
          description:
            "App target: android or ios for Capacitor/Cordova, chrome or firefox for BEX",
          args: {
            name: "target",
            suggestions: ["android", "ios", "chrome", "firefox"],
          },
        },
        {
          name: ["--port", "-p"],
          description: "A port number on which to start the application",
          args: {
            name: "port",
          },
        },
        {
          name: ["--hostname", "-H"],
          description: "A hostname to use for serving the application",
          args: {
            name: "hostname",
          },
        },
        {
          name: ["--devtools", "-d"],
          description: "Open remote Vue Devtools",
        },
        {
          name: ["--emulator", "-e"],
          description:
            "Emulator name for Cordova mode, e.g. iPhone-X (app-webpack only)",
          args: {
            name: "emulator",
          },
        },
        {
          name: ["--ide", "-i"],
          description:
            "Open IDE (Android Studio / XCode) instead of letting Cordova boot up the emulator (app-webpack only)",
        },
      ],
    },
    {
      name: ["build", "b"],
      description: "Build your app for production (inside a Quasar project)",
      options: [
        modeOption("App mode (default spa)"),
        {
          name: ["--target", "-T"],
          description:
            "App target: android/ios (Cordova, Capacitor), darwin/mac/win32/win/linux/mas/all (Electron), chrome/firefox (BEX)",
          args: {
            name: "target",
            suggestions: [
              "android",
              "ios",
              "darwin",
              "mac",
              "win32",
              "win",
              "linux",
              "mas",
              "all",
              "chrome",
              "firefox",
            ],
          },
        },
        {
          name: ["--publish", "-P"],
          description:
            "Also trigger publishing hooks (if any are specified), with electron-builder it takes a publish option",
          args: {
            name: "publish",
            isOptional: true,
            suggestions: ["onTag", "onTagOrDraft", "always", "never"],
          },
        },
        {
          name: ["--debug", "-d"],
          description: "Build for debugging purposes",
        },
        {
          name: ["--skip-pkg", "-s"],
          description:
            "Build only UI (skips creating Cordova/Capacitor/Electron executables or the BEX zip file)",
        },
        {
          name: "--no-summary",
          description:
            "Don't output build summary at the end of the process (app-vite only)",
        },
        {
          name: ["--ide", "-i"],
          description:
            "Cordova and Capacitor only: open IDE (Android Studio / XCode) instead of a terminal-only build",
        },
        {
          name: ["--bundler", "-b"],
          description: "Electron only: bundler to use",
          args: {
            name: "bundler",
            suggestions: [
              {
                name: "packager",
                description: "The @electron/packager bundler (default)",
              },
              {
                name: "builder",
                description: "The electron-builder bundler",
              },
            ],
          },
        },
        {
          name: ["--arch", "-A"],
          description:
            "Electron only: app architecture (mips64el is only available with the packager bundler)",
          args: {
            name: "arch",
            suggestions: ["ia32", "x64", "armv7l", "arm64", "mips64el", "all"],
          },
        },
      ],
    },
    {
      name: ["prepare", "p"],
      description:
        "Prepare the app for linting, type-checking and IDE integration",
      options: [
        {
          name: ["--silent", "-s"],
          description: "Suppress the output",
        },
      ],
    },
    {
      name: ["clean", "c"],
      description: "Clean dev/build cache, /dist folder & entry points",
      options: [
        {
          name: ["--entry", "-e"],
          description: "Cleans generated entry points only",
        },
        {
          name: ["--cache", "-c"],
          description: "Cleans dev/build cache only",
        },
        {
          name: ["--dist", "-d"],
          description: "Cleans /dist folder only",
        },
        {
          name: ["--qconf", "-q"],
          description: "Cleans temporary compiled quasar.config files",
        },
      ],
    },
    {
      name: ["new", "n"],
      description: "Quickly scaffold page/layout/component/... vue file",
      options: [
        {
          name: ["--format", "-f"],
          description:
            "Use a supported format for the template (inferred automatically for your project)",
          args: {
            name: "format",
            suggestions: ["js", "ts"],
          },
        },
      ],
      args: [
        {
          name: "type",
          suggestions: [
            "page",
            "layout",
            "component",
            "boot",
            "store",
            "ssrmiddleware",
            "p",
            "l",
            "c",
            "b",
            "s",
          ],
        },
        {
          name: "file-name",
          description: "Name of the file to scaffold",
          isVariadic: true,
        },
      ],
    },
    {
      name: ["mode", "m"],
      description: "Add/remove Quasar Modes for your App",
      options: [
        {
          name: ["--yes", "-y"],
          description:
            'Skips the "Are you sure?" question when removing a Quasar mode',
        },
        {
          name: ["--webserver", "-w"],
          description:
            "Adding SSR mode: the production webserver to scaffold for (default hono, app-vite only)",
          args: {
            name: "webserver",
            suggestions: ["hono", "fastify", "express", "koa"],
          },
        },
        {
          name: "--filename-based-routing",
          description:
            "Adding SSG mode: scaffold for filename-based routing (app-vite only)",
        },
        {
          name: "--app-id",
          description:
            "Adding Cordova or Capacitor mode: the application id to scaffold with (app-vite only)",
          args: {
            name: "id",
          },
        },
        {
          name: "--app-name",
          description:
            "Adding Capacitor mode: the application display name to scaffold with (app-vite only)",
          args: {
            name: "name",
          },
        },
      ],
      args: [
        {
          name: "action",
          isOptional: true,
          suggestions: ["add", "remove"],
        },
        {
          name: "mode",
          isOptional: true,
          suggestions: appModes.filter((mode) => mode !== "spa"),
        },
      ],
    },
    {
      name: "inspect",
      description:
        "Inspect the bundler config used under the hood (Vite or webpack)",
      options: [
        {
          name: ["--cmd", "-c"],
          description: "Quasar command (default dev)",
          args: {
            name: "command",
            suggestions: ["dev", "build"],
          },
        },
        modeOption("App mode (default spa)"),
        {
          name: ["--depth", "-d"],
          description: "Number of levels deep (default 2)",
          args: {
            name: "depth",
          },
        },
        {
          name: ["--path", "-p"],
          description: "Path of config in dot notation, e.g. build.outDir",
          args: {
            name: "path",
          },
        },
        {
          name: ["--thread", "-t"],
          description: "Display only one specific app mode config thread",
          args: {
            name: "thread",
          },
        },
      ],
    },
    {
      name: ["ext", "e"],
      description: "Manage Quasar App Extensions",
      subcommands: [
        {
          name: "add",
          description: "Add Quasar App Extension",
          args: { name: "ext-id" },
        },
        {
          name: "remove",
          description: "Remove Quasar App Extension",
          args: { name: "ext-id" },
        },
        {
          name: "invoke",
          description:
            "Add Quasar App Extension, but skip installing the npm package (assumes it is already installed)",
          args: { name: "ext-id" },
        },
        {
          name: "uninvoke",
          description:
            "Remove Quasar App Extension, but skip uninstalling the npm package",
          args: { name: "ext-id" },
        },
      ],
    },
    {
      name: ["run", "r"],
      description:
        "Run specific command provided by an installed Quasar App Extension",
      args: [
        {
          name: "ext-id",
          description: "Extension id",
        },
        {
          name: "command",
          description: "Command provided by the extension",
        },
        {
          name: "args",
          description: "Arguments passed to the extension command",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "describe",
      description: "Describe a Quasar API (component)",
      options: [
        {
          name: ["--filter", "-f"],
          description: "Filters the API",
          args: {
            name: "filter",
          },
        },
        {
          name: ["--props", "-p"],
          description: "Displays the API props",
        },
        {
          name: ["--slots", "-s"],
          description: "Displays the API slots",
        },
        {
          name: ["--events", "-e"],
          description: "Displays the API events",
        },
        {
          name: ["--methods", "-m"],
          description: "Displays the API methods",
        },
        {
          name: ["--computedProps", "-c"],
          description: "Displays the API computed props",
        },
        {
          name: ["--value", "-v"],
          description: "Displays the API value",
        },
        {
          name: ["--arg", "-a"],
          description: "Displays the API arg",
        },
        {
          name: ["--modifiers", "-M"],
          description: "Displays the API modifiers",
        },
        {
          name: ["--injection", "-i"],
          description: "Displays the API injection",
        },
        {
          name: ["--quasar", "-q"],
          description: "Displays the API quasar conf options",
        },
        {
          name: ["--docs", "-d"],
          description: "Opens the docs API URL",
        },
      ],
      args: {
        name: "component",
        description:
          'Component, directive or Quasar plugin (or "list" to list the API entries)',
      },
    },
    {
      name: "help",
      description: "Displays help",
    },
  ],
};
export default completionSpec;
