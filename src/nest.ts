// Nest CLI (@nestjs/cli) v12.0.13 (npm latest and git tag 12.0.13, 2026-11-19). Source: nestjs/nest-cli 12.0.13
// (bin/nest.ts, commands/*.command.ts, lib/schematics/nest.collection.ts) and the @nestjs/schematics 12.0.13 package
// (collection.json aliases, resource `type` enum); the binary was not run. `nest generate` offers the default
// @nestjs/schematics collection only, custom collections are not modelled.

const dryRunOption: Fig.Option = {
  name: ["-d", "--dry-run"],
  description: "Report actions that would be taken without writing out results",
};

const skipInstallOption: Fig.Option = {
  name: ["-s", "--skip-install"],
  description: "Skip package installation",
};

const projectOption: Fig.Option = {
  name: ["-p", "--project"],
  description: "Project in which to generate files",
  args: {
    name: "project",
    description: "Project in which to generate files",
    isOptional: true,
  },
};

const collectionOption: Fig.Option = {
  name: ["-c", "--collection"],
  description: "Schematics collection to use",
  args: {
    name: "collection",
    description: "The collection name",
    isOptional: true,
  },
};

const formatOption: Fig.Option = {
  name: "--format",
  description: "Format generated files using Prettier",
};

const observeOptions = (on: string, off: string): Fig.Option[] => [
  {
    name: "--observe",
    description: on,
    exclusiveOn: ["--no-observe"],
  },
  {
    name: "--no-observe",
    description: off,
    exclusiveOn: ["--observe"],
  },
];

const generateOptions: Fig.Option[] = [
  dryRunOption,
  projectOption,
  {
    name: "--flat",
    description: "Enforce flat structure of generated element",
    exclusiveOn: ["--no-flat"],
  },
  {
    name: "--no-flat",
    description: "Enforce that directories are generated",
    exclusiveOn: ["--flat"],
  },
  {
    name: "--spec",
    description: "Enforce spec files generation (default: true)",
    exclusiveOn: ["--no-spec"],
  },
  {
    name: "--no-spec",
    description: "Disable spec files generation",
    exclusiveOn: ["--spec"],
  },
  {
    name: "--spec-file-suffix",
    description: "Use a custom suffix for spec files",
    args: {
      name: "suffix",
      isOptional: true,
    },
  },
  {
    name: "--skip-import",
    description: "Skip importing",
  },
  formatOption,
  collectionOption,
  {
    name: "--type",
    description: "Transport layer type",
    args: {
      name: "type",
      suggestions: [
        "rest",
        "graphql-code-first",
        "graphql-schema-first",
        "microservice",
        "ws",
      ],
    },
  },
  {
    name: "--crud",
    description: "Generate CRUD entry points",
    args: {
      name: "value",
      isOptional: true,
      suggestions: ["true", "false"],
    },
  },
];

// Options shared by `nest build` and `nest start`
const compilerOptions: Fig.Option[] = [
  {
    name: ["-c", "--config"],
    description: "Path to nest-cli configuration file",
    args: {
      name: "path",
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: ["-p", "--path"],
    description: "Path to tsconfig file",
    args: {
      name: "path",
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: ["-w", "--watch"],
    description: "Run in watch mode (live-reload)",
  },
  {
    name: ["-b", "--builder"],
    description: "Builder to be used",
    args: {
      name: "name",
      isOptional: true,
      suggestions: ["tsc", "webpack", "swc", "rspack"],
    },
  },
  {
    name: "--watchAssets",
    description: "Watch non-ts (e.g., .graphql) files mode",
  },
  {
    name: "--webpack",
    description:
      "Use webpack for compilation (deprecated option, use --builder instead)",
    deprecated: true,
  },
  {
    name: "--webpackPath",
    description: "Path to webpack configuration",
    args: {
      name: "path",
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "--rspackPath",
    description: "Path to rspack configuration",
    args: {
      name: "path",
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "--type-check",
    description: "Enable type checking (when SWC is used)",
    exclusiveOn: ["--no-type-check"],
  },
  {
    name: "--no-type-check",
    description: "Disable type checking (when SWC is used)",
    exclusiveOn: ["--type-check"],
  },
  {
    name: "--emit-declarations",
    description: "Emit declaration files (.d.ts) when using SWC builder",
  },
  {
    name: "--silent",
    description: "Suppress informational compiler logs",
  },
  {
    name: "--tsc",
    description: "Use typescript compiler for compilation",
  },
  {
    name: "--preserveWatchOutput",
    description: 'Use "preserveWatchOutput" option when using tsc watch mode',
  },
];

const nameArg = (name: string): Fig.Arg => ({
  name,
  description: `The name of the ${name}`,
});

const pathArg: Fig.Arg = {
  name: "path",
  description: "The path to generate the element in",
  isOptional: true,
  template: "folders",
};

const schematic = (
  name: string | string[],
  description: string,
  argName: string
): Fig.Subcommand => ({
  name,
  description,
  args: [nameArg(argName), pathArg],
  options: generateOptions,
});

const completionSpec: Fig.Spec = {
  name: "nest",
  description: "Nest CLI",
  subcommands: [
    {
      name: ["new", "n"],
      description: "Generate Nest application",
      args: {
        name: "name",
        description: "The name of the project",
        isOptional: true,
      },
      options: [
        {
          name: "--directory",
          description: "Specify the destination directory",
          args: {
            name: "directory",
            isOptional: true,
            template: "folders",
          },
        },
        dryRunOption,
        {
          name: ["-g", "--skip-git"],
          description: "Skip git repository initialization",
        },
        skipInstallOption,
        {
          name: ["-p", "--package-manager"],
          description: "Specify package manager",
          args: {
            name: "packageManager",
            isOptional: true,
            suggestions: ["npm", "yarn", "pnpm", "bun"],
          },
        },
        {
          name: ["-l", "--language"],
          description:
            "Programming language to be used (TypeScript or JavaScript)",
          args: {
            name: "language",
            isOptional: true,
            default: "TypeScript",
            suggestions: ["TypeScript", "JavaScript", "ts", "js"],
          },
        },
        collectionOption,
        {
          name: "--strict",
          description: "Enables strict mode in TypeScript",
        },
        {
          name: ["-t", "--skip-tests"],
          description: "Do not generate testing files for the new project",
        },
        formatOption,
        ...observeOptions(
          "Auto-configure observability with @nestjs/observe",
          "Skip observability setup without being prompted for it"
        ),
        {
          name: "--minimal",
          description:
            "Generate an application whose code is one file, src/main.ts (TypeScript and ESM only)",
        },
      ],
    },
    {
      name: ["generate", "g"],
      description: "Generate a Nest element",
      subcommands: [
        schematic(
          "application",
          "Generate a new application workspace",
          "application"
        ),
        schematic(["class", "cl"], "Generate a new class", "class"),
        schematic(
          ["configuration", "config"],
          "Generate a CLI configuration file",
          "configuration"
        ),
        schematic(
          ["controller", "co"],
          "Generate a controller declaration",
          "controller"
        ),
        schematic(
          ["decorator", "d"],
          "Generate a custom decorator",
          "decorator"
        ),
        schematic(["filter", "f"], "Generate a filter declaration", "filter"),
        schematic(
          ["gateway", "ga"],
          "Generate a gateway declaration",
          "gateway"
        ),
        schematic(["guard", "gu"], "Generate a guard declaration", "guard"),
        schematic(
          ["interceptor", "itc"],
          "Generate an interceptor declaration",
          "interceptor"
        ),
        schematic(["interface", "itf"], "Generate an interface", "interface"),
        schematic(
          ["library", "lib"],
          "Generate a new library within a monorepo",
          "library"
        ),
        schematic(
          ["middleware", "mi"],
          "Generate a middleware declaration",
          "middleware"
        ),
        schematic(["module", "mo"], "Generate a module declaration", "module"),
        schematic(["pipe", "pi"], "Generate a pipe declaration", "pipe"),
        schematic(
          ["provider", "pr"],
          "Generate a provider declaration",
          "provider"
        ),
        schematic(
          ["resolver", "r"],
          "Generate a GraphQL resolver declaration",
          "resolver"
        ),
        schematic(
          ["resource", "res"],
          "Generate a new CRUD resource",
          "resource"
        ),
        schematic(
          ["service", "s"],
          "Generate a service declaration",
          "service"
        ),
        schematic(
          ["sub-app", "app"],
          "Generate a new application within a monorepo",
          "sub-app"
        ),
      ],
    },
    {
      name: "build",
      description: "Build Nest application",
      args: {
        name: "apps",
        description: "The names of the apps to build",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        ...compilerOptions,
        {
          name: "--all",
          description: "Build all projects in a monorepo",
        },
        {
          name: "--parallel",
          description:
            "Build projects in parallel (with --all). Optionally limit concurrency",
          args: {
            name: "concurrency",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "start",
      description: "Run Nest application",
      args: {
        name: "app",
        description: "The name of the app",
        isOptional: true,
      },
      options: [
        ...compilerOptions,
        {
          name: ["-d", "--debug"],
          description: "Run in debug mode (with --inspect flag)",
          args: {
            name: "hostport",
            isOptional: true,
          },
        },
        {
          name: "--sourceRoot",
          description:
            "Points at the root of the source code for the single project in standard mode structures, or the default project in monorepo mode structures",
          args: {
            name: "sourceRoot",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--entryFile",
          description:
            "Path to the entry file where this command will work with. Defaults to the one defined at your Nest's CLI config file",
          args: {
            name: "entryFile",
            isOptional: true,
          },
        },
        {
          name: ["-e", "--exec"],
          description: 'Binary to run (default: "node")',
          args: {
            name: "binary",
            isOptional: true,
          },
        },
        {
          name: "--shell",
          description:
            "Spawn child processes within a shell (see node's child_process.spawn() method docs). Default: true",
          exclusiveOn: ["--no-shell"],
        },
        {
          name: "--no-shell",
          description: "Do not spawn child processes within a shell",
          exclusiveOn: ["--shell"],
        },
        {
          name: "--env-file",
          description:
            "Path to an env file (.env) to be loaded into the environment",
          isRepeatable: true,
          args: {
            name: "path",
            isOptional: true,
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: ["info", "i"],
      description: "Display Nest project details",
    },
    {
      name: "add",
      description: "Adds support for an external library to your project",
      args: {
        name: "library",
        description:
          "The library to add. Library-specific options are forwarded to its schematic",
      },
      options: [
        dryRunOption,
        skipInstallOption,
        {
          ...projectOption,
          description: "Project in which to generate files",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy your application to the cloud (powered by Mau)",
      args: {
        name: "mau-options",
        description: "Options passed through to mau deploy",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: ["upgrade", "update"],
      description: "Upgrade your project to the latest NestJS major version",
      options: [
        dryRunOption,
        skipInstallOption,
        ...observeOptions(
          "Set up @nestjs/observe (skips the prompt)",
          "Do not set up @nestjs/observe (skips the prompt)"
        ),
        {
          name: ["-t", "--tag"],
          description:
            'Use an npm dist-tag (e.g. "next") instead of the default version ranges',
          args: {
            name: "tag",
            isOptional: true,
          },
        },
        collectionOption,
      ],
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "Output the current version",
    },
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
  ],
};
export default completionSpec;
