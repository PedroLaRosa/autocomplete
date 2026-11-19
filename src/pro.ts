// Ubuntu Pro Client (pro) v38 (ubuntu-advantage-tools 38ubuntu0~26.04 in resolute-updates and 38ubuntu0 in stonking; upstream canonical/ubuntu-pro-client main, 2026-11-19).
// Source: static read of uaclient/cli/*.py, uaclient/messages, uaclient/entitlements, uaclient/api/api.py,
// debian/ubuntu-pro-client.bash-completion and ubuntu-advantage.1 from a shallow clone (nothing was executed; the
// binary was not run). `ua` and `ubuntu-advantage` are installed as links to the same program (src/ua.ts, src/ubuntu-advantage.ts).

const formatOption = (
  choices: string[],
  defaultFormat: string
): Fig.Option => ({
  name: "--format",
  description: `Output in the specified format (default: ${defaultFormat})`,
  args: {
    name: "format",
    suggestions: choices,
  },
});

const assumeYesOption = (command: string): Fig.Option => ({
  name: "--assume-yes",
  description: `Do not prompt for confirmation before performing the ${command}`,
});

const services: Fig.Suggestion[] = [
  { name: "anbox-cloud", description: "Scalable Android in the cloud" },
  {
    name: "cc-eal",
    description: "Common Criteria EAL2 Provisioning Packages",
  },
  { name: "cis", description: "Security compliance and audit tools" },
  {
    name: "esm-apps",
    description: "Expanded Security Maintenance for Applications",
  },
  {
    name: "esm-apps-legacy",
    description:
      "Expanded Security Maintenance for Applications on Legacy Instances",
  },
  {
    name: "esm-infra",
    description: "Expanded Security Maintenance for Infrastructure",
  },
  {
    name: "esm-infra-legacy",
    description:
      "Expanded Security Maintenance for Infrastructure on Legacy Instances",
  },
  { name: "fips", description: "NIST-certified FIPS crypto packages" },
  {
    name: "fips-preview",
    description:
      "Preview of FIPS crypto packages undergoing certification with NIST",
  },
  {
    name: "fips-updates",
    description: "FIPS compliant crypto packages with stable security updates",
  },
  {
    name: "landscape",
    description: "Management and administration tool for Ubuntu",
  },
  { name: "livepatch", description: "Canonical Livepatch service" },
  {
    name: "realtime-kernel",
    description: "Ubuntu kernel with PREEMPT_RT patches integrated",
  },
  {
    name: "ros",
    description: "Security Updates for the Robot Operating System",
  },
  {
    name: "ros-updates",
    description: "All Updates for the Robot Operating System",
  },
  {
    name: "usg",
    description: "Ubuntu Security Guide (alternative name of cis)",
  },
];

const configKeys: Fig.Suggestion[] = [
  { name: "http_proxy", description: "HTTP proxy for Pro client requests" },
  { name: "https_proxy", description: "HTTPS proxy for Pro client requests" },
  {
    name: "apt_http_proxy",
    description: "Use global_apt_http_proxy instead",
    deprecated: true,
  },
  {
    name: "apt_https_proxy",
    description: "Use global_apt_https_proxy instead",
    deprecated: true,
  },
  {
    name: "ua_apt_http_proxy",
    description: "APT HTTP proxy limited to Ubuntu Pro resources",
  },
  {
    name: "ua_apt_https_proxy",
    description: "APT HTTPS proxy limited to Ubuntu Pro resources",
  },
  {
    name: "global_apt_http_proxy",
    description: "APT HTTP proxy for all resources",
  },
  {
    name: "global_apt_https_proxy",
    description: "APT HTTPS proxy for all resources",
  },
  {
    name: "update_messaging_timer",
    description: "Interval in seconds of the APT and MOTD messaging job",
  },
  {
    name: "metering_timer",
    description: "Interval in seconds of the metering job",
  },
  { name: "apt_news", description: "Show APT news messages (true or false)" },
  { name: "apt_news_url", description: "URL APT news is read from" },
  {
    name: "vulnerability_data_url_prefix",
    description: "URL prefix vulnerability data is downloaded from",
  },
  {
    name: "lxd_guest_attach",
    description: "LXD guest attach mode (on, off or available)",
  },
];

const completionSpec: Fig.Spec = {
  name: "pro",
  description: "Manage Ubuntu Pro services from Canonical",
  subcommands: [
    {
      name: "api",
      description: "Calls the Client API endpoints",
      options: [
        {
          name: "--show-progress",
          description:
            "For endpoints that support progress updates, show each progress update on a new line in JSON format",
        },
        {
          name: "--args",
          description:
            "Options to pass to the API endpoint, formatted as key=value",
          args: {
            name: "key=value",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "--data",
          description: "Arguments in JSON format to the API endpoint",
          args: {
            name: "json",
          },
        },
      ],
      args: {
        name: "endpoint",
        description: "API endpoint to call",
        suggestions: [
          "u.pro.version.v1",
          "u.pro.attach.auto.configure_retry_service.v1",
          "u.pro.attach.auto.full_auto_attach.v1",
          "u.pro.attach.auto.should_auto_attach.v1",
          "u.pro.attach.guest.get_guest_token.v1",
          "u.pro.attach.magic.initiate.v1",
          "u.pro.attach.magic.revoke.v1",
          "u.pro.attach.magic.wait.v1",
          "u.pro.attach.token.full_token_attach.v1",
          "u.pro.detach.v1",
          "u.pro.packages.summary.v1",
          "u.pro.packages.updates.v1",
          "u.pro.security.cves.v1",
          "u.pro.security.fix.cve.execute.v1",
          "u.pro.security.fix.cve.plan.v1",
          "u.pro.security.fix.usn.execute.v1",
          "u.pro.security.fix.usn.plan.v1",
          "u.pro.security.status.livepatch_cves.v1",
          "u.pro.security.status.reboot_required.v1",
          "u.pro.services.dependencies.v1",
          "u.pro.services.disable.v1",
          "u.pro.services.enable.v1",
          "u.pro.status.enabled_services.v1",
          "u.pro.status.is_attached.v1",
          "u.apt_news.current_news.v1",
          "u.security.package_manifest.v1",
          "u.unattended_upgrades.status.v1",
        ],
      },
    },
    {
      name: "attach",
      description: "Attach this machine to an Ubuntu Pro subscription",
      options: [
        {
          name: "--no-auto-enable",
          description: "Do not enable any recommended services automatically",
        },
        {
          name: "--attach-config",
          description:
            "Use the provided attach config file instead of passing the token on the cli",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        formatOption(["cli", "json"], "cli"),
      ],
      args: {
        name: "token",
        isOptional: true,
        description: "Token obtained for Ubuntu Pro authentication",
      },
    },
    {
      name: "auto-attach",
      description: "Automatically attach on supported platforms",
    },
    {
      name: "collect-logs",
      description: "Collect Pro logs and debug information",
      options: [
        {
          name: ["-o", "--output"],
          description:
            "Tarball where the logs will be stored (defaults to ./pro_logs.tar.gz)",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "config",
      description: "Manage Ubuntu Pro configuration on this machine",
      subcommands: [
        {
          name: "show",
          description: "Show customizable configuration settings",
          args: {
            name: "key",
            description: "Optional key to show configuration settings for",
            isOptional: true,
            suggestions: configKeys,
          },
        },
        {
          name: "set",
          description: "Set and apply Ubuntu Pro configuration settings",
          args: {
            name: "key=value",
            description: "Key=value pair to configure for Ubuntu Pro services",
            suggestions: configKeys.map((key) => ({
              ...key,
              name: `${key.name}=`,
            })),
          },
        },
        {
          name: "unset",
          description:
            "Unset an Ubuntu Pro configuration setting, restoring the default value",
          args: {
            name: "key",
            description: "Configuration key to unset from Ubuntu Pro services",
            suggestions: configKeys,
          },
        },
      ],
    },
    {
      name: "cve",
      description: "Show information about a CVE",
      args: {
        name: "cve",
        description:
          "CVE to display information. Format: CVE-yyyy-nnnn or CVE-yyyy-nnnnnnn",
      },
    },
    {
      name: "cves",
      description: "List the vulnerabilities that affect the system",
      options: [
        {
          name: "--unfixable",
          description: "List only vulnerabilities without a fix available",
        },
        {
          name: "--fixable",
          description: "List only vulnerabilities with a fix available",
        },
      ],
    },
    {
      name: "detach",
      description: "Remove this machine from an Ubuntu Pro subscription",
      isDangerous: true,
      options: [
        assumeYesOption("detach"),
        formatOption(["cli", "json"], "cli"),
      ],
    },
    {
      name: "disable",
      description: "Disable a specific Ubuntu Pro service on this machine",
      options: [
        assumeYesOption("disable"),
        formatOption(["cli", "json"], "cli"),
        {
          name: "--purge",
          description:
            "Disable the service and remove/downgrade related packages (experimental)",
        },
      ],
      args: {
        name: "service",
        description: "The name(s) of the Ubuntu Pro services to disable",
        isVariadic: true,
        suggestions: services,
      },
    },
    {
      name: "enable",
      description: "Enable a specific Ubuntu Pro service on this machine",
      options: [
        {
          name: "--access-only",
          description:
            "Do not auto-install packages. Valid for cc-eal, cis and realtime-kernel",
        },
        assumeYesOption("enable"),
        {
          name: "--auto",
          description: "Enable all default services",
        },
        {
          name: "--beta",
          description: "Allow beta service to be enabled",
        },
        formatOption(["cli", "json"], "cli"),
        {
          name: "--variant",
          description:
            "The name of the variant to use when enabling the service",
          args: {
            name: "variant",
            suggestions: [
              {
                name: "generic",
                description: "Generic realtime-kernel variant",
              },
              {
                name: "nvidia-tegra",
                description: "Realtime-kernel variant for NVIDIA Tegra",
              },
              {
                name: "raspi",
                description: "Realtime-kernel variant for Raspberry Pi",
              },
              {
                name: "intel-iotg",
                description: "Realtime-kernel variant for Intel IOTG",
              },
            ],
          },
        },
      ],
      args: {
        name: "service",
        description: "The name(s) of the Ubuntu Pro services to enable",
        isOptional: true,
        isVariadic: true,
        suggestions: services,
      },
    },
    {
      name: "fix",
      description:
        "Check for and mitigate the impact of a CVE/USN on this system",
      options: [
        {
          name: "--dry-run",
          description:
            "If used, fix will not actually run but will display everything that will happen on the machine during the command",
        },
        {
          name: "--no-related",
          description:
            "If used, when fixing a USN, the command will not try to also fix related USNs to the target USN",
        },
      ],
      args: {
        name: "security issue",
        description:
          "Security vulnerability ID to inspect and resolve on this system. Format: CVE-yyyy-nnnn, CVE-yyyy-nnnnnnn or USN-nnnn-dd",
      },
    },
    {
      name: "help",
      description: "Show detailed information about Ubuntu Pro services",
      options: [
        formatOption(["tabular", "json", "yaml"], "tabular"),
        {
          name: "--all",
          description: "Include beta services",
        },
      ],
      args: {
        name: "service",
        description: "A service to view help output for",
        isOptional: true,
        suggestions: services,
      },
    },
    {
      name: "refresh",
      description: "Refresh Ubuntu Pro services",
      args: {
        name: "target",
        description: "Target to refresh",
        isOptional: true,
        suggestions: [
          {
            name: "contract",
            description: "Update contract details from the server",
          },
          { name: "config", description: "Reload the config file" },
          {
            name: "messages",
            description: "Update APT and MOTD messages related to Pro",
          },
        ],
      },
    },
    {
      name: "security-status",
      description: "List available security updates for the system",
      options: [
        formatOption(["json", "yaml", "text"], "text"),
        {
          name: "--thirdparty",
          description:
            "List and present information about third-party packages",
          exclusiveOn: ["--unavailable", "--esm-infra", "--esm-apps"],
        },
        {
          name: "--unavailable",
          description:
            "List and present information about unavailable packages",
          exclusiveOn: ["--thirdparty", "--esm-infra", "--esm-apps"],
        },
        {
          name: "--esm-infra",
          description: "List and present information about esm-infra packages",
          exclusiveOn: ["--thirdparty", "--unavailable", "--esm-apps"],
        },
        {
          name: "--esm-apps",
          description: "List and present information about esm-apps packages",
          exclusiveOn: ["--thirdparty", "--unavailable", "--esm-infra"],
        },
      ],
    },
    {
      name: "status",
      description: "Current status of all Ubuntu Pro services",
      options: [
        {
          name: "--wait",
          description: "Block waiting on pro to complete",
        },
        formatOption(["tabular", "json", "yaml"], "tabular"),
        {
          name: "--simulate-with-token",
          description: "Simulate the output status using a provided token",
          args: {
            name: "token",
          },
        },
        {
          name: "--all",
          description: "Include unavailable and beta services",
        },
      ],
    },
    {
      name: "system",
      description: "Show system information related to Pro services",
      subcommands: [
        {
          name: "reboot-required",
          description: "Does the system need to be rebooted",
        },
      ],
    },
    {
      name: "version",
      description: "Show version of pro",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Displays help on pro and command line options",
      isPersistent: true,
    },
    {
      name: "--debug",
      description: "Show all debug log messages to console",
    },
    {
      name: "--version",
      description: "Show version of pro",
    },
  ],
};
export default completionSpec;
