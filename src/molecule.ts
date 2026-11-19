// Molecule v26.11.0 (GitHub release ansible/molecule, 2026-11-05). Source:
// src/molecule/shell.py, click_cfg.py and command/*.py at that tag

// Click `--x/--no-x` boolean pair
const toggle = (name: string, description: string): Fig.Option[] => [
  { name: `--${name}`, description, exclusiveOn: [`--no-${name}`] },
  {
    name: `--no-${name}`,
    description: `Disable --${name}`,
    exclusiveOn: [`--${name}`],
  },
];

const scenarioOption = (isRepeatable = false): Fig.Option => ({
  name: ["--scenario-name", "-s"],
  description: isRepeatable
    ? "Name of the scenario to target. May be specified multiple times (default: default)"
    : "Name of the scenario to target",
  isRepeatable,
  args: { name: "SCENARIO_NAME" },
});

const formatOption = (choices: string[]): Fig.Option => ({
  name: ["--format", "-f"],
  description: "Change output format (default: simple)",
  args: { name: "FORMAT", suggestions: choices },
});

// ponytail: static list of built-in + molecule-plugins drivers; `molecule drivers` is too slow for a generator
const driverOption: Fig.Option = {
  name: ["--driver-name", "-d"],
  description: "Name of driver to use",
  args: {
    name: "DRIVER_NAME",
    suggestions: [
      "default",
      "azure",
      "containers",
      "docker",
      "ec2",
      "gce",
      "openstack",
      "podman",
      "vagrant",
    ],
  },
};

const workersOptions: Fig.Option[] = [
  ...toggle(
    "continue-on-failure",
    "EXPERIMENTAL: When using --workers, continue running remaining scenarios after a failure instead of stopping"
  ),
  {
    name: "--parallel",
    description:
      "Enable parallel isolation mode (default: disabled). Use --workers instead",
    exclusiveOn: ["--no-parallel"],
    deprecated: true,
  },
  {
    name: "--no-parallel",
    description: "Disable parallel isolation mode",
    exclusiveOn: ["--parallel"],
    deprecated: true,
  },
  {
    name: "--workers",
    description:
      "EXPERIMENTAL: Number of concurrent worker processes (default: 1)",
    args: { name: "WORKERS", suggestions: ["cpus", "cpus-1"] },
  },
];

const allExcludeOptions: Fig.Option[] = [
  ...toggle(
    "all",
    "Target all scenarios. Overrides scenario-name. For 'reset', this includes shared state and inventory (default: disabled)"
  ),
  {
    name: ["--exclude", "-e"],
    description:
      "Name of the scenario to exclude from targeting. May be specified multiple times",
    isRepeatable: true,
    args: { name: "SCENARIO_NAME" },
  },
];

const resetOptions: Fig.Option[] = [
  scenarioOption(true),
  ...allExcludeOptions,
  ...toggle(
    "command-borders",
    "Enable or disable borders around command output (default: enabled)"
  ),
  ...toggle(
    "report",
    "Enable or disable end-of-run summary report (default: enabled)"
  ),
];

const commonOptions: Fig.Option[] = [
  ...resetOptions,
  ...toggle(
    "shared-state",
    "EXPERIMENTAL: Enable or disable sharing (some) state between scenarios (default: disabled)"
  ),
];

const ansibleArgs: Fig.Arg = {
  name: "ANSIBLE_ARGS",
  description: "Arguments to forward to Ansible",
  isOptional: true,
  isVariadic: true,
};

const workflow = (
  name: string,
  description: string,
  extra: Fig.Option[] = [],
  args?: Fig.Arg
): Fig.Subcommand => ({
  name,
  description,
  options: [...commonOptions, ...extra],
  args,
});

const completionSpec: Fig.Spec = {
  name: "molecule",
  description: "Molecule aids in the development and testing of Ansible roles",
  subcommands: [
    workflow(
      "check",
      "Use the provisioner to perform a Dry-Run (destroy, dependency, create, prepare, converge)",
      workersOptions
    ),
    workflow(
      "cleanup",
      "Use the provisioner to cleanup any changes made to external systems during the stages of testing"
    ),
    workflow(
      "converge",
      "Use the provisioner to configure instances (dependency, create, prepare converge)",
      [],
      ansibleArgs
    ),
    workflow("create", "Use the provisioner to start the instances", [
      driverOption,
    ]),
    workflow("dependency", "Manage the role's dependencies"),
    workflow("destroy", "Use the provisioner to destroy the instances", [
      driverOption,
      ...workersOptions,
    ]),
    {
      name: "drivers",
      description: "List drivers",
      options: [formatOption(["simple", "plain"])],
    },
    workflow(
      "idempotence",
      "Use the provisioner to configure the instances and parse the output to determine idempotence",
      [],
      ansibleArgs
    ),
    {
      name: "init",
      description: "Initialize a new scenario",
      subcommands: [
        {
          name: "scenario",
          description: "Initialize a new scenario for use with Molecule",
          args: {
            name: "SCENARIO_NAME",
            description: "Name of scenario to initialize (default: default)",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "list",
      description: "List status of instances",
      options: [scenarioOption(), formatOption(["simple", "plain", "yaml"])],
    },
    {
      name: "login",
      description: "Log in to one instance",
      options: [
        {
          name: ["--host", "-h"],
          description: "Host to access",
          args: { name: "HOST" },
        },
        scenarioOption(),
      ],
    },
    {
      name: "matrix",
      description: "List matrix of steps used to test instances",
      options: [scenarioOption()],
      args: {
        name: "SUBCOMMAND",
        description: "Subcommand to analyze",
        suggestions: [
          "check",
          "cleanup",
          "converge",
          "create",
          "dependency",
          "destroy",
          "idempotence",
          "prepare",
          "side_effect",
          "syntax",
          "test",
          "verify",
        ],
      },
    },
    workflow(
      "prepare",
      "Use the provisioner to prepare the instances into a particular starting state",
      [
        driverOption,
        formatOption(["simple", "plain"]),
        ...toggle("force", "Enable or disable force mode (default: disabled)"),
      ]
    ),
    {
      name: "reset",
      description: "Reset molecule temporary folders",
      options: resetOptions,
    },
    workflow(
      "side-effect",
      "Use the provisioner to perform side effects to the role"
    ),
    workflow("syntax", "Use the provisioner to syntax check the role"),
    workflow(
      "test",
      "Test (dependency, cleanup, destroy, syntax, create, prepare, converge, idempotence, side_effect, verify, cleanup, destroy)",
      [
        driverOption,
        {
          name: ["--platform-name", "-p"],
          description: "Name of the platform to target only",
          args: { name: "PLATFORM_NAME" },
        },
        {
          name: "--destroy",
          description:
            "The destroy strategy used at the conclusion of a Molecule run (default: always)",
          args: { name: "STRATEGY", suggestions: ["always", "never"] },
        },
        ...workersOptions,
      ],
      ansibleArgs
    ),
    workflow("verify", "Run automated tests against instances"),
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show version information and exit",
    },
    ...toggle("debug", "Enable or disable debug mode (default: disabled)"),
    {
      name: ["--verbose", "-v"],
      description: "Increase Ansible verbosity level (default: 0)",
      isRepeatable: true,
    },
    {
      name: ["--base-config", "-c"],
      description:
        "Path to a base config, deep merged in order under each scenario's molecule.yml (default: .config/molecule/config.yml)",
      isRepeatable: true,
      args: { name: "PATH", template: "filepaths" },
    },
    {
      name: ["--env-file", "-e"],
      description:
        "The file to read variables from when rendering molecule.yml (default: .env.yml)",
      args: { name: "PATH", template: "filepaths" },
    },
  ],
};

export default completionSpec;
