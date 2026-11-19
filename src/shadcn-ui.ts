// shadcn v4.23.0 (npm "latest" of the `shadcn` package, 2026-11-19). Source: commander definitions read
// statically from dist/index.js of the shadcn@4.23.0 npm tarball (binary not run here), cross-checked with
// packages/shadcn/src/commands/*.ts and apps/v4/content/docs/(root)/cli.mdx of shadcn-ui/ui main (also 4.23.0).
// The CLI binary is now `shadcn` (the old `shadcn-ui` npm package is deprecated at 0.9.5); this spec keeps its file name.
// The component generator now reads apps/v4/public/r/index.json (the old apps/www/public/registry/index.json is gone).

interface RegistryItem {
  name: string;
  type: string;
  registryDependencies?: string[];
}

const componentGenerator: Fig.Generator = {
  cache: { strategy: "stale-while-revalidate", ttl: 24 * 60 * 60 * 1000 },
  custom: async (_tokens, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "curl",
      args: [
        "-sL",
        "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/public/r/index.json",
      ],
    });
    try {
      const components = JSON.parse(stdout) as RegistryItem[];
      return components.map((component) => ({
        name: component.name,
        description: component.type,
        priority: 50,
        icon: "fig://icon?type=box",
      }));
    } catch {
      return [];
    }
  },
};

const cwdOption: Fig.Option = {
  name: ["-c", "--cwd"],
  description: "The working directory. Defaults to the current directory",
  args: {
    name: "cwd",
    template: "folders",
  },
};

const yesOption: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Skip confirmation prompt",
};

const silentOption: Fig.Option = {
  name: ["-s", "--silent"],
  description: "Mute output",
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Output as JSON",
};

const baseSuggestions: Fig.Suggestion[] = [
  { name: "base", description: "Base UI" },
  { name: "radix", description: "Radix UI" },
  { name: "aria", description: "React Aria" },
];

const presetSuggestions: Fig.Suggestion[] = [
  { name: "nova", description: "Lucide / Geist" },
  { name: "vega", description: "Lucide / Inter" },
  { name: "maia", description: "Hugeicons / Figtree" },
  { name: "lyra", description: "Phosphor / JetBrains Mono" },
  { name: "mira", description: "Hugeicons / Inter" },
  { name: "luma", description: "Lucide / Inter" },
  { name: "sera", description: "Lucide / Noto Sans + Playfair Display" },
  { name: "rhea", description: "Lucide / Inter" },
];

const migrateNameSuggestions: (string | Fig.Suggestion)[] = [
  // Base colors (migrate base-color)
  "neutral",
  "zinc",
  "stone",
  "mauve",
  "olive",
  "mist",
  "taupe",
  // Icon libraries (migrate icons)
  "lucide",
  "hugeicons",
  "tabler",
  "phosphor",
  "remixicon",
  "radix",
];

const presetCodeArg: Fig.Arg = {
  name: "code",
  description: "The preset code",
};

const completionSpec: Fig.Spec = {
  name: "shadcn-ui",
  description: "Build your component library with the shadcn CLI",
  subcommands: [
    {
      name: ["init", "create"],
      description: "Initialize your project and install dependencies",
      args: {
        name: "components",
        description: "Names, url or local path to component",
        isOptional: true,
        isVariadic: true,
        generators: componentGenerator,
        template: "filepaths",
      },
      options: [
        {
          name: ["-t", "--template"],
          description: "The template to use",
          args: {
            name: "template",
            suggestions: [
              "next",
              "start",
              "vite",
              "react-router",
              "laravel",
              "astro",
            ],
          },
        },
        {
          name: ["-b", "--base"],
          description: "The component library to use",
          args: {
            name: "base",
            suggestions: baseSuggestions,
          },
        },
        {
          name: "--monorepo",
          description: "Scaffold a monorepo project",
        },
        {
          name: "--no-monorepo",
          description: "Skip the monorepo prompt",
        },
        {
          name: ["-p", "--preset"],
          description: "Use a preset configuration",
          args: {
            name: "name",
            description: "A preset name, preset code or URL",
            isOptional: true,
            suggestions: presetSuggestions,
          },
        },
        yesOption,
        {
          name: ["-d", "--defaults"],
          description: "Use default configuration",
        },
        {
          name: ["-f", "--force"],
          description: "Force overwrite of existing configuration",
        },
        cwdOption,
        {
          name: ["-n", "--name"],
          description: "The name for the new project",
          args: {
            name: "name",
          },
        },
        silentOption,
        {
          name: "--css-variables",
          description: "Use css variables for theming",
        },
        {
          name: "--no-css-variables",
          description: "Do not use css variables for theming",
        },
        {
          name: "--rtl",
          description: "Enable RTL support",
        },
        {
          name: "--no-rtl",
          description: "Disable RTL support",
        },
        {
          name: "--pointer",
          description: "Enable pointer cursor for buttons",
        },
        {
          name: "--no-pointer",
          description: "Disable pointer cursor for buttons",
        },
        {
          name: "--reinstall",
          description: "Re-install existing UI components",
        },
        {
          name: "--no-reinstall",
          description: "Do not re-install existing UI components",
        },
      ],
    },
    {
      name: "add",
      description: "Add a component to your project",
      args: {
        name: "components",
        description: "Item addresses to add",
        isOptional: true,
        isVariadic: true,
        generators: componentGenerator,
        template: "filepaths",
      },
      options: [
        yesOption,
        {
          name: ["-o", "--overwrite"],
          description: "Overwrite existing files",
        },
        cwdOption,
        {
          name: ["-a", "--all"],
          description: "Add all available components",
        },
        {
          name: ["-p", "--path"],
          description: "The path to add the component to",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        silentOption,
        {
          name: "--dry-run",
          description: "Preview changes without writing files",
        },
        {
          name: "--diff",
          description: "Show diff for a file",
          args: {
            name: "path",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--view",
          description: "Show file contents",
          args: {
            name: "path",
            isOptional: true,
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "apply",
      description: "Apply a preset to an existing project",
      args: {
        name: "preset",
        description: "The preset to apply",
        isOptional: true,
        suggestions: presetSuggestions,
      },
      options: [
        {
          name: "--preset",
          description: "Preset configuration to apply",
          args: {
            name: "preset",
            suggestions: presetSuggestions,
          },
        },
        {
          name: "--only",
          description: "Apply only parts of a preset (comma-separated)",
          args: {
            name: "parts",
            isOptional: true,
            suggestions: [
              { name: "theme", description: "Apply only the theme" },
              { name: "font", description: "Apply only the fonts" },
            ],
          },
        },
        yesOption,
        cwdOption,
        silentOption,
      ],
    },
    {
      name: "build",
      description: "Build components for a shadcn registry",
      args: {
        name: "registry",
        description: "Path to registry.json file",
        isOptional: true,
        default: "./registry.json",
        template: "filepaths",
      },
      options: [
        {
          name: ["-o", "--output"],
          description: "Destination directory for json files",
          args: {
            name: "path",
            default: "./public/r",
            template: "folders",
          },
        },
        cwdOption,
      ],
    },
    {
      name: "diff",
      description: "Use `add [component] --diff` instead",
      deprecated: true,
      args: {
        name: "component",
        description: "The component name",
        isOptional: true,
        generators: componentGenerator,
      },
      options: [yesOption, cwdOption],
    },
    {
      name: "docs",
      description: "Get docs, api references and usage examples for components",
      args: {
        name: "components",
        description: "Component names",
        isVariadic: true,
        generators: componentGenerator,
      },
      options: [
        cwdOption,
        {
          name: ["-b", "--base"],
          description:
            "The base to use. Defaults to the base of the current project",
          args: {
            name: "base",
            suggestions: baseSuggestions,
          },
        },
        jsonOption,
      ],
    },
    {
      name: "eject",
      description:
        "Inline shadcn/tailwind.css and remove the shadcn dependency",
      options: [cwdOption, yesOption, silentOption],
    },
    {
      name: "info",
      description: "Get information about your project",
      options: [cwdOption, jsonOption],
    },
    {
      name: "mcp",
      description: "MCP server and configuration commands",
      subcommands: [
        {
          name: "init",
          description: "Initialize MCP configuration for your client",
          options: [
            {
              name: "--client",
              description: "The MCP client to configure",
              args: {
                name: "client",
                suggestions: [
                  { name: "claude", description: "Claude Code" },
                  { name: "cursor", description: "Cursor" },
                  { name: "vscode", description: "VS Code" },
                  { name: "codex", description: "Codex" },
                  { name: "opencode", description: "OpenCode" },
                ],
              },
            },
          ],
        },
      ],
      options: [{ ...cwdOption, isPersistent: true }],
    },
    {
      name: "migrate",
      description: "Run a migration",
      args: [
        {
          name: "migration",
          description: "The migration to run",
          isOptional: true,
          suggestions: [
            {
              name: "cn",
              description: "Migrate clsx and tailwind-merge to cn",
            },
            {
              name: "icons",
              description:
                "Migrate your ui components to a different icon library",
            },
            {
              name: "base-color",
              description: "Migrate your theme to a different base color",
            },
            {
              name: "radix",
              description: "Migrate to radix-ui",
            },
            {
              name: "rtl",
              description:
                "Migrate your components to support RTL (right-to-left)",
            },
          ],
        },
        {
          name: "path",
          description: "Optional path or glob pattern to migrate",
          isOptional: true,
          template: "filepaths",
        },
      ],
      options: [
        cwdOption,
        {
          name: ["-l", "--list"],
          description: "List all migrations",
        },
        yesOption,
        {
          name: ["-f", "--from"],
          description: "The base color or icon library to migrate from",
          args: {
            name: "name",
            suggestions: migrateNameSuggestions,
          },
        },
        {
          name: ["-t", "--to"],
          description: "The base color or icon library to migrate to",
          args: {
            name: "name",
            suggestions: migrateNameSuggestions,
          },
        },
      ],
    },
    {
      name: "preset",
      description: "Manage presets",
      subcommands: [
        {
          name: "decode",
          description: "Decode a preset code",
          args: {
            ...presetCodeArg,
            description: "The preset code to decode",
          },
          options: [jsonOption],
        },
        {
          name: ["resolve", "info"],
          description: "Resolve a preset from your project",
          options: [cwdOption, jsonOption],
        },
        {
          name: "url",
          description: "Get the create URL for a preset code",
          args: presetCodeArg,
        },
        {
          name: "open",
          description: "Open a preset code in the browser",
          args: presetCodeArg,
        },
      ],
    },
    {
      name: "registry",
      description: "Manage registries",
      subcommands: [
        {
          name: "add",
          description: "Add registries to your project",
          args: {
            name: "registries",
            description:
              "Registries (@namespace) or registry URLs (@namespace=url)",
            isOptional: true,
            isVariadic: true,
          },
          options: [cwdOption, silentOption],
        },
        {
          name: "validate",
          description: "Validate a shadcn registry",
          args: {
            name: "registry",
            description:
              "Registry address to validate. Supports registry.json paths and GitHub sources",
            isOptional: true,
            default: "./registry.json",
            template: "filepaths",
          },
          options: [cwdOption],
        },
      ],
    },
    {
      name: ["search", "list"],
      description: "Search items from registries",
      args: {
        name: "registries",
        description:
          "The registry addresses to search. Supports namespaces, GitHub sources and URLs. When omitted, searches all registries configured in components.json",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        cwdOption,
        {
          name: ["-q", "--query"],
          description: "Query string",
          args: {
            name: "query",
          },
        },
        {
          name: ["-t", "--type"],
          description:
            "Filter by item type, e.g. ui, block, hook. Comma-separated for multiple",
          args: {
            name: "type",
          },
        },
        {
          name: ["-l", "--limit"],
          description: "Maximum number of items to display",
          args: {
            name: "number",
            default: "100",
          },
        },
        {
          name: ["-o", "--offset"],
          description: "Number of items to skip",
          args: {
            name: "number",
            default: "0",
          },
        },
        jsonOption,
      ],
    },
    {
      name: "view",
      description: "View items from the registry",
      args: {
        name: "items",
        description: "Item addresses to view",
        isVariadic: true,
        generators: componentGenerator,
      },
      options: [cwdOption],
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "Display the version number",
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
