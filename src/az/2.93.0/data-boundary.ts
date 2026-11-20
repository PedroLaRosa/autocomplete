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
  name: "data-boundary",
  description: "Data boundary operations",
  subcommands: [
    {
      name: "create",
      description: "Create tenant to data boundary",
      options: [
        {
          name: "--default",
          description:
            "Default string modeled as parameter for auto generation to work correctly",
          args: { name: "default", suggestions: ["default"] },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--data-boundary",
          description: "The data boundary definition",
          args: {
            name: "data-boundary",
            suggestions: ["EU", "Global", "NotDefined"],
          },
        },
      ],
    },
    {
      name: "show",
      description: "Get data boundary at specified scope",
      options: [
        {
          name: "--default",
          description:
            "Default string modeled as parameter for auto generation to work correctly",
          args: { name: "default", suggestions: ["default"] },
          isRequired: true,
        },
        {
          name: "--scope",
          description: "The scope at which the operation is performed",
          args: { name: "scope" },
          isRequired: true,
        },
      ],
    },
    {
      name: "show-tenant",
      description: "Get data boundary of tenant",
      options: [
        {
          name: "--default",
          description:
            "Default string modeled as parameter for auto generation to work correctly",
          args: { name: "default", suggestions: ["default"] },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
      ],
    },
  ],
};

export default completion;
