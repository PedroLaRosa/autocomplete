// AWS CDK Toolkit (aws-cdk) v2.1149.0 (npm registry latest, 2026-11-20). Source: lib/cli/cli-type-registry.json, lib/cli/parse-command-line-arguments.js, lib/cli/cli.js and README.md of the published npm package, read statically (the CLI was not executed).

// Builds a boolean option together with its --no-* counterpart
const toggle = (
  names: string[],
  description: string,
  noDescription: string,
  extra: Partial<Fig.Option> = {}
): Fig.Option[] => {
  const positive = names.map((name) => `--${name}`);
  const negative = names.map((name) => `--no-${name}`);
  return [
    {
      name: positive.length === 1 ? positive[0] : positive,
      description,
      exclusiveOn: negative,
      ...extra,
    },
    {
      name: negative.length === 1 ? negative[0] : negative,
      description: noDescription,
      exclusiveOn: positive,
      ...extra,
    },
  ];
};

const stacksArg: Fig.Arg = {
  name: "stacks",
  description:
    "Stack name(s) or glob patterns (optional if the app has a single stack)",
  isVariadic: true,
  isOptional: true,
};

const stackArg: Fig.Arg = {
  name: "stack",
  description: "Stack name (optional if the app has a single stack)",
  isOptional: true,
};

const unstableFeatures = [
  "diagnose",
  "flags",
  "gc",
  "init",
  "orphan",
  "publish-assets",
  "refactor",
  "telemetry",
  "validate",
];

const jsonOption = (description: string): Fig.Option => ({
  name: ["--json", "-j"],
  description,
});

const exclusivelyOption = (description: string): Fig.Option => ({
  name: ["--exclusively", "-e"],
  description,
});

const forceOption = (description: string): Fig.Option => ({
  name: ["--force", "-f"],
  description,
});

const allOption = (description: string): Fig.Option => ({
  name: "--all",
  description,
});

const toolkitStackNameOption = (description: string): Fig.Option => ({
  name: "--toolkit-stack-name",
  description,
  args: {
    name: "name",
  },
});

const concurrencyOption = (description: string): Fig.Option => ({
  name: "--concurrency",
  description,
  args: {
    name: "number",
  },
});

const changeSetNameOption = (description: string): Fig.Option => ({
  name: "--change-set-name",
  description,
  args: {
    name: "name",
  },
});

const notificationArnsOption: Fig.Option = {
  name: "--notification-arns",
  description:
    "ARNs of SNS topics that CloudFormation will notify with stack related events, added to the 'notificationArns' stack property",
  isRepeatable: true,
  args: {
    name: "arn",
  },
};

const outputsFileOption: Fig.Option = {
  name: ["--outputs-file", "-O"],
  description: "Path to file where stack outputs will be written as JSON",
  args: {
    name: "file",
    template: "filepaths",
  },
};

const buildExcludeOption: Fig.Option = {
  name: ["--build-exclude", "-E"],
  description: "Do not rebuild asset with the given ID",
  isRepeatable: true,
  args: {
    name: "asset id",
  },
};

const progressOption: Fig.Option = {
  name: "--progress",
  description: "Display mode for stack activity events",
  args: {
    name: "mode",
    suggestions: ["bar", "events", "errors-only"],
  },
};

const noRollbackOption: Fig.Option = {
  name: "-R",
  description: "Do not roll back the stack on failure (same as --no-rollback)",
  exclusiveOn: ["--rollback"],
};

const rollbackOptions = (description: string): Fig.Option[] => [
  ...toggle(
    ["rollback"],
    description,
    "Do not roll back the stack to a stable state on failure, to iterate more rapidly (do not use with resource replacements, as that always fails)"
  ),
  noRollbackOption,
];

const hotswapOptions: Fig.Option[] = [
  {
    name: "--hotswap-fallback",
    description:
      "Attempt a 'hotswap' deployment, which skips CloudFormation and updates resources directly, and fall back to a full deployment if that is not possible",
  },
  {
    name: "--hotswap-ecs-minimum-healthy-percent",
    description:
      "Lower limit on the number of tasks that must remain in the RUNNING state during a deployment, as a percentage of the desiredCount",
    args: {
      name: "percent",
    },
  },
  {
    name: "--hotswap-ecs-maximum-healthy-percent",
    description:
      "Upper limit on the number of tasks that are allowed in the RUNNING or PENDING state during a deployment, as a percentage of the desiredCount",
    args: {
      name: "percent",
    },
  },
  {
    name: "--hotswap-ecs-stabilization-timeout-seconds",
    description:
      "Number of seconds to wait for a single service to reach stable state, where the desiredCount is equal to the runningCount",
    args: {
      name: "seconds",
    },
  },
];

const initLanguages = [
  "csharp",
  "cs",
  "fsharp",
  "fs",
  "go",
  "java",
  "javascript",
  "js",
  "python",
  "py",
  "typescript",
  "ts",
];

const migrateLanguages = [
  "typescript",
  "ts",
  "go",
  "java",
  "python",
  "py",
  "csharp",
  "cs",
];

const completionSpec: Fig.Spec = {
  name: "cdk",
  description: "AWS CDK CLI",
  subcommands: [
    {
      name: "init",
      description: "Create a new, empty CDK project from a template",
      args: {
        name: "template",
        description: "Template to use",
        isOptional: true,
        suggestions: [
          { name: "app", description: "Template for a CDK application" },
          { name: "lib", description: "Template for a CDK construct library" },
          {
            name: "sample-app",
            description: "Example CDK application with some constructs",
          },
        ],
      },
      options: [
        {
          name: ["--language", "-l"],
          description:
            "The language to be used for the new project (default can be configured in ~/.cdk.json)",
          args: {
            name: "language",
            suggestions: initLanguages,
          },
        },
        {
          name: "--list",
          description: "List the available templates",
        },
        {
          name: "--generate-only",
          description:
            "Only generate project files, without setting up a git repo, installing dependencies or compiling the project",
        },
        {
          name: ["--lib-version", "-V"],
          description:
            "The version of the CDK library (aws-cdk-lib) to initialize built-in templates with (defaults to the version current when this CLI was built)",
          exclusiveOn: ["--from-path"],
          args: {
            name: "version",
          },
        },
        {
          name: "--from-path",
          description:
            "Path to a local custom template directory or multi-template repository (requires --unstable=init)",
          exclusiveOn: ["--lib-version", "-V"],
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--template-path",
          description:
            "Path to a specific template within a multi-template repository",
          dependsOn: ["--from-path"],
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--package-manager",
          description:
            "The package manager used to install dependencies (TypeScript and JavaScript projects only, defaults to npm)",
          args: {
            name: "package manager",
            suggestions: ["npm", "yarn", "pnpm", "bun"],
          },
        },
        {
          name: ["--project-name", "-n"],
          description: "The name of the new project",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "metadata",
      description: "Returns all metadata associated with this stack",
      args: stackArg,
      options: [jsonOption("Use JSON output instead of YAML")],
    },
    { name: "doctor", description: "Check your set-up for potential problems" },
    {
      name: "diff",
      description:
        "Compares the specified stack with the deployed stack or a local template file, and returns with status 1 if any difference is found",
      args: stacksArg,
      options: [
        {
          name: "--parameters",
          description:
            "Additional parameters passed to CloudFormation when creating the diff change set (STACK:KEY=VALUE)",
          isRepeatable: true,
          args: {
            name: "stack:key=value",
          },
        },
        exclusivelyOption(
          "Only diff requested stacks, don't include dependencies"
        ),
        {
          name: "--context-lines",
          description:
            "Number of context lines to include in arbitrary JSON diff rendering",
          args: {
            name: "number",
          },
        },
        {
          name: "--template",
          description:
            "The path to the CloudFormation template to compare with (implies --method=template)",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--strict",
          description:
            "Do not filter out AWS::CDK::Metadata resources, mangled non-ASCII characters, or the CheckBootstrapVersionRule",
        },
        {
          name: "--security-only",
          description: "Only diff for broadened security changes",
        },
        {
          name: "--fail",
          description:
            "Fail with exit code 1 in case of diff (same as --fail-on=any-change)",
          exclusiveOn: ["--fail-on"],
        },
        {
          name: "--fail-on",
          description:
            "Fail with exit code 1 when the diff contains the given kind of change",
          exclusiveOn: ["--fail"],
          args: {
            name: "kind",
            suggestions: [
              { name: "never", description: "Never fail" },
              { name: "any-change", description: "Fail on any difference" },
              {
                name: "broadening",
                description:
                  "Fail on changes that broaden security permissions",
              },
              {
                name: "destructive",
                description:
                  "Fail on changes that replace, delete or orphan a resource",
              },
            ],
          },
        },
        {
          name: "--processed",
          description:
            "Compare against the template with Transforms already processed",
        },
        {
          name: ["--quiet", "-q"],
          description:
            "Do not print stack name and default message when there is no diff to stdout",
        },
        ...toggle(
          ["change-set", "changeset"],
          "Create a change set to analyze resource replacements, using the deploy role instead of the lookup role (deprecated, use --method)",
          "Do not create a change set (deprecated, use --method)",
          { deprecated: true }
        ),
        changeSetNameOption(
          "Name of the CloudFormation change set to create (only if method is not template)"
        ),
        {
          name: ["--method", "-m"],
          description: "How to compute the diff",
          args: {
            name: "method",
            suggestions: [
              {
                name: "auto",
                description:
                  "Create a change set and fall back to template-only on failure (default)",
              },
              {
                name: "change-set",
                description:
                  "Create a change set and fail if it cannot be created",
              },
              {
                name: "template",
                description:
                  "Compare templates directly, using the lookup role",
              },
            ],
          },
        },
        {
          name: "--import-existing-resources",
          description:
            "Whether the change set imports resources that already exist",
        },
        {
          name: "--include-moves",
          description: "Include moves in the diff",
        },
      ],
    },
    {
      name: "destroy",
      description: "Destroy the stack(s) named STACKS",
      args: stacksArg,
      options: [
        allOption("Destroy all available stacks"),
        exclusivelyOption(
          "Only destroy requested stacks, don't include dependees"
        ),
        forceOption("Do not ask for confirmation before destroying the stacks"),
        concurrencyOption(
          "Maximum number of simultaneous destroys (dependency permitting) to execute (default: 1)"
        ),
        {
          name: "--express",
          description:
            "Destroy stack(s) using Express Mode, a faster mode of tearing down stacks which skips stabilization and has automatic rollback disabled by default",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy the specified stack(s) into your AWS account",
      args: stacksArg,
      options: [
        allOption("Deploy all available stacks"),
        buildExcludeOption,
        exclusivelyOption(
          "Only deploy requested stacks, don't include dependencies"
        ),
        {
          name: "--require-approval",
          description: "What changes require manual approval",
          args: {
            name: "level",
            suggestions: ["never", "any-change", "broadening", "destructive"],
          },
        },
        notificationArnsOption,
        {
          name: "--rollback-trigger-alarm-arns",
          description:
            "ARNs of CloudWatch alarms that CloudFormation monitors during the deployment, rolling back if any goes to ALARM state (maximum of 5, pass 'none' to clear previously configured triggers)",
          isRepeatable: true,
          args: {
            name: "arn",
          },
        },
        {
          name: "--monitoring-time-minutes",
          description:
            "Minutes (0 to 180) CloudFormation keeps monitoring the rollback trigger alarms after the deployment completes (requires --rollback-trigger-alarm-arns)",
          dependsOn: ["--rollback-trigger-alarm-arns"],
          args: {
            name: "minutes",
          },
        },
        {
          name: ["--tags", "-t"],
          description:
            "Tags to add to the stack (KEY=VALUE), overrides tags from the cloud assembly (deprecated)",
          deprecated: true,
          isRepeatable: true,
          args: {
            name: "key=value",
          },
        },
        ...toggle(
          ["execute"],
          "Execute the change set (deprecated, see --method)",
          "Do not execute the change set (deprecated, see --method=prepare-change-set)",
          { deprecated: true }
        ),
        changeSetNameOption(
          "Name of the CloudFormation change set to create (only if method is not direct)"
        ),
        {
          name: ["--method", "-m"],
          description: "How to perform the deployment",
          args: {
            name: "method",
            suggestions: [
              {
                name: "change-set",
                description: "Create and execute a change set (default)",
              },
              {
                name: "prepare-change-set",
                description: "Create a change set without executing it",
              },
              {
                name: "execute-change-set",
                description:
                  "Execute a previously created change set, bypassing synthesis entirely",
              },
              {
                name: "direct",
                description:
                  "Skip change sets for faster deployments, but lose progress information",
              },
            ],
          },
        },
        {
          name: "--import-existing-resources",
          description:
            "Whether the change set imports resources that already exist",
        },
        forceOption("Always deploy stack even if templates are identical"),
        {
          name: "--parameters",
          description:
            "Additional parameters passed to CloudFormation at deploy time (STACK:KEY=VALUE)",
          isRepeatable: true,
          args: {
            name: "stack:key=value",
          },
        },
        outputsFileOption,
        ...toggle(
          ["previous-parameters"],
          "Use previous values for existing parameters (default)",
          "Do not use previous values for existing parameters (all parameters must be specified on every deployment)"
        ),
        toolkitStackNameOption(
          "The name of the existing CDK toolkit stack (only used for apps using legacy synthesis)"
        ),
        progressOption,
        ...rollbackOptions(
          "Roll back the stack to a stable state on failure (default, except in Express Mode)"
        ),
        {
          name: "--hotswap",
          description:
            "Attempt a 'hotswap' deployment, but do not fall back to a full deployment if that is not possible, ignoring changes to non-hotswappable properties (do not use in production)",
        },
        ...hotswapOptions,
        {
          name: "--watch",
          description:
            "Continuously observe the project files and deploy the given stack(s) automatically when changes are detected (implies --hotswap by default)",
        },
        ...toggle(
          ["logs"],
          "Show CloudWatch log events from all resources in the selected stacks in the terminal (default, only in effect with --watch)",
          "Do not show CloudWatch log events"
        ),
        concurrencyOption(
          "Maximum number of simultaneous deployments (dependency permitting) to execute (default: 1)"
        ),
        ...toggle(
          ["asset-parallelism"],
          "Build and publish assets in parallel",
          "Do not build and publish assets in parallel"
        ),
        {
          name: "--asset-build-concurrency",
          description:
            "Maximum number of asset builds to run in parallel (default: 1)",
          args: {
            name: "number",
          },
        },
        ...toggle(
          ["asset-prebuild"],
          "Build all assets before deploying the first stack, useful for failing Docker builds early (default)",
          "Do not build all assets before deploying the first stack"
        ),
        {
          name: "--ignore-no-stacks",
          description: "Deploy even if the app contains no stacks",
        },
        {
          name: "--revert-drift",
          description:
            "Create a drift-aware change set that brings actual resource states in line with template definitions",
        },
        {
          name: "--express",
          description:
            "Deploy using Express Mode, a faster mode of deployment which skips stabilization and has automatic rollback disabled by default",
        },
      ],
    },
    {
      name: "bootstrap",
      description: "Deploys the CDK toolkit stack into an AWS environment",
      args: {
        name: "environments",
        description: "Environments to bootstrap (aws://ACCOUNT/REGION)",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: ["--bootstrap-bucket-name", "-b", "--toolkit-bucket-name"],
          description:
            "The name of the CDK toolkit bucket (the bucket will be created and must not exist)",
          args: {
            name: "name",
          },
        },
        {
          name: "--bootstrap-kms-key-id",
          description:
            "AWS KMS master key ID used for the SSE-KMS encryption (specify AWS_MANAGED_KEY to use an AWS-managed key)",
          exclusiveOn: ["--bootstrap-customer-key"],
          args: {
            name: "key id",
            suggestions: ["AWS_MANAGED_KEY"],
          },
        },
        {
          name: ["--example-permissions-boundary", "--epb"],
          description: "Use the example permissions boundary",
          exclusiveOn: ["--custom-permissions-boundary", "--cpb"],
        },
        {
          name: ["--custom-permissions-boundary", "--cpb"],
          description: "Use the permissions boundary specified by name",
          exclusiveOn: ["--example-permissions-boundary", "--epb"],
          args: {
            name: "name",
          },
        },
        {
          name: "--apply-permissions-boundary-to-all-roles",
          description:
            "Apply the permissions boundary to all bootstrap roles (not just the CloudFormation execution role)",
        },
        {
          name: "--bootstrap-customer-key",
          description:
            "Create a Customer Master Key (CMK) for the bootstrap bucket (you will be charged but can customize permissions, modern bootstrapping only)",
          exclusiveOn: ["--bootstrap-kms-key-id"],
        },
        {
          name: "--qualifier",
          description:
            "String which must be unique for each bootstrap stack (must also be configured on your CDK app if changed from the default)",
          args: {
            name: "qualifier",
          },
        },
        ...toggle(
          ["public-access-block-configuration"],
          "Block public access configuration on CDK toolkit bucket (default)",
          "Do not block public access on the CDK toolkit bucket"
        ),
        ...toggle(
          ["deny-external-id"],
          "Block AssumeRole access to all bootstrapped roles if an ExternalId is provided (default)",
          "Do not block AssumeRole access when an ExternalId is provided"
        ),
        {
          name: ["--tags", "-t"],
          description: "Tags to add for the stack (KEY=VALUE)",
          isRepeatable: true,
          args: {
            name: "key=value",
          },
        },
        ...toggle(
          ["execute"],
          "Execute the change set (default)",
          "Do not execute the change set"
        ),
        {
          name: "--trust",
          description:
            "AWS account IDs that should be trusted to perform deployments into this environment (modern bootstrapping only)",
          isRepeatable: true,
          args: {
            name: "account id",
          },
        },
        {
          name: "--trust-for-lookup",
          description:
            "AWS account IDs that should be trusted to look up values in this environment (modern bootstrapping only)",
          isRepeatable: true,
          args: {
            name: "account id",
          },
        },
        {
          name: "--untrust",
          description:
            "AWS account IDs that should not be trusted by this environment (modern bootstrapping only)",
          isRepeatable: true,
          args: {
            name: "account id",
          },
        },
        {
          name: "--cloudformation-execution-policies",
          description:
            "Managed Policy ARNs that should be attached to the role performing deployments into this environment (modern bootstrapping only)",
          isRepeatable: true,
          args: {
            name: "arn",
          },
        },
        forceOption(
          "Always bootstrap even if it would downgrade template version"
        ),
        ...toggle(
          ["termination-protection"],
          "Enable CloudFormation termination protection on the bootstrap stacks",
          "Disable CloudFormation termination protection on the bootstrap stacks"
        ),
        {
          name: "--show-template",
          description:
            "Instead of bootstrapping, print the current CLI's bootstrapping template to stdout for customization",
        },
        jsonOption(
          "Use JSON output instead of YAML when the template is printed with --show-template"
        ),
        toolkitStackNameOption("The name of the CDK toolkit stack to create"),
        {
          name: "--template",
          description:
            "Use the template from the given file instead of the built-in one (use --show-template to obtain an example)",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        ...toggle(
          ["previous-parameters"],
          "Use previous values for existing parameters (default)",
          "Do not use previous values for existing parameters (all parameters must be specified on every deployment)"
        ),
        ...toggle(
          ["import-existing-resources"],
          "Import existing resources into the bootstrap stack instead of failing if they already exist (default)",
          "Fail if resources of the bootstrap stack already exist"
        ),
        {
          name: "--express",
          description:
            "Create the bootstrap stack using CloudFormation Express Mode",
        },
      ],
    },
    {
      name: ["synth", "synthesize"],
      description:
        "Synthesizes and prints the CloudFormation template for this stack",
      args: stacksArg,
      options: [
        exclusivelyOption(
          "Only synthesize requested stacks, don't include dependencies"
        ),
        ...toggle(
          ["validation"],
          'After synthesis, validate stacks with the "validateOnSynth" attribute set (default, can also be controlled with CDK_VALIDATION)',
          "Do not validate stacks after synthesis"
        ),
        {
          name: ["--quiet", "-q"],
          description: "Do not output CloudFormation Template to stdout",
        },
        jsonOption(
          "Use JSON output instead of YAML when templates are printed to STDOUT"
        ),
        {
          name: "--watch",
          description:
            "Continuously observe the project files and synthesize the given stack(s) automatically when changes are detected, never deploying or printing templates",
        },
      ],
    },
    {
      name: ["ls", "list"],
      description: "List all stacks in the app",
      args: stacksArg,
      options: [
        {
          name: ["--long", "-l"],
          description: "Display environment information for each stack",
        },
        {
          name: ["--show-dependencies", "-d"],
          description: "Display stack dependency information for each stack",
        },
        jsonOption("Use JSON output instead of YAML"),
      ],
    },
    {
      name: "import",
      description: "Import existing resource(s) into the given STACK",
      args: stackArg,
      options: [
        ...toggle(
          ["execute"],
          "Execute the change set (default)",
          "Do not execute the change set"
        ),
        changeSetNameOption("Name of the CloudFormation change set to create"),
        notificationArnsOption,
        toolkitStackNameOption("The name of the CDK toolkit stack to create"),
        ...rollbackOptions(
          "Roll back the stack to a stable state on failure (default)"
        ),
        forceOption(
          "Do not abort if the template diff includes updates or deletes"
        ),
        {
          name: "--record-resource-mapping",
          description:
            "Write a mapping of existing physical resources to CDK resources to the given file path, without performing the import",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["--resource-mapping", "-m"],
          description:
            "Use the given file to map physical resources to CDK resources for import, instead of asking interactively",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--resource-mapping-inline",
          description:
            'Inline JSON resource mapping, e.g. \'{"MyResource":{"TableName":"my-table"}}\'',
          args: {
            name: "json",
          },
        },
      ],
    },
    {
      name: "watch",
      description: "Shortcut for 'deploy --watch'",
      args: stacksArg,
      options: [
        outputsFileOption,
        buildExcludeOption,
        exclusivelyOption(
          "Only deploy requested stacks, don't include dependencies"
        ),
        changeSetNameOption("Name of the CloudFormation change set to create"),
        forceOption("Always deploy stack even if templates are identical"),
        toolkitStackNameOption(
          "The name of the existing CDK toolkit stack (only used for apps using legacy synthesis)"
        ),
        progressOption,
        ...rollbackOptions(
          "Roll back the stack to a stable state on failure (default)"
        ),
        ...toggle(
          ["hotswap"],
          "Attempt a 'hotswap' deployment, but do not fall back to a full deployment if that is not possible, ignoring changes to non-hotswappable properties (default)",
          "Turn off hotswap deployments"
        ),
        ...hotswapOptions,
        ...toggle(
          ["logs"],
          "Show CloudWatch log events from all resources in the selected stacks in the terminal (default)",
          "Do not show CloudWatch log events"
        ),
        concurrencyOption(
          "Maximum number of simultaneous deployments (dependency permitting) to execute (default: 1)"
        ),
      ],
    },
    {
      name: ["ack", "acknowledge"],
      description: "Acknowledge a notice so that it does not show up anymore",
      args: {
        name: "id",
        description: "ID of the notice (issue number)",
      },
    },
    {
      name: "notices",
      description: "Returns a list of relevant notices",
      options: [
        {
          name: ["--unacknowledged", "-u"],
          description: "Returns a list of unacknowledged notices",
        },
      ],
    },
    {
      name: "context",
      description: "Manage cached context values",
      options: [
        {
          name: ["--reset", "-e"],
          description: "The context key (or its index) to reset",
          args: {
            name: "key",
          },
        },
        forceOption("Ignore missing key error"),
        {
          name: "--clear",
          description: "Clear all context",
        },
        jsonOption("Use JSON output instead of a table"),
      ],
    },
    {
      name: ["doc", "docs"],
      description: "Opens the reference documentation in a browser",
      options: [
        {
          name: ["--browser", "-b"],
          description:
            "The command to use to open the browser, using %u as a placeholder for the path of the file to open",
          args: {
            name: "command",
          },
        },
      ],
    },
    {
      name: "gc",
      description: "Garbage collect assets (requires --unstable=gc)",
      args: {
        name: "environments",
        description: "Environments to garbage collect (aws://ACCOUNT/REGION)",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: "--action",
          description:
            "The action (or sub-action) you want to perform (default: full)",
          args: {
            name: "action",
            suggestions: ["print", "tag", "delete-tagged", "full"],
          },
        },
        {
          name: "--type",
          description: "Type of assets to garbage collect (default: all)",
          args: {
            name: "type",
            suggestions: ["ecr", "s3", "all"],
          },
        },
        {
          name: "--rollback-buffer-days",
          description:
            "Delete assets that have been marked as isolated for this many days (default: 0)",
          args: {
            name: "days",
          },
        },
        {
          name: "--created-buffer-days",
          description:
            "Never delete assets younger than this (in days, default: 1)",
          args: {
            name: "days",
          },
        },
        ...toggle(
          ["confirm"],
          "Confirm via manual prompt before deletion (default)",
          "Do not ask for confirmation before deletion"
        ),
        {
          name: "--toolkit-stack-name",
          description:
            'The name of the CDK toolkit stack, if different from the default "CDKToolkit"',
          exclusiveOn: ["--bootstrap-stack-name"],
          args: {
            name: "name",
          },
        },
        {
          name: "--bootstrap-stack-name",
          description:
            "The name of the CDK toolkit stack (deprecated, use --toolkit-stack-name)",
          deprecated: true,
          exclusiveOn: ["--toolkit-stack-name"],
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "flags",
      description: "View and toggle feature flags (requires --unstable=flags)",
      args: {
        name: "flagname",
        description: "Feature flag name(s)",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: "--value",
          description:
            "The value the user would like to set the feature flag configuration to",
          args: {
            name: "value",
          },
        },
        {
          name: "--set",
          description:
            "Signifies the user would like to modify their feature flag configuration",
        },
        allOption("Modify or view all feature flags"),
        {
          name: "--unconfigured",
          description: "Modify unconfigured feature flags",
        },
        {
          name: "--recommended",
          description: "Change flags to recommended states",
        },
        {
          name: "--default",
          description: "Change flags to default state",
        },
        {
          name: ["--interactive", "-i"],
          description: "Interactive option for the flags command",
        },
        {
          name: "--safe",
          description:
            "Enable all feature flags that do not impact the user's application",
        },
        {
          name: ["--concurrency", "-n"],
          description:
            "Maximum number of simultaneous synths to execute (default: 4)",
          args: {
            name: "number",
          },
        },
      ],
    },
    {
      name: "validate",
      description:
        "Validate synthesized CloudFormation templates against policy rules (requires --unstable=validate)",
      args: stacksArg,
      options: [
        ...toggle(
          ["online"],
          "Submit templates to CloudFormation for early validation, requires AWS credentials (default)",
          "Do not submit templates to CloudFormation for validation"
        ),
        {
          name: "--watch",
          description:
            "Continuously observe the project files and validate the given stack(s) automatically when changes are detected, never deploying",
        },
      ],
    },
    {
      name: "diagnose",
      description:
        "Find the root cause(s) of stack deployment failures (requires --unstable=diagnose)",
      args: stacksArg,
      options: [
        toolkitStackNameOption(
          "The name of the existing CDK toolkit stack (only used for apps using legacy synthesis)"
        ),
        concurrencyOption("How many stacks to diagnose in parallel"),
      ],
    },
    {
      name: "rollback",
      description:
        "Rolls back the stack(s) named STACKS to their last stable state",
      args: stacksArg,
      options: [
        allOption("Roll back all available stacks"),
        toolkitStackNameOption(
          "The name of the CDK toolkit stack the environment is bootstrapped with"
        ),
        forceOption(
          "Orphan all resources for which the rollback operation fails"
        ),
        ...toggle(
          ["validate-bootstrap-version"],
          "Validate the bootstrap stack version (default)",
          "Do not validate the bootstrap stack version"
        ),
        {
          name: "--orphan",
          description:
            "Orphan the given resources, identified by their logical ID",
          isRepeatable: true,
          args: {
            name: "logical id",
          },
        },
      ],
    },
    {
      name: "publish-assets",
      description:
        "Publish assets for the given stack(s) without deploying (requires --unstable=publish-assets)",
      args: stacksArg,
      options: [
        allOption("Publish assets for all available stacks"),
        exclusivelyOption(
          "Only publish assets for requested stacks, don't include dependencies"
        ),
        forceOption(
          "Always publish assets, even if they are already published"
        ),
        concurrencyOption(
          "Maximum number of simultaneous asset operations (building and publishing, dependency permitting) to execute (default: 4)"
        ),
      ],
    },
    {
      name: "drift",
      description: "Detect drifts in the given CloudFormation stack(s)",
      args: stacksArg,
      options: [
        {
          name: "--fail",
          description: "Fail with exit code 1 if drift is detected",
        },
      ],
    },
    {
      name: "migrate",
      description: "Migrate existing AWS resources into a CDK app",
      options: [
        {
          name: ["--stack-name", "-n"],
          description:
            "The name assigned to the stack created in the new project (the name of the app is based on it as well)",
          args: {
            name: "name",
          },
        },
        {
          name: ["--language", "-l"],
          description:
            "The language to be used for the new project (default: typescript)",
          args: {
            name: "language",
            suggestions: migrateLanguages,
          },
        },
        {
          name: "--account",
          description:
            "The account to retrieve the CloudFormation stack template from",
          args: {
            name: "account id",
          },
        },
        {
          name: "--region",
          description:
            "The region to retrieve the CloudFormation stack template from",
          args: {
            name: "region",
          },
        },
        {
          name: "--from-path",
          description:
            "The path to the CloudFormation template to migrate, for locally stored templates",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--from-stack",
          description:
            "Retrieve the template for an existing CloudFormation stack",
        },
        {
          name: "--output-path",
          description: "The output path for the migrated CDK app",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--from-scan",
          description:
            "Whether a new resource scan should be created or the last successful existing scan should be used",
          args: {
            name: "scan",
            suggestions: ["new", "most-recent"],
          },
        },
        {
          name: "--filter",
          description:
            "Filter the resource scan by criteria in the format key1=value1,key2=value2 (resource-identifier, resource-type-prefix, tag-key or tag-value), repeat for OR style filtering",
          isRepeatable: true,
          args: {
            name: "filter",
          },
        },
        {
          name: "--compress",
          description: "Zip the generated CDK app",
        },
      ],
    },
    {
      name: "explore",
      description: "Opens an interactive web explorer for your CDK app",
      options: [
        {
          name: "--port",
          description: "Port to bind the web server on",
          args: {
            name: "port",
          },
        },
      ],
    },
    {
      name: "lsp",
      description:
        "Start the CDK Language Server (LSP) over stdio for editor and AI-agent integration",
      options: [
        {
          name: "--features",
          description:
            "Print the LSP feature manifest as JSON and exit instead of starting the server",
        },
      ],
    },
    {
      name: "orphan",
      description:
        "Detach resources from a CloudFormation stack without deleting them (requires --unstable=orphan)",
      args: {
        name: "paths",
        description:
          "Construct paths of the resources to orphan (all in the same stack)",
        isVariadic: true,
      },
    },
    {
      name: "refactor",
      description:
        "Moves resources between stacks or within the same stack (requires --unstable=refactor)",
      args: stacksArg,
      options: [
        {
          name: "--additional-stack-name",
          description:
            "Names of deployed stacks to be considered for resource comparison",
          isRepeatable: true,
          args: {
            name: "name",
          },
        },
        {
          name: "--dry-run",
          description:
            "Do not perform any changes, just show what would be done",
        },
        {
          name: "--override-file",
          description:
            "A file that declares overrides to be applied to the list of mappings computed by the CLI",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--revert",
          description:
            "Revert the refactor operation (only valid if a mapping file was provided)",
        },
        {
          name: "--force",
          description: "Do the refactor without asking for confirmation",
        },
        toolkitStackNameOption(
          "The name of the existing CDK toolkit stack (used to find the staging bucket for templates that are too large to be sent inline)"
        ),
      ],
    },
    {
      name: "cli-telemetry",
      description: "Enable or disable anonymous telemetry",
      options: [
        {
          name: "--enable",
          description: "Enable anonymous telemetry",
          exclusiveOn: ["--disable", "--status"],
        },
        {
          name: "--disable",
          description: "Disable anonymous telemetry",
          exclusiveOn: ["--enable", "--status"],
        },
        {
          name: "--status",
          description: "Report telemetry opt-in/out status",
          exclusiveOn: ["--enable", "--disable"],
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
      name: ["-h", "--help"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["--app", "-a"],
      description:
        'Command-line for executing your app or a cloud assembly directory (e.g. "node bin/my-app.js"), can also be specified in cdk.json or ~/.cdk.json',
      isPersistent: true,
      args: {
        name: "command",
      },
    },
    {
      name: "--build",
      description: "Command-line for a pre-synth build",
      isPersistent: true,
      args: {
        name: "command",
      },
    },
    {
      name: ["--context", "-c"],
      description: "Add contextual string parameter (KEY=VALUE)",
      isPersistent: true,
      isRepeatable: true,
      args: {
        name: "key=value",
      },
    },
    {
      name: ["--plugin", "-p"],
      description:
        "Name or path of a node package that extends the CDK features",
      isPersistent: true,
      isRepeatable: true,
      args: {
        name: "plugin",
      },
    },
    {
      name: "--trace",
      description: "Print trace for stack warnings",
      isPersistent: true,
    },
    {
      name: "--strict",
      description: "Do not construct stacks with warnings",
      isPersistent: true,
    },
    ...toggle(
      ["lookups"],
      "Perform context lookups (default, synthesis fails if this is disabled and context lookups need to be performed)",
      "Do not perform context lookups",
      { isPersistent: true }
    ),
    {
      name: "--ignore-errors",
      description:
        "Ignores synthesis errors, which will likely produce an invalid output",
      isPersistent: true,
    },
    {
      name: ["--verbose", "-v"],
      description:
        "Show debug logs (specify multiple times to increase verbosity)",
      isPersistent: true,
      isRepeatable: true,
    },
    {
      name: "--debug",
      description:
        "Produce more detailed output to help diagnose unexpected behavior for the CDK app and CDK CLI (significantly slows down synthesis, implies --debug-app and --debug-cli)",
      isPersistent: true,
    },
    {
      name: "--debug-app",
      description:
        "Debug the CDK app by logging additional information during synthesis, such as creation stack traces (sets CDK_DEBUG, slows down synthesis)",
      isPersistent: true,
    },
    {
      name: "--debug-cli",
      description:
        "Debug the CDK CLI itself by reporting what keeps the process alive if it fails to exit (slows down execution)",
      isPersistent: true,
    },
    {
      name: "--profile",
      description: "Use the indicated AWS profile as the default environment",
      isPersistent: true,
      args: {
        name: "profile",
      },
    },
    {
      name: "--region",
      description: "Use the indicated AWS region as the default region",
      isPersistent: true,
      args: {
        name: "region",
      },
    },
    {
      name: "--proxy",
      description:
        "Use the indicated proxy (read from the HTTPS_PROXY environment variable if not specified)",
      isPersistent: true,
      args: {
        name: "url",
      },
    },
    {
      name: "--ca-bundle-path",
      description:
        "Path to CA certificate to use when validating HTTPS requests (resolved from AWS_CA_BUNDLE, the ca_bundle setting of the AWS profile, then REQUESTS_CA_BUNDLE if not specified)",
      isPersistent: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["--ec2creds", "-i"],
      description:
        "Force trying to fetch EC2 instance credentials (default: guess EC2 instance status)",
      isPersistent: true,
    },
    ...toggle(
      ["version-reporting", "telemetry"],
      "Enable CLI telemetry and the AWS::CDK::Metadata resource in synthesized templates (default)",
      'Disable CLI telemetry and do not include the "AWS::CDK::Metadata" resource in synthesized templates',
      { isPersistent: true }
    ),
    ...toggle(
      ["path-metadata"],
      'Include "aws:cdk:path" CloudFormation metadata for each resource (default)',
      'Do not include "aws:cdk:path" CloudFormation metadata',
      { isPersistent: true }
    ),
    ...toggle(
      ["asset-metadata"],
      'Include "aws:asset:*" CloudFormation metadata for resources that use assets (default)',
      'Do not include "aws:asset:*" CloudFormation metadata',
      { isPersistent: true }
    ),
    {
      name: ["--role-arn", "-r"],
      description: "ARN of Role to use when invoking CloudFormation",
      isPersistent: true,
      args: {
        name: "arn",
      },
    },
    ...toggle(
      ["staging"],
      "Copy assets to the output directory (default)",
      "Do not copy assets to the output directory, allowing local debugging via the SAM CLI to reference the original source files",
      { isPersistent: true }
    ),
    {
      name: ["--output", "-o"],
      description:
        "Emits the synthesized cloud assembly into a directory (default: cdk.out)",
      isPersistent: true,
      args: {
        name: "directory",
        template: "folders",
      },
    },
    ...toggle(
      ["notices"],
      "Show relevant notices",
      "Do not show relevant notices",
      { isPersistent: true }
    ),
    {
      name: "--no-color",
      description: "Removes colors and other style from console output",
      isPersistent: true,
      exclusiveOn: ["--color"],
    },
    {
      name: "--color",
      description: "Force colored output even when stdout is not a TTY",
      isPersistent: true,
      exclusiveOn: ["--no-color"],
    },
    ...toggle(
      ["ci"],
      "Force CI detection, so that logs are sent to stdout instead of stderr",
      "Disable CI detection",
      { isPersistent: true }
    ),
    {
      name: "--unstable",
      description:
        "Opt in to unstable features, whose scope and API might still change",
      isPersistent: true,
      isRepeatable: true,
      args: {
        name: "feature",
        suggestions: unstableFeatures,
      },
    },
    {
      name: "--telemetry-file",
      description: "Send telemetry data to a local file",
      isPersistent: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["--yes", "-y"],
      description:
        "Automatically answer interactive prompts with the recommended response, including confirming actions",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
