// Magnolia CLI v5.3.0 (npm @magnolia/cli latest dist-tag, published 2025-12-04, 2026-11-20). Source: read statically
// (nothing was executed) from the npm tarballs of @magnolia/cli 5.3.0 (built-in commands
// add-plugin, init, tab-completion, watch-mode; commander 12 definitions in dist/), the two bundled default plugins
// @magnolia/cli-jumpstart-plugin 1.2.1 and @magnolia/cli-generate-plugin 1.0.3 (bin/update-plugins.js keeps them on
// latest), and the optional official plugins start 1.0.5, create-light-module 1.0.3, create-app 1.2.1,
// create-block 1.0.2, create-component 1.4.0, create-content-type 1.1.1, create-model 1.0.3, create-page 1.4.0,
// create-rest-endpoint 2.0.1 and create-virtual-uri 1.0.2 (option definitions in dist/ and lib/locales).
// v4 commands that no longer exist in v5 (add-availability, customize-local-config, install, search, tab-completion
// install|uninstall, the v4 flags) were removed; v4 stays on the npm "legacy" tag (4.0.18).
// jumpstart flags follow the plugin code (-pt, -at), not its README which still lists -p. Upstream repo
// gitlab.magnolia-platform.com/magnolia-cli/npm-cli was not reachable from the sandbox.
const lightModuleOption = (target: string): Fig.Option => ({
  name: ["-lm", "--light-module"],
  description: `Set the light module for the ${target}; defaults to the directory specified in mgnl.config.js file`,
  args: { name: "name", isOptional: true },
});

const prototypeOption = (target: string): Fig.Option => ({
  name: ["-p", "--prototype"],
  description: `Select a prototype for ${target} creation`,
  args: { name: "name", isOptional: true },
});

const prototypeDirOption = (target: string): Fig.Option => ({
  name: ["-pd", "--prototype-dir"],
  description: `Use the specified path to the custom prototype templates directory as the prototype source for ${target} creation`,
  args: { name: "path", template: "folders" },
});

const sourceOption = (description: string): Fig.Option => ({
  name: ["-s", "--source"],
  description,
  args: { name: "path", template: "filepaths", isVariadic: true },
});

// Every plugin command registered by the CLI gets a "-v, --version" option
const withVersionOption = (command: Fig.Subcommand): Fig.Subcommand => ({
  ...command,
  options: [
    ...(command.options ?? []),
    { name: ["-v", "--version"], description: "Output the version number" },
  ],
});

// Plugins that can be installed with "mgnl add-plugin" (generate-plugin and jumpstart are preinstalled)
const officialPlugins: Fig.Suggestion[] = [
  { name: "@magnolia/cli-start-plugin", description: "Adds start" },
  {
    name: "@magnolia/cli-create-app-plugin",
    description: "Adds create-app",
  },
  {
    name: "@magnolia/cli-create-block-plugin",
    description: "Adds create-block",
  },
  {
    name: "@magnolia/cli-create-component-plugin",
    description: "Adds create-component",
  },
  {
    name: "@magnolia/cli-create-content-type-plugin",
    description: "Adds create-content-type",
  },
  {
    name: "@magnolia/cli-create-light-module-plugin",
    description: "Adds create-light-module",
  },
  {
    name: "@magnolia/cli-create-model-plugin",
    description: "Adds create-model",
  },
  {
    name: "@magnolia/cli-create-page-plugin",
    description: "Adds create-page",
  },
  {
    name: "@magnolia/cli-create-rest-endpoint-plugin",
    description: "Adds create-rest-endpoint",
  },
  {
    name: "@magnolia/cli-create-virtual-uri-plugin",
    description: "Adds create-virtual-uri",
  },
];

const completionSpec: Fig.Spec = {
  name: "mgnl",
  description: "CLI for light development of Magnolia projects",
  icon: "https://avatars.githubusercontent.com/u/25686615?s=200&v=4",
  subcommands: [
    // Built-in commands and the plugins preinstalled with @magnolia/cli
    withVersionOption({
      name: "jumpstart",
      description:
        "Download and set up a new headless or freemarker-based project with Magnolia webapp",
      args: {
        name: "name",
        description:
          "Project directory name; if provided, the project is created in this directory",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: ["-m", "--magnolia"],
          description:
            "Set the Magnolia version; defaults to the latest stable version",
          args: { name: "version" },
        },
        {
          name: ["-s", "--snapshot"],
          description:
            "Download the latest snapshot version of the specified or latest stable webapp",
        },
        {
          name: ["-t", "--template"],
          description: "Choose a template from available project templates",
          args: { name: "name" },
        },
        {
          name: ["-pt", "--project-templates"],
          description: "Specify the source to load project templates from",
          args: { name: "source", template: "filepaths" },
        },
        {
          name: ["-at", "--apache-tomcat"],
          description:
            "Override the Apache Tomcat version; defaults to the version determined by the Magnolia version",
          args: { name: "version" },
        },
      ],
    }),
    withVersionOption({
      name: "generate-plugin",
      description: "Generate a basic structure for a new CLI plugin",
      options: [
        {
          name: ["-n", "--name"],
          description: "Set the name of the plugin",
          args: { name: "name" },
        },
        {
          name: ["-c", "--class"],
          description: "Set the name of the plugin's main class",
          args: { name: "name" },
        },
      ],
    }),
    withVersionOption({
      name: "add-plugin",
      description: "Install and configure plugins for a project",
      args: [
        {
          name: "plugin",
          description:
            "The plugin to install: npm package name, tarball, folder, HTTP URL or git URL",
          suggestions: officialPlugins,
          template: ["filepaths", "folders"],
        },
        {
          name: "pluginArgs",
          description:
            "JSON object passed to the plugin constructor when it is registered in mgnl.config.js",
          isOptional: true,
        },
      ],
    }),
    withVersionOption({
      name: "init",
      description:
        "Initialize an existing project for Magnolia CLI v5 and plugin usage",
    }),
    withVersionOption({
      name: "tab-completion",
      description: "Handle tab-completion for this project",
      options: [
        {
          name: ["-e", "--enable"],
          description: "Enable tab-completion for this project",
        },
        {
          name: ["-d", "--disable"],
          description: "Disable tab-completion for this project",
        },
        {
          name: ["-u", "--uninstall"],
          description:
            "Uninstall tab-completion script and configuration, warning this will remove the functionality system-wide",
        },
        {
          name: ["-r", "--reinstall"],
          description:
            "Reinstall tab-completion script, will ask you again what type you want to install",
        },
        {
          name: ["-rc", "--reset-cache"],
          description: "Remove tab-completion cache files from tmp folder",
          hidden: true,
        },
      ],
    }),
    withVersionOption({
      name: "watch-mode",
      description: "Watch for file changes and trigger plugins automatically",
      options: [
        {
          name: ["-uc", "--use-config"],
          description:
            "Specify plugin configurations in format: <plugin-name>[::<watch-path1>...], for example CreateModelPlugin::**/dialogs/**/*.yaml",
          args: {
            name: "configs",
            isOptional: true,
            isVariadic: true,
            suggestions: [
              "CreateModelPlugin",
              "CreateRestEndpointPlugin",
              "CreateModelPlugin::**/dialogs/**/*.yaml",
              "CreateRestEndpointPlugin::**/apps/*.yaml::**/dialogs/**/*.yaml",
            ],
          },
        },
      ],
    }),
    // Commands of optional official plugins (install them with "mgnl add-plugin <package>")
    withVersionOption({
      name: "start",
      description: "Start up Magnolia and display the logs",
      options: [
        {
          name: ["-t", "--tomcat"],
          description:
            'Set the path to the "apache-tomcat" directory or the directory containing it; defaults to the current working directory',
          args: { name: "path", isOptional: true, template: "folders" },
        },
        {
          name: ["-lmp", "--light-modules-path"],
          description:
            'Set the path to the light modules directory; defaults to mgnl.config.js or "magnolia.resources.dir" in "magnolia.properties"',
          args: { name: "path", isOptional: true, template: "folders" },
        },
      ],
    }),
    withVersionOption({
      name: "create-light-module",
      description: "Create a light module with an empty folder structure",
      args: {
        name: "name",
        description:
          "The name of the new light module; avoid spaces and special characters since this name is used as folder name",
      },
      options: [
        {
          name: ["-d", "--directories"],
          description:
            'Create specific directories within the light module, for example "-d A D" generates "apps" and "decorations" folders',
          args: {
            name: "directories",
            isOptional: true,
            isVariadic: true,
            suggestions: [
              { name: "A", description: "Apps" },
              { name: "B", description: "Blocks" },
              { name: "C", description: "Content types" },
              { name: "D", description: "Decorations" },
              { name: "DIA", description: "Dialogs" },
              { name: "I", description: "I18n" },
              { name: "INC", description: "Includes" },
              { name: "M", description: "Message views" },
              { name: "R", description: "REST endpoints" },
              { name: "T", description: "Templates" },
              { name: "THM", description: "Themes" },
              { name: "V", description: "Virtual URI mappings" },
              { name: "W", description: "Web resources" },
            ],
          },
        },
        {
          name: ["-md", "--module-descriptor"],
          description:
            "Specify the module version of the light module; defaults to 1.0.0",
          args: { name: "version" },
        },
        {
          name: ["-lmp", "--light-modules-path"],
          description:
            "Set the directory path for the new light module; defaults to the directory specified in mgnl.config.js file",
          args: { name: "path", isOptional: true, template: "folders" },
        },
        prototypeDirOption("light module"),
        prototypeOption("light module"),
      ],
    }),
    withVersionOption({
      name: "create-app",
      description: "Create an app in a light module",
      args: {
        name: "name",
        description: "The name of the app (recommended plural)",
      },
      options: [
        {
          name: ["-ct", "--content-type"],
          description:
            "Configure the content type by creating a new type or choosing an existing one (recommended singular)",
          args: { name: "name" },
        },
        lightModuleOption("app"),
        prototypeDirOption("app"),
        prototypeOption("app"),
      ],
    }),
    withVersionOption({
      name: "create-block",
      description: "Create a block in a light module",
      args: { name: "name", description: "The name of the block file" },
      options: [
        lightModuleOption("block"),
        prototypeDirOption("block"),
        prototypeOption("block"),
      ],
    }),
    withVersionOption({
      name: "create-component",
      description: "Create a headless or freemarker-based component",
      args: {
        name: "name",
        description: "The name of the component",
        isOptional: true,
      },
      options: [
        {
          name: ["-a", "--available"],
          description:
            "Specify the page to make the component available to; format: [lm-name:]page-template[@area]; the area defaults to 'main'",
          args: {
            name: "[lm-name:]page-template[@area]",
            isOptional: true,
          },
        },
        lightModuleOption("component template"),
        prototypeOption("component"),
      ],
    }),
    withVersionOption({
      name: "create-content-type",
      description: "Create a content type in a light module",
      args: {
        name: "name",
        description: "The name of the content type (recommended singular)",
      },
      options: [
        {
          name: ["-a", "--app"],
          description:
            "Configure the app and associated workspace by creating a new app or choosing an existing one (recommended plural)",
          args: { name: "name", isOptional: true },
        },
        lightModuleOption("content type"),
        prototypeDirOption("content type"),
        prototypeOption("content-type"),
      ],
    }),
    withVersionOption({
      name: "create-model",
      description: "Create a model",
      args: { name: "name", description: "The name of the model" },
      options: [
        lightModuleOption("model"),
        sourceOption("Source file path for watch mode processing"),
      ],
    }),
    withVersionOption({
      name: "create-page",
      description: "Create a headless or freemarker-based page",
      args: {
        name: "name",
        description: "The name of the page",
        isOptional: true,
      },
      options: [lightModuleOption("page template"), prototypeOption("page")],
    }),
    withVersionOption({
      name: "create-rest-endpoint",
      description: "Create a rest endpoint",
      args: {
        name: "workspace",
        description:
          "The workspace name for the rest endpoint file; if not provided, processes all workspaces",
        isOptional: true,
      },
      options: [
        {
          name: ["-d", "--destination"],
          description:
            'Specify the destination (subdirectory) of the rest endpoint file; defaults to "/delivery" or to value specified in mgnl.config.js file',
          args: { name: "path", isOptional: true },
        },
        lightModuleOption("rest endpoint"),
        sourceOption(
          "Pass file path(s) to detect workspaces and generate endpoints accordingly"
        ),
      ],
    }),
    withVersionOption({
      name: "create-virtual-uri",
      description: "Create a virtual URI mapping in a light module",
      args: {
        name: "name",
        description:
          "The name of the virtual URI mapping file; avoid slash characters",
      },
      options: [
        {
          name: ["-f", "--from"],
          description:
            "Set the pattern to match in the requested URI; defaults to an empty string",
          args: { name: "uri" },
        },
        {
          name: ["-t", "--to"],
          description:
            "Map the request to a concrete URI; supported action prefixes are 'redirect:', 'permanent:' and 'forward:'; defaults to an empty string",
          args: {
            name: "prefix:uri",
            suggestions: ["redirect:", "permanent:", "forward:"],
          },
        },
        lightModuleOption("virtual URI mapping"),
        prototypeDirOption("virtual URI mapping"),
        prototypeOption("virtual-uri"),
      ],
    }),
    {
      name: "help",
      description: "Display help for command",
      args: { name: "command", isOptional: true },
    },
  ],
  options: [
    {
      name: ["-V", "--Version"],
      description: "Output the version number",
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
