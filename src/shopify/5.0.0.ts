const verboseOption: Fig.Option = {
  name: "--verbose",
  description:
    "Increase the verbosity of the output. May include sensitive data",
  isPersistent: true,
  priority: 1,
};

const noColorOption: Fig.Option = {
  name: "--no-color",
  description: "Disable color output",
  isPersistent: true,
  priority: 1,
};

const noInputOption: Fig.Option = {
  name: "--no-input",
  description: "Disable interactive prompts and browser authentication",
  isPersistent: true,
  priority: 1,
};

const jsonSchemaOption: Fig.Option = {
  name: "--json-schema",
  description: "Print the command's JSON schemas",
  isPersistent: true,
  priority: 1,
};

const globalOptions: Fig.Option[] = [
  verboseOption,
  noColorOption,
  noInputOption,
  jsonSchemaOption,
];

const allowMutationsOption: Fig.Option = {
  name: "--allow-mutations",
  description: "Allow GraphQL mutations to run against the target store",
};

const authAliasOption: Fig.Option = {
  name: "--auth-alias",
  description: "Alias of the Shopify account to use for authentication",
  args: {
    name: "auth-alias",
  },
};

const clientIdOption: Fig.Option = {
  name: "--client-id",
  description: "The Client ID of your app",
  exclusiveOn: ["--config"],
  args: {
    name: "client-id",
  },
};

const codegenConfigPathOption: Fig.Option = {
  name: "--codegen-config-path",
  description:
    "Specifies a path to a codegen configuration file. Defaults to `<root>/codegen.ts` if this file exists",
  dependsOn: ["--codegen"],
  args: {
    name: "codegen-config-path",
    template: "filepaths",
  },
};

const configOption: Fig.Option = {
  name: ["--config", "-c"],
  description: "The name of the app configuration",
  args: {
    name: "config",
  },
};

const entryOption: Fig.Option = {
  name: "--entry",
  description: "Entry file for the worker. Defaults to `./server`",
  args: {
    name: "entry",
    template: "filepaths",
  },
};

const envBranchOption: Fig.Option = {
  name: "--env-branch",
  description:
    "Specifies the environment to perform the operation using its Git branch name (deprecated, use --env)",
  deprecated: true,
  args: {
    name: "env-branch",
  },
};

const envFileOption: Fig.Option = {
  name: "--env-file",
  description:
    "Path to an environment file to override existing environment variables. Defaults to the '.env' located in your project path `--path`",
  args: {
    name: "env-file",
    template: "filepaths",
    default: ".env",
  },
};

const environmentOption: Fig.Option = {
  name: ["--environment", "-e"],
  description: "The environment to apply to the current command",
  isRepeatable: true,
  args: {
    name: "environment",
  },
};

const envOption: Fig.Option = {
  name: "--env",
  description:
    "Specifies the environment to perform the operation using its handle. Fetch the handle using the `env list` command",
  exclusiveOn: ["--env-branch"],
  args: {
    name: "env",
  },
};

const forceOption: Fig.Option = {
  name: ["--force", "-f"],
  description:
    "Overwrites the destination directory and files if they already exist",
};

const forceOption2: Fig.Option = {
  name: ["--force", "-f"],
  description: "Skip confirmation. Required if non interactive",
};

const forceThemeOption: Fig.Option = {
  name: ["--force", "-f"],
  description:
    "Proceed without confirmation, if current directory does not seem to be theme directory",
  hidden: true,
};

const installDepsOption: Fig.Option = {
  name: ["--install-deps", "--no-install-deps"],
  description: "Auto installs dependencies using the active package manager",
};

const jsonOption: Fig.Option = {
  name: ["--json", "-j"],
  description: "Output the result as JSON. Automatically disables color output",
};

const listingOption: Fig.Option = {
  name: "--listing",
  description:
    "The listing preset to use for multi-preset themes. Applies preset files from listings/[preset-name] directory",
  args: {
    name: "listing",
  },
};

const passwordOption: Fig.Option = {
  name: "--password",
  description:
    "Password generated from the Theme Access app or an Admin API token",
  args: {
    name: "password",
  },
};

const pathAppOption: Fig.Option = {
  name: "--path",
  description: "The path to your function directory",
  args: {
    name: "path",
    template: "folders",
  },
};

const pathHydrogenOption: Fig.Option = {
  name: "--path",
  description:
    "The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run",
  args: {
    name: "path",
    template: "folders",
  },
};

const pathOption: Fig.Option = {
  name: "--path",
  description: "The path to your app directory",
  args: {
    name: "path",
    template: "folders",
  },
};

const pathThemeOption: Fig.Option = {
  name: "--path",
  description:
    "The path where you want to run the command. Defaults to the current working directory",
  args: {
    name: "path",
    template: "folders",
  },
};

const queryFileOption: Fig.Option = {
  name: "--query-file",
  description:
    "Path to a file containing the GraphQL query or mutation. Can't be used with --query",
  args: {
    name: "query-file",
    template: "filepaths",
  },
};

const resetOption: Fig.Option = {
  name: "--reset",
  description: "Reset all your settings",
  exclusiveOn: ["--config"],
};

const shopOption: Fig.Option = {
  name: ["--shop", "-s"],
  description:
    "Shop URL. It can be the shop prefix (janes-apparel) or the full myshopify.com URL (janes-apparel.myshopify.com, https://janes-apparel.myshopify.com)",
  args: {
    name: "shop",
  },
};

const storeAppOption: Fig.Option = {
  name: ["--store", "-s"],
  description: "The store domain. Must be an existing dev store",
  args: {
    name: "store",
  },
};

const storeOption: Fig.Option = {
  name: ["--store", "-s"],
  description:
    "Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, https://example.myshopify.com)",
  args: {
    name: "store",
  },
};

const storeOption2: Fig.Option = {
  name: ["--store", "-s"],
  description: "The myshopify.com domain of the store",
  isRequired: true,
  args: {
    name: "store",
  },
};

const storePasswordOption: Fig.Option = {
  name: "--store-password",
  description: "The password for storefronts with password protection",
  args: {
    name: "store-password",
  },
};

const themeOption: Fig.Option = {
  name: ["--theme", "-t"],
  description: "Theme ID or name of the remote theme",
  args: {
    name: "theme",
  },
};

const themeOption2: Fig.Option = {
  name: ["--theme", "-t"],
  description:
    "Theme ID or name of the remote theme. Use --development, --live, or --theme in non-interactive environments",
  args: {
    name: "theme",
  },
};

const withoutAppConfigOption: Fig.Option = {
  name: "--without-app-config",
  description:
    "Scan --path as an app with no app configuration file. Config checks are skipped. Requires --client-id",
  dependsOn: ["--client-id"],
  exclusiveOn: ["--config"],
};

const completion: Fig.Subcommand = {
  name: "shopify",
  description: "A CLI tool to build for the Shopify platform",
  icon: "https://avatars.githubusercontent.com/u/8085?s=16&v=4",
  options: [
    {
      name: ["--help", "-h"],
      icon: "fig://icon?type=option",
      description: "Show help for this command",
      priority: 1,
      isPersistent: true,
    },
  ],
  subcommands: [
    {
      name: "theme",
      priority: 100,
      description: "Build Liquid themes",
      options: [...globalOptions],
      subcommands: [
        {
          name: "dev",
          priority: 100,
          description:
            "Uploads the current theme as a development theme to the connected store, then prints theme editor and preview URLs to your terminal",
          options: [
            authAliasOption,
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            {
              name: "--host",
              description:
                "Set which network interface the web server listens on. The default value is 127.0.0.1",
              args: {
                name: "host",
              },
            },
            {
              name: "--live-reload",
              description:
                "The live reload mode switches the server behavior when a file is modified",
              args: {
                name: "live-reload",
                suggestions: [
                  {
                    name: "hot-reload",
                    description:
                      "Hot reloads local changes to CSS and sections (default)",
                  },
                  {
                    name: "full-page",
                    description: "Always refreshes the entire page",
                  },
                  {
                    name: "off",
                    description: "Deactivate live reload",
                  },
                ],
                default: "hot-reload",
              },
            },
            {
              name: "--error-overlay",
              description:
                "Controls the visibility of the error overlay when an theme asset upload fails",
              args: {
                name: "error-overlay",
                suggestions: [
                  {
                    name: "silent",
                    description: "Prevents the error overlay from appearing",
                  },
                  {
                    name: "default",
                    description: "Displays the error overlay",
                  },
                ],
                default: "default",
              },
            },
            {
              name: "--theme-editor-sync",
              description:
                "Synchronize Theme Editor updates in the local theme files",
            },
            {
              name: "--standard-events-inspector",
              description:
                "Inject the standard events inspector into storefront HTML",
            },
            {
              name: "--reconciliation-strategy",
              description:
                "How to resolve JSON conflicts when --theme-editor-sync is enabled. Use keep-local to keep local files, keep-remote to keep remote files, or abort to fail instead of prompting",
              dependsOn: ["--theme-editor-sync"],
              args: {
                name: "reconciliation-strategy",
                suggestions: ["keep-local", "keep-remote", "abort"],
              },
            },
            {
              name: "--port",
              description:
                "Local port to serve theme preview from. Must be between 1 and 65535",
              args: {
                name: "port",
              },
            },
            themeOption,
            listingOption,
            {
              name: ["--nodelete", "-n"],
              description:
                "Prevents files from being deleted in the remote theme when a file has been deleted locally",
            },
            {
              name: ["--only", "-o"],
              description:
                "Hot reload only files that match the specified pattern",
              isRepeatable: true,
              args: {
                name: "only",
              },
            },
            {
              name: ["--ignore", "-x"],
              description:
                "Skip hot reloading any files that match the specified pattern",
              isRepeatable: true,
              args: {
                name: "ignore",
              },
            },
            forceThemeOption,
            {
              name: "--notify",
              description:
                "The file path or URL. The file path is to a file that you want updated on idle. The URL path is where you want a webhook posted to report on file changes",
              args: {
                name: "notify",
              },
            },
            {
              name: "--open",
              description:
                "Automatically launch the theme preview in your default web browser",
            },
            storePasswordOption,
            {
              name: ["--allow-live", "-a"],
              description: "Allow development on a live theme",
            },
          ],
        },
        {
          name: "init",
          priority: 75,
          description:
            "Clones a Git repository to use as a starting point for building a new theme",
          options: [
            authAliasOption,
            jsonOption,
            pathThemeOption,
            {
              name: ["--clone-url", "-u"],
              description:
                "The Git URL to clone from. Defaults to Shopify's Skeleton theme",
              args: {
                name: "clone-url",
                default: "https://github.com/Shopify/skeleton-theme.git",
              },
            },
            {
              name: ["--latest", "-l"],
              description: "Downloads the latest release of the `clone-url`",
            },
          ],
          args: {
            name: "name",
            description: "Name of the new theme",
            isOptional: true,
          },
        },
        {
          name: "check",
          description: "Validate the theme",
          options: [
            authAliasOption,
            {
              name: ["--json", "-j"],
              description:
                "Output the result as JSON. Automatically disables color output",
              exclusiveOn: ["--init", "--version", "--print", "--list"],
            },
            pathThemeOption,
            {
              name: ["--auto-correct", "-a"],
              description: "Automatically fix offenses",
            },
            {
              name: ["--config", "-C"],
              description:
                "Path to a config file to use, overriding .theme-check.yml if present",
              args: {
                name: "config",
                template: "filepaths",
              },
            },
            {
              name: "--fail-level",
              description: "Minimum severity for exit with error code",
              args: {
                name: "fail-level",
                suggestions: [
                  "crash",
                  "error",
                  "suggestion",
                  "style",
                  "warning",
                  "info",
                ],
                default: "error",
              },
            },
            {
              name: "--init",
              description: "Generate a .theme-check.yml file",
            },
            {
              name: "--list",
              description: "List enabled checks",
            },
            {
              name: ["--output", "-o"],
              description: "The output format to use",
              args: {
                name: "output",
                suggestions: ["text", "json"],
                default: "text",
              },
            },
            {
              name: "--print",
              description: "Output active config to STDOUT",
            },
            {
              name: ["--version", "-v"],
              description: "Print Theme Check version",
            },
            environmentOption,
          ],
        },
        {
          name: "console",
          description: "Shopify Liquid REPL (read-eval-print loop) tool",
          options: [
            authAliasOption,
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            {
              name: "--url",
              description: "The url to be used as context",
              args: {
                name: "url",
                default: "/",
              },
            },
            storePasswordOption,
          ],
        },
        {
          name: "delete",
          description:
            "Delete remote themes from the connected store. This command can't be undone",
          options: [
            authAliasOption,
            jsonOption,
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            {
              name: ["--development", "-d"],
              description:
                "Delete your development theme. Use --show-all, --development, or --theme in non-interactive environments",
            },
            {
              name: ["--show-all", "-a"],
              description:
                "Include other development themes in the theme list. Use --show-all, --development, or --theme in non-interactive environments",
            },
            forceOption2,
            {
              name: ["--theme", "-t"],
              description:
                "Theme ID or name of the remote theme. Use --show-all, --development, or --theme in non-interactive environments",
              isRepeatable: true,
              args: {
                name: "theme",
              },
            },
          ],
        },
        {
          name: "duplicate",
          description: "Duplicates a theme from your theme library",
          options: [
            authAliasOption,
            jsonOption,
            passwordOption,
            {
              name: ["--theme", "-t"],
              description:
                "Theme ID or name of the remote theme. Required if non interactive",
              args: {
                name: "theme",
              },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the newly duplicated theme",
              args: {
                name: "name",
              },
            },
            storeOption,
            environmentOption,
            {
              name: ["--force", "-f"],
              description:
                "Force the duplicate operation to run without prompts or confirmations. Required if non interactive outside CI",
            },
          ],
        },
        {
          name: "info",
          description:
            "Displays information about your theme environment, including your current store. Can also retrieve information about a specific theme",
          options: [
            authAliasOption,
            jsonOption,
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            {
              name: ["--development", "-d"],
              description: "Retrieve info from your development theme",
            },
            themeOption,
          ],
        },
        {
          name: "language-server",
          description: "Start a Language Server Protocol server",
          options: [authAliasOption],
        },
        {
          name: "list",
          description:
            "Lists the themes in your store, along with their IDs and statuses",
          options: [
            authAliasOption,
            jsonOption,
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            {
              name: "--role",
              description: "Only list themes with the given role",
              args: {
                name: "role",
                suggestions: ["live", "unpublished", "development"],
              },
            },
            {
              name: "--name",
              description: "Only list themes that contain the given name",
              args: {
                name: "name",
              },
            },
            {
              name: "--id",
              description: "Only list theme with the given ID",
              args: {
                name: "id",
              },
            },
          ],
        },
        {
          name: "metafields",
          description:
            "Download metafields definitions from your shop into a local file",
          subcommands: [
            {
              name: "pull",
              description:
                "Download metafields definitions from your shop into a local file",
              options: [
                authAliasOption,
                jsonOption,
                pathThemeOption,
                passwordOption,
                storeOption,
                environmentOption,
                forceThemeOption,
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "open",
          description: "Opens the preview of your remote theme",
          options: [
            authAliasOption,
            jsonOption,
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            {
              name: ["--development", "-d"],
              description:
                "Open your development theme. Use --development, --live, or --theme in non-interactive environments",
            },
            {
              name: ["--editor", "-E"],
              description:
                "Open the theme editor for the specified theme in the browser",
            },
            {
              name: ["--live", "-l"],
              description:
                "Open your live (published) theme. Use --development, --live, or --theme in non-interactive environments",
            },
            themeOption2,
          ],
        },
        {
          name: "package",
          description:
            "Package your theme into a .zip file, ready to upload to the Online Store",
          options: [authAliasOption, jsonOption, pathThemeOption],
        },
        {
          name: "preview",
          description:
            "Applies JSON overrides to a theme and returns a preview URL",
          options: [
            authAliasOption,
            {
              name: ["--json", "-j"],
              description: "Output the preview URL and identifier as JSON",
            },
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            themeOption,
            {
              name: "--overrides",
              description: "Path to a JSON overrides file",
              args: {
                name: "overrides",
                template: "filepaths",
              },
            },
            {
              name: "--preview-id",
              description:
                "An existing preview identifier to update instead of creating a new preview",
              args: {
                name: "preview-id",
              },
            },
            {
              name: "--open",
              description:
                "Automatically launch the theme preview in your default web browser",
            },
          ],
        },
        {
          name: "profile",
          description: "Profile the Liquid rendering of a theme page",
          options: [
            authAliasOption,
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            themeOption,
            {
              name: "--url",
              description:
                "The path of the page to profile, with an optional query string. For a full URL, only the path and query string are used",
              args: {
                name: "url",
                default: "/",
              },
            },
            storePasswordOption,
            jsonOption,
          ],
        },
        {
          name: "publish",
          description: "Set a remote theme as the live theme",
          options: [
            authAliasOption,
            jsonOption,
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            forceOption2,
            {
              name: ["--theme", "-t"],
              description:
                "Theme ID or name of the remote theme. Required if non interactive",
              args: {
                name: "theme",
              },
            },
          ],
        },
        {
          name: "pull",
          description: "Download your remote theme files locally",
          options: [
            authAliasOption,
            jsonOption,
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            {
              name: ["--only", "-o"],
              description:
                "Download only the specified files (Multiple flags allowed). Wrap the value in double quotes if you're using wildcards",
              isRepeatable: true,
              args: {
                name: "only",
              },
            },
            {
              name: ["--ignore", "-x"],
              description:
                "Skip downloading the specified files (Multiple flags allowed). Wrap the value in double quotes if you're using wildcards",
              isRepeatable: true,
              args: {
                name: "ignore",
              },
            },
            themeOption2,
            {
              name: ["--development", "-d"],
              description:
                "Pull theme files from your remote development theme. Use --development, --live, or --theme in non-interactive environments",
            },
            {
              name: ["--live", "-l"],
              description:
                "Pull theme files from your remote live theme. Use --development, --live, or --theme in non-interactive environments",
            },
            {
              name: ["--nodelete", "-n"],
              description:
                "Prevent deleting local files that don't exist remotely",
            },
            forceThemeOption,
          ],
        },
        {
          name: "push",
          description:
            "Uploads your local theme files to the connected store, overwriting the remote version if specified",
          options: [
            authAliasOption,
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            {
              name: ["--only", "-o"],
              description:
                "Upload only the specified files (Multiple flags allowed). Wrap the value in double quotes if you're using wildcards",
              isRepeatable: true,
              args: {
                name: "only",
              },
            },
            {
              name: ["--ignore", "-x"],
              description:
                "Skip uploading the specified files (Multiple flags allowed). Wrap the value in double quotes if you're using wildcards",
              isRepeatable: true,
              args: {
                name: "ignore",
              },
            },
            jsonOption,
            {
              name: ["--theme", "-t"],
              description:
                "Theme ID or name of the remote theme. Use --development, --live, --theme, or --unpublished in non-interactive environments. When using --unpublished without --development, use --theme to provide the new theme name",
              args: {
                name: "theme",
              },
            },
            {
              name: ["--development", "-d"],
              description:
                "Push theme files from your remote development theme. Use --development, --live, --theme, or --unpublished in non-interactive environments",
            },
            {
              name: ["--development-context", "-c"],
              description:
                "Unique identifier for a development theme context (e.g., PR number, branch name). Reuses an existing development theme with this context name, or creates one if none exists",
              dependsOn: ["--development"],
              exclusiveOn: ["--theme"],
              args: {
                name: "development-context",
              },
            },
            {
              name: ["--live", "-l"],
              description:
                "Push theme files from your remote live theme. Use --development, --live, --theme, or --unpublished in non-interactive environments",
            },
            {
              name: ["--unpublished", "-u"],
              description: "Create a new unpublished theme and push to it",
            },
            {
              name: ["--nodelete", "-n"],
              description:
                "Prevent deleting remote files that don't exist locally",
            },
            {
              name: ["--allow-live", "-a"],
              description:
                "Allow push to a live theme. Required in non-interactive environments when targeting the live theme",
            },
            {
              name: ["--publish", "-p"],
              description: "Publish as the live theme after uploading",
            },
            forceThemeOption,
            {
              name: "--strict",
              description:
                "Require theme check to pass without errors before pushing. Warnings are allowed",
            },
            listingOption,
          ],
        },
        {
          name: "rename",
          description: "Renames an existing theme",
          options: [
            authAliasOption,
            jsonOption,
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            {
              name: ["--name", "-n"],
              description:
                "The new name for the theme. Required if non interactive",
              args: {
                name: "name",
              },
            },
            {
              name: ["--development", "-d"],
              description:
                "Rename your development theme. Use --development, --live, or --theme in non-interactive environments",
            },
            themeOption2,
            {
              name: ["--live", "-l"],
              description:
                "Rename your remote live theme. Use --development, --live, or --theme in non-interactive environments",
            },
          ],
        },
        {
          name: "share",
          description:
            "Creates a shareable, unpublished, and new theme on your theme library with a randomized name",
          options: [
            authAliasOption,
            jsonOption,
            pathThemeOption,
            passwordOption,
            storeOption,
            environmentOption,
            forceThemeOption,
            listingOption,
          ],
        },
      ],
      requiresSubcommand: true,
    },
    {
      name: "app",
      priority: 90,
      description: "Build Shopify apps",
      options: [...globalOptions],
      subcommands: [
        {
          name: "dev",
          priority: 100,
          description: "Run the app",
          options: [
            authAliasOption,
            pathOption,
            configOption,
            {
              name: "--client-id",
              description:
                "The Client ID of your app. Use with --config to run dev with that configuration for a different app than the one it is linked to",
              args: {
                name: "client-id",
              },
            },
            resetOption,
            jsonOption,
            {
              name: ["--store", "-s"],
              description:
                "Store URL. Must be an existing development or Shopify Plus sandbox store",
              args: {
                name: "store",
              },
            },
            {
              name: "--skip-dependencies-installation",
              description:
                "Skips the installation of dependencies. Deprecated, use workspaces instead",
            },
            {
              name: "--no-update",
              description:
                "Uses the app URL from the toml file instead an autogenerated URL for dev",
            },
            {
              name: "--unsafe-validation",
              description:
                "Allow app dev to continue with warnings for eligible app version validation failures",
            },
            {
              name: "--subscription-product-url",
              description:
                'Resource URL for subscription UI extension. Format: "/products/{productId}"',
              args: {
                name: "subscription-product-url",
              },
            },
            {
              name: "--checkout-cart-url",
              description:
                'Resource URL for checkout UI extension. Format: "/cart/{productVariantID}:{productQuantity}"',
              args: {
                name: "checkout-cart-url",
              },
            },
            {
              name: "--tunnel-url",
              description:
                'Use a custom tunnel, it must be running before executing dev. Format: "https://my-tunnel-url:port"',
              args: {
                name: "tunnel-url",
              },
            },
            {
              name: "--use-localhost",
              description:
                "Service entry point will listen to localhost. A tunnel won't be used. Will work for testing many app features, but not those that directly invoke your app (E.g: Webhooks)",
              exclusiveOn: ["--tunnel-url"],
            },
            {
              name: "--install-mkcert",
              description:
                "Install and use mkcert to generate localhost certificates when --use-localhost is enabled without prompting",
              dependsOn: ["--use-localhost"],
            },
            {
              name: "--localhost-port",
              description:
                "Port to use for localhost. Must be between 1 and 65535",
              args: {
                name: "localhost-port",
              },
            },
            {
              name: ["--theme", "-t"],
              description:
                "Theme ID or name of the theme app extension host theme",
              args: {
                name: "theme",
              },
            },
            {
              name: "--theme-app-extension-port",
              description:
                "Local port of the theme app extension development server. Must be between 1 and 65535",
              args: {
                name: "theme-app-extension-port",
              },
            },
            storePasswordOption,
            {
              name: "--notify",
              description:
                "The file path or URL. The file path is to a file that you want updated on idle. The URL path is where you want a webhook posted to report on file changes",
              args: {
                name: "notify",
              },
            },
            {
              name: "--graphiql-port",
              description:
                "Local port of the GraphiQL development server. Must be between 1 and 65535",
              hidden: true,
              args: {
                name: "graphiql-port",
              },
            },
            {
              name: "--graphiql-key",
              description:
                "Key used to authenticate GraphiQL requests. By default, a key is automatically derived from the app secret. Use this flag to override with a custom key",
              hidden: true,
              args: {
                name: "graphiql-key",
              },
            },
          ],
          subcommands: [
            {
              name: "clean",
              description: "Cleans up the dev preview from the selected store",
              options: [
                authAliasOption,
                pathOption,
                configOption,
                {
                  name: "--client-id",
                  description:
                    "The Client ID of your app. Use with --config to clean up the dev preview for a different app than the one it is linked to",
                  args: {
                    name: "client-id",
                  },
                },
                resetOption,
                jsonOption,
                {
                  name: ["--store", "-s"],
                  description:
                    "Store URL. Must be an existing development store",
                  args: {
                    name: "store",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "deploy",
          priority: 80,
          description: "Deploy your Shopify app",
          options: [
            authAliasOption,
            pathOption,
            configOption,
            {
              name: "--client-id",
              description:
                "The Client ID of your app. Use with --config to deploy that configuration to a different app than the one it is linked to",
              args: {
                name: "client-id",
              },
            },
            resetOption,
            jsonOption,
            {
              name: "--allow-updates",
              description:
                "Allows adding and updating extensions and configuration without requiring user confirmation",
            },
            {
              name: "--allow-deletes",
              description:
                "Allows removing extensions and configuration without requiring user confirmation",
            },
            {
              name: "--no-release",
              description:
                "Creates a version but doesn't release it - it's not made available to merchants",
              exclusiveOn: ["--allow-updates", "--allow-deletes"],
            },
            {
              name: "--no-build",
              description:
                "Use with caution: Skips building any elements of the app that require building. You should ensure your app has been prepared in advance, such as by running `shopify app build` or by caching build artifacts",
            },
            {
              name: "--message",
              description:
                "Optional message that will be associated with this version. This is for internal use only and won't be available externally",
              args: {
                name: "message",
              },
            },
            {
              name: "--version",
              description:
                "Optional version tag that will be associated with this app version. If not provided, an auto-generated identifier will be generated for this app version",
              args: {
                name: "version",
              },
            },
            {
              name: "--source-control-url",
              description: "URL associated with the new app version",
              args: {
                name: "source-control-url",
              },
            },
          ],
        },
        {
          name: "build",
          description: "Build the app, including extensions",
          options: [
            authAliasOption,
            pathOption,
            configOption,
            clientIdOption,
            resetOption,
            jsonOption,
            {
              name: "--skip-dependencies-installation",
              description:
                "Skips the installation of dependencies. Deprecated, use workspaces instead",
            },
          ],
        },
        {
          name: "bulk",
          description:
            "Run, check, and cancel bulk Admin API operations for an app on a store",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a bulk operation",
              options: [
                authAliasOption,
                jsonOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                {
                  name: "--id",
                  description:
                    "The bulk operation ID to cancel (numeric ID or full GID)",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
                storeAppOption,
              ],
            },
            {
              name: "execute",
              description: "Execute bulk operations",
              options: [
                authAliasOption,
                jsonOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                {
                  name: ["--query", "-q"],
                  description:
                    "The GraphQL query or mutation to run as a bulk operation",
                  args: {
                    name: "query",
                  },
                },
                queryFileOption,
                {
                  name: ["--variables", "-v"],
                  description:
                    "The values for any GraphQL variables in your mutation, in JSON format. Can be specified multiple times",
                  isRepeatable: true,
                  exclusiveOn: ["--variable-file"],
                  args: {
                    name: "variables",
                  },
                },
                {
                  name: "--variable-file",
                  description:
                    "Path to a file containing GraphQL variables in JSONL format (one JSON object per line). Can't be used with --variables",
                  exclusiveOn: ["--variables"],
                  args: {
                    name: "variable-file",
                    template: "filepaths",
                  },
                },
                storeAppOption,
                {
                  name: "--watch",
                  description:
                    "Wait for bulk operation results before exiting. Defaults to false",
                },
                {
                  name: "--output-file",
                  description:
                    "The file path where results should be written if --watch is specified. If not specified, results will be written to STDOUT",
                  dependsOn: ["--watch"],
                  args: {
                    name: "output-file",
                    template: "filepaths",
                  },
                },
                {
                  name: "--version",
                  description:
                    "The API version to use for the bulk operation. If not specified, uses the latest stable version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "status",
              description: "Check the status of bulk operations",
              options: [
                authAliasOption,
                jsonOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                {
                  name: "--id",
                  description:
                    "The bulk operation ID (numeric ID or full GID). If not provided, lists all bulk operations belonging to this app on this store in the last 7 days",
                  args: {
                    name: "id",
                  },
                },
                storeAppOption,
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "config",
          description: "Manage app configuration",
          subcommands: [
            {
              name: "link",
              description:
                "Fetch your app configuration from the Developer Dashboard",
              options: [
                authAliasOption,
                jsonOption,
                pathOption,
                {
                  name: ["--config", "-c"],
                  description:
                    "The name of the local app configuration to read and overwrite. Use --file-name instead when specifying --client-id",
                  args: {
                    name: "config",
                  },
                },
                {
                  name: "--client-id",
                  description:
                    "The Client ID of the remote app to link. Use --file-name to specify the destination configuration file. Required if non interactive",
                  args: {
                    name: "client-id",
                  },
                },
                resetOption,
                {
                  name: "--organization-id",
                  hidden: true,
                  exclusiveOn: ["--client-id"],
                  args: {
                    name: "organization-id",
                  },
                },
                {
                  name: "--file-name",
                  description:
                    "The name of the app configuration file to create or overwrite. Requires --force to overwrite an existing file",
                  exclusiveOn: ["--config"],
                  args: {
                    name: "file-name",
                  },
                },
                {
                  name: "--force",
                  description:
                    "Overwrite an existing configuration file without prompting",
                  dependsOn: ["--file-name"],
                },
              ],
            },
            {
              name: "pull",
              description:
                "Refresh an already-linked app configuration without prompts",
              options: [
                authAliasOption,
                jsonOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
              ],
            },
            {
              name: "use",
              description: "Activate an app configuration",
              options: [
                authAliasOption,
                jsonOption,
                pathOption,
                {
                  name: "--client-id",
                  description: "The Client ID of your app",
                  args: {
                    name: "client-id",
                  },
                },
                {
                  name: "--reset",
                  description: "Reset all your settings",
                },
              ],
              args: {
                name: "config",
                description:
                  "The name of the app configuration. Can be 'shopify.app.staging.toml' or simply 'staging'",
                isOptional: true,
              },
            },
            {
              name: "validate",
              description: "Validate your app configuration and extensions",
              options: [
                authAliasOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "env",
          description: "Manage environment variables",
          subcommands: [
            {
              name: "pull",
              description: "Pull app and extensions environment variables",
              options: [
                authAliasOption,
                jsonOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                {
                  name: "--env-file",
                  description:
                    "Specify an environment file to update if the update flag is set",
                  args: {
                    name: "env-file",
                    template: "filepaths",
                  },
                },
              ],
            },
            {
              name: "show",
              description: "Display app and extensions environment variables",
              options: [
                authAliasOption,
                jsonOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "execute",
          description: "Execute GraphQL queries and mutations",
          options: [
            authAliasOption,
            pathOption,
            configOption,
            clientIdOption,
            resetOption,
            {
              name: ["--query", "-q"],
              description: "The GraphQL query or mutation, as a string",
              args: {
                name: "query",
              },
            },
            queryFileOption,
            {
              name: ["--variables", "-v"],
              description:
                "The values for any GraphQL variables in your query or mutation, in JSON format",
              exclusiveOn: ["--variable-file"],
              args: {
                name: "variables",
              },
            },
            {
              name: "--variable-file",
              description:
                "Path to a file containing GraphQL variables in JSON format. Can't be used with --variables",
              exclusiveOn: ["--variables"],
              args: {
                name: "variable-file",
                template: "filepaths",
              },
            },
            {
              name: ["--store", "-s"],
              description:
                "The myshopify.com domain of the store to execute against. The app must be installed on the store. If not specified, you will be prompted to select a store",
              args: {
                name: "store",
              },
            },
            {
              name: "--version",
              description:
                "The API version to use for the query or mutation. Defaults to the latest stable version",
              args: {
                name: "version",
              },
            },
            {
              name: "--output-file",
              description:
                "The file name where results should be written, instead of STDOUT",
              args: {
                name: "output-file",
                template: "filepaths",
              },
            },
            jsonOption,
          ],
        },
        {
          name: "function",
          description: "Manage Shopify Functions",
          subcommands: [
            {
              name: "build",
              description: "Compile a function to wasm",
              options: [
                authAliasOption,
                pathAppOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
              ],
            },
            {
              name: "info",
              description: "Print basic information about your function",
              options: [
                authAliasOption,
                pathAppOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
              ],
            },
            {
              name: "replay",
              description: "Replays a function run from an app log",
              options: [
                authAliasOption,
                pathAppOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
                {
                  name: ["--log", "-l"],
                  description:
                    "Specifies a log identifier to replay instead of selecting from a list. The identifier is provided in the output of `shopify app dev` and is the suffix of the log file name. Required if non interactive",
                  args: {
                    name: "log",
                  },
                },
                {
                  name: ["--watch", "--no-watch", "-w"],
                  description:
                    "Re-run the function when the source code changes",
                },
              ],
            },
            {
              name: "run",
              description: "Run a function locally for testing",
              options: [
                authAliasOption,
                pathAppOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
                {
                  name: ["--input", "-i"],
                  description:
                    "The input JSON to pass to the function. If omitted, standard input is used",
                  args: {
                    name: "input",
                    template: "filepaths",
                  },
                },
                {
                  name: ["--export", "-e"],
                  description: "Name of the WebAssembly export to invoke",
                  args: {
                    name: "export",
                  },
                },
                {
                  name: "--profile",
                  description:
                    "Generate a WebAssembly performance profile for the function run. The profile can be viewed in Speedscope",
                },
              ],
            },
            {
              name: "schema",
              description: "Fetch the latest GraphQL schema for a function",
              options: [
                authAliasOption,
                pathAppOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
                {
                  name: "--stdout",
                  description:
                    "Output the schema to stdout instead of writing to a file",
                },
              ],
            },
            {
              name: "typegen",
              description: "Generate GraphQL types for a function",
              options: [
                authAliasOption,
                pathAppOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "generate",
          description: "Generate a new app Extension",
          subcommands: [
            {
              name: "extension",
              description: "Generate a new app Extension",
              options: [
                authAliasOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
                {
                  name: ["--template", "-t"],
                  description:
                    "Extension template. Required if non interactive",
                  args: {
                    name: "template",
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of your Extension. Required if non interactive",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--clone-url", "-u"],
                  description:
                    "The Git URL to clone the function extensions templates from. Defaults to: https://github.com/Shopify/function-examples",
                  hidden: true,
                  args: {
                    name: "clone-url",
                  },
                },
                {
                  name: "--flavor",
                  description:
                    "Choose a starting template for your extension, where applicable. Supported flavors depend on the selected extension template. Required if non interactive when the selected extension template supports multiple flavors",
                  args: {
                    name: "flavor",
                    suggestions: [
                      "vanilla-js",
                      "preact",
                      "react",
                      "typescript",
                      "typescript-react",
                      "rust",
                      "wasm",
                      "liquid",
                      "config-only",
                    ],
                  },
                },
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "graphiql",
          description: "Open a local GraphiQL UI for your app and store",
          options: [
            authAliasOption,
            pathOption,
            configOption,
            clientIdOption,
            resetOption,
            {
              name: ["--store", "-s"],
              description:
                "The myshopify.com domain of the store to open GraphiQL against. The app must be installed on the store. If not specified, you will be prompted to select a store",
              args: {
                name: "store",
              },
            },
            {
              name: "--port",
              description:
                "Local port for the GraphiQL server. Must be between 1 and 65535",
              args: {
                name: "port",
              },
            },
            {
              name: ["--variables", "-v"],
              description:
                "The values for any GraphQL variables in your query or mutation, in JSON format",
              args: {
                name: "variables",
              },
            },
            {
              name: "--version",
              description:
                "The API version to use in GraphiQL. Defaults to the latest stable version",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "import",
          description: "Import existing configuration into your app",
          subcommands: [
            {
              name: "custom-data-definitions",
              description: "Import metafield and metaobject definitions",
              options: [
                authAliasOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
                {
                  name: ["--store", "-s"],
                  description:
                    "Store URL. Must be an existing development or Shopify Plus sandbox store",
                  args: {
                    name: "store",
                  },
                },
                {
                  name: "--include-existing",
                  description:
                    "Include existing declared definitions in the output",
                },
              ],
            },
            {
              name: "dashboard-extensions",
              description: "Import dashboard-managed extensions into your app",
              options: [
                authAliasOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "info",
          description: "Print basic information about your app and extensions",
          options: [
            authAliasOption,
            pathOption,
            configOption,
            clientIdOption,
            resetOption,
            jsonOption,
            {
              name: "--web-env",
              description:
                "Outputs environment variables necessary for running and deploying web/",
            },
          ],
        },
        {
          name: "init",
          description: "Create a new app project",
          options: [
            authAliasOption,
            jsonOption,
            {
              name: ["--name", "-n"],
              description:
                "The name for the new app. When provided, skips the app selection prompt and creates a new app with this name. Required in non-interactive environments unless --client-id is provided",
              args: {
                name: "name",
              },
            },
            {
              name: ["--path", "-p"],
              args: {
                name: "path",
                template: "folders",
              },
            },
            {
              name: "--template",
              description: "The app template. Accepts one of the following",
              args: {
                name: "template",
              },
            },
            {
              name: "--flavor",
              description:
                "Which flavor of the given template to use. Required in non-interactive environments when the selected template offers multiple flavors",
              args: {
                name: "flavor",
              },
            },
            {
              name: ["--package-manager", "-d"],
              args: {
                name: "package-manager",
                suggestions: ["npm", "yarn", "pnpm", "bun"],
              },
            },
            {
              name: ["--local", "-l"],
              hidden: true,
            },
            {
              name: "--client-id",
              description:
                "The Client ID of your app. Use this to automatically link your new project to an existing app. In non-interactive environments, provide this flag or both --name and --organization-id",
              args: {
                name: "client-id",
              },
            },
            {
              name: "--organization-id",
              description:
                "The organization ID. Your organization ID can be found in your Dev Dashboard URL: https://dev.shopify.com/dashboard/<organization-id>. Required in non-interactive environments unless --client-id is provided",
              exclusiveOn: ["--client-id"],
              args: {
                name: "organization-id",
              },
            },
          ],
        },
        {
          name: "release",
          description: "Release an app version",
          options: [
            authAliasOption,
            pathOption,
            configOption,
            clientIdOption,
            resetOption,
            jsonOption,
            {
              name: "--allow-updates",
              description:
                "Allows adding and updating extensions and configuration without requiring user confirmation. Recommended option for CI/CD environments. Required in non-interactive environments unless --allow-deletes is provided",
            },
            {
              name: "--allow-deletes",
              description:
                "Allows removing extensions and configuration without requiring user confirmation",
            },
            {
              name: "--version",
              description: "The name of the app version to release",
              isRequired: true,
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "security",
          description: "Check an app for Shopify-specific security issues",
          subcommands: [
            {
              name: "check",
              description:
                "Check an app for Shopify-specific security issues and write deterministic-findings.json and agent-checks.json",
              options: [
                pathOption,
                configOption,
                clientIdOption,
                withoutAppConfigOption,
                {
                  name: "--include-dir",
                  description:
                    "Also scan this directory, relative to the working directory. Repeat the flag to add directories. Use it for code that lives outside the app directory, such as a backend or a shared library",
                  isRepeatable: true,
                  args: {
                    name: "include-dir",
                    template: "folders",
                  },
                },
                {
                  name: "--exclude",
                  description:
                    "Skip paths that match this glob, relative to the working directory. Repeat the flag to add globs. The selected app configuration file can't be excluded",
                  isRepeatable: true,
                  args: {
                    name: "exclude",
                  },
                },
                {
                  name: "--no-git-ignore",
                  description:
                    "Turn off Git ignore rules for every scanned directory, so files that Git ignores are scanned too. Files that Git tracks are always scanned",
                },
                {
                  name: "--list-files",
                  description:
                    "Print the files the check would gather, one path per line, and stop. Nothing is scanned, no results are written, and nothing is prompted for. With --json, the result lists them with absolute paths",
                  exclusiveOn: [
                    "--print-instructions",
                    "--skip-instructions",
                    "--blocking",
                  ],
                },
                {
                  name: "--blocking",
                  description:
                    "The minimum finding severity that causes a non-zero exit code: high, medium, or low. Defaults to none, which never fails on findings",
                  args: {
                    name: "blocking",
                    suggestions: ["high", "medium", "low", "none"],
                    default: "none",
                  },
                },
                {
                  name: "--print-instructions",
                  description:
                    "Print coding-agent instructions without prompting for how to deliver them. With --json, the instructions are included in the result",
                  exclusiveOn: ["--skip-instructions"],
                },
                {
                  name: "--yes",
                  description:
                    "Print coding-agent instructions without prompting (deprecated, use --print-instructions)",
                  hidden: true,
                  deprecated: true,
                  exclusiveOn: ["--skip-instructions", "--list-files"],
                },
                {
                  name: "--skip-instructions",
                  description:
                    "Don't offer the coding-agent instructions after the scan. Use it when you want only the deterministic scan results",
                  exclusiveOn: ["--print-instructions"],
                },
                jsonOption,
              ],
            },
            {
              name: "clean",
              description: "Remove local app security check results",
              options: [
                pathOption,
                configOption,
                clientIdOption,
                withoutAppConfigOption,
                jsonOption,
                {
                  name: "--all",
                  description:
                    "Delete every results directory under .shopify/app-security/, not only the selected one",
                  exclusiveOn: ["--config", "--client-id"],
                },
              ],
            },
            {
              name: "instructions",
              description:
                "Provide app security check instructions to a coding agent",
              options: [
                pathOption,
                configOption,
                clientIdOption,
                withoutAppConfigOption,
                {
                  name: "--copy",
                  description:
                    "Copy the instructions to the clipboard instead of printing them. With --json, the result still includes them",
                  exclusiveOn: ["--write"],
                },
                {
                  name: "--write",
                  description:
                    "Write the instructions to a file instead of printing them. With --json, stdout contains only the absolute path and Markdown format of the written file",
                  exclusiveOn: ["--copy"],
                  args: {
                    name: "write",
                    template: "filepaths",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "record",
              description: "Record agent findings from an app security check",
              options: [
                pathOption,
                configOption,
                clientIdOption,
                withoutAppConfigOption,
                jsonOption,
              ],
            },
            {
              name: "review",
              description: "Show the combined app security check results",
              options: [
                pathOption,
                configOption,
                clientIdOption,
                withoutAppConfigOption,
                {
                  name: "--check-id",
                  description:
                    "Show only this check. Repeat the flag to show several checks",
                  isRepeatable: true,
                  args: {
                    name: "check-id",
                  },
                },
                {
                  name: "--blocking",
                  description:
                    "The minimum finding severity that causes a non-zero exit code: high, medium, or low. Defaults to none, which never fails on findings",
                  args: {
                    name: "blocking",
                    suggestions: ["high", "medium", "low", "none"],
                    default: "none",
                  },
                },
                jsonOption,
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "subscription-migrations",
          description: "Migrate app subscriptions to Shopify-managed pricing",
          subcommands: [
            {
              name: "cancel",
              description: "Cancels app subscription migration operations",
              options: [
                authAliasOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
                {
                  name: "--id",
                  description:
                    "The app subscription migration operation ID. Can be specified multiple times",
                  isRepeatable: true,
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "Lists app subscriptions eligible for migration",
              options: [
                authAliasOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
                {
                  name: "--status",
                  description: "Filter subscriptions by migration status",
                  args: {
                    name: "status",
                    suggestions: ["UNSCHEDULED", "SCHEDULED", "MIGRATED"],
                  },
                },
              ],
            },
            {
              name: "schedule",
              description:
                "Schedules manual-billing subscriptions to migrate to Shopify-managed app pricing",
              options: [
                authAliasOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
                {
                  name: ["--input", "-i"],
                  description:
                    "Path to the migration CSV. If omitted, standard input is used",
                  args: {
                    name: "input",
                    template: "filepaths",
                  },
                },
                forceOption2,
                {
                  name: "--watch",
                  description:
                    "Display the current operation state while polling, then output the final outcome when every operation reaches a terminal status",
                },
              ],
            },
            {
              name: "status",
              description:
                "Checks the status of app subscription migration operations",
              options: [
                authAliasOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
                {
                  name: "--id",
                  description:
                    "The app subscription migration operation ID. Can be specified multiple times",
                  isRepeatable: true,
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
                {
                  name: "--watch",
                  description:
                    "Display the current operation state while polling, then output the final state when every operation reaches a terminal status",
                },
              ],
            },
            {
              name: "unschedule",
              description:
                "Reverses app subscription migrations that are still scheduled",
              options: [
                authAliasOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
                {
                  name: ["--input", "-i"],
                  description:
                    "Path to the migration CSV. If omitted, standard input is used",
                  args: {
                    name: "input",
                    template: "filepaths",
                  },
                },
                forceOption2,
                {
                  name: "--watch",
                  description:
                    "Display the current operation state while polling, then output the final outcome when every operation reaches a terminal status",
                },
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "versions",
          description: "List deployed versions of your app",
          subcommands: [
            {
              name: "list",
              description: "List deployed versions of your app",
              options: [
                authAliasOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "webhook",
          description:
            "Trigger delivery of a sample webhook topic payload to a designated address",
          subcommands: [
            {
              name: "trigger",
              description:
                "Trigger delivery of a sample webhook topic payload to a designated address",
              options: [
                authAliasOption,
                pathOption,
                configOption,
                clientIdOption,
                resetOption,
                jsonOption,
                {
                  name: "--help",
                  description:
                    "This help. When you run the trigger command the CLI will prompt you for any information that isn't passed using flags",
                },
                {
                  name: "--topic",
                  description:
                    "The requested webhook topic. Required if non interactive",
                  args: {
                    name: "topic",
                  },
                },
                {
                  name: "--api-version",
                  description:
                    "The API Version of the webhook topic. Required if non interactive",
                  args: {
                    name: "api-version",
                  },
                },
                {
                  name: "--delivery-method",
                  description:
                    "Method chosen to deliver the topic payload. If not passed, it's inferred from the address",
                  args: {
                    name: "delivery-method",
                    suggestions: ["http", "google-pub-sub", "event-bridge"],
                  },
                },
                {
                  name: "--client-secret",
                  description:
                    "Your app's client secret. This secret allows us to return the X-Shopify-Hmac-SHA256 header that lets you validate the origin of the response that you receive",
                  args: {
                    name: "client-secret",
                  },
                },
                {
                  name: "--address",
                  description:
                    "The URL where the webhook payload should be sent",
                  args: {
                    name: "address",
                  },
                },
              ],
            },
          ],
          requiresSubcommand: true,
        },
      ],
      requiresSubcommand: true,
    },
    {
      name: "hydrogen",
      priority: 80,
      description: "Build Hydrogen storefronts",
      options: [...globalOptions],
      subcommands: [
        {
          name: "build",
          description:
            "Builds a Hydrogen storefront for production. The client and app worker files are compiled to a `/dist` folder in your Hydrogen project directory",
          options: [
            jsonOption,
            pathHydrogenOption,
            entryOption,
            {
              name: ["--sourcemap", "--no-sourcemap"],
              description:
                "Controls whether server sourcemaps are generated. Default to `true`. Deactivate `--no-sourcemaps`",
            },
            {
              name: ["--lockfile-check", "--no-lockfile-check"],
              description:
                "Checks that there is exactly one valid lockfile in the project. Defaults to `true`. Deactivate with `--no-lockfile-check`",
            },
            {
              name: "--disable-route-warning",
              description:
                "Disables any warnings about missing standard routes",
            },
            {
              name: "--codegen",
              description:
                "Automatically generates GraphQL types for your project’s Storefront API queries",
            },
            codegenConfigPathOption,
            {
              name: "--watch",
              description:
                "Watches for changes and rebuilds the project writing output to disk",
            },
            {
              name: ["--bundle-stats", "--no-bundle-stats"],
              description:
                "Show a bundle size summary after building. Defaults to true, use `--no-bundle-stats` to disable",
            },
            {
              name: "--force-client-sourcemap",
              description:
                "Client sourcemapping is avoided by default because it makes backend code visible in the browser. Use this flag to force enabling it",
            },
          ],
        },
        {
          name: "check",
          description:
            "Checks whether your Hydrogen app includes a set of standard Shopify routes",
          options: [jsonOption, pathHydrogenOption],
          args: {
            name: "resource",
            description:
              "The resource to check. Currently only 'routes' is supported",
            suggestions: ["routes"],
          },
        },
        {
          name: "codegen",
          description:
            "Automatically generates GraphQL types for your project’s Storefront API queries",
          options: [
            jsonOption,
            pathHydrogenOption,
            {
              name: "--codegen-config-path",
              description:
                "Specify a path to a codegen configuration file. Defaults to `<root>/codegen.ts` if it exists",
              args: {
                name: "codegen-config-path",
                template: "filepaths",
              },
            },
            {
              name: "--force-sfapi-version",
              description:
                "Force generating Storefront API types for a specific version instead of using the one provided in Hydrogen. A token can also be provided with this format: `<version>:<token>`",
              hidden: true,
              args: {
                name: "force-sfapi-version",
              },
            },
            {
              name: "--watch",
              description:
                "Watch the project for changes to update types on file save",
            },
          ],
        },
        {
          name: "customer-account-push",
          description: "Push project configuration to admin",
          options: [
            jsonOption,
            pathHydrogenOption,
            {
              name: "--storefront-id",
              description:
                "The id of the storefront the configuration should be pushed to. Must start with 'gid://shopify/HydrogenStorefront/'",
              args: {
                name: "storefront-id",
              },
            },
            {
              name: "--dev-origin",
              description: "The development domain of your application",
              isRequired: true,
              args: {
                name: "dev-origin",
              },
            },
            {
              name: "--javascript-origin",
              description:
                "The origin to register as the allowed JavaScript origin for the Customer Account API OAuth flow",
              args: {
                name: "javascript-origin",
              },
            },
            {
              name: "--relative-redirect-uri",
              description:
                "The relative url of allowed callback url for Customer Account API OAuth flow. Default is '/account/authorize'",
              args: {
                name: "relative-redirect-uri",
              },
            },
            {
              name: "--relative-logout-uri",
              description:
                "The relative url of allowed url that will be redirected to post-logout for Customer Account API OAuth flow. Default to nothing",
              args: {
                name: "relative-logout-uri",
              },
            },
          ],
        },
        {
          name: "debug",
          description: "Builds and profiles the server startup time the app",
          subcommands: [
            {
              name: "cpu",
              description:
                "Builds and profiles the server startup time the app",
              options: [
                pathHydrogenOption,
                entryOption,
                {
                  name: "--output",
                  description:
                    'Specify a path to generate the profile file. Defaults to "startup.cpuprofile"',
                  args: {
                    name: "output",
                    template: "filepaths",
                    default: "startup.cpuprofile",
                  },
                },
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "deploy",
          description: "Builds and deploys your Hydrogen storefront to Oxygen",
          options: [
            jsonOption,
            entryOption,
            envOption,
            envBranchOption,
            {
              name: "--env-file",
              description:
                "Path to an environment file to override existing environment variables for the deployment",
              args: {
                name: "env-file",
                template: "filepaths",
              },
            },
            {
              name: "--preview",
              description: "Deploys to the Preview environment",
            },
            {
              name: ["--force", "-f"],
              description:
                "Forces a deployment to proceed if there are uncommitted changes in its Git repository, and skips confirmation prompts for non-preview environments",
            },
            {
              name: "--no-verify",
              description:
                "Skip the routability verification step after deployment",
            },
            {
              name: "--auth-bypass-token",
              description:
                "Generate an authentication bypass token, which can be used to perform end-to-end tests against the deployment",
            },
            {
              name: "--auth-bypass-token-duration",
              description:
                "Specify the duration (in hours) up to 12 hours for the authentication bypass token. Defaults to `2`",
              dependsOn: ["--auth-bypass-token"],
              args: {
                name: "auth-bypass-token-duration",
              },
            },
            {
              name: "--build-command",
              description:
                "Specify a build command to run before deploying. If not specified, the Hydrogen build pipeline will be used. When custom output directories are configured, defaults to `node --run build`",
              args: {
                name: "build-command",
              },
            },
            {
              name: "--assets-dir",
              description:
                "Directory containing the client assets to deploy, relative to the project root. Defaults to the detected Vite client output directory, then falls back to `dist/client`",
              args: {
                name: "assets-dir",
                template: "folders",
              },
            },
            {
              name: "--worker-dir",
              description:
                "Directory containing the Oxygen worker entry point (`index.js` or `index.mjs`), relative to the project root. Defaults to the detected Vite server output directory, then falls back to `dist/server`",
              args: {
                name: "worker-dir",
                template: "folders",
              },
            },
            {
              name: ["--lockfile-check", "--no-lockfile-check"],
              description:
                "Checks that there is exactly one valid lockfile in the project. Defaults to `true`. Deactivate with `--no-lockfile-check`",
            },
            pathHydrogenOption,
            shopOption,
            {
              name: ["--json-output", "--no-json-output"],
              description:
                "Create a JSON file containing the deployment details in CI environments. Defaults to true, use `--no-json-output` to disable",
            },
            {
              name: ["--token", "-t"],
              description:
                "Oxygen deployment token. Defaults to the linked storefront's token if available",
              args: {
                name: "token",
              },
            },
            {
              name: "--metadata-description",
              description:
                "Description of the changes in the deployment. Defaults to the commit message of the latest commit if there are no uncommitted changes",
              args: {
                name: "metadata-description",
              },
            },
            {
              name: "--metadata-url",
              hidden: true,
              args: {
                name: "metadata-url",
              },
            },
            {
              name: "--metadata-user",
              description:
                "User that initiated the deployment. Will be saved and displayed in the Shopify admin",
              args: {
                name: "metadata-user",
              },
            },
            {
              name: "--metadata-version",
              hidden: true,
              args: {
                name: "metadata-version",
              },
            },
            {
              name: "--force-client-sourcemap",
              description:
                "Client sourcemapping is avoided by default because it makes backend code visible in the browser. Use this flag to force enabling it",
            },
          ],
        },
        {
          name: "dev",
          description:
            "Runs Hydrogen storefront in an Oxygen worker for development",
          options: [
            pathHydrogenOption,
            entryOption,
            {
              name: "--port",
              description: "The port to run the server on. Defaults to 3000",
              args: {
                name: "port",
              },
            },
            {
              name: "--codegen",
              description:
                "Automatically generates GraphQL types for your project’s Storefront API queries",
            },
            codegenConfigPathOption,
            {
              name: "--disable-virtual-routes",
              description:
                "Disable rendering fallback routes when a route file doesn't exist",
            },
            {
              name: "--debug",
              description:
                "Enables inspector connections to the server with a debugger such as Visual Studio Code or Chrome DevTools",
            },
            {
              name: "--inspector-port",
              description:
                "The port where the inspector is available. Defaults to 9229",
              args: {
                name: "inspector-port",
              },
            },
            envOption,
            envBranchOption,
            envFileOption,
            {
              name: "--disable-version-check",
              description: "Skip the version check when running `hydrogen dev`",
            },
            {
              name: "--customer-account-push",
              description:
                "Use tunneling for local development and push the tunneling domain to admin. Required to use Customer Account API's OAuth flow",
            },
            {
              name: "--host",
              description: "Expose the server to the local network",
            },
            {
              name: "--disable-deps-optimizer",
              description:
                "Disable adding dependencies to Vite's `ssr.optimizeDeps.include` automatically",
            },
          ],
        },
        {
          name: "env",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all environments available on the linked Hydrogen storefront",
              options: [jsonOption, pathHydrogenOption],
            },
            {
              name: "pull",
              description:
                "Pulls environment variables from the linked Hydrogen storefront and writes them to an `.env` file",
              options: [
                jsonOption,
                envOption,
                envBranchOption,
                envFileOption,
                pathHydrogenOption,
                forceOption,
              ],
            },
            {
              name: "push",
              description:
                "Push environment variables from the local .env file to your linked Hydrogen storefront",
              options: [
                jsonOption,
                {
                  name: "--env",
                  description:
                    "Specifies the environment to perform the operation using its handle. Fetch the handle using the `env list` command",
                  args: {
                    name: "env",
                  },
                },
                envFileOption,
                pathHydrogenOption,
                {
                  name: ["--force", "-f"],
                  description:
                    "Push environment variable changes without confirmation",
                },
                {
                  name: "--dry-run",
                  description:
                    "Preview environment variable changes without pushing them",
                  exclusiveOn: ["--force"],
                },
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "generate",
          subcommands: [
            {
              name: "route",
              description:
                "Generates a set of default routes from the starter template",
              options: [
                jsonOption,
                {
                  name: "--adapter",
                  description:
                    "React Router adapter used in the route. The default is `react-router`",
                  args: {
                    name: "adapter",
                  },
                },
                {
                  name: "--typescript",
                  description: "Generate TypeScript files",
                },
                {
                  name: "--locale-param",
                  description:
                    "The param name in Remix routes for the i18n locale, if any. Example: `locale` becomes ($locale)",
                  args: {
                    name: "locale-param",
                  },
                },
                forceOption,
                pathHydrogenOption,
              ],
              args: {
                name: "routeName",
                description:
                  "The route to generate. One of home,page,cart,products,collections,policies,blogs,account,search,robots,sitemap,all",
                suggestions: [
                  "home",
                  "page",
                  "cart",
                  "products",
                  "collections",
                  "policies",
                  "blogs",
                  "account",
                  "search",
                  "robots",
                  "sitemap",
                  "all",
                ],
              },
            },
            {
              name: "routes",
              description: "Generates all supported standard shopify routes",
              options: [
                jsonOption,
                {
                  name: "--adapter",
                  description:
                    "React Router adapter used in the route. The default is `react-router`",
                  args: {
                    name: "adapter",
                  },
                },
                {
                  name: "--typescript",
                  description: "Generate TypeScript files",
                },
                {
                  name: "--locale-param",
                  description:
                    "The param name in Remix routes for the i18n locale, if any. Example: `locale` becomes ($locale)",
                  args: {
                    name: "locale-param",
                  },
                },
                forceOption,
                pathHydrogenOption,
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "init",
          description: "Creates a new Hydrogen storefront",
          options: [
            jsonOption,
            forceOption,
            {
              name: "--path",
              description:
                "The path to the directory of the new Hydrogen storefront",
              args: {
                name: "path",
                template: "folders",
              },
            },
            {
              name: "--language",
              description:
                "Sets the template language to use. One of `js` or `ts`",
              args: {
                name: "language",
              },
            },
            {
              name: "--template",
              description:
                "Scaffolds project based on a template: `skeleton` (the default), `demo-store` or a URL to a git repository",
              args: {
                name: "template",
              },
            },
            installDepsOption,
            {
              name: "--mock-shop",
              description:
                "Use mock.shop as the data source for the storefront",
            },
            {
              name: "--styling",
              description:
                "Sets the styling strategy to use. One of `tailwind`, `vanilla-extract`, `css-modules`, `postcss`, `none`",
              args: {
                name: "styling",
              },
            },
            {
              name: "--markets",
              description:
                "Sets the URL structure to support multiple markets. Must be one of: `subfolders`, `domains`, `subdomains`, `none`. Example: `--markets subfolders`",
              args: {
                name: "markets",
              },
            },
            {
              name: ["--shortcut", "--no-shortcut"],
              description:
                "Creates a global h2 shortcut for Shopify CLI using shell aliases. Deactivate with `--no-shortcut`",
            },
            {
              name: ["--git", "--no-git"],
              description: "Init Git and create initial commits",
            },
            {
              name: "--quickstart",
              description:
                "Scaffolds a new Hydrogen project with a set of sensible defaults. Equivalent to `shopify hydrogen init --path hydrogen-quickstart --mock-shop --language js --shortcut --markets none`",
            },
            {
              name: "--package-manager",
              hidden: true,
              args: {
                name: "package-manager",
                suggestions: ["npm", "yarn", "pnpm", "unknown"],
              },
            },
          ],
        },
        {
          name: "link",
          description:
            "Links your local development environment to a remote Hydrogen storefront",
          options: [
            jsonOption,
            forceOption,
            pathHydrogenOption,
            shopOption,
            {
              name: "--storefront",
              description:
                'The name of a Hydrogen Storefront (e.g. "Jane\'s Apparel")',
              exclusiveOn: ["--create-storefront", "--name"],
              args: {
                name: "storefront",
              },
            },
            {
              name: "--create-storefront",
              description: "Create a new Hydrogen storefront",
              exclusiveOn: ["--storefront"],
            },
            {
              name: "--name",
              description:
                "The name to use when creating a new Hydrogen storefront",
              exclusiveOn: ["--storefront"],
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all remote Hydrogen storefronts available to link to your local development environment",
          options: [jsonOption, pathHydrogenOption],
        },
        {
          name: "login",
          description:
            "Logs in to the specified shop and saves the shop domain to the project",
          options: [jsonOption, pathHydrogenOption, shopOption],
        },
        {
          name: "logout",
          description: "Log out from the current shop",
          options: [jsonOption, pathHydrogenOption],
        },
        {
          name: "preview",
          description:
            "Runs a Hydrogen storefront in an Oxygen worker for production",
          options: [
            pathHydrogenOption,
            {
              name: "--port",
              description: "The port to run the server on. Defaults to 3000",
              args: {
                name: "port",
              },
            },
            envOption,
            envBranchOption,
            envFileOption,
            {
              name: "--inspector-port",
              description:
                "The port where the inspector is available. Defaults to 9229",
              args: {
                name: "inspector-port",
              },
            },
            {
              name: "--debug",
              description:
                "Enables inspector connections to the server with a debugger such as Visual Studio Code or Chrome DevTools",
            },
            {
              name: "--build",
              description: "Builds the app before starting the preview server",
            },
            {
              name: "--watch",
              description: "Watches for changes and rebuilds the project",
              dependsOn: ["--build"],
            },
            {
              name: "--entry",
              description: "Entry file for the worker. Defaults to `./server`",
              dependsOn: ["--build"],
              args: {
                name: "entry",
                template: "filepaths",
              },
            },
            {
              name: "--codegen",
              description:
                "Automatically generates GraphQL types for your project’s Storefront API queries",
              dependsOn: ["--build"],
            },
            codegenConfigPathOption,
          ],
        },
        {
          name: "setup",
          description: "Scaffold routes and core functionality",
          options: [
            jsonOption,
            pathHydrogenOption,
            forceOption,
            {
              name: "--markets",
              description:
                "Sets the URL structure to support multiple markets. Must be one of: `subfolders`, `domains`, `subdomains`, `none`. Example: `--markets subfolders`",
              args: {
                name: "markets",
              },
            },
            {
              name: ["--shortcut", "--no-shortcut"],
              description:
                "Creates a global h2 shortcut for Shopify CLI using shell aliases. Deactivate with `--no-shortcut`",
            },
            installDepsOption,
          ],
          subcommands: [
            {
              name: "css",
              description:
                "Adds support for certain CSS strategies to your project",
              options: [
                jsonOption,
                pathHydrogenOption,
                forceOption,
                installDepsOption,
              ],
              args: {
                name: "strategy",
                description:
                  "The CSS strategy to setup. One of tailwind,vanilla-extract,css-modules,postcss",
                isOptional: true,
                suggestions: [
                  "tailwind",
                  "vanilla-extract",
                  "css-modules",
                  "postcss",
                ],
              },
            },
            {
              name: "markets",
              description:
                "Adds support for multiple markets to your project by using the URL structure",
              options: [jsonOption, pathHydrogenOption],
              args: {
                name: "strategy",
                description:
                  "The URL structure strategy to setup multiple markets. One of subfolders,domains,subdomains",
                isOptional: true,
                suggestions: ["subfolders", "domains", "subdomains"],
              },
            },
            {
              name: "vite",
              description: "EXPERIMENTAL: Upgrades the project to use Vite",
              options: [jsonOption, pathHydrogenOption],
            },
          ],
        },
        {
          name: "shortcut",
          description:
            "Creates a global h2 shortcut for Shopify CLI using shell aliases",
          options: [jsonOption],
        },
        {
          name: "unlink",
          description:
            "Unlinks your local development environment from a remote Hydrogen storefront",
          options: [jsonOption, pathHydrogenOption],
        },
        {
          name: "upgrade",
          description:
            "Upgrade Hydrogen project dependencies, preview features, fixes and breaking changes. The command also generates an instruction file for each upgrade",
          options: [
            jsonOption,
            pathHydrogenOption,
            {
              name: ["--version", "-v"],
              description: "A target hydrogen version to update to",
              args: {
                name: "version",
              },
            },
            {
              name: ["--force", "-f"],
              description:
                "Ignore warnings and force the upgrade to the target version",
            },
          ],
        },
      ],
      requiresSubcommand: true,
    },
    {
      name: "store",
      priority: 70,
      description: "Work directly with Shopify stores",
      options: [...globalOptions],
      subcommands: [
        {
          name: "auth",
          description: "Authenticate an app against a store for store commands",
          options: [
            jsonOption,
            storeOption2,
            {
              name: "--scopes",
              description:
                "Comma-separated Admin API scopes to request for the app",
              isRequired: true,
              args: {
                name: "scopes",
              },
            },
          ],
          subcommands: [
            {
              name: "list",
              description: "List stores authenticated directly with store auth",
              options: [jsonOption],
            },
          ],
        },
        {
          name: "bulk",
          description:
            "Run, check, and cancel bulk Admin API operations on a store",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a bulk operation on a store",
              options: [
                jsonOption,
                storeOption2,
                {
                  name: "--id",
                  description:
                    "The bulk operation ID to cancel (numeric ID or full GID)",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
              ],
            },
            {
              name: "execute",
              description: "Execute bulk operations on a store",
              options: [
                jsonOption,
                storeOption2,
                {
                  name: ["--query", "-q"],
                  description:
                    "The GraphQL query or mutation to run as a bulk operation",
                  args: {
                    name: "query",
                  },
                },
                queryFileOption,
                {
                  name: ["--variables", "-v"],
                  description:
                    "The values for any GraphQL variables in your mutation, in JSON format. Can be specified multiple times",
                  isRepeatable: true,
                  exclusiveOn: ["--variable-file"],
                  args: {
                    name: "variables",
                  },
                },
                {
                  name: "--variable-file",
                  description:
                    "Path to a file containing GraphQL variables in JSONL format (one JSON object per line). Can't be used with --variables",
                  exclusiveOn: ["--variables"],
                  args: {
                    name: "variable-file",
                    template: "filepaths",
                  },
                },
                {
                  name: "--watch",
                  description:
                    "Wait for bulk operation results before exiting. Defaults to false",
                },
                {
                  name: "--output-file",
                  description:
                    "The file path where results should be written if --watch is specified. If not specified, results will be written to STDOUT",
                  dependsOn: ["--watch"],
                  args: {
                    name: "output-file",
                    template: "filepaths",
                  },
                },
                {
                  name: "--version",
                  description:
                    "The API version to use for the bulk operation. If not specified, uses the latest stable version",
                  args: {
                    name: "version",
                  },
                },
                allowMutationsOption,
              ],
            },
            {
              name: "status",
              description: "Check the status of bulk operations on a store",
              options: [
                jsonOption,
                storeOption2,
                {
                  name: "--id",
                  description:
                    "The bulk operation ID (numeric ID or full GID). If not provided, lists all bulk operations on this store in the last 7 days",
                  args: {
                    name: "id",
                  },
                },
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "create",
          description: "Create Shopify stores",
          subcommands: [
            {
              name: "dev",
              description: "Create a new dev store",
              options: [
                jsonOption,
                {
                  name: "--name",
                  description:
                    "Name for the new dev store. Required if non interactive",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--organization-id",
                  description:
                    "The numeric organization ID. Auto-selects if you belong to a single organization. Required if non interactive",
                  args: {
                    name: "organization-id",
                  },
                },
                {
                  name: "--plan",
                  description:
                    "The Shopify plan to use for the new dev store. Required if non interactive",
                  args: {
                    name: "plan",
                    suggestions: ["basic", "grow", "advanced", "plus"],
                  },
                },
                {
                  name: "--feature-preview",
                  description:
                    "The handle of a feature preview to enable on the new dev store",
                  args: {
                    name: "feature-preview",
                  },
                },
                {
                  name: ["--demo-data", "--no-demo-data"],
                  description: "Populate the new dev store with demo data",
                },
                {
                  name: "--country",
                  description:
                    "Two-letter country code for the store, such as US, CA, or GB. Follows the ISO 3166-1 alpha-2 standard",
                  args: {
                    name: "country",
                  },
                },
              ],
            },
            {
              name: "preview",
              description: "Create a preview Shopify store",
              options: [
                jsonOption,
                {
                  name: "--name",
                  description: "The name of the store",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--country",
                  description:
                    "Two-letter country code for the store, such as US, CA, or GB. Follows the ISO 3166-1 alpha-2 standard",
                  args: {
                    name: "country",
                  },
                },
              ],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "delete",
          description: "Delete a dev store",
          options: [
            jsonOption,
            storeOption2,
            {
              name: "--organization-id",
              description:
                "The numeric organization ID. Auto-selects if you belong to a single organization",
              args: {
                name: "organization-id",
              },
            },
            forceOption2,
          ],
        },
        {
          name: "execute",
          description: "Execute GraphQL queries and mutations on a store",
          options: [
            jsonOption,
            {
              name: ["--query", "-q"],
              description: "The GraphQL query or mutation, as a string",
              args: {
                name: "query",
              },
            },
            queryFileOption,
            {
              name: ["--variables", "-v"],
              description:
                "The values for any GraphQL variables in your query or mutation, in JSON format",
              exclusiveOn: ["--variable-file"],
              args: {
                name: "variables",
              },
            },
            {
              name: "--variable-file",
              description:
                "Path to a file containing GraphQL variables in JSON format. Can't be used with --variables",
              exclusiveOn: ["--variables"],
              args: {
                name: "variable-file",
                template: "filepaths",
              },
            },
            storeOption2,
            {
              name: "--version",
              description:
                "The API version to use for the query or mutation. Defaults to the latest stable version",
              args: {
                name: "version",
              },
            },
            {
              name: "--output-file",
              description:
                "The file name where results should be written, instead of STDOUT",
              args: {
                name: "output-file",
                template: "filepaths",
              },
            },
            allowMutationsOption,
          ],
        },
        {
          name: "graphiql",
          description: "Open a local GraphiQL UI for a store",
          options: [
            storeOption2,
            {
              name: "--port",
              description:
                "Local port for the GraphiQL server. Must be between 1 and 65535",
              args: {
                name: "port",
              },
            },
            allowMutationsOption,
            {
              name: ["--variables", "-v"],
              description:
                "The values for any GraphQL variables in your query or mutation, in JSON format",
              args: {
                name: "variables",
              },
            },
            {
              name: "--version",
              description:
                "The API version to use in GraphiQL. Defaults to the latest stable version",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "info",
          description: "Surface metadata about a Shopify store",
          options: [jsonOption, storeOption2],
        },
        {
          name: "list",
          description: "List stores in a Shopify organization",
          options: [
            jsonOption,
            {
              name: "--organization-id",
              description:
                "The numeric organization ID. Auto-selects if you belong to a single organization. Required if non interactive when more than one organization is available",
              args: {
                name: "organization-id",
              },
            },
            {
              name: "--type",
              description: "List only stores of this type",
              args: {
                name: "type",
                suggestions: [
                  "dev",
                  "production",
                  "client-transfer",
                  "collaborator",
                ],
              },
            },
          ],
        },
        {
          name: "open",
          description: "Open your Shopify store in the default web browser",
          options: [jsonOption, storeOption2],
        },
      ],
      requiresSubcommand: true,
    },
    {
      name: "auth",
      description: "Auth operations",
      options: [...globalOptions],
      subcommands: [
        {
          name: "login",
          description: "Logs you in to your Shopify account",
          options: [
            jsonOption,
            {
              name: "--alias",
              description:
                "Alias of an existing session you want to use. Required if non interactive",
              args: {
                name: "alias",
              },
            },
          ],
        },
        {
          name: "logout",
          description:
            "Logs you out of the Shopify account or Partner account and store",
          options: [jsonOption],
        },
      ],
      requiresSubcommand: true,
    },
    {
      name: "commands",
      description: "List all shopify commands",
      options: [
        {
          name: "--json",
          description: "Format output as json",
        },
        {
          name: ["--columns", "-c"],
          description: "Only show provided columns (comma-separated)",
          isRepeatable: true,
          exclusiveOn: ["--tree"],
          args: {
            name: "columns",
            suggestions: ["id", "plugin", "summary", "type"],
          },
        },
        {
          name: "--deprecated",
          description: "Show deprecated commands",
        },
        {
          name: ["--extended", "-x"],
          description: "Show extra columns",
          exclusiveOn: ["--tree"],
        },
        {
          name: "--hidden",
          description: "Show hidden commands",
        },
        {
          name: "--no-truncate",
          description: "Do not truncate output",
          exclusiveOn: ["--tree"],
        },
        {
          name: "--sort",
          description: "Property to sort by",
          exclusiveOn: ["--tree"],
          args: {
            name: "sort",
            suggestions: ["id", "plugin", "summary", "type"],
            default: "id",
          },
        },
        {
          name: "--tree",
          description: "Show tree of commands",
        },
      ],
    },
    {
      name: "config",
      description: "CLI configuration options",
      options: [...globalOptions],
      subcommands: [
        {
          name: "autocorrect",
          description:
            "Command autocorrection options. If enabled, Shopify CLI will automatically run a corrected version of your command if a correction is available. Off by default",
          subcommands: [
            {
              name: "off",
              description: "Disable autocorrect. Off by default",
              options: [jsonOption],
            },
            {
              name: "on",
              description: "Enable autocorrect. Off by default",
              options: [jsonOption],
            },
            {
              name: "status",
              description:
                "Check whether autocorrect is enabled or disabled. On by default",
              options: [jsonOption],
            },
          ],
          requiresSubcommand: true,
        },
        {
          name: "autoupgrade",
          subcommands: [
            {
              name: "off",
              description: "Disable automatic upgrades for Shopify CLI",
              options: [jsonOption],
            },
            {
              name: "on",
              description: "Enable automatic upgrades for Shopify CLI",
              options: [jsonOption],
            },
            {
              name: "status",
              description:
                "Check whether auto-upgrade is enabled, disabled, or not yet configured",
              options: [jsonOption],
            },
          ],
          requiresSubcommand: true,
        },
      ],
      requiresSubcommand: true,
    },
    {
      name: "doc",
      description: "Search and fetch documentation from shopify.dev",
      options: [...globalOptions],
      subcommands: [
        {
          name: "fetch",
          description: "Download a complete document from shopify.dev",
          options: [
            jsonOption,
            {
              name: "--url",
              description: "The shopify.dev URL to fetch",
              isRequired: true,
              args: {
                name: "url",
              },
            },
            {
              name: "--language",
              description:
                "Filter code examples in the returned Markdown to this language",
              args: {
                name: "language",
                suggestions: [
                  "javascript",
                  "typescript",
                  "python",
                  "ruby",
                  "php",
                  "rust",
                  "curl",
                  "liquid",
                  "graphql",
                  "html",
                ],
              },
            },
            {
              name: "--output",
              description:
                "Write the document to this file path instead of printing it to stdout. With --json, stdout contains the absolute path and Markdown format of the written file",
              args: {
                name: "output",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "search",
          description:
            "Query the shopify.dev vector store and print the most relevant documentation chunks as JSON",
          options: [
            jsonOption,
            {
              name: "--query",
              description: "The search query",
              isRequired: true,
              args: {
                name: "query",
              },
            },
            {
              name: "--api-name",
              description:
                "Limit results to a specific API (for example: admin, storefront, hydrogen, functions). Unrecognized values are ignored",
              args: {
                name: "api-name",
              },
            },
            {
              name: "--api-version",
              description:
                "Limit results to a specific API version (for example: 2025-10, latest, current)",
              args: {
                name: "api-version",
              },
            },
          ],
        },
      ],
      requiresSubcommand: true,
    },
    {
      name: "help",
      description: "Display help for Shopify CLI",
      options: [
        jsonSchemaOption,
        jsonOption,
        {
          name: ["--nested-commands", "-n"],
          description: "Include all nested commands in the output",
        },
      ],
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "organization",
      description: "List Shopify organizations you have access to",
      options: [...globalOptions],
      subcommands: [
        {
          name: "list",
          description: "List Shopify organizations you have access to",
          options: [authAliasOption, jsonOption],
        },
      ],
      requiresSubcommand: true,
    },
    {
      name: "search",
      description:
        "Search shopify.dev for the most relevant content matching a query",
      options: [...globalOptions, jsonOption],
      args: {
        name: "query",
        isOptional: true,
      },
    },
    {
      name: "upgrade",
      description: "Upgrades Shopify CLI",
      options: [...globalOptions, jsonOption],
    },
    {
      name: "version",
      priority: 30,
      description: "Shopify CLI version currently installed",
      options: [...globalOptions, jsonOption],
    },
  ],
};

const versions: Fig.VersionDiffMap = {};

versions["5.0.0"] = {};

export { versions };
export default completion;
