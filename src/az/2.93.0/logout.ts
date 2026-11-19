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
  name: "logout",
  description: "Log out to remove access to Azure subscriptions",
  options: [
    acquirePolicyToken,
    changeReference,
    {
      name: "--username",
      description:
        "Account user, if missing, logout the current active account",
      args: { name: "username" },
    },
  ],
};

export default completion;
