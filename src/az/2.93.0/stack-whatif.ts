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
  name: "stack-whatif",
  description:
    "A deployment stack What-If is a preview of an operation to be performed on a new or existing deployment stack",
  subcommands: [
    {
      name: "group",
      description:
        "Manage Deployment stacks what-if results at resource group scope",
      subcommands: [
        {
          name: "create",
          description:
            "Create a deployment stack what-if result at resource group scope",
          options: [
            {
              name: ["--action-on-unmanage", "--aou"],
              description:
                "Defines what happens to resources that are no longer managed after the stack is updated or deleted",
              args: {
                name: "action-on-unmanage",
                suggestions: ["deleteAll", "deleteResources", "detachAll"],
              },
              isRequired: true,
            },
            {
              name: ["--deny-settings-mode", "--dm"],
              description:
                "Define which operations are denied on resources managed by the stack",
              args: {
                name: "deny-settings-mode",
                suggestions: ["denyDelete", "denyWriteAndDelete", "none"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the deployment stack what-if result",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the deployment stack what-if result will be created",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--retention-interval", "--ri"],
              description:
                "The retention interval for What-If results. The value must be in ISO 8601 format and between 1 day and 30 days",
              args: { name: "retention-interval" },
              isRequired: true,
            },
            {
              name: "--stack-id",
              description:
                "The fully-qualified ID of the deployment stack to perform a what-if operation on",
              args: { name: "stack-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--deny-settings-apply-to-child-scopes", "--cs"],
              description: "DenySettings will be applied to child scopes",
            },
            {
              name: ["--deny-settings-excluded-actions", "--ea"],
              description:
                "List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted",
              args: { name: "deny-settings-excluded-actions" },
            },
            {
              name: ["--deny-settings-excluded-principals", "--ep"],
              description:
                "List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted",
              args: { name: "deny-settings-excluded-principals" },
            },
            {
              name: "--description",
              description: "The description of deployment stack",
              args: { name: "description" },
            },
            {
              name: "--no-color",
              description: "Disable color in pretty-printed what-if results",
            },
            {
              name: "--no-pretty-print",
              description:
                "Disable pretty-print for What-If results. When set, the output format type will be used",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--parameters", "-p"],
              description:
                "Parameters may be supplied from a file using the @{path} syntax, a JSON string, or as <KEY=VALUE> pairs. Parameters are evaluated in order, so when a value is assigned twice, the latter value will be used. It is recommended that you supply your parameters file first, and then override selectively using KEY=VALUE syntax",
              args: { name: "parameters", isVariadic: true },
            },
            {
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--resources-without-delete-support", "--rwd"],
              description:
                "Defines what happens to resources that do not support deletion when they are no longer managed by the stack",
              args: {
                name: "resources-without-delete-support",
                suggestions: ["detach", "fail"],
              },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--template-file", "-f"],
              description:
                "A path to a template file or Bicep file in the file system",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "A uri to a remote template file",
              args: { name: "template-uri" },
            },
            {
              name: ["--validation-level", "--vl"],
              description:
                "Validation level for the deployment stack. The default is 'Provider'",
              args: {
                name: "validation-level",
                suggestions: ["Provider", "ProviderNoRbac", "Template"],
              },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a deployment stack what-if result from resource group scope",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--id",
              description: "The deployment stack what-if result resource ID",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the deployment stack what-if result",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the deployment stack what-if result exists",
              args: { name: "resource-group" },
            },
            { name: "--yes", description: "Do not prompt for confirmation" },
          ],
        },
        {
          name: "list",
          description:
            "List all deployment stack what-if results in a resource group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the deployment stack what-if result exists",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a deployment stack what-if result from resource group scope",
          options: [
            {
              name: "--id",
              description: "The deployment stack what-if result resource ID",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the deployment stack what-if result",
              args: { name: "name" },
            },
            {
              name: "--no-color",
              description: "Disable color in pretty-printed what-if results",
            },
            {
              name: "--no-pretty-print",
              description:
                "Disable pretty-print for What-If results. When set, the output format type will be used",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the deployment stack what-if result exists",
              args: { name: "resource-group" },
            },
            {
              name: ["--with-property-changes", "--wpc"],
              description:
                "Flag to return the What-If results with resource property changes included",
              args: {
                name: "with-property-changes",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "mg",
      description:
        "Manage Deployment stacks what-if results at management group scope",
      subcommands: [
        {
          name: "create",
          description:
            "Create a deployment stack what-if result at management group scope",
          options: [
            {
              name: ["--action-on-unmanage", "--aou"],
              description:
                "Defines what happens to resources that are no longer managed after the stack is updated or deleted",
              args: {
                name: "action-on-unmanage",
                suggestions: ["deleteAll", "deleteResources", "detachAll"],
              },
              isRequired: true,
            },
            {
              name: ["--deny-settings-mode", "--dm"],
              description:
                "Define which operations are denied on resources managed by the stack",
              args: {
                name: "deny-settings-mode",
                suggestions: ["denyDelete", "denyWriteAndDelete", "none"],
              },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "The location to store the deployment stack what-if result",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--management-group-id", "-m"],
              description:
                "The management group ID to create a deployment stack what-if result in",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the deployment stack what-if result",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--retention-interval", "--ri"],
              description:
                "The retention interval for What-If results. The value must be in ISO 8601 format and between 1 day and 30 days",
              args: { name: "retention-interval" },
              isRequired: true,
            },
            {
              name: "--stack-id",
              description:
                "The fully-qualified ID of the deployment stack to perform a what-if operation on",
              args: { name: "stack-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--deny-settings-apply-to-child-scopes", "--cs"],
              description: "DenySettings will be applied to child scopes",
            },
            {
              name: ["--deny-settings-excluded-actions", "--ea"],
              description:
                "List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted",
              args: { name: "deny-settings-excluded-actions" },
            },
            {
              name: ["--deny-settings-excluded-principals", "--ep"],
              description:
                "List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted",
              args: { name: "deny-settings-excluded-principals" },
            },
            {
              name: ["--deployment-subscription", "--ds"],
              description:
                "The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack",
              args: { name: "deployment-subscription" },
            },
            {
              name: "--description",
              description: "The description of deployment stack",
              args: { name: "description" },
            },
            {
              name: "--no-color",
              description: "Disable color in pretty-printed what-if results",
            },
            {
              name: "--no-pretty-print",
              description:
                "Disable pretty-print for What-If results. When set, the output format type will be used",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--parameters", "-p"],
              description:
                "Parameters may be supplied from a file using the @{path} syntax, a JSON string, or as <KEY=VALUE> pairs. Parameters are evaluated in order, so when a value is assigned twice, the latter value will be used. It is recommended that you supply your parameters file first, and then override selectively using KEY=VALUE syntax",
              args: { name: "parameters", isVariadic: true },
            },
            {
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--resources-without-delete-support", "--rwd"],
              description:
                "Defines what happens to resources that do not support deletion when they are no longer managed by the stack",
              args: {
                name: "resources-without-delete-support",
                suggestions: ["detach", "fail"],
              },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--template-file", "-f"],
              description:
                "A path to a template file or Bicep file in the file system",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "A uri to a remote template file",
              args: { name: "template-uri" },
            },
            {
              name: ["--validation-level", "--vl"],
              description:
                "Validation level for the deployment stack. The default is 'Provider'",
              args: {
                name: "validation-level",
                suggestions: ["Provider", "ProviderNoRbac", "Template"],
              },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a deployment stack what-if result from management group scope",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description:
                "The management group ID to create a deployment stack what-if result in",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--id",
              description: "The deployment stack what-if result resource ID",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the deployment stack what-if result",
              args: { name: "name" },
            },
            { name: "--yes", description: "Do not prompt for confirmation" },
          ],
        },
        {
          name: "list",
          description:
            "List all deployment stacks what-if results in a management group",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description:
                "The management group ID to create a deployment stack what-if result in",
              args: { name: "management-group-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a deployment stack what-if result from management group scope",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description:
                "The management group ID to create a deployment stack what-if result in",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: "--id",
              description: "The deployment stack what-if result resource ID",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the deployment stack what-if result",
              args: { name: "name" },
            },
            {
              name: "--no-color",
              description: "Disable color in pretty-printed what-if results",
            },
            {
              name: "--no-pretty-print",
              description:
                "Disable pretty-print for What-If results. When set, the output format type will be used",
            },
            {
              name: ["--with-property-changes", "--wpc"],
              description:
                "Flag to return the What-If results with resource property changes included",
              args: {
                name: "with-property-changes",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "sub",
      description:
        "Manage Deployment stacks what-if results at subscription scope",
      subcommands: [
        {
          name: "create",
          description:
            "Create a deployment stack what-if result at subscription scope",
          options: [
            {
              name: ["--action-on-unmanage", "--aou"],
              description:
                "Defines what happens to resources that are no longer managed after the stack is updated or deleted",
              args: {
                name: "action-on-unmanage",
                suggestions: ["deleteAll", "deleteResources", "detachAll"],
              },
              isRequired: true,
            },
            {
              name: ["--deny-settings-mode", "--dm"],
              description:
                "Define which operations are denied on resources managed by the stack",
              args: {
                name: "deny-settings-mode",
                suggestions: ["denyDelete", "denyWriteAndDelete", "none"],
              },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "The location to store the deployment stack what-if result",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the deployment stack what-if result",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--retention-interval", "--ri"],
              description:
                "The retention interval for What-If results. The value must be in ISO 8601 format and between 1 day and 30 days",
              args: { name: "retention-interval" },
              isRequired: true,
            },
            {
              name: "--stack-id",
              description:
                "The fully-qualified ID of the deployment stack to perform a what-if operation on",
              args: { name: "stack-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--deny-settings-apply-to-child-scopes", "--cs"],
              description: "DenySettings will be applied to child scopes",
            },
            {
              name: ["--deny-settings-excluded-actions", "--ea"],
              description:
                "List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted",
              args: { name: "deny-settings-excluded-actions" },
            },
            {
              name: ["--deny-settings-excluded-principals", "--ep"],
              description:
                "List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted",
              args: { name: "deny-settings-excluded-principals" },
            },
            {
              name: ["--deployment-resource-group", "--dr"],
              description:
                "The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack",
              args: { name: "deployment-resource-group" },
            },
            {
              name: "--description",
              description: "The description of deployment stack",
              args: { name: "description" },
            },
            {
              name: "--no-color",
              description: "Disable color in pretty-printed what-if results",
            },
            {
              name: "--no-pretty-print",
              description:
                "Disable pretty-print for What-If results. When set, the output format type will be used",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--parameters", "-p"],
              description:
                "Parameters may be supplied from a file using the @{path} syntax, a JSON string, or as <KEY=VALUE> pairs. Parameters are evaluated in order, so when a value is assigned twice, the latter value will be used. It is recommended that you supply your parameters file first, and then override selectively using KEY=VALUE syntax",
              args: { name: "parameters", isVariadic: true },
            },
            {
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--resources-without-delete-support", "--rwd"],
              description:
                "Defines what happens to resources that do not support deletion when they are no longer managed by the stack",
              args: {
                name: "resources-without-delete-support",
                suggestions: ["detach", "fail"],
              },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--template-file", "-f"],
              description:
                "A path to a template file or Bicep file in the file system",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "A uri to a remote template file",
              args: { name: "template-uri" },
            },
            {
              name: ["--validation-level", "--vl"],
              description:
                "Validation level for the deployment stack. The default is 'Provider'",
              args: {
                name: "validation-level",
                suggestions: ["Provider", "ProviderNoRbac", "Template"],
              },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a deployment stack what-if result from subscription scope",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--id",
              description: "The deployment stack what-if result resource ID",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the deployment stack what-if result",
              args: { name: "name" },
            },
            { name: "--yes", description: "Do not prompt for confirmation" },
          ],
        },
        {
          name: "list",
          description:
            "List all deployment stack what-if results in a subscription",
        },
        {
          name: "show",
          description:
            "Get a deployment stack what-if result from subscription scope",
          options: [
            {
              name: "--id",
              description: "The deployment stack what-if result resource ID",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the deployment stack what-if result",
              args: { name: "name" },
            },
            {
              name: "--no-color",
              description: "Disable color in pretty-printed what-if results",
            },
            {
              name: "--no-pretty-print",
              description:
                "Disable pretty-print for What-If results. When set, the output format type will be used",
            },
            {
              name: ["--with-property-changes", "--wpc"],
              description:
                "Flag to return the What-If results with resource property changes included",
              args: {
                name: "with-property-changes",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
