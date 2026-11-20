// Trivy v0.76.2 (latest stable tag of aquasecurity/trivy via git ls-remote, released 2026-11-05, 2026-11-20).
// Source: cobra-generated CLI reference docs and flag/command definitions in the v0.76.2 source tree
// (docs/guide/references/configuration/cli/*.md, pkg/commands/app.go, pkg/flag/*.go), read statically; the
// binary was not executed. Flags removed upstream (--reset, --clear-cache, --reset-checks-bundle) are dropped,
// deprecated aliases that are still accepted (--skip-update, --vuln-type, --policy-bundle-repository, --light)
// are kept as deprecated. The hidden, deprecated `client` command is kept with only the flag verified from
// source (--remote); `completion` and `help` are cobra built-ins.

const commaSeparated = (values: string[]): Fig.Generator => ({
  getQueryTerm: ",",
  trigger: ",",
  custom: async (tokens) => {
    const currentToken = tokens[tokens.length - 1];
    return values
      .filter((value) => !currentToken.split(",").includes(value))
      .map((value) => ({ name: value }));
  },
});

const installedPlugins: Fig.Generator = {
  script: ["trivy", "plugin", "list"],
  postProcess: (output) =>
    output
      .split("\n")
      .map((line) => /^\s*Name:\s+(\S+)/.exec(line)?.[1])
      .filter((name): name is string => !!name)
      .map((name) => ({ name, icon: "fig://icon?type=package" })),
};

const flags = {
  all: { name: ["--all", "-a"], description: "Remove all caches" },
  "ansible-extra-vars": {
    name: "--ansible-extra-vars",
    description: "Set additional variables as key=value or @file (YAML/JSON)",
    isRepeatable: true,
    args: { name: "ansible-extra-vars" },
  },
  "ansible-inventory": {
    name: "--ansible-inventory",
    description: "Specify inventory host path or a comma-separated host list",
    isRepeatable: true,
    args: { name: "ansible-inventory", template: "filepaths" },
  },
  "ansible-playbook": {
    name: "--ansible-playbook",
    description: "Specify playbook file path(s) to scan",
    isRepeatable: true,
    args: { name: "ansible-playbook", template: "filepaths" },
  },
  "aws-region": {
    name: "--aws-region",
    description: "AWS region to scan",
    args: { name: "aws-region" },
  },
  branch: {
    name: "--branch",
    description: "Pass the branch name to be scanned",
    args: { name: "branch" },
  },
  burst: {
    name: "--burst",
    description: "Specify the maximum burst for throttle",
    args: { name: "burst", default: "10" },
  },
  "cache-backend": {
    name: "--cache-backend",
    description: "[EXPERIMENTAL] Cache backend (e.g. redis://localhost:6379)",
    args: { name: "cache-backend", default: "fs" },
  },
  "cache-backend-memory": {
    name: "--cache-backend",
    description: "[EXPERIMENTAL] Cache backend (e.g. redis://localhost:6379)",
    args: { name: "cache-backend", default: "memory" },
  },
  "cache-ttl": {
    name: "--cache-ttl",
    description: "Cache TTL when using Redis as cache backend",
    args: { name: "cache-ttl" },
  },
  "cf-params": {
    name: "--cf-params",
    description:
      "Specify paths to override the CloudFormation parameters files",
    isRepeatable: true,
    args: { name: "cf-params", template: "filepaths" },
  },
  "check-namespaces": {
    name: "--check-namespaces",
    description: "Rego namespaces",
    isRepeatable: true,
    args: { name: "check-namespaces" },
  },
  "checks-bundle": {
    name: "--checks-bundle",
    description: "Remove checks bundle",
  },
  "checks-bundle-repository": {
    name: "--checks-bundle-repository",
    description: "OCI registry URL to retrieve checks bundle from",
    args: {
      name: "checks-bundle-repository",
      default: "mirror.gcr.io/aquasec/trivy-checks:2",
    },
  },
  commit: {
    name: "--commit",
    description: "Pass the commit hash to be scanned",
    args: { name: "commit" },
  },
  compliance: {
    name: "--compliance",
    description: "Compliance report to generate",
    args: { name: "compliance" },
  },
  "compliance-image": {
    name: "--compliance",
    description: "Compliance report to generate",
    args: { name: "compliance", suggestions: ["docker-cis-1.6.0"] },
  },
  "compliance-kubernetes": {
    name: "--compliance",
    description: "Compliance report to generate",
    args: {
      name: "compliance",
      suggestions: [
        "k8s-nsa-1.0",
        "k8s-cis-1.23",
        "eks-cis-1.4",
        "rke2-cis-1.24",
        "k8s-pss-baseline-0.1",
        "k8s-pss-restricted-0.1",
      ],
    },
  },
  "config-check": {
    name: "--config-check",
    description:
      "Specify the paths to the Rego check files or to the directories containing them, applying config files",
    isRepeatable: true,
    args: { name: "config-check", template: "filepaths" },
  },
  "config-data": {
    name: "--config-data",
    description:
      "Specify paths from which data for the Rego checks will be recursively loaded",
    isRepeatable: true,
    args: { name: "config-data", template: "filepaths" },
  },
  "config-file-schemas": {
    name: "--config-file-schemas",
    description:
      "Specify paths to JSON configuration file schemas to determine that a file matches some configuration and pass the schema to Rego checks for type checking",
    isRepeatable: true,
    args: { name: "config-file-schemas", template: "filepaths" },
  },
  "custom-headers": {
    name: "--custom-headers",
    description: "Custom headers in client mode",
    isRepeatable: true,
    args: { name: "custom-headers" },
  },
  "db-repository": {
    name: "--db-repository",
    description:
      "OCI repository(ies) to retrieve trivy-db in order of priority",
    isRepeatable: true,
    args: {
      name: "db-repository",
      default:
        "mirror.gcr.io/aquasec/trivy-db:2,ghcr.io/aquasecurity/trivy-db:2",
    },
  },
  "dependency-tree": {
    name: "--dependency-tree",
    description:
      "[EXPERIMENTAL] Show dependency origin tree of vulnerable packages",
  },
  "detection-priority": {
    name: "--detection-priority",
    description: "Specify the detection priority",
    args: {
      name: "detection-priority",
      suggestions: [
        {
          name: "precise",
          description: "Prioritize precision by minimizing false positives",
        },
        {
          name: "comprehensive",
          description:
            "Detect more security findings at the cost of potential false positives",
        },
      ],
      default: "precise",
    },
  },
  "disable-node-collector": {
    name: "--disable-node-collector",
    description:
      "When the flag is activated, the node-collector job will not be executed, thus skipping misconfiguration findings on the node",
  },
  "disable-telemetry": {
    name: "--disable-telemetry",
    description: "Disable sending anonymous usage data to Aqua",
  },
  distro: {
    name: "--distro",
    description: "[EXPERIMENTAL] Specify a distribution, <family>/<version>",
    args: { name: "distro" },
  },
  "docker-host": {
    name: "--docker-host",
    description: "Unix domain socket path to use for docker scanning",
    args: { name: "docker-host", template: "filepaths" },
  },
  "download-db-only": {
    name: "--download-db-only",
    description: "Download/update vulnerability database but don't run a scan",
  },
  "download-java-db-only": {
    name: "--download-java-db-only",
    description: "Download/update Java index database but don't run a scan",
  },
  "enable-modules": {
    name: "--enable-modules",
    description: "[EXPERIMENTAL] Module names to enable",
    isRepeatable: true,
    args: { name: "enable-modules" },
  },
  "exclude-kinds": {
    name: "--exclude-kinds",
    description: "Indicate the kinds excluded from scanning (example: node)",
    isRepeatable: true,
    args: { name: "exclude-kinds" },
  },
  "exclude-namespaces": {
    name: "--exclude-namespaces",
    description:
      "Indicate the namespaces excluded from scanning (example: kube-system)",
    isRepeatable: true,
    args: { name: "exclude-namespaces" },
  },
  "exclude-nodes": {
    name: "--exclude-nodes",
    description:
      "Indicate the node labels that the node-collector job should exclude from scanning (example: kubernetes.io/arch:arm64,team:dev)",
    isRepeatable: true,
    args: { name: "exclude-nodes" },
  },
  "exclude-owned": {
    name: "--exclude-owned",
    description: "Exclude resources that have an owner reference",
  },
  "exit-code": {
    name: "--exit-code",
    description: "Specify exit code when any security issues are found",
    args: { name: "exit-code" },
  },
  "exit-on-eol": {
    name: "--exit-on-eol",
    description:
      "Exit with the specified code when the OS reaches end of service/life",
    args: { name: "exit-on-eol" },
  },
  "file-patterns": {
    name: "--file-patterns",
    description: "Specify config file patterns",
    isRepeatable: true,
    args: { name: "file-patterns" },
  },
  format: {
    name: ["--format", "-f"],
    description: "Format",
    args: {
      name: "format",
      suggestions: [
        "table",
        "json",
        "template",
        "sarif",
        "cyclonedx",
        "spdx",
        "spdx-json",
        "github",
        "cosign-vuln",
      ],
      default: "table",
    },
  },
  "format-kubernetes": {
    name: ["--format", "-f"],
    description: "Format",
    args: {
      name: "format",
      suggestions: ["table", "json", "cyclonedx"],
      default: "table",
    },
  },
  "format-version": {
    name: ["--format", "-f"],
    description: "Version format (json)",
    args: { name: "format" },
  },
  "helm-api-versions": {
    name: "--helm-api-versions",
    description:
      "Available API versions used for Capabilities.APIVersions. This flag is the same as the api-versions flag of the helm template command. (can specify multiple or separate values with commas: policy/v1/PodDisruptionBudget,apps/v1/Deployment)",
    isRepeatable: true,
    args: { name: "helm-api-versions" },
  },
  "helm-kube-version": {
    name: "--helm-kube-version",
    description:
      "Kubernetes version used for Capabilities.KubeVersion. This flag is the same as the kube-version flag of the helm template command",
    args: { name: "helm-kube-version" },
  },
  "helm-set": {
    name: "--helm-set",
    description:
      "Specify Helm values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
    isRepeatable: true,
    args: { name: "helm-set" },
  },
  "helm-set-file": {
    name: "--helm-set-file",
    description:
      "Specify Helm values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)",
    isRepeatable: true,
    args: { name: "helm-set-file" },
  },
  "helm-set-string": {
    name: "--helm-set-string",
    description:
      "Specify Helm string values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
    isRepeatable: true,
    args: { name: "helm-set-string" },
  },
  "helm-values": {
    name: "--helm-values",
    description: "Specify paths to override the Helm values.yaml files",
    isRepeatable: true,
    args: { name: "helm-values", template: "filepaths" },
  },
  "ignore-policy": {
    name: "--ignore-policy",
    description: "Specify the Rego file path to evaluate each vulnerability",
    args: { name: "ignore-policy", template: "filepaths" },
  },
  "ignore-status": {
    name: "--ignore-status",
    description: "Comma-separated list of vulnerability statuses to ignore",
    isRepeatable: true,
    args: {
      name: "ignore-status",
      generators: commaSeparated([
        "unknown",
        "not_affected",
        "affected",
        "fixed",
        "under_investigation",
        "will_not_fix",
        "fix_deferred",
        "end_of_life",
      ]),
    },
  },
  "ignore-unfixed": {
    name: "--ignore-unfixed",
    description: "Display only fixed vulnerabilities",
  },
  "ignored-licenses": {
    name: "--ignored-licenses",
    description: "Specify a list of licenses to ignore",
    isRepeatable: true,
    args: { name: "ignored-licenses" },
  },
  ignorefile: {
    name: "--ignorefile",
    description: "Specify .trivyignore file (empty string disables loading)",
    args: {
      name: "ignorefile",
      template: "filepaths",
      default: ".trivyignore",
    },
  },
  "image-config-scanners": {
    name: "--image-config-scanners",
    description:
      "Comma-separated list of what security issues to detect on container image configurations",
    isRepeatable: true,
    args: {
      name: "image-config-scanners",
      generators: commaSeparated(["misconfig", "secret"]),
    },
  },
  "image-src": {
    name: "--image-src",
    description: "Image source(s) to use, in priority order",
    isRepeatable: true,
    args: {
      name: "image-src",
      generators: commaSeparated(["docker", "containerd", "podman", "remote"]),
      default: "docker,containerd,podman,remote",
    },
  },
  "include-deprecated-checks": {
    name: "--include-deprecated-checks",
    description: "Include deprecated checks",
  },
  "include-dev-deps": {
    name: "--include-dev-deps",
    description:
      "Include development dependencies in the report (supported: npm, yarn, gradle)",
  },
  "include-kinds": {
    name: "--include-kinds",
    description: "Indicate the kinds included in scanning (example: node)",
    isRepeatable: true,
    args: { name: "include-kinds" },
  },
  "include-namespaces": {
    name: "--include-namespaces",
    description:
      "Indicate the namespaces included in scanning (example: kube-system)",
    isRepeatable: true,
    args: { name: "include-namespaces" },
  },
  "include-non-failures": {
    name: "--include-non-failures",
    description: "Include successes, available with '--scanners misconfig'",
  },
  input: {
    name: "--input",
    description: "Input file path instead of image name",
    args: { name: "input", template: "filepaths" },
  },
  "java-db": { name: "--java-db", description: "Remove Java database" },
  "java-db-repository": {
    name: "--java-db-repository",
    description:
      "OCI repository(ies) to retrieve trivy-java-db in order of priority",
    isRepeatable: true,
    args: {
      name: "java-db-repository",
      default:
        "mirror.gcr.io/aquasec/trivy-java-db:1,ghcr.io/aquasecurity/trivy-java-db:1",
    },
  },
  "k8s-version": {
    name: "--k8s-version",
    description:
      "Specify k8s version to validate outdated APIs against (example: 1.21.0)",
    args: { name: "k8s-version" },
  },
  kubeconfig: {
    name: "--kubeconfig",
    description: "Specify the kubeconfig file path to use",
    args: { name: "kubeconfig", template: "filepaths" },
  },
  "license-confidence-level": {
    name: "--license-confidence-level",
    description: "Specify license classifier's confidence level",
    args: { name: "license-confidence-level", default: "0.9" },
  },
  "license-full": {
    name: "--license-full",
    description:
      "Eagerly look for licenses in source code headers and license files",
  },
  light: {
    name: "--light",
    description: "Deprecated, this flag is ignored",
    deprecated: true,
  },
  "list-all-pkgs": {
    name: "--list-all-pkgs",
    description:
      "Output all packages in the JSON report regardless of vulnerability (default true)",
  },
  listen: {
    name: "--listen",
    description: "Listen address in server mode",
    args: { name: "listen", default: "localhost:4954" },
  },
  "max-image-size": {
    name: "--max-image-size",
    description:
      "[EXPERIMENTAL] Maximum image size to process, specified in a human-readable format (e.g., '44kB', '17MB'); an error will be returned if the image exceeds this size",
    args: { name: "max-image-size" },
  },
  "misconfig-scanners": {
    name: "--misconfig-scanners",
    description:
      "Comma-separated list of misconfig scanners to use for misconfiguration scanning",
    isRepeatable: true,
    args: {
      name: "misconfig-scanners",
      default:
        "azure-arm,cloudformation,dockerfile,helm,kubernetes,terraform,terraformplan-json,terraformplan-snapshot,ansible",
    },
  },
  "module-dir": {
    name: "--module-dir",
    description: "Specify the directory of the WASM modules to load",
    args: { name: "module-dir", template: "folders" },
  },
  "no-progress": {
    name: "--no-progress",
    description: "Suppress progress bar",
  },
  "node-collector-imageref": {
    name: "--node-collector-imageref",
    description: "Indicate the image reference for the node-collector scan job",
    args: {
      name: "node-collector-imageref",
      default: "ghcr.io/aquasecurity/node-collector:0.3.1",
    },
  },
  "node-collector-namespace": {
    name: "--node-collector-namespace",
    description:
      "Specify the namespace in which the node-collector job should be deployed",
    args: { name: "node-collector-namespace", default: "trivy-temp" },
  },
  "offline-scan": {
    name: "--offline-scan",
    description: "Do not issue API requests to identify dependencies",
  },
  output: {
    name: ["--output", "-o"],
    description: "Output file name",
    args: { name: "output", template: "filepaths" },
  },
  "output-plugin-arg": {
    name: "--output-plugin-arg",
    description: "[EXPERIMENTAL] Output plugin arguments",
    args: { name: "output-plugin-arg" },
  },
  parallel: {
    name: "--parallel",
    description:
      "Number of goroutines enabled for parallel scanning, set 0 to auto-detect parallelism",
    args: { name: "parallel", default: "5" },
  },
  password: {
    name: "--password",
    description:
      "Password. Comma-separated passwords allowed. TRIVY_PASSWORD should be used for security reasons",
    isRepeatable: true,
    args: { name: "password" },
  },
  "password-stdin": {
    name: "--password-stdin",
    description:
      "Password from stdin. Comma-separated passwords are not supported",
  },
  "pkg-relationships": {
    name: "--pkg-relationships",
    description: "List of package relationships",
    isRepeatable: true,
    args: {
      name: "pkg-relationships",
      generators: commaSeparated([
        "unknown",
        "root",
        "workspace",
        "direct",
        "indirect",
      ]),
      default: "unknown,root,workspace,direct,indirect",
    },
  },
  "pkg-types": {
    name: "--pkg-types",
    description: "List of package types",
    isRepeatable: true,
    args: {
      name: "pkg-types",
      generators: commaSeparated(["os", "library"]),
      default: "os,library",
    },
  },
  platform: {
    name: "--platform",
    description:
      "Set platform in the form os/arch if image is multi-platform capable",
    args: { name: "platform" },
  },
  "podman-host": {
    name: "--podman-host",
    description: "Unix podman socket path to use for podman scanning",
    args: { name: "podman-host", template: "filepaths" },
  },
  "policy-bundle-repository": {
    name: "--policy-bundle-repository",
    description: "Deprecated, use --checks-bundle-repository",
    deprecated: true,
    args: { name: "policy-bundle-repository" },
  },
  qps: {
    name: "--qps",
    description: "Specify the maximum QPS to the master from this client",
    args: { name: "qps", default: "5" },
  },
  "raw-config-scanners": {
    name: "--raw-config-scanners",
    description:
      "Specify the types of scanners that will also scan raw configurations. For example, scanners will scan a non-adapted configuration into a shared state",
    isRepeatable: true,
    args: {
      name: "raw-config-scanners",
      generators: commaSeparated(["terraform"]),
    },
  },
  "redis-ca": {
    name: "--redis-ca",
    description: "Redis CA file location, if using Redis as cache backend",
    args: { name: "redis-ca", template: "filepaths" },
  },
  "redis-cert": {
    name: "--redis-cert",
    description:
      "Redis certificate file location, if using Redis as cache backend",
    args: { name: "redis-cert", template: "filepaths" },
  },
  "redis-key": {
    name: "--redis-key",
    description: "Redis key file location, if using Redis as cache backend",
    args: { name: "redis-key", template: "filepaths" },
  },
  "redis-tls": {
    name: "--redis-tls",
    description:
      "Enable Redis TLS with public certificates, if using Redis as cache backend",
  },
  "registry-token": {
    name: "--registry-token",
    description: "Registry token",
    args: { name: "registry-token" },
  },
  "rego-error-limit": {
    name: "--rego-error-limit",
    description:
      "Maximum number of compile errors allowed during Rego policy evaluation",
    args: { name: "rego-error-limit", default: "10" },
  },
  "rekor-url": {
    name: "--rekor-url",
    description: "[EXPERIMENTAL] Address of rekor STL server",
    args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
  },
  "removed-pkgs": {
    name: "--removed-pkgs",
    description: "Detect vulnerabilities of removed packages (only for Alpine)",
  },
  "render-cause": {
    name: "--render-cause",
    description:
      "Specify configuration types for which the rendered causes will be shown in the table report",
    isRepeatable: true,
    args: {
      name: "render-cause",
      generators: commaSeparated(["terraform", "ansible"]),
    },
  },
  report: {
    name: "--report",
    description: "Specify a report format for the output",
    args: { name: "report", suggestions: ["all", "summary"], default: "all" },
  },
  "report-compliance": {
    name: "--report",
    description: "Specify a compliance report format for the output",
    args: { name: "report", suggestions: ["all", "summary"], default: "all" },
  },
  "report-image": {
    name: "--report",
    description: "Specify a format for the compliance report",
    args: {
      name: "report",
      suggestions: ["all", "summary"],
      default: "summary",
    },
  },
  "sbom-sources": {
    name: "--sbom-sources",
    description:
      "[EXPERIMENTAL] Try to retrieve SBOM from the specified sources",
    isRepeatable: true,
    args: {
      name: "sbom-sources",
      generators: commaSeparated(["oci", "rekor"]),
    },
  },
  "scan-cache": {
    name: "--scan-cache",
    description: "Remove scan cache (container and VM image analysis results)",
  },
  scanners: {
    name: "--scanners",
    description: "Comma-separated list of what security issues to detect",
    isRepeatable: true,
    args: {
      name: "scanners",
      generators: commaSeparated(["vuln", "misconfig", "secret", "license"]),
      default: "vuln,secret",
    },
  },
  "scanners-convert": {
    name: "--scanners",
    description:
      "List of scanners included when generating the json report. Used only for rendering the summary table",
    isRepeatable: true,
    args: {
      name: "scanners",
      generators: commaSeparated(["vuln", "misconfig", "secret", "license"]),
    },
  },
  "scanners-image": {
    name: "--scanners",
    description: "Comma-separated list of what security issues to detect",
    isRepeatable: true,
    args: {
      name: "scanners",
      generators: commaSeparated([
        "vuln",
        "misconfig",
        "secret",
        "license",
        "crypto",
      ]),
      default: "vuln,secret",
    },
  },
  "scanners-kubernetes": {
    name: "--scanners",
    description: "Comma-separated list of what security issues to detect",
    isRepeatable: true,
    args: {
      name: "scanners",
      generators: commaSeparated(["vuln", "misconfig", "secret", "rbac"]),
      default: "vuln,misconfig,secret,rbac",
    },
  },
  "scanners-sbom": {
    name: "--scanners",
    description: "Comma-separated list of what security issues to detect",
    isRepeatable: true,
    args: {
      name: "scanners",
      generators: commaSeparated(["vuln", "license"]),
      default: "vuln",
    },
  },
  "secret-config": {
    name: "--secret-config",
    description:
      "Specify a path to config file for secret scanning (empty string disables loading)",
    args: {
      name: "secret-config",
      template: "filepaths",
      default: "trivy-secret.yaml",
    },
  },
  server: {
    name: "--server",
    description: "Server address in client mode",
    args: { name: "server" },
  },
  severity: {
    name: ["--severity", "-s"],
    description: "Severities of security issues to be displayed",
    isRepeatable: true,
    args: {
      name: "severity",
      generators: commaSeparated([
        "UNKNOWN",
        "LOW",
        "MEDIUM",
        "HIGH",
        "CRITICAL",
      ]),
      default: "UNKNOWN,LOW,MEDIUM,HIGH,CRITICAL",
    },
  },
  "show-suppressed": {
    name: "--show-suppressed",
    description: "[EXPERIMENTAL] Show suppressed vulnerabilities",
  },
  "skip-check-update": {
    name: "--skip-check-update",
    description: "Skip fetching rego check updates",
  },
  "skip-db-update": {
    name: "--skip-db-update",
    description: "Skip updating vulnerability database",
  },
  "skip-dirs": {
    name: "--skip-dirs",
    description: "Specify the directories or glob patterns to skip",
    isRepeatable: true,
    args: { name: "skip-dirs", template: "folders" },
  },
  "skip-files": {
    name: "--skip-files",
    description: "Specify the files or glob patterns to skip",
    isRepeatable: true,
    args: { name: "skip-files", template: "filepaths" },
  },
  "skip-images": {
    name: "--skip-images",
    description:
      "Skip the downloading and scanning of images (vulnerabilities and secrets) in the cluster resources",
  },
  "skip-java-db-update": {
    name: "--skip-java-db-update",
    description: "Skip updating Java index database",
  },
  "skip-update": {
    name: "--skip-update",
    description: "Deprecated, use --skip-db-update",
    deprecated: true,
  },
  "skip-version-check": {
    name: "--skip-version-check",
    description:
      "Suppress notices about version updates and Trivy announcements",
  },
  "skip-vex-repo-update": {
    name: "--skip-vex-repo-update",
    description: "[EXPERIMENTAL] Skip VEX repository update",
  },
  "table-mode": {
    name: "--table-mode",
    description:
      "[EXPERIMENTAL] Tables that will be displayed in 'table' format",
    isRepeatable: true,
    args: {
      name: "table-mode",
      generators: commaSeparated(["summary", "detailed"]),
      default: "summary,detailed",
    },
  },
  tag: {
    name: "--tag",
    description: "Pass the tag name to be scanned",
    args: { name: "tag" },
  },
  template: {
    name: ["--template", "-t"],
    description: "Output template (file path must have .tpl extension)",
    args: { name: "template" },
  },
  "tf-exclude-downloaded-modules": {
    name: "--tf-exclude-downloaded-modules",
    description: "Exclude misconfigurations for downloaded terraform modules",
  },
  "tf-vars": {
    name: "--tf-vars",
    description: "Specify paths to override the Terraform tfvars files",
    isRepeatable: true,
    args: { name: "tf-vars", template: "filepaths" },
  },
  token: {
    name: "--token",
    description: "For authentication in client/server mode",
    args: { name: "token" },
  },
  "token-header": {
    name: "--token-header",
    description: "Specify a header name for token in client/server mode",
    args: { name: "token-header", default: "Trivy-Token" },
  },
  tolerations: {
    name: "--tolerations",
    description:
      "Specify node-collector job tolerations (example: key1=value1:NoExecute,key2=value2:NoSchedule)",
    isRepeatable: true,
    args: { name: "tolerations" },
  },
  "trace-rego": {
    name: "--trace-rego",
    description: "Enable more verbose trace output for custom queries",
  },
  username: {
    name: "--username",
    description: "Username. Comma-separated usernames allowed",
    isRepeatable: true,
    args: { name: "username" },
  },
  vex: {
    name: "--vex",
    description: '[EXPERIMENTAL] VEX sources ("repo", "oci" or file path)',
    isRepeatable: true,
    args: {
      name: "vex",
      template: "filepaths",
      suggestions: [
        { name: "repo", description: "Use the VEX repositories" },
        { name: "oci", description: "Retrieve VEX from the OCI registry" },
      ],
    },
  },
  "vex-repo": { name: "--vex-repo", description: "Remove VEX repositories" },
  "vuln-db": {
    name: "--vuln-db",
    description: "Remove vulnerability database",
  },
  "vuln-severity-source": {
    name: "--vuln-severity-source",
    description:
      "Order of data sources for selecting vulnerability severity level",
    isRepeatable: true,
    args: {
      name: "vuln-severity-source",
      generators: commaSeparated([
        "nvd",
        "redhat",
        "redhat-oval",
        "debian",
        "ubuntu",
        "alpine",
        "amazon",
        "oracle-oval",
        "suse-cvrf",
        "photon",
        "arch-linux",
        "alma",
        "rocky",
        "cbl-mariner",
        "azure",
        "ruby-advisory-db",
        "php-security-advisories",
        "nodejs-security-wg",
        "ghsa",
        "glad",
        "aqua",
        "osv",
        "k8s",
        "wolfi",
        "chainguard",
        "bitnami",
        "govulndb",
        "julia",
        "bottlerocket",
        "echo",
        "echo-osv",
        "minimos",
        "rootio",
        "rapidfort",
        "auto",
      ]),
      default: "auto",
    },
  },
  "vuln-type": {
    name: "--vuln-type",
    description: "Deprecated, use --pkg-types",
    deprecated: true,
    isRepeatable: true,
    args: { name: "vuln-type" },
  },
} satisfies Record<string, Fig.Option>;

const pick = (...names: (keyof typeof flags)[]): Fig.Option[] =>
  names.map((name) => flags[name]);

// Flags shared by `image`, `filesystem`, `rootfs` and `repository`
const scanOptions = pick(
  "ansible-extra-vars",
  "ansible-inventory",
  "ansible-playbook",
  "cache-ttl",
  "check-namespaces",
  "checks-bundle-repository",
  "config-check",
  "config-data",
  "config-file-schemas",
  "custom-headers",
  "db-repository",
  "dependency-tree",
  "detection-priority",
  "disable-telemetry",
  "download-db-only",
  "download-java-db-only",
  "enable-modules",
  "exit-code",
  "file-patterns",
  "format",
  "helm-api-versions",
  "helm-kube-version",
  "helm-set",
  "helm-set-file",
  "helm-set-string",
  "helm-values",
  "ignore-policy",
  "ignore-status",
  "ignore-unfixed",
  "ignored-licenses",
  "ignorefile",
  "include-deprecated-checks",
  "include-non-failures",
  "java-db-repository",
  "license-confidence-level",
  "license-full",
  "list-all-pkgs",
  "misconfig-scanners",
  "module-dir",
  "no-progress",
  "offline-scan",
  "output",
  "output-plugin-arg",
  "parallel",
  "password",
  "password-stdin",
  "pkg-relationships",
  "pkg-types",
  "raw-config-scanners",
  "redis-ca",
  "redis-cert",
  "redis-key",
  "redis-tls",
  "registry-token",
  "rego-error-limit",
  "rekor-url",
  "render-cause",
  "sbom-sources",
  "secret-config",
  "server",
  "severity",
  "show-suppressed",
  "skip-check-update",
  "skip-db-update",
  "skip-dirs",
  "skip-files",
  "skip-java-db-update",
  "skip-version-check",
  "skip-vex-repo-update",
  "table-mode",
  "template",
  "tf-exclude-downloaded-modules",
  "token",
  "token-header",
  "trace-rego",
  "username",
  "vex",
  "vuln-severity-source",
  "skip-update",
  "light",
  "vuln-type",
  "policy-bundle-repository"
);

const globalOptions: Fig.Option[] = [
  {
    name: "--cacert",
    description: "Path to PEM-encoded CA certificate file",
    args: { name: "cacert", template: "filepaths" },
    isPersistent: true,
  },
  {
    name: "--cache-dir",
    description: "Cache directory",
    args: { name: "cache-dir", template: "folders" },
    isPersistent: true,
  },
  {
    name: ["--config", "-c"],
    description: "Config path (empty string disables loading)",
    args: { name: "config", template: "filepaths", default: "trivy.yaml" },
    isPersistent: true,
  },
  { name: ["--debug", "-d"], description: "Debug mode", isPersistent: true },
  {
    name: "--generate-default-config",
    description: "Write the default config to trivy-default.yaml",
    isPersistent: true,
  },
  {
    name: "--insecure",
    description: "Allow insecure server connections",
    isPersistent: true,
  },
  {
    name: ["--quiet", "-q"],
    description: "Suppress progress bar and log output",
    isPersistent: true,
  },
  {
    name: "--timeout",
    description: "Timeout",
    args: { name: "timeout", default: "5m0s" },
    isPersistent: true,
  },
  {
    name: ["--version", "-v"],
    description: "Show version",
    isPersistent: true,
  },
  { name: ["--help", "-h"], description: "Show help", isPersistent: true },
];

const completionSpec: Fig.Spec = {
  name: "trivy",
  description: "Unified security scanner",
  subcommands: [
    {
      name: ["image", "i"],
      description: "Scan a container image",
      options: [
        ...scanOptions,
        ...pick(
          "cache-backend",
          "compliance-image",
          "distro",
          "docker-host",
          "exit-on-eol",
          "image-config-scanners",
          "image-src",
          "input",
          "max-image-size",
          "platform",
          "podman-host",
          "removed-pkgs",
          "report-image",
          "scanners-image"
        ),
      ],
      args: { name: "image_name" },
    },
    {
      name: ["filesystem", "fs"],
      description: "Scan local filesystem",
      options: [
        ...scanOptions,
        ...pick(
          "cache-backend-memory",
          "cf-params",
          "compliance",
          "distro",
          "include-dev-deps",
          "report-compliance",
          "scanners",
          "tf-vars"
        ),
      ],
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "rootfs",
      description: "Scan rootfs",
      options: [
        ...scanOptions,
        ...pick(
          "cache-backend-memory",
          "cf-params",
          "distro",
          "exit-on-eol",
          "scanners",
          "tf-vars"
        ),
      ],
      args: { name: "rootdir", template: "folders" },
    },
    {
      name: ["repository", "repo"],
      description: "Scan a repository",
      options: [
        ...scanOptions,
        ...pick(
          "branch",
          "cache-backend",
          "cf-params",
          "commit",
          "include-dev-deps",
          "scanners",
          "tag",
          "tf-vars"
        ),
      ],
      args: {
        name: "repo",
        description: "Repository path or URL",
        template: "folders",
      },
    },
    {
      name: "sbom",
      description: "Scan SBOM for vulnerabilities and licenses",
      options: pick(
        "cache-backend-memory",
        "cache-ttl",
        "compliance",
        "custom-headers",
        "db-repository",
        "detection-priority",
        "disable-telemetry",
        "distro",
        "download-db-only",
        "download-java-db-only",
        "exit-code",
        "exit-on-eol",
        "file-patterns",
        "format",
        "ignore-policy",
        "ignore-status",
        "ignore-unfixed",
        "ignored-licenses",
        "ignorefile",
        "java-db-repository",
        "list-all-pkgs",
        "no-progress",
        "offline-scan",
        "output",
        "output-plugin-arg",
        "password",
        "password-stdin",
        "pkg-relationships",
        "pkg-types",
        "redis-ca",
        "redis-cert",
        "redis-key",
        "redis-tls",
        "registry-token",
        "rekor-url",
        "sbom-sources",
        "scanners-sbom",
        "server",
        "severity",
        "show-suppressed",
        "skip-db-update",
        "skip-java-db-update",
        "skip-version-check",
        "skip-vex-repo-update",
        "table-mode",
        "template",
        "token",
        "token-header",
        "username",
        "vex",
        "vuln-severity-source",
        "skip-update",
        "light",
        "vuln-type"
      ),
      args: { name: "sbom_path", template: "filepaths" },
    },
    {
      name: ["config", "conf"],
      description: "Scan config files for misconfigurations",
      options: pick(
        "ansible-extra-vars",
        "ansible-inventory",
        "ansible-playbook",
        "cache-backend-memory",
        "cache-ttl",
        "cf-params",
        "check-namespaces",
        "checks-bundle-repository",
        "compliance",
        "config-check",
        "config-data",
        "config-file-schemas",
        "disable-telemetry",
        "enable-modules",
        "exit-code",
        "file-patterns",
        "format",
        "helm-api-versions",
        "helm-kube-version",
        "helm-set",
        "helm-set-file",
        "helm-set-string",
        "helm-values",
        "ignore-policy",
        "ignorefile",
        "include-deprecated-checks",
        "include-non-failures",
        "k8s-version",
        "misconfig-scanners",
        "module-dir",
        "output",
        "output-plugin-arg",
        "password",
        "password-stdin",
        "raw-config-scanners",
        "redis-ca",
        "redis-cert",
        "redis-key",
        "redis-tls",
        "registry-token",
        "rego-error-limit",
        "render-cause",
        "report-compliance",
        "severity",
        "skip-check-update",
        "skip-dirs",
        "skip-files",
        "skip-version-check",
        "table-mode",
        "template",
        "tf-exclude-downloaded-modules",
        "tf-vars",
        "trace-rego",
        "username",
        "policy-bundle-repository"
      ),
      args: { name: "dir", template: "folders" },
    },
    {
      name: ["kubernetes", "k8s"],
      description: "[EXPERIMENTAL] Scan kubernetes cluster",
      options: pick(
        "ansible-extra-vars",
        "ansible-inventory",
        "ansible-playbook",
        "burst",
        "cache-backend",
        "cache-ttl",
        "check-namespaces",
        "checks-bundle-repository",
        "compliance-kubernetes",
        "config-check",
        "config-data",
        "config-file-schemas",
        "db-repository",
        "dependency-tree",
        "detection-priority",
        "disable-node-collector",
        "disable-telemetry",
        "distro",
        "download-db-only",
        "download-java-db-only",
        "exclude-kinds",
        "exclude-namespaces",
        "exclude-nodes",
        "exclude-owned",
        "exit-code",
        "file-patterns",
        "format-kubernetes",
        "helm-api-versions",
        "helm-kube-version",
        "helm-set",
        "helm-set-file",
        "helm-set-string",
        "helm-values",
        "ignore-policy",
        "ignore-status",
        "ignore-unfixed",
        "ignorefile",
        "image-src",
        "include-deprecated-checks",
        "include-kinds",
        "include-namespaces",
        "include-non-failures",
        "java-db-repository",
        "k8s-version",
        "kubeconfig",
        "list-all-pkgs",
        "misconfig-scanners",
        "no-progress",
        "node-collector-imageref",
        "node-collector-namespace",
        "offline-scan",
        "output",
        "output-plugin-arg",
        "parallel",
        "password",
        "password-stdin",
        "pkg-relationships",
        "pkg-types",
        "qps",
        "raw-config-scanners",
        "redis-ca",
        "redis-cert",
        "redis-key",
        "redis-tls",
        "registry-token",
        "rego-error-limit",
        "rekor-url",
        "render-cause",
        "report",
        "sbom-sources",
        "scanners-kubernetes",
        "secret-config",
        "severity",
        "show-suppressed",
        "skip-check-update",
        "skip-db-update",
        "skip-dirs",
        "skip-files",
        "skip-images",
        "skip-java-db-update",
        "skip-version-check",
        "skip-vex-repo-update",
        "template",
        "tf-exclude-downloaded-modules",
        "tolerations",
        "trace-rego",
        "username",
        "vex",
        "vuln-severity-source",
        "skip-update",
        "light",
        "vuln-type",
        "policy-bundle-repository"
      ),
      args: {
        name: "context",
        description: "Kubernetes context",
        isOptional: true,
      },
    },
    {
      name: "vm",
      description: "[EXPERIMENTAL] Scan a virtual machine image",
      options: pick(
        "ansible-extra-vars",
        "ansible-inventory",
        "ansible-playbook",
        "aws-region",
        "cache-backend",
        "cache-ttl",
        "checks-bundle-repository",
        "compliance",
        "config-file-schemas",
        "custom-headers",
        "db-repository",
        "dependency-tree",
        "detection-priority",
        "disable-telemetry",
        "distro",
        "download-db-only",
        "download-java-db-only",
        "enable-modules",
        "exit-code",
        "exit-on-eol",
        "file-patterns",
        "format",
        "helm-api-versions",
        "helm-kube-version",
        "helm-set",
        "helm-set-file",
        "helm-set-string",
        "helm-values",
        "ignore-policy",
        "ignore-status",
        "ignore-unfixed",
        "ignorefile",
        "include-non-failures",
        "java-db-repository",
        "list-all-pkgs",
        "misconfig-scanners",
        "module-dir",
        "no-progress",
        "offline-scan",
        "output",
        "output-plugin-arg",
        "parallel",
        "pkg-relationships",
        "pkg-types",
        "raw-config-scanners",
        "redis-ca",
        "redis-cert",
        "redis-key",
        "redis-tls",
        "rekor-url",
        "render-cause",
        "sbom-sources",
        "scanners",
        "secret-config",
        "server",
        "severity",
        "show-suppressed",
        "skip-db-update",
        "skip-dirs",
        "skip-files",
        "skip-java-db-update",
        "skip-version-check",
        "skip-vex-repo-update",
        "table-mode",
        "template",
        "tf-exclude-downloaded-modules",
        "token",
        "token-header",
        "vex",
        "vuln-severity-source",
        "skip-update",
        "light",
        "vuln-type",
        "policy-bundle-repository"
      ),
      args: { name: "vm_image", template: "filepaths" },
    },
    {
      name: ["convert", "conv"],
      description: "Convert Trivy JSON report into a different format",
      options: pick(
        "compliance",
        "dependency-tree",
        "exit-code",
        "exit-on-eol",
        "format",
        "ignore-policy",
        "ignorefile",
        "list-all-pkgs",
        "output",
        "output-plugin-arg",
        "report",
        "scanners-convert",
        "severity",
        "show-suppressed",
        "table-mode",
        "template"
      ),
      args: { name: "result_json", template: "filepaths" },
    },
    {
      name: ["server", "s"],
      description: "Server mode",
      options: pick(
        "cache-backend",
        "cache-ttl",
        "db-repository",
        "download-db-only",
        "enable-modules",
        "listen",
        "module-dir",
        "no-progress",
        "password",
        "password-stdin",
        "redis-ca",
        "redis-cert",
        "redis-key",
        "redis-tls",
        "registry-token",
        "skip-db-update",
        "token",
        "token-header",
        "username",
        "skip-update",
        "light"
      ),
    },
    {
      name: ["client", "c"],
      description:
        "Client mode (deprecated, use --server on the scan commands)",
      deprecated: true,
      hidden: true,
      options: [
        {
          name: "--remote",
          description: "Server address",
          args: { name: "remote", default: "http://localhost:4954" },
        },
      ],
      args: { name: "image_name" },
    },
    {
      name: "clean",
      description: "Remove cached files",
      options: pick(
        "all",
        "checks-bundle",
        "java-db",
        "scan-cache",
        "vex-repo",
        "vuln-db"
      ),
    },
    {
      name: "registry",
      description: "Manage registry authentication",
      subcommands: [
        {
          name: "login",
          description: "Log in to a registry",
          options: pick("password", "password-stdin", "username"),
          args: { name: "server" },
        },
        {
          name: "logout",
          description: "Log out of a registry",
          args: { name: "server" },
        },
      ],
    },
    {
      name: ["plugin", "p"],
      description: "Manage plugins",
      subcommands: [
        {
          name: ["install", "i"],
          description: "Install a plugin",
          args: {
            name: "plugin",
            description: "Plugin name, URL or file path",
            template: "filepaths",
          },
        },
        {
          name: ["uninstall", "u"],
          description: "Uninstall a plugin",
          args: { name: "plugin", generators: installedPlugins },
        },
        {
          name: ["list", "l"],
          description: "List installed plugin",
        },
        {
          name: "info",
          description: "Show information about the specified plugin",
          args: { name: "plugin", generators: installedPlugins },
        },
        {
          name: ["run", "r"],
          description: "Run a plugin on the fly",
          args: [
            {
              name: "plugin",
              description: "Plugin name, URL or file path",
              template: "filepaths",
              generators: installedPlugins,
            },
            { name: "args", isOptional: true, isVariadic: true },
          ],
        },
        {
          name: "update",
          description: "Update the local copy of the plugin index",
        },
        {
          name: "search",
          description:
            "List Trivy plugins available on the plugin index and search among them",
          args: { name: "keyword", isOptional: true },
        },
        {
          name: "upgrade",
          description: "Upgrade installed plugins to newer versions",
          args: {
            name: "plugin",
            generators: installedPlugins,
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: ["module", "m"],
      description: "Manage modules",
      options: pick("enable-modules", "module-dir").map((option) => ({
        ...option,
        isPersistent: true,
      })),
      subcommands: [
        {
          name: ["install", "i"],
          description: "Install a module",
          args: { name: "repository" },
        },
        {
          name: ["uninstall", "u"],
          description: "Uninstall a module",
          args: { name: "repository" },
        },
      ],
    },
    {
      name: "vex",
      description: "[EXPERIMENTAL] VEX utilities",
      subcommands: [
        {
          name: "repo",
          description: "Manage VEX repositories",
          subcommands: [
            { name: "init", description: "Initialize a configuration file" },
            { name: "list", description: "List VEX repositories" },
            {
              name: "download",
              description: "Download the VEX repositories",
              args: { name: "repo_names", isOptional: true, isVariadic: true },
            },
          ],
        },
      ],
    },
    {
      name: "version",
      description: "Print the version",
      options: pick("format-version"),
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: { template: "help", isOptional: true },
    },
  ],
  options: [...globalOptions, ...pick("format-version")],
};
export default completionSpec;
