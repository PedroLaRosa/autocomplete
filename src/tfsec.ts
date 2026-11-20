// tfsec v1.28.14 (GitHub release aquasecurity/tfsec, 2026-11-19). Source: internal/app/tfsec/cmd/flags.go, root.go and output.go at tag v1.28.14 (2025-05-02).
// Upstream is in maintenance mode: scanning has moved to Trivy and v1.28.14 is the latest release.
const workspaceGenerator: Fig.Generator = {
  script: ["terraform", "workspace", "list"],
  postProcess: function (out) {
    return out.split("\n").map((workspace) => ({
      name: workspace.replace("*", "").trim(),
      description: "Terraform workspaces",
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "tfsec",
  description:
    "Tfsec is a simple tool to detect potential security vulnerabilities in your terraformed infrastructure",
  options: [
    {
      name: ["-p", "--allow-checks-to-panic"],
      description: "Allow panics to propagate up from rule checking",
      hidden: true,
    },
    {
      name: "--concise-output",
      description: "Reduce the amount of output and no statistics",
    },
    {
      name: "--code-theme",
      description: "Theme for annotated code",
      args: {
        name: "code-theme",
        default: "dark",
        suggestions: ["light", "dark"],
      },
    },
    {
      name: "--config-file",
      description: "Config file to use during run",
      args: {
        name: "config-file",
        template: "filepaths",
      },
    },
    {
      name: "--config-file-url",
      description:
        "Config file to download from a remote location. Must be json or yaml",
      args: {
        name: "config-file-url",
      },
    },
    {
      name: "--custom-check-dir",
      description: "Explicitly set the custom checks dir location",
      args: {
        name: "custom-check-dir",
      },
    },
    {
      name: "--custom-check-url",
      description:
        "Download a custom check file from a remote location. Must be json or yaml",
      args: {
        name: "custom-check-url",
      },
    },
    {
      name: "--debug",
      description: "Enable debug logging (same as verbose)",
    },
    {
      name: ["-G", "--disable-grouping"],
      description: "Disable grouping of similar results",
    },
    {
      name: ["-e", "--exclude"],
      description:
        "Provide comma-separated list of rule IDs to exclude from run",
      args: {
        name: "excludeList",
      },
    },
    {
      name: ["-E", "--exclude-ignores"],
      description:
        "Provide comma-separated list of ignored rule to exclude from run",
      args: {
        name: "excludeIgnores",
      },
    },
    {
      name: "--exclude-downloaded-modules",
      description: "Remove results for downloaded modules in .terraform folder",
    },
    {
      name: "--exclude-path",
      description:
        "Folder path to exclude, can be used multiple times and evaluated in order of specification",
      isRepeatable: true,
      args: {
        name: "excludePath",
        template: "filepaths",
      },
    },
    {
      name: "--filter-results",
      description:
        "Filter results to return specific checks only (supports comma-delimited input)",
      args: {
        name: "filterResults",
      },
    },
    {
      name: "--force-all-dirs",
      description:
        "Don't search for tf files, include everything below provided directory",
    },
    {
      name: ["-f", "--format"],
      description:
        "Select output format: lovely, json, csv, checkstyle, junit, sarif, text, markdown, html, gif. To use multiple formats, separate with a comma and specify a base output filename with --out. A file will be written for each type. The first format will additionally be written stdout",
      args: {
        name: "format",
        default: "lovely",
        suggestions: [
          "lovely",
          "default",
          "json",
          "csv",
          "checkstyle",
          "junit",
          "sarif",
          "text",
          "markdown",
          "html",
          "gif",
        ],
      },
    },
    {
      name: ["-h", "--help"],
      description: "Help for tfsec",
    },
    {
      name: "--ignore-hcl-errors",
      description:
        "Do not report an error if an HCL parse error is encountered",
    },
    {
      name: "--include-ignored",
      description: "Include ignored checks in the result output",
    },
    {
      name: "--include-passed",
      description: "Include passed checks in the result output",
    },
    {
      name: "--migrate-ignores",
      description: "Migrate ignore codes to the new ID structure",
    },
    {
      name: ["-m", "--minimum-severity"],
      description:
        "The minimum severity to report. One of CRITICAL, HIGH, MEDIUM, LOW",
      args: {
        name: "minimumSeverity",
        suggestions: ["CRITICAL", "HIGH", "MEDIUM", "LOW"],
      },
    },
    {
      name: "--no-code",
      description: "Don't include the code snippets in the output",
    },
    {
      name: "--no-color",
      description: "Disable colored output (American style!)",
    },
    {
      name: "--no-colour",
      description: "Disable coloured output",
    },
    {
      name: "--no-ignores",
      description:
        "Do not apply any ignore rules - normally ignored checks will fail",
    },
    {
      name: "--no-module-downloads",
      description: "Do not download remote modules",
    },
    {
      name: ["-O", "--out"],
      description:
        "Set output file. This filename will have a format descriptor appended if multiple formats are specified with --format",
      args: {
        name: "outputFile",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
    {
      name: "--print-rego-input",
      description:
        "Print a JSON representation of the input supplied to rego policies",
    },
    {
      name: "--rego-policy-dir",
      description: "Directory to load rego policies from (recursively)",
      args: {
        name: "regoPolicyDir",
      },
    },
    {
      name: "--rego-only",
      description: "Run rego policies exclusively",
    },
    {
      name: "--run-statistics",
      description: "View statistics table of current findings",
    },
    {
      name: "--single-thread",
      description: "Run checks using a single thread",
    },
    {
      name: ["-s", "--soft-fail"],
      description: "Runs checks but suppresses error code",
    },
    {
      name: "--tfvars-file",
      description:
        "Path to .tfvars file, can be used multiple times and evaluated in order of specification",
      isRepeatable: true,
      args: {
        name: "tfvarsFilePath",
        template: "filepaths",
      },
    },
    {
      name: "--update",
      description: "Update to latest version",
    },
    {
      name: "--var-file",
      description:
        "Path to .tfvars file, can be used multiple times and evaluated in order of specification (same functionality as --tfvars-file but consistent with Terraform)",
      isRepeatable: true,
      args: {
        name: "tfvarsFilePath",
        template: "filepaths",
      },
    },
    {
      name: "--verbose",
      description: "Enable verbose logging (same as debug)",
    },
    {
      name: ["-v", "--version"],
      description: "Show version information and exit",
    },
    {
      name: ["-w", "--workspace"],
      description: 'Specify a workspace for ignore limits (default "default")',
      args: {
        name: "workspace",
        generators: workspaceGenerator,
      },
    },
  ],
  args: {
    name: "directory",
    template: "folders",
  },
};
export default completionSpec;
