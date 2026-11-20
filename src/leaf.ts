// Leaf CLI v5.0.10 (leafs/cli, latest tag/packagist release 2026-10-22; checked 2026-11-19). Source: command signatures in leafsphp/cli src/*Command.php + bin/leaf and the leafs/sprout 5.1.2 runtime at v5.0.10 (not run). Unknown commands (db:*, g:*, scaffold:*, key:generate, ...) are forwarded to the project's own `php leaf` console and are not listed here.
const packageManagerOption: Fig.Option = {
  name: "--pm",
  description: "Package manager to use",
  args: {
    name: "package manager",
    default: "npm",
  },
};

const completionSpec: Fig.Spec = {
  name: "leaf",
  description: "Create and interact with your leaf projects",
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help for the given command",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Display this application version",
    },
  ],
  subcommands: [
    {
      name: "context",
      description:
        "Print compact project context for external AI assistants (beta)",
      options: [
        {
          name: "--raw",
          description: "Print raw .leaf/CONTEXT.md without compacting it",
        },
        {
          name: "--path",
          description: "Project directory to inspect",
          args: {
            name: "path",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "create",
      description: "Create a new Leaf project",
      args: {
        name: "project-name",
        description: "The name of the project",
        isOptional: true,
      },
      options: [
        {
          name: "--lite",
          description: "Create a raw lite leaf project",
        },
        {
          name: "--basic",
          description: "Create a raw lite leaf project (alias for --lite)",
        },
        {
          name: "--api",
          description: "Create a new Leaf MVC project for APIs",
        },
        {
          name: "--mvc",
          description: "Create a new Leaf MVC project",
        },
        {
          name: "--console",
          description: "Create a new Leaf console project",
        },
        {
          name: "--docker",
          description: "Scaffold a docker environment",
        },
        {
          name: "--force",
          description: "Forces install even if the directory already exists",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy your app to a provider of your choice",
      options: [
        {
          name: "--to",
          description: "The provider to deploy to",
          args: {
            name: "provider",
            suggestions: ["fly", "render"],
            default: "fly",
          },
        },
        {
          name: "--name",
          description:
            "Name for your app on the provider (defaults to APP_NAME or the directory name)",
          args: {
            name: "name",
          },
        },
        {
          name: "--region",
          description:
            "Region to deploy to (defaults to APP_PROD_REGION or the provider default)",
          args: {
            name: "region",
          },
        },
      ],
    },
    {
      name: "install",
      description: "Install a new package",
      args: {
        name: "packages",
        description: "Packages to install (names without a vendor use leafs/)",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: ["-d", "--dev"],
          description: "Install as a dev dependency",
        },
      ],
    },
    {
      name: "interact",
      description: "Interact with your application",
    },
    {
      name: "list",
      description: "List commands",
    },
    {
      name: "run",
      description: "Run a script in your composer.json",
      args: {
        name: "script",
        description: "Command to run",
      },
    },
    {
      name: "serve",
      description: "Run a server to serve your Leaf app",
      args: {
        name: "filename",
        description: "The PHP script to run",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["-p", "--port"],
          description: "Port to run app on",
          args: {
            name: "port",
            default: "5500",
          },
        },
        {
          name: "--no-concurrent",
          description: "Run PHP server without Vite server",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall a package",
      args: {
        name: "packages",
        description:
          "Packages to uninstall (names without a vendor use leafs/)",
        isVariadic: true,
      },
    },
    {
      name: "up",
      description: "Scale your Leaf app into MVC structure (beta)",
      options: [
        {
          name: "--force",
          description: "Apply migration without interactive confirmation",
        },
        {
          name: "--dry-run",
          description: "Show what would be changed without modifying any files",
        },
      ],
    },
    {
      name: "update",
      description: "Update leaf cli to the latest version",
    },
    {
      name: "view:build",
      description: "Build your frontend assets",
      options: [packageManagerOption],
    },
    {
      name: "view:install",
      description: "Set up a new view engine",
      options: [
        {
          name: "--blade",
          description: "Install blade",
        },
        {
          name: "--bare-ui",
          description: "Install bare ui",
        },
        {
          name: "--react",
          description: "Install react",
        },
        {
          name: "--svelte",
          description: "Install svelte",
        },
        {
          name: "--tailwind",
          description: "Install tailwind",
        },
        {
          name: "--vite",
          description: "Setup vite files",
        },
        {
          name: "--vue",
          description: "Install vue",
        },
        packageManagerOption,
      ],
    },
  ],
};

export default completionSpec;
