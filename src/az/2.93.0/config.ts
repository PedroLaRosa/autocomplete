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
  name: "config",
  description: "Manage Azure CLI configuration",
  subcommands: [
    {
      name: "get",
      description: "Get a configuration",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--local",
          description:
            "Include local configuration. Scan from the working directory up to the root drive, then the global configuration and return the first occurrence",
        },
      ],
      args: {
        name: "<KEY>",
        description:
          "The configuration to get. If not provided, all sections and configurations will be listed. If section is provided, all configurations under the specified section will be listed. If <section>.<key> is provided, only the corresponding configuration is shown",
        isOptional: true,
      },
    },
    {
      name: "set",
      description: "Set a configuration",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--local",
          description: "Set as a local configuration in the working directory",
        },
      ],
      args: {
        name: "<KEY_VALUE>",
        description:
          "Space-separated configurations in the form of <section>.<key>=<value>",
        isVariadic: true,
      },
    },
    {
      name: "unset",
      description: "Unset a configuration",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--local",
          description:
            "Include local configuration. Scan from the working directory up to the root drive, then the global configuration and unset the first occurrence",
        },
      ],
      args: {
        name: "<KEY>",
        description:
          "The configuration to unset, in the form of <section>.<key>",
        isVariadic: true,
      },
    },
    {
      name: "param-persist",
      description: "Manage parameter persistence",
      subcommands: [
        {
          name: "delete",
          description: "Delete parameter persistence data",
          options: [
            acquirePolicyToken,
            {
              name: "--all",
              description:
                "Clear all parameter persistence data. Either positional name argument or --all can be specified",
            },
            changeReference,
            {
              name: "--purge",
              description:
                "Delete parameter persistence file from working directory. Only available when --all is specified",
            },
            {
              name: "--recursive",
              description:
                "Indicate this is recursive delete of parameter persistence. Only available when --all is specified",
            },
            {
              name: ["--yes", "-y"],
              description:
                "Do not prompt for confirmation. Only available when --all is specified",
            },
          ],
          args: {
            name: "<NAME>",
            description:
              "Space-separated list of parameter persistence names. Either positional name argument or --all can be specified",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "off",
          description: "Turn off parameter persistence",
          options: [acquirePolicyToken, changeReference],
        },
        {
          name: "on",
          description: "Turn on parameter persistence",
          options: [acquirePolicyToken, changeReference],
        },
        {
          name: "show",
          description: "Show parameter persistence data",
          args: {
            name: "<NAME>",
            description: "Space-separated list of parameter persistence names",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
  ],
};

export default completion;
