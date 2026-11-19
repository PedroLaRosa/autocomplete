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
  name: "interactive",
  description:
    "Start interactive mode. Installs the Interactive extension if not installed already",
  options: [
    acquirePolicyToken,
    changeReference,
    {
      name: ["--style", "-s"],
      description: "The colors of the shell",
      args: {
        name: "style",
        suggestions: [
          "bg",
          "br",
          "contrast",
          "default",
          "grey",
          "halloween",
          "neon",
          "none",
          "pastel",
          "primary",
          "purple",
          "quiet",
        ],
      },
    },
    {
      name: "--update",
      description: "Update the Interactive extension to the latest available",
    },
  ],
};

export default completion;
