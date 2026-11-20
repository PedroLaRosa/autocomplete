// Vultr CLI v3.11.0 (GitHub tag v3.11.0 = Go proxy @latest = Homebrew formula, released 2026-08-07; synced 2026-11-20).
// Source: command tree extracted statically (Go AST) from the cobra definitions in cmd/**/*.go at tag v3.11.0
// (command Use/Short/Aliases, flag definitions, required/mutually-exclusive flag groups); binary not run.
// Enum suggestions come from the flag help texts. Cobra's built-in completion/help commands added by hand.

const instanceId: Fig.Arg = {
  name: "Instance ID",
  generators: {
    script: ["vultr-cli", "instance", "list", "-o", "json"],
    postProcess: (output) => {
      try {
        const { instances } = JSON.parse(output) as {
          instances?: { id: string; label?: string; main_ip?: string }[];
        };
        return (instances ?? []).map((instance) => ({
          name: instance.id,
          description: instance.label || instance.main_ip,
        }));
      } catch {
        return [];
      }
    },
  },
};

const paging: Fig.Option[] = [
  {
    name: ["--cursor", "-c"],
    description: "Cursor for paging",
    args: {
      name: "cursor",
    },
  },
  {
    name: ["--per-page", "-p"],
    description:
      "Number of items requested per page. Default is 100 and Max is 500",
    args: {
      name: "per-page",
    },
  },
];

const imageNameOption: Fig.Option = {
  name: ["--image-name", "-i"],
  description: "The name of the image/repo",
  isRequired: true,
  args: {
    name: "image-name",
  },
};

const blockAiOption: Fig.Option = {
  name: ["--block-ai", "-i"],
  description: "Block ai bots",
};

const blockBadBotsOption: Fig.Option = {
  name: ["--block-bad-bots", "-t"],
  description: "Block potentially malicious bots",
};

const noDescriptionsOption: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const corsOption: Fig.Option = {
  name: ["--cors", "-r"],
  description: "Enable cross-origin resource sharing",
};

const gzipOption: Fig.Option = {
  name: ["--gzip", "-g"],
  description: "Enable gzip compression",
};

const bareMetalIdArg: Fig.Arg = {
  name: "Bare Metal ID",
};

const blockStorageIdArg: Fig.Arg = {
  name: "Block Storage ID",
};

const clientIdArg: Fig.Arg = {
  name: "Client ID",
};

const clusterIdArg: Fig.Arg = {
  name: "Cluster ID",
};

const connectorNameArg: Fig.Arg = {
  name: "Connector Name",
};

const databaseIdArg: Fig.Arg = {
  name: "Database ID",
};

const domainNameArg: Fig.Arg = {
  name: "Domain Name",
};

const firewallGroupIdArg: Fig.Arg = {
  name: "Firewall Group ID",
};

const firewallRuleIdArg: Fig.Arg = {
  name: "Firewall Rule ID",
};

const ipv4AddressArg: Fig.Arg = {
  name: "IPv4 Address",
};

const imageIdArg: Fig.Arg = {
  name: "Image ID",
};

const inferenceIdArg: Fig.Arg = {
  name: "Inference ID",
};

const loadBalancerIdArg: Fig.Arg = {
  name: "Load Balancer ID",
};

const natGatewayIdArg: Fig.Arg = {
  name: "NAT Gateway ID",
};

const nodePoolIdArg: Fig.Arg = {
  name: "Node Pool ID",
};

const objectStorageIdArg: Fig.Arg = {
  name: "Object Storage ID",
};

const poolNameArg: Fig.Arg = {
  name: "Pool Name",
};

const portForwardingRuleIdArg: Fig.Arg = {
  name: "Port Forwarding Rule ID",
};

const recordIdArg: Fig.Arg = {
  name: "Record ID",
};

const registryIdArg: Fig.Arg = {
  name: "Registry ID",
};

const reservedIpIdArg: Fig.Arg = {
  name: "Reserved IP ID",
};

const ruleIdArg: Fig.Arg = {
  name: "Rule ID",
};

const scriptIdArg: Fig.Arg = {
  name: "Script ID",
};

const topicNameArg: Fig.Arg = {
  name: "Topic Name",
};

const userIdArg: Fig.Arg = {
  name: "User ID",
};

const userNameArg: Fig.Arg = {
  name: "User Name",
};

const vpcIdArg: Fig.Arg = {
  name: "VPC ID",
};

const zoneIdArg: Fig.Arg = {
  name: "Zone ID",
};

const completionSpec: Fig.Spec = {
  name: "vultr-cli",
  description: "Official command line interface for the Vultr API",
  icon: "https://www.vultr.com/favicon/favicon-32x32.png",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for command",
      isPersistent: true,
    },
    {
      name: "--config",
      description: "Path to the config file",
      isPersistent: true,
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: ["--output", "-o"],
      description: "Output format",
      isPersistent: true,
      args: {
        name: "output",
        suggestions: ["text", "json", "yaml"],
      },
    },
  ],
  subcommands: [
    {
      name: "account",
      description: "Commands related to account information",
      subcommands: [
        {
          name: "bandwidth",
          description: "Display account bandwidth",
        },
        {
          name: "info",
          description: "Display account information",
        },
      ],
    },
    {
      name: ["apps", "a", "application", "applications", "app"],
      description: "Display applications",
      subcommands: [
        {
          name: ["list", "l"],
          description: "List available applications",
          options: paging,
        },
      ],
    },
    {
      name: ["backups", "backup", "b"],
      description: "Display backups",
      subcommands: [
        {
          name: "get",
          description: "Get a backup",
          args: {
            name: "Backup ID",
          },
        },
        {
          name: ["list", "l"],
          description: "List all backups",
          options: paging,
        },
      ],
    },
    {
      name: ["bare-metal", "bm"],
      description: "Commands to manage bare metal servers",
      subcommands: [
        {
          name: ["app", "a", "application"],
          description: "Commands to modify applications on a bare metal server",
          subcommands: [
            {
              name: ["change", "c"],
              description: "Change a bare metal server application",
              args: bareMetalIdArg,
              options: [
                {
                  name: ["--app", "-a"],
                  description:
                    "ID of the application that will be installed on the server",
                  isRequired: true,
                  args: {
                    name: "app",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List available apps for a bare metal server",
              args: bareMetalIdArg,
            },
          ],
        },
        {
          name: ["bandwidth", "b"],
          description: "Get a bare metal server's bandwidth usage",
          args: bareMetalIdArg,
        },
        {
          name: ["create", "c"],
          description: "Create a bare metal server",
          options: [
            {
              name: ["--app", "-a"],
              description:
                "ID of the application that will be installed on the server",
              exclusiveOn: ["--snapshot", "--os", "--image"],
              args: {
                name: "app",
              },
            },
            {
              name: ["--hostname", "-m"],
              description: "The hostname to assign to the server",
              args: {
                name: "hostname",
              },
            },
            {
              name: "--image",
              description:
                "Image ID of the application that will be installed on the server",
              exclusiveOn: ["--app", "--snapshot", "--os"],
              args: {
                name: "image",
              },
            },
            {
              name: ["--ipv6", "-i"],
              description:
                "Whether IPv6 is enabled on the server. Possible values: 'yes', 'no'. Defaults to 'no'",
              args: {
                name: "ipv6",
                suggestions: ["yes", "no"],
              },
            },
            {
              name: ["--label", "-l"],
              description: "The label to assign to the server",
              args: {
                name: "label",
              },
            },
            {
              name: "--mdisk_mode",
              description:
                "The raid configuration to use when provisioning this server. Possible values: 'raid1', 'jbod', 'none'. Defaults to 'none'",
              args: {
                name: "mdisk_mode",
                suggestions: ["raid1", "jbod", "none"],
              },
            },
            {
              name: ["--notify", "-n"],
              description:
                "Whether an activation email will be sent when the server is ready. Possible values: 'yes', 'no'. Defaults to 'yes'",
              args: {
                name: "notify",
                suggestions: ["yes", "no"],
              },
            },
            {
              name: "--os",
              description:
                "ID of the operating system that will be installed on the server",
              exclusiveOn: ["--app", "--snapshot", "--image"],
              args: {
                name: "os",
              },
            },
            {
              name: ["--persistent_pxe", "-x"],
              description: "Enable persistent PXE",
            },
            {
              name: ["--plan", "-p"],
              description: "ID of the plan that the server will subscribe to",
              isRequired: true,
              args: {
                name: "plan",
              },
            },
            {
              name: ["--region", "-r"],
              description: "ID of the region where the server will be created",
              isRequired: true,
              args: {
                name: "region",
              },
            },
            {
              name: ["--ripv4", "-v"],
              description:
                "IP address of the floating IP to use as the main IP of this server",
              args: {
                name: "ripv4",
              },
            },
            {
              name: ["--script", "-s"],
              description:
                "ID of the startup script that will run after the server is created",
              args: {
                name: "script",
              },
            },
            {
              name: "--snapshot",
              description:
                "ID of the snapshot that the server will be restored from",
              exclusiveOn: ["--app", "--os", "--image"],
              args: {
                name: "snapshot",
              },
            },
            {
              name: ["--ssh", "-k"],
              description:
                "Comma separated list of SSH key IDs that will be added to the server",
              isRepeatable: true,
              args: {
                name: "ssh",
              },
            },
            {
              name: ["--tag", "-t"],
              description:
                "The tag to assign to the server (deprecated, use --tags)",
              deprecated: true,
              args: {
                name: "tag",
              },
            },
            {
              name: "--tags",
              description:
                "A comma separated list of tags to assign to the server",
              isRepeatable: true,
              args: {
                name: "tags",
              },
            },
            {
              name: ["--userdata", "-u"],
              description: "Plain text used for the server user data",
              exclusiveOn: ["--userdata-file"],
              args: {
                name: "userdata",
              },
            },
            {
              name: "--userdata-file",
              description: "File path to read in for the user data",
              exclusiveOn: ["--userdata"],
              args: {
                name: "userdata-file",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: ["delete", "destroy"],
          description: "Delete a bare metal server",
          isDangerous: true,
          args: bareMetalIdArg,
        },
        {
          name: "get",
          description: "Get a bare metal server by ID",
          args: bareMetalIdArg,
        },
        {
          name: ["halt", "h"],
          description: "Halt a bare metal server",
          args: bareMetalIdArg,
        },
        {
          name: ["image", "i"],
          description: "Commands to manage the image on a bare metal server",
          subcommands: [
            {
              name: ["change", "c"],
              description: "Change a bare metal server's image",
              args: bareMetalIdArg,
              options: [
                {
                  name: ["--image", "-i"],
                  description:
                    "ID of the image that will be installed on the server",
                  isRequired: true,
                  args: {
                    name: "image",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "ipv4",
          description: "List the IPv4 information of a bare metal server",
          args: bareMetalIdArg,
        },
        {
          name: "ipv6",
          description: "Get the IPv6 information of a bare metal server",
          args: bareMetalIdArg,
        },
        {
          name: ["list", "l"],
          description: "List all bare metal servers",
          options: paging,
        },
        {
          name: ["os", "o"],
          description:
            "Commands to manage the operating system on a bare metal server",
          subcommands: [
            {
              name: ["change", "c"],
              description: "Change a bare metal server's operating system",
              args: bareMetalIdArg,
              options: [
                {
                  name: ["--os", "-o"],
                  description:
                    "ID of the operating system that will be installed on the server",
                  isRequired: true,
                  args: {
                    name: "os",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List the available operating systems for a bare metal server",
              args: bareMetalIdArg,
            },
          ],
        },
        {
          name: ["reboot", "r"],
          description: "Reboot a bare metal server",
          args: bareMetalIdArg,
        },
        {
          name: "reinstall",
          description: "Reinstall the operating system on a bare metal server",
          args: bareMetalIdArg,
        },
        {
          name: "start",
          description: "Start a bare metal server",
          args: bareMetalIdArg,
        },
        {
          name: "tags",
          description: "Add or modify tags on the bare metal server",
          args: bareMetalIdArg,
          options: [
            {
              name: ["--tags", "-t"],
              description:
                "A comma separated list of tags to apply to the server",
              isRequired: true,
              isRepeatable: true,
              args: {
                name: "tags",
              },
            },
          ],
        },
        {
          name: ["user-data", "u", "userdata"],
          description: "Commands for bare metal server user data",
          subcommands: [
            {
              name: ["get", "g"],
              description: "Get the user data of a bare metal server",
              args: bareMetalIdArg,
            },
            {
              name: "set",
              description: "Set the user data of a bare metal server",
              args: bareMetalIdArg,
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to the file from which to read the server user data",
                  exclusiveOn: ["--text"],
                  args: {
                    name: "file",
                    template: "filepaths",
                  },
                },
                {
                  name: ["--text", "-t"],
                  description: "Plain text to insert into server user data",
                  exclusiveOn: ["--file"],
                  args: {
                    name: "text",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "vnc",
          description: "Get a bare metal server's VNC url",
          args: bareMetalIdArg,
        },
      ],
    },
    {
      name: "billing",
      description: "Display billing information",
      subcommands: [
        {
          name: ["history", "h"],
          description: "Display billing history information",
          subcommands: [
            {
              name: ["list", "l"],
              description: "Show billing history",
              options: paging,
            },
          ],
        },
        {
          name: ["invoice", "i"],
          description: "Display invoice information",
          subcommands: [
            {
              name: ["get", "g"],
              description: "Get an invoice",
              args: {
                name: "Invoice ID",
              },
            },
            {
              name: ["items", "i"],
              description: "Get all invoice items",
              args: {
                name: "Invoice ID",
              },
              options: paging,
            },
            {
              name: ["list", "l"],
              description: "List billing invoices",
              options: paging,
            },
          ],
        },
      ],
    },
    {
      name: ["block-storage", "bs"],
      description: "Commands to manage block storage",
      subcommands: [
        {
          name: ["attach", "a"],
          description: "Attach a block storage to an instance",
          args: blockStorageIdArg,
          options: [
            {
              name: ["--instance", "-i"],
              description: "Instance ID to which to attach the block storage",
              isRequired: true,
              args: {
                name: "instance",
              },
            },
            {
              name: "--live",
              description:
                "Attach block storage without restarting the instance",
            },
          ],
        },
        {
          name: ["create", "c"],
          description: "Create a new block storage",
          options: [
            {
              name: ["--block-type", "-b"],
              description:
                "Block type you want to give the block storage. Possible values: 'high_perf', 'storage_opt'. Currently defaults to 'high_perf'",
              args: {
                name: "block-type",
                suggestions: ["high_perf", "storage_opt"],
              },
            },
            {
              name: "--bootable",
              description: "Allows you to flag a block device as bootable",
            },
            {
              name: ["--label", "-l"],
              description: "Label you want to give the block storage",
              args: {
                name: "label",
              },
            },
            {
              name: "--os-id",
              description: "OS ID to use for the bootable block device",
              args: {
                name: "os-id",
              },
            },
            {
              name: ["--region", "-r"],
              description:
                "ID of the region in which to create the block storage",
              isRequired: true,
              args: {
                name: "region",
              },
            },
            {
              name: ["--size", "-s"],
              description: "Size of the block storage you want to create",
              isRequired: true,
              args: {
                name: "size",
              },
            },
            {
              name: "--snapshot-id",
              description:
                "Allows you to create a block device as a clone of an existing block snapshot",
              args: {
                name: "snapshot-id",
              },
            },
          ],
        },
        {
          name: ["delete", "d", "destroy"],
          description: "Delete a block storage",
          isDangerous: true,
          args: blockStorageIdArg,
        },
        {
          name: "detach",
          description: "Detach a block storage from an instance",
          args: blockStorageIdArg,
          options: [
            {
              name: "--live",
              description: "Detach block storage without a restarting instance",
            },
          ],
        },
        {
          name: ["get", "g"],
          description: "Retrieve a block storage",
          args: blockStorageIdArg,
        },
        {
          name: "label",
          description: "Label a block storage",
          args: blockStorageIdArg,
          options: [
            {
              name: ["--label", "-l"],
              description: "The label to apply to the block storage",
              isRequired: true,
              args: {
                name: "label",
              },
            },
          ],
        },
        {
          name: ["list", "l"],
          description: "List block storage",
          options: paging,
        },
        {
          name: ["resize", "r"],
          description: "Resize a block storage",
          args: blockStorageIdArg,
          options: [
            {
              name: ["--size", "-s"],
              description: "Size you want your block storage to be",
              isRequired: true,
              args: {
                name: "size",
              },
            },
          ],
        },
      ],
    },
    {
      name: "cdn",
      description: "Commands to manage your CDN zones",
      subcommands: [
        {
          name: "pull",
          description: "CDN pull zone commands",
          subcommands: [
            {
              name: "create",
              description: "Create a CDN pull zone",
              options: [
                blockAiOption,
                blockBadBotsOption,
                corsOption,
                {
                  name: ["--domain", "-d"],
                  description:
                    "The domain name from which the cdn content will be pulled",
                  isRequired: true,
                  args: {
                    name: "domain",
                  },
                },
                gzipOption,
                {
                  name: ["--label", "-l"],
                  description: "Label to use for the pull zone",
                  isRequired: true,
                  args: {
                    name: "label",
                  },
                },
                {
                  name: ["--scheme", "-c"],
                  description:
                    "The URI scheme of the origin domain. Must be 'http' or 'https'",
                  isRequired: true,
                  args: {
                    name: "scheme",
                    suggestions: ["http", "https"],
                  },
                },
              ],
            },
            {
              name: ["delete", "destroy"],
              description: "Delete a CDN pull zone",
              isDangerous: true,
              args: zoneIdArg,
            },
            {
              name: "get",
              description: "Get a CDN pull zone by ID",
              args: zoneIdArg,
            },
            {
              name: "list",
              description: "List all CDN pull zones",
            },
            {
              name: "purge",
              description: "Purge a CDN pull zone cache",
              args: zoneIdArg,
            },
            {
              name: "update",
              description: "Update a CDN pull zone",
              args: zoneIdArg,
              options: [
                blockAiOption,
                blockBadBotsOption,
                corsOption,
                gzipOption,
                {
                  name: ["--label", "-l"],
                  description: "Label to use for the pull zone",
                  args: {
                    name: "label",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "push",
          description: "CDN push zone commands",
          subcommands: [
            {
              name: "create",
              description: "Create a CDN push zone",
              options: [
                blockAiOption,
                blockBadBotsOption,
                corsOption,
                gzipOption,
                {
                  name: ["--label", "-l"],
                  description: "Label to use for the push zone",
                  isRequired: true,
                  args: {
                    name: "label",
                  },
                },
              ],
            },
            {
              name: "create-endpoint",
              description: "Create a file upload endpoint in a CDN push zone",
              args: zoneIdArg,
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the file to be uploaded, including the extension",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--size", "-s"],
                  description:
                    "The size of the file to be uploaded (must match the file)",
                  isRequired: true,
                  args: {
                    name: "size",
                  },
                },
              ],
            },
            {
              name: ["delete", "destroy"],
              description: "Delete a CDN push zone",
              isDangerous: true,
              args: zoneIdArg,
            },
            {
              name: "delete-file",
              description: "Delete a file in a CDN push zone",
              args: [
                zoneIdArg,
                {
                  name: "File Name",
                },
              ],
            },
            {
              name: "get",
              description: "Get a CDN push zone by ID",
              args: zoneIdArg,
            },
            {
              name: "get-file",
              description: "Retrieve a file in a CDN push zone",
              args: [
                zoneIdArg,
                {
                  name: "File Name",
                },
              ],
            },
            {
              name: "list",
              description: "List all CDN push zones",
            },
            {
              name: "list-files",
              description: "List all files in a CDN push zone",
              args: zoneIdArg,
            },
            {
              name: "update",
              description: "Update a CDN push zone",
              args: zoneIdArg,
              options: [
                blockAiOption,
                blockBadBotsOption,
                corsOption,
                gzipOption,
                {
                  name: ["--label", "-l"],
                  description: "Label to use for the push zone",
                  args: {
                    name: "label",
                  },
                },
                {
                  name: ["--regions", "-n"],
                  description: "A comma separated list of region IDs",
                  isRepeatable: true,
                  args: {
                    name: "regions",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [noDescriptionsOption],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [noDescriptionsOption],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [noDescriptionsOption],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [noDescriptionsOption],
        },
      ],
    },
    {
      name: ["container-registry", "cr"],
      description: "Commands to interact with container registries",
      subcommands: [
        {
          name: ["create", "c"],
          description: "Create a container registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name to use for the container registry",
              isRequired: true,
              args: {
                name: "name",
              },
            },
            {
              name: ["--plan", "-l"],
              description: "The type of plan to use for the container registry",
              isRequired: true,
              args: {
                name: "plan",
              },
            },
            {
              name: ["--public", "-p"],
              description: "Make the registry publicly available",
              isRequired: true,
            },
            {
              name: ["--region", "-i"],
              description:
                "The ID of the region in which to create the container registry",
              isRequired: true,
              args: {
                name: "region",
              },
            },
          ],
        },
        {
          name: "credentials",
          description: "Commands for container registry credentials",
          subcommands: [
            {
              name: ["docker", "d"],
              description: "Create Docker credentials for a container registry",
              args: registryIdArg,
              options: [
                {
                  name: ["--expiry-seconds", "-e"],
                  description:
                    "The seconds until these credentials expire. Default is 0, never",
                  args: {
                    name: "expiry-seconds",
                  },
                },
                {
                  name: ["--read-write", "-w"],
                  description:
                    "Whether or not these credentials have write access. Should be true or false. Default is false",
                },
              ],
            },
          ],
        },
        {
          name: ["delete", "destroy", "d"],
          description: "Delete a container registry",
          isDangerous: true,
          args: registryIdArg,
        },
        {
          name: ["get", "g"],
          description: "Get a container registry",
          args: registryIdArg,
        },
        {
          name: ["list", "l"],
          description: "List all container registries",
          options: paging,
        },
        {
          name: ["plans", "p"],
          description: "List the plan names for a container registry",
        },
        {
          name: ["regions", "i"],
          description: "List the available regions for a container registry",
        },
        {
          name: ["repository", "r", "repo"],
          description: "Interact with container registry repositories",
          subcommands: [
            {
              name: ["artifact", "a"],
              description:
                "Interact with container registry repository artifacts",
              subcommands: [
                {
                  name: ["delete", "d"],
                  description: "Delete an artifact in a repository",
                  isDangerous: true,
                  args: [
                    registryIdArg,
                    imageIdArg,
                    {
                      name: "Artifact Digest",
                    },
                  ],
                },
                {
                  name: ["get", "g"],
                  description: "Get an image artifact from a repository",
                  args: [
                    registryIdArg,
                    imageIdArg,
                    {
                      name: "Artifact Digest",
                    },
                  ],
                },
                {
                  name: ["list", "l"],
                  description: "List all image artifacts on a repository",
                  args: [registryIdArg, imageIdArg],
                },
              ],
            },
            {
              name: ["delete", "destroy", "d"],
              description: "Delete a container registry repository",
              isDangerous: true,
              args: registryIdArg,
              options: [imageNameOption],
            },
            {
              name: ["get", "g"],
              description: "Get a container registry repository",
              args: registryIdArg,
              options: [imageNameOption],
            },
            {
              name: ["list", "l"],
              description: "List all container registry repositories",
              args: registryIdArg,
            },
            {
              name: ["update", "u"],
              description: "Update a container registry repository",
              args: registryIdArg,
              options: [
                {
                  name: ["--description", "-d"],
                  description: "The description of the image/repo",
                  isRequired: true,
                  args: {
                    name: "description",
                  },
                },
                imageNameOption,
              ],
            },
          ],
        },
        {
          name: ["update", "u"],
          description: "Update a container registry",
          args: registryIdArg,
          options: [
            {
              name: ["--plan", "-p"],
              description: "Name of the plan used for the container registry",
              args: {
                name: "plan",
              },
            },
            {
              name: ["--public", "-b"],
              description: "The container registry availability status",
            },
          ],
        },
      ],
    },
    {
      name: "database",
      description: "Commands to manage databases",
      subcommands: [
        {
          name: "advanced-option",
          description: "Commands to handle managed database advanced options",
          subcommands: [
            {
              name: "kafka-connect",
              description:
                "Commands to handle managed database advanced options for Kafka Connect",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List all available and configured Kafka Connect advanced options for a managed database",
                  args: databaseIdArg,
                },
                {
                  name: "update",
                  description:
                    "Update Kafka Connect advanced options for a managed database",
                  args: databaseIdArg,
                  options: [
                    {
                      name: "--connector-client-config-override-policy",
                      description:
                        "Set the managed database Kafka Connect configuration value for connector_client_config_override_policy",
                      args: {
                        name: "connector-client-config-override-policy",
                      },
                    },
                    {
                      name: "--consumer-auto-offset-reset",
                      description:
                        "Set the managed database Kafka Connect configuration value for consumer_auto_offset_reset",
                      args: {
                        name: "consumer-auto-offset-reset",
                      },
                    },
                    {
                      name: "--consumer-fetch-max-bytes",
                      description:
                        "Set the managed database Kafka Connect configuration value for consumer_fetch_max_bytes",
                      args: {
                        name: "consumer-fetch-max-bytes",
                      },
                    },
                    {
                      name: "--consumer-isolation-level",
                      description:
                        "Set the managed database Kafka Connect configuration value for consumer_isolation_level",
                      args: {
                        name: "consumer-isolation-level",
                      },
                    },
                    {
                      name: "--consumer-max-partition-fetch-bytes",
                      description:
                        "Set the managed database Kafka Connect configuration value for consumer_max_partition_fetch_bytes",
                      args: {
                        name: "consumer-max-partition-fetch-bytes",
                      },
                    },
                    {
                      name: "--consumer-max-poll-interval-ms",
                      description:
                        "Set the managed database Kafka Connect configuration value for consumer_max_poll_interval_ms",
                      args: {
                        name: "consumer-max-poll-interval-ms",
                      },
                    },
                    {
                      name: "--consumer-max-poll-records",
                      description:
                        "Set the managed database Kafka Connect configuration value for consumer_max_poll_records",
                      args: {
                        name: "consumer-max-poll-records",
                      },
                    },
                    {
                      name: "--offset-flush-interval-ms",
                      description:
                        "Set the managed database Kafka Connect configuration value for offset_flush_interval_ms",
                      args: {
                        name: "offset-flush-interval-ms",
                      },
                    },
                    {
                      name: "--offset-flush-timeout-ms",
                      description:
                        "Set the managed database Kafka Connect configuration value for offset_flush_timeout_ms",
                      args: {
                        name: "offset-flush-timeout-ms",
                      },
                    },
                    {
                      name: "--producer-batch-size",
                      description:
                        "Set the managed database Kafka Connect configuration value for producer_batch_size",
                      args: {
                        name: "producer-batch-size",
                      },
                    },
                    {
                      name: "--producer-buffer-memory",
                      description:
                        "Set the managed database Kafka Connect configuration value for producer_buffer_memory",
                      args: {
                        name: "producer-buffer-memory",
                      },
                    },
                    {
                      name: "--producer-compression-type",
                      description:
                        "Set the managed database Kafka Connect configuration value for producer_compression_type",
                      args: {
                        name: "producer-compression-type",
                      },
                    },
                    {
                      name: "--producer-linger-ms",
                      description:
                        "Set the managed database Kafka Connect configuration value for producer_linger_ms",
                      args: {
                        name: "producer-linger-ms",
                      },
                    },
                    {
                      name: "--producer-max-request-size",
                      description:
                        "Set the managed database Kafka Connect configuration value for producer_max_request_size",
                      args: {
                        name: "producer-max-request-size",
                      },
                    },
                    {
                      name: "--scheduled-rebalance-max-delay-ms",
                      description:
                        "Set the managed database Kafka Connect configuration value for scheduled_rebalance_max_delay_ms",
                      args: {
                        name: "scheduled-rebalance-max-delay-ms",
                      },
                    },
                    {
                      name: "--session-timeout-ms",
                      description:
                        "Set the managed database Kafka Connect configuration value for session_timeout_ms",
                      args: {
                        name: "session-timeout-ms",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "kafka-rest",
              description:
                "Commands to handle managed database advanced options for Kafka REST",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List all available and configured Kafka REST advanced options for a managed database",
                  args: databaseIdArg,
                },
                {
                  name: "update",
                  description:
                    "Update Kafka REST advanced options for a managed database",
                  args: databaseIdArg,
                  options: [
                    {
                      name: "--consumer-enable-auto-commit",
                      description:
                        "Set the managed database Kafka REST configuration value for consumer_enable_auto_commit",
                      requiresSeparator: true,
                      args: {
                        name: "bool",
                        isOptional: true,
                        suggestions: ["true", "false"],
                      },
                    },
                    {
                      name: "--consumer-request-max-bytes",
                      description:
                        "Set the managed database Kafka REST configuration value for consumer_request_max_bytes",
                      args: {
                        name: "consumer-request-max-bytes",
                      },
                    },
                    {
                      name: "--consumer-request-timeout-ms",
                      description:
                        "Set the managed database Kafka REST configuration value for consumer_request_timeout_ms",
                      args: {
                        name: "consumer-request-timeout-ms",
                      },
                    },
                    {
                      name: "--name-strategy",
                      description:
                        "Set the managed database Kafka REST configuration value for name_strategy",
                      args: {
                        name: "name-strategy",
                      },
                    },
                    {
                      name: "--name-strategy-validation",
                      description:
                        "Set the managed database Kafka REST configuration value for name_strategy_validation",
                      requiresSeparator: true,
                      args: {
                        name: "bool",
                        isOptional: true,
                        suggestions: ["true", "false"],
                      },
                    },
                    {
                      name: "--producer-acks",
                      description:
                        "Set the managed database Kafka REST configuration value for producer_acks",
                      args: {
                        name: "producer-acks",
                      },
                    },
                    {
                      name: "--producer-compression-type",
                      description:
                        "Set the managed database Kafka REST configuration value for producer_compression_type",
                      args: {
                        name: "producer-compression-type",
                      },
                    },
                    {
                      name: "--producer-linger-ms",
                      description:
                        "Set the managed database Kafka REST configuration value for producer_linger_ms",
                      args: {
                        name: "producer-linger-ms",
                      },
                    },
                    {
                      name: "--producer-max-request-size",
                      description:
                        "Set the managed database Kafka REST configuration value for producer_max_request_size",
                      args: {
                        name: "producer-max-request-size",
                      },
                    },
                    {
                      name: "--simpleconsumer-pool-size-max",
                      description:
                        "Set the managed database Kafka REST configuration value for simpleconsumer_pool_size_max",
                      args: {
                        name: "simpleconsumer-pool-size-max",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "list",
              description:
                "List all available and configured advanced options for a managed database",
              args: databaseIdArg,
            },
            {
              name: "schema-registry",
              description:
                "Commands to handle managed database advanced options for Schema Registry",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List all available and configured Schema Registry advanced options for a managed database",
                  args: databaseIdArg,
                },
                {
                  name: "update",
                  description:
                    "Update Schema Registry advanced options for a managed database",
                  args: databaseIdArg,
                  options: [
                    {
                      name: "--leader-eligibility",
                      description:
                        "Set the managed database Kafka REST configuration value for leader_eligibility",
                      requiresSeparator: true,
                      args: {
                        name: "bool",
                        isOptional: true,
                        suggestions: ["true", "false"],
                      },
                    },
                    {
                      name: "--retriable-errors-silenced",
                      description:
                        "Set the managed database Kafka REST configuration value for retriable_errors_silenced",
                      requiresSeparator: true,
                      args: {
                        name: "bool",
                        isOptional: true,
                        suggestions: ["true", "false"],
                      },
                    },
                    {
                      name: "--schema-reader-strict-mode",
                      description:
                        "Set the managed database Kafka REST configuration value for schema_reader_strict_mode",
                    },
                  ],
                },
              ],
            },
            {
              name: "update",
              description: "Update advanced options for a managed database",
              args: databaseIdArg,
              options: [
                {
                  name: "--auto-create-topics-enable",
                  description:
                    "Set the managed kafka configuration value for auto_create_topics_enable",
                },
                {
                  name: "--autovacuum-analyze-scale-factor",
                  description:
                    "Set the managed postgresql configuration value for autovacuum_analyze_scale_factor",
                  args: {
                    name: "autovacuum-analyze-scale-factor",
                  },
                },
                {
                  name: "--autovacuum-analyze-threshold",
                  description:
                    "Set the managed postgresql configuration value for autovacuum_analyze_threshold",
                  args: {
                    name: "autovacuum-analyze-threshold",
                  },
                },
                {
                  name: "--autovacuum-freeze-max-age",
                  description:
                    "Set the managed postgresql configuration value for autovacuum_freeze_max_age",
                  args: {
                    name: "autovacuum-freeze-max-age",
                  },
                },
                {
                  name: "--autovacuum-max-workers",
                  description:
                    "Set the managed postgresql configuration value for autovacuum_max_workers",
                  args: {
                    name: "autovacuum-max-workers",
                  },
                },
                {
                  name: "--autovacuum-naptime",
                  description:
                    "Set the managed postgresql configuration value for autovacuum_naptime",
                  args: {
                    name: "autovacuum-naptime",
                  },
                },
                {
                  name: "--autovacuum-vacuum-cost-delay",
                  description:
                    "Set the managed postgresql configuration value for autovacuum_vacuum_cost_delay",
                  args: {
                    name: "autovacuum-vacuum-cost-delay",
                  },
                },
                {
                  name: "--autovacuum-vacuum-cost-limit",
                  description:
                    "Set the managed postgresql configuration value for autovacuum_vacuum_cost_limit",
                  args: {
                    name: "autovacuum-vacuum-cost-limit",
                  },
                },
                {
                  name: "--autovacuum-vacuum-scale-factor",
                  description:
                    "Set the managed postgresql configuration value for autovacuum_vacuum_scale_factor",
                  args: {
                    name: "autovacuum-vacuum-scale-factor",
                  },
                },
                {
                  name: "--autovacuum-vacuum-threshold",
                  description:
                    "Set the managed postgresql configuration value for autovacuum_vacuum_threshold",
                  args: {
                    name: "autovacuum-vacuum-threshold",
                  },
                },
                {
                  name: "--bgwriter-delay",
                  description:
                    "Set the managed postgresql configuration value for bgwriter_delay",
                  args: {
                    name: "bgwriter-delay",
                  },
                },
                {
                  name: "--bgwriter-flush-after",
                  description:
                    "Set the managed postgresql configuration value for bgwriter_flush_after",
                  args: {
                    name: "bgwriter-flush-after",
                  },
                },
                {
                  name: "--bgwriter-lru-maxpages",
                  description:
                    "Set the managed postgresql configuration value for bgwriter_lru_maxpages",
                  args: {
                    name: "bgwriter-lru-maxpages",
                  },
                },
                {
                  name: "--bgwriter-lru-multiplier",
                  description:
                    "Set the managed postgresql configuration value for bgwriter_lru_multiplier",
                  args: {
                    name: "bgwriter-lru-multiplier",
                  },
                },
                {
                  name: "--compression-type",
                  description:
                    "Set the managed kafka configuration value for compression_type",
                  args: {
                    name: "compression-type",
                  },
                },
                {
                  name: "--connect-timeout",
                  description:
                    "Set the managed mysql configuration value for connect_timeout",
                  args: {
                    name: "connect-timeout",
                  },
                },
                {
                  name: "--connections-max-idle-ms",
                  description:
                    "Set the managed kafka configuration value for connections_max_idle_ms",
                  args: {
                    name: "connections-max-idle-ms",
                  },
                },
                {
                  name: "--deadlock-timeout",
                  description:
                    "Set the managed postgresql configuration value for deadlock_timeout",
                  args: {
                    name: "deadlock-timeout",
                  },
                },
                {
                  name: "--default-replication-factor",
                  description:
                    "Set the managed kafka configuration value for default_replication_factor",
                  args: {
                    name: "default-replication-factor",
                  },
                },
                {
                  name: "--default-toast-compression",
                  description:
                    "Set the managed postgresql configuration value for default_toast_compression",
                  args: {
                    name: "default-toast-compression",
                  },
                },
                {
                  name: "--group-concat-max-len",
                  description:
                    "Set the managed mysql configuration value for group_concat_max_len",
                  args: {
                    name: "group-concat-max-len",
                  },
                },
                {
                  name: "--group-initial-rebalance-delay-ms",
                  description:
                    "Set the managed kafka configuration value for group_initial_rebalance_delay_ms",
                  args: {
                    name: "group-initial-rebalance-delay-ms",
                  },
                },
                {
                  name: "--group-max-session-timeout-ms",
                  description:
                    "Set the managed kafka configuration value for group_max_session_timeout_ms",
                  args: {
                    name: "group-max-session-timeout-ms",
                  },
                },
                {
                  name: "--group-min-session-timeout-ms",
                  description:
                    "Set the managed kafka configuration value for group_min_session_timeout_ms",
                  args: {
                    name: "group-min-session-timeout-ms",
                  },
                },
                {
                  name: "--idle-in-transaction-session-timeout",
                  description:
                    "Set the managed postgresql configuration value for idle_in_transaction_session_timeout",
                  args: {
                    name: "idle-in-transaction-session-timeout",
                  },
                },
                {
                  name: "--innodb-change-buffer-max-size",
                  description:
                    "Set the managed mysql configuration value for innodb_change_buffer_max_size",
                  args: {
                    name: "innodb-change-buffer-max-size",
                  },
                },
                {
                  name: "--innodb-flush-neighbors",
                  description:
                    "Set the managed mysql configuration value for innodb_flush_neighbors",
                  args: {
                    name: "innodb-flush-neighbors",
                  },
                },
                {
                  name: "--innodb-ft-min-token-size",
                  description:
                    "Set the managed mysql configuration value for innodb_ft_min_token_size",
                  args: {
                    name: "innodb-ft-min-token-size",
                  },
                },
                {
                  name: "--innodb-ft-server-stopword-table",
                  description:
                    "Set the managed mysql configuration value for innodb_ft_server_stopword_table",
                  args: {
                    name: "innodb-ft-server-stopword-table",
                  },
                },
                {
                  name: "--innodb-lock-wait-timeout",
                  description:
                    "Set the managed mysql configuration value for innodb_lock_wait_timeout",
                  args: {
                    name: "innodb-lock-wait-timeout",
                  },
                },
                {
                  name: "--innodb-log-buffer-size",
                  description:
                    "Set the managed mysql configuration value for innodb_log_buffer_size",
                  args: {
                    name: "innodb-log-buffer-size",
                  },
                },
                {
                  name: "--innodb-online-alter-log-max-size",
                  description:
                    "Set the managed mysql configuration value for innodb_online_alter_log_max_size",
                  args: {
                    name: "innodb-online-alter-log-max-size",
                  },
                },
                {
                  name: "--innodb-print-all-deadlocks",
                  description:
                    "Set the managed mysql configuration value for innodb_print_all_deadlocks",
                },
                {
                  name: "--innodb-read-io-threads",
                  description:
                    "Set the managed mysql configuration value for innodb_read_io_threads",
                  args: {
                    name: "innodb-read-io-threads",
                  },
                },
                {
                  name: "--innodb-rollback-on-timeout",
                  description:
                    "Set the managed mysql configuration value for innodb_rollback_on_timeout",
                },
                {
                  name: "--innodb-thread-concurrency",
                  description:
                    "Set the managed mysql configuration value for innodb_thread_concurrency",
                  args: {
                    name: "innodb-thread-concurrency",
                  },
                },
                {
                  name: "--innodb-write-io-threads",
                  description:
                    "Set the managed mysql configuration value for innodb_write_io_threads",
                  args: {
                    name: "innodb-write-io-threads",
                  },
                },
                {
                  name: "--interactive-timeout",
                  description:
                    "Set the managed mysql configuration value for interactive_timeout",
                  args: {
                    name: "interactive-timeout",
                  },
                },
                {
                  name: "--internal-tmp-mem-storage-engine",
                  description:
                    "Set the managed mysql configuration value for internal_tmp_mem_storage_engine",
                  args: {
                    name: "internal-tmp-mem-storage-engine",
                  },
                },
                {
                  name: "--jit",
                  description:
                    "Set the managed postgresql configuration value for jit",
                },
                {
                  name: "--log-autovacuum-min-duration",
                  description:
                    "Set the managed postgresql configuration value for log_autovacuum_min_duration",
                  args: {
                    name: "log-autovacuum-min-duration",
                  },
                },
                {
                  name: "--log-cleaner-delete-retention-ms",
                  description:
                    "Set the managed kafka configuration value for log_cleaner_delete_retention_ms",
                  args: {
                    name: "log-cleaner-delete-retention-ms",
                  },
                },
                {
                  name: "--log-cleaner-max-compaction-lag-ms",
                  description:
                    "Set the managed kafka configuration value for log_cleaner_max_compaction_lag_ms",
                  args: {
                    name: "log-cleaner-max-compaction-lag-ms",
                  },
                },
                {
                  name: "--log-cleaner-min-cleanable-ratio",
                  description:
                    "Set the managed kafka configuration value for log_cleaner_min_cleanable_ratio",
                  args: {
                    name: "log-cleaner-min-cleanable-ratio",
                  },
                },
                {
                  name: "--log-cleaner-min-compaction-lag-ms",
                  description:
                    "Set the managed kafka configuration value for log_cleaner_min_compaction_lag_ms",
                  args: {
                    name: "log-cleaner-min-compaction-lag-ms",
                  },
                },
                {
                  name: "--log-cleanup-policy",
                  description:
                    "Set the managed kafka configuration value for log_cleanup_policy",
                  args: {
                    name: "log-cleanup-policy",
                  },
                },
                {
                  name: "--log-error-verbosity",
                  description:
                    "Set the managed postgresql configuration value for log_error_verbosity",
                  args: {
                    name: "log-error-verbosity",
                  },
                },
                {
                  name: "--log-flush-interval-messages",
                  description:
                    "Set the managed kafka configuration value for log_flush_interval_messages",
                  args: {
                    name: "log-flush-interval-messages",
                  },
                },
                {
                  name: "--log-flush-interval-ms",
                  description:
                    "Set the managed kafka configuration value for log_flush_interval_ms",
                  args: {
                    name: "log-flush-interval-ms",
                  },
                },
                {
                  name: "--log-index-interval-bytes",
                  description:
                    "Set the managed kafka configuration value for log_index_interval_bytes",
                  args: {
                    name: "log-index-interval-bytes",
                  },
                },
                {
                  name: "--log-index-size-max-bytes",
                  description:
                    "Set the managed kafka configuration value for log_index_size_max_bytes",
                  args: {
                    name: "log-index-size-max-bytes",
                  },
                },
                {
                  name: "--log-line-prefix",
                  description:
                    "Set the managed postgresql configuration value for log_line_prefix",
                  args: {
                    name: "log-line-prefix",
                  },
                },
                {
                  name: "--log-local-retention-bytes",
                  description:
                    "Set the managed kafka configuration value for log_local_retention_bytes",
                  args: {
                    name: "log-local-retention-bytes",
                  },
                },
                {
                  name: "--log-local-retention-ms",
                  description:
                    "Set the managed kafka configuration value for log_local_retention_ms",
                  args: {
                    name: "log-local-retention-ms",
                  },
                },
                {
                  name: "--log-message-downconversion-enable",
                  description:
                    "Set the managed kafka configuration value for log_message_downconversion_enable",
                },
                {
                  name: "--log-message-timestamp-difference-max-ms",
                  description:
                    "Set the managed kafka configuration value for log_message_timestamp_difference_max_ms",
                  args: {
                    name: "log-message-timestamp-difference-max-ms",
                  },
                },
                {
                  name: "--log-message-timestamp-type",
                  description:
                    "Set the managed kafka configuration value for log_message_timestamp_type",
                  args: {
                    name: "log-message-timestamp-type",
                  },
                },
                {
                  name: "--log-min-duration-statement",
                  description:
                    "Set the managed postgresql configuration value for log_min_duration_statement",
                  args: {
                    name: "log-min-duration-statement",
                  },
                },
                {
                  name: "--log-preallocate",
                  description:
                    "Set the managed kafka configuration value for log_preallocate",
                },
                {
                  name: "--log-retention-bytes",
                  description:
                    "Set the managed kafka configuration value for log_retention_bytes",
                  args: {
                    name: "log-retention-bytes",
                  },
                },
                {
                  name: "--log-retention-hours",
                  description:
                    "Set the managed kafka configuration value for log_retention_hours",
                  args: {
                    name: "log-retention-hours",
                  },
                },
                {
                  name: "--log-retention-ms",
                  description:
                    "Set the managed kafka configuration value for log_retention_ms",
                  args: {
                    name: "log-retention-ms",
                  },
                },
                {
                  name: "--log-roll-jitter-ms",
                  description:
                    "Set the managed kafka configuration value for log_roll_jitter_ms",
                  args: {
                    name: "log-roll-jitter-ms",
                  },
                },
                {
                  name: "--log-roll-ms",
                  description:
                    "Set the managed kafka configuration value for log_roll_ms",
                  args: {
                    name: "log-roll-ms",
                  },
                },
                {
                  name: "--log-segment-bytes",
                  description:
                    "Set the managed kafka configuration value for log_segment_bytes",
                  args: {
                    name: "log-segment-bytes",
                  },
                },
                {
                  name: "--log-segment-delete-delay-ms",
                  description:
                    "Set the managed kafka configuration value for log_segment_delete_delay_ms",
                  args: {
                    name: "log-segment-delete-delay-ms",
                  },
                },
                {
                  name: "--max-allowed-packet",
                  description:
                    "Set the managed mysql configuration value for max_allowed_packet",
                  args: {
                    name: "max-allowed-packet",
                  },
                },
                {
                  name: "--max-connections-per-ip",
                  description:
                    "Set the managed kafka configuration value for max_connections_per_ip",
                  args: {
                    name: "max-connections-per-ip",
                  },
                },
                {
                  name: "--max-files-per-process",
                  description:
                    "Set the managed postgresql configuration value for max_files_per_process",
                  args: {
                    name: "max-files-per-process",
                  },
                },
                {
                  name: "--max-heap-table-size",
                  description:
                    "Set the managed mysql configuration value for max_heap_table_size",
                  args: {
                    name: "max-heap-table-size",
                  },
                },
                {
                  name: "--max-incremental-fetch-session-cache-slots",
                  description:
                    "Set the managed kafka configuration value for max_incremental_fetch_session_cache_slots",
                  args: {
                    name: "max-incremental-fetch-session-cache-slots",
                  },
                },
                {
                  name: "--max-locks-per-transaction",
                  description:
                    "Set the managed postgresql configuration value for max_locks_per_transaction",
                  args: {
                    name: "max-locks-per-transaction",
                  },
                },
                {
                  name: "--max-logical-replication-workers",
                  description:
                    "Set the managed postgresql configuration value for max_logical_replication_workers",
                  args: {
                    name: "max-logical-replication-workers",
                  },
                },
                {
                  name: "--max-parallel-workers",
                  description:
                    "Set the managed postgresql configuration value for max_parallel_workers",
                  args: {
                    name: "max-parallel-workers",
                  },
                },
                {
                  name: "--max-parallel-workers-per-gather",
                  description:
                    "Set the managed postgresql configuration value for max_parallel_workers_per_gather",
                  args: {
                    name: "max-parallel-workers-per-gather",
                  },
                },
                {
                  name: "--max-pred-locks-per-transaction",
                  description:
                    "Set the managed postgresql configuration value for max_pred_locks_per_transaction",
                  args: {
                    name: "max-pred-locks-per-transaction",
                  },
                },
                {
                  name: "--max-prepared-transactions",
                  description:
                    "Set the managed postgresql configuration value for max_prepared_transactions",
                  args: {
                    name: "max-prepared-transactions",
                  },
                },
                {
                  name: "--max-replication-slots",
                  description:
                    "Set the managed postgresql configuration value for max_replication_slots",
                  args: {
                    name: "max-replication-slots",
                  },
                },
                {
                  name: "--max-stack-depth",
                  description:
                    "Set the managed postgresql configuration value for max_stack_depth",
                  args: {
                    name: "max-stack-depth",
                  },
                },
                {
                  name: "--max-standby-archive-delay",
                  description:
                    "Set the managed postgresql configuration value for max_standby_archive_delay",
                  args: {
                    name: "max-standby-archive-delay",
                  },
                },
                {
                  name: "--max-standby-streaming-delay",
                  description:
                    "Set the managed postgresql configuration value for max_standby_streaming_delay",
                  args: {
                    name: "max-standby-streaming-delay",
                  },
                },
                {
                  name: "--max-wal-senders",
                  description:
                    "Set the managed postgresql configuration value for max_wal_senders",
                  args: {
                    name: "max-wal-senders",
                  },
                },
                {
                  name: "--max-worker-processes",
                  description:
                    "Set the managed postgresql configuration value for max_worker_processes",
                  args: {
                    name: "max-worker-processes",
                  },
                },
                {
                  name: "--message-max-bytes",
                  description:
                    "Set the managed kafka configuration value for message_max_bytes",
                  args: {
                    name: "message-max-bytes",
                  },
                },
                {
                  name: "--min-insync-replicas",
                  description:
                    "Set the managed kafka configuration value for min_insync_replicas",
                  args: {
                    name: "min-insync-replicas",
                  },
                },
                {
                  name: "--net-buffer-length",
                  description:
                    "Set the managed mysql configuration value for net_buffer_length",
                  args: {
                    name: "net-buffer-length",
                  },
                },
                {
                  name: "--net-read-timeout",
                  description:
                    "Set the managed mysql configuration value for net_read_timeout",
                  args: {
                    name: "net-read-timeout",
                  },
                },
                {
                  name: "--net-write-timeout",
                  description:
                    "Set the managed mysql configuration value for net_write_timeout",
                  args: {
                    name: "net-write-timeout",
                  },
                },
                {
                  name: "--num-partitions",
                  description:
                    "Set the managed kafka configuration value for num_partitions",
                  args: {
                    name: "num-partitions",
                  },
                },
                {
                  name: "--offsets-retention-minutes",
                  description:
                    "Set the managed kafka configuration value for offsets_retention_minutes",
                  args: {
                    name: "offsets-retention-minutes",
                  },
                },
                {
                  name: "--pg-partman-bgw-interval",
                  description:
                    "Set the managed postgresql configuration value for pg_partman_bgw.interval",
                  args: {
                    name: "pg-partman-bgw-interval",
                  },
                },
                {
                  name: "--pg-partman-bgw-role",
                  description:
                    "Set the managed postgresql configuration value for pg_partman_bgw.role",
                  args: {
                    name: "pg-partman-bgw-role",
                  },
                },
                {
                  name: "--pg-stat-statements-track",
                  description:
                    "Set the managed postgresql configuration value for pg_stat_statements.track",
                  args: {
                    name: "pg-stat-statements-track",
                  },
                },
                {
                  name: "--producer-purgatory-purge-interval-requests",
                  description:
                    "Set the managed kafka configuration value for producer_purgatory_purge_interval_requests",
                  args: {
                    name: "producer-purgatory-purge-interval-requests",
                  },
                },
                {
                  name: "--replica-fetch-max-bytes",
                  description:
                    "Set the managed kafka configuration value for replica_fetch_max_bytes",
                  args: {
                    name: "replica-fetch-max-bytes",
                  },
                },
                {
                  name: "--replica-fetch-response-max-bytes",
                  description:
                    "Set the managed kafka configuration value for replica_fetch_response_max_bytes",
                  args: {
                    name: "replica-fetch-response-max-bytes",
                  },
                },
                {
                  name: "--sasl-oauthbearer-expected-audience",
                  description:
                    "Set the managed kafka configuration value for sasl_oauthbearer_expected_audience",
                  args: {
                    name: "sasl-oauthbearer-expected-audience",
                  },
                },
                {
                  name: "--sasl-oauthbearer-expected-issuer",
                  description:
                    "Set the managed kafka configuration value for sasl_oauthbearer_expected_issuer",
                  args: {
                    name: "sasl-oauthbearer-expected-issuer",
                  },
                },
                {
                  name: "--sasl-oauthbearer-jwks-endpoint-url",
                  description:
                    "Set the managed kafka configuration value for sasl_oauthbearer_jwks_endpoint_url",
                  args: {
                    name: "sasl-oauthbearer-jwks-endpoint-url",
                  },
                },
                {
                  name: "--sasl-oauthbearer-sub-claim-name",
                  description:
                    "Set the managed kafka configuration value for sasl_oauthbearer_sub_claim_name",
                  args: {
                    name: "sasl-oauthbearer-sub-claim-name",
                  },
                },
                {
                  name: "--socket-request-max-bytes",
                  description:
                    "Set the managed kafka configuration value for socket_request_max_bytes",
                  args: {
                    name: "socket-request-max-bytes",
                  },
                },
                {
                  name: "--sort-buffer-size",
                  description:
                    "Set the managed mysql configuration value for sort_buffer_size",
                  args: {
                    name: "sort-buffer-size",
                  },
                },
                {
                  name: "--temp-file-limit",
                  description:
                    "Set the managed postgresql configuration value for temp_file_limit",
                  args: {
                    name: "temp-file-limit",
                  },
                },
                {
                  name: "--tmp-table-size",
                  description:
                    "Set the managed mysql configuration value for tmp_table_size",
                  args: {
                    name: "tmp-table-size",
                  },
                },
                {
                  name: "--track-activity-query-size",
                  description:
                    "Set the managed postgresql configuration value for track_activity_query_size",
                  args: {
                    name: "track-activity-query-size",
                  },
                },
                {
                  name: "--track-commit-timestamp",
                  description:
                    "Set the managed postgresql configuration value for track_commit_timestamp",
                  args: {
                    name: "track-commit-timestamp",
                  },
                },
                {
                  name: "--track-functions",
                  description:
                    "Set the managed postgresql configuration value for track_functions",
                  args: {
                    name: "track-functions",
                  },
                },
                {
                  name: "--track-io-timing",
                  description:
                    "Set the managed postgresql configuration value for track_io_timing",
                  args: {
                    name: "track-io-timing",
                  },
                },
                {
                  name: "--transaction-partition-verification-enable",
                  description:
                    "Set the managed kafka configuration value for transaction_partition_verification_enable",
                },
                {
                  name: "--transaction-remove-expired-transaction-cleanup-interval-ms",
                  description:
                    "Set the managed kafka configuration value for transaction_remove_expired_transaction_cleanup_interval_ms",
                  args: {
                    name: "transaction-remove-expired-transaction-cleanup-interval-ms",
                  },
                },
                {
                  name: "--transaction-state-log-segment-bytes",
                  description:
                    "Set the managed kafka configuration value for transaction_state_log_segment_bytes",
                  args: {
                    name: "transaction-state-log-segment-bytes",
                  },
                },
                {
                  name: "--wait-timeout",
                  description:
                    "Set the managed mysql configuration value for wait_timeout",
                  args: {
                    name: "wait-timeout",
                  },
                },
                {
                  name: "--wal-sender-timeout",
                  description:
                    "Set the managed postgresql configuration value for wal_sender_timeout",
                  args: {
                    name: "wal-sender-timeout",
                  },
                },
                {
                  name: "--wal-writer-delay",
                  description:
                    "Set the managed postgresql configuration value for wal_writer_delay",
                  args: {
                    name: "wal-writer-delay",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "alert",
          description: "Commands to handle database alerts",
          subcommands: [
            {
              name: "list",
              description: "List database alerts",
              args: databaseIdArg,
              options: [
                {
                  name: ["--period", "-p"],
                  description:
                    "Period (day, week, month, year) for viewing service alerts for a managed database",
                  isRequired: true,
                  args: {
                    name: "period",
                    suggestions: ["day", "week", "month", "year"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "available-connector",
          description: "Commands to handle database available connectors",
          subcommands: [
            {
              name: "get-schema",
              description: "Get database connector configuration schema",
              args: [
                databaseIdArg,
                {
                  name: "Connector Class",
                },
              ],
            },
            {
              name: "list",
              description: "List database available connectors",
              args: databaseIdArg,
            },
          ],
        },
        {
          name: "backup",
          description:
            "Commands to handle database backups, restores and forks",
          subcommands: [
            {
              name: "fork",
              description: "Fork a database from backup",
              args: databaseIdArg,
              options: [
                {
                  name: "--date",
                  description: "Backup date to use for point-in-time recovery",
                  args: {
                    name: "date",
                  },
                },
                {
                  name: "--label",
                  description:
                    "Label for the new managed database forked from the backup",
                  isRequired: true,
                  args: {
                    name: "label",
                  },
                },
                {
                  name: "--plan",
                  description:
                    "Plan id for the new managed database forked from the backup",
                  isRequired: true,
                  args: {
                    name: "plan",
                  },
                },
                {
                  name: "--region",
                  description:
                    "Region id for the new managed database forked from the backup",
                  isRequired: true,
                  args: {
                    name: "region",
                  },
                },
                {
                  name: "--time",
                  description: "Backup time to use for point-in-time recovery",
                  args: {
                    name: "time",
                  },
                },
                {
                  name: "--type",
                  description:
                    "Restoration type: `pitr` for point-in-time recovery or `basebackup` for latest backup (default)",
                  args: {
                    name: "type",
                    suggestions: ["pitr", "basebackup"],
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Get get latest and oldest database backup",
              args: databaseIdArg,
            },
            {
              name: "restore",
              description: "Restore a database backup",
              args: databaseIdArg,
              options: [
                {
                  name: "--date",
                  description: "Backup date to use for point-in-time recovery",
                  args: {
                    name: "date",
                  },
                },
                {
                  name: "--label",
                  description:
                    "Label for the new managed database restored from backup",
                  isRequired: true,
                  args: {
                    name: "label",
                  },
                },
                {
                  name: "--time",
                  description: "Backup time to use for point-in-time recovery",
                  args: {
                    name: "time",
                  },
                },
                {
                  name: "--type",
                  description:
                    "Restoration type: `pitr` for point-in-time recovery or `basebackup` for latest backup (default)",
                  args: {
                    name: "type",
                    suggestions: ["pitr", "basebackup"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "connection-pool",
          description:
            "Commands to handle PostgreSQL database connection pools",
          subcommands: [
            {
              name: "create",
              description: "Create a database connection pool",
              args: databaseIdArg,
              options: [
                {
                  name: ["--database", "-d"],
                  description:
                    "Database for the new managed database connection pool",
                  isRequired: true,
                  args: {
                    name: "database",
                  },
                },
                {
                  name: ["--mode", "-m"],
                  description:
                    "Mode for the new managed database connection pool",
                  isRequired: true,
                  args: {
                    name: "mode",
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name for the new managed database connection pool",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--size", "-s"],
                  description:
                    "Size for the new managed database connection pool",
                  isRequired: true,
                  args: {
                    name: "size",
                  },
                },
                {
                  name: ["--username", "-u"],
                  description:
                    "Username for the new managed database connection pool",
                  isRequired: true,
                  args: {
                    name: "username",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a database connection pool",
              isDangerous: true,
              args: [databaseIdArg, poolNameArg],
            },
            {
              name: "get",
              description: "Get a database connection pool",
              args: [databaseIdArg, poolNameArg],
            },
            {
              name: "list",
              description:
                "List connection pools within a PostgreSQL managed database",
              args: databaseIdArg,
            },
            {
              name: "update",
              description: "Update a database connection pool",
              args: [databaseIdArg, poolNameArg],
              options: [
                {
                  name: ["--database", "-d"],
                  description:
                    "Database for the managed database connection pool",
                  args: {
                    name: "database",
                  },
                },
                {
                  name: ["--mode", "-m"],
                  description: "Mode for the managed database connection pool",
                  args: {
                    name: "mode",
                  },
                },
                {
                  name: ["--size", "-s"],
                  description: "Size for the managed database connection pool",
                  args: {
                    name: "size",
                  },
                },
                {
                  name: ["--username", "-u"],
                  description:
                    "Username for the managed database connection pool",
                  args: {
                    name: "username",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "connector",
          description: "Commands to handle database connectors",
          subcommands: [
            {
              name: "create",
              description: "Create a database connector",
              args: databaseIdArg,
              options: [
                {
                  name: ["--class", "-c"],
                  description: "Class for the new managed database connector",
                  args: {
                    name: "class",
                  },
                },
                {
                  name: "--config",
                  description:
                    "Configuration json for the new managed database connector",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name for the new managed database connector",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--topics", "-t"],
                  description: "Topics for the new managed database connector",
                  args: {
                    name: "topics",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a database connector",
              isDangerous: true,
              args: [databaseIdArg, connectorNameArg],
            },
            {
              name: "get",
              description: "Get a database connector",
              args: [databaseIdArg, connectorNameArg],
            },
            {
              name: "get-status",
              description: "Get the status of a database connector",
              args: [databaseIdArg, connectorNameArg],
            },
            {
              name: "list",
              description: "List database connectors",
              args: databaseIdArg,
            },
            {
              name: "pause",
              description: "Pause a database connector",
              args: [databaseIdArg, connectorNameArg],
            },
            {
              name: "restart",
              description: "Restart a database connector",
              args: [databaseIdArg, connectorNameArg],
            },
            {
              name: "restart-task",
              description: "Restart a database connector task",
              args: [
                databaseIdArg,
                connectorNameArg,
                {
                  name: "Task ID",
                },
              ],
            },
            {
              name: "resume",
              description: "Resume a database connector",
              args: [databaseIdArg, connectorNameArg],
            },
            {
              name: "update",
              description: "Update a database connector",
              args: [databaseIdArg, connectorNameArg],
              options: [
                {
                  name: ["--config", "-c"],
                  description:
                    "Configuration json for the managed database connector",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: ["--topics", "-t"],
                  description: "Topics for the managed database connector",
                  args: {
                    name: "topics",
                  },
                },
              ],
            },
          ],
        },
        {
          name: ["create", "c"],
          description: "Create database",
          options: [
            {
              name: "--backup-hour",
              description: "Backup hour for the new managed database",
              args: {
                name: "backup-hour",
              },
            },
            {
              name: "--backup-minute",
              description: "Backup minute for the new managed database",
              args: {
                name: "backup-minute",
              },
            },
            {
              name: ["--database-engine", "-e"],
              description: "Database engine for the new managed database",
              isRequired: true,
              args: {
                name: "database-engine",
              },
            },
            {
              name: ["--database-engine-version", "-v"],
              description:
                "Database engine version for the new managed database",
              isRequired: true,
              args: {
                name: "database-engine-version",
              },
            },
            {
              name: "--enable-kafka-connect",
              description:
                "Enable Kafka Connect for the new apache kafka managed database",
            },
            {
              name: "--enable-kafka-rest",
              description:
                "Enable Kafka REST for the new apache kafka managed database",
            },
            {
              name: "--enable-schema-registry",
              description:
                "Enable Schema Registry for the new apache kafka managed database",
            },
            {
              name: "--eviction-policy",
              description:
                "Eviction policy for the new caching managed database",
              args: {
                name: "eviction-policy",
              },
            },
            {
              name: ["--label", "-l"],
              description: "Label for the new managed database",
              isRequired: true,
              args: {
                name: "label",
              },
            },
            {
              name: "--maintenance-dow",
              description:
                "Maintenance day of week for the new managed database",
              args: {
                name: "maintenance-dow",
              },
            },
            {
              name: "--maintenance-time",
              description: "Maintenance time for the new managed database",
              args: {
                name: "maintenance-time",
              },
            },
            {
              name: "--mysql-long-query-time",
              description:
                "Long query time for the new mysql managed database when slow query logging is enabled",
              args: {
                name: "mysql-long-query-time",
              },
            },
            {
              name: "--mysql-require-primary-key",
              description:
                "Enable requiring primary keys for the new mysql managed database",
              requiresSeparator: true,
              args: {
                name: "bool",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--mysql-slow-query-log",
              description:
                "Enable slow query logging for the new mysql managed database",
              requiresSeparator: true,
              args: {
                name: "bool",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--mysql-sql-modes",
              description:
                "Comma-separated list of sql modes for the new managed database",
              isRepeatable: true,
              args: {
                name: "mysql-sql-modes",
              },
            },
            {
              name: ["--plan", "-p"],
              description: "Plan id for the new managed database",
              isRequired: true,
              args: {
                name: "plan",
              },
            },
            {
              name: ["--region", "-r"],
              description: "Region id for the new managed database",
              isRequired: true,
              args: {
                name: "region",
              },
            },
            {
              name: "--tag",
              description: "Tag for the new managed database",
              args: {
                name: "tag",
              },
            },
            {
              name: "--trusted-ips",
              description:
                "Comma-separated list of trusted ip addresses for the new managed database",
              isRepeatable: true,
              args: {
                name: "trusted-ips",
              },
            },
            {
              name: "--vpc-id",
              description: "Vpc id for the new managed database",
              args: {
                name: "vpc-id",
              },
            },
          ],
        },
        {
          name: "db",
          description: "Commands to handle database logical DBs",
          subcommands: [
            {
              name: "create",
              description: "Create a logical database",
              args: databaseIdArg,
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the new logical database within the managed database",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a logical database",
              isDangerous: true,
              args: [
                databaseIdArg,
                {
                  name: "DB Name",
                },
              ],
            },
            {
              name: "list",
              description: "List logical databases",
              args: databaseIdArg,
            },
          ],
        },
        {
          name: ["delete", "destroy", "d"],
          description: "Delete a database",
          isDangerous: true,
          args: databaseIdArg,
        },
        {
          name: ["get", "g"],
          description: "Retrieve a database",
          args: databaseIdArg,
        },
        {
          name: ["list", "l"],
          description: "List databases",
          options: [
            {
              name: "--summarize",
              description: "Summarize the list output. One line per database",
            },
          ],
        },
        {
          name: "maintenance",
          description: "Commands to handle database maintenance updates",
          subcommands: [
            {
              name: "list",
              description: "List maintenance updates for a database",
              args: databaseIdArg,
            },
            {
              name: "start",
              description: "Start database maintenance update",
              args: databaseIdArg,
            },
          ],
        },
        {
          name: "migration",
          description: "Commands to handle database migrations",
          subcommands: [
            {
              name: "detach",
              description: "Detach a migration from a database",
              args: databaseIdArg,
            },
            {
              name: "get",
              description: "Get migration status of a database",
              args: databaseIdArg,
            },
            {
              name: "start",
              description: "Start a migration for a database",
              args: databaseIdArg,
              options: [
                {
                  name: "--database",
                  description:
                    "Source database for the managed database migration (MySQL/PostgreSQL only)",
                  args: {
                    name: "database",
                  },
                },
                {
                  name: "--host",
                  description: "Source host for the managed database migration",
                  args: {
                    name: "host",
                  },
                },
                {
                  name: "--ignored-dbs",
                  description:
                    "Comma-separated list of ignored databases for the managed database migration (MySQL/PostgreSQL only)",
                  args: {
                    name: "ignored-dbs",
                  },
                },
                {
                  name: "--password",
                  description:
                    "Source password for the managed database migration",
                  args: {
                    name: "password",
                  },
                },
                {
                  name: "--port",
                  description: "Source port for the managed database migration",
                  args: {
                    name: "port",
                  },
                },
                {
                  name: "--ssl",
                  description:
                    "Source ssl requirement for the managed database migration",
                  requiresSeparator: true,
                  args: {
                    name: "bool",
                    isOptional: true,
                    suggestions: ["true", "false"],
                  },
                },
                {
                  name: "--username",
                  description:
                    "Source username for the managed database migration (uses `default` for caching databases if omitted)",
                  args: {
                    name: "username",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "plan",
          description: "Commands to access database plans",
          subcommands: [
            {
              name: ["list", "l"],
              description: "List database plans",
            },
          ],
        },
        {
          name: "quota",
          description: "Commands to handle database quotas",
          subcommands: [
            {
              name: "create",
              description: "Create a database quota",
              args: databaseIdArg,
              options: [
                {
                  name: "--client-id",
                  description: "Client ID for the new managed database quota",
                  args: {
                    name: "client-id",
                  },
                },
                {
                  name: "--consumer-byte-rate",
                  description:
                    "Consumer byte rate for the new managed database quota",
                  args: {
                    name: "consumer-byte-rate",
                  },
                },
                {
                  name: "--producer-byte-rate",
                  description:
                    "Producer byte rate factor for the new managed database quota",
                  args: {
                    name: "producer-byte-rate",
                  },
                },
                {
                  name: "--request-percentage",
                  description:
                    "CPU request percentage for the new managed database quota",
                  args: {
                    name: "request-percentage",
                  },
                },
                {
                  name: "--user",
                  description: "User for the new managed database quota",
                  args: {
                    name: "user",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a database quota",
              isDangerous: true,
              args: [databaseIdArg, clientIdArg, userNameArg],
            },
            {
              name: "get",
              description: "Get a database quota",
              args: [databaseIdArg, clientIdArg, userNameArg],
            },
            {
              name: "list",
              description: "List database quotas",
              args: databaseIdArg,
            },
            {
              name: "update",
              description: "Update a database quota",
              args: [databaseIdArg, clientIdArg, userNameArg],
              options: [
                {
                  name: "--consumer-byte-rate",
                  description:
                    "Consumer byte rate for the managed database quota",
                  args: {
                    name: "consumer-byte-rate",
                  },
                },
                {
                  name: "--producer-byte-rate",
                  description:
                    "Producer byte rate factor for the managed database quota",
                  args: {
                    name: "producer-byte-rate",
                  },
                },
                {
                  name: "--request-percentage",
                  description:
                    "CPU request percentage for the managed database quota",
                  args: {
                    name: "request-percentage",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "read-replica",
          description: "Commands to handle database read replicas",
          subcommands: [
            {
              name: "create",
              description: "Create a read-only replica of a database",
              args: databaseIdArg,
              options: [
                {
                  name: ["--label", "-l"],
                  description:
                    "Label for the new managed database read replica",
                  isRequired: true,
                  args: {
                    name: "label",
                  },
                },
                {
                  name: ["--region", "-r"],
                  description:
                    "Region id for the new managed database read replica",
                  isRequired: true,
                  args: {
                    name: "region",
                  },
                },
              ],
            },
            {
              name: "promote",
              description: "Promote a read-only replica of a database",
              args: databaseIdArg,
            },
          ],
        },
        {
          name: "topic",
          description: "Commands to handle database topics",
          subcommands: [
            {
              name: "create",
              description: "Create a database topic",
              args: databaseIdArg,
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name for the new managed database topic",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--partitions", "-p"],
                  description: "Partitions for the new managed database topic",
                  args: {
                    name: "partitions",
                  },
                },
                {
                  name: ["--replication", "-r"],
                  description:
                    "Replication factor for the new managed database topic",
                  args: {
                    name: "replication",
                  },
                },
                {
                  name: "--retention-bytes",
                  description:
                    "Retention bytes for the new managed database topic",
                  args: {
                    name: "retention-bytes",
                  },
                },
                {
                  name: "--retention-hours",
                  description:
                    "Retention hours for the new managed database topic",
                  args: {
                    name: "retention-hours",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a database topic",
              isDangerous: true,
              args: [databaseIdArg, topicNameArg],
            },
            {
              name: "get",
              description: "Get a database topic",
              args: [databaseIdArg, topicNameArg],
            },
            {
              name: "list",
              description: "List database topics",
              args: databaseIdArg,
            },
            {
              name: "update",
              description: "Update a database topic",
              args: [databaseIdArg, topicNameArg],
              options: [
                {
                  name: ["--partitions", "-p"],
                  description: "Partitions for the managed database topic",
                  args: {
                    name: "partitions",
                  },
                },
                {
                  name: ["--replication", "-r"],
                  description:
                    "Replication factor for the managed database topic",
                  args: {
                    name: "replication",
                  },
                },
                {
                  name: "--retention-bytes",
                  description: "Retention bytes for the managed database topic",
                  args: {
                    name: "retention-bytes",
                  },
                },
                {
                  name: "--retention-hours",
                  description: "Retention hours for the managed database topic",
                  args: {
                    name: "retention-hours",
                  },
                },
              ],
            },
          ],
        },
        {
          name: ["update", "u"],
          description: "Update a database",
          args: databaseIdArg,
          options: [
            {
              name: "--backup-hour",
              description: "Backup hour for the managed database",
              args: {
                name: "backup-hour",
              },
            },
            {
              name: "--backup-minute",
              description: "Backup minute for the managed database",
              args: {
                name: "backup-minute",
              },
            },
            {
              name: "--cluster-time-zone",
              description: "Configured time zone for the managed database",
              args: {
                name: "cluster-time-zone",
              },
            },
            {
              name: "--enable-kafka-connect",
              description:
                "Enable Kafka Connect for the new apache kafka managed database",
            },
            {
              name: "--enable-kafka-rest",
              description:
                "Enable Kafka REST for the new apache kafka managed database",
            },
            {
              name: "--enable-schema-registry",
              description:
                "Enable Schema Registry for the new apache kafka managed database",
            },
            {
              name: "--eviction-policy",
              description: "Eviction policy for the caching managed database",
              args: {
                name: "eviction-policy",
              },
            },
            {
              name: ["--label", "-l"],
              description: "Label for the managed database",
              args: {
                name: "label",
              },
            },
            {
              name: "--maintenance-dow",
              description: "Maintenance day of week for the managed database",
              args: {
                name: "maintenance-dow",
              },
            },
            {
              name: "--maintenance-time",
              description: "Maintenance time for the managed database",
              args: {
                name: "maintenance-time",
              },
            },
            {
              name: "--mysql-long-query-time",
              description:
                "Long query time for the mysql managed database when slow query logging is enabled",
              args: {
                name: "mysql-long-query-time",
              },
            },
            {
              name: "--mysql-require-primary-key",
              description:
                "Enable requiring primary keys for the mysql managed database",
              requiresSeparator: true,
              args: {
                name: "bool",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--mysql-slow-query-log",
              description:
                "Enable slow query logging for the mysql managed database",
              requiresSeparator: true,
              args: {
                name: "bool",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--mysql-sql-modes",
              description:
                "Comma-separated list of sql modes for the managed database",
              isRepeatable: true,
              args: {
                name: "mysql-sql-modes",
              },
            },
            {
              name: ["--plan", "-p"],
              description: "Plan id for the managed database",
              args: {
                name: "plan",
              },
            },
            {
              name: ["--region", "-r"],
              description: "Region id for the managed database",
              args: {
                name: "region",
              },
            },
            {
              name: ["--tag", "-t"],
              description: "Tag for the managed database",
              args: {
                name: "tag",
              },
            },
            {
              name: "--trusted-ips",
              description:
                "Comma-separated list of trusted ip addresses for the managed database",
              isRepeatable: true,
              args: {
                name: "trusted-ips",
              },
            },
            {
              name: "--vpc-id",
              description: "Vpc id for the managed database",
              args: {
                name: "vpc-id",
              },
            },
          ],
        },
        {
          name: "usage",
          description: "Commands to display database usage information",
          subcommands: [
            {
              name: "get",
              description: "Get database usage",
              args: databaseIdArg,
            },
          ],
        },
        {
          name: "user",
          description: "Commands to handle database users",
          subcommands: [
            {
              name: "acl",
              description:
                "Commands to manage database user access control (Caching only)",
              subcommands: [
                {
                  name: "update",
                  description: "Update a database user ACL",
                  args: [databaseIdArg, userNameArg],
                  options: [
                    {
                      name: "--acl-categories",
                      description: "List of rules for command categories",
                      isRepeatable: true,
                      args: {
                        name: "acl-categories",
                      },
                    },
                    {
                      name: "--acl-channels",
                      description: "List of publish/subscribe channel patterns",
                      isRepeatable: true,
                      args: {
                        name: "acl-channels",
                      },
                    },
                    {
                      name: "--acl-commands",
                      description: "List of rules for individual commands",
                      isRepeatable: true,
                      args: {
                        name: "acl-commands",
                      },
                    },
                    {
                      name: "--acl-keys",
                      description: "List of key access rules",
                      isRepeatable: true,
                      args: {
                        name: "acl-keys",
                      },
                    },
                    {
                      name: "--permission",
                      description: "The kafka permission level",
                      args: {
                        name: "permission",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "create",
              description: "Create a database user",
              args: databaseIdArg,
              options: [
                {
                  name: ["--encryption", "-e"],
                  description:
                    "Encryption type for the new managed database user (MySQL only)",
                  args: {
                    name: "encryption",
                  },
                },
                {
                  name: ["--password", "-p"],
                  description:
                    "Password for the new managed database user (omit or leave empty to generate a random secure password)",
                  args: {
                    name: "password",
                  },
                },
                {
                  name: "--permission",
                  description:
                    "Permission level for the new managed database user (Kafka only)",
                  args: {
                    name: "permission",
                  },
                },
                {
                  name: ["--username", "-u"],
                  description: "Username for the new managed database user",
                  args: {
                    name: "username",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a database user",
              isDangerous: true,
              args: [databaseIdArg, userNameArg],
            },
            {
              name: "get",
              description: "Get a database user",
              args: [databaseIdArg, userNameArg],
            },
            {
              name: "list",
              description: "List database users",
              args: databaseIdArg,
            },
            {
              name: "update",
              description: "Update a database user",
              args: [databaseIdArg, userNameArg],
              options: [
                {
                  name: ["--password", "-p"],
                  description:
                    "Password for the managed database user (omit or leave empty to generate a random secure password)",
                  args: {
                    name: "password",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "version",
          description: "Commands to handle database version upgrades",
          subcommands: [
            {
              name: "list",
              description: "List all version upgrades for a database",
              args: databaseIdArg,
            },
            {
              name: "upgrade",
              description: "Start a version upgrade on a database",
              args: databaseIdArg,
              options: [
                {
                  name: ["--version", "-v"],
                  description: "Version of the managed database to upgrade to",
                  isRequired: true,
                  args: {
                    name: "version",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "dns",
      description: "Commands to control DNS records",
      subcommands: [
        {
          name: "domain",
          description: "DNS domain commands",
          subcommands: [
            {
              name: "create",
              description: "Create a domain",
              options: [
                {
                  name: ["--domain", "-d"],
                  description: "Name of the domain",
                  isRequired: true,
                  args: {
                    name: "domain",
                  },
                },
                {
                  name: ["--ip", "-i"],
                  description: "Instance ip you want to assign this domain to",
                  args: {
                    name: "ip",
                  },
                },
              ],
            },
            {
              name: ["delete", "destroy"],
              description: "Delete a domain",
              isDangerous: true,
              args: domainNameArg,
            },
            {
              name: "dnssec",
              description: "Enable or disable DNSSEC",
              args: domainNameArg,
              options: [
                {
                  name: ["--disabled", "-d"],
                  description: "Disable dnssec",
                  exclusiveOn: ["--enabled"],
                },
                {
                  name: ["--enabled", "-e"],
                  description: "Enable dnssec",
                  exclusiveOn: ["--disabled"],
                },
              ],
            },
            {
              name: "dnssec-info",
              description: "Get DNSSEC info",
              args: domainNameArg,
            },
            {
              name: "get",
              description: "Get a domain",
              args: domainNameArg,
            },
            {
              name: "list",
              description: "Get a list of domains",
              options: paging,
            },
            {
              name: "soa-info",
              description: "Get SOA info",
              args: domainNameArg,
            },
            {
              name: "soa-update",
              description: "Update SOA for a domain",
              args: domainNameArg,
              options: [
                {
                  name: ["--email", "-e"],
                  description:
                    "Administrative email to store in the SOA record",
                  args: {
                    name: "email",
                  },
                },
                {
                  name: ["--ns-primary", "-n"],
                  description: "Primary nameserver to store in the SOA record",
                  args: {
                    name: "ns-primary",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "record",
          description: "Commands to mangage DNS records",
          subcommands: [
            {
              name: "create",
              description: "Create a DNS record",
              args: domainNameArg,
              options: [
                {
                  name: ["--data", "-d"],
                  description: "Data for the record",
                  isRequired: true,
                  args: {
                    name: "data",
                  },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the record",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--priority", "-p"],
                  description: "Only required for MX and SRV",
                  args: {
                    name: "priority",
                  },
                },
                {
                  name: ["--ttl", "-l"],
                  description: "Ttl for the record",
                  args: {
                    name: "ttl",
                  },
                },
                {
                  name: ["--type", "-t"],
                  description: "Type for the record",
                  isRequired: true,
                  args: {
                    name: "type",
                  },
                },
              ],
            },
            {
              name: ["delete", "destroy"],
              description: "Delete a DNS record",
              isDangerous: true,
              args: [domainNameArg, recordIdArg],
            },
            {
              name: "get",
              description: "Get a DNS record",
              args: [domainNameArg, recordIdArg],
            },
            {
              name: "list",
              description: "List all DNS records",
              args: domainNameArg,
              options: paging,
            },
            {
              name: "update",
              description: "Update DNS record",
              args: [domainNameArg, recordIdArg],
              options: [
                {
                  name: ["--data", "-d"],
                  description: "Data for the record",
                  args: {
                    name: "data",
                  },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of record",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--priority", "-p"],
                  description: "Only required for MX and SRV",
                  args: {
                    name: "priority",
                  },
                },
                {
                  name: "--ttl",
                  description: "Time to live for the record",
                  args: {
                    name: "ttl",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["firewall", "fw"],
      description: "Commands to manage firewalls",
      subcommands: [
        {
          name: ["group", "g"],
          description: "Commands to access firewall group functions",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a firewall group",
              options: [
                {
                  name: ["--description", "-d"],
                  description: "Description of firewall group",
                  args: {
                    name: "description",
                  },
                },
              ],
            },
            {
              name: ["delete", "d", "destroy"],
              description: "Delete a firewall group",
              isDangerous: true,
              args: firewallGroupIdArg,
            },
            {
              name: "get",
              description: "Get a firewall group",
              args: firewallGroupIdArg,
            },
            {
              name: ["list", "l"],
              description: "List all firewall groups",
              options: paging,
            },
            {
              name: ["update", "u"],
              description: "Update a firewall group description",
              args: firewallGroupIdArg,
              options: [
                {
                  name: ["--description", "-d"],
                  description: "Description of firewall group",
                  isRequired: true,
                  args: {
                    name: "description",
                  },
                },
              ],
            },
          ],
        },
        {
          name: ["rule", "r"],
          description: "Commands to access firewall rules",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a firewall rule",
              args: firewallGroupIdArg,
              options: [
                {
                  name: ["--ip-type", "-t"],
                  description: "The type of IP rule - v4 or v6",
                  isRequired: true,
                  args: {
                    name: "ip-type",
                    suggestions: ["v4", "v6"],
                  },
                },
                {
                  name: ["--notes", "-n"],
                  description: "This field supports notes up to 255 characters",
                  args: {
                    name: "notes",
                  },
                },
                {
                  name: ["--port", "-r"],
                  description:
                    "TCP/UDP only. This field can be an integer value specifying a port or a colon separated port range",
                  args: {
                    name: "port",
                  },
                },
                {
                  name: ["--protocol", "-p"],
                  description:
                    "Protocol type. Possible values: 'icmp', 'tcp', 'udp', 'gre'",
                  isRequired: true,
                  args: {
                    name: "protocol",
                    suggestions: ["icmp", "tcp", "udp", "gre"],
                  },
                },
                {
                  name: ["--size", "-z"],
                  description:
                    "The number of bits for the netmask in CIDR notation",
                  isRequired: true,
                  args: {
                    name: "size",
                  },
                },
                {
                  name: "--source",
                  description:
                    'When empty, uses value from subnet and size. If "cloudflare", allows all Cloudflare IP space through firewall',
                  args: {
                    name: "source",
                  },
                },
                {
                  name: ["--subnet", "-s"],
                  description: "The IPv4 network in CIDR notation",
                  isRequired: true,
                  args: {
                    name: "subnet",
                  },
                },
              ],
            },
            {
              name: ["delete", "d", "destroy"],
              description: "Delete a firewall rule",
              isDangerous: true,
              args: [
                firewallGroupIdArg,
                {
                  name: "Firewall Rule Number",
                },
              ],
            },
            {
              name: "get",
              description: "Get a firewall rule",
              args: [
                firewallGroupIdArg,
                {
                  name: "Firewall Rule Number",
                },
              ],
            },
            {
              name: ["list", "l"],
              description: "List all firewall rules",
              args: firewallGroupIdArg,
              options: paging,
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "inference",
      description: "Commands to manage serverless inference",
      subcommands: [
        {
          name: ["create", "c"],
          description: "Create inference subscription",
          options: [
            {
              name: ["--label", "-l"],
              description: "Label for the new inference subscription",
              isRequired: true,
              args: {
                name: "label",
              },
            },
          ],
        },
        {
          name: ["delete", "destroy", "d"],
          description: "Delete an inference subscription",
          isDangerous: true,
          args: inferenceIdArg,
        },
        {
          name: ["get", "g"],
          description: "Retrieve an inference subscription",
          args: inferenceIdArg,
        },
        {
          name: ["list", "l"],
          description: "List inference subscriptions",
        },
        {
          name: ["update", "u"],
          description: "Update an inference subscription",
          args: inferenceIdArg,
          options: [
            {
              name: ["--label", "-l"],
              description: "Label for the inference subscription",
              args: {
                name: "label",
              },
            },
          ],
        },
        {
          name: "usage",
          description:
            "Commands to display inference subscription usage information",
          subcommands: [
            {
              name: "get",
              description: "Get inference subscription usage",
              args: inferenceIdArg,
            },
          ],
        },
      ],
    },
    {
      name: "instance",
      description: "Commands to interact with instances",
      subcommands: [
        {
          name: ["app", "image"],
          description: "Application commands for an instance",
          subcommands: [
            {
              name: "change",
              description: "Change application",
              args: instanceId,
              options: [
                {
                  name: "--app",
                  description: "Application ID you wish to use",
                  isRequired: true,
                  args: {
                    name: "app",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List available applications",
              args: instanceId,
            },
          ],
        },
        {
          name: "backup",
          description: "List and create backup schedules for an instance",
          subcommands: [
            {
              name: "create",
              description: "Create a backup schedule for an instance",
              args: instanceId,
              options: [
                {
                  name: ["--dom", "-m"],
                  description:
                    "Day-of-month value (1-28). Applicable to crons: 'monthly'",
                  args: {
                    name: "dom",
                  },
                },
                {
                  name: ["--dow", "-w"],
                  description:
                    "Day-of-week value (0-6). Applicable to crons: 'weekly'",
                  args: {
                    name: "dow",
                  },
                },
                {
                  name: "--hour",
                  description:
                    "Hour value (0-23). Applicable to crons: 'daily', 'weekly', 'monthly', 'daily_alt_even', 'daily_alt_odd'",
                  args: {
                    name: "hour",
                  },
                },
                {
                  name: ["--type", "-t"],
                  description:
                    "Type string Backup cron type. Can be one of 'daily', 'weekly', 'monthly', 'daily_alt_even', or 'daily_alt_odd'",
                  isRequired: true,
                  args: {
                    name: "type",
                    suggestions: [
                      "daily",
                      "weekly",
                      "monthly",
                      "daily_alt_even",
                      "daily_alt_odd",
                    ],
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Get the backup schedule for an instance",
              args: instanceId,
            },
          ],
        },
        {
          name: "bandwidth",
          description: "Get bandwidth usage",
          args: instanceId,
        },
        {
          name: ["create", "c"],
          description: "Create an instance",
          options: [
            {
              name: ["--app", "-a"],
              description: "Application ID you want this instance to have",
              exclusiveOn: ["--os", "--iso", "--snapshot", "--image"],
              args: {
                name: "app",
              },
            },
            {
              name: ["--auto-backup", "-b"],
              description: "Enable auto backups",
            },
            {
              name: "--block-devices",
              description:
                "A comma-separated, key-value pair list of block devices. At least one block is required for VX1 plans",
              isRepeatable: true,
              args: {
                name: "block-devices",
              },
            },
            {
              name: ["--ddos", "-d"],
              description: "Enable ddos protection",
            },
            {
              name: "--firewall-group",
              description: "The firewall group to assign to this instance",
              args: {
                name: "firewall-group",
              },
            },
            {
              name: "--host",
              description: "The hostname to assign to this instance",
              args: {
                name: "host",
              },
            },
            {
              name: "--image",
              description:
                "Image ID of the application that will be installed on the server",
              exclusiveOn: ["--os", "--iso", "--snapshot", "--app"],
              args: {
                name: "image",
              },
            },
            {
              name: "--ipv6",
              description: "Enable ipv6",
            },
            {
              name: "--ipxe",
              description:
                "If you've selected the 'custom' operating system, this can be set to chainload the specified URL on bootup",
              args: {
                name: "ipxe",
              },
            },
            {
              name: "--iso",
              description: "Iso ID you want to create the instance with",
              exclusiveOn: ["--os", "--snapshot", "--app", "--image"],
              args: {
                name: "iso",
              },
            },
            {
              name: ["--label", "-l"],
              description: "Label you want to give this instance",
              args: {
                name: "label",
              },
            },
            {
              name: ["--notify", "-n"],
              description: "Notify when instance has been created",
            },
            {
              name: "--os",
              description: "Os id you wish the instance to have",
              exclusiveOn: ["--iso", "--snapshot", "--app", "--image"],
              args: {
                name: "os",
              },
            },
            {
              name: ["--plan", "-p"],
              description: "The plan ID with which to create the instance",
              isRequired: true,
              args: {
                name: "plan",
              },
            },
            {
              name: ["--region", "-r"],
              description:
                "The ID of the region in which to create the instance",
              isRequired: true,
              args: {
                name: "region",
              },
            },
            {
              name: "--reserved-ipv4",
              description:
                "ID of the floating IP to use as the main IP for this instance",
              args: {
                name: "reserved-ipv4",
              },
            },
            {
              name: "--script-id",
              description: "Script id of the startup script",
              args: {
                name: "script-id",
              },
            },
            {
              name: "--snapshot",
              description: "Snapshot ID you want to create the instance with",
              exclusiveOn: ["--os", "--iso", "--app", "--image"],
              args: {
                name: "snapshot",
              },
            },
            {
              name: ["--ssh-keys", "-s"],
              description: "Ssh keys you want to assign to the instance",
              isRepeatable: true,
              args: {
                name: "ssh-keys",
              },
            },
            {
              name: "--tags",
              description:
                "A comma-separated list of tags to assign to this instance",
              isRepeatable: true,
              args: {
                name: "tags",
              },
            },
            {
              name: ["--userdata", "-u"],
              description:
                "Plain text userdata you want to give to this instance",
              exclusiveOn: ["--userdata-file"],
              args: {
                name: "userdata",
              },
            },
            {
              name: "--userdata-file",
              description:
                "File path to read in for the userdata you want to give to this instance",
              exclusiveOn: ["--userdata"],
              args: {
                name: "userdata-file",
                template: "filepaths",
              },
            },
            {
              name: "--vpc-enable",
              description: "Enable VPC",
            },
            {
              name: "--vpc-ids",
              description: "VPC IDs you want to assign to the instance",
              isRepeatable: true,
              args: {
                name: "vpc-ids",
              },
            },
            {
              name: "--vpc-only",
              description:
                "Deploy with no public networking. A --vpc-ids ID with NAT gateway attached is required",
            },
          ],
        },
        {
          name: ["delete", "destroy"],
          description: "Delete an instance",
          isDangerous: true,
          args: instanceId,
        },
        {
          name: "get",
          description: "Get info on an instance",
          args: instanceId,
        },
        {
          name: "ipv4",
          description: "IPv4 instance commands",
          subcommands: [
            {
              name: "create",
              description: "Create IPv4 for instance",
              args: instanceId,
              options: [
                {
                  name: "--reboot",
                  description:
                    "Whether to reboot instance after adding ipv4 address",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete IPv4 on an instance",
              isDangerous: true,
              args: [instanceId, ipv4AddressArg],
            },
            {
              name: ["list", "v4"],
              description: "List IPv4 for an instance",
              args: instanceId,
              options: paging,
            },
          ],
        },
        {
          name: "ipv6",
          description: "Display instance IPv6 info",
          subcommands: [
            {
              name: ["list", "v6"],
              description: "List IPv6 for an instance",
              args: instanceId,
              options: paging,
            },
          ],
        },
        {
          name: "iso",
          description: "Manage ISOs on an instance",
          subcommands: [
            {
              name: "attach",
              description: "Attach ISO to an instance",
              args: instanceId,
              options: [
                {
                  name: ["--iso-id", "-i"],
                  description: "Id of the ISO you wish to attach",
                  isRequired: true,
                  args: {
                    name: "iso-id",
                  },
                },
              ],
            },
            {
              name: "detach",
              description: "Detach ISO from an instance",
              args: instanceId,
            },
            {
              name: "status",
              description: "Get ISO status",
              args: instanceId,
            },
          ],
        },
        {
          name: "label",
          description: "Label an instance",
          args: instanceId,
          options: [
            {
              name: ["--label", "-l"],
              description: "The label you want to set on an instance",
              isRequired: true,
              args: {
                name: "label",
              },
            },
          ],
        },
        {
          name: ["list", "l"],
          description: "List all instances",
          options: paging,
        },
        {
          name: "os",
          description: "Operating system commands for an instance",
          subcommands: [
            {
              name: "change",
              description: "Change operating system",
              args: instanceId,
              options: [
                {
                  name: "--os",
                  description: "Operating system ID you wish to use",
                  isRequired: true,
                  args: {
                    name: "os",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List available operating systems",
              args: instanceId,
            },
          ],
        },
        {
          name: "plan",
          description: "Plan commands for an instance",
          subcommands: [
            {
              name: "list",
              description: "List available plans",
              args: instanceId,
            },
            {
              name: "upgrade",
              description: "Upgrade instance plan",
              args: instanceId,
              options: [
                {
                  name: "--plan",
                  description: "The plan ID you wish to use",
                  isRequired: true,
                  args: {
                    name: "plan",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "reinstall",
          description: "Reinstall an instance",
          args: instanceId,
          options: [
            {
              name: "--host",
              description: "The hostname to assign to this instance",
              args: {
                name: "host",
              },
            },
          ],
        },
        {
          name: "restart",
          description: "Restart an instance",
          args: instanceId,
        },
        {
          name: "restore",
          description: "Restore instance from backup or snapshot",
          args: instanceId,
          options: [
            {
              name: ["--backup", "-b"],
              description: "Id of backup you wish to restore the instance with",
              exclusiveOn: ["--snapshot"],
              args: {
                name: "backup",
              },
            },
            {
              name: ["--snapshot", "-s"],
              description:
                "Id of snapshot you wish to restore the instance with",
              exclusiveOn: ["--backup"],
              args: {
                name: "snapshot",
              },
            },
          ],
        },
        {
          name: "reverse-dns",
          description: "Commands to handle reverse DNS on an instance",
          subcommands: [
            {
              name: "default-ipv4",
              description:
                "Set a reverse DNS entry for an IPv4 address of an instance to the original setting",
              args: [instanceId, ipv4AddressArg],
            },
            {
              name: "delete-ipv6",
              description:
                "Remove a reverse DNS IPv6 address entry for an instance",
              args: [
                instanceId,
                {
                  name: "IPv6 Address",
                },
              ],
            },
            {
              name: "list-ipv6",
              description: "List the IPv6 reverse DNS entries for an instance",
              args: instanceId,
            },
            {
              name: "set-ipv4",
              description:
                "Set a reverse DNS IPv4 address entry for an instance",
              args: [instanceId, ipv4AddressArg],
              options: [
                {
                  name: ["--entry", "-e"],
                  description: "Reverse dns entry",
                  isRequired: true,
                  args: {
                    name: "entry",
                  },
                },
              ],
            },
            {
              name: "set-ipv6",
              description:
                "Set a reverse DNS IPv6 address entry for an instance",
              args: [
                instanceId,
                {
                  name: "IPv6 Address",
                },
              ],
              options: [
                {
                  name: ["--entry", "-e"],
                  description: "Reverse dns entry",
                  isRequired: true,
                  args: {
                    name: "entry",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "start",
          description: "Start an instance",
          args: instanceId,
        },
        {
          name: "stop",
          description: "Stop an instance",
          args: instanceId,
        },
        {
          name: "tags",
          description: "Update tags on an instance",
          args: instanceId,
          options: [
            {
              name: ["--tags", "-t"],
              description:
                "A comma separated list of tags to apply to the instance",
              isRequired: true,
              isRepeatable: true,
              args: {
                name: "tags",
              },
            },
          ],
        },
        {
          name: "update-firewall-group",
          description: "Assign a firewall group to instance",
          args: instanceId,
          options: [
            {
              name: ["--firewall-group-id", "-f"],
              description:
                "Firewall group id that you want to assign. 0 Value will unset the firewall-group",
              isRequired: true,
              args: {
                name: "firewall-group-id",
              },
            },
          ],
        },
        {
          name: ["user-data", "u", "userdata"],
          description: "Commands to manage user data on an instance",
          subcommands: [
            {
              name: "get",
              description: "Get the user data on an instance",
              args: instanceId,
            },
            {
              name: "set",
              description: "Update user data on an instance",
              args: instanceId,
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "File path from which to read the instance user data",
                  exclusiveOn: ["--text"],
                  args: {
                    name: "file",
                    template: "filepaths",
                  },
                },
                {
                  name: ["--text", "-t"],
                  description: "Plain text to insert into instance user data",
                  exclusiveOn: ["--file"],
                  args: {
                    name: "text",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "vpc",
          description: "Commands to handle vpcs on an instance",
          subcommands: [
            {
              name: "attach",
              description: "Attach a VPC to an instance",
              args: [instanceId, vpcIdArg],
            },
            {
              name: "detach",
              description: "Detach a VPC from an instance",
              args: [instanceId, vpcIdArg],
            },
          ],
        },
      ],
    },
    {
      name: "iso",
      description: "Commands to manage ISOs",
      subcommands: [
        {
          name: "create",
          description: "Create an ISO from url",
          options: [
            {
              name: ["--url", "-u"],
              description: "Url from where the ISO will be downloaded",
              isRequired: true,
              args: {
                name: "url",
              },
            },
          ],
        },
        {
          name: ["delete", "destroy"],
          description: "Delete a private ISO",
          isDangerous: true,
          args: {
            name: "ISO ID",
          },
        },
        {
          name: "get",
          description: "Get a private ISO by ID",
          args: {
            name: "ISO ID",
          },
        },
        {
          name: "list",
          description: "List all private ISOs available",
          options: paging,
        },
        {
          name: "public",
          description: "List all public ISOs",
        },
      ],
    },
    {
      name: ["kubernetes", "k"],
      description: "Commands to manage kubernetes clusters",
      subcommands: [
        {
          name: "config",
          description: "Get a kubernetes cluster config",
          args: clusterIdArg,
          options: [
            {
              name: "--output-file",
              description: "The file path to write kubeconfig to",
              args: {
                name: "output-file",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: ["create", "c"],
          description: "Create kubernetes cluster",
          options: [
            {
              name: ["--enable-firewall", "-f"],
              description:
                "Whether a firewall group should be created for the cluster",
            },
            {
              name: "--high-avail",
              description:
                "Whether or not the cluster should be deployed with multiple, highly available, control planes",
            },
            {
              name: ["--label", "-l"],
              description: "Label for your kubernetes cluster",
              isRequired: true,
              args: {
                name: "label",
              },
            },
            {
              name: ["--node-pools", "-n"],
              description:
                "Node pools as comma-separated key:value pairs, separated by / (e.g. plan:vhf-8c-32gb,label:pool,quantity:3/plan:...)",
              isRequired: true,
              isRepeatable: true,
              args: {
                name: "node-pools",
              },
            },
            {
              name: ["--region", "-r"],
              description:
                "Region you want your kubernetes cluster to be located in",
              isRequired: true,
              args: {
                name: "region",
              },
            },
            {
              name: ["--version", "-v"],
              description: "The kubernetes version you want for your cluster",
              isRequired: true,
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: ["delete", "destroy", "d"],
          description: "Delete a kubernetes cluster",
          isDangerous: true,
          args: clusterIdArg,
          options: [
            {
              name: ["--delete-resources", "-r"],
              description: "Delete a kubernetes cluster and related resources",
            },
          ],
        },
        {
          name: ["get", "g"],
          description: "Retrieve a kubernetes cluster",
          args: clusterIdArg,
        },
        {
          name: ["list", "l"],
          description: "List kubernetes clusters",
          options: [
            ...paging,
            {
              name: "--summarize",
              description: "Summarize the list output. One line per cluster",
            },
          ],
        },
        {
          name: ["node-pool", "n"],
          description: "Commands for kubernetes cluster node pools",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a node pool in a kubernetes cluster",
              args: clusterIdArg,
              options: [
                {
                  name: "--auto-scaler",
                  description: "Enable the auto scaler with your cluster",
                },
                {
                  name: ["--label", "-l"],
                  description: "Label you want for your node pool",
                  isRequired: true,
                  args: {
                    name: "label",
                  },
                },
                {
                  name: "--max-nodes",
                  description: "Maximum nodes for auto scaler",
                  args: {
                    name: "max-nodes",
                  },
                },
                {
                  name: "--min-nodes",
                  description: "Minimum nodes for auto scaler",
                  args: {
                    name: "min-nodes",
                  },
                },
                {
                  name: "--node-labels",
                  description:
                    "A key=value comma separated string of labels to apply to the nodes in this node pool",
                  isRepeatable: true,
                  args: {
                    name: "key=value",
                  },
                },
                {
                  name: ["--plan", "-p"],
                  description: "The plan you want for your node pool",
                  isRequired: true,
                  args: {
                    name: "plan",
                  },
                },
                {
                  name: ["--quantity", "-q"],
                  description:
                    "Number of nodes in your node pool. Note that at least one node is required for a node pool",
                  isRequired: true,
                  args: {
                    name: "quantity",
                  },
                },
                {
                  name: ["--tag", "-t"],
                  description: "Tag you want for your node pool",
                  args: {
                    name: "tag",
                  },
                },
              ],
            },
            {
              name: ["delete", "destroy", "d"],
              description: "Delete a cluster node pool",
              isDangerous: true,
              args: [clusterIdArg, nodePoolIdArg],
            },
            {
              name: ["get", "g"],
              description: "Get a node pool in kubernetes cluster",
              args: [clusterIdArg, nodePoolIdArg],
            },
            {
              name: ["list", "l"],
              description: "List node pools",
              args: clusterIdArg,
              options: [
                ...paging,
                {
                  name: "--summarize",
                  description:
                    "Summarize the list output. One line per node pool",
                },
              ],
            },
            {
              name: "node",
              description: "Commands to manage node pool nodes",
              subcommands: [
                {
                  name: ["delete", "destroy", "d"],
                  description: "Delete a node in a cluster node pool",
                  isDangerous: true,
                  args: [
                    clusterIdArg,
                    nodePoolIdArg,
                    {
                      name: "Node ID",
                    },
                  ],
                },
                {
                  name: ["recycle", "r"],
                  description: "Recycle a node in a cluster node pool",
                  args: [
                    clusterIdArg,
                    nodePoolIdArg,
                    {
                      name: "Node ID",
                    },
                  ],
                },
              ],
            },
            {
              name: ["update", "u"],
              description: "Update a cluster node pool",
              args: [clusterIdArg, nodePoolIdArg],
              options: [
                {
                  name: "--auto-scaler",
                  description: "Enable the auto scaler with your cluster",
                },
                {
                  name: "--max-nodes",
                  description: "Maximum nodes for auto scaler",
                  args: {
                    name: "max-nodes",
                  },
                },
                {
                  name: "--min-nodes",
                  description: "Minimum nodes for auto scaler",
                  args: {
                    name: "min-nodes",
                  },
                },
                {
                  name: "--node-labels",
                  description:
                    "A key=value comma separated string of labels to apply to the nodes in this node pool",
                  isRepeatable: true,
                  args: {
                    name: "key=value",
                  },
                },
                {
                  name: ["--quantity", "-q"],
                  description:
                    "Number of nodes in your node pool. Note that at least one node is required for a node pool",
                  args: {
                    name: "quantity",
                  },
                },
                {
                  name: ["--tag", "-t"],
                  description: "The tag the node pool",
                  args: {
                    name: "tag",
                  },
                },
              ],
            },
          ],
        },
        {
          name: ["update", "u"],
          description: "Update a kubernetes cluster",
          args: clusterIdArg,
          options: [
            {
              name: ["--label", "-l"],
              description: "Label for your kubernetes cluster",
              isRequired: true,
              args: {
                name: "label",
              },
            },
          ],
        },
        {
          name: ["upgrades", "upgrade", "e"],
          description: "Commands for kubernetes version upgrades",
          subcommands: [
            {
              name: ["list", "l"],
              description: "Get available upgrades for a cluster",
              args: clusterIdArg,
            },
            {
              name: ["start", "s"],
              description: "Perform an upgrade on a cluster",
              args: clusterIdArg,
              options: [
                {
                  name: ["--version", "-v"],
                  description: "The version to upgrade the cluster to",
                  isRequired: true,
                  args: {
                    name: "version",
                  },
                },
              ],
            },
          ],
        },
        {
          name: ["versions", "v"],
          description: "List supported kubernetes versions",
        },
      ],
    },
    {
      name: "load-balancer",
      description: "Commands to managed load balancers",
      subcommands: [
        {
          name: ["create", "c"],
          description: "Create a load balancer",
          options: [
            {
              name: ["--balancing-algorithm", "-b"],
              description:
                "Balancing algorithm that determines server selection",
              args: {
                name: "balancing-algorithm",
                suggestions: ["roundrobin", "leastconn"],
              },
            },
            {
              name: "--certificate",
              description: "Path to SSL certificate",
              args: {
                name: "certificate",
                template: "filepaths",
              },
            },
            {
              name: "--certificate-b64",
              description: "Path to Base64-encoded SSL certificate",
              args: {
                name: "certificate-b64",
                template: "filepaths",
              },
            },
            {
              name: "--certificate-chain",
              description: "Path to SSL certificate chain",
              args: {
                name: "certificate-chain",
                template: "filepaths",
              },
            },
            {
              name: "--certificate-chain-b64",
              description: "Path to Base64-encoded SSL certificate chain",
              args: {
                name: "certificate-chain-b64",
                template: "filepaths",
              },
            },
            {
              name: ["--check-interval", "-c"],
              description: "Interval between health checks",
              args: {
                name: "check-interval",
              },
            },
            {
              name: "--cookie-name",
              description: "The cookie name to make sticky",
              args: {
                name: "cookie-name",
              },
            },
            {
              name: "--firewall-rules",
              description:
                "Firewall rules as comma-separated key:value pairs, separated by - (e.g. port:80,ip_type:v4,source:0.0.0.0/0)",
              isRepeatable: true,
              args: {
                name: "firewall-rules",
              },
            },
            {
              name: ["--forwarding-rules", "-f"],
              description:
                "Forwarding rules as comma-separated key:value pairs, separated by - (e.g. frontend_port:80,frontend_protocol:http,backend_port:80,backend_protocol:http)",
              isRepeatable: true,
              args: {
                name: "forwarding-rules",
              },
            },
            {
              name: "--global-regions",
              description:
                "Deploy the load balancer across multiple global regions",
              isRepeatable: true,
              args: {
                name: "global-regions",
              },
            },
            {
              name: "--healthy-threshold",
              description:
                "Number times a check must succeed before returning to healthy status",
              args: {
                name: "healthy-threshold",
              },
            },
            {
              name: "--http-version",
              description:
                "Set HTTP version. Use 2 for HTTP2 or 3 for HTTP3. HTTP3 requires HTTP2 to be enabled",
              args: {
                name: "http-version",
                suggestions: ["2", "3"],
              },
            },
            {
              name: ["--instances", "-i"],
              description:
                "An array of instances IDs that you want attached to the load balancer",
              isRepeatable: true,
              args: {
                name: "instances",
              },
            },
            {
              name: ["--label", "-l"],
              description: "The label for your load balancer",
              args: {
                name: "label",
              },
            },
            {
              name: ["--nodes", "-n"],
              description:
                "The number of nodes to add to the load balancer (1-99), must be an odd number",
              args: {
                name: "nodes",
              },
            },
            {
              name: "--path",
              description:
                "HTTP Path to check. only applies if protocol is HTTP or HTTPS",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--port",
              description: "The port to use for health checks",
              args: {
                name: "port",
              },
            },
            {
              name: "--private-key",
              description: "Path to SSL private key",
              args: {
                name: "private-key",
                template: "filepaths",
              },
            },
            {
              name: "--private-key-b64",
              description: "Path to Base64-encoded SSL private key",
              args: {
                name: "private-key-b64",
                template: "filepaths",
              },
            },
            {
              name: "--protocol",
              description: "The protocol to use for health checks",
              args: {
                name: "protocol",
                suggestions: ["http", "https", "tcp"],
              },
            },
            {
              name: ["--proxy-protocol", "-p"],
              description:
                "If true, you must configure backend nodes to accept Proxy protocol",
            },
            {
              name: ["--region", "-r"],
              description:
                "Region id you wish to have the load balancer created in",
              isRequired: true,
              args: {
                name: "region",
              },
            },
            {
              name: ["--response-timeout", "-t"],
              description: "Timeout before health check fails",
              args: {
                name: "response-timeout",
              },
            },
            {
              name: ["--ssl-redirect", "-s"],
              description:
                "If true, this will redirect HTTP traffic to HTTPS. You must have an HTTPS rule and SSL certificate installed on the load balancer to enable this option",
            },
            {
              name: "--timeout",
              description:
                "The maximum time allowed for the connection to remain inactive before timing out in seconds",
              args: {
                name: "timeout",
              },
            },
            {
              name: ["--unhealthy-threshold", "-u"],
              description:
                "Number times a check must fail before becoming unhealthy",
              args: {
                name: "unhealthy-threshold",
              },
            },
            {
              name: ["--vpc", "-v"],
              description:
                "The VPC ID to attach to your load balancer. When not provided, load balancer defaults to public network",
              args: {
                name: "vpc",
              },
            },
          ],
        },
        {
          name: ["delete", "destroy", "d"],
          description: "Delete a load balancer",
          isDangerous: true,
          args: loadBalancerIdArg,
        },
        {
          name: "firewall",
          description: "Commands to retrieve firewall rules on a load balancer",
          subcommands: [
            {
              name: "get",
              description: "Get a firewall rule",
              args: [loadBalancerIdArg, ruleIdArg],
            },
            {
              name: "list",
              description: "List all firewall rules",
              args: loadBalancerIdArg,
              options: paging,
            },
          ],
        },
        {
          name: "forwarding",
          description: "Commands to manage forwarding rules on a load balancer",
          subcommands: [
            {
              name: "create",
              description: "Create a forwarding rule",
              args: loadBalancerIdArg,
              options: [
                {
                  name: "--backend-port",
                  description:
                    "The port number destination on the backend server",
                  isRequired: true,
                  args: {
                    name: "backend-port",
                  },
                },
                {
                  name: "--backend-protocol",
                  description: "The protocol destination on the backend server",
                  isRequired: true,
                  args: {
                    name: "backend-protocol",
                    suggestions: ["http", "https", "tcp"],
                  },
                },
                {
                  name: "--frontend-port",
                  description:
                    "The port number on the Load Balancer to forward to the backend",
                  isRequired: true,
                  args: {
                    name: "frontend-port",
                  },
                },
                {
                  name: "--frontend-protocol",
                  description:
                    "The protocol on the Load Balancer to forward to the backend",
                  isRequired: true,
                  args: {
                    name: "frontend-protocol",
                    suggestions: ["http", "https", "tcp"],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a forwarding rule",
              isDangerous: true,
              args: [loadBalancerIdArg, ruleIdArg],
            },
            {
              name: "get",
              description: "Get a forwarding rule",
              args: [loadBalancerIdArg, ruleIdArg],
            },
            {
              name: "list",
              description: "List all forwarding rules",
              args: loadBalancerIdArg,
              options: paging,
            },
          ],
        },
        {
          name: ["get", "g"],
          description: "Retrieve a load balancer",
          args: loadBalancerIdArg,
        },
        {
          name: ["list", "l"],
          description: "List load balancers",
          options: [
            ...paging,
            {
              name: "--summarize",
              description:
                "Summarize the list output. One line per load balancer",
            },
          ],
        },
        {
          name: "ssl",
          description: "Commands to manage load balancer SSL configurations",
          subcommands: [
            {
              name: "delete",
              description: "Delete a load balancer SSL configuration",
              isDangerous: true,
              args: loadBalancerIdArg,
            },
            {
              name: "disable-auto-ssl",
              description:
                "Disable a load balancer auto SSL. This will not remove an ssl certificate from the load balancer",
              args: loadBalancerIdArg,
            },
            {
              name: "set-auto-ssl",
              description: "Set auto SSL certificate on a load balancer",
              args: loadBalancerIdArg,
              options: [
                {
                  name: "--domain-zone",
                  description: "The domain zone for auto SSL. E.g: example.com",
                  isRequired: true,
                  args: {
                    name: "domain-zone",
                  },
                },
                {
                  name: "--sub-domain",
                  description: "The subdomain to append to the domain zone",
                  args: {
                    name: "sub-domain",
                  },
                },
              ],
            },
            {
              name: "set-certificate",
              description: "Set SSL certificate on a load balancer",
              args: loadBalancerIdArg,
              options: [
                {
                  name: "--base64",
                  description: "Indicates SSL values are Base64-encoded",
                },
                {
                  name: "--certificate",
                  description: "Path to SSL certificate",
                  isRequired: true,
                  args: {
                    name: "certificate",
                    template: "filepaths",
                  },
                },
                {
                  name: "--chain",
                  description: "Path to SSL certificate chain",
                  args: {
                    name: "chain",
                    template: "filepaths",
                  },
                },
                {
                  name: "--private-key",
                  description: "Path to SSL private key",
                  isRequired: true,
                  args: {
                    name: "private-key",
                    template: "filepaths",
                  },
                },
              ],
            },
          ],
        },
        {
          name: ["update", "u"],
          description: "Update a load balancer",
          args: loadBalancerIdArg,
          options: [
            {
              name: ["--balancing-algorithm", "-b"],
              description:
                "Balancing algorithm that determines server selection",
              args: {
                name: "balancing-algorithm",
                suggestions: ["roundrobin", "leastconn"],
              },
            },
            {
              name: ["--check-interval", "-c"],
              description: "Interval between health checks",
              args: {
                name: "check-interval",
              },
            },
            {
              name: "--cookie-name",
              description: "The cookie name to make sticky",
              args: {
                name: "cookie-name",
              },
            },
            {
              name: "--firewall-rules",
              description:
                "Firewall rules as comma-separated key:value pairs, separated by - (e.g. port:80,ip_type:v4,source:0.0.0.0/0)",
              isRepeatable: true,
              args: {
                name: "firewall-rules",
              },
            },
            {
              name: ["--forwarding-rules", "-f"],
              description:
                "Forwarding rules as comma-separated key:value pairs, separated by - (e.g. frontend_port:80,frontend_protocol:http,backend_port:80,backend_protocol:http)",
              isRepeatable: true,
              args: {
                name: "forwarding-rules",
              },
            },
            {
              name: "--global-regions",
              description:
                "Deploy the load balancer across multiple global regions",
              isRepeatable: true,
              args: {
                name: "global-regions",
              },
            },
            {
              name: "--healthy-threshold",
              description:
                "Number times a check must succeed before returning to healthy status",
              args: {
                name: "healthy-threshold",
              },
            },
            {
              name: "--http-version",
              description:
                "Set HTTP version. Use 2 for HTTP2 or 3 for HTTP3. HTTP3 requires HTTP2 to be enabled",
              args: {
                name: "http-version",
                suggestions: ["2", "3"],
              },
            },
            {
              name: ["--instances", "-i"],
              description:
                "An array of instances IDs that you want attached to the load balancer",
              isRepeatable: true,
              args: {
                name: "instances",
              },
            },
            {
              name: ["--label", "-l"],
              description: "The label for your load balancer",
              args: {
                name: "label",
              },
            },
            {
              name: ["--nodes", "-n"],
              description:
                "The number of nodes to add to the load balancer (1-99), must be an odd number",
              args: {
                name: "nodes",
              },
            },
            {
              name: "--path",
              description:
                "HTTP Path to check. only applies if protocol is HTTP or HTTPS",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--port",
              description: "The port to use for health checks",
              args: {
                name: "port",
              },
            },
            {
              name: "--protocol",
              description: "The protocol to use for health checks",
              args: {
                name: "protocol",
                suggestions: ["http", "https", "tcp"],
              },
            },
            {
              name: ["--proxy-protocol", "-p"],
              description:
                "If true, you must configure backend nodes to accept Proxy protocol",
            },
            {
              name: ["--response-timeout", "-t"],
              description: "Timeout before health check fails",
              args: {
                name: "response-timeout",
              },
            },
            {
              name: ["--ssl-redirect", "-s"],
              description:
                "If true, this will redirect HTTP traffic to HTTPS. You must have an HTTPS rule and SSL certificate installed on the load balancer to enable this option",
            },
            {
              name: "--timeout",
              description:
                "The maximum time allowed for the connection to remain inactive before timing out in seconds",
              args: {
                name: "timeout",
              },
            },
            {
              name: ["--unhealthy-threshold", "-u"],
              description:
                "Number times a check must fail before becoming unhealthy",
              args: {
                name: "unhealthy-threshold",
              },
            },
            {
              name: ["--vpc", "-v"],
              description: "The VPC ID to attach to your load balancer",
              args: {
                name: "vpc",
              },
            },
          ],
        },
      ],
    },
    {
      name: ["logs", "log"],
      description: "Commands to view logs",
      subcommands: [
        {
          name: ["list", "l", "get"],
          description: "Retrieve logs",
          options: [
            {
              name: ["--end", "-e"],
              description:
                "UTC timestamp for the end of the period to return logs for, at most 30 days and 1 hour after start",
              isRequired: true,
              args: {
                name: "end",
              },
            },
            {
              name: ["--level", "-l"],
              description:
                "Filter logs by a level (info, debug, warning, error, critical)",
              args: {
                name: "level",
                suggestions: ["info", "debug", "warning", "error", "critical"],
              },
            },
            {
              name: ["--start", "-s"],
              description:
                "UTC timestamp for the start of the period to return logs for (e.g. 2025-06-26T00:00:00Z)",
              isRequired: true,
              args: {
                name: "start",
              },
            },
            {
              name: ["--type", "-t"],
              description: "Filter logs by a resource type",
              args: {
                name: "type",
              },
            },
            {
              name: ["--uuid", "-u"],
              description: "Filter logs by a resource UUID",
              args: {
                name: "uuid",
              },
            },
          ],
        },
      ],
    },
    {
      name: "marketplace",
      description: "Display marketplace information",
      subcommands: [
        {
          name: "app",
          description: "Commands to interact with vultr marketplace apps",
          subcommands: [
            {
              name: ["list-variables", "l"],
              description:
                "List all user-supplied variables for a marketplace app",
              args: imageIdArg,
            },
          ],
        },
      ],
    },
    {
      name: "object-storage",
      description: "Commands to manage object storage",
      subcommands: [
        {
          name: "cluster",
          description:
            "Commands to retrieve object storage cluster information",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieve a list of all available object storage clusters",
            },
            {
              name: "tiers",
              description:
                "Retrieve a list of tiers for a given object storage cluster",
              options: [
                {
                  name: ["--cluster-id", "-i"],
                  description:
                    "ID of the object storage cluster for which to retrieve the tier information",
                  isRequired: true,
                  args: {
                    name: "cluster-id",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "create",
          description: "Create a new object storage",
          options: [
            {
              name: ["--cluster-id", "-i"],
              description:
                "ID of the cluster in which to create the object storage",
              isRequired: true,
              args: {
                name: "cluster-id",
              },
            },
            {
              name: ["--label", "-l"],
              description: "Label you want your object storage to have",
              args: {
                name: "label",
              },
            },
            {
              name: ["--tier-id", "-t"],
              description:
                "ID of the tier to create the object storage in. Must be one of the available tiers for the cluster",
              isRequired: true,
              args: {
                name: "tier-id",
              },
            },
          ],
        },
        {
          name: ["delete", "destroy"],
          description: "Delete an object storage",
          isDangerous: true,
          args: objectStorageIdArg,
        },
        {
          name: "get",
          description: "Retrieve a given object storage",
          args: objectStorageIdArg,
        },
        {
          name: "label",
          description: "Change the label for object storage",
          args: objectStorageIdArg,
          options: [
            {
              name: ["--label", "-l"],
              description: "Label you want your object storage to have",
              isRequired: true,
              args: {
                name: "label",
              },
            },
          ],
        },
        {
          name: "list",
          description: "Retrieve all active object storages",
          options: paging,
        },
        {
          name: "regenerate-keys",
          description: "Regenerate the S3 API keys for an object storage",
          args: objectStorageIdArg,
        },
        {
          name: "tier",
          description: "Commands for object storage tiers",
          subcommands: [
            {
              name: "list",
              description: "Retrieve a list of all object storage tiers",
            },
          ],
        },
      ],
    },
    {
      name: ["os", "o"],
      description: "Display available operating systems",
      subcommands: [
        {
          name: ["list", "l"],
          description: "List all operating systems",
          options: paging,
        },
      ],
    },
    {
      name: ["plans", "p", "plan"],
      description: "Display available plan information",
      subcommands: [
        {
          name: ["list", "l"],
          description: "List all instance plans",
          options: [
            ...paging,
            {
              name: ["--type", "-t"],
              description:
                "The type of plans to return. Possible values: 'vc2', 'vdc', 'vhf', 'dedicated'. Defaults to all Instances plans",
              args: {
                name: "type",
                suggestions: ["vc2", "vdc", "vhf", "dedicated"],
              },
            },
          ],
        },
        {
          name: ["metal", "m"],
          description: "List all bare metal plans",
          options: paging,
        },
      ],
    },
    {
      name: ["regions", "r", "region"],
      description: "Display regions information",
      subcommands: [
        {
          name: ["availability", "a"],
          description: "List available plans by region",
          args: {
            name: "Region ID",
          },
          options: [
            {
              name: ["--type", "-t"],
              description:
                "Type of plans for which to include availability. Possible values: 'vc2', 'vdc', 'vhf', 'vbm'. Defaults to all Instances plans",
              args: {
                name: "type",
                suggestions: ["vc2", "vdc", "vhf", "vbm"],
              },
            },
          ],
        },
        {
          name: ["list", "l"],
          description: "List regions",
          options: paging,
        },
      ],
    },
    {
      name: ["reserved-ip", "rip"],
      description: "Commands to interact with reserved IPs",
      subcommands: [
        {
          name: ["attach", "a"],
          description: "Attach a reserved IP to an instance",
          args: reservedIpIdArg,
          options: [
            {
              name: ["--instance-id", "-i"],
              description: "Id of instance you want to attach",
              isRequired: true,
              args: {
                name: "instance-id",
              },
            },
          ],
        },
        {
          name: ["convert", "v"],
          description: "Convert IP address to a reserved IP",
          options: [
            {
              name: ["--ip", "-i"],
              description: "Ip you wish to convert",
              isRequired: true,
              args: {
                name: "ip",
              },
            },
            {
              name: ["--label", "-l"],
              description: "Label",
              args: {
                name: "label",
              },
            },
          ],
        },
        {
          name: ["create", "c"],
          description: "Create reserved IP",
          options: [
            {
              name: ["--label", "-l"],
              description: "Label",
              args: {
                name: "label",
              },
            },
            {
              name: ["--region", "-r"],
              description: "Id of region",
              isRequired: true,
              args: {
                name: "region",
              },
            },
            {
              name: ["--type", "-t"],
              description: "Type of IP : v4 or v6",
              isRequired: true,
              args: {
                name: "type",
                suggestions: ["v4", "v6"],
              },
            },
          ],
        },
        {
          name: ["delete", "destroy"],
          description: "Delete a reserved ip",
          isDangerous: true,
          args: reservedIpIdArg,
        },
        {
          name: ["detach", "d"],
          description: "Detach a reserved IP from an instance",
          args: reservedIpIdArg,
        },
        {
          name: ["get", "g"],
          description: "Get a reserved IP",
          args: reservedIpIdArg,
        },
        {
          name: ["list", "l"],
          description: "List all reserved IPs",
          options: paging,
        },
        {
          name: ["update", "u"],
          description: "Update reserved IP",
          args: reservedIpIdArg,
          options: [
            {
              name: ["--label", "-l"],
              description: "Label",
              isRequired: true,
              args: {
                name: "label",
              },
            },
          ],
        },
      ],
    },
    {
      name: ["script", "ss", "startup-script"],
      description: "Commands to interact with startup scripts",
      subcommands: [
        {
          name: "create",
          description: "Create a startup script",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the newly created startup script",
              isRequired: true,
              args: {
                name: "name",
              },
            },
            {
              name: ["--script", "-s"],
              description: "Startup script contents",
              exclusiveOn: ["--script-file"],
              args: {
                name: "script",
              },
            },
            {
              name: ["--script-file", "-f"],
              description: "File path to read in the startup script contents",
              exclusiveOn: ["--script"],
              args: {
                name: "script-file",
                template: "filepaths",
              },
            },
            {
              name: ["--type", "-t"],
              description:
                "Type of startup script. Possible values: 'boot', 'pxe'. Default is 'boot'",
              args: {
                name: "type",
                suggestions: ["boot", "pxe"],
              },
            },
          ],
        },
        {
          name: ["delete", "destroy"],
          description: "Delete a startup script",
          isDangerous: true,
          args: scriptIdArg,
        },
        {
          name: "get",
          description: "Display the contents of specified script",
          args: scriptIdArg,
        },
        {
          name: "list",
          description: "List all startup scripts",
          options: paging,
        },
        {
          name: "update",
          description: "Update startup script",
          args: scriptIdArg,
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the startup script",
              isRequired: true,
              args: {
                name: "name",
              },
            },
            {
              name: ["--script", "-s"],
              description: "Startup script contents",
              isRequired: true,
              args: {
                name: "script",
              },
            },
            {
              name: ["--type", "-t"],
              description:
                "Type of startup script. Possible values: 'boot', 'pxe'. Default is 'boot'",
              isRequired: true,
              args: {
                name: "type",
                suggestions: ["boot", "pxe"],
              },
            },
          ],
        },
      ],
    },
    {
      name: ["snapshot", "sn"],
      description: "Commands to interact with snapshots",
      subcommands: [
        {
          name: "create",
          description: "Create a snapshot",
          options: [
            {
              name: ["--description", "-d"],
              description: "Description of snapshot contents",
              args: {
                name: "description",
              },
            },
            {
              name: ["--id", "-i"],
              description:
                "ID of the virtual machine to create a snapshot from",
              isRequired: true,
              args: {
                name: "id",
              },
            },
          ],
        },
        {
          name: "create-url",
          description: "Create a snapshot from a URL",
          options: [
            {
              name: ["--description", "-d"],
              description:
                "Set snapshot description (defaults to filename from request URL)",
              args: {
                name: "description",
              },
            },
            {
              name: "--uefi",
              description: "Mark snapshot as UEFI",
            },
            {
              name: ["--url", "-u"],
              description:
                "Remote URL from where the snapshot will be downloaded",
              isRequired: true,
              args: {
                name: "url",
              },
            },
          ],
        },
        {
          name: ["delete", "destroy"],
          description: "Delete a snapshot",
          isDangerous: true,
          args: {
            name: "Snapshot ID",
          },
        },
        {
          name: "get",
          description: "Get a snapshot",
          args: {
            name: "Snapshot ID",
          },
        },
        {
          name: "list",
          description: "List all snapshots",
        },
      ],
    },
    {
      name: ["ssh-key", "ssh", "ssh-keys", "sshkeys"],
      description: "Commands to manage SSH keys",
      subcommands: [
        {
          name: ["create", "c"],
          description: "Create an SSH key",
          options: [
            {
              name: ["--key", "-k"],
              description: "SSH public key (in authorized_keys format)",
              dependsOn: ["--name"],
              args: {
                name: "key",
              },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the SSH key",
              dependsOn: ["--key"],
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: ["delete", "destroy", "d"],
          description: "Delete an SSH key",
          isDangerous: true,
          args: {
            name: "Ssh Key ID",
          },
        },
        {
          name: ["get", "g"],
          description: "Get an SSH key",
          args: {
            name: "SSH Key ID",
          },
        },
        {
          name: ["list", "l"],
          description: "List all SSH keys",
          options: paging,
        },
        {
          name: ["update", "u"],
          description: "Update SSH key",
          args: {
            name: "SSH Key ID",
          },
          options: [
            {
              name: ["--key", "-k"],
              description: "SSH public key (in authorized_keys format)",
              args: {
                name: "key",
              },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the SSH key",
              args: {
                name: "name",
              },
            },
          ],
        },
      ],
    },
    {
      name: ["user", "users", "u"],
      description: "Commands to manage users",
      subcommands: [
        {
          name: ["create", "c"],
          description: "Create a user",
          options: [
            {
              name: ["--acl", "-l"],
              description: "User access control list as a comma-separated list",
              isRepeatable: true,
              args: {
                name: "acl",
                suggestions: [
                  "manage_users",
                  "subscriptions_view",
                  "subscriptions",
                  "billing",
                  "support",
                  "provisioning",
                  "dns",
                  "abuse",
                  "upgrade",
                  "firewall",
                  "alerts",
                  "objstore",
                  "loadbalancer",
                ],
              },
            },
            {
              name: "--api-enabled",
              description: "User API access enabled",
            },
            {
              name: ["--email", "-e"],
              description: "User email",
              isRequired: true,
              args: {
                name: "email",
              },
            },
            {
              name: ["--name", "-n"],
              description: "User name",
              isRequired: true,
              args: {
                name: "name",
              },
            },
            {
              name: ["--password", "-p"],
              description: "User password",
              isRequired: true,
              args: {
                name: "password",
              },
            },
          ],
        },
        {
          name: ["delete", "d"],
          description: "Delete a user",
          isDangerous: true,
          args: userIdArg,
        },
        {
          name: ["get", "g"],
          description: "Get a user",
          args: userIdArg,
        },
        {
          name: ["list", "l"],
          description: "List all users",
          options: paging,
        },
        {
          name: ["update", "u"],
          description: "Update a user",
          args: userIdArg,
          options: [
            {
              name: ["--acl", "-l"],
              description: "User access control list as a comma-separated list",
              isRepeatable: true,
              args: {
                name: "acl",
                suggestions: [
                  "manage_users",
                  "subscriptions_view",
                  "subscriptions",
                  "billing",
                  "support",
                  "provisioning",
                  "dns",
                  "abuse",
                  "upgrade",
                  "firewall",
                  "alerts",
                  "objstore",
                  "loadbalancer",
                ],
              },
            },
            {
              name: "--api-enabled",
              description: "API access enabled",
            },
            {
              name: ["--email", "-e"],
              description: "User email",
              args: {
                name: "email",
              },
            },
            {
              name: ["--name", "-n"],
              description: "User name",
              args: {
                name: "name",
              },
            },
            {
              name: ["--password", "-p"],
              description: "User password",
              args: {
                name: "password",
              },
            },
          ],
        },
      ],
    },
    {
      name: ["version", "v"],
      description: "Display the vultr-cli version",
    },
    {
      name: "vpc",
      description: "Commands to manage VPCs",
      subcommands: [
        {
          name: ["create", "c"],
          description: "Create a VPC",
          options: [
            {
              name: ["--description", "-d"],
              description: "The description of the VPC",
              args: {
                name: "description",
              },
            },
            {
              name: ["--region", "-r"],
              description: "The ID of the region in which to create the VPC",
              isRequired: true,
              args: {
                name: "region",
              },
            },
            {
              name: ["--size", "-z"],
              description:
                "The number of bits for the netmask in CIDR notation",
              args: {
                name: "size",
              },
            },
            {
              name: ["--subnet", "-s"],
              description: "The IPv4 VPC in CIDR notation",
              args: {
                name: "subnet",
              },
            },
          ],
        },
        {
          name: ["delete", "destroy", "d"],
          description: "Delete a VPC",
          isDangerous: true,
          args: vpcIdArg,
        },
        {
          name: ["get", "g"],
          description: "Get a VPC",
          args: vpcIdArg,
        },
        {
          name: ["list", "l"],
          description: "List all VPCs",
          options: paging,
        },
        {
          name: ["nat-gateway", "ng"],
          description: "Commands to handle NAT Gateways",
          subcommands: [
            {
              name: ["create", "c"],
              description: "Create a NAT Gateway",
              args: vpcIdArg,
              options: [
                {
                  name: ["--label", "-l"],
                  description: "Label for the new NAT Gateway subscription",
                  args: {
                    name: "label",
                  },
                },
                {
                  name: ["--tag", "-t"],
                  description: "Tag for the new NAT Gateway subscription",
                  args: {
                    name: "tag",
                  },
                },
              ],
            },
            {
              name: ["delete", "d"],
              description: "Delete a NAT Gateway",
              isDangerous: true,
              args: [vpcIdArg, natGatewayIdArg],
            },
            {
              name: ["firewall-rule", "fr"],
              description: "Commands to handle NAT Gateway firewall rules",
              subcommands: [
                {
                  name: ["create", "c"],
                  description: "Create a NAT Gateway firewall rule",
                  args: [vpcIdArg, natGatewayIdArg],
                  options: [
                    {
                      name: ["--notes", "-n"],
                      description:
                        "Notes for the new NAT Gateway firewall rule",
                      args: {
                        name: "notes",
                      },
                    },
                    {
                      name: ["--port", "-p"],
                      description:
                        "Port or port range for the new NAT Gateway firewall rule",
                      args: {
                        name: "port",
                      },
                    },
                    {
                      name: "--protocol",
                      description:
                        "Protocol for the new NAT Gateway firewall rule",
                      args: {
                        name: "protocol",
                      },
                    },
                    {
                      name: ["--subnet", "-s"],
                      description:
                        "Subnet for the new NAT Gateway firewall rule",
                      args: {
                        name: "subnet",
                      },
                    },
                    {
                      name: "--subnet-size",
                      description:
                        "Subnet size for the new NAT Gateway firewall rule",
                      args: {
                        name: "subnet-size",
                      },
                    },
                  ],
                },
                {
                  name: ["delete", "d"],
                  description: "Delete a NAT Gateway firewall rule",
                  isDangerous: true,
                  args: [vpcIdArg, natGatewayIdArg, firewallRuleIdArg],
                },
                {
                  name: ["get", "g"],
                  description: "Get a NAT Gateway firewall rule",
                  args: [vpcIdArg, natGatewayIdArg, firewallRuleIdArg],
                },
                {
                  name: ["list", "l"],
                  description: "List NAT Gateway firewall rules",
                  args: [vpcIdArg, natGatewayIdArg],
                },
                {
                  name: ["update", "u"],
                  description: "Update a NAT Gateway firewall rule",
                  args: [vpcIdArg, natGatewayIdArg, firewallRuleIdArg],
                  options: [
                    {
                      name: ["--notes", "-n"],
                      description: "Notes for the NAT Gateway firewall rule",
                      args: {
                        name: "notes",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: ["get", "g"],
              description: "Get a NAT Gateway",
              args: [vpcIdArg, natGatewayIdArg],
            },
            {
              name: ["list", "l"],
              description: "List NAT Gateways",
              args: vpcIdArg,
            },
            {
              name: ["port-forwarding-rule", "pfr"],
              description:
                "Commands to handle NAT Gateway port forwarding rules",
              subcommands: [
                {
                  name: ["create", "c"],
                  description: "Create a NAT Gateway port forwarding rule",
                  args: [vpcIdArg, natGatewayIdArg],
                  options: [
                    {
                      name: ["--description", "-d"],
                      description:
                        "Description for the new NAT Gateway port forwarding rule",
                      args: {
                        name: "description",
                      },
                    },
                    {
                      name: ["--enabled", "-e"],
                      description:
                        "Enable the NAT Gateway port forwarding rule",
                      requiresSeparator: true,
                      args: {
                        name: "bool",
                        isOptional: true,
                        suggestions: ["true", "false"],
                      },
                    },
                    {
                      name: "--external-port",
                      description:
                        "External port for the new NAT Gateway port forwarding rule",
                      args: {
                        name: "external-port",
                      },
                    },
                    {
                      name: "--internal-ip",
                      description:
                        "Internal IP for the new NAT Gateway port forwarding rule",
                      args: {
                        name: "internal-ip",
                      },
                    },
                    {
                      name: "--internal-port",
                      description:
                        "Internal port for the new NAT Gateway port forwarding rule",
                      args: {
                        name: "internal-port",
                      },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name for the new NAT Gateway port forwarding rule",
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: ["--protocol", "-p"],
                      description:
                        "Protocol for the new NAT Gateway port forwarding rule",
                      args: {
                        name: "protocol",
                      },
                    },
                  ],
                },
                {
                  name: ["delete", "d"],
                  description: "Delete a NAT Gateway port forwarding rule",
                  isDangerous: true,
                  args: [vpcIdArg, natGatewayIdArg, portForwardingRuleIdArg],
                },
                {
                  name: ["get", "g"],
                  description: "Get a NAT Gateway port forwarding rule",
                  args: [vpcIdArg, natGatewayIdArg, portForwardingRuleIdArg],
                },
                {
                  name: ["list", "l"],
                  description: "List NAT Gateway port forwarding rules",
                  args: [vpcIdArg, natGatewayIdArg],
                },
                {
                  name: ["update", "u"],
                  description: "Update a NAT Gateway port forwarding rule",
                  args: [vpcIdArg, natGatewayIdArg, portForwardingRuleIdArg],
                  options: [
                    {
                      name: ["--description", "-d"],
                      description:
                        "Description for the NAT Gateway port forwarding rule",
                      args: {
                        name: "description",
                      },
                    },
                    {
                      name: ["--enabled", "-e"],
                      description:
                        "Enable the NAT Gateway port forwarding rule",
                      requiresSeparator: true,
                      args: {
                        name: "bool",
                        isOptional: true,
                        suggestions: ["true", "false"],
                      },
                    },
                    {
                      name: "--external-port",
                      description:
                        "External port for the NAT Gateway port forwarding rule",
                      args: {
                        name: "external-port",
                      },
                    },
                    {
                      name: "--internal-ip",
                      description:
                        "Internal IP for the NAT Gateway port forwarding rule",
                      args: {
                        name: "internal-ip",
                      },
                    },
                    {
                      name: "--internal-port",
                      description:
                        "Internal port for the NAT Gateway port forwarding rule",
                      args: {
                        name: "internal-port",
                      },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name for the NAT Gateway port forwarding rule",
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: ["--protocol", "-p"],
                      description:
                        "Protocol for the NAT Gateway port forwarding rule",
                      args: {
                        name: "protocol",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: ["update", "u"],
              description: "Update a NAT Gateway",
              args: [vpcIdArg, natGatewayIdArg],
              options: [
                {
                  name: ["--label", "-l"],
                  description: "Label for the NAT Gateway subscription",
                  args: {
                    name: "label",
                  },
                },
                {
                  name: ["--tag", "-t"],
                  description: "Tag for the NAT Gateway subscription",
                  args: {
                    name: "tag",
                  },
                },
              ],
            },
          ],
        },
        {
          name: ["update", "u"],
          description: "Update a VPC",
          args: vpcIdArg,
          options: [
            {
              name: ["--description", "-d"],
              description: "The description of the VPC",
              isRequired: true,
              args: {
                name: "description",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
