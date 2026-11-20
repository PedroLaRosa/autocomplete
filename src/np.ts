// np v12.1.1 (npm latest and GitHub tag, checked 2026-11-19). Source: shallow clone of sindresorhus/np at v12.1.1
// read statically (not run): the `--help` text and flag definitions in source/cli-implementation.js, readme.md,
// and source/package-manager/. `--no-yarn` no longer exists (package manager is detected, see `--package-manager`).
const completionSpec: Fig.Spec = {
  name: "np",
  description: "A better npm publish",
  options: [
    {
      name: "--any-branch",
      description: "Allow publishing from any branch",
    },
    {
      name: "--branch",
      description: "Name of the release branch (default: main | master)",
      args: {
        name: "branch",
      },
    },
    {
      name: "--no-cleanup",
      description: "Skips np's node_modules cleanup step before install",
    },
    {
      name: "--no-tests",
      description: "Skips tests",
    },
    {
      name: "--yolo",
      description: "Skips cleanup and testing",
    },
    {
      name: "--no-publish",
      description: "Skips publishing",
    },
    {
      name: ["--dry-run", "--preview"],
      description: "Show tasks without actually executing them",
    },
    {
      name: "--tag",
      description: "Publish under a given dist-tag",
      args: {
        name: "tag",
      },
    },
    {
      name: "--contents",
      description: "Subdirectory to publish",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--no-release-draft",
      description: "Skips opening a GitHub release draft",
    },
    {
      name: "--release-draft-only",
      description:
        "Only opens a GitHub release draft for the latest published version",
    },
    {
      name: "--no-release-notes",
      description:
        "Skips generating release notes when opening a GitHub release draft",
    },
    {
      name: "--test-script",
      description:
        "Name of npm run script to run tests before publishing (default: test)",
      args: {
        name: "script",
      },
    },
    {
      name: "--no-2fa",
      description: "Don't enable 2FA on new packages (not recommended)",
    },
    {
      name: "--message",
      description:
        "Version bump commit message, `%s` will be replaced with version (default: '%s' with npm and 'v%s' with yarn)",
      args: {
        name: "message",
      },
    },
    {
      name: "--package-manager",
      description:
        "Use a specific package manager (default: package.json packageManager/devEngines)",
      args: {
        name: "package manager",
        suggestions: ["npm", "pnpm", "yarn", "bun"],
      },
    },
    {
      name: "--provenance",
      description: "Publish with npm provenance statements (CI-only)",
    },
    {
      name: "--remote",
      description: "Git remote to push to (default: origin)",
      args: {
        name: "remote",
      },
    },
    {
      name: "--stage",
      description: "Stage the publish for later approval (npm and pnpm only)",
    },
    {
      name: "--help",
      description: "Show help",
    },
    {
      name: "--version",
      description: "Show version number",
    },
  ],
  args: {
    name: "version",
    description: "Version to publish",
    isOptional: true,
    suggestions: [
      "patch",
      "minor",
      "major",
      "prepatch",
      "preminor",
      "premajor",
      "prerelease",
    ],
  },
};

export default completionSpec;
