// start-storybook v6.5.16 (npm @storybook/core-server + @storybook/react, last release of the 6.x line that shipped this binary; current Storybook is v10.6.7, 2026-11-20).
// Source: read statically, not run: @storybook/core-server@6.5.16 dist/cjs/cli/{dev,prod,utils}.js (commander option definitions),
// @storybook/react@6.5.16 bin/index.js + bin/build.js, and docs/api/cli-options.md + MIGRATION.md at tag v6.5.16.
// Upstream removed the start-storybook and build-storybook binaries in Storybook 7.0 (MIGRATION.md at v10.6.7, "start-storybook / build-storybook binaries removed");
// current releases use `storybook dev` / `storybook build` instead, which this spec does not cover.
// Shared options below are the ones accepted by both binaries; the https/ssl/smoke-test/ci flags are dev-server only.
export const storybookCommonOptions: Fig.Option[] = [
  {
    name: "--help",
    description: "Display usage information",
  },
  {
    name: ["-V", "--version"],
    description: "Display the version number",
  },
  {
    name: ["-s", "--static-dir"],
    description:
      "Directory where to load static files from, comma-separated list. Deprecated: use staticDirs in .storybook/main.js",
    deprecated: true,
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: ["-c", "--config-dir"],
    description: "Directory where to load Storybook configurations from",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: "--loglevel",
    description: "Controls level of logging during build",
    args: {
      name: "level",
      suggestions: ["silly", "verbose", "info", "warn", "error", "silent"],
      default: "info",
    },
  },
  {
    name: "--quiet",
    description: "Suppress verbose build output",
  },
  {
    name: "--no-dll",
    description: "Do not use dll reference (no-op, deprecated)",
    deprecated: true,
  },
  {
    name: "--docs-dll",
    description: "Use Docs dll reference (legacy, deprecated)",
    deprecated: true,
  },
  {
    name: "--ui-dll",
    description: "Use UI dll reference (legacy, deprecated)",
    deprecated: true,
  },
  {
    name: "--debug-webpack",
    description: "Display final webpack configurations for debugging purposes",
  },
  {
    name: "--webpack-stats-json",
    description: "Write Webpack Stats JSON to disk",
    args: {
      name: "directory",
      template: "folders",
      isOptional: true,
    },
  },
  {
    name: "--preview-url",
    description:
      "Disable the default Storybook preview and use your own instead",
    args: {
      name: "url",
    },
  },
  {
    name: "--force-build-preview",
    description: "Build the preview iframe even if you are using --preview-url",
  },
  {
    name: "--modern",
    description: "Use modern browser modules",
  },
  {
    name: "--no-manager-cache",
    description:
      "Disables Storybook's manager caching mechanism. NOTE: this flag disables the internal caching of Storybook and can severely impact your Storybook loading time, so only use it when you need to refresh Storybook's UI, such as when editing themes",
  },
  {
    name: "--disable-telemetry",
    description: "Disable sending telemetry",
  },
  {
    name: "--enable-crash-reports",
    description: "Enable sending crash reports to telemetry data",
  },
];

const completionSpec: Fig.Spec = {
  name: "start-storybook",
  description:
    "Storybook start CLI tools (removed in Storybook 7, use `storybook dev`)",
  options: [
    {
      name: ["-p", "--port"],
      description: "Port to run Storybook",
      args: {
        name: "port",
      },
    },
    {
      name: ["-h", "--host"],
      description: "Host to run Storybook",
      args: {
        name: "host",
      },
    },
    {
      name: "--https",
      description:
        "Serve Storybook over HTTPS. Note: You must provide your own certificate information",
      dependsOn: ["--ssl-cert", "--ssl-key"],
    },
    {
      name: "--ssl-ca",
      description:
        "Provide an SSL certificate authority. (Optional with --https, required if using a self-signed certificate)",
      args: {
        name: "ca",
      },
    },
    {
      name: "--ssl-cert",
      description: "Provide an SSL certificate. (Required with --https)",
      args: {
        name: "cert",
      },
    },
    {
      name: "--ssl-key",
      description: "Provide an SSL key. (Required with --https)",
      args: {
        name: "key",
      },
    },
    {
      name: "--smoke-test",
      description: "Exit after successful start",
    },
    {
      name: "--ci",
      description: "CI mode (skip interactive prompts, don't open browser)",
    },
    {
      name: "--no-open",
      description: "Do not open Storybook automatically in the browser",
    },
    {
      name: "--no-version-updates",
      description: "Suppress update check",
    },
    {
      name: "--no-release-notes",
      description:
        "Suppress automatic redirects to the release notes after upgrading",
    },
    {
      name: "--docs",
      description: "Starts Storybook in documentation mode",
    },
    ...storybookCommonOptions,
  ],
};

export default completionSpec;
