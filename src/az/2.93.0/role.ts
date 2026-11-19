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
  name: "role",
  description: "Manage Azure role-based access control (Azure RBAC)",
  subcommands: [
    {
      name: "assignment",
      description: "Manage role assignments",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new role assignment for a user, group, or service principal",
          options: [
            {
              name: "--role",
              description: "Role name or id",
              args: { name: "role" },
              isRequired: true,
            },
            {
              name: "--scope",
              description:
                "Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM",
              args: { name: "scope" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--assignee",
              description:
                "Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name",
              args: { name: "assignee" },
            },
            {
              name: "--assignee-object-id",
              description:
                "The assignee's object ID (also known as principal ID). Use this argument instead of '--assignee' to bypass Microsoft Graph query in case the logged-in account has no permission or the machine has no network access to query Microsoft Graph",
              args: { name: "assignee-object-id" },
            },
            {
              name: "--assignee-principal-type",
              description:
                "Use with --assignee-object-id to avoid errors caused by propagation latency in Microsoft Graph",
              args: {
                name: "assignee-principal-type",
                suggestions: [
                  "ForeignGroup",
                  "Group",
                  "ServicePrincipal",
                  "User",
                ],
              },
            },
            changeReference,
            {
              name: "--condition",
              description:
                "Condition under which the user can be granted permission",
              args: { name: "condition" },
            },
            {
              name: "--condition-version",
              description:
                "Version of the condition syntax. If --condition is specified without --condition-version, default to 2.0",
              args: { name: "condition-version" },
            },
            {
              name: "--description",
              description: "Description of role assignment",
              args: { name: "description" },
            },
            {
              name: ["--name", "-n"],
              description:
                "A GUID for the role assignment. It must be unique and different for each role assignment. If omitted, a new GUID is generated",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete role assignments",
          options: [
            acquirePolicyToken,
            {
              name: "--assignee",
              description:
                "Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name",
              args: { name: "assignee" },
            },
            {
              name: "--assignee-object-id",
              description:
                "The assignee's object ID (also known as principal ID). Use this argument instead of '--assignee' to bypass Microsoft Graph query in case the logged-in account has no permission or the machine has no network access to query Microsoft Graph",
              args: { name: "assignee-object-id" },
            },
            changeReference,
            {
              name: "--ids",
              description: "Space-separated role assignment ids",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--include-inherited",
              description: "Include assignments applied on parent scopes",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Use it only if the role or assignment was added at the level of a resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description: "Role name or id",
              args: { name: "role" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM",
              args: { name: "scope" },
            },
            { name: ["--yes", "-y"], description: "Currently no-op" },
          ],
        },
        {
          name: "list",
          description: "List role assignments",
          options: [
            {
              name: "--all",
              description:
                "Show all assignments under the current subscription",
            },
            {
              name: "--assignee",
              description:
                "Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name",
              args: { name: "assignee" },
            },
            {
              name: "--assignee-object-id",
              description:
                "The assignee's object ID (also known as principal ID). Use this argument instead of '--assignee' to bypass Microsoft Graph query in case the logged-in account has no permission or the machine has no network access to query Microsoft Graph",
              args: { name: "assignee-object-id" },
            },
            {
              name: "--fill-principal-name",
              description:
                "Query Microsoft Graph to get the assignee's userPrincipalName (for user), servicePrincipalNames (for service principal) or displayName (for group), then fill principalName property with it. If the logged-in account has no permission or the machine has no network access to query Microsoft Graph, set this flag to false to avoid warning or error",
              args: {
                name: "fill-principal-name",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--fill-role-definition-name",
              description:
                "Fill roleDefinitionName property in addition to roleDefinitionId. This operation is expensive. If you encounter performance issue, set this flag to false",
              args: {
                name: "fill-role-definition-name",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--include-groups",
              description:
                "Include extra assignments to the groups of which the user is a member (transitively)",
            },
            {
              name: "--include-inherited",
              description: "Include assignments applied on parent scopes",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Use it only if the role or assignment was added at the level of a resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description: "Role name or id",
              args: { name: "role" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "list-changelogs",
          description: "List changelogs for role assignments",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--end-time",
              description:
                "The end time of the query in the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2000-12-31T12:59:59Z. Defaults to the current time",
              args: { name: "end-time" },
            },
            {
              name: "--start-time",
              description:
                "The start time of the query in the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2000-12-31T12:59:59Z. Defaults to 1 Hour prior to the current time",
              args: { name: "start-time" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update an existing role assignment for a user, group, or service principal",
          options: [
            {
              name: "--role-assignment",
              description:
                "Description of an existing role assignment as JSON, or a path to a file containing a JSON description",
              args: { name: "role-assignment" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
      ],
    },
    {
      name: "definition",
      description: "Manage role definitions",
      subcommands: [
        {
          name: "create",
          description: "Create a custom role definition",
          options: [
            {
              name: "--role-definition",
              description:
                "Description of a role as JSON, or a path to a file containing a JSON description",
              args: { name: "role-definition" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
        {
          name: "delete",
          description: "Delete a role definition",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Matches the role definition's name (GUID) or roleName (e.g. 'Reader') property",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--custom-role-only",
              description: "Custom roles only(vs. build-in ones)",
              args: {
                name: "custom-role-only",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Use it only if the role or assignment was added at the level of a resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "list",
          description: "List role definitions",
          options: [
            {
              name: "--custom-role-only",
              description: "Custom roles only(vs. build-in ones)",
              args: {
                name: "custom-role-only",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Matches the role definition's name (GUID) or roleName (e.g. 'Reader') property. If a GUID is provided, for better performance, use az role definition show command",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Use it only if the role or assignment was added at the level of a resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a role definition",
          options: [
            {
              name: "--id",
              description:
                "The fully qualified role definition ID. Use the format, /subscriptions/{guid}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId} for subscription level role definitions, or /providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId} for tenant level role definitions",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The role definition's name (GUID)",
              args: { name: "name" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a role definition",
          options: [
            {
              name: "--role-definition",
              description:
                "Description of an existing role as JSON, or a path to a file containing a JSON description",
              args: { name: "role-definition" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
          ],
        },
      ],
    },
    {
      name: "deny-assignment",
      description: "Manage deny assignments",
      subcommands: [
        {
          name: "create",
          description: "Create a user-assigned deny assignment",
          options: [
            acquirePolicyToken,
            {
              name: "--actions",
              description:
                'Space-separated list of actions to deny, e.g. "Microsoft.Authorization/roleAssignments/write". Note: read actions (*/read) are not permitted for user-assigned deny assignments',
              args: { name: "actions", isVariadic: true },
            },
            {
              name: "--assignment-name",
              description:
                "A GUID for the deny assignment. If omitted, a new GUID is generated",
              args: { name: "assignment-name" },
            },
            changeReference,
            {
              name: "--description",
              description: "Description of the deny assignment",
              args: { name: "description" },
            },
            {
              name: "--exclude-principal-ids",
              description:
                "Space-separated list of principal object IDs to exclude from the deny. Required when no --principal-object-id is specified (Everyone mode). Optional when --principal-object-id is specified",
              args: { name: "exclude-principal-ids", isVariadic: true },
            },
            {
              name: "--exclude-principal-types",
              description:
                "Space-separated list of principal types corresponding to --exclude-principal-ids. Accepted values: User, Group, ServicePrincipal",
              args: { name: "exclude-principal-types", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The display name of the deny assignment",
              args: { name: "name" },
            },
            {
              name: "--not-actions",
              description:
                "Space-separated list of actions to exclude from the deny",
              args: { name: "not-actions", isVariadic: true },
            },
            {
              name: "--principal-object-id",
              description:
                "The object ID of a specific User or ServicePrincipal to deny. If omitted, the deny assignment applies to Everyone (all principals) and --exclude-principal-ids is required. Group principals are not permitted",
              args: { name: "principal-object-id" },
            },
            {
              name: "--principal-type",
              description:
                "The type of the principal specified by --principal-object-id. Required when --principal-object-id is provided. Accepted values: User, ServicePrincipal",
              args: {
                name: "principal-type",
                suggestions: ["ServicePrincipal", "User"],
              },
            },
            {
              name: "--scope",
              description:
                "Scope at which the deny assignment applies. For example, /subscriptions/00000000-0000-0000-0000-000000000000 or /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a user-assigned deny assignment",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--id",
              description:
                "The fully qualified ID of the deny assignment to delete",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The name (GUID) of the deny assignment to delete",
              args: { name: "name" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the deny assignment applies. For example, /subscriptions/00000000-0000-0000-0000-000000000000 or /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup",
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
          description: "List deny assignments",
          options: [
            {
              name: "--filter",
              description:
                'OData filter expression to apply. For example, "atScope()" to list at the current scope, or "gdprExportPrincipalId eq \'{objectId}\'" to list for a specific principal',
              args: { name: "filter" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the deny assignment applies. For example, /subscriptions/00000000-0000-0000-0000-000000000000 or /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a deny assignment",
          options: [
            {
              name: "--id",
              description:
                "The fully qualified ID of the deny assignment including scope, e.g. /subscriptions/{id}/providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId}",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The name (GUID) of the deny assignment",
              args: { name: "name" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the deny assignment applies. For example, /subscriptions/00000000-0000-0000-0000-000000000000 or /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup",
              args: { name: "scope" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
