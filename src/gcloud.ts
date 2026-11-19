// gcloud 570.0.0 (installed Google Cloud SDK, 2026-11-19). Source: the CLI tree of the GA track written by `gcloud meta cli-trees update --commands=gcloud --force --skip-completions` (140 top-level groups, 6972 group and command nodes in total, 274 of them hidden), converted to spec files by a generator script (flag/positional names, choices, required flags, descriptions are from the tree; hidden flags/commands carry `hidden: true`, except generated `--no-X` negations that gcloud documents as `--[no-]X`, which are shown).
// Version caveat: the newest published SDK on 2026-11-19 is 594.0.0 (2026-11-17); only the installed 570.0.0 could be run here, so commands/flags added in 571-594 are missing.
// Each group file under src/gcloud/ holds the full tree of one group and lists the global flags on every node, as before; option objects repeated within a file are hoisted into constants.
// NOT regenerated: the alpha, beta and preview tracks (not installed here; `gcloud components list` and dl.google.com are blocked, and running a separately downloaded SDK copy was refused by the sandbox). The `alpha` and `beta` entries below are kept from the 2022 spec and, as in the 2022 spec, there is no gcloud/alpha.ts or gcloud/beta.ts behind them; `preview` is not listed.
const completionSpec: Fig.Spec = {
  name: "gcloud",
  description: "Manage Google Cloud resources and developer workflow",
  subcommands: [
    {
      name: "access-approval",
      description: "Manage Access Approval requests and settings",
      loadSpec: "gcloud/access-approval",
    },
    {
      name: "access-context-manager",
      description: "Manage Access Context Manager resources",
      loadSpec: "gcloud/access-context-manager",
    },
    {
      name: "active-directory",
      description: "Manage Managed Microsoft AD resources",
      loadSpec: "gcloud/active-directory",
    },
    {
      name: "ai",
      description: "Manage entities in Vertex AI",
      loadSpec: "gcloud/ai",
    },
    {
      name: "ai-platform",
      description: "Manage AI Platform jobs and models",
      loadSpec: "gcloud/ai-platform",
    },
    {
      name: "alloydb",
      description: "Create and manage AlloyDB databases",
      loadSpec: "gcloud/alloydb",
    },
    {
      name: "alpha",
      description: "*(ALPHA)*  Alpha versions of gcloud commands",
      loadSpec: "gcloud/alpha",
    },
    {
      name: "anthos",
      description: "Anthos command Group",
      loadSpec: "gcloud/anthos",
    },
    {
      name: "api-gateway",
      description: "Manage Cloud API Gateway resources",
      loadSpec: "gcloud/api-gateway",
    },
    {
      name: "apigee",
      description: "Manage Apigee resources",
      loadSpec: "gcloud/apigee",
    },
    {
      name: "apihub",
      description: "Manage Apihub resources",
      loadSpec: "gcloud/apihub",
    },
    {
      name: "app",
      description: "Manage your App Engine deployments",
      loadSpec: "gcloud/app",
    },
    {
      name: "apphub",
      description: "Manage App Hub resources",
      loadSpec: "gcloud/apphub",
    },
    {
      name: "artifacts",
      description: "Manage Artifact Registry resources",
      loadSpec: "gcloud/artifacts",
    },
    {
      name: "asset",
      description: "Manage the Cloud Asset Inventory",
      loadSpec: "gcloud/asset",
    },
    {
      name: "assured",
      description: "Read and manipulate Assured Workloads data controls",
      loadSpec: "gcloud/assured",
    },
    {
      name: "audit-manager",
      description: "Enroll resources, audit workloads and generate reports",
      loadSpec: "gcloud/audit-manager",
    },
    {
      name: "auth",
      description: "Manage oauth2 credentials for the Google Cloud CLI",
      loadSpec: "gcloud/auth",
    },
    {
      name: "authz-toolkit",
      description: "Manage Authorization Toolkit resources",
      hidden: true,
      loadSpec: "gcloud/authz-toolkit",
    },
    {
      name: "backup-dr",
      description: "Manage Backup and DR resources",
      loadSpec: "gcloud/backup-dr",
    },
    {
      name: "batch",
      description: "Manage Batch resources",
      loadSpec: "gcloud/batch",
    },
    {
      name: "beta",
      description: "*(BETA)*  Beta versions of gcloud commands",
      loadSpec: "gcloud/beta",
    },
    {
      name: "beyondcorp",
      description: "Manage Beyondcorp resources",
      loadSpec: "gcloud/beyondcorp",
    },
    {
      name: "biglake",
      description: "Create and manage Google Cloud BigLake resources",
      loadSpec: "gcloud/biglake",
    },
    {
      name: "bigtable",
      description: "Manage your Cloud Bigtable storage",
      loadSpec: "gcloud/bigtable",
    },
    {
      name: "billing",
      description: "Manage billing accounts and associate them with projects",
      loadSpec: "gcloud/billing",
    },
    {
      name: "bms",
      description: "Manage Bare Metal Solution resources",
      loadSpec: "gcloud/bms",
    },
    {
      name: "bq",
      description: "Manage Bq resources",
      loadSpec: "gcloud/bq",
    },
    {
      name: "builds",
      description: "Create and manage builds for Google Cloud Build",
      loadSpec: "gcloud/builds",
    },
    {
      name: "certificate-manager",
      description: "Manage SSL certificates for your Google Cloud projects",
      loadSpec: "gcloud/certificate-manager",
    },
    {
      name: "cheat-sheet",
      description: "Display gcloud cheat sheet",
      loadSpec: "gcloud/cheat-sheet",
    },
    {
      name: "cloud-shell",
      description: "Manage Google Cloud Shell",
      loadSpec: "gcloud/cloud-shell",
    },
    {
      name: "cloudlocationfinder",
      description: "Manage Cloudlocationfinder resources",
      loadSpec: "gcloud/cloudlocationfinder",
    },
    {
      name: "colab",
      description: "Manage Colab Enterprise resources",
      loadSpec: "gcloud/colab",
    },
    {
      name: "compliance-manager",
      description: "Manage Compliance Manager resources",
      loadSpec: "gcloud/compliance-manager",
    },
    {
      name: "components",
      description:
        "List, install, update, or remove Google Cloud CLI components",
      loadSpec: "gcloud/components",
    },
    {
      name: "composer",
      description: "Create and manage Cloud Composer Environments",
      loadSpec: "gcloud/composer",
    },
    {
      name: "compute",
      description: "Create and manipulate Compute Engine resources",
      loadSpec: "gcloud/compute",
    },
    {
      name: "config",
      description: "View and edit Google Cloud CLI properties",
      loadSpec: "gcloud/config",
    },
    {
      name: "container",
      description:
        "Deploy and manage clusters of machines for running containers",
      loadSpec: "gcloud/container",
    },
    {
      name: "data-catalog",
      description: "Manage Data Catalog resources",
      loadSpec: "gcloud/data-catalog",
    },
    {
      name: "database-migration",
      description: "Manage Database Migration Service resources",
      loadSpec: "gcloud/database-migration",
    },
    {
      name: "dataflow",
      description: "Manage Google Cloud Dataflow resources",
      loadSpec: "gcloud/dataflow",
    },
    {
      name: "dataplex",
      description: "Manage Dataplex resources",
      loadSpec: "gcloud/dataplex",
    },
    {
      name: "dataproc",
      description: "Create and manage Google Cloud Dataproc clusters and jobs",
      loadSpec: "gcloud/dataproc",
    },
    {
      name: "dataproc-gdc",
      description: "Manage Dataproc Gdc resources",
      hidden: true,
      loadSpec: "gcloud/dataproc-gdc",
    },
    {
      name: "datastore",
      description: "Manage your Cloud Datastore resources",
      loadSpec: "gcloud/datastore",
    },
    {
      name: "datastream",
      description: "Manage Cloud Datastream resources",
      loadSpec: "gcloud/datastream",
    },
    {
      name: "deploy",
      description: "Create and manage Cloud Deploy resources",
      loadSpec: "gcloud/deploy",
    },
    {
      name: "deployment-manager",
      description: "Manage deployments of cloud resources",
      loadSpec: "gcloud/deployment-manager",
    },
    {
      name: "design-center",
      description: "Manage Application Design Center resources",
      loadSpec: "gcloud/design-center",
    },
    {
      name: "developer-connect",
      description: "Manage Developer Connect resources",
      loadSpec: "gcloud/developer-connect",
    },
    {
      name: "dns",
      description: "Manage your Cloud DNS managed-zones and record-sets",
      loadSpec: "gcloud/dns",
    },
    {
      name: "docker",
      description:
        "*(DEPRECATED)* Enable Docker CLI access to Google Container Registry",
      deprecated: true,
      loadSpec: "gcloud/docker",
    },
    {
      name: "domains",
      description: "Manage domains for your Google Cloud projects",
      loadSpec: "gcloud/domains",
    },
    {
      name: "edge-cache",
      description: "Manage Media CDN resources",
      loadSpec: "gcloud/edge-cache",
    },
    {
      name: "edge-cloud",
      description: "Manage edge-cloud resources",
      loadSpec: "gcloud/edge-cloud",
    },
    {
      name: "emulators",
      description: "Set up your local development environment using emulators",
      loadSpec: "gcloud/emulators",
    },
    {
      name: "endpoints",
      description: "Create, enable and manage API services",
      loadSpec: "gcloud/endpoints",
    },
    {
      name: "essential-contacts",
      description: "Manage Essential Contacts",
      loadSpec: "gcloud/essential-contacts",
    },
    {
      name: "eventarc",
      description: "Manage Eventarc resources",
      loadSpec: "gcloud/eventarc",
    },
    {
      name: "feedback",
      description: "Provide feedback to the Google Cloud CLI team",
      loadSpec: "gcloud/feedback",
    },
    {
      name: "filestore",
      description: "Create and manipulate Filestore resources",
      loadSpec: "gcloud/filestore",
    },
    {
      name: "firebase",
      description: "Work with Google Firebase",
      loadSpec: "gcloud/firebase",
    },
    {
      name: "firestore",
      description: "Manage your Cloud Firestore resources",
      loadSpec: "gcloud/firestore",
    },
    {
      name: "functions",
      description: "Manage Google Cloud Functions",
      loadSpec: "gcloud/functions",
    },
    {
      name: "gemini",
      description:
        "Manage resources associated with Gemini Code Assist and Gemini Cloud Assist",
      loadSpec: "gcloud/gemini",
    },
    {
      name: "healthcare",
      description: "Manage Cloud Healthcare resources",
      loadSpec: "gcloud/healthcare",
    },
    {
      name: "help",
      description: "Search gcloud help text",
      loadSpec: "gcloud/help",
    },
    {
      name: "iam",
      description: "Manage IAM service accounts and keys",
      loadSpec: "gcloud/iam",
    },
    {
      name: "iap",
      description: "Manage IAP policies",
      loadSpec: "gcloud/iap",
    },
    {
      name: "identity",
      description: "Manage Cloud Identity Groups and Memberships resources",
      loadSpec: "gcloud/identity",
    },
    {
      name: "ids",
      description: "Manage Cloud IDS",
      loadSpec: "gcloud/ids",
    },
    {
      name: "immersive-stream",
      description: "*(REMOVED)* Manage Immersive Stream resources",
      hidden: true,
      loadSpec: "gcloud/immersive-stream",
    },
    {
      name: "info",
      description: "Display information about the current gcloud environment",
      loadSpec: "gcloud/info",
    },
    {
      name: "infra-manager",
      description: "Manage Infra Manager resources",
      loadSpec: "gcloud/infra-manager",
    },
    {
      name: "init",
      description: "Initialize or reinitialize gcloud",
      loadSpec: "gcloud/init",
    },
    {
      name: "kms",
      description: "Manage cryptographic keys in the cloud",
      loadSpec: "gcloud/kms",
    },
    {
      name: "logging",
      description: "Manage Cloud Logging",
      loadSpec: "gcloud/logging",
    },
    {
      name: "looker",
      description: "Manage Looker resources",
      loadSpec: "gcloud/looker",
    },
    {
      name: "lustre",
      description: "Manage Lustre resources",
      loadSpec: "gcloud/lustre",
    },
    {
      name: "managed-kafka",
      description:
        "Administer Managed Service for Apache Kafka clusters, topics, and consumer groups",
      loadSpec: "gcloud/managed-kafka",
    },
    {
      name: "memcache",
      description: "Manage Cloud Memorystore Memcached resources",
      loadSpec: "gcloud/memcache",
    },
    {
      name: "memorystore",
      description: "Manage Memorystore resources",
      loadSpec: "gcloud/memorystore",
    },
    {
      name: "meta",
      description: "Cloud meta introspection commands",
      hidden: true,
      loadSpec: "gcloud/meta",
    },
    {
      name: "metastore",
      description: "Manage Dataproc Metastore resources",
      loadSpec: "gcloud/metastore",
    },
    {
      name: "migration",
      description: "The root group for various Cloud Migration teams",
      loadSpec: "gcloud/migration",
    },
    {
      name: "ml",
      description: "Use Google Cloud machine learning capabilities",
      loadSpec: "gcloud/ml",
    },
    {
      name: "model-armor",
      description:
        "Model Armor is a service offering LLM-agnostic security and AI safety measures to mitigate risks associated with large language models (LLMs)",
      loadSpec: "gcloud/model-armor",
    },
    {
      name: "monitoring",
      description: "Manage Cloud Monitoring dashboards",
      loadSpec: "gcloud/monitoring",
    },
    {
      name: "netapp",
      description: "Create and manipulate Cloud NetApp Files resources",
      loadSpec: "gcloud/netapp",
    },
    {
      name: "network-connectivity",
      description: "Manage Network Connectivity resources",
      loadSpec: "gcloud/network-connectivity",
    },
    {
      name: "network-management",
      description: "Manage Network Management resources",
      loadSpec: "gcloud/network-management",
    },
    {
      name: "network-security",
      description: "Manage Network Security resources",
      loadSpec: "gcloud/network-security",
    },
    {
      name: "network-services",
      description: "Manage Network Services resources",
      loadSpec: "gcloud/network-services",
    },
    {
      name: "notebooks",
      description: "Notebooks Command Group",
      loadSpec: "gcloud/notebooks",
    },
    {
      name: "observability",
      description: "Manage Observability resources",
      loadSpec: "gcloud/observability",
    },
    {
      name: "oracle-database",
      description: "Manage Oracle Database resources",
      loadSpec: "gcloud/oracle-database",
    },
    {
      name: "org-policies",
      description: "Create and manage Organization Policies",
      loadSpec: "gcloud/org-policies",
    },
    {
      name: "organizations",
      description: "Create and manage Google Cloud Platform Organizations",
      loadSpec: "gcloud/organizations",
    },
    {
      name: "orglifecycle",
      description: "Manage Org Lifecycle resources",
      hidden: true,
      loadSpec: "gcloud/orglifecycle",
    },
    {
      name: "pam",
      description:
        "Manage Privileged Access Manager (PAM) entitlements and grants",
      loadSpec: "gcloud/pam",
    },
    {
      name: "parallelstore",
      description: "Manage Parallelstore resources",
      hidden: true,
      loadSpec: "gcloud/parallelstore",
    },
    {
      name: "parametermanager",
      description:
        "Parameter Manager is a single source of truth to store, access and manage the lifecycle of your application parameters",
      loadSpec: "gcloud/parametermanager",
    },
    {
      name: "policy-intelligence",
      description:
        "A platform to help better understand, use, and manage policies at scale",
      loadSpec: "gcloud/policy-intelligence",
    },
    {
      name: "policy-troubleshoot",
      description: "Troubleshoot Google Cloud Platform policies",
      loadSpec: "gcloud/policy-troubleshoot",
    },
    {
      name: "privateca",
      description: "Manage private Certificate Authorities on Google Cloud",
      loadSpec: "gcloud/privateca",
    },
    {
      name: "projects",
      description: "Create and manage project access policies",
      loadSpec: "gcloud/projects",
    },
    {
      name: "publicca",
      description:
        "Manage accounts for Google Trust Services' Certificate Authority",
      loadSpec: "gcloud/publicca",
    },
    {
      name: "pubsub",
      description: "Manage Cloud Pub/Sub topics, subscriptions, and snapshots",
      loadSpec: "gcloud/pubsub",
    },
    {
      name: "recaptcha",
      description: "Manage reCAPTCHA Enterprise Keys",
      loadSpec: "gcloud/recaptcha",
    },
    {
      name: "recommender",
      description: "Manage Cloud recommendations and recommendation rules",
      loadSpec: "gcloud/recommender",
    },
    {
      name: "redis",
      description: "Manage Cloud Memorystore Redis resources",
      loadSpec: "gcloud/redis",
    },
    {
      name: "resource-manager",
      description: "Manage Cloud Resources",
      loadSpec: "gcloud/resource-manager",
    },
    {
      name: "run",
      description: "Manage your Cloud Run applications",
      loadSpec: "gcloud/run",
    },
    {
      name: "scc",
      description: "Manage Cloud SCC resources",
      loadSpec: "gcloud/scc",
    },
    {
      name: "scheduler",
      description: "Manage Cloud Scheduler jobs and schedules",
      loadSpec: "gcloud/scheduler",
    },
    {
      name: "secrets",
      description: "Manage secrets on Google Cloud",
      loadSpec: "gcloud/secrets",
    },
    {
      name: "service-directory",
      description: "Command groups for Service Directory",
      loadSpec: "gcloud/service-directory",
    },
    {
      name: "service-extensions",
      description: "Manage Service Extensions resources",
      loadSpec: "gcloud/service-extensions",
    },
    {
      name: "service-health",
      description:
        "Request events that are relevant to your project or organization",
      loadSpec: "gcloud/service-health",
    },
    {
      name: "services",
      description: "List, enable and disable APIs and services",
      loadSpec: "gcloud/services",
    },
    {
      name: "source",
      description: "Cloud git repository commands",
      loadSpec: "gcloud/source",
    },
    {
      name: "source-manager",
      description: "Manage Secure Source Manager resources",
      loadSpec: "gcloud/source-manager",
    },
    {
      name: "spanner",
      description: "Command groups for Cloud Spanner",
      loadSpec: "gcloud/spanner",
    },
    {
      name: "sql",
      description: "Create and manage Google Cloud SQL databases",
      loadSpec: "gcloud/sql",
    },
    {
      name: "storage",
      description: "Create and manage Cloud Storage buckets and objects",
      loadSpec: "gcloud/storage",
    },
    {
      name: "survey",
      description: "Invoke a customer satisfaction survey for Google Cloud CLI",
      loadSpec: "gcloud/survey",
    },
    {
      name: "tasks",
      description: "Manage Cloud Tasks queues and tasks",
      loadSpec: "gcloud/tasks",
    },
    {
      name: "telco-automation",
      description: "Manage Telco Automation resources",
      loadSpec: "gcloud/telco-automation",
    },
    {
      name: "topic",
      description: "Gcloud supplementary help",
      loadSpec: "gcloud/topic",
    },
    {
      name: "transcoder",
      description: "Manage Transcoder jobs and job templates",
      loadSpec: "gcloud/transcoder",
    },
    {
      name: "transfer",
      description: "Manage Transfer Service jobs, operations, and agents",
      loadSpec: "gcloud/transfer",
    },
    {
      name: "unlock",
      description: "Unlock secrets and surprises coming soon to Google Cloud",
      hidden: true,
      loadSpec: "gcloud/unlock",
    },
    {
      name: "vector-search",
      description: "Manage Vector Search data objects",
      loadSpec: "gcloud/vector-search",
    },
    {
      name: "version",
      description: "Print version information for Google Cloud CLI components",
      loadSpec: "gcloud/version",
    },
    {
      name: "vmware",
      description: "Manage Google Cloud VMware Engine resources",
      loadSpec: "gcloud/vmware",
    },
    {
      name: "workbench",
      description: "Workbench Command Group",
      loadSpec: "gcloud/workbench",
    },
    {
      name: "workflows",
      description: "Manage your Cloud Workflows resources",
      loadSpec: "gcloud/workflows",
    },
    {
      name: "workload-identity",
      description: "Manage Workload Identity",
      loadSpec: "gcloud/workload-identity",
    },
    {
      name: "workspace-add-ons",
      description: "Manage Google Workspace Add-ons resources",
      loadSpec: "gcloud/workspace-add-ons",
    },
    {
      name: "workstations",
      description: "Manage Cloud Workstations resources",
      loadSpec: "gcloud/workstations",
    },
  ],
  options: [
    {
      name: "--access-token-file",
      description:
        "A file path to read the access token. Use this flag to authenticate `gcloud` with an access token. The credentials of the active account (if exists) will be ignored. The file should only contain an access token with no other information. Overrides the default *auth/access_token_file* property value for this command invocation",
      args: {
        name: "ACCESS_TOKEN_FILE",
        description: "String",
        template: "filepaths",
      },
    },
    {
      name: "--account",
      description:
        "Google Cloud user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
      args: {
        name: "ACCOUNT",
        description: "String",
      },
    },
    {
      name: "--billing-project",
      description:
        "The Google Cloud project that will be charged quota for operations performed in `gcloud`. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
      args: {
        name: "BILLING_PROJECT",
        description: "String",
      },
    },
    {
      name: "--configuration",
      description:
        "File name of the configuration to use for this command invocation. For more information on how to use configurations, run: `gcloud topic configurations`. You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment variable to set the equivalent of this flag for a terminal session",
      args: {
        name: "CONFIGURATION",
        description: "String",
      },
    },
    {
      name: "--flags-file",
      description:
        "A YAML or JSON file that specifies a *--flag*:*value* dictionary. Useful for specifying complex flag values with special characters that work with any command interpreter. Additionally, each *--flags-file* arg is replaced by its constituent flags. See $ gcloud topic flags-file for more information",
      args: {
        name: "YAML_FILE",
        description: "String",
        template: "filepaths",
      },
    },
    {
      name: "--flatten",
      description:
        "Flatten _name_[] output resource slices in _KEY_ into separate records for each item in each slice. Multiple keys and slices may be specified. This also flattens keys for *--format* and *--filter*. For example, *--flatten=abc.def* flattens *abc.def[].ghi* references to *abc.def.ghi*. A resource record containing *abc.def[]* with N elements will expand to N records in the flattened output. This allows us to specify what `resource-key` the `filter` will operate on. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
      args: {
        name: "KEY",
        description: "List",
      },
    },
    {
      name: "--format",
      description:
        "Sets the format for printing command output resources. The default is a command-specific human-friendly output format. If both `core/format` and `--format` are specified, `--format` takes precedence. `--format` and `core/format` both take precedence over `core/default_format`. The supported formats are limited to: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats. Run `$ gcloud config set --help` to see more information about `core/format`",
      args: {
        name: "FORMAT",
        description: "String",
      },
    },
    {
      name: "--help",
      description: "Display detailed help",
    },
    {
      name: "--impersonate-service-account",
      description:
        "For this `gcloud` invocation, all API requests will be made as the given service account or target service account in an impersonation delegation chain instead of the currently selected account. You can specify either a single service account as the impersonator, or a comma-separated list of service accounts to create an impersonation delegation chain. The impersonation is done without needing to create, download, and activate a key for the service account or accounts",
      args: {
        name: "SERVICE_ACCOUNT_EMAILS",
        description: "String",
      },
    },
    {
      name: "--log-http",
      description:
        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
    },
    {
      name: "--project",
      description:
        "The Google Cloud project ID to use for this invocation. If omitted, then the current project is assumed; the current project can be listed using `gcloud config list --format='text(core.project)'` and can be set using `gcloud config set project PROJECTID`",
      args: {
        name: "PROJECT_ID",
        description: "String",
      },
    },
    {
      name: ["--quiet", "-q"],
      description:
        "Disable all interactive prompts when running `gcloud` commands. If input is required, defaults will be used, or an error will be raised",
    },
    {
      name: "--trace-token",
      description:
        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
      args: {
        name: "TRACE_TOKEN",
        description: "String",
      },
    },
    {
      name: "--user-output-enabled",
      description:
        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
    },
    {
      name: "--verbosity",
      description:
        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
      args: {
        name: "VERBOSITY",
        description: "String",
        suggestions: ["debug", "info", "warning", "error", "critical", "none"],
      },
    },
    {
      name: ["--version", "-v"],
      description:
        "Print version information and exit. This flag is only available at the global level",
    },
  ],
};

export default completionSpec;
