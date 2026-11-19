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
  name: "staticwebapp",
  description: "Manage static apps",
  subcommands: [
    {
      name: "create",
      description:
        'Create a static app. To provide content to the static web app and integrate with a Github repo, provide the Github repository URL (--source) and a branch (--branch). If the repo is under a Github organization, please ensure that the Azure CLI Github App has access to the organization. Access can be requested in the browser when using the "--login-with-github" argument. Access must be granted by the organization\'s admin',
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the static site",
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
          name: "--api-location",
          description:
            "Location of your Azure Functions code. For example, '/api' represents a folder called 'api'",
          args: { name: "api-location" },
        },
        {
          name: "--app-location",
          description:
            "Location of your application code. For example, '/' represents the root of your app, while '/app' represents a directory called 'app'",
          args: { name: "app-location" },
        },
        {
          name: ["--branch", "-b"],
          description: "The target branch in the repository",
          args: { name: "branch" },
        },
        changeReference,
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--login-with-ado",
          description:
            "Use azure credentials to create an Azure Dev Ops personal access token",
        },
        {
          name: "--login-with-github",
          description:
            "Interactively log in with Github to retrieve the Personal Access Token",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--output-location",
          description:
            "The path of your build output relative to your apps location. For example, setting a value of 'build' when your app location is set to '/app' will cause the content at '/app/build' to be served",
          args: { name: "output-location" },
        },
        {
          name: "--sku",
          description: "The pricing tiers for Static Web App",
          args: { name: "sku", suggestions: ["Dedicated", "Free", "Standard"] },
        },
        {
          name: ["--source", "-s"],
          description: "URL for the repository of the static site",
          args: { name: "source" },
        },
        {
          name: "--tags",
          description:
            "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
        {
          name: ["--token", "-t"],
          description:
            "A user's GitHub or Azure Dev Ops repository token. This is used to create the Github Action or Dev Ops pipeline",
          args: { name: "token" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a static app",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the static site",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "disconnect",
      description:
        "Disconnect source control to enable connecting to a different repo",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the static site",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "list",
      description:
        "List all static app resources in a subscription, or in resource group if provided",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "reconnect",
      description:
        "Connect to a repo and branch following a disconnect command",
      options: [
        {
          name: ["--branch", "-b"],
          description: "The target branch in the repository",
          args: { name: "branch" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the static site",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--source", "-s"],
          description: "URL for the repository of the static site",
          args: { name: "source" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--login-with-github",
          description:
            "Interactively log in with Github to retrieve the Personal Access Token",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--token", "-t"],
          description:
            "A user's GitHub or Azure Dev Ops repository token. This is used to create the Github Action or Dev Ops pipeline",
          args: { name: "token" },
        },
      ],
    },
    {
      name: "show",
      description: "Show details of a static app",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the static site",
          args: { name: "name" },
          isRequired: true,
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
      name: "update",
      description: "Update a static app. Return the app updated",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the static site",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: ["--branch", "-b"],
          description: "The target branch in the repository",
          args: { name: "branch" },
        },
        changeReference,
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--sku",
          description: "The pricing tiers for Static Web App",
          args: { name: "sku", suggestions: ["Dedicated", "Free", "Standard"] },
        },
        {
          name: ["--source", "-s"],
          description: "URL for the repository of the static site",
          args: { name: "source" },
        },
        {
          name: "--tags",
          description:
            "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
        {
          name: ["--token", "-t"],
          description:
            "A user's GitHub or Azure Dev Ops repository token. This is used to create the Github Action or Dev Ops pipeline",
          args: { name: "token" },
        },
      ],
    },
    {
      name: "appsettings",
      description: "Manage app settings the static app",
      subcommands: [
        {
          name: "delete",
          description: "Delete app settings with given keys of the static app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--setting-names",
              description: "Space-separated app setting names",
              args: {
                name: "setting-names",
                isOptional: true,
                isVariadic: true,
              },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--environment-name",
              description: "Name of the environment of static site",
              args: { name: "environment-name" },
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
          name: "list",
          description: "List app settings of the static app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--environment-name",
              description: "Name of the environment of static site",
              args: { name: "environment-name" },
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
          name: "set",
          description: "Add to or change the app settings of the static app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--setting-names",
              description: "Space-separated app settings in 'key=value' format",
              args: {
                name: "setting-names",
                isOptional: true,
                isVariadic: true,
              },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--environment-name",
              description: "Name of the environment of static site",
              args: { name: "environment-name" },
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
    {
      name: "backends",
      description:
        'Link or unlink a prexisting backend with a static web app. Also known as "Bring your own API."',
      subcommands: [
        {
          name: "link",
          description:
            'Link a backend to a static web app. Also known as "Bring your own API."',
          options: [
            {
              name: "--backend-resource-id",
              description: "Resource ID of the backend to link",
              args: { name: "backend-resource-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
              name: "--backend-region",
              description: "Region of the backend resource",
              args: { name: "backend-region" },
            },
            changeReference,
            {
              name: "--environment-name",
              description: "Name of the environment of static site",
              args: { name: "environment-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details on the backend linked to a static web app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
            {
              name: "--environment-name",
              description: "Name of the environment of static site",
              args: { name: "environment-name" },
            },
          ],
        },
        {
          name: "unlink",
          description: "Unlink backend from a static web app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
              name: "--environment-name",
              description: "Name of the environment of static site",
              args: { name: "environment-name" },
            },
            {
              name: "--remove-backend-auth",
              description:
                "If set to true, removes the identity provider configured on the backend during the linking process",
            },
          ],
        },
        {
          name: "validate",
          description: "Validate a backend for a static web app",
          options: [
            {
              name: "--backend-resource-id",
              description: "Resource ID of the backend to link",
              args: { name: "backend-resource-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
              name: "--backend-region",
              description: "Region of the backend resource",
              args: { name: "backend-region" },
            },
            changeReference,
            {
              name: "--environment-name",
              description: "Name of the environment of static site",
              args: { name: "environment-name" },
            },
          ],
        },
      ],
    },
    {
      name: "enterprise-edge",
      description:
        "Manage the Azure Front Door CDN for static webapps. For optimal experience and availability please check our documentation https://aka.ms/swaedge",
      subcommands: [
        {
          name: "disable",
          description:
            "Disable the Azure Front Door CDN for a static webapp. For optimal experience and availability please check our documentation https://aka.ms/swaedge",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
          ],
        },
        {
          name: "enable",
          description:
            "Enable the Azure Front Door CDN for a static webapp. Enabling enterprise-grade edge requires re-registration for the Azure Front Door Microsoft.CDN resource provider. For optimal experience and availability please check our documentation https://aka.ms/swaedge",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
              name: "--no-register",
              description:
                "Don't try to register the Microsoft.CDN provider. Registration can be done manually with: az provider register --wait --namespace Microsoft.CDN. For more details, please review the documentation available at https://go.microsoft.com/fwlink/?linkid=2184995",
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the status (Enabled, Disabled, Enabling, Disabling) of the Azure Front Door CDN for a webapp. For optimal experience and availability please check our documentation https://aka.ms/swaedge",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
      ],
    },
    {
      name: "environment",
      description: "Manage environment of the static app",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete the static app production environment or the specified environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--environment-name",
              description: "Name of the environment of static site",
              args: { name: "environment-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "functions",
          description: "Show information about functions",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--environment-name",
              description: "Name of the environment of static site",
              args: { name: "environment-name" },
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
          name: "list",
          description:
            "List all environment of the static app including production",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
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
          name: "show",
          description:
            "Show information about the production environment or the specified environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--environment-name",
              description: "Name of the environment of static site",
              args: { name: "environment-name" },
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
    {
      name: "functions",
      description:
        'Link or unlink a prexisting functionapp with a static webapp. Also known as "Bring your own Functions."',
      subcommands: [
        {
          name: "link",
          description:
            'Link an Azure Function to a static webapp. Also known as "Bring your own Functions." Only one Azure Functions app is available to a single static web app. Static webapp SKU must be "Standard" or "Dedicated"',
          options: [
            {
              name: "--function-resource-id",
              description:
                "Resource ID of the functionapp to link. Can be retrieved with 'az functionapp --query id'",
              args: { name: "function-resource-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
              name: "--environment-name",
              description: "Name of the environment of static site",
              args: { name: "environment-name" },
            },
            {
              name: "--force",
              description:
                "Force the function link even if the function is already linked to a static webapp. May be needed if the function was previously linked to a static webapp",
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details on the Azure Function linked to a static webapp",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
          name: "unlink",
          description: "Unlink an Azure Function from a static webapp",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
          ],
        },
      ],
    },
    {
      name: "hostname",
      description: "Manage custom hostnames of Functions of the static app",
      subcommands: [
        {
          name: "delete",
          description: "Delete given hostname of the static app",
          options: [
            {
              name: "--hostname",
              description:
                "Custom hostname such as www.example.com. Only support sub domain in preview",
              args: { name: "hostname" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
            },
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
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List custom hostnames of the static app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
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
          name: "set",
          description:
            "Set given sub-domain hostname to the static app. Please configure CNAME/TXT/ALIAS record with your DNS provider. Use --no-wait to not wait for validation",
          options: [
            {
              name: "--hostname",
              description:
                "Custom hostname such as www.example.com. Only support sub domain in preview",
              args: { name: "hostname" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
            },
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
            {
              name: ["--validation-method", "-m"],
              description: "Validation method for the custom domain",
              args: {
                name: "validation-method",
                suggestions: ["cname-delegation", "dns-txt-token"],
              },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get details for a staticwebapp custom domain. Can be used to fetch validation token for TXT domain validation (see example)",
          options: [
            {
              name: "--hostname",
              description:
                "Custom hostname such as www.example.com. Only support sub domain in preview",
              args: { name: "hostname" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
      ],
    },
    {
      name: "identity",
      description: "Manage a static web app's managed identity",
      subcommands: [
        {
          name: "assign",
          description: "Assign managed identity to the static web app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
              name: "--identities",
              description:
                "Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities", isOptional: true, isVariadic: true },
            },
            {
              name: "--role",
              description:
                "Role name or id the managed identity will be assigned",
              args: { name: "role" },
            },
            {
              name: "--scope",
              description: "The scope the managed identity has access to",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "remove",
          description: "Disable static web app's managed identity",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
              name: "--identities",
              description:
                "Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities", isOptional: true, isVariadic: true },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "show",
          description: "Display static web app's managed identity",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
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
      ],
    },
    {
      name: "secrets",
      description: "Manage deployment token for the static app",
      subcommands: [
        {
          name: "list",
          description: "List the deployment token for the static app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
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
          name: "reset-api-key",
          description: "Reset the deployment token for the static app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
            },
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
    {
      name: "users",
      description: "Manage users of the static app",
      subcommands: [
        {
          name: "invite",
          description:
            "Create invitation link for specified user to the static app",
          options: [
            {
              name: "--authentication-provider",
              description:
                "Authentication provider of the user identity such as AAD, Facebook, GitHub, Google, Twitter",
              args: { name: "authentication-provider" },
              isRequired: true,
            },
            {
              name: "--domain",
              description: "A domain added to the static app in quotes",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: "--invitation-expiration-in-hours",
              description:
                "This value sets when the link will expire in hours. The maximum is 168 (7 days)",
              args: { name: "invitation-expiration-in-hours" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--roles",
              description:
                "Comma-separated default or user-defined role names. Roles that can be assigned to a user are comma separated and case-insensitive (at most 50 roles up to 25 characters each and restricted to 0-9,A-Z,a-z, and _). Define roles in routes.json during root directory of your GitHub repo",
              args: { name: "roles" },
              isRequired: true,
            },
            {
              name: "--user-details",
              description:
                "Email for AAD, Facebook, and Google. Account name (handle) for GitHub and Twitter",
              args: { name: "user-details" },
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
          ],
        },
        {
          name: "list",
          description:
            "Lists users and assigned roles, limited to users who accepted their invites",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--authentication-provider",
              description:
                "Authentication provider of the user identity such as AAD, Facebook, GitHub, Google, Twitter",
              args: { name: "authentication-provider" },
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
          name: "update",
          description:
            "Updates a user entry with the listed roles. Either user details or user id is required",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the static site",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--roles",
              description:
                "Comma-separated default or user-defined role names. Roles that can be assigned to a user are comma separated and case-insensitive (at most 50 roles up to 25 characters each and restricted to 0-9,A-Z,a-z, and _). Define roles in routes.json during root directory of your GitHub repo",
              args: { name: "roles" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--authentication-provider",
              description:
                "Authentication provider of the user identity such as AAD, Facebook, GitHub, Google, Twitter",
              args: { name: "authentication-provider" },
            },
            changeReference,
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--user-details",
              description:
                "Email for AAD, Facebook, and Google. Account name (handle) for GitHub and Twitter",
              args: { name: "user-details" },
            },
            {
              name: "--user-id",
              description: "Given id of registered user",
              args: { name: "user-id" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
