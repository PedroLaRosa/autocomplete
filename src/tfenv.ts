// tfenv v3.2.2 (GitHub tag + Homebrew formula, released 2026-04-28, checked 2026-11-20). Source: upstream
// libexec/ scripts (incl. the undocumented exec), lib/, bin/tfenv and README at tag v3.2.2
const generators: Record<string, Fig.Generator> = {
  installedVersions: {
    script: ["tfenv", "list"],
    // `tfenv list` prints "* 1.7.5 (arm64) (set by ...)" or "  1.7.5 (arm64)"
    postProcess: (out) =>
      out
        .split("\n")
        .map((line) => line.replace("*", "").trim().split(" ")[0])
        .filter(Boolean)
        .map((name) => ({ name, description: "Installed version" })),
  },
  allVersions: {
    script: ["tfenv", "list-remote"],
    postProcess: (out) =>
      out
        .split("\n")
        .filter(Boolean)
        .map((name) => ({ name, description: "Version" })),
  },
};

const latest: Fig.Suggestion[] = [
  { name: "latest", description: "Latest stable version" },
  {
    name: "latest:",
    description: "Latest version matching a regex, e.g. latest:^1.5",
  },
];

const fromTfFiles: Fig.Suggestion[] = [
  {
    name: "latest-allowed",
    description: "Latest version allowed by required_version in *.tf files",
  },
  {
    name: "min-required",
    description: "Minimum version required by required_version in *.tf files",
  },
];

const completionSpec: Fig.Spec = {
  name: "tfenv",
  description: "Terraform version manager",
  subcommands: [
    {
      name: "install",
      description: "Install a specific version of Terraform",
      args: {
        name: "version",
        description:
          "Defaults to TFENV_TERRAFORM_VERSION, .terraform-version or latest",
        isOptional: true,
        suggestions: [...latest, ...fromTfFiles],
        generators: generators.allVersions,
      },
    },
    {
      name: "use",
      description: "Switch a version to use",
      args: {
        name: "version",
        description:
          "Defaults to TFENV_TERRAFORM_VERSION, .terraform-version or latest",
        isOptional: true,
        suggestions: [
          { name: "-", description: "Switch to the previous version" },
          ...latest,
          ...fromTfFiles,
        ],
        generators: generators.installedVersions,
      },
    },
    {
      name: "uninstall",
      description: "Uninstall one or more versions of Terraform",
      args: {
        name: "version",
        description:
          "Defaults to TFENV_TERRAFORM_VERSION or .terraform-version",
        isOptional: true,
        isVariadic: true,
        suggestions: latest,
        generators: generators.installedVersions,
      },
    },
    {
      name: "list",
      description: "List all installed versions",
    },
    {
      name: "list-remote",
      description: "List all installable versions",
    },
    {
      name: "version-name",
      description: "Print current version",
    },
    {
      name: "init",
      description: "Update environment to use tfenv correctly",
    },
    {
      name: "pin",
      description: "Write the current active version to ./.terraform-version",
    },
    {
      name: "exec",
      description: "Run terraform with the selected version",
      hidden: true,
      args: {
        name: "terraform args",
        description: "Arguments passed to terraform, e.g. plan",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "min-required",
      description: "Detect the minimal required version from *.tf files",
      hidden: true,
    },
    {
      name: "resolve-version",
      description: "Resolve the version to act on from the environment",
      hidden: true,
      args: { name: "version", isOptional: true },
    },
    {
      name: "version-file",
      description: "Detect the file that sets the current tfenv version",
      hidden: true,
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "View your current tfenv version",
    },
    {
      name: ["-h", "--help"],
      description: "View commands",
    },
  ],
};

export default completionSpec;
