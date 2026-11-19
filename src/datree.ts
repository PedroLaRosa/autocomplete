// Datree v1.9.19 (latest stable tag of datreeio/datree, 2026-11-19; main HEAD is the 2023-08-01 deprecation notice,
// project is DEPRECATED/archived and gets no further releases besides 1.9.20-22-rc tags). Source: cobra command
// definitions read statically from the repo (cmd/**/*.go); binary not run.
const testOptions: Fig.Option[] = [
  {
    name: "--ignore-missing-schemas",
    description: "Ignore missing schemas when executing schema validation step",
  },
  {
    name: "--no-record",
    description: "Don't send policy checks metadata to the backend",
  },
  {
    name: "--only-k8s-files",
    description:
      "Evaluate only valid yaml files with the properties 'apiVersion' and 'kind'. Ignore everything else",
  },
  {
    name: ["-o", "--output"],
    description: "Define output format (simple, yaml, json, xml, JUnit, sarif)",
    args: {
      name: "output",
      description: "Output format",
      suggestions: [
        {
          name: "simple",
          description: "Simple output without colors",
        },
        {
          name: "yaml",
          description: "YAML output",
        },
        {
          name: "json",
          description: "JSON output",
        },
        {
          name: "xml",
          description: "XML output",
        },
        {
          name: "JUnit",
          description: "JUnit output",
        },
        {
          name: "sarif",
          description: "SARIF output",
        },
      ],
    },
  },
  {
    name: ["-p", "--policy"],
    description: "Policy name to run against",
    args: {
      name: "policy",
      description: "String",
    },
  },
  {
    name: "--policy-config",
    description: "Path for local policies configuration file",
    args: {
      template: "filepaths",
    },
  },
  {
    name: "--schema-location",
    description:
      "Override schemas location search path (can be specified multiple times)",
    isRepeatable: true,
    args: {
      name: "stringArray",
      description: "String array",
    },
  },
  {
    name: ["-s", "--schema-version"],
    description:
      "Set kubernetes version to validate against. Defaults to 1.24.0",
    args: {
      name: "version",
      description: "Kubernetes version in the form MAJOR.MINOR.PATCH",
    },
  },
  {
    name: "--exclude",
    description: "Exclude paths pattern (regex)",
    args: {
      name: "pattern",
    },
  },
  {
    name: "--save-results",
    description:
      "Enter the path to the directory where you want to save the output file",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: "--skip-validation",
    description: "Skip validation step",
    args: {
      name: "step",
      suggestions: [{ name: "schema", description: "Skip schema validation" }],
    },
  },
  {
    name: "--save-rendered",
    description:
      "Don't delete rendered files after the policy check (e.g. helm, kustomize)",
  },
  {
    name: "--permissive-schema",
    description:
      "Perform non-strict schema validation (i.e. allow additional properties)",
  },
  {
    name: "--quiet",
    description: "Don't print skipped rules messages",
  },
  {
    name: "--verbose",
    description: "Display 'How to Fix' link",
  },
];

const configKeyArg: Fig.Arg = {
  name: "key",
  suggestions: ["token", "offline", "policy_config", "schema_locations"],
};

const datreeSpec: Fig.Spec = {
  name: "datree",
  description:
    "Policy management tool for your Kubernetes (deprecated upstream)",
  subcommands: [
    {
      name: "completion",
      description: "Generate completion script for bash,zsh,fish,powershell",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: "config",
      description: "Internal configuration management for datree config file",
      subcommands: [
        {
          name: "get",
          description:
            "Get value for specific key from datree config.yaml file. Defaults to $HOME/.datree/config.yaml",
          args: configKeyArg,
        },
        {
          name: "set",
          description:
            "Apply value for specific key in datree config.yaml file. Defaults to $HOME/.datree/config.yaml",
          args: [configKeyArg, { name: "value" }],
        },
      ],
    },
    {
      name: ["docs", "documentation"],
      description: "Open the default browser with datree documentation page",
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        template: "help",
      },
    },
    {
      name: "kustomize",
      description:
        "Render resources defined in a kustomization.yaml file and run a policy check against them",
      subcommands: [
        {
          name: "test",
          description:
            "Execute datree test for kustomize build <args>. Input should be a kustomize build directory or file",
          args: {
            name: "directory",
            template: ["folders", "filepaths"],
          },
          options: testOptions,
        },
      ],
    },
    {
      name: "publish",
      description:
        "Publish policies configuration for given <fileName>. Input should be the path to the Policy-as-Code yaml configuration file. ## Note You need to first enable Policy-as-Code (PaC) on the settings page in the dashboard",
      args: {
        name: "file path",
        template: "filepaths",
      },
    },
    {
      name: "test",
      description:
        "Execute static analysis for given <pattern>. Input should be glob or `-` for stdin",
      args: {
        name: "file path",
        template: "filepaths",
        isVariadic: true,
      },
      options: testOptions,
    },
    {
      name: "upgrade",
      description: "Upgrade datree to the latest version",
    },
    {
      name: "version",
      description: "Print the version number",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for datree",
      isPersistent: true,
    },
  ],
};
export default datreeSpec;
