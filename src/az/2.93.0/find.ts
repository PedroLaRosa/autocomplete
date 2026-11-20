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
  name: "find",
  description:
    "I'm an AI assistant, my advice is based on Microsoft Learn documentation as well as the usage patterns of Azure CLI and Azure ARM users. Using me improves Azure products and documentation",
  options: [acquirePolicyToken, changeReference],
  args: {
    name: "<CLI_TERM>",
    description: "An Azure CLI command or group for which you need an example",
  },
};

export default completion;
