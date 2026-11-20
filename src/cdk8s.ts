// cdk8s-cli v2.207.87 (npm registry latest, 2026-11-20). Source: lib/cli/index.js and lib/cli/cmds/{init,import,synth}.js plus templates/ of the published npm package, read statically (not executed).
const importLanguages = ["typescript", "python", "java", "go", "csharp"];

const outputDirectory: Fig.Arg = {
  template: "folders",
  suggestCurrentToken: true,
};

const completionSpec: Fig.Spec = {
  name: "cdk8s",
  description: "CDK for K8s",
  subcommands: [
    {
      name: "init",
      description: "Create a new cdk8s project from a template",
      args: {
        name: "type",
        description: "Project type",
        suggestions: [
          "csharp-app",
          "go-app",
          "java-app",
          "python-app",
          "typescript-app",
        ],
      },
    },
    {
      name: ["import", "gen", "generate"],
      description: "Imports API objects to your app by generating constructs",
      args: {
        name: "spec",
        description:
          "Import spec with the syntax [NAME:=]SPEC, where SPEC is k8s, a CRD file or URL, github:account/repo[@VERSION] or helm:CHART[@VERSION]",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
        suggestions: ["k8s"],
      },
      options: [
        {
          name: ["--language", "-l"],
          description: "Output programming language",
          args: {
            name: "language",
            suggestions: importLanguages,
          },
        },
        {
          name: ["--save", "-s"],
          description:
            "Save the import URL in the 'imports' section of the cdk8s.yaml configuration file (default)",
          exclusiveOn: ["--no-save"],
        },
        {
          name: "--no-save",
          description:
            "Do not save the import URL in the cdk8s.yaml configuration file",
          exclusiveOn: ["--save", "-s"],
        },
        {
          name: "--class-prefix",
          description:
            "A prefix to add to all generated class names (must be PascalCase)",
          exclusiveOn: ["--no-class-prefix"],
          args: {
            name: "prefix",
          },
        },
        {
          name: "--no-class-prefix",
          description: "Does not add a prefix to generated class names",
          exclusiveOn: ["--class-prefix"],
        },
        {
          name: "--exclude",
          description:
            "Do not import types that match these regular expressions (only for k8s)",
          isRepeatable: true,
          args: {
            name: "regexp",
          },
        },
        {
          name: ["--output", "-o"],
          description: "Output directory",
          args: outputDirectory,
        },
      ],
    },
    {
      name: ["synth", "synthesize"],
      description:
        "Synthesizes Kubernetes manifests for all charts in your app",
      options: [
        {
          name: ["--app", "-a"],
          description: "Command to use in order to execute cdk8s app",
          args: {
            name: "command",
          },
        },
        {
          name: ["--output", "-o"],
          description: "Output directory",
          exclusiveOn: ["--stdout", "-p"],
          args: outputDirectory,
        },
        {
          name: ["--stdout", "-p"],
          description:
            "Write synthesized manifests to STDOUT instead of the output directory",
          exclusiveOn: ["--output", "-o"],
        },
        {
          name: "--plugins-dir",
          description: "Directory to store cdk8s plugins",
          args: outputDirectory,
        },
        {
          name: "--validate",
          description: "Apply validation plugins on the resulting manifests",
          exclusiveOn: ["--no-validate"],
        },
        {
          name: "--no-validate",
          description: "Disable validation",
          exclusiveOn: ["--validate"],
        },
        {
          name: "--validation-reports-output-file",
          description:
            "File to write a JSON representation of the validation reports to",
          args: {
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
        {
          name: "--format",
          description:
            "Synthesis format for Kubernetes manifests (default: plain)",
          args: {
            name: "format",
            suggestions: [
              {
                name: "plain",
                description: "Plain Kubernetes manifests",
              },
              {
                name: "helm",
                description: "Helm chart",
              },
            ],
          },
        },
        {
          name: "--chart-api-version",
          description:
            "Chart API version of the Helm chart (only with --format helm, defaults to v2)",
          args: {
            name: "version",
            suggestions: ["v1", "v2"],
          },
        },
        {
          name: "--chart-version",
          description:
            "Chart version of the Helm chart (SemVer, required with --format helm)",
          args: {
            name: "version",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: "--version",
      description: "The current version",
    },
    {
      name: "--help",
      description: "Show help",
    },
    {
      name: "--check-upgrade",
      description: "Check for cdk8s-cli upgrade (default)",
      exclusiveOn: ["--no-check-upgrade"],
    },
    {
      name: "--no-check-upgrade",
      description: "Do not check for cdk8s-cli upgrade",
      exclusiveOn: ["--check-upgrade"],
    },
  ],
};

export default completionSpec;
