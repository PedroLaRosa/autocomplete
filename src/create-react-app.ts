// create-react-app v5.1.0 (npm latest, published 2025-02-15, 2026-11-19). Source: createReactApp.js shipped in the npm tarball (commander definition and --help text), read statically; the binary was not run.
// Upstream deprecated the project (see https://react.dev/link/cra); 5.1.0 is still the latest release. Removed --use-npm (absent from 5.1.0), added --info, --use-pnp is a plain flag.

const ICONS = {
  help: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/help.png",
  version:
    "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/info.png",
  skip: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/skip.png",
  path: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/path.png",
  string:
    "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/string.png",
  template:
    "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/export.png",
  npm: "fig://icon?type=npm",
  yarn: "fig://icon?type=yarn",
};

const completionSpec: Fig.Spec = {
  name: "create-react-app",
  description: "Creates a new React project",
  args: {
    name: "project-directory",
    template: "folders",
  },
  options: [
    // template
    {
      name: "--template",
      description:
        'Specify a template for the created project (a custom template on npm (search for "cra-template-*"), a local path (file:../my-custom-template), or an archive (.tgz or .tar.gz))',
      args: {
        name: "path-to-template",
        suggestions: [
          {
            name: "typescript",
            description: "The cra-template-typescript template",
          },
        ],
      },
      icon: ICONS.path,
      priority: 76,
    },
    {
      name: "--use-pnp",
      description: "Use Yarn Plug'n'Play to create the app",
      icon: ICONS.yarn,
      priority: 75,
    },
    {
      name: "--scripts-version",
      description:
        "Use a non-standard version of react-scripts (a specific npm version or npm tag, a custom fork published on npm, a local path (file:../my-react-scripts), or an archive (.tgz or .tar.gz))",
      args: {
        name: "alternative-package",
      },
      priority: 74,
    },
    // Info
    {
      name: "--verbose",
      description: "Print additional logs",
      priority: 1,
      icon: ICONS.string,
    },
    {
      name: "--info",
      description: "Print environment debug info",
      priority: 1,
      icon: ICONS.string,
    },
    {
      name: ["-h", "--help"],
      description: "Output usage information",
      icon: ICONS.help,
      priority: 1,
    },
    {
      name: ["-V", "--version"],
      description: "Output the version number",
      icon: ICONS.version,
      priority: 1,
    },
  ],
};

export default completionSpec;
