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
  name: "compute-recommender",
  description: "Manage sku/zone/region recommender info for compute resources",
  subcommands: [
    {
      name: "spot-placement-score",
      description: "Generate placement scores for Spot VM skus",
      options: [
        {
          name: "--desired-locations",
          description:
            'The desired regions Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "desired-locations", isVariadic: true },
          isRequired: true,
        },
        {
          name: "--desired-sizes",
          description:
            'The desired resource SKUs. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "desired-sizes", isVariadic: true },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: "--availability-zones",
          description: "Defines if the scope is zonal or regional",
          args: {
            name: "availability-zones",
            suggestions: [
              "0",
              "1",
              "f",
              "false",
              "n",
              "no",
              "t",
              "true",
              "y",
              "yes",
            ],
            isOptional: true,
          },
        },
        changeReference,
        {
          name: "--desired-count",
          description:
            "Desired instance count per region/zone based on the scope",
          args: { name: "desired-count" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
  ],
};

export default completion;
