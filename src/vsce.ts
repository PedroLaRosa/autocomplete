// vsce (@vscode/vsce) v4.1.1 (npm latest, 2026-11-20). Source: static read of the published npm tarball
// (out/main.js commander definitions, out/package.js Targets); the CLI was not executed.
import { filepaths } from "@tabsmith/autocomplete-generators";
import { gitGenerators } from "./git";

const targetSuggestions: string[] = [
  "win32-x64",
  "win32-arm64",
  "linux-x64",
  "linux-arm64",
  "linux-armhf",
  "alpine-x64",
  "alpine-arm64",
  "darwin-x64",
  "darwin-arm64",
  "web",
];

const versionArg: Fig.Arg = {
  name: "version",
  description: "Version bump (major, minor, patch) or an explicit semver",
  isOptional: true,
  suggestions: ["major", "minor", "patch"],
};

// NOTE: Running `vsce ls-publishers` requires access to keychain of `vscode-vsce`
// which distracts the completion and needs to "Allow always" the access of it to work well.
// const publishersGenerator: Fig.Generator = {
//   script: ["vsce", "ls-publishers"],
//   postProcess: (out) => {
//     if (out.trim() === "") return [];
//     return out.split("\n").map((publisher) => ({
//       name: publisher,
//       icon: "👤",
//     }));
//   },
// };

const yarnOptions: Fig.Option[] = [
  {
    name: "--yarn",
    description:
      "Use yarn instead of npm (default inferred from presence of yarn.lock or .yarnrc)",
  },
  {
    name: "--no-yarn",
    description:
      "Use npm instead of yarn (default inferred from absence of yarn.lock or .yarnrc)",
  },
];

const dependenciesOptions: Fig.Option[] = [
  {
    name: "--dependencies",
    description: "Enable dependency detection via npm or yarn",
  },
  {
    name: "--no-dependencies",
    description: "Disable dependency detection via npm or yarn",
  },
];

const ignoreFileOption: Fig.Option = {
  name: "--ignoreFile",
  description: "Indicate alternative .vscodeignore",
  args: {
    name: "path",
    template: "filepaths",
  },
};

const readmePathOption: Fig.Option = {
  name: "--readme-path",
  description: "Path to README file (defaults to README.md)",
  args: {
    name: "path",
    template: "filepaths",
  },
};

const changelogPathOption: Fig.Option = {
  name: "--changelog-path",
  description: "Path to CHANGELOG file (defaults to CHANGELOG.md)",
  args: {
    name: "path",
    template: "filepaths",
  },
};

const followSymlinksOption: Fig.Option = {
  name: "--follow-symlinks",
  description:
    "Recurse into symlinked directories instead of treating them as files",
};

const ignoreOtherTargetFoldersOption: Fig.Option = {
  name: "--ignore-other-target-folders",
  description:
    "Ignore other target folders. Valid only when --target is provided",
  dependsOn: ["-t", "--target"],
};

const versionCommitOptions: Fig.Option[] = [
  {
    name: ["-m", "--message"],
    description: "Commit message used when calling `npm version`",
    args: {
      name: "commit message",
    },
  },
  {
    name: "--no-git-tag-version",
    description:
      "Do not create a version commit and tag when calling `npm version`. Valid only when [version] is provided",
  },
  {
    name: "--no-update-package-json",
    description:
      "Do not update `package.json`. Valid only when [version] is provided",
  },
];

const branchOptions: Fig.Option[] = [
  {
    name: "--githubBranch",
    description:
      "The GitHub branch used to infer relative links in README.md. Can be overridden by --baseContentUrl and --baseImagesUrl",
    args: {
      name: "branch",
      generators: gitGenerators.remoteLocalBranches,
    },
  },
  {
    name: "--gitlabBranch",
    description:
      "The GitLab branch used to infer relative links in README.md. Can be overridden by --baseContentUrl and --baseImagesUrl",
    args: {
      name: "branch",
      generators: gitGenerators.remoteLocalBranches,
    },
  },
];

const baseUrlOptions: Fig.Option[] = [
  {
    name: "--baseContentUrl",
    description:
      "Prepend all relative links in README.md with the specified URL",
    args: {
      name: "url",
    },
  },
  {
    name: "--baseImagesUrl",
    description:
      "Prepend all relative image links in README.md with the specified URL",
    args: {
      name: "url",
    },
  },
];

const preReleaseOption: Fig.Option = {
  name: "--pre-release",
  description: "Mark this package as a pre-release",
};

const allowOptions: Fig.Option[] = [
  {
    name: "--allow-star-activation",
    description: "Allow using * in activation events",
  },
  {
    name: "--allow-missing-repository",
    description: "Allow missing a repository URL in package.json",
  },
  {
    name: "--allow-unused-files-pattern",
    description:
      "Allow include patterns for the files field in package.json that does not match any file",
  },
];

const allowPackageSecretsDescription =
  "The names of the secrets can be found in the error message ([SECRET_NAME])";

const allowPackageAllSecretsOption: Fig.Option = {
  name: "--allow-package-all-secrets",
  description: "Allow to package all kinds of secrets",
};

const allowPackageEnvFileOption: Fig.Option = {
  name: "--allow-package-env-file",
  description: "Allow packaging .env files",
};

const signToolOption = (description: string): Fig.Option => ({
  name: "--sign-tool",
  description,
  args: {
    name: "path",
    template: "filepaths",
  },
});

const patOption = (description: string): Fig.Option => ({
  name: ["-p", "--pat"],
  description,
  args: {
    name: "token",
  },
});

const azureCredentialOption: Fig.Option = {
  name: "--azure-credential",
  description: "Use Microsoft Entra ID for authentication",
};

const vsixPathArg: Fig.Arg = {
  name: "path",
  generators: filepaths({ extensions: ["vsix"] }),
};

const completionSpec: Fig.Spec = {
  name: "vsce",
  description: "The Visual Studio Code Extension Manager",
  subcommands: [
    {
      name: "ls",
      description: "Lists all the files that will be published/packaged",
      options: [
        {
          name: "--tree",
          description: "Prints the files in a tree format",
        },
        ...yarnOptions,
        {
          name: "--packagedDependencies",
          description:
            "Select packages that should be published only (includes dependencies)",
          isRepeatable: true,
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        ignoreFileOption,
        ...dependenciesOptions,
        readmePathOption,
        followSymlinksOption,
      ],
    },
    {
      name: ["package", "pack"],
      description: "Packages an extension",
      icon: "📦",
      args: versionArg,
      options: [
        {
          name: ["-o", "--out"],
          description:
            "Output .vsix extension file to <path> location (defaults to <name>-<version>.vsix)",
          args: vsixPathArg,
        },
        {
          name: ["-t", "--target"],
          description: "Target architecture",
          args: {
            name: "target",
            suggestions: targetSuggestions,
          },
        },
        ignoreOtherTargetFoldersOption,
        readmePathOption,
        changelogPathOption,
        ...versionCommitOptions,
        ...branchOptions,
        {
          name: "--no-rewrite-relative-links",
          description: "Skip rewriting relative links",
        },
        ...baseUrlOptions,
        ...yarnOptions,
        ignoreFileOption,
        {
          name: "--no-gitHubIssueLinking",
          description:
            "Disable automatic expansion of GitHub-style issue syntax into links",
        },
        {
          name: "--no-gitLabIssueLinking",
          description:
            "Disable automatic expansion of GitLab-style issue syntax into links",
        },
        ...dependenciesOptions,
        preReleaseOption,
        ...allowOptions,
        {
          name: "--allow-package-secrets",
          description: `Allow packaging specific secrets. ${allowPackageSecretsDescription}`,
          args: {
            name: "secrets",
            isVariadic: true,
          },
        },
        allowPackageAllSecretsOption,
        allowPackageEnvFileOption,
        {
          name: "--skip-license",
          description: "Allow packaging without license file",
        },
        signToolOption(
          "Path to the VSIX signing tool. Will be invoked with two arguments: `SIGNTOOL <path/to/extension.signature.manifest> <path/to/extension.signature.p7s>`"
        ),
        followSymlinksOption,
      ],
    },
    {
      name: "publish",
      description: "Publishes an extension",
      args: versionArg,
      options: [
        patOption(
          "Personal Access Token (defaults to VSCE_PAT environment variable)"
        ),
        azureCredentialOption,
        {
          name: "--oidc",
          description:
            "Use OpenID Connect trusted publishing for authentication",
          exclusiveOn: ["-p", "--pat", "--azure-credential"],
        },
        {
          name: ["-t", "--target"],
          description: "Target architectures",
          args: {
            name: "targets",
            isVariadic: true,
            suggestions: targetSuggestions,
          },
        },
        ignoreOtherTargetFoldersOption,
        readmePathOption,
        changelogPathOption,
        ...versionCommitOptions,
        {
          name: ["-i", "--packagePath"],
          description: "Publish the provided VSIX packages",
          args: {
            name: "paths",
            isVariadic: true,
            generators: filepaths({ extensions: ["vsix"] }),
          },
        },
        {
          name: "--manifestPath",
          description: "Manifest files to publish alongside the VSIX packages",
          args: {
            name: "paths",
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "--signaturePath",
          description: "Signature files to publish alongside the VSIX packages",
          args: {
            name: "paths",
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "--sigzipPath",
          description:
            "Signature archives to publish alongside the VSIX packages",
          args: {
            name: "paths",
            isVariadic: true,
            template: "filepaths",
          },
        },
        signToolOption(
          "Path to the VSIX signing tool. Will be invoked with two arguments: `SIGNTOOL <path/to/extension.signature.manifest> <path/to/extension.signature.p7s>`. This will be ignored if --sigzipPath is provided"
        ),
        ...branchOptions,
        ...baseUrlOptions,
        ...yarnOptions,
        {
          name: "--no-verify",
          description:
            "Allow all proposed APIs (deprecated: use --allow-all-proposed-apis instead)",
          deprecated: true,
        },
        {
          name: "--noVerify",
          description:
            "Allow all proposed APIs (deprecated: use --allow-all-proposed-apis instead)",
          deprecated: true,
          hidden: true,
        },
        {
          name: "--allow-proposed-apis",
          description: "Allow specific proposed APIs",
          args: {
            name: "apis",
            isVariadic: true,
          },
        },
        {
          name: "--allow-all-proposed-apis",
          description: "Allow all proposed APIs",
        },
        {
          name: "--allow-package-secrets",
          description:
            "Allow packaging a specific type of secret. The type of the secrets can be found in the error message ([SECRET_TYPE])",
          args: {
            name: "secret_type",
          },
        },
        allowPackageAllSecretsOption,
        allowPackageEnvFileOption,
        ignoreFileOption,
        ...dependenciesOptions,
        preReleaseOption,
        ...allowOptions,
        {
          name: "--skip-duplicate",
          description:
            "Fail silently if version already exists on the marketplace",
        },
        {
          name: "--skip-license",
          description: "Allow publishing without license file",
        },
        followSymlinksOption,
      ],
    },
    {
      name: "unpublish",
      description:
        "Removes an extension from the marketplace. Example extension id: ms-vscode.live-server",
      args: {
        name: "extensionid",
        isOptional: true,
      },
      options: [
        patOption("Personal Access Token"),
        azureCredentialOption,
        {
          name: ["-f", "--force"],
          description:
            "Skip confirmation prompt when unpublishing an extension",
        },
      ],
    },
    {
      name: "generate-manifest",
      description:
        "Generates the extension manifest from the provided VSIX package",
      options: [
        {
          name: ["-i", "--packagePath"],
          description: "Path to the VSIX package",
          isRequired: true,
          args: vsixPathArg,
        },
        {
          name: ["-o", "--out"],
          description:
            "Output the extension manifest to <path> location (defaults to <packagename>.manifest)",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "verify-signature",
      description:
        "Verifies the provided signature file against the provided VSIX package and manifest",
      options: [
        {
          name: ["-i", "--packagePath"],
          description: "Path to the VSIX package",
          isRequired: true,
          args: vsixPathArg,
        },
        {
          name: ["-m", "--manifestPath"],
          description: "Path to the Manifest file",
          isRequired: true,
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: ["-s", "--signaturePath"],
          description: "Path to the Signature file",
          isRequired: true,
          args: {
            name: "path",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "ls-publishers",
      description: "Lists all known publishers",
    },
    {
      name: "delete-publisher",
      description: "Deletes a publisher from marketplace",
      args: {
        name: "publisher",
      },
    },
    {
      name: "login",
      description: "Adds a publisher to the list of known publishers",
      icon: "🚪",
      args: {
        name: "publisher",
      },
    },
    {
      name: "logout",
      description: "Removes a publisher from the list of known publishers",
      args: {
        name: "publisher",
      },
    },
    {
      name: "verify-pat",
      description:
        "Verifies if the Personal Access Token or Azure identity has publish rights for the publisher",
      args: {
        name: "publisher",
        isOptional: true,
      },
      options: [
        patOption(
          "Personal Access Token (defaults to VSCE_PAT environment variable)"
        ),
        azureCredentialOption,
      ],
    },
    {
      name: "show",
      description: "Shows an extension's metadata",
      args: {
        name: "extensionid",
      },
      options: [
        {
          name: "--json",
          description: "Outputs data in json format",
        },
      ],
    },
    {
      name: "search",
      description: "Searches extension gallery",
      icon: "🔍",
      args: {
        name: "text",
      },
      options: [
        {
          name: "--json",
          description: "Output results in json format",
        },
        {
          name: "--stats",
          description: "Shows extensions rating and download count",
        },
        {
          name: ["-p", "--pagesize"],
          description: "Number of results to return",
          args: {
            name: "value",
            isOptional: true,
            default: "100",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Display help for command",
      icon: "❔",
      args: {
        name: "command",
        isOptional: true,
        suggestions: [
          "ls",
          "package",
          "publish",
          "unpublish",
          "generate-manifest",
          "verify-signature",
          "ls-publishers",
          "delete-publisher",
          "login",
          "logout",
          "verify-pat",
          "show",
          "search",
        ],
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Output the version number",
    },
  ],
};

export default completionSpec;
