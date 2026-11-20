// RedwoodJS CLI v8.9.0 (npm @redwoodjs/cli latest, released 2025-10-21, 2026-11-20). Source: static read of the yargs
// command definitions at tag v8.9.0 of redwoodjs/redwood (packages/cli/src/commands/**, packages/cli-packages/dataMigrate
// and storybook-vite for the plugin commands, packages/api-server and web-server for `serve`, packages/jobs for `jobs`)
// cross-checked with docs/versioned_docs/version-8.9/cli-commands.md. The CLI was not installed or run (sandbox policy).
// Omitted on purpose: the removed auth providers (ethereum, goTrue, magicLink, nhost, okta) that only print a redirect message.
import prismaSpec from "./prisma";

const icon = "https://avatars.githubusercontent.com/u/45050444?s=200&v=4";

const scripts: Fig.Generator = {
  script: [
    "bash",
    "-c",
    "until [[ -f redwood.toml ]] || [[ $PWD = '/' ]]; do cd ..; done; ls -1p scripts/",
  ],
  postProcess: (output) => {
    if (output.trim() === "") {
      return [];
    }
    return output
      .split("\n")
      .filter(
        (fileOrFolder) =>
          fileOrFolder.endsWith(".js") || fileOrFolder.endsWith(".ts")
      )
      .map((script) => {
        return {
          name: script.trim().replace(/\.[^.]+$/, ""),
          description: "Script",
          icon,
        };
      });
  },
};

const sides = ["api", "web"];

/** Boolean option that defaults to true and is switched off with `--no-<name>` */
const toggle = (
  name: string,
  description: string,
  ...aliases: string[]
): Fig.Option => ({
  name: [`--${name}`, ...aliases, `--no-${name}`],
  description,
});

const sidesArg = (description: string): Fig.Arg => ({
  name: "side",
  description,
  isOptional: true,
  isVariadic: true,
  suggestions: sides,
});

const forceOption = (description = "Overwrite existing files"): Fig.Option => ({
  name: ["--force", "-f"],
  description,
  isDangerous: true,
});

const verboseOption = (description = "Print more logs"): Fig.Option => ({
  name: ["--verbose", "-v"],
  description,
});

const nameArg = (description: string, name = "name"): Fig.Arg => ({
  name,
  description,
});

// Options shared by the `generate` subcommands
const rollbackOption = toggle(
  "rollback",
  "Revert all generator actions if an error occurs [default: true]"
);
const typescriptOption: Fig.Option = {
  name: ["--typescript", "--ts"],
  description:
    "Generate TypeScript files. Enabled by default if your project is TypeScript",
};
const testsOption = toggle(
  "tests",
  "Generate test files. Defaults to the generate.tests setting in redwood.toml"
);
const storiesOption = toggle(
  "stories",
  "Generate Storybook files. Defaults to the generate.stories setting in redwood.toml"
);
const docsOption: Fig.Option = {
  name: "--docs",
  description: "Generate SDL and GraphQL comments to use in documentation",
};
const crudOption = (description: string): Fig.Option =>
  toggle("crud", `${description} [default: true]`);

const baseGeneratorOptions: Fig.Option[] = [
  forceOption(),
  typescriptOption,
  rollbackOption,
];

const componentGeneratorOptions: Fig.Option[] = [
  ...baseGeneratorOptions,
  testsOption,
  storiesOption,
  { name: "--verbose", description: "Print all logs" },
];

// Options shared by the `setup` subcommands
const setupForceOption = forceOption("Overwrite existing configuration");
const setupInstallOption = toggle(
  "install",
  "Install packages [default: true]",
  "-i"
);

const authOptions: Fig.Option[] = [
  forceOption("Overwrite existing auth configuration"),
  verboseOption("Log setup output"),
];

const authProvider = (
  name: string | string[],
  description: string,
  extraOptions: Fig.Option[] = []
): Fig.Subcommand => ({
  name,
  description,
  options: [...authOptions, ...extraOptions],
});

// Options shared by `deploy netlify` and `deploy vercel`
const buildDeployOptions: Fig.Option[] = [
  toggle("build", "Build for production [default: true]"),
  toggle("prisma", "Apply database migrations [default: true]"),
  toggle(
    "data-migrate",
    "Migrate the data in your database [default: true]",
    "--dm"
  ),
];

const sideChoiceArg = (description: string): Fig.Arg => ({
  name: "side",
  description,
  suggestions: sides,
});

const destroyComponent = (
  name: string,
  description: string,
  argDescription: string
): Fig.Subcommand => ({
  name,
  description,
  args: nameArg(argDescription),
});

const experimentalCommand = (
  name: string,
  description: string,
  extraOptions: Fig.Option[] = []
): Fig.Subcommand => ({
  name,
  description,
  options: [forceOption("Overwrite existing configuration"), ...extraOptions],
});

const completionSpec: Fig.Spec = {
  name: "redwood",
  description:
    "Redwood provides a first-class CLI that helps you at every stage of development, from your first commit to your first deploy",
  subcommands: [
    {
      name: "build",
      icon,
      description: "Build for production",
      args: sidesArg("Which side(s) to build"),
      options: [
        verboseOption("Print more"),
        toggle("prerender", "Prerender after building web [default: true]"),
        toggle("prisma", "Generate the Prisma client [default: true]", "--db"),
      ],
    },
    {
      name: ["check", "diagnostics"],
      icon,
      description:
        "Get structural diagnostics for a Redwood project (experimental)",
    },
    {
      name: ["console", "c"],
      icon,
      description: "Launch an interactive Redwood shell (experimental)",
    },
    {
      name: ["data-migrate", "dataMigrate", "dm"],
      icon,
      description: "Migrate the data in your database",
      subcommands: [
        {
          name: "install",
          description:
            "Add the RW_DataMigration model to your schema and create the dataMigrations directory",
        },
        {
          name: "up",
          description:
            "Run any outstanding Data Migrations against the database",
          options: [
            {
              name: ["--import-db-client-from-dist", "--db-from-dist"],
              description: "Import the db client from dist",
            },
            {
              name: ["--dist-path", "-d"],
              description:
                "Path to the api dist directory [default: the api dist directory of the project]",
              args: {
                name: "path",
                template: "folders",
              },
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      icon,
      description: "Start development servers for api, and web",
      args: sidesArg("Which dev server(s) to start"),
      options: [
        {
          name: ["--forward", "--fwd"],
          description:
            'String of one or more Vite dev server config options, for example: --fwd="--port=1234 --open=false"',
          hidden: true,
          args: {
            name: "options",
            description: "Options to pass to the Vite dev server",
          },
        },
        toggle("generate", "Generate artifacts [default: true]"),
        {
          name: "--apiDebugPort",
          description:
            "Port on which to expose the API server debugger. If you supply the flag with no value it defaults to 18911",
          args: {
            name: "port",
            description: "Debugger port",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "deploy",
      icon,
      description: "Deploy your Redwood project",
      subcommands: [
        {
          name: "baremetal",
          description: "Deploy to baremetal server(s)",
          args: {
            name: "environment",
            description: "The environment to deploy to",
            isOptional: true,
          },
          options: [
            {
              name: "--first-run",
              description:
                "Set this flag the first time you deploy: starts server processes from scratch",
            },
            toggle("df", "Check available disk space [default: true]"),
            toggle("update", "Update code to latest revision [default: true]"),
            toggle("install", "Run `yarn install` [default: true]"),
            toggle("migrate", "Run database migration tasks [default: true]"),
            toggle(
              "build",
              "Run build process for the deployed sides [default: true]"
            ),
            toggle("restart", "Restart server processes [default: true]"),
            toggle("cleanup", "Remove old deploy directories [default: true]"),
            {
              name: "--releaseDir",
              description:
                "Directory to create for the latest release, defaults to timestamp",
              args: {
                name: "directory",
              },
            },
            {
              name: "--branch",
              description: "The branch to deploy",
              args: {
                name: "branch",
              },
            },
            {
              name: "--maintenance",
              description:
                "Put up (up) or take down (down) a maintenance page by replacing the content of web/dist/200.html with web/src/maintenance.html",
              args: {
                name: "status",
                suggestions: ["up", "down"],
              },
            },
            {
              name: "--rollback",
              description: "Rollback a number of releases",
              args: {
                name: "count",
                description: "Number of releases to roll back",
                isOptional: true,
              },
            },
            {
              name: "--verbose",
              description: "Verbose mode, for debugging purposes",
            },
          ],
        },
        {
          name: "flightcontrol",
          description:
            "Build, migrate, and serve commands for Flightcontrol deploy",
          args: sideChoiceArg("Side to deploy"),
          options: [
            toggle("prisma", "Apply database migrations [default: true]"),
            {
              name: "--serve",
              description: "Run server for api in production",
            },
            toggle(
              "data-migrate",
              "Apply data migrations [default: true]",
              "--dm"
            ),
          ],
        },
        {
          name: "netlify",
          description: "Build command for Netlify deploy",
          options: buildDeployOptions,
        },
        {
          name: "render",
          description: "Build, migrate, and serve command for Render deploy",
          args: sideChoiceArg("Side to deploy"),
          options: [
            toggle("prisma", "Apply database migrations [default: true]"),
            toggle(
              "data-migrate",
              "Apply data migrations [default: true]",
              "--dm"
            ),
          ],
        },
        {
          name: ["serverless", "sls"],
          description: "Deploy to AWS via the serverless framework",
          options: [
            {
              name: "--stage",
              description:
                "Serverless stage pass through param [default: production]",
              args: {
                name: "stage",
                default: "production",
              },
            },
            {
              name: ["--sides", "--side"],
              description: "Which side(s) to deploy [default: api and web]",
              args: {
                name: "side",
                isVariadic: true,
                suggestions: sides,
              },
            },
            toggle("verbose", "Verbosity of logs [default: true]"),
            {
              name: "--pack-only",
              description:
                "Only build and pack, and don't push code up using serverless",
            },
            {
              name: "--first-run",
              description:
                "Set this flag the first time you deploy, to configure your API URL on the web side",
            },
          ],
        },
        {
          name: "vercel",
          description: "Build command for Vercel deploy",
          options: buildDeployOptions,
        },
      ],
    },
    {
      name: ["destroy", "d"],
      icon,
      description: "Rollback changes made by the generate command",
      subcommands: [
        destroyComponent(
          "cell",
          "Destroy a cell component",
          "Name of the cell"
        ),
        destroyComponent(
          "component",
          "Destroy a component",
          "Name of the component"
        ),
        destroyComponent(
          "directive",
          "Destroy a directive",
          "Name of the directive"
        ),
        destroyComponent(
          "function",
          "Destroy a Function",
          "Name of the Function"
        ),
        destroyComponent(
          "layout",
          "Destroy a layout component",
          "Name of the layout"
        ),
        {
          name: "page",
          description: "Destroy a page and route component",
          args: [
            nameArg("Name of the page"),
            {
              name: "path",
              description: "URL path to the page. Defaults to name",
              isOptional: true,
            },
          ],
        },
        {
          name: "scaffold",
          description:
            "Destroy pages, SDL, and Services files based on a given DB schema Model",
          args: nameArg("Model to destroy the scaffold of", "model"),
        },
        {
          name: "sdl",
          description:
            "Destroy a GraphQL schema and service component based on a given DB schema Model",
          args: nameArg("Model to destroy the sdl of", "model"),
        },
        destroyComponent(
          "service",
          "Destroy a service component",
          "Name of the service"
        ),
      ],
    },
    {
      name: "exec",
      icon,
      description: "Run scripts generated with yarn generate script",
      args: {
        name: "name",
        description:
          "The file name (extension is optional) of the script to run",
        isOptional: true,
        generators: scripts,
      },
      options: [
        toggle("prisma", "Generate the Prisma client [default: true]"),
        {
          name: ["--list", "-l"],
          description: "List available scripts",
        },
        {
          name: ["--silent", "-s"],
          description:
            "Silence Redwood's output, leaving only the script output",
        },
      ],
    },
    {
      name: ["experimental", "exp"],
      icon,
      description: "Run or setup experimental features",
      subcommands: [
        experimentalCommand(
          "setup-inngest",
          "Setup Inngest for background, scheduled, delayed, multi-step, and fan-out jobs"
        ),
        experimentalCommand(
          "setup-opentelemetry",
          "Setup OpenTelemetry within the API side",
          [verboseOption()]
        ),
        experimentalCommand(
          "setup-react-compiler",
          "Enable the experimental React Compiler"
        ),
        experimentalCommand(
          "setup-rsc",
          "Enable React Server Components (RSC)"
        ),
        experimentalCommand(
          "setup-streaming-ssr",
          "Enable React Streaming and Server Side Rendering (SSR)"
        ),
      ],
    },
    {
      name: ["generate", "g"],
      icon,
      description: "Generate boilerplate code and type definitions",
      subcommands: [
        {
          name: "cell",
          description: "Generate a cell component",
          args: nameArg("Name of the cell"),
          options: [
            ...componentGeneratorOptions,
            {
              name: ["--list", "-l"],
              description:
                "Use when you want to generate a cell for a list of the model name",
            },
            {
              name: "--query",
              description:
                "Use to enforce a specific query name within the generated cell - must be unique",
              args: {
                name: "query",
              },
            },
          ],
        },
        {
          name: "component",
          description: "Generate a component",
          args: nameArg("Name of the component"),
          options: componentGeneratorOptions,
        },
        {
          name: ["data-migration", "dataMigration", "dm"],
          description: "Generate a data migration",
          args: nameArg("A descriptor of what this data migration does"),
          options: baseGeneratorOptions,
        },
        {
          name: "dbAuth",
          description:
            "Generate Login, Signup and Forgot Password pages for dbAuth",
          options: [
            ...baseGeneratorOptions,
            {
              name: "--skip-forgot",
              description: "Skip generating the Forgot Password page",
            },
            {
              name: "--skip-login",
              description: "Skip generating the login page",
            },
            {
              name: "--skip-reset",
              description: "Skip generating the Reset Password page",
            },
            {
              name: "--skip-signup",
              description: "Skip generating the signup page",
            },
            {
              name: ["--webauthn", "-w"],
              description: "Include WebAuthn support (TouchID/FaceID)",
            },
            {
              name: "--username-label",
              description: "Override default form label for username field",
              args: {
                name: "label",
              },
            },
            {
              name: "--password-label",
              description: "Override default form label for password field",
              args: {
                name: "label",
              },
            },
          ],
        },
        {
          name: "directive",
          description: "Generate a directive",
          args: nameArg("Name of your directive"),
          options: [
            ...componentGeneratorOptions,
            {
              name: "--type",
              description:
                "Whether to generate a validator or transformer directive",
              args: {
                name: "type",
                suggestions: ["validator", "transformer"],
              },
            },
          ],
        },
        {
          name: "function",
          description: "Generate a Function",
          args: nameArg("Name of the Function"),
          options: baseGeneratorOptions,
        },
        {
          name: "job",
          description: "Generate a Background Job",
          args: nameArg("Name of the Job"),
          options: [
            ...baseGeneratorOptions,
            toggle("tests", "Generate test files [default: true]"),
          ],
        },
        {
          name: "layout",
          description: "Generate a layout component",
          args: nameArg("Name of the layout"),
          options: [
            ...componentGeneratorOptions,
            {
              name: "--skipLink",
              description: "Generate with skip link",
            },
          ],
        },
        {
          name: "model",
          description: "Generate a RedwoodRecord model",
          args: nameArg("Name of the model to create"),
          options: baseGeneratorOptions,
        },
        {
          name: ["og-image", "ogImage", "ogimage"],
          description: "Generate an og:image component",
          args: {
            name: "path",
            description:
              "Path to the page to create the og:image component for (ex: Products/ProductPage)",
          },
          options: [
            ...baseGeneratorOptions,
            { name: "--verbose", description: "Print all logs" },
          ],
        },
        {
          name: "page",
          description: "Generate a page component",
          args: [
            nameArg("Name of the page"),
            {
              name: "path",
              description:
                "URL path to the page, or just {param}. Defaults to name",
              isOptional: true,
            },
          ],
          options: componentGeneratorOptions,
        },
        {
          name: "realtime",
          description:
            "Generate a subscription or live query used with RedwoodJS Realtime",
          args: nameArg(
            "Name of the realtime event to setup. This should be a type or model name like: Widget, Sprocket, etc"
          ),
          options: [
            {
              name: ["--type", "-t"],
              description: "Type of realtime event to setup",
              args: {
                name: "type",
                suggestions: ["liveQuery", "subscription"],
              },
            },
            forceOption("Overwrite existing configuration"),
            verboseOption(),
          ],
        },
        {
          name: "scaffold",
          description:
            "Generate Pages, SDL, and Services files based on a given DB schema Model. Also accepts <path/model>",
          args: nameArg(
            "Model to scaffold. You can also use <path/model> to nest files by type at the given path directory (or directories). For example, 'rw g scaffold admin/post'",
            "model"
          ),
          options: [
            ...baseGeneratorOptions,
            docsOption,
            testsOption,
            {
              name: "--tailwind",
              description:
                "Generate TailwindCSS version of scaffold.css (automatically set to true if TailwindCSS config exists)",
            },
          ],
        },
        {
          name: "script",
          description: "Generate a command line script",
          args: nameArg("A descriptor of what this script does"),
          options: baseGeneratorOptions,
        },
        {
          name: "sdl",
          description:
            "Generate a GraphQL schema and service component based on a given DB schema Model",
          args: nameArg("Model to generate the sdl for", "model"),
          options: [
            ...baseGeneratorOptions,
            testsOption,
            docsOption,
            crudOption("Also generate mutations"),
          ],
        },
        {
          name: "secret",
          description:
            "Generates a secret key using a cryptographically-secure source of entropy",
          options: [
            {
              name: "--length",
              description: "Length of the generated secret [default: 32]",
              args: {
                name: "length",
                default: "32",
              },
            },
            {
              name: "--raw",
              description: "Prints just the raw secret",
            },
          ],
        },
        {
          name: "service",
          description: "Generate a service component",
          args: nameArg("Name of the service"),
          options: [
            ...baseGeneratorOptions,
            testsOption,
            crudOption("Create CRUD functions"),
          ],
        },
        {
          name: "types",
          description: "Generate supplementary code",
        },
      ],
    },
    {
      name: "info",
      icon,
      description: "Print your system environment information",
    },
    {
      name: "jobs",
      icon,
      description: "Starts the RedwoodJob runner to process background jobs",
      subcommands: [
        { name: "work", description: "Start a worker and process jobs" },
        {
          name: "workoff",
          description: "Start a worker and exit after all jobs processed",
        },
        { name: "start", description: "Start workers in daemon mode" },
        { name: "stop", description: "Stop any daemonized job workers" },
        {
          name: "restart",
          description: "Stop and start any daemonized job workers",
        },
        { name: "clear", description: "Clear the job queue" },
      ],
    },
    {
      name: "lint",
      icon,
      description: "Lint your files",
      args: {
        name: "path",
        description:
          "Specify file(s) or directory(ies) to lint relative to project root",
        isOptional: true,
        isVariadic: true,
        template: ["filepaths", "folders"],
      },
      options: [
        {
          name: "--fix",
          description: "Try to fix errors",
        },
      ],
    },
    {
      name: ["prerender", "render"],
      icon,
      description: "Prerender pages of your Redwood app at build time",
      options: [
        {
          name: ["--path", "-p", "--route"],
          description:
            "Router path to prerender. Especially useful for debugging",
          args: {
            name: "path",
          },
        },
        {
          name: ["--dry-run", "-d", "--dryrun"],
          description: "Run prerender and output to console",
        },
        verboseOption("Print more"),
      ],
    },
    {
      name: "prisma",
      icon: "https://raw.githubusercontent.com/prisma/docs/main/src/images/favicon-16x16.png",
      description: "Run Prisma CLI with experimental features",
      subcommands: (prismaSpec as Fig.Subcommand).subcommands,
    },
    {
      name: "record",
      icon,
      description:
        "Setup RedwoodRecord for your project (experimental). Caches a JSON version of your data model and adds api/src/models/index.js with some config",
      subcommands: [
        {
          name: "init",
          description:
            "Parse schema.prisma and cache the datamodel as JSON, and add some configuration in api/src/models/index.js",
        },
      ],
    },
    {
      name: "serve",
      icon,
      description: "Start a server for serving both the api and web sides",
      subcommands: [
        {
          name: "api",
          description: "Start a server for serving the api side",
          options: [
            {
              name: ["--port", "-p"],
              description: "The port to listen at",
              args: {
                name: "port",
              },
            },
            {
              name: "--host",
              description:
                "The host to listen at. Note that you most likely want this to be '0.0.0.0' in production",
              args: {
                name: "host",
              },
            },
            {
              name: [
                "--apiRootPath",
                "--api-root-path",
                "--rootPath",
                "--root-path",
              ],
              description:
                "Root path where your api functions are served [default: /]",
              args: {
                name: "path",
                default: "/",
              },
            },
          ],
        },
        {
          name: "web",
          description: "Start a server for serving the web side",
          options: [
            {
              name: ["--port", "-p"],
              description: "The port to listen on",
              args: {
                name: "port",
              },
            },
            {
              name: "--host",
              description:
                "The host to listen on. Note that you most likely want this to be '0.0.0.0' in production",
              args: {
                name: "host",
              },
            },
            {
              name: ["--apiProxyTarget", "--api-proxy-target"],
              description:
                "Forward requests from the apiUrl (in the redwood.toml) to this target. apiUrl must be a relative URL",
              args: {
                name: "target",
              },
            },
            {
              name: ["--apiHost", "--api-host"],
              description: "Deprecated alias of --apiProxyTarget",
              deprecated: true,
              args: {
                name: "target",
              },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--webPort", "--web-port"],
          description: "The port for the web server to listen on",
          args: {
            name: "port",
          },
        },
        {
          name: ["--webHost", "--web-host"],
          description:
            "The host for the web server to listen on. Note that you most likely want this to be '0.0.0.0' in production",
          args: {
            name: "host",
          },
        },
        {
          name: ["--apiPort", "--api-port"],
          description: "The port for the api server to listen on",
          args: {
            name: "port",
          },
        },
        {
          name: ["--apiHost", "--api-host"],
          description:
            "The host for the api server to listen on. Note that you most likely want this to be '0.0.0.0' in production",
          args: {
            name: "host",
          },
        },
        {
          name: [
            "--apiRootPath",
            "--api-root-path",
            "--rootPath",
            "--root-path",
          ],
          description:
            "Root path where your api functions are served [default: /]",
          args: {
            name: "path",
            default: "/",
          },
        },
      ],
    },
    {
      name: "setup",
      icon,
      description: "Initialize project config and install packages",
      subcommands: [
        {
          name: "auth",
          description: "Set up an auth configuration",
          subcommands: [
            authProvider("auth0", "Set up auth for Auth0"),
            authProvider(
              ["azure-active-directory", "azureActiveDirectory"],
              "Set up auth for Azure Active Directory"
            ),
            authProvider("clerk", "Set up auth for Clerk"),
            authProvider("custom", "Set up a custom auth provider"),
            authProvider("dbAuth", "Set up auth for dbAuth", [
              {
                name: ["--webauthn", "-w"],
                description: "Include WebAuthn support (TouchID/FaceID)",
              },
              {
                name: ["--createUserModel", "-u"],
                description: "Create a User database model",
              },
              {
                name: ["--generateAuthPages", "-g"],
                description: "Generate auth pages (login, signup, etc.)",
              },
            ]),
            authProvider("firebase", "Set up auth for Firebase"),
            authProvider("netlify", "Set up auth for Netlify"),
            authProvider("supabase", "Set up auth for Supabase"),
            authProvider("supertokens", "Set up auth for SuperTokens"),
          ],
        },
        {
          name: "cache",
          description: "Sets up an init file for service caching",
          args: {
            name: "client",
            description: "Cache client",
            suggestions: ["memcached", "redis"],
          },
          options: [forceOption("Overwrite existing cache.js file")],
        },
        {
          name: "deploy",
          description: "Setup deployment to various targets",
          options: [
            {
              ...setupForceOption,
              isPersistent: true,
            },
          ],
          subcommands: [
            {
              name: "baremetal",
              description: "Setup Baremetal deploy",
            },
            {
              name: "coherence",
              description: "Setup Coherence deploy",
            },
            {
              name: "flightcontrol",
              description: "Setup Flightcontrol deploy",
              options: [
                {
                  name: ["--database", "-d"],
                  description:
                    "Database deployment for Flightcontrol only [default: postgresql]",
                  args: {
                    name: "database",
                    default: "postgresql",
                    suggestions: ["none", "postgresql", "mysql"],
                  },
                },
              ],
            },
            {
              name: "netlify",
              description: "Setup Netlify deploy",
            },
            {
              name: "render",
              description: "Setup Render deploy",
              options: [
                {
                  name: ["--database", "-d"],
                  description:
                    "Database deployment for Render only [default: postgresql]",
                  args: {
                    name: "database",
                    default: "postgresql",
                    suggestions: ["none", "postgresql", "sqlite"],
                  },
                },
              ],
            },
            {
              name: ["serverless", "aws-serverless"],
              description:
                "Setup Serverless Framework AWS deploy (deprecated, not officially supported)",
              deprecated: true,
            },
            {
              name: "vercel",
              description: "Setup Vercel deploy",
            },
          ],
        },
        {
          name: "docker",
          description: "Setup the default Redwood Dockerfile",
          options: [setupForceOption],
        },
        {
          name: "generator",
          description: "Copies generator templates locally for customization",
          args: {
            name: "name",
            description: "Name of the generator to copy templates from",
            suggestions: [
              "cell",
              "component",
              "directive",
              "function",
              "job",
              "layout",
              "model",
              "ogImage",
              "page",
              "realtime",
              "scaffold",
              "sdl",
              "service",
            ],
          },
          options: [forceOption()],
        },
        {
          name: "graphql",
          description: "Set up GraphQL feature support",
          subcommands: [
            {
              name: "fragments",
              description: "Set up Fragments for GraphQL",
              options: [setupForceOption],
            },
            {
              name: "trusted-documents",
              description: "Set up Trusted Documents for GraphQL",
              options: [setupForceOption],
            },
          ],
        },
        {
          name: "i18n",
          description: "Set up i18n",
          options: [setupForceOption],
        },
        {
          name: "jobs",
          description:
            "Sets up the config file and parent directory for background jobs",
          options: [forceOption()],
        },
        {
          name: "mailer",
          description:
            "Setup the redwood mailer. This will install the required packages and add the required initial configuration to your redwood app",
          options: [
            setupForceOption,
            {
              name: "--skip-examples",
              description:
                "Only include required files and exclude any examples",
            },
          ],
        },
        {
          name: "middleware",
          description: "Set up a middleware",
          subcommands: [
            {
              name: ["og-image", "ogImage", "ogimage"],
              description: "Set up OG Image generation middleware",
              options: [setupForceOption],
            },
          ],
        },
        {
          name: "monitoring",
          description: "Set up monitoring in your Redwood app",
          subcommands: [
            {
              name: "sentry",
              description: "Setup Sentry error and performance tracking",
              options: [forceOption("Overwrite existing Sentry config files")],
            },
          ],
        },
        {
          name: "package",
          description:
            "Run a bin from an NPM package with version compatibility checks",
          args: {
            name: "npm-package",
            description:
              "The NPM package to run. This can be a package name or a package name with a version or tag",
          },
          options: [
            {
              name: ["--force", "-f"],
              description:
                "Proceed with a potentially incompatible version of the package",
              isDangerous: true,
            },
          ],
        },
        {
          name: "realtime",
          description: "Setup RedwoodJS Realtime",
          options: [
            toggle(
              "includeExamples",
              "Include examples of how to implement liveQueries and subscriptions [default: true]",
              "-e",
              "--examples"
            ),
            setupForceOption,
            verboseOption(),
          ],
        },
        {
          name: "server-file",
          description: "Setup the server file",
          options: [setupForceOption, verboseOption()],
        },
        {
          name: "tsconfig",
          description: "Set up tsconfig for web and api sides",
          options: [forceOption("Overwrite existing tsconfig.json files")],
        },
        {
          name: "ui",
          description: "Set up a UI design or style library",
          subcommands: [
            {
              name: "chakra-ui",
              description: "Set up Chakra UI",
              options: [setupForceOption, setupInstallOption],
            },
            {
              name: "mantine",
              description: "Set up Mantine UI",
              options: [
                setupForceOption,
                setupInstallOption,
                {
                  name: ["--packages", "-p"],
                  description:
                    "Mantine packages to install. Specify 'all' to install all packages [default: core, hooks]",
                  args: {
                    name: "package",
                    isVariadic: true,
                    suggestions: [
                      "all",
                      "core",
                      "dates",
                      "dropzone",
                      "form",
                      "hooks",
                      "modals",
                      "notifications",
                      "prism",
                      "rte",
                      "spotlight",
                    ],
                  },
                },
              ],
            },
            {
              name: ["tailwindcss", "tailwind", "tw"],
              description: "Set up tailwindcss and PostCSS",
              options: [setupForceOption, setupInstallOption],
            },
          ],
        },
        {
          name: "uploads",
          description:
            "Setup uploads and storage. This will install the required packages and add the required initial configuration to your redwood app",
          options: [setupForceOption],
        },
        {
          name: "vite",
          description: "Configure the web side to use Vite",
          options: [
            setupForceOption,
            verboseOption(),
            toggle(
              "add-package",
              "Allows you to skip adding the @redwoodjs/vite package. Useful for testing [default: true]"
            ),
          ],
        },
      ],
    },
    {
      name: ["storybook", "sb"],
      icon,
      description:
        "Launch Storybook: a tool for building UI components and pages in isolation",
      options: [
        {
          name: "--build",
          description: "Build Storybook",
        },
        {
          name: "--build-directory",
          description:
            "Directory in web/ to store static files [default: public/storybook]",
          args: {
            name: "directory",
            default: "public/storybook",
            template: "folders",
          },
        },
        {
          name: "--ci",
          description: "Start server in CI mode, with no interactive prompts",
        },
        toggle(
          "open",
          "Open Storybook in your browser on start [default: true]"
        ),
        {
          name: "--port",
          description: "Which port to run Storybook on [default: 7910]",
          args: {
            name: "port",
            default: "7910",
          },
        },
        {
          name: "--smoke-test",
          description:
            "CI mode plus smoke-test (skip prompts; don't open browser; exit after successful start)",
        },
      ],
    },
    {
      name: "studio",
      icon,
      description: "Run the Redwood development studio",
      options: [
        toggle("open", "Open the studio in your browser [default: true]"),
      ],
    },
    {
      name: "test",
      icon,
      description: "Run Jest tests. Defaults to watch mode",
      args: {
        name: "filter",
        description:
          "Which side(s) to test, and/or a regular expression to match against your test files to filter by",
        isOptional: true,
        isVariadic: true,
        suggestions: sides,
      },
      options: [
        toggle(
          "watch",
          "Run tests related to changed files based on hg/git (uncommitted files). Specify the name or path to a file to focus on a specific set of tests [default: true]"
        ),
        {
          name: "--watchAll",
          description: "Run all tests (forwarded to Jest)",
        },
        {
          name: ["--collect-coverage", "--collectCoverage"],
          description:
            "Show test coverage summary and output info to the coverage directory in the project root. See this directory for an .html coverage report",
        },
        {
          name: "--clearCache",
          description:
            "Delete the Jest cache directory and exit without running tests (forwarded to Jest)",
        },
        toggle(
          "db-push",
          "Sync the test database with your Prisma schema without requiring a migration. It creates a test database if it doesn't already exist. Ignored if your project doesn't have an api side [default: true]"
        ),
      ],
    },
    {
      name: "ts-to-js",
      icon,
      description: "Convert a TypeScript project to JavaScript",
      deprecated: true,
    },
    {
      name: ["type-check", "tsc", "tc"],
      icon,
      description: "Run a TypeScript compiler check on your project",
      args: sidesArg("Which side(s) to run a typecheck on"),
      options: [
        toggle("prisma", "Generate the Prisma client [default: true]"),
        toggle(
          "generate",
          "Regenerate types within the project [default: true]"
        ),
        verboseOption("Print more"),
      ],
    },
    {
      name: "upgrade",
      icon,
      description: "Upgrade all @redwoodjs packages via interactive CLI",
      options: [
        {
          name: ["--dry-run", "-d"],
          description: "Check for outdated packages without upgrading",
        },
        {
          name: ["--tag", "-t"],
          description:
            'Choices are "latest", "rc", "next", "canary", "experimental", or a specific version (e.g. "0.19.3"). WARNING: "canary", "rc" and "experimental" are unstable releases, and "canary" releases include breaking changes often requiring codemods if upgrading a project',
          args: {
            name: "tag",
            description: "Release tag or version to upgrade to",
            suggestions: [
              {
                name: "latest",
                description: "Upgrade to the latest stable release",
              },
              {
                name: "rc",
                description: "Upgrade to the latest RC release",
              },
              {
                name: "next",
                description: "Upgrade to the latest next release",
              },
              {
                name: "canary",
                description: "Upgrade to the latest canary release",
              },
              {
                name: "experimental",
                description: "Upgrade to the latest experimental release",
              },
            ],
          },
        },
        verboseOption("Print verbose logs"),
        toggle(
          "dedupe",
          "Skip the dedupe check with --no-dedupe [default: true]"
        ),
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show version number",
    },
    {
      name: "--cwd",
      description:
        "Working directory to use (where redwood.toml is located). Can also be set with the RWJS_CWD environment variable",
      isPersistent: true,
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--load-env-files",
      description:
        "Load additional .env files. Values defined in files specified later override earlier ones",
      isPersistent: true,
      args: {
        name: "name",
        description: "Name of the env file, for example stripe for .env.stripe",
        isVariadic: true,
      },
    },
    {
      name: ["--telemetry", "--no-telemetry"],
      description: "Whether to send anonymous usage telemetry to RedwoodJS",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
