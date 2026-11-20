// Ignite CLI v11.5.0 (npm latest dist-tag and git tag v11.5.0 of infinitered/ignite, released 2026-03-18; checked 2026-11-19).
// Source: bin/ignite, src/cli.ts, src/commands/**/*.ts, src/tools/generators.ts and docs/cli/Ignite-CLI.md at tag v11.5.0, plus gluegun 5.1.6 (alias and option parsing); read statically, not run.
// Changes vs the previous spec: removed `new --expo`; added the new options (--debug, --git, --install-deps, --overwrite, --packager, --target-path, --remove-demo, --use-cache, --no-timeout, --yes, --workflow, --experimental),
// added the cache, rename, issue, remove-demo, remove-demo-markup, help and version commands plus the generate app-icon / splash-screen sub-generators and generate --dir/--case/--overwrite.
// Not modelled: the deprecated add/remove/spork commands, which only print a message pointing to ignite-cli@3.
const generatorsGenerator = (exclude: string[] = []): Fig.Generator => ({
  script: ["ls", "ignite/templates"],
  postProcess: (out) =>
    out
      .split("\n")
      .filter((gen) => gen.trim() !== "" && !exclude.includes(gen))
      .map((gen) => ({
        name: gen,
      })),
});

// Multi-word options are accepted in kebab-case and camelCase (yargs-parser camel-case expansion)
const completionSpec: Fig.Spec = {
  name: "ignite-cli",
  description:
    "Ignite is a CLI that helps you spin up a new React Native app using a battle-tested tech stack",
  options: [
    {
      name: ["-h", "--help"],
      description: "Display Ignite CLI help",
    },
    {
      name: ["-v", "--version"],
      description: "Output the version number",
    },
  ],
  subcommands: [
    {
      name: "new",
      description: "Create a new React Native app",
      args: {
        name: "name",
        description: "Name of the app",
      },
      options: [
        {
          name: "--bundle",
          description: "Set the bundle identifier of the app",
          args: {
            name: "bundle",
          },
        },
        {
          name: "--debug",
          description: "Verbose logging throughout the project setup",
        },
        {
          name: "--git",
          description:
            "Create a new git repository with an initial commit (default: true)",
        },
        {
          name: ["--install-deps", "--installDeps"],
          description:
            "Run the packager install script after project creation (default: true)",
        },
        {
          name: "--overwrite",
          description: "Overwrite the target directory if it exists",
        },
        {
          name: "--packager",
          description: "Package manager to install dependencies with",
          args: {
            name: "packager",
            suggestions: ["npm", "yarn", "pnpm", "bun"],
          },
        },
        {
          name: ["--target-path", "--targetPath"],
          description: "Directory where the project should be created",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: ["--remove-demo", "--removeDemo"],
          description:
            "Remove the boilerplate demo code after project creation",
        },
        {
          name: ["--use-cache", "--useCache"],
          description: "Use the dependency cache for quicker installs",
        },
        {
          name: "--no-timeout",
          description:
            "Disable the timeout protection (useful for slow internet connections)",
        },
        {
          name: ["-y", "--yes"],
          description: "Accept all prompt defaults",
        },
        {
          name: "--workflow",
          description: "How to manage native code in the project",
          args: {
            name: "workflow",
            suggestions: [
              {
                name: "cng",
                description: "Expo Continuous Native Generation (default)",
              },
              {
                name: "manual",
                description: "Commit the android and ios directories",
              },
            ],
          },
        },
        {
          name: "--experimental",
          description:
            "Comma separated experimental features to turn on (requires --workflow=cng)",
          args: {
            name: "features",
            suggestions: [
              {
                name: "expo-router",
                description:
                  "Use Expo Router instead of React Navigation (removes the demo app)",
              },
              {
                name: "expo-canary",
                description:
                  "Use Expo's canary release instead of the stable SDK",
              },
              {
                name: "expo-beta",
                description:
                  "Use Expo's latest beta SDK instead of the stable SDK",
              },
            ],
          },
        },
        {
          name: "--new-arch",
          description:
            "Legacy flag: the New Architecture is always on, use ignite-cli@10 for the legacy architecture",
          deprecated: true,
        },
      ],
    },
    {
      name: ["g", "generate", "generator", "generators"],
      description: "Generate components and other app features from templates",
      args: [
        {
          name: "generator",
          generators: generatorsGenerator(["app-icon", "splash-screen"]),
          isOptional: true,
        },
        {
          name: "name",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--list",
          description: "List installed generators",
        },
        {
          name: "--update",
          description: "Update installed generators",
        },
        {
          name: "--help",
          description: "Show the generators help",
        },
        {
          name: "--dir",
          description:
            "Override the front matter or default path for generated files",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--case",
          description: "Format the generated file name",
          args: {
            name: "case",
            suggestions: ["auto", "pascal", "camel", "kebab", "snake", "none"],
          },
        },
        {
          name: "--overwrite",
          description: "Overwrite files that already exist",
        },
      ],
      subcommands: [
        {
          name: ["app-icon", "launcher-icon"],
          description: "Generate app icons from the templates",
        },
        {
          name: ["splash-screen", "splash"],
          description: "Generate the splash screen from the templates",
          args: {
            name: "background color",
            description: "Background color of the splash screen, e.g. #191015",
          },
          options: [
            {
              name: "--android-size",
              description: "Size of the Android logo (default: 180)",
              args: {
                name: "size",
              },
            },
            {
              name: "--ios-size",
              description: "Size of the iOS logo (default: 212)",
              args: {
                name: "size",
              },
            },
          ],
        },
      ],
    },
    {
      name: "update",
      description: "Update generator templates",
      args: {
        name: "generator",
        generators: generatorsGenerator(),
        isOptional: true,
      },
      options: [
        {
          name: "--all",
          description: "Update all installed generators",
        },
      ],
    },
    {
      name: "doctor",
      description: "Check your dev environment for dependencies",
    },
    {
      name: ["rename", "rn"],
      description: "Rename a React Native and/or Ignite app",
      args: {
        name: "name",
        description: "New name of the app",
        isOptional: true,
      },
      options: [
        {
          name: "--bundle",
          description: "New bundle identifier of the app",
          args: {
            name: "bundle",
          },
        },
      ],
    },
    {
      name: ["remove-demo", "rd", "remove-demos"],
      description:
        "Remove demo code from generated boilerplate (files, marked code blocks and lines)",
      args: {
        name: "directory",
        description: "Directory to remove demo code from (default: current)",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: "--dry-run",
          description: "List the files that would be modified without doing so",
        },
      ],
    },
    {
      name: ["remove-demo-markup", "rdm"],
      description:
        "Remove all demo markup (comments only) from the boilerplate",
      args: {
        name: "directory",
        description: "Directory to remove demo markup from (default: current)",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: "--dry-run",
          description: "Show the markup that would be removed without doing so",
        },
      ],
    },
    {
      name: ["cache", "c"],
      description: "Commands related to the dependency cache for Ignite",
      subcommands: [
        {
          name: "help",
          description: "Display the cache help",
        },
        {
          name: "path",
          description: "Print the path of the dependency cache",
        },
        {
          name: "clear",
          description: "Clear the dependency cache",
        },
      ],
    },
    {
      name: ["issue", "i"],
      description:
        "Open a new GitHub issue for Ignite prefilled with doctor information",
      args: {
        name: "title",
        description: "Title of the issue",
      },
    },
    {
      name: ["help", "h"],
      description: "Display Ignite CLI help",
      args: {
        name: "topic",
        isOptional: true,
        suggestions: [
          { name: "generate", description: "Help for the generators" },
        ],
      },
    },
    {
      name: ["version", "v"],
      description: "Output the version number",
    },
  ],
};

export default completionSpec;
