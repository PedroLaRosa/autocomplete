// npx bundled with npm v12.2.3 (npm registry latest and git tag v12.2.3, 2026-11-20). Source: npm/cli@v12.2.3 bin/npx-cli.js, lib/commands/exec.js, workspaces/config definitions, docs/commands/npm-exec.md and npx.md (static read, not run)
import autocannon from "./autocannon";
import { npmSearchGenerator } from "./npm";

const scriptShellArg: Fig.Arg = {
  name: "shell",
  suggestions: ["bash", "fish", "zsh"],
};

export const npxSuggestions: Fig.Suggestion[] = [
  {
    name: autocannon.name,
    ...("icon" in autocannon && { icon: autocannon.icon }),
  },
  {
    name: "vite",
    icon: "https://vitejs.dev/logo.svg",
  },
  {
    name: "babel",
    icon: "https://raw.githubusercontent.com/babel/logo/master/babel.png",
  },
  {
    name: "create-react-native-app",
    icon: "https://reactnative.dev/img/pwa/manifest-icon-512.png",
  },
  {
    name: "react-native",
    icon: "https://reactnative.dev/img/pwa/manifest-icon-512.png",
  },
  {
    name: "tailwindcss",
    icon: "https://tailwindcss.com/favicons/favicon-32x32.png",
  },
  {
    name: "next",
    icon: "https://nextjs.org/static/favicon/favicon-16x16.png",
  },
  {
    name: "nuxi",
    icon: "https://raw.githubusercontent.com/nuxt/framework/main/docs/public/icon.png",
  },
  {
    name: "gltfjsx",
    icon: "https://raw.githubusercontent.com/pmndrs/branding/master/logo.svg",
  },
  {
    name: "prisma",
    icon: "https://raw.githubusercontent.com/prisma/docs/main/src/images/favicon-16x16.png",
  },
  {
    name: "eslint",
    icon: "https://raw.githubusercontent.com/eslint/eslint.org/main/src/static/icon-512.png",
  },
  {
    name: "prettier",
    icon: "https://prettier.io/icon.png",
  },
  {
    name: "tsc",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png",
  },
  {
    name: "typeorm",
    icon: "https://avatars.githubusercontent.com/u/20165699?s=200&v=4",
  },
  // {
  //   name: "fig-teams",
  //   icon: "https://fig.io/icons/fig-light.png",
  // },
  {
    name: "@withfig/autocomplete-tools",
    icon: "https://fig.io/icons/fig-light.png",
  },
  {
    name: "create-completion-spec",
    icon: "https://fig.io/icons/fig-light.png",
  },
  {
    name: "@fig/publish-spec-to-team",
    icon: "https://fig.io/icons/fig-light.png",
  },
  {
    name: "fig-teams@latest",
    icon: "https://fig.io/icons/fig-light.png",
  },
  {
    name: "create-next-app",
    icon: "https://nextjs.org/static/favicon/favicon-16x16.png",
  },
  {
    name: "create-t3-app",
    icon: "https://create.t3.gg/favicon.svg",
  },
  {
    name: "create-discord-bot",
    icon: "https://discordjs.dev/favicon-32x32.png",
  },
  {
    name: "create-video",
    icon: "https://raw.githubusercontent.com/remotion-dev/remotion/main/packages/docs/static/img/logo-small.png",
  },
  {
    name: "remotion",
    icon: "https://raw.githubusercontent.com/remotion-dev/remotion/main/packages/docs/static/img/logo-small.png",
  },
  {
    name: "create-remix",
    icon: "https://remix.run/favicon-light.1.png",
  },
  {
    name: "remix",
    icon: "https://remix.run/favicon-light.1.png",
  },
  {
    name: "playwright",
    icon: "https://playwright.dev/img/playwright-logo.svg",
  },
  {
    name: "ignite-cli",
    icon: "🔥",
  },
  {
    name: "vsce",
  },
  {
    name: "degit",
    icon: "fig://icon?type=git",
  },
  {
    name: "@preset/cli",
    icon: "https://raw.githubusercontent.com/preset/preset/main/.github/assets/logo.svg",
  },
  {
    name: "mikro-orm",
    icon: "https://raw.githubusercontent.com/mikro-orm/mikro-orm/master/docs/static/img/favicon.ico",
  },
  {
    name: "pod-install",
  },
  {
    name: "capacitor",
    icon: "https://capacitorjs.com/docs/img/meta/favicon.png",
  },
  {
    name: "cap",
    icon: "https://capacitorjs.com/docs/img/meta/favicon.png",
  },
  {
    name: "@magnolia/cli",
    icon: "https://avatars.githubusercontent.com/u/25686615?s=200&v=4",
  },
  {
    name: "stencil",
    icon: "https://stenciljs.com/assets/icon/favicon.ico",
  },
  {
    name: "swagger-typescript-api",
    icon: "https://static1.smartbear.co/swagger/media/assets/swagger_fav.png",
  },
  {
    name: "sta",
    icon: "https://static1.smartbear.co/swagger/media/assets/swagger_fav.png",
  },
  {
    name: "@wordpress/create-block",
    icon: "https://s1.wp.com/i/webclip.png",
  },
  {
    name: "astro",
    icon: "https://astro.build/favicon.svg",
  },
  {
    name: "ampx",
    icon: "https://raw.githubusercontent.com/aws-amplify/docs/refs/heads/main/public/favicon.ico",
  },
];

const completionSpec: Fig.Spec = {
  name: "npx",
  description: "Execute binaries from npm packages",
  args: {
    name: "command",
    isCommand: true,
    generators: {
      script: [
        "bash",
        "-c",
        "until [[ -d node_modules/ ]] || [[ $PWD = '/' ]]; do cd ..; done; ls -1 node_modules/.bin/",
      ],
      postProcess: function (out) {
        const cli = [...npxSuggestions].reduce(
          (acc, { name }) => [...acc, name],
          []
        );
        return out
          .split("\n")
          .filter((name) => !cli.includes(name))
          .map((name) => ({
            name,
            icon: "fig://icon?type=command",
            loadSpec: name,
          }));
      },
    },
    suggestions: [...npxSuggestions],
    isOptional: true,
  },

  options: [
    {
      name: ["--package", "-p"],
      description: "The package or packages to install",
      isRepeatable: true,
      args: {
        name: "package-spec",
        generators: npmSearchGenerator,
        debounce: true,
      },
    },
    {
      name: ["--call", "-c"],
      args: {
        name: "script",
      },
      description: "Execute string as if inside `npm run-script`",
    },
    {
      name: ["--workspace", "-w"],
      description:
        "Run the command in the context of the given workspace of the current project",
      isRepeatable: true,
      args: {
        name: "workspace-name",
      },
    },
    {
      name: ["--workspaces", "-ws"],
      description:
        "Run the command in the context of all configured workspaces",
    },
    {
      name: ["--include-workspace-root", "-iwr"],
      description:
        "Include the workspace root when workspaces are enabled for a command",
    },
    {
      name: "--allow-scripts",
      description:
        "Comma-separated list of packages whose install scripts are allowed to run",
      isRepeatable: true,
      args: {
        name: "package-list",
      },
    },
    {
      name: "--strict-allow-scripts",
      description:
        "Fail instead of warning when a dependency has install scripts not covered by allowScripts",
    },
    {
      name: "--dangerously-allow-all-scripts",
      description:
        "Run every dependency install script, bypassing the allowScripts policy",
    },
    {
      name: ["--yes", "-y"],
      description:
        "Automatically answer yes to the prompt to install missing packages",
      exclusiveOn: ["--no", "--no-install"],
    },
    {
      name: "--no",
      description: "Refuse to install missing packages",
      exclusiveOn: ["--yes", "-y"],
    },
    {
      name: "--no-install",
      description: "Skip installation if a package is missing",
      deprecated: { description: "Use --no" },
    },
    {
      name: "--script-shell",
      description: "Shell to execute the command with",
      args: scriptShellArg,
    },
    {
      name: "--shell",
      description: "Shell to execute the command with",
      deprecated: { description: "Use --script-shell" },
      args: scriptShellArg,
    },
    {
      name: "--cache",
      args: {
        name: "path",
        template: "folders",
      },
      description: "Location of the npm cache",
    },
    {
      args: {
        name: "path",
        template: "filepaths",
      },
      description: "Path to user npmrc",
      name: "--userconfig",
    },
    {
      name: ["--quiet", "-q"],
      description: "Only show warnings and errors (alias for --loglevel warn)",
    },
    {
      description: "Show version number",
      name: ["--version", "-v"],
    },
    {
      description: "Show help",
      name: ["--help", "-h"],
    },
  ],
};

export default completionSpec;
