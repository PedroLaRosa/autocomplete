// Gatsby CLI (gatsby-cli) v5.16.0 (npm latest, gatsby 5.16.1, last published 2026-06-30; checked 2026-11-19).
// Source: yargs command definitions in the gatsby-cli@5.16.0 npm tarball (lib/create-cli.js, lib/init-starter.js),
// read statically, binary not run. Not included: login/logout/whoami (only registered when
// GATSBY_EXPERIMENTAL_CLOUD_CLI is set) and the hidden build flags --log-pages/--write-to-file.
const hostPortOptions = (
  defaultHost: string,
  defaultPort: string
): Fig.Option[] => [
  {
    name: ["-H", "--host"],
    description: `Set host. Defaults to ${defaultHost}`,
    args: {
      name: "host",
    },
  },
  {
    name: ["-p", "--port"],
    description: `Set port. Defaults to ${defaultPort}`,
    args: {
      name: "port",
    },
  },
  {
    name: ["-o", "--open"],
    description: "Open the site in your (default) browser for you",
  },
];

const prefixPathsOption = (verb: string): Fig.Option => ({
  name: "--prefix-paths",
  description: `${verb} site with link paths prefixed with the pathPrefix value in gatsby-config.js`,
});

const openTracingConfigFileOption: Fig.Option = {
  name: "--open-tracing-config-file",
  description: "Tracer configuration file (OpenTracing compatible)",
  args: { name: "file", template: "filepaths" },
};

const graphqlTracingOption: Fig.Option = {
  name: "--graphql-tracing",
  description:
    "Trace every graphql resolver, may have performance implications",
};

const inspectOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  args: { name: "port", isOptional: true, default: "9229" },
});

const enableDisableOptions = (
  enableDescription: string,
  disableDescription: string
): Fig.Option[] => [
  { name: "--enable", description: enableDescription },
  { name: "--disable", description: disableDescription },
];

const completionSpec: Fig.Spec = {
  name: "gatsby",
  description: "Gatsby CLI",
  subcommands: [
    {
      name: "develop",
      description:
        "Start development server. Watches files, rebuilds, and hot reloads if something changes",
      options: [
        ...hostPortOptions("env.GATSBY_HOST or localhost", "env.PORT or 8000"),
        {
          name: ["-S", "--https"],
          description: "Use HTTPS",
        },
        {
          name: ["-c", "--cert-file"],
          description:
            "Custom HTTPS cert file (also required: --https, --key-file)",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-k", "--key-file"],
          description:
            "Custom HTTPS key file (also required: --https, --cert-file)",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--ca-file",
          description:
            "Custom HTTPS CA certificate file (also required: --https, --cert-file, --key-file)",
          args: { name: "file", template: "filepaths" },
        },
        graphqlTracingOption,
        openTracingConfigFileOption,
        inspectOption("--inspect", "Opens a port for debugging"),
        inspectOption(
          "--inspect-brk",
          "Opens a port for debugging. Will block until debugger is attached"
        ),
      ],
    },
    {
      name: "build",
      description: "Build a Gatsby project",
      options: [
        prefixPathsOption("Build"),
        {
          name: "--no-uglify",
          description:
            "Build site without uglifying JS bundles (for debugging)",
        },
        {
          name: "--profile",
          description:
            "Build site with react profiling (this can add some additional overhead)",
        },
        graphqlTracingOption,
        openTracingConfigFileOption,
        {
          name: "--functions-platform",
          description:
            "The platform bundled functions will execute on. Defaults to current platform or settings provided by used adapter",
          args: { name: "platform" },
        },
        {
          name: "--functions-arch",
          description:
            "The architecture bundled functions will execute on. Defaults to current architecture or settings provided by used adapter",
          args: { name: "arch" },
        },
        {
          name: "--log-pages",
          description: "Log the pages that changes since last build",
          hidden: true,
        },
        {
          name: "--write-to-file",
          description: "Save the log of changed pages for future comparison",
          hidden: true,
        },
      ],
    },
    {
      name: "serve",
      description: "Serve previously built Gatsby site",
      options: [
        ...hostPortOptions("localhost", "9000"),
        prefixPathsOption("Serve"),
        openTracingConfigFileOption,
      ],
    },
    {
      name: "clean",
      description:
        "Wipe the local gatsby environment including built assets and cache",
    },
    {
      name: "info",
      description:
        "Get environment information for debugging and issue reporting",
      options: [
        {
          name: ["-C", "--clipboard"],
          description:
            "Automagically copy environment information to clipboard",
        },
      ],
    },
    {
      name: "feedback",
      description: "Opt in or out of future feedback requests",
      options: enableDisableOptions(
        "Opt into future feedback requests",
        "Opt out of future feedback requests"
      ),
    },
    {
      name: "plugin",
      description: "Useful commands relating to Gatsby plugins",
      args: {
        name: "cmd",
        suggestions: [
          { name: "docs", description: "Documentation about plugins" },
          { name: "ls", description: "List the plugins of the site" },
        ],
      },
    },
    {
      name: "repl",
      description: "Get a node repl with context of Gatsby environment",
    },
    {
      name: "new",
      description: "Create new Gatsby project",
      args: [
        {
          name: "rootPath",
          description: "Directory to create the new site in",
          isOptional: true,
          template: "folders",
        },
        {
          name: "starter",
          description: "Starter to use: a git URL or a local path",
          isOptional: true,
          template: ["filepaths", "folders"],
        },
      ],
    },
    {
      name: "telemetry",
      description:
        "Enable or disable Gatsby anonymous analytics collection (telemetry is no longer gathered and always disabled)",
      options: enableDisableOptions(
        "Enable telemetry (default)",
        "Disable telemetry"
      ),
    },
    {
      name: "options",
      description: "View or set your gatsby-cli configuration settings",
      args: [
        {
          name: "cmd",
          description: "Configure your package manager",
          isOptional: true,
          suggestions: ["set"],
        },
        {
          name: "key",
          description: "Set the package manager `gatsby new` is using",
          isOptional: true,
          suggestions: ["pm", "package-manager"],
        },
        {
          name: "value",
          description: "Set package manager as `npm` or `yarn`",
          isOptional: true,
          suggestions: ["npm", "yarn"],
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description:
        "Show the version of the Gatsby CLI and the Gatsby package in the current project",
    },
    {
      name: "--verbose",
      description: "Turn on verbose output",
      isPersistent: true,
    },
    {
      name: ["--no-color", "--no-colors"],
      description: "Turn off the color in output",
      isPersistent: true,
    },
    {
      name: "--json",
      description: "Turn on the JSON logger",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
