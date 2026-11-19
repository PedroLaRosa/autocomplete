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
  name: "policy",
  description: "Manage resources defined and used by the Azure Policy service",
  subcommands: [
    {
      name: "assignment",
      description: "Manage policy assignments",
      subcommands: [
        {
          name: "create",
          description: "Create a policy assignment",
          options: [
            acquirePolicyToken,
            {
              name: [
                "--mi-system-assigned",
                "--assign-identity",
                "--system-assigned",
              ],
              description: "Sets the system assigned managed identity",
              args: { name: "mi-system-assigned", isOptional: true },
            },
            changeReference,
            {
              name: "--definition-version",
              description: "The policy version to assign",
              args: { name: "definition-version" },
            },
            {
              name: "--description",
              description: "Policy assignment description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the policy assignment",
              args: { name: "display-name" },
            },
            {
              name: ["--enforcement-mode", "-e"],
              description: "The policy assignment enforcement mode",
              args: {
                name: "enforcement-mode",
                suggestions: ["Default", "DoNotEnforce", "Enroll"],
              },
            },
            {
              name: "--identity-scope",
              description: "Scope that the system assigned identity can access",
              args: { name: "identity-scope" },
            },
            {
              name: ["--location", "-l"],
              description: "The location of the policy assignment",
              args: { name: "location" },
            },
            {
              name: "--metadata",
              description:
                "The policy assignment metadata. Support shorthand-syntax(full value only), json-file and yaml-file",
              args: { name: "metadata" },
            },
            {
              name: ["--mi-user-assigned", "--user-assigned"],
              description:
                'Sets the user assigned managed identity. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: {
                name: "mi-user-assigned",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the policy assignment",
              args: { name: "name" },
            },
            {
              name: ["--non-compliance-messages", "-m"],
              description:
                'The messages that describe why a resource is non-compliant with the policy. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "non-compliance-messages", isVariadic: true },
            },
            {
              name: "--not-scopes",
              description:
                'The policy assignment excluded scopes. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "not-scopes", isVariadic: true },
            },
            {
              name: "--overrides",
              description:
                'The policy override. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "overrides", isVariadic: true },
            },
            {
              name: ["--params", "-p"],
              description:
                'The parameter values for the assigned policy rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "params", isVariadic: true },
            },
            {
              name: "--policy",
              description:
                "The name or resource ID of the policy definition or policy set definition to be assigned",
              args: { name: "policy" },
            },
            {
              name: ["--policy-set-definition", "-d"],
              description:
                "The policy definition or policy set definition to assign",
              args: { name: "policy-set-definition" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-selectors",
              description:
                'The resource selectors list to filter policies by resource properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "resource-selectors", isVariadic: true },
            },
            {
              name: "--role",
              description:
                "Role name or id that will be assigned to the managed identity",
              args: { name: "role" },
            },
            {
              name: "--scope",
              description: "The scope of the policy assignment",
              args: { name: "scope" },
            },
            {
              name: ["--self-serve-exemption-settings", "--self-serve"],
              description:
                'The self-serve exemption settings for the policy assignment. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "self-serve-exemption-settings", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a policy assignment",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy assignment",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description: "The scope of the policy assignment",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "list",
          description: "Retrieve all applicable policy assignments",
          options: [
            {
              name: ["--disable-scope-strict-match", "-d"],
              description:
                "Include policy assignments either inherited from parent scopes or at child scopes",
              args: {
                name: "disable-scope-strict-match",
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
              name: "--expand",
              description: "Additional properties to include in output",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description: "Filter list results",
              args: { name: "filter" },
            },
            {
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "Scope at which to list applicable policy assignments. If scope is not provided, the scope will be the implied or specified subscription",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "show",
          description: "Retrieve a policy assignment",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy assignment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "Additional properties to include in output",
              args: { name: "expand" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description: "The scope of the policy assignment",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a policy assignment",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy assignment",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            changeReference,
            {
              name: "--definition-version",
              description: "The policy version to assign",
              args: { name: "definition-version" },
            },
            {
              name: "--description",
              description: "Policy assignment description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the policy assignment",
              args: { name: "display-name" },
            },
            {
              name: ["--enforcement-mode", "-e"],
              description: "The policy assignment enforcement mode",
              args: {
                name: "enforcement-mode",
                suggestions: ["Default", "DoNotEnforce", "Enroll"],
              },
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
              name: ["--location", "-l"],
              description: "The location of the policy assignment",
              args: { name: "location" },
            },
            {
              name: "--metadata",
              description:
                "The policy assignment metadata. Support shorthand-syntax(full value only), json-file and yaml-file",
              args: { name: "metadata" },
            },
            {
              name: ["--non-compliance-messages", "-m"],
              description:
                'The messages that describe why a resource is non-compliant with the policy. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "non-compliance-messages", isVariadic: true },
            },
            {
              name: "--not-scopes",
              description:
                'The policy assignment excluded scopes. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "not-scopes", isVariadic: true },
            },
            {
              name: "--overrides",
              description:
                'The policy property value override. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "overrides", isVariadic: true },
            },
            {
              name: ["--params", "-p"],
              description:
                'The parameter values for the assigned policy rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "params", isVariadic: true },
            },
            {
              name: "--policy",
              description:
                "The name or resource ID of the policy definition or policy set definition to be assigned",
              args: { name: "policy" },
            },
            {
              name: ["--policy-set-definition", "-d"],
              description:
                "The policy definition or policy set definition to assign",
              args: { name: "policy-set-definition" },
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
              name: "--resource-selectors",
              description:
                'The resource selectors list to filter policies by resource properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "resource-selectors", isVariadic: true },
            },
            {
              name: "--scope",
              description: "The scope of the policy assignment",
              args: { name: "scope" },
            },
            {
              name: ["--self-serve-exemption-settings", "--self-serve"],
              description:
                'The self-serve exemption settings for the policy assignment. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "self-serve-exemption-settings", isVariadic: true },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
          ],
        },
        {
          name: "identity",
          description: "Manage identity of the policy assignment",
          subcommands: [
            {
              name: "assign",
              description: "Assign a managed identity",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--identity-scope",
                  description:
                    "Scope that the system assigned identity can access",
                  args: { name: "identity-scope" },
                },
                {
                  name: ["--mi-system-assigned", "--system-assigned"],
                  description: "Set the system managed identity",
                  args: { name: "mi-system-assigned", isOptional: true },
                },
                {
                  name: ["--mi-user-assigned", "--user-assigned"],
                  description:
                    'Set the user managed identity. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: {
                    name: "mi-user-assigned",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--role",
                  description:
                    "Role name or id that will be assigned to the managed identity",
                  args: { name: "role" },
                },
                {
                  name: "--scope",
                  description: "The scope of the policy assignment",
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove the managed identity",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--mi-system-assigned", "--system-assigned"],
                  description: "Remove the system managed identity",
                  args: { name: "mi-system-assigned", isOptional: true },
                },
                {
                  name: ["--mi-user-assigned", "--user-assigned"],
                  description:
                    'Remove the user managed identity. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: {
                    name: "mi-user-assigned",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope",
                  description: "The scope of the policy assignment",
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "show",
              description: "Retrieve the managed identity",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope",
                  description: "The scope of the policy assignment",
                  args: { name: "scope" },
                },
              ],
            },
          ],
        },
        {
          name: "non-compliance-message",
          description:
            "Manage non-compliance message used by the policy assignment",
          subcommands: [
            {
              name: "create",
              description: "Create a non-compliance message",
              options: [
                {
                  name: ["--message", "-m"],
                  description: "A custom non-compliance message",
                  args: { name: "message" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--policy-definition-reference-id", "-r"],
                  description: "The policy definition reference ID",
                  args: { name: "policy-definition-reference-id" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope",
                  description: "The scope of the policy assignment",
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a non-compliance message",
              options: [
                {
                  name: ["--message", "-m"],
                  description: "A custom non-compliance message",
                  args: { name: "message" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--policy-definition-reference-id", "-r"],
                  description: "The policy definition reference ID",
                  args: { name: "policy-definition-reference-id" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope",
                  description: "The scope of the policy assignment",
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "list",
              description: "Retrieve non-compliance messages",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope",
                  description: "The scope of the policy assignment",
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "show",
              description: "Retrieve a non-compliance message",
              options: [
                {
                  name: ["--message", "-m"],
                  description: "A custom non-compliance message",
                  args: { name: "message" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--policy-definition-reference-id", "-r"],
                  description: "The policy definition reference ID",
                  args: { name: "policy-definition-reference-id" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope",
                  description: "The scope of the policy assignment",
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a non-compliance message",
              options: [
                {
                  name: ["--message", "-m"],
                  description: "A custom non-compliance message",
                  args: { name: "message" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
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
                  name: ["--policy-definition-reference-id", "-r"],
                  description: "The policy definition reference ID",
                  args: { name: "policy-definition-reference-id" },
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
                  name: "--scope",
                  description: "The scope of the policy assignment",
                  args: { name: "scope" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "attestation",
      description: "Manage resource policy attestations",
      subcommands: [
        {
          name: "create",
          description: "Create a policy attestation",
          options: [
            {
              name: ["--attestation-name", "--name", "-n"],
              description: "The name of the attestation",
              args: { name: "attestation-name" },
              isRequired: true,
            },
            {
              name: ["--policy-assignment-id", "--policy-assignment", "-a"],
              description:
                "The resource ID of the policy assignment that the attestation is setting the state for",
              args: { name: "policy-assignment-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--assessment-date",
              description: "The time the evidence was assessed",
              args: { name: "assessment-date" },
            },
            changeReference,
            {
              name: "--comments",
              description:
                "Comments describing why this attestation was created",
              args: { name: "comments" },
            },
            {
              name: "--compliance-state",
              description:
                "The compliance state that should be set on the resource",
              args: {
                name: "compliance-state",
                suggestions: ["Compliant", "NonCompliant", "Unknown"],
              },
            },
            {
              name: "--definition-reference-id",
              description:
                "The policy definition reference ID from a policy set definition that the attestation is setting the state for. If the policy assignment assigns a policy set definition the attestation can choose a definition within the set definition with this property or omit this and set the state for the entire set definition",
              args: { name: "definition-reference-id" },
            },
            {
              name: "--evidence",
              description:
                "The evidence supporting the compliance state set in this attestation",
              args: { name: "evidence", isOptional: true, isVariadic: true },
            },
            {
              name: "--expires-on",
              description: "The time the compliance state should expire",
              args: { name: "expires-on" },
            },
            {
              name: "--metadata",
              description:
                "Additional metadata in space-separated key=value pairs for an attestation. This overwrites any existing metadata for the attestation",
              args: { name: "metadata", isOptional: true, isVariadic: true },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--owner",
              description:
                "The person responsible for setting the state of the resource. This value is typically an Azure Active Directory object ID",
              args: { name: "owner" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--resource-id", "--resource"],
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing policy attestation",
          options: [
            {
              name: ["--attestation-name", "--name", "-n"],
              description: "The name of the attestation",
              args: { name: "attestation-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--resource-id", "--resource"],
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "list",
          description: "List all attestations for a resource",
          options: [
            {
              name: "--filter",
              description: "OData filter expression",
              args: { name: "filter" },
            },
            {
              name: ["--resource-id", "--resource"],
              description: "Resource ID",
              args: { name: "resource-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--top",
              description: "Maximum number of records to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a policy attestation",
          options: [
            {
              name: ["--attestation-name", "--name", "-n"],
              description: "The name of the attestation",
              args: { name: "attestation-name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--resource-id", "--resource"],
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "update",
          description: "Update an existing policy attestation",
          options: [
            {
              name: ["--attestation-name", "--name", "-n"],
              description: "The name of the attestation",
              args: { name: "attestation-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--assessment-date",
              description: "The time the evidence was assessed",
              args: { name: "assessment-date" },
            },
            changeReference,
            {
              name: "--comments",
              description:
                "Comments describing why this attestation was created",
              args: { name: "comments" },
            },
            {
              name: "--compliance-state",
              description:
                "The compliance state that should be set on the resource",
              args: {
                name: "compliance-state",
                suggestions: ["Compliant", "NonCompliant", "Unknown"],
              },
            },
            {
              name: "--definition-reference-id",
              description:
                "The policy definition reference ID from a policy set definition that the attestation is setting the state for. If the policy assignment assigns a policy set definition the attestation can choose a definition within the set definition with this property or omit this and set the state for the entire set definition",
              args: { name: "definition-reference-id" },
            },
            {
              name: "--evidence",
              description:
                "The evidence supporting the compliance state set in this attestation",
              args: { name: "evidence", isOptional: true, isVariadic: true },
            },
            {
              name: "--expires-on",
              description: "The time the compliance state should expire",
              args: { name: "expires-on" },
            },
            {
              name: "--metadata",
              description:
                "Additional metadata in space-separated key=value pairs for an attestation. This overwrites any existing metadata for the attestation",
              args: { name: "metadata", isOptional: true, isVariadic: true },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--owner",
              description:
                "The person responsible for setting the state of the resource. This value is typically an Azure Active Directory object ID",
              args: { name: "owner" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--policy-assignment-id", "--policy-assignment", "-a"],
              description:
                "The resource ID of the policy assignment that the attestation is setting the state for",
              args: { name: "policy-assignment-id" },
            },
            {
              name: ["--resource-id", "--resource"],
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
      ],
    },
    {
      name: "definition",
      description: "Manage policy definitions",
      subcommands: [
        {
          name: "create",
          description: "Create a policy definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy definition",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--description",
              description: "Policy definition description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the policy definition",
              args: { name: "display-name" },
            },
            {
              name: [
                "--external-evaluation-enforcement-settings",
                "--external-settings",
              ],
              description:
                'The details of the source of external evaluation results required by the policy during enforcement evaluation. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: {
                name: "external-evaluation-enforcement-settings",
                isVariadic: true,
              },
            },
            {
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
            },
            {
              name: "--metadata",
              description:
                "The policy definition metadata. Support shorthand-syntax(full value only), json-file and yaml-file",
              args: { name: "metadata" },
            },
            {
              name: ["--mode", "-m"],
              description: "The policy definition mode",
              args: { name: "mode" },
            },
            {
              name: ["--params", "-p"],
              description:
                'The policy rule parameter definitions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "params", isVariadic: true },
            },
            {
              name: ["--rules", "--rule"],
              description:
                "The policy rule. Support shorthand-syntax(full value only), json-file and yaml-file",
              args: { name: "rules" },
            },
            {
              name: "--version",
              description: "The policy definition version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a policy definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy definition",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
            },
          ],
        },
        {
          name: "list",
          description: "Retrieve policy definitions",
          options: [
            {
              name: "--filter",
              description: "Filter list results",
              args: { name: "filter" },
            },
            {
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
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
          ],
        },
        {
          name: "show",
          description: "Retrieves a policy definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy definition",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a policy definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy definition",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            changeReference,
            {
              name: "--description",
              description: "Policy definition description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the policy definition",
              args: { name: "display-name" },
            },
            {
              name: [
                "--external-evaluation-enforcement-settings",
                "--external-settings",
              ],
              description:
                'The details of the source of external evaluation results required by the policy during enforcement evaluation. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: {
                name: "external-evaluation-enforcement-settings",
                isVariadic: true,
              },
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
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
            },
            {
              name: "--metadata",
              description:
                "The policy definition metadata. Support shorthand-syntax(full value only), json-file and yaml-file",
              args: { name: "metadata" },
            },
            {
              name: ["--mode", "-m"],
              description: "The policy definition mode",
              args: { name: "mode" },
            },
            {
              name: ["--params", "-p"],
              description:
                'The policy rule parameter definitions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "params", isVariadic: true },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: ["--rules", "--rule"],
              description:
                "The policy rule. Support shorthand-syntax(full value only), json-file and yaml-file",
              args: { name: "rules" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--version",
              description: "The policy definition version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "version",
          description: "Manage policy definition versions",
          subcommands: [
            {
              name: "create",
              description: "Create a policy definition version",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy definition",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--version",
                  description: "The policy definition version",
                  args: { name: "version" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--description",
                  description: "The policy definition description",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "The display name of the policy definition",
                  args: { name: "display-name" },
                },
                {
                  name: [
                    "--external-evaluation-enforcement-settings",
                    "--external-settings",
                  ],
                  description:
                    'The details of the source of external evaluation results required by the policy during enforcement evaluation. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: {
                    name: "external-evaluation-enforcement-settings",
                    isVariadic: true,
                  },
                },
                {
                  name: "--management-group",
                  description: "The management group",
                  args: { name: "management-group" },
                },
                {
                  name: "--metadata",
                  description:
                    "The policy definition metadata. Support shorthand-syntax(full value only), json-file and yaml-file",
                  args: { name: "metadata" },
                },
                {
                  name: ["--mode", "-m"],
                  description: "The policy definition mode",
                  args: { name: "mode" },
                },
                {
                  name: ["--params", "-p"],
                  description:
                    'The policy rule parameter definitions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "params", isVariadic: true },
                },
                {
                  name: ["--rules", "--rule"],
                  description:
                    "The policy rule. Support shorthand-syntax(full value only), json-file and yaml-file",
                  args: { name: "rules" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a policy definition version",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy definition",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--version",
                  description: "The policy definition version",
                  args: { name: "version" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--management-group",
                  description: "The management group",
                  args: { name: "management-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Retrieve policy definition versions",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy definition",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--management-group",
                  description: "The management group",
                  args: { name: "management-group" },
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
                  name: "--top",
                  description:
                    "Maximum number of records to return. When the $top filter is not provided, it will return 500 records",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Retrieves a policy definition version",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy definition",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--version",
                  description: "The policy definition version",
                  args: { name: "version" },
                  isRequired: true,
                },
                {
                  name: "--management-group",
                  description: "The management group",
                  args: { name: "management-group" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a policy definition version",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy definition",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--version",
                  description: "The policy definition version",
                  args: { name: "version" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                changeReference,
                {
                  name: "--description",
                  description: "The policy definition description",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "The display name of the policy definition",
                  args: { name: "display-name" },
                },
                {
                  name: [
                    "--external-evaluation-enforcement-settings",
                    "--external-settings",
                  ],
                  description:
                    'The details of the source of external evaluation results required by the policy during enforcement evaluation. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: {
                    name: "external-evaluation-enforcement-settings",
                    isVariadic: true,
                  },
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
                  name: "--management-group",
                  description: "The management group",
                  args: { name: "management-group" },
                },
                {
                  name: "--metadata",
                  description:
                    "The policy definition metadata. Support shorthand-syntax(full value only), json-file and yaml-file",
                  args: { name: "metadata" },
                },
                {
                  name: ["--mode", "-m"],
                  description: "The policy definition mode",
                  args: { name: "mode" },
                },
                {
                  name: ["--params", "-p"],
                  description:
                    'The policy rule parameter definitions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "params", isVariadic: true },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--rules", "--rule"],
                  description:
                    "The policy rule. Support shorthand-syntax(full value only), json-file and yaml-file",
                  args: { name: "rules" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "enrollment",
      description: "Manage policy enrollments",
      subcommands: [
        {
          name: "create",
          description: "Create a policy enrollment",
          options: [
            acquirePolicyToken,
            {
              name: ["--assignment-scope-validation", "-v"],
              description:
                "The option whether to validate the enrollment is at or under the assignment scope",
              args: {
                name: "assignment-scope-validation",
                suggestions: ["Default", "DoNotValidate"],
              },
            },
            changeReference,
            {
              name: "--description",
              description: "The description of the policy enrollment",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the policy enrollment",
              args: { name: "display-name" },
            },
            {
              name: "--metadata",
              description:
                "The policy enrollment metadata. Metadata is an open ended object and is typically a collection of key value pairs. Support shorthand-syntax(full value only), json-file and yaml-file",
              args: { name: "metadata" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the policy enrollment",
              args: { name: "name" },
            },
            {
              name: ["--policy-assignment", "-a"],
              description: "The policy assignment to enroll",
              args: { name: "policy-assignment" },
            },
            {
              name: ["--policy-definition-reference-ids", "-r"],
              description:
                'The policy definition reference IDs. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: {
                name: "policy-definition-reference-ids",
                isVariadic: true,
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-selectors",
              description:
                'The resource selector list to filter policies by resource properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "resource-selectors", isVariadic: true },
            },
            {
              name: "--scope",
              description:
                "The fully qualified Azure Resource manager identifier of the resource",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a policy enrollment",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy enrollment",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "The fully qualified Azure Resource manager identifier of the resource",
              args: { name: "scope" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Retrieve all applicable policy enrollments",
          options: [
            {
              name: ["--disable-scope-strict-match", "-d"],
              description:
                "Include policy enrollments either inherited from parent scopes or at child scopes",
              args: {
                name: "disable-scope-strict-match",
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
              name: "--filter",
              description: "Filter list results",
              args: { name: "filter" },
            },
            {
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "Scope at which to list applicable policy enrollments. If scope is not provided, the scope will be the implied or specified subscription",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "show",
          description: "Retrieve a policy enrollment",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy enrollment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "The fully qualified Azure Resource manager identifier of the resource",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a policy enrollment",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy enrollment",
              args: { name: "name" },
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
              name: ["--assignment-scope-validation", "-v"],
              description:
                "The option whether to validate the enrollment is at or under the assignment scope",
              args: {
                name: "assignment-scope-validation",
                suggestions: ["Default", "DoNotValidate"],
              },
            },
            changeReference,
            {
              name: "--description",
              description: "The description of the policy enrollment",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the policy enrollment",
              args: { name: "display-name" },
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
              name: "--metadata",
              description:
                "The policy enrollment metadata. Metadata is an open ended object and is typically a collection of key value pairs. Support shorthand-syntax(full value only), json-file and yaml-file",
              args: { name: "metadata" },
            },
            {
              name: ["--policy-assignment", "-a"],
              description: "The policy assignment to enroll",
              args: { name: "policy-assignment" },
            },
            {
              name: ["--policy-definition-reference-ids", "-r"],
              description:
                'The policy definition reference IDs. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: {
                name: "policy-definition-reference-ids",
                isVariadic: true,
              },
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
              name: "--resource-selectors",
              description:
                'The resource selector list to filter policies by resource properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "resource-selectors", isVariadic: true },
            },
            {
              name: "--scope",
              description:
                "The fully qualified Azure Resource manager identifier of the resource",
              args: { name: "scope" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
          ],
        },
      ],
    },
    {
      name: "event",
      description: "Manage policy events",
      subcommands: [
        {
          name: "list",
          description: "List policy events",
          options: [
            {
              name: "--apply",
              description:
                "Apply expression for aggregations using OData notation",
              args: { name: "apply" },
            },
            {
              name: "--filter",
              description: "Filter expression using OData notation",
              args: { name: "filter" },
            },
            {
              name: "--from",
              description:
                "ISO 8601 formatted timestamp specifying the start time of the interval to query",
              args: { name: "from" },
            },
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--order-by",
              description: "Ordering expression using OData notation",
              args: { name: "order-by" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--policy-assignment", "-a"],
              description: "Name of policy assignment",
              args: { name: "policy-assignment" },
            },
            {
              name: ["--policy-definition", "-d"],
              description: "Name of policy definition",
              args: { name: "policy-definition" },
            },
            {
              name: ["--policy-set-definition", "-s"],
              description: "Name of policy set definition",
              args: { name: "policy-set-definition" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
            {
              name: "--select",
              description: "Select expression using OData notation",
              args: { name: "select" },
            },
            {
              name: "--to",
              description:
                "ISO 8601 formatted timestamp specifying the end time of the interval to query",
              args: { name: "to" },
            },
            {
              name: "--top",
              description: "Maximum number of records to return",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
    {
      name: "exemption",
      description: "Manage policy exemptions",
      subcommands: [
        {
          name: "create",
          description: "Create a policy exemption",
          options: [
            acquirePolicyToken,
            {
              name: ["--assignment-scope-validation", "-v"],
              description: "The assignment scope validation",
              args: {
                name: "assignment-scope-validation",
                suggestions: ["Default", "DoNotValidate"],
              },
            },
            changeReference,
            {
              name: "--description",
              description: "Policy exemption description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the policy exemption",
              args: { name: "display-name" },
            },
            {
              name: ["--exemption-category", "-e"],
              description: "The policy exemption category",
              args: {
                name: "exemption-category",
                suggestions: ["Mitigated", "Waiver"],
              },
            },
            {
              name: "--expires-on",
              description: "The expiration date and time",
              args: { name: "expires-on" },
            },
            {
              name: "--metadata",
              description:
                "The policy exemption metadata. Support shorthand-syntax(full value only), json-file and yaml-file",
              args: { name: "metadata" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the policy exemption",
              args: { name: "name" },
            },
            {
              name: ["--policy-assignment", "-a"],
              description: "The policy assignment to exempt",
              args: { name: "policy-assignment" },
            },
            {
              name: ["--policy-definition-reference-ids", "-r"],
              description:
                'The policy definition reference IDs. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: {
                name: "policy-definition-reference-ids",
                isVariadic: true,
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-selectors",
              description:
                'The resource selectors list to filter policies by resource properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "resource-selectors", isVariadic: true },
            },
            {
              name: "--scope",
              description: "The scope of the policy assignment",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a policy exemption",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy exemption",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description: "The scope of the policy assignment",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "list",
          description: "Retrieve all applicable policy exemptions",
          options: [
            {
              name: ["--disable-scope-strict-match", "-d"],
              description:
                "Include policy exemptions either inherited from parent scopes or at child scopes",
              args: {
                name: "disable-scope-strict-match",
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
              name: "--filter",
              description: "Filter list results",
              args: { name: "filter" },
            },
            {
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "Scope at which to list applicable policy exemptions. If scope is not provided, the scope will be the implied or specified subscription",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "show",
          description: "Retrieve a policy exemption",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy exemption",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description: "The scope of the policy assignment",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a policy exemption",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy exemption",
              args: { name: "name" },
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
              name: ["--assignment-scope-validation", "-v"],
              description: "The assignment scope validation",
              args: {
                name: "assignment-scope-validation",
                suggestions: ["Default", "DoNotValidate"],
              },
            },
            changeReference,
            {
              name: "--description",
              description: "Policy exemption description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the policy exemption",
              args: { name: "display-name" },
            },
            {
              name: ["--exemption-category", "-e"],
              description: "The policy exemption category",
              args: {
                name: "exemption-category",
                suggestions: ["Mitigated", "Waiver"],
              },
            },
            {
              name: "--expires-on",
              description: "The expiration date and time",
              args: { name: "expires-on" },
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
              name: "--metadata",
              description:
                "The policy exemption metadata. Support shorthand-syntax(full value only), json-file and yaml-file",
              args: { name: "metadata" },
            },
            {
              name: ["--policy-assignment", "-a"],
              description: "The policy assignment to exempt",
              args: { name: "policy-assignment" },
            },
            {
              name: ["--policy-definition-reference-ids", "-r"],
              description:
                'The policy definition reference IDs. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: {
                name: "policy-definition-reference-ids",
                isVariadic: true,
              },
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
              name: "--resource-selectors",
              description:
                'The resource selectors list to filter policies by resource properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "resource-selectors", isVariadic: true },
            },
            {
              name: "--scope",
              description: "The scope of the policy assignment",
              args: { name: "scope" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
          ],
        },
      ],
    },
    {
      name: "metadata",
      description: "Get policy metadata resources",
      subcommands: [
        {
          name: "list",
          description: "List policy metadata resources",
          options: [
            {
              name: "--top",
              description: "Maximum number of records to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a single policy metadata resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the metadata resource",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "remediation",
      description: "Manage resource policy remediations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a resource policy remediation",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the remediation",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a resource policy remediation",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the remediation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--policy-assignment", "-a"],
              description: "Name or resource ID of the policy assignment",
              args: { name: "policy-assignment" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--definition-reference-id",
              description:
                "Policy definition reference ID inside the policy set definition. Only required when the policy assignment is assigning a policy set definition",
              args: { name: "definition-reference-id" },
            },
            {
              name: "--location-filters",
              description:
                "Space separated list of resource locations that should be remediated (Ex: centralus westeurope)",
              args: { name: "location-filters", isVariadic: true },
            },
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: "--resource-discovery-mode",
              description:
                "The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified",
              args: {
                name: "resource-discovery-mode",
                suggestions: ["ExistingNonCompliant", "ReEvaluateCompliance"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a resource policy remediation",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the remediation",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "list",
          description: "List resource policy remediations",
          options: [
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a resource policy remediation",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the remediation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "deployment",
          description: "Manage resource policy remediation deployments",
          subcommands: [
            {
              name: "list",
              description:
                "Lists deployments for a resource policy remediation",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the remediation",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--management-group", "-m"],
                  description: "Name of management group",
                  args: { name: "management-group" },
                },
                {
                  name: "--namespace",
                  description: "Provider namespace (Ex: Microsoft.Provider)",
                  args: { name: "namespace" },
                },
                {
                  name: "--parent",
                  description:
                    "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
                  args: { name: "parent" },
                },
                {
                  name: "--resource",
                  description:
                    "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
                  args: { name: "resource" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--resource-type",
                  description: "Resource type (Ex: resourceTypeC)",
                  args: { name: "resource-type" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "set-definition",
      description: "Manage policy set definitions",
      subcommands: [
        {
          name: "create",
          description: "Create a policy set definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy set definition",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--definition-groups",
              description:
                'The metadata describing groups of policy definition references within the policy set definition. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "definition-groups", isVariadic: true },
            },
            {
              name: "--definitions",
              description:
                'An array of policy definition references. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "definitions", isVariadic: true },
            },
            {
              name: "--description",
              description: "Policy set definition description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the policy set definition",
              args: { name: "display-name" },
            },
            {
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
            },
            {
              name: "--metadata",
              description:
                "The policy set definition metadata. Support shorthand-syntax(full value only), json-file and yaml-file",
              args: { name: "metadata" },
            },
            {
              name: ["--params", "-p"],
              description:
                'The policy set definition parameter definitions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "params", isVariadic: true },
            },
            {
              name: "--version",
              description: "The policy set definition version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a policy set definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy set definition",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
            },
          ],
        },
        {
          name: "list",
          description: "Retrieve policy set definitions",
          options: [
            {
              name: "--expand",
              description: "Additional properties to include in output",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description: "Filter list results",
              args: { name: "filter" },
            },
            {
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
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
          ],
        },
        {
          name: "show",
          description: "Retrieve a policy set definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy set definition",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "Additional properties to include in output",
              args: { name: "expand" },
            },
            {
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a policy set definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the policy set definition",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            changeReference,
            {
              name: "--definition-groups",
              description:
                'The metadata describing groups of policy definition references within the policy set definition. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "definition-groups", isVariadic: true },
            },
            {
              name: "--definitions",
              description:
                'An array of policy definition references. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "definitions", isVariadic: true },
            },
            {
              name: "--description",
              description: "Policy set definition description",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the policy set definition",
              args: { name: "display-name" },
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
              name: "--management-group",
              description: "The management group",
              args: { name: "management-group" },
            },
            {
              name: "--metadata",
              description:
                "The policy set definition metadata. Support shorthand-syntax(full value only), json-file and yaml-file",
              args: { name: "metadata" },
            },
            {
              name: ["--params", "-p"],
              description:
                'The policy set definition parameter definitions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "params", isVariadic: true },
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
              name: "--version",
              description: "The policy set definition version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "version",
          description: "Manage Version",
          subcommands: [
            {
              name: "create",
              description: "Create a policy set definition version",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy set definition",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--version",
                  description: "The policy set definition version",
                  args: { name: "version" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--definition-groups",
                  description:
                    'The metadata describing groups of policy definition references within the policy set definition. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "definition-groups", isVariadic: true },
                },
                {
                  name: "--definitions",
                  description:
                    'An array of policy definition references. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "definitions", isVariadic: true },
                },
                {
                  name: "--description",
                  description: "The policy set definition description",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "The display name of the policy set definition",
                  args: { name: "display-name" },
                },
                {
                  name: "--management-group",
                  description: "The management group",
                  args: { name: "management-group" },
                },
                {
                  name: "--metadata",
                  description:
                    "The policy set definition metadata. Support shorthand-syntax(full value only), json-file and yaml-file",
                  args: { name: "metadata" },
                },
                {
                  name: ["--params", "-p"],
                  description:
                    'The policy set definition parameter definitions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "params", isVariadic: true },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a policy set definition version",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy set definition",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--version",
                  description: "The policy set definition version",
                  args: { name: "version" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--management-group",
                  description: "The management group",
                  args: { name: "management-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Retrieve policy set definition versions",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy set definition",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--expand",
                  description:
                    "Comma-separated list of additional properties to be included in the response. Supported values are 'LatestDefinitionVersion, EffectiveDefinitionVersion'",
                  args: { name: "expand" },
                },
                {
                  name: "--management-group",
                  description: "The management group",
                  args: { name: "management-group" },
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
                  name: "--top",
                  description:
                    "Maximum number of records to return. When the $top filter is not provided, it will return 500 records",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Retrieves a policy set definition version",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy set definition",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--version",
                  description: "The policy set definition version",
                  args: { name: "version" },
                  isRequired: true,
                },
                {
                  name: "--expand",
                  description:
                    "Comma-separated list of additional properties to be included in the response. Supported values are 'LatestDefinitionVersion, EffectiveDefinitionVersion'",
                  args: { name: "expand" },
                },
                {
                  name: "--management-group",
                  description: "The management group",
                  args: { name: "management-group" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a policy set definition version",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the policy set definition",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--version",
                  description: "The policy set definition version",
                  args: { name: "version" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                changeReference,
                {
                  name: "--definition-groups",
                  description:
                    'The metadata describing groups of policy definition references within the policy set definition. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "definition-groups", isVariadic: true },
                },
                {
                  name: "--definitions",
                  description:
                    'An array of policy definition references. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "definitions", isVariadic: true },
                },
                {
                  name: "--description",
                  description: "The policy set definition description",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "The display name of the policy set definition",
                  args: { name: "display-name" },
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
                  name: "--management-group",
                  description: "The management group",
                  args: { name: "management-group" },
                },
                {
                  name: "--metadata",
                  description:
                    "The policy set definition metadata. Support shorthand-syntax(full value only), json-file and yaml-file",
                  args: { name: "metadata" },
                },
                {
                  name: ["--params", "-p"],
                  description:
                    'The policy set definition parameter definitions. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "params", isVariadic: true },
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "state",
      description: "Manage policy compliance states",
      subcommands: [
        {
          name: "list",
          description: "List policy compliance states",
          options: [
            {
              name: "--all",
              description:
                "Within the specified time interval, get all policy states instead of the latest only",
            },
            {
              name: "--apply",
              description:
                "Apply expression for aggregations using OData notation",
              args: { name: "apply" },
            },
            {
              name: "--expand",
              description: "Expand expression using OData notation",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description: "Filter expression using OData notation",
              args: { name: "filter" },
            },
            {
              name: "--from",
              description:
                "ISO 8601 formatted timestamp specifying the start time of the interval to query",
              args: { name: "from" },
            },
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--order-by",
              description: "Ordering expression using OData notation",
              args: { name: "order-by" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--policy-assignment", "-a"],
              description: "Name of policy assignment",
              args: { name: "policy-assignment" },
            },
            {
              name: ["--policy-definition", "-d"],
              description: "Name of policy definition",
              args: { name: "policy-definition" },
            },
            {
              name: ["--policy-set-definition", "-s"],
              description: "Name of policy set definition",
              args: { name: "policy-set-definition" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
            {
              name: "--select",
              description: "Select expression using OData notation",
              args: { name: "select" },
            },
            {
              name: "--to",
              description:
                "ISO 8601 formatted timestamp specifying the end time of the interval to query",
              args: { name: "to" },
            },
            {
              name: "--top",
              description: "Maximum number of records to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "summarize",
          description: "Summarize policy compliance states",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--filter",
              description: "Filter expression using OData notation",
              args: { name: "filter" },
            },
            {
              name: "--from",
              description:
                "ISO 8601 formatted timestamp specifying the start time of the interval to query",
              args: { name: "from" },
            },
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--policy-assignment", "-a"],
              description: "Name of policy assignment",
              args: { name: "policy-assignment" },
            },
            {
              name: ["--policy-definition", "-d"],
              description: "Name of policy definition",
              args: { name: "policy-definition" },
            },
            {
              name: ["--policy-set-definition", "-s"],
              description: "Name of policy set definition",
              args: { name: "policy-set-definition" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
            {
              name: "--to",
              description:
                "ISO 8601 formatted timestamp specifying the end time of the interval to query",
              args: { name: "to" },
            },
            {
              name: "--top",
              description: "Maximum number of records to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "trigger-scan",
          description: "Trigger a policy compliance evaluation for a scope",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
