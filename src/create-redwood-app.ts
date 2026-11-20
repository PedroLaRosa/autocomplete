// create-redwood-app v8.9.0 (npm latest, released 2025-10-21, 2026-11-19). Source: read the yargs definition in src/create-redwood-app.js at tag v8.9.0 of redwoodjs/redwood and cross-checked it against the bundled dist/ of the npm tarball (statically, not executed).
// Changes: yargs only registers --help and --version (no -h/-v aliases), --telemetry description updated, positional is a project directory.
const spec: Fig.Spec = {
  name: "create-redwood-app",
  description: "Create a new Redwood project",
  icon: "https://avatars.githubusercontent.com/u/45050444?s=48&v=4",
  args: {
    name: "projectDirectory",
    description: "Directory of your Redwood project",
    template: "folders",
  },
  options: [
    { name: "--help", description: "Show help" },
    {
      name: ["--typescript", "--ts"],
      description: "Generate a TypeScript project",
    },
    {
      name: "--overwrite",
      description: "Create even if target directory isn't empty",
    },
    {
      name: "--telemetry",
      description:
        "Enables sending telemetry events for this create command and all Redwood CLI commands. Disable via --no-telemetry",
    },
    {
      name: ["--git-init", "--git"],
      description: "Initialize a git repository",
    },
    {
      name: ["--commit-message", "-m"],
      description: "Commit message for the initial commit",
      args: {
        name: "message",
      },
    },
    { name: ["--yes", "-y"], description: "Skip prompts and use defaults" },
    { name: "--version", description: "Show version number" },
    {
      name: "--yarn-install",
      description:
        "Install node modules (only offered with Yarn 2 or newer). Skip via --no-yarn-install",
    },
  ],
};

export default spec;
