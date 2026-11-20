// Angular CLI v22.3.0 (npm "latest", 2026-11-20). Source: angular/angular-cli
// v22.3.0 command modules (packages/angular/cli/src/commands), @schematics/angular
// schemas and the @angular/build application, dev-server, unit-test and
// extract-i18n builder schemas (the builders `ng new` sets up). Re-checked
// 2026-11-20 against the git tag and the npm tarballs (schemas identical):
// all 19 root commands, every non-hidden schematic option, alias and enum.
// Hidden options (--path, --experimental-tool, --dump-virtual-files) and
// object-typed builder options the CLI does not expose are left out.

interface ProjectDetails {
  projectType: string;
  architect?: Record<string, { configurations?: Record<string, unknown> }>;
}

const projectsGenerator = {
  script: ["ng", "config", "projects"],
  postProcess: function (out) {
    try {
      const projects = JSON.parse(out);

      return Object.entries(projects).map(
        ([projectName, details]: [string, ProjectDetails]) => ({
          name: projectName,
          description: details.projectType,
        })
      );
    } catch (e) {}
    return [];
  },
};

const parseProjects = (out: string): [string, ProjectDetails][] => {
  try {
    return Object.entries(JSON.parse(out));
  } catch (e) {
    return [];
  }
};

// `project:target` and `project:target:configuration`, as `ng run` completes them
const targetsGenerator: Fig.Generator = {
  script: ["ng", "config", "projects"],
  postProcess: (out) =>
    parseProjects(out).flatMap(([project, { architect = {} }]) =>
      Object.entries(architect).flatMap(([target, { configurations }]) =>
        [
          `${project}:${target}`,
          ...Object.keys(configurations ?? {}).map(
            (c) => `${project}:${target}:${c}`
          ),
        ].map((name) => ({ name }))
      )
    ),
};

// ponytail: union of every target's configurations; per-command filtering if
// projects ever define clashing names
const configurationsGenerator: Fig.Generator = {
  script: ["ng", "config", "projects"],
  postProcess: (out) =>
    [
      ...new Set(
        parseProjects(out).flatMap(([, { architect = {} }]) =>
          Object.values(architect).flatMap(({ configurations }) =>
            Object.keys(configurations ?? {})
          )
        )
      ),
    ].map((name) => ({ name })),
};

const projectsOption = {
  name: "--project",
  description: "Project name",
  args: {
    generators: projectsGenerator,
  },
};

const projectArg: Fig.Arg = {
  name: "project",
  description: "The project to run the command for",
  isOptional: true,
  generators: projectsGenerator,
};

const configurationOption: Fig.Option = {
  name: ["--configuration", "-c"],
  description: "Comma-separated builder configurations from angular.json",
  args: { name: "configuration", generators: configurationsGenerator },
};

const globalOption: Fig.Option = {
  name: ["--global", "-g"],
  description: "Use the global configuration in your home directory",
};

const verboseOption: Fig.Option = {
  name: "--verbose",
  description: "Display additional details about internal operations",
};

const schematicOptions: Fig.Option[] = [
  { name: "--interactive", description: "Enable interactive input prompts" },
  {
    name: ["--dry-run", "-d"],
    description: "Report activity without writing out results",
  },
  {
    name: "--defaults",
    description: "Disable interactive prompts for options with a default",
  },
  { name: "--force", description: "Force overwriting of existing files" },
];

const skipTests: Fig.Option = {
  name: "--skip-tests",
  description: "Skip creating spec.ts test files",
};
const flat: Fig.Option = {
  name: "--flat",
  description: "Create the files at the top level instead of in a new folder",
};
const skipImport: Fig.Option = {
  name: "--skip-import",
  description: "Don't import it into its closest NgModule",
};
const standalone: Fig.Option = {
  name: "--standalone",
  description: "Use the standalone API instead of NgModules",
};
const moduleOption: Fig.Option = {
  name: ["--module", "-m"],
  description: "The NgModule to declare it in",
  args: { name: "module" },
};
const exportOption: Fig.Option = {
  name: "--export",
  description: "Export it from the declaring NgModule",
};
const typeOption: Fig.Option = {
  name: "--type",
  description: "Custom type appended to the file name",
  args: { name: "type" },
};
const typeSeparator: Fig.Option = {
  name: "--type-separator",
  description: "Separator before the type in the file name",
  args: { name: "separator", suggestions: ["-", "."] },
};
const addTypeToClassName: Fig.Option = {
  name: "--add-type-to-class-name",
  description: "Append the type to the class name too",
};
const functional: Fig.Option = {
  name: "--functional",
  description: "Generate a function instead of a class",
};
const prefix: Fig.Option = {
  name: ["--prefix", "-p"],
  description: "Prefix for generated selectors",
  args: { name: "prefix" },
};
const selector: Fig.Option = {
  name: "--selector",
  description: "The HTML selector to use",
  args: { name: "selector" },
};
const skipInstall: Fig.Option = {
  name: "--skip-install",
  description: "Skip installing packages",
};
const skipPackageJson: Fig.Option = {
  name: "--skip-package-json",
  description: "Don't add dependencies to package.json",
};
const skipTsConfig: Fig.Option = {
  name: "--skip-ts-config",
  description: "Don't add a path mapping to tsconfig.json",
};
const entryFile: Fig.Option = {
  name: "--entry-file",
  description: "Public API file name, without the .ts extension",
  args: { name: "file" },
};
const inlineStyle: Fig.Option = {
  name: ["--inline-style", "-s"],
  description: "Include styles inline in the component .ts file",
};
const inlineTemplate: Fig.Option = {
  name: ["--inline-template", "-t"],
  description: "Include the template inline in the component .ts file",
};
const testRunner: Fig.Option = {
  name: "--test-runner",
  description: "The unit testing runner to use",
  deprecated: {
    description: "New projects will only be configured with Vitest",
  },
  args: { name: "runner", suggestions: ["vitest", "karma"] },
};
const fileNameStyleGuide: Fig.Option = {
  name: "--file-name-style-guide",
  description: "File naming convention for generated files",
  args: { name: "year", suggestions: ["2016", "2025"] },
};
const minimal: Fig.Option = {
  name: "--minimal",
  description: "Create a project without any testing frameworks",
};
const strict: Fig.Option = {
  name: "--strict",
  description: "Enable stricter type checking and bundle budgets",
};
const zoneless: Fig.Option = {
  name: "--zoneless",
  description: "Create an application that does not use zone.js",
};
const newProjectRoot: Fig.Option = {
  name: "--new-project-root",
  description: "Where new projects are created, relative to the workspace",
  args: { name: "path" },
};
const packageManager: Fig.Option = {
  name: "--package-manager",
  description: "The package manager used to install dependencies",
  args: { name: "manager", suggestions: ["npm", "yarn", "pnpm", "bun"] },
};

const architectCommand = (
  name: Fig.SingleOrArray<string>,
  description: string,
  options: Fig.Option[] = []
): Fig.Subcommand => ({
  name,
  description,
  args: projectArg,
  options: [configurationOption, ...options],
});

const completionSpec: Fig.Spec = {
  name: "ng",
  description: "CLI interface for Angular",
  subcommands: [
    {
      name: "add",
      description: "Adds support for an external library to your project",
      args: { name: "collection", description: "The package to be added" },
      options: [
        {
          name: "--registry",
          description: "The NPM registry to use",
          args: { name: "url" },
        },
        verboseOption,
        {
          name: "--skip-confirmation",
          description: "Skip the confirmation prompt before installing",
        },
        ...schematicOptions,
      ],
    },
    {
      name: "analytics",
      description: "Configures the gathering of Angular CLI usage metrics",
      subcommands: [
        {
          name: "info",
          description: "Prints analytics gathering and reporting configuration",
        },
        {
          name: ["disable", "off"],
          description: "Disables analytics gathering and reporting",
          options: [globalOption],
        },
        {
          name: ["enable", "on"],
          description: "Enables analytics gathering and reporting",
          options: [globalOption],
        },
        {
          name: "prompt",
          description: "Prompts to set the analytics gathering status",
          options: [globalOption],
        },
      ],
    },
    architectCommand(
      ["build", "b"],
      "Compiles an Angular application or library into an output directory",
      [
        {
          name: "--assets",
          description: "Define the assets to be copied to the output directory",
          args: {
            name: "assets",
          },
          isRepeatable: true,
        },
        {
          name: "--browser",
          description:
            "The full path for the browser entry point to the application, relative to the current workspace",
          args: {
            name: "browser",
          },
        },
        {
          name: "--server",
          description:
            "The full path for the server entry point to the application, relative to the current workspace",
          args: {
            name: "server",
            isOptional: true,
          },
        },
        {
          name: "--polyfills",
          description: "A list of polyfills to include in the build",
          args: {
            name: "polyfills",
          },
          isRepeatable: true,
        },
        {
          name: "--ts-config",
          description:
            "The full path for the TypeScript configuration file, relative to the current workspace",
          args: {
            name: "config",
          },
        },
        {
          name: "--deploy-url",
          description:
            "Customize the base path for the URLs of resources in 'index.html' and component stylesheets",
          args: {
            name: "url",
          },
        },
        {
          name: "--scripts",
          description: "Global scripts to be included in the build",
          args: {
            name: "scripts",
          },
          isRepeatable: true,
        },
        {
          name: "--styles",
          description: "Global styles to be included in the build",
          args: {
            name: "styles",
          },
          isRepeatable: true,
        },
        {
          name: "--inline-style-language",
          description:
            "The stylesheet language to use for the application's inline component styles",
          args: {
            name: "language",
            suggestions: ["css", "less", "sass", "scss"],
          },
        },
        {
          name: "--external-dependencies",
          description:
            "Exclude the listed external dependencies from being bundled into the bundle",
          args: {
            name: "dependencies",
          },
          isRepeatable: true,
        },
        {
          name: "--clear-screen",
          description:
            "Automatically clear the terminal screen during rebuilds",
        },
        {
          name: "--optimization",
          description: "Enables optimization of the build output",
        },
        {
          name: "--define",
          description:
            "Defines global identifiers that will be replaced with a specified constant value when found in any JavaScript or TypeScript code including libraries",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
        },
        {
          name: "--conditions",
          description:
            "Custom package resolution conditions used to resolve conditional exports/imports",
          args: {
            name: "conditions",
          },
          isRepeatable: true,
        },
        {
          name: "--output-path",
          description: "Specify the output path relative to workspace root",
          args: {
            name: "path",
          },
        },
        {
          name: "--aot",
          description: "Build using Ahead of Time compilation",
        },
        {
          name: "--source-map",
          description: "Output source maps for scripts and styles",
        },
        {
          name: "--base-href",
          description: "Base url for the application being built",
          args: {
            name: "href",
          },
        },
        {
          name: "--verbose",
          description: "Adds more details to output logging",
        },
        {
          name: "--progress",
          description: "Log progress to the console while building",
        },
        {
          name: "--i18n-missing-translation",
          description: "How to handle missing translations for i18n",
          args: {
            name: "translation",
            suggestions: ["warning", "error", "ignore"],
          },
        },
        {
          name: "--i18n-duplicate-translation",
          description: "How to handle duplicate translations for i18n",
          args: {
            name: "translation",
            suggestions: ["warning", "error", "ignore"],
          },
        },
        {
          name: "--localize",
          description: "Translate the bundles in one or more locales",
          args: {
            name: "localize",
            isOptional: true,
          },
          isRepeatable: true,
        },
        {
          name: "--watch",
          description: "Run build when files change",
        },
        {
          name: "--output-hashing",
          description: "Define the output filename cache-busting hashing mode",
          args: {
            name: "hashing",
            suggestions: ["none", "all", "media", "bundles"],
          },
        },
        {
          name: "--poll",
          description:
            "Enable and define the file watching poll time period in milliseconds",
          args: {
            name: "poll",
          },
        },
        {
          name: "--delete-output-path",
          description: "Delete the output path before building",
        },
        {
          name: "--preserve-symlinks",
          description: "Do not use the real path when resolving modules",
        },
        {
          name: "--extract-licenses",
          description: "Extract all licenses in a separate file",
        },
        {
          name: "--named-chunks",
          description: "Use file name for lazy loaded chunks",
        },
        {
          name: "--subresource-integrity",
          description: "Enables the use of subresource integrity validation",
        },
        {
          name: "--service-worker",
          description: "Generates a service worker configuration",
          args: {
            name: "worker",
            isOptional: true,
          },
        },
        {
          name: "--index",
          description:
            "Configures the generation of the application's HTML index",
          args: {
            name: "index",
            isOptional: true,
          },
        },
        {
          name: "--stats-json",
          description:
            "Generates a 'browser-stats.json' file which can be analyzed with https://esbuild.github.io/analyze/",
        },
        {
          name: "--web-worker-ts-config",
          description: "TypeScript configuration for Web Worker modules",
          args: {
            name: "config",
          },
        },
        {
          name: "--cross-origin",
          description:
            "Define the crossorigin attribute setting of elements that provide CORS support",
          args: {
            name: "origin",
            suggestions: ["none", "anonymous", "use-credentials"],
          },
        },
        {
          name: "--allowed-common-js-dependencies",
          description:
            "A list of CommonJS or AMD packages that are allowed to be used without a build time warning",
          args: {
            name: "dependencies",
          },
          isRepeatable: true,
        },
        {
          name: "--prerender",
          description:
            "Prerender (SSG) pages of your application during build time",
        },
        {
          name: "--ssr",
          description:
            "Server side render (SSR) pages of your application during runtime",
        },
        {
          name: "--app-shell",
          description: "Generates an application shell during build time",
        },
        {
          name: "--output-mode",
          description: "Defines the type of build output artifact",
          args: {
            name: "mode",
            suggestions: ["static", "server"],
          },
        },
      ]
    ),
    {
      name: "cache",
      description: "Configure persistent disk cache and retrieve statistics",
      subcommands: [
        { name: "clean", description: "Deletes persistent disk cache" },
        {
          name: "info",
          description: "Prints persistent disk cache configuration and stats",
        },
        {
          name: ["disable", "off"],
          description: "Disables persistent disk cache for the workspace",
        },
        {
          name: ["enable", "on"],
          description: "Enables disk cache for the workspace",
        },
      ],
    },
    {
      name: "completion",
      description: "Set up Angular CLI autocompletion for your terminal",
      subcommands: [
        {
          name: "script",
          description: "Generate a bash and zsh autocompletion script",
        },
      ],
    },
    {
      name: "config",
      description: "Retrieves or sets Angular configuration values",
      args: [
        {
          name: "json-path",
          description: 'The configuration key, e.g. "a[3].foo.bar[2]"',
          isOptional: true,
        },
        {
          name: "value",
          description: "A new value for the key",
          isOptional: true,
        },
      ],
      options: [globalOption],
    },
    architectCommand(
      "deploy",
      "Invokes the deploy builder for a specified project"
    ),
    architectCommand(
      ["e2e", "e"],
      "Builds and serves an Angular application, then runs end-to-end tests"
    ),
    architectCommand(
      "extract-i18n",
      "Extracts i18n messages from source code",
      [
        {
          name: "--build-target",
          description:
            "A builder target to extract i18n messages in the format of `project:target[:configuration]`",
          args: {
            name: "target",
          },
        },
        {
          name: "--format",
          description: "Output format for the generated file",
          args: {
            name: "format",
            suggestions: [
              "xmb",
              "xlf",
              "xlif",
              "xliff",
              "xlf2",
              "xliff2",
              "json",
              "arb",
              "legacy-migrate",
            ],
          },
        },
        {
          name: "--progress",
          description: "Log progress to the console",
        },
        {
          name: "--output-path",
          description: "Path where output will be placed",
          args: {
            name: "path",
          },
        },
        {
          name: "--out-file",
          description: "Name of the file to output",
          args: {
            name: "file",
          },
        },
        {
          name: "--i18n-duplicate-translation",
          description:
            "How to handle duplicate messages found during extraction",
          args: {
            name: "translation",
            suggestions: ["error", "warning", "ignore"],
          },
        },
      ]
    ),
    {
      name: ["generate", "g"],
      description: "Generates and/or modifies files based on a schematic",
      args: {
        name: "schematic",
        description: "The [collection:schematic] to run",
      },
      options: schematicOptions.map((o) => ({ ...o, isPersistent: true })),
      subcommands: [
        {
          name: "service-worker",
          description: "Initializes a service worker setup",
          options: [
            projectsOption,
            {
              name: "--target",
              description: "The build target to apply the service worker to",
              args: {
                name: "target",
              },
            },
          ],
        },
        {
          name: ["application", "app"],
          description: "Create an Angular application",
          args: {
            name: "name",
            description: "The name for the new application",
            isOptional: true,
          },
          options: [
            {
              name: "--project-root",
              description:
                "The directory where the new application's files will be created, relative to the workspace root",
              args: {
                name: "root",
              },
            },
            inlineStyle,
            inlineTemplate,
            {
              name: "--view-encapsulation",
              description:
                "Sets the view encapsulation mode for the application's components",
              args: {
                name: "encapsulation",
                suggestions: ["Emulated", "None", "ShadowDom"],
              },
            },
            {
              name: "--routing",
              description:
                "Generate an application with routing already configured",
            },
            prefix,
            {
              name: "--style",
              description:
                "The type of stylesheet files to be created for components in the application",
              args: {
                name: "style",
                suggestions: ["css", "scss", "sass", "less", "tailwind"],
              },
            },
            {
              name: ["--skip-tests", "-S"],
              description: "Skip the generation of unit test files `spec.ts`",
            },
            testRunner,
            skipPackageJson,
            minimal,
            skipInstall,
            strict,
            standalone,
            {
              name: "--ssr",
              description:
                "Configure the application for Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)",
            },
            zoneless,
            fileNameStyleGuide,
          ],
        },
        {
          name: ["class", "cl"],
          description: "Create a class",
          args: {
            name: "name",
            description: "The name for the new class",
            isOptional: true,
          },
          options: [projectsOption, skipTests, typeOption],
        },
        {
          name: ["component", "c"],
          description: "Create an Angular component",
          args: {
            name: "name",
            description: "The name for the new component",
            isOptional: true,
          },
          options: [
            projectsOption,
            {
              name: ["--display-block", "-b"],
              description:
                "Adds `:host { display: block; }` to the component's stylesheet, ensuring the component renders as a block-level element",
            },
            inlineStyle,
            inlineTemplate,
            standalone,
            {
              name: ["--view-encapsulation", "-v"],
              description: "Sets the view encapsulation mode for the component",
              args: {
                name: "encapsulation",
                suggestions: ["Emulated", "None", "ShadowDom"],
              },
            },
            {
              name: ["--change-detection", "-c"],
              description:
                "Configures the change detection strategy for the component",
              args: {
                name: "detection",
                suggestions: ["Eager", "OnPush"],
              },
            },
            prefix,
            {
              name: "--style",
              description:
                "Specify the type of stylesheet to be created for the component, or `none` to skip creating a stylesheet",
              args: {
                name: "style",
                suggestions: ["css", "scss", "sass", "less", "none"],
              },
            },
            typeOption,
            addTypeToClassName,
            skipTests,
            flat,
            skipImport,
            selector,
            {
              name: "--skip-selector",
              description:
                "Skip the generation of an HTML selector for the component",
            },
            moduleOption,
            exportOption,
            {
              name: "--export-default",
              description:
                "Use a default export for the component in its TypeScript file instead of a named export",
            },
            {
              name: "--ng-html",
              description:
                "Generate component template files with an '.ng.html' file extension instead of '.html'",
            },
          ],
        },
        {
          name: ["directive", "d"],
          description: "Create an Angular directive",
          args: {
            name: "name",
            description: "The name for the new directive",
            isOptional: true,
          },
          options: [
            projectsOption,
            prefix,
            skipTests,
            skipImport,
            selector,
            standalone,
            flat,
            moduleOption,
            exportOption,
            typeOption,
            addTypeToClassName,
          ],
        },
        {
          name: ["enum", "e"],
          description: "Create an enumeration",
          args: {
            name: "name",
            description: "The name for the new enum",
            isOptional: true,
          },
          options: [projectsOption, typeOption],
        },
        {
          name: ["guard", "g"],
          description: "Create a guard",
          args: {
            name: "name",
            description: "The name for the new route guard",
            isOptional: true,
          },
          options: [
            skipTests,
            flat,
            projectsOption,
            functional,
            {
              name: ["--implements", "--guardType"],
              description: "Specifies the type(s) of guard to create",
              args: {
                name: "implements",
                suggestions: [
                  "CanActivate",
                  "CanActivateChild",
                  "CanDeactivate",
                  "CanMatch",
                ],
              },
              isRepeatable: true,
            },
            typeSeparator,
          ],
        },
        {
          name: ["resolver", "r"],
          description: "Create a resolver",
          args: {
            name: "name",
            description: "The name for the new resolver",
            isOptional: true,
          },
          options: [skipTests, flat, functional, projectsOption, typeSeparator],
        },
        {
          name: "interceptor",
          description: "Create an interceptor",
          args: {
            name: "name",
            description: "The name for the new interceptor",
            isOptional: true,
          },
          options: [projectsOption, flat, skipTests, functional, typeSeparator],
        },
        {
          name: ["interface", "i"],
          description: "Create an interface",
          args: [
            {
              name: "name",
              description: "The name for the new interface",
              isOptional: true,
            },
            {
              name: "type",
              description:
                "Adds a custom type to the filename, allowing you to create more descriptive interface names",
              isOptional: true,
            },
          ],
          options: [
            projectsOption,
            {
              name: "--prefix",
              description: "A prefix to be added to the interface name",
              args: {
                name: "prefix",
              },
            },
          ],
        },
        {
          name: ["module", "m"],
          description: "Create an Angular module",
          args: {
            name: "name",
            description: "The name of the NgModule",
            isOptional: true,
          },
          options: [
            projectsOption,
            {
              name: "--routing",
              description: "Create a routing module",
            },
            {
              name: "--routing-scope",
              description: "The scope for the new routing module",
              args: {
                name: "scope",
                suggestions: ["Child", "Root"],
              },
            },
            {
              name: "--route",
              description: "The route path for a lazy-loaded module",
              args: {
                name: "route",
              },
            },
            flat,
            moduleOption,
            typeSeparator,
          ],
        },
        {
          name: ["pipe", "p"],
          description: "Create an Angular pipe",
          args: {
            name: "name",
            description: "The name for the new pipe",
            isOptional: true,
          },
          options: [
            projectsOption,
            flat,
            skipTests,
            skipImport,
            standalone,
            moduleOption,
            exportOption,
            typeSeparator,
          ],
        },
        {
          name: ["service", "s"],
          description: "Create an Angular service",
          args: {
            name: "name",
            description: "The name for the new service",
            isOptional: true,
          },
          options: [
            projectsOption,
            flat,
            skipTests,
            typeOption,
            addTypeToClassName,
            {
              name: "--injectable",
              description:
                "When true, generates an `@Injectable` instead of `@Service`",
            },
          ],
        },
        {
          name: "server",
          description: "Create an Angular server app",
          hidden: true,
          options: [projectsOption, skipInstall],
        },
        {
          name: "ssr",
          description: "Adds SSR to an Angular app",
          hidden: true,
          options: [projectsOption, skipInstall],
        },
        {
          name: "app-shell",
          description: "Create an application shell",
          options: [projectsOption],
        },
        {
          name: ["library", "lib"],
          description: "Generate a library project for Angular",
          args: {
            name: "name",
            description: "The name for the new library",
            isOptional: true,
          },
          options: [
            entryFile,
            prefix,
            skipPackageJson,
            skipInstall,
            skipTsConfig,
            {
              name: "--project-root",
              description:
                "The root directory for the new library, relative to the workspace root",
              args: {
                name: "root",
              },
            },
            standalone,
            testRunner,
          ],
        },
        {
          name: "entry-point",
          description:
            "Generate a secondary entry point for an Angular library",
          args: {
            name: "name",
            description:
              "The name of the secondary entry point (for example, 'testing' or 'feature/sub')",
            isOptional: true,
          },
          options: [
            projectsOption,
            entryFile,
            prefix,
            standalone,
            skipTests,
            skipTsConfig,
          ],
        },
        {
          name: "web-worker",
          description: "Create a Web Worker",
          args: {
            name: "name",
            description: "The name for the new web worker",
            isOptional: true,
          },
          options: [
            projectsOption,
            {
              name: "--snippet",
              description:
                "Generate a code snippet that demonstrates how to create and use the new web worker",
            },
          ],
        },
        {
          name: "environments",
          description: "Generate project environment files",
          options: [projectsOption],
        },
        {
          name: "config",
          description: "Generates a configuration file",
          args: {
            name: "type",
            description: "Specifies the type of configuration file to generate",
            isOptional: true,
            suggestions: ["karma", "browserslist", "vitest"],
          },
          options: [projectsOption],
        },
        {
          name: "ai-config",
          description: "Generates an AI tool configuration file",
          options: [
            {
              name: "--tool",
              description:
                "Specifies which AI tools to generate configuration files (AGENTS.md, CLAUDE.md, MCP server config) for",
              args: {
                name: "tool",
                suggestions: [
                  "none",
                  "claude-code",
                  "cursor",
                  "gemini-cli",
                  "open-ai-codex",
                  "vscode",
                ],
              },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "refactor-jasmine-vitest",
          description: "Refactors Jasmine tests to use Vitest APIs",
          hidden: true,
          options: [
            {
              name: "--include",
              description: "A path to a specific file or directory to refactor",
              args: {
                name: "include",
              },
            },
            {
              name: "--file-suffix",
              description:
                "The file suffix to identify test files (e.g. '.spec.ts', '.test.ts')",
              args: {
                name: "suffix",
              },
            },
            projectsOption,
            {
              name: "--verbose",
              description:
                "Enable verbose logging to see detailed information about the transformations being applied",
            },
            {
              name: "--add-imports",
              description: "Whether to add imports for the Vitest API",
            },
            {
              name: "--browser-mode",
              description:
                "Whether the tests are intended to run in browser mode",
            },
            {
              name: "--fake-async",
              description:
                "Whether to transform `fakeAsync` tests to Vitest fake timers",
            },
            {
              name: "--report",
              description:
                "Whether to generate a summary report file (jasmine-vitest-<date>.md) in the project root",
            },
          ],
        },
      ],
    },
    architectCommand("lint", "Runs linting tools on Angular application code"),
    {
      name: "make-this-awesome",
      description: "Nothing to do; already awesome",
      hidden: true,
    },
    {
      name: "mcp",
      description: "Start the Angular CLI MCP server",
      hidden: true,
      options: [
        {
          name: "--root",
          description: "Allowed root directory for filesystem access",
          isRepeatable: true,
          args: { name: "path", template: "folders" },
        },
        { name: "--read-only", description: "Only register read-only tools" },
        {
          name: "--local-only",
          description:
            "Only register tools that do not require internet access",
        },
      ],
    },
    {
      name: ["new", "n"],
      description: "Creates a new Angular workspace",
      args: {
        name: "name",
        description: "The name for the new workspace and the initial project",
        isOptional: true,
      },
      options: [
        {
          name: ["--collection", "-c"],
          description: "A collection of schematics to generate the initial app",
          args: { name: "collection" },
        },
        {
          name: "--directory",
          description:
            "The directory where the new workspace and project should be created",
          args: {
            name: "directory",
          },
        },
        skipInstall,
        {
          name: ["--skip-git", "-g"],
          description:
            "Do not initialize a Git repository in the new workspace",
        },
        {
          name: "--commit",
          description:
            "Configure the initial Git commit for the new repository",
        },
        newProjectRoot,
        inlineStyle,
        inlineTemplate,
        {
          name: "--view-encapsulation",
          description:
            "Sets the view encapsulation mode for components in the initial project",
          args: {
            name: "encapsulation",
            suggestions: ["Emulated", "None", "ShadowDom"],
          },
        },
        {
          name: "--routing",
          description: "Enable routing in the initial application project",
        },
        prefix,
        {
          name: "--style",
          description:
            "The type of stylesheet files to be created for components in the initial project",
          args: {
            name: "style",
            suggestions: ["css", "scss", "sass", "less", "tailwind"],
          },
        },
        {
          name: ["--skip-tests", "-S"],
          description: "Skip the generation of unit test files `spec.ts`",
        },
        testRunner,
        {
          name: "--create-application",
          description:
            "Create a new initial application project in the new workspace",
        },
        minimal,
        strict,
        packageManager,
        standalone,
        {
          name: "--ssr",
          description:
            "Configure the initial application for Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)",
        },
        zoneless,
        {
          name: "--ai-config",
          description:
            "Specifies which AI tools to generate configuration files for",
          args: {
            name: "config",
            suggestions: [
              "none",
              "claude-code",
              "cursor",
              "gemini-cli",
              "open-ai-codex",
              "vscode",
            ],
          },
          isRepeatable: true,
        },
        fileNameStyleGuide,
        ...schematicOptions,
      ],
    },
    {
      name: "run",
      description: "Runs an Architect target defined in your project",
      args: {
        name: "target",
        description: "Target as project:target[:configuration]",
        generators: targetsGenerator,
      },
    },
    architectCommand(
      ["serve", "dev", "s"],
      "Builds and serves your application, rebuilding on file changes",
      [
        {
          name: "--build-target",
          description:
            "A build builder target to serve in the format of `project:target[:configuration]`",
          args: {
            name: "target",
          },
        },
        {
          name: "--port",
          description: "Port to listen on",
          args: {
            name: "port",
          },
        },
        {
          name: "--host",
          description: "Host to listen on",
          args: {
            name: "host",
          },
        },
        {
          name: "--proxy-config",
          description: "Proxy configuration file",
          args: {
            name: "config",
          },
        },
        {
          name: "--ssl",
          description: "Serve using HTTPS",
        },
        {
          name: "--ssl-key",
          description: "SSL key to use for serving HTTPS",
          args: {
            name: "key",
          },
        },
        {
          name: "--ssl-cert",
          description: "SSL certificate to use for serving HTTPS",
          args: {
            name: "cert",
          },
        },
        {
          name: "--allowed-hosts",
          description: "The hosts that the development server will respond to",
          args: {
            name: "hosts",
            isOptional: true,
          },
          isRepeatable: true,
        },
        {
          name: "--define",
          description:
            "Defines global identifiers that will be replaced with a specified constant value when found in any JavaScript or TypeScript code including libraries",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
        },
        {
          name: "--headers",
          description: "Custom HTTP headers to be added to all responses",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
        },
        {
          name: ["--open", "-o"],
          description: "Opens the url in default browser",
        },
        {
          name: "--verbose",
          description: "Adds more details to output logging",
        },
        {
          name: "--live-reload",
          description:
            "Whether to reload the page on change, using live-reload",
        },
        {
          name: "--serve-path",
          description: "The pathname where the application will be served",
          args: {
            name: "path",
          },
        },
        {
          name: "--hmr",
          description: "Enable hot module replacement",
        },
        {
          name: "--watch",
          description: "Rebuild on change",
        },
        {
          name: "--poll",
          description:
            "Enable and define the file watching poll time period in milliseconds",
          args: {
            name: "poll",
          },
        },
        {
          name: "--inspect",
          description: "Activate debugging inspector",
          args: {
            name: "inspect",
            isOptional: true,
          },
        },
        {
          name: "--prebundle",
          description:
            "Enable and control the Vite-based development server's prebundling capabilities",
        },
      ]
    ),
    architectCommand(["test", "t"], "Runs unit tests in a project", [
      {
        name: "--build-target",
        description:
          "Specifies the build target to use for the unit test build in the format `project:target[:configuration]`",
        args: {
          name: "target",
        },
      },
      {
        name: "--ts-config",
        description:
          "The path to the TypeScript configuration file, relative to the workspace root",
        args: {
          name: "config",
        },
      },
      {
        name: "--runner",
        description: "Specifies the test runner to use for test execution",
        args: {
          name: "runner",
          suggestions: ["karma", "vitest"],
        },
      },
      {
        name: "--runner-config",
        description:
          "Specifies the configuration file for the selected test runner",
        args: {
          name: "config",
          isOptional: true,
        },
      },
      {
        name: "--browsers",
        description: "Specifies the browsers to use for test execution",
        args: {
          name: "browsers",
        },
        isRepeatable: true,
      },
      {
        name: "--browser-viewport",
        description:
          "Specifies the browser viewport dimensions for browser-based tests in the format `widthxheight`",
        args: {
          name: "viewport",
        },
      },
      {
        name: "--include",
        description:
          "Specifies glob patterns of files to include for testing, relative to the project source root",
        args: {
          name: "include",
        },
        isRepeatable: true,
      },
      {
        name: "--exclude",
        description:
          "Specifies glob patterns of files to exclude from testing, relative to the project source root",
        args: {
          name: "exclude",
        },
        isRepeatable: true,
      },
      {
        name: "--filter",
        description:
          "Specifies a regular expression pattern to match against test suite and test names",
        args: {
          name: "filter",
        },
      },
      {
        name: "--watch",
        description:
          "Enables watch mode, which re-runs tests when source files change",
      },
      {
        name: "--headless",
        description: "Forces all configured browsers to run in headless mode",
      },
      {
        name: "--debug",
        description:
          "Enables debugging mode for tests, allowing the use of the Node Inspector",
      },
      {
        name: "--ui",
        description: "Enables the Vitest UI for interactive test execution",
      },
      {
        name: "--isolate",
        description: "Enables isolation for test execution",
      },
      {
        name: "--splitting",
        description: "Enables code splitting for test execution",
        deprecated: {
          description: "No longer needed with Vitest 5",
        },
      },
      {
        name: "--quiet",
        description:
          "Suppresses the verbose build summary and stats table on each rebuild",
      },
      {
        name: "--coverage",
        description: "Enables coverage reporting for tests",
      },
      {
        name: "--coverage-include",
        description:
          "Specifies glob patterns of files to include in the coverage report",
        args: {
          name: "include",
        },
        isRepeatable: true,
      },
      {
        name: "--coverage-exclude",
        description:
          "Specifies glob patterns of files to exclude from the coverage report",
        args: {
          name: "exclude",
        },
        isRepeatable: true,
      },
      {
        name: "--coverage-reporters",
        description: "Specifies the reporters to use for coverage results",
        args: {
          name: "reporters",
          suggestions: [
            "html",
            "lcov",
            "lcovonly",
            "text",
            "text-summary",
            "cobertura",
            "json",
            "json-summary",
          ],
        },
        isRepeatable: true,
      },
      {
        name: "--reporters",
        description: "Specifies the reporters to use during test execution",
        args: {
          name: "reporters",
          suggestions: [
            "default",
            "verbose",
            "dots",
            "json",
            "junit",
            "tap",
            "tap-flat",
            "html",
          ],
        },
        isRepeatable: true,
      },
      {
        name: "--output-file",
        description: "Specifies a file path for the test report",
        args: {
          name: "file",
        },
      },
      {
        name: "--providers-file",
        description:
          "Specifies the path to a TypeScript file that provides an array of Angular providers for the test environment",
        args: {
          name: "file",
        },
      },
      {
        name: "--polyfills",
        description: "A list of polyfills to include in the build",
        args: {
          name: "polyfills",
        },
        isRepeatable: true,
      },
      {
        name: "--setup-files",
        description:
          "A list of paths to global setup files that are executed before the test files",
        args: {
          name: "files",
        },
        isRepeatable: true,
      },
      {
        name: "--progress",
        description: "Shows build progress information in the console",
      },
      {
        name: "--list-tests",
        description:
          "Lists all discovered test files and exits the process without building or executing the tests",
      },
    ]),
    {
      name: "update",
      description: "Updates your workspace and its dependencies",
      args: {
        name: "packages",
        description: "The names of package(s) to update",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--force",
          description: "Ignore peer dependency version mismatches",
        },
        {
          name: "--next",
          description: "Use the prerelease version, including beta and RCs",
        },
        {
          name: "--migrate-only",
          description: "Only perform a migration, do not update the version",
        },
        {
          name: "--name",
          description: "The name of the migration to run",
          args: { name: "name" },
          exclusiveOn: ["--from", "--to"],
        },
        {
          name: "--from",
          description: "Version from which to migrate from",
          args: { name: "version" },
          dependsOn: ["--migrate-only"],
          exclusiveOn: ["--name"],
        },
        {
          name: "--to",
          description: "Version up to which to apply migrations",
          args: { name: "version" },
          dependsOn: ["--from", "--migrate-only"],
          exclusiveOn: ["--name"],
        },
        {
          name: "--allow-dirty",
          description: "Allow updating with modified or untracked files",
        },
        verboseOption,
        {
          name: ["--create-commits", "-C"],
          description:
            "Create source control commits for updates and migrations",
        },
      ],
    },
    {
      name: ["version", "v"],
      description: "Outputs Angular CLI version",
      options: [
        {
          name: "--json",
          description: "Outputs version information in JSON format",
        },
      ],
    },
  ],
  options: [
    {
      name: "--version",
      description: "View your Angular CLI version",
    },
  ],
};

export default completionSpec;
