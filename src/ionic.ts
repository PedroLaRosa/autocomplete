// Ionic CLI v7.2.1 (npm @ionic/cli latest, git tag @ionic/cli@7.2.1, 2026-11-20). Source: ionic-team/ionic-cli at 7.2.1,
// packages/@ionic/cli/src/commands and lib (command tree, options, defaults, global options, Angular and React project
// runners) cross-checked with ionic-docs scripts/data/cli.json. Options that only exist for one project type (React:
// --public-url, --ci, --https, ...) are included for the commands that pass them on.
// ponytail: left out share, state and telemetry (stubs that only throw
// "has been removed"), git clone (no-op, run body commented out) and ionitron
const reactCiOption: Fig.Option = {
  name: "--ci",
  description: "Treat warnings as build failures, test runner does not watch",
};

// Options of the React project type build runner (react-scripts)
const reactBuildOptions: Fig.Option[] = [
  {
    name: "--public-url",
    description: "The URL at which the app will be served",
    args: {
      name: "url",
    },
  },
  reactCiOption,
  {
    name: "--no-source-map",
    description: "Do not generate source maps",
  },
  {
    name: "--no-inline-runtime-chunk",
    description:
      "Do not include the runtime script in index.html (import instead)",
  },
];

// Options of the React project type serve runner (react-scripts)
const reactServeOptions: Fig.Option[] = [
  {
    name: "--https",
    description: "Use HTTPS for the dev server",
  },
  {
    name: "--react-editor",
    description: "Specify the editor that opens files upon crash",
    args: {
      name: "editor",
    },
  },
];

const completionSpec = {
  name: "ionic",
  description:
    "The Ionic command-line interface (CLI) is the go-to tool for developing Ionic apps",
  options: [
    {
      name: ["--help", "-h"],
      description: "Display help for commands",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Print the CLI version",
    },
    {
      name: "--verbose",
      description: "Print debug log messages",
      isPersistent: true,
    },
    {
      name: "--quiet",
      description: "Only print warning and error log messages",
      isPersistent: true,
    },
    {
      name: "--no-interactive",
      description:
        "Disable interactivity such as progress indicators and prompts",
      isPersistent: true,
    },
    {
      name: "--no-color",
      description: "Disable colors in stdout",
      isPersistent: true,
    },
    {
      name: "--confirm",
      description: "Automatically answer YES to confirmation prompts",
      isPersistent: true,
    },
    {
      name: "--project",
      description: "The project ID to use in a multi-app configuration setup",
      args: {
        name: "id",
      },
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--json",
      description: "Use JSON when operating with stdout, if possible",
      isPersistent: true,
      hidden: true,
    },
  ],
  subcommands: [
    {
      name: "build",
      options: [
        {
          name: "--engine",
          description: "Target engine (e.g. browser, cordova)",
          args: {
            name: "engine",
            suggestions: ["browser", "cordova"],
          },
        },
        {
          name: "--platform",
          description: "Target platform on chosen engine (e.g. ios, android)",
          args: {
            name: "platform",
            suggestions: ["ios", "android"],
          },
        },
        {
          name: "--prod",
          description: "Flag to use the production configuration",
        },
        {
          name: ["--configuration", "-c"],
          description: "Specify the configuration to use",
          args: {
            name: "conf",
            template: ["filepaths", "folders"],
          },
        },
        {
          name: "--source-map",
          description: "Output source maps",
        },
        {
          name: "--watch",
          description: "Rebuild when files change",
        },

        ...reactBuildOptions,
      ],
      description:
        "Build web assets and prepare your app for any platform targets",
    },
    {
      name: "completion",
      description: "Enables tab-completion for Ionic CLI commands",
    },
    {
      name: ["generate", "g"],
      args: [
        {
          name: "schematic",
          description:
            "The type of feature (e.g. page, component, directive, service)",
          suggestions: [
            "page",
            "component",
            "service",
            "module",
            "class",
            "directive",
            "guard",
            "pipe",
            "interface",
            "enum",
          ],
        },
        {
          name: "name",
          description: "The name/path of the feature being generated",
        },
      ],
      description: "Create Pages, Components, & Angular Features",
    },
    {
      name: "help",
      hidden: true,
      options: [
        {
          name: "--json",
          description: "Print help in JSON format",
        },
      ],
      args: {
        name: "command",
        description: "The command you desire help with",
        isOptional: true,
      },
      description: "Provides help for a certain command",
    },
    {
      name: "version",
      hidden: true,
      description: "Returns the current CLI version",
    },
    {
      name: "info",
      options: [
        {
          name: "--json",
          description: "Print system/environment info in JSON format",
        },
      ],
      description: "Print project, system, and environment information",
    },
    {
      name: "init",
      options: [
        {
          name: "--type",
          description:
            "Type of project (e.g. angular, angular-standalone, react, vue, custom, vue-vite, react-vite)",
          args: {
            name: "type",
            suggestions: [
              "angular",
              "angular-standalone",
              "react",
              "vue",
              "custom",
              "vue-vite",
              "react-vite",
            ],
          },
        },
        {
          name: ["--force", "-f"],
          description: "Initialize even if a project already exists",
        },
        {
          name: "--multi-app",
          description: "Initialize a multi-app project",
        },
        {
          name: "--project-id",
          description: "Specify a slug for your app",
          args: {
            name: "slug",
          },
        },
        {
          name: "--default",
          description: "Mark the initialized app as the default project",
        },
      ],
      args: {
        name: "name",
        description: 'The name of your project (e.g. myApp, "My App")',
        isOptional: true,
      },
      description: "Initialize existing projects with Ionic",
    },
    {
      name: "link",
      args: {
        name: "id",
        description: "The Appflow ID of the app to link (e.g. a1b2c3d4)",
        isOptional: true,
      },
      description: "Connect local apps to Ionic",
    },
    {
      name: "login",
      args: [
        {
          name: "email",
          description: "Your email address (deprecated)",
          isOptional: true,
        },
        {
          name: "password",
          description: "Your password (deprecated)",
          isOptional: true,
        },
      ],
      description: "Log in to Ionic",
    },
    {
      name: "logout",
      description: "Log out of Ionic",
    },
    {
      name: "repair",
      options: [
        {
          name: "--cordova",
          description:
            "Only perform the repair steps for Cordova platforms and plugins",
        },
      ],
      description: "Remove and recreate dependencies and generated files",
    },
    {
      name: ["serve", "s"],
      options: [
        {
          name: "--external",
          description:
            "Host dev server on all network interfaces (i.e. --host=0.0.0.0)",
        },
        {
          name: "--host",
          description: "Use specific host for the dev server",
          args: {
            name: "host",
            default: "localhost",
          },
        },
        {
          name: ["--port", "-p"],
          description: "Use specific port for the dev server",
          args: {
            name: "port",
            default: 8100,
          },
        },
        {
          name: "--public-host",
          description: "The host used for the browser or web view",
          args: {
            name: "host",
          },
        },
        {
          name: "--no-livereload",
          description: "Do not spin up dev server--just serve files",
        },
        {
          name: "--no-open",
          description: "Do not open a browser window",
        },
        {
          name: ["--browser", "-w"],
          description:
            "Specifies the browser to use (safari, firefox, google chrome)",
          args: {
            name: "browser",
            suggestions: [
              "safari",
              "firefox",
              "google chrome",
              "google-chrome",
              "chrome",
            ],
          },
        },
        {
          name: ["--browseroption", "-o"],
          description: "Specifies a path to open to (/#/tab/dash)",
          args: {
            name: "path",
          },
        },
        {
          name: "--ssl",
          description: "Use HTTPS for the dev server",
        },
        {
          name: "--prod",
          description: "Flag to use the production configuration",
        },
        {
          name: "--consolelogs",
          description: "Print app console logs to the terminal",
        },
        {
          name: "--consolelogs-port",
          description: "Use specific port for console logs server",
          args: {
            name: "port",
          },
        },
        {
          name: ["--configuration", "-c"],
          description: "Specify the configuration to use",
          args: {
            name: "conf",
            template: ["filepaths", "folders"],
          },
        },
        {
          name: "--source-map",
          description: "Output sourcemaps",
        },

        ...reactServeOptions,
        reactCiOption,
      ],
      description: "Start a local dev server for app dev/testing",
    },
    {
      name: "signup",
      description: "Create an Ionic account",
    },
    {
      name: "start",
      options: [
        {
          name: ["--list", "-l"],
          description: "List available starter templates",
        },
        {
          name: "--type",
          description:
            "Type of project to start (e.g. vue, angular, angular-standalone, react)",
          args: {
            name: "type",
            suggestions: ["vue", "angular", "angular-standalone", "react"],
          },
        },
        {
          name: "--cordova",
          description: "Include Cordova integration",
          deprecated: true,
        },
        {
          name: "--capacitor",
          description: "Include Capacitor integration",
        },
        {
          name: "--no-deps",
          description: "Do not install npm/yarn dependencies",
        },
        {
          name: "--no-git",
          description: "Do not initialize a git repo",
        },
        {
          name: "--link",
          description: "Connect your new app to Ionic",
        },
        {
          name: "--id",
          description: "Specify an Ionic App ID to link",
          args: {
            name: "id",
          },
        },
        {
          name: "--project-id",
          description:
            "Specify a slug for your app (used for the directory name and package name)",
          args: {
            name: "slug",
          },
        },
        {
          name: "--package-id",
          description:
            "Specify the bundle ID/application ID for your app (reverse-DNS notation)",
          args: {
            name: "id",
          },
        },
      ],
      args: [
        {
          name: "name",
          description: 'The name of your new project (e.g. myApp, "My App")',
        },
        // Hard to do suggestions for template b/c different templates exist for different --types
        {
          name: "template",
          description:
            "The starter template to use (e.g. blank, tabs; use --list to see all)",
        },
      ],
      description: "Create a new project",
    },
    {
      name: "config",
      description: "Config commands for Ionic",
      subcommands: [
        {
          name: "get",
          options: [
            {
              name: ["--global", "-g"],
              description: "Use global CLI config",
            },
            {
              name: "--json",
              description: "Output config values in JSON",
            },
            {
              name: "--root",
              description: "Operate on root of ionic.config.json",
            },
          ],
          args: {
            name: "property",
            description: "The property name you wish to get",
            isOptional: true,
          },
          description: "Print config values",
        },
        {
          name: "set",
          options: [
            {
              name: ["--global", "-g"],
              description: "Use global CLI config",
            },
            {
              name: "--json",
              description: "Always interpret value as JSON",
            },
            {
              name: "--force",
              description: "Always overwrite existing values",
            },
            {
              name: "--root",
              description: "Operate on root of ./ionic.config.json",
            },
          ],
          args: [
            {
              name: "property",
              description: "The property name you wish to set",
            },
            {
              name: "value",
              description: "The new value of the given property",
            },
          ],
          description: "Set config values",
        },
        {
          name: ["unset", "delete", "del"],
          options: [
            {
              name: ["--global", "-g"],
              description: "Use global CLI config",
            },
            {
              name: "--root",
              description: "Operate on root of ./ionic.config.json",
            },
          ],
          args: {
            name: "property",
            description: "The property name you wish to delete",
          },
          description: "Delete config values",
        },
      ],
    },
    {
      name: ["capacitor", "cap"],
      description: "Capacitor commands Ionic",
      subcommands: [
        {
          name: "add",
          args: {
            name: "platform",
            description: "The platform to add (e.g. android, ios)",
            suggestions: ["ios", "android"],
          },
          description: "Add a native platform to your Ionic project",
        },
        {
          name: "build",
          options: [
            {
              name: "--no-build",
              description: "Do not invoke Ionic build",
            },
            {
              name: "--no-open",
              description: "Do not invoke Capacitor open",
            },
            {
              name: "--prod",
              description: "Flag to use the production configuration",
            },
            {
              name: ["--configuration", "-c"],
              description: "Specify the configuration to use",
              args: {
                name: "conf",
                template: ["filepaths", "folders"],
              },
            },
            {
              name: "--source-map",
              description: "Output source maps",
            },
            {
              name: "--watch",
              description: "Rebuild when files change",
            },

            ...reactBuildOptions,
          ],
          args: {
            name: "platform",
            description: "The platform to build for (e.g. android, ios)",
            suggestions: ["ios", "android"],
          },
          description: "Build an Ionic project for a given platform",
        },
        {
          name: "copy",
          options: [
            {
              name: "--no-build",
              description: "Do not invoke an Ionic build",
            },
            {
              name: "--inline",
              description:
                "Use inline source maps (only available on capacitor 4.2.0+)",
            },
            {
              name: "--prod",
              description: "Flag to use the production configuration",
            },
            {
              name: ["--configuration", "-c"],
              description: "Specify the configuration to use",
              args: {
                name: "conf",
                template: ["filepaths", "folders"],
              },
            },
            {
              name: "--source-map",
              description: "Output source maps",
            },
            {
              name: "--watch",
              description: "Rebuild when files change",
            },

            ...reactBuildOptions,
          ],
          args: {
            name: "platform",
            description: "The platform to copy (e.g. android, ios)",
            isOptional: true,
            suggestions: ["ios", "android"],
          },
          description: "Copy web assets to native platforms",
        },
        {
          name: "open",
          args: {
            name: "platform",
            description: "The platform to open (e.g. android, ios)",
            suggestions: ["ios", "android"],
          },
          description: "Open the IDE for a given native platform project",
        },
        {
          name: "run",
          options: [
            {
              name: "--list",
              description: "List all available targets",
            },
            {
              name: "--target",
              description:
                "Deploy to a specific device by its ID (use --list to see all)",
              args: {
                name: "target",
              },
            },
            {
              name: "--open",
              description: "Open native IDE instead of using capacitor run",
            },
            {
              name: "--no-build",
              description: "Do not invoke Ionic build",
            },
            {
              name: "--external",
              description:
                "Host dev server on all network interfaces (i.e. --host=0.0.0.0)",
            },
            {
              name: "--host",
              description: "Use specific host for the dev server",
              args: {
                name: "host",
                default: "localhost",
              },
            },
            {
              name: ["--port", "-p"],
              description: "Use specific port for the dev server",
              args: {
                name: "port",
                default: 8100,
              },
            },
            {
              name: "--public-host",
              description: "The host used for the browser or web view",
              args: {
                name: "host",
              },
            },
            {
              name: ["--livereload", "-l"],
              description: "Spin up dev server to live-reload www files",
            },
            {
              name: "--livereload-url",
              description: "Provide a custom URL to the dev server",
              args: {
                name: "url",
              },
            },
            {
              name: "--prod",
              description: "Flag to use the production configuration",
            },
            {
              name: ["--configuration", "-c"],
              description: "Specify the configuration to use",
              args: {
                name: "conf",
                template: ["filepaths", "folders"],
              },
            },
            {
              name: "--source-map",
              description: "Output source maps",
            },
            {
              name: "--watch",
              description: "Rebuild when files change",
            },

            ...reactBuildOptions,
          ],
          args: {
            name: "platform",
            description: "The platform to run (e.g. android, ios)",
            suggestions: ["ios", "android"],
          },
          description: "Run an Ionic project on a connected device",
        },
        {
          name: "sync",
          options: [
            {
              name: "--no-build",
              description: "Do not invoke an Ionic build",
            },
            {
              name: "--inline",
              description:
                "Use inline source maps (only available on capacitor 4.1.0+)",
            },
            {
              name: "--prod",
              description: "Flag to use the production configuration",
            },
            {
              name: ["--configuration", "-c"],
              description: "Specify the configuration to use",
              args: {
                name: "conf",
                template: ["filepaths", "folders"],
              },
            },
            {
              name: "--source-map",
              description: "Output source maps",
            },
            {
              name: "--watch",
              description: "Rebuild when files change",
            },

            ...reactBuildOptions,
          ],
          args: {
            name: "platform",
            description: "The platform to sync (e.g. android, ios)",
            isOptional: true,
            suggestions: ["ios", "android"],
          },
          description: "Sync (copy + update) an Ionic project",
        },
        {
          name: "update",
          args: {
            name: "platform",
            description: "The platform to update (e.g. android, ios)",
            isOptional: true,
            suggestions: ["ios", "android"],
          },
          description:
            "Update Capacitor native platforms, install Capacitor/Cordova plugins",
        },
      ],
    },
    {
      name: "live-update",
      description: "Ionic Live Updates functionality",
      subcommands: [
        {
          name: "add",
          options: [
            {
              name: "--app-id",
              description: "Your Appflow app ID",
              args: {
                name: "id",
              },
            },
            {
              name: "--channel-name",
              description: "The channel to check for updates from",
              args: {
                name: "name",
              },
            },
            {
              name: "--update-method",
              description:
                "The update method that dictates the behavior of the plugin",
              args: {
                name: "name",
              },
            },
            {
              name: "--max-store",
              description:
                "The maximum number of downloaded versions to store on the device",
              args: {
                name: "quantity",
                default: 2,
              },
            },
            {
              name: "--min-background-duration",
              description:
                "The minimum duration after which the app checks for an update in the background",
              args: {
                name: "seconds",
                default: 30,
              },
            },
          ],
          description: "Adds Ionic Live Updates plugin to the project",
        },
        {
          name: "configure",
          options: [
            {
              name: "--app-id",
              description: "Your Appflow app ID",
              args: {
                name: "id",
              },
            },
            {
              name: "--channel-name",
              description: "The channel to check for updates from",
              args: {
                name: "name",
              },
            },
            {
              name: "--update-method",
              description:
                "The update method that dictates the behavior of the plugin",
              args: {
                name: "name",
              },
            },
            {
              name: "--max-store",
              description:
                "The maximum number of downloaded versions to store on the device",
              args: {
                name: "quantity",
              },
            },
            {
              name: "--min-background-duration",
              description:
                "The minimum duration after which the app checks for an update in the background",
              args: {
                name: "seconds",
              },
            },
          ],
          args: {
            name: "platform",
            description: "The native platform (e.g. ios, android)",
            isOptional: true,
            suggestions: ["ios", "android"],
          },
          description: "Overrides Ionic Live Updates plugin configuration",
        },
        {
          name: "manifest",
          description:
            "Generates a manifest file for the Ionic Live Updates service from a built app directory",
        },
      ],
    },
    {
      name: "git",
      description: "Git commands for Ionic",
      subcommands: [
        {
          name: "remote",
          description:
            "Adds/updates the Appflow git remote to your local Ionic app",
        },
      ],
    },
    {
      name: "monitoring",
      hidden: true,
      description: "Commands relating to Ionic Appflow Error Monitoring",
      subcommands: [
        {
          name: "syncmaps",
          options: [
            {
              name: "--build",
              description: "Invoke a production Ionic build",
            },
          ],
          args: {
            name: "snapshot_id",
            description:
              "Specify a Snapshot ID to associate the uploaded sourcemaps with",
            isOptional: true,
          },
          description:
            "Build & upload sourcemaps to Ionic Appflow Monitoring service",
        },
      ],
    },
    {
      name: "ssl",
      description: "SSL commands for Ionic",
      deprecated: true,
      subcommands: [
        {
          name: ["generate", "g"],
          options: [
            {
              name: "--key-path",
              description: "Destination of private key file",
              args: {
                name: "path",
                default: "./.ionic/ssl/key.pem",
              },
            },
            {
              name: "--cert-path",
              description: "Destination of certificate file",
              args: {
                name: "path",
                default: "./.ionic/ssl/cert.pem",
              },
            },
            {
              name: "--country-name",
              description: "The country name (C) of the SSL certificate",
              args: {
                name: "C",
                default: "US",
              },
            },
            {
              name: "--state-or-province-name",
              description:
                "The state or province name (ST) of the SSL certificate",
              args: {
                name: "ST",
                default: "Wisconsin",
              },
            },
            {
              name: "--locality-name",
              description: "The locality name (L) of the SSL certificate",
              args: {
                name: "L",
                default: "Madison",
              },
            },
            {
              name: "--organization-name",
              description: "The organization name (O) of the SSL certificate",
              args: {
                name: "O",
                default: "Ionic",
              },
            },
            {
              name: "--common-name",
              description: "The common name (CN) of the SSL certificate",
              args: {
                name: "CN",
                default: "localhost",
              },
            },
            {
              name: ["--bits", "-b"],
              description: "Number of bits in the key",
              args: {
                name: "bits",
                default: 2048,
              },
            },
          ],
          description: "Generates an SSL key & certificate",
        },
      ],
    },
    {
      name: "ssh",
      description: "SSH commands for Ionic",
      deprecated: true,
      subcommands: [
        {
          name: "add",
          options: [
            {
              name: "--use",
              description:
                "Use the newly added key as your default SSH key for Ionic",
            },
          ],
          args: {
            name: "pubkey-path",
            description: "Location of public key file to add to Ionic",
          },
          description: "Add an SSH public key to Ionic",
        },
        {
          name: ["delete", "remove", "rm"],
          args: {
            name: "key-id",
            description: "The ID of the public key to delete",
          },
          description: "Delete an SSH public key from Ionic",
        },
        {
          name: ["generate", "g"],
          options: [
            {
              name: ["--type", "-t"],
              description: "The type of key to generate: ecdsa, ed25519, rsa",
              args: {
                name: "type",
                suggestions: ["ecdsa", "ed25519", "rsa"],
                default: "rsa",
              },
            },
            {
              name: ["--bits", "-b"],
              description: "Number of bits in the key",
              args: {
                name: "bits",
                default: 2048,
              },
            },
            {
              name: ["--annotation", "-C"],
              description:
                "Annotation (comment) in public key. Your Ionic email address will be used",
              args: {
                name: "annotation",
              },
            },
          ],
          args: {
            name: "key-path",
            description: "Destination of private key file",
            isOptional: true,
          },
          description: "Generates a private and public SSH key pair",
        },
        {
          name: ["list", "ls"],
          options: [
            {
              name: "--json",
              description: "Output SSH keys in JSON",
            },
          ],
          description: "List your SSH public keys on Ionic",
        },
        {
          name: "setup",
          description: "Setup your Ionic SSH keys automatically",
        },
        {
          name: "use",
          args: {
            name: "key-path",
            description: "Location of private key file to use",
          },
          description: "Set your active Ionic SSH key",
        },
      ],
    },
    {
      name: ["integrations", "integration", "i"],
      description: "Integration commands for Ionic",
      subcommands: [
        {
          name: ["disable", "dis", "delete", "del", "remove", "rm"],
          args: {
            name: "name",
            description:
              "The integration to disable (e.g. capacitor, cordova, enterprise)",
            suggestions: ["capacitor", "cordova", "enterprise"],
          },
          description: "Disable an integration",
        },
        {
          name: ["enable", "en", "add"],
          options: [
            {
              name: "--add",
              description: "Download and add the integration even if enabled",
            },
            {
              name: "--root",
              description:
                "Specify an alternative destination to download into when adding",
              args: {
                name: "path",
              },
            },
            {
              name: "--quiet",
              description: "Less verbose output, ignore integration errors",
            },
          ],
          args: {
            name: "name",
            description:
              "The integration to enable (e.g. capacitor, cordova, enterprise)",
            suggestions: ["capacitor", "cordova", "enterprise"],
          },
          description: "Add & enable integrations to your app",
        },
        {
          name: ["list", "ls"],
          description: "List available and active integrations in your app",
        },
      ],
    },
    {
      name: "enterprise",
      description: "Enterprise commands for Ionic",
      subcommands: [
        {
          name: "register",
          options: [
            {
              name: "--app-id",
              description: "The Ionic App ID",
              args: {
                name: "id",
              },
            },
            {
              name: "--key",
              description: "The Product Key",
              args: {
                name: "key",
              },
            },
          ],
          description: "Register your Product Key with this app",
        },
      ],
    },
    {
      name: ["cordova", "cdv"],
      description: "Cordova commands for Ionic",
      subcommands: [
        {
          name: "build",
          options: [
            {
              name: "--no-build",
              description: "Do not invoke an Ionic build",
            },
            {
              name: "--debug",
              description: "Mark as a debug build",
            },
            {
              name: "--release",
              description: "Mark as a release build",
            },
            {
              name: "--device",
              description: "Deploy build to a device",
            },
            {
              name: "--emulator",
              description: "Deploy build to an emulator",
            },
            {
              name: "--buildConfig",
              description: "Use the specified build configuration",
              args: {
                name: "file",
                template: ["filepaths", "folders"],
              },
            },
            {
              name: "--prod",
              description: "Flag to use the production configuration",
            },
            {
              name: ["--configuration", "-c"],
              description: "Specify the configuration to use",
              args: {
                name: "conf",
                template: ["filepaths", "folders"],
              },
            },
            {
              name: "--source-map",
              description: "Output source maps",
            },

            ...reactBuildOptions,
          ],
          args: {
            name: "platform",
            description: "The platform to build (e.g. android, ios)",
            suggestions: ["ios", "android"],
          },
          description:
            "Use Cordova to build for Android and iOS platform targets",
        },
        {
          name: "compile",
          options: [
            {
              name: "--debug",
              description: "Mark as a debug build",
            },
            {
              name: "--release",
              description: "Mark as a release build",
            },
            {
              name: "--device",
              description: "Deploy build to a device",
            },
            {
              name: "--emulator",
              description: "Deploy build to an emulator",
            },
            {
              name: "--buildConfig",
              description: "Use the specified build configuration",
              args: {
                name: "file",
                template: ["filepaths", "folders"],
              },
            },
          ],
          args: {
            name: "platform",
            description: "The platform to compile (android, ios)",
            suggestions: ["ios", "android"],
          },
          description: "Compile native platform code",
        },
        {
          name: "emulate",
          options: [
            {
              name: "--list",
              description: "List all available targets",
            },
            {
              name: "--no-build",
              description: "Do not invoke Ionic build",
            },
            {
              name: "--external",
              description:
                "Host dev server on all network interfaces (i.e. --host=0.0.0.0)",
            },
            {
              name: "--host",
              description: "Use specific host for the dev server",
              args: {
                name: "host",
                default: "localhost",
              },
            },
            {
              name: ["--port", "-p"],
              description: "Use specific port for the dev server",
              args: {
                name: "port",
                default: 8100,
              },
            },
            {
              name: "--public-host",
              description: "The host used for the browser or web view",
              args: {
                name: "host",
              },
            },
            {
              name: ["--livereload", "-l"],
              description: "Spin up dev server to live-reload www files",
            },
            {
              name: "--livereload-url",
              description: "Provide a custom URL to the dev server",
              args: {
                name: "url",
              },
            },
            {
              name: "--debug",
              description: "Mark as a debug build",
            },
            {
              name: "--release",
              description: "Mark as a release build",
            },
            {
              name: "--device",
              description: "Deploy build to a device",
            },
            {
              name: "--emulator",
              description: "Deploy build to an emulator",
            },
            {
              name: "--buildConfig",
              description: "Use the specified build configuration",
              args: {
                name: "file",
                template: ["filepaths", "folders"],
              },
            },
            {
              name: "--target",
              description: "Deploy build to a device (use --list to see all)",
              args: {
                name: "target",
              },
            },
            {
              name: "--no-native-run",
              description:
                "Do not use native-run to run the app; use Cordova instead",
            },
            {
              name: "--connect",
              description: "Tie the running app to the process",
            },
            {
              name: "--json",
              description: "Output targets in JSON",
            },
            {
              name: "--ssl",
              description: "Use HTTPS for the dev server",
            },
            {
              name: "--prod",
              description: "Flag to use the production configuration",
            },
            {
              name: "--consolelogs",
              description: "Print app console logs to the terminal",
            },
            {
              name: "--consolelogs-port",
              description: "Use specific port for console logs server",
              args: {
                name: "port",
              },
            },
            {
              name: ["--configuration", "-c"],
              description: "Specify the configuration to use",
              args: {
                name: "conf",
                template: ["filepaths", "folders"],
              },
            },
            {
              name: "--source-map",
              description: "Output source maps",
            },

            ...reactBuildOptions,
            ...reactServeOptions,
          ],
          args: {
            name: "platform",
            description: "The platform to run (e.g. android, ios)",
            suggestions: ["ios", "android"],
          },
          description: "Emulate an Ionic project on a simulator/emulator",
        },
        {
          name: ["platform", "platforms"],
          options: [
            {
              name: "--no-resources",
              description:
                "Do not pregenerate icons and splash screen resources (corresponds to add)",
            },
          ],
          args: [
            {
              name: "action",
              description:
                "Add, remove, or update a platform; ls, check, or save all project platforms",
              isOptional: true,
              suggestions: [
                "add",
                "remove",
                "rm",
                "update",
                "ls",
                "list",
                "check",
                "save",
              ],
            },
            {
              name: "platform",
              description:
                "The platform that you would like to add (android, ios)",
              isOptional: true,
              suggestions: ["ios", "android"],
            },
          ],
          description: "Manage Cordova platform targets",
        },
        {
          name: ["plugin", "plugins"],
          options: [
            {
              name: "--force",
              description:
                "Force overwrite the plugin if it exists (corresponds to add)",
            },
            {
              name: "--variable",
              description: "Specify plugin variables",
              args: {
                name: "KEY=VALUE",
              },
            },
          ],
          args: [
            {
              name: "action",
              description:
                "Add or remove a plugin; ls or save all project plugins",
              isOptional: true,
              suggestions: ["add", "remove", "rm", "ls", "list", "save"],
            },
            {
              name: "plugin",
              description:
                "The name of the plugin (corresponds to add and remove)",
              isOptional: true,
            },
          ],
          description: "Manage Cordova plugins",
        },
        {
          name: "prepare",
          options: [
            {
              name: "--no-build",
              description: "Do not invoke an Ionic build",
            },
            {
              name: "--prod",
              description: "Flag to use the production configuration",
            },
            {
              name: ["--configuration", "-c"],
              description: "Specify the configuration to use",
              args: {
                name: "conf",
                template: ["filepaths", "folders"],
              },
            },
            {
              name: "--source-map",
              description: "Output source maps",
            },
            {
              name: "--watch",
              description: "Rebuild when files change",
            },

            ...reactBuildOptions,
          ],
          args: {
            name: "platform",
            description:
              "The platform you would like to prepare (e.g. android, ios)",
            isOptional: true,
            suggestions: ["ios", "android"],
          },
          description:
            "Copies assets to Cordova platforms, preparing them for native builds",
        },
        {
          name: "requirements",
          args: {
            name: "platform",
            description:
              "The platform for which you would like to gather requirements (android, ios)",
            isOptional: true,
            suggestions: ["ios", "android"],
          },
          description:
            "Checks and print out all the requirements for platforms",
        },
        {
          name: ["resources", "res"],
          options: [
            {
              name: ["--icon", "-i"],
              description: "Generate icon resources",
            },
            {
              name: ["--splash", "-s"],
              description: "Generate splash screen resources",
            },
          ],
          args: {
            name: "platform",
            description:
              "The platform for which you would like to generate resources (ios, android)",
            isOptional: true,
            suggestions: ["ios", "android"],
          },
          description: "Automatically create icon and splash screen resources",
        },
        {
          name: "run",
          options: [
            {
              name: "--list",
              description: "List all available targets",
            },
            {
              name: "--no-build",
              description: "Do not invoke Ionic build",
            },
            {
              name: "--external",
              description:
                "Host dev server on all network interfaces (i.e. --host=0.0.0.0)",
            },
            {
              name: "--host",
              description: "Use specific host for the dev server",
              args: {
                name: "host",
                default: "localhost",
              },
            },
            {
              name: ["--port", "-p"],
              description: "Use specific port for the dev server",
              args: {
                name: "port",
                default: 8100,
              },
            },
            {
              name: "--public-host",
              description: "The host used for the browser or web view",
              args: {
                name: "host",
              },
            },
            {
              name: ["--livereload", "-l"],
              description: "Spin up dev server to live-reload www files",
            },
            {
              name: "--livereload-url",
              description: "Provide a custom URL to the dev server",
              args: {
                name: "url",
              },
            },
            {
              name: "--debug",
              description: "Mark as a debug build",
            },
            {
              name: "--release",
              description: "Mark as a release build",
            },
            {
              name: "--device",
              description: "Deploy build to a device",
            },
            {
              name: "--emulator",
              description: "Deploy build to an emulator",
            },
            {
              name: "--buildConfig",
              description: "Use the specified build configuration",
              args: {
                name: "file",
                template: ["filepaths", "folders"],
              },
            },
            {
              name: "--target",
              description: "Deploy build to a device (use --list to see all)",
              args: {
                name: "target",
              },
            },
            {
              name: "--no-native-run",
              description:
                "Do not use native-run to run the app; use Cordova instead",
            },
            {
              name: "--connect",
              description: "Tie the running app to the process",
            },
            {
              name: "--json",
              description: "Output targets in JSON",
            },
            {
              name: "--ssl",
              description: "Use HTTPS for the dev server",
            },
            {
              name: "--prod",
              description: "Flag to use the production configuration",
            },
            {
              name: "--consolelogs",
              description: "Print app console logs to the terminal",
            },
            {
              name: "--consolelogs-port",
              description: "Use specific port for console logs server",
              args: {
                name: "port",
              },
            },
            {
              name: ["--configuration", "-c"],
              description: "Specify the configuration to use",
              args: {
                name: "conf",
                template: ["filepaths", "folders"],
              },
            },
            {
              name: "--source-map",
              description: "Output source maps",
            },

            ...reactBuildOptions,
            ...reactServeOptions,
          ],
          args: {
            name: "platform",
            description: "The platform to run (e.g. android, ios)",
            suggestions: ["ios", "android"],
          },
          description: "Run an Ionic project on a connected device",
        },
      ],
    },
  ],
};

export default completionSpec;
