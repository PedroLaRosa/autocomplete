// Blitz v3.0.2 (npm latest, 2026-11-19). Source: Blitz CLI source at tag blitz@3.0.2 (packages/blitz/src/cli), cross-checked with the published npm dist and `blitz --help`.
// Notes: the 3.x CLI no longer has help, install or autocomplete commands (and the cg and p aliases); dev and start forward their arguments to the Next.js CLI, only the flags Blitz itself parses are listed.
import prismaSpec from "./prisma";

const prismaCommands = (prismaSpec as Fig.Subcommand).subcommands;

const icon =
  "https://raw.githubusercontent.com/blitz-js/art/master/square-logo-600.png";

const portOptions: Fig.Option[] = [
  {
    name: ["-p", "--port"],
    description: "Set port number",
    args: {
      name: "port",
    },
  },
  {
    name: ["-H", "--hostname"],
    description: "Set server hostname",
    args: {
      name: "hostname",
    },
  },
];

const inspectOption: Fig.Option = {
  name: "--inspect",
  description: "Enable the Node.js inspector",
};

const dryRunDescription =
  "Show what files will be created without writing them to disk";

const completionSpec: Fig.Spec = {
  name: "blitz",
  description:
    "Blitz.js CLI is your single access point for interacting with your app, from database management to code generation",
  options: [
    {
      name: ["-e", "--env"],
      description: "App environment name",
      isPersistent: true,
      args: {
        name: "env",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help for command",
      isPersistent: true,
      priority: 1,
    },
    {
      name: ["--version", "-v"],
      description: "Version number",
    },
  ],
  subcommands: [
    {
      name: ["build", "b"],
      description: "Create a production build",
      icon,
      options: [inspectOption],
    },
    {
      name: "codegen",
      description: "Run the Blitz codegen",
      icon,
    },
    {
      name: ["console", "c"],
      description: "Run the Blitz console REPL",
      icon,
      options: [
        {
          name: ["-d", "--only-db"],
          description: "Load only the db module",
        },
      ],
    },
    {
      name: "db",
      description: "Run database commands",
      icon,
      options: [
        {
          name: ["-f", "--file"],
          description: "Path of the seed file to run",
          args: {
            name: "file",
            template: "filepaths",
            default: "db/seeds",
          },
        },
      ],
      args: {
        name: "command",
        description: "Run specific db command",
        suggestions: [
          {
            name: "seed",
            description:
              "Generates seeded data in the database via Prisma. You need db/seeds.ts or db/seeds/index.ts",
          },
        ],
      },
    },
    {
      name: ["dev", "d"],
      description: "Start a development server",
      icon,
      options: [...portOptions, inspectOption],
    },
    {
      name: ["export", "e"],
      description: "Export your Blitz app as a static application",
      icon,
      options: [
        {
          name: ["-o", "--outdir"],
          description: "Set the output dir (defaults to 'out')",
          args: {
            name: "outdir",
            template: "folders",
          },
        },
      ],
    },
    {
      name: ["generate", "g"],
      description: "Generate new files for your Blitz project",
      isDangerous: true,
      icon,
      options: [
        {
          name: ["-c", "--context"],
          description:
            "Provide a context folder within which we'll place the generated files for better code organization. You can also supply this in the name of the model to be generated (e.g. `blitz generate query admin/projects`). Combining the `--context` flags and supplying context via the model name in the same command is not supported",
          args: {
            name: "context",
          },
        },
        {
          name: ["-p", "--parent"],
          description:
            "Specify a parent model to be used for generating nested routes for dependent data when generating pages, or to create hierarchical validation in queries and mutations. The code will be generated with the nested data model in mind. Most often this should be used in conjunction with 'blitz generate all'",
          args: {
            name: "parent",
          },
        },
        {
          name: ["-d", "--dry-run"],
          description: dryRunDescription,
        },
      ],
      args: [
        {
          name: "type",
          description: "What files to generate",
          suggestions: [
            "all",
            "crud",
            "model",
            "pages",
            "queries",
            "query",
            "mutations",
            "mutation",
            "resource",
            "custom-templates",
          ].map((suggestion) => ({
            name: suggestion,
            insertValue: `${suggestion} `,
            priority: 100,
          })),
        },
        {
          name: "model",
          description:
            'The name of your model, like "user". Can be singular or plural - same result',
        },
        {
          name: "fields",
          description:
            "Model fields for generators that create a database model, like name:string completed:boolean:default=false belongsTo:project?",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: ["new", "n"],
      description: "Create a new Blitz project",
      icon,
      options: [
        {
          name: "--npm",
          description: "Use npm as the package manager",
        },
        {
          name: "--yarn",
          description: "Use yarn as the package manager",
        },
        {
          name: "--pnpm",
          description: "Use pnpm as the package manager",
        },
        {
          name: "--template",
          description: "The app template to use",
          args: {
            name: "template",
            suggestions: [
              {
                name: "app",
                description:
                  "App Router, full setup with database and auth (recommended)",
              },
              {
                name: "pages",
                description: "Pages Router, full setup with database and auth",
              },
              {
                name: "minimal",
                description:
                  "Pages Router, minimal setup with no database and no auth",
              },
            ],
          },
        },
        {
          name: "--form",
          description: "A form library",
          args: {
            name: "form",
            suggestions: [
              { name: "formik", description: "Formik (recommended)" },
              { name: "finalform", description: "React Final Form" },
              { name: "hookform", description: "React Hook Form" },
            ],
          },
        },
        {
          name: "--skip-install",
          description: "Skip installing dependencies",
        },
        {
          name: "--dry-run",
          description: dryRunDescription,
        },
        {
          name: "--no-git",
          description: "Skip git repository creation",
        },
        {
          name: "--skip-upgrade",
          description: "Skip blitz upgrade if outdated",
        },
      ],
      args: {
        name: "name",
        description: "Name of your new project",
        isOptional: true,
      },
    },
    {
      name: "prisma",
      description: "Loads env variables then proxies all args to Prisma CLI",
      subcommands: prismaCommands,
    },
    {
      name: ["routes", "r"],
      description: "Display all Blitz URL Routes",
      icon,
    },
    {
      name: ["start", "s"],
      description: "Start the production server",
      icon,
      options: [...portOptions, inspectOption],
    },
  ],
};
export default completionSpec;
