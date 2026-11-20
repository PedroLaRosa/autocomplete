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
  name: "upgrade",
  description: "Upgrade Azure CLI and extensions",
  options: [
    acquirePolicyToken,
    {
      name: "--all",
      description: "Enable updating extensions as well",
      args: { name: "all", suggestions: ["false", "true"], isOptional: true },
    },
    {
      name: ["--allow-preview-extensions", "--allow-preview"],
      description:
        "Include preview packages for extension installation, if exists",
      args: {
        name: "allow-preview-extensions",
        suggestions: ["false", "true"],
        isOptional: true,
      },
    },
    changeReference,
    {
      name: ["--yes", "-y"],
      description: "Do not prompt for checking release notes",
    },
  ],
};

export default completion;
