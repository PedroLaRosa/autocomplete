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
  name: "term",
  description: "Manage marketplace agreement with marketplaceordering",
  subcommands: [
    {
      name: "accept",
      description: "Accept marketplace terms",
      options: [
        {
          name: "--plan",
          description: "Plan identifier string of image being deployed",
          args: { name: "plan" },
          isRequired: true,
        },
        {
          name: "--product",
          description: "Offer identifier string of image being deployed",
          args: { name: "product" },
          isRequired: true,
        },
        {
          name: "--publisher",
          description: "Publisher identifier string of image being deployed",
          args: { name: "publisher" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
      ],
    },
    {
      name: "show",
      description: "Get marketplace terms",
      options: [
        {
          name: "--plan",
          description: "Plan identifier string of image being deployed",
          args: { name: "plan" },
          isRequired: true,
        },
        {
          name: "--product",
          description: "Offeridentifier string of image being deployed",
          args: { name: "product" },
          isRequired: true,
        },
        {
          name: "--publisher",
          description: "Publisher identifier string of image being deployed",
          args: { name: "publisher" },
          isRequired: true,
        },
      ],
    },
  ],
};

export default completion;
