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
  name: "acr",
  description: "Manage private registries with Azure Container Registries",
  subcommands: [
    {
      name: "build",
      description:
        "Queues a quick build, providing streaming logs for an Azure Container Registry",
      options: [
        {
          name: ["--registry", "-r"],
          description:
            "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
          args: { name: "registry" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: "--agent-pool",
          description: "The name of the agent pool",
          args: { name: "agent-pool" },
        },
        {
          name: "--auth-mode",
          description: "Auth mode of the source registry",
          args: { name: "auth-mode", suggestions: ["Default", "None"] },
        },
        {
          name: "--build-arg",
          description:
            "Build argument in '--build-arg name[=value]' format. Multiples are supported by passing '--build-arg name[=value]' multiple times. IMPORTANT: This parameter should not include passwords, access tokens, or sensitive information of any kind. This parameter value will be visible to the ACR team for debugging purposes",
          args: { name: "build-arg" },
        },
        changeReference,
        {
          name: ["--file", "-f"],
          description:
            "The relative path of the the docker file to the source code root folder. Default to 'Dockerfile'",
          args: { name: "file" },
        },
        {
          name: ["--image", "-t"],
          description:
            "The name and tag of the image using the format: '-t repo/image:tag'. Multiple tags are supported by passing -t multiple times",
          args: { name: "image" },
        },
        {
          name: "--log-template",
          description:
            "The repository and tag template for run log artifact using the format: 'log/repo:tag' (e.g., 'acr/logs:{{.Run.ID}}'). Only applicable to CMK enabled registry",
          args: { name: "log-template" },
        },
        {
          name: "--no-format",
          description:
            "Indicates whether the logs should be displayed in raw format",
        },
        {
          name: "--no-logs",
          description: "Do not show logs after successfully queuing the build",
        },
        {
          name: "--no-push",
          description:
            "Indicates whether the image built should be pushed to the registry",
        },
        {
          name: "--no-wait",
          description:
            "Do not wait for the build to complete and return immediately after queuing the build",
        },
        {
          name: "--platform",
          description:
            "The platform where build/task is run, Eg, 'windows' and 'linux'. When it's used in build commands, it also can be specified in 'os/arch/variant' format for the resulting image. Eg, linux/arm/v7. The 'arch' and 'variant' parts are optional",
          args: { name: "platform" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--secret-build-arg",
          description:
            "Secret build argument in '--secret-build-arg name[=value]' format. Multiples are supported by passing '--secret-build-arg name[=value]' multiple times. This parameter value is not surfaced to the ACR team and is more suitable for sensitive information",
          args: { name: "secret-build-arg" },
        },
        {
          name: "--source-acr-auth-id",
          description:
            "Assign the identity used for source registry login. Use '[caller]' for caller identity",
          args: {
            name: "source-acr-auth-id",
            suggestions: ["[caller]", "none"],
          },
        },
        {
          name: "--target",
          description: "The name of the target build stage",
          args: { name: "target" },
        },
        {
          name: "--timeout",
          description: "The timeout in seconds",
          args: { name: "timeout" },
        },
      ],
      args: {
        name: "<SOURCE_LOCATION>",
        description:
          "The local source code directory path (e.g., './src'), or the URL to a git repository (e.g., 'https://github.com/Azure-Samples/acr-build-helloworld-node.git') or a remote tarball (e.g., 'http://server/context.tar.gz'), or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag')",
      },
    },
    {
      name: "check-health",
      description:
        "Gets health information on the environment and optionally a target registry",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: "--ignore-errors",
          description: "Provide all health checks, even if errors are found",
        },
        {
          name: ["--name", "-n"],
          description:
            "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
          args: { name: "name" },
        },
        {
          name: "--repository",
          description: "The name of the repository",
          args: { name: "repository" },
        },
        {
          name: "--vnet",
          description:
            "Virtual network ID so to run this command inside a VNET to verify the DNS routing to private endpoints",
          args: { name: "vnet" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "check-name",
      description:
        "Checks if an Azure Container Registry name is valid and available for use",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--dnl-scope",
          description:
            "Domain name label scope will add a hash to the resource name . The resulting login server name will be in the format registry-name-hash.azurecr-io. Default is Unsecure",
          args: {
            name: "dnl-scope",
            suggestions: [
              "NoReuse",
              "ResourceGroupReuse",
              "SubscriptionReuse",
              "TenantReuse",
              "Unsecure",
            ],
          },
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
      name: "create",
      description: "Create an Azure Container Registry",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
          name: "--sku",
          description: "The SKU of the container registry",
          args: { name: "sku", suggestions: ["Basic", "Premium", "Standard"] },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: "--admin-enabled",
          description: "Indicates whether the admin user is enabled",
          args: {
            name: "admin-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--allow-exports",
          description:
            "Configure exportPolicy to allow/disallow artifacts from being exported from this registry. Artifacts can be exported via import or transfer operations. For more information, please visit https://aka.ms/acr/export-policy",
          args: {
            name: "allow-exports",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--allow-metadata-search",
          description:
            "Enable or disable the metadata-search feature for the registry. If not specified, this is set to disabled by default",
          args: {
            name: "allow-metadata-search",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--allow-trusted-services",
          description:
            "Allow trusted Azure Services to access network restricted registries. For more information, please visit https://aka.ms/acr/trusted-services. The Default is to allow",
          args: {
            name: "allow-trusted-services",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        changeReference,
        {
          name: "--data-endpoint-enabled",
          description:
            "Enable dedicated data endpoint for client firewall configuration",
          args: {
            name: "data-endpoint-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--default-action",
          description:
            "Default action to apply when no rule matches. Only applicable to Premium SKU",
          args: { name: "default-action", suggestions: ["Allow", "Deny"] },
        },
        {
          name: "--dnl-scope",
          description:
            "Domain name label scope will add a hash to the resource name. The resulting login server name will be in the format registryname-hash.azurecr-io. Default is Unsecure",
          args: {
            name: "dnl-scope",
            suggestions: [
              "NoReuse",
              "ResourceGroupReuse",
              "SubscriptionReuse",
              "TenantReuse",
              "Unsecure",
            ],
          },
        },
        {
          name: "--endpoint-protocol",
          description:
            "The endpoint protocol for the registry. Allowed values: IPv4, IPv4AndIPv6",
          args: {
            name: "endpoint-protocol",
            suggestions: ["IPv4", "IPv4AndIPv6"],
          },
        },
        {
          name: "--identity",
          description:
            "Use assigned managed identity resource id or name if in the same resource group",
          args: { name: "identity" },
        },
        {
          name: "--key-encryption-key",
          description:
            "Azure Key Vault or Managed HSM key URI. To enable automated rotation, provide a versionless key URI. For manual rotation, provide a versioned key URI",
          args: { name: "key-encryption-key" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--public-network-enabled",
          description:
            "Allow public network access for the container registry. The Default is to allow",
          args: {
            name: "public-network-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--regional-endpoints",
          description:
            "Indicates whether or not regional endpoints should be enabled for the registry",
          args: {
            name: "regional-endpoints",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--role-assignment-mode",
          description:
            "Role assignment mode of the registry. For more information on this feature, see https://aka.ms/acr/auth/abac. The Default is rbac",
          args: {
            name: "role-assignment-mode",
            suggestions: ["rbac", "rbac-abac"],
          },
        },
        {
          name: "--tags",
          description:
            "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
        {
          name: "--workspace",
          description:
            'Name or ID of the Log Analytics workspace to send registry diagnostic logs to. All events will be enabled. You can use "az monitor log-analytics workspace create" to create one. Extra billing may apply',
          args: { name: "workspace" },
        },
        {
          name: "--writable-cache-repos",
          description:
            "'Enable or disable writing to repositories backed by cache rules. If not specified, this is set to Disabled by default'",
          args: {
            name: "writable-cache-repos",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--zone-redundancy",
          description:
            "Indicates whether or not zone redundancy should be enabled for this registry or replication. For more information, such as supported locations, please visit https://aka.ms/acr/az. Zone-redundancy cannot be updated. Defaults to 'Disabled'",
          args: {
            name: "zone-redundancy",
            suggestions: ["Disabled", "Enabled"],
          },
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes an Azure Container Registry",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "import",
      description:
        "Imports an image to an Azure Container Registry from another Container Registry. Import removes the need to docker pull, docker tag, docker push. For larger images consider using --no-wait",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--source",
          description:
            "Source image name or fully qualified source containing the registry login server. If --registry is used, --source will always be interpreted as a source image, even if it contains the login server",
          args: { name: "source" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--force",
          description: "Overwrite the existing tag of the image to be imported",
        },
        {
          name: ["--image", "-t"],
          description:
            "The name and tag of the image using the format: '-t repo/image:tag'. Multiple tags are supported by passing -t multiple times",
          args: { name: "image" },
        },
        {
          name: "--no-wait",
          description:
            "Do not wait for the import to complete and return immediately after queuing the import",
        },
        {
          name: ["--password", "-p"],
          description: "The password of source container registry",
          args: { name: "password" },
        },
        {
          name: ["--registry", "-r"],
          description:
            "The source Azure container registry. This can be name, login server or resource ID of the source registry",
          args: { name: "registry" },
        },
        {
          name: "--repository",
          description:
            "The repository name for a manifest-only copy of images. Multiple copies supported by passing --repository multiple times",
          args: { name: "repository" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--username", "-u"],
          description: "The username of source container registry",
          args: { name: "username" },
        },
      ],
    },
    {
      name: "list",
      description:
        "Lists all the container registries under the current subscription",
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
      name: "login",
      description:
        "Log in to an Azure Container Registry through the Docker CLI",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
          args: { name: "name" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--endpoint",
          description:
            "Log in to a specific regional endpoint of the container registry. Specify the region name (e.g., eastus, westus2). Only applicable when regional endpoints are enabled",
          args: { name: "endpoint" },
        },
        {
          name: ["--expose-token", "-t"],
          description:
            "Expose refresh token instead of automatically logging in through Docker CLI",
        },
        {
          name: ["--password", "-p"],
          description: "The password used to log into a container registry",
          args: { name: "password" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--suffix",
          description:
            "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
          args: { name: "suffix" },
        },
        {
          name: ["--username", "-u"],
          description: "The username used to log into a container registry",
          args: { name: "username" },
        },
      ],
    },
    {
      name: "run",
      description:
        "Queues a quick run providing streamed logs for an Azure Container Registry",
      options: [
        {
          name: ["--registry", "-r"],
          description:
            "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
          args: { name: "registry" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: "--agent-pool",
          description: "The name of the agent pool",
          args: { name: "agent-pool" },
        },
        {
          name: "--auth-mode",
          description: "Auth mode of the source registry",
          args: { name: "auth-mode", suggestions: ["Default", "None"] },
        },
        changeReference,
        {
          name: "--cmd",
          description:
            "Commands to execute. This also supports additional docker run parameters (https://docs.docker.com/engine/reference/commandline/run/) or even other docker commands (https://docs.docker.com/engine/reference/commandline/docker/)",
          args: { name: "cmd" },
        },
        {
          name: ["--file", "-f"],
          description:
            "The task template/definition file path relative to the source context. It can be '-' to pipe a file from the standard input",
          args: { name: "file" },
        },
        {
          name: "--log-template",
          description:
            "The repository and tag template for run log artifact using the format: 'log/repo:tag' (e.g., 'acr/logs:{{.Run.ID}}'). Only applicable to CMK enabled registry",
          args: { name: "log-template" },
        },
        {
          name: "--no-format",
          description:
            "Indicates whether the logs should be displayed in raw format",
        },
        {
          name: "--no-logs",
          description: "Do not show logs after successfully queuing the build",
        },
        {
          name: "--no-wait",
          description:
            "Do not wait for the run to complete and return immediately after queuing the run",
        },
        {
          name: "--platform",
          description:
            "The platform where build/task is run, Eg, 'windows' and 'linux'. When it's used in build commands, it also can be specified in 'os/arch/variant' format for the resulting image. Eg, linux/arm/v7. The 'arch' and 'variant' parts are optional",
          args: { name: "platform" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--set",
          description:
            "Value in 'name[=value]' format. Multiples supported by passing --set multiple times",
          args: { name: "set" },
        },
        {
          name: "--set-secret",
          description:
            "Secret value in '--set name[=value]' format. Multiples supported by passing --set multiple times",
          args: { name: "set-secret" },
        },
        {
          name: "--source-acr-auth-id",
          description:
            "Assign the identity used for source registry login. Use '[caller]' for caller identity",
          args: {
            name: "source-acr-auth-id",
            suggestions: ["[caller]", "none"],
          },
        },
        {
          name: "--timeout",
          description: "The timeout in seconds",
          args: { name: "timeout" },
        },
        {
          name: "--values",
          description:
            "The task values file path relative to the source context",
          args: { name: "values" },
        },
      ],
      args: {
        name: "<SOURCE_LOCATION>",
        description:
          "The local source code directory path (e.g., './src'), or the URL to a git repository (e.g., 'https://github.com/Azure-Samples/acr-build-helloworld-node.git'), or a remote tarball (e.g., 'http://server/context.tar.gz'), or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag'). If '/dev/null' is specified, the value will be set to None and ignored",
      },
    },
    {
      name: "show",
      description: "Get the details of an Azure Container Registry",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
      name: "show-endpoints",
      description:
        "Display registry endpoints including data endpoints and regional endpoints if configured",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
      ],
    },
    {
      name: "show-usage",
      description: "Get the storage usage for an Azure Container Registry",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
      ],
    },
    {
      name: "update",
      description: "Update an Azure Container Registry",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
          name: "--admin-enabled",
          description: "Indicates whether the admin user is enabled",
          args: {
            name: "admin-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--allow-exports",
          description:
            "Configure exportPolicy to allow/disallow artifacts from being exported from this registry. Artifacts can be exported via import or transfer operations. For more information, please visit https://aka.ms/acr/export-policy",
          args: {
            name: "allow-exports",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--allow-metadata-search",
          description:
            "Enable or disable the metadata-search feature for the registry",
          args: {
            name: "allow-metadata-search",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--allow-trusted-services",
          description:
            "Allow trusted Azure Services to access network restricted registries. For more information, please visit https://aka.ms/acr/trusted-services",
          args: {
            name: "allow-trusted-services",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--anonymous-pull-enabled",
          description: "Enable registry-wide pull from unauthenticated clients",
          args: {
            name: "anonymous-pull-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        changeReference,
        {
          name: "--data-endpoint-enabled",
          description:
            "Enable dedicated data endpoint for client firewall configuration",
          args: {
            name: "data-endpoint-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--default-action",
          description:
            "Default action to apply when no rule matches. Only applicable to Premium SKU",
          args: { name: "default-action", suggestions: ["Allow", "Deny"] },
        },
        {
          name: "--endpoint-protocol",
          description:
            "The endpoint protocol for the registry. Allowed values: IPv4, IPv4AndIPv6",
          args: {
            name: "endpoint-protocol",
            suggestions: ["IPv4", "IPv4AndIPv6"],
          },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--public-network-enabled",
          description: "Allow public network access for the container registry",
          args: {
            name: "public-network-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--regional-endpoints",
          description:
            "Indicates whether or not regional endpoints should be enabled for the registry",
          args: {
            name: "regional-endpoints",
            suggestions: ["Disabled", "Enabled"],
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
          name: "--role-assignment-mode",
          description:
            "Role assignment mode of the registry. For more information on this feature, see https://aka.ms/acr/auth/abac. The Default is rbac",
          args: {
            name: "role-assignment-mode",
            suggestions: ["rbac", "rbac-abac"],
          },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
          args: { name: "set", isVariadic: true },
        },
        {
          name: "--sku",
          description: "The SKU of the container registry",
          args: { name: "sku", suggestions: ["Basic", "Premium", "Standard"] },
        },
        {
          name: "--tags",
          description:
            "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
        {
          name: "--writable-cache-repos",
          description:
            "'Enable or disable writing to repositories backed by cache rules. If not specified, this is set to Disabled by default'",
          args: {
            name: "writable-cache-repos",
            suggestions: ["Disabled", "Enabled"],
          },
        },
      ],
    },
    {
      name: "agentpool",
      description:
        "Manage private Tasks agent pools with Azure Container Registries",
      subcommands: [
        {
          name: "create",
          description: "Create an agent pool for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the agent pool",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--count", "-c"],
              description: "The count of the agent pool",
              args: { name: "count" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the Agent Pool to complete action and return immediately after queuing the request",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subnet-id",
              description:
                "The Virtual Network Subnet Resource Id of the agent machine",
              args: { name: "subnet-id" },
            },
            {
              name: "--tier",
              description:
                "Sets the VM your agent pool will run on. Valid values are: S1(2 vCPUs, 3 GiB RAM), S2(4 vCPUs, 8 GiB RAM), S3(8 vCPUs, 16 GiB RAM) or I6(64 vCPUs, 216 GiB RAM, Isolated)",
              args: { name: "tier" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an agent pool",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the agent pool",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--no-wait",
              description:
                "Do not wait for the Agent Pool to complete action and return immediately after queuing the request",
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
          description: "List the agent pools for an Azure Container Registry",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
            "Get the properties of a specified agent pool for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the agent pool",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            { name: "--queue-count", description: "Get only the queue count" },
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
          description: "Update an agent pool for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the agent pool",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--count", "-c"],
              description: "The count of the agent pool",
              args: { name: "count" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the Agent Pool to complete action and return immediately after queuing the request",
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
      name: "artifact-streaming",
      description:
        "Manage artifact streaming for any repositories or supported images in an ACR",
      subcommands: [
        {
          name: "create",
          description:
            "Create a referrers streaming artifact for a specific image in an ACR",
          options: [
            {
              name: ["--image", "-t"],
              description:
                "The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
              args: { name: "image" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--no-wait",
              description:
                "Do not wait for the run to complete and return immediately after queuing the run",
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show if artifact streaming is enabled in a repository for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--repository",
              description: "The name of the repository",
              args: { name: "repository" },
              isRequired: true,
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Enable or disable auto-creation of streaming artifacts for newly pushed images under a given registry",
          options: [
            {
              name: "--enable-streaming",
              description:
                "Indicates whether artifact streaming is enabled for a repository",
              args: {
                name: "enable-streaming",
                suggestions: ["false", "true"],
                isOptional: true,
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--repository",
              description: "The name of the repository",
              args: { name: "repository" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "operation",
          description:
            "Manage the streaming artifact creation operations for ACR",
          subcommands: [
            {
              name: "cancel",
              description:
                "Cancel the given streaming artifact operation for ACR",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--id",
                  description:
                    "The ID returned when creating a streaming artifact",
                  args: { name: "id" },
                },
                {
                  name: ["--image", "-t"],
                  description:
                    "The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
                  args: { name: "image" },
                },
                {
                  name: ["--password", "-p"],
                  description:
                    "The password used to log into a container registry",
                  args: { name: "password" },
                },
                {
                  name: "--repository",
                  description: "The name of the repository",
                  args: { name: "repository" },
                },
                {
                  name: "--suffix",
                  description:
                    "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
                  args: { name: "suffix" },
                },
                {
                  name: ["--username", "-u"],
                  description:
                    "The username used to log into a container registry",
                  args: { name: "username" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Check the operation status for artifact streaming in an ACR",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--id",
                  description:
                    "The ID returned when creating a streaming artifact",
                  args: { name: "id" },
                },
                {
                  name: ["--image", "-t"],
                  description:
                    "The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
                  args: { name: "image" },
                },
                {
                  name: ["--password", "-p"],
                  description:
                    "The password used to log into a container registry",
                  args: { name: "password" },
                },
                {
                  name: "--repository",
                  description: "The name of the repository",
                  args: { name: "repository" },
                },
                {
                  name: "--suffix",
                  description:
                    "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
                  args: { name: "suffix" },
                },
                {
                  name: ["--username", "-u"],
                  description:
                    "The username used to log into a container registry",
                  args: { name: "username" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "cache",
      description: "Manage cache rules in Azure Container Registries",
      subcommands: [
        {
          name: "create",
          description: "Create a cache rule",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the cache rule",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            {
              name: ["--source-repo", "-s"],
              description:
                "The full source repository path such as 'docker.io/library/ubuntu'",
              args: { name: "source-repo" },
              isRequired: true,
            },
            {
              name: ["--target-repo", "-t"],
              description: "The target repository namespace such as 'ubuntu'",
              args: { name: "target-repo" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--cred-set", "-c"],
              description: "The name of the credential set",
              args: { name: "cred-set" },
            },
            {
              name: "--identity",
              description:
                "User-assigned managed identity resource ID for ACR to authenticate with the upstream registry. Format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}",
              args: { name: "identity" },
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
          name: "delete",
          description: "Delete a cache rule",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the cache rule",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List the cache rules in an Azure Container Registry",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          description: "Show a cache rule",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the cache rule",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          description: "Update the credential set on a cache rule",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the cache rule",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
              name: ["--cred-set", "-c"],
              description: "The name of the credential set",
              args: { name: "cred-set" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--identity",
              description:
                "User-assigned managed identity resource ID for ACR to authenticate with the upstream registry. Format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}",
              args: { name: "identity" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: "--remove-cred-set",
              description:
                "Optional boolean indicating whether to remove the credential set from the cache rule. False by default",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
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
      name: "config",
      description: "Configure policies for Azure Container Registries",
      subcommands: [
        {
          name: "authentication-as-arm",
          description:
            "Manage 'Azure AD authenticate as ARM' policy for Azure Container Registries",
          subcommands: [
            {
              name: "show",
              description:
                "Show the configured 'Azure AD authenticate as ARM' policy for an Azure Container Registry",
              options: [
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
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
              description:
                "Update 'Azure AD authenticate as ARM' policy for an Azure Container Registry",
              options: [
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
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
                  name: "--status",
                  description:
                    "Indicate whether authentication-as-arm is enabled",
                  args: {
                    name: "status",
                    suggestions: ["disabled", "enabled"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "content-trust",
          description:
            "Manage content-trust policy for Azure Container Registries. This command group has been deprecated and will be removed in a future release. Learn more about the transition from Docker Content Trust to the Notary Project: https://aka.ms/acr/dctdeprecation",
          subcommands: [
            {
              name: "show",
              description:
                "Show the configured content-trust policy for an Azure Container Registry",
              options: [
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
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
              description:
                "Update content-trust policy for an Azure Container Registry",
              options: [
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
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
                  name: "--status",
                  description:
                    "Indicates whether content-trust is enabled. Only 'disabled' is allowed",
                  args: { name: "status", suggestions: ["disabled"] },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
          ],
        },
        {
          name: "retention",
          description: "Manage retention policy for Azure Container Registries",
          subcommands: [
            {
              name: "show",
              description:
                "Show the configured retention policy for an Azure Container Registry",
              options: [
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
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
              description:
                "Update retention policy for an Azure Container Registry",
              options: [
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
                  isRequired: true,
                },
                {
                  name: "--type",
                  description: "The type of retention policy",
                  args: { name: "type", suggestions: ["UntaggedManifests"] },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--days",
                  description:
                    'The number of days to retain an untagged manifest after which it gets purged (Range: 0 to 365). Value "0" will delete untagged manifests immediately',
                  args: { name: "days" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--status",
                  description: "Indicates whether retention policy is enabled",
                  args: {
                    name: "status",
                    suggestions: ["disabled", "enabled"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "soft-delete",
          description:
            "Manage soft-delete policy for Azure Container Registries",
          subcommands: [
            {
              name: "show",
              description:
                "Show the configured soft-delete policy for an Azure Container Registry",
              options: [
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Update soft-delete policy for an Azure Container Registry",
              options: [
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--days",
                  description:
                    "The number of days to retain a soft-deleted manifest or tag after which it gets purged (Range: 1 to 90). Default is 7",
                  args: { name: "days" },
                },
                {
                  name: "--status",
                  description:
                    "Indicates whether soft-delete policy is enabled",
                  args: {
                    name: "status",
                    suggestions: ["disabled", "enabled"],
                  },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "connected-registry",
      description:
        "Manage connected registry resources with Azure Container Registries",
      subcommands: [
        {
          name: "create",
          description:
            "Create a connected registry for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name for the connected registry. Name must be between 5 to 40 character long, start with a letter and contain only alphanumeric characters (including ‘_’ or ‘-’). Name must be unique under the Cloud ACR hierarchy",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The login server of the Cloud ACR registry. Must be the FQDN to support also Azure Stack",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--auth-type",
              description:
                "Authentication type used by the connected registry to sync with its parent. Defaults to SyncToken",
              args: {
                name: "auth-type",
                suggestions: ["ManagedIdentity", "SyncToken"],
              },
            },
            changeReference,
            {
              name: "--client-tokens",
              description:
                "Specify the client access to the repositories in the connected registry. It can be in the format [TOKEN_NAME01] [TOKEN_NAME02]",
              args: { name: "client-tokens", isVariadic: true },
            },
            {
              name: "--gc-enabled",
              description:
                "Indicate whether garbage collection is enabled. It is enabled by default",
              args: {
                name: "gc-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--gc-schedule",
              description:
                "Used to determine garbage collection schedule. Uses cron expression to determine the schedule. If not specified, garbage collection is set to run once a day",
              args: { name: "gc-schedule" },
            },
            {
              name: "--identity",
              description:
                "Resource ID of a user-assigned managed identity to authenticate the connected registry with its parent. Required when --auth-type is ManagedIdentity",
              args: { name: "identity" },
            },
            {
              name: "--log-level",
              description:
                "Set the log level for logging on the instance. Accepted log levels are Debug, Information, Warning, Error, and None",
              args: { name: "log-level" },
            },
            {
              name: ["--mode", "-m"],
              description:
                "Determine the access it will have when synchronized",
              args: { name: "mode", suggestions: ["ReadOnly", "ReadWrite"] },
            },
            {
              name: "--notifications",
              description:
                'List of artifact pattern for which notifications need to be generated. Use the format "--notifications [PATTERN1 PATTERN2 ...]"',
              args: { name: "notifications", isVariadic: true },
            },
            {
              name: ["--parent", "-p"],
              description: "The name of the parent connected registry",
              args: { name: "parent" },
            },
            {
              name: "--repository",
              description:
                "Specify the repositories that need to be sync to the connected registry. It can be in the format [REPO01] [REPO02]",
              args: { name: "repository", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--sync-message-ttl",
              description:
                "Determine how long the sync messages will be kept in the cloud. Uses ISO 8601 duration format",
              args: { name: "sync-message-ttl" },
            },
            {
              name: ["--sync-schedule", "-s"],
              description:
                "Optional parameter to define the sync schedule. Uses cron expression to determine the schedule. If not specified, the instance is considered always online and attempts to sync every minute",
              args: { name: "sync-schedule" },
            },
            {
              name: "--sync-token",
              description:
                "Specifies the sync token used to synchronize the connected registry with its parent. It most have only repo permissions and at least the actions required for its mode. It can include access for multiple repositories",
              args: { name: "sync-token" },
            },
            {
              name: ["--sync-window", "-w"],
              description:
                "Required parameter if --sync-schedule is present. Used to determine the schedule duration. Uses ISO 8601 duration format",
              args: { name: "sync-window" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "deactivate",
          description:
            "Deactivate a connected registry from Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name for the connected registry. Name must be between 5 to 40 character long, start with a letter and contain only alphanumeric characters (including ‘_’ or ‘-’). Name must be unique under the Cloud ACR hierarchy",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The login server of the Cloud ACR registry. Must be the FQDN to support also Azure Stack",
              args: { name: "registry" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a connected registry from Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name for the connected registry. Name must be between 5 to 40 character long, start with a letter and contain only alphanumeric characters (including ‘_’ or ‘-’). Name must be unique under the Cloud ACR hierarchy",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The login server of the Cloud ACR registry. Must be the FQDN to support also Azure Stack",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--cleanup",
              description:
                "Delete the associated sync token and scope map for a connected registry configured with SyncToken authentication. This option has no effect for a connected registry configured with ManagedIdentity authentication. The connected registry is still deleted, but the managed identity and role assignments are retained",
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
          name: "get-settings",
          description:
            "Retrieve information required to activate a connected registry, optionally generating SyncToken credentials",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name for the connected registry. Name must be between 5 to 40 character long, start with a letter and contain only alphanumeric characters (including ‘_’ or ‘-’). Name must be unique under the Cloud ACR hierarchy",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--parent-protocol",
              description:
                "Specify the protocol used to communicate with its parent",
              args: { name: "parent-protocol", suggestions: ["http", "https"] },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The login server of the Cloud ACR registry. Must be the FQDN to support also Azure Stack",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--generate-password",
              description:
                "Select which password you want to generate, and it is required to retrieve the password from the sync token. Not supported for a connected registry configured with ManagedIdentity authentication",
              args: { name: "generate-password", suggestions: ["1", "2"] },
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
          description:
            "List all the connected registries under the current parent registry",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The login server of the Cloud ACR registry. Must be the FQDN to support also Azure Stack",
              args: { name: "registry" },
              isRequired: true,
            },
            {
              name: "--no-children",
              description: "Used to remove all children from the list",
            },
            {
              name: ["--parent", "-p"],
              description: "The name of the parent connected registry",
              args: { name: "parent" },
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
          name: "list-client-tokens",
          description:
            "List all the client tokens associated to a specific connected registries",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name for the connected registry. Name must be between 5 to 40 character long, start with a letter and contain only alphanumeric characters (including ‘_’ or ‘-’). Name must be unique under the Cloud ACR hierarchy",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The login server of the Cloud ACR registry. Must be the FQDN to support also Azure Stack",
              args: { name: "registry" },
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
          name: "resync",
          description:
            "Trigger a manual resync between the connected registry and its parent",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name for the connected registry. Name must be between 5 to 40 character long, start with a letter and contain only alphanumeric characters (including ‘_’ or ‘-’). Name must be unique under the Cloud ACR hierarchy",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The login server of the Cloud ACR registry. Must be the FQDN to support also Azure Stack",
              args: { name: "registry" },
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
          name: "show",
          description: "Show connected registry details",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name for the connected registry. Name must be between 5 to 40 character long, start with a letter and contain only alphanumeric characters (including ‘_’ or ‘-’). Name must be unique under the Cloud ACR hierarchy",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The login server of the Cloud ACR registry. Must be the FQDN to support also Azure Stack",
              args: { name: "registry" },
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
          description:
            "Update a connected registry for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name for the connected registry. Name must be between 5 to 40 character long, start with a letter and contain only alphanumeric characters (including ‘_’ or ‘-’). Name must be unique under the Cloud ACR hierarchy",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The login server of the Cloud ACR registry. Must be the FQDN to support also Azure Stack",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--add-client-tokens",
              description:
                'Client tokens to be added. Use the format "--add-client-tokens [TOKEN_NAME1 TOKEN_NAME2 ...]" per token id',
              args: {
                name: "add-client-tokens",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--add-notifications",
              description:
                'List of artifact pattern to be added to notifications list. Use the format "--add-notifications [PATTERN1 PATTERN2 ...]"',
              args: {
                name: "add-notifications",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--auth-type",
              description:
                "Target authentication type. Only one-way migration from SyncToken to ManagedIdentity is supported",
              args: { name: "auth-type", suggestions: ["ManagedIdentity"] },
            },
            changeReference,
            {
              name: "--gc-enabled",
              description:
                "Indicate whether garbage collection is enabled. It is enabled by default",
              args: {
                name: "gc-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--gc-schedule",
              description:
                "Used to determine garbage collection schedule. Uses cron expression to determine the schedule. If not specified, garbage collection is set to run once a day",
              args: { name: "gc-schedule" },
            },
            {
              name: "--identity",
              description:
                "Resource ID of a user-assigned managed identity. Requires --auth-type ManagedIdentity",
              args: { name: "identity" },
            },
            {
              name: "--log-level",
              description:
                "Set the log level for logging on the instance. Accepted log levels are Debug, Information, Warning, Error, and None",
              args: { name: "log-level" },
            },
            {
              name: "--remove-client-tokens",
              description:
                'Client tokens to be removed. Use the format "--remove-client-tokens [TOKEN_NAME1 TOKEN_NAME2 ...]" per token id',
              args: {
                name: "remove-client-tokens",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--remove-notifications",
              description:
                'List of artifact pattern to be removed from notifications list. Use the format "--remove-notifications [PATTERN1 PATTERN2 ...]"',
              args: {
                name: "remove-notifications",
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
              name: "--sync-message-ttl",
              description:
                "Determine how long the sync messages will be kept in the cloud. Uses ISO 8601 duration format",
              args: { name: "sync-message-ttl" },
            },
            {
              name: ["--sync-schedule", "-s"],
              description:
                "Optional parameter to define the sync schedule. Uses cron expression to determine the schedule. If not specified, the instance is considered always online and attempts to sync every minute",
              args: { name: "sync-schedule" },
            },
            {
              name: ["--sync-window", "-w"],
              description:
                "Used to determine the schedule duration. Uses ISO 8601 duration format",
              args: { name: "sync-window" },
            },
          ],
        },
        {
          name: "permissions",
          description:
            "Manage the repository permissions across multiple connected registries. Only supported for connected registries configured with SyncToken authentication (output is derived from the sync-token scope map). Please see https://aka.ms/acr/connected-registry for more information",
          subcommands: [
            {
              name: "show",
              description:
                "Show the connected registry sync scope map information. Only supported for connected registries configured with SyncToken authentication",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name for the connected registry. Name must be between 5 to 40 character long, start with a letter and contain only alphanumeric characters (including ‘_’ or ‘-’). Name must be unique under the Cloud ACR hierarchy",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The login server of the Cloud ACR registry. Must be the FQDN to support also Azure Stack",
                  args: { name: "registry" },
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
              description:
                "Add and remove repository permissions across all the necessary connected registry sync scope maps. Only supported for connected registries configured with SyncToken authentication",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name for the connected registry. Name must be between 5 to 40 character long, start with a letter and contain only alphanumeric characters (including ‘_’ or ‘-’). Name must be unique under the Cloud ACR hierarchy",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The login server of the Cloud ACR registry. Must be the FQDN to support also Azure Stack",
                  args: { name: "registry" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Repository permissions to be added to the targeted connected registry and it's ancestors sync scope maps. Use the format \"--add [REPO1 REPO2 ...]\" per flag. Valid actions are ['content/delete', 'content/read', 'content/write', 'metadata/read', 'metadata/write']",
                  args: { name: "add", isOptional: true, isVariadic: true },
                },
                changeReference,
                {
                  name: "--remove",
                  description:
                    "Repository permissions to be removed from the targeted connected registry and it's succesors sync scope maps. Use the format \"--remove [REPO1 REPO2 ...]\" per flag. Valid actions are ['content/delete', 'content/read', 'content/write', 'metadata/read', 'metadata/write']",
                  args: { name: "remove", isOptional: true, isVariadic: true },
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
    },
    {
      name: "credential",
      description: "Manage login credentials for Azure Container Registries",
      subcommands: [
        {
          name: "renew",
          description:
            "Regenerate login credentials for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--password-name",
              description: "The name of password to regenerate",
              args: {
                name: "password-name",
                suggestions: ["password", "password2"],
              },
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
          name: "show",
          description:
            "Get the login credentials for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
      ],
    },
    {
      name: "credential-set",
      description: "Manage credential sets in Azure Container Registries",
      subcommands: [
        {
          name: "create",
          description: "Create a credential set",
          options: [
            {
              name: ["--login-server", "-l"],
              description:
                "The login server address of the upstream registry such as 'docker.io'",
              args: { name: "login-server" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the credential set",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--password-id", "-p"],
              description:
                "The Azure Key Vault secret ID of the secret containing the password to the upstream registry",
              args: { name: "password-id" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            {
              name: ["--username-id", "-u"],
              description:
                "The Azure Key Vault secret ID of the secret containing the username to the upstream registry",
              args: { name: "username-id" },
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
          name: "delete",
          description: "Delete a credential set",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the credential set",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List the credential sets in an Azure Container Registry",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          description: "Show a credential set",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the credential set",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          description:
            "Update the username or password Azure Key Vault secret ID on a credential set",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the credential set",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
            },
            {
              name: ["--password-id", "-p"],
              description:
                "The Azure Key Vault secret ID of the secret containing the password to the upstream registry",
              args: { name: "password-id" },
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
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: ["--username-id", "-u"],
              description:
                "The Azure Key Vault secret ID of the secret containing the username to the upstream registry",
              args: { name: "username-id" },
            },
          ],
        },
      ],
    },
    {
      name: "encryption",
      description:
        "Manage customer-managed encryption for a container registry",
      subcommands: [
        {
          name: "rotate-key",
          description:
            "Rotate the customer-managed encryption key for a container registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--identity",
              description:
                "Client id of managed identity, resource name or id of user assigned identity. Use '[system]' to refer to the system assigned identity",
              args: { name: "identity" },
            },
            {
              name: "--key-encryption-key",
              description:
                "Azure Key Vault or Managed HSM key URI. To enable automated rotation, provide a versionless key URI. For manual rotation, provide a versioned key URI",
              args: { name: "key-encryption-key" },
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
          description: "Show the container registry's encryption details",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
      ],
    },
    {
      name: "helm",
      description:
        'Manage helm charts for Azure Container Registries. In November 2020, Helm 2 reached end of life. Starting on March 30th, 2025 Azure Container Registry will no longer support Helm 2. Therefore, the legacy "Helm repositories" functionality will also be retired. We recommend that you transition to Helm 3 immediately. Starting January 21st, 2025 the CLI command az acr helm push was retired to prevent pushing new Helm charts to legacy Helm repositories. Starting March 30th, 2025 the CLI command group az acr helm was retired, ending all legacy Helm repository capabilities in Azure Container Registry. All Helm charts not stored as an OCI artifact was deleted from Azure Container Registry on March 30th, 2025. Learn how to find all Helm charts stored in a Helm repository here: az acr helm list. If the Helm chart you are using is listed then it is stored in a legacy Helm repository and is at risk of deletion. For more information on managing and deploying applications for Kubernetes, see https://aka.ms/acr/helm',
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a helm chart version in an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            { name: "--prov", description: "Only delete the provenance file" },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
            {
              name: "--version",
              description: "The helm chart version",
              args: { name: "version" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
          args: { name: "<CHART>", description: "The helm chart name" },
        },
        {
          name: "install-cli",
          description: "Download and install Helm command-line tool",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--client-version",
              description:
                'The target Helm CLI version. (Attention: Currently, Helm 3 does not work with "az acr helm" commands)',
              args: { name: "client-version" },
            },
            {
              name: "--install-location",
              description:
                "Path at which to install Helm CLI (Existing one at the same path will be overwritten)",
              args: { name: "install-location" },
            },
            {
              name: ["--yes", "-y"],
              description:
                "Agree to the license of Helm, and do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List all helm charts in an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "push",
          description:
            "Push a helm chart package to an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--force",
              description: "Overwrite the existing chart package",
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
          args: {
            name: "<CHART_PACKAGE>",
            description: "The helm chart package",
          },
        },
        {
          name: "show",
          description: "Describe a helm chart in an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
            {
              name: "--version",
              description: "The helm chart version",
              args: { name: "version" },
            },
          ],
          args: { name: "<CHART>", description: "The helm chart name" },
        },
        {
          name: "repo",
          description:
            "Manage helm chart repositories for Azure Container Registries",
          subcommands: [
            {
              name: "add",
              description:
                "Add a helm chart repository from an Azure Container Registry through the Helm CLI",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--password", "-p"],
                  description:
                    "The password used to log into a container registry",
                  args: { name: "password" },
                },
                {
                  name: "--suffix",
                  description:
                    "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
                  args: { name: "suffix" },
                },
                {
                  name: ["--username", "-u"],
                  description:
                    "The username used to log into a container registry",
                  args: { name: "username" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description:
        "Manage service (managed) identities for a container registry",
      subcommands: [
        {
          name: "assign",
          description: "Assign a managed identity to a container registry",
          options: [
            {
              name: "--identities",
              description:
                "Space-separated identities. Use '[system]' to refer to the system assigned identity",
              args: { name: "identities", isVariadic: true },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
          ],
        },
        {
          name: "remove",
          description: "Remove a managed identity from a container registry",
          options: [
            {
              name: "--identities",
              description:
                "Space-separated identities. Use '[system]' to refer to the system assigned identity",
              args: { name: "identities", isVariadic: true },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
          ],
        },
        {
          name: "show",
          description: "Show the container registry's identity details",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
      ],
    },
    {
      name: "manifest",
      description: "Manage artifact manifests in Azure Container Registries",
      subcommands: [
        {
          name: "delete",
          description: "Delete a manifest in an Azure Container Registry",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--name", "-n"],
              description:
                "The name of the artifact. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
              args: { name: "name" },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
          args: {
            name: "<MANIFEST_ID>",
            description:
              "A fully qualified manifest specifier such as 'myregistry.azurecr.io/hello-world:latest'",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "list",
          description:
            "List the manifests in a repository in an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the repository",
              args: { name: "name" },
            },
            {
              name: "--orderby",
              description:
                "Order the items in the results. Default to alphabetical order of names",
              args: { name: "orderby", suggestions: ["time_asc", "time_desc"] },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: "--top",
              description: "Limit the number of items in the results",
              args: { name: "top" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
          args: {
            name: "<REPO_ID>",
            description:
              "A fully qualified repository specifier such as 'myregistry.azurecr.io/hello-world'",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "list-deleted",
          description:
            "List the soft-deleted manifests in a repository in an Azure Container Registry",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--name", "-n"],
              description: "The name of the repository",
              args: { name: "name" },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
          args: {
            name: "<REPO_ID>",
            description:
              "A fully qualified repository specifier such as 'myregistry.azurecr.io/hello-world'",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "list-deleted-tags",
          description:
            "List the soft-deleted tags in a repository in an Azure Container Registry",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--name", "-n"],
              description:
                "The name of the repository. May include a tag in the format 'name:tag'",
              args: { name: "name" },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
          args: {
            name: "<PERM_REPO_ID>",
            description:
              "A fully qualified repository specifier such as 'myregistry.azurecr.io/hello-world'. May include a tag such as myregistry.azurecr.io/hello-world:latest",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "list-metadata",
          description:
            "List the metadata of the manifests in a repository in an Azure Container Registry",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--name", "-n"],
              description: "The name of the repository",
              args: { name: "name" },
            },
            {
              name: "--orderby",
              description:
                "Order the items in the results. Default to alphabetical order of names",
              args: { name: "orderby", suggestions: ["time_asc", "time_desc"] },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: "--top",
              description: "Limit the number of items in the results",
              args: { name: "top" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
          args: {
            name: "<REPO_ID>",
            description:
              "A fully qualified repository specifier such as 'myregistry.azurecr.io/hello-world'",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "list-referrers",
          description:
            "List the referrers to a manifest in an Azure Container Registry",
          options: [
            acquirePolicyToken,
            {
              name: "--artifact-type",
              description: "Filter referrers based on artifact type",
              args: { name: "artifact-type" },
            },
            changeReference,
            {
              name: ["--name", "-n"],
              description:
                "The name of the artifact. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
              args: { name: "name" },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--recursive",
              description: "Recursively include referrer artifacts",
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
          args: {
            name: "<MANIFEST_ID>",
            description:
              "A fully qualified manifest specifier such as 'myregistry.azurecr.io/hello-world:latest'",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "restore",
          description:
            "Restore a soft-deleted artifact and tag in an Azure Container Registry",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--digest", "-d"],
              description: "The digest of the manifest such as 'sha256@abc123'",
              args: { name: "digest" },
            },
            {
              name: ["--force", "-f"],
              description: "Overwrite the existing tag",
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the artifact. May include a tag in the format 'name:tag'",
              args: { name: "name" },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
          args: {
            name: "<MANIFEST_ID>",
            description:
              "A fully qualified manifest specifier such as 'myregistry.azurecr.io/hello-world:latest'",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "show",
          description: "Get a manifest in an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the artifact. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
              args: { name: "name" },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--raw",
              description: "Output the raw manifest text with no formatting",
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
          args: {
            name: "<MANIFEST_ID>",
            description:
              "A fully qualified manifest specifier such as 'myregistry.azurecr.io/hello-world:latest'",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "show-metadata",
          description:
            "Get the metadata of an artifact in an Azure Container Registry",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--name", "-n"],
              description:
                "The name of the artifact. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
              args: { name: "name" },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
          args: {
            name: "<MANIFEST_ID>",
            description:
              "A fully qualified manifest specifier such as 'myregistry.azurecr.io/hello-world:latest'",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "update-metadata",
          description:
            "Update the manifest metadata of an artifact in an Azure Container Registry",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--delete-enabled",
              description: "Indicate whether delete operation is allowed",
              args: {
                name: "delete-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--list-enabled",
              description:
                "Indicate whether this item shows in list operation results",
              args: {
                name: "list-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the artifact. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
              args: { name: "name" },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--read-enabled",
              description: "Indicate whether read operation is allowed",
              args: {
                name: "read-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
            {
              name: "--write-enabled",
              description:
                "Indicate whether write or delete operation is allowed",
              args: {
                name: "write-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
          args: {
            name: "<MANIFEST_ID>",
            description:
              "A fully qualified manifest specifier such as 'myregistry.azurecr.io/hello-world:latest'",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "network-rule",
      description: "Manage network rules for Azure Container Registries",
      subcommands: [
        {
          name: "add",
          description: "Add a network rule",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--ip-address",
              description: "IPv4/IPv6 address or CIDR range",
              args: { name: "ip-address" },
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
          description: "List network rules",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
          name: "remove",
          description: "Remove a network rule",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--ip-address",
              description: "IPv4/IPv6 address or CIDR range",
              args: { name: "ip-address" },
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
      name: "pack",
      description:
        "Manage Azure Container Registry Tasks that use Cloud Native Buildpacks. This command group has been deprecated and will be removed in a future release",
      subcommands: [
        {
          name: "build",
          description:
            "Queues a quick build task that builds an app and pushes it into an Azure Container Registry",
          options: [
            {
              name: ["--builder", "-b"],
              description: "The name and tag of a Buildpack builder image",
              args: { name: "builder" },
              isRequired: true,
            },
            {
              name: ["--image", "-t"],
              description:
                "The name and tag of the image using the format: '-t repo/image:tag'",
              args: { name: "image" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--agent-pool",
              description: "The name of the agent pool",
              args: { name: "agent-pool" },
            },
            {
              name: "--auth-mode",
              description: "Auth mode of the source registry",
              args: { name: "auth-mode", suggestions: ["Default", "None"] },
            },
            changeReference,
            {
              name: "--no-format",
              description:
                "Indicates whether the logs should be displayed in raw format",
            },
            {
              name: "--no-logs",
              description:
                "Do not show logs after successfully queuing the build",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the run to complete and return immediately after queuing the run",
            },
            {
              name: "--pack-image-tag",
              description:
                "The tag of the 'pack' runner image ('mcr.microsoft.com/oryx/pack')",
              args: { name: "pack-image-tag" },
            },
            {
              name: "--platform",
              description:
                "The platform where build/task is run, Eg, 'windows' and 'linux'. When it's used in build commands, it also can be specified in 'os/arch/variant' format for the resulting image. Eg, linux/arm/v7. The 'arch' and 'variant' parts are optional",
              args: { name: "platform" },
            },
            {
              name: "--pull",
              description: "Pull the latest builder and run images before use",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--timeout",
              description: "The timeout in seconds",
              args: { name: "timeout" },
            },
          ],
          args: {
            name: "<SOURCE_LOCATION>",
            description:
              "The local source code directory path (e.g., './src'), or the URL to a git repository (e.g., 'https://github.com/Azure-Samples/acr-build-helloworld-node.git') or a remote tarball (e.g., 'http://server/context.tar.gz'), or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag')",
          },
        },
      ],
    },
    {
      name: "private-endpoint-connection",
      description: "Manage container registry private endpoint connections",
      subcommands: [
        {
          name: "approve",
          description:
            "Approve a private endpoint connection request for a container registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry-name", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--description",
              description:
                "Approval description. For example, the reason for approval",
              args: { name: "description" },
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
          name: "delete",
          description:
            "Delete a private endpoint connection request for a container registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry-name", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry-name" },
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
            "List all private endpoint connections to a container registry",
          options: [
            {
              name: ["--registry-name", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry-name" },
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
          name: "reject",
          description:
            "Reject a private endpoint connection request for a container registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry-name", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--description",
              description:
                "Rejection description. For example, the reason for rejection",
              args: { name: "description" },
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
            "Show details of a container registry's private endpoint connection",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry-name", "-r"],
              description:
                "The name of the container registry. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry-name" },
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
      ],
    },
    {
      name: "private-link-resource",
      description: "Manage registry private link resources",
      subcommands: [
        {
          name: "list",
          description:
            "List the private link resources supported for a registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
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
      ],
    },
    {
      name: "replication",
      description:
        "Manage geo-replicated regions of Azure Container Registries",
      subcommands: [
        {
          name: "create",
          description:
            "Create a replicated region for an Azure Container Registry",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--global-endpoint-routing",
              description:
                "Allow routing to this replication via the registry global endpoint. If disabled, requests to the global endpoint will not be routed to the replica. Data syncing to the replica will continue regardless of the global endpoint routing status. Default: true",
              args: {
                name: "global-endpoint-routing",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the replication. Default to the location name",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--zone-redundancy",
              description:
                "Indicates whether or not zone redundancy should be enabled for this registry or replication. For more information, such as supported locations, please visit https://aka.ms/acr/az. Zone-redundancy cannot be updated. Defaults to 'Disabled'",
              args: {
                name: "zone-redundancy",
                suggestions: ["Disabled", "Enabled"],
              },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a replicated region from an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the replication",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
            "List all of the regions for a geo-replicated Azure Container Registry",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          description: "Get the details of a replicated region",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the replication",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          description: "Updates a replication",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the replication",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
            },
            {
              name: "--global-endpoint-routing",
              description:
                "Allow routing to this replication via the registry global endpoint. If disabled, requests to the global endpoint will not be routed to the replica. Data syncing to the replica will continue regardless of the global endpoint routing status",
              args: {
                name: "global-endpoint-routing",
                suggestions: ["false", "true"],
                isOptional: true,
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
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
          ],
        },
      ],
    },
    {
      name: "repository",
      description:
        "Manage repositories (image names) for Azure Container Registries",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a repository or image in an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--image", "-t"],
              description:
                "The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
              args: { name: "image" },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--repository",
              description: "The name of the repository",
              args: { name: "repository" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List repositories in an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: "--top",
              description: "Limit the number of items in the results",
              args: { name: "top" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "list-deleted",
          description:
            "List soft-deleted repositories in an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the attributes of a repository or image in an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--image", "-t"],
              description:
                "The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
              args: { name: "image" },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--repository",
              description: "The name of the repository",
              args: { name: "repository" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "show-tags",
          description:
            "Show tags for a repository in an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--repository",
              description: "The name of the repository",
              args: { name: "repository" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            { name: "--detail", description: "Show detailed information" },
            {
              name: "--orderby",
              description:
                "Order the items in the results. Default to alphabetical order of names",
              args: { name: "orderby", suggestions: ["time_asc", "time_desc"] },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: "--top",
              description: "Limit the number of items in the results",
              args: { name: "top" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "untag",
          description: "Untag an image in an Azure Container Registry",
          options: [
            {
              name: ["--image", "-t"],
              description:
                "The name of the image. May include a tag in the format 'name:tag'",
              args: { name: "image" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the attributes of a repository or image in an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--delete-enabled",
              description: "Indicates whether delete operation is allowed",
              args: {
                name: "delete-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--image", "-t"],
              description:
                "The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
              args: { name: "image" },
            },
            {
              name: "--list-enabled",
              description:
                "Indicates whether this item shows in list operation results",
              args: {
                name: "list-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--password", "-p"],
              description: "The password used to log into a container registry",
              args: { name: "password" },
            },
            {
              name: "--read-enabled",
              description: "Indicates whether read operation is allowed",
              args: {
                name: "read-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--repository",
              description: "The name of the repository",
              args: { name: "repository" },
            },
            {
              name: "--suffix",
              description:
                "The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource",
              args: { name: "suffix" },
            },
            {
              name: ["--username", "-u"],
              description: "The username used to log into a container registry",
              args: { name: "username" },
            },
            {
              name: "--write-enabled",
              description:
                "Indicates whether write or delete operation is allowed",
              args: {
                name: "write-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "scope-map",
      description: "Manage scope access maps for Azure Container Registries",
      subcommands: [
        {
          name: "create",
          description: "Create a scope map for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the scope map",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--description",
              description:
                "Description for the scope map. Maximum 256 characters are allowed",
              args: { name: "description" },
            },
            {
              name: "--gateway",
              description:
                "Gateway permissions. Use the format \"--gateway GATEWAY [ACTION1 ACTION2 ...]\" per flag. Valid actions are ['config/read', 'config/write', 'message/read', 'message/write']",
              args: { name: "gateway", isVariadic: true },
            },
            {
              name: "--repository",
              description:
                "Repository permissions. Use the format \"--repository REPO [ACTION1 ACTION2 ...]\" per flag. Valid actions are ['content/delete', 'content/read', 'content/write', 'metadata/read', 'metadata/write']",
              args: { name: "repository", isVariadic: true },
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
          name: "delete",
          description: "Delete a scope map for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the scope map",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List all scope maps for an Azure Container Registry",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
            "Show details and attributes of a scope map for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the scope map",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          description: "Update a scope map for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the scope map",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--add-gateway",
              description:
                "Gateway permissions to be added. Use the format \"--add-gateway GATEWAY [ACTION1 ACTION2 ...]\" per flag. Valid actions are ['config/read', 'config/write', 'message/read', 'message/write']",
              args: { name: "add-gateway", isVariadic: true },
            },
            {
              name: "--add-repository",
              description:
                "Repository permissions to be added. Use the format \"--add-repository REPO [ACTION1 ACTION2 ...]\" per flag. Valid actions are ['content/delete', 'content/read', 'content/write', 'metadata/read', 'metadata/write']",
              args: { name: "add-repository", isVariadic: true },
            },
            changeReference,
            {
              name: "--description",
              description:
                "Description for the scope map. Maximum 256 characters are allowed",
              args: { name: "description" },
            },
            {
              name: "--remove-gateway",
              description:
                "Gateway permissions to be removed. Use the format \"--remove-gateway GATEWAY [ACTION1 ACTION2 ...]\" per flag. Valid actions are ['config/read', 'config/write', 'message/read', 'message/write']",
              args: { name: "remove-gateway", isVariadic: true },
            },
            {
              name: "--remove-repository",
              description:
                "Repository permissions to be removed. Use the format \"--remove-repository REPO [ACTION1 ACTION2 ...]\" per flag. Valid actions are ['content/delete', 'content/read', 'content/write', 'metadata/read', 'metadata/write']",
              args: { name: "remove-repository", isVariadic: true },
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
      name: "task",
      description:
        "Manage a collection of steps for building, testing and OS & Framework patching container images using Azure Container Registries",
      subcommands: [
        {
          name: "cancel-run",
          description: "Cancel a specified run of an Azure Container Registry",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            {
              name: "--run-id",
              description: "The unique run identifier",
              args: { name: "run-id" },
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
          name: "create",
          description:
            "Create a series of steps for building, testing and OS & Framework patching containers. Tasks support triggers from git commits and base image updates",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the task",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--agent-pool",
              description: "The name of the agent pool",
              args: { name: "agent-pool" },
            },
            {
              name: "--arg",
              description:
                "Build argument in '--arg name[=value]' format. Multiples are supported by passing '--arg name[=value]' multiple times. IMPORTANT: This parameter should not include passwords, access tokens, or sensitive information of any kind. This parameter value will be visible to the ACR team for debugging purposes",
              args: { name: "arg" },
            },
            {
              name: "--assign-identity",
              description:
                "Assign managed identities to the task. Use '[system]' to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity. Please see https://aka.ms/acr/tasks/task-create-managed-identity for more information",
              args: {
                name: "assign-identity",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--auth-mode",
              description: "Auth mode of the source registry",
              args: { name: "auth-mode", suggestions: ["Default", "None"] },
            },
            {
              name: "--base-image-trigger-enabled",
              description:
                "Indicates whether the base image trigger is enabled",
              args: {
                name: "base-image-trigger-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--base-image-trigger-name",
              description: "The name of the base image trigger",
              args: { name: "base-image-trigger-name" },
            },
            {
              name: "--base-image-trigger-type",
              description:
                "The type of the auto trigger for base image dependency updates",
              args: {
                name: "base-image-trigger-type",
                suggestions: ["All", "Runtime"],
              },
            },
            changeReference,
            {
              name: "--cmd",
              description:
                "Commands to execute. This also supports additional docker run parameters (https://docs.docker.com/engine/reference/commandline/run/) or even other docker commands (https://docs.docker.com/engine/reference/commandline/docker/)",
              args: { name: "cmd" },
            },
            {
              name: "--commit-trigger-enabled",
              description:
                "Indicates whether the source control commit trigger is enabled",
              args: {
                name: "commit-trigger-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--context", "-c"],
              description:
                "The full URL to the source code repository (Requires '.git' suffix for a github repo) or a remote tarball (e.g., 'http://server/context.tar.gz'), or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag'). If '/dev/null' is specified, the value will be set to None and ignored. This is a required argument if the task is not a system task",
              args: { name: "context" },
            },
            {
              name: "--cpu",
              description:
                "The CPU configuration in terms of number of cores required for the run",
              args: { name: "cpu" },
            },
            {
              name: ["--file", "-f"],
              description:
                "Relative path of the the task/docker file to the source code root folder. Task files must be suffixed with '.yaml' or piped from the standard input using '-'",
              args: { name: "file" },
            },
            {
              name: "--git-access-token",
              description:
                "The access token used to access the source control provider",
              args: { name: "git-access-token" },
            },
            {
              name: ["--image", "-t"],
              description:
                "The name and tag of the image using the format: '-t repo/image:tag'. Multiple tags are supported by passing -t multiple times",
              args: { name: "image" },
            },
            {
              name: "--is-system-task",
              description:
                "Indicates whether the task resource is a system task. The name of the task must be 'quicktask'. Only applicable to CMK enabled registry",
            },
            {
              name: "--log-template",
              description:
                "The repository and tag template for run log artifact using the format: 'log/repo:tag' (e.g., 'acr/logs:{{.Run.ID}}'). Only applicable to CMK enabled registry",
              args: { name: "log-template" },
            },
            {
              name: "--no-cache",
              description: "Indicates whether the image cache is enabled",
              args: {
                name: "no-cache",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--no-push",
              description:
                "Indicates whether the image built should be pushed to the registry",
              args: {
                name: "no-push",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--platform",
              description:
                "The platform where build/task is run, Eg, 'windows' and 'linux'. When it's used in build commands, it also can be specified in 'os/arch/variant' format for the resulting image. Eg, linux/arm/v7. The 'arch' and 'variant' parts are optional",
              args: { name: "platform" },
            },
            {
              name: "--pull-request-trigger-enabled",
              description:
                "Indicates whether the source control pull request trigger is enabled. The trigger is disabled by default",
              args: {
                name: "pull-request-trigger-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--schedule",
              description:
                "Schedule for a timer trigger represented as a cron expression. An optional trigger name can be specified using --schedule name:schedule format. Multiples supported by passing --schedule multiple times",
              args: { name: "schedule" },
            },
            {
              name: "--secret-arg",
              description:
                "Secret build argument in '--secret-arg name[=value]' format. Multiples are supported by passing '--secret-arg name[=value]' multiple times. This parameter value is not surfaced to the ACR team and is more suitable for sensitive information",
              args: { name: "secret-arg" },
            },
            {
              name: "--set",
              description:
                "Task value in '--set name[=value]' format. Multiples supported by passing --set multiple times",
              args: { name: "set" },
            },
            {
              name: "--set-secret",
              description:
                "Secret task value in '--set-secret name[=value]' format. Multiples supported by passing --set-secret multiple times",
              args: { name: "set-secret" },
            },
            {
              name: "--source-acr-auth-id",
              description:
                "Assign the managed identity used for source registry login. Use '[system]' to refer to the system-assigned identity or a resource ID to refer to a user-assigned managed identity",
              args: { name: "source-acr-auth-id" },
            },
            {
              name: "--source-trigger-name",
              description: "The name of the source trigger",
              args: { name: "source-trigger-name" },
            },
            {
              name: "--status",
              description: "The current status of task",
              args: { name: "status", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: "--target",
              description: "The name of the target build stage",
              args: { name: "target" },
            },
            {
              name: "--timeout",
              description: "The timeout in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--update-trigger-endpoint",
              description:
                "The full URL of the endpoint to receive base image update trigger notifications",
              args: { name: "update-trigger-endpoint" },
            },
            {
              name: "--update-trigger-payload-type",
              description:
                "Indicates whether to include metadata about the base image trigger in the payload alongwith the update trigger token, when a notification is sent",
              args: {
                name: "update-trigger-payload-type",
                suggestions: ["Default", "Token"],
              },
            },
            {
              name: "--values",
              description:
                "The task values/parameters file path relative to the source context",
              args: { name: "values" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a task from an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the task",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List the tasks for an Azure Container Registry",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          name: "list-runs",
          description:
            "List all of the executed runs for an Azure Container Registry, with the ability to filter by a specific Task",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--image", "-t"],
              description:
                "The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
              args: { name: "image" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the task",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--run-status",
              description: "The current status of run",
              args: {
                name: "run-status",
                suggestions: [
                  "Canceled",
                  "Error",
                  "Failed",
                  "Queued",
                  "Running",
                  "Started",
                  "Succeeded",
                  "Timeout",
                ],
              },
            },
            {
              name: "--top",
              description: "Limit the number of latest runs in the results",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "logs",
          description:
            "Show logs for a particular run. If no run-id is supplied, show logs for the last created run",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: ["--image", "-t"],
              description:
                "The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'",
              args: { name: "image" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the task",
              args: { name: "name" },
            },
            {
              name: "--no-format",
              description:
                "Indicates whether the logs should be displayed in raw format",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--run-id",
              description: "The unique run identifier",
              args: { name: "run-id" },
            },
          ],
        },
        {
          name: "run",
          description:
            "Manually trigger a task that might otherwise be waiting for git commits or base image update triggers",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the task",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--agent-pool",
              description: "The name of the agent pool",
              args: { name: "agent-pool" },
            },
            {
              name: "--arg",
              description:
                "Build argument in '--arg name[=value]' format. Multiples are supported by passing '--arg name[=value]' multiple times. IMPORTANT: This parameter should not include passwords, access tokens, or sensitive information of any kind. This parameter value will be visible to the ACR team for debugging purposes",
              args: { name: "arg" },
            },
            changeReference,
            {
              name: ["--context", "-c"],
              description:
                "The full URL to the source code repository (Requires '.git' suffix for a github repo) or a remote tarball (e.g., 'http://server/context.tar.gz'), or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag'). If '/dev/null' is specified, the value will be set to None and ignored. This is a required argument if the task is not a system task",
              args: { name: "context" },
            },
            {
              name: ["--file", "-f"],
              description:
                "Relative path of the the task/docker file to the source code root folder. Task files must be suffixed with '.yaml' or piped from the standard input using '-'",
              args: { name: "file" },
            },
            {
              name: "--log-template",
              description:
                "The repository and tag template for run log artifact using the format: 'log/repo:tag' (e.g., 'acr/logs:{{.Run.ID}}'). Only applicable to CMK enabled registry",
              args: { name: "log-template" },
            },
            {
              name: "--no-format",
              description:
                "Indicates whether the logs should be displayed in raw format",
            },
            {
              name: "--no-logs",
              description:
                "Do not show logs after successfully queuing the build",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the run to complete and return immediately after queuing the run",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret-arg",
              description:
                "Secret build argument in '--secret-arg name[=value]' format. Multiples are supported by passing '--secret-arg name[=value]' multiple times. This parameter value is not surfaced to the ACR team and is more suitable for sensitive information",
              args: { name: "secret-arg" },
            },
            {
              name: "--set",
              description:
                "Task value in '--set name[=value]' format. Multiples supported by passing --set multiple times",
              args: { name: "set" },
            },
            {
              name: "--set-secret",
              description:
                "Secret task value in '--set-secret name[=value]' format. Multiples supported by passing --set-secret multiple times",
              args: { name: "set-secret" },
            },
            {
              name: "--target",
              description: "The name of the target build stage",
              args: { name: "target" },
            },
            {
              name: "--update-trigger-token",
              description:
                "The payload that will be passed back alongwith the base image trigger notification",
              args: { name: "update-trigger-token" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the properties of a named task for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the task",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--with-secure-properties",
              description:
                "Indicates whether the secure properties of a task should be returned",
            },
          ],
        },
        {
          name: "show-run",
          description:
            "Get the properties of a specified run of an Azure Container Registry Task",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            {
              name: "--run-id",
              description: "The unique run identifier",
              args: { name: "run-id" },
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
          name: "update",
          description: "Update a task for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the task",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--agent-pool",
              description: "The name of the agent pool",
              args: { name: "agent-pool" },
            },
            {
              name: "--arg",
              description:
                "Build argument in '--arg name[=value]' format. Multiples are supported by passing '--arg name[=value]' multiple times. IMPORTANT: This parameter should not include passwords, access tokens, or sensitive information of any kind. This parameter value will be visible to the ACR team for debugging purposes",
              args: { name: "arg" },
            },
            {
              name: "--auth-mode",
              description: "Auth mode of the source registry",
              args: { name: "auth-mode", suggestions: ["Default", "None"] },
            },
            {
              name: "--base-image-trigger-enabled",
              description:
                "Indicates whether the base image trigger is enabled",
              args: {
                name: "base-image-trigger-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--base-image-trigger-type",
              description:
                "The type of the auto trigger for base image dependency updates",
              args: {
                name: "base-image-trigger-type",
                suggestions: ["All", "Runtime"],
              },
            },
            changeReference,
            {
              name: "--cmd",
              description:
                "Commands to execute. This also supports additional docker run parameters (https://docs.docker.com/engine/reference/commandline/run/) or even other docker commands (https://docs.docker.com/engine/reference/commandline/docker/)",
              args: { name: "cmd" },
            },
            {
              name: "--commit-trigger-enabled",
              description:
                "Indicates whether the source control commit trigger is enabled",
              args: {
                name: "commit-trigger-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--context", "-c"],
              description:
                "The full URL to the source code repository (Requires '.git' suffix for a github repo) or a remote tarball (e.g., 'http://server/context.tar.gz'), or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag'). If '/dev/null' is specified, the value will be set to None and ignored. This is a required argument if the task is not a system task",
              args: { name: "context" },
            },
            {
              name: "--cpu",
              description:
                "The CPU configuration in terms of number of cores required for the run",
              args: { name: "cpu" },
            },
            {
              name: ["--file", "-f"],
              description:
                "Relative path of the the task/docker file to the source code root folder. Task files must be suffixed with '.yaml' or piped from the standard input using '-'",
              args: { name: "file" },
            },
            {
              name: "--git-access-token",
              description:
                "The access token used to access the source control provider",
              args: { name: "git-access-token" },
            },
            {
              name: ["--image", "-t"],
              description:
                "The name and tag of the image using the format: '-t repo/image:tag'. Multiple tags are supported by passing -t multiple times",
              args: { name: "image" },
            },
            {
              name: "--log-template",
              description:
                "The repository and tag template for run log artifact using the format: 'log/repo:tag' (e.g., 'acr/logs:{{.Run.ID}}'). Only applicable to CMK enabled registry",
              args: { name: "log-template" },
            },
            {
              name: "--no-cache",
              description: "Indicates whether the image cache is enabled",
              args: {
                name: "no-cache",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--no-push",
              description:
                "Indicates whether the image built should be pushed to the registry",
              args: {
                name: "no-push",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--platform",
              description:
                "The platform where build/task is run, Eg, 'windows' and 'linux'. When it's used in build commands, it also can be specified in 'os/arch/variant' format for the resulting image. Eg, linux/arm/v7. The 'arch' and 'variant' parts are optional",
              args: { name: "platform" },
            },
            {
              name: "--pull-request-trigger-enabled",
              description:
                "Indicates whether the source control pull request trigger is enabled. The trigger is disabled by default",
              args: {
                name: "pull-request-trigger-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret-arg",
              description:
                "Secret build argument in '--secret-arg name[=value]' format. Multiples are supported by passing '--secret-arg name[=value]' multiple times. This parameter value is not surfaced to the ACR team and is more suitable for sensitive information",
              args: { name: "secret-arg" },
            },
            {
              name: "--set",
              description:
                "Task value in '--set name[=value]' format. Multiples supported by passing --set multiple times",
              args: { name: "set" },
            },
            {
              name: "--set-secret",
              description:
                "Secret task value in '--set-secret name[=value]' format. Multiples supported by passing --set-secret multiple times",
              args: { name: "set-secret" },
            },
            {
              name: "--source-acr-auth-id",
              description:
                "Assign the managed identity used for source registry login. Use '[system]' to refer to the system-assigned identity or a resource ID to refer to a user-assigned managed identity",
              args: { name: "source-acr-auth-id" },
            },
            {
              name: "--status",
              description: "The current status of task",
              args: { name: "status", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: "--target",
              description: "The name of the target build stage",
              args: { name: "target" },
            },
            {
              name: "--timeout",
              description: "The timeout in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--update-trigger-endpoint",
              description:
                "The full URL of the endpoint to receive base image update trigger notifications",
              args: { name: "update-trigger-endpoint" },
            },
            {
              name: "--update-trigger-payload-type",
              description:
                "Indicates whether to include metadata about the base image trigger in the payload alongwith the update trigger token, when a notification is sent",
              args: {
                name: "update-trigger-payload-type",
                suggestions: ["Default", "Token"],
              },
            },
            {
              name: "--values",
              description:
                "The task values/parameters file path relative to the source context",
              args: { name: "values" },
            },
          ],
        },
        {
          name: "update-run",
          description:
            "Patch the run properties of an Azure Container Registry Task",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            {
              name: "--run-id",
              description: "The unique run identifier",
              args: { name: "run-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--no-archive",
              description: "Indicates whether the run should be archived",
              args: {
                name: "no-archive",
                suggestions: ["false", "true"],
                isOptional: true,
              },
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
          name: "credential",
          description:
            "Manage credentials for a task. Please see https://aka.ms/acr/tasks/cross-registry-authentication for more information",
          subcommands: [
            {
              name: "add",
              description: "Add a custom registry login credential to the task",
              options: [
                {
                  name: "--login-server",
                  description:
                    "The login server of the custom registry. For instance, 'myregistry.azurecr.io'",
                  args: { name: "login-server" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--password", "-p"],
                  description:
                    "The password to login to the custom registry. This can be plain text or a key vault secret URI",
                  args: { name: "password" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--use-identity",
                  description:
                    "The task managed identity used for the credential. Use '[system]' to refer to the system-assigned identity or a client id to refer to a user-assigned identity. Please see https://aka.ms/acr/tasks/cross-registry-authentication for more information",
                  args: { name: "use-identity" },
                },
                {
                  name: ["--username", "-u"],
                  description:
                    "The username to login to the custom registry. This can be plain text or a key vault secret URI",
                  args: { name: "username" },
                },
              ],
            },
            {
              name: "list",
              description: "List all the custom registry credentials for task",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
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
              name: "remove",
              description: "Remove credential for a task",
              options: [
                {
                  name: "--login-server",
                  description:
                    "The login server of the custom registry. For instance, 'myregistry.azurecr.io'",
                  args: { name: "login-server" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
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
              name: "update",
              description: "Update the registry login credential for a task",
              options: [
                {
                  name: "--login-server",
                  description:
                    "The login server of the custom registry. For instance, 'myregistry.azurecr.io'",
                  args: { name: "login-server" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--password", "-p"],
                  description:
                    "The password to login to the custom registry. This can be plain text or a key vault secret URI",
                  args: { name: "password" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--use-identity",
                  description:
                    "The task managed identity used for the credential. Use '[system]' to refer to the system-assigned identity or a client id to refer to a user-assigned identity. Please see https://aka.ms/acr/tasks/cross-registry-authentication for more information",
                  args: { name: "use-identity" },
                },
                {
                  name: ["--username", "-u"],
                  description:
                    "The username to login to the custom registry. This can be plain text or a key vault secret URI",
                  args: { name: "username" },
                },
              ],
            },
          ],
        },
        {
          name: "identity",
          description:
            "Managed Identities for Task. Please see https://aka.ms/acr/tasks/task-create-managed-identity for more information",
          subcommands: [
            {
              name: "assign",
              description: "Update the managed identity for a task",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--identities",
                  description:
                    "Assign managed identities to the task. Use '[system]' to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity",
                  args: {
                    name: "identities",
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
              ],
            },
            {
              name: "remove",
              description: "Remove managed identities for a task",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--identities",
                  description:
                    "Assign managed identities to the task. Use '[system]' to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity",
                  args: {
                    name: "identities",
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
              ],
            },
            {
              name: "show",
              description: "Display the managed identities for task",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
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
          ],
        },
        {
          name: "timer",
          description: "Manage timer triggers for a task",
          subcommands: [
            {
              name: "add",
              description: "Add a timer trigger to a task",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
                  isRequired: true,
                },
                {
                  name: "--schedule",
                  description:
                    "The schedule of the timer trigger represented as a cron expression",
                  args: { name: "schedule" },
                  isRequired: true,
                },
                {
                  name: "--timer-name",
                  description: "The name of the timer trigger",
                  args: { name: "timer-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--enabled",
                  description: "Indicates whether the timer trigger is enabled",
                  args: {
                    name: "enabled",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
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
              description: "List all timer triggers for a task",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
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
              name: "remove",
              description: "Remove a timer trigger from a task",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
                  isRequired: true,
                },
                {
                  name: "--timer-name",
                  description: "The name of the timer trigger",
                  args: { name: "timer-name" },
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
              name: "update",
              description: "Update the timer trigger for a task",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
                  isRequired: true,
                },
                {
                  name: "--timer-name",
                  description: "The name of the timer trigger",
                  args: { name: "timer-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--enabled",
                  description: "Indicates whether the timer trigger is enabled",
                  args: {
                    name: "enabled",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--schedule",
                  description:
                    "The schedule of the timer trigger represented as a cron expression",
                  args: { name: "schedule" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "taskrun",
      description: "Manage taskruns using Azure Container Registries",
      subcommands: [
        {
          name: "delete",
          description: "Delete a taskrun from an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the taskrun",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List the taskruns for an Azure Container Registry",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          name: "logs",
          description: "Show run logs for a particular taskrun",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the taskrun",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--no-format",
              description:
                "Indicates whether the logs should be displayed in raw format",
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
            "Get the properties of a named taskrun for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the taskrun",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
      ],
    },
    {
      name: "token",
      description: "Manage tokens for an Azure Container Registry",
      subcommands: [
        {
          name: "create",
          description:
            "Create a token associated with a scope map for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the token",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--expiration",
              description:
                "UTC time for which the credentials will be valid. In the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2025-12-31T12:59:59Z",
              args: { name: "expiration" },
            },
            {
              name: "--expiration-in-days",
              description:
                'Number of days for which the credentials will be valid. If not specified, the expiration will default to the max value "9999-12-31T23:59:59.999999+00:00"',
              args: { name: "expiration-in-days" },
            },
            {
              name: "--gateway",
              description:
                "Gateway permissions. Use the format \"--gateway GATEWAY [ACTION1 ACTION2 ...]\" per flag. Valid actions are ['config/read', 'config/write', 'message/read', 'message/write']",
              args: { name: "gateway", isVariadic: true },
            },
            {
              name: "--no-passwords",
              description:
                "Do not generate passwords during token creation. You can generate the passwords after the token is created by using az acr token credentials generate command",
              args: {
                name: "no-passwords",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--repository",
              description:
                "Repository permissions. Use the format \"--repository REPO [ACTION1 ACTION2 ...]\" per flag. Valid actions are ['content/delete', 'content/read', 'content/write', 'metadata/read', 'metadata/write']",
              args: { name: "repository", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope-map",
              description:
                'The name of the scope map with pre-configured repository permissions. Use "--repository" and/or "--gateway" if you would like CLI to configure one for you',
              args: { name: "scope-map" },
            },
            {
              name: "--status",
              description: "The status of the token",
              args: { name: "status", suggestions: ["disabled", "enabled"] },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a token for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the token",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List all tokens for an Azure Container Registry",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
            "Show details and attributes of a token for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the token",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          description:
            "Update a token (replace associated scope map) for an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the token",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
              name: "--scope-map",
              description:
                "The name of the scope map associated with the token. If not specified, running this command will disassociate the current scope map related to the token",
              args: { name: "scope-map" },
            },
            {
              name: "--status",
              description: "The status of the token",
              args: { name: "status", suggestions: ["disabled", "enabled"] },
            },
          ],
        },
        {
          name: "credential",
          description:
            "Manage credentials of a token for an Azure Container Registry",
          subcommands: [
            {
              name: "delete",
              description: "Delete a token credential",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the token",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--password1",
                  description:
                    "Flag indicating if first password should be deleted",
                },
                {
                  name: "--password2",
                  description:
                    "Flag indicating if second password should be deleted",
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
              name: "generate",
              description:
                "Generate or replace one or both passwords of a token for an Azure Container Registry. For using token and password to access a container registry, see https://aka.ms/acr/repo-permissions",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the token",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registry", "-r"],
                  description:
                    "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
                  args: { name: "registry" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--expiration",
                  description:
                    "UTC time for which the credentials will be valid. In the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2025-12-31T12:59:59Z",
                  args: { name: "expiration" },
                },
                {
                  name: "--expiration-in-days",
                  description:
                    'Number of days for which the credentials will be valid. If not specified, the expiration will default to the max value "9999-12-31T23:59:59.999999+00:00"',
                  args: { name: "expiration-in-days" },
                },
                {
                  name: "--password1",
                  description:
                    "Flag indicating if password1 should be generated",
                },
                {
                  name: "--password2",
                  description:
                    "Flag indicating if password2 should be generated",
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
    },
    {
      name: "webhook",
      description: "Manage webhooks for Azure Container Registries",
      subcommands: [
        {
          name: "create",
          description: "Create a webhook for an Azure Container Registry",
          options: [
            {
              name: "--actions",
              description:
                "Space-separated list of actions that trigger the webhook to post notifications",
              args: {
                name: "actions",
                suggestions: [
                  "chart_delete",
                  "chart_push",
                  "delete",
                  "push",
                  "quarantine",
                ],
                isVariadic: true,
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the webhook",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            {
              name: "--uri",
              description:
                "The service URI for the webhook to post notifications",
              args: { name: "uri" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--headers",
              description:
                "Space-separated custom headers in 'key[=value]' format that will be added to the webhook notifications. Use '' to clear existing headers",
              args: { name: "headers", isVariadic: true },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
                "The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means events for all repositories",
              args: { name: "scope" },
            },
            {
              name: "--status",
              description: "Indicates whether the webhook is enabled",
              args: { name: "status", suggestions: ["disabled", "enabled"] },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a webhook from an Azure Container Registry",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the webhook",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          name: "get-config",
          description: "Get the service URI and custom headers for the webhook",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the webhook",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
            "List all of the webhooks for an Azure Container Registry",
          options: [
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          name: "list-events",
          description: "List recent events for a webhook",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the webhook",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          name: "ping",
          description: "Trigger a ping event for a webhook",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the webhook",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          name: "show",
          description: "Get the details of a webhook",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the webhook",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
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
          description: "Update a webhook",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the webhook",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--registry", "-r"],
              description:
                "The name of the container registry. It should be specified in lower case. You can configure the default registry name using az configure --defaults acr=<registry name>",
              args: { name: "registry" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--actions",
              description:
                "Space-separated list of actions that trigger the webhook to post notifications",
              args: {
                name: "actions",
                suggestions: [
                  "chart_delete",
                  "chart_push",
                  "delete",
                  "push",
                  "quarantine",
                ],
                isVariadic: true,
              },
            },
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
            },
            {
              name: "--headers",
              description:
                "Space-separated custom headers in 'key[=value]' format that will be added to the webhook notifications. Use '' to clear existing headers",
              args: { name: "headers", isVariadic: true },
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
              description:
                "The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means events for all repositories",
              args: { name: "scope" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--status",
              description: "Indicates whether the webhook is enabled",
              args: { name: "status", suggestions: ["disabled", "enabled"] },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--uri",
              description:
                "The service URI for the webhook to post notifications",
              args: { name: "uri" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
