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
  name: "feature",
  description: "Manage resource provider features",
  subcommands: [
    {
      name: "list",
      description: "List preview features",
      options: [
        {
          name: "--namespace",
          description: "The resource namespace, aka 'provider'",
          args: { name: "namespace" },
        },
      ],
    },
    {
      name: "register",
      description: "Register a preview feature",
      options: [
        {
          name: ["--name", "-n"],
          description: "The feature name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--namespace",
          description: "The resource namespace, aka 'provider'",
          args: { name: "namespace" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
      ],
    },
    {
      name: "show",
      description: "Gets the preview feature with the specified name",
      options: [
        {
          name: ["--name", "-n"],
          description: "The feature name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--namespace",
          description: "The resource namespace, aka 'provider'",
          args: { name: "namespace" },
          isRequired: true,
        },
      ],
    },
    {
      name: "unregister",
      description: "Unregister a preview feature",
      options: [
        {
          name: ["--name", "-n"],
          description: "The feature name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--namespace",
          description: "The resource namespace, aka 'provider'",
          args: { name: "namespace" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
      ],
    },
    {
      name: "registration",
      description: "Manage resource provider feature registrations",
      subcommands: [
        {
          name: "create",
          description: "Create a feature registration",
          options: [
            {
              name: ["--name", "-n"],
              description: "The feature name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "The resource namespace, aka 'provider'",
              args: { name: "namespace" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "delete",
          description: "Delete a feature registration",
          options: [
            {
              name: ["--name", "-n"],
              description: "The feature name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "The resource namespace, aka 'provider'",
              args: { name: "namespace" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List feature registrations",
          options: [
            {
              name: "--namespace",
              description: "The resource namespace, aka 'provider'",
              args: { name: "namespace" },
            },
          ],
        },
        {
          name: "show",
          description: "Returns a feature registration",
          options: [
            {
              name: ["--name", "-n"],
              description: "The feature name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--provider-namespace",
              description: "The provider namespace. Required",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
