// Checkov v3.4.6 (PyPI latest, 2026-11-20). Source: checkov/common/util/ext_argument_parser.py, OUTPUT_CHOICES in runner_registry.py and checkov_runners in check_type.py at tag 3.4.6, read statically (not run)
const branches: Fig.Generator = {
  script: ["git", "branch", "--no-color"],
  postProcess: (output) => {
    if (output.startsWith("fatal:")) {
      return [];
    }
    return output.split("\n").map((branch) => {
      return { name: branch.replace("*", "").trim(), description: "Branch" };
    });
  },
};

const frameworks = [
  "ansible",
  "argo_workflows",
  "arm",
  "azure_pipelines",
  "bicep",
  "bitbucket_pipelines",
  "cdk",
  "circleci_pipelines",
  "cloudformation",
  "dockerfile",
  "github_configuration",
  "github_actions",
  "gitlab_configuration",
  "gitlab_ci",
  "bitbucket_configuration",
  "helm",
  "json",
  "yaml",
  "kubernetes",
  "kustomize",
  "openapi",
  "sca_package",
  "sca_image",
  "secrets",
  "serverless",
  "terraform",
  "terraform_json",
  "terraform_plan",
  "sast",
  "sast_python",
  "sast_java",
  "sast_javascript",
  "sast_typescript",
  "sast_golang",
  "3d_policy",
];

const severities = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];

const boolSuggestions = ["true", "false"];

const checkIdsArgs = (name: string): Fig.Arg => ({
  name,
  suggestions: severities,
});

const completionSpec: Fig.Spec = {
  name: "checkov",
  description:
    "Checkov scans cloud infrastructure configurations to find misconfigurations before they're deployed",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for checkov",
    },
    {
      name: ["--version", "-v"],
      description: "Show the version of checkov",
    },
    {
      name: "--support",
      description:
        "Enable debug logs and upload the logs to the server. Requires a Bridgecrew or Prisma Cloud API key",
      dependsOn: ["--bc-api-key"],
    },
    {
      name: ["--directory", "-d"],
      description: "IaC root directory (can not be used together with --file)",
      exclusiveOn: ["--file"],
      isRepeatable: true,
      args: {
        name: "Directory",
        template: "folders",
      },
    },
    {
      name: "--add-check",
      description: "Generate a new check via CLI prompt",
    },
    {
      name: ["--file", "-f"],
      description:
        "File to scan (can not be used together with --directory). Checkov filters the runners based on the file type, which you can further limit with --skip-framework",
      exclusiveOn: ["--directory"],
      isRepeatable: true,
      args: {
        name: "FILE",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "--skip-path",
      description:
        "Path (file or directory) to skip, using regular expression logic, relative to current working directory. Word boundaries are not implicit; i.e., specifying 'dir1' will skip any directory or subdirectory named 'dir1'. Ignored with -f. Can be specified multiple times",
      isRepeatable: true,
      args: {
        name: "SKIP_PATH",
        template: "filepaths",
      },
    },
    {
      name: "--external-checks-dir",
      description:
        "Directory for custom checks to be loaded. Can be repeated. This runs Python code from the directory, so only use trusted directories",
      isRepeatable: true,
      args: {
        name: "EXTERNAL_CHECKS_DIR",
        template: "folders",
      },
    },
    {
      name: "--external-checks-git",
      description:
        "GitHub URL of external checks to be added. You can specify a subdirectory after a double-slash // and a ref with ?ref=tags/tagName, ?ref=heads/branchName or ?ref=commit_id. Cannot be used together with --external-checks-dir",
      exclusiveOn: ["--external-checks-dir"],
      isRepeatable: true,
      args: {
        name: "EXTERNAL_CHECKS_GIT",
      },
    },
    {
      name: "--external-checks-public-key",
      description:
        "Path to a PEM-encoded ECDSA P-256 public key used to verify every .py file loaded from external checks. Can be specified multiple times to rotate keys. You may also use the environment variable: CKV_EXTERNAL_CHECKS_PUBLIC_KEY",
      isRepeatable: true,
      args: {
        name: "PUBLIC_KEY",
        template: "filepaths",
      },
    },
    {
      name: ["--list", "-l"],
      description: "List checks",
    },
    {
      name: ["--output", "-o"],
      description:
        "Report output format. Add multiple outputs by using the flag multiple times (-o sarif -o cli)",
      isRepeatable: true,
      args: {
        name: "FORMAT",
        suggestions: [
          "cli",
          "csv",
          "cyclonedx",
          "cyclonedx_json",
          "json",
          "junitxml",
          "github_failed_only",
          "gitlab_sast",
          "sarif",
          "spdx",
        ],
      },
    },
    {
      name: "--output-file-path",
      description:
        "Name of the output folder to save the chosen output formats. Use -o cli -o junitxml --output-file-path console,results.xml to print the CLI output to the console and the JUnit XML output to results.xml",
      args: {
        name: "OUTPUT_FILE_PATH",
      },
    },
    {
      name: "--output-bc-ids",
      description:
        "Print Bridgecrew platform IDs (BC...) instead of Checkov IDs (CKV...), if the check exists in the platform",
    },
    {
      name: "--include-all-checkov-policies",
      description:
        "When running with an API key, include policies that only exist in Checkov and not in the Prisma Cloud platform. Has no effect without an API key",
    },
    {
      name: "--quiet",
      description:
        "In case of CLI output, display only failed checks. Also disables progress bars",
    },
    {
      name: "--compact",
      description: "In case of CLI output, do not display code blocks",
    },
    {
      name: "--framework",
      description:
        "Filter scan to run only on specific infrastructure as code frameworks. Defaults to all frameworks. Enter as a comma-separated list or repeat the flag. You may also use the environment variable: CKV_FRAMEWORK",
      isRepeatable: true,
      args: {
        name: "FRAMEWORKS",
        isVariadic: true,
        suggestions: ["all", ...frameworks],
      },
    },
    {
      name: "--skip-framework",
      description:
        "Filter scan to skip specific infrastructure as code frameworks. Enter as a comma-separated list or repeat the flag. Cannot include values that are also included in --framework",
      isRepeatable: true,
      args: {
        name: "FRAMEWORKS",
        isVariadic: true,
        suggestions: frameworks,
      },
    },
    {
      name: ["--check", "-c"],
      description:
        "Checks to run; any other checks will be skipped. Enter one or more items separated by commas, each a Checkov check ID (CKV_AWS_123), a BC check ID (BC_AWS_GENERAL_123), or a severity. You may also use the environment variable: CKV_CHECK",
      isRepeatable: true,
      args: checkIdsArgs("CHECKS"),
    },
    {
      name: "--skip-check",
      description:
        "Checks to skip; any other checks will be run. Enter one or more items separated by commas, each a Checkov check ID (CKV_AWS_123), a BC check ID (BC_AWS_GENERAL_123), or a severity. You may also use the environment variable: CKV_SKIP_CHECK",
      isRepeatable: true,
      args: checkIdsArgs("CHECKS"),
    },
    {
      name: "--run-all-external-checks",
      description:
        "Run all external checks (loaded via --external-checks options) even if the checks are not present in the --check list. This allows you to always ensure that new checks present in the external source are used. If an external check is included in --skip-check, it will still be skipped",
    },
    {
      name: ["--soft-fail", "-s"],
      description:
        "Runs checks but always returns a 0 exit code. --soft-fail-on and --hard-fail-on override this option when they match a result",
    },
    {
      name: "--soft-fail-on",
      description:
        "Exits with a 0 exit code if only the specified items fail. Enter one or more items separated by commas, each a check ID or a severity",
      isRepeatable: true,
      args: checkIdsArgs("CHECKS"),
    },
    {
      name: "--hard-fail-on",
      description:
        "Exits with a non-zero exit code for specified checks. Enter one or more items separated by commas, each a check ID or a severity",
      isRepeatable: true,
      args: checkIdsArgs("CHECKS"),
    },
    {
      name: "--bc-api-key",
      description:
        "Bridgecrew API key or Prisma Cloud Access Key (see --prisma-api-url). You may also use the environment variable: BC_API_KEY",
      args: {
        name: "BC_API_KEY",
      },
    },
    {
      name: "--prisma-api-url",
      description:
        "The Prisma Cloud API URL. Requires --bc-api-key to be a Prisma Cloud Access Key in the format <access_key_id>::<secret_key>. You may also use the environment variable: PRISMA_API_URL",
      args: {
        name: "PRISMA_API_URL",
      },
    },
    {
      name: "--skip-results-upload",
      description:
        "Do not upload scan results to the platform to view in the console. Results are only available locally",
    },
    {
      name: ["--docker-image", "--image"],
      description:
        "Scan docker images by name or ID. Only works with --bc-api-key flag",
      dependsOn: ["--bc-api-key"],
      args: {
        name: "DOCKER_IMAGE",
      },
    },
    {
      name: "--dockerfile-path",
      description: "Path to the Dockerfile of the scanned docker image",
      args: {
        name: "DOCKERFILE_PATH",
        template: "filepaths",
      },
    },
    {
      name: "--repo-id",
      description:
        "Identity string of the repository, with form <repo_owner>/<repo_name>. Required when using the platform integration (API key)",
      args: {
        name: "REPO_ID",
      },
    },
    {
      name: ["--branch", "-b"],
      description:
        "Selected branch of the persisted repository. Only has effect when using the --bc-api-key flag",
      args: {
        name: "BRANCH",
        default: "master",
        generators: branches,
      },
    },
    {
      name: "--skip-download",
      description:
        "Do not download any data from Prisma Cloud. This omits doc links, severities, custom policies and suppressions, and prevents BC platform IDs from being available",
    },
    {
      name: "--use-enforcement-rules",
      description:
        "Use the Enforcement rules configured in the platform for hard / soft fail logic. Requires a BC or PC platform API key",
      dependsOn: ["--bc-api-key"],
    },
    {
      name: "--download-external-modules",
      description:
        "Download external terraform modules from public git repositories and terraform registry. You may also use the environment variable: DOWNLOAD_EXTERNAL_MODULES",
      args: {
        name: "DOWNLOAD_EXTERNAL_MODULES",
        suggestions: boolSuggestions,
      },
    },
    {
      name: "--var-file",
      description:
        "Variable files to load in addition to the default files (see https://www.terraform.io/docs/language/values/variables.html#variable-definitions-tfvars-files). Currently only supported for source Terraform (.tf file), and Helm chart scans. Requires using --directory, not --file. You may also use the environment variable: CKV_VAR_FILE",
      dependsOn: ["--directory"],
      exclusiveOn: ["--file"],
      isRepeatable: true,
      args: {
        name: "VAR_FILE",
        template: "filepaths",
      },
    },
    {
      name: "--external-modules-download-path",
      description:
        "Set the path for the download external terraform modules. You may also use the environment variable: EXTERNAL_MODULES_DIR",
      args: {
        name: "EXTERNAL_MODULES_DIR",
        template: "folders",
      },
    },
    {
      name: "--evaluate-variables",
      description:
        "Evaluate the values of variables and locals. You may also use the environment variable: CKV_EVAL_VARS",
      args: {
        name: "EVALUATE_VARIABLES",
        default: "true",
        suggestions: boolSuggestions,
      },
    },
    {
      name: ["--ca-certificate", "-ca"],
      description:
        "Custom CA certificate (bundle) file. You may also use the environment variable: BC_CA_BUNDLE",
      args: {
        name: "CA_CERTIFICATE",
        template: "filepaths",
      },
    },
    {
      name: "--no-cert-verify",
      description:
        "Skip SSL certificate verification. Dangerous: invalid and falsified certificates cannot be detected, only use for testing",
    },
    {
      name: "--repo-root-for-plan-enrichment",
      description:
        "Directory containing the hcl code used to generate a given plan file. Use with -f",
      dependsOn: ["--file"],
      isRepeatable: true,
      args: {
        name: "REPO_ROOT_FOR_PLAN_ENRICHMENT",
        template: "folders",
      },
    },
    {
      name: "--config-file",
      description: "Path to the Checkov configuration YAML file",
      args: {
        name: "CONFIG_FILE",
        template: "filepaths",
      },
    },
    {
      name: "--create-config",
      description:
        "Takes the current command line args and writes them out to a config file at the given path",
      args: {
        name: "CONFIG_FILE",
        template: "filepaths",
      },
    },
    {
      name: "--show-config",
      description:
        "Prints all args and config settings and where they came from (eg. commandline, config file, environment variable or default)",
    },
    {
      name: "--create-baseline",
      description:
        "Alongside outputting the findings, save all results to a '.checkov.baseline' file so future runs will not re-flag the same noise. Works only with `--directory` flag",
      dependsOn: ["--directory"],
    },
    {
      name: "--baseline",
      description:
        "Use a '.checkov.baseline' file to compare current results with a known baseline. Report will include only failed checks that are new with respect to the provided baseline. See --create-baseline",
      args: {
        name: "BASELINE",
        template: "filepaths",
      },
    },
    {
      name: "--output-baseline-as-skipped",
      description:
        "Output checks that are skipped due to baseline file presence",
    },
    {
      name: "--skip-cve-package",
      description:
        "Filter scan to run on all packages but a specific package identifier (denylist). Can be specified multiple times to skip multiple packages",
      isRepeatable: true,
      args: {
        name: "SKIP_CVE_PACKAGE",
      },
    },
    {
      name: "--policy-metadata-filter",
      description:
        "Comma separated key:value string to filter policies based on Prisma Cloud policy metadata, e.g. policy.label=label1,cloud.type=aws. You may also use the environment variable: CKV_POLICY_METADATA_FILTER",
      args: {
        name: "POLICY_METADATA_FILTER",
      },
    },
    {
      name: "--policy-metadata-filter-exception",
      description:
        "Comma separated key:value string to exclude filtered policies based on Prisma Cloud policy metadata. Exceptions override any policies selected by --policy-metadata-filter. You may also use the environment variable: CKV_POLICY_METADATA_FILTER_EXCEPTION",
      args: {
        name: "POLICY_METADATA_FILTER_EXCEPTION",
      },
    },
    {
      name: "--secrets-scan-file-type",
      description: "Not in use",
      deprecated: true,
      isRepeatable: true,
      args: {
        name: "FILE_TYPE",
      },
    },
    {
      name: "--enable-secret-scan-all-files",
      description: "Enable secret scan for all files",
    },
    {
      name: "--block-list-secret-scan",
      description: "List of files to filter out from the secret scanner",
      isRepeatable: true,
      args: {
        name: "BLOCK_LIST_SECRET_SCAN",
        template: "filepaths",
      },
    },
    {
      name: "--summary-position",
      description:
        "Choose whether the summary will be appended on top (before the checks results) or on bottom (after check results)",
      args: {
        name: "SUMMARY_POSITION",
        default: "top",
        suggestions: ["top", "bottom"],
      },
    },
    {
      name: "--skip-resources-without-violations",
      description:
        "Exclude extra resources (resources without violations) from report output",
    },
    {
      name: "--deep-analysis",
      description:
        "Combine the TF Plan and TF graphs to make connections not available in either",
    },
    {
      name: "--no-fail-on-crash",
      description:
        "Return exit code 0 instead of 2. You may also use the environment variable: CKV_NO_FAIL_ON_CRASH",
    },
    {
      name: "--mask",
      description:
        "Mask the desired attribute for a resource type (<resource_type>:<variable>) or for all resources (<variable>). One entry can contain several variables separated with a comma. Can be specified multiple times",
      isRepeatable: true,
      args: {
        name: "MASK",
      },
    },
    {
      name: "--scan-secrets-history",
      description: "Scan the history of commits for secrets",
    },
    {
      name: "--secrets-history-timeout",
      description: "Maximum time to stop the scan",
      args: {
        name: "SECRETS_HISTORY_TIMEOUT",
        default: "12h",
      },
    },
    {
      name: "--custom-tool-name",
      description:
        "Add a tool name to tag your output with, useful when integrating with other tools such as uploading SARIF files to GitHub code scanning",
      args: {
        name: "CUSTOM_TOOL_NAME",
        default: "Checkov",
      },
    },
  ],
};
export default completionSpec;
