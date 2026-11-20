// ansible-galaxy v2.22.0 (ansible-core latest on PyPI, 2026-11-19). Source: `ansible-galaxy [role|collection] <action> --help` of ansible-core 2.22.0 run from a venv, plus ansible/cli/galaxy.py (argument parser); the legacy implicit-role forms such as `ansible-galaxy install` are not modelled

const serverOptions: Fig.Option[] = [
  {
    name: ["--server", "-s"],
    description: "The Galaxy API server URL",
    args: {
      name: "api_server",
      description: "The Galaxy API server URL",
    },
  },
  {
    name: ["--token", "--api-key"],
    description:
      "The Ansible Galaxy API key which can be found at https://galaxy.ansible.com/ui/token",
    args: {
      name: "api_key",
      description:
        "The Ansible Galaxy API key which can be found at https://galaxy.ansible.com/ui/token",
    },
  },
  {
    name: ["--ignore-certs", "-c"],
    description: "Ignore SSL certificate validation errors",
  },
  {
    name: "--timeout",
    description:
      "The time to wait for operations against the galaxy server, defaults to 60s",
    args: {
      name: "timeout",
      description: "Time in seconds to wait for operations",
    },
  },
  {
    name: "--api-version",
    description: "Galaxy API version, only meant to be used in tests",
    hidden: true,
    args: {
      name: "api_version",
      suggestions: ["2", "3"],
    },
  },
];

const forceOption: Fig.Option = {
  name: ["--force", "-f"],
  description: "Force overwriting an existing role or collection",
};

const extraVarsOption: Fig.Option = {
  name: ["--extra-vars", "-e"],
  description:
    "Set additional variables as key=value or YAML/JSON, if filename prepend with @",
  isRepeatable: true,
  args: {
    name: "extra_vars",
    description: "Additional variables as key=value or YAML/JSON, or @file",
  },
};

const cacheOptions: Fig.Option[] = [
  {
    name: "--clear-response-cache",
    description: "Clear the existing server response cache",
  },
  {
    name: "--no-cache",
    description: "Do not use the server response cache",
  },
];

const preOption: Fig.Option = {
  name: "--pre",
  description:
    "Include pre-release versions; semantic versioning pre-releases are ignored by default",
};

const noDepsOption = (type: "collection" | "role"): Fig.Option => ({
  name: ["--no-deps", "-n"],
  description: `Don't download ${type}s listed as dependencies`,
  exclusiveOn: ["--force-with-deps"],
});

const forceWithDepsOption = (type: "collection" | "role"): Fig.Option => ({
  name: "--force-with-deps",
  description: `Force overwriting an existing ${type} and its dependencies`,
  exclusiveOn: ["--no-deps", "-n"],
});

const keyringOption: Fig.Option = {
  name: "--keyring",
  description: "The keyring used during signature verification",
  args: {
    name: "keyring",
    description: "The keyring used during signature verification",
    template: ["filepaths"],
  },
};

const requiredSignatureCountOption: Fig.Option = {
  name: "--required-valid-signature-count",
  description:
    "The number of signatures that must successfully verify the collection: a positive integer or all; prepend the value with + to fail if no valid signatures are found (e.g. +all)",
  args: {
    name: "required_valid_signature_count",
    description: "Number of signatures that must verify",
    suggestions: ["1", "all", "+1", "+all"],
  },
};

const signatureStatusCodes = [
  "EXPSIG",
  "EXPKEYSIG",
  "REVKEYSIG",
  "BADSIG",
  "ERRSIG",
  "NO_PUBKEY",
  "MISSING_PASSPHRASE",
  "BAD_PASSPHRASE",
  "NODATA",
  "UNEXPECTED",
  "ERROR",
  "FAILURE",
  "BADARMOR",
  "KEYEXPIRED",
  "KEYREVOKED",
  "NO_SECKEY",
];

const ignoreSignatureStatusCodeOptions: Fig.Option[] = [
  {
    name: "--ignore-signature-status-code",
    description: "A GnuPG status code to ignore during signature verification",
    hidden: true,
    isRepeatable: true,
    args: {
      name: "status_code",
      suggestions: signatureStatusCodes,
    },
  },
  {
    name: "--ignore-signature-status-codes",
    description:
      "A space separated list of status codes to ignore during signature verification (for example, NO_PUBKEY FAILURE); specify these after positional arguments or use -- to separate them",
    args: {
      name: "status_codes",
      isVariadic: true,
      suggestions: signatureStatusCodes,
    },
  },
];

const collectionsPathDescription =
  "One or more directories to search for collections in addition to the default COLLECTIONS_PATHS; separate multiple paths with ':'";

const collectionDownloadOptions: Fig.Option[] = [
  ...cacheOptions,
  {
    name: ["--no-deps", "-n"],
    description: "Don't download collection(s) listed as dependencies",
  },
  {
    name: ["--download-path", "-p"],
    description: "The directory to download the collections to",
    args: {
      name: "download_path",
      description: "The directory to download the collections to",
      template: ["folders"],
      default: "./collections",
    },
  },
  {
    name: ["--requirements-file", "-r"],
    description: "A file containing a list of collections to be downloaded",
    args: {
      name: "requirements",
      description: "A file containing a list of collections to be downloaded",
      template: ["filepaths"],
    },
  },
  preOption,
];

const collectionInitOptions: Fig.Option[] = [
  forceOption,
  {
    name: "--init-path",
    description:
      "The path in which the skeleton collection will be created, the default is the current working directory",
    args: {
      name: "init_path",
      description: "The path in which the skeleton collection will be created",
      template: ["folders"],
      default: ".",
    },
  },
  {
    name: "--collection-skeleton",
    description:
      "The path to a collection skeleton that the new collection should be based upon",
    args: {
      name: "collection_skeleton",
      description:
        "The path to a collection skeleton that the new collection should be based upon",
      template: ["folders"],
    },
  },
  extraVarsOption,
];

const collectionBuildOptions: Fig.Option[] = [
  forceOption,
  {
    name: "--output-path",
    description:
      "The path in which the collection is built to, the default is the current working directory",
    args: {
      name: "output_path",
      description: "The path in which the collection is built to",
      template: ["folders"],
      default: ".",
    },
  },
];

const collectionPublishOptions: Fig.Option[] = [
  {
    name: "--no-wait",
    description: "Don't wait for import validation results",
  },
  {
    name: "--import-timeout",
    description: "The time to wait for the collection import process to finish",
    args: {
      name: "import_timeout",
      description:
        "The time to wait for the collection import process to finish",
      suggestions: ["60", "300", "600", "900"],
      default: "0",
    },
  },
];

const collectionInstallOptions: Fig.Option[] = [
  forceOption,
  ...cacheOptions,
  {
    name: ["--ignore-errors", "-i"],
    description:
      "Ignore errors during installation and continue with the next specified collection; this will not ignore dependency conflict errors",
  },
  noDepsOption("collection"),
  forceWithDepsOption("collection"),
  {
    name: ["--collections-path", "-p"],
    description: "The path to the directory containing your collections",
    args: {
      name: "collections_path",
      description: "The path to the directory containing your collections",
      template: ["folders"],
    },
  },
  {
    name: ["--requirements-file", "-r"],
    description: "A file containing a list of collections to be installed",
    args: {
      name: "requirements",
      description: "A file containing a list of collections to be installed",
      template: ["filepaths"],
    },
  },
  preOption,
  {
    name: ["--upgrade", "-U"],
    description:
      "Upgrade installed collection artifacts; this will also update dependencies unless --no-deps is provided",
  },
  keyringOption,
  {
    name: "--disable-gpg-verify",
    description:
      "Disable GPG signature verification when installing collections from a Galaxy server",
  },
  {
    name: "--signature",
    description:
      "An additional signature source to verify the authenticity of the MANIFEST.json before installing the collection from a Galaxy server; use with a positional collection name (mutually exclusive with --requirements-file)",
    isRepeatable: true,
    args: {
      name: "signature",
      description: "Signature source (URL or file path)",
    },
  },
  requiredSignatureCountOption,
  ...ignoreSignatureStatusCodeOptions,
  {
    name: "--offline",
    description:
      "Install collection artifacts (tarballs) without contacting any distribution servers; does not apply to collections in remote Git repositories or URLs to remote tarballs",
  },
];

const collectionListOptions: Fig.Option[] = [
  {
    name: ["--collections-path", "-p"],
    description: collectionsPathDescription,
    args: {
      name: "collections_path",
      description: collectionsPathDescription,
      template: ["folders"],
      suggestions: ["~/.ansible/collections:/usr/share/ansible/collections"],
      default: "~/.ansible/collections:/usr/share/ansible/collections",
    },
  },
  {
    name: "--format",
    description: "Format to display the list of collections in",
    args: {
      name: "format",
      description: "Format to display the list of collections in",
      suggestions: ["human", "yaml", "json"],
      default: "human",
    },
  },
];

const collectionVerifyOptions: Fig.Option[] = [
  {
    name: ["--collections-path", "-p"],
    description: collectionsPathDescription,
    args: {
      name: "collections_path",
      description: collectionsPathDescription,
      template: ["folders"],
      suggestions: ["~/.ansible/collections:/usr/share/ansible/collections"],
      default: "~/.ansible/collections:/usr/share/ansible/collections",
    },
  },
  {
    name: ["--ignore-errors", "-i"],
    description:
      "Ignore errors during verification and continue with the next specified collection",
  },
  {
    name: "--offline",
    description:
      "Validate collection integrity locally without contacting server for canonical manifest hash",
  },
  {
    name: ["--requirements-file", "-r"],
    description: "A file containing a list of collections to be verified",
    args: {
      name: "requirements",
      description: "A file containing a list of collections to be verified",
      template: ["filepaths"],
    },
  },
  keyringOption,
  {
    name: "--signature",
    description:
      "An additional signature source to verify the authenticity of the MANIFEST.json before using it to verify the rest of the contents of a collection from a Galaxy server; use with a positional collection name (mutually exclusive with --requirements-file)",
    isRepeatable: true,
    args: {
      name: "signature",
      description: "Signature source (URL or file path)",
    },
  },
  requiredSignatureCountOption,
  ...ignoreSignatureStatusCodeOptions,
];

const collectionsListArg: Fig.Arg = {
  name: "collection",
  description: "Name of the collection",
  isOptional: true,
  isVariadic: true,
  // https://docs.ansible.com/ansible/latest/collections/index.html
  suggestions: [
    "amazon.aws",
    "ansible.builtin",
    "ansible.netcommon",
    "ansible.posix",
    "ansible.utils",
    "ansible.windows",
    "arista.eos",
    "awx.awx",
    "azure.azcollection",
    "check_point.mgmt",
    "chocolatey.chocolatey",
    "cisco.aci",
    "cisco.asa",
    "cisco.intersight",
    "cisco.ios",
    "cisco.iosxr",
    "cisco.ise",
    "cisco.meraki",
    "cisco.mso",
    "cisco.nso",
    "cisco.nxos",
    "cisco.ucs",
    "cloud.common",
    "cloudscale_ch.cloud",
    "community.aws",
    "community.azure",
    "community.ciscosmb",
    "community.crypto",
    "community.digitalocean",
    "community.dns",
    "community.docker",
    "community.fortios",
    "community.general",
    "community.google",
    "community.grafana",
    "community.hashi_vault",
    "community.hrobot",
    "community.kubernetes",
    "community.kubevirt",
    "community.libvirt",
    "community.mongodb",
    "community.mysql",
    "community.network",
    "community.okd",
    "community.postgresql",
    "community.proxysql",
    "community.rabbitmq",
    "community.routeros",
    "community.sap",
    "community.skydive",
    "community.sops",
    "community.vmware",
    "community.windows",
    "community.zabbix",
    "containers.podman",
    "cyberark.conjur",
    "cyberark.pas",
    "dellemc.enterprise_sonic",
    "dellemc.openmanage",
    "dellemc.os10",
    "dellemc.os6",
    "dellemc.os9",
    "f5networks.f5_modules",
    "fortinet.fortimanager",
    "fortinet.fortios",
    "frr.frr",
    "gluster.gluster",
    "google.cloud",
    "hetzner.hcloud",
    "hpe.nimble",
    "ibm.qradar",
    "infinidat.infinibox",
    "infoblox.nios_modules",
    "inspur.sm",
    "junipernetworks.junos",
    "kubernetes.core",
    "mellanox.onyx",
    "netapp.aws",
    "netapp.azure",
    "netapp.cloudmanager",
    "netapp.elementsw",
    "netapp.ontap",
    "netapp.storagegrid",
    "netapp.um_info",
    "netapp_eseries.santricity",
    "netbox.netbox",
    "ngine_io.cloudstack",
    "ngine_io.exoscale",
    "ngine_io.vultr",
    "openstack.cloud",
    "openvswitch.openvswitch",
    "ovirt.ovirt",
    "purestorage.flasharray",
    "purestorage.flashblade",
    "sensu.sensu_go",
    "servicenow.servicenow",
    "splunk.es",
    "t_systems_mms.icinga_director",
    "theforeman.foreman",
    "vmware.vmware_rest",
    "vyos.vyos",
    "wti.remote",
  ],
};

const rolesPathOption: Fig.Option = {
  name: ["--roles-path", "-p"],
  description:
    "The path to the directory containing your roles, the default is the first writable one configured via DEFAULT_ROLES_PATH",
  args: {
    name: "roles_path",
    description: "The path to the directory containing your roles",
    template: ["folders"],
    suggestions: [
      "~/.ansible/roles:/usr/share/ansible/roles:/etc/ansible/roles",
    ],
    default: "~/.ansible/roles:/usr/share/ansible/roles:/etc/ansible/roles",
  },
};

const offlineRoleOption: Fig.Option = {
  name: "--offline",
  description: "Don't query the galaxy API when creating roles",
};

const roleInitOptions: Fig.Option[] = [
  forceOption,
  offlineRoleOption,
  {
    name: "--init-path",
    description:
      "The path in which the skeleton role will be created, the default is the current working directory",
    args: {
      name: "init_path",
      description: "The path in which the skeleton role will be created",
      template: ["folders"],
      default: ".",
    },
  },
  {
    name: "--role-skeleton",
    description:
      "The path to a role skeleton that the new role should be based upon",
    args: {
      name: "role_skeleton",
      description:
        "The path to a role skeleton that the new role should be based upon",
      template: ["folders"],
    },
  },
  {
    name: "--type",
    description: "Initialize using an alternate role type",
    args: {
      name: "role_type",
      description: "Initialize using an alternate role type",
      suggestions: ["container", "apb", "network"],
      default: "default",
    },
  },
  extraVarsOption,
];

const roleSearchOptions: Fig.Option[] = [
  {
    name: "--platforms",
    description: "List of OS platforms to filter by",
    args: {
      name: "platforms",
      description: "List of OS platforms to filter by",
      // https://galaxy.ansible.com/api/v1/platforms/
    },
  },
  {
    name: "--galaxy-tags",
    description: "List of Galaxy tags to filter by",
    args: {
      name: "galaxy_tags",
      description: "List of Galaxy tags to filter by",
    },
  },
  {
    name: "--author",
    description: "GitHub username",
    args: {
      name: "author",
      description: "GitHub username",
    },
  },
];

const roleImportOptions: Fig.Option[] = [
  {
    name: "--no-wait",
    description: "Don't wait for import results",
  },
  {
    name: "--branch",
    description:
      "The name of a branch to import. Defaults to the repository's default branch (usually master)",
    args: {
      name: "reference",
      description:
        "The name of a branch to import. Defaults to the repository's default branch (usually master)",
      suggestions: ["master", "main", "develop"],
      default: "master",
    },
  },
  {
    name: "--role-name",
    description:
      "The name the role should have, if different than the repo name",
    args: {
      name: "role_name",
      description:
        "The name the role should have, if different than the repo name",
    },
  },
  {
    name: "--status",
    description:
      "Check the status of the most recent import request for given github_user/github_repo",
  },
];

const roleSetupOptions: Fig.Option[] = [
  rolesPathOption,
  {
    name: "--remove",
    description:
      "Remove the integration matching the provided ID value. Use --list to see ID values",
    args: {
      name: "remove_id",
      description:
        "Remove the integration matching the provided ID value. Use --list to see ID values",
    },
    exclusiveOn: ["--list"],
  },
  {
    name: "--list",
    description: "List all of your integrations",
    exclusiveOn: ["--remove"],
  },
];

const roleInstallOptions: Fig.Option[] = [
  forceOption,
  rolesPathOption,
  {
    name: ["--ignore-errors", "-i"],
    description: "Ignore errors and continue with the next specified role",
  },
  noDepsOption("role"),
  forceWithDepsOption("role"),
  {
    name: ["--role-file", "-r"],
    description: "A file containing a list of roles to be installed",
    args: {
      name: "requirements",
      description: "A file containing a list of roles to be installed",
      template: ["filepaths"],
    },
  },
  {
    name: ["--keep-scm-meta", "-g"],
    description:
      "Use tar instead of the scm archive option when packaging the role",
  },
];

const githubArgs: Fig.Arg[] = [
  {
    name: "github_user",
    description: "GitHub username",
  },
  {
    name: "github_repo",
    description: "GitHub repository",
  },
];

const completionSpec: Fig.Spec = {
  name: "ansible-galaxy",
  description: "Perform various Role and Collection related operations",
  subcommands: [
    {
      name: "collection",
      description: "Manage an Ansible Galaxy collection",
      subcommands: [
        {
          name: "download",
          description:
            "Download collections and their dependencies as a tarball for an offline install",
          options: [...serverOptions, ...collectionDownloadOptions],
          args: collectionsListArg,
        },
        {
          name: "init",
          description:
            "Initialize new collection with the base structure of a collection",
          options: [...serverOptions, ...collectionInitOptions],
          args: {
            name: "collection_name",
            description: "Name of the collection",
          },
        },
        {
          name: "build",
          description:
            "Build an Ansible collection artifact that can be published to Ansible Galaxy",
          options: [...serverOptions, ...collectionBuildOptions],
          args: {
            name: "collection",
            description: "Path(s) to the collection to be built",
            template: ["folders"],
            isOptional: true,
            isVariadic: true,
            default: ".",
          },
        },
        {
          name: "publish",
          description: "Publish a collection artifact to Ansible Galaxy",
          options: [...serverOptions, ...collectionPublishOptions],
          args: {
            name: "collection_path",
            description: "The path to the collection tarball to publish",
            template: ["filepaths"],
          },
        },
        {
          name: "install",
          description:
            "Install collection(s) from file(s), URL(s) or Ansible Galaxy",
          options: [...serverOptions, ...collectionInstallOptions],
          args: {
            ...collectionsListArg,
            name: "collection_name",
            description:
              "The collection(s) name or path/url to a tar.gz collection artifact; mutually exclusive with --requirements-file",
            template: ["filepaths"],
          },
        },
        {
          name: "list",
          description:
            "Show the name and version of each collection installed in the collections_path",
          options: [...serverOptions, ...collectionListOptions],
          args: {
            name: "collection",
            description: "The collections to list",
            isOptional: true,
          },
        },
        {
          name: "verify",
          description:
            "Compare checksums with the collection(s) found on the server and the installed copy; does not verify dependencies",
          options: [...serverOptions, ...collectionVerifyOptions],
          args: {
            name: "collection_name",
            description:
              "The installed collection(s) name; mutually exclusive with --requirements-file",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "role",
      description: "Manage an Ansible Galaxy role",
      subcommands: [
        {
          name: "init",
          description: "Initialize new role with the base structure of a role",
          options: [...serverOptions, ...roleInitOptions],
          args: {
            name: "role_name",
            description: "Name of the role",
          },
        },
        {
          name: "remove",
          description: "Delete roles from roles_path",
          options: [...serverOptions, rolesPathOption],
          args: {
            name: "role",
            description: "The role(s) to remove",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description:
            "Removes the role from Galaxy; it does not remove or alter the actual GitHub repository",
          options: serverOptions,
          args: githubArgs,
        },
        {
          name: "list",
          description:
            "Show the name and version of each role installed in the roles_path",
          options: [...serverOptions, rolesPathOption],
          args: {
            name: "role",
            description: "The role to list",
            isOptional: true,
          },
        },
        {
          name: "search",
          description:
            "Search the Galaxy database by tags, platforms, author and multiple keywords",
          options: [...serverOptions, ...roleSearchOptions],
          args: {
            name: "searchterm",
            description: "Search terms",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "import",
          description: "Import a role into a galaxy server",
          options: [...serverOptions, ...roleImportOptions],
          args: githubArgs,
        },
        {
          name: "setup",
          description:
            "Manage the integration between Galaxy and the given source",
          options: [...serverOptions, ...roleSetupOptions],
          args: [
            {
              name: "source",
              description: "Source",
            },
            ...githubArgs,
            {
              name: "secret",
              description: "Secret",
            },
          ],
        },
        {
          name: "info",
          description: "View more details about a specific role",
          options: [...serverOptions, rolesPathOption, offlineRoleOption],
          args: {
            name: "role_name[,version]",
            description: "The role(s) to show, optionally with a version",
            isVariadic: true,
          },
        },
        {
          name: "install",
          description: "Install role(s) from file(s), URL(s) or Ansible Galaxy",
          options: [...serverOptions, ...roleInstallOptions],
          args: {
            name: "role_name",
            description:
              "Role name, URL or tar file; mutually exclusive with -r",
            isOptional: true,
            isVariadic: true,
            template: ["filepaths"],
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help and exit",
      isPersistent: true,
    },
    {
      name: ["--verbose", "-v"],
      description:
        "Print more debug messages; -vvv is a reasonable level to start, connection debugging might require -vvvv",
      isRepeatable: 6,
      isPersistent: true,
    },
    {
      name: "--version",
      description:
        "Show program's version number, config file location, configured module search path, module location, executable location",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
