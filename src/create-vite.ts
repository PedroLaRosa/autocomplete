// create-vite v9.3.4 (npm latest, 2026-11-19). Source: npm tarball dist/index.js (built-in help text, mri argument
// config, template table) + README, read statically (package not executed).
// Notes: the removed react-swc/react-swc-ts templates were dropped and react-compiler/react-compiler-ts added.
// Only the 18 template presets documented in the README are suggested; the CLI also accepts further variants
// that delegate to other scaffolders (custom-*, rsc, redwoodsdk-standard, ember-app, ...).
const FAVICONS = {
  vanilla:
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433",
  "vanilla-ts": "https://www.typescriptlang.org/favicon-32x32.png",
  vue: "https://raw.githubusercontent.com/vuejs/art/a1c78b74569b70a25300925b4eacfefcc143b8f6/logo.svg",
  react:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
  preact: "https://avatars.githubusercontent.com/u/26872990?s=200&v=4",
  svelte:
    "https://raw.githubusercontent.com/sveltejs/branding/2af7bc72f1bf5152dab89bee1ee2093b1be0824d/svelte-logo.svg",
  solid: "https://www.solidjs.com/img/logo/without-wordmark/logo.svg",
  lit: "https://avatars.githubusercontent.com/u/18489846?s=200&v=4",
  qwik: "https://qwik.builder.io/favicons/favicon.svg",
};

const iconWrap = (name: string): Fig.Suggestion => {
  const icon = FAVICONS[name] || FAVICONS[name.split("-")[0]];
  return { name, icon };
};

const spec: Fig.Spec = {
  name: "create-vite",
  description: "Create a new project powered by Vite",
  icon: "https://vitejs.dev/logo.svg",
  args: {
    name: "projectName",
    description: "Project name (use . to scaffold in the current directory)",
    template: "folders",
    isOptional: true,
  },
  options: [
    {
      name: ["-t", "--template"],
      description: "Use a specific template",
      args: {
        name: "template",
        suggestions: [
          iconWrap("vanilla"),
          iconWrap("vanilla-ts"),
          iconWrap("vue"),
          iconWrap("vue-ts"),
          iconWrap("react"),
          iconWrap("react-ts"),
          iconWrap("react-compiler"),
          iconWrap("react-compiler-ts"),
          iconWrap("preact"),
          iconWrap("preact-ts"),
          iconWrap("lit"),
          iconWrap("lit-ts"),
          iconWrap("svelte"),
          iconWrap("svelte-ts"),
          iconWrap("solid"),
          iconWrap("solid-ts"),
          iconWrap("qwik"),
          iconWrap("qwik-ts"),
        ],
      },
    },
    {
      name: ["-i", "--immediate"],
      description: "Install dependencies and start dev",
      exclusiveOn: ["--no-immediate"],
    },
    {
      name: "--no-immediate",
      description: "Do not install dependencies and start dev",
      exclusiveOn: ["-i", "--immediate"],
    },
    {
      name: "--eslint",
      description: "Use ESLint instead of Oxlint (only for React templates)",
      exclusiveOn: ["--no-eslint"],
    },
    {
      name: "--no-eslint",
      description: "Use Oxlint instead of ESLint (only for React templates)",
      exclusiveOn: ["--eslint"],
    },
    {
      name: "--overwrite",
      description: "Remove existing files if target directory is not empty",
    },
    {
      name: "--interactive",
      description: "Force interactive mode",
      exclusiveOn: ["--no-interactive"],
    },
    {
      name: "--no-interactive",
      description: "Force non-interactive mode",
      exclusiveOn: ["--interactive"],
    },
    {
      name: ["-h", "--help"],
      description: "Display this help message",
    },
  ],
};

export default spec;
