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
  name: "identity",
  description: "Manage Managed Identity",
  subcommands: [
    {
      name: "create",
      description:
        "Create an identity in the specified subscription and resource group",
      options: [
        {
          name: ["--resource-name", "--name", "-n"],
          description: "The name of the identity resource",
          args: { name: "resource-name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--isolation-scope",
          description:
            "Enum to configure regional restrictions on identity assignment, as necessary",
          args: { name: "isolation-scope", suggestions: ["None", "Regional"] },
        },
        {
          name: ["--location", "-l"],
          description:
            "The geo-location where the resource lives When not specified, the location of the resource group will be used",
          args: { name: "location" },
        },
        {
          name: "--resource-restriction",
          description:
            'Restrictions on which resource providers this identity can be assigned to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "resource-restriction", isVariadic: true },
        },
        {
          name: "--tags",
          description:
            'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags", isVariadic: true },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete the identity",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--resource-name", "--name", "-n"],
          description: "The name of the identity resource",
          args: { name: "resource-name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "list",
      description:
        "List all the userAssignedIdentities available under the subscription or specified ResourceGroup",
      options: [
        {
          name: "--max-items",
          description:
            "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
          args: { name: "max-items" },
        },
        {
          name: "--next-token",
          description:
            "Token to specify where to start paginating. This is the token value from a previously truncated response",
          args: { name: "next-token" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "list-operations",
      description:
        "List available operations for the Managed Identity provider",
      options: [acquirePolicyToken, changeReference],
    },
    {
      name: "list-resources",
      description: "List the associated resources for the identity",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the identity resource",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "show",
      description: "Get the identity",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--resource-name", "--name", "-n"],
          description: "The name of the identity resource",
          args: { name: "resource-name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "update",
      description:
        "Update an identity in the specified subscription and resource group",
      options: [
        acquirePolicyToken,
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add", isVariadic: true },
        },
        changeReference,
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
          args: {
            name: "force-string",
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
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: "--isolation-scope",
          description:
            "Enum to configure regional restrictions on identity assignment, as necessary",
          args: { name: "isolation-scope", suggestions: ["None", "Regional"] },
        },
        {
          name: ["--resource-name", "--name", "-n"],
          description: "The name of the identity resource",
          args: { name: "resource-name" },
        },
        {
          name: "--remove",
          description:
            "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
          args: { name: "remove", isVariadic: true },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-restriction",
          description:
            'Restrictions on which resource providers this identity can be assigned to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "resource-restriction", isVariadic: true },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
          args: { name: "set", isVariadic: true },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: "--tags",
          description:
            'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags", isVariadic: true },
        },
      ],
    },
    {
      name: "federated-credential",
      description:
        "Manage federated identity credentials under user assigned identities",
      subcommands: [
        {
          name: "create",
          description:
            "Create a federated identity credential under an existing user assigned identity",
          options: [
            {
              name: "--identity-name",
              description: "The name of the identity resource",
              args: { name: "identity-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the federated identity credential resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--audiences",
              description:
                'The aud value in the token sent to Azure for getting the user-assigned managed identity token. The value configured in the federated credential and the one in the incoming token must exactly match for Azure to issue the access token. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "audiences", isVariadic: true },
            },
            changeReference,
            {
              name: ["--claims-matching-expression-value", "--cme-value"],
              description:
                "The wildcard-based expression for matching incoming claims. Cannot be used with --subject",
              args: { name: "claims-matching-expression-value" },
            },
            {
              name: ["--claims-matching-expression-version", "--cme-version"],
              description:
                "Specifies the version of the claims matching expression used in the expression",
              args: { name: "claims-matching-expression-version" },
            },
            {
              name: "--issuer",
              description:
                "The openId connect metadata URL of the issuer of the identity provider that Azure AD would use in the token exchange protocol for validating tokens before issuing a token as the user-assigned managed identity",
              args: { name: "issuer" },
            },
            {
              name: "--subject",
              description:
                "The sub value in the token sent to Azure AD for getting the user-assigned managed identity token. The value configured in the federated credential and the one in the incoming token must exactly match for Azure AD to issue the access token. Either 'subject' or 'claimsMatchingExpression' must be defined, but not both",
              args: { name: "subject" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a federated identity credential under an existing user assigned identity",
          options: [
            {
              name: "--identity-name",
              description: "The name of the identity resource",
              args: { name: "identity-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the federated identity credential resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
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
          description:
            "List all federated identity credentials under an existing user assigned identity",
          options: [
            {
              name: "--identity-name",
              description: "The name of the identity resource",
              args: { name: "identity-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
            {
              name: "--skiptoken",
              description:
                "A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls",
              args: { name: "skiptoken" },
            },
            {
              name: "--top",
              description: "Number of records to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show a federated identity credential under an existing user assigned identity",
          options: [
            {
              name: "--identity-name",
              description: "The name of the identity resource",
              args: { name: "identity-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the federated identity credential resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update a federated identity credential under an existing user assigned identity",
          options: [
            {
              name: "--identity-name",
              description: "The name of the identity resource",
              args: { name: "identity-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the federated identity credential resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--audiences",
              description:
                'The aud value in the token sent to Azure for getting the user-assigned managed identity token. The value configured in the federated credential and the one in the incoming token must exactly match for Azure to issue the access token. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "audiences", isVariadic: true },
            },
            changeReference,
            {
              name: ["--claims-matching-expression-value", "--cme-value"],
              description:
                "The wildcard-based expression for matching incoming claims. Cannot be used with --subject",
              args: { name: "claims-matching-expression-value" },
            },
            {
              name: ["--claims-matching-expression-version", "--cme-version"],
              description:
                "Specifies the version of the claims matching expression used in the expression",
              args: { name: "claims-matching-expression-version" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
              args: {
                name: "force-string",
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
            {
              name: "--issuer",
              description:
                "The openId connect metadata URL of the issuer of the identity provider that Azure AD would use in the token exchange protocol for validating tokens before issuing a token as the user-assigned managed identity",
              args: { name: "issuer" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--subject",
              description:
                "The sub value in the token sent to Azure AD for getting the user-assigned managed identity token. The value configured in the federated credential and the one in the incoming token must exactly match for Azure AD to issue the access token. Either 'subject' or 'claimsMatchingExpression' must be defined, but not both",
              args: { name: "subject" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
