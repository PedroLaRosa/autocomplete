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
  name: "version",
  description:
    "Show the versions of Azure CLI modules and extensions in JSON format by default or format configured by --output",
  options: [acquirePolicyToken, changeReference],
};

export default completion;
