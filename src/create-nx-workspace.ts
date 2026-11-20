// create-nx-workspace v24.0.6 (npm latest, 2026-11-19). Source: dist/bin/create-nx-workspace.js, dist/src/internal-utils/{yargs-options,prompts}.js, utils/preset/preset.js and create-workspace.js from the npm tarball (yargs definitions, choices lists, prompt choices); read statically, binary not run.
// Changes vs the previous spec: removed --cli (gone), -h and the pre-v20 preset list; added workspaceType, template, aiAgents, formatter, linter, bundler, framework, useProjectJson, the git/analytics options and the current preset list.

enum ICONS {
  npm = "fig://icon?type=npm",
  yarn = "fig://icon?type=yarn",
  pnpm = "https://pnpm.io/img/favicon.png",
  true = "✅",
  false = "❌",
  ng = "https://angular.io/assets/images/logos/angular/angular.svg",
  nx = "https://github.com/nrwl/nx/raw/master/images/nx-logo.png",
  react = "https://reactjs.org/favicon.ico",
  webComponents = "https://web-components-resources.appspot.com/static/logo.svg",
  next = "https://nextjs.org/static/favicon/favicon.ico",
  nest = "https://nestjs.com/favicon.264d6486.ico",
  express = "https://expressjs.com/images/favicon.png",
  css = "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  scss = "https://sass-lang.com/favicon.ico",
  less = "https://lesscss.org/public/ico/favicon.ico",
  emotion = "https://emotion.sh/favicons/favicon.ico",
  styled = "https://styled-components.com/favicon.png",
  vercel = "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/favicon.ico",
}

const boolArg = (name: string, defaultValue?: "true" | "false"): Fig.Arg => ({
  name,
  isOptional: true,
  default: defaultValue,
  suggestions: [
    {
      name: "true",
      icon: ICONS.true,
    },
    {
      name: "false",
      icon: ICONS.false,
    },
  ],
});

const choiceArg = (name: string, choices: string[]): Fig.Arg => ({
  name,
  suggestions: choices,
});

const workspaceNameArg: Fig.Arg = {
  name: "workspace",
  description: "The name of the workspace",
};

const presets: Fig.Suggestion[] = [
  {
    name: "apps",
    icon: ICONS.nx,
    description: "Empty workspace with no framework stack",
  },
  { name: "npm", icon: ICONS.npm, description: "Workspace for npm packages" },
  {
    name: "ts",
    icon: ICONS.nx,
    description: "Workspace with no framework stack (TypeScript)",
  },
  {
    name: "ts-standalone",
    icon: ICONS.nx,
    description: "Standalone TypeScript project",
  },
  {
    name: "web-components",
    icon: ICONS.webComponents,
    description: "Web components application",
  },
  {
    name: "angular-monorepo",
    icon: ICONS.ng,
    description: "Angular monorepo",
  },
  {
    name: "angular-standalone",
    icon: ICONS.ng,
    description: "Standalone Angular application",
  },
  { name: "angular", icon: ICONS.ng, description: "Angular application" },
  {
    name: "react-monorepo",
    icon: ICONS.react,
    description: "React monorepo",
  },
  {
    name: "react-standalone",
    icon: ICONS.react,
    description: "Standalone React application",
  },
  { name: "react", icon: ICONS.react, description: "React application" },
  { name: "vue-monorepo", description: "Vue monorepo" },
  { name: "vue-standalone", description: "Standalone Vue application" },
  { name: "vue", description: "Vue application" },
  { name: "nuxt", description: "Nuxt application in a monorepo" },
  { name: "nuxt-standalone", description: "Standalone Nuxt application" },
  { name: "next", icon: ICONS.next, description: "Next.js application" },
  {
    name: "nextjs-standalone",
    icon: ICONS.next,
    description: "Standalone Next.js application",
  },
  {
    name: "react-native",
    icon: ICONS.react,
    description: "React Native application",
  },
  { name: "expo", icon: ICONS.react, description: "Expo application" },
  { name: "nest", icon: ICONS.nest, description: "Nest application" },
  {
    name: "express",
    icon: ICONS.express,
    description: "Express application",
  },
  {
    name: "node-standalone",
    description: "Standalone Node application",
  },
  { name: "node-monorepo", description: "Node monorepo" },
  {
    name: "empty",
    icon: ICONS.nx,
    description: "Alias of the ts preset",
  },
];

const completionSpec: Fig.Spec = {
  name: "create-nx-workspace",
  description: "Create a new Nx workspace",
  options: [
    {
      name: "--name",
      description: "Workspace name (e.g. org name)",
      args: workspaceNameArg,
    },
    {
      name: "--preset",
      description:
        "Customizes the initial content of your workspace. Third-party presets (npm package names) are also accepted",
      args: {
        name: "preset",
        suggestions: presets,
      },
    },
    {
      name: "--template",
      description: "GitHub template repository to use",
      args: {
        name: "template",
        suggestions: [
          {
            name: "nrwl/empty-template",
            icon: ICONS.nx,
            description: "Empty monorepo without projects",
          },
          {
            name: "nrwl/react-template",
            icon: ICONS.react,
            description: "Fullstack monorepo with React and Express",
          },
          {
            name: "nrwl/angular-template",
            icon: ICONS.ng,
            description: "Fullstack monorepo with Angular and Express",
          },
          {
            name: "nrwl/typescript-template",
            icon: ICONS.npm,
            description: "Monorepo with TypeScript packages ready to publish",
          },
          { name: "empty", description: "Shorthand for nrwl/empty-template" },
          { name: "react", description: "Shorthand for nrwl/react-template" },
          {
            name: "angular",
            description: "Shorthand for nrwl/angular-template",
          },
          {
            name: "typescript",
            description: "Shorthand for nrwl/typescript-template",
          },
        ],
      },
    },
    {
      name: "--interactive",
      description: "Enable interactive mode with presets",
      args: boolArg("interactive", "true"),
    },
    {
      name: "--workspaceType",
      description: "The type of workspace to create",
      args: choiceArg("workspaceType", [
        "integrated",
        "package-based",
        "standalone",
      ]),
    },
    {
      name: "--appName",
      description:
        "The name of the app when using a monorepo with certain stacks",
      args: { name: "appName" },
    },
    {
      name: "--style",
      description: "Stylesheet type to be used with certain stacks",
      args: {
        name: "style",
        suggestions: [
          {
            name: "css",
            icon: ICONS.css,
            description: "CSS",
          },
          {
            name: "scss",
            icon: ICONS.scss,
            description: "SASS(.scss) [ http://sass-lang.com ]",
          },
          {
            name: "less",
            icon: ICONS.less,
            description: "LESS [ http://lesscss.org ]",
          },
          {
            name: "styled-components",
            icon: ICONS.styled,
            description: "Styled-components [ https://styled-components.com ]",
          },
          {
            name: "@emotion/styled",
            icon: ICONS.emotion,
            description: "Emotion [ https://emotion.sh ]",
          },
          {
            name: "styled-jsx",
            icon: ICONS.vercel,
            description:
              "Styled-jsx [ https://www.npmjs.com/package/styled-jsx ]",
          },
          {
            name: "none",
            description: "No stylesheet format (Vue and Nuxt stacks)",
          },
        ],
      },
    },
    {
      name: "--standaloneApi",
      description: "Use Standalone Components if generating an Angular app",
      args: boolArg("standaloneApi", "true"),
    },
    {
      name: "--routing",
      description: "Add a routing setup for an Angular or React app",
      args: boolArg("routing", "true"),
    },
    {
      name: "--useReactRouter",
      description:
        "Generate a Server-Side Rendered (SSR) React app using React Router",
      args: boolArg("useReactRouter"),
    },
    {
      name: "--bundler",
      description: "Bundler to be used to build the app",
      args: {
        name: "bundler",
        suggestions: [
          "vite",
          "webpack",
          "rspack",
          "esbuild",
          "tsc",
          "rolldown",
        ],
      },
    },
    {
      name: "--workspaces",
      description: "Use package manager workspaces",
      args: boolArg("workspaces", "true"),
    },
    {
      name: "--useProjectJson",
      description:
        "Use a 'project.json' file for the Nx configuration instead of a 'package.json' file. This defaults to 'true' when '--no-workspaces' is used. Otherwise, it defaults to 'false'",
      args: boolArg("useProjectJson"),
    },
    {
      name: "--formatter",
      description: "Code formatter to use",
      args: choiceArg("formatter", ["oxfmt", "prettier", "none"]),
    },
    {
      name: "--linter",
      description: "Linter to use",
      args: choiceArg("linter", ["eslint", "oxlint", "none"]),
    },
    {
      name: "--framework",
      description: "Framework option to be used with certain stacks",
      args: choiceArg("framework", [
        "express",
        "fastify",
        "koa",
        "nest",
        "none",
      ]),
    },
    {
      name: "--docker",
      description: "Generate a Dockerfile for the Node API",
      args: boolArg("docker"),
    },
    {
      name: "--nextAppDir",
      description: "Enable the App Router for Next.js",
      args: boolArg("nextAppDir"),
    },
    {
      name: "--nextSrcDir",
      description: "Generate a 'src/' directory for Next.js",
      args: boolArg("nextSrcDir"),
    },
    {
      name: "--e2eTestRunner",
      description: "Test runner to use for end to end (E2E) tests",
      args: choiceArg("e2eTestRunner", ["playwright", "cypress", "none"]),
    },
    {
      name: "--unitTestRunner",
      description: "Test runner to use for unit tests",
      args: choiceArg("unitTestRunner", ["jest", "vitest", "none"]),
    },
    {
      name: "--ssr",
      description:
        "Enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) for the Angular application",
      args: boolArg("ssr"),
    },
    {
      name: "--prefix",
      description:
        "Prefix to use for Angular component and directive selectors",
      args: { name: "prefix" },
    },
    {
      name: "--zoneless",
      description: "Generate an application that does not use 'zone.js'",
      args: boolArg("zoneless", "true"),
    },
    {
      name: "--aiAgents",
      description: 'List of AI agents to configure. Use "none" to skip',
      args: {
        name: "agents",
        isVariadic: true,
        suggestions: [
          "claude",
          "codex",
          "copilot",
          "cursor",
          "gemini",
          "opencode",
          "none",
        ],
      },
    },
    {
      name: "--trustThirdPartyPreset",
      description:
        "Skip the confirmation prompt when installing a third-party preset. Use this when you trust the preset publisher",
      args: boolArg("trustThirdPartyPreset", "false"),
    },
    {
      name: ["--nxCloud", "--ci"],
      description: "Which CI provider would you like to use?",
      args: {
        name: "provider",
        suggestions: [
          { name: "github", description: "GitHub Actions" },
          { name: "gitlab", description: "GitLab" },
          { name: "azure", description: "Azure DevOps" },
          { name: "bitbucket-pipelines", description: "BitBucket Pipelines" },
          { name: "circleci", description: "Circle CI" },
          { name: "skip", description: "Do it later" },
          {
            name: "yes",
            description: "Deprecated but still handled",
            deprecated: true,
          },
        ],
      },
    },
    {
      name: "--useGitHub",
      description: "Will you be using GitHub as your git hosting provider?",
      args: boolArg("useGitHub", "false"),
    },
    {
      name: ["--allPrompts", "-a"],
      description: "Show all prompts",
      args: boolArg("allPrompts", "false"),
    },
    {
      name: ["--packageManager", "--pm"],
      description: "Package manager to use",
      args: {
        name: "packageManager",
        default: "npm",
        suggestions: [
          {
            name: "bun",
          },
          {
            name: "npm",
            icon: ICONS.npm,
          },
          {
            name: "pnpm",
            icon: ICONS.pnpm,
          },
          {
            name: "yarn",
            icon: ICONS.yarn,
          },
        ],
      },
    },
    {
      name: "--defaultBase",
      description: "Default base to use for new projects",
      args: { name: "branch", default: "main" },
    },
    {
      name: ["--skipGit", "-g"],
      description: "Skip initializing a git repository",
      args: boolArg("skipGit", "false"),
    },
    {
      name: "--skipGitHubPush",
      description: "Skip pushing to GitHub via gh CLI",
      args: boolArg("skipGitHubPush", "false"),
    },
    {
      name: ["--verbose", "-v"],
      description: "Enable verbose logging",
      args: boolArg("verbose", "false"),
    },
    {
      name: "--commit.name",
      description: "Name of the committer",
      args: { name: "name" },
    },
    {
      name: "--commit.email",
      description: "E-mail of the committer",
      args: { name: "email" },
    },
    {
      name: "--commit.message",
      description: "Commit message",
      args: { name: "message", default: "Initial commit" },
    },
    {
      name: "--analytics",
      description: "Help improve Nx by sharing your usage data",
      args: boolArg("analytics"),
    },
    {
      name: "--help",
      description: "Show help",
    },
    {
      name: "--version",
      description: "Show version",
    },
  ],
  args: workspaceNameArg,
};

export default completionSpec;
