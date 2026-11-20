// yalc v1.0.0-pre.53 (npm "latest" and last release, 2021-04-28; wclr/yalc master has unreleased changes after it; 2026-11-19).
// Source: the published yalc@1.0.0-pre.53 npm tarball (src/yalc.js yargs definitions, add/copy/publish/remove/update/installations/rc sources, README, CHANGELOG)
// compared with a shallow clone of wclr/yalc master (HEAD 3b834e4, 2023-07-04); the CLI was not run.
// Upstream is effectively dormant. Follows the released flags: master renamed publish --files to --content, which pre.53 ignores, so --content is not listed.
// Signature hashing is off by default since pre.51, so --sig replaces the old --no-sig.
const generatePackages: Fig.Generator = {
  // TODO: use the same as for npm and yarn package.json reverse lookup
  script: [
    "bash",
    "-c",
    "command find ~/.yalc/packages -maxdepth 4 -iname 'package.json'",
  ],
  postProcess: (out) =>
    out
      .split("\n")
      .filter(Boolean)
      .map((path) => {
        const pathArr = path.split("/");
        const subPath = pathArr.slice(
          pathArr.findIndex((val) => val === "packages") + 1,
          pathArr.length - 2
        );
        const version = pathArr[pathArr.length - 2];
        return `${subPath.join("/")}@${version}`;
      })
      .map((path) => ({
        name: path,
        icon: "📦",
        description: path,
      })),
};

// Packages recorded in the project's yalc.lock
const getLockedPackages: Fig.Generator = {
  script: ["bash", "-c", "command cat yalc.lock 2>/dev/null"],
  postProcess: (out) => {
    try {
      return Object.keys(JSON.parse(out).packages ?? {}).map((name) => ({
        name,
        icon: "📦",
        description: name,
      }));
    } catch {
      return [];
    }
  },
};

// Packages with recorded installations in the default store (~/.yalc/installations.json)
const getInstalledPackages: Fig.Generator = {
  script: ["bash", "-c", "command cat ~/.yalc/installations.json 2>/dev/null"],
  postProcess: (out) => {
    try {
      return Object.keys(JSON.parse(out)).map((name) => ({
        name,
        icon: "📦",
        description: name,
      }));
    } catch {
      return [];
    }
  },
};

const updateOption: Fig.Option = {
  name: ["--update", "--upgrade", "--up"],
  description: "Run package manager's update command for packages",
};

const pureOption: Fig.Option = {
  name: "--pure",
  description:
    "Do not touch 'package.json' or 'node_modules' (default in workspaces, '--no-pure' to override)",
};

// Options shared by publish and push
const publishOptions: Fig.Option[] = [
  {
    name: "--sig",
    description:
      "Add hash signature of all files to the version when copying package content",
  },
  {
    name: "--files",
    description: "Show included files in the published package",
  },
  {
    name: "--changed",
    description: "Publish only if the package content has changed",
  },
  {
    name: "--private",
    description: "Force publishing of private package",
  },
  {
    name: "--replace",
    description: "Force package content replacement",
  },
  {
    name: "--no-workspace-resolve",
    description: "Do not resolve 'workspace:' protocol in dependencies",
  },
  {
    name: "--no-dev-mod",
    description:
      "Keep devDependencies and prepare/prepublish scripts in the published package.json",
  },
  updateOption,
];

const publishFolderArg: Fig.Arg = {
  name: "folder",
  description: "Package directory relative to the current one",
  isOptional: true,
  template: "folders",
};

const completionSpec: Fig.Spec = {
  name: "yalc",
  description: "Work with yarn/npm packages locally like a boss",
  subcommands: [
    {
      name: "publish",
      description:
        "Copy all the files that should be published in remote NPM registry",
      args: publishFolderArg,
      options: [
        {
          name: "--push",
          description:
            "Publish package to the store and propagate all changes to existing yalc package installations",
        },
        {
          name: "--no-scripts",
          description: "Publish without running scripts",
        },
        ...publishOptions,
      ],
    },
    {
      name: "push",
      description:
        "Publish your package to the store and propagate all changes to existing yalc package installations",
      args: publishFolderArg,
      options: [
        {
          name: ["--scripts", "--script"],
          description: "Run pre/post publish scripts (off by default for push)",
        },
        ...publishOptions,
      ],
    },
    {
      name: "add",
      description: "Copy the current version from the store to your project",
      args: {
        name: "package",
        description: "The package you want to add",
        isVariadic: true,
        generators: generatePackages,
      },
      options: [
        {
          name: "--link",
          description: "Add a 'link:' dependency instead of 'file:'",
        },
        {
          name: ["--dev", "-D", "--save-dev"],
          description: "Add yalc package to dev dependencies",
        },
        pureOption,
        {
          name: ["--workspace", "-W"],
          description: "Add dependency with 'workspace:' protocol",
        },
        updateOption,
      ],
    },
    {
      name: "link",
      description:
        "Alterative to 'add', instead using local '.yalc' as symlink source",
      args: {
        name: "package",
        description: "The package you want to link",
        isVariadic: true,
        generators: generatePackages,
      },
      options: [pureOption],
    },
    {
      name: "update",
      description: "Update package(s)",
      args: {
        name: "package",
        description: "The package to update",
        isOptional: true,
        isVariadic: true,
        generators: generatePackages,
      },
      options: [updateOption],
    },
    {
      name: "remove",
      description: "Remove package info from 'package.json' & 'yalc.lock'",
      args: {
        name: "package",
        description: "The package you want to remove",
        isOptional: true,
        isVariadic: true,
        generators: getLockedPackages,
      },
      options: [
        {
          name: "--all",
          description: "Remove all packages from project",
        },
        {
          name: "--retreat",
          description:
            "Remove packages from project, but leave in lock file (to be restored later)",
        },
      ],
    },
    {
      name: "installations",
      description: "Work with installations file: show/clean",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "clean",
          description: "Unpublish a package published with yalc publish",
          args: {
            name: "package",
            isOptional: true,
            isVariadic: true,
            generators: getInstalledPackages,
          },
          options: [
            {
              name: "--dry",
              description: "Only show the installations that would be removed",
            },
          ],
        },
        {
          name: "show",
          description:
            "Show all packages to which chosen package has been added",
          args: {
            name: "package",
            isOptional: true,
            isVariadic: true,
            generators: getInstalledPackages,
          },
        },
      ],
    },
    {
      name: "dir",
      description: "Show yalc system directory",
    },
    {
      name: "check",
      description: "Check 'package.json' for yalc packages",
      options: [
        {
          name: "--commit",
          description:
            "Commit mode for use in a pre-commit hook (queries staged files with git)",
        },
      ],
    },
    {
      name: "restore",
      description: "Restore retreated packages",
      args: {
        name: "package",
        description: "The package to restore",
        isOptional: true,
        isVariadic: true,
        generators: getLockedPackages,
      },
      options: [updateOption],
    },
    {
      name: "retreat",
      description:
        "Remove packages from project, but leave in lock file (to be restored later)",
      args: {
        name: "package",
        description: "The package to retreat",
        isOptional: true,
        isVariadic: true,
        generators: getLockedPackages,
      },
      options: [
        {
          name: "--all",
          description: "Retreat all packages",
        },
      ],
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help for yalc",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show version number",
    },
    {
      name: "--no-colors",
      description: "Disable colors",
      isPersistent: true,
    },
    {
      name: "--quiet",
      description: "Fully disable output (except errors)",
      isPersistent: true,
    },
    {
      name: "--store-folder",
      description: "Override the default location of the package store",
      isPersistent: true,
      args: {
        name: "folder",
        template: "folders",
      },
    },
  ],
};
export default completionSpec;
