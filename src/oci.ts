// OCI CLI (oci-cli) v3.96.3 (PyPI oci-cli 3.96.3, released 2026-11-17, same version as Homebrew; checked 2026-11-20). Source: the oci-cli 3.96.3 wheel,
// read statically (nothing was executed): the click command tree (groups, commands, options, choices, required flags and the renames/removals done in
// the *_extended.py modules) rebuilt from services/*/src/*/generated/*.py, the *_extended.py files and oci_cli/cli_root.py, cross-checked against the
// shipped bin/*.psm1 completion modules and CHANGELOG.rst; regions from oci SDK 2.192.0. Every service is lazy-loaded from src/oci/<service>.ts.
// Limits: descriptions are shortened to the first sentence; parameter aliases that come from the user's oci_cli_rc (-c, -bn, ...) are left out;
// enum values are the CLI's own click choices, not live API values.
const ociRegions = [
  "ap-chuncheon-1",
  "ap-hyderabad-1",
  "ap-melbourne-1",
  "ap-mumbai-1",
  "ap-osaka-1",
  "ap-seoul-1",
  "ap-sydney-1",
  "ap-tokyo-1",
  "ca-montreal-1",
  "ca-toronto-1",
  "eu-amsterdam-1",
  "eu-frankfurt-1",
  "eu-zurich-1",
  "me-jeddah-1",
  "me-dubai-1",
  "sa-saopaulo-1",
  "uk-cardiff-1",
  "uk-london-1",
  "us-ashburn-1",
  "us-phoenix-1",
  "us-sanjose-1",
  "sa-vinhedo-1",
  "sa-santiago-1",
  "il-jerusalem-1",
  "eu-marseille-1",
  "ap-singapore-1",
  "me-abudhabi-1",
  "eu-milan-1",
  "eu-stockholm-1",
  "af-johannesburg-1",
  "eu-paris-1",
  "mx-queretaro-1",
  "eu-madrid-1",
  "us-chicago-1",
  "mx-monterrey-1",
  "us-saltlake-2",
  "sa-bogota-1",
  "sa-valparaiso-1",
  "ap-singapore-2",
  "me-riyadh-1",
  "ap-delhi-1",
  "ap-batam-1",
  "eu-madrid-3",
  "eu-turin-1",
  "ap-kulai-2",
  "af-casablanca-1",
  "us-langley-1",
  "us-luke-1",
  "us-gov-ashburn-1",
  "us-gov-chicago-1",
  "us-gov-phoenix-1",
  "uk-gov-london-1",
  "uk-gov-cardiff-1",
  "ap-chiyoda-1",
  "ap-ibaraki-1",
  "me-dcc-muscat-1",
  "me-ibri-1",
  "ap-dcc-canberra-1",
  "eu-dcc-milan-1",
  "eu-dcc-milan-2",
  "eu-dcc-dublin-2",
  "eu-dcc-rating-2",
  "eu-dcc-rating-1",
  "eu-dcc-dublin-1",
  "ap-dcc-gazipur-1",
  "eu-madrid-2",
  "eu-frankfurt-2",
  "eu-jovanovac-1",
  "me-dcc-doha-1",
  "me-alrayyan-1",
  "us-somerset-1",
  "us-thames-1",
  "eu-dcc-zurich-1",
  "eu-crissier-1",
  "me-abudhabi-3",
  "me-alain-1",
  "me-abudhabi-2",
  "me-abudhabi-4",
  "ap-seoul-2",
  "ap-suwon-1",
  "ap-chuncheon-2",
  "us-ashburn-2",
  "us-newark-1",
  "eu-budapest-1",
  "sa-riodejaneiro-1",
];
// Profiles are the [SECTION] names of the OCI config file (OCI_CLI_CONFIG_FILE or ~/.oci/config)
const ociProfileGenerator: Fig.Generator = {
  script: [
    "bash",
    "-c",
    'grep -E "^\\[.+\\]" "${OCI_CLI_CONFIG_FILE:-$HOME/.oci/config}" 2>/dev/null',
  ],
  postProcess: (out) =>
    out
      .split("\n")
      .map((line) => line.trim().replace(/^\[|\]$/g, ""))
      .filter((name) => name !== "")
      .map((name) => ({ name, icon: "👤" })),
};

const optProfileName: Fig.Option = {
  name: "--profile-name",
  description: "Name of the profile you are creating",
  args: { name: "profile-name" },
};
const completionSpec: Fig.Spec = {
  name: "oci",
  description: "Oracle Cloud Infrastructure command line interface",
  subcommands: [
    {
      name: "access-governance-cp",
      description: "Access Governance",
      loadSpec: "oci/access-governance-cp",
    },
    {
      name: "adm",
      description: "Application Dependency Management",
      loadSpec: "oci/adm",
    },
    {
      name: "ai",
      description: "OCI Language",
      loadSpec: "oci/ai",
    },
    {
      name: "ai-data-platform",
      description: "AiDataPlatform Control Plane",
      loadSpec: "oci/ai-data-platform",
    },
    {
      name: "ai-document",
      description: "Document Understanding",
      loadSpec: "oci/ai-document",
    },
    {
      name: "ai-vision",
      description: "Vision",
      loadSpec: "oci/ai-vision",
    },
    {
      name: "analytics",
      description: "Analytics",
      loadSpec: "oci/analytics",
    },
    {
      name: "announce",
      description: "Announcements Service",
      loadSpec: "oci/announce",
    },
    {
      name: "api-gateway",
      description: "API Gateway",
      loadSpec: "oci/api-gateway",
    },
    {
      name: "api-platform",
      description: "API Platform Control Plane",
      loadSpec: "oci/api-platform",
    },
    {
      name: "apiaccesscontrol",
      description: "Oracle API Access Control",
      loadSpec: "oci/apiaccesscontrol",
    },
    {
      name: "apm-config",
      description: "Application Performance Monitoring Configuration",
      loadSpec: "oci/apm-config",
    },
    {
      name: "apm-control-plane",
      description: "Application Performance Monitoring Control Plane",
      loadSpec: "oci/apm-control-plane",
    },
    {
      name: "apm-synthetics",
      description: "APM Availability Monitoring",
      loadSpec: "oci/apm-synthetics",
    },
    {
      name: "apm-traces",
      description: "Application Performance Monitoring Trace Explorer",
      loadSpec: "oci/apm-traces",
    },
    {
      name: "appmgmt-control",
      description: "Resource Discovery and Monitoring Control",
      loadSpec: "oci/appmgmt-control",
    },
    {
      name: "artifacts",
      description: "Artifacts and Container Images",
      loadSpec: "oci/artifacts",
    },
    {
      name: "audit",
      description: "Audit",
      loadSpec: "oci/audit",
    },
    {
      name: "autoscaling",
      description: "Autoscaling",
      loadSpec: "oci/autoscaling",
    },
    {
      name: "bastion",
      description: "Bastion",
      loadSpec: "oci/bastion",
    },
    {
      name: "batch",
      description: "Batch",
      loadSpec: "oci/batch",
    },
    {
      name: "bds",
      description: "Big Data Service",
      loadSpec: "oci/bds",
    },
    {
      name: "blockchain",
      description: "Blockchain Platform Control Plane",
      loadSpec: "oci/blockchain",
    },
    {
      name: "budgets",
      description: "Budgets",
      loadSpec: "oci/budgets",
    },
    {
      name: "bv",
      description: "Block Volume Service",
      loadSpec: "oci/bv",
    },
    {
      name: "capacity-management",
      description: "OCI Control Center Capacity Management",
      loadSpec: "oci/capacity-management",
    },
    {
      name: "ccc",
      description: "Compute Cloud@Customer",
      loadSpec: "oci/ccc",
    },
    {
      name: "ccd-offers",
      description: "Continuous Consumption Discounts",
      loadSpec: "oci/ccd-offers",
    },
    {
      name: "ce",
      description: "Kubernetes Engine",
      loadSpec: "oci/ce",
    },
    {
      name: "certificates",
      description: "Certificates Service Retrieval",
      loadSpec: "oci/certificates",
    },
    {
      name: "certs-mgmt",
      description: "Certificates Service Management",
      loadSpec: "oci/certs-mgmt",
    },
    {
      name: "cloud-bridge",
      description: "Oracle Cloud Bridge",
      loadSpec: "oci/cloud-bridge",
    },
    {
      name: "cloud-guard",
      description: "Cloud Guard and Security Zones",
      loadSpec: "oci/cloud-guard",
    },
    {
      name: "cloud-migrations",
      description: "Oracle Cloud Migrations",
      loadSpec: "oci/cloud-migrations",
    },
    {
      name: "cluster-health",
      description: "ITV Control Plane - Diagnosis Store",
      loadSpec: "oci/cluster-health",
    },
    {
      name: "compute",
      description: "Compute Service",
      loadSpec: "oci/compute",
    },
    {
      name: "compute-management",
      description: "Compute Management Service",
      loadSpec: "oci/compute-management",
    },
    {
      name: "container-instances",
      description: "Container Instance",
      loadSpec: "oci/container-instances",
    },
    {
      name: "container-registry",
      description: "Container Registry",
      loadSpec: "oci/container-registry",
    },
    {
      name: "costad",
      description: "CostAd",
      loadSpec: "oci/costad",
    },
    {
      name: "cpg",
      description: "Cluster Placement Groups",
      loadSpec: "oci/cpg",
    },
    {
      name: "dashboard-service",
      description: "Dashboards",
      loadSpec: "oci/dashboard-service",
    },
    {
      name: "data-catalog",
      description: "Data Catalog",
      loadSpec: "oci/data-catalog",
    },
    {
      name: "data-flow",
      description: "Data Flow",
      loadSpec: "oci/data-flow",
    },
    {
      name: "data-integration",
      description: "Data Integration",
      loadSpec: "oci/data-integration",
    },
    {
      name: "data-labeling-service",
      description: "Data Labeling Management",
      loadSpec: "oci/data-labeling-service",
    },
    {
      name: "data-labeling-service-dataplane",
      description: "Data Labeling",
      loadSpec: "oci/data-labeling-service-dataplane",
    },
    {
      name: "data-safe",
      description: "Data Safe",
      loadSpec: "oci/data-safe",
    },
    {
      name: "data-science",
      description: "Data Science",
      loadSpec: "oci/data-science",
    },
    {
      name: "database-management",
      description: "Database Management",
      loadSpec: "oci/database-management",
    },
    {
      name: "database-migration",
      description: "Database Migration",
      loadSpec: "oci/database-migration",
    },
    {
      name: "datacc",
      description: "Database Infrastructure Cloud@Customer Service",
      loadSpec: "oci/datacc",
    },
    {
      name: "db",
      description: "Database Service",
      loadSpec: "oci/db",
    },
    {
      name: "dblm",
      description: "Dblm",
      loadSpec: "oci/dblm",
    },
    {
      name: "dbmulticloud",
      description: "Oracle Database MultiCloud Data Plane Integration",
      loadSpec: "oci/dbmulticloud",
    },
    {
      name: "dbtools",
      description: "Database Tools",
      loadSpec: "oci/dbtools",
    },
    {
      name: "dbtools-runtime",
      description: "Database Tools Runtime",
      loadSpec: "oci/dbtools-runtime",
    },
    {
      name: "ddfs",
      description: "Device Data FHIR Service",
      loadSpec: "oci/ddfs",
    },
    {
      name: "delegate-access-control",
      description: "Oracle Delegate Access Control",
      loadSpec: "oci/delegate-access-control",
    },
    {
      name: "demand-signal",
      description: "OCI Control Center Demand Signal",
      loadSpec: "oci/demand-signal",
    },
    {
      name: "desktops",
      description: "Secure Desktops",
      loadSpec: "oci/desktops",
    },
    {
      name: "devops",
      description: "DevOps",
      loadSpec: "oci/devops",
    },
    {
      name: "dif",
      description: "DataIntelligences Control Plane",
      loadSpec: "oci/dif",
    },
    {
      name: "disaster-recovery",
      description: "Full Stack Disaster Recovery",
      loadSpec: "oci/disaster-recovery",
    },
    {
      name: "distributed-database",
      description: "Globally Distributed Database",
      loadSpec: "oci/distributed-database",
    },
    {
      name: "dns",
      description: "DNS",
      loadSpec: "oci/dns",
    },
    {
      name: "em-warehouse",
      description: "EM Warehouse",
      loadSpec: "oci/em-warehouse",
    },
    {
      name: "email",
      description: "Email Delivery",
      loadSpec: "oci/email",
    },
    {
      name: "email-data-plane",
      description: "Email Delivery Submission",
      loadSpec: "oci/email-data-plane",
    },
    {
      name: "events",
      description: "Events",
      loadSpec: "oci/events",
    },
    {
      name: "fleet-apps-management",
      description: "Fleet Application Management Service",
      loadSpec: "oci/fleet-apps-management",
    },
    {
      name: "fleet-software-update",
      description: "Exadata Fleet Update service",
      loadSpec: "oci/fleet-software-update",
    },
    {
      name: "fn",
      description: "Functions Service",
      loadSpec: "oci/fn",
    },
    {
      name: "fs",
      description: "File Storage",
      loadSpec: "oci/fs",
    },
    {
      name: "fusion-apps",
      description: "Fusion Applications Environment Management",
      loadSpec: "oci/fusion-apps",
    },
    {
      name: "gdp",
      description: "Guarded Data Pipelines",
      loadSpec: "oci/gdp",
    },
    {
      name: "generative-ai",
      description: "Generative AI Service Management",
      loadSpec: "oci/generative-ai",
    },
    {
      name: "generative-ai-agent",
      description: "Generative AI Agents Management",
      loadSpec: "oci/generative-ai-agent",
    },
    {
      name: "generative-ai-agent-runtime",
      description: "Generative AI Agents Client",
      loadSpec: "oci/generative-ai-agent-runtime",
    },
    {
      name: "generative-ai-data",
      description: "Generative AI Service NL2SQL",
      loadSpec: "oci/generative-ai-data",
    },
    {
      name: "generative-ai-inference",
      description: "Generative AI Service Inference",
      loadSpec: "oci/generative-ai-inference",
    },
    {
      name: "generative-ai-sandbox",
      description: "GenAI Sandbox",
      loadSpec: "oci/generative-ai-sandbox",
    },
    {
      name: "goldengate",
      description: "GoldenGate",
      loadSpec: "oci/goldengate",
    },
    {
      name: "governance-rules-control-plane",
      description: "GovernanceRulesControlPlane",
      loadSpec: "oci/governance-rules-control-plane",
    },
    {
      name: "health-checks",
      description: "Health Checks",
      loadSpec: "oci/health-checks",
    },
    {
      name: "iam",
      description: "Identity and Access Management Service",
      loadSpec: "oci/iam",
    },
    {
      name: "identity-domains",
      description: "Identity Domains",
      loadSpec: "oci/identity-domains",
    },
    {
      name: "instance-agent",
      description: "Compute Instance Agent Service",
      loadSpec: "oci/instance-agent",
    },
    {
      name: "integration",
      description: "Oracle Integration",
      loadSpec: "oci/integration",
    },
    {
      name: "iot",
      description: "Internet of Things",
      loadSpec: "oci/iot",
    },
    {
      name: "jms",
      description: "Java Management Service Fleets",
      loadSpec: "oci/jms",
    },
    {
      name: "jms-java-downloads",
      description: "Java Management Service Java Download",
      loadSpec: "oci/jms-java-downloads",
    },
    {
      name: "jms-utils",
      description: "Java Management Service Utilities",
      loadSpec: "oci/jms-utils",
    },
    {
      name: "kafka",
      description: "Oracle Streaming with Apache Kafka (OSAK)",
      loadSpec: "oci/kafka",
    },
    {
      name: "kms",
      description: "Vault Key Management",
      loadSpec: "oci/kms",
    },
    {
      name: "lb",
      description: "Load Balancing",
      loadSpec: "oci/lb",
    },
    {
      name: "lfs",
      description: "File Storage with Lustre",
      loadSpec: "oci/lfs",
    },
    {
      name: "license-manager",
      description: "License Manager",
      loadSpec: "oci/license-manager",
    },
    {
      name: "limits",
      description: "Service Limits",
      loadSpec: "oci/limits",
    },
    {
      name: "limits-increase",
      description: "Limits Increase",
      loadSpec: "oci/limits-increase",
    },
    {
      name: "log-analytics",
      description: "LogAnalytics",
      loadSpec: "oci/log-analytics",
    },
    {
      name: "logging",
      description: "Logging Management",
      loadSpec: "oci/logging",
    },
    {
      name: "logging-ingestion",
      description: "Logging Ingestion",
      loadSpec: "oci/logging-ingestion",
    },
    {
      name: "logging-search",
      description: "Logging Search",
      loadSpec: "oci/logging-search",
    },
    {
      name: "management-agent",
      description: "Management Agent",
      loadSpec: "oci/management-agent",
    },
    {
      name: "management-dashboard",
      description: "ManagementDashboard",
      loadSpec: "oci/management-dashboard",
    },
    {
      name: "marketplace",
      description: "Marketplace Service",
      loadSpec: "oci/marketplace",
    },
    {
      name: "marketplace-private-offer",
      description: "MarketplacePrivateOffer",
      loadSpec: "oci/marketplace-private-offer",
    },
    {
      name: "marketplace-publisher",
      description: "MarketplacePublisherService",
      loadSpec: "oci/marketplace-publisher",
    },
    {
      name: "media-services",
      description: "Media Services",
      loadSpec: "oci/media-services",
    },
    {
      name: "mngdmac",
      description: "OCI Managed Services for Mac",
      loadSpec: "oci/mngdmac",
    },
    {
      name: "model-deployment",
      description: "Model Deployment Data Plane",
      loadSpec: "oci/model-deployment",
    },
    {
      name: "monitoring",
      description: "Monitoring",
      loadSpec: "oci/monitoring",
    },
    {
      name: "multicloud",
      description: "Oracle Multicloud",
      loadSpec: "oci/multicloud",
    },
    {
      name: "mysql",
      description: "MySQL Database Service",
      loadSpec: "oci/mysql",
    },
    {
      name: "network",
      description: "Networking Service",
      loadSpec: "oci/network",
    },
    {
      name: "network-firewall",
      description: "Network Firewall",
      loadSpec: "oci/network-firewall",
    },
    {
      name: "nlb",
      description: "NetworkLoadBalancer",
      loadSpec: "oci/nlb",
    },
    {
      name: "nosql",
      description: "NoSQL Database",
      loadSpec: "oci/nosql",
    },
    {
      name: "occ",
      description: "OCI Control Center",
      loadSpec: "oci/occ",
    },
    {
      name: "oce",
      description: "Oracle Content and Experience",
      loadSpec: "oci/oce",
    },
    {
      name: "oci-product-catalog",
      description: "Product Catalog",
      loadSpec: "oci/oci-product-catalog",
    },
    {
      name: "ocvs",
      description: "Oracle Cloud VMware Solution",
      loadSpec: "oci/ocvs",
    },
    {
      name: "oda",
      description: "Digital Assistant Service Instance",
      loadSpec: "oci/oda",
    },
    {
      name: "oma",
      description: "Managed Access",
      loadSpec: "oci/oma",
    },
    {
      name: "onesubscription",
      description: "OneSubscription",
      loadSpec: "oci/onesubscription",
    },
    {
      name: "ons",
      description: "Notifications",
      loadSpec: "oci/ons",
    },
    {
      name: "opa",
      description: "Process Automation",
      loadSpec: "oci/opa",
    },
    {
      name: "opctl",
      description: "Operator Access Control",
      loadSpec: "oci/opctl",
    },
    {
      name: "opensearch",
      description: "OpenSearch Service",
      loadSpec: "oci/opensearch",
    },
    {
      name: "opsi",
      description: "Ops Insights",
      loadSpec: "oci/opsi",
    },
    {
      name: "optimizer",
      description: "Cloud Advisor",
      loadSpec: "oci/optimizer",
    },
    {
      name: "organizations",
      description: "Organizations",
      loadSpec: "oci/organizations",
    },
    {
      name: "os",
      description: "Object Storage Service",
      loadSpec: "oci/os",
    },
    {
      name: "os-management-hub",
      description: "OS Management Hub",
      loadSpec: "oci/os-management-hub",
    },
    {
      name: "osp-gateway",
      description: "OSP Gateway",
      loadSpec: "oci/osp-gateway",
    },
    {
      name: "osub-billing-schedule",
      description: "OneSubscription Billing Schedule",
      loadSpec: "oci/osub-billing-schedule",
    },
    {
      name: "osub-organization-subscription",
      description: "OneSubscription Gateway Organization's Subscription",
      loadSpec: "oci/osub-organization-subscription",
    },
    {
      name: "osub-subscription",
      description:
        "OneSubscription Subscription, Commitment and Rate Card Details",
      loadSpec: "oci/osub-subscription",
    },
    {
      name: "osub-usage",
      description: "OneSubscription Usage Computation",
      loadSpec: "oci/osub-usage",
    },
    {
      name: "psa",
      description: "PrivateServiceAccess Control Plane",
      loadSpec: "oci/psa",
    },
    {
      name: "psql",
      description: "PGSQL Control Plane",
      loadSpec: "oci/psql",
    },
    {
      name: "pss",
      description: "Public Safety and Security",
      loadSpec: "oci/pss",
    },
    {
      name: "queue",
      description: "Queue",
      loadSpec: "oci/queue",
    },
    {
      name: "recovery",
      description: "Oracle Database Autonomous Recovery Service",
      loadSpec: "oci/recovery",
    },
    {
      name: "redis",
      description: "OCI Cache",
      loadSpec: "oci/redis",
    },
    {
      name: "resource-analytics",
      description: "Resource Analytics",
      loadSpec: "oci/resource-analytics",
    },
    {
      name: "resource-manager",
      description: "Resource Manager",
      loadSpec: "oci/resource-manager",
    },
    {
      name: "resource-scheduler",
      description: "Resource Scheduler",
      loadSpec: "oci/resource-scheduler",
    },
    {
      name: "rover",
      description: "RoverCloudService",
      loadSpec: "oci/rover",
    },
    {
      name: "sch",
      description: "Connector Hub",
      loadSpec: "oci/sch",
    },
    {
      name: "search",
      description: "Search Service",
      loadSpec: "oci/search",
    },
    {
      name: "secrets",
      description: "Vault Secret Retrieval",
      loadSpec: "oci/secrets",
    },
    {
      name: "security-attribute",
      description: "Security Attribute",
      loadSpec: "oci/security-attribute",
    },
    {
      name: "self",
      description: "SELF Service",
      loadSpec: "oci/self",
    },
    {
      name: "service-catalog",
      description: "Service Catalog",
      loadSpec: "oci/service-catalog",
    },
    {
      name: "service-manager-proxy",
      description: "Service Manager Proxy",
      loadSpec: "oci/service-manager-proxy",
    },
    {
      name: "speech",
      description: "Speech",
      loadSpec: "oci/speech",
    },
    {
      name: "stack-monitoring",
      description: "Stack Monitoring",
      loadSpec: "oci/stack-monitoring",
    },
    {
      name: "streaming",
      description: "Streaming",
      loadSpec: "oci/streaming",
    },
    {
      name: "support",
      description: "Support Management",
      loadSpec: "oci/support",
    },
    {
      name: "threat-intelligence",
      description: "Threat Intelligence",
      loadSpec: "oci/threat-intelligence",
    },
    {
      name: "usage",
      description: "Usage Proxy",
      loadSpec: "oci/usage",
    },
    {
      name: "usage-api",
      description: "Usage",
      loadSpec: "oci/usage-api",
    },
    {
      name: "vault",
      description: "Vault Secret Management",
      loadSpec: "oci/vault",
    },
    {
      name: "vbstudio",
      description: "VbsControlplaneInstance",
      loadSpec: "oci/vbstudio",
    },
    {
      name: "visual-builder",
      description: "Visual Builder",
      loadSpec: "oci/visual-builder",
    },
    {
      name: "vn-monitoring",
      description: "Network Monitoring",
      loadSpec: "oci/vn-monitoring",
    },
    {
      name: "vulnerability-scanning",
      description: "Scanning",
      loadSpec: "oci/vulnerability-scanning",
    },
    {
      name: "waa",
      description: "Web Application Acceleration (WAA)",
      loadSpec: "oci/waa",
    },
    {
      name: "waas",
      description: "Web Application Acceleration and Security Services",
      loadSpec: "oci/waas",
    },
    {
      name: "waf",
      description: "Web Application Firewall (WAF)",
      loadSpec: "oci/waf",
    },
    {
      name: "wlms",
      description: "WebLogic Management Service",
      loadSpec: "oci/wlms",
    },
    {
      name: "work-requests",
      description: "Work Requests",
      loadSpec: "oci/work-requests",
    },
    {
      name: "zpr",
      description: "Zero Trust Packet Routing Control Plane",
      loadSpec: "oci/zpr",
    },
    {
      name: "setup",
      description: "Setup commands for CLI",
      subcommands: [
        {
          name: "keys",
          description: "Generates an API Signing RSA key pair",
          options: [
            {
              name: "--key-name",
              description: "A name for the API Signing key",
              args: { name: "key-name" },
            },
            {
              name: "--output-dir",
              description:
                "An optional directory to output the generated API Signing keys",
              args: { name: "output-dir", template: "folders" },
            },
            {
              name: "--passphrase",
              description:
                "An optional passphrase to encrypt the private API Signing key",
              args: { name: "passphrase" },
            },
            {
              name: "--passphrase-file",
              description:
                "An optional file with the first line specifying a passphrase to encrypt the API Signing private key",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--overwrite",
              description:
                "An option to overwrite existing files without a confirmation prompt",
            },
          ],
        },
        {
          name: "config",
          description: "Interactive script to generate oci config file",
        },
        {
          name: "instance-principal",
          description:
            "Interactive script to set up instance principal authentication for an existing compute instance",
        },
        {
          name: "oci-cli-rc",
          description:
            "Generates a oci_cli_rc file that can contain parameter default values and other configuration information",
          options: [
            {
              name: "--file",
              description:
                "The file into which default aliases and predefined queries will be loaded",
              args: { name: "file", template: "filepaths" },
            },
          ],
        },
        {
          name: "pkcs11-auth",
          description:
            "Interactive script to generate PKCS#11 authentication config",
          options: [
            optProfileName,
            {
              name: "--use-default-pkcs11-options",
              description:
                "Skip PKCS#11 selector prompts and rely on the SDK defaults, environment variables",
            },
            {
              name: "--user-ocid",
              description:
                "The OCID of the user to write to the PKCS#11 config profile",
              args: { name: "user-ocid" },
            },
            {
              name: "--tenancy-ocid",
              description:
                "The OCID of the tenancy to write to the PKCS#11 config profile",
              args: { name: "tenancy-ocid" },
            },
          ],
        },
        {
          name: "autocomplete",
          description:
            "Interactive script to set up tab completion for commands and parameters",
        },
        {
          name: "repair-file-permissions",
          description:
            "Resets permissions on a given file to an appropriate access level for sensitive files",
          options: [
            {
              name: "--file",
              description: "The file to repair permissions on",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
          ],
        },
        {
          name: "find-installations",
          description:
            "Finds and lists locations of all default OCI CLI installs",
        },
        {
          name: "bootstrap",
          options: [
            optProfileName,
            {
              name: "--config-location",
              description: "Path to the config for the new profile",
              args: { name: "config-location" },
            },
          ],
        },
      ],
    },
    {
      name: "session",
      description: "Session commands for CLI",
      subcommands: [
        {
          name: "authenticate",
          description:
            "Creates a CLI session using a browser based login flow. --region is a required argument",
          options: [
            { name: "--region", args: { name: "region" } },
            {
              name: "--tenancy-name",
              description: "Name of the tenancy",
              args: { name: "tenancy-name" },
            },
            {
              name: "--identity-provider-name",
              description: "Name of the IdP (Identity Provider)",
              args: { name: "identity-provider-name" },
            },
            {
              name: "--no-browser",
              description:
                "Triggers user authentication without requiring interactive browser login",
            },
            {
              name: "--public-key-file-path",
              description:
                "Full path of the public key PEM file that corresponds to the RSA key pair used for signing requests",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--session-expiration-in-minutes",
              description:
                "User session expiration in minutes to which the requested user principal session token (UPST) is bounded",
              args: { name: "session-expiration-in-minutes" },
            },
            {
              name: "--token-location",
              description:
                "Provide the directory where you would like to store token and private/public key",
              args: { name: "token-location" },
            },
            optProfileName,
            {
              name: "--config-location",
              description: "Path to the config for the new session",
              args: { name: "config-location" },
            },
            {
              name: "--use-passphrase",
              description:
                "Provide a passphrase to be used to encrypt the private key from the generated key pair",
            },
          ],
        },
        {
          name: "validate",
          description: "Tests whether a CLI session is still valid",
          options: [
            {
              name: "--local",
              description:
                "Only perform local validation of session by checking expiry time",
            },
          ],
        },
        {
          name: "terminate",
          description:
            "Terminates a CLI session by removing the entry from the config and removing all referenced resources",
        },
        {
          name: "refresh",
          description: "Refreshes a CLI session",
        },
        {
          name: "export",
          description: "Exports a CLI session into a zip that can be imported",
          options: [
            {
              name: "--output-file",
              description:
                "The name of the export file to create, including the path, minus any format-specific extension",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--force",
              description:
                "If the ouptut zip already exists, overwrite the existing zip without a confirmation prompt",
            },
          ],
        },
        {
          name: "import",
          description: "Imports a CLI session from an archive",
          options: [
            {
              name: "--session-archive",
              description: "The session archive to import",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--force",
              description:
                "If the profile being imported already exists, overwrite the existing profile without a confirmation prompt",
            },
          ],
        },
      ],
    },
    {
      name: "raw-request",
      description:
        "Makes a raw request against an OCI service based on a provided URI, HTTP method and payload",
      options: [
        {
          name: "--target-uri",
          description: "The URI to make the request against",
          args: { name: "target-uri" },
          isRequired: true,
        },
        {
          name: "--http-method",
          description: "The HTTP method to use",
          args: {
            suggestions: ["DELETE", "GET", "HEAD", "POST", "PUT", "PATCH"],
          },
          isRequired: true,
        },
        {
          name: "--request-body",
          description: "Data to send in the body of the request",
          args: { name: "json" },
        },
        {
          name: "--request-headers",
          description: "Additional headers to send as part of the request",
          args: { name: "json" },
        },
      ],
    },
    {
      name: "profile",
      description: "Inspect local OCI CLI profiles",
      subcommands: [
        {
          name: "list",
          description: "List profiles in the effective OCI CLI config file",
        },
        {
          name: "current",
          description:
            "Show the active profile from the effective OCI CLI config file",
        },
        {
          name: "diagnose",
          description: "Diagnose local OCI CLI profile configuration",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--version", "-v"],
      description: "Show the version and exit",
      isPersistent: true,
    },
    {
      name: ["--help", "-h", "-?"],
      description: "Show help for the oci command or subcommand",
      isPersistent: true,
    },
    {
      name: "--release-info",
      description:
        "Prints ChangeLog difference between current installed version and latest released version",
      isPersistent: true,
    },
    {
      name: "--latest-version",
      description: "Prints latest released version",
      isPersistent: true,
    },
    {
      name: "--config-file",
      description: "The path to the config file",
      args: { name: "file", default: "~/.oci/config", template: "filepaths" },
      isPersistent: true,
    },
    {
      name: "--profile",
      description: "The profile in the config file to load",
      args: {
        name: "profile",
        default: "DEFAULT",
        generators: ociProfileGenerator,
      },
      isPersistent: true,
    },
    {
      name: ["--cli-rc-file", "--defaults-file"],
      description:
        "The path to the OCI CLI-specific configuration file (--defaults-file is deprecated)",
      args: {
        name: "file",
        default: "~/.oci/oci_cli_rc",
        template: "filepaths",
      },
      isPersistent: true,
    },
    {
      name: ["--opc-request-id", "--opc-client-request-id", "--request-id"],
      description: "The request id to use for tracking the request",
      args: { name: "id" },
      isPersistent: true,
    },
    {
      name: "--region",
      description: "The region to make calls against",
      args: { name: "region", suggestions: ociRegions },
      isPersistent: true,
    },
    {
      name: "--endpoint",
      description:
        "The service endpoint to use, including any required API version path (overrides the default endpoint)",
      args: { name: "url" },
      isPersistent: true,
    },
    {
      name: "--realm-specific-endpoint",
      description:
        "Use a realm-specific endpoint, instead of the default region-wide endpoint",
      isPersistent: true,
    },
    {
      name: "--connection-timeout",
      description:
        "The connection timeout in seconds when connecting to services (default 10)",
      args: { name: "seconds" },
      isPersistent: true,
    },
    {
      name: "--enable-dual-stack",
      description: "Enable dual stack support",
      isPersistent: true,
    },
    {
      name: "--federation-endpoint",
      description:
        "The full federation endpoint to use with --auth instance_principal",
      args: { name: "url" },
      isPersistent: true,
    },
    {
      name: "--read-timeout",
      description:
        "The read timeout in seconds when waiting for service responses (default 60)",
      args: { name: "seconds" },
      isPersistent: true,
    },
    {
      name: "--cert-bundle",
      description:
        "The full path to a CA certificate bundle to be used for SSL verification",
      args: { name: "file", template: "filepaths" },
      isPersistent: true,
    },
    {
      name: "--output",
      description: "The output format (default json)",
      args: { name: "format", suggestions: ["json", "table"] },
      isPersistent: true,
    },
    {
      name: "--query",
      description: "JMESPath query to run on the response JSON before output",
      args: { name: "jmespath" },
      isPersistent: true,
    },
    {
      name: "--raw-output",
      description:
        "If the output of a given query is a single string value, this will return the string without surrounding quotes",
      isPersistent: true,
    },
    {
      name: "--auth",
      description: "The type of auth to use for the API request",
      args: { name: "auth", suggestions: [] },
      isPersistent: true,
    },
    {
      name: "--auth-purpose",
      description:
        "The auth purpose which can be used in conjunction with --auth",
      args: { name: "purpose" },
      isPersistent: true,
    },
    {
      name: "--generate-full-command-json-input",
      description:
        "Print a JSON skeleton with all options of the command, for use with --from-json",
      isPersistent: true,
    },
    {
      name: "--generate-param-json-input",
      description:
        "Print a JSON skeleton for a single complex option of the command",
      args: { name: "option" },
      isPersistent: true,
    },
    {
      name: "--proxy",
      description: "The proxy server to use for HTTP requests",
      args: { name: "url" },
      isPersistent: true,
    },
    {
      name: "--no-retry",
      description: "Disable retry logic for calls to services",
      isPersistent: true,
    },
    {
      name: "--max-retries",
      description: "Maximum number of retry calls to make to the service",
      args: { name: "integer" },
      isPersistent: true,
    },
    {
      name: ["--debug", "-d"],
      description: "Show additional debug information",
      isPersistent: true,
    },
    {
      name: ["--cli-auto-prompt", "-i"],
      description:
        "Use the interactive features for autocompletion and quick view of command reference",
      isPersistent: true,
    },
    {
      name: "--enable-propagation",
      description: "Enable propagation of opc-request-id",
      args: { name: "boolean", suggestions: ["True", "False"] },
      isPersistent: true,
    },
  ],
};

export default completionSpec;
