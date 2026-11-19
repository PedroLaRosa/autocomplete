// Terraform v1.17.2 (gh release hashicorp/terraform, 2026-11-19). Source: commands.go and internal/command/*.go Help() text at v1.17.2
// If you edit commands or options, please copy our changes on to the terragrunt spec
const workspaceList: Fig.Generator = {
  script: ["terraform", "workspace", "list"],
  postProcess: function (out) {
    return out.split("\n").map((workspace) => {
      return {
        name: workspace.replace("* ", "").trim(),
        icon: "https://www.terraform.io/favicon.ico",
        description: "Workspace",
      };
    });
  },
};

const addressList: Fig.Generator = {
  script: ["terraform", "state", "list"],
  postProcess: function (out) {
    if (out.includes("No state file was found!") || out.includes("Error")) {
      return [];
    }
    return out.split("\n").map((addresses) => {
      return {
        name: addresses.replace("* ", "").trim(),
        icon: "https://www.terraform.io/favicon.ico",
        description: "Address",
      };
    });
  },
};

const lockOptions: Fig.Option[] = [
  {
    name: "-lock",
    requiresSeparator: true,
    description:
      "Lock the state file when locking is supported. Defaults to true",
    args: {
      name: "true or false",
      suggestions: ["true", "false"],
    },
  },
  {
    name: "-lock-timeout",
    requiresSeparator: true,
    description: "Duration to retry a state lock. Default 0s",
    args: {
      name: "seconds",
    },
  },
];

const noColorOption: Fig.Option = {
  name: "-no-color",
  description: "Disables output with coloring",
};

const jsonOption: Fig.Option = {
  name: "-json",
  description: "Print machine readable output in JSON format",
};

const ignoreRemoteVersionOption: Fig.Option = {
  name: "-ignore-remote-version",
  description:
    "Continue even if remote and local Terraform versions are incompatible. Use with extreme caution",
};

const testDirectoryOption: Fig.Option = {
  name: "-test-directory",
  requiresSeparator: true,
  description: 'Set the Terraform test directory. Defaults to "tests"',
  args: {
    name: "path",
    template: "folders",
  },
};

const stateOption: Fig.Option = {
  name: "-state",
  requiresSeparator: true,
  description:
    "Path to the state file. Defaults to 'terraform.tfstate'. Ignored when remote state is used",
  args: {
    template: "filepaths",
  },
};

const dryRunOption: Fig.Option = {
  name: "-dry-run",
  description: "Print what would change without changing anything",
};

const idOption: Fig.Option = {
  name: "-id",
  requiresSeparator: true,
  description:
    "Only include instances whose 'id' attribute equals the given value",
  args: {
    name: "id",
  },
};

const platformOption: Fig.Option = {
  name: "-platform",
  requiresSeparator: true,
  description:
    "Target platform (os_arch) to include. This flag can be used multiple times",
  isRepeatable: true,
  args: {
    name: "os_arch",
    suggestions: [
      "linux_amd64",
      "linux_arm64",
      "darwin_amd64",
      "darwin_arm64",
      "windows_amd64",
    ],
  },
};

const varOptions: Fig.Option[] = [
  {
    name: "-var",
    insertValue: "-var {cursor}",
    description:
      "Set a variable in the Terraform configuration. This flag can be set multiple times",
    isRepeatable: true,
    args: {
      name: "foo=bar",
    },
  },
  {
    name: "-var-file",
    requiresSeparator: true,
    description:
      "Set variables in the Terraform configuration from a variable file. This flag can be set multiple times",
    isRepeatable: true,
    args: {
      template: "filepaths",
    },
  },
];

const generalSubCommandOptions: Fig.Option[] = [
  ...lockOptions,
  {
    name: "-input",
    requiresSeparator: true,
    description: "Ask for input for variables if not directly set",
    args: {
      name: "true or false",
      suggestions: ["true", "false"],
    },
  },
  noColorOption,
];

const globalOptions: Fig.Option[] = [
  {
    name: "-help",
    description:
      "Show this help output, or the help for a specified subcommand",
  },
  {
    name: "-chdir",
    description:
      "Switch to a different working directory before executing the given subcommand",
    requiresSeparator: true,
    args: {
      template: "filepaths",
    },
  },
  {
    name: "-version",
    description: "Show the current Terraform version",
  },
];

const mainCommands: Fig.Subcommand[] = [
  {
    name: "init",
    description: "Prepare your working directory for other commands",
    options: [
      {
        name: ["-backend", "-cloud"],
        requiresSeparator: true,
        description:
          "Initialize the backend or HCP Terraform. Defaults to true",
        args: {
          name: "true or false",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "-backend-config",
        requiresSeparator: true,
        description:
          "Backend configuration file or 'key=value' pair to merge with the 'backend' block. This flag can be used multiple times",
        isRepeatable: true,
        args: {
          name: "path",
          template: "filepaths",
        },
      },
      {
        name: "-force-copy",
        description:
          "Suppress prompts about copying state data when initializing a new state backend",
      },
      {
        name: "-from-module",
        requiresSeparator: true,
        description:
          "Copy the contents of the given module into the target directory before initialization",
        args: {
          name: "source",
        },
      },
      {
        name: "-get",
        requiresSeparator: true,
        description:
          "Download modules for this configuration. Defaults to true",
        args: {
          name: "true or false",
          suggestions: ["true", "false"],
        },
      },
      jsonOption,
      {
        name: "-plugin-dir",
        requiresSeparator: true,
        description:
          "Directory containing plugin binaries. This flag can be used multiple times",
        isRepeatable: true,
        args: {
          template: "folders",
        },
      },
      {
        name: "-reconfigure",
        description: "Reconfigure a backend, ignoring any saved configuration",
      },
      {
        name: "-migrate-state",
        description:
          "Reconfigure a backend, and attempt to migrate any existing state",
      },
      {
        name: "-upgrade",
        description:
          "Opt to upgrade modules and plugins as part of their respective installation steps",
      },
      {
        name: "-lockfile",
        requiresSeparator: true,
        description: "Set a dependency lockfile mode",
        args: {
          name: "mode",
          suggestions: ["readonly"],
        },
      },
      ignoreRemoteVersionOption,
      testDirectoryOption,
      ...varOptions,
      ...generalSubCommandOptions,
      ...globalOptions,
    ],
  },
  {
    name: "validate",
    description: "Check whether the configuration is valid",
    options: [
      jsonOption,
      noColorOption,
      {
        name: "-no-tests",
        description: "Don't validate test files",
      },
      testDirectoryOption,
      {
        name: "-query",
        description: "Also validate .tfquery.hcl files",
      },
      ...varOptions,
      ...globalOptions,
    ],
  },
  {
    name: "plan",
    description: "Show changes required by the current configuration",
    options: [
      {
        name: "-compact-warnings",
        description:
          "If Terraform produces any warnings that are not accompanied by errors, show them in a more compact form that includes only the summary messages",
      },
      {
        name: "-destroy",
        description:
          "If set, generates a plan to destroy all the known resources",
      },
      {
        name: "-refresh-only",
        description:
          "Check whether remote objects still match the most recent apply without proposing actions to undo outside changes",
      },
      {
        name: "-minimal-refresh",
        description:
          "Skip refreshing objects that the initial plan shows as unchanged since the most recent apply",
      },
      {
        name: "-detailed-exitcode",
        description: "Return a detailed exit code when the command exits",
      },
      {
        name: "-generate-config-out",
        requiresSeparator: true,
        description:
          "Generate HCL for resources in import blocks that are not already in configuration, written to a new file at path",
        args: {
          name: "path",
          template: "filepaths",
        },
      },
      {
        name: "-out",
        requiresSeparator: true,
        description: "The path to save the generated execution plan",
      },
      {
        name: "-parallelism",
        description:
          "Limit the number of concurrent operation as Terraform walks the graph. Defaults to 10",
        args: {
          name: "number",
        },
      },
      {
        name: "-refresh",
        requiresSeparator: true,
        description: "Update the state prior to checking for differences",
        args: {
          name: "true or false",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "-replace",
        requiresSeparator: true,
        description:
          "Force replacement of a resource instance. This flag can be used multiple times",
        isRepeatable: true,
        args: {
          name: "resource",
          generators: addressList,
        },
      },
      stateOption,
      {
        name: "-target",
        displayName: "-target=resource",
        description:
          "A Resource Address to target. This flag can be used multiple times",
        isRepeatable: true,
      },
      ...varOptions,
      ...generalSubCommandOptions,
      ...globalOptions,
    ],
  },
  {
    name: "apply",
    description: "Create or update infrastructure",
    options: [...globalOptions],
  },
  {
    name: "destroy",
    description: "Destroy previously-created infrastructure",
    options: [...globalOptions],
  },
];

const otherCommands: Fig.Subcommand[] = [
  {
    name: "console",
    description: "Try Terraform expressions at an interactive command prompt",
    options: [...globalOptions],
  },
  {
    name: "fmt",
    description: "Reformat your configuration in the standard style",
    options: [...globalOptions],
  },
  {
    name: "force-unlock",
    description: "Release a stuck lock on the current workspace",
    options: [...globalOptions],
  },
  {
    name: "get",
    description: "Install or upgrade remote Terraform modules",
    options: [
      {
        name: "-update",
        description:
          "If specified, modules that are already downloaded will be checked for updates and the updates will be downloaded if present",
      },
      noColorOption,
      testDirectoryOption,
      ...varOptions,
      ...globalOptions,
    ],
  },
  {
    name: "graph",
    description: "Generate a Graphviz graph of the steps in an operation",
    options: [
      {
        name: "-plan",
        requiresSeparator: true,
        description:
          "Render graph using the specified plan file. Implies -type=apply",
        args: {
          name: "tfplan",
          template: "filepaths",
        },
      },
      {
        name: "-draw-cycles",
        description: "Highlight any cycles in the graph with colored edges",
      },
      {
        name: "-type",
        requiresSeparator: true,
        description: "Type of operation graph to output",
        args: {
          name: "type",
          suggestions: ["plan", "plan-refresh-only", "plan-destroy", "apply"],
        },
      },
      {
        name: "-module-depth",
        requiresSeparator: true,
        description: "Depth of modules to show in the output",
        deprecated: true,
        args: {
          name: "n",
        },
      },
      {
        name: "-format",
        requiresSeparator: true,
        description: "Output format for the graph. Defaults to dot",
        args: {
          name: "format",
          suggestions: ["dot", "mermaid"],
        },
      },
      ...varOptions,
      ...globalOptions,
    ],
  },
  {
    name: "import",
    description: "Associate existing infrastructure with a Terraform resource",
    options: [...globalOptions],
  },
  {
    name: "login",
    description: "Obtain and save credentials for a remote host",
    options: [...globalOptions],
  },
  {
    name: "logout",
    description: "Remove locally-stored credentials for a remote host",
    options: [...globalOptions],
  },
  {
    name: "metadata",
    description: "Metadata related commands",
    options: [...globalOptions],
    subcommands: [
      {
        name: "functions",
        description:
          "Show signatures and descriptions for the available functions",
        options: [jsonOption, ...globalOptions],
      },
    ],
  },
  {
    name: "modules",
    description: "Show all declared modules in a working directory",
    options: [jsonOption, ...varOptions, ...globalOptions],
  },
  {
    name: "output",
    description: "Show output values from your root module",
    options: [...globalOptions],
  },
  {
    name: "providers",
    description: "Show the providers required for this configuration",
    args: {
      name: "dir",
      template: "folders",
      isOptional: true,
    },
    options: [testDirectoryOption, ...varOptions, ...globalOptions],
    subcommands: [
      {
        name: "lock",
        description: "Write out dependency locks for the configured providers",
        args: {
          name: "providers",
          isVariadic: true,
          isOptional: true,
        },
        options: [
          {
            name: "-fs-mirror",
            requiresSeparator: true,
            description:
              "Consult the given filesystem mirror directory instead of the origin registry",
            args: {
              name: "dir",
              template: "folders",
            },
          },
          {
            name: "-net-mirror",
            requiresSeparator: true,
            description:
              "Consult the given network mirror (base URL) instead of the origin registry",
            args: {
              name: "url",
            },
          },
          platformOption,
          {
            name: "-enable-plugin-cache",
            description:
              "Use the globally configured plugin cache to speed up locking",
          },
          testDirectoryOption,
          ...varOptions,
          ...globalOptions,
        ],
      },
      {
        name: "mirror",
        description: "Save local copies of all required provider plugins",
        args: {
          name: "target-dir",
          template: "folders",
        },
        options: [
          platformOption,
          {
            name: "-lock-file",
            requiresSeparator: true,
            description:
              "Use the provider lock file when fetching providers. Defaults to true",
            args: {
              name: "true or false",
              suggestions: ["true", "false"],
            },
          },
          ...varOptions,
          ...globalOptions,
        ],
      },
      {
        name: "schema",
        description: "Show schemas for the providers used in the configuration",
        options: [jsonOption, ...varOptions, ...globalOptions],
      },
    ],
  },
  {
    name: "query",
    description: "Search and list remote infrastructure with Terraform",
    options: [
      {
        name: ["-policies", "--policies"],
        requiresSeparator: true,
        description:
          "Evaluate policies from a policy set directory against discovered resources. This flag can be used multiple times",
        isRepeatable: true,
        args: {
          name: "path",
          template: "folders",
        },
      },
      {
        name: "-generate-config-out",
        requiresSeparator: true,
        description:
          "Generate import and resource blocks for any found results, written to a new file at path",
        args: {
          name: "path",
          template: "filepaths",
        },
      },
      jsonOption,
      noColorOption,
      ...varOptions,
      ...globalOptions,
    ],
  },
  {
    name: "refresh",
    description: "Update the state to match remote systems",
    options: [...globalOptions],
  },
  {
    name: "show",
    description: "Show the current state or a saved plan",
    options: [...globalOptions],
  },
  {
    name: "stacks",
    // ponytail: subcommands come from a downloaded plugin at runtime, not listed
    description: "Manage HCP Terraform stack operations",
    options: [...globalOptions],
  },
  {
    name: "state",
    description: "Advanced state management",
    subcommands: [
      {
        name: "identities",
        description: "List the identities of resources in the state",
        args: {
          name: "address",
          generators: addressList,
          isVariadic: true,
          isOptional: true,
        },
        options: [jsonOption, stateOption, idOption, ...globalOptions],
      },
      {
        name: "list",
        description: "List resources in the state",
        args: {
          name: "address",
          generators: addressList,
          isVariadic: true,
          isOptional: true,
        },
        options: [stateOption, idOption, ...globalOptions],
      },
      {
        name: "mv",
        description: "Move an item in the state",
        args: [
          {
            name: "source",
            generators: addressList,
          },
          {
            name: "destination",
          },
        ],
        options: [
          dryRunOption,
          ...lockOptions,
          ignoreRemoteVersionOption,
          ...varOptions,
          ...globalOptions,
        ],
      },
      {
        name: "pull",
        description: "Pull current state and output to stdout",
        options: [...varOptions, ...globalOptions],
      },
      {
        name: "push",
        description: "Update remote state from a local state file",
        args: {
          name: "path",
          template: "filepaths",
        },
        options: [
          {
            name: "-force",
            description:
              "Write the state even if lineages don't match or the remote serial is higher",
          },
          ...lockOptions,
          ...varOptions,
          ...globalOptions,
        ],
      },
      {
        name: "replace-provider",
        description: "Replace provider in the state",
        args: [
          {
            name: "from_provider_fqn",
          },
          {
            name: "to_provider_fqn",
          },
        ],
        options: [
          {
            name: "-auto-approve",
            description: "Skip interactive approval",
          },
          ...lockOptions,
          ignoreRemoteVersionOption,
          ...varOptions,
          ...globalOptions,
        ],
      },
      {
        name: "rm",
        description: "Remove instances from the state",
        args: {
          name: "address",
          generators: addressList,
          isVariadic: true,
        },
        options: [
          dryRunOption,
          {
            name: "-backup",
            requiresSeparator: true,
            description: "Path where Terraform should write the backup state",
            args: {
              template: "filepaths",
            },
          },
          ...lockOptions,
          stateOption,
          ignoreRemoteVersionOption,
          ...varOptions,
          ...globalOptions,
        ],
      },
      {
        name: "show",
        description: "Show a resource in the state",
        args: {
          name: "address",
          generators: addressList,
        },
        options: [stateOption, jsonOption, ...globalOptions],
      },
    ],
  },
  {
    name: "taint",
    description: "Mark a resource instance as not fully functional",
    options: [
      {
        name: "-allow-missing",
        description:
          "If specified, the command will succeed (exit code 0) even if the resource is missing. The command might still return an error for other situations, such as if there is a problem reading or writing the state",
      },
      {
        name: "-lock",
        requiresSeparator: true,
        description:
          "Disables Terraform's default behavior of attempting to take a read/write lock on the state for the duration of the operation if set to false. Defaults to true",
        args: {
          name: "true or false",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "-lock-timeout",
        requiresSeparator: true,
        description:
          "Unless locking is disabled with -lock=false, instructs Terraform to retry acquiring a lock for a period of time before returning an error. The duration syntax is a number followed by a time unit letter, such as 3s for three seconds",
        args: {
          name: "seconds",
        },
      },
      ignoreRemoteVersionOption,
      ...varOptions,
      ...globalOptions,
    ],
    args: {
      generators: addressList,
      name: "address",
    },
  },
  {
    name: "test",
    description: "Execute integration tests for Terraform modules",
    options: [
      {
        name: "-cloud-run",
        requiresSeparator: true,
        description:
          "Run the tests remotely in HCP Terraform or Terraform Enterprise for the given private registry module source",
        args: {
          name: "source",
        },
      },
      {
        name: "-filter",
        requiresSeparator: true,
        description:
          "Only execute the given test file. This flag can be used multiple times",
        isRepeatable: true,
        args: {
          name: "testfile",
          template: "filepaths",
        },
      },
      jsonOption,
      {
        name: "-junit-xml",
        requiresSeparator: true,
        description: "Save a test report in JUnit XML format to the given path",
        args: {
          name: "path",
          template: "filepaths",
        },
      },
      noColorOption,
      {
        name: "-parallelism",
        requiresSeparator: true,
        description:
          "Limit the number of concurrent operations within a test run. Defaults to 10",
        args: {
          name: "n",
        },
      },
      testDirectoryOption,
      ...varOptions,
      {
        name: "-verbose",
        description:
          "Print the plan or state for each run block as it executes",
      },
      ...globalOptions,
    ],
  },
  {
    name: "untaint",
    description: "Remove the 'tainted' state from a resource instance",
    options: [...globalOptions],
  },
  {
    name: "version",
    description: "Show the current Terraform version",
    options: [jsonOption, ...globalOptions],
  },
  {
    name: "workspace",
    description: "Workspace management",
    options: [...globalOptions],
    subcommands: [
      {
        name: "new",
        insertValue: "new '{cursor}'",
        description: "Create a new workspace",
        args: {
          name: "workspace name",
        },
        options: [
          ...lockOptions,
          {
            name: "-state",
            requiresSeparator: true,
            description:
              "Path to an existing state file to initialize the state of this environment",
            args: {
              name: "path",
              template: "filepaths",
            },
          },
          ...globalOptions,
        ],
      },
      {
        name: "show",
        description: "Display the current workspace",
        options: [...globalOptions],
      },
      {
        name: "list",
        description: "List the workspace",
        options: [jsonOption, ...globalOptions],
      },
      {
        name: "delete",
        description: "Delete the specified workspace",
        args: {
          generators: workspaceList,
          name: "workspace name",
        },
        options: [
          {
            name: "-force",
            requiresSeparator: true,
            description:
              "Delete the workspace even if its state is not empty. Defaults to false",
            args: {
              name: "true or false",
              suggestions: ["true", "false"],
            },
          },
          ...lockOptions,
        ],
      },
      {
        name: "select",
        description: "Change the current working workspace",
        args: {
          generators: workspaceList,
        },
        options: [
          {
            name: "-or-create",
            requiresSeparator: true,
            description:
              "Create the workspace if it doesn't exist. Defaults to false",
            args: {
              name: "true or false",
              suggestions: ["true", "false"],
            },
          },
        ],
      },
    ],
  },
];

const extraCommands: Fig.Subcommand[] = [
  {
    name: "-install-autocomplete",
    description: "Install bash/zsh tab completion",
  },
  {
    name: "-uninstall-autocomplete",
    description: "Uninstall bash/zsh tab completion",
  },
];

const completionSpec: Fig.Spec = {
  name: "terraform",
  description: "Terraform CLI",
  options: globalOptions,
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  subcommands: [...mainCommands, ...otherCommands, ...extraCommands],
};

export default completionSpec;
