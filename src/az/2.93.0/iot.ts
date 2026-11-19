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
  name: "iot",
  description: "Manage Internet of Things (IoT) assets",
  subcommands: [
    {
      name: "central",
      description: "Manage IoT Central resources",
      subcommands: [
        {
          name: "app",
          description: "Manage IoT Central applications",
          subcommands: [
            {
              name: "create",
              description: "Create an IoT Central application",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Give your IoT Central app a unique name so you can find it later.This will be used as the resource name in the Azure portal and CLI.Avoid special characters - instead, use lower case letters (a-z), numbers (0-9), and dashes (-)",
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
                  name: ["--subdomain", "-s"],
                  description:
                    "Enter a unique URL. Your app will be accessible via https://{subdomain}.azureiotcentral.com/. Avoid special characters - instead, use lower case letters (a-z), numbers (0-9), and dashes (-)",
                  args: { name: "subdomain" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--display-name", "-d"],
                  description:
                    "Custom display name for the IoT Central app. This will be used in the IoT Central application manager to help you identify your app. Default value is the resource name",
                  args: { name: "display-name" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Where your app's info and resources are stored. We will default to the location of the target resource group. See documentation for a full list of supported locations",
                  args: { name: "location" },
                },
                {
                  name: "--mi-system-assigned",
                  description:
                    "Provide this flag to use system assigned identity",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--sku", "-p"],
                  description: "Pricing plan for IoT Central application",
                  args: { name: "sku", suggestions: ["ST0", "ST1", "ST2"] },
                },
                {
                  name: ["--template", "-t"],
                  description:
                    'IoT Central application template name. Default is "Custom application". See documentation for a list of available templates',
                  args: { name: "template" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an IoT Central application",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "IoT Central application name",
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List IoT Central applications",
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
              name: "show",
              description: "Get the details of an IoT Central application",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "IoT Central application name",
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
              description: "Update metadata for an IoT Central application",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "IoT Central application name",
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
                changeReference,
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
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
            {
              name: "identity",
              description: "Manage IoT Central application identities",
              subcommands: [
                {
                  name: "assign",
                  description:
                    "Assign managed identities to an IoT Central application",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "IoT Central application name",
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
                      name: "--system-assigned",
                      description:
                        "Provide this flag to refer to the system-assigned identity",
                    },
                  ],
                },
                {
                  name: "remove",
                  description:
                    "Remove managed identities from an IoT Central application",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "IoT Central application name",
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
                      name: "--system-assigned",
                      description:
                        "Provide this flag to refer to the system-assigned identity",
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show the identity properties of an IoT Central application",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "IoT Central application name",
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
              name: "private-endpoint-connection",
              description:
                "Manage private endpoint connection of IoT Central application",
              subcommands: [
                {
                  name: "approve",
                  description:
                    "Approve a private endpoint connection request for an IoT Central application",
                  options: [
                    {
                      name: "--account-name",
                      description:
                        "Name of the IoT Central application. Required if --id is not specified",
                      args: { name: "account-name" },
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--description",
                      description: "Comments for the approve operation",
                      args: { name: "description" },
                    },
                    {
                      name: "--id",
                      description:
                        "The ID of the private endpoint connection associated with the IoT Central application. If --account-name --resource-group/-g and --name/-n are specified, this should be omitted",
                      args: { name: "id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "The name of the private endpoint connection associated with IoT Central application. Required if --id is not specified",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "The resource group name of specified IoT Central application. Required if --id is not specified",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a private endpoint connection for an IoT Central application",
                  options: [
                    {
                      name: "--account-name",
                      description:
                        "Name of the IoT Central application. Required if --id is not specified",
                      args: { name: "account-name" },
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--id",
                      description:
                        "The ID of the private endpoint connection associated with the IoT Central application. If --account-name --resource-group/-g and --name/-n are specified, this should be omitted",
                      args: { name: "id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "The name of the private endpoint connection associated with IoT Central application. Required if --id is not specified",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "The resource group name of specified IoT Central application. Required if --id is not specified",
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
                    "List all of the private endpoint connections for an IoT Central application",
                  options: [
                    {
                      name: "--account-name",
                      description:
                        "Name of the IoT Central application. Required if --id is not specified",
                      args: { name: "account-name" },
                    },
                    {
                      name: "--id",
                      description: "ID of the resource",
                      args: { name: "id" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. If provided, --name must be provided too",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "reject",
                  description:
                    "Reject a private endpoint connection request for an IoT Central application",
                  options: [
                    {
                      name: "--account-name",
                      description:
                        "Name of the IoT Central application. Required if --id is not specified",
                      args: { name: "account-name" },
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--description",
                      description: "Comments for the reject operation",
                      args: { name: "description" },
                    },
                    {
                      name: "--id",
                      description:
                        "The ID of the private endpoint connection associated with the IoT Central application. If --account-name --resource-group/-g and --name/-n are specified, this should be omitted",
                      args: { name: "id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "The name of the private endpoint connection associated with IoT Central application. Required if --id is not specified",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "The resource group name of specified IoT Central application. Required if --id is not specified",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show details of a private endpoint connection request for an IoT Central application",
                  options: [
                    {
                      name: "--account-name",
                      description:
                        "Name of the IoT Central application. Required if --id is not specified",
                      args: { name: "account-name" },
                    },
                    {
                      name: "--id",
                      description:
                        "The ID of the private endpoint connection associated with the IoT Central application. If --account-name --resource-group/-g and --name/-n are specified, this should be omitted",
                      args: { name: "id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "The name of the private endpoint connection associated with IoT Central application. Required if --id is not specified",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "The resource group name of specified IoT Central application. Required if --id is not specified",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
            {
              name: "private-link-resource",
              description:
                "Manage an IoT Central application private link resources",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List all of the IoT Central application private link resources in the specified account",
                  options: [
                    {
                      name: "--id",
                      description: "ID of the resource",
                      args: { name: "id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "IoT Central application name",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. If provided, --name and --type must be provided too",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--type",
                      description:
                        "Type of the resource. If provided, --name and --resource-group must be provided too",
                      args: { name: "type" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show details of a private link resource in the specified IoT Central application",
                  options: [
                    {
                      name: "--group-id",
                      description:
                        "Name of the private link resource. If provided, --name and --type must be provided too",
                      args: { name: "group-id" },
                    },
                    {
                      name: "--id",
                      description: "ID of the resource",
                      args: { name: "id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the resource. If provided, --type and --resource-group must be provided too",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. If provided, --name and --type must be provided too",
                      args: { name: "resource-group" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "dps",
      description: "Manage Azure IoT Hub Device Provisioning Service",
      subcommands: [
        {
          name: "create",
          description:
            "Create an Azure IoT Hub Device Provisioning Service instance",
          options: [
            {
              name: ["--name", "-n"],
              description: "IoT Hub Device Provisioning Service name",
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
              name: ["--enforce-data-residency", "--edr"],
              description:
                "Enforce data residency for this IoT Hub Device Provisioning Service by disabling cross geo-pair disaster recovery. This property is immutable once set on the resource. Only available in select regions. Learn more at https://aka.ms/dpsdr",
              args: {
                name: "enforce-data-residency",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of your IoT Hub Device Provisioning Service. Default is the location of target resource group",
              args: { name: "location" },
            },
            {
              name: "--sku",
              description:
                "Pricing tier for the IoT Hub Device Provisioning Service",
              args: { name: "sku", suggestions: ["S1"] },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--unit",
              description: "Units in your IoT Hub Device Provisioning Service",
              args: { name: "unit" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete an Azure IoT Hub Device Provisioning Service instance",
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
              description: "IoT Hub Device Provisioning Service name",
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
          name: "list",
          description:
            "List Azure IoT Hub Device Provisioning Service instances",
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
          name: "show",
          description:
            "Get the details of an Azure IoT Hub Device Provisioning Service instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub Device Provisioning Service name",
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
          name: "update",
          description:
            "Update an Azure IoT Hub Device Provisioning Service instance",
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
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub Device Provisioning Service name",
              args: { name: "name" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
          name: "certificate",
          description:
            "Manage certificates for an Azure IoT Hub Device Provisioning Service instance",
          subcommands: [
            {
              name: "create",
              description:
                "Create/upload a certficate to an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "The path to the file containing the certificate",
                  args: { name: "path" },
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
                  name: ["--verified", "-v"],
                  description:
                    "A boolean indicating whether or not the certificate is verified",
                  args: {
                    name: "verified",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a certificate in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
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
              name: "generate-verification-code",
              description:
                "Generate a verification code for a certificate in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
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
                "List all certificates contained within an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
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
                "Show information about a particular certificate in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
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
                "Update a certificate in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "The path to the file containing the certificate",
                  args: { name: "path" },
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
                  name: ["--verified", "-v"],
                  description:
                    "A boolean indicating whether or not the certificate is verified",
                  args: {
                    name: "verified",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "verify",
              description:
                "Verify a certificate in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "The path to the file containing the certificate",
                  args: { name: "path" },
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
          ],
        },
        {
          name: "linked-hub",
          description:
            "Manage linked IoT Hubs in an Azure IoT Hub Device Provisioning Service instance",
          subcommands: [
            {
              name: "create",
              description:
                "Create a linked IoT hub in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--allocation-weight",
                  description: "Allocation weight of the IoT hub",
                  args: { name: "allocation-weight" },
                },
                {
                  name: "--apply-allocation-policy",
                  description:
                    "A boolean indicating whether to apply allocation policy to the IoT hub",
                  args: {
                    name: "apply-allocation-policy",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                changeReference,
                {
                  name: "--connection-string",
                  description:
                    "Connection string of the IoT hub. Required if hub name is not provided using --hub-name",
                  args: { name: "connection-string" },
                },
                {
                  name: ["--hub-name", "--hn"],
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: ["--hub-resource-group", "--hrg"],
                  description: "IoT Hub resource group name",
                  args: { name: "hub-resource-group" },
                },
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
            {
              name: "delete",
              description:
                "Update a linked IoT hub in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: "--linked-hub",
                  description: "Host name of linked IoT Hub",
                  args: { name: "linked-hub" },
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
            {
              name: "list",
              description:
                "List all linked IoT hubs in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
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
                "Show details of a linked IoT hub in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: "--linked-hub",
                  description: "Host name of linked IoT Hub",
                  args: { name: "linked-hub" },
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
                "Update a linked IoT hub in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: "--dps-name",
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: "--linked-hub",
                  description: "Host name of linked IoT Hub",
                  args: { name: "linked-hub" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--allocation-weight",
                  description: "Allocation weight of the IoT hub",
                  args: { name: "allocation-weight" },
                },
                {
                  name: "--apply-allocation-policy",
                  description:
                    "A boolean indicating whether to apply allocation policy to the Iot hub",
                  args: {
                    name: "apply-allocation-policy",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
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
          name: "policy",
          description:
            "Manage shared access policies for an Azure IoT Hub Device Provisioning Service instance",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new shared access policy in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--dps-name", "-n"],
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--policy-name", "--pn"],
                  description: "A friendly name for DPS access policy",
                  args: { name: "policy-name" },
                  isRequired: true,
                },
                {
                  name: ["--rights", "-r"],
                  description:
                    "Access rights for the IoT Hub Device Provisioning Service. Use space-separated list for multiple rights",
                  args: {
                    name: "rights",
                    suggestions: [
                      "DeviceConnect",
                      "EnrollmentRead",
                      "EnrollmentWrite",
                      "RegistrationStatusRead",
                      "RegistrationStatusWrite",
                      "ServiceConfig",
                    ],
                    isVariadic: true,
                  },
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
                  name: "--primary-key",
                  description:
                    "Primary SAS key value, if not provided it will be generated by the service",
                  args: { name: "primary-key" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secondary-key",
                  description:
                    "Secondary SAS key value, if not provided it will be generated by the service",
                  args: { name: "secondary-key" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a shared access policies in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--dps-name", "-n"],
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--policy-name", "--pn"],
                  description: "A friendly name for DPS access policy",
                  args: { name: "policy-name" },
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
            {
              name: "list",
              description:
                "List all shared access policies in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--dps-name", "-n"],
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
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
                "Show details of a shared access policies in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--dps-name", "-n"],
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--policy-name", "--pn"],
                  description: "A friendly name for DPS access policy",
                  args: { name: "policy-name" },
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
                "Update a shared access policy in an Azure IoT Hub Device Provisioning Service instance",
              options: [
                {
                  name: ["--dps-name", "-n"],
                  description: "IoT Hub Device Provisioning Service name",
                  args: { name: "dps-name" },
                  isRequired: true,
                },
                {
                  name: ["--policy-name", "--pn"],
                  description: "A friendly name for DPS access policy",
                  args: { name: "policy-name" },
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
                  name: "--primary-key",
                  description:
                    "Primary SAS key value. Set to empty string in order to regenerate a new primary key",
                  args: { name: "primary-key" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--rights", "-r"],
                  description:
                    "Access rights for the IoT Hub Device Provisioning Service. Use space-separated list for multiple rights",
                  args: {
                    name: "rights",
                    suggestions: [
                      "DeviceConnect",
                      "EnrollmentRead",
                      "EnrollmentWrite",
                      "RegistrationStatusRead",
                      "RegistrationStatusWrite",
                      "ServiceConfig",
                    ],
                    isVariadic: true,
                  },
                },
                {
                  name: "--secondary-key",
                  description:
                    "Secondary SAS key value. Set to empty string in order to regenerate a new secondary key",
                  args: { name: "secondary-key" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "hub",
      description: "Manage Azure IoT hubs",
      subcommands: [
        {
          name: "create",
          description: "Create an Azure IoT hub",
          options: [
            {
              name: ["--name", "-n"],
              description: "IoT Hub name",
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
              name: ["--c2d-max-delivery-count", "--cdd"],
              description:
                "The number of times the IoT hub will attempt to deliver a cloud-to-device message to a device, between 1 and 100",
              args: { name: "c2d-max-delivery-count" },
            },
            {
              name: ["--c2d-ttl", "--ct"],
              description:
                "The amount of time a message is available for the device to consume before it is expired by IoT Hub, between 1 and 48 hours",
              args: { name: "c2d-ttl" },
            },
            changeReference,
            {
              name: ["--disable-device-sas", "--dds"],
              description:
                "A boolean indicating whether or not to disable all device (including Edge devices but excluding modules) scoped SAS keys for authentication",
              args: {
                name: "disable-device-sas",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--disable-local-auth", "--dla"],
              description:
                "A boolean indicating whether or not to disable IoT hub scoped SAS keys for authentication",
              args: {
                name: "disable-local-auth",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--disable-module-sas", "--dms"],
              description:
                "A boolean indicating whether or not to disable module-scoped SAS keys for authentication",
              args: {
                name: "disable-module-sas",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--enforce-data-residency", "--edr"],
              description:
                "Enforce data residency for this IoT Hub by disabling cross-region disaster recovery. This property is immutable once set on the resource. Only available in select regions. Learn more at https://aka.ms/iothubdisabledr",
              args: {
                name: "enforce-data-residency",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--fileupload-storage-container-name", "--fc"],
              description:
                "The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified",
              args: { name: "fileupload-storage-container-name" },
            },
            {
              name: ["--fileupload-storage-connectionstring", "--fcs"],
              description:
                "The connection string for the Azure Storage account to which files are uploaded",
              args: { name: "fileupload-storage-connectionstring" },
            },
            {
              name: ["--feedback-max-delivery-count", "--fd"],
              description:
                "The number of times the IoT hub attempts to deliver a message on the feedback queue, between 1 and 100",
              args: { name: "feedback-max-delivery-count" },
            },
            {
              name: ["--feedback-lock-duration", "--fld"],
              description:
                "The lock duration for the feedback queue, between 5 and 300 seconds",
              args: { name: "feedback-lock-duration" },
            },
            {
              name: ["--feedback-ttl", "--ft"],
              description:
                "The period of time for which the IoT hub will maintain the feedback for expiration or delivery of cloud-to-device messages, between 1 and 48 hours",
              args: { name: "feedback-ttl" },
            },
            {
              name: ["--fileupload-notification-lock-duration", "--fnld"],
              description:
                "The lock duration for the file upload notifications queue, between 5 and 300 seconds",
              args: { name: "fileupload-notification-lock-duration" },
            },
            {
              name: ["--fileupload-notification-max-delivery-count", "--fnd"],
              description:
                "The number of times the IoT hub will attempt to deliver a file notification message, between 1 and 100",
              args: { name: "fileupload-notification-max-delivery-count" },
            },
            {
              name: ["--fileupload-notification-ttl", "--fnt"],
              description:
                "The amount of time a file upload notification is available for the service to consume before it is expired by IoT Hub, between 1 and 48 hours",
              args: { name: "fileupload-notification-ttl" },
            },
            {
              name: ["--fileupload-notifications", "--fn"],
              description:
                "A boolean indicating whether to log information about uploaded files to the messages/servicebound/filenotifications IoT Hub endpoint",
              args: {
                name: "fileupload-notifications",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--fileupload-sas-ttl", "--fst"],
              description:
                "The amount of time a SAS URI generated by IoT Hub is valid before it expires, between 1 and 24 hours",
              args: { name: "fileupload-sas-ttl" },
            },
            {
              name: ["--fileupload-storage-auth-type", "--fsa"],
              description:
                "The authentication type for the Azure Storage account to which files are uploaded",
              args: {
                name: "fileupload-storage-auth-type",
                suggestions: ["identityBased", "keyBased"],
              },
            },
            {
              name: ["--fileupload-storage-identity", "--fsi"],
              description:
                "The managed identity to use for file upload authentication. Use '[system]' to refer to the system-assigned managed identity or a resource ID to refer to a user-assigned managed identity",
              args: { name: "fileupload-storage-identity" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of your IoT Hub. Default is the location of target resource group",
              args: { name: "location" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Enable system-assigned managed identity for this hub",
              args: {
                name: "mi-system-assigned",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--mi-user-assigned",
              description:
                "Enable user-assigned managed identities for this hub. Accept space-separated list of identity resource IDs",
              args: {
                name: "mi-user-assigned",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: ["--min-tls-version", "--mintls"],
              description:
                'Specify the minimum TLS version to support for this hub. Can be set to "1.0" or "1.2". For example, minimum TLS version set to "1.2" results in clients that use a TLS version below 1.2 to be rejected',
              args: { name: "min-tls-version" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--partition-count",
              description:
                "The number of partitions of the backing Event Hub for device-to-cloud messages",
              args: { name: "partition-count" },
            },
            {
              name: ["--retention-day", "--rd"],
              description:
                "Specifies how long this IoT hub will maintain device-to-cloud events, between 1 and 7 days",
              args: { name: "retention-day" },
            },
            {
              name: "--role",
              description:
                "Role to assign to the hub's system-assigned managed identity",
              args: { name: "role" },
            },
            {
              name: "--scopes",
              description:
                "Space separated list of scopes to assign the role (--role) for the system-assigned managed identity",
              args: { name: "scopes", isOptional: true, isVariadic: true },
            },
            {
              name: "--sku",
              description:
                "Pricing tier for Azure IoT Hub. Note that only one free IoT hub instance (F1) is allowed in each subscription. Exception will be thrown if free instances exceed one",
              args: {
                name: "sku",
                suggestions: ["B1", "B2", "B3", "F1", "S1", "S2", "S3"],
              },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--unit",
              description: "Units in your IoT Hub",
              args: { name: "unit" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an IoT hub",
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
              description: "IoT Hub name",
              args: { name: "name" },
            },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "list",
          description: "List IoT hubs",
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
          name: "list-skus",
          description: "List available pricing tiers",
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
              description: "IoT Hub name",
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
          name: "manual-failover",
          description:
            "Initiate a manual failover for the IoT Hub to the geo-paired disaster recovery region",
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
              description: "IoT Hub name",
              args: { name: "name" },
            },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of an IoT hub",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub name",
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
          name: "show-quota-metrics",
          description: "Get the quota metrics for an IoT hub",
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
              description: "IoT Hub name",
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
          name: "show-stats",
          description: "Get the statistics for an IoT hub",
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
              description: "IoT Hub name",
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
          name: "update",
          description: "Update metadata for an IoT hub",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: ["--c2d-max-delivery-count", "--cdd"],
              description:
                "The number of times the IoT hub will attempt to deliver a cloud-to-device message to a device, between 1 and 100",
              args: { name: "c2d-max-delivery-count" },
            },
            {
              name: ["--c2d-ttl", "--ct"],
              description:
                "The amount of time a message is available for the device to consume before it is expired by IoT Hub, between 1 and 48 hours",
              args: { name: "c2d-ttl" },
            },
            changeReference,
            {
              name: ["--disable-device-sas", "--dds"],
              description:
                "A boolean indicating whether or not to disable all device (including Edge devices but excluding modules) scoped SAS keys for authentication",
              args: {
                name: "disable-device-sas",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--disable-local-auth", "--dla"],
              description:
                "A boolean indicating whether or not to disable IoT hub scoped SAS keys for authentication",
              args: {
                name: "disable-local-auth",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--disable-module-sas", "--dms"],
              description:
                "A boolean indicating whether or not to disable module-scoped SAS keys for authentication",
              args: {
                name: "disable-module-sas",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--fileupload-storage-container-name", "--fc"],
              description:
                "The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified",
              args: { name: "fileupload-storage-container-name" },
            },
            {
              name: ["--fileupload-storage-connectionstring", "--fcs"],
              description:
                "The connection string for the Azure Storage account to which files are uploaded",
              args: { name: "fileupload-storage-connectionstring" },
            },
            {
              name: ["--feedback-max-delivery-count", "--fd"],
              description:
                "The number of times the IoT hub attempts to deliver a message on the feedback queue, between 1 and 100",
              args: { name: "feedback-max-delivery-count" },
            },
            {
              name: ["--feedback-lock-duration", "--fld"],
              description:
                "The lock duration for the feedback queue, between 5 and 300 seconds",
              args: { name: "feedback-lock-duration" },
            },
            {
              name: ["--feedback-ttl", "--ft"],
              description:
                "The period of time for which the IoT hub will maintain the feedback for expiration or delivery of cloud-to-device messages, between 1 and 48 hours",
              args: { name: "feedback-ttl" },
            },
            {
              name: ["--fileupload-notification-lock-duration", "--fnld"],
              description:
                "The lock duration for the file upload notifications queue, between 5 and 300 seconds",
              args: { name: "fileupload-notification-lock-duration" },
            },
            {
              name: ["--fileupload-notification-max-delivery-count", "--fnd"],
              description:
                "The number of times the IoT hub will attempt to deliver a file notification message, between 1 and 100",
              args: { name: "fileupload-notification-max-delivery-count" },
            },
            {
              name: ["--fileupload-notification-ttl", "--fnt"],
              description:
                "The amount of time a file upload notification is available for the service to consume before it is expired by IoT Hub, between 1 and 48 hours",
              args: { name: "fileupload-notification-ttl" },
            },
            {
              name: ["--fileupload-notifications", "--fn"],
              description:
                "A boolean indicating whether to log information about uploaded files to the messages/servicebound/filenotifications IoT Hub endpoint",
              args: {
                name: "fileupload-notifications",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--fileupload-sas-ttl", "--fst"],
              description:
                "The amount of time a SAS URI generated by IoT Hub is valid before it expires, between 1 and 24 hours",
              args: { name: "fileupload-sas-ttl" },
            },
            {
              name: ["--fileupload-storage-auth-type", "--fsa"],
              description:
                "The authentication type for the Azure Storage account to which files are uploaded",
              args: {
                name: "fileupload-storage-auth-type",
                suggestions: ["identityBased", "keyBased"],
              },
            },
            {
              name: ["--fileupload-storage-identity", "--fsi"],
              description:
                "The managed identity to use for file upload authentication. Use '[system]' to refer to the system-assigned managed identity or a resource ID to refer to a user-assigned managed identity",
              args: { name: "fileupload-storage-identity" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--min-tls-version", "--mintls"],
              description:
                'Specify the minimum TLS version to support for this hub. Can be set to "1.0" or "1.2". For example, minimum TLS version set to "1.2" results in clients that use a TLS version below 1.2 to be rejected',
              args: { name: "min-tls-version" },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub name",
              args: { name: "name" },
            },
            {
              name: ["--retention-day", "--rd"],
              description:
                "Specifies how long this IoT hub will maintain device-to-cloud events, between 1 and 7 days",
              args: { name: "retention-day" },
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
              name: "--sku",
              description:
                "Pricing tier for Azure IoT Hub. Note that only one free IoT hub instance (F1) is allowed in each subscription. Exception will be thrown if free instances exceed one",
              args: {
                name: "sku",
                suggestions: ["B1", "B2", "B3", "F1", "S1", "S2", "S3"],
              },
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
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--unit",
              description: "Units in your IoT Hub",
              args: { name: "unit" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Wait until an operation on an IoT Hub instance is complete",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--name", "-n"],
              description: "IoT Hub name",
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
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
        },
        {
          name: "certificate",
          description: "Manage IoT Hub certificates",
          subcommands: [
            {
              name: "create",
              description: "Create/upload an Azure IoT Hub certificate",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "The path to the file containing the certificate",
                  args: { name: "path" },
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
                  name: ["--verified", "-v"],
                  description:
                    "A boolean indicating whether or not the certificate is verified",
                  args: {
                    name: "verified",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes an Azure IoT Hub certificate",
              options: [
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
              name: "generate-verification-code",
              description:
                "Generates a verification code for an Azure IoT Hub certificate",
              options: [
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
                "Lists all certificates contained within an Azure IoT Hub",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
              description:
                "Shows information about a particular Azure IoT Hub certificate",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
              description: "Update an Azure IoT Hub certificate",
              options: [
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "The path to the file containing the certificate",
                  args: { name: "path" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
                {
                  name: ["--verified", "-v"],
                  description:
                    "A boolean indicating whether or not the certificate is verified",
                  args: {
                    name: "verified",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "verify",
              description: "Verifies an Azure IoT Hub certificate",
              options: [
                {
                  name: ["--etag", "-e"],
                  description: "Entity Tag (etag) of the object",
                  args: { name: "etag" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "A friendly name for the certificate",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "The path to the file containing the certificate",
                  args: { name: "path" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
          ],
        },
        {
          name: "consumer-group",
          description: "Manage the event hub consumer groups of an IoT hub",
          subcommands: [
            {
              name: "create",
              description: "Create an event hub consumer group",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Event hub consumer group name",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--event-hub-name",
                  description: "Event hub endpoint name",
                  args: { name: "event-hub-name" },
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
              description: "Delete an event hub consumer group",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--event-hub-name",
                  description: "Event hub endpoint name",
                  args: { name: "event-hub-name" },
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Event hub consumer group name",
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
              name: "list",
              description: "List event hub consumer groups",
              options: [
                {
                  name: "--event-hub-name",
                  description: "Event hub endpoint name",
                  args: { name: "event-hub-name" },
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
              description: "Get the details for an event hub consumer group",
              options: [
                {
                  name: "--event-hub-name",
                  description: "Event hub endpoint name",
                  args: { name: "event-hub-name" },
                },
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Event hub consumer group name",
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
          ],
        },
        {
          name: "identity",
          description: "Manage identities of an Azure IoT hub",
          subcommands: [
            {
              name: "assign",
              description: "Assign managed identities to an IoT Hub",
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
                  description: "IoT Hub name",
                  args: { name: "name" },
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
                    "Role to assign to the hub's system-assigned managed identity",
                  args: { name: "role" },
                },
                {
                  name: "--scopes",
                  description:
                    "Space separated list of scopes to assign the role (--role) for the system-assigned managed identity",
                  args: { name: "scopes", isOptional: true, isVariadic: true },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--system-assigned", "--system"],
                  description:
                    "Assign a system-assigned managed identity to this hub",
                  args: {
                    name: "system-assigned",
                    suggestions: ["false", "true"],
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--user-assigned", "--user"],
                  description:
                    "Assign user-assigned managed identities to this hub. Accept space-separated list of identity resource IDs",
                  args: { name: "user-assigned", isVariadic: true },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove managed identities from an IoT Hub",
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
                  description: "IoT Hub name",
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
                {
                  name: ["--system-assigned", "--system"],
                  description:
                    "Remove a system-assigned managed identity from this hub",
                  args: {
                    name: "system-assigned",
                    suggestions: ["false", "true"],
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--user-assigned", "--user"],
                  description:
                    "Remove user-assigned managed identities from this hub. Accept space-separated list of identity resource IDs",
                  args: {
                    name: "user-assigned",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "show",
              description: "Show the identity properties of an IoT Hub",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "IoT Hub name",
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
          ],
        },
        {
          name: "message-enrichment",
          description: "Manage message enrichments for endpoints of an IoT Hub",
          subcommands: [
            {
              name: "create",
              description:
                "Create a message enrichment for chosen endpoints in your IoT Hub",
              options: [
                {
                  name: ["--endpoints", "-e"],
                  description:
                    "Endpoint(s) to apply enrichments to. Use a space-separated list for multiple endpoints",
                  args: {
                    name: "endpoints",
                    isOptional: true,
                    isVariadic: true,
                  },
                  isRequired: true,
                },
                {
                  name: ["--key", "-k"],
                  description: "The enrichment's key",
                  args: { name: "key" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "IoT Hub name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--value", "-v"],
                  description: "The enrichment's value",
                  args: { name: "value" },
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
              description:
                "Delete a message enrichment in your IoT hub (by key)",
              options: [
                {
                  name: ["--key", "-k"],
                  description: "The enrichment's key",
                  args: { name: "key" },
                  isRequired: true,
                },
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
                  description: "IoT Hub name",
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
              name: "list",
              description:
                "Get information on all message enrichments for your IoT Hub",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "IoT Hub name",
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
              name: "update",
              description:
                "Update a message enrichment in your IoT hub (by key)",
              options: [
                {
                  name: ["--endpoints", "-e"],
                  description:
                    "Endpoint(s) to apply enrichments to. Use a space-separated list for multiple endpoints",
                  args: {
                    name: "endpoints",
                    isOptional: true,
                    isVariadic: true,
                  },
                  isRequired: true,
                },
                {
                  name: ["--key", "-k"],
                  description: "The enrichment's key",
                  args: { name: "key" },
                  isRequired: true,
                },
                {
                  name: ["--value", "-v"],
                  description: "The enrichment's value",
                  args: { name: "value" },
                  isRequired: true,
                },
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
                  description: "IoT Hub name",
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
          ],
        },
        {
          name: "policy",
          description: "Manage shared access policies of an IoT hub",
          subcommands: [
            {
              name: "create",
              description: "Create a new shared access policy in an IoT hub",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Shared access policy name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--permissions",
                  description:
                    "Permissions of shared access policy. Use space-separated list for multiple permissions. Possible values: RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect",
                  args: {
                    name: "permissions",
                    isOptional: true,
                    isVariadic: true,
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
              name: "delete",
              description: "Delete a shared access policy from an IoT hub",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Shared access policy name",
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
              name: "list",
              description: "List shared access policies of an IoT hub",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
              name: "renew-key",
              description:
                "Regenerate keys of a shared access policy of an IoT hub",
              options: [
                {
                  name: ["--renew-key", "--rk"],
                  description: "Regenerate keys",
                  args: {
                    name: "renew-key",
                    suggestions: ["primary", "secondary", "swap"],
                  },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Shared access policy name",
                  args: { name: "name" },
                },
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
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the details of a shared access policy of an IoT hub",
              options: [
                {
                  name: "--hub-name",
                  description: "IoT Hub name",
                  args: { name: "hub-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Shared access policy name",
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
          ],
        },
      ],
    },
  ],
};

export default completion;
