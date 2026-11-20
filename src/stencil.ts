// Stencil v4.45.4 (npm @stencil/core "latest", 2026-11-19).
// Source: the shipped CLI in @stencil/core 4.45.4 (cli/index.cjs: task dispatch, taskHelp, flag lists) cross-checked with docs/config/cli.md of stenciljs/site.
// Not covered: v5.0.0-rc.* (pre-release: adds init/add/migrate, drops the test task) and the Jest flags that `stencil test` passes through.
const portOption: Fig.Option = {
  name: ["--port", "-p"],
  description: "Port for the Integrated Dev Server",
  args: { name: "port" },
};

const addressOption: Fig.Option = {
  name: "--address",
  description: "Address the Integrated Dev Server listens on",
  args: { name: "address" },
};

const completionSpec: Fig.Spec = {
  name: "stencil",
  description: "CLI to build Stencil projects and generate components",
  icon: "https://stenciljs.com/assets/icon/favicon.ico",
  subcommands: [
    {
      name: "build",
      description: "Build components for development or production",
      options: [
        {
          name: "--dev",
          description: "Development build",
        },
        {
          name: "--prod",
          description: "Runs a production build",
        },
        {
          name: "--watch",
          description: "Rebuild when files update",
        },
        {
          name: "--serve",
          description: "Start the dev-server",
        },
        portOption,
        addressOption,
        {
          name: "--no-open",
          description: "Do not automatically open the browser window",
        },
        {
          name: "--ssr",
          description: "Server-side render each page served by the dev server",
        },
        {
          name: "--prerender",
          description: "Prerender the application",
        },
        {
          name: "--docs",
          description: "Generate component readme.md docs",
        },
        {
          name: "--docs-json",
          description: "Also write a docs-json file to the given path",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--esm",
          description: "Build the dist output even in a development build",
        },
        {
          name: "--service-worker",
          description:
            "Generate the www service worker in a development build, which skips it otherwise",
        },
        {
          name: "--stats",
          description:
            "Write stats, optional file path (default: stencil-stats.json)",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--log",
          description: "Write stencil-build.log file",
        },
        {
          name: "--no-cache",
          description: "Disables using the cache",
        },
        {
          name: ["--max-workers", "-w"],
          description: "Max number of workers the compiler should use",
          args: {
            name: "workers",
            description: "Number of workers",
          },
        },
        {
          name: "--profile",
          description:
            "Add performance marks to the build, for profiling components in the browser's developer tools",
        },
      ],
    },
    {
      name: "docs",
      description:
        "Generate the documentation output targets without building anything else",
      options: [
        {
          name: "--docs-json",
          description: "Also write a docs-json file to the given path",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--watch",
          description: "Regenerate the documentation when source files change",
        },
      ],
    },
    {
      name: ["generate", "g"],
      description: "Bootstrap components",
      args: {
        isOptional: true,
        name: "name",
        description:
          "Tag name of the new component (must contain dash (-)), optionally prefixed with folders",
      },
    },
    {
      name: "help",
      description: "Show help for the Stencil CLI",
    },
    {
      name: "info",
      description: "Print details about the environment and Stencil versions",
    },
    {
      name: "prerender",
      description:
        "Prerender the www output with an already built hydrate app script",
      args: {
        name: "hydrate app script",
        description: "Path to the built hydrate app script",
        template: "filepaths",
      },
    },
    {
      name: "serve",
      description: "Start the dev server without building or watching",
      options: [
        {
          name: "--root",
          description: "Directory to serve, defaults to the current directory",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        portOption,
        addressOption,
        {
          name: "--open",
          description: "Open the server URL in the browser",
        },
      ],
    },
    {
      name: "telemetry",
      description: "Opt in or out of telemetry",
      args: {
        name: "state",
        suggestions: [
          {
            name: "off",
            description: "Disable sharing anonymous usage data",
          },
          {
            name: "on",
            description: "Enable sharing anonymous usage data",
          },
        ],
      },
    },
    {
      name: "test",
      description:
        "Run unit and end-to-end tests (integrated testing is deprecated and removed in Stencil v5, use @stencil/vitest or @stencil/playwright)",
      deprecated: true,
      options: [
        {
          name: "--spec",
          description: "Run unit tests with Jest",
        },
        {
          name: "--e2e",
          description: "Run e2e tests with Puppeteer",
        },
        {
          name: "--screenshot",
          description: "Run screenshot visual diff tests (experimental)",
        },
        {
          name: "--update-screenshot",
          description: "Update the stored screenshots",
        },
        {
          name: "--no-build",
          description: "Skips build process before running the tests",
        },
        {
          name: "--headless",
          description: "Run the e2e browser headless",
          args: {
            name: "mode",
            isOptional: true,
            suggestions: ["shell"],
          },
        },
        {
          name: "--devtools",
          description: "Open the browser devtools while running e2e tests",
        },
      ],
    },
    {
      name: "version",
      description: "Print the current Stencil version",
    },
  ],
  options: [
    {
      name: ["--config", "-c"],
      description: "Set stencil config file",
      isPersistent: true,
      args: {
        name: "config file",
        template: "filepaths",
      },
    },
    {
      name: "--log-level",
      description: "Set how much is logged",
      isPersistent: true,
      args: {
        name: "level",
        suggestions: ["debug", "info", "warn", "error"],
      },
    },
    {
      name: "--debug",
      description: "Set the log level to debug",
      isPersistent: true,
    },
    {
      name: "--verbose",
      description:
        "Logs additional information about each step (same as --debug)",
      isPersistent: true,
    },
    {
      name: "--ci",
      description:
        "Run using recommended settings for a Continuous Integration (CI) environment",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Display the help output explaining the different flags",
    },
    {
      name: ["--version", "-v"],
      description: "Prints the current Stencil version",
    },
  ],
};
export default completionSpec;
