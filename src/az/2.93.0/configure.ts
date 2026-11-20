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
  name: "configure",
  description: "Manage Azure CLI configuration. This command is interactive",
  options: [
    acquirePolicyToken,
    changeReference,
    {
      name: ["--defaults", "-d"],
      description:
        "Space-separated 'name=value' pairs for common argument defaults",
      args: { name: "defaults", isVariadic: true },
    },
    {
      name: ["--list-defaults", "-l"],
      description: "List all applicable defaults",
      args: {
        name: "list-defaults",
        suggestions: ["false", "true"],
        isOptional: true,
      },
    },
    {
      name: "--scope",
      description:
        'Scope of defaults. Using "local" for settings only effective under current folder',
      args: { name: "scope", suggestions: ["global", "local"] },
    },
  ],
};

export default completion;
