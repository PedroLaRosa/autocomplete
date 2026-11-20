const acquirePolicyToken: Fig.Option = {
  name: "--acquire-policy-token",
  description:
    "Acquiring an Azure Policy token automatically for this resource operation",
};

const changeReference: Fig.Option = {
  name: "--change-reference",
  description: "The related change reference ID for this resource operation",
  args: { name: "change-reference" },
};

const completion: Fig.Spec = {
  name: "extension",
  description: "Manage and update CLI extensions",
  subcommands: [
    {
      name: "add",
      description: "Add an extension",
      options: [
        acquirePolicyToken,
        {
          name: "--allow-preview",
          description:
            "Include preview packages for extension installation, if exists",
          args: {
            name: "allow-preview",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        changeReference,
        {
          name: ["--name", "-n"],
          description: "Name of extension",
          args: { name: "name" },
        },
        {
          name: "--pip-extra-index-urls",
          description:
            "Space-separated list of extra URLs of package indexes to use. This should point to a repository compliant with PEP 503 (the simple repository API) or a local directory laid out in the same format",
          args: { name: "pip-extra-index-urls", isVariadic: true },
        },
        {
          name: "--pip-proxy",
          description:
            "Proxy for pip to use for extension dependencies in the form of [user:passwd@]proxy.server:port",
          args: { name: "pip-proxy" },
        },
        {
          name: ["--source", "-s"],
          description: "Filepath or URL to an extension",
          args: { name: "source" },
        },
        {
          name: "--system",
          description: "Use a system directory for the extension",
        },
        {
          name: "--upgrade",
          description:
            "Update the extension if already installed, otherwise just install the extension",
        },
        {
          name: "--version",
          description: "The specific version of an extension",
          args: { name: "version" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    { name: "list", description: "List the installed extensions" },
    {
      name: "list-available",
      description: "List publicly available extensions",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: ["--show-details", "-d"],
          description: "Show the raw data from the extension index",
        },
      ],
    },
    {
      name: "list-versions",
      description: "List available versions for an extension",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of extension",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
      ],
    },
    {
      name: "remove",
      description: "Remove an extension",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of extension",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
      ],
    },
    {
      name: "show",
      description: "Show an extension",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of extension",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "update",
      description: "Update an extension",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of extension",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: "--allow-preview",
          description:
            "Include preview packages for extension installation, if exists",
          args: {
            name: "allow-preview",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        changeReference,
        {
          name: "--pip-extra-index-urls",
          description:
            "Space-separated list of extra URLs of package indexes to use. This should point to a repository compliant with PEP 503 (the simple repository API) or a local directory laid out in the same format",
          args: { name: "pip-extra-index-urls", isVariadic: true },
        },
        {
          name: "--pip-proxy",
          description:
            "Proxy for pip to use for extension dependencies in the form of [user:passwd@]proxy.server:port",
          args: { name: "pip-proxy" },
        },
      ],
    },
  ],
};

export default completion;
